import { ChapterMastery } from '../../../types/book';

export const peflCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Prompt Content',
  subtitle:
    'Static task clarification vs. dynamic runtime context, few-shot pattern induction, lexical vs. neural RAG, and hierarchical summarization',
  readingTimeMinutes: 8,
  sourceWordCount: 10713,
  executiveThesis:
    'Prompt content divides into static instructions—hardcoded clarifications and few-shot demonstrations that define the task and enforce cross-request consistency—and dynamic context—user-specific facts retrieved or summarized at runtime. Because LLMs treat every prompt detail as intentional (Chekhov’s Gun fallacy) and extrapolate unintended patterns from examples, engineers must balance explicit positive rules, shuffled representative few-shot distributions, and low-latency lexical or neural retrieval.',
  paradigmShift: {
    oldWay:
      'Ad-hoc prompt stuffing: Mixing vague negative rules ("don’t do X") with unshuffled manual examples and raw, unfiltered user history in a single monolithic string.',
    newWay:
      'Systematic content architecture: Separating static clarification from scored, latency-aware dynamic context retrieved via lexical/neural indexing or task-specific hierarchical summarization.',
    whyItChanged:
      'Programmatic LLM calls cannot recover from conversational misunderstandings mid-flight, while attention interference, anchoring bias, and context window ceilings penalize noisy or poorly ordered inputs.',
  },
  heroIllustrationUrl: `${import.meta.env.BASE_URL}books/prompt-engineering-for-llms/assets/pefl_0512.png`,
  customDiagrams: [
    {
      id: 'pefl-ch05-svg-static-dynamic',
      title: 'Static Task Clarification vs. Dynamic Runtime Context Pipeline',
      subtitle:
        'Combining compile-time task instructions and calibrated few-shot examples with latency-bounded runtime retrieval and summarization',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="peflCh05Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="peflArrBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="peflArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="peflArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#peflCh05Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">PROMPT CONTENT ARCHITECTURE: STATIC CLARIFICATION vs. DYNAMIC CONTEXT</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Separating invariant task rules (top) from request-time user &amp; domain retrieval (bottom)</text>

  <!-- Static Content Track -->
  <rect x="28" y="68" width="460" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="90" fill="#38bdf8" font-size="12" font-weight="700">1. STATIC CONTENT (Compile-Time / Invariant Across Users)</text>
  
  <rect x="44" y="102" width="205" height="98" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1.2" />
  <text x="56" y="122" fill="#e0f2fe" font-size="11" font-weight="600">Explicit Clarification</text>
  <text x="56" y="140" fill="#94a3b8" font-size="9.5">• Positive do-rules over don'ts</text>
  <text x="56" y="156" fill="#94a3b8" font-size="9.5">• Causal rationale per rule</text>
  <text x="56" y="172" fill="#94a3b8" font-size="9.5">• Avoid brittle absolutes</text>
  <text x="56" y="188" fill="#38bdf8" font-size="9" font-weight="600">Priority Score: Tier 1 (Max)</text>

  <rect x="267" y="102" width="205" height="98" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1.2" />
  <text x="279" y="122" fill="#e0f2fe" font-size="11" font-weight="600">Implicit Few-Shot Examples</text>
  <text x="279" y="140" fill="#94a3b8" font-size="9.5">• Demonstrates format &amp; tone</text>
  <text x="279" y="156" fill="#94a3b8" font-size="9.5">• Match prior label distribution</text>
  <text x="279" y="172" fill="#94a3b8" font-size="9.5">• Shuffle to break order bias</text>
  <text x="279" y="188" fill="#fda4af" font-size="9" font-weight="600">Guard: Anchoring &amp; Context Bloat</text>

  <!-- Dynamic Content Track -->
  <rect x="28" y="236" width="460" height="158" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="44" y="258" fill="#fbbf24" font-size="12" font-weight="700">2. DYNAMIC CONTENT (Request-Time / User &amp; Instance Specific)</text>

  <rect x="44" y="270" width="205" height="108" rx="6" fill="#0f172a" stroke="#d97706" stroke-width="1.2" />
  <text x="56" y="290" fill="#fef3c7" font-size="11" font-weight="600">Zoom-In: RAG Retrieval</text>
  <text x="56" y="308" fill="#94a3b8" font-size="9.5">• Lexical: Jaccard / BM25 tokens</text>
  <text x="56" y="324" fill="#94a3b8" font-size="9.5">• Neural: Dense vector k-NN</text>
  <text x="56" y="340" fill="#94a3b8" font-size="9.5">• Filter out Chekhov's Guns</text>
  <text x="56" y="362" fill="#fbbf24" font-size="9" font-weight="600">Scored by Query Similarity</text>

  <rect x="267" y="270" width="205" height="108" rx="6" fill="#0f172a" stroke="#d97706" stroke-width="1.2" />
  <text x="279" y="290" fill="#fef3c7" font-size="11" font-weight="600">Zoom-Out: Summarization</text>
  <text x="279" y="308" fill="#94a3b8" font-size="9.5">• Hierarchical tree recursion</text>
  <text x="279" y="324" fill="#94a3b8" font-size="9.5">• Split along natural boundaries</text>
  <text x="279" y="340" fill="#94a3b8" font-size="9.5">• General vs. Task-Specific</text>
  <text x="279" y="362" fill="#fbbf24" font-size="9" font-weight="600">Pre-computed for Low Latency</text>

  <!-- Flow Arrows into Triage Gate -->
  <path d="M 488 143 L 548 195" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrBlue)" />
  <path d="M 488 315 L 548 255" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrAmber)" />

  <!-- Right Synthesis Node -->
  <rect x="556" y="112" width="216" height="236" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2" />
  <text x="664" y="138" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">3. TRIAGE &amp; SCORING GATE</text>
  <text x="664" y="156" fill="#94a3b8" font-size="9.5" text-anchor="middle">Evaluates every candidate item on:</text>

  <rect x="574" y="170" width="180" height="44" rx="5" fill="#1e293b" stroke="#334155" />
  <text x="586" y="188" fill="#f8fafc" font-size="10" font-weight="600">Latency &amp; Urgency Budget</text>
  <text x="586" y="203" fill="#94a3b8" font-size="9">Low (batch) vs. High (keystroke)</text>

  <rect x="574" y="224" width="180" height="44" rx="5" fill="#1e293b" stroke="#334155" />
  <text x="586" y="242" fill="#f8fafc" font-size="10" font-weight="600">Preparability &amp; Stability</text>
  <text x="586" y="257" fill="#94a3b8" font-size="9">Cache static/slow-changing state</text>

  <rect x="574" y="278" width="180" height="52" rx="5" fill="#064e3b" stroke="#10b981" />
  <text x="586" y="296" fill="#6ee7b7" font-size="10" font-weight="700">Comparability Score</text>
  <text x="586" y="311" fill="#a7f3d0" font-size="9">Utility, dependencies, and</text>
  <text x="586" y="323" fill="#a7f3d0" font-size="9">invalidation rules -> Ch 6 Assembly</text>
