import React, { useState, useEffect, useMemo } from 'react';
import {
  PUBLISHED_BOOKS,
  PUBLISHED_BOOK_LIST,
  VAULT_BOOK_CATALOG,
  BookDomainCategory,
} from './data/books/registry';
import {
  CognitiveZoomLevel,
  ReaderFontScale,
  ReaderThemeMode,
  RecentBookSession,
} from './types/book';
import { LibraryOverviewStudio } from './components/LibraryOverviewStudio';
import { ChapterReaderStudio } from './components/ChapterReaderStudio';
import { ConceptGraphStudio } from './components/ConceptGraphStudio';
import { ActiveRecallStudio } from './components/ActiveRecallStudio';
import { OrchestratorStudio } from './components/OrchestratorStudio';
import {
  BookOpen,
  Share2,
  Zap,
  Network,
  Library,
  Moon,
  Sun,
  CheckCircle2,
  Smartphone,
  X,
  Copy,
  Check,
  Upload,
  SlidersHorizontal,
  Clock,
  ChevronRight,
} from 'lucide-react';

type StudioView = 'overview' | 'reader' | 'graph' | 'recall' | 'orchestrator';

const FONT_SCALE_VARS: Record<ReaderFontScale, { size: string; lineHeight: string }> = {
  sm: { size: '0.96rem', lineHeight: '1.66' },
  md: { size: '1.05rem', lineHeight: '1.72' },
  lg: { size: '1.18rem', lineHeight: '1.78' },
  xl: { size: '1.32rem', lineHeight: '1.84' },
};

