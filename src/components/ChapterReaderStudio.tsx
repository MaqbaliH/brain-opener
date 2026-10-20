import React, { useState, useEffect } from 'react';
import {
  ChapterMastery,
  BookFigure,
  CognitiveZoomLevel,
  ReaderFontScale,
  ReaderThemeMode,
} from '../types/book';
import { BookDomainCategory } from '../data/books/registry';
import { RichParagraphs, formatInlineTokens } from './RichText';
import { InteractiveSimulators } from './InteractiveSimulators';
import {
  ShieldCheck,
  Clock,
  FileText,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Calculator,
  Compass,
  Wrench,
  Maximize2,
  X,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Activity,
  Zap,
  Layers,
  BookOpen,
  SlidersHorizontal,
  Table as TableIcon,
  LayoutList,
  ListChecks,
} from 'lucide-react';

interface ChapterReaderStudioProps {
  chapter: ChapterMastery;
  bookSlug: string;
  domainCategory?: BookDomainCategory;
  onSelectChapter: (chapterNum: number) => void;
  totalChapters: number;
  onOpenRecallForChapter: (chapterNum: number) => void;
  cognitiveZoom: CognitiveZoomLevel;
  onChangeCognitiveZoom: (zoom: CognitiveZoomLevel) => void;
  fontScale: ReaderFontScale;
  onChangeFontScale: (scale: ReaderFontScale) => void;
  themeMode: ReaderThemeMode;
  onChangeThemeMode: (theme: ReaderThemeMode) => void;
  onOpenTocSheet: () => void;
  focusedSectionId?: string | null;
}

interface DomainFramingLabels {
  thesisLabel: string;
  modelSuperLabel: string;
  modelRuleLabel: string;
  deepSuperLabel: string;
  flowLabel: string;
  takeawaysLabel: string;
  pitfallsLabel: string;
  matrixSuperLabel: string;
  matrixHeading: string;
  scenarioSuperLabel: string;
  scenarioHeading: string;
  scenarioBadge: string;
  symptomLabel: string;
  naiveLabel: string;
  solutionLabel: string;
}

function getDomainFraming(category?: BookDomainCategory): DomainFramingLabels {
  if (category === 'Cognitive & Mastery') {
    return {
      thesisLabel: 'Core Analytical & Epistemic Thesis',
      modelSuperLabel: 'Node 3 (Feynman) • Permanent Cognitive Lenses',
      modelRuleLabel: 'Cognitive Protocol',
      deepSuperLabel: 'Node 2 (Axiom) + Node 3 (Feynman) • First-Principles Deconstruction',
      flowLabel: 'Step-by-Step Analytical Protocol',
      takeawaysLabel: 'First-Principles Takeaways',
      pitfallsLabel: 'Cognitive Traps & Reasoning Fallacies',
      matrixSuperLabel: 'Node 2 (Axiom) • Analytical Decision Frameworks',
      matrixHeading: 'Comparative Reasoning & Decision Matrices',
      scenarioSuperLabel: 'Node 3 (Feynman) • Applied Critical Thinking Case Audits',
      scenarioHeading: 'In Practice: Real-World Critical Thinking Audits',
      scenarioBadge: 'APPLIED CASE AUDIT',
      symptomLabel: 'Observed Claim or Reasoning Trap',
      naiveLabel: 'Uncritical Reaction & Why It Fails',
      solutionLabel: 'First-Principles Analytical Resolution',
    };
  }

  if (category === 'Product & Design') {
    return {
      thesisLabel: 'Executive Product & UX Thesis',
      modelSuperLabel: 'Node 3 (Feynman) • Product & Design Mental Models',
      modelRuleLabel: 'Product & UX Rule',
      deepSuperLabel: 'Node 2 (Axiom) + Node 3 (Feynman) • 100% Concept Deconstruction',
      flowLabel: 'Step-by-Step UX & Product Execution Flow',
      takeawaysLabel: 'Core Product & UX Takeaways',
      pitfallsLabel: 'Product Anti-Patterns & Failure Modes',
      matrixSuperLabel: 'Node 2 (Axiom) • Product Strategy Frameworks',
      matrixHeading: 'Product & Design Trade-Off Matrices',
      scenarioSuperLabel: 'Node 3 (Feynman) • Real-World Product Case Studies',
      scenarioHeading: 'In Practice: Product & UX Case Studies',
      scenarioBadge: 'PRODUCT CASE STUDY',
      symptomLabel: 'Observed User / Product Friction',
      naiveLabel: 'Surface-Level Fix & Why It Fails',
      solutionLabel: 'First-Principles Product Solution',
    };
  }

  return {
    thesisLabel: 'Executive Architectural Thesis',
    modelSuperLabel: 'Node 3 (Feynman) • Permanent Cognitive Hooks',
    modelRuleLabel: 'Engineering Rule',
    deepSuperLabel: 'Node 2 (Axiom) + Node 3 (Feynman) • 100% Concept Deconstruction',
    flowLabel: 'Step-by-Step Architectural Execution Flow',
    takeawaysLabel: 'Core Engineering Takeaways',
    pitfallsLabel: 'Production Failure Modes & Pitfalls',
    matrixSuperLabel: 'Node 2 (Axiom) • Engineering Decision Frameworks',
    matrixHeading: 'Architectural Trade-Off & Comparison Matrices',
    scenarioSuperLabel: 'Node 3 (Feynman) • Production Architecture Case Studies',
    scenarioHeading: 'In the Trenches: Real-World Engineering Scenarios',
    scenarioBadge: 'PRODUCTION CASE STUDY',
    symptomLabel: 'Observed Production Symptom',
    naiveLabel: 'Naive Fix & Why It Fails',
    solutionLabel: 'First-Principles Solution',
  };
}

