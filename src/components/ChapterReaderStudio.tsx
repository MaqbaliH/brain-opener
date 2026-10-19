import React, { useState } from 'react';
import { ChapterMastery, BookFigure } from '../types/book';
import { RichParagraphs, formatInlineTokens } from './RichText';
import { InteractiveSimulators } from './InteractiveSimulators';
import {
  ShieldCheck,
  Clock,
  FileText,
  Image as ImageIcon,
  Lightbulb,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Calculator,
  Compass,
  Wrench,
  Maximize2,
  X,
  ArrowRight,
  ChevronRight,
  Activity,
} from 'lucide-react';

interface ChapterReaderStudioProps {
  chapter: ChapterMastery;
  bookSlug: string;
  onSelectChapter: (chapterNum: number) => void;
  totalChapters: number;
  onOpenRecallForChapter: (chapterNum: number) => void;
}

export const ChapterReaderStudio: React.FC<ChapterReaderStudioProps> = ({
  chapter,
  bookSlug,
  onSelectChapter,
  totalChapters,
  onOpenRecallForChapter,
}) => {
  const [lightboxFigure, setLightboxFigure] = useState<BookFigure | null>(null);
  const [activeDiagramIdx, setActiveDiagramIdx] = useState(0);
  const [animateSvgFlow, setAnimateSvgFlow] = useState(true);

  const activeDiagram =
    chapter.customDiagrams[Math.min(activeDiagramIdx, Math.max(chapter.customDiagrams.length - 1, 0))];

  return (
    <div className="space-y-10 pb-16">
      {/* 1. CHAPTER HERO & VERITAS CERTIFICATION HEADER */}
      <header className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E0D8] dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[#EA580C] text-white text-xs font-mono-code font-bold uppercase tracking-wider">
              Chapter {String(chapter.chapterNumber).padStart(2, '0')} / {totalChapters}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              {chapter.readingTimeMinutes} min deep mastery read
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-slate-500">
              <FileText className="w-3.5 h-3.5" />
              {chapter.sourceWordCount.toLocaleString()} source words synthesized
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-mono-code">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              Veritas Audited: {Math.round(chapter.veritasAudit.sectionCoverageScore * 100)}% Depth •{' '}
              {chapter.veritasAudit.figuresIncluded} Figures
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-white leading-[1.08]">
              {chapter.title}
            </h1>
            <p className="font-editorial text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {chapter.subtitle}
            </p>
            <div className="pt-2">
              <div className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C] mb-1.5">
                Executive Architectural Thesis
              </div>
              <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                {chapter.executiveThesis}
              </p>
            </div>
          </div>

          {/* Paradigm Shift Box */}
          <div className="lg:col-span-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 p-5 space-y-4">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
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

        {/* Section Quick-Jump Bar */}
        <div className="mt-8 pt-4 border-t border-[#E5E0D8] dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono-code uppercase text-slate-400 mr-2">
            Chapter Architecture:
          </span>
          {chapter.deepSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-2.5 py-1 text-xs font-mono-code bg-[#FAF8F5] dark:bg-slate-800 hover:bg-[#EA580C] hover:text-white border border-[#E5E0D8] dark:border-slate-700 transition"
            >
              §{sec.sectionNumber} {sec.title}
            </a>
          ))}
        </div>
      </header>

      {/* 2. FEYNMAN COGNITIVE MENTAL MODELS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#EA580C]">
              Node 3 (Feynman) • Permanent Cognitive Hooks
            </span>
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">
              Core Mental Models for Chapter {chapter.chapterNumber}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapter.mentalModels.map((mm, idx) => (
            <div
              key={mm.id}
              className="kinetic-card border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between space-y-4"
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
                    <span className="text-slate-600 dark:text-slate-300">{mm.naiveIntuition}</span>
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
                  Engineering Rule:{' '}
                </strong>
                {mm.howToApply}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2B. INTERACTIVE FIRST-PRINCIPLES LIVE SIMULATOR */}
      <InteractiveSimulators chapterNumber={chapter.chapterNumber} bookSlug={bookSlug} />

      {/* 3. PRISM CUSTOM INTERACTIVE SVG DIAGRAMS (VISUAL MENTAL-MODEL LAB) */}
      {chapter.customDiagrams.length > 0 && activeDiagram && (
        <section className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-widest text-[#0D9488] mb-1">
                Node 4 (Prism + Graphy) • Interactive Architecture Blueprint
              </div>
              <h2 className="font-display text-3xl text-slate-900 dark:text-white">
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
                    Blueprint {idx + 1}: {d.title.slice(0, 26)}
                    {d.title.length > 26 ? '…' : ''}
                  </button>
                ))}
            </div>
          </div>

          {/* Rendered SVG Schematic */}
          <div className="w-full overflow-x-auto bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 p-4 bg-swiss-grid">
            <div
              className={`w-full min-w-[680px] flex justify-center ${
                animateSvgFlow ? 'svg-flow-active' : ''
              }`}
              dangerouslySetInnerHTML={{ __html: activeDiagram.svgCode }}
            />
          </div>

          {/* Bierut Lure Caption + Step Annotations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
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

      {/* 4. EXHAUSTIVE SECTION-BY-SECTION DEEP DIVES */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#2563EB]">
            Node 2 (Axiom) + Node 3 (Feynman) • 100% Concept Deconstruction
          </span>
          <h2 className="font-display text-3xl text-slate-900 dark:text-white">
            Exhaustive Section-by-Section Deep Dives
          </h2>
        </div>

        {chapter.deepSections.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-10 space-y-8 scroll-mt-20"
          >
            {/* Section Header */}
            <div className="border-b border-[#E5E0D8] dark:border-slate-800 pb-4">
              <div className="text-xs font-mono-code font-bold text-[#EA580C] uppercase tracking-wider">
                Section §{sec.sectionNumber}
              </div>
              <h3 className="mt-1 font-display text-3xl md:text-4xl text-slate-900 dark:text-white">
                {sec.title}
              </h3>
              <p className="mt-1 font-editorial text-lg text-slate-600 dark:text-slate-300">
                {sec.subtitle}
              </p>
            </div>

            {/* Main Prose + Sidebar Takeaways Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 8 Cols: Deep First-Principles Explanation (Optimal 65ch reading measure) */}
              <div className="lg:col-span-8 space-y-6">
                <RichParagraphs
                  text={sec.coreMechanism}
                  className="editorial-prose text-slate-800 dark:text-slate-200 font-editorial"
                />

                {/* Step-by-Step Mechanism Flow */}
                {sec.stepByStepFlow && sec.stepByStepFlow.length > 0 && (
                  <div className="pt-4 space-y-3">
                    <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500">
                      Step-by-Step Architectural Execution Flow
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {sec.stepByStepFlow.map((s) => (
                        <div
                          key={s.step}
                          className="flex items-start gap-3.5 p-3.5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800"
                        >
                          <span className="px-2 py-0.5 bg-[#111827] dark:bg-[#EA580C] text-white text-xs font-mono-code font-bold shrink-0">
                            {s.step}
                          </span>
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">
                              {formatInlineTokens(s.title)}
                            </div>
                            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                              {formatInlineTokens(s.detail)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mathematical & Quantitative Formula Breakdowns */}
                {sec.formulas && sec.formulas.length > 0 && (
                  <div className="pt-4 space-y-4">
                    <div className="text-xs font-mono-code uppercase tracking-wider text-[#2563EB] flex items-center gap-1.5">
                      <Calculator className="w-4 h-4" />
                      Quantitative & Mathematical Foundations
                    </div>
                    {sec.formulas.map((f, fIdx) => (
                      <div
                        key={fIdx}
                        className="border border-slate-800 bg-slate-950 text-slate-100 p-5 space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                          <span className="text-sm font-bold text-white">{f.name}</span>
                          <code className="px-3 py-1.5 bg-slate-900 text-amber-300 font-mono-code text-xs sm:text-sm border border-slate-700 overflow-x-auto max-w-full block">
                            {f.expression}
                          </code>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          <strong className="text-emerald-400 font-mono-code uppercase">
                            First-Principles Intuition:{' '}
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
                          <strong className="text-[#EA580C]">Worked Calculation: </strong>
                          {formatInlineTokens(f.workedExample)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right 4 Cols: Key Takeaways + Common Pitfalls */}
              <div className="lg:col-span-4 space-y-5">
                <div className="p-5 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-3">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Core Engineering Takeaways
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

                <div className="p-5 bg-red-50/40 dark:bg-red-950/15 border border-red-200 dark:border-red-900/40 space-y-3">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-red-700 dark:text-red-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Production Failure Modes & Pitfalls
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
          </article>
        ))}
      </section>

      {/* 5. ARCHITECTURAL TRADE-OFF & DECISION MATRICES */}
      {chapter.tradeOffMatrices.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#7C3AED]">
              Node 2 (Axiom) • Engineering Decision Frameworks
            </span>
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">
              Architectural Trade-Off & Comparison Matrices
            </h2>
          </div>

          <div className="space-y-6">
            {chapter.tradeOffMatrices.map((matrix, mIdx) => (
              <div
                key={mIdx}
                className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4"
              >
                <div>
                  <h3 className="font-display text-2xl text-slate-900 dark:text-white">
                    {matrix.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {matrix.description}
                  </p>
                </div>

                <div className="overflow-x-auto">
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
            ))}
          </div>
        </section>
      )}

      {/* 6. REAL-WORLD ENGINEERING SCENARIOS ("IN THE TRENCHES") */}
      {chapter.engineeringScenarios.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#059669]">
              Node 3 (Feynman) • Production Architecture Case Studies
            </span>
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">
              In the Trenches: Real-World Engineering Scenarios
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {chapter.engineeringScenarios.map((sc) => (
              <div
                key={sc.id}
                className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#059669]">
                    <Wrench className="w-4 h-4" />
                    <span>PRODUCTION CASE STUDY</span>
                  </div>
                  <h3 className="font-display text-2xl text-slate-900 dark:text-white">
                    {sc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>Context:</strong> {sc.roleAndContext}
                  </p>

                  <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border-l-3 border-amber-500 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-mono-code uppercase text-amber-700 dark:text-amber-400 block">
                      Observed Production Symptom:
                    </strong>
                    {sc.symptomOrFailure}
                  </div>

                  <div className="p-3 bg-red-50/60 dark:bg-red-950/20 border-l-3 border-red-500 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-mono-code uppercase text-red-700 dark:text-red-400 block">
                      Naive Fix & Why It Fails:
                    </strong>
                    {sc.naiveFixAndWhyItFails}
                  </div>

                  <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/20 border-l-3 border-emerald-600 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-mono-code uppercase text-emerald-700 dark:text-emerald-400 block">
                      First-Principles Solution:
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

      {/* 7. CHAPTER FOOTER: LAUNCH ACTIVE RECALL OR NEXT CHAPTER */}
      <footer className="border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xs font-mono-code uppercase text-[#EA580C] font-bold">
            Lock In Chapter {chapter.chapterNumber} Mastery
          </div>
          <h3 className="font-display text-2xl text-slate-900 dark:text-white mt-1">
            Ready to test your intuition with Socrates Active Recall?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Includes {chapter.activeRecall.quiz.length} engineering dilemma quizzes,{' '}
            {chapter.activeRecall.flashcards.length} flashcards, and{' '}
            {chapter.activeRecall.feynmanChallenges.length} Feynman teaching challenges.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenRecallForChapter(chapter.chapterNumber)}
            className="px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase tracking-wider cursor-pointer"
          >
            Test Chapter {chapter.chapterNumber} Mastery
          </button>

          {chapter.chapterNumber < totalChapters && (
            <button
              onClick={() => {
                onSelectChapter(chapter.chapterNumber + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111827] dark:bg-slate-800 text-white text-xs font-mono-code uppercase tracking-wider cursor-pointer"
            >
              Next: Chapter {chapter.chapterNumber + 1}
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
            className="max-w-5xl w-full bg-white dark:bg-slate-900 border border-slate-700 p-6 space-y-4 max-h-[92vh] overflow-y-auto"
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
