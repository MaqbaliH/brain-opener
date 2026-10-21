import { ChapterMastery } from '../../../types/book';

export const bwgaCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Mastering the Interface',
  subtitle: 'Three-Panel Architecture, Agent Modes, Artifacts, and Browser QA',
  readingTimeMinutes: 6,
  sourceWordCount: 2340,
  executiveThesis:
    'Google Antigravity replaces file-tree navigation with a Three-Panel Architecture uniting Agent Manager orchestration, Editor code inspection, and autonomous Browser testing. Mastering execution modes, artifacts, and workspace hygiene lets you steer multi-agent builds without context-switching.',
  paradigmShift: {
    oldWay:
      'Manually context-switch across separate IDE file trees, terminals, project boards, and browsers to coordinate software builds.',
    newWay:
      'Orchestrate requirements, code edits, and live Chrome verification inside one unified interface governed by structured artifacts.',
    whyItChanged:
      'Autonomous agents require a mission-control surface exposing plans, execution states, and visual proofs alongside source code.',
  },
  customDiagrams: [
    {
      id: 'bwga-ch03-svg-panels',
      title: 'Three-Panel Architecture & Artifact Loop',
      subtitle: 'Coordinating Agent Manager, Code Editor, and Browser Agent QA',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bwgaCh03Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="bwgaArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="bwgaArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bwgaCh03Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">GOOGLE ANTIGRAVITY: THREE-PANEL MISSION CONTROL ARCHITECTURE</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Unified orchestration across Agent Manager (Ctrl+L), Code Editor (Ctrl+E), and Semantic Browser Agent</text>

  <!-- Panel 1: Agent Manager -->
  <rect x="28" y="72" width="236" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="96" fill="#38bdf8" font-size="12" font-weight="700">1. AGENT MANAGER</text>
  <text x="44" y="112" fill="#94a3b8" font-size="9.5">Mission Control &amp; Inbox</text>
  <rect x="44" y="124" width="204" height="44" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="54" y="142" fill="#e0f2fe" font-size="10" font-weight="600">Conversation Inbox &amp; Tags</text>
  <text x="54" y="158" fill="#7dd3fc" font-size="9">Status: Planning | Implementing | Complete</text>
  <rect x="44" y="178" width="204" height="48" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="54" y="196" fill="#e0f2fe" font-size="10" font-weight="600">Model &amp; Mode Router</text>
  <text x="54" y="212" fill="#7dd3fc" font-size="9">Gemini 3 Pro | Claude Sonnet | GPT-OSS</text>
  <rect x="44" y="236" width="204" height="50" rx="5" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1" />
  <text x="54" y="254" fill="#bae6fd" font-size="10" font-weight="600">Implementation Plan Gate</text>
  <text x="54" y="270" fill="#e0f2fe" font-size="9">Inline user comments &amp; scope approval</text>

  <!-- Panel 2: Editor -->
  <rect x="282" y="72" width="236" height="230" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="298" y="96" fill="#c084fc" font-size="12" font-weight="700">2. CODE EDITOR (Ctrl+E)</text>
  <text x="298" y="112" fill="#94a3b8" font-size="9.5">Direct Code &amp; Diff Inspection</text>
  <rect x="298" y="124" width="204" height="44" rx="5" fill="#0f172a" stroke="#9333ea" stroke-width="1" />
  <text x="308" y="142" fill="#f3e8ff" font-size="10" font-weight="600">Multi-File Synthesis</text>
  <text x="308" y="158" fill="#d8b4fe" font-size="9">Frontend UI, Backend API, DB Schema</text>
  <rect x="298" y="178" width="204" height="48" rx="5" fill="#0f172a" stroke="#9333ea" stroke-width="1" />
  <text x="308" y="196" fill="#f3e8ff" font-size="10" font-weight="600">Inline Agent Prompt (Ctrl+I)</text>
  <text x="308" y="212" fill="#d8b4fe" font-size="9">Targeted surgical edits on selections</text>
  <rect x="298" y="236" width="204" height="50" rx="5" fill="#3b0764" stroke="#c084fc" stroke-width="1" />
  <text x="308" y="254" fill="#e9d5ff" font-size="10" font-weight="600">Integrated Terminal (Backtick)</text>
  <text x="308" y="270" fill="#f3e8ff" font-size="9">Direct shell &amp; dependency diagnostics</text>

  <!-- Panel 3: Browser Agent -->
  <rect x="536" y="72" width="236" height="230" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="552" y="96" fill="#34d399" font-size="12" font-weight="700">3. BROWSER AGENT</text>
  <text x="552" y="112" fill="#94a3b8" font-size="9.5">Semantic Web QA &amp; Intelligence</text>
  <rect x="552" y="124" width="204" height="44" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="562" y="142" fill="#d1fae5" font-size="10" font-weight="600">Controlled Chrome Instance</text>
  <text x="562" y="158" fill="#6ee7b7" font-size="9">Live preview &amp; semantic DOM navigation</text>
  <rect x="552" y="178" width="204" height="48" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="562" y="196" fill="#d1fae5" font-size="10" font-weight="600">Reusable E2E Scenarios</text>
  <text x="562" y="212" fill="#6ee7b7" font-size="9">Signup, auth, timers &amp; regression checks</text>
  <rect x="552" y="236" width="204" height="50" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="562" y="254" fill="#a7f3d0" font-size="10" font-weight="600">Walkthrough &amp; Video Proof</text>
  <text x="562" y="270" fill="#d1fae5" font-size="9">Recorded workflows &amp; screenshot evidence</text>

  <!-- Flow Arrows -->
  <line x1="264" y1="185" x2="280" y2="185" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaArrCyan)" />
  <line x1="518" y1="185" x2="534" y2="185" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaArrEmerald)" />

  <!-- Bottom Artifact Bar -->
  <rect x="28" y="320" width="744" height="74" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="44" y="342" fill="#fbbf24" font-size="11.5" font-weight="700">THE ARTIFACT VERIFICATION LAYER (HUMAN-IN-THE-LOOP GOVERNANCE)</text>
  <text x="44" y="362" fill="#fde68a" font-size="10">• Implementation Plan (Pre-Code Blueprint)   • Code Documentation (Plain-English Architecture)</text>
  <text x="44" y="380" fill="#fde68a" font-size="10">• Browser Recordings (Visual E2E Video Proof)   • Walkthrough Document (Screenshots &amp; Verification Guide)</text>
