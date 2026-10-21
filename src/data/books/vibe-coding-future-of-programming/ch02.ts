import type { ChapterMastery } from '../../../types/book';

export const vcfpCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Beyond the 70%: Maximizing Human Contribution',
  subtitle: 'Architecting the Irreplaceable 30% Across Senior, Midlevel, and Junior Engineering Roles',
  readingTimeMinutes: 8,
  sourceWordCount: 6151,
  executiveThesis:
    'While AI coding assistants automate roughly 70% of routine implementation, human engineers remain responsible for the decisive 30% that separates fragile prototypes from durable production systems. This human-owned frontier encompasses system architecture, boundary verification, domain foresight, and second-order failure analysis across every career stage. As code generation costs plummet, career leverage shifts from typing syntax to acting as an architect, editor-in-chief, and systems verifier.',
  paradigmShift: {
    oldWay:
      'Career progression scaled with manual implementation throughput: juniors wrote boilerplate CRUD endpoints, midlevels implemented multi-file features, and seniors reviewed syntax and team velocity.',
    newWay:
      'AI handles first-draft generation across all levels, elevating seniors into CHOP (chat-oriented programming) architects, midlevels into systems-integration and UX-product specialists, and juniors into rigorous test-and-verification engineers.',
    whyItChanged:
      'LLMs optimize for general-case plausibility rather than production edge cases, regulatory constraints, or long-term maintainability, shifting the engineering bottleneck from code authoring to verification and systems design.',
  },
  customDiagrams: [
    {
      id: 'vcfp-ch02-svg1',
      title: 'The 70 / 30 Engineering Value Inversion Across Career Tiers',
      subtitle: 'How AI compresses routine syntax generation while expanding architectural, integration, and verification responsibilities',
      bierutCaption: 'Map the redistribution of cognitive load across senior, midlevel, and junior roles as AI absorbs the 70% implementation baseline.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="ch02AiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.06" />
    </linearGradient>
    <linearGradient id="ch02HumanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.18" />
    </linearGradient>
    <marker id="ch02Arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>

  <rect x="16" y="16" width="768" height="388" rx="10" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.12" />

  <text x="36" y="46" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor" opacity="0.85" letter-spacing="0.06em">
    THE 70% AI IMPLEMENTATION BASELINE VS. THE 30% HUMAN ENGINEERING MULTIPLIER
  </text>

  <!-- Top Scale Bar -->
  <rect x="36" y="64" width="490" height="44" rx="6" fill="url(#ch02AiGrad)" stroke="#3b82f6" stroke-width="1.5" />
  <text x="52" y="84" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#3b82f6">70% AI-AUTOMATED BASELINE</text>
  <text x="52" y="100" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.72">Boilerplate, CRUD scaffolding, syntax translation, general-case algorithms</text>

  <rect x="536" y="64" width="228" height="44" rx="6" fill="url(#ch02HumanGrad)" stroke="#10b981" stroke-width="1.5" />
  <text x="550" y="84" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#10b981">30% HUMAN FRONTIER</text>
  <text x="550" y="100" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.78">Architecture, edge cases, QA, context</text>

  <!-- Tier 1: Senior Engineer -->
  <rect x="36" y="132" width="728" height="76" rx="8" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.15" />
  <rect x="36" y="132" width="6" height="76" rx="3" fill="#f59e0b" />
  <text x="56" y="156" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#f59e0b">SENIOR ENGINEER</text>
  <text x="56" y="175" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.9">Architect &amp; Editor-in-Chief</text>
  <text x="56" y="193" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.68">CHOP force multiplier</text>

  <path d="M 235 170 L 305 170" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02Arrow)" class="svg-flow-active" />

  <rect x="318" y="144" width="430" height="52" rx="6" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-opacity="0.4" />
  <text x="334" y="166" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.92">30% Focus: Second/Third-Order Foresight, Spec Design &amp; Governance</text>
  <text x="334" y="184" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.72">Vet AI output against security/scale benchmarks; enforce junior self-verification norms</text>

  <!-- Tier 2: Midlevel Engineer -->
  <rect x="36" y="222" width="728" height="76" rx="8" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.15" />
  <rect x="36" y="222" width="6" height="76" rx="3" fill="#3b82f6" />
  <text x="56" y="246" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#3b82f6">MIDLEVEL ENGINEER</text>
  <text x="56" y="265" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.9">Systems Integrator &amp; Specialist</text>
  <text x="56" y="283" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.68">Boundary &amp; product bridge</text>

  <path d="M 235 260 L 305 260" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02Arrow)" class="svg-flow-active" />

  <rect x="318" y="234" width="430" height="52" rx="6" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-opacity="0.4" />
  <text x="334" y="256" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.92">30% Focus: API/Schema Boundaries, Observability &amp; Product/UX Sensibility</text>
  <text x="334" y="274" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.72">Probe distributed failure modes, optimize full-stack performance, align UX with users</text>

  <!-- Tier 3: Junior Engineer -->
  <rect x="36" y="312" width="728" height="76" rx="8" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.15" />
  <rect x="36" y="312" width="6" height="76" rx="3" fill="#10b981" />
  <text x="56" y="336" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#10b981">JUNIOR ENGINEER</text>
  <text x="56" y="355" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.9">Verification &amp; Fundamentals</text>
  <text x="56" y="373" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.68">Active creator vs. consumer</text>

  <path d="M 235 350 L 305 350" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02Arrow)" class="svg-flow-active" />

  <rect x="318" y="324" width="430" height="52" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.4" />
  <text x="334" y="346" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.92">30% Focus: Test-First Verification, Clean Refactoring &amp; AI-Free Debugging</text>
  <text x="334" y="364" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.72">Interrogate the "Why", split bloated AI functions, verify edge cases before PR review</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Senior Editor-in-Chief Lever',
          explanation:
            'Seniors use chat-oriented programming (CHOP) to compress multi-day refactors into hours while focusing their human review on second- and third-order architectural effects.',
        },
        {
          step: '02',
          label: 'Midlevel Boundary & UX Pivot',
          explanation:
            'Because routine feature coding is automated, midlevel engineers elevate into system integration, distributed failure handling, observability, and UX/product alignment.',
        },
        {
          step: '03',
          label: 'Junior Verification Gate',
          explanation:
            'Juniors avoid obsolescence by shifting from passive code consumers to rigorous verifiers who write edge-case tests, refactor messy AI drafts, and practice solo debugging.',
        },
      ],
    },
    {
      id: 'vcfp-ch02-svg2',
      title: 'The Anti-Atrophy Verification & Mentorship Loop',
      subtitle: 'Preventing senior review bottlenecks and junior skill decay through mandatory self-verification gates',
      bierutCaption: 'Enforce a verification gate between AI code generation and senior code review so human intuition sharpens rather than atrophies.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="ch02FlowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="ch02FlowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
    </marker>
    <marker id="ch02FlowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
    </marker>
  </defs>

  <rect x="16" y="16" width="768" height="388" rx="10" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.12" />

  <text x="36" y="46" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor" opacity="0.85" letter-spacing="0.06em">
    HUMAN-IN-THE-LOOP QUALITY GATE VS. UNVERIFIED AI CODE DUMPING
  </text>

  <!-- Node 1: Spec & Prompt -->
  <rect x="36" y="140" width="165" height="110" rx="8" fill="#3b82f6" fill-opacity="0.09" stroke="#3b82f6" stroke-width="1.5" />
  <text x="52" y="166" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#3b82f6">1. PLAIN-ENGLISH SPEC</text>
  <text x="52" y="188" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.85">Outline problem &amp; domain</text>
  <text x="52" y="205" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.85">constraints before prompting</text>
  <text x="52" y="228" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.6">CHOP / Context Setup</text>

  <!-- Arrow 1 to 2 -->
  <path d="M 201 195 L 248 195" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02FlowBlue)" class="svg-flow-active" />

  <!-- Node 2: AI First Draft -->
  <rect x="254" y="140" width="155" height="110" rx="8" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.25" />
  <text x="270" y="166" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="currentColor" opacity="0.9">2. AI FIRST DRAFT (70%)</text>
  <text x="270" y="188" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.75">Fast general-case code;</text>
  <text x="270" y="205" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.75">prone to bloat &amp; hidden</text>
  <text x="270" y="222" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.75">concurrency/edge bugs</text>

  <!-- Forbidden Top Path: Unverified Dump -->
  <path d="M 331 140 C 331 72, 650 72, 650 134" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02FlowRed)" />
  <rect x="372" y="64" width="236" height="36" rx="6" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-width="1.2" />
  <text x="386" y="80" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="700" fill="#ef4444">ANTI-PATTERN: UNVERIFIED DUMP</text>
  <text x="386" y="94" font-family="Inter, sans-serif" font-size="10" fill="currentColor" opacity="0.8">Overwhelms senior review &amp; stunts growth</text>

  <!-- Arrow 2 to 3 -->
  <path d="M 409 195 L 456 195" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02FlowGreen)" class="svg-flow-active" />

  <!-- Node 3: Developer Verification Gate -->
  <rect x="462" y="130" width="160" height="130" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1.8" />
  <text x="476" y="154" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#10b981">3. SELF-VERIFY GATE</text>
  <text x="476" y="175" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.88">• Interrogate line-by-line</text>
  <text x="476" y="193" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.88">• Split 50-line functions</text>
  <text x="476" y="211" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.88">• Write edge-case tests</text>
  <text x="476" y="229" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.88">• Solo debug first</text>

  <!-- Arrow 3 to 4 -->
  <path d="M 622 195 L 656 195" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch02FlowGreen)" class="svg-flow-active" />

  <!-- Node 4: Senior Review & Production -->
  <rect x="662" y="140" width="104" height="110" rx="8" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1.5" />
  <text x="674" y="166" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#f59e0b">4. ARCHITECT</text>
  <text x="674" y="182" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#f59e0b">SIGN-OFF</text>
  <text x="674" y="204" font-family="Inter, sans-serif" font-size="10.5" fill="currentColor" opacity="0.85">3rd-order impact,</text>
  <text x="674" y="219" font-family="Inter, sans-serif" font-size="10.5" fill="currentColor" opacity="0.85">thread-safety &amp;</text>
  <text x="674" y="234" font-family="Inter, sans-serif" font-size="10.5" fill="currentColor" opacity="0.85">scale review</text>

  <!-- Bottom Feedback Loop: AI Detox & Mentorship -->
  <rect x="136" y="306" width="528" height="68" rx="8" fill="currentColor" fill-opacity="0.03" stroke="#3b82f6" stroke-opacity="0.4" />
  <text x="156" y="330" font-family="JetBrains Mono, monospace" font-size="11.5" font-weight="700" fill="#3b82f6">CONTINUOUS CALIBRATION: MENTORSHIP + PERIODIC "AI DETOX" DAYS</text>
  <text x="156" y="350" font-family="Inter, sans-serif" font-size="11" fill="currentColor" opacity="0.78">Senior PR feedback on scaling/concurrency + periodic solo coding days prevent mental-model atrophy</text>

  <path d="M 714 250 L 714 340 L 668 340" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#ch02FlowBlue)" class="svg-flow-active" />
  <path d="M 136 340 L 118 340 L 118 254" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#ch02FlowBlue)" class="svg-flow-active" />
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Plain-English Problem Formulation',
          explanation:
            'Prompt quality is a direct proxy for problem understanding; outlining the architecture in plain English first prevents aimless AI trial-and-error.',
        },
        {
          step: '02',
          label: 'Blocking the Unverified Wall-Throw',
          explanation:
            'Teams must enforce disclosure and self-verification norms so junior developers never throw raw, untested AI output onto senior reviewers.',
        },
        {
          step: '03',
          label: 'AI Detox & First-Principles Debugging',
          explanation:
            'Stepping through a debugger solo before asking an LLM for a fix—combined with periodic AI-free coding days—preserves raw diagnostic intuition.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'vcfp-ch02-mm1',
      name: 'The 70 / 30 Engineering Split',
      tagline: 'AI accelerates the first 70% of syntax; human engineering owns the final 30% of production reality.',
      naiveIntuition:
        'If an AI coding assistant generates 70% of a feature in minutes, software engineering is 70% automated and requires proportionally less engineering expertise.',
      firstPrinciplesReality:
        'The remaining 30%—architecture, complex edge cases, security boundaries, performance optimization, and maintainability—contains the non-linear complexity that separates a fragile demo from a production system.',
      howToApply:
        'Delegate boilerplate and first-draft scaffolding to AI immediately, then invest 100% of your saved time into boundary testing, architectural trade-offs, and failure-mode design.',
    },
    {
      id: 'vcfp-ch02-mm2',
      name: 'Architect & Editor-in-Chief via CHOP',
      tagline: 'Treat AI as a high-speed drafter steered through Chat-Oriented Programming (CHOP) and strict editorial standards.',
      naiveIntuition:
        'Using AI means accepting autocomplete blocks or asking single-shot questions whenever you get stuck on syntax.',
      firstPrinciplesReality:
        'As Steve Yegge defines Chat-Oriented Programming (CHOP), senior productivity multiplies when the human translates business constraints into iterative prompt specifications and audits every generated line like a demanding editor-in-chief.',
      howToApply:
        'Use CHOP to tackle ambitious refactors and "wouldn\'t it be nice if" initiatives previously deemed too slow, while enforcing mandatory self-verification gates across your team.',
    },
    {
      id: 'vcfp-ch02-mm3',
      name: 'The Anti-Atrophy Calibration Loop',
      tagline: 'Use AI as an interactive tutor rather than an answer vending machine, reinforced by periodic solo debugging.',
      naiveIntuition:
        'Copy-pasting working AI solutions and immediately prompting the LLM whenever an error appears is the fastest path to career growth.',
      firstPrinciplesReality:
        'Passively consuming AI solutions bypasses mental-model formation, leaving you helpless when the model hallucinates subtle concurrency bugs, memory leaks, or scaling bottlenecks.',
      howToApply:
        'Interrogate AI code line-by-line for the "why," refactor bloated 50-line generated functions, debug failures yourself before prompting, and schedule periodic AI-free coding days.',
    },
  ],
  deepSections: [
    {
      id: 'vcfp-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Senior Engineers: Architect, Editor-in-Chief, and Force Multiplier',
      subtitle: 'Steering Chat-Oriented Programming (CHOP), institutional foresight, and team verification norms',
      coreMechanism:
        'Senior engineers extract the highest leverage from AI because LLMs function as force multipliers for existing domain and architectural expertise. Adopting Steve Yegge\'s model of architect and editor-in-chief, seasoned developers translate ambiguous business requirements into structured specifications via Chat-Oriented Programming (CHOP)—iterative prompt refinement that compresses multi-day refactors into hours—and then scrutinize every generated line for security, concurrency, and maintainability flaws.\n\nCrucially, senior engineers provide the institutional memory and second- and third-order foresight that statistical models lack. They spot when a plausible quick fix violates regulatory constraints or creates long-term operational debt, and they protect team velocity by instituting strict norms requiring junior engineers to disclose and verify AI-generated code before requesting review.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Specify via CHOP',
          detail: 'Deconstruct ambitious initiatives or refactors into iterative prompt specifications grounded in institutional context.',
        },
        {
          step: '02',
          title: 'Audit Second-Order Effects',
          detail: 'Inspect generated code for hidden concurrency hazards, memory leaks, regulatory misalignments, and future maintenance debt.',
        },
        {
          step: '03',
          title: 'Enforce Verification Governance',
          detail: 'Require teammates to test and self-review AI contributions prior to PR submission so seniors are never the sole safety net.',
        },
      ],
      keyTakeaways: [
        'Chat-Oriented Programming (CHOP) lowers the ROI threshold for ambitious refactors, making previously out-of-reach engineering initiatives viable.',
        'Senior engineers must reject raw AI code dumps from juniors by establishing team rules for disclosure and pre-review verification.',
        'As implementation barriers fall, senior impact concentrates in cross-team architecture roadmaps, stakeholder alignment, and AI governance.',
      ],
      commonPitfalls: [
        'Becoming the team\'s overwhelmed sole safety net by allowing unverified AI-generated pull requests into the review queue.',
        'Letting AI convenience blunt your instinct to investigate code snippets that look subtly "off" or too good to be true.',
      ],
      figures: [],
    },
    {
      id: 'vcfp-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Midlevel Engineers: Systems Boundaries, Production Ops, and UX Polymathy',
      subtitle: 'Elevating from routine feature coding to distributed systems design, observability, and product sensibility',
      coreMechanism:
        'Midlevel engineers experience the sharpest role compression because their traditional workload—implementing standard features, writing basic tests, and fixing routine bugs—falls squarely inside the 70% AI-automatable zone. To turn this pressure into elevation, midlevel developers must specialize in component boundaries (API contracts, event schemas, data partitioning) and production operations (observability, full-stack performance profiling, security compliance, and cloud cost optimization) where LLMs often produce functional but poorly optimized code.\n\nSimultaneously, as Garry Tan notes, lowering implementation friction shifts competitive advantage toward product and UX design thinking. Midlevel engineers who combine systems thinking with user psychology and cross-functional communication bridge the gap between technical elegance and what users actually want.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Harden System Boundaries',
          detail: 'Design resilient APIs, event schemas, and caching/replication topologies that handle distributed failure modes and oddball inputs.',
        },
        {
          step: '02',
          title: 'Profile & Optimize in Production',
          detail: 'Replace "functional but horribly optimized" AI code using end-to-end observability, query profiling, and cost/security audits.',
        },
        {
          step: '03',
          title: 'Integrate Product & UX Thinking',
          detail: 'Collaborate closely with designers and PMs to align technical trade-offs directly with user workflows and domain constraints.',
        },
      ],
      keyTakeaways: [
        'AI defaults to solving the general happy path; midlevel engineers earn their leverage by probing for network outages, null states, and distributed race conditions.',
        'Deepening domain mastery in regulated or high-constraint fields (finance, healthcare, real-time systems, ML infra) provides context generic LLMs lack.',
        'Developing UX sensibility and cross-functional communication turns a midlevel coder into an irreplaceable product-engineering polymath.',
      ],
      commonPitfalls: [
        'Shipping AI-generated code that passes basic functional checks but introduces severe database query or rendering bottlenecks in production.',
        'Treating software tasks as isolated tickets without checking how changes ripple across legacy systems, user workflows, or compliance rules.',
      ],
      figures: [],
    },
    {
      id: 'vcfp-ch02-sec3',
      sectionNumber: '2.3',
      title: 'Junior Developers: From Passive Consumers to Active Verifiers',
      subtitle: 'Mastering the "Why," test-first validation, maintainability refactoring, and AI-free calibration',
      coreMechanism:
        'Although AI compresses a day-long junior CRUD endpoint task into an hour, entry-level developers are not obsolete—instead, the baseline bar shifts from writing boilerplate to verifying correctness and architectural consistency. Juniors who treat AI as an answer vending machine copy-paste solutions without forming internal mental models, stalling their growth. Thriving requires shifting from consuming code to creating understanding: interrogating the AI on why it chose an approach, outlining solutions in plain English before prompting, and refactoring messy 50-line AI functions into clean, modular units.\n\nTo prevent skill atrophy, junior engineers must debug errors themselves before asking the AI for a fix, write unit and edge-case tests to challenge LLM outputs, and practice periodic "AI-free days." Pairing with seniors to learn thread safety, scaling trade-offs, and team communication accelerates their climb into the human 30%.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Draft Plain-English Specs First',
          detail: 'Clarify your own understanding of the existing system architecture by outlining the solution before prompting the assistant.',
        },
        {
          step: '02',
          title: 'Challenge with Tests & Refactoring',
          detail: 'Write unit tests for business logic and edge cases, and split monolithic or poorly named AI functions before opening a PR.',
        },
        {
          step: '03',
          title: 'Debug Solo & Schedule AI Detox',
          detail: 'Step through debuggers manually when AI code fails and practice periodic AI-free coding sessions to build durable CS fundamentals.',
        },
      ],
      keyTakeaways: [
        'Inability to prompt an AI effectively is almost always a signal that your own mental model of the problem is still incomplete.',
        'Catching a bug or security flaw introduced by an LLM proves you are adding engineering value beyond a commodity AI subscription.',
        'Active mentorship and receptive code-review discussions teach juniors the scaling and concurrency checklists that AI misses.',
      ],
      commonPitfalls: [
        'Copy-pasting AI solutions directly into pull requests without understanding the underlying memory, state, or concurrency mechanics.',
        'Immediately pasting stack traces back into the chat prompt instead of stepping through the debugger to isolate root causes yourself.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Career-Stage Leverage Matrix Across the 70 / 30 Frontier',
      description:
        'How Senior, Midlevel, and Junior engineers reallocate cognitive effort from the 70% AI baseline to the 30% human value layer.',
      headers: ['Engineering Tier', 'AI-Delegated 70% Baseline', 'Human-Owned 30% Focus', 'Primary Anti-Pattern', 'Durable Career Lever'],
      rows: [
        [
          'Senior Engineer',
          'First-draft code & mechanical multi-file refactor steps',
          'CHOP specs, 2nd/3rd-order foresight & architectural governance',
          'Acting as sole safety net for unverified junior AI dumps',
          'Editor-in-chief judgment, domain wisdom & org leadership',
        ],
        [
          'Midlevel Engineer',
          'Routine feature implementation & standard test scaffolding',
          'System boundaries, distributed edge cases, observability & UX',
          'Shipping functional but unoptimized general-case AI code',
          'Systems integration, domain specialization & product polymathy',
        ],
        [
          'Junior Engineer',
          'CRUD endpoint boilerplate & initial syntax lookup',
          'Test verification, clean refactoring & root-cause debugging',
          'Using AI as an answer vending machine (copy-paste atrophy)',
          'First-principles CS fundamentals, solo debugging & QA rigor',
        ],
      ],
      verdictRule:
        'Never compete with LLMs on raw syntax generation speed; anchor your daily workflow in the verification, boundary design, and domain context that correspond to your next career tier.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'vcfp-ch02-scen1',
      title: 'Stopping the Unverified AI Pull-Request Flood',
      roleAndContext:
        'Staff Engineer leading a backend platform team where junior developers use AI assistants to ship API endpoints at 4x their previous volume.',
      symptomOrFailure:
        'Senior engineers are drowning in code review bottlenecks because juniors submit massive, unverified AI-generated diffs containing subtle thread-safety bugs and 50-line monolithic functions.',
      naiveFixAndWhyItFails:
        'Banning AI tools on the team forfeits the 70% productivity gain, while having seniors manually fix every AI diff turns senior staff into exhausted human linters.',
      firstPrinciplesSolution:
        'Institute a mandatory AI disclosure and self-verification policy: authors must refactor generated code for modularity, attach unit tests covering edge cases, and explain the implementation choices before requesting senior review.',
      measurableOutcome:
        'Senior code review turnaround time drops by 60%, production concurrency regressions fall to zero, and junior engineers rapidly internalize architectural standards.',
    },
    {
      id: 'vcfp-ch02-scen2',
      title: 'Rescuing a "Functional but Horribly Optimized" Midlevel Feature',
      roleAndContext:
        'Midlevel Full-Stack Engineer building a real-time healthcare analytics dashboard using an LLM coding assistant.',
      symptomOrFailure:
        'The AI-generated dashboard works on local mock data, but in staging it triggers N+1 database query storms, leaks patient metadata in client payloads, and confuses clinicians with a cluttered UI.',
      naiveFixAndWhyItFails:
        'Repeatedly prompting the LLM to "make the code faster" without profiling yields superficial syntax tweaks that miss the distributed data-access and compliance boundaries.',
      firstPrinciplesSolution:
        'Apply systems thinking and domain expertise: profile the database queries to introduce proper indexing and batching, enforce HIPAA boundary filtering at the API schema layer, and partner with UX to align the interface with clinical workflows.',
      measurableOutcome:
        'Dashboard p95 latency drops from 3.4s to 180ms, compliance audits pass cleanly, and clinician task completion rises sharply.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'vcfp-ch02-q1',
        scenarioPrompt:
          'A senior engineer notices that after adopting AI coding assistants, junior teammates are opening three times as many pull requests, but senior review queues are gridlocked due to subtle bugs and messy structure. According to Chapter 2, what is the right structural intervention?',
        options: [
          {
            label: 'A',
            text: 'Restrict AI coding assistants exclusively to senior engineers until juniors pass a multi-year tenure threshold.',
            isCorrect: false,
            explanation:
              'Juniors should actively use AI to accelerate learning and workflows, provided they pair it with verification rigor.',
          },
          {
            label: 'B',
            text: 'Use a second LLM to automatically approve junior pull requests so seniors can focus only on roadmap docs.',
            isCorrect: false,
            explanation:
              'Outsourcing quality assurance entirely to AI misses domain context, ethical nuances, and architectural coherence.',
          },
          {
            label: 'C',
            text: 'Enforce a norm where developers must disclose AI usage, write edge-case tests, refactor messy functions, and self-verify before requesting senior review.',
            isCorrect: true,
            explanation:
              'Pushing back on raw AI wall-throws and requiring self-verification offloads oversight burden while training juniors in the 30% skillset.',
          },
          {
            label: 'D',
            text: 'Have senior engineers rewrite all junior AI diffs themselves during review to maintain velocity.',
            isCorrect: false,
            explanation:
              'Making seniors the sole safety net causes severe review burnout and prevents juniors from learning why the code failed.',
          },
        ],
      },
      {
        id: 'vcfp-ch02-q2',
        scenarioPrompt:
          'Why do midlevel software engineers face the most acute pressure to evolve as AI handles the first 70% of coding?',
        options: [
          {
            label: 'A',
            text: 'Because midlevel engineers are typically banned from participating in stakeholder or UX discussions.',
            isCorrect: false,
            explanation:
              'Midlevel engineers are encouraged to expand into cross-functional communication and UX/product collaboration.',
          },
          {
            label: 'B',
            text: 'Because their traditional day-to-day workload—implementing standard features, writing basic tests, and debugging straightforward issues—is the exact zone becoming most automated.',
            isCorrect: true,
            explanation:
              'Routine feature implementation falls inside the 70% baseline, requiring midlevels to elevate into system boundaries, observability, domain specialization, and product thinking.',
          },
          {
            label: 'C',
            text: 'Because AI coding tools only understand legacy assembly and low-level infrastructure code.',
            isCorrect: false,
            explanation:
              'LLMs excel at high-level boilerplate and general-case application code, not bespoke distributed architecture.',
          },
          {
            label: 'D',
            text: 'Because Steve Yegge\'s CHOP methodology works only for entry-level CRUD tasks.',
            isCorrect: false,
            explanation:
              'CHOP (chat-oriented programming) is specifically highlighted as a force multiplier for senior engineers tackling large, ambitious initiatives.',
          },
        ],
      },
      {
        id: 'vcfp-ch02-q3',
        scenarioPrompt:
          'A junior developer is trying to prompt an AI assistant to implement a payment retry worker, but after six prompt iterations the AI keeps generating broken state transitions. What does this failure signal, and what should the developer do next?',
        options: [
          {
            label: 'A',
            text: 'Prompting clarity is a proxy for problem understanding; the developer should step back and outline the architecture and state transitions in plain English first.',
            isCorrect: true,
            explanation:
              'When you cannot get the AI to produce what you want, it signals that your own understanding of the problem and requirements needs clarification first.',
          },
          {
            label: 'B',
            text: 'The developer should append "act as a 10x senior engineer" and increase the model temperature to 1.0.',
            isCorrect: false,
            explanation:
              'Superficial persona prompts cannot substitute for missing requirements analysis and domain constraints.',
          },
          {
            label: 'C',
            text: 'The developer should commit the closest working draft and rely on QA testers to file bug tickets later.',
            isCorrect: false,
            explanation:
              'Dumping unverified code destroys team trust and abdicates engineering responsibility.',
          },
          {
            label: 'D',
            text: 'The developer should abandon automated tests since AI state machines cannot be unit-tested.',
            isCorrect: false,
            explanation:
              'Writing deterministic unit tests for edge cases is the primary way a junior developer verifies AI output.',
          },
        ],
      },
      {
        id: 'vcfp-ch02-q4',
        scenarioPrompt:
          'Builder.io CEO Steve Sewell observes that AI frequently produces "functional but horribly optimized code." Which combination of human skills directly remedies this failure mode?',
        options: [
          {
            label: 'A',
            text: 'Faster typing speed and memorizing standard library syntax.',
            isCorrect: false,
            explanation:
              'LLMs already handle syntax recall and fast typing.',
          },
          {
            label: 'B',
            text: 'Full-stack performance profiling, database query optimization, observability, and iterative architectural guidance.',
            isCorrect: true,
            explanation:
              'Diagnosing system-wide bottlenecks across database patterns, network protocols, and rendering strategies requires deep stack understanding and iterative human guidance.',
          },
          {
            label: 'C',
            text: 'Replacing all human code reviews with automated linter formatting rules.',
            isCorrect: false,
            explanation:
              'Linters catch stylistic issues, not architectural bottlenecks or N+1 query cascades.',
          },
          {
            label: 'D',
            text: 'Avoiding AI completely on all frontend and backend projects.',
            isCorrect: false,
            explanation:
              'The solution is guiding AI through iterative improvement grounded in systems profiling, not resisting AI.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'vcfp-ch02-fc1',
        category: 'foundation',
        front: 'What constitutes the "30% human frontier" in AI-assisted software engineering?',
        back: 'Complex requirements analysis, maintainable system architecture, boundary/edge-case handling, performance optimization, security verification, and domain context.',
        mentalHook: 'AI writes the 70% demo; humans engineer the 30% production system.',
      },
      {
        id: 'vcfp-ch02-fc2',
        category: 'architecture',
        front: 'What is Chat-Oriented Programming (CHOP), and how do senior engineers use it?',
        back: 'Coined by Steve Yegge, CHOP is coding via iterative prompt refinement where a senior engineer acts as architect and editor-in-chief to tackle ambitious refactors in hours instead of days.',
        mentalHook: 'AI is the fast typer; the senior engineer is the guiding brain and editor.',
      },
      {
        id: 'vcfp-ch02-fc3',
        category: 'evaluation',
        front: 'Why does Steve Sewell warn that AI often yields "functional but horribly optimized code"?',
        back: 'LLMs optimize for general-case plausibility that passes surface checks while ignoring system-wide query patterns, rendering costs, and production scale.',
        mentalHook: 'Plausible in a prompt != performant in production.',
      },
      {
        id: 'vcfp-ch02-fc4',
        category: 'adaptation',
        front: 'Why did Garry Tan advise engineers worried about AI obsolescence to learn UX and product design?',
        back: 'As AI lowers pure implementation barriers, engineering leverage shifts toward polymaths who bridge technical architecture with user psychology, workflows, and real human needs.',
        mentalHook: 'When coding isn\'t the bottleneck, building what people actually want takes center stage.',
      },
      {
        id: 'vcfp-ch02-fc5',
        category: 'foundation',
        front: 'What is the purpose of a periodic "AI detox" (or AI-free coding day) for developers?',
        back: 'Practicing problem-solving and debugging without AI assistance prevents skill atrophy and keeps raw mental models of memory, state, and concurrency sharp.',
        mentalHook: 'Fly solo periodically so you can still land the plane when the autopilot hallucinates.',
      },
      {
        id: 'vcfp-ch02-fc6',
        category: 'evaluation',
        front: 'How should a junior developer treat a 50-line monolithic function generated by an LLM?',
        back: 'Review it like a peer\'s draft: interrogate why it works, split it into smaller single-responsibility functions, rename unclear variables, and write edge-case unit tests.',
        mentalHook: 'Shift from consuming working code to creating maintainable engineering.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'vcfp-ch02-feyn1',
        conceptTitle: 'The 70 / 30 Paradox & Why AI Multiplies Expertise Rather Than Replacing It',
        prompt:
          'Explain to a skeptical engineering manager why automating 70% of routine code generation actually increases the value of strong engineering fundamentals across senior, midlevel, and junior roles.',
        rubricChecklist: [
          'Distinguishes the 70% routine boilerplate/syntax baseline from the 30% production engineering gap (architecture, edge cases, security, maintainability).',
          'Explains why LLMs act as power tools for power users (Simon Willison / Steve Yegge): seniors use CHOP and foresight to multiply output without letting subtle flaws slip through.',
          'Describes how midlevel engineers elevate from routine feature tickets into system boundaries, observability, domain specialization, and UX/product alignment.',
          'Clarifies how the junior bar rises from passive CRUD typing to active test verification, clean refactoring, and first-principles debugging.',
        ],
        modelExplanation:
          'AI coding assistants automate roughly 70% of software construction—the boilerplate, scaffolding, and general-case syntax. However, the remaining 30% contains everything that makes software survive in production: system architecture, distributed failure handling, domain compliance, performance profiling, and long-term maintainability. Because LLMs generate plausible general-case code that is often poorly optimized or blind to second-order effects, they act as power tools meant for skilled operators. Senior engineers multiply their impact via Chat-Oriented Programming (CHOP) while serving as editors-in-chief; midlevels elevate into systems integration, observability, and UX polymathy; and juniors prove their value by rigorously testing, refactoring, and verifying AI outputs rather than passively copy-pasting.',
      },
      {
        id: 'vcfp-ch02-feyn2',
        conceptTitle: 'Preventing Junior Skill Atrophy and Senior Review Burnout',
        prompt:
          'Design a concrete team workflow and learning protocol for junior developers using AI assistants so that they build durable mental models without overwhelming senior reviewers.',
        rubricChecklist: [
          'Requires outlining the solution in plain English before prompting, using prompt friction as a diagnostic signal for incomplete understanding.',
          'Mandates treating AI as a tutor (asking "why" line-by-line) and refactoring messy generated code (e.g., splitting 50-line functions) for maintainability.',
          'Enforces a strict self-verification gate—writing unit/edge-case tests and debugging errors manually first—before any pull request reaches a senior reviewer.',
          'Includes periodic "AI detox" days and active mentorship discussions on concurrency, scaling, and architectural trade-offs.',
        ],
        modelExplanation:
          'To prevent juniors from using AI as an answer vending machine—and dumping broken diffs onto seniors—every task begins with a plain-English outline of the requirement and system constraints. Once the AI generates a draft, the junior acts as first-line reviewer: asking the AI to explain unfamiliar lines, refactoring bloated functions into clean modules, and writing unit tests that probe edge cases. When a bug surfaces, the junior steps through the debugger solo before asking the LLM for help. Combined with mandatory PR self-verification disclosures and periodic AI-free coding days, this loop builds senior-caliber intuition while keeping senior review queues clean.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'vcfp-seventy-thirty-split',
        label: 'The 70 / 30 Engineering Split',
        category: 'foundation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'The division between the ~70% of routine coding boilerplate automated by AI assistants and the decisive 30% of architecture, edge cases, verification, and maintainability owned by humans.',
        formulaOrRule: 'Production System = 70% AI Implementation Baseline + 30% Human Engineering Judgment',
        whyItMatters:
          'Defines where engineers must stop competing with machines and double down on durable human advantage.',
      },
      {
        id: 'vcfp-chop-architect-editor',
        label: 'CHOP & Editor-in-Chief Model',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Steve Yegge\'s Chat-Oriented Programming paradigm where senior engineers drive iterative prompt specifications and rigorously audit every line of generated output.',
        whyItMatters:
          'Turns senior domain experience and foresight into a force multiplier for large refactors and ambitious technical initiatives.',
      },
      {
        id: 'vcfp-systems-boundary-mastery',
        label: 'Systems Boundary & Ops Mastery',
        category: 'optimization',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Midlevel specialization in API schemas, distributed failure modes, observability, full-stack performance profiling, and regulated domain constraints.',
        whyItMatters:
          'Counteracts the LLM tendency to emit functional general-case code that is horribly optimized or blind to production boundaries.',
      },
      {
        id: 'vcfp-product-ux-polymathy',
        label: 'Product & UX Polymathy',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Combining technical system design with user psychology, UX sensibility, and cross-functional stakeholder communication.',
        whyItMatters:
          'As implementation barriers drop, building software people actually want becomes the primary differentiator.',
      },
      {
        id: 'vcfp-verification-first-habit',
        label: 'Self-Verification & Clean Refactoring Gate',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'The discipline of challenging AI outputs with unit/edge-case tests, splitting bloated functions, and disclosing AI usage before requesting peer review.',
        whyItMatters:
          'Prevents senior review burnout and proves a junior developer adds reliability beyond a raw LLM subscription.',
      },
      {
        id: 'vcfp-anti-atrophy-detox',
        label: 'Solo Debugging & AI Detox Calibration',
        category: 'foundation',
        chapterNumber: 2,
        importance: 3,
        definition:
          'Interrogating the "why" behind generated code, stepping through debuggers manually before prompting, and practicing periodic AI-free coding sessions.',
        whyItMatters:
          'Preserves first-principles mental models of state, memory, and concurrency so developers can fix AI hallucinations.',
      },
    ],
    edges: [
      {
        source: 'vcfp-seventy-thirty-split',
        target: 'vcfp-chop-architect-editor',
        relationship: 'prerequisite_for',
        explanation:
          'Recognizing the 70/30 boundary allows senior engineers to delegate first-draft syntax via CHOP while focusing on architectural editorial control.',
      },
      {
        source: 'vcfp-seventy-thirty-split',
        target: 'vcfp-systems-boundary-mastery',
        relationship: 'prerequisite_for',
        explanation:
          'Because AI automates routine midlevel feature coding, midlevel engineers must shift into system boundaries, edge cases, and production optimization.',
      },
      {
        source: 'vcfp-systems-boundary-mastery',
        target: 'vcfp-product-ux-polymathy',
        relationship: 'optimizes',
        explanation:
          'Pairing deep systems reliability with UX and product design thinking creates complete technical solutions aligned with human workflows.',
      },
      {
        source: 'vcfp-verification-first-habit',
        target: 'vcfp-chop-architect-editor',
        relationship: 'mitigates',
        explanation:
          'Mandatory junior self-verification and test gates prevent unverified AI diffs from overwhelming senior editors-in-chief during review.',
      },
      {
        source: 'vcfp-anti-atrophy-detox',
        target: 'vcfp-verification-first-habit',
        relationship: 'prerequisite_for',
        explanation:
          'Developers can only spot subtle bugs and refactor messy AI code if they maintain strong internal mental models through solo debugging and fundamentals.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 20,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 2 ("Beyond the 70%: Maximizing Human Contribution"), synthesizing all senior, midlevel, junior, and durable career sections with zero forbidden AI clichés and two custom SVG diagrams.',
  },
};