export const App: React.FC = () => {
  // Persisted Per-Book Last Opened Chapter & Recent Reading Sessions
  const [bookLastChapters, setBookLastChapters] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-book-last-chapters-v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [recentSessions, setRecentSessions] = useState<RecentBookSession[]>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-recent-sessions-v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [pinnedBooks, setPinnedBooks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-pinned-books-v1');
      return saved
        ? JSON.parse(saved)
        : ['asking-the-right-questions', 'ai-engineering'];
    } catch {
      return ['asking-the-right-questions', 'ai-engineering'];
    }
  });

  const [activeBookSlug, setActiveBookSlug] = useState<string>(() => {
    try {
      const savedRecent = localStorage.getItem('brain-opener-recent-sessions-v1');
      if (savedRecent) {
        const parsed: RecentBookSession[] = JSON.parse(savedRecent);
        if (parsed.length > 0 && PUBLISHED_BOOKS[parsed[0].bookSlug]) {
          return parsed[0].bookSlug;
        }
      }
      return 'asking-the-right-questions';
    } catch {
      return 'asking-the-right-questions';
    }
  });

  const [activeView, setActiveView] = useState<StudioView>('overview');

  const [activeChapterNumber, setActiveChapterNumber] = useState<number>(() => {
    try {
      const savedRecent = localStorage.getItem('brain-opener-recent-sessions-v1');
      if (savedRecent) {
        const parsed: RecentBookSession[] = JSON.parse(savedRecent);
        if (parsed.length > 0 && typeof parsed[0].chapterNumber === 'number') {
          return parsed[0].chapterNumber;
        }
      }
      return 1;
    } catch {
      return 1;
    }
  });

  const [recallTargetChapter, setRecallTargetChapter] = useState<number | undefined>(
    undefined
  );

  // Persisted Reader Comfort & Cognitive Zoom Settings
  const [themeMode, setThemeMode] = useState<ReaderThemeMode>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-theme-mode') as ReaderThemeMode | null;
      if (saved === 'paper' || saved === 'sepia' || saved === 'dark') return saved;
      return 'paper';
    } catch {
      return 'paper';
    }
  });

  const [fontScale, setFontScale] = useState<ReaderFontScale>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-font-scale') as ReaderFontScale | null;
      if (saved === 'sm' || saved === 'md' || saved === 'lg' || saved === 'xl') return saved;
      return 'md';
    } catch {
      return 'md';
    }
  });

  const [cognitiveZoom, setCognitiveZoom] = useState<CognitiveZoomLevel>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-zoom-level') as CognitiveZoomLevel | null;
      if (saved === 'brief' || saved === 'playbook' || saved === 'deep') return saved;
      return 'deep';
    } catch {
      return 'deep';
    }
  });

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showSyncModal, setShowSyncModal] = useState<boolean>(false);
  const [showTocSheet, setShowTocSheet] = useState<boolean>(false);
  const [focusedSectionId, setFocusedSectionId] = useState<string | null>(null);
  const [syncInputCode, setSyncInputCode] = useState<string>('');
  const [copiedSyncType, setCopiedSyncType] = useState<'link' | 'code' | null>(null);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string | null>(null);

  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('brain-opener-completed-chapters-v2');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Automatically hydrate progress if opened via a Cross-Device Magic Sync Link (?sync=...)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const syncParam = params.get('sync');
      if (syncParam) {
        const decoded = JSON.parse(atob(syncParam));
        if (decoded && typeof decoded === 'object') {
          if (decoded.completed && typeof decoded.completed === 'object') {
            setCompletedChapters((prev) => ({ ...prev, ...decoded.completed }));
          }
          if (decoded.lastChapters && typeof decoded.lastChapters === 'object') {
            setBookLastChapters((prev) => ({ ...prev, ...decoded.lastChapters }));
          }
          if (Array.isArray(decoded.recentSessions)) {
            setRecentSessions(decoded.recentSessions);
          }
          if (Array.isArray(decoded.pinnedBooks)) {
            setPinnedBooks(decoded.pinnedBooks);
          }
          if (decoded.book && PUBLISHED_BOOKS[decoded.book]) {
            setActiveBookSlug(decoded.book);
          }
          if (typeof decoded.ch === 'number') {
            setActiveChapterNumber(decoded.ch);
          }
          if (decoded.zoom === 'brief' || decoded.zoom === 'playbook' || decoded.zoom === 'deep') {
            setCognitiveZoom(decoded.zoom);
          }
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      }
    } catch {
      // ignore invalid sync param
    }
  }, []);

  const activeBook =
    PUBLISHED_BOOKS[activeBookSlug] || PUBLISHED_BOOK_LIST[0];

  const activeBookDomainCategory: BookDomainCategory = useMemo(() => {
    const found = VAULT_BOOK_CATALOG.find((item) => item.bookSlug === activeBook.bookSlug);
    return found ? found.category : 'AI & Agents';
  }, [activeBook.bookSlug]);

  // Group published books by domain category for the header <select>
  const publishedBooksByDomain = useMemo(() => {
    const groups: Record<string, typeof PUBLISHED_BOOK_LIST> = {};
    for (const b of PUBLISHED_BOOK_LIST) {
      const cat =
        VAULT_BOOK_CATALOG.find((v) => v.bookSlug === b.bookSlug)?.category ||
        'AI & Agents';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(b);
    }
    return groups;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView, activeChapterNumber, activeBookSlug, cognitiveZoom]);

  // Apply Theme Mode (Paper / Sepia / Dark)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'sepia-mode');
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else if (themeMode === 'sepia') {
      root.classList.add('sepia-mode');
    }
    try {
      localStorage.setItem('brain-opener-theme-mode', themeMode);
    } catch {
      // ignore
    }
  }, [themeMode]);

  // Apply Font Scale CSS Custom Properties
  useEffect(() => {
    const root = document.documentElement;
    const cfg = FONT_SCALE_VARS[fontScale] || FONT_SCALE_VARS.md;
    root.style.setProperty('--reader-font-size', cfg.size);
    root.style.setProperty('--reader-line-height', cfg.lineHeight);
    try {
      localStorage.setItem('brain-opener-font-scale', fontScale);
    } catch {
      // ignore
    }
  }, [fontScale]);

  // Persist Cognitive Zoom
  useEffect(() => {
    try {
      localStorage.setItem('brain-opener-zoom-level', cognitiveZoom);
    } catch {
      // ignore
    }
  }, [cognitiveZoom]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'brain-opener-completed-chapters-v2',
        JSON.stringify(completedChapters)
      );
    } catch {
      // ignore storage errors
    }
  }, [completedChapters]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'brain-opener-book-last-chapters-v1',
        JSON.stringify(bookLastChapters)
      );
    } catch {
      // ignore
    }
  }, [bookLastChapters]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'brain-opener-recent-sessions-v1',
        JSON.stringify(recentSessions)
      );
    } catch {
      // ignore
    }
  }, [recentSessions]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'brain-opener-pinned-books-v1',
        JSON.stringify(pinnedBooks)
      );
    } catch {
      // ignore
    }
  }, [pinnedBooks]);

  const recordReadingSession = (slug: string, chNum: number) => {
    const now = Date.now();
    setBookLastChapters((prev) => ({ ...prev, [slug]: chNum }));
    setRecentSessions((prev) => {
      const filtered = prev.filter((item) => item.bookSlug !== slug);
      return [{ bookSlug: slug, chapterNumber: chNum, updatedAt: now }, ...filtered].slice(
        0,
        12
      );
    });
  };

  const handleTogglePinBook = (slug: string) => {
    setPinnedBooks((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [slug, ...prev]
    );
  };

  const currentChapter =
    activeBook.chapters.find((c) => c.chapterNumber === activeChapterNumber) ||
    activeBook.chapters[0];

  const handleSelectBook = (slug: string) => {
    const savedCh = bookLastChapters[slug] || 1;
    setActiveBookSlug(slug);
    setActiveChapterNumber(savedCh);
    setRecallTargetChapter(undefined);
    recordReadingSession(slug, savedCh);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChapter = (chNum: number) => {
    setActiveChapterNumber(chNum);
    recordReadingSession(activeBook.bookSlug, chNum);
    setActiveView('reader');
    setShowTocSheet(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookChapter = (slug: string, chNum: number) => {
    setActiveBookSlug(slug);
    setActiveChapterNumber(chNum);
    setRecallTargetChapter(undefined);
    recordReadingSession(slug, chNum);
    setActiveView('reader');
    setShowTocSheet(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRecallForChapter = (chNum: number) => {
    setRecallTargetChapter(chNum);
    recordReadingSession(activeBook.bookSlug, chNum);
    setActiveView('recall');
    setShowTocSheet(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpToChapterAnchor = (anchorId: string, requireDeepMode = false) => {
    if (activeView !== 'reader') {
      setActiveView('reader');
    }
    if (requireDeepMode && cognitiveZoom !== 'deep') {
      setCognitiveZoom('deep');
    }
    setFocusedSectionId(anchorId);
    setShowTocSheet(false);
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  const getChapterKey = (slug: string, chNum: number) => `${slug}:ch${chNum}`;

  const completedCountForBook = activeBook.chapters.filter(
    (c) => completedChapters[getChapterKey(activeBook.bookSlug, c.chapterNumber)]
  ).length;

  const generateSyncCode = () => {
    const payload = {
      completed: completedChapters,
      lastChapters: bookLastChapters,
      recentSessions,
      pinnedBooks,
      book: activeBookSlug,
      ch: activeChapterNumber,
      zoom: cognitiveZoom,
    };
    return btoa(JSON.stringify(payload));
  };

  const handleCopySyncLink = () => {
    const code = generateSyncCode();
    const baseUrl = window.location.origin + window.location.pathname;
    const link = `${baseUrl}?sync=${encodeURIComponent(code)}`;
    navigator.clipboard.writeText(link);
    setCopiedSyncType('link');
    setTimeout(() => setCopiedSyncType(null), 2200);
  };

  const handleCopySyncCode = () => {
    const code = generateSyncCode();
    navigator.clipboard.writeText(code);
    setCopiedSyncType('code');
    setTimeout(() => setCopiedSyncType(null), 2200);
  };

  const handleImportSyncCode = () => {
    try {
      const raw = syncInputCode.trim();
      const extracted = raw.includes('?sync=')
        ? decodeURIComponent(raw.split('?sync=')[1])
        : raw;
      const parsed = JSON.parse(atob(extracted));
      if (parsed && parsed.completed) {
        setCompletedChapters((prev) => ({ ...prev, ...parsed.completed }));
        if (parsed.lastChapters && typeof parsed.lastChapters === 'object') {
          setBookLastChapters((prev) => ({ ...prev, ...parsed.lastChapters }));
        }
        if (Array.isArray(parsed.recentSessions)) {
          setRecentSessions(parsed.recentSessions);
        }
        if (Array.isArray(parsed.pinnedBooks)) {
          setPinnedBooks(parsed.pinnedBooks);
        }
        if (parsed.book && PUBLISHED_BOOKS[parsed.book]) {
          setActiveBookSlug(parsed.book);
        }
        if (typeof parsed.ch === 'number') {
          setActiveChapterNumber(parsed.ch);
        }
        if (parsed.zoom === 'brief' || parsed.zoom === 'playbook' || parsed.zoom === 'deep') {
          setCognitiveZoom(parsed.zoom);
        }
        setSyncStatusMsg('✓ Progress & reading session synced across devices!');
        setSyncInputCode('');
        setTimeout(() => setSyncStatusMsg(null), 3000);
      }
    } catch {
      setSyncStatusMsg('× Invalid sync code or link.');
      setTimeout(() => setSyncStatusMsg(null), 3000);
    }
  };

  const cycleThemeMode = () => {
    setThemeMode((prev) =>
      prev === 'paper' ? 'sepia' : prev === 'sepia' ? 'dark' : 'paper'
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#0B0F17] text-[#111827] dark:text-slate-100">
      {/* LIVE READING PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-[#EA580C] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* TOP SWISS EDITORIAL NAVIGATION BAR (COMPACT & CLEAN ON MOBILE/TABLET) */}
      <header className="sticky top-0 z-40 border-b border-[#E5E0D8] dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand Logo + Active Book Selector */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              onClick={() => setActiveView('overview')}
              className="flex items-center gap-2.5 cursor-pointer shrink-0 group"
              title="Return to PRISM Library & Resume Cockpit"
            >
              <div className="w-9 h-9 bg-[#111827] dark:bg-[#EA580C] text-white flex flex-col items-center justify-center font-mono-code font-bold text-xs border border-[#111827] dark:border-[#EA580C] relative overflow-hidden">
                <span className="text-[8px] leading-none text-[#EA580C] dark:text-white/90">▲</span>
                <span className="leading-none tracking-tighter">PR</span>
              </div>
              <div className="hidden md:block">
                <div className="font-display text-2xl leading-none tracking-tight text-slate-900 dark:text-white group-hover:text-[#EA580C] transition">
                  PRISM
                </div>
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#EA580C]">
                  First-Principles Engine
                </div>
              </div>
            </div>

            {/* Domain-Grouped Book Switcher Dropdown */}
            <select
              value={activeBookSlug}
              onChange={(e) => handleSelectBook(e.target.value)}
              className="px-2.5 py-1.5 text-xs font-mono-code font-bold border-2 border-[#111827] dark:border-[#EA580C] bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white cursor-pointer max-w-[195px] sm:max-w-[290px] truncate"
              title="Switch Active Book (Grouped by Domain)"
            >
              {Object.entries(publishedBooksByDomain).map(([domain, booksInDomain]) => (
                <optgroup key={domain} label={`▸ ${domain}`}>
                  {booksInDomain.map((b) => {
                    const lastCh = bookLastChapters[b.bookSlug];
                    return (
                      <option key={b.bookSlug} value={b.bookSlug}>
                        {b.title} ({b.author}){lastCh ? ` • Ch ${lastCh}` : ''}
                      </option>
                    );
                  })}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Primary Studio Tabs (Desktop xl+) */}
          <nav className="hidden xl:flex items-center gap-1">
            {[
              { id: 'overview', label: '01. Library & Overview', icon: Library },
              {
                id: 'reader',
                label: `02. Chapter Studio (Ch ${activeChapterNumber})`,
                icon: BookOpen,
              },
              { id: 'graph', label: '03. Concept Graph', icon: Share2 },
              { id: 'recall', label: '04. Active Recall', icon: Zap },
              { id: 'orchestrator', label: '05. Nexus 9-Agent DAG', icon: Network },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'recall') setRecallTargetChapter(undefined);
                    setActiveView(item.id as StudioView);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono-code transition cursor-pointer ${
                    isActive
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-[#F3EFEA] dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Mastery Progress + Cross-Device Sync + Theme Cycle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F3EFEA] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-xs font-mono-code">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {completedCountForBook}/{activeBook.totalChapters} Ch
              </span>
            </div>

            <button
              onClick={() => setShowSyncModal(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-800 hover:border-[#EA580C] text-xs font-mono-code cursor-pointer transition"
              title="Use on Mobile, iPad, or PC & Sync Progress"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#EA580C]" />
              <span className="hidden md:inline">Devices & Sync</span>
            </button>

            <button
              onClick={cycleThemeMode}
              className="px-2.5 py-1.5 border border-[#E5E0D8] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer inline-flex items-center gap-1 text-xs font-mono-code"
              title="Cycle Reading Theme: Paper → Sepia → Night"
            >
              {themeMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
              <span className="hidden sm:inline capitalize">{themeMode}</span>
            </button>
          </div>
        </div>
      </header>

      {/* SECONDARY CHAPTER RIBBON (DESKTOP & TABLET LANDSCAPE QUICK BAR IN READER VIEW) */}
      {activeView === 'reader' && (
        <div className="hidden md:block border-b border-[#E5E0D8] dark:border-slate-800 bg-[#F3EFEA] dark:bg-slate-950">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-2 flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-mono-code uppercase text-slate-500 mr-1">
                Chapters:
              </span>
              {activeBook.chapters.map((ch) => {
                const active = ch.chapterNumber === activeChapterNumber;
                const done =
                  completedChapters[
                    getChapterKey(activeBook.bookSlug, ch.chapterNumber)
                  ];
                return (
                  <button
                    key={ch.chapterId}
                    onClick={() => handleOpenChapter(ch.chapterNumber)}
                    className={`px-2.5 py-1 text-xs font-mono-code transition cursor-pointer flex items-center gap-1 ${
                      active
                        ? 'bg-[#EA580C] text-white font-bold'
                        : done
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-400/40'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C]'
                    }`}
                    title={ch.title}
                  >
                    <span>Ch {ch.chapterNumber}</span>
                    {done && <span>✓</span>}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                const key = getChapterKey(activeBook.bookSlug, activeChapterNumber);
                setCompletedChapters((prev) => ({
                  ...prev,
                  [key]: !prev[key],
                }));
              }}
              className={`px-3 py-1 text-xs font-mono-code shrink-0 cursor-pointer transition ${
                completedChapters[
                  getChapterKey(activeBook.bookSlug, activeChapterNumber)
                ]
                  ? 'bg-emerald-600 text-white'
                  : 'border border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
              }`}
            >
              {completedChapters[
                getChapterKey(activeBook.bookSlug, activeChapterNumber)
              ]
                ? `✓ Ch ${activeChapterNumber} Mastered`
                : `Mark Ch ${activeChapterNumber} Mastered`}
            </button>
          </div>
        </div>
      )}

      {/* MAIN WORKSPACE CONTAINER (WITH BOTTOM DOCK CLEARANCE ON MOBILE/TABLET) */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-3 sm:px-6 md:px-8 py-6 md:py-8 pb-24 xl:pb-10">
        {activeView === 'overview' && (
          <LibraryOverviewStudio
            book={activeBook}
            allBooks={PUBLISHED_BOOK_LIST}
            completedChapters={completedChapters}
            bookLastChapters={bookLastChapters}
            recentSessions={recentSessions}
            pinnedBooks={pinnedBooks}
            cognitiveZoom={cognitiveZoom}
            onSelectBook={handleSelectBook}
            onOpenChapter={handleOpenChapter}
            onOpenBookChapter={handleOpenBookChapter}
            onOpenRecallForChapter={handleOpenRecallForChapter}
            onTogglePinBook={handleTogglePinBook}
            onNavigateView={(v) => setActiveView(v)}
          />
        )}

        {activeView === 'reader' && (
          <ChapterReaderStudio
            chapter={currentChapter}
            bookSlug={activeBook.bookSlug}
            domainCategory={activeBookDomainCategory}
            onSelectChapter={handleOpenChapter}
            totalChapters={activeBook.totalChapters}
            onOpenRecallForChapter={handleOpenRecallForChapter}
            cognitiveZoom={cognitiveZoom}
            onChangeCognitiveZoom={setCognitiveZoom}
            fontScale={fontScale}
            onChangeFontScale={setFontScale}
            themeMode={themeMode}
            onChangeThemeMode={setThemeMode}
            onOpenTocSheet={() => setShowTocSheet(true)}
            focusedSectionId={focusedSectionId}
          />
        )}

        {activeView === 'graph' && (
          <ConceptGraphStudio
            book={activeBook}
            onJumpToChapter={handleOpenChapter}
          />
        )}

        {activeView === 'recall' && (
          <ActiveRecallStudio
            book={activeBook}
            initialChapterNumber={recallTargetChapter}
          />
        )}

        {activeView === 'orchestrator' && <OrchestratorStudio />}
      </main>

      {/* =====================================================================
          NATIVE TOUCH-FIRST BOTTOM THUMB-ZONE DOCK (MOBILE & TABLET < 1280px)
         ===================================================================== */}
      <nav
        aria-label="Mobile & Tablet Thumb Navigation Dock"
        className="fixed bottom-0 left-0 right-0 z-40 xl:hidden border-t-2 border-[#111827] dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md pb-safe-dock shadow-lg"
      >
        <div className="max-w-2xl mx-auto grid grid-cols-5 items-center px-2 pt-1.5 pb-1 gap-1">
          <button
            onClick={() => {
              setActiveView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 text-[10px] font-mono-code transition cursor-pointer ${
              activeView === 'overview'
                ? 'text-[#EA580C] font-bold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Library className="w-4 h-4 mb-0.5" />
            <span>Library</span>
          </button>

          <button
            onClick={() => {
              setActiveView('reader');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 text-[10px] font-mono-code transition cursor-pointer ${
              activeView === 'reader'
                ? 'text-[#EA580C] font-bold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span>Ch {activeChapterNumber}</span>
          </button>

          {/* Center Thumb Action: Slide-Up Chapter TOC, Zoom & Comfort Sheet */}
          <button
            onClick={() => setShowTocSheet(true)}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#111827] dark:bg-[#EA580C] text-white text-[10px] font-mono-code font-bold cursor-pointer shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4 mb-0.5 text-[#EA580C] dark:text-white" />
            <span>TOC & Aa</span>
          </button>

          <button
            onClick={() => {
              setActiveView('graph');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 text-[10px] font-mono-code transition cursor-pointer ${
              activeView === 'graph'
                ? 'text-[#EA580C] font-bold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Share2 className="w-4 h-4 mb-0.5" />
            <span>Graph</span>
          </button>

          <button
            onClick={() => {
              setRecallTargetChapter(undefined);
              setActiveView('recall');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 text-[10px] font-mono-code transition cursor-pointer ${
              activeView === 'recall'
                ? 'text-[#EA580C] font-bold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Zap className="w-4 h-4 mb-0.5" />
            <span>Recall</span>
          </button>
        </div>
      </nav>

      {/* =====================================================================
          SLIDE-UP BOTTOM SHEET: CHAPTER SCRUBBER, SECTION JUMP & COMFORT (B1)
         ===================================================================== */}
      {showTocSheet && (
        <div
          onClick={() => setShowTocSheet(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white dark:bg-slate-900 border-t-2 sm:border-2 border-[#111827] dark:border-slate-700 p-5 sm:p-6 space-y-6 animate-fade-up"
          >
            {/* Sheet Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#E5E0D8] dark:border-slate-800 pb-4">
              <div>
                <div className="text-[11px] font-mono-code uppercase tracking-widest text-[#EA580C] font-bold">
                  Touch Reader Navigator • {activeBook.title}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white mt-0.5">
                  Chapters, Sections & Reading Comfort
                </h2>
              </div>
              <button
                onClick={() => setShowTocSheet(false)}
                className="p-1.5 border border-[#E5E0D8] dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 1. Reader Comfort & Cognitive Zoom Controls */}
            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-4">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono-code uppercase text-slate-500 font-bold">
                  1. Cognitive Zoom Level (Synthesis Depth)
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'brief' as CognitiveZoomLevel, label: '⚡ 60s Brief' },
                    { id: 'playbook' as CognitiveZoomLevel, label: '🧭 5m Playbook' },
                    {
                      id: 'deep' as CognitiveZoomLevel,
                      label: `🔬 Deep (${currentChapter.readingTimeMinutes}m)`,
                    },
                  ].map((z) => (
                    <button
                      key={z.id}
                      onClick={() => {
                        setCognitiveZoom(z.id);
                        if (activeView !== 'reader') setActiveView('reader');
                      }}
                      className={`py-2 px-2 text-xs font-mono-code border cursor-pointer transition ${
                        cognitiveZoom === z.id
                          ? 'bg-[#EA580C] border-[#EA580C] text-white font-bold'
                          : 'bg-white dark:bg-slate-900 border-[#E5E0D8] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono-code uppercase text-slate-500 font-bold">
                    2. Typography Scale
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {(
                      [
                        { id: 'sm', label: 'A-' },
                        { id: 'md', label: 'Default' },
                        { id: 'lg', label: 'A+' },
                        { id: 'xl', label: 'A++' },
                      ] as { id: ReaderFontScale; label: string }[]
                    ).map((fs) => (
                      <button
                        key={fs.id}
                        onClick={() => setFontScale(fs.id)}
                        className={`py-1.5 text-xs font-mono-code border cursor-pointer ${
                          fontScale === fs.id
                            ? 'bg-[#111827] dark:bg-[#EA580C] text-white font-bold border-[#111827]'
                            : 'bg-white dark:bg-slate-900 border-[#E5E0D8] dark:border-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {fs.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono-code uppercase text-slate-500 font-bold">
                    3. Reading Canvas Theme
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {(
                      [
                        { id: 'paper', label: 'Paper' },
                        { id: 'sepia', label: 'Sepia' },
                        { id: 'dark', label: 'Night' },
                      ] as { id: ReaderThemeMode; label: string }[]
                    ).map((tm) => (
                      <button
                        key={tm.id}
                        onClick={() => setThemeMode(tm.id)}
                        className={`py-1.5 text-xs font-mono-code border cursor-pointer ${
                          themeMode === tm.id
                            ? 'bg-[#111827] dark:bg-[#EA580C] text-white font-bold border-[#111827]'
                            : 'bg-white dark:bg-slate-900 border-[#E5E0D8] dark:border-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {tm.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Current Chapter Section Jump List */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code uppercase font-bold text-slate-900 dark:text-white">
                  Jump Within Ch {currentChapter.chapterNumber}: {currentChapter.title}
                </span>
                <button
                  onClick={() => {
                    const key = getChapterKey(
                      activeBook.bookSlug,
                      currentChapter.chapterNumber
                    );
                    setCompletedChapters((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }));
                  }}
                  className={`px-2.5 py-1 text-[11px] font-mono-code cursor-pointer ${
                    completedChapters[
                      getChapterKey(activeBook.bookSlug, currentChapter.chapterNumber)
                    ]
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'border border-emerald-600 text-emerald-700 dark:text-emerald-400'
                  }`}
                >
                  {completedChapters[
                    getChapterKey(activeBook.bookSlug, currentChapter.chapterNumber)
                  ]
                    ? '✓ Mastered'
                    : 'Mark Mastered'}
                </button>
              </div>

              {/* High-Level Chapter Blocks */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleJumpToChapterAnchor('hero-thesis')}
                  className="px-2.5 py-1.5 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] cursor-pointer"
                >
                  Thesis & Paradigm Shift
                </button>
                <button
                  onClick={() => handleJumpToChapterAnchor('mental-models-sec')}
                  className="px-2.5 py-1.5 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] cursor-pointer"
                >
                  Mental Models ({currentChapter.mentalModels.length})
                </button>
                {currentChapter.customDiagrams.length > 0 && (
                  <button
                    onClick={() => handleJumpToChapterAnchor('blueprints-sec')}
                    className="px-2.5 py-1.5 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] cursor-pointer"
                  >
                    SVG Blueprints ({currentChapter.customDiagrams.length})
                  </button>
                )}
                {currentChapter.tradeOffMatrices.length > 0 && (
                  <button
                    onClick={() => handleJumpToChapterAnchor('matrices-sec')}
                    className="px-2.5 py-1.5 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] cursor-pointer"
                  >
                    Matrices ({currentChapter.tradeOffMatrices.length})
                  </button>
                )}
                {currentChapter.engineeringScenarios.length > 0 && (
                  <button
                    onClick={() => handleJumpToChapterAnchor('scenarios-sec')}
                    className="px-2.5 py-1.5 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] cursor-pointer"
                  >
                    Case Studies ({currentChapter.engineeringScenarios.length})
                  </button>
                )}
              </div>

              {/* Deep Sections List */}
              <div className="grid grid-cols-1 gap-1.5 pt-1">
                {currentChapter.deepSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleJumpToChapterAnchor(sec.id, true)}
                    className="p-2.5 text-left border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 hover:border-[#EA580C] flex items-center justify-between gap-2 cursor-pointer transition"
                  >
                    <div className="min-w-0">
                      <span className="text-xs font-mono-code font-bold text-[#EA580C] mr-2">
                        §{sec.sectionNumber}
                      </span>
                      <span className="text-xs font-medium text-slate-900 dark:text-white">
                        {sec.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* 3. All Chapters in Active Book */}
            <div className="space-y-2 pt-2 border-t border-[#E5E0D8] dark:border-slate-800">
              <div className="text-xs font-mono-code uppercase font-bold text-slate-900 dark:text-white">
                Switch Chapter ({completedCountForBook}/{activeBook.totalChapters} Mastered)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeBook.chapters.map((ch) => {
                  const isCurrent = ch.chapterNumber === activeChapterNumber;
                  const isDone =
                    completedChapters[
                      getChapterKey(activeBook.bookSlug, ch.chapterNumber)
                    ];
                  return (
                    <button
                      key={ch.chapterId}
                      onClick={() => handleOpenChapter(ch.chapterNumber)}
                      className={`p-3 text-left border flex items-center justify-between gap-2 cursor-pointer transition ${
                        isCurrent
                          ? 'border-[#EA580C] bg-orange-50/50 dark:bg-slate-800 font-bold'
                          : 'border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-400'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono-code text-[#EA580C]">
                          CH {String(ch.chapterNumber).padStart(2, '0')}{' '}
                          {isDone ? '• ✓ MASTERED' : ''}
                        </div>
                        <div className="text-xs text-slate-900 dark:text-white truncate">
                          {ch.title.replace(/^Chapter \d+\.\s*/, '')}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono-code text-slate-400 shrink-0 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {ch.readingTimeMinutes}m
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CROSS-DEVICE SYNC & MOBILE/IPAD INSTALL MODAL */}
      {showSyncModal && (
        <div
          onClick={() => setShowSyncModal(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full bg-white dark:bg-slate-900 border-2 border-[#111827] dark:border-slate-700 p-6 md:p-8 space-y-6"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E5E0D8] dark:border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C]">
                  Everywhere Access • Mobile, iPad & Desktop
                </div>
                <h2 className="font-display text-3xl text-slate-900 dark:text-white mt-0.5">
                  Install App & Sync Reading Progress
                </h2>
              </div>
              <button
                onClick={() => setShowSyncModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 1. Install as Native-Feeling PWA on iPad / iPhone / PC */}
            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-2">
              <div className="text-xs font-mono-code uppercase font-bold text-slate-900 dark:text-white">
                1. Install as Full-Screen App (iPad, iPhone, Android & PC)
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <li>
                  • <strong>iPhone & iPad (Safari):</strong> Open your cloud URL, tap the{' '}
                  <strong>Share</strong> button, and tap{' '}
                  <strong>&ldquo;Add to Home Screen&rdquo;</strong> for a full-screen standalone
                  reading studio.
                </li>
                <li>
                  • <strong>PC / Mac / Android (Chrome / Edge):</strong> Click the{' '}
                  <strong>Install PRISM</strong> icon in the address bar.
                </li>
              </ul>
            </div>

            {/* 2. Export Progress Link / Code */}
            <div className="space-y-3">
              <div className="text-xs font-mono-code uppercase font-bold text-slate-900 dark:text-white">
                2. Send Your Reading Progress to Another Device
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Copy a Magic Sync Link and open it on your iPad or phone to transfer all{' '}
                <strong>
                  {Object.keys(completedChapters).filter((k) => completedChapters[k]).length}
                </strong>{' '}
                mastered chapters immediately:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleCopySyncLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase font-bold cursor-pointer transition"
                >
                  {copiedSyncType === 'link' ? (
                    <>
                      <Check className="w-4 h-4" /> Magic Sync Link Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy Magic Sync URL
                    </>
                  )}
                </button>
                <button
                  onClick={handleCopySyncCode}
                  className="px-4 py-2.5 border border-[#111827] dark:border-slate-700 text-xs font-mono-code uppercase font-bold cursor-pointer"
                >
                  {copiedSyncType === 'code' ? '✓ Code Copied' : 'Copy Sync Code'}
                </button>
              </div>
            </div>

            {/* 3. Import Sync Code */}
            <div className="space-y-2 pt-2 border-t border-[#E5E0D8] dark:border-slate-800">
              <div className="text-xs font-mono-code uppercase font-bold text-slate-900 dark:text-white">
                3. Import Sync Code from Another Device
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={syncInputCode}
                  onChange={(e) => setSyncInputCode(e.target.value)}
                  placeholder="Paste Sync Code or Magic Sync Link here..."
                  className="flex-1 px-3 py-2 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 text-xs font-mono-code"
                />
                <button
                  onClick={handleImportSyncCode}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111827] dark:bg-[#EA580C] text-white text-xs font-mono-code uppercase font-bold cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" /> Import
                </button>
              </div>
              {syncStatusMsg && (
                <div className="text-xs font-mono-code text-emerald-600 font-bold pt-1">
                  {syncStatusMsg}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
