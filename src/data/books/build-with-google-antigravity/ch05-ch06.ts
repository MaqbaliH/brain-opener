import { ChapterMastery } from '../../../types/book';

export const bwgaCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Building Real Web Applications',
  subtitle:
    'Multi-agent partitioning, integration contracts, workflows, and hardening',
  readingTimeMinutes: 6,
  sourceWordCount: 2175,
  executiveThesis:
    'Shipping production software in Google Antigravity shifts from single-thread prompting to architecture-first, multi-agent functional orchestration. Partitioning UI, backend, and integrations across contract-synced threads while enforcing unified schemas, role-based access, and indexing upfront delivers scalable applications.',
  paradigmShift: {
    oldWay:
      'Prompting one agent with a flat feature list and bolting on security later.',
    newWay:
      'Orchestrating functional agent threads via an architecture spec, unified schema, and editable workflow rules.',
    whyItChanged:
      'Production apps ingest heterogeneous external channels and serve distinct roles that break single-thread prompts.',
  },
  customDiagrams: [
    {
      id: 'bwga-ch05-svg-1',
      title: 'Multi-Agent Functional Partitioning Topology',
      subtitle:
        'Coordinating UI, Backend, and Integration agents via shared API contracts',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch05Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch05ArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="ch05ArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
    <marker id="ch05ArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch05Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">MULTI-AGENT FUNCTIONAL PARTITIONING &amp; CONTRACT TOPOLOGY</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Dividing concurrent Antigravity threads by functional boundary and synchronizing via explicit API schemas</text>

  <!-- Top Hub: Architecture & Inbox Orchestrator -->
  <rect x="180" y="66" width="440" height="68" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8" />
  <text x="400" y="88" fill="#e0f2fe" font-size="12" font-weight="700" text-anchor="middle">AGENT MANAGER INBOX &amp; TECHNICAL ARCHITECTURE SPEC</text>
  <text x="400" y="106" fill="#7dd3fc" font-size="10" text-anchor="middle">Business Context Brief • Target Volumes • Shared API Contracts • Sequence Gates</text>
  <text x="400" y="122" fill="#94a3b8" font-size="9.5" text-anchor="middle">Dedicated Documentation Thread tracks cross-component interactions</text>

  <!-- Flow Arrows from Hub to 3 Agents -->
  <path d="M 260 134 L 145 178" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05ArrCyan)" />
  <path d="M 400 134 L 400 178" stroke="#34d399" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05ArrEmerald)" />
  <path d="M 540 134 L 655 178" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05ArrAmber)" />

  <!-- Agent 1: UI/UX -->
  <rect x="28" y="184" width="232" height="136" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="144" y="206" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">THREAD 1: UI / UX AGENT</text>
  <text x="144" y="222" fill="#94a3b8" font-size="9.5" text-anchor="middle">Role-Tiered Interface Layer</text>
  <text x="42" y="244" fill="#cbd5e1" font-size="9.5">• Comparative UI mockups first</text>
  <text x="42" y="262" fill="#cbd5e1" font-size="9.5">• CSR rapid-response inbox view</text>
  <text x="42" y="280" fill="#cbd5e1" font-size="9.5">• Manager trend &amp; SLA drill-downs</text>
  <text x="42" y="298" fill="#cbd5e1" font-size="9.5">• Admin rule &amp; key config screens</text>

  <!-- Agent 2: Backend & Schema -->
  <rect x="284" y="184" width="232" height="136" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
  <text x="400" y="206" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">THREAD 2: BACKEND &amp; DATA AGENT</text>
  <text x="400" y="222" fill="#94a3b8" font-size="9.5" text-anchor="middle">Core Domain &amp; Workflow Engine</text>
  <text x="298" y="244" fill="#cbd5e1" font-size="9.5">• Unified feedback schema &amp; ERDs</text>
  <text x="298" y="262" fill="#cbd5e1" font-size="9.5">• NLP sentiment &amp; topic tagging</text>
  <text x="298" y="280" fill="#cbd5e1" font-size="9.5">• UI-editable routing &amp; SLA rules</text>
  <text x="298" y="298" fill="#cbd5e1" font-size="9.5">• Indexed queries &amp; async reports</text>

  <!-- Agent 3: External Integrations -->
  <rect x="540" y="184" width="232" height="136" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="656" y="206" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">THREAD 3: INTEGRATIONS AGENT</text>
  <text x="656" y="222" fill="#94a3b8" font-size="9.5" text-anchor="middle">External Ingestion &amp; Webhooks</text>
  <text x="554" y="244" fill="#cbd5e1" font-size="9.5">• Gmail/Outlook bidirectional sync</text>
  <text x="554" y="262" fill="#cbd5e1" font-size="9.5">• Social mention stream listeners</text>
  <text x="554" y="280" fill="#cbd5e1" font-size="9.5">• Form webhook payload adapters</text>
  <text x="554" y="298" fill="#cbd5e1" font-size="9.5">• Human-supplied OAuth key vault</text>

  <!-- Horizontal Contract Bridges -->
  <path d="M 284 252 L 260 252" stroke="#34d399" stroke-width="1.6" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05ArrCyan)" />
  <path d="M 540 252 L 516 252" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05ArrEmerald)" />

  <!-- Bottom Unified Production Runtime Bar -->
  <rect x="28" y="344" width="744" height="54" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5" />
  <text x="400" y="366" fill="#ecfdf5" font-size="11.5" font-weight="700" text-anchor="middle">CONVERGED PRODUCTION SYSTEM: RBAC SECURITY • STAGING GATE • AUTOMATED BACKUPS</text>
  <text x="400" y="384" fill="#a7f3d0" font-size="10" text-anchor="middle">REST/Webhook JSON contracts keep all three threads decoupled while guaranteeing end-to-end schema compatibility</text>
