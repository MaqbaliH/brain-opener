#!/usr/bin/env python3
"""
Veritas (Node 7) — Deterministic Completeness, Asset & Anti-AI Gatekeeper
Usage:
    python pipeline/veritas_audit.py <book-slug>
    python pipeline/veritas_audit.py --all
"""

import re
import sys
from pathlib import Path
from typing import List, Tuple

FORBIDDEN_AI_PHRASES = [
    r"\bdelve\s+into\b",
    r"\bdelves\s+into\b",
    r"\bdive\s+deep\b",
    r"\brich\s+tapestry\b",
    r"\btapestry\s+of\b",
    r"\btestament\s+to\b",
    r"\bbeacon\s+of\b",
    r"\bgame-changer\b",
    r"\bnestled\s+in\b",
    r"\bspearheading\b",
]


def audit_book(workspace_root: Path, book_slug: str) -> Tuple[bool, List[str], List[str]]:
    book_data_dir = workspace_root / "src" / "data" / "books" / book_slug
    assets_dir = workspace_root / "public" / "books" / book_slug / "assets"

    errors: List[str] = []
    notes: List[str] = []

    if not book_data_dir.exists():
        return False, [f"Book data directory missing: {book_data_dir}"], []

    index_file = book_data_dir / "index.ts"
    if not index_file.exists():
        errors.append(f"Missing index.ts in {book_data_dir}")

    shard_files = sorted(
        f for f in book_data_dir.glob("*.ts") if f.name != "index.ts"
    )
    if not shard_files:
        errors.append(f"No chapter shard files (ch*.ts) found in {book_data_dir}")
        return False, errors, notes

    # Gate 1: Chapter count & quantitative depth checks
    total_chapters = 0
    total_svgs = 0
    total_figures_referenced = 0
    missing_assets: List[str] = []
    invalid_svgs: List[str] = []
    cliche_hits: List[str] = []

    for shard in shard_files:
        content = shard.read_text(encoding="utf-8")
        chapters_in_shard = re.findall(r"chapterId\s*:\s*['\"]ch\d+['\"]", content)
        total_chapters += len(chapters_in_shard)

        # Gate 2: Disk Asset Integrity (every referenced figure file must exist)
        fig_files = re.findall(r"file\s*:\s*['\"]([^'\"]+\.(?:png|jpg|jpeg|svg|webp))['\"]", content)
        for fig in fig_files:
            total_figures_referenced += 1
            fig_path = assets_dir / fig
            if not fig_path.exists():
                missing_assets.append(f"{shard.name} -> {fig}")

        # Gate 3: SVG Blueprint Validity
        svgs = re.findall(r"svgCode\s*:\s*`([\s\S]*?)`", content)
        total_svgs += len(svgs)
        for idx, svg in enumerate(svgs, 1):
            if "<svg" not in svg or "</svg>" not in svg or "viewBox" not in svg:
                invalid_svgs.append(f"{shard.name} (diagram #{idx} missing <svg> or viewBox)")

        # Gate 4: Anti-AI Cliché Scan
        for line_no, line in enumerate(content.splitlines(), 1):
            for pat in FORBIDDEN_AI_PHRASES:
                if re.search(pat, line, re.IGNORECASE):
                    cliche_hits.append(f"{shard.name}:L{line_no} matches '{pat}'")

    # Check cover asset and totalSourceWords from index.ts
    total_source_words = 0
    if index_file.exists():
        idx_content = index_file.read_text(encoding="utf-8")
        m_cover = re.search(r"coverAsset\s*:\s*['\"]([^'\"]+)['\"]", idx_content)
        if m_cover:
            cover_file = m_cover.group(1)
            if not (assets_dir / cover_file).exists():
                missing_assets.append(f"index.ts coverAsset -> {cover_file}")
        m_words = re.search(r"totalSourceWords\s*:\s*(\d+)", idx_content)
        if m_words:
            total_source_words = int(m_words.group(1))

    # Gate 5: High-Signal Compression & Anti-Bloat Audit
    reader_prose_words = 0
    for shard in shard_files:
        content = shard.read_text(encoding="utf-8")
        for ch_part in re.split(r"(?=export const \w+\s*:\s*ChapterMastery\s*=\s*\{)", content):
            if "chapterNumber:" not in ch_part:
                continue
            reader_slice = ch_part.split("  activeRecall: {")[0]
            reader_slice = re.sub(r"svgCode\s*:\s*`[\s\S]*?`", "", reader_slice)
            for m_str in re.finditer(r"(['\"`])((?:\\.|(?!\1)[\s\S])*?)\1", reader_slice):
                val = m_str.group(2)
                if (
                    not re.match(r"^(?:arq|bvc|aien|ansd|avc|agrg|af)-", val)
                    and not val.endswith(".png")
                    and not val.startswith("/books/")
                ):
                    reader_prose_words += len(re.findall(r"\b[a-zA-Z]{2,}\b", val))

    if total_chapters == 0:
        errors.append("Gate 1 FAIL: 0 chapters found across shard files.")
    else:
        notes.append(f"Gate 1 PASS: {total_chapters} chapters verified across {len(shard_files)} shard files.")

    if missing_assets:
        errors.append(f"Gate 2 FAIL: {len(missing_assets)} missing figure/cover assets: {', '.join(missing_assets[:5])}")
    else:
        notes.append(f"Gate 2 PASS: All {total_figures_referenced} referenced figure files + cover exist on disk.")

    if invalid_svgs or total_svgs < total_chapters:
        if invalid_svgs:
            errors.append(f"Gate 3 FAIL: Invalid SVGs: {', '.join(invalid_svgs)}")
        else:
            errors.append(f"Gate 3 FAIL: Found only {total_svgs} SVGs across {total_chapters} chapters.")
    else:
        notes.append(f"Gate 3 PASS: {total_svgs} valid responsive SVG blueprints verified.")

    if cliche_hits:
        errors.append(f"Gate 4 FAIL: Forbidden AI clichés detected: {'; '.join(cliche_hits[:5])}")
    else:
        notes.append("Gate 4 PASS: 0 forbidden AI clichés detected across all chapter shards.")

    if total_source_words > 0:
        ratio = reader_prose_words / total_source_words
        avg_ch_words = reader_prose_words // max(total_chapters, 1)
        if ratio > 0.65:
            errors.append(
                f"Gate 5 FAIL: Reader prose ({reader_prose_words:,}w) is {ratio:.1%} of source book ({total_source_words:,}w), exceeding the 65% compression ceiling."
            )
        else:
            notes.append(
                f"Gate 5 PASS: High-Signal Compression verified ({reader_prose_words:,} reader words vs {total_source_words:,} source words = {ratio:.1%}, ~{avg_ch_words:,}w/ch)."
            )

    return len(errors) == 0, errors, notes


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    workspace = Path(__file__).resolve().parent.parent
    args = sys.argv[1:]
    if not args or args[0] == "--all":
        books_dir = workspace / "src" / "data" / "books"
        slugs = sorted(d.name for d in books_dir.iterdir() if d.is_dir())
    else:
        slugs = [args[0]]

    all_passed = True
    print("=" * 68)
    print("VERITAS DETERMINISTIC 4-GATE AUDIT REPORT")
    print("=" * 68)
    for slug in slugs:
        passed, errs, notes = audit_book(workspace, slug)
        status = "PASSED (ALL 4 GATES CERTIFIED)" if passed else "FAILED"
        print(f"\n[Book: {slug}] -> STATUS: {status}")
        for n in notes:
            print(f"  ✓ {n}")
        for e in errs:
            print(f"  ✗ {e}")
        if not passed:
            all_passed = False
    print("\n" + "=" * 68)
    sys.exit(0 if all_passed else 1)


if __name__ == "__main__":
    main()
