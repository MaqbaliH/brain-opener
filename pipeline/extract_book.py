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
        elif tag == "figcaption" or (tag == "h6" and self._in_figure):
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
                self._last_img_src = None
            self._in_figure = False
        elif tag == self._in_heading:
            text = " ".join("".join(self._heading_buf).split())
            if text:
                self.headings.append({"level": tag, "title": text})
                self.text_chunks.append(f"\n\n### [{tag.upper()}] {text}\n")
            self._in_heading = None
        elif (tag == "figcaption" or tag == "h6") and self._in_figcaption:
            caption = " ".join("".join(self._figcaption_buf).split())
            if self._last_img_src:
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

        # 2. Extract chapters ch01.html .. ch10.html or c01.xhtml .. c22.xhtml
        chapter_files = sorted(
            [n for n in z.namelist() if re.search(r"(?:^|/)(?:ch|c)\d+\.x?html$", n)],
            key=lambda x: int(re.search(r"(?:ch|c)(\d+)", os.path.basename(x)).group(1))
        )

        for idx, ch_file in enumerate(chapter_files, start=1):
            raw_html = z.read(ch_file).decode("utf-8", errors="replace")
            parser = ChapterHTMLParser()
            parser.feed(raw_html)

            full_text = "".join(parser.text_chunks)
            full_text = re.sub(r"\n{3,}", "\n\n", full_text).strip()

            ch_title = parser.headings[0]["title"] if parser.headings else f"Chapter {idx}"
            ch_id = f"ch{idx:02d}"

            # Save full text per chapter for Axiom & Feynman nodes
            ch_text_path = out_extracted_dir / f"{ch_id}.txt"
            ch_text_path.write_text(full_text, encoding="utf-8")

            ch_entry = {
                "chapterNumber": idx,
                "chapterId": ch_id,
                "sourceFile": ch_file,
                "title": ch_title,
                "charCount": len(full_text),
                "wordCount": len(full_text.split()),
                "headings": parser.headings,
                "figures": parser.figures,
                "textFile": str(ch_text_path.relative_to(workspace_root)),
            }
            chapters_manifest.append(ch_entry)
            for fig in parser.figures:
                all_figures.append({**fig, "chapterId": ch_id, "chapterNumber": idx})

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

    # 2. Extract embedded raster figures across the PDF
    page_embedded_figures = {}
    for pno in range(len(doc)):
        imgs = doc.get_page_images(pno)
        for img_idx, img in enumerate(imgs):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            if pix.width > 120 and pix.height > 120 and pno > 0:
                if pix.n - pix.alpha > 3:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                fname = f"{prefix}_p{pno+1:03d}_fig{img_idx+1}.png"
                pix.save(str(out_public_assets / fname))
                page_embedded_figures.setdefault(pno + 1, []).append({
                    "file": fname,
                    "caption": f"Embedded figure from page {pno + 1}",
                    "alt": f"Book illustration on page {pno + 1}"
                })

    # 3. Group TOC entries by Chapter (level 1 starting with "Chapter ")
    chapters_raw = []
    current_ch = None

    for level, title, page_num in toc:
        clean_title = title.replace("\ufffd", "'").strip()
        m_ch = re.match(r"^(?:Chapter\s+(\d+)\s*[:.\-]?\s*(.*)|(\d+)\.\s+(.*))", clean_title, re.I)
        if level == 1 and m_ch:
            if current_ch:
                current_ch["endPage"] = page_num - 1
                chapters_raw.append(current_ch)
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
            # Reached Index or backmatter after last chapter
            current_ch["endPage"] = page_num - 1
            chapters_raw.append(current_ch)
            current_ch = None
        elif current_ch is not None and level >= 2:
            current_ch["headings"].append({
                "level": f"h{min(level, 4)}",
                "title": clean_title,
                "page": page_num
            })

    if current_ch is not None:
        chapters_raw.append(current_ch)

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
    else:
        extract_epub(book_path, book_slug, workspace)

