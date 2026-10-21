import type { ChapterMastery } from '../../../types/book';

export const bwgaCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'Understanding Google Antigravity',
  subtitle: 'Autonomous Multi-Model Orchestration, Artifact Verification, and the Shift from Syntax to Product Direction',
  readingTimeMinutes: 6,
  sourceWordCount: 2183,
  executiveThesis:
    'Google Antigravity replaces line-by-line code authoring with autonomous multi-agent orchestration that plans, implements, tests, and deploys full-stack software from natural-language specifications. By coordinating Gemini 3 Pro, Claude Sonnet, and GPT-OSS alongside an automated Browser Agent and verifiable artifact logs, the platform shifts human effort from syntax debugging to product architecture and business validation.',
  paradigmShift: {
    oldWay:
      'Developers manually translated business goals into syntax or used inline AI autocomplete tools like Cursor that still required programming fluency.',
    newWay:
      'Founders direct specialized AI agents via conversation threads while the platform autonomously orchestrates planning, coding, browser testing, and deployment.',
    whyItChanged:
      'Multi-model agent orchestration and automated visual verification artifacts eliminated the manual glue work between product specification and verified runtime execution.',
  },
  customDiagrams: [
    {
      id: 'bwga-ch01-svg1',
      title: 'Multi-Model Agent Orchestration & Verification Loop',
      subtitle: 'How Agent Manager coordinates Gemini 3 Pro, Claude Sonnet, GPT-OSS, and the Browser Agent',
      bierutCaption:
        'Coordinate specialized foundation models behind a single conversational mission control that proves execution via visual artifacts.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">GOOGLE ANTIGRAVITY: MULTI-MODEL ORCHESTRATION ARCHITECTURE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">From high-level product intent to autonomous code synthesis, live browser QA, and verifiable artifacts</text>

  <!-- Left Column: Human Product Direction & Agent Manager -->
  <rect x="24" y="76" width="184" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="116" y="102" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. MISSION CONTROL</text>
  <rect x="40" y="118" width="152" height="68" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="116" y="140" text-anchor="middle" fill="#f8fafc" font-size="10.5" font-weight="600">Product Director</text>
  <text x="116" y="158" text-anchor="middle" fill="#94a3b8" font-size="9">Defines business problem,</text>
  <text x="116" y="172" text-anchor="middle" fill="#94a3b8" font-size="9">user flows &amp; constraints</text>

  <path d="M 116 186 L 116 214" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="214" width="152" height="84" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="116" y="238" text-anchor="middle" fill="#e0f2fe" font-size="11" font-weight="700">Agent Manager</text>
  <text x="116" y="256" text-anchor="middle" fill="#7dd3fc" font-size="9">Multi-thread conversation</text>
  <text x="116" y="270" text-anchor="middle" fill="#7dd3fc" font-size="9">router &amp; task scheduler</text>

  <rect x="40" y="314" width="152" height="62" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="116" y="336" text-anchor="middle" fill="#cbd5e1" font-size="9.5" font-weight="600">MCP Server Bridge</text>
  <text x="116" y="352" text-anchor="middle" fill="#64748b" font-size="8.5">External DBs, APIs &amp; Docs</text>

  <!-- Arrows from Agent Manager to Tri-Model Council -->
  <path d="M 208 240 L 254 128" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 208 254 L 254 234" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 208 268 L 254 340" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Center Column: Tri-Model Specialist Engine -->
  <rect x="254" y="76" width="256" height="316" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
  <text x="382" y="100" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="700">2. TRI-MODEL SPECIALIST COUNCIL</text>

  <rect x="272" y="114" width="220" height="76" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5" />
  <text x="382" y="136" text-anchor="middle" fill="#c7d2fe" font-size="10.5" font-weight="700">Gemini 3 Pro (Architect)</text>
  <text x="382" y="154" text-anchor="middle" fill="#94a3b8" font-size="9">Translates business goals into phased</text>
  <text x="382" y="168" text-anchor="middle" fill="#94a3b8" font-size="9">implementation specs &amp; DB schemas</text>

  <rect x="272" y="202" width="220" height="76" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="382" y="224" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">Claude Sonnet (Builder)</text>
  <text x="382" y="242" text-anchor="middle" fill="#94a3b8" font-size="9">Authors clean, modular production code,</text>
  <text x="382" y="256" text-anchor="middle" fill="#94a3b8" font-size="9">auth flows, and API integrations</text>

  <rect x="272" y="290" width="220" height="76" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="382" y="312" text-anchor="middle" fill="#fde68a" font-size="10.5" font-weight="700">GPT-OSS (Rapid Iterator)</text>
  <text x="382" y="330" text-anchor="middle" fill="#94a3b8" font-size="9">Executes fast UI tweaks, hotfixes,</text>
  <text x="382" y="344" text-anchor="middle" fill="#94a3b8" font-size="9">and experimental feature branches</text>

  <!-- Arrows to Verification & Artifacts -->
  <path d="M 510 190 L 556 160" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 510 280 L 556 296" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Right Column: Browser Agent & Verification Artifacts -->
  <rect x="556" y="76" width="220" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="666" y="100" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">3. VERIFIED EXECUTION</text>

  <rect x="572" y="114" width="188" height="110" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="666" y="136" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="700">Browser Agent + Chrome Ext</text>
  <text x="666" y="156" text-anchor="middle" fill="#d1fae5" font-size="9">• Clicks buttons &amp; fills forms</text>
  <text x="666" y="172" text-anchor="middle" fill="#d1fae5" font-size="9">• Navigates live routes</text>
  <text x="666" y="188" text-anchor="middle" fill="#d1fae5" font-size="9">• Captures DOM &amp; video traces</text>
  <text x="666" y="206" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-family="monospace">Isolated Chrome Profile</text>

  <rect x="572" y="242" width="188" height="132" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="666" y="264" text-anchor="middle" fill="#7dd3fc" font-size="10.5" font-weight="700">Artifact Proof Bundle</text>
  <text x="666" y="286" text-anchor="middle" fill="#cbd5e1" font-size="9">1. Implementation Plans</text>
  <text x="666" y="304" text-anchor="middle" fill="#cbd5e1" font-size="9">2. Browser Video Recordings</text>
  <text x="666" y="322" text-anchor="middle" fill="#cbd5e1" font-size="9">3. Automated Test Reports</text>
  <text x="666" y="340" text-anchor="middle" fill="#cbd5e1" font-size="9">4. Deployment Documentation</text>
  <text x="666" y="360" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="600">Zero Manual Code Review Required</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Agent Manager Mission Control',
          explanation:
            'Replaces file-tree micromanagement with persistent multi-agent conversation threads augmented by MCP server connections.',
        },
        {
          step: '2',
          label: 'Tri-Model Cognitive Division',
          explanation:
            'Routes planning to Gemini 3 Pro, clean structural coding to Claude Sonnet, and rapid iteration to GPT-OSS.',
        },
        {
          step: '3',
          label: 'Browser Agent & Artifact Proof',
          explanation:
            'Executes real user journeys in Chrome and emits video recordings, screenshots, and test logs as verifiable completion proof.',
        },
      ],
    },
    {
      id: 'bwga-ch01-svg2',
      title: 'Software Creation Spectrum: Flexibility vs. Programming Barrier',
      subtitle: 'Positioning Google Antigravity against No-Code, Low-Code, Inline AI Assistants, and Custom Engineering',
      bierutCaption:
        'Break the historic trade-off between rigid visual templates and steep syntax learning curves by generating custom code autonomously.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">COMPETITIVE LANDSCAPE: ARCHITECTURAL FLEXIBILITY VS. CODING SKILL REQUIRED</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Why autonomous agentic code generation unlocks custom full-stack software for non-programmers</text>

  <!-- Axes -->
  <line x1="80" y1="360" x2="750" y2="360" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="360" x2="80" y2="80" stroke="#475569" stroke-width="2" />
  <text x="415" y="396" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="600">REQUIRED PROGRAMMING &amp; SYNTAX FLUENCY →</text>
  <text x="26" y="220" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="600" transform="rotate(-90 26 220)">CUSTOM CODE FLEXIBILITY →</text>

  <!-- Quadrant 1: No-Code -->
  <rect x="108" y="256" width="176" height="82" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="196" y="280" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="700">No-Code Platforms</text>
  <text x="196" y="298" text-anchor="middle" fill="#94a3b8" font-size="9.5">Bubble, Webflow, Zapier</text>
  <text x="196" y="318" text-anchor="middle" fill="#f87171" font-size="9">Locked to preset templates</text>

  <!-- Quadrant 2: Low-Code -->
  <rect x="316" y="206" width="184" height="82" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="408" y="230" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="700">Enterprise Low-Code</text>
  <text x="408" y="248" text-anchor="middle" fill="#94a3b8" font-size="9.5">OutSystems, Power Platform</text>
  <text x="408" y="268" text-anchor="middle" fill="#fbbf24" font-size="9">Internal IT focus; technical</text>

  <!-- Quadrant 3: Inline AI Assistants -->
  <rect x="528" y="138" width="196" height="86" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="626" y="162" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">AI Coding Assistants</text>
  <text x="626" y="180" text-anchor="middle" fill="#94a3b8" font-size="9.5">Cursor AI, GitHub Copilot</text>
  <text x="626" y="200" text-anchor="middle" fill="#38bdf8" font-size="9">Accelerates existing coders</text>

  <!-- Trajectory Arrow from No-Code to Google Antigravity -->
  <path d="M 196 256 L 210 174" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Top-Left Sweet Spot: Google Antigravity -->
  <rect x="108" y="86" width="224" height="94" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="220" y="112" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="700">GOOGLE ANTIGRAVITY</text>
  <text x="220" y="132" text-anchor="middle" fill="#d1fae5" font-size="9.5">Zero syntax required; generates</text>
  <text x="220" y="148" text-anchor="middle" fill="#d1fae5" font-size="9.5">custom full-stack code in days</text>
  <text x="220" y="166" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">$15k–$50k builds → Preview Free</text>

  <!-- Top-Right: Traditional Systems Engineering -->
  <rect x="528" y="78" width="196" height="46" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5" />
  <text x="626" y="98" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">Custom Deep Engineering</text>
  <text x="626" y="114" text-anchor="middle" fill="#94a3b8" font-size="8.5">Novel algorithms &amp; game engines</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'No-Code Template Ceiling',
          explanation:
            'Visual builders like Bubble eliminate syntax but restrict applications to rigid preset blocks.',
        },
        {
          step: '2',
          label: 'Inline Assistant Prerequisite',
          explanation:
            'Cursor AI accelerates experienced programmers via autocomplete but still demands full language fluency.',
        },
        {
          step: '3',
          label: 'Autonomous Agentic Sweet Spot',
          explanation:
            'Antigravity combines zero-syntax product direction with custom full-stack code generation for standard web apps.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'bwga-ch01-mm1',
      name: 'Product-Owner Inversion',
      tagline: 'Direct outcomes like a founder instead of writing syntax like a compiler',
      naiveIntuition:
        'Building software requires learning programming syntax and translating business logic into code lines yourself.',
      firstPrinciplesReality:
        'Autonomous agents handle syntax, database schemas, and deployment while you supply problem definitions and user validation.',
      howToApply:
        'Specify concrete customer pain points, target workflows, and acceptance criteria rather than micromanaging code files.',
    },
    {
      id: 'bwga-ch01-mm2',
      name: 'Proof-by-Artifact Verification',
      tagline: 'Audit visual runtime evidence instead of reading raw source files',
      naiveIntuition:
        'Non-programmers cannot verify whether AI agents built a feature correctly without reading the underlying code.',
      firstPrinciplesReality:
        'The Browser Agent interacts with the live app and emits screenshots, video recordings, and test logs as verifiable proof.',
      howToApply:
        'Inspect generated implementation plans, browser interaction videos, and test reports before approving a feature thread.',
    },
    {
      id: 'bwga-ch01-mm3',
      name: 'Unit-Cost Collapse of Custom Software',
      tagline: 'When $30,000 agency builds drop to near-zero marginal cost, micro-tools become viable',
      naiveIntuition:
        'Custom software is only economically justifiable for large enterprises or venture-backed products with massive markets.',
      firstPrinciplesReality:
        'Compressing weeks of outsourced development into hours makes hyper-specific internal tools profitable for solo operators.',
      howToApply:
        'Build focused MVPs in days to automate your own operational bottlenecks before expanding into commercial SaaS.',
    },
  ],
  deepSections: [
    {
      id: 'bwga-ch01-sec1',
      sectionNumber: '1.1',
      title: 'Tri-Model Agent Orchestration vs. Inline Coding Assistants',
      subtitle: 'How Gemini 3 Pro, Claude Sonnet, and GPT-OSS collaborate behind conversational mission control',
      coreMechanism:
        'Traditional IDEs and inline assistants like Cursor AI keep the human inside the syntax loop, offering autocomplete while requiring the user to architect files, debug errors, and run tests. Google Antigravity replaces manual coding with automated agent orchestration across three specialized models.\n\nGemini 3 Pro parses business requirements into phased development plans; Claude Sonnet implements clean, maintainable application code; and GPT-OSS executes rapid iterations and experimental changes. Rather than claiming completion verbally, agents generate tangible artifacts—implementation plans, screenshots, browser video recordings, and test reports—proving functionality without requiring code literacy.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Requirement Decomposition',
          detail: 'Gemini 3 Pro converts business goals into structured development phases.',
        },
        {
          step: '2',
          title: 'Autonomous Implementation',
          detail: 'Claude Sonnet and GPT-OSS author modular code and rapid iterations.',
        },
        {
          step: '3',
          title: 'Artifact Generation',
          detail: 'Agents output test logs, screenshots, and documentation proving feature completion.',
        },
      ],
      keyTakeaways: [
        'Tri-model orchestration assigns planning to Gemini 3 Pro, coding to Claude Sonnet, and fast tweaks to GPT-OSS.',
        'Whereas Cursor AI accelerates programmers, Antigravity enables non-programmers to ship full applications via conversation.',
      ],
      commonPitfalls: [
        'Issuing vague prompts like "build something cool" instead of specifying concrete user workflows.',
        'Skipping the initial planning phase on multi-feature applications before agents begin coding.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch01-sec2',
      sectionNumber: '1.2',
      title: 'Agent Manager, Browser Agent, and MCP Extensibility',
      subtitle: 'Controlling development threads, automated visual QA in Chrome, and external service bridges',
      coreMechanism:
        'Instead of navigating source folders, users operate the Agent Manager as mission control, organizing work into persistent conversation threads where multiple agents coordinate across sessions. Quality assurance is automated by the Browser Agent, which drives an isolated Chrome environment via the Antigravity Chrome extension—clicking buttons, filling forms, and recording video proof of every user journey.\n\nTo extend capabilities beyond static model weights, Model Context Protocol (MCP) servers connect agents directly to external databases, third-party APIs, and live documentation, enabling end-to-end integration without manual wiring.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Thread Dispatch',
          detail: 'Launch feature conversations inside Agent Manager to coordinate agent workflows.',
        },
        {
          step: '2',
          title: 'MCP Data Binding',
          detail: 'Connect MCP servers so agents query live schemas, APIs, and documentation.',
        },
        {
          step: '3',
          title: 'Browser Agent QA',
          detail: 'Run automated Chrome user flows that capture video and screenshot artifacts.',
        },
      ],
      keyTakeaways: [
        'The Browser Agent turns manual QA into automated visual evidence via an isolated Chrome extension.',
        'MCP servers bridge agents to external databases, APIs, and live documentation beyond training cutoffs.',
      ],
      commonPitfalls: [
        'Expecting the Browser Agent to handle ultra-complex dynamic canvas UIs without occasional human guidance.',
        'Granting agents broad terminal and filesystem autonomy without reviewing security boundaries.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch01-sec3',
      sectionNumber: '1.3',
      title: 'Economic Compression, Target Fit, and Operational Constraints',
      subtitle: 'Where autonomous software creation delivers 100x ROI and where traditional engineering still wins',
      coreMechanism:
        'Custom business software that previously cost $15,000 to $50,000 and months of agency time—such as freelance revision/invoicing portals, restaurant POS inventory optimizers, or licensed fitness platforms—can now be shipped by solo non-programmers in days during Antigravity’s free preview.\n\nHowever, operators must manage platform constraints: preview rate limits cap daily active usage, agents occasionally enter reasoning loops requiring human reset, and novel algorithms, complex game engines, or legacy enterprise integrations still require traditional software engineering.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Scope Validation',
          detail: 'Verify the project is a standard web, data, or workflow application.',
        },
        {
          step: '2',
          title: 'Minimal MVP Launch',
          detail: 'Ship a working core version in days to solve your own immediate problem.',
        },
        {
          step: '3',
          title: 'Feedback Iteration',
          detail: 'Refine features around real customer usage while pacing daily rate quotas.',
        },
      ],
      keyTakeaways: [
        'Antigravity collapses $15,000–$50,000 custom builds into multi-day solo sprints for standard business apps.',
        'Product intuition, market validation, and clear problem framing remain irreplaceable human responsibilities.',
      ],
      commonPitfalls: [
        'Attempting to build novel game engines or low-level algorithmic systems better suited to traditional coding.',
        'Trying to build a bloated all-in-one product upfront instead of iterating from a minimal viable tool.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Development Paradigm Comparison Matrix',
      description: 'Evaluating Google Antigravity against alternative software creation approaches across skill, flexibility, cost, and best fit.',
      headers: ['Platform Paradigm', 'Coding Skill Needed', 'Architectural Flexibility', 'Typical Build Cost & Time', 'Optimal Use Case'],
      rows: [
        ['Google Antigravity', 'None (agent prompting)', 'High (custom generated code)', '$0–$100s / Days to hours', 'Full-stack MVPs & custom SMB tools'],
        ['Cursor AI / Copilot', 'Moderate to High', 'Maximum (full code control)', 'Developer salary / Weeks', 'Experienced devs accelerating custom code'],
        ['No-Code (Bubble, Webflow)', 'None (visual drag-drop)', 'Low (locked to templates)', 'Monthly SaaS fees / Weeks', 'Simple marketing sites & template apps'],
        ['Traditional Agency Dev', 'None (outsourced)', 'Maximum (bespoke engineering)', '$15,000–$50,000 / Months', 'Novel algorithms, game engines, legacy IT'],
      ],
      verdictRule:
        'Choose Google Antigravity when non-programmers or small teams need custom web applications fast; use Cursor AI or traditional engineering for novel algorithms and deep low-level optimizations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch01-scen1',
      title: 'Solo Restaurant Owner Automating POS Inventory Intelligence',
      roleAndContext: 'Independent restaurant operator losing margin to ingredient spoilage and manual stock counts.',
      symptomOrFailure: 'Software agencies quoted $25,000 and twelve weeks to integrate POS sales data with reorder alerts.',
      naiveFixAndWhyItFails: 'Subscribing to generic off-the-shelf SaaS tools fails because they lack custom recipe-to-POS margin rules.',
      firstPrinciplesSolution: 'Direct Antigravity agents to build a custom POS-connected inventory tracker with automated reorder thresholds and menu analytics.',
      measurableOutcome: 'Deployed a tailored inventory and menu-optimization web app in days at near-zero software cost.',
    },
    {
      id: 'bwga-ch01-scen2',
      title: 'Breaking an Agent Loop Caused by Vague Product Scope',
      roleAndContext: 'Solo founder building a client revision and automated invoicing portal.',
      symptomOrFailure: 'Agents repeatedly rewrite UI components in circles and exhaust daily preview rate limits.',
      naiveFixAndWhyItFails: 'Prompting "make the dashboard better" gives agents zero acceptance criteria, worsening token waste.',
      firstPrinciplesSolution: 'Start a clean Agent Manager thread with an explicit problem definition, phased Gemini 3 Pro plan, and minimal MVP scope.',
      measurableOutcome: 'Shipped a production client portal with revision tracking and automated invoicing in three days.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch01-q1',
        scenarioPrompt:
          'A non-technical founder wants to build a custom client portal with database authentication and automated invoicing in three days, without being locked into rigid drag-and-drop templates. How does Google Antigravity solve this compared to Cursor AI and Bubble?',
        options: [
          {
            label: 'A',
            text: 'It provides inline code autocomplete like Cursor AI while restricting UI components to Bubble templates.',
            isCorrect: false,
            explanation: 'Antigravity is an autonomous multi-agent platform, not an inline autocomplete editor or template builder.',
          },
          {
            label: 'B',
            text: 'It orchestrates autonomous agents to write, test, and deploy custom code from conversational direction without requiring programming fluency.',
            isCorrect: true,
            explanation: 'Antigravity generates custom full-stack code via agent orchestration while allowing the user to direct the project in natural language.',
          },
          {
            label: 'C',
            text: 'It eliminates the need to understand basic product concepts like databases, authentication, or user feedback.',
            isCorrect: false,
            explanation: 'Users still need product intuition and conceptual understanding of databases, auth, and APIs.',
          },
          {
            label: 'D',
            text: 'It specializes exclusively in novel 3D game engines and low-level kernel optimization.',
            isCorrect: false,
            explanation: 'Antigravity excels at standard web and business applications, whereas novel algorithms and game engines require traditional development.',
          },
        ],
      },
      {
        id: 'bwga-ch01-q2',
        scenarioPrompt:
          'During a build session inside Google Antigravity, how are responsibilities divided among the three core AI models?',
        options: [
          {
            label: 'A',
            text: 'Gemini 3 Pro handles project planning, Claude Sonnet writes clean implementation code, and GPT-OSS powers rapid iterations.',
            isCorrect: true,
            explanation: 'Each model specializes: Gemini 3 Pro for requirements and phased planning, Claude Sonnet for clean code structure, and GPT-OSS for fast experimental changes.',
          },
          {
            label: 'B',
            text: 'Claude Sonnet records browser videos, GPT-OSS manages database backups, and Gemini 3 Pro writes CSS only.',
            isCorrect: false,
            explanation: 'Browser videos are recorded by the Browser Agent, and model roles are split across planning, implementation, and rapid iteration.',
          },
          {
            label: 'C',
            text: 'All three models generate identical code simultaneously and vote on every line of syntax.',
            isCorrect: false,
            explanation: 'Agent orchestration routes distinct stages of the workflow to the model specialized for that task.',
          },
          {
            label: 'D',
            text: 'Users must manually copy-paste outputs between Gemini, Claude, and GPT-OSS in separate browser tabs.',
            isCorrect: false,
            explanation: 'Google Antigravity automates multi-model coordination through internal agent orchestration.',
          },
        ],
      },
      {
        id: 'bwga-ch01-q3',
        scenarioPrompt:
          'A business owner who cannot read JavaScript wants assurance that an Antigravity agent actually implemented and tested a checkout form rather than hallucinating success. Which platform mechanism provides this verification?',
        options: [
          {
            label: 'A',
            text: 'Manual line-by-line terminal diff inspection.',
            isCorrect: false,
            explanation: 'Non-programmers do not need to inspect raw code diffs to verify feature completion.',
          },
          {
            label: 'B',
            text: 'The Artifact System paired with the Browser Agent, which captures live Chrome interaction videos, screenshots, and test reports.',
            isCorrect: true,
            explanation: 'Agents generate artifacts—including Browser Agent video recordings and screenshots of form submissions—that visually prove the feature works.',
          },
          {
            label: 'C',
            text: 'OutSystems enterprise compliance certification.',
            isCorrect: false,
            explanation: 'OutSystems is a separate enterprise low-code platform unrelated to Antigravity artifacts.',
          },
          {
            label: 'D',
            text: 'Disabling the Chrome extension so agents only run static text checks.',
            isCorrect: false,
            explanation: 'The Chrome extension is required for the Browser Agent to interact with and record live web interfaces.',
          },
        ],
      },
      {
        id: 'bwga-ch01-q4',
        scenarioPrompt:
          'Which of the following projects is LEAST suitable for Google Antigravity and should instead use traditional software engineering?',
        options: [
          {
            label: 'A',
            text: 'A client project management portal that tracks graphic design revisions and sends automated invoices.',
            isCorrect: false,
            explanation: 'This is a real-world example built in three days with Google Antigravity.',
          },
          {
            label: 'B',
            text: 'A workout planning platform with progress analytics, video demos, and fitness tracker integrations.',
            isCorrect: false,
            explanation: 'This standard web and API application was built and licensed by a fitness instructor using Antigravity.',
          },
          {
            label: 'C',
            text: 'A bespoke 3D physics game engine requiring novel rendering algorithms and extreme low-level hardware optimization.',
            isCorrect: true,
            explanation: 'Antigravity struggles with novel algorithms, complex game engines, and deep low-level optimizations.',
          },
          {
            label: 'D',
            text: 'A restaurant inventory system that integrates with POS sales data to generate reorder alerts.',
            isCorrect: false,
            explanation: 'Standard business intelligence and inventory CRUD apps are ideal for Antigravity.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'bwga-ch01-fc1',
        category: 'architecture',
        front: 'What are the specialized roles of Gemini 3 Pro, Claude Sonnet, and GPT-OSS inside Google Antigravity?',
        back: 'Gemini 3 Pro decomposes business requirements into phased project plans, Claude Sonnet writes clean maintainable implementation code, and GPT-OSS handles rapid iterations and experimental changes.',
        mentalHook: 'Gemini Plans, Claude Codes, GPT-OSS Iterates.',
      },
      {
        id: 'bwga-ch01-fc2',
        category: 'evaluation',
        front: 'What are "Artifacts" in Google Antigravity and why do they matter for non-programmers?',
        back: 'Artifacts are generated implementation plans, screenshots, browser interaction videos, test results, and deployment docs that prove agent work visually without requiring code review.',
        mentalHook: 'Proof by visual evidence, not verbal claims.',
      },
      {
        id: 'bwga-ch01-fc3',
        category: 'architecture',
        front: 'How does the Browser Agent validate web applications?',
        back: 'It drives a controlled Chrome instance like a human user—clicking buttons, filling forms, and navigating pages—while recording video and screenshots for automated QA.',
        mentalHook: 'An automated human tester with a screen recorder.',
      },
      {
        id: 'bwga-ch01-fc4',
        category: 'data',
        front: 'What role do Model Context Protocol (MCP) servers play in Google Antigravity?',
        back: 'MCP servers connect AI agents to external databases, third-party APIs, and live documentation sites beyond their base training weights.',
        mentalHook: 'MCP = The agent’s bridge to live external data and APIs.',
      },
      {
        id: 'bwga-ch01-fc5',
        category: 'foundation',
        front: 'How does Google Antigravity differ fundamentally from Cursor AI?',
        back: 'Cursor AI provides inline code autocomplete to make programmers faster, whereas Antigravity uses autonomous agent conversations to write, test, and deploy apps for non-programmers.',
        mentalHook: 'Cursor assists coders; Antigravity replaces manual coding.',
      },
      {
        id: 'bwga-ch01-fc6',
        category: 'optimization',
        front: 'How does Google Antigravity shift the economics of custom SMB software?',
        back: 'It compresses $15,000–$50,000 agency builds that took months into multi-day solo builds costing near zero during preview or tens to hundreds of dollars on paid tiers.',
        mentalHook: 'Months and $30k compressed into days and pocket change.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch01-feyn1',
        conceptTitle: 'Tri-Model Agent Orchestration & Artifact Verification',
        prompt:
          'Explain to a non-technical entrepreneur how Google Antigravity coordinates multiple AI models to build an app and how they can trust the result without knowing how to read code.',
        rubricChecklist: [
          'Contrasts Product-Owner conversational direction against traditional syntax coding.',
          'Identifies the three models: Gemini 3 Pro (planning), Claude Sonnet (clean coding), and GPT-OSS (rapid iteration).',
          'Explains how the Browser Agent tests the live UI in Chrome by clicking buttons and filling forms.',
          'Describes how generated artifacts (videos, screenshots, test reports, plans) prove functionality transparently.',
        ],
        modelExplanation:
          'In Google Antigravity, you act as the product manager while internal agent orchestration coordinates three specialized models: Gemini 3 Pro turns your business goal into a phased plan, Claude Sonnet writes clean application code, and GPT-OSS handles fast tweaks. You never have to read code to trust the output because the Browser Agent tests the live app in Chrome and produces an artifact bundle of video recordings, screenshots, and test logs proving every feature works.',
      },
      {
        id: 'bwga-ch01-feyn2',
        conceptTitle: 'Positioning Antigravity Across the Software Creation Landscape',
        prompt:
          'Explain where Google Antigravity fits compared to No-Code builders (like Bubble), AI coding assistants (like Cursor AI), and traditional software engineering.',
        rubricChecklist: [
          'Explains why No-Code tools require zero syntax but trap users inside preset templates.',
          'Explains why Cursor AI and Copilot offer full code flexibility but require existing programming knowledge.',
          'Shows how Antigravity combines zero-syntax conversational direction with custom full-stack code generation.',
          'Identifies the boundary where traditional engineering still wins (novel algorithms, game engines, extreme optimizations).',
        ],
        modelExplanation:
          'No-code tools like Bubble let non-programmers build fast, but lock them into rigid templates. AI coding assistants like Cursor give full code flexibility, but require you to already know how to program. Google Antigravity bridges both worlds: non-programmers direct autonomous agents in plain English to generate custom full-stack web apps in days, leaving only novel algorithms, complex game engines, and deep legacy integrations to traditional programmers.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-agent-orchestration',
        label: 'Multi-Model Agent Orchestration',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'Automated coordination layer routing planning to Gemini 3 Pro, coding to Claude Sonnet, and fast iteration to GPT-OSS.',
        whyItMatters: 'Eliminates manual handoffs between product planning, implementation, testing, and deployment.',
      },
      {
        id: 'bwga-agent-manager',
        label: 'Agent Manager',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'Mission control interface where users manage multi-session development conversation threads instead of raw source files.',
        whyItMatters: 'Shifts the developer workflow from syntax editing to high-level task supervision.',
      },
      {
        id: 'bwga-browser-agent',
        label: 'Browser Agent',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 1,
        definition: 'Autonomous testing agent that drives Chrome via an isolated extension to click, type, navigate, and record visual QA evidence.',
        whyItMatters: 'Automates end-to-end UI testing and produces video proof of application behavior.',
      },
      {
        id: 'bwga-artifact-system',
        label: 'Verification Artifact System',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition: 'Structured output bundle containing implementation plans, screenshots, browser videos, test reports, and deployment guides.',
        whyItMatters: 'Enables non-programmers to verify software quality and architectural decisions without reading code.',
      },
      {
        id: 'bwga-mcp-servers',
        label: 'Model Context Protocol (MCP) Servers',
        category: 'data',
        chapterNumber: 1,
        importance: 2,
        definition: 'Standardized connectors allowing Antigravity agents to query external databases, APIs, and documentation sites.',
        whyItMatters: 'Extends agent capabilities beyond static pre-training data into live production services.',
      },
      {
        id: 'bwga-economic-compression',
        label: 'Software Economic Compression',
        category: 'optimization',
        chapterNumber: 1,
        importance: 3,
        definition: 'Reduction of $15,000–$50,000 multi-month custom software builds into multi-day solo sprints.',
        whyItMatters: 'Unlocks custom internal tooling and rapid MVP validation for small businesses and solo founders.',
      },
    ],
    edges: [
      {
        source: 'bwga-agent-manager',
        target: 'bwga-agent-orchestration',
        relationship: 'prerequisite_for',
        explanation: 'Agent Manager dispatches user conversation threads into the multi-model orchestration engine.',
      },
      {
        source: 'bwga-mcp-servers',
        target: 'bwga-agent-orchestration',
        relationship: 'optimizes',
        explanation: 'MCP servers enrich orchestrated agents with live database schemas, APIs, and external documentation.',
      },
      {
        source: 'bwga-browser-agent',
        target: 'bwga-artifact-system',
        relationship: 'part_of',
        explanation: 'Browser Agent recordings and screenshots form the core visual evidence inside the artifact bundle.',
      },
      {
        source: 'bwga-artifact-system',
        target: 'bwga-agent-orchestration',
        relationship: 'evaluates',
        explanation: 'Generated artifacts verify that orchestrated agents implemented requirements accurately.',
      },
      {
        source: 'bwga-agent-orchestration',
        target: 'bwga-economic-compression',
        relationship: 'prerequisite_for',
        explanation: 'Autonomous planning, coding, and QA compress multi-month agency projects into multi-day sprints.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 8,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapter 1 mechanisms, tri-model roles, Browser Agent, MCP, economics, and competitive landscape verified with zero AI clichés.',
  },
};

export const bwgaCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Installation and Setup',
  subtitle: 'Hardware Baselines, Identity Isolation, Autonomy Governance Tiers, and Pre-Flight Diagnostics',
  readingTimeMinutes: 6,
  sourceWordCount: 2684,
  executiveThesis:
    'Installing Google Antigravity is an architectural governance step that defines the security boundary, memory ceiling, and execution autonomy of your AI agents. By pairing a dedicated 2FA personal Gmail account and 16GB+ RAM environment with calibrated Agent-Assisted permissions, Smart Terminal Authorization, and an isolated Chrome profile, you maximize build velocity without exposing your host machine or personal data.',
  paradigmShift: {
    oldWay:
      'Installing a traditional code editor meant downloading a static binary that only executed commands explicitly typed by the developer.',
    newWay:
      'Setting up Antigravity configures an autonomous runtime with calibrated terminal policies, sandboxed Chrome profiles, and cloud model quotas.',
    whyItChanged:
      'Because agents execute shell commands, edit files, and browse live websites autonomously, setup must govern permissions and resource isolation upfront.',
  },
  customDiagrams: [
    {
      id: 'bwga-ch02-svg1',
      title: 'Autonomy vs. Oversight: Agent Permission & Terminal Policy Matrix',
      subtitle: 'Calibrating the four Wizard Permission Tiers alongside the three Terminal Execution Policies',
      bierutCaption:
        'Start in the Agent-Assisted and Smart Authorization sweet spot to balance rapid execution with human approval on risky operations.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">AUTONOMY GOVERNANCE: AGENT PERMISSIONS &amp; TERMINAL EXECUTION POLICIES</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Configuring human-in-the-loop safety gates during the Initial Setup Wizard</text>

  <!-- Left Panel: 4 Agent Permission Presets -->
  <rect x="24" y="76" width="444" height="316" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="44" y="100" fill="#38bdf8" font-size="11" font-weight="700">1. AGENT PERMISSION PRESETS (SETUP WIZARD)</text>

  <!-- Tier 1: Review-Driven -->
  <rect x="44" y="114" width="404" height="56" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="58" y="136" fill="#e2e8f0" font-size="10.5" font-weight="700">Review-Driven Development (Max Oversight)</text>
  <text x="58" y="154" fill="#94a3b8" font-size="9">Explicit human approval for almost every agent action; ideal for learning &amp; critical apps.</text>

  <!-- Tier 2: Agent-Assisted (Recommended) -->
  <rect x="44" y="180" width="404" height="64" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="58" y="202" fill="#6ee7b7" font-size="11" font-weight="700">★ Agent-Assisted Development (Recommended Baseline)</text>
  <text x="58" y="220" fill="#d1fae5" font-size="9.5">Automates routine coding tasks; pauses for approval on risky commands or architecture shifts.</text>
  <text x="58" y="236" fill="#34d399" font-size="8.5" font-family="monospace">Optimal Velocity + Safety Balance</text>

  <!-- Tier 3: Agent-Driven -->
  <rect x="44" y="254" width="404" height="56" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="58" y="276" fill="#fde68a" font-size="10.5" font-weight="700">Agent-Driven Development (Max Autonomy)</text>
  <text x="58" y="294" fill="#94a3b8" font-size="9">Auto-executes terminal commands, architectural choices, and features without approval prompts.</text>

  <!-- Tier 4: Custom -->
  <rect x="44" y="320" width="404" height="54" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="58" y="342" fill="#c7d2fe" font-size="10.5" font-weight="700">Custom Configuration (Granular Policy)</text>
  <text x="58" y="358" fill="#94a3b8" font-size="9">Per-capability permission rules for advanced developers or strict security policies.</text>

  <!-- Connector Arrow -->
  <path d="M 468 212 L 502 212" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right Panel: 3 Terminal Execution Policies -->
  <rect x="502" y="76" width="274" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="520" y="100" fill="#34d399" font-size="11" font-weight="700">2. TERMINAL CLI POLICIES</text>

  <rect x="520" y="118" width="238" height="72" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="534" y="140" fill="#e2e8f0" font-size="10.5" font-weight="700">Manual Approval</text>
  <text x="534" y="158" fill="#94a3b8" font-size="9">Blocks every CLI command until</text>
  <text x="534" y="172" fill="#94a3b8" font-size="9">reviewed; high friction.</text>

  <rect x="520" y="204" width="238" height="84" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="534" y="226" fill="#6ee7b7" font-size="10.5" font-weight="700">★ Smart Authorization</text>
  <text x="534" y="244" fill="#d1fae5" font-size="9">Auto-runs routine CLI commands;</text>
  <text x="534" y="258" fill="#d1fae5" font-size="9">flags destructive ops for review.</text>
  <text x="534" y="274" fill="#34d399" font-size="8.5" font-family="monospace">Recommended Default</text>

  <rect x="520" y="302" width="238" height="72" rx="6" fill="#450a0a" stroke="#ef4444" />
  <text x="534" y="324" fill="#fca5a5" font-size="10.5" font-weight="700">Full Automation</text>
  <text x="534" y="342" fill="#fecaca" font-size="9">Runs all commands autonomously</text>
  <text x="534" y="356" fill="#fecaca" font-size="9">except a small danger blocklist.</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Review-Driven vs. Agent-Driven',
          explanation:
            'Spans from manual approval on every step to full unprompted autonomy across code and architecture.',
        },
        {
          step: '2',
          label: 'Agent-Assisted Sweet Spot',
          explanation:
            'Lets agents execute routine coding automatically while gating major architectural or risky actions.',
        },
        {
          step: '3',
          label: 'Smart Terminal Authorization',
          explanation:
            'Pairs with Agent-Assisted mode to run safe CLI commands while halting on destructive shell operations.',
        },
      ],
    },
    {
      id: 'bwga-ch02-svg2',
      title: 'Environment Isolation & 4-Gate Diagnostic Architecture',
      subtitle: 'Dedicated Gmail 2FA, sandboxed Chrome profile allowlists, workspace structure, and system verification',
      bierutCaption:
        'Isolate agent identity, browser sessions, and project directories before certifying all four diagnostic checks.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">HOST ENVIRONMENT ISOLATION &amp; PRE-FLIGHT DIAGNOSTIC PIPELINE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Separating agent credentials, browser profiles, and 10GB+ workspaces before running Help → Diagnostics</text>

  <!-- Top Row: 3 Isolation Pillars -->
  <rect x="24" y="76" width="236" height="154" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="142" y="100" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. IDENTITY &amp; HARDWARE</text>
  <text x="40" y="122" fill="#e2e8f0" font-size="9.5">• Dedicated Personal Gmail + 2FA</text>
  <text x="40" y="140" fill="#94a3b8" font-size="9">  (Workspace accounts unsupported)</text>
  <text x="40" y="160" fill="#e2e8f0" font-size="9.5">• 16GB+ RAM (8GB min) + SSD</text>
  <text x="40" y="178" fill="#e2e8f0" font-size="9.5">• Apple Silicon / Win 11 / Ubuntu</text>
  <text x="40" y="198" fill="#7dd3fc" font-size="9" font-family="monospace">Prevents RAM-to-disk swap lag</text>

  <rect x="282" y="76" width="236" height="154" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
  <text x="400" y="100" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="700">2. CHROME SANDBOX</text>
  <text x="298" y="122" fill="#e2e8f0" font-size="9.5">• Antigravity Chrome Extension</text>
  <text x="298" y="140" fill="#e2e8f0" font-size="9.5">• Dedicated Agent Chrome Profile</text>
  <text x="298" y="158" fill="#94a3b8" font-size="9">  (Zero personal cookie leakage)</text>
  <text x="298" y="178" fill="#e2e8f0" font-size="9.5">• Explicit URL Domain Allowlist</text>
  <text x="298" y="198" fill="#c7d2fe" font-size="9" font-family="monospace">GitHub, StackOverflow, Cloud</text>

  <rect x="540" y="76" width="236" height="154" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="658" y="100" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="700">3. WORKSPACE TOPOLOGY</text>
  <text x="556" y="122" fill="#e2e8f0" font-size="9.5">• 10GB+ Dedicated Disk Folder</text>
  <text x="556" y="140" fill="#e2e8f0" font-size="9.5">• /active, /completed, /templates,</text>
  <text x="556" y="156" fill="#e2e8f0" font-size="9.5">  and /experiments subdirectories</text>
  <text x="556" y="176" fill="#e2e8f0" font-size="9.5">• Cloud Sync + Git Integration</text>
  <text x="556" y="198" fill="#fbbf24" font-size="9" font-family="monospace">Status Bar Active-Hour Pacing</text>

  <!-- Flow Arrows Down to Diagnostic Gate -->
  <path d="M 142 230 L 142 264" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 400 230 L 400 264" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 658 230 L 658 264" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Bottom Row: 4-Pillar Diagnostic Gate -->
  <rect x="24" y="264" width="752" height="128" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="400" y="290" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="700">4. BUILT-IN SYSTEM DIAGNOSTICS (HELP → COMPLETE SYSTEM CHECK)</text>

  <rect x="44" y="306" width="166" height="68" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="127" y="328" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Check 1: AI Connectivity</text>
  <text x="127" y="346" text-anchor="middle" fill="#94a3b8" font-size="8.5">Remote model reachability</text>
  <text x="127" y="360" text-anchor="middle" fill="#94a3b8" font-size="8.5">&amp; firewall clearance</text>

  <rect x="226" y="306" width="166" height="68" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="309" y="328" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Check 2: Browser Agent</text>
  <text x="309" y="346" text-anchor="middle" fill="#94a3b8" font-size="8.5">Chrome extension launch,</text>
  <text x="309" y="360" text-anchor="middle" fill="#94a3b8" font-size="8.5">navigation &amp; video capture</text>

  <rect x="408" y="306" width="166" height="68" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="491" y="328" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Check 3: File System I/O</text>
  <text x="491" y="346" text-anchor="middle" fill="#94a3b8" font-size="8.5">Workspace create, modify,</text>
  <text x="491" y="360" text-anchor="middle" fill="#94a3b8" font-size="8.5">&amp; execute permissions</text>

  <rect x="590" y="306" width="166" height="68" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="673" y="328" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Check 4: Terminal CLI</text>
  <text x="673" y="346" text-anchor="middle" fill="#94a3b8" font-size="8.5">Command-line execution for</text>
  <text x="673" y="360" text-anchor="middle" fill="#94a3b8" font-size="8.5">dependencies &amp; deploys</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Dedicated 2FA Gmail & 16GB+ RAM',
          explanation:
            'Separates professional deployments from personal email while preventing memory swap lag during concurrent agent runs.',
        },
        {
          step: '2',
          label: 'Isolated Chrome Profile & Allowlist',
          explanation:
            'Keeps Browser Agent testing out of personal browsing data and restricts external domain access to trusted URLs.',
        },
        {
          step: '3',
          label: '4-Pillar Diagnostic Certification',
          explanation:
            'Verifies remote AI connectivity, Chrome automation, filesystem write/execute rights, and CLI access before project start.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'bwga-ch02-mm1',
      name: 'Progressive Trust Calibration',
      tagline: 'Earn autonomy incrementally instead of granting root access on day one',
      naiveIntuition:
        'Selecting "Agent-driven development" with "Full Automation" immediately is best because it removes approval popups.',
      firstPrinciplesReality:
        'Unbounded autonomy before you understand agent failure modes risks destructive CLI commands or unwanted architectural rewrites.',
      howToApply:
        'Start with "Agent-assisted development" and "Smart Authorization," expanding autonomy only after observing predictable agent behavior.',
    },
    {
      id: 'bwga-ch02-mm2',
      name: 'Credential & Browser Compartmentalization',
      tagline: 'Ring-fence agent identities and browser cookies from personal digital life',
      naiveIntuition:
        'Using your primary personal Gmail and default Chrome profile is convenient and harmless during preview testing.',
      firstPrinciplesReality:
        'Autonomous agents create repositories, deploy cloud services, and drive browser sessions that should never touch personal cookies.',
      howToApply:
        'Create a dedicated 2FA Gmail account and rely on the extension’s isolated Chrome profile with strict URL allowlists.',
    },
    {
      id: 'bwga-ch02-mm3',
      name: 'Active-Hour Burst Pacing',
      tagline: 'Align intense multi-agent sprints with preview quota windows and RAM headroom',
      naiveIntuition:
        'Rate limits count individual prompt messages, so leaving agents idling in open threads all day costs nothing.',
      firstPrinciplesReality:
        'Preview quotas track active usage hours while concurrent agents consume significant RAM and remote inference bandwidth.',
      howToApply:
        'Monitor the status bar quota indicator and work in focused, well-planned bursts rather than continuous unfocused sessions.',
    },
  ],
  deepSections: [
    {
      id: 'bwga-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Hardware Baselines, OS Installers, and Dedicated Identity Setup',
      subtitle: 'Preparing VS Code foundation resources, Apple Silicon/SSD acceleration, and 2FA personal Gmail accounts',
      coreMechanism:
        'Built on Visual Studio Code, Google Antigravity runs on Windows 10 (1903+)/11 via an administrator MSI installer, macOS 10.15+ via DMG (where Apple Silicon M1/M2/M3 chips accelerate inference and Gatekeeper requires initial right-click Open approval), and Linux via `.deb` or `.rpm` packages. While 8GB RAM and 5GB disk space meet minimum requirements, 16GB+ RAM and SSD storage are critical to prevent disk-swapping delays when multiple agents analyze projects concurrently.\n\nBecause Google Workspace accounts are unsupported during preview, users must register a personal Gmail account—ideally a dedicated, professionally named address protected by Two-Factor Authentication (2FA).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Provision Dedicated Identity',
          detail: 'Create a dedicated personal Gmail account and enable 2FA immediately.',
        },
        {
          step: '2',
          title: 'Verify Hardware Headroom',
          detail: 'Confirm 16GB+ RAM, 5GB+ installer SSD space, and stable broadband.',
        },
        {
          step: '3',
          title: 'Execute OS Installer',
          detail: 'Run Windows MSI as admin, approve macOS Gatekeeper, or install Linux package.',
        },
      ],
      keyTakeaways: [
        '16GB+ RAM and SSD storage prevent memory swapping when running concurrent AI agent threads.',
        'Google Workspace accounts are unsupported in preview; use a dedicated 2FA personal Gmail account.',
      ],
      commonPitfalls: [
        'Running the Windows MSI installer without administrator privileges, causing runtime dependency failures.',
        'Using a casual personal Gmail address that later appears publicly on deployed client repositories.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Setup Wizard Governance: Agent Permissions & Terminal Policies',
      subtitle: 'Balancing development velocity against host security across four autonomy presets and three CLI gates',
      coreMechanism:
        'Upon first launch, the Setup Wizard configures editor migration (importing VS Code/Cursor shortcuts or choosing Fresh Start), visual themes, and—most critically—agent autonomy boundaries. Users select among four permission tiers: Agent-driven (full unprompted autonomy), Agent-assisted (routine tasks automated, risky actions gated), Review-driven (approval required for almost every step), or Custom.\n\nWithin these tiers, Terminal Execution Policies govern shell access through Manual Approval, Smart Authorization, or Full Automation. Pairing Agent-assisted development with Smart Authorization establishes the optimal baseline, letting agents install packages and run builds while halting on potentially destructive commands.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select Base Configuration',
          detail: 'Choose Fresh Start for beginners or import existing VS Code/Cursor settings.',
        },
        {
          step: '2',
          title: 'Set Permission Tier',
          detail: 'Select Agent-Assisted development to balance speed with architectural oversight.',
        },
        {
          step: '3',
          title: 'Configure Terminal Gate',
          detail: 'Enable Smart Authorization so agents auto-run routine CLI commands safely.',
        },
      ],
      keyTakeaways: [
        'Agent-assisted development paired with Smart Authorization is the recommended starting posture.',
        'Review-driven mode maximizes visibility when learning how agents reason or when editing critical apps.',
      ],
      commonPitfalls: [
        'Enabling Agent-driven mode and Full Automation on day one before building trust in agent behavior.',
        'Selecting Manual Approval for every CLI command on routine projects, creating constant workflow friction.',
      ],
      figures: [],
    },
    {
      id: 'bwga-ch02-sec3',
      sectionNumber: '2.3',
      title: 'Browser Sandbox, Workspace Topology, Diagnostics, and Rate Quotas',
      subtitle: 'Configuring isolated Chrome allowlists, 10GB+ project directories, 4-gate checks, and active-hour pacing',
      coreMechanism:
        'Completing setup requires installing the Chrome extension, which provisions a dedicated Chrome profile for the Browser Agent and enforces URL allowlists (such as GitHub, Stack Overflow, and cloud consoles) to protect personal browsing data. Projects live inside workspaces requiring at least 10GB of free disk space, organized into `/active`, `/completed`, `/templates`, and `/experiments` folders with cloud backup and Git integration.\n\nAfter tuning memory allocation, concurrent agent limits, and selective VS Code extensions, users must run the Help menu diagnostic check—verifying AI model connectivity, Browser Agent automation, filesystem permissions, and terminal access—while pacing work around status-bar active-usage-hour quotas.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Bind Chrome & Allowlist',
          detail: 'Install the Chrome extension and restrict Browser Agent domains to trusted URLs.',
        },
        {
          step: '2',
          title: 'Structure 10GB+ Workspace',
          detail: 'Create active, completed, templates, and experiments folders with cloud sync.',
        },
        {
          step: '3',
          title: 'Certify 4-Gate Diagnostics',
          detail: 'Run Help → Diagnostics to verify AI, Browser, Filesystem, and Terminal checks.',
        },
      ],
      keyTakeaways: [
        'Always run the 4-part built-in diagnostic check before starting your first project to rule out setup faults.',
        'Preview rate limits measure active usage hours; monitor the status bar and work in focused bursts.',
      ],
      commonPitfalls: [
        'Skipping Browser Agent Chrome setup upfront, which disables automated visual QA and artifact recordings.',
        'Installing dozens of unnecessary VS Code extensions that bloat memory and slow down agent operations.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Agent Permission & Terminal Autonomy Governance Matrix',
      description: 'Comparing setup wizard permission presets and terminal execution policies across velocity, security, and ideal operator profile.',
      headers: ['Governance Mode', 'Development Velocity', 'Security & Oversight', 'CLI Execution Behavior', 'Recommended Operator Profile'],
      rows: [
        ['Review-Driven + Manual CLI', 'Slow (high prompt friction)', 'Maximum human visibility', 'Approves every command manually', 'Complete beginners & critical systems'],
        ['Agent-Assisted + Smart Auth', 'High (balanced flow)', 'Strong (gates risky actions)', 'Auto-runs safe commands; flags risk', 'Recommended baseline for most users'],
        ['Agent-Driven + Full Auto', 'Maximum (uninterrupted)', 'Low (relies on blocklist)', 'Executes almost all CLI autonomously', 'Trusted sandboxes & rapid prototypes'],
        ['Custom Configuration', 'Tunable per workflow', 'Tailored to org policy', 'Granular command-level allow/deny rules', 'Advanced devs & enterprise compliance'],
      ],
      verdictRule:
        'Default to Agent-Assisted development with Smart Authorization; use Review-Driven mode when learning agent mechanics and reserve Agent-Driven mode for isolated throwaway sandboxes.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch02-scen1',
      title: 'Diagnosing Corporate Firewall & Workspace Permission Failures',
      roleAndContext: 'Product manager setting up Google Antigravity on a locked-down Windows 10 laptop.',
      symptomOrFailure: 'Agents hang indefinitely when creating project files and fail to generate implementation plans.',
      naiveFixAndWhyItFails: 'Repeatedly restarting agent conversation threads fails because the underlying OS permissions and network ports are blocked.',
      firstPrinciplesSolution: 'Re-run the MSI installer as Administrator, allocate a user-owned 10GB workspace folder, and run Help → Diagnostics to verify AI and filesystem checks.',
      measurableOutcome: 'All four diagnostic checks pass and agents scaffold full-stack project files without silent I/O failures.',
    },
    {
      id: 'bwga-ch02-scen2',
      title: 'Preventing Memory Thrashing and Mid-Sprint Quota Exhaustion',
      roleAndContext: 'Solo builder running five simultaneous agent threads on an 8GB RAM machine with 30 VS Code extensions.',
      symptomOrFailure: 'The IDE freezes from disk swapping and hits the preview rate limit before the core feature is tested.',
      naiveFixAndWhyItFails: 'Opening more concurrent threads to finish faster increases RAM swap thrashing and burns active usage hours.',
      firstPrinciplesSolution: 'Prune non-essential extensions, lower concurrent agent limits to match 8GB–16GB RAM, and schedule focused burst sessions using the status bar quota meter.',
      measurableOutcome: 'Eliminated disk-swap freezes and shipped the milestone within the daily preview active-hour budget.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch02-q1',
        scenarioPrompt:
          'A business user attempts to sign in to Google Antigravity during the preview period using their company Google Workspace email (`founder@startup.io`) on an 8GB RAM laptop. What account and hardware guidance from Chapter 2 applies?',
        options: [
          {
            label: 'A',
            text: 'Google Workspace accounts are required for preview, and 4GB RAM is sufficient.',
            isCorrect: false,
            explanation: 'Google Workspace accounts are not supported during the preview period, and 8GB is the strict minimum RAM.',
          },
          {
            label: 'B',
            text: 'They must use a personal Gmail account (ideally a dedicated professional account with 2FA) and upgrade toward 16GB RAM with SSD storage for smooth multi-agent performance.',
            isCorrect: true,
            explanation: 'Preview access requires a personal Gmail account (with 2FA recommended), and 16GB RAM + SSD prevents swap delays.',
          },
          {
            label: 'C',
            text: 'They should disable Two-Factor Authentication so agents can log into Google servers faster.',
            isCorrect: false,
            explanation: 'Chapter 2 explicitly mandates enabling 2FA immediately to protect development capabilities.',
          },
          {
            label: 'D',
            text: 'Intel Macs run local AI model inference significantly faster than Apple Silicon M1/M2/M3 Macs.',
            isCorrect: false,
            explanation: 'Apple Silicon Macs (M1, M2, M3) offer significantly better performance than Intel Macs.',
          },
        ],
      },
      {
        id: 'bwga-ch02-q2',
        scenarioPrompt:
          'During the Initial Setup Wizard, which combination of Agent Permission preset and Terminal Execution Policy is recommended for most users starting their first projects?',
        options: [
          {
            label: 'A',
            text: 'Agent-driven development paired with Full Automation.',
            isCorrect: false,
            explanation: 'Maximum autonomy requires complete trust and is risky before understanding agent behavior.',
          },
          {
            label: 'B',
            text: 'Review-driven development paired with Full Automation.',
            isCorrect: false,
            explanation: 'This mixes maximum review with unrestricted terminal execution and is not the recommended baseline.',
          },
          {
            label: 'C',
            text: 'Agent-assisted development paired with Smart Authorization.',
            isCorrect: true,
            explanation: 'Agent-assisted development and Smart Authorization automate routine tasks and safe commands while requesting approval for risky operations or major architectural changes.',
          },
          {
            label: 'D',
            text: 'Custom configuration with all terminal access permanently disabled.',
            isCorrect: false,
            explanation: 'Agents need terminal access for project setup, dependency installation, and deployment.',
          },
        ],
      },
      {
        id: 'bwga-ch02-q3',
        scenarioPrompt:
          'How does Google Antigravity’s Browser Agent protect your personal browsing sessions and sensitive web accounts while testing applications in Chrome?',
        options: [
          {
            label: 'A',
            text: 'It clears your personal Chrome history every five minutes.',
            isCorrect: false,
            explanation: 'It does not wipe your personal profile; it isolates agent activity into a separate profile.',
          },
          {
            label: 'B',
            text: 'The Chrome extension creates a dedicated Chrome profile for agent use and restricts navigation via a configurable URL allowlist.',
            isCorrect: true,
            explanation: 'A separate Chrome profile isolates automated testing from personal data, while URL allowlists restrict which domains agents can visit.',
          },
          {
            label: 'C',
            text: 'It blocks agents from accessing GitHub, Stack Overflow, or cloud platforms.',
            isCorrect: false,
            explanation: 'GitHub, Stack Overflow, and major cloud platforms are included in the default trusted allowlist.',
          },
          {
            label: 'D',
            text: 'It runs only inside Internet Explorer without network access.',
            isCorrect: false,
            explanation: 'It uses a Chrome extension with controlled network access.',
          },
        ],
      },
      {
        id: 'bwga-ch02-q4',
        scenarioPrompt:
          'Before starting your first project, you run the built-in diagnostic tool from the Help menu. Which four core subsystems does this complete system check validate?',
        options: [
          {
            label: 'A',
            text: 'AI model connectivity, Browser Agent Chrome extension, file system permissions, and terminal access.',
            isCorrect: true,
            explanation: 'The four diagnostic checks verify remote AI service communication, Chrome extension automation, workspace read/write/execute permissions, and CLI execution.',
          },
          {
            label: 'B',
            text: 'Color theme contrast, font ligatures, audio drivers, and webcam resolution.',
            isCorrect: false,
            explanation: 'These aesthetic or hardware peripherals are not part of the Antigravity diagnostic suite.',
          },
          {
            label: 'C',
            text: 'Google Workspace billing, Bubble template sync, and Cursor keybindings.',
            isCorrect: false,
            explanation: 'Diagnostics test execution readiness, not third-party no-code templates.',
          },
          {
            label: 'D',
            text: 'GPU overclocking, BIOS firmware version, and Bluetooth pairing.',
            isCorrect: false,
            explanation: 'AI processing occurs on Google servers; diagnostics verify connectivity, browser, filesystem, and terminal access.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'bwga-ch02-fc1',
        category: 'architecture',
        front: 'What are the minimum vs. recommended RAM and workspace disk allocations for Google Antigravity?',
        back: '8GB RAM minimum with 16GB+ strongly recommended (32GB+ for high concurrency); 5GB disk space for installation plus at least 10GB for the workspace directory on an SSD.',
        mentalHook: '16GB RAM + 10GB SSD Workspace = Zero Swap Lag.',
      },
      {
        id: 'bwga-ch02-fc2',
        category: 'security',
        front: 'Why must you create a personal Gmail account with 2FA for Google Antigravity preview?',
        back: 'Google Workspace accounts are unsupported in preview, and a dedicated 2FA personal Gmail isolates deployed apps and repositories from personal email while securing powerful agent capabilities.',
        mentalHook: 'Dedicated Personal Gmail + 2FA = Clean, Secure Identity.',
      },
      {
        id: 'bwga-ch02-fc3',
        category: 'security',
        front: 'What are the four Agent Permission configurations in the Setup Wizard?',
        back: 'Agent-driven (max autonomy), Agent-assisted (recommended balance), Review-driven (explicit approval for almost all actions), and Custom configuration.',
        mentalHook: 'Driven, Assisted, Review, Custom.',
      },
      {
        id: 'bwga-ch02-fc4',
        category: 'security',
        front: 'How does "Smart Authorization" work in Terminal Execution Policies?',
        back: 'It allows agents to execute safe, routine CLI commands automatically while pausing to request human approval for potentially dangerous operations.',
        mentalHook: 'Auto-run routine CLI; gate destructive commands.',
      },
      {
        id: 'bwga-ch02-fc5',
        category: 'evaluation',
        front: 'What four tests are executed by the Help menu built-in diagnostic system?',
        back: 'AI model connectivity, Browser Agent Chrome extension functionality, workspace file system permissions (create/modify/execute), and terminal CLI access.',
        mentalHook: 'Cloud AI, Chrome, Filesystem, Terminal.',
      },
      {
        id: 'bwga-ch02-fc6',
        category: 'optimization',
        front: 'How are preview rate limits measured in Google Antigravity, and how should you schedule work?',
        back: 'Rate limits are structured around "active usage hours" monitored in the status bar; work in focused bursts rather than continuous all-day background activity.',
        mentalHook: 'Watch the status bar; sprint in focused bursts.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch02-feyn1',
        conceptTitle: 'Calibrating Agent Autonomy & Terminal Security Gates',
        prompt:
          'Explain the trade-offs between the Setup Wizard’s permission tiers and terminal policies, and justify why a new user should start with Agent-Assisted and Smart Authorization.',
        rubricChecklist: [
          'Defines the spectrum from Review-driven (slow, max oversight) to Agent-driven (fast, unprompted autonomy).',
          'Explains why Agent-assisted development is the sweet spot (automates routine coding, gates architectural/risky changes).',
          'Contrasts Manual Approval, Smart Authorization, and Full Automation in terminal policies.',
          'Explains progressive trust calibration: expanding autonomy only after observing predictable agent behavior.',
        ],
        modelExplanation:
          'Because Antigravity agents can modify files and execute shell commands on your machine, autonomy is a security slider. Review-driven mode with Manual Approval asks permission for every step, slowing velocity, while Agent-driven mode with Full Automation runs unprompted. Starting with Agent-assisted development and Smart Authorization lets agents run routine coding and CLI tasks automatically while halting for human review on risky commands or major architectural changes.',
      },
      {
        id: 'bwga-ch02-feyn2',
        conceptTitle: 'Pre-Flight Isolation, Workspace Topology, and Diagnostic Verification',
        prompt:
          'Walk through how to isolate your identity, browser, and workspace during setup, and explain how the 4-part diagnostic suite prevents mysterious build failures.',
        rubricChecklist: [
          'Explains why a dedicated 2FA personal Gmail account and 16GB+ SSD hardware baseline are needed.',
          'Describes how the Chrome extension isolates testing via a dedicated Chrome profile and URL allowlist.',
          'Outlines the 10GB+ workspace folder hierarchy (active, completed, templates, experiments) with cloud backup and Git.',
          'Lists all four Help menu diagnostic checks (AI connectivity, Browser Agent, File System permissions, Terminal access).',
        ],
        modelExplanation:
          'A reliable setup isolates agent operations across three layers: a dedicated 2FA personal Gmail account on a 16GB+ RAM SSD machine, a sandboxed Chrome profile with trusted URL allowlists, and a 10GB+ workspace split into active, completed, templates, and experiments folders synced to cloud backup and Git. Running the Help menu diagnostics before coding certifies AI connectivity, Chrome automation, filesystem permissions, and terminal access so setup bugs never masquerade as project errors.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-permission-tiers',
        label: 'Agent Permission Tiers',
        category: 'security',
        chapterNumber: 2,
        importance: 1,
        definition: 'Setup wizard presets (Agent-driven, Agent-assisted, Review-driven, Custom) governing agent decision autonomy.',
        whyItMatters: 'Balances development velocity against human oversight of architectural and codebase changes.',
      },
      {
        id: 'bwga-smart-authorization',
        label: 'Smart Terminal Authorization',
        category: 'security',
        chapterNumber: 2,
        importance: 1,
        definition: 'Terminal execution policy that auto-runs routine CLI commands while gating potentially dangerous shell operations.',
        whyItMatters: 'Prevents destructive host commands without interrupting routine package installs and builds.',
      },
      {
        id: 'bwga-chrome-sandbox',
        label: 'Isolated Chrome Profile & Allowlist',
        category: 'security',
        chapterNumber: 2,
        importance: 2,
        definition: 'Dedicated browser profile and domain allowlist used by the Antigravity Chrome extension.',
        whyItMatters: 'Protects personal browsing cookies and restricts Browser Agent navigation to trusted domains.',
      },
      {
        id: 'bwga-workspace-topology',
        label: '10GB+ Structured Workspace',
        category: 'architecture',
        chapterNumber: 2,
        importance: 2,
        definition: 'Project container hierarchy (/active, /completed, /templates, /experiments) backed by cloud sync and Git.',
        whyItMatters: 'Organizes multi-app assets, databases, and reusable templates while preventing data loss.',
      },
      {
        id: 'bwga-diagnostic-suite',
        label: '4-Pillar System Diagnostics',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 2,
        definition: 'Built-in Help menu check verifying AI model connectivity, Browser Agent Chrome control, filesystem I/O, and terminal access.',
        whyItMatters: 'Catches firewall blocks and OS permission errors before starting development.',
      },
      {
        id: 'bwga-active-hour-quota',
        label: 'Active-Usage-Hour Rate Pacing',
        category: 'optimization',
        chapterNumber: 2,
        importance: 3,
        definition: 'Preview quota model tracking active agent usage hours via the status bar indicator.',
        whyItMatters: 'Encourages focused development bursts rather than continuous background quota drain.',
      },
    ],
    edges: [
      {
        source: 'bwga-smart-authorization',
        target: 'bwga-permission-tiers',
        relationship: 'part_of',
        explanation: 'Terminal execution policies operate inside the broader agent permission configuration.',
      },
      {
        source: 'bwga-chrome-sandbox',
        target: 'bwga-diagnostic-suite',
        relationship: 'prerequisite_for',
        explanation: 'Installing the isolated Chrome extension is required to pass the Browser Agent diagnostic check.',
      },
      {
        source: 'bwga-workspace-topology',
        target: 'bwga-diagnostic-suite',
        relationship: 'prerequisite_for',
        explanation: 'A properly permissioned workspace directory is required to pass the filesystem I/O diagnostic check.',
      },
      {
        source: 'bwga-diagnostic-suite',
        target: 'bwga-permission-tiers',
        relationship: 'evaluates',
        explanation: 'System diagnostics verify that configured terminal and filesystem permissions actually work at runtime.',
      },
      {
        source: 'bwga-active-hour-quota',
        target: 'bwga-workspace-topology',
        relationship: 'optimizes',
        explanation: 'Reusing templates across organized workspaces conserves active usage hours during preview sprints.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 10,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapter 2 OS/hardware baselines, personal Gmail 2FA requirement, 4 permission presets, 3 terminal policies, Chrome isolation, workspace topology, 4-gate diagnostics, and active-hour rate limits.',
  },
};