</svg>`,
      bierutCaption:
        'Partitioning concurrent agent threads by functional seam prevents file collisions while shared API schemas align modules.',
      annotations: [
        {
          step: '1',
          label: 'Architecture Blueprint',
          explanation:
            'Anchor threads with a business brief and system blueprint.',
        },
        {
          step: '2',
          label: 'Functional Isolation',
          explanation:
            'Isolate UI, backend, and external integrations into dedicated threads.',
        },
        {
          step: '3',
          label: 'Shared API Contracts',
          explanation:
            'Paste backend endpoint schemas into frontend and integration threads.',
        },
      ],
    },
    {
      id: 'bwga-ch05-svg-2',
      title: 'Omnichannel Feedback Normalization Pipeline',
      subtitle:
        'Unifying email, social, and webhook payloads into indexed records',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch05Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch05Arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="ch05ArrRose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch05Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">OMNICHANNEL INGESTION, UNIFIED SCHEMA &amp; SLA ESCALATION ENGINE</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">How heterogeneous external channels normalize into a single indexed schema driving automated routing and async analytics</text>

  <!-- Left Column: 3 External Sources -->
  <rect x="28" y="76" width="168" height="72" rx="7" fill="#1e293b" stroke="#38bdf8" stroke-width="1.4" />
  <text x="112" y="98" fill="#e0f2fe" font-size="10.5" font-weight="700" text-anchor="middle">Email APIs (Gmail/Outlook)</text>
  <text x="112" y="116" fill="#94a3b8" font-size="9" text-anchor="middle">Bidirectional thread sync</text>
  <text x="112" y="132" fill="#7dd3fc" font-size="8.5" text-anchor="middle">MIME headers + body text</text>

  <rect x="28" y="168" width="168" height="72" rx="7" fill="#1e293b" stroke="#a855f7" stroke-width="1.4" />
  <text x="112" y="190" fill="#f3e8ff" font-size="10.5" font-weight="700" text-anchor="middle">Social APIs (X / Facebook)</text>
  <text x="112" y="208" fill="#94a3b8" font-size="9" text-anchor="middle">Real-time mention streams</text>
  <text x="112" y="224" fill="#d8b4fe" font-size="8.5" text-anchor="middle">Handle + post metadata</text>

  <rect x="28" y="260" width="168" height="72" rx="7" fill="#1e293b" stroke="#f59e0b" stroke-width="1.4" />
  <text x="112" y="282" fill="#fef3c7" font-size="10.5" font-weight="700" text-anchor="middle">Web Form Webhooks</text>
  <text x="112" y="300" fill="#94a3b8" font-size="9" text-anchor="middle">Inbound HTTP POST payloads</text>
  <text x="112" y="316" fill="#fcd34d" font-size="8.5" text-anchor="middle">Structured JSON fields</text>

  <!-- Flow Arrows into Unified Schema -->
  <path d="M 196 112 L 244 180" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05Arr2)" />
  <path d="M 196 204 L 244 204" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05Arr2)" />
  <path d="M 196 296 L 244 228" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05Arr2)" />

  <!-- Center Stage: Unified Schema & NLP Categorizer -->
  <rect x="248" y="96" width="236" height="216" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.6" />
  <text x="366" y="120" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">UNIFIED FEEDBACK SCHEMA</text>
  <text x="366" y="136" fill="#94a3b8" font-size="9.5" text-anchor="middle">Normalized Entities &amp; B-Tree Indexes</text>
  <rect x="264" y="148" width="204" height="64" rx="6" fill="#1e293b" stroke="#059669" stroke-width="1" />
  <text x="276" y="166" fill="#d1fae5" font-size="9.5">• Indexed: date_range, customer_id</text>
  <text x="276" y="182" fill="#d1fae5" font-size="9.5">• Indexed: assigned_member, status</text>
  <text x="276" y="198" fill="#6ee7b7" font-size="9">• Encrypted PII + Admin Audit Log</text>

  <rect x="264" y="224" width="204" height="72" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="366" y="244" fill="#7dd3fc" font-size="10" font-weight="700" text-anchor="middle">NLP SENTIMENT &amp; TOPIC ENGINE</text>
  <text x="276" y="262" fill="#cbd5e1" font-size="9">• Classifies Tech / Billing / Product</text>
  <text x="276" y="278" fill="#cbd5e1" font-size="9">• Scores urgency &amp; polarity</text>

  <!-- Arrow to Rule Engine -->
  <path d="M 484 204 L 528 204" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05Arr2)" />

  <!-- Right Column: Rule Engine & Escalation -->
  <rect x="532" y="76" width="240" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="652" y="98" fill="#e0f2fe" font-size="11" font-weight="700" text-anchor="middle">UI-EDITABLE WORKFLOW ENGINE</text>
  <text x="546" y="118" fill="#cbd5e1" font-size="9.5">• Tech Bug -&gt; Support Queue</text>
  <text x="546" y="136" fill="#cbd5e1" font-size="9.5">• Billing Issue -&gt; Accounting Team</text>
  <text x="546" y="154" fill="#cbd5e1" font-size="9.5">• Feature Idea -&gt; Product Manager</text>
  <text x="546" y="174" fill="#7dd3fc" font-size="9">Zero code deploys needed to adjust rules</text>

  <path d="M 652 196 L 652 224" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch05ArrRose)" />

  <rect x="532" y="228" width="240" height="104" rx="8" fill="#3b1219" stroke="#f43f5e" stroke-width="1.5" />
  <text x="652" y="250" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">SLA ESCALATION &amp; ASYNC JOBS</text>
  <text x="546" y="270" fill="#fecdd3" font-size="9.5">• Unresolved &gt; SLA threshold alerts</text>
  <text x="546" y="288" fill="#fecdd3" font-size="9.5">• Supervisor escalation + follow-up</text>
  <text x="546" y="306" fill="#fecdd3" font-size="9.5">• Background worker report queue</text>

  <!-- Bottom Bar -->
  <rect x="28" y="352" width="744" height="44" rx="7" fill="#0f172a" stroke="#475569" stroke-width="1.2" />
  <text x="400" y="378" fill="#cbd5e1" font-size="10.5" font-weight="600" text-anchor="middle">CACHED CONFIG &amp; TEAM LISTS • BACKGROUND REPORT NOTIFICATIONS • ROLE-SCOPED DASHBOARDS</text>
</svg>`,
      bierutCaption:
        'Normalizing external channels into one indexed schema powers automated routing, escalations, and async analytics.',
      annotations: [
        {
          step: '1',
          label: 'Channel Adapters',
          explanation:
            'Convert emails, mentions, and webhooks into uniform records.',
        },
        {
          step: '2',
          label: 'Indexed Storage',
          explanation:
            'Index dates, customers, and assignees for fast filtering.',
        },
        {
          step: '3',
          label: 'Editable Routing',
          explanation:
            'Route and escalate tickets via UI rules without deploys.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'bwga-ch05-mm1',
      name: 'Functional Seam Partitioning',
      tagline: 'Divide multi-agent threads by architectural layer, never random tasks',
      naiveIntuition:
        'Opening five concurrent chats for random features accelerates delivery automatically.',
      firstPrinciplesReality:
        'Uncoordinated agents overwrite shared files; partitioning into UI, Backend, and Integration threads prevents conflicts.',
      howToApply:
        'Launch one thread per layer and share backend API schemas across conversations.',
    },
    {
      id: 'bwga-ch05-mm2',
      name: 'Data-Driven Rule Externalization',
      tagline: 'Store volatile routing logic in editable database tables',
      naiveIntuition:
        'Hardcoding conditional routing inside controllers is the fastest automation strategy.',
      firstPrinciplesReality:
        'Routing rules change weekly; hardcoded branches force code deploys for minor operational tweaks.',
      howToApply:
        'Build UI-editable database rules for ticket assignment and SLA escalation triggers.',
    },
    {
      id: 'bwga-ch05-mm3',
      name: 'The Human Credential Boundary',
      tagline: 'Agents write adapters, while humans provision external API keys',
      naiveIntuition:
        'An autonomous agent can register third-party Gmail and social accounts alone.',
      firstPrinciplesReality:
        'Providers enforce human identity checks and OAuth consent before issuing API credentials.',
      howToApply:
        'Register developer accounts and vault API keys manually before wiring endpoints.',
    },
  ],
  deepSections: [
    {
      id: 'bwga-ch05-sec1',
      sectionNumber: '5.1',
      title: 'Business Architecture & Multi-Agent Orchestration',
      subtitle: 'Replacing feature lists with architecture specs and synced threads',
      coreMechanism:
        'Production web applications solve measurable business bottlenecks rather than isolated coding exercises. Before generating a multi-channel customer feedback system, supply a project brief detailing business context, target roles, expected data volumes, integration scopes, and latency targets. Instruct the agent to produce both an implementation plan and a technical architecture document mapping how components interact.\n\nOnce the architecture is locked, partition work across concurrent Antigravity threads along functional boundaries: one agent owns UI/UX design, a second owns backend APIs and schemas, and a third handles external integrations. Use the Agent Manager inbox to sequence dependencies and share API specs across threads.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Author Brief & Architecture Spec',
          detail: 'Specify roles, volumes, and integrations to generate a blueprint.',
        },
        {
          step: '2',
          title: 'Spawn Functional Agent Threads',
          detail: 'Isolate UI, Backend API, and Integrations into separate chats.',
        },
        {
          step: '3',
          title: 'Sync via Shared API Contracts',
          detail: 'Share endpoint schemas across threads and sequence via Inbox.',
        },
      ],
      keyTakeaways: [
        'Rich business context helps agents select scalable architectures upfront.',
        'Functional partitioning with shared API specs prevents cross-agent drift.',
      ],
      commonPitfalls: [
        'Splitting agents by random tasks causes conflicting file edits.',
        'Building frontend views before locking backend API schemas.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch05-sec2',
      sectionNumber: '5.2',
      title: 'Omnichannel Schemas & Configurable Workflows',
      subtitle: 'Normalizing external payloads and decoupling routing rules',
      coreMechanism:
        'Real-world apps ingest heterogeneous external channels—such as bidirectional Gmail/Outlook threads, live X/Facebook mentions, and inbound form webhooks. Because agents cannot register developer accounts for you, manually provision OAuth credentials and specify exact scopes (read-only vs. bidirectional email, historical vs. live social streams). Request a schema diagram that unifies these disparate fields into one normalized feedback model built to scale.\n\nPrevent UI clutter by requesting comparative mockups and role-scoped dashboards with drill-down views for support reps, managers, and admins. Automate triage using explicit routing rules (tech bugs to support, billing to accounting) stored as UI-editable database configurations with SLA escalation timers.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Define Scopes & Provision Keys',
          detail: 'Clarify access depth and manually register provider OAuth keys.',
        },
        {
          step: '2',
          title: 'Normalize Payloads in Schema ERD',
          detail: 'Map email, social, and webhook fields into one schema.',
        },
        {
          step: '3',
          title: 'Build Editable Routing & SLA Timers',
          detail: 'Implement UI-configurable assignment rules and overdue alerts.',
        },
      ],
      keyTakeaways: [
        'A unified schema lets one interface manage all feedback channels.',
        'UI-editable workflow rules let managers adjust routing without deploys.',
      ],
      commonPitfalls: [
        'Hardcoding routing rules in code forces deploys for rule tweaks.',
        'Exposing identical complex menus to reps, managers, and admins.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch05-sec3',
      sectionNumber: '5.3',
      title: 'Production Hardening: Security, Indexing & Ops',
      subtitle: 'Enforcing RBAC, query indexing, async reports, and staging',
      coreMechanism:
        'Turning a prototype into a durable business system requires hardening across analytics, testing, security, and operations. Pair scheduled summary reports with custom date-range visual charts, and offload heavy aggregations to background worker queues that notify users when ready. Protect sensitive customer data and metrics using encrypted storage, role-based access control (RBAC), admin audit logging, and vaulted API credentials.\n\nPrevent latency degradation by indexing frequent query columns (date range, customer ID, assignee) and caching low-churn team and preference lists. Verify multi-format integration payloads and load limits in a staging environment backed by automated backups and a dedicated Documentation Conversation.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Enforce RBAC, Encryption & Vaults',
          detail: 'Restrict analytics by role, log admin actions, and vault keys.',
        },
        {
          step: '2',
          title: 'Index Columns & Queue Reports',
          detail: 'Index hot filters, cache lists, and run reports asynchronously.',
        },
        {
          step: '3',
          title: 'Test in Staging & Keep Doc Thread',
          detail: 'Run load tests in staging and maintain a doc thread.',
        },
      ],
      keyTakeaways: [
        'Database indexing, caching, and async workers prevent scaling stalls.',
        'A dedicated documentation conversation accelerates debugging and onboarding.',
      ],
      commonPitfalls: [
        'Running heavy analytics synchronously inside the HTTP request cycle.',
        'Pushing unverified integration updates straight to production.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Prototype vs. Production Architecture Matrix',
      description:
        'Comparing prototype shortcuts against production engineering across core dimensions',
      headers: ['Dimension', 'Prototype Shortcut', 'Production Architecture', 'Risk Avoided'],
      rows: [
        [
          'Agent Threads',
          'Single chat',
          'Functional threads + specs',
          'File collisions',
        ],
        [
          'Workflows',
          'Hardcoded branches',
          'UI-editable DB rules',
          'Deploy bottlenecks',
        ],
        [
          'Analytics',
          'Sync SQL queries',
          'Async background queue',
          'UI timeouts',
        ],
        [
          'Security & Ops',
          'Flat access',
          'RBAC + staging + backups',
          'Data leaks & outages',
        ],
      ],
      verdictRule:
        'Build core features first, then add multi-agent contracts, RBAC, indexing, and staging gates incrementally.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch05-scen1',
      title: 'Uncoordinated Multi-Agent API Mismatch',
      roleAndContext:
        'Founder running three concurrent threads for UI, backend, and Gmail sync.',
      symptomOrFailure:
        'The dashboard crashes because UI expects camelCase while backend returns snake_case.',
      naiveFixAndWhyItFails:
        'Patching UI props screen-by-screen leaves other endpoints out of sync.',
      firstPrinciplesSolution:
        'Generate a canonical API spec in the backend thread and share it.',
      measurableOutcome:
        'Zero payload mismatches across all three threads on first integration.',
    },
    {
      id: 'bwga-ch05-scen2',
      title: 'Synchronous Report Database Lockup',
      roleAndContext:
        'Manager running a 90-day report across 25,000 feedback records.',
      symptomOrFailure:
        'Generating the report freezes the UI for 45s and stalls live support queries.',
      naiveFixAndWhyItFails:
        'Raising HTTP timeouts keeps spinners alive but starves CSR queries.',
      firstPrinciplesSolution:
        'Index date and assignee columns, cache lists, and queue reports asynchronously.',
      measurableOutcome:
        'Live queries stay under 80ms while reports compile in the background.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch05-q1',
        scenarioPrompt:
          'You are launching three concurrent Google Antigravity conversations to build a customer feedback platform. How should you partition responsibilities across the agents to minimize coordination bottlenecks?',
        options: [
          {
            label: 'A',
            text: 'Assign each agent a random third of the user stories from a flat backlog.',
            isCorrect: false,
            explanation:
              'Arbitrary task splitting causes multiple agents to edit the same UI and database files simultaneously.',
          },
          {
            label: 'B',
            text: 'Divide work along functional boundaries (UI/UX, Backend/Database, External Integrations) and share API contracts across threads.',
            isCorrect: true,
            explanation:
              'Functional boundaries isolate file ownership while shared API specifications ensure all components interoperate cleanly.',
          },
          {
            label: 'C',
            text: 'Have all three agents write full-stack code in parallel and merge whichever implementation finishes first.',
            isCorrect: false,
            explanation:
              'Redundant full-stack generation wastes compute and produces incompatible schemas.',
          },
          {
            label: 'D',
            text: 'Restrict multi-agent conversations exclusively to writing unit tests after one agent builds the entire app.',
            isCorrect: false,
            explanation:
              'Antigravity supports concurrent development across functional modules during primary implementation.',
          },
        ],
      },
      {
        id: 'bwga-ch05-q2',
        scenarioPrompt:
          'Your feedback system needs to route technical complaints to Support, billing questions to Accounting, and feature ideas to Product Managers. As the company grows, managers want to adjust these rules weekly. What should you ask the agent to build?',
        options: [
          {
            label: 'A',
            text: 'A hard-coded switch statement inside the webhook ingestion controller.',
            isCorrect: false,
            explanation:
              'Hard-coded logic requires developer intervention and code redeployment for every operational rule change.',
          },
          {
            label: 'B',
            text: 'A separate microservice for each department with static routing tables.',
            isCorrect: false,
            explanation:
              'Static routing tables still require code changes and add unnecessary infrastructure overhead.',
          },
          {
            label: 'C',
            text: 'Workflow rules stored in the database that administrators can modify directly through the application UI.',
            isCorrect: true,
            explanation:
              'UI-configurable workflow rules decouple business process adjustments from code deployments.',
          },
          {
            label: 'D',
            text: 'A manual triage queue where an administrator assigns every incoming message by hand.',
            isCorrect: false,
            explanation:
              'Manual assignment defeats the purpose of automated workflow classification and slows response times.',
          },
        ],
      },
      {
        id: 'bwga-ch05-q3',
        scenarioPrompt:
          'When integrating Gmail and Twitter APIs into your feedback application, what is the exact division of labor between you and the Google Antigravity agent?',
        options: [
          {
            label: 'A',
            text: 'The agent automatically registers your developer accounts, completes OAuth verification, and generates API keys.',
            isCorrect: false,
            explanation:
              'Agents cannot create third-party developer accounts or obtain authentication credentials on your behalf.',
          },
          {
            label: 'B',
            text: 'You manually create developer accounts and obtain API credentials; the agent guides setup and writes the integration code.',
            isCorrect: true,
            explanation:
              'Human operators must provision provider credentials and define access scopes (e.g., read-only vs. bidirectional) while the agent implements the protocol logic.',
          },
          {
            label: 'C',
            text: 'You must write all external HTTP client code manually because agents can only modify local UI files.',
            isCorrect: false,
            explanation:
              'Agents excel at implementing API clients, webhooks, and payload normalizers once given specifications and credentials.',
          },
          {
            label: 'D',
            text: 'External integrations do not require credentials if built inside Google Antigravity.',
            isCorrect: false,
            explanation:
              'All third-party APIs require authenticated developer credentials regardless of the IDE.',
          },
        ],
      },
      {
        id: 'bwga-ch05-q4',
        scenarioPrompt:
          'Your team struggles to onboard new developers and diagnose cross-service bugs across your feedback app’s email importer, NLP categorizer, and analytics engine. Which Chapter 5 Pro Tip directly solves this?',
        options: [
          {
            label: 'A',
            text: 'Delete all completed agent conversations every Friday to keep the workspace clean.',
            isCorrect: false,
            explanation:
              'Deleting conversations destroys architectural context and troubleshooting history.',
          },
          {
            label: 'B',
            text: 'Maintain a dedicated documentation conversation where agents explain how all system components interact.',
            isCorrect: true,
            explanation:
              'A dedicated documentation conversation serves as a living architectural reference for debugging and onboarding.',
          },
          {
            label: 'C',
            text: 'Disable automated workflows whenever a bug occurs in production.',
            isCorrect: false,
            explanation:
              'Disabling automation halts business operations without providing architectural visibility.',
          },
          {
            label: 'D',
            text: 'Grant every customer service representative full system administrator privileges.',
            isCorrect: false,
            explanation:
              'Violating RBAC exposes sensitive analytics and configuration settings to unauthorized roles.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'bwga-ch05-fc1',
        category: 'architecture',
        front: 'Why should you request a Technical Architecture Document alongside the implementation plan for complex apps?',
        back: 'It maps how system components interact, enabling informed trade-off decisions and structured future enhancements.',
        mentalHook: 'Implementation plan = step list; Architecture doc = system map.',
      },
      {
        id: 'bwga-ch05-fc2',
        category: 'architecture',
        front: 'How should work be divided across concurrent Antigravity agents on a large project?',
        back: 'Partition along functional boundaries (UI/UX, Backend API, External Integrations) and synchronize via shared API documentation.',
        mentalHook: 'Split by architectural seam, sync by API contract.',
      },
      {
        id: 'bwga-ch05-fc3',
        category: 'data',
        front: 'What database design challenge arises when aggregating feedback from email, social media, and web forms?',
        back: 'Each channel has different payload fields that must be normalized into a unified schema to present a consistent interface.',
        mentalHook: 'Many inbound shapes -> One canonical feedback row.',
      },
      {
        id: 'bwga-ch05-fc4',
        category: 'adaptation',
        front: 'How should business workflow and escalation rules be architected so non-technical managers can update them?',
        back: 'Implement rules as database-backed configurations editable via the application UI rather than hardcoded conditional logic.',
        mentalHook: 'Rules in tables, not in code deploys.',
      },
      {
        id: 'bwga-ch05-fc5',
        category: 'security',
        front: 'How does Role-Based Access Control (RBAC) partition visibility in the customer feedback system?',
        back: 'CSRs access feedback queues and response tools; Managers access analytics and SLA reports; Admins manage integrations and rules.',
        mentalHook: 'Right tools for the role, zero excess exposure.',
      },
      {
        id: 'bwga-ch05-fc6',
        category: 'optimization',
        front: 'What three performance strategies prevent slowdowns as feedback volume scales from dozens to thousands of items?',
        back: 'Database indexing on frequent query fields, caching low-churn metadata, and background processing for heavy reports.',
        mentalHook: 'Index hot filters, cache static lists, queue heavy reports.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch05-feyn1',
        conceptTitle: 'Multi-Agent Functional Partitioning & Contract Sync',
        prompt:
          'Explain to a solo founder why opening three uncoordinated agent threads fails on complex apps, and how to orchestrate UI, Backend, and Integration agents safely.',
        rubricChecklist: [
          'Contrasts arbitrary task splitting against functional boundary partitioning (UI/UX, Backend API, External Integrations).',
          'Explains how sharing API documentation and implementation plans between threads guarantees compatible interfaces.',
          'Describes using the Agent Manager inbox to monitor progress and sequence interdependent prerequisite work.',
          'Mentions maintaining a dedicated documentation conversation to track how all pieces fit together.',
        ],
        modelExplanation:
          'When multiple agents work on random tasks without boundaries, they overwrite each other’s files and invent incompatible data structures. Instead, divide agents along functional seams: one builds the UI, one builds the backend API and database, and one handles third-party integrations. By sharing the backend API specification directly with the frontend and integration conversations and monitoring task order in the Agent Manager inbox, all three agents build toward a single compatible contract.',
      },
      {
        id: 'bwga-ch05-feyn2',
        conceptTitle: 'Omnichannel Normalization & Configurable Workflow Engines',
        prompt:
          'Explain how a customer feedback system ingests emails, tweets, and web forms into one dashboard and automates routing without requiring code changes when team rules shift.',
        rubricChecklist: [
          'Identifies the payload heterogeneity problem across email, social media APIs, and webhook forms.',
          'Explains normalizing disparate source fields into a unified database schema with indexes on date, customer, and assignee.',
          'Describes storing categorization, team assignment, and SLA escalation rules in UI-editable tables rather than hardcoded logic.',
          'Connects role-tiered dashboards (CSR vs. Manager vs. Admin) to reduced cognitive complexity and RBAC security.',
        ],
        modelExplanation:
          'Emails, social mentions, and webhook forms arrive with completely different data fields, so the integration layer maps every inbound message into a single normalized feedback schema indexed by date, customer, and assignee. Once stored uniformly, an NLP and workflow engine evaluates database-stored routing and SLA escalation rules—such as sending billing tickets to accounting or alerting supervisors after a timeout—allowing managers to adjust business logic in the UI without touching source code.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-ch05-node-arch-doc',
        label: 'Technical Architecture Document',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'A system-wide blueprint generated alongside the implementation plan that specifies component interactions, target volumes, and integration boundaries.',
        whyItMatters:
          'Prevents myopic code generation and anchors trade-off decisions across multi-agent development threads.',
      },
      {
        id: 'bwga-ch05-node-func-partition',
        label: 'Multi-Agent Functional Partitioning',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Dividing concurrent agent conversations by architectural seam (UI/UX, Backend API, External Integrations) synchronized via shared API specs.',
        whyItMatters:
          'Enables parallel development velocity without merge collisions or mismatched frontend-backend payloads.',
      },
      {
        id: 'bwga-ch05-node-unified-schema',
        label: 'Unified Omnichannel Schema',
        category: 'data',
        chapterNumber: 5,
        importance: 2,
        definition:
          'A normalized relational database model that maps disparate email, social media, and webhook fields into a consistent feedback record.',
        whyItMatters:
          'Allows downstream UI views, NLP classifiers, and analytics queries to operate uniformly across all ingestion channels.',
      },
      {
        id: 'bwga-ch05-node-workflow-engine',
        label: 'UI-Configurable Workflow Engine',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Database-stored business rules for ticket routing and SLA timeout escalation that administrators can modify through the UI.',
        whyItMatters:
          'Eliminates engineering redeployments when business teams change assignment logic or response-time thresholds.',
      },
      {
        id: 'bwga-ch05-node-rbac-security',
        label: 'Role-Based Access & Credential Isolation',
        category: 'security',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Restricting UI views and data access by role (CSR, Manager, Admin) while keeping encrypted PII, audit logs, and external API keys secure.',
        whyItMatters:
          'Protects sensitive customer feedback and business metrics from unauthorized internal or external exposure.',
      },
      {
        id: 'bwga-ch05-node-perf-scaling',
        label: 'Indexing, Caching & Async Reporting',
        category: 'optimization',
        chapterNumber: 5,
        importance: 3,
        definition:
          'Combining B-tree database indexes, static metadata caching, and background worker queues for long-running analytics reports.',
        whyItMatters:
          'Maintains responsive sub-second daily operations as feedback volume scales from dozens to thousands of monthly items.',
      },
    ],
    edges: [
      {
        source: 'bwga-ch05-node-arch-doc',
        target: 'bwga-ch05-node-func-partition',
        relationship: 'prerequisite_for',
        explanation:
          'A clear system architecture blueprint defines the module boundaries and API contracts required to partition work across multiple agents.',
      },
      {
        source: 'bwga-ch05-node-func-partition',
        target: 'bwga-ch05-node-unified-schema',
        relationship: 'optimizes',
        explanation:
          'Sharing the backend schema contract across integration and UI agents ensures all external adapters write into one normalized table structure.',
      },
      {
        source: 'bwga-ch05-node-unified-schema',
        target: 'bwga-ch05-node-workflow-engine',
        relationship: 'prerequisite_for',
        explanation:
          'Deterministic routing and SLA escalation rules require normalized sentiment, topic, and timestamp fields across all feedback sources.',
      },
      {
        source: 'bwga-ch05-node-rbac-security',
        target: 'bwga-ch05-node-workflow-engine',
        relationship: 'mitigates',
        explanation:
          'Role-based access control and audit logging prevent unauthorized users from tampering with routing rules or viewing executive analytics.',
      },
      {
        source: 'bwga-ch05-node-perf-scaling',
        target: 'bwga-ch05-node-unified-schema',
        relationship: 'optimizes',
        explanation:
          'Database indexes on date range, customer ID, and assignee keep queries fast as the unified feedback table grows.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 11,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 11 source sections of Chapter 5 within strict high-signal compression bounds.',
  },
};

export const bwgaCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Connecting to Supabase',
  subtitle:
    'PostgreSQL backend, SQL migrations, Row Level Security, and Edge Functions',
  readingTimeMinutes: 6,
  sourceWordCount: 2276,
  executiveThesis:
    'Supabase upgrades Antigravity prototypes into production businesses by pairing PostgreSQL with instant REST/GraphQL APIs, auth, real-time streams, storage, and Edge Functions. Enforcing Row Level Security (RLS) from day one and isolating the service role key on the server guarantees multi-tenant data safety.',
  paradigmShift: {
    oldWay:
      'Building custom auth servers and REST controllers or locking into schemaless NoSQL stores.',
    newWay:
      'Describing entities to Antigravity to generate SQL migrations, PostgreSQL RLS policies, and instant APIs.',
    whyItChanged:
      'Supabase wraps PostgreSQL relational integrity, live streams, and OAuth sessions behind zero-boilerplate APIs.',
  },
  customDiagrams: [
    {
      id: 'bwga-ch06-svg-1',
      title: 'Supabase Trust Boundary: Anon vs. Service Role',
      subtitle:
        'Separating RLS-guarded browser queries from server Edge Functions',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch06Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch06ArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
    <marker id="ch06ArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch06Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">SUPABASE TRUST BOUNDARY: ANON KEY + RLS vs. SERVICE ROLE KEY</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Separating row-scoped browser queries from privileged server-side execution in Supabase Edge Functions</text>

  <!-- Left Box: Browser Client -->
  <rect x="28" y="76" width="224" height="248" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="140" y="100" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">ANTIGRAVITY FRONTEND</text>
  <text x="140" y="116" fill="#94a3b8" font-size="9.5" text-anchor="middle">Untrusted Client Browser Runtime</text>
  <rect x="44" y="132" width="192" height="68" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1.2" />
  <text x="140" y="152" fill="#e0f2fe" font-size="10" font-weight="700" text-anchor="middle">Public Connection Config</text>
  <text x="56" y="170" fill="#bae6fd" font-size="9">• Project Base URL</text>
  <text x="56" y="186" fill="#bae6fd" font-size="9">• Anonymous (anon) API Key</text>

  <rect x="44" y="214" width="192" height="92" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.2" />
  <text x="140" y="234" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">Auth Session &amp; Protected UI</text>
  <text x="56" y="252" fill="#cbd5e1" font-size="9">• Email/Password + OAuth JWT</text>
  <text x="56" y="268" fill="#cbd5e1" font-size="9">• Protected route redirects</text>
  <text x="56" y="284" fill="#cbd5e1" font-size="9">• Live CDC subscription client</text>

  <!-- Upper Path: Direct Client -> RLS Gate -> Postgres -->
  <path d="M 252 166 L 310 166" stroke="#34d399" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch06ArrEmerald)" />

  <!-- Center Top: Auto REST/GraphQL + RLS Gate -->
  <rect x="314" y="76" width="224" height="148" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.8" />
  <text x="426" y="98" fill="#ecfdf5" font-size="11" font-weight="700" text-anchor="middle">ROW LEVEL SECURITY (RLS) GATE</text>
  <text x="426" y="114" fill="#a7f3d0" font-size="9.5" text-anchor="middle">Auto-Generated REST / GraphQL / Realtime</text>
  <text x="328" y="136" fill="#d1fae5" font-size="9.5">• Evaluates JWT user_id per row</text>
  <text x="328" y="154" fill="#d1fae5" font-size="9.5">• Filters SELECT / INSERT / UPDATE</text>
  <text x="328" y="172" fill="#d1fae5" font-size="9.5">• Filters real-time event broadcasts</text>
  <text x="328" y="190" fill="#d1fae5" font-size="9.5">• Enforces Storage bucket policies</text>

  <!-- Center Bottom: Serverless Edge Functions -->
  <path d="M 252 276 L 310 276" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch06ArrAmber)" />
  <rect x="314" y="240" width="224" height="114" rx="8" fill="#271a0c" stroke="#f59e0b" stroke-width="1.6" />
  <text x="426" y="262" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">SUPABASE EDGE FUNCTIONS</text>
  <text x="426" y="278" fill="#fde68a" font-size="9" text-anchor="middle">Server-Only Runtime (Service Role Key)</text>
  <text x="328" y="298" fill="#fef3c7" font-size="9">• Sends transactional emails &amp; Stripe</text>
  <text x="328" y="314" fill="#fef3c7" font-size="9">• Receives external webhook POSTs</text>
  <text x="328" y="330" fill="#fda4af" font-size="9" font-weight="700">• NEVER expose service_role in browser!</text>

  <!-- Right Box: PostgreSQL Core & Storage -->
  <path d="M 538 150 L 580 150" stroke="#34d399" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch06ArrEmerald)" />
  <path d="M 538 296 L 580 246" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch06ArrAmber)" />

  <rect x="584" y="76" width="188" height="278" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.6" />
  <text x="678" y="100" fill="#f3e8ff" font-size="11.5" font-weight="700" text-anchor="middle">POSTGRESQL &amp; STORAGE</text>
  <text x="678" y="116" fill="#d8b4fe" font-size="9" text-anchor="middle">Relational Engine + Object Buckets</text>
  <text x="598" y="140" fill="#cbd5e1" font-size="9.5">• SQL Migration Files (VCS)</text>
  <text x="598" y="158" fill="#cbd5e1" font-size="9.5">• Foreign Keys &amp; Junctions</text>
  <text x="598" y="176" fill="#cbd5e1" font-size="9.5">• B-Tree Indexes (user_id, date)</text>
  <text x="598" y="194" fill="#cbd5e1" font-size="9.5">• Summary Select &amp; Pagination</text>
  <text x="598" y="212" fill="#cbd5e1" font-size="9.5">• Avatar &amp; Task File Buckets</text>
  <rect x="598" y="232" width="160" height="104" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1" />
  <text x="678" y="252" fill="#e2e8f0" font-size="9.5" font-weight="700" text-anchor="middle">Multi-Env Promotion</text>
  <text x="610" y="270" fill="#94a3b8" font-size="9">• Dev -&gt; Staging -&gt; Prod</text>
  <text x="610" y="286" fill="#94a3b8" font-size="9">• Daily + Manual Backups</text>
  <text x="610" y="302" fill="#94a3b8" font-size="9">• Query &amp; Auth Log Audits</text>

  <!-- Bottom Banner -->
  <rect x="28" y="366" width="744" height="36" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="400" y="388" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">GOLDEN RULE: Enable RLS on every user table from Day 1; keep service_role strictly inside Edge Functions</text>
