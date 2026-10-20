import React, { useState, useEffect } from 'react';
import { PUBLISHED_BOOKS, PUBLISHED_BOOK_LIST } from './data/books/registry';
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
} from 'lucide-react';

type StudioView = 'overview' | 'reader' | 'graph' | 'recall' | 'orchestrator';

export const App: React.FC = () => {
  const [activeBookSlug, setActiveBookSlug] = useState<string>('asking-the-right-questions');
  const [activeView, setActiveView] = useState<StudioView>('overview');
  const [activeChapterNumber, setActiveChapterNumber] = useState<number>(1);
  const [recallTargetChapter, setRecallTargetChapter] = useState<number | undefined>(
    undefined
  );
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showSyncModal, setShowSyncModal] = useState<boolean>(false);
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
          if (decoded.book && PUBLISHED_BOOKS[decoded.book]) {
            setActiveBookSlug(decoded.book);
          }
          if (typeof decoded.ch === 'number') {
            setActiveChapterNumber(decoded.ch);
          }
          // Clean URL query param after importing
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
  }, [activeView, activeChapterNumber, activeBookSlug]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  const currentChapter =
    activeBook.chapters.find((c) => c.chapterNumber === activeChapterNumber) ||
    activeBook.chapters[0];

  const handleSelectBook = (slug: string) => {
    setActiveBookSlug(slug);
    setActiveChapterNumber(1);
    setRecallTargetChapter(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChapter = (chNum: number) => {
    setActiveChapterNumber(chNum);
    setActiveView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRecallForChapter = (chNum: number) => {
    setRecallTargetChapter(chNum);
    setActiveView('recall');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getChapterKey = (slug: string, chNum: number) => `${slug}:ch${chNum}`;

  const completedCountForBook = activeBook.chapters.filter(
    (c) => completedChapters[getChapterKey(activeBook.bookSlug, c.chapterNumber)]
  ).length;

  const generateSyncCode = () => {
    const payload = {
      completed: completedChapters,
      book: activeBookSlug,
      ch: activeChapterNumber,
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
        if (parsed.book && PUBLISHED_BOOKS[parsed.book]) {
          setActiveBookSlug(parsed.book);
        }
        if (typeof parsed.ch === 'number') {
          setActiveChapterNumber(parsed.ch);
        }
        setSyncStatusMsg('✓ Progress synced across devices!');
        setSyncInputCode('');
        setTimeout(() => setSyncStatusMsg(null), 3000);
      }
    } catch {
      setSyncStatusMsg('× Invalid sync code or link.');
      setTimeout(() => setSyncStatusMsg(null), 3000);
    }
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

      {/* TOP SWISS EDITORIAL NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-[#E5E0D8] dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-3">
          {/* Brand Logo + Active Book Selector */}
          <div className="flex items-center gap-3">
            <div
              onClick={() => setActiveView('overview')}
              className="flex items-center gap-2.5 cursor-pointer shrink-0"
            >
              <div className="w-9 h-9 bg-[#111827] dark:bg-[#EA580C] text-white flex items-center justify-center font-mono-code font-bold text-sm">
                BO
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-xl leading-none tracking-tight text-slate-900 dark:text-white">
                  BRAIN OPENER
                </div>
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#EA580C]">
                  Book Mastery Engine
                </div>
              </div>
            </div>

            {/* Book Switcher Dropdown */}
            <select
              value={activeBookSlug}
              onChange={(e) => handleSelectBook(e.target.value)}
              className="px-2.5 py-1.5 text-xs font-mono-code font-bold border-2 border-[#111827] dark:border-[#EA580C] bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white cursor-pointer max-w-[180px] sm:max-w-[270px] truncate"
              title="Switch Active Book"
            >
              {PUBLISHED_BOOK_LIST.map((b, idx) => (
                <option key={b.bookSlug} value={b.bookSlug}>
                  📚 Vol {idx + 1}: {b.title} ({b.author})
                </option>
              ))}
            </select>
          </div>

          {/* Primary Studio Tabs */}
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

          {/* Right Controls: Mastery Progress + Cross-Device Sync + Dark Mode */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#F3EFEA] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-xs font-mono-code">
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
              <span className="hidden sm:inline">Devices & Sync</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 border border-[#E5E0D8] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              title="Toggle Dark/Light Reading Mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Tablet/Mobile Studio Switcher */}
        <div className="flex xl:hidden overflow-x-auto border-t border-[#E5E0D8] dark:border-slate-800 px-4 py-2 gap-2">
          {[
            { id: 'overview', label: '01. Library & Overview' },
            { id: 'reader', label: `02. Ch ${activeChapterNumber} Studio` },
            { id: 'graph', label: '03. Concept Graph' },
            { id: 'recall', label: '04. Active Recall' },
            { id: 'orchestrator', label: '05. 9-Agent DAG' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as StudioView)}
              className={`px-3 py-1 text-xs font-mono-code shrink-0 cursor-pointer ${
                activeView === item.id
                  ? 'bg-[#EA580C] text-white font-bold'
                  : 'bg-[#FAF8F5] dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* SECONDARY CHAPTER RIBBON (ALWAYS ACCESSIBLE IN READER VIEW) */}
      {activeView === 'reader' && (
        <div className="border-b border-[#E5E0D8] dark:border-slate-800 bg-[#F3EFEA] dark:bg-slate-950">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-mono-code uppercase text-slate-500 mr-1">
                {activeBook.title} Chapters:
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

      {/* MAIN WORKSPACE CONTAINER */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-8 py-8">
        {activeView === 'overview' && (
          <LibraryOverviewStudio
            book={activeBook}
            allBooks={PUBLISHED_BOOK_LIST}
            completedChapters={completedChapters}
            onSelectBook={handleSelectBook}
            onOpenChapter={handleOpenChapter}
            onOpenRecallForChapter={handleOpenRecallForChapter}
            onNavigateView={(v) => setActiveView(v)}
          />
        )}

        {activeView === 'reader' && (
          <ChapterReaderStudio
            chapter={currentChapter}
            bookSlug={activeBook.bookSlug}
            onSelectChapter={handleOpenChapter}
            totalChapters={activeBook.totalChapters}
            onOpenRecallForChapter={handleOpenRecallForChapter}
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
                  <strong>Share</strong> button, and tap <strong>&ldquo;Add to Home Screen&rdquo;</strong>{' '}
                  for a full-screen standalone reading studio.
                </li>
                <li>
                  • <strong>PC / Mac / Android (Chrome / Edge):</strong> Click the{' '}
                  <strong>Install Brain Opener</strong> icon in the address bar.
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
                <strong>{Object.keys(completedChapters).filter((k) => completedChapters[k]).length}</strong>{' '}
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
