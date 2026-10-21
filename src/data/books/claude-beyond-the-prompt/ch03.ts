import type { ChapterMastery } from '../../../types/book';

export const cbtpCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'What a Skill Is: Instructions, Context, and Reuse',
  subtitle: 'Three-Layer Skill Architecture, Progressive Disclosure, and the Four-Signal Candidate Threshold',
  readingTimeMinutes: 8,
  sourceWordCount: 6564,
  executiveThesis:
    'A Skill is not a saved prompt snippet; it is a three-layer environmental artifact—metadata, instructions, and supporting resources—that converts recurring human judgment into discoverable agent know-how. By decoupling task recognition from procedural rules and reference templates via progressive disclosure, Skills eliminate memory-dependent output drift without exhausting the active context window.',
  paradigmShift: {
    oldWay:
      'Engineers maintain personal notes files of successful prompts, manually pasting reasoning rules, formatting constraints, and examples into each new chat session from memory.',
    newWay:
      'Teams package recurring methods into three-layer Skills where a narrow metadata description triggers on-demand loading of procedural instructions and optional supporting templates.',
    whyItChanged:
      'Reconstructing prompts by hand causes output drift across sessions and turns the live conversation into a noisy storage dump that buries active task evidence.',
  },
  customDiagrams: [
    {
      id: 'cbtp-ch03-svg1',
      title: 'The Three-Layer Skill Architecture & Progressive Disclosure Funnel',
      subtitle: 'Separating light discovery signals from procedural execution and deep reference templates',
      bierutCaption:
        'Progressive disclosure protects the context budget by exposing only the lightweight metadata trigger at idle time and loading instructions or templates solely when a matching task activates the Skill.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="32" y="38" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.04em">THREE-LAYER SKILL ARCHITECTURE (PROGRESSIVE CONTEXT DISCLOSURE)</text>
  <text x="32" y="58" fill="#94a3b8" font-size="12">bug-ticket-from-logs: Discovery Signal -> Procedural Method -> On-Demand Depth</text>

  <!-- Layer 1: Metadata -->
  <rect x="32" y="84" width="216" height="270" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <rect x="48" y="100" width="94" height="22" rx="4" fill="#0284c7" />
  <text x="58" y="115" fill="#f8fafc" font-size="11" font-weight="700">LAYER 1: IDLE</text>
  <text x="48" y="144" fill="#38bdf8" font-size="15" font-weight="700">Metadata Layer</text>
  <text x="48" y="164" fill="#cbd5e1" font-size="12" font-weight="600">"When might this apply?"</text>
  <rect x="48" y="182" width="184" height="86" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="58" y="202" fill="#7dd3fc" font-size="11" font-family="monospace">name: bug-ticket-from-logs</text>
  <text x="58" y="220" fill="#94a3b8" font-size="10" font-family="monospace">description: Turns logs,</text>
  <text x="58" y="235" fill="#94a3b8" font-size="10" font-family="monospace">console errors, or traces</text>
  <text x="58" y="250" fill="#94a3b8" font-size="10" font-family="monospace">into a Markdown ticket.</text>
  <text x="48" y="295" fill="#94a3b8" font-size="11">• Always visible discovery surface</text>
  <text x="48" y="315" fill="#94a3b8" font-size="11">• Defines relevance boundary</text>
  <text x="48" y="335" fill="#38bdf8" font-size="11" font-weight="600">Token Cost: ~30 tokens</text>

  <!-- Arrow 1 -> 2 -->
  <path d="M 248 218 L 292 218" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" class="svg-flow-active" />
  <polygon points="292,213 302,218 292,223" fill="#38bdf8" />
  <text x="270" y="205" fill="#38bdf8" font-size="10" text-anchor="middle" font-weight="600">Match</text>

  <!-- Layer 2: Instructions -->
  <rect x="302" y="84" width="216" height="270" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
  <rect x="318" y="100" width="118" height="22" rx="4" fill="#d97706" />
  <text x="328" y="115" fill="#f8fafc" font-size="11" font-weight="700">LAYER 2: ACTIVE</text>
  <text x="318" y="144" fill="#fbbf24" font-size="15" font-weight="700">Instructions Layer</text>
  <text x="318" y="164" fill="#cbd5e1" font-size="12" font-weight="600">"What method to follow?"</text>
  <rect x="318" y="182" width="184" height="96" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="328" y="202" fill="#fde68a" font-size="10" font-family="monospace">1. Separate facts/assumptions</text>
  <text x="328" y="218" fill="#fde68a" font-size="10" font-family="monospace">2. ID user-facing symptom</text>
  <text x="328" y="234" fill="#fde68a" font-size="10" font-family="monospace">3. Preserve raw log evidence</text>
  <text x="328" y="250" fill="#fde68a" font-size="10" font-family="monospace">4. Draft Markdown ticket</text>
  <text x="328" y="266" fill="#fde68a" font-size="10" font-family="monospace">5. Mark missing info clearly</text>
  <text x="318" y="302" fill="#94a3b8" font-size="11">• Loaded upon task match</text>
  <text x="318" y="320" fill="#94a3b8" font-size="11">• Stabilizes judgment rules</text>
  <text x="318" y="338" fill="#fbbf24" font-size="11" font-weight="600">Token Cost: ~200 tokens</text>

  <!-- Arrow 2 -> 3 -->
  <path d="M 518 218 L 562 218" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" class="svg-flow-active" />
  <polygon points="562,213 572,218 562,223" fill="#f59e0b" />
  <text x="540" y="205" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="600">If Needed</text>

  <!-- Layer 3: Supporting Resources -->
  <rect x="572" y="84" width="196" height="270" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
  <rect x="588" y="100" width="136" height="22" rx="4" fill="#059669" />
  <text x="598" y="115" fill="#f8fafc" font-size="11" font-weight="700">LAYER 3: ON-DEMAND</text>
  <text x="588" y="144" fill="#34d399" font-size="15" font-weight="700">Supporting Resources</text>
  <text x="588" y="164" fill="#cbd5e1" font-size="12" font-weight="600">"What extra depth helps?"</text>
  <rect x="588" y="182" width="164" height="86" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="598" y="204" fill="#6ee7b7" font-size="10" font-family="monospace">• ticket-template.md</text>
  <text x="598" y="222" fill="#6ee7b7" font-size="10" font-family="monospace">• severity-rubric.md</text>
  <text x="598" y="240" fill="#6ee7b7" font-size="10" font-family="monospace">• kamori-log-query.sh</text>
  <text x="598" y="258" fill="#6ee7b7" font-size="10" font-family="monospace">• gold-standard-ex.md</text>
  <text x="588" y="295" fill="#94a3b8" font-size="11">• Pulled selectively per step</text>
  <text x="588" y="315" fill="#94a3b8" font-size="11">• Zero idle context bloat</text>
  <text x="588" y="335" fill="#34d399" font-size="11" font-weight="600">Token Cost: 0 until read</text>

  <!-- Bottom Bar -->
  <rect x="32" y="368" width="736" height="34" rx="6" fill="#020617" stroke="#334155" />
  <text x="400" y="390" fill="#e2e8f0" font-size="12" text-anchor="middle" font-weight="600">PROGRESSIVE DISCLOSURE PRINCIPLE: Show discovery signal first -> Load method on match -> Fetch assets on demand</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Metadata Layer (Discovery Surface)',
          explanation:
            'Exposes a narrow task boundary so Claude recognizes when to invoke the Skill without loading the full procedure on every turn.',
        },
        {
          step: '2',
          label: 'Instructions Layer (Reusable Method)',
          explanation:
            'Defines the explicit working procedure—such as separating observed facts from assumptions—that eliminates session-to-session output drift.',
        },
        {
          step: '3',
          label: 'Supporting Resources Layer (Selective Depth)',
          explanation:
            'Stores team templates, reference conventions, and tool scripts externally so they never pollute the main conversation until needed.',
        },
      ],
    },
    {
      id: 'cbtp-ch03-svg2',
      title: 'The Four-Signal Skill Candidate Filter & Spine-vs-Orbit Taxonomy',
      subtitle: 'Evaluating ad-hoc prompts across Recurrence, Drift, Judgment, and Context Cost',
      bierutCaption:
        'Not every helpful prompt deserves a file: only workflows that cross the four operational pressure signals graduate from disposable chat requests into maintained Spine or Orbit Skills.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="32" y="38" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.04em">FOUR-SIGNAL CANDIDATE THRESHOLD &amp; SKILL TAXONOMY</text>
  <text x="32" y="58" fill="#94a3b8" font-size="12">Mapping the 4 Prompt-to-Skill Shifts to the 4 Candidate Evaluation Signals</text>

  <!-- Left Column: Ad-Hoc Prompts -->
  <rect x="28" y="88" width="168" height="296" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="112" y="116" fill="#e2e8f0" font-size="13" font-weight="700" text-anchor="middle">Incoming Prompt Habit</text>
  <rect x="42" y="134" width="140" height="58" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="112" y="156" fill="#94a3b8" font-size="11" text-anchor="middle">One-off explanation</text>
  <text x="112" y="176" fill="#ef4444" font-size="10" font-weight="700" text-anchor="middle">KEEP AS PROMPT</text>

  <rect x="42" y="210" width="140" height="72" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="112" y="232" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Repeated work pattern</text>
  <text x="112" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">(Stable core +</text>
  <text x="112" y="265" fill="#94a3b8" font-size="10" text-anchor="middle">variable edges)</text>

  <text x="112" y="322" fill="#cbd5e1" font-size="11" text-anchor="middle">Test against</text>
  <text x="112" y="340" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">4 Pressure Signals</text>

  <!-- Flow Arrow Left to Center -->
  <path d="M 196 246 L 236 246" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" class="svg-flow-active" />
  <polygon points="236,241 246,246 236,251" fill="#38bdf8" />

  <!-- Center Column: 4 Signals Gate -->
  <rect x="246" y="88" width="276" height="296" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="384" y="114" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">4 CANDIDATE SIGNALS (THE GATE)</text>

  <rect x="262" y="128" width="244" height="52" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="274" y="148" fill="#38bdf8" font-size="12" font-weight="700">1. Recurrence -> Activation</text>
  <text x="274" y="166" fill="#94a3b8" font-size="10">Same task returns across debugging sessions</text>

  <rect x="262" y="190" width="244" height="52" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="274" y="210" fill="#fbbf24" font-size="12" font-weight="700">2. Output Drift -> Ownership</text>
  <text x="274" y="228" fill="#94a3b8" font-size="10">Memory reconstruction alters structure/rigor</text>

  <rect x="262" y="252" width="244" height="52" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="274" y="272" fill="#f472b6" font-size="12" font-weight="700">3. Judgment -> Scope</text>
  <text x="274" y="290" fill="#94a3b8" font-size="10">Separates observed facts from assumptions</text>

  <rect x="262" y="314" width="244" height="52" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="274" y="334" fill="#34d399" font-size="12" font-weight="700">4. Context Cost -> Context</text>
  <text x="274" y="352" fill="#94a3b8" font-size="10">Removes repeated background rules from chat</text>

  <!-- Flow Arrows Center to Right -->
  <path d="M 522 175 L 564 155" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" class="svg-flow-active" />
  <polygon points="562,150 572,152 565,160" fill="#f59e0b" />

  <path d="M 522 295 L 564 305" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" class="svg-flow-active" />
  <polygon points="564,300 572,307 562,310" fill="#10b981" />

  <!-- Right Column: Spine vs Orbit Candidates -->
  <rect x="572" y="88" width="200" height="132" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
  <text x="588" y="114" fill="#fbbf24" font-size="13" font-weight="700">SPINE SKILL (All 4 Signals)</text>
  <text x="588" y="138" fill="#f8fafc" font-size="12" font-family="monospace" font-weight="700">bug-ticket-from-logs</text>
  <text x="588" y="158" fill="#cbd5e1" font-size="10">High judgment + strict format</text>
  <text x="588" y="174" fill="#cbd5e1" font-size="10">+ high drift risk across logs,</text>
  <text x="588" y="190" fill="#cbd5e1" font-size="10">stack traces, and Kamori data.</text>

  <rect x="572" y="236" width="200" height="148" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
  <text x="588" y="260" fill="#34d399" font-size="13" font-weight="700">ORBIT SKILLS (Focused)</text>
  <text x="588" y="282" fill="#6ee7b7" font-size="11" font-family="monospace">• commit-message-helper</text>
  <text x="588" y="300" fill="#6ee7b7" font-size="11" font-family="monospace">• repo-orientation</text>
  <text x="588" y="322" fill="#94a3b8" font-size="10">Extended Workflow Orbit:</text>
  <text x="588" y="338" fill="#cbd5e1" font-size="10">pr-summary, handoff-summary,</text>
  <text x="588" y="354" fill="#cbd5e1" font-size="10">acceptance-criteria, review</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Stable Core vs. Variable Edges',
          explanation:
            'A prompt qualifies for evaluation only when a stable reasoning method operates across variable runtime inputs like logs or diffs.',
        },
        {
          step: '2',
          label: 'The Four Pressure Signals',
          explanation:
            'Recurrence demands automatic activation, drift demands shared ownership, judgment demands family-wide scope, and context cost demands layered storage.',
        },
        {
          step: '3',
          label: 'Spine vs. Orbit Prioritization',
          explanation:
            'Tasks exhibiting all four pressures become primary Spine Skills, while narrower convention or continuity helpers form supporting Orbit Skills.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'cbtp-ch03-mm1',
      name: 'Method-Induced Output Drift',
      tagline: 'Inconsistent AI results usually stem from human memory variance, not model randomness',
      naiveIntuition:
        'When Claude produces a thorough bug report on Monday but invents unsupported root causes on Tuesday, engineers blame stochastic LLM sampling.',
      firstPrinciplesReality:
        'Unlike ML model drift or data drift, output drift occurs while the model remains static because the human reconstructs the prompt from memory and omits key reasoning constraints.',
      howToApply:
        'Lock critical epistemic rules—such as separating observed facts from assumptions and flagging missing reproduction steps—inside a Skill instruction layer.',
    },
    {
      id: 'cbtp-ch03-mm2',
      name: 'Progressive Context Disclosure',
      tagline: 'Separate task recognition from procedural execution and deep reference material',
      naiveIntuition:
        'To get reliable output, you must front-load every formatting rule, edge case, and gold-standard template directly into the active prompt.',
      firstPrinciplesReality:
        'Dumping all reusable knowledge into every conversation pollutes the context window and buries live debugging evidence beneath static boilerplate.',
      howToApply:
        'Structure Skills into three layers so Claude scans only a concise metadata description at rest, loads instructions upon task match, and reads templates only when required.',
    },
    {
      id: 'cbtp-ch03-mm3',
      name: 'Stable Core, Variable Edges',
      tagline: 'Package the invariant epistemic procedure while leaving case-specific evidence in the chat',
      naiveIntuition:
        'Turning a successful prompt into a Skill means copying the exact conversational transcript—including specific error strings and one-off notes—into a Markdown file.',
      firstPrinciplesReality:
        'A prompt targets a single answer for one incident, whereas a Skill guides a family of related cases by separating the invariant method from fluctuating inputs.',
      howToApply:
        'Strip one-time conversational phrasing from your Skill instructions so the same procedure handles console errors, stack traces, or Kamori log excerpts uniformly.',
    },
  ],
  deepSections: [
    {
      id: 'cbtp-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Why Skills Exist: Memory Friction, Output Drift, and Context Pressure',
      subtitle: 'Diagnosing the breakdown of copy-paste prompt collections in recurring engineering work',
      coreMechanism:
        'When engineers debug recurring failures—such as a todo application losing tasks after a page refresh due to a `localStorage` JSON parse error—prompts rapidly evolve from simple questions into multi-step procedures. To get a usable bug ticket, the author must instruct Claude to separate observed facts from assumptions, identify the user-facing symptom before speculating on causes, preserve raw console errors as evidence, and explicitly flag missing reproduction steps. Carrying this method by hand across sessions makes output quality hostage to human memory and patience.\n\nReconstructing instructions from memory introduces output drift: small phrasing shifts between sessions cause the same model to alter ticket structure, depth, or epistemic caution. Attempting to prevent drift by pasting massive templates and rules into every chat creates severe context pressure, turning the prompt into an arbitrary storage system that buries live debugging evidence.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Fragment Accumulation',
          detail:
            'Successful prompt clauses accumulate across scattered notes and old chats as ad-hoc fixes for earlier model mistakes.',
        },
        {
          step: '2',
          title: 'Memory-Driven Output Drift',
          detail:
            'Rushed sessions omit crucial constraints like "do not invent reproduction steps," causing ticket quality and structure to diverge.',
        },
        {
          step: '3',
          title: 'Candidate Isolation',
          detail:
            'Instead of a vague "help me debug" request, the engineer isolates a narrow, repeatable unit of work: `bug-ticket-from-logs`.',
        },
      ],
      keyTakeaways: [
        'Output drift happens when a static model receives inconsistent procedural rules reconstructed from human memory across sessions.',
        'Using the conversational prompt as a storage dump for templates and rules buries live incident evidence in noise.',
        'A viable Skill candidate targets a narrow, verifiable transformation like `bug-ticket-from-logs` rather than an open-ended goal like "help me debug."',
      ],
      commonPitfalls: [
        'Defining a candidate around a broad activity ("debug the app") that mixes file reading, code rewriting, and test execution without a clear output shape.',
        'Blaming model temperature when ticket structure degrades after switching from "turn logs into a bug ticket" to "analyze the logs."',
      ],
      figures: [
        {
          file: 'B39004_3_1.png',
          originalLabel: 'Figure 3.1 – From prompt habit to skill candidate',
          bierutTitle: 'Isolate the Recurring Method Hidden Inside Ad-Hoc Prompt Habits',
          editorialAnalysis:
            'Figure 3.1 traces how a one-off prompt evolves into a repeated habit, exposes a recurring analytical pattern, and crystallizes into a named Skill candidate (`bug-ticket-from-logs`). The crucial transition occurs when the engineer stops copying text snippets and instead defines a bounded unit of work.',
          keyTakeaways: [
            'Repeated prompting is a diagnostic signal that an underlying method lacks a durable home.',
            'Naming the candidate (`bug-ticket-from-logs`) establishes a narrow boundary before any file structure is written.',
          ],
        },
      ],
    },
    {
      id: 'cbtp-ch03-sec2',
      sectionNumber: '3.2',
      title: 'The Three Layers of a Skill and Progressive Disclosure',
      subtitle: 'Architecting Metadata, Instructions, and Supporting Resources to protect the context window',
      coreMechanism:
        'A long prompt collapses task recognition, procedural rules, and reference templates into a single block of text. A Skill prevents this overload by partitioning know-how into three distinct layers governed by progressive disclosure—the UX principle of revealing detail only when the active stage requires it. The first layer, Metadata (`description`), acts as a lightweight discovery signal that tells Claude when the Skill applies without loading the method into every conversation.\n\nOnce a request matches the metadata boundary, Claude loads the second layer: Instructions, which codify the repeatable step-by-step procedure (separating facts from assumptions, extracting evidence, and marking gaps) while omitting one-time conversational chatter. The third layer, Supporting Resources, holds deeper materials such as team ticket templates, examples, or Kamori log scripts outside the initial request, supplying depth on demand without cluttering every prompt.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Layer 1 — Metadata Recognition',
          detail:
            'A specific description defines the relevance boundary so Claude triggers the Skill on ticket-drafting tasks rather than every mention of "bug."',
        },
        {
          step: '2',
          title: 'Layer 2 — Instruction Execution',
          detail:
            'The body enforces the five-step epistemic procedure (facts vs. assumptions, symptom, evidence, Markdown draft, missing info).',
        },
        {
          step: '3',
          title: 'Layer 3 — Supporting Resource Retrieval',
          detail:
            'Optional templates and tool conventions stay out of the prompt until the active task requires formatting or external log retrieval.',
        },
      ],
      keyTakeaways: [
        'Metadata must be narrow enough to avoid false triggers on casual questions yet broad enough to catch all valid task variations.',
        'Skill instructions generalize the method across cases rather than pasting a transcript of a single past conversation.',
        'Progressive disclosure keeps the working context lean while preserving access to deep team templates and scripts.',
      ],
      commonPitfalls: [
        'Writing a vague metadata description like "Helps with bugs and logs" that forces the Skill into unrelated coding chats.',
        'Turning the supporting resources layer into an uncurated dumping ground of obsolete examples and conflicting rules.',
      ],
      figures: [
        {
          file: 'B39004_3_2.png',
          originalLabel: 'Figure 3.2 – The three layers of a Skill',
          bierutTitle: 'Partition Discovery, Procedure, and Depth Across Three Distinct Layers',
          editorialAnalysis:
            'Figure 3.2 contrasts a monolithic prompt against the three-layer Skill hierarchy: Metadata ("When might this apply?"), Instructions ("What method should Claude follow?"), and Supporting Resources ("What extra material helps when depth is needed?"). This structural separation prevents context bloat while preserving procedural rigor.',
          keyTakeaways: [
            'Each layer answers a single operational question at a specific stage of task execution.',
            'Separating discovery from depth keeps idle token consumption near zero.',
          ],
        },
      ],
    },
    {
      id: 'cbtp-ch03-sec3',
      sectionNumber: '3.3',
      title: 'From Prompt to Skill: The Four Structural Shifts and Candidate Signals',
      subtitle: 'Evaluating workflows across Activation, Ownership, Scope, and Context pressures',
      coreMechanism:
        'A Skill differs from a saved prompt not because it lives in a `SKILL.md` file, but because it transforms four operational dimensions of the system. First, activation shifts from manual copy-paste to automatic environmental discovery via the description surface. Second, ownership moves from a private user habit to a reviewable, version-controlled team artifact. Third, scope expands from solving a single incident to guiding a family of related inputs—whether browser console errors, stack traces, or Kamori excerpts. Fourth, context shifts from front-loaded prompt dumping to layered disclosure.\n\nThese four structural shifts map directly to four evaluation signals that determine whether a task deserves to become a Skill: Recurrence (points to activation), Drift (points to shared ownership), Judgment (points to family-wide scope), and Context Cost (points to layered storage). Tasks exhibiting all four pressures form core Spine Skills (`bug-ticket-from-logs`), while narrower convention or continuity tasks become supporting Orbit Skills (`commit-message-helper`, `repo-orientation`, `pr-summary`, `acceptance-criteria-builder`, `handoff-summary`, and `code-review-checklist`).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit the Four Pressure Signals',
          detail:
            'Verify whether the task repeats frequently, drifts when written from memory, requires epistemic judgment, and carries heavy background context.',
        },
        {
          step: '2',
          title: 'Separate Spine from Orbit Candidates',
          detail:
            'Elevate high-judgment, four-signal workflows like `bug-ticket-from-logs` to Spine status while grouping convention helpers as Orbit Skills.',
        },
        {
          step: '3',
          title: 'Define Stable Core vs. Variable Edges',
          detail:
            'Draft a minimal candidate outline that locks the invariant reasoning method while leaving case-specific logs and diffs as runtime inputs.',
        },
      ],
      keyTakeaways: [
        'The four candidate pressures map 1-to-1 to the four system changes: Recurrence to Activation, Drift to Ownership, Judgment to Scope, and Context Cost to Context.',
        'Converting disposable, one-off prompts into Skills only relocates clutter from the chat window into the filesystem.',
        'A strong Skill candidate exhibits a stable procedural core surrounded by variable runtime edges.',
      ],
      commonPitfalls: [
        'Overloading v1 of a Skill with every conceivable browser error and edge case instead of starting with a clean task boundary.',
        'Treating simple, low-stakes formatting requests as Spine Skills when they require zero epistemic judgment.',
      ],
      figures: [
        {
          file: 'B39004_3_3.png',
          originalLabel: 'Figure 3.3 – From prompt to Skill: what changes',
          bierutTitle: 'Shift Instructions from One-Off Chat Requests to Maintained System Artifacts',
          editorialAnalysis:
            'Figure 3.3 maps the four systemic transformations that occur when a prompt becomes a Skill: manual invocation becomes environmental activation, personal habits become shared team ownership, single-case answers become family-wide scope, and front-loaded text becomes layered context.',
          keyTakeaways: [
            'The metadata description is an active discovery surface, not decorative documentation.',
            'Shared ownership makes the reasoning method inspectable and maintainable across the engineering team.',
          ],
        },
        {
          file: 'B39004_3_4.png',
          originalLabel: 'Figure 3.4 – From prompt candidate to Skill candidate',
          bierutTitle: 'Filter Prompt Habits Through Four Operational Pressures Before Building',
          editorialAnalysis:
            'Figure 3.4 illustrates the decision gate between a useful prompt on the left and a validated Skill candidate on the right. Only tasks that generate sustained pressure across recurrence, drift, judgment, and context cost graduate into structured reuse.',
          keyTakeaways: [
            'Working once in chat proves a prompt is helpful; surviving the four-signal filter proves it deserves to be a Skill.',
            '`bug-ticket-from-logs` serves as the Spine Skill because it satisfies all four threshold signals simultaneously.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Instruction Packaging Trade-Off Matrix: Prompts vs. Orbit and Spine Skills',
      description:
        'Comparing four ways to manage instructions across activation mechanics, drift resistance, judgment depth, and context overhead.',
      headers: [
        'Artifact Type',
        'Activation Surface',
        'Drift Resistance',
        'Judgment & Scope',
        'Context Window Cost',
        'Primary Example',
      ],
      rows: [
        [
          'One-Off Chat Prompt',
          'Manual typing per turn',
          'None (rebuilt from memory)',
          'Single immediate question',
          'Low (live request only)',
          'Quick console error explanation',
        ],
        [
          'Saved Snippet Note',
          'Manual search & copy-paste',
          'Low (unedited paste variations)',
          'Narrow case template',
          'High (front-loads all rules)',
          'Personal notes file of prompts',
        ],
        [
          'Orbit Skill',
          'Auto-discovered via metadata',
          'High (versioned convention)',
          'Moderate (convention & continuity)',
          'Low (2-layer progressive load)',
          'commit-message-helper, repo-orientation',
        ],
        [
          'Spine Skill',
          'Auto-discovered via metadata',
          'Maximum (enforced epistemic rules)',
          'High (separates facts vs. guesses)',
          'Optimized (3-layer on-demand depth)',
          'bug-ticket-from-logs',
        ],
      ],
      verdictRule:
        'Keep disposable questions as one-off prompts; promote recurring convention or session-continuity tasks to Orbit Skills; invest in full three-layer Spine Skills when a workflow combines high recurrence, severe drift risk, epistemic judgment, and heavy reference context.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'cbtp-ch03-scen1',
      title: 'Eliminating Hallucinated Root Causes in Triage Bug Tickets',
      roleAndContext:
        'Lead Frontend Engineer triaging intermittent `localStorage` persistence failures in a web application across a five-person developer team.',
      symptomOrFailure:
        'Developers paste console errors into Claude with casual prompts like "analyze these logs and write a ticket," producing inconsistent tickets that mix guessed causes with observed symptoms and invent reproduction steps.',
      naiveFixAndWhyItFails:
        'Sharing a massive 1,500-word prompt template in Slack fails because rushed engineers forget to paste half the constraints or overload the chat window until Claude ignores raw stack traces.',
      firstPrinciplesSolution:
        'Package the workflow into the `bug-ticket-from-logs` Skill with a crisp discovery description, a five-step instruction body that enforces fact-versus-assumption separation, and an external Markdown ticket template.',
      measurableOutcome:
        'Every generated bug ticket preserves verbatim log evidence, isolates user-facing symptoms from hypotheses, and explicitly marks missing reproduction steps with zero manual copy-pasting.',
    },
    {
      id: 'cbtp-ch03-scen2',
      title: 'Preventing False-Positive Skill Activation Across Debugging Sessions',
      roleAndContext:
        'AI Workflow Architect designing a project Skill repository containing `bug-ticket-from-logs`, `commit-message-helper`, and `repo-orientation`.',
      symptomOrFailure:
        'Claude attempts to draft a formal Markdown bug ticket every time a developer asks a quick question containing the word "bug" or pastes a single console line while coding.',
      naiveFixAndWhyItFails:
        'Stuffing the entire 50-line procedural checklist and ticket template into the Skill `description` field bloats idle context and still fails to distinguish casual debugging from ticket drafting.',
      firstPrinciplesSolution:
        'Refine Layer 1 metadata into a precise discovery boundary: "Use when the user asks to create, draft, triage, or structure a developer-facing bug report from logs or runtime evidence."',
      measurableOutcome:
        'Claude ignores the Skill during routine code debugging and activates the full instruction layer only when explicitly asked to triage or draft an issue.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cbtp-ch03-q1',
        scenarioPrompt:
          'Over two weeks of debugging a persistence bug, an engineer notices that Claude’s bug tickets vary wildly—some separate observed symptoms from hypotheses, while others state guessed root causes as fact—even though the underlying Claude model version has not changed. What mechanism explains this degradation?',
        options: [
          {
            label: 'A',
            text: 'Model weight drift caused by long conversational sessions.',
            isCorrect: false,
            explanation: 'The model weights are static; the inconsistency comes from how the method is supplied.',
          },
          {
            label: 'B',
            text: 'Output drift caused by reconstructing the prompting method from human memory with subtle phrasing changes each session.',
            isCorrect: true,
            explanation:
              'When the task, format, and reasoning rules are rebuilt by hand each chat, small wording shifts ("analyze the logs" vs. "separate facts from assumptions") cause output drift.',
          },
          {
            label: 'C',
            text: 'Lack of temperature=0 configuration in the chat interface.',
            isCorrect: false,
            explanation: 'Even at low temperature, omitting explicit epistemic instructions changes the output structure.',
          },
          {
            label: 'D',
            text: 'Missing tool permissions for automated test execution.',
            isCorrect: false,
            explanation: 'The drift occurs in how existing evidence is structured, not in running external tools.',
          },
        ],
      },
      {
        id: 'cbtp-ch03-q2',
        scenarioPrompt:
          'Why does a Skill separate its contents into Metadata, Instructions, and Supporting Resources rather than placing all templates and examples directly inside the main prompt?',
        options: [
          {
            label: 'A',
            text: 'To apply progressive disclosure so Claude only scans a lightweight discovery signal at idle time and loads procedures or templates when the task requires them.',
            isCorrect: true,
            explanation:
              'Progressive disclosure protects the context window by decoupling task recognition (metadata) from method execution (instructions) and reference depth (supporting resources).',
          },
          {
            label: 'B',
            text: 'Because Markdown syntax prohibits combining YAML frontmatter with code examples in a single file.',
            isCorrect: false,
            explanation: 'Markdown permits combining them; the separation is an architectural context-management choice.',
          },
          {
            label: 'C',
            text: 'To encrypt proprietary team templates so the language model cannot read them during inference.',
            isCorrect: false,
            explanation: 'Supporting resources are meant to be read by Claude when the task requires extra depth.',
          },
          {
            label: 'D',
            text: 'To force the user to manually attach the supporting resource files on every chat turn.',
            isCorrect: false,
            explanation: 'Skills make resources part of the working environment so users stop manually pasting them.',
          },
        ],
      },
      {
        id: 'cbtp-ch03-q3',
        scenarioPrompt:
          'An engineer writes `description: Helps with logs and bugs` in the metadata layer of `bug-ticket-from-logs`. What failure mode will this cause in an agentic workspace?',
        options: [
          {
            label: 'A',
            text: 'Claude will never select the Skill because the description lacks Markdown headers.',
            isCorrect: false,
            explanation: 'Metadata descriptions are plain text strings in frontmatter, not Markdown headers.',
          },
          {
            label: 'B',
            text: 'The discovery surface is too broad, causing false-positive Skill activation whenever a user asks for a quick log explanation or code fix.',
            isCorrect: true,
            explanation:
              'Metadata defines the relevance boundary; an overly broad description pulls the bug-ticket procedure into conversations where the user only wanted a quick explanation.',
          },
          {
            label: 'C',
            text: 'The supporting resources layer will be deleted during build compilation.',
            isCorrect: false,
            explanation: 'Metadata breadth affects runtime discovery, not filesystem deletion.',
          },
          {
            label: 'D',
            text: 'Claude will refuse to read stack traces that do not contain the literal word "bug."',
            isCorrect: false,
            explanation: 'Semantic matching is broad, not a literal regex filter.',
          },
        ],
      },
      {
        id: 'cbtp-ch03-q4',
        scenarioPrompt:
          'When evaluating seven potential Skill candidates, why is `bug-ticket-from-logs` classified as the core Spine Skill while `commit-message-helper` is classified as an Orbit Skill?',
        options: [
          {
            label: 'A',
            text: 'Because commit messages are written less frequently than bug tickets in software projects.',
            isCorrect: false,
            explanation: 'Commit messages are actually more frequent, which is why frequency alone does not define a Spine Skill.',
          },
          {
            label: 'B',
            text: 'Because `bug-ticket-from-logs` combines high epistemic judgment (separating facts from assumptions across incomplete evidence) with all four pressure signals, whereas `commit-message-helper` primarily enforces a formatting convention.',
            isCorrect: true,
            explanation:
              'A Spine Skill carries heavy pressure across all four signals—recurrence, drift, judgment, and context cost—whereas `commit-message-helper` requires much less epistemic judgment.',
          },
          {
            label: 'C',
            text: 'Because Orbit Skills cannot include a metadata description layer.',
            isCorrect: false,
            explanation: 'Both Spine and Orbit Skills use the same three-layer Skill structure.',
          },
          {
            label: 'D',
            text: 'Because `commit-message-helper` can only be invoked once per repository.',
            isCorrect: false,
            explanation: 'Orbit Skills are invoked repeatedly whenever their trigger condition occurs.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'cbtp-ch03-fc1',
        category: 'foundation',
        front: 'What is Output Drift in conversational AI workflows, and how does it differ from ML model drift?',
        back: 'Output drift is the gradual loss of structural consistency, precision, or judgment across sessions caused by reconstructing prompts from human memory while the underlying model stays unchanged.',
        mentalHook: 'Static model + shifting human memory = drifting output.',
      },
      {
        id: 'cbtp-ch03-fc2',
        category: 'architecture',
        front: 'What are the three layers of a Skill and the exact question each layer answers?',
        back: 'Metadata ("When might this apply?"), Instructions ("What method should Claude follow?"), and Supporting Resources ("What extra material helps when the task needs depth?").',
        mentalHook: 'Trigger -> Procedure -> On-Demand Depth.',
      },
      {
        id: 'cbtp-ch03-fc3',
        category: 'optimization',
        front: 'How does Progressive Disclosure solve context pressure in a Skill?',
        back: 'It exposes only the lightweight metadata description at idle time, loads the procedural instructions only when a matching task is recognized, and fetches supporting templates only when needed.',
        mentalHook: 'Show the label always, open the manual on match, fetch the appendix on demand.',
      },
      {
        id: 'cbtp-ch03-fc4',
        category: 'architecture',
        front: 'What four systemic properties change when an ad-hoc prompt becomes a Skill?',
        back: 'Activation (manual paste to auto-discovery), Ownership (personal habit to reviewable team artifact), Scope (single case to a family of variable inputs), and Context (front-loaded dump to layered disclosure).',
        mentalHook: 'Activation, Ownership, Scope, Context (AOSC).',
      },
      {
        id: 'cbtp-ch03-fc5',
        category: 'evaluation',
        front: 'What are the four candidate signals that indicate a task deserves to become a Skill, and how do they map to the four structural shifts?',
        back: 'Recurrence maps to Activation, Drift maps to Ownership, Judgment maps to Scope, and Context Cost maps to Context.',
        mentalHook: 'Repeat -> Activate; Drift -> Own; Judge -> Scope; Cost -> Layer.',
      },
      {
        id: 'cbtp-ch03-fc6',
        category: 'adaptation',
        front: 'What distinguishes a Spine Skill (`bug-ticket-from-logs`) from Orbit Skills (`commit-message-helper`, `repo-orientation`, `handoff-summary`)?',
        back: 'A Spine Skill satisfies all four candidate signals with heavy epistemic judgment across incomplete evidence, while Orbit Skills handle narrower formatting conventions, onboarding tours, or session handoffs.',
        mentalHook: 'Spine = deep judgment backbone; Orbit = surrounding workflow helpers.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'cbtp-ch03-fc-1',
        conceptTitle: 'Why a Skill Is Not Just a Saved Prompt in a File',
        prompt:
          'A teammate argues: "A `SKILL.md` file is just a fancy text snippet—no different from keeping my favorite prompts in Notion and pasting them into chat." Explain why this comparison misses the architectural shift by walking through the four changes that occur when a prompt becomes a Skill.',
        rubricChecklist: [
          'Contrasts single-turn request execution (prompt) against environmental method availability (Skill).',
          'Explains the Activation shift: the metadata description serves as an automatic discovery surface rather than relying on manual copy-paste.',
          'Explains the Ownership and Scope shifts: moving from a private one-case habit to a versioned team method that handles a family of variable inputs.',
          'Explains the Context shift: using three-layer progressive disclosure instead of front-loading templates and rules into every chat window.',
        ],
        modelExplanation:
          'Storing a prompt in Notion only changes where the text sits; turning it into a Skill changes its role in the working system across four dimensions. First, activation flips from manual copy-paste to automatic discovery via the metadata description surface. Second, ownership shifts from an unreviewed personal habit to a shared, maintainable team artifact. Third, scope broadens from answering one isolated incident to guiding a family of variable cases (console errors, stack traces, or Kamori logs) using a stable epistemic core. Fourth, context moves from front-loading every rule and template into the live chat to progressive disclosure across metadata, instructions, and on-demand supporting resources.',
      },
      {
        id: 'cbtp-ch03-fc-2',
        conceptTitle: 'The Four-Signal Candidate Threshold (`bug-ticket-from-logs`)',
        prompt:
          'Explain how to decide whether a recurring prompt should stay a disposable chat request or graduate into a Skill, using the four pressure signals and showing why `bug-ticket-from-logs` qualifies as a Spine Skill.',
        rubricChecklist: [
          'Identifies the danger of turning every one-off prompt into a Skill (moving clutter from chat to the filesystem).',
          'Defines Recurrence and Drift: the task repeats often and loses structural consistency when reconstructed from human memory.',
          'Defines Judgment and Context Cost: the task requires separating observed facts from assumptions and carrying stable formatting rules.',
          'Demonstrates why `bug-ticket-from-logs` hits all four signals (stable method core with variable log edges) compared to simpler Orbit Skills.',
        ],
        modelExplanation:
          'Converting every helpful prompt into a Skill merely relocates clutter from the conversation into the file system. A task deserves to become a Skill only when it exhibits a stable procedural core surrounded by variable runtime edges across four pressure signals. First, Recurrence shows the task returns often enough to justify automatic activation. Second, Output Drift shows that reconstructing the prompt from memory degrades consistency, requiring shared ownership. Third, Judgment shows the task demands recurring epistemic decisions—like separating observed log evidence from inferred root causes—across a family of cases. Fourth, Context Cost shows that pasting background conventions into every turn pollutes the active chat. Because `bug-ticket-from-logs` carries heavy pressure across all four signals, it serves as the primary Spine Skill.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cbtp-skill-three-layers',
        label: 'Three-Layer Skill Architecture',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The structural partitioning of reusable agent know-how into Metadata (discovery signal), Instructions (explicit procedure), and Supporting Resources (on-demand templates and scripts).',
        whyItMatters:
          'Prevents monolithic prompt bloat while keeping deep reference materials accessible when needed.',
      },
      {
        id: 'cbtp-progressive-disclosure',
        label: 'Progressive Context Disclosure',
        category: 'optimization',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The context-engineering principle of exposing only a compact task-recognition signal at rest and loading procedural rules or templates only when the active task requires them.',
        whyItMatters:
          'Protects the active context window from becoming an overloaded storage dump of static boilerplate.',
      },
      {
        id: 'cbtp-output-drift',
        label: 'Method-Induced Output Drift',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'The session-to-session loss of structural consistency, depth, or epistemic caution caused by humans reconstructing prompt constraints from memory.',
        whyItMatters:
          'Explains why identical models produce erratic bug tickets when key rules like separating facts from assumptions are forgotten.',
      },
      {
        id: 'cbtp-discovery-surface',
        label: 'Metadata Discovery Surface',
        category: 'architecture',
        chapterNumber: 3,
        importance: 2,
        definition:
          'The concise `description` field in Layer 1 that defines the relevance boundary so Claude recognizes when a Skill applies.',
        whyItMatters:
          'Calibrates activation accuracy: too vague misses valid tasks, while too broad triggers false activations.',
      },
      {
        id: 'cbtp-four-signal-threshold',
        label: 'Four-Signal Candidate Threshold',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The diagnostic filter—Recurrence, Drift, Judgment, and Context Cost—used to evaluate whether a prompt habit deserves to become a maintained Skill.',
        formulaOrRule: 'Skill Candidate = Stable Method Core + Variable Input Edges across (Recurrence + Drift + Judgment + Context Cost)',
        whyItMatters:
          'Stops teams from cluttering the repository with disposable one-off prompts while surfacing high-leverage workflows.',
      },
      {
        id: 'cbtp-spine-vs-orbit-skills',
        label: 'Spine vs. Orbit Skill Taxonomy',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 3,
        definition:
          'The classification separating primary four-signal judgment workflows (`bug-ticket-from-logs`) from narrower convention and continuity helpers (`commit-message-helper`, `repo-orientation`, `handoff-summary`).',
        whyItMatters:
          'Guides implementation priority so teams build high-judgment foundational Skills first and surround them with lightweight workflow helpers.',
      },
    ],
    edges: [
      {
        source: 'cbtp-progressive-disclosure',
        target: 'cbtp-skill-three-layers',
        relationship: 'optimizes',
        explanation:
          'Progressive disclosure governs how the three Skill layers load into context sequentially rather than all at once.',
      },
      {
        source: 'cbtp-discovery-surface',
        target: 'cbtp-skill-three-layers',
        relationship: 'part_of',
        explanation:
          'The metadata discovery surface forms Layer 1 of the three-layer Skill architecture.',
      },
      {
        source: 'cbtp-skill-three-layers',
        target: 'cbtp-output-drift',
        relationship: 'mitigates',
        explanation:
          'Stabilizing the procedural method in Layer 2 instructions eliminates memory-dependent output drift across sessions.',
      },
      {
        source: 'cbtp-four-signal-threshold',
        target: 'cbtp-output-drift',
        relationship: 'evaluates',
        explanation:
          'The four-signal threshold measures output drift as the second core pressure justifying shared Skill ownership.',
      },
      {
        source: 'cbtp-four-signal-threshold',
        target: 'cbtp-spine-vs-orbit-skills',
        relationship: 'prerequisite_for',
        explanation:
          'Scoring candidates across the four pressure signals separates full Spine Skills from lighter Orbit Skills.',
      },
      {
        source: 'cbtp-discovery-surface',
        target: 'cbtp-progressive-disclosure',
        relationship: 'prerequisite_for',
        explanation:
          'An accurate metadata boundary is required so Claude can selectively disclose deeper instructions only on valid task matches.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 15,
    figuresIncluded: 4,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 3 sections (Why Skills exist, Three layers of a Skill, Progressive disclosure, A Skill is not just a better prompt, Four candidate signals, and the 7-candidate Spine/Orbit shortlist) with all 4 extracted figures (B39004_3_1.png to B39004_3_4.png) verified.',
  },
};
