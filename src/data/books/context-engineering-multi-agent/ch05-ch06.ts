import { ChapterMastery } from '../../../types/book';

export const cemaCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Hardening the Context Engine',
  subtitle: 'Dependency Injection, Structured Observability, Inter-Agent Data Contracts, and Modular Library Architecture',
  readingTimeMinutes: 8,
  sourceWordCount: 9519,
  executiveThesis:
    'A single-notebook multi-agent prototype fails in production because implicit global state, raw string outputs, and unstructured console prints collapse under concurrent execution or schema drift. Hardening the Context Engine requires three structural transformations: injecting clients and model parameters explicitly into every function signature, enforcing dictionary-keyed MCP data contracts between specialist agents, and decomposing monolithic notebook cells into isolated Python modules (`helpers.py`, `agents.py`, `registry.py`, and `engine.py`) governed by a clean control deck.',
  paradigmShift: {
    oldWay:
      'Monolithic notebook scripts where helper functions and agents read global API clients, print ephemeral debug strings to stdout, and pass unvalidated raw text between steps.',
    newWay:
      'A modular, dependency-injected multi-agent library where an AgentRegistry binds runtime credentials via closures, agents exchange strictly keyed MCP dictionaries, and an ExecutionTrace flight recorder logs every state transition.',
    whyItChanged:
      'Moving code out of a single notebook exposes module namespace isolation (`NameError` on global references) and schema mismatches between upstream producers and downstream consumers.',
  },
  mentalModels: [
    {
      id: 'cema-ch05-mm1',
      name: 'Lambda Closure Dependency Binding',
      tagline: 'Bind infrastructure credentials at dispatch time rather than polluting agent signatures or global state',
      naiveIntuition:
        'Either store `client`, `index`, and `generation_model` as global variables accessible everywhere, or force the orchestrator loop to know the exact parameter list of every specialist agent.',
      firstPrinciplesReality:
        'Different specialists require different infrastructure subsets: the Librarian needs Pinecone and an embedding model, the Writer needs only an LLM client and generation model, and the Researcher needs both. `AgentRegistry.get_handler()` accepts the full runtime configuration once and returns a uniform `lambda mcp_message: ...` closure with only that agent’s required dependencies pre-bound.',
      howToApply:
        'Centralize dependency wiring inside the registry factory method so the Executor loop can invoke any retrieved handler with a single `handler(mcp_message)` call.',
    },
    {
      id: 'cema-ch05-mm2',
      name: 'Bilingual Data Contracts',
      tagline: 'Producers emit strict dictionary schemas while consumers defensively unpack both structured and legacy payloads',
      naiveIntuition:
        'If the Librarian retrieves a JSON blueprint or the Researcher synthesizes facts, returning the raw string inside the MCP message is sufficient for downstream steps.',
      firstPrinciplesReality:
        'Raw string payloads break context chaining when downstream agents cannot distinguish a style blueprint from factual research or prior draft text. Wrapping outputs in explicit dictionary keys (`{"blueprint_json": ...}` and `{"facts": ...}`) while upgrading `agent_writer` to inspect `isinstance(data, dict)` establishes a resilient inter-agent contract.',
      howToApply:
        'Require every specialist agent to return a keyed dictionary payload in its MCP envelope and write consumer unpacking logic that handles both keyed dicts and raw fallback strings.',
    },
    {
      id: 'cema-ch05-mm3',
      name: 'Log-and-Reraise Circuit Breaking',
      tagline: 'Capture granular failure diagnostics at the helper boundary while propagating exceptions to halt the orchestrator',
      naiveIntuition:
        'When an OpenAI or Pinecone API call fails inside a helper function, catch the exception and return `None` or an empty string so the program does not crash.',
      firstPrinciplesReality:
        'Swallowing API exceptions in step 1 causes silent context corruption in steps 2 and 3 as downstream agents generate hallucinations from empty placeholders. Hardened helpers combine `@retry` exponential backoff for transient errors with `logging.error(...)` followed by `raise e` to abort the orchestrator cleanly.',
      howToApply:
        'Wrap external API calls in tenacity retry decorators, log the exact `APIError` context at the helper level, and re-raise the exception so `context_engine` halts the broken plan immediately.',
    },
  ],
  customDiagrams: [
    {
      id: 'cema-ch05-svg1',
      title: 'The Four-Phase Hardened Context Engine Lifecycle',
      subtitle: 'Tracing a user goal across Control Deck, Engine Core, Agent Registry, Specialists, and Hardened Helpers',
      bierutCaption:
        'Color-coded architectural layers isolate orchestration (White), tool discovery and dependency binding (Purple), domain execution (Green), and retried external I/O (Orange).',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="cema5-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
    </marker>
    <marker id="cema5-arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0ea5e9" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="#0f172a" />

  <!-- Title Bar -->
  <text x="24" y="30" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">HARDENED CONTEXT ENGINE: 4-PHASE EXECUTION TOPOLOGY</text>
  <text x="24" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Initiation (Blue) → Planning (White/Purple) → Execution Loop (Green/Orange) → Finalization</text>

  <!-- Phase 1: Control Deck (Blue) -->
  <rect x="24" y="68" width="150" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="24" y="68" width="150" height="28" rx="8" fill="#0284c7" />
  <text x="99" y="86" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">1. CONTROL DECK (7.x)</text>

  <rect x="36" y="112" width="126" height="54" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="99" y="132" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10" font-weight="600">execute_and_display()</text>
  <text x="99" y="148" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">Injects goal, config,</text>
  <text x="99" y="160" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">client, and pc</text>

  <rect x="36" y="186" width="126" height="50" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="99" y="206" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="10">utils.py</text>
  <text x="99" y="222" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9">initialize_clients()</text>

  <rect x="36" y="318" width="126" height="62" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="99" y="338" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10" font-weight="600">7.1 / 7.2 Output</text>
  <text x="99" y="354" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">Markdown Result +</text>
  <text x="99" y="366" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">pprint(trace.steps)</text>

  <!-- Phase 2 & 3: Engine Core (White) -->
  <rect x="198" y="68" width="210" height="328" rx="8" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
  <rect x="198" y="68" width="210" height="28" rx="8" fill="#475569" />
  <text x="303" y="86" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">2. ENGINE CORE (engine.py)</text>

  <rect x="212" y="112" width="182" height="46" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1" />
  <text x="303" y="131" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="10" font-weight="600">6.1 ExecutionTrace()</text>
  <text x="303" y="147" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">Flight recorder: log_plan / log_step</text>

  <rect x="212" y="172" width="182" height="52" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1" />
  <text x="303" y="191" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="10" font-weight="600">6.2 planner(goal, caps)</text>
  <text x="303" y="207" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">Synthesizes multi-step JSON plan</text>

  <rect x="212" y="238" width="182" height="64" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="303" y="257" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10" font-weight="600">6.3a resolve_dependencies()</text>
  <text x="303" y="273" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">Replaces $$STEP_N_OUTPUT$$</text>
  <text x="303" y="287" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">from state dictionary</text>

  <rect x="212" y="318" width="182" height="62" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1" />
  <text x="303" y="338" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="10" font-weight="600">6.1d trace.finalize()</text>
  <text x="303" y="354" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">Records status &amp; total duration</text>
  <text x="303" y="368" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">Returns (result, trace)</text>

  <!-- Agent Registry (Purple) -->
  <rect x="432" y="68" width="166" height="156" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <rect x="432" y="68" width="166" height="28" rx="8" fill="#7e22ce" />
  <text x="515" y="86" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">3. REGISTRY (registry.py)</text>

  <rect x="444" y="108" width="142" height="46" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1" />
  <text x="515" y="126" text-anchor="middle" fill="#d8b4fe" font-family="monospace" font-size="9.5" font-weight="600">5.3 get_capabilities</text>
  <text x="515" y="142" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Tool manual for Planner</text>

  <rect x="444" y="164" width="142" height="48" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1" />
  <text x="515" y="182" text-anchor="middle" fill="#d8b4fe" font-family="monospace" font-size="9.5" font-weight="600">5.2 get_handler()</text>
  <text x="515" y="198" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Lambda DI closure factory</text>

  <!-- Specialist Agents (Green) -->
  <rect x="432" y="238" width="166" height="158" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5" />
  <rect x="432" y="238" width="166" height="28" rx="8" fill="#15803d" />
  <text x="515" y="256" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">4. AGENTS (agents.py)</text>

  <rect x="444" y="276" width="142" height="32" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1" />
  <text x="515" y="296" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9.5">Librarian → {"blueprint_json"}</text>

  <rect x="444" y="314" width="142" height="32" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1" />
  <text x="515" y="334" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9.5">Researcher → {"facts"}</text>

  <rect x="444" y="352" width="142" height="32" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1" />
  <text x="515" y="372" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9.5">Writer → Unpacks dicts</text>

  <!-- Hardened Helpers (Orange) -->
  <rect x="622" y="68" width="154" height="328" rx="8" fill="#1e293b" stroke="#f97316" stroke-width="1.5" />
  <rect x="622" y="68" width="154" height="28" rx="8" fill="#c2410c" />
  <text x="699" y="86" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">5. HELPERS (helpers.py)</text>

  <rect x="634" y="114" width="130" height="66" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1" />
  <text x="699" y="134" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="9.5" font-weight="600">3.1 call_llm_robust()</text>
  <text x="699" y="150" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">@retry(1..60s, 6x)</text>
  <text x="699" y="164" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Injected client &amp; model</text>

  <rect x="634" y="196" width="130" height="62" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1" />
  <text x="699" y="216" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="9.5" font-weight="600">3.4 query_pinecone()</text>
  <text x="699" y="232" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">+ 3.2 get_embedding()</text>
  <text x="699" y="246" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Injected index &amp; namespace</text>

  <rect x="634" y="274" width="130" height="54" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1" />
  <text x="699" y="294" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="9.5" font-weight="600">count_tokens()</text>
  <text x="699" y="310" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">tiktoken fuel gauge</text>

  <rect x="634" y="342" width="130" height="40" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1" />
  <text x="699" y="360" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="9.5">create_mcp_message()</text>
  <text x="699" y="373" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="8.5">Standardized envelope</text>

  <!-- Animated Flow Connectors -->
  <path d="M 162 138 L 210 138" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema5-arrow-active)" />
  <path d="M 394 185 L 442 135" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-arrow)" />
  <path d="M 394 265 L 442 192" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema5-arrow-active)" />
  <path d="M 515 212 L 515 274" stroke="#22c55e" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema5-arrow)" />
  <path d="M 586 292 L 632 225" stroke="#f97316" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-arrow)" />
  <path d="M 586 368 L 632 155" stroke="#f97316" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-arrow)" />
  <path d="M 212 348 L 164 348" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema5-arrow-active)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Control Deck & Entry Point (Blue → White)',
          explanation:
            '`execute_and_display()` passes the user goal, `config` dictionary, and initialized OpenAI/Pinecone clients into `context_engine()`, separating presentation from orchestration.',
        },
        {
          step: '2',
          label: 'Dual-Role Agent Registry (Purple)',
          explanation:
            'Serves a descriptive manual (`get_capabilities_description`) to the Planner during Phase 2 and returns dependency-injected lambda handlers (`get_handler`) to the Executor during Phase 3.',
        },
        {
          step: '3',
          label: 'Keyed Contract Chaining & Hardened I/O (Green → Orange)',
          explanation:
            'Specialists emit structured MCP dictionaries (`blueprint_json`, `facts`) resolved via `resolve_dependencies()` while delegating external API calls to retried, dependency-injected helpers.',
        },
      ],
    },
    {
      id: 'cema-ch05-svg2',
      title: 'Monolithic Notebook vs. Modular Library Dependency Graph',
      subtitle: 'Eliminating global namespace coupling and raw-string contract failures across isolated Python modules',
      bierutCaption:
        'Splitting a notebook into standalone `.py` modules forces explicit import edges and exposes fragile string assumptions at inter-agent boundaries.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="cema5-mod-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="cema5-err-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="#0f172a" />

  <!-- Left Panel: Prototype Anti-Pattern -->
  <rect x="24" y="24" width="356" height="372" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <rect x="24" y="24" width="356" height="32" rx="10" fill="#991b1b" />
  <text x="202" y="45" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700">PROTOTYPE: SHARED GLOBAL NOTEBOOK SCOPE</text>

  <rect x="48" y="74" width="308" height="58" rx="6" fill="#0f172a" stroke="#ef4444" stroke-dasharray="4 3" />
  <text x="202" y="96" text-anchor="middle" fill="#fca5a5" font-family="monospace" font-size="10.5" font-weight="600">Global Ambient State</text>
  <text x="202" y="114" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="9.5">client, index, GENERATION_MODEL, print()</text>

  <rect x="48" y="156" width="144" height="76" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="120" y="178" text-anchor="middle" fill="#e2e8f0" font-family="monospace" font-size="10">AgentRegistry</text>
  <text x="120" y="196" text-anchor="middle" fill="#ef4444" font-family="monospace" font-size="9">"Librarian":</text>
  <text x="120" y="210" text-anchor="middle" fill="#ef4444" font-family="monospace" font-size="9">agent_librarian</text>
  <text x="120" y="224" text-anchor="middle" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="8.5">(Unprefixed NameError!)</text>

  <rect x="212" y="156" width="144" height="76" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="284" y="178" text-anchor="middle" fill="#e2e8f0" font-family="monospace" font-size="10">Librarian / Researcher</text>
  <text x="284" y="198" text-anchor="middle" fill="#ef4444" font-family="monospace" font-size="9">return raw_string</text>
  <text x="284" y="216" text-anchor="middle" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="8.5">(No dictionary contract!)</text>

  <rect x="48" y="262" width="308" height="110" rx="6" fill="#450a0a" stroke="#ef4444" />
  <text x="202" y="286" text-anchor="middle" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="11" font-weight="700">2 Critical Failure Modes on Migration</text>
  <text x="202" y="308" text-anchor="middle" fill="#fecaca" font-family="monospace" font-size="9.5">1. NameError: 'agent_context_librarian' undefined</text>
  <text x="202" y="328" text-anchor="middle" fill="#fecaca" font-family="monospace" font-size="9.5">2. Writer receives dict {'blueprint_json': ...}</text>
  <text x="202" y="346" text-anchor="middle" fill="#fecaca" font-family="monospace" font-size="9.5">   when expecting raw str → TypeError / Crash</text>

  <path d="M 202 132 L 120 154" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#cema5-err-arrow)" />
  <path d="M 202 132 L 284 154" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#cema5-err-arrow)" />

  <!-- Right Panel: Hardened Modular Architecture -->
  <rect x="412" y="24" width="364" height="372" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <rect x="412" y="24" width="364" height="32" rx="10" fill="#065f46" />
  <text x="594" y="45" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700">PRE-PRODUCTION: ISOLATED MODULE DAG (commons/)</text>

  <rect x="434" y="72" width="148" height="68" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="508" y="92" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">utils.py</text>
  <text x="508" y="110" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9">install_dependencies()</text>
  <text x="508" y="124" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9">initialize_clients()</text>

  <rect x="606" y="72" width="148" height="68" rx="6" fill="#0f172a" stroke="#f97316" />
  <text x="680" y="92" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="10.5" font-weight="700">helpers.py</text>
  <text x="680" y="110" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9">call_llm_robust(client..)</text>
  <text x="680" y="124" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9">query_pinecone(index..)</text>

  <rect x="434" y="172" width="148" height="82" rx="6" fill="#0f172a" stroke="#a855f7" />
  <text x="508" y="192" text-anchor="middle" fill="#d8b4fe" font-family="monospace" font-size="10.5" font-weight="700">registry.py</text>
  <text x="508" y="208" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9">import agents</text>
  <text x="508" y="224" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">agents.agent_writer</text>
  <text x="508" y="240" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">get_handler() lambdas</text>

  <rect x="606" y="172" width="148" height="82" rx="6" fill="#0f172a" stroke="#22c55e" />
  <text x="680" y="192" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="10.5" font-weight="700">agents.py</text>
  <text x="680" y="208" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="9">from helpers import *</text>
  <text x="680" y="224" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">{"blueprint_json": ...}</text>
  <text x="680" y="240" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">{"facts": ...} + isinstance</text>

  <rect x="434" y="288" width="320" height="84" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="310" text-anchor="middle" fill="#6ee7b7" font-family="monospace" font-size="11" font-weight="700">engine.py → Pre-Production Control Deck</text>
  <text x="594" y="330" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9.5">from helpers import call_llm_robust, create_mcp_message</text>
  <text x="594" y="346" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9.5">from registry import AGENT_TOOLKIT</text>
  <text x="594" y="362" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9">100% Decoupled ExecutionTrace + planner + context_engine</text>

  <path d="M 680 172 L 680 142" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-mod-arrow)" />
  <path d="M 582 212 L 604 212" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-mod-arrow)" />
  <path d="M 508 288 L 508 256" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-mod-arrow)" />
  <path d="M 640 288 L 665 142" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cema5-mod-arrow)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Explicit Module Namespace Resolution',
          explanation:
            'Because every Python file is an isolated namespace, `registry.py` explicitly imports `agents` and prefixes handler references (`agents.agent_context_librarian`), preventing `NameError` exceptions.',
        },
        {
          step: '2',
          label: 'Centralized Environment Provisioning (`utils.py`)',
          explanation:
            '`install_dependencies()` pins library versions and `initialize_clients()` retrieves API keys from secrets once, returning initialized client objects to the notebook control deck.',
        },
        {
          step: '3',
          label: 'Defensive Unpacking in `agents.py`',
          explanation:
            '`agent_writer` inspects `isinstance(blueprint_data, dict)` and `isinstance(facts_data, dict)` to extract `"blueprint_json"` and `"facts"` cleanly without breaking on raw string fallbacks.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'cema-ch05-s1',
      sectionNumber: '5.1',
      title: 'The Four-Phase Orchestration Architecture',
      subtitle: 'Tracing task execution across Initiation, Planning, the Execution Loop, and Finalization',
      coreMechanism:
        'The upgraded Context Engine organizes multi-agent problem solving into five color-coded responsibility layers that execute across four deterministic phases. In Phase 1 (Initiation), the user script logs task startup and invokes `context_engine()`, handing orchestration control to the engine core. In Phase 2 (Planning), the engine instantiates an `ExecutionTrace` flight recorder, queries `AgentRegistry.get_capabilities_description()` for a plain-text manual of registered specialists, and calls `planner()` via `call_llm_robust()` in JSON mode to generate a multi-step strategy.\n\nIn Phase 3 (Execution Loop), the Executor iterates sequentially through each planned step. For every step, it fetches a pre-configured callable via `AgentRegistry.get_handler()`, runs `resolve_dependencies()` to substitute state placeholders such as `$$STEP_1_OUTPUT$$` with actual upstream outputs stored in the engine `state` dictionary, invokes the specialist agent, and records the inputs and outputs via `ExecutionTrace.log_step()`. In Phase 4 (Finalization), `ExecutionTrace.finalize()` records total duration and status before returning both the final output and the full trace object to the presentation layer.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Initialize Flight Recorder & Query Registry Manual',
          detail:
            '`context_engine()` creates an `ExecutionTrace` instance and pulls the formatted agent capability specifications from `AGENT_TOOLKIT.get_capabilities_description()`.',
        },
        {
          step: '2',
          title: 'Synthesize & Log Multi-Step JSON Plan',
          detail:
            '`planner()` sends the user goal and capability manual to `call_llm_robust(..., json_mode=True)` and persists the returned step array via `trace.log_plan()`.',
        },
        {
          step: '3',
          title: 'Resolve State Placeholders & Dispatch Handlers',
          detail:
            'For each step, `resolve_dependencies()` replaces `$$STEP_X_OUTPUT$$` references with stored state objects, executes the registry lambda handler, and logs the step outcome.',
        },
      ],
      keyTakeaways: [
        'The Agent Registry serves two distinct masters: it provides a plain-text capability manual to the Planner for reasoning and callable function handlers to the Executor for action.',
        'Context chaining happens inside `resolve_dependencies()`, which dynamically injects prior step outputs from the orchestrator state dictionary into downstream agent input payloads.',
        'Separating `ExecutionTrace` recording from notebook display logic ensures full observability whether the engine runs in an interactive notebook or a headless backend service.',
      ],
      commonPitfalls: [
        'Allowing the Planner to invoke specialist agents directly during Phase 2 instead of emitting a declarative JSON plan that the Executor can validate and trace.',
        'Coupling `display(Markdown(...))` presentation calls inside `engine.py`, which breaks headless deployment and mixes UI rendering with core orchestration.',
      ],
      figures: [
        {
          file: 'B36602_5_1.png',
          originalLabel: 'Figure 5.1: The upgraded Context Engine flowchart',
          bierutTitle: 'Isolate Orchestration, Tool Discovery, Domain Work, and External I/O into Five Explicit Layers',
          editorialAnalysis:
            'Figure 5.1 maps the end-to-end execution lifecycle across five functional tiers: User Execution Script (Section 7, Blue), Engine Core (Section 6, White), Agent Registry (Section 5, Purple), Specialist Agents (Section 4, Green), and Shared Helpers (Section 3, Orange). By routing all LLM and Pinecone interactions through the Orange helper layer and all agent lookups through the Purple registry, the White orchestrator remains completely agnostic to domain-specific implementation details.',
          keyTakeaways: [
            'Every external network call (OpenAI completions, embeddings, Pinecone vector queries) is centralized in Section 3 helpers.',
            'ExecutionTrace hooks (`6.1a` through `6.1d`) bracket every phase of the workflow to guarantee an auditable trail.',
          ],
        },
      ],
    },
    {
      id: 'cema-ch05-s2',
      sectionNumber: '5.2',
      title: 'Dependency Injection & Hardened Communication Helpers',
      subtitle: 'Eliminating ambient global state, instrumenting structured logs, and enforcing exponential backoff',
      coreMechanism:
        'Prototype notebooks rely on ambient global variables (`client`, `index`, `GENERATION_MODEL`) and `print()` statements, which prevent concurrent multi-tenant execution and hide transient network failures. Refactoring begins by extracting environment bootstrap logic into `utils.py` via `install_dependencies()` for deterministic package pinning and `initialize_clients()` for secret retrieval. Next, all helper utilities in `helpers.py`—`call_llm_robust()`, `get_embedding()`, `query_pinecone()`, and `count_tokens()`—are refactored to require explicit dependency injection through their function signatures.\n\nEach external I/O helper is fortified with Python’s structured `logging` module (`%(asctime)s - %(levelname)s - %(message)s`) and wrapped in `@retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6))`. When an `APIError` or unexpected exception persists past the retry budget, the helper logs the exact failure context and explicitly executes `raise e` to propagate the fault to `context_engine()`, halting the execution plan before corrupted context can cascade downstream.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Centralize Setup in `utils.py`',
          detail:
            'Encapsulate package installation and secret-backed OpenAI/Pinecone client initialization into `install_dependencies()` and `initialize_clients()`.',
        },
        {
          step: '2',
          title: 'Inject Clients & Models into Helper Signatures',
          detail:
            'Pass `client`, `index`, `generation_model`, and `embedding_model` explicitly into `call_llm_robust`, `get_embedding`, and `query_pinecone`.',
        },
        {
          step: '3',
          title: 'Instrument Token Metering & Log-and-Reraise Retries',
          detail:
            'Add `count_tokens()` with a `tiktoken` `cl100k_base` fallback for proactive context sizing, and wrap API calls in exponential backoff with explicit exception re-raising.',
        },
      ],
      formulas: [
        {
          name: 'Truncated Exponential Backoff with Random Jitter',
          expression: 't_k = \\min\\left(t_{\\max},\\; \\text{Uniform}(t_{\\min},\\; t_{\\min} \\cdot 2^k)\\right), \\quad k \\in \\{1, \\dots, N_{\\max}\\}',
          intuition:
            'Spaces out repeated LLM or embedding API retries exponentially with random jitter so concurrent agent workers do not synchronize into thundering-herd rate-limit collisions.',
          variables: [
            { symbol: 't_k', meaning: 'Wait duration in seconds before retry attempt k' },
            { symbol: 't_{\\min}, t_{\\max}', meaning: 'Minimum (1s) and maximum (60s) backoff bounds configured in @retry' },
            { symbol: 'N_{\\max}', meaning: 'Maximum retry attempts (6) before logging APIError and raising to halt the plan' },
          ],
          workedExample:
            'In `call_llm_robust`, setting `min=1, max=60` and `stop_after_attempt(6)` bounds each retry delay between 1 and 60 seconds across up to 6 attempts before raising `APIError` to abort the orchestrator.',
        },
      ],
      keyTakeaways: [
        'Dependency injection turns every helper and agent into a pure, self-contained unit that can be tested or run concurrently with different LLM providers and vector namespaces.',
        'Catching an `APIError` to log diagnostic details and immediately re-raising it (`raise e`) gives operators full visibility while preventing the orchestrator from continuing with missing state.',
        'The `count_tokens()` helper uses `tiktoken.encoding_for_model(model)` with a `KeyError` fallback to `cl100k_base` so novel model identifiers never crash token metering.',
      ],
      commonPitfalls: [
        'Leaving `GENERATION_MODEL` or `client` as module-level globals inside `helpers.py`, which causes `NameError` or cross-request contamination when imported into external scripts.',
        'Using `print()` instead of `logging.info()` / `logging.error()`, stripping timestamps and severity levels required by automated production log aggregators.',
      ],
    },
    {
      id: 'cema-ch05-s3',
      sectionNumber: '5.3',
      title: 'Inter-Agent Data Contracts & Modular Library Refactoring',
      subtitle: 'Resolving namespace isolation (`NameError`) and schema mismatches across `agents.py`, `registry.py`, and `engine.py`',
      coreMechanism:
        'Migrating hardened components from a single notebook into standalone files (`commons/helpers.py`, `commons/agents.py`, `commons/registry.py`, and `commons/engine.py`) exposes two structural bugs that remain invisible in shared-scope prototypes. First, every Python module is an isolated namespace: moving `AgentRegistry` into `registry.py` triggers `NameError: name "agent_context_librarian" is not defined` until `registry.py` explicitly imports `agents` and prefixes every mapping (`agents.agent_context_librarian`). Second, `AgentRegistry.get_handler()` uses lambda closures to bind each specialist’s exact subset of dependencies (`namespace_context` for Librarian, `namespace_knowledge` and `generation_model` for Researcher, `generation_model` for Writer).\n\nValidation runs also expose an inter-agent data contract flaw: when the upgraded Librarian and Researcher wrap their outputs in structured dictionaries (`{"blueprint_json": blueprint_json}` and `{"facts": findings}`) instead of raw strings, the downstream Writer crashes if it passes those dictionaries directly into prompt templates. Hardening `agent_writer` to inspect `isinstance(blueprint_data, dict)` and `isinstance(facts_data, dict)` before extracting `"blueprint_json"` and `"facts"` restores end-to-end compatibility across both linear workflows and multi-stage Writer-to-Writer rewriting chains.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Enforce Keyed Dictionary Outputs in Upstream Agents',
          detail:
            'Upgrade `agent_context_librarian` to return `{"blueprint_json": ...}` (with a neutral JSON fallback on empty vector hits) and `agent_researcher` to return `{"facts": ...}`.',
        },
        {
          step: '2',
          title: 'Upgrade `agent_writer` for Defensive Schema Unpacking',
          detail:
            'Check `isinstance(blueprint_data, dict)` and `isinstance(facts_data, dict)` inside `agent_writer` so it extracts string values from keyed dicts while supporting `previous_content` rewrites.',
        },
        {
          step: '3',
          title: 'Wire Explicit Module Imports & Control Deck Execution',
          detail:
            'Connect `helpers`, `agents`, `registry`, and `engine` via explicit imports, leaving `Context_Engine_Pre_Production.ipynb` with only a `config` dict and `execute_and_display()`.',
        },
      ],
      keyTakeaways: [
        'Changing an upstream agent’s output format from a raw string to a keyed dictionary requires updating every downstream consumer that unpacks that MCP payload.',
        'Supporting both `facts` and `previous_content` in `agent_writer` enables dynamic multi-stage plans, such as chaining a first Writer’s factual summary into a second Writer applying a Hemingway style blueprint.',
        'A production notebook should act strictly as a Control Deck (`config` dictionary + `execute_and_display`), delegating all execution logic to imported library modules.',
      ],
      commonPitfalls: [
        'Using package-relative imports (`from commons import helpers`) in a flat Google Colab working directory where files are downloaded to the root level.',
        'Returning a raw string on vector search misses in `agent_researcher` (`"No data found"`) while returning `{"facts": ...}` on hits, breaking contract uniformity.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Multi-Agent Codebase Architecture & Dependency Management Trade-Offs',
      description:
        'Comparing monolithic prototype notebooks, partially refactored global modules, and dependency-injected modular libraries across production engineering dimensions.',
      headers: [
        'Architectural Pattern',
        'Dependency Wiring',
        'Inter-Agent Payload Contract',
        'Observability & Error Handling',
        'Multi-Step Extensibility',
      ],
      rows: [
        [
          'Monolithic Prototype Notebook (Ch 4)',
          'Implicit ambient globals (`client`, `GENERATION_MODEL`)',
          'Unvalidated raw strings in MCP content',
          'Ephemeral `print()` statements; unretried calls',
          'Low; copy-pasting cells across notebooks causes drift',
        ],
        [
          'Naive File Split (Unprefixed Modules)',
          'Broken global lookups (`NameError` across `.py` files)',
          'Mixed raw strings and ad-hoc dicts causing `TypeError`',
          'Partial logging without exception re-raising',
          'Brittle; adding agents breaks `registry.py` scope',
        ],
        [
          'Hardened Modular Library (`commons/` Ch 5)',
          'Explicit args + `AgentRegistry.get_handler()` lambda closures',
          'Keyed dicts (`blueprint_json`, `facts`) + defensive unpacking',
          'Structured `logging` + `@retry` backoff + `ExecutionTrace`',
          'High; reusable across notebooks and complex chained plans',
        ],
      ],
      verdictRule:
        'Use single-notebook globals only for initial proof-of-concept validation; before adding new specialist agents or running multi-stage workflows, migrate to explicit dependency injection (`get_handler` lambdas) and dictionary-keyed MCP contracts across standalone `.py` modules.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'cema-ch05-sc1',
      title: 'Cross-Module NameError During Notebook-to-Library Migration',
      roleAndContext:
        'Lead AI Systems Engineer extracting `AgentRegistry` and specialist agents from a working Jupyter notebook into `registry.py` and `agents.py` for pre-production deployment.',
      symptomOrFailure:
        'Importing `AGENT_TOOLKIT` from `registry.py` immediately crashes at startup with `NameError: name "agent_context_librarian" is not defined`, even though `import agents` was executed earlier in the notebook cell.',
      naiveFixAndWhyItFails:
        'Using `from agents import *` inside the main notebook cell before importing `registry`; this fails because Python modules do not share the interactive notebook’s global namespace.',
      firstPrinciplesSolution:
        'Add `import agents` directly at the top of `registry.py` and qualify every dictionary entry in `AgentRegistry.__init__` with its module namespace (`"Librarian": agents.agent_context_librarian`, `"Researcher": agents.agent_researcher`, `"Writer": agents.agent_writer`).',
      measurableOutcome:
        'Eliminates startup `NameError` exceptions across both flat Colab directories and packaged deployments, enabling clean single-line imports from `engine.py`.',
    },
    {
      id: 'cema-ch05-sc2',
      title: 'Writer Agent Crash After Hardening Upstream Specialist Outputs',
      roleAndContext:
        'Context Engineer upgrading the Librarian and Researcher agents to return structured dictionary payloads (`{"blueprint_json": ...}` and `{"facts": ...}`) inside their MCP envelopes.',
      symptomOrFailure:
        'Steps 1 (Librarian) and 2 (Researcher) succeed in the `ExecutionTrace`, but Step 3 (`agent_writer`) fails or embeds raw Python dictionary reprs when constructing the final generation prompt.',
      naiveFixAndWhyItFails:
        'Reverting Librarian and Researcher back to returning raw unkeyed strings, which sacrifices schema predictability and breaks downstream agents that need to inspect specific payload keys.',
      firstPrinciplesSolution:
        'Upgrade `agent_writer` to defensively unpack its inputs using `blueprint_data.get("blueprint_json") if isinstance(blueprint_data, dict) else blueprint_data` and `facts_data.get("facts") if isinstance(facts_data, dict) else facts_data`.',
      measurableOutcome:
        'Restores 100% execution success across both standard 3-step workflows (Apollo 11 suspense story in 148.3s) and 4-step Writer-to-Writer rewriting chains (Hemingway style rewrite in 151.3s).',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cema-ch05-q1',
        scenarioPrompt:
          'During Phase 2 (Planning) and Phase 3 (Execution Loop) of the hardened Context Engine, how does `AgentRegistry` interact differently with the Planner versus the Executor?',
        options: [
          {
            label: 'A',
            text: 'It passes callable Python functions to the Planner and plain-text JSON schemas to the Executor.',
            isCorrect: false,
            explanation:
              'The LLM-backed Planner cannot execute Python functions directly; it requires a text description of capabilities.',
          },
          {
            label: 'B',
            text: 'It provides a plain-text capability manual (`get_capabilities_description`) to the Planner for strategy synthesis, and returns dependency-injected callable lambdas (`get_handler`) to the Executor.',
            isCorrect: true,
            explanation:
              'The registry serves two roles: feeding `get_capabilities_description()` to the Planner so the LLM knows available agents and required input keys, and returning pre-bound `lambda mcp_message` handlers to the Executor.',
          },
          {
            label: 'C',
            text: 'It executes `resolve_dependencies()` during Planning and logs the `ExecutionTrace` during the Execution Loop.',
            isCorrect: false,
            explanation:
              'Both `resolve_dependencies()` and `ExecutionTrace` live in the Engine Core (`engine.py`), not in `AgentRegistry`.',
          },
          {
            label: 'D',
            text: 'It initializes the OpenAI and Pinecone clients during Planning and closes their connections during Finalization.',
            isCorrect: false,
            explanation:
              'Client initialization is handled once by `initialize_clients()` in `utils.py` before the engine is invoked.',
          },
        ],
      },
      {
        id: 'cema-ch05-q2',
        scenarioPrompt:
          'Why does `call_llm_robust()` in `helpers.py` execute `logging.error(...)` followed immediately by `raise e` inside its `except APIError as e:` block?',
        options: [
          {
            label: 'A',
            text: 'Because `raise e` automatically triggers Python’s built-in `logging` module to write the traceback to Pinecone.',
            isCorrect: false,
            explanation:
              '`raise e` propagates the exception up the call stack; it does not write logs to Pinecone.',
          },
          {
            label: 'B',
            text: 'To record the exact low-level failure in the structured log while signaling `context_engine()` to halt the multi-step plan rather than continuing with missing context.',
            isCorrect: true,
            explanation:
              'After exhausting the `@retry` attempts, logging captures diagnostic specificity at the helper boundary while re-raising prevents downstream agents from running on corrupted or empty upstream outputs.',
          },
          {
            label: 'C',
            text: 'Because `@retry` only triggers if the function catches and suppresses `APIError` on the first five attempts.',
            isCorrect: false,
            explanation:
              'The `@retry` decorator wraps the function and intercepts raised exceptions; re-raising is required for `@retry` to detect a failed attempt and eventually propagate final failure.',
          },
          {
            label: 'D',
            text: 'To convert the `APIError` into a default MCP message containing `"Generate the content neutrally."`',
            isCorrect: false,
            explanation:
              'The neutral fallback blueprint is returned by `agent_context_librarian` when Pinecone returns zero vector matches, not when `call_llm_robust` encounters an `APIError`.',
          },
        ],
      },
      {
        id: 'cema-ch05-q3',
        scenarioPrompt:
          'A user submits the goal: "First, write a factual summary of the Apollo 11 landing. Then, rewrite that summary in the minimalist style of Ernest Hemingway." How does the hardened Context Engine execute this without modifying `engine.py`?',
        options: [
          {
            label: 'A',
            text: 'The Planner dynamically chains two `Writer` steps, passing the first Writer’s output into the second Writer’s `previous_content` input alongside the Hemingway blueprint from the Librarian.',
            isCorrect: true,
            explanation:
              'Because the Planner reasons over agent input contracts (`facts` vs `previous_content`), it constructs a two-stage plan where the second Writer rewrites `$$STEP_X_OUTPUT$$` via `previous_content`.',
          },
          {
            label: 'B',
            text: 'The Executor hardcodes a `for` loop that runs `Librarian -> Researcher -> Writer` twice for every user prompt.',
            isCorrect: false,
            explanation:
              'The Executor does not follow a fixed 3-agent script; it executes whatever dynamic JSON step sequence the Planner generates.',
          },
          {
            label: 'C',
            text: 'The Researcher agent directly applies the Hemingway style blueprint during Pinecone retrieval.',
            isCorrect: false,
            explanation:
              'The Researcher only retrieves and synthesizes factual chunks from `KnowledgeStore`; stylistic blueprints live in `ContextLibrary` and are applied by the Writer.',
          },
          {
            label: 'D',
            text: 'The `utils.py` module reconfigures `generation_model` to a fine-tuned Hemingway model halfway through execution.',
            isCorrect: false,
            explanation:
              '`utils.py` only handles initial package installation and API client creation.',
          },
        ],
      },
      {
        id: 'cema-ch05-q4',
        scenarioPrompt:
          'When `count_tokens(text, model="gpt-5")` is called with a newly released model name that is not yet registered in `tiktoken.encoding_for_model()`, how does the hardened helper prevent a runtime crash?',
        options: [
          {
            label: 'A',
            text: 'It catches `KeyError` and falls back to `tiktoken.get_encoding("cl100k_base")` to return a reliable token count.',
            isCorrect: true,
            explanation:
              'Wrapping `tiktoken.encoding_for_model(model)` in `try...except KeyError` with a `cl100k_base` fallback ensures novel model identifiers never break token metering.',
          },
          {
            label: 'B',
            text: 'It divides `len(text)` by 4 and logs a `CRITICAL` error to halt the orchestrator.',
            isCorrect: false,
            explanation:
              'It uses the deterministic `cl100k_base` tokenizer fallback rather than character division or halting execution.',
          },
          {
            label: 'C',
            text: 'It queries the OpenAI `/v1/models` endpoint with `@retry` exponential backoff until the tokenizer is downloaded.',
            isCorrect: false,
            explanation:
              '`count_tokens` operates locally via `tiktoken` without making network calls.',
          },
          {
            label: 'D',
            text: 'It delegates token counting to `AgentRegistry.get_handler("Librarian")`.',
            isCorrect: false,
            explanation:
              'Token counting is a standalone utility in `helpers.py`, unrelated to the Librarian agent.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'cema-ch05-fc1',
        category: 'architecture',
        front: 'What are the five color-coded architectural layers in Figure 5.1 of the upgraded Context Engine?',
        back: 'Section 7 Blue (User Execution Script), Section 6 White (Engine Core: Orchestrator, Planner, Tracer), Section 5 Purple (Agent Registry), Section 4 Green (Specialist Agents), and Section 3 Orange (Shared Helpers).',
        mentalHook: 'Blue Deck -> White Brain -> Purple Toolkit -> Green Hands -> Orange Utilities.',
      },
      {
        id: 'cema-ch05-fc2',
        category: 'architecture',
        front: 'How does `resolve_dependencies()` enable context chaining during Phase 3 of the Context Engine?',
        back: 'It scans the current step’s planned input arguments for placeholders like `$$STEP_1_OUTPUT$$` and replaces them with the actual output objects stored in the engine’s `state` dictionary from prior steps.',
        mentalHook: 'Placeholder substitution bridges static JSON plans with live runtime outputs.',
      },
      {
        id: 'cema-ch05-fc3',
        category: 'optimization',
        front: 'How does `AgentRegistry.get_handler()` implement dependency injection without forcing the Executor to know each agent’s parameter list?',
        back: 'It accepts all runtime dependencies (`client`, `index`, models, namespaces) and returns a `lambda mcp_message: ...` closure with only the specific parameters required by the requested agent pre-bound.',
        mentalHook: 'The Registry acts as a DI closure factory: many dependencies in, uniform 1-arg handler out.',
      },
      {
        id: 'cema-ch05-fc4',
        category: 'data',
        front: 'What data contract flaw was uncovered when migrating `agent_context_librarian` and `agent_researcher` into `agents.py`, and how was it fixed?',
        back: 'They originally returned raw strings; they were upgraded to return keyed dictionaries (`{"blueprint_json": ...}` and `{"facts": ...}`), and `agent_writer` was updated with `isinstance(..., dict)` checks to unpack them.',
        mentalHook: 'Producers emit keyed dicts; consumers defensively unpack dicts or raw strings.',
      },
      {
        id: 'cema-ch05-fc5',
        category: 'architecture',
        front: 'What two functions reside in `utils.py`, and why were they extracted from the main notebook?',
        back: '`install_dependencies()` (centralized `pip` version pinning) and `initialize_clients()` (secure Colab Secret retrieval and OpenAI/Pinecone client instantiation), keeping the main notebook a clean Control Deck.',
        mentalHook: '`utils.py` = One-Click Installer + Secure Keymaster.',
      },
      {
        id: 'cema-ch05-fc6',
        category: 'evaluation',
        front: 'What four methods on `ExecutionTrace` bracket the lifecycle of a Context Engine run?',
        back: '`__init__()` (initializes flight recorder at start of Planning), `log_plan()` (records the LLM JSON plan), `log_step()` (records agent name, inputs, and output per step), and `finalize()` (records final status and total duration).',
        mentalHook: 'Init -> Log Plan -> Log Step (loop) -> Finalize.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'cema-ch05-fc-prompt1',
        conceptTitle: 'Dependency Injection via AgentRegistry Lambda Closures',
        prompt:
          'Explain why relying on global variables (`client`, `index`, `GENERATION_MODEL`) fails when transitioning a multi-agent notebook into a modular Python application, and how `AgentRegistry.get_handler()` solves the problem of different agents needing different infrastructure dependencies.',
        rubricChecklist: [
          'Explains why global variables break module isolation (`NameError`) and prevent concurrent runs with different models or clients.',
          'Identifies that specialist agents have heterogeneous dependency requirements (e.g., Librarian needs `index` and `embedding_model`; Writer only needs `client` and `generation_model`).',
          'Describes how `AgentRegistry.get_handler()` uses `lambda mcp_message: handler_func(...)` closures to bind each agent’s exact dependency subset.',
          'Notes that this allows the Executor loop in `engine.py` to call every agent uniformly with just `handler(mcp_message)`.',
        ],
        modelExplanation:
          'In a single notebook, every function can read `client` or `GENERATION_MODEL` from the shared global scope. Once you split code into `helpers.py`, `agents.py`, and `registry.py`, each file is an isolated namespace without access to notebook globals, and hardcoding globals prevents running two tasks concurrently with different LLM models. However, passing dependencies explicitly creates a new challenge: the Librarian needs a Pinecone `index` and `embedding_model`, the Writer needs only `client` and `generation_model`, and the Researcher needs both. `AgentRegistry.get_handler()` solves this by accepting the full set of runtime dependencies from the orchestrator and returning a `lambda mcp_message: ...` closure tailored to the requested agent. The Executor receives a uniform single-argument callable and invokes `handler(mcp_message)` without needing to know which infrastructure objects that specific agent uses internally.',
      },
      {
        id: 'cema-ch05-fc-prompt2',
        conceptTitle: 'Inter-Agent Data Contracts and Defensive Unpacking',
        prompt:
          'Walk through the two-part failure that occurs when you extract `agents.py` and `registry.py` from a prototype notebook and upgrade upstream agents to return structured dictionary outputs. How do you fix both the module import failure and the downstream Writer crash?',
        rubricChecklist: [
          'Diagnoses Issue 1 (`NameError` in `registry.py`) as a module isolation error where `registry.py` references unprefixed agent functions defined in `agents.py`.',
          'States the fix for Issue 1: explicitly `import agents` inside `registry.py` and prefix dictionary values (`agents.agent_context_librarian`).',
          'Diagnoses Issue 2 as a schema mismatch where Librarian returns `{"blueprint_json": ...}` and Researcher returns `{"facts": ...}`, while Writer expects raw strings.',
          'States the fix for Issue 2: use `isinstance(data, dict)` inside `agent_writer` to extract the target string key while preserving fallback compatibility with raw strings.',
        ],
        modelExplanation:
          'When you move `AgentRegistry` out of the notebook into `registry.py`, it crashes immediately with `NameError: name "agent_context_librarian" is not defined` because every Python file is an isolated island. You fix this by adding `import agents` at the top of `registry.py` and referencing `agents.agent_context_librarian`, `agents.agent_researcher`, and `agents.agent_writer`. Once imports work, a second runtime crash happens at the final step: to establish predictable schemas, the hardened Librarian wraps its output in `{"blueprint_json": ...}` and the Researcher wraps its synthesis in `{"facts": ...}`. When `resolve_dependencies()` injects those dictionaries into the Writer’s MCP input, the Writer fails because it expects raw strings. You fix this by upgrading `agent_writer` to check `isinstance(blueprint_data, dict)` and `isinstance(facts_data, dict)`, extracting `"blueprint_json"` and `"facts"` when passed a dictionary while still accepting raw strings for backward compatibility.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cema-dependency-injection',
        label: 'Explicit Dependency Injection',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Architectural pattern where external clients, vector indexes, model names, and namespaces are passed explicitly as function arguments rather than read from global scope.',
        whyItMatters:
          'Eliminates hidden coupling, prevents cross-module `NameError` crashes, and allows concurrent engine runs with different LLM configurations.',
      },
      {
        id: 'cema-agent-registry-di',
        label: 'AgentRegistry Closure Factory',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Centralized toolkit (`registry.py`) that exposes agent capability descriptions to the Planner and returns dependency-bound `lambda mcp_message` handlers via `get_handler()` to the Executor.',
        whyItMatters:
          'Decouples the orchestrator loop from the heterogeneous parameter signatures of individual specialist agents.',
      },
      {
        id: 'cema-execution-trace',
        label: 'ExecutionTrace Flight Recorder',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Stateful telemetry object (`engine.py`) that records the generated JSON plan (`log_plan`), every step’s resolved inputs and outputs (`log_step`), and total run duration (`finalize`).',
        whyItMatters:
          'Provides glass-box auditability across dynamic multi-step plans without polluting core logic with UI rendering calls.',
      },
      {
        id: 'cema-resolve-dependencies',
        label: 'State Placeholder Resolution (`resolve_dependencies`)',
        category: 'data',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Orchestrator mechanism that inspects step inputs for tokens like `$$STEP_1_OUTPUT$$` and substitutes the corresponding live output from the engine `state` dictionary.',
        whyItMatters:
          'Enables dynamic context chaining across arbitrary sequences of specialist agents determined at runtime by the Planner.',
      },
      {
        id: 'cema-keyed-data-contract',
        label: 'Keyed MCP Dictionary Contract',
        category: 'data',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Standardized inter-agent payload convention where upstream specialists emit structured dicts (`{"blueprint_json": ...}`, `{"facts": ...}`) and downstream consumers defensively unpack them via `isinstance` checks.',
        whyItMatters:
          'Prevents schema mismatch crashes when chaining outputs across heterogeneous specialist agents.',
      },
      {
        id: 'cema-hardened-helpers',
        label: 'Retried & Instrumented I/O Helpers',
        category: 'optimization',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Low-level communication utilities (`call_llm_robust`, `get_embedding`, `query_pinecone`, `count_tokens`) hardened with `@retry` exponential backoff, structured `logging`, and log-and-reraise error handling.',
        formulaOrRule: 't_k = \\min(60, \\text{Uniform}(1, 2^k)), \\; k \\le 6',
        whyItMatters:
          'Absorbs transient rate limits automatically while halting the orchestrator cleanly if an external service suffers a hard failure.',
      },
      {
        id: 'cema-control-deck-pattern',
        label: 'Control Deck & Engine Room Separation',
        category: 'architecture',
        chapterNumber: 5,
        importance: 3,
        definition:
          'Application boundary where library modules (`commons/*.py`) house all orchestration and agent logic while the notebook retains only configuration dictionaries and `execute_and_display()`.',
        whyItMatters:
          'Transforms an experimental notebook into a maintainable, reproducible pre-production codebase.',
      },
    ],
    edges: [
      {
        source: 'cema-dependency-injection',
        target: 'cema-agent-registry-di',
        relationship: 'prerequisite_for',
        explanation:
          'Explicit dependency parameters on specialist functions enable `AgentRegistry.get_handler()` to bind runtime clients and models via lambda closures.',
      },
      {
        source: 'cema-dependency-injection',
        target: 'cema-hardened-helpers',
        relationship: 'part_of',
        explanation:
          '`call_llm_robust`, `get_embedding`, and `query_pinecone` require injected `client` and model arguments to operate as self-contained utilities.',
      },
      {
        source: 'cema-resolve-dependencies',
        target: 'cema-keyed-data-contract',
        relationship: 'prerequisite_for',
        explanation:
          'Because `resolve_dependencies()` injects upstream step outputs directly into downstream agent inputs, those payloads must follow predictable keyed dictionary contracts.',
      },
      {
        source: 'cema-execution-trace',
        target: 'cema-control-deck-pattern',
        relationship: 'optimizes',
        explanation:
          'Returning a structured `ExecutionTrace` object from `context_engine()` allows `execute_and_display()` in the Control Deck to render both user Markdown and technical diagnostics cleanly.',
      },
      {
        source: 'cema-hardened-helpers',
        target: 'cema-execution-trace',
        relationship: 'evaluates',
        explanation:
          'Log-and-reraise error handling in hardened helpers signals fatal API failures up to `context_engine()`, which records the failed status in `ExecutionTrace`.',
      },
      {
        source: 'cema-agent-registry-di',
        target: 'cema-control-deck-pattern',
        relationship: 'part_of',
        explanation:
          'Isolating `registry.py` with explicit `import agents` namespace resolution is a core pillar of the modular `commons/` library structure.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 18,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 5 sections (4-phase walkthrough, Figure 5.1 color-coded layers, utils.py setup extraction, helper hardening with DI/logging/count_tokens, Librarian/Researcher/Writer contract fixes, AgentRegistry lambda closures, engine.py modularization, and Apollo 11 standard + Hemingway rewrite trace analyses).',
  },
};

export const cemaCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Building the Summarizer Agent for Context Reduction',
  subtitle: 'Proactive Context Management, Micro-Context Objectives, Dynamic Registry Discovery, and Bilingual Contract Unpacking',
  readingTimeMinutes: 8,
  sourceWordCount: 8349,
  executiveThesis:
    'Passing raw, high-volume source documents directly into downstream generation agents inflates API token costs, increases latency, and dilutes model attention with low-relevance noise. By introducing a dedicated Summarizer specialist guided by a high-precision `summary_objective` and registering its schema in `AgentRegistry.get_capabilities_description()`, the Planner dynamically inserts context reduction before expensive generation steps—cutting input token payloads by over 50% without modifying a single line of `engine.py`.',
  paradigmShift: {
    oldWay:
      'Reactive black-box pipelines that dump raw retrieved documents into final generation prompts or use vague "Summarize this text" instructions that strip critical domain facts.',
    newWay:
      'Glass-box proactive context management where `count_tokens()` meters payload size, `agent_summarizer` filters noise via micro-engineered `summary_objective` blueprints, and a bilingual `agent_writer` consumes either `{"facts": ...}` or `{"summary": ...}`.',
    whyItChanged:
      'Enterprise multi-agent workflows processing thousands of daily documents hit strict token ceiling and cost constraints, requiring plug-and-play context compression that preserves factual signal.',
  },
  mentalModels: [
    {
      id: 'cema-ch06-mm1',
      name: 'The Token Gatekeeper & Fuel Gauge',
      tagline: 'Pair deterministic token metering (`count_tokens`) with objective-driven compression (`agent_summarizer`)',
      naiveIntuition:
        'Send the entire raw research corpus directly to the Writer agent since modern LLMs have large context windows.',
      firstPrinciplesReality:
        'Large context windows are neither free nor immune to middle-context attention degradation. Pairing `count_tokens()` (the fuel gauge) with `agent_summarizer` (the gatekeeper) strips high-volume irrelevant details—such as launch dates or historical tangents—before invoking the expensive stylistic generation step.',
      howToApply:
        'Insert `agent_summarizer` upstream of synthesis agents whenever embedded user text or retrieved chunks contain domain noise outside the immediate generation objective.',
    },
    {
      id: 'cema-ch06-mm2',
      name: 'Micro-Context Engineering (`summary_objective`)',
      tagline: 'Transform a generic summarizer into a precision extraction instrument via miniature semantic blueprints',
      naiveIntuition:
        'Pass `"Summarize this text"` as the instruction to a summarization agent and rely on the LLM to guess which facts matter for downstream steps.',
      firstPrinciplesReality:
        'Open-ended summarization prompts produce bland, lossy paragraphs that drop mission-critical entities or technical parameters. Treating `summary_objective` as a micro-blueprint—explicitly specifying target entities, inclusion rules, exclusion filters, and output structure—repurposes one reusable Summarizer function across legal, financial, and technical workflows.',
      howToApply:
        'Write `summary_objective` strings that state exactly what to extract, what boilerplate to exclude, and how to format the output for the next agent in the chain.',
    },
    {
      id: 'cema-ch06-mm3',
      name: 'Zero-Core-Change Dynamic Discovery',
      tagline: 'Teach the Planner new capabilities by updating the registry manual rather than rewriting orchestrator code',
      naiveIntuition:
        'Adding a fourth specialist agent (`Summarizer`) requires adding `if/else` routing rules inside `planner()` and `context_engine()` in `engine.py`.',
      firstPrinciplesReality:
        'Because `planner()` dynamically reads `AgentRegistry.get_capabilities_description()` at runtime, registering `"Summarizer"` in `registry.py` and documenting its role and input keys (`text_to_summarize`, `summary_objective`) immediately enables the LLM Planner to schedule summarization steps when appropriate.',
      howToApply:
        'Extend multi-agent capabilities by registering the handler in `AgentRegistry` and writing crisp capability docstrings, leaving `engine.py` 100% untouched.',
    },
  ],
  customDiagrams: [
    {
      id: 'cema-ch06-svg1',
      title: 'Dynamic Discovery & Bilingual Contract Flow for Context Reduction',
      subtitle: 'How the Planner discovers `agent_summarizer` via `AgentRegistry` and chains `{"summary": ...}` into `agent_writer`',
      bierutCaption:
        'Updating `registry.py` and `agents.py` equips the engine with proactive context reduction while `engine.py` remains completely unchanged.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="cema6-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="cema6-arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#22c55e" />
    </marker>
    <marker id="cema6-arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="#0f172a" />

  <text x="24" y="30" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">GLASS-BOX CONTEXT REDUCTION: DISCOVERY LOOP &amp; BILINGUAL WRITER CONTRACT</text>
  <text x="24" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Zero modifications to engine.py — capability scaling via AgentRegistry and Micro-Context Engineering</text>

  <!-- Top Row: Dynamic Discovery Loop -->
  <rect x="24" y="66" width="356" height="142" rx="8" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
  <rect x="24" y="66" width="356" height="26" rx="8" fill="#475569" />
  <text x="202" y="83" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">ENGINE CORE (engine.py — ZERO CODE CHANGES)</text>

  <rect x="40" y="104" width="150" height="88" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="115" y="124" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10" font-weight="700">planner()</text>
  <text x="115" y="142" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">1. Queries capabilities</text>
  <text x="115" y="156" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">3. Discovers Summarizer</text>
  <text x="115" y="170" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">4. Emits 3-step JSON plan</text>

  <rect x="210" y="104" width="154" height="88" rx="6" fill="#0f172a" stroke="#94a3b8" />
  <text x="287" y="124" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="10" font-weight="700">Executor + Trace</text>
  <text x="287" y="142" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Resolves $$STEP_1_OUTPUT$$</text>
  <text x="287" y="156" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">&amp; $$STEP_2_OUTPUT$$</text>
  <text x="287" y="170" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="8.5">Flight Recorder Active</text>

  <!-- Agent Registry (Purple) -->
  <rect x="416" y="66" width="360" height="142" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <rect x="416" y="66" width="360" height="26" rx="8" fill="#7e22ce" />
  <text x="596" y="83" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">AGENT REGISTRY (registry.py — UPDATED TOOLKIT)</text>

  <rect x="432" y="104" width="328" height="88" rx="6" fill="#0f172a" stroke="#a855f7" />
  <text x="596" y="122" text-anchor="middle" fill="#d8b4fe" font-family="monospace" font-size="10" font-weight="700">2. get_capabilities_description() + get_handler()</text>
  <text x="596" y="140" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9">[NEW] 3. AGENT: Summarizer → {"summary": "..."}</text>
  <text x="596" y="156" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">Inputs: "text_to_summarize", "summary_objective"</text>
  <text x="596" y="172" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="8.5">elif agent_name == "Summarizer": lambda mcp_message...</text>

  <path d="M 190 126 L 430 126" stroke="#a855f7" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema6-arrow-purple)" />
  <path d="M 430 158 L 190 158" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema6-arrow)" />

  <!-- Bottom Row: Execution & Bilingual Unpacking -->
  <rect x="24" y="230" width="232" height="166" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5" />
  <rect x="24" y="230" width="232" height="26" rx="8" fill="#15803d" />
  <text x="140" y="247" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">STEP 1: SUMMARIZER [NEW]</text>

  <text x="140" y="274" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9.5" font-weight="600">agent_summarizer()</text>
  <text x="140" y="292" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Raw Input: 253 tokens (Juno text)</text>
  <text x="140" y="308" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="9">+ Micro-Context Objective:</text>
  <text x="140" y="322" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="8.5">"Extract mission &amp; instruments"</text>
  <rect x="40" y="336" width="200" height="44" rx="5" fill="#0f172a" stroke="#22c55e" />
  <text x="140" y="354" text-anchor="middle" fill="#4ade80" font-family="monospace" font-size="9.5" font-weight="700">Output: {"summary": "..."}</text>
  <text x="140" y="370" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">110 tokens (-56.5% Reduction!)</text>

  <rect x="284" y="230" width="196" height="166" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5" />
  <rect x="284" y="230" width="196" height="26" rx="8" fill="#15803d" />
  <text x="382" y="247" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">STEP 2: LIBRARIAN</text>

  <text x="382" y="274" text-anchor="middle" fill="#86efac" font-family="monospace" font-size="9.5" font-weight="600">agent_context_librarian()</text>
  <text x="382" y="294" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Queries ContextLibrary</text>
  <text x="382" y="310" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="8.5">blueprint_suspense_narrative</text>
  <rect x="300" y="336" width="164" height="44" rx="5" fill="#0f172a" stroke="#22c55e" />
  <text x="382" y="354" text-anchor="middle" fill="#4ade80" font-family="monospace" font-size="9" font-weight="700">{"blueprint_json": "..."}</text>
  <text x="382" y="370" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="8.5">"Short, sharp sentences"</text>

  <rect x="508" y="230" width="268" height="166" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="508" y="230" width="268" height="26" rx="8" fill="#0284c7" />
  <text x="642" y="247" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">STEP 3: BILINGUAL WRITER [UPGRADED]</text>

  <rect x="524" y="266" width="236" height="62" rx="5" fill="#0f172a" stroke="#38bdf8" />
  <text x="642" y="284" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="9" font-weight="600">Bilingual Unpacking Logic:</text>
  <text x="642" y="300" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">facts = facts_data.get('facts')</text>
  <text x="642" y="314" text-anchor="middle" fill="#4ade80" font-family="monospace" font-size="8.5">if facts is None: facts_data.get('summary')</text>

  <rect x="524" y="338" width="236" height="42" rx="5" fill="#0f172a" stroke="#f97316" />
  <text x="642" y="356" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="9.5" font-weight="600">Synthesizes 110-Token Summary</text>
  <text x="642" y="370" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="8.5">+ Suspense Blueprint → Final Story</text>

  <path d="M 256 358 L 282 358" stroke="#22c55e" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema6-arrow-green)" />
  <path d="M 480 358 L 506 358" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema6-arrow)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Dynamic Capability Discovery (Steps 1–4)',
          explanation:
            'The Planner queries `get_capabilities_description()`, discovers `Summarizer` and its input keys (`text_to_summarize`, `summary_objective`), and schedules it ahead of the Writer without any changes to `engine.py`.',
        },
        {
          step: '2',
          label: 'Objective-Driven Context Compression (56.5% Reduction)',
          explanation:
            '`agent_summarizer` filters the 253-token Juno passage down to a 110-token bulleted summary focused strictly on scientific mission and instruments/power.',
        },
        {
          step: '3',
          label: 'Bilingual Data Contract Unpacking in `agent_writer`',
          explanation:
            'When `resolve_dependencies()` passes `{"summary": ...}` into the Writer’s `facts` slot, the upgraded Writer checks `.get("facts")` and falls back to `.get("summary")` without raising a contract error.',
        },
      ],
    },
    {
      id: 'cema-ch06-svg2',
      title: 'Token Economics & Signal-to-Noise Gatekeeping at Enterprise Scale',
      subtitle: 'Comparing unreduced prompt pipelines against micro-context gatekeeping across token volume, latency, and ROI',
      bierutCaption:
        'A 56.5% token reduction at the Summarizer gate compounds across thousands of daily runs into lower API spend, faster generation latency, and sharper factual adherence.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="cema6-econ-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="#0f172a" />

  <text x="24" y="30" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">MICRO-CONTEXT GATEKEEPING: TOKEN REDUCTION &amp; ENTERPRISE ROI</text>
  <text x="24" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Measuring pre/post token budgets with tiktoken count_tokens() and translating technical efficiency into business value</text>

  <!-- Left Box: Unfiltered Raw Context -->
  <rect x="24" y="72" width="220" height="320" rx="8" fill="#1e293b" stroke="#f97316" stroke-width="1.5" />
  <rect x="24" y="72" width="220" height="28" rx="8" fill="#c2410c" />
  <text x="134" y="90" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">1. RAW INPUT PAYLOAD</text>

  <rect x="40" y="116" width="188" height="78" rx="6" fill="#0f172a" stroke="#f97316" />
  <text x="134" y="138" text-anchor="middle" fill="#fdba74" font-family="monospace" font-size="11" font-weight="700">253 Tokens (100%)</text>
  <text x="134" y="156" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9.5">Juno Mission + Launch Dates</text>
  <text x="134" y="172" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9">+ Galileo Comparison Noise</text>

  <rect x="40" y="212" width="188" height="72" rx="6" fill="#450a0a" stroke="#ef4444" />
  <text x="134" y="232" text-anchor="middle" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Poor Prompting Risk</text>
  <text x="134" y="250" text-anchor="middle" fill="#fecaca" font-family="monospace" font-size="9">"Summarize this text."</text>
  <text x="134" y="266" text-anchor="middle" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="8.5">→ Vague, lossy, unfocused</text>

  <rect x="40" y="300" width="188" height="74" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="134" y="320" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10" font-weight="700">count_tokens() Gauge</text>
  <text x="134" y="338" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="9">tiktoken.encoding_for_model</text>
  <text x="134" y="354" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="8.5">Fallback: cl100k_base</text>

  <!-- Center Box: Micro-Context Gatekeeper -->
  <rect x="276" y="72" width="248" height="320" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5" />
  <rect x="276" y="72" width="248" height="28" rx="8" fill="#15803d" />
  <text x="400" y="90" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">2. SUMMARIZER GATEKEEPER</text>

  <rect x="292" y="116" width="216" height="96" rx="6" fill="#0f172a" stroke="#22c55e" />
  <text x="400" y="136" text-anchor="middle" fill="#86efac" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Micro-Context Blueprint</text>
  <text x="400" y="154" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">summary_objective:</text>
  <text x="400" y="170" text-anchor="middle" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="9">"Extract only key facts about</text>
  <text x="400" y="184" text-anchor="middle" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="9">scientific mission &amp; instruments"</text>
  <text x="400" y="200" text-anchor="middle" fill="#4ade80" font-family="system-ui, sans-serif" font-size="8.5">Strips launch &amp; Galileo tangents</text>

  <rect x="292" y="228" width="216" height="146" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="252" text-anchor="middle" fill="#6ee7b7" font-family="monospace" font-size="12" font-weight="700">110 Tokens (43.5%)</text>
  <text x="400" y="272" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">56.5% Token Reduction</text>
  <text x="400" y="296" text-anchor="middle" fill="#a7f3d0" font-family="monospace" font-size="8.5">• Polar orbit around Jupiter</text>
  <text x="400" y="312" text-anchor="middle" fill="#a7f3d0" font-family="monospace" font-size="8.5">• Gravity &amp; magnetic field</text>
  <text x="400" y="328" text-anchor="middle" fill="#a7f3d0" font-family="monospace" font-size="8.5">• Deep atmosphere water</text>
  <text x="400" y="344" text-anchor="middle" fill="#a7f3d0" font-family="monospace" font-size="8.5">• 3 large solar-array wings</text>

  <!-- Right Box: Enterprise Business Value -->
  <rect x="556" y="72" width="220" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="556" y="72" width="220" height="28" rx="8" fill="#0284c7" />
  <text x="666" y="90" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">3. ENTERPRISE IMPACT</text>

  <rect x="572" y="116" width="188" height="78" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="666" y="136" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">1. Direct Cost Savings</text>
  <text x="666" y="154" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">10,000 daily financial reports</text>
  <text x="666" y="170" text-anchor="middle" fill="#4ade80" font-family="system-ui, sans-serif" font-size="9" font-weight="600">&gt;50% cut on Writer token load</text>

  <rect x="572" y="208" width="188" height="78" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="666" y="228" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">2. Lower Latency (Speed)</text>
  <text x="666" y="246" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Smaller context window input</text>
  <text x="666" y="262" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">accelerates trader briefs</text>

  <rect x="572" y="300" width="188" height="74" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="666" y="320" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">3. Higher Signal-to-Noise</text>
  <text x="666" y="338" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">Eliminates distracting tangents</text>
  <text x="666" y="354" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="9">for sharper Writer adherence</text>

  <path d="M 244 230 L 274 230" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema6-econ-arrow)" />
  <path d="M 524 230 L 554 230" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cema6-econ-arrow)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Pre-Execution & Post-Execution Token Metering',
          explanation:
            '`count_tokens()` quantifies both the raw input text (253 tokens) and the Summarizer output inside `trace.steps[0]["output"]["summary"]` (110 tokens).',
        },
        {
          step: '2',
          label: 'High-Precision Micro-Context Filtering',
          explanation:
            'By specifying a strict `summary_objective`, `agent_summarizer` drops low-relevance historical details and retains only the six bullet points needed by the Writer.',
        },
        {
          step: '3',
          label: 'Compounding Enterprise Value (Cost, Speed, Quality)',
          explanation:
            'Across 10,000 daily market reports, cutting downstream prompt tokens by >50% saves thousands of dollars monthly while accelerating prefill speed and eliminating attention distraction.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'cema-ch06-s1',
      sectionNumber: '6.1',
      title: 'Architecting the Glass-Box System for Proactive Context Management',
      subtitle: 'Separating human architectural design from AI worker execution across modular responsibility boundaries',
      coreMechanism:
        'As AI copilots automate routine code generation, the human engineer’s primary responsibility shifts from writing boilerplate syntax to designing glass-box system architectures. Unlike black-box chatbots where monolithic prompts hide intermediate failures, a glass-box multi-agent system exposes every planning decision, tool lookup, and state handoff through `ExecutionTrace`. Adding proactive context management to this architecture requires introducing two targeted components into the existing five-layer blueprint without altering the white Engine Core (`engine.py`).\n\nFirst, `count_tokens()` in the orange Helper layer (`helpers.py`) acts as the engine’s fuel gauge, using OpenAI’s `tiktoken` tokenizer to measure exact token payloads before and after compression. Second, `agent_summarizer` in the green Specialist Agent layer (`agents.py`) acts as an intelligent gatekeeper, condensing large source texts according to a task-specific objective. Because agents operate as plug-and-play MCP modules registered in `registry.py`, separate engineering teams (such as legal, finance, and marketing) can develop and register domain specialists in parallel without risking cascading failures in the central orchestrator.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Enforce Glass-Box Observability Over Black-Box Prompting',
          detail:
            'Route all multi-agent decisions through `ExecutionTrace` so every input, summary compression ratio, and dependency resolution can be inspected step by step.',
        },
        {
          step: '2',
          title: 'Verify Token Metering (`count_tokens`) in `helpers.py`',
          detail:
            'Encode text via `tiktoken.encoding_for_model(model)` with a `cl100k_base` fallback to measure exact token consumption across workflow stages.',
        },
        {
          step: '3',
          title: 'Preserve Core Engine Stability (`engine.py`)',
          detail:
            'Keep `ExecutionTrace`, `planner()`, and `context_engine()` untouched while extending capabilities strictly through `agents.py` and `registry.py`.',
        },
      ],
      keyTakeaways: [
        'Human engineers serve as complexity-thinking system architects while AI copilots and specialist agents operate as bounded workers within a glass-box framework.',
        'Plug-and-play agent modularity prevents the "brittle house of cards" technical debt where adding one capability breaks existing orchestration logic.',
        'Parallel domain teams only need to adhere to the MCP message envelope and register their agent in `AgentRegistry` to collaborate inside the same engine.',
      ],
      commonPitfalls: [
        'Modifying `engine.py` every time a new specialist agent is introduced, violating separation of responsibilities and risking regressions in the orchestration loop.',
        'Deploying multi-step LLM workflows without token metering, leaving the system vulnerable to silent cost spikes and context-window overflows.',
      ],
      figures: [
        {
          file: 'B36602_6_1.png',
          originalLabel: 'Figure 6.1: From human architects to AI workers',
          bierutTitle: 'Elevate Human Engineers to System Architects While Delegating Execution to AI Workers',
          editorialAnalysis:
            'Figure 6.1 contrasts the strategic design layer owned by human architects with the tactical code and task execution performed by AI copilots and specialist agents. Even as LLMs generate production-ready functions, humans must design the modular boundaries, state contracts, and verification gates that keep the system coherent.',
          keyTakeaways: [
            'AI copilots accelerate implementation, but architectural foresight and glass-box control remain strictly human responsibilities.',
          ],
        },
        {
          file: 'B36602_6_2.png',
          originalLabel: 'Figure 6.2: The content reduction architecture',
          bierutTitle: 'Slot `[NEW AGENT] Summarizer` and `[NEW UTILITY] count_tokens` into the Existing 5-Layer Blueprint',
          editorialAnalysis:
            'Figure 6.2 extends the color-coded Context Engine flowchart with two `[NEW]` nodes: `agent_summarizer` in the Green specialist layer and `count_tokens` in the Orange utility layer. Notice that the White engine core (`context_engine`, `planner`, `ExecutionTrace`, `resolve_dependencies`) requires zero structural changes to accommodate proactive context reduction.',
          keyTakeaways: [
            '`count_tokens` provides the measurement primitive while `agent_summarizer` provides the compression action.',
            'The Purple `AgentRegistry` bridges the new agent into the existing Planner and Executor loops.',
          ],
        },
        {
          file: 'B36602_6_3.png',
          originalLabel: 'Figure 6.3: From brittle to agile AI systems',
          bierutTitle: 'Replace Brittle Monolithic Pipelines with Plug-and-Play Multi-Agent Ecosystems',
          editorialAnalysis:
            'Figure 6.3 illustrates the structural transition from tightly coupled, single-purpose AI scripts—which collapse like a house of cards when requirements change—to an agile, registry-driven MAS where capabilities are added or upgraded as independent modules.',
          keyTakeaways: [
            'System longevity depends on how cleanly an architecture absorbs new agents without re-engineering the core orchestrator.',
          ],
        },
      ],
    },
    {
      id: 'cema-ch06-s2',
      sectionNumber: '6.2',
      title: 'Implementing `agent_summarizer` & Micro-Context Engineering',
      subtitle: 'Objective-guided summarization, dynamic `AgentRegistry` discovery, and bilingual `agent_writer` unpacking',
      coreMechanism:
        'In `commons/ch6/agents.py`, `agent_summarizer(mcp_message, client, generation_model)` unpacks two mandatory keys from `mcp_message["content"]`: `text_to_summarize` and `summary_objective`. If either is missing, it raises a `ValueError` immediately. Rather than issuing a generic summarization prompt, it formats a structured prompt delineating `--- OBJECTIVE ---` and `--- TEXT TO SUMMARIZE ---`, invokes `call_llm_robust()`, and returns `create_mcp_message("Summarizer", {"summary": summary})`. The effectiveness of this agent hinges on micro-context engineering: crafting `summary_objective` as a miniature semantic blueprint that specifies exact target entities, constraints, and exclusions rather than vague instructions like `"Summarize this text."`\n\nTo make the Summarizer discoverable, `commons/ch6/registry.py` is updated in three places: adding `"Summarizer": agents.agent_summarizer` to `self.registry`, adding an `elif agent_name == "Summarizer":` lambda branch in `get_handler()` that injects `client` and `generation_model`, and adding entry #3 (`AGENT: Summarizer`) to `get_capabilities_description()`. Finally, because the Researcher emits `{"facts": ...}` while the Summarizer emits `{"summary": ...}`, `agent_writer` is reinforced to be bilingual—checking `facts_data.get("facts")` first and falling back to `facts_data.get("summary")` when `facts is None`.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Build `agent_summarizer` with Input Validation & MCP Envelope',
          detail:
            'Validate `text_to_summarize` and `summary_objective`, call `call_llm_robust()`, and return a keyed dictionary `{"summary": summary}` inside an MCP message.',
        },
        {
          step: '2',
          title: 'Register Handler & Update Capability Manual in `registry.py`',
          detail:
            'Bind `client` and `generation_model` in `get_handler()` and document the Summarizer’s role, inputs, and output schema in `get_capabilities_description()`.',
        },
        {
          step: '3',
          title: 'Upgrade `agent_writer` for Bilingual Payload Unpacking',
          detail:
            'Update `agent_writer` so that when `isinstance(facts_data, dict)` is true, it extracts `facts_data.get("facts")` or falls back to `facts_data.get("summary")`.',
        },
      ],
      keyTakeaways: [
        'Micro-context engineering turns a single reusable `agent_summarizer` function into a precision extraction tool (e.g., extracting parties, financial figures, and dates from legal text as JSON).',
        'The four-step dynamic discovery loop (`Planner -> get_capabilities_description -> LLM reasoning -> JSON plan`) allows the Planner to learn and schedule new agents automatically.',
        'Making `agent_writer` bilingual (`"facts"` + `"summary"`) resolves data contract violations when the Planner chains Summarizer outputs into the Writer’s `facts` parameter.',
      ],
      commonPitfalls: [
        'Supplying a vague `summary_objective` (`"Summarize this text"`), which forces the LLM to guess relevance and often drops critical facts needed by downstream agents.',
        'Registering `agent_summarizer` in `self.registry` but forgetting to add its `elif` branch in `get_handler()`, causing `TypeError` when the Executor calls the un-injected function.',
      ],
      figures: [
        {
          file: 'B36602_6_4.png',
          originalLabel: 'Figure 6.4: The importance of context engineering skills',
          bierutTitle: 'Turn Generic Agents into High-Precision Instruments Through Micro-Context Engineering',
          editorialAnalysis:
            'Figure 6.4 highlights why output quality scales directly with context design competence: weak engineers pass vague, old-fashioned prompts that yield bland, low-value summaries, whereas skilled context engineers supply structured micro-blueprints (`summary_objective`) that enforce exact extraction constraints.',
          keyTakeaways: [
            'An instruction inside an agentic workflow must be a constraint-driven semantic blueprint, never an open-ended chat prompt.',
          ],
        },
        {
          file: 'B36602_6_5.png',
          originalLabel: 'Figure 6.5: The dynamic discovery loop between the Planner and AgentRegistry',
          bierutTitle: 'Enable Zero-Touch Capability Scaling via the Four-Step Registry Discovery Loop',
          editorialAnalysis:
            'Figure 6.5 traces the four-step runtime handshake between the Planner and `AgentRegistry`: (1) the Planner asks what tools exist, (2) the Registry returns the plain-text manual from `get_capabilities_description()`, (3) the Planner discovers the newly added Summarizer and its input keys, and (4) the Planner synthesizes a multi-step plan incorporating context reduction.',
          keyTakeaways: [
            'Decoupling tool discovery from orchestrator code allows the Planner to adapt its strategy dynamically as the registry grows.',
          ],
        },
      ],
    },
    {
      id: 'cema-ch06-s3',
      sectionNumber: '6.3',
      title: 'Trace Verification & Translating Token Efficiency into Business Value',
      subtitle: 'Auditing the 56.5% Juno token reduction in `ExecutionTrace` and quantifying enterprise ROI across cost, speed, and quality',
      coreMechanism:
        'To verify the upgraded workflow in `Context_Engine_Content_Reduction.ipynb`, the engine is given a 253-token technical passage about NASA’s Juno space probe alongside a two-part goal: first summarize key facts about Juno’s scientific mission and instruments, then write a suspenseful children’s story scene about its arrival at Jupiter. Deconstructing `TECHNICAL TRACE` confirms that the Planner skips the Researcher (since raw text is already embedded in the goal) and schedules `Summarizer` as Step 1 with `"summary_objective": "Extract only the key facts about Juno\'s scientific mission and its instruments/power system..."`. Step 1 outputs a 110-token bulleted summary—a 56.5% token reduction verified by `count_tokens()`—which `resolve_dependencies()` injects into Step 3 (`Writer`) alongside Step 2’s `blueprint_suspense_narrative` from the Librarian.\n\nFor an enterprise AI architect, proving technical execution is only half the mandate; the engineer must translate token reduction into three concrete business pillars: direct cost savings, faster latency, and higher output quality. In a financial services firm processing 10,000 lengthy market analysis reports daily, cutting the token payload entering the expensive final generation step by more than 50% saves thousands to tens of thousands of dollars per month in API fees, accelerates time-to-insight for traders by shrinking prefill compute, and increases signal-to-noise ratio so the final generator is never distracted by irrelevant boilerplate.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit Step 1 (`Summarizer`) in the Execution Trace',
          detail:
            'Verify that the Planner extracted the embedded text into `text_to_summarize` and formulated a targeted `summary_objective` rather than calling the Researcher.',
        },
        {
          step: '2',
          title: 'Quantify Token Compression via Post-Execution Analysis',
          detail:
            'Run `count_tokens()` on `large_text_from_researcher` (253 tokens) and `trace_1.steps[0]["output"]["summary"]` (110 tokens) to confirm the 56.5% reduction.',
        },
        {
          step: '3',
          title: 'Verify Chained Synthesis & Articulate Enterprise ROI',
          detail:
            'Confirm `resolved_context` in Step 3 passed the 110-token summary to `agent_writer`, and map the compression ratio to enterprise cost, latency, and quality gains.',
        },
      ],
      formulas: [
        {
          name: 'Context Token Reduction Percentage',
          expression: 'R_{\\text{ctx}} = \\left(1 - \\frac{\\text{count\\_tokens}(T_{\\text{summary}})}{\\text{count\\_tokens}(T_{\\text{raw}})}\\right) \\times 100\\%',
          intuition:
            'Measures the percentage of input context tokens eliminated by `agent_summarizer` before the payload reaches downstream generation agents.',
          variables: [
            { symbol: 'R_{\\text{ctx}}', meaning: 'Percentage reduction in context token volume passed to downstream steps' },
            { symbol: '\\text{count\\_tokens}(T_{\\text{raw}})', meaning: 'Token count of the original unreduced text (253 tokens in the Juno benchmark)' },
            { symbol: '\\text{count\\_tokens}(T_{\\text{summary}})', meaning: 'Token count of the objective-filtered summary (110 tokens in the Juno benchmark)' },
          ],
          workedExample:
            'For the Juno mission passage, `original_tokens = 253` and `summarized_tokens = 110`, yielding $R_{\\text{ctx}} = (1 - 110 / 253) \\times 100\\% = 56.5\\%$ reduction in downstream prompt tokens.',
        },
      ],
      keyTakeaways: [
        'In the Juno trace, the Planner dynamically selects `Summarizer -> Librarian -> Writer`, proving it chooses tools based on goal structure rather than a hardcoded sequence.',
        'The final story weaves the Summarizer’s exact bullets (three solar-array wings, polar magnetosphere, gravity/magnetic fields) with the Librarian’s short, sharp sentence style.',
        'Context reduction delivers a triple enterprise dividend: lower API expenditure, faster generation latency, and higher signal-to-noise output fidelity.',
      ],
      commonPitfalls: [
        'Reporting only raw technical metrics ("we reduced tokens by 56.5%") to executive stakeholders without translating them into monthly dollar savings, trader latency, and error reduction.',
        'Assuming context reduction only saves money, overlooking how stripping irrelevant details prevents attention dilution in the final Writer step.',
      ],
      figures: [
        {
          file: 'B36602_6_6.png',
          originalLabel: 'Figure 6.6: One of the roles of a new era AI engineer is to prove the business value of an AI project',
          bierutTitle: 'Translate Token Compression Metrics into Executive Cost, Speed, and Quality Outcomes',
          editorialAnalysis:
            'Figure 6.6 positions the modern AI engineer at the intersection of system architecture, context engineering, and business value justification. Technical telemetry from `ExecutionTrace` and `count_tokens()` provides the empirical evidence needed to prove ROI across high-volume enterprise workflows.',
          keyTakeaways: [
            'Connecting `ExecutionTrace` token metrics to daily document volume turns an engineering optimization into a boardroom business case.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Context Handling & Summarization Strategies in Multi-Agent Workflows',
      description:
        'Evaluating raw context passthrough, generic prompt summarization, and micro-context gatekeeping (`agent_summarizer`) across cost, fidelity, and architectural agility.',
      headers: [
        'Context Strategy',
        'Downstream Token Load',
        'Factual Signal Retention',
        'Downstream Latency',
        'Reusability Across Domains',
      ],
      rows: [
        [
          'Unfiltered Raw Passthrough (No Summarizer)',
          '100% (253t Juno / full reports); high API cost & overflow risk',
          'High recall but diluted by low-relevance tangents (launch dates, Galileo)',
          'Slowest prefill and generation time on expensive Writer model',
          'Brittle; fails when source documents exceed downstream context limits',
        ],
        [
          'Generic Summarization ("Summarize this text")',
          'Low (~30–50%), reducing immediate token spend',
          'Poor; LLM guesses relevance and drops critical domain entities/metrics',
          'Fast, but frequently requires costly re-runs due to missing facts',
          'Low; produces bland prose unusable for structured JSON or technical tasks',
        ],
        [
          'Micro-Context Gatekeeping (`agent_summarizer` + `summary_objective`)',
          '43.5% (110t Juno; 56.5% reduction) verified via `count_tokens()`',
          'High signal-to-noise; preserves 100% of mission-critical facts',
          'Fast downstream synthesis with lean, high-density context',
          'High; dynamically discoverable via `AgentRegistry` for any domain objective',
        ],
      ],
      verdictRule:
        'Never pass raw high-volume text directly to creative or analytical synthesis agents, and never use generic "Summarize this" prompts; always deploy `agent_summarizer` with an explicit `summary_objective` micro-blueprint and bilingual downstream unpacking.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'cema-ch06-sc1',
      title: 'Data Contract Violation Between `agent_summarizer` and `agent_writer`',
      roleAndContext:
        'Multi-Agent Systems Architect integrating the newly built `agent_summarizer` into `commons/ch6/agents.py` and `registry.py`.',
      symptomOrFailure:
        'The Planner dynamically chains `Summarizer` (Step 1) into `Writer` (Step 3), passing `$$STEP_1_OUTPUT$$` as the Writer’s `facts` input, but `agent_writer` raises `ValueError: Writer requires a blueprint and either "facts" or "previous_content"`.',
      naiveFixAndWhyItFails:
        'Forcing `agent_summarizer` to return `{"facts": summary}` instead of `{"summary": summary}`, which blurs semantic distinction in the execution trace between raw research findings and condensed summaries.',
      firstPrinciplesSolution:
        'Make `agent_writer` bilingual by updating its dictionary unpacking logic: check `facts = facts_data.get("facts")` first, and if `facts is None`, fall back to `facts = facts_data.get("summary")`.',
      measurableOutcome:
        'Allows `agent_writer` to directly consume factual context from either `Researcher` (`{"facts": ...}`) or `Summarizer` (`{"summary": ...}`) while maintaining 100% backward compatibility.',
    },
    {
      id: 'cema-ch06-sc2',
      title: 'High API Spend and Attention Dilution in Daily Financial Report Processing',
      roleAndContext:
        'Principal Context Engineer at a financial services firm running a multi-agent workflow across 10,000 lengthy market analysis reports per day to generate actionable trader briefs.',
      symptomOrFailure:
        'Passing full market reports directly to the final generation agent causes monthly LLM API costs to skyrocket, slows brief delivery to traders, and introduces irrelevant procedural boilerplate into the final briefs.',
      naiveFixAndWhyItFails:
        'Truncating every market report to its first 500 words before calling the Writer, which arbitrarily slices off key financial figures and resolution dates appearing later in the document.',
      firstPrinciplesSolution:
        'Register `agent_summarizer` in `AgentRegistry` and instruct the Planner to pass a strict micro-context `summary_objective` (e.g., extracting involved parties, financial figures, and dates while excluding boilerplate) before chaining into `agent_writer`.',
      measurableOutcome:
        'Reduces token load on the expensive final generation step by >50% (56.5% on benchmark runs), saving thousands of dollars monthly while accelerating trader brief latency and improving factual precision.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cema-ch06-q1',
        scenarioPrompt:
          'When adding `agent_summarizer` to the Context Engine in Chapter 6, which files in `commons/ch6/` require code modifications so the Planner can dynamically schedule summarization steps?',
        options: [
          {
            label: 'A',
            text: '`engine.py` and `helpers.py` only, to hardcode a summarization pre-step before every `agent_writer` call.',
            isCorrect: false,
            explanation:
              '`engine.py` requires zero changes because its orchestration and planning logic are completely generic.',
          },
          {
            label: 'B',
            text: '`agents.py` (to define `agent_summarizer` and make `agent_writer` bilingual) and `registry.py` (to register the function, add its `get_handler` lambda, and update `get_capabilities_description`).',
            isCorrect: true,
            explanation:
              'Because the Planner reads `get_capabilities_description()` dynamically, updating `agents.py` and `registry.py` is sufficient to integrate the new capability with zero changes to `engine.py`.',
          },
          {
            label: 'C',
            text: '`utils.py` and `engine.py`, to register a new Pinecone namespace for summarized chunks.',
            isCorrect: false,
            explanation:
              '`agent_summarizer` operates directly on passed-in text via `call_llm_robust()` and does not query or write to a Pinecone namespace.',
          },
          {
            label: 'D',
            text: 'Only `Context_Engine_Content_Reduction.ipynb`, by passing a custom callback into `execute_and_display()`.',
            isCorrect: false,
            explanation:
              'The specialist function and registry description live in `commons/ch6/agents.py` and `commons/ch6/registry.py`.',
          },
        ],
      },
      {
        id: 'cema-ch06-q2',
        scenarioPrompt:
          'Why did the initial integration of `agent_summarizer` cause a data contract violation when chained into the Chapter 5 version of `agent_writer`?',
        options: [
          {
            label: 'A',
            text: '`agent_summarizer` returned `{ "summary": "..." }` whereas `agent_writer` only looked for the `"facts"` key inside the dictionary passed to its `facts` input.',
            isCorrect: true,
            explanation:
              'The Researcher outputs `{"facts": "..."}` while the Summarizer outputs `{"summary": "..."}`. Without checking `.get("summary")` when `.get("facts")` returns `None`, `agent_writer` raises a `ValueError`.',
          },
          {
            label: 'B',
            text: '`agent_summarizer` returned a raw token integer from `count_tokens()` instead of an MCP message dictionary.',
            isCorrect: false,
            explanation:
              '`agent_summarizer` wraps its output in a standard MCP message via `create_mcp_message("Summarizer", {"summary": summary})`.',
          },
          {
            label: 'C',
            text: '`resolve_dependencies()` could not parse `$$STEP_1_OUTPUT$$` when Step 1 was executed by `Summarizer` instead of `Librarian`.',
            isCorrect: false,
            explanation:
              '`resolve_dependencies()` is agent-agnostic and substitutes `$$STEP_1_OUTPUT$$` regardless of which agent ran in Step 1.',
          },
          {
            label: 'D',
            text: '`agent_summarizer` required `namespace_context`, which was only injected into `Librarian`.',
            isCorrect: false,
            explanation:
              '`agent_summarizer` only requires `client` and `generation_model`; it does not query Pinecone.',
          },
        ],
      },
      {
        id: 'cema-ch06-q3',
        scenarioPrompt:
          'In the Juno space probe validation run, why did the Planner schedule `Summarizer` as Step 1 instead of calling `Researcher`?',
        options: [
          {
            label: 'A',
            text: 'Because `Researcher` was removed from `AgentRegistry` in `commons/ch6/registry.py`.',
            isCorrect: false,
            explanation:
              '`Researcher` remains registered in `AgentRegistry` as Agent #2.',
          },
          {
            label: 'B',
            text: 'Because the user goal already contained the embedded source text (`--- TEXT TO USE ---`) and explicitly asked to summarize it for key mission and instrument facts before writing the story.',
            isCorrect: true,
            explanation:
              'Reading `get_capabilities_description()`, the Planner recognized that factual text was already provided in the prompt and selected `Summarizer` to condense it according to the stated objective.',
          },
          {
            label: 'C',
            text: 'Because `count_tokens()` automatically blocks `Researcher` whenever a prompt exceeds 200 tokens.',
            isCorrect: false,
            explanation:
              '`count_tokens()` is a measurement utility and does not hard-block the Researcher agent.',
          },
          {
            label: 'D',
            text: 'Because `Librarian` must always run after `Summarizer` due to alphabetical sorting in `self.registry`.',
            isCorrect: false,
            explanation:
              'Step ordering is dynamically reasoned by the LLM Planner based on data dependencies, not dictionary key sorting.',
          },
        ],
      },
      {
        id: 'cema-ch06-q4',
        scenarioPrompt:
          'What distinguishes "micro-context engineering" inside `agent_summarizer` from traditional open-ended prompting?',
        options: [
          {
            label: 'A',
            text: 'Micro-context engineering uses smaller LLM weights (such as 1B parameter models) instead of frontier models.',
            isCorrect: false,
            explanation:
              'Both runs use the configured `generation_model` (`gpt-5`); micro-context engineering refers to the precision of `summary_objective`.',
          },
          {
            label: 'B',
            text: 'It treats `summary_objective` as a miniature semantic blueprint that specifies exact entities to extract, boilerplate to exclude, and output format constraints.',
            isCorrect: true,
            explanation:
              'Instead of a vague `"Summarize this text"` prompt, a micro-engineered `summary_objective` defines explicit extraction criteria and constraints, turning a generic agent into a high-precision instrument.',
          },
          {
            label: 'C',
            text: 'It splits every sentence into individual vector embeddings in Pinecone before calling `agent_writer`.',
            isCorrect: false,
            explanation:
              '`agent_summarizer` performs LLM-based objective-guided compression without writing to Pinecone.',
          },
          {
            label: 'D',
            text: 'It replaces the system prompt with raw Python bytecode to save tokens.',
            isCorrect: false,
            explanation:
              'Prompts remain structured natural language (`--- OBJECTIVE ---` and `--- TEXT TO SUMMARIZE ---`).',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'cema-ch06-fc1',
        category: 'optimization',
        front: 'What are the two required input keys in `mcp_message["content"]` for `agent_summarizer`, and what does it return?',
        back: 'It requires `"text_to_summarize"` and `"summary_objective"`, and returns an MCP message containing `{"summary": summary}`.',
        mentalHook: 'In: text + objective -> Out: {"summary": ...}.',
      },
      {
        id: 'cema-ch06-fc2',
        category: 'data',
        front: 'How was `agent_writer` upgraded in Chapter 6 to become "bilingual"?',
        back: 'When unpacking `facts_data` as a dictionary, it first checks `facts_data.get("facts")` (from Researcher) and, if `None`, falls back to `facts_data.get("summary")` (from Summarizer).',
        mentalHook: 'Try `"facts"` first, fallback to `"summary"` second.',
      },
      {
        id: 'cema-ch06-fc3',
        category: 'architecture',
        front: 'What are the four steps of the dynamic discovery loop between the Planner and `AgentRegistry` (Figure 6.5)?',
        back: '(1) Planner queries available tools, (2) Registry returns the plain-text manual via `get_capabilities_description()`, (3) Planner discovers `Summarizer` and its input schema, and (4) Planner builds a multi-step JSON plan using it.',
        mentalHook: 'Ask Toolkit -> Read Manual -> Discover Summarizer -> Emit Plan.',
      },
      {
        id: 'cema-ch06-fc4',
        category: 'evaluation',
        front: 'What token reduction was achieved by `agent_summarizer` in the Juno space probe trace analysis?',
        back: 'It reduced the input passage from 253 tokens to 110 tokens—a 56.5% token reduction—while preserving all core facts about Juno’s polar orbit, instruments, and three solar-array wings.',
        mentalHook: '253 raw tokens -> 110 summary tokens = 56.5% compression.',
      },
      {
        id: 'cema-ch06-fc5',
        category: 'foundation',
        front: 'What is "micro-context engineering" in the context of the Summarizer agent?',
        back: 'Crafting `summary_objective` as a specific, constraint-driven miniature semantic blueprint (defining what to extract, what to exclude, and output format) rather than a vague "Summarize this text" prompt.',
        mentalHook: 'Micro-context = miniature semantic blueprint inside `summary_objective`.',
      },
      {
        id: 'cema-ch06-fc6',
        category: 'optimization',
        front: 'What three concrete business value pillars does context reduction deliver at enterprise scale (e.g., 10,000 daily financial reports)?',
        back: '(1) Direct API cost savings (>50% fewer tokens on expensive generation calls), (2) Faster generation latency (smaller prefill/compute load), and (3) Higher output quality via increased signal-to-noise ratio.',
        mentalHook: 'Cost Down, Speed Up, Signal-to-Noise Up.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'cema-ch06-fc-prompt1',
        conceptTitle: 'Zero-Core-Change Capability Scaling & Bilingual Unpacking',
        prompt:
          'Explain how the Context Engine learns to use the new `Summarizer` agent without changing a single line of code in `engine.py`, and why `agent_writer` had to be upgraded to prevent a data contract violation when the Planner chains `Summarizer` into `Writer`.',
        rubricChecklist: [
          'Explains the 4-step dynamic discovery loop where `planner()` reads `AgentRegistry.get_capabilities_description()` at runtime.',
          'Identifies the three updates in `registry.py`: registering `agents.agent_summarizer`, adding the `get_handler()` lambda branch, and adding Agent #3 to the capability docstring.',
          'Explains the data contract mismatch: `Researcher` outputs `{"facts": ...}` whereas `Summarizer` outputs `{"summary": ...}`.',
          'Describes the bilingual unpacking fix in `agent_writer`: checking `facts_data.get("facts")` and falling back to `facts_data.get("summary")`.',
        ],
        modelExplanation:
          'The core orchestrator in `engine.py` does not hardcode agent names; during Phase 2, `planner()` calls `AgentRegistry.get_capabilities_description()` to read a plain-text manual of available tools. By adding `agent_summarizer` to `registry.py`—registering the function in `self.registry`, binding `client` and `generation_model` in `get_handler()`, and documenting its `"text_to_summarize"` and `"summary_objective"` inputs in `get_capabilities_description()`—the Planner automatically discovers the Summarizer and schedules it whenever a goal requires condensing large text. However, when the Planner chains `$$STEP_1_OUTPUT$$` from the Summarizer into the Writer’s `facts` input, the Chapter 5 Writer crashes because it only looks for `facts_data.get("facts")`, whereas the Summarizer returns `{"summary": "..."}`. Upgrading `agent_writer` to check `facts_data.get("facts")` first and fall back to `facts_data.get("summary")` makes the Writer bilingual across both upstream providers.',
      },
      {
        id: 'cema-ch06-fc-prompt2',
        conceptTitle: 'Micro-Context Engineering & Enterprise ROI of Context Reduction',
        prompt:
          'Contrast a naive summarization prompt with micro-context engineering via `summary_objective`, and explain how you would justify the 56.5% token reduction achieved on the Juno benchmark to an enterprise stakeholder processing 10,000 financial reports daily.',
        rubricChecklist: [
          'Contrasts vague `"Summarize this text"` instructions with a micro-engineered `summary_objective` that specifies target facts/entities, exclusions, and structure.',
          'Cites the empirical verification method using `count_tokens()` on `large_text_from_researcher` (253 tokens) vs `trace.steps[0]["output"]["summary"]` (110 tokens, 56.5% reduction).',
          'Translates token reduction into direct financial savings across 10,000 daily reports on the expensive downstream generation step.',
          'Explains the non-monetary operational benefits: lower generation latency for time-sensitive users and higher output quality from increased signal-to-noise ratio.',
        ],
        modelExplanation:
          'A naive prompt like `"Summarize this text"` forces the LLM to guess what matters, producing generic paragraphs that omit vital details. Micro-context engineering treats `summary_objective` as a miniature semantic blueprint—for example, instructing the Summarizer to extract only Juno’s scientific mission, instruments, and solar-array power system, or extracting involved parties, financial figures, and dates from a legal document while excluding boilerplate. Using `count_tokens()` on the Juno trace proves this objective-driven gatekeeper compressed 253 raw tokens down to a 110-token high-signal summary (a 56.5% reduction) before passing context to the Writer. When pitching this to an enterprise stakeholder running 10,000 market reports a day, that >50% token cut on the expensive final Writer call translates directly into thousands of dollars in monthly API savings, faster brief delivery for traders due to smaller context compute, and higher factual accuracy because distracting historical tangents are stripped before generation.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cema-proactive-context-mgmt',
        label: 'Proactive Context Management',
        category: 'optimization',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Strategic capability where a multi-agent system measures (`count_tokens`) and condenses (`agent_summarizer`) large text payloads before invoking expensive downstream generation steps.',
        formulaOrRule: 'R_{\\text{ctx}} = (1 - T_{\\text{summary}} / T_{\\text{raw}}) \\times 100\\%',
        whyItMatters:
          'Prevents context window overflows, cuts API token spend by over 50%, and increases downstream signal-to-noise ratio.',
      },
      {
        id: 'cema-summarizer-agent',
        label: 'Summarizer Gatekeeper Agent (`agent_summarizer`)',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Specialist agent in `agents.py` that takes `text_to_summarize` and `summary_objective` and returns a condensed `{"summary": ...}` MCP payload.',
        whyItMatters:
          'Shields downstream synthesis agents (`agent_writer`) from high-volume, low-relevance context.',
      },
      {
        id: 'cema-micro-context-engineering',
        label: 'Micro-Context Engineering (`summary_objective`)',
        category: 'adaptation',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Practice of crafting `summary_objective` as a constraint-driven miniature semantic blueprint specifying exact inclusion targets, exclusions, and output formats.',
        whyItMatters:
          'Repurposes a single generic Summarizer function into a high-precision extraction instrument across diverse enterprise tasks.',
      },
      {
        id: 'cema-count-tokens-gauge',
        label: 'Token Fuel Gauge (`count_tokens`)',
        category: 'evaluation',
        chapterNumber: 6,
        importance: 2,
        definition:
          '`helpers.py` utility built on `tiktoken` (`encoding_for_model` with `cl100k_base` fallback) that measures exact token counts of raw and summarized strings.',
        whyItMatters:
          'Provides empirical proof of token reduction (e.g., 253 tokens to 110 tokens = 56.5% reduction) in pre- and post-execution audits.',
      },
      {
        id: 'cema-dynamic-discovery-loop',
        label: 'Dynamic Registry Discovery Loop',
        category: 'architecture',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Four-step runtime handshake where the Planner queries `AgentRegistry.get_capabilities_description()`, discovers newly registered agents, and incorporates them into multi-step JSON plans.',
        whyItMatters:
          'Allows new specialist agents to be integrated into the workflow with zero code changes to `engine.py`.',
      },
      {
        id: 'cema-bilingual-writer',
        label: 'Bilingual Writer Unpacking (`agent_writer`)',
        category: 'data',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Conditional schema unpacking in `agent_writer` that checks `facts_data.get("facts")` (Researcher contract) and falls back to `facts_data.get("summary")` (Summarizer contract).',
        whyItMatters:
          'Eliminates data contract violations when the Planner dynamically chains Summarizer output into the Writer’s `facts` input.',
      },
      {
        id: 'cema-glass-box-roi',
        label: 'Glass-Box Enterprise Value Translation',
        category: 'evaluation',
        chapterNumber: 6,
        importance: 3,
        definition:
          'Methodology connecting technical trace metrics (token reduction percentage) to executive KPIs: monthly API cost savings, lower trader latency, and higher signal-to-noise quality.',
        whyItMatters:
          'Bridges context engineering mechanics with enterprise budget approval and production adoption.',
      },
    ],
    edges: [
      {
        source: 'cema-count-tokens-gauge',
        target: 'cema-proactive-context-mgmt',
        relationship: 'prerequisite_for',
        explanation:
          'Accurate token measurement via `count_tokens()` is required to establish baselines and verify context reduction ratios.',
      },
      {
        source: 'cema-micro-context-engineering',
        target: 'cema-summarizer-agent',
        relationship: 'optimizes',
        explanation:
          'A precise `summary_objective` directs `agent_summarizer` to strip irrelevant noise while retaining 100% of task-critical facts.',
      },
      {
        source: 'cema-dynamic-discovery-loop',
        target: 'cema-summarizer-agent',
        relationship: 'prerequisite_for',
        explanation:
          'Updating `get_capabilities_description()` in `AgentRegistry` enables the Planner to discover and schedule `agent_summarizer` dynamically.',
      },
      {
        source: 'cema-bilingual-writer',
        target: 'cema-summarizer-agent',
        relationship: 'mitigates',
        explanation:
          'Bilingual unpacking in `agent_writer` mitigates the schema mismatch between `{"facts": ...}` and `{"summary": ...}` during context chaining.',
      },
      {
        source: 'cema-summarizer-agent',
        target: 'cema-proactive-context-mgmt',
        relationship: 'part_of',
        explanation:
          '`agent_summarizer` executes the active compression step within the proactive context management workflow.',
      },
      {
        source: 'cema-proactive-context-mgmt',
        target: 'cema-glass-box-roi',
        relationship: 'optimizes',
        explanation:
          'Cutting downstream prompt tokens by 56.5% directly drives enterprise API cost savings, faster generation times, and higher signal-to-noise output.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 15,
    figuresIncluded: 6,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 6 sections and all 6 extracted figures (B36602_6_1.png through B36602_6_6.png), including glass-box architecture, count_tokens verification, agent_summarizer implementation, micro-context engineering, dynamic AgentRegistry discovery loop, bilingual agent_writer upgrade, Juno 253->110 token (56.5%) trace deconstruction, and 10,000-report enterprise ROI analysis.',
  },
};
