import React, { useState, useMemo, useRef } from 'react';
import {
  BookMasteryPackage,
  CognitiveZoomLevel,
  RecentBookSession,
} from '../types/book';
import {
  VAULT_BOOK_CATALOG,
  BookDomainCategory,
} from '../data/books/registry';
import {
  BookOpen,
  Share2,
  Zap,
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
  Bookmark,
  History,
  Play,
  Cpu,
  Database,
  Brain,
  Compass,
  Terminal,
  ArrowUpDown,
} from 'lucide-react';

interface LibraryOverviewStudioProps {
  book: BookMasteryPackage;
  allBooks: BookMasteryPackage[];
  completedChapters: Record<string, boolean>;
  bookLastChapters: Record<string, number>;
  recentSessions: RecentBookSession[];
  pinnedBooks: string[];
  cognitiveZoom: CognitiveZoomLevel;
  onSelectBook: (bookSlug: string) => void;
  onOpenChapter: (chapterNum: number) => void;
  onOpenBookChapter: (bookSlug: string, chapterNum: number) => void;
  onOpenRecallForChapter: (chapterNum: number) => void;
  onTogglePinBook: (bookSlug: string) => void;
  onNavigateView: (view: 'reader' | 'graph' | 'recall' | 'orchestrator') => void;
}

const DOMAIN_CATEGORIES: ('All' | BookDomainCategory)[] = [
  'All',
  'Cognitive & Mastery',
  'AI & Agents',
  'Systems & Architecture',
  'Data & ML',
  'Product & Design',
];

const DOMAIN_META: Record<
  BookDomainCategory,
  {
    code: string;
    tagline: string;
    accentText: string;
    accentBorder: string;
    accentBg: string;
    icon: React.FC<{ className?: string }>;
  }
> = {
  'Cognitive & Mastery': {
    code: 'DOM-01',
    tagline: 'Critical thinking, Minto pyramid logic, deep focus & mental models',
    accentText: 'text-emerald-700 dark:text-emerald-400',
    accentBorder: 'border-emerald-600/40',
    accentBg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    icon: Brain,
  },
  'AI & Agents': {
    code: 'DOM-02',
    tagline: 'Foundation models, multi-agent DAGs, context & prompt engineering',
    accentText: 'text-[#EA580C]',
    accentBorder: 'border-[#EA580C]/40',
    accentBg: 'bg-orange-50/70 dark:bg-orange-950/30',
    icon: Cpu,
  },
  'Systems & Architecture': {
    code: 'DOM-03',
    tagline: 'Distributed data systems, cloud-native patterns & runtime scale',
    accentText: 'text-blue-700 dark:text-blue-400',
    accentBorder: 'border-blue-600/40',
    accentBg: 'bg-blue-50/70 dark:bg-blue-950/30',
    icon: Terminal,
  },
  'Data & ML': {
    code: 'DOM-04',
    tagline: 'Statistical inference, exploratory data analysis & quantitative ML',
    accentText: 'text-amber-700 dark:text-amber-400',
    accentBorder: 'border-amber-600/40',
    accentBg: 'bg-amber-50/70 dark:bg-amber-950/30',
    icon: Database,
  },
  'Product & Design': {
    code: 'DOM-05',
    tagline: 'AI UX frameworks, strategic copywriting, persuasion & brand systems',
    accentText: 'text-purple-700 dark:text-purple-400',
    accentBorder: 'border-purple-600/40',
    accentBg: 'bg-purple-50/70 dark:bg-purple-950/30',
    icon: Compass,
  },
};

type ShelfViewMode = 'categories' | 'grid' | 'table';
type BookSortMode = 'recent' | 'progress' | 'title' | 'chapters';

