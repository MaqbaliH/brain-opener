import { ChapterMastery } from '../../../types/book';

export const cbtpCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'From Prompt to Skills: The Limits of One-Off AI Use',
  subtitle:
    'Why conversational copy-paste prompting breaks under repetition, and how recurring diagnostic patterns evolve into methods, templates, skills, and agentic workflows',
  readingTimeMinutes: 7,
  sourceWordCount: 4742,
  executiveThesis:
    'One-off prompting compresses the path from an ambiguous error to a testable hypothesis, but it fails as soon as work repeats because the diagnostic structure lives only inside ephemeral chat sessions. Engineering leverage emerges when developers stop phrasing clever isolated questions and instead extract recurring patterns into explicit methods, parameterized templates, and tool-connected skills.',
  paradigmShift: {
    oldWay:
      'Ad-Hoc Copy-Paste Prompting: Paste raw stack traces into disconnected chat sessions and reconstruct project context, constraints, and output formatting from memory every time an issue occurs.',
    newWay:
      'Method-First Agentic Engineering: Separate the stable diagnostic procedure from variable problem inputs, packaging the method into reusable templates, filesystem skills, and tool-connected workflows.',
    whyItChanged:
      'Because LLM outputs are probabilistic and sensitive to framing, reconstructing prompts from memory introduces structural drift and output inconsistency across repeated engineering tasks.',
  },
  customDiagrams: [
    {
      id: 'cbtp-ch01-svg-evolution',
      title: 'The Five-Stage Evolution from Ad-Hoc Prompt to Autonomous Agent',
      subtitle:
        'How informal debugging questions mature into structured methods, parameterized templates, invocable skills, and stateful workflows',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="cbtpCh1Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="cbtpArr1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#cbtpCh1Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">ABSTRACTION LADDER: FROM ONE-OFF PROMPT TO AGENTIC WORKFLOW</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Each rung externalizes human memory into explicit structure, system integration, and closed-loop execution</text>

  <!-- Stage 1: Question -->
  <rect x="28" y="78" width="136" height="230" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <rect x="38" y="88" width="46" height="20" rx="4" fill="#334155" />
  <text x="61" y="102" fill="#cbd5e1" font-size="9.5" font-weight="700" text-anchor="middle">STAGE 1</text>
  <text x="96" y="126" fill="#f8fafc" font-size="12.5" font-weight="700" text-anchor="middle">Raw Prompt</text>
  <text x="96" y="144" fill="#94a3b8" font-size="9.5" text-anchor="middle">"What does this mean?"</text>
  <line x1="42" y1="158" x2="150" y2="158" stroke="#334155" stroke-width="1" />
  <text x="42" y="178" fill="#cbd5e1" font-size="9.5">• Zero project context</text>
  <text x="42" y="196" fill="#cbd5e1" font-size="9.5">• Single-use answer</text>
  <text x="42" y="214" fill="#cbd5e1" font-size="9.5">• High hallucination risk</text>
  <rect x="40" y="258" width="112" height="36" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="96" y="274" fill="#f59e0b" font-size="9" font-weight="700" text-anchor="middle">REUSABILITY: NONE</text>
  <text x="96" y="287" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ephemeral chat turn</text>

  <!-- Stage 2: Method -->
  <rect x="180" y="78" width="136" height="230" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <rect x="190" y="88" width="46" height="20" rx="4" fill="#451a03" />
  <text x="213" y="102" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">STAGE 2</text>
  <text x="248" y="126" fill="#fef3c7" font-size="12.5" font-weight="700" text-anchor="middle">Explicit Method</text>
  <text x="248" y="144" fill="#fcd34d" font-size="9.5" text-anchor="middle">Ordered diagnostic steps</text>
  <line x1="194" y1="158" x2="302" y2="158" stroke="#334155" stroke-width="1" />
  <text x="194" y="178" fill="#cbd5e1" font-size="9.5">• 1. Restate &amp; rank causes</text>
  <text x="194" y="196" fill="#cbd5e1" font-size="9.5">• 2. Locate target files</text>
  <text x="194" y="214" fill="#cbd5e1" font-size="9.5">• 3. Smallest verify step</text>
  <rect x="192" y="258" width="112" height="36" rx="5" fill="#0f172a" stroke="#b45309" />
  <text x="248" y="274" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">REUSABILITY: LOW</text>
  <text x="248" y="287" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tied to current chat</text>

  <!-- Stage 3: Template -->
  <rect x="332" y="78" width="136" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="342" y="88" width="46" height="20" rx="4" fill="#0c4a6e" />
  <text x="365" y="102" fill="#7dd3fc" font-size="9.5" font-weight="700" text-anchor="middle">STAGE 3</text>
  <text x="400" y="126" fill="#e0f2fe" font-size="12.5" font-weight="700" text-anchor="middle">Template</text>
  <text x="400" y="144" fill="#7dd3fc" font-size="9.5" text-anchor="middle">Structure + Placeholders</text>
  <line x1="346" y1="158" x2="454" y2="158" stroke="#334155" stroke-width="1" />
  <text x="346" y="178" fill="#cbd5e1" font-size="9.5">• Fixed task &amp; process</text>
  <text x="346" y="196" fill="#cbd5e1" font-size="9.5">• [describe issue] slot</text>
  <text x="346" y="214" fill="#cbd5e1" font-size="9.5">• [paste error log] slot</text>
  <rect x="344" y="258" width="112" height="36" rx="5" fill="#0f172a" stroke="#0284c7" />
  <text x="400" y="274" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">REUSABILITY: MEDIUM</text>
  <text x="400" y="287" fill="#94a3b8" font-size="8.5" text-anchor="middle">Manual copy-paste</text>

  <!-- Stage 4: Skill -->
  <rect x="484" y="78" width="136" height="230" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <rect x="494" y="88" width="46" height="20" rx="4" fill="#3b0764" />
  <text x="517" y="102" fill="#d8b4fe" font-size="9.5" font-weight="700" text-anchor="middle">STAGE 4</text>
  <text x="552" y="126" fill="#f3e8ff" font-size="12.5" font-weight="700" text-anchor="middle">Invocable Skill</text>
  <text x="552" y="144" fill="#d8b4fe" font-size="9.5" text-anchor="middle">Packaged Markdown Unit</text>
  <line x1="498" y1="158" x2="606" y2="158" stroke="#334155" stroke-width="1" />
  <text x="498" y="178" fill="#cbd5e1" font-size="9.5">• Stored in repo folder</text>
  <text x="498" y="196" fill="#cbd5e1" font-size="9.5">• Invoked on demand</text>
  <text x="498" y="214" fill="#cbd5e1" font-size="9.5">• Guides tool selection</text>
  <rect x="496" y="258" width="112" height="36" rx="5" fill="#0f172a" stroke="#9333ea" />
  <text x="552" y="274" fill="#c084fc" font-size="9" font-weight="700" text-anchor="middle">REUSABILITY: HIGH</text>
  <text x="552" y="287" fill="#94a3b8" font-size="8.5" text-anchor="middle">Shared team standard</text>

  <!-- Stage 5: Workflow & Agent -->
  <rect x="636" y="78" width="136" height="230" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <rect x="646" y="88" width="46" height="20" rx="4" fill="#064e3b" />
  <text x="669" y="102" fill="#6ee7b7" font-size="9.5" font-weight="700" text-anchor="middle">STAGE 5</text>
  <text x="704" y="126" fill="#ecfdf5" font-size="12.5" font-weight="700" text-anchor="middle">Agentic Loop</text>
  <text x="704" y="144" fill="#6ee7b7" font-size="9.5" text-anchor="middle">Method + Tools + State</text>
  <line x1="650" y1="158" x2="758" y2="158" stroke="#334155" stroke-width="1" />
  <text x="650" y="178" fill="#cbd5e1" font-size="9.5">• Reads files &amp; logs live</text>
  <text x="650" y="196" fill="#cbd5e1" font-size="9.5">• Executes &amp; tests code</text>
  <text x="650" y="214" fill="#cbd5e1" font-size="9.5">• Adapts to observations</text>
  <rect x="648" y="258" width="112" height="36" rx="5" fill="#0f172a" stroke="#059669" />
  <text x="704" y="274" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">SYSTEM INTEGRATED</text>
  <text x="704" y="287" fill="#94a3b8" font-size="8.5" text-anchor="middle">Supervised autonomy</text>

  <!-- Connectors -->
  <line x1="164" y1="190" x2="178" y2="190" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cbtpArr1)" />
  <line x1="316" y1="190" x2="330" y2="190" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cbtpArr1)" />
  <line x1="468" y1="190" x2="482" y2="190" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cbtpArr1)" />
  <line x1="620" y1="190" x2="634" y2="190" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cbtpArr1)" />

  <!-- Bottom Inflection Banner -->
  <rect x="28" y="326" width="288" height="68" rx="8" fill="#271a0c" stroke="#f59e0b" stroke-width="1.2" />
  <text x="172" y="348" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">PROMPT ENGINEERING ZONE (Stages 1–2)</text>
  <text x="172" y="366" fill="#fde68a" font-size="9.5" text-anchor="middle">Focus: "How do I phrase this question better right now?"</text>
  <text x="172" y="382" fill="#94a3b8" font-size="9" text-anchor="middle">Fragile: Relies on human memory and manual reconstruction</text>

  <rect x="332" y="326" width="440" height="68" rx="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.2" />
  <text x="552" y="348" fill="#7dd3fc" font-size="11" font-weight="700" text-anchor="middle">AGENTIC ENGINEERING ZONE (Stages 3–5)</text>
  <text x="552" y="366" fill="#bae6fd" font-size="9.5" text-anchor="middle">Focus: "What is the repeatable process, and how does the system run it?"</text>
  <text x="552" y="382" fill="#94a3b8" font-size="9" text-anchor="middle">Durable: Encodes operational structure into versioned templates and skills</text>
