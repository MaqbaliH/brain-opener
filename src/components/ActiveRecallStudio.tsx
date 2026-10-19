import React, { useState, useMemo } from 'react';
import { BookMasteryPackage } from '../types/book';
import {
  Zap,
  CheckCircle2,
  XCircle,
  RotateCw,
  Brain,
  HelpCircle,
  Layers,
  Award,
  Eye,
} from 'lucide-react';

interface ActiveRecallStudioProps {
  book: BookMasteryPackage;
  initialChapterNumber?: number;
}

export const ActiveRecallStudio: React.FC<ActiveRecallStudioProps> = ({
  book,
  initialChapterNumber,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>(
    initialChapterNumber || 'all'
  );
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcards' | 'feynman'>('quiz');

  // Quiz state: map questionId -> selected option label
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  // Feynman state
  const [feynmanDrafts, setFeynmanDrafts] = useState<Record<string, string>>({});
  const [checkedRubrics, setCheckedRubrics] = useState<Record<string, boolean>>({});
  const [revealedModelAnswers, setRevealedModelAnswers] = useState<Record<string, boolean>>({});

  const targetChapters = useMemo(() => {
    if (selectedChapter === 'all') return book.chapters;
    return book.chapters.filter((c) => c.chapterNumber === selectedChapter);
  }, [book, selectedChapter]);

  const allQuizzes = useMemo(() => {
    return targetChapters.flatMap((c) =>
      c.activeRecall.quiz.map((q) => ({
        ...q,
        chapterNumber: c.chapterNumber,
        chapterTitle: c.title,
      }))
    );
  }, [targetChapters]);

  const allFlashcards = useMemo(() => {
    return targetChapters.flatMap((c) =>
      c.activeRecall.flashcards.map((f) => ({
        ...f,
        chapterNumber: c.chapterNumber,
      }))
    );
  }, [targetChapters]);

  const allFeynmanChallenges = useMemo(() => {
    return targetChapters.flatMap((c) =>
      c.activeRecall.feynmanChallenges.map((fc) => ({
        ...fc,
        chapterNumber: c.chapterNumber,
        chapterTitle: c.title,
      }))
    );
  }, [targetChapters]);

  const currentFlashcard =
    allFlashcards[Math.min(cardIndex, Math.max(allFlashcards.length - 1, 0))];

  const correctQuizCount = useMemo(() => {
    let count = 0;
    for (const q of allQuizzes) {
      const picked = selectedAnswers[q.id];
      if (!picked) continue;
      const opt = q.options.find((o) => o.label === picked);
      if (opt?.isCorrect) count++;
    }
    return count;
  }, [allQuizzes, selectedAnswers]);

  return (
    <div className="space-y-6">
      {/* Header & Mode Switcher */}
      <div className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#D97706] mb-1">
              <Zap className="w-4 h-4" />
              <span>Node 6 (Socrates) • Active Retrieval & Feynman Studio</span>
            </div>
            <h1 className="font-display text-3xl text-slate-900 dark:text-white">
              Active Recall, Diagnostic Scenarios & Feynman Lab
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <select
              value={selectedChapter}
              onChange={(e) => {
                setSelectedChapter(
                  e.target.value === 'all' ? 'all' : Number(e.target.value)
                );
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className="w-full sm:w-auto px-3 py-2.5 text-xs font-mono-code border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="all">All 10 Chapters ({book.chapters.length})</option>
              {book.chapters.map((c) => (
                <option key={c.chapterNumber} value={c.chapterNumber}>
                  Ch {c.chapterNumber}: {c.title.replace(/^Chapter \d+\.\s*/, '')}
                </option>
              ))}
            </select>

            <div className="grid grid-cols-3 sm:inline-flex border border-[#E5E0D8] dark:border-slate-700 w-full sm:w-auto">
              {[
                { id: 'quiz', label: `Quizzes (${allQuizzes.length})`, icon: HelpCircle },
                { id: 'flashcards', label: `Cards (${allFlashcards.length})`, icon: Layers },
                {
                  id: 'feynman',
                  label: `Feynman (${allFeynmanChallenges.length})`,
                  icon: Brain,
                },
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2.5 text-[11px] sm:text-xs font-mono-code cursor-pointer transition ${
                      active
                        ? 'bg-[#111827] text-white dark:bg-[#EA580C]'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* TAB 1: SCENARIO QUIZZES */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between px-4 py-3 bg-[#F3EFEA] dark:bg-slate-800/70 border border-[#E5E0D8] dark:border-slate-700">
            <span className="text-xs font-mono-code text-slate-700 dark:text-slate-200">
              Diagnostic Progress: Answered {Object.keys(selectedAnswers).length} of{' '}
              {allQuizzes.length} Engineering Dilemmas
            </span>
            <span className="text-xs font-mono-code font-bold text-[#EA580C] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Score: {correctQuizCount} / {Object.keys(selectedAnswers).length || 0} Correct
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {allQuizzes.map((q, idx) => {
              const pickedLabel = selectedAnswers[q.id];
              return (
                <div
                  key={`${q.chapterNumber}-${q.id}-${idx}`}
                  className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4"
                >
                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-500">
                    <span>
                      CHAPTER {q.chapterNumber} • DIAGNOSTIC DILEMMA #{idx + 1}
                    </span>
                    {pickedLabel && (
                      <button
                        onClick={() => {
                          const copy = { ...selectedAnswers };
                          delete copy[q.id];
                          setSelectedAnswers(copy);
                        }}
                        className="text-xs underline hover:text-[#EA580C] cursor-pointer"
                      >
                        Reset Question
                      </button>
                    )}
                  </div>

                  <h3 className="font-editorial text-lg md:text-xl text-slate-900 dark:text-white leading-snug">
                    {q.scenarioPrompt}
                  </h3>

                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {q.options.map((opt) => {
                      const isPicked = pickedLabel === opt.label;
                      const showResult = Boolean(pickedLabel);

                      let borderStyle =
                        'border-[#E5E0D8] dark:border-slate-800 hover:border-slate-400';
                      let bgStyle = 'bg-[#FAF8F5] dark:bg-slate-950';

                      if (showResult) {
                        if (opt.isCorrect) {
                          borderStyle = 'border-emerald-600 dark:border-emerald-500';
                          bgStyle = 'bg-emerald-50/70 dark:bg-emerald-950/30';
                        } else if (isPicked && !opt.isCorrect) {
                          borderStyle = 'border-red-600 dark:border-red-500';
                          bgStyle = 'bg-red-50/70 dark:bg-red-950/30';
                        }
                      }

                      return (
                        <div
                          key={opt.label}
                          onClick={() => {
                            if (!pickedLabel) {
                              setSelectedAnswers((prev) => ({
                                ...prev,
                                [q.id]: opt.label,
                              }));
                            }
                          }}
                          className={`p-4 border transition cursor-pointer ${borderStyle} ${bgStyle}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                              <span className="px-2 py-0.5 text-xs font-mono-code font-bold bg-slate-900 text-white dark:bg-slate-800 shrink-0 mt-0.5">
                                {opt.label}
                              </span>
                              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {opt.text}
                              </span>
                            </div>
                            {showResult && opt.isCorrect && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            )}
                            {showResult && isPicked && !opt.isCorrect && (
                              <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                            )}
                          </div>

                          {showResult && (
                            <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-9">
                              <strong className="font-mono-code uppercase">
                                {opt.isCorrect ? 'First-Principles Proof: ' : 'Why This Fails: '}
                              </strong>
                              {opt.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: SPACED REPETITION FLASHCARDS (3D PERSPECTIVE FLIP) */}
      {activeTab === 'flashcards' && currentFlashcard && (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-500">
            <span>
              Card {cardIndex + 1} of {allFlashcards.length} (Chapter{' '}
              {currentFlashcard.chapterNumber} • {currentFlashcard.category.toUpperCase()})
            </span>
            <span className="text-emerald-600 font-bold">
              Mastered: {Object.values(masteredCards).filter(Boolean).length} /{' '}
              {allFlashcards.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-[#EA580C] transition-all duration-300"
              style={{
                width: `${((cardIndex + 1) / Math.max(allFlashcards.length, 1)) * 100}%`,
              }}
            />
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="perspective-1000 cursor-pointer"
          >
            <div
              className={`relative min-h-[410px] sm:min-h-[350px] w-full preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT FACE */}
              <div className="absolute inset-0 backface-hidden border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-8 md:p-12 flex flex-col justify-between shadow-sm hover:border-[#EA580C] transition overflow-y-auto">
                <div className="flex items-center justify-between text-xs font-mono-code uppercase tracking-wider text-slate-400">
                  <span>FRONT • RETRIEVAL PROMPT</span>
                  <span className="inline-flex items-center gap-1 text-[#EA580C]">
                    <RotateCw className="w-3.5 h-3.5" />
                    Tap to flip
                  </span>
                </div>

                <div className="my-auto py-4">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white leading-snug">
                    {currentFlashcard.front}
                  </h2>
                </div>

                <div className="text-xs font-mono-code text-slate-400">
                  ID: {currentFlashcard.id}
                </div>
              </div>

              {/* BACK FACE */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 border-2 border-[#EA580C] bg-[#FAF8F5] dark:bg-slate-900 p-5 sm:p-8 md:p-12 flex flex-col justify-between shadow-md overflow-y-auto">
                <div className="flex items-center justify-between text-xs font-mono-code uppercase tracking-wider text-[#EA580C]">
                  <span>BACK • FIRST-PRINCIPLES ANSWER</span>
                  <span className="inline-flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    Flip back
                  </span>
                </div>

                <div className="my-auto py-4 space-y-4">
                  <p className="font-editorial text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    {currentFlashcard.back}
                  </p>
                  {currentFlashcard.mentalHook && (
                    <div className="p-3 bg-white dark:bg-slate-950 border-l-4 border-[#EA580C] text-xs font-mono-code text-slate-700 dark:text-slate-300">
                      <strong>Mental Hook:</strong> {currentFlashcard.mentalHook}
                    </div>
                  )}
                </div>

                <div className="text-xs font-mono-code text-slate-400">
                  ID: {currentFlashcard.id}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => {
                setCardIndex((prev) => (prev > 0 ? prev - 1 : allFlashcards.length - 1));
                setIsFlipped(false);
              }}
              className="px-4 py-2.5 border border-[#E5E0D8] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono-code cursor-pointer hover:bg-slate-100"
            >
              ← Previous Card
            </button>

            <button
              onClick={() => {
                setMasteredCards((prev) => ({
                  ...prev,
                  [currentFlashcard.id]: !prev[currentFlashcard.id],
                }));
              }}
              className={`px-4 py-2.5 text-xs font-mono-code uppercase cursor-pointer ${
                masteredCards[currentFlashcard.id]
                  ? 'bg-emerald-600 text-white'
                  : 'border border-emerald-600 text-emerald-700 dark:text-emerald-400'
              }`}
            >
              {masteredCards[currentFlashcard.id] ? '✓ Marked Mastered' : 'Mark as Mastered'}
            </button>

            <button
              onClick={() => {
                setCardIndex((prev) => (prev + 1) % allFlashcards.length);
                setIsFlipped(false);
              }}
              className="px-4 py-2.5 bg-[#111827] dark:bg-[#EA580C] text-white text-xs font-mono-code cursor-pointer"
            >
              Next Card →
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: FEYNMAN "EXPLAIN IT BACK" CHALLENGES */}
      {activeTab === 'feynman' && (
        <div className="space-y-6">
          {allFeynmanChallenges.map((fc, idx) => {
            const isRevealed = Boolean(revealedModelAnswers[fc.id]);
            return (
              <div
                key={`${fc.chapterNumber}-${fc.id}-${idx}`}
                className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-[#EA580C]">
                    Chapter {fc.chapterNumber} • Feynman Teaching Challenge #{idx + 1}
                  </span>
                  <span className="text-xs font-mono-code text-slate-500">
                    Target Concept: <strong>{fc.conceptTitle}</strong>
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-slate-900 dark:text-white">
                  {fc.prompt}
                </h3>

                <textarea
                  rows={4}
                  value={feynmanDrafts[fc.id] || ''}
                  onChange={(e) =>
                    setFeynmanDrafts((prev) => ({ ...prev, [fc.id]: e.target.value }))
                  }
                  placeholder="Write your plain-language explanation from first principles here before revealing the rubric..."
                  className="w-full p-4 text-sm border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                />

                {/* 4-Point Self-Grading Rubric */}
                <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-2.5">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500">
                    Self-Audit Rubric Checklist (Did your explanation hit these mechanisms?)
                  </div>
                  {fc.rubricChecklist.map((point, rIdx) => {
                    const key = `${fc.id}-${rIdx}`;
                    return (
                      <label
                        key={key}
                        className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={Boolean(checkedRubrics[key])}
                          onChange={(e) =>
                            setCheckedRubrics((prev) => ({
                              ...prev,
                              [key]: e.target.checked,
                            }))
                          }
                          className="mt-0.5 accent-[#EA580C]"
                        />
                        <span>{point}</span>
                      </label>
                    );
                  })}
                </div>

                <div>
                  <button
                    onClick={() =>
                      setRevealedModelAnswers((prev) => ({
                        ...prev,
                        [fc.id]: !prev[fc.id],
                      }))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs font-mono-code uppercase tracking-wider cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {isRevealed
                      ? 'Hide Feynman Model Explanation'
                      : 'Compare With Feynman Model Explanation'}
                  </button>

                  {isRevealed && (
                    <div className="mt-4 p-5 bg-emerald-950/5 dark:bg-emerald-950/20 border-l-4 border-emerald-600 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      <div className="text-xs font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold mb-2">
                        Feynman Reference Explanation:
                      </div>
                      {fc.modelExplanation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
