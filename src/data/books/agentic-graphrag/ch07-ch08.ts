import type { ChapterMastery } from '../../../types/book';

export const agrgCh07Mastery: ChapterMastery = {
  chapterNumber: 7,
  chapterId: 'ch07',
  title: 'Self-Evolution and Evaluation',
  subtitle:
    'Execution Graphs, Four-Layer Cognitive Autopsies, Semantic Backpropagation, and Graduated Validation',
  readingTimeMinutes: 9,
  sourceWordCount: 14213,
  executiveThesis:
    'An agent that reasons across graphs without recording, diagnosing, and updating its own reasoning paths degrades silently as dependencies and data distributions shift. Capturing every decision, retrieval, and tool call as an immutable execution graph enables a four-layer evaluation pipeline to localize faults to specific nodes and propagate neighbor-aware corrections. Deterministic intervention routing and a three-tier graduated validation protocol then govern safe self-evolution in production.',
  paradigmShift: {
    oldWay:
      'Teams logged agent outputs into flat text files, manually inspected failed traces after user escalations, and rewrote monolithic prompts with no visibility into cross-node regressions.',
    newWay:
      'OpenTelemetry spans write two-phase causal execution graphs into Neo4j, where automated four-layer judges isolate node-level faults and drive neighbor-aware semantic backpropagation through staged canary and staging gates.',
    whyItChanged:
      'Multi-step graph agents fail via subtle premature hypothesis closure and cascading neighbor interactions that flat logs cannot localize or patch safely.',
  },
  customDiagrams: [
    {
      id: 'agrg-ch07-svg-01',
      title: 'Four-Layer Cognitive Autopsy & Intervention Router',
      subtitle:
        'Sequential diagnostic filtering from millisecond NLI grounding gates to code-verified tool execution',
      bierutCaption:
        'Read this pipeline from left to right as a cost-optimizing sieve: Layer 0 blocks 60–70% of ungrounded hallucinations at classifier speed before expensive J1 and TIR-Judge models isolate whether to fix the graph, prompt, weights, or output schema.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0B0F19"/>
  <text x="28" y="34" fill="#F9FAFB" font-size="15" font-weight="700" font-family="JetBrains Mono, monospace">STAGE 1: SEQUENTIAL FOUR-LAYER COGNITIVE AUTOPSY PIPELINE</text>
  <text x="28" y="54" fill="#9CA3AF" font-size="11">Execution Graph Node Trace -&gt; Progressive Fault Localization -&gt; Deterministic Intervention Routing</text>

  <!-- Execution Graph Source -->
  <rect x="24" y="78" width="126" height="124" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="36" y="102" fill="#60A5FA" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">EXECUTION GRAPH</text>
  <text x="36" y="122" fill="#E5E7EB" font-size="10">Two-Phase OTel</text>
  <text x="36" y="138" fill="#E5E7EB" font-size="10">:TRIGGERED Lineage</text>
  <text x="36" y="154" fill="#9CA3AF" font-size="9.5">Payloads + Latency</text>
  <text x="36" y="170" fill="#9CA3AF" font-size="9.5">Node ID Coordinates</text>

  <!-- Layer 0 -->
  <rect x="176" y="78" width="132" height="124" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.8"/>
  <text x="188" y="100" fill="#FB923C" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">L0: GLiClass NLI</text>
  <text x="188" y="118" fill="#F9FAFB" font-size="10" font-weight="600">Hallucination Gate</text>
  <text x="188" y="136" fill="#D1D5DB" font-size="9.5">KG Triples Premise</text>
  <text x="188" y="152" fill="#D1D5DB" font-size="9.5">Score &gt;= 0.85 Pass</text>
  <text x="188" y="172" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">&lt;5% Judge Compute</text>

  <!-- Layer 1 -->
  <rect x="334" y="78" width="132" height="124" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="346" y="100" fill="#60A5FA" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">L1: J1 Context</text>
  <text x="346" y="118" fill="#F9FAFB" font-size="10" font-weight="600">Sufficiency Check</text>
  <text x="346" y="136" fill="#D1D5DB" font-size="9.5">1. Completeness</text>
  <text x="346" y="152" fill="#D1D5DB" font-size="9.5">2. Contradiction</text>
  <text x="346" y="168" fill="#D1D5DB" font-size="9.5">3. Ambiguity</text>

  <!-- Layer 2 -->
  <rect x="492" y="78" width="132" height="124" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.8"/>
  <text x="504" y="100" fill="#FB923C" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">L2: Fault Isolator</text>
  <text x="504" y="118" fill="#F9FAFB" font-size="10" font-weight="600">KI vs. InfoGain(i)</text>
  <text x="504" y="136" fill="#D1D5DB" font-size="9.5">DECOMPOSE Claims</text>
  <text x="504" y="152" fill="#D1D5DB" font-size="9.5">InfoGain Dead Ends</text>
  <text x="504" y="168" fill="#D1D5DB" font-size="9.5">MoP Q/A-Pathway</text>

  <!-- Layer 3 -->
  <rect x="650" y="78" width="126" height="124" rx="8" fill="#111827" stroke="#059669" stroke-width="1.8"/>
  <text x="662" y="100" fill="#34D399" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">L3: TIR-Judge</text>
  <text x="662" y="118" fill="#F9FAFB" font-size="10" font-weight="600">Code Verification</text>
  <text x="662" y="136" fill="#D1D5DB" font-size="9.5">Cypher + Python</text>
  <text x="662" y="152" fill="#D1D5DB" font-size="9.5">R = C x F x T</text>
  <text x="662" y="172" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">8B Matches 32B</text>

  <!-- Connectors Top Row -->
  <line x1="150" y1="140" x2="176" y2="140" stroke="#60A5FA" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="308" y1="140" x2="334" y2="140" stroke="#FB923C" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="466" y1="140" x2="492" y2="140" stroke="#60A5FA" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="624" y1="140" x2="650" y2="140" stroke="#FB923C" stroke-width="2" stroke-dasharray="6 4"/>

  <!-- Downward Routing Arrows -->
  <line x1="242" y1="202" x2="242" y2="268" stroke="#DC2626" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="400" y1="202" x2="400" y2="268" stroke="#2563EB" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="558" y1="202" x2="558" y2="268" stroke="#EA580C" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="713" y1="202" x2="713" y2="268" stroke="#059669" stroke-width="1.8" stroke-dasharray="6 4"/>

  <!-- Bottom Row: Interventions -->
  <rect x="166" y="268" width="150" height="116" rx="8" fill="#1F2937" stroke="#DC2626" stroke-width="1.5"/>
  <text x="178" y="290" fill="#F87171" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">BLOCK &amp; ESCALATE</text>
  <text x="178" y="310" fill="#E5E7EB" font-size="9.5">Score &lt; 0.85 Blocked</text>
  <text x="178" y="326" fill="#E5E7EB" font-size="9.5">0.50-0.85 Trains SLM</text>
  <text x="178" y="342" fill="#9CA3AF" font-size="9">SLM-LLM Flywheel</text>

  <rect x="330" y="268" width="144" height="116" rx="8" fill="#1F2937" stroke="#2563EB" stroke-width="1.5"/>
  <text x="342" y="290" fill="#60A5FA" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">RETRIEVAL / KG FIX</text>
  <text x="342" y="310" fill="#E5E7EB" font-size="9.5">Sufficient == False</text>
  <text x="342" y="326" fill="#E5E7EB" font-size="9.5">Tune Subgraph Hops</text>
  <text x="342" y="342" fill="#9CA3AF" font-size="9">Add Missing KG Edges</text>

  <rect x="488" y="268" width="144" height="116" rx="8" fill="#1F2937" stroke="#EA580C" stroke-width="1.5"/>
  <text x="500" y="290" fill="#FB923C" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">PROMPT OR WEIGHTS</text>
  <text x="500" y="310" fill="#E5E7EB" font-size="9.5">&lt;=2 Low Steps: Prompt</text>
  <text x="500" y="326" fill="#E5E7EB" font-size="9.5">Low KI: SEAL / TPT</text>
  <text x="500" y="342" fill="#9CA3AF" font-size="9">Semantic Backprop</text>

  <rect x="646" y="268" width="130" height="116" rx="8" fill="#1F2937" stroke="#059669" stroke-width="1.5"/>
  <text x="658" y="290" fill="#34D399" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">SCHEMA CONSTRAINT</text>
  <text x="658" y="310" fill="#E5E7EB" font-size="9.5">Format Violation</text>
  <text x="658" y="326" fill="#E5E7EB" font-size="9.5">Attach Outlines FSM</text>
  <text x="658" y="342" fill="#9CA3AF" font-size="9">Zero-Error Syntax</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Layer 0 NLI Grounding Sieve',
          explanation:
            'GLiClass compares serialized knowledge graph triples against the generated response, catching 60–70% of hallucinations at under 5% of LLM judge cost.',
        },
        {
          step: '02',
          label: 'Sufficiency Before Cognition',
          explanation:
            'Layer 1 halts cognitive blame whenever the retrieved subgraph lacks required facts, routing the defect directly to knowledge graph ingestion or hop tuning.',
        },
        {
          step: '03',
          label: 'Deterministic Intervention Mapping',
          explanation:
            'Localized low-InfoGain steps trigger prompt updates via semantic backpropagation, recurring low Knowledge Index triggers SEAL/TPT fine-tuning, and format errors attach schema constraints.',
        },
      ],
    },
    {
      id: 'agrg-ch07-svg-02',
      title: 'Kepler Dual-Store & LEANAGENT Anti-Forgetting Loop',
      subtitle:
        'Preventing entropy collapse across continuous evolution cycles via scheduled graph garbage collection',
      bierutCaption:
        'Continuous self-improvement accumulates contradictory heuristics unless separated into curated Knowledge and ephemeral Learnings governed by daily garbage collection and LEANAGENT circuit breakers.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0B0F19"/>
  <text x="28" y="34" fill="#F9FAFB" font-size="15" font-weight="700" font-family="JetBrains Mono, monospace">KEPLER DUAL-STORE MEMORY &amp; LEANAGENT CIRCUIT BREAKERS</text>
  <text x="28" y="54" fill="#9CA3AF" font-size="11">Ephemeral Autonomous Learnings vs. Version-Controlled Curated Knowledge Subgraphs</text>

  <!-- Left: Ephemeral Learnings Subgraph -->
  <rect x="28" y="80" width="230" height="296" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.8"/>
  <text x="44" y="106" fill="#FB923C" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">EPHEMERAL LEARNINGS</text>
  <text x="44" y="124" fill="#9CA3AF" font-size="10">Autonomous Agent Provenance</text>

  <rect x="44" y="142" width="198" height="62" rx="6" fill="#1F2937" stroke="#374151"/>
  <text x="56" y="162" fill="#F9FAFB" font-size="10.5" font-weight="600">XSkill Experiences (Action)</text>
  <text x="56" y="178" fill="#D1D5DB" font-size="9.5">Node-level tool &amp; parse fixes</text>
  <text x="56" y="194" fill="#FB923C" font-size="9" font-family="JetBrains Mono, monospace">90d half-life decay weight</text>

  <rect x="44" y="218" width="198" height="62" rx="6" fill="#1F2937" stroke="#374151"/>
  <text x="56" y="238" fill="#F9FAFB" font-size="10.5" font-weight="600">XSkill &amp; Cognee Skills</text>
  <text x="56" y="254" fill="#D1D5DB" font-size="9.5">Subgraph trajectories + .amendify()</text>
  <text x="56" y="270" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">Routed by empirical win-rate</text>

  <rect x="44" y="294" width="198" height="64" rx="6" fill="#1F2937" stroke="#DC2626"/>
  <text x="56" y="314" fill="#F87171" font-size="10.5" font-weight="700">Daily GC Traversal Rules</text>
  <text x="56" y="330" fill="#E5E7EB" font-size="9">1. Issue promoted to Knowledge</text>
  <text x="56" y="344" fill="#E5E7EB" font-size="9">2. Contradicted by higher conf</text>

  <!-- Center: Promotion & Garbage Collection Engine -->
  <rect x="292" y="80" width="216" height="296" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="308" y="106" fill="#60A5FA" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">GVP &amp; GC ENGINE</text>
  <text x="308" y="124" fill="#9CA3AF" font-size="10">30-Day TTL &amp; Promotion Gate</text>

  <rect x="308" y="146" width="184" height="58" rx="6" fill="#1F2937" stroke="#059669"/>
  <text x="320" y="166" fill="#34D399" font-size="10" font-weight="700">Tier 1: Canary (1% Traffic)</text>
  <text x="320" y="184" fill="#D1D5DB" font-size="9.5">Auto-rollback on KPI drop</text>

  <rect x="308" y="218" width="184" height="58" rx="6" fill="#1F2937" stroke="#2563EB"/>
  <text x="320" y="238" fill="#60A5FA" font-size="10" font-weight="700">Tier 2: Staging Gauntlet</text>
  <text x="320" y="256" fill="#D1D5DB" font-size="9.5">Multi-objective utility U &gt; 0</text>

  <rect x="308" y="290" width="184" height="68" rx="6" fill="#1F2937" stroke="#EA580C"/>
  <text x="320" y="310" fill="#FB923C" font-size="10" font-weight="700">Tier 3: Airlock Protocol</text>
  <text x="320" y="328" fill="#D1D5DB" font-size="9.5">Sandboxed SICA code edits</text>
  <text x="320" y="344" fill="#D1D5DB" font-size="9.5">Mandatory human sign-off</text>

  <!-- Right: Curated Knowledge & LEANAGENT Telemetry -->
  <rect x="542" y="80" width="230" height="296" rx="8" fill="#111827" stroke="#059669" stroke-width="1.8"/>
  <text x="558" y="106" fill="#34D399" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">CURATED KNOWLEDGE</text>
  <text x="558" y="124" fill="#9CA3AF" font-size="10">Human-Authored + Promoted Rules</text>

  <rect x="558" y="142" width="198" height="66" rx="6" fill="#1F2937" stroke="#059669"/>
  <text x="570" y="162" fill="#F9FAFB" font-size="10.5" font-weight="600">Vertical Knowledge Graph</text>
  <text x="570" y="178" fill="#D1D5DB" font-size="9.5">Domain ontology &amp; verified edges</text>
  <text x="570" y="194" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">Target: &gt;=10% Promotion Rate</text>

  <rect x="558" y="222" width="198" height="136" rx="6" fill="#1F2937" stroke="#2563EB"/>
  <text x="570" y="242" fill="#60A5FA" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">LEANAGENT TELEMETRY</text>
  <text x="570" y="262" fill="#F87171" font-size="9.5" font-weight="600">WF-5 &lt;= 3% (Circuit Breaker)</text>
  <text x="570" y="280" fill="#F87171" font-size="9.5" font-weight="600">CFR &gt;= 0.90 (Retention Ratio)</text>
  <text x="570" y="300" fill="#34D399" font-size="9.5">EBWT: Shortcut Edge Transfer</text>
  <text x="570" y="318" fill="#34D399" font-size="9.5">IP: New Task Adaptation Rate</text>
  <text x="570" y="340" fill="#9CA3AF" font-size="9">Halts loop on forgetting spike</text>

  <!-- Flow Arrows -->
  <line x1="258" y1="220" x2="292" y2="220" stroke="#FB923C" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="508" y1="220" x2="542" y2="220" stroke="#34D399" stroke-width="2" stroke-dasharray="6 4"/>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Dual-Store Provenance Separation',
          explanation:
            'Autonomous error diagnoses and XSkill/Cognee trajectories reside in the ephemeral Learnings subgraph with a 30-day TTL until validated and promoted.',
        },
        {
          step: '02',
          label: 'Daily Graph Garbage Collection',
          explanation:
            'A scheduled traversal prunes learnings whose root issue was promoted to Curated Knowledge, superseded by higher-confidence edges, or untouched for 30 days.',
        },
        {
          step: '03',
          label: 'LEANAGENT Forgetting Circuit Breakers',
          explanation:
            'Windowed Forgetting (WF-5 > 3%) and Catastrophic Forgetting Resilience (CFR < 0.90) automatically halt the evolution loop before regressions reach users.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'agrg-ch07-mm1',
      name: 'The Execution Autobiography Coordinate System',
      tagline: 'Flat logs record chronological text; execution graphs record queryable causal lineage.',
      naiveIntuition:
        'Engineers often treat agent observability like web server logging, dumping prompt and response strings into flat JSON lines for post-hoc text search.',
      firstPrinciplesReality:
        'When a 10-step workflow fails, only a two-phase graph write linking each operation via :TRIGGERED edges lets you query how upstream confidence drops propagate into downstream tool latency or reasoning dead ends.',
      howToApply:
        'Instrument every agent node with OpenTelemetry to create the ExecutionNode and parent :TRIGGERED edge before execution, then write output payloads, tokens, and cost upon completion.',
    },
    {
      id: 'agrg-ch07-mm2',
      name: 'Neighbor-Aware Semantic Backpropagation',
      tagline: 'Never penalize an upstream node without inspecting all sibling inputs to its consumer.',
      naiveIntuition:
        'When a downstream validator flags an error, naive self-correction sends a failure signal straight back to every predecessor node in the chain.',
      firstPrinciplesReality:
        'Updating a predecessor in isolation causes action-at-a-distance regressions unless the textual gradient includes the outputs of all sibling predecessors that fed the failing node.',
      howToApply:
        'Construct every backward feedback prompt with the failing node output, the ground-truth error, and the exact outputs of all neighbor nodes sharing the same successor.',
    },
    {
      id: 'agrg-ch07-mm3',
      name: 'The Loop Engineering Determinism Triad',
      tagline: 'Judges may reason probabilistically, but promotion and rollback rules must be deterministic.',
      naiveIntuition:
        'Teams assume a self-improving agent should decide on its own when its output is good enough and rewrite its prompts freely in production.',
      firstPrinciplesReality:
        'Autonomous loops amplify noise unless governed by a fixed halting contract, pre-committed multi-objective utility thresholds, and cryptographic provenance rollback.',
      howToApply:
        'Pin binary judge verdicts and utility weights prior to execution, route candidate fixes through GVP tiers, and halt evolution whenever WF-5 exceeds 3%.',
    },
  ],
  deepSections: [
    {
      id: 'agrg-ch07-sec-01',
      sectionNumber: '7.1',
      title: 'The Execution Graph & Four-Layer Cognitive Autopsy',
      subtitle: 'Two-phase causal tracing, zero-shot NLI gates, J1 sufficiency, InfoGain, and TIR-Judge',
      coreMechanism:
        'Self-evolution requires a coordinate system for failure. As each workflow node executes, OpenTelemetry spans trigger a two-phase Neo4j write: phase one records the ExecutionNode and `:TRIGGERED` parent edge before execution so crashes preserve lineage, while phase two writes output payloads, latency, tokens, and cost. The Multi-Layered Evaluation Framework filters this execution graph sequentially from cheapest to most specific.\n\nLayer 0 runs a zero-shot NLI classifier (GLiClass) comparing serialized knowledge graph triples against the answer, blocking 60–70% of hallucinations at under 5% of judge compute while escalating uncertain scores (0.50–0.85) into an SLM-LLM flywheel. Layer 1 uses a J1 reasoning judge for binary verdicts on context completeness, contradiction, and ambiguity. Layer 2 isolates factual errors (Knowledge Index via MICRO-ACT `DECOMPOSE`) from logical dead ends (step-wise `InfoGain` plus Mixture-of-Probes detection of Q-anchored vs. A-anchored pathways). Layer 3 (`TIR-Judge`) executes Python and Cypher against the knowledge graph to verify quantitative claims with a multiplicative reward.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Two-Phase Span Materialization',
          detail:
            'Write the ExecutionNode and :TRIGGERED parent edge before running the node, then attach output, latency, and cost metrics after completion.',
        },
        {
          step: '02',
          title: 'Layer 0 NLI & Layer 1 Context Gate',
          detail:
            'Serialize retrieved subgraph triples into a premise for GLiClass screening (threshold 0.85), then verify binary context sufficiency via a J1 trace judge.',
        },
        {
          step: '03',
          title: 'Layer 2 Cognitive Isolation & Layer 3 Code Check',
          detail:
            'Decompose conflicting claims to score the Knowledge Index, compute step-level InfoGain to spot premature closure, and run TIR-Judge Cypher queries on numerical claims.',
        },
      ],
      formulas: [
        {
          name: 'Step-Wise Information Gain (InfoGain)',
          expression: 'InfoGain(i) = P(Answer | S_i) - P(Answer | S_{i-1})',
          intuition:
            'Measures how much reasoning step i reduces uncertainty toward the correct answer; near-zero or negative values expose circular logic or premature commitment to a wrong hypothesis.',
          variables: [
            {
              symbol: 'P(Answer | S_i)',
              meaning: 'Posterior probability of the correct answer given the reasoning trace up to step i',
            },
            {
              symbol: 'P(Answer | S_{i-1})',
              meaning: 'Prior probability of the correct answer at step i - 1',
            },
          ],
          workedExample:
            'In the DevOps stripe-python trace, steps 1–3 yield InfoGain of 0.34, 0.29, and 0.22, but step 4 drops to 0.03 and step 5 to -0.01 when CausalAttributionNode locks onto API deprecation and ignores the 30s-to-10s timeout reduction.',
        },
        {
          name: 'TIR-Judge Multiplicative Composite Reward',
          expression: 'R_{TIR} = C_{code} \\times F_{format} \\times T_{tool}',
          intuition:
            'Multiplies code-verified factual correctness, output format compliance, and tool accuracy so a well-formatted hallucination always scores zero.',
          variables: [
            {
              symbol: 'C_{code}',
              meaning: 'Binary correctness (1.0 or 0.0) from executing verification Cypher/Python against the knowledge graph',
            },
            {
              symbol: 'F_{format}',
              meaning: 'Schema and structural compliance score in [0, 1]',
            },
            {
              symbol: 'T_{tool}',
              meaning: 'Tool invocation accuracy score in [0, 1]',
            },
          ],
          workedExample:
            'If an agent outputs valid JSON (F = 1.0) using the right metric tool (T = 1.0) but claims P99 latency rose 340% when the TIR Cypher query computes 140% (C = 0.0), the composite reward is 0.0.',
        },
      ],
      keyTakeaways: [
        'Deploy a zero-shot NLI classifier (Layer 0) initialized at a 0.85 grounding threshold to block ungrounded answers before invoking LLM judges.',
        'Validate automated Layer 1 J1 judges against 50–100 human-coded production traces using binary pass/fail verdicts until agreement exceeds 90%.',
        'Strengthen question-anchored (Q-anchored) truthfulness pathways by providing explicit knowledge graph paths rather than flat text chunks.',
      ],
      commonPitfalls: [
        'Defining static evaluation rubrics prior to open-coding 50–100 real failures blinds the pipeline to emergent criteria drift.',
        'Using additive rather than multiplicative judge rewards allows confidently formatted quantitative fabrications to pass evaluation.',
      ],
      figures: [
        {
          file: 'agrg_0701.png',
          originalLabel: 'Figure 7-1. The multi-layered evaluation framework',
          bierutTitle: 'Filter Failures from Cheap Grounding Checks to Code-Verified Claims',
          editorialAnalysis:
            'Read this four-stage funnel from top to bottom as an economic and epistemic filter: Layer 0 eliminates obvious ungrounded fabrications in milliseconds, while Layer 1 separates retrieval gaps from cognitive failures before Layer 2 and Layer 3 inspect reasoning traces and execute verification code. Every layer depends directly on the knowledge graph to supply explicit relational premises and ground-truth verification targets.',
          keyTakeaways: [
            'Halting evaluation at Layer 1 when context is insufficient prevents teams from fine-tuning models on retrieval bugs.',
            'Layer 3 TIR-Judge-8B matches 32B reward models at 25% of the compute cost by executing Cypher queries instead of guessing numbers.',
          ],
        },
      ],
    },
    {
      id: 'agrg-ch07-sec-02',
      sectionNumber: '7.2',
      title: 'Evolution Taxonomy, Intervention Routing & Semantic Backpropagation',
      subtitle: 'Mapping diagnostic reports to targeted fixes and propagating neighbor-aware textual gradients',
      coreMechanism:
        'Self-evolution spans four structural axes: What evolves (Model weights/prompts, Context subgraphs, Tool registries, or Workflow Architecture), When it fires (sub-second intra-test-time retry loops vs. offline inter-test-time jobs), How it learns (Reward-based, Imitation-based, or Population-based), and Where it applies. Once Layer 2 emits a diagnostic report, a deterministic router selects the lightest effective intervention: retrieval gaps route to knowledge graph ingestion; `FORMAT_VIOLATION` errors attach an Outlines structural schema constraint; localized reasoning errors ($\\le 2$ low-InfoGain steps with $\\text{KI} > 0.80$) trigger prompt refinement; and systemic deficits ($\\text{KI} \\le 0.80$ or recurring faults) trigger fine-tuning.\n\nBecause workflow nodes operate inside an interconnected DAG, updating one node in isolation causes action-at-a-distance regressions in downstream consumers. Semantic backpropagation solves this by adapting the calculus chain rule into natural language: textual gradients flow backward from the failing validator node, carrying not only the target node output and error but also the outputs of all sibling predecessor nodes (`neighbor_context`) so credit assignment lands on the exact faulty component.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Route Diagnostic Verdict to Intervention Tier',
          detail:
            'Inspect Layer 1 sufficiency, format compliance, low-InfoGain step count, and Knowledge Index to select retrieval fix, schema constraint, prompt refinement, or fine-tuning.',
        },
        {
          step: '02',
          title: 'Assemble Neighbor-Aware Context',
          detail:
            'Query the execution graph for all predecessor outputs feeding the downstream node where the discrepancy surfaced.',
        },
        {
          step: '03',
          title: 'Propagate Textual Gradient to Target Node',
          detail:
            'Generate a targeted prompt or parameter adjustment for the faulty node while explicitly holding accurately performing sibling nodes invariant.',
        },
      ],
      keyTakeaways: [
        'Never use fine-tuning or prompt edits to fix JSON parsing errors; attach an Outlines schema constraint directly to the failing workflow node.',
        'Include all sibling predecessor outputs in every semantic backpropagation pass to prevent false blame on accurate upstream extractors.',
        'Keep intervention routing deterministic with explicit thresholds (<= 2 low-InfoGain steps and KI > 0.80 for prompt refinement).',
      ],
      commonPitfalls: [
        'Backpropagating error signals without neighbor context causes upstream nodes to corrupt valid extractions to compensate for downstream bugs.',
        'Triggering heavyweight adapter training for localized single-node reasoning errors wastes compute and risks catastrophic forgetting.',
      ],
      figures: [
        {
          file: 'agrg_0702.png',
          originalLabel: 'Figure 7-2. Neighbor-aware semantic backpropagation',
          bierutTitle: 'How Sibling Context Prevents False Credit Assignment Across Graph Nodes',
          editorialAnalysis:
            'Trace the backward feedback arrows from the Validator node toward both the Extractor and CurrencyConverter nodes. Because the backward pass includes the DateChecker sibling output ("Date: 2026"), the gradient exonerates the Extractor ($10M was correct) and isolates the fault strictly to the CurrencyConverter using a stale 0.95 exchange rate instead of 0.88.',
          keyTakeaways: [
            'Neighbor-awareness transforms ambiguous downstream failures into surgical single-node updates.',
            'Graph topology is mandatory for credit assignment whenever multiple parallel nodes feed a synthesis or validation step.',
          ],
        },
      ],
    },
    {
      id: 'agrg-ch07-sec-03',
      sectionNumber: '7.3',
      title: 'Active Learning Curricula & Inference-Time Skill Graphs',
      subtitle: 'SEAL, TPT, AgentEvolver, SICA code modification, XSkill, and Cognee self-amending skills',
      coreMechanism:
        'Six frameworks convert execution traces into durable capability. For offline failures, SEAL synthesizes training curricula that replicate the confounding trap and label the critical step. For offline successes, Think-Prune-Train (TPT) samples 8 traces across temperatures $[0.3, 0.5, 0.7, 0.9]$ and prunes any trace failing the triple gate (`correct == True`, $\\text{KI} > 0.85$, $\\text{avg\\_infogain} > 0.15$) so training reinforces only sound reasoning. AgentEvolver adds proactive learning via curiosity-driven Self-Questioning over sparse graph clusters (+20.3% WebArena gain), Self-Navigating rollouts with stripped retrieval markers, and execution-graph Self-Attributing rewards, while Reflect-Retry-Reward scores mid-session self-critique against the diagnostic report.\n\nBeyond parameters, SICA edits the agent’s own Python source code under an asynchronous overseer and a 50/25/25 performance-cost-latency utility function. Meanwhile, XSkill and Cognee enable continual learning without retraining: XSkill extracts node-level `AgentExperience` records (cutting tool errors 45%) and subgraph-level `AgentSkill` patterns, while Cognee maintains skills as graph nodes (`Add -> Cognify -> Search -> Learn`) that route by empirical win-rate and self-amend via `.amendify()`.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Synthesize & Prune Training Traces (SEAL & TPT)',
          detail:
            'Generate confounding trap examples from failures via SEAL and filter multi-temperature successful rollouts via TPT triple pruning (KI > 0.85, avg InfoGain > 0.15).',
        },
        {
          step: '02',
          title: 'Probe Sparse Graph Regions (AgentEvolver)',
          detail:
            'Traverse low-density knowledge graph subgraphs to synthesize adversarial practice queries and assign step-level composite rewards.',
        },
        {
          step: '03',
          title: 'Distill Experiences & Amend Skill Nodes (XSkill + Cognee)',
          detail:
            'Extract node-level experiences and multi-step skills from execution graphs, routing tasks by historical success rate and running .amendify() when skill win-rate drops below 0.60.',
        },
      ],
      formulas: [
        {
          name: 'AgentEvolver Step-Level Composite Reward & SICA Utility',
          expression:
            'r_t = \\alpha \\cdot A_t + (1 - \\alpha) \\cdot O, \\quad U_{SICA} = 0.5 P + 0.25 \\max\\left(0, 1 - \\frac{C}{C_{max}}\\right) + 0.25 \\max\\left(0, 1 - \\frac{L}{L_{max}}\\right)',
          intuition:
            'StepAttributor blends step-level judge attribution with global trajectory outcome (alpha in [0.5, 0.7]), while SICA bounds code self-modification so an agent cannot buy accuracy through runaway compute cost or latency.',
          variables: [
            {
              symbol: 'A_t, O, \\alpha',
              meaning: 'Normalized judge attribution score for step t, trajectory outcome score, and attribution weight (0.6 default)',
            },
            {
              symbol: 'P, C, L',
              meaning: 'Benchmark resolution performance, execution cost in USD, and wall-clock latency in seconds',
            },
          ],
          workedExample:
            'With alpha = 0.6, a faulty step scoring A_t = 0.1 in a failed run (O = 0.0) receives r_t = 0.06, whereas a sound early step (A_t = 0.9) retains r_t = 0.54.',
        },
      ],
      keyTakeaways: [
        'Never self-train on unpruned correct answers; enforce the TPT filter (KI > 0.85 and average InfoGain > 0.15) to discard lucky guesses.',
        'Route Cognee skill nodes by empirical success rate on matching task patterns rather than description embedding similarity.',
        'Decay unvalidated XSkill experiences by 50% after 90 days and flag skills dropping below 60% success over their last 10 runs.',
      ],
      commonPitfalls: [
        'Allowing loosely prompted SEAL generators to create training examples without verifying against held-out real failures reinforces existing model biases.',
        'Allowing unverified self-reflection in retry loops produces vague excuses unless scored directly against the ground-truth diagnostic report.',
      ],
    },
    {
      id: 'agrg-ch07-sec-04',
      sectionNumber: '7.4',
      title: 'Safe Production Evolution: RPO, GVP, Kepler & LEANAGENT',
      subtitle: 'Graduated validation tiers, dual-store garbage collection, and catastrophic forgetting telemetry',
      coreMechanism:
        'Deploying self-modification into live traffic requires the Recursion-Provenance-Optimization (RPO) safety spine. Recursion places the improvement prompts and curricula inside the auditable graph; Provenance commits every prompt, adapter, and code diff as a cryptographically signed node enabling instant rollback; and Optimization enforces the three-tier Graduated Validation Protocol (GVP). Tier 1 routes low-risk prompt tweaks to a 1% live canary with automatic rollback on KPI regression; Tier 2 subjects SEAL/TPT fine-tunes and tool updates to an offline staging gauntlet optimizing a multi-objective utility function over accuracy, cost, and safety; Tier 3 isolates high-risk SICA code edits or novel tools inside an Airlock sandbox requiring human sign-off.\n\nTo prevent hundreds of weekly updates from causing entropy collapse, OpenAI’s Kepler pattern splits the graph into human-curated Knowledge and autonomous ephemeral Learnings swept daily by a garbage collection traversal (pruning resolved, contradicted, or >30-day stale nodes). Finally, LEANAGENT telemetry tracks Windowed Forgetting (`WF-5`), Catastrophic Forgetting Resilience (`CFR`), Expanded Backward Transfer (`EBWT`), and Incremental Plasticity (`IP`) across task-category subgraphs.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Gate Candidate Fix via GVP Risk Tier',
          detail:
            'Route prompt refinements to Tier 1 (1% canary), weight/tool updates to Tier 2 (staging gauntlet), and code/safety edits to Tier 3 (human airlock).',
        },
        {
          step: '02',
          title: 'Sweep Ephemeral Learnings via Kepler GC',
          detail:
            'Run a daily graph traversal to delete learning nodes whose root issue was promoted to curated Knowledge, contradicted by higher-confidence edges, or unaccessed for 30 days.',
        },
        {
          step: '03',
          title: 'Enforce LEANAGENT Forgetting Circuit Breakers',
          detail:
            'Evaluate the last 5 task subgraphs after every evolution pass and halt deployment if WF-5 exceeds 3% or historical CFR drops below 0.90.',
        },
      ],
      formulas: [
        {
          name: 'LEANAGENT Forgetting Circuit Breakers (WF-k & CFR)',
          expression:
            'WF_k = \\frac{1}{k} \\sum_{j=t-k}^{t-1} \\max(0, Acc_{j,\\text{initial}} - Acc_{j,t}), \\quad CFR = \\frac{\\sum_{j=1}^{t} Acc_{j,t}}{\\sum_{j=1}^{t} Acc_{j,\\text{initial}}}',
          intuition:
            'WF-k measures recent regression across the last k task subgraphs (halt if WF-5 > 3%), while CFR tracks global historical retention across all task categories (halt if CFR < 0.90).',
          variables: [
            {
              symbol: 'Acc_{j,\\text{initial}}',
              meaning: 'Baseline accuracy on task category subgraph j immediately after it was learned',
            },
            {
              symbol: 'Acc_{j,t}',
              meaning: 'Current accuracy on task category subgraph j after evolution cycle t',
            },
          ],
          workedExample:
            'If an agent improves DevOps timeout predictions by +23% at cycle t but its accuracy on the prior 5 task subgraphs drops by an average of 4.1%, WF-5 = 4.1% (> 3% threshold), tripping the circuit breaker and rolling back the update.',
        },
      ],
      keyTakeaways: [
        'Keep Tier 1 canary traffic strictly around 1% with automated rollback; routing 20% of live traffic is a partial rollout, not a canary.',
        'Monitor the Kepler learnings-to-knowledge promotion rate and relax promotion criteria if fewer than 10% of learnings graduate within 30 days.',
        'Stratify production evaluation sampling by task complexity and novelty rather than uniform random sampling so rare edge-case failures are captured.',
      ],
      commonPitfalls: [
        'Accumulating autonomous learnings without a daily garbage collection pass bloats subgraph retrieval and calcifies Incremental Plasticity (IP).',
        'Testing Tier 2 fine-tuned models on synthetic benchmarks rather than real historical production traces misses catastrophic forgetting on core workflows.',
      ],
      figures: [
        {
          file: 'agrg_0703.png',
          originalLabel: 'Figure 7-3. The graduated validation protocol',
          bierutTitle: 'Match Validation Scrutiny to Blast Radius Across Canary, Staging, and Airlock Tiers',
          editorialAnalysis:
            'Follow the candidate modification from left to right as risk escalates from prompt tweaks (Tier 1 Canary on 1% live traffic) to weight/tool updates (Tier 2 Staging Gauntlet) and architectural/code changes (Tier 3 Airlock with mandatory human approval). Each tier enforces explicit promotion gates and writes cryptographic provenance back to the ledger before touching production traffic.',
          keyTakeaways: [
            'Single approval gates fail in production because they are either too slow for prompt fixes or too permissive for weight and code updates.',
            'Failed Tier 2 candidates that demonstrate outsized accuracy gains can be routed into the Tier 3 Airlock for sandboxed human inspection.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Self-Evolution Intervention & Learning Strategy Matrix',
      description:
        'Matching diagnosed failure signatures to the minimum-risk structural intervention, learning mechanism, and GVP validation tier.',
      headers: [
        'Intervention / Framework',
        'Diagnostic Trigger',
        'Timing & Target Axis',
        'GVP Validation Tier',
        'Primary Failure Risk',
      ],
      rows: [
        [
          'Retrieval / KG Fix',
          'Layer 1 Sufficient == False',
          'Inter-test / Context subgraph',
          'Tier 1 Canary (1% traffic)',
          'Subgraph bloat if unpruned',
        ],
        [
          'Structural Constraint (Outlines)',
          'FormatViolation or ParseError',
          'Inter-test / Architecture node',
          'Tier 1 Canary (1% traffic)',
          'Schema version mismatch',
        ],
        [
          'Neighbor-Aware Prompt Update',
          '<= 2 low-InfoGain steps, KI > 0.80',
          'Inter-test / Model prompt',
          'Tier 1 Canary (1% traffic)',
          'Action-at-a-distance if no neighbor context',
        ],
        [
          'Reflect-Retry-Reward (RRR)',
          'Single-turn recoverable reasoning slip',
          'Intra-test / Runtime context',
          'In-session judge alignment check',
          'Latency doubling on retry',
        ],
        [
          'SEAL / TPT Fine-Tuning',
          'Systemic KI <= 0.80 or recurring fault',
          'Inter-test / Model adapter weights',
          'Tier 2 Staging Gauntlet',
          'Catastrophic forgetting (WF-5 > 3%)',
        ],
        [
          'XSkill + Cognee Skill Graph',
          'Repeated tool errors or skill < 60% win',
          'Inter-test / Ephemeral Learnings',
          'Held-out trace validation + 30d GC',
          'Stale heuristics without TTL decay',
        ],
        [
          'SICA Code Self-Modification',
          '3x architectural ceiling on code tasks',
          'Inter-test / Agent Python source',
          'Tier 3 Airlock + Overseer veto',
          'Runaway compute or safety regression',
        ],
      ],
      verdictRule:
        'Always apply the lightest intervention that resolves the diagnosed fault: fix retrieval before blaming reasoning, apply Outlines constraints for syntax errors, use neighbor-aware prompt updates for localized InfoGain dips, and escalate to SEAL/TPT weight training or SICA code edits only when KI or architectural ceilings persist.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'agrg-ch07-scen-01',
      title: 'Premature Hypothesis Closure on a stripe-python Dependency Upgrade',
      roleAndContext:
        'Staff Reliability Architect operating a proactive DevOps prediction agent reviewing checkout-service upgrading stripe-python from 3.2.1 to 3.3.0.',
      symptomOrFailure:
        'The agent correctly flagged the checkout-service -> order-service -> fulfillment-service pathway as HIGH risk, but predicted an API contract violation on batch_charge instead of the default connection timeout drop from 30s to 10s, causing connection pool exhaustion 20 minutes after deployment.',
      naiveFixAndWhyItFails:
        'Manually appending "always check connection timeouts" to the global system prompt biases the agent toward timeout warnings on every alert while degrading unrelated API deprecation analyses.',
      firstPrinciplesSolution:
        'The execution graph and Layer 2 autopsy revealed KI = 0.91 (both facts were retrieved) but InfoGain dropped to 0.03 at step 4 and -0.01 at step 5 inside CausalAttributionNode; neighbor-aware semantic backpropagation used ChangelogRetrieval and KnowledgeGraphQuery outputs to update only CausalAttributionNode to score configuration defaults and API changes as independent hypotheses, promoted via a 1% Tier 1 canary.',
      measurableOutcome:
        'On the next library update containing a connection pool size reduction, the agent ranked connection pool exhaustion as a co-equal hypothesis weighted by service throughput, preventing an outage with zero regressions across the regression suite.',
    },
    {
      id: 'agrg-ch07-scen-02',
      title: 'Evaluation Budget Explosion and Post-Tuning Forgetting Spikes',
      roleAndContext:
        'Principal AI Systems Engineer running continuous evaluation and weekly SEAL fine-tuning for a production DevOps agent handling 200 predictions per hour.',
      symptomOrFailure:
        'Running three LLM judge calls (Layers 1–3) on every prediction generated 600 judge calls per hour—matching the primary inference bill—while weekly SEAL fine-tuning improved target task accuracy by 23% but caused support tickets to spike on previously mastered Kubernetes routing tasks.',
      naiveFixAndWhyItFails:
        'Dropping evaluation to a 5% uniform random sample and halting all weight updates cuts judge compute but misses rare catastrophic failure modes and freezes agent adaptation.',
      firstPrinciplesSolution:
        'Deployed a GLiClass zero-shot NLI Hallucination Gate at Layer 0 (0.85 threshold) fed by materialized knowledge graph triples alongside TIR-Judge-8B Cypher verification, and wired LEANAGENT WF-5 (<= 3%) and CFR (>= 0.90) circuit breakers plus Kepler daily garbage collection into the Tier 2 staging gauntlet.',
      measurableOutcome:
        'Layer 0 blocked 68% of ungrounded outputs at under 5% of LLM judge cost, TIR-Judge-8B cut Layer 3 compute by 4x, and WF-5 subgraph circuit breakers eliminated cross-task regressions prior to production rollout.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'agrg-ch07-q1',
        scenarioPrompt:
          'When logging execution graph nodes in Neo4j via OpenTelemetry (Example 7-1), why does the instrumentation execute two separate Cypher writes per component rather than a single write at the end of execution?',
        options: [
          {
            label: 'A',
            text: 'Neo4j cannot create a node and set numeric properties in the same transaction.',
            isCorrect: false,
            explanation:
              'Cypher easily sets properties during CREATE; the split is architectural, not a database syntax limitation.',
          },
          {
            label: 'B',
            text: 'The pre-execution write records the node and its :TRIGGERED parent lineage so the causal path survives even if the operation throws an unhandled exception or times out.',
            isCorrect: true,
            explanation:
              'Writing the node and parent edge before execution guarantees that crashed or timed-out operations remain attached to their causal ancestors for autopsy.',
          },
          {
            label: 'C',
            text: 'The first write runs on CPU while the second write runs on GPU via nx-cugraph.',
            isCorrect: false,
            explanation:
              'Both writes are standard Cypher transactions against the execution graph store.',
          },
          {
            label: 'D',
            text: 'Layer 0 hallucination gating requires the node to exist before the LLM prompt is constructed.',
            isCorrect: false,
            explanation:
              'Layer 0 runs after the agent generates an answer, comparing the answer against materialized knowledge graph triples.',
          },
        ],
      },
      {
        id: 'agrg-ch07-q2',
        scenarioPrompt:
          'An evaluation trace passes Layer 0 (grounding score 0.92) and Layer 1 (sufficient: true), and Layer 2 computes a Knowledge Index (KI) of 0.91 with an InfoGain trace of [0.34, 0.29, 0.22, 0.03, -0.01, 0.19]. What failure mode and deterministic intervention should the router select?',
        options: [
          {
            label: 'A',
            text: 'Contextual insufficiency; expand the knowledge graph retrieval hop depth.',
            isCorrect: false,
            explanation:
              'Layer 1 already confirmed sufficient: true and KI is 0.91, proving the necessary facts were present.',
          },
          {
            label: 'B',
            text: 'Systemic knowledge gap; trigger a SEAL fine-tuning curriculum in Tier 2 staging.',
            isCorrect: false,
            explanation:
              'KI is 0.91 (> 0.80) and only 2 steps have low InfoGain, so heavyweight fine-tuning is unnecessary.',
          },
          {
            label: 'C',
            text: 'Localized reasoning failure (premature hypothesis closure at steps 4–5); route to neighbor-aware PROMPT_REFINEMENT on the target node via Tier 1 canary.',
            isCorrect: true,
            explanation:
              'High KI (0.91) paired with exactly two low/negative InfoGain steps indicates premature closure on a single node, which maps to a lightweight prompt refinement.',
          },
          {
            label: 'D',
            text: 'Format violation; attach an Outlines regex schema to the synthesis node.',
            isCorrect: false,
            explanation:
              'The trace produced valid structured output but selected the wrong causal mechanism during step 4.',
          },
        ],
      },
      {
        id: 'agrg-ch07-q3',
        scenarioPrompt:
          'How does Mixture-of-Probes (MoP) dual-pathway truthfulness detection (Luo et al., 2026) distinguish between two knowledge failures at Layer 2, and how does that change the fix in a GraphRAG system?',
        options: [
          {
            label: 'A',
            text: 'Q-anchored failures mean the model retrieved wrong parametric associations (requiring weight tuning), whereas A-anchored failures mean it guessed from internal answer plausibility (requiring explicit knowledge graph paths that bridge question and answer entities).',
            isCorrect: true,
            explanation:
              'Q-anchored errors reflect corrupted stored associations, whereas A-anchored hallucinations occur when the model lacks a strong link from the question and relies on surface plausibility—cured by explicit graph traversal edges.',
          },
          {
            label: 'B',
            text: 'Q-anchored failures occur only in small 3B models, while A-anchored failures occur only in 70B models.',
            isCorrect: false,
            explanation:
              'Both pathways exist across model sizes, though larger models resist flat-text context overrides more strongly due to stronger parametric priors.',
          },
          {
            label: 'C',
            text: 'A-anchored failures are caused by syntax errors in Cypher queries and are fixed by Outlines.',
            isCorrect: false,
            explanation:
              'A-anchored generation is an internal attention routing phenomenon, not a query syntax error.',
          },
          {
            label: 'D',
            text: 'Q-anchored failures are fixed by deleting nodes in the Kepler learnings store.',
            isCorrect: false,
            explanation:
              'Q-anchored failures reside in the model’s parametric weights or prompt mapping rather than ephemeral learning nodes.',
          },
        ],
      },
      {
        id: 'agrg-ch07-q4',
        scenarioPrompt:
          'In the Think-Prune-Train (TPT) framework, an agent generates 8 candidate reasoning traces across temperatures [0.3, 0.5, 0.7, 0.9]. Which candidate traces survive pruning to enter the fine-tuning dataset?',
        options: [
          {
            label: 'A',
            text: 'Every candidate trace that reaches the correct final answer, maximizing dataset volume.',
            isCorrect: false,
            explanation:
              'Training on all correct answers reinforces lucky guesses and circular reasoning chains.',
          },
          {
            label: 'B',
            text: 'Only traces generated at temperature 0.3 that pass Layer 0 NLI screening.',
            isCorrect: false,
            explanation:
              'TPT retains creative high-temperature traces if they satisfy all three diagnostic criteria.',
          },
          {
            label: 'C',
            text: 'Only traces that simultaneously achieve a PASS verdict, a Knowledge Index > 0.85, and an average InfoGain > 0.15 across steps.',
            isCorrect: true,
            explanation:
              'The triple condition guarantees that fine-tuning reinforces only trajectories that were factually grounded (KI > 0.85), logically efficient (avg InfoGain > 0.15), and accurate.',
          },
          {
            label: 'D',
            text: 'Only traces that failed on the first attempt and succeeded after a Reflect-Retry-Reward prompt.',
            isCorrect: false,
            explanation:
              'That describes the RRR metacognitive recovery loop, not TPT positive trace reinforcement.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'agrg-ch07-fc1',
        category: 'evaluation',
        front: 'What three hallucination sources does the Layer 0 GLiClass NLI gate catch using serialized knowledge graph triples?',
        back: 'Insufficient domain knowledge (missing KG edges), inadequate context (too few retrieval hops), and excessive context (attention dilution from overly large subgraphs).',
        mentalHook: 'Missing edges, too few hops, or too many hops—all fail NLI grounding against the subgraph premise.',
      },
      {
        id: 'agrg-ch07-fc2',
        category: 'evaluation',
        front: 'What is the ideal "Reasoning Shape" of InfoGain across a multi-step execution trace?',
        back: 'An S-curve: high initial InfoGain during problem orientation, steady positive progress across middle steps, and a final synthesis spike.',
        mentalHook: 'Avoid single-spike brittle guesses and flat-line brute-force grinding; aim for the S-curve.',
      },
      {
        id: 'agrg-ch07-fc3',
        category: 'adaptation',
        front: 'How does AgentEvolver achieve a +20.3% benchmark gain through Self-Questioning alone?',
        back: 'It traverses its own knowledge graph to locate sparse node clusters and unexercised dependency chains, generating curiosity-driven adversarial tasks where it is weakest.',
        mentalHook: 'The knowledge graph is a map of what the agent does not yet know.',
      },
      {
        id: 'agrg-ch07-fc4',
        category: 'adaptation',
        front: 'What is the core architectural difference between XSkill and Cognee in continual skill learning?',
        back: 'XSkill extracts static Experience (node-level) and Skill (subgraph-level) records from traces, whereas Cognee models skills as live graph nodes that route by empirical win-rate and rewrite themselves via .amendify().',
        mentalHook: 'XSkill answers "What did we learn?"; Cognee answers "Which skill wins and how does it rewrite itself?"',
      },
      {
        id: 'agrg-ch07-fc5',
        category: 'architecture',
        front: 'What three conditions trigger node deletion during the daily garbage collection pass in OpenAI’s Kepler dual-store architecture?',
        back: 'The underlying issue was resolved and promoted to curated Knowledge, the learning is contradicted by a newer higher-confidence learning, or the node went unaccessed for 30 days.',
        mentalHook: 'Promoted, contradicted, or untouched for 30 days—sweep it out of the Learnings subgraph.',
      },
      {
        id: 'agrg-ch07-fc6',
        category: 'evaluation',
        front: 'What are the four LEANAGENT continual learning metrics and which two act as immediate circuit breakers?',
        back: 'Windowed Forgetting (WF-5 <= 3%) and Catastrophic Forgetting Resilience (CFR >= 0.90) act as circuit breakers, while Expanded Backward Transfer (EBWT) and Incremental Plasticity (IP) track long-term health.',
        mentalHook: 'WF-5 and CFR slam the brakes on forgetting; EBWT and IP measure shortcut transfer and plasticity.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'agrg-ch07-feyn-1',
        conceptTitle: 'Neighbor-Aware Semantic Backpropagation vs. Isolated Prompt Tuning',
        prompt:
          'Explain to a senior backend engineer why updating an upstream agent node based solely on a downstream validation error corrupts multi-agent workflows, and walk through how neighbor-aware semantic backpropagation prevents this using the Extractor, CurrencyConverter, DateChecker, and Validator graph.',
        rubricChecklist: [
          'Defines the "action at a distance" failure mode where fixing one node in isolation breaks or misleads connected nodes.',
          'Contrasts numerical backpropagation (chain rule over scalar weights) with semantic backpropagation (natural language gradients flowing backward over execution graph edges).',
          'Walks through the $10M -> €9.5M example: without DateChecker ("Date: 2026") neighbor context, the Extractor is falsely blamed for extracting $10M.',
          'Shows how injecting all sibling predecessor outputs into the backward prompt isolates the bug strictly to CurrencyConverter’s stale 0.95 exchange rate.',
        ],
        modelExplanation:
          'In a multi-node workflow graph, a downstream Validator node often combines inputs from multiple upstream predecessors. If the Validator flags an error—say, converting $10M to €9.5M fails validation—a naive backward pass tells the upstream Extractor "Your $10M output caused a conversion error," prompting the Extractor to hallucinate a different number. Neighbor-aware semantic backpropagation prevents this false credit assignment by including the outputs of every sibling predecessor that fed the Validator in the backward gradient prompt. Because the prompt includes the DateChecker node’s output ("Date: 2026") alongside the Extractor’s "$10M", the backward pass sees that the 2026 rate was 0.88 rather than 0.95, explicitly instructs the Extractor to make no changes, and targets the fix solely at the CurrencyConverter’s rate lookup.',
      },
      {
        id: 'agrg-ch07-feyn-2',
        conceptTitle: 'The Four-Layer Evaluation Sieve and Deterministic Loop Engineering',
        prompt:
          'Explain why running a single LLM-as-a-judge prompt on every agent output fails both economically and diagnostically in production, and describe how the Four-Layer Evaluation Framework and Graduated Validation Protocol (GVP) form a deterministic self-improvement loop.',
        rubricChecklist: [
          'Explains the economic bottleneck of running heavy LLM judges on every trace and how Layer 0 (GLiClass NLI with KG premises) filters 60–70% of hallucinations at <5% compute.',
          'Separates Layer 1 context sufficiency (J1 binary verdict on retrieval gaps) from Layer 2 cognitive fault isolation (Knowledge Index vs. step-level InfoGain).',
          'Describes how Layer 3 (TIR-Judge) replaces plausible numerical guessing with executable Cypher/Python code and a multiplicative reward R = C * F * T.',
          'Connects the diagnostic report to Antonio Gulli’s loop engineering triad: measurable halting utility, deterministic intervention routing, and GVP tiered rollback (Canary, Staging, Airlock).',
        ],
        modelExplanation:
          'A single LLM-as-a-judge prompt is too expensive to run on every production trace and cannot distinguish whether an agent failed because retrieval missed a fact, reasoning locked onto a bad hypothesis, or arithmetic was fabricated. The Four-Layer Evaluation Framework solves cost by placing a zero-shot GLiClass NLI classifier at Layer 0 that checks answers against serialized knowledge graph triples, catching 60–70% of hallucinations in milliseconds. Passing traces hit Layer 1 (J1 binary context sufficiency) to route retrieval bugs away from model training, Layer 2 to separate factual errors (Knowledge Index) from reasoning dead ends (step-wise InfoGain), and Layer 3 (TIR-Judge) to verify quantitative claims by executing Cypher queries with a multiplicative reward. A deterministic router then maps the diagnosis to a prompt, weight, or schema intervention and validates it through the GVP’s 1% Canary, Staging Gauntlet, or human Airlock with instant provenance rollback.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'agrg-ch07-n1',
        label: 'Execution Graph',
        category: 'evaluation',
        chapterNumber: 7,
        importance: 1,
        definition:
          'An immutable, two-phase OpenTelemetry and Neo4j trace recording every atomic agent operation, payload, latency, token cost, and :TRIGGERED causal parent edge.',
        formulaOrRule: 'Phase 1: CREATE Node + :TRIGGERED edge -> Phase 2: SET output, latency, tokens, cost',
        whyItMatters:
          'Provides the exact node coordinate system and causal lineage required to localize failures and compute step-level credit attribution.',
      },
      {
        id: 'agrg-ch07-n2',
        label: 'Four-Layer Evaluation Framework',
        category: 'evaluation',
        chapterNumber: 7,
        importance: 1,
        definition:
          'A sequential cognitive autopsy pipeline combining Layer 0 GLiClass NLI gating, Layer 1 J1 context sufficiency, Layer 2 KI/InfoGain fault isolation, and Layer 3 TIR-Judge code verification.',
        formulaOrRule: 'InfoGain(i) = P(Answer | S_i) - P(Answer | S_{i-1}); R_TIR = C * F * T',
        whyItMatters:
          'Separates ungrounded fabrications, retrieval gaps, factual conflicts, and premature reasoning closure at 4x lower judge compute cost.',
      },
      {
        id: 'agrg-ch07-n3',
        label: 'Neighbor-Aware Semantic Backpropagation',
        category: 'adaptation',
        chapterNumber: 7,
        importance: 1,
        definition:
          'A graph-native credit assignment mechanism that propagates structured natural language feedback backward from a failure while including all sibling predecessor outputs.',
        formulaOrRule: 'Feedback(v) = f(Output(v), Error(w), {Output(u) : u in Predecessors(w)})',
        whyItMatters:
          'Prevents action-at-a-distance regressions by ensuring upstream nodes are never blamed for errors caused by sibling inputs or downstream lookups.',
      },
      {
        id: 'agrg-ch07-n4',
        label: 'SEAL & TPT Curricula',
        category: 'adaptation',
        chapterNumber: 7,
        importance: 2,
        definition:
          'Complementary offline learning pipelines where SEAL synthesizes confounding-trap training data from failures and Think-Prune-Train (TPT) filters multi-temperature successes for sound reasoning.',
        formulaOrRule: 'TPT Keep Gate: Correct == True AND KI > 0.85 AND avg(InfoGain) > 0.15',
        whyItMatters:
          'Eliminates lucky guesses from self-training while targeting fine-tuning directly at diagnosed failure traps.',
      },
      {
        id: 'agrg-ch07-n5',
        label: 'XSkill & Cognee Skill Graph',
        category: 'adaptation',
        chapterNumber: 7,
        importance: 2,
        definition:
          'Inference-time continual learning systems that distill action-level Experiences and subgraph-level Skills while maintaining self-amending SkillNode objects routed by empirical win-rate.',
        formulaOrRule: 'Trigger .amendify() when SkillNode.success_rate < 0.60 over held-out traces',
        whyItMatters:
          'Cuts tool errors by 45% and evolves operational skill definitions without expensive model weight retraining.',
      },
      {
        id: 'agrg-ch07-n6',
        label: 'Graduated Validation Protocol (GVP) & Kepler GC',
        category: 'architecture',
        chapterNumber: 7,
        importance: 1,
        definition:
          'A production safety architecture combining three validation tiers (Canary, Staging Gauntlet, Airlock), Kepler dual-store daily garbage collection, and LEANAGENT forgetting circuit breakers.',
        formulaOrRule: 'Halt evolution if WF-5 > 3% or CFR < 0.90; GC learnings after 30d TTL',
        whyItMatters:
          'Allows continuous autonomous self-improvement in production without entropy collapse, silent regressions, or catastrophic forgetting.',
      },
    ],
    edges: [
      {
        source: 'agrg-ch07-n1',
        target: 'agrg-ch07-n2',
        relationship: 'prerequisite_for',
        explanation:
          'The Four-Layer Evaluation Framework requires the Execution Graph’s :TRIGGERED lineage and node payloads to localize faults.',
      },
      {
        source: 'agrg-ch07-n2',
        target: 'agrg-ch07-n3',
        relationship: 'prerequisite_for',
        explanation:
          'Layer 2 cognitive fault isolation identifies the target node and low-InfoGain steps that initiate Neighbor-Aware Semantic Backpropagation.',
      },
      {
        source: 'agrg-ch07-n2',
        target: 'agrg-ch07-n4',
        relationship: 'evaluates',
        explanation:
          'SEAL uses the diagnostic report to synthesize failure traps, and TPT uses Layer 2 KI and InfoGain scores to prune lucky guesses.',
      },
      {
        source: 'agrg-ch07-n1',
        target: 'agrg-ch07-n5',
        relationship: 'prerequisite_for',
        explanation:
          'XSkill and Cognee extract action-level experiences and task-level skill subgraphs directly from completed Execution Graph nodes.',
      },
      {
        source: 'agrg-ch07-n6',
        target: 'agrg-ch07-n4',
        relationship: 'mitigates',
        explanation:
          'The GVP Tier 2 Staging Gauntlet and LEANAGENT WF-5/CFR circuit breakers prevent SEAL/TPT fine-tuning from introducing catastrophic forgetting.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 24,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 7 including OpenTelemetry/Neo4j Execution Graph, Layer 0 GLiClass + SLM-LLM flywheel, Layer 1 J1 judge + open/axial coding, Layer 2 MICRO-ACT KI + InfoGain + MoP/PR Q/A-pathways, Layer 3 TIR-Judge, 4D evolution taxonomy, neighbor-aware semantic backprop, SEAL, AgentEvolver, SICA, TPT, RRR, RPO/GVP, Kepler GC, Loop Engineering, DevOps prediction walkthrough, XSkill, Cognee, and LEANAGENT metrics.',
  },
};

export const agrgCh08Mastery: ChapterMastery = {
  chapterNumber: 8,
  chapterId: 'ch08',
  title: 'Optimization',
  subtitle:
    'Selective Intelligence, Subgraph Governance, Bitemporal Lifecycle Management, and GPU Hardware Acceleration',
  readingTimeMinutes: 8,
  sourceWordCount: 9483,
  executiveThesis:
    'A self-evolving GraphRAG prototype fails in production when uniform frontier-model routing inflates token bills, unscoped graph traversals expose restricted records, stale snapshot nodes choke query latency, and sequential inference stalls incident response. Production viability requires matching each workflow node to the smallest model that meets its asymmetric quality threshold, enforcing invisible subgraph RBAC with UUID identity decoupling, invalidating edges bitemporally via staged N-1 migrations, and accelerating both PageRank analytics and multi-LoRA KV-cached inference on GPUs.',
  paradigmShift: {
    oldWay:
      'Teams routed every workflow node to a single frontier LLM, granted agents global database credentials, rebuilt knowledge graphs in nightly batch jobs, and ran multi-hop graph centrality on CPUs.',
    newWay:
      'A federation of vLLM multi-LoRA SLMs and learned routers cuts per-event cost by 80%, Neo4j role privileges and UUID stores isolate PII, LightRAG and Graphiti apply incremental bitemporal updates, and nx-cugraph plus Memento KV compression deliver sub-2-second end-to-end execution.',
    whyItChanged:
      'At production volume, 80–90% of workflow invocations are structured classification or extraction tasks where 3B–32B specialists outperform frontier models at 1/10th to 1/60th the cost, while memory bandwidth and KV cache—not parameter count—govern real-time concurrency.',
  },
  customDiagrams: [
    {
      id: 'agrg-ch08-svg-01',
      title: 'Selective Intelligence & Multi-LoRA Inference Topology',
      subtitle:
        'Routing horizontal workflow nodes across shared-GPU 3B LoRA adapters, 8B cascades, and frontier synthesis',
      bierutCaption:
        'Compare the cost annotations across the workflow DAG: by executing Steps 1–3 in parallel on shared vLLM LoRA adapters and GPU PageRank, and gating the frontier model behind an 8B confidence cascade (0.70 threshold), blended cost drops by 80% ($0.002 vs. $0.010) within a <2s budget.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0B0F19"/>
  <text x="28" y="34" fill="#F9FAFB" font-size="15" font-weight="700" font-family="JetBrains Mono, monospace">SELECTIVE INTELLIGENCE &amp; MULTI-LORA PRODUCTION PIPELINE</text>
  <text x="28" y="54" fill="#9CA3AF" font-size="11">Parallel Phase (Steps 1-3) -&gt; Cascaded Causal Attribution (Step 4) -&gt; Frontier Synthesis &amp; Audit (Steps 5-6)</text>

  <!-- Incoming Event -->
  <rect x="22" y="168" width="108" height="84" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="34" y="194" fill="#60A5FA" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">DEPLOY EVENT</text>
  <text x="34" y="212" fill="#E5E7EB" font-size="9.5">stripe-python</text>
  <text x="34" y="228" fill="#E5E7EB" font-size="9.5">3.2.1 -&gt; 3.3.0</text>
  <text x="34" y="242" fill="#9CA3AF" font-size="8.5">Logs + Manifest</text>

  <!-- Parallel Column: Steps 1, 2, 3 -->
  <rect x="164" y="74" width="184" height="82" rx="8" fill="#111827" stroke="#059669" stroke-width="1.8"/>
  <text x="176" y="96" fill="#34D399" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">1. AlertClassifier</text>
  <text x="176" y="114" fill="#F9FAFB" font-size="9.5">Llama-3.1-3B LoRA #1</text>
  <text x="176" y="130" fill="#D1D5DB" font-size="9">Req Acc: 99% (P1 Miss=10x)</text>
  <text x="176" y="146" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">1/30th Cost | Shared GPU</text>

  <rect x="164" y="170" width="184" height="82" rx="8" fill="#111827" stroke="#059669" stroke-width="1.8"/>
  <text x="176" y="192" fill="#34D399" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">2. LogParser</text>
  <text x="176" y="210" fill="#F9FAFB" font-size="9.5">Llama-3.1-3B LoRA #2</text>
  <text x="176" y="226" fill="#D1D5DB" font-size="9">Structured Triple Extract</text>
  <text x="176" y="242" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">1/30th Cost | 50-80ms TTFT</text>

  <rect x="164" y="266" width="184" height="90" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="176" y="288" fill="#60A5FA" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">3. KG + GPU PageRank</text>
  <text x="176" y="306" fill="#F9FAFB" font-size="9.5">Incremental LightRAG Merge</text>
  <text x="176" y="322" fill="#D1D5DB" font-size="9">nx-cugraph + Llama-3.1-8B</text>
  <text x="176" y="340" fill="#60A5FA" font-size="9" font-family="JetBrains Mono, monospace">1/10th Cost | &lt;100ms GPU</text>

  <!-- Step 4: Causal Attribution Cascade -->
  <rect x="386" y="122" width="182" height="176" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.8"/>
  <text x="398" y="146" fill="#FB923C" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">4. CausalAttribution</text>
  <text x="398" y="164" fill="#F9FAFB" font-size="9.5" font-weight="600">RouteLLM / Cascade Gate</text>
  <rect x="398" y="176" width="158" height="44" rx="5" fill="#1F2937" stroke="#374151"/>
  <text x="408" y="194" fill="#34D399" font-size="9">Fast Path (70%): Llama-8B</text>
  <text x="408" y="210" fill="#9CA3AF" font-size="8.5">When Confidence &gt;= 0.70</text>
  <rect x="398" y="228" width="158" height="44" rx="5" fill="#1F2937" stroke="#EA580C"/>
  <text x="408" y="246" fill="#FB923C" font-size="9">Escalate (30%): Sonnet</text>
  <text x="408" y="262" fill="#9CA3AF" font-size="8.5">Memento 2.5x KV Compress</text>
  <text x="398" y="288" fill="#FB923C" font-size="9" font-family="JetBrains Mono, monospace">~1/5th Blended Cost</text>

  <!-- Step 5 & 6: Synthesis + Governance Audit -->
  <rect x="604" y="96" width="172" height="102" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="616" y="120" fill="#60A5FA" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">5. PredictionSynth</text>
  <text x="616" y="138" fill="#F9FAFB" font-size="9.5">Frontier Model (Sonnet)</text>
  <text x="616" y="156" fill="#D1D5DB" font-size="9">SRE Report Generation</text>
  <text x="616" y="176" fill="#60A5FA" font-size="9" font-family="JetBrains Mono, monospace">1x Cost (Justified)</text>

  <rect x="604" y="222" width="172" height="114" rx="8" fill="#111827" stroke="#059669" stroke-width="1.8"/>
  <text x="616" y="246" fill="#34D399" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">6. KG.GOV Audit Node</text>
  <text x="616" y="264" fill="#E5E7EB" font-size="9">role: sre_on_call</text>
  <text x="616" y="280" fill="#E5E7EB" font-size="9">pii_accessed: False</text>
  <text x="616" y="296" fill="#E5E7EB" font-size="9">Total Latency: &lt; 2.0s</text>
  <text x="616" y="316" fill="#34D399" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">$0.002 / Event (-80%)</text>

  <!-- Connectors -->
  <line x1="130" y1="190" x2="164" y2="115" stroke="#34D399" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="130" y1="210" x2="164" y2="210" stroke="#34D399" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="130" y1="230" x2="164" y2="310" stroke="#60A5FA" stroke-width="1.8" stroke-dasharray="6 4"/>

  <line x1="348" y1="115" x2="386" y2="180" stroke="#34D399" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="348" y1="210" x2="386" y2="210" stroke="#34D399" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="348" y1="310" x2="386" y2="240" stroke="#60A5FA" stroke-width="1.8" stroke-dasharray="6 4"/>

  <line x1="568" y1="185" x2="604" y2="148" stroke="#FB923C" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="690" y1="198" x2="690" y2="222" stroke="#60A5FA" stroke-width="1.8" stroke-dasharray="6 4"/>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Parallel Multi-LoRA & GPU Execution',
          explanation:
            'AlertClassifier and LogParser share one base 3B model on a single GPU via vLLM LoRA hot-swapping (50–80ms TTFT) while nx-cugraph computes PageRank in <100ms.',
        },
        {
          step: '02',
          label: 'Confidence-Gated Causal Cascade',
          explanation:
            'CausalAttributionNode routes routine version bumps to Llama-3.1-8B and escalates only the 30% of cases where confidence falls below 0.70 to Claude Sonnet.',
        },
        {
          step: '03',
          label: 'Memento KV Compression & KG.GOV Lineage',
          explanation:
            'Memento sawtooth block summarization cuts peak KV cache by 2.5x during long causal traces, while Step 6 commits RBAC role and model version metadata to the execution graph.',
        },
      ],
    },
    {
      id: 'agrg-ch08-svg-02',
      title: 'Privacy-by-Architecture & Bitemporal Subgraph Governance',
      subtitle:
        'Decoupling GDPR PII into an external Identity Store while enforcing invisible RBAC and bitemporal edge intervals',
      bierutCaption:
        'Observe how the knowledge graph remains 100% free of raw PII: UUID join keys isolate GDPR Article 17 erasure to a single relational row update while Neo4j security transparency hides unauthorized nodes without leaking access-denied signals.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0B0F19"/>
  <text x="28" y="34" fill="#F9FAFB" font-size="15" font-weight="700" font-family="JetBrains Mono, monospace">SUBGRAPH RBAC, UUID PII DECOUPLING &amp; BITEMPORAL LIFECYCLE</text>
  <text x="28" y="54" fill="#9CA3AF" font-size="11">Persona-Scoped Graph Views + GDPR Article 17 Real-Time Erasure + Graphiti Temporal Invalidation</text>

  <!-- Left: Relational Identity Store (PII Vault) -->
  <rect x="26" y="82" width="218" height="296" rx="8" fill="#111827" stroke="#DC2626" stroke-width="1.8"/>
  <text x="40" y="108" fill="#F87171" font-size="11.5" font-weight="700" font-family="JetBrains Mono, monospace">IDENTITY STORE (SQL)</text>
  <text x="40" y="126" fill="#9CA3AF" font-size="9.5">Strict PII Isolation Vault</text>

  <rect x="40" y="146" width="190" height="72" rx="6" fill="#1F2937" stroke="#374151"/>
  <text x="52" y="166" fill="#F9FAFB" font-size="10" font-weight="600">UUID: usr_94a1...f8</text>
  <text x="52" y="184" fill="#D1D5DB" font-size="9">Name, Email, On-Call Phone</text>
  <text x="52" y="202" fill="#34D399" font-size="9" font-family="JetBrains Mono, monospace">Join Key Only in Graph</text>

  <rect x="40" y="234" width="190" height="124" rx="6" fill="#1F2937" stroke="#DC2626"/>
  <text x="52" y="256" fill="#F87171" font-size="10" font-weight="700">GDPR Art. 17 Erasure</text>
  <text x="52" y="276" fill="#E5E7EB" font-size="9">Soft Delete: Mask SQL row</text>
  <text x="52" y="292" fill="#9CA3AF" font-size="8.5">-&gt; Instant anonymous UUID</text>
  <text x="52" y="314" fill="#E5E7EB" font-size="9">Hard Delete: Async Cypher</text>
  <text x="52" y="330" fill="#9CA3AF" font-size="8.5">-&gt; DETACH DELETE UUID node</text>

  <!-- Center: Neo4j Subgraph RBAC -->
  <rect x="278" y="82" width="244" height="296" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.8"/>
  <text x="294" y="108" fill="#60A5FA" font-size="11.5" font-weight="700" font-family="JetBrains Mono, monospace">SUBGRAPH RBAC VIEWS</text>
  <text x="294" y="126" fill="#9CA3AF" font-size="9.5">Invisible Node/Property Filtering</text>

  <rect x="294" y="146" width="212" height="96" rx="6" fill="#1F2937" stroke="#059669"/>
  <text x="306" y="166" fill="#34D399" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">ROLE: sre_oncall</text>
  <text x="306" y="184" fill="#E5E7EB" font-size="9">GRANT TRAVERSE: Service, Library</text>
  <text x="306" y="200" fill="#E5E7EB" font-size="9">GRANT READ: status, version</text>
  <text x="306" y="218" fill="#F87171" font-size="9">DENY READ: cost_per_hour, budget</text>

  <rect x="294" y="258" width="212" height="100" rx="6" fill="#1F2937" stroke="#EA580C"/>
  <text x="306" y="278" fill="#FB923C" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">ROLE: finance_analyst</text>
  <text x="306" y="296" fill="#E5E7EB" font-size="9">GRANT READ: cost_per_hour, team</text>
  <text x="306" y="314" fill="#F87171" font-size="9">DENY TRAVERSE: Deployment, Alert</text>
  <text x="306" y="334" fill="#9CA3AF" font-size="8.5">Denied nodes are invisible (0 leak)</text>

  <!-- Right: Bitemporal Edge & TTL Lifecycle -->
  <rect x="556" y="82" width="218" height="296" rx="8" fill="#111827" stroke="#059669" stroke-width="1.8"/>
  <text x="570" y="108" fill="#34D399" font-size="11.5" font-weight="700" font-family="JetBrains Mono, monospace">BITEMPORAL LIFECYCLE</text>
  <text x="570" y="126" fill="#9CA3AF" font-size="9.5">Graphiti Edge Windows + Tiered TTL</text>

  <rect x="570" y="146" width="190" height="96" rx="6" fill="#1F2937" stroke="#374151"/>
  <text x="582" y="166" fill="#F87171" font-size="9.5" font-weight="600">:DEPENDS_ON {v: "3.2.1"}</text>
  <text x="582" y="182" fill="#9CA3AF" font-size="8.5">t_invalid = 2026-03-15T14:00Z</text>
  <text x="582" y="204" fill="#34D399" font-size="9.5" font-weight="600">:DEPENDS_ON {v: "3.3.0"}</text>
  <text x="582" y="220" fill="#E5E7EB" font-size="8.5">t_valid = now(), t_invalid = null</text>

  <rect x="570" y="258" width="190" height="100" rx="6" fill="#1F2937" stroke="#059669"/>
  <text x="582" y="278" fill="#34D399" font-size="10" font-weight="700">Downsampling &amp; Hub Retention</text>
  <text x="582" y="296" fill="#E5E7EB" font-size="9">5m snapshots (57.6k/day):</text>
  <text x="582" y="312" fill="#D1D5DB" font-size="8.5">7d full -&gt; hourly -&gt; daily TTL</text>
  <text x="582" y="332" fill="#34D399" font-size="9">Hub Nodes: Permanent anchor</text>

  <!-- Connectors -->
  <line x1="244" y1="182" x2="278" y2="182" stroke="#F87171" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="522" y1="200" x2="556" y2="200" stroke="#60A5FA" stroke-width="1.8" stroke-dasharray="6 4"/>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'UUID Decoupling for Real-Time Erasure',
          explanation:
            'Storing only UUIDs in Neo4j allows GDPR erasure requests to complete immediately by masking the relational Identity Store row while keeping topological edges intact.',
        },
        {
          step: '02',
          label: 'Security Transparency Against Probing',
          explanation:
            'Neo4j RBAC makes restricted labels and properties completely invisible rather than returning permission errors that an autonomous agent could exploit.',
        },
        {
          step: '03',
          label: 'Bitemporal Edge Invalidation',
          explanation:
            'Upgrading stripe-python sets t_invalid on the 3.2.1 edge and merges a 3.3.0 edge with t_invalid: null, preserving historical state for post-incident root-cause queries.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'agrg-ch08-mm1',
      name: 'The Cost-Per-Successful-Completion Law',
      tagline: 'Token price is an illusion; only total cost divided by verified task completions matters.',
      naiveIntuition:
        'Teams either route every workflow node to a frontier model for safety or pick the cheapest model per token based on generic MMLU leaderboards.',
      firstPrinciplesReality:
        '80–90% of workflow invocations are structured classification or extraction tasks where fine-tuned 3B–32B models outperform GPT-4o at 1/10th to 1/60th the cost, provided each node is benchmarked against asymmetric domain failure weights.',
      howToApply:
        'Wrap every workflow node in a CostTracker that divides cumulative spend by verified successes and penalizes catastrophic misses (such as P1 alerts misclassified as P3) 10x heavier than false escalations.',
    },
    {
      id: 'agrg-ch08-mm2',
      name: 'Bitemporal Invalidation Over Destructive CRUD',
      tagline: 'Never overwrite or delete historical dependency edges that your agent needs to explain past outages.',
      naiveIntuition:
        'Treating a knowledge graph like a CRUD database—updating versions in place or deleting expired edges via aggressive global TTLs—keeps storage small.',
      firstPrinciplesReality:
        'In-place updates incur read-modify-write locks and destroy the pre-deployment topology required for causal attribution, whereas unpruned 5-minute polling creates 57,600 snapshot nodes per day per cluster.',
      howToApply:
        'Set `t_invalid = datetime()` on superseded dependency edges while retaining permanent hub nodes and downsampling high-frequency telemetry snapshots from 7-day full resolution to hourly and daily aggregates.',
    },
    {
      id: 'agrg-ch08-mm3',
      name: 'The KV-Cache & Memory-Bandwidth Ceiling',
      tagline: 'Graph traversals are starved by CPU pointer chasing; reasoning concurrency is starved by GPU KV cache.',
      naiveIntuition:
        'Engineers assume that shrinking model weights via quantization or multi-LoRA adapters automatically lets a single GPU serve hundreds of concurrent reasoning agents.',
      firstPrinciplesReality:
        'Pointer-chasing graph analytics stall on CPU memory bandwidth, while 50,000-token causal reasoning traces exhaust an 80 GB GPU’s KV cache regardless of how small the model weights are.',
      howToApply:
        'Offload PageRank and Louvain centrality to GPU memory via `nx-cugraph` with cached write-backs, and compress long chain-of-thought traces into sawtooth blocks using Memento to cut peak KV memory by 2.5x.',
    },
  ],
  deepSections: [
    {
      id: 'agrg-ch08-sec-01',
      sectionNumber: '8.1',
      title: 'Selective Intelligence & Asymmetric Per-Node Economics',
      subtitle: 'Static assignment, FrugalGPT cascades, RouteLLM/MixLLM routers, and asymmetric failure weights',
      coreMechanism:
        'In a horizontal workflow graph, open-ended synthesis and novel causal reasoning account for only 10–20% of node invocations; the remaining 80–90% perform query classification, entity extraction, retrieval routing, or constraint validation. Selective intelligence matches model tier to node complexity: a 3B SLM runs 10–30x cheaper than a 405B model, and domain-specialized models like Triplex (3.8B) outperform GPT-4o on triple extraction at 1/60th the cost. Similarly, Kakao’s AI Shopping Mate boosted format adherence from 0.655 to 0.987 and task accuracy from 0.578 to 0.890 by replacing monolithic GPT-4o calls with node-specific 27–32B models.\n\nTeams implement routing across three maturity stages: Static Routing fixes a model per node at design time; Threshold Cascading (FrugalGPT) tries a cheap model first and escalates when evaluator confidence drops below threshold; and Learned Routing uses matrix factorization (`RouteLLM`, retaining 95% GPT-4 quality at <50% cost) or contextual bandits (`MixLLM`, 97% quality at 24% cost). Every node is governed by Cost per Successful Completion and node-specific asymmetric failure weights.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Build Per-Node Asymmetric Eval Sets',
          detail:
            'Curate 500–2,000 production samples per node with domain failure weights (e.g., 10.0 penalty for P1-as-P3 alert misses vs. 0.5 for simple-as-complex query routing).',
        },
        {
          step: '02',
          title: 'Assign Static SLMs & Confidence Cascades',
          detail:
            'Bind 3B LoRA specialists to classification/parsing nodes (99% threshold) and configure a 0.70 confidence cascade from 8B to frontier models on causal reasoning nodes.',
        },
        {
          step: '03',
          title: 'Track Cost Per Successful Completion',
          detail:
            'Instrument every node invocation to log tokens, latency, spend, and downstream evaluator acceptance to compute true cost per verified completion.',
        },
      ],
      formulas: [
        {
          name: 'Cost Per Successful Completion & Asymmetric Weighted Error Rate',
          expression:
            'C_{\\text{success}}(n) = \\frac{\\sum_{i=1}^{N} c_i}{\\max\\left(\\sum_{i=1}^{N} \\mathbb{I}(\\text{success}_i), 1\\right)}, \\quad E_{\\text{weighted}} = \\frac{1}{N} \\sum_{i=1}^{N} w(y_i, \\hat{y}_i) \\cdot \\mathbb{I}(y_i \\neq \\hat{y}_i)',
          intuition:
            'Penalizes cheap models that require repeated retries or fail silently, while weighting directional classification errors by their real operational blast radius.',
          variables: [
            {
              symbol: 'c_i, \\mathbb{I}(\\text{success}_i)',
              meaning: 'USD token cost of invocation i and binary indicator (1 if accepted by node evaluator, 0 otherwise)',
            },
            {
              symbol: 'w(y_i, \\hat{y}_i)',
              meaning: 'Asymmetric domain penalty for misclassifying true label y_i as predicted label y_hat_i',
            },
          ],
          workedExample:
            'In the DevOps pipeline, running 3B LoRAs (1/30th cost) on AlertClassifier and LogParser, an 8B model (1/10th) on DependencyAnalyzer, an 8B->Sonnet cascade (30% escalation = ~1/5th blended cost) on CausalAttributionNode, and Sonnet (1x) on PredictionSynthesis slashes per-event cost by 80% from $0.010 to $0.002.',
        },
      ],
      keyTakeaways: [
        'Never select specialist SLMs using generic MMLU scores; evaluate against production node traces weighted by directional failure severity.',
        'Start with static node routing and add threshold cascading on open-ended reasoning nodes before investing in learned routers.',
        'Use a dedicated domain evaluator rather than raw token logprobs to calibrate cascade escalation thresholds.',
      ],
      commonPitfalls: [
        'Using static SLM routing on high-variance reasoning nodes without an escalation cascade causes failures on the 5% of novel incident edge cases.',
        'Optimizing raw cost per token instead of cost per successful completion hides the expense of downstream retries and failed predictions.',
      ],
      figures: [
        {
          file: 'agrg_0801.png',
          originalLabel: 'Figure 8-1. Selective intelligence applied to the DevOps agent’s horizontal workflow graph',
          bierutTitle: 'Match Model Parameter Scale to Node Cognitive Complexity Across the Workflow DAG',
          editorialAnalysis:
            'Follow the horizontal workflow from left to right: routine classification and log extraction run on 3B fine-tuned SLMs at 1/30th cost, structured subgraph traversal runs on an 8B model at 1/10th cost, causal reasoning cascades from 8B to a frontier model only when confidence drops below 0.70, and full frontier spend is reserved strictly for final SRE report synthesis.',
          keyTakeaways: [
            'Reserving frontier models for the 10–20% of invocations requiring open-ended synthesis reduces total pipeline spend by ~80%.',
            'Smaller fine-tuned models improve format adherence and consistency on bounded tasks because their capacity is not diluted across general chat objectives.',
          ],
        },
      ],
    },
    {
      id: 'agrg-ch08-sec-02',
      sectionNumber: '8.2',
      title: 'Subgraph Governance, Privacy by Architecture & Compliance Lineage',
      subtitle: 'Neo4j invisible RBAC, UUID Identity Store decoupling for GDPR Article 17, and KG.GOV audit nodes',
      coreMechanism:
        'Because dense knowledge graphs connect public service catalogs to internal cost metrics and employee on-call schedules, an unscoped agent query can traverse across security boundaries in a single hop. Production graph governance enforces Subgraph-Level Access Control using Neo4j privileges (`GRANT/DENY TRAVERSE`, `GRANT/DENY READ`) bound to each agent persona at connection time (`sre_oncall` vs. `finance_analyst`). Crucially, Neo4j enforces security transparency: denied nodes and properties are completely invisible rather than returning access-denied errors, preventing autonomous agents from inferring sensitive topology by probing permission boundaries.\n\nTo satisfy GDPR Article 17 and CCPA deletion mandates without triggering destructive `DETACH DELETE` cascades across historical incident subgraphs, Rehmer’s Privacy-by-Architecture pattern stores zero PII inside the knowledge graph. Graph nodes hold only anonymous UUIDs, while names and emails reside in an external relational Identity Store. Finally, the `KG.GOV` framework turns Chapter 7’s execution graph into a zero-overhead compliance ledger by recording `access_role`, `data_sources_accessed`, `pii_accessed`, `model_id`, and `model_version` on every execution node.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Bind Persona Roles at Graph Connection',
          detail:
            'Configure Neo4j GRANT/DENY TRAVERSE and READ privileges per agent persona so unauthorized nodes and properties remain invisible during traversal.',
        },
        {
          step: '02',
          title: 'Decouple PII via UUID Identity Store',
          detail:
            'Keep only UUID join keys inside graph nodes and honor real-time GDPR erasure via relational soft-delete masking or asynchronous DETACH DELETE cleanup.',
        },
        {
          step: '03',
          title: 'Stamp KG.GOV Metadata onto Execution Nodes',
          detail:
            'Log access_role, pii_accessed, model_id, and model_version on every ExecutionNode so compliance audits execute as simple Cypher queries.',
        },
      ],
      keyTakeaways: [
        'Enforce security transparency where unauthorized graph nodes are invisible rather than returning permission-denied exceptions.',
        'Store only UUIDs inside the knowledge graph and isolate all PII in a relational Identity Store for single-row real-time GDPR erasure.',
        'Test every RBAC role against standard agent investigation workflows prior to deployment to verify that denied edges do not sever required reasoning paths.',
      ],
      commonPitfalls: [
        'Over-restricting `TRAVERSE` privileges on shared intermediate labels (such as `Library` nodes) silently breaks multi-hop dependency analysis for on-call SRE agents.',
        'Coupling access control rules directly to a single database engine without a policy abstraction layer when operating across heterogeneous graph stores.',
      ],
    },
    {
      id: 'agrg-ch08-sec-03',
      sectionNumber: '8.3',
      title: 'Graph Lifecycle Management, Incremental Updates & Staged Rollouts',
      subtitle: 'Neo4j-Migrations, CrowdStrike TTL vs. Graphiti bitemporal edges, LightRAG merges, and 4-phase rollouts',
      coreMechanism:
        'Property graphs lack native `ALTER TABLE` commands and accumulate stale topology rapidly: sampling 200 resources every 5 minutes generates 57,600 snapshot nodes daily per cluster. Schema evolution uses `Neo4j-Migrations` (storing history as an in-graph subgraph) and evolution compilers (`Nautilus` and `Geo-X`), executed in Kubernetes init containers under $N-1$ backward compatibility. Lifecycle management combines CrowdStrike Threat Graph’s append-only immutable writes with background TTL expiration (7 days full resolution, then hourly/daily downsampling while preserving permanent hub nodes) and `Graphiti` bitemporal edge invalidation (`t_valid`, `t_invalid`) so superseded dependencies remain queryable for historical root-cause analysis.\n\nTo avoid nightly batch rebuilds or community re-clustering overhead, `LightRAG` incremental updates use Cypher `MERGE` (`ON CREATE` / `ON MATCH`) to upsert entities and invalidate dropped dependency edges within seconds of a deployment event—scaling update cost with new event size rather than total graph size. Deploying coordinated changes across schema, data, and prompts follows a four-phase staged rollout.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Phase 1 & 2: N-1 Schema Migration & Data Backfill',
          detail:
            'Apply additive Cypher migrations (e.g., adding :MONITORED_BY edges) that preserve N-1 compatibility with running code, then execute and verify the data backfill.',
        },
        {
          step: '02',
          title: 'Phase 3: Canary Agent Code Rollout',
          detail:
            'Deploy updated agent prompts and node logic referencing the new schema to a 5% canary for 2 hours, gating promotion on regression pass, P95 < 500ms, and accuracy delta >= -0.02.',
        },
        {
          step: '03',
          title: 'Phase 4: Delayed Legacy Schema Cleanup',
          detail:
            'Wait a 7-day soak window after full agent code rollout before dropping deprecated properties (e.g., s.alert_config) and old relationship types.',
        },
      ],
      keyTakeaways: [
        'Invalidate superseded dependency edges by setting `t_invalid = datetime()` rather than deleting them so the agent retains historical context for causal attribution.',
        'Use LightRAG-style incremental Cypher `MERGE` updates on deployment events so update cost scales with event payload size rather than total graph size.',
        'Coordinate schema, backfill, agent code canary, and 7-day delayed cleanup in a declarative deployment manifest with explicit `depends_on` gates.',
      ],
      commonPitfalls: [
        'Applying aggressive 30-day hard-delete TTLs to incident and dependency edges erases the historical patterns the agent needs to predict recurring failures.',
        'Deploying agent prompts that query a new relationship type before the schema migration and data backfill finish causes silent empty-context failures.',
      ],
      figures: [
        {
          file: 'agrg_0802.png',
          originalLabel: 'Figure 8-2. Staged rollout for a graph-backed agentic system',
          bierutTitle: 'Sequence Schema, Backfill, Agent Canary, and Cleanup to Guarantee Zero-Downtime Evolution',
          editorialAnalysis:
            'Read this four-stage deployment timeline from left to right as a strict dependency chain: Phase 1 introduces additive N-1 compatible schema changes, Phase 2 backfills existing nodes and verifies edge counts, Phase 3 rolls out the new agent prompt/code behind a 5% canary gate, and Phase 4 drops legacy properties only after a 7-day post-rollout soak.',
          keyTakeaways: [
            'N-1 schema compatibility ensures that currently running agent instances continue functioning while data backfill executes.',
            'Delaying destructive schema cleanup by 7 days preserves instant rollback capability if a late regression surfaces in agent code.',
          ],
        },
      ],
    },
    {
      id: 'agrg-ch08-sec-04',
      sectionNumber: '8.4',
      title: 'Hardware Acceleration, KV-Cache Compression & End-to-End Pipeline',
      subtitle: 'GPU PageRank via nx-cugraph, vLLM multi-LoRA serving, Memento sawtooth KV caching, and latency budgets',
      coreMechanism:
        'Production latency bottlenecks hit two channels: pointer-chasing graph analytics and multi-step model inference. Because PageRank, Louvain community detection, and betweenness centrality follow irregular memory pointers, they are bound by memory bandwidth rather than CPU compute. Offloading analytics to NVIDIA `cuGraph` / `nx-cugraph` delivers 80x–485x speedups, cutting DevOps blast-radius PageRank from 3–5 seconds to <100ms. Because Cypher engines remain CPU-bound, production systems run a three-phase GPU round-trip: extract the subgraph, compute GPU PageRank on warm memory, and write `criticality_score` back onto Neo4j nodes.\n\nOn the inference channel, DAG parallelization runs independent nodes concurrently, while `vLLM` serves multiple specialist adapters from one base model via multi-LoRA hot-swapping (50–80ms TTFT at 100 concurrent users; `Cerebras` reaches 1,800 tok/s; `SambaNova SN50` hot-swaps models in milliseconds). To overcome the GPU KV-cache concurrency ceiling on 50,000-token reasoning traces, Microsoft’s `Memento` segments chains of thought into blocks, emits a summary token per block, and masks prior tokens—creating a sawtooth KV profile that cuts peak KV memory by 2x–2.5x.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Execute 3-Phase GPU Analytics Round-Trip',
          detail:
            'Extract service dependency edges from Neo4j, dispatch PageRank to GPU via nx-cugraph (<100ms), and write criticality_score properties back for fast Cypher filtering.',
        },
        {
          step: '02',
          title: 'Co-Locate Specialist SLMs via vLLM Multi-LoRA',
          detail:
            'Load a single Llama-3.1-3B base model into GPU memory and dynamically swap lightweight rank-16 LoRA adapters for AlertClassifier and LogParser.',
        },
        {
          step: '03',
          title: 'Bound Peak KV Cache with Memento Block Masking',
          detail:
            'Apply Memento sawtooth block summarization on long-trace reasoning nodes to slash peak per-user KV memory by 2.5x and multiply GPU concurrency.',
        },
      ],
      formulas: [
        {
          name: 'KV-Cache Concurrency Capacity & Memento Compression Gain',
          expression:
            'U_{\\max} = \\left\\lfloor \\frac{M_{\\text{GPU}} - M_{\\text{weights}} - M_{\\text{LoRA}}}{\\text{PeakKV}_{\\text{trace}} / \\gamma_{\\text{Memento}}} \\right\\rfloor',
          intuition:
            'Once multi-LoRA shares base weights, concurrent active users per GPU are strictly bounded by peak KV-cache memory per reasoning trace; Memento’s 2.0x–2.5x compression factor (gamma) directly multiplies concurrent incident capacity.',
          variables: [
            {
              symbol: 'M_{\\text{GPU}}, M_{\\text{weights}}, M_{\\text{LoRA}}',
              meaning: 'Total GPU VRAM (e.g., 80 GB on H100), shared base model weight memory, and small LoRA delta memory',
            },
            {
              symbol: '\\text{PeakKV}_{\\text{trace}}, \\gamma_{\\text{Memento}}',
              meaning: 'Uncompressed peak KV cache per active reasoning trace and Memento sawtooth compression factor (2.0 to 2.5)',
            },
          ],
          workedExample:
            'Reducing peak KV per reasoning trace by 2.5x with Memento multiplies concurrent incident analyses per H100 by 2.5x, allowing a production fleet to drop from 10 GPUs to 4 GPUs at identical latency.',
        },
      ],
      keyTakeaways: [
        'Maintain warm GPU-resident subgraphs and cache `criticality_score` back onto Neo4j nodes so cold PCIe transfer latency does not erase GPU PageRank speedups.',
        'Measure peak KV cache per active user before optimizing weights; for long-trace causal reasoning, KV compression yields your largest concurrency multiplier.',
        'Budget end-to-end workflow latency across layers: 5–50ms for warm GPU graph retrieval, 50–200ms per vLLM SLM step, and <2 seconds for a parallelized 5–10 step DAG.',
      ],
      commonPitfalls: [
        'Extracting and transferring the entire graph from disk to GPU memory on every user query incurs multi-second cold-start penalties that negate cuGraph speedups.',
        'Quantizing model weights while leaving 50,000-token reasoning traces uncompressed fails to increase concurrent user capacity on memory-bound GPUs.',
      ],
      figures: [
        {
          file: 'agrg_0803.png',
          originalLabel: 'Figure 8-3. A single deployment event flowing through the optimized DevOps agent pipeline',
          bierutTitle: 'Orchestrate All Eight Agentic GraphRAG Pillars Within a Two-Second, $0.002 Production Budget',
          editorialAnalysis:
            'Trace the single stripe-python deployment event from ingestion to audit: Steps 1, 2, and 3 execute concurrently across shared vLLM 3B LoRA adapters, incremental LightRAG Cypher merges, and <100ms nx-cugraph PageRank; Step 4 routes causal reasoning through an 8B-to-Sonnet cascade; Step 5 synthesizes the SRE prediction; and Step 6 commits the governance-stamped execution graph.',
          keyTakeaways: [
            'Executing independent classification, log parsing, and subgraph PageRank nodes in parallel keeps end-to-end 6-step completion under 2 seconds.',
            'Every single deployment event simultaneously updates the bitemporal knowledge graph and writes an auditable execution graph for continual self-evolution.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Model Routing, Graph Lifecycle & Hardware Acceleration Trade-Off Matrix',
      description:
        'Comparing production optimization patterns across engineering complexity, cost reduction, latency profile, and failure risks.',
      headers: [
        'Optimization Pattern',
        'Primary Mechanism',
        'Cost / Latency Impact',
        'Ideal Production Workload',
        'Key Operational Caveat',
      ],
      rows: [
        [
          'Static Node Routing',
          'Design-time SLM/LLM assignment per node',
          '10–60x cheaper on routine nodes; 0ms router overhead',
          'Stable workflow DAGs with uniform per-node difficulty',
          'Fails on the 5% of novel edge-case inputs without a fallback',
        ],
        [
          'Threshold Cascade (FrugalGPT)',
          'Sequential escalation when confidence < threshold',
          '~80% blended pipeline savings; adds 1 step latency on escalate',
          'Variable-difficulty nodes like CausalAttributionNode',
          'Requires calibrated domain evaluator rather than raw logprobs',
        ],
        [
          'Learned Router (RouteLLM / MixLLM)',
          'Matrix factorization or contextual bandit pre-node',
          '95–97% frontier quality at 24–50% cost',
          'High-volume traffic with rich historical preference labels',
          'Requires continuous retraining as model price-performance shifts',
        ],
        [
          'Append-Only + Tiered TTL',
          'Immutable node writes + background TTL downsampling',
          'Eliminates read-modify-write lock latency (70M req/s scale)',
          'High-frequency telemetry snapshots (57.6k nodes/day/cluster)',
          'Must exempt permanent hub nodes from TTL expiration',
        ],
        [
          'Bitemporal Edges (Graphiti + LightRAG)',
          'Incremental MERGE + t_valid / t_invalid intervals',
          'Sub-second event ingestion; preserves full causal history',
          'Service dependency graphs and incident resolution lineage',
          'Queries must filter on t_invalid IS NULL for current state',
        ],
        [
          'GPU Graph Analytics (nx-cugraph)',
          '3-phase extract, GPU PageRank/Louvain, property write-back',
          '80x–485x analytics speedup (3–5s CPU -> <100ms GPU)',
          'Large-graph blast radius and centrality scoring',
          'Must keep warm GPU subgraphs or cache scores on nodes',
        ],
        [
          'vLLM Multi-LoRA + Memento KV',
          'Shared base weights + sawtooth block KV compression',
          '50–80ms TTFT; 2.5x higher concurrent users per GPU',
          'Multi-specialist fleets with long chain-of-thought traces',
          'Requires two-stage SFT to teach Memento block summarization',
        ],
      ],
      verdictRule:
        'Combine static 3B multi-LoRA adapters on deterministic extraction nodes with a confidence cascade on open-ended reasoning nodes, enforce bitemporal edge invalidation with tiered snapshot TTLs, and pair warm nx-cugraph write-backs with Memento KV compression.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'agrg-ch08-scen-01',
      title: 'Slashing a $50,000/Month Frontier Model Bill and 6-Second Incident Latency',
      roleAndContext:
        'VP of Platform Engineering scaling the DevOps predictive outage agent from a single-cluster prototype to 24/7 production monitoring across 15,000 microservices.',
      symptomOrFailure:
        'Routing all five workflow nodes through a frontier LLM cost $0.01+ per deployment event while CPU-based NetworkX PageRank and sequential model calls pushed per-event latency past 6 seconds and exhausted H100 KV-cache memory under concurrent alert spikes.',
      naiveFixAndWhyItFails:
        'Replacing the frontier model everywhere with an uncalibrated 3B model cut token costs but caused catastrophic P1 alert misses and failed on complex multi-hop causal attribution.',
      firstPrinciplesSolution:
        'Built per-node evaluation sets with asymmetric failure weights (10x penalty for P1-as-P3 misses), co-located fine-tuned 3B LoRA adapters for AlertClassifier and LogParser on shared vLLM GPUs, added a 0.70 confidence cascade (Llama-3.1-8B -> Claude Sonnet) with Memento KV compression on CausalAttributionNode, and parallelized Steps 1–3 with warm nx-cugraph GPU PageRank.',
      measurableOutcome:
        'Blended cost per deployment event dropped 80% (from $0.010 to $0.002), blast-radius PageRank fell from 4.2 seconds to 85 milliseconds, peak KV cache dropped 2.5x (cutting GPU fleet size from 10 to 4), and end-to-end pipeline latency stayed under 1.8 seconds.',
    },
    {
      id: 'agrg-ch08-scen-02',
      title: 'Cross-Domain PII Leakage and Broken Queries During a Live Graph Schema Migration',
      roleAndContext:
        'Lead Data Governance Architect preparing the DevOps knowledge graph for an enterprise SOC2 and GDPR Article 17 audit while adding alert-rule monitoring edges.',
      symptomOrFailure:
        'An autonomous billing query traversed from Service nodes into on-call Employee records exposing personal phone numbers, GDPR deletion requests triggered slow cascading graph locks, and deploying a new CausalAttributionNode prompt before backfilling `:MONITORED_BY` edges broke live incident predictions.',
      naiveFixAndWhyItFails:
        'Blocking all agent traversals across `Service` nodes crippled SRE dependency analysis, and running nightly batch graph rebuilds created multi-hour windows of stale topology.',
      firstPrinciplesSolution:
        'Moved all employee PII into a relational Identity Store linked only by UUIDs in Neo4j, bound persona-specific Neo4j roles (`sre_oncall` vs. `finance_analyst`) with invisible node/property denial, stamped `KG.GOV` metadata onto every execution graph node, and enforced a 4-phase staged rollout manifest (N-1 schema migration -> data backfill -> 5% 2-hour agent canary -> 7-day delayed property cleanup).',
      measurableOutcome:
        'GDPR erasure turnaround dropped from days to single-row millisecond SQL updates, unauthorized cost and PII fields became completely invisible to cross-persona queries, and schema evolution deployed with zero downtime or broken predictions.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'agrg-ch08-q1',
        scenarioPrompt:
          'When building per-node evaluation sets for the DevOps agent (Example 8-4), why does AlertClassifier require a 99% accuracy threshold with a 10.0 failure weight on P1_misclassified_as_P3, whereas QueryAnalyst requires only 90% accuracy with a 0.5 weight on simple_as_complex?',
        options: [
          {
            label: 'A',
            text: 'AlertClassifier runs on a frontier model while QueryAnalyst runs on a 3B model.',
            isCorrect: false,
            explanation:
              'AlertClassifier actually runs on a fine-tuned 3B LoRA specialist; the threshold reflects downstream failure consequences, not model size.',
          },
          {
            label: 'B',
            text: 'Directional errors have asymmetric production blast radii: missing a P1 outage means nobody is paged (catastrophic), whereas routing a simple query as complex merely spends a few extra retrieval tokens that downstream nodes still resolve correctly.',
            isCorrect: true,
            explanation:
              'Per-node evaluation must weight errors by whether downstream workflow nodes can recover or whether the error causes an unrecoverable production miss.',
          },
          {
            label: 'C',
            text: 'QueryAnalyst outputs are automatically corrected by Outlines regex constraints.',
            isCorrect: false,
            explanation:
              'Outlines enforces syntactic schema validity, not semantic complexity classification.',
          },
          {
            label: 'D',
            text: 'Neo4j RBAC blocks QueryAnalyst from reading P1 alert properties.',
            isCorrect: false,
            explanation:
              'RBAC governs subgraph visibility per persona, not classification error weighting.',
          },
        ],
      },
      {
        id: 'agrg-ch08-q2',
        scenarioPrompt:
          'How does Neo4j Enterprise’s "security transparency" protect an autonomous GraphRAG agent when a role is denied TRAVERSE or READ access to sensitive nodes?',
        options: [
          {
            label: 'A',
            text: 'It returns a HTTP 403 Forbidden error with the restricted node ID so the agent can request human approval.',
            isCorrect: false,
            explanation:
              'Returning explicit access-denied errors leaks the existence and topology of restricted nodes.',
          },
          {
            label: 'B',
            text: 'It replaces restricted property values with synthetic hallucinated numbers generated by a local SLM.',
            isCorrect: false,
            explanation:
              'Injecting synthetic numbers would corrupt downstream quantitative reasoning.',
          },
          {
            label: 'C',
            text: 'It makes unauthorized nodes and properties completely invisible in query results, preventing the agent from distinguishing between non-existent data and forbidden data or probing access boundaries.',
            isCorrect: true,
            explanation:
              'Security transparency ensures zero information leakage through permission-denied signals when an autonomous agent explores the graph.',
          },
          {
            label: 'D',
            text: 'It automatically triggers a GDPR DETACH DELETE on any node the agent attempts to traverse without permission.',
            isCorrect: false,
            explanation:
              'Access control filters query views; it never deletes underlying graph data.',
          },
        ],
      },
      {
        id: 'agrg-ch08-q3',
        scenarioPrompt:
          'Why do production GraphRAG systems combine a three-phase GPU round-trip (extract subgraph -> run nx-cugraph PageRank -> write back criticality_score) with Memento chain-of-thought block masking?',
        options: [
          {
            label: 'A',
            text: 'Because Neo4j executes Cypher traversals natively on GPU shaders, requiring Memento to compress Cypher strings.',
            isCorrect: false,
            explanation:
              'No major graph database executes Cypher traversals natively on GPU; only analytics like PageRank run on GPU via cuGraph.',
          },
          {
            label: 'B',
            text: 'The GPU round-trip overcomes CPU memory-bandwidth bottlenecks on irregular graph pointer chasing (writing scores back for fast Cypher filtering), while Memento compresses chain-of-thought KV cache by 2x–2.5x to remove the GPU VRAM concurrency ceiling.',
            isCorrect: true,
            explanation:
              'This addresses both hardware ceilings: CPU memory bandwidth on graph analytics and GPU KV-cache exhaustion on long-trace concurrent inference.',
          },
          {
            label: 'C',
            text: 'Memento converts Python NetworkX code into CUDA C++ kernels at runtime.',
            isCorrect: false,
            explanation:
              'nx-cugraph dispatches NetworkX calls to GPU; Memento is a supervised fine-tuning method that compresses LLM KV cache via block summary tokens.',
          },
          {
            label: 'D',
            text: 'Writing criticality_score back to Neo4j triggers automatic LoRA adapter weight training.',
            isCorrect: false,
            explanation:
              'Caching criticality_score on Service nodes lets Cypher filter the top 20% critical nodes without recomputing PageRank on every query.',
          },
        ],
      },
      {
        id: 'agrg-ch08-q4',
        scenarioPrompt:
          'You are deploying a change that replaces the `s.alert_config` node property with a new `(:Service)-[:MONITORED_BY]->(:AlertRule)` relationship and updates `CausalAttributionNode` to query that edge. What is the exact four-phase staged rollout order?',
        options: [
          {
            label: 'A',
            text: '1. Drop s.alert_config -> 2. Add :MONITORED_BY schema -> 3. Deploy agent code -> 4. Backfill data.',
            isCorrect: false,
            explanation:
              'Dropping the old property first immediately breaks currently running agent instances.',
          },
          {
            label: 'B',
            text: '1. Deploy agent code canary -> 2. Run schema migration -> 3. Backfill data -> 4. Cleanup.',
            isCorrect: false,
            explanation:
              'Deploying agent code before the schema and backfill exist causes queries for :MONITORED_BY to return empty results.',
          },
          {
            label: 'C',
            text: '1. Deploy N-1 compatible schema migration -> 2. Backfill :MONITORED_BY edges and verify count > 0 -> 3. Deploy new agent code with canary validation -> 4. Remove deprecated s.alert_config after a 7-day delay.',
            isCorrect: true,
            explanation:
              'Maintaining N-1 compatibility during migration and backfill ensures zero downtime and safe rollback before deprecating legacy properties.',
          },
          {
            label: 'D',
            text: 'Rebuild the entire knowledge graph offline in a nightly batch and swap DNS pointers at midnight.',
            isCorrect: false,
            explanation:
              'Full rebuilds create stale data windows and lose incremental deployment events.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'agrg-ch08-fc1',
        category: 'optimization',
        front: 'What did Kakao’s AI Shopping Mate prove when replacing monolithic GPT-4o calls with a workflow graph of 27–32B fine-tuned specialist models?',
        back: 'Format adherence rose from 0.655 to 0.987, task accuracy jumped from 0.578 to 0.890, and human evaluators preferred the smaller specialists in 63% of 2,100 turns.',
        mentalHook: 'Focused training signals on bounded graph nodes beat diluted frontier models in both cost and quality.',
      },
      {
        id: 'agrg-ch08-fc2',
        category: 'security',
        front: 'How does Rehmer’s "Privacy by Architecture" pattern handle GDPR Article 17 right-to-erasure in densely connected knowledge graphs?',
        back: 'The graph stores only anonymous UUIDs while PII lives in a relational Identity Store, enabling instant soft-delete by masking the SQL mapping or async hard-delete via DETACH DELETE.',
        mentalHook: 'UUIDs in the graph, PII in SQL—delete the person in milliseconds without shattering graph topology.',
      },
      {
        id: 'agrg-ch08-fc3',
        category: 'data',
        front: 'Why is LightRAG’s incremental update architecture critical for real-time DevOps knowledge graphs compared to Microsoft’s original GraphRAG?',
        back: 'LightRAG upserts entities and invalidates edges via Cypher MERGE without reconstructing global community hierarchies, making update cost proportional to the new event rather than the entire graph.',
        mentalHook: 'Scale update cost with the delta, never with the total database size.',
      },
      {
        id: 'agrg-ch08-fc4',
        category: 'data',
        front: 'How does Fischer (2026) prevent 5-minute infrastructure polling (57,600 nodes/day per cluster) from choking Neo4j while preserving graph structure?',
        back: 'Apply tiered TTLs to temporal snapshot nodes (7 days full granularity -> hourly -> daily downsampling) while keeping permanent retention on anchor hub nodes (accounts, regions, top-level services).',
        mentalHook: 'Downsample the leaf snapshots; keep the structural hubs forever.',
      },
      {
        id: 'agrg-ch08-fc5',
        category: 'optimization',
        front: 'Why are graph analytics like PageRank and Louvain community detection 80x–485x faster on GPUs (cuGraph) than on CPUs?',
        back: 'Graph traversals chase irregular memory pointers with poor spatial locality, making them bound by memory bandwidth where GPUs vastly outperform sequential-cache CPUs.',
        mentalHook: 'Pointer chasing starves CPU caches; high-bandwidth GPU memory feeds parallel graph waves.',
      },
      {
        id: 'agrg-ch08-fc6',
        category: 'optimization',
        front: 'How does Microsoft’s Memento (2026) reduce peak GPU KV-cache memory by 2x to 2.5x during long agentic reasoning traces?',
        back: 'It fine-tunes the model to segment its chain of thought into blocks, emit a compressed summary token ("memento") per block, and mask the raw block tokens into a sawtooth KV profile.',
        mentalHook: 'Summarize the thought block, mask the raw tokens, and turn linear KV growth into a bounded sawtooth.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'agrg-ch08-feyn-1',
        conceptTitle: 'Selective Intelligence, Multi-LoRA Serving, and Cost Per Successful Completion',
        prompt:
          'Explain to an engineering director why powering every node of an agentic workflow with a frontier model is an architectural anti-pattern, and detail how selective intelligence, asymmetric per-node evaluation, and vLLM multi-LoRA serving cut costs by 80% while often improving accuracy.',
        rubricChecklist: [
          'Distinguishes the 80–90% of routine workflow nodes (classification, extraction, routing) from the 10–20% requiring open-ended synthesis or novel causal attribution.',
          'Explains why specialized SLMs (e.g., 3.8B Triplex at 1/60th cost, Kakao 27–32B jumping from 0.578 to 0.890 accuracy) outperform general frontier models on bounded schemas.',
          'Defines Cost per Successful Completion and asymmetric failure weights (penalizing P1-as-P3 misses 10x heavier than false escalations) to calibrate static and cascade routers.',
          'Describes how vLLM multi-LoRA shares one base model in GPU VRAM and hot-swaps small rank-16 delta matrices at 50–80ms TTFT.',
        ],
        modelExplanation:
          'In a horizontal workflow graph, only 10–20% of invocations require frontier-level synthesis or novel causal reasoning; the other 80–90% are bounded tasks like alert severity classification or log triple extraction. Routing everything to a frontier model wastes 10–60x per token and often degrades format adherence because the frontier model’s training signal is diluted across general tasks. Selective intelligence assigns fine-tuned 3B LoRA adapters (sharing a single base model in GPU memory via vLLM with 50–80ms TTFT) to classification and parsing nodes, an 8B model to structured dependency traversal, and an 8B-to-frontier confidence cascade (escalating only the 30% of ambiguous cases below 0.70 confidence) to causal attribution. By governing each node with Cost per Successful Completion and asymmetric failure weights (such as a 10x penalty for misclassifying a P1 outage as P3), the pipeline cuts per-event cost by 80% ($0.002 vs. $0.010) with zero loss in reliability.',
      },
      {
        id: 'agrg-ch08-feyn-2',
        conceptTitle: 'Overcoming the Dual Hardware Bottlenecks: GPU Graph Analytics and Sawtooth KV Compression',
        prompt:
          'Explain why scaling a GraphRAG agent to thousands of nodes and hundreds of concurrent users hits both a CPU wall and a GPU VRAM wall, and walk through the exact architectural mechanics of the nx-cugraph 3-phase round-trip and Memento KV-cache compression.',
        rubricChecklist: [
          'Identifies memory bandwidth—not FLOPs—as the bottleneck for pointer-chasing graph centrality algorithms (PageRank, Louvain, betweenness) on CPUs.',
          'Details the 3-phase GPU round-trip (since Cypher engines are CPU-bound): extract subgraph edges, run nx-cugraph PageRank on warm GPU memory (<100ms), and write criticality_score back onto Neo4j nodes.',
          'Identifies Peak KV Cache per active user (not model weight size) as the binding GPU concurrency constraint during 50,000-token causal reasoning traces.',
          'Explains how Memento segments chain-of-thought traces into blocks, emits a summary token, and masks prior tokens into a sawtooth KV profile (5–20x block compression, 2x–2.5x peak KV reduction).',
        ],
        modelExplanation:
          'At production scale, GraphRAG systems hit two distinct memory bottlenecks. First, graph algorithms like PageRank and community detection chase irregular pointers across millions of edges with no cache locality, stalling on CPU memory bandwidth; yet graph databases still execute Cypher on CPUs. The production fix is a three-phase GPU round-trip: extract the dependency edges, compute PageRank on high-bandwidth GPU memory via nx-cugraph (shrinking latency from 3–5 seconds to under 100ms), and write criticality_score back onto Neo4j nodes so standard Cypher queries can filter the top 20% critical services directly. Second, during multi-step causal attribution, generating 50,000-token reasoning traces fills an 80 GB GPU’s KV cache, capping concurrent users even when weights are shared via multi-LoRA. Microsoft’s Memento resolves this by training the model to segment its chain of thought into blocks, emit a compressed memento summary token per block, and mask the raw block tokens from future attention—producing a sawtooth KV-cache curve that cuts peak VRAM per user by 2.5x and multiplies GPU concurrency accordingly.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'agrg-ch08-n1',
        label: 'Selective Intelligence & Routing Cascades',
        category: 'optimization',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Matching each workflow node to the smallest specialist model that satisfies its asymmetric quality threshold using static assignment, FrugalGPT confidence cascades, or RouteLLM/MixLLM learned routers.',
        formulaOrRule: 'C_success = sum(cost_i) / max(sum(success_i), 1); Escalate when conf < 0.70',
        whyItMatters:
          'Reduces end-to-end multi-node pipeline inference spend by ~80% while improving format adherence on structured tasks.',
      },
      {
        id: 'agrg-ch08-n2',
        label: 'Subgraph RBAC & Security Transparency',
        category: 'security',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Persona-bound Neo4j GRANT/DENY TRAVERSE and READ privileges where unauthorized nodes and properties are rendered invisible rather than returning access-denied errors.',
        formulaOrRule: 'GRANT TRAVERSE / DENY READ per persona role; 0 permission-error leakage',
        whyItMatters:
          'Prevents autonomous agents from traversing across domain security boundaries or inferring sensitive topology via probing.',
      },
      {
        id: 'agrg-ch08-n3',
        label: 'Privacy-by-Architecture & KG.GOV',
        category: 'security',
        chapterNumber: 8,
        importance: 2,
        definition:
          'Decoupling all PII into an external relational Identity Store joined only by UUIDs in the graph while stamping role, model version, and PII access metadata onto execution graph nodes.',
        formulaOrRule: 'GDPR Art. 17: Soft-delete SQL UUID mapping (real-time) or DETACH DELETE UUID node',
        whyItMatters:
          'Honors GDPR erasure requests in milliseconds without cascading graph deletions and turns the execution graph into a queryable compliance ledger.',
      },
      {
        id: 'agrg-ch08-n4',
        label: 'Bitemporal Lifecycle & LightRAG Incremental Merge',
        category: 'data',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Maintaining graph freshness and history via Cypher MERGE upserts, Graphiti bitemporal edge invalidation (t_valid, t_invalid), and tiered snapshot TTL downsampling.',
        formulaOrRule: 'Set old.t_invalid = datetime(); retain 5m snapshots 7d -> hourly -> daily; keep hubs',
        whyItMatters:
          'Reflects live deployments within seconds without full graph rebuilds while preserving pre-incident topology for causal reasoning.',
      },
      {
        id: 'agrg-ch08-n5',
        label: 'Four-Phase Staged Graph Rollout',
        category: 'architecture',
        chapterNumber: 8,
        importance: 2,
        definition:
          'A coordinated deployment protocol sequencing N-1 compatible schema migrations, data backfills, canary agent code rollouts, and 7-day delayed schema cleanup.',
        formulaOrRule: 'Schema (N-1) -> Backfill -> Agent Code Canary (5%, 2h) -> Cleanup (+7d)',
        whyItMatters:
          'Prevents version skew where agent prompts query non-existent edges or migrations break currently running code.',
      },
      {
        id: 'agrg-ch08-n6',
        label: 'GPU Graph Analytics & Memento KV Compression',
        category: 'optimization',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Combining 3-phase nx-cugraph GPU PageRank write-backs and vLLM multi-LoRA serving with Memento sawtooth chain-of-thought block KV-cache compression.',
        formulaOrRule: 'PageRank < 100ms on GPU; Memento compresses blocks 5-20x -> 2.5x lower Peak KV',
        whyItMatters:
          'Eliminates both CPU pointer-chasing latency on large graphs and GPU KV-cache VRAM bottlenecks on concurrent reasoning traces.',
      },
    ],
    edges: [
      {
        source: 'agrg-ch08-n1',
        target: 'agrg-ch08-n6',
        relationship: 'optimizes',
        explanation:
          'Selective intelligence specialist SLMs are co-located on shared GPUs via vLLM multi-LoRA while Memento compresses the KV cache of escalated reasoning traces.',
      },
      {
        source: 'agrg-ch08-n2',
        target: 'agrg-ch08-n3',
        relationship: 'part_of',
        explanation:
          'Subgraph RBAC persona roles and UUID PII decoupling work together with KG.GOV execution nodes to form the complete enterprise governance layer.',
      },
      {
        source: 'agrg-ch08-n4',
        target: 'agrg-ch08-n5',
        relationship: 'prerequisite_for',
        explanation:
          'Bitemporal edges and Neo4j-Migrations provide the N-1 compatible schema primitives orchestrated by the Four-Phase Staged Graph Rollout.',
      },
      {
        source: 'agrg-ch08-n4',
        target: 'agrg-ch08-n6',
        relationship: 'prerequisite_for',
        explanation:
          'Incremental LightRAG updates trigger the 3-phase nx-cugraph GPU PageRank round-trip to refresh criticality_score properties on Service nodes.',
      },
      {
        source: 'agrg-ch08-n1',
        target: 'agrg-ch08-n3',
        relationship: 'prerequisite_for',
        explanation:
          'Because selective intelligence routes tasks across multiple models, KG.GOV must record exact model_id and model_version per node for compliance audits.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 22,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 8 including Selective Intelligence (Triplex 3.8B, Kakao 27-32B, static/FrugalGPT cascade/RouteLLM/MixLLM), CostTracker and asymmetric failure weights, Neo4j RBAC security transparency, Rehmer Privacy-by-Architecture UUID store, KG.GOV compliance metadata, Neo4j-Migrations + Nautilus/Geo-X, CrowdStrike TTL + Fischer downsampling + Graphiti bitemporal invalidation, LightRAG incremental MERGE, 4-phase staged rollout, cuGraph/nx-cugraph 3-phase round-trip, vLLM multi-LoRA + TensorRT-LLM + Cerebras/SambaNova, Memento sawtooth KV compression, DevOps end-to-end 8-pillar pipeline, and ContextGraphs.',
  },
};