</svg>`,
      bierutCaption:
        'Separate compile-time task clarification from runtime context acquisition, scoring every piece by utility, preparability, and latency budget before prompt assembly.',
      annotations: [
        {
          step: '1',
          label: 'Static Task Clarification',
          explanation:
            'Hardcoded positive instructions and distribution-matched few-shot examples establish consistent task interpretation across all users.',
        },
        {
          step: '2',
          label: 'Dynamic Context Acquisition',
          explanation:
            'Request-time pipelines either zoom in on specific snippets via lexical/neural RAG or zoom out across large corpora via hierarchical summarization.',
        },
        {
          step: '3',
          label: 'Triage & Comparability Gate',
          explanation:
            'Every static and dynamic item receives an importance score and dependency metadata governed by application urgency.',
        },
      ],
    },
    {
      id: 'pefl-ch05-svg-lexical-vs-neural',
      title: 'Lexical Overlap vs. Neural Embedding Space & Hierarchical Summarization',
      subtitle:
        'Comparing fast zero-index token overlap (Jaccard/BM25) against dense semantic vector search (FAISS) and recursive tree summarization',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="peflCh05Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="peflArrCyan2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="peflArrPurple2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#peflCh05Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">DYNAMIC CONTEXT ENGINES: LEXICAL RAG vs. NEURAL RAG vs. TREE SUMMARIZATION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Selecting the right context reduction engine based on semantic gap, latency ceiling, and corpus scale</text>

  <!-- Panel 1: Lexical Retrieval -->
  <rect x="24" y="68" width="240" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="144" y="92" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">A. LEXICAL RETRIEVAL</text>
  <text x="144" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Exact Stemmed Token Overlap</text>

  <rect x="40" y="122" width="208" height="58" rx="6" fill="#0f172a" stroke="#0284c7" />
  <text x="144" y="142" fill="#e0f2fe" font-size="10" font-weight="600" text-anchor="middle">1. Stop-Word Strip &amp; Stemming</text>
  <text x="144" y="158" fill="#94a3b8" font-size="9" text-anchor="middle">"walking, walked" -&gt; "walk"</text>
  <text x="144" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Zero offline vector index needed</text>

  <path d="M 144 180 L 144 202" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrCyan2)" />

  <rect x="40" y="206" width="208" height="72" rx="6" fill="#0f172a" stroke="#0284c7" />
  <text x="144" y="226" fill="#e0f2fe" font-size="10" font-weight="600" text-anchor="middle">2. Set / Weighted Scoring</text>
  <text x="144" y="244" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">J(A,B) = |A ∩ B| / |A ∪ B|</text>
  <text x="144" y="262" fill="#94a3b8" font-size="9" text-anchor="middle">Or BM25 / TF-IDF rarity weights</text>

  <rect x="40" y="292" width="208" height="88" rx="6" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="52" y="312" fill="#7dd3fc" font-size="10" font-weight="700">Best For (e.g., Copilot Tabs):</text>
  <text x="52" y="328" fill="#e0f2fe" font-size="9">• Sub-millisecond in-memory scan</text>
  <text x="52" y="344" fill="#e0f2fe" font-size="9">• Transparent debuggable matches</text>
  <text x="52" y="360" fill="#fda4af" font-size="9">• Misses synonyms ("rucksack")</text>

  <!-- Panel 2: Neural Retrieval -->
  <rect x="280" y="68" width="240" height="328" rx="8" fill="#1e293b" stroke="#c084fc" stroke-width="1.5" />
  <text x="400" y="92" fill="#c084fc" font-size="12" font-weight="700" text-anchor="middle">B. NEURAL RETRIEVAL</text>
  <text x="400" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Dense Contrastive Embedding Space</text>

  <rect x="296" y="122" width="208" height="58" rx="6" fill="#0f172a" stroke="#9333ea" />
  <text x="400" y="142" fill="#f3e8ff" font-size="10" font-weight="600" text-anchor="middle">1. Sliding Window Chunking</text>
  <text x="400" y="158" fill="#94a3b8" font-size="9" text-anchor="middle">1 idea/chunk (e.g., 256w, stride 128w)</text>
  <text x="400" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Augment methods with class headers</text>

  <path d="M 400 180 L 400 202" stroke="#c084fc" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrPurple2)" />

  <rect x="296" y="206" width="208" height="72" rx="6" fill="#0f172a" stroke="#9333ea" />
  <text x="400" y="226" fill="#f3e8ff" font-size="10" font-weight="600" text-anchor="middle">2. Vector Index k-NN (FAISS)</text>
  <text x="400" y="244" fill="#c084fc" font-size="10" font-weight="700" text-anchor="middle">L2 Distance or Cosine Sim</text>
  <text x="400" y="262" fill="#94a3b8" font-size="9" text-anchor="middle">Matches ideas across languages</text>

  <rect x="296" y="292" width="208" height="88" rx="6" fill="#3b0764" stroke="#c084fc" />
  <text x="308" y="312" fill="#d8b4fe" font-size="10" font-weight="700">Best For (Semantic Search):</text>
  <text x="308" y="328" fill="#f3e8ff" font-size="9">• Paraphrases &amp; cross-lingual</text>
  <text x="308" y="344" fill="#f3e8ff" font-size="9">• Pre-indexed large knowledge bases</text>
  <text x="308" y="360" fill="#fda4af" font-size="9">• Opaque vectors hard to tune</text>

  <!-- Panel 3: Hierarchical Summarization -->
  <rect x="536" y="68" width="240" height="328" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="656" y="92" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">C. TREE SUMMARIZATION</text>
  <text x="656" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Recursive Divide-and-Conquer Synopsis</text>

  <rect x="616" y="124" width="80" height="30" rx="5" fill="#064e3b" stroke="#10b981" />
  <text x="656" y="143" fill="#6ee7b7" font-size="9.5" font-weight="700" text-anchor="middle">Root Synopsis</text>

  <rect x="560" y="176" width="84" height="30" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="602" y="195" fill="#a7f3d0" font-size="9" text-anchor="middle">Part 1 Summary</text>
  <rect x="668" y="176" width="84" height="30" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="710" y="195" fill="#a7f3d0" font-size="9" text-anchor="middle">Part 2 Summary</text>

  <line x1="602" y1="176" x2="640" y2="154" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="710" y1="176" x2="672" y2="154" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />

  <rect x="552" y="226" width="60" height="26" rx="4" fill="#0f172a" stroke="#334155" />
  <text x="582" y="243" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ch 1</text>
  <rect x="626" y="226" width="60" height="26" rx="4" fill="#0f172a" stroke="#334155" />
  <text x="656" y="243" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ch 2</text>
  <rect x="700" y="226" width="60" height="26" rx="4" fill="#0f172a" stroke="#334155" />
  <text x="730" y="243" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ch 3</text>

  <rect x="552" y="268" width="208" height="112" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="564" y="288" fill="#6ee7b7" font-size="10" font-weight="700">Compression Economics:</text>
  <text x="564" y="304" fill="#e0f2fe" font-size="9">• At &lt;= 1/10th compression per level,</text>
  <text x="564" y="318" fill="#e0f2fe" font-size="9">  total cost ≈ O(N) source tokens</text>
  <text x="564" y="336" fill="#fde68a" font-size="9">• Specific summary retains task clues</text>
  <text x="564" y="352" fill="#fda4af" font-size="9">• Watch for Telephone / Rumor drift</text>
</svg>`,
      bierutCaption:
        'Match retrieval mechanics to operational constraints: lexical Jaccard for instant local buffers, neural embeddings for conceptual similarity, and tree summarization for global synopsis.',
      annotations: [
        {
          step: 'A',
          label: 'Lexical Token Overlap',
          explanation:
            'Jaccard and BM25 score stemmed word intersections with zero vector indexing overhead and full debuggability.',
        },
        {
          step: 'B',
          label: 'Contrastive Vector Search',
          explanation:
            'Embedding models map single-idea text chunks into high-dimensional space so FAISS can retrieve semantically equivalent passages.',
        },
        {
          step: 'C',
          label: 'Hierarchical Tree Compression',
          explanation:
            'Recursive summarization along natural chapter or directory boundaries condenses massive corpora in O(N) total token cost.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'pefl-ch05-mm1',
      name: 'The Chekhov’s Gun Fallacy of LLM Context',
      tagline: 'LLMs assume every detail placed in the prompt must be fired in the completion',
      naiveIntuition:
        'Dumping extra user metadata or loosely related RAG snippets into the prompt is harmless because the LLM will simply ignore irrelevant facts.',
      firstPrinciplesReality:
        'Trained on human narratives where authors only introduce details that matter later, LLMs compulsively overinterpret irrelevant context—allowing a stray remark to hijack the recommendation.',
      howToApply:
        'Aggressively threshold retrieval similarity scores and allow task-specific summarizers to output "N/A" when a source contains no task-relevant signal.',
    },
    {
      id: 'pefl-ch05-mm2',
      name: 'Few-Shot Distribution & Order Contagion',
      tagline: 'Examples teach implicit prior probabilities and sequential trends, not just syntax',
      naiveIntuition:
        'Providing one example for each rating (1, 2, 3, 4, 5 stars) listed neatly from happy path to error cases gives the model an unbiased ruler.',
      firstPrinciplesReality:
        'Uniform examples distort a skewed real-world distribution (where 5-star reviews dominate) toward a flat prior, while systematic ordering induces ascending, descending, or pessimistic error-last continuations.',
      howToApply:
        'Sample few-shot examples to reflect realistic class priors plus critical edge cases, and randomly shuffle or systematically optimize (via DSPy) their sequence.',
    },
    {
      id: 'pefl-ch05-mm3',
      name: 'Proximity-Stability Context Cartography',
      tagline: 'Map candidate dynamic context along acquisition distance and temporal decay',
      naiveIntuition:
        'Brainstorm an idealized wish-list of user facts and fetch all of them live during the user request.',
      firstPrinciplesReality:
        'High-urgency triggers (like autocomplete on every keystroke) invalidate slow multi-pass queries; ephemeral context cannot be pre-indexed, whereas stable user profiles can be cached offline.',
      howToApply:
        'Plot every context source on a 2D grid of Application Proximity (screen state -> DB -> external API) versus Stability (permanent -> slow-moving -> ephemeral) to align retrieval with urgency.',
    },
  ],
  deepSections: [
    {
      id: 'pefl-ch05-sec1',
      sectionNumber: '5.1',
      title: 'Static Content: Explicit Clarification & Few-Shot Pattern Induction',
      subtitle:
        'Enforcing programmatic consistency through positive causal rules and calibrated few-shot demonstrations',
      coreMechanism:
        'Static content defines the invariant task framing shared across every invocation of an application. Because programmatic LLM calls lack interactive human repair when a prompt is misunderstood, explicit clarification must eliminate ambiguity upfront to enforce cross-request consistency. Explicit instructions work best when phrased as positive actions rather than negative prohibitions ("preserve life" rather than "do not kill"), backed by a causal reason, and softened from brittle absolutes. For RLHF chat models, placing these explicit constraints inside the system message leverages post-training compliance.\n\nImplicit clarification via few-shot prompting exploits the autoregressive compulsion to continue structural, stylistic, and statistical patterns. However, few-shot prompting introduces three mechanical hazards: poor scaling with verbose context (where attention heads querying from the completion get confused by competing minibrains across multiple long persona blocks), anchoring bias toward the example distribution, and spurious sequential patterns such as ascending numbers or "happy path first, error path last."',
      stepByStepFlow: [
        {
          step: '1',
          title: 'State affirmative constraints with causal rationale',
          detail:
            'Replace negative "don’t" lists with positive target behaviors and explicit reasons inside the system prompt.',
        },
        {
          step: '2',
          title: 'Use concise few-shot pairs for output schema and persona',
          detail:
            'When user context is huge, restrict few-shot examples to demonstrating output formatting rather than duplicating massive context blobs.',
        },
        {
          step: '3',
          title: 'Match real-world label distributions and break sequence bias',
          detail:
            'Include representative class frequencies alongside key edge cases, then shuffle or evaluate permutations so the model does not extrapolate monotone trends.',
        },
      ],
      keyTakeaways: [
        'Explicit clarification creates consistency across inputs, which is a prerequisite for systematic optimization and user trust.',
        'Few-shot examples implicitly teach format, persona, and label distribution simultaneously, but scale poorly when each example requires large context.',
        'Listing standard cases first and edge-case failures last trains the model to predict failure on the main user query.',
      ],
      commonPitfalls: [
        'Providing one example per rating class (1 through 5) when real data is heavily skewed toward 5s, artificially anchoring uncertain predictions toward the midpoint.',
        'Copy-pasting four verbose multi-kilobyte user profiles as few-shot examples, causing cross-example attention bleed in the Transformer.',
      ],
      figures: [
        {
          file: 'pefl_0502.png',
          originalLabel:
            'Figure 5-2. The structure of a zero-shot prompt (left) versus a corresponding few-shot prompt (right), using five shots',
          bierutTitle: 'Induce Output Format and Persona via Few-Shot Pattern Continuation',
          editorialAnalysis:
            'Contrasts a zero-shot prompt relying solely on explicit instruction against a five-shot prompt pairing example questions and answers before the main query. Autoregressive models lock onto the structural cadence of the Q&A pairs, suppressing chatty RLHF filler without requiring exhaustive written rules.',
          keyTakeaways: [
            'Few-shot examples constrain both how the question is interpreted and the exact syntactic format of the completion.',
            'When task intent is already unambiguous, zero-shot prompting avoids token bloat and example bias.',
          ],
        },
        {
          file: 'pefl_0504.png',
          originalLabel:
            'Figure 5-4. The impact of anchoring to "early 20th century" (left) vs. "early 21st century" (right)',
          bierutTitle: 'Prevent Few-Shot Examples from Anchoring Numerical and Temporal Judgments',
          editorialAnalysis:
            'Demonstrates how changing a single example pair ("Richard -> late 20th century" vs. "Pedro -> early 21st century") shifts the model’s estimate for "John" by a full century. Initial examples establish an implicit prior expectation that pulls subsequent completions toward the anchor.',
          keyTakeaways: [
            'Span the realistic range of target values across your few-shot set to avoid narrow anchoring.',
            'Include non-trivial edge cases deliberately so the model learns exception handling without assuming every input is an anomaly.',
          ],
        },
        {
          file: 'pefl_0506.png',
          originalLabel:
            'Figure 5-6. The impact of examples following the pattern of ascending numbers (left) vs. descending numbers (right)',
          bierutTitle: 'Break Accidental Monotone Sequences in Few-Shot Example Ordering',
          editorialAnalysis:
            'With only three numerical examples, random ordering has a 34% chance (17% ascending, 17% descending) of forming a strict monotonic sequence. As shown in the completions, the LLM extrapolates the ascending or descending trajectory rather than evaluating the target question independently.',
          keyTakeaways: [
            'Always shuffle or programmatically optimize (e.g., via DSPy) the order of few-shot examples.',
            'Audit manually written examples for "happy-path first, error-path last" ordering bias.',
          ],
        },
      ],
    },
    {
      id: 'pefl-ch05-sec2',
      sectionNumber: '5.2',
      title: 'Dynamic Context Cartography & Lexical vs. Neural RAG',
      subtitle:
        'Mapping context by proximity and stability, and retrieving high-signal snippets via Jaccard/BM25 or dense vector embeddings',
      coreMechanism:
        'Dynamic content supplies instance-specific facts about the user or subject at runtime. Engineering dynamic context is governed by three operational constraints: latency (dictated by trigger urgency—low for background email digests, medium for on-demand queries, high for real-time typing completion), preparability (pre-computing stable user attributes offline), and comparability (scoring every static and dynamic snippet for utility, dependencies, and invalidation). Mapping candidate sources along Application Proximity (in-memory state to external permissioned APIs) and Stability (immutable profile to ephemeral cursor state) reveals which context is feasible within the latency budget.\n\nWhen searching large corpora via Retrieval-Augmented Generation (RAG), engineers must guard against Chekhov’s Gun fallacy by retrieving only high-similarity snippets. Lexical retrieval preprocesses text via stop-word removal and stemming, then scores token overlap using Jaccard similarity or rarity-weighted BM25—requiring zero vector indexing and offering full debuggability. Neural retrieval chunks documents into single-idea windows (e.g., 256 words with 128-word stride, or class-augmented code methods), maps them via contrastively trained embedding models into high-dimensional space, and queries vector stores (FAISS, Pinecone) via Euclidean ($L_2$) distance or cosine similarity to match conceptual meaning across synonyms and languages.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Classify trigger latency and pre-compute stable context',
          detail:
            'Determine whether the feedforward pass is background, on-demand, or keystroke-driven, caching slow-changing user state ahead of time.',
        },
        {
          step: '2',
          title: 'Slice documents into single-idea windows with structural headers',
          detail:
            'Use overlapping moving windows or natural paragraph breaks, and prepend parent class/module definitions to isolated code methods.',
        },
        {
          step: '3',
          title: 'Score candidate snippets via Jaccard/BM25 or FAISS k-NN',
          detail:
            'Construct a rich search query (miniprompt) and retrieve the top-k highest-scoring snippets to inject into the prompt.',
        },
      ],
      formulas: [
        {
          name: 'Jaccard Lexical Similarity & Euclidean Vector Distance',
          expression:
            'J(Q, S) = \\frac{|W(Q) \\cap W(S)|}{|W(Q) \\cup W(S)|}, \\quad d_{L_2}(\\mathbf{q}, \\mathbf{s}) = \\|\\mathbf{q} - \\mathbf{s}\\|_2 = \\sqrt{\\sum_{i=1}^{d} (q_i - s_i)^2}',
          intuition:
            'Jaccard similarity measures the exact fraction of unique stemmed non-stop words shared between a query and snippet in [0, 1], whereas neural retrieval embeds both into d-dimensional space and ranks semantic proximity by minimizing L2 distance (or maximizing cosine similarity).',
          variables: [
            {
              symbol: 'W(Q), W(S)',
              meaning: 'Sets of stemmed, stop-word-filtered tokens in query Q and candidate snippet S',
            },
            {
              symbol: '\\mathbf{q}, \\mathbf{s} \\in \\mathbb{R}^d',
              meaning: 'Dense embedding vectors produced by a contrastive embedding model (e.g., d = 1536)',
            },
          ],
          workedExample:
            'In Figure 5-11, after stop-word removal and stemming, the Wikipedia query for The Beach and the user snippet share 6 overlapping stems out of 17 total unique stems, yielding J(Q, S) = 6 / 17 ≈ 0.353.',
        },
      ],
      keyTakeaways: [
        'Treat your RAG search string as a miniprompt enriched with task clarifications and subject descriptions to improve retrieval relevance.',
        'Lexical retrieval (Jaccard, BM25) requires no vector database, executes in microseconds over open IDE files, and allows deterministic synonym/field boosting.',
        'Neural retrieval bridges vocabulary mismatches and cross-lingual gaps but requires careful single-topic chunking so embedding vectors do not average disparate ideas.',
      ],
      commonPitfalls: [
        'Retrieving weakly related snippets that trigger Chekhov’s Gun fallacy, forcing the LLM to bend its answer around irrelevant details.',
        'Chunking multi-topic sections into a single huge embedding vector, placing the vector in an uninformative midpoint between topics.',
      ],
      figures: [
        {
          file: 'pefl_0509.png',
          originalLabel:
            'Figure 5-9. Example classification of context sorted according to the two axes suggested in the text',
          bierutTitle: 'Map Candidate Context Sources across Application Proximity and Temporal Stability',
          editorialAnalysis:
            'Plots context sources along Proximity (horizontal: from immediate application state and saved DB profiles out to public APIs and permissioned user emails) and Stability (vertical: from permanent demographics to ephemeral UI interaction state). Sources closer to the bottom-left are cheapest and fastest to prepare.',
          keyTakeaways: [
            'Prioritize high-proximity, high-stability sources for your MVP before building complex permissioned integrations.',
            'Ephemeral sources at the top of the y-axis cannot be pre-computed and directly impact request-time latency.',
          ],
        },
        {
          file: 'pefl_0511.png',
          originalLabel:
            'Figure 5-11. Calculating the Jaccard similarity between the Wikipedia description of The Beach and a snippet of text',
          bierutTitle: 'Compute Fast Zero-Index Lexical Relevance via Stemmed Jaccard Overlap',
          editorialAnalysis:
            'Walks through stop-word removal and morphological stemming on both a Wikipedia summary of The Beach and a candidate user post, then divides the 6 intersecting stems by the 17 union stems to score relevance. This exact mechanism powers GitHub Copilot’s fast in-IDE cross-file snippet retrieval.',
          keyTakeaways: [
            'Jaccard similarity needs zero offline indexing or memory footprint, making it ideal for ephemeral local workspaces.',
            'When common words dilute Jaccard scores, upgrade to TF-IDF or BM25 to weight rare domain terms higher.',
          ],
        },
        {
          file: 'pefl_0512.png',
          originalLabel: 'Figure 5-12. A RAG application',
          bierutTitle: 'Decouple Offline Vector Indexing from Low-Latency Runtime RAG Retrieval',
          editorialAnalysis:
            'Illustrates the two-phase architecture of neural RAG: an offline pipeline splits documents into snippets, encodes them via an embedding model, and populates a vector store (left); at runtime, the app embeds the query, fetches top-k nearest snippets via FAISS, and injects them alongside static instructions (right).',
          keyTakeaways: [
            'Embedding models are orders of magnitude smaller and cheaper than generative LLMs, enabling massive offline indexing.',
            'Separating offline indexing from online k-NN lookup keeps runtime prompt assembly within interactive latency budgets.',
          ],
        },
      ],
    },
    {
      id: 'pefl-ch05-sec3',
      sectionNumber: '5.3',
      title: 'Zoom-Out Context: Hierarchical & Task-Specific Summarization',
      subtitle:
        'Compressing massive corpora via divide-and-conquer tree recursion and preserving task-critical clues',
      coreMechanism:
        'Whereas RAG handles massive context by zooming in on isolated snippets, summarization zooms out to synthesize a global synopsis. When a corpus (such as a full book or an entire codebase) exceeds the LLM context window, hierarchical summarization applies recursive divide-and-conquer: first splitting the corpus along natural semantic boundaries (chapters, sections, or source files), summarizing each leaf unit independently, and then recursively summarizing the concatenated summaries up the tree until a single root synopsis fits the prompt.\n\nEconomically, if each summarization pass compresses text by at least a factor of 10 ($r \\le 0.1$), the total token cost across all tree levels is bounded by the original corpus size ($O(N)$). However, compression is inherently lossy and introduces two failure modes: the "rumor problem" (where a hallucination or misinterpretation at level 1 compounds across deeper levels like a game of Telephone) and the loss of offhand task-specific details. General summaries capture main narrative arcs and are reusable across applications, whereas specific summarization prompts the LLM to extract only clues relevant to a known downstream question (outputting "N/A" otherwise).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Split corpus by chapters, files, or semantic modules',
          detail:
            'Avoid arbitrary mid-section cuts or unbalanced chunks where a tiny fragment of one topic gets drowned out by another.',
        },
        {
          step: '2',
          title: 'Align summarization instructions with downstream reuse',
          detail:
            'Use general summarization for multi-purpose caching, or task-specific summarization (with "N/A" fallback) when looking for needle-in-a-haystack clues.',
        },
        {
          step: '3',
          title: 'Aggregate leaf summaries into parent summaries',
          detail:
            'Maintain sufficient summary length at intermediate nodes to prevent compounding distortions (the rumor problem).',
        },
      ],
      formulas: [
        {
          name: 'Geometric Token Cost of Hierarchical Tree Summarization',
          expression:
            'C_{\\text{total}} = N \\sum_{k=0}^{L-1} r^k < \\frac{N}{1 - r} \\quad (\\text{for compression ratio } r \\le 0.1, \\; C_{\\text{total}} \\approx 1.11 N)',
          intuition:
            'When each level summarizes chunks to at most one-tenth of their input length (r <= 0.1), higher levels of the recursion tree add less than 11% overhead beyond reading the raw corpus once.',
          variables: [
            {
              symbol: 'N',
              meaning: 'Total number of tokens in the raw source corpus at the leaf level',
            },
            {
              symbol: 'r',
              meaning: 'Average summary compression ratio per level (L_summary / L_input)',
            },
            {
              symbol: 'L',
              meaning: 'Total depth of the hierarchical summarization tree',
            },
          ],
          workedExample:
            'Summarizing a 100,000-token book across L = 2 levels with r = 0.1 processes 100,000 tokens at Level 1 (producing 10,000 summary tokens) and 10,000 tokens at Level 2 (producing 1,000 tokens), totaling 110,000 input tokens.',
        },
      ],
      keyTakeaways: [
        'Always split hierarchical summarization corpora along natural semantic boundaries (chapters, directories) rather than arbitrary token counts.',
        'So long as each summary is <= 10% of its source text, recursive tree depth barely increases total LLM compute cost.',
        'General summaries are reusable across tasks, whereas specific summaries preserve incidental clues (like a book mentioned in a vacation post) that general synopses discard.',
      ],
      commonPitfalls: [
        'Using general summarization on user social media posts and losing the single offhand remark needed for a personalized recommendation.',
        'Compressing intermediate tree levels too aggressively, amplifying the "rumor problem" across multi-level summaries.',
      ],
      figures: [
        {
          file: 'pefl_0513.png',
          originalLabel: 'Figure 5-13. Hierarchical summarization',
          bierutTitle: 'Compress Window-Exceeding Corpora via Recursive Tree Summarization',
          editorialAnalysis:
            'Depicts summarizing Alex Garland’s novel The Beach by generating individual chapter summaries first and feeding their concatenation into a second LLM pass to produce a unified book synopsis. This divide-and-conquer tree scales to arbitrarily large texts like the 1,189 chapters of the Bible or enterprise codebases.',
          keyTakeaways: [
            'Hierarchical summarization bypasses context window limits by reducing leaf chapters before synthesizing global themes.',
            'Guard against multi-hop distortion by keeping intermediate summaries detailed enough to preserve factual grounding.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Dynamic Context Acquisition & Reduction Strategies',
      description:
        'Comparing lexical RAG, neural RAG, general hierarchical summarization, and task-specific summarization across operational dimensions.',
      headers: [
        'Strategy',
        'Primary Mechanism',
        'Index & Compute Cost',
        'Semantic & Debug Profile',
        'Ideal Production Fit',
      ],
      rows: [
        [
          'Lexical RAG (Jaccard / BM25)',
          'Stemmed token overlap & inverse document frequency',
          'Zero vector index; ultra-fast CPU evaluation',
          'Transparent token matches; misses synonyms & cross-lingual ideas',
          'High-urgency local workspace search (e.g., IDE open tabs)',
        ],
        [
          'Neural RAG (Embeddings + FAISS)',
          'Contrastive dense vectors + k-NN similarity',
          'Offline embedding pass + vector DB storage',
          'Matches abstract ideas & paraphrases; opaque failure modes',
          'Large pre-indexed knowledge bases with semantic queries',
        ],
        [
          'General Tree Summarization',
          'Recursive divide-and-conquer synopsis',
          'O(N) LLM token cost offline; reusable cache',
          'Captures macro narrative; drops incidental side details',
          'Multi-purpose document synopses & codebase overviews',
        ],
        [
          'Task-Specific Summarization',
          'Goal-directed extraction with "N/A" fallback',
          'O(N) LLM token cost per specific question type',
          'Preserves needle-in-haystack clues; non-reusable if task changes',
          'Mining noisy user histories for a fixed recommendation task',
        ],
      ],
      verdictRule:
        'Use Lexical Jaccard/BM25 for unindexed ephemeral buffers under strict latency limits, Neural RAG for conceptual lookup across large static corpora, and Task-Specific Summarization when mining noisy histories for a stable downstream question.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'pefl-ch05-scen1',
      title: 'Eliminating Pessimistic Order Bias & Context Bloating in Few-Shot Classification',
      roleAndContext:
        'Lead ML Engineer building an automated e-commerce review rating predictor and anomaly detector.',
      symptomOrFailure:
        'The prompt includes five full user profiles with complete review histories as few-shot examples—listing four clean 1-to-4 star reviews first and a fraudulent review last—causing high latency, cross-profile confusion, and a spike in false-positive fraud predictions.',
      naiveFixAndWhyItFails:
        'Adding an explicit instruction saying "Do not assume the final review is fraudulent" while keeping the massive ordered examples intact; the autoregressive pattern induction of the ordered examples overrides the negative rule.',
      firstPrinciplesSolution:
        'Strip verbose background histories from the few-shot examples so they only demonstrate the concise rating output format, weight the example ratings to match the true empirical distribution (mostly 4s and 5s), and shuffle the example order across evaluations.',
      measurableOutcome:
        'Reduces prompt token count by 68%, eliminates cross-persona attention bleed, and cuts false-positive fraud flags by 41%.',
    },
    {
      id: 'pefl-ch05-scen2',
      title: 'Defeating Chekhov’s Gun Fallacy in Personalized Recommendation RAG',
      roleAndContext:
        'AI Architect designing a personalized travel and book recommender over user social media archives.',
      symptomOrFailure:
        'Neural RAG retrieves top-5 posts unconditionally; when a user has no relevant posts, low-similarity posts mentioning a random rainstorm are injected, and the LLM obsessively recommends books about meteorology.',
      naiveFixAndWhyItFails:
        'Increasing top-k from 5 to 15 snippets so "good context outweighs bad context," which floods the prompt with even more irrelevant Chekhov’s guns and crowds out static instructions.',
      firstPrinciplesSolution:
        'Enforce a strict minimum similarity cutoff on retrieved RAG vectors and run an offline task-specific summarization pass over social posts that explicitly outputs "N/A" whenever a post lacks book-preference signals.',
      measurableOutcome:
        'Removes 85% of irrelevant context injections and improves human-evaluated recommendation relevance by 33%.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'pefl-ch05-q1',
        scenarioPrompt:
          'You are building an LLM classifier to predict 1-to-5 star ratings from ambiguous short review titles. In production, 70% of all customer reviews are 5 stars. If you construct a few-shot prompt containing exactly one example each of 1, 2, 3, 4, and 5 stars listed in ascending order, which two failure modes have you introduced?',
        options: [
          {
            label: 'A',
            text: 'Flat-prior anchoring bias (pulling ambiguous inputs toward 3 stars instead of the true 5-star mode) and monotonic sequence continuation (biasing the completion to continue the ascending number pattern).',
            isCorrect: true,
            explanation:
              'Few-shot examples communicate an implicit probability distribution and sequential trajectory; uniform classes misrepresent the 70% 5-star prior, and ascending order tempts the LLM to extrapolate the sequence.',
          },
          {
            label: 'B',
            text: 'The rumor problem and stop-word dilution inside the tokenizer.',
            isCorrect: false,
            explanation:
              'The rumor problem occurs in multi-level hierarchical summarization, and stop-word dilution applies to unweighed lexical retrieval.',
          },
          {
            label: 'C',
            text: 'Contrastive pre-training collapse and L2 vector orthogonality.',
            isCorrect: false,
            explanation:
              'Those concepts apply to neural embedding models rather than few-shot in-context learning.',
          },
          {
            label: 'D',
            text: 'High-urgency trigger invalidation and recursive tree overflow.',
            isCorrect: false,
            explanation:
              'Trigger urgency and tree overflow relate to dynamic context latency and summarization, not static few-shot distribution design.',
          },
        ],
      },
      {
        id: 'pefl-ch05-q2',
        scenarioPrompt:
          'A real-time IDE coding assistant must retrieve relevant code snippets from the 8 files a developer currently has open and actively edits on every keystroke. Why did GitHub Copilot choose Jaccard lexical similarity over neural vector retrieval for this specific dynamic context source?',
        options: [
          {
            label: 'A',
            text: 'Jaccard similarity understands cross-lingual synonyms and abstract semantic metaphors better than contrastive embeddings.',
            isCorrect: false,
            explanation:
              'Lexical Jaccard only matches exact stemmed tokens and fails on synonyms; neural embeddings excel at abstract semantic similarity.',
          },
          {
            label: 'B',
            text: 'High-urgency keystroke triggers allow zero time for offline vector re-indexing, and Jaccard runs blazingly fast in memory with zero pre-indexing or memory footprint.',
            isCorrect: true,
            explanation:
              'Actively edited IDE buffers change every second under high urgency; Jaccard computes token set intersection instantly without embedding API calls or vector index maintenance.',
          },
          {
            label: 'C',
            text: 'Embedding models cannot encode source code and are larger and more expensive than generative LLMs.',
            isCorrect: false,
            explanation:
              'Modern embedding models handle both code and text and are orders of magnitude smaller and cheaper than generative LLMs.',
          },
          {
            label: 'D',
            text: 'Jaccard similarity automatically performs hierarchical summarization across directory trees.',
            isCorrect: false,
            explanation:
              'Jaccard is a zoom-in snippet similarity metric, not a hierarchical summarization technique.',
          },
        ],
      },
      {
        id: 'pefl-ch05-q3',
        scenarioPrompt:
          'When indexing an object-oriented codebase for neural RAG, an engineer splits files so each class method becomes an isolated snippet. During testing, methods like `def execute(self, data):` fail to match queries about the specific domain class they belong to. What snippetization enhancement directly resolves this?',
        options: [
          {
            label: 'A',
            text: 'Increase the chunk size to 8,000 tokens so the entire repository fits in one vector.',
            isCorrect: false,
            explanation:
              'Combining multiple disparate topics into one giant chunk places the embedding vector at an uninformative midpoint between topics.',
          },
          {
            label: 'B',
            text: 'Augment each method snippet with surrounding structural context—specifically the parent class definition and `__init__` instance variables—before computing its embedding.',
            isCorrect: true,
            explanation:
              'Reassembling an isolated method with its class header and initialization context gives the embedding model the semantic anchors needed to place the vector accurately.',
          },
          {
            label: 'C',
            text: 'Remove all stop words and apply morphological stemming before passing the code to the neural embedding model.',
            isCorrect: false,
            explanation:
              'Stop-word stripping and stemming are preprocessing steps for lexical retrieval (Jaccard/BM25), not neural Transformer embeddings.',
          },
          {
            label: 'D',
            text: 'Replace Euclidean L2 distance with negative instructions in the system prompt.',
            isCorrect: false,
            explanation:
              'System prompt rules cannot fix a retrieval miss that happens inside the vector index before prompt assembly.',
          },
        ],
      },
      {
        id: 'pefl-ch05-q4',
        scenarioPrompt:
          'You need to extract clues about a user’s literary tastes from 500 verbose vacation blog posts where books are only mentioned in passing (e.g., "Read Dune on the delayed flight to Rome"). Why will a general hierarchical summarization pipeline likely fail here, and what is the remedy?',
        options: [
          {
            label: 'A',
            text: 'General summarization is lossless and will exceed the token budget; you must use Jaccard similarity without stop words.',
            isCorrect: false,
            explanation:
              'Summarization is always lossy compression, not lossless.',
          },
          {
            label: 'B',
            text: 'General summarization compresses around the primary topic of the post (the Rome vacation) and discards offhand remarks; you must use task-specific summarization prompted for book clues with an "N/A" output for irrelevant posts.',
            isCorrect: true,
            explanation:
              'Task-specific summarization filters specifically for the downstream application’s goal and discards irrelevant vacation narrative, sacrificing cross-app reusability for high task signal.',
          },
          {
            label: 'C',
            text: 'Hierarchical summarization scales exponentially in token cost O(N^3) with tree depth.',
            isCorrect: false,
            explanation:
              'When summaries are <= 1/10th of the source text, hierarchical summarization cost is bounded by O(N) total tokens.',
          },
          {
            label: 'D',
            text: 'General summaries cannot be cached or prepared in advance.',
            isCorrect: false,
            explanation:
              'General summaries are highly preparable and reusable across multiple downstream applications.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'pefl-ch05-fc1',
        category: 'architecture',
        front: 'What distinguishes Static Content from Dynamic Content in prompt engineering?',
        back: 'Static content is invariant across requests and clarifies/structures the general task (rules, few-shot examples), whereas dynamic content is retrieved at runtime to supply instance-specific context about the user or subject.',
        mentalHook: 'Static = Task Rules (Compile-time); Dynamic = User Facts (Runtime).',
      },
      {
        id: 'pefl-ch05-fc2',
        category: 'foundation',
        front: 'What three rules of thumb improve compliance when writing explicit instructions for an LLM?',
        back: '1) State positive "dos" instead of negative "don’ts", 2) bolster commands with a causal reason, and 3) avoid brittle absolutes.',
        mentalHook: 'Positive + Because + Nuanced.',
      },
      {
        id: 'pefl-ch05-fc3',
        category: 'evaluation',
        front: 'What are the three primary drawbacks of few-shot prompting?',
        back: '1) Poor scaling with verbose context (attention confusion across examples), 2) anchoring bias toward the example distribution, and 3) induction of spurious sequential patterns (e.g., ascending or error-last order).',
        mentalHook: 'Bloat, Bias, and Bogus Sequences.',
      },
      {
        id: 'pefl-ch05-fc4',
        category: 'data',
        front: 'What is the Chekhov’s Gun Fallacy in Retrieval-Augmented Generation (RAG)?',
        back: 'The compulsion of LLMs—trained on human writing where every introduced detail serves a purpose—to overinterpret and force irrelevant retrieved context snippets into the final answer.',
        mentalHook: 'If a stray snippet is hung in the prompt, the LLM feels compelled to fire it.',
      },
      {
        id: 'pefl-ch05-fc5',
        category: 'optimization',
        front: 'How do Lexical Retrieval (Jaccard/BM25) and Neural Retrieval trade off against each other?',
        back: 'Lexical retrieval matches stemmed words with zero vector indexing, low latency, and easy debugging/field-boosting; Neural retrieval uses contrastive embeddings to match abstract concepts and synonyms across languages at the cost of opaque vectors and offline indexing.',
        mentalHook: 'Lexical = Fast Transparent Words; Neural = Indexed Semantic Ideas.',
      },
      {
        id: 'pefl-ch05-fc6',
        category: 'architecture',
        front: 'What is the "Rumor Problem" in hierarchical summarization, and how is total token cost bounded?',
        back: 'The Rumor Problem is the compounding of misunderstandings across recursive summary levels (like a game of Telephone); so long as each level compresses text to <= 10%, total token cost remains O(N) of the source text.',
        mentalHook: 'Telephone distortion up the tree, but 10x compression keeps cost linear.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'pefl-ch05-feyn1',
        conceptTitle: 'Few-Shot Mechanics: Pattern Induction vs. Context Scaling & Bias',
        prompt:
          'Explain to a junior engineer why adding five full-length customer support transcripts as few-shot examples—ordered from 4 easy resolutions to 1 angry escalation—degrades model accuracy, and how to redesign the static prompt.',
        rubricChecklist: [
          'Explains Transformer attention interference ("minibrains" shouting matching answers from verbose few-shot transcripts back to the active completion).',
          'Identifies the "happy path first, unhappy path last" sequential pattern that biases the LLM to predict an escalation on the main query.',
          'Notes how sample frequencies anchor the model’s prior probability distribution.',
          'Recommends trimming examples to demonstrate output format only, matching real class priors with key edge cases, and shuffling example order.',
        ],
        modelExplanation:
          'When you paste five full support transcripts into a prompt, the Transformer attention heads generating the completion broadcast queries back across the context window. Because all five transcripts have similar structure, their tokens shout competing answers back, confusing the model and exhausting the context window. Worse, listing four happy resolutions followed by an escalation trains the pattern-completing LLM that "escalations come at the end," biasing it to treat the live user query pessimistically. Instead, use concise few-shot examples strictly to demonstrate output formatting, reflect realistic resolution frequencies, and shuffle their order.',
      },
      {
        id: 'pefl-ch05-feyn2',
        conceptTitle: 'RAG Snippetization, Chekhov’s Gun, and Lexical vs. Neural Trade-offs',
        prompt:
          'Explain how to design a dynamic context pipeline that avoids Chekhov’s Gun fallacy, including when to choose Jaccard/BM25 over FAISS vector search and how to chunk documents for embedding.',
        rubricChecklist: [
          'Defines Chekhov’s Gun fallacy as the LLM’s tendency to overinterpret irrelevant retrieved snippets because training texts rarely include pointless details.',
          'Specifies the three chunking criteria for neural embeddings: fit the embedding window, encapsulate exactly one main idea (with sliding window stride or natural boundaries), and fit the final prompt.',
          'Contrasts lexical overlap (stemmed tokens, zero index, transparent tuning) with contrastive neural embeddings (dense semantic vectors, synonym/cross-lingual matching).',
          'Describes augmenting isolated code functions with class definitions and enriching the retrieval query string like a miniprompt.',
        ],
        modelExplanation:
          'Because LLMs learn from human prose where details are introduced for a reason, any irrelevant snippet injected by RAG becomes a "Chekhov’s gun" that the model forces into its reasoning. To prevent this, retrieval must rank similarity accurately using a query string crafted like a miniprompt. For rapidly changing local buffers where you cannot pre-index, lexical Jaccard or BM25 matches stemmed tokens instantly and transparently. For large knowledge bases requiring conceptual or synonym matching, neural RAG embeds chunks into FAISS—provided each chunk holds exactly one idea (via overlapping windows or paragraph boundaries) so vectors never blur disparate topics.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'pefl-static-content',
        label: 'Static Task Clarification',
        category: 'foundation',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Invariant prompt elements—explicit positive instructions and implicit few-shot examples—that define the problem and enforce consistent processing across requests.',
        whyItMatters:
          'Prevents unrecoverable programmatic misunderstandings and establishes user trust through predictable behavior.',
      },
      {
        id: 'pefl-few-shot-prompting',
        label: 'Few-Shot Pattern Induction',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Demonstrating task interpretation, persona, and output format via example Q&A pairs rather than exhaustive explicit rules.',
        formulaOrRule: 'Shuffle examples & match real-world prior distribution',
        whyItMatters:
          'Exploits autoregressive pattern continuation, though vulnerable to context bloat, anchoring bias, and sequential order contagion.',
      },
      {
        id: 'pefl-dynamic-context-cartography',
        label: 'Dynamic Context Cartography',
        category: 'architecture',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Classifying runtime user/topic context by urgency latency, preparability, comparability score, application proximity, and temporal stability.',
        whyItMatters:
          'Aligns context gathering with feedforward latency constraints and prepares scored candidates for Chapter 6 triage.',
      },
      {
        id: 'pefl-chekhovs-gun-fallacy',
        label: 'Chekhov’s Gun Fallacy',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 2,
        definition:
          'The failure mode where an LLM compulsively overinterprets irrelevant retrieved context under the implicit assumption that every prompt detail is relevant.',
        whyItMatters:
          'Explains why noisy RAG recall actively degrades output quality rather than being benignly ignored.',
      },
      {
        id: 'pefl-lexical-vs-neural-rag',
        label: 'Lexical vs. Neural RAG',
        category: 'data',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Zoom-in retrieval using either stemmed token overlap (Jaccard, TF-IDF, BM25) or contrastive dense vector embeddings searched via L2/cosine similarity in FAISS.',
        formulaOrRule: 'J(Q,S) = |W(Q) ∩ W(S)| / |W(Q) ∪ W(S)|',
        whyItMatters:
          'Balances zero-index microsecond lexical transparency against deep semantic and cross-lingual concept matching.',
      },
      {
        id: 'pefl-hierarchical-summarization',
        label: 'Hierarchical Tree Summarization',
        category: 'optimization',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Zoom-out divide-and-conquer compression that recursively summarizes natural document segments into a tree of synopses, using either general or task-specific lenses.',
        formulaOrRule: 'Cost ≈ O(N) when summary compression r <= 0.1',
        whyItMatters:
          'Enables global context synthesis over book- or repo-scale corpora that exceed any single context window.',
      },
    ],
    edges: [
      {
        source: 'pefl-few-shot-prompting',
        target: 'pefl-static-content',
        relationship: 'part_of',
        explanation:
          'Few-shot demonstrations provide the implicit half of static task clarification alongside explicit system rules.',
      },
      {
        source: 'pefl-lexical-vs-neural-rag',
        target: 'pefl-chekhovs-gun-fallacy',
        relationship: 'mitigates',
        explanation:
          'High-precision similarity scoring in lexical or neural RAG filters out irrelevant snippets before they trigger Chekhov’s Gun fallacy.',
      },
      {
        source: 'pefl-lexical-vs-neural-rag',
        target: 'pefl-dynamic-context-cartography',
        relationship: 'optimizes',
        explanation:
          'Choosing lexical vs. neural retrieval matches dynamic context gathering to the application’s urgency and preparability constraints.',
      },
      {
        source: 'pefl-hierarchical-summarization',
        target: 'pefl-lexical-vs-neural-rag',
        relationship: 'trades_off_with',
        explanation:
          'Summarization zooms out for a lossy macro synopsis, whereas RAG zooms in to extract exact micro snippets.',
      },
      {
        source: 'pefl-static-content',
        target: 'pefl-dynamic-context-cartography',
        relationship: 'prerequisite_for',
        explanation:
          'Static task clarification must occupy the highest comparability priority tier so the model understands the question before evaluating dynamic context.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 15,
    figuresIncluded: 7,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 5 (Static vs. Dynamic content, Explicit/Implicit clarification, 3 Few-Shot drawbacks, Latency/Preparability/Comparability, Proximity/Stability axes, Lexical Jaccard/BM25 vs. Neural FAISS RAG, and Hierarchical/Specific Summarization) with 7 extracted figures.',
  },
};

export const peflCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Assembling the Prompt',
  subtitle:
    'Prompt anatomy, the Valley of Meh, document archetypes (Advice, Report, XML/YAML), token inertness, elastic snippets, and greedy knapsack assembly',
  readingTimeMinutes: 8,
  sourceWordCount: 7068,
  executiveThesis:
    'Assembling a production prompt is a constrained optimization problem that maps scored content elements into a training-natural document archetype while respecting positional order, dependency graphs, and token budgets. Because LLM attention suffers from the "Valley of Meh" (weak recall in the early middle) and non-additive BPE tokenization across boundaries, engineers must sandwich core instructions at the start and end, enforce token-inert snippet formatting, and execute additive or subtractive greedy assembly.',
  paradigmShift: {
    oldWay:
      'Naive String Concatenation: Dumping instructions and retrieved snippets in arbitrary order into a template and slicing off the tail when the context window overflows.',
    newWay:
      'Algorithmic Prompt Assembly Engine: Formatting token-inert, elastic snippets into structured document archetypes and solving a dependency-aware greedy knapsack problem around the Valley of Meh.',
    whyItChanged:
      'Attention decay in the middle of long prompts, BPE boundary token merges, and prerequisite/incompatibility relationships across dynamic snippets require deterministic triage.',
  },
  heroIllustrationUrl: `${import.meta.env.BASE_URL}books/prompt-engineering-for-llms/assets/pefl_0601.png`,
  customDiagrams: [
    {
      id: 'pefl-ch06-svg-valley-sandwich',
      title: 'Prompt Anatomy, Attention Recall & The Sandwich Refocus Architecture',
      subtitle:
        'Navigating the "Valley of Meh" (lost-in-the-middle attention dip) by anchoring task framing at the introduction and refocus transition',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="peflCh06Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="valleyGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.3" />
      <stop offset="35%" stop-color="#f43f5e" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.35" />
    </linearGradient>
    <marker id="peflArrEmerald6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="peflArrBlue6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#peflCh06Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">ANATOMY OF AN IDEAL PROMPT &amp; THE "VALLEY OF MEH" ATTENTION CURVE</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Combining Primacy (Introduction) and Recency (Refocus + Inception Transition) via the Sandwich Technique</text>

  <!-- Attention Curve Panel -->
  <rect x="28" y="66" width="744" height="164" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="44" y="88" fill="#94a3b8" font-size="10.5" font-weight="600">EFFECTIVE MODEL ATTENTION / RECALL IMPACT ACROSS PROMPT POSITION</text>

  <!-- Shaded area under curve -->
  <path d="M 48 110 C 140 115, 210 205, 310 205 C 430 205, 580 135, 748 92 L 748 214 L 48 214 Z" fill="url(#valleyGrad)" />
  <!-- Curve line -->
  <path d="M 48 110 C 140 115, 210 205, 310 205 C 430 205, 580 135, 748 92" stroke="#38bdf8" stroke-width="3" fill="none" />
  <path d="M 48 110 C 140 115, 210 205, 310 205 C 430 205, 580 135, 748 92" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="6 4" fill="none" />

  <!-- Labels on curve -->
  <circle cx="80" cy="112" r="5" fill="#10b981" />
  <text x="92" y="110" fill="#6ee7b7" font-size="10.5" font-weight="700">High Primacy Recall</text>
  <text x="92" y="124" fill="#94a3b8" font-size="9">Sets early token thought budget</text>

  <circle cx="310" cy="205" r="5" fill="#f43f5e" />
  <text x="310" y="176" fill="#fda4af" font-size="11.5" font-weight="700" text-anchor="middle">THE "VALLEY OF MEH"</text>
  <text x="310" y="191" fill="#fecdd3" font-size="9.5" text-anchor="middle">Lost-in-the-Middle Dip (Place lower-tier context here)</text>

  <circle cx="720" cy="98" r="5" fill="#38bdf8" />
  <text x="705" y="96" fill="#7dd3fc" font-size="10.5" font-weight="700" text-anchor="end">In-Context Recency Peak</text>
  <text x="705" y="110" fill="#94a3b8" font-size="9" text-anchor="end">Strongest steering on next token</text>

  <!-- Bottom Anatomy Blocks (The Sandwich) -->
  <rect x="28" y="248" width="150" height="146" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.8" />
  <text x="103" y="270" fill="#6ee7b7" font-size="11" font-weight="700" text-anchor="middle">1. INTRODUCTION</text>
  <text x="103" y="286" fill="#a7f3d0" font-size="9.5" text-anchor="middle">(Sandwich Top Bread)</text>
  <text x="40" y="308" fill="#e0f2fe" font-size="9">• Declares document type</text>
  <text x="40" y="324" fill="#e0f2fe" font-size="9">• States core question</text>
  <text x="40" y="340" fill="#e0f2fe" font-size="9">• Orients fixed per-token</text>
  <text x="40" y="354" fill="#e0f2fe" font-size="9">  thought budget early</text>
  <text x="40" y="376" fill="#34d399" font-size="9" font-weight="700">Tier 1 Static Element</text>

  <rect x="192" y="248" width="236" height="146" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="310" y="270" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">2. PARADE OF CONTEXT</text>
  <text x="310" y="286" fill="#fecdd3" font-size="9.5" text-anchor="middle">(Early-Middle Valley Zone)</text>
  <text x="206" y="308" fill="#e2e8f0" font-size="9">• Auxiliary background snippets</text>
  <text x="206" y="324" fill="#e2e8f0" font-size="9">• Token-inert formatting (start</text>
  <text x="206" y="338" fill="#e2e8f0" font-size="9">  with space, end with \n)</text>
  <text x="206" y="356" fill="#e2e8f0" font-size="9">• Elastic snippet compression</text>
  <text x="206" y="376" fill="#fbbf24" font-size="9" font-weight="700">Keep Concise to Shrink Valley</text>

  <rect x="442" y="248" width="164" height="146" rx="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.8" />
  <text x="524" y="270" fill="#7dd3fc" font-size="11" font-weight="700" text-anchor="middle">3. THE REFOCUS</text>
  <text x="524" y="286" fill="#bae6fd" font-size="9.5" text-anchor="middle">(Sandwich Bottom Bread)</text>
  <text x="454" y="308" fill="#e0f2fe" font-size="9">• Restates main question</text>
  <text x="454" y="324" fill="#e0f2fe" font-size="9">• Injects key output format</text>
  <text x="454" y="338" fill="#e0f2fe" font-size="9">  and scope clarifications</text>
  <text x="454" y="356" fill="#e0f2fe" font-size="9">• Pulls attention back</text>
  <text x="454" y="376" fill="#38bdf8" font-size="9" font-weight="700">High Recency Leverage</text>

  <rect x="620" y="248" width="152" height="146" rx="8" fill="#3b0764" stroke="#c084fc" stroke-width="1.8" />
  <text x="696" y="270" fill="#d8b4fe" font-size="11" font-weight="700" text-anchor="middle">4. TRANSITION</text>
  <text x="696" y="286" fill="#e9d5ff" font-size="9.5" text-anchor="middle">(Inception Hand-Off)</text>
  <text x="632" y="308" fill="#f3e8ff" font-size="9">• Shifts from problem</text>
  <text x="632" y="322" fill="#f3e8ff" font-size="9">  poser to problem solver</text>
  <text x="632" y="340" fill="#f3e8ff" font-size="9">• Pre-fills opening tag or</text>
  <text x="632" y="354" fill="#f3e8ff" font-size="9">  quote: e.g. &lt;answer&gt;"</text>
  <text x="632" y="376" fill="#c084fc" font-size="9" font-weight="700">Forces Immediate Solution</text>
</svg>`,
      bierutCaption:
        'Counteract the early-middle "Valley of Meh" by sandwiching dynamic context between a focus-setting Introduction and a high-recency Refocus + Inception Transition.',
      annotations: [
        {
          step: '1',
          label: 'Introduction (Primacy Anchor)',
          explanation:
            'Declares the document archetype and main problem upfront so the LLM allocates its fixed per-token compute budget toward relevant features while reading context.',
        },
        {
          step: '2',
          label: 'The Valley of Meh',
          explanation:
            'Combined lost-in-the-middle recall decay and recency bias create an attention trough in the early middle; keep context concise and place critical items outside this zone.',
        },
        {
          step: '3',
          label: 'Sandwich Refocus & Inception Transition',
          explanation:
            'Restating the question with output constraints at the end and starting the assistant’s first words ("inception") forces the model into solver mode.',
        },
      ],
    },
    {
      id: 'pefl-ch06-svg-greedy-knapsack',
      title: 'Prompt Element Graph & Additive vs. Subtractive Greedy Assembly',
      subtitle:
        'Packing token-inert elements under a hard token budget while satisfying Position, Importance Tiers, Requirements, and Incompatibilities',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="peflCh06Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="peflArrG1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="peflArrG2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#peflCh06Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">DEPENDENCY-AWARE PROMPT ASSEMBLY: ADDITIVE vs. SUBTRACTIVE GREEDY ENGINES</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Solving the constrained 0-1 knapsack problem over Position, Importance Score, Requirements, and Incompatibilities</text>

  <!-- Left Column: Prompt Element Data Structure -->
  <rect x="24" y="68" width="244" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="146" y="92" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. PROMPT ELEMENT OBJECT</text>
  <text x="146" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Self-Contained Token-Inert Unit</text>

  <rect x="40" y="122" width="212" height="128" rx="6" fill="#0f172a" stroke="#0284c7" />
  <text x="52" y="142" fill="#7dd3fc" font-size="10" font-weight="700">Element Properties:</text>
  <text x="52" y="160" fill="#e0f2fe" font-size="9.5">• text: " Richard grew up..."</text>
  <text x="52" y="176" fill="#e0f2fe" font-size="9.5">• tokens: 42 (cached once)</text>
  <text x="52" y="192" fill="#e0f2fe" font-size="9.5">• position: 14 (chronological ID)</text>
  <text x="52" y="208" fill="#34d399" font-size="9.5">• importance: Tier 2 / Score 85</text>
  <text x="52" y="224" fill="#fbbf24" font-size="9.5">• requires: [elem_protagonist]</text>
  <text x="52" y="240" fill="#fda4af" font-size="9.5">• incompatible: [elem_short_v]</text>

  <rect x="40" y="264" width="212" height="116" rx="6" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="52" y="284" fill="#7dd3fc" font-size="10" font-weight="700">BPE Token Inertness Rule:</text>
  <text x="52" y="302" fill="#e0f2fe" font-size="9">"cat" (1) + "tail" (1) -&gt; "cattail" (3)</text>
  <text x="52" y="318" fill="#e0f2fe" font-size="9">"be" (1) + "am" (1) -&gt; "beam" (1)</text>
  <text x="52" y="338" fill="#bae6fd" font-size="9">• Start snippets with leading space</text>
  <text x="52" y="354" fill="#bae6fd" font-size="9">• End (never start) with single \n</text>
  <text x="52" y="370" fill="#bae6fd" font-size="9">• Prevents boundary token merges!</text>

  <!-- Middle Column: Additive Greedy Engine -->
  <rect x="284" y="68" width="236" height="328" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="402" y="92" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">2. ADDITIVE GREEDY</text>
  <text x="402" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Start Empty -&gt; Pack Highest Value</text>

  <rect x="300" y="124" width="204" height="52" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="402" y="144" fill="#e0f2fe" font-size="10" font-weight="600" text-anchor="middle">Step 1: Sort by Req &amp; Value</text>
  <text x="402" y="162" fill="#94a3b8" font-size="9" text-anchor="middle">Tier 1 static instructions first</text>

  <path d="M 402 176 L 402 198" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrG1)" />

  <rect x="300" y="202" width="204" height="66" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="402" y="222" fill="#e0f2fe" font-size="10" font-weight="600" text-anchor="middle">Step 2: Iterative Addition</text>
  <text x="402" y="238" fill="#94a3b8" font-size="9" text-anchor="middle">Add highest-score item where:</text>
  <text x="402" y="254" fill="#6ee7b7" font-size="9" text-anchor="middle">Reqs met &amp; No conflict &amp; Fits B</text>

  <path d="M 402 268 L 402 290" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrG1)" />

  <rect x="300" y="294" width="204" height="86" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="312" y="314" fill="#6ee7b7" font-size="10" font-weight="700">Step 3: Re-Sort by Position</text>
  <text x="312" y="332" fill="#e0f2fe" font-size="9">• Restores natural document order</text>
  <text x="312" y="348" fill="#e0f2fe" font-size="9">• Best when candidate pool &gt;&gt; B</text>
  <text x="312" y="364" fill="#fda4af" font-size="9">• Weak if high-val needs low-val</text>

  <!-- Right Column: Subtractive Greedy Engine -->
  <rect x="536" y="68" width="240" height="328" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="656" y="92" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">3. SUBTRACTIVE GREEDY</text>
  <text x="656" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Start Full -&gt; Prune Lowest Value</text>

  <rect x="552" y="124" width="208" height="52" rx="6" fill="#0f172a" stroke="#d97706" />
  <text x="656" y="144" fill="#fef3c7" font-size="10" font-weight="600" text-anchor="middle">Step 1: Load All Candidates</text>
  <text x="656" y="162" fill="#94a3b8" font-size="9" text-anchor="middle">Already in natural Position order</text>

  <path d="M 656 176 L 656 198" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrG2)" />

  <rect x="552" y="202" width="208" height="66" rx="6" fill="#0f172a" stroke="#d97706" />
  <text x="656" y="222" fill="#fef3c7" font-size="10" font-weight="600" text-anchor="middle">Step 2: Evict Lowest &amp; Orphans</text>
  <text x="656" y="238" fill="#94a3b8" font-size="9" text-anchor="middle">Drop lowest-score item (or shrink</text>
  <text x="656" y="254" fill="#fcd34d" font-size="9" text-anchor="middle">elastic snippet) + cascade reqs</text>

  <path d="M 656 268 L 656 290" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#peflArrG2)" />

  <rect x="552" y="294" width="208" height="86" rx="6" fill="#451a03" stroke="#f59e0b" />
  <text x="564" y="314" fill="#fbbf24" font-size="10" font-weight="700">Step 3: Stop When Length &lt;= B</text>
  <text x="564" y="332" fill="#fef3c7" font-size="9">• Naturally shrinks Elastic Snippets</text>
  <text x="564" y="348" fill="#fef3c7" font-size="9">• Best for moderate candidate sets</text>
  <text x="564" y="364" fill="#fda4af" font-size="9">• Cumbersome with many conflicts</text>
</svg>`,
      bierutCaption:
        'Model prompt assembly as a dependency-constrained knapsack solver: use Additive Greedy when filtering massive RAG pools and Subtractive Greedy when gracefully shrinking elastic snippets.',
      annotations: [
        {
          step: '1',
          label: 'Token-Inert Element Contract',
          explanation:
            'Prepending spaces and standardizing trailing newlines guarantees that concatenating snippets never alters their pre-computed BPE token counts.',
        },
        {
          step: '2',
          label: 'Additive Greedy Packing',
          explanation:
            'Iteratively selects the highest-importance element whose prerequisites are met and conflicts are absent until the token budget fills, then restores positional order.',
        },
        {
          step: '3',
          label: 'Subtractive Greedy Pruning',
          explanation:
            'Starts with the complete ordered document and successively drops lowest-value items (or steps down elastic snippets) while cascading broken requirements.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'pefl-ch06-mm1',
      name: 'The Valley of Meh & The Sandwich Refocus',
      tagline: 'LLM attention peaks at the opening frame and the final tokens, sagging in the early middle',
      naiveIntuition:
        'A Transformer attends uniformly to every token in its context window, so placing core instructions once at the top of a 10,000-token prompt is sufficient.',
      firstPrinciplesReality:
        'Because LLMs have a fixed per-token compute budget and exhibit both primacy framing and strong recency bias (in-context learning), information buried in the early-middle ("Valley of Meh") suffers severe recall degradation.',
      howToApply:
        'Use the Sandwich Technique: open with an Introduction to orient early token processing, place expendable context in the middle valley, and close with a Refocus + Inception Transition that restates the question and starts the answer.',
    },
    {
      id: 'pefl-ch06-mm2',
      name: 'BPE Boundary Token Inertness',
      tagline: 'Token counts are only additive if snippet boundaries prevent subword merging',
      naiveIntuition:
        'If Snippet A is 10 tokens and Snippet B is 15 tokens, concatenating A + B will always equal 25 tokens.',
      firstPrinciplesReality:
        'Byte-Pair Encoding (BPE) tokenizers greedily merge characters across string boundaries ("be" + "am" -> 1 token; "cat" + "tail" -> 3 tokens) and collapse adjacent newlines, invalidating pre-cached snippet lengths during assembly.',
      howToApply:
        'Format every prompt element to be token-inert: start text elements with a leading space (since GPT tokens include leading spaces, not trailing ones) and end—never start—every element with a single newline.',
    },
    {
      id: 'pefl-ch06-mm3',
      name: 'Position vs. Importance Decoupling',
      tagline: 'Where an element belongs in the reading order is distinct from whether it survives triage',
      naiveIntuition:
        'Sort prompt snippets directly by relevance score so the highest-scoring RAG snippet appears first and the lowest-scoring appears last.',
      firstPrinciplesReality:
        'Scrambling chronological chat turns or out-of-order book passages destroys narrative coherence; position is a structural property of the document, whereas importance is an inclusion priority for the knapsack solver.',
      howToApply:
        'Assign every prompt element both a `position` index (for final rendering order) and an `importance` tier/score (for additive or subtractive greedy selection).',
    },
  ],
  deepSections: [
    {
      id: 'pefl-ch06-sec1',
      sectionNumber: '6.1',
      title: 'Prompt Anatomy, The Valley of Meh, and Document Archetypes',
      subtitle:
        'Structuring Introductions, Sandwich Refocuses, Inception Transitions, and training-aligned Document Templates',
      coreMechanism:
        'A well-constructed prompt follows a four-part anatomy designed around Transformer attention mechanics: (1) the Introduction declares the document type and problem upfront so the model’s fixed per-token "thought budget" attends to task-relevant features while scanning subsequent text; (2) the Context body holds dynamic snippets, navigating the "Valley of Meh" in the early middle where the lost-in-the-middle phenomenon and recency bias reduce recall; (3) the Refocus implements the Sandwich Technique by restating the core question and output constraints after lengthy context; and (4) the Transition shifts perspective from problem poser to problem solver. In completion models—or chat models supporting assistant pre-filling—the "inception" trick writes the opening words or XML tag of the assistant’s response so the model must continue the solution immediately.\n\nBy the Little Red Riding Hood principle, the combined prompt and completion should match a document archetype abundant in pre-training data: an Advice Conversation (natural for multi-round ChatML and assistant-role inception), a Markdown Analytic Report (using a `# Scope` section for strict boundaries, a Table of Contents `# Analysis` scratchpad before `# Conclusion`, and `# Further Reading` as a hard stop sequence), or a Structured Document in XML (ideal for multiline tags and attributes, as in Anthropic’s `<antThinking>` and `<antArtifact>` schema) or YAML (`|2` block scalars for unescaped indented code).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Choose Advice Conversation, Markdown Report, or XML/YAML',
          detail:
            'Use ChatML/Advice for interactive turns, Markdown Reports with TOC stop-headers for objective analysis, or XML/YAML for deterministic multi-part extraction.',
        },
        {
          step: '2',
          title: 'Place Introduction at top and Refocus at bottom',
          detail:
            'Set task scope early, keep middle context tight to minimize the Valley of Meh, and restate output rules in the closing Refocus.',
        },
        {
          step: '3',
          title: 'Pre-fill the solver prefix or opening delimiter',
          detail:
            'End the prompt with the assistant’s opening phrase, quotation mark, or XML tag (e.g., `<assistant_response>`) to prevent meandering preambles.',
        },
      ],
      keyTakeaways: [
        'Because LLMs have a fixed compute budget per token, stating the goal in the Introduction is mandatory so the model extracts relevant signals while reading context.',
        'In Markdown Analytic Reports, adding `# Ideas` before `# Conclusion` in a Table of Contents creates a chain-of-thought scratchpad, while setting `# Appendix` as a stop sequence halts generation cleanly.',
        'XML excels at structured multi-block outputs (`<antThinking>` vs. `<antArtifact>`), whereas YAML `|2` block literals preserve exact code indentation without character escaping.',
      ],
      commonPitfalls: [
        'Leaving a naive or missing transition at the end of a completion prompt, causing the LLM to generate additional fictional questions or context instead of answering.',
        'Placing mission-critical constraints exclusively in the early-middle "Valley of Meh" of a long prompt where attention recall is weakest.',
      ],
      figures: [
        {
          file: 'pefl_0601.png',
          originalLabel: 'Figure 6-1. Anatomy of a well-constructed prompt',
          bierutTitle: 'Structure Prompts Around the Early-Middle "Valley of Meh" Attention Trough',
          editorialAnalysis:
            'Maps the canonical prompt sequence—Introduction, Context elements, Refocus, and Transition—against the empirical attention curve showing strong primacy at the start, a deep dip in the early middle ("Valley of Meh"), and rising recency impact toward the end.',
          keyTakeaways: [
            'Keep high-priority clarifications in the Introduction and Refocus, outside the Valley of Meh.',
            'Filter low-value context aggressively so the overall prompt stays compact and the valley stays shallow.',
          ],
        },
        {
          file: 'pefl_0602.png',
          originalLabel: 'Figure 6-2. Three variations of transition: missing, naive, and refined',
          bierutTitle: 'Force Immediate Problem Solving via Refined Inception Transitions',
          editorialAnalysis:
            'Compares three endings on a completion model (`text-davinci-002`): a missing transition causes the model to invent another movie preference; a naive question mark yields a conversational preamble; a refined transition that begins the answer sentence with an open quote (`"...is "`) forces the model to output the exact book title and close the quote.',
          keyTakeaways: [
            'Merging the refocus and transition by starting the assistant’s sentence eliminates conversational fluff and simplifies parsing.',
            'Even an opening quotation mark or XML tag at the end of the prompt acts as a deterministic syntactic constraint on the completion.',
          ],
        },
      ],
    },
    {
      id: 'pefl-ch06-sec2',
      sectionNumber: '6.2',
      title: 'Snippet Formatting, BPE Token Inertness, and Elastic Snippets',
      subtitle:
        'Designing modular, organic, brief, and token-inert prompt elements with variable-length fallbacks',
      coreMechanism:
        'Every piece of content—whether API JSON, cross-file code, or few-shot examples—must be formatted into a snippet satisfying four engineering properties: Modularity (list items or tree leaves that can be inserted or dropped cleanly), Naturalness (matching the host document’s idiom, such as formatting cross-file code hints as `// <consider this snippet...>` comments inside a source file or weaving few-shot examples as prior solved turns in ChatML), Brevity, and Inertness.\n\nToken inertness guarantees that a snippet’s token count is computed once and never mutates when concatenated with neighbors. Because BPE tokenizers merge subwords across boundaries (`"be" + "am"` drops from 2 tokens to 1; `"cat" + "tail"` jumps from 2 tokens to 3) and compress consecutive newlines, snippets must start with a leading space and end (never start) with a single newline. Beyond fixed-size chunks, when a retrieved passage benefits from surrounding context, engineers can construct Elastic Snippets—either a single element holding multiple length tiers separated by ellipses (`...`) or a family of mutually incompatible prompt elements ranging from tight quote to full chapter.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Format data organically for the chosen document archetype',
          detail:
            'Render JSON API payloads as Q&A turns in conversations, `####` subsections in Markdown reports, `<tag>` nodes in XML, or commented asides in source code.',
        },
        {
          step: '2',
          title: 'Prefix with space and terminate with a single newline',
          detail:
            'Align snippet boundaries with GPT BPE tokenization rules so cached token lengths remain strictly additive during assembly.',
        },
        {
          step: '3',
          title: 'Pre-generate compact, medium, and full-context variants',
          detail:
            'Create multi-resolution versions of key passages (replacing omitted middle paragraphs with `...`) so the assembler can pick the largest version that fits.',
        },
      ],
      keyTakeaways: [
        'Pasting raw natural language into a code-completion prompt breaks document naturalness; wrapping external code or hints inside native `//` comments preserves completion quality.',
        'BPE token counts are not naturally additive; enforcing leading spaces and trailing-only newlines makes snippet token counts invariant.',
        'Elastic snippets reframe assembly from a binary "Does it fit?" check to "What is the richest resolution of this passage that fits the remaining budget?"',
      ],
      commonPitfalls: [
        'Allowing snippets to both start and end with newlines, which causes GPT tokenizers to merge adjacent `\n\n` pairs into single tokens and throw off budget math.',
        'Inserting multiple overlapping context variants of the same passage without declaring them mutually incompatible.',
      ],
      figures: [
        {
          file: 'pefl_0605.png',
          originalLabel: 'Figure 6-5. Snippetizing context into flexible snippets',
          bierutTitle: 'Construct Multi-Resolution Elastic Snippets to Maximize Context Density',
          editorialAnalysis:
            'Shows three ways to extract two relevant passages from a chapter: two bare quotes, two quotes padded with local context, or one continuous block bridging both quotes. By storing these as elastic tiers (using `...` for omitted paragraphs) or incompatible sibling elements, the prompt assembler dynamically trades off brevity against narrative continuity.',
          keyTakeaways: [
            'Bare quotes save tokens, whereas bridged passages preserve the causal relationship between two moments in a text.',
            'Elastic elements let the assembly algorithm degrade gracefully under tight token budgets instead of dropping a critical source entirely.',
          ],
        },
      ],
    },
    {
      id: 'pefl-ch06-sec3',
      sectionNumber: '6.3',
      title: 'Element Relationships & Greedy Knapsack Prompt Assembly',
      subtitle:
        'Optimizing prompt value under Position, Importance, and Dependency constraints via Additive and Subtractive Greedy engines',
      coreMechanism:
        'Once static and dynamic contents are packaged into prompt elements, each element carries a text payload, a pre-computed token length, and three relational properties: Position (the canonical chronological or structural index where the element must appear if selected), Importance (a discrete priority tier or continuous utility score—potentially normalized by token length—where Tier 1 holds non-negotiable instructions and lower tiers hold optional context), and Dependency (Requirements, where Element B needs Element A to make sense, such as introducing a character before referencing "He"; and Incompatibilities, where Element X excludes Element Y, such as long vs. short elastic variants).\n\nAssembling the final prompt is a dependency-constrained 0-1 knapsack optimization problem bounded by $B = W_{\\text{max}} - T_{\\text{response}}$. While an MVP can use a Minimal Prompt Crafter that simply keeps the tail suffix of ordered elements, production systems use fast greedy algorithms: Additive Greedy starts empty, iteratively adds the highest-importance valid element until $B$ is reached, and re-sorts by Position; Subtractive Greedy starts with all elements in Position order and iteratively evicts the lowest-importance elements (and any dependents whose requirements break) until total tokens fit within $B$.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Assign Position, Importance Tier/Score, Requirements, and Incompatibilities',
          detail:
            'Lock core instructions and output formatting in Tier 1, score dynamic snippets by relevance or value-per-token, and wire prerequisite/exclusion edges.',
        },
        {
          step: '2',
          title: 'Run Minimal Suffix, Additive Greedy, or Subtractive Greedy',
          detail:
            'Use Additive Greedy when filtering a huge candidate pool down to a small budget; use Subtractive Greedy when pruning a moderate set with elastic snippets.',
        },
        {
          step: '3',
          title: 'Sort surviving elements by their Position index and join',
          detail:
            'Emit the selected token-inert strings in strict document order so narrative chronology and section hierarchies remain intact.',
        },
      ],
      formulas: [
        {
          name: 'Dependency-Constrained Knapsack Prompt Assembly Objective',
          expression:
            '\\max_{x_i \\in \\{0,1\\}} \\sum_{i=1}^{n} v_i x_i \\quad \\text{s.t.} \\quad \\sum_{i=1}^{n} \\ell_i x_i \\le W_{\\text{max}} - T_{\\text{resp}}, \\quad x_i \\le x_j \\; \\forall (i,j) \\in \\mathcal{R}, \\quad x_i + x_k \\le 1 \\; \\forall (i,k) \\in \\mathcal{I}',
          intuition:
            'Select a binary subset of prompt elements to maximize total importance value v_i without exceeding the net token budget, while guaranteeing every required prerequisite (R) is present and no two incompatible variants (I) coexist.',
          variables: [
            {
              symbol: 'x_i \\in \\{0, 1\\}',
              meaning: 'Binary decision variable indicating whether prompt element i is included (1) or excluded (0)',
            },
            {
              symbol: 'v_i, \\; \\ell_i',
              meaning: 'Importance score v_i and pre-computed inert token length l_i of element i',
            },
            {
              symbol: '\\mathcal{R}, \\; \\mathcal{I}',
              meaning: 'Set of requirement edges (i requires j) and incompatibility pairs (i excludes k)',
            },
          ],
          workedExample:
            'With a 4,096-token window and 596 tokens reserved for the completion (B = 3,500), an Additive Greedy crafter locks Tier-1 instructions (400 tokens), then adds highest-v_i RAG snippets whose prerequisites in R are already selected until the remaining 3,100-token budget is filled.',
        },
      ],
      keyTakeaways: [
        'Never confuse Position with Importance: an Introduction has Position 1 and Tier 1 Importance, whereas a recent chat turn has a high Position index and high Importance.',
        'Additive Greedy excels when discarding the vast majority of a huge candidate pool, provided elements are pre-sorted so requirements are evaluated before dependents.',
        'Subtractive Greedy handles elastic snippets naturally by stepping down a passage from its longest version to shorter fallbacks until the prompt fits the token budget.',
      ],
      commonPitfalls: [
        'Using Additive Greedy when a high-value element depends on a low-value prerequisite without dependency boosting, causing the high-value element to starve.',
        'Using Subtractive Greedy across hundreds of mutually incompatible elements without first resolving exclusion groups.',
      ],
      figures: [
        {
          file: 'pefl_0606.png',
          originalLabel:
            'Figure 6-6. Prompt elements and their properties, including all the information you need to assemble your prompt',
          bierutTitle: 'Encapsulate Every Snippet with Token Length, Position, Importance, and Dependencies',
          editorialAnalysis:
            'Illustrates the complete data schema of a prompt element prior to assembly: the formatted text string, pre-computed token count, canonical document position, importance score, required upstream elements, and mutually incompatible elements.',
          keyTakeaways: [
            'Decoupling position from importance lets the engine optimize inclusion by value while rendering in natural reading order.',
            'Explicit requirement and incompatibility pointers prevent dangling pronouns ("He...") and duplicate overlapping passages.',
          ],
        },
        {
          file: 'pefl_0608.png',
          originalLabel: 'Figure 6-8. Additive greedy approach',
          bierutTitle: 'Pack High-Value Elements Bottom-Up via Additive Greedy Selection',
          editorialAnalysis:
            'Traces the Additive Greedy state machine: starting from an empty prompt, the engine scans candidates sorted by satisfied requirements and importance value, appends elements that fit the remaining token budget without conflict, and finally re-sorts the selected subset by Position.',
          keyTakeaways: [
            'Additive Greedy is fastest when the candidate pool is much larger than the available context window.',
            'Always run a final positional re-sort after greedy value selection to restore coherent document structure.',
          ],
        },
        {
          file: 'pefl_0609.png',
          originalLabel: 'Figure 6-9. The subtractive greedy approach',
          bierutTitle: 'Prune Low-Value Elements and Orphaned Dependents via Subtractive Greedy Triage',
          editorialAnalysis:
            'Traces the Subtractive Greedy state machine: starting with all candidate elements arranged in Position order, the engine iteratively removes the lowest-value element and cascades deletions to any element whose required prerequisite was just removed, halting as soon as total tokens fit the budget.',
          keyTakeaways: [
            'Subtractive Greedy preserves positional order throughout execution and naturally steps down elastic snippets.',
            'Cascading requirement pruning ensures no dependent snippet is left stranded when its prerequisite is evicted.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Document Archetypes & Prompt Assembly Engines Comparison',
      description:
        'Selecting the right document container and assembly algorithm based on parsing requirements, indentation sensitivity, and candidate pool scale.',
      headers: [
        'Archetype / Engine',
        'Structural Mechanism',
        'Strengths',
        'Failure Modes & Constraints',
        'Optimal Use Case',
      ],
      rows: [
        [
          'Advice Conversation (ChatML / Script)',
          'Multi-turn seeker/assistant dialogue + inception pre-fill',
          'Natural multi-round tool integration & RLHF instruction compliance',
          'Chatty persona overhead; markerless transcripts blur speaker boundaries',
          'Interactive assistants & multi-turn agentic workflows',
        ],
        [
          'Analytic Report (Markdown + TOC)',
          'Hierarchical `#` headers, `# Scope` rules & TOC scratchpad',
          'Objective tone; TOC `# Ideas` enables CoT; `# Appendix` acts as stop sequence',
          'Requires firm transition into `# Conclusion` to avoid meandering analysis',
          'Single-pass analytical synthesis, reviews, and business/technical reports',
        ],
        [
          'Structured Document (XML / YAML)',
          'Explicit `<tags>` with attributes or YAML `|2` block indentation',
          'Deterministic regex/DOM extraction (`<antThinking>` vs `<antArtifact>`)',
          'XML requires escaping 5 entities (`<>&"\'`); YAML breaks on bad indentation',
          'Complex multi-part UI outputs, code generation & tool payloads',
        ],
        [
          'Additive Greedy Assembler',
          'Starts empty; adds highest-value valid element, then re-sorts by position',
          'Blazingly fast when candidate pool >> context window budget',
          'Misses high-value elements that depend on low-value prerequisites',
          'High-volume RAG pipelines filtering hundreds of candidate snippets',
        ],
        [
          'Subtractive Greedy Assembler',
          'Starts full in position order; evicts lowest-value & cascades broken reqs',
          'Naturally steps down Elastic Snippets from long to short variants',
          'Slow when candidate pool is huge or riddled with incompatibilities',
          'Curated multi-section prompts with elastic passage fallbacks',
        ],
      ],
      verdictRule:
        'Format multi-part programmatic outputs in XML (or YAML `|2` for raw indented code), use Markdown Reports with TOC scratchpads for analytical tasks, and pair Additive Greedy with large RAG pools or Subtractive Greedy with elastic snippets.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'pefl-ch06-scen1',
      title: 'Curing Context-Window Overflow & Dangling References in Prompt Assembly',
      roleAndContext:
        'Principal AI Engineer building a literary analysis assistant that injects retrieved character bios and scene quotes.',
      symptomOrFailure:
        'The prompt assembler concatenates snippets without leading spaces, causing BPE token counts to drift by +8% and trigger API context-length errors; worse, when a character bio is dropped for space, follow-up snippets starting with "He then traveled..." confuse the LLM.',
      naiveFixAndWhyItFails:
        'Reserving an arbitrary 20% safety buffer on the context window and sorting all snippets strictly by relevance score, which scrambles chronological scene order.',
      firstPrinciplesSolution:
        'Enforce BPE token inertness (leading space, single trailing newline) for exact token accounting, decouple chronological `position` from `importance`, and add a `requires` dependency edge from every "He..." scene snippet to its introducing character bio.',
      measurableOutcome:
        'Achieves 100% exact token budget utilization with zero API overflow errors and eliminates ungrounded pronoun hallucinations.',
    },
    {
      id: 'pefl-ch06-scen2',
      title: 'Separating Hidden Reasoning from Rendered Code via XML Structured Documents',
      roleAndContext:
        'Staff Product Engineer designing an interactive UI code-generation workspace similar to Anthropic Artifacts.',
      symptomOrFailure:
        'When prompted in freeform Markdown conversation, the LLM mixes chain-of-thought reasoning, conversational pleasantries, and React code in unpredictable orders, breaking the right-hand preview renderer.',
      naiveFixAndWhyItFails:
        'Adding explicit negative rules ("Do not talk before or after the code block"), which strips the model of its reasoning scratchpad and degrades code correctness on complex components.',
      firstPrinciplesSolution:
        'Re-architect the prompt as an XML Structured Document with few-shot examples demonstrating `<antThinking>` for deciding whether and how to build the artifact followed by `<antArtifact identifier="..." language="...">`, ending the prompt with an `<assistant_response>` inception transition.',
      measurableOutcome:
        'Delivers 99.8% deterministic parser extraction while preserving full chain-of-thought reasoning quality inside the hidden `<antThinking>` block.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'pefl-ch06-q1',
        scenarioPrompt:
          'Why does a prompt engineer place a high-level Introduction at the very beginning of a long prompt AND a Refocus + Transition at the very end (the Sandwich Technique), rather than putting all instructions in one place?',
        options: [
          {
            label: 'A',
            text: 'Because the Introduction guides the LLM’s fixed per-token thought budget while reading the context, while the closing Refocus overcomes the early-middle "Valley of Meh" by harnessing strong recency bias right before generation.',
            isCorrect: true,
            explanation:
              'LLMs cannot pause to re-read context after discovering the question at the end, so the Introduction orients early attention; the closing Refocus restores focus after the lost-in-the-middle dip.',
          },
          {
            label: 'B',
            text: 'Because BPE tokenizers delete the middle 50% of tokens unless the first and last lines are identical.',
            isCorrect: false,
            explanation:
              'BPE tokenizers encode all tokens; the Valley of Meh is an attention recall phenomenon, not tokenizer deletion.',
          },
          {
            label: 'C',
            text: 'Because ChatML APIs reject prompts that do not start and end with identical strings.',
            isCorrect: false,
            explanation:
              'ChatML has no such validation rule; the Sandwich Technique is an attention optimization pattern.',
          },
          {
            label: 'D',
            text: 'To force the Subtractive Greedy algorithm to evict the system prompt first.',
            isCorrect: false,
            explanation:
              'Core instructions occupy Tier 1 importance and are never evicted first.',
          },
        ],
      },
      {
        id: 'pefl-ch06-q2',
        scenarioPrompt:
          'You pre-calculate the token length of every snippet once to run fast greedy prompt assembly. However, when concatenating snippets A and B, the combined token count differs from `len(A) + len(B)`. Which formatting convention makes GPT BPE snippets token-inert?',
        options: [
          {
            label: 'A',
            text: 'Wrap every snippet in triple JSON quotes and pad with four trailing spaces.',
            isCorrect: false,
            explanation:
              'GPT tokenizers group leading spaces with words, so trailing spaces merge unpredictably with the next snippet’s first word.',
          },
          {
            label: 'B',
            text: 'Start snippets with a leading blank space (rather than ending with one) and ensure snippets never both start and end with newlines (prefer ending with a single newline).',
            isCorrect: true,
            explanation:
              'GPT BPE vocabularies contain tokens starting with a space and combine adjacent newlines; leading spaces and trailing-only single newlines prevent cross-boundary token merges.',
          },
          {
            label: 'C',
            text: 'Convert all characters to uppercase hexadecimal before tokenization.',
            isCorrect: false,
            explanation:
              'Hex encoding balloons token counts and destroys natural language comprehension.',
          },
          {
            label: 'D',
            text: 'Remove all whitespace between snippets so words concatenate directly like `"cat" + "tail" -> "cattail"`.',
            isCorrect: false,
            explanation:
              'Direct word concatenation is the exact cause of non-additive BPE token counts (`"cat"` [1] + `"tail"` [1] becomes `[c, att, ail]` [3]).',
          },
        ],
      },
      {
        id: 'pefl-ch06-q3',
        scenarioPrompt:
          'You are designing a Markdown Analytic Report prompt for a completion model. You want the model to brainstorm intermediate reasoning before giving its final verdict, and you want generation to halt immediately after the verdict without rambling. How can a Markdown Table of Contents (TOC) achieve both?',
        options: [
          {
            label: 'A',
            text: 'Include `# Ideas` (or `# Analysis`) before `# Conclusion` in the TOC as a chain-of-thought scratchpad, and list `# Further Reading` (or `# Appendix`) after `# Conclusion` while configuring `# Further Reading` as an API stop sequence.',
            isCorrect: true,
            explanation:
              'The LLM follows the TOC structure it sees in the introduction—using `# Ideas` to reason before `# Conclusion`, and emitting `# Further Reading` at the end of the conclusion, which triggers the stop sequence.',
          },
          {
            label: 'B',
            text: 'Put the entire TOC inside an XML comment `<!-- -->` at the bottom of the prompt.',
            isCorrect: false,
            explanation:
              'A TOC works by orienting the document hierarchy at the beginning of the Markdown report and driving section header completions.',
          },
          {
            label: 'C',
            text: 'Use YAML `|2` indentation inside the TOC headers.',
            isCorrect: false,
            explanation:
              'YAML `|2` is a block scalar syntax for YAML structured documents, not Markdown TOC control.',
          },
          {
            label: 'D',
            text: 'Repeat the `# Conclusion` header five times in ascending order.',
            isCorrect: false,
            explanation:
              'Repeating headers does not create a reasoning scratchpad or a deterministic stop boundary.',
          },
        ],
      },
      {
        id: 'pefl-ch06-q4',
        scenarioPrompt:
          'When building a prompt assembly engine, under what condition does a simple Additive Greedy algorithm fail to include a critically important snippet, and when is Subtractive Greedy preferred?',
        options: [
          {
            label: 'A',
            text: 'Additive Greedy fails when the candidate pool is much larger than the context window; Subtractive Greedy is preferred when there are thousands of incompatible snippets.',
            isCorrect: false,
            explanation:
              'This is backwards: Additive Greedy excels when the candidate pool is huge, while Subtractive Greedy struggles with many incompatibilities.',
          },
          {
            label: 'B',
            text: 'Additive Greedy fails when a high-value element depends on a low-value prerequisite (which never gets added first unless boosted); Subtractive Greedy is preferred when managing a moderate number of elements or stepping down Elastic Snippets.',
            isCorrect: true,
            explanation:
              'Because Additive Greedy only considers elements whose requirements are already met, a low-value prerequisite blocks its high-value dependent; Subtractive Greedy starts full and naturally shrinks elastic snippets.',
          },
          {
            label: 'C',
            text: 'Additive Greedy cannot re-sort elements by Position after selection.',
            isCorrect: false,
            explanation:
              'Additive Greedy explicitly re-sorts selected elements by their Position index as its final step.',
          },
          {
            label: 'D',
            text: 'Subtractive Greedy ignores token budgets and only checks XML escaping.',
            isCorrect: false,
            explanation:
              'Subtractive Greedy specifically prunes elements until the total token count fits the token budget.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'pefl-ch06-fc1',
        category: 'architecture',
        front: 'What are the four structural zones in the Anatomy of an Ideal Prompt?',
        back: '1) Introduction (sets document type & early focus), 2) Context body (navigating the early-middle Valley of Meh), 3) Refocus (Sandwich reminder of the question/constraints), and 4) Transition (inception hand-off to solver mode).',
        mentalHook: 'Intro -> Context (Valley) -> Refocus -> Transition.',
      },
      {
        id: 'pefl-ch06-fc2',
        category: 'foundation',
        front: 'What causes the "Valley of Meh" in LLM prompts, and where is it located?',
        back: 'It is caused by the combination of the lost-in-the-middle recall dip and in-context recency bias, creating an attention trough in the early middle of the prompt.',
        mentalHook: 'Primacy at the start + Recency at the end = Valley of Meh in the early middle.',
      },
      {
        id: 'pefl-ch06-fc3',
        category: 'adaptation',
        front: 'What is the "Inception" technique in prompt transitions?',
        back: 'Writing the beginning of the assistant’s response (or speaking for the assistant role in prior turns) at the end of the prompt so the LLM assumes ownership of that framing and immediately completes the solution.',
        mentalHook: 'Plant the opening words in the model’s mouth so it has no choice but to finish the answer.',
      },
      {
        id: 'pefl-ch06-fc4',
        category: 'data',
        front: 'How do XML and YAML compare as Structured Document formats for prompts?',
        back: 'XML uses explicit opening/closing tags with attributes (great for short/multiline blocks like Anthropic Artifacts, though requiring 5 entity escapes: `<>&"\'`), whereas YAML uses indentation (`|2` block scalars) that preserves raw code whitespace with zero escaping.',
        mentalHook: 'XML = Explicit Tags & Attributes; YAML |2 = Zero-Escape Indented Code.',
      },
      {
        id: 'pefl-ch06-fc5',
        category: 'optimization',
        front: 'What are the four target properties when formatting context snippets?',
        back: 'Modularity (easy to insert/remove as list items or tree leaves), Naturalness (matching the host document’s style, like comments in code), Brevity (minimal tokens), and Inertness (boundary-safe BPE tokenization).',
        mentalHook: 'Modular, Natural, Brief, and Inert.',
      },
      {
        id: 'pefl-ch06-fc6',
        category: 'optimization',
        front: 'What are the three relational properties among prompt elements in an assembly engine?',
        back: '1) Position (canonical reading order index), 2) Importance (priority tier or utility score for inclusion), and 3) Dependency (Requirements that must precede an element, and Incompatibilities that mutually exclude each other).',
        mentalHook: 'Where it goes (Position), How much it matters (Importance), What it needs/blocks (Dependency).',
      },
    ],
    feynmanChallenges: [
      {
        id: 'pefl-ch06-feyn1',
        conceptTitle: 'The Valley of Meh, Sandwich Refocusing, and Inception Transitions',
        prompt:
          'Explain from first principles why a 12,000-token prompt that states its instructions only at line 1 and ends with a raw dump of retrieved documents produces unfocused or hallucinated completions, and walk through the exact anatomical fix.',
        rubricChecklist: [
          'Explains why the Introduction is still needed at line 1 (because the LLM has a fixed thought budget per token and must know what to look for while reading context).',
          'Describes the Valley of Meh in the early middle created by the lost-in-the-middle phenomenon and recency bias.',
          'Applies the Sandwich Technique by adding a Refocus after the context dump to restate the core question and output format rules.',
          'Demonstrates an Inception Transition that switches from problem poser to problem solver by pre-filling the opening words, quote, or XML tag of the answer.',
        ],
        modelExplanation:
          'When an LLM reads a prompt, it allocates a fixed compute budget per token; without an Introduction at line 1, it doesn’t know what features to extract while scanning 12,000 tokens of context. However, as the context stretches on, early-middle details fall into the "Valley of Meh" (the lost-in-the-middle attention dip), while the final tokens exert massive recency pull. If your prompt ends with raw retrieved snippets and no transition, the model simply continues generating more fictional snippets! To fix this, apply the Sandwich Technique: keep the Introduction at the top, place a Refocus right after the context to restate the question and output constraints, and finish with an Inception Transition that pre-fills the start of the assistant’s answer.',
      },
      {
        id: 'pefl-ch06-feyn2',
        conceptTitle: 'Token Inertness, Elastic Snippets, and Greedy Knapsack Assembly',
        prompt:
          'Design a runtime prompt assembly engine for an app with a strict 4,000-token budget. Explain how you guarantee cached snippet token counts stay exact upon concatenation, how you model multi-resolution passages, and how to choose between Additive and Subtractive Greedy assembly.',
        rubricChecklist: [
          'Explains BPE boundary merging (`"cat"+"tail"` -> 3 tokens, newline collapsing) and enforces token inertness via leading spaces and trailing-only single newlines.',
          'Distinguishes Position (final document order) from Importance (inclusion score/tier) and Dependency (Requirements and Incompatibilities).',
          'Defines Elastic Snippets (variable-length versions using `...` or mutually incompatible sibling elements).',
          'Contrasts Additive Greedy (start empty, add highest-value valid items, re-sort by Position—ideal for huge candidate pools) with Subtractive Greedy (start full, evict lowest-value & cascade broken requirements—ideal for stepping down elastic snippets).',
        ],
        modelExplanation:
          'First, make every snippet token-inert so pre-computed token counts are strictly additive: start text snippets with a space and end (never start) them with a single newline so BPE tokenizers never merge words or collapse adjacent newlines across boundaries. Next, tag each snippet with its canonical Position, Importance tier/score, Requirements, and Incompatibilities. Represent multi-paragraph quotes as Elastic Snippets—either stepped versions using "..." or incompatible sibling elements. Finally, if filtering 500 RAG snippets down to 15, run Additive Greedy (packing highest-value valid items from an empty state and re-sorting by Position). If refining a curated set of elastic passages, run Subtractive Greedy (starting full in Position order and stepping down or evicting lowest-value items and orphaned dependents until total tokens <= 4,000).',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'pefl-valley-of-meh',
        label: 'The Valley of Meh',
        category: 'foundation',
        chapterNumber: 6,
        importance: 1,
        definition:
          'The attention recall trough in the early middle of a prompt caused by the interaction of the lost-in-the-middle phenomenon and recency bias.',
        whyItMatters:
          'Dictates where high-priority instructions (start and end) versus expendable context (early middle) must be positioned.',
      },
      {
        id: 'pefl-sandwich-inception',
        label: 'Sandwich Refocus & Inception',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Framing context between an opening Introduction and a closing Refocus, followed by pre-filling the start of the assistant’s completion to force solver mode.',
        whyItMatters:
          'Orients early per-token compute, recovers attention after long context, and eliminates conversational preambles.',
      },
      {
        id: 'pefl-document-archetypes',
        label: 'Document Archetypes (Chat, Report, XML/YAML)',
        category: 'adaptation',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Casting prompts into training-natural containers: Advice Conversations, Markdown Analytic Reports (with TOC scratchpads/stops), or XML/YAML Structured Documents.',
        whyItMatters:
          'Aligns prompt structure with pre-training priors (Little Red Riding Hood principle) and enables deterministic output parsing.',
      },
      {
        id: 'pefl-token-inertness',
        label: 'BPE Token Inertness',
        category: 'optimization',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Formatting snippets (leading space, single trailing newline) so concatenating strings never alters their individual BPE token counts.',
        formulaOrRule: 'tokens(A + B) == tokens(A) + tokens(B)',
        whyItMatters:
          'Allows the prompt assembler to compute snippet token lengths once and run fast knapsack math without boundary drift.',
      },
      {
        id: 'pefl-elastic-snippets',
        label: 'Elastic Prompt Elements',
        category: 'data',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Variable-resolution versions of a context passage (from bare quotes separated by "..." up to full surrounding paragraphs) linked by incompatibility rules.',
        whyItMatters:
          'Lets the prompt crafter adaptively select the richest context resolution that fits the remaining token budget.',
      },
      {
        id: 'pefl-greedy-knapsack-assembly',
        label: 'Additive & Subtractive Greedy Assembly',
        category: 'optimization',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Dependency-aware 0-1 knapsack heuristics that pack or prune prompt elements by Importance while respecting Position, Requirements, and Incompatibilities.',
        formulaOrRule: 'Max sum(v_i * x_i) s.t. sum(l_i * x_i) <= Budget',
        whyItMatters:
          'Automates real-time triage of competing static and dynamic elements into a coherent, budget-compliant prompt.',
      },
    ],
    edges: [
      {
        source: 'pefl-sandwich-inception',
        target: 'pefl-valley-of-meh',
        relationship: 'mitigates',
        explanation:
          'Bookending the prompt with an Introduction and a closing Refocus keeps core instructions out of the Valley of Meh.',
      },
      {
        source: 'pefl-token-inertness',
        target: 'pefl-greedy-knapsack-assembly',
        relationship: 'prerequisite_for',
        explanation:
          'Greedy knapsack assembly relies on additive token counts, which holds only when snippets are formatted to be token-inert.',
      },
      {
        source: 'pefl-elastic-snippets',
        target: 'pefl-greedy-knapsack-assembly',
        relationship: 'optimizes',
        explanation:
          'Elastic snippets give the Subtractive Greedy assembler fine-grained fallback sizes to fill the token budget without dropping a passage completely.',
      },
      {
        source: 'pefl-document-archetypes',
        target: 'pefl-sandwich-inception',
        relationship: 'part_of',
        explanation:
          'The chosen document archetype determines how the Introduction, Refocus, and Inception Transition (e.g., XML `<assistant_response>` vs. Markdown `# Conclusion`) are expressed.',
      },
      {
        source: 'pefl-greedy-knapsack-assembly',
        target: 'pefl-valley-of-meh',
        relationship: 'mitigates',
        explanation:
          'Filtering out low-importance elements via greedy assembly shrinks total prompt length, narrowing the Valley of Meh.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 13,
    figuresIncluded: 6,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 6 (Anatomy of Ideal Prompt, Valley of Meh, Sandwich & Inception Transition, Advice Conversation, Markdown Analytic Report with TOC scratchpad/stop, XML Artifacts & YAML |2 Structured Documents, Modularity/Naturalness/Brevity/Inertness, Elastic Snippets, Position/Importance/Dependency, and Minimal/Additive/Subtractive Greedy Assembly) with 6 extracted figures.',
  },
};