export const ChapterReaderStudio: React.FC<ChapterReaderStudioProps> = ({
  chapter,
  bookSlug,
  domainCategory,
  onSelectChapter,
  totalChapters,
  onOpenRecallForChapter,
  cognitiveZoom,
  onChangeCognitiveZoom,
  fontScale,
  onChangeFontScale,
  themeMode,
  onChangeThemeMode,
  onOpenTocSheet,
  focusedSectionId,
}) => {
  const [lightboxFigure, setLightboxFigure] = useState<BookFigure | null>(null);
  const [activeDiagramIdx, setActiveDiagramIdx] = useState(0);
  const [animateSvgFlow, setAnimateSvgFlow] = useState(true);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [expandedFlows, setExpandedFlows] = useState<Record<string, boolean>>({});
  const [expandedFormulas, setExpandedFormulas] = useState<Record<string, boolean>>({});
  const [forceTableOnMobile, setForceTableOnMobile] = useState<Record<number, boolean>>({});

  const labels = getDomainFraming(domainCategory);

  // Reset diagram index and collapsed sections when switching chapters
  useEffect(() => {
    setActiveDiagramIdx(0);
    setCollapsedSections({});
    setExpandedFlows({});
    setExpandedFormulas({});
  }, [chapter.chapterId, bookSlug]);

  // If user jumps to a specific section from the TOC Bottom Sheet, ensure it is expanded
  useEffect(() => {
    if (focusedSectionId) {
      setCollapsedSections((prev) => ({
        ...prev,
        [focusedSectionId]: false,
      }));
    }
  }, [focusedSectionId]);

  const activeDiagram =
    chapter.customDiagrams[
      Math.min(activeDiagramIdx, Math.max(chapter.customDiagrams.length - 1, 0))
    ];

  const toggleSectionCollapse = (secId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [secId]: !prev[secId],
    }));
  };

  const handleCollapseAllSections = () => {
    const next: Record<string, boolean> = {};
    for (const sec of chapter.deepSections) {
      next[sec.id] = true;
    }
    setCollapsedSections(next);
  };

  const handleExpandAllSections = () => {
    setCollapsedSections({});
  };

  const allSectionsCollapsed =
    chapter.deepSections.length > 0 &&
    chapter.deepSections.every((s) => collapsedSections[s.id]);

  const handleJumpToDeepSection = (secId: string) => {
    if (cognitiveZoom !== 'deep') {
      onChangeCognitiveZoom('deep');
    }
    setCollapsedSections((prev) => ({ ...prev, [secId]: false }));
    setTimeout(() => {
      const el = document.getElementById(secId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  // Synthesize an Operational Execution Checklist across all sections that have stepByStepFlow
  const synthesizedPlaybookSteps = chapter.deepSections.flatMap((sec) =>
    (sec.stepByStepFlow || []).map((flow) => ({
      sectionNumber: sec.sectionNumber,
      sectionTitle: sec.title,
      step: flow.step,
      title: flow.title,
      detail: flow.detail,
    }))
  );

  return (
    <div className="space-y-8 md:space-y-10 pb-20">
      {/* =====================================================================
          0. STICKY COGNITIVE ZOOM & TOUCH READER CONTROL BAR (TRACK A1 + B1)
         ===================================================================== */}
      <div className="sticky top-16 z-30 border-2 border-[#111827] dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 md:px-5 md:py-3 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* 3-Tier Cognitive Zoom Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-slate-500 shrink-0 hidden sm:inline">
              Cognitive Zoom:
            </span>
            <div className="grid grid-cols-3 sm:inline-flex border border-[#111827] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
              {[
                {
                  id: 'brief' as CognitiveZoomLevel,
                  shortLabel: '⚡ 60s Brief',
                  fullLabel: '01. 60s Executive Brief',
                  desc: 'Thesis, Takeaways & Verdicts',
                },
                {
                  id: 'playbook' as CognitiveZoomLevel,
                  shortLabel: '🧭 5m Playbook',
                  fullLabel: '02. 5m Models & Playbook',
                  desc: 'Models, Matrices & Cases',
                },
                {
                  id: 'deep' as CognitiveZoomLevel,
                  shortLabel: `🔬 Deep (${chapter.readingTimeMinutes}m)`,
                  fullLabel: `03. Full Deep Dive (${chapter.readingTimeMinutes}m)`,
                  desc: '100% First-Principles Mastery',
                },
              ].map((tier) => {
                const active = cognitiveZoom === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => onChangeCognitiveZoom(tier.id)}
                    className={`px-2.5 sm:px-3.5 py-2 text-[11px] sm:text-xs font-mono-code transition cursor-pointer text-center ${
                      active
                        ? 'bg-[#EA580C] text-white font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-[#F3EFEA] dark:hover:bg-slate-800'
                    }`}
                    title={tier.desc}
                  >
                    <span className="sm:hidden">{tier.shortLabel}</span>
                    <span className="hidden sm:inline">{tier.fullLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Reader Comfort Controls: Font Size, Theme & Quick TOC Drawer */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2">
            {/* Font Scale Pill */}
            <div className="inline-flex items-center border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
              {(
                [
                  { id: 'sm', label: 'A-' },
                  { id: 'md', label: 'A' },
                  { id: 'lg', label: 'A+' },
                  { id: 'xl', label: 'A++' },
                ] as { id: ReaderFontScale; label: string }[]
              ).map((fs) => (
                <button
                  key={fs.id}
                  onClick={() => onChangeFontScale(fs.id)}
                  className={`px-2 py-1 text-[11px] font-mono-code cursor-pointer transition ${
                    fontScale === fs.id
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                  title={`Reading Text Scale: ${fs.id.toUpperCase()}`}
                >
                  {fs.label}
                </button>
              ))}
            </div>

            {/* Paper / Sepia / Night Mode Pill */}
            <div className="inline-flex items-center border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 p-0.5">
              {(
                [
                  { id: 'paper', label: 'Paper' },
                  { id: 'sepia', label: 'Sepia' },
                  { id: 'dark', label: 'Night' },
                ] as { id: ReaderThemeMode; label: string }[]
              ).map((tm) => (
                <button
                  key={tm.id}
                  onClick={() => onChangeThemeMode(tm.id)}
                  className={`px-2.5 py-1 text-[11px] font-mono-code cursor-pointer transition ${
                    themeMode === tm.id
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C] font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {tm.label}
                </button>
              ))}
            </div>

            {/* Open Chapter & Section Scrubber Drawer */}
            <button
              onClick={onOpenTocSheet}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111827] dark:bg-slate-800 text-white text-[11px] font-mono-code uppercase font-bold cursor-pointer hover:bg-[#EA580C] transition"
              title="Open Chapter & Section Jump Sheet"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>TOC & Jump</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          1. CHAPTER HERO & VERITAS CERTIFICATION HEADER
         ===================================================================== */}
      <header
        id="hero-thesis"
        className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 md:p-10 scroll-mt-32"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E5E0D8] dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 bg-[#EA580C] text-white text-xs font-mono-code font-bold uppercase tracking-wider">
              Chapter {String(chapter.chapterNumber).padStart(2, '0')} / {totalChapters}
            </span>
            {domainCategory && (
              <span className="px-2.5 py-1 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-[11px] font-mono-code uppercase text-slate-700 dark:text-slate-300 font-semibold">
                {domainCategory}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              {cognitiveZoom === 'brief'
                ? '1 min Executive Brief'
                : cognitiveZoom === 'playbook'
                ? '5 min Playbook Mode'
                : `${chapter.readingTimeMinutes} min Deep Mastery`}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono-code text-slate-500">
              <FileText className="w-3.5 h-3.5" />
              {chapter.sourceWordCount.toLocaleString()} source words synthesized
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-mono-code">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Veritas Audited: {Math.round(chapter.veritasAudit.sectionCoverageScore * 100)}% Depth •{' '}
              {chapter.veritasAudit.figuresIncluded} Figs
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white leading-[1.08]">
              {chapter.title}
            </h1>
            <p className="font-editorial text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {chapter.subtitle}
            </p>
            <div className="pt-2">
              <div className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C] mb-1.5 font-bold">
                {labels.thesisLabel}
              </div>
              <p className="editorial-prose text-slate-800 dark:text-slate-200 font-editorial">
                {chapter.executiveThesis}
              </p>
            </div>
          </div>

          {/* Paradigm Shift Box */}
          <div className="lg:col-span-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 p-4 sm:p-5 space-y-3.5">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-bold">
              <Compass className="w-4 h-4 text-[#EA580C]" />
              Core Paradigm Shift
            </div>
            <div className="p-3 bg-red-50/60 dark:bg-red-950/20 border-l-3 border-red-500">
              <div className="text-[10px] font-mono-code uppercase text-red-700 dark:text-red-400 font-bold">
                Conventional Assumption (Before)
              </div>
              <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {chapter.paradigmShift.oldWay}
              </p>
            </div>
            <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/20 border-l-3 border-emerald-600">
              <div className="text-[10px] font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                First-Principles Reality (Now)
              </div>
              <p className="mt-1 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                {chapter.paradigmShift.newWay}
              </p>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Why It Changed:</strong> {chapter.paradigmShift.whyItChanged}
            </p>
          </div>
        </div>

        {/* Horizontal Touch-Friendly Section Scrubber Ribbon */}
        <div className="mt-6 pt-4 border-t border-[#E5E0D8] dark:border-slate-800 flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-[11px] font-mono-code uppercase text-slate-400 mr-1 shrink-0">
            Jump to Section:
          </span>
          {chapter.deepSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleJumpToDeepSection(sec.id)}
              className="px-2.5 py-1.5 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-800 hover:bg-[#EA580C] hover:text-white border border-[#E5E0D8] dark:border-slate-700 transition shrink-0 cursor-pointer"
            >
              §{sec.sectionNumber} {sec.title}
            </button>
          ))}
        </div>
      </header>

      {/* =====================================================================
          TIER 1 VIEW: 60-SECOND EXECUTIVE BRIEF & HIGH-SIGNAL SYNTHESIS
         ===================================================================== */}
      {cognitiveZoom === 'brief' && (
        <section className="space-y-8 animate-fade-up">
          {/* 1A. Rapid Mental Models Strip */}
          <div className="border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E0D8] dark:border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C] font-bold">
                  Tier 1 • 60-Second Executive Brief
                </div>
                <h2 className="font-display text-3xl text-slate-900 dark:text-white mt-0.5">
                  High-Signal Chapter Cheat Sheet
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onChangeCognitiveZoom('playbook')}
                  className="px-3 py-1.5 border border-[#111827] dark:border-slate-700 text-xs font-mono-code uppercase cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Switch to 5m Playbook →
                </button>
                <button
                  onClick={() => onChangeCognitiveZoom('deep')}
                  className="px-3 py-1.5 bg-[#EA580C] text-white text-xs font-mono-code uppercase font-bold cursor-pointer"
                >
                  Open Full Deep Dive →
                </button>
              </div>
            </div>

            {/* Compact Mental Models Summary */}
            <div className="space-y-3">
              <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 font-bold">
                1. Core Mental Models & {labels.modelRuleLabel}s ({chapter.mentalModels.length})
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {chapter.mentalModels.map((mm, idx) => (
                  <div
                    key={mm.id}
                    className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="text-[10px] font-mono-code font-bold text-[#EA580C] uppercase">
                        MODEL 0{idx + 1} • {mm.tagline}
                      </div>
                      <h3 className="font-display text-xl text-slate-900 dark:text-white mt-0.5">
                        {mm.name}
                      </h3>
                      <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {mm.firstPrinciplesReality}
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-[#E5E0D8] dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
                      <strong className="font-mono-code uppercase text-[#EA580C]">
                        {labels.modelRuleLabel}:{' '}
                      </strong>
                      {mm.howToApply}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Decision Verdict Rules from Trade-Off Matrices */}
            {chapter.tradeOffMatrices.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono-code uppercase tracking-wider text-[#7C3AED] font-bold">
                  2. Master Decision Verdict Rules ({chapter.tradeOffMatrices.length})
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {chapter.tradeOffMatrices.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border-l-4 border-[#7C3AED] border border-[#E5E0D8] dark:border-slate-800"
                    >
                      <div className="text-xs font-mono-code font-bold text-slate-900 dark:text-white">
                        {m.title}
                      </div>
                      <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="font-mono-code uppercase text-[#7C3AED]">
                          Verdict Rule:{' '}
                        </strong>
                        {m.verdictRule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section-by-Section High-Signal Digest */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono-code uppercase tracking-wider text-[#2563EB] font-bold">
                3. Section-by-Section Key Takeaways & Traps ({chapter.deepSections.length} Sections)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chapter.deepSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="p-4 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-[10px] font-mono-code font-bold">
                          §{sec.sectionNumber}
                        </span>
                        <button
                          onClick={() => handleJumpToDeepSection(sec.id)}
                          className="text-[11px] font-mono-code text-[#EA580C] hover:underline cursor-pointer"
                        >
                          Open Deep Dive →
                        </button>
                      </div>
                      <h4 className="font-display text-2xl text-slate-900 dark:text-white leading-tight">
                        {sec.title}
                      </h4>
                      <p className="text-xs font-editorial text-slate-500 dark:text-slate-400">
                        {sec.subtitle}
                      </p>

                      <ul className="space-y-1.5 pt-1">
                        {sec.keyTakeaways.slice(0, 2).map((kt, kIdx) => (
                          <li
                            key={kIdx}
                            className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{formatInlineTokens(kt)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {sec.commonPitfalls[0] && (
                      <div className="p-2.5 bg-red-50/50 dark:bg-red-950/20 border-l-2 border-red-500 text-[11px] text-slate-700 dark:text-slate-300">
                        <strong className="font-mono-code uppercase text-red-600 dark:text-red-400">
                          Primary Trap:{' '}
                        </strong>
                        {formatInlineTokens(sec.commonPitfalls[0])}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          2. FEYNMAN COGNITIVE MENTAL MODELS (SHOWN IN PLAYBOOK & DEEP MODES)
         ===================================================================== */}
      {cognitiveZoom !== 'brief' && (
        <section id="mental-models-sec" className="space-y-4 scroll-mt-32">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C]">
                {labels.modelSuperLabel}
              </span>
              <h2 className="font-display text-3xl text-slate-900 dark:text-white">
                Core Mental Models for Chapter {chapter.chapterNumber}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {chapter.mentalModels.map((mm, idx) => (
              <div
                key={mm.id}
                className="kinetic-card border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code font-bold text-[#EA580C]">
                      MENTAL MODEL 0{idx + 1}
                    </span>
                    <Lightbulb className="w-4 h-4 text-[#EA580C]" />
                  </div>
                  <h3 className="font-display text-2xl text-slate-900 dark:text-white">
                    {mm.name}
                  </h3>
                  <p className="text-xs font-mono-code text-slate-500">{mm.tagline}</p>

                  <div className="pt-2 space-y-2.5 text-xs leading-relaxed">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
                      <span className="font-mono-code uppercase text-red-600 dark:text-red-400 font-semibold block">
                        Naive Intuition:
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {mm.naiveIntuition}
                      </span>
                    </div>
                    <div className="p-2.5 bg-orange-50/40 dark:bg-slate-950 border border-orange-200 dark:border-slate-800">
                      <span className="font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-semibold block">
                        First-Principles Reality:
                      </span>
                      <span className="text-slate-800 dark:text-slate-200">
                        {mm.firstPrinciplesReality}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E0D8] dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <strong className="font-mono-code uppercase text-[#EA580C]">
                    {labels.modelRuleLabel}:{' '}
                  </strong>
                  {mm.howToApply}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================================
          TIER 2 EXCLUSIVE: ACTIONABLE PLAYBOOK EXECUTION CHECKLIST
         ===================================================================== */}
      {cognitiveZoom === 'playbook' && synthesizedPlaybookSteps.length > 0 && (
        <section className="border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-8 space-y-5 animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E0D8] dark:border-slate-800 pb-4">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-widest text-emerald-600 font-bold flex items-center gap-1.5">
                <ListChecks className="w-4 h-4" />
                <span>Tier 2 • Operational Execution Playbook</span>
              </div>
              <h2 className="font-display text-3xl text-slate-900 dark:text-white mt-0.5">
                Step-by-Step Action Protocol Across Chapter {chapter.chapterNumber}
              </h2>
            </div>
            <button
              onClick={() => onChangeCognitiveZoom('deep')}
              className="px-3 py-1.5 bg-[#111827] dark:bg-[#EA580C] text-white text-xs font-mono-code uppercase cursor-pointer self-start sm:self-auto"
            >
              Read Full Mechanistic Prose →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {synthesizedPlaybookSteps.map((item, idx) => (
              <div
                key={`${item.sectionNumber}-${item.step}-${idx}`}
                className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 flex items-start gap-3"
              >
                <span className="px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-[11px] font-mono-code font-bold shrink-0 mt-0.5">
                  §{item.sectionNumber} • {item.step}
                </span>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {formatInlineTokens(item.title)}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {formatInlineTokens(item.detail)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2B. INTERACTIVE FIRST-PRINCIPLES LIVE SIMULATOR */}
      {cognitiveZoom !== 'brief' && (
        <InteractiveSimulators chapterNumber={chapter.chapterNumber} bookSlug={bookSlug} />
      )}

      {/* 3. PRISM CUSTOM INTERACTIVE SVG DIAGRAMS (VISUAL MENTAL-MODEL LAB) */}
      {cognitiveZoom !== 'brief' && chapter.customDiagrams.length > 0 && activeDiagram && (
        <section
          id="blueprints-sec"
          className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 md:p-8 space-y-6 scroll-mt-32"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-widest text-[#0D9488] mb-1">
                Node 4 (Prism + Graphy) • Interactive Architecture Blueprint
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white">
                {activeDiagram.title}
              </h2>
              <p className="text-xs font-mono-code text-slate-500 mt-0.5">
                {activeDiagram.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setAnimateSvgFlow(!animateSvgFlow)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code border cursor-pointer transition ${
                  animateSvgFlow
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'border-[#E5E0D8] dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                {animateSvgFlow ? 'Live Flow Active' : 'Static Blueprint'}
              </button>

              {chapter.customDiagrams.length > 1 &&
                chapter.customDiagrams.map((d, idx) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDiagramIdx(idx)}
                    className={`px-3 py-1.5 text-xs font-mono-code cursor-pointer transition ${
                      idx === activeDiagramIdx
                        ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                        : 'border border-[#E5E0D8] dark:border-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Blueprint {idx + 1}: {d.title.slice(0, 22)}
                    {d.title.length > 22 ? '…' : ''}
                  </button>
                ))}
            </div>
          </div>

          {/* Rendered SVG Schematic (Touch-Scrollable with Mobile Hint) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono-code uppercase text-slate-400 md:hidden">
              <span>↔ Swipe horizontally to inspect full schematic</span>
              <span>800×420 Vector Blueprint</span>
            </div>
            <div className="w-full overflow-x-auto bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 p-3 sm:p-4 bg-swiss-grid">
              <div
                className={`w-full min-w-[640px] flex justify-center ${
                  animateSvgFlow ? 'svg-flow-active' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: activeDiagram.svgCode }}
              />
            </div>
          </div>

          {/* Bierut Lure Caption + Step Annotations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-start">
            <div className="lg:col-span-5 p-4 bg-[#FAF8F5] dark:bg-slate-950 border-l-4 border-[#0D9488]">
              <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#0D9488] font-bold mb-1">
                Editorial Visual Analysis (The Bierut Lure)
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeDiagram.bierutCaption}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeDiagram.annotations.map((ann) => (
                <div
                  key={ann.step}
                  className="p-3 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <div className="text-xs font-mono-code font-bold text-[#EA580C]">
                    [{ann.step}] {ann.label}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ann.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          4. EXHAUSTIVE SECTION-BY-SECTION DEEP DIVES (COLLAPSIBLE ACCORDIONS)
         ===================================================================== */}
      {cognitiveZoom === 'deep' && (
        <section className="space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#2563EB]">
                {labels.deepSuperLabel}
              </span>
              <h2 className="font-display text-3xl text-slate-900 dark:text-white">
                Exhaustive Section-by-Section Deep Dives
              </h2>
            </div>

            {/* Expand All / Collapse All Toggle for Mobile & Tablet Navigation */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={
                  allSectionsCollapsed
                    ? handleExpandAllSections
                    : handleCollapseAllSections
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono-code uppercase cursor-pointer hover:border-[#EA580C] transition"
              >
                <Layers className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>
                  {allSectionsCollapsed
                    ? `Expand All (${chapter.deepSections.length}) Sections`
                    : 'Collapse All for Quick Scan'}
                </span>
              </button>
            </div>
          </div>

          {chapter.deepSections.map((sec) => {
            const isCollapsed = Boolean(collapsedSections[sec.id]);
            return (
              <article
                key={sec.id}
                id={sec.id}
                className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 md:p-10 space-y-6 md:space-y-8 scroll-mt-32 transition"
              >
                {/* Interactive Collapsible Section Header */}
                <div
                  onClick={() => toggleSectionCollapse(sec.id)}
                  className="border-b border-[#E5E0D8] dark:border-slate-800 pb-4 flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono-code font-bold text-[#EA580C] uppercase tracking-wider">
                        Section §{sec.sectionNumber}
                      </span>
                      <span className="text-[11px] font-mono-code text-slate-400">
                        • {sec.keyTakeaways.length} Takeaways • {sec.commonPitfalls.length} Traps
                        {sec.formulas && sec.formulas.length > 0
                          ? ` • ${sec.formulas.length} Formulas`
                          : ''}
                        {sec.figures && sec.figures.length > 0
                          ? ` • ${sec.figures.length} Figures`
                          : ''}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white group-hover:text-[#EA580C] transition leading-tight">
                      {sec.title}
                    </h3>
                    <p className="font-editorial text-base sm:text-lg text-slate-600 dark:text-slate-300">
                      {sec.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSectionCollapse(sec.id);
                    }}
                    className="px-2.5 py-1.5 border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-xs font-mono-code uppercase inline-flex items-center gap-1 shrink-0 cursor-pointer hover:border-[#EA580C]"
                    title={isCollapsed ? 'Expand Section' : 'Collapse Section'}
                  >
                    <span className="hidden sm:inline">
                      {isCollapsed ? 'Expand' : 'Fold'}
                    </span>
                    {isCollapsed ? (
                      <ChevronDown className="w-4 h-4 text-[#EA580C]" />
                    ) : (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                </div>

                {/* Collapsed Preview Strip */}
                {isCollapsed ? (
                  <div
                    onClick={() => toggleSectionCollapse(sec.id)}
                    className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-2 cursor-pointer"
                  >
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {sec.coreMechanism}
                    </p>
                    <div className="text-[11px] font-mono-code text-[#EA580C] font-bold">
                      Tap to expand full first-principles mechanism, takeaways & figures →
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Main Prose + Sidebar Takeaways Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left 8 Cols: Deep First-Principles Explanation */}
                      <div className="lg:col-span-8 space-y-6">
                        <RichParagraphs
                          text={sec.coreMechanism}
                          className="editorial-prose text-slate-800 dark:text-slate-200 font-editorial"
                        />

                        {/* Progressive Disclosure Sub-Drawers for Step-by-Step Flow & Formal Equations */}
                        {((sec.stepByStepFlow && sec.stepByStepFlow.length > 0) ||
                          (sec.formulas && sec.formulas.length > 0)) && (
                          <div className="pt-2 space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                              {sec.stepByStepFlow && sec.stepByStepFlow.length > 0 && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedFlows((prev) => ({
                                      ...prev,
                                      [sec.id]: !prev[sec.id],
                                    }))
                                  }
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code border cursor-pointer transition ${
                                    expandedFlows[sec.id]
                                      ? 'bg-[#111827] dark:bg-[#EA580C] text-white border-[#111827]'
                                      : 'bg-[#FAF8F5] dark:bg-slate-950 border-[#E5E0D8] dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#EA580C]'
                                  }`}
                                >
                                  <ListChecks className="w-3.5 h-3.5 text-[#EA580C]" />
                                  <span>
                                    {expandedFlows[sec.id] ? 'Hide' : 'View'} {labels.flowLabel} (
                                    {sec.stepByStepFlow.length} Steps)
                                  </span>
                                </button>
                              )}

                              {sec.formulas && sec.formulas.length > 0 && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedFormulas((prev) => ({
                                      ...prev,
                                      [sec.id]: !prev[sec.id],
                                    }))
                                  }
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code border cursor-pointer transition ${
                                    expandedFormulas[sec.id]
                                      ? 'bg-[#2563EB] text-white border-[#2563EB]'
                                      : 'bg-[#FAF8F5] dark:bg-slate-950 border-[#E5E0D8] dark:border-slate-800 text-[#2563EB] dark:text-blue-400 hover:border-[#2563EB]'
                                  }`}
                                >
                                  <Calculator className="w-3.5 h-3.5" />
                                  <span>
                                    {expandedFormulas[sec.id] ? 'Hide' : 'Inspect'} Formal Equation
                                    {sec.formulas.length > 1 ? `s (${sec.formulas.length})` : ''}
                                  </span>
                                </button>
                              )}
                            </div>

                            {/* Expanded Step-by-Step Mechanism Flow */}
                            {expandedFlows[sec.id] &&
                              sec.stepByStepFlow &&
                              sec.stepByStepFlow.length > 0 && (
                                <div className="grid grid-cols-1 gap-2.5 animate-fade-up">
                                  {sec.stepByStepFlow.map((s) => (
                                    <div
                                      key={s.step}
                                      className="flex items-start gap-3 p-3 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800"
                                    >
                                      <span className="px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-xs font-mono-code font-bold shrink-0">
                                        {s.step}
                                      </span>
                                      <div>
                                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                          {formatInlineTokens(s.title)}
                                        </div>
                                        <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                          {formatInlineTokens(s.detail)}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                            {/* Expanded Mathematical & Quantitative Formula Breakdowns */}
                            {expandedFormulas[sec.id] &&
                              sec.formulas &&
                              sec.formulas.length > 0 && (
                                <div className="space-y-3 animate-fade-up">
                                  {sec.formulas.map((f, fIdx) => (
                                    <div
                                      key={fIdx}
                                      className="border border-slate-800 bg-slate-950 text-slate-100 p-4 sm:p-5 space-y-3.5"
                                    >
                                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                                        <span className="text-sm font-bold text-white">
                                          {f.name}
                                        </span>
                                        <code className="px-3 py-1.5 bg-slate-900 text-amber-300 font-mono-code text-xs sm:text-sm border border-slate-700 overflow-x-auto max-w-full block">
                                          {f.expression}
                                        </code>
                                      </div>
                                      <p className="text-xs text-slate-300 leading-relaxed">
                                        <strong className="text-emerald-400 font-mono-code uppercase">
                                          Intuition:{' '}
                                        </strong>
                                        {formatInlineTokens(f.intuition)}
                                      </p>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {f.variables.map((v, vIdx) => (
                                          <div
                                            key={vIdx}
                                            className="p-2 bg-slate-900/90 border border-slate-800 text-xs"
                                          >
                                            <code className="text-amber-300 font-mono-code font-bold">
                                              {v.symbol}
                                            </code>
                                            <span className="text-slate-400">
                                              {' '}
                                              — {formatInlineTokens(v.meaning)}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="p-3 bg-slate-900 border-l-3 border-[#EA580C] text-xs font-mono-code text-slate-200">
                                        <strong className="text-[#EA580C]">
                                          Worked Calculation:{' '}
                                        </strong>
                                        {formatInlineTokens(f.workedExample)}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        )}
                      </div>

                      {/* Right 4 Cols: Key Takeaways + Common Pitfalls */}
                      <div className="lg:col-span-4 space-y-5">
                        <div className="p-4 sm:p-5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-3">
                          <div className="text-xs font-mono-code uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            {labels.takeawaysLabel}
                          </div>
                          <ul className="space-y-2.5">
                            {sec.keyTakeaways.map((kt, kIdx) => (
                              <li
                                key={kIdx}
                                className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                              >
                                <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{formatInlineTokens(kt)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 sm:p-5 bg-red-50/40 dark:bg-red-950/15 border border-red-200 dark:border-red-900/40 space-y-3">
                          <div className="text-xs font-mono-code uppercase tracking-wider text-red-700 dark:text-red-400 font-bold flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4" />
                            {labels.pitfallsLabel}
                          </div>
                          <ul className="space-y-2.5">
                            {sec.commonPitfalls.map((pit, pIdx) => (
                              <li
                                key={pIdx}
                                className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-red-600 font-bold">×</span>
                                <span>{formatInlineTokens(pit)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Extracted & Annotated Original Book Figures for this Section */}
                    {sec.figures && sec.figures.length > 0 && (
                      <div className="pt-6 border-t border-[#E5E0D8] dark:border-slate-800 space-y-4">
                        <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <ImageIcon className="w-4 h-4 text-[#EA580C]" />
                          Original Book Figures & Bierut Analytical Breakdown ({sec.figures.length})
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {sec.figures.map((fig) => (
                            <div
                              key={fig.file}
                              className="border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-4 flex flex-col justify-between space-y-4"
                            >
                              <div className="space-y-3">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-[11px] font-mono-code text-slate-500">
                                    {fig.originalLabel}
                                  </span>
                                  <button
                                    onClick={() => setLightboxFigure(fig)}
                                    className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#EA580C] hover:underline cursor-pointer shrink-0"
                                  >
                                    <Maximize2 className="w-3 h-3" />
                                    Inspect Full Size
                                  </button>
                                </div>

                                <div
                                  onClick={() => setLightboxFigure(fig)}
                                  className="bg-white p-3 border border-[#E5E0D8] flex items-center justify-center max-h-72 overflow-hidden cursor-zoom-in"
                                >
                                  <img
                                    src={`${import.meta.env.BASE_URL}books/${bookSlug}/assets/${fig.file}`}
                                    alt={fig.originalLabel}
                                    className="max-h-64 w-auto object-contain"
                                    loading="lazy"
                                  />
                                </div>

                                <h4 className="font-display text-xl text-slate-900 dark:text-white">
                                  {fig.bierutTitle}
                                </h4>
                                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {fig.editorialAnalysis}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#E5E0D8] dark:border-slate-800 space-y-1">
                                {fig.keyTakeaways.map((ft, idx) => (
                                  <div
                                    key={idx}
                                    className="text-[11px] font-mono-code text-slate-600 dark:text-slate-400"
                                  >
                                    • {ft}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* =====================================================================
          5. ARCHITECTURAL TRADE-OFF & DECISION MATRICES (MOBILE CARDS + TABLE)
         ===================================================================== */}
      {cognitiveZoom !== 'brief' && chapter.tradeOffMatrices.length > 0 && (
        <section id="matrices-sec" className="space-y-6 scroll-mt-32">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#7C3AED]">
              {labels.matrixSuperLabel}
            </span>
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">
              {labels.matrixHeading}
            </h2>
          </div>

          <div className="space-y-6">
            {chapter.tradeOffMatrices.map((matrix, mIdx) => {
              const showMobileTable = Boolean(forceTableOnMobile[mIdx]);
              return (
                <div
                  key={mIdx}
                  className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl text-slate-900 dark:text-white">
                        {matrix.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {matrix.description}
                      </p>
                    </div>

                    {/* Mobile Toggle between Comparison Cards and Full Table */}
                    <button
                      onClick={() =>
                        setForceTableOnMobile((prev) => ({
                          ...prev,
                          [mIdx]: !prev[mIdx],
                        }))
                      }
                      className="md:hidden self-start inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-[11px] font-mono-code text-slate-600 dark:text-slate-300 cursor-pointer"
                    >
                      {showMobileTable ? (
                        <>
                          <LayoutList className="w-3.5 h-3.5 text-[#EA580C]" />
                          <span>Switch to Mobile Cards</span>
                        </>
                      ) : (
                        <>
                          <TableIcon className="w-3.5 h-3.5 text-[#7C3AED]" />
                          <span>View Full Table</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* MOBILE STACKED COMPARISON CARDS (< 768px unless toggled) */}
                  {!showMobileTable && (
                    <div className="grid grid-cols-1 gap-3 md:hidden">
                      {matrix.rows.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 p-3.5 space-y-2.5"
                        >
                          <div className="pb-2 border-b border-[#E5E0D8] dark:border-slate-800 flex items-center justify-between gap-2">
                            <span className="text-[10px] font-mono-code uppercase text-slate-400">
                              {matrix.headers[0] || 'Dimension'}
                            </span>
                            <span className="px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-xs font-mono-code font-bold">
                              {row[0]}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {row.slice(1).map((cell, cIdx) => (
                              <div key={cIdx} className="text-xs leading-relaxed">
                                <span className="font-mono-code uppercase text-[10px] text-[#7C3AED] dark:text-purple-400 font-bold block">
                                  {matrix.headers[cIdx + 1] || `Attribute ${cIdx + 1}`}:
                                </span>
                                <span className="text-slate-800 dark:text-slate-200">{cell}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TABLET & DESKTOP SWISS COMPARISON TABLE */}
                  <div
                    className={`${
                      showMobileTable ? 'block' : 'hidden md:block'
                    } overflow-x-auto`}
                  >
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#111827] text-white font-mono-code uppercase">
                          {matrix.headers.map((h, i) => (
                            <th key={i} className="p-3 border border-slate-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {matrix.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="even:bg-[#FAF8F5] dark:even:bg-slate-950 border-b border-[#E5E0D8] dark:border-slate-800"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3 border border-[#E5E0D8] dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed ${
                                  cIdx === 0 ? 'font-bold font-mono-code' : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F5] dark:bg-slate-950 border-l-4 border-[#7C3AED] text-xs text-slate-800 dark:text-slate-200">
                    <strong className="font-mono-code uppercase text-[#7C3AED]">
                      Decision Verdict Rule:{' '}
                    </strong>
                    {matrix.verdictRule}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =====================================================================
          6. REAL-WORLD SCENARIOS & CASE AUDITS
         ===================================================================== */}
      {cognitiveZoom !== 'brief' && chapter.engineeringScenarios.length > 0 && (
        <section id="scenarios-sec" className="space-y-6 scroll-mt-32">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#059669]">
              {labels.scenarioSuperLabel}
            </span>
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">
              {labels.scenarioHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {chapter.engineeringScenarios.map((sc) => (
              <div
                key={sc.id}
                className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#059669] font-bold">
                    <Wrench className="w-4 h-4" />
                    <span>{labels.scenarioBadge}</span>
                  </div>
                  <h3 className="font-display text-2xl text-slate-900 dark:text-white">
                    {sc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>Context:</strong> {sc.roleAndContext}
                  </p>

                  <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border-l-3 border-amber-500 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-mono-code uppercase text-amber-700 dark:text-amber-400 block">
                      {labels.symptomLabel}:
                    </strong>
                    {sc.symptomOrFailure}
                  </div>

                  <div className="p-3 bg-red-50/60 dark:bg-red-950/20 border-l-3 border-red-500 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-mono-code uppercase text-red-700 dark:text-red-400 block">
                      {labels.naiveLabel}:
                    </strong>
                    {sc.naiveFixAndWhyItFails}
                  </div>

                  <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/20 border-l-3 border-emerald-600 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-mono-code uppercase text-emerald-700 dark:text-emerald-400 block">
                      {labels.solutionLabel}:
                    </strong>
                    {sc.firstPrinciplesSolution}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E0D8] dark:border-slate-800 text-xs font-mono-code text-slate-700 dark:text-slate-300">
                  <strong className="text-[#059669]">Measured Impact: </strong>
                  {sc.measurableOutcome}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================================
          7. CHAPTER FOOTER: LAUNCH ACTIVE RECALL OR NEXT CHAPTER
         ===================================================================== */}
      <footer className="border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xs font-mono-code uppercase text-[#EA580C] font-bold">
            Lock In Chapter {chapter.chapterNumber} Mastery
          </div>
          <h3 className="font-display text-2xl text-slate-900 dark:text-white mt-1">
            Ready to test your intuition with Socrates Active Recall?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Includes {chapter.activeRecall.quiz.length} diagnostic dilemmas,{' '}
            {chapter.activeRecall.flashcards.length} flashcards, and{' '}
            {chapter.activeRecall.feynmanChallenges.length} Feynman teaching challenges.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => onOpenRecallForChapter(chapter.chapterNumber)}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase tracking-wider font-bold cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Test Ch {chapter.chapterNumber} Mastery</span>
          </button>

          {chapter.chapterNumber < totalChapters && (
            <button
              onClick={() => {
                onSelectChapter(chapter.chapterNumber + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#111827] dark:bg-slate-800 text-white text-xs font-mono-code uppercase tracking-wider cursor-pointer"
            >
              <span>Next: Ch {chapter.chapterNumber + 1}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </footer>

      {/* LIGHTBOX MODAL FOR FULL-SIZE FIGURE INSPECTION */}
      {lightboxFigure && (
        <div
          onClick={() => setLightboxFigure(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 md:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full bg-white dark:bg-slate-900 border border-slate-700 p-5 sm:p-6 space-y-4 max-h-[92vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-[#E5E0D8] dark:border-slate-800 pb-3">
              <div>
                <div className="text-xs font-mono-code text-[#EA580C]">
                  {lightboxFigure.originalLabel}
                </div>
                <h3 className="font-display text-2xl text-slate-900 dark:text-white">
                  {lightboxFigure.bierutTitle}
                </h3>
              </div>
              <button
                onClick={() => setLightboxFigure(null)}
                className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white p-4 border border-[#E5E0D8] flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}books/${bookSlug}/assets/${lightboxFigure.file}`}
                alt={lightboxFigure.originalLabel}
                className="max-h-[55vh] w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {lightboxFigure.editorialAnalysis}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
