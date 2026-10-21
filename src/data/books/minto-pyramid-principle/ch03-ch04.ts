import type { ChapterMastery } from '../../../types/book';

export const mppCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Part 3: Logic in Problem Solving',
  subtitle: 'Sequential Problem Analysis, the R1/R2 Problem Definition Framework, Diagnostic Frameworks, and Logic Trees',
  readingTimeMinutes: 8,
  sourceWordCount: 13867,
  executiveThesis:
    'Starting an investigation by gathering all available facts wastes up to 60% of analytical effort and produces unstructurable data dumps. Efficient problem solvers invert the workflow using Sequential Analysis: they first define the gap between the Undesired Result (R1) and Desired Result (R2) inside the Opening Scene, then construct MECE diagnostic frameworks—physical flow models, financial/task trees, and Yes/No choice structures—to test abductive hypotheses before collecting a single spreadsheet.',
  paradigmShift: {
    oldWay:
      'Analysts begin engagements by "boiling the ocean"—gathering exhaustive industry, market, and internal facts first, then struggling at the eleventh hour to sort findings into conclusions.',
    newWay:
      'Analysts pre-structure the pyramid by laying out the Problem Definition Framework (Opening Scene → Disturbing Event → R1 → R2) and building Yes/No diagnostic trees that target data gathering exclusively at falsifiable hypotheses.',
    whyItChanged:
      'Without a structural diagnostic model of the system that produced R1, analysts cannot judge which facts are relevant, leading to 60% wasted fieldwork and last-minute data gaps.',
  },
  customDiagrams: [
    {
      id: 'mpp-ch03-svg1',
      title: 'The Minto Problem Definition Framework & SCQA Translation',
      subtitle: 'Mapping Opening Scene, Disturbing Event, R1 (Undesired Result), and R2 (Desired Result) into the Introduction',
      bierutCaption:
        'Define every problem as a causal gap between R1 and R2 triggered by a Disturbing Event inside a visualized Opening Scene.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">THE PROBLEM DEFINITION FRAMEWORK: FROM R1/R2 GAP TO SCQA INTRODUCTION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Sequential Analysis Step 1 &amp; 2: Pinpointing what is going on, what we dislike (R1), and what we want (R2)</text>

  <!-- Left Panel: Situation Box (Opening Scene + Disturbing Event) -->
  <rect x="24" y="68" width="268" height="240" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="158" y="92" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. EXISTING SITUATION</text>

  <rect x="40" y="106" width="236" height="86" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="158" y="126" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">Starting Point / Opening Scene</text>
  <text x="158" y="144" text-anchor="middle" fill="#94a3b8" font-size="8.5">Visualized existing structure or process</text>
  <text x="158" y="160" text-anchor="middle" fill="#7dd3fc" font-size="8.5">e.g., 3 Warehouses serving 438 stores</text>
  <text x="158" y="176" text-anchor="middle" fill="#7dd3fc" font-size="8.5">or 3-step Prospect → Script → Delivery</text>

  <path d="M 158 192 L 158 210" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="210" width="236" height="82" rx="6" fill="#451a03" stroke="#f59e0b" />
  <text x="158" y="230" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Disturbing Event</text>
  <text x="158" y="248" text-anchor="middle" fill="#fcd34d" font-size="8.5">External / Internal / Recently Recognized</text>
  <text x="158" y="264" text-anchor="middle" fill="#cbd5e1" font-size="8.5">e.g., Q4 sales projection drops 10%</text>
  <text x="158" y="280" text-anchor="middle" fill="#cbd5e1" font-size="8.5">or 198 new stores added next year</text>

  <!-- Arrow from Situation to R1/R2 Gap -->
  <path d="M 292 188 L 336 140" stroke="#f87171" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 292 188 L 336 244" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Center Panel: R1 vs R2 Gap -->
  <rect x="336" y="68" width="214" height="240" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
  <text x="443" y="92" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="700">2. THE PROBLEM GAP</text>

  <rect x="352" y="106" width="182" height="72" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5" />
  <text x="443" y="126" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-weight="700">R1: Undesired Result</text>
  <text x="443" y="144" text-anchor="middle" fill="#fecaca" font-size="8.5">What we don't like now:</text>
  <text x="443" y="160" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Run out of capacity in 2 yrs</text>

  <path d="M 443 178 L 443 212" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4" />
  <text x="482" y="199" text-anchor="middle" fill="#c7d2fe" font-size="9" font-weight="700">GAP = ?</text>

  <rect x="352" y="212" width="182" height="78" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="443" y="232" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">R2: Desired Result</text>
  <text x="443" y="250" text-anchor="middle" fill="#d1fae5" font-size="8.5">Quantified target end-product:</text>
  <text x="443" y="266" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Sufficient capacity at lowest ROI</text>
  <text x="443" y="280" text-anchor="middle" fill="#cbd5e1" font-size="8.5">outlay &amp; same processing speed</text>

  <!-- Right Panel: 7 Solution States & Reader Question -->
  <rect x="576" y="68" width="200" height="240" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="676" y="92" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">3. READER QUESTION</text>

  <rect x="590" y="106" width="172" height="184" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="676" y="126" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">7 Reader Solution States:</text>
  <text x="676" y="146" text-anchor="middle" fill="#cbd5e1" font-size="8">1. Don't know how R1→R2</text>
  <text x="676" y="164" text-anchor="middle" fill="#cbd5e1" font-size="8">2. Have solution; is it right?</text>
  <text x="676" y="182" text-anchor="middle" fill="#cbd5e1" font-size="8">3. Have solution; how to implement?</text>
  <text x="676" y="200" text-anchor="middle" fill="#cbd5e1" font-size="8">4. Solution tried &amp; failed; what now?</text>
  <text x="676" y="218" text-anchor="middle" fill="#cbd5e1" font-size="8">5. Multiple alternatives; which one?</text>
  <text x="676" y="236" text-anchor="middle" fill="#cbd5e1" font-size="8">6. Know R1, R2 vague; what strategy?</text>
  <text x="676" y="254" text-anchor="middle" fill="#cbd5e1" font-size="8">7. Know R2, unsure of R1 (benchmark)</text>
  <text x="676" y="276" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">Last known item = Complication</text>

  <!-- Bottom Conversion Bar -->
  <rect x="24" y="324" width="752" height="72" rx="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="348" text-anchor="middle" fill="#e0f2fe" font-size="11" font-weight="700">LEFT-TO-RIGHT CONVERSION INTO SCQA INTRODUCTION</text>
  <text x="400" y="368" text-anchor="middle" fill="#7dd3fc" font-size="9.5">Read the framework from left to right and top to bottom: everything prior to the last known event</text>
  <text x="400" y="384" text-anchor="middle" fill="#7dd3fc" font-size="9.5">forms the Situation (S), the last known event forms the Complication (C), triggering the Question (Q).</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Opening Scene & Disturbing Event',
          explanation:
            'Visualize the specific structure or process where the problem originated and identify the external, internal, or newly recognized event that disrupted it.',
        },
        {
          step: '2',
          label: 'R1 vs. R2 Gap Specification',
          explanation:
            'Contrast the Undesired Result (R1) currently produced by the Opening Scene against the quantified Desired Result (R2) required.',
        },
        {
          step: '3',
          label: '7-State SCQA Mapping Rule',
          explanation:
            'Read left-to-right across the framework; whatever the reader knows last becomes the Complication that triggers one of the 7 standard Questions.',
        },
      ],
    },
    {
      id: 'mpp-ch03-svg2',
      title: 'Diagnostic Frameworks & Abductive Yes/No Crucial Experiments',
      subtitle: 'Replacing "Collect All Data" with Physical Flows, Financial/Task Trees, and Bifurcated Choice Structures',
      bierutCaption:
        'Model the Opening Scene as a MECE diagnostic tree and design Yes/No crucial experiments before gathering data.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">DIAGNOSTIC FRAMEWORKS &amp; C.S. PEIRCE ABDUCTIVE REASONING</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Why pre-structuring analysis via diagnostic models eliminates 60% of wasted consulting fieldwork</text>

  <!-- Left Column: 3 Diagnostic Framework Types -->
  <rect x="24" y="68" width="466" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="257" y="92" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. THREE DIAGNOSTIC MODELS OF THE OPENING SCENE</text>

  <!-- Type A: Financial & Task Tree -->
  <rect x="40" y="106" width="434" height="82" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="56" y="126" fill="#c7d2fe" font-size="10" font-weight="700">A. Financial &amp; Task Trees (ROI / EPS / Contribution)</text>
  <text x="56" y="144" fill="#cbd5e1" font-size="8.5">• ROI = Trading Profit ÷ Net Assets  →  Sales (Volume, Price) vs. Costs (Labor, Materials)</text>
  <text x="56" y="160" fill="#cbd5e1" font-size="8.5">• Task Tree: State every P&amp;L and Balance Sheet line as an explicit managerial task</text>
  <text x="56" y="176" fill="#a5b4fc" font-size="8" font-family="monospace">Pinpoints exact financial driver causing R1 before fieldwork</text>

  <!-- Type B: Activity Structure -->
  <rect x="40" y="198" width="434" height="82" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="56" y="218" fill="#6ee7b7" font-size="10" font-weight="700">B. Activity &amp; Physical Flow Trees (Tracing Undesired Effect)</text>
  <text x="56" y="236" fill="#cbd5e1" font-size="8.5">• Total Installation Hours = (Men/Rack) × (Man-Hours/Rack) × (Hours/Week)</text>
  <text x="56" y="252" fill="#cbd5e1" font-size="8.5">• Barrows Factory Flow: Order Eval → BOM Routing → Inventory → Dispatch → Shop Floor</text>
  <text x="56" y="268" fill="#34d399" font-size="8" font-family="monospace">Isolates physical bottlenecks where delays or stock-outs originate</text>

  <!-- Type C: Sequential Choice Tree -->
  <rect x="40" y="290" width="434" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="56" y="310" fill="#fde68a" font-size="10" font-weight="700">C. Bifurcated Choice &amp; Sequential Marketing Trees (Holland)</text>
  <text x="56" y="328" fill="#cbd5e1" font-size="8.5">• Sales Support: Right Stores? (Y/N) → Right Call Frequency? (Y/N) → Right Activities? (Y/N)</text>
  <text x="56" y="344" fill="#cbd5e1" font-size="8.5">• Marketing Sequence: Awareness → Trial (Stocked/Displayed/Promoted) → Repurchase</text>
  <text x="56" y="362" fill="#fbbf24" font-size="8" font-family="monospace">Rule: Fix left-side failures (Awareness/Trial) before right-side (Repurchase)</text>

  <!-- Arrows to Right Column -->
  <path d="M 490 232 L 516 232" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right Column: Abductive Yes/No Crucial Experiments -->
  <rect x="516" y="68" width="260" height="328" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="646" y="92" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. SCIENTIFIC ABDUCTION</text>

  <rect x="532" y="106" width="228" height="118" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="646" y="126" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">C.S. Peirce Abductive Loop</text>
  <text x="646" y="146" text-anchor="middle" fill="#d1fae5" font-size="8.5">1. Observe Undesired Result (B)</text>
  <text x="646" y="164" text-anchor="middle" fill="#d1fae5" font-size="8.5">2. Posit Structural Rule (If A → B)</text>
  <text x="646" y="182" text-anchor="middle" fill="#d1fae5" font-size="8.5">3. Hypothesize Case (Possibly A)</text>
  <text x="646" y="200" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">4. Run Yes/No Crucial Experiment</text>

  <rect x="532" y="238" width="228" height="142" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="646" y="258" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">True "Issues" = Yes/No Only</text>
  <text x="646" y="278" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Wrong: "How should we reorganize?"</text>
  <text x="646" y="294" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Right: "Should we reorganize</text>
  <text x="646" y="308" text-anchor="middle" fill="#cbd5e1" font-size="8.5">  functionally? (Yes/No)"</text>
  <text x="646" y="330" text-anchor="middle" fill="#94a3b8" font-size="8">Pre-assigns exact data source, cost,</text>
  <text x="646" y="344" text-anchor="middle" fill="#94a3b8" font-size="8">and stopping condition for fieldwork</text>
  <text x="646" y="364" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">Zero Wasted Fact-Gathering</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Diagnostic Frameworks (Steps 2 & 3)',
          explanation:
            'Visualize the physical flow, financial tree, or sequential marketing funnel of the Opening Scene to see where R1 could originate.',
        },
        {
          step: '2',
          label: 'Solution Logic Trees (Steps 4 & 5)',
          explanation:
            'Break down cost or energy equations (e.g., Cost/Cigarette = Cost/Hour × Hours/Million Cigarettes) into MECE remedial actions.',
        },
        {
          step: '3',
          label: 'Abductive Crucial Experiments',
          explanation:
            'Formulate strict Yes/No issue questions that conclusively confirm or exclude each hypothesized cause with minimal data collection.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mpp-ch03-mm1',
      name: 'The R1-to-R2 Problem Gap Scaffolding',
      tagline: 'A problem is never a vague worry; it is a measurable gap between what you get now (R1) and what you want (R2)',
      naiveIntuition:
        'You can jump straight into brainstorming solutions or writing an introduction as soon as a client mentions declining sales or capacity constraints.',
      firstPrinciplesReality:
        'Every problem emerges from a specific Opening Scene disrupted by a Disturbing Event to yield an Undesired Result (R1) instead of a quantified Desired Result (R2); without specifying all four, you cannot know which of the 7 reader Questions to answer.',
      howToApply:
        'Sketch the Opening Scene structure, identify the Disturbing Event, write down R1 and quantified R2, and set the last thing known by the reader as your Complication.',
    },
    {
      id: 'mpp-ch03-mm2',
      name: 'Diagnostic Pre-Structuring vs. "Starting with the Data"',
      tagline: 'Structure the diagnostic tree before gathering facts to eliminate 60% of wasted fieldwork',
      naiveIntuition:
        'Responsible analysts collect all available industry, competitor, and operational data first so they have "all the facts in one place" before drawing conclusions.',
      firstPrinciplesReality:
        'Unstructured fact-gathering wastes 60% of consulting effort on irrelevant exhibits while leaving critical recommendation branches unsupported at the deadline.',
      howToApply:
        'Model the Opening Scene as a financial tree, task tree, physical flow diagram, or sequential choice tree first, then gather only the data required to answer Yes or No at each branch.',
    },
    {
      id: 'mpp-ch03-mm3',
      name: 'Peircean Abduction & Yes/No Crucial Experiments',
      tagline: 'Generate structural hypotheses from the Opening Scene and falsify them via binary tests',
      naiveIntuition:
        'Listing broad discussion topics like "How should we reorganize?" or "What is our corporate energy strategy?" constitutes an Issue Analysis.',
      firstPrinciplesReality:
        'Strictly speaking, an "issue" is a legal question phrased to demand a Yes or No answer; abductive problem solving requires hypothesizing a cause from a structural rule and running a crucial experiment that yields a binary Yes/No verdict.',
      howToApply:
        'Call general client worries "concerns," reserve "issues" strictly for Yes/No diagnostic questions, and map confused issue lists onto a MECE choice tree to eliminate irrelevant branches.',
    },
  ],
  deepSections: [
    {
      id: 'mpp-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Sequential Analysis & The R1/R2 Problem Definition Framework',
      subtitle: 'Laying out the Opening Scene, Disturbing Event, R1, and R2 across the seven reader solution states',
      coreMechanism:
        'Efficient problem solving follows B. Robert Holland’s 5-step Sequential Analysis: (1) Is there a problem? (2) Where does it lie? (3) Why does it exist? (4) What could we do about it? and (5) What should we do about it? Questions 1 and 2 define the problem and become the document’s SCQA introduction, while Questions 3, 4, and 5 structure the analysis and become the pyramid body.\n\nTo formalise Questions 1 and 2, Minto’s Problem Definition Framework lays out four dramatic elements: (1) the Starting Point / Opening Scene (the visualized existing structure or process, such as 3 warehouses serving 438 retail stores); (2) the Disturbing Event (an external, internal, or recently recognized change); (3) R1, the Undesired Result triggered by that event; and (4) R2, the quantified Desired Result. Depending on where the reader stands across 7 standard situations (e.g., doesn’t know how to get from R1 to R2, has a solution that failed across double/triple layers, or faces multiple alternatives), reading the diagram left-to-right converts directly into the SCQA introduction, with the last thing known by the reader serving as the Complication.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Sketch the Opening Scene',
          detail: 'Visualize the specific organizational structure or physical process where the problem originated.',
        },
        {
          step: '2',
          title: 'Specify Trigger, R1, and R2',
          detail: 'Identify the Disturbing Event, the current Undesired Result (R1), and the quantified Desired Result (R2).',
        },
        {
          step: '3',
          title: 'Map to SCQA via Reader State',
          detail: 'Read left-to-right across the framework, placing the last fact known by the reader as the Complication.',
        },
      ],
      keyTakeaways: [
        'Without a specific, quantifiable end-product description of R2, you cannot evaluate which candidate solution actually solves the problem.',
        'Even a triple-layer historical problem (like paying supermarkets $20,000/week for shelf tests, refusing to pay, and being locked out) converts cleanly into an S-C-Q introduction by making the last known event (R1-c) the Complication.',
      ],
      commonPitfalls: [
        'Bringing up rejected alternatives ("Way A is no good, Way B is no good, therefore do C") when the reader did not ask to compare them in advance.',
        'Failing to check whether the client has already tried a solution before you formulate the document’s Question.',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_ch03_plate.png',
          originalLabel: 'Part 3 Opening Blueprint: Logic in Problem Solving (Page 135)',
          bierutTitle: 'Pre-Structure Your Pyramid by Defining the Problem Before Gathering Data',
          editorialAnalysis:
            'The Part 3 opening sequence shows how isolating structural elements and making the inductive leap bridges raw assessment bullets into a sequential problem-solving pipeline: Define Problem → Structure Analysis → Conduct Analysis → Form Pyramid.',
          keyTakeaways: [
            'Answers to "Is there a problem?" and "Where does it lie?" form the introduction; answers to "Why?" and "What should we do?" form the pyramid.',
            'Pre-structuring the analysis guarantees that the facts you gather translate effortlessly into pyramid groupings.',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch03-sec2',
      sectionNumber: '3.2',
      title: 'Diagnostic Frameworks: Financial, Task, Activity, and Choice Trees',
      subtitle: 'Visualizing the causal mechanics of the Opening Scene to eliminate 60% of wasted fact-finding',
      coreMechanism:
        'In the 1950s and 1960s, consultants began every study by gathering exhaustive industry and company data, only to discover that 60% of their fact-finding effort was wasted while crucial recommendation data was missing. Modern problem solvers replicate the scientific method by constructing a MECE Diagnostic Framework of the Opening Scene before gathering data, generating abductive hypotheses, and designing Yes/No "crucial experiments" to confirm or exclude each branch.\n\nMinto details three primary ways to build diagnostic frameworks: (1) Visualizing physical structure (mapping every causal influence on a system, such as the Barrows factory floor workflow from Order Evaluation through BOM Routings, Inventory, and Shop Dispatch); (2) Tracing financial or task cause-and-effect (decomposing ROI into Trading Profit and Net Assets, or converting an EPS/Contribution tree into explicit managerial tasks like "Reduce Leaf Cost" and "Reduce Direct Labor"); and (3) Classifying causes via bifurcated Choice Trees (such as Holland’s sequential marketing tree: Awareness → Trial → Repurchase, where left-side failures must be fixed before right-side ones).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Model the Opening Scene System',
          detail: 'Draw the physical workflow, ROI/EPS financial tree, or sequential marketing funnel that currently yields R1.',
        },
        {
          step: '2',
          title: 'Formulate Yes/No Crucial Tests',
          detail: 'Attach binary diagnostic questions (e.g., "Are order lead times uncompetitive? Yes/No") to each node.',
        },
        {
          step: '3',
          title: 'Target Data Collection',
          detail: 'Assign data sources, schedules, and responsibilities exclusively to prove or disprove the hypothesized weak nodes.',
        },
      ],
      formulas: [
        {
          name: 'Direct Labor Cost Decomposition & Abductive Inference Structure',
          expression: '\\frac{\\text{Cost}}{\\text{Cigarette}} = \\frac{\\text{Cost}}{\\text{Hour}} \\times \\frac{\\text{Hours}}{10^6 \\text{ Cigarettes}}, \\quad \\text{Abduction: } \\; B \\;\\land\\; (A \\implies B) \\xrightarrow{\\text{Test}} \\text{Possibly } A',
          intuition:
            'Logic trees decompose unit cost into multiplicative operational drivers so every MECE lever is visible, while C.S. Peirce’s Abduction uses an observed result (B) and structural rule (A → B) to hypothesize a testable cause (A).',
          variables: [
            { symbol: '\\text{Cost/Hour}', meaning: 'Hourly labor rate driven by overtime, labor mix, and wage awards' },
            { symbol: '\\text{Hours}/10^6\\text{ Cigarettes}', meaning: 'Inverse productivity driven by crew size per machine, machine speed, and uptime efficiency' },
            { symbol: 'A, B', meaning: 'Hypothesized structural cause (A) and observed Undesired Result R1 (B)' },
          ],
          workedExample:
            'In Galileo’s inclined-plane experiment (Scientific Abduction), observing that a cannonball continues moving after force stops (Result) led him to hypothesize that distance is proportional to time squared (d ∝ t²: 1 unit in t=1, 4 in t=2, 9 in t=3) and verify it with a binary experimental test.',
        },
      ],
      keyTakeaways: [
        'Diagnostic frameworks differ from Decision Trees and PERT charts because diagnostic trees generate Yes/No causal questions rather than future action sequences.',
        'In sequential choice structures (Awareness → Trial → Repurchase), weaknesses on the left must always be fixed before spending money on the right.',
      ],
      commonPitfalls: [
        'Sending analysts out to interview client personnel on 8 broad topics without first drawing the operational flow diagram (as in the Barrows ISO case).',
        'Confusing vague "concerns" ("How should we reorganize?") with true "issues," which must be phrased as Yes/No questions ("Should we reorganize functionally?").',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_p135_fig1.png',
          originalLabel: 'Page 135 Structural Elements Isolation Exhibit',
          bierutTitle: 'Strip Assessment Lists to Bare Structural Elements Before Drawing Diagnostic Links',
          editorialAnalysis:
            'Minto’s page 135 transformation shows how paring an 8-point Information Systems assessment down to its bare structural nouns exposes the separation between the overarching R1 risk (slipping dates) and its three testable capability causes.',
          keyTakeaways: [
            'Isolating bare structural elements lets you see instantly which bullets state the problem and which state the causes.',
            'Once causes are mapped onto a choice diagram (like the 10 factory energy-cost issues), irrelevant questions drop out immediately.',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch03-sec3',
      sectionNumber: '3.3',
      title: 'Solution Logic Trees, Issue Analysis, and Structureless Abduction',
      subtitle: 'Generating MECE recommendations and solving structureless problems via Peirce and Galileo',
      coreMechanism:
        'Once diagnostic frameworks answer Steps 2 and 3 ("Where does the problem lie?" and "Why does it exist?"), analysts flip their perspective for Steps 4 and 5 ("What could we do?" and "What should we do?") using Solution Logic Trees. By decomposing a target metric—such as cutting factory energy costs into "Cut BTUs used" (fix existing equipment vs. buy new equipment) and "Cut cost per BTU" (use cheaper fuel in existing equipment vs. add new equipment for cheaper fuel)—a logic tree reveals all MECE solution possibilities and exposes when a client’s "10 Major Energy Issues" omit key branches or include irrelevant politics.\n\nFinally, in Appendix A, Minto addresses "structureless situations" where the causal structure is nonexistent (Bell inventing the telephone), invisible (DNA), or contradicted by facts (Aristotle’s velocity law vs. Galileo’s cannonball). Using Charles Sanders Peirce’s taxonomy of Deduction, Induction, and Abduction, the solver uses visual analogies (Bell comparing the delicate eardrum moving massive ear bones to a steel membrane) to invent a candidate Rule, deduces what must follow if true (C), and runs a binary experiment to confirm or discard it.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Branch MECE Solution Levers',
          detail: 'Decompose the target improvement (e.g., Cut Energy Costs or Direct Labor) into non-overlapping action branches.',
        },
        {
          step: '2',
          title: 'Audit "Issues" Against the Tree',
          detail: 'Map proposed study questions onto the logic tree to prune off-topic questions and convert the rest into Yes/No tests.',
        },
        {
          step: '3',
          title: 'Apply Visual Abduction When Structureless',
          detail: 'When no known structure explains R1, invent a visual structural analogy and run a binary crucial experiment (d ∝ t²).',
        },
      ],
      keyTakeaways: [
        'There is never a need for a section called "Issues" in a consulting proposal; issues, the analytical process, and the study end-products are the exact same thing.',
        'As Herbert Simon stated, solving a problem simply means representing it visually so as to make the solution transparent.',
      ],
      commonPitfalls: [
        'Listing 10 ungrouped "Major Issues" in a proposal without mapping them to a choice tree to see that 3 of them don’t even relate to the subject.',
        'Running open-ended experiments ("let’s see what happens if we tweak X") instead of binary tests designed to falsify a specific hypothesis.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Diagnostic Frameworks & Reasoning Modes Comparison Matrix',
      description: 'Selecting the right analytical representation across Sequential Analysis stages and C.S. Peirce reasoning modes.',
      headers: ['Analytical Tool / Mode', 'Sequential Analysis Stage', 'Structural Mechanism', 'Primary Output', 'When to Deploy'],
      rows: [
        [
          'Problem Definition Framework',
          'Stages 1 & 2: Is there a problem & where?',
          'Opening Scene + Disturbing Event → R1 vs. R2 Gap',
          'Reader’s exact Question + SCQA Introduction',
          'Day 1 of every engagement or document draft',
        ],
        [
          'Financial / Task Diagnostic Tree',
          'Stage 3: Why does the problem exist?',
          'Decomposes ROI, EPS, or Contribution into MECE P&L/Balance Sheet tasks',
          'Pinpoints financial/cost variance drivers',
          'Profitability, margin erosion, or capital lockup problems',
        ],
        [
          'Physical Flow & Choice Trees',
          'Stage 3: Why does the problem exist?',
          'Maps operational sequence or bifurcated Yes/No funnel (Awareness→Trial→Repurchase)',
          'Binary Yes/No crucial experiment workplan',
          'Factory bottlenecks, late deliveries, or marketing drop-offs',
        ],
        [
          'Solution Logic Tree',
          'Stages 4 & 5: What could/should we do?',
          'Splits target goal (e.g., Cut BTUs vs. Cut $/BTU) into MECE remedial levers',
          'Exhaustive set of strategic options to evaluate',
          'Generating recommendations and auditing confused "Issue" lists',
        ],
      ],
      verdictRule:
        'Always define the R1/R2 gap in the Opening Scene first, use Diagnostic Frameworks (Financial, Flow, or Choice trees) with Yes/No crucial experiments to isolate root causes, and use Solution Logic Trees to generate MECE recommendations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mpp-ch03-scen1',
      title: 'Structuring the 438-Store Retail Warehouse Capacity Strategy',
      roleAndContext: 'Strategy consultant advising a household-goods retailer whose 3 distribution centers (Worcester, Evansville, Las Vegas) plus rented DMSI space struggle to serve 438 stores and face 4–5% annual growth plus 198 new stores.',
      symptomOrFailure: 'The client will run out of warehouse capacity in 2 years (R1) and has debated 4 options—expand current warehouses, build a 4th/5th warehouse, upgrade material handling, or use third parties—each with different ROI impacts.',
      naiveFixAndWhyItFails: 'Dumping pros and cons for all 4 warehouse options without framing the exact R2 constraints fails to show why incremental capacity beats building a 4th warehouse.',
      firstPrinciplesSolution: 'Map the Problem Definition Framework (Situation #5: multiple alternatives known) with explicit R2 constraints (sufficient capacity at lowest capital/operating cost while keeping processing speeds and full-line strategy), converting left-to-right into an SCQA introduction topped by the governing strategy: "Add capacity incrementally to avoid building a fourth warehouse as long as possible" via 3 Key Line steps: (1) Modify Worcester and Evansville, (2) Implement fast-cycle material handling, and (3) Continue selective third-party relationships.',
      measurableOutcome: 'Delivered a unified, ROI-optimal distribution strategy that deferred major capital expenditure while accommodating 198 new stores.',
    },
    {
      id: 'mpp-ch03-scen2',
      title: 'Replacing Unstructured Interviews at Barrows ISD with a Flow Diagnostic',
      roleAndContext: 'Lead consultant proposing a turnaround for Barrows’ Information Systems Division (ISD), where a thriving business is missing order delivery dates despite new production planning and floor control systems.',
      symptomOrFailure: 'The initial proposal planned to interview staff across 8 broad topics ("growth projections, management objectives, current systems, areas of inefficiency, inventory accuracy..."), guaranteeing a massive, unstructurable data dump.',
      naiveFixAndWhyItFails: 'Conducting general interviews across all 8 topics wastes 60% of team hours collecting opinions without an objective way to isolate the factory-floor bottleneck.',
      firstPrinciplesSolution: 'First sketch the 6-box physical/information flow diagram of Barrows’ production operations (Order Evaluation → BOM & Routings → Inventory/Ordering Factors → Master Operations & Load Formulas → Shop Dispatching → Manufacturing Operations), then formulate 6 binary Yes/No diagnostic questions (e.g., "Do shortages/stock-outs hurt sales? Yes/No", "Do controls in one area increase costs in others? Yes/No") to guide targeted data gathering.',
      measurableOutcome: 'Pre-assigned every data source, schedule, and cost before fieldwork began, isolating root-cause factory bottlenecks in a fraction of the time.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mpp-ch03-q1',
        scenarioPrompt:
          'Why did a major consulting firm estimate that 60% of its traditional "start with the data" fact-finding and analysis effort was wasted?',
        options: [
          {
            label: 'A',
            text: 'Because junior consultants made arithmetic errors in their spreadsheets.',
            isCorrect: false,
            explanation: 'The waste stemmed from gathering irrelevant categories of data, not arithmetic mistakes.',
          },
          {
            label: 'B',
            text: 'Because gathering exhaustive company and industry facts before structuring the problem produced mountains of marginally relevant exhibits while leaving major recommendations without supporting data at the deadline.',
            isCorrect: true,
            explanation: 'Without pre-structuring the problem via diagnostic frameworks and abductive hypotheses, analysts collect "interesting" facts that do not answer the client’s actual problem.',
          },
          {
            label: 'C',
            text: 'Because clients refused to read reports containing financial numbers.',
            isCorrect: false,
            explanation: 'Clients demand rigorous financial evidence, provided it directly proves or disproves the causal drivers of their problem.',
          },
          {
            label: 'D',
            text: 'Because data gathering should only occur after the final report has already been written and submitted.',
            isCorrect: false,
            explanation: 'You pre-structure the diagnostic framework first, then gather the exact data needed to test your hypotheses before writing the final report.',
          },
        ],
      },
      {
        id: 'mpp-ch03-q2',
        scenarioPrompt:
          'In Minto’s Problem Definition Framework, what are the four core elements that must be laid out to define any problem, and how do they convert into the SCQA introduction?',
        options: [
          {
            label: 'A',
            text: 'Tasks, Objectives, Benefits, and Next Steps; read from bottom to top.',
            isCorrect: false,
            explanation: 'Tasks, Objectives, and Benefits are the horizontal slicing error from Chapter 7, not the Problem Definition Framework.',
          },
          {
            label: 'B',
            text: 'Starting Point/Opening Scene, Disturbing Event, R1 (Undesired Result), and R2 (Desired Result); read from left to right and top to bottom, with the last thing known by the reader serving as the Complication.',
            isCorrect: true,
            explanation: 'The problem emerges when a Disturbing Event disrupts the Opening Scene to produce R1 instead of R2; reading left-to-right places prior history in the Situation and the last known development in the Complication.',
          },
          {
            label: 'C',
            text: 'Strengths, Weaknesses, Opportunities, and Threats (SWOT); placed in the appendix.',
            isCorrect: false,
            explanation: 'Minto’s Problem Definition Framework replaces generic SWOT lists with a specific causal gap between R1 and R2 inside a visualized Opening Scene.',
          },
          {
            label: 'D',
            text: 'Major Premise, Minor Premise, Conclusion, and Moral.',
            isCorrect: false,
            explanation: 'Those are the elements of a deductive syllogism, not the Problem Definition Framework.',
          },
        ],
      },
      {
        id: 'mpp-ch03-q3',
        scenarioPrompt:
          'In B. Robert Holland’s sequential marketing diagnostic structure (Awareness → Trial [Stocked, Displayed, Promoted] → Repurchase), your analysis reveals weaknesses in advertising targeting, promotional execution, and consumer usage frequency. In what order must the company fix these problems?',
        options: [
          {
            label: 'A',
            text: 'Fix usage frequency first because repeat customers have the highest margin.',
            isCorrect: false,
            explanation: 'Coaxing customers to use the product more frequently is wasted effort if advertising and promotion are still broken upstream.',
          },
          {
            label: 'B',
            text: 'Weaknesses identified on the left of the sequential choice tree must be corrected before those on the right (fix advertising targeting first, then promotion, then repurchase frequency).',
            isCorrect: true,
            explanation: 'Because the marketing funnel is a sequential causal process, there is no point spending money on downstream repurchase or promotion if upstream advertising is still targeting the wrong audience.',
          },
          {
            label: 'C',
            text: 'Fix all three simultaneously by cutting the product price in half.',
            isCorrect: false,
            explanation: 'Price cutting does not fix misdirected advertising or poor in-store display.',
          },
          {
            label: 'D',
            text: 'Order does not matter in a choice structure.',
            isCorrect: false,
            explanation: 'The sequential order of a choice structure dictates both the order of analysis and the priority sequence of remediation.',
          },
        ],
      },
      {
        id: 'mpp-ch03-q4',
        scenarioPrompt:
          'How does Minto define a true "Issue" in Issue Analysis, and how does C.S. Peirce’s Abductive reasoning use it?',
        options: [
          {
            label: 'A',
            text: 'An issue is any broad topic of concern to the client, such as "How should we reorganize?"',
            isCorrect: false,
            explanation: 'Minto notes that "How should we reorganize?" is a broad question/concern, not an issue, because nothing is "at issue" between two sides.',
          },
          {
            label: 'B',
            text: 'Strictly speaking, an issue is a question phrased to demand a Yes or No answer (e.g., "Should we reorganize functionally?"); in Abduction, it acts as the "crucial experiment" that confirms or excludes a hypothesized cause.',
            isCorrect: true,
            explanation: 'Derived from the legal phrase "at issue," a Yes/No diagnostic question unambiguously proves or disproves a structural hypothesis (Case) derived from an observed result (R1) and system rule.',
          },
          {
            label: 'C',
            text: 'An issue is a future probabilistic event node in a PERT diagram.',
            isCorrect: false,
            explanation: 'PERT diagrams and decision trees map future action sequences, whereas diagnostic issue trees test existing causal structures.',
          },
          {
            label: 'D',
            text: 'Abduction means gathering all possible facts without forming any advance hypothesis.',
            isCorrect: false,
            explanation: 'Abduction is the exact opposite: forming an explanatory hypothesis from an observed result and testing it via a targeted binary experiment.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mpp-ch03-fc1',
        category: 'foundation',
        front: 'What are the 5 sequential questions in B. Robert Holland’s Sequential Analysis, and how do they map to a consulting report?',
        back: '1. Is there a problem? 2. Where does it lie? (1 & 2 define the problem and form the Introduction); 3. Why does it exist? (structures the diagnostic analysis); 4. What could we do? 5. What should we do? (3–5 form the Pyramid body).',
        mentalHook: 'Q1–Q2 = Problem Definition / Intro; Q3 = Diagnosis; Q4–Q5 = Solution Pyramid.',
      },
      {
        id: 'mpp-ch03-fc2',
        category: 'architecture',
        front: 'What are the 3 categories of a Disturbing Event in the Problem Definition Framework?',
        back: '1. External (new competitor, technology shift, regulatory/customer change); 2. Internal (new business process, computer system, market expansion); 3. Recently Recognized (lagging performance, sub-par operating results, new market research).',
        mentalHook: 'External, Internal, or Recently Recognized.',
      },
      {
        id: 'mpp-ch03-fc3',
        category: 'evaluation',
        front: 'Why should you never include rejected alternatives on your Key Line ("A is no good, B is no good, therefore do C") unless the reader knew those alternatives in advance?',
        back: 'Because the reason for doing C is that it solves the problem (moves from R1 to R2), not that A and B are bad; setting up straw-man alternatives wastes the reader’s time.',
        mentalHook: 'Only discuss alternatives in the Complication if the client already proposed them.',
      },
      {
        id: 'mpp-ch03-fc4',
        category: 'architecture',
        front: 'What are the three types of Diagnostic Frameworks used to model the Opening Scene?',
        back: '1. Physical / System Flow Diagrams (e.g., factory floor or head pain); 2. Financial & Task Cause-Effect Trees (ROI, EPS, Contribution tasks); 3. Bifurcated Choice & Classification Trees (e.g., Retail vs. HQ sales support, or Awareness → Trial → Repurchase).',
        mentalHook: 'Physical Flow, Financial/Task Tree, Bifurcated Choice Tree.',
      },
      {
        id: 'mpp-ch03-fc5',
        category: 'foundation',
        front: 'How does C.S. Peirce distinguish Deduction, Induction, and Abduction using Rule, Case, and Result?',
        back: 'Deduction: Rule + Case → Necessarily Result; Induction: Case + Result → Probably Rule; Abduction: Observed Result + Structural Rule → Possibly Case (hypothesis to be tested via Yes/No experiment).',
        mentalHook: 'Abduction starts with the surprising Result (R1) and hypothesizes the Case.',
      },
      {
        id: 'mpp-ch03-fc6',
        category: 'optimization',
        front: 'What is the diferença between Analytical Abduction and Scientific Abduction (in structureless situations)?',
        back: 'In Analytical Abduction, we already know the structure (Rule) that produces the result and test which node failed; in Scientific Abduction (e.g., Galileo or Bell), the structure is unknown or invisible and must first be invented via visual analogy before testing.',
        mentalHook: 'Analytical = known structure; Scientific = invent the structure first.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mpp-ch03-feyn1',
        conceptTitle: 'The Problem Definition Framework & 7 Reader States',
        prompt:
          'Explain how to lay out any business problem using Minto’s Problem Definition Framework (Opening Scene, Disturbing Event, R1, R2) and how to convert that diagram directly into an SCQA introduction across different reader situations.',
        rubricChecklist: [
          'Defines the Opening Scene as a simple visualization of the existing structure or process where the problem originated.',
          'Defines the Disturbing Event (external, internal, or recently recognized) that disrupted the Opening Scene.',
          'Contrasts R1 (the Undesired Result currently produced) with R2 (the specific, quantified Desired Result end-product).',
          'Explains the left-to-right conversion rule: trace the history from Opening Scene through prior solutions so the very last fact known by the reader becomes the Complication triggering their exact Question.',
        ],
        modelExplanation:
          'A problem is a gap between the Undesired Result (R1) a system currently produces and the quantified Desired Result (R2) you want instead. To define it, first sketch the Opening Scene—the specific structure or process (like three warehouses or a three-step sales process) in which the problem arose. Next, identify the Disturbing Event that disrupted that scene to reveal R1, and specify R2 in measurable end-product terms. Once laid out, you convert the diagram into an SCQA introduction simply by reading from left to right: whatever the reader already knows up to the penultimate step goes into the Situation, and the very last thing known by the reader—whether it is R1 itself, a proposed solution they want evaluated, or a second-layer solution that failed—becomes the Complication that triggers their exact Question.',
      },
      {
        id: 'mpp-ch03-feyn2',
        conceptTitle: 'Diagnostic Frameworks and Abductive Yes/No Crucial Experiments',
        prompt:
          'Explain why "starting with the data" wastes 60% of analytical effort, and walk through how to use Diagnostic Frameworks and C.S. Peirce’s Abductive method to pre-structure data gathering.',
        rubricChecklist: [
          'Explains why gathering all industry and company facts upfront leads to 60% wasted effort and missing proof for final recommendations.',
          'Describes how to model the Opening Scene using Financial/Task trees (ROI/EPS), Activity/Physical flow diagrams (Barrows factory), or Bifurcated Choice trees (Awareness → Trial → Repurchase).',
          'Defines C.S. Peirce’s Abduction (Observed Result R1 + Known Structural Rule → Hypothesized Case) and contrasts it with Deduction and Induction.',
          'Emphasizes that every diagnostic branch must be tested via a binary Yes/No "issue" question (crucial experiment) that specifies exact data needs and stopping rules in advance.',
        ],
        modelExplanation:
          'When analysts start by gathering all available data before structuring the problem, roughly 60% of their fieldwork is wasted on irrelevant charts while critical recommendation branches lack proof. Instead, you must use C.S. Peirce’s Abductive method: start with the observed Undesired Result (R1), build a MECE Diagnostic Framework of the Opening Scene (the Rule)—such as an ROI/EPS financial tree, a factory physical workflow, or a bifurcated marketing choice funnel—and hypothesize which specific branches are causing the failure (the Case). You then frame a strict Yes/No issue question ("crucial experiment") at each suspect branch, allowing you to collect only the data required to answer Yes or No and pre-structure your final pyramid before fieldwork even begins.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mpp-sequential-analysis',
        label: '5-Step Sequential Analysis',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition: 'B. Robert Holland’s 5-question sequence: (1) Is there a problem? (2) Where does it lie? (3) Why does it exist? (4) What could we do? (5) What should we do?',
        formulaOrRule: 'Q_1, Q_2 \\to \\text{Intro (SCQA)}; \\quad Q_3, Q_4, Q_5 \\to \\text{Pyramid Body}',
        whyItMatters: 'Pre-structures data gathering so analytical findings translate directly into the final pyramid.',
      },
      {
        id: 'mpp-problem-definition-framework',
        label: 'R1/R2 Problem Definition Framework',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition: 'Visual scaffolding that maps the Opening Scene, Disturbing Event, Undesired Result (R1), and quantified Desired Result (R2).',
        formulaOrRule: '\\text{Opening Scene} + \\text{Disturbing Event} \\implies R_1 \\neq R_2 \\implies \\text{Reader Question}',
        whyItMatters: 'Pinpoints the exact problem gap and converts left-to-right into the document’s SCQA introduction.',
      },
      {
        id: 'mpp-diagnostic-frameworks',
        label: 'MECE Diagnostic Frameworks',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition: 'Visual models of the Opening Scene—Physical Flows, Financial/Task Trees (ROI/EPS), and Bifurcated Choice Structures—used to isolate root causes of R1.',
        formulaOrRule: '\\text{Model Opening Scene} \\to \\text{Hypothesize Faults} \\to \\text{Run Yes/No Tests}',
        whyItMatters: 'Eliminates the 60% fact-gathering waste of unstructured "start with the data" investigations.',
      },
      {
        id: 'mpp-solution-logic-trees',
        label: 'Solution Logic Trees',
        category: 'optimization',
        chapterNumber: 3,
        importance: 2,
        definition: 'MECE branching trees used in Sequential Analysis Steps 4 and 5 to generate exhaustive remedial actions (e.g., Cut BTUs vs. Cut Cost/BTU).',
        formulaOrRule: '\\Delta \\text{Target} = \\text{Branch}_A \\cup \\text{Branch}_B \\;\\; (\\text{MECE Levers})',
        whyItMatters: 'Generates complete strategic alternatives and exposes irrelevant or missing items in confused issue lists.',
      },
      {
        id: 'mpp-yes-no-issue-analysis',
        label: 'Binary Yes/No Issue Analysis',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Discipline of phrasing every diagnostic hypothesis test as a strict Yes/No question ("crucial experiment") rather than an open-ended concern.',
        formulaOrRule: '\\text{Issue} \\in \\{\\text{Yes}, \\text{No}\\} \\implies \\text{Confirm or Exclude Cause}',
        whyItMatters: 'Defines in advance the exact data needed, who will collect it, and when research is complete.',
      },
      {
        id: 'mpp-peirce-abduction',
        label: 'Peircean Analytical & Scientific Abduction',
        category: 'foundation',
        chapterNumber: 3,
        importance: 3,
        definition: 'Charles Sanders Peirce’s inference mode that reasons from an observed Result (R1) and structural Rule (model or analogy) to a testable Case (hypothesis).',
        formulaOrRule: '\\text{Result } B \\land \\text{Rule } (A \\implies B) \\implies \\text{Test Case } A',
        whyItMatters: 'Powers hypothesis-driven consulting as well as scientific breakthroughs in structureless situations.',
      },
    ],
    edges: [
      {
        source: 'mpp-problem-definition-framework',
        target: 'mpp-sequential-analysis',
        relationship: 'part_of',
        explanation: 'The Problem Definition Framework executes Steps 1 and 2 of Sequential Analysis.',
      },
      {
        source: 'mpp-problem-definition-framework',
        target: 'mpp-diagnostic-frameworks',
        relationship: 'prerequisite_for',
        explanation: 'The Opening Scene of the Problem Definition Framework dictates which Diagnostic Framework to build.',
      },
      {
        source: 'mpp-peirce-abduction',
        target: 'mpp-diagnostic-frameworks',
        relationship: 'optimizes',
        explanation: 'Abductive reasoning generates falsifiable causal hypotheses from the structural diagnostic model.',
      },
      {
        source: 'mpp-yes-no-issue-analysis',
        target: 'mpp-diagnostic-frameworks',
        relationship: 'evaluates',
        explanation: 'Binary Yes/No crucial experiments test and prune each branch of the diagnostic framework.',
      },
      {
        source: 'mpp-diagnostic-frameworks',
        target: 'mpp-solution-logic-trees',
        relationship: 'prerequisite_for',
        explanation: 'Once diagnostic trees isolate why R1 exists (Step 3), solution logic trees generate MECE actions to reach R2 (Steps 4–5).',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Part 3 (Chapters 8–9 & Appendix A): Sequential Analysis, R1/R2 Problem Definition Framework, 7 reader situations, 60% data waste, Financial/Task/Activity/Choice Diagnostic Frameworks, Solution Logic Trees, Yes/No Issue Analysis, and C.S. Peirce Abduction.',
  },
};

export const mppCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Part 4: Logic in Presentation',
  subtitle: 'Reflecting the Pyramid on the Page, Designing Slide Storyboards, and Translating Mental Images into Visual Prose',
  readingTimeMinutes: 8,
  sourceWordCount: 16752,
  executiveThesis:
    'A reader’s or viewer’s eye always perceives visual structure before their mind comprehends logical content. Once your pyramid is built, you must reinforce its hierarchy across three output mediums: on the printed page via parallel hierarchical headings, indented displays, and backward-referencing transitions; on the presentation screen via a scripted storyboard of 90% visual exhibits and 10% stark text slides; and inside individual sentences by reconstructing concrete mental "memory images" instead of dehydrated corporate jargon.',
  paradigmShift: {
    oldWay:
      'Writers dump unformatted walls of jargon onto the page, project 50-slide "visual recitations" packed with 7-bullet text paragraphs, and link chapters with mechanical meta-commentary ("This chapter looked at X; the next looks at Y").',
    newWay:
      'Writers map pyramid tiers to indented visual headings (never using a single heading at any level), build slide decks with 90% message-titled charts and 10% concise text slides, and compose prose by copying visual mental images into concrete nouns and active verbs.',
    whyItChanged:
      'Visual layout cues and concrete memory images allow the human brain to absorb complex hierarchies in large chunks rather than decoding dehydrated words one by one.',
  },
  customDiagrams: [
    {
      id: 'mpp-ch04-svg1',
      title: 'Reflecting the Pyramid on the Page vs. On the Screen',
      subtitle: 'Mapping Pyramid Tiers to Hierarchical Page Headings, Backward-Referencing Transitions, and the 90/10 Slide Storyboard',
      bierutCaption:
        'Make the eye see the pyramid before the mind reads a word by aligning page indentation and 90% exhibit storyboards to your abstraction tiers.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">VISUALIZING THE PYRAMID: PRINTED PAGE HIERARCHY VS. SCREEN STORYBOARD</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">The reader's eye always sees the logic before the mind comprehends it—use visual form to reinforce hierarchy</text>

  <!-- Left Panel: Printed Page Hierarchy (Ch 10) -->
  <rect x="24" y="68" width="364" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="206" y="92" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. PRINTED PAGE HIERARCHY (CH 10)</text>

  <rect x="40" y="106" width="332" height="162" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="206" y="124" text-anchor="middle" fill="#f8fafc" font-size="9.5" font-weight="700">1. CHAPTER HEADING (MAIN POINT)</text>
  <text x="54" y="142" fill="#94a3b8" font-size="8">SCQA Intro + Set-out of Key Line points (30-sec scan)</text>
  <text x="54" y="160" fill="#38bdf8" font-size="9" font-weight="700">MAJOR SECTION HEADING (KEY LINE 1)</text>
  <text x="72" y="178" fill="#7dd3fc" font-size="8.5" font-weight="600">Subsection Heading (Parallel Grammatical Form)</text>
  <text x="90" y="196" fill="#cbd5e1" font-size="8">1. Numbered Paragraph (Underlined opening sentence)</text>
  <text x="108" y="212" fill="#94a3b8" font-size="8">- Dash-point subdivision</text>
  <text x="126" y="228" fill="#64748b" font-size="8">• Dot-point detail (progressive right indent)</text>
  <text x="54" y="252" fill="#fde68a" font-size="8" font-family="monospace">Rule: Never use only 1 of any heading level!</text>

  <!-- Backward-Referencing Transitions Box -->
  <rect x="40" y="280" width="332" height="100" rx="6" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="206" y="300" text-anchor="middle" fill="#e0f2fe" font-size="9.5" font-weight="700">Graceful Transitions &amp; Next Steps:</text>
  <text x="206" y="318" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Mini S-C-Q story before each Key Line section</text>
  <text x="206" y="334" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Reference backward by picking up prior key phrase</text>
  <text x="206" y="350" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Headings stand outside text (prose must flow alone)</text>
  <text x="206" y="366" text-anchor="middle" fill="#7dd3fc" font-size="8.5">• "Next Steps" = self-evident Monday actions only</text>

  <!-- Right Panel: Screen Storyboard & Gene Zelazny Rules (Ch 11) -->
  <rect x="412" y="68" width="364" height="328" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="92" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. LIVE SCREEN STORYBOARD (CH 11)</text>

  <!-- 90/10 Ratio Bar -->
  <rect x="428" y="106" width="298" height="36" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="577" y="128" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">90% EXHIBITS (Charts, Tables, Diagrams)</text>
  <rect x="730" y="106" width="30" height="36" rx="5" fill="#451a03" stroke="#f59e0b" />
  <text x="745" y="128" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="700">10%</text>

  <!-- Exhibit Slide Anatomy -->
  <rect x="428" y="154" width="332" height="114" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="594" y="174" text-anchor="middle" fill="#a7f3d0" font-size="9.5" font-weight="700">Action-Sentence Title: "Western Region = 50% of Profit"</text>
  <text x="594" y="190" text-anchor="middle" fill="#94a3b8" font-size="8">(Never use dead caption labels like "Share of profits by region")</text>

  <rect x="444" y="202" width="144" height="52" rx="4" fill="#1e293b" stroke="#38bdf8" />
  <text x="516" y="222" text-anchor="middle" fill="#7dd3fc" font-size="8.5" font-weight="600">5 Visual Relationships:</text>
  <text x="516" y="236" text-anchor="middle" fill="#cbd5e1" font-size="7.5">1. Whole/Parts  2. Compare</text>
  <text x="516" y="248" text-anchor="middle" fill="#cbd5e1" font-size="7.5">3. Time  4. Distrib  5. Correl</text>

  <rect x="600" y="202" width="144" height="52" rx="4" fill="#1e293b" stroke="#f59e0b" />
  <text x="672" y="222" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="600">Text Slide Rules (10%):</text>
  <text x="672" y="236" text-anchor="middle" fill="#cbd5e1" font-size="7.5">• YOU are the star, not slide</text>
  <text x="672" y="248" text-anchor="middle" fill="#cbd5e1" font-size="7.5">• Stark phrases; no recite!</text>

  <!-- 6-Step Storyboarding Process -->
  <rect x="428" y="280" width="332" height="100" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="594" y="300" text-anchor="middle" fill="#34d399" font-size="9.5" font-weight="700">6-Step Pyramid-to-Storyboard Pipeline:</text>
  <text x="594" y="318" text-anchor="middle" fill="#cbd5e1" font-size="8.5">1. Write S-C-Q-A intro word-for-word  •  2. Map Key Line</text>
  <text x="594" y="334" text-anchor="middle" fill="#cbd5e1" font-size="8.5">and support points as top sentences on blank storyboard</text>
  <text x="594" y="350" text-anchor="middle" fill="#cbd5e1" font-size="8.5">3. Rough out visuals  •  4. Script spoken narrative flow</text>
  <text x="594" y="366" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="600">5. Finalize graphics  •  6. Rehearse, rehearse, rehearse!</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Hierarchical Page Formatting',
          explanation:
            'Place increasingly subordinate headings further to the right, enforce parallel grammar within each group, and never allow a single orphan heading.',
        },
        {
          step: '2',
          label: 'Backward-Referencing Transitions',
          explanation:
            'Link sections by picking up a key word or phrase from the preceding section rather than writing mechanical meta-commentary.',
        },
        {
          step: '3',
          label: '90% Exhibit Storyboarding (Zelazny)',
          explanation:
            'Keep text slides to 10% stark structural markers while using 90% exhibit slides topped with full-sentence governing conclusions.',
        },
      ],
    },
    {
      id: 'mpp-ch04-svg2',
      title: 'Visual Prose: Reconstructing George Miller’s Memory Images',
      subtitle: 'How to decode dehydrated corporate jargon into concrete nouns, spatial relationships, and lucid sentences',
      bierutCaption:
        'Rescue the visual image buried inside abstract corporate jargon and copy that picture directly into concrete prose.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">REFLECTING THE PYRAMID IN PROSE: THE MEMORY-IMAGE TRANSLATION LOOP</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">All conceptual thinking occurs in images—write by copying your mental diagram into concrete words</text>

  <!-- Step 1: Dehydrated Corporate Jargon -->
  <rect x="24" y="68" width="234" height="236" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5" />
  <text x="141" y="92" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-weight="700">1. DEHYDRATED JARGON</text>
  <rect x="38" y="106" width="206" height="114" rx="6" fill="#450a0a" stroke="#f87171" />
  <text x="141" y="126" text-anchor="middle" fill="#fecaca" font-size="8.5" font-style="italic">"A primary area of potential</text>
  <text x="141" y="142" text-anchor="middle" fill="#fecaca" font-size="8.5" font-style="italic">improvement is improving cost-</text>
  <text x="141" y="158" text-anchor="middle" fill="#fecaca" font-size="8.5" font-style="italic">effectiveness of field sales-force</text>
  <text x="141" y="174" text-anchor="middle" fill="#fecaca" font-size="8.5" font-style="italic">deployment to reflect redefined</text>
  <text x="141" y="190" text-anchor="middle" fill="#fecaca" font-size="8.5" font-style="italic">selling missions dictated by</text>
  <text x="141" y="206" text-anchor="middle" fill="#fecaca" font-size="8.5" font-style="italic">changes in trade environment."</text>
  <text x="141" y="244" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">Why It Fails the Reader:</text>
  <text x="141" y="262" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Zero visualizable nouns; beginning</text>
  <text x="141" y="278" text-anchor="middle" fill="#cbd5e1" font-size="8.5">vanishes before sentence ends.</text>

  <path d="M 258 186 L 284 186" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Step 2: Reconstruct the Skeletal Mental Image -->
  <rect x="284" y="68" width="232" height="236" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="92" text-anchor="middle" fill="#38bdf8" font-size="10.5" font-weight="700">2. SKELETAL MENTAL IMAGE</text>
  <text x="400" y="110" text-anchor="middle" fill="#94a3b8" font-size="8.5">Isolate concrete nouns &amp; draw arrows</text>

  <rect x="304" y="124" width="192" height="106" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-dasharray="4 2" />
  <text x="400" y="142" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">New Trading Environment</text>
  <rect x="318" y="156" width="66" height="36" rx="4" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="351" y="178" text-anchor="middle" fill="#e0f2fe" font-size="8.5" font-weight="600">Salesman</text>
  <path d="M 384 174 L 416 174" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <rect x="416" y="156" width="66" height="36" rx="4" fill="#064e3b" stroke="#10b981" />
  <text x="449" y="178" text-anchor="middle" fill="#a7f3d0" font-size="8.5" font-weight="600">Store</text>
  <text x="400" y="214" text-anchor="middle" fill="#94a3b8" font-size="8">Geometric forms + directional arrow</text>

  <text x="400" y="250" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="700">George Miller's Memory Image:</text>
  <text x="400" y="268" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Synthesizes mass detail into one</text>
  <text x="400" y="284" text-anchor="middle" fill="#cbd5e1" font-size="8.5">chunk that stays in long-term recall.</text>

  <path d="M 516 186 L 542 186" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Step 3: Copy Image into Crisp Prose -->
  <rect x="542" y="68" width="234" height="236" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="659" y="92" text-anchor="middle" fill="#34d399" font-size="10.5" font-weight="700">3. COPY IMAGE TO WORDS</text>

  <rect x="556" y="106" width="206" height="114" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="659" y="144" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">"We must redeploy the</text>
  <text x="659" y="164" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">sales force to match the</text>
  <text x="659" y="184" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">new trading environment."</text>

  <text x="659" y="244" text-anchor="middle" fill="#34d399" font-size="9" font-weight="700">Reader Re-Creates Image:</text>
  <text x="659" y="262" text-anchor="middle" fill="#cbd5e1" font-size="8.5">32 words compressed to 12 crisp</text>
  <text x="659" y="278" text-anchor="middle" fill="#cbd5e1" font-size="8.5">words; instant visual comprehension.</text>

  <!-- Bottom Banner: Professor William Minto's Battalion Law -->
  <rect x="24" y="320" width="752" height="76" rx="8" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" />
  <text x="400" y="344" text-anchor="middle" fill="#c7d2fe" font-size="10.5" font-weight="700">PROFESSOR WILLIAM MINTO'S BATTALION METAPHOR (THE DUTY OF ORDER)</text>
  <text x="400" y="364" text-anchor="middle" fill="#cbd5e1" font-size="9">"In writing you are as a commander filing out his battalion through a narrow gap that allows only one man at a time</text>
  <text x="400" y="380" text-anchor="middle" fill="#cbd5e1" font-size="9">to pass; and your reader, as he receives the troops, has to re-form and reconstruct them."</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Diagnose Jargon Dehydration',
          explanation:
            'Abstract nouns ("redefined selling missions", "preplanned adjustments") prevent the reader from forming a mental picture.',
        },
        {
          step: '2',
          label: 'Sketch the Skeletal Image',
          explanation:
            'Extract the concrete actors/objects (salesman, store, trading environment) and draw their spatial/causal interaction with simple geometric shapes and arrows.',
        },
        {
          step: '3',
          label: 'Copy the Image into Words',
          explanation:
            'Translate the sketch directly into an active sentence so the reader reconstructs the exact same memory image chunk.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mpp-ch04-mm1',
      name: 'Visual Isomorphism (The Eye Precedes the Mind)',
      tagline: 'Format the page so the reader’s eye sees the pyramid hierarchy in 30 seconds',
      naiveIntuition:
        'Headings and bullet points are decorative typography meant to break up gray pages like magazine pull-quotes.',
      firstPrinciplesReality:
        'Every heading level represents a discrete tier of abstraction in the pyramid; therefore, you can never have just one heading at any level, all sibling headings must use parallel grammar, and the prose must flow smoothly even if all headings were stripped.',
      howToApply:
        'Indent subordinate levels progressively to the right, state real ideas rather than categories ("Background", "Conclusions") in headings, and introduce every heading group before subdividing.',
    },
    {
      id: 'mpp-ch04-mm2',
      name: 'The 90/10 Visual Presentation Show (Zelazny’s Law)',
      tagline: 'You are the star of a live presentation—use 10% stark text slides and 90% message-titled exhibits',
      naiveIntuition:
        'A slide presentation is simply a written report projected onto a wall, so putting 7 full sentences on 50 slides ensures you don’t forget anything.',
      firstPrinciplesReality:
        'Reading dense text slides aloud turns a live presentation into a boring "visual recitation"; a live presentation is a show requiring a storyboard where spoken narrative provides the transitions and visual exhibits prove the relationships.',
      howToApply:
        'Limit text slides to 10% of the deck (using brief phrases, never full sentences), use 90% charts/diagrams, and top every chart with an active-verb sentence stating the exact insight ("Western Region accounts for half the profits").',
    },
    {
      id: 'mpp-ch04-mm3',
      name: 'George Miller’s Constructive Memory Image',
      tagline: 'Find the concrete nouns in bad prose, picture their spatial interaction, and copy the image into words',
      naiveIntuition:
        'Writing in a dehydrated, abstract, technical style ("preplanned adjustments may be developed from alternative preliminary plans") sounds authoritative and executive.',
      firstPrinciplesReality:
        'Human readers comprehend and recall prose by constructing a piecemeal "memory image" (like Thoreau chopping white pines on a hillside by Walden Pond); if your words cannot be visualized as a geometric or spatial sketch, the reader cannot understand or remember them.',
      howToApply:
        'When editing dense prose, circle the concrete nouns, draw a quick box-and-arrow sketch of what is acting on what, and rewrite the sentence directly from that picture.',
    },
  ],
  deepSections: [
    {
      id: 'mpp-ch04-sec1',
      sectionNumber: '4.1',
      title: 'Reflecting the Pyramid on the Page & Graceful Transitions',
      subtitle: 'Hierarchical headings, indented displays, backward-referencing links, and Monday-morning Next Steps',
      coreMechanism:
        'Whether a document is two pages or two hundred, the reader must be able to see the Introduction, Main Point, and Key Line points in the first 30 seconds. For long reports, you reflect pyramid divisions on the page using Hierarchical Headings, Underlined Points, Decimal Numbering, Indented Displays, or Dot-Dash Outlines ("lap visuals" for roundtable progress reviews). Across all formats, six strict rules govern headings: (1) Never use only one of any element (you cannot have a single section heading or a single numbered paragraph, because every division requires at least two siblings); (2) Show parallel ideas in parallel grammatical form (all starting with a verb or "-ing" participle within a group); (3) Limit wording to the concise essence of the thought; (4) Regard headings as outside the text (never start the first sentence with "This action..."); (5) Introduce every group of headings with an opening passage; and (6) Don’t overdo subdivisions.\n\nTo move smoothly between major pyramid legs without mechanical clichés ("This chapter looked at X; the next looks at Y"), either tell a miniature S-C-Q story (as in moving from Benchmarking to Activity-Based Management to TQM) or use Backward Referencing—picking up a key word or phrase from the previous section’s conclusion in your new opening sentence. End action reports with a "Next Steps" section containing only self-evident Monday-morning actions that raise zero new questions.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Map Tiers to Progressive Indentation',
          detail: 'Place signs for increasingly subordinate pyramid levels further to the right in parallel grammatical form.',
        },
        {
          step: '2',
          title: 'Enforce the Two-Sibling Minimum',
          detail: 'Verify every heading level, numbered paragraph, or dash list has at least two items and an introductory lead-in.',
        },
        {
          step: '3',
          title: 'Link Groups via Backward Reference',
          detail: 'Carry a key phrase from the prior section into the next opening sentence so the reader never loses the thread.',
        },
      ],
      keyTakeaways: [
        'A Table of Contents built from parallel, idea-driven Hierarchical Headings acts as an instant executive précis of the entire report.',
        'Any action listed under "Next Steps" at the end of a report must be so logically self-evident (e.g., "Call the bank", "Reconvene the committee") that it raises no new vertical questions.',
      ],
      commonPitfalls: [
        'Inserting a single孤立 subsection heading just to "break up the page," or letting the first sentence under a heading refer to the heading via "This..."',
        'Numbering introductory, transitional, or concluding summary paragraphs when using Decimal Numbering.',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_ch04_plate.png',
          originalLabel: 'Part 4 Opening Blueprint: Logic in Presentation (Page 184)',
          bierutTitle: 'Match Visual Page and Screen Hierarchy Directly to the Divisions of Thought in Your Pyramid',
          editorialAnalysis:
            'The Part 4 blueprint bridges diagnostic logic trees (cutting factory energy costs into BTU volume vs. cost per BTU) into the visual presentation rules of Chapters 10–12, proving that visual structure on the page or screen must mirror analytical structure.',
          keyTakeaways: [
            'The reader’s eye always sees the logic on the page or screen before their mind comprehends the words.',
            'Choose prose memos for 1–2 readers, dot-dash "lap visuals" for small roundtable discussions, and visual slides for large audiences.',
          ],
        },
        {
          file: 'minto_pyramid_principle_p184_fig1.png',
          originalLabel: 'Page 184 Inventory Proposal & Issue Tree Refactoring',
          bierutTitle: 'Eliminate Confused "Issues" Sections by Converting Them Into End-Product Process Pyramids',
          editorialAnalysis:
            'Page 184 demonstrates why consulting proposals should never contain a standalone section called "Issues": once translated into a pyramid ("Determine whether/how you can cut the cost of inventory"), the issues, the analytical process, and the study end-products are revealed to be identical.',
          keyTakeaways: [
            'Use "concerns" for general client worries and reserve "issues" strictly for binary Yes/No questions.',
            'Mapping 10 energy-cost questions onto a MECE choice tree immediately exposes that Issues 7, 8, and 9 do not belong in the study.',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch04-sec2',
      sectionNumber: '4.2',
      title: 'Reflecting the Pyramid on a Screen: Slide Design & Storyboarding',
      subtitle: 'Gene Zelazny’s 90/10 exhibit-to-text rule, message-driven chart titles, and the 6-step storyboard pipeline',
      coreMechanism:
        'A visual presentation is not a written report in slide form; projecting 50 slides of 7-bullet paragraphs and reading them aloud produces a deadly "visual recitation." In a live presentation, YOU (the speaker) are the star of the show, while slides serve purely as visual aids to pace the room. Drawing on McKinsey Visual Communications Director Gene Zelazny (Say It With Charts), Minto mandates an ideal slide mix of 90% Exhibits (charts, tables, diagrams) to 10% Text slides.\n\nText slides must present only one idea group at a time using stark, parallel fragments (never full sentences), leaving all transitions and stories to your spoken script. Exhibit slides demonstrate quantitative or structural relationships across five core questions: (1) How do parts relate to the whole? (pie/bar); (2) How do items compare? (bar); (3) How do items change over time? (line/column); (4) How are items distributed? (histogram/step); and (5) How do items correlate? (scatter/dual-axis). Every exhibit slide must be topped by a full sentence or active verb phrase stating its governing conclusion ("Sales have plateaued, but costs are increasing"), built through a 6-step Storyboarding pipeline.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Write Full S-C-Q-A Script First',
          detail: 'Write out every spoken word of the introduction to verify the audience’s exact Question before touching slides.',
        },
        {
          step: '2',
          title: 'Storyboard Top Sentences (90/10)',
          detail: 'Write the Key Line and support sentences across the top of a blank storyboard grid and rough out 90% exhibits vs. 10% text slides.',
        },
        {
          step: '3',
          title: 'Script Spoken Flow & Rehearse',
          detail: 'Script the oral narrative connecting the slides, finalize clean visual charts, and rehearse relentlessly.',
        },
      ],
      keyTakeaways: [
        'Never put words on a text slide that you intend to read verbatim as a long sentence, and never put a caption ("Sales outlook") over a chart when you can state the conclusion ("Western Region accounts for half the profits").',
        'As Antony Jay observed, "A presentation is usually a favour bestowed by those who attend on those who present."',
      ],
      commonPitfalls: [
        'Designing slides to serve simultaneously as a live visual aid and a standalone leave-behind report (if a handout is needed, bind the stark slide opposite the printed script page).',
        'Cramming seven multi-clause "Guiding Principles" onto a single text slide.',
      ],
      figures: [],
    },
    {
      id: 'mpp-ch04-sec3',
      sectionNumber: '4.3',
      title: 'Reflecting the Pyramid in Prose: Reconstructing Visual Memory Images',
      subtitle: 'Using George Miller’s constructive imagery to turn dehydrated jargon into vivid, concrete sentences',
      coreMechanism:
        'Even after building a sound pyramid, many bright analysts dress their points in dehydrated, jargon-heavy prose ("Preplanned adjustments may be developed from the alternative preliminary plans submitted by the Group..."). Why is such prose impenetrable? Because human beings do all their conceptual thinking in visual images, compressing complex details into a single mental configuration to bypass the 7 ± 2 memory limit. As George Miller demonstrated using Thoreau’s passage on chopping arrowy white pines by Walden Pond, readers comprehend and remember text only by constructing a piecemeal "memory image" as they read.\n\nEven abstract financial arguments (like World Bank fixed vs. floating lending rate spreads) are understood as skeletal geometric structures of lines, boxes, and directional arrows. To rescue bad prose, circle the concrete nouns in the sentence (e.g., "salesman," "store," "new trading environment"), draw the skeletal mental image of how they interact, and copy that picture directly into plain English ("We must redeploy the sales force to match the new trading environment"). As Professor William Minto wrote, a writer is like a commander filing a battalion single-file through a narrow pass; order and visual clarity allow the reader to reconstruct the battalion effortlessly on the other side.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Circle Concrete Nouns',
          detail: 'Locate the real actors, objects, or systems buried inside abstract nominalizations and jargon.',
        },
        {
          step: '2',
          title: 'Draw the Skeletal Diagram',
          detail: 'Picture or sketch the spatial/causal relationship using simple geometric boxes, circles, and arrows.',
        },
        {
          step: '3',
          title: 'Copy the Image into Words',
          detail: 'Write a direct, active sentence that allows the reader to reconstruct that exact mental image chunk.',
        },
      ],
      keyTakeaways: [
        'Unless a passage can be visualized by the reader as either a concrete scene or a skeletal geometric diagram, the reader cannot truly understand or remember it.',
        'Rewriting 35-word corporate jargon into a 12-word visual sentence ("Outline the order in which activities will be curtailed should the plan need adjusting") transfers knowledge in high-retention chunks.',
      ],
      commonPitfalls: [
        'Believing that dehydrated, passive, technical jargon commands more executive respect than clear visual prose.',
        'Attributing human intentions to inanimate systems ("the existing system is not prepared to meet stringent accuracy requirements").',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Page & Screen Presentation Formats Decision Matrix',
      description: 'Selecting the optimal visual display format based on document length, audience size, and reading environment.',
      headers: ['Presentation Format', 'Target Audience & Setting', 'Structural Mechanics', 'Key Discipline / Rule', 'Primary Advantage'],
      rows: [
        [
          'Hierarchical Headings',
          'Individual reader; medium-to-long written reports',
          'Centered chapter titles, left-margin sections, indented subsections & numbered paragraphs',
          'Never use 1 of any heading level; keep headings outside text flow; parallel grammar',
          'Table of contents doubles as an executive précis; easy 30-second scan',
        ],
        [
          'Underlined Points & Decimal Numbering',
          'Analytical/government reports requiring exact clause citation',
          'Full support sentences underlined/bolded or numbered (1., 1.1, 1.1.1)',
          'Max 12 words per underlined point; never number intro or transition paragraphs',
          'Forces stark Q&A discipline and allows pinpoint cross-referencing ("In Section 4.1 on profits...")',
        ],
        [
          'Dot-Dash Outline ("Lap Visual")',
          'Small executive group (3–8 people) sitting around a table for a progress review',
          'Progressive right-indented single statements (1. → a. → - → •) read page-by-page together',
          'Omit grace notes and liaisons; 1 statement per tier; looser single-subpoint rule',
          'Paces reading speed to provoke live roundtable discussion on each finding',
        ],
        [
          '90/10 Slide Storyboard',
          'Large live audience viewing a screen while listening to a speaker',
          '90% visual exhibits (charts/diagrams) + 10% stark text slides backed by spoken script',
          'Top every chart with an active verb conclusion sentence; never recite text slides aloud',
          'Keeps audience entertained and focused on the speaker while proving relationships visually',
        ],
      ],
      verdictRule:
        'Use Indented Display for short 1–2 page memos, Hierarchical Headings for standalone reports, Dot-Dash Lap Visuals for roundtable progress reviews, and a 90%-Exhibit / 10%-Text Storyboard for live screen presentations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mpp-ch04-scen1',
      title: 'Transforming Jackson Foods’ 50-Slide "Visual Recitation" into a 90/10 Storyboard',
      roleAndContext: 'Supply chain practice leader preparing a board presentation for Jackson Foods, whose supply chain costs $12M/year (14% of NPS) with high stock-outs and backorders.',
      symptomOrFailure: 'The team drafted 50 dense text slides—including a 7-bullet "Guiding Principles" slide with 30-word sentences—planning to read every bullet aloud to the board.',
      naiveFixAndWhyItFails: 'Changing the font size or adding bullet animations fails because a live audience cannot simultaneously read 200 words on a screen and listen to the presenter.',
      firstPrinciplesSolution: 'Apply Minto’s 6-step Storyboard pipeline and Gene Zelazny’s 90/10 rule: write out the full S-C-Q-A spoken introduction, compress "Current Reality" into a stark 18-word text slide while speaking the narrative aloud, and convert the support tiers into message-titled exhibit slides ("50% of customers account for +95% of orders by value", "10% of products account for 60% of order value") that visually prove why Jackson Foods must focus on Class A customers first.',
      measurableOutcome: 'Replaced a soporific 50-slide text recitation with a high-impact visual storyboard that secured immediate board approval for the 2-phase supply chain turnaround.',
    },
    {
      id: 'mpp-ch04-scen2',
      title: 'Linking the Ritz-Ryan Hotel Chain Reorganization Report via Backward Referencing',
      roleAndContext: 'Organizational consultant writing a multi-chapter report recommending that the Ritz-Ryan hotel and catering group streamline its top executive and board structure.',
      symptomOrFailure: 'The draft jumped abruptly between chapters and subsections using mechanical transitions ("This section looked at leadership; the next section looks at authority lines") and relied on headings as part of the text.',
      naiveFixAndWhyItFails: 'Adding longer concluding summaries at the end of every subsection slows down the reader without explaining how the next pyramid leg connects to the last.',
      firstPrinciplesSolution: 'Apply Backward-Referencing transitions at every boundary by picking up the exact key phrase from the prior leg: link the first two sections with "The problems stemming from lack of full-time leadership are compounded by overlapping responsibility assignments...", link the subsections with "In addition to appointing a Group Managing Director, Ritz-Ryan should make changes to establish clear lines of authority...", and link the support points with "Just as only a full-time Chief Executive can coordinate line and staff activities, so only a full-time Chief Executive can provide steady pressure for improvements."',
      measurableOutcome: 'Created a seamless, self-contained narrative flow that guided the client through complex governance reforms without a single mechanical transition.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mpp-ch04-q1',
        scenarioPrompt:
          'Which of the following violates Barbara Minto’s six mandatory rules for using Hierarchical Headings on the page?',
        options: [
          {
            label: 'A',
            text: 'Writing all subsection headings inside a group in parallel "-ing" participial form ("Regrouping Hotels by Support Needs", "Assigning Responsibility for Overseas Operations", "Removing Boards from the Chain of Command").',
            isCorrect: false,
            explanation: 'Parallel grammatical form within a heading group is explicitly required by Rule 2.',
          },
          {
            label: 'B',
            text: 'Placing a single Subsection Heading ("1.1 Visuals") under a Section Heading without a "1.2", and starting the first sentence underneath it with "This action will clarify day-to-day responsibilities..."',
            isCorrect: true,
            explanation: 'This violates Rule 1 (never use only one of any heading element, since headings reflect divisions of thought) and Rule 4 (regard headings as outside the text; never refer to a heading with "This...").',
          },
          {
            label: 'C',
            text: 'Writing an introductory paragraph after the Chapter Heading before presenting the first Major Section Heading.',
            isCorrect: false,
            explanation: 'Rule 5 requires introducing every group of headings so a subsection heading never immediately follows a section heading.',
          },
          {
            label: 'D',
            text: 'Using different grammatical structures for subsection headings in Section 1 ("To Coordinate Activities") versus subsection headings in Section 2 ("Regrouping Hotels").',
            isCorrect: false,
            explanation: 'Minto notes that invisible fences separate major sections, so parallelism is required within each subsection group, not across different major sections.',
          },
        ],
      },
      {
        id: 'mpp-ch04-q2',
        scenarioPrompt:
          'When transitioning from one major section or Key Line grouping to the next in a long report, why does Minto forbid sentences like "This chapter has looked at the need for priorities; the next chapter looks at how these priorities should be set"?',
        options: [
          {
            label: 'A',
            text: 'Because transitions should relate what the two sections SAY (their ideas) rather than what they DO, using either a miniature S-C-Q story or backward-referencing a key phrase from the prior section.',
            isCorrect: true,
            explanation: 'Mechanical meta-commentary describes what chapters "do" instead of linking the substantive ideas via a mini S-C-Q story or backward-referencing a key phrase.',
          },
          {
            label: 'B',
            text: 'Because chapters in a business report should never have transitions between them.',
            isCorrect: false,
            explanation: 'Long documents require graceful transitions to pull the reader’s mind back to where it belongs at each major boundary.',
          },
          {
            label: 'C',
            text: 'Because the word "chapter" is forbidden in consulting reports.',
            isCorrect: false,
            explanation: 'The flaw is relating mechanical document containers rather than substantive ideas.',
          },
          {
            label: 'D',
            text: 'Because transitions must always be placed in footnotes.',
            isCorrect: false,
            explanation: 'Transitions belong in the opening or closing paragraphs of the main text sections.',
          },
        ],
      },
      {
        id: 'mpp-ch04-q3',
        scenarioPrompt:
          'According to Gene Zelazny and Barbara Minto, what is the ideal ratio of Exhibits (charts, tables, diagrams) to Text slides in a live business presentation, and how must every Exhibit slide be titled?',
        options: [
          {
            label: 'A',
            text: '90% Text slides to 10% Exhibits, with every Exhibit titled using a neutral category label like "Share of profits by region."',
            isCorrect: false,
            explanation: 'This is the exact inverse of Minto and Zelazny’s rule and produces a boring "visual recitation" with uninformative chart captions.',
          },
          {
            label: 'B',
            text: '90% Exhibits to 10% Text slides, with every Exhibit topped by a full sentence or active verb phrase that states the governing message of the chart (e.g., "Western Region accounts for almost half the profits").',
            isCorrect: true,
            explanation: 'In a live show, the speaker is the star; 90% of slides should be visual exhibits whose titles state the exact conclusion so viewers focus instantly on the intended relationship.',
          },
          {
            label: 'C',
            text: '50% Text slides and 50% Exhibits, where the presenter reads every word of the text slides verbatim.',
            isCorrect: false,
            explanation: 'Reading dense text slides aloud bores the audience; text slides should be 10% stark structural markers.',
          },
          {
            label: 'D',
            text: '100% Exhibits with no titles at all so the audience can draw its own conclusions.',
            isCorrect: false,
            explanation: 'Left to themselves, different viewers focus on different relationships in a chart; the title must state the message directly.',
          },
        ],
      },
      {
        id: 'mpp-ch04-q4',
        scenarioPrompt:
          'You encounter the following sentence in a draft report: "Preplanned adjustments may be developed from the alternative preliminary plans submitted by the Group and be in the form of outlines of contingency plans and prioritized guides to adjustments in special programs." How does Minto’s "Memory Image" technique fix this prose?',
        options: [
          {
            label: 'A',
            text: 'Replace every multisyllabic word with a synonym from a thesaurus while keeping the passive sentence structure.',
            isCorrect: false,
            explanation: 'Synonym swapping does not fix a sentence that lacks a visualizable mental image.',
          },
          {
            label: 'B',
            text: 'Isolate the concrete nouns, visualize or sketch the skeletal spatial relationship of what the author actually wants the reader to do, and copy that image directly into words: "Outline the order in which activities will be curtailed should the plan need adjusting."',
            isCorrect: true,
            explanation: 'Because conceptual thinking occurs in images, isolating the nouns and picturing the action lets you copy the mental image into a crisp, 14-word visual sentence.',
          },
          {
            label: 'C',
            text: 'Delete the sentence entirely because contingency planning is an intellectually blank assertion.',
            isCorrect: false,
            explanation: 'The underlying idea (outlining the curtailment sequence for contingency adjustments) is valid once rescued from the jargon.',
          },
          {
            label: 'D',
            text: 'Split the sentence into four numbered decimal paragraphs.',
            isCorrect: false,
            explanation: 'Splitting a single muddled sentence into four numbered paragraphs violates the rule against over-subdividing.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mpp-ch04-fc1',
        category: 'architecture',
        front: 'What are the 6 rules for using Hierarchical Headings to reflect the pyramid on the page?',
        back: '1. Never use only one of any element; 2. Show parallel ideas in parallel grammatical form; 3. Limit wording to the essence of the thought; 4. Regard headings as outside the text; 5. Introduce each group of headings; 6. Don’t overdo.',
        mentalHook: 'At least 2, Parallel grammar, Concise essence, Outside text, Introduce group, Don’t overdo.',
      },
      {
        id: 'mpp-ch04-fc2',
        category: 'adaptation',
        front: 'What is a "Dot-Dash Outline" (or "Lap Visual") and when should you use it?',
        back: 'A progressively right-indented outline of short, single-statement points (omitting grace notes and liaisons) used for small-group progress reviews around a table where you want to pace reading and provoke live discussion.',
        mentalHook: 'Lap Visual = Roundtable progress review format to spark discussion.',
      },
      {
        id: 'mpp-ch04-fc3',
        category: 'optimization',
        front: 'What is the strict rule governing what can be placed in a "Next Steps" section at the end of a report?',
        back: 'Every action in "Next Steps" must be a logically self-evident Monday-morning action (e.g., "Call the bank", "Reconvene the Acquisitions Committee") that the reader will not question; if an action raises a question, it belongs in the pyramid body.',
        mentalHook: 'Next Steps = Zero new questions allowed.',
      },
      {
        id: 'mpp-ch04-fc4',
        category: 'evaluation',
        front: 'What are the 5 quantitative relationships that Exhibit charts display (from Gene Zelazny’s Say It With Charts)?',
        back: '1. How do parts relate to the whole? 2. How do items compare? 3. How do items change over time? 4. How are items distributed? 5. How do items co-relate?',
        mentalHook: 'Whole/Parts, Comparison, Time, Distribution, Correlation.',
      },
      {
        id: 'mpp-ch04-fc5',
        category: 'foundation',
        front: 'What is George Miller’s "Memory Image" (illustrated by Thoreau’s Walden Pond passage) and why is it essential to clear prose?',
        back: 'A constructive mental picture (or skeletal geometric diagram) that the reader builds piecemeal from concrete phrases to compress and store the meaning of a passage in memory.',
        mentalHook: 'If the reader cannot picture it, they cannot understand or remember it.',
      },
      {
        id: 'mpp-ch04-fc6',
        category: 'foundation',
        front: 'What is Professor William Minto’s "Battalion Metaphor" for the writer’s duty of order and arrangement?',
        back: 'A writer is like a commander filing a battalion single-file through a narrow gap (one word/sentence at a time); clear order and visual arrangement allow the reader to re-form and reconstruct the entire battalion on the other side.',
        mentalHook: 'Single-file words in → Reconstructed pyramid out.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mpp-ch04-feyn1',
        conceptTitle: 'Reflecting the Pyramid on the Page vs. On the Live Screen',
        prompt:
          'Contrast how you visually reinforce a pyramid on the printed page (for a solo reader) versus on a presentation screen (for a live audience), explaining the 6 Heading Rules and Gene Zelazny’s 90/10 Storyboard rules.',
        rubricChecklist: [
          'Explains that the eye always sees the logic before the mind comprehends it.',
          'Lists key page rules: progressive right indentation, never only 1 heading at any level, parallel grammar, headings outside text, and backward-referencing transitions.',
          'Explains why projecting a written report on screen creates a deadly "visual recitation" and states the 90% Exhibits / 10% Text slides rule.',
          'Explains the 6-step Storyboard process and why every chart title must be a full sentence or verb phrase stating the governing insight.',
        ],
        modelExplanation:
          'Because the eye perceives structure before the mind decodes words, both page and screen layouts must visually mirror your pyramid tiers. On the printed page—where a solo reader controls pacing—you use progressive right indentation, parallel grammatical headings (never allowing an orphan single heading and keeping headings outside the text flow), and backward-referencing transitions so the reader grasps the entire structure in 30 seconds. On a live presentation screen, however, YOU are the star of the show. Instead of projecting dense text paragraphs ("visual recitation"), you build a 6-step Storyboard with 10% stark text slides and 90% visual exhibits (charts/diagrams), topping every chart with an active-verb sentence that states the exact takeaway while you deliver the narrative transitions aloud.',
      },
      {
        id: 'mpp-ch04-feyn2',
        conceptTitle: 'Translating Mental Memory Images into Crisp Visual Prose',
        prompt:
          'Explain why bright problem solvers often write impenetrable corporate jargon, and demonstrate Minto’s 3-step "Create the Image / Copy the Image in Words" technique using George Miller’s memory-image theory.',
        rubricChecklist: [
          'Explains that human conceptual thinking occurs in visual images that compress complex details to bypass the 7 ± 2 working-memory limit.',
          'Cites George Miller’s "memory image" (Thoreau at Walden Pond) and skeletal geometric diagrams (boxes, lines, arrows) for abstract concepts.',
          'Diagnoses corporate jargon as "dehydrated prose" stripped of visualizable nouns and spatial interactions.',
          'Demonstrates the 3-step fix: (1) circle concrete nouns, (2) sketch their spatial/causal interaction with boxes and arrows, and (3) copy that image directly into an active sentence.',
        ],
        modelExplanation:
          'We do our conceptual thinking in visual images because a single mental image compresses dozens of low-level facts into one chunk that fits inside our 7 ± 2 working-memory limit. When readers read good prose—like Thoreau chopping white pines on a hillside by Walden Pond—they construct a "memory image" phrase by phrase that stores the meaning in recall. Corporate jargon fails because writers dehydrate their visual thoughts into abstract nouns ("improving cost-effectiveness of field sales-force deployment to reflect redefined selling missions"). To fix bad prose, isolate the concrete nouns (salesman, store, trading environment), sketch the skeletal box-and-arrow diagram of how they interact, and copy that picture directly into words: "We must redeploy the sales force to match the new trading environment."',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mpp-hierarchical-headings',
        label: 'Hierarchical Page Headings',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition: 'Visual page layout system that maps pyramid abstraction levels to centered titles, left-margin sections, indented subsections, and numbered paragraphs.',
        formulaOrRule: 'N_{\\text{siblings}} \\ge 2; \\quad \\text{Parallel Grammar}; \\quad \\text{Outside Text Flow}',
        whyItMatters: 'Lets the reader’s eye absorb the Main Point, Key Line, and hierarchy in the first 30 seconds.',
      },
      {
        id: 'mpp-backward-referencing',
        label: 'Backward-Referencing Transitions',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 2,
        definition: 'Transition technique that picks up a key word, phrase, or main idea from the preceding pyramid leg and carries it into the opening sentence of the next section.',
        formulaOrRule: '\\text{Section}_{k-1} \\text{ Key Phrase} \\hookrightarrow \\text{Section}_k \\text{ Opening Sentence}',
        whyItMatters: 'Links what sections say rather than mechanically announcing what chapters do.',
      },
      {
        id: 'mpp-dot-dash-lap-visual',
        label: 'Dot-Dash Outline (Lap Visual)',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 3,
        definition: 'Progressively right-indented single-statement outline format used for small roundtable client progress reviews.',
        formulaOrRule: '1. \\to a. \\to - \\to \\bullet \\quad (\\text{1 stark statement per line})',
        whyItMatters: 'Paces collective reading around a conference table to provoke live client discussion.',
      },
      {
        id: 'mpp-zelazny-90-10-slides',
        label: '90/10 Exhibit-to-Text Slide Rule',
        category: 'optimization',
        chapterNumber: 4,
        importance: 1,
        definition: 'Gene Zelazny and Minto’s presentation standard requiring 90% visual exhibit slides (charts, tables, diagrams) and 10% stark text slides.',
        formulaOrRule: '\\text{Slide Deck} = 90\\% \\text{ Message-Titled Exhibits} + 10\\% \\text{ Stark Text Slides}',
        whyItMatters: 'Prevents "visual recitation" and keeps the live audience focused on the speaker as the star of the show.',
      },
      {
        id: 'mpp-storyboard-pipeline',
        label: '6-Step Presentation Storyboarding',
        category: 'architecture',
        chapterNumber: 4,
        importance: 2,
        definition: 'Process of scripting the full SCQA intro, mapping Key Line and support sentences across blank slide boxes, roughing visuals, scripting spoken transitions, and rehearsing.',
        formulaOrRule: '\\text{Pyramid} \\to \\text{Action-Titled Storyboard Grid} \\to \\text{Spoken Script}',
        whyItMatters: 'Ensures every slide title states a governing insight while the graphic proves a specific quantitative relationship.',
      },
      {
        id: 'mpp-miller-memory-image',
        label: 'Constructive Memory Image Prose',
        category: 'foundation',
        chapterNumber: 4,
        importance: 1,
        definition: 'Technique of isolating concrete nouns, sketching their skeletal geometric/spatial relationship, and copying that visual image into lucid prose.',
        formulaOrRule: '\\text{Dehydrated Jargon} \\to \\text{Concrete Nouns + Arrow Sketch} \\to \\text{Visual Sentence}',
        whyItMatters: 'Enables the reader to reconstruct and retain complex ideas in high-capacity visual chunks.',
      },
    ],
    edges: [
      {
        source: 'mpp-hierarchical-headings',
        target: 'mpp-backward-referencing',
        relationship: 'part_of',
        explanation: 'Hierarchical headings visually mark pyramid divisions while backward-referencing transitions verbally link them.',
      },
      {
        source: 'mpp-hierarchical-headings',
        target: 'mpp-dot-dash-lap-visual',
        relationship: 'trades_off_with',
        explanation: 'Solo-reader reports use full prose with hierarchical headings, whereas roundtable progress reviews use stark dot-dash lap visuals.',
      },
      {
        source: 'mpp-storyboard-pipeline',
        target: 'mpp-zelazny-90-10-slides',
        relationship: 'prerequisite_for',
        explanation: 'Storyboarding the Key Line and support points determines which 90% become exhibits and which 10% remain text markers.',
      },
      {
        source: 'mpp-miller-memory-image',
        target: 'mpp-hierarchical-headings',
        relationship: 'optimizes',
        explanation: 'Visual memory-image prose ensures the paragraphs beneath clean headings are as lucid as the structure itself.',
      },
      {
        source: 'mpp-miller-memory-image',
        target: 'mpp-storyboard-pipeline',
        relationship: 'optimizes',
        explanation: 'Skeletal visual thinking translates abstract concepts into both crisp prose sentences and clear storyboard exhibit diagrams.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Part 4 (Chapters 10–12): Reflecting the Pyramid on the Page (6 heading rules, underlined points, decimal numbering, indented display, dot-dash lap visuals, backward-referencing transitions, Next Steps), Reflecting on a Screen (Zelazny 90/10 rule, 5 chart relationships, 6-step storyboarding), and Reflecting in Prose (George Miller memory images & William Minto battalion metaphor).',
  },
};
