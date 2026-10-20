import React, { useState, useEffect } from 'react';
import {
  Sliders,
  Play,
  RotateCcw,
  Sparkles,
  Cpu,
  Gauge,
  Activity,
  Zap,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface InteractiveSimulatorsProps {
  chapterNumber: number;
  bookSlug?: string;
}

const CANDIDATE_TOKENS = [
  { token: ' architecture', logit: 4.2 },
  { token: ' system', logit: 3.6 },
  { token: ' pipeline', logit: 3.1 },
  { token: ' model', logit: 2.5 },
  { token: ' framework', logit: 1.8 },
  { token: ' banana', logit: -0.4 },
];

export const InteractiveSimulators: React.FC<InteractiveSimulatorsProps> = ({
  chapterNumber,
  bookSlug = 'ai-engineering',
}) => {
  // =========================================================================
  // SIMULATOR A (Ch 1-2): Live Softmax Temperature, Top-k & Top-p Sampler
  // =========================================================================
  const [temperature, setTemperature] = useState<number>(0.8);
  const [topK, setTopK] = useState<number>(5);
  const [topP, setTopP] = useState<number>(0.9);
  const [sampledTokenIdx, setSampledTokenIdx] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [sampledHistory, setSampledHistory] = useState<string[]>([
    'The',
    ' foundation',
  ]);

  // Compute softmax with Temperature, Top-k, and Top-p
  const rawScaled = CANDIDATE_TOKENS.map((t, i) => ({
    ...t,
    idx: i,
    scaledExp: Math.exp(t.logit / Math.max(temperature, 0.05)),
  }));
  const sumExp = rawScaled.reduce((acc, x) => acc + x.scaledExp, 0);
  const withProbs = rawScaled.map((x) => ({
    ...x,
    prob: x.scaledExp / sumExp,
  }));

  // Apply Top-k and Top-p filtering
  let cumulative = 0;
  const processedTokens = withProbs.map((item, rank) => {
    const passesTopK = rank < topK;
    const prevCumulative = cumulative;
    cumulative += item.prob;
    const passesTopP = rank === 0 || prevCumulative < topP;
    const active = passesTopK && passesTopP;
    return {
      ...item,
      passesTopK,
      passesTopP,
      active,
      cumulativeProb: cumulative,
    };
  });

  const activeSum = processedTokens
    .filter((t) => t.active)
    .reduce((a, b) => a + b.prob, 0);

  const normalizedTokens = processedTokens.map((t) => ({
    ...t,
    finalProb: t.active && activeSum > 0 ? t.prob / activeSum : 0,
  }));

  const handleRollToken = () => {
    if (isRolling) return;
    setIsRolling(true);
    let ticks = 0;
    const interval = setInterval(() => {
      ticks++;
      setSampledTokenIdx(ticks % normalizedTokens.length);
      if (ticks > 8) {
        clearInterval(interval);
        const r = Math.random();
        let acc = 0;
        let chosen = 0;
        for (const t of normalizedTokens) {
          acc += t.finalProb;
          if (r <= acc && t.active) {
            chosen = t.idx;
            break;
          }
        }
        setSampledTokenIdx(chosen);
        setSampledHistory((prev) => [
          ...prev.slice(-7),
          normalizedTokens[chosen].token,
        ]);
        setIsRolling(false);
      }
    }, 65);
  };

  // =========================================================================
  // SIMULATOR B (Ch 3-4): Cross-Entropy -> Perplexity & Eval Sample Size Lab
  // =========================================================================
  const [crossEntropyBits, setCrossEntropyBits] = useState<number>(2.4);
  const [targetDeltaPct, setTargetDeltaPct] = useState<number>(3);
  const perplexity = Math.pow(2, crossEntropyBits);
  const requiredSamples = Math.round(10000 / Math.pow(targetDeltaPct, 2));

  // =========================================================================
  // SIMULATOR C (Ch 5-6): Agent Compound Error (p^N) & Reflection Loop Lab
  // =========================================================================
  const [stepAccuracy, setStepAccuracy] = useState<number>(0.94);
  const [agentSteps, setAgentSteps] = useState<number>(12);
  const [useReflectionVerifier, setUseReflectionVerifier] = useState<boolean>(false);

  // With reflection verifier, effective step failure rate is squared: 1 - (1 - p)^2
  const effectiveStepAccuracy = useReflectionVerifier
    ? 1 - Math.pow(1 - stepAccuracy, 2)
    : stepAccuracy;
  const endToEndSuccess = Math.pow(effectiveStepAccuracy, agentSteps) * 100;

  // =========================================================================
  // SIMULATOR D (Ch 7-8): GPU HBM VRAM Calculator (Full vs LoRA vs QLoRA)
  // =========================================================================
  const [modelBillionParams, setModelBillionParams] = useState<number>(13);
  const [tuningMode, setTuningMode] = useState<
    'inference-fp16' | 'full-ft' | 'lora-fp16' | 'qlora-nf4'
  >('lora-fp16');

  const computeVram = () => {
    const N = modelBillionParams;
    if (tuningMode === 'inference-fp16') {
      const weights = N * 2;
      const kvAndOverhead = N * 0.4;
      return {
        weights,
        gradients: 0,
        optimizer: 0,
        activations: kvAndOverhead,
        total: weights + kvAndOverhead,
      };
    }
    if (tuningMode === 'full-ft') {
      const weights = N * 2;
      const gradients = N * 2;
      const optimizer = N * 8; // AdamW FP32 states
      const activations = N * 3.5;
      return {
        weights,
        gradients,
        optimizer,
        activations,
        total: weights + gradients + optimizer + activations,
      };
    }
    if (tuningMode === 'lora-fp16') {
      const weights = N * 2;
      const gradients = N * 0.06;
      const optimizer = N * 0.24;
      const activations = N * 1.2;
      return {
        weights,
        gradients,
        optimizer,
        activations,
        total: weights + gradients + optimizer + activations,
      };
    }
    // qlora-nf4
    const weights = N * 0.55; // 4-bit NF4 + quantization scales
    const gradients = N * 0.06;
    const optimizer = N * 0.24;
    const activations = N * 0.9;
    return {
      weights,
      gradients,
      optimizer,
      activations,
      total: weights + gradients + optimizer + activations,
    };
  };

  const vram = computeVram();

  // =========================================================================
  // SIMULATOR E (Ch 9-10): Live Token Streamer (Autoregressive vs Speculative)
  // =========================================================================
  const [specMultiplier, setSpecMultiplier] = useState<number>(2.8);
  const [cacheEnabled, setCacheEnabled] = useState<boolean>(true);
  const [streamTick, setStreamTick] = useState<number>(24);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  useEffect(() => {
    if (!isStreaming) return;
    const timer = setInterval(() => {
      setStreamTick((prev) => {
        if (prev >= 24) {
          setIsStreaming(false);
          return 24;
        }
        return prev + 1;
      });
    }, 90);
    return () => clearInterval(timer);
  }, [isStreaming]);

  const startRace = () => {
    setStreamTick(0);
    setIsStreaming(true);
  };

  // =========================================================================
  // BEYOND VIBE CODING SIMULATORS (Ch 1-11) & ASKING THE RIGHT QUESTIONS (Ch 1-13)
  // =========================================================================
  const isBvc = bookSlug === 'beyond-vibe-coding';
  const isArq = bookSlug === 'asking-the-right-questions';
  const isAie = !isBvc && !isArq;

  // ARQ Lab 1 (Ch 1-5): Structural Argument Soundness, Ambiguity & Assumption Bridge Simulator
  const [arqReasonSupport, setArqReasonSupport] = useState<number>(82);
  const [arqTermPrecision, setArqTermPrecision] = useState<number>(75);
  const [arqAssumptionBridge, setArqAssumptionBridge] = useState<number>(70);
  const [arqStrongSenseMode, setArqStrongSenseMode] = useState<boolean>(true);

  const arqRawSoundness = Math.round(
    (arqReasonSupport / 100) *
      (0.35 + 0.65 * (arqTermPrecision / 100)) *
      (0.25 + 0.75 * (arqAssumptionBridge / 100)) *
      100
  );
  const arqDisplayedConviction = arqStrongSenseMode
    ? arqRawSoundness
    : Math.min(98, arqRawSoundness + 34);

  // ARQ Lab 2 (Ch 6-8): Evidence Hierarchy, Sampling Margin of Error (1/sqrt(N)) & Construct Validity
  const [arqSampleSize, setArqSampleSize] = useState<number>(400);
  const [arqSampleBreadth, setArqSampleBreadth] = useState<number>(80);
  const [arqMeasureValidity, setArqMeasureValidity] = useState<number>(75);

  const arqMarginOfErrorPct = (0.98 / Math.sqrt(Math.max(1, arqSampleSize))) * 100;
  const arqGeneralizabilityScore = Math.round(
    Math.min(1, Math.log10(Math.max(2, arqSampleSize)) / 3.4) *
      (arqSampleBreadth / 100) *
      (arqMeasureValidity / 100) *
      100
  );

  // ARQ Lab 3 (Ch 9-10): Rival Causes Confounder Filter & Skewed Distribution (Mean vs Median)
  const [arqOutlierSkew, setArqOutlierSkew] = useState<number>(3.2);
  const [arqConfounderShare, setArqConfounderShare] = useState<number>(45);
  const [arqShowBaseRate, setArqShowBaseRate] = useState<boolean>(true);

  const arqMedianVal = 52;
  const arqMeanVal = Math.round(arqMedianVal * (1 + (arqOutlierSkew - 1) * 0.42));
  const arqApparentEffect = 38;
  const arqTrueCausalEffect = Math.max(
    2,
    Math.round(arqApparentEffect * (1 - arqConfounderShare / 100))
  );

  // ARQ Lab 4 (Ch 11-13): Omitted Externalities, Conditional If-Clauses & System 1 Cognitive Bias
  const [arqOmittedCostAudit, setArqOmittedCostAudit] = useState<number>(80);
  const [arqConditionalIfClauses, setArqConditionalIfClauses] = useState<boolean>(true);
  const [arqSystem1Salience, setArqSystem1Salience] = useState<number>(1.8);

  const arqClaimedBenefit = 85;
  const arqHiddenExternality = 36;
  const arqPerceivedUtility = Math.round(
    arqClaimedBenefit * (arqSystem1Salience * 0.55) -
      arqHiddenExternality * (arqOmittedCostAudit / 100)
  );
  const arqTrueCalibratedUtility = arqClaimedBenefit - arqHiddenExternality;
  const arqEpistemicCalibration = Math.min(
    99,
    Math.max(
      12,
      Math.round(
        50 +
          arqOmittedCostAudit * 0.35 +
          (arqConditionalIfClauses ? 18 : -12) -
          (arqSystem1Salience - 1) * 14
      )
    )
  );

  // BVC Lab 1 (Ch 1-4): The 70% Problem & "Two Steps Back" Regression Simulator
  const [specClarity, setSpecClarity] = useState<number>(80);
  const [useGitCheckpoints, setUseGitCheckpoints] = useState<boolean>(true);
  const [promptIterations, setPromptIterations] = useState<number>(8);

  const compute70PercentCurve = () => {
    const steps: { step: number; vibeProgress: number; engineeredProgress: number }[] = [];
    let vibe = 35;
    let eng = 30;
    for (let s = 1; s <= promptIterations; s++) {
      if (s <= 3) {
        vibe = Math.min(72, vibe + 14);
      } else {
        // Without checkpoints & low spec clarity, fixing 1 bug breaks 2 things ("Two Steps Back")
        const regressionPenalty = (100 - specClarity) * 0.16;
        vibe = Math.max(38, Math.min(76, vibe + 4 - regressionPenalty));
      }
      const engGain = (specClarity / 100) * (useGitCheckpoints ? 9.5 : 5.2);
      eng = Math.min(99.5, eng + engGain);
      steps.push({
        step: s,
        vibeProgress: Math.round(vibe),
        engineeredProgress: Math.round(eng),
      });
    }
    return steps;
  };
  const bvcTrajectory = compute70PercentCurve();
  const finalVibe = bvcTrajectory[bvcTrajectory.length - 1]?.vibeProgress ?? 70;
  const finalEng = bvcTrajectory[bvcTrajectory.length - 1]?.engineeredProgress ?? 95;

  // BVC Lab 2 (Ch 5-7): AI Code Ownership, Tautological Test Risk & Rebuild vs Refactor
  const [aiCodeSharePct, setAiCodeSharePct] = useState<number>(65);
  const [humanSpecTests, setHumanSpecTests] = useState<boolean>(true);
  const [archCouplingScore, setArchCouplingScore] = useState<number>(40);

  const tautologicalBugEscapePct = humanSpecTests
    ? Math.max(4, Math.round((aiCodeSharePct * 0.12) + (archCouplingScore * 0.08)))
    : Math.min(88, Math.round((aiCodeSharePct * 0.65) + (archCouplingScore * 0.35)));
  const rebuildRecommendation =
    archCouplingScore >= 65 && !humanSpecTests
      ? 'REBUILD CLEANLY (Throwaway Prototype Trap)'
      : archCouplingScore >= 50
      ? 'MODULARIZE & REFACTOR BOUNDARIES'
      : 'ITERATIVE PRODUCTION HARDENING';

  // BVC Lab 3 (Ch 8-9): Slopsquatting & Multi-Layer Security Gate Simulator
  const [unverifiedPackagesCount, setUnverifiedPackagesCount] = useState<number>(12);
  const [enableSastLockfileGate, setEnableSastLockfileGate] = useState<boolean>(true);
  const [enableAdversarialModelReview, setEnableAdversarialModelReview] = useState<boolean>(true);

  const rawSlopsquatRisk = Math.min(96, unverifiedPackagesCount * 7.5);
  const residualBreachRisk = Math.max(
    1.2,
    rawSlopsquatRisk *
      (enableSastLockfileGate ? 0.18 : 1.0) *
      (enableAdversarialModelReview ? 0.32 : 1.0)
  );

  // BVC Lab 4 (Ch 10-11): Autonomous Background Agent Fleet & Multi-Model Orchestrator
  const [parallelAgents, setParallelAgents] = useState<number>(4);
  const [ciAutomatedFeedback, setCiAutomatedFeedback] = useState<boolean>(true);
  const [multiModelRouting, setMultiModelRouting] = useState<boolean>(true);

  const agentMergeRate = Math.min(
    94,
    Math.round(
      42 +
        (ciAutomatedFeedback ? 28 : 0) +
        (multiModelRouting ? 19 : 0) -
        Math.max(0, parallelAgents - 5) * 3
    )
  );
  const effectivePrThroughput = ((parallelAgents * agentMergeRate) / 100).toFixed(1);

  return (
    <section className="border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 md:p-8 space-y-6 shadow-xs animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E0D8] dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#EA580C]">
            <Sliders className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Interactive First-Principles Sandbox • Chapter {chapterNumber} Live Lab</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-slate-900 dark:text-white mt-1">
            {isArq ? (
              <>
                {chapterNumber <= 5 &&
                  'Structural Argument Deconstructor: Reasons, Semantic Precision & Assumption Bridge'}
                {chapterNumber >= 6 &&
                  chapterNumber <= 8 &&
                  'Empirical Evidence Hierarchy, Sampling Margin of Error (1/√N) & Construct Validity'}
                {(chapterNumber === 9 || chapterNumber === 10) &&
                  'Rival Causes Confounder Filter & Skewed Distribution (Mean vs. Median) Simulator'}
                {chapterNumber >= 11 &&
                  'Omitted Externalities, Conditional If-Clauses & System 1 Cognitive Bias Lab'}
              </>
            ) : isBvc ? (
              <>
                {chapterNumber <= 4 &&
                  'The 70% Problem & "Two Steps Back" Regression Simulator'}
                {chapterNumber >= 5 &&
                  chapterNumber <= 7 &&
                  'The "Majority Problem" & Tautological Test Risk Simulator'}
                {(chapterNumber === 8 || chapterNumber === 9) &&
                  'AI Security, "Slopsquatting" & Dual-Model Adversarial Gate Simulator'}
                {chapterNumber >= 10 &&
                  'Autonomous Background Agent Fleet & Multi-Model Orchestrator Lab'}
              </>
            ) : (
              <>
                {chapterNumber <= 2 &&
                  'Live Probabilistic Token Sampler: Temperature, Top-k & Nucleus Top-p'}
                {(chapterNumber === 3 || chapterNumber === 4) &&
                  'Live Perplexity (2^H) & Evaluation Confidence Sample-Size Simulator'}
                {(chapterNumber === 5 || chapterNumber === 6) &&
                  'Live Multi-Step Agent Compound Reliability (p^N) & Verifier Simulator'}
                {(chapterNumber === 7 || chapterNumber === 8) &&
                  'Live GPU HBM Memory Simulator: Full Training vs. LoRA vs. 4-Bit QLoRA'}
                {chapterNumber >= 9 &&
                  'Live Inference Race: Autoregressive vs. Speculative Decoding + Prefix Caching'}
              </>
            )}
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 text-xs font-mono-code text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          REAL-TIME INTERACTIVE PHYSICS
        </span>
      </div>

      {/* =====================================================================
          RENDER CHAPTER 1-2 LAB (AI ENGINEERING): LOGIT -> SOFTMAX SAMPLER
         ===================================================================== */}
      {isAie && chapterNumber <= 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Temperature (T):</span>
                <strong className="text-[#EA580C]">
                  T = {temperature.toFixed(2)}{' '}
                  {temperature <= 0.25
                    ? '(Near-Greedy)'
                    : temperature >= 1.4
                    ? '(High Entropy)'
                    : '(Balanced)'}
                </strong>
              </div>
              <input
                type="range"
                min={0.1}
                max={2.0}
                step={0.05}
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Top-k Cutoff:</span>
                <strong className="text-[#2563EB]">Keep Top {topK} Tokens</strong>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={topK}
                onChange={(e) => setTopK(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Nucleus Top-p Cumulative Threshold:</span>
                <strong className="text-emerald-600">p = {(topP * 100).toFixed(0)}%</strong>
              </div>
              <input
                type="range"
                min={0.2}
                max={1.0}
                step={0.05}
                value={topP}
                onChange={(e) => setTopP(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handleRollToken}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase tracking-wider font-bold cursor-pointer transition active:scale-95"
              >
                <Play className="w-3.5 h-3.5" />
                {isRolling ? 'Sampling Distribution...' : 'Sample Next Token'}
              </button>
              <button
                onClick={() => {
                  setTemperature(0.8);
                  setTopK(5);
                  setTopP(0.9);
                  setSampledHistory(['The', ' foundation']);
                }}
                className="p-2.5 border border-[#E5E0D8] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Live Generated Token Stream */}
            <div className="p-3 bg-slate-900 text-white font-mono-code text-xs">
              <div className="text-[10px] text-slate-400 uppercase mb-1">
                Autoregressive Token Stream:
              </div>
              <div className="flex flex-wrap gap-1">
                {sampledHistory.map((tok, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-amber-300 animate-scale-in"
                  >
                    {tok}
                  </span>
                ))}
                <span className="px-1.5 py-0.5 bg-[#EA580C] text-white animate-pulse">
                  ▋
                </span>
              </div>
            </div>
          </div>

          {/* Animated Probability Distribution Bars */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono-code uppercase text-slate-500 flex justify-between">
              <span>Candidate Next Token (Logit z_i)</span>
              <span>Renormalized Sampling Probability</span>
            </div>
            {normalizedTokens.map((t, i) => {
              const isHighlighted = sampledTokenIdx === i;
              const pct = (t.finalProb * 100).toFixed(1);
              return (
                <div
                  key={t.token}
                  className={`p-3 border transition-all duration-300 ${
                    isHighlighted
                      ? 'border-[#EA580C] bg-orange-50/70 dark:bg-orange-950/30 scale-[1.01]'
                      : t.active
                      ? 'border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900'
                      : 'border-dashed border-slate-200 dark:border-slate-800 opacity-45'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono-code mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-slate-900 text-amber-300 font-bold">
                        "{t.token}"
                      </span>
                      <span className="text-slate-400">z={t.logit.toFixed(1)}</span>
                      {!t.active && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
                          PRUNED ({!t.passesTopK ? 'Top-k' : 'Top-p'})
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-400">
                        raw: {(t.prob * 100).toFixed(1)}%
                      </span>
                      <strong className="text-slate-900 dark:text-white w-14 text-right">
                        {pct}%
                      </strong>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${Math.max(t.finalProb * 100, t.active ? 2 : 0)}%`,
                        backgroundColor: isHighlighted
                          ? '#EA580C'
                          : t.active
                          ? '#2563EB'
                          : '#94A3B8',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          RENDER CHAPTER 3-4 LAB: PERPLEXITY & EVAL SAMPLE SIZING
         ===================================================================== */}
      {isAie && (chapterNumber === 3 || chapterNumber === 4) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Cross-Entropy Loss H(P, Q) in Bits:</span>
                <strong className="text-[#EA580C]">{crossEntropyBits.toFixed(2)} bits/token</strong>
              </div>
              <input
                type="range"
                min={0.5}
                max={5.0}
                step={0.1}
                value={crossEntropyBits}
                onChange={(e) => setCrossEntropyBits(parseFloat(e.target.value))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Perplexity grows exponentially with Cross-Entropy: PPL = 2^H(P,Q).
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Target Detectable Accuracy Gain (Δ%):</span>
                <strong className="text-[#2563EB]">±{targetDeltaPct}% Margin</strong>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={targetDeltaPct}
                onChange={(e) => setTargetDeltaPct(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Halving the detectable margin requires ~4x more evaluation examples (95% CI).
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Effective Branching Factor (Perplexity)
              </div>
              <div className="font-display text-5xl text-[#EA580C] transition-all">
                {perplexity.toFixed(1)}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                The model is as uncertain at each step as if choosing uniformly among{' '}
                <strong>{Math.round(perplexity)}</strong> equally likely tokens.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {Array.from({ length: Math.min(Math.round(perplexity), 32) }).map((_, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 bg-[#EA580C] inline-block animate-scale-in"
                  />
                ))}
              </div>
            </div>

            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Required Eval Dataset Size (95% CI)
              </div>
              <div className="font-display text-5xl text-[#2563EB] transition-all">
                {requiredSamples.toLocaleString()}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Minimum annotated test prompts needed to statistically prove a{' '}
                <strong>{targetDeltaPct}%</strong> accuracy improvement between two prompts/models.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          RENDER CHAPTER 5-6 LAB: MULTI-STEP AGENT COMPOUND RELIABILITY
         ===================================================================== */}
      {isAie && (chapterNumber === 5 || chapterNumber === 6) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Single-Step Tool/Planning Accuracy (p):</span>
                <strong className="text-[#EA580C]">{(stepAccuracy * 100).toFixed(1)}%</strong>
              </div>
              <input
                type="range"
                min={0.8}
                max={0.99}
                step={0.01}
                value={stepAccuracy}
                onChange={(e) => setStepAccuracy(parseFloat(e.target.value))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Agent Trajectory Length (N Steps):</span>
                <strong className="text-[#2563EB]">{agentSteps} Sequential Steps</strong>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={agentSteps}
                onChange={(e) => setAgentSteps(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold text-slate-800 dark:text-slate-200">
                Enable Self-Reflection / Verifier Retry Loop
              </span>
              <input
                type="checkbox"
                checked={useReflectionVerifier}
                onChange={(e) => setUseReflectionVerifier(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono-code uppercase text-slate-500">
                  End-to-End Trajectory Success Probability (p^N)
                </div>
                <div
                  className={`font-display text-5xl ${
                    endToEndSuccess >= 75
                      ? 'text-emerald-600'
                      : endToEndSuccess >= 45
                      ? 'text-amber-600'
                      : 'text-red-600'
                  }`}
                >
                  {endToEndSuccess.toFixed(1)}%
                </div>
              </div>
              <div className="text-right text-xs font-mono-code text-slate-500">
                <div>Effective Step Accuracy: {(effectiveStepAccuracy * 100).toFixed(2)}%</div>
                <div>Compound Failure Risk: {(100 - endToEndSuccess).toFixed(1)}%</div>
              </div>
            </div>

            {/* Visual Step Chain */}
            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
              <div className="text-[11px] font-mono-code uppercase text-slate-500 mb-3">
                Simulated {agentSteps}-Step Agent Execution Chain (Survival Decay by Step):
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {Array.from({ length: agentSteps }).map((_, idx) => {
                  const survivalAtStep = Math.pow(effectiveStepAccuracy, idx + 1) * 100;
                  return (
                    <div
                      key={idx}
                      className="p-2 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 text-center transition-all"
                    >
                      <div className="text-[9px] font-mono-code text-slate-400">
                        S{idx + 1}
                      </div>
                      <div
                        className={`text-xs font-mono-code font-bold ${
                          survivalAtStep >= 75
                            ? 'text-emerald-600'
                            : survivalAtStep >= 45
                            ? 'text-amber-600'
                            : 'text-red-600'
                        }`}
                      >
                        {Math.round(survivalAtStep)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          RENDER CHAPTER 7-8 LAB: GPU HBM VRAM CALCULATOR
         ===================================================================== */}
      {isAie && (chapterNumber === 7 || chapterNumber === 8) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Model Parameter Count (N):</span>
                <strong className="text-[#EA580C]">{modelBillionParams}B Parameters</strong>
              </div>
              <input
                type="range"
                min={3}
                max={70}
                step={1}
                value={modelBillionParams}
                onChange={(e) => setModelBillionParams(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Select Workload & Quantization Regime:
              </div>
              {[
                { id: 'inference-fp16', label: 'Inference Only (FP16 / BF16 — 2 bytes/param)' },
                { id: 'full-ft', label: 'Full Finetuning (FP16 + FP32 AdamW States)' },
                { id: 'lora-fp16', label: 'LoRA PEFT (16-bit Base + Low-Rank Adapters)' },
                { id: 'qlora-nf4', label: 'QLoRA (4-bit NF4 Base + Paged Optimizers)' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setTuningMode(m.id as any)}
                  className={`w-full text-left px-3 py-2 text-xs font-mono-code border cursor-pointer transition ${
                    tuningMode === m.id
                      ? 'bg-[#111827] text-white dark:bg-[#EA580C] border-transparent'
                      : 'bg-white dark:bg-slate-900 border-[#E5E0D8] dark:border-slate-800'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono-code uppercase text-slate-500">
                  Total Required GPU HBM Memory
                </div>
                <div
                  className={`font-display text-5xl ${
                    vram.total <= 24
                      ? 'text-emerald-600'
                      : vram.total <= 80
                      ? 'text-[#2563EB]'
                      : 'text-red-600'
                  }`}
                >
                  {vram.total.toFixed(1)} GB VRAM
                </div>
              </div>
              <div className="px-3 py-1.5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 text-xs font-mono-code">
                {vram.total <= 24
                  ? '✓ Fits Single Consumer GPU (24GB RTX 4090)'
                  : vram.total <= 80
                  ? '✓ Fits Single Data-Center GPU (80GB H100)'
                  : `⚠ Requires ${Math.ceil(vram.total / 80)}x 80GB H100 GPUs (Tensor/Pipeline Parallel)`}
              </div>
            </div>

            {/* Animated Stacked Memory Bar */}
            <div className="space-y-2">
              <div className="h-8 w-full bg-slate-100 dark:bg-slate-800 flex overflow-hidden border border-[#E5E0D8] dark:border-slate-700">
                <div
                  style={{ width: `${(vram.weights / Math.max(vram.total, 1)) * 100}%` }}
                  className="bg-[#2563EB] h-full transition-all duration-500"
                  title="Weights"
                />
                <div
                  style={{ width: `${(vram.gradients / Math.max(vram.total, 1)) * 100}%` }}
                  className="bg-[#EA580C] h-full transition-all duration-500"
                  title="Gradients"
                />
                <div
                  style={{ width: `${(vram.optimizer / Math.max(vram.total, 1)) * 100}%` }}
                  className="bg-[#7C3AED] h-full transition-all duration-500"
                  title="AdamW Optimizer States"
                />
                <div
                  style={{ width: `${(vram.activations / Math.max(vram.total, 1)) * 100}%` }}
                  className="bg-[#059669] h-full transition-all duration-500"
                  title="Activations & KV Cache"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono-code pt-1">
                <div className="p-2.5 border border-[#E5E0D8] dark:border-slate-800">
                  <span className="text-[#2563EB] font-bold block">Model Weights</span>
                  <span>{vram.weights.toFixed(1)} GB</span>
                </div>
                <div className="p-2.5 border border-[#E5E0D8] dark:border-slate-800">
                  <span className="text-[#EA580C] font-bold block">Gradients</span>
                  <span>{vram.gradients.toFixed(1)} GB</span>
                </div>
                <div className="p-2.5 border border-[#E5E0D8] dark:border-slate-800">
                  <span className="text-[#7C3AED] font-bold block">AdamW States</span>
                  <span>{vram.optimizer.toFixed(1)} GB</span>
                </div>
                <div className="p-2.5 border border-[#E5E0D8] dark:border-slate-800">
                  <span className="text-[#059669] font-bold block">Activations / KV</span>
                  <span>{vram.activations.toFixed(1)} GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          RENDER CHAPTER 9-10 LAB: LIVE TOKEN STREAMER & LATENCY RACE
         ===================================================================== */}
      {isAie && chapterNumber >= 9 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Speculative Decoding Speedup Factor:</span>
                <strong className="text-[#EA580C]">{specMultiplier.toFixed(1)}x Token Rate</strong>
              </div>
              <input
                type="range"
                min={1.5}
                max={3.5}
                step={0.1}
                value={specMultiplier}
                onChange={(e) => setSpecMultiplier(parseFloat(e.target.value))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Enable Prefix / Prompt KV Caching (-78% TTFT)
              </span>
              <input
                type="checkbox"
                checked={cacheEnabled}
                onChange={(e) => setCacheEnabled(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>

            <button
              onClick={startRace}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase tracking-wider font-bold cursor-pointer transition"
            >
              <Play className="w-3.5 h-3.5" />
              {isStreaming ? 'Streaming Tokens Live...' : 'Race Standard vs. Optimized Pipeline'}
            </button>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {/* Baseline Stream */}
            <div className="p-4 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex justify-between text-xs font-mono-code">
                <span className="text-slate-500">
                  1. Baseline Autoregressive Decoding (Memory-Bandwidth Bound)
                </span>
                <span className="text-red-600 font-bold">
                  TTFT: 820ms | TPOT: 42ms/tok | Total: 6.1s
                </span>
              </div>
              <div className="flex flex-wrap gap-1 min-h-[36px] p-2 bg-slate-100 dark:bg-slate-950">
                {Array.from({
                  length: Math.min(24, Math.floor(streamTick / specMultiplier) + 2),
                }).map((_, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 text-[10px] font-mono-code bg-slate-700 text-white"
                  >
                    tok_{i + 1}
                  </span>
                ))}
              </div>
            </div>

            {/* Optimized Speculative + Cached Stream */}
            <div className="p-4 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="flex justify-between text-xs font-mono-code">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                  2. Speculative Decoding + {cacheEnabled ? 'Prefix KV Cache' : 'Cold Prefill'}
                </span>
                <span className="text-emerald-600 font-bold">
                  TTFT: {cacheEnabled ? '180ms' : '820ms'} | TPOT:{' '}
                  {Math.round(42 / specMultiplier)}ms/tok | Total:{' '}
                  {((cacheEnabled ? 0.18 : 0.82) + 5.28 / specMultiplier).toFixed(1)}s
                </span>
              </div>
              <div className="flex flex-wrap gap-1 min-h-[36px] p-2 bg-slate-900">
                {Array.from({ length: Math.min(24, streamTick) }).map((_, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 text-[10px] font-mono-code bg-emerald-600 text-white animate-scale-in"
                  >
                    tok_{i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BEYOND VIBE CODING LAB 1 (Ch 1-4): THE 70% PROBLEM & REGRESSION LOOP
         ===================================================================== */}
      {isBvc && chapterNumber <= 4 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Prompt Specification & PRD Clarity:</span>
                <strong className="text-[#EA580C]">{specClarity}% Spec Rigor</strong>
              </div>
              <input
                type="range"
                min={20}
                max={100}
                step={5}
                value={specClarity}
                onChange={(e) => setSpecClarity(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Prompt Iteration Cycles:</span>
                <strong className="text-[#2563EB]">{promptIterations} Iterations</strong>
              </div>
              <input
                type="range"
                min={4}
                max={12}
                step={1}
                value={promptIterations}
                onChange={(e) => setPromptIterations(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Enforce Atomic Git Checkpoints + Test Verification
              </span>
              <input
                type="checkbox"
                checked={useGitCheckpoints}
                onChange={(e) => setUseGitCheckpoints(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950">
                <div className="text-xs font-mono-code uppercase text-red-600">
                  Unchecked Vibe Coding (The 70% Wall)
                </div>
                <div className="font-display text-4xl text-red-600 mt-1">{finalVibe}%</div>
                <p className="text-[11px] text-slate-500 mt-1">
                  After reaching ~70% demo quality, blind prompts trigger the &ldquo;Two Steps Back&rdquo; regression loop.
                </p>
              </div>
              <div className="p-4 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20">
                <div className="text-xs font-mono-code uppercase text-emerald-600 font-bold">
                  AI-Assisted Engineering (Spec + Checkpoints)
                </div>
                <div className="font-display text-4xl text-emerald-600 mt-1">{finalEng}%</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                  Human architecture specs + atomic Git checkpoints lock in the final 30% production hardening.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 space-y-2">
              <div className="text-[11px] font-mono-code uppercase text-slate-500">
                Completion Trajectory Across {promptIterations} Prompt Turns (Red = Blind Vibe Loop, Green = Engineered):
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {bvcTrajectory.map((pt) => (
                  <div
                    key={pt.step}
                    className="p-2 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 text-center font-mono-code"
                  >
                    <div className="text-[9px] text-slate-400">Turn {pt.step}</div>
                    <div className="text-[11px] text-red-500 font-bold">{pt.vibeProgress}%</div>
                    <div className="text-[11px] text-emerald-600 font-bold">
                      {pt.engineeredProgress}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BEYOND VIBE CODING LAB 2 (Ch 5-7): MAJORITY PROBLEM & TAUTOLOGICAL TESTS
         ===================================================================== */}
      {isBvc && chapterNumber >= 5 && chapterNumber <= 7 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>AI-Generated Code Share:</span>
                <strong className="text-[#EA580C]">{aiCodeSharePct}% of Codebase</strong>
              </div>
              <input
                type="range"
                min={20}
                max={95}
                step={5}
                value={aiCodeSharePct}
                onChange={(e) => setAiCodeSharePct(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Prototype State & Schema Coupling Debt:</span>
                <strong className="text-[#2563EB]">{archCouplingScore}% Entanglement</strong>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                step={5}
                value={archCouplingScore}
                onChange={(e) => setArchCouplingScore(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Human-Authored Test Specs (Avoid Tautological AI Tests)
              </span>
              <input
                type="checkbox"
                checked={humanSpecTests}
                onChange={(e) => setHumanSpecTests(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Silent Bug Escape Probability
              </div>
              <div
                className={`font-display text-5xl ${
                  tautologicalBugEscapePct <= 20 ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {tautologicalBugEscapePct}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {humanSpecTests
                  ? 'Independent human test assertions catch Majority-Problem regressions before merge.'
                  : 'WARNING: Letting the same LLM generate both code and tests creates tautological tests that assert bugs as intended behavior.'}
              </p>
            </div>

            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Prototype-to-Production Verdict
              </div>
              <div className="font-mono-code text-lg font-bold text-[#EA580C] pt-2">
                {rebuildRecommendation}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                When rapid v0/Bolt prototypes exceed 60% state entanglement without contract tests, throwing away the prototype and rebuilding on clean TypeScript/OpenAPI boundaries is faster than debugging spaghetti.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BEYOND VIBE CODING LAB 3 (Ch 8-9): SLOPSQUATTING & SECURITY GATES
         ===================================================================== */}
      {isBvc && (chapterNumber === 8 || chapterNumber === 9) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>AI-Suggested Third-Party Packages / Sprint:</span>
                <strong className="text-[#EA580C]">{unverifiedPackagesCount} Packages</strong>
              </div>
              <input
                type="range"
                min={2}
                max={20}
                step={1}
                value={unverifiedPackagesCount}
                onChange={(e) => setUnverifiedPackagesCount(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Gate 1: Registry Provenance + SAST Lockfile Verification
              </span>
              <input
                type="checkbox"
                checked={enableSastLockfileGate}
                onChange={(e) => setEnableSastLockfileGate(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Gate 2: Separate Adversarial Model Security Audit
              </span>
              <input
                type="checkbox"
                checked={enableAdversarialModelReview}
                onChange={(e) => setEnableAdversarialModelReview(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-red-600">
                Raw Unaudited Slopsquatting / Vulnerability Exposure
              </div>
              <div className="font-display text-5xl text-red-600">
                {rawSlopsquatRisk.toFixed(0)}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Probability of installing a hallucinated package name (&ldquo;slopsquatting&rdquo;) or shipping an OWASP Top-10 flaw when blindly running AI-suggested commands.
              </p>
            </div>

            <div className="p-5 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="text-xs font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                Residual Production Breach Risk (Post-Gates)
              </div>
              <div className="font-display text-5xl text-emerald-600">
                {residualBreachRisk.toFixed(1)}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Combining deterministic lockfile/SAST scanners with an independent adversarial review model eliminates over 94% of AI-introduced supply-chain and auth vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BEYOND VIBE CODING LAB 4 (Ch 10-11): AUTONOMOUS AGENT FLEET LAB
         ===================================================================== */}
      {isBvc && chapterNumber >= 10 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Concurrent Background Agents (Isolated Sandboxes):</span>
                <strong className="text-[#EA580C]">{parallelAgents} Parallel Agents</strong>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={parallelAgents}
                onChange={(e) => setParallelAgents(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Automated Sandbox CI / Typecheck / Test Loop
              </span>
              <input
                type="checkbox"
                checked={ciAutomatedFeedback}
                onChange={(e) => setCiAutomatedFeedback(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Multi-Model Routing (Reasoning Planner + Fast Coder)
              </span>
              <input
                type="checkbox"
                checked={multiModelRouting}
                onChange={(e) => setMultiModelRouting(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                First-Pass PR Verification & Merge Rate
              </div>
              <div className="font-display text-5xl text-[#2563EB]">{agentMergeRate}%</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Percentage of asynchronous background agent PRs that pass human architectural review without requiring manual rework.
              </p>
            </div>

            <div className="p-5 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="text-xs font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                Verified PRs Merged / Engineering Day
              </div>
              <div className="font-display text-5xl text-emerald-600">
                {effectivePrThroughput}x
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Net engineering throughput multiplier when acting as a Multi-Agent Orchestrator with isolated Git worktrees and automated CI verification.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          ASKING THE RIGHT QUESTIONS LAB 1 (Ch 1-5): ARGUMENT SOUNDNESS & ASSUMPTIONS
         ===================================================================== */}
      {isArq && chapterNumber <= 5 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Explicit Reason Support (R):</span>
                <strong className="text-[#EA580C]">{arqReasonSupport}% Evidentiary Weight</strong>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={arqReasonSupport}
                onChange={(e) => setArqReasonSupport(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Key Term Semantic Precision (1 - Ambiguity):</span>
                <strong className="text-[#2563EB]">{arqTermPrecision}% Defined</strong>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={arqTermPrecision}
                onChange={(e) => setArqTermPrecision(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Unstated Value & Descriptive Assumption Bridge:</span>
                <strong className="text-emerald-600">{arqAssumptionBridge}% Warranted</strong>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={arqAssumptionBridge}
                onChange={(e) => setArqAssumptionBridge(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Strong-Sense Critical Thinking (Panning-for-Gold Audit)
              </span>
              <input
                type="checkbox"
                checked={arqStrongSenseMode}
                onChange={(e) => setArqStrongSenseMode(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Structural Argument Soundness (R ∧ A_V ∧ A_D ⇒ C)
              </div>
              <div
                className={`font-display text-5xl ${
                  arqRawSoundness >= 65
                    ? 'text-emerald-600'
                    : arqRawSoundness >= 40
                    ? 'text-amber-600'
                    : 'text-red-600'
                }`}
              >
                {arqRawSoundness}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Even strong explicit reasons collapse if key terms are elastic (Chapter 4) or if the unstated value/descriptive assumption bridging Reason to Conclusion is false (Chapter 5).
              </p>
            </div>

            <div className="p-5 border-2 border-[#111827] dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2">
              <div className="text-xs font-mono-code uppercase text-[#EA580C] font-bold">
                {arqStrongSenseMode
                  ? 'Strong-Sense Calibrated Conviction'
                  : 'Weak-Sense Motivated Conviction (Overconfidence)'}
              </div>
              <div className="font-display text-5xl text-slate-900 dark:text-white">
                {arqDisplayedConviction}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {arqStrongSenseMode
                  ? 'Strong-sense thinkers proportion their belief strictly to the verified strength of reasons, definitions, and assumptions.'
                  : 'WARNING: Weak-sense thinking uses critical questions only to destroy opponents while inflating confidence in your own unexamined conclusion by +34%.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          ASKING THE RIGHT QUESTIONS LAB 2 (Ch 6-8): EVIDENCE & SAMPLING MARGIN
         ===================================================================== */}
      {isArq && chapterNumber >= 6 && chapterNumber <= 8 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Empirical Sample Size (N):</span>
                <strong className="text-[#EA580C]">
                  N = {arqSampleSize} {arqSampleSize <= 5 ? '(Anecdote / Case)' : '(Study Sample)'}
                </strong>
              </div>
              <input
                type="range"
                min={1}
                max={2000}
                step={25}
                value={arqSampleSize}
                onChange={(e) => setArqSampleSize(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Sample Breadth & Stratification (Randomness):</span>
                <strong className="text-[#2563EB]">{arqSampleBreadth}% Representative</strong>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={arqSampleBreadth}
                onChange={(e) => setArqSampleBreadth(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Research Measure / Surrogate Construct Validity:</span>
                <strong className="text-emerald-600">{arqMeasureValidity}% Construct Match</strong>
              </div>
              <input
                type="range"
                min={20}
                max={100}
                step={5}
                value={arqMeasureValidity}
                onChange={(e) => setArqMeasureValidity(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                95% Sampling Margin of Error (±0.98 / √N)
              </div>
              <div className="font-display text-5xl text-[#EA580C]">
                ±{Math.min(98, arqMarginOfErrorPct).toFixed(1)}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Personal experiences and testimonials (N ≈ 1–5) carry massive random noise; generalizing from them commits the Hasty Generalization fallacy.
              </p>
            </div>

            <div className="p-5 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="text-xs font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                Generalizability & Evidentiary Dependability
              </div>
              <div className="font-display text-5xl text-emerald-600">
                {arqGeneralizabilityScore}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                A large sample size N is worthless if the sample is self-selected (low breadth) or if the surrogate proxy metric fails to measure the real-world target construct.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          ASKING THE RIGHT QUESTIONS LAB 3 (Ch 9-10): RIVAL CAUSES & SKEWED STATS
         ===================================================================== */}
      {isArq && (chapterNumber === 9 || chapterNumber === 10) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Top-Decile Outlier Skew Multiplier:</span>
                <strong className="text-[#EA580C]">{arqOutlierSkew.toFixed(1)}x Right Skew</strong>
              </div>
              <input
                type="range"
                min={1.0}
                max={6.0}
                step={0.2}
                value={arqOutlierSkew}
                onChange={(e) => setArqOutlierSkew(parseFloat(e.target.value))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Uncontrolled Rival Cause Confounder (Z → X, Y):</span>
                <strong className="text-[#2563EB]">{arqConfounderShare}% Confounded</strong>
              </div>
              <input
                type="range"
                min={0}
                max={85}
                step={5}
                value={arqConfounderShare}
                onChange={(e) => setArqConfounderShare(parseInt(e.target.value, 10))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Demand Both Absolute Base Rate & Relative % Change
              </span>
              <input
                type="checkbox"
                checked={arqShowBaseRate}
                onChange={(e) => setArqShowBaseRate(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Confusing Averages: Mean vs. Median (Ch 10)
              </div>
              <div className="flex items-baseline gap-4">
                <div>
                  <span className="text-[10px] font-mono-code text-red-600 block">
                    MEAN (Outlier-Pulled)
                  </span>
                  <span className="font-display text-4xl text-red-600">${arqMeanVal}k</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-emerald-600 block">
                    MEDIAN (50th Pct)
                  </span>
                  <span className="font-display text-4xl text-emerald-600">${arqMedianVal}k</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {arqShowBaseRate
                  ? 'Reporting the median alongside the mean exposes how extreme outliers inflate the arithmetic average by +' +
                    Math.round(((arqMeanVal - arqMedianVal) / arqMedianVal) * 100) +
                    '%.'
                  : 'WARNING: Omitting the median and base rate lets communicators cherry-pick the inflated mean as a deceptive "average."'}
              </p>
            </div>

            <div className="p-5 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="text-xs font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                De-Confounded Causal Effect vs. Raw Correlation (Ch 9)
              </div>
              <div className="flex items-baseline gap-4">
                <div>
                  <span className="text-[10px] font-mono-code text-slate-500 block">
                    CLAIMED (Post Hoc)
                  </span>
                  <span className="font-display text-4xl text-slate-500">+{arqApparentEffect}%</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-emerald-600 block">
                    TRUE CAUSAL (do(X))
                  </span>
                  <span className="font-display text-4xl text-emerald-600">
                    +{arqTrueCausalEffect}%
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Filtering out rival causes (selection bias, secular trends, third-variable confounders) reveals the true net causal impact of the intervention.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          ASKING THE RIGHT QUESTIONS LAB 4 (Ch 11-13): OMITTED INFO & SPEED BUMPS
         ===================================================================== */}
      {isArq && chapterNumber >= 11 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 bg-[#FAF8F5] dark:bg-slate-950 p-5 border border-[#E5E0D8] dark:border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>Omitted Negative Externality Audit (Ch 11):</span>
                <strong className="text-[#EA580C]">{arqOmittedCostAudit}% Uncovered</strong>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={arqOmittedCostAudit}
                onChange={(e) => setArqOmittedCostAudit(parseInt(e.target.value, 10))}
                className="w-full accent-[#EA580C] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-code mb-1">
                <span>System 1 Availability / Wishful Salience (Ch 13):</span>
                <strong className="text-[#2563EB]">{arqSystem1Salience.toFixed(1)}x Distortion</strong>
              </div>
              <input
                type="range"
                min={1.0}
                max={4.0}
                step={0.2}
                value={arqSystem1Salience}
                onChange={(e) => setArqSystem1Salience(parseFloat(e.target.value))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-[#E5E0D8] dark:border-slate-800 cursor-pointer">
              <span className="text-xs font-mono-code font-bold">
                Replace Dichotomous Yes/No with Conditional If-Clauses (Ch 12)
              </span>
              <input
                type="checkbox"
                checked={arqConditionalIfClauses}
                onChange={(e) => setArqConditionalIfClauses(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
            </label>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-[#E5E0D8] dark:border-slate-800 bg-[#FAF8F5] dark:bg-slate-950 space-y-2">
              <div className="text-xs font-mono-code uppercase text-slate-500">
                Perceived vs. True Expected Net Utility
              </div>
              <div className="flex items-baseline gap-4">
                <div>
                  <span className="text-[10px] font-mono-code text-amber-600 block">
                    SYSTEM 1 PERCEIVED
                  </span>
                  <span className="font-display text-4xl text-amber-600">
                    +{arqPerceivedUtility}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-emerald-600 block">
                    TRUE NET (POST-OMISSION)
                  </span>
                  <span className="font-display text-4xl text-emerald-600">
                    +{arqTrueCalibratedUtility}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Advocates highlight upside benefits (+{arqClaimedBenefit}) while omitting negative externalities (-{arqHiddenExternality}). Probing for the negative view restores realistic expectation.
              </p>
            </div>

            <div className="p-5 border-2 border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="text-xs font-mono-code uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                Epistemic Calibration & Decision Quality Score
              </div>
              <div className="font-display text-5xl text-emerald-600">
                {arqEpistemicCalibration}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {arqConditionalIfClauses
                  ? 'Grey thinking with explicit "If-Clauses" prevents false dichotomies and bounds conclusions to the exact conditions where the evidence holds.'
                  : 'Dichotomous (black-or-white) framing forces premature commitment and blinds the team to contextual alternative conclusions.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
