import { ChapterMastery } from '../../../types/book';

export const baafCh07Mastery: ChapterMastery = {
  chapterNumber: 7,
  chapterId: 'ch07',
  title: 'Multi-Agent Systems and Architectural Styles',
  subtitle:
    'Task Interdependence, Seven Coordination Topologies, Framework Mechanics, and Production Governance',
  readingTimeMinutes: 8,
  sourceWordCount: 15645,
  executiveThesis:
    'Single agents break down on multi-company financial workflows through context overflow, conflicting domain prompts, linear latency accumulation, and shallow generalist reasoning. Multi-agent systems earn their coordination cost only when subtasks exhibit pooled or sequential interdependence rather than tight reciprocal coupling. Production financial architectures combine static pipelines, parallel fan-out, and hierarchical authority chains with strict role-differentiated error handling and prompt-cached context isolation.',
  paradigmShift: {
    oldWay:
      'Prompting a single monolithic agent with dozens of tools across fundamentals, macroeconomics, risk, and compliance, or wrapping every deterministic calculation inside an uncoordinated fleet of conversational agents.',
    newWay:
      'Decomposing separable financial workflows into specialized agents governed by explicit architectural topologies, shared state schemas, deterministic tool boundaries, and hardcoded compliance veto hierarchies.',
    whyItChanged:
      'Empirical benchmarks show single-agent tool accuracy degrades sharply when unrelated domain instructions mix in one context window, while unmanaged multi-agent conversations suffer from superlinear token duplication and non-deterministic deadlocks.',
  },
  mentalModels: [
    {
      id: 'baaf-ch07-mm1',
      name: 'Thompson Task Interdependence Filter',
      tagline:
        'Parallelize pooled tasks, pipeline sequential tasks, and keep reciprocal tasks inside a single deep agent',
      naiveIntuition:
        'Adding more specialized agents to any complex financial problem will automatically improve accuracy and execution speed.',
      firstPrinciplesReality:
        'Organizational theory divides workflows into pooled (independent branches merged at the end), sequential (ordered stages), and reciprocal interdependence (each step mutates assumptions needed by the others). When reciprocal coupling is high, parallel subagents make conflicting implicit decisions and spend more tokens reconciling state than computing insights.',
      howToApply:
        'Add agent N+1 only when its subtask is pooled or sequential, carries domain instructions that dilute existing prompts, and delivers a measurable latency or quality gain exceeding its coordination overhead.',
    },
    {
      id: 'baaf-ch07-mm2',
      name: 'Handoff-vs-Tool Control Inversion',
      tagline:
        'Transferring conversation ownership is for triage; wrapping specialists as callable tools is for synthesis',
      naiveIntuition:
        'A manager agent can coordinate specialists simply by transferring the active chat session to each worker in turn.',
      firstPrinciplesReality:
        'A peer handoff transfers control of the user conversation permanently to the receiving specialist, preventing the manager from inspecting or aggregating multi-domain findings. Exposing specialists via agent-as-tool calls preserves top-level control so the orchestrator receives structured outputs and synthesizes a unified verdict.',
      howToApply:
        'Use explicit peer handoffs (`can_handoff_to`) for fixed linear pipelines or customer triage, and use `agent.as_tool()` whenever a central coordinator must reconcile multiple specialist reports.',
    },
    {
      id: 'baaf-ch07-mm3',
      name: 'Role-Differentiated Failure & Authority Hierarchy',
      tagline:
        'Degrade gracefully on missing analytics, but trigger an immediate hard stop when risk or compliance fails',
      naiveIntuition:
        'All agents in a multi-agent workflow should share the same retry, fallback, and graceful degradation policies when an API or model call fails.',
      firstPrinciplesReality:
        'Analytical agents and control agents carry asymmetric regulatory consequences: missing a liquidity commentary degrades report completeness, whereas bypassing a broken risk or sanctions check creates direct legal and capital liability. Furthermore, retrying side-effecting tools without idempotency keys risks executing duplicate market orders.',
      howToApply:
        'Hardcode the authority chain (`Compliance > Risk > Portfolio Manager > Trading Agent`), enforce idempotency keys on side-effecting tools, allow partial output for failed analytical nodes, and halt execution if any control node fails.',
    },
  ],
  customDiagrams: [
    {
      id: 'baaf-ch07-svg1',
      title: 'Seven Multi-Agent Architectural Topologies & Coupling Decision Tree',
      subtitle:
        'Matching task interdependence and authority requirements to canonical coordination blueprints',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" fill="#0f172a" rx="12" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">MULTI-AGENT COORDINATION TOPOLOGIES IN FINANCE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">From deterministic linear pipelines to hierarchical risk trees and adversarial peer consensus</text>

  <!-- Card 1: Sequential Pipeline -->
  <rect x="24" y="72" width="240" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="38" y="94" fill="#38bdf8" font-size="12" font-weight="700">1. SEQUENTIAL PIPELINE</text>
  <text x="38" y="110" fill="#94a3b8" font-size="10">Deterministic chain (KYC / Health Score)</text>
  <rect x="38" y="128" width="52" height="32" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="64" y="148" fill="#e2e8f0" font-size="9" text-anchor="middle">Ratios</text>
  <line x1="90" y1="144" x2="114" y2="144" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" />
  <rect x="114" y="128" width="56" height="32" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="142" y="148" fill="#e2e8f0" font-size="9" text-anchor="middle">Scoring</text>
  <line x1="170" y1="144" x2="194" y2="144" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" />
  <rect x="194" y="128" width="56" height="32" rx="4" fill="#0f172a" stroke="#10b981" />
  <text x="222" y="148" fill="#10b981" font-size="9" text-anchor="middle">Verdict</text>
  <text x="38" y="185" fill="#cbd5e1" font-size="10">+ Replayable regulatory audit trail</text>
  <text x="38" y="202" fill="#f43f5e" font-size="10">- Latency sums across all stages</text>

  <!-- Card 2: Orchestrator-Worker & Hierarchical -->
  <rect x="280" y="72" width="240" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="294" y="94" fill="#a855f7" font-size="12" font-weight="700">2. HIERARCHICAL + PARALLEL</text>
  <text x="294" y="110" fill="#94a3b8" font-size="10">CRO supervisor with domain sub-teams</text>
  <rect x="365" y="118" width="70" height="24" rx="4" fill="#0f172a" stroke="#a855f7" />
  <text x="400" y="134" fill="#e2e8f0" font-size="9" text-anchor="middle">CRO Lead</text>
  <line x1="380" y1="142" x2="325" y2="158" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="400" y1="142" x2="400" y2="158" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="420" y1="142" x2="475" y2="158" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="6 4" />
  <rect x="296" y="158" width="58" height="24" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="325" y="174" fill="#cbd5e1" font-size="9" text-anchor="middle">Market</text>
  <rect x="371" y="158" width="58" height="24" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="400" y="174" fill="#cbd5e1" font-size="9" text-anchor="middle">Credit</text>
  <rect x="446" y="158" width="58" height="24" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="475" y="174" fill="#cbd5e1" font-size="9" text-anchor="middle">Ops Risk</text>
  <text x="294" y="202" fill="#10b981" font-size="10">+ Sub-agent context window isolation</text>

  <!-- Card 3: Peer-to-Peer & Evaluator Loop -->
  <rect x="536" y="72" width="240" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="550" y="94" fill="#f59e0b" font-size="12" font-weight="700">3. EVALUATOR &amp; CONTRACT-NET</text>
  <text x="550" y="110" fill="#94a3b8" font-size="10">Iterative critique &amp; confidence bidding</text>
  <rect x="556" y="128" width="76" height="32" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="594" y="148" fill="#e2e8f0" font-size="9" text-anchor="middle">Generator</text>
  <path d="M 632 136 L 676 136" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" />
  <path d="M 676 152 L 632 152" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" />
  <rect x="676" y="128" width="80" height="32" rx="4" fill="#0f172a" stroke="#10b981" />
  <text x="716" y="148" fill="#10b981" font-size="9" text-anchor="middle">Backtest Critic</text>
  <text x="550" y="185" fill="#cbd5e1" font-size="10">+ Executable ground-truth checks</text>
  <text x="550" y="202" fill="#f43f5e" font-size="10">- Requires hard max_iterations cap</text>

  <!-- Bottom Section: Production Governance & Conflict Resolution Hierarchy -->
  <rect x="24" y="240" width="752" height="156" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
  <text x="42" y="266" fill="#f8fafc" font-size="13" font-weight="700">REGULATED CONFLICT RESOLUTION &amp; CONTEXT ISOLATION PIPELINE</text>
  <text x="42" y="284" fill="#94a3b8" font-size="10">Frozen data snapshot feeds parallel specialists; deterministic authority chain resolves disagreements</text>

  <rect x="42" y="302" width="135" height="68" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="109" y="326" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">Data Snapshot</text>
  <text x="109" y="344" fill="#cbd5e1" font-size="9" text-anchor="middle">Point-in-time freeze</text>
  <text x="109" y="358" fill="#64748b" font-size="9" text-anchor="middle">Shared State / Cache</text>

  <line x1="177" y1="336" x2="218" y2="336" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="218" y="302" width="165" height="68" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
  <text x="300" y="326" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">Parallel Specialists</text>
  <text x="300" y="344" fill="#cbd5e1" font-size="9" text-anchor="middle">Summarize 50k -> 1k tok</text>
  <text x="300" y="358" fill="#64748b" font-size="9" text-anchor="middle">Haiku / Sonnet Tier</text>

  <line x1="383" y1="336" x2="424" y2="336" stroke="#a855f7" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="424" y="302" width="155" height="68" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="501" y="326" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">PM Synthesizer</text>
  <text x="501" y="344" fill="#cbd5e1" font-size="9" text-anchor="middle">Weighs domain scores</text>
  <text x="501" y="358" fill="#64748b" font-size="9" text-anchor="middle">Opus Frontier Tier</text>

  <line x1="579" y1="336" x2="618" y2="336" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="618" y="302" width="138" height="68" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2" />
  <text x="687" y="324" fill="#10b981" font-size="11" font-weight="700" text-anchor="middle">Compliance Veto</text>
  <text x="687" y="342" fill="#cbd5e1" font-size="9" text-anchor="middle">Hard Policy Guardrail</text>
  <text x="687" y="358" fill="#f43f5e" font-size="9" text-anchor="middle">Fail = Hard Halt</text>
</svg>`,
      bierutCaption:
        'Architectural topologies govern how authority and state move between agents, while frozen data snapshots and deterministic compliance vetoes keep multi-agent execution auditable.',
      annotations: [
        {
          step: '1',
          label: 'Sequential vs. Hierarchical Isolation',
          explanation:
            'Linear pipelines maximize replayability for compliance audits, while hierarchical trees isolate 50,000+ raw tokens inside sub-agent windows and pass 1,000-token summaries upward.',
        },
        {
          step: '2',
          label: 'Grounded Evaluator Loops',
          explanation:
            'Evaluator-optimizer cycles for trading code must run deterministic backtests rather than relying on pure LLM critique, capped at 2 to 4 iterations.',
        },
        {
          step: '3',
          label: 'Asymmetric Conflict & Failure Governance',
          explanation:
            'Compliance and risk nodes hold absolute veto authority over portfolio and trading nodes, and any failure in a control node halts execution immediately.',
        },
      ],
    },
    {
      id: 'baaf-ch07-svg2',
      title: 'Framework Coordination Mechanics: LlamaIndex vs. OpenAI SDK vs. AutoGen',
      subtitle:
        'Comparing static state handoffs, dynamic agent-as-tool synthesis, and conversational code execution',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" fill="#0f172a" rx="12" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">FRAMEWORK COORDINATION MECHANICS FOR FINANCIAL HEALTH ANALYSIS</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Three implementations of the same Fundamental -> Profitability -> Liquidity -> Synthesis workflow</text>

  <!-- Column 1: LlamaIndex AgentWorkflow -->
  <rect x="24" y="74" width="240" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="100" fill="#38bdf8" font-size="12" font-weight="700">LLAMAINDEX AGENTWORKFLOW</text>
  <text x="40" y="116" fill="#94a3b8" font-size="10">Static Handoff + Shared Context Store</text>

  <rect x="44" y="134" width="200" height="38" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="144" y="152" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">FundamentalAgent</text>
  <text x="144" y="165" fill="#38bdf8" font-size="9" text-anchor="middle">can_handoff_to=["Profitability"]</text>

  <line x1="144" y1="172" x2="144" y2="196" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" />

  <rect x="44" y="196" width="200" height="38" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="144" y="214" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">Profitability &amp; Liquidity</text>
  <text x="144" y="227" fill="#38bdf8" font-size="9" text-anchor="middle">Reads/Writes ctx.store["state"]</text>

  <line x1="144" y1="234" x2="144" y2="258" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" />

  <rect x="44" y="258" width="200" height="38" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="144" y="276" fill="#10b981" font-size="10" font-weight="600" text-anchor="middle">SupervisorAgent</text>
  <text x="144" y="289" fill="#94a3b8" font-size="9" text-anchor="middle">can_handoff_to=[] (Terminal)</text>

  <text x="40" y="326" fill="#cbd5e1" font-size="10">Predictability: High (Design-time)</text>
  <text x="40" y="344" fill="#cbd5e1" font-size="10">State: Explicit ctx.store dictionary</text>
  <text x="40" y="362" fill="#94a3b8" font-size="9">Best for: Audited KYC &amp; scoring</text>

  <!-- Column 2: OpenAI Agents SDK -->
  <rect x="280" y="74" width="240" height="320" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="296" y="100" fill="#a855f7" font-size="12" font-weight="700">OPENAI AGENTS SDK</text>
  <text x="296" y="116" fill="#94a3b8" font-size="10">Leader-Follower via agent.as_tool()</text>

  <rect x="300" y="134" width="200" height="44" rx="5" fill="#0f172a" stroke="#a855f7" />
  <text x="400" y="154" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">Health Assessment Manager</text>
  <text x="400" y="168" fill="#a855f7" font-size="9" text-anchor="middle">Retains top-level control</text>

  <line x1="355" y1="178" x2="345" y2="216" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="6 4" />
  <line x1="445" y1="178" x2="455" y2="216" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="6 4" />

  <rect x="296" y="216" width="98" height="52" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="345" y="238" fill="#e2e8f0" font-size="9" font-weight="600" text-anchor="middle">Profitability</text>
  <text x="345" y="254" fill="#94a3b8" font-size="8" text-anchor="middle">.as_tool()</text>

  <rect x="406" y="216" width="98" height="52" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="455" y="238" fill="#e2e8f0" font-size="9" font-weight="600" text-anchor="middle">Liquidity</text>
  <text x="455" y="254" fill="#94a3b8" font-size="8" text-anchor="middle">.as_tool()</text>

  <text x="296" y="326" fill="#cbd5e1" font-size="10">Predictability: Medium (Runtime)</text>
  <text x="296" y="344" fill="#cbd5e1" font-size="10">State: Tool call return payloads</text>
  <text x="296" y="362" fill="#94a3b8" font-size="9">Best for: Dynamic query routing</text>

  <!-- Column 3: AutoGen Conversational -->
  <rect x="536" y="74" width="240" height="320" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="552" y="100" fill="#f59e0b" font-size="12" font-weight="700">AUTOGEN (CONVERSATIONAL)</text>
  <text x="552" y="116" fill="#94a3b8" font-size="10">Message Passing + Code Execution</text>

  <rect x="556" y="134" width="200" height="42" rx="5" fill="#0f172a" stroke="#f59e0b" />
  <text x="656" y="152" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">AssistantAgent (LLM)</text>
  <text x="656" y="166" fill="#f59e0b" font-size="9" text-anchor="middle">Writes Python analysis code</text>

  <line x1="636" y1="176" x2="636" y2="222" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" />
  <line x1="676" y1="222" x2="676" y2="176" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" />

  <rect x="556" y="222" width="200" height="42" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="656" y="240" fill="#10b981" font-size="10" font-weight="600" text-anchor="middle">UserProxyAgent (Executor)</text>
  <text x="656" y="254" fill="#94a3b8" font-size="9" text-anchor="middle">human_input_mode="NEVER"</text>

  <text x="552" y="326" fill="#cbd5e1" font-size="10">Predictability: Low (Emergent)</text>
  <text x="552" y="344" fill="#cbd5e1" font-size="10">State: Shared chat_history + cost</text>
  <text x="552" y="362" fill="#94a3b8" font-size="9">Best for: Exploratory quant coding</text>
</svg>`,
      bierutCaption:
        'Framework selection is a control-flow decision: LlamaIndex locks transitions at design time, OpenAI Agents SDK delegates routing to a synthesizing manager, and AutoGen coordinates via iterative code execution.',
      annotations: [
        {
          step: '1',
          label: 'Explicit State Store (LlamaIndex)',
          explanation:
            'Tools fetch financial ratios into `ctx.store` alongside scoring rubrics, while `can_handoff_to=[]` on the final supervisor prevents infinite handoff loops.',
        },
        {
          step: '2',
          label: 'Agents-as-Tools (OpenAI SDK)',
          explanation:
            'Wrapping specialists with `.as_tool()` allows the manager to invoke one or both analysts dynamically and synthesize their returned scores.',
        },
        {
          step: '3',
          label: 'Termination Discipline (AutoGen)',
          explanation:
            'Autonomous code loops require `human_input_mode="NEVER"`, a strict `max_turns` cap, and a system prompt forbidding `TERMINATE` in the same message as unexecuted code.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'baaf-ch07-sec1',
      sectionNumber: '7.1',
      title: 'Single-Agent Limits & The Seven Multi-Agent Architectural Styles',
      subtitle:
        'Why single agents fail at portfolio scale and how seven structural topologies organize distributed reasoning',
      coreMechanism:
        'A single agent evaluating a 20-stock portfolio across fundamentals, technicals, macroeconomics, and compliance hits four structural limits: context overflow that degrades recall of early holdings, conflicting objectives between growth and risk prompts, linear latency accumulation across sequential tool calls, and diluted domain depth. Multi-agent systems resolve these bottlenecks when work cannot be scripted in advance, spans interfering domains, and splits into independent branches. However, per Thompson’s interdependence typology, tasks with tight reciprocal interdependence resist decomposition because parallel subagents make conflicting implicit assumptions.\n\nSeven architectural styles govern financial MAS design: (1) Sequential pipelines pass state in a fixed, auditable line; (2) Leader-follower (orchestrator-worker) uses a central coordinator to delegate to stateless workers; (3) Hierarchical trees add domain sub-leaders (such as Market, Credit, and Operational Risk leads under a CRO agent) to isolate context windows; (4) Peer-to-peer networks use majority voting, weighted consensus, structured debate, or convergence rounds; (5) Parallelization uses sectioning for speed or cross-model voting for hallucination checks; (6) Evaluator-optimizer loops pair a generator with a backtest-grounded critic; and (7) Contract-net marketplaces broadcast queries to specialists that submit confidence bids.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit Task Coupling & Communication Overhead',
          detail:
            'Classify the workflow as pooled, sequential, or reciprocal interdependence and verify that inter-agent token exchange is smaller than independent computation.',
        },
        {
          step: '2',
          title: 'Select Primary Topology & Consensus Rule',
          detail:
            'Choose sequential or hierarchical structures for regulated auditability, parallel sectioning for batch latency reduction, or peer debate for high-stakes thesis validation.',
        },
        {
          step: '3',
          title: 'Compose Hybrid Production Patterns',
          detail:
            'Combine 2–3 styles in practice, such as freezing a data snapshot beneath a hierarchical CRO supervisor, routing via a lightweight classifier into a pipeline, or escalating edge cases from a generalist agent.',
        },
      ],
      keyTakeaways: [
        'Design patterns (ReAct, reflection) govern how a single agent thinks inside its context window, whereas architectural styles define the organizational topology and authority graph across agents.',
        'Evaluator-optimizer loops for trading strategies must ground the critic in executable backtest metrics (returns, drawdown, turnover) rather than relying on pure LLM plausibility checks.',
        'Production systems evolve in five measured phases—from a single tool-using agent to intent routing, domain specialization, multi-agent coordination, and finally evaluator quality assurance.',
      ],
      commonPitfalls: [
        'Splitting tightly coupled coding or stateful modeling tasks across parallel subagents that cannot see each other’s implicit decisions.',
        'Using a contract-net bidding broadcast when specialist domains do not overlap, paying N extra LLM calls per query when a simple classifier router would suffice.',
      ],
      figures: [
        {
          file: 'B32414_7_1.png',
          originalLabel: 'Figure 7.1 – Design patterns and architectural styles',
          bierutTitle: 'Separate Individual Agent Cognition from System-Level Topology',
          editorialAnalysis:
            'Contrasts intra-agent cognitive patterns (ReAct, planning, tool use) with inter-agent organizational structures (sequential, hierarchical, peer-to-peer). Real financial systems embed cognitive design patterns inside nodes of an architectural style.',
          keyTakeaways: [
            'Design patterns define how one employee works; architectural styles define the firm’s org chart.',
          ],
        },
        {
          file: 'B32414_7_4.png',
          originalLabel: 'Figure 7.4 – Hierarchical architecture for enterprise risk management',
          bierutTitle: 'Isolate Domain Context Windows Through Multi-Tier Risk Sub-Leaders',
          editorialAnalysis:
            'Illustrates a Chief Risk Officer (CRO) agent delegating to Market, Credit, and Operational Risk team leads, each managing specialist sub-agents (VaR, stress test, counterparty, fraud). Each sub-leader compresses raw findings into a domain summary before reporting upward.',
          keyTakeaways: [
            'Sub-tree isolation prevents 50,000+ raw tokens from flooding the top-level synthesizer’s context window.',
          ],
        },
        {
          file: 'B32414_7_9.png',
          originalLabel: 'Figure 7.9 – Hybrid hierarchical + parallel architecture for financial risk assessment',
          bierutTitle: 'Freeze Point-in-Time Snapshots Before Parallel Risk Fan-Out',
          editorialAnalysis:
            'Shows a data snapshot agent locking market and portfolio inputs before four risk domain agents execute concurrently and feed a weighted risk aggregator. Without the initial snapshot freeze, market and credit agents evaluate inconsistent timestamps.',
          keyTakeaways: [
            'Data snapshot isolation is the financial multi-agent equivalent of database transaction isolation.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch07-sec2',
      sectionNumber: '7.2',
      title: 'Inter-Agent Coordination, Conflict Resolution & Framework Mechanics',
      subtitle:
        'Message passing versus shared state, regulatory handoff traces, authority chains, and three framework paradigms',
      coreMechanism:
        'Multi-agent coordination relies on two communication substrates: discrete message passing (which provides an automatic event log and strict state encapsulation) and shared state workspaces (such as LlamaIndex `Context`, LangGraph `State`, or external memory layers like Mem0, Letta, and Zep that act as modern blackboards). Control transfers via handoffs, which in regulated finance must record not only the target agent but also the explicit compliance or risk reason triggering the transfer. When agents disagree, systems resolve conflicts through four mechanisms: instant hierarchical authority (`Compliance > Risk > PM > Trader`), deterministic policy guardrails (e.g., max 5% NAV per position), iterative compromise negotiation, or game-theoretic scoring of competing proposals.\n\nImplementing a four-agent financial health analyzer across three frameworks exposes how control flow maps to code. LlamaIndex `AgentWorkflow` enforces a static sequential chain via `can_handoff_to` lists and stores ratios and threshold rubrics in `ctx.store`, requiring `can_handoff_to=[]` on the final `SupervisorAgent` and a raised `max_iterations=60` ceiling. The OpenAI Agents SDK implements leader-follower routing by wrapping specialists with `agent.as_tool()` rather than peer `handoffs`, keeping the manager in control to synthesize scores. AutoGen coordinates via multi-turn conversation between an `AssistantAgent` and a code-executing `UserProxyAgent` (`human_input_mode="NEVER"`).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Separate Deterministic Tool Extraction from LLM Judgment',
          detail:
            'Write Python tools to fetch raw financial ratios and attach sector-specific threshold rubrics in shared state, restricting agent LLMs to scoring and justification.',
        },
        {
          step: '2',
          title: 'Bind Control Flow to Predictability Requirements',
          detail:
            'Use explicit `can_handoff_to` edges for audited sequential pipelines, `agent.as_tool()` for manager-synthesized routing, and conversational loops only for open-ended code exploration.',
        },
        {
          step: '3',
          title: 'Enforce Mechanical Resource & Conflict Rules',
          detail:
            'Allocate API rate limits and compute slots via deterministic priority queues (prioritizing compliance checks) while reserving LLM negotiation or contract-net bidding for risk-budget allocation.',
        },
      ],
      keyTakeaways: [
        'Applying industrial liquidity rubrics (current ratio 1.5–3.0, debt-to-equity 0.3–1.5) to banks like JPMorgan produces confident nonsense; bank analysis requires sector routing to CET1 and Liquidity Coverage Ratio (LCR) metrics.',
        'Omitting `can_handoff_to=[]` on the final agent in LlamaIndex `AgentWorkflow` defaults to allowing handoffs to any agent, risking non-terminating routing loops.',
        'Mechanical contention for API rate limits and compute belongs in deterministic token buckets and priority queues, never in LLM-to-LLM negotiation.',
      ],
      commonPitfalls: [
        'Using OpenAI SDK `handoffs` instead of `agent.as_tool()` when the manager agent needs to collect and synthesize outputs from multiple specialists.',
        'Allowing AutoGen’s `AssistantAgent` to emit `TERMINATE` in the same message as generated Python code before `UserProxyAgent` executes and returns the output.',
      ],
      figures: [
        {
          file: 'B32414_7_3.png',
          originalLabel: 'Figure 7.3 – Orchestrator–worker architecture',
          bierutTitle: 'Route All Worker Outputs Back Through a Single Synthesizing Leader',
          editorialAnalysis:
            'Depicts a central orchestrator decomposing a request across independent worker agents that never communicate laterally. Centralizing return paths keeps worker modules stateless, replaceable, and simple to trace.',
          keyTakeaways: [
            'Stateless workers with zero lateral communication eliminate circular conversation deadlocks.',
          ],
        },
        {
          file: 'B32414_7_8.png',
          originalLabel: 'Figure 7.8 – Contract-net marketplace architecture',
          bierutTitle: 'Replace Brittle Routing Rules with Self-Assessed Specialist Bids',
          editorialAnalysis:
            'Traces Reid Smith’s Contract Net Protocol adapted for LLMs: a mediator broadcasts an interest-rate query, specialists submit confidence bids (Macro 0.92, Fixed Income 0.78, Equity 0.45, Credit declines), and the top bidders execute.',
          keyTakeaways: [
            'Contract-net routing adapts dynamically when specialist capabilities overlap, at the cost of N bidding calls per query.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch07-sec3',
      sectionNumber: '7.3',
      title: 'Production Engineering: Observability, Fault Isolation & Token Economics',
      subtitle:
        'Correlation tracing, idempotency guards, superlinear cost controls, and four-tier multi-agent testing',
      coreMechanism:
        'Deploying multi-agent systems in regulated finance requires end-to-end reconstructability: every agent turn must log a request-wide correlation ID, timestamp, agent name, input state, tool arguments, output, token count, and explicit handoff reason via OpenTelemetry-compatible tracing (such as Langfuse or Arize Phoenix). Error recovery across agent boundaries uses four patterns—exponential backoff retries, simpler fallback models, graceful partial degradation, and circuit breakers—governed by two strict financial overrides: retries are restricted to read-only tools unless side-effecting order or filing tools carry idempotency keys and state checkpoints, and any failure in a risk or compliance agent halts the entire pipeline immediately.\n\nMulti-agent token consumption scales superlinearly (~15x a plain chat interaction vs. ~4x for a single agent) because system prompts, tool schemas, and conversation histories are re-read at every handoff. Engineers control costs and context overflow through five levers in descending impact: provider-side prompt caching of byte-identical prefixes, model tiering (Haiku/mini for extraction, Opus/GPT-4o for synthesis), entry-point agent pruning via classifiers, shared-state tool result caching, and hard per-agent token and iteration caps (`asyncio.gather(..., return_exceptions=True)` for fault-isolated batch runs).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Propagate Correlation IDs & Enforce Idempotency',
          detail:
            'Attach a unique correlation ID at request entry across all handoffs and classify every tool as read-only or side-effecting before enabling automatic retries.',
        },
        {
          step: '2',
          title: 'Compress Context & Tier Models by Cognitive Load',
          detail:
            'Lock byte-identical system prefixes for prompt caching, filter tool payloads to 2–3 years of data, summarize sub-agent outputs to 500–1,000 tokens, and assign frontier models only to synthesizers.',
        },
        {
          step: '3',
          title: 'Verify Across Four Non-Deterministic Testing Tiers',
          detail:
            'Run isolated unit tests with frozen fixtures, seam integration tests across state handoffs, end-to-end structural invariant checks, and adversarial conflict-injection tests.',
        },
      ],
      keyTakeaways: [
        'Multi-agent cost growth is driven primarily by input context duplication across handoffs rather than output generation, making byte-identical prefix caching the highest-leverage optimization.',
        'When running parallel multi-company pipelines with `asyncio.gather`, always set `return_exceptions=True` so a single ticker’s API timeout degrades one row rather than crashing the portfolio batch.',
        'Avoid over-agentification: currency conversion, ratio math, and rubric formatting belong in deterministic Python functions, never inside LLM agents.',
      ],
      commonPitfalls: [
        'Retrying a timed-out order execution or regulatory filing agent without an idempotency key and state checkpoint, causing duplicate live executions.',
        'Writing exact-string equality assertions in multi-agent tests instead of asserting on structural invariants and score consistency against frozen tool fixtures.',
      ],
      figures: [
        {
          file: 'B32414_7_11.png',
          originalLabel: 'Figure 7.11 – Hybrid single-agent + multi-agent escalation',
          bierutTitle: 'Reserve Multi-Agent Token Spend for High-Stakes Escalations Only',
          editorialAnalysis:
            'Shows a single competent generalist agent handling 80% of routine inquiries (balance checks, history) alone and waking a multi-agent fraud or compliance team only when an anomaly trigger fires.',
          keyTakeaways: [
            'Escalation hybrids capture multi-agent depth on complex edge cases while paying single-agent token economics on routine traffic.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Multi-Agent Architectural Styles & Framework Selection Matrix',
      description:
        'Comparing the seven architectural topologies across control locus, latency profile, auditability, failure blast radius, and primary financial domain.',
      headers: [
        'Architectural Style',
        'Control & Routing',
        'Latency Profile',
        'Regulatory Auditability',
        'Primary Failure Mode',
        'Best-Fit Financial Workflow',
      ],
      rows: [
        [
          'Sequential Pipeline (LlamaIndex Workflow)',
          'Static design-time chain (`can_handoff_to`)',
          'High (sum of all stages)',
          'Very High (deterministic linear trace)',
          'Single stage block halts entire pipeline',
          'KYC/AML onboarding & rubric ratio scoring',
        ],
        [
          'Orchestrator–Worker (OpenAI SDK `.as_tool()`)',
          'Central leader delegates & synthesizes',
          'Low–Medium (workers run in parallel)',
          'High (all results route through leader)',
          'Leader misrouting or context bottleneck',
          'Multi-aspect single-ticker fundamental review',
        ],
        [
          'Hierarchical Tree',
          'Multi-tier leaders (`CRO -> Risk Leads`)',
          'Medium (multi-hop delegation overhead)',
          'Medium (requires cross-tier correlation IDs)',
          'Weak sub-leader silently degrades subtree',
          'Enterprise bank risk management (Market/Credit/Ops)',
        ],
        [
          'Peer-to-Peer + Consensus (AutoGen GroupChat)',
          'Decentralized turns + voting/debate/convergence',
          'High (multi-round argument exchange)',
          'Low (non-deterministic conversation path)',
          'Circular deadlock or homogeneous model groupthink',
          'Multi-philosophy equity research & thesis challenge',
        ],
        [
          'Parallelization (Sectioning / Voting)',
          'Dispatcher fans out independent branches',
          'Lowest (bounded by slowest single branch)',
          'High (independent per-entity logs)',
          'Premature parallelization on coupled state',
          '20-stock portfolio screening & cross-LLM verification',
        ],
        [
          'Evaluator–Optimizer',
          'Iterative generator + critic feedback loop',
          'Medium–High (2 to 4 revision cycles)',
          'High (explicit rubric feedback trail)',
          'Infinite revision loop or ungrounded LLM critic',
          'Quantitative strategy code & compliance report refinement',
        ],
        [
          'Contract-Net Marketplace',
          'Mediator broadcasts; specialists submit bids',
          'High (+N bidding LLM calls per query)',
          'Medium (explicit confidence bid log)',
          'Poorly calibrated self-confidence or zero bids',
          'Heterogeneous client desk inquiries with overlapping domains',
        ],
      ],
      verdictRule:
        'Default to a single agent with deterministic tools for tightly coupled tasks; use Sequential or Hierarchical+Parallel topologies when regulatory auditability and context isolation are mandatory; add Peer Debate or Evaluator loops only where adversarial stress-testing or executable backtest verification justifies the extra token multiplier.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'baaf-ch07-scen1',
      title: 'Sector-Blind Liquidity Rubrics & Non-Terminating Handoffs on Bank Stocks',
      roleAndContext:
        'Lead AI Architect deploying a 4-agent LlamaIndex `AgentWorkflow` (`FundamentalAgent -> ProfitabilityAgent -> LiquidityAgent -> SupervisorAgent`) across a 5-stock portfolio (`AAPL`, `MSFT`, `GOOGL`, `NVDA`, `JPM`).',
      symptomOrFailure:
        'The pipeline intermittently crashes with `WorkflowRuntimeError: Max iterations (20) exceeded` on retry attempts, and when it succeeds on JPMorgan (`JPM`), the `LiquidityAgent` flags an urgent insolvency warning due to JPM’s debt-to-equity ratio and missing industrial current ratio.',
      naiveFixAndWhyItFails:
        'Prompting the `LiquidityAgent` to "be flexible with ratios" and suppressing exceptions in the outer loop fails because the default 20-step workflow ceiling is still exhausted by 4 agents making tool calls and handoffs, and industrial solvency thresholds are structurally meaningless for bank balance sheets.',
      firstPrinciplesSolution:
        'Set `can_handoff_to=[]` explicitly on `SupervisorAgent`, raise `max_iterations=60` on `workflow.run()`, wrap portfolio execution in `asyncio.gather(*tasks, return_exceptions=True)`, and add a sector-routing classifier that swaps industrial liquidity rubrics for bank-specific CET1 and Liquidity Coverage Ratio (LCR) thresholds.',
      measurableOutcome:
        '100% completion rate across 5-company batch runs in 2.1 minutes (down from 9.8 minutes sequential) with zero false-positive bank insolvency alerts.',
    },
    {
      id: 'baaf-ch07-scen2',
      title: 'Superlinear Token Explosion & Duplicate Order Execution in Enterprise Risk',
      roleAndContext:
        'Production Engineering Team scaling an orchestrator-worker portfolio rebalancing system that processes 20 holdings and submits hedging orders via an execution agent.',
      symptomOrFailure:
        'Monthly LLM API spend jumps 14x over single-agent projections as the supervisor’s context window accumulates 60,000+ raw financial tokens per run, and a transient gateway timeout triggers an exponential-backoff retry that executes the same futures hedge twice.',
      naiveFixAndWhyItFails:
        'Truncating the conversation history arbitrarily every 5 turns and disabling all retries fixes the duplicate order but causes the supervisor to forget earlier holdings and crash on routine market-data API blips.',
      firstPrinciplesSolution:
        'Refactor into a Hierarchical + Parallel architecture where sub-agents isolate raw data and return 600-token summaries over a frozen data snapshot; lock byte-identical system prefixes for prompt caching; tier workers to Haiku/Sonnet; and classify tools into read-only (retryable) versus side-effecting order tools guarded by mandatory idempotency keys and state checkpoints.',
      measurableOutcome:
        'Per-portfolio token cost drops by 68%, supervisor reasoning recall across all 20 holdings reaches 100%, and duplicate trade executions drop to zero.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'baaf-ch07-q1',
        scenarioPrompt:
          'You are designing an AI system using the OpenAI Agents SDK where a `Health Assessment Manager` must invoke both a `Profitability Analyst` and a `Liquidity Analyst`, inspect both of their scored reports, and write a unified executive synthesis. Which mechanism should connect the manager to the analysts?',
        options: [
          {
            label: 'A',
            text: 'Configure peer `handoffs=[profitability_analyst, liquidity_analyst]` on the manager agent so each specialist takes over the user conversation.',
            isCorrect: false,
            explanation:
              'In the OpenAI Agents SDK, `handoffs` transfers control of the conversation permanently to the specialist, meaning the manager never receives the specialist’s output to synthesize.',
          },
          {
            label: 'B',
            text: 'Expose each specialist via `.as_tool()` on the manager agent so the manager invokes them as callable tools, receives their outputs, and retains control to synthesize.',
            isCorrect: true,
            explanation:
              '`agent.as_tool()` wraps a specialist agent as a callable tool that returns its result directly to the calling manager, preserving central control for multi-agent synthesis.',
          },
          {
            label: 'C',
            text: 'Use a Contract-Net mediator to broadcast the prompt and let the two analysts bid on which one should answer the user.',
            isCorrect: false,
            explanation:
              'Both profitability and liquidity analyses are required for every full health assessment; bidding adds unnecessary LLM calls without helping the manager synthesize both domains.',
          },
          {
            label: 'D',
            text: 'Place all three agents into an unmoderated peer-to-peer chat loop without shared state.',
            isCorrect: false,
            explanation:
              'Unmoderated peer chat lacks deterministic synthesis control and wastes tokens replaying message history.',
          },
        ],
      },
      {
        id: 'baaf-ch07-q2',
        scenarioPrompt:
          'During a turbulent market open, a multi-agent trading pipeline experiences two simultaneous agent failures: the `SentimentAgent` times out fetching news headlines, and the `ComplianceAgent` crashes due to a sanctions database connection error. How should the production error handler respond?',
        options: [
          {
            label: 'A',
            text: 'Apply graceful degradation to both failures: proceed with the trade using fundamental and technical scores while logging that sentiment and compliance were unavailable.',
            isCorrect: false,
            explanation:
              'Proceeding with a trade when a compliance or risk control agent fails violates regulatory boundaries and exposes the firm to severe legal and financial liability.',
          },
          {
            label: 'B',
            text: 'Halt the workflow immediately for the `SentimentAgent` failure, but route the `ComplianceAgent` check to a creative negotiation agent.',
            isCorrect: false,
            explanation:
              'This reverses the required criticality: analytical gaps can degrade gracefully, whereas compliance checks are non-negotiable hard gates.',
          },
          {
            label: 'C',
            text: 'Differentiate by agent role: allow graceful degradation or fallback for the analytical `SentimentAgent` (flagging the missing signal), but trigger an immediate hard stop for the failed `ComplianceAgent`.',
            isCorrect: true,
            explanation:
              'Error handling in financial MAS must be role-differentiated: analytical failures can degrade gracefully with explicit disclaimers, whereas risk and compliance failures must block execution unconditionally.',
          },
          {
            label: 'D',
            text: 'Blindly retry the entire pipeline including the order-execution tool up to 5 times without checkpointing.',
            isCorrect: false,
            explanation:
              'Blindly retrying side-effecting tools without idempotency keys and state checkpoints risks double-submitting live orders.',
          },
        ],
      },
      {
        id: 'baaf-ch07-q3',
        scenarioPrompt:
          'A quantitative research team uses an Evaluator–Optimizer loop where a `strategy_generator` agent writes Python mean-reversion trading code and a `strategy_evaluator` agent critiques it over 3 iterations. In production, the approved strategies frequently lose money or fail at runtime. What is the primary architectural flaw?',
        options: [
          {
            label: 'A',
            text: 'The `strategy_evaluator` is judging code purely via LLM text inspection instead of executing a deterministic backtest and feeding measured Sharpe ratio, drawdown, and turnover back to the generator.',
            isCorrect: true,
            explanation:
              'LLMs are unreliable at self-correcting quantitative code through text inspection alone; the evaluator must be grounded in executable checks and real backtest metrics.',
          },
          {
            label: 'B',
            text: 'The loop is capped at 3 iterations instead of running an unbounded number of iterations.',
            isCorrect: false,
            explanation:
              'Unbounded evaluator-optimizer loops risk infinite revision cycles and runaway token costs; 2 to 4 bounded iterations is the recommended ceiling.',
          },
          {
            label: 'C',
            text: 'The generator agent is using a smaller model than the evaluator agent.',
            isCorrect: false,
            explanation:
              'Pairing a smaller, faster generator with a stronger evaluator model is a valid cost-optimization pattern when the evaluator is grounded in executable checks.',
          },
          {
            label: 'D',
            text: 'The strategy includes transaction cost and slippage parameters.',
            isCorrect: false,
            explanation:
              'Incorporating transaction costs and slippage is required for realistic strategy evaluation, not a flaw.',
          },
        ],
      },
      {
        id: 'baaf-ch07-q4',
        scenarioPrompt:
          'According to James Thompson’s task interdependence typology and Cognition/Anthropic multi-agent benchmarks, under which condition is a single agent with engineered context superior to a parallel multi-agent team?',
        options: [
          {
            label: 'A',
            text: 'When screening 20 independent equities across separate financial statements before market open.',
            isCorrect: false,
            explanation:
              'Multi-company screening exhibits pooled interdependence with zero cross-company coupling, making it ideal for parallel multi-agent sectioning.',
          },
          {
            label: 'B',
            text: 'When subtasks exhibit tight reciprocal interdependence—where every step makes implicit decisions that immediately constrain the next step—causing communication tokens to exceed computation tokens.',
            isCorrect: true,
            explanation:
              'Reciprocal interdependence means parallel agents lacking full shared history make conflicting implicit assumptions, making a single deep agent with unified context more reliable.',
          },
          {
            label: 'C',
            text: 'When a workflow requires combining distinct domain prompts (fundamentals, macro, compliance) that would otherwise act as distractor noise in one prompt.',
            isCorrect: false,
            explanation:
              'Separating interfering domain prompts across specialists is one of the three primary reasons to adopt a multi-agent system.',
          },
          {
            label: 'D',
            text: 'When running cross-model verification between GPT-4o and Claude Sonnet to catch factual hallucinations.',
            isCorrect: false,
            explanation:
              'Cross-model verification is a classic parallel voting pattern that requires multiple independent agent executions.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'baaf-ch07-fc1',
        category: 'architecture',
        front: 'What are the three conditions under which a Multi-Agent System (MAS) earns its coordination complexity over a single agent?',
        back: '1) The execution path cannot be scripted in advance; 2) The task spans distinct domains whose instructions dilute a single generalist prompt; 3) Independent subtasks (pooled interdependence) can genuinely run in parallel.',
        mentalHook: 'Unscripted path + Domain dilution + Pooled parallelism = Build a MAS.',
      },
      {
        id: 'baaf-ch07-fc2',
        category: 'architecture',
        front: 'How do Sectioning and Voting differ as variations of the Parallelization architectural style?',
        back: 'Sectioning splits a large workflow into distinct, independent subtasks (e.g., 10 agents analyzing 10 different stocks for speed), whereas Voting runs the exact same task across multiple agents or LLM families to verify consistency and catch hallucinations.',
        mentalHook: 'Sectioning buys wall-clock speed; Voting buys cross-model confidence.',
      },
      {
        id: 'baaf-ch07-fc3',
        category: 'security',
        front: 'What are the four formal conflict-resolution strategies in financial multi-agent systems, and which two govern non-negotiable regulatory limits?',
        back: 'Hierarchical authority (`Compliance > Risk > PM > Trader`), Policy-based guardrails (deterministic NAV/leverage caps), Negotiation (iterative compromise), and Game-theoretic scoring. Hierarchical and Policy-based resolution govern non-negotiable regulatory limits.',
        mentalHook: 'Hard rules use Hierarchy & Policy; discretionary sizing uses Negotiation & Game Theory.',
      },
      {
        id: 'baaf-ch07-fc4',
        category: 'optimization',
        front: 'Why do multi-agent token costs scale superlinearly (~15x plain chat), and what are the top two levers to reduce them?',
        back: 'Costs scale superlinearly because every handoff duplicates and replays system prompts, tool schemas, and accumulated context history. The top two levers are provider-side prompt caching (byte-identical prefixes) and model tiering per role (Haiku/mini for workers, Opus/GPT-4o for synthesizers).',
        mentalHook: 'Input duplication drives the 15x tax; cache the prefix and tier the workers.',
      },
      {
        id: 'baaf-ch07-fc5',
        category: 'architecture',
        front: 'What is the role of a Data Snapshot Agent in a hierarchical + parallel enterprise risk architecture?',
        back: 'It freezes market prices and portfolio positions at a single point in time before parallel Market, Credit, and Operational Risk agents run, preventing contradictory assessments caused by shifting real-time data.',
        mentalHook: 'Data Snapshot Agent = Database transaction isolation for parallel risk teams.',
      },
      {
        id: 'baaf-ch07-fc6',
        category: 'evaluation',
        front: 'How do you prevent flaky assertions when testing non-deterministic multi-agent workflows across unit, integration, end-to-end, and adversarial tiers?',
        back: 'Freeze external API responses into deterministic fixtures, pin model versions, and assert on structural invariants and internal consistency (e.g., all metrics scored, overall verdict matches component scores) rather than exact wording.',
        mentalHook: 'Freeze the fixtures, assert on structural invariants, demote live APIs to smoke alerts.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'baaf-ch07-fc-1',
        conceptTitle: 'Sub-Agent Context Isolation vs. Flat Orchestrator Accumulation',
        prompt:
          'Explain to a quantitative developer why a flat Orchestrator–Worker agent analyzing 20 portfolio stocks across 3 risk domains degrades in reasoning quality, and how a Hierarchical architecture with sub-agent context isolation mathematically resolves the bottleneck.',
        rubricChecklist: [
          'Identifies that 20 holdings generate 50,000+ tokens of raw financial statements, market data, and tool outputs that flood a flat orchestrator’s context window.',
          'Explains how context overflow degrades attention and causes the single orchestrator to lose details from early companies by the time it reaches the twentieth.',
          'Describes how a Hierarchical topology assigns dedicated context windows to sub-leaders (e.g., Market, Credit, Operational Risk leads) that compress raw specialist outputs into 500–1,000 token summaries.',
          'Contrasts the top-level CRO agent reasoning over 10,000–20,000 tokens of high-signal summaries ("summarize first, then synthesize") against raw context accumulation.',
        ],
        modelExplanation:
          'When a flat orchestrator delegates data collection across 20 stocks, every worker returns raw ratios, transcripts, and risk tables directly into the orchestrator’s single context window—easily exceeding 50,000 tokens. As the window fills, attention across earlier holdings degrades and input tokens are repeatedly re-billed on every turn. A Hierarchical architecture solves this via sub-agent context isolation: each domain sub-leader (Market, Credit, Operational Risk) runs in its own isolated context window, absorbs the raw tool payloads from its specialists, and compresses them into a 500–1,000 token domain summary. The top-level CRO agent only ever receives those clean summaries, reasoning over ~10,000 tokens instead of 50,000+ raw data points.',
      },
      {
        id: 'baaf-ch07-fc-2',
        conceptTitle: 'Mechanical Contention vs. Agentic Negotiation for Shared Resources',
        prompt:
          'A team proposes building an LLM debate agent to negotiate API rate-limit slots and GPU compute queues among 8 research agents, while using a fixed first-in-first-out (FIFO) queue to allocate the firm’s remaining $10M risk budget across 3 trading strategies. Critique both choices from first principles.',
        rubricChecklist: [
          'Identifies using LLM negotiation for API rate limits and compute slots as the "over-agentification" anti-pattern.',
          'Explains that mechanical contention problems require deterministic token buckets and priority queues where compliance checks get highest urgency so they never starve.',
          'Explains why a fixed FIFO queue fails for $10M risk-budget allocation because capital allocation depends on comparing expected Sharpe ratios, holding periods, and tail risks across competing proposals.',
          'Recommends a Contract-Net bidding round or game-theoretic scoring mediator for the risk budget while demoting API rate limiting to deterministic Python infrastructure.',
        ],
        modelExplanation:
          'The team has inverted where judgment belongs. API rate limits and compute slots are mechanical contention problems: using LLMs to negotiate rate limits burns extra tokens and latency on a problem solved deterministically by a token bucket and priority queue that tags compliance requests with top priority so regulatory checks never starve. Conversely, allocating $10M of remaining risk capacity across three trading strategies requires weighing trade-offs between expected Sharpe ratio, holding period, and drawdown correlation—judgment a dumb FIFO queue cannot perform. Mechanical infrastructure should govern rate limits, while a Contract-Net mediator or game-theoretic scoring mechanism should allocate the risk budget.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'baaf-task-interdependence',
        label: 'Task Interdependence (Pooled / Sequential / Reciprocal)',
        category: 'foundation',
        chapterNumber: 7,
        importance: 1,
        definition:
          'Thompson’s organizational classification of how subtasks couple: pooled (independent branches), sequential (ordered pipeline), or reciprocal (mutually dependent feedback steps).',
        whyItMatters:
          'Determines whether a workflow should be parallelized across a MAS or kept inside a single deep agent to avoid conflicting implicit decisions.',
      },
      {
        id: 'baaf-architectural-styles',
        label: 'Seven MAS Architectural Styles',
        category: 'architecture',
        chapterNumber: 7,
        importance: 1,
        definition:
          'The organizational blueprints connecting agents: Sequential, Orchestrator–Worker, Hierarchical, Peer-to-Peer, Parallelization, Evaluator–Optimizer, and Contract-Net Marketplace.',
        whyItMatters:
          'Governs authority chains, latency scaling, fault isolation, and regulatory auditability across financial workflows.',
      },
      {
        id: 'baaf-handoff-vs-as-tool',
        label: 'Handoffs vs. Agents-as-Tools',
        category: 'architecture',
        chapterNumber: 7,
        importance: 2,
        definition:
          'Two control-transfer primitives: peer handoffs transfer conversation ownership permanently, whereas `agent.as_tool()` invokes a specialist as a subroutine and returns its output to the caller.',
        whyItMatters:
          'Choosing the wrong primitive breaks synthesis when a manager agent needs to aggregate findings from multiple specialists.',
      },
      {
        id: 'baaf-conflict-resolution-hierarchy',
        label: 'Conflict Resolution & Authority Chain',
        category: 'security',
        chapterNumber: 7,
        importance: 1,
        definition:
          'Four mechanisms for settling inter-agent disagreements: Hierarchical veto (`Compliance > Risk > PM > Trader`), Policy guardrails, Negotiation, and Game-Theoretic scoring.',
        whyItMatters:
          'Ensures non-negotiable regulatory and risk limits cannot be overridden by high-conviction trading agents.',
      },
      {
        id: 'baaf-subagent-context-isolation',
        label: 'Sub-Agent Context Isolation & Snapshot Freeze',
        category: 'optimization',
        chapterNumber: 7,
        importance: 2,
        definition:
          'Freezing point-in-time market data in shared state while confining raw tool outputs to specialist context windows that report concise summaries upward.',
        whyItMatters:
          'Prevents context overflow, eliminates cross-agent timestamp drift, and curbs the ~15x superlinear multi-agent token multiplier.',
      },
      {
        id: 'baaf-idempotent-fault-recovery',
        label: 'Role-Differentiated & Idempotent Fault Recovery',
        category: 'evaluation',
        chapterNumber: 7,
        importance: 2,
        definition:
          'Allowing graceful degradation for analytical agents while enforcing immediate hard stops on compliance failures and requiring idempotency keys on side-effecting retries.',
        whyItMatters:
          'Prevents unvetted trades from executing during control outages and eliminates duplicate order submissions on network retries.',
      },
    ],
    edges: [
      {
        source: 'baaf-task-interdependence',
        target: 'baaf-architectural-styles',
        relationship: 'prerequisite_for',
        explanation:
          'Diagnosing whether subtasks are pooled, sequential, or reciprocal determines which of the seven architectural styles is valid.',
      },
      {
        source: 'baaf-handoff-vs-as-tool',
        target: 'baaf-architectural-styles',
        relationship: 'part_of',
        explanation:
          'Explicit handoffs implement sequential pipelines, while agents-as-tools implement synthesizing orchestrator–worker topologies.',
      },
      {
        source: 'baaf-subagent-context-isolation',
        target: 'baaf-architectural-styles',
        relationship: 'optimizes',
        explanation:
          'Sub-agent summarization and prompt-cached prefixes optimize hierarchical and parallel architectures against superlinear token growth.',
      },
      {
        source: 'baaf-conflict-resolution-hierarchy',
        target: 'baaf-idempotent-fault-recovery',
        relationship: 'prerequisite_for',
        explanation:
          'The authority hierarchy dictates why compliance and risk agent failures must trigger hard stops rather than graceful degradation.',
      },
      {
        source: 'baaf-idempotent-fault-recovery',
        target: 'baaf-architectural-styles',
        relationship: 'mitigates',
        explanation:
          'Idempotency keys, circuit breakers, and `return_exceptions=True` mitigate cascading failures across multi-agent pipelines.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 6,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 7 sections: MAS definition, 4 single-agent limits, Thompson interdependence & MAST/Anthropic/Cognition benchmarks, design patterns vs. architectural styles, all 7 core topologies + 3 hybrids + 5-phase evolution, communication/handoffs/4 conflict-resolution strategies, domain mappings, 3 framework implementations (LlamaIndex, OpenAI SDK, AutoGen), production observability/error handling/context/cost/testing, and the financial health analyzer lab.',
  },
};

export const baafCh08Mastery: ChapterMastery = {
  chapterNumber: 8,
  chapterId: 'ch08',
  title: 'Designing Multi-Agent Trading Systems: From Investment Committee to Adversarial Debate',
  subtitle:
    'Four Canonical Information Lenses, LangGraph Fan-Out/Fan-In Committees, Walk-Forward Backtesting, and Cross-Model Adversarial Debate',
  readingTimeMinutes: 8,
  sourceWordCount: 15165,
  executiveThesis:
    'Because real markets obey the Grossman–Stiglitz paradox—highly efficient yet dependent on active signal synthesis—profitable trading decisions require combining partially correlated fundamental, technical, sentiment, and macroeconomic lenses. Translating an institutional investment committee into a compiled LangGraph fan-out/fan-in workflow with deterministic Python data fetchers, tiered models, and a two-layer risk officer gate guarantees an auditable decision trail. However, committees naturally drift toward consensus; composing a second cross-model adversarial debate stage (Claude Bull vs. GPT-4o Bear, Devil’s Advocate, and Neutral Judge) on top of the committee stress-tests fragile theses before capital is committed.',
  paradigmShift: {
    oldWay:
      'Prompting a single LLM to call market APIs, calculate technical indicators, and output an unchallenged trade recommendation, or running homogeneous agent replicas that reinforce consensus after a rally.',
    newWay:
      'Pre-computing financial ratios, RSI, and annualized volatility deterministically in Python, fanning out across four specialized LangGraph analyst nodes into a conviction-sizing Portfolio Manager and a rule-plus-LLM Risk Officer, then challenging the thesis in a multi-family adversarial debate.',
    whyItChanged:
      'LLMs hallucinate arithmetic and share correlated blind spots when instantiated from a single model family, whereas deterministic math, asymmetric risk caps, walk-forward evaluation, and cross-provider adversarial debate expose weak theses and calibrate conviction.',
  },
  mentalModels: [
    {
      id: 'baaf-ch08-mm1',
      name: 'Grossman–Stiglitz Multi-Lens Diversification',
      tagline:
        'Single signals are rapidly arbitraged away; durable edge lives in synthesizing negatively correlated information lenses',
      naiveIntuition:
        'If the semi-strong Efficient Market Hypothesis holds, public data is useless; if it fails, a single strong fundamental or momentum indicator is enough to beat the market.',
      firstPrinciplesReality:
        'Grossman and Stiglitz proved that markets cannot be perfectly efficient because information gathering is costly; however, obvious single-factor anomalies (like simple post-earnings drift) decay once discovered. Because Value (fundamentals) and Momentum (technicals) are negatively correlated across regimes, combining Fundamentals, Technicals, Sentiment, and Macro lenses produces more robust risk-adjusted decisions than any single lens.',
      howToApply:
        'Assign each of the four canonical lenses to an isolated specialist node with a standardized directional vocabulary (`BULLISH / NEUTRAL / BEARISH` or `POSITIVE / MIXED / NEGATIVE`) before synthesis.',
    },
    {
      id: 'baaf-ch08-mm2',
      name: 'Asymmetric Conviction Sizing & Two-Layer Risk Gate',
      tagline:
        'Hide the risk cap from the Portfolio Manager to measure true conviction, then enforce deterministic rules before LLM risk review',
      naiveIntuition:
        'Tell the Portfolio Manager agent the firm’s 3% single-name position limit in its prompt so it never proposes an oversized trade.',
      firstPrinciplesReality:
        'If the Portfolio Manager knows the 3% risk ceiling, its high-conviction recommendations artificially cluster at 2.9%, turning the Risk Officer’s review into an empty rubber stamp. Hiding the 3% cap forces the PM to size purely on conviction (0.0% to 5.0% NAV), creating an informative audit trail when the Risk Officer blocks >3.0% proposals or >60% annualized volatility.',
      howToApply:
        'Prompt the PM to output `ACTION=<BUY|HOLD|SELL>; CONFIDENCE=<0-100>; SIZE_PCT=<0.0-5.0>` without disclosing downstream caps, then run hard Python volatility checks (`vol > 0.60`) inside the Risk Officer before invoking Opus for qualitative macro/sizing validation.',
    },
    {
      id: 'baaf-ch08-mm3',
      name: 'Cross-Model Adversarial Debate & Seat-Swap Calibration',
      tagline:
        'Break correlated reasoning with heterogeneous model families and constrain the Devil’s Advocate to one fatal flaw per side',
      naiveIntuition:
        'Asking a second instance of the same LLM to play devil’s advocate is sufficient to uncover hidden risks in a committee’s BUY thesis.',
      firstPrinciplesReality:
        'Agents backed by the same model weights share identical training cutoffs, alignment priors, and reasoning blind spots, producing tepid objections. True adversarial stress-testing requires powering the Bull and Bear with distinct model families (e.g., Claude Opus 4.7 vs. GPT-4o), forbidding hedging (`do NOT hedge`), and forcing the Devil’s Advocate to isolate the single weakest claim on each side.',
      howToApply:
        'Compose the debate graph onto the committee’s `pm_thesis` without re-fetching data, and periodically rerun historical debates with the Bull and Bear model assignments swapped to verify verdicts reflect thesis quality rather than model strength.',
    },
  ],
  customDiagrams: [
    {
      id: 'baaf-ch08-svg1',
      title: 'Two-Stage LangGraph Trading Pipeline: Investment Committee + Adversarial Debate',
      subtitle:
        'Stage 1 aggregates four parallel analytical lenses; Stage 2 stress-tests the recommendation across heterogeneous model families',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" fill="#0f172a" rx="12" />
  <text x="24" y="32" fill="#f8fafc" font-size="14" font-weight="700">TWO-STAGE LANGGRAPH TRADING ARCHITECTURE (COMMITTEE + DEBATE)</text>
  <text x="24" y="50" fill="#94a3b8" font-size="10">Deterministic Python data fetchers -> Parallel 4-Lens Committee -> Risk Veto Gate -> Cross-Model Debate</text>

  <!-- STAGE 1 CONTAINER -->
  <rect x="18" y="64" width="446" height="334" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="32" y="86" fill="#38bdf8" font-size="11" font-weight="700">STAGE 1: INVESTMENT COMMITTEE (investment_committee.py)</text>

  <!-- 4 Parallel Analysts -->
  <rect x="32" y="102" width="138" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="101" y="122" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">Fundamentals</text>
  <text x="101" y="138" fill="#94a3b8" font-size="8" text-anchor="middle">Sonnet 4.6 | 9 Ratios</text>

  <rect x="32" y="162" width="138" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="101" y="182" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">Technicals</text>
  <text x="101" y="198" fill="#94a3b8" font-size="8" text-anchor="middle">Sonnet 4.6 | SMA/RSI/Vol</text>

  <rect x="32" y="222" width="138" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="101" y="242" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">Sentiment</text>
  <text x="101" y="258" fill="#38bdf8" font-size="8" text-anchor="middle">Haiku 4.5 | Filtered News</text>

  <rect x="32" y="282" width="138" height="48" rx="5" fill="#0f172a" stroke="#334155" />
  <text x="101" y="302" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">Macro Strategist</text>
  <text x="101" y="318" fill="#94a3b8" font-size="8" text-anchor="middle">Sonnet 4.6 | VIX/10Y/SPX</text>

  <!-- Fan-in edges to PM -->
  <line x1="170" y1="126" x2="206" y2="188" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="170" y1="186" x2="206" y2="200" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="170" y1="246" x2="206" y2="212" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="170" y1="306" x2="206" y2="224" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />

  <!-- Portfolio Manager -->
  <rect x="206" y="168" width="116" height="76" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.8" />
  <text x="264" y="192" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">Portfolio Mgr</text>
  <text x="264" y="208" fill="#cbd5e1" font-size="8" text-anchor="middle">Opus 4.7 Synthesis</text>
  <text x="264" y="222" fill="#94a3b8" font-size="8" text-anchor="middle">SIZE_PCT: 0–5% NAV</text>
  <text x="264" y="234" fill="#f59e0b" font-size="8" text-anchor="middle">(Blind to 3% Cap)</text>

  <line x1="322" y1="206" x2="344" y2="206" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="6 4" />

  <!-- Risk Officer -->
  <rect x="344" y="160" width="108" height="92" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.8" />
  <text x="398" y="182" fill="#10b981" font-size="10" font-weight="700" text-anchor="middle">Risk Officer</text>
  <text x="398" y="198" fill="#f43f5e" font-size="8" text-anchor="middle">1. Py: Vol &gt; 60%</text>
  <text x="398" y="212" fill="#cbd5e1" font-size="8" text-anchor="middle">2. Opus: Cap &gt; 3%</text>
  <text x="398" y="226" fill="#cbd5e1" font-size="8" text-anchor="middle">or Conf &lt; 50</text>
  <text x="398" y="242" fill="#10b981" font-size="8" text-anchor="middle">risk_verdict</text>

  <text x="32" y="362" fill="#cbd5e1" font-size="9">Shared State: Distinct keys (fundamentals_report, ..., pm_thesis)</text>
  <text x="32" y="378" fill="#94a3b8" font-size="9">Zero concurrent write collisions -> No custom state reducer needed</text>

  <!-- Stage Handoff Arrow -->
  <line x1="452" y1="206" x2="486" y2="206" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- STAGE 2 CONTAINER -->
  <rect x="486" y="64" width="296" height="334" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="500" y="86" fill="#f59e0b" font-size="11" font-weight="700">STAGE 2: ADVERSARIAL DEBATE</text>

  <!-- Bull and Bear in Parallel -->
  <rect x="500" y="106" width="124" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="562" y="126" fill="#10b981" font-size="10" font-weight="700" text-anchor="middle">BULL Agent</text>
  <text x="562" y="142" fill="#cbd5e1" font-size="8" text-anchor="middle">Claude Opus 4.7</text>
  <text x="562" y="156" fill="#94a3b8" font-size="8" text-anchor="middle">No hedging | Conv 0-100</text>

  <rect x="642" y="106" width="124" height="60" rx="5" fill="#0f172a" stroke="#f43f5e" />
  <text x="704" y="126" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="middle">BEAR Agent</text>
  <text x="704" y="142" fill="#cbd5e1" font-size="8" text-anchor="middle">OpenAI GPT-4o</text>
  <text x="704" y="156" fill="#94a3b8" font-size="8" text-anchor="middle">Cross-Model Family</text>

  <line x1="562" y1="166" x2="610" y2="198" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />
  <line x1="704" y1="166" x2="656" y2="198" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6 4" />

  <!-- Devil's Advocate -->
  <rect x="538" y="198" width="190" height="54" rx="5" fill="#0f172a" stroke="#f59e0b" />
  <text x="633" y="218" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Devil's Advocate (Sonnet 4.6)</text>
  <text x="633" y="236" fill="#cbd5e1" font-size="8" text-anchor="middle">1 Weakest Bull Claim + 1 Weakest Bear Claim</text>

  <line x1="633" y1="252" x2="633" y2="282" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" />

  <!-- Neutral Judge -->
  <rect x="528" y="282" width="210" height="72" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.8" />
  <text x="633" y="304" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Neutral Judge (Sonnet 4.6)</text>
  <text x="633" y="320" fill="#cbd5e1" font-size="8" text-anchor="middle">Confirm / Downgrade / Reverse Prior</text>
  <text x="633" y="336" fill="#10b981" font-size="8" text-anchor="middle">VERDICT | CONFIDENCE | RATIONALE</text>
</svg>`,
      bierutCaption:
        'Stage 1 executes in three LangGraph supersteps (parallel specialists, PM synthesis, Risk gate), while Stage 2 challenges the resulting thesis with cross-provider adversaries.',
      annotations: [
        {
          step: '1',
          label: 'Conflict-Free Parallel State Slots',
          explanation:
            'Each of the four analysts writes to its own key in `CommitteeState`, allowing LangGraph to join parallel branches into `portfolio_manager` without custom reducer logic.',
        },
        {
          step: '2',
          label: 'Deterministic-First Risk Gate',
          explanation:
            'The Risk Officer checks 30-day annualized volatility (>60% veto) in pure Python before calling Opus 4.7 to enforce the 3.0% single-name cap and macro alignment.',
        },
        {
          step: '3',
          label: 'Heterogeneous Adversarial Composition',
          explanation:
            'Stage 2 consumes `pm_thesis` and `final_decision` without re-fetching market data, pairing Claude Opus 4.7 (Bull) against GPT-4o (Bear) to eliminate single-model groupthink.',
        },
      ],
    },
    {
      id: 'baaf-ch08-svg2',
      title: 'Walk-Forward Backtesting & Closed-Loop Calibration Harness',
      subtitle:
        'Out-of-sample evaluation windows, point-in-time data boundaries, and three diagnostic feedback channels',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" fill="#0f172a" rx="12" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">WALK-FORWARD BACKTESTING &amp; CLOSED-LOOP CALIBRATION</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Preventing look-ahead leakage and translating trade logs into prompt, model, and threshold refinements</text>

  <!-- Timeline / Walk-Forward Windows -->
  <rect x="24" y="72" width="752" height="142" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="42" y="96" fill="#38bdf8" font-size="12" font-weight="700">1. POINT-IN-TIME WALK-FORWARD EVALUATION (W-FRI REBALANCE)</text>

  <!-- Training Cutoff Wall -->
  <line x1="150" y1="108" x2="150" y2="202" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4 3" />
  <text x="142" y="124" fill="#f43f5e" font-size="9" font-weight="700" text-anchor="end">LLM Training</text>
  <text x="142" y="136" fill="#f43f5e" font-size="9" font-weight="700" text-anchor="end">Cutoff Date</text>
  <text x="142" y="152" fill="#94a3b8" font-size="8" text-anchor="end">(Leakage Zone)</text>

  <!-- Step t0 -> t1 -->
  <rect x="170" y="114" width="160" height="36" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="250" y="130" fill="#e2e8f0" font-size="9" font-weight="600" text-anchor="middle">Decision t_0 (as_of_date)</text>
  <text x="250" y="142" fill="#38bdf8" font-size="8" text-anchor="middle">Hold Position -> Exit t_1</text>

  <line x1="330" y1="132" x2="368" y2="132" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" />

  <!-- Step t1 -> t2 -->
  <rect x="368" y="114" width="160" height="36" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="448" y="130" fill="#e2e8f0" font-size="9" font-weight="600" text-anchor="middle">Decision t_1 (as_of_date)</text>
  <text x="448" y="142" fill="#38bdf8" font-size="8" text-anchor="middle">Hold Position -> Exit t_2</text>

  <line x1="528" y1="132" x2="566" y2="132" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" />

  <!-- Equity Curve & Metrics Box -->
  <rect x="566" y="108" width="192" height="88" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="662" y="128" fill="#10b981" font-size="10" font-weight="700" text-anchor="middle">Portfolio Equity Curve</text>
  <text x="662" y="144" fill="#cbd5e1" font-size="9" text-anchor="middle">weighted_pnl = (SIZE/100)*pnl</text>
  <text x="662" y="160" fill="#94a3b8" font-size="8" text-anchor="middle">Sharpe = (mean/std) * sqrt(52)</text>
  <text x="662" y="176" fill="#94a3b8" font-size="8" text-anchor="middle">Max Drawdown &amp; Hit Rate</text>

  <text x="170" y="176" fill="#cbd5e1" font-size="9">Rule: Risk Veto overrides PM action -> HOLD (size_pct = 0.0, excluded from Trade log)</text>
  <text x="170" y="194" fill="#94a3b8" font-size="9">Window validation: Expanding vs. Rolling windows + Blocked time-series permutations</text>

  <!-- Bottom 3 Feedback Channels -->
  <text x="28" y="242" fill="#f8fafc" font-size="13" font-weight="700">2. THREE CLOSED-LOOP IMPROVEMENT CHANNELS (CONFIG REFINEMENT, NOT RETRAINING)</text>

  <rect x="24" y="258" width="238" height="138" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="40" y="282" fill="#a855f7" font-size="11" font-weight="700">A. CONFIDENCE CALIBRATION</text>
  <text x="40" y="302" fill="#cbd5e1" font-size="9.5">Group historical trades by stated</text>
  <text x="40" y="316" fill="#cbd5e1" font-size="9.5">CONFIDENCE bucket (50-70 vs 70+).</text>
  <text x="40" y="338" fill="#94a3b8" font-size="9">If high-conviction hit rate &lt;= mid,</text>
  <text x="40" y="352" fill="#94a3b8" font-size="9">tighten PM rubric or flatten sizing.</text>

  <rect x="281" y="258" width="238" height="138" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="297" y="282" fill="#f59e0b" font-size="11" font-weight="700">B. ROLE-LEVEL ATTRIBUTION</text>
  <text x="297" y="302" fill="#cbd5e1" font-size="9.5">Trace losing trades back to the</text>
  <text x="297" y="316" fill="#cbd5e1" font-size="9.5">specific specialist report slot.</text>
  <text x="297" y="338" fill="#94a3b8" font-size="9">Fix locally: refine news filter, prompt,</text>
  <text x="297" y="352" fill="#94a3b8" font-size="9">or swap model tier (Haiku vs Sonnet).</text>

  <rect x="538" y="258" width="238" height="138" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="554" y="282" fill="#10b981" font-size="11" font-weight="700">C. COUNTERFACTUAL VETO AUDIT</text>
  <text x="554" y="302" fill="#cbd5e1" font-size="9.5">Score returns of trades blocked by</text>
  <text x="554" y="316" fill="#cbd5e1" font-size="9.5">the 60% vol or 3% NAV risk ceilings.</text>
  <text x="554" y="338" fill="#94a3b8" font-size="9">Verify whether risk thresholds protect</text>
  <text x="554" y="352" fill="#94a3b8" font-size="9">drawdown or choke positive alpha.</text>
</svg>`,
      bierutCaption:
        'A research-grade LLM backtest enforces strict post-cutoff, point-in-time data boundaries and turns full-state trade logs into local prompt, model, and risk-threshold calibrations.',
      annotations: [
        {
          step: '1',
          label: 'Post-Cutoff & Point-in-Time Guardrails',
          explanation:
            'Walk-forward windows must start after the latest training cutoff of every model in the graph, and data fetchers must query historical `as_of_date` snapshots rather than live `.info` or `.news` endpoints.',
        },
        {
          step: '2',
          label: 'Regex Decision Parsing & Veto Precedence',
          explanation:
            '`parse_decision()` extracts `ACTION`, `CONFIDENCE`, and `SIZE_PCT` via regex, but immediately zeroes out `size_pct` to `HOLD` if `final_decision` contains `(risk veto)` or `(risk rejected)`.',
        },
        {
          step: '3',
          label: 'Out-of-Sample Configuration Tuning',
          explanation:
            'Every prompt tweak, model swap, or risk threshold change identified via attribution must be validated on an untouched walk-forward window to avoid multiple-testing bias.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'baaf-ch08-sec1',
      sectionNumber: '8.1',
      title: 'Market Efficiency & The Four Canonical Information Lenses',
      subtitle:
        'Why the Grossman–Stiglitz paradox motivates multi-agent synthesis across Fundamentals, Technicals, Sentiment, and Macro',
      coreMechanism:
        'While Eugene Fama’s Efficient Market Hypothesis (EMH) posits in its semi-strong form that public prices instantaneously reflect all public data, the Grossman–Stiglitz paradox demonstrates that perfect efficiency is self-defeating: if prices reflected all information costlessly, investors would stop paying to research securities, causing prices to become inefficient. Real markets are highly competitive but imperfectly efficient—simple anomalies like post-earnings announcement drift decay once publicized, leaving durable edge in synthesizing multiple partially or negatively correlated signals.\n\nProfessional investment committees divide market reality into four canonical lenses that map onto specialist agents: (1) Fundamentals estimate intrinsic value across valuation, profitability, balance sheet, and growth, grounded in CAPM, Fama–French 3- and 5-factor models (Market, SMB size, HML value, RMW profitability, CMA conservative investment), and the 9-signal Piotroski F-score; (2) Technicals capture price behavior via trend (50/200-day SMAs), momentum (Jegadeesh & Titman’s 3–12 month persistence and 14-day RSI), and 30-day annualized volatility; (3) Sentiment evaluates media tone, recency decay, tier-1 publisher credibility, and single-source PR concentration (building on Tetlock, Baker & Wurgler, and Loughran–McDonald financial dictionaries); and (4) Macro classifies the broader market regime (risk-on, risk-off, neutral) using VIX, the US 10-year Treasury yield (`^TNX`), and 1-month S&P 500 returns.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Pre-Compute Deterministic Metrics in Python',
          detail:
            'Execute `fetch_fundamentals`, `compute_indicators`, and `fetch_macro_snapshot` in Python so LLMs interpret verified numbers rather than hallucinating arithmetic.',
        },
        {
          step: '2',
          title: 'Filter & Enrich Company News Headlines',
          detail:
            'Apply `_is_about_company()` in `fetch_news()` to strip tangential market stories and format `[date, publisher] title — first sentence` so the sentiment agent weights recency and source authority.',
        },
        {
          step: '3',
          title: 'Standardize Specialist Directional Vocabulary',
          detail:
            'Constrain every analyst report to 120–150 words ending in an explicit directional token (`BULLISH / NEUTRAL / BEARISH` or `POSITIVE / MIXED / NEGATIVE`).',
        },
      ],
      formulas: [
        {
          name: 'CAPM & Fama–French Five-Factor Expected Return',
          expression:
            'E(R_i) - R_f = \\beta_i (E(R_m) - R_f) + s_i \\text{SMB} + h_i \\text{HML} + r_i \\text{RMW} + c_i \\text{CMA}',
          intuition:
            'Decomposes a stock’s expected excess return into systematic exposure to broad market risk, small-cap size, book-to-market value, operating profitability, and conservative capital investment—separating cheap value traps from high-quality compounders.',
          variables: [
            { symbol: 'E(R_i) - R_f', meaning: 'Expected excess return of asset i over the risk-free rate' },
            { symbol: '\\beta_i (E(R_m) - R_f)', meaning: 'CAPM market beta sensitivity times the market risk premium' },
            { symbol: '\\text{SMB}, \\text{HML}', meaning: 'Small Minus Big (size) and High Minus Low (book-to-market value) factors' },
            { symbol: '\\text{RMW}, \\text{CMA}', meaning: 'Robust Minus Weak (profitability) and Conservative Minus Aggressive (investment) factors' },
          ],
          workedExample:
            'A stock trading at a low P/B ratio (positive HML) with negative operating margins (negative RMW) and aggressive dilution (negative CMA) is flagged by the Fundamental Analyst as a deteriorating value trap rather than a bargain.',
        },
        {
          name: '14-Day Relative Strength Index (RSI) & Annualized 30-Day Volatility',
          expression:
            '\\text{RSI}_{14} = 100 - \\frac{100}{1 + \\frac{\\overline{\\text{Gain}}_{14}}{\\overline{\\text{Loss}}_{14}}}, \\quad \\sigma_{\\text{ann}} = \\text{std}(r_{t-29:t}) \\times \\sqrt{252}',
          intuition:
            'RSI measures the velocity of recent gains relative to losses on a 0–100 scale (>70 overbought, <30 oversold), while scaling the 30-day daily return standard deviation by sqrt(252) projects daily dispersion to an annual risk basis.',
          variables: [
            { symbol: '\\overline{\\text{Gain}}_{14}, \\overline{\\text{Loss}}_{14}', meaning: '14-day rolling average of positive and negative daily price changes' },
            { symbol: '\\text{std}(r_{t-29:t})', meaning: '30-trading-day sample standard deviation of daily percentage returns' },
            { symbol: '\\sqrt{252}', meaning: 'Annualization factor for 252 equity trading days per year' },
          ],
          workedExample:
            'If TSLA exhibits a 30-day daily return standard deviation of 0.041, then sigma_ann = 0.041 * 15.8745 = 0.651 (65.1%), breaching the Risk Officer’s 60% hard volatility ceiling.',
        },
      ],
      keyTakeaways: [
        'Asness, Moskowitz, and Pedersen ("Value and Momentum Everywhere") showed that fundamental value and technical momentum are negatively correlated, making their combination more resilient than either lens alone.',
        'Harvey, Liu, and Zhu documented that hundreds of proposed return predictors fail out of sample; a disciplined 4-lens committee beats adding dozens of redundant specialist agents.',
        'The Macro Strategist node intentionally receives no stock ticker—it evaluates `^VIX`, `^TNX`, and `^GSPC` purely to classify the ambient regime that constrains all single-name positions.',
      ],
      commonPitfalls: [
        'Passing raw unfiltered ticker news feeds into the sentiment agent, allowing broad market roundups or single-publisher PR pushes to corrupt company-specific sentiment.',
        'Exposing data-fetching tools via dynamic LLM tool-calling when each specialist always requires exactly one deterministic dataset, wasting an extra LLM round-trip per analyst.',
      ],
      figures: [
        {
          file: 'B32414_8_1.png',
          originalLabel: 'Figure 8.1 – The four canonical information lenses used by professional investors and the research foundations behind them',
          bierutTitle: 'Anchor Every Specialist Agent in an Orthogonal Empirical Return Factor',
          editorialAnalysis:
            'Maps Fundamentals (Fama–French, Piotroski), Technicals (Jegadeesh–Titman, Brock–Lakonishok–LeBaron), Sentiment (Tetlock, Baker–Wurgler, Loughran–McDonald), and Macro (Chen–Roll–Ross) to their distinct data inputs and time horizons.',
          keyTakeaways: [
            'Orthogonal information lenses diversify signal error across time horizons and market regimes.',
          ],
        },
        {
          file: 'B32414_8_2.png',
          originalLabel: 'Figure 8.2 – The six roles that make up the investment committee',
          bierutTitle: 'Compress Raw Market Data Progressively Across Committee Tiers',
          editorialAnalysis:
            'Shows four parallel analysts distilling raw data into 120–150 word briefs, the Portfolio Manager synthesizing those four briefs into a 250-word thesis with explicit sizing, and the Risk Officer gating execution.',
          keyTakeaways: [
            'Progressive information condensation bounds context window size and focuses frontier model spend on the final synthesis and control nodes.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch08-sec2',
      sectionNumber: '8.2',
      title: 'LangGraph Committee Orchestration & Walk-Forward Backtesting',
      subtitle:
        'Conflict-free shared state, asymmetric PM sizing, deterministic risk gates, and out-of-sample evaluation',
      coreMechanism:
        'In regulated finance, the orchestrator should be the compiled graph itself rather than an unpredictable routing LLM. `StateGraph(CommitteeState)` fans out from `START` across `fundamentals`, `technicals`, `sentiment`, and `macro` in Superstep 1; because each node writes to its own key (`fundamentals_report`, etc.), LangGraph merges their updates into `CommitteeState` without race conditions or custom reducers. In Superstep 2, `portfolio_manager` (Opus 4.7) synthesizes all four reports and ends with `ACTION=<BUY|HOLD|SELL>; CONFIDENCE=<0-100>; SIZE_PCT=<0.0-5.0>`. Intentionally keeping the PM blind to the firm’s 3.0% single-name cap prevents artificial clustering just below the limit. In Superstep 3, `risk_officer` first enforces a pure Python volatility veto (`vol_30d_annualized > 0.60`) at zero token cost before calling Opus 4.7 to reject trades where `SIZE_PCT > 3.0`, `CONFIDENCE < 50`, or macro headwinds are ignored.\n\nEvaluating this architecture over time requires a walk-forward backtest (`backtest.py`) that steps across rebalance dates (`W-FRI`), parses decisions via regex, overrides any `(risk veto)` or `(risk rejected)` to `HOLD` with `size_pct=0.0`, and compounds `weighted_pnl` into an equity curve. Because 5 years of daily decisions on 50 stocks would require ~375,000 LLM calls ($8,000–$15,000), agent backtests run on compact universes and weekly/monthly intervals, enforcing strict post-training-cutoff windows and `as_of_date` point-in-time snapshots.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Tier Models & Omit Non-Portable Temperature Flags',
          detail:
            'Assign Haiku 4.5 to high-volume sentiment classification, Sonnet 4.6 to fundamental/technical/macro analysis, and Opus 4.7 to PM synthesis and Risk review, steering behavior via strict output schemas rather than deprecated `temperature` parameters.',
        },
        {
          step: '2',
          title: 'Enforce Two-Stage Risk Veto Precedence',
          detail:
            'Short-circuit trades with >60% annualized volatility in Python first, then run the LLM risk officer check and force `parse_decision()` to zero out any vetoed trade.',
        },
        {
          step: '3',
          title: 'Run Walk-Forward Loops & Compute Risk-Adjusted Metrics',
          detail:
            'Evaluate out-of-sample rebalance intervals (`t_i` to `t_{i+1}`), tracking Cumulative Return, Annualized Sharpe Ratio, Maximum Drawdown, Hit Rate, Turnover, and Information Ratio.',
        },
      ],
      formulas: [
        {
          name: 'Position-Weighted Trade PnL & Annualized Sharpe Ratio',
          expression:
            '\\text{PnL}_{\\text{weighted}} = \\left(\\frac{\\text{SIZE\\_PCT}}{100}\\right) \\cdot s \\cdot \\left(\\frac{P_{\\text{exit}}}{P_{\\text{entry}}} - 1\\right), \\quad \\text{Sharpe}_{\\text{ann}} = \\frac{\\bar{r}_p}{\\sigma_p} \\sqrt{N_p}',
          intuition:
            'Scales raw directional trade return (`s = +1` for BUY, `-1` for SELL) by the Portfolio Manager’s NAV allocation percentage, then evaluates portfolio return consistency per unit of volatility annualized by rebalance frequency.',
          variables: [
            { symbol: '\\text{SIZE\\_PCT}', meaning: 'Target position size as a percentage of total portfolio NAV (0.0 to 3.0% after risk gate)' },
            { symbol: 's', meaning: 'Direction sign (+1 for BUY, -1 for SELL)' },
            { symbol: '\\bar{r}_p, \\sigma_p', meaning: 'Mean and standard deviation of periodic portfolio returns across rebalance intervals' },
            { symbol: 'N_p', meaning: 'Rebalance periods per year (252 daily, 52 weekly, 12 monthly)' },
          ],
          workedExample:
            'A weekly (`N_p = 52`) BUY position sized at `SIZE_PCT = 2.0` that gains 5.0% contributes `0.02 * 0.05 = +0.10%` (`0.001`) to portfolio NAV for that week; a mean weekly return of 0.15% with 1.5% weekly std yields Sharpe = `(0.0015 / 0.015) * sqrt(52) = 0.72`.',
        },
        {
          name: 'Maximum Drawdown (Peak-to-Trough Decline)',
          expression:
            '\\text{MaxDD} = \\min_{t} \\left( \\frac{V_t}{\\max_{\\tau \\le t} V_\\tau} - 1 \\right)',
          intuition:
            'Captures the worst cumulative percentage loss experienced by an investor entering at the highest historical equity peak and exiting at the subsequent trough.',
          variables: [
            { symbol: 'V_t', meaning: 'Portfolio NAV on rebalance date t' },
            { symbol: '\\max_{\\tau \\le t} V_\\tau', meaning: 'Running maximum (high-water mark) of portfolio NAV up to date t' },
          ],
          workedExample:
            'If a $1,000,000 portfolio peaks at $1,060,000 and subsequently dips to $1,029,260 before recovering, MaxDD = `(1,029,260 / 1,060,000) - 1 = -2.9%`.',
        },
      ],
      keyTakeaways: [
        'Separating conviction sizing (PM proposes up to 5% NAV) from risk enforcement (Risk Officer caps at 3% NAV) creates a measurable audit record of when risk policy overrides investment conviction.',
        'Calling live `yf.Ticker(t).info` or `.news` inside a historical loop injects severe look-ahead bias; research-grade backtests require point-in-time `as_of_date` snapshots and evaluation start dates after all model training cutoffs.',
        'Blocked time-series permutations shuffle contiguous market blocks to verify whether strategy alpha stems from genuine predictive signals or overfitted historical sequences.',
      ],
      commonPitfalls: [
        'Hardcoding `temperature` parameters on modern frontier models (such as Claude models after Sonnet 4.6 / Opus 4.7) that reject the parameter and raise runtime API errors.',
        'Running a single stochastic backtest pass on 3 stocks over 3 months and treating a 0.74 Sharpe ratio as statistically significant without multi-run distribution checks or transaction cost deduction.',
      ],
      figures: [
        {
          file: 'B32414_8_4.png',
          originalLabel: 'Figure 8.4 – The LangGraph implementation of the investment committee',
          bierutTitle: 'Encode Committee Accountability as a Deterministic Three-Superstep DAG',
          editorialAnalysis:
            'Visualizes the compiled `StateGraph`: four parallel edges leaving `START`, an implicit synchronization barrier at `portfolio_manager`, and a sequential gate through `risk_officer` to `END`.',
          keyTakeaways: [
            'Graph-level orchestration guarantees every analyst runs and every trade passes the risk gate without relying on LLM routing judgment.',
          ],
        },
        {
          file: 'B32414_8_6.png',
          originalLabel: 'Figure 8.6 – Walk-forward backtesting framework',
          bierutTitle: 'Evaluate Every Historical Decision Strictly on Past Information Windows',
          editorialAnalysis:
            'Shows sequential decision dates (`t_0, t_1, t_2`) where the committee observes data only up to `t_i`, holds the resulting position until `t_{i+1}`, and attributes realized return to that out-of-sample interval.',
          keyTakeaways: [
            'Walk-forward evaluation prevents in-sample calibration leakage across rebalance periods.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch08-sec3',
      sectionNumber: '8.3',
      title: 'Stress-Testing Consensus with Cross-Model Adversarial Debate',
      subtitle:
        'Overcoming confirmation bias and correlated model blind spots through structured opposition and closed-loop calibration',
      coreMechanism:
        'An investment committee is built to aggregate evidence, not to attack it. After a strong rally, fundamentals, technicals, sentiment, and macro signals often point in the same direction, producing confirmation bias. Worse, if a contrarian agent is instantiated using the same underlying LLM family as the committee, correlated reasoning causes it to share the same blind spots and mount weak objections. Stage 2 (`adversarial_debate.py`) solves both flaws by composing a 4-node debate graph directly onto the committee’s `pm_thesis` and `final_decision` without re-fetching market data.\n\nFrom `START`, `bull_node` (Claude Opus 4.7) and `bear_node` (OpenAI GPT-4o) execute in parallel with fixed opposing mandates (`do NOT hedge`, max 200 words, ending in `BULL_CONVICTION=<0-100>` and `BEAR_CONVICTION=<0-100>`). Their arguments converge on `devil_advocate` (Sonnet 4.6), which is constrained to isolate the SINGLE weakest claim on each side in one sentence each. Finally, `judge_node` (Sonnet 4.6) weighs the prior, both cases, and the devil’s critique—explicitly permitted to confirm, downgrade (e.g., `BUY -> HOLD`), or reverse the committee’s verdict. Backtest logs across both stages close the improvement loop via three non-retraining channels: confidence bucket calibration, role-level loss attribution, and counterfactual veto auditing.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Pair Comparable Cross-Provider Adversaries',
          detail:
            'Run Bull on Claude Opus 4.7 and Bear on GPT-4o in parallel with `do NOT hedge` instructions so every committee thesis faces genuine cross-model opposition.',
        },
        {
          step: '2',
          title: 'Constrain the Devil’s Advocate & De-Anchor the Judge',
          detail:
            'Force the Devil’s Advocate to name exactly one weakest claim per side, and explicitly instruct the Judge that its `VERDICT=<BUY|HOLD|SELL>` may overturn the committee prior.',
        },
        {
          step: '3',
          title: 'Audit Seat-Swap Symmetry & Calibrate via Backtest Logs',
          detail:
            'Rerun historical debates with Bull and Bear models swapped to check for model-strength bias, and use walk-forward logs to calibrate confidence bands, specialist prompts, and risk thresholds.',
        },
      ],
      keyTakeaways: [
        'The primary risk-management value of an adversarial debate layer is often conviction moderation—downgrading a fragile `BUY` (confidence 70) to `HOLD` (confidence 55) when catalysts are already priced in and macro headwinds bind.',
        'If swapping the model families assigned to Bull and Bear flips historical debate verdicts on identical evidence, the debate is measuring model capability asymmetry rather than trade quality.',
        'If the debate layer downgrades nearly 100% of committee `BUY` calls to `HOLD`, the Judge prompt is overly conservative and must be tuned to require a material, unrefuted flaw before overturning the prior.',
      ],
      commonPitfalls: [
        'Allowing the Devil’s Advocate to write an unconstrained critique, which produces a diffuse summary of all points instead of isolating the single fatal flaw on each side.',
        'Tuning specialist prompts or risk thresholds on a backtest window and re-evaluating on the same historical dates, falling into the multiple-testing overfitting trap.',
      ],
      figures: [
        {
          file: 'B32414_8_7.png',
          originalLabel: 'Figure 8.7 – The debate layer consists of four roles',
          bierutTitle: 'Pit Cross-Family Adversaries in Parallel Before a Constrained Devil’s Advocate',
          editorialAnalysis:
            'Illustrates the 4-node debate DAG: parallel Bull (Claude Opus 4.7) and Bear (GPT-4o) nodes feeding a focused Devil’s Advocate (Sonnet 4.6) and a structured Neutral Judge (Sonnet 4.6).',
          keyTakeaways: [
            'Fixed opposing roles ensure that whichever direction the committee leans, one adversary constructs the strongest unhedged counter-case.',
          ],
        },
        {
          file: 'B32414_8_8.png',
          originalLabel: 'Figure 8.8 – The two-stage pipeline. Stage 1 (the committee) produces a thesis; Stage 2 (the debate) consumes that thesis and produces a possibly different final verdict.',
          bierutTitle: 'Compose Modular Graph Stages Through Narrow Textual Interfaces',
          editorialAnalysis:
            'Demonstrates architectural composition: Stage 1 transforms raw market data into `pm_thesis` and `final_decision`, and Stage 2 consumes only those two strings to stress-test the call with just 4 additional LLM invocations.',
          keyTakeaways: [
            'Decoupling evidence aggregation (Stage 1) from adversarial challenge (Stage 2) avoids re-fetching data and lets either stage be upgraded independently.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Role-Level Model Tiering, Data Substrates & Constraint Architecture (Stage 1 + Stage 2)',
      description:
        'Mapping every node in the two-stage trading system to its assigned LLM tier, token ceiling, input source, and deterministic constraint.',
      headers: [
        'Pipeline Node',
        'Stage & Topology',
        'Assigned Model Tier',
        'Input Data Substrate',
        'Hard Output / Rule Constraint',
      ],
      rows: [
        [
          'Sentiment Analyst',
          'Stage 1 (Parallel Fan-Out)',
          'Claude Haiku 4.5 (`max_tokens=800`)',
          '8 filtered headlines (`[date, publisher] title — 1st sentence`)',
          'Max 120w; weight recency/tier-1 press; flag single-publisher PR; end `POSITIVE/MIXED/NEGATIVE`',
        ],
        [
          'Fundamentals / Technicals / Macro',
          'Stage 1 (Parallel Fan-Out)',
          'Claude Sonnet 4.6 (`max_tokens=1500`)',
          'Deterministic Python dicts (9 ratios / SMA, RSI, Vol / VIX, TNX, SPX)',
          'Max 120–150w; zero LLM math calculation; end `BULLISH/NEUTRAL/BEARISH` or regime label',
        ],
        [
          'Portfolio Manager',
          'Stage 1 (Fan-In Synthesizer)',
          'Claude Opus 4.7 (`max_tokens=2048`)',
          '4 specialist reports from `CommitteeState`',
          'Max 250w; blind to 3% cap; strict line `ACTION=<...>; CONFIDENCE=<0-100>; SIZE_PCT=<0.0-5.0>`',
        ],
        [
          'Risk Officer',
          'Stage 1 (Sequential Control Gate)',
          'Python Rule + Claude Opus 4.7 (`max_tokens=2048`)',
          '`pm_thesis` + deterministic `vol_30d_annualized`',
          '1st: Python veto if `vol > 60%`; 2nd: Opus veto if `SIZE_PCT > 3.0%`, `CONF < 50`, or macro ignored',
        ],
        [
          'Bull vs. Bear Analysts',
          'Stage 2 (Parallel Adversaries)',
          'Opus 4.7 (Bull) vs. GPT-4o (Bear) (`1500` tok)',
          'Injected `committee_thesis` + `committee_decision` only',
          'Max 200w; `do NOT hedge`; cross-model families; end `BULL_CONVICTION` / `BEAR_CONVICTION=<0-100>`',
        ],
        [
          'Devil’s Advocate & Neutral Judge',
          'Stage 2 (Critique & Final Verdict)',
          'Claude Sonnet 4.6 (`1000` / `1500` tok)',
          '`bull_case` + `bear_case` + `committee_decision`',
          'Devil: 1 weakest claim per side; Judge: permitted to overturn prior via `VERDICT/CONFIDENCE/RATIONALE`',
      ],
      ],
      verdictRule:
        'Spend frontier reasoning tokens (Opus 4.7 / GPT-4o) exclusively where conflicting perspectives are synthesized, gated, or debated; offload routine classification to Haiku/Sonnet and keep all arithmetic and hard volatility ceilings in deterministic Python.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'baaf-ch08-scen1',
      title: 'Look-Ahead Contamination & Rubber-Stamp Risk Reviews in Committee Backtests',
      roleAndContext:
        'Quantitative Developer evaluating the 6-node LangGraph investment committee across a 2-year historical backtest on `TSLA`, `MSFT`, and `NVDA`.',
      symptomOrFailure:
        'The backtest reports an unrealistic 2.4 Sharpe ratio, and inspection of the state logs reveals that the `risk_officer` approved 100% of BUY recommendations because `portfolio_manager` proposed `SIZE_PCT=2.9` on every high-conviction trade.',
      naiveFixAndWhyItFails:
        'Lowering the risk cap to 2.5% in both the PM and Risk Officer prompts fails because the PM simply shifts its proposals to 2.4%, and the unrealistic 2.4 Sharpe ratio is actually caused by `yf.Ticker(t).info` and `.news` returning current 2026 fundamentals and headlines during 2024 historical rebalance dates.',
      firstPrinciplesSolution:
        'Remove all mention of the 3.0% firm-wide single-name cap from the `portfolio_manager` prompt so it sizes purely on conviction (up to 5.0%), refactor all data fetchers to require an `as_of_date` parameter backed by point-in-time historical archives, and restrict the backtest start date to after the latest LLM training cutoff.',
      measurableOutcome:
        'Out-of-sample Sharpe ratio calibrates to a realistic 0.74 with -2.9% max drawdown, and counterfactual veto logs cleanly isolate 18% of over-sized or high-volatility proposals blocked by the Risk Officer.',
    },
    {
      id: 'baaf-ch08-scen2',
      title: 'Homogeneous Model Groupthink & Indiscriminate Downgrades in the Debate Layer',
      roleAndContext:
        'AI Trading Systems Architect adding an adversarial debate stage on top of the investment committee to filter out crowded momentum trades.',
      symptomOrFailure:
        'In initial testing with Claude Sonnet powering all four debate nodes, the Bear agent produces polite, hedged objections that never overturn weak BUY calls; after switching to a stricter Judge prompt and GPT-4o-mini for the Bear, 95% of all BUY calls are downgraded to HOLD except when the Bull runs on Opus 4.7.',
      naiveFixAndWhyItFails:
        'Adjusting temperature parameters fails on newer Claude models that reject `temperature` and does not fix the capability mismatch between Opus 4.7 (Bull) and GPT-4o-mini (Bear) or the overly timid Judge rubric.',
      firstPrinciplesSolution:
        'Pair adversaries of matched frontier capability from distinct model families (Claude Opus 4.7 Bull vs. OpenAI GPT-4o Bear) with explicit `do NOT hedge` rules, constrain the Devil’s Advocate to one weakest claim per side, run a seat-swap audit (swapping Bull and Bear models on historical trades) to verify verdict symmetry, and instruct the Judge to confirm the committee prior unless a material, unrefuted flaw is exposed.',
      measurableOutcome:
        'Seat-swap verdict discrepancy drops below 8%, selective downgrades filter out late-cycle drawdowns while preserving 72% of profitable committee BUY signals.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'baaf-ch08-q1',
        scenarioPrompt:
          'In the LangGraph `CommitteeState` implementation, four specialist analyst nodes (`fundamentals`, `technicals`, `sentiment`, `macro`) execute in parallel in Superstep 1 and merge their outputs before `portfolio_manager` runs in Superstep 2. Why does `CommitteeState` NOT require a custom LangGraph reducer function (such as `operator.add`)?',
        options: [
          {
            label: 'A',
            text: 'Because LangGraph automatically serializes nodes alphabetically even when parallel edges are declared from `START`.',
            isCorrect: false,
            explanation:
              'Multiple edges leaving `START` execute concurrently in the same superstep; they are not serialized alphabetically.',
          },
          {
            label: 'B',
            text: 'Because each parallel analyst writes to a distinct, dedicated key (`fundamentals_report`, `technicals_report`, `sentiment_report`, `macro_report`) in the shared `TypedDict`, eliminating concurrent write collisions.',
            isCorrect: true,
            explanation:
              'Reducers are only required when parallel nodes update the same state key concurrently; separate keys per specialist make parallel state merging conflict-free.',
          },
          {
            label: 'C',
            text: 'Because the specialists pass their outputs directly to each other via AutoGen message passing rather than writing to `CommitteeState`.',
            isCorrect: false,
            explanation:
              'The investment committee communicates exclusively through the shared `CommitteeState` dictionary in LangGraph.',
          },
          {
            label: 'D',
            text: 'Because only the `portfolio_manager` node is allowed to write to `CommitteeState`.',
            isCorrect: false,
            explanation:
              'Every node in the graph returns a partial dictionary that updates its respective slot in `CommitteeState`.',
          },
        ],
      },
      {
        id: 'baaf-ch08-q2',
        scenarioPrompt:
          'Why is the `portfolio_manager` node in Stage 1 explicitly instructed to size positions on a `0.0%` to `5.0%` NAV scale while being kept completely blind to the firm’s `3.0%` single-name risk limit enforced by the downstream `risk_officer`?',
        options: [
          {
            label: 'A',
            text: 'To reduce the prompt token count of the `portfolio_manager` system message.',
            isCorrect: false,
            explanation:
              'A single line stating a 3% limit would take negligible tokens; the omission is an intentional governance design choice.',
          },
          {
            label: 'B',
            text: 'Because Claude Opus 4.7 cannot parse floating-point thresholds below 5.0.',
            isCorrect: false,
            explanation:
              'Opus 4.7 already uses fine-grained floating-point ranges (`0.5–1.0`, `1.0–2.0`, `2.0–3.0`, `3.1–5.0`) in its sizing scale.',
          },
          {
            label: 'C',
            text: 'To preserve role independence: if the PM knew the 3% cap, high-conviction proposals would cluster just below 3%, turning the Risk Officer’s review into a formality and erasing the audit trail between raw conviction and risk policy.',
            isCorrect: true,
            explanation:
              'Separating unconstrained conviction sizing from downstream policy enforcement reveals genuine disagreements in the audit log and allows counterfactual evaluation of the risk cap.',
          },
          {
            label: 'D',
            text: 'So that the backtest harness can execute 5% positions whenever the Risk Officer rejects a trade.',
            isCorrect: false,
            explanation:
              'Whenever the Risk Officer vetoes or rejects a trade, `parse_decision()` overrides the action to `HOLD` and sets `size_pct = 0.0`.',
          },
        ],
      },
      {
        id: 'baaf-ch08-q3',
        scenarioPrompt:
          'Inside the `risk_officer` node, why is the 30-day annualized volatility check (`if vol > 0.60: return VETO`) executed in Python before invoking the Claude Opus 4.7 risk prompt?',
        options: [
          {
            label: 'A',
            text: 'Evaluating objective quantitative constraints deterministically in Python first rejects policy-violating trades instantaneously at zero LLM token cost, reserving the frontier LLM call for qualitative checks (such as whether the thesis ignored macro headwinds).',
            isCorrect: true,
            explanation:
              'Combining a deterministic first layer (hard volatility ceiling) with a second LLM layer (qualitative macro consistency and thesis validation) maximizes auditability and minimizes cost.',
          },
          {
            label: 'B',
            text: 'Because LangGraph nodes cannot access `state["pm_thesis"]` until a Python `if` statement has been evaluated.',
            isCorrect: false,
            explanation:
              'LangGraph passes the full `CommitteeState` dictionary immediately upon entering the node.',
          },
          {
            label: 'C',
            text: 'Because the Risk Officer does not have access to the Opus 4.7 model client.',
            isCorrect: false,
            explanation:
              'The `risk_officer` invokes `opus.invoke([sys, msg])` immediately after the hard volatility check passes.',
          },
          {
            label: 'D',
            text: 'To allow trades with volatility above 60% to bypass the 3% position-size cap.',
            isCorrect: false,
            explanation:
              'Trades with `vol > 0.60` are immediately vetoed (`HOLD (risk veto)`), not exempted.',
          },
        ],
      },
      {
        id: 'baaf-ch08-q4',
        scenarioPrompt:
          'You suspect that your Stage 2 Adversarial Debate layer is favoring `BUY` verdicts simply because the Bull agent runs on a more persuasive model than the Bear agent. What diagnostic experiment from Chapter 8 directly isolates this failure mode?',
        options: [
          {
            label: 'A',
            text: 'Remove the `do NOT hedge` instruction from both the Bull and Bear system prompts.',
            isCorrect: false,
            explanation:
              'Removing `do NOT hedge` causes both adversaries to produce mushy, balanced arguments, destroying the adversarial stress-test.',
          },
          {
            label: 'B',
            text: 'Rerun past historical debates on identical `committee_thesis` inputs with the Bull and Bear model assignments swapped; if verdicts flip when the models swap seats, the debate is measuring model strength rather than the trade.',
            isCorrect: true,
            explanation:
              'A controlled seat-swap rerun holds the financial evidence constant and tests whether the verdict is invariant to which model family argues which side.',
          },
          {
            label: 'C',
            text: 'Have the Bull and Bear nodes re-fetch live market data independently during the debate.',
            isCorrect: false,
            explanation:
              'Stage 2 intentionally operates solely on the committee’s outputs without re-fetching data to ensure modular composition and identical evidence.',
          },
          {
            label: 'D',
            text: 'Instruct the Devil’s Advocate to list every possible weakness in both arguments rather than a single weakest claim.',
            isCorrect: false,
            explanation:
              'Removing the single-weakness constraint dilutes the critique and cannot compensate for an underpowered adversary model.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'baaf-ch08-fc1',
        category: 'foundation',
        front: 'What is the Grossman–Stiglitz paradox, and how does it justify a multi-agent investment committee?',
        back: 'If markets were perfectly informationally efficient, no investor would pay the cost of researching securities; yet without research, prices cannot stay efficient. Therefore, markets are near-efficient: simple single-metric signals get arbitraged away, and edge comes from synthesizing multiple partially correlated information lenses.',
        mentalHook: 'Perfect efficiency is self-defeating; synthesis across orthogonal lenses is where edge survives.',
      },
      {
        id: 'baaf-ch08-fc2',
        category: 'data',
        front: 'What three metadata signals does the `sentiment_analyst` extract from `[date, publisher] title — first sentence` in `fetch_news()`?',
        back: '1) Recency weighting (recent headlines outweigh month-old ones; tight clusters signal a building narrative); 2) Source-quality prior (tier-1 press like Reuters/Bloomberg/WSJ/FT outweighs blogs); 3) Publisher concentration (8 bullish pieces from 1 outlet flags a PR push).',
        mentalHook: 'Date = recency decay; Publisher = tier-1 authority + PR concentration check.',
      },
      {
        id: 'baaf-ch08-fc3',
        category: 'architecture',
        front: 'Why do the Bull and Bear agents in Stage 2 use different LLM families (Claude Opus 4.7 vs. GPT-4o)?',
        back: 'To prevent correlated reasoning: two instances of the same model share identical training data, alignment priors, and blind spots, producing weak contrarian objections even when prompted to disagree.',
        mentalHook: 'Same model weights = shared blind spots; cross-family adversaries = genuine debate.',
      },
      {
        id: 'baaf-ch08-fc4',
        category: 'architecture',
        front: 'Why is the `devil_advocate` node constrained to identify only the SINGLE weakest claim in the Bull case and the SINGLE weakest claim in the Bear case?',
        back: 'Without a single-claim constraint, LLMs generate broad, balanced laundry lists of minor criticisms that fail to tell the Judge which vulnerability is fatal to the thesis.',
        mentalHook: 'One weakest claim per side forces prioritization over laundry-list critique.',
      },
      {
        id: 'baaf-ch08-fc5',
        category: 'evaluation',
        front: 'What are the two major sources of look-ahead bias specific to backtesting LLM trading committees, and how are they prevented?',
        back: '1) Pre-cutoff memorization (the LLM trained on future outcomes after the historical decision date), prevented by testing only after all models’ training cutoffs; 2) Live API leakage (`yfinance .info/.news` returning today’s data), prevented by point-in-time `as_of_date` snapshots.',
        mentalHook: 'Start after the training cutoff + pass `as_of_date` to every data fetcher.',
      },
      {
        id: 'baaf-ch08-fc6',
        category: 'optimization',
        front: 'Since an LLM committee cannot be refitted via gradient descent, what are the three closed-loop channels for improving it from walk-forward backtest logs?',
        back: '1) Confidence calibration (checking if higher `CONFIDENCE` buckets actually yield higher hit rates); 2) Role-level attribution (fixing the specific specialist prompt/data/model that drove losing trades); 3) Counterfactual threshold tuning (measuring returns of trades vetoed by the Risk Officer).',
        mentalHook: 'Calibrate confidence buckets, attribute faulty specialists, audit vetoed counterfactuals.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'baaf-ch08-fc-1',
        conceptTitle: 'Deterministic Graph Orchestration vs. Dynamic Agent Routing in Regulated Trading',
        prompt:
          'Explain why Chapter 8 implements the investment committee as a fixed LangGraph fan-out/fan-in topology with deterministic Python data fetchers rather than using a dynamic LLM orchestrator where agents call tools autonomously.',
        rubricChecklist: [
          'Explains that in the investment committee, the decomposition into four lenses (Fundamentals, Technicals, Sentiment, Macro) is a known design-time requirement, not a runtime discovery.',
          'Highlights that pre-computing ratios, SMAs, RSI, and volatility in Python eliminates an extra tool-selection LLM call per specialist and prevents LLM arithmetic hallucinations.',
          'Points out that a compiled `StateGraph` guarantees every specialist runs in parallel and every recommendation passes through the `risk_officer` gate before reaching `END`.',
          'Connects deterministic control flow and conflict-free state slots to regulatory auditability: compliance officers can trace exact numerical inputs to each specialist summary, PM thesis, and risk verdict.',
        ],
        modelExplanation:
          'In a dynamic orchestrator-worker system, an LLM decides at runtime which specialists and tools to call. For a regulated trading committee, that flexibility is a liability: you never want the orchestrator to accidentally skip the macro lens or bypass the risk officer, nor do you want an LLM wasting an extra API call just to invoke the single data fetcher it always needs. By baking the fan-out/fan-in topology directly into a compiled LangGraph `StateGraph` and computing all financial ratios, RSI, and volatility in deterministic Python functions first, the system guarantees that all four lenses are evaluated in parallel on exact numbers and that every proposed trade passes through the two-layer Risk Officer gate with a reproducible state trace.',
      },
      {
        id: 'baaf-ch08-fc-2',
        conceptTitle: 'Two-Stage Architectural Composition: Why a Committee Needs an Adversarial Debate Layer',
        prompt:
          'Walk through how a flawed `BUY` recommendation on Tesla (`TSLA`) after a momentum rally survives Stage 1 (the Investment Committee) and how Stage 2 (the Adversarial Debate layer) structurally catches and downgrades it.',
        rubricChecklist: [
          'Describes how Stage 1 suffers from structural confirmation bias after a rally: improving trailing metrics, bullish SMAs, positive headlines, and a benign VIX cause all four specialists to reinforce the same bullish consensus.',
          'Explains why the Risk Officer in Stage 1 approves the trade as long as 30-day volatility is under 60%, `SIZE_PCT <= 3.0%`, and `CONFIDENCE >= 50`.',
          'Shows how Stage 2 consumes only `pm_thesis` and `final_decision` and injects structural opposition: a Claude Opus 4.7 Bull vs. a GPT-4o Bear with `do NOT hedge` rules.',
          'Details how the Devil’s Advocate isolates the single weakest claim on each side (e.g., catalysts already priced in vs. binding macro rate headwinds) so the de-anchored Judge can downgrade the `BUY` to `HOLD` or lower conviction.',
        ],
        modelExplanation:
          'In Stage 1, every specialist asks "is this opportunity attractive?" After a strong rally in TSLA, growth metrics, moving averages, media headlines, and VIX readings all look favorable. Because no agent is rewarded for attacking the thesis, the Portfolio Manager receives four supportive reports and outputs `ACTION=BUY; CONFIDENCE=70; SIZE_PCT=2`, which passes the Risk Officer’s mechanical checks (<60% vol, <=3% NAV). Stage 2 intercepts this consensus before execution without re-fetching data: an unhedged GPT-4o Bear attacks valuation stretch and macro rate headwinds from a different model family’s perspective, the Devil’s Advocate pinpoints that the Bull’s catalyst is already priced in, and the Neutral Judge—explicitly permitted to overturn the committee prior—downgrades the fragile `BUY` to `HOLD` with reduced confidence.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'baaf-ch08-grossman-stiglitz',
        label: 'Grossman-Stiglitz Paradox',
        category: 'foundation',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Markets remain near-efficient because research is costly; alpha requires synthesizing partially correlated multi-lens signals.',
        whyItMatters:
          'Justifies multi-agent investment committees over single-metric screening rules.',
      },
      {
        id: 'baaf-ch08-investment-committee',
        label: '4-Lens Investment Committee',
        category: 'architecture',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Parallel LangGraph fan-out across Fundamentals, Technicals, Sentiment, and Macro specialists feeding a Portfolio Manager.',
        whyItMatters:
          'Separates orthogonal domain signals while keeping Python numerical computation deterministic.',
      },
      {
        id: 'baaf-ch08-risk-officer-gate',
        label: 'Two-Layer Risk Officer Gate',
        category: 'security',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Combines qualitative thesis auditing with deterministic Python position sizing, volatility (<60%), and confidence (>=50) overrides.',
        whyItMatters:
          'Prevents persuasive LLM narratives from violating hard institutional risk limits.',
      },
      {
        id: 'baaf-ch08-adversarial-debate',
        label: 'Cross-Model Adversarial Debate',
        category: 'architecture',
        chapterNumber: 8,
        importance: 1,
        definition:
          'Stage 2 stress-test pairing unhedged Bull (Claude Opus) and Bear (GPT-4o) agents with a single-weakness Devil’s Advocate and Neutral Judge.',
        whyItMatters:
          'Breaks single-family correlated reasoning and committee confirmation bias.',
      },
      {
        id: 'baaf-ch08-walk-forward-backtest',
        label: 'Point-in-Time Walk-Forward Backtest',
        category: 'evaluation',
        chapterNumber: 8,
        importance: 2,
        definition:
          'Evaluates trading committees strictly post-training-cutoff with as_of_date snapshots to eliminate look-ahead memorization.',
        whyItMatters:
          'Ensures historical Sharpe and drawdown metrics reflect genuine out-of-sample performance.',
      },
      {
        id: 'baaf-ch08-seat-swap-calibration',
        label: 'Seat-Swap & Confidence Calibration',
        category: 'optimization',
        chapterNumber: 8,
        importance: 2,
        definition:
          'Swaps Bull/Bear model families and audits confidence buckets to isolate model persuasion bias from true signal quality.',
        whyItMatters:
          'Provides a non-gradient closed-loop mechanism to refine prompts, roles, and veto thresholds.',
      },
    ],
    edges: [
      {
        source: 'baaf-ch08-grossman-stiglitz',
        target: 'baaf-ch08-investment-committee',
        relationship: 'prerequisite_for',
        explanation:
          'Near-efficient market dynamics justify synthesizing four orthogonal specialist lenses.',
      },
      {
        source: 'baaf-ch08-investment-committee',
        target: 'baaf-ch08-risk-officer-gate',
        relationship: 'part_of',
        explanation:
          'Every Portfolio Manager thesis must pass through the two-layer Risk Officer gate before execution.',
      },
      {
        source: 'baaf-ch08-risk-officer-gate',
        target: 'baaf-ch08-adversarial-debate',
        relationship: 'optimizes',
        explanation:
          'Approved Stage 1 recommendations are stress-tested by Stage 2 cross-model adversarial debate.',
      },
      {
        source: 'baaf-ch08-adversarial-debate',
        target: 'baaf-ch08-walk-forward-backtest',
        relationship: 'evaluates',
        explanation:
          'Walk-forward backtesting measures whether Stage 2 debate improves out-of-sample risk-adjusted returns.',
      },
      {
        source: 'baaf-ch08-walk-forward-backtest',
        target: 'baaf-ch08-seat-swap-calibration',
        relationship: 'optimizes',
        explanation:
          'Backtest logs drive seat-swap audits, confidence bucket calibration, and counterfactual veto tuning.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 12,
    figuresIncluded: 6,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 8 Part A & Part B sections: EMH vs. Grossman–Stiglitz paradox, all 4 canonical lenses (CAPM/Fama–French/Piotroski, Momentum/RSI/Volatility, Tetlock/Baker–Wurgler/Loughran–McDonald sentiment + `_is_about_company` metadata filter, Macro VIX/TNX/SPX), 6-role LangGraph committee with tiered Claude models, asymmetric PM conviction sizing & 2-layer Risk Officer gate, walk-forward backtesting harness (`Trade`, `parse_decision`, `equity_curve`, `metrics`, look-ahead/point-in-time caveats), confirmation bias & correlated reasoning, 4-role cross-model adversarial debate (Opus Bull vs. GPT-4o Bear, single-weakness Devil’s Advocate, de-anchored Judge), and closed-loop backtest calibration.',
  },
};
