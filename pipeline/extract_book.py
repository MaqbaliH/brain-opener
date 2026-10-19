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

        # 2. Extract chapters ch01.html .. ch10.html (plus preface/afterword)
        chapter_files = sorted(
            [n for n in z.namelist() if re.search(r"ch\d+\.x?html$", n)],
            key=lambda x: int(re.search(r"ch(\d+)", x).group(1))
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


def slugify(name: str) -> str:
    base = Path(name).stem.lower()
    base = re.sub(r"\(.*?\)", "", base)
    return re.sub(r"[^a-z0-9]+", "-", base).strip("-")


if __name__ == "__main__":
    workspace = r"c:\Users\hassa\Local Sites\Brain Opener"
    if len(sys.argv) >= 2:
        book_path = sys.argv[1]
        if not os.path.isabs(book_path):
            book_path = str(Path(workspace) / book_path)
        book_slug = sys.argv[2] if len(sys.argv) >= 3 else slugify(book_path)
    else:
        book_path = r"c:\Users\hassa\Local Sites\Brain Opener\Books\AI Engineering.epub"
        book_slug = "ai-engineering"

    extract_epub(book_path, book_slug, workspace)

