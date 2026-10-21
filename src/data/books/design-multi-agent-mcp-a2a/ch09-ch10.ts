import { ChapterMastery } from '../../../types/book';

export const dmmaCh09Mastery: ChapterMastery = {
  chapterNumber: 9,
  chapterId: 'ch09',
  title: 'Implementing Multi-Agent Systems with A2A',
  subtitle:
    'Declarative YAML Agent Hierarchies, AI-6 AgentTool Delegation, A2A Cluster Diagnostics, and FastMCP Slack Escalation in MAKDO',
  readingTimeMinutes: 8,
  sourceWordCount: 11439,
  executiveThesis:
    'Production multi-agent DevOps replaces brittle imperative scripts with a declarative hierarchy of domain-isolated agents coordinated through natural-language tool invocations. In the Multi-Agent Kubernetes DevOps (MAKDO) architecture, a root Coordinator delegates across read-only A2A diagnostics (Analyzer), guardrail-bound A2A remediation (Fixer), and FastMCP human communication (Slack_Bot) while enforcing strict session isolation and periodic context resets.',
  paradigmShift: {
    oldWay:
      'Monolithic Ops Bots & Hardcoded State Machines: Single-agent scripts hold read-write cluster credentials in one giant prompt and execute rigid if/else remediation pipelines that fail on novel edge cases.',
    newWay:
      'Declarative AgentTool Hierarchy with Least-Privilege Protocol Boundaries: A single coordinator.yaml file defines inline sub-agents wrapped as callable tools, separating read-only A2A triage, approval-gated A2A mutations, and MCP Slack escalation.',
    whyItChanged:
      'Splitting diagnostic recall from mutation authority prevents hallucinated diagnoses from triggering destructive cluster changes while keeping each agent prompt under 60 focused lines.',
  },
  heroIllustrationUrl:
    '/books/design-multi-agent-mcp-a2a/assets/design_multi_agent_mcp_a2a_ch09_plate.png',
  customDiagrams: [
    {
      id: 'dmma-ch09-svg-makdo-topology',
      title: 'MAKDO 4-Agent Hub-and-Spoke Topology & Protocol Boundaries',
      subtitle:
        'How AI-6 wraps inline YAML sub-agents as AgentTools bridging A2A k8s-ai servers and FastMCP Slack channels',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="makdoBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrCyan9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrAmber9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="arrEmerald9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#makdoBg)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">MAKDO ARCHITECTURE: INLINE AGENTTOOLS &amp; DUAL-PROTOCOL BRIDGING</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Single coordinator.yaml instantiates 4 session-isolated agents with strict tool-access boundaries</text>

  <!-- Left: Health Check Loop -->
  <rect x="24" y="138" width="148" height="114" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="98" y="162" fill="#f8fafc" font-size="11.5" font-weight="700" text-anchor="middle">Synchronous Loop</text>
  <text x="98" y="179" fill="#94a3b8" font-size="9.5" text-anchor="middle">main.py (60s interval)</text>
  <rect x="36" y="192" width="124" height="46" rx="5" fill="#0f172a" stroke="#475569" stroke-width="1" />
  <text x="98" y="210" fill="#38bdf8" font-size="9.5" font-weight="600" text-anchor="middle">Session Reset Guard</text>
  <text x="98" y="226" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Clear if messages &gt; 3</text>

  <!-- Center: Coordinator Agent -->
  <rect x="216" y="116" width="184" height="158" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="308" y="140" fill="#38bdf8" font-size="12.5" font-weight="700" text-anchor="middle">MAKDO Coordinator</text>
  <text x="308" y="156" fill="#94a3b8" font-size="9.5" text-anchor="middle">Root LLM (gpt-4o)</text>
  <rect x="230" y="168" width="156" height="42" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="308" y="185" fill="#e0f2fe" font-size="9.5" font-weight="600" text-anchor="middle">Native Memory Tools</text>
  <text x="308" y="200" fill="#7dd3fc" font-size="8.5" text-anchor="middle">save_memory / retrieve_memory</text>
  <rect x="230" y="218" width="156" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="308" y="235" fill="#e0f2fe" font-size="9.5" font-weight="600" text-anchor="middle">3 Wrapped AgentTools</text>
  <text x="308" y="250" fill="#94a3b8" font-size="8.5" text-anchor="middle">Zero direct k8s or Slack access</text>

  <line x1="172" y1="195" x2="212" y2="195" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrCyan9)" />

  <!-- Sub-Agent 1: Analyzer -->
  <rect x="454" y="68" width="156" height="92" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="532" y="90" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">MAKDO_Analyzer</text>
  <text x="532" y="106" fill="#94a3b8" font-size="9" text-anchor="middle">Read-Only Diagnostics</text>
  <text x="532" y="124" fill="#d1fae5" font-size="9" text-anchor="middle">Isolated Session Context</text>
  <text x="532" y="142" fill="#6ee7b7" font-size="8.5" text-anchor="middle">Severity-Ranked Report</text>

  <!-- Sub-Agent 2: Fixer -->
  <rect x="454" y="176" width="156" height="92" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="532" y="198" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">MAKDO_Fixer</text>
  <text x="532" y="214" fill="#94a3b8" font-size="9" text-anchor="middle">Guardrail Remediation</text>
  <text x="532" y="232" fill="#fef3c7" font-size="9" text-anchor="middle">Auto-Restart CrashLoops</text>
  <text x="532" y="250" fill="#fcd34d" font-size="8.5" text-anchor="middle">Skips Image/Scale Changes</text>

  <!-- Sub-Agent 3: Slack_Bot -->
  <rect x="454" y="284" width="156" height="92" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="532" y="306" fill="#c084fc" font-size="11.5" font-weight="700" text-anchor="middle">MAKDO_Slack_Bot</text>
  <text x="532" y="322" fill="#94a3b8" font-size="9" text-anchor="middle">Human Control Bridge</text>
  <text x="532" y="340" fill="#f3e8ff" font-size="9" text-anchor="middle">Unfiltered Full Reports</text>
  <text x="532" y="358" fill="#d8b4fe" font-size="8.5" text-anchor="middle">Channel #makdo-devops</text>

  <!-- Coordinator to Sub-Agents -->
  <path d="M 400 165 L 450 114" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrEmerald9)" />
  <line x1="400" y1="210" x2="450" y2="218" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrAmber9)" />
  <path d="M 400 245 L 450 325" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrCyan9)" />

  <!-- Right Targets: A2A Server & FastMCP -->
  <rect x="652" y="108" width="126" height="120" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="715" y="132" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">k8s-ai Server</text>
  <text x="715" y="148" fill="#94a3b8" font-size="9" text-anchor="middle">A2A (:9999)</text>
  <text x="715" y="170" fill="#e2e8f0" font-size="8.5" text-anchor="middle">kind-makdo-test</text>
  <text x="715" y="188" fill="#7dd3fc" font-size="8.5" text-anchor="middle">resource_health</text>
  <text x="715" y="204" fill="#7dd3fc" font-size="8.5" text-anchor="middle">diagnose_issue</text>

  <rect x="652" y="284" width="126" height="92" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
  <text x="715" y="308" fill="#c084fc" font-size="11" font-weight="700" text-anchor="middle">FastMCP Slack</text>
  <text x="715" y="324" fill="#94a3b8" font-size="9" text-anchor="middle">Local MCP Server</text>
  <text x="715" y="344" fill="#f3e8ff" font-size="8.5" text-anchor="middle">slack_post_message</text>
  <text x="715" y="360" fill="#f3e8ff" font-size="8.5" text-anchor="middle">slack_list_channels</text>

  <line x1="610" y1="120" x2="648" y2="145" stroke="#10b981" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#arrEmerald9)" />
  <line x1="610" y1="215" x2="648" y2="185" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#arrAmber9)" />
  <line x1="610" y1="330" x2="648" y2="330" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#arrCyan9)" />
