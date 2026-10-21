import { ChapterMastery } from '../../../types/book';

export const vcfpCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'The 70% Problem: AI-Assisted Workflows That Actually Work',
  subtitle:
    'Bridging the gap between automated accidental complexity and human-governed essential architecture',
  readingTimeMinutes: 7,
  sourceWordCount: 3710,
  executiveThesis:
    'AI coding assistants rapidly generate the initial 70% of software by automating repetitive boilerplate and accidental complexity, but fail on the final 30% involving edge cases, concurrency, and maintainable architecture. Sustainable engineering velocity requires pairing automated scaffolding with disciplined human verification, isolated version-control commits, and structured team collaboration patterns.',
  paradigmShift: {
    oldWay:
      'Developers write every line of boilerplate, configuration, and business logic manually before running late-stage code reviews.',
    newWay:
      'AI models scaffold the initial 70% of patterned implementation while engineers direct the final 30% of edge cases, architecture, and verification.',
    whyItChanged:
      'Large language models trained on public codebases remix standard framework patterns instantly, shifting the engineering bottleneck from syntax generation to system auditing.',
  },
  customDiagrams: [
    {
      id: 'vcfp-ch01-svg-70-30-gap',
      title: 'The 70/30 Complexity Split & The Knowledge Paradox',
      subtitle:
        'Contrasting AI-automated accidental complexity against human-governed essential complexity across developer experience tiers',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="vcfpBg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrCyan1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrRose1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb7185" />
    </marker>
    <marker id="arrEmerald1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#vcfpBg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">THE 70% PROBLEM: ACCIDENTAL vs. ESSENTIAL COMPLEXITY</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Why AI accelerates patterned scaffolding (70%) while human judgment governs the final production mile (30%)</text>

  <!-- 70% Accidental Complexity Bar -->
  <rect x="28" y="72" width="510" height="86" rx="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="96" fill="#38bdf8" font-size="13" font-weight="700">THE FIRST 70%: ACCIDENTAL COMPLEXITY (AI Turbo Boost)</text>
  <text x="44" y="116" fill="#e0f2fe" font-size="10.5">• Patterned boilerplate, standard CRUD routes, and routine UI scaffolding</text>
  <text x="44" y="134" fill="#e0f2fe" font-size="10.5">• Remixes known framework conventions from training distributions in seconds</text>
  <text x="44" y="150" fill="#7dd3fc" font-size="9.5" font-weight="600">Tools: Bolt, v0, Cursor, Copilot, Cline</text>

  <!-- 30% Essential Complexity Bar -->
  <rect x="546" y="72" width="226" height="86" rx="8" fill="#3b1219" stroke="#fb7185" stroke-width="1.5" />
  <text x="560" y="96" fill="#fda4af" font-size="12.5" font-weight="700">FINAL 30%: ESSENTIAL</text>
  <text x="560" y="116" fill="#fecdd3" font-size="10">• Race conditions &amp; edge cases</text>
  <text x="560" y="134" fill="#fecdd3" font-size="10">• System architecture &amp; security</text>
  <text x="560" y="150" fill="#fb7185" font-size="9.5" font-weight="600">Requires: Human Domain Mastery</text>

  <!-- Flow Paths to Divergent Outcomes -->
  <path d="M 280 158 L 280 198 L 206 198 L 206 218" fill="none" stroke="#fb7185" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrRose1)" />
  <path d="M 658 158 L 658 198 L 594 198 L 594 218" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrEmerald1)" />
  <path d="M 280 158 L 280 184 L 594 184 L 594 218" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrCyan1)" />

  <!-- Left Outcome: Unverified Acceptance -->
  <rect x="28" y="222" width="356" height="172" rx="8" fill="#1e293b" stroke="#fb7185" stroke-width="1.5" />
  <text x="44" y="246" fill="#fda4af" font-size="12.5" font-weight="700">PATH A: UNVERIFIED ACCEPTANCE (Junior / Naive Trap)</text>
  <text x="44" y="266" fill="#cbd5e1" font-size="10.5">1. Blindly accepts plausible-looking AI output ("Looks good to me")</text>
  <text x="44" y="286" fill="#cbd5e1" font-size="10.5">2. Enters "Two Steps Back" loop: fixing 1 bug spawns 2 regressions</text>
  <text x="44" y="306" fill="#cbd5e1" font-size="10.5">3. Ships Demo-Quality Trap: happy path works, real user inputs crash</text>
  <rect x="44" y="324" width="324" height="52" rx="6" fill="#3b1219" />
  <text x="56" y="344" fill="#fda4af" font-size="10" font-weight="700">OUTCOME: HOUSE OF CARDS ARCHITECTURE</text>
  <text x="56" y="362" fill="#fecdd3" font-size="9.5">Atrophies debugging skill and locks team into passive agent dependency.</text>

  <!-- Right Outcome: Senior Engineering Constraint -->
  <rect x="416" y="222" width="356" height="172" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="432" y="246" fill="#6ee7b7" font-size="12.5" font-weight="700">PATH B: CONSTRAINED ORCHESTRATION (Senior Discipline)</text>
  <text x="432" y="266" fill="#cbd5e1" font-size="10.5">1. Decomposes monolithic AI drafts into small, single-responsibility modules</text>
  <text x="432" y="286" fill="#cbd5e1" font-size="10.5">2. Hardens type definitions, interfaces, error boundaries, and slow-device UX</text>
  <text x="432" y="306" fill="#cbd5e1" font-size="10.5">3. Isolates AI changes in granular Git commits with unit &amp; security tests</text>
  <rect x="432" y="324" width="324" height="52" rx="6" fill="#064e3b" />
  <text x="444" y="344" fill="#6ee7b7" font-size="10" font-weight="700">OUTCOME: SELF-SERVE PRODUCTION SOFTWARE</text>
  <text x="444" y="362" fill="#d1fae5" font-size="9.5">Multiplies implementation speed while preserving long-term maintainability.</text>