export const LibraryOverviewStudio: React.FC<LibraryOverviewStudioProps> = ({
  book,
  allBooks,
  completedChapters,
  bookLastChapters,
  recentSessions,
  pinnedBooks,
  cognitiveZoom,
  onSelectBook,
  onOpenChapter,
  onOpenBookChapter,
  onOpenRecallForChapter,
  onTogglePinBook,
  onNavigateView,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<'All' | BookDomainCategory>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'queued'>('all');
  const [shelfLayout, setShelfLayout] = useState<ShelfViewMode>('categories');
  const [sortBy, setSortBy] = useState<BookSortMode>('recent');
  const [chapterLayout, setChapterLayout] = useState<'cards' | 'compact'>('cards');
  const [chapterSearch, setChapterSearch] = useState<string>('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [showFullVault, setShowFullVault] = useState<boolean>(false);
  const [expandedCategoryVaults, setExpandedCategoryVaults] = useState<
    Record<string, boolean>
  >({});

  const curriculumRef = useRef<HTMLDivElement>(null);

  // Map bookSlug -> category from VAULT_BOOK_CATALOG
  const slugToCategory = useMemo(() => {
    const map: Record<string, BookDomainCategory> = {};
    for (const item of VAULT_BOOK_CATALOG) {
      map[item.bookSlug] = item.category;
    }
    return map;
  }, []);

  // Helper to get completion & resume chapter stats for any published book
  const getBookCompletion = (b: BookMasteryPackage) => {
    const done = b.chapters.filter(
      (c) => completedChapters[`${b.bookSlug}:ch${c.chapterNumber}`]
    ).length;
    const pct = b.totalChapters > 0 ? Math.round((done / b.totalChapters) * 100) : 0;
    const firstUnmastered =
      b.chapters.find(
        (c) => !completedChapters[`${b.bookSlug}:ch${c.chapterNumber}`]
      )?.chapterNumber || 1;
    const lastOpened = bookLastChapters[b.bookSlug];
    const resumeChapter =
      lastOpened && lastOpened >= 1 && lastOpened <= b.totalChapters
        ? lastOpened
        : firstUnmastered;
    return {
      done,
      total: b.totalChapters,
      pct,
      nextChapter: firstUnmastered,
      resumeChapter,
      hasLastOpened: Boolean(lastOpened),
    };
  };

  // Determine the Primary "Continue Reading" Book & Chapter
  const resumeSessionData = useMemo(() => {
    const recentValid = recentSessions.find((s) =>
      allBooks.some((b) => b.bookSlug === s.bookSlug)
    );
    const targetBook = recentValid
      ? allBooks.find((b) => b.bookSlug === recentValid.bookSlug) || book
      : book;
    const comp = getBookCompletion(targetBook);
    const targetChNum = recentValid?.chapterNumber || comp.resumeChapter;
    const targetChapter =
      targetBook.chapters.find((c) => c.chapterNumber === targetChNum) ||
      targetBook.chapters[0];
    const domain = slugToCategory[targetBook.bookSlug] || 'Cognitive & Mastery';

    // Format relative time if available
    let timeLabel = 'Ready to Resume';
    if (recentValid?.updatedAt) {
      const diffMin = Math.max(0, Math.floor((Date.now() - recentValid.updatedAt) / 60000));
      if (diffMin < 1) timeLabel = 'Opened just now';
      else if (diffMin < 60) timeLabel = `Opened ${diffMin}m ago`;
      else if (diffMin < 1440) timeLabel = `Opened ${Math.floor(diffMin / 60)}h ago`;
      else timeLabel = `Opened ${Math.floor(diffMin / 1440)}d ago`;
    }

    return {
      book: targetBook,
      chapter: targetChapter,
      comp,
      domain,
      timeLabel,
      hasHistory: Boolean(recentValid),
    };
  }, [recentSessions, allBooks, book, completedChapters, bookLastChapters, slugToCategory]);

  // Global Telemetry Across All Synthesized Books
  const globalStats = useMemo(() => {
    let chapters = 0;
    let words = 0;
    let figures = 0;
    let svgs = 0;
    let quizzes = 0;
    let flashcards = 0;
    let mentalModels = 0;
    let masteredChapters = 0;

    for (const b of allBooks) {
      chapters += b.totalChapters;
      words += b.totalSourceWords;
      figures += b.totalFiguresExtracted;
      for (const ch of b.chapters) {
        svgs += ch.customDiagrams.length;
        quizzes += ch.activeRecall.quiz.length;
        flashcards += ch.activeRecall.flashcards.length;
        mentalModels += ch.mentalModels.length;
        if (completedChapters[`${b.bookSlug}:ch${ch.chapterNumber}`]) {
          masteredChapters += 1;
        }
      }
    }

    return {
      publishedCount: allBooks.length,
      vaultTotalCount: VAULT_BOOK_CATALOG.length,
      chapters,
      masteredChapters,
      words,
      figures,
      svgs,
      quizzes,
      flashcards,
      mentalModels,
    };
  }, [allBooks, completedChapters]);

  // Domain telemetry (published count, queued count, mastered chapters)
  const domainTelemetry = useMemo(() => {
    const map: Record<
      BookDomainCategory,
      {
        publishedBooks: BookMasteryPackage[];
        queuedBooks: typeof VAULT_BOOK_CATALOG;
        totalVault: number;
        totalChapters: number;
        masteredChapters: number;
      }
    > = {
      'Cognitive & Mastery': {
        publishedBooks: [],
        queuedBooks: [],
        totalVault: 0,
        totalChapters: 0,
        masteredChapters: 0,
      },
      'AI & Agents': {
        publishedBooks: [],
        queuedBooks: [],
        totalVault: 0,
        totalChapters: 0,
        masteredChapters: 0,
      },
      'Systems & Architecture': {
        publishedBooks: [],
        queuedBooks: [],
        totalVault: 0,
        totalChapters: 0,
        masteredChapters: 0,
      },
      'Data & ML': {
        publishedBooks: [],
        queuedBooks: [],
        totalVault: 0,
        totalChapters: 0,
        masteredChapters: 0,
      },
      'Product & Design': {
        publishedBooks: [],
        queuedBooks: [],
        totalVault: 0,
        totalChapters: 0,
        masteredChapters: 0,
      },
    };

    for (const item of VAULT_BOOK_CATALOG) {
      const bucket = map[item.category];
      if (bucket) {
        bucket.totalVault += 1;
        if (item.status === 'queued') {
          bucket.queuedBooks.push(item);
        }
      }
    }

    for (const b of allBooks) {
      const cat = slugToCategory[b.bookSlug] || 'AI & Agents';
      const bucket = map[cat];
      if (bucket) {
        bucket.publishedBooks.push(b);
        bucket.totalChapters += b.totalChapters;
        bucket.masteredChapters += b.chapters.filter(
          (c) => completedChapters[`${b.bookSlug}:ch${c.chapterNumber}`]
        ).length;
      }
    }

    return map;
  }, [allBooks, completedChapters, slugToCategory]);

  // Filtered & Sorted Published Books
  const filteredPublishedBooks = useMemo(() => {
    const filtered = allBooks.filter((b) => {
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

    return [...filtered].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'chapters') {
        return b.totalChapters - a.totalChapters;
      }
      if (sortBy === 'progress') {
        return getBookCompletion(b).pct - getBookCompletion(a).pct;
      }
      // Default: 'recent' (books in recentSessions first, then pinned, then default order)
      const aRecIdx = recentSessions.findIndex((s) => s.bookSlug === a.bookSlug);
      const bRecIdx = recentSessions.findIndex((s) => s.bookSlug === b.bookSlug);
      if (aRecIdx !== -1 && bRecIdx !== -1) return aRecIdx - bRecIdx;
      if (aRecIdx !== -1) return -1;
      if (bRecIdx !== -1) return 1;
      const aPin = pinnedBooks.includes(a.bookSlug) ? 1 : 0;
      const bPin = pinnedBooks.includes(b.bookSlug) ? 1 : 0;
      return bPin - aPin;
    });
  }, [
    allBooks,
    statusFilter,
    selectedDomain,
    searchQuery,
    slugToCategory,
    sortBy,
    recentSessions,
    pinnedBooks,
    completedChapters,
  ]);

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
    if (statusFilter === 'queued') {
      setStatusFilter('all');
    }
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
  }, [book, completedChapters, bookLastChapters]);

  const visibleQueuedBooks = showFullVault
    ? filteredQueuedBooks
    : filteredQueuedBooks.slice(0, 12);

  // Reusable Renderer for a Published Book Card
  const renderPublishedBookCard = (b: BookMasteryPackage, badgeLabel?: string) => {
    const isSelected = b.bookSlug === book.bookSlug;
    const isPinned = pinnedBooks.includes(b.bookSlug);
    const comp = getBookCompletion(b);
    const category = slugToCategory[b.bookSlug] || 'AI & Agents';
    const totalModels = b.chapters.reduce((acc, c) => acc + c.mentalModels.length, 0);
    const totalQuizzes = b.chapters.reduce(
      (acc, c) => acc + c.activeRecall.quiz.length,
      0
    );
    const resumeChObj =
      b.chapters.find((c) => c.chapterNumber === comp.resumeChapter) || b.chapters[0];

    return (
      <article
        key={b.bookSlug}
        onClick={() => onSelectBook(b.bookSlug)}
        className={`kinetic-card group border-2 p-6 flex flex-col justify-between gap-5 cursor-pointer transition ${
          isSelected
            ? 'border-[#111827] dark:border-[#EA580C] bg-white dark:bg-slate-900 shadow-md'
            : 'border-[#E5E0D8] dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 hover:border-slate-400'
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
            {badgeLabel && (
              <span className="absolute -top-2 -left-2 px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-[10px] font-mono-code font-bold">
                {badgeLabel}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <span className="px-2 py-0.5 text-[10px] font-mono-code uppercase bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-[#EA580C] font-bold">
                {category}
              </span>

              <div className="flex items-center gap-1.5">
                {isSelected && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono-code uppercase px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                    <CheckCircle2 className="w-3 h-3" /> Active
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTogglePinBook(b.bookSlug);
                  }}
                  className={`p-1 border text-[10px] font-mono-code cursor-pointer transition ${
                    isPinned
                      ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-amber-700 dark:text-amber-300 font-bold'
                      : 'border-[#E5E0D8] dark:border-slate-700 text-slate-400 hover:text-slate-800 dark:hover:text-white'
                  }`}
                  title={isPinned ? 'Pinned to Study Desk' : 'Pin to Study Desk'}
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
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

        {/* Last Opened / Next Chapter Bookmark Bar */}
        <div className="px-3 py-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 flex items-center justify-between gap-2 text-xs font-mono-code">
          <div className="truncate text-slate-600 dark:text-slate-300">
            <span className="text-[#EA580C] font-bold mr-1.5">
              {comp.hasLastOpened ? 'LAST OPENED:' : 'UP NEXT:'}
            </span>
            <span>
              Ch {comp.resumeChapter} — {resumeChObj.title.replace(/^Chapter \d+\.\s*/, '')}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 shrink-0">
            {resumeChObj.readingTimeMinutes}m
          </span>
        </div>

        {/* Progress Bar + Direct Actions */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono-code">
              <span className="text-slate-500">
                Mastery: {comp.done}/{comp.total} Chapters
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
                onOpenBookChapter(b.bookSlug, comp.resumeChapter);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase font-bold cursor-pointer transition"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {comp.hasLastOpened || comp.done > 0
                  ? `Resume Ch ${comp.resumeChapter}`
                  : 'Start Ch 1'}
              </span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInspectBook(b.bookSlug);
              }}
              className="px-3 py-2 border border-[#111827] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-mono-code uppercase hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition"
            >
              Syllabus ({b.totalChapters})
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
  };

  return (
    <div className="space-y-10 pb-20 animate-fade-up">
      {/* =====================================================================
          1. PRISM RESUME COCKPIT & RECENTLY OPENED / PINNED STUDY DESK
         ===================================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left 7 Cols: Active Study Session ("Resume Last Opened Book") */}
        <div className="lg:col-span-7 border-2 border-[#111827] dark:border-[#EA580C] bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="space-y-4">
            {/* Top Status Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#EA580C] font-bold">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Continue Reading • Last Opened Session</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono-code">
                <span className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-slate-600 dark:text-slate-300">
                  {resumeSessionData.timeLabel}
                </span>
                <span className="px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white uppercase font-bold">
                  {cognitiveZoom === 'brief'
                    ? '⚡ 60s Brief'
                    : cognitiveZoom === 'playbook'
                    ? '🧭 5m Playbook'
                    : '🔬 Deep Mode'}
                </span>
              </div>
            </div>

            {/* Book Cover + Active Chapter Focus */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <img
                src={`${import.meta.env.BASE_URL}books/${resumeSessionData.book.bookSlug}/assets/${resumeSessionData.book.coverAsset}`}
                alt={resumeSessionData.book.title}
                onClick={() =>
                  onOpenBookChapter(
                    resumeSessionData.book.bookSlug,
                    resumeSessionData.chapter.chapterNumber
                  )
                }
                className="w-24 sm:w-28 h-36 sm:h-40 object-cover border-2 border-[#111827] dark:border-slate-700 shadow-md shrink-0 cursor-pointer hover:opacity-90 transition"
              />

              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-code">
                  <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-950/50 border border-[#EA580C]/40 text-[#EA580C] font-bold uppercase">
                    {resumeSessionData.domain}
                  </span>
                  <span className="text-slate-500">
                    {resumeSessionData.book.title} ({resumeSessionData.book.author})
                  </span>
                </div>

                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                  Chapter {String(resumeSessionData.chapter.chapterNumber).padStart(2, '0')} of{' '}
                  {resumeSessionData.book.totalChapters} •{' '}
                  {resumeSessionData.chapter.readingTimeMinutes} min read
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white leading-[0.98]">
                  {resumeSessionData.chapter.title.replace(/^Chapter \d+\.\s*/, '')}
                </h2>

                <p className="text-xs sm:text-sm font-editorial text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {resumeSessionData.chapter.executiveThesis}
                </p>
              </div>
            </div>

            {/* Interactive Chapter Stepper Strip (1-Click Jump to Any Chapter in Active Book) */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono-code">
                <span className="uppercase text-slate-500">
                  Interactive Chapter Stepper (Click Any Chapter to Open):
                </span>
                <span className="text-emerald-600 font-bold">
                  {resumeSessionData.comp.done}/{resumeSessionData.comp.total} Mastered (
                  {resumeSessionData.comp.pct}%)
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {resumeSessionData.book.chapters.map((ch) => {
                  const isCurrent =
                    ch.chapterNumber === resumeSessionData.chapter.chapterNumber;
                  const isMastered =
                    completedChapters[
                      `${resumeSessionData.book.bookSlug}:ch${ch.chapterNumber}`
                    ];
                  return (
                    <button
                      key={ch.chapterId}
                      onClick={() =>
                        onOpenBookChapter(
                          resumeSessionData.book.bookSlug,
                          ch.chapterNumber
                        )
                      }
                      title={`Ch ${ch.chapterNumber}: ${ch.title}`}
                      className={`px-2 py-1 text-[11px] font-mono-code cursor-pointer transition border ${
                        isCurrent
                          ? 'bg-[#EA580C] border-[#EA580C] text-white font-bold'
                          : isMastered
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold'
                          : 'bg-[#FAF8F5] dark:bg-slate-950 border-[#E5E0D8] dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#EA580C]'
                      }`}
                    >
                      {String(ch.chapterNumber).padStart(2, '0')}
                      {isMastered ? '✓' : ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Primary Resume Action Bar */}
          <div className="pt-4 border-t border-[#E5E0D8] dark:border-slate-800 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() =>
                onOpenBookChapter(
                  resumeSessionData.book.bookSlug,
                  resumeSessionData.chapter.chapterNumber
                )
              }
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs sm:text-sm font-mono-code uppercase font-bold cursor-pointer transition shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>
                Resume Ch {resumeSessionData.chapter.chapterNumber}:{' '}
                {resumeSessionData.chapter.title
                  .replace(/^Chapter \d+\.\s*/, '')
                  .slice(0, 26)}
                {resumeSessionData.chapter.title.replace(/^Chapter \d+\.\s*/, '').length >
                26
                  ? '…'
                  : ''}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onSelectBook(resumeSessionData.book.bookSlug);
                onOpenRecallForChapter(resumeSessionData.chapter.chapterNumber);
              }}
              className="px-3.5 py-3 border border-[#111827] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 hover:border-[#EA580C] text-xs font-mono-code uppercase font-bold cursor-pointer transition inline-flex items-center gap-1.5"
              title="Test Active Recall on This Chapter"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Ch {resumeSessionData.chapter.chapterNumber} Quiz</span>
            </button>

            <button
              onClick={() => handleInspectBook(resumeSessionData.book.bookSlug)}
              className="px-3.5 py-3 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#111827] dark:hover:border-slate-600 text-xs font-mono-code uppercase cursor-pointer transition"
            >
              Full Syllabus
            </button>
          </div>
        </div>

        {/* Right 5 Cols: Recently Opened Books + Pinned Study Queue + Library Telemetry */}
        <div className="lg:col-span-5 border-2 border-[#111827] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                <History className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Quick Switch • Active & Pinned Shelf</span>
              </div>
              <span className="text-[11px] font-mono-code text-slate-500">
                {allBooks.length} Synthesized • {VAULT_BOOK_CATALOG.length} Vault
              </span>
            </div>

            {/* Quick-Resume List of All Synthesized / Recently Opened Books */}
            <div className="space-y-2">
              {allBooks.map((b) => {
                const comp = getBookCompletion(b);
                const isCurrent = b.bookSlug === resumeSessionData.book.bookSlug;
                const isPinned = pinnedBooks.includes(b.bookSlug);
                const domain = slugToCategory[b.bookSlug] || 'AI & Agents';

                return (
                  <div
                    key={b.bookSlug}
                    onClick={() => onOpenBookChapter(b.bookSlug, comp.resumeChapter)}
                    className={`p-3 border flex items-center justify-between gap-3 cursor-pointer transition ${
                      isCurrent
                        ? 'border-[#EA580C] bg-orange-50/40 dark:bg-slate-800/80'
                        : 'border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={`${import.meta.env.BASE_URL}books/${b.bookSlug}/assets/${b.coverAsset}`}
                        alt={b.title}
                        className="w-10 h-14 object-cover border border-[#111827] dark:border-slate-700 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono-code uppercase text-[#EA580C] font-bold">
                            {domain}
                          </span>
                          {isPinned && (
                            <span className="text-[10px] font-mono-code text-amber-600 dark:text-amber-400">
                              ★ Pinned
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {b.title}
                        </div>
                        <div className="text-[11px] font-mono-code text-slate-500">
                          {comp.done}/{comp.total} Mastered ({comp.pct}%) • Resume Ch{' '}
                          {comp.resumeChapter}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookChapter(b.bookSlug, comp.resumeChapter);
                      }}
                      className="px-2.5 py-1.5 bg-[#111827] dark:bg-[#EA580C] hover:bg-[#EA580C] text-white text-[11px] font-mono-code uppercase font-bold shrink-0 cursor-pointer transition"
                    >
                      Ch {comp.resumeChapter} →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact 4-Metric Global PRISM Telemetry Strip */}
          <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#E5E0D8] dark:border-slate-800 text-center">
            <div className="p-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="font-display text-xl text-slate-900 dark:text-white leading-none">
                {globalStats.publishedCount}/{globalStats.vaultTotalCount}
              </div>
              <div className="text-[9px] font-mono-code uppercase text-slate-500 mt-0.5">
                Books
              </div>
            </div>
            <div className="p-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="font-display text-xl text-emerald-600 leading-none">
                {globalStats.masteredChapters}/{globalStats.chapters}
              </div>
              <div className="text-[9px] font-mono-code uppercase text-slate-500 mt-0.5">
                Ch Mastered
              </div>
            </div>
            <div className="p-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="font-display text-xl text-slate-900 dark:text-white leading-none">
                {globalStats.figures + globalStats.svgs}
              </div>
              <div className="text-[9px] font-mono-code uppercase text-slate-500 mt-0.5">
                Figs & SVGs
              </div>
            </div>
            <div className="p-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="font-display text-xl text-amber-600 dark:text-amber-400 leading-none">
                {globalStats.quizzes + globalStats.flashcards}
              </div>
              <div className="text-[9px] font-mono-code uppercase text-slate-500 mt-0.5">
                Recall Items
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. 5-DOMAIN ARCHITECTURAL CATEGORY BENTO NAVIGATOR
         ===================================================================== */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>PRISM Knowledge Taxonomy • 5 Core Domains</span>
            </div>
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">
              Browse Library by Domain Category
            </h2>
          </div>
          {selectedDomain !== 'All' && (
            <button
              onClick={() => setSelectedDomain('All')}
              className="text-xs font-mono-code text-[#EA580C] underline cursor-pointer"
            >
              Reset Filter • Show All 5 Domains ({VAULT_BOOK_CATALOG.length} Books)
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {(Object.keys(DOMAIN_META) as BookDomainCategory[]).map((dom) => {
            const meta = DOMAIN_META[dom];
            const stats = domainTelemetry[dom];
            const Icon = meta.icon;
            const isSelected = selectedDomain === dom;
            const domPct =
              stats.totalChapters > 0
                ? Math.round((stats.masteredChapters / stats.totalChapters) * 100)
                : 0;

            return (
              <button
                key={dom}
                onClick={() =>
                  setSelectedDomain((prev) => (prev === dom ? 'All' : dom))
                }
                className={`text-left p-4 border-2 transition cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'border-[#EA580C] bg-white dark:bg-slate-900 shadow-sm'
                    : 'border-[#E5E0D8] dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 hover:border-slate-400'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono-code uppercase text-slate-400 font-bold">
                      {meta.code}
                    </span>
                    <Icon className={`w-4 h-4 ${meta.accentText}`} />
                  </div>
                  <div className="font-display text-2xl text-slate-900 dark:text-white leading-tight">
                    {dom}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                    {meta.tagline}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#E5E0D8] dark:border-slate-800 w-full">
                  <div className="flex items-center justify-between text-[10px] font-mono-code">
                    <span
                      className={
                        stats.publishedBooks.length > 0
                          ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                          : 'text-slate-400'
                      }
                    >
                      {stats.publishedBooks.length} Active
                    </span>
                    <span className="text-slate-500">
                      {stats.queuedBooks.length} Queued ({stats.totalVault} Total)
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-[#EA580C] transition-all"
                      style={{
                        width:
                          stats.publishedBooks.length > 0
                            ? `${Math.max(domPct, 12)}%`
                            : '0%',
                      }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          3. UNIFIED SEARCH, SORT & SHELF LAYOUT COMMAND BAR
         ===================================================================== */}
      <section className="border-2 border-[#111827] dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${VAULT_BOOK_CATALOG.length} books by title, author, category, chapter, or mental model...`}
              className="w-full pl-10 pr-16 py-2.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 text-xs font-mono-code text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
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

          {/* Status Filter + Sort + Shelf View Mode */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Filter */}
            <div className="inline-flex border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
              {[
                { id: 'all', label: `All (${VAULT_BOOK_CATALOG.length})` },
                { id: 'published', label: `Synthesized (${allBooks.length})` },
                {
                  id: 'queued',
                  label: `Vault Queue (${VAULT_BOOK_CATALOG.length - allBooks.length})`,
                },
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setStatusFilter(st.id as any)}
                  className={`px-2.5 py-1.5 text-xs font-mono-code cursor-pointer transition ${
                    statusFilter === st.id
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Sort Order */}
            <div className="inline-flex items-center gap-1 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 px-2.5 py-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#EA580C]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as BookSortMode)}
                className="bg-transparent text-xs font-mono-code text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
                title="Sort Books By"
              >
                <option value="recent">Sort: Recently Opened</option>
                <option value="progress">Sort: Mastery %</option>
                <option value="title">Sort: Title (A–Z)</option>
                <option value="chapters">Sort: Chapter Count</option>
              </select>
            </div>

            {/* Shelf Layout Mode Switcher */}
            <div className="inline-flex border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
              <button
                onClick={() => setShelfLayout('categories')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono-code cursor-pointer ${
                  shelfLayout === 'categories'
                    ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
                    : 'text-slate-500'
                }`}
                title="Group Books by Domain Category Shelves"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Category Shelves</span>
              </button>
              <button
                onClick={() => setShelfLayout('grid')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono-code cursor-pointer ${
                  shelfLayout === 'grid'
                    ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
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
                    ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
                    : 'text-slate-500'
                }`}
                title="Compact Swiss Index Table"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Index Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Domain Filter Pill Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-[#E5E0D8] dark:border-slate-800">
          <span className="text-[10px] font-mono-code uppercase text-slate-400 mr-1 shrink-0">
            Filter Domain:
          </span>
          {DOMAIN_CATEGORIES.map((dom) => {
            const active = selectedDomain === dom;
            const count =
              dom === 'All'
                ? VAULT_BOOK_CATALOG.length
                : domainTelemetry[dom]?.totalVault || 0;
            return (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1 text-xs font-mono-code shrink-0 border transition cursor-pointer ${
                  active
                    ? 'border-[#EA580C] bg-[#EA580C] text-white font-bold'
                    : 'border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:border-slate-400'
                }`}
              >
                {dom} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          4. MULTI-BOOK LIBRARY SHELVES (CATEGORY SHELVES / GRID / INDEX TABLE)
         ===================================================================== */}
      {shelfLayout === 'categories' && statusFilter !== 'queued' ? (
        <div className="space-y-10">
          {(Object.keys(DOMAIN_META) as BookDomainCategory[])
            .filter((dom) => selectedDomain === 'All' || selectedDomain === dom)
            .map((dom) => {
              const meta = DOMAIN_META[dom];
              const Icon = meta.icon;
              const domPublished = filteredPublishedBooks.filter(
                (b) => (slugToCategory[b.bookSlug] || 'AI & Agents') === dom
              );
              const domQueued = filteredQueuedBooks.filter(
                (q) => q.category === dom
              );

              if (domPublished.length === 0 && domQueued.length === 0) return null;

              const isVaultExpanded = Boolean(expandedCategoryVaults[dom]);
              const previewQueued = isVaultExpanded
                ? domQueued
                : domQueued.slice(0, 4);

              return (
                <section
                  key={dom}
                  className="border-2 border-[#E5E0D8] dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-5 sm:p-7 space-y-6"
                >
                  {/* Domain Category Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#111827] dark:border-slate-700 pb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <div
                        className={`w-10 h-10 border ${meta.accentBorder} ${meta.accentBg} flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${meta.accentText}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#EA580C] font-bold">
                            {meta.code} • CATEGORY SHELF
                          </span>
                          <span className="text-[11px] font-mono-code text-emerald-600 dark:text-emerald-400 font-bold">
                            {domPublished.length} Synthesized
                          </span>
                          <span className="text-[11px] font-mono-code text-slate-400">
                            • {domQueued.length} in Vault Queue
                          </span>
                        </div>
                        <h3 className="font-display text-3xl text-slate-900 dark:text-white leading-none mt-0.5">
                          {dom}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs font-mono-code text-slate-500 max-w-md">
                      {meta.tagline}
                    </p>
                  </div>

                  {/* Synthesized Books in This Category */}
                  {domPublished.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {domPublished.map((b, idx) =>
                        renderPublishedBookCard(b, `VOL 0${idx + 1}`)
                      )}
                    </div>
                  ) : (
                    <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-dashed border-[#E5E0D8] dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code text-slate-500">
                      <span>
                        No volumes synthesized in <strong>{dom}</strong> yet —{' '}
                        {domQueued.length} books ready in your `/Books` vault below.
                      </span>
                      <span className="text-[#EA580C] font-bold">
                        Click &ldquo;Copy Cmd&rdquo; on any queued book to synthesize →
                      </span>
                    </div>
                  )}

                  {/* Compact In-Category Vault Queue Strip */}
                  {statusFilter === 'all' && domQueued.length > 0 && (
                    <div className="pt-2 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono-code uppercase text-slate-500 font-bold">
                          Up Next in {dom} Vault ({domQueued.length} Queued Volumes)
                        </span>
                        {domQueued.length > 4 && (
                          <button
                            onClick={() =>
                              setExpandedCategoryVaults((prev) => ({
                                ...prev,
                                [dom]: !prev[dom],
                              }))
                            }
                            className="text-[11px] font-mono-code text-[#EA580C] hover:underline cursor-pointer"
                          >
                            {isVaultExpanded
                              ? 'Show Compact (4)'
                              : `Show All ${domQueued.length} in ${dom} →`}
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {previewQueued.map((item) => {
                          const isCopied = copiedSlug === item.bookSlug;
                          return (
                            <div
                              key={item.bookSlug}
                              className="border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-3.5 flex flex-col justify-between gap-2.5 hover:border-slate-400 transition"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                                  <span>QUEUED IN VAULT</span>
                                  <span className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                                    {item.format}
                                  </span>
                                </div>
                                <h4 className="font-display text-lg text-slate-900 dark:text-white leading-tight line-clamp-2">
                                  {item.title}
                                </h4>
                                <p className="text-[11px] font-mono-code text-slate-500 truncate">
                                  {item.author}
                                </p>
                              </div>

                              <div className="pt-2 border-t border-[#E5E0D8] dark:border-slate-800 flex items-center justify-between gap-2">
                                <span className="text-[10px] font-mono-code text-slate-400 truncate">
                                  {item.fileName}
                                </span>
                                <button
                                  onClick={() =>
                                    handleCopyPrompt(item.fileName, item.bookSlug)
                                  }
                                  className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono-code uppercase font-bold border cursor-pointer transition shrink-0 ${
                                    isCopied
                                      ? 'bg-emerald-600 text-white border-emerald-600'
                                      : 'border-[#E5E0D8] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-[#EA580C] hover:text-[#EA580C]'
                                  }`}
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
                    </div>
                  )}
                </section>
              );
            })}
        </div>
      ) : (
        /* FLAT GRID OR COMPACT SWISS TABLE VIEW */
        filteredPublishedBooks.length > 0 && (
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C]">
                  Active Synthesized Shelf ({filteredPublishedBooks.length} Volumes)
                </span>
                <h2 className="font-display text-3xl text-slate-900 dark:text-white">
                  Complete Interactive Mastery Editions
                </h2>
              </div>
              <span className="text-xs font-mono-code text-slate-500">
                Select any volume to resume reading or inspect its chapter syllabus
              </span>
            </div>

            {shelfLayout === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPublishedBooks.map((b, idx) =>
                  renderPublishedBookCard(b, `VOL 0${idx + 1}`)
                )}
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
                      <th className="py-3 px-4">Last / Next Chapter</th>
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
                            Ch {comp.resumeChapter} of {b.totalChapters}
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
                                onOpenBookChapter(b.bookSlug, comp.resumeChapter);
                              }}
                              className="px-3 py-1 bg-[#EA580C] text-white font-mono-code uppercase text-[11px] font-bold cursor-pointer"
                            >
                              Resume Ch {comp.resumeChapter}
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
        )
      )}

      {/* =====================================================================
          5. FOCUSED BOOK CURRICULUM INSPECTOR (MONOGRAPH SYLLABUS + CHAPTERS)
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
                    Focused Syllabus Inspector
                  </span>
                  <span className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-[10px] font-mono-code uppercase text-[#EA580C] font-bold">
                    {slugToCategory[book.bookSlug] || 'AI & Agents'}
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
                onClick={() =>
                  onOpenBookChapter(
                    book.bookSlug,
                    activeBookStats.completion.resumeChapter
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase font-bold cursor-pointer transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Resume Ch {activeBookStats.completion.resumeChapter}</span>
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
                const isLastOpened =
                  bookLastChapters[book.bookSlug] === ch.chapterNumber;
                return (
                  <div
                    key={`${book.bookSlug}-${ch.chapterId}`}
                    onClick={() => onOpenChapter(ch.chapterNumber)}
                    className={`kinetic-card group border p-5 flex flex-col justify-between gap-4 cursor-pointer ${
                      isLastOpened
                        ? 'border-[#EA580C] bg-orange-50/30 dark:bg-slate-900'
                        : 'border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] bg-[#FAF8F5]/60 dark:bg-slate-950/60'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono-code">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`px-2 py-0.5 font-bold transition ${
                              isDone
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#111827] dark:bg-slate-800 group-hover:bg-[#EA580C] text-white'
                            }`}
                          >
                            CH {String(ch.chapterNumber).padStart(2, '0')} {isDone ? '✓' : ''}
                          </span>
                          {isLastOpened && (
                            <span className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-950 text-[#EA580C] text-[10px] font-bold">
                              LAST OPENED
                            </span>
                          )}
                        </div>
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
          6. COMPLETE WORKSPACE VAULT CATALOG (WHEN IN GRID/TABLE OR QUEUED FILTER)
         ===================================================================== */}
      {(shelfLayout !== 'categories' || statusFilter === 'queued') &&
        filteredQueuedBooks.length > 0 && (
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
              <div>
                <div className="text-xs font-mono-code uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <Library className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>
                    Workspace Reading Vault (/Books Directory • {filteredQueuedBooks.length}{' '}
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
