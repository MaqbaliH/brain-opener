import { ChapterMastery } from '../../../types/book';

export const ch03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Evaluation Methodology',
  subtitle:
    'Information-Theoretic Foundations, Exact Functional & Reference Metrics, AI-as-a-Judge Architectures, and Comparative Ranking Systems',
  readingTimeMinutes: 50,
  sourceWordCount: 14820,
  executiveThesis:
    'Evaluation is the primary engineering bottleneck in deploying foundation models. Because foundation models generate open-ended outputs across unbounded task spaces while operating largely as black boxes, traditional ground-truth classification metrics fail. Reliable AI engineering requires a layered methodology that combines information-theoretic language modeling metrics (entropy, cross-entropy, bits-per-byte, perplexity) with exact functional correctness (pass@k), lexical and semantic embedding similarity, calibrated AI-as-a-Judge pipelines, and Bradley-Terry comparative ranking systems.',
  paradigmShift: {
    oldWay:
      'Evaluating close-ended task-specific models against static, single-label ground-truth test sets using exact match or simple classification F1, supplemented in early LLM projects by ad-hoc "vibe checks" on a handful of personal prompts.',
    newWay:
      'Orchestrating multi-tiered automated evaluation: execution-based functional verification where possible, dense embedding similarity against curated reference sets, rubric-anchored AI-as-a-Judge evaluators with bias mitigation, and pairwise preference ranking.',
    whyItChanged:
      'As models grow more capable, tasks become more complex and outputs become open-ended. Validating a PhD-level proof or a multi-document synthesis takes far more effort than generating it, while public benchmarks saturate within months of release.',
  },
  customDiagrams: [
    {
      id: 'ch03-diag-info-theory',
      title: 'The Information-Theoretic Metric Chain: From True Distribution to Perplexity',
      subtitle:
        'How Shannon entropy, KL divergence, tokenization normalization (BPC/BPB), and exponentiation connect underlying distribution learning to next-token branching uncertainty',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bgGrad03a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <marker id="arrow03a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrowAmber03a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bgGrad03a)"/>
  
  <!-- Header -->
  <text x="30" y="34" fill="#f8fafc" font-size="15" font-weight="700">INFORMATION THEORY TO LANGUAGE MODEL EVALUATION</text>
  <text x="30" y="54" fill="#94a3b8" font-size="11">All four metrics (Cross-Entropy, BPC, BPB, Perplexity) are deterministic transformations of next-token log-probabilities.</text>

  <!-- Step 1: True Entropy + KL Divergence -->
  <rect x="28" y="75" width="165" height="125" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="42" y="98" fill="#38bdf8" font-size="11" font-weight="700">1. DATA ENTROPY H(P)</text>
  <text x="42" y="116" fill="#e2e8f0" font-size="12" font-weight="600">H(P) = -∑ P(x) log₂ P(x)</text>
  <text x="42" y="136" fill="#94a3b8" font-size="10">Intrinsic unpredictability of</text>
  <text x="42" y="150" fill="#94a3b8" font-size="10">the true language source P.</text>
  <text x="42" y="170" fill="#bae6fd" font-size="10">2 tokens → 1 bit (PPL=2)</text>
  <text x="42" y="185" fill="#bae6fd" font-size="10">4 tokens → 2 bits (PPL=4)</text>

  <rect x="28" y="220" width="165" height="120" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="42" y="243" fill="#fb7185" font-size="11" font-weight="700">2. MODEL PENALTY D_KL</text>
  <text x="42" y="261" fill="#e2e8f0" font-size="12" font-weight="600">D_KL(P || Q)</text>
  <text x="42" y="281" fill="#94a3b8" font-size="10">Extra bits required because</text>
  <text x="42" y="295" fill="#94a3b8" font-size="10">learned model Q diverges</text>
  <text x="42" y="309" fill="#94a3b8" font-size="10">from true distribution P.</text>
  <text x="42" y="326" fill="#fecdd3" font-size="10">Perfect model: D_KL = 0</text>

  <!-- Plus combiner -->
  <circle cx="228" cy="205" r="14" fill="#0ea5e9"/>
  <text x="228" y="210" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle">+</text>
  <path d="M 193 137 L 228 137 L 228 191" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrow03a)"/>
  <path d="M 193 280 L 228 280 L 228 219" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 242 205 L 272 205" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow03a)"/>

  <!-- Step 2: Cross-Entropy -->
  <rect x="278" y="130" width="210" height="150" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <text x="294" y="154" fill="#38bdf8" font-size="11" font-weight="700">3. CROSS-ENTROPY H(P, Q)</text>
  <text x="294" y="175" fill="#f8fafc" font-size="13" font-weight="700">H(P, Q) = H(P) + D_KL(P||Q)</text>
  <text x="294" y="196" fill="#94a3b8" font-size="10">Training Loss Objective.</text>
  <text x="294" y="212" fill="#94a3b8" font-size="10">Measured in bits (log₂) or nats (ln).</text>
  <line x1="294" y1="224" x2="472" y2="224" stroke="#334155" stroke-width="1"/>
  <text x="294" y="242" fill="#fbbf24" font-size="10" font-weight="600">Asymmetric: H(P,Q) ≠ H(Q,P)</text>
  <text x="294" y="260" fill="#cbd5e1" font-size="10">Example: 6 bits / token</text>

  <!-- Branches from Cross Entropy -->
  <path d="M 488 165 L 545 120" fill="none" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#arrow03a)"/>
  <path d="M 488 240 L 545 285" fill="none" stroke="#f59e0b" stroke-width="1.8" marker-end="url(#arrowAmber03a)"/>

  <!-- Step 3A: Perplexity -->
  <rect x="552" y="70" width="220" height="135" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
  <text x="568" y="93" fill="#38bdf8" font-size="11" font-weight="700">4A. PERPLEXITY (PPL)</text>
  <text x="568" y="114" fill="#f8fafc" font-size="13" font-weight="700">PPL = 2^H(P,Q)  or  e^H(P,Q)</text>
  <text x="568" y="134" fill="#94a3b8" font-size="10">Effective branching factor (uncertainty)</text>
  <text x="568" y="148" fill="#94a3b8" font-size="10">when predicting the next token.</text>
  <text x="568" y="168" fill="#7dd3fc" font-size="10">• Lower on structured data (HTML)</text>
  <text x="568" y="184" fill="#7dd3fc" font-size="10">• Higher on larger vocabularies</text>

  <!-- Step 3B: BPC & BPB -->
  <rect x="552" y="225" width="220" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
  <text x="568" y="248" fill="#fbbf24" font-size="11" font-weight="700">4B. TOKENIZATION-AGNOSTIC</text>
  <text x="568" y="268" fill="#f8fafc" font-size="12" font-weight="600">BPC = Bits/Token ÷ Chars/Token</text>
  <text x="568" y="286" fill="#cbd5e1" font-size="10">Ex: 6 bits/tok ÷ 2 chars/tok = 3 BPC</text>
  <line x1="568" y1="297" x2="755" y2="297" stroke="#334155" stroke-width="1"/>
  <text x="568" y="315" fill="#f8fafc" font-size="12" font-weight="600">BPB = BPC ÷ (Bytes / Char)</text>
  <text x="568" y="333" fill="#cbd5e1" font-size="10">7-bit ASCII (7/8 byte): 3 ÷ (7/8) = 3.43 BPB</text>
  <text x="568" y="351" fill="#fde68a" font-size="10">Compression ratio: 3.43 / 8 = 42.9% size</text>

  <!-- Bottom note -->
  <rect x="28" y="365" width="500" height="36" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="42" y="387" fill="#cbd5e1" font-size="10.5">⚠️ Post-Training Warning: SFT &amp; RLHF collapse entropy on task formats, often increasing raw Perplexity!</text>
</svg>`,
      bierutCaption:
        'Cross-entropy and perplexity measure the exact same underlying phenomenon on logarithmic versus exponential scales, while BPC and BPB factor out tokenizer granularity so models with different vocabularies can be compared.',
      annotations: [
        {
          step: '1',
          label: 'Intrinsic Entropy H(P)',
          explanation:
            'Every dataset has an irreducible floor of uncertainty determined by how much information each token carries on average.',
        },
        {
          step: '2',
          label: 'KL Divergence Penalty D_KL(P||Q)',
          explanation:
            'Measures the distribution mismatch between reality P and the model Q. Minimizing cross-entropy during pre-training is mathematically identical to driving KL divergence toward zero.',
        },
        {
          step: '3',
          label: 'Perplexity as Effective Branching Factor',
          explanation:
            'Exponentiating cross-entropy converts logarithmic bits into the equivalent number of equiprobable choices the model is torn between at each step.',
        },
        {
          step: '4',
          label: 'Bits-per-Byte (BPB) Standardization',
          explanation:
            'Because word-level, subword, and character-level tokenizers pack different amounts of text per token, BPB normalizes cross-entropy against raw UTF-8/ASCII bytes to measure true compression efficiency.',
        },
      ],
    },
    {
      id: 'ch03-diag-ai-judge-triad',
      title: 'The Three AI-as-a-Judge Topologies & Bias Failure Modes',
      subtitle:
        'Pointwise direct scoring, Reference-guided verification, and Pairwise preference comparison—alongside the systematic biases that distort judge reliability',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bgGrad03b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bgGrad03b)"/>
  
  <text x="30" y="34" fill="#f8fafc" font-size="15" font-weight="700">AI-AS-A-JUDGE EVALUATION PATTERNS &amp; SYSTEMATIC BIASES</text>
  <text x="30" y="53" fill="#94a3b8" font-size="11">An AI Judge is a composite system (Model + Prompt Rubric + Sampling Config). Changing any element creates a different judge.</text>

  <!-- Pattern 1: Pointwise Reference-Free -->
  <rect x="26" y="72" width="236" height="190" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="42" y="96" fill="#38bdf8" font-size="11" font-weight="700">PATTERN A: POINTWISE (REF-FREE)</text>
  <rect x="42" y="108" width="204" height="44" rx="5" fill="#0f172a" stroke="#334155"/>
  <text x="52" y="126" fill="#e2e8f0" font-size="10">Inputs: (Question, Candidate Answer)</text>
  <text x="52" y="142" fill="#94a3b8" font-size="9.5">+ Rubric Prompt (e.g. Cappy Reward Model)</text>
  <text x="144" y="172" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">↓ Judge Evaluation ↓</text>
  <rect x="42" y="182" width="204" height="64" rx="5" fill="#0f172a" stroke="#0284c7"/>
  <text x="52" y="200" fill="#7dd3fc" font-size="10.5" font-weight="600">Output: Discrete Score (1–5) + Reason</text>
  <text x="52" y="218" fill="#cbd5e1" font-size="9.5">✓ Works in live production (no ground truth)</text>
  <text x="52" y="234" fill="#cbd5e1" font-size="9.5">✗ Calibration drift across absolute scales</text>

  <!-- Pattern 2: Reference-Guided -->
  <rect x="282" y="72" width="236" height="190" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="298" y="96" fill="#34d399" font-size="11" font-weight="700">PATTERN B: REFERENCE-GUIDED</text>
  <rect x="298" y="108" width="204" height="44" rx="5" fill="#0f172a" stroke="#334155"/>
  <text x="308" y="126" fill="#e2e8f0" font-size="10">Inputs: (Question, Reference, Answer)</text>
  <text x="308" y="142" fill="#94a3b8" font-size="9.5">e.g. Prometheus (1–5 vs Gold=5), BLEURT</text>
  <text x="400" y="172" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">↓ Judge Evaluation ↓</text>
  <rect x="298" y="182" width="204" height="64" rx="5" fill="#0f172a" stroke="#059669"/>
  <text x="308" y="200" fill="#6ee7b7" font-size="10.5" font-weight="600">Output: True/False or Rubric Score</text>
  <text x="308" y="218" fill="#cbd5e1" font-size="9.5">✓ Captures semantic equivalence</text>
  <text x="308" y="234" fill="#cbd5e1" font-size="9.5">✗ Bottlenecked by reference curation</text>

  <!-- Pattern 3: Pairwise Preference -->
  <rect x="538" y="72" width="236" height="190" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="554" y="96" fill="#c084fc" font-size="11" font-weight="700">PATTERN C: PAIRWISE PREFERENCE</text>
  <rect x="554" y="108" width="204" height="44" rx="5" fill="#0f172a" stroke="#334155"/>
  <text x="564" y="126" fill="#e2e8f0" font-size="10">Inputs: (Question, Answer A, Answer B)</text>
  <text x="564" y="142" fill="#94a3b8" font-size="9.5">e.g. PandaLM, JudgeLM, RLHF Annotator</text>
  <text x="656" y="172" fill="#c084fc" font-size="11" font-weight="700" text-anchor="middle">↓ Judge Evaluation ↓</text>
  <rect x="554" y="182" width="204" height="64" rx="5" fill="#0f172a" stroke="#9333ea"/>
  <text x="564" y="200" fill="#d8b4fe" font-size="10.5" font-weight="600">Output: Winner (A, B, or Tie) → Elo/BT</text>
  <text x="564" y="218" fill="#cbd5e1" font-size="9.5">✓ Easier discrimination than absolute score</text>
  <text x="564" y="234" fill="#cbd5e1" font-size="9.5">✗ O(N²) pairs &amp; relative-only signal</text>

  <!-- Bottom Bias Bar -->
  <rect x="26" y="280" width="748" height="118" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="42" y="303" fill="#fb7185" font-size="11.5" font-weight="700">SYSTEMATIC JUDGE BIASES &amp; ENGINEERING MITIGATIONS</text>
  
  <text x="42" y="326" fill="#f8fafc" font-size="11" font-weight="600">1. Self-Bias (Narcissism)</text>
  <text x="42" y="343" fill="#94a3b8" font-size="9.5">Models favor their own token distributions:</text>
  <text x="42" y="358" fill="#fecdd3" font-size="9.5">GPT-4 (+10% self-win), Claude-v1 (+25%).</text>
  <text x="42" y="375" fill="#38bdf8" font-size="9.5">Fix: Cross-family jury or specialized judge.</text>

  <line x1="275" y1="312" x2="275" y2="386" stroke="#334155" stroke-width="1"/>

  <text x="292" y="326" fill="#f8fafc" font-size="11" font-weight="600">2. First-Position Bias (Primacy)</text>
  <text x="292" y="343" fill="#94a3b8" font-size="9.5">AI judges systematically favor Option A</text>
  <text x="292" y="358" fill="#fecdd3" font-size="9.5">(opposite of human recency bias).</text>
  <text x="292" y="375" fill="#38bdf8" font-size="9.5">Fix: Run both (A,B) and (B,A) orderings.</text>

  <line x1="525" y1="312" x2="525" y2="386" stroke="#334155" stroke-width="1"/>

  <text x="542" y="326" fill="#f8fafc" font-size="11" font-weight="600">3. Verbosity Bias (Length Inflation)</text>
  <text x="542" y="343" fill="#94a3b8" font-size="9.5">GPT-4 &amp; Claude-1 prefer ~100-word flawed</text>
  <text x="542" y="358" fill="#fecdd3" font-size="9.5">answers over ~50-word accurate answers.</text>
  <text x="542" y="375" fill="#38bdf8" font-size="9.5">Fix: Length-controlled rubrics &amp; few-shot.</text>
</svg>`,
      bierutCaption:
        'Choosing an AI-as-a-Judge architecture requires matching the evaluation topology to ground-truth availability while actively neutralizing self-preference, primacy ordering, and verbosity inflation.',
      annotations: [
        {
          step: 'A',
          label: 'Pointwise Scoring',
          explanation:
            'Scores a single response in isolation using discrete classification or a narrow integer rubric (1–5). Essential for production guardrails where reference answers do not exist.',
        },
        {
          step: 'B',
          label: 'Reference-Guided Judging',
          explanation:
            'Replaces brittle lexical overlap (BLEU/ROUGE) with an LLM or specialized scorer (Prometheus, BLEURT) that checks whether the candidate response semantically matches a canonical answer.',
        },
        {
          step: 'C',
          label: 'Pairwise Preference Judging',
          explanation:
            'Presents two responses side by side to determine which is superior. Directly feeds RLHF/DPO preference datasets and Bradley-Terry leaderboards.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ch03-mm-verification-asymmetry',
      name: 'The Intelligence-Evaluation Inversion',
      tagline:
        'As model capability scales, generating an output becomes cheap, while verifying its correctness becomes exponentially expensive.',
      naiveIntuition:
        'If a model produces fluent, well-structured text that looks smart on a quick read ("eyeballing"), the model is working well and evaluation can remain informal.',
      firstPrinciplesReality:
        'Evaluating a first-grader’s arithmetic takes seconds; evaluating a graduate-level mathematical proof or a 100-page book summary requires deep domain expertise and reading the entire source text. Coherent hallucinations mask fatal errors behind polished syntax.',
      howToApply:
        'Design systems for evaluability before scaling generation complexity. Decompose complex tasks into verifiable intermediate outputs, and replace ad-hoc "vibe checks" with automated exact checks and calibrated rubrics.',
    },
    {
      id: 'ch03-mm-compression-prediction',
      name: 'Prediction-Compression Equivalence',
      tagline:
        'A language model’s predictive accuracy (cross-entropy) is mathematically identical to its efficiency as a lossless data compressor.',
      naiveIntuition:
        'Cross-entropy and perplexity are abstract neural network loss numbers that only pre-training researchers need to care about.',
      firstPrinciplesReality:
        'Cross-entropy $H(P, Q)$ measures the exact average number of bits required to encode a token under the model’s learned distribution $Q$. A model with a bits-per-byte (BPB) of 3.43 compresses 8-bit bytes to 42.9% of their original size. Anomalously low perplexity reveals memorized training data (contamination), while high perplexity flags out-of-distribution or corrupted text.',
      howToApply:
        'Use perplexity and log-probabilities not only to track pre-training capability, but also to audit benchmark contamination, deduplicate training corpora, and detect abnormal or adversarial inputs.',
    },
    {
      id: 'ch03-mm-judge-composite',
      name: 'The AI Judge as a Mutable Composite System',
      tagline:
        'An AI judge is never just a model weight file; it is the coupled tuple of (Model Version, Prompt Rubric, Few-Shot Examples, Sampling Parameters).',
      naiveIntuition:
        'Metrics like "Faithfulness" or "Relevance" in evaluation frameworks (Ragas, MLflow, LlamaIndex, Azure) are standardized rulers like BLEU or F1.',
      firstPrinciplesReality:
        'Every framework defines "Faithfulness" with a different prompt template and scoring scale (1–5 vs. 0/1 vs. YES/NO). Even fixing a typo in the judge prompt or letting an API provider silently update a model checkpoint changes the ruler, invalidating historical score comparisons.',
      howToApply:
        'Version-control your judge prompts, pin exact model snapshots, force temperature to 0, prefer classification or narrow discrete rubrics (1–5) over continuous scales, and never trust an AI judge whose prompt and model you cannot inspect.',
    },
  ],
  deepSections: [
    {
      id: 'ch03-sec-challenges',
      sectionNumber: '3.1',
      title: 'Why Evaluating Foundation Models Is Fundamentally Hard',
      subtitle:
        'Verification asymmetry, open-ended output spaces, black-box opacity, rapid benchmark saturation, and the evaluation investment gap',
      coreMechanism: `Traditional machine learning models predominantly solve close-ended tasks—such as binary fraud classification or bounding-box detection—where the output space is constrained and every prediction can be directly compared against a single ground-truth label. Foundation models shatter this paradigm across five distinct dimensions. First, as models grow more intelligent, evaluating them requires far greater expertise and time than generating the response itself. Anyone can spot a first-grader's arithmetic error or a gibberish paragraph, but verifying a PhD-level mathematical derivation (such as Terence Tao evaluating OpenAI's o1) or auditing a coherent summary of a 500-page book requires reading the primary source, reasoning through subtle claims, and applying domain expertise.

Second, open-ended generation means that for any given prompt, there are infinitely many valid responses, making exhaustive ground-truth enumeration impossible. Third, most commercial and even many open-weight foundation models operate as black boxes: application engineers lack visibility into pre-training data distributions, architectural tweaks, and post-training recipes, forcing them to infer capability purely from external input-output behavior. Fourth, public benchmarks saturate at breakneck speed. GLUE (2018) saturated within a year and required SuperGLUE (2019); NaturalInstructions (2021) gave way to Super-NaturalInstructions (2022); MMLU (2020) required replacement by MMLU-Pro (2024).

Fifth, unlike task-specific models that are only evaluated on their single trained objective, general-purpose foundation models must be evaluated not only on known tasks but also to discover emergent capabilities and failure boundaries across unforeseen tasks. Despite an exponential surge in LLM evaluation papers (growing from 2 papers/month to nearly 35 papers/month in early 2023) and GitHub evaluation repositories, Chip Huyen's analysis of the top 1,000 AI repositories reveals that evaluation infrastructure receives a tiny fraction of the open-source investment directed toward modeling, training, and orchestration. This tooling deficit traps many teams in ad-hoc "vibe checks" (word of mouth or eyeballing a handful of personal prompts), which inevitably collapses when iterating in production.`,
      keyTakeaways: [
        'Open-ended tasks admit infinitely many valid responses, rendering exhaustive ground-truth reference lists impossible.',
        'Coherence is no longer a proxy for correctness; fluent models require fact-checking and domain expertise to audit.',
        'Benchmark saturation occurs rapidly (GLUE → SuperGLUE, MMLU → MMLU-Pro), turning static leaderboards into moving targets.',
        'Evaluation tooling lags severely behind modeling and orchestration infrastructure, tempting teams into risky ad-hoc eyeballing.',
      ],
      commonPitfalls: [
        'Relying on "vibe checks" (testing 5–10 personal prompts by eye) during iterative prompt or model changes.',
        'Assuming that a benchmark score on a saturated test set reflects real-world generalization.',
      ],
      figures: [
        {
          file: 'aien_0301.png',
          originalLabel:
            'Figure 3-1. The trend of LLMs evaluation papers over time. Image from Chang et al. (2023).',
          bierutTitle:
            'Research Interest in LLM Evaluation Explodes Exponentially Once Foundation Models Hit Production',
          editorialAnalysis:
            'Tracking monthly arXiv publications on LLM evaluation from 2021 through mid-2023, the curve remains nearly flat at 1–3 papers per month until early 2023, when ChatGPT and GPT-4 trigger a vertical spike to 34 papers per month in June 2023. The inflection shows that evaluation only became an urgent research crisis once open-ended models moved from academic curiosities to customer-facing deployments.',
          keyTakeaways: [
            'LLM evaluation publication volume grew roughly 17x in six months during the first half of 2023.',
            'New evaluation methodologies are being invented reactively as deployment failures expose blind spots.',
          ],
        },
        {
          file: 'aien_0302.png',
          originalLabel:
            'Figure 3-2. Number of open source evaluation repositories among the 1,000 most popular AI repositories on GitHub.',
          bierutTitle:
            'Open-Source Evaluation Tooling Follows an Exponential Adoption Curve Post-2022',
          editorialAnalysis:
            'Plotting the cumulative creation dates of the 50+ evaluation-focused repositories inside GitHub’s top 1,000 AI projects (as of May 2024) reveals a sharp exponential climb starting in 2022–2023, mirroring the academic paper boom as practitioners scrambled to build harnesses and judges.',
          keyTakeaways: [
            'Over 50 of the top 1,000 AI GitHub repositories are dedicated to evaluation, almost all created after 2022.',
          ],
        },
        {
          file: 'aien_0303.png',
          originalLabel:
            'Figure 3-3. According to data sourced from my list of the 1,000 most popular AI repositories on GitHub, evaluation lags behind other aspects of AI engineering in terms of open source tools.',
          bierutTitle:
            'Evaluation Remains Starved of Tooling Compared to Modeling, Training, and Orchestration',
          editorialAnalysis:
            'Comparing repository counts across categories within the top 1,000 AI GitHub repos shows Modeling & Training and AI Orchestration dominating developer mindshare, while Evaluation occupies a much smaller bar. As DeepMind researchers Balduzzi et al. noted, algorithmic experiments are almost always used to tune models rather than to systematically improve the evaluations themselves.',
          keyTakeaways: [
            'The industry invests disproportionately in building and orchestrating models while underinvesting in verifying whether they work.',
          ],
        },
      ],
    },
    {
      id: 'ch03-sec-info-theory',
      sectionNumber: '3.2',
      title: 'Information Theory & Language Modeling Metrics',
      subtitle:
        'Entropy, Cross-Entropy, KL Divergence, Bits-per-Character (BPC), Bits-per-Byte (BPB), and Perplexity (PPL)',
      coreMechanism: `Because foundation models have autoregressive or masked language models at their core, downstream capability correlates strongly with how well the language model learns the statistical distribution of its training data (Liu et al., 2023). Originating in Claude Shannon's 1951 paper "Prediction and Entropy of Printed English," four tightly coupled metrics govern language modeling: Entropy, Cross-Entropy, Bits-per-Character/Byte (BPC/BPB), and Perplexity (PPL). Given any one of these metrics and basic tokenization metadata, you can deterministically compute the other three.

**Entropy $H(P)$** measures the average information content carried by a token in the true data distribution $P$, which equals the minimum average number of bits needed to encode a token and reflects how difficult it is to predict what comes next. Consider a spatial language describing positions inside a square (Figure 3-4): if the language has only 2 equiprobable tokens (\`upper\`, \`lower\`), 1 bit suffices to represent each token, so $H(P) = 1$ bit. If the language has 4 equiprobable tokens (\`upper-left\`, \`upper-right\`, \`lower-left\`, \`lower-right\`), each token carries more specific positional information and requires 2 bits, yielding $H(P) = 2$ bits. Lower entropy means higher predictability.

**Cross-Entropy $H(P, Q)$** measures how difficult it is for a language model with learned distribution $Q$ to predict the next token in data drawn from the true distribution $P$. It decomposes into two additive quantities: the intrinsic entropy of the training data $H(P)$ plus the Kullback-Leibler (KL) divergence $D_{\\text{KL}}(P \\parallel Q)$, which quantifies the extra bits wasted because $Q$ diverges from $P$:
$$H(P, Q) = H(P) + D_{\\text{KL}}(P \\parallel Q)$$
Cross-entropy is asymmetric ($H(P, Q) \\neq H(Q, P)$). Pre-training minimizes $H(P, Q)$ with respect to the training set; if the model learns $P$ perfectly, $D_{\\text{KL}}(P \\parallel Q) = 0$ and $H(P, Q) = H(P)$.

**Bits-per-Character (BPC) and Bits-per-Byte (BPB)** resolve the cross-tokenizer comparability problem. Because one model might use word tokens and another subword or character tokens, "bits per token" cannot be compared across models. Dividing bits per token by the average number of characters per token yields BPC (e.g., 6 bits/token across 2 chars/token = 3 BPC). However, character encodings vary (7-bit ASCII vs. 8-to-32-bit UTF-8), so **BPB** standardizes on the number of bits the model requires to encode one raw byte (8 bits) of original text. A BPB of 3.43 means the model compresses every 8-bit byte of text into 3.43 bits—less than half its original size.

**Perplexity (PPL)** is the exponential of cross-entropy: $\\text{PPL}(P, Q) = 2^{H(P, Q)}$ when cross-entropy is measured in bits ($\\log_2$), or $\\text{PPL}(P, Q) = e^{H(P, Q)}$ when measured in nats ($\\ln$, the default in PyTorch and TensorFlow). Perplexity represents the model's effective branching uncertainty when predicting the next token. In the 4-token square language with $H = 2$ bits, $\\text{PPL} = 2^2 = 4$, meaning the model faces 4 equally likely possibilities. Across a sequence of $n$ tokens $[x_1, x_2, \\dots, x_n]$, perplexity is the inverse geometric mean of the conditional probabilities assigned to the true tokens.

Three structural laws govern perplexity interpretation: (1) **More structured data yields lower perplexity** (HTML code with deterministic closing tags like \`</head>\` is far more predictable than everyday prose); (2) **Larger vocabulary yields higher perplexity** (word-level perplexity is higher than character-level perplexity on the same text, and *War and Peace* yields higher perplexity than a children's book); (3) **Longer context length yields lower perplexity** (conditioning on 10,000 tokens reduces uncertainty compared to Shannon's 10-token window). While larger pre-trained models consistently achieve lower perplexity across benchmarks (as shown in OpenAI's GPT-2 scaling tables from 117M to 1542M parameters), **post-training (SFT and RLHF) and quantization distort perplexity**: SFT/RLHF narrows the model toward task completion ("entropy collapse"), which typically *increases* raw text perplexity even as downstream task utility improves. Finally, perplexity is a powerful tool for **data contamination detection** (memorized benchmarks exhibit abnormally low perplexity), **training data deduplication** (adding new corpora only when perplexity is high), and **anomaly/gibberish detection** (unusual phrases like "my dog teaches quantum physics" or gibberish trigger perplexity spikes).`,
      formulas: [
        {
          name: 'Cross-Entropy & KL Divergence Decomposition',
          expression: 'H(P, Q) = H(P) + D_{KL}(P || Q) = -\\sum_{x} P(x) \\log_2 Q(x)',
          intuition:
            'The total difficulty a model Q faces in predicting dataset P equals the dataset’s inherent randomness H(P) plus the penalty D_KL(P||Q) for how poorly the model’s probability estimates match reality.',
          variables: [
            { symbol: 'P', meaning: 'True empirical distribution of the dataset' },
            { symbol: 'Q', meaning: 'Probability distribution learned by the language model' },
            {
              symbol: 'H(P)',
              meaning: 'Intrinsic Shannon entropy of the true data (minimum bits per token)',
            },
            {
              symbol: 'D_{KL}(P || Q)',
              meaning: 'Kullback-Leibler divergence of Q from P (non-negative, 0 iff Q = P)',
            },
          ],
          workedExample:
            'If a dataset has an intrinsic entropy H(P) = 4.2 bits/token and a language model’s imperfect distribution adds D_KL(P || Q) = 1.8 bits/token of divergence, the model’s cross-entropy is H(P, Q) = 4.2 + 1.8 = 6.0 bits/token.',
        },
        {
          name: 'Bits-per-Character (BPC) and Bits-per-Byte (BPB)',
          expression:
            '\\text{BPC} = \\frac{H_{\\text{bits}}(P, Q)}{\\bar{c}_{\\text{tok}}}, \\quad \\text{BPB} = \\frac{\\text{BPC}}{\\text{Bytes per Character}}',
          intuition:
            'Normalizes cross-entropy across arbitrary tokenizers and character encodings to reveal the exact number of bits required to compress one raw 8-bit byte of source text.',
          variables: [
            {
              symbol: 'H_{\\text{bits}}(P, Q)',
              meaning: 'Model cross-entropy in bits per token',
            },
            {
              symbol: '\\bar{c}_{\\text{tok}}',
              meaning: 'Average number of characters per token for the model’s tokenizer',
            },
          ],
          workedExample:
            'Suppose a model has a cross-entropy of 6 bits/token, and each token averages 2 characters. Then BPC = 6 / 2 = 3 bits/character. If the text uses 7-bit ASCII encoding (where 1 character = 7/8 of an 8-bit byte), then BPB = 3 / (7/8) = 24 / 7 ≈ 3.43 bits/byte—compressing 8-bit text to 3.43 / 8 = 42.9% of its original size.',
        },
        {
          name: 'Sequence Perplexity (PPL)',
          expression:
            '\\text{PPL}(X) = 2^{H_{\\text{bits}}(P, Q)} = e^{H_{\\text{nats}}(P, Q)} = \\left( \\prod_{i=1}^{n} \\frac{1}{P(x_i \\mid x_1, \\dots, x_{i-1})} \\right)^{\\frac{1}{n}}',
          intuition:
            'Exponentiates cross-entropy to express uncertainty as the effective number of equally likely next tokens the model is choosing among at each position.',
          variables: [
            {
              symbol: 'P(x_i \\mid x_1, \\dots, x_{i-1})',
              meaning: 'Conditional probability assigned by the model to the i-th token given context',
            },
            { symbol: 'n', meaning: 'Total number of tokens in the evaluated sequence' },
          ],
          workedExample:
            'For a 3-token sequence where the model assigns conditional probabilities P(x_1) = 0.5, P(x_2|x_1) = 0.25, and P(x_3|x_1, x_2) = 0.5, the product of probabilities is 0.5 × 0.25 × 0.5 = 0.0625 = 1/16. Raising the inverse (16) to the 1/3 power yields PPL = 16^(1/3) ≈ 2.52 (equivalent to an average cross-entropy of 1.33 bits/token).',
        },
      ],
      keyTakeaways: [
        'Cross-entropy and perplexity measure next-token predictive uncertainty; lower values mean higher accuracy.',
        'Perplexity cannot be compared across models with different vocabularies or tokenizers—use Bits-per-Byte (BPB) instead.',
        'SFT and RLHF post-training collapse entropy toward task completion, which typically raises perplexity despite improving downstream usefulness.',
        'Abnormally low perplexity on a public benchmark is a forensic signature of training data contamination.',
      ],
      commonPitfalls: [
        'Comparing raw perplexity numbers between two models that use different tokenizers (e.g., a 32K vs. 128K vocabulary).',
        'Confusing log base 2 (bits) with natural log base e (nats, used by PyTorch/TensorFlow) when exponentiating cross-entropy.',
        'Rejecting an RLHF-aligned or quantized model solely because its perplexity increased relative to the base model.',
      ],
      figures: [
        {
          file: 'aien_0304.png',
          originalLabel:
            'Figure 3-4. Two languages describe positions within a square. Compared to the language on the left (a), the tokens on the right (b) carry more information, but they need more bits to represent them.',
          bierutTitle:
            'Higher Granularity Increases Per-Token Information Content at the Cost of Higher Entropy and Perplexity',
          editorialAnalysis:
            'In diagram (a), a square is partitioned horizontally into 2 regions (upper, lower), requiring 1 bit per token (Entropy = 1, Perplexity = 2). In diagram (b), the square is partitioned into 4 quadrants (upper-left, upper-right, lower-left, lower-right), requiring 2 bits per token (Entropy = 2, Perplexity = 4). This visual proof demonstrates why larger vocabularies with more specific tokens inherently exhibit higher entropy and higher perplexity: each token carries more information, making the exact next token harder to guess among more options.',
          keyTakeaways: [
            'A 2-token equiprobable language has Entropy = 1 bit and Perplexity = 2.',
            'A 4-token equiprobable language has Entropy = 2 bits and Perplexity = 4.',
            'More specific tokens carry more information per token but increase next-token prediction uncertainty.',
          ],
        },
      ],
    },
    {
      id: 'ch03-sec-exact-eval',
      sectionNumber: '3.3',
      title: 'Exact Evaluation: Functional Correctness & Reference Similarity',
      subtitle:
        'Execution accuracy (pass@k), Exact Match, Lexical Overlap (Edit Distance, BLEU, ROUGE), Semantic Similarity (Cosine), and Multimodal Embeddings (CLIP)',
      coreMechanism: `Unlike subjective evaluations whose scores shift depending on the grader, **Exact Evaluation** produces deterministic, unambiguous scores given the inputs. For open-ended generation, exact evaluation bifurcates into reference-free **Functional Correctness** and reference-based **Similarity Measurements**.

**Functional Correctness (Execution Accuracy)** evaluates whether the generated output actually performs its intended function in an executable environment. While impossible to automate for prose essays, functional correctness is the gold standard for code generation (HumanEval, MBPP), Text-to-SQL (Spider, BIRD-SQL, WikiSQL), game-playing bots (Tetris score), and measurable optimization tasks (energy scheduling savings). In code benchmarks like HumanEval, each problem defines a function signature, docstring, and a suite of unit test \`assert\` statements. To evaluate a model, we sample $k$ independent code completions per problem. If *at least one* of the $k$ generated samples passes all unit tests for a problem, that problem is marked solved. The **pass@k** metric is the fraction of total problems solved given $k$ attempts per problem (guaranteed to satisfy $\\text{pass@1} \\le \\text{pass@3} \\le \\text{pass@10}$).

When functional execution isn't possible, engineers compare generated outputs against canonical **reference responses** (ground truths) across three tiers of similarity:
1. **Exact Match (EM)**: Binary check (1 or 0) verifying whether the generated output matches a reference string verbatim. Useful for trivia, arithmetic (\`2 + 3 = 5\`), or short entity extraction. Substring containment relaxations (accepting any response containing \`"5"\`) reduce formatting false negatives but introduce catastrophic false positives: for "What year was Anne Frank born?" (June 12, 1929), substring matching \`"1929"\` falsely marks \`"September 12, 1929"\` as correct.
2. **Lexical Similarity**: Measures surface token or character overlap without understanding meaning. **Approximate string matching (fuzzy matching)** counts **edit distance** (Levenshtein operations: deletion \`brad → bad\`, insertion \`bad → bard\`, substitution \`bad → bed\`, and optionally transposition \`mats → mast\`). **N-gram overlap metrics** (BLEU, ROUGE, METEOR++, TER, CIDEr) break texts into contiguous $n$-token sequences (unigrams, bigrams like \`"my cats"\`, \`"cats scare"\`) and compute overlap ratios. Lexical similarity suffers from three severe flaws: (a) it penalizes valid paraphrases missing from the reference list (as happened to Adept's Fuyu model on COCO image captioning, Figure 3-5); (b) public reference sets often contain flawed human translations (WMT 2023 Metrics shared task); and (c) on code generation (HumanEval), OpenAI proved that correct and incorrect programs often share nearly identical BLEU scores (Chen et al., 2021).
3. **Semantic Similarity (Embedding Similarity)**: Maps texts into dense numerical vectors (**embeddings**, typically 100 to 10,000 dimensions—such as BERT-base at 768, CLIP at 512, Cohere Embed-v3 at 1024, or OpenAI \`text-embedding-3-large\` at 3072) and computes geometric closeness via **cosine similarity** (metrics like BERTScore and MoverScore). This recognizes that \`"What's up?"\` and \`"How are you?"\` mean the same thing despite zero lexical overlap, whereas \`"Let's eat, grandma"\` and \`"Let's eat grandma"\` have high lexical overlap but opposite meanings. Embedding quality is benchmarked on suites like **MTEB** (Massive Text Embedding Benchmark). Furthermore, **joint multimodal embedding models** like **CLIP** (text + image), **ULIP** (text + image + 3D point clouds), and **ImageBind** (6 modalities including audio) project heterogeneous modalities into a single shared vector space, enabling cross-modal semantic evaluation and retrieval.`,
      formulas: [
        {
          name: 'pass@k Functional Correctness Metric',
          expression:
            '\\text{pass@}k = \\frac{1}{M} \\sum_{j=1}^{M} \\mathbb{I}\\left( \\bigvee_{i=1}^{k} \\text{PassesAllTests}(y_{j,i}) \\right)',
          intuition:
            'Measures the fraction of M coding problems where at least 1 out of k generated candidate programs passes every unit test assertion.',
          variables: [
            { symbol: 'M', meaning: 'Total number of problems in the benchmark' },
            { symbol: 'k', meaning: 'Number of candidate code samples generated per problem' },
            {
              symbol: 'y_{j,i}',
              meaning: 'The i-th code sample generated for problem j',
            },
          ],
          workedExample:
            'On a 10-problem benchmark, you generate k = 3 code samples per problem. If at least one sample passes all unit tests on 5 of the 10 problems, then pass@3 = 5 / 10 = 50%. Generating k = 10 samples can only maintain or increase this score.',
        },
        {
          name: 'Cosine Similarity for Semantic Embeddings',
          expression:
            '\\text{CosineSimilarity}(A, B) = \\frac{A \\cdot B}{\\|A\\|_2 \\|B\\|_2} = \\frac{\\sum_{i=1}^{d} A_i B_i}{\\sqrt{\\sum_{i=1}^{d} A_i^2} \\sqrt{\\sum_{i=1}^{d} B_i^2}}',
          intuition:
            'Measures the cosine of the angle between generated embedding A and reference embedding B in d-dimensional space, invariant to vector magnitude (ranging from -1 opposite to +1 identical).',
          variables: [
            { symbol: 'A, B', meaning: 'Embedding vectors of generated and reference texts' },
            { symbol: 'A \\cdot B', meaning: 'Dot product of vectors A and B' },
            { symbol: '\\|A\\|_2', meaning: 'Euclidean (L2) norm of vector A' },
          ],
          workedExample:
            'For A = [0.11, 0.02, 0.54], its L2 norm is ||A|| = sqrt(0.11² + 0.02² + 0.54²) = sqrt(0.0121 + 0.0004 + 0.2916) = sqrt(0.3041) ≈ 0.5515. Dividing the dot product A·B by (||A|| × ||B||) yields a deterministic similarity score in [-1, 1].',
        },
      ],
      keyTakeaways: [
        'Functional correctness (unit tests, execution accuracy) is the ultimate metric whenever an executable environment exists.',
        'Lexical overlap metrics (BLEU, ROUGE) fail on code generation and penalize valid paraphrases outside the reference set.',
        'Semantic similarity uses dense embeddings and cosine similarity to capture meaning across paraphrases and even across modalities (CLIP).',
      ],
      commonPitfalls: [
        'Using substring inclusion for Exact Match on dates or numbers, which accepts factually wrong statements containing the target token.',
        'Extracting intermediate layer representations from causal LLMs (like GPT or Llama) as embeddings without verifying that they match specialized contrastive embedding models (BERT, CLIP, Cohere).',
      ],
      figures: [
        {
          file: 'aien_0305.png',
          originalLabel:
            'Figure 3-5. An example where Fuyu generated a correct option but was given a low score because of the limitation of reference captions.',
          bierutTitle:
            'Reference-Based Lexical Metrics Penalize Accurate Generations That Phrase Facts Differently',
          editorialAnalysis:
            'In this COCO image-captioning example from Adept’s Fuyu evaluation, the image shows a bus parked on a street. The human reference captions describe the bus using specific phrasings, and when Fuyu generates a completely accurate description that uses different vocabulary, lexical overlap metrics assign it a near-zero score. This illustrates the reference completeness bottleneck.',
          keyTakeaways: [
            'No reference set can exhaustively list every valid way to describe an image or translate a complex sentence.',
            'Low lexical similarity scores often reflect narrow reference coverage rather than model failure.',
          ],
        },
        {
          file: 'aien_0306.png',
          originalLabel: 'Figure 3-6. CLIP’s architecture (Radford et al., 2021).',
          bierutTitle:
            'Contrastive Dual Encoders Align Text and Vision into a Shared Semantic Vector Space',
          editorialAnalysis:
            'CLIP pairs a Text Encoder and an Image Encoder across a batch of N (image, text) pairs. During contrastive pre-training, the model maximizes the cosine similarity of the N true diagonal pairs (I₁·T₁, I₂·T₂, ..., I_N·T_N) while minimizing the similarity of the N² - N incorrect off-diagonal pairs. At inference time, this joint 512-dimensional space allows direct cosine similarity comparison between an image and any text prompt.',
          keyTakeaways: [
            'Contrastive learning trains separate modality encoders to project matching concepts to the same coordinates.',
            'Joint multimodal embeddings power both cross-modal search and reference-free image-text evaluation.',
          ],
        },
      ],
    },
    {
      id: 'ch03-sec-ai-judge',
      sectionNumber: '3.4',
      title: 'AI-as-a-Judge: Architectures, Prompting, Biases & Specialized Models',
      subtitle:
        'Why 58%+ of production evaluations use AI judges, the 3 judge patterns, systematic biases (self, position, verbosity), and specialized judges (Cappy, Prometheus, PandaLM)',
      coreMechanism: `Because human evaluation is slow and expensive while exact reference metrics fail on open-ended tasks, **AI-as-a-Judge (LLM-as-a-Judge)** has become the dominant production evaluation paradigm—accounting for 58% of all evaluations on LangChain's platform in 2023. Studies demonstrate that strong AI judges correlate remarkably well with human annotators: on MT-Bench, Zheng et al. (2023) found 85% agreement between GPT-4 and humans (exceeding the 81% inter-human agreement), while AlpacaEval (Dubois et al., 2023) reported a 0.98 correlation between AI judges and the human-voted LMSYS Chatbot Arena leaderboard. Furthermore, AI judges generate natural-language rationales alongside their scores (Figure 3-7), making evaluations auditable.

AI judges operate in three distinct architectural patterns:
1. **Pointwise Direct Scoring (Reference-Free)**: Given \`(Question, Answer)\`, the judge scores quality on a rubric (e.g., 1 to 5). Works directly in live production where no reference data exists.
2. **Reference-Guided Comparison**: Given \`(Question, Reference Answer, Generated Answer)\`, the judge evaluates semantic equivalence or rubric alignment against the gold answer.
3. **Pairwise Preference Comparison**: Given \`(Question, Answer A, Answer B)\`, the judge selects the better response (A, B, or Tie), generating preference data for RLHF, test-time compute verification, and comparative leaderboards.

**Prompting an AI Judge** requires three explicit components: (1) a clear task definition; (2) detailed evaluation criteria; and (3) a well-bounded scoring system with few-shot examples for each score bucket. Because language models handle discrete concepts better than continuous real numbers, **classification (Pass/Fail, Relevant/Irrelevant) outperforms numerical scoring**, and **narrow discrete scales (1 to 5) outperform wide scales (1 to 100) or continuous [0, 1] floats**. Adding few-shot examples to GPT-4 judge prompts increased consistency from 65% to 77.5% (Zheng et al., 2023), though it quadrupled token costs.

However, engineers must guard against four major limitations of AI judges:
- **Inconsistency**: Probabilistic sampling produces different scores across runs; high consistency also does not guarantee accuracy (a judge can be consistently wrong).
- **Criteria Ambiguity & Drift**: Built-in metrics across tools (MLflow's 1–5 \`faithfulness\`, Ragas's 0/1 statement verification, LlamaIndex's \`YES/NO\` context support) are completely incompatible. Worse, if a platform team silently edits a judge prompt or upgrades the judge model checkpoint, application metrics shift (e.g., coherence rising from 90% to 92%) without any change to the application itself.
- **Cost & Latency Multiplier**: Running 3 separate GPT-4 judge criteria (quality, factuality, toxicity) on every GPT-4 generation quadruples API calls (4x cost) and adds blocking latency if used as an inline guardrail. Teams mitigate this via spot-checking (sampling 1%–5% of traffic) or asynchronous background judging.
- **Systematic Biases**:
  1. *Self-Bias*: Models favor outputs matching their own generation distribution—GPT-4 favors itself by +10% win rate, and Claude-v1 favors itself by +25% (Zheng et al., 2023).
  2. *First-Position Bias*: AI judges systematically favor the first option presented in pairwise comparisons (the exact opposite of human *recency bias*). Mitigate by running every pair twice with swapped orders \`(A, B)\` and \`(B, A)\`.
  3. *Verbosity Bias*: AI judges favor longer answers regardless of factual accuracy. Wu & Aji (2023) showed GPT-4 and Claude-1 preferred ~100-word answers containing factual errors over ~50-word factually correct answers; Saito et al. (2023) confirmed that when one response is twice as long, judges almost always pick it.

Finally, while stronger frontier models make the best general-purpose judges (and self-critique can catch obvious errors like \`10 + 3 = 30 → 13\`), **small specialized judges** offer massive cost and latency advantages:
- **Reward Models** (e.g., Google's **Cappy**, 360M parameters): Takes \`(prompt, response)\` and outputs a correctness score in $[0, 1]$.
- **Reference-Based Judges** (e.g., **BLEURT**, outputting similarity in $[-2.5, 1.0]$; **Prometheus**, taking \`(prompt, response, reference, rubric)\` to score 1–5 against a gold-5 reference).
- **Preference Models** (e.g., **PandaLM**, **JudgeLM**): Fine-tuned models that take \`(prompt, response 1, response 2)\`, output the preferred response, and explain the rationale.`,
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select Judge Topology & Model Tier',
          detail:
            'Choose Pointwise (for live production without references), Reference-Guided (for offline golden test sets), or Pairwise (for ranking/RLHF). Choose between a frontier general-purpose judge (on a 1% sample) or a lightweight specialized judge (Cappy, Prometheus, PandaLM) for 100% traffic.',
        },
        {
          step: '2',
          title: 'Engineer a Classification or Narrow-Discrete Rubric Prompt',
          detail:
            'Define the exact evaluation task, specify unambiguous criteria, restrict the output scale to binary/ternary classes or a 1–5 integer scale, and embed concrete few-shot examples with justifications for each score level.',
        },
        {
          step: '3',
          title: 'Lock Determinism & Debias Execution',
          detail:
            'Pin the exact judge model checkpoint, version-control the prompt template, set temperature = 0, randomize/swap pairwise positions (A,B) vs (B,A) to cancel first-position bias, and penalize unnecessary length to counter verbosity bias.',
        },
      ],
      keyTakeaways: [
        'An AI judge is a coupled system of (Model + Prompt + Sampling Config); altering any part invalidates longitudinal metric comparisons.',
        'Classification and 1–5 discrete scales with few-shot examples yield significantly higher judge reliability than continuous numerical scales.',
        'AI judges exhibit self-bias (+10% GPT-4, +25% Claude-v1), first-position bias (opposite of human recency bias), and verbosity bias.',
        'Small specialized judges (Cappy 360M, Prometheus, PandaLM) slash inference cost and latency compared to frontier LLM judges.',
      ],
      commonPitfalls: [
        'Comparing "faithfulness" or "relevance" scores across different frameworks (MLflow vs. Ragas vs. LlamaIndex) as if they were standardized formulas.',
        'Running pairwise AI judge evaluations in a single fixed order (A, B), allowing first-position bias to skew win rates.',
        'Using the same model family as both generator and judge without accounting for self-bias.',
      ],
      figures: [
        {
          file: 'aien_0307.png',
          originalLabel:
            'Figure 3-7. Not only can AI judges score, they also can explain their decisions.',
          bierutTitle:
            'Natural-Language Rationales Turn Black-Box Scores into Auditable Engineering Signals',
          editorialAnalysis:
            'Unlike scalar metrics such as BLEU or cosine similarity that emit an opaque number, the GPT-4 judge shown here outputs both a structured judgment and a step-by-step explanation of why the candidate response succeeded or failed against the prompt constraints. This explanation allows engineers to debug both the application and the judge rubric itself.',
          keyTakeaways: [
            'Asking the judge to output a scoring reason before or alongside its score improves interpretability and auditability.',
          ],
        },
        {
          file: 'aien_0308.png',
          originalLabel:
            'Figure 3-8. An example of an AI judge that evaluates the quality of an answer given a question.',
          bierutTitle:
            'Anatomy of a Production Pointwise Judge: Task Definition, Grounded Rubric, and Few-Shot Calibration',
          editorialAnalysis:
            'Illustrates the complete data flow of a pointwise AI judge evaluating answer relevance. By combining the user question, candidate answer, explicit scoring rubric (1–5), and concrete examples of low-scoring contradictions, the judge acts as a repeatable classification pipeline.',
          keyTakeaways: [
            'A judge prompt must explicitly specify the task, the evaluation criteria, the scoring scale, and concrete calibration examples.',
          ],
        },
        {
          file: 'aien_0309.png',
          originalLabel:
            'Figure 3-9. An example output of PandaLM, given a human prompt and two generated responses. Picture from Wang et al. (2023), modified slightly for readability.',
          bierutTitle:
            'Specialized Preference Models Automate Pairwise Judging Without Frontier API Costs',
          editorialAnalysis:
            'Given a user instruction and two candidate responses (Response 1 and Response 2), PandaLM—a specialized open-source preference judge—identifies which response is superior and provides a concise critique of why one response is more helpful or accurate. This replaces costly GPT-4 pairwise calls during hyperparameter tuning and RLHF data curation.',
          keyTakeaways: [
            'Specialized preference models like PandaLM and JudgeLM predict human pairwise preference at a fraction of frontier model cost.',
          ],
        },
      ],
    },
    {
      id: 'ch03-sec-comparative-eval',
      sectionNumber: '3.5',
      title: 'Ranking Models with Comparative Evaluation',
      subtitle:
        'Pointwise vs. Comparative evaluation, Elo to Bradley-Terry statistical ranking, quadratic O(N²) scaling bottlenecks, non-transitivity, and relative vs. absolute performance',
      coreMechanism: `When selecting among candidate models, you often care about their relative ranking rather than isolated scalar scores. While **pointwise evaluation** scores each model independently and sorts the scores, **comparative evaluation** pits two or more models head-to-head on the same prompt in a **match** (allowing wins or ties) and computes a global ranking from the pairwise match history. Comparative evaluation is different from **A/B testing**: in A/B testing, a user sees the output of only one model variant; in comparative evaluation, the evaluator sees both outputs side by side simultaneously (as in ChatGPT's side-by-side feedback UI and LMSYS's Chatbot Arena, Figure 3-10).

Humans find comparative judgment ("Which of these two songs or essays is better?") vastly easier and more reliable than assigning calibrated absolute scores—especially as models surpass human writing ability (a phenomenon noted in the Llama 2 paper). However, **preference is not correctness**: asking non-expert users to vote on medical or mathematical facts ("Is there a link between cell phone radiation and brain tumors? Option A: Yes, Option B: No") produces noisy or dangerous training signals and frustrates users who asked the AI precisely because they didn't know the answer. Comparative voting works best when AI acts as an assistant for tasks the user already knows how to verify.

To turn a table of pairwise win rates (e.g., Model 1 beats Model 2 90% of the time, but loses to Model 3 60% of the time) into a global leaderboard, rating algorithms treat ranking as a **predictive problem**: if Model A is ranked higher than Model B, A should beat B more than 50% of the time in future matches. While adapted from chess and gaming systems like **Elo** and **TrueSkill**, LMSYS Chatbot Arena switched from classical Elo to the **Bradley-Terry** statistical model because online Elo updates are sensitive to the sequential order of matches and evaluators, whereas Bradley-Terry computes order-independent maximum-likelihood skill ratings across the entire match matrix (which LMSYS then rescales by multiplying by 400, adding 1,000, and anchoring Llama-13b at 800 so the numbers still look like familiar Elo scores).

Comparative evaluation faces three fundamental engineering challenges:
1. **Scalability Bottlenecks & Non-Transitivity**: The number of model pairs grows quadratically as $\\binom{N}{2} = \\frac{N(N-1)}{2} = O(N^2)$. In January 2024, LMSYS had 244,000 comparisons across 57 models—which sounds massive, yet averages only **153 matches per model pair** across 1,596 pairs! Rating algorithms rely on **transitivity** ($A > B$ and $B > C \\implies A > C$) to avoid comparing every pair directly, but multiple studies (Boubdir et al., Balduzzi et al., Munos et al.) prove that human and multi-attribute preferences over AI models are often **non-transitive** (rock-paper-scissors cycles caused by shifting evaluators and prompt distributions). Furthermore, adding a single new or private model requires running fresh matches against existing models and can perturb the entire leaderboard. Active matchmaking algorithms mitigate this by preferentially sampling model pairs with the highest rating uncertainty.
2. **Lack of Standardization & Crowd Noise**: Crowdsourced arenas let anonymous internet users submit arbitrary prompts without quality control. In LMSYS's 2023 dataset of 33,000 prompts, 180 (0.55%) were literally just \`"hello"\` or \`"hi"\`, and stock brainteasers ("X has 3 sisters, each has a brother...") were repeated dozens of times. Trivial prompts cannot discriminate between frontier models, volunteers rarely fact-check fluent hallucinations, malicious users upvote toxic refusals/jailbreaks, and web chat boxes cannot test enterprise RAG context pipelines. LMSYS mitigates this by filtering for hard prompts using an internal classifier, while Scale AI uses trained, vetted human evaluators on private leaderboards.
3. **Comparative vs. Absolute Performance Gap**: Knowing that Model B beats Model A 51% of the time tells you nothing about whether either model is *good enough* for production. Both could be terrible, or both could be excellent. If Model A resolves 70% of customer support tickets and costs $1/1M tokens while Model B wins 51% of pairwise matches but costs $2/1M tokens, comparative evaluation cannot tell you whether that 51% win rate translates into 70.1% or 85% ticket resolution—making ROI cost-benefit analysis impossible without absolute task evaluation.`,
      formulas: [
        {
          name: 'Pairwise Combinatorial Scaling & Bradley-Terry Win Probability',
          expression:
            '\\text{Pairs}(N) = \\frac{N(N-1)}{2}, \\quad P(A \\succ B) = \\frac{1}{1 + 10^{(R_B - R_A)/400}} = \\frac{e^{\\beta_A}}{e^{\\beta_A} + e^{\\beta_B}}',
          intuition:
            'The number of distinct head-to-head pairings grows quadratically with model count N, while the probability that model A beats model B is modeled as a logistic function of the difference between their latent skill ratings.',
          variables: [
            { symbol: 'N', meaning: 'Number of candidate models on the leaderboard' },
            {
              symbol: 'R_A, R_B',
              meaning: 'Elo-scaled Bradley-Terry skill ratings for models A and B',
            },
            {
              symbol: '\\beta_A, \\beta_B',
              meaning: 'Unscaled natural-log Bradley-Terry latent strength parameters',
            },
          ],
          workedExample:
            'With N = 57 models on Chatbot Arena, there are 57 × 56 / 2 = 1,596 unique model pairs. Dividing 244,000 total crowdsourced matches across 1,596 pairs yields only 244,000 / 1,596 ≈ 152.9 matches per pair. If Model A has rating R_A = 1200 and Model B has R_B = 1000, A’s expected win rate over B is 1 / (1 + 10^(-200/400)) = 1 / (1 + 0.316) ≈ 76%.',
        },
      ],
      keyTakeaways: [
        'Comparative evaluation asks evaluators to pick the better of two side-by-side outputs, which remains feasible even when models surpass human generation ability.',
        'LMSYS Chatbot Arena replaced sequential Elo with the Bradley-Terry model to eliminate sensitivity to match ordering.',
        'Pairwise comparisons scale quadratically O(N²), rely on fragile transitivity assumptions, and cannot measure absolute task sufficiency or cost ROI.',
      ],
      commonPitfalls: [
        'Using preference voting on factual, medical, or mathematical queries where non-expert users vote for persuasive falsehoods.',
        'Confusing side-by-side comparative evaluation with online A/B testing (where each user sees only one variant).',
        'Upgrading to a 2x more expensive model solely because it has a +20 Elo lead on a public arena without measuring absolute business ticket resolution.',
      ],
      figures: [
        {
          file: 'aien_0310.png',
          originalLabel:
            'Figure 3-10. ChatGPT occasionally asks users to compare two outputs side by side.',
          bierutTitle:
            'In-Workflow Pairwise Comparisons Harvest Real-World Preference Signals at Scale',
          editorialAnalysis:
            'By rendering two candidate responses side by side directly inside the user’s active session ("Which response do you prefer?"), OpenAI collects contextualized comparative preference data on real workflows—Testing either two different model checkpoints or two sampling configurations—while avoiding the artificial "hello/brainteaser" prompt bias of external crowd arenas.',
          keyTakeaways: [
            'Embedding side-by-side comparisons inside product workflows captures grounded user prompts, though click noise requires filtering.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'The Four Families of Automatic Open-Ended Evaluation',
      description:
        'Comparing language modeling metrics, functional execution, reference-based similarity, and AI-as-a-Judge across determinism, reference dependency, and failure modes.',
      headers: [
        'Evaluation Family',
        'Nature & Determinism',
        'Reference Data Required?',
        'Primary Metrics / Tools',
        'Ideal Use Cases',
        'Core Failure Mode',
      ],
      rows: [
        [
          'Language Modeling Metrics',
          'Exact (requires token logprobs)',
          'No (evaluates raw target text)',
          'Cross-Entropy, Perplexity (PPL), BPC, BPB',
          'Pre-training tracking, contamination detection, deduplication, anomaly filtering',
          'Degrades after SFT/RLHF post-training; unavailable when APIs hide logprobs',
        ],
        [
          'Functional Correctness',
          'Exact (execution-verified)',
          'Requires unit tests or objective simulator',
          'pass@k (HumanEval, MBPP), execution accuracy (BIRD-SQL)',
          'Code generation, Text-to-SQL, game bots, resource scheduling',
          'Cannot be applied to prose, creative writing, or non-executable reasoning',
        ],
        [
          'Lexical Similarity',
          'Exact (surface token overlap)',
          'Yes (comprehensive canonical references)',
          'Exact Match, Edit Distance, BLEU, ROUGE, CIDEr',
          'Short trivia extraction, entity matching, constrained translation',
          'Penalizes valid paraphrases; correlates poorly with code correctness',
        ],
        [
          'Semantic Similarity',
          'Exact math on model-dependent embeddings',
          'Yes (1+ reference responses)',
          'Cosine similarity, BERTScore, MoverScore, CLIPScore',
          'Paraphrase verification, retrieval ranking, multimodal alignment',
          'Bounded by embedding model quality; misses fine-grained logical negations',
        ],
        [
          'AI-as-a-Judge & Comparative',
          'Subjective (prompt & model dependent)',
          'Optional (Pointwise/Pairwise work reference-free)',
          'GPT-4 Judge, Prometheus, Cappy, PandaLM, Bradley-Terry Elo',
          'Production guardrails, rubric grading, tone/roleplay, open-ended synthesis',
          'Self-bias, first-position bias, verbosity bias, rubric drift, API cost/latency',
        ],
      ],
      verdictRule:
        'Always prioritize Functional Correctness whenever an interpreter or simulator exists. When evaluating text without an interpreter, pair Semantic Similarity (offline against golden references) with a rubric-calibrated, temperature-0 AI-as-a-Judge (for reference-free production monitoring).',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ch03-scen-judge-drift',
      title: 'The Phantom Coherence Spike & Verbosity Trap in AI-as-a-Judge',
      roleAndContext:
        'Lead AI Engineer for an enterprise financial research assistant that summarizes SEC 10-K filings and uses an internal AI-as-a-Judge pipeline to gate releases.',
      symptomOrFailure:
        'After switching to a new prompt template, your dashboard shows the "Faithfulness & Quality" AI Judge score jumping from 82% to 94%. Yet in production, portfolio managers complain that summaries have become bloated, repetitive, and occasionally slip in unsupported financial projections.',
      naiveFixAndWhyItFails:
        'Celebrating the 94% score or simply tweaking the generator prompt to "be more accurate." This fails because two evaluation bugs are compounding: (1) the platform team recently switched the evaluation harness from Ragas (0/1 statement verification) to a custom 1–10 GPT-3.5 pointwise judge without versioning the rubric, and (2) the new generator prompt produces 2x longer responses, triggering the judge’s verbosity bias.',
      firstPrinciplesSolution:
        'Treat the AI judge as a version-controlled software artifact: (1) Lock the judge to a binary or 1–5 discrete rubric with explicit few-shot examples showing that concise, accurate summaries beat verbose, flawed ones; (2) Decompose summary verification into statement-level atomic claims checked against source chunks; (3) For pairwise prompt comparisons, run every test twice with swapped positions (A,B) and (B,A) at temperature = 0.',
      measurableOutcome:
        'Eliminates length-driven false positives, restores 91% agreement with senior financial analysts, and prevents silent rubric drift across sprints.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ch03-q1',
        scenarioPrompt:
          'A language model has a cross-entropy of 5.6 bits per token on an English corpus. On average, each token in its tokenizer consists of 4 characters, and the text is encoded in 7-bit ASCII (where each character is 7/8 of an 8-bit byte). What are the model’s Bits-per-Character (BPC) and Bits-per-Byte (BPB)?',
        options: [
          {
            label: 'A',
            text: 'BPC = 1.40 bits/char, BPB = 1.60 bits/byte (compressing text to 20% of original byte size)',
            isCorrect: true,
            explanation:
              'BPC = (5.6 bits/token) / (4 chars/token) = 1.40 bits/char. Since each 7-bit ASCII character is 7/8 of a byte, BPB = 1.40 / (7/8) = 1.40 × (8/7) = 1.60 bits/byte. Because 1 raw byte is 8 bits, 1.60 / 8 = 20% compressed size.',
          },
          {
            label: 'B',
            text: 'BPC = 22.4 bits/char, BPB = 19.6 bits/byte',
            isCorrect: false,
            explanation:
              'This multiplies bits per token by characters per token instead of dividing.',
          },
          {
            label: 'C',
            text: 'BPC = 1.40 bits/char, BPB = 1.225 bits/byte',
            isCorrect: false,
            explanation:
              'This multiplies BPC by 7/8 instead of dividing by 7/8 (a full 8-bit byte contains more than one 7-bit character, so BPB must be larger than BPC for 7-bit ASCII).',
          },
          {
            label: 'D',
            text: 'BPC = 48.5, BPB = 6.06',
            isCorrect: false,
            explanation:
              'This confuses exponential perplexity (2^5.6 ≈ 48.5) with linear bit normalization.',
          },
        ],
      },
      {
        id: 'ch03-q2',
        scenarioPrompt:
          'You take a pre-trained 8B base language model with a perplexity of 6.2 on WikiText and apply Supervised Finetuning (SFT) and RLHF to turn it into a helpful coding and instruction assistant. When you re-evaluate the aligned model on WikiText, its perplexity has increased to 9.8. What is the correct first-principles interpretation?',
        options: [
          {
            label: 'A',
            text: 'The SFT/RLHF run corrupted the model weights; a more capable model must always have lower perplexity on general text.',
            isCorrect: false,
            explanation:
              'While larger base models have lower perplexity, post-training intentionally alters the output distribution away from raw corpus continuation.',
          },
          {
            label: 'B',
            text: 'Post-training teaches the model to complete tasks and follow instructions rather than mimic raw web text distributions, causing "entropy collapse" that routinely increases perplexity on general text despite better downstream task performance.',
            isCorrect: true,
            explanation:
              'As Huyen notes, post-training collapses entropy toward structured task responses; therefore, raw language modeling perplexity is no longer a reliable proxy after SFT/RLHF or aggressive quantization.',
          },
          {
            label: 'C',
            text: 'WikiText was contaminated in the SFT dataset, which always causes perplexity to spike upward.',
            isCorrect: false,
            explanation:
              'Data contamination (memorization) causes perplexity to drop abnormally low, not increase.',
          },
          {
            label: 'D',
            text: 'The tokenizer vocabulary size automatically shrank during RLHF, increasing perplexity.',
            isCorrect: false,
            explanation:
              'Smaller vocabularies decrease perplexity, and RLHF does not alter tokenizer vocabularies.',
          },
        ],
      },
      {
        id: 'ch03-q3',
        scenarioPrompt:
          'You are using GPT-4 as a pairwise AI judge to compare outputs from your newly fine-tuned Llama-3 model against GPT-4’s own outputs on 500 customer queries. You always pass GPT-4’s answer as "Option A" and Llama-3’s answer as "Option B". Which two systematic biases are simultaneously inflating GPT-4’s win rate?',
        options: [
          {
            label: 'A',
            text: 'Recency bias and lexical n-gram bias',
            isCorrect: false,
            explanation:
              'Humans exhibit recency bias (favoring the last option), whereas AI judges exhibit first-position bias.',
          },
          {
            label: 'B',
            text: 'Self-bias (GPT-4 favors its own distribution by ~10%) and First-Position Bias (AI judges systematically favor the first option presented).',
            isCorrect: true,
            explanation:
              'Because GPT-4 is judging its own outputs (self-bias) AND its outputs are always placed in slot A (first-position bias), both biases compound in the same direction.',
          },
          {
            label: 'C',
            text: 'Bradley-Terry non-transitivity and Simpson’s paradox',
            isCorrect: false,
            explanation:
              'This is a two-model head-to-head comparison, not a multi-model transitive chain or subgroup aggregation.',
          },
          {
            label: 'D',
            text: 'Substring containment bias and embedding norm distortion',
            isCorrect: false,
            explanation:
              'These apply to exact match and cosine similarity, not LLM-as-a-Judge pairwise prompts.',
          },
        ],
      },
      {
        id: 'ch03-q4',
        scenarioPrompt:
          'Why did LMSYS Chatbot Arena replace the classical Elo rating system with the Bradley-Terry model for ranking foundation models from crowdsourced pairwise battles?',
        options: [
          {
            label: 'A',
            text: 'Classical Elo requires reference ground-truth answers, whereas Bradley-Terry is reference-free.',
            isCorrect: false,
            explanation: 'Both Elo and Bradley-Terry operate purely on pairwise match outcomes.',
          },
          {
            label: 'B',
            text: 'Classical Elo updates ratings sequentially and is sensitive to the chronological order of evaluators and prompts, whereas Bradley-Terry estimates stationary skill ratings across the match history independent of match ordering.',
            isCorrect: true,
            explanation:
              'Sequential Elo overweights recent matches and fluctuates based on match ordering; Bradley-Terry solves for maximum-likelihood pairwise win probabilities across the dataset.',
          },
          {
            label: 'C',
            text: 'Bradley-Terry eliminates the O(N²) quadratic scaling of model pairs by requiring only O(1) matches.',
            isCorrect: false,
            explanation:
              'Pairwise comparison still faces O(N²) pairs across N models unless paired with active matchmaking and transitivity assumptions.',
          },
          {
            label: 'D',
            text: 'Bradley-Terry converts relative win rates directly into absolute business ticket resolution percentages.',
            isCorrect: false,
            explanation:
              'Comparative rankings (whether Elo or Bradley-Terry) only measure relative preference, never absolute task sufficiency.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ch03-fc1',
        category: 'evaluation',
        front: 'What is the mathematical relationship between Entropy H(P), Cross-Entropy H(P,Q), and KL Divergence D_KL(P||Q)?',
        back: 'H(P, Q) = H(P) + D_KL(P || Q). Cross-entropy equals the intrinsic unpredictability of the true data distribution H(P) plus the divergence penalty D_KL(P || Q) of the model’s learned distribution Q from P.',
        mentalHook: 'Cross-Entropy = Data Randomness Floor + Model Ignorance Penalty.',
      },
      {
        id: 'ch03-fc2',
        category: 'evaluation',
        front: 'Why can’t you compare raw Perplexity (PPL) across models with different tokenizers, and what metric solves this?',
        back: 'Perplexity is computed per token; a model with a large word-level vocabulary has many more possible next tokens (higher PPL) than a character-level model on the exact same text. Bits-per-Byte (BPB) solves this by normalizing cross-entropy per raw 8-bit byte of source text.',
        mentalHook: 'PPL depends on token size; BPB measures pure byte compression.',
      },
      {
        id: 'ch03-fc3',
        category: 'evaluation',
        front: 'How is pass@k defined in functional correctness evaluation for code generation?',
        back: 'For each coding problem, the model generates k candidate code samples. A problem is considered solved if AT LEAST ONE of the k samples passes all unit test assertions. pass@k is the fraction of total problems solved.',
        mentalHook: '1 winner out of k tries passes all unit tests.',
      },
      {
        id: 'ch03-fc4',
        category: 'evaluation',
        front: 'Name the three major biases of AI-as-a-Judge models and their empirical magnitudes or mechanisms.',
        back: '1. Self-bias: Models favor their own outputs (GPT-4 by +10%, Claude-v1 by +25%).\n2. First-position bias: Models favor the first option in pairwise prompts (opposite of human recency bias).\n3. Verbosity bias: Models prefer longer (~100-word) answers with factual errors over shorter (~50-word) accurate ones.',
        mentalHook: 'Narcissism (Self), Primacy (First slot), and Loquaciousness (Verbosity).',
      },
      {
        id: 'ch03-fc5',
        category: 'evaluation',
        front: 'What are the three specialized AI judge categories and a flagship example model for each?',
        back: '1. Reward Model: Scores (prompt, response) in [0,1] (e.g., Google’s 360M Cappy).\n2. Reference-Based Judge: Scores candidate against gold reference and rubric (e.g., Prometheus, BLEURT).\n3. Preference Model: Predicts which of two responses humans prefer (e.g., PandaLM, JudgeLM).',
        mentalHook: 'Cappy (Reward), Prometheus (Reference), PandaLM (Preference).',
      },
      {
        id: 'ch03-fc6',
        category: 'evaluation',
        front: 'What are the three structural limitations of Comparative Evaluation (like Chatbot Arena)?',
        back: '1. Quadratic O(N²) scaling of model pairs and reliance on questionable transitivity.\n2. Lack of standardization & crowd noise (0.55% "hello" prompts, unverified facts, no RAG context).\n3. Measures only relative preference ("B beats A 51%"), not absolute sufficiency ("Is B good enough for our ROI?").',
        mentalHook: 'Quadratic pairs, "Hello" crowd noise, and Relative-only blind spot.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ch03-feyn-1',
        conceptTitle: 'From Shannon Entropy to Perplexity and Data Contamination',
        prompt:
          'Explain to a backend software engineer—using the 2-token vs. 4-token square position language—what Entropy, Cross-Entropy, Bits-per-Byte, and Perplexity actually measure, why Perplexity increases on larger vocabularies, and how you can use Perplexity to catch benchmark cheating.',
        rubricChecklist: [
          'Contrasts the 2-token (upper/lower = 1 bit, PPL=2) vs. 4-token (quadrants = 2 bits, PPL=4) language to show entropy as information per token and perplexity as branching uncertainty ($2^H$).',
          'Defines Cross-Entropy as $H(P) + D_{\\text{KL}}(P \\parallel Q)$ and explains why BPC/BPB are needed to normalize across different tokenizers and UTF-8/ASCII encodings.',
          'Explains the three perplexity laws: lower on structured data (HTML), higher on larger vocabularies, lower with longer context.',
          'Explains how memorized training data yields abnormally low perplexity (detecting benchmark contamination), while SFT/RLHF post-training collapses entropy and raises perplexity.',
        ],
        modelExplanation:
          'Imagine describing where a dot is inside a square. If your language only has two words—"upper" and "lower"—each word needs just 1 binary bit (0 or 1), so the language’s entropy is 1 bit, and a predictor choosing the next word faces 2 options (a Perplexity of $2^1 = 2$). If you upgrade to four quadrant words ("upper-left", etc.), each word carries more specific information and takes 2 bits (Entropy = 2), meaning a predictor is torn between $2^2 = 4$ options (Perplexity = 4). That is why bigger vocabularies always have higher perplexity! When we train an LLM, its loss function is Cross-Entropy: the dataset’s true entropy plus a KL-divergence penalty for how wrong the model’s probability predictions are. Because different models slice words into tokens differently, we divide bits-per-token by bytes-per-token to get Bits-per-Byte (BPB), which tells us how tightly the model compresses raw text. Finally, because a model has near-zero uncertainty on text it memorized during pre-training, an suspiciously low perplexity score on a public benchmark proves the model cheated via data contamination.',
      },
      {
        id: 'ch03-feyn-2',
        conceptTitle: 'Designing a Bias-Resistant AI-as-a-Judge System',
        prompt:
          'Your VP of Engineering says: "Let’s just ask GPT-4 to score our models from 0.0 to 1.0 using Ragas or MLflow—AI judges agree with humans 85% of the time!" Explain why an uncalibrated AI judge will mislead the team, and lay out the exact architectural rules to make AI-as-a-Judge trustworthy.',
        rubricChecklist: [
          'Explains that an AI Judge is a mutable system (Model + Prompt + Sampling Config) and that built-in metrics across tools (MLflow 1–5, Ragas 0/1, LlamaIndex YES/NO) are unstandardized and incomparable.',
          'Identifies why continuous scales (0.0–1.0) fail for LLMs and why classification or narrow discrete rubrics (1–5) with few-shot examples are required.',
          'Details the three core biases—self-bias, first-position bias, and verbosity bias—and how to neutralize each (e.g., swapping (A,B)/(B,A) orderings, length controls, cross-family/specialized judges).',
          'Addresses cost/latency multiplication and how spot-checking or specialized judges (Cappy, Prometheus, PandaLM) keep production pipelines viable.',
        ],
        modelExplanation:
          'While GPT-4 can reach 85% agreement with humans when carefully calibrated, treating an AI judge like a plug-and-play math formula will corrupt our metrics. First, "faithfulness" is not standardized—MLflow scores it 1–5, Ragas scores statements 0 or 1, and LlamaIndex outputs YES/NO. Even changing one word in the judge prompt or letting OpenAI update a checkpoint silently changes our ruler. Second, LLMs are terrible at continuous 0.0–1.0 regression; we must frame judging as classification or a narrow 1–5 discrete scale anchored with concrete few-shot examples at temperature 0. Third, we must neutralize three systematic biases: self-bias (GPT-4 boosts itself by 10%, Claude-v1 by 25%), first-position bias (AI judges favor Option A, so we must run every pairwise test twice as (A,B) and (B,A)), and verbosity bias (judges prefer 100-word wrong answers over 50-word right answers). Finally, to avoid quadrupling our API bill and latency, we should use lightweight specialized judges like Cappy or Prometheus for 100% traffic and reserve frontier judges for a 1–5% spot-check sample.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ch03-node-entropy',
        label: 'Shannon Entropy H(P)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'The average information content (in bits or nats) carried by a token in the true data distribution P, measuring intrinsic unpredictability.',
        formulaOrRule: 'H(P) = -\\sum P(x) \\log_2 P(x)',
        whyItMatters:
          'Sets the theoretical lower bound on cross-entropy and compression for any language or dataset.',
      },
      {
        id: 'ch03-node-cross-entropy',
        label: 'Cross-Entropy H(P, Q)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The average number of bits required by model Q to predict tokens drawn from true distribution P; the standard loss function for autoregressive LMs.',
        formulaOrRule: 'H(P, Q) = H(P) + D_{KL}(P || Q)',
        whyItMatters:
          'Directly guides language model pre-training by penalizing divergence between learned and empirical token distributions.',
      },
      {
        id: 'ch03-node-bpb',
        label: 'Bits-per-Byte (BPB)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 3,
        definition:
          'Cross-entropy normalized by the average number of raw 8-bit bytes per token, removing tokenizer and character encoding differences.',
        formulaOrRule: '\\text{BPB} = \\frac{\\text{BPC}}{\\text{Bytes per Char}}',
        whyItMatters:
          'Allows fair capability and text-compression comparison across models that use completely different tokenizers.',
      },
      {
        id: 'ch03-node-perplexity',
        label: 'Perplexity (PPL)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The exponential of cross-entropy, representing the model’s effective branching uncertainty when predicting the next token.',
        formulaOrRule: '\\text{PPL}(P, Q) = 2^{H_{\\text{bits}}(P,Q)} = e^{H_{\\text{nats}}(P,Q)}',
        whyItMatters:
          'Serves as a primary proxy for base model capability, benchmark contamination detection, data deduplication, and anomaly detection.',
      },
      {
        id: 'ch03-node-pass-at-k',
        label: 'Functional Correctness (pass@k)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Execution-based evaluation measuring the fraction of problems solved when at least 1 of k generated candidates passes all unit tests.',
        formulaOrRule: '\\text{pass@1} \\le \\text{pass@3} \\le \\text{pass@10}',
        whyItMatters:
          'Provides unambiguous, ground-truth verification for code generation (HumanEval, MBPP) and Text-to-SQL without human or LLM subjectivity.',
      },
      {
        id: 'ch03-node-lexical-sim',
        label: 'Lexical Similarity (BLEU / ROUGE / Edit Distance)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 3,
        definition:
          'Surface-level text comparison counting character edit operations (fuzzy match) or overlapping n-gram sequences against reference texts.',
        whyItMatters:
          'Fast and deterministic, but fails on paraphrases and correlates poorly with functional correctness in code.',
      },
      {
        id: 'ch03-node-semantic-sim',
        label: 'Semantic Embedding Similarity',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Transforming outputs and references into dense vector representations (embeddings) and computing geometric proximity via cosine similarity.',
        formulaOrRule: '\\cos(\\theta) = \\frac{A \\cdot B}{\\|A\\| \\|B\\|}',
        whyItMatters:
          'Captures meaning across paraphrases and modalities (via CLIP/ImageBind) without requiring exhaustive lexical reference lists.',
      },
      {
        id: 'ch03-node-ai-judge',
        label: 'AI-as-a-Judge',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Using a general-purpose or specialized language model (Cappy, Prometheus, PandaLM) prompted with a rubric to score or compare AI outputs.',
        whyItMatters:
          'Enables flexible, reference-free evaluation in production across arbitrary criteria, provided self-bias, position bias, and verbosity bias are mitigated.',
      },
      {
        id: 'ch03-node-comparative-eval',
        label: 'Comparative Evaluation & Bradley-Terry Ranking',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Evaluating models head-to-head on identical prompts and aggregating pairwise preference outcomes into a global predictive rating.',
        whyItMatters:
          'Powers LMSYS Chatbot Arena and RLHF preference collection, remaining resistant to saturation even as models surpass human writing skill.',
      },
    ],
    edges: [
      {
        source: 'ch03-node-entropy',
        target: 'ch03-node-cross-entropy',
        relationship: 'prerequisite_for',
        explanation:
          'Cross-entropy builds directly on Shannon entropy by adding the KL divergence between true distribution P and model Q.',
      },
      {
        source: 'ch03-node-cross-entropy',
        target: 'ch03-node-perplexity',
        relationship: 'part_of',
        explanation:
          'Perplexity is the exact base-2 (or base-e) exponentiation of cross-entropy.',
      },
      {
        source: 'ch03-node-bpb',
        target: 'ch03-node-cross-entropy',
        relationship: 'optimizes',
        explanation:
          'Bits-per-byte normalizes cross-entropy across arbitrary tokenizers so compression efficiency can be compared across models.',
      },
      {
        source: 'ch03-node-semantic-sim',
        target: 'ch03-node-lexical-sim',
        relationship: 'mitigates',
        explanation:
          'Dense embedding cosine similarity overcomes lexical similarity’s inability to recognize synonyms and paraphrases.',
      },
      {
        source: 'ch03-node-ai-judge',
        target: 'ch03-node-pass-at-k',
        relationship: 'trades_off_with',
        explanation:
          'AI-as-a-Judge offers universal flexibility on open-ended prose but trades away the deterministic certainty of functional execution tests.',
      },
      {
        source: 'ch03-node-ai-judge',
        target: 'ch03-node-comparative-eval',
        relationship: 'evaluates',
        explanation:
          'Pairwise preference AI judges (like PandaLM or GPT-4) automate comparative matches when human arena voting is too slow or costly.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 18,
    figuresIncluded: 10,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 3 sections: Challenges of Evaluating Foundation Models, Language Modeling Metrics (Entropy, Cross-Entropy, KL Divergence, BPC, BPB, Perplexity, Sequence PPL formula, GPT-2 table, SFT/RLHF entropy collapse), Exact Evaluation (Functional Correctness pass@k, HumanEval, Reference Similarity: Exact Match, Lexical Edit Distance/n-gram/BLEU/ROUGE, Semantic Cosine Similarity, Introduction to Embeddings & CLIP), AI-as-a-Judge (Why, 3 Prompt Patterns, Tool Criteria Table, Inconsistency, Criteria Ambiguity across MLflow/Ragas/LlamaIndex, Cost/Latency, Self/First-Position/Verbosity Biases, Specialized Judges: Cappy, BLEURT, Prometheus, PandaLM), and Comparative Evaluation (Pointwise vs Comparative, Elo vs Bradley-Terry, O(N²) Scalability & Non-Transitivity, Crowd Noise, Comparative vs Absolute Performance). All 10 figures (aien_0301..aien_0310) included with Bierut analysis.',
  },
};

export const ch04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Evaluate AI Systems',
  subtitle:
    'Evaluation-Driven Development, Factual Consistency & NLI, Build-vs-Buy Economics, Benchmark Contamination Forensics, and the 3-Step Evaluation Pipeline',
  readingTimeMinutes: 55,
  sourceWordCount: 18450,
  executiveThesis:
    'A foundation model has zero intrinsic value outside the context of the specific application it powers. Building production-grade AI requires Evaluation-Driven Development: defining multi-dimensional evaluation criteria (domain capability, local vs. global factual consistency, instruction adherence, safety, and latency/cost Pareto bounds) before writing application code, navigating the 7-axis Build-vs-Buy model selection trade-off, auditing public leaderboards for benchmark correlation and data contamination, and engineering a sliced, statistically powered 3-step evaluation pipeline.',
  paradigmShift: {
    oldWay:
      'Picking whatever model tops a single public leaderboard (like MMLU), deploying a prototype into production, and hoping user engagement means the model is accurate.',
    newWay:
      'Practicing Evaluation-Driven Development: filtering candidate models by hard vs. soft attributes across 7 build-vs-buy axes, testing local entailment (NLI) and global factuality (SAFE), decontaminating benchmarks, and running component-level and turn/task-level evaluations mapped directly to business ROI.',
    whyItChanged:
      'An application that is deployed when no one knows whether it works is worse than an application never deployed—it bleeds maintenance and API costs while exposing the enterprise to silent failures, Simpson’s paradox, and contaminated benchmark illusions.',
  },
  customDiagrams: [
    {
      id: 'ch04-diag-model-selection-funnel',
      title: 'The 4-Stage Iterative Model Selection Funnel & 7-Axis Build-vs-Buy Matrix',
      subtitle:
        'Filtering candidate models from hard policy constraints down to private pipeline validation and continuous production monitoring',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bgGrad04a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <marker id="arrow04a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bgGrad04a)"/>

  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">MODEL SELECTION WORKFLOW &amp; BUILD-VS-BUY AXES</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Separate unchangeable Hard Attributes from tunable Soft Attributes across an iterative 4-phase funnel.</text>

  <!-- Left Side: 4-Stage Funnel -->
  <rect x="28" y="68" width="415" height="72" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="44" y="90" fill="#fb7185" font-size="11" font-weight="700">STAGE 1: FILTER BY HARD ATTRIBUTES (BUILD VS. BUY)</text>
  <text x="44" y="108" fill="#e2e8f0" font-size="10">Eliminate models violating non-negotiable constraints: Data Privacy, IP/Lineage,</text>
  <text x="44" y="124" fill="#94a3b8" font-size="10">Commercial License (e.g. Llama 700M MAU / distillation ban), On-Device need.</text>

  <path d="M 235 140 L 235 156" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow04a)"/>

  <rect x="48" y="160" width="375" height="68" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
  <text x="64" y="181" fill="#fbbf24" font-size="11" font-weight="700">STAGE 2: SHORTLIST VIA PUBLIC BENCHMARKS &amp; LEADERBOARDS</text>
  <text x="64" y="199" fill="#e2e8f0" font-size="10">Select uncorrelated task benchmarks (IFEval, MATH, TruthfulQA), check for</text>
  <text x="64" y="214" fill="#94a3b8" font-size="10">n-gram/perplexity contamination, and map Cost–Latency–Quality Pareto frontier.</text>

  <path d="M 235 228 L 235 244" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow04a)"/>

  <rect x="68" y="248" width="335" height="68" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
  <text x="84" y="269" fill="#38bdf8" font-size="11" font-weight="700">STAGE 3: EVALUATE ON PRIVATE PIPELINE (SOFT ATTRIBUTES)</text>
  <text x="84" y="287" fill="#e2e8f0" font-size="10">Run experiments (prompting, RAG, finetuning) on internal sliced datasets</text>
  <text x="84" y="302" fill="#94a3b8" font-size="10">with rubric-calibrated evaluators tied to business usefulness thresholds.</text>

  <path d="M 235 316 L 235 332" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow04a)"/>

  <rect x="88" y="336" width="295" height="64" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
  <text x="104" y="357" fill="#34d399" font-size="11" font-weight="700">STAGE 4: CONTINUOUS PRODUCTION MONITORING</text>
  <text x="104" y="375" fill="#e2e8f0" font-size="10">Detect drift, collect user feedback, and loop back to Stage 1</text>
  <text x="104" y="390" fill="#94a3b8" font-size="10">as traffic scale shifts API vs. Self-Hosting unit economics.</text>

  <!-- Feedback Loop Arrow -->
  <path d="M 88 368 L 16 368 L 16 104 L 26 104" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrow04a)"/>

  <!-- Right Side: 7 Axes of Build vs Buy -->
  <rect x="468" y="68" width="306" height="332" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
  <text x="484" y="92" fill="#f8fafc" font-size="12" font-weight="700">THE 7 AXES OF BUILD (HOST) VS. BUY (API)</text>
  
  <text x="484" y="118" fill="#38bdf8" font-size="10.5" font-weight="700">1. Data Privacy:</text>
  <text x="484" y="133" fill="#cbd5e1" font-size="9.5">Strict PII/IP (Samsung leak, StarCoder 8% memorization) → Host</text>

  <text x="484" y="156" fill="#38bdf8" font-size="10.5" font-weight="700">2. Data Lineage &amp; Copyright:</text>
  <text x="484" y="171" fill="#cbd5e1" font-size="9.5">Open-data auditability vs. Commercial vendor IP indemnity</text>

  <text x="484" y="194" fill="#38bdf8" font-size="10.5" font-weight="700">3. Frontier Performance:</text>
  <text x="484" y="209" fill="#cbd5e1" font-size="9.5">Gap narrowing on MMLU, but absolute SOTA stays behind APIs</text>

  <text x="484" y="232" fill="#38bdf8" font-size="10.5" font-weight="700">4. Functionality &amp; Internals:</text>
  <text x="484" y="247" fill="#cbd5e1" font-size="9.5">APIs give tool-calling/scale; Self-hosting exposes full logprobs</text>

  <text x="484" y="270" fill="#38bdf8" font-size="10.5" font-weight="700">5. API Cost vs. Engineering Cost:</text>
  <text x="484" y="285" fill="#cbd5e1" font-size="9.5">Linear $/token API fees vs. fixed GPU cluster + ML eng payroll</text>

  <text x="484" y="308" fill="#38bdf8" font-size="10.5" font-weight="700">6. Control, Pinning &amp; Guardrails:</text>
  <text x="484" y="323" fill="#cbd5e1" font-size="9.5">Freeze open weights vs. silent API drift &amp; over-censoring refusals</text>

  <text x="484" y="346" fill="#38bdf8" font-size="10.5" font-weight="700">7. On-Device / Edge Deployment:</text>
  <text x="484" y="361" fill="#cbd5e1" font-size="9.5">Offline/local privacy strictly requires compact open-weight models</text>

  <rect x="484" y="372" width="274" height="20" rx="4" fill="#1e293b"/>
  <text x="492" y="385" fill="#fbbf24" font-size="9.5" font-weight="600">Note: Open Weight (weights only) ≠ Open Model (weights + data)</text>
</svg>`,
      bierutCaption:
        'Model selection is not a one-time leaderboard lookup; it is an iterative funnel that prunes candidate models by hard architectural/legal constraints before testing soft performance attributes on private pipelines.',
      annotations: [
        {
          step: '1',
          label: 'Hard vs. Soft Attribute Separation',
          explanation:
            'Hard attributes (licensing, data residency, on-device footprint, access to logprobs) cannot be changed by engineering effort and immediately eliminate disqualified models.',
        },
        {
          step: '2',
          label: 'The 7-Axis Build-vs-Buy Trade-off',
          explanation:
            'Evaluates commercial APIs against self-hosted open-weight models across privacy, copyright indemnity, frontier capability, logprob/finetuning access, unit economics at scale, version freezing, and edge deployment.',
        },
        {
          step: '3',
          label: 'Private Pipeline Validation',
          explanation:
            'Public benchmarks only narrow the shortlist; final selection requires evaluating soft attributes (accuracy, factual consistency, latency) on your own domain data.',
        },
      ],
    },
    {
      id: 'ch04-diag-eval-pipeline',
      title: 'The 3-Step Production Evaluation Pipeline & Statistical Sizing Architecture',
      subtitle:
        'Evaluating every intermediate component, turn, and task against business-mapped rubrics across sliced, statistically powered datasets',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bgGrad04b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <marker id="arrow04b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bgGrad04b)"/>

  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">DESIGNING A RELIABLE 3-STEP EVALUATION PIPELINE</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Combine granular system observability, business-anchored rubrics, and sliced statistical validation.</text>

  <!-- Step 1 Column -->
  <rect x="24" y="68" width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="38" y="92" fill="#38bdf8" font-size="11.5" font-weight="700">STEP 1: EVALUATE ALL COMPONENTS</text>
  
  <rect x="38" y="106" width="212" height="54" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="48" y="123" fill="#f8fafc" font-size="10.5" font-weight="600">A. Intermediate Component Level</text>
  <text x="48" y="139" fill="#94a3b8" font-size="9.5">Ex: Step 1 PDF→Text (Similarity)</text>
  <text x="48" y="152" fill="#94a3b8" font-size="9.5">+ Step 2 Text→Employer (Accuracy)</text>

  <rect x="38" y="168" width="212" height="54" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="48" y="185" fill="#f8fafc" font-size="10.5" font-weight="600">B. Per-Turn Evaluation</text>
  <text x="48" y="201" fill="#94a3b8" font-size="9.5">Quality, local entailment (NLI), and</text>
  <text x="48" y="214" fill="#94a3b8" font-size="9.5">format adherence of each message.</text>

  <rect x="38" y="230" width="212" height="58" rx="6" fill="#0f172a" stroke="#0284c7"/>
  <text x="48" y="247" fill="#7dd3fc" font-size="10.5" font-weight="600">C. Per-Task Evaluation (North Star)</text>
  <text x="48" y="263" fill="#cbd5e1" font-size="9.5">Did the user solve the bug? How many</text>
  <text x="48" y="276" fill="#cbd5e1" font-size="9.5">turns did it take (2 vs. 20 turns)?</text>

  <path d="M 264 185 L 280 185" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow04b)"/>

  <!-- Step 2 Column -->
  <rect x="284" y="68" width="236" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="298" y="92" fill="#34d399" font-size="11.5" font-weight="700">STEP 2: CREATE EVAL GUIDELINE</text>

  <rect x="298" y="106" width="208" height="54" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="308" y="123" fill="#f8fafc" font-size="10.5" font-weight="600">A. In-Scope &amp; Out-of-Scope Rules</text>
  <text x="308" y="139" fill="#94a3b8" font-size="9.5">Define what "good" means (LinkedIn gap</text>
  <text x="308" y="152" fill="#94a3b8" font-size="9.5">coaching) + refusal rules for off-topic.</text>

  <rect x="298" y="168" width="208" height="54" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="308" y="185" fill="#f8fafc" font-size="10.5" font-weight="600">B. Unambiguous Rubric + Examples</text>
  <text x="308" y="201" fill="#94a3b8" font-size="9.5">Binary (0/1) or Ternary (-1/0/1 NLI)</text>
  <text x="308" y="214" fill="#94a3b8" font-size="9.5">validated across human annotators.</text>

  <rect x="298" y="230" width="208" height="58" rx="6" fill="#0f172a" stroke="#059669"/>
  <text x="308" y="247" fill="#6ee7b7" font-size="10.5" font-weight="600">C. Tie to Business ROI Thresholds</text>
  <text x="308" y="263" fill="#cbd5e1" font-size="9.5">80% Factuality → 30% Ticket Automation</text>
  <text x="308" y="276" fill="#cbd5e1" font-size="9.5">90% → 50% | 98% → 90% (&lt;50% useless)</text>

  <path d="M 520 185 L 536 185" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow04b)"/>

  <!-- Step 3 Column -->
  <rect x="540" y="68" width="236" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="554" y="92" fill="#c084fc" font-size="11.5" font-weight="700">STEP 3: METHODS, SLICES &amp; SIZE</text>

  <rect x="554" y="106" width="208" height="54" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="564" y="123" fill="#f8fafc" font-size="10.5" font-weight="600">A. Hybrid Cascade + Human Audit</text>
  <text x="564" y="139" fill="#94a3b8" font-size="9.5">100% cheap classifier + logprobs,</text>
  <text x="564" y="152" fill="#94a3b8" font-size="9.5">1% frontier AI Judge, 500/day human.</text>

  <rect x="554" y="168" width="208" height="54" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="564" y="185" fill="#f8fafc" font-size="10.5" font-weight="600">B. Data Slicing (Simpson’s Paradox)</text>
  <text x="564" y="201" fill="#94a3b8" font-size="9.5">Separate slices: Production, Long inputs,</text>
  <text x="564" y="214" fill="#94a3b8" font-size="9.5">Typos, Out-of-scope, Paid vs. Free tiers.</text>

  <rect x="554" y="230" width="208" height="58" rx="6" fill="#0f172a" stroke="#9333ea"/>
  <text x="564" y="247" fill="#d8b4fe" font-size="10.5" font-weight="600">C. Bootstrap &amp; 95% Confidence Size</text>
  <text x="564" y="263" fill="#cbd5e1" font-size="9.5">30% diff → ~10 samples | 10% → ~100</text>
  <text x="564" y="276" fill="#cbd5e1" font-size="9.5">3% diff → ~1,000 | 1% diff → ~10,000</text>

  <!-- Bottom Meta-Audit Bar -->
  <rect x="24" y="318" width="752" height="82" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="40" y="340" fill="#fbbf24" font-size="11.5" font-weight="700">META-EVALUATION: EVALUATE YOUR EVALUATION PIPELINE &amp; TRACK EXPERIMENTS</text>
  <text x="40" y="360" fill="#e2e8f0" font-size="10">1. Signal Fidelity: Do higher eval scores drive higher business conversion?   2. Variance Check: Run bootstrap resampling with replacement.</text>
  <text x="40" y="378" fill="#e2e8f0" font-size="10">3. Metric Correlation: Drop redundant metrics (r ≈ 1.0).   4. Experiment Tracking: Log dataset version, rubric, judge model, and temp=0.</text>
</svg>`,
      bierutCaption:
        'A trustworthy evaluation pipeline isolates failures at the component and turn level, links technical scores to explicit business automation thresholds, and prevents Simpson’s paradox through slice-based evaluation.',
      annotations: [
        {
          step: '1',
          label: 'Component, Turn, and Task Granularity',
          explanation:
            'Evaluating only the end-to-end output hides whether an error occurred in PDF OCR extraction or LLM entity parsing. Evaluating both single turns and multi-turn task completion tracks true user value.',
        },
        {
          step: '2',
          label: 'Business Metric Mapping',
          explanation:
            'Translates abstract accuracy or factual consistency percentages (80% vs. 90% vs. 98%) into concrete business decisions (30% vs. 50% vs. 90% ticket automation) and establishes a minimum usefulness floor.',
        },
        {
          step: '3',
          label: 'Slicing & The 3x-to-10x Sample Size Rule',
          explanation:
            'Slices data to prevent Simpson’s paradox and sizes evaluation sets according to statistical power: every 3x reduction in the performance gap you want to detect requires a 10x larger sample size.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ch04-mm-eval-driven-dev',
      name: 'Evaluation-Driven Development (EDD)',
      tagline:
        'Define how you will measure success—and how technical scores map to business ROI—before writing a single line of application code.',
      naiveIntuition:
        'Deploy the AI feature first, see if users click on it, and figure out evaluation metrics later if someone complains.',
      firstPrinciplesReality:
        'An application that is deployed when no one knows if it works is worse than an undeployed one: it incurs ongoing compute and maintenance costs, risks catastrophic brand damage, and is politically painful to shut down. Focusing only on easily measured tasks (the "streetlamp effect") also blinds teams unless they invest in systematic evaluation pipelines.',
      howToApply:
        'Before building, write down your evaluation rubric across four buckets (Domain Capability, Generation Quality, Instruction Following, Cost/Latency), establish your minimum usefulness threshold (e.g., 50% factual consistency), and map metric tiers to business automation targets.',
    },
    {
      id: 'ch04-mm-local-vs-global-factuality',
      name: 'The Local Entailment vs. Global Truth Boundary',
      tagline:
        'Verifying whether an output matches a provided context (NLI entailment) is a closed classification problem; verifying whether it matches world truth is an open search problem.',
      naiveIntuition:
        'Hallucination detection is a single uniform problem that can be solved by asking a judge "Is this true?"',
      firstPrinciplesReality:
        'Under **Local Factual Consistency** (summarization, RAG, policy bots), if the context says "the sky is purple," then outputting "the sky is blue" is factually inconsistent! This reduces to Natural Language Inference (Entailment, Contradiction, Neutral) solvable by a 184M parameter DeBERTa classifier. **Global Factual Consistency** requires decomposing claims, rewriting pronouns to be self-contained, querying external search indexes (like DeepMind’s SAFE), and weighing source credibility.',
      howToApply:
        'Whenever possible, ground tasks in explicit retrieved context so factual verification can run as fast, cheap NLI entailment rather than open-web fact-checking.',
    },
    {
      id: 'ch04-mm-hard-soft-pareto',
      name: 'Hard-Constraint Pruning before Soft-Attribute Pareto Optimization',
      tagline:
        'Never waste compute benchmarking a model whose license, privacy posture, or latency floor disqualifies it.',
      naiveIntuition:
        'Test the top 10 models from the Hugging Face Open LLM Leaderboard on your prompts and pick the one with the highest average accuracy.',
      firstPrinciplesReality:
        'Models have **hard attributes** (cannot be changed: data privacy residency, IP indemnity, Llama’s 700M MAU or synthetic distillation restrictions, on-device RAM limits) and **soft attributes** (can be improved via prompting/RAG/finetuning: accuracy, formatting, toxicity). Once hard constraints prune the candidate pool, remaining models must be selected along a multi-objective **Pareto frontier** of Quality, Cost, and Latency (TTFT/TPOT).',
      howToApply:
        'Filter by hard organizational policies and non-negotiable latency/scale SLAs first, then plot surviving candidates on a cost-vs-quality Pareto curve using uncorrelated, decontaminated benchmarks.',
    },
  ],
  deepSections: [
    {
      id: 'ch04-sec-criteria-taxonomy',
      sectionNumber: '4.1',
      title: 'Evaluation-Driven Development & The Four Criteria Buckets',
      subtitle:
        'Domain-specific capability (MCQs vs. efficiency), Generation quality (Local NLI vs. Global SAFE factuality, TruthfulQA, Safety/Political bias), Instruction following (IFEval, INFOBench, Roleplaying), and Cost/Latency Pareto optimization',
      coreMechanism: `Deploying an AI system without knowing whether it works is worse than never deploying it at all (as illustrated by a car dealership ML team whose pricing model ran for a year without anyone knowing if its valuations were accurate). **Evaluation-Driven Development (EDD)**—inspired by test-driven development (TDD)—mandates defining evaluation criteria before building. Every AI application's evaluation criteria fall into four structural buckets:

**1. Domain-Specific Capability**: Measures whether the model possesses the underlying knowledge and reasoning required by the task (e.g., Python coding, Latin translation, legal contract comprehension, SQL generation). Coding is evaluated via functional correctness, alongside **efficiency** (runtime and memory usage, as measured in **BIRD-SQL**) and **readability** (evaluated via AI judges). Non-coding domain knowledge is overwhelmingly evaluated via close-ended **Multiple-Choice Questions (MCQs)**—as of April 2024, **75% of tasks in EleutherAI's \`lm-evaluation-harness\` are MCQs** (including MMLU, AGIEval, and ARC-C). While MCQs are easy to grade against a random baseline (25% for 4 options), they suffer from extreme **prompt sensitivity** (Alzahrani et al., 2024 showed that adding a single extra space or the word \`"Choices:"\` causes models to flip their answers) and test *classification* (distinguishing good from bad options) rather than *generation*.

**2. Generation Capability (Factual Consistency & Safety)**: In early 2010s NLG, **fluency** and **coherence** were primary metrics; since GPT-2 (2019), frontier models generate fluent prose by default, shifting the focus to **Factual Consistency** and **Safety**.
- **Local vs. Global Factual Consistency**: *Local factual consistency* verifies an output strictly against an explicitly provided context (critical for summarization, customer support policies, and RAG): if the context states "the sky is purple," outputting "the sky is blue" is factually inconsistent! *Global factual consistency* verifies claims against open world knowledge, which is complicated by disputed claims, web misinformation, the *absence of evidence fallacy*, and model blind spots (Wan et al., 2024 found LLMs judge evidence by query relevance while ignoring scientific citations or neutral tone). Models hallucinate most heavily on **niche knowledge** (e.g., Vietnamese Mathematical Olympiad vs. International Mathematical Olympiad) and **non-existent premises** ("What did X say about Y?" when X never mentioned Y).
- **Factuality Verification Methods**: Beyond basic AI judge prompts, teams use:
  1. **Self-Verification (SelfCheckGPT, Manakul et al., 2023)**: Generates $N$ additional stochastic responses for the same prompt and measures whether they agree with candidate response $R$; disagreement signals hallucination (accurate, but $N\\times$ more expensive).
  2. **Knowledge-Augmented Verification (SAFE — Search-Augmented Factuality Evaluator, Google DeepMind, Wei et al., 2024)**: A 4-step pipeline (Figure 4-1) that (a) decomposes a long-form response into atomic statements, (b) revises each statement to be self-contained (resolving pronouns like \`"It"\`), (c) generates Google Search fact-checking queries, and (d) uses an AI judge to verify consistency with search results.
  3. **Textual Entailment / Natural Language Inference (NLI)**: Frames local factual consistency as a 3-class classification problem given \`(premise = context, hypothesis = output)\`: **Entailment** (consistent, e.g., Premise: *"Mary likes all fruits"* $\\to$ Hypothesis: *"Mary likes apples"*), **Contradiction** (inconsistent, *"Mary hates oranges"*), or **Neutral** (unverifiable, *"Mary likes chickens"*). Compact specialized NLI classifiers like \`DeBERTa-v3-base-mnli-fever-anli\` (184M parameters, trained on 764,000 pairs) verify local consistency faster and cheaper than LLM judges.
  4. **TruthfulQA (Lin et al., 2022)**: 817 questions across 38 categories designed to trigger human misconceptions (e.g., *"Can coughing stop a heart attack?"*, *"What happens if you crack your knuckles?"*), graded by a fine-tuned \`GPT-judge\` (90–96% agreement with humans; human expert baseline is 94%, Figure 4-2).
- **Safety & Ideological Bias**: Encompasses inappropriate language, harmful tutorials, hate speech, violence, occupational/gender stereotypes, and **political/ideological bias** (Feng et al., 2023 showed GPT-4 leans left-libertarian while Llama leans more authoritarian, Figure 4-3). Measured via specialized fast classifiers (Perspective API, Meta Llama Guard, OpenAI moderation endpoint) and benchmarks like **RealToxicityPrompts** (100K prompts) and **BOLD**.

**3. Instruction-Following Capability & Roleplaying**: Separates *knowing* domain facts from *obeying constraints* (e.g., a model that understands tweet sentiment but outputs \`HAPPY\`/\`ANGRY\` instead of the requested \`POSITIVE\`/\`NEGATIVE\`/\`NEUTRAL\`, or Ello's kids reading app requiring stories using only words $\\le 4$ letters).
- **IFEval (Zhou et al., 2023)**: Tests **25 types of automatically verifiable formatting constraints** across 4 groups (Keywords, Language, Length constraints, Detectable content/format like JSON, bullet counts, or \`<<title>>\`) using deterministic code checks—zero AI judge required.
- **INFOBench (Qin et al., 2024)**: Evaluates broader content, linguistic (*"use Victorian English"*), and style rules by decomposing each instruction into decomposed **Yes/No criteria questions** (e.g., 2 out of 3 criteria met = 2/3 score), graded reliably by GPT-4.
- **Roleplaying**: The 8th most common use case in LMSYS's 1M conversations (Figure 4-4). Evaluated via **RoleLLM** and **CharacterEval** along two axes: (a) **Speaking style & catchphrases**, and (b) **Role-specific knowledge & "negative knowledge" boundaries** (e.g., an AI roleplaying Jackie Chan must not speak Vietnamese if Jackie Chan doesn't know Vietnamese, and a game NPC must not leak plot spoilers).

**4. Cost and Latency (Pareto Optimization)**: Balances model quality against **Time to First Token (TTFT)**, **Time per Output Token**, **Total Query Latency** (e.g., P90 TTFT < 200ms), throughput (**TPM — Tokens Per Minute**), and token vs. GPU compute cost. Because open-weight models are sized to max out standard GPU VRAM tiers (16GB, 24GB, 48GB, 80GB—explaining why 7B and 65B/70B parameter sizes dominate), self-hosting has fixed cluster costs that become dramatically cheaper per token at high utilization (1B tokens/day vs. 1M tokens/day), whereas commercial APIs charge linear per-token fees.`,
      stepByStepFlow: [
        {
          step: '1',
          title: 'Decompose into Atomic Claims (SAFE Step 1)',
          detail:
            'Use an LLM to split a long-form generated paragraph into individual, fine-grained factual statements.',
        },
        {
          step: '2',
          title: 'Contextualize into Self-Contained Statements (SAFE Step 2)',
          detail:
            'Rewrite ambiguous pronouns or relative references (e.g., replacing "It opened in the 20th century" with the explicit entity name) so each claim stands alone.',
        },
        {
          step: '3',
          title: 'Generate Search Queries & Retrieve Evidence (SAFE Step 3)',
          detail:
            'Propose targeted fact-checking queries for each atomic statement and execute them against a search API (or internal RAG index).',
        },
        {
          step: '4',
          title: 'Classify Entailment / Contradiction (SAFE Step 4 / NLI)',
          detail:
            'Evaluate whether retrieved evidence entails, contradicts, or is neutral toward each atomic statement to compute the response’s factual consistency score.',
        },
      ],
      keyTakeaways: [
        'Local factual consistency checks adherence to provided context (solvable via 184M-parameter DeBERTa NLI entailment classifiers), whereas global factual consistency checks world knowledge (via search-augmented pipelines like SAFE).',
        '75% of tasks in lm-evaluation-harness use MCQs, which test classification rather than open-ended generation and flip answers on minor whitespace changes.',
        'IFEval verifies 25 formatting instruction types deterministically via code, while INFOBench uses decomposed Yes/No rubric questions for style and content constraints.',
        'Roleplaying evaluation requires checking both persona style and "negative knowledge" (ensuring the model does not know facts outside its character).',
      ],
      commonPitfalls: [
        'Conflating domain capability with instruction-following capability when a model fails a complex prompt (e.g., failing to write a Vietnamese lục bát poem).',
        'Evaluating RAG or summarization systems against global world knowledge instead of local context entailment.',
        'Treating all latency improvements as equal instead of separating hard P90 deal-breakers from nice-to-have speedups on the Pareto frontier.',
      ],
      figures: [
        {
          file: 'aien_0401.png',
          originalLabel:
            'Figure 4-1. SAFE breaks an output into individual facts and then uses a search engine to verify each fact. Image adapted from Wei et al. (2024).',
          bierutTitle:
            'Search-Augmented Factuality Evaluation (SAFE) Turns Long-Form Hallucination Checks into Atomic Web Queries',
          editorialAnalysis:
            'DeepMind’s SAFE architecture illustrates why global fact-checking cannot be done in a single holistic pass. A paragraph response is first split into discrete facts, rewritten to remove coreference ambiguity ("It opened..." → "[Entity] opened..."), converted into search engine queries, and adjudicated claim-by-claim against retrieved search snippets.',
          keyTakeaways: [
            'Decomposing long responses into self-contained atomic claims is essential for accurate factual verification.',
          ],
        },
        {
          file: 'aien_0402.png',
          originalLabel:
            'Figure 4-2. The performance of different models on TruthfulQA, as shown in GPT-4’s technical report.',
          bierutTitle:
            'Pre-Trained Base Models Mimic Human Misconceptions Until Post-Training Alignment Intervenes',
          editorialAnalysis:
            'Comparing model progression from GPT-3 (175B) and Anthropic-LM to RLHF-aligned GPT-4 on TruthfulQA shows that unaligned or early models score below 30–40% because they parrot common internet myths (like cracking knuckles causing arthritis), whereas RLHF-trained GPT-4 climbs toward ~60% (still trailing the 94% human expert baseline).',
          keyTakeaways: [
            'Scaling pre-training alone does not solve truthfulness on common misconceptions; post-training alignment is required.',
          ],
        },
        {
          file: 'aien_0403.png',
          originalLabel:
            'Figure 4-3. Political and economic leanings of different foundation models (Feng et al., 2023). The image is licensed under CC BY 4.0.',
          bierutTitle:
            'Every Foundation Model Encodes Distinct Political and Economic Ideological Biases',
          editorialAnalysis:
            'Mapped on a 2D Political Compass (Left vs. Right economic axis, Libertarian vs. Authoritarian social axis), different model families cluster in markedly different quadrants: OpenAI’s GPT-4 and ChatGPT sit in the Left-Libertarian quadrant, whereas Meta’s LLaMA and RoBERTa variants skew toward the Authoritarian-Right/Center quadrants. Pre-training corpora and RLHF annotator demographics directly shape a model’s worldview.',
          keyTakeaways: [
            'Models are never ideologically neutral; safety evaluation must audit political and cultural leanings relevant to your users.',
          ],
        },
        {
          file: 'aien_0404.png',
          originalLabel:
            'Figure 4-4. Top 10 most common instruction types in LMSYS’s one-million-conversations dataset.',
          bierutTitle:
            'Real-World User Traffic Spans Coding, Brainstorming, Factual QA, and Persona Roleplaying',
          editorialAnalysis:
            'Analyzing 1 million real conversations from Vicuna and Chatbot Arena reveals that alongside coding, open QA, and brainstorming, Roleplaying ranks as the 8th most frequent instruction category overall—underscoring why persona consistency and negative-knowledge evaluation matter in consumer and gaming AI.',
          keyTakeaways: [
            'Public academic benchmarks rarely test roleplaying or creative brainstorming despite their high share of real user traffic.',
          ],
        },
      ],
    },
    {
      id: 'ch04-sec-model-selection-build-buy',
      sectionNumber: '4.2',
      title: 'Model Selection Workflow & The 7-Axis Build-vs-Buy Decision',
      subtitle:
        'Hard vs. soft attributes, the 4-step iterative selection workflow, Open-Weight vs. Open-Model licensing traps, and Commercial APIs vs. Self-Hosted inference across 7 engineering axes',
      coreMechanism: `Model selection is not about finding the single "best" model in the world; it is about finding the best model along the cost–quality Pareto frontier for your specific application—a decision you will revisit repeatedly as you move from prompt engineering (starting with the strongest frontier model to prove feasibility, then stepping down to cheaper models) to finetuning (starting with a small model to debug training code, then scaling up to fill your GPU VRAM).

The **Model Selection Workflow** distinguishes **Hard Attributes** (constraints that are impossible or impractical for you to change, such as model license, training data lineage, strict data residency, or on-device memory footprint) from **Soft Attributes** (qualities you can improve via engineering, such as task accuracy—which Huyen notes can jump from 20% to 70% simply by decomposing a prompt into two steps—or toxicity and factual consistency). Note that an attribute like *latency* is a **soft attribute** if you self-host the weights (you can quantize or optimize the inference engine), but a **hard attribute** if you consume a third-party API. The workflow executes in four iterative stages (Figure 4-5):
1. **Filter out models whose hard attributes violate your policies** (drastically shrinking the candidate pool).
2. **Shortlist promising models using public benchmarks and leaderboards**, balancing quality, cost, and latency.
3. **Run private experiments with your own evaluation pipeline** to select the optimal model.
4. **Continually monitor the model in production** to catch drift and gather feedback.

At the heart of Stage 1 is the **Build vs. Buy Decision**—meaning **Self-Hosting an Open-Source Model vs. Consuming a Commercial Model API** (or using a third-party hosted API on top of open weights, Figure 4-6). First, engineers must clarify terminology and licensing:
- **Open Weight vs. Open Model**: The vast majority of "open-source" models are **open weight only** (weights are downloadable, but training data is kept secret to avoid copyright lawsuits). True **open models** release both weights and training data, enabling data auditing and retraining from scratch.
- **Licensing Traps**: Beyond permissive licenses like Apache 2.0 (Mistral-7B, Google Gemma) or MIT, many models use custom bespoke licenses (Llama 2/3 Community License, BigCode Open RAIL-M). Every team must ask three legal questions: (1) *Does it allow commercial use?* (Llama 1 did not); (2) *Are there scale restrictions?* (Llama 2/3 require a special license above **700 million monthly active users**); (3) *Does it allow using model outputs for synthetic data training / model distillation?* (Llama licenses historically restricted training non-Llama models on outputs; furthermore, if Open-Weight Model X has an Apache 2.0 license but was trained on ChatGPT outputs in violation of OpenAI's Terms of Service, Model X has tainted data lineage).

To decide between Commercial APIs and Self-Hosting, evaluate across **Seven Axes**:
1. **Data Privacy**: Strict enterprises cannot send confidential data externally (e.g., Samsung engineers leaking proprietary code to ChatGPT in 2023, or Zoom's August 2023 TOS backlash over training on user data). Furthermore, models memorize training data—**Hugging Face's StarCoder memorized 8% of its training set**, creating an extraction leak risk.
2. **Data Lineage & Copyright**: While USPTO (2024) requires significant human contribution for patentability and movie/game studios fear IP contamination, lineage cuts both ways: some firms require fully open-data models to audit training sets, while many enterprises prefer **commercial APIs** because Microsoft/OpenAI/Google have deep legal pockets and offer **contractual copyright indemnification** (whereas copyright plaintiffs will sue the enterprise user of an unindemnified open-source model).
3. **Performance**: Although the MMLU gap between open-weight and proprietary models has narrowed (Figure 4-7), economic incentives ensure commercial labs keep their absolute strongest frontier models behind paywalled APIs and benefit from continuous live user feedback loops that open-source weight drops never see.
4. **Functionality**: Commercial APIs provide turnkey scalability, function calling, structured JSON outputs, and safety guardrails out of the box. Conversely, commercial APIs often **hide or restrict \`logprobs\`** (to prevent model distillation/stealing) and limit finetuning methods, whereas self-hosting grants full access to \`logprobs\`, intermediate embeddings, and arbitrary full/partial finetuning.
5. **API Cost vs. Engineering Cost**: APIs charge per token (expensive at massive scale), whereas self-hosting requires scarce ML infrastructure talent to optimize inference, manage GPU clusters, and maintain SLAs. Standardizing on an OpenAI-compatible API schema lets teams swap between hosted APIs and self-hosted engines seamlessly.
6. **Control, Access & Transparency**: A 2024 a16z enterprise survey showed **Control (56%+)** and **Customizability** are the top reasons enterprises adopt open-source models (Figure 4-8). Commercial APIs enforce rate limits, can go out of business or be banned by regulators (Italy briefly banning OpenAI in 2023), change model behavior silently across versions, and apply **over-censoring safety guardrails** (e.g., Convai's 3D game NPCs kept saying *"As an AI model, I don't have physical abilities"* when asked to pick up virtual objects, forcing Convai to switch to fine-tuned open weights). Self-hosting lets you **freeze exact model weights** indefinitely.
7. **On-Device Deployment**: Running offline or on edge hardware (phones, vehicles, local privacy assistants) strictly requires self-hosted compact models.`,
      keyTakeaways: [
        'Separate unchangeable Hard Attributes (privacy, license, on-device, logprobs access) from tunable Soft Attributes (task accuracy, formatting) at the start of model selection.',
        'Open-weight models release parameters without training data; always audit licenses for commercial use, active user caps (Llama 700M MAU), and synthetic data distillation rights.',
        'Commercial APIs win on frontier capability, turnkey tool-calling, and contractual copyright indemnification; self-hosting wins on data privacy, full logprobs/internals access, weight freezing, and avoiding over-zealous refusal filters.',
      ],
      commonPitfalls: [
        'Assuming an Apache-2.0 fine-tuned community model is legally clean without checking if it was trained on proprietary API outputs in violation of upstream Terms of Service.',
        'Switching from a commercial API to self-hosting solely to save token fees without budgeting for ML infrastructure engineering salaries and GPU cluster utilization.',
        'Building a regulated or persona-driven product on an unpinned commercial API endpoint that silently updates its refusal behavior.',
      ],
      figures: [
        {
          file: 'aien_0405.png',
          originalLabel:
            'Figure 4-5. An overview of the evaluation workflow to evaluate models for your application.',
          bierutTitle:
            'The Four-Stage Iterative Funnel Prunes Models from Hard Policy Filters to Live Production Monitoring',
          editorialAnalysis:
            'The workflow progresses left-to-right across four boxes—(1) Filter out models by hard attributes, (2) Shortlist with public benchmarks/leaderboards, (3) Experiment with your private evaluation pipeline, and (4) Monitor in production—with backward feedback arrows linking later stages back to earlier ones. When private evaluation (Stage 3) proves no open-weight model hits the quality bar, the team loops back to Stage 1 to re-evaluate commercial APIs.',
          keyTakeaways: [
            'Model selection is an iterative closed loop, not a one-way waterfall.',
          ],
        },
        {
          file: 'aien_0406.png',
          originalLabel:
            'Figure 4-6. An inference service runs the model and provides an interface for users to access the model.',
          bierutTitle:
            'Decoupling the Model Weights from the Inference Service and Model API Interface',
          editorialAnalysis:
            'Shows how the User interacts with a Model API gateway, which routes queries to an Inference Service hosting the underlying Model. This architectural separation explains why the exact same open-weight model (or even GPT-4 across OpenAI vs. Azure) can exhibit different latency, quantization accuracy, and throughput depending on which inference service provider hosts it.',
          keyTakeaways: [
            'Switching API providers for the same underlying model requires re-running evaluation tests due to inference optimization differences.',
          ],
        },
        {
          file: 'aien_0407.png',
          originalLabel:
            'Figure 4-7. The gap between open source models and proprietary models is decreasing on the MMLU benchmark. Image by Maxime Labonne.',
          bierutTitle:
            'Open-Weight Models Rapidly Close the Historical MMLU Gap Behind Frontier Proprietary Models',
          editorialAnalysis:
            'Plotting MMLU 5-shot accuracy from 2022 to 2024 shows open-weight models (Llama 2, Mistral, Mixtral, Llama 3 70B) climbing steeply toward the upper trajectory defined by GPT-4 and Claude 3 Opus. While incentives keep the absolute bleeding edge proprietary, open-weight models rapidly become "good enough" for an expanding share of enterprise tasks.',
          keyTakeaways: [
            'As open-weight models cross the sufficiency threshold for standard tasks, the Build-vs-Buy decision hinges increasingly on privacy, control, and unit economics.',
          ],
        },
        {
          file: 'aien_0408.png',
          originalLabel:
            'Figure 4-8. Why enterprises care about open source models. Image from the 2024 study by a16z.',
          bierutTitle:
            'Enterprises Choose Open-Source Models Primarily for Control and Customizability Over Raw Cost Savings',
          editorialAnalysis:
            'In a16z’s 2024 enterprise survey, "Control" and "Customizability" outrank pure cost reduction as the primary drivers for open-source model adoption. Enterprises fear vendor lock-in, silent model updates, and unconfigurable safety refusals more than token pricing alone.',
          keyTakeaways: [
            'Weight freezing, fine-tuning flexibility, and data control are the decisive enterprise advantages of self-hosting.',
          ],
        },
      ],
    },
    {
      id: 'ch04-sec-public-benchmarks-contamination',
      sectionNumber: '4.3',
      title: 'Navigating Public Benchmarks, Leaderboards & Data Contamination',
      subtitle:
        'Evaluation harnesses, leaderboard aggregation (averaging vs. mean win rate), benchmark correlation matrices, version drift, and data contamination forensics (n-gram overlap & perplexity)',
      coreMechanism: `With thousands of public benchmarks available (214 in Google's BIG-bench alone, 400+ in EleutherAI's \`lm-evaluation-harness\`, ~500 in OpenAI's \`evals\`), teams rely on public leaderboards like the **Hugging Face Open LLM Leaderboard** and **Stanford HELM** to shortlist models. However, public leaderboards suffer from severe structural trade-offs:
1. **Compute-Constrained Coverage Gaps**: Running benchmarks is expensive—**Stanford spent $80,000–$100,000** ($38,000 in API fees plus 19,500 GPU hours) to evaluate 30 models on the full HELM suite. Consequently, HELM Lite dropped MS MARCO retrieval due to cost, and Hugging Face originally excluded HumanEval coding to avoid generating massive completion batches.
2. **Arbitrary Selection & Rapid Saturation**: In late 2023, Hugging Face ranked models using 6 benchmarks (ARC-C, MMLU, HellaSwag, TruthfulQA, WinoGrande, GSM-8K), while HELM Lite used 10 benchmarks sharing only 2 with Hugging Face (MMLU and GSM-8K). By June 2024, saturation forced Hugging Face to overhaul its entire suite to **MMLU-Pro**, **MATH lvl 5**, **GPQA** (graduate-level QA), **MuSR** (multistep reasoning), **BBH**, and **IFEval**.
3. **Benchmark Correlation Bias**: Including strongly correlated benchmarks double-counts the same underlying capability. Balázs Galambosi's January 2024 Pearson correlation analysis of Hugging Face's 6 benchmarks (Table 4-5) revealed that **MMLU, WinoGrande, and ARC-C have 0.87–0.90 correlation** (all measuring general reasoning), whereas **TruthfulQA has only 0.42–0.55 correlation** with the others—proving that scaling reasoning and math does not automatically make a model more truthful!
4. **Aggregation Distortions**: Hugging Face uses simple **unweighted averaging** (treating an 80% on TruthfulQA as equal to an 80% on GSM-8K), whereas HELM uses **mean win rate** (the fraction of times a model beats another model across scenarios).
5. **Model Version Drift ("Are OpenAI's Models Getting Worse?")**: Chen et al. (2023) showed that GPT-3.5 and GPT-4 performance shifted dramatically between March 2023 and June 2023 on specific tasks (Figure 4-9), and migrating from \`gpt-3.5-turbo-0301\` to \`1106\` caused a 10% drop on Voiceflow's intent classification while improving GoDaddy's support bot. Global improvements can cause local regressions on your specific task.

The most corrosive threat to public benchmarks is **Data Contamination** (data leakage / training on the test set). As Rylan Schaeffer demonstrated in *"Pretraining on the Test Set Is All You Need"* (2023), a tiny **1-million-parameter model** trained exclusively on benchmark test sets achieved near-perfect scores outperforming massive foundation models. Contamination occurs unintentionally (web scrapers ingesting public GitHub/arXiv benchmarks published before the training cutoff), indirectly (training and test sets drawing from the same math textbooks), or intentionally post-selection (developers folding high-quality benchmark data into the final release checkpoint). When OpenAI audited GPT-3 (Brown et al., 2020), they found **13 benchmarks with >40% overlap in the training corpus** (Figure 4-10).

Engineers detect data contamination using two forensic techniques:
- **N-gram Overlapping**: Flags any evaluation sample as "dirty" if a contiguous sequence of $n$ tokens (e.g., **13-gram overlap**) appears in the training corpus. Highly accurate, but computationally expensive and *impossible if the training data is secret*.
- **Perplexity Anomaly Detection**: Computes the model's perplexity on the benchmark data; if perplexity is **abnormally low** compared to held-out equivalent text, the model has memorized the benchmark during training. Requires no access to training data (only model \`logprobs\`), though slightly noisier than exact n-gram matching.

To build your own **Custom Private Leaderboard** for Stage 2 shortlisting, select uncorrelated benchmarks tailored to your domain, normalize units (Accuracy, F1, pass@1), apply domain-specific weights, and treat the resulting shortlist strictly as input to your private evaluation pipeline.`,
      keyTakeaways: [
        'Public leaderboards exclude expensive tasks (like coding or retrieval) due to compute costs ($80K–$100K for full HELM).',
        'MMLU, ARC-C, and WinoGrande correlate at r ≈ 0.87–0.90, whereas TruthfulQA correlates at only r ≈ 0.42–0.55—reasoning capability does not guarantee truthfulness.',
        'A 1M-parameter model pretrained on test sets can beat frontier models on contaminated benchmarks.',
        'Detect contamination via 13-gram overlap (when training data is accessible) or abnormally low perplexity (when only model logprobs are accessible).',
      ],
      commonPitfalls: [
        'Selecting multiple highly correlated benchmarks (r > 0.85) for a custom leaderboard, which unintentionally overweights a single capability.',
        'Trusting a model’s score on any public benchmark released prior to the model’s pre-training cutoff date without checking for contamination.',
        'Assuming that an upstream API checkpoint upgrade will improve your specific task just because its aggregate leaderboard score rose.',
      ],
      figures: [
        {
          file: 'aien_0409.png',
          originalLabel:
            'Figure 4-9. Changes in the performances of GPT-3.5 and GPT-4 from March 2023 to June 2023 on certain benchmarks (Chen et al., 2023).',
          bierutTitle:
            'Silent Checkpoint Updates Cause Severe Task-Specific Regressions Even When Aggregate Capability Improves',
          editorialAnalysis:
            'Comparing the March 2023 and June 2023 snapshots of GPT-4 and GPT-3.5 across tasks shows sharp performance swings—with GPT-4’s accuracy on specific prime-number/math and code formatting tasks dropping steeply in June while GPT-3.5 improved on some and degraded on others. This empirical volatility proves why production teams must pin model versions and run continuous regression pipelines.',
          keyTakeaways: [
            'Model updates optimize for the provider’s aggregate objectives, which can break your specific prompt or task distribution.',
          ],
        },
        {
          file: 'aien_0410.png',
          originalLabel:
            'Figure 4-10. Relative difference in GPT-3’s performance when evaluating using only the clean sample compared to evaluating using the whole benchmark.',
          bierutTitle:
            'Decontaminating Benchmark Test Sets Exposes the Performance Inflation of Memorized Samples',
          editorialAnalysis:
            'From the GPT-3 paper (Brown et al., 2020), this chart plots the difference in accuracy between the "clean" subset (samples with no n-gram overlap with GPT-3’s training data) and the full benchmark across datasets where >40% of examples were contaminated. On several reading comprehension and QA benchmarks, clean performance drops noticeably below the contaminated whole-benchmark score.',
          keyTakeaways: [
            'Reporting both total benchmark scores and decontaminated "clean subset" scores should be standard engineering practice.',
          ],
        },
      ],
    },
    {
      id: 'ch04-sec-design-eval-pipeline',
      sectionNumber: '4.4',
      title: 'Designing Your 3-Step Production Evaluation Pipeline',
      subtitle:
        'Step 1: Component, Turn & Task evaluation; Step 2: Evaluation guidelines & business ROI mapping; Step 3: Slicing (Simpson’s paradox), Bootstrap variance, and OpenAI’s 95% confidence sample-sizing law',
      coreMechanism: `Because public benchmarks cannot be trusted to reflect your domain or remain uncontaminated, you must build a custom **3-Step Evaluation Pipeline**:

**Step 1: Evaluate All Components in a System (Component, Turn, and Task Levels)**
Complex AI applications comprise multi-step pipelines and multi-turn conversations. You must evaluate:
- **Each Intermediate Component Independently**: In a resume parser that (1) extracts text from a PDF and (2) extracts the candidate's current employer from the text, evaluating only the final employer output hides which step broke. Evaluate Step 1 via text similarity against ground-truth transcripts, and Step 2 via extraction accuracy given clean text.
- **Per-Turn vs. Per-Task Evaluation**: In a multi-turn Python debugging assistant, *turn-based evaluation* checks whether each individual response is helpful and accurate, while *task-based evaluation* checks whether the user's bug was actually fixed and **how many turns it took** (solving a bug in 2 turns is vastly superior to solving it in 20 turns, as modeled in BIG-bench's \`twenty_questions\` Alice/Bob game). Task-based evaluation is the closer proxy to user value, though defining task boundaries in free-form chat logs is non-trivial.

**Step 2: Create an Unambiguous Evaluation Guideline & Tie to Business Metrics**
- **Define What "Good" Means (and Out-of-Scope Boundaries)**: A factually correct answer can still be a terrible product response. On LinkedIn's AI Job Assessment tool, telling a user *"You are a terrible fit"* may be factually accurate, but a *good* response must constructively explain the skill gap and how to close it. You must also explicitly specify **out-of-scope inputs** (e.g., a customer support bot asked about an election) and how the system should refuse them. LangChain (2023) found teams average **2.3 evaluation criteria** per application (e.g., Relevance + Factual Consistency + Safety).
- **Create Scoring Rubrics with Concrete Examples**: Choose a clean scale—binary \`(0, 1)\` or ternary \`(-1 contradiction, 0 neutral, +1 entailment)\`—write concrete examples for each score bucket, and **validate the rubric with multiple humans** until inter-annotator ambiguity disappears. This rubric doubles as your instruction-tuning annotation guideline in Chapter 8.
- **Tie Evaluation Metrics to Business Metrics & Usefulness Thresholds**: Map technical scores directly to business impact and establish a **usefulness threshold** (below which the model cannot be deployed). For example:
  - *< 50% Factual Consistency*: Unusable even for general queries (below usefulness threshold).
  - *80% Factual Consistency*: Automates 30% of customer support tickets (safe for product recommendations, unsafe for billing).
  - *90% Factual Consistency*: Automates 50% of tickets.
  - *98% Factual Consistency*: Automates 90% of tickets.
  Be vigilant when tying AI evaluations to product *stickiness* (DAU/MAU) or *session duration*: optimizing purely for engagement can incentivize addictive or extreme responses over helpful task completion.

**Step 3: Define Evaluation Methods, Slice Data & Audit the Evaluator**
- **Mix-and-Match Evaluation Cascade & Human North Star**: Combine a fast, cheap classifier or \`logprobs\` confidence check on **100% of production traffic** with an expensive frontier AI judge on a **1% spot-check sample**, supplemented by **daily human expert review** (e.g., LinkedIn manually audits up to **500 daily conversations** as its North Star). When \`logprobs\` are exposed, use them to gauge classification certainty (e.g., class probabilities of \`[33%, 34%, 33%]\` vs. \`[95%, 3%, 2%]\`).
- **Slice Evaluation Data to Defeat Simpson's Paradox**: Never rely on a single aggregate score. Separate your evaluation data into targeted **slices**: (1) representative production distribution, (2) paying vs. free user tiers, (3) mobile vs. web traffic, (4) known failure modes (long inputs), (5) noisy user inputs with **typos**, and (6) **out-of-scope queries**. Slicing prevents **Simpson's Paradox** (Table 4-6, from Charig et al.'s renal calculi study), where Model A beats Model B on Group 1 (93% vs. 87%) AND beats Model B on Group 2 (73% vs. 69%), yet appears worse in the combined overall average (78% vs. 83%) because Model A was tested predominantly on the harder Group 2 (263/350 samples) while Model B was tested mostly on the easier Group 1 (270/350 samples)!
- **Statistical Sizing via Bootstrapping & The 3x-to-10x Sample Size Law**: To check if a 100-example eval set is large enough, run **bootstrap resampling** (draw 100 samples *with replacement*, compute the score, and repeat many times; if scores swing between 70% and 90% across bootstraps, your dataset is too small). To detect a specific performance difference $\\Delta$ between two systems at **95% statistical confidence**, OpenAI provides the empirical sample-size scaling law (Table 4-7): **for every $3\\times$ decrease in the score difference you want to detect, the required sample size increases by $10\\times$** (because $\\sqrt{10} \\approx 3.16 \\approx 3$):
  - Detect a **30% difference** $\\to$ **~10 samples**
  - Detect a **10% difference** $\\to$ **~100 samples**
  - Detect a **3% difference** $\\to$ **~1,000 samples** (the median size in \`lm-evaluation-harness\`; Inverse Scaling Prize recommends $\\ge 300$ minimum and $\\ge 1,000$ preferred)
  - Detect a **1% difference** $\\to$ **~10,000 samples**
- **Evaluate Your Evaluation Pipeline & Track Experiments**: Continuously audit four meta-questions: (1) *Does the pipeline capture the right signals (do higher scores drive business outcomes)?* (2) *Is it reproducible across runs (set judge temperature = 0)?* (3) *How correlated are your metrics (drop redundant metrics with $r \\approx 1.0$)?* (4) *What latency/cost overhead does evaluation add?* Log every evaluation variable (dataset slice version, rubric text, judge checkpoint, and sampling parameters) under strict experiment tracking.`,
      formulas: [
        {
          name: 'OpenAI 95% Confidence Sample-Sizing Scaling Law & Simpson’s Paradox',
          expression:
            'N(\\Delta) \\approx \\frac{1}{\\Delta^2} \\implies \\text{If } \\Delta_{\\text{new}} = \\frac{\\Delta}{3}, \\text{ then } N_{\\text{new}} \\approx 10 \\times N',
          intuition:
            'Because standard error shrinks with the square root of sample size (1/sqrt(N)), detecting a 3x smaller improvement between two prompts or models requires a 10x larger evaluation dataset.',
          variables: [
            {
              symbol: '\\Delta',
              meaning: 'Minimum score difference between two systems to detect at 95% confidence',
            },
            {
              symbol: 'N(\\Delta)',
              meaning: 'Number of evaluation examples required in the test set',
            },
          ],
          workedExample:
            'Detecting a massive 30% accuracy jump (e.g., 40% → 70%) requires only ~10 examples. Detecting a 10% gain (3x smaller) requires ~100 examples (10x more). Detecting a 3% gain requires ~1,000 examples, and detecting a 1% gain requires ~10,000 examples.',
        },
      ],
      keyTakeaways: [
        'Evaluate every intermediate component independently, and measure conversational systems at both the per-turn and per-task (turns-to-resolution) levels.',
        'Map technical evaluation metrics directly to business automation tiers and define an explicit minimum usefulness threshold.',
        'Always slice evaluation datasets (by input length, user tier, typos, out-of-scope) to catch subgroup failures and avoid Simpson’s paradox.',
        'Use bootstrap resampling with replacement to audit eval variance, and size datasets using the 3x-smaller-difference → 10x-larger-sample rule (30%→10, 10%→100, 3%→1,000, 1%→10,000).',
      ],
      commonPitfalls: [
        'Evaluating a multi-step RAG or extraction pipeline only on its final output, leaving engineers blind to which component failed.',
        'Falling for Simpson’s paradox by comparing two models on an aggregate dataset where the traffic mix across easy and hard slices is unbalanced.',
        'Claiming a new prompt is "+2% better" based on a 50-example test set (which lacks the ~3,000–10,000 samples needed for 95% confidence at that margin).',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Commercial Model APIs (Buy) vs. Self-Hosted Open-Weight Models (Build)',
      description:
        'A 7-axis engineering comparison of consuming commercial APIs versus hosting open-weight models on your own infrastructure.',
      headers: [
        'Evaluation Axis',
        'Commercial Model APIs (Buy)',
        'Self-Hosted Open-Weight Models (Build)',
        'Hybrid / Third-Party Open-Weight APIs',
      ],
      rows: [
        [
          '1. Data Privacy & Leakage',
          'High risk: data leaves org; vendor TOS changes or memorization leaks',
          'Maximum privacy: data never leaves VPC or local device',
          'Medium/High: VPC deployment available on AWS Bedrock / Azure / GCP',
        ],
        [
          '2. Data Lineage & IP Indemnity',
          'Opaque training data, but major vendors offer contractual IP indemnity',
          'Open-weight hides data; Open-model exposes data, but zero legal indemnity',
          'Subject to underlying model license (e.g. Llama 700M MAU & distillation rules)',
        ],
        [
          '3. Frontier Performance',
          'Highest available capability (SOTA reasoning & multimodal)',
          'Lags slightly behind absolute frontier, though gap on MMLU is small',
          'Same as self-hosted weights; beware provider quantization differences',
        ],
        [
          '4. Functionality & Internals',
          'Turnkey scale, tool calling, JSON mode; often hides logprobs & internals',
          'Full access to logprobs, embeddings, and arbitrary finetuning/quantization',
          'Exposes OpenAI-compatible APIs; logprob and finetuning support varies',
        ],
        [
          '5. Cost Structure',
          'Linear variable cost ($/1M tokens); expensive at high sustained volume',
          'High fixed ML engineering & GPU cluster cost; cheap per token at high scale',
          'Competitive $/token pricing without internal GPU ops overhead',
        ],
        [
          '6. Control, Versioning & Guardrails',
          'Rate limits, silent model drift, risk of over-censoring refusals',
          '100% control: freeze weights forever, customize safety filters',
          'Can pin open-weight versions, subject to third-party SLA uptime',
        ],
        [
          '7. On-Device / Edge',
          'Impossible (requires active internet & cloud roundtrip)',
          'Fully supported via quantized compact models (e.g., 3B–8B on device)',
          'Not applicable for offline edge execution',
        ],
      ],
      verdictRule:
        'Start with Commercial APIs during prototyping to establish the ceiling of achievable performance (Stage 1–2). Transition to Self-Hosted or VPC-hosted Open-Weight models when hard privacy rules, logprob/finetuning access, over-censoring refusals, or high-volume token economics demand it.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ch04-scen-simpson-rag',
      title: 'Defeating Simpson’s Paradox and Benchmark Mirage in a Legal Contract Summarizer',
      roleAndContext:
        'Principal AI Architect at a legal-tech company building an automated contract risk summarizer for M&A attorneys.',
      symptomOrFailure:
        'Your team picks an open-weight model because it scored #1 on the Hugging Face Open LLM Leaderboard. In offline testing on 100 contracts, Prompt V2 scores 78% overall vs. Prompt V1’s 83% overall, so the team prepares to roll back V2—even though attorneys insist V2 is noticeably better on both short NDAs and complex 100-page merger agreements.',
      naiveFixAndWhyItFails:
        'Trusting the aggregate 83% vs. 78% overall score and rolling back Prompt V2, while continuing to use global world-knowledge AI judge prompts on a 100-sample un-sliced test set. This fails due to Simpson’s paradox (V2 was tested on 263 complex mergers and 87 NDAs, while V1 was tested on 270 NDAs and only 80 complex mergers) and insufficient statistical sample size.',
      firstPrinciplesSolution:
        '1. Replace global factuality checks with a local textual entailment (NLI) scorer (DeBERTa-v3-mnli) and IFEval deterministic format checks.\n2. Slice the evaluation dataset into balanced cohorts (Short NDAs, Complex Mergers, Contracts with OCR Typos, Out-of-Scope documents) to eliminate Simpson’s paradox—revealing V2 actually beats V1 on both NDAs (93% vs 87%) and Mergers (73% vs 69%).\n3. Run bootstrap resampling and expand the golden evaluation set from 100 to 1,000 examples to detect 3% improvements at 95% confidence.',
      measurableOutcome:
        'Prevents rolling back the superior V2 system, cuts hallucination verification costs by 85% via local NLI classification, and ties a 92% local entailment score directly to automating 60% of initial paralegal contract reviews.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ch04-q1',
        scenarioPrompt:
          'You are evaluating a customer support RAG chatbot whose retrieved company policy document contains a typo stating: "All enterprise refunds take 45 business days." A user asks how long refunds take. Under Local Factual Consistency (Textual Entailment / NLI), how should the model output "Enterprise refunds take 45 business days" be scored?',
        options: [
          {
            label: 'A',
            text: 'Factually inconsistent (Contradiction), because standard banking refunds in the real world take 3–5 business days.',
            isCorrect: false,
            explanation:
              'Checking against real-world open knowledge is Global Factual Consistency, not Local Factual Consistency.',
          },
          {
            label: 'B',
            text: 'Factually consistent (Entailment), because Local Factual Consistency evaluates strictly whether the output is supported by the provided context, regardless of external world knowledge.',
            isCorrect: true,
            explanation:
              'As Huyen explains with the "the sky is purple" example, under local factual consistency an output is consistent if and only if it is entailed by the given context.',
          },
          {
            label: 'C',
            text: 'Neutral, because numbers cannot be evaluated by NLI models.',
            isCorrect: false,
            explanation:
              'The statement directly follows from the premise, which is the definition of Entailment.',
          },
          {
            label: 'D',
            text: 'It must be verified via Google Search using DeepMind’s SAFE pipeline.',
            isCorrect: false,
            explanation:
              'SAFE uses Google Search to verify global open-world factuality, not local adherence to an internal policy document.',
          },
        ],
      },
      {
        id: 'ch04-q2',
        scenarioPrompt:
          'Your team wants to compare two prompt engineering pipelines and needs to be 95% statistically confident that Pipeline B’s +3% accuracy improvement over Pipeline A is real and not random noise. According to OpenAI’s empirical sample-size rule, approximately how many evaluation examples do you need, and what happens if you later want to detect a +1% improvement?',
        options: [
          {
            label: 'A',
            text: '100 examples for a 3% difference; 300 examples for a 1% difference (linear 3x scaling).',
            isCorrect: false,
            explanation:
              'Sample size scales with the inverse square of the difference (every 3x decrease in difference requires 10x more samples, not 3x).',
          },
          {
            label: 'B',
            text: '~1,000 examples for a 3% difference; ~10,000 examples for a 1% difference (every 3x decrease in difference requires 10x more samples).',
            isCorrect: true,
            explanation:
              'Per Table 4-7: 30% diff → ~10 samples; 10% diff → ~100 samples; 3% diff → ~1,000 samples; 1% diff → ~10,000 samples.',
          },
          {
            label: 'C',
            text: '~10 examples for a 3% difference; ~100 examples for a 1% difference.',
            isCorrect: false,
            explanation:
              '10 examples can only detect a massive ~30% difference, and 100 examples detects a ~10% difference.',
          },
          {
            label: 'D',
            text: 'Exactly 50 examples, provided you run 5 bootstrap resamples.',
            isCorrect: false,
            explanation:
              'Bootstrapping measures variance of your current sample size; it cannot manufacture statistical power out of 50 samples to detect a 1%–3% difference.',
          },
        ],
      },
      {
        id: 'ch04-q3',
        scenarioPrompt:
          'Look at the following evaluation results across two user slices: On Slice 1 (Easy Queries), Model A scores 93% (81/87) and Model B scores 87% (234/270). On Slice 2 (Hard Queries), Model A scores 73% (192/263) and Model B scores 69% (55/80). Yet when combined into a 350-query total score, Model A scores 78% (273/350) while Model B scores 83% (289/350). What phenomenon is occurring, and which model is actually stronger?',
        options: [
          {
            label: 'A',
            text: 'Data contamination; Model B is stronger because its overall score (83%) is 5% higher.',
            isCorrect: false,
            explanation:
              'Model B only looks better in the aggregate because 270 of its 350 tests came from the Easy slice.',
          },
          {
            label: 'B',
            text: 'Simpson’s Paradox; Model A is stronger because it outperforms Model B on every individual data slice (both Easy and Hard), and only trails in the aggregate due to unbalanced slice sampling.',
            isCorrect: true,
            explanation:
              'This is the exact Simpson’s Paradox table (Table 4-6): Model A wins on Group 1 (93% > 87%) and wins on Group 2 (73% > 69%), proving why slice-based evaluation is mandatory.',
          },
          {
            label: 'C',
            text: 'First-position bias; both models have identical capability.',
            isCorrect: false,
            explanation: 'This is an exact numerical aggregation paradox, not an AI judge ordering bias.',
          },
          {
            label: 'D',
            text: 'Benchmark correlation inflation between MMLU and WinoGrande.',
            isCorrect: false,
            explanation:
              'Benchmark correlation applies to multi-benchmark leaderboards, whereas this is subgroup aggregation within a single metric.',
          },
        ],
      },
      {
        id: 'ch04-q4',
        scenarioPrompt:
          'You want to verify whether a newly released open-weight model (which did NOT release its training data) cheated by training on your target public benchmark. Which contamination detection method can you actually run, and what signal are you looking for?',
        options: [
          {
            label: 'A',
            text: '13-gram overlapping between the benchmark and the pre-training corpus.',
            isCorrect: false,
            explanation:
              'N-gram overlapping requires access to the training data, which is unavailable for open-weight models that do not release their training corpus.',
          },
          {
            label: 'B',
            text: 'Perplexity anomaly detection: compute the model’s perplexity on the benchmark prompts/answers and look for abnormally low perplexity compared to clean, unseen text.',
            isCorrect: true,
            explanation:
              'Because the model is open-weight, you have full access to its logprobs and can compute perplexity directly without needing the training corpus. Memorized texts exhibit unusually low perplexity.',
          },
          {
            label: 'C',
            text: 'Check if the model’s license is Apache 2.0 vs. Llama Community License.',
            isCorrect: false,
            explanation: 'Model licenses do not reveal empirical benchmark contamination.',
          },
          {
            label: 'D',
            text: 'Compare the model’s Time to First Token (TTFT) on the benchmark.',
            isCorrect: false,
            explanation:
              'Autoregressive inference latency per token depends on parameter count and hardware, not whether the text was seen during training.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ch04-fc1',
        category: 'evaluation',
        front: 'What is the difference between Local Factual Consistency and Global Factual Consistency?',
        back: 'Local Factual Consistency evaluates whether the output is supported by the explicitly provided context (framed as NLI: Entailment, Contradiction, Neutral). Global Factual Consistency evaluates whether the output is true against open world knowledge (using search-augmented pipelines like DeepMind’s SAFE).',
        mentalHook: 'Local = Entailed by Context (NLI); Global = Verified by Search (SAFE).',
      },
      {
        id: 'ch04-fc2',
        category: 'evaluation',
        front: 'How do IFEval and INFOBench differ in how they evaluate Instruction-Following Capability?',
        back: 'IFEval focuses on 25 formatting/structural constraints (JSON, word/paragraph counts, keyword inclusion) that can be 100% verified by deterministic code heuristics. INFOBench covers broader content, style, and linguistic constraints by decomposing instructions into Yes/No rubric questions graded by an AI judge.',
        mentalHook: 'IFEval = Code-verifiable format rules; INFOBench = AI-judged Yes/No content & style checklists.',
      },
      {
        id: 'ch04-fc3',
        category: 'architecture',
        front: 'What is the difference between an "Open-Weight" model and an "Open Model", and what 3 license questions must you always check?',
        back: 'Open-Weight releases model parameters only; Open Model releases both weights and training data.\n3 License Questions:\n1. Is commercial use allowed?\n2. Are there scale caps (e.g., Llama’s 700M MAU limit)?\n3. Can outputs be used for synthetic data / model distillation?',
        mentalHook: 'Weights ≠ Data; check Commercial, MAU cap, and Distillation.',
      },
      {
        id: 'ch04-fc4',
        category: 'architecture',
        front: 'What are the 7 Axes of the Model Build (Self-Host) vs. Buy (API) Decision?',
        back: '1. Data Privacy (PII leaks, 8% StarCoder memorization)\n2. Data Lineage & Copyright (IP indemnity vs. open data audit)\n3. Performance (SOTA behind APIs vs. closing MMLU gap)\n4. Functionality (Turnkey tools/scale vs. logprobs & full finetuning)\n5. Cost (Linear $/token vs. fixed GPU + eng payroll)\n6. Control & Transparency (Weight freezing & avoiding over-censoring)\n7. On-Device Deployment.',
        mentalHook: 'Privacy, Lineage, Performance, Functionality, Cost, Control, Edge.',
      },
      {
        id: 'ch04-fc5',
        category: 'evaluation',
        front: 'What did correlation analysis of the Hugging Face Open LLM Leaderboard reveal about TruthfulQA versus MMLU, ARC-C, and WinoGrande?',
        back: 'MMLU, ARC-C, and WinoGrande are strongly correlated (r = 0.87 to 0.90) because they all test general reasoning, whereas TruthfulQA is only moderately correlated (r = 0.42 to 0.55)—proving that improving reasoning/math does not automatically make a model more truthful.',
        mentalHook: 'Reasoning benchmarks move together (0.90); Truthfulness is orthogonal (0.50).',
      },
      {
        id: 'ch04-fc6',
        category: 'evaluation',
        front: 'State OpenAI’s 95% confidence sample-sizing rule for detecting a score difference Δ between two systems.',
        back: 'For every 3x decrease in the score difference you want to detect, the required evaluation sample size increases by 10x:\n• 30% diff → ~10 samples\n• 10% diff → ~100 samples\n• 3% diff → ~1,000 samples\n• 1% diff → ~10,000 samples',
        mentalHook: '3x smaller signal = 10x bigger test set (10 → 100 → 1,000 → 10,000).',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ch04-feyn-1',
        conceptTitle: 'Local NLI Entailment vs. Global Search-Augmented Factuality (SAFE)',
        prompt:
          'A product manager asks: "Why do we need different hallucination metrics for our RAG customer-policy bot versus our open-web market research assistant? Can’t we just use one TruthfulQA judge for both?" Explain the distinction between Local and Global Factual Consistency and the exact verification architectures for each.',
        rubricChecklist: [
          'Distinguishes Local Factual Consistency (output vs. provided context) from Global Factual Consistency (output vs. world knowledge) using the "sky is purple" thought experiment.',
          'Explains how Local Factual Consistency maps to 3-class Textual Entailment / NLI (Entailment, Contradiction, Neutral) and can be run cheaply with specialized models like 184M DeBERTa-v3.',
          'Walks through the 4 steps of Google DeepMind’s SAFE pipeline for Global Factual Consistency (atomic decomposition, pronoun self-containment revision, search query generation, search-grounded verification) and SelfCheckGPT’s N-sample consistency.',
          'Identifies the two query types most prone to hallucination: niche knowledge (VMO vs. IMO) and non-existent premises ("What did X say about Y?").',
        ],
        modelExplanation:
          'Hallucination is not one single problem; it splits into Local versus Global Factual Consistency. For our RAG customer-policy bot, we care about Local Factual Consistency: the bot must strictly obey the retrieved policy document. If our policy document says "the sky is purple," and the bot says "the sky is blue," the bot failed! Because the ground truth is right there in the prompt context, we can frame verification as Natural Language Inference (NLI): does the premise (context) Entail, Contradict, or remain Neutral toward the hypothesis (output)? We can run a 184M-parameter DeBERTa NLI classifier in milliseconds instead of paying for a massive LLM judge. By contrast, our open-web market research assistant requires Global Factual Consistency against world facts. For that, we need an architecture like DeepMind’s SAFE: (1) break the response into atomic claims, (2) rewrite pronouns so each claim is self-contained, (3) fire Google Search queries for each claim, and (4) verify entailment against the search results—while testing heavily on niche topics and false-premise questions where models hallucinate most.',
      },
      {
        id: 'ch04-feyn-2',
        conceptTitle: 'Architecting the 3-Step Evaluation Pipeline & Defeating Simpson’s Paradox',
        prompt:
          'Walk a team of engineers through designing an end-to-end evaluation pipeline for a multi-step, multi-turn AI application—covering granularity (component/turn/task), business ROI mapping, data slicing against Simpson’s paradox, and statistical sample sizing.',
        rubricChecklist: [
          'Step 1: Explains why intermediate components (e.g., PDF-to-text vs. entity extraction), individual turns, and full tasks (turns-to-completion) must all be evaluated independently.',
          'Step 2: Details defining what "good" means (including helpfulness and out-of-scope refusals), validating rubrics with humans, and mapping metric tiers (e.g., 80%/90%/98% factuality) to business ticket automation and a minimum usefulness threshold.',
          'Step 3A: Explains data slicing (production distribution, long inputs, typos, user tiers) and demonstrates how Simpson’s paradox can make a superior model look worse in an unbalanced aggregate average.',
          'Step 3B: Explains bootstrap resampling with replacement for variance checking and OpenAI’s 3x-difference → 10x-sample-size rule (10, 100, 1,000, 10,000).',
        ],
        modelExplanation:
          'A reliable evaluation pipeline has three steps. In Step 1, we instrument every boundary: if our app extracts text from a PDF and then parses the employer, we evaluate both steps separately so we know which one broke; for chat, we track both per-turn quality and per-task completion (did we solve the user’s problem in 2 turns or 20?). In Step 2, we write an unambiguous rubric with positive, negative, and out-of-scope examples validated by humans, and we tie technical scores directly to business ROI—for instance, establishing that <50% factual consistency is unusable, 80% automates 30% of support tickets, and 98% automates 90%. In Step 3, we combine a 100%-traffic fast classifier with a 1% frontier AI judge and daily human audits (like LinkedIn’s 500 conversations/day). Critically, we slice our test data by input length, typos, and user tiers so we never fall for Simpson’s paradox—where Model A beats Model B on every slice but loses the overall average because it was tested on more hard examples. Finally, we bootstrap our eval set to check variance and size it using OpenAI’s scaling law: 100 samples to detect a 10% gain, 1,000 samples for a 3% gain, and 10,000 samples for a 1% gain.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ch04-node-edd',
        label: 'Evaluation-Driven Development (EDD)',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Defining application-specific evaluation criteria, rubrics, and business usefulness thresholds before building or deploying an AI system.',
        whyItMatters:
          'Prevents deploying "zombie" AI applications whose ROI is unknown and unlocks high-value open-ended use cases safely.',
      },
      {
        id: 'ch04-node-local-global-factuality',
        label: 'Local (NLI) vs. Global (SAFE) Factual Consistency',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Verifying outputs against provided context via Natural Language Inference (Entailment/Contradiction/Neutral) vs. verifying against world knowledge via search-augmented decomposition (SAFE).',
        whyItMatters:
          'Separates fast, closed-context RAG/summarization verification from open-web fact-checking.',
      },
      {
        id: 'ch04-node-instruction-eval',
        label: 'Instruction-Following Verification (IFEval & INFOBench)',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Measuring adherence to structural/formatting constraints via code (IFEval’s 25 types) and content/style rules via decomposed Yes/No questions (INFOBench).',
        whyItMatters:
          'Ensures outputs respect JSON schemas, length limits, forbidden words, and persona/roleplay boundaries without breaking downstream parsers.',
      },
      {
        id: 'ch04-node-pareto-cost-latency',
        label: 'Cost–Latency–Quality Pareto Frontier',
        category: 'optimization',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Multi-objective optimization balancing model accuracy against Time to First Token (TTFT), total query latency, throughput (TPM), and token vs. GPU cluster cost.',
        whyItMatters:
          'Guides filtering out models that breach hard latency/scale SLAs before picking the highest-ROI survivor.',
      },
      {
        id: 'ch04-node-build-vs-buy',
        label: '7-Axis Model Build vs. Buy Framework',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Evaluating Commercial APIs against Self-Hosted Open-Weight/Open-Data models across Privacy, Lineage/IP, Performance, Functionality (logprobs/tools), Cost, Control, and Edge deployment.',
        whyItMatters:
          'Prunes the candidate model pool in Stage 1 based on hard organizational, legal, and architectural constraints.',
      },
      {
        id: 'ch04-node-data-contamination',
        label: 'Benchmark Data Contamination & Forensics',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Leakage of evaluation test samples into pre-training or post-training corpora, detected via 13-gram overlap or abnormally low model perplexity.',
        whyItMatters:
          'Explains why public benchmarks saturate rapidly and why a 1M-parameter model trained on test sets can fake frontier scores.',
      },
      {
        id: 'ch04-node-component-turn-task',
        label: 'Component, Turn & Task-Level Evaluation',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Evaluating each intermediate pipeline step independently, scoring individual conversational turns, and measuring end-to-end multi-turn task completion.',
        whyItMatters:
          'Pinpoints exactly which subsystem failed and measures whether users actually accomplish their goals in minimal turns.',
      },
      {
        id: 'ch04-node-slicing-simpson',
        label: 'Slice-Based Evaluation & Simpson’s Paradox',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Partitioning evaluation datasets into distinct cohorts (tiers, input length, typos, out-of-scope) so subgroup regressions and unbalanced aggregate reversals (Simpson’s paradox) are exposed.',
        whyItMatters:
          'Prevents deploying a model that looks better on average only because it was tested on a higher proportion of easy examples.',
      },
      {
        id: 'ch04-node-sample-sizing',
        label: 'Bootstrap Variance & 95% Confidence Sample Sizing',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 3,
        definition:
          'Using resampling with replacement to measure eval stability and sizing test sets by the rule that a 3x smaller score difference requires 10x more samples.',
        formulaOrRule: '30\\% \\to 10, \\; 10\\% \\to 100, \\; 3\\% \\to 1{,}000, \\; 1\\% \\to 10{,}000',
        whyItMatters:
          'Ensures model and prompt comparisons have statistical power rather than chasing random evaluation noise.',
      },
    ],
    edges: [
      {
        source: 'ch04-node-edd',
        target: 'ch04-node-component-turn-task',
        relationship: 'prerequisite_for',
        explanation:
          'Evaluation-Driven Development starts by defining criteria across components, turns, and tasks before building.',
      },
      {
        source: 'ch04-node-build-vs-buy',
        target: 'ch04-node-pareto-cost-latency',
        relationship: 'prerequisite_for',
        explanation:
          'Hard attributes in the Build-vs-Buy decision filter out disqualified models before soft attributes are mapped on the Cost–Latency–Quality Pareto frontier.',
      },
      {
        source: 'ch04-node-data-contamination',
        target: 'ch04-node-slicing-simpson',
        relationship: 'prerequisite_for',
        explanation:
          'Because public benchmarks are frequently contaminated, teams must construct private sliced evaluation datasets.',
      },
      {
        source: 'ch04-node-slicing-simpson',
        target: 'ch04-node-sample-sizing',
        relationship: 'part_of',
        explanation:
          'Each evaluation slice and comparison benchmark must be sized via bootstrapping and the 3x-to-10x confidence law to yield statistically valid signals.',
      },
      {
        source: 'ch04-node-local-global-factuality',
        target: 'ch04-node-instruction-eval',
        relationship: 'part_of',
        explanation:
          'Factual consistency and instruction-following verification work together as core pillars of the application evaluation rubric.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 22,
    figuresIncluded: 10,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 4 sections: Evaluation Criteria & Evaluation-Driven Development, Domain-Specific Capability (functional correctness, BIRD-SQL efficiency, readability, MCQs 75% of lm-evaluation-harness, Alzahrani prompt sensitivity), Generation Capability (Fluency/Coherence, Local vs Global Factual Consistency, niche knowledge & non-existent premises, SelfCheckGPT, DeepMind SAFE 4-step pipeline, Textual Entailment/NLI with DeBERTa-v3, TruthfulQA, Safety & Political Bias compass, RealToxicityPrompts/BOLD), Instruction-Following Capability (IFEval 25 verifiable types Table 4-2, INFOBench decomposed Yes/No criteria, Roleplaying RoleLLM/CharacterEval & negative knowledge), Cost and Latency (Pareto optimization, TTFT, TPM, GPU VRAM sizing 7B/65B, API vs self-hosted scale economics), Model Selection Workflow (Hard vs Soft attributes, 4 iterative steps), Model Build vs Buy (Open weight vs Open model, Llama 700M MAU & synthetic distillation licenses, Inference service vs Model API, 7 axes: Data privacy/Samsung/Zoom/StarCoder 8%, Data lineage/USPTO, Performance MMLU gap, Functionality/logprobs, API vs Engineering cost, Control/a16z/Convai over-censoring/Italy ban, On-device), Navigate Public Benchmarks (Harnesses, HELM $80K-$100K cost, HF Leaderboard v1 vs v2 MMLU-Pro/GPQA/MuSR, Benchmark correlation matrix Table 4-5, Averaging vs Mean Win Rate, OpenAI March-to-June drift, Data Contamination: Rylan Schaeffer 1M model, 13-gram overlap vs Perplexity, GPT-3 clean vs contaminated), and Design Your Evaluation Pipeline (Step 1: Component/Turn/Task & twenty_questions; Step 2: Guideline, LinkedIn Job Assessment, Rubric validation, Business ROI mapping & usefulness threshold; Step 3: Hybrid methods, logprobs, LinkedIn 500 daily human reviews, Data Slicing & Simpson’s Paradox Table 4-6, Bootstrapping, OpenAI 95% confidence sample size Table 4-7, Evaluate the Evaluator, Experiment tracking). All 10 figures (aien_0401..aien_0410) included with Bierut analysis.',
  },
};