</svg>`,
      bierutCaption:
        'MAKDO isolates operational authority by binding sub-agents as AgentTools under a pure orchestrator that possesses zero direct Kubernetes or Slack tools.',
      annotations: [
        {
          step: '1',
          label: 'Synchronous Health Loop & Context Pruning',
          explanation:
            'The main entry point triggers a 60-second synchronous check and clears coordinator session messages beyond the system prompt after each cycle to prevent 128k context overflow.',
        },
        {
          step: '2',
          label: 'AgentTool Late-Binding Delegation',
          explanation:
            'AI-6 instantiates inline YAML child definitions as standard Tool interfaces (agent_MAKDO_Analyzer, agent_MAKDO_Fixer, agent_MAKDO_Slack_Bot) with isolated sessions.',
        },
        {
          step: '3',
          label: 'Dual-Protocol Execution Boundary',
          explanation:
            'Analyzer and Fixer communicate with the k8s-ai cluster server over HTTP A2A (:9999), whereas Slack_Bot invokes local Python functions registered via FastMCP decorators.',
        },
      ],
    },
    {
      id: 'dmma-ch09-svg-remediation-gate',
      title: 'Safety-First Remediation & Mandatory Human Escalation Flow',
      subtitle:
        'How MAKDO diverges execution paths between safe CrashLoopBackOff restarts and approval-gated ImagePullBackOff deployment edits',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="gateBg9" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrG9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="arrR9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#gateBg9)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">MAKDO SAFETY GATE: AUTO-REMEDIATION vs. HUMAN ESCALATION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Fixer prompt policy classifies Kubernetes faults by blast radius before executing A2A mutations</text>

  <!-- Step 1: Analyzer Output -->
  <rect x="28" y="136" width="185" height="128" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="120" y="160" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Analyzer Diagnostic</text>
  <text x="42" y="182" fill="#e2e8f0" font-size="9.5">• Pod A: CrashLoopBackOff</text>
  <text x="50" y="197" fill="#94a3b8" font-size="8.5">(Exit code 1, 5 restarts)</text>
  <text x="42" y="218" fill="#e2e8f0" font-size="9.5">• Pod B/C: ImagePullBackOff</text>
  <text x="50" y="233" fill="#94a3b8" font-size="8.5">(nonexistent:v1.0.0 missing)</text>
  <text x="42" y="252" fill="#7dd3fc" font-size="8.5" font-weight="600">Posted unfiltered to Slack</text>

  <!-- Step 2: Fixer Policy Gate -->
  <polygon points="315,120 405,200 315,280 225,200" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
  <text x="315" y="194" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">Fixer Policy</text>
  <text x="315" y="210" fill="#fde68a" font-size="9" text-anchor="middle">Destructive?</text>

  <line x1="213" y1="200" x2="223" y2="200" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrG9)" />

  <!-- Top Branch: Safe Auto-Fix -->
  <rect x="445" y="76" width="325" height="106" rx="8" fill="#062e22" stroke="#10b981" stroke-width="1.5" />
  <text x="462" y="98" fill="#34d399" font-size="11.5" font-weight="700">SAFE PATH: Transient Pod Restart</text>
  <text x="462" y="118" fill="#d1fae5" font-size="9.5">• Action: kubectl delete pod crashloop-app -n default</text>
  <text x="462" y="136" fill="#d1fae5" font-size="9.5">• Verification: Confirm pod reschedules cleanly</text>
  <text x="462" y="154" fill="#6ee7b7" font-size="9">• Slack_Bot: Posts ✅ Success with before/after state</text>

  <!-- Bottom Branch: Restricted Operation Skip & Escalate -->
  <rect x="445" y="218" width="325" height="122" rx="8" fill="#3b1219" stroke="#f43f5e" stroke-width="1.5" />
  <text x="462" y="240" fill="#fda4af" font-size="11.5" font-weight="700">RESTRICTED PATH: Deployment Config Mutation</text>
  <text x="462" y="260" fill="#fecdd3" font-size="9.5">• Rule: Image updates, scale-downs &amp; service deletes</text>
  <text x="462" y="278" fill="#fecdd3" font-size="9.5">• Action: Fixer SKIPS execution (0 cluster writes)</text>
  <text x="462" y="296" fill="#fecdd3" font-size="9.5">• Escalation: Emits exact CLI command for SRE approval:</text>
  <text x="462" y="316" fill="#fde047" font-size="8.5" font-family="monospace">kubectl set image deployment/image-pull-fail ...</text>

  <path d="M 365 155 L 440 128" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrG9)" />
  <path d="M 365 245 L 440 272" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrR9)" />

  <!-- Bottom Cascading Guard -->
  <rect x="28" y="356" width="742" height="44" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1" />
  <text x="44" y="375" fill="#fbbf24" font-size="10" font-weight="700">CASCADING FAILURE CIRCUIT BREAKER:</text>
  <text x="255" y="375" fill="#e2e8f0" font-size="9.5">If failing pods increase after a fix (e.g., 3 -&gt; 5 pods failing), Coordinator halts all automation and pages SREs.</text>
  <text x="44" y="391" fill="#94a3b8" font-size="8.5">Audit Guarantee: Coordinator prompt forbids summarizing sub-agent outputs—every raw diagnostic &amp; skip reason lands in #makdo-devops.</text>
</svg>`,
      bierutCaption:
        'By encoding action-authority boundaries in the Fixer prompt and requiring verbatim Slack forwarding, MAKDO resolves transient faults while halting before destructive configuration changes.',
      annotations: [
        {
          step: '1',
          label: 'Unfiltered Diagnostic Hand-Off',
          explanation:
            'Analyzer inspects pod health and event logs via k8s-ai, returning exact pod identifiers and exit codes that Coordinator forwards verbatim to Slack.',
        },
        {
          step: '2',
          label: 'Prompt-Enforced Action Classification',
          explanation:
            'Fixer checks each recommended action against its restricted list: pod restarts proceed automatically, while deployment image edits or scale-downs are skipped.',
        },
        {
          step: '3',
          label: 'Regression Halt & Manual CLI Handoff',
          explanation:
            'Skipped operations generate copy-pasteable kubectl remediation commands in Slack, and any post-fix increase in failing pods halts autonomous execution immediately.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch09-mm1',
      name: 'Sub-Agents as Late-Bound Tools (The AgentTool Illusion)',
      tagline:
        'To the parent LLM, delegating to an autonomous multi-step sub-agent is indistinguishable from invoking a local function.',
      naiveIntuition:
        'Orchestrating a team of specialized agents requires writing custom Python message buses, state machine routers, and explicit class method invocations between Coordinator, Analyzer, and Fixer.',
      firstPrinciplesReality:
        'AI-6 wraps every inline YAML child agent inside an AgentTool class implementing the standard Tool interface (name + natural-language message argument), allowing the root LLM to bind workflow routing dynamically at runtime.',
      howToApply:
        'Define child agents inline under the parent coordinator.yaml agents key and refine the Coordinator system prompt so it engineers self-contained prompts whenever calling agent_MAKDO_Analyzer or agent_MAKDO_Fixer.',
    },
    {
      id: 'dmma-ch09-mm2',
      name: 'Diagnostic Recall vs. Mutation Authority Split',
      tagline:
        'Never grant cluster write permissions to the agent responsible for open-ended exploratory triage.',
      naiveIntuition:
        'Because both Analyzer and Fixer talk to the same k8s-ai A2A server, merging them into one Kubernetes agent reduces coordination latency and token overhead.',
      firstPrinciplesReality:
        'Diagnostic triage and production mutation have asymmetric failure costs: a false-positive diagnosis from a read-only Analyzer causes zero cluster damage, whereas an unguarded Fixer mutation can trigger a production outage.',
      howToApply:
        'Separate read-only assessment agents (tuned for high recall and broad exploration) from remediation agents (constrained by strict approval whitelists and post-action verification checks).',
    },
    {
      id: 'dmma-ch09-mm3',
      name: 'Stateless Cycle Pruning with Externalized Memory',
      tagline:
        'Continuous monitoring loops will suffocate on their own conversation history unless pruned after every tick.',
      naiveIntuition:
        'Keeping the Coordinator session history intact across 60-second health checks gives the LLM helpful longitudinal context about cluster stability.',
      firstPrinciplesReality:
        'Appending multi-kilobyte cluster reports every minute overflows the 128k token window within hours and corrupts tool-call message ordering; cross-cycle state belongs in explicit key-value memory tools, not raw chat history.',
      howToApply:
        'Clear coordinator.session.messages down to index 0 (the system prompt) at the end of every health check loop and persist cross-cycle state via save_memory and retrieve_memory.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch09-sec1',
      sectionNumber: '9.1',
      title: 'Declarative Multi-Agent Architecture & Tool Discovery in AI-6',
      subtitle:
        'Single-file YAML hierarchy, unified get_tool_dict() resolution, and session-isolated AgentTool delegation',
      coreMechanism:
        'MAKDO replaces imperative multi-agent boilerplate with a single hierarchical configuration file (`coordinator.yaml`). When `Config.from_file()` loads the parent Coordinator, AI-6 automatically instantiates the three inline child definitions (`MAKDO_Analyzer`, `MAKDO_Fixer`, and `MAKDO_Slack_Bot`) and wraps each inside an `AgentTool` adapter. During initialization, `tool_manager.get_tool_dict()` aggregates capabilities from four distinct sources—native AI-6 directories (`tools_dirs`), local MCP scripts (`mcp_tools_dirs`), remote A2A endpoints (`a2a_servers`), and inline child `AgentTool` instances—before filtering via enabled/disabled lists.\n\nEach agent operates inside an isolated `SessionManager` instance with zero shared conversation history. When the Coordinator invokes `agent_MAKDO_Analyzer`, the child agent receives only its own system prompt, its assigned `k8s-ai` A2A tools, and the natural-language `message` string crafted by the Coordinator. This encapsulation prevents sub-agent tool traces from polluting the parent context window while enforcing least-privilege access through YAML configuration.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Single-File Hierarchical Instantiation',
          detail:
            'Load coordinator.yaml via Config.from_file() so AI-6 instantiates the root Coordinator alongside inline Analyzer, Fixer, and Slack_Bot child agents.',
        },
        {
          step: '2',
          title: 'Five-Stage Tool Dictionary Resolution',
          detail:
            'Execute get_tool_dict() to merge native memory tools, FastMCP Slack tools, remote k8s-ai A2A skills, and wrapped child AgentTools per agent role.',
        },
        {
          step: '3',
          title: 'Session-Isolated Message Passing',
          detail:
            'Pass explicit cluster context inside the AgentTool message argument, execute the child agent loop in an isolated session, and return the final report to the Coordinator.',
        },
      ],
      keyTakeaways: [
        'Defining all sub-agents inline inside coordinator.yaml guarantees atomic deployment and eliminates configuration drift across agent boundaries.',
        'The Coordinator holds zero direct Kubernetes or Slack tools, forcing all external side effects through specialized sub-agents.',
        'Because session isolation hides parent chat history from sub-agents, the Coordinator must include complete pod names and namespaces in every delegation prompt.',
      ],
      commonPitfalls: [
        'Using asyncio event loops in main.py alongside synchronous MCP tool runners, which triggers runtime event-loop collisions that synchronous time.sleep() loops avoid.',
        'Allowing Coordinator conversation history to accumulate across 60-second health checks until the 128k context window overflows.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch09_plate.png',
          originalLabel:
            'Chapter 9 Opening Blueprint: Implementing Multi-Agent Systems with A2A (Page 342)',
          bierutTitle:
            'Decompose Monolithic Cluster Ops into Protocol-Isolated Specialist Agents',
          editorialAnalysis:
            'The Chapter 9 architectural plate maps the structural transition from manual kubectl firefighting to the four-agent MAKDO topology. By routing cluster diagnostics and remediation through A2A to k8s-ai while isolating human notifications behind a FastMCP Slack bridge, the system achieves autonomous 24/7 triage without surrendering human operational control.',
          keyTakeaways: [
            'Workflow-driven agent decomposition maps directly to incident stages: detection (Analyzer), remediation (Fixer), communication (Slack_Bot), and orchestration (Coordinator).',
            'Adding new capabilities such as a MAKDO_Security_Scanner requires only appending a YAML block and updating the Coordinator prompt.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch09-sec2',
      sectionNumber: '9.2',
      title: 'Dynamic LLM Orchestration, Memory Persistence, and Failure Guards',
      subtitle:
        'Prompt-driven workflow branching, conditional image-pull triage, and regression halt triggers',
      coreMechanism:
        'Unlike static DAG engines that hardcode `detect -> fix -> notify` transitions, MAKDO encodes operational policy inside the Coordinator system prompt and relies on LLM reasoning to branch dynamically based on diagnostic severity. When `MAKDO_Analyzer` inspects an `ImagePullBackOff` fault, the Coordinator branches on the root cause: missing registry images trigger immediate Slack escalation, expired credentials route to `MAKDO_Fixer` to apply image pull secrets followed by an Analyzer verification pass, and transient registry outages schedule a delayed retry.\n\nTo preserve operational continuity across session resets and process restarts, the Coordinator invokes native `save_memory` and `retrieve_memory` tools backed by `data/memory`. Before dispatching `MAKDO_Fixer` on `production-east`, the Coordinator queries `recent-operations` to prevent duplicate remediation within a five-minute window. If a remediation attempt causes failing pod counts to rise (for example, from 3 to 5 failing pods), the Coordinator recognizes a cascading regression, halts automated fixes, runs a full cluster diagnostic, and pages human operators.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Memory Deduplication Check',
          detail:
            'Query retrieve_memory for the target cluster before remediation to verify whether fixes were already applied in the preceding five-minute window.',
        },
        {
          step: '2',
          title: 'Severity & Cause-Based Branching',
          detail:
            'Evaluate Analyzer output to route safe restarts directly to Fixer while diverting destructive deletes, scale-downs, or missing image updates to human approval.',
        },
        {
          step: '3',
          title: 'Post-Fix Verification & Regression Halt',
          detail:
            'Compare failing pod counts before and after Fixer execution; if failures increase, abort automation immediately and post a root-cause diagnostic to Slack.',
        },
      ],
      keyTakeaways: [
        'Hybrid orchestration combines proactive 60-second scheduled sweeps with reactive Slack command handling and immediate critical escalation.',
        'Persisting structured JSON state via save_memory decouples long-term operational awareness from ephemeral LLM conversation sessions.',
        'Cascading failure guards prevent a flawed automated fix from compounding cluster outages across subsequent health check cycles.',
      ],
      commonPitfalls: [
        'Summarizing or truncating Analyzer or Fixer reports inside the Coordinator before passing them to Slack_Bot, which strips away pod names and exit codes needed by SREs.',
        'Dispatching Fixer across multiple production clusters simultaneously without sequential cluster-by-cluster verification.',
      ],
    },
    {
      id: 'dmma-ch09-sec3',
      sectionNumber: '9.3',
      title: 'Human-in-the-Loop Control via FastMCP & Safety-First Escalation',
      subtitle:
        'Decorator-based FastMCP Slack tools, verbatim audit trails, and skip-and-escalate remediation patterns',
      coreMechanism:
        'MAKDO implements its human control plane through `MAKDO_Slack_Bot`, which connects to a custom MCP server (`src/makdo/mcp_tools/slack.py`) built with the Python `FastMCP` SDK. Using `@mcp.tool()` decorators on `slack_post_message` and `slack_list_channels`, FastMCP infers JSON schemas from Python type hints and docstrings while handling JSON-RPC initialization and serialization automatically. The server loads `AI6_BOT_TOKEN` from the environment or `.env` file, normalizes `#` channel prefixes, executes synchronous `requests.post` calls to `chat.postMessage`, and returns LLM-readable status strings (`✅` or `❌`).\n\nIn the end-to-end demo against `kind-makdo-test`, the test harness injects a `crashloop-app` pod (`exit 1`) and a two-replica `image-pull-fail` deployment (`nonexistent-registry.io/fake/image:v1.0.0`). `MAKDO_Analyzer` detects all three failing pods out of 15 total pods via `k8s-ai`. `MAKDO_Fixer` then deletes `default/crashloop-app` to trigger a clean restart but explicitly skips both `image-pull-fail` pods because changing deployment images requires human approval, posting the exact `kubectl set image` command to `#makdo-devops`.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'FastMCP Tool Registration & Auth',
          detail:
            'Decorate slack_post_message and slack_list_channels with @mcp.tool() and authenticate via OAuth Bearer token scoped to chat:write and channels:read.',
        },
        {
          step: '2',
          title: 'Verbatim Diagnostic Broadcast',
          detail:
            'Forward the complete Analyzer report (3 critical pods, 12 healthy pods) through Slack_Bot to #makdo-devops without Coordinator summarization.',
        },
        {
          step: '3',
          title: 'Selective Fix & Actionable Escalation',
          detail:
            'Delete the CrashLoopBackOff pod via k8s-ai while skipping the ImagePullBackOff deployment and posting the manual kubectl set image command for human execution.',
        },
      ],
      keyTakeaways: [
        'FastMCP eliminates manual JSON-RPC boilerplate, turning a 50-line Python script with requests calls into a standards-compliant MCP server.',
        'Encapsulating human communication inside Slack_Bot allows swapping Slack for Microsoft Teams, PagerDuty, or SMTP email by replacing the MCP server without touching Analyzer or Fixer.',
        'Safety-first escalation skips destructive or configuration-altering operations by default and equips human operators with copy-pasteable remediation commands.',
      ],
      commonPitfalls: [
        'Omitting channel allowlists and user_id authorization checks in slack_post_message, allowing unauthorized Slack users to approve production mutations.',
        'Relying on deterministic test assertions for LLM-formatted Slack messages rather than validating structural presence of pod names, statuses, and skip reasons.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Multi-Agent DevOps Decomposition & Orchestration Trade-Off Matrix',
      description:
        'Comparing architectural patterns for Kubernetes incident triage, remediation authority, and human communication',
      headers: [
        'Architecture Pattern',
        'Blast-Radius Safety',
        'Prompt & Maintenance Complexity',
        'Token & Latency Overhead',
        'Extensibility (New Domains)',
      ],
      rows: [
        [
          'Monolithic Single Agent (All k8s + Slack Tools)',
          'Low (diagnostic bugs can trigger write tools)',
          '200+ line tangled prompt; fragile tuning',
          'Lowest (1 LLM context, zero handoffs)',
          'Poor (every new tool bloats core prompt)',
        ],
        [
          'Hardcoded Imperative State Machine',
          'High (strict code branches enforce rules)',
          'High Python orchestration code maintenance',
          'Low (fixed call sequence)',
          'Rigid (requires code changes per workflow)',
        ],
        [
          'MAKDO 4-Agent YAML Hierarchy (AI-6 + A2A + MCP)',
          'High (read-only Analyzer isolated from Fixer)',
          '~50-line modular YAML prompts; <150 LOC Python',
          'Moderate (parent-to-child AgentTool handoffs)',
          'High (append inline YAML agent + prompt line)',
        ],
      ],
      verdictRule:
        'Use a monolithic single agent only for read-only sandbox prototypes; adopt the MAKDO 4-agent YAML hierarchy whenever production mutations require separating diagnostic recall from approval-gated write authority.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch09-scen1',
      title: 'Context Window Overflow in Continuous 60-Second Cluster Polling',
      roleAndContext:
        'Platform SRE deploying MAKDO to monitor a 50-node Kubernetes cluster with a 60-second health check interval.',
      symptomOrFailure:
        'After 4 hours of autonomous operation, the Coordinator agent crashes with 128k token context-limit errors and malformed tool-call sequences.',
      naiveFixAndWhyItFails:
        'Increasing the polling interval to 15 minutes or switching to a larger context model only delays the crash while inflating per-cycle token costs by 20x.',
      firstPrinciplesSolution:
        'Prune `coordinator.session.messages` after every health check cycle so only `messages[0]` (the system prompt) remains, and store cross-cycle cluster status in `save_memory` / `retrieve_memory`.',
      measurableOutcome:
        'Coordinator token consumption stabilizes at a flat ~4.2k tokens per cycle, enabling uninterrupted 24/7 polling with zero context-overflow crashes.',
    },
    {
      id: 'dmma-ch09-scen2',
      title: 'Preventing Unapproved Production Deployment Rollbacks During Image Pull Outages',
      roleAndContext:
        'DevOps Architect configuring `MAKDO_Fixer` to handle `CrashLoopBackOff` and `ImagePullBackOff` alerts in production.',
      symptomOrFailure:
        'During a container registry typo on a canary release, an unguarded remediation agent attempts to mutate deployment specs and delete services automatically.',
      naiveFixAndWhyItFails:
        'Disabling `MAKDO_Fixer` completely eliminates autonomous recovery for routine `CrashLoopBackOff` pods, forcing on-call engineers to wake up for transient restarts.',
      firstPrinciplesSolution:
        'Split `MAKDO_Analyzer` (read-only triage) from `MAKDO_Fixer`, and encode an explicit approval-required blacklist (`delete deployment`, `scale down`, `image updates`) in the Fixer prompt so restricted actions are skipped and escalated to `#makdo-devops` with exact `kubectl set image` commands.',
      measurableOutcome:
        '100% of transient `CrashLoopBackOff` pods auto-recover within 60 seconds while 100% of deployment configuration mutations halt safely for human sign-off.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch09-q1',
        scenarioPrompt:
          'In MAKDO’s `coordinator.yaml`, both `MAKDO_Analyzer` and `MAKDO_Fixer` connect to the exact same `k8s-ai` A2A server (`http://localhost:9999`). Why does the architecture maintain two separate agents instead of merging them into one Kubernetes specialist?',
        options: [
          {
            label: 'A',
            text: 'The A2A protocol specification forbids a single client agent from invoking both read and write skills on the same remote server.',
            isCorrect: false,
            explanation:
              'A2A imposes no protocol restriction on mixing read and write skills; Chapter 3’s simple k8s-ai client used a single agent for all operations.',
          },
          {
            label: 'B',
            text: 'Separating them isolates failure modes and access boundaries: Analyzer can run high-recall read-only diagnostics with zero risk of mutating cluster state, while Fixer enforces strict approval guardrails on write operations.',
            isCorrect: true,
            explanation:
              'Analyzer failures only produce incomplete reports, whereas Fixer failures mutate live resources; splitting them allows independent prompt tuning, testing, and future read-only credential enforcement.',
          },
          {
            label: 'C',
            text: 'AI-6’s `AgentTool` wrapper limits each sub-agent to a maximum of two A2A skills per session.',
            isCorrect: false,
            explanation:
              'AI-6 discovers and binds all available skills from configured `a2a_servers` unless filtered by `enabled_tools` or `disabled_tools`.',
          },
          {
            label: 'D',
            text: 'Merging them would prevent `MAKDO_Slack_Bot` from reading the cluster state directly from `k8s-ai`.',
            isCorrect: false,
            explanation:
              'Slack_Bot never connects to `k8s-ai`; it receives formatted text from the Coordinator and communicates exclusively via FastMCP Slack tools.',
          },
        ],
      },
      {
        id: 'dmma-ch09-q2',
        scenarioPrompt:
          'When `MAKDO_Coordinator` invokes `agent_MAKDO_Fixer` after `MAKDO_Analyzer` detects three failing pods, `MAKDO_Fixer` immediately calls `k8s-ai` to re-scan the entire cluster from scratch before fixing anything. What architectural mechanism in AI-6 caused this redundant work?',
        options: [
          {
            label: 'A',
            text: 'Each AI-6 agent runs in an isolated session (`SessionManager`) with zero access to the Coordinator’s prior conversation history unless the Coordinator explicitly passes the pod names in the `AgentTool` message argument.',
            isCorrect: true,
            explanation:
              'Because AI-6 enforces strict session isolation, `MAKDO_Fixer` only sees its own system prompt and the incoming `message` string from the Coordinator.',
          },
          {
            label: 'B',
            text: 'The `main.py` health check loop clears `coordinator.session.messages` in the middle of a single turn between Analyzer and Fixer calls.',
            isCorrect: false,
            explanation:
              'Session clearing in `main.py` only runs after `coordinator.send_message(prompt)` completes the entire health check cycle.',
          },
          {
            label: 'C',
            text: 'FastMCP automatically strips pod identifiers from tool responses to comply with PII redaction rules.',
            isCorrect: false,
            explanation:
              'FastMCP only handles Slack communication and does not intercept A2A calls or Coordinator-to-Fixer delegations.',
          },
          {
            label: 'D',
            text: 'The `tool_manager.get_tool_dict()` function disables memory tools whenever `a2a_servers` are configured.',
            isCorrect: false,
            explanation:
              '`get_tool_dict()` additively combines native tools, MCP tools, A2A tools, and AgentTools before applying enabled/disabled filters.',
          },
        ],
      },
      {
        id: 'dmma-ch09-q3',
        scenarioPrompt:
          'During the MAKDO end-to-end demo on `kind-makdo-test`, `MAKDO_Analyzer` reports three critical pod failures: one `crashloop-app` pod (`CrashLoopBackOff`) and two `image-pull-fail` pods (`ImagePullBackOff` on `nonexistent-registry.io/fake/image:v1.0.0`). How does `MAKDO_Fixer` handle these three pods?',
        options: [
          {
            label: 'A',
            text: 'It deletes all three pods via `kubectl delete pod` so Kubernetes can recreate them with fresh containers.',
            isCorrect: false,
            explanation:
              'Deleting `ImagePullBackOff` pods controlled by a Deployment with a bad image reference is futile because the new pods will fail with the exact same image pull error.',
          },
          {
            label: 'B',
            text: 'It deletes `crashloop-app` to allow a clean restart, skips both `image-pull-fail` pods because updating a deployment image requires human approval, and returns the exact `kubectl set image` command for Slack escalation.',
            isCorrect: true,
            explanation:
              'Fixer’s safety-first policy auto-remediates the transient pod restart while skipping deployment configuration changes and escalating actionable CLI instructions to `#makdo-devops`.',
          },
          {
            label: 'C',
            text: 'It rolls back the `image-pull-fail` deployment to `:latest` automatically and pauses `crashloop-app`.',
            isCorrect: false,
            explanation:
              'Deployment configuration changes are on Fixer’s restricted list and never execute without human approval.',
          },
          {
            label: 'D',
            text: 'It halts all remediation immediately because three failing pods exceed the cascading failure threshold.',
            isCorrect: false,
            explanation:
              'The cascading failure halt triggers only when failing pod counts increase *after* a remediation attempt (e.g., 3 failing pods rising to 5).',
          },
        ],
      },
      {
        id: 'dmma-ch09-q4',
        scenarioPrompt:
          'Why does MAKDO’s `main.py` entrypoint use a synchronous `while True` loop with `time.sleep(check_interval)` rather than `asyncio.run()`?',
        options: [
          {
            label: 'A',
            text: 'To avoid Python asyncio event-loop conflicts with the synchronous MCP tool execution runtime in AI-6.',
            isCorrect: true,
            explanation:
              'Running a top-level `asyncio` loop in `main.py` collides with MCP tool invocation event loops; a synchronous loop with `time.sleep()` keeps execution conflict-free.',
          },
          {
            label: 'B',
            text: 'Because OpenAI’s `gpt-4o` API does not support asynchronous HTTP requests when tool calling is enabled.',
            isCorrect: false,
            explanation:
              'OpenAI’s API supports async calls; the constraint comes from local MCP tool event-loop management inside the framework.',
          },
          {
            label: 'C',
            text: 'Because Kubernetes `kind` clusters reject concurrent TCP connections on port 9999.',
            isCorrect: false,
            explanation:
              '`k8s-ai` is an HTTP A2A server on port 9999 that handles standard concurrent requests.',
          },
          {
            label: 'D',
            text: 'Because `Config.from_file()` can only parse YAML files on the main OS thread.',
            isCorrect: false,
            explanation:
              'YAML parsing is unrelated to asyncio event-loop conflicts during tool execution.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch09-fc1',
        category: 'architecture',
        front:
          'How does AI-6’s `AgentTool` pattern expose sub-agents to the parent Coordinator in MAKDO?',
        back: 'It wraps each inline YAML sub-agent inside a standard `Tool` interface that accepts a single natural-language `message` parameter and returns the sub-agent’s final response string.',
        mentalHook: 'To the parent LLM, a sub-agent is just a smart function call.',
      },
      {
        id: 'dmma-ch09-fc2',
        category: 'architecture',
        front:
          'What five steps does `tool_manager.get_tool_dict()` execute to assemble an agent’s capability set in AI-6?',
        back: 'It discovers (1) native AI-6 tools, (2) local MCP tools, (3) remote A2A server skills, and (4) inline child `AgentTool`s, then (5) filters the combined list using `enabled_tools` and `disabled_tools`.',
        mentalHook: 'Native + MCP + A2A + AgentTools -> Filtered Dict.',
      },
      {
        id: 'dmma-ch09-fc3',
        category: 'optimization',
        front:
          'How does MAKDO prevent 128k token context-window overflow during continuous 60-second health check polling?',
        back: 'At the end of every health check cycle, `main.py` clears `coordinator.session.messages` whenever `len(messages) > 3`, preserving only `messages[0]` (the system prompt).',
        mentalHook: 'Wipe the chat slate after every 60-second tick; keep only the system prompt.',
      },
      {
        id: 'dmma-ch09-fc4',
        category: 'security',
        front:
          'Which Kubernetes operations are explicitly restricted in `MAKDO_Fixer`’s safety-first escalation policy?',
        back: 'Resource deletions (deployments/services), scale-down operations, and deployment configuration changes (such as container image updates) must be skipped and escalated to Slack for human approval.',
        mentalHook: 'Restart pods freely; skip and escalate deletes, scale-downs, and image edits.',
      },
      {
        id: 'dmma-ch09-fc5',
        category: 'adaptation',
        front:
          'How does `FastMCP` simplify building the custom Slack MCP server (`src/makdo/mcp_tools/slack.py`) compared to raw MCP?',
        back: 'The `@mcp.tool()` decorator automatically infers tool schemas from Python function signatures and docstrings while handling all JSON-RPC protocol negotiation, serialization, and routing.',
        mentalHook: 'One `@mcp.tool()` decorator replaces hundreds of lines of JSON-RPC plumbing.',
      },
      {
        id: 'dmma-ch09-fc6',
        category: 'evaluation',
        front:
          'How does `MAKDO_Coordinator` respond when a remediation attempt causes the number of failing pods to increase from 3 to 5?',
        back: 'It detects a cascading failure regression, immediately halts automated remediation, triggers a full Analyzer cluster diagnostic, and alerts human operators in `#makdo-devops`.',
        mentalHook: 'If the fix makes the patient worse, drop the scalpel and page the surgeon.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch09-feyn1',
        conceptTitle:
          'Session Isolation vs. Cross-Cycle State Persistence in AI-6 Multi-Agent Systems',
        prompt:
          'Explain to a backend engineer why MAKDO simultaneously isolates sub-agent sessions, wipes the Coordinator’s message history every 60 seconds, and uses `save_memory` / `retrieve_memory` tools.',
        rubricChecklist: [
          'Explains that each sub-agent (Analyzer, Fixer, Slack_Bot) has its own SessionManager and cannot see the Coordinator’s conversation history.',
          'States the benefit of session isolation: sub-agents consume fewer tokens and focus strictly on their narrow task without context pollution.',
          'Explains why `main.py` clears `coordinator.session.messages` (keeping only index 0) after every 60-second health check cycle to prevent 128k context overflow.',
          'Shows how `save_memory` and `retrieve_memory` persist structured state (like `recent-operations`) across cycles so the Coordinator avoids duplicate fixes.',
        ],
        modelExplanation:
          'If every agent shared one global chat log across 24/7 polling, verbose kubectl JSON outputs would blow past the 128k token limit within hours and confuse sub-agents with irrelevant Slack formatting instructions. Instead, AI-6 gives each child agent an isolated session that receives only its system prompt and the Coordinator’s explicit message argument. After each 60-second health check finishes, `main.py` wipes the Coordinator’s chat history back to the system prompt, while critical facts that must survive across cycles—such as whether `production-east` was remediated five minutes ago—are written to disk as compact JSON records via `save_memory` and queried via `retrieve_memory`.',
      },
      {
        id: 'dmma-ch09-feyn2',
        conceptTitle:
          'Dual-Protocol Specialization: Why MAKDO Combines A2A and FastMCP',
        prompt:
          'Walk through a single MAKDO health check cycle from detection to Slack notification, explaining why `MAKDO_Analyzer` and `MAKDO_Fixer` use A2A while `MAKDO_Slack_Bot` uses FastMCP.',
        rubricChecklist: [
          'Identifies `k8s-ai` as an autonomous remote AI agent server on port 9999 exposed via A2A skills (`kubernetes_resource_health`, `kubernetes_diagnose_issue`).',
          'Identifies Slack integration as deterministic API tool execution (`chat.postMessage`, `conversations.list`) wrapped via `@mcp.tool()` in FastMCP.',
          'Traces the Coordinator’s role in forwarding the full, unfiltered Analyzer and Fixer outputs to `agent_MAKDO_Slack_Bot`.',
          'Explains how protocol encapsulation lets you swap Slack for PagerDuty or Teams by changing only `mcp_tools_dirs` and Slack_Bot’s prompt.',
        ],
        modelExplanation:
          'During a health check, the Coordinator calls `agent_MAKDO_Analyzer`, which communicates over the Agent-to-Agent (A2A) protocol with the `k8s-ai` server because Kubernetes diagnosis requires delegating to an external domain-specialist AI system capable of multi-step cluster inspection. Once Analyzer returns its severity-ranked report, the Coordinator passes the complete text to `agent_MAKDO_Slack_Bot`. Because posting to Slack does not require a remote reasoning agent—just deterministic HTTP calls to `slack.com/api/chat.postMessage`—`Slack_Bot` uses a local `FastMCP` server (`slack.py`) where `@mcp.tool()` exposes Python functions as Model Context Protocol tools. This clean split uses A2A for remote agent collaboration and MCP for deterministic API tooling.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-ch09-makdo-coordinator',
        label: 'MAKDO Coordinator & AgentTool Hierarchy',
        category: 'architecture',
        chapterNumber: 9,
        importance: 1,
        definition:
          'Top-level orchestrator defined in coordinator.yaml that delegates to inline sub-agents wrapped as callable AgentTool instances with zero direct operational tools.',
        whyItMatters:
          'Enables late-bound, LLM-driven workflow orchestration across specialized DevOps roles using <150 lines of Python.',
      },
      {
        id: 'dmma-ch09-analyzer-fixer-split',
        label: 'Analyzer vs. Fixer Role Separation',
        category: 'security',
        chapterNumber: 9,
        importance: 1,
        definition:
          'Architectural separation of read-only A2A cluster diagnostics (MAKDO_Analyzer) from guardrail-constrained A2A cluster remediation (MAKDO_Fixer).',
        whyItMatters:
          'Prevents diagnostic hallucinations from mutating live production resources and allows independent accuracy vs. safety tuning.',
      },
      {
        id: 'dmma-ch09-session-isolation',
        label: 'Session Isolation & Cycle Pruning',
        category: 'optimization',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Per-agent SessionManager encapsulation combined with post-cycle message clearing (preserving only the system prompt) in continuous polling loops.',
        whyItMatters:
          'Eliminates cross-agent context pollution and prevents 128k token window overflows during 24/7 autonomous monitoring.',
      },
      {
        id: 'dmma-ch09-fastmcp-slack',
        label: 'FastMCP Slack Control Bridge',
        category: 'adaptation',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Decorator-driven (@mcp.tool()) Python MCP server exposing slack_post_message and slack_list_channels exclusively to MAKDO_Slack_Bot.',
        whyItMatters:
          'Provides human visibility and approval workflows without manual JSON-RPC protocol implementation.',
      },
      {
        id: 'dmma-ch09-tool-manager',
        label: 'Unified Tool Discovery (get_tool_dict)',
        category: 'foundation',
        chapterNumber: 9,
        importance: 3,
        definition:
          'AI-6 discovery pipeline combining native tools, local MCP servers, remote A2A skills, and inline AgentTools with declarative enable/disable filtering.',
        whyItMatters:
          'Enforces least-privilege access boundaries per agent strictly through YAML configuration.',
      },
      {
        id: 'dmma-ch09-safety-escalation',
        label: 'Skip-and-Escalate Remediation Gate',
        category: 'security',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Prompt-enforced operational policy where Fixer auto-executes safe pod restarts but skips deployment image changes or scale-downs, emitting CLI commands to Slack.',
        whyItMatters:
          'Maintains human operational control over high-blast-radius changes while automating routine recovery.',
      },
    ],
    edges: [
      {
        source: 'dmma-ch09-tool-manager',
        target: 'dmma-ch09-makdo-coordinator',
        relationship: 'part_of',
        explanation:
          'get_tool_dict() wraps inline YAML sub-agents as AgentTools and binds them to the Coordinator.',
      },
      {
        source: 'dmma-ch09-makdo-coordinator',
        target: 'dmma-ch09-analyzer-fixer-split',
        relationship: 'prerequisite_for',
        explanation:
          'The Coordinator sequences read-only Analyzer diagnostics before invoking Fixer remediation.',
      },
      {
        source: 'dmma-ch09-analyzer-fixer-split',
        target: 'dmma-ch09-safety-escalation',
        relationship: 'optimizes',
        explanation:
          'Isolating Fixer allows strict prompt guardrails that skip destructive changes and escalate to humans.',
      },
      {
        source: 'dmma-ch09-fastmcp-slack',
        target: 'dmma-ch09-safety-escalation',
        relationship: 'part_of',
        explanation:
          'FastMCP Slack tools deliver unfiltered diagnostic and skipped-action reports to #makdo-devops.',
      },
      {
        source: 'dmma-ch09-session-isolation',
        target: 'dmma-ch09-makdo-coordinator',
        relationship: 'mitigates',
        explanation:
          'Post-cycle session pruning and sub-agent session isolation prevent token exhaustion in the Coordinator loop.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 9 MAKDO architecture, coordinator.yaml inline AgentTools, get_tool_dict() discovery, session isolation, FastMCP Slack server, and kind-makdo-test end-to-end demo.',
  },
};

export const dmmaCh10Mastery: ChapterMastery = {
  chapterNumber: 10,
  chapterId: 'ch10',
  title: 'Testing, Debugging, and Troubleshooting Multi-Agent Systems',
  subtitle:
    'Failure Mode Taxonomy, OpenTelemetry Span Hierarchies, Tool Call Anti-Patterns, Coordination Deadlocks, and 4-Tier Graceful Degradation',
  readingTimeMinutes: 8,
  sourceWordCount: 14417,
  executiveThesis:
    'Multi-agent systems fail non-deterministically across compound interaction surfaces—fabricating tool successes, passing zombie parameters, dropping handoff context, and deadlocking over shared state. Running them reliably in production requires transforming black-box LLM loops into glass-box distributed traces (correlation IDs, parent-child span trees, and tool shadowing) backed by exponential-backoff circuit breakers, boundary checkpoints, and 4-tier graceful degradation.',
  paradigmShift: {
    oldWay:
      'Step-Debugger & Happy-Path Log Inspection: Engineers assume deterministic stack traces and trust agent narrative summaries ("Deployment succeeded") without independent state verification.',
    newWay:
      'Glass-Box Distributed Tracing & Defensive Guardrails: Every LLM prompt, tool execution, and sub-agent handoff emits correlated JSON spans while circuit breakers, dry-run wrappers, and post-call verifiers enforce state invariants.',
    whyItChanged:
      'A single multi-agent turn interleaves dozens of probabilistic LLM decisions and external side effects where silent parameter mismatches or lost handoff fields cascade into production outages.',
  },
  heroIllustrationUrl:
    '/books/design-multi-agent-mcp-a2a/assets/design_multi_agent_mcp_a2a_ch10_plate.png',
  customDiagrams: [
    {
      id: 'dmma-ch10-svg-glassbox-trace',
      title: 'Glass-Box Distributed Span Hierarchy & Handoff Failure Points',
      subtitle:
        'Tracing a MAKDO health check across parent-child OpenTelemetry spans to isolate fabricated responses, zombie parameters, and lost handoff context',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="traceBg10" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrC10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrR10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#traceBg10)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">GLASS-BOX OBSERVABILITY: MULTI-AGENT SPAN HIERARCHY &amp; FAULT POINTS</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Correlating trace_id across Coordinator, Analyzer, Fixer, and Slack_Bot to pinpoint non-deterministic breakdowns</text>

  <!-- Root Span Bar -->
  <rect x="28" y="68" width="744" height="36" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="90" fill="#38bdf8" font-size="11" font-weight="700">ROOT SPAN: health_check_cycle=47 | cluster=kind-makdo-test | trace_id=tr_9f8a2c</text>
  <text x="756" y="90" fill="#94a3b8" font-size="10" text-anchor="end">Total: 8,420ms</text>

  <!-- Child Span 1: Coordinator -> Analyzer -->
  <rect x="52" y="118" width="440" height="58" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="66" y="138" fill="#34d399" font-size="10.5" font-weight="700">Span 1.1: agent_MAKDO_Analyzer -&gt; k8s-ai (A2A)</text>
  <text x="66" y="154" fill="#cbd5e1" font-size="9">llm.request (gpt-4o) -&gt; tool.invoke(kubernetes_resource_health) -&gt; 3 pods failing</text>
  <text x="66" y="168" fill="#6ee7b7" font-size="8.5">Checkpoint #1 saved to durable store upon Analyzer completion</text>

  <!-- Fault Callout 1 -->
  <rect x="512" y="118" width="260" height="58" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1.2" />
  <text x="524" y="136" fill="#fda4af" font-size="9.5" font-weight="700">FAULT A: Invented Context / Truncated ID</text>
  <text x="524" y="152" fill="#fecdd3" font-size="8.5">Hallucinates "payment-service-7f9d8" instead</text>
  <text x="524" y="165" fill="#fecdd3" font-size="8.5">of "7f9d8c" -&gt; Fixer gets "pod not found"</text>
  <line x1="492" y1="147" x2="508" y2="147" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#arrR10)" />

  <!-- Child Span 2: Coordinator Handoff -> Fixer -->
  <rect x="52" y="192" width="440" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="66" y="212" fill="#fbbf24" font-size="10.5" font-weight="700">Span 1.2: Handoff to agent_MAKDO_Fixer</text>
  <text x="66" y="228" fill="#cbd5e1" font-size="9">Coordinator passes pod names &amp; namespaces -&gt; tool.invoke(delete_pod)</text>
  <text x="66" y="242" fill="#fde68a" font-size="8.5">Result verifier confirms pod rescheduled before marking remediation complete</text>

  <!-- Fault Callout 2 -->
  <rect x="512" y="192" width="260" height="58" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1.2" />
  <text x="524" y="210" fill="#fda4af" font-size="9.5" font-weight="700">FAULT B: Lost Context &amp; Zombie Params</text>
  <text x="524" y="226" fill="#fecdd3" font-size="8.5">Omits pod names ("Fix issues") or passes</text>
  <text x="524" y="239" fill="#fecdd3" font-size="8.5">ignored force:true / wrong namespace</text>
  <line x1="492" y1="221" x2="508" y2="221" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#arrR10)" />

  <!-- Child Span 3: Coordinator -> Slack_Bot -->
  <rect x="52" y="266" width="440" height="58" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
  <text x="66" y="286" fill="#c084fc" font-size="10.5" font-weight="700">Span 1.3: agent_MAKDO_Slack_Bot -&gt; FastMCP</text>
  <text x="66" y="302" fill="#cbd5e1" font-size="9">tool.invoke(slack_post_message) -&gt; #makdo-devops HTTP 200 OK</text>
  <text x="66" y="316" fill="#d8b4fe" font-size="8.5">Idempotent notification: safe to replay without checkpointing</text>

  <!-- Fault Callout 3 -->
  <rect x="512" y="266" width="260" height="58" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1.2" />
  <text x="524" y="284" fill="#fda4af" font-size="9.5" font-weight="700">FAULT C: 80% Partial Task Completion</text>
  <text x="524" y="300" fill="#fecdd3" font-size="8.5">Selective instruction attention skips Slack</text>
  <text x="524" y="313" fill="#fecdd3" font-size="8.5">step -&gt; cluster fixed but SREs left blind</text>
  <line x1="492" y1="295" x2="508" y2="295" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#arrR10)" />

  <!-- Bottom Telemetry & Redaction Bar -->
  <rect x="28" y="344" width="744" height="52" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1" />
  <text x="42" y="364" fill="#38bdf8" font-size="10" font-weight="700">ARCHAEOLOGICAL BACKWARD TRACE &amp; PRIVACY LAYER:</text>
  <text x="42" y="382" fill="#cbd5e1" font-size="9">Emit standardized JSON events (agent.start, llm.request, tool.invoke) with automatic regex/ML PII redaction and prompt hashing.</text>
</svg>`,
      bierutCaption:
        'Hierarchical OpenTelemetry spans turn opaque multi-agent loops into inspectable call trees where handoff drops, zombie parameters, and fabricated tool claims can be traced backward from the symptom.',
      annotations: [
        {
          step: '1',
          label: 'Root Correlation & Span Hierarchy',
          explanation:
            'Every health check cycle generates a root span tagged with cluster_name and health_check_cycle, nesting every child LLM request, A2A call, and MCP invocation.',
        },
        {
          step: '2',
          label: 'Pinpointing Tool Lifecycle Breakdowns',
          explanation:
            'Separating tool.invoke logs from agent narrative responses exposes fabricated tool completions, wrong-namespace parameters, and silently ignored zombie flags like force:true.',
        },
        {
          step: '3',
          label: 'Detecting Handoff Context Loss & 80% Limbo',
          explanation:
            'Inspecting Coordinator-to-Fixer span inputs reveals whether specific pod names were dropped in handoff or whether selective attention skipped the final Slack_Bot notification.',
        },
      ],
    },
    {
      id: 'dmma-ch10-svg-resilience-machine',
      title: 'Circuit Breaker State Machine & 4-Tier Graceful Degradation Ladder',
      subtitle:
        'Preventing cascading timeouts via Closed/Open/Half-Open circuit breakers and stepping MAKDO down through four operational tiers',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="resBg10" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrG10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="arrA10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="arrRed10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#resBg10)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">RESILIENCE ARCHITECTURE: CIRCUIT BREAKERS &amp; 4-TIER DEGRADATION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Halting cascading A2A timeouts (Left) while preserving core safety across four degradation tiers (Right)</text>

  <!-- Left Panel: Circuit Breaker State Machine -->
  <rect x="24" y="66" width="372" height="330" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
  <text x="210" y="90" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">A2A / Tool Circuit Breaker State Machine</text>

  <!-- Closed -->
  <rect x="130" y="108" width="160" height="52" rx="8" fill="#062e22" stroke="#10b981" stroke-width="1.5" />
  <text x="210" y="130" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">CLOSED (Normal)</text>
  <text x="210" y="146" fill="#d1fae5" font-size="8.5" text-anchor="middle">Calls pass through to k8s-ai</text>

  <!-- Open -->
  <rect x="44" y="218" width="150" height="62" rx="8" fill="#3b1219" stroke="#f43f5e" stroke-width="1.5" />
  <text x="119" y="240" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">OPEN (Fail Fast)</text>
  <text x="119" y="256" fill="#fecdd3" font-size="8.5" text-anchor="middle">Skip k8s-ai immediately</text>
  <text x="119" y="270" fill="#fecdd3" font-size="8" text-anchor="middle">Alert Slack degraded mode</text>

  <!-- Half-Open -->
  <rect x="226" y="218" width="150" height="62" rx="8" fill="#271a0c" stroke="#f59e0b" stroke-width="1.5" />
  <text x="301" y="240" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">HALF-OPEN (Probe)</text>
  <text x="301" y="256" fill="#fde68a" font-size="8.5" text-anchor="middle">Allow test requests</text>
  <text x="301" y="270" fill="#fde68a" font-size="8" text-anchor="middle">Success-&gt;Close | Fail-&gt;Open</text>

  <!-- Transitions -->
  <path d="M 165 160 L 120 214" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrRed10)" />
  <text x="68" y="190" fill="#fda4af" font-size="8.5" font-weight="600">&gt;50% fail / 10 reqs</text>

  <line x1="194" y1="249" x2="222" y2="249" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrA10)" />
  <text x="208" y="240" fill="#fcd34d" font-size="8" text-anchor="middle">60s cooldown</text>

  <path d="M 295 218 L 250 164" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrG10)" />
  <text x="315" y="190" fill="#6ee7b7" font-size="8.5" font-weight="600">Probes OK</text>

  <!-- Retry Policy Box -->
  <rect x="44" y="302" width="332" height="76" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="56" y="320" fill="#38bdf8" font-size="9.5" font-weight="700">RETRY CLASSIFICATION &amp; BACKOFF WITH JITTER</text>
  <text x="56" y="336" fill="#cbd5e1" font-size="8.5">• Transient (503 / Timeout): Exponential backoff 100ms -&gt; 30s + jitter</text>
  <text x="56" y="351" fill="#cbd5e1" font-size="8.5">• Permanent (401 Unauthorized / Bad Schema): Fail immediately (0 retries)</text>
  <text x="56" y="366" fill="#94a3b8" font-size="8.5">• Jitter prevents thundering-herd retry spikes across concurrent agents</text>

  <!-- Right Panel: 4-Tier Graceful Degradation -->
  <rect x="416" y="66" width="360" height="330" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
  <text x="596" y="90" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">MAKDO 4-Tier Graceful Degradation Ladder</text>

  <rect x="434" y="106" width="324" height="58" rx="6" fill="#062e22" stroke="#10b981" stroke-width="1.5" />
  <text x="448" y="126" fill="#34d399" font-size="10.5" font-weight="700">TIER 1: Full Autonomous Operation</text>
  <text x="448" y="143" fill="#d1fae5" font-size="9">Scheduled health checks + deep Analyzer triage + safe Fixer auto-remediation</text>

  <rect x="434" y="176" width="324" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="448" y="196" fill="#38bdf8" font-size="10.5" font-weight="700">TIER 2: Diagnostic &amp; Alert Only (Fixer Kill Switch)</text>
  <text x="448" y="213" fill="#e0f2fe" font-size="9">Disable automated Fixer mutations; post full Analyzer reports to Slack</text>

  <rect x="434" y="246" width="324" height="58" rx="6" fill="#271a0c" stroke="#f59e0b" stroke-width="1.5" />
  <text x="448" y="266" fill="#fbbf24" font-size="10.5" font-weight="700">TIER 3: Basic Liveness Probes (Fast/Fallback Model)</text>
  <text x="448" y="283" fill="#fde68a" font-size="9">Skip deep k8s-ai root-cause chains; run basic kubectl status checks only</text>

  <rect x="434" y="316" width="324" height="62" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1.5" />
  <text x="448" y="336" fill="#fda4af" font-size="10.5" font-weight="700">TIER 4: Reactive On-Demand Mode Only</text>
  <text x="448" y="353" fill="#fecdd3" font-size="9">Pause periodic 60s polling loop; respond only to explicit SRE Slack commands</text>
</svg>`,
      bierutCaption:
        'Resilient multi-agent systems combine fast-failing circuit breakers with explicit degradation tiers so a downstream dependency outage reduces autonomy rather than crashing the control plane.',
      annotations: [
        {
          step: '1',
          label: 'Transient vs. Permanent Error Discrimination',
          explanation:
            'Retry logic applies exponential backoff (100ms, 200ms, 400ms... capped at 30s) with random jitter only to transient 503/timeout faults while failing immediately on 401 auth errors.',
        },
        {
          step: '2',
          label: 'Circuit Breaker State Transitions',
          explanation:
            'When k8s-ai exceeds a 50% failure rate over 10 requests, the breaker opens to fail fast for 60 seconds before testing recovery with Half-Open probe requests.',
        },
        {
          step: '3',
          label: 'Four-Tier Autonomy Step-Down',
          explanation:
            'Feature flags and kill switches step MAKDO down from Tier 1 (full auto-fix) to Tier 2 (diagnostics only), Tier 3 (basic checks), or Tier 4 (manual reactive queries).',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch10-mm1',
      name: 'Narrative Claim vs. Ground-Truth Execution Split',
      tagline:
        'An LLM reporting "I restarted the pod" is a linguistic hypothesis, not an operational fact.',
      naiveIntuition:
        'If a sub-agent returns a natural-language summary stating that remediation succeeded, the Coordinator can safely notify humans that the incident is resolved.',
      firstPrinciplesReality:
        'Agents frequently suffer from fabricated tool responses (claiming success after a dry-run or timeout), silent namespace mismatches (deleting a non-existent pod in `production` instead of `default`), or zombie parameters (`force: true` silently ignored by the tool).',
      howToApply:
        'Log raw `tool.invoke` and `tool.complete` payloads independently from agent narratives, and wrap mutating tools with post-execution state verifiers that confirm the target resource actually changed state.',
    },
    {
      id: 'dmma-ch10-mm2',
      name: 'The 5-Axis Inter-Agent Dependency Matrix',
      tagline:
        'Multi-agent workflows break across implicit, data, temporal, and resource couplings that never appear in static config files.',
      naiveIntuition:
        'Checking the `agents:` list in `coordinator.yaml` tells you all the dependencies required for a multi-agent workflow to succeed.',
      firstPrinciplesReality:
        'Beyond explicit config dependencies, agents fail on implicit assumptions (uncreated tables), data dependencies (Analyzer returning "several pods failing" instead of exact pod IDs), temporal windows (stale state under high latency), and shared resource contention (API rate limits and locks).',
      howToApply:
        'Enforce structured handoff schemas containing mandatory resource identifiers, stamp inter-agent payloads with Time-To-Live (TTL) metadata, and visualize parent-child execution spans in OpenTelemetry.',
    },
    {
      id: 'dmma-ch10-mm3',
      name: 'Boundary Checkpointing with Idempotent Replay',
      tagline:
        'Never restart a multi-minute agent workflow from scratch when a downstream step crashes.',
      naiveIntuition:
        'If the Coordinator crashes after Analyzer completes, simply re-running the entire health check from the beginning is the cleanest recovery strategy.',
      firstPrinciplesReality:
        'Re-running completed diagnostic chains doubles token costs and remediation latency; conversely, resuming mid-workflow without idempotency causes duplicate destructive mutations if a crash occurred right after a tool executed.',
      howToApply:
        'Persist durable checkpoints at agent handoff boundaries (e.g., immediately after Analyzer returns and after each Fixer action) and attach transaction/operation IDs so replayed deletes or notifications are safely idempotent.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch10-sec1',
      sectionNumber: '10.1',
      title: 'Taxonomy of Multi-Agent Failure Modes & Tool Call Anti-Patterns',
      subtitle:
        'Hallucinated tool completions, zombie parameters, selective instruction attention, and compounding chain latency',
      coreMechanism:
        'Multi-agent systems exhibit seven primary failure classes that compound across turns: (1) *Agent hallucination*, including fabricated tool responses (`MAKDO_Fixer` claiming a pod restart succeeded after a `k8s-ai` timeout), invented context (truncating `default/payment-service-7f9d8c` to `7f9d8`), false deployment-to-failure correlation, and synthetic memory metrics (`2.3GB of 2GB limit`); (2) *Tool misuse*, where agents pass invalid parameters (`namespace: "production"` instead of `"default"`), skip verification in tool chains, or pass *zombie parameters* (`force: true` on `delete_pod`, which `k8s-ai` silently ignores); and (3) *Poor instruction following*, such as selective attention where the Coordinator calls Analyzer and Fixer but forgets the mandatory mid-workflow Slack notification.\n\nBeyond single-agent errors, systems suffer from (4) *Infinite retry loops and runaway polling* (e.g., a 1-second timer bug generating thousands of OpenAI and `k8s-ai` calls), (5) *Coordination breakdowns* (handoff context loss and dual-instance race conditions), (6) *Compounding latency* (three sequential 30-second agent waits creating a 90-second stall), and (7) *State/security failures* (stale reads, partial infrastructure provisioning, and prompt credential leaks). Debugging tool chains requires isolating the four-stage tool lifecycle—*Decision*, *Parameter Construction*, *Host Validation/Execution*, and *Result Interpretation*—using replay-with-inspection, semantic parameter wrappers, and shadow tools that log destructive calls without executing them.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Isolate the 4-Stage Tool Lifecycle Fault',
          detail:
            'Classify whether a tool failure occurred at tool selection (Decision), argument synthesis (Parameter Construction), schema/API execution (Host Invocation), or post-call reasoning (Result Interpretation).',
        },
        {
          step: '2',
          title: 'Eliminate Zombie Parameters & Assumed State',
          detail:
            'Validate tool schemas strictly to reject unsupported flags like force:true and split monolithic multi-namespace queries into per-namespace calls.',
        },
        {
          step: '3',
          title: 'Enforce Dry-Run Modes & Result Verifiers',
          detail:
            'Run shadow or dry_run=true tool calls for high-risk mutations and execute post-call state checks to confirm pods actually restarted.',
        },
      ],
      keyTakeaways: [
        'Syntactically valid tool calls still fail semantically when agents target the wrong namespace or pass zombie parameters that the downstream server silently ignores.',
        'Backward archaeological tracing from the failed link in a linear, conditional, parallel, or recursive tool chain reveals upstream context corruption.',
        'Rate limiters (e.g., halting an agent that calls the same tool 50 times in a minute) and per-task token budgets stop runaway loops before cloud bills spiral.',
      ],
      commonPitfalls: [
        'Trusting an HTTP 200 OK or a sub-agent’s natural-language "remediation complete" message without verifying that Kubernetes actually rescheduled the pod.',
        'Packing complex multi-namespace diagnostics into a single premature-optimization tool call that times out instead of iterating cleanly per namespace.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch10_plate.png',
          originalLabel:
            'Chapter 10 Opening Blueprint: Testing, Debugging, and Troubleshooting Multi-Agent Systems (Page 400)',
          bierutTitle:
            'Transform Probabilistic Black-Box Agent Loops into Instrumented Glass-Box Systems',
          editorialAnalysis:
            'The Chapter 10 blueprint illustrates the diagnostic transition required when moving MAKDO from a working demo to production reliability. By surrounding LLM reasoning and tool chains with structured telemetry, dependency tracing, and resilience guardrails, engineers can isolate non-deterministic failures across agent boundaries.',
          keyTakeaways: [
            'Every multi-agent turn interleaves dozens of LLM and tool invocations, multiplying the failure surface compared to deterministic microservices.',
            'Prevention guardrails (schema validation, dry-run modes, circuit breakers) eliminate entire failure classes before debugging is required.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch10-sec2',
      sectionNumber: '10.2',
      title: 'Glass-Box Observability, Coordination Diagnostics, and Deadlock Resolution',
      subtitle:
        'OpenTelemetry span trees, 5 KPI categories, 6 coordination failure symptoms, and circular-wait deadlock breaking',
      coreMechanism:
        'Converting a black-box multi-agent system into a glass-box system requires five observability primitives: full LLM call traces, tool execution logs, periodic agent state snapshots, hierarchical OpenTelemetry spans (`Health check root -> Coordinator LLM -> agent_MAKDO_Analyzer -> Analyzer LLM -> kubernetes_resource_health A2A -> Slack_Bot -> slack_post_message MCP`), and contextual metadata tags (`cluster_name`, `health_check_cycle`). Logs must be emitted as versioned JSON events (`agent.start`, `llm.request`, `tool.invoke`, `error.occurred`) linked by a single `correlation_id`, while automatic regex/ML PII redaction and prompt hashing protect sensitive data under GDPR, HIPAA, and SOC2.\n\nAcross interaction topologies—sequential, hierarchical delegation, peer-to-peer, event-driven, and shared-state—coordination failures surface in six patterns: *80% partial task completion* (Fixer runs but Slack_Bot is never called), *work duplication* (two concurrent MAKDO cycles deleting the same pods), *conflicting actions* (cost vs. performance scalers thrashing), *handoff context loss* (Coordinator telling Fixer "Fix the failing pods" without passing Analyzer’s pod names), *out-of-order messages* (`cancel` arriving before `create`), and *deadlocks*. While hierarchical trees like MAKDO avoid peer-to-peer message deadlocks, shared-state systems must prevent classic lock, dependency, and resource deadlocks using strict lock ordering, expiration leases, and cycle detection on wait-for graphs.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Instrument Correlated JSON Span Trees',
          detail:
            'Propagate a unified correlation_id and parent_span_id across all LLM calls, A2A requests, and MCP tools while redacting PII at the ingestion boundary.',
        },
        {
          step: '2',
          title: 'Monitor the 5 Quantitative KPI Pillars',
          detail:
            'Track Success Rate (first-attempt completion), Performance (p95 latency, LLM/tool calls per task), Cost (tokens/task), Quality (hallucination/format compliance), and Health (timeout/circuit-breaker rates).',
        },
        {
          step: '3',
          title: 'Audit Handoff Schemas & Wait-For Graphs',
          detail:
            'Validate that parent-to-child handoffs preserve mandatory entity IDs and enforce lock ordering, optimistic concurrency versioning, or lease timeouts on shared state.',
        },
      ],
      keyTakeaways: [
        'Comparative debugging (diffing traces of passing vs. failing runs side-by-side) and trace replay are the fastest ways to isolate intermittent non-deterministic agent bugs.',
        'Hierarchical delegation prevents circular message deadlocks by construction, whereas peer-to-peer and shared-state topologies require explicit consensus, CQRS, or expiring locks.',
        'Trend analysis catches "boiling frog" latency and accuracy degradation long before static threshold alerts fire.',
      ],
      commonPitfalls: [
        'Assuming strong consistency on an eventually consistent distributed state store without read-your-writes caching or version-checked optimistic concurrency.',
        'Logging raw user prompts containing credentials or customer PII without automatic redaction and role-based break-glass access controls.',
      ],
    },
    {
      id: 'dmma-ch10-sec3',
      sectionNumber: '10.3',
      title: 'Resilience Engineering: Circuit Breakers, Checkpointing & Human Escalation',
      subtitle:
        'Multi-provider failover, exponential backoff with jitter, 4-tier degradation, and time-bound actionable escalations',
      coreMechanism:
        'Production resilience starts with eliminating single points of failure across LLM providers (abstracting prompts and fallback tools across OpenAI, Anthropic, and Gemini) and external APIs. When transient faults occur (HTTP 503 or network timeouts), agents apply exponential backoff with random jitter to avoid thundering-herd spikes, whereas permanent errors (HTTP 401 Unauthorized) fail immediately. To stop a dead dependency like `k8s-ai` from blocking every 60-second Coordinator cycle for 30 seconds, a *circuit breaker* monitors rolling failure rates: once failures exceed threshold (e.g., 50% over 10 requests), it trips from *Closed* to *Open* (failing fast for 60 seconds) before testing recovery in *Half-Open* mode.\n\nWhen components degrade, feature flags step MAKDO down through four explicit tiers: *Tier 1* (full diagnostics + auto-remediation), *Tier 2* (Fixer kill-switch enabled; diagnostics and Slack reporting only), *Tier 3* (basic liveness checks without deep `k8s-ai` analysis), and *Tier 4* (periodic polling paused; manual user queries only). For long-running workflows, durable checkpoints saved after `MAKDO_Analyzer` and after each `MAKDO_Fixer` mutation allow crash recovery without repeating completed work, paired with idempotent operation IDs. Finally, human escalations present numbered, one-click Slack options with a 15-minute timeout default rather than vague failure alerts.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Classify Faults & Trip Circuit Breakers',
          detail:
            'Retry transient 503/timeout errors using exponential backoff with jitter, fail fast on 401s, and open the circuit breaker when failure rate exceeds 50% over 10 calls.',
        },
        {
          step: '2',
          title: 'Step Down the 4-Tier Degradation Ladder',
          detail:
            'Activate kill switches during incidents to shift from Tier 1 (full auto-fix) to Tier 2 (report-only), Tier 3 (basic checks), or Tier 4 (reactive manual mode).',
        },
        {
          step: '3',
          title: 'Checkpoint Boundaries & Escalate Actionable Options',
          detail:
            'Save durable checkpoints after Analyzer and Fixer steps with idempotent transaction IDs, and escalate unresolved faults to Slack with numbered options and a 15-minute default policy.',
        },
      ],
      formulas: [
        {
          name: 'Exponential Backoff with Jitter & Circuit Breaker Trip Law',
          expression:
            'd_k = \\min\\left(d_{\\max},\\; d_0 \\cdot 2^{k-1} + U(0, J)\\right), \\quad \\text{Open if } \\frac{F_N}{N} \\ge \\theta_{\\text{fail}}',
          intuition:
            'Doubling the retry delay prevents overwhelming a recovering service, adding uniform random jitter breaks synchronized retry waves across concurrent agents, and tripping the circuit breaker once the rolling failure ratio reaches theta_fail stops cascading timeout stalls.',
          variables: [
            {
              symbol: 'd_k',
              meaning: 'Wait duration before retry attempt k (capped at d_max = 30s, with base d_0 = 100ms)',
            },
            {
              symbol: 'U(0, J)',
              meaning: 'Random jitter offset sampled uniformly to desynchronize concurrent agent retries',
            },
            {
              symbol: 'F_N / N',
              meaning: 'Failure count F_N over a rolling window of N = 10 downstream requests (trips Open when >= 0.50)',
            },
          ],
          workedExample:
            'With d_0 = 100ms and d_max = 30,000ms, retries 1..4 wait 100ms, 200ms, 400ms, and 800ms plus jitter (up to 5 tries max). If 5 out of 10 requests to k8s-ai fail (F_10 / 10 = 0.50), the breaker opens for 60 seconds, failing subsequent Analyzer calls in 0ms instead of waiting 30,000ms per timeout.',
        },
      ],
      keyTakeaways: [
        'Distinguishing transient errors (503 Service Unavailable) from permanent errors (401 Unauthorized) prevents burning tokens and retry budgets on unrecoverable faults.',
        'Checkpointing is essential after expensive Analyzer and Fixer stages, but unnecessary for Slack_Bot where re-sending a notification is harmless.',
        'Actionable escalations present explicit options (Option 1: Auto-restart, Option 2: Inspect logs, Option 3: Snooze) with a 15-minute fallback timer.',
      ],
      commonPitfalls: [
        'Retrying without random jitter across dozens of agents, creating a synchronized thundering herd that knocks down a recovering A2A server.',
        'Relying on GPT-specific built-in tools (like proprietary code interpreters) without configuring an external MCP fallback when failing over to Anthropic or Gemini.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Multi-Agent Coordination & Shared-State Synchronization Trade-Off Matrix',
      description:
        'Selecting the right inter-agent coordination topology and state concurrency model based on deadlock risk, coupling, and consistency needs',
      headers: [
        'Coordination Pattern',
        'Deadlock & Race Vulnerability',
        'Observability & Traceability',
        'Throughput & Coupling',
        'Best-Fit Multi-Agent Use Case',
      ],
      rows: [
        [
          'Hierarchical Delegation (MAKDO AgentTool Tree)',
          'Low (parent-child tree prevents circular message wait)',
          'High (clean parent-child span hierarchy)',
          'Moderate (parent serializes or batches handoffs)',
          'Incident triage & remediation with clear authority',
        ],
        [
          'Peer-to-Peer Negotiation (Equal Status Agents)',
          'High (circular request-response deadlocks & duplicate work)',
          'Hard (requires tracing distributed consensus/tokens)',
          'High concurrency once leader/token elected',
          'Collaborative multi-specialist brainstorming or bidding',
        ],
        [
          'Event-Driven Pub/Sub Bus',
          'Low deadlock risk; high out-of-order & lost-event risk',
          'Low by default (publisher blind to subscriber failures)',
          'Highest (loosely coupled async fan-out)',
          'Decoupled notifications, audit pipelines, async triggers',
        ],
        [
          'Shared State with Optimistic Concurrency (Versioned)',
          'Zero lock deadlocks; retries spike under high contention',
          'High via version conflict logs & state diffs',
          'High in low-contention read-heavy workloads',
          'Shared cluster inventory & low-collision state updates',
        ],
        [
          'Shared State with Pessimistic Locking (Leases)',
          'High (classic AB-BA lock deadlocks if unordered)',
          'Moderate (requires lock acquisition/expiry tracking)',
          'Low (serializes access to critical sections)',
          'Mutually exclusive destructive cluster mutations',
        ],
      ],
      verdictRule:
        'Default to Hierarchical Delegation with durable boundary checkpoints for operational workflows like MAKDO; when agents must share mutable state, use versioned Optimistic Concurrency for low contention and TTL-expiring Pessimistic Locks with strict lock ordering for mutually exclusive mutations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch10-scen1',
      title: 'Eliminating Duplicate Pod Deletions and Handoff Amnesia in Concurrent MAKDO Runs',
      roleAndContext:
        'Senior AI Systems Engineer debugging why MAKDO makes double `k8s-ai` diagnostic calls and posts contradictory "Remediation Failed: pod not found" alerts to Slack.',
      symptomOrFailure:
        'Traces reveal two separate defects: (1) the Coordinator tells Fixer "Fix the cluster issues" without passing Analyzer’s pod names, forcing Fixer to re-query `k8s-ai`, and (2) two overlapping MAKDO instances race to delete the same pod, causing the second instance to fail.',
      naiveFixAndWhyItFails:
        'Adding prompt instructions telling Fixer to "ignore pod not found errors" masks genuine hallucinated pod-name bugs while leaving the duplicate diagnostic token burn untouched.',
      firstPrinciplesSolution:
        'Enforce a structured handoff checklist requiring the Coordinator to pass exact `namespace/pod_name` identifiers from Analyzer to Fixer, acquire a TTL-expiring cluster lock before starting a health check cycle, and make `delete_pod` idempotent using operation IDs.',
      measurableOutcome:
        'Diagnostic `k8s-ai` calls per incident drop by 50%, and race-condition false failure alerts in `#makdo-devops` drop to zero.',
    },
    {
      id: 'dmma-ch10-scen2',
      title: 'Surviving a k8s-ai Server Outage and 2 A.M. Runaway Retry Loop',
      roleAndContext:
        'On-Call SRE investigating a $1,800 overnight OpenAI API bill spike accompanied by hung MAKDO health check threads.',
      symptomOrFailure:
        'When the `k8s-ai` server hung during a midnight maintenance window, `MAKDO_Fixer` entered an infinite retry loop calling `delete_pod` with identical parameters while every 60-second Coordinator cycle blocked waiting for 30-second timeouts.',
      naiveFixAndWhyItFails:
        'Simply lowering the HTTP timeout from 30 seconds to 5 seconds makes the retry loop spin 6x faster, accelerating token exhaustion.',
      firstPrinciplesSolution:
        'Wrap `k8s-ai` calls in a circuit breaker (opening after a 50% failure rate across 10 requests for a 60s cooldown), cap retries at 5 attempts with exponential backoff and jitter, add an hourly token-spend cutoff alert, and step MAKDO down to Degradation Tier 2/4 when the breaker opens.',
      measurableOutcome:
        'During subsequent `k8s-ai` outages, the circuit breaker trips within 10 requests, cutting wasted LLM retry spend by 98% and immediately notifying SREs of Tier 2 degraded mode.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch10-q1',
        scenarioPrompt:
          '`MAKDO_Fixer` calls `k8s-ai`’s `delete_pod` skill with `{ "name": "crashloop-app", "namespace": "default", "force": true }`. The pod still takes 30 seconds to terminate gracefully instead of dying immediately, even though the tool call returned success. Which tool-use anti-pattern occurred?',
        options: [
          {
            label: 'A',
            text: 'Fabricated tool response (hallucination): the LLM invented the tool output without invoking `k8s-ai`.',
            isCorrect: false,
            explanation:
              'The tool was genuinely invoked and deleted the pod gracefully; the issue was how the extra parameter was handled.',
          },
          {
            label: 'B',
            text: 'Zombie parameter: `MAKDO_Fixer` passed `force: true`, which is not exposed in `k8s-ai`’s A2A interface and was silently ignored during execution.',
            isCorrect: true,
            explanation:
              'Zombie parameters occur when an agent hallucinates or uses outdated parameters that the downstream tool silently ignores while still returning a 200 OK success.',
          },
          {
            label: 'C',
            text: 'Premature optimization: the agent passed multiple namespaces in a single batch call.',
            isCorrect: false,
            explanation:
              'Only a single pod in the `default` namespace was targeted.',
          },
          {
            label: 'D',
            text: 'Message deadlock: `MAKDO_Fixer` and `k8s-ai` waited on each other’s synchronous response locks.',
            isCorrect: false,
            explanation:
              'The call completed and returned; the 30-second delay was standard Kubernetes graceful termination because `force: true` was ignored.',
          },
        ],
      },
      {
        id: 'dmma-ch10-q2',
        scenarioPrompt:
          'During an incident, `MAKDO_Coordinator` calls `MAKDO_Analyzer`, receives the failing pod list, and then invokes `MAKDO_Fixer`, which successfully restarts the failing pods. However, no message is ever posted to `#makdo-devops`, leaving the human team unaware that an outage occurred and was fixed. How does Chapter 10 classify this failure at both the single-agent and multi-agent levels?',
        options: [
          {
            label: 'A',
            text: 'Single-agent selective attention to instructions manifesting as multi-agent partial task completion (the "80% complete limbo" coordination pattern).',
            isCorrect: true,
            explanation:
              'The Coordinator selectively followed the diagnose-and-fix instructions while dropping the Slack reporting constraint, producing an 80% complete workflow where individual sub-agents succeeded but the end-to-end operational goal failed.',
          },
          {
            label: 'B',
            text: 'Classic resource deadlock combined with eventual consistency stale reads.',
            isCorrect: false,
            explanation:
              'No agents were blocked waiting on locks; the workflow terminated early after Fixer completed.',
          },
          {
            label: 'C',
            text: 'Over-generalization combined with circular peer-to-peer delegation.',
            isCorrect: false,
            explanation:
              'Over-generalization does too much work (e.g., refactoring an entire module), whereas here the Coordinator omitted a required step.',
          },
          {
            label: 'D',
            text: 'Synthetic data reasoning combined with optimistic concurrency conflict.',
            isCorrect: false,
            explanation:
              'Neither fabricated metrics nor versioned database write conflicts occurred in this scenario.',
          },
        ],
      },
      {
        id: 'dmma-ch10-q3',
        scenarioPrompt:
          'You are designing checkpointing and retry logic for MAKDO’s long-running multi-cluster remediation workflow. Where should durable checkpoints be saved, and how should HTTP 503 vs. HTTP 401 errors from `k8s-ai` be handled?',
        options: [
          {
            label: 'A',
            text: 'Save checkpoints only after `Slack_Bot` finishes; retry both HTTP 503 and HTTP 401 up to 5 times using a fixed 1-second delay.',
            isCorrect: false,
            explanation:
              'Checkpointing Slack_Bot is unnecessary because notifications are safe to resend, and retrying a permanent HTTP 401 Unauthorized error wastes time without fixing invalid credentials.',
          },
          {
            label: 'B',
            text: 'Save durable checkpoints after `Analyzer` completes and after each `Fixer` remediation step (skipping `Slack_Bot`); retry transient HTTP 503 errors using exponential backoff with jitter while failing immediately on permanent HTTP 401 errors.',
            isCorrect: true,
            explanation:
              'Boundary checkpoints after Analyzer and each Fixer mutation prevent redoing expensive diagnostics or duplicating fixes on crash recovery, while backoff with jitter handles transient 503s and fast-fail handles permanent 401s.',
          },
          {
            label: 'C',
            text: 'Store checkpoints inside the Coordinator’s in-memory conversation history and disable retries whenever a circuit breaker is in the Closed state.',
            isCorrect: false,
            explanation:
              'In-memory state is lost when the agent process crashes; checkpoints must be written to durable external storage, and Closed is the normal operating state where retries are allowed.',
          },
          {
            label: 'D',
            text: 'Save checkpoints before every LLM token stream and use pessimistic locking without expiration timeouts.',
            isCorrect: false,
            explanation:
              'Unexpiring locks risk permanent lockouts on agent crashes, and token-level checkpointing adds prohibitive storage latency.',
          },
        ],
      },
      {
        id: 'dmma-ch10-q4',
        scenarioPrompt:
          'Why is MAKDO’s architecture naturally immune to *message deadlocks* (where Agent A blocks waiting for Agent B while Agent B blocks waiting for Agent A), and what type of deadlock can still occur if two agents share external locks?',
        options: [
          {
            label: 'A',
            text: 'MAKDO uses strictly hierarchical delegation (Coordinator -> child AgentTools) where children never call back into the parent or each other in cycles, though classic/resource deadlocks can still occur if concurrent agents acquire shared resource locks X and Y in opposite orders.',
            isCorrect: true,
            explanation:
              'Hierarchical parent-to-child trees eliminate cyclic request-response waits, whereas peer-to-peer or shared-lock systems remain vulnerable to AB-BA lock ordering deadlocks.',
          },
          {
            label: 'B',
            text: 'FastMCP automatically converts all synchronous HTTP calls into lock-free Raft consensus transactions.',
            isCorrect: false,
            explanation:
              'FastMCP is a lightweight MCP server wrapper and does not run Raft consensus.',
          },
          {
            label: 'C',
            text: 'LLMs are statistically incapable of generating cyclic tool calls when temperature is set to 0.',
            isCorrect: false,
            explanation:
              'Even at temperature 0, peer-to-peer agents can enter circular delegation loops if prompts allow mutual handoffs.',
          },
          {
            label: 'D',
            text: 'OpenTelemetry span IDs automatically terminate any tool call that references a parent resource.',
            isCorrect: false,
            explanation:
              'OpenTelemetry is a passive tracing and instrumentation layer, not a lock manager.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch10-fc1',
        category: 'evaluation',
        front:
          'What are the four distinct stages of the tool call life cycle where agent tool invocations can fail?',
        back: '(1) Tool Selection/Decision, (2) Parameter Construction, (3) Host Validation & Execution, and (4) Result Interpretation.',
        mentalHook: 'Decide -> Construct -> Execute -> Interpret.',
      },
      {
        id: 'dmma-ch10-fc2',
        category: 'evaluation',
        front:
          'What is a "zombie parameter" in agent tool use, and why is it difficult to diagnose?',
        back: 'A hallucinated or deprecated parameter (such as `force: true` on `k8s-ai` `delete_pod`) that the tool silently ignores while returning a success status, causing the operation to behave differently than the agent intended.',
        mentalHook: 'The call succeeds on paper, but the ignored flag walks like a zombie.',
      },
      {
        id: 'dmma-ch10-fc3',
        category: 'architecture',
        front:
          'What are the five types of inter-agent dependencies that must be traced when debugging coordination failures?',
        back: 'Explicit (config/code), Implicit (unwritten assumptions like existing tables), Data (required fields/IDs across handoffs), Temporal (timing windows/TTLs), and Resource (rate limits, locks, connections).',
        mentalHook: 'Explicit, Implicit, Data, Temporal, Resource (EIDTR).',
      },
      {
        id: 'dmma-ch10-fc4',
        category: 'optimization',
        front:
          'How does a Circuit Breaker transition between Closed, Open, and Half-Open states in a multi-agent system?',
        back: 'It starts Closed (normal flow), trips Open (fails fast without calling the service) when the failure rate exceeds a threshold (e.g., 50% over 10 calls), and enters Half-Open after a cooldown timeout (e.g., 60s) to test a few probe requests before closing again.',
        mentalHook: 'Closed flows -> 50% fail trips Open -> 60s cooldown probes Half-Open.',
      },
      {
        id: 'dmma-ch10-fc5',
        category: 'architecture',
        front:
          'What are the four Graceful Degradation Tiers defined for MAKDO during component or model outages?',
        back: 'Tier 1: Full analysis + auto-fixing; Tier 2: Skip auto-fixes and report diagnostics to Slack; Tier 3: Basic health checks without deep diagnostics; Tier 4: Pause scheduled checks and respond only to manual user requests.',
        mentalHook: 'Tier 1 Auto-Fix -> Tier 2 Report-Only -> Tier 3 Basic Probe -> Tier 4 Manual.',
      },
      {
        id: 'dmma-ch10-fc6',
        category: 'security',
        front:
          'How do you balance Glass-Box LLM observability with privacy and compliance (GDPR/HIPAA/SOC2)?',
        back: 'Enforce automatic regex/ML PII redaction at the instrumentation layer, sanitize or SHA-hash sensitive prompts, restrict log access via RBAC with break-glass auditing, and enforce retention TTLs.',
        mentalHook: 'Redact PII before write, hash sensitive prompts, audit break-glass reads.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch10-feyn1',
        conceptTitle:
          'Diagnosing Handoff Context Loss vs. Fabricated Tool Responses Using Span Trees',
        prompt:
          'Explain how you would use OpenTelemetry span hierarchies and tool execution logs to distinguish between two bugs where a failing Kubernetes pod remains unfixed: (Case A) Coordinator drops context during handoff to Fixer, and (Case B) Fixer hallucinates a successful pod restart after a timeout.',
        rubricChecklist: [
          'Describes the parent-child span hierarchy linking Coordinator LLM calls, AgentTool delegations, and k8s-ai A2A tool executions via a shared correlation_id.',
          'Shows how Case A (Handoff Context Loss) appears in the span tree: Analyzer’s span outputs exact pod names, but Coordinator’s `agent_MAKDO_Fixer` input span contains a vague prompt ("Fix the issues"), forcing Fixer to emit redundant diagnostic spans.',
          'Shows how Case B (Fabricated Tool Response) appears: the `tool.invoke` / `tool.complete` log for `delete_pod` records a timeout or error, while Fixer’s subsequent `llm.response` span claims "Successfully restarted pod".',
          'Explains the two structural guardrails that prevent both bugs: mandatory structured handoff schemas and independent post-tool result verification wrappers.',
        ],
        modelExplanation:
          'With glass-box span tracing, every health check cycle shares one `trace_id` and nests each agent turn and tool call as child spans. In Case A (handoff context loss), inspecting the `agent_MAKDO_Analyzer` child span shows it returned three exact pod names (`default/nginx-7d8f`), but the very next sibling span (`agent_MAKDO_Fixer` input arguments) shows the Coordinator only passed `"Fix the failing pods"`, followed by Fixer issuing duplicate `kubernetes_resource_health` A2A calls. In Case B (fabricated tool response), comparing the raw `tool.complete` event against Fixer’s `llm.response` event exposes a contradiction: the `k8s-ai` tool span logged a 30-second timeout error, yet the LLM narrative span reported success to the Coordinator. You prevent Case A with structured handoff schemas requiring pod IDs, and Case B by wrapping mutating tools with independent state verifiers.',
      },
      {
        id: 'dmma-ch10-feyn2',
        conceptTitle:
          'Designing Multi-Agent Resilience: Retry Jitter, Circuit Breakers, and Boundary Checkpoints',
        prompt:
          'Walk through how exponential backoff with jitter, circuit breakers, durable boundary checkpointing, and 4-tier graceful degradation work together when `k8s-ai` experiences a sudden 10-minute outage in the middle of a multi-cluster remediation run.',
        rubricChecklist: [
          'Distinguishes transient errors (503/timeout) from permanent errors (401) and explains why exponential backoff (100ms, 200ms, 400ms... capped at 30s) requires random jitter to prevent thundering herds.',
          'Explains how the circuit breaker trips Open after failure rate exceeds threshold (e.g., 50% over 10 requests), failing fast for 60s before probing in Half-Open state.',
          'Explains how durable boundary checkpoints saved after Analyzer and after each Fixer step (paired with idempotent operation IDs) preserve completed work without duplicating pod deletions on resume.',
          'Describes how MAKDO steps down its 4-tier degradation ladder (e.g., disabling auto-fix in Tier 2 or pausing polling in Tier 4) and escalates actionable options to Slack with a 15-minute default timer.',
        ],
        modelExplanation:
          'When `k8s-ai` first times out during Fixer’s remediation step, the retry handler recognizes a transient error and retries up to 5 times using exponential backoff (100ms, 200ms, 400ms...) plus random jitter so concurrent agents do not slam the server in lockstep. Once 5 of the last 10 calls fail (50% threshold), the circuit breaker trips Open for 60 seconds, immediately rejecting new `k8s-ai` calls in 0ms so Coordinator threads never hang. Because MAKDO saved a durable checkpoint right after Analyzer finished (and after each completed pod fix) with idempotent transaction IDs, none of the pre-outage diagnostics are lost. While the breaker is Open, MAKDO shifts down its degradation ladder (disabling automated fixes and buffering or escalating via `Slack_Bot` with numbered human action options and a 15-minute fallback policy). After 60 seconds, the breaker enters Half-Open; once `k8s-ai` recovers and probe requests succeed, the breaker closes and Fixer resumes directly from the last checkpoint.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-ch10-failure-taxonomy',
        label: 'Multi-Agent Failure & Tool Anti-Pattern Taxonomy',
        category: 'evaluation',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Classification of non-deterministic agent failures including fabricated tool responses, zombie parameters, selective instruction attention, and retry loops.',
        whyItMatters:
          'Pinpoints whether a failure originated in LLM reasoning, parameter construction, tool execution, or result interpretation.',
      },
      {
        id: 'dmma-ch10-glassbox-tracing',
        label: 'Glass-Box OpenTelemetry Span Hierarchy',
        category: 'evaluation',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Correlated JSON event logging and parent-child span trees capturing every LLM prompt, tool invocation, state snapshot, and PII-redacted trace.',
        whyItMatters:
          'Enables trace replay, side-by-side comparative debugging, and backward archaeological root-cause analysis across agents.',
      },
      {
        id: 'dmma-ch10-coordination-diagnostics',
        label: '5-Axis Dependency & Deadlock Diagnostics',
        category: 'architecture',
        chapterNumber: 10,
        importance: 2,
        definition:
          'Diagnostic framework covering explicit, implicit, data, temporal, and resource dependencies alongside 80% partial completion, handoff loss, and circular wait deadlocks.',
        whyItMatters:
          'Isolates emergent interaction bugs where individual agents succeed but the end-to-end workflow stalls or thrashes.',
      },
      {
        id: 'dmma-ch10-circuit-breaker-backoff',
        label: 'Jittered Backoff & 3-State Circuit Breaker',
        category: 'optimization',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Transient fault handler combining exponential backoff + uniform jitter with a Closed/Open/Half-Open circuit breaker that trips at >=50% failure rate.',
        formulaOrRule: 'd_k = min(d_max, d_0 * 2^(k-1) + U(0, J)); Open if F_N / N >= 0.50',
        whyItMatters:
          'Prevents thundering-herd retry storms and stops unresponsive tools from cascading into system-wide thread exhaustion.',
      },
      {
        id: 'dmma-ch10-graceful-degradation',
        label: '4-Tier Graceful Degradation Ladder',
        category: 'architecture',
        chapterNumber: 10,
        importance: 2,
        definition:
          'Feature-flagged operational step-down from Tier 1 (full auto-fix) to Tier 2 (report-only), Tier 3 (basic checks), and Tier 4 (manual reactive mode).',
        whyItMatters:
          'Preserves core cluster visibility and human control when downstream models or remediation tools fail.',
      },
      {
        id: 'dmma-ch10-boundary-checkpointing',
        label: 'Durable Boundary Checkpointing & Idempotent Recovery',
        category: 'data',
        chapterNumber: 10,
        importance: 2,
        definition:
          'Persisting workflow state to durable storage at agent handoff boundaries paired with transaction IDs for safe replay.',
        whyItMatters:
          'Allows long-running multi-agent workflows to resume after crashes without repeating expensive diagnostics or duplicating destructive actions.',
      },
    ],
    edges: [
      {
        source: 'dmma-ch10-glassbox-tracing',
        target: 'dmma-ch10-failure-taxonomy',
        relationship: 'evaluates',
        explanation:
          'Correlated span trees and separate tool logs expose fabricated tool responses, zombie parameters, and selective instruction drops.',
      },
      {
        source: 'dmma-ch10-glassbox-tracing',
        target: 'dmma-ch10-coordination-diagnostics',
        relationship: 'prerequisite_for',
        explanation:
          'Parent-child span visualization is required to trace explicit, implicit, data, temporal, and resource dependencies across handoffs.',
      },
      {
        source: 'dmma-ch10-circuit-breaker-backoff',
        target: 'dmma-ch10-coordination-diagnostics',
        relationship: 'mitigates',
        explanation:
          'Circuit breakers and timeout-aware jittered retries prevent cascading delays and resource exhaustion across dependent agents.',
      },
      {
        source: 'dmma-ch10-circuit-breaker-backoff',
        target: 'dmma-ch10-graceful-degradation',
        relationship: 'prerequisite_for',
        explanation:
          'Tripping an Open circuit breaker triggers MAKDO to step down from Tier 1 autonomous fixing to Tier 2 or Tier 4 degraded operation.',
      },
      {
        source: 'dmma-ch10-boundary-checkpointing',
        target: 'dmma-ch10-graceful-degradation',
        relationship: 'optimizes',
        explanation:
          'Durable boundary checkpoints allow workflows paused during degraded incidents to resume cleanly once services recover.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 5,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of Chapter 10 failure modes, OpenTelemetry observability primitives, tool lifecycle & anti-patterns, coordination deadlocks, and resilience patterns (circuit breakers, 4-tier degradation, checkpointing, and human escalation).',
  },
};