</svg>`,
      bierutCaption:
        'A five-stage progression showing how software teams escape the fragility of one-off prompting by separating invariant diagnostic logic from variable problem inputs and binding that logic to runtime tools.',
      annotations: [
        {
          step: '1',
          label: 'From Question to Method (Stages 1–2)',
          explanation:
            'Moving from "What does this error mean?" to a numbered diagnostic checklist shifts the model from generating generic prose to executing a structured task.',
        },
        {
          step: '2',
          label: 'The Template Abstraction Boundary (Stage 3)',
          explanation:
            'Factoring out [describe current issue] and [paste error log] placeholders locks the diagnostic workflow while letting problem data vary safely across sessions.',
        },
        {
          step: '3',
          label: 'Skills and Tool-Connected Agents (Stages 4–5)',
          explanation:
            'Packaging templates into invocable Skills and connecting them to file/runtime tools removes the human copy-paste bottleneck and enables closed-loop verification.',
        },
      ],
    },
    {
      id: 'cbtp-ch01-svg-drift',
      title: 'The Reconstruction Trap vs. Parameterized Template Stability',
      subtitle:
        'Why rebuilding prompts from memory causes structural drift and stochastic variance compared to locked diagnostic templates',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="cbtpCh1Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="cbtpArrRed" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
    <marker id="cbtpArrGreen" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#cbtpCh1Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">THE RECONSTRUCTION TRAP: PROMPT DRIFT vs. TEMPLATE STABILITY</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Why ad-hoc prompting degrades by the 3rd or 4th repetition while parameterized methods keep variance bounded</text>

  <!-- Left Panel: Ad-hoc Reconstruction Trap -->
  <rect x="28" y="72" width="360" height="324" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="208" y="96" fill="#fda4af" font-size="12.5" font-weight="700" text-anchor="middle">ONE-OFF PROMPT RECONSTRUCTION (Fragile)</text>
  <text x="208" y="113" fill="#94a3b8" font-size="9.5" text-anchor="middle">Structure re-invented from human memory in every new chat</text>

  <rect x="46" y="128" width="324" height="52" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="58" y="147" fill="#f8fafc" font-size="10.5" font-weight="700">Session 1 (Fresh Context): High Signal</text>
  <text x="58" y="165" fill="#94a3b8" font-size="9.5">Includes React/Vite stack + console log + 4 diagnostic checks</text>

  <line x1="208" y1="180" x2="208" y2="202" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpArrRed)" />

  <rect x="46" y="206" width="324" height="52" rx="6" fill="#27121a" stroke="#f43f5e" />
  <text x="58" y="225" fill="#fecdd3" font-size="10.5" font-weight="700">Session 2 (Memory Drift): Framing Shifts</text>
  <text x="58" y="243" fill="#fda4af" font-size="9.5">Omits verification step; adds noisy file dump -&gt; broad guess</text>

  <line x1="208" y1="258" x2="208" y2="280" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpArrRed)" />

  <rect x="46" y="284" width="324" height="52" rx="6" fill="#3b1219" stroke="#f43f5e" />
  <text x="58" y="303" fill="#fecdd3" font-size="10.5" font-weight="700">Session 3 (Context Loss + Non-Determinism)</text>
  <text x="58" y="321" fill="#fda4af" font-size="9.5">Different phrasing + LLM sampling -&gt; inconsistent, wrong file fix</text>

  <text x="208" y="362" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="middle">FAILURE: Engineer manages prompt phrasing instead of code</text>
  <text x="208" y="378" fill="#94a3b8" font-size="9" text-anchor="middle">Unbounded variance across repeated debugging sessions</text>

  <!-- Right Panel: Structured Method & Template -->
  <rect x="412" y="72" width="360" height="324" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="592" y="96" fill="#6ee7b7" font-size="12.5" font-weight="700" text-anchor="middle">PARAMETERIZED METHOD TEMPLATE (Repeatable)</text>
  <text x="592" y="113" fill="#94a3b8" font-size="9.5" text-anchor="middle">Invariant diagnostic method separated from variable error inputs</text>

  <rect x="430" y="128" width="150" height="104" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="505" y="148" fill="#7dd3fc" font-size="10" font-weight="700" text-anchor="middle">VARIABLE INPUTS</text>
  <text x="442" y="168" fill="#cbd5e1" font-size="9.5">• [describe issue]</text>
  <text x="442" y="186" fill="#cbd5e1" font-size="9.5">• [paste error log]</text>
  <text x="442" y="212" fill="#94a3b8" font-size="8.5">Changes per bug</text>

  <rect x="602" y="128" width="150" height="104" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="677" y="148" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">FIXED DIAGNOSTIC SPEC</text>
  <text x="612" y="166" fill="#d1fae5" font-size="9">1. Rank likely causes</text>
  <text x="612" y="182" fill="#d1fae5" font-size="9">2. Target files first</text>
  <text x="612" y="198" fill="#d1fae5" font-size="9">3. Smallest next step</text>
  <text x="612" y="214" fill="#d1fae5" font-size="9">4. Pre-edit verify check</text>

  <line x1="580" y1="180" x2="598" y2="180" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cbtpArrGreen)" />
  <line x1="592" y1="236" x2="592" y2="262" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cbtpArrGreen)" />

  <rect x="430" y="266" width="322" height="70" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="591" y="287" fill="#6ee7b7" font-size="10.5" font-weight="700" text-anchor="middle">BOUNDED, INSPECTABLE HYPOTHESIS OUTPUT</text>
  <text x="591" y="305" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Consistent chain of thought across Bug #1, Bug #2, and Bug #N</text>
  <text x="591" y="321" fill="#94a3b8" font-size="9" text-anchor="middle">Verified against real files, tests, and logs before code edits</text>

  <text x="592" y="362" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">SUCCESS: Engineer refines the process that drives the prompts</text>
  <text x="592" y="378" fill="#94a3b8" font-size="9" text-anchor="middle">Ready to package as an invocable Skill or automated Workflow</text>
</svg>`,
      bierutCaption:
        'Contrasting the entropy of memory-driven prompt reconstruction against the narrow output variance of a parameterized template that isolates changing inputs from a fixed diagnostic sequence.',
      annotations: [
        {
          step: '1',
          label: 'Dual Failure Modes of Repetition (Inconsistency & Drift)',
          explanation:
            'LLM sampling non-determinism (inconsistency) compounds with human phrasing changes across sessions (drift) to degrade answer quality over time.',
        },
        {
          step: '2',
          label: 'Orthogonal Separation of State and Procedure',
          explanation:
            'A template splits transient bug evidence (description and stack trace) from the invariant 7-step diagnostic procedure.',
        },
        {
          step: '3',
          label: 'Empirical Verification Against the System',
          explanation:
            'Every model output is treated as a falsifiable hypothesis that must be checked against real project files and test logs via the smallest possible change.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'cbtp-ch01-mm1',
      name: 'The Hypothesis-Not-Oracle Principle',
      tagline: 'Treat LLM responses as falsifiable diagnostic hypotheses rather than ground-truth facts',
      naiveIntuition:
        'When Claude explains a stack trace fluently and outputs a code snippet, developers assume the model has inspected the runtime truth and can paste the fix directly.',
      firstPrinciplesReality:
        'A disconnected LLM combines statistical training priors with whatever context is in the prompt; it favors globally common causes over project-specific conventions and can hallucinate nonexistent functions.',
      howToApply:
        'Before editing code, verify that every referenced file or symbol exists in your repository, apply the smallest possible change, and observe whether the console or test output changes as predicted.',
    },
    {
      id: 'cbtp-ch01-mm2',
      name: 'The Reconstruction Drift Trap',
      tagline: 'Rebuilding successful prompts from memory degrades output stability across repeated tasks',
      naiveIntuition:
        'Once you figure out how to prompt Claude to solve a bug, you can simply ask a similar question from memory the next time a bug appears.',
      firstPrinciplesReality:
        'Two forces erode repeated ad-hoc prompting: LLM non-determinism (inconsistency across runs) and human prompt drift (subtle omissions or additions of context when rewriting from memory).',
      howToApply:
        'Whenever you perform a diagnostic or engineering interaction more than twice, stop tuning individual prompt wording and extract the underlying sequence of steps into a saved method.',
    },
    {
      id: 'cbtp-ch01-mm3',
      name: 'Structure-Input Separation (Template Factorization)',
      tagline: 'Factor invariant engineering workflows away from transient problem payloads',
      naiveIntuition:
        'Improving AI results requires learning clever phrasing tricks or writing longer, more detailed one-off prompts for each new bug.',
      firstPrinciplesReality:
        'Just as functions in code separate algorithm logic from arguments, durable AI interactions separate the invariant process specification from variable problem inputs via explicit placeholders.',
      howToApply:
        'Convert recurring prompts into templates containing fixed Task and Process sections alongside bracketed placeholders like [describe current issue] and [paste error log].',
    },
  ],
  deepSections: [
    {
      id: 'cbtp-ch01-sec1',
      sectionNumber: '1.1',
      title: 'The Mechanics and Boundaries of One-Off Prompting',
      subtitle: 'How training patterns combine with prompt context, and why fluency masks environmental blindness',
      coreMechanism:
        'One-off prompting compresses the journey from an unfamiliar error to a first testable hypothesis. Instead of manually searching Stack Overflow fragments and stitching documentation across browser tabs, a developer provides a stack trace such as `TypeError: Cannot read properties of null (reading "map")` and receives a synthesized explanation. The quality of this output is governed by the intersection of two inputs: statistical patterns encoded in the model weights during training and the explicit context supplied in the prompt. Upgrading a bare question ("What does this error mean?") into a structured task specification—declaring the Vite/React/Express architecture, pasting the log, and requesting likely causes, target files, and pre-change checks—sharpens the response immediately.\n\nHowever, a disconnected chat session remains blind to your running application, file tree, and local conventions. Because the model relies on training frequency, it defaults to globally common fixes that may violate your project setup or hallucinate plausible-sounding functions. Consequently, every model response must be verified against the actual codebase via the smallest possible diagnostic step.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Frame Architecture and Symptom Context',
          detail:
            'State the runtime stack (e.g., React with Vite and Express), expected behavior, observed failure, and exact console stack trace.',
        },
        {
          step: '2',
          title: 'Specify the Diagnostic Output Shape',
          detail:
            'Instruct Claude to explain likely causes, identify which files to inspect first, suggest the smallest next debugging step, and define pre-edit verification checks.',
        },
        {
          step: '3',
          title: 'Verify Hypothesis Against the Live System',
          detail:
            'Confirm referenced files and functions exist in the codebase, apply a minimal change, and inspect test and console logs to validate or falsify the hypothesis.',
        },
      ],
      keyTakeaways: [
        'Good prompting shifts engineering effort from searching scattered fragments to specifying a structured diagnostic task.',
        'Model output quality emerges from the interaction between pre-trained statistical patterns and explicit user-supplied context.',
        'Linguistic fluency does not equal environmental truth; every suggested cause or code fix must be tested as a hypothesis against the running system.',
      ],
      commonPitfalls: [
        'Asking bare questions like "What does this error mean?" outside the project folder, yielding generic explanations detached from your architecture.',
        'Framing a prompt too narrowly around a suspected cause, which biases the model to confirm your framing even when the root bug lies elsewhere.',
        'Blindly applying multi-line code suggestions without first verifying that referenced files, props, or helper functions exist.',
      ],
      figures: [],
    },
    {
      id: 'cbtp-ch01-sec2',
      sectionNumber: '1.2',
      title: 'Why One-Off Prompting Fails Under Repetition: Reconstruction, Inconsistency, and Drift',
      subtitle: 'Diagnosing the cognitive friction and quality decay that appear on the third and fourth use',
      coreMechanism:
        'A one-off prompt succeeds when the task is singular and the context is fresh in the developer’s mind. Breakdown begins as soon as the work repeats across a second, third, or fourth bug in the same codebase. Because the diagnostic structure of the first successful conversation was never recorded outside that chat window, the developer faces the problem of reconstruction: attempting to rewrite a high-performing prompt from memory while juggling a new symptom.\n\nReconstructing prompts from memory exposes two systemic failure modes: inconsistency and drift. Inconsistency stems from the probabilistic nature of LLMs—even similar prompts can emphasize different causes or debugging paths across runs. Drift stems from the human operator: with each new session, you unconsciously add details that feel urgent and drop structural constraints that made the earlier prompt work. Combined with context loss across isolated chat sessions and context compression in long threads, the engineer ends up spending more cognitive energy managing prompt phrasing than debugging the application.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Ephemeral Success in Session 1',
          detail:
            'The engineer crafts an ad-hoc prompt with rich context and active guidance, resolving the immediate bug within a single conversation.',
        },
        {
          step: '2',
          title: 'Memory-Based Reconstruction in Session N',
          detail:
            'When a new rendering or persistence bug appears, the engineer attempts to recall the phrasing and context structure from earlier sessions.',
        },
        {
          step: '3',
          title: 'Onset of Structural Drift and Output Variance',
          detail:
            'Omitted constraints and over-included noise interact with model non-determinism, producing unfocused or misleading diagnostic paths.',
        },
      ],
      keyTakeaways: [
        'One-off prompting hits a hard ceiling as soon as a task repeats because ephemeral conversations do not persist how you work.',
        'Inconsistency (model stochasticity) and drift (human phrasing shifts during reconstruction) jointly degrade output reliability over time.',
        'New chat sessions suffer from complete context loss, while excessively long sessions degrade under context compression and token limits.',
      ],
      commonPitfalls: [
        'Treating declining answer quality on the third or fourth bug as a model failure rather than a symptom of unrecorded prompt structure.',
        'Dumping excessive, unfiltered files into a reconstructed prompt, which dilutes model attention and reduces diagnostic precision.',
        'Staying inside a single sprawling chat thread across unrelated tasks until context compression erases early architectural constraints.',
      ],
      figures: [],
    },
    {
      id: 'cbtp-ch01-sec3',
      sectionNumber: '1.3',
      title: 'From Clever Inputs to Reusable Methods, Templates, Skills, and Agents',
      subtitle: 'Ascending the abstraction hierarchy by externalizing process structure and connecting runtime tools',
      coreMechanism:
        'Escaping the reconstruction trap requires shifting from prompt engineering ("What should I ask this time?") to agentic engineering ("What is the repeatable process I am following?"). When you recognize that every debugging session follows the same cognitive sequence—framing the system, ranking likely causes, locating files, proposing the smallest check, and distinguishing competing hypotheses—you can make that pattern explicit as a seven-step diagnostic method. While Claude remains non-deterministic, locking the method narrows output variation and turns a black-box exchange into an inspectable chain of thought.\n\nOnce the method is explicit, you factor out the invariant structure from the changing inputs to create a parameterized template with `[describe current issue]` and `[paste error log]` slots. Yet a template still requires manual copy-pasting and human context shuttling. Packaging the template as an invocable Claude Skill eliminates manual reconstruction, and binding that method to file, log, and runtime tools transforms a static specification into a multi-step workflow and ultimately a supervised agent.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Extract Pattern into an Explicit Method',
          detail:
            'Document the recurring 7-step diagnostic sequence (restate problem, identify causes, explain fit, locate files, smallest step, pre-change check, distinguish causes).',
        },
        {
          step: '2',
          title: 'Factor Method into a Parameterized Template',
          detail:
            'Lock the Fixed Task and Process sections while isolating variable bug descriptions and error logs inside explicit placeholder slots.',
        },
        {
          step: '3',
          title: 'Package as a Skill and Connect Workflow Tools',
          detail:
            'Store the method as an invocable Skill and grant file/runtime access so the system can read logs, test hypotheses, and act across steps.',
        },
      ],
      keyTakeaways: [
        'Templates elevate the level of abstraction from answering an individual question to encoding a repeatable engineering process.',
        'Explicit diagnostic guardrails make the model’s chain of thought visible and narrow non-deterministic variation into a predictable band.',
        'An agent is not a disconnected invention; it is an explicit method extended with memory, system tools, and closed-loop action over time.',
      ],
      commonPitfalls: [
        'Stopping at role-prompting ("Act as a senior React engineer") without defining the explicit step-by-step diagnostic procedure.',
        'Mixing project-specific one-off error details into the fixed Process section of a template, breaking its portability across future bugs.',
        'Expecting a text template alone to inspect live runtime state without packaging it into a tool-connected skill or workflow.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Evolution of AI Interaction Abstractions (Chapter 1 Progression)',
      description:
        'Comparing the five structural stages from ad-hoc questions to stateful agents across setup cost, repeatability, context access, and human burden.',
      headers: [
        'Abstraction Stage',
        'Primary Unit of Work',
        'Setup Effort',
        'Output Consistency Across Repetitions',
        'System & File Access',
        'Human Operator Burden',
      ],
      rows: [
        [
          '1. Minimal One-Off Prompt',
          'Single question + raw error log',
          'Near zero (seconds)',
          'Very Low (generic guesses, high drift)',
          'None (blind to repo)',
          'High (filter noise, map to code manually)',
        ],
        [
          '2. Structured Task Prompt',
          'Contextualized prompt for one bug',
          'Low (1–2 minutes)',
          'Fragile (requires memory reconstruction)',
          'Manual paste only',
          'High on repeat (must re-type framing each time)',
        ],
        [
          '3. Parameterized Template',
          'Fixed process + [input placeholders]',
          'Medium (design once)',
          'High (narrow, bounded variation)',
          'Manual slot filling',
          'Medium (copy template, paste logs, run checks)',
        ],
        [
          '4. Reusable Skill',
          'Invocable Markdown method package',
          'Medium (file in repo)',
          'Very High (standardized across team)',
          'Guides connected tools',
          'Low (invoke skill, review structured findings)',
        ],
        [
          '5. Agentic Workflow',
          'Method + tools + multi-step loop',
          'High (bounds & tools)',
          'High (verified against live system)',
          'Direct file, log & test access',
          'Supervisory (steer goal, approve edits, verify)',
        ],
      ],
      verdictRule:
        'Use a Structured Task Prompt for a genuine one-off question; extract a Parameterized Template the second time a task repeats; promote to a repo-stored Skill and Agentic Workflow whenever the method requires live file inspection, test execution, or team-wide standardization.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'cbtp-ch01-scen1',
      title: 'Eliminating Prompt Drift in Recurring React/Vite Debugging',
      roleAndContext:
        'Frontend engineer maintaining a React (Vite) and Express task-list application where state and rendering bugs surface regularly during feature work.',
      symptomOrFailure:
        'The first time `TypeError: Cannot read properties of null (reading "map")` occurred in `TaskList.jsx`, pasting it into Claude yielded a helpful fix; over the next four bugs, ad-hoc prompts produced vague guesses and suggested editing unrelated components.',
      naiveFixAndWhyItFails:
        'Adding conversational nudges like "Think step-by-step and be more accurate" in each new chat fails because the engineer still reconstructs project context from memory, causing prompt drift and omitting pre-change verification criteria.',
      firstPrinciplesSolution:
        'Extract a 7-step diagnostic template that locks the Vite/React architecture and requires Claude to restate the problem, rank causes with evidence, pinpoint files to inspect first, propose the smallest debugging step, define pre-change checks, and distinguish between competing causes.',
      measurableOutcome:
        'Eliminates prompt reconstruction overhead across sessions and constrains every debugging response to an actionable, falsifiable checklist before any code is modified.',
    },
    {
      id: 'cbtp-ch01-scen2',
      title: 'Preventing Hallucinated Fixes from Disconnected Chat Sessions',
      roleAndContext:
        'Full-stack developer using an external browser chat session outside the repository folder to troubleshoot failed persistence requests.',
      symptomOrFailure:
        'Claude fluently suggests updating a `syncLocalTasks()` utility and modifying an Express middleware route that do not exist in the project, breaking the build when pasted.',
      naiveFixAndWhyItFails:
        'Prompting Claude "Are you sure that function exists?" inside the same disconnected chat fails because the model has no tool access to inspect the file tree and merely generates another plausible hypothesis from training priors.',
      firstPrinciplesSolution:
        'Run Claude inside the codebase directory with file-reading access and enforce a template verification rule: check the existence of every referenced file and symbol, apply the smallest possible adjustment, and validate via `npm run dev` console output.',
      measurableOutcome:
        'Zero broken builds from hallucinated symbol references, transforming model suggestions from unverified edits into empirical checks against the live repository.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cbtp-ch01-q1',
        scenarioPrompt:
          'You paste a React console error into a disconnected Claude chat with the prompt "What does this error mean?" and receive a fluent explanation recommending a change to a standard Redux reducer—even though your app uses plain React state and `localStorage`. Which mechanism explains this failure?',
        options: [
          {
            label: 'A',
            text: 'The model suffered context compression due to token window exhaustion on the first turn.',
            isCorrect: false,
            explanation:
              'A single short stack trace on turn one does not exhaust or compress the context window.',
          },
          {
            label: 'B',
            text: 'Without explicit architectural context or file access, the LLM defaults to high-frequency statistical patterns from its training data.',
            isCorrect: true,
            explanation:
              'Output quality is the product of model training priors and prompt context; when project context is missing, the model relies on globally common patterns from training.',
          },
          {
            label: 'C',
            text: 'The prompt used a parameterized template instead of role-based prompting.',
            isCorrect: false,
            explanation:
              'The prompt was a minimal bare question, not a parameterized template.',
          },
          {
            label: 'D',
            text: 'Claude Skills automatically overrode the local repository configuration.',
            isCorrect: false,
            explanation:
              'No Skill was invoked in a disconnected chat session.',
          },
        ],
      },
      {
        id: 'cbtp-ch01-q2',
        scenarioPrompt:
          'Over two weeks of debugging a Vite/Express project, an engineer notices that her fourth and fifth debugging sessions with Claude take twice as long and produce worse file recommendations than her first session, even though the bugs are similar in complexity. What two forces are interacting here?',
        options: [
          {
            label: 'A',
            text: 'Model weight degradation and local disk cache corruption.',
            isCorrect: false,
            explanation:
              'LLM weights are static during inference and local disk caches do not alter chat reasoning.',
          },
          {
            label: 'B',
            text: 'Inconsistency (non-deterministic LLM sampling) and drift (subtle shifts in structure as the engineer reconstructs prompts from memory).',
            isCorrect: true,
            explanation:
              'Rebuilding prompts from memory introduces structural drift in framing while LLM non-determinism adds output inconsistency across isolated runs.',
          },
          {
            label: 'C',
            text: 'Template over-parameterization and excessive tool permissions.',
            isCorrect: false,
            explanation:
              'The engineer is still using ad-hoc one-off prompts rather than templates or tools.',
          },
          {
            label: 'D',
            text: 'Subagent delegation overhead and MCP protocol latency.',
            isCorrect: false,
            explanation:
              'This scenario involves manual one-off chat sessions, not subagents or MCP servers.',
          },
        ],
      },
      {
        id: 'cbtp-ch01-q3',
        scenarioPrompt:
          'What is the defining structural transition when an engineer moves from an explicit diagnostic method (Code 1.5) to a reusable template (Code 1.6)?',
        options: [
          {
            label: 'A',
            text: 'Granting the model unrestricted shell execution rights to fix the bug autonomously.',
            isCorrect: false,
            explanation:
              'Templates are text structures with placeholders; they do not by themselves grant shell execution permissions.',
          },
          {
            label: 'B',
            text: 'Separating the invariant task and process structure from the changing problem inputs via explicit placeholders.',
            isCorrect: true,
            explanation:
              'A template keeps the Task and Process sections fixed while isolating variable inputs like `[describe current issue]` and `[paste error log]` in dedicated slots.',
          },
          {
            label: 'C',
            text: 'Removing all step-by-step instructions so the model can choose its own reasoning format.',
            isCorrect: false,
            explanation:
              'Removing the process steps reverts the template back into an unstructured one-off prompt.',
          },
          {
            label: 'D',
            text: 'Compressing the entire git commit history into a single system prompt.',
            isCorrect: false,
            explanation:
              'Dumping commit history bloats context rather than separating invariant method from variable input.',
          },
        ],
      },
      {
        id: 'cbtp-ch01-q4',
        scenarioPrompt:
          'Even after creating a clean, parameterized debugging template, what fundamental limitation still remains before transitioning to Skills and Workflows?',
        options: [
          {
            label: 'A',
            text: 'Templates cannot specify ordered steps or verification criteria.',
            isCorrect: false,
            explanation:
              'Templates explicitly encode ordered process steps and pre-change verification criteria.',
          },
          {
            label: 'B',
            text: 'Templates force the LLM to become 100% deterministic at the token level.',
            isCorrect: false,
            explanation:
              'LLMs remain probabilistic; templates narrow variation into a manageable band rather than making token sampling deterministic.',
          },
          {
            label: 'C',
            text: 'Execution and integration remain manual: the human must still copy the template, paste logs, supply file context, and run checks across sessions.',
            isCorrect: true,
            explanation:
              'A text template is reusable but not yet integrated into the system; packaging it as a Skill and connecting tools is required to automate context gathering and action.',
          },
          {
            label: 'D',
            text: 'Templates can only be used for backend Express bugs and fail on React components.',
            isCorrect: false,
            explanation:
              'Templates are domain-agnostic and work across frontend, backend, or full-stack tasks.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'cbtp-ch01-fc1',
        category: 'foundation',
        front: 'What two factors jointly determine the quality of a one-off prompt response in Claude?',
        back: 'The statistical patterns the model learned during training and the explicit context (architecture, constraints, logs, task shape) provided in the prompt.',
        mentalHook: 'Model brings the patterns; you bring the situational context.',
      },
      {
        id: 'cbtp-ch01-fc2',
        category: 'evaluation',
        front: 'How does LLM hallucination typically manifest during practical software debugging?',
        back: 'Not as obvious nonsense, but as a fluent, plausible suggestion that does not fit your specific setup—such as pointing to an unrelated file, solving a generic variant of the bug, or inventing a helper function.',
        mentalHook: 'Fluency is not truth; treat every model answer as a hypothesis to falsify.',
      },
      {
        id: 'cbtp-ch01-fc3',
        category: 'foundation',
        front: 'Define the "Problem of Reconstruction" in one-off AI use.',
        back: 'The cognitive burden and accuracy loss that occur when a developer tries to rewrite a previously successful prompt structure from memory in a new conversation.',
        mentalHook: 'Unrecorded methods vanish when the chat tab closes.',
      },
      {
        id: 'cbtp-ch01-fc4',
        category: 'optimization',
        front: 'Contrast "Inconsistency" vs. "Drift" across repeated prompting sessions.',
        back: 'Inconsistency is model-side stochastic variation across similar inputs; Drift is human-side structural shifting as you add or omit details when rewriting prompts from memory.',
        mentalHook: 'Inconsistency comes from the model; Drift comes from human memory.',
      },
      {
        id: 'cbtp-ch01-fc5',
        category: 'architecture',
        front: 'What marks the exact inflection point where Prompt Engineering becomes Agentic Engineering?',
        back: 'Shifting focus from "How do I phrase this question better right now?" to "What is the repeatable process I am following, and how can I encode and reuse its structure?"',
        mentalHook: 'Stop polishing one-off inputs; start engineering repeatable methods.',
      },
      {
        id: 'cbtp-ch01-fc6',
        category: 'architecture',
        front: 'How do Pattern, Method, Template, Skill, and Agent relate to one another?',
        back: 'A recurring sequence of work is a Pattern; made explicit, it becomes a Method; separated from inputs via placeholders, a Template; packaged for invocation, a Skill; extended with memory, tools, and multi-step execution, an Agent.',
        mentalHook: 'Pattern -> Method -> Template -> Skill -> Agent.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'cbtp-ch01-feyn1',
        conceptTitle: 'Why Clever Prompting Fails on the Third or Fourth Repetition',
        prompt:
          'Explain to a teammate who prides themselves on writing clever ad-hoc prompts why their approach breaks down when debugging recurring issues across a sprint, and how extracting a template fixes the underlying mechanism.',
        rubricChecklist: [
          'Identifies that one-off prompt structure exists only in the moment and must be reconstructed from memory in new chats.',
          'Distinguishes between LLM Inconsistency (non-deterministic output variance) and Human Drift (unintended phrasing/context shifts).',
          'Explains how context loss across isolated chats forces the human to manage the interaction instead of the code.',
          'Demonstrates how a Parameterized Template separates fixed diagnostic steps from variable bug inputs (`[describe issue]`, `[paste error log]`).',
        ],
        modelExplanation:
          'When you write a clever prompt for a single bug, it works because the context is fresh and you actively steer the conversation. By the third or fourth similar bug, you have to reconstruct that prompt from memory in a new chat session that has zero memory of your earlier work. Two mechanisms then degrade your results: LLM inconsistency (the model samples different diagnostic paths non-deterministically) and prompt drift (you unconsciously drop verification rules or add noisy details each time you rewrite the prompt). Instead of debugging code, you end up managing prompt phrasing. Extracting a template solves this by locking the invariant 7-step diagnostic method in place and leaving only explicit placeholders for the current issue description and error log, narrowing output variance into a repeatable, inspectable process.',
      },
      {
        id: 'cbtp-ch01-feyn2',
        conceptTitle: 'The Continuity from Diagnostic Method to Autonomous Agent',
        prompt:
          'A junior developer thinks "prompts" and "AI agents" are two completely unrelated technologies. Explain how an agent is actually constructed by evolving a simple debugging prompt through four structural stages.',
        rubricChecklist: [
          'Starts with recognizing a recurring Pattern in how a human frames, investigates, and verifies problems.',
          'Shows how codifying that sequence creates an explicit Method with visible chain-of-thought guardrails.',
          'Explains how separating fixed process from variable inputs yields a portable Template, and packaging it creates an invocable Skill.',
          'Concludes that connecting that Skill/Method to live system tools, memory, and multi-step decision loops produces an Agent.',
        ],
        modelExplanation:
          'An agent is not a magical black box separate from prompting; it is what happens when you systematically externalize how you work. First, you notice a recurring pattern in your debugging—you always frame the stack, rank causes, check specific files, and verify before editing. Second, you write that sequence down as an explicit method so you stop relying on memory. Third, you turn the method into a template by separating the fixed diagnostic rules from placeholders for the specific error log. Fourth, you package that template into an invocable Skill so you no longer copy-paste text. Finally, when you connect that method to tools that can read files, inspect logs, execute tests, and decide the next step based on observations over time, that structured method becomes an agent.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cbtp-ch01-node-prompt',
        label: 'One-Off Task Prompt',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'A single-session instruction combining problem context, error output, and desired response shape for an immediate issue.',
        whyItMatters:
          'Accelerates the path from confusion to a first testable hypothesis, but vanishes once the conversation ends.',
      },
      {
        id: 'cbtp-ch01-node-reconstruction',
        label: 'Reconstruction & Prompt Drift',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'The degradation of prompt structure and context precision when humans rewrite previously successful prompts from memory across isolated sessions.',
        whyItMatters:
          'Explains why ad-hoc prompting feels magical on the first use but becomes frustrating and inconsistent by the third or fourth repetition.',
      },
      {
        id: 'cbtp-ch01-node-hallucination',
        label: 'Contextual Hallucination',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Plausible, fluent model suggestions derived from global training patterns that fail to match the local codebase or invent nonexistent symbols.',
        whyItMatters:
          'Requires engineers to treat every LLM response as a falsifiable hypothesis that must be checked against real files and logs.',
      },
      {
        id: 'cbtp-ch01-node-method',
        label: 'Explicit Diagnostic Method',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition:
          'A documented, step-by-step procedure governing how the model should analyze a class of problems, rank causes, and specify verification checks.',
        whyItMatters:
          'Makes the chain of thought visible and bounds stochastic LLM variation across repeated engineering tasks.',
      },
      {
        id: 'cbtp-ch01-node-template',
        label: 'Parameterized Prompt Template',
        category: 'optimization',
        chapterNumber: 1,
        importance: 2,
        definition:
          'A reusable artifact that separates invariant task and process specifications from changing problem inputs via explicit placeholders.',
        whyItMatters:
          'Eliminates memory-based prompt reconstruction and enables portable, team-shareable diagnostic routines.',
      },
      {
        id: 'cbtp-ch01-node-skill-workflow',
        label: 'Invocable Skill & Workflow',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'A packaged method that can be invoked directly and connected to filesystem, runtime, and testing tools to act across multiple steps.',
        whyItMatters:
          'Bridges the gap between static text templates and supervised agents capable of observing and acting in the work environment.',
      },
    ],
    edges: [
      {
        source: 'cbtp-ch01-node-prompt',
        target: 'cbtp-ch01-node-reconstruction',
        relationship: 'trades_off_with',
        explanation:
          'Relying on ephemeral one-off prompts forces manual memory reconstruction whenever similar tasks repeat.',
      },
      {
        source: 'cbtp-ch01-node-method',
        target: 'cbtp-ch01-node-reconstruction',
        relationship: 'mitigates',
        explanation:
          'Codifying an explicit diagnostic method eliminates human prompt drift and narrows non-deterministic output inconsistency.',
      },
      {
        source: 'cbtp-ch01-node-method',
        target: 'cbtp-ch01-node-hallucination',
        relationship: 'mitigates',
        explanation:
          'Mandating file inspection and pre-edit verification steps catches plausible hallucinations before code is changed.',
      },
      {
        source: 'cbtp-ch01-node-method',
        target: 'cbtp-ch01-node-template',
        relationship: 'prerequisite_for',
        explanation:
          'You must first identify and formalize the invariant diagnostic method before factoring out variable input placeholders into a template.',
      },
      {
        source: 'cbtp-ch01-node-template',
        target: 'cbtp-ch01-node-skill-workflow',
        relationship: 'prerequisite_for',
        explanation:
          'A parameterized template provides the structural logic that gets packaged into an invocable Skill and wired into tool-enabled workflows.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 16,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 1 sections (What prompting made possible, Where one-off prompting starts to fail, Creating reusable method instead of clever inputs, From prompting to skills, workflows, and agents). Zero extracted figures in Ch 1 per manifest; 2 custom SVGs included.',
  },
};

export const cbtpCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'What Agentic Engineering Actually Means',
  subtitle:
    'Disentangling models, tools, skills, agents, and subagents across interfaces, memory, and access boundaries',
  readingTimeMinutes: 8,
  sourceWordCount: 6440,
  heroIllustrationUrl: '/books/claude-beyond-the-prompt/assets/B39004_2_1.png',
  executiveThesis:
    'Agentic engineering is not giving an LLM unrestricted autonomy and hoping for the best; it is designing the structural conditions under which AI work can repeat, act, remember, and remain human-supervised. Reliability requires separating the model that reasons, the tool that acts, the agentic loop that connects them via environmental observation, the skill that encodes reusable method, and the subagent that isolates delegated context.',
  paradigmShift: {
    oldWay:
      'Vibe-Driven Autonomy & Blurred Vocabulary: Label every capable AI feature an "agent," dump entire codebases into a single noisy chat thread, and equate more tools or autonomy with better engineering outcomes.',
    newWay:
      'Supervised Agentic Engineering: Select the smallest structure a task requires—prompt, skill, tool-enabled agentic loop, or isolated subagent—governed by explicit interfaces, persistent memory vs. working context, and permission boundaries.',
    whyItChanged:
      'Without environmental observation, verification gates, and context isolation, autonomous loops amplify bad assumptions, invoke the wrong tools, and pollute their working context until reasoning degrades.',
  },
  customDiagrams: [
    {
      id: 'cbtp-ch02-svg-taxonomy',
      title: 'The Four-Pillar Operational Taxonomy: Prompt vs. Skill vs. Agent vs. Subagent',
      subtitle:
        'How control, tool execution, reusability, and context isolation partition across the four core primitives of agentic engineering',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="cbtpCh2Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="cbtpCh2Arr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="cbtpCh2ArrPurp" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#cbtpCh2Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">OPERATIONAL ARCHITECTURE: PROMPT, SKILL, AGENT &amp; SUBAGENT</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Separating what reasons (Model), what acts (Tool), how it should work (Skill), and how attention scales (Subagent)</text>

  <!-- Left Column: Prompt & Skill (Non-Acting Instruction Primitives) -->
  <rect x="28" y="74" width="216" height="150" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="42" y="96" fill="#cbd5e1" font-size="11" font-weight="700">1. PROMPT (Current Request)</text>
  <text x="42" y="114" fill="#94a3b8" font-size="9.5">"I need one useful answer now."</text>
  <text x="42" y="136" fill="#e2e8f0" font-size="9.5">• Controls: Single response</text>
  <text x="42" y="154" fill="#e2e8f0" font-size="9.5">• Acts alone? No</text>
  <text x="42" y="172" fill="#e2e8f0" font-size="9.5">• Reusability: Low (ephemeral)</text>
  <text x="42" y="198" fill="#f59e0b" font-size="9" font-weight="600">Risk: Fragile or incomplete wording</text>

  <rect x="28" y="242" width="216" height="152" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="42" y="264" fill="#fbbf24" font-size="11" font-weight="700">2. SKILL (Reusable Method)</text>
  <text x="42" y="282" fill="#fde68a" font-size="9.5">"Follow this method again."</text>
  <text x="42" y="304" fill="#e2e8f0" font-size="9.5">• Controls: How agent approaches work</text>
  <text x="42" y="322" fill="#e2e8f0" font-size="9.5">• Acts alone? Never (instruction layer)</text>
  <text x="42" y="340" fill="#e2e8f0" font-size="9.5">• Guides which tools &amp; checks to run</text>
  <text x="42" y="366" fill="#f59e0b" font-size="9" font-weight="600">Risk: Method too broad, narrow, or stale</text>

  <!-- Center Column: Main Agentic Loop -->
  <rect x="272" y="74" width="268" height="320" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
  <text x="406" y="98" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">3. MAIN AGENT (The Core Loop)</text>
  <text x="406" y="114" fill="#94a3b8" font-size="9.5" text-anchor="middle">Connects Model Reasoning + Tools + Feedback</text>

  <rect x="292" y="128" width="228" height="40" rx="6" fill="#1e293b" stroke="#0284c7" />
  <text x="406" y="146" fill="#e0f2fe" font-size="10" font-weight="700" text-anchor="middle">MODEL (Reasoning Layer)</text>
  <text x="406" y="160" fill="#94a3b8" font-size="8.5" text-anchor="middle">Infers intent, plans next step, evaluates evidence</text>

  <rect x="292" y="182" width="228" height="40" rx="6" fill="#1e293b" stroke="#10b981" />
  <text x="406" y="200" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">TOOLS (Action Layer / MCP)</text>
  <text x="406" y="214" fill="#94a3b8" font-size="8.5" text-anchor="middle">File read/edit, test runner, Kamori logs, APIs</text>

  <rect x="292" y="236" width="228" height="46" rx="6" fill="#064e3b" stroke="#34d399" />
  <text x="406" y="255" fill="#ecfdf5" font-size="10" font-weight="700" text-anchor="middle">OBSERVATION -&gt; REVISION -&gt; VERIFY</text>
  <text x="406" y="271" fill="#a7f3d0" font-size="8.5" text-anchor="middle">Checks test diffs &amp; logs; stops or iterates</text>

  <rect x="292" y="296" width="228" height="82" rx="6" fill="#1e293b" stroke="#475569" />
  <text x="406" y="314" fill="#f8fafc" font-size="9.5" font-weight="700" text-anchor="middle">HUMAN SUPERVISOR GATEKEEPER</text>
  <text x="304" y="332" fill="#cbd5e1" font-size="9">• Confirms goal &amp; context boundaries</text>
  <text x="304" y="348" fill="#cbd5e1" font-size="9">• Approves consequential actions</text>
  <text x="304" y="364" fill="#cbd5e1" font-size="9">• Judges verification evidence at Stop</text>

  <!-- Arrows from Prompt & Skill into Main Agent -->
  <line x1="244" y1="148" x2="268" y2="148" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpCh2Arr)" />
  <line x1="244" y1="310" x2="268" y2="255" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpCh2Arr)" />

  <!-- Right Column: Subagents (Isolated Context Delegation) -->
  <rect x="568" y="74" width="204" height="320" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="670" y="98" fill="#d8b4fe" font-size="11.5" font-weight="700" text-anchor="middle">4. SUBAGENTS (Delegation)</text>
  <text x="670" y="114" fill="#94a3b8" font-size="9" text-anchor="middle">Bounded specialist contexts</text>

  <rect x="584" y="132" width="172" height="68" rx="6" fill="#0f172a" stroke="#9333ea" />
  <text x="670" y="150" fill="#f3e8ff" font-size="9.5" font-weight="700" text-anchor="middle">Subagent A: Persistence Check</text>
  <text x="670" y="166" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Inspects localStorage &amp; logs</text>
  <text x="670" y="182" fill="#c084fc" font-size="8.5" text-anchor="middle">Read-only tools • Isolated window</text>

  <rect x="584" y="214" width="172" height="68" rx="6" fill="#0f172a" stroke="#9333ea" />
  <text x="670" y="232" fill="#f3e8ff" font-size="9.5" font-weight="700" text-anchor="middle">Subagent B: Spec Reviewer</text>
  <text x="670" y="248" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Compares save behavior vs. spec</text>
  <text x="670" y="264" fill="#c084fc" font-size="8.5" text-anchor="middle">Returns concise summary only</text>

  <rect x="584" y="296" width="172" height="82" rx="6" fill="#2e1065" stroke="#c084fc" />
  <text x="670" y="315" fill="#e9d5ff" font-size="9.5" font-weight="700" text-anchor="middle">WHY ISOLATE CONTEXT?</text>
  <text x="594" y="333" fill="#ddd6fe" font-size="8.5">• Prevents raw log/diff pollution</text>
  <text x="594" y="349" fill="#ddd6fe" font-size="8.5">• Avoids context compression loss</text>
  <text x="594" y="365" fill="#ddd6fe" font-size="8.5">• Main agent keeps responsibility</text>

  <!-- Delegation / Return Arrows -->
  <line x1="540" y1="160" x2="564" y2="160" stroke="#c084fc" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpCh2ArrPurp)" />
  <line x1="564" y1="250" x2="540" y2="250" stroke="#c084fc" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpCh2ArrPurp)" />