</svg>`,
      bierutCaption:
        'Three synchronized panels unify agent orchestration, surgical editing, and live browser testing around four verifiable artifacts.',
      annotations: [
        {
          step: '1',
          label: 'Agent Manager Hub',
          explanation: 'Centralizes workspaces, status-tagged threads, model selection, and plan approvals.',
        },
        {
          step: '2',
          label: 'Editor Precision',
          explanation: 'Exposes source files with Ctrl+E switching and Ctrl+I inline code commands.',
        },
        {
          step: '3',
          label: 'Browser Verification',
          explanation: 'Executes semantic Chrome user flows and records video walkthrough proofs.',
        },
      ],
    },
    {
      id: 'bwga-ch03-svg-modes',
      title: 'Agent Mode & Model Selection Matrix',
      subtitle: 'Matching Planning, Express, and Interactive modes with specialized models',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bwgaCh03Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>
    <marker id="bwgaArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bwgaCh03Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">AGENT EXECUTION MODES &amp; DYNAMIC MID-CONVERSATION SWITCHING</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Balancing upfront architectural rigor against rapid prototyping velocity across the development lifecycle</text>

  <!-- Mode 1: Planning Mode -->
  <rect x="28" y="76" width="232" height="190" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="100" fill="#38bdf8" font-size="12" font-weight="700">PLANNING MODE</text>
  <text x="44" y="118" fill="#e2e8f0" font-size="10" font-weight="600">Deep Upfront Analysis</text>
  <text x="44" y="138" fill="#94a3b8" font-size="9.5">• Researches requirements &amp; analogs</text>
  <text x="44" y="156" fill="#94a3b8" font-size="9.5">• Generates specs, mockups &amp; phases</text>
  <text x="44" y="174" fill="#94a3b8" font-size="9.5">• Prevents costly structural rework</text>
  <rect x="44" y="196" width="200" height="52" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="54" y="215" fill="#7dd3fc" font-size="9.5" font-weight="700">Best Paired With: Gemini 3 Pro</text>
  <text x="54" y="232" fill="#bae6fd" font-size="9">Complex system reasoning &amp; roadmaps</text>

  <!-- Mode 2: Interactive Mode -->
  <rect x="284" y="76" width="232" height="190" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="300" y="100" fill="#fbbf24" font-size="12" font-weight="700">INTERACTIVE MODE</text>
  <text x="300" y="118" fill="#e2e8f0" font-size="10" font-weight="600">Guided Co-Creation</text>
  <text x="300" y="138" fill="#94a3b8" font-size="9.5">• Asks clarifying questions live</text>
  <text x="300" y="156" fill="#94a3b8" font-size="9.5">• Checkpoints partial implementations</text>
  <text x="300" y="174" fill="#94a3b8" font-size="9.5">• Adapts to evolving UX opinions</text>
  <rect x="300" y="196" width="200" height="52" rx="6" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="310" y="215" fill="#fcd34d" font-size="9.5" font-weight="700">Best Paired With: Claude Sonnet</text>
  <text x="310" y="232" fill="#fde68a" font-size="9">Clean code &amp; thorough documentation</text>

  <!-- Mode 3: Express Mode -->
  <rect x="540" y="76" width="232" height="190" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="556" y="100" fill="#34d399" font-size="12" font-weight="700">EXPRESS MODE</text>
  <text x="556" y="118" fill="#e2e8f0" font-size="10" font-weight="600">Immediate Execution</text>
  <text x="556" y="138" fill="#94a3b8" font-size="9.5">• Bypasses heavy upfront blueprint</text>
  <text x="556" y="156" fill="#94a3b8" font-size="9.5">• Ideal for well-defined incremental diffs</text>
  <text x="556" y="174" fill="#94a3b8" font-size="9.5">• Higher revision risk on vague specs</text>
  <rect x="556" y="196" width="200" height="52" rx="6" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="566" y="215" fill="#6ee7b7" font-size="9.5" font-weight="700">Best Paired With: GPT-OSS</text>
  <text x="566" y="232" fill="#a7f3d0" font-size="9">Rapid iteration &amp; creative spikes</text>

  <!-- Arrows between modes -->
  <line x1="260" y1="168" x2="282" y2="168" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaArrAmber)" />
  <line x1="516" y1="168" x2="538" y2="168" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaArrAmber)" />

  <!-- Hybrid Transition Banner -->
  <rect x="28" y="290" width="744" height="102" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1.2" />
  <text x="44" y="314" fill="#f8fafc" font-size="11.5" font-weight="700">OPTIMAL LIFECYCLE WORKFLOW: PHASED MODE &amp; CONVERSATION TOPOLOGY</text>
  <text x="44" y="336" fill="#cbd5e1" font-size="10">1. Foundation Phase: Start in Planning Mode (Gemini 3 Pro) to lock database schemas, auth flows, and Implementation Plan.</text>
  <text x="44" y="356" fill="#cbd5e1" font-size="10">2. Feature Refinement: Switch mid-conversation to Interactive or Express Mode for fast UI tweaks and small feature additions.</text>
  <text x="44" y="376" fill="#cbd5e1" font-size="10">3. Workspace Hygiene: Tag active threads (ready-to-deploy, needs-testing), branch uncertain experiments, and archive finished tasks.</text>
</svg>`,
      bierutCaption:
        'Start complex builds in Planning Mode to lock architecture before switching mid-thread to Interactive or Express Mode.',
      annotations: [
        {
          step: '1',
          label: 'Planning Foundation',
          explanation: 'Builds architecture specs and phased timelines upfront to prevent rewrites.',
        },
        {
          step: '2',
          label: 'Interactive Checkpoints',
          explanation: 'Requests live clarification and feedback when requirements evolve.',
        },
        {
          step: '3',
          label: 'Express Velocity',
          explanation: 'Generates immediate code for quick prototypes and well-scoped tweaks.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'bwga-ch03-mm1',
      name: 'Mission Control Over File Trees',
      tagline: 'Steer development by active intent threads rather than source directories',
      naiveIntuition: 'Developers must navigate folders and open source files manually to manage progress.',
      firstPrinciplesReality: 'Conversations and artifacts form the primary control plane while code files are downstream outputs.',
      howToApply: 'Organize work in the Agent Manager inbox using descriptive titles and status tags.',
    },
    {
      id: 'bwga-ch03-mm2',
      name: 'Mode-Phase Alignment',
      tagline: 'Match agent planning depth to architectural uncertainty',
      naiveIntuition: 'Use Express Mode on every task to see code immediately.',
      firstPrinciplesReality: 'Skipping upfront analysis on complex apps creates structural debt and forces full rewrites.',
      howToApply: 'Launch new builds in Planning Mode, then switch to Express Mode for small iterations.',
    },
    {
      id: 'bwga-ch03-mm3',
      name: 'Artifacts as Executable Contracts',
      tagline: 'Audit Implementation Plans before coding and video proofs after execution',
      naiveIntuition: 'Verify agent work solely by reading raw code diffs across dozens of files.',
      firstPrinciplesReality: 'Implementation Plans constrain scope upfront while Walkthroughs and Browser Recordings prove runtime behavior.',
      howToApply: 'Comment directly on Implementation Plans to adjust architecture before approving synthesis.',
    },
  ],
  deepSections: [
    {
      id: 'bwga-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Three-Panel Architecture & Model Routing',
      subtitle: 'Coordinating Agent Manager, Editor, and Browser panels with specialized models',
      coreMechanism:
        'Google Antigravity consolidates software creation into three synchronized panels. The Agent Manager acts as mission control with workspace navigation on the left, a status-tracked conversation inbox in the center, and agent settings on the right. The Editor (Ctrl+E) enables direct code review and inline prompts (Ctrl+I), while the Browser panel runs automated web tests.\n\nSelecting the right model and mode governs build quality. Gemini 3 Pro leads complex planning, Claude Sonnet generates well-documented code, and GPT-OSS drives rapid iteration across Planning, Express, and Interactive modes.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Orient in Agent Manager',
          detail: 'Select workspace, check inbox status indicators, and pick the AI model.',
        },
        {
          step: '2',
          title: 'Calibrate Mode',
          detail: 'Begin complex builds in Planning Mode before switching to Express Mode.',
        },
        {
          step: '3',
          title: 'Navigate via Shortcuts',
          detail: 'Use Ctrl+L for agent panel, Ctrl+E for Editor, Ctrl+I inline, and Backtick for terminal.',
        },
      ],
      keyTakeaways: [
        'The Agent Manager replaces static file trees with status-tracked development conversations.',
        'Pairing Planning Mode with Gemini 3 Pro prevents costly architectural rework.',
      ],
      commonPitfalls: [
        'Using Express Mode for greenfield multi-tier apps causes uncoordinated code.',
        'Leaving generic conversation names makes historical context hard to locate.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch03-sec2',
      sectionNumber: '3.2',
      title: 'Artifact System & Semantic Browser Agent',
      subtitle: 'Governing agents via pre-code blueprints, walkthroughs, and live Chrome QA',
      coreMechanism:
        'Antigravity replaces raw directory inspection with four verifiable artifacts. Before writing code, agents draft Implementation Plans detailing architecture, phases, and timelines for user comments. After coding, agents deliver Code Documentation, screenshot Walkthrough Documents, and Browser Recordings.\n\nThe Browser Agent powers verification by launching a controlled Chrome instance that interprets web UIs semantically. When asked to test registration, it fills forms, checks validation states, and records video proof—turning manual QA and competitor research into reusable automated test suites.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Annotate Implementation Plan',
          detail: 'Comment on sections and redirect architectural priorities before coding starts.',
        },
        {
          step: '2',
          title: 'Dispatch Browser Agent',
          detail: 'Run semantic Chrome workflows to verify forms, navigation, and integrations.',
        },
        {
          step: '3',
          title: 'Review Walkthrough Proofs',
          detail: 'Inspect recorded videos and screenshot guides to confirm feature completion.',
        },
      ],
      keyTakeaways: [
        'Implementation Plans catch requirement misunderstandings before any code is generated.',
        'The Browser Agent runs semantic E2E tests and saves reusable regression checks.',
      ],
      commonPitfalls: [
        'Approving synthesis without reading the Implementation Plan wastes time on flawed designs.',
        'Ignoring Walkthrough Documents forfeits ready-made user and onboarding guides.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch03-sec3',
      sectionNumber: '3.3',
      title: 'Workspace Topology & Resource Optimization',
      subtitle: 'Structuring workspaces, branching threads, and governing RAM and concurrency',
      coreMechanism:
        'Scaling across projects requires disciplined workspace and inbox organization. Builders partition work into Project-Based workspaces for client isolation, Technology-Based workspaces for stack reuse, Client-Based groupings, or Hybrid setups. Inside the inbox, descriptive titles, tags (ready-to-deploy, needs-testing), archiving, and conversation branching keep explorations structured.\n\nSystem stability depends on resource governance. Concurrent agents and video artifacts consume significant RAM and local cache alongside cloud bandwidth. Capping concurrency limits, closing idle threads, and clearing caches prevent slowdowns.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Partition Workspaces',
          detail: 'Isolate clients or group shared stacks using Project, Tech, or Hybrid workspaces.',
        },
        {
          step: '2',
          title: 'Tag, Branch & Archive',
          detail: 'Tag priorities, branch threads to compare solutions, and archive completed tasks.',
        },
        {
          step: '3',
          title: 'Bound Concurrency & Cache',
          detail: 'Tune concurrent agent limits and clear local caches to protect system RAM.',
        },
      ],
      keyTakeaways: [
        'Conversation branching tests competing architectures in parallel without losing work.',
        'Capping concurrent agents and archiving finished threads prevents RAM exhaustion.',
      ],
      commonPitfalls: [
        'Running too many concurrent conversations degrades local memory and review focus.',
        'Mixing separate client apps in one workspace risks context bleed.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Execution Mode & Model Selection Matrix',
      description: 'Matching execution modes and models to project uncertainty',
      headers: ['Dimension', 'Planning (Gemini 3 Pro)', 'Express (GPT-OSS)', 'Interactive (Claude Sonnet)'],
      rows: [
        ['Primary Goal', 'Upfront system blueprint', 'Fast prototype velocity', 'Step-by-step co-creation'],
        ['Artifact Depth', 'Specs, mockups, timelines', 'Minimal pre-code docs', 'Iterative checkpoint diffs'],
        ['Rework Risk', 'Low structural rework', 'High on complex specs', 'Low via live feedback'],
        ['Best Fit', 'New multi-tier systems', 'Quick spikes & small diffs', 'Evolving UX & clean docs'],
      ],
      verdictRule:
        'Start complex projects in Planning Mode with Gemini 3 Pro, then switch mid-thread to Express or Interactive Mode for iterations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch03-scen1',
      title: 'Express Mode Architectural Drift',
      roleAndContext: 'Founder building a multi-tenant portal in Google Antigravity.',
      symptomOrFailure: 'Starting in Express Mode caused mismatched schemas and broken auth routes.',
      naiveFixAndWhyItFails: 'Prompting piecemeal fixes in Express Mode compounds spaghetti state.',
      firstPrinciplesSolution: 'Restart in Planning Mode with Gemini 3 Pro and lock the Implementation Plan first.',
      measurableOutcome: 'Delivered a verified authentication and database architecture on the first pass.',
    },
    {
      id: 'bwga-ch03-scen2',
      title: 'Inbox Overload & RAM Contention',
      roleAndContext: 'Freelancer managing four client apps on a 16GB RAM laptop.',
      symptomOrFailure: 'Twelve untitled active threads caused high RAM usage and misapplied prompts.',
      naiveFixAndWhyItFails: 'Deleting threads destroys historical implementation reasoning.',
      firstPrinciplesSolution: 'Separate Project-Based Workspaces, tag and archive threads, and lower concurrency.',
      measurableOutcome: 'Reduced memory usage by 45% while preserving full conversation history.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch03-q1',
        scenarioPrompt:
          'You are starting a complex application with uncertain requirements and want to minimize major revisions later. Which mode and model combination should you select first?',
        options: [
          {
            label: 'A',
            text: 'Express Mode with GPT-OSS to generate working code immediately.',
            isCorrect: false,
            explanation: 'Express Mode skips deep upfront analysis, increasing revision risk on complex projects.',
          },
          {
            label: 'B',
            text: 'Planning Mode with Gemini 3 Pro to generate comprehensive specs and implementation plans before coding.',
            isCorrect: true,
            explanation: 'Planning Mode paired with Gemini 3 Pro excels at thorough requirement analysis and phased architectural planning.',
          },
          {
            label: 'C',
            text: 'Editor-only mode using manual terminal scripts before engaging any agent.',
            isCorrect: false,
            explanation: 'Antigravity is designed around agent-first Planning artifacts rather than manual boilerplate setup.',
          },
          {
            label: 'D',
            text: 'Browser Agent mode alone without creating a workspace conversation.',
            isCorrect: false,
            explanation: 'Browser Agent sessions are triggered from conversations to test or research, not to replace architectural planning.',
          },
        ],
      },
      {
        id: 'bwga-ch03-q2',
        scenarioPrompt:
          'You want to evaluate two radically different payment gateway architectures without losing your current conversation state. What conversation management feature should you use?',
        options: [
          {
            label: 'A',
            text: 'Conversation branching to explore both solution approaches in parallel.',
            isCorrect: true,
            explanation: 'Branching lets you fork a conversation at a decision point and test competing implementations safely.',
          },
          {
            label: 'B',
            text: 'Clearing the local artifact cache to reset the agent memory.',
            isCorrect: false,
            explanation: 'Clearing cache frees disk space but does not create parallel exploratory threads.',
          },
          {
            label: 'C',
            text: 'Deleting the current workspace and starting over in Express Mode.',
            isCorrect: false,
            explanation: 'Deleting workspaces destroys existing context instead of preserving parallel branches.',
          },
          {
            label: 'D',
            text: 'Pressing the Backtick shortcut to run two terminals manually.',
            isCorrect: false,
            explanation: 'Terminal toggling does not fork the agent conversation or artifact state.',
          },
        ],
      },
      {
        id: 'bwga-ch03-q3',
        scenarioPrompt:
          'How does Google Antigravity’s Browser Agent execute end-to-end user registration testing when you ask it to verify the signup flow?',
        options: [
          {
            label: 'A',
            text: 'It requires you to write brittle CSS XPath selectors for every input field first.',
            isCorrect: false,
            explanation: 'The Browser Agent understands web apps semantically without needing element-specific selectors.',
          },
          {
            label: 'B',
            text: 'It only checks static HTML syntax in the Editor without running a browser.',
            isCorrect: false,
            explanation: 'It launches a real controlled Chrome instance and interacts with the live running application.',
          },
          {
            label: 'C',
            text: 'It launches a controlled Chrome instance, interprets forms and validation messages semantically, and records video proof.',
            isCorrect: true,
            explanation: 'The Browser Agent navigates live UI flows semantically and generates reusable test scenarios and video recordings.',
          },
          {
            label: 'D',
            text: 'It emails external human QA testers to record their screens manually.',
            isCorrect: false,
            explanation: 'Testing is performed autonomously by the AI Browser Agent.',
          },
        ],
      },
      {
        id: 'bwga-ch03-q4',
        scenarioPrompt:
          'While inspecting a generated component in the Editor, you want to switch back to the Agent Manager and then toggle the agent panel visibility using keyboard shortcuts. Which keys do you press?',
        options: [
          {
            label: 'A',
            text: 'Cmd/Ctrl+E to switch between Agent Manager and Editor, and Cmd/Ctrl+L to toggle agent panel visibility.',
            isCorrect: true,
            explanation: 'Cmd/Ctrl+E switches between Agent Manager and Editor while preserving context, and Cmd/Ctrl+L toggles the agent panel.',
          },
          {
            label: 'B',
            text: 'Cmd/Ctrl+I to switch panels and Backtick to open the command palette.',
            isCorrect: false,
            explanation: 'Cmd/Ctrl+I triggers inline code commands and Backtick toggles the terminal.',
          },
          {
            label: 'C',
            text: 'Cmd/Ctrl+Shift+P to toggle the terminal and Alt+F4 to archive conversations.',
            isCorrect: false,
            explanation: 'Cmd/Ctrl+Shift+P opens the command palette.',
          },
          {
            label: 'D',
            text: 'Tab to switch workspaces and Escape to compile code.',
            isCorrect: false,
            explanation: 'Those keys do not control Agent Manager and Editor switching.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'bwga-ch03-fc1',
        category: 'architecture',
        front: 'What are the three primary panels of the Google Antigravity interface?',
        back: 'The Agent Manager (project coordination), the Editor (direct code viewing/editing), and the Browser (automated testing and web interaction).',
        mentalHook: 'Orchestrate in Manager, inspect in Editor, verify in Browser.',
      },
      {
        id: 'bwga-ch03-fc2',
        category: 'adaptation',
        front: 'How do Gemini 3 Pro, Claude Sonnet, and GPT-OSS differ in strength within Antigravity?',
        back: 'Gemini 3 Pro excels at complex reasoning and planning, Claude Sonnet produces immaculate documented code, and GPT-OSS provides rapid creative iteration.',
        mentalHook: 'Gemini plans, Claude polishes, GPT-OSS sprints.',
      },
      {
        id: 'bwga-ch03-fc3',
        category: 'evaluation',
        front: 'What are the four core document types in the Antigravity Artifact System?',
        back: 'Implementation Plans, Walkthrough Documents, Browser Recordings, and Code Documentation.',
        mentalHook: 'Plan before, Document code, Record video, Walkthrough features.',
      },
      {
        id: 'bwga-ch03-fc4',
        category: 'optimization',
        front: 'When should you switch from Planning Mode to Express Mode mid-conversation?',
        back: 'Use Planning Mode first to establish a solid architectural foundation, then switch to Express Mode for rapid iterative improvements and feature additions.',
        mentalHook: 'Plan the foundation, Express the renovations.',
      },
      {
        id: 'bwga-ch03-fc5',
        category: 'foundation',
        front: 'What do the shortcuts Cmd/Ctrl+E, Cmd/Ctrl+L, Cmd/Ctrl+I, and Backtick perform?',
        back: 'Cmd/Ctrl+E switches Manager/Editor, Cmd/Ctrl+L toggles the agent panel, Cmd/Ctrl+I invokes inline code commands, and Backtick toggles the terminal.',
        mentalHook: 'E=Editor, L=Lateral Agent Panel, I=Inline, Backtick=Terminal.',
      },
      {
        id: 'bwga-ch03-fc6',
        category: 'data',
        front: 'What four workspace organization strategies does Chapter 3 define?',
        back: 'Project-Based (per client/app), Technology-Based (by stack), Client-Based (multi-project accounts), and Hybrid (isolated projects + shared utilities).',
        mentalHook: 'Isolate by Project/Client, reuse by Tech/Hybrid.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch03-feyn1',
        conceptTitle: 'The Three-Panel Architecture & Artifact Loop',
        prompt:
          'Explain to a traditional VS Code developer why Google Antigravity centers on the Agent Manager, Browser Agent, and Artifacts instead of a file tree.',
        rubricChecklist: [
          'Contrasts file-centric editing with conversation-and-artifact orchestration across Agent Manager, Editor, and Browser.',
          'Explains how Implementation Plans let developers steer architecture before any code is generated.',
          'Describes how the Browser Agent performs semantic Chrome testing rather than brittle selector scripting.',
          'Shows how Walkthrough Documents and Browser Recordings provide visual proof of completion.',
        ],
        modelExplanation:
          'Traditional IDEs force you to manage raw files and manually switch between code editors, terminals, and browsers. Google Antigravity unifies these into three panels: the Agent Manager for orchestrating tasks, the Editor for surgical code inspection, and the Browser Agent for automated semantic testing in Chrome. Instead of guessing what code changed, you collaborate on an Implementation Plan before coding starts and verify finished work through Walkthrough screenshots and Browser Recordings.',
      },
      {
        id: 'bwga-ch03-feyn2',
        conceptTitle: 'Strategic Mode Selection & Workspace Hygiene',
        prompt:
          'Explain how a developer should combine Planning, Express, and Interactive modes with conversation management to ship multiple projects without exhausting system memory.',
        rubricChecklist: [
          'Distinguishes Planning Mode (upfront architecture), Express Mode (fast iteration), and Interactive Mode (real-time Q&A).',
          'Maps models to tasks: Gemini 3 Pro for planning, Claude Sonnet for documented code, GPT-OSS for fast spikes.',
          'Covers conversation naming, status tagging, archiving, and branching for parallel experiments.',
          'Addresses RAM, network, cache clearing, and agent concurrency limits.',
        ],
        modelExplanation:
          'Complex projects should begin in Planning Mode with Gemini 3 Pro so the agent researches requirements and locks a solid blueprint first. Once the foundation works, switching mid-thread to Express or Interactive mode accelerates UI tweaks and feature additions. To stay organized across projects without exhausting local RAM, separate clients into dedicated workspaces, tag and archive conversations, branch threads for risky experiments, and cap concurrent active agents.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-three-panel-arch',
        label: 'Three-Panel Architecture',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Unified workspace integrating the Agent Manager, Code Editor, and Browser panel into a single development control plane.',
        whyItMatters: 'Eliminates tool context-switching across project management, coding, and testing.',
      },
      {
        id: 'bwga-agent-manager',
        label: 'Agent Manager Inbox',
        category: 'foundation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Mission-control interface housing workspace navigation, status-tracked conversation threads, and model/mode configuration.',
        whyItMatters: 'Replaces passive file trees with active, trackable development threads.',
      },
      {
        id: 'bwga-agent-modes',
        label: 'Planning, Express & Interactive Modes',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Configurable execution behaviors governing whether agents plan exhaustively upfront, code immediately, or collaborate step-by-step.',
        whyItMatters: 'Lets developers trade off upfront architectural rigor against rapid prototyping speed.',
      },
      {
        id: 'bwga-artifact-system',
        label: 'Artifact Verification System',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Structured documents—Implementation Plans, Walkthroughs, Browser Recordings, and Code Docs—that govern and prove agent work.',
        whyItMatters: 'Provides human-in-the-loop review gates before and after code generation.',
      },
      {
        id: 'bwga-browser-agent',
        label: 'Semantic Browser Agent',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Autonomous Chrome controller that interprets web UIs semantically to run reusable E2E tests and competitive research.',
        whyItMatters: 'Automates visual QA and regression verification without brittle DOM selectors.',
      },
      {
        id: 'bwga-workspace-hygiene',
        label: 'Conversation Branching & Resource Governance',
        category: 'optimization',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Organizational discipline using workspace partitioning, tags, thread branching, archiving, and concurrency caps.',
        whyItMatters: 'Prevents inbox chaos and local RAM exhaustion during multi-project development.',
      },
    ],
    edges: [
      {
        source: 'bwga-agent-manager',
        target: 'bwga-three-panel-arch',
        relationship: 'part_of',
        explanation: 'The Agent Manager serves as the primary mission-control panel within the Three-Panel Architecture.',
      },
      {
        source: 'bwga-agent-modes',
        target: 'bwga-artifact-system',
        relationship: 'optimizes',
        explanation: 'Planning Mode generates comprehensive Implementation Plan artifacts prior to code synthesis.',
      },
      {
        source: 'bwga-browser-agent',
        target: 'bwga-artifact-system',
        relationship: 'evaluates',
        explanation: 'The Browser Agent produces Browser Recordings and Walkthrough screenshots that verify application functionality.',
      },
      {
        source: 'bwga-workspace-hygiene',
        target: 'bwga-agent-manager',
        relationship: 'optimizes',
        explanation: 'Tagging, branching, archiving, and concurrency limits keep the Agent Manager fast and navigable.',
      },
      {
        source: 'bwga-artifact-system',
        target: 'bwga-three-panel-arch',
        relationship: 'prerequisite_for',
        explanation: 'Artifact review gates coordinate safe transitions from Agent Manager planning to Editor code and Browser QA.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 8,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 3 sections within strict high-signal compression bounds.',
  },
};

export const bwgaCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Your First Project',
  subtitle: 'Building a Freelancer Task Tracker from Outcome Brief to Browser QA',
  readingTimeMinutes: 6,
  sourceWordCount: 2144,
  executiveThesis:
    'Shipping your first application in Google Antigravity transforms development from syntax writing into disciplined product management. By stating user outcomes declaratively, pruning the Implementation Plan before coding, and combining Browser Agent QA with local dogfooding, you can ship a full-stack Freelancer Task Tracker in hours.',
  paradigmShift: {
    oldWay:
      'Spend weeks manually coding frontend views, API routes, auth middleware, and database schemas before testing a prototype.',
    newWay:
      'Submit an outcome-focused brief in Planning Mode, refine the Implementation Plan, and let agents generate and test the stack.',
    whyItChanged:
      'Agents translate business requirements into coordinated React, Node.js, and database code faster than manual boilerplate scripting.',
  },
  customDiagrams: [
    {
      id: 'bwga-ch04-svg-lifecycle',
      title: 'First-Project Pipeline: Freelancer Task Tracker',
      subtitle: 'Six-stage workflow from declarative brief to local refinement and hosting',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bwgaCh04Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="bwgaCh04Arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="bwgaCh04ArrLoop" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bwgaCh04Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">END-TO-END AGENTIC PROJECT LIFECYCLE (FREELANCER TASK TRACKER)</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Transforming a declarative user-outcome prompt into a verified full-stack application in hours</text>

  <!-- Row 1: Stages 1 to 3 -->
  <rect x="28" y="76" width="228" height="122" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="98" fill="#38bdf8" font-size="11.5" font-weight="700">1. DECLARATIVE BRIEF</text>
  <text x="42" y="116" fill="#e2e8f0" font-size="9.5">• Workspace: Freelancer Task Tracker</text>
  <text x="42" y="134" fill="#e2e8f0" font-size="9.5">• Mode: Planning + Gemini 3 Pro</text>
  <text x="42" y="152" fill="#94a3b8" font-size="9">• Focus on user goals (projects, timers,</text>
  <text x="42" y="166" fill="#94a3b8" font-size="9">  billing reports) not tech syntax</text>

  <rect x="286" y="76" width="228" height="122" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="300" y="98" fill="#fbbf24" font-size="11.5" font-weight="700">2. PLAN REFINEMENT (3-5m)</text>
  <text x="300" y="116" fill="#e2e8f0" font-size="9.5">• Audit architecture &amp; feature list</text>
  <text x="300" y="134" fill="#fde68a" font-size="9.5">• UI: Minimalist Todoist style</text>
  <text x="300" y="152" fill="#fde68a" font-size="9.5">• DB: Swap PostgreSQL -&gt; SQLite</text>
  <text x="300" y="168" fill="#fde68a" font-size="9.5">• Scope: Defer advanced reporting</text>

  <rect x="544" y="76" width="228" height="122" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="558" y="98" fill="#c084fc" font-size="11.5" font-weight="700">3. SYNTHESIS (30-90m)</text>
  <text x="558" y="116" fill="#e2e8f0" font-size="9.5">• Approve plan &amp; monitor progress</text>
  <text x="558" y="134" fill="#e2e8f0" font-size="9.5">• Scaffolds React UI + Node.js APIs</text>
  <text x="558" y="152" fill="#e2e8f0" font-size="9.5">• Configures SQLite &amp; JWT Auth</text>
  <text x="558" y="168" fill="#94a3b8" font-size="9">• Generates local run &amp; deploy docs</text>

  <line x1="256" y1="137" x2="284" y2="137" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04Arr)" />
  <line x1="514" y1="137" x2="542" y2="137" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04Arr)" />

  <!-- Row 2: Stages 4 to 6 -->
  <rect x="544" y="236" width="228" height="122" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="558" y="258" fill="#34d399" font-size="11.5" font-weight="700">4. BROWSER AGENT QA</text>
  <text x="558" y="276" fill="#e2e8f0" font-size="9.5">• Tests signup, login &amp; task CRUD</text>
  <text x="558" y="294" fill="#e2e8f0" font-size="9.5">• Simulates live timer switching</text>
  <text x="558" y="312" fill="#6ee7b7" font-size="9.5">• Captures video workflows &amp; reports</text>
  <text x="558" y="328" fill="#6ee7b7" font-size="9.5">• Compiles Walkthrough Document</text>

  <rect x="286" y="236" width="228" height="122" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="300" y="258" fill="#38bdf8" font-size="11.5" font-weight="700">5. HUMAN UX ITERATION</text>
  <text x="300" y="276" fill="#e2e8f0" font-size="9.5">• Test local server as real freelancer</text>
  <text x="300" y="294" fill="#e2e8f0" font-size="9.5">• Experiment with CSS &amp; task fields</text>
  <text x="300" y="312" fill="#e2e8f0" font-size="9.5">• Reversible incremental prompts</text>
  <text x="300" y="328" fill="#94a3b8" font-size="9">• Catch usability friction early</text>

  <rect x="28" y="236" width="228" height="122" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="42" y="258" fill="#fbbf24" font-size="11.5" font-weight="700">6. PRODUCTION READINESS</text>
  <text x="42" y="276" fill="#e2e8f0" font-size="9.5">• Configure backups &amp; security</text>
  <text x="42" y="294" fill="#e2e8f0" font-size="9.5">• Easy hosting: Heroku or Netlify</text>
  <text x="42" y="312" fill="#e2e8f0" font-size="9.5">• Scalable cloud: GCP or AWS</text>
  <text x="42" y="328" fill="#fde68a" font-size="9.5">• Log prompt patterns in journal</text>

  <line x1="658" y1="198" x2="658" y2="234" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04Arr)" />
  <line x1="544" y1="297" x2="516" y2="297" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04Arr)" />
  <line x1="286" y1="297" x2="258" y2="297" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04ArrLoop)" />

  <text x="400" y="392" fill="#cbd5e1" font-size="10.5" font-weight="600" text-anchor="middle">CORE LESSON: Success depends on Product Management clarity (scope, trade-offs, UX review) rather than raw coding syntax.</text>