</svg>`,
      bierutCaption:
        'Browser clients pass through PostgreSQL RLS using the public anon key, while privileged logic runs in Edge Functions.',
      annotations: [
        {
          step: '1',
          label: 'Frontend Anon Key',
          explanation:
            'Browser requests carry the anon key and user JWT.',
        },
        {
          step: '2',
          label: 'PostgreSQL RLS Gate',
          explanation:
            'Policies filter queries, mutations, and live streams per row.',
        },
        {
          step: '3',
          label: 'Edge Function Vault',
          explanation:
            'Serverless functions hold the service role and API keys.',
        },
      ],
    },
    {
      id: 'bwga-ch06-svg-2',
      title: 'SQL Migrations, Real-Time Streams & Query Tuning',
      subtitle:
        'Versioned SQL schemas, RLS-filtered subscriptions, and indexed pagination',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch06Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch06Arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch06Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">RELATIONAL MIGRATIONS, REAL-TIME SUBSCRIPTIONS &amp; QUERY TUNING</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Translating domain relationships into versioned SQL schemas, non-disruptive live streams, and indexed queries</text>

  <!-- Step 1: NL Prompt to SQL Migration -->
  <rect x="28" y="76" width="228" height="142" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="142" y="98" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. NL SCHEMA -&gt; SQL MIGRATION</text>
  <text x="42" y="120" fill="#cbd5e1" font-size="9.5">• Describe Users, Projects, Tasks</text>
  <text x="42" y="138" fill="#cbd5e1" font-size="9.5">• Agent emits versioned .sql files</text>
  <text x="42" y="156" fill="#cbd5e1" font-size="9.5">• Foreign keys &amp; junction tables</text>
  <text x="42" y="174" fill="#cbd5e1" font-size="9.5">• Day-1 RLS policies attached</text>
  <text x="42" y="194" fill="#7dd3fc" font-size="9">Promotes cleanly: Dev -&gt; Stage -&gt; Prod</text>

  <path d="M 256 147 L 284 147" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch06Arr2)" />

  <!-- Step 2: Indexed Relational Tables -->
  <rect x="288" y="76" width="224" height="142" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
  <text x="400" y="98" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. QUERY &amp; INDEX DISCIPLINE</text>
  <text x="302" y="120" fill="#cbd5e1" font-size="9.5">• Select summary columns on lists</text>
  <text x="302" y="138" fill="#cbd5e1" font-size="9.5">• Lazy-load task/comment details</text>
  <text x="302" y="156" fill="#cbd5e1" font-size="9.5">• Index: user_id, created_at, status</text>
  <text x="302" y="174" fill="#cbd5e1" font-size="9.5">• Chunked pagination controls</text>
  <text x="302" y="194" fill="#6ee7b7" font-size="9">Prevents full-table scan slowdowns</text>

  <path d="M 512 147 L 540 147" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" fill="none" marker-end="url(#ch06Arr2)" />

  <!-- Step 3: Real-Time Subscriptions & UX Guard -->
  <rect x="544" y="76" width="228" height="142" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="658" y="98" fill="#d8b4fe" font-size="11" font-weight="700" text-anchor="middle">3. REAL-TIME CDC &amp; UX CONTROL</text>
  <text x="558" y="120" fill="#cbd5e1" font-size="9.5">• Listen: INSERT / UPDATE / DELETE</text>
  <text x="558" y="138" fill="#cbd5e1" font-size="9.5">• Auto-filtered by user RLS policy</text>
  <text x="558" y="156" fill="#cbd5e1" font-size="9.5">• Instant task &amp; comment sync</text>
  <text x="558" y="174" fill="#cbd5e1" font-size="9.5">• Toast banner for active editors</text>
  <text x="558" y="194" fill="#e9d5ff" font-size="9">Avoids jarring mid-edit screen jumps</text>

  <!-- Bottom Row: Object Storage & Monitoring -->
  <rect x="28" y="242" width="356" height="146" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.4" />
  <text x="206" y="266" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">OBJECT STORAGE BUCKETS &amp; MEDIA PIPELINE</text>
  <text x="44" y="288" fill="#cbd5e1" font-size="9.5">• Profile Avatars: Image resize, optimization &amp; profile URL ref</text>
  <text x="44" y="308" fill="#cbd5e1" font-size="9.5">• Task Attachments: Bucket RLS tied to parent task visibility</text>
  <text x="44" y="328" fill="#cbd5e1" font-size="9.5">• Client Validation: Strict file size limits, MIME checks &amp; progress bars</text>
  <text x="44" y="348" fill="#fde68a" font-size="9">Separates binary media blobs from relational PostgreSQL tables</text>

  <rect x="416" y="242" width="356" height="146" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.4" />
  <text x="594" y="266" fill="#7dd3fc" font-size="11" font-weight="700" text-anchor="middle">PRODUCTION OBSERVABILITY &amp; MAINTENANCE</text>
  <text x="432" y="288" fill="#cbd5e1" font-size="9.5">• Capacity Telemetry: Query counts, bandwidth &amp; storage quotas</text>
  <text x="432" y="308" fill="#cbd5e1" font-size="9.5">• Slow Query Analyzer: Spot missing indexes &amp; N+1 bottlenecks</text>
  <text x="432" y="328" fill="#cbd5e1" font-size="9.5">• Auth Security Logs: Track failed logins &amp; anomalous sessions</text>
  <text x="432" y="348" fill="#bae6fd" font-size="9">Guides proactive plan upgrades and index tuning before user impact</text>
</svg>`,
      bierutCaption:
        'Versioned SQL migrations, indexed queries, RLS-scoped streams, and storage buckets form a production backend.',
      annotations: [
        {
          step: '1',
          label: 'SQL Migrations',
          explanation:
            'Generate repeatable SQL scripts with foreign keys and RLS.',
        },
        {
          step: '2',
          label: 'Indexed Projections',
          explanation:
            'Fetch summary lists, paginate records, and index filters.',
        },
        {
          step: '3',
          label: 'Controlled Live Sync',
          explanation:
            'Stream database events while active editors control refreshes.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'bwga-ch06-mm1',
      name: 'Database-Enforced Authorization',
      tagline: 'Enforce access rules inside PostgreSQL rows so UI bugs never leak data',
      naiveIntuition:
        'Filtering tasks by user ID inside React keeps tenant records private.',
      firstPrinciplesReality:
        'Anyone can use the browser anon key to query REST endpoints unless PostgreSQL enforces RLS.',
      howToApply:
        'Enable RLS policies on every table from day one before writing UI queries.',
    },
    {
      id: 'bwga-ch06-mm2',
      name: 'Two-Key Asymmetric Trust',
      tagline: 'Anon keys obey RLS in browsers; service role keys bypass RLS on servers',
      naiveIntuition:
        'Swapping the anon key for the service role key in React fixes permission errors safely.',
      firstPrinciplesReality:
        'The service role key bypasses all RLS policies and grants full database control.',
      howToApply:
        'Use only the anon key in client code and restrict service_role to Edge Functions.',
    },
    {
      id: 'bwga-ch06-mm3',
      name: 'Controlled Real-Time Cadence',
      tagline: 'Stream changes instantly, but let active editors trigger view refreshes',
      naiveIntuition:
        'Every real-time database update should immediately re-render the screen.',
      firstPrinciplesReality:
        'Sudden live DOM mutations disorient users actively reading or editing forms.',
      howToApply:
        'Buffer incoming live events behind a refresh toast banner during active editing.',
    },
  ],
  deepSections: [
    {
      id: 'bwga-ch06-sec1',
      sectionNumber: '6.1',
      title: 'PostgreSQL BaaS & Credential Isolation',
      subtitle: 'Relational SQL power, instant APIs, regional setup, and key boundaries',
      coreMechanism:
        'Unlike document-based NoSQL backends, Supabase is built on PostgreSQL, delivering full relational integrity, SQL joins, and mature indexing while auto-generating instant REST and GraphQL APIs for every table. Provisioning takes two minutes: choose a cloud region close to your target users for low latency, vault the database password, and copy the three core credentials from the dashboard.\n\nWhen connecting Google Antigravity, enforce a strict boundary between keys. Supply the Project URL and public Anonymous (`anon`) key to your frontend thread—the `anon` key is safe in browsers only because it obeys Row Level Security (RLS). Keep the administrative `service_role` key strictly on the server.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Provision Nearest Region',
          detail: 'Select a low-latency user region and vault the DB password.',
        },
        {
          step: '2',
          title: 'Pass URL & Anon Key',
          detail: 'Provide public credentials to a dedicated Supabase thread.',
        },
        {
          step: '3',
          title: 'Vault Service Role Key',
          detail: 'Keep the RLS-bypassing service_role key inside Edge Functions.',
        },
      ],
      keyTakeaways: [
        'Supabase auto-generates REST and GraphQL endpoints from PostgreSQL tables.',
        'The public anon key is safe in browsers only when paired with RLS.',
      ],
      commonPitfalls: [
        'Exposing the service_role key in client bundles grants full admin access.',
        'Picking a distant cloud region adds avoidable latency to every request.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch06-sec2',
      sectionNumber: '6.2',
      title: 'SQL Migrations, Schemas & Day-One RLS',
      subtitle: 'Versioned schema migrations, foreign keys, and OAuth flows',
      coreMechanism:
        'Describe domain entities—such as users, projects, tasks, and comments—in natural language so the Antigravity agent generates version-controlled SQL migration files. Migrations configure foreign keys, junction tables for many-to-many links, and repeatable schema promotion across dev, staging, and production projects. Always attach PostgreSQL Row Level Security (RLS) policies from day one so users only access authorized rows.\n\nFor identity management, request full-stack Supabase Auth covering email/password registration, password hashing, reset flows, and OAuth providers (Google, GitHub) enabled in project settings. Pair backend auth with protected UI routes and tighter session expirations for sensitive apps.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Generate SQL Migrations',
          detail: 'Translate entity relationships into repeatable SQL scripts.',
        },
        {
          step: '2',
          title: 'Attach Day-One RLS',
          detail: 'Enforce per-row ownership and access rules inside PostgreSQL.',
        },
        {
          step: '3',
          title: 'Wire OAuth & Protected Routes',
          detail: 'Configure login, session timeouts, and unauthenticated redirects.',
        },
      ],
      keyTakeaways: [
        'SQL migrations provide version control and safe production promotion.',
        'Enabling RLS on day one avoids error-prone retrofits on live data.',
      ],
      commonPitfalls: [
        'Deferring RLS leaves tables open to direct anon-key scraping.',
        'Leaving long-lived session tokens on apps handling sensitive data.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch06-sec3',
      sectionNumber: '6.3',
      title: 'Real-Time, Storage, Tuning & Edge Functions',
      subtitle: 'RLS subscriptions, bucket policies, query indexes, and serverless logic',
      coreMechanism:
        'Supabase subscriptions broadcast `INSERT`, `UPDATE`, and `DELETE` events in real time while automatically enforcing Row Level Security policies. Use non-intrusive refresh notifications so live updates do not disrupt active editors. For file uploads, configure Supabase Storage buckets with size limits, MIME checks, image optimization for avatars, and bucket policies tying task attachments to parent task permissions.\n\nMaintain fast queries by selecting lightweight summary columns on list views, indexing filtered fields (`user_id`, `created_at`, `status`), and paginating records. Offload secret-bearing tasks—such as sending emails, processing payments, and receiving webhooks—to Supabase Edge Functions while monitoring query and auth logs.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Stream RLS Events',
          detail: 'Listen to live changes with user-controlled refresh prompts.',
        },
        {
          step: '2',
          title: 'Guard Storage & Index Queries',
          detail: 'Enforce bucket policies, select summaries, paginate, and index.',
        },
        {
          step: '3',
          title: 'Deploy Edge Functions',
          detail: 'Run emails, payments, and webhooks on the server and audit logs.',
        },
      ],
      keyTakeaways: [
        'Summary selects, B-tree indexes, and pagination keep queries fast.',
        'Edge Functions execute custom server logic without exposing secrets.',
      ],
      commonPitfalls: [
        'Fetching all nested tasks and comments on a top-level project list.',
        'Calling third-party email or payment APIs directly from browser code.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Supabase Execution Matrix',
      description:
        'Selecting the right Supabase primitive across queries, streams, storage, and functions',
      headers: ['Capability', 'Mechanism', 'Boundary', 'Use Case'],
      rows: [
        [
          'Standard CRUD',
          'REST / GraphQL',
          'Anon key + RLS',
          'Paginated lists',
        ],
        [
          'Live Sync',
          'Postgres CDC',
          'RLS + toast',
          'Task boards',
        ],
        [
          'Files & Media',
          'Storage Buckets',
          'Bucket RLS',
          'Avatars & files',
        ],
        [
          'Secret Logic',
          'Edge Functions',
          'service_role',
          'Emails & webhooks',
        ],
      ],
      verdictRule:
        'Run CRUD and live streams from browsers under RLS, and isolate secrets inside Edge Functions.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch06-scen1',
      title: 'Frontend Service Role Key Leak',
      roleAndContext:
        'Founder debugging an empty task list after enabling RLS.',
      symptomOrFailure:
        'Queries return zero rows, so the founder puts service_role into React.',
      naiveFixAndWhyItFails:
        'Bundling service_role in client code bypasses RLS and exposes all data.',
      firstPrinciplesSolution:
        'Restore the anon key and write an RLS SELECT policy for members.',
      measurableOutcome:
        'Users see 100% of their tasks while cross-tenant queries are blocked.',
    },
    {
      id: 'bwga-ch06-scen2',
      title: 'Over-Fetching Unindexed Project Trees',
      roleAndContext:
        'Team scaling a dashboard to 15,000 tasks and 80,000 comments.',
      symptomOrFailure:
        'Loading projects takes 6s and exhausts bandwidth quotas.',
      naiveFixAndWhyItFails:
        'Upgrading compute still transfers megabytes of unused nested comments.',
      firstPrinciplesSolution:
        'Select summary columns with pagination and index user_id, status, and created_at.',
      measurableOutcome:
        'Payload drops by 92% and list queries finish under 45ms.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch06-q1',
        scenarioPrompt:
          'What is the foundational architectural distinction between Supabase and Firebase highlighted in Chapter 6?',
        options: [
          {
            label: 'A',
            text: 'Supabase is built on PostgreSQL, providing full relational SQL, foreign keys, and instant REST/GraphQL APIs.',
            isCorrect: true,
            explanation:
              'Supabase combines a relational PostgreSQL database with auto-generated APIs, real-time streams, auth, and Edge Functions.',
          },
          {
            label: 'B',
            text: 'Supabase stores data exclusively in browser localStorage and does not require cloud servers.',
            isCorrect: false,
            explanation:
              'Supabase provisions cloud PostgreSQL instances, authentication servers, and object storage buckets.',
          },
          {
            label: 'C',
            text: 'Supabase requires writing a custom Java backend before any frontend application can query tables.',
            isCorrect: false,
            explanation:
              'Supabase automatically generates REST and GraphQL endpoints as soon as database tables are created.',
          },
          {
            label: 'D',
            text: 'Supabase only supports static HTML hosting and cannot handle user authentication.',
            isCorrect: false,
            explanation:
              'Supabase includes built-in email/password and third-party OAuth authentication services.',
          },
        ],
      },
      {
        id: 'bwga-ch06-q2',
        scenarioPrompt:
          'Which Supabase credential is safe to include in your frontend code, and what condition must be met for it to remain secure?',
        options: [
          {
            label: 'A',
            text: 'The database master password, provided it is base64-encoded.',
            isCorrect: false,
            explanation:
              'Base64 is trivial to decode; the database password must never be placed in client code.',
          },
          {
            label: 'B',
            text: 'The service role key, because it automatically restricts users to read-only queries.',
            isCorrect: false,
            explanation:
              'The service role key bypasses Row Level Security and grants full administrative read/write access.',
          },
          {
            label: 'C',
            text: 'The anonymous (anon) public API key, provided Row Level Security (RLS) policies are enabled on your tables.',
            isCorrect: true,
            explanation:
              'The anon key is designed for public clients and only permits operations explicitly authorized by PostgreSQL RLS policies.',
          },
          {
            label: 'D',
            text: 'Neither key; frontend apps can never communicate with Supabase directly.',
            isCorrect: false,
            explanation:
              'Supabase is specifically designed for direct frontend-to-API communication using the anon key and RLS.',
          },
        ],
      },
      {
        id: 'bwga-ch06-q3',
        scenarioPrompt:
          'Your project management app needs to send an email notification via an external email API whenever a task is assigned to a user. Where should the Antigravity agent implement this logic?',
        options: [
          {
            label: 'A',
            text: 'Inside a frontend React component using the email provider’s secret API key.',
            isCorrect: false,
            explanation:
              'Running in the browser exposes your email service API credentials to anyone inspecting network traffic.',
          },
          {
            label: 'B',
            text: 'Inside a Supabase Edge Function that runs server-side and keeps external API credentials secure.',
            isCorrect: true,
            explanation:
              'Edge Functions execute on Supabase servers, protecting third-party API secrets and ensuring reliable delivery.',
          },
          {
            label: 'C',
            text: 'Inside a public Supabase Storage bucket policy.',
            isCorrect: false,
            explanation:
              'Storage buckets store binary files and cannot execute external HTTP API calls.',
          },
          {
            label: 'D',
            text: 'By asking every user to manually send an email from their personal client.',
            isCorrect: false,
            explanation:
              'Serverless Edge Functions automate transactional notifications reliably when database assignments change.',
          },
        ],
      },
      {
        id: 'bwga-ch06-q4',
        scenarioPrompt:
          'You enabled real-time subscriptions on a collaborative task table, but users complain that the screen jumps and interrupts them while they are actively typing task edits. How should the agent refine the UX?',
        options: [
          {
            label: 'A',
            text: 'Delete the real-time subscription and force users to press F5 every minute.',
            isCorrect: false,
            explanation:
              'Removing real-time subscriptions sacrifices live awareness altogether.',
          },
          {
            label: 'B',
            text: 'Display an update notification alerting users to incoming changes so they control when to refresh their active view.',
            isCorrect: true,
            explanation:
              'Buffering live updates behind a non-disruptive notification preserves real-time awareness without interrupting active editing.',
          },
          {
            label: 'C',
            text: 'Disable Row Level Security on the tasks table to speed up WebSocket frames.',
            isCorrect: false,
            explanation:
              'Disabling RLS creates a severe security vulnerability and does not fix UI interruption.',
          },
          {
            label: 'D',
            text: 'Lock the entire database whenever any user focuses an input field.',
            isCorrect: false,
            explanation:
              'Global database locks block all concurrent users and destroy application throughput.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'bwga-ch06-fc1',
        category: 'architecture',
        front: 'What three connection details from the Supabase dashboard are required when integrating with Google Antigravity?',
        back: 'The Project URL (base API endpoint), the Anonymous (anon) public key (frontend access), and the Service Role key (backend admin access).',
        mentalHook: 'URL = where; Anon = browser + RLS; Service Role = server vault.',
      },
      {
        id: 'bwga-ch06-fc2',
        category: 'data',
        front: 'Why should agents generate SQL migration files instead of modifying production tables ad hoc?',
        back: 'SQL migrations provide version control for database schemas, enabling repeatable tracking and safe deployment across dev, staging, and prod.',
        mentalHook: 'Migrations = Git commits for your database schema.',
      },
      {
        id: 'bwga-ch06-fc3',
        category: 'security',
        front: 'How do Supabase Real-Time subscriptions interact with Row Level Security (RLS)?',
        back: 'Real-time subscriptions automatically enforce RLS policies so users only receive live change events for rows they are authorized to read.',
        mentalHook: 'RLS guards both REST queries and live WebSocket streams.',
      },
      {
        id: 'bwga-ch06-fc4',
        category: 'data',
        front: 'How should task attachments be secured differently from public documents in Supabase Storage?',
        back: 'Configure storage bucket policies linked to task permissions so attachments are accessible only to users authorized to view the parent task.',
        mentalHook: 'Tie file bucket access directly to parent row permissions.',
      },
      {
        id: 'bwga-ch06-fc5',
        category: 'optimization',
        front: 'What three database query optimizations keep Supabase applications responsive as data volumes grow?',
        back: 'Fetch summary projections instead of full nested details, create indexes on frequently filtered/sorted columns, and paginate large result sets.',
        mentalHook: 'Select summaries, index hot columns, paginate chunks.',
      },
      {
        id: 'bwga-ch06-fc6',
        category: 'architecture',
        front: 'What four workloads belong inside Supabase Edge Functions rather than frontend client code?',
        back: 'Sending emails, processing payments, calling external secret-authenticated APIs, and handling inbound third-party webhooks.',
        mentalHook: 'Secrets, webhooks, payments, and emails belong on the edge.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch06-feyn1',
        conceptTitle: 'The Supabase Security Model: Anon Keys, Service Role Keys & Day-One RLS',
        prompt:
          'Explain to a beginner why putting the Supabase anon key in frontend code is safe, why putting the service role key in frontend code is catastrophic, and how Row Level Security bridges the two.',
        rubricChecklist: [
          'Distinguishes the public anonymous (anon) key from the administrative service_role key.',
          'Explains how PostgreSQL Row Level Security (RLS) inspects the authenticated user session per row on anon-key requests.',
          'Warns that the service_role key bypasses all RLS policies and must stay strictly inside server-side Edge Functions.',
          'Explains why enabling RLS on day one is far safer than retrofitting policies onto existing production data.',
        ],
        modelExplanation:
          'The Supabase anon key is safe in browser code because it acts only as a public doorway to PostgreSQL, where Row Level Security (RLS) policies inspect the logged-in user’s JWT and filter every row so users can only see or edit their own records. By contrast, the service role key is a master key that bypasses RLS completely; exposing it in frontend code lets anyone read or delete the entire database, so it must only be used inside server-side Edge Functions.',
      },
      {
        id: 'bwga-ch06-feyn2',
        conceptTitle: 'Scaling Supabase: SQL Migrations, Query Tuning & Real-Time Subscriptions',
        prompt:
          'Walk through how an Antigravity builder takes a project management app from initial schema design to real-time collaboration and high-volume production performance.',
        rubricChecklist: [
          'Describes generating version-controlled SQL migrations with foreign keys and junction tables from natural-language prompts.',
          'Explains listening to INSERT, UPDATE, and DELETE events via RLS-filtered subscriptions while using UI notifications to avoid jarring active users.',
          'Details query performance optimization via summary-only list selects, B-tree indexes (user_id, created_at, status), and pagination.',
          'Covers multi-environment promotion (dev, staging, prod), automated/manual backups, and monitoring query/auth logs.',
        ],
        modelExplanation:
          'Start by describing users, projects, tasks, and comments to the agent so it emits versioned SQL migration files with foreign keys, junction tables, and RLS policies that can be promoted cleanly across dev, staging, and prod. Add real-time subscriptions for live task and comment updates with a non-intrusive refresh toast, and keep queries fast at scale by selecting lightweight summary columns, paginating results, and indexing high-frequency filter columns like user_id, status, and created_at.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-ch06-node-postgres-baas',
        label: 'PostgreSQL Auto-API Engine',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Supabase’s core relational database layer that automatically exposes instant REST and GraphQL endpoints for every SQL table.',
        whyItMatters:
          'Delivers decades-proven relational integrity and SQL power without writing custom backend CRUD controllers.',
      },
      {
        id: 'bwga-ch06-node-sql-migrations',
        label: 'Versioned SQL Schema Migrations',
        category: 'data',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Agent-generated SQL scripts defining tables, foreign keys, and junction tables that version-control schema changes across environments.',
        whyItMatters:
          'Enables repeatable, zero-downtime schema promotion from development to staging and production.',
      },
      {
        id: 'bwga-ch06-node-rls',
        label: 'Row Level Security (RLS)',
        category: 'security',
        chapterNumber: 6,
        importance: 1,
        definition:
          'PostgreSQL policies that restrict which rows a user can read or write across REST queries, real-time streams, and storage buckets.',
        whyItMatters:
          'Allows frontend applications to query Supabase directly with the public anon key without risking cross-tenant data leaks.',
      },
      {
        id: 'bwga-ch06-node-realtime-cdc',
        label: 'Real-Time Postgres Subscriptions',
        category: 'architecture',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Managed change-data-capture listeners that broadcast INSERT, UPDATE, and DELETE table events to authorized clients in real time.',
        whyItMatters:
          'Powers live collaborative dashboards and comment threads without custom WebSocket infrastructure.',
      },
      {
        id: 'bwga-ch06-node-edge-functions',
        label: 'Serverless Edge Functions',
        category: 'architecture',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Server-side TypeScript functions hosted on Supabase for secret-bearing API calls, transactional emails, payments, and webhooks.',
        whyItMatters:
          'Keeps the privileged service_role key and third-party API credentials out of untrusted client browsers.',
      },
      {
        id: 'bwga-ch06-node-query-opt',
        label: 'Summary Projections, Indexing & Pagination',
        category: 'optimization',
        chapterNumber: 6,
        importance: 3,
        definition:
          'Fetching lightweight list summaries, indexing filter/sort columns (user_id, created_at, status), and loading records in paginated chunks.',
        whyItMatters:
          'Prevents bandwidth exhaustion and slow full-table scans as production tables grow.',
      },
    ],
    edges: [
      {
        source: 'bwga-ch06-node-sql-migrations',
        target: 'bwga-ch06-node-postgres-baas',
        relationship: 'part_of',
        explanation:
          'SQL migration files define the relational tables and foreign keys that the PostgreSQL engine exposes as REST and GraphQL APIs.',
      },
      {
        source: 'bwga-ch06-node-rls',
        target: 'bwga-ch06-node-postgres-baas',
        relationship: 'mitigates',
        explanation:
          'Row Level Security policies prevent unauthorized browser requests using the public anon key from reading or mutating other users’ rows.',
      },
      {
        source: 'bwga-ch06-node-rls',
        target: 'bwga-ch06-node-realtime-cdc',
        relationship: 'prerequisite_for',
        explanation:
          'Real-time subscriptions rely on RLS policies to ensure live database events are only broadcast to permitted viewers.',
      },
      {
        source: 'bwga-ch06-node-edge-functions',
        target: 'bwga-ch06-node-rls',
        relationship: 'trades_off_with',
        explanation:
          'Client queries run under strict RLS with the anon key, whereas trusted Edge Functions use the service_role key to perform privileged server-side tasks.',
      },
      {
        source: 'bwga-ch06-node-query-opt',
        target: 'bwga-ch06-node-postgres-baas',
        relationship: 'optimizes',
        explanation:
          'B-tree indexes, summary column projections, and pagination keep auto-generated REST and GraphQL endpoints fast at scale.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 11,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 11 source sections of Chapter 6 within strict high-signal compression bounds.',
  },
};