</svg>`,
      bierutCaption:
        'A structural blueprint contrasting non-acting instruction layers (Prompts and Skills) with closed-loop execution systems (Agents) and context-isolated specialist workers (Subagents).',
      annotations: [
        {
          step: '1',
          label: 'Capabilities (Tools) vs. Methodology (Skills)',
          explanation:
            'Tools define what the agent can do (read files, run tests, query MCP), whereas Skills define how the agent should approach recurring work.',
        },
        {
          step: '2',
          label: 'The Seven-Stage Supervised Agentic Loop',
          explanation:
            'The main agent links Goal, Context, Action, Observation, Revision, Verification, and Stop under explicit human steering.',
        },
        {
          step: '3',
          label: 'Subagent Context Isolation',
          explanation:
            'Subagents absorb noisy intermediate investigation steps in separate context windows and return distilled findings without removing main-agent responsibility.',
        },
      ],
    },
    {
      id: 'cbtp-ch02-svg-layers',
      title: 'The Environmental Envelope: Interfaces, Memory vs. Context, and Access Boundaries',
      subtitle:
        'How the three concentric system layers govern what an agentic loop can observe, retain across sessions, and safely modify',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="cbtpCh2Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="cbtpArrEnv" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#cbtpCh2Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">ENVIRONMENTAL ENVELOPE AROUND THE AGENTIC LOOP</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Why the identical LLM behaves differently across Chat, IDE, and Terminal environments</text>

  <!-- Layer 1: Interfaces (Top Left) -->
  <rect x="28" y="74" width="236" height="154" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="96" fill="#7dd3fc" font-size="11" font-weight="700">LAYER 1: INTERFACES (Observation)</text>
  <text x="42" y="114" fill="#94a3b8" font-size="9">Shapes what agent sees &amp; how human steers</text>
  <text x="42" y="136" fill="#e2e8f0" font-size="9.5">• Chat UI: Conversational, pasted text only</text>
  <text x="42" y="156" fill="#e2e8f0" font-size="9.5">• IDE UI: Line-numbered files, inline diffs</text>
  <text x="42" y="176" fill="#e2e8f0" font-size="9.5">• Terminal UI: Scripts, CLI tools, test suites</text>
  <text x="42" y="204" fill="#38bdf8" font-size="9" font-weight="600">Rule: Observation quality bounds loop quality</text>

  <!-- Layer 2: Continuity - Context vs Memory vs Skill (Bottom Left) -->
  <rect x="28" y="244" width="356" height="152" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="42" y="266" fill="#d8b4fe" font-size="11" font-weight="700">LAYER 2: CONTINUITY TRIAD (Do Not Confuse)</text>
  <rect x="42" y="280" width="102" height="98" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="93" y="298" fill="#7dd3fc" font-size="9.5" font-weight="700" text-anchor="middle">CONTEXT</text>
  <text x="93" y="314" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Working surface</text>
  <text x="93" y="328" fill="#cbd5e1" font-size="8.5" text-anchor="middle">right now</text>
  <text x="93" y="352" fill="#94a3b8" font-size="8" text-anchor="middle">Subject to session</text>
  <text x="93" y="364" fill="#94a3b8" font-size="8" text-anchor="middle">compression</text>

  <rect x="155" y="280" width="102" height="98" rx="6" fill="#0f172a" stroke="#a855f7" />
  <text x="206" y="298" fill="#d8b4fe" font-size="9.5" font-weight="700" text-anchor="middle">MEMORY</text>
  <text x="206" y="314" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Retained facts</text>
  <text x="206" y="328" fill="#cbd5e1" font-size="8.5" text-anchor="middle">across sessions</text>
  <text x="206" y="352" fill="#94a3b8" font-size="8" text-anchor="middle">Persistent rules,</text>
  <text x="206" y="364" fill="#94a3b8" font-size="8" text-anchor="middle">tickets &amp; notes</text>

  <rect x="268" y="280" width="102" height="98" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="319" y="298" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">SKILL</text>
  <text x="319" y="314" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Reusable</text>
  <text x="319" y="328" fill="#cbd5e1" font-size="8.5" text-anchor="middle">know-how</text>
  <text x="319" y="352" fill="#94a3b8" font-size="8" text-anchor="middle">Procedures stored</text>
  <text x="319" y="364" fill="#94a3b8" font-size="8" text-anchor="middle">in Markdown</text>

  <!-- Center Nucleus: The Core Agentic Loop -->
  <rect x="288" y="74" width="224" height="154" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="400" y="98" fill="#6ee7b7" font-size="11.5" font-weight="700" text-anchor="middle">CORE AGENTIC LOOP</text>
  <text x="400" y="118" fill="#ecfdf5" font-size="9.5" text-anchor="middle">Goal -&gt; Context -&gt; Action</text>
  <text x="400" y="136" fill="#ecfdf5" font-size="9.5" text-anchor="middle">-&gt; Observation -&gt; Revision</text>
  <text x="400" y="154" fill="#ecfdf5" font-size="9.5" text-anchor="middle">-&gt; Verification -&gt; Stop</text>
  <rect x="308" y="172" width="184" height="40" rx="5" fill="#0f172a" stroke="#34d399" />
  <text x="400" y="190" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">TRANSPARENCY REQUIREMENT</text>
  <text x="400" y="204" fill="#a7f3d0" font-size="8" text-anchor="middle">Visible reasoning, tools, method &amp; state</text>

  <!-- Layer 3: Access & Consequence Escalation Ladder (Right) -->
  <rect x="536" y="74" width="236" height="322" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="654" y="96" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">LAYER 3: ACCESS &amp; BOUNDARIES</text>
  <text x="654" y="114" fill="#94a3b8" font-size="9" text-anchor="middle">Wider access demands stricter oversight</text>

  <rect x="554" y="130" width="200" height="44" rx="5" fill="#0f172a" stroke="#64748b" />
  <text x="566" y="148" fill="#e2e8f0" font-size="9.5" font-weight="700">Tier 1: Advice Only (No Tools)</text>
  <text x="566" y="164" fill="#94a3b8" font-size="8.5">Zero direct system consequence</text>

  <rect x="554" y="184" width="200" height="44" rx="5" fill="#0f172a" stroke="#38bdf8" />
  <text x="566" y="202" fill="#7dd3fc" font-size="9.5" font-weight="700">Tier 2: Read-Only Inspection</text>
  <text x="566" y="218" fill="#94a3b8" font-size="8.5">Inspects files, Kamori logs &amp; state</text>

  <rect x="554" y="238" width="200" height="44" rx="5" fill="#271a0c" stroke="#f59e0b" />
  <text x="566" y="256" fill="#fbbf24" font-size="9.5" font-weight="700">Tier 3: Local Write &amp; Execute</text>
  <text x="566" y="272" fill="#fde68a" font-size="8.5">Edits code &amp; runs tests (Needs Verify)</text>

  <rect x="554" y="292" width="200" height="52" rx="5" fill="#3b1219" stroke="#f43f5e" />
  <text x="566" y="310" fill="#fda4af" font-size="9.5" font-weight="700">Tier 4: External Services (MCP)</text>
  <text x="566" y="326" fill="#fecdd3" font-size="8.5">Effects outside repo -&gt; Mandatory</text>
  <text x="566" y="338" fill="#fecdd3" font-size="8.5">human gatekeeper approval</text>

  <text x="654" y="374" fill="#f43f5e" font-size="9.5" font-weight="700" text-anchor="middle">TRUST = EXPLICIT PERMISSION BOUNDARIES</text>

  <!-- Flow Connectors -->
  <line x1="264" y1="150" x2="284" y2="150" stroke="#34d399" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpArrEnv)" />
  <line x1="400" y1="244" x2="400" y2="230" stroke="#34d399" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpArrEnv)" />
  <line x1="512" y1="150" x2="532" y2="150" stroke="#34d399" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#cbtpArrEnv)" />
</svg>`,
      bierutCaption:
        'Mapping the three environmental layers—Interfaces (what is observable), Continuity (Context vs. Memory vs. Skill), and Access Tiers (what is touchable)—that turn a raw agentic loop into a trustworthy engineering system.',
      annotations: [
        {
          step: '1',
          label: 'Interface Surface Determines Observational Fidelity',
          explanation:
            'Moving from a chat window to an IDE or terminal shifts the agent from reasoning over incomplete user descriptions to inspecting line-numbered files and test runner output.',
        },
        {
          step: '2',
          label: 'Disentangling Context, Memory, and Skills',
          explanation:
            'Context is the current working surface (periodically compressed); Memory is retained facts across sessions; a Skill is reusable procedural know-how.',
        },
        {
          step: '3',
          label: 'Proportional Oversight Across Access Tiers',
          explanation:
            'As permissions escalate from read-only file access to local code edits and external MCP service calls, explicit boundaries and human approval gates must tighten proportionally.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'cbtp-ch02-mm1',
      name: 'The Minimum Viable Loop Principle',
      tagline: 'Never ask "Can I make this an agent?"—ask "What is the smallest structure this task needs?"',
      naiveIntuition:
        'Modern AI workflows should default to autonomous multi-agent setups armed with every available MCP tool.',
      firstPrinciplesReality:
        'More autonomy and more tools increase failure surfaces; an agent that confidently invokes the wrong tool or loops without a clear stopping condition is worse than a plain prompt.',
      howToApply:
        'Match the architecture to the task: use a Prompt for one answer now, a Skill for a repeatable method, Tools for external data/action, an Agent for multi-turn observe-and-revise loops, and a Subagent only when a bounded subtask pollutes the main context.',
    },
    {
      id: 'cbtp-ch02-mm2',
      name: 'Working Surface vs. Retained Facts vs. Know-How',
      tagline: 'Keep Context, Memory, and Skills strictly separated when debugging workflow failures',
      naiveIntuition:
        'Everything you tell an AI assistant—project rules, current stack traces, past bug notes, and how-to guides—is just "context" or "memory" interchangeably.',
      firstPrinciplesReality:
        'Context is the immediate working surface (which gets condensed when long); Memory is factual state retained across sessions without dataset summarization; a Skill is procedural know-how stored as Markdown files.',
      howToApply:
        'Diagnose weak workflows by identifying which pillar is missing: if the agent knows the method but lacks facts, fix Memory/Context; if it has the facts but flails procedurally, provide a Skill; if it has both but loses focus, prune competing Context.',
    },
    {
      id: 'cbtp-ch02-mm3',
      name: 'Attention Distribution Without Responsibility Loss',
      tagline: 'Subagents isolate noisy intermediate context while the main agent and human retain ownership',
      naiveIntuition:
        'Spawning a subagent delegates responsibility for solving an ambiguous problem to a "smarter" specialist agent.',
      firstPrinciplesReality:
        'A subagent is not more powerful than the main agent; it is a scoped worker with an isolated context window designed to keep raw file dumps, logs, and intermediate test outputs from polluting the primary loop.',
      howToApply:
        'Delegate to a subagent only when a task has a clean conceptual boundary—defining explicitly what evidence it should inspect, whether its tools are read-only or write-enabled, and what concise findings it must return.',
    },
  ],
  deepSections: [
    {
      id: 'cbtp-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Model, Tool, and Agent: Anatomy of the Core Supervised Loop',
      subtitle: 'How statistical reasoning combines with environmental action, observation, verification, and stopping rules',
      coreMechanism:
        'Agentic engineering begins by separating three primitives that product marketing routinely conflates: the model reasons, the tool acts, and the agent connects both through a feedback loop. A Large Language Model (LLM) is a statistical next-token predictor that infers intent and proposes plans, but without tools it remains purely conversational. Tools—ranging from local file readers and test runners to external services exposed via the Model Context Protocol (MCP)—supply action capability without knowing the overarching goal. Connecting model reasoning to tool execution yields the seven-stage agentic loop: Goal, Context, Action, Observation, Revision, Verification, and Stop.\n\nThree mechanics keep this loop from degenerating into vibe coding. First, context must serve as a curated working surface (the exact failing test and source file) rather than an indiscriminate repo dump. Second, environmental observation—reading test output, Kamori logs, or code diffs after an action—prevents blind speculation. Third, explicit verification and a stopping condition ensure the agent halts when the bug is verified fixed or asks the human supervisor when evidence is ambiguous.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Goal Definition & Curated Context Gathering',
          detail:
            'The human defines the visible symptom (e.g., todo items disappear on refresh) and confirms the agent inspects relevant source files, localStorage behavior, and Kamori logs.',
        },
        {
          step: '2',
          title: 'Scoped Tool Action & Environmental Observation',
          detail:
            'The agent executes a focused action (reproduce bug, run test, edit file) and reads objective feedback from test runners, diffs, or logs.',
        },
        {
          step: '3',
          title: 'Evidence-Based Revision, Verification & Stop Gate',
          detail:
            'Guided by observation, the agent revises its approach, verifies the fix via passing tests and clean logs, and halts for human acceptance.',
        },
      ],
      keyTakeaways: [
        'An agent is not a smarter model; it is a model connected to tools, curated context, and environmental feedback across a multi-step loop.',
        'More tools or more context do not automatically improve results; an agent that confidently uses the wrong tool is less useful than an agent without tools.',
        'Verification and a defined stopping rule separate disciplined agentic engineering from open-ended drift and vibe coding.',
      ],
      commonPitfalls: [
        'Pasting an entire repository into the prompt instead of supplying the specific failing test, target file, and project conventions needed for the next decision.',
        'Allowing an agent to chain multiple code edits without observing test runner or log output after each step.',
        'Omitting stopping criteria, causing the agent to keep speculating and modifying files when it should pause and ask the user for clarification.',
      ],
      figures: [
        {
          file: 'B39004_2_1.png',
          originalLabel: 'Figure 2.1 – The agentic loop',
          bierutTitle: 'Close the Reasoning-Action Loop Through Environmental Observation',
          editorialAnalysis:
            'Figure 2.1 illustrates the minimal viable unit of agentic work: user intent enters as a Goal, the model reasons over Context to select a Tool Action, and the resulting environmental Observation feeds back into the next Revision and Verification cycle. Rather than producing a single monolithic answer, the agent orchestrates an iterative sequence of empirical checks.',
          keyTakeaways: [
            'Observation bridges tool execution and subsequent model decisions, preventing ungrounded guesswork.',
            'Human supervision wraps every stage of the loop—from confirming the initial goal to judging verification evidence at the stop gate.',
          ],
        },
      ],
    },
    {
      id: 'cbtp-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Skills vs. Agents and Subagent Context Isolation',
      subtitle: 'Packaging reusable procedural know-how in Markdown and delegating bounded specialist subtasks',
      coreMechanism:
        'Once the core loop is established, two structural layers govern how it scales across recurring and complex work: Skills and Subagents. A Skill is neither an agent nor a tool, and it never acts on its own. Whereas a tool defines what an agent can do (read files, run tests), a Skill defines how the agent should work within the loop (e.g., "When investigating save bugs, check Kamori logs, inspect localStorage, make the smallest edit, and run tests"). Stored as versioned Markdown files in folders, skills serve as shared operational memory for an engineering team—institutionalizing PR review standards, commit conventions, and debugging routines. However, a flawed or overly broad skill will reliably repeat bad methodology.\n\nWhen a single-threaded agentic loop accumulates too many file reads, test logs, and design corrections, context compression and noise degrade model steering. Subagents solve this by isolating a bounded question (such as verifying whether persistence behavior matches the spec) inside a separate worker context with restricted tool permissions, returning only a distilled summary to the main agent while the main agent retains overall responsibility.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Encode Recurring Methodology into a Narrow Skill',
          detail:
            'Package repeatable team practices (e.g., debugging persistence or reviewing PRs) as Markdown skill files that guide how the agent selects and sequences its tools.',
        },
        {
          step: '2',
          title: 'Detect Single-Thread Context Saturation',
          detail:
            'Recognize when a task spans separable concerns (e.g., localStorage persistence vs. test runner failures vs. business spec compliance) that would pollute a single context window.',
        },
        {
          step: '3',
          title: 'Delegate Bounded Subtasks to Isolated Subagents',
          detail:
            'Dispatch specialist subagents with explicit evidence boundaries and narrow (often read-only) tool access to return concise conclusions to the main loop.',
        },
      ],
      keyTakeaways: [
        'A tool defines what an agent can do; a skill shapes how the agent should do it within the loop.',
        'Skills are narrow, filesystem-based Markdown artifacts that codify team-wide operational practices, not vague injunctions like "Be better at coding."',
        'Subagents manage attention and prevent context pollution by isolating intermediate investigation steps in separate context windows while preserving main-agent accountability.',
      ],
      commonPitfalls: [
        'Writing overly broad skills ("Write clean code") that trigger in irrelevant situations, or outdated skills that make the agent repeat an incorrect procedure reliably.',
        'Spawning subagents for small, vague, or poorly understood tasks—which merely gives ambiguity another place to hide and adds coordination overhead.',
        'Allowing subagents unrestricted write permissions across the codebase instead of scoping whether they may edit files or only report findings.',
      ],
      figures: [],
    },
    {
      id: 'cbtp-ch02-sec3',
      sectionNumber: '2.3',
      title: 'The Environmental Envelope: Interfaces, Memory vs. Context, and Access Boundaries',
      subtitle: 'How execution surfaces, persistence layers, and permission tiers make agentic work transparent and safe',
      coreMechanism:
        'An agentic loop never operates in a vacuum; the same LLM exhibits radically different reliability depending on the three concentric layers surrounding it: Interfaces, Continuity (Context and Memory), and Access. First, the interface determines both what the agent can observe and how the human intervenes. A browser chat sees only pasted fragments; an IDE exposes line-numbered files and inline diffs; a terminal exposes scripts, CLI output, and test suites. Because the loop relies on observation, richer interface feedback directly sharpens agent revision.\n\nSecond, continuity requires separating three distinct concepts: Context is the material active in the current moment (periodically condensed into summaries during long sessions); Memory is retained factual information persisted across sessions without dataset summarization (project instructions, bug tickets, prior notes); and a Skill is reusable procedural know-how. Third, Access governs consequence: moving from advice-only to file inspection, local code edits, and external services requires proportional permission boundaries and human gatekeeper approval.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select the Observation Interface Surface',
          detail:
            'Choose Chat for conceptual framing, IDE for localized file inspection and diff review, or Terminal for command-driven test and script verification.',
        },
        {
          step: '2',
          title: 'Partition Context, Memory, and Skills Cleanly',
          detail:
            'Supply immediate evidence in Context, persist cross-session project facts and conventions in Memory, and store repeatable procedures in Skills.',
        },
        {
          step: '3',
          title: 'Enforce Access Tiers and Human Gatekeeper Approval',
          detail:
            'Explicitly define which files may be read, which commands may run, which edits require human sign-off, and which external systems remain off-limits.',
        },
      ],
      keyTakeaways: [
        'Interfaces are not merely visual skins for the user; they define the observational boundary of the agentic loop.',
        'Confusing Context (current working material), Memory (persisted cross-session facts), and Skills (reusable know-how) produces brittle workflows.',
        'Capability scales with consequence: wider access to local files, test runners, and external services requires stricter human supervision and explicit boundaries.',
      ],
      commonPitfalls: [
        'Expecting a chat interface to diagnose multi-file persistence bugs when the interface blocks the agent from observing live files and command outputs.',
        'Relying on ephemeral chat history as long-term memory instead of recording durable project conventions in persistent instruction files.',
        'Granting an agent write or external API access without transparency into what context it holds, which skill it is following, and where human approval gates sit.',
      ],
      figures: [
        {
          file: 'B39004_2_2.png',
          originalLabel: 'Figure 2.2 – The layers around the agentic loop',
          bierutTitle: 'Surround the Core Loop with Explicit Interface, Memory, and Access Layers',
          editorialAnalysis:
            'Figure 2.2 places the reasoning-action loop at the nucleus of a layered system architecture. Inside the loop, the Model, Tools, and Skills govern reasoning, action, and method; around the loop, Interfaces control observation, Memory provides cross-session continuity, and Access boundaries enforce safety and human oversight.',
          keyTakeaways: [
            'No single component (model, tool, or skill) suffices alone; reliability emerges from the structured boundaries connecting all layers.',
            'Transparency across reasoning, active context, retained memory, and access permissions is the prerequisite for trusting an agentic system.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Architectural Comparison: Prompt vs. Skill vs. Agent vs. Subagent (Table 2.3 Synthesis)',
      description:
        'Decision matrix mapping the four core abstractions of agentic engineering across control scope, autonomous action, tool usage, failure risks, and human supervisory role.',
      headers: [
        'Dimension',
        'Prompt',
        'Skill',
        'Agent',
        'Subagent',
      ],
      rows: [
        [
          'Core Definition',
          'A request in the current conversation',
          'A reusable method for recurring work (Markdown)',
          'A loop linking model reasoning, tools, context & feedback',
          'A delegated specialist context inside a larger workflow',
        ],
        [
          'Problem Solved',
          '"I need one useful answer now."',
          '"I need the system to follow this method again."',
          '"I need the system to act, observe & revise across steps."',
          '"I need one bounded part of the task handled separately."',
        ],
        [
          'What It Controls',
          'The current single response',
          'How the agent approaches a class of tasks',
          'The sequence of decisions, tool calls & verifications',
          'A focused subtask, its isolated context & returned summary',
        ],
        [
          'Acts on Its Own? / Tool Use',
          'No / Uses tools only if environment provides them',
          'No / Guides how available tools should be used',
          'Yes, via tools within permissions / Chooses & runs tools',
          'Only as delegated by main agent / Narrower tool access',
        ],
        [
          'Primary Failure Risk',
          'Wording is fragile, narrow, or incomplete',
          'Method is vague, outdated, too broad, or too narrow',
          'Acts with weak context, wrong tools, or no verification',
          'Adds coordination complexity or hides vague task scope',
        ],
        [
          'Human Engineering Role',
          'Ask clearly and judge the answer',
          'Design, test, maintain, and version the method',
          'Steer, approve consequential actions, interrupt & verify',
          'Define delegation boundary and judge returned findings',
        ],
      ],
      verdictRule:
        'Start with the smallest structure that makes work reliable: use a Prompt for single answers, codify a Skill when a method repeats, invoke an Agent when multi-step tool action and environmental verification are required, and spawn a Subagent only when a clearly bounded subtask must be isolated to keep the main context clean.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'cbtp-ch02-scen1',
      title: 'Debugging Intermittent Todo Persistence via the 7-Stage Supervised Loop',
      roleAndContext:
        'Developer using Claude Code in a terminal/IDE workspace to resolve a bug where todo items appear to save in the UI but vanish after a browser refresh.',
      symptomOrFailure:
        'In a chat-only session, asking "Why are tasks disappearing?" produces generic guesses about React state hooks because the model cannot inspect the repository’s `localStorage` logic or runtime Kamori logs.',
      naiveFixAndWhyItFails:
        'Enabling autonomous file-editing mode with a vague prompt ("Fix the save bug across the repo") risks the agent modifying UI components blindly without reproducing the failure or checking logs.',
      firstPrinciplesSolution:
        'Pair the agentic loop with a debugging Skill: (1) confirm Goal symptom, (2) gather Context from `localStorage` handlers and Kamori logs, (3) execute a minimal reproduction Action, (4) Observe test/log output, (5) Revise and apply the smallest edit, (6) Verify via passing test suite, and (7) Stop with a summary of cause and verification.',
      measurableOutcome:
        'Pinpoints the exact `localStorage` key mismatch via empirical log observation and verifies the fix with passing tests before presenting the diff for human sign-off.',
    },
    {
      id: 'cbtp-ch02-scen2',
      title: 'Preventing Context Pollution During Multi-Concern Investigation via Subagents',
      roleAndContext:
        'Tech lead orchestrating an agentic investigation of a complex persistence regression that spans `localStorage` serialization, failing integration tests, and business logic compliance.',
      symptomOrFailure:
        'Running all three investigations inside a single main agent loop floods the context window with hundreds of lines of stack traces, raw file contents, and test outputs, triggering context compression that causes the agent to forget early architectural constraints.',
      naiveFixAndWhyItFails:
        'Manually restarting the main agent session every ten minutes loses accumulated progress, while spawning unfocused subagents with vague instructions ("Check the codebase") duplicates work and creates conflicting edits.',
      firstPrinciplesSolution:
        'Keep overall responsibility in the main agent while delegating three strictly bounded, read-only subagents: one to inspect `localStorage` persistence paths, one to analyze failing test outputs, and one to verify whether observed behavior matches the product specification—each returning only a concise summary.',
      measurableOutcome:
        'Preserves a clean, high-signal working context in the main agent loop and eliminates context-compression amnesia across long debugging workflows.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cbtp-ch02-q1',
        scenarioPrompt:
          'A team wants their AI coding assistant to automatically check Kamori logs before editing any persistence file and always run the unit test suite before declaring a bug fixed. However, they notice the assistant already has file-read, file-edit, and test-runner tools installed. What architectural layer is missing?',
        options: [
          {
            label: 'A',
            text: 'An external MCP server to replace the local test runner.',
            isCorrect: false,
            explanation:
              'The agent already possesses the necessary tools to read files and run tests; adding another tool does not teach it the sequence of work.',
          },
          {
            label: 'B',
            text: 'A Skill that defines how the agent should sequence and apply its existing tools during recurring debugging tasks.',
            isCorrect: true,
            explanation:
              'Tools define what an agent can do, whereas a Skill is the reusable instruction layer that shapes how the agent should approach a recurring class of work within the loop.',
          },
          {
            label: 'C',
            text: 'A larger pre-trained LLM with more parameters.',
            isCorrect: false,
            explanation:
              'Project-specific operational procedures (like checking Kamori logs first) are not encoded in general model weights.',
          },
          {
            label: 'D',
            text: 'Switching the interface from an IDE to a browser chat window.',
            isCorrect: false,
            explanation:
              'Moving to a browser chat window would remove direct visibility into local files and test runners.',
          },
        ],
      },
      {
        id: 'cbtp-ch02-q2',
        scenarioPrompt:
          'Why does an agentic loop require environmental Observation and explicit Verification stages rather than allowing the LLM to plan and execute five consecutive file edits in a single pass?',
        options: [
          {
            label: 'A',
            text: 'Because LLMs cannot generate more than one file edit per API response.',
            isCorrect: false,
            explanation:
              'LLMs can easily generate multi-file edits in one pass, which is precisely what makes unverified execution dangerous.',
          },
          {
            label: 'B',
            text: 'Without Observation (reading test outputs, logs, or diffs after an action) and Verification, the model cannot learn from the environment or falsify a wrong plan, turning the workflow into guesswork.',
            isCorrect: true,
            explanation:
              'Observation provides objective environmental feedback after each action, and Verification confirms the change actually resolved the problem before stopping.',
          },
          {
            label: 'C',
            text: 'Because Observation automatically prevents context windows from growing.',
            isCorrect: false,
            explanation:
              'Observations add tool outputs to the context window, which is why context curation and subagents are needed for long loops.',
          },
          {
            label: 'D',
            text: 'Because tools can decide the overall project goal only during the Observation stage.',
            isCorrect: false,
            explanation:
              'Tools never interpret or decide the overall goal; the human defines the goal and the model reasons over observations.',
          },
        ],
      },
      {
        id: 'cbtp-ch02-q3',
        scenarioPrompt:
          'An engineer remarks: "Our agent has a Markdown file teaching it how to format bug reports, plus a persistent project note stating that `localStorage` keys use the `todo_v2_` prefix, plus the current stack trace pasted into this session." How are these three items classified across the continuity layer?',
        options: [
          {
            label: 'A',
            text: 'All three are identical forms of Working Context.',
            isCorrect: false,
            explanation:
              'Conflating procedural know-how, cross-session retained facts, and current session material leads to weak workflow design.',
          },
          {
            label: 'B',
            text: 'The Markdown procedure is a Skill (reusable know-how); the persistent prefix note is Memory (retained information across sessions); the current stack trace is Context (current working surface).',
            isCorrect: true,
            explanation:
              'Skills encode reusable procedural know-how, Memory retains facts across conversations without summarizing datasets, and Context is the immediate working surface for the current decision.',
          },
          {
            label: 'C',
            text: 'The stack trace is a Skill, the Markdown file is Memory, and the prefix note is a Subagent.',
            isCorrect: false,
            explanation:
              'A stack trace is transient session Context, and a Markdown procedure is a Skill, not Memory or a Subagent.',
          },
          {
            label: 'D',
            text: 'The Markdown file is an Interface, the prefix note is a Tool, and the stack trace is Access.',
            isCorrect: false,
            explanation:
              'None of these three items are interfaces, tools, or permission boundaries.',
          },
        ],
      },
      {
        id: 'cbtp-ch02-q4',
        scenarioPrompt:
          'When is delegating work to a Subagent an effective engineering decision, and when does it become an anti-pattern?',
        options: [
          {
            label: 'A',
            text: 'Effective whenever a task is vague and poorly understood; anti-pattern when the task has clear boundaries.',
            isCorrect: false,
            explanation:
              'Delegating a vague task to a subagent does not clarify it; it only gives ambiguity another place to hide.',
          },
          {
            label: 'B',
            text: 'Effective when a larger task contains a clearly bounded subtask whose intermediate logs and file reads would pollute the main context; anti-pattern when the task is small, vague, or lacks clear boundaries.',
            isCorrect: true,
            explanation:
              'Subagents exist to isolate bounded investigations in separate context windows and return concise findings without polluting the primary loop.',
          },
          {
            label: 'C',
            text: 'Effective only when the subagent is granted wider write permissions than the main agent.',
            isCorrect: false,
            explanation:
              'Subagents typically operate with narrower—often read-only—tool access than the main agent.',
          },
          {
            label: 'D',
            text: 'Effective when you want to transfer final task responsibility away from the main agent and human supervisor.',
            isCorrect: false,
            explanation:
              'Neither the main agent nor the human supervisor ever relinquishes overall responsibility when delegating to a subagent.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'cbtp-ch02-fc1',
        category: 'foundation',
        front: 'State the three-part functional distinction between a Model, a Tool, and an Agent.',
        back: 'The Model reasons and generates language; the Tool acts beyond text (files, commands, APIs); the Agent connects model reasoning and tool actions through an observation-driven feedback loop.',
        mentalHook: 'Model reasons; Tool acts; Agent loops.',
      },
      {
        id: 'cbtp-ch02-fc2',
        category: 'architecture',
        front: 'What are the seven sequential stages of the supervised agentic loop in Table 2.1?',
        back: 'Goal -> Context -> Action -> Observation -> Revision -> Verification -> Stop.',
        mentalHook: 'Gather, Act, Observe, Revise, Verify, Stop.',
      },
      {
        id: 'cbtp-ch02-fc3',
        category: 'adaptation',
        front: 'How does a Skill differ from a Tool inside an agentic workflow?',
        back: 'A Tool defines what the agent can do (capabilities like reading files or calling MCP), whereas a Skill shapes how the agent should do it (reusable methods, standards, and step sequences).',
        mentalHook: 'Tools supply capability; Skills supply methodology.',
      },
      {
        id: 'cbtp-ch02-fc4',
        category: 'optimization',
        front: 'What architectural problem does a Subagent solve inside a long-running agentic loop?',
        back: 'It prevents context pollution and context-compression loss in the main agent by isolating a bounded subtask, its restricted tools, and its noisy intermediate observations in a separate context window.',
        mentalHook: 'Subagents isolate noisy investigation steps and return clean summaries.',
      },
      {
        id: 'cbtp-ch02-fc5',
        category: 'data',
        front: 'Distinguish between Context, Memory, and Skill in the continuity layer.',
        back: 'Context is the working material available right now (subject to condensation); Memory is retained factual information persisted across sessions; Skill is reusable procedural know-how.',
        mentalHook: 'Context = working surface now; Memory = retained facts; Skill = reusable know-how.',
      },
      {
        id: 'cbtp-ch02-fc6',
        category: 'security',
        front: 'What is the core law governing the Access layer and human supervision in agentic engineering?',
        back: 'As an agent’s access expands—from advice-only to file inspection, code edits, and external service calls—its actions become more consequential, requiring explicit permission boundaries and human gatekeeper approval.',
        mentalHook: 'Wider access demands stricter boundaries and human verification.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'cbtp-ch02-feyn1',
        conceptTitle: 'Disentangling Prompt, Skill, Tool, Agent, and Subagent',
        prompt:
          'Your engineering manager says: "We already have Claude Code with MCP tools, so we have agents—why do we need to design Skills or Subagents?" Explain the distinct cognitive and architectural job of each primitive using the todo-app persistence bug as a concrete walkthrough.',
        rubricChecklist: [
          'Distinguishes Model (reasoning) and Tools/MCP (capabilities to read files, check logs, run tests) from the Agent (the loop connecting Goal, Context, Action, Observation, Revision, Verification, and Stop).',
          'Explains that having tools does not teach the agent your team’s method; a Skill packages reusable know-how (e.g., always check Kamori logs and `localStorage` first, make minimal edits, run tests).',
          'Shows why a single-threaded agent loop degrades when raw logs, file dumps, and test outputs accumulate, triggering context compression.',
          'Demonstrates how a Subagent isolates a bounded question (like checking whether save behavior matches the spec) in a separate context window and returns a concise summary while the main agent keeps responsibility.',
        ],
        modelExplanation:
          'Having a model and MCP tools gives you raw reasoning and raw capabilities—like reading files or running tests—connected inside an agentic loop. However, tools only define what the agent can do, not how your team expects the work to be done. Without a Skill, the agent has to rediscover your debugging method from scratch in every session; a Skill packages reusable know-how as a Markdown file (for instance, instructing the agent to inspect Kamori logs and `localStorage` keys before editing code and to run tests before stopping). Furthermore, as the main agent investigates a complex bug across persistence, tests, and specs, all those raw logs and diffs pile into a single context window until context compression erases key details. Spawning a Subagent solves this by delegating a strictly bounded subtask to an isolated context window with narrow permissions, returning only a clean summary so the main agent and human supervisor can steer reliably.',
      },
      {
        id: 'cbtp-ch02-feyn2',
        conceptTitle: 'The Three Surrounding Layers: Interfaces, Continuity, and Access Boundaries',
        prompt:
          'Explain why the exact same Claude model behaves completely differently in a browser chat window versus an IDE or terminal, and how Interfaces, Continuity (Context vs. Memory vs. Skill), and Access boundaries work together to differentiate Agentic Engineering from Vibe Coding.',
        rubricChecklist: [
          'Explains how the Interface layer governs observation and human intervention (chat sees only pasted text; IDE/terminal observe live line-numbered files, diffs, and command outputs).',
          'Cleanly separates Context (current working surface), Memory (retained facts across sessions), and Skills (reusable procedural know-how).',
          'Maps the Access escalation ladder (advice -> read inspection -> local code edits -> external services) to proportional permission boundaries.',
          'Contrasts vibe coding (blindly trusting autonomous output) with agentic engineering (transparent reasoning, explicit verification, and human gatekeeper oversight).',
        ],
        modelExplanation:
          'An agentic loop is shaped by the environment surrounding it. First, the Interface layer controls what the agent can observe: a browser chat only sees whatever snippets you remember to paste, whereas an IDE or terminal lets the loop observe line-numbered source files, inline diffs, and live test runner output. Second, the Continuity layer separates three things engineers often confuse: Context is the immediate working surface right now, Memory is factual information retained across sessions (such as persistent project notes or bug tickets), and Skills are reusable procedural know-how. Third, the Access layer defines what the agent is permitted to touch—escalating from read-only inspection to local file edits and external API calls. Agentic engineering differs from vibe coding because it pairs every increase in access with explicit permission boundaries, visible reasoning, empirical test verification, and a human gatekeeper who approves consequential changes.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cbtp-ch02-node-agentic-loop',
        label: 'The 7-Stage Agentic Loop',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition:
          'The core cycle (Goal, Context, Action, Observation, Revision, Verification, Stop) that links model reasoning with tool execution and environmental feedback.',
        whyItMatters:
          'Transforms static conversational advice into an iterative, empirically verified investigation under human supervision.',
      },
      {
        id: 'cbtp-ch02-node-tool-mcp',
        label: 'Tools & MCP Capabilities',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Action primitives—such as file operations, test runners, and external Model Context Protocol (MCP) servers—that let a model inspect and modify its environment.',
        whyItMatters:
          'Provides the mechanism for moving from advice to action, though tools themselves lack goal interpretation or methodological judgment.',
      },
      {
        id: 'cbtp-ch02-node-skill',
        label: 'Skill (Reusable Method Layer)',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition:
          'A filesystem Markdown artifact that teaches an agent how to perform a specific, recurring class of work and how to sequence its tools.',
        whyItMatters:
          'Serves as shared operational know-how across a team so agents follow consistent standards without rediscovering the method each time.',
      },
      {
        id: 'cbtp-ch02-node-subagent',
        label: 'Subagent (Isolated Specialist Context)',
        category: 'optimization',
        chapterNumber: 2,
        importance: 1,
        definition:
          'A delegated worker with its own isolated context window and restricted tool scope that handles a bounded subtask and returns concise findings to the main agent.',
        whyItMatters:
          'Prevents raw logs, file dumps, and intermediate steps from polluting and compressing the primary agentic loop’s working context.',
      },
      {
        id: 'cbtp-ch02-node-continuity-triad',
        label: 'Context vs. Memory Distinction',
        category: 'data',
        chapterNumber: 2,
        importance: 2,
        definition:
          'The separation between the current working surface (Context, subject to condensation) and retained cross-session facts (Memory, stored without dataset summarization).',
        whyItMatters:
          'Prevents workflow failures where an agent knows a method (Skill) but lacks durable project facts (Memory) or drowns in noisy session data (Context).',
      },
      {
        id: 'cbtp-ch02-node-access-boundaries',
        label: 'Interfaces & Access Boundaries',
        category: 'security',
        chapterNumber: 2,
        importance: 2,
        definition:
          'The environmental surfaces governing what an agent can observe (Chat, IDE, Terminal) and the permission tiers governing what it may read, edit, or execute.',
        whyItMatters:
          'Establishes trust and safety by pairing consequential write or external service capabilities with explicit human gatekeeper approval.',
      },
    ],
    edges: [
      {
        source: 'cbtp-ch02-node-tool-mcp',
        target: 'cbtp-ch02-node-agentic-loop',
        relationship: 'part_of',
        explanation:
          'Tools execute the Action stage inside the agentic loop and generate the environmental output captured during Observation.',
      },
      {
        source: 'cbtp-ch02-node-skill',
        target: 'cbtp-ch02-node-agentic-loop',
        relationship: 'optimizes',
        explanation:
          'A Skill shapes how the agentic loop approaches recurring tasks, which standards it applies, and which tools and verification steps it invokes.',
      },
      {
        source: 'cbtp-ch02-node-subagent',
        target: 'cbtp-ch02-node-agentic-loop',
        relationship: 'optimizes',
        explanation:
          'Subagents preserve the clarity of the main agentic loop by offloading bounded investigations into isolated context windows.',
      },
      {
        source: 'cbtp-ch02-node-continuity-triad',
        target: 'cbtp-ch02-node-agentic-loop',
        relationship: 'prerequisite_for',
        explanation:
          'Effective loop decisions require supplying the right working Context while retaining durable facts across sessions via Memory.',
      },
      {
        source: 'cbtp-ch02-node-access-boundaries',
        target: 'cbtp-ch02-node-tool-mcp',
        relationship: 'mitigates',
        explanation:
          'Explicit access boundaries and human approval gates mitigate the risk of consequential tool edits or external service mutations.',
      },
      {
        source: 'cbtp-ch02-node-access-boundaries',
        target: 'cbtp-ch02-node-agentic-loop',
        relationship: 'evaluates',
        explanation:
          'Interfaces and transparency boundaries allow the human gatekeeper to inspect what the loop is reasoning about and verify its results.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 15,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 2 sections (Model, tool, agent: the core loop; What a skill is, and what it is not; Agents and subagents; Interfaces, memory, and access) plus Tables 2.1, 2.2, 2.3 and Figures 2.1 (B39004_2_1.png) and 2.2 (B39004_2_2.png).',
  },
};
