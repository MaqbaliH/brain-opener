#!/usr/bin/env python3
"""
Archon (Node 1) — Book Ingestor & Structural Cartographer
Unpacks .epub files, extracts complete chapter hierarchy (h1/h2/h3), full chapter text,
tables, and all original figures with their captions into public/books/<slug>/assets/
and pipeline/extracted/<slug>/.
"""

import json
import os
import re
import shutil
import sys
import zipfile
from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET


class ChapterHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.headings = []
        self.figures = []
        self.text_chunks = []
        self._current_tag = None
        self._in_heading = None
        self._heading_buf = []
        self._in_figure = False
        self._in_figcaption = False
        self._figcaption_buf = []
        self._last_img_src = None
        self._last_img_alt = None

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        self._current_tag = tag
        if tag == "figure":
            self._in_figure = True
        elif tag in ("h1", "h2", "h3", "h4"):
            self._in_heading = tag
            self._heading_buf = []
        elif tag == "img":
            src = attr_dict.get("src", "")
            alt = attr_dict.get("alt", "")
            self._last_img_src = os.path.basename(src)
            self._last_img_alt = alt
            if self._last_img_src and not self._in_figure and not self._last_img_src.lower().endswith(".svg"):
                self.figures.append({
                    "file": self._last_img_src,
                    "caption": alt or "Book illustration",
                    "alt": alt or "Book illustration"
                })
        elif tag == "figcaption" or (tag == "h6" and self._in_figure) or (
            tag == "p" and ("figref" in attr_dict.get("class", "") or "caption" in attr_dict.get("class", ""))
        ):
            self._in_figcaption = True
            self._figcaption_buf = []

    def handle_endtag(self, tag):
        if tag == "figure":
            if self._last_img_src:
                self.figures.append({
                    "file": self._last_img_src,
                    "caption": self._last_img_alt or "",
                    "alt": self._last_img_alt or ""
                })
            self._in_figure = False
        elif tag == self._in_heading:
            text = " ".join("".join(self._heading_buf).split())
            if text:
                self.headings.append({"level": tag, "title": text})
                self.text_chunks.append(f"\n\n### [{tag.upper()}] {text}\n")
            self._in_heading = None
        elif tag in ("figcaption", "h6", "p") and self._in_figcaption:
            caption = " ".join("".join(self._figcaption_buf).split())
            if self._last_img_src:
                if self.figures and self.figures[-1]["file"] == self._last_img_src and not self.figures[-1]["caption"].startswith("Figure"):
                    self.figures[-1]["caption"] = caption or self._last_img_alt or ""
                else:
                    self.figures.append({
                        "file": self._last_img_src,
                        "caption": caption or self._last_img_alt or "",
                        "alt": self._last_img_alt or ""
                    })
                self.text_chunks.append(f"\n[FIGURE: {self._last_img_src} | Caption: {caption}]\n")
                self._last_img_src = None
            self._in_figcaption = False
        elif tag in ("p", "li", "tr", "pre", "blockquote"):
            self.text_chunks.append("\n")

    def handle_data(self, data):
        if self._in_heading:
            self._heading_buf.append(data)
        elif self._in_figcaption:
            self._figcaption_buf.append(data)
        else:
            cleaned = data.replace("\r", " ")
            if cleaned.strip():
                self.text_chunks.append(cleaned)


