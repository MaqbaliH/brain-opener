import React, { useState, useMemo, useRef } from 'react';
import { BookMasteryPackage } from '../types/book';
import {
  VAULT_BOOK_CATALOG,
  BookDomainCategory,
} from '../data/books/registry';
import {
  BookOpen,
  Share2,
  Zap,
  Network,
  ArrowRight,
  ShieldCheck,
  Library,
  CheckCircle2,
  Search,
  LayoutGrid,
  ListFilter,
  Copy,
  Check,
  Sparkles,
  Clock,
  Layers,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';

interface LibraryOverviewStudioProps {
  book: BookMasteryPackage;
  allBooks: BookMasteryPackage[];
  completedChapters: Record<string, boolean>;
  onSelectBook: (bookSlug: string) => void;
  onOpenChapter: (chapterNum: number) => void;
  onOpenRecallForChapter: (chapterNum: number) => void;
  onNavigateView: (view: 'reader' | 'graph' | 'recall' | 'orchestrator') => void;
}

const DOMAIN_CATEGORIES: ('All' | BookDomainCategory)[] = [
  'All',
  'AI & Agents',
  'Systems & Architecture',
  'Data & ML',
  'Product & Design',
  'Cognitive & Mastery',
];

export const LibraryOverviewStudio: React.FC<LibraryOverviewStudioProps> = ({
  book,
  allBooks,
  completedChapters,
  onSelectBook,
  onOpenChapter,
  onOpenRecallForChapter,
  onNavigateView,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<'All' | BookDomainCategory>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'queued'>('all');
  const [shelfLayout, setShelfLayout] = useState<'grid' | 'table'>('grid');
  const [chapterLayout, setChapterLayout] = useState<'cards' | 'compact'>('cards');
  const [chapterSearch, setChapterSearch] = useState<string>('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [showFullVault, setShowFullVault] = useState<boolean>(false);

  const curriculumRef = useRef<HTMLDivElement>(null);

  // Global Telemetry Across All Synthesized Books
  const globalStats = useMemo(() => {
    let chapters = 0;
    let words = 0;
    let figures = 0;
    let svgs = 0;
    let quizzes = 0;
    let flashcards = 0;
    let mentalModels = 0;

    for (const b of allBooks) {
      chapters += b.totalChapters;
      words += b.totalSourceWords;
      figures += b.totalFiguresExtracted;
      for (const ch of b.chapters) {
        svgs += ch.customDiagrams.length;
        quizzes += ch.activeRecall.quiz.length;
        flashcards += ch.activeRecall.flashcards.length;
        mentalModels += ch.mentalModels.length;
      }
    }

    return {
      publishedCount: allBooks.length,
      vaultTotalCount: VAULT_BOOK_CATALOG.length,
      chapters,
      words,
      figures,
      svgs,
      quizzes,
      flashcards,
      mentalModels,
    };
  }, [allBooks]);

  // Helper to get completion stats for any published book
  const getBookCompletion = (b: BookMasteryPackage) => {
    const done = b.chapters.filter(
      (c) => completedChapters[`${b.bookSlug}:ch${c.chapterNumber}`]
    ).length;
    const pct = b.totalChapters > 0 ? Math.round((done / b.totalChapters) * 100) : 0;
    const nextChapter =
      b.chapters.find(
        (c) => !completedChapters[`${b.bookSlug}:ch${c.chapterNumber}`]
      )?.chapterNumber || 1;
    return { done, total: b.totalChapters, pct, nextChapter };
  };

  // Map bookSlug -> category from VAULT_BOOK_CATALOG
  const slugToCategory = useMemo(() => {
    const map: Record<string, BookDomainCategory> = {};
    for (const item of VAULT_BOOK_CATALOG) {
      map[item.bookSlug] = item.category;
    }
    return map;
  }, []);

  // Filtered Published Books
  const filteredPublishedBooks = useMemo(() => {
    return allBooks.filter((b) => {
      if (statusFilter === 'queued') return false;
      const cat = slugToCategory[b.bookSlug] || 'AI & Agents';
      if (selectedDomain !== 'All' && cat !== selectedDomain) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inBookMeta =
        b.title.toLowerCase().includes(q) ||
        b.subtitle.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q);
      const inChapters = b.chapters.some(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.mentalModels.some((m) => m.name.toLowerCase().includes(q))
      );
      return inBookMeta || inChapters;
    });
  }, [allBooks, statusFilter, selectedDomain, searchQuery, slugToCategory]);

  // Filtered Queued Vault Books
  const filteredQueuedBooks = useMemo(() => {
    return VAULT_BOOK_CATALOG.filter((item) => {
      if (item.status !== 'queued') return false;
      if (statusFilter === 'published') return false;
      if (selectedDomain !== 'All' && item.category !== selectedDomain) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.fileName.toLowerCase().includes(q)
      );
    });
  }, [statusFilter, selectedDomain, searchQuery]);

  // Domain counts across entire catalog
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = { All: VAULT_BOOK_CATALOG.length };
    for (const item of VAULT_BOOK_CATALOG) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered Chapters of the currently active book
  const filteredActiveChapters = useMemo(() => {
    if (!chapterSearch.trim()) return book.chapters;
    const q = chapterSearch.toLowerCase();
    return book.chapters.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        ch.executiveThesis.toLowerCase().includes(q) ||
        ch.mentalModels.some((m) => m.name.toLowerCase().includes(q)) ||
        ch.deepSections.some((s) => s.title.toLowerCase().includes(q))
    );
  }, [book.chapters, chapterSearch]);

  const handleCopyPrompt = (fileName: string, slug: string) => {
    const cmd = `go with:\n"C:\\Users\\hassa\\Local Sites\\Brain Opener\\Books\\${fileName}"`;
    navigator.clipboard.writeText(cmd);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2200);
  };

  const handleInspectBook = (slug: string) => {
    onSelectBook(slug);
    setTimeout(() => {
      curriculumRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const activeBookStats = useMemo(() => {
    const mentalModels = book.chapters.reduce((a, c) => a + c.mentalModels.length, 0);
    const deepSections = book.chapters.reduce((a, c) => a + c.deepSections.length, 0);
    const customSvgs = book.chapters.reduce((a, c) => a + c.customDiagrams.length, 0);
    const quizzes = book.chapters.reduce((a, c) => a + c.activeRecall.quiz.length, 0);
    const completion = getBookCompletion(book);
    return { mentalModels, deepSections, customSvgs, quizzes, completion };
  }, [book, completedChapters]);

  const visibleQueuedBooks = showFullVault
    ? filteredQueuedBooks
    : filteredQueuedBooks.slice(0, 12);

  return (
    <div className="space-y-12 pb-20 animate-fade-up">
      {/* =====================================================================
          1. SWISS ARCHITECTURAL LIBRARY HEADER & GLOBAL TELEMETRY
         ===================================================================== */}
      <section className="border-2 border-[#111827] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left 7 Cols: Bierut Headline & Editorial Deck */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-[11px] font-mono-code uppercase tracking-widest text-[#EA580C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Swiss-Grid First-Principles Library • Zero-Shallow-Summary Mandate</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white leading-[0.96] tracking-tight">
              MASTER EVERY BOOK FROM FIRST PRINCIPLES.
            </h1>
            <p className="font-editorial text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-[58ch] leading-relaxed">
              Every volume on this shelf is deconstructed by a 9-agent DAG into core mechanisms,
              mathematical intuitions, interactive physics labs, annotated figures, and active
              recall studios.
            </p>
          </div>

          {/* Right 5 Cols: Aggregate Library Telemetry Matrix */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="text-[10px] font-mono-code uppercase text-slate-500">
                Synthesized Shelf
              </div>
              <div className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mt-0.5">
                {globalStats.publishedCount}{' '}
                <span className="text-lg text-slate-400 font-mono-code">
                  / {globalStats.vaultTotalCount} Vault
                </span>
              </div>
              <div className="text-[11px] font-mono-code text-emerald-600 dark:text-emerald-400 mt-0.5">
                100% Veritas Audited
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="text-[10px] font-mono-code uppercase text-slate-500">
                Deep Curriculum
              </div>
              <div className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mt-0.5">
                {globalStats.chapters} Ch
              </div>
              <div className="text-[11px] font-mono-code text-[#EA580C] mt-0.5">
                {(globalStats.words / 1000).toFixed(1)}k Words Deconstructed
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="text-[10px] font-mono-code uppercase text-slate-500">
                Visual Architecture
              </div>
              <div className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mt-0.5">
                {globalStats.figures + globalStats.svgs}
              </div>
              <div className="text-[11px] font-mono-code text-[#2563EB] mt-0.5">
                {globalStats.figures} Book Figs + {globalStats.svgs} SVGs
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="text-[10px] font-mono-code uppercase text-slate-500">
                Active Recall Bank
              </div>
              <div className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mt-0.5">
                {globalStats.quizzes + globalStats.flashcards}
              </div>
              <div className="text-[11px] font-mono-code text-amber-600 dark:text-amber-400 mt-0.5">
                {globalStats.quizzes} Quizzes • {globalStats.flashcards} Cards
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            UNIFIED SEARCH, DOMAIN FILTER & LAYOUT CONTROL BAR
           =================================================================== */}
        <div className="mt-8 pt-6 border-t border-[#E5E0D8] dark:border-slate-800 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 48 books by title, author, chapter topic, or mental model..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 text-xs font-mono-code text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono-code text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Status Filter + Layout Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
                {[
                  { id: 'all', label: `All (${VAULT_BOOK_CATALOG.length})` },
                  { id: 'published', label: `Mastered (${allBooks.length})` },
                  {
                    id: 'queued',
                    label: `Vault Queue (${VAULT_BOOK_CATALOG.length - allBooks.length})`,
                  },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setStatusFilter(st.id as any)}
                    className={`px-3 py-1.5 text-xs font-mono-code cursor-pointer transition ${
                      statusFilter === st.id
                        ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              <div className="inline-flex border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
                <button
                  onClick={() => setShelfLayout('grid')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono-code cursor-pointer ${
                    shelfLayout === 'grid'
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                      : 'text-slate-500'
                  }`}
                  title="Editorial Shelf Cards"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Shelf Grid</span>
                </button>
                <button
                  onClick={() => setShelfLayout('table')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono-code cursor-pointer ${
                    shelfLayout === 'table'
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                      : 'text-slate-500'
                  }`}
                  title="Compact Swiss Index Table"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Compact Index</span>
                </button>
              </div>
            </div>
          </div>

          {/* Domain Category Filter Ribbon */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[10px] font-mono-code uppercase text-slate-400 mr-1 shrink-0">
              Domains:
            </span>
            {DOMAIN_CATEGORIES.map((dom) => {
              const active = selectedDomain === dom;
              return (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1.5 text-xs font-mono-code shrink-0 border transition cursor-pointer ${
                    active
                      ? 'border-[#EA580C] bg-[#EA580C] text-white font-bold'
                      : 'border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:border-slate-400'
                  }`}
                >
                  {dom} ({domainCounts[dom] || 0})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. SYNTHESIZED MASTERY BOOKSHELF (SCALES CLEANLY TO DOZENS OF BOOKS)
         ===================================================================== */}
      {filteredPublishedBooks.length > 0 && (
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C]">
                01 • Active Synthesized Shelf ({filteredPublishedBooks.length} Volumes)
              </span>
              <h2 className="font-display text-3xl text-slate-900 dark:text-white">
                Complete Interactive Mastery Editions
              </h2>
            </div>
            <span className="text-xs font-mono-code text-slate-500">
              Select a volume to inspect its curriculum or jump directly into reading
            </span>
          </div>

          {shelfLayout === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublishedBooks.map((b, idx) => {
                const isSelected = b.bookSlug === book.bookSlug;
                const comp = getBookCompletion(b);
                const category = slugToCategory[b.bookSlug] || 'AI & Agents';
                const totalModels = b.chapters.reduce(
                  (acc, c) => acc + c.mentalModels.length,
                  0
                );
                const totalQuizzes = b.chapters.reduce(
                  (acc, c) => acc + c.activeRecall.quiz.length,
                  0
                );

                return (
                  <article
                    key={b.bookSlug}
                    onClick={() => onSelectBook(b.bookSlug)}
                    className={`kinetic-card group border-2 p-6 flex flex-col justify-between gap-5 cursor-pointer transition ${
                      isSelected
                        ? 'border-[#111827] dark:border-[#EA580C] bg-white dark:bg-slate-900 shadow-md'
                        : 'border-[#E5E0D8] dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 hover:border-slate-400'
                    }`}
                  >
                    {/* Top Row: Cover + Header Meta */}
                    <div className="flex gap-5 items-start">
                      <div className="relative shrink-0">
                        <img
                          src={`${import.meta.env.BASE_URL}books/${b.bookSlug}/assets/${b.coverAsset}`}
                          alt={b.title}
                          className="w-24 sm:w-28 h-36 sm:h-40 object-cover border border-[#111827] dark:border-slate-700 shadow-sm"
                        />
                        <span className="absolute -top-2 -left-2 px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-[10px] font-mono-code font-bold">
                          VOL 0{idx + 1}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-2 py-0.5 text-[10px] font-mono-code uppercase bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-[#EA580C] font-bold">
                            {category}
                          </span>
                          {isSelected && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono-code uppercase px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                              <CheckCircle2 className="w-3 h-3" /> Selected Volume
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-3xl text-slate-900 dark:text-white leading-none group-hover:text-[#EA580C] transition">
                          {b.title}
                        </h3>
                        <p className="text-xs font-editorial text-slate-600 dark:text-slate-300 line-clamp-1">
                          {b.subtitle}
                        </p>
                        <div className="text-xs font-mono-code text-slate-500">
                          By <strong className="text-slate-800 dark:text-slate-200">{b.author}</strong> •{' '}
                          {b.publisher} ({b.publicationYear})
                        </div>

                        {/* Compact 4-Metric Strip */}
                        <div className="pt-2 grid grid-cols-4 gap-2 text-center">
                          <div className="p-1.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
                            <div className="font-display text-lg text-slate-900 dark:text-white leading-none">
                              {b.totalChapters}
                            </div>
                            <div className="text-[9px] font-mono-code uppercase text-slate-500">
                              Chapters
                            </div>
                          </div>
                          <div className="p-1.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
                            <div className="font-display text-lg text-slate-900 dark:text-white leading-none">
                              {totalModels}
                            </div>
                            <div className="text-[9px] font-mono-code uppercase text-slate-500">
                              Models
                            </div>
                          </div>
                          <div className="p-1.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
                            <div className="font-display text-lg text-slate-900 dark:text-white leading-none">
                              {b.totalFiguresExtracted}
                            </div>
                            <div className="text-[9px] font-mono-code uppercase text-slate-500">
                              Figures
                            </div>
                          </div>
                          <div className="p-1.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
                            <div className="font-display text-lg text-slate-900 dark:text-white leading-none">
                              {totalQuizzes}
                            </div>
                            <div className="text-[9px] font-mono-code uppercase text-slate-500">
                              Quizzes
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Core Promise Excerpt */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 border-t border-[#E5E0D8] dark:border-slate-800 pt-3">
                      {b.corePromise}
                    </p>

                    {/* Progress Bar + Direct Actions */}
                    <div className="space-y-3 pt-1">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono-code">
                          <span className="text-slate-500">
                            Reading Progress: {comp.done}/{comp.total} Chapters Mastered
                          </span>
                          <strong className="text-emerald-600">{comp.pct}%</strong>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-emerald-600 transition-all duration-500"
                            style={{ width: `${Math.max(comp.pct, 4)}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectBook(b.bookSlug);
                            onOpenChapter(comp.nextChapter);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase font-bold cursor-pointer transition"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>
                            {comp.done > 0
                              ? `Resume Ch ${comp.nextChapter}`
                              : 'Start Ch 1 Deep Dive'}
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleInspectBook(b.bookSlug);
                          }}
                          className="px-3 py-2 border border-[#111827] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-mono-code uppercase hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition"
                        >
                          Curriculum ({b.totalChapters})
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectBook(b.bookSlug);
                            onNavigateView('graph');
                          }}
                          className="p-2 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] text-slate-600 dark:text-slate-300 cursor-pointer"
                          title="Explore Concept Knowledge Graph"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectBook(b.bookSlug);
                            onNavigateView('recall');
                          }}
                          className="p-2 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] text-slate-600 dark:text-slate-300 cursor-pointer"
                          title="Active Recall & Diagnostic Quizzes"
                        >
                          <Zap className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* COMPACT SWISS INDEX TABLE FOR RAPID MULTI-BOOK SCANNING */
            <div className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 text-[11px] font-mono-code uppercase text-slate-500">
                    <th className="py-3 px-4">Vol</th>
                    <th className="py-3 px-4">Title & Author</th>
                    <th className="py-3 px-4">Domain</th>
                    <th className="py-3 px-4">Scale</th>
                    <th className="py-3 px-4">Mastery</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] dark:divide-slate-800 text-xs">
                  {filteredPublishedBooks.map((b, idx) => {
                    const comp = getBookCompletion(b);
                    const isSelected = b.bookSlug === book.bookSlug;
                    return (
                      <tr
                        key={b.bookSlug}
                        onClick={() => onSelectBook(b.bookSlug)}
                        className={`cursor-pointer transition ${
                          isSelected
                            ? 'bg-orange-50/50 dark:bg-slate-800/70'
                            : 'hover:bg-[#FAF8F5] dark:hover:bg-slate-950'
                        }`}
                      >
                        <td className="py-3.5 px-4 font-mono-code font-bold text-[#EA580C]">
                          0{idx + 1}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {b.title}: {b.subtitle}
                          </div>
                          <div className="text-[11px] font-mono-code text-slate-500">
                            {b.author} • {b.publisher} ({b.publicationYear})
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono-code">
                          <span className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700">
                            {slugToCategory[b.bookSlug] || 'AI & Agents'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono-code text-slate-600 dark:text-slate-400">
                          {b.totalChapters} Ch • {(b.totalSourceWords / 1000).toFixed(0)}k words •{' '}
                          {b.totalFiguresExtracted} figs
                        </td>
                        <td className="py-3.5 px-4 font-mono-code">
                          <span className="text-emerald-600 font-bold">
                            {comp.done}/{comp.total} ({comp.pct}%)
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectBook(b.bookSlug);
                              onOpenChapter(comp.nextChapter);
                            }}
                            className="px-3 py-1 bg-[#EA580C] text-white font-mono-code uppercase text-[11px] font-bold cursor-pointer"
                          >
                            Read Ch {comp.nextChapter}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* =====================================================================
          3. ACTIVE BOOK CURRICULUM INSPECTOR (FOCUSED MONOGRAPH + CHAPTERS)
         ===================================================================== */}
      {statusFilter !== 'queued' && (
        <section
          ref={curriculumRef}
          className="border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 md:p-10 space-y-8 scroll-mt-20"
        >
          {/* Focused Active Book Monograph Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E0D8] dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <img
                src={`${import.meta.env.BASE_URL}books/${book.bookSlug}/assets/${book.coverAsset}`}
                alt={book.title}
                className="w-20 h-28 object-cover border border-[#111827] dark:border-slate-700 shrink-0"
              />
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-[10px] font-mono-code uppercase font-bold">
                    Focused Curriculum Inspector
                  </span>
                  <span className="text-xs font-mono-code text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {book.totalChapters} Chapters • {book.totalSourceWords.toLocaleString()} Words •{' '}
                    {activeBookStats.deepSections} Deep Sections
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white leading-none">
                  {book.title}: <span className="text-slate-500">{book.subtitle}</span>
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                  {book.architecturalOverview}
                </p>
              </div>
            </div>

            {/* Studio Launchers for Focused Book */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => onOpenChapter(activeBookStats.completion.nextChapter)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase font-bold cursor-pointer transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open Ch {activeBookStats.completion.nextChapter}</span>
              </button>
              <button
                onClick={() => onNavigateView('graph')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#111827] dark:bg-slate-800 text-white text-xs font-mono-code uppercase cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Concept Graph</span>
              </button>
              <button
                onClick={() => onNavigateView('recall')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[#E5E0D8] dark:border-slate-700 text-xs font-mono-code uppercase cursor-pointer hover:border-[#EA580C]"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Active Recall ({activeBookStats.quizzes})</span>
              </button>
            </div>
          </div>

          {/* Chapter Filter & View Mode Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={chapterSearch}
                onChange={(e) => setChapterSearch(e.target.value)}
                placeholder={`Filter ${book.totalChapters} chapters in ${book.title}...`}
                className="w-full pl-9 pr-3 py-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 text-xs font-mono-code focus:outline-none focus:border-[#EA580C]"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono-code text-slate-500">
                Chapter Display:
              </span>
              <div className="inline-flex border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
                <button
                  onClick={() => setChapterLayout('cards')}
                  className={`px-2.5 py-1 text-xs font-mono-code cursor-pointer ${
                    chapterLayout === 'cards'
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                      : 'text-slate-500'
                  }`}
                >
                  Editorial Cards
                </button>
                <button
                  onClick={() => setChapterLayout('compact')}
                  className={`px-2.5 py-1 text-xs font-mono-code cursor-pointer ${
                    chapterLayout === 'compact'
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                      : 'text-slate-500'
                  }`}
                >
                  Syllabus Table
                </button>
              </div>
            </div>
          </div>

          {/* Chapter Curriculum Display */}
          {chapterLayout === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredActiveChapters.map((ch) => {
                const isDone =
                  completedChapters[`${book.bookSlug}:ch${ch.chapterNumber}`];
                return (
                  <div
                    key={`${book.bookSlug}-${ch.chapterId}`}
                    onClick={() => onOpenChapter(ch.chapterNumber)}
                    className="kinetic-card group border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] bg-[#FAF8F5]/60 dark:bg-slate-950/60 p-5 flex flex-col justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono-code">
                        <span
                          className={`px-2 py-0.5 font-bold transition ${
                            isDone
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#111827] dark:bg-slate-800 group-hover:bg-[#EA580C] text-white'
                          }`}
                        >
                          CH {String(ch.chapterNumber).padStart(2, '0')} {isDone ? '✓' : ''}
                        </span>
                        <span className="text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {ch.readingTimeMinutes}m •{' '}
                          {(ch.sourceWordCount / 1000).toFixed(1)}k words
                        </span>
                      </div>

                      <h3 className="font-display text-2xl text-slate-900 dark:text-white group-hover:text-[#EA580C] transition leading-tight">
                        {ch.title.replace(/^Chapter \d+\.\s*/, '')}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {ch.executiveThesis}
                      </p>

                      {/* Mental Model Tags */}
                      <div className="pt-1 flex flex-wrap gap-1">
                        {ch.mentalModels.slice(0, 3).map((mm) => (
                          <span
                            key={mm.id}
                            className="px-1.5 py-0.5 text-[10px] font-mono-code bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 text-slate-700 dark:text-slate-300 truncate max-w-[210px]"
                          >
                            ★ {mm.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E5E0D8] dark:border-slate-800 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                      <span>
                        {ch.deepSections.length} Sections • {ch.customDiagrams.length} SVGs
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenRecallForChapter(ch.chapterNumber);
                          }}
                          className="px-2 py-0.5 border border-[#E5E0D8] dark:border-slate-700 hover:border-[#EA580C] text-slate-700 dark:text-slate-300"
                          title="Jump to Chapter Quiz"
                        >
                          Quiz
                        </button>
                        <span className="text-[#EA580C] font-bold inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Read <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="border border-[#E5E0D8] dark:border-slate-800 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 text-[11px] font-mono-code uppercase text-slate-500">
                    <th className="py-2.5 px-4">Ch</th>
                    <th className="py-2.5 px-4">Chapter Title & Subtitle</th>
                    <th className="py-2.5 px-4">Core Mental Models</th>
                    <th className="py-2.5 px-4">Depth</th>
                    <th className="py-2.5 px-4 text-right">Launch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] dark:divide-slate-800 text-xs">
                  {filteredActiveChapters.map((ch) => {
                    const isDone =
                      completedChapters[`${book.bookSlug}:ch${ch.chapterNumber}`];
                    return (
                      <tr
                        key={ch.chapterId}
                        onClick={() => onOpenChapter(ch.chapterNumber)}
                        className="hover:bg-[#FAF8F5] dark:hover:bg-slate-950 cursor-pointer"
                      >
                        <td className="py-3 px-4 font-mono-code font-bold text-[#EA580C]">
                          {String(ch.chapterNumber).padStart(2, '0')} {isDone ? '✓' : ''}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {ch.title.replace(/^Chapter \d+\.\s*/, '')}
                          </div>
                          <div className="text-[11px] text-slate-500">{ch.subtitle}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {ch.mentalModels.map((m) => (
                              <span
                                key={m.id}
                                className="px-1.5 py-0.5 text-[10px] font-mono-code bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700"
                              >
                                {m.name}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono-code text-slate-500">
                          {ch.deepSections.length} sec • {ch.readingTimeMinutes}m
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-[#EA580C] font-mono-code font-bold">
                            Open →
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* =====================================================================
          4. COMPLETE WORKSPACE VAULT CATALOG (46 QUEUED BOOKS BY DOMAIN)
         ===================================================================== */}
      {filteredQueuedBooks.length > 0 && (
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <Library className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>
                  02 • Workspace Reading Vault (/Books Directory • {filteredQueuedBooks.length}{' '}
                  Queued Volumes)
                </span>
              </div>
              <h2 className="font-display text-3xl text-slate-900 dark:text-white mt-0.5">
                Queued for 9-Agent Synthesis
              </h2>
            </div>

            <button
              onClick={() => setShowFullVault(!showFullVault)}
              className="px-3.5 py-1.5 border border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono-code uppercase cursor-pointer hover:border-[#EA580C]"
            >
              {showFullVault
                ? 'Show Compact Preview (12)'
                : `Show All ${filteredQueuedBooks.length} Queued Books`}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {visibleQueuedBooks.map((item) => {
              const isCopied = copiedSlug === item.bookSlug;
              return (
                <div
                  key={item.bookSlug}
                  className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between gap-3 hover:border-slate-400 transition"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2 text-[10px] font-mono-code">
                      <span className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-slate-600 dark:text-slate-300 uppercase">
                        {item.category}
                      </span>
                      <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold">
                        {item.format}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-slate-900 dark:text-white leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono-code text-slate-500 truncate">
                      {item.author}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#E5E0D8] dark:border-slate-800 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono-code text-slate-400 truncate max-w-[140px]">
                      {item.fileName}
                    </span>
                    <button
                      onClick={() => handleCopyPrompt(item.fileName, item.bookSlug)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono-code uppercase font-bold border cursor-pointer transition shrink-0 ${
                        isCopied
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:border-[#EA580C] hover:text-[#EA580C]'
                      }`}
                      title="Copy command to synthesize this book next"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copy Cmd
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