</svg>`,
      bierutCaption:
        'Shipping your first project follows a closed loop from outcome-driven prompt and plan pruning to Browser Agent QA and local testing.',
      annotations: [
        {
          step: '1',
          label: 'Outcome Brief',
          explanation: 'State freelancer goals clearly and let Gemini 3 Pro propose the technical stack.',
        },
        {
          step: '2',
          label: 'Plan Pruning',
          explanation: 'Choose SQLite, minimalist UI, and core scope before approving synthesis.',
        },
        {
          step: '3',
          label: 'Dual Verification',
          explanation: 'Combine automated Browser Agent video tests with live human dogfooding.',
        },
      ],
    },
    {
      id: 'bwga-ch04-svg-architecture',
      title: 'Synthesized Three-Tier Application Structure',
      subtitle: 'Frontend, Backend, and Configuration layers of the Freelancer Task Tracker',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="bwgaCh04Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>
    <marker id="bwgaCh04Arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#bwgaCh04Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">GENERATED APPLICATION STRUCTURE: FRONTEND, BACKEND &amp; CONFIG LAYERS</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Understanding the anatomical boundaries of your generated codebase enables informed enhancements and deployment</text>

  <!-- Tier 1: Frontend -->
  <rect x="28" y="76" width="232" height="224" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="100" fill="#38bdf8" font-size="12" font-weight="700">1. FRONTEND LAYER</text>
  <text x="44" y="116" fill="#94a3b8" font-size="9.5">User Interface &amp; Interaction</text>
  <rect x="44" y="130" width="200" height="46" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="54" y="148" fill="#e0f2fe" font-size="10" font-weight="600">React Components</text>
  <text x="54" y="164" fill="#7dd3fc" font-size="9">Project lists, task cards &amp; timers</text>
  <rect x="44" y="186" width="200" height="46" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="54" y="204" fill="#e0f2fe" font-size="10" font-weight="600">CSS &amp; Responsive Layout</text>
  <text x="54" y="220" fill="#7dd3fc" font-size="9">Minimalist desktop &amp; mobile styling</text>
  <rect x="44" y="242" width="200" height="44" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="54" y="260" fill="#e0f2fe" font-size="10" font-weight="600">Client JavaScript Logic</text>
  <text x="54" y="276" fill="#7dd3fc" font-size="9">Form validation &amp; view navigation</text>

  <!-- Tier 2: Backend -->
  <rect x="284" y="76" width="232" height="224" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="300" y="100" fill="#34d399" font-size="12" font-weight="700">2. BACKEND &amp; DATA LAYER</text>
  <text x="300" y="116" fill="#94a3b8" font-size="9.5">Business Logic &amp; Persistence</text>
  <rect x="300" y="130" width="200" height="46" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="310" y="148" fill="#d1fae5" font-size="10" font-weight="600">Node.js API Endpoints</text>
  <text x="310" y="164" fill="#6ee7b7" font-size="9">REST routes for projects, tasks, reports</text>
  <rect x="300" y="186" width="200" height="46" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="310" y="204" fill="#d1fae5" font-size="10" font-weight="600">JWT Auth Middleware</text>
  <text x="310" y="220" fill="#6ee7b7" font-size="9">Session security &amp; route protection</text>
  <rect x="300" y="242" width="200" height="44" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="310" y="260" fill="#d1fae5" font-size="10" font-weight="600">Database Schema (SQLite/PG)</text>
  <text x="310" y="276" fill="#6ee7b7" font-size="9">Persistent storage for users &amp; time logs</text>

  <!-- Tier 3: Configuration & Deployment -->
  <rect x="540" y="76" width="232" height="224" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="556" y="100" fill="#fbbf24" font-size="12" font-weight="700">3. CONFIG &amp; DEPLOYMENT</text>
  <text x="556" y="116" fill="#94a3b8" font-size="9.5">Environment &amp; Hosting</text>
  <rect x="556" y="130" width="200" height="46" rx="5" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="566" y="148" fill="#fef3c7" font-size="10" font-weight="600">Dependency Manifests</text>
  <text x="566" y="164" fill="#fde68a" font-size="9">External packages &amp; build scripts</text>
  <rect x="556" y="186" width="200" height="46" rx="5" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="566" y="204" fill="#fef3c7" font-size="10" font-weight="600">Environment &amp; Backups</text>
  <text x="566" y="220" fill="#fde68a" font-size="9">Local dev configs &amp; data safety</text>
  <rect x="556" y="242" width="200" height="44" rx="5" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="566" y="260" fill="#fef3c7" font-size="10" font-weight="600">Production Hosting Targets</text>
  <text x="566" y="276" fill="#fde68a" font-size="9">Heroku/Netlify vs. GCP/AWS</text>

  <line x1="260" y1="188" x2="282" y2="188" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04Arr2)" />
  <line x1="516" y1="188" x2="538" y2="188" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwgaCh04Arr2)" />

  <!-- Bottom Safe Experimentation Bar -->
  <rect x="28" y="320" width="744" height="74" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="44" y="342" fill="#38bdf8" font-size="11.5" font-weight="700">SAFE LOCAL EXPERIMENTATION &amp; FUTURE ROADMAP</text>
  <text x="44" y="362" fill="#e2e8f0" font-size="10">• Reversible Iteration: Request colour/layout tweaks or custom task fields locally; revert instantly if needed.</text>
  <text x="44" y="380" fill="#e2e8f0" font-size="10">• Phase 2 Extensions: Client invoicing integration, CSV/PDF billing exports, and dedicated mobile time tracking.</text>
</svg>`,
      bierutCaption:
        'Knowing how React UI components, Node.js APIs, and config files separate concerns empowers targeted upgrade requests.',
      annotations: [
        {
          step: '1',
          label: 'Frontend Layer',
          explanation: 'React components, CSS styles, and client scripts manage responsive views.',
        },
        {
          step: '2',
          label: 'Backend Layer',
          explanation: 'Node.js routes, JWT auth middleware, and SQLite schemas secure user data.',
        },
        {
          step: '3',
          label: 'Config & Hosting',
          explanation: 'Config manifests bridge local testing with Heroku/Netlify or GCP/AWS deployment.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'bwga-ch04-mm1',
      name: 'Declarative Outcome Prompting',
      tagline: 'Specify user workflows and business goals rather than premature syntax',
      naiveIntuition: 'Dictate exact library versions and SQL schemas in your very first prompt.',
      firstPrinciplesReality: 'Agents design stronger architectures when given clear user goals first, then refined via the Implementation Plan.',
      howToApply: 'Frame your initial prompt around user accounts, projects, timers, and responsive views.',
    },
    {
      id: 'bwga-ch04-mm2',
      name: 'Pre-Code Scope Pruning',
      tagline: 'Right-size UI style and database simplicity in the Implementation Plan',
      naiveIntuition: 'Accept whatever enterprise database and heavy dashboard the agent proposes first.',
      firstPrinciplesReality: 'Over-engineered initial stacks slow deployment; pruning scope before coding keeps the MVP agile.',
      howToApply: 'Request a minimalist Todoist-style UI, SQLite over PostgreSQL, and deferred reporting.',
    },
    {
      id: 'bwga-ch04-mm3',
      name: 'Dual-Loop Verification',
      tagline: 'Pair automated Browser Agent QA with live human dogfooding',
      naiveIntuition: 'Passing Browser Agent tests guarantees the app is ready for client billing.',
      firstPrinciplesReality: 'Automated QA verifies functional correctness, but only real human usage exposes workflow friction.',
      howToApply: 'Audit the Walkthrough video proof, then run the local server during actual freelance work.',
    },
  ],
  deepSections: [
    {
      id: 'bwga-ch04-sec1',
      sectionNumber: '4.1',
      title: 'Outcome Briefs & Plan Refinement',
      subtitle: 'Launching the Freelancer Task Tracker in Planning Mode and pruning scope',
      coreMechanism:
        'Building your first app starts before launching the IDE: write down the problems your tool solves—client projects, task priorities, time tracking, and billing summaries. Inside a "Freelancer Task Tracker" workspace, choose Planning Mode with Gemini 3 Pro and submit an outcome-focused brief describing user goals rather than technical syntax.\n\nIn 3–5 minutes, the agent produces an Implementation Plan proposing React, Node.js, PostgreSQL, JWT auth, and development phases. Before approving code generation, refine the plan interactively: request a minimalist Todoist-like UI, defer complex reporting, and swap PostgreSQL for SQLite.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Draft Outcome Brief',
          detail: 'Specify accounts, client projects, timers, and billing views in plain English.',
        },
        {
          step: '2',
          title: 'Generate Plan',
          detail: 'Run Gemini 3 Pro in Planning Mode to propose stack, features, and phases.',
        },
        {
          step: '3',
          title: 'Prune Scope & Stack',
          detail: 'Request Todoist minimalism, basic v1 reporting, and SQLite simplicity.',
        },
      ],
      keyTakeaways: [
        'Outcome-focused prompts outperform premature technical prescriptions on project launch.',
        'Refining the Implementation Plan takes minutes and prevents hours of stack rework.',
      ],
      commonPitfalls: [
        'Accepting enterprise defaults like PostgreSQL when a solo app only needs SQLite.',
        'Building complex analytics dashboards before core task tracking works.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch04-sec2',
      sectionNumber: '4.2',
      title: 'Code Synthesis & Browser Agent QA',
      subtitle: 'Monitoring 30–90 minute generation and automated Chrome verification',
      coreMechanism:
        'After you approve the Implementation Plan, Antigravity generates the full application over 30–90 minutes. Progress updates track the agent scaffolding React components, Node.js APIs, database schemas, JWT authentication, and setup docs.\n\nOnce synthesis completes, the Browser Agent launches Chrome to test the app like a real user. It verifies signup and login forms, creates sample projects, starts and switches task timers to check time math, validates reports, and compiles video recordings plus a screenshot Walkthrough Document.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Monitor Synthesis',
          detail: 'Track real-time generation across React UI, Node APIs, and database files.',
        },
        {
          step: '2',
          title: 'Run Browser QA',
          detail: 'Let the Browser Agent verify signup, login, CRUD, and live timer math.',
        },
        {
          step: '3',
          title: 'Audit Walkthrough',
          detail: 'Review screenshots, recorded videos, and local operational instructions.',
        },
      ],
      keyTakeaways: [
        'Agents automatically include essential plumbing like password reset and validation.',
        'Browser Agent timer simulations confirm accurate time calculations across tasks.',
      ],
      commonPitfalls: [
        'Ignoring progress updates during synthesis misses early environment warnings.',
        'Skipping video proof review before starting manual code edits.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch04-sec3',
      sectionNumber: '4.3',
      title: 'Codebase Anatomy, Experimentation & Hosting',
      subtitle: 'Navigating the three-tier codebase, iterating locally, and preparing deployment',
      coreMechanism:
        'Understanding the generated three-tier structure sharpens future upgrade requests. The frontend (React, CSS, JS) handles responsive views; the backend (Node.js server, DB files, JWT middleware) enforces business logic and auth; and configuration files govern dependencies and deployment.\n\nWith the local server running, experiment safely with reversible prompts—tweaking colors, adding task fields, or reverting changes instantly. Before real freelance use, configure backups, test timers under realistic workloads, and pick a host (Heroku/Netlify for simplicity or GCP/AWS for scale).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Inspect Three Tiers',
          detail: 'Locate React UI files, Node/DB backend logic, and deployment configs.',
        },
        {
          step: '2',
          title: 'Experiment Locally',
          detail: 'Test real freelance workflows and prompt reversible UI or field updates.',
        },
        {
          step: '3',
          title: 'Harden & Deploy',
          detail: 'Configure backups and deploy via Heroku/Netlify or GCP/AWS.',
        },
      ],
      keyTakeaways: [
        'Agentic development shifts focus from coding syntax to product management judgment.',
        'Logging effective prompt patterns in a journal accelerates future projects.',
      ],
      commonPitfalls: [
        'Using the app for live client billing before setting up database backups.',
        'Requesting massive multi-feature changes instead of small, testable increments.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'First-Project Stack & Hosting Matrix',
      description: 'Comparing lightweight solo defaults against enterprise options',
      headers: ['Layer', 'Solo Choice', 'Scale Choice', 'Rule'],
      rows: [
        ['Database', 'SQLite file DB', 'PostgreSQL DB', 'Solo vs. multi-team'],
        ['UI Design', 'Minimalist list', 'Full dashboard', 'Fast entry vs. charts'],
        ['v1 Scope', 'Projects & timers', 'Full invoicing', 'Ship fast vs. complex'],
        ['Hosting', 'Heroku / Netlify', 'GCP / AWS', 'PaaS vs. cloud infra'],
      ],
      verdictRule:
        'Pick SQLite, minimalist UI, core timers, and Heroku/Netlify for v1, then add invoicing and cloud scale in Phase 2.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch04-scen1',
      title: 'Pruning an Over-Engineered Plan',
      roleAndContext: 'Freelance designer building a solo task tracker in Antigravity.',
      symptomOrFailure: 'The initial plan proposed PostgreSQL and a heavy analytics dashboard.',
      naiveFixAndWhyItFails: 'Approving first and removing PostgreSQL after synthesis breaks migrations.',
      firstPrinciplesSolution: 'Request a Todoist-style UI, SQLite, and deferred reporting in the Implementation Plan.',
      measurableOutcome: 'Generated a zero-config SQLite app that launched locally on the first try.',
    },
    {
      id: 'bwga-ch04-scen2',
      title: 'Fixing Timer Friction via Dogfooding',
      roleAndContext: 'Consultant testing the generated Task Tracker locally.',
      symptomOrFailure: 'Automated QA passed, but switching tasks during client calls took four clicks.',
      naiveFixAndWhyItFails: 'Trusting automated QA alone leaves ergonomic bottlenecks unfixed.',
      firstPrinciplesSolution: 'Dogfood the local server during live work and prompt a one-click header timer.',
      measurableOutcome: 'Cut task-switching to one click while preserving SQLite time logs.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch04-q1',
        scenarioPrompt:
          'When writing your opening prompt for the Freelancer Task Tracker, what should your description emphasize to get the best Implementation Plan?',
        options: [
          {
            label: 'A',
            text: 'Exact SQL table column types, webpack configuration flags, and React hook names.',
            isCorrect: false,
            explanation: 'Over-specifying low-level technical syntax upfront restricts the agent from proposing an integrated architecture.',
          },
          {
            label: 'B',
            text: 'User goals and business functionality—such as accounts, client projects, task timers, reports, and responsive design.',
            isCorrect: true,
            explanation: 'Focusing on what the application should accomplish lets the agent recommend appropriate technical implementation details.',
          },
          {
            label: 'C',
            text: 'A single-sentence prompt ("Build a task app") in Express Mode without requirements.',
            isCorrect: false,
            explanation: 'Vague prompts without upfront requirement thinking fail to guide agent proposals toward real user needs.',
          },
          {
            label: 'D',
            text: 'Only deployment instructions for AWS Kubernetes clusters.',
            isCorrect: false,
            explanation: 'Deployment comes after planning, building, and verifying core functionality.',
          },
        ],
      },
      {
        id: 'bwga-ch04-q2',
        scenarioPrompt:
          'Your initial Implementation Plan proposes PostgreSQL and a complex analytics dashboard, but you are building a tool for individual freelancers. What is the best action?',
        options: [
          {
            label: 'A',
            text: 'Approve the plan immediately and manually rewrite the backend database files afterward.',
            isCorrect: false,
            explanation: 'Modifying architecture before any code is written is far faster and safer than rewriting generated code.',
          },
          {
            label: 'B',
            text: 'Request plan refinements: ask for SQLite for simple deployment, a minimalist Todoist-like UI, and basic task management first.',
            isCorrect: true,
            explanation: 'Iterative feedback on the Implementation Plan aligns visual style, scope, and database simplicity before synthesis begins.',
          },
          {
            label: 'C',
            text: 'Abandon Planning Mode and write the SQLite schema manually in the terminal.',
            isCorrect: false,
            explanation: 'Agents gladly update the Implementation Plan when given clear constraint feedback.',
          },
          {
            label: 'D',
            text: 'Disable the Browser Agent so it does not test the PostgreSQL database.',
            isCorrect: false,
            explanation: 'Disabling QA does not simplify your database architecture.',
          },
        ],
      },
      {
        id: 'bwga-ch04-q3',
        scenarioPrompt:
          'You want to understand where user authentication rules and API endpoints live vs. where responsive styling lives in your generated app. How are these separated?',
        options: [
          {
            label: 'A',
            text: 'Frontend files (React, CSS, client JS) handle UI and styling, while Backend files (Node.js server, DB, auth middleware) manage APIs and security.',
            isCorrect: true,
            explanation: 'Antigravity organizes web apps into frontend presentation, backend business/data logic, and configuration files.',
          },
          {
            label: 'B',
            text: 'All authentication secrets and database queries are stored directly inside CSS stylesheets.',
            isCorrect: false,
            explanation: 'CSS controls visual styling and responsive layout, never backend authentication or database persistence.',
          },
          {
            label: 'C',
            text: 'Configuration files render the user interface while React components manage database backups.',
            isCorrect: false,
            explanation: 'Configuration files specify libraries and environment setup, while React handles UI components.',
          },
          {
            label: 'D',
            text: 'The Walkthrough Document executes the backend API routes at runtime.',
            isCorrect: false,
            explanation: 'Walkthrough Documents are verification and user documentation artifacts, not runtime servers.',
          },
        ],
      },
      {
        id: 'bwga-ch04-q4',
        scenarioPrompt:
          'According to Chapter 4, what is the primary skill shift developers experience after completing their first Google Antigravity project?',
        options: [
          {
            label: 'A',
            text: 'Memorizing CSS flexbox properties and SQL join syntax.',
            isCorrect: false,
            explanation: 'Agents handle low-level syntax generation automatically.',
          },
          {
            label: 'B',
            text: 'Communicating clearly with agents, prioritizing features, and evaluating solution trade-offs—core product management skills.',
            isCorrect: true,
            explanation: 'The hardest part of agentic development is clear communication, scope prioritization, and architectural trade-off judgment.',
          },
          {
            label: 'C',
            text: 'Manually recording screen videos for QA documentation.',
            isCorrect: false,
            explanation: 'The Browser Agent records workflow videos automatically.',
          },
          {
            label: 'D',
            text: 'Eliminating all human testing once automated Browser Agent tests pass.',
            isCorrect: false,
            explanation: 'Human testing as a real user remains essential to catch usability issues.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'bwga-ch04-fc1',
        category: 'foundation',
        front: 'Why should your initial project prompt focus on user goals rather than technical syntax?',
        back: 'Focusing on business functionality lets the AI agent recommend an optimal, cohesive technical architecture in the Implementation Plan.',
        mentalHook: 'State the "What" and "Why"; let the Agent propose the "How".',
      },
      {
        id: 'bwga-ch04-fc2',
        category: 'architecture',
        front: 'What three common adjustments should you make when refining an initial Implementation Plan?',
        back: 'Adjust the visual design approach (e.g., minimalist UI), prune feature priorities (defer complex reports), and simplify tech choices (e.g., SQLite over PostgreSQL).',
        mentalHook: 'Refine Style, Scope, and Stack before coding.',
      },
      {
        id: 'bwga-ch04-fc3',
        category: 'evaluation',
        front: 'How does the Browser Agent test the time-tracking feature in the Freelancer Task Tracker?',
        back: 'It simulates realistic usage by starting timers, switching between tasks, and verifying that time calculations and reports are accurate.',
        mentalHook: 'Live timer simulation + calculation verification.',
      },
      {
        id: 'bwga-ch04-fc4',
        category: 'architecture',
        front: 'What are the three structural code layers created for the Freelancer Task Tracker?',
        back: 'Frontend code (React, CSS, client JS), Backend code (Node.js APIs, DB schemas, auth middleware), and Configuration files (dependencies, env, deploy).',
        mentalHook: 'Frontend sees, Backend stores/secures, Config deploys.',
      },
      {
        id: 'bwga-ch04-fc5',
        category: 'optimization',
        front: 'How do Heroku/Netlify compare with Google Cloud Platform (GCP) or AWS for your first deployment?',
        back: 'Heroku and Netlify offer simple deployment with minimal configuration, while GCP and AWS provide greater scalability and control at the cost of more setup.',
        mentalHook: 'Heroku/Netlify for fast start; GCP/AWS for custom scale.',
      },
      {
        id: 'bwga-ch04-fc6',
        category: 'adaptation',
        front: 'What is the value of keeping a personal development journal when working with Google Antigravity?',
        back: 'Documenting which prompt patterns and request types yield strong agent results builds a personal playbook that accelerates future projects.',
        mentalHook: 'Log winning prompts to compound agent velocity.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch04-feyn1',
        conceptTitle: 'From Outcome Brief to Refined Implementation Plan',
        prompt:
          'Explain how a non-technical freelancer can guide Google Antigravity to design a right-sized task tracker before a single line of code is written.',
        rubricChecklist: [
          'Starts with upfront requirement clarity around projects, tasks, timers, and billing reports.',
          'Uses Planning Mode with Gemini 3 Pro and a declarative prompt focused on user goals.',
          'Reviews the generated 3–5 minute Implementation Plan covering stack, features, and phases.',
          'Provides concrete refinement feedback (Todoist minimalism, SQLite simplicity, deferred reporting) prior to approval.',
        ],
        modelExplanation:
          'Before opening the tool, define what the freelancer actually needs to do: track client projects, time tasks, and view billing summaries. Submit those user goals in Planning Mode with Gemini 3 Pro without dictating code syntax. When the agent returns an Implementation Plan proposing React, Node, and PostgreSQL, critique it like a product manager—ask for a clean Todoist-style layout, defer complex reporting to v2, and swap PostgreSQL for SQLite so deployment stays simple.',
      },
      {
        id: 'bwga-ch04-feyn2',
        conceptTitle: 'Dual-Layer Verification & Safe Iterative Enhancement',
        prompt:
          'Walk through what happens after you approve the Implementation Plan, explaining how automated Browser Agent testing and human local experimentation work together.',
        rubricChecklist: [
          'Describes the 30–90 minute code synthesis across React frontend, Node.js APIs, DB schema, and docs.',
          'Explains how the Browser Agent tests signup, login, task creation, and timer switching with video proof.',
          'Emphasizes launching the local server as a human user to catch real-world usability friction.',
          'Covers safe, reversible local experimentation and production readiness (backups, security, hosting choice).',
        ],
        modelExplanation:
          'After plan approval, the agent spends 30–90 minutes generating the React frontend, Node.js backend, database schema, and documentation. Next, the Browser Agent launches Chrome to test signup, login, and live timer switching, compiling video proof and a Walkthrough Document. You then run the app locally during real work to spot UX friction and request small, reversible improvements before setting up backups and deploying to Netlify, Heroku, or GCP.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-declarative-brief',
        label: 'Outcome-First Project Brief',
        category: 'foundation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Initial prompt strategy that specifies user roles, workflows, and business goals while letting the agent propose technical syntax.',
        whyItMatters: 'Produces cleaner architectural proposals than premature low-level micromanagement.',
      },
      {
        id: 'bwga-plan-refinement',
        label: 'Implementation Plan Pruning',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Interactive pre-code review where the builder simplifies UI style, feature scope, and database choices (e.g., SQLite vs. PostgreSQL).',
        whyItMatters: 'Eliminates over-engineering before the 30–90 minute code synthesis phase begins.',
      },
      {
        id: 'bwga-three-tier-codebase',
        label: 'Generated Three-Tier Codebase',
        category: 'architecture',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Synthesized application structure separating React/CSS frontend, Node.js/DB/JWT backend, and deployment configuration files.',
        whyItMatters: 'Lets builders request targeted modifications and understand production requirements.',
      },
      {
        id: 'bwga-automated-e2e-qa',
        label: 'Automated Workflow & Timer QA',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Browser Agent verification of registration, login, project CRUD, and stateful time-tracking math with video proof.',
        whyItMatters: 'Proves core functional correctness and generates visual user documentation automatically.',
      },
      {
        id: 'bwga-reversible-iteration',
        label: 'Reversible Local Experimentation',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Safe local workflow for testing incremental UI or functional changes and reverting them instantly via conversation.',
        whyItMatters: 'Builds product confidence and catches real-world UX friction before live client usage.',
      },
      {
        id: 'bwga-deployment-readiness',
        label: 'Production Hardening & Hosting Selection',
        category: 'security',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Pre-launch checklist covering data backups, security settings, load testing, and PaaS (Heroku/Netlify) vs. Cloud (GCP/AWS) selection.',
        whyItMatters: 'Protects real freelance billing data and matches hosting complexity to user skill.',
      },
    ],
    edges: [
      {
        source: 'bwga-declarative-brief',
        target: 'bwga-plan-refinement',
        relationship: 'prerequisite_for',
        explanation: 'A clear outcome-focused brief generates the initial Implementation Plan that the builder then refines.',
      },
      {
        source: 'bwga-plan-refinement',
        target: 'bwga-three-tier-codebase',
        relationship: 'optimizes',
        explanation: 'Pruning scope and selecting SQLite in the plan yields a leaner, easier-to-deploy three-tier codebase.',
      },
      {
        source: 'bwga-automated-e2e-qa',
        target: 'bwga-three-tier-codebase',
        relationship: 'evaluates',
        explanation: 'The Browser Agent tests the synthesized frontend and backend layers end-to-end in Chrome.',
      },
      {
        source: 'bwga-reversible-iteration',
        target: 'bwga-automated-e2e-qa',
        relationship: 'optimizes',
        explanation: 'Human local dogfooding complements automated QA by uncovering ergonomic UX improvements.',
      },
      {
        source: 'bwga-reversible-iteration',
        target: 'bwga-deployment-readiness',
        relationship: 'prerequisite_for',
        explanation: 'Local verification with realistic freelance workloads precedes backup configuration and production hosting.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 10,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 4 sections within strict high-signal compression bounds.',
  },
};
