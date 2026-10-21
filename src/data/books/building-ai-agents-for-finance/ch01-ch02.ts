import { ChapterMastery } from '../../../types/book';

export const baafCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'What Are AI Agents?',
  subtitle:
    'Transformer Foundations, Financial LLM Taxonomies, Parametric Cutoff Boundaries, and the Architectural Shift to Autonomous Tool-Calling Agents',
  readingTimeMinutes: 8,
  sourceWordCount: 11189,
  executiveThesis:
    'Large language models predict sequential tokens probabilistically from frozen training weights, creating hard boundaries around temporal cutoffs, proprietary enterprise records, and multi-step execution. Financial AI agents overcome these parametric constraints by wrapping reasoning models in an autonomous loop that plans sub-tasks, invokes deterministic market APIs, and verifies intermediate states before emitting decisions.',
  paradigmShift: {
    oldWay:
      'Analysts treated LLMs as static text-in, text-out chat engines, manually pasting earnings transcripts into prompts and accepting ungrounded, single-pass completions.',
    newWay:
      'Financial systems deploy goal-directed agents that pair reasoning models with live API tool calling, retrieval-augmented generation (RAG), and multi-step execution loops.',
    whyItChanged:
      'Frozen model weights hallucinate post-cutoff market prices and cannot access private institutional portfolios, whereas regulated financial workflows require verifiable, up-to-the-second figures and auditable calculations.',
  },
  customDiagrams: [
    {
      id: 'baaf-ch01-svg1',
      title: 'The Financial AI Adaptation & Agency Spectrum',
      subtitle:
        'Escalating from static parametric inference to retrieval grounding, weight adaptation, and closed-loop autonomous execution',
      bierutCaption:
        'Escalate architectural complexity only when simpler grounding layers fail to resolve live state or multi-step dependencies.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch01-bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch01-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch01-bg1)" />
  <text x="32" y="38" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.04em">ARCHITECTURAL ESCALATION LADDER IN FINANCIAL AI</text>
  <text x="32" y="58" fill="#94a3b8" font-size="12">Balancing control, latency, and dynamic environment interaction across four system tiers</text>

  <!-- Axis Lines -->
  <line x1="60" y1="360" x2="750" y2="360" stroke="#475569" stroke-width="2" />
  <line x1="60" y1="360" x2="60" y2="85" stroke="#475569" stroke-width="2" />
  <text x="405" y="392" fill="#cbd5e1" font-size="12" font-weight="600" text-anchor="middle">AUTONOMY, RUNTIME LATENCY &amp; ARCHITECTURAL COMPLEXITY →</text>
  <text x="24" y="225" fill="#cbd5e1" font-size="12" font-weight="600" text-anchor="middle" transform="rotate(-90 24 225)">LIVE STATE &amp; MULTI-STEP AGENCY →</text>

  <!-- Tier 1: Prompting -->
  <rect x="85" y="275" width="145" height="70" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="97" y="297" fill="#e2e8f0" font-size="12" font-weight="700">1. Prompt Engineering</text>
  <text x="97" y="315" fill="#94a3b8" font-size="10">Zero-shot / Few-shot / CoT</text>
  <text x="97" y="331" fill="#38bdf8" font-size="10">Static weights • Low cost</text>

  <!-- Tier 2: Fine-Tuning -->
  <rect x="255" y="220" width="145" height="75" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
  <text x="267" y="242" fill="#e2e8f0" font-size="12" font-weight="700">2. Fine-Tuning (PEFT)</text>
  <text x="267" y="260" fill="#94a3b8" font-size="10">LoRA / Domain Jargon</text>
  <text x="267" y="276" fill="#818cf8" font-size="10">Frozen snapshot • High GPU</text>

  <!-- Tier 3: Single-Step RAG -->
  <rect x="425" y="160" width="145" height="78" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="437" y="182" fill="#e2e8f0" font-size="12" font-weight="700">3. Single-Step RAG</text>
  <text x="437" y="200" fill="#94a3b8" font-size="10">Chunk → Embed → Retrieve</text>
  <text x="437" y="216" fill="#10b981" font-size="10">Fresh docs • Fixed 1-pass</text>

  <!-- Tier 4: Autonomous Agents -->
  <rect x="595" y="95" width="155" height="88" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2" />
  <text x="607" y="117" fill="#fbbf24" font-size="12" font-weight="700">4. AI Agents &amp; Loops</text>
  <text x="607" y="135" fill="#e2e8f0" font-size="10">Plan → Call Tools → Verify</text>
  <text x="607" y="151" fill="#94a3b8" font-size="10">Live APIs &amp; self-correction</text>
  <text x="607" y="167" fill="#f59e0b" font-size="10">Dynamic multi-step control</text>

  <!-- Animated Flow Connectors -->
  <path d="M 230 310 L 250 265" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arrow)" class="svg-flow-active" />
  <path d="M 400 255 L 420 205" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arrow)" class="svg-flow-active" />
  <path d="M 570 195 L 590 145" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arrow)" class="svg-flow-active" />
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'In-Context Prompting & CoT',
          explanation:
            'Shapes output structure and intermediate reasoning steps without altering model weights or accessing external facts.',
        },
        {
          step: '02',
          label: 'PEFT / LoRA vs. RAG',
          explanation:
            'Fine-tuning bakes domain syntax into weights but goes stale immediately; RAG injects live vector chunks into the prompt.',
        },
        {
          step: '03',
          label: 'Closed-Loop Agentic Execution',
          explanation:
            'Combines reasoning models with live API tools and iterative state verification when single-pass retrieval is insufficient.',
        },
      ],
    },
    {
      id: 'baaf-ch01-svg2',
      title: 'Closed-Loop Financial Tool-Calling Execution',
      subtitle:
        'How an agent bypasses parametric knowledge cutoffs by routing live equity queries through deterministic market APIs',
      bierutCaption:
        'Separate probabilistic intent parsing in the LLM from deterministic price retrieval in external Python tools.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <marker id="ch01-arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="ch01-arr-warn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="32" y="38" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.04em">NON-AGENTIC CUTOFF FAILURE VS. AGENTIC TOOL-CALLING LOOP</text>
  <text x="32" y="58" fill="#94a3b8" font-size="12">Query: "What is today's date and the latest closing price of NVIDIA (NVDA)?"</text>

  <!-- Top Track: Non-Agentic -->
  <rect x="32" y="82" width="736" height="95" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="48" y="104" fill="#fda4af" font-size="12" font-weight="700">NON-AGENTIC SYSTEM (DIRECT LLM CALL)</text>
  <rect x="48" y="116" width="160" height="44" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="128" y="142" fill="#e2e8f0" font-size="11" text-anchor="middle">User Prompt (NVDA)</text>
  <path d="M 208 138 L 285 138" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arr-warn)" />
  <rect x="290" y="116" width="190" height="44" rx="6" fill="#0f172a" stroke="#f43f5e" />
  <text x="385" y="135" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">GPT-4.1 Frozen Weights</text>
  <text x="385" y="151" fill="#fda4af" font-size="10" text-anchor="middle">Cutoff: June 2024</text>
  <path d="M 480 138 L 545 138" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arr-warn)" />
  <rect x="550" y="116" width="198" height="44" rx="6" fill="#4c0519" stroke="#f43f5e" />
  <text x="649" y="135" fill="#fecdd3" font-size="11" font-weight="600" text-anchor="middle">Abstention or Hallucination</text>
  <text x="649" y="151" fill="#fda4af" font-size="10" text-anchor="middle">"No real-time market access"</text>

  <!-- Bottom Track: Agentic Loop -->
  <rect x="32" y="198" width="736" height="196" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="48" y="220" fill="#6ee7b7" font-size="12" font-weight="700">AGENTIC SYSTEM (OPENAI AGENTS SDK + YFINANCE FUNCTION TOOL)</text>

  <rect x="48" y="242" width="135" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="115" y="267" fill="#38bdf8" font-size="11" font-weight="600" text-anchor="middle">1. Agent Planner</text>
  <text x="115" y="284" fill="#94a3b8" font-size="10" text-anchor="middle">Selects price tool</text>

  <path d="M 183 271 L 235 271" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arr2)" class="svg-flow-active" />

  <rect x="240" y="242" width="165" height="58" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="322" y="264" fill="#6ee7b7" font-size="11" font-weight="600" text-anchor="middle">2. @function_tool</text>
  <text x="322" y="280" fill="#e2e8f0" font-size="10" text-anchor="middle">get_latest_stock_price</text>
  <text x="322" y="294" fill="#94a3b8" font-size="9" text-anchor="middle">yf.Ticker("NVDA").history("1d")</text>

  <path d="M 405 271 L 455 271" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arr2)" class="svg-flow-active" />

  <rect x="460" y="242" width="140" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="530" y="265" fill="#fbbf24" font-size="11" font-weight="600" text-anchor="middle">3. Tool Observation</text>
  <text x="530" y="282" fill="#e2e8f0" font-size="10" text-anchor="middle">{price: 178.89,</text>
  <text x="530" y="294" fill="#e2e8f0" font-size="10" text-anchor="middle">date: "2025-08-15"}</text>

  <path d="M 600 271 L 635 271" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch01-arr2)" class="svg-flow-active" />

  <rect x="640" y="242" width="112" height="58" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="696" y="267" fill="#ecfdf5" font-size="11" font-weight="700" text-anchor="middle">4. Grounded</text>
  <text x="696" y="283" fill="#6ee7b7" font-size="10" text-anchor="middle">Verified Answer</text>

  <!-- Feedback Loop Arrow -->
  <path d="M 530 300 L 530 355 L 115 355 L 115 305" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#ch01-arr2)" />
  <text x="322" y="347" fill="#38bdf8" font-size="10" text-anchor="middle">Observation injected into LLM context window for second-pass reasoning</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Intent & Schema Binding',
          explanation:
            'The LLM inspects registered tool docstrings and emits a structured call passing symbol="NVDA" instead of guessing a price.',
        },
        {
          step: '02',
          label: 'Deterministic Market Execution',
          explanation:
            'The runtime executes Python code against Yahoo Finance to extract the exact latest closing price and timestamp.',
        },
        {
          step: '03',
          label: 'Context Re-Injection',
          explanation:
            'The SDK appends the returned dictionary into the conversation state so the LLM synthesizes a verified response.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'baaf-ch01-mm1',
      name: 'Active Parameter Routing (MoE vs. Dense Scaling)',
      tagline: 'Decouple total knowledge capacity from per-token inference latency via sparse expert activation.',
      naiveIntuition:
        'A 400-billion-parameter model must execute 400 billion floating-point operations on every token, making large open-weight models prohibitively slow for financial desks.',
      firstPrinciplesReality:
        'Mixture-of-Experts (MoE) architectures like Llama 4 Maverick (400B total, 17B active) or Mixtral-8x7B (45B total, 12.9B active) use a gating router to activate only a small subset of expert subnetworks per token.',
      howToApply:
        'Deploy MoE models when your financial task requires broad cross-market knowledge capacity but your production SLA demands the inference speed and compute cost of a 13B–17B dense model.',
    },
    {
      id: 'baaf-ch01-mm2',
      name: 'The Parametric Cutoff Boundary',
      tagline: 'Treat LLM weights as a linguistic and logical engine, never as a system of record for market state.',
      naiveIntuition:
        'Because a frontier model fluently explains options pricing and macroeconomic theory, it also knows current equity valuations and recent SEC filings.',
      firstPrinciplesReality:
        'Pretraining freezes statistical token associations at a fixed historical timestamp; querying post-cutoff events forces the model to either abstain or extrapolate plausible-sounding fabrications.',
      howToApply:
        'Enforce a strict architectural separation where the LLM formulates plans and parses schemas while external APIs and vector stores supply all time-sensitive figures.',
    },
    {
      id: 'baaf-ch01-mm3',
      name: 'Minimum Viable Agency (The Escalation Ladder)',
      tagline: 'Earn every layer of autonomous complexity by proving simpler deterministic pipelines fail.',
      naiveIntuition:
        'Building a multi-agent autonomous swarm is always superior to a single structured LLM call or a deterministic workflow.',
      firstPrinciplesReality:
        'Every autonomous reasoning hop multiplies token consumption, tail latency, and compounding error probability across steps.',
      howToApply:
        'Start with structured prompting or single-step RAG for predictable tasks like earnings transcript summarization, escalating to autonomous agents only when the workflow requires dynamic branching, live tool feedback, or self-correction.',
    },
  ],
  deepSections: [
    {
      id: 'baaf-ch01-sec1',
      sectionNumber: '1.1',
      title: 'Transformer Mechanics, Model Taxonomies & Financial Specialization',
      subtitle:
        'Self-attention scaling, open vs. closed weights, reasoning vs. non-reasoning engines, and domain-specific FinLLMs',
      coreMechanism:
        'Large language models estimate the conditional probability of each subsequent token given preceding context via the Transformer self-attention mechanism. Unlike Recurrent Neural Networks (RNNs) and LSTMs that pass hidden states sequentially and suffer from vanishing gradients over long documents, self-attention computes pairwise token relevance across the entire sequence in parallel. Modern deployments split along two structural axes: open-weight vs. proprietary APIs, and single-pass non-reasoning vs. multi-step reasoning models. While Mixture-of-Experts (MoE) models activate only a sparse fraction of parameters per token to preserve low latency, reasoning models (such as o3, GPT-5, and DeepSeek R1) allocate extra test-time compute to generate hidden chain-of-thought traces before emitting an answer.\n\nIn finance, general foundation models are complemented by specialized encoders and instruction-tuned models such as FinBERT (sentiment classification trained on Financial PhraseBank), SecBERT (SEC filing entity extraction), FinGPT, and BloombergGPT (trained on 363B financial and 345B general tokens). Empirical claims in financial NLP are benchmarked against standardized datasets including FinQA (expert-annotated multi-step numerical reasoning programs over financial tables), ECTSum (telegram-style earnings call summarization), and FiQA (aspect-based financial sentiment).',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Modality & Model Class Selection',
          detail:
            'Match input modalities (text, scanned PDF vision, earnings audio) and choose between low-latency non-reasoning models for intraday summaries and test-time reasoning models for multi-quarter analysis.',
        },
        {
          step: '02',
          title: 'Deployment Governance Trade-Off',
          detail:
            'Evaluate closed APIs (GPT-4.1, Gemini 2.5, Claude) for frontier accuracy against self-hosted open-weight models (Llama 3.1/4, Mistral, FinGPT) when strict data residency applies.',
        },
        {
          step: '03',
          title: 'Schema-Constrained API Invocation',
          detail:
            'Enforce strict JSON output schemas (e.g., keys for revenue, EPS, guidance, and risks) via provider APIs so downstream portfolio systems can parse outputs deterministically.',
        },
      ],
      formulas: [
        {
          name: 'Autoregressive Language Modeling Objective',
          expression: 'P(w_1, w_2, \\dots, w_T) = \\prod_{t=1}^{T} P(w_t \\mid w_1, w_2, \\dots, w_{t-1}; \\theta)',
          intuition:
            'An LLM generates financial text by factoring the joint probability of a token sequence into conditional next-token probabilities governed by frozen parameters theta.',
          variables: [
            {
              symbol: 'w_t',
              meaning: 'The target token predicted at sequence position t',
            },
            {
              symbol: 'w_1, \\dots, w_{t-1}',
              meaning: 'The preceding prompt and generated token context window',
            },
            {
              symbol: '\\theta',
              meaning: 'Frozen neural network weights learned prior to the training cutoff date',
            },
          ],
          workedExample:
            'Given the prefix "The stock market is", the model evaluates conditional probabilities over its vocabulary and selects high-likelihood continuations such as "volatile" or "rising" based on historical corpus frequencies.',
        },
      ],
      keyTakeaways: [
        'Self-attention weighs token relationships across arbitrary distances simultaneously, eliminating the sequential bottleneck of RNNs and enabling full-document financial analysis.',
        'Smaller 8B open-weight models capture surface facts in earnings transcripts, whereas larger frontier or reasoning models extract nuanced margin drivers and capital allocation context.',
        'Domain benchmarks like FinQA and Financial PhraseBank provide objective verification of numerical reasoning and sentiment classification accuracy.',
      ],
      commonPitfalls: [
        'Deploying slow, high-cost reasoning models for routine low-latency tasks like formatting daily trade alerts where non-reasoning models suffice.',
        'Assuming smaller open-source Small Language Models (SLMs) dilute training data biases as effectively as broadly trained frontier models.',
      ],
      figures: [
        {
          file: 'B32414_1_1.png',
          originalLabel: 'Figure 1.1 – LLM definition',
          bierutTitle: 'Deconstruct Large Language Models into Scale, Linguistic Modeling, and Transformer Topology',
          editorialAnalysis:
            'The diagram isolates the three pillars of modern LLMs: massive parameter and corpus scale (Large), probabilistic human text generation (Language), and the underlying Transformer neural architecture (Model). For financial architects, this triad clarifies why LLMs excel at syntactic synthesis while remaining bounded by their training distribution.',
          keyTakeaways: [
            'Parameter scale reaches hundreds of billions of weights trained over multi-trillion-token corpora.',
            'Transformer self-attention replaces recurrent loops as the foundational engine for financial agents.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch01-sec2',
      sectionNumber: '1.2',
      title: 'Overcoming Parametric Limits: Prompting, PEFT Fine-Tuning & RAG',
      subtitle:
        'Why frozen weights fail in live markets and how in-context learning, LoRA weight updates, and vector retrieval compare',
      coreMechanism:
        'Base LLMs suffer from four structural failure modes in institutional finance: hard knowledge cutoffs that trigger hallucinations on recent events, shallow mastery of specialized regulatory or quantitative conventions, zero access to proprietary firm data, and sensitivity to biased training corpora. Engineers address these constraints across three non-agentic adaptation layers. First, instruction prompting shapes model behavior at inference time through zero-shot directives, few-shot input-output demonstrations, or Chain-of-Thought (CoT) intermediate reasoning steps, without modifying underlying weights.\n\nSecond, supervised fine-tuning updates model parameters on curated prompt-completion tuples—commonly using Parameter-Efficient Fine-Tuning (PEFT) methods like Low-Rank Adaptation (LoRA) and QLoRA to train lightweight adapter matrices rather than all weights. However, fine-tuning remains a static snapshot that rapidly becomes obsolete as market prices and regulations shift. Third, Retrieval-Augmented Generation (RAG) chunks external documents, embeds them into vector databases, retrieves semantically similar passages at query time, and injects them into the prompt to ground generation in fresh, verifiable documents.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'In-Context Prompt Structuring',
          detail:
            'Apply explicit CoT steps or Zero-CoT ("Let\'s think step by step") to guide multi-step arithmetic such as year-over-year net profit margin comparisons.',
        },
        {
          step: '02',
          title: 'Parameter-Efficient Weight Adaptation',
          detail:
            'Use LoRA or QLoRA when adapting an open model to specialized financial sentiment or SEC filing syntax, avoiding full-weight GPU retraining.',
        },
        {
          step: '03',
          title: 'Three-Stage RAG Pipeline',
          detail:
            'Chunk unstructured PDFs, index vector embeddings, and inject top-k matching excerpts alongside the user prompt to eliminate cutoff hallucinations.',
        },
      ],
      formulas: [
        {
          name: 'Net Profit Margin (CoT Profitability Verification)',
          expression: '\\text{NPM}_t = \\frac{\\text{Net Income}_t}{\\text{Revenue}_t}, \\quad \\Delta \\text{NPM} = \\text{NPM}_t - \\text{NPM}_{t-1}',
          intuition:
            'Decomposing profitability assessment into explicit ratio calculations per period prevents the LLM from guessing trend direction from raw dollar growth alone.',
          variables: [
            {
              symbol: '\\text{Net Income}_t',
              meaning: 'Bottom-line after-tax profit earned by the company in fiscal year t',
            },
            {
              symbol: '\\text{Revenue}_t',
              meaning: 'Total top-line sales generated in fiscal year t',
            },
            {
              symbol: '\\Delta \\text{NPM}',
              meaning: 'Year-over-year expansion or contraction in net profit margin',
            },
          ],
          workedExample:
            'With 2022 Net Income of $200M on $2.0B Revenue (NPM = 10.0%) and 2023 Net Income of $260M on $2.4B Revenue (NPM = 10.83%), explicit CoT verifies an +83 bps margin expansion.',
        },
      ],
      keyTakeaways: [
        'Few-shot prompting fails at scale when stuffing hundreds of labeled financial examples overflows the context window and inflates per-query latency and token cost.',
        'Fine-tuning requires clean supervised pairs and cannot accommodate rapidly changing intraday prices or raw, unlabeled PDF document repositories.',
        'Standard RAG grounds responses in external documents but executes in a single retrieve-then-generate pass without iterative planning or multi-step tool orchestration.',
      ],
      commonPitfalls: [
        'Uploading confidential client portfolios or proprietary trading logs to third-party fine-tuning sandboxes in violation of enterprise compliance policies.',
        'Expecting a fine-tuned model to know live market quotes without connecting a runtime retrieval or API tool layer.',
      ],
      figures: [
        {
          file: 'B32414_1_2.png',
          originalLabel: 'Figure 1.2 – LLM limitations and the solutions that address them',
          bierutTitle: 'Map Every Parametric LLM Deficit to Its Matching Architectural Remedy',
          editorialAnalysis:
            'This diagnostic mapping links the four core deficits of base LLMs—knowledge cutoffs, domain gaps, proprietary data blindness, and training data quality—to the four engineering interventions: prompting, fine-tuning, RAG, and AI agents.',
          keyTakeaways: [
            'No single static adaptation technique resolves real-time data access and multi-step execution simultaneously.',
            'AI agents sit at the top of the remediation stack by combining reasoning with dynamic external interaction.',
          ],
        },
        {
          file: 'B32414_1_4.png',
          originalLabel:
            'Figure 1.4 – Examples of sentiment analysis dataset: Financial Phrasebank dataset',
          bierutTitle: 'Structure Supervised Fine-Tuning Around Explicit Role, Input, and Label Tuples',
          editorialAnalysis:
            'Derived from the Financial PhraseBank benchmark, this schema demonstrates how raw financial news headlines are paired with a system persona ("senior financial analyst") and discrete sentiment targets (Positive, Neutral, Negative) for supervised weight updates.',
          keyTakeaways: [
            'Supervised fine-tuning demands structured input-output pairs curated by domain experts.',
            'Consistent system prompts anchor behavior across training and inference.',
          ],
        },
        {
          file: 'B32414_1_5.png',
          originalLabel: 'Figure 1.5 – RAG – Retrieval-augmented generation',
          bierutTitle: 'Ground Generation in Verifiable Vectors via Retrieve, Augment, and Generate',
          editorialAnalysis:
            'The schematic traces how unstructured documents are chunked, embedded into a vector database, and matched via similarity search against user queries to form an augmented prompt context.',
          keyTakeaways: [
            'Vector similarity search isolates relevant document chunks before invoking the generator.',
            'Augmenting the prompt at runtime eliminates retraining cycles when underlying filings change.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch01-sec3',
      sectionNumber: '1.3',
      title: 'Autonomous AI Agents vs. Non-Agentic Workflows',
      subtitle:
        'Core agent properties, the complexity spectrum, and closed-loop tool execution with the OpenAI Agents SDK',
      coreMechanism:
        'An AI agent is a goal-oriented system that autonomously plans, executes actions across multiple steps, interacts with external tools or peer agents, and adapts its strategy based on intermediate observations. Whereas a non-agentic interaction relies on a human operator manually driving back-and-forth prompts or executing a single-pass summarization call, an agentic system encapsulates control flow inside an autonomous runtime loop. Four properties define true agency in finance: autonomy (executing multi-step logic without manual intervention), adaptability (detecting errors and switching strategies mid-run), interactivity (invoking market APIs, code interpreters, and sibling agents), and goal orientation (converging on concrete deliverables like liquidity ratios or backtest metrics).\n\nPractitioners must situate every system along the agentic spectrum: from single LLM calls with tool integrations, through deterministic multi-step workflows with fixed branching, to fully autonomous multi-agent systems. When implemented via frameworks like the OpenAI Agents SDK (`Agent`, `Runner`, and `@function_tool`), the LLM inspects tool schemas, invokes Python functions such as `yfinance` market fetchers, receives live timestamps and prices back into its context, and synthesizes a verified financial answer.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Register Deterministic Function Tools',
          detail:
            'Decorate typed Python functions (e.g., `get_latest_stock_price(symbol: str)`) with `@function_tool` so the agent runtime exposes their signatures and docstrings to the model.',
        },
        {
          step: '02',
          title: 'Instantiate the Specialized Agent',
          detail:
            'Bind a unique agent `name`, concise operational `instructions`, backing `model` (such as `gpt-4.1`), and the authorized `tools` list.',
        },
        {
          step: '03',
          title: 'Execute the Closed-Loop Runner',
          detail:
            'Invoke `Runner.run_sync()` so the model plans the tool call, the SDK executes the API query and re-injects the live observation, and the model formulates the final grounded output.',
        },
      ],
      keyTakeaways: [
        'Non-agentic LLM calls fail on live equity queries because frozen weights cannot fetch post-cutoff market state.',
        'Deterministic workflows offer a middle ground of predictable control and lower latency when task sequences do not require dynamic re-planning.',
        'Building agentic systems block by block—starting with narrow, single-responsibility tool agents—prevents compounding orchestration failures.',
      ],
      commonPitfalls: [
        'Over-engineering an autonomous multi-agent architecture for a static task that a single structured prompt or deterministic script can solve faster and cheaper.',
        'Omitting date verification in market-data tools, leaving analysts unable to tell whether a reported figure came from live API execution or stale model memory.',
      ],
      figures: [
        {
          file: 'B32414_1_7.png',
          originalLabel: 'Figure 1.7 – Non-agentic vs. agentic system',
          bierutTitle: 'Contrast Single-Pass Prompting Against Multi-Step Autonomous Tool Orchestration',
          editorialAnalysis:
            'The side-by-side architecture contrasts a passive LLM summarization call against an agentic pipeline that autonomously extracts financial metrics, runs evidence-backed sentiment analysis, and validates output schemas.',
          keyTakeaways: [
            'Non-agentic setups shift the burden of multi-step orchestration onto the human prompt operator.',
            'Agentic systems chain extraction, analysis, and structured formatting inside a self-correcting loop.',
          ],
        },
        {
          file: 'B32414_1_8.png',
          originalLabel:
            'Figure 1.8 – Agentic systems spectrum: from simple prompting to autonomous agents, with workflows and multi-agent systems as architectural patterns',
          bierutTitle: 'Calibrate System Autonomy Across the Prompting-to-Multi-Agent Continuum',
          editorialAnalysis:
            'This progression chart illustrates how AI architectures scale from direct LLM calls with RAG/tools to deterministic workflows and finally autonomous multi-agent networks as task dynamism increases.',
          keyTakeaways: [
            'Always anchor architecture design at the simplest tier capable of satisfying business constraints.',
            'Deterministic workflows bridge simple tool calls and unconstrained autonomous agents.',
          ],
        },
        {
          file: 'B32414_1_9.png',
          originalLabel: 'Figure 1.9 – The agent loop behind the stock-price agent',
          bierutTitle: 'Trace the Five-Step Runtime Cycle of a Market-Data Tool-Calling Agent',
          editorialAnalysis:
            'The sequence diagram follows a live NVIDIA quote request through the OpenAI Agents SDK: the LLM identifies the missing price and date, triggers `get_latest_stock_price`, receives the `yfinance` payload, and completes second-pass reasoning.',
          keyTakeaways: [
            'The SDK runtime executes external Python code while the LLM handles intent and synthesis.',
            'Injecting tool results back into the model context grounds the final response in live market data.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Financial LLM Adaptation & Agency Selection Matrix',
      description:
        'Comparing the four primary patterns for overcoming base LLM limitations across data freshness, engineering cost, latency, and optimal financial use cases.',
      headers: [
        'Approach',
        'Data Freshness',
        'Setup & Maintenance Cost',
        'Runtime Latency',
        'Multi-Step Agency',
        'Best-Fit Financial Task',
      ],
      rows: [
        [
          'Instruction Prompting (Few-Shot / CoT)',
          'Frozen at cutoff (unless pasted in prompt)',
          'Minimal (prompt design only)',
          'Low (single LLM pass)',
          'None (static single turn)',
          'Formatting earnings highlights or step-by-step ratio math on provided text',
        ],
        [
          'Fine-Tuning (PEFT / LoRA / QLoRA)',
          'Static snapshot (requires retraining for new data)',
          'High (labeled tuples, GPU compute, ML ops)',
          'Low (direct inference on adapted weights)',
          'None (weight specialization only)',
          'Domain sentiment classification (FinBERT) or proprietary filing syntax',
        ],
        [
          'Single-Step RAG',
          'High (updates immediately as vector index refreshes)',
          'Moderate (chunking, embedding, vector DB pipeline)',
          'Moderate (vector lookup + 1 LLM pass)',
          'Low (fixed retrieve-then-generate)',
          'Question answering over internal compliance policies or SEC 10-K repositories',
        ],
        [
          'Autonomous AI Agents',
          'Real-time (live market APIs + dynamic RAG)',
          'High (tool schemas, loop control, guardrails)',
          'High (multi-hop reasoning + API round-trips)',
          'Full (plans, calls tools, self-corrects)',
          'Live market intelligence, multi-source client reporting, strategy backtesting',
        ],
      ],
      verdictRule:
        'Use structured prompting or single-step RAG when inputs are static or retrievable in one pass; reserve fine-tuning for stable domain syntax, and deploy AI agents only when tasks require live API interaction, multi-step planning, or dynamic self-correction.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'baaf-ch01-scen1',
      title: 'Eliminating Cutoff Hallucinations in Intraday Equity Briefings',
      roleAndContext:
        'Quantitative Developer building an automated morning briefing assistant for an equity trading desk using GPT-4.1.',
      symptomOrFailure:
        'When portfolio managers ask for the latest NVIDIA stock price and recent catalysts, the assistant either refuses due to its June 2024 cutoff or fabricates outdated Computex 2024 headlines as current news.',
      naiveFixAndWhyItFails:
        'Appending "Always provide up-to-date 2025/2026 numbers" to the system prompt fails because prompt instructions cannot manufacture post-cutoff facts inside frozen neural weights.',
      firstPrinciplesSolution:
        'Wrap the LLM in an OpenAI Agents SDK `Agent` equipped with a `@function_tool` that queries `yfinance` (`ticker.history(period="1d")`) and returns both the exact closing price and market timestamp into the reasoning loop.',
      measurableOutcome:
        '100% of price and date responses match live exchange records with zero cutoff hallucinations and explicit trade-date verification.',
    },
    {
      id: 'baaf-ch01-scen2',
      title: 'Replacing Brittle Weekly Fine-Tuning with Dynamic RAG + Tool Workflows',
      roleAndContext:
        'Lead AI Architect at a credit advisory firm processing hundreds of updated corporate bond indentures and quarterly financials.',
      symptomOrFailure:
        'The team attempted to fine-tune an open-weight Llama model every month on new credit memos, burning GPU budgets while leaving analysts with a model that still missed mid-month rating downgrades and raw PDF covenants.',
      naiveFixAndWhyItFails:
        'Stuffing 100 few-shot examples and full bond prospectuses directly into a single prompt exceeds context window limits and spikes per-query token costs and latency.',
      firstPrinciplesSolution:
        'Replace recurring fine-tuning with a RAG vector index for unstructured PDF indentures paired with a deterministic ratio calculation tool for incoming quarterly statements.',
      measurableOutcome:
        'New credit filings become queryable within minutes of ingestion at a fraction of GPU retraining cost, with grounded citations to exact covenant clauses.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'baaf-ch01-q1',
        scenarioPrompt:
          'A financial engineering team needs to deploy an open-weight model with massive multi-market knowledge capacity, but their production infrastructure only has the compute budget and latency budget of a ~15B dense parameter model. Which architectural choice directly resolves this constraint?',
        options: [
          {
            label: 'A',
            text: 'A Mixture-of-Experts (MoE) model such as Llama 4 Maverick or Mixtral-8x7B that activates only a sparse subset of expert subnetworks per input token.',
            isCorrect: true,
            explanation:
              'MoE models decouple total parameter storage from active per-token computation by routing each token to only a few specialized experts.',
          },
          {
            label: 'B',
            text: 'A standard dense 400B parameter Transformer run with zero-shot Chain-of-Thought prompting.',
            isCorrect: false,
            explanation:
              'A dense model activates 100% of its parameters for every token, violating the 15B-equivalent compute and latency constraint.',
          },
          {
            label: 'C',
            text: 'Replacing the Transformer self-attention layers with a standard Recurrent Neural Network (RNN) loop.',
            isCorrect: false,
            explanation:
              'RNNs process tokens sequentially and suffer from vanishing gradients over long financial documents.',
          },
          {
            label: 'D',
            text: 'Setting the reasoning effort parameter to maximum on a proprietary reasoning model.',
            isCorrect: false,
            explanation:
              'Higher reasoning effort increases test-time compute and latency rather than reducing active parameter cost.',
          },
        ],
      },
      {
        id: 'baaf-ch01-q2',
        scenarioPrompt:
          'When summarizing a synthetic Apple Q3 earnings call transcript into strict JSON across GPT-4.1-mini, Gemini-2.5-Flash, and Llama-3.1-8B-Instruct, what systematic difference emerges in the 8B open-weight model output?',
        options: [
          {
            label: 'A',
            text: 'Llama-3.1-8B-Instruct cannot emit valid JSON and crashes the Hugging Face pipeline.',
            isCorrect: false,
            explanation:
              'Llama-3.1-8B-Instruct successfully outputs valid JSON matching the requested keys.',
          },
          {
            label: 'B',
            text: 'Llama-3.1-8B-Instruct lists high-level factual bullet points but omits deeper analytical context around product-level revenue breakdowns, margin expansion drivers, and capital allocation.',
            isCorrect: true,
            explanation:
              'Due to its smaller 8B parameter scale, the model captures surface facts but provides less detailed analytical synthesis than larger frontier models.',
          },
          {
            label: 'C',
            text: 'Llama-3.1-8B-Instruct automatically invokes live Yahoo Finance tools to verify the EPS figure.',
            isCorrect: false,
            explanation:
              'A raw Hugging Face text-generation pipeline has no external tool access unless wired into an agentic runtime.',
          },
          {
            label: 'D',
            text: 'Llama-3.1-8B-Instruct refuses to process earnings transcripts that occur after its December 2023 training cutoff.',
            isCorrect: false,
            explanation:
              'Because the transcript is supplied directly inside the user prompt, the model can summarize the in-context text regardless of its training cutoff.',
          },
        ],
      },
      {
        id: 'baaf-ch01-q3',
        scenarioPrompt:
          'A wealth management firm wants an AI system to answer analyst questions over internal client portfolios and real-time market prices that change every minute. Why is supervised fine-tuning (even with LoRA) the wrong primary architecture for this requirement?',
        options: [
          {
            label: 'A',
            text: 'LoRA updates 100% of the base model weights, which destroys the model’s ability to read English.',
            isCorrect: false,
            explanation:
              'LoRA is a PEFT technique that updates only a small subset of low-rank adapter parameters while keeping base weights frozen.',
          },
          {
            label: 'B',
            text: 'Fine-tuning produces a static weight snapshot that cannot adapt to rapidly changing market prices or unstructured client updates without expensive, continuous retraining cycles and compliance exposure.',
            isCorrect: true,
            explanation:
              'Fine-tuning bakes static patterns into weights and quickly goes obsolete when underlying financial signals change daily or intraday.',
          },
          {
            label: 'C',
            text: 'Fine-tuning can only be applied to encoder-only models like FinBERT and never to generative models.',
            isCorrect: false,
            explanation:
              'Generative models like LLaMA are routinely fine-tuned (e.g., InvestLM, FinGPT, FinLlama).',
          },
          {
            label: 'D',
            text: 'Fine-tuned models cannot accept system prompts at inference time.',
            isCorrect: false,
            explanation:
              'Supervised fine-tuning explicitly pairs system prompts, user queries, and target outputs.',
          },
        ],
      },
      {
        id: 'baaf-ch01-q4',
        scenarioPrompt:
          'In the Chapter 1 stock-price lab using the OpenAI Agents SDK, why do the authors ask the agent for BOTH today’s date and NVIDIA’s current stock price?',
        options: [
          {
            label: 'A',
            text: 'Because the OpenAI Responses API requires at least two questions in every prompt to trigger function calling.',
            isCorrect: false,
            explanation:
              'A single question can trigger function calling; two questions are not an API requirement.',
          },
          {
            label: 'B',
            text: 'Confirming the date corresponding to the latest price proves whether the agent fetched live market data via its `get_latest_stock_price` tool rather than relying on frozen training weights.',
            isCorrect: true,
            explanation:
              'Returning both `latest_close` and `latest_date` from `yfinance` verifies that the answer is grounded in live tool execution rather than parametric memory.',
          },
          {
            label: 'C',
            text: 'Because `yfinance` throws a runtime exception if the timestamp column is not printed by the user.',
            isCorrect: false,
            explanation:
              '`yfinance` returns a DataFrame regardless of how the user formats the prompt.',
          },
          {
            label: 'D',
            text: 'To force the model to switch from GPT-4.1 to FinBERT during the second step of the agent loop.',
            isCorrect: false,
            explanation:
              'The agent uses GPT-4.1 for both planning the tool call and synthesizing the final output.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'baaf-ch01-fc1',
        category: 'foundation',
        front: 'What is the core architectural advantage of the Transformer over RNNs and LSTMs for financial texts?',
        back: 'Self-attention weighs the importance of every token relative to all other tokens in parallel regardless of distance, avoiding sequential bottlenecks and vanishing gradients.',
        mentalHook: 'RNN = reading word-by-word through a straw; Transformer = seeing the entire balance sheet at once.',
      },
      {
        id: 'baaf-ch01-fc2',
        category: 'architecture',
        front: 'How does a Mixture-of-Experts (MoE) model balance massive parameter count with fast inference?',
        back: 'A routing mechanism activates only a small subset of specialized expert subnetworks for each token while leaving the remaining parameters inactive.',
        mentalHook: '400B library on the shelf, 17B active specialists at the desk.',
      },
      {
        id: 'baaf-ch01-fc3',
        category: 'evaluation',
        front: 'What specific financial tasks do Financial PhraseBank, FinQA, and ECTSum benchmark?',
        back: 'Financial PhraseBank tests news sentiment classification; FinQA tests multi-step numerical reasoning over financial statements; ECTSum tests concise bullet-point earnings call summarization.',
        mentalHook: 'PhraseBank = Sentiment; FinQA = Math programs; ECTSum = Earnings bullets.',
      },
      {
        id: 'baaf-ch01-fc4',
        category: 'adaptation',
        front: 'How do LoRA and QLoRA reduce the hardware barrier of fine-tuning financial LLMs?',
        back: 'They freeze the vast majority of pretrained weights and update only low-rank adapter matrices (plus quantization in QLoRA) relevant to the target task.',
        mentalHook: 'Train a thin adapter lens instead of rebuilding the whole telescope.',
      },
      {
        id: 'baaf-ch01-fc5',
        category: 'data',
        front: 'Where does single-step RAG fall short compared to an autonomous AI agent?',
        back: 'Standard RAG executes a fixed retrieve-augment-generate pass and cannot decompose multi-stage goals, invoke interactive tools, or adapt its strategy when intermediate steps fail.',
        mentalHook: 'RAG is an open-book exam in one sitting; an Agent is an analyst running an iterative investigation.',
      },
      {
        id: 'baaf-ch01-fc6',
        category: 'architecture',
        front: 'What are the four defining characteristics of an AI agent in finance?',
        back: 'Autonomy (self-directed execution), Adaptability (adjusting strategy on errors/inputs), Interactivity (calling tools and other agents), and Goal-orientation (targeting concrete deliverables).',
        mentalHook: 'AAIG: Autonomous, Adaptive, Interactive, Goal-oriented.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'baaf-ch01-feyn1',
        conceptTitle: 'Prompting vs. Fine-Tuning vs. RAG vs. AI Agents in Finance',
        prompt:
          'Explain to a portfolio manager why you cannot solve every financial AI problem by simply fine-tuning an LLM on historical company data, and walk through when to use Prompting, Fine-Tuning, RAG, or AI Agents.',
        rubricChecklist: [
          'Explains that base LLMs predict tokens from frozen weights up to a fixed cutoff date.',
          'Identifies why fine-tuning (PEFT/LoRA) is static, resource-heavy, and rapidly obsoleted by live market data.',
          'Describes how RAG dynamically chunks, embeds, and injects external documents for single-step grounding.',
          'Distinguishes AI agents by their multi-step planning, live tool calling, and self-correction loop.',
        ],
        modelExplanation:
          'An LLM is a probabilistic engine whose knowledge is frozen at its training cutoff. Prompt engineering (few-shot or Chain-of-Thought) guides how the model formats answers or reasons over data you paste directly into the prompt, but it breaks down when examples overflow the context window. Fine-tuning updates a subset of weights (via LoRA) to teach domain jargon or specific tasks like FinBERT sentiment, but it produces a static snapshot that goes stale the moment market prices or regulations change. RAG solves data freshness for unstructured documents by retrieving relevant vector chunks at query time, yet it only operates in a single pass. When a task requires multi-step planning, live API calls (like pulling current quotes from Yahoo Finance), and self-correction across intermediate results, you need an AI agent.',
      },
      {
        id: 'baaf-ch01-feyn2',
        conceptTitle: 'The Closed-Loop Execution Mechanics of a Tool-Calling Financial Agent',
        prompt:
          'Walk step by step through what happens under the hood when a user asks an OpenAI Agents SDK stock-price agent for today’s date and NVIDIA’s current price, contrasting it with a direct LLM API call.',
        rubricChecklist: [
          'Contrasts the direct LLM call (which hits its June 2024 knowledge cutoff and abstains) with the agent runtime.',
          'Explains how `@function_tool` exposes the Python function schema and docstring to the reasoning model.',
          'Traces the 5-step agent loop: model decides to call tool -> SDK executes `yfinance` -> SDK injects `{price, date}` back into context -> model reasons over the observation -> final output.',
          'Highlights why returning the date alongside the price validates live tool grounding.',
        ],
        modelExplanation:
          'In a non-agentic setup, asking GPT-4.1 for NVIDIA’s current price hits the model’s June 2024 training cutoff, forcing it to decline and point to external websites. In an agentic setup using the OpenAI Agents SDK, we register a Python function decorated with `@function_tool` that queries `yfinance` for the latest 1-day closing price and timestamp. When the user submits the query, the Runner starts a closed loop: first, the LLM recognizes it lacks live market state and emits a tool call for `get_latest_stock_price("NVDA")`. Second, the SDK executes that Python function against Yahoo Finance. Third, the SDK injects the returned `{price, date}` dictionary back into the LLM’s context window. Finally, the LLM reasons over those live observations and outputs the verified price and date.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'baaf-transformer-self-attention',
        label: 'Transformer & Self-Attention',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'Deep neural architecture that weighs pairwise token importance across an entire sequence in parallel to model conditional token probabilities.',
        formulaOrRule: 'P(w_t | w_1, ..., w_{t-1})',
        whyItMatters:
          'Eliminates the vanishing gradients of RNNs/LSTMs and forms the reasoning backbone of modern financial LLMs and agents.',
      },
      {
        id: 'baaf-moe-architecture',
        label: 'Mixture-of-Experts (MoE)',
        category: 'optimization',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Sparse neural architecture combining multiple expert subnetworks with a router that activates only a fraction of parameters per input token.',
        formulaOrRule: 'Active Parameters << Total Parameters (e.g., 17B active / 400B total)',
        whyItMatters:
          'Delivers frontier-scale domain knowledge capacity at the latency and compute cost of a much smaller dense model.',
      },
      {
        id: 'baaf-parametric-cutoff',
        label: 'Parametric Knowledge Cutoff',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The fixed historical boundary of an LLM’s training corpus beyond which the model has zero internal knowledge of market events or prices.',
        whyItMatters:
          'Querying post-cutoff financial state directly from model weights causes hallucinations or abstentions unless mitigated by RAG or live tools.',
      },
      {
        id: 'baaf-peft-lora',
        label: 'PEFT & LoRA Fine-Tuning',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Parameter-Efficient Fine-Tuning method that freezes base model weights and trains compact low-rank adapter matrices on domain-specific supervised tuples.',
        whyItMatters:
          'Adapts general models to specialized financial tasks (like FinBERT sentiment or SEC entity extraction) without full-model GPU retraining.',
      },
      {
        id: 'baaf-rag-pipeline',
        label: 'Retrieval-Augmented Generation (RAG)',
        category: 'data',
        chapterNumber: 1,
        importance: 1,
        definition:
          'Architecture that chunks external documents, indexes vector embeddings, and injects top-k relevant passages into the prompt prior to generation.',
        formulaOrRule: 'Retrieve(Query) -> Augment(Prompt, Chunks) -> Generate(Answer)',
        whyItMatters:
          'Grounds LLM outputs in proprietary and up-to-date financial documents without modifying model weights.',
      },
      {
        id: 'baaf-autonomous-agent-loop',
        label: 'Autonomous AI Agent Loop',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition:
          'Goal-driven runtime system that decomposes tasks, invokes external tools or APIs, observes results, and iteratively refines outputs across multiple steps.',
        formulaOrRule: 'Plan -> Call Tool -> Inject Observation -> Reason -> Output',
        whyItMatters:
          'Pushes past single-step RAG and static weights to execute dynamic, verifiable financial workflows.',
      },
    ],
    edges: [
      {
        source: 'baaf-transformer-self-attention',
        target: 'baaf-moe-architecture',
        relationship: 'prerequisite_for',
        explanation:
          'MoE architectures scale Transformer blocks by replacing dense feed-forward layers with routed expert subnetworks.',
      },
      {
        source: 'baaf-rag-pipeline',
        target: 'baaf-parametric-cutoff',
        relationship: 'mitigates',
        explanation:
          'RAG mitigates parametric knowledge cutoffs and proprietary data blindness by injecting retrieved document chunks into the prompt.',
      },
      {
        source: 'baaf-peft-lora',
        target: 'baaf-rag-pipeline',
        relationship: 'trades_off_with',
        explanation:
          'PEFT bakes static domain behaviors into weights via supervised training, whereas RAG dynamically injects fresh unstructured knowledge at runtime.',
      },
      {
        source: 'baaf-autonomous-agent-loop',
        target: 'baaf-parametric-cutoff',
        relationship: 'mitigates',
        explanation:
          'Autonomous agents bypass frozen training cutoffs by invoking live market APIs (such as yfinance) and feeding observations back into the model.',
      },
      {
        source: 'baaf-rag-pipeline',
        target: 'baaf-autonomous-agent-loop',
        relationship: 'part_of',
        explanation:
          'Multi-step financial agents incorporate RAG as a read-only knowledge retrieval capability alongside live API tools and planning.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 22,
    figuresIncluded: 7,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 1 sections (Transformers, MoE, reasoning vs. non-reasoning, FinLLMs, FinQA/PhraseBank/ECTSum/FiQA benchmarks, Prompting/CoT, PEFT/LoRA, RAG, and OpenAI Agents SDK tool loop) verified with 7 book figures and zero forbidden AI clichés.',
  },
};

export const baafCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Exploring Design Patterns for AI Agents',
  subtitle:
    'Capability, Reasoning, Quality, and Sequential Orchestration Patterns with Context Engineering and Ebbinghaus Memory Management',
  readingTimeMinutes: 8,
  sourceWordCount: 14660,
  executiveThesis:
    'Production financial agents replace ad hoc prompt scripts with four composable pattern layers: capability patterns (tools, working/long-term memory, and RAG) to access state, reasoning patterns (Planning, ReAct, and Self-Consistency) to structure deliberation, quality patterns (Reflection, LLM-as-a-Judge, and Guardrails) to enforce compliance, and orchestration patterns to coordinate specialized multi-agent pipelines within strict token and memory decay bounds.',
  paradigmShift: {
    oldWay:
        'Teams built monolithic, single-agent prompts that stuffed entire chat histories, raw API payloads, and unverified instructions into one brittle context window.',
    newWay:
      'Architects compose modular design patterns—isolating retrieval, analysis, and evaluation across specialized agents backed by tiered memory, schema guardrails, and bounded evaluator–optimizer loops.',
    whyItChanged:
      'In regulated financial workflows, unverified monolithic agents suffer from context window overflow, silent tool-argument errors, and non-deterministic reasoning drift that fail audit and compliance gates.',
  },
  customDiagrams: [
    {
      id: 'baaf-ch02-svg1',
      title: 'The Four-Pillar Financial Agent Design Pattern Taxonomy',
      subtitle:
        'How Capability, Reasoning, Quality, and Orchestration patterns compose with Context & Memory Management',
      bierutCaption:
        'Engineer financial agents as modular systems where Capability supplies state, Reasoning drives action, Quality enforces compliance, and Orchestration isolates context.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <marker id="ch02-arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="32" y="36" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.04em">COMPOSABLE DESIGN PATTERNS FOR PRODUCTION FINANCIAL AGENTS</text>
  <text x="32" y="56" fill="#94a3b8" font-size="12">Four architectural layers governed by dynamic context engineering and long-term memory decay</text>

  <!-- Pillar 1: Capability -->
  <rect x="32" y="78" width="172" height="215" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="46" y="102" fill="#38bdf8" font-size="12" font-weight="700">1. CAPABILITY PATTERNS</text>
  <text x="46" y="118" fill="#94a3b8" font-size="10">What the agent can access</text>
  <rect x="44" y="132" width="148" height="40" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="54" y="149" fill="#e2e8f0" font-size="11" font-weight="600">Tool Use (@function_tool)</text>
  <text x="54" y="164" fill="#94a3b8" font-size="9">FMP ratios, live prices, write APIs</text>
  <rect x="44" y="182" width="148" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="54" y="199" fill="#e2e8f0" font-size="11" font-weight="600">4-Tier Memory System</text>
  <text x="54" y="213" fill="#94a3b8" font-size="9">Working (SQLite) + Episodic,</text>
  <text x="54" y="224" fill="#94a3b8" font-size="9">Semantic &amp; Procedural (Chroma)</text>
  <rect x="44" y="240" width="148" height="40" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="54" y="257" fill="#e2e8f0" font-size="11" font-weight="600">Runtime RAG</text>
  <text x="54" y="272" fill="#94a3b8" font-size="9">Read-only context injection</text>

  <!-- Pillar 2: Reasoning -->
  <rect x="220" y="78" width="172" height="215" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
  <text x="234" y="102" fill="#818cf8" font-size="12" font-weight="700">2. REASONING PATTERNS</text>
  <text x="234" y="118" fill="#94a3b8" font-size="10">How the agent deliberates</text>
  <rect x="232" y="132" width="148" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="242" y="149" fill="#e2e8f0" font-size="11" font-weight="600">Task-Level Planning</text>
  <text x="242" y="163" fill="#94a3b8" font-size="9">Plan-then-Execute, Plan-and-</text>
  <text x="242" y="174" fill="#94a3b8" font-size="9">Execute, Hierarchical</text>
  <rect x="232" y="190" width="148" height="42" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="242" y="207" fill="#e2e8f0" font-size="11" font-weight="600">ReAct Loop</text>
  <text x="242" y="222" fill="#94a3b8" font-size="9">Thought → Action → Observation</text>
  <rect x="232" y="242" width="148" height="40" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="242" y="259" fill="#e2e8f0" font-size="11" font-weight="600">CoT &amp; Self-Consistency</text>
  <text x="242" y="274" fill="#94a3b8" font-size="9">Multi-path majority voting</text>

  <!-- Pillar 3: Quality -->
  <rect x="408" y="78" width="172" height="215" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="422" y="102" fill="#10b981" font-size="12" font-weight="700">3. QUALITY PATTERNS</text>
  <text x="422" y="118" fill="#94a3b8" font-size="10">How outputs are verified</text>
  <rect x="420" y="132" width="148" height="40" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="430" y="149" fill="#e2e8f0" font-size="11" font-weight="600">Self-Reflection</text>
  <text x="430" y="164" fill="#94a3b8" font-size="9">Single-agent critique &amp; revise</text>
  <rect x="420" y="182" width="148" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="430" y="199" fill="#e2e8f0" font-size="11" font-weight="600">LLM-as-a-Judge</text>
  <text x="430" y="213" fill="#94a3b8" font-size="9">Evaluator-Optimizer loop &amp;</text>
  <text x="430" y="224" fill="#94a3b8" font-size="9">RAGAS / DeepEval metrics</text>
  <rect x="420" y="240" width="148" height="40" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="430" y="257" fill="#e2e8f0" font-size="11" font-weight="600">4-Stage Guardrails</text>
  <text x="430" y="272" fill="#94a3b8" font-size="9">Input, Tool, Task, Output gates</text>

  <!-- Pillar 4: Orchestration -->
  <rect x="596" y="78" width="172" height="215" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="610" y="102" fill="#fbbf24" font-size="12" font-weight="700">4. ORCHESTRATION</text>
  <text x="610" y="118" fill="#94a3b8" font-size="10">How specialists coordinate</text>
  <rect x="608" y="132" width="148" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="618" y="149" fill="#e2e8f0" font-size="11" font-weight="600">Sequential Pipeline</text>
  <text x="618" y="163" fill="#94a3b8" font-size="9">Agent 1 (Fetch) → Agent 2</text>
  <text x="618" y="174" fill="#94a3b8" font-size="9">(Analyze) → Agent 3 (Decide)</text>
  <rect x="608" y="190" width="148" height="42" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="618" y="207" fill="#e2e8f0" font-size="11" font-weight="600">JSON Contract Hand-offs</text>
  <text x="618" y="222" fill="#94a3b8" font-size="9">Strict separation of concerns</text>
  <rect x="608" y="242" width="148" height="40" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="618" y="259" fill="#e2e8f0" font-size="11" font-weight="600">Checkpoints &amp; Routing</text>
  <text x="618" y="274" fill="#94a3b8" font-size="9">Deterministic validation gates</text>

  <!-- Connecting Flow Arrows -->
  <path d="M 204 185 L 220 185" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr1)" class="svg-flow-active" />
  <path d="M 392 185 L 408 185" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr1)" class="svg-flow-active" />
  <path d="M 580 185 L 596 185" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr1)" class="svg-flow-active" />

  <!-- Foundation Bar: Context Engineering & Memory Maintenance -->
  <rect x="32" y="314" width="736" height="82" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="48" y="338" fill="#38bdf8" font-size="12" font-weight="700">CROSS-CUTTING INFRASTRUCTURE: CONTEXT ENGINEERING &amp; MEMORY MAINTENANCE</text>
  <text x="48" y="358" fill="#e2e8f0" font-size="11">• Context Compression: Flush working history at 40k-token threshold into Static, Fact-Extraction &amp; Vector blocks</text>
  <text x="48" y="378" fill="#e2e8f0" font-size="11">• Memory Maintenance: Hierarchical MemoryBank summaries + Ebbinghaus time-decay &amp; salience weighting</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Capability & Memory Substrate',
          explanation:
            'Equips the agent with external APIs, session-scoped SQLite working memory, and persistent ChromaDB episodic/semantic/procedural stores.',
        },
        {
          step: '02',
          label: 'Deliberation & Quality Gates',
          explanation:
            'Interleaves Planning and ReAct loops with Self-Consistency voting, Evaluator–Optimizer feedback, and 4-stage Guardrails.',
        },
        {
          step: '03',
          label: 'Context Isolation & Compression',
          explanation:
            'Splits workflows across sequential specialist agents and flushes token overflows (>40K tokens) into structured long-term memory.',
        },
      ],
    },
    {
      id: 'baaf-ch02-svg2',
      title: 'Evaluator–Optimizer Loop & Sequential Multi-Agent Pipeline',
      subtitle:
        'Combining bounded LLM-as-a-Judge refinement (`max_iteration = 4`) with 3-stage fundamental equity orchestration',
      bierutCaption:
        'Bound every iterative critique loop with a hard iteration cap and enforce strict JSON schemas across sequential agent handoffs.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <marker id="ch02-arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="ch02-arr-loop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="32" y="36" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.04em">QUALITY LOOP (EVALUATOR–OPTIMIZER) &amp; SEQUENTIAL ORCHESTRATION</text>
  <text x="32" y="56" fill="#94a3b8" font-size="12">Top: Bounded Reuters News Judge Loop (Lab 5) • Bottom: 3-Agent Equity Recommendation Chain (Lab 6)</text>

  <!-- Top Panel: Evaluator-Optimizer -->
  <rect x="32" y="74" width="736" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="48" y="96" fill="#fbbf24" font-size="12" font-weight="700">PATTERN A: EVALUATOR–OPTIMIZER LOOP (MAX_ITERATION = 4)</text>

  <rect x="48" y="112" width="185" height="62" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="140" y="134" fill="#38bdf8" font-size="11" font-weight="600" text-anchor="middle">Generator: web_news_searcher</text>
  <text x="140" y="150" fill="#e2e8f0" font-size="10" text-anchor="middle">WebSearchTool (Reuters only)</text>
  <text x="140" y="164" fill="#94a3b8" font-size="9" text-anchor="middle">Window: [today - 2d, today]</text>

  <path d="M 233 135 L 305 135" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr2)" class="svg-flow-active" />

  <rect x="310" y="112" width="215" height="62" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="417" y="134" fill="#fbbf24" font-size="11" font-weight="600" text-anchor="middle">Judge: news_evaluator</text>
  <text x="417" y="150" fill="#e2e8f0" font-size="10" text-anchor="middle">Checks: N links, dates, region</text>
  <text x="417" y="164" fill="#94a3b8" font-size="9" text-anchor="middle">Output: EvaluationFeedback dataclass</text>

  <path d="M 525 135 L 585 135" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr2)" class="svg-flow-active" />

  <rect x="590" y="112" width="160" height="62" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="670" y="134" fill="#ecfdf5" font-size="11" font-weight="700" text-anchor="middle">Gate: score == "successful"</text>
  <text x="670" y="150" fill="#6ee7b7" font-size="10" text-anchor="middle">Break &amp; Emit Summary</text>
  <text x="670" y="164" fill="#94a3b8" font-size="9" text-anchor="middle">Or halt at nbr_iterations &gt; 4</text>

  <!-- Feedback Loop back to Generator -->
  <path d="M 417 174 L 417 204 L 140 204 L 140 178" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#ch02-arr-loop)" class="svg-flow-active" />
  <text x="278" y="198" fill="#fbbf24" font-size="10" text-anchor="middle">score == "unsuccessful" → Append result.feedback &amp; re-query</text>

  <!-- Bottom Panel: Sequential Multi-Agent Pipeline -->
  <rect x="32" y="238" width="736" height="156" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="48" y="262" fill="#6ee7b7" font-size="12" font-weight="700">PATTERN B: SEQUENTIAL MULTI-AGENT EQUITY PIPELINE (AAPL FUNDAMENTALS)</text>

  <rect x="48" y="280" width="205" height="92" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="150" y="302" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">Agent 1: Retrieval Agent</text>
  <text x="150" y="320" fill="#e2e8f0" font-size="10" text-anchor="middle">Tool: FinanceToolkit (FMP API)</text>
  <text x="150" y="336" fill="#94a3b8" font-size="9" text-anchor="middle">ROE: 1.714 | Net Margin: 26.9%</text>
  <text x="150" y="350" fill="#94a3b8" font-size="9" text-anchor="middle">P/E: 36.42 | EV/EBITDA: 28.73</text>
  <text x="150" y="364" fill="#38bdf8" font-size="9" text-anchor="middle">Strict factual JSON (0 interpretation)</text>

  <path d="M 253 326 L 292 326" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr2)" class="svg-flow-active" />

  <rect x="297" y="280" width="205" height="92" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="400" y="302" fill="#818cf8" font-size="11" font-weight="700" text-anchor="middle">Agent 2: Analysis Agent</text>
  <text x="400" y="320" fill="#e2e8f0" font-size="10" text-anchor="middle">Consumes Agent 1 JSON</text>
  <text x="400" y="336" fill="#94a3b8" font-size="9" text-anchor="middle">Profitability: "strong" (evidence[])</text>
  <text x="400" y="350" fill="#94a3b8" font-size="9" text-anchor="middle">Valuation: "expensive" (P/E, P/B)</text>
  <text x="400" y="364" fill="#818cf8" font-size="9" text-anchor="middle">Extracts 2–3 structured risks[]</text>

  <path d="M 502 326 L 541 326" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02-arr2)" class="svg-flow-active" />

  <rect x="546" y="280" width="205" height="92" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="648" y="302" fill="#ecfdf5" font-size="11" font-weight="700" text-anchor="middle">Agent 3: Decision Agent</text>
  <text x="648" y="320" fill="#6ee7b7" font-size="10" text-anchor="middle">Stance: "HOLD" (AAPL)</text>
  <text x="648" y="336" fill="#e2e8f0" font-size="9" text-anchor="middle">3 grounded reasons[]</text>
  <text x="648" y="350" fill="#e2e8f0" font-size="9" text-anchor="middle">Actionable watchlist[] triggers</text>
  <text x="648" y="364" fill="#6ee7b7" font-size="9" text-anchor="middle">(e.g. Margin &lt; 25% or P/E drop)</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Typed Evaluator–Optimizer Gate',
          explanation:
            'The `news_evaluator` returns an `EvaluationFeedback` dataclass (`score: Literal["successful", "unsuccessful"]`), driving iterative repair up to `max_iteration = 4`.',
        },
        {
          step: '02',
          label: 'Factual Retrieval Isolation',
          explanation:
            'Agent 1 calls Financial Modeling Prep via `financetoolkit` and emits raw profitability and valuation ratios with zero qualitative bias.',
        },
        {
          step: '03',
          label: 'Separated Analysis & Watchlist Decision',
          explanation:
            'Agent 2 rates dimensions and risks, while Agent 3 synthesizes a `HOLD` stance with explicit metric thresholds that would flip the rating.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'baaf-ch02-mm1',
      name: 'The Four-Tier Cognitive Memory Hierarchy',
      tagline: 'Separate ephemeral session state from persistent experience, domain rules, and action playbooks.',
      naiveIntuition:
        'Memory in an AI agent simply means appending the entire raw chat transcript to the prompt on every turn.',
      firstPrinciplesReality:
        'Effective agents partition state into short-term Working Memory (session-scoped scratchpad like `SQLiteSession`) and three external Long-Term stores: Episodic (past task trajectories and what worked/failed), Semantic (domain facts and risk caps), and Procedural (reusable step-by-step workflows).',
      howToApply:
        'Store active multi-turn portfolio state in `SQLiteSession`, distill completed sessions into JSON episodes embedded in ChromaDB, and retrieve only top-k relevant episodes or procedural checklists per step.',
    },
    {
      id: 'baaf-ch02-mm2',
      name: 'Context Engineering vs. Prompt Engineering',
      tagline: 'Prompt engineering writes static instructions; context engineering dynamically curates the runtime token budget.',
      naiveIntuition:
        'If an agent makes a mistake in a 10-step workflow, the fix is to write a longer, more detailed system prompt.',
      firstPrinciplesReality:
        'Multi-step tool outputs, RAG chunks, and reasoning traces rapidly saturate the context window; performance depends on dynamically selecting, isolating, and compressing only the state needed for the current step.',
      howToApply:
        'Enforce context isolation via specialized multi-agent handoffs and configure automatic context compression (flushing working history to static, fact-extraction, and vector long-term blocks at a 40K-token threshold).',
    },
    {
      id: 'baaf-ch02-mm3',
      name: 'Orthogonal Verification (Evaluator–Optimizer & 4-Layer Guardrails)',
      tagline: 'Never trust a single unconstrained generation pass for compliance-critical financial outputs.',
      naiveIntuition:
        'Instructing a search agent in its system prompt to "never hallucinate links and only use articles from the last 48 hours" guarantees compliance.',
      firstPrinciplesReality:
        'Generators routinely violate multi-constraint instructions under noisy web search outputs; decoupling generation from a dedicated judge agent with a typed schema and hard iteration cap catches violations deterministically.',
      howToApply:
        'Pair generator agents with an `EvaluationFeedback` judge loop bounded by `max_iteration`, and wrap workflows in Input, Tool, Task, and Output guardrails.',
    },
  ],
  deepSections: [
    {
      id: 'baaf-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Capability Patterns: Deterministic Tool Use, 4-Tier Memory & Agentic RAG',
      subtitle:
        'Connecting financial APIs, persisting SQLite working sessions, and embedding episodic trajectories into ChromaDB',
      coreMechanism:
        'Capability patterns define how an agent interacts with external state and retains continuity across time. Tool use delegates deterministic operations—such as pulling profitability, valuation, and liquidity ratios via `financetoolkit` and the Financial Modeling Prep API—to typed functions so the LLM never guesses numerical figures. Memory patterns preserve state across turns and sessions: short-term working memory (implemented via `SQLiteSession` in the OpenAI Agents SDK) acts as a trader’s intraday scratchpad for active portfolio weights and constraints, clearing when the session ends.\n\nLong-term memory persists externally across sessions in three distinct forms: episodic memory (past task trajectories, conversation summaries, `what_worked`, and `what_didnt_work` embedded into ChromaDB via `text-embedding-3-small`), semantic memory (stable domain rules, instrument definitions, and sector exposure caps), and procedural memory (reusable step-by-step routines like KYC or underwriting checklists). Within an agent, RAG operates as a read-only retrieval mechanism that queries external documents or long-term memory stores to inject relevant context at runtime, whereas tools can both read and write state to external systems.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Maintain Intraday State in Working Memory',
          detail:
            'Pass `session=SQLiteSession(session_id)` into `Runner.run()` so follow-up rebalancing instructions reference initial portfolio weights (`{"stocks": 0.70, "bonds": 0.20, "cash": 0.10}`).',
        },
        {
          step: '02',
          title: 'Distill & Dual-Index Episodic Trajectories',
          detail:
            'At session end, prompt an LLM to extract a JSON episode (`conversation_summary`, `portfolio_allocation_trajectory`, `what_worked`, `what_didnt_work`, `key_points`) and store both formatted text and metadata in ChromaDB.',
        },
        {
          step: '03',
          title: 'Inject Past Episodes via Similarity Search',
          detail:
            'On new sessions, query `collection.query(query_texts=[input_user_init], n_results=3)` to retrieve semantically similar market regimes and inject those lessons as guidance into the prompt.',
        },
      ],
      formulas: [
        {
          name: 'Corporate Liquidity Ratios (Tool Use Verification)',
          expression:
            '\\text{CR} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}, \\quad \\text{QR} = \\frac{\\text{Current Assets} - \\text{Inventory}}{\\text{Current Liabilities}}, \\quad \\text{Cash Ratio} = \\frac{\\text{Cash \\& Equivalents}}{\\text{Current Liabilities}}',
          intuition:
            'Liquidity ratios measure a firm’s capacity to cover short-term obligations with progressively stricter definitions of liquid assets; tool use retrieves exact balance-sheet ratios while the LLM interprets solvency implications.',
          variables: [
            {
              symbol: '\\text{CR}',
              meaning: 'Current Ratio comparing total current assets to current liabilities',
            },
            {
              symbol: '\\text{QR}',
              meaning: 'Quick Ratio stripping out inventory to test immediate liquid coverage',
            },
            {
              symbol: '\\text{Cash Ratio}',
              meaning: 'Conservative liquidity metric measuring coverage strictly from cash and equivalents',
            },
          ],
          workedExample:
            'For Apple (FY 2025 via Financial Modeling Prep), the tool returns CR = 0.8933, QR = 0.5704, and Cash Ratio = 0.3302; all three sit below 1.0, signaling reliance on operating cash flow and inventory turnover to cover short-term liabilities.',
        },
      ],
      keyTakeaways: [
        'Storing episodic memory in ChromaDB as both embedded `documents` and structured `metadatas` enables hybrid semantic vector lookup and metadata filtering.',
        'Procedural memory learned automatically from repeated agent runs risks reinforcing suboptimal routines unless audited against documented firm playbooks.',
        'RAG temporarily augments the active reasoning context without mutating external state, whereas tools can execute stateful writes to databases and memory stores.',
      ],
      commonPitfalls: [
        'Running multiple hands-on agent labs in a single shared notebook session, which silently rebinds tool and variable names across experiments.',
        'Treating retrieved episodic memories as rigid rules rather than contextual guidance when market volatility regimes shift.',
      ],
      figures: [
        {
          file: 'B32414_2_1.png',
          originalLabel: "Figure 2.1 – AI Agent's Core Design Patterns",
          bierutTitle: 'Organize Agent Engineering into Capability, Reasoning, Quality, and Orchestration Pillars',
          editorialAnalysis:
            'This master taxonomy maps the four pattern families that transform raw LLMs into auditable financial systems: Capability (Tool Use, Memory, RAG), Reasoning (Planning, ReAct, CoT, Self-Consistency), Quality (Reflection, LLM-as-a-Judge, Guardrails), and Orchestration.',
          keyTakeaways: [
            'Production reliability comes from composing orthogonal design patterns rather than tuning a single monolith prompt.',
            'Each pattern layer solves a distinct failure mode in financial decision-making.',
          ],
        },
        {
          file: 'B32414_2_3.png',
          originalLabel: 'Figure 2.3 – Working memory in AI agents',
          bierutTitle: 'Use Working Memory as an Ephemeral Session Scratchpad for Multi-Turn Coherence',
          editorialAnalysis:
            'The diagram shows how working memory aggregates user queries, intermediate reasoning traces, and tool observations during an active run before clearing at session termination.',
          keyTakeaways: [
            'Without working memory, an agent loses initial portfolio weights on follow-up user constraints.',
            '`SQLiteSession` persists multi-turn history in memory by default or on disk when given a database file path.',
          ],
        },
        {
          file: 'B32414_2_4.png',
          originalLabel: 'Figure 2.4 – Episodic memory in AI agents',
          bierutTitle: 'Persist Full Task Trajectories and Post-Mortem Insights into Long-Term Episodic Storage',
          editorialAnalysis:
            'Episodic memory captures the sequence of actions, user feedback adjustments, and outcomes from working memory and writes them to an external vector database for cross-session retrieval.',
          keyTakeaways: [
            'Recording both `what_worked` and `what_didnt_work` prevents the agent from repeating failed rebalancing heuristics.',
            'Vector similarity search retrieves relevant past episodes even when phrased differently.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Reasoning & Quality Patterns: Planning, ReAct, Self-Consistency, Judge Loops & Guardrails',
      subtitle:
        'Structuring task decomposition, interleaving Thought-Action-Observation, voting across reasoning paths, and enforcing safety boundaries',
      coreMechanism:
        'Reasoning patterns govern how an agent deliberates at both the task level and the thought level. Task-level planning decomposes complex financial goals through five variants: Plan-then-Execute (generating a complete upfront plan before sequential execution), Plan-and-Execute (interleaving partial planning with observational plan revisions), Hierarchical Planning (cascading strategic goals into tactical and operational sub-plans), Planning + ReAct, and Planning + Reflection. ReAct (Reasoning + Acting) interleaves explicit `[Thought -> Action -> Observation]` cycles so each API result informs the next reasoning trace. At the thought level, Chain-of-Thought (CoT) and Self-Consistency sample multiple diverse reasoning paths (via temperature, top-k, or nucleus sampling) and select the final classification by majority vote.\n\nQuality patterns validate and constrain outputs before delivery. Reflection performs single-agent self-critique, whereas LLM-as-a-Judge separates generation from evaluation via either metric frameworks (RAGAS, DeepEval) or an Evaluator–Optimizer loop where a dedicated judge agent scores outputs (`Literal["successful", "unsuccessful"]`) up to a hard `max_iteration` cap. Finally, four guardrail layers—Input, Tool, Task, and Output—block out-of-scope requests, invalid tool arguments, corrupt intermediate handoffs, and confidential data leaks.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Interleave ReAct Thought-Action-Observation',
          detail:
            'Use LlamaIndex `ReActAgent` to emit an explicit `Thought`, invoke `FunctionTool` (`get_latest_price`), capture the timestamped price observation, and synthesize the verified answer.',
        },
        {
          step: '02',
          title: 'Aggregate Self-Consistency Reasoning Paths',
          detail:
            'Sample multiple CoT traces evaluating an earnings release across EPS beat, revenue growth, margin trend, guidance, and leadership stability, then return the majority-vote classification.',
        },
        {
          step: '03',
          title: 'Enforce Bounded Evaluator–Optimizer Loops',
          detail:
            'Pair `web_news_searcher` with `news_evaluator` returning an `EvaluationFeedback` dataclass to verify Reuters URLs, 48-hour recency, and region match within `max_iteration = 4`.',
        },
      ],
      formulas: [
        {
          name: 'Self-Consistency Majority Voting Rule',
          expression:
            '\\hat{y} = \\arg\\max_{y \\in \\mathcal{Y}} \\sum_{i=1}^{m} \\mathbb{I}(y_i = y), \\quad r_i \\sim P_{\\theta}(r \\mid x; T, k, p)',
          intuition:
            'Sampling m diverse Chain-of-Thought reasoning traces r_i and taking the majority vote over their terminal conclusions y_i prevents a single brittle line of thought from skewing high-stakes financial classifications.',
          variables: [
            {
              symbol: 'm',
              meaning: 'Total number of diverse reasoning paths sampled from the LLM',
            },
            {
              symbol: 'r_i, y_i',
              meaning: 'The i-th intermediate reasoning chain and its resulting classification label',
            },
            {
              symbol: '\\mathbb{I}(y_i = y)',
              meaning: 'Indicator function equal to 1 when path i concludes label y, and 0 otherwise',
            },
          ],
          workedExample:
            'When classifying an earnings report (Reported EPS $1.25 vs. Consensus $1.20), sampling m = 5 CoT paths yields 3 "Positive surprise" votes and 2 "Neutral surprise" votes; majority voting selects "Positive surprise" (3/5 = 60%).',
        },
      ],
      keyTakeaways: [
        'Plan-then-Execute works for predictable calculations (like 20-day moving average trend labeling), whereas Plan-and-Execute or Planning + ReAct is required when intermediate financial ratios reveal unexpected debt spikes.',
        'ReAct makes every reasoning trace and tool call observable, pinpointing whether an error originated in the LLM’s logic or the external API payload.',
        'Combining Input, Tool, Task, and Output guardrails stops out-of-scope queries early (saving tokens) and prevents PII or invalid API arguments from executing.',
      ],
      commonPitfalls: [
        'Running an Evaluator–Optimizer loop without a `max_iteration` termination cap, risking infinite token burn when external news sources lack enough qualifying articles.',
        'Relying on a single CoT path when conflicting financial signals (e.g., an EPS beat paired with declining margins and a CEO departure) require multi-path self-consistency.',
      ],
      figures: [
        {
          file: 'B32414_2_7.png',
          originalLabel:
            'Figure 2.7 – ReAct reasoning paradigm. The agent generates a reasoning trace, takes an action, and collects the results as observations.',
          bierutTitle: 'Interleave Reasoning Traces with Live Environment Observations via the ReAct Loop',
          editorialAnalysis:
            'The loop diagram illustrates how ReAct alternates between internal Thought generation, external tool Action execution, and Observation capture, feeding each observation directly into the next reasoning step.',
          keyTakeaways: [
            'Observations dynamically update the context window before the next action is selected.',
            'Explicit Thought-Action-Observation traces provide full auditability for compliance debugging.',
          ],
        },
        {
          file: 'B32414_2_9.png',
          originalLabel: 'Figure 2.9 – Evaluator–optimizer (LLM-as-a-judge)',
          bierutTitle: 'Decouple Generation from Critique in an Iterative Evaluator–Optimizer Loop',
          editorialAnalysis:
            'Unlike single-agent reflection, the Evaluator–Optimizer pattern assigns a dedicated Judge agent to audit the Generator’s output against explicit criteria and return structured refinement feedback until convergence.',
          keyTakeaways: [
            'Separate system prompts and structured output schemas (`EvaluationFeedback`) enforce strict verification.',
            'Always pair the convergence check (`score == "successful"`) with a hard iteration ceiling.',
          ],
        },
        {
          file: 'B32414_2_11.png',
          originalLabel: 'Figure 2.11 – Guardrails applied at the input and output stages of a multi-agent workflow',
          bierutTitle: 'Bracket Multi-Agent Workflows with Deterministic Input and Output Guardrails',
          editorialAnalysis:
            'The architectural schematic demonstrates how input guardrails reject out-of-scope user prompts prior to agent execution while output guardrails filter sensitive client data before delivery.',
          keyTakeaways: [
            'Input guardrails prevent token waste on off-topic queries (e.g., price requests sent to a fundamentals-only agent).',
            'Tool and task guardrails validate function arguments and intermediate step outputs across frameworks like Google ADK and CrewAI.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch02-sec3',
      sectionNumber: '2.3',
      title: 'Sequential Multi-Agent Orchestration, Context Engineering & Memory Decay',
      subtitle:
        'Chaining specialized JSON agents, compressing 40K-token contexts, and governing long-term memory via Ebbinghaus forgetting curves',
      coreMechanism:
        'Sequential multi-agent orchestration decomposes a complex workflow into an ordered pipeline of specialized agents where each stage emits a strict JSON contract consumed by the next stage. In equity fundamental analysis, Agent 1 (`Fundamental Retrieval Agent`) invokes `financetoolkit` to output strictly factual profitability and valuation ratios; Agent 2 (`Fundamental Analysis Agent`) rates profitability (`strong|neutral|weak`) and valuation (`cheap|fair|expensive`) with evidence and risks; and Agent 3 (`Decision Agent`) issues a `BUY|HOLD|SELL` stance with three grounded reasons and a metric `watchlist`. Separating retrieval, interpretation, and decision-making prevents qualitative hallucinations from contaminating raw financial numbers.\n\nScaling multi-step agents requires disciplined context engineering and memory maintenance. Because interleaved tool payloads and RAG chunks quickly overflow context limits, engineers apply context isolation (scoping tools and state per specialist agent) and context compression (flushing short-term chat history at thresholds like 40K tokens into static, fact-extraction, and vector long-term blocks). To prevent long-term episodic stores from accumulating stale noise, frameworks like MemoryBank organize hierarchical summaries (timestamped turns -> daily summaries -> global summaries + explicit user portraits) and apply Ebbinghaus time-based decay and salience weighting so unreinforced memories fade while frequently recalled insights persist.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Enforce Stage-Gate JSON Contracts',
          detail:
            'Chain `fundamental_retrieval_agent` -> `fundamental_analysis_agent` -> `decision_agent`, passing structured JSON strings so each specialist operates on an isolated, verifiable payload.',
        },
        {
          step: '02',
          title: 'Compress & Flush Context at Token Thresholds',
          detail:
            'Monitor active token usage across the 8 context elements and flush older interactions into Static, Fact-Extraction, and Vector memory blocks once the 40K-token threshold is reached.',
        },
        {
          step: '03',
          title: 'Regulate Episodic Store with Decay & Salience',
          detail:
            'Assign memory strength scores that decay over time unless reinforced by retrieval, while weighting high-salience financial events to persist longer.',
        },
      ],
      formulas: [
        {
          name: 'Ebbinghaus Memory Retention & Reinforcement Decay',
          expression: 'R(t) = \\exp\\left(-\\frac{t}{S(k, w_{\\text{salience}})}\\right)',
          intuition:
            'Long-term episodic memory strength decays exponentially over elapsed time t unless reinforced by k successful recalls or weighted by high event salience, preventing stale market episodes from polluting vector retrieval.',
          variables: [
            {
              symbol: 'R(t)',
              meaning: 'Retention strength of an episodic memory trace after elapsed time t',
            },
            {
              symbol: 't',
              meaning: 'Time elapsed since the memory episode was created or last retrieved',
            },
            {
              symbol: 'S(k, w_{\\text{salience}})',
              meaning: 'Memory stability score that increases with recall count k and salience weight',
            },
          ],
          workedExample:
            'A routine intraday query episode with zero subsequent recalls (k = 0) decays below the retrieval threshold within days, whereas a major portfolio risk limit constraint recalled across k = 6 sessions increases stability S and persists across quarters.',
        },
      ],
      keyTakeaways: [
        'Sequential orchestration exposes when an LLM sneaks parametric priors into analysis (e.g., citing "market competition" when instructed to evaluate financial ratios), allowing targeted prompt tightening.',
        'Workflow engineering (as in LlamaIndex) optimizes token budgets by deciding explicitly which steps require LLM reasoning and which steps should run as deterministic code.',
        'User portraits in financial memory systems (such as Mem0 or Letta) must remain explicit and user-correctable rather than inferring psychological mood.',
      ],
      commonPitfalls: [
        'Passing the entire unfiltered global conversation history to every sub-agent in a multi-agent system instead of isolating only the JSON state needed for that agent’s role.',
        'Allowing episodic vector databases to grow unbounded without time decay or salience pruning, which degrades retrieval precision with outdated market regimes.',
      ],
      figures: [
        {
          file: 'B32414_2_12.png',
          originalLabel: 'Figure 2.12 – Sequential multi-agent orchestration',
          bierutTitle: 'Chain Specialized Agents Through Deterministic Checkpoints and JSON Contracts',
          editorialAnalysis:
            'The pipeline diagram shows how a complex task is decomposed into ordered agent stages augmented by external tools and intermediate programmatic validation checkpoints.',
          keyTakeaways: [
            'The output of Agent N forms the strict schema-validated input of Agent N+1.',
            'Intermediate checkpoints can halt execution immediately if a data or compliance constraint fails.',
          ],
        },
        {
          file: 'B32414_2_13.png',
          originalLabel: 'Figure 2.13 – Core components of the context',
          bierutTitle: 'Audit All Eight Inputs Competing for the Active Context Window Budget',
          editorialAnalysis:
            'This structural breakdown identifies the eight distinct payloads that converge inside an agent’s context window: user input, identity/system prompt, tool schemas, memory, external knowledge, multi-agent metadata, shared JSON state, and planning traces.',
          keyTakeaways: [
            'Context engineering curates all eight runtime inputs, whereas prompt engineering only edits static instructions.',
            'Unchecked growth across tool outputs and reasoning traces rapidly exhausts token budgets.',
          ],
        },
        {
          file: 'B32414_2_14.png',
          originalLabel:
            'Figure 2.14 – Context summarization and long-term memory storage when the 40k-token threshold is reached',
          bierutTitle: 'Flush Short-Term Token Overflows into Static, Fact-Extraction, and Vector Memory Blocks',
          editorialAnalysis:
            'Illustrating the LlamaIndex context compression mechanism, this diagram shows how hitting a 40K-token ceiling triggers automatic summarization and flushes older working turns into three structured long-term memory stores.',
          keyTakeaways: [
            'Threshold-triggered flushing prevents context window overflow during long multi-turn investigations.',
            'Partitioning long-term storage into Static, Fact-Extraction, and Vector blocks preserves both exact constraints and semantic searchability.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Agentic Memory, Planning & Quality Pattern Trade-Off Matrix',
      description:
        'Selecting the right architectural pattern across memory persistence, task-level planning, and output verification for financial workflows.',
      headers: [
        'Pattern Category & Variant',
        'State / Execution Mechanism',
        'Latency & Token Overhead',
        'Adaptability to Surprises',
        'Auditability & Governance',
        'Optimal Financial Use Case',
      ],
      rows: [
        [
          'Working Memory (SQLiteSession)',
          'In-memory or disk-backed session turn history',
          'Low (grows linearly until flushed)',
          'High within current session only',
          'Full turn-by-turn session transcript',
          'Multi-turn intraday portfolio rebalancing dialog',
        ],
        [
          'Episodic / Semantic / Procedural LTM',
          'External vector DB (Chroma) + metadata + decay',
          'Moderate (LLM extraction + embedding + query)',
          'High across recurring sessions',
          'High when paired with explicit user portraits',
          'Retaining client risk constraints, KYC routines, and past trade post-mortems',
        ],
        [
          'Plan-then-Execute',
          'Generates full upfront plan before running steps',
          'Low-to-Moderate (1 planning pass + steps)',
          'Low (brittle if step 1 reveals unexpected data)',
          'High (complete plan inspectable before execution)',
          'Calculating 20-day moving average trend labels on historical prices',
        ],
        [
          'Planning + ReAct',
          'High-level plan with Thought-Action-Observe loops per step',
          'High (multiple LLM calls per planned step)',
          'Very High (revises plan on unexpected debt/margin signals)',
          'High (explicit Thought and Observation logs)',
          'Deep corporate due diligence where ratio anomalies trigger cash-flow probes',
        ],
        [
          'Evaluator–Optimizer (LLM-as-a-Judge)',
          'Generator paired with separate Judge agent + max_iteration cap',
          'High (up to 2 × N iterations of LLM calls)',
          'High (iteratively repairs missing links or dates)',
          'Very High (typed EvaluationFeedback score + rationale)',
          'Verifying Reuters source links, 48-hour recency, and region compliance',
        ],
      ],
      verdictRule:
        'Use Plan-then-Execute with Working Memory for predictable, single-session workflows; upgrade to Planning + ReAct, Episodic ChromaDB memory, and bounded Evaluator–Optimizer loops when financial data anomalies or strict citation compliance require runtime adaptation and verification.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'baaf-ch02-scen1',
      title: 'Enforcing Verifiable Reuters Citations with a Bounded Evaluator–Optimizer Loop',
      roleAndContext:
        ' Quantitative Research Engineer building a regional macro news monitor for a European fixed-income desk.',
      symptomOrFailure:
        'A single `web_news_searcher` agent instructed to return 5 Eurozone Reuters articles from the last 48 hours frequently returns undated summaries, non-Reuters links, or articles from three weeks ago.',
      naiveFixAndWhyItFails:
        'Adding emphatic capitalization ("THIS IS IMPORTANT: DO NOT HALLUCINATE LINKS") to the generator prompt still lets stale or unlinked items slip through when web search results are noisy.',
      firstPrinciplesSolution:
        'Pair `web_news_searcher` with a dedicated `news_evaluator` agent outputting a typed `EvaluationFeedback(feedback: str, score: Literal["successful", "unsuccessful"])` dataclass inside a `while True` loop capped at `max_iteration = 4` that feeds specific missing-link or date errors back to the searcher.',
      measurableOutcome:
        '100% of accepted summaries contain exact publication dates within `[today - 2d, today]` and verified `reuters.com` URLs for all requested items, halting safely within 4 iterations.',
    },
    {
      id: 'baaf-ch02-scen2',
      title: 'Preventing Qualitative Contamination in Equity Recommendations via Sequential Isolation',
      roleAndContext:
        'Equity Research Platform Lead automating fundamental Buy/Hold/Sell screening across S&P 500 tickers.',
      symptomOrFailure:
        'A monolithic agent tasked with pulling ratios, analyzing margins, and issuing a rating mixes pretraining rumors about Apple’s product competition into the raw financial ratio table and omits clear criteria for what would change its rating.',
      naiveFixAndWhyItFails:
        'Asking the single agent to "be objective and show your numbers" fails to isolate raw API extraction from qualitative LLM inference and bloats a single context window.',
      firstPrinciplesSolution:
        'Decompose the workflow into a 3-agent sequential pipeline: Agent 1 (`Fundamental Retrieval Agent`) calls `financetoolkit` and outputs strictly factual JSON ratios; Agent 2 (`Fundamental Analysis Agent`) rates profitability (`strong`) and valuation (`expensive` at P/E 36.42) with evidence; Agent 3 (`Decision Agent`) synthesizes a `HOLD` stance with 3 reasons and an explicit metric `watchlist` (e.g., Net Profit Margin < 25%).',
      measurableOutcome:
        'Zero distortion of raw FMP financial ratios, transparent separation between ratio evidence and qualitative risks, and deterministic watchlist thresholds for every recommendation.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'baaf-ch02-q1',
        scenarioPrompt:
          'A portfolio rebalancing agent is asked across multiple sessions to adjust asset weights. The team wants the agent to recall past rebalancing trajectories (including `what_worked` and `what_didnt_work`), enforce a firm-wide rule capping equity exposure at 75%, and follow a standardized 5-step risk-scoring sequence. How do these three requirements map to long-term memory types?',
        options: [
          {
            label: 'A',
            text: 'All three belong in Short-Term Working Memory (`SQLiteSession`) because they are used during execution.',
            isCorrect: false,
            explanation:
              'Working memory is temporary session state; persistent cross-session rules, trajectories, and workflows belong in long-term memory.',
          },
          {
            label: 'B',
            text: 'Past rebalancing trajectories belong in Episodic memory; the 75% equity cap belongs in Semantic memory; the 5-step risk-scoring sequence belongs in Procedural memory.',
            isCorrect: true,
            explanation:
              'Episodic memory stores past experiences/trajectories, Semantic memory stores factual domain rules and constraints, and Procedural memory encodes reusable step-by-step workflows.',
          },
          {
            label: 'C',
            text: 'Past trajectories belong in Procedural memory; the 75% cap belongs in Episodic memory; the 5-step workflow belongs in Semantic memory.',
            isCorrect: false,
            explanation:
              'This reverses the definitions of Episodic (experiences), Semantic (facts/rules), and Procedural (how-to routines) memory.',
          },
          {
            label: 'D',
            text: 'They can only be stored via LoRA fine-tuning because vector databases cannot store JSON metadata.',
            isCorrect: false,
            explanation:
              'ChromaDB explicitly stores both embedded document text and JSON-serializable `metadatas` for long-term memory retrieval.',
          },
        ],
      },
      {
        id: 'baaf-ch02-q2',
        scenarioPrompt:
          'In Chapter 2 Lab 1, the `Fundamental Retrieval Agent` invokes `get_company_fundamentals("AAPL")` for FY 2025 and retrieves Current Ratio = 0.8933, Quick Ratio = 0.5704, and Cash Ratio = 0.3302. What is the exact division of labor between the tool and the LLM in this pattern?',
        options: [
          {
            label: 'A',
            text: 'The LLM calculates the ratios from its pretraining weights, and the tool formats them into Markdown.',
            isCorrect: false,
            explanation:
              'Relying on LLM weights for 2025 ratios would fail due to the knowledge cutoff; the tool fetches and filters the exact numbers.',
          },
          {
            label: 'B',
            text: 'The tool deterministically retrieves and filters the authoritative 2025 ratios from Financial Modeling Prep via `financetoolkit`, while the LLM interprets their significance (explaining that values below 1.0 indicate reliance on inventory and cash flow for short-term obligations).',
            isCorrect: true,
            explanation:
              'Tool use grounds the numerical figures in an authoritative external API, while the LLM provides structured financial interpretation.',
          },
          {
            label: 'C',
            text: 'Both the numerical figures and the interpretation are returned verbatim by the Financial Modeling Prep API.',
            isCorrect: false,
            explanation:
              'The API returns only numerical DataFrames; the significance commentary is generated by the LLM.',
          },
          {
            label: 'D',
            text: 'The tool writes the liquidity ratios directly into the LLM’s neural weights via PEFT.',
            isCorrect: false,
            explanation:
              'Tool use injects results into the runtime context window without modifying model weights.',
          },
        ],
      },
      {
        id: 'baaf-ch02-q3',
        scenarioPrompt:
          'An analyst designs an agent to evaluate a company’s investment merit. Halfway through analyzing profitability ratios, the agent observes an unexpected spike in short-term debt that was not anticipated in its initial steps, requiring it to insert a new cash-flow sustainability investigation. Which planning pattern is specifically designed for this scenario?',
        options: [
          {
            label: 'A',
            text: 'Strict Plan-then-Execute with zero reasoning during execution.',
            isCorrect: false,
            explanation:
              'Plan-then-Execute locks in the full plan upfront and executes sequentially with minimal reasoning, making it brittle when unexpected findings emerge mid-run.',
          },
          {
            label: 'B',
            text: 'Plan-and-Execute or Planning + ReAct, where an initial high-level plan is iteratively revised based on intermediate tool observations.',
            isCorrect: true,
            explanation:
              'Plan-and-Execute and Planning + ReAct explicitly observe intermediate results (such as a debt spike) and dynamically refine the remaining plan steps.',
          },
          {
            label: 'C',
            text: 'Input Guardrails.',
            isCorrect: false,
            explanation:
              'Input guardrails validate the initial user prompt before execution begins, not mid-run plan revisions.',
          },
          {
            label: 'D',
            text: 'Static Context Compression at the 40K-token limit.',
            isCorrect: false,
            explanation:
              'Context compression manages token window capacity rather than dynamic task re-planning.',
          },
        ],
      },
      {
        id: 'baaf-ch02-q4',
        scenarioPrompt:
          'When inspecting the output of the `Fundamental Analysis Agent` (Agent 2) in the Chapter 2 sequential equity lab, the author notes that the third risk listed—"Market competition impacting future growth"—differs from the valuation and margin risks. Why does this occur, and how should an engineer control it?',
        options: [
          {
            label: 'A',
            text: 'It is a bug in the `financetoolkit` Python library that injects text strings into the P/E ratio column.',
            isCorrect: false,
            explanation:
              '`financetoolkit` returns strictly numerical ratio DataFrames.',
          },
          {
            label: 'B',
            text: 'Unlike the P/E and margin risks derived strictly from Agent 1’s JSON ratios, "market competition" leaks from the LLM’s parametric knowledge of Apple; it can be controlled by tightening prompt instructions to require strictly ratio-derived risks or by grounding competitive analysis in retrieved industry reports via RAG.',
            isCorrect: true,
            explanation:
              'The LLM blended its internal pretraining knowledge of Apple with the ratio input; explicit prompt constraints or RAG grounding ensures all cited risks are verifiable.',
          },
          {
            label: 'C',
            text: 'It occurs because Agent 2 was given direct access to `WebSearchTool` in Lab 6.',
            isCorrect: false,
            explanation:
              'In Lab 6, Agent 2 has no tools attached (`tools` is only attached to Agent 1).',
          },
          {
            label: 'D',
            text: 'It is caused by the Ebbinghaus forgetting curve deleting the valuation ratios before Agent 2 runs.',
            isCorrect: false,
            explanation:
              'Agent 2 receives the full `fundamental_results.final_output` JSON directly from Agent 1.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'baaf-ch02-fc1',
        category: 'architecture',
        front: 'What is the functional boundary between RAG and Tool Use inside an AI agent?',
        back: 'RAG is a read-only mechanism that retrieves external or long-term memory context to augment the current reasoning step, whereas Tools can execute external computations, call live APIs, and write/update external state.',
        mentalHook: 'RAG reads into the prompt; Tools act on and write to the world.',
      },
      {
        id: 'baaf-ch02-fc2',
        category: 'data',
        front: 'Why does the Chapter 2 episodic memory lab store episodes in ChromaDB as BOTH `documents` and `metadatas`?',
        back: 'Storing formatted text in `documents` enables vector similarity search via embeddings, while storing structured JSON keys in `metadatas` enables deterministic field filtering.',
        mentalHook: 'Documents for semantic meaning; Metadatas for exact filtering.',
      },
      {
        id: 'baaf-ch02-fc3',
        category: 'evaluation',
        front: 'How does Self-Consistency improve upon standard Chain-of-Thought (CoT) in financial classification?',
        back: 'Instead of trusting a single CoT trace, Self-Consistency samples multiple diverse reasoning paths (via temperature/top-k/nucleus sampling) and selects the final answer by majority vote.',
        mentalHook: 'One analyst trace can be brittle; a committee vote of 5 reasoning paths is robust.',
      },
      {
        id: 'baaf-ch02-fc4',
        category: 'security',
        front: 'What are the four types of Guardrails in agentic systems and what does each protect?',
        back: 'Input guardrails block out-of-scope prompts; Tool guardrails validate function arguments and permissions; Task guardrails verify intermediate step outputs; Output guardrails prevent confidential data leaks.',
        mentalHook: 'ITTO: Input, Tool, Task, Output gates.',
      },
      {
        id: 'baaf-ch02-fc5',
        category: 'optimization',
        front: 'How does LlamaIndex handle context compression when an agent’s chat history hits a 40K-token threshold?',
        back: 'It summarizes or flushes short-term working memory into long-term memory organized into Static memory, Fact-extraction memory, and Vector memory blocks.',
        mentalHook: 'At 40K tokens, flush the scratchpad into Static, Fact, and Vector vaults.',
      },
      {
        id: 'baaf-ch02-fc6',
        category: 'optimization',
        front: 'How does the MemoryBank framework prevent long-term episodic memory from drowning in stale noise?',
        back: 'It distills conversations into hierarchical summaries and applies an Ebbinghaus forgetting curve where memory strength decays over time unless reinforced by recall or high salience.',
        mentalHook: 'Use it or lose it: uncalled memories decay along the Ebbinghaus curve.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'baaf-ch02-feyn1',
        conceptTitle: 'The Four-Tier Agent Memory Architecture (Working, Episodic, Semantic, Procedural)',
        prompt:
          'Explain to a senior quant developer how an AI agent’s memory architecture works across a multi-session portfolio rebalancing system, clearly distinguishing Working, Episodic, Semantic, and Procedural memory and how they are implemented.',
        rubricChecklist: [
          'Defines Working Memory (`SQLiteSession`) as the ephemeral session scratchpad holding current weights and turns during an active run.',
          'Defines Episodic Memory as past task trajectories, summaries, `what_worked`, and `what_didnt_work` embedded into a vector store like ChromaDB.',
          'Distinguishes Semantic Memory (domain facts, instrument definitions, 75% equity caps) from Procedural Memory (reusable step-by-step how-to routines and KYC/rebalancing workflows).',
          'Explains how Ebbinghaus time-based decay and salience weighting keep long-term episodic memory clean over time.',
        ],
        modelExplanation:
          'An agent relies on four complementary memory tiers. First, short-term Working Memory (implemented via `SQLiteSession`) acts like a trader’s intraday notepad: it tracks the current portfolio weights (`70% stocks, 20% bonds, 10% cash`) and user adjustments across turns within a single run, clearing when the session ends. To retain knowledge across sessions, the agent writes to three external Long-Term Memory stores. Episodic Memory records specific past task trajectories—distilling the conversation summary, allocation trajectory, what worked, and what failed into JSON and vector embeddings in ChromaDB. Semantic Memory stores stable domain facts and hard constraints, such as a 75% maximum equity rule. Procedural Memory encodes reusable "how-to" action sequences, like a 5-step risk-scoring pipeline. Finally, to prevent the episodic database from filling up with stale market noise, time-based decay (modeled on the Ebbinghaus forgetting curve) and salience weighting fade unaccessed memories while reinforcing frequently recalled insights.',
      },
      {
        id: 'baaf-ch02-feyn2',
        conceptTitle: 'ReAct vs. Reflection vs. Evaluator–Optimizer in Financial Workflows',
        prompt:
          'A colleague confuses ReAct, Reflection, and LLM-as-a-Judge (Evaluator–Optimizer). Explain the exact mechanistic difference between all three and show how they can be combined when analyzing an earnings call or verifying financial news.',
        rubricChecklist: [
          'Defines ReAct as a task-level reasoning loop (`Thought -> Action -> Observation`) that interleaves internal reasoning with external tool calls.',
          'Defines Reflection as single-agent self-critique where the same agent reviews and revises its drafted analysis.',
          'Defines Evaluator–Optimizer (LLM-as-a-Judge) as a two-agent quality pattern where a separate Judge agent validates the Generator’s output against a typed schema (`EvaluationFeedback`) up to `max_iteration`.',
          'Demonstrates how an agent uses ReAct to fetch earnings/news data via tools/RAG and then applies Reflection or an Evaluator–Optimizer loop to verify faithfulness and link completeness.',
        ],
        modelExplanation:
          'ReAct is a task-level reasoning pattern that governs how an agent gathers information: it alternates between a `Thought` (deciding what data is missing), an `Action` (calling an API or RAG tool), and an `Observation` (reading the returned data into context) until it has enough facts to draft an answer. Reflection and Evaluator–Optimizer are quality patterns that inspect the drafted output after or between steps. In Reflection, the same single agent critiques its own draft—for example, checking whether its earnings call summary contradicts historical guidance—and revises the text. In the Evaluator–Optimizer pattern (a form of LLM-as-a-Judge), evaluation is separated into a second specialized Judge agent (like `news_evaluator`) that audits the Generator (`web_news_searcher`) against strict rules—such as verifying Reuters URLs and 48-hour publication dates—and returns a structured `successful` or `unsuccessful` score with feedback inside a loop bounded by `max_iteration`.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'baaf-working-vs-episodic-memory',
        label: 'Working vs. Episodic Memory',
        category: 'data',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Working memory (`SQLiteSession`) holds active intra-session state, whereas Episodic memory embeds distilled past trajectories (`what_worked`, `what_didnt_work`) into persistent vector storage.',
        whyItMatters:
          'Enables multi-turn coherence during a rebalancing session while transferring lessons learned across future sessions.',
      },
      {
        id: 'baaf-react-loop',
        label: 'ReAct (Reasoning + Acting)',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Task-level reasoning paradigm that interleaves explicit Thought traces, external tool Actions, and environment Observations in a continuous feedback loop.',
        formulaOrRule: 'Thought -> Action (Tool Call) -> Observation -> Updated Context',
        whyItMatters:
          'Allows financial agents to adapt plans dynamically when live API observations reveal unexpected ratios or price movements.',
      },
      {
        id: 'baaf-self-consistency',
        label: 'Self-Consistency Voting',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Thought-level reasoning pattern that samples multiple diverse Chain-of-Thought paths and selects the most consistent conclusion via majority vote.',
        formulaOrRule: '\\hat{y} = \\arg\\max_y \\sum_{i=1}^m \\mathbb{I}(y_i = y)',
        whyItMatters:
          'Prevents a single brittle reasoning path from misclassifying ambiguous earnings releases with mixed financial signals.',
      },
      {
        id: 'baaf-evaluator-optimizer',
        label: 'Evaluator–Optimizer (LLM-as-a-Judge)',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Quality pattern pairing a Generator agent with a separate Judge agent that returns structured feedback (`successful` / `unsuccessful`) in an iteration-capped refinement loop.',
        formulaOrRule: 'Loop until score == "successful" or nbr_iterations > max_iteration',
        whyItMatters:
          'Enforces verifiable compliance constraints (such as mandatory Reuters source URLs and 48-hour date windows) before outputs reach analysts.',
      },
      {
        id: 'baaf-sequential-orchestration',
        label: 'Sequential Multi-Agent Orchestration',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Coordination pattern chaining specialized agents (Retrieval -> Analysis -> Decision) where each stage emits a strict JSON contract consumed by the next.',
        whyItMatters:
          'Isolates factual data retrieval from qualitative interpretation and decision thresholds in equity research pipelines.',
      },
      {
        id: 'baaf-context-engineering-decay',
        label: 'Context Engineering & Memory Decay',
        category: 'optimization',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Runtime curation of the 8 context elements via 40K-token compression flushes, multi-agent context isolation, and Ebbinghaus forgetting-curve memory maintenance.',
        formulaOrRule: 'R(t) = \\exp(-t / S)',
        whyItMatters:
          'Prevents context window overflow, runaway token costs, and retrieval degradation from stale historical episodes.',
      },
    ],
    edges: [
      {
        source: 'baaf-working-vs-episodic-memory',
        target: 'baaf-context-engineering-decay',
        relationship: 'part_of',
        explanation:
          'Context engineering flushes short-term working memory into long-term stores at token thresholds and regulates episodic retention via Ebbinghaus decay.',
      },
      {
        source: 'baaf-react-loop',
        target: 'baaf-self-consistency',
        relationship: 'optimizes',
        explanation:
          'Combining task-level ReAct tool observations with thought-level Self-Consistency voting grounds multi-path reasoning in live financial metrics.',
      },
      {
        source: 'baaf-evaluator-optimizer',
        target: 'baaf-react-loop',
        relationship: 'evaluates',
        explanation:
          'An Evaluator–Optimizer judge audits the outputs produced by a tool-calling search or ReAct generator against compliance criteria.',
      },
      {
        source: 'baaf-sequential-orchestration',
        target: 'baaf-context-engineering-decay',
        relationship: 'optimizes',
        explanation:
          'Sequential multi-agent pipelines enforce context isolation by passing only scoped JSON contracts and relevant tools to each specialist agent.',
      },
      {
        source: 'baaf-evaluator-optimizer',
        target: 'baaf-sequential-orchestration',
        relationship: 'trades_off_with',
        explanation:
          'Sequential pipelines execute in a single forward pass across specialists, whereas Evaluator–Optimizer loops trade higher multi-iteration latency for iterative verification.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 26,
    figuresIncluded: 9,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 2 patterns (Tool Use with FinanceToolkit, Working SQLiteSession, Episodic ChromaDB, Semantic & Procedural memory, RAG, 5 Planning variants, ReAct, CoT, Self-Consistency, Reflection, Evaluator–Optimizer Judge loop, 4 Guardrail types, Sequential 3-agent orchestration, Context Engineering 40k threshold, and MemoryBank Ebbinghaus decay) verified with 9 book figures and zero forbidden AI clichés.',
  },
};