def extract_epub(epub_path: str, book_slug: str, workspace_root: str):
    epub_file = Path(epub_path)
    out_extracted_dir = Path(workspace_root) / "pipeline" / "extracted" / book_slug
    out_public_assets = Path(workspace_root) / "public" / "books" / book_slug / "assets"
    out_extracted_dir.mkdir(parents=True, exist_ok=True)
    out_public_assets.mkdir(parents=True, exist_ok=True)

    chapters_manifest = []
    all_figures = []

    with zipfile.ZipFile(epub_file, "r") as z:
        # 1. Extract all image assets to public/books/<slug>/assets/
        for name in z.namelist():
            if name.lower().endswith((".png", ".jpg", ".jpeg", ".svg", ".gif")):
                fname = os.path.basename(name)
                target = out_public_assets / fname
                with z.open(name) as src, open(target, "wb") as dst:
                    shutil.copyfileobj(src, dst)

        # Ensure cover.png exists if any cover image was extracted
        if not (out_public_assets / "cover.png").exists():
            for cand in out_public_assets.iterdir():
                if "cover" in cand.stem.lower() and cand.suffix.lower() in (".jpg", ".jpeg", ".png"):
                    shutil.copyfile(cand, out_public_assets / "cover.png")
                    break
        if not (out_public_assets / "cover.png").exists():
            for cand in sorted(out_public_assets.iterdir()):
                if cand.suffix.lower() in (".jpg", ".jpeg", ".png"):
                    shutil.copyfile(cand, out_public_assets / "cover.png")
                    break

        # 2. Extract chapters: prefer explicit chXX/Chapter_X files, or fallback to OPF <spine> reading order
        chapter_files = sorted(
            [n for n in z.namelist() if re.search(r"(?:^|/)(?:ch|chapter_?)\d+\.x?html$|(?:^|/)c\d{2,}\.x?html$", n, re.I)],
            key=lambda x: int(re.search(r"(?:ch|c|chapter_?)(\d+)", os.path.basename(x), re.I).group(1))
        )

        if len(chapter_files) < 4:
            opf_files = [n for n in z.namelist() if n.lower().endswith(".opf")]
            if opf_files:
                opf_path = opf_files[0]
                opf_dir = os.path.dirname(opf_path)
                opf_root = ET.fromstring(z.read(opf_path))
                ns = {"opf": "http://www.idpf.org/2007/opf"}
                manifest_map = {}
                for item in opf_root.findall(".//opf:manifest/opf:item", ns) + opf_root.findall(".//manifest/item"):
                    iid = item.attrib.get("id", "")
                    href = item.attrib.get("href", "")
                    if iid and href:
                        full_href = f"{opf_dir}/{href}" if opf_dir and not href.startswith(opf_dir + "/") else href
                        manifest_map[iid] = full_href
                spine_files = []
                for itemref in opf_root.findall(".//opf:spine/opf:itemref", ns) + opf_root.findall(".//spine/itemref"):
                    idref = itemref.attrib.get("idref", "")
                    if idref in manifest_map and manifest_map[idref] in z.namelist():
                        spine_files.append(manifest_map[idref])
                # Check if spine has explicit "Chapter N" headings
                explicit_ch_files = []
                substantive_files = []
                for sf in spine_files:
                    raw_h = z.read(sf).decode("utf-8", errors="replace")
                    p_tmp = ChapterHTMLParser()
                    p_tmp.feed(raw_h)
                    wc_tmp = len("".join(p_tmp.text_chunks).split())
                    h0_tmp = p_tmp.headings[0]["title"].strip() if p_tmp.headings else ""
                    if re.match(r"^(?:Chapter|Part)\s+\d+", h0_tmp, re.I) or (
                        len(p_tmp.headings) > 1 and p_tmp.headings[0]["title"].strip().isdigit()
                    ):
                        explicit_ch_files.append(sf)
                    elif wc_tmp >= 700 and not re.search(
                        r"^(?:table of contents|contents|copyright|about the author|about the reviewer|index|acknowledgment|dedication|title)",
                        h0_tmp,
                        re.I,
                    ):
                        substantive_files.append(sf)
                fallback_files = explicit_ch_files if len(explicit_ch_files) >= 3 else substantive_files
                if len(fallback_files) > len(chapter_files):
                    chapter_files = fallback_files

        for idx, ch_file in enumerate(chapter_files, start=1):
            raw_html = z.read(ch_file).decode("utf-8", errors="replace")
            parser = ChapterHTMLParser()
            parser.feed(raw_html)

            full_text = "".join(parser.text_chunks)
            full_text = re.sub(r"\n{3,}", "\n\n", full_text).strip()

            if len(parser.headings) > 1 and parser.headings[0]["title"].strip().isdigit():
                ch_title = parser.headings[1]["title"]
            else:
                ch_title = parser.headings[0]["title"] if parser.headings else f"Chapter {idx}"

            word_count = len(full_text.split())
            if word_count < 400:
                continue
            if ch_title.strip().lower() in ("glossary", "index", "other books you may enjoy", "summary", "extra prompts", "acknowledgments", "notes", "bibliography", "references", "appendix"):
                continue

            real_idx = len(chapters_manifest) + 1
            ch_id = f"ch{real_idx:02d}"
            chapters_manifest.append({
                "chapterNumber": real_idx,
                "chapterId": ch_id,
                "sourceFile": ch_file,
                "title": ch_title,
                "fullText": full_text,
                "charCount": len(full_text),
                "wordCount": word_count,
                "headings": parser.headings,
                "figures": parser.figures,
            })

        # Handle Calibre multi-part split files (< 4 chapters with > 12,000 words)
        if len(chapters_manifest) < 4 and sum(c["wordCount"] for c in chapters_manifest) > 12000:
            combined_text = "\n\n".join(c["fullText"] for c in chapters_manifest)
            part_splits = re.split(r"(?=(?:\n### \[H[1234]\]\s*|\n)(?:PART\s+(?:ONE|TWO|THREE|FOUR|FIVE|\d+)|CHAPTER\s+\d+))", combined_text, flags=re.I)
            part_splits = [p.strip() for p in part_splits if len(p.split()) >= 800]
            if len(part_splits) < 4:
                words_all = combined_text.split()
                chunk_w = len(words_all) // 4
                part_splits = [" ".join(words_all[i*chunk_w : (i+1)*chunk_w if i < 3 else len(words_all)]) for i in range(4)]
            new_manifest = []
            for idx_p, p_txt in enumerate(part_splits, start=1):
                first_line = p_txt.splitlines()[0].replace("### [H1]", "").replace("### [H2]", "").replace("### [H3]", "").strip()
                new_manifest.append({
                    "chapterNumber": idx_p,
                    "chapterId": f"ch{idx_p:02d}",
                    "sourceFile": f"split_part_{idx_p}.html",
                    "title": first_line[:90] if len(first_line) < 95 else f"Part {idx_p}",
                    "fullText": p_txt,
                    "charCount": len(p_txt),
                    "wordCount": len(p_txt.split()),
                    "headings": [{"level": "h1", "title": first_line[:90]}],
                    "figures": chapters_manifest[0]["figures"] if idx_p == 1 and chapters_manifest else [],
                })
            chapters_manifest = new_manifest

        # Consolidate books with > 6 chapters into 4-6 substantive thematic modules
        if len(chapters_manifest) > 6:
            target_modules = 5 if len(chapters_manifest) >= 10 else 4
            chunk_sz = max(2, (len(chapters_manifest) + target_modules - 1) // target_modules)
            consolidated = []
            for g_idx in range(0, len(chapters_manifest), chunk_sz):
                grp = chapters_manifest[g_idx : g_idx + chunk_sz]
                mod_num = len(consolidated) + 1
                ch_id = f"ch{mod_num:02d}"
                titles = [g["title"] for g in grp if not re.match(r"^Chapter\s+\d+$", g["title"], re.I)]
                if not titles:
                    titles = [g["title"] for g in grp]
                merged_title = " / ".join(titles[:3])
                if len(titles) > 3:
                    merged_title += f" (+{len(titles)-3} more)"
                merged_text = "\n\n".join(g["fullText"] for g in grp)
                consolidated.append({
                    "chapterNumber": mod_num,
                    "chapterId": ch_id,
                    "sourceFile": grp[0]["sourceFile"],
                    "title": merged_title,
                    "fullText": merged_text,
                    "charCount": len(merged_text),
                    "wordCount": sum(g["wordCount"] for g in grp),
                    "headings": [h for g in grp for h in g["headings"]],
                    "figures": [f for g in grp for f in g["figures"]],
                })
            chapters_manifest = consolidated

        for old_txt in out_extracted_dir.glob("ch*.txt"):
            old_txt.unlink()

        final_chapters = []
        for ch_entry in chapters_manifest:
            ch_id = ch_entry["chapterId"]
            real_idx = ch_entry["chapterNumber"]
            full_text = ch_entry.pop("fullText")
            ch_text_path = out_extracted_dir / f"{ch_id}.txt"
            ch_text_path.write_text(full_text, encoding="utf-8")
            ch_entry["textFile"] = str(ch_text_path.relative_to(workspace_root))
            final_chapters.append(ch_entry)
            for fig in ch_entry["figures"]:
                all_figures.append({**fig, "chapterId": ch_id, "chapterNumber": real_idx})
        chapters_manifest = final_chapters

    manifest = {
        "bookSlug": book_slug,
        "sourcePath": str(epub_file),
        "totalChapters": len(chapters_manifest),
        "totalFigures": len(all_figures),
        "chapters": chapters_manifest,
    }

    manifest_path = out_extracted_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[Archon] Extracted {len(chapters_manifest)} chapters and {len(all_figures)} figures to {out_extracted_dir}")


def extract_pdf(pdf_path: str, book_slug: str, workspace_root: str):
    import fitz

    pdf_file = Path(pdf_path)
    out_extracted_dir = Path(workspace_root) / "pipeline" / "extracted" / book_slug
    out_public_assets = Path(workspace_root) / "public" / "books" / book_slug / "assets"
    out_extracted_dir.mkdir(parents=True, exist_ok=True)
    out_public_assets.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(str(pdf_file))
    toc = doc.get_toc()

    # 1. Extract cover image from Page 1
    if len(doc) > 0:
        cover_pix = doc[0].get_pixmap(dpi=150)
        cover_pix.save(str(out_public_assets / "cover.png"))

    prefix = "arq" if book_slug == "asking-the-right-questions" else book_slug.replace("-", "_")

    # 2. Extract embedded raster figures across the PDF (skipping recurring template icons/headers)
    xref_page_counts = {}
    for pno in range(len(doc)):
        for img in doc.get_page_images(pno):
            xref = img[0]
            xref_page_counts[xref] = xref_page_counts.get(xref, 0) + 1

    page_embedded_figures = {}
    saved_xrefs = set()
    for pno in range(1, len(doc)):
        imgs = doc.get_page_images(pno)
        for img_idx, img in enumerate(imgs):
            xref = img[0]
            if xref_page_counts.get(xref, 0) > 2 or xref in saved_xrefs:
                continue
            pix = fitz.Pixmap(doc, xref)
            if pix.colorspace is None:
                continue
            if pix.width > 160 and pix.height > 120:
                fname = f"{prefix}_p{pno+1:03d}_fig{img_idx+1}.png"
                try:
                    if pix.colorspace.n not in (1, 3) or pix.alpha:
                        pix = fitz.Pixmap(fitz.csRGB, pix)
                    pix.save(str(out_public_assets / fname))
                except Exception:
                    try:
                        pix = fitz.Pixmap(fitz.csRGB, pix)
                        pix.save(str(out_public_assets / fname))
                    except Exception:
                        continue
                saved_xrefs.add(xref)
                page_embedded_figures.setdefault(pno + 1, []).append({
                    "file": fname,
                    "caption": f"Embedded figure from page {pno + 1}",
                    "alt": f"Book illustration on page {pno + 1}"
                })

    # 3. Group TOC entries by Chapter (supports "Chapter N: Title", "N. Title", or Packt two-entry ['N', pno] + ['Title', pno])
    chapters_raw = []
    current_ch = None
    has_digit_chapters = any(lvl == 1 and t.strip().isdigit() for lvl, t, _ in toc)
    has_explicit_chapter_word = any(lvl == 1 and re.search(r"\bChapter\s+\d+", t, re.I) for lvl, t, _ in toc)

    i = 0
    while i < len(toc):
        level, title, page_num = toc[i]
        clean_title = title.replace("\ufffd", "'").strip()

        if has_digit_chapters and level == 1 and clean_title.isdigit():
            ch_num = int(clean_title)
            ch_title_clean = f"Chapter {ch_num}"
            if i + 1 < len(toc) and toc[i + 1][0] == 1 and toc[i + 1][2] == page_num:
                ch_title_clean = toc[i + 1][1].replace("\ufffd", "'").strip()
                i += 1
            if "unlock your exclusive benefits" in ch_title_clean.lower():
                if current_ch:
                    current_ch["endPage"] = page_num - 1
                    chapters_raw.append(current_ch)
                    current_ch = None
                i += 1
                continue
            if current_ch:
                current_ch["endPage"] = page_num - 1
                chapters_raw.append(current_ch)
            current_ch = {
                "chapterNumber": ch_num,
                "title": ch_title_clean,
                "fullHeading": f"Chapter {ch_num}: {ch_title_clean}",
                "startPage": page_num,
                "endPage": len(doc),
                "headings": [{"level": "h1", "title": ch_title_clean, "page": page_num}],
            }
            i += 1
            continue

        if has_explicit_chapter_word:
            m_ch = re.match(r"^(?:\d+\.\s*)?Chapter\s+(\d+)\s*[:.\-]?\s*(.*)", clean_title, re.I)
        else:
            m_ch = re.match(r"^(?:Chapter\s+(\d+)\s*[:.\-]?\s*(.*)|(\d+)(?:[:.\-]\s*|\s+)(.*))", clean_title, re.I)
        if not has_digit_chapters and level == 1 and m_ch and page_num > 0:
            if current_ch:
                current_ch["endPage"] = page_num - 1
                chapters_raw.append(current_ch)
            if has_explicit_chapter_word:
                ch_num = int(m_ch.group(1))
                ch_title_clean = (m_ch.group(2) or clean_title).strip()
            else:
                ch_num = int(m_ch.group(1) or m_ch.group(3))
                ch_title_clean = (m_ch.group(2) or m_ch.group(4) or clean_title).strip()
            current_ch = {
                "chapterNumber": ch_num,
                "title": ch_title_clean,
                "fullHeading": clean_title,
                "startPage": page_num,
                "endPage": len(doc),
                "headings": [{"level": "h1", "title": ch_title_clean, "page": page_num}],
            }
        elif level == 1 and current_ch is not None:
            if re.match(r"^(?:Part\s+\d+|Index|Other Books|Appendix)", clean_title, re.I):
                current_ch["endPage"] = page_num - 1
                if re.match(r"^(?:Index|Other Books|Appendix)", clean_title, re.I):
                    chapters_raw.append(current_ch)
                    current_ch = None
                    if re.match(r"^Part\s+\d+", clean_title, re.I) and i + 1 < len(toc) and toc[i + 1][2] == page_num:
                        i += 1
            elif has_digit_chapters:
                if clean_title not in ("Part 1", "Part 2", "Part 3", "Part 4") and not (
                    i > 0 and re.match(r"^Part\s+\d+", toc[i - 1][1].strip(), re.I) and toc[i - 1][2] == page_num
                ):
                    current_ch["headings"].append({
                        "level": "h2",
                        "title": clean_title,
                        "page": page_num
                    })
            else:
                current_ch["endPage"] = page_num - 1
                chapters_raw.append(current_ch)
                current_ch = None
        elif current_ch is not None and level >= 2:
            current_ch["headings"].append({
                "level": f"h{min(level + (1 if has_digit_chapters else 0), 4)}",
                "title": clean_title,
                "page": page_num
            })
        i += 1

    if current_ch is not None:
        chapters_raw.append(current_ch)

    if not chapters_raw:
        if book_slug == "minto-pyramid-principle":
            chapters_raw = [
                {"chapterNumber": 1, "title": "Part 1: Logic in Writing (Top-Down & Bottom-Up Pyramids, SCQA Introductions, Deduction vs. Induction)", "fullHeading": "Part 1: Logic in Writing", "startPage": 17, "endPage": 88, "headings": [{"level": "h1", "title": "Part 1: Logic in Writing", "page": 17}]},
                {"chapterNumber": 2, "title": "Part 2: Logic in Thinking (Imposing Logical Order: Time, Structure, Degree & Summarizing Grouped Ideas)", "fullHeading": "Part 2: Logic in Thinking", "startPage": 89, "endPage": 134, "headings": [{"level": "h1", "title": "Part 2: Logic in Thinking", "page": 89}]},
                {"chapterNumber": 3, "title": "Part 3: Logic in Problem Solving (Defining the Problem R1/R2 & Diagnostic Logic Trees)", "fullHeading": "Part 3: Logic in Problem Solving", "startPage": 135, "endPage": 183, "headings": [{"level": "h1", "title": "Part 3: Logic in Problem Solving", "page": 135}]},
                {"chapterNumber": 4, "title": "Part 4: Logic in Presentation (Page Hierarchy, Visual Slide Storyboarding & Image-Driven Prose)", "fullHeading": "Part 4: Logic in Presentation", "startPage": 184, "endPage": 235, "headings": [{"level": "h1", "title": "Part 4: Logic in Presentation", "page": 184}]},
            ]
        elif book_slug == "the-mckinsey-mind":
            chapters_raw = [
                {"chapterNumber": 1, "title": "Framing the Problem & Designing the Analysis (MECE Issue Trees, Initial Hypotheses & Analytical Diagnostics)", "fullHeading": "Module 1: Framing & Designing", "startPage": 19, "endPage": 67, "headings": [{"level": "h1", "title": "Framing the Problem & Designing the Analysis", "page": 19}]},
                {"chapterNumber": 2, "title": "Gathering the Data & Interpreting Results (Fact-Based Research, Interviewing, 80/20 Rule & Actionable Synthesis)", "fullHeading": "Module 2: Gathering & Interpreting", "startPage": 68, "endPage": 120, "headings": [{"level": "h1", "title": "Gathering the Data & Interpreting Results", "page": 68}]},
                {"chapterNumber": 3, "title": "Presenting Your Ideas & Managing Your Team (Structured Buy-In, Prewiring, Team Bonding & Direction)", "fullHeading": "Module 3: Presenting & Team Management", "startPage": 121, "endPage": 176, "headings": [{"level": "h1", "title": "Presenting Your Ideas & Managing Your Team", "page": 121}]},
                {"chapterNumber": 4, "title": "Managing Your Client & Managing Yourself (Client Engagement, Implementation Rigor & Sustainable Pace)", "fullHeading": "Module 4: Client & Self Management", "startPage": 177, "endPage": 222, "headings": [{"level": "h1", "title": "Managing Your Client & Managing Yourself", "page": 177}]},
            ]
        else:
            step_p = max(10, (len(doc) - 10) // 4)
            for idx_m in range(4):
                sp = 10 + idx_m * step_p
                ep = min(len(doc), sp + step_p - 1) if idx_m < 3 else len(doc)
                chapters_raw.append({
                    "chapterNumber": idx_m + 1,
                    "title": f"Part {idx_m + 1}",
                    "fullHeading": f"Part {idx_m + 1}",
                    "startPage": sp,
                    "endPage": ep,
                    "headings": [{"level": "h1", "title": f"Part {idx_m + 1}", "page": sp}],
                })

    # Consolidate PDFs with > 6 chapters into 4-5 balanced modules
    if len(chapters_raw) > 6:
        target_mods = 5 if len(chapters_raw) >= 10 else 4
        chunk_sz = max(2, (len(chapters_raw) + target_mods - 1) // target_mods)
        consolidated = []
        for g_idx in range(0, len(chapters_raw), chunk_sz):
            group = chapters_raw[g_idx:g_idx + chunk_sz]
            mod_num = len(consolidated) + 1
            titles = [g["title"] for g in group]
            merged_title = " / ".join(titles[:3])
            if len(titles) > 3:
                merged_title += f" (+{len(titles)-3} more)"
            merged_headings = []
            for g in group:
                merged_headings.extend(g["headings"])
            consolidated.append({
                "chapterNumber": mod_num,
                "title": merged_title,
                "fullHeading": f"Module {mod_num}: {merged_title}",
                "startPage": group[0]["startPage"],
                "endPage": group[-1]["endPage"],
                "headings": merged_headings,
            })
        chapters_raw = consolidated

    for old_txt in out_extracted_dir.glob("ch*.txt"):
        old_txt.unlink()

    chapters_manifest = []
    all_figures = []

    for ch in chapters_raw:
        idx = ch["chapterNumber"]
        ch_id = f"ch{idx:02d}"
        start_p = ch["startPage"]
        end_p = max(start_p, ch["endPage"])

        pages_text = []
        ch_figures = []

        # Render chapter opening page plate as a visual artifact for Prism
        opener_fname = f"{prefix}_{ch_id}_plate.png"
        opener_pix = doc[start_p - 1].get_pixmap(dpi=130)
        opener_pix.save(str(out_public_assets / opener_fname))
        ch_figures.append({
            "file": opener_fname,
            "caption": f"Chapter {idx} Opening Blueprint: {ch['title']} (Page {start_p})",
            "alt": f"Chapter {idx} opening page ({ch['title']})"
        })

        for pno in range(start_p, end_p + 1):
            page_txt = doc[pno - 1].get_text()
            pages_text.append(f"\n--- [PAGE {pno}] ---\n{page_txt}")
            if pno in page_embedded_figures:
                ch_figures.extend(page_embedded_figures[pno])

        full_text = "\n".join(pages_text).strip()
        ch_text_path = out_extracted_dir / f"{ch_id}.txt"
        ch_text_path.write_text(full_text, encoding="utf-8")

        ch_entry = {
            "chapterNumber": idx,
            "chapterId": ch_id,
            "sourceFile": f"pages_{start_p}_{end_p}.pdf",
            "title": ch["title"],
            "startPage": start_p,
            "endPage": end_p,
            "charCount": len(full_text),
            "wordCount": len(full_text.split()),
            "headings": [{"level": h["level"], "title": h["title"]} for h in ch["headings"]],
            "figures": ch_figures,
            "textFile": str(ch_text_path.relative_to(workspace_root)),
        }
        chapters_manifest.append(ch_entry)
        for fig in ch_figures:
            all_figures.append({**fig, "chapterId": ch_id, "chapterNumber": idx})

    manifest = {
        "bookSlug": book_slug,
        "sourcePath": str(pdf_file),
        "totalChapters": len(chapters_manifest),
        "totalFigures": len(all_figures),
        "chapters": chapters_manifest,
    }

    manifest_path = out_extracted_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[Archon] Extracted {len(chapters_manifest)} PDF chapters and {len(all_figures)} figures to {out_extracted_dir}")


def extract_azw3(azw3_path: str, book_slug: str, workspace_root: str):
    import struct

    azw3_file = Path(azw3_path)
    out_extracted_dir = Path(workspace_root) / "pipeline" / "extracted" / book_slug
    out_public_assets = Path(workspace_root) / "public" / "books" / book_slug / "assets"
    out_extracted_dir.mkdir(parents=True, exist_ok=True)
    out_public_assets.mkdir(parents=True, exist_ok=True)

    data = azw3_file.read_bytes()
    nrec = struct.unpack(">H", data[76:78])[0]
    offs = [struct.unpack(">I", data[78 + 8 * i : 82 + 8 * i])[0] for i in range(nrec)] + [len(data)]
    r0 = data[offs[0] : offs[1]]
    rec_cnt = struct.unpack(">H", r0[8:10])[0]
    extra_flags = struct.unpack(">H", r0[242:244])[0] if len(r0) >= 244 else 0

    def lz77_decompress(b: bytes) -> bytes:
        out = bytearray()
        i = 0
        n = len(b)
        while i < n:
            c = b[i]
            i += 1
            if c == 0 or (9 <= c <= 0x7F):
                out.append(c)
            elif 1 <= c <= 8:
                out.extend(b[i : i + c])
                i += c
            elif 0x80 <= c <= 0xBF:
                if i >= n:
                    break
                d = ((c << 8) | b[i]) & 0x3FFF
                i += 1
                dist = d >> 3
                ln = (d & 7) + 3
                for _ in range(ln):
                    if 0 < dist <= len(out):
                        out.append(out[-dist])
            else:
                out.append(32)
                out.append(c ^ 0x80)
        return bytes(out)

    raw = bytearray()
    for r in range(1, rec_cnt + 1):
        chunk = data[offs[r] : offs[r + 1]]
        fl = extra_flags >> 1
        while fl:
            if fl & 1 and chunk:
                s = 0
                p = len(chunk) - 1
                while p >= 0:
                    v = chunk[p]
                    s = (s << 7) | (v & 0x7F)
                    p -= 1
                    if v & 0x80:
                        break
                if s <= len(chunk):
                    chunk = chunk[:-s]
            fl >>= 1
        if (extra_flags & 1) and chunk:
            trail = (chunk[-1] & 3) + 1
            if trail <= len(chunk):
                chunk = chunk[:-trail]
        raw.extend(lz77_decompress(chunk))

    # Extract embedded image records (JPEG/PNG)
    img_idx = 0
    for r in range(rec_cnt + 1, nrec):
        rec = data[offs[r] : offs[r + 1]]
        if rec.startswith(b"\xff\xd8\xff") or rec.startswith(b"\x89PNG"):
            img_idx += 1
            ext = ".png" if rec.startswith(b"\x89PNG") else ".jpg"
            fname = f"img_{img_idx:03d}{ext}"
            (out_public_assets / fname).write_bytes(rec)
            if img_idx == 1 and not (out_public_assets / "cover.png").exists():
                (out_public_assets / "cover.png").write_bytes(rec)

    html_stream = bytes(raw).decode("utf-8", errors="replace")
    # Rewrite kindle:embed:XXXX image references to img_XXX.jpg
    def _replace_kindle_embed(m):
        idx_hex = int(m.group(1), 16)
        return f'src="img_{idx_hex:03d}.jpg"'

    html_stream = re.sub(r'src="kindle:embed:([0-9A-Fa-f]+)[^"]*"', _replace_kindle_embed, html_stream)
    parts = [p for p in re.split(r"<\?xml[^>]*\?>", html_stream) if p.strip()]

    raw_parts = []
    for p in parts:
        parser = ChapterHTMLParser()
        parser.feed(p)
        full_text = "".join(parser.text_chunks)
        full_text = re.sub(r"\n{3,}", "\n\n", full_text).strip()
        wc = len(full_text.split())
        h0 = parser.headings[0]["title"].strip() if parser.headings else ""
        if wc < 300 or re.search(
            r"^(?:copyright|disclaimer|table of contents|contents|dedication|acknowledgment)",
            h0,
            re.I,
        ):
            continue
        raw_parts.append({
            "title": h0 or f"Section {len(raw_parts)+1}",
            "text": full_text,
            "wordCount": wc,
            "headings": parser.headings,
            "figures": parser.figures,
        })

    # If micro-chapters average <1,200 words, consolidate into 3-4 substantive modules
    total_wc = sum(rp["wordCount"] for rp in raw_parts)
    if len(raw_parts) > 4 and (total_wc / len(raw_parts)) < 1200:
        chunk_sz = max(3, (len(raw_parts) + 2) // 3)
        grouped = []
        for g_idx in range(0, len(raw_parts), chunk_sz):
            grp = raw_parts[g_idx : g_idx + chunk_sz]
            grouped.append({
                "title": " / ".join(x["title"] for x in grp),
                "text": "\n\n".join(x["text"] for x in grp),
                "wordCount": sum(x["wordCount"] for x in grp),
                "headings": [h for x in grp for h in x["headings"]],
                "figures": [f for x in grp for f in x["figures"]],
            })
        raw_parts = grouped

    # Clean up any stale chXX.txt files before writing consolidated chapters
    for old_txt in out_extracted_dir.glob("ch*.txt"):
        old_txt.unlink()

    chapters_manifest = []
    all_figures = []
    for real_idx, rp in enumerate(raw_parts, start=1):
        ch_id = f"ch{real_idx:02d}"
        ch_text_path = out_extracted_dir / f"{ch_id}.txt"
        ch_text_path.write_text(rp["text"], encoding="utf-8")
        chapters_manifest.append({
            "chapterNumber": real_idx,
            "chapterId": ch_id,
            "sourceFile": f"part_{real_idx}.xhtml",
            "title": rp["title"],
            "charCount": len(rp["text"]),
            "wordCount": rp["wordCount"],
            "headings": rp["headings"],
            "figures": rp["figures"],
            "textFile": str(ch_text_path.relative_to(workspace_root)),
        })
        for fig in rp["figures"]:
            all_figures.append({**fig, "chapterId": ch_id, "chapterNumber": real_idx})

    manifest = {
        "bookSlug": book_slug,
        "sourcePath": str(azw3_file),
        "totalChapters": len(chapters_manifest),
        "totalFigures": len(all_figures),
        "chapters": chapters_manifest,
    }
    manifest_path = out_extracted_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[Archon] Extracted {len(chapters_manifest)} AZW3 chapters to {out_extracted_dir}")


def slugify(name: str) -> str:
    base = Path(name).stem.lower()
    base = re.sub(r"\(.*?\)", "", base)
    return re.sub(r"[^a-z0-9]+", "-", base).strip("-")


if __name__ == "__main__":
    workspace = str(Path(__file__).resolve().parent.parent)
    if len(sys.argv) >= 2:
        book_path = sys.argv[1]
        if not os.path.isabs(book_path):
            book_path = str(Path(workspace) / book_path)
        book_slug = sys.argv[2] if len(sys.argv) >= 3 else slugify(book_path)
    else:
        book_path = str(Path(workspace) / "Books" / "AI Engineering.epub")
        book_slug = "ai-engineering"

    if book_path.lower().endswith(".pdf"):
        extract_pdf(book_path, book_slug, workspace)
    elif book_path.lower().endswith((".azw3", ".mobi")):
        extract_azw3(book_path, book_slug, workspace)
    else:
        extract_epub(book_path, book_slug, workspace)