</svg>`,
      bierutCaption:
        'A structural breakdown of the 70% threshold showing how identical AI scaffolding diverges into either brittle demoware or maintainable production systems depending on human architectural verification.',
      annotations: [
        {
          step: '1',
          label: 'Accidental Complexity Compression',
          explanation:
            'AI assistants compress the first 70% of implementation by synthesizing known framework idioms and standard boilerplate.',
        },
        {
          step: '2',
          label: 'The 30% Essential Wall',
          explanation:
            'Concurrency, security boundaries, and maintainable state transitions fall outside statistical pattern matching and demand human reasoning.',
        },
        {
          step: '3',
          label: 'The Knowledge Paradox Divergence',
          explanation:
            'Senior engineers constrain AI drafts into modular code, whereas unverified acceptance triggers cascading regression loops.',
        },
      ],
    },
    {
      id: 'vcfp-ch01-svg-team-workflows',
      title: 'Three Team Integration Patterns & Git Isolation Pipeline',
      subtitle:
        'Orchestrating First Drafter, Pair Programmer, and Validator workflows with atomic version-control safety nets',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="vcfpBg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrFlow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrAmber2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#vcfpBg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">TEAM AI WORKFLOW PATTERNS &amp; ATOMIC GIT ISOLATION</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Aligning stand-up standards, three operational interaction modes, and tagged commit checkpoints</text>

  <!-- Three Workflow Columns -->
  <rect x="28" y="72" width="236" height="184" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="96" fill="#38bdf8" font-size="12" font-weight="700">1. AI AS FIRST DRAFTER</text>
  <text x="44" y="116" fill="#cbd5e1" font-size="10">• Sync in stand-up to avoid duplicate helpers</text>
  <text x="44" y="136" fill="#cbd5e1" font-size="10">• Feed README style &amp; lint rules to AI</text>
  <text x="44" y="156" fill="#cbd5e1" font-size="10">• AI generates initial feature scaffold</text>
  <text x="44" y="176" fill="#cbd5e1" font-size="10">• Human refactors into modular units</text>
  <rect x="44" y="196" width="204" height="44" rx="6" fill="#0c4a6e" />
  <text x="54" y="214" fill="#7dd3fc" font-size="9.5" font-weight="700">Best For: New Features &amp; MVPs</text>
  <text x="54" y="230" fill="#bae6fd" font-size="9">High initial speed; heavy post-audit</text>

  <rect x="282" y="72" width="236" height="184" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="298" y="96" fill="#c084fc" font-size="12" font-weight="700">2. AI AS PAIR PROGRAMMER</text>
  <text x="298" y="116" fill="#cbd5e1" font-size="10">• Start fresh session per distinct task</text>
  <text x="298" y="136" fill="#cbd5e1" font-size="10">• Keep prompts concise and scoped</text>
  <text x="298" y="156" fill="#cbd5e1" font-size="10">• Cross-verify APIs with official docs</text>
  <text x="298" y="176" fill="#cbd5e1" font-size="10">• Continuous micro-review &amp; steering</text>
  <rect x="298" y="196" width="204" height="44" rx="6" fill="#3b0764" />
  <text x="308" y="214" fill="#d8b4fe" font-size="9.5" font-weight="700">Best For: Daily Iterative Coding</text>
  <text x="308" y="230" fill="#f3e8ff" font-size="9">Tight feedback loop; preserves context</text>

  <rect x="536" y="72" width="236" height="184" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="552" y="96" fill="#34d399" font-size="12" font-weight="700">3. AI AS VALIDATOR</text>
  <text x="552" y="116" fill="#cbd5e1" font-size="10">• Engineer writes core implementation</text>
  <text x="552" y="136" fill="#cbd5e1" font-size="10">• AI scans for missing input sanitization</text>
  <text x="552" y="156" fill="#cbd5e1" font-size="10">• Synthesizes edge-case unit test suites</text>
  <text x="552" y="176" fill="#cbd5e1" font-size="10">• Flags security &amp; perf anomalies</text>
  <rect x="552" y="196" width="204" height="44" rx="6" fill="#064e3b" />
  <text x="562" y="214" fill="#6ee7b7" font-size="9.5" font-weight="700">Best For: Critical &amp; Legacy Code</text>
  <text x="562" y="230" fill="#d1fae5" font-size="9">Human leads logic; AI expands QA</text>

  <!-- Convergence Arrows into Git Pipeline -->
  <path d="M 146 256 L 146 286 L 390 286 L 390 304" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrFlow2)" />
  <path d="M 400 256 L 400 304" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrFlow2)" />
  <path d="M 654 256 L 654 286 L 410 286 L 410 304" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrFlow2)" />

  <!-- Bottom Git Isolation Pipeline -->
  <rect x="28" y="308" width="744" height="88" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="44" y="330" fill="#fbbf24" font-size="12" font-weight="700">VERSION CONTROL SAFETY NET: GRANULAR &amp; TAGGED COMMITS</text>
  <rect x="44" y="342" width="210" height="40" rx="6" fill="#1e293b" stroke="#475569" />
  <text x="149" y="360" fill="#f8fafc" font-size="10" font-weight="600" text-anchor="middle">Commit 1: Perf Optimization [AI]</text>
  <text x="149" y="374" fill="#94a3b8" font-size="8.5" text-anchor="middle">Isolated logic change</text>

  <path d="M 254 362 L 286 362" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrAmber2)" />

  <rect x="290" y="342" width="210" height="40" rx="6" fill="#1e293b" stroke="#475569" />
  <text x="395" y="360" fill="#f8fafc" font-size="10" font-weight="600" text-anchor="middle">Commit 2: UI Copy Tweak [AI]</text>
  <text x="395" y="374" fill="#94a3b8" font-size="8.5" text-anchor="middle">Separated from perf logic</text>

  <path d="M 500 362 L 532 362" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#arrAmber2)" />

  <rect x="536" y="342" width="218" height="40" rx="6" fill="#064e3b" stroke="#34d399" />
  <text x="645" y="360" fill="#6ee7b7" font-size="10" font-weight="600" text-anchor="middle">Human PR Audit &amp; Clean Bisect</text>
  <text x="645" y="374" fill="#d1fae5" font-size="8.5" text-anchor="middle">Zero uncomprehended merges</text>
</svg>`,
      bierutCaption:
        'A workflow architecture mapping the three team AI integration modes into a single version-control discipline where every AI-assisted change is isolated, tagged, and human-verified before merge.',
      annotations: [
        {
          step: '1',
          label: 'Upfront Team Alignment',
          explanation:
            'Daily stand-ups coordinate shared utilities and codify linting and framework rules in the project README before prompting.',
        },
        {
          step: '2',
          label: 'Role-Specific AI Mode Selection',
          explanation:
            'Teams switch between First Drafter, Pair Programmer, and Validator depending on task novelty and reliability requirements.',
        },
        {
          step: '3',
          label: 'Atomic Tagged Commits',
          explanation:
            'Separating unrelated AI edits into distinct [AI-assisted] commits allows instant git bisect and targeted rollbacks.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'vcfp-ch01-mm1',
      name: 'The Accidental vs. Essential Complexity Split',
      tagline:
        'AI automates Fred Brooks’ accidental syntax friction but leaves essential problem modeling to human engineers.',
      naiveIntuition:
        'Because an AI generates a working prototype in minutes, it has solved 70% of the total engineering effort required to ship a product.',
      firstPrinciplesReality:
        'The initial 70% consists of patterned boilerplate and familiar framework scaffolding, whereas the remaining 30% holds the non-linear complexity of race conditions, edge cases, and system evolution.',
      howToApply:
        'Budget time saved on initial AI scaffolding directly into hardening types, testing boundary conditions, and auditing architectural coupling.',
    },
    {
      id: 'vcfp-ch01-mm2',
      name: 'The Knowledge Paradox & Supervised Junior Heuristic',
      tagline:
        'AI accelerates experts who already hold mental models while trapping novices who use generation as a substitute for comprehension.',
      naiveIntuition:
        'Non-engineers and junior developers gain the highest net productivity boost from AI coding tools because the model writes code they could not write alone.',
      firstPrinciplesReality:
        'LLMs behave like fast, overconfident junior developers that stitch plausible patterns without causal understanding, requiring senior pattern recognition to spot hidden landmines.',
      howToApply:
        'Never merge AI-generated code you cannot explain line by line, and manually refactor monolithic AI output into small, testable modules.',
    },
    {
      id: 'vcfp-ch01-mm3',
      name: 'Bootstrappers vs. Iterators Operating Modes',
      tagline:
        'Distinguish between 0-to-1 prototype generation and continuous daily workflow augmentation.',
      naiveIntuition:
        'Vibe coding is a single uniform workflow where developers prompt an agent to build and maintain an entire application end to end.',
      firstPrinciplesReality:
        'Bootstrappers use tools like Bolt or v0 to turn concepts into throwaway validation prototypes in hours, while Iterators use Cursor or Copilot inside strict review loops for durable production code.',
      howToApply:
        'Use Bootstrapper mode strictly to validate product hypotheses with early users, then switch to Iterator discipline with isolated commits and unit tests for production systems.',
    },
  ],
  deepSections: [
    {
      id: 'vcfp-ch01-sec1',
      sectionNumber: '1.1',
      title: 'The 70% Wall & The Two Steps Back Antipattern',
      subtitle:
        'Why statistical code synthesis stalls on edge cases and triggers cascading regression loops',
      coreMechanism:
        'AI assistants generate functional prototypes rapidly because standard CRUD scaffolding and UI layouts match high-probability patterns in their training data. Once implementation reaches the final 30%—unusual inputs, concurrency hazards, performance constraints, and maintainable module boundaries—the model lacks an internal mental model of system invariants. It remixes plausible tokens without understanding long-term architectural consequences.\n\nWhen developers attempt to repair bugs in uncomprehended code by prompting the model repeatedly, they trigger the "Two Steps Back" antipattern. A local patch mutates shared assumptions and breaks two adjacent features, compounding into a brittle house-of-cards codebase as autonomous agents chain unverified decisions together.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Rapid 70% Scaffolding',
          detail:
            'A developer prompts v0, Bolt, or Cursor to generate a working happy-path prototype in hours.',
        },
        {
          step: '2',
          title: 'The Last-Mile Collision',
          detail:
            'Real-world edge cases, race conditions, or state bugs surface outside the training pattern distribution.',
        },
        {
          step: '3',
          title: 'Cascading Regression Loop',
          detail:
            'Asking the AI to patch code the human does not understand introduces two new regressions per fix.',
        },
      ],
      keyTakeaways: [
        'AI confidence regularly exceeds its reliability, producing polished code that conceals subtle state bugs or hallucinated APIs.',
        'Relying on autonomous agents without foundational debugging skills converts engineers into passive observers unable to intervene during cascading failures.',
      ],
      commonPitfalls: [
        'Playing whack-a-mole by pasting error traces back into an LLM without diagnosing the underlying state invariant.',
        'Mistaking an investor-ready happy-path demo for self-serve software that handles slow networks, accessibility, and clear user error states.',
      ],
      figures: [
        {
          file: 'ch03_figure_1_1744816025642764.png',
          originalLabel: 'Figure 1-1. The “two steps back” antipattern',
          bierutTitle: 'Expose How Blind AI Bug Patching Multiplies System Regressions',
          editorialAnalysis:
            'The state diagram traces the closed feedback trap that occurs when a developer delegates bug diagnosis to an LLM without understanding the underlying code structure. Each seemingly reasonable local patch violates unstated invariants elsewhere in the module, branching one small defect into two new failures in an endless cycle.',
          keyTakeaways: [
            'Break the loop by reverting to the last clean Git commit and diagnosing the root cause manually before re-prompting.',
            'Constrain AI fixes to isolated, single-responsibility functions backed by regression unit tests.',
          ],
        },
      ],
    },
    {
      id: 'vcfp-ch01-sec2',
      sectionNumber: '1.2',
      title: 'Team Workflow Patterns: First Drafter, Pair, and Validator',
      subtitle:
        'Structuring human-AI collaboration across initial scaffolding, interactive coding, and automated QA',
      coreMechanism:
        'Integrating AI into a multi-developer engineering organization requires explicit coordination so teammates do not generate duplicate utilities or conflicting architectural styles. High-performing teams standardize across three distinct operational modes: AI as First Drafter for initial scaffolding, AI as Pair Programmer for tight conversational iteration, and AI as Validator for automated test synthesis and security scanning.\n\nEach mode shifts the verification boundary deliberately. In First Drafter mode, teams align during daily stand-ups and embed coding conventions in the project README to steer generation upfront. In Pair Programmer mode, developers initiate fresh context sessions per task and cross-check library calls against official documentation. In Validator mode, human engineers author core logic while tools like Snyk, DeepCode, Qodo, and TestGPT scan for missing input sanitization and edge-case test gaps.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Pre-Prompt Team Alignment',
          detail:
            'Coordinate shared helpers in stand-ups and document preferred APIs and linting standards in the repository README.',
        },
        {
          step: '2',
          title: 'Scoped Session Execution',
          detail:
            'Run focused prompts in clean AI sessions per task, sharing proven prompts across the team issue tracker.',
        },
        {
          step: '3',
          title: 'Dual Human-AI Validation',
          detail:
            'Run automated AI security and test generators first, then focus human review on complex business logic and UX polish.',
        },
      ],
      keyTakeaways: [
        'Codifying project conventions (such as functional components or Fetch over Axios) directly in README guidance produces uniform AI output across the team.',
        'Starting a new AI session for each distinct task prevents context pollution and keeps suggestions anchored to the active module.',
      ],
      commonPitfalls: [
        'Allowing multiple developers to prompt AI independently for common utilities like date formatting, creating redundant helpers across the codebase.',
        'Using a single sprawling chat thread across unrelated features until stale context degrades code accuracy.',
      ],
    },
    {
      id: 'vcfp-ch01-sec3',
      sectionNumber: '1.3',
      title: 'Version Control Hygiene & The Golden Rules of Vibe Coding',
      subtitle:
        'Enforcing atomic Git commits, traceability tags, and zero-blind-merge governance',
      coreMechanism:
        'Rapid AI code generation increases change volume, making granular version control the primary safety net against regressions. When an AI assistant modifies multiple files to optimize rendering performance while simultaneously altering UI copy, bundling those edits into a single commit makes git bisect and targeted rollbacks impossible.\n\nDisciplined vibe coding enforces atomic, isolated commits for each distinct AI-assisted change, annotated with traceability tags such as [AI-assisted] to alert reviewers to inspect edge cases closely. Combined with Architecture Decision Records (ADRs), shared prompt repositories, and a strict prohibition against merging uncomprehended code, teams capture AI speed without accumulating hidden technical debt.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Checkpoint After Every Accepted Chunk',
          detail:
            'Commit working code immediately after verifying an AI-generated feature or refactor so rollbacks stay granular.',
        },
        {
          step: '2',
          title: 'Separate Concerns Across Commits',
          detail:
            'Split unrelated AI edits (such as performance tuning vs. UI copy updates) into independent commits tagged with [AI-assisted].',
        },
        {
          step: '3',
          title: 'Enforce Comprehension & ADR Documentation',
          detail:
            'Subject AI code to standard PR review, verify line-by-line understanding, and record architectural rationale in ADRs.',
        },
      ],
      keyTakeaways: [
        'Tagging commits with [AI] or [AI-assisted] establishes origin traceability so code reviewers prioritize boundary-condition checks.',
        'Documenting architectural decisions and maintaining a shared repository of effective prompts scales individual AI wins across the entire engineering team.',
      ],
      commonPitfalls: [
        'Committing a sweeping multi-concern agent diff in one batch, forcing a full feature revert when a minor side effect fails in staging.',
        'Merging plausible AI-generated logic that no engineer on the team fully understands, creating unmaintainable black-box modules.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'AI Development Archetypes & Team Collaboration Patterns',
      description:
        'Comparing operational workflows across velocity, failure risk, and mandatory engineering guardrails.',
      headers: [
        'Workflow Pattern',
        'Primary Tools',
        'Sweet Spot',
        'Dominant Failure Mode',
        'Mandatory Guardrail',
      ],
      rows: [
        [
          'Bootstrapper (0-to-MVP)',
          'Bolt, v0, Screenshot-to-Code',
          'Rapid UI prototypes & early user validation in hours',
          'Demo-Quality Trap & House-of-Cards collapse on edge cases',
          'Treat as throwaway validation or refactor modules before prod',
        ],
        [
          'AI as First Drafter',
          'Cursor, Cline, WindSurf',
          'Scaffolding standard features & patterned boilerplate',
          'Duplicate team utilities & inconsistent library choices',
          'Coordinate in stand-up & codify README style rules upfront',
        ],
        [
          'AI as Pair Programmer',
          'Copilot, Cursor Chat',
          'Daily iterative coding, complex refactors & API integration',
          'Context drift across long sessions & hallucinated methods',
          'Fresh session per task, tight review loops & doc cross-checks',
        ],
        [
          'AI as Validator',
          'Snyk, DeepCode, Qodo, TestGPT',
          'Security vulnerability scans, edge-case test synthesis & QA',
          'Over-reliance on automated scans for nuanced UX or domain logic',
          'Pair preliminary AI scans with human review on critical paths',
        ],
      ],
      verdictRule:
        'Use Bootstrapper and First Drafter modes to compress initial 0-to-70% scaffolding, but immediately transition to Pair Programmer and Validator modes with isolated [AI-assisted] Git commits to engineer the final 30% for production.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'vcfp-ch01-scen1',
      title: 'Breaking the "Two Steps Back" Regression Spiral in an MVP',
      roleAndContext:
        'A solo product builder using Bolt and Cursor to turn a Figma design into a customer-facing web application.',
      symptomOrFailure:
        'After reaching 70% completion in two days, attempting to fix a minor state synchronization bug via repeated AI prompts breaks authentication routing and spawns two new UI rendering crashes.',
      naiveFixAndWhyItFails:
        'Pasting each new stack trace back into the same long AI chat session and clicking "Accept All" compounds broken assumptions because the model lacks a causal model of the app state.',
      firstPrinciplesSolution:
        'Revert to the last working Git commit, open a fresh task-scoped AI session, decompose the monolithic component into small typed modules, and write unit tests for the state transition before re-prompting.',
      measurableOutcome:
        'Eliminates cascading regressions and restores deterministic debugging across the remaining 30% production hardening phase.',
    },
    {
      id: 'vcfp-ch01-scen2',
      title: 'Preventing Redundant Utilities & Entangled Commits Across a Team',
      roleAndContext:
        'A six-engineer agile squad integrating Cursor and Copilot into their daily sprint workflow.',
      symptomOrFailure:
        'Two engineers independently prompt AI to build nearly identical date-formatting utilities, while another engineer lands a single 1,200-line AI commit mixing list rendering optimizations with UI copy edits that breaks staging.',
      naiveFixAndWhyItFails:
        'Banning AI tools or manually untangling the 1,200-line commit line by line wastes sprint velocity and fails to establish repeatable team standards.',
      firstPrinciplesSolution:
        'Coordinate planned AI tasks during daily stand-ups, add an "AI Usage Tips" conventions block to the project README, and enforce isolated commits tagged with [AI-assisted] per logical change.',
      measurableOutcome:
        'Zero duplicate utility helpers merged and sub-minute git bisect isolation when an AI-assisted optimization introduces an edge-case regression.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'vcfp-ch01-q1',
        scenarioPrompt:
          'A team rapidly builds an AI-generated web application that dazzles stakeholders during a live happy-path demo, but crashes in production when users submit unexpected inputs over slow mobile connections. Which mechanism from Chapter 1 explains this failure?',
        options: [
          {
            label: 'A',
            text: 'The model context window overflowed during initial boilerplate synthesis.',
            isCorrect: false,
            explanation:
              'Initial happy-path synthesis succeeded; the failure stems from unaddressed last-mile essential complexity and missing UX polish.',
          },
          {
            label: 'B',
            text: 'The Demo-Quality Trap: AI automates the 70% happy-path accidental complexity but omits the 30% essential edge cases, accessibility, and resilient error states unless directed by human craft.',
            isCorrect: true,
            explanation:
              'AI models remix common patterns for the happy path, leaving edge-case resilience, slow-network performance, and human-centric error states to experienced engineering oversight.',
          },
          {
            label: 'C',
            text: 'The team used the AI as Validator pattern instead of the Bootstrapper pattern.',
            isCorrect: false,
            explanation:
              'Using AI only as a Bootstrapper without human validation and polish is what causes the Demo-Quality Trap.',
          },
          {
            label: 'D',
            text: 'Static linting rules in the project README prevented the AI from generating error handlers.',
            isCorrect: false,
            explanation:
              'README standards align code uniformity; they do not block error handling unless misconfigured.',
          },
        ],
      },
      {
        id: 'vcfp-ch01-q2',
        scenarioPrompt:
          'Why do senior engineers extract sustainable velocity from tools like Cursor and Copilot while non-engineers and juniors frequently hit the "Two Steps Back" wall?',
        options: [
          {
            label: 'A',
            text: 'Senior engineers write longer, multi-page prompts that force the LLM to invent novel algorithms.',
            isCorrect: false,
            explanation:
              'LLMs do not invent fundamentally new abstractions beyond their training data, and effective prompts are concise and focused.',
          },
          {
            label: 'B',
            text: 'Senior engineers apply the Knowledge Paradox: they continuously refactor AI output into small modules, harden types and interfaces, and inject missing error handling using prior mental models.',
            isCorrect: true,
            explanation:
              'Seniors use AI to accelerate what they already know how to verify and constrain, whereas novices lack the mental models to diagnose why a plausible patch breaks adjacent systems.',
          },
          {
            label: 'C',
            text: 'Junior engineers commit to Git too frequently, interrupting the autonomous agent loop.',
            isCorrect: false,
            explanation:
              'Frequent, granular commits are a core best practice that protects against regressions.',
          },
          {
            label: 'D',
            text: 'Senior engineers avoid version control until the entire 100% feature is generated by the agent.',
            isCorrect: false,
            explanation:
              'Deferring commits destroys rollback granularity and makes disentangling AI regressions much harder.',
          },
        ],
      },
      {
        id: 'vcfp-ch01-q3',
        scenarioPrompt:
          'An engineer uses an autonomous coding agent to optimize list rendering performance, and the agent also rewrites several workout completion UI messages in the same session. How should the engineer handle version control?',
        options: [
          {
            label: 'A',
            text: 'Commit both changes together under a single "Agent updates" message to preserve session history.',
            isCorrect: false,
            explanation:
              'Bundling unrelated AI edits makes it difficult to revert or bisect if the performance optimization introduces a bug.',
          },
          {
            label: 'B',
            text: 'Isolate the changes into two separate commits ("Optimize list rendering performance [AI-assisted]" and "Update UI copy for workout completion message [AI-assisted]").',
            isCorrect: true,
            explanation:
              'Isolating distinct AI-introduced changes and tagging them with [AI-assisted] ensures clean rollback boundaries and signals reviewers to inspect edge cases.',
          },
          {
            label: 'C',
            text: 'Skip code review on the UI copy commit because AI models do not make mistakes on strings.',
            isCorrect: false,
            explanation:
              'Golden Rule 8 states that all code, whether human or AI-written, must undergo rigorous code review.',
          },
          {
            label: 'D',
            text: 'Squash all weekly AI commits into a single untagged merge commit on Friday.',
            isCorrect: false,
            explanation:
              'Erasing granular history and origin tags removes the safety net needed to bisect subtle AI-introduced defects.',
          },
        ],
      },
      {
        id: 'vcfp-ch01-q4',
        scenarioPrompt:
          'When integrating a newly released third-party library using the "AI as Pair Programmer" pattern, what workflow discipline prevents subtle integration bugs?',
        options: [
          {
            label: 'A',
            text: 'Keep the same AI chat session open from previous unrelated tasks so the model remembers the whole repository.',
            isCorrect: false,
            explanation:
              'Best practice is to initiate a new AI session for each distinct task to maintain context clarity.',
          },
          {
            label: 'B',
            text: 'Prompt the AI to draft the initial integration in a fresh session, then cross-reference its suggestions against official library documentation and commit verified increments frequently.',
            isCorrect: true,
            explanation:
              'LLMs frequently hallucinate nonexistent functions or outdated APIs; cross-referencing official documentation inside a tight feedback loop verifies accuracy while accelerating learning.',
          },
          {
            label: 'C',
            text: 'Delegate full autonomous deployment to the agent without reading the integration diff.',
            isCorrect: false,
            explanation:
              'Golden Rule 9 forbids merging code you do not thoroughly comprehend.',
          },
          {
            label: 'D',
            text: 'Disable static analysis tools like Snyk or DeepCode until the library is in production.',
            isCorrect: false,
            explanation:
              'AI validators should run early in the workflow to catch insecure configurations or missing input sanitization before release.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'vcfp-ch01-fc1',
        category: 'foundation',
        front: 'What is the core mechanism behind the "70% Problem" in AI-assisted coding?',
        back: 'AI excels at generating the initial 70% of patterned boilerplate (accidental complexity), but struggles with the final 30% requiring edge cases, architecture, and maintainability (essential complexity).',
        mentalHook: '70% Accidental Pattern Remix vs. 30% Essential Human Judgment.',
      },
      {
        id: 'vcfp-ch01-fc2',
        category: 'foundation',
        front: 'What is the "Knowledge Paradox" in AI-assisted software development?',
        back: 'Senior engineers use AI to accelerate tasks they already understand how to verify, whereas juniors and non-engineers try to use AI to bypass learning fundamentals, trapping themselves when bugs arise.',
        mentalHook: 'AI multiplies existing mental models; it cannot replace missing ones.',
      },
      {
        id: 'vcfp-ch01-fc3',
        category: 'architecture',
        front: 'How do "Bootstrappers" differ from "Iterators" in their AI development workflows?',
        back: 'Bootstrappers use tools like Bolt and v0 to take rough concepts from 0 to working MVP in hours, while Iterators use Cursor and Copilot daily for refactoring, tests, and pair problem-solving.',
        mentalHook: 'Bootstrappers = 0-to-1 Sprint; Iterators = Daily Production Craft.',
      },
      {
        id: 'vcfp-ch01-fc4',
        category: 'evaluation',
        front: 'What causes the "Two Steps Back" antipattern when debugging with AI?',
        back: 'Asking an AI to patch a bug in code you do not understand produces a plausible local fix that violates hidden system assumptions, spawning two new bugs for every one resolved.',
        mentalHook: 'Whack-a-mole debugging without a mental model multiplies regressions.',
      },
      {
        id: 'vcfp-ch01-fc5',
        category: 'optimization',
        front: 'How should developers structure Git commits when working with AI coding assistants?',
        back: 'Commit frequently after each verified chunk, isolate distinct AI changes into separate commits, and tag messages (e.g., [AI-assisted]) for review traceability and clean rollbacks.',
        mentalHook: 'One concern per commit + [AI-assisted] tag = instant git bisect safety.',
      },
      {
        id: 'vcfp-ch01-fc6',
        category: 'security',
        front: 'How does the "AI as Validator" pattern complement human quality assurance?',
        back: 'Tools like Snyk, DeepCode, Qodo, and TestGPT automate preliminary vulnerability scans and edge-case test generation so humans can focus review on complex business logic and UX.',
        mentalHook: 'AI scans the breadth of known flaws; humans audit the depth of intent.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'vcfp-ch01-feyn1',
        conceptTitle: 'The 70% Problem & Fred Brooks’ Complexity Split',
        prompt:
          'Explain to a non-technical founder why their AI-generated prototype reached 70% completion in a single afternoon, yet requires weeks of senior engineering effort to finish the remaining 30% for production.',
        rubricChecklist: [
          'Distinguishes Fred Brooks’ accidental complexity (repetitive boilerplate/syntax) from essential complexity (domain logic, race conditions, architecture).',
          'Explains that LLMs remix familiar training patterns rather than reasoning from first principles or taking accountability.',
          'Describes the "Two Steps Back" regression loop and "House of Cards" fragility when patching uncomprehended code.',
          'Contrasts the "Demo-Quality Trap" (happy path only) against self-serve software polish (edge cases, slow networks, clear error states).',
        ],
        modelExplanation:
          'AI coding tools build the first 70% of an app in hours because login forms, basic routes, and UI layouts are "accidental complexity"—repetitive patterns that appear millions of times in training data. However, the final 30% is "essential complexity": handling race conditions, malicious inputs, slow mobile networks, and modular architecture so a change in one screen does not break three others. Because an AI stitches patterns together without truly understanding your business invariants, asking it to blindly fix edge cases triggers the "Two Steps Back" trap where every patch creates two new bugs. Turning a flashy demo into self-serve production software requires a human engineer to refactor that draft into small modules, harden types, and design resilient error states.',
      },
      {
        id: 'vcfp-ch01-feyn2',
        conceptTitle: 'Team-Scale Vibe Coding & Version Control Discipline',
        prompt:
          'Design a team workflow for five engineers adopting Cursor and Copilot so they accelerate delivery without creating duplicate utilities, context-polluted hallucinations, or un-revertable Git history.',
        rubricChecklist: [
          'Includes upfront stand-up coordination and README style/convention guidelines to prevent redundant helpers.',
          'Maps tasks across the three workflow modes: First Drafter, Pair Programmer (fresh sessions per task), and Validator.',
          'Requires frequent, isolated Git commits tagged with [AI-assisted] so unrelated edits never tangle in one diff.',
          'Enforces Golden Rules: mandatory code review, ADR documentation, and never merging code the engineer cannot explain.',
        ],
        modelExplanation:
          'To scale AI coding across a five-engineer team, start with coordination: announce planned AI scaffolding in daily stand-ups so two developers do not generate duplicate helpers, and document framework conventions in an "AI Usage Tips" section of the README. During implementation, open a fresh AI session for each distinct task to prevent context drift, and cross-check generated third-party API calls against official docs. In Git, commit immediately after verifying each chunk, separate unrelated changes (like performance tuning vs. UI copy) into distinct commits tagged with [AI-assisted], and document key decisions in ADRs. Finally, use AI validators to generate unit tests and security scans, while enforcing a strict human PR rule: never merge AI code you cannot explain line by line.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'vcfp-70-percent-problem',
        label: 'The 70% Problem',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The structural threshold where AI rapidly automates 70% of patterned boilerplate (accidental complexity) but stalls on the final 30% of edge cases and maintainable architecture (essential complexity).',
        formulaOrRule: 'Total Software = 70% Accidental (AI Pattern Remix) + 30% Essential (Human Engineering)',
        whyItMatters:
          'Prevents teams from mistaking rapid initial prototyping velocity for production readiness.',
      },
      {
        id: 'vcfp-two-steps-back',
        label: 'Two Steps Back Antipattern',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'A degenerative debugging cycle where prompting an AI to fix a bug in uncomprehended code introduces a locally plausible change that breaks two adjacent system invariants.',
        whyItMatters:
          'Explains why blind reliance on conversational or agentic bug fixing compounds technical debt into a house of cards.',
      },
      {
        id: 'vcfp-knowledge-paradox',
        label: 'The Knowledge Paradox',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The asymmetry whereby senior engineers use AI to accelerate what they already know how to verify and constrain, while novices use AI to bypass learning fundamentals and become dependent.',
        whyItMatters:
          'Highlights why foundational debugging and architectural judgment become more critical as autonomous agents advance.',
      },
      {
        id: 'vcfp-demo-quality-trap',
        label: 'The Demo-Quality Trap',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Shipping an AI-bootstrapped prototype whose happy path dazzles stakeholders but fails real users due to cryptic errors, unhandled edge cases, poor accessibility, and slow-device lag.',
        whyItMatters:
          'Separates throwaway validation prototypes from self-serve software that users trust without support intervention.',
      },
      {
        id: 'vcfp-tri-modal-workflows',
        label: 'First Drafter / Pair / Validator Modes',
        category: 'architecture',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Three structured team workflows where AI acts as initial code generator (First Drafter), interactive collaborator in scoped sessions (Pair Programmer), or automated QA/security scanner (Validator).',
        whyItMatters:
          'Provides clear operational boundaries for solo and team developers to integrate AI across the SDLC.',
      },
      {
        id: 'vcfp-atomic-ai-commits',
        label: 'Isolated & Tagged Git Commits',
        category: 'optimization',
        chapterNumber: 1,
        importance: 3,
        definition:
          'Version-control discipline that commits each verified AI change frequently, separates unrelated edits, and tags commit messages with [AI-assisted] for audit traceability.',
        whyItMatters:
          'Enables instant git bisect diagnosis and surgical rollbacks when AI-generated code introduces subtle regressions.',
      },
    ],
    edges: [
      {
        source: 'vcfp-70-percent-problem',
        target: 'vcfp-two-steps-back',
        relationship: 'prerequisite_for',
        explanation:
          'Hitting the final 30% essential complexity wall without a mental model triggers the Two Steps Back regression loop.',
      },
      {
        source: 'vcfp-70-percent-problem',
        target: 'vcfp-demo-quality-trap',
        relationship: 'prerequisite_for',
        explanation:
          'Mistaking the initial 70% happy-path scaffold for finished software directly produces the Demo-Quality Trap.',
      },
      {
        source: 'vcfp-knowledge-paradox',
        target: 'vcfp-two-steps-back',
        relationship: 'mitigates',
        explanation:
          'Senior architectural comprehension and modular refactoring break the whack-a-mole regression spiral.',
      },
      {
        source: 'vcfp-tri-modal-workflows',
        target: 'vcfp-demo-quality-trap',
        relationship: 'mitigates',
        explanation:
          'Combining Pair Programmer verification and Validator security/test scans hardens happy-path drafts into self-serve software.',
      },
      {
        source: 'vcfp-atomic-ai-commits',
        target: 'vcfp-two-steps-back',
        relationship: 'mitigates',
        explanation:
          'Granular, isolated [AI-assisted] commits provide clean rollback checkpoints whenever an AI patch breaks adjacent functionality.',
      },
      {
        source: 'vcfp-atomic-ai-commits',
        target: 'vcfp-tri-modal-workflows',
        relationship: 'part_of',
        explanation:
          'Frequent, concern-isolated Git commits form the version-control backbone of First Drafter and Pair Programmer workflows.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 1 sections (70% Problem, Bootstrappers vs Iterators, Common Failure Patterns, Two Steps Back, Demo-Quality Trap, First Drafter, Pair Programmer, Validator, Golden Rules) plus extracted Figure 1-1.',
  },
};
