import { ChapterMastery } from '../../../types/book';

export const mwCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'Part I (Foundations): Fact-Based Problem Solving, MECE Structuring, and the Initial Hypothesis',
  subtitle: 'Building strategic solutions on empirical fact bricks, 2-to-5 top-line MECE boundaries, and Day-One testable Issue Trees.',
  readingTimeMinutes: 8,
  sourceWordCount: 1385,
  executiveThesis:
    'Strategic problem solving rests on three non-negotiable pillars: fact-based inquiry, Mutually Exclusive and Collectively Exhaustive (MECE) issue structuring, and an Initial Hypothesis (IH) generated at the first meeting. Facts substitute for missing industry gut instinct and bridge the credibility gap between junior analysts and senior executives, while the IH acts as an actionable roadmap that decomposes top-line drivers into an issue tree to be tested against empirical reality.',
  paradigmShift: {
    oldWay:
      'Relying on veteran gut instinct, boiling the ocean with unstructured data collection, and listing overlapping issues on a slide before deciding what solution to test.',
    newWay:
      'Treating facts as both analytical bricks and credibility bridges, bounding every problem into 2 to 5 MECE top-line drivers, and defining an actionable Initial Hypothesis on Day 1.',
    whyItChanged:
      'Generalist problem solvers lack decades of domain intuition and executive seniority; only empirical facts and a falsifiable roadmap prevent wasted effort and command boardroom authority.',
  },
  mentalModels: [
    {
      id: 'mw-ch01-mm1',
      name: 'The Dual Function of Facts (Gut-Substitute & Credibility Bridge)',
      tagline: 'Facts replace missing domain intuition and allow a 27-year-old associate to persuade a Fortune 50 CEO.',
      naiveIntuition:
        'Experienced managers believe they already know the facts of their business and treat additional data gathering as clerical busywork.',
      firstPrinciplesReality:
        'At a supermarket chain like Stop & Shop, a 10-year perishable-foods veteran has valid gut instinct, whereas a generalist consultant does not; empirical facts compensate for that intuition gap and give a 27-year-old MBA the objective authority to challenge a seasoned CEO.',
      howToApply:
        'Begin every engagement by gathering primary empirical facts to build the argument and verify hypotheses, and never hide from nasty facts that contradict your initial theory.',
    },
    {
      id: 'mw-ch01-mm2',
      name: 'The MECE Issue-Boundary Sieve (2–5 Top-Line Rule)',
      tagline: 'Separate every problem into two to five non-overlapping, exhaustive issues and relegate minor variables to sub-tier buckets.',
      naiveIntuition:
        'Teams brainstorm every conceivable problem—sales, marketing, unit cost, and production reengineering—into a single flat list on Slide 1.',
      firstPrinciplesReality:
        'At Acme Widgets, adding "reengineering the production process" alongside "changing retail sales," "improving consumer marketing," and "reducing unit cost" violates mutual exclusivity because reengineering is actually a sub-lever of reducing unit cost and improving product quality.',
      howToApply:
        'Constrain top-level MECE issue lists to between two and five major drivers (ideally three), push cross-cutting processes into sub-issues, and never place an "Other Issues" bucket on the opening slide.',
    },
    {
      id: 'mw-ch01-mm3',
      name: 'The Smith Street Roadmap (Actionable Initial Hypothesis)',
      tagline: 'Generate a testable, actionable Issue Tree after two hours of trade-press immersion rather than driving blind.',
      naiveIntuition:
        'Waiting until all interviews and spreadsheets are finished before proposing a recommendation so the team avoids making an early mistake.',
      firstPrinciplesReality:
        'Embarking on a study without an Initial Hypothesis is like driving to a restaurant off Smith Street without a map; reading trade journals for two hours and tapping internal experts allows the team to map actionable key drivers into a testable Issue Tree on Day 1.',
      howToApply:
        'Draft an Initial Hypothesis in the first team session, exclude unactionable variables like weather in favor of controllable levers ("reduce weather vulnerability"), and have the team leader kick the tires by probing every assumption.',
    },
  ],
  customDiagrams: [
    {
      id: 'mw-ch01-svg-1',
      title: 'Acme Widgets MECE Issue Tree vs. Overlapping Issue List',
      subtitle: 'Enforcing mutual exclusivity across three top-line drivers and buyer-category sub-branches.',
      bierutCaption:
        'Structuring "Sell More Widgets" into three mutually exclusive top-line drivers moves "Production Reengineering" from an overlapping fourth category into its true causal home under Unit Cost and Marketing Quality.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="80" x2="800" y2="80" />
    <line x1="0" y1="210" x2="800" y2="210" />
    <line x1="0" y1="340" x2="800" y2="340" />
    <line x1="360" y1="0" x2="360" y2="420" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 1.1 — MECE TOP-LINE BOUNDARY &amp; ISSUE TREE DECOMPOSITION</text>
  <rect x="25" y="55" width="315" height="335" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="42" y="82" fill="#f43f5e" font-family="sans-serif" font-size="12" font-weight="bold">NON-MECE LIST (OVERLAPPING BUCKETS)</text>
  <rect x="45" y="102" width="275" height="42" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="60" y="127" fill="#e2e8f0" font-family="sans-serif" font-size="11">1. Change Retail Widget Sales</text>
  <rect x="45" y="156" width="275" height="42" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="60" y="181" fill="#e2e8f0" font-family="sans-serif" font-size="11">2. Improve Consumer Marketing</text>
  <rect x="45" y="210" width="275" height="42" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="60" y="235" fill="#e2e8f0" font-family="sans-serif" font-size="11">3. Reduce Widget Unit Cost</text>
  <rect x="45" y="264" width="275" height="48" rx="6" fill="#311024" stroke="#f43f5e" stroke-width="2" />
  <text x="60" y="285" fill="#fda4af" font-family="sans-serif" font-size="11" font-weight="bold">4. Reengineer Production Process (ERROR)</text>
  <text x="60" y="302" fill="#94a3b8" font-family="monospace" font-size="9.5">Collides with #2 (Quality) and #3 (Unit Cost)</text>
  <text x="45" y="346" fill="#f43f5e" font-family="monospace" font-size="10">RESULT: Duplicated effort &amp; confused client</text>
  <rect x="380" y="55" width="395" height="335" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="82" fill="#10b981" font-family="sans-serif" font-size="12" font-weight="bold">MECE ISSUE TREE (3 TOP-LINE DRIVERS)</text>
  <rect x="398" y="198" width="95" height="54" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
  <text x="445" y="221" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle">Sell More</text>
  <text x="445" y="237" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Acme Widgets</text>
  <path d="M 493 225 L 525 130" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" fill="none" />
  <path d="M 493 225 L 525 225" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" fill="none" />
  <path d="M 493 225 L 525 320" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" fill="none" />
  <rect x="525" y="98" width="230" height="68" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="537" y="118" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">1. Change Retail Sales</text>
  <text x="537" y="136" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Reorg by buyer: Superstores</text>
  <text x="537" y="152" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Dept Stores / Specialty</text>
  <rect x="525" y="191" width="230" height="68" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="537" y="211" fill="#10b981" font-family="sans-serif" font-size="11" font-weight="bold">2. Improve Consumer Marketing</text>
  <text x="537" y="229" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Target Core Ad Segments</text>
  <text x="537" y="245" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Boost Quality via Reengineering</text>
  <rect x="525" y="284" width="230" height="72" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="537" y="304" fill="#f59e0b" font-family="sans-serif" font-size="11" font-weight="bold">3. Reduce Unit Cost</text>
  <text x="537" y="322" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Reengineer Production Line</text>
  <text x="537" y="338" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Renegotiate Supplier Inputs</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Mutual Exclusivity Violation',
          explanation:
            'Listing production reengineering as a 4th top-line issue duplicates work because its only value is either lowering unit cost (#3) or raising product quality (#2).',
        },
        {
          step: '02',
          label: 'The Rule of Three Top-Line Cap',
          explanation:
            'Keeping top-level issues between 2 and 5 (with 3 as the cognitive sweet spot) prevents executive overload while maintaining collective exhaustiveness.',
        },
        {
          step: '03',
          label: 'Customer-Type Sales Tree',
          explanation:
            'Drilling down into Retail Sales reveals the actionable sub-hypothesis: shifting from geographic territories to Superstores, Department Stores, and Specialty Stores.',
        },
      ],
    },
    {
      id: 'mw-ch01-svg-2',
      title: 'Day-1 Initial Hypothesis (IH) Generation & Tire-Kicking Loop',
      subtitle: 'From two hours of trade-press immersion to an adversarial 3-to-4 person team stress test.',
      bierutCaption:
        'Two hours of trade-publication synthesis and internal expert polling convert a blank slate into a falsifiable Issue Tree tested by the team leader before field work begins.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="100" x2="800" y2="100" />
    <line x1="0" y1="220" x2="800" y2="220" />
    <line x1="0" y1="340" x2="800" y2="340" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 1.2 — SOLVING THE PROBLEM AT THE FIRST MEETING (THE INITIAL HYPOTHESIS)</text>
  <rect x="30" y="70" width="215" height="270" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="45" y="98" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">STAGE 1: RAPID IMMERSION</text>
  <rect x="45" y="116" width="185" height="62" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="57" y="138" fill="#e2e8f0" font-family="sans-serif" font-size="11" font-weight="bold">1–2 Hours Trade Press</text>
  <text x="57" y="156" fill="#94a3b8" font-family="monospace" font-size="9.5">Digest industry journals</text>
  <text x="57" y="170" fill="#94a3b8" font-family="monospace" font-size="9.5">for macro facts &amp; trends</text>
  <rect x="45" y="194" width="185" height="62" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="57" y="216" fill="#e2e8f0" font-family="sans-serif" font-size="11" font-weight="bold">Internal Brain Picking</text>
  <text x="57" y="234" fill="#94a3b8" font-family="monospace" font-size="9.5">Poll Firm experts for</text>
  <text x="57" y="248" fill="#94a3b8" font-family="monospace" font-size="9.5">high-level driver patterns</text>
  <text x="45" y="295" fill="#38bdf8" font-family="monospace" font-size="10">Facts = Bricks + Credibility</text>
  <path d="M 245 205 L 290 205" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="290" y="70" width="220" height="270" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="305" y="98" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">STAGE 2: ACTIONABILITY FILTER</text>
  <rect x="305" y="116" width="190" height="66" rx="6" fill="#311024" stroke="#f43f5e" />
  <text x="317" y="138" fill="#fda4af" font-family="sans-serif" font-size="10.5" font-weight="bold">REJECT: Unactionable Driver</text>
  <text x="317" y="155" fill="#94a3b8" font-family="monospace" font-size="9.5">"Pray for good weather"</text>
  <text x="317" y="170" fill="#f43f5e" font-family="monospace" font-size="9">Zero client control</text>
  <rect x="305" y="198" width="190" height="72" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="317" y="220" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">KEEP: Actionable Driver</text>
  <text x="317" y="238" fill="#e2e8f0" font-family="monospace" font-size="9.5">"Reduce vulnerability</text>
  <text x="317" y="253" fill="#e2e8f0" font-family="monospace" font-size="9.5">to weather fluctuations"</text>
  <text x="305" y="302" fill="#10b981" font-family="monospace" font-size="10">Build Issue Tree Roadmap</text>
  <path d="M 510 205 L 555 205" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="555" y="70" width="215" height="270" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="570" y="98" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">STAGE 3: TIRE-KICKING</text>
  <rect x="570" y="116" width="185" height="110" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="582" y="138" fill="#f59e0b" font-family="sans-serif" font-size="11" font-weight="bold">3–4 Person Stress Test</text>
  <text x="582" y="158" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Team Leader probes</text>
  <text x="582" y="174" fill="#cbd5e1" font-family="monospace" font-size="9.5">• "What if we change X?"</text>
  <text x="582" y="190" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Prune weak branches</text>
  <text x="582" y="208" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Lock research docket</text>
  <rect x="570" y="242" width="185" height="68" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="582" y="264" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">Validated IH Output</text>
  <text x="582" y="282" fill="#94a3b8" font-family="monospace" font-size="9.5">Guides all field interviews</text>
  <text x="582" y="296" fill="#94a3b8" font-family="monospace" font-size="9.5">&amp; empirical data runs</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Fast External & Internal Scan',
          explanation:
            'Two hours reading trade publications plus a call to an internal specialist generates enough domain context to draft the initial hypothesis.',
        },
        {
          step: '02',
          label: 'The Actionability Screen',
          explanation:
            'Every branch of the Initial Hypothesis must represent a lever the client can actually pull, reframing external shocks into internal resilience.',
        },
        {
          step: '03',
          label: 'Thought-Leader Stress Testing',
          explanation:
            'Before leaving the first meeting, a 3–4 person team subjects the draft Issue Tree to adversarial questioning so only plausible branches enter field research.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'mw-ch01-sec-1',
      sectionNumber: '1.1',
      title: 'The Three Pillars & Why Facts Are Friendly',
      subtitle: 'Fact-Based Inquiry as Intuition Substitute and Credibility Bridge',
      coreMechanism:
        'McKinsey problem solving operates on three foundational pillars: it is fact-based, rigidly structured, and hypothesis-driven, reinforced culturally by the Rule of Three and the priority hierarchy of "Client, Firm, You." Within this architecture, facts perform two specific operational jobs. First, facts compensate for the lack of gut instinct: whereas a ten-year veteran in the perishable foods department at Stop & Shop has earned valid intuition about spoilage and shelf rotation, a generalist consultant entering a new industry has none and must rely on empirical data. Second, facts bridge the credibility gap: when a 27-year-old associate with a freshly minted MBA presents recommendations to the seasoned CEO of a Fortune 50 corporation, personal opinion carries zero weight. Only irrefutable empirical evidence compels executive agreement, which is why teams never hide from nasty facts that contradict their early assumptions.',
      keyTakeaways: [
        'Facts serve as both the analytical bricks that replace missing domain gut instinct and the mortar that bridges the credibility gap with senior executives.',
        'Generalists entering an unfamiliar industry must distrust unverified intuition until empirical numbers confirm the underlying mechanism.',
        'Hiding from nasty facts only delays inevitable failure because the client or the market will eventually uncover the disconfirming evidence.',
      ],
      commonPitfalls: [
        'Attempting to debate a 20-year industry executive using qualitative opinions instead of indisputable empirical measurements.',
        'Suppressing inconvenient field data during week two because it invalidates a popular assumption made during the kickoff meeting.',
        'Assuming that gathering mountains of disconnected facts without a structural hypothesis will automatically reveal the answer.',
      ],
      figures: [
        {
          file: 'index-1_1.jpg',
          originalLabel: 'Figure 1-1 — Foundational McKinsey Problem-Solving Architecture',
          bierutTitle: 'Anchor Every Strategic Recommendation in Empirical Fact Bricks',
          editorialAnalysis:
            'Rasiel establishes from the opening pages that McKinsey’s authority comes not from proprietary mystique but from disciplined adherence to facts, MECE structure, and hypothesis testing. By pairing empirical evidence with a falsifiable issue tree, even a junior associate can stand behind recommendations in a Fortune 50 boardroom.',
          keyTakeaways: [
            'Combine fact-based analysis, MECE issue partitioning, and a Day-One Initial Hypothesis.',
            'Enforce the institutional priority order of Client first, Firm second, and You third.',
          ],
        },
      ],
    },
    {
      id: 'mw-ch01-sec-2',
      sectionNumber: '1.2',
      title: 'Feel Free to Be MECE (Mutually Exclusive, Collectively Exhaustive)',
      subtitle: 'Enforcing Separate and Complete Issue Boundaries Across 2 to 5 Top-Line Drivers',
      coreMechanism:
        'Every McKinsey document, presentation, and analytical workplan must be MECE: Mutually Exclusive (every sub-issue represents a completely separate category without overlap) and Collectively Exhaustive (all categories summed together account for 100% of the problem). Suppose Acme Widgets needs to sell more widgets and the team proposes four ways: (1) changing how we sell widgets to retail outlets, (2) improving how we market widgets to consumers, (3) reducing the unit cost of widgets, and (4) reengineering the production process. Item 4 violates MECE because reengineering production is not an independent way to boost sales; it is a sub-issue belonging under either reducing unit cost (#3) or improving product quality under marketing (#2). A valid top-line MECE list contains between two and five major issues—three being optimal—while minor items are grouped into an "Other Issues" bucket strictly at the sub-issue level, never on Slide 1.',
      keyTakeaways: [
        'Verify Mutual Exclusivity by checking whether any proposed top-line issue is actually an operational sub-lever of another issue on the same tier.',
        'Bound top-level problem definitions to between two and five major categories (with three as the cognitive optimum) to prevent executive confusion.',
        'Never place an "Other Issues" catch-all category on the top-level summary slide; use it only at lower levels of the breakdown to preserve exhaustiveness.',
      ],
      commonPitfalls: [
        'Mixing operational means (like "reengineering production") with strategic ends (like "reducing unit cost") on the same level of an issue list.',
        'Presenting a 12-item ungrouped laundry list of problems to a client under the mistaken belief that length equals thoroughness.',
        'Leaving a major causal channel out of the top-level breakdown, violating collective exhaustiveness and blinding the team to the real root cause.',
      ],
    },
    {
      id: 'mw-ch01-sec-3',
      sectionNumber: '1.3',
      title: 'Solving the Problem at the First Meeting: Generating & Testing the Initial Hypothesis',
      subtitle: 'Transforming a Blank Sheet into a Stress-Tested Issue Tree Roadmap in Two Hours',
      coreMechanism:
        'Solving a complex business problem without an Initial Hypothesis (IH) is like driving to a restaurant off Smith Street without a roadmap: you waste hours turning down dead-end streets. Generating the IH at the first meeting requires one to two hours of reading industry trade publications paired with polling an internal firm expert to absorb macro facts. The team isolates the key drivers and translates them into actionable recommendations—discarding uncontrollable variables like "pray for good weather" in favor of controllable levers like "reduce vulnerability to weather fluctuations." Drilling down one level deeper turns each driver into an Issue Tree (such as reorganizing Acme Widgets’ geographic sales force into Superstore, Department Store, and Specialty Store specialists). Finally, in a 3-to-4 person session led by the Engagement Manager, the team "kicks the tires" by probing every assumption with counterfactuals before field work begins.',
      keyTakeaways: [
        'Spend one to two hours scanning trade publications and polling internal specialists so you enter the first meeting ready to draft an Initial Hypothesis.',
        'Filter every proposed branch of the Initial Hypothesis for actionability and expand each recommendation into a multi-tier Issue Tree.',
        'Subject the draft Initial Hypothesis to immediate adversarial tire-kicking in a 3-to-4 person team session before launching field research.',
      ],
      commonPitfalls: [
        'Embarking on weeks of unfocused client interviews and spreadsheet modeling before writing down a falsifiable Initial Hypothesis.',
        'Including macroeconomic or environmental variables in the Issue Tree as passive complaints rather than actionable mitigation levers.',
        'Treating the Initial Hypothesis as a sacred conclusion to be defended rather than a provisional roadmap designed to be tested to destruction.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Problem-Solving Launch Architecture: Unstructured Data Dragnet vs. Veteran Gut Instinct vs. MECE Initial Hypothesis',
      description:
        'Evaluating how teams initiate complex business diagnoses under tight time constraints and high executive skepticism.',
      headers: ['Dimension', 'Unstructured Data Dragnet', 'Unverified Veteran Gut Instinct', 'MECE Initial Hypothesis (McKinsey Way)'],
      rows: [
        [
          'Day-1 Roadmap Clarity',
          'Zero roadmap; collects data blindly across all departments',
          'Single rigid assumption based on past habits',
          'Explicit Issue Tree of 2–5 MECE drivers built after 2 hours of trade research',
        ],
        [
          'Category Overlap Risk',
          'Severe; mixes sub-processes like reengineering with top-line goals',
          'Moderate; overlooks cross-departmental interactions',
          'Eliminated; enforces strict Mutual Exclusivity and Collective Exhaustiveness',
        ],
        [
          'Executive Credibility',
          'Low; buries the board in raw spreadsheets without a thesis',
          'Fails whenever a young generalist addresses a seasoned CEO',
          'High; uses empirical fact bricks to bridge the seniority credibility gap',
        ],
        [
          'Vulnerability to Bias',
          'High risk of boiling the ocean until the deadline expires',
          'High risk of ignoring structural market shifts',
          'Low; 3–4 person tire-kicking session prunes weak branches early',
        ],
      ],
      verdictRule:
        'Always launch a study by investing two hours in trade research to draft a 3-driver MECE Initial Hypothesis, then kick the tires as a team before collecting granular field data.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mw-ch01-scen-1',
      title: 'Eliminating Category Overlap in an Industrial Manufacturing Turnaround',
      roleAndContext: 'Acme Widgets Task Force — Multi-Division Consumer & Retail Manufacturer',
      symptomOrFailure:
        'A newly formed strategy team presents a four-part plan to grow widget revenue: (1) overhaul retail sales, (2) upgrade consumer marketing, (3) cut unit manufacturing cost, and (4) reengineer the factory production line. Two sub-teams immediately collide on the factory floor, asking plant managers identical questions.',
      naiveFixAndWhyItFails:
        'The project manager tries to draw a calendar schedule separating when the "Unit Cost" team and the "Production Reengineering" team can visit the factory, which fails because both teams are analyzing the exact same assembly bottlenecks for different slides.',
      firstPrinciplesSolution:
        'Apply the MECE test: recognize that "reengineering the production process" is not a separate fourth top-line lever for selling more widgets, but a sub-issue that belongs beneath "reducing unit cost" (efficiency) and "improving consumer marketing" (product quality). Consolidate the top-line list to the three true MECE drivers.',
      measurableOutcome:
        'Eliminates 100% of duplicate factory interviews, cuts analytical workstream overlap by 25%, and delivers a clean 3-pillar Issue Tree that the VP of Operations approves in one session.',
    },
    {
      id: 'mw-ch01-scen-2',
      title: 'Replacing Geographic Sales Territories with a Customer-Type Issue Tree',
      roleAndContext: 'National Widget Distributor — 120-Person Field Sales Organization',
      symptomOrFailure:
        'Widget sales have plateaued for three years while big-box superstores expand nationwide, yet the VP of Sales insists the problem is "bad autumn weather" and asks the consulting team to survey all 50 regional territory managers.',
      naiveFixAndWhyItFails:
        'Spending six weeks interviewing all 50 geographic territory managers and building econometric weather regressions, which produces an unactionable report blaming rainfall while competitors capture the superstore accounts.',
      firstPrinciplesSolution:
        'Filter out unactionable weather complaints during the Day-1 Initial Hypothesis session and drill down into the "Change Retail Sales" branch of the Issue Tree: hypothesize that geographic territories are obsolete and test reorganizing the sales force by buyer category (Superstores, Department Stores, Specialty Stores).',
      measurableOutcome:
        'Focused buyer interviews confirm that national superstore chains require dedicated account specialists; reorganizing the sales force by buyer category boosts widget sales projections by 50% over three years.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mw-ch01-q1',
        scenarioPrompt:
          'According to Ethan Rasiel, what are the two specific operational reasons why empirical facts are treated as foundational at McKinsey?',
        options: [
          {
            label: 'A',
            text: 'Facts satisfy regulatory audit requirements and allow the firm to bill by the page.',
            isCorrect: false,
            explanation: 'McKinsey does not bill by the page; facts serve analytical and persuasive functions.',
          },
          {
            label: 'B',
            text: 'Facts compensate for the lack of industry gut instinct in generalists and bridge the credibility gap between young associates and senior executives.',
            isCorrect: true,
            explanation: 'Unlike a 10-year Stop & Shop perishable-foods veteran, a generalist lacks domain gut instinct, and a 27-year-old MBA needs objective facts to persuade a Fortune 50 CEO.',
          },
          {
            label: 'C',
            text: 'Facts eliminate the need to formulate an Initial Hypothesis and guarantee that every client employee will support the project.',
            isCorrect: false,
            explanation: 'Facts never replace the Initial Hypothesis; the IH guides which facts to collect.',
          },
          {
            label: 'D',
            text: 'Facts allow teams to list more than ten top-line issues on Slide 1 without applying MECE boundaries.',
            isCorrect: false,
            explanation: 'Top-line issues must always be bounded to 2–5 MECE categories regardless of fact volume.',
          },
        ],
      },
      {
        id: 'mw-ch01-q2',
        scenarioPrompt:
          'In the Acme Widgets example ("We need to sell more widgets"), why does adding "Reengineering the production process" as a fourth top-line issue alongside Retail Sales, Consumer Marketing, and Unit Cost violate MECE?',
        options: [
          {
            label: 'A',
            text: 'Because production reengineering is illegal under union contracts.',
            isCorrect: false,
            explanation: 'The violation is logical and structural, not legal.',
          },
          {
            label: 'B',
            text: 'Because any list with four items violates the Rule of Three.',
            isCorrect: false,
            explanation: 'Top-line lists can have 2 to 5 items; the error is category overlap.',
          },
          {
            label: 'C',
            text: 'Because reengineering the production process is not a separate top-line lever; it is a sub-issue under reducing unit cost and improving product quality under marketing.',
            isCorrect: true,
            explanation: 'Mutual Exclusivity requires that top-line issues do not overlap; production reengineering only helps sell more widgets by lowering unit cost or improving quality.',
          },
          {
            label: 'D',
            text: 'Because production reengineering belongs in the "Other Issues" bucket on Slide 1.',
            isCorrect: false,
            explanation: 'An "Other Issues" bucket is never placed on Slide 1, and production reengineering is a primary sub-lever of cost and quality.',
          },
        ],
      },
      {
        id: 'mw-ch01-q3',
        scenarioPrompt:
          'How should an analyst handle the "Other Issues" bucket when structuring a MECE problem breakdown?',
        options: [
          {
            label: 'A',
            text: 'Place "Other Issues" as the fourth bullet on the opening executive summary slide to prove collective exhaustiveness.',
            isCorrect: false,
            explanation: 'Rasiel explicitly warns never to place "Other Issues" on the first top-line slide.',
          },
          {
            label: 'B',
            text: 'Use "Other Issues" only at the sub-issue level for minor items, never on the first top-line slide.',
            isCorrect: true,
            explanation: 'Top-line issues on the opening slide must be restricted to the 2 to 5 core drivers; minor leftover items belong in an "Other Issues" bucket only at subordinate tiers.',
          },
          {
            label: 'C',
            text: 'Create three separate "Other Issues" categories to obey the Rule of Three.',
            isCorrect: false,
            explanation: 'Splitting catch-all buckets adds zero clarity.',
          },
          {
            label: 'D',
            text: 'Assign the entire team to research the "Other Issues" bucket first before looking at key drivers.',
            isCorrect: false,
            explanation: 'Research always prioritizes the top key drivers first.',
          },
        ],
      },
      {
        id: 'mw-ch01-q4',
        scenarioPrompt:
          'When generating an Initial Hypothesis (IH) at the first team meeting, how should the team treat a major external factor such as seasonal weather?',
        options: [
          {
            label: 'A',
            text: 'List "Improve the weather" as the primary recommendation on the Issue Tree.',
            isCorrect: false,
            explanation: 'Weather is outside client control and therefore unactionable.',
          },
          {
            label: 'B',
            text: 'Discard any business problem affected by weather as unsolvable.',
            isCorrect: false,
            explanation: 'Weather sensitivity can be mitigated through operational and product levers.',
          },
          {
            label: 'C',
            text: 'Translate the external factor into an actionable recommendation the client controls, such as "Reduce vulnerability to weather fluctuations."',
            isCorrect: true,
            explanation: 'Every recommendation in an Initial Hypothesis must be actionable; because a client cannot control the weather, the IH must focus on controllable levers that reduce sensitivity to weather.',
          },
          {
            label: 'D',
            text: 'Postpone drafting the Initial Hypothesis for six months until meteorological data arrives.',
            isCorrect: false,
            explanation: 'The Initial Hypothesis is always drafted at the first meeting.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mw-ch01-fc1',
        category: 'foundation',
        front: 'What are the three core pillars of McKinsey problem solving?',
        back: 'Fact-based, rigidly structured (MECE), and hypothesis-driven.',
        mentalHook: 'Facts = Bricks; MECE = Blueprint; Initial Hypothesis = Roadmap.',
      },
      {
        id: 'mw-ch01-fc2',
        category: 'foundation',
        front: 'What is the McKinsey institutional priority hierarchy?',
        back: 'Client first, Firm second, You third ("Client, Firm, You").',
        mentalHook: 'The triad that governs every ethical and staffing trade-off.',
      },
      {
        id: 'mw-ch01-fc3',
        category: 'architecture',
        front: 'What does MECE stand for and what are its numerical bounds for top-line issues?',
        back: 'Mutually Exclusive, Collectively Exhaustive; top-line issue lists must contain 2 to 5 items (with 3 being ideal).',
        mentalHook: 'No overlaps, 100% coverage, 3 buckets on Slide 1.',
      },
      {
        id: 'mw-ch01-fc4',
        category: 'data',
        front: 'How long should an analyst spend researching industry trade publications before generating an Initial Hypothesis?',
        back: 'Roughly one to two hours of digesting trade publications, supplemented by picking the brains of internal firm experts.',
        mentalHook: 'Two hours of trade journals builds the Smith Street roadmap.',
      },
      {
        id: 'mw-ch01-fc5',
        category: 'architecture',
        front: 'What is an Issue Tree in the context of the Initial Hypothesis?',
        back: 'A hierarchical diagram obtained by drilling down one level deeper from each top-line recommendation into the specific operational sub-options that must be tested.',
        mentalHook: 'Recommendation at the trunk -> Operational sub-options at the branches.',
      },
      {
        id: 'mw-ch01-fc6',
        category: 'evaluation',
        front: 'How does a team "kick the tires" on an Initial Hypothesis?',
        back: 'A small team of 3–4 people led by an Engagement Manager probes the draft Issue Tree with "What if we change this?" counterfactuals to prune weak branches before field research.',
        mentalHook: 'Stress-test the map in the room before driving into the field.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mw-ch01-feyn1',
        conceptTitle: 'Empirical Fact Bricks & MECE Top-Line Structuring',
        prompt:
          'Explain why a 27-year-old generalist consultant needs both empirical facts and a MECE Issue Tree before walking into a Fortune 50 CEO’s office, using the Stop & Shop and Acme Widgets examples.',
        rubricChecklist: [
          'Contrasts the 10-year Stop & Shop perishable-foods veteran (who has valid domain gut instinct) with the generalist consultant (who must use facts as a substitute for intuition).',
          'Explains how empirical facts bridge the credibility gap between a 27-year-old MBA and a seasoned Fortune 50 CEO.',
          'Defines MECE (Mutually Exclusive, Collectively Exhaustive) and bounds top-line issues to 2–5 items (ideally 3).',
          'Shows why "Reengineering the production process" at Acme Widgets violates mutual exclusivity when placed alongside Retail Sales, Marketing, and Unit Cost.',
        ],
        modelExplanation:
          'A 10-year veteran in Stop & Shop’s perishable foods department can rely on gut instinct because decades of daily feedback have calibrated that intuition. A 27-year-old generalist consultant has neither that domain intuition nor executive gray hair, so empirical facts must substitute for gut feel and bridge the credibility gap with a Fortune 50 CEO. To organize those facts without overlap, the consultant structures the problem into 2 to 5 MECE top-line drivers—such as Retail Sales, Consumer Marketing, and Unit Cost at Acme Widgets—while pushing sub-levers like production reengineering underneath Unit Cost and Marketing Quality.',
      },
      {
        id: 'mw-ch01-feyn2',
        conceptTitle: 'Day-One Initial Hypothesis Generation & Tire-Kicking',
        prompt:
          'Walk through how a team solves a problem at the very first meeting by generating and tire-kicking an Initial Hypothesis (IH) instead of waiting until the end of the study.',
        rubricChecklist: [
          'Uses the Smith Street roadmap analogy to explain why launching field research without an Initial Hypothesis wastes time on dead ends.',
          'Describes the 1–2 hour trade publication scan and internal expert poll used to seed the Initial Hypothesis.',
          'Emphasizes the actionability rule (filtering out "pray for good weather" in favor of "reduce vulnerability to weather") and drilling down into an Issue Tree (e.g., reorganizing sales by Superstores, Department Stores, Specialty Stores).',
          'Explains the 3–4 person "kick the tires" session where the team leader probes assumptions before field work starts.',
        ],
        modelExplanation:
          'Starting an engagement without an Initial Hypothesis is like driving to an unfamiliar restaurant off Smith Street without a map. Instead, a team spends one to two hours scanning industry trade publications and polling internal experts to identify key drivers on Day 1. They filter every driver for actionability—discarding "pray for good weather" in favor of "reduce weather vulnerability"—and drill down into an Issue Tree, such as testing whether Acme Widgets should reorganize its sales force from geographic territories into Superstore, Department Store, and Specialty Store teams. Finally, the 3–4 person team kicks the tires by aggressively probing each branch so only plausible hypotheses govern field data collection.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mw-ch01-n1',
        label: 'Fact-Based Credibility Bridge',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition: 'Empirical facts replace missing domain intuition and give junior generalists authority with senior executives.',
        whyItMatters: 'Bridges the seniority gap between a 27-year-old associate and a Fortune 50 CEO.',
      },
      {
        id: 'mw-ch01-n2',
        label: 'MECE Structuring Principle',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'Mutually Exclusive and Collectively Exhaustive partitioning of business problems into 2–5 top-line categories.',
        formulaOrRule: '2 <= Top-Line Issues <= 5 (Optimal = 3)',
        whyItMatters: 'Prevents duplicate workstreams and guarantees 100% problem coverage.',
      },
      {
        id: 'mw-ch01-n3',
        label: 'Initial Hypothesis (IH)',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition: 'Day-1 problem-solving roadmap drafted after rapid trade-press immersion and internal expert consultation.',
        whyItMatters: 'Prevents teams from driving blind down analytical dead ends.',
      },
      {
        id: 'mw-ch01-n4',
        label: 'Actionable Issue Tree',
        category: 'architecture',
        chapterNumber: 1,
        importance: 2,
        definition: 'Hierarchical drill-down translating controllable key drivers into concrete operational sub-hypotheses.',
        whyItMatters: 'Converts high-level goals into testable buyer-segment or cost levers.',
      },
      {
        id: 'mw-ch01-n5',
        label: 'Sub-Issue Overlap Trap',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 3,
        definition: 'Placing cross-cutting sub-processes like production reengineering on the same tier as top-line strategic levers.',
        whyItMatters: 'Causes sub-teams to collide and confuses executive decision-makers.',
      },
      {
        id: 'mw-ch01-n6',
        label: 'Tire-Kicking Stress Test',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition: 'Adversarial 3–4 person team review led by the Engagement Manager to prune weak branches before field research.',
        whyItMatters: 'Eliminates implausible branches before associates spend weeks collecting data.',
      },
    ],
    edges: [
      {
        source: 'mw-ch01-n1',
        target: 'mw-ch01-n3',
        relationship: 'prerequisite_for',
        explanation: '1–2 hours of trade facts seed the Day-1 Initial Hypothesis roadmap.',
      },
      {
        source: 'mw-ch01-n2',
        target: 'mw-ch01-n4',
        relationship: 'optimizes',
        explanation: 'Enforces 2–5 non-overlapping top-line branches in the Issue Tree.',
      },
      {
        source: 'mw-ch01-n2',
        target: 'mw-ch01-n5',
        relationship: 'mitigates',
        explanation: 'MECE screening catches and demotes overlapping sub-processes like production reengineering.',
      },
      {
        source: 'mw-ch01-n4',
        target: 'mw-ch01-n3',
        relationship: 'part_of',
        explanation: 'The Issue Tree operationalizes the Initial Hypothesis into testable branches.',
      },
      {
        source: 'mw-ch01-n6',
        target: 'mw-ch01-n4',
        relationship: 'evaluates',
        explanation: 'Prunes implausible branches via counterfactual probing before field execution.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: '100% coverage of Introduction and Chapter 1 (Facts, MECE, Initial Hypothesis, Acme Widgets, Stop & Shop).',
  },
};

export const mwCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Part I (Rules to Live By): Tailor-Made Approaches, 80/20 Leverage, and Analytical Discipline',
  subtitle: 'Diagnosing the real problem, sizing solutions to political bandwidth, isolating 80/20 key drivers, and passing the 30-second Elevator Test.',
  readingTimeMinutes: 9,
  sourceWordCount: 11194,
  executiveThesis:
    'Mastery of strategic problem solving requires pairing tailor-made diagnostic judgment with ruthless analytical leverage. Teams must verify whether the client’s stated problem is merely a symptom, adapt standard frameworks like "Forces at Work" to unique client realities without forcing facts to fit a predetermined "leakage" theory, and size recommendations to the client’s political bandwidth—while applying the 80/20 rule, isolating key drivers to beat the Square Law of Computation, passing the 30-second Elevator Test, and hitting consistent singles.',
  paradigmShift: {
    oldWay:
      'Accepting the client’s initial problem statement at face value, stamping out cookie-cutter framework answers, boiling the ocean until 11 p.m., and hoarding insights for a grand finale.',
    newWay:
      'Diagnosing the root problem before prescribing, tailoring standard frameworks to the client’s implementation capacity, focusing on the 20% key drivers, and plucking low-hanging fruit early.',
    whyItChanged:
      'According to the Square Law of Computation, doubling problem complexity quadruples solution time; only 80/20 driver selection, daily chart synthesis, and honest scoping prevent analytical paralysis.',
  },
  mentalModels: [
    {
      id: 'mw-ch02-mm1',
      name: 'The Diagnostic Reframe & Political Fit Filter',
      tagline: 'Verify that the stated problem is the real disease, and never prescribe a $170M cure to a client fighting $1B battles.',
      naiveIntuition:
        'When a division head asks how to expand a manufacturing business or evaluate a $170M satellite-to-phone-line switch, the consultant immediately optimizes that exact request.',
      firstPrinciplesReality:
        'Like a patient asking a doctor for stronger painkillers when the underlying cause is a ruptured appendix, clients frequently misdiagnose their own problems; furthermore, even a positive-$170M net-present-value telecom switch must be rejected if the bank lacks the finite political energy to execute it alongside $500M–$1B priorities.',
      howToApply:
        'Spend the opening days auditing whether the client’s stated problem is the true root cause, and screen every proposed solution against the organization’s real-world execution capacity and political bandwidth.',
    },
    {
      id: 'mw-ch02-mm2',
      name: 'The Square Law of Computation vs. Key Drivers (80/20)',
      tagline: 'Doubling variables quadruples compute effort; isolate the three key drivers that account for 80% of the outcome.',
      naiveIntuition:
        'Analyzing all 100 factors affecting widget sales—or pulling together every possible competitor chart until midnight—demonstrates superior thoroughness.',
      firstPrinciplesReality:
        'Gerald Weinberg’s Square Law of Computation proves that problem-solving effort grows at least as fast as the square of the number of equations; because 80% of institutional brokerage sales come from 20% of brokers and 5% of FX products generate 50% of back-office costs, analyzing the long tail is "boiling the ocean" for a handful of salt.',
      howToApply:
        'Run an 80/20 Pareto cut on day one to isolate the 3 key drivers, stop data collection the moment marginal returns flatten, and crystallize the 3 most important daily learnings into a single chart each evening.',
    },
    {
      id: 'mw-ch02-mm3',
      name: 'The Epistemic Honesty Dyad ("Just Say I Don’t Know" / "Never Accept I Have No Idea")',
      tagline: 'Never bluff a colleague when you lack the facts, and never let an interviewee hide behind "I have no idea."',
      naiveIntuition:
        'Bluffing with polished MBA generalities in a partner review protects your reputation, while accepting an employee’s "I have no idea" saves interview time.',
      firstPrinciplesReality:
        'Bluffing when exhausted or uninformed destroys trust instantly—whereas saying "I don’t know" preserves professional integrity; conversely, when others say "I have no idea," they are using code for being busy, intimidated, or lazy, which can be chiseled away via pointed estimation questions to reconstruct a competitor’s P&L within a factor of two.',
      howToApply:
        'Admit knowledge gaps immediately inside the team, and when stakeholders claim they have no idea, decompose the question into estimable components (circulation, cost per issue, ad pages) to build a directionally accurate model.',
    },
  ],
  customDiagrams: [
    {
      id: 'mw-ch02-svg-1',
      title: 'The Tailor-Made Approach Filter: Diagnosis, Fact Integrity & Client Fit',
      subtitle: 'Four diagnostic gates that prevent cookie-cutter errors, forced leakage theories, and political misfires.',
      bierutCaption:
        'Before locking a strategy, every engagement passes through four diagnostic gates that prevent cookie-cutter pricing errors, forced "leakage" theories, and politically unviable prescriptions.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="90" x2="800" y2="90" />
    <line x1="0" y1="210" x2="800" y2="210" />
    <line x1="0" y1="330" x2="800" y2="330" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 2.1 — DEVELOPING AN APPROACH: THE FOUR DIAGNOSTIC FILTERS</text>
  <rect x="25" y="65" width="172" height="295" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="38" y="92" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="bold">GATE 1: TRUE PROBLEM</text>
  <rect x="38" y="110" width="146" height="105" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="48" y="130" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Medical Diagnosis</text>
  <text x="48" y="148" fill="#94a3b8" font-family="monospace" font-size="9">Client asks: "How do</text>
  <text x="48" y="162" fill="#94a3b8" font-family="monospace" font-size="9">we expand Division X?"</text>
  <text x="48" y="182" fill="#38bdf8" font-family="monospace" font-size="9">Facts show: Close or</text>
  <text x="48" y="196" fill="#38bdf8" font-family="monospace" font-size="9">sell off Division X.</text>
  <text x="38" y="245" fill="#cbd5e1" font-family="sans-serif" font-size="10">Verify the disease</text>
  <text x="38" y="260" fill="#cbd5e1" font-family="sans-serif" font-size="10">before prescribing.</text>
  <path d="M 197 212 L 218 212" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" fill="none" />
  <rect x="218" y="65" width="172" height="295" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="231" y="92" fill="#10b981" font-family="monospace" font-size="10.5" font-weight="bold">GATE 2: NO COOKIE-CUTTER</text>
  <rect x="231" y="110" width="146" height="105" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="241" y="130" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Forces at Work + Custom</text>
  <text x="241" y="148" fill="#94a3b8" font-family="monospace" font-size="9">8/10 pricing studies</text>
  <text x="241" y="162" fill="#94a3b8" font-family="monospace" font-size="9">say "Raise Prices."</text>
  <text x="241" y="182" fill="#10b981" font-family="monospace" font-size="9">In 2/10 cases, raising</text>
  <text x="241" y="196" fill="#10b981" font-family="monospace" font-size="9">prices kills volume.</text>
  <text x="231" y="245" fill="#cbd5e1" font-family="sans-serif" font-size="10">"Trust and verify"</text>
  <text x="231" y="260" fill="#cbd5e1" font-family="sans-serif" font-size="10">standard toolkits.</text>
  <path d="M 390 212 L 411 212" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" fill="none" />
  <rect x="411" y="65" width="172" height="295" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="424" y="92" fill="#f43f5e" font-family="monospace" font-size="10.5" font-weight="bold">GATE 3: FACT SUPREMACY</text>
  <rect x="424" y="110" width="146" height="105" rx="6" fill="#311024" stroke="#f43f5e" />
  <text x="434" y="130" fill="#fda4af" font-family="sans-serif" font-size="10.5" font-weight="bold">Reject Forced "Leakage"</text>
  <text x="434" y="148" fill="#cbd5e1" font-family="monospace" font-size="9">EM Nick hunts claims</text>
  <text x="434" y="162" fill="#cbd5e1" font-family="monospace" font-size="9">leakage across Fire,</text>
  <text x="434" y="176" fill="#cbd5e1" font-family="monospace" font-size="9">Auto, Marine, Business.</text>
  <text x="434" y="196" fill="#fda4af" font-family="monospace" font-size="9">Zero leakage found!</text>
  <text x="424" y="245" fill="#cbd5e1" font-family="sans-serif" font-size="10">Let FX data reveal</text>
  <text x="424" y="260" fill="#cbd5e1" font-family="sans-serif" font-size="10">5% products = 50% cost.</text>
  <path d="M 583 212 L 604 212" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" fill="none" />
  <rect x="604" y="65" width="172" height="295" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="617" y="92" fill="#f59e0b" font-family="monospace" font-size="10.5" font-weight="bold">GATE 4: CLIENT FIT</text>
  <rect x="617" y="110" width="146" height="105" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="627" y="130" fill="#f59e0b" font-family="sans-serif" font-size="10.5" font-weight="bold">Political Energy Cap</text>
  <text x="627" y="148" fill="#cbd5e1" font-family="monospace" font-size="9">Phone vs Satellite:</text>
  <text x="627" y="162" fill="#cbd5e1" font-family="monospace" font-size="9">+$170M PV, but bank</text>
  <text x="627" y="176" fill="#cbd5e1" font-family="monospace" font-size="9">has $500M–$1B projects.</text>
  <text x="627" y="196" fill="#10b981" font-family="monospace" font-size="9">Recommend: DO NOT DO</text>
  <text x="617" y="245" fill="#cbd5e1" font-family="sans-serif" font-size="10">Size solutions to</text>
  <text x="617" y="260" fill="#cbd5e1" font-family="sans-serif" font-size="10">client capabilities.</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'The Symptom vs. Disease Audit',
          explanation:
            'An investment bank asking to "increase profitability" or a manufacturer asking to "expand a division" often masks a deeper structural decision to restructure or divest.',
        },
        {
          step: '02',
          label: 'The Insurance Leakage Trap',
          explanation:
            'When empirical audits across fire, auto, marine, and business insurance show zero claims leakage, the team must abandon its Initial Hypothesis rather than torturing the data.',
        },
        {
          step: '03',
          label: 'The $170M Satellite Trade-Off',
          explanation:
            'A positive-$170M present-value telecom migration is still the wrong recommendation if the bank only has enough management and political energy for its $500M–$1B core initiatives.',
        },
      ],
    },
    {
      id: 'mw-ch02-svg-2',
      title: '80/20 Leverage & The Square Law of Computation vs. Boiling the Ocean',
      subtitle: 'Defeating quadratic complexity scaling through Pareto concentration and the 30-second Elevator Test.',
      bierutCaption:
        'Because computational effort scales with the square of problem complexity, isolating the 20% key drivers captures 80% of value while avoiding the 11 p.m. diminishing-returns trap.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="80" x2="800" y2="80" />
    <line x1="0" y1="220" x2="800" y2="220" />
    <line x1="0" y1="350" x2="800" y2="350" />
    <line x1="410" y1="0" x2="410" y2="420" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 2.2 — 80/20 PARETO LEVERAGE &amp; THE SQUARE LAW OF COMPUTATION</text>
  <rect x="25" y="55" width="365" height="335" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="42" y="82" fill="#10b981" font-family="sans-serif" font-size="12" font-weight="bold">80/20 KEY DRIVER CONCENTRATION</text>
  <rect x="45" y="105" width="70" height="190" rx="4" fill="#10b981" />
  <text x="80" y="200" fill="#0f172a" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">80%</text>
  <text x="80" y="218" fill="#0f172a" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Sales &amp;</text>
  <text x="80" y="232" fill="#0f172a" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Profits</text>
  <text x="80" y="315" fill="#10b981" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">20% Drivers</text>
  <rect x="135" y="245" width="230" height="50" rx="4" fill="#334155" stroke="#64748b" />
  <text x="250" y="275" fill="#cbd5e1" font-family="monospace" font-size="10.5" text-anchor="middle">20% Impact (80% Noise / Long Tail)</text>
  <text x="250" y="315" fill="#94a3b8" font-family="monospace" font-size="10" text-anchor="middle">80% Secondary Factors ("The Ocean")</text>
  <rect x="135" y="105" width="230" height="122" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="147" y="126" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">NY Equity Brokerage Case:</text>
  <text x="147" y="144" fill="#e2e8f0" font-family="monospace" font-size="9.5">• 20% brokers = 80% sales</text>
  <text x="147" y="160" fill="#e2e8f0" font-family="monospace" font-size="9.5">• 20% clients = 80% orders</text>
  <text x="147" y="176" fill="#e2e8f0" font-family="monospace" font-size="9.5">• 20% traders = 80% profit</text>
  <text x="147" y="196" fill="#10b981" font-family="monospace" font-size="9.5">FIX: Pair Senior/Junior</text>
  <text x="147" y="210" fill="#10b981" font-family="monospace" font-size="9.5">brokers on top 10 accounts</text>
  <text x="45" y="368" fill="#cbd5e1" font-family="monospace" font-size="10">Pluck Low-Hanging Fruit early to win buy-in</text>
  <rect x="425" y="55" width="350" height="335" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="442" y="82" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">SQUARE LAW OF COMPUTATION (T ∝ N²)</text>
  <rect x="442" y="102" width="315" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="455" y="124" fill="#f59e0b" font-family="monospace" font-size="10.5" font-weight="bold">Weinberg Complexity Scaling:</text>
  <text x="455" y="142" fill="#e2e8f0" font-family="sans-serif" font-size="10.5">2× Variables → 4× Computation Time</text>
  <text x="455" y="160" fill="#94a3b8" font-family="monospace" font-size="9.5">Stop at 11 p.m. when marginal return drops;</text>
  <text x="455" y="175" fill="#94a3b8" font-family="monospace" font-size="9.5">focus only on top 3 Key Drivers (X, Y, Z).</text>
  <rect x="442" y="206" width="315" height="82" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="455" y="226" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="bold">30-Second Elevator Test:</text>
  <text x="455" y="244" fill="#e2e8f0" font-family="sans-serif" font-size="10">State Top 3 Recommendations + Payoff:</text>
  <text x="455" y="262" fill="#10b981" font-family="monospace" font-size="9.5">"Boost widget sales +50% in 3 yrs by</text>
  <text x="455" y="276" fill="#10b981" font-family="monospace" font-size="9.5">reorganizing sales by buyer category."</text>
  <rect x="442" y="300" width="315" height="72" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="455" y="320" fill="#10b981" font-family="monospace" font-size="10.5" font-weight="bold">Daily Habits of Reliability:</text>
  <text x="455" y="338" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Make 1 Chart Every Day (3 learnings)</text>
  <text x="455" y="354" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Hit Singles (avoid 9/10 HR strikeouts)</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'The NY Brokerage 80/20 Discovery',
          explanation:
            'Data revealed that 20% of brokers generated 80% of sales and 20% of customers drove 80% of orders; pairing junior brokers on top-10 accounts expanded firm-wide commissions.',
        },
        {
          step: '02',
          label: 'Weinberg’s Square Law',
          explanation:
            'Because doubling the number of analyzed variables quadruples solution time, ignoring the 97 minor factors to focus on the 3 Key Drivers prevents boiling the ocean.',
        },
        {
          step: '03',
          label: 'The 30-Second Elevator Pitch',
          explanation:
            'Whether selling a 6-month study to a rushing CEO or selling ad space at Field & Stream, encapsulate the top three recommendations and their quantified payoff in 30 seconds.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'mw-ch02-sec-1',
      sectionNumber: '2.1',
      title: 'Diagnosing the Real Problem & Customizing Frameworks to the Client',
      subtitle: 'Why Standard Toolkits Require Empirical Verification and Political Sizing',
      coreMechanism:
        'Clients routinely misdiagnose their own ailments: a manufacturer asking how to expand a division may actually need to close or sell it off, just as a New York investment bank asking to "increase profitability" requires a deep diagnostic to pinpoint which specific units are bleeding capital. To accelerate diagnosis without reinventing the wheel, McKinsey deploys proven frameworks such as "Forces at Work" (suppliers, customers, competitors, substitutes, plus internal changes) and Business Process Redesign (applied to a 600-person Wall Street IT department). Yet standard frameworks must never become cookie-cutter answers. As Jason Klein noted, 8 out of 10 pricing studies conclude "raise prices," but blindly applying that rule destroys the 2 out of 10 clients whose demand elasticity requires lowering prices. Even more critically, the solution must fit the client’s political bandwidth: a team rejected a $170 million present-value switch from satellite links to phone lines because the bank had finite political energy and $500 million to $1 billion priorities.',
      keyTakeaways: [
        'Treat the client’s initial request as a symptom and audit the facts before accepting their definition of the problem.',
        'Use standard frameworks like Forces at Work to structure inquiry quickly, but "trust and verify" every instinct against client-specific data.',
        'Size every recommendation to the client’s organizational and political capacity, dropping positive-NPV projects that crowd out larger priorities.',
      ],
      commonPitfalls: [
        'Executing a six-month expansion study for a division whose underlying unit economics dictate immediate divestiture.',
        'Prescribing a cookie-cutter price increase without measuring the specific customer price elasticity of the client in front of you.',
        'Recommending a technically profitable project that the client lacks the management bandwidth or political capital to implement.',
      ],
    },
    {
      id: 'mw-ch02-sec-2',
      sectionNumber: '2.2',
      title: 'Fact Supremacy over Forced Hypotheses & Navigating Organizational Politics',
      subtitle: 'Abandoning Dead-End "Leakage" Theories and Solving Around Political Trolls',
      coreMechanism:
        'The gravest misuse of the Initial Hypothesis occurs when a team leader tries to force the facts to fit a predetermined conclusion. When an Engagement Manager named Nick insisted that an insurer’s profit slump was caused by claims "leakage" (overpaying fraudulent or inflated claims), the team audited fire, auto, marine, and business insurance files and found zero leakage; refusing to abandon a dead hypothesis wastes weeks and destroys morale. Conversely, when Hamish McDermott’s team lacked an upfront answer for a bank’s 30% back-office cost-cutting mandate, they let the data speak—discovering that 5% of foreign-exchange products generated 50% of processing costs. When the obstacle is not data but entrenched political resistance ("sometimes change management means changing management"), consultants have three pragmatic moves: redefine the problem early before investing months, tweak the organization incrementally over time, or redesign incentives to work through the political factions.',
      keyTakeaways: [
        'Abandon your Initial Hypothesis immediately when empirical audits across multiple business lines disconfirm your theory.',
        'When an upfront hypothesis is unavailable, gather granular transaction data and let extreme cost or revenue concentrations reveal the solution.',
        'Overcome entrenched political blockers by redefining the scope early, phasing incremental tweaks, or aligning stakeholder incentives.',
      ],
      commonPitfalls: [
        'Sending analysts back to re-audit clean insurance divisions four times because the manager refuses to give up a pet "leakage" theory.',
        'Assuming that purely analytical elegance will triumph over a division head whose personal empire is threatened by the recommendation.',
        'Waiting until the final week of a study to confront a political roadblock that was visible in week one.',
      ],
    },
    {
      id: 'mw-ch02-sec-3',
      sectionNumber: '2.3',
      title: '80/20 Leverage, Key Drivers, the Elevator Test, and Epistemic Honesty',
      subtitle: 'Defeating the Square Law of Computation and Hitting Daily Singles',
      coreMechanism:
        'At a New York institutional equity brokerage, 80% of sales came from 20% of brokers, 80% of orders from 20% of customers, and 80% of profit from 20% of traders; pairing senior and junior brokers on the top 10 accounts expanded commissions for all, and presenting those findings early plucked the "low-hanging fruit." Focusing on "key drivers" is mandatory under Gerald Weinberg’s Square Law of Computation (doubling complexity quadruples solution time), which is why Engagement Manager Vik stopped Ethan at 11 p.m. from pulling more competitor charts ("Don’t boil the ocean"). Six habits complete this analytical discipline: pass the 30-second **Elevator Test** by stating the top three recommendations and their payoff (like boosting widget sales 50% in three years or pitching *Field & Stream*); **Make a Chart Every Day** (30 minutes locking down 3 daily learnings); **Hit Singles** consistently rather than striking out 9/10 times swinging for solo home runs; **Look at the Big Picture**; **Just Say "I Don’t Know"** instead of bluffing a partner; and **Never Accept "I Have No Idea"**—chisel away with component estimates to reconstruct a competitor’s P&L within a factor of two.',
      keyTakeaways: [
        'Isolate the 20% Pareto levers and 3 Key Drivers to beat the Square Law of Computation, plucking low-hanging fruit mid-study.',
        'Pass the 30-second Elevator Test by stating top recommendations and payoffs, make one chart every evening, and hit consistent singles.',
        'Never bluff when you lack an answer ("Just say I don’t know"), and never accept "I have no idea" when component estimation can bound a competitor’s P&L.',
      ],
      commonPitfalls: [
        'Staying until 2 a.m. boiling the ocean on minor competitor charts or hoarding insights until the final six-month readout.',
        'Using a 30-second elevator ride with the CEO to recite methodology instead of the top three recommendations and quantified payoff.',
        'Faking an answer during a partner review when exhausted, or walking away empty-handed when a manager claims "I have no idea."',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Analytical Execution Posture: Boiling the Ocean vs. Solo Home-Run Swinging vs. 80/20 Key-Driver Discipline',
      description:
        'Comparing how analysts allocate effort, communicate interim wins, and handle uncertainty across a six-month engagement.',
      headers: ['Dimension', 'Boiling the Ocean (Exhaustive Dragnet)', 'Solo Home-Run Swinger', '80/20 Key-Driver Discipline (McKinsey Way)'],
      rows: [
        [
          'Complexity Scaling (Square Law)',
          'Models 50+ variables; compute effort explodes quadratically (N²)',
          'Over-commits to one flashy pet theory',
          'Isolates 3 Key Drivers and top 20% Pareto levers; stops at 11 p.m.',
        ],
        [
          'Interim Client Value',
          'Zero until month 6; hoards data for the final blue book',
          'Unpredictable; strikes out 9 times out of 10',
          'Plucks low-hanging fruit mid-study and hits reliable daily singles',
        ],
        [
          'Executive Synthesis (30 Seconds)',
          'Fails Elevator Test; recites 40 pages of methodology',
          'Pitches unverified grandiose claims',
          'Passes 30-second Elevator Test: states top 3 actions + 50% sales payoff',
        ],
        [
          'Response to Missing Data',
          'Stalls when told "I have no idea"',
          'Bluffs during partner reviews ("horsefeathers")',
          'Says "I don’t know" honestly, then chisels out a 2× P&L estimate',
        ],
      ],
      verdictRule:
        'Focus strictly on the 20% key drivers, crystallize three learnings into one chart every evening, pluck low-hanging fruit early, and pair honest "I don’t know" admissions with relentless back-of-the-envelope estimation.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mw-ch02-scen-1',
      title: 'Unlocking Institutional Brokerage Commissions via 80/20 Account Pairing & Low-Hanging Fruit',
      roleAndContext: 'New York Institutional Equity Brokerage — Sales & Trading Division',
      symptomOrFailure:
        'Senior leadership believes the entire institutional equities division is suffering from uniform market stagnation, while department heads resent outside consultants poking around their trading desks.',
      naiveFixAndWhyItFails:
        'Waiting six months to build a 300-page industry study covering every small account and minor trading desk, leaving senior managers hostile and unconvinced until the end of the engagement.',
      firstPrinciplesSolution:
        'Run an immediate 80/20 Pareto cut on sales and trading records—revealing that 20% of brokers generate 80% of sales, 20% of customers drive 80% of orders, and top brokers are too swamped to fully work even their top 10 accounts. Pluck the low-hanging fruit by presenting this data immediately to division heads and pairing senior brokers with junior brokers on top-10 accounts.',
      measurableOutcome:
        'Senior brokers earn higher total commissions despite splitting fees on top accounts, division-wide equity revenue expands, and hostile department heads become enthusiastic champions of the engagement.',
    },
    {
      id: 'mw-ch02-scen-2',
      title: 'Reconstructing a Competitor’s P&L by Refusing to Accept "I Have No Idea"',
      roleAndContext: 'Media & Publishing Business Unit (Jason Klein) — Board Funding Proposal',
      symptomOrFailure:
        'A business unit president knows his top publishing competitor is outspending his division by a factor of 10 and needs a competitor P&L to win board funding, but his staff replies, "We have no idea what the competitor spends."',
      naiveFixAndWhyItFails:
        'Accepting the team’s "I have no idea" excuse and walking into the boardroom with an unquantified plea for more budget, which the board summarily rejects.',
      firstPrinciplesSolution:
        'Refuse to accept "I have no idea" and chisel away at the problem with pointed component questions: estimate competitor advertising spend from visible placements, and estimate production costs by multiplying estimated cost-per-issue by audited circulation.',
      measurableOutcome:
        'Produces a comprehensive competitor P&L backed by explicit operational assumptions—accurate within a factor of two—which proves the 10× spending gap and secures board approval for the new business unit.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mw-ch02-q1',
        scenarioPrompt:
          'Why did a McKinsey team recommend AGAINST switching a major bank’s branch network from satellite links to phone lines, even though the switch had a positive present value of $170 million?',
        options: [
          {
            label: 'A',
            text: 'Because satellite links had superior encryption for international wire transfers.',
            isCorrect: false,
            explanation: 'Technical encryption was not the constraint; political and execution bandwidth was.',
          },
          {
            label: 'B',
            text: 'Because the bank had finite political and management energy and was already tackling $500 million to $1 billion priorities.',
            isCorrect: true,
            explanation: '"Make sure your solution fits your client": organizations have finite political and execution energy, so a $170M project must be set aside when the client has multiple $500M–$1B priorities.',
          },
          {
            label: 'C',
            text: 'Because the team’s Engagement Manager wanted to prove there was claims leakage instead.',
            isCorrect: false,
            explanation: 'Claims leakage was a separate insurance study.',
          },
          {
            label: 'D',
            text: 'Because $170 million violated the 80/20 Pareto threshold.',
            isCorrect: false,
            explanation: 'The decision rested on organizational implementation capacity.',
          },
        ],
      },
      {
        id: 'mw-ch02-q2',
        scenarioPrompt:
          'How does Gerald Weinberg’s "Square Law of Computation" justify focusing exclusively on a problem’s Key Drivers?',
        options: [
          {
            label: 'A',
            text: 'It proves that two analysts working together produce four times as many charts as one analyst.',
            isCorrect: false,
            explanation: 'The Square Law governs problem complexity scaling, not team size.',
          },
          {
            label: 'B',
            text: 'It states that computation time increases at least as fast as the square of the number of equations—so doubling problem complexity quadruples solution time unless you simplify to key drivers.',
            isCorrect: true,
            explanation: 'Because effort scales quadratically with the number of components, trying to analyze all 100 factors ("boiling the ocean") causes analytical gridlock; isolating the 3 key drivers keeps the problem solvable.',
          },
          {
            label: 'C',
            text: 'It demonstrates that 80% of equations contain 20% of the arithmetic errors.',
            isCorrect: false,
            explanation: 'Weinberg’s law describes computational complexity scaling across system components.',
          },
          {
            label: 'D',
            text: 'It requires every presentation to have a square number of slides.',
            isCorrect: false,
            explanation: 'It is a systems-engineering law of computational effort.',
          },
        ],
      },
      {
        id: 'mw-ch02-q3',
        scenarioPrompt:
          'What is the core structure of a successful 30-second "Elevator Test" pitch to a CEO?',
        options: [
          {
            label: 'A',
            text: 'Recite the data sources, regression R-squared values, and interview sample sizes.',
            isCorrect: false,
            explanation: 'Supporting data should be saved for later when you have more time.',
          },
          {
            label: 'B',
            text: 'State the issues addressed, stick to the three most important recommendations with the biggest payoffs, and save supporting data for later.',
            isCorrect: true,
            explanation: 'In 30 seconds, the executive needs to hear the top recommendations (capped at the three highest-payoff moves) and the quantified payoff.',
          },
          {
            label: 'C',
            text: 'Show the CEO your daily hand-drawn charts from the past three weeks.',
            isCorrect: false,
            explanation: 'Daily charts are for personal synthesis, not a 30-second elevator ride.',
          },
          {
            label: 'D',
            text: 'Ask the CEO three open-ended questions about the company’s history.',
            isCorrect: false,
            explanation: 'The Elevator Test requires selling your solution in 30 seconds.',
          },
        ],
      },
      {
        id: 'mw-ch02-q4',
        scenarioPrompt:
          'Why did an alumni CEO advise McKinsey associates to "hit singles" rather than trying to "knock the ball out of the park"?',
        options: [
          {
            label: 'A',
            text: 'Because clients prefer small 1% cost reductions over 50% revenue breakthroughs.',
            isCorrect: false,
            explanation: 'Hitting singles refers to consistent personal reliability within the team, not shrinking client goals.',
          },
          {
            label: 'B',
            text: 'Because it is impossible to do everything yourself all the time, hitting a solo home run once raises unrealistic expectations, and failing once makes it very difficult to regain credibility.',
            isCorrect: true,
            explanation: 'Just like home-run kings who also have the largest strikeout zones, trying to be a one-person hero sets impossible expectations and leads to career-damaging strikeouts when you inevitably miss.',
          },
          {
            label: 'C',
            text: 'Because associates are billed by the hour rather than by project outcomes.',
            isCorrect: false,
            explanation: 'McKinsey does not bill associates by hourly timesheets to clients in that manner.',
          },
          {
            label: 'D',
            text: 'Because home runs violate the "Client, Firm, You" hierarchy.',
            isCorrect: false,
            explanation: 'The rule is grounded in team leverage and expectation management.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mw-ch02-fc1',
        category: 'architecture',
        front: 'What are the external and internal dimensions of McKinsey’s "Forces at Work" framework?',
        back: 'External: suppliers, customers, competitors, and substitute products; Internal: changes in operations, technology, and management.',
        mentalHook: 'Porter-style 4 external forces + internal operational shifts.',
      },
      {
        id: 'mw-ch02-fc2',
        category: 'data',
        front: 'What did Hamish McDermott’s back-office foreign-exchange study reveal when the team let the facts form the solution?',
        back: '5% of the bank’s foreign-exchange products accounted for 50% of its back-office processing costs, enabling a 30% cost reduction.',
        mentalHook: '5% of FX products = 50% of back-office cost.',
      },
      {
        id: 'mw-ch02-fc3',
        category: 'optimization',
        front: 'What does "Don’t boil the ocean" mean in daily analytical practice?',
        back: 'Do not try to analyze everything; be selective, focus on priorities, and stop collecting data once you have enough to prove the key drivers.',
        mentalHook: 'Don’t boil an ocean just to get a handful of salt.',
      },
      {
        id: 'mw-ch02-fc4',
        category: 'foundation',
        front: 'What is the "Make a Chart Every Day" rule?',
        back: 'Spend 30 minutes at the end of each day asking "What are the three most important things I learned today?" and crystallizing them into a rough chart or bulleted page.',
        mentalHook: '30 minutes at 6 p.m. = 3 key learnings locked on paper.',
      },
      {
        id: 'mw-ch02-fc5',
        category: 'evaluation',
        front: 'Why did Ethan’s Engagement Manager give him a desktop frame reading "Just say, \'I don’t know\'"?',
        back: 'Because after staying up until 4 a.m., Ethan fell half-asleep in a review meeting with the partner and bluffed with empty generalities instead of honestly admitting he didn’t know.',
        mentalHook: 'Honest ignorance costs nothing; bluffing costs your credibility.',
      },
      {
        id: 'mw-ch02-fc6',
        category: 'data',
        front: 'What does "I have no idea" actually mean when an interviewee or staff member says it, and how do you counter it?',
        back: 'It is code for "I’m too busy, intimidated, or lazy to think about this"; counter it by chiseling away with pointed component questions and educated estimates.',
        mentalHook: 'Chisel the marble block into an elephant via component estimation.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mw-ch02-feyn1',
        conceptTitle: 'Tailor-Made Diagnosis & Client Political Fit',
        prompt:
          'Explain the tension between "Don’t Reinvent the Wheel," "Every Client Is Unique," "Don’t Make the Facts Fit Your Solution," and "Make Sure Your Solution Fits Your Client," using concrete examples from Chapter 2.',
        rubricChecklist: [
          'Explains how standard frameworks like "Forces at Work" and Business Process Redesign prevent reinventing the wheel.',
          'Contrasts standard toolkits with Jason Klein’s pricing rule (8/10 times the answer is "raise prices," but applying that blindly to the other 2/10 destroys the client).',
          'Describes Nick’s failed hunt for insurance claims "leakage" across fire, auto, marine, and business lines as the archetype of forcing facts to fit a predetermined solution.',
          'Illustrates client fit using the rejected $170M satellite-to-phone-line switch at a bank that only had political energy for its $500M–$1B projects.',
        ],
        modelExplanation:
          'Standard frameworks like "Forces at Work" give a team an immediate starting structure so they don’t reinvent the wheel, but every hypothesis must still be verified against the unique client: as Jason Klein observed, raising prices works 8 out of 10 times yet fails disastrously in the remaining 2 cases. Furthermore, if the facts disconfirm your initial theory—like Nick’s fruitless search for claims "leakage" across four clean insurance divisions—you must drop the hypothesis rather than torturing the data. Finally, even a mathematically profitable recommendation like a $170M satellite-to-phone-line switch must be discarded if the client’s finite political energy is already consumed by $500M–$1B priorities.',
      },
      {
        id: 'mw-ch02-feyn2',
        conceptTitle: '80/20 Leverage & The Square Law of Computation',
        prompt:
          'Connect the 80/20 Rule, the Square Law of Computation, "Don’t Boil the Ocean," and "Pluck the Low-Hanging Fruit" into a unified system for managing analytical effort on a high-stakes project.',
        rubricChecklist: [
          'Defines the 80/20 Pareto rule using the NY institutional equity brokerage case (20% of brokers/customers/traders driving 80% of sales/orders/profits, solved by pairing senior and junior brokers on top-10 accounts).',
          'Explains Gerald Weinberg’s Square Law of Computation (doubling complexity quadruples compute time) as the mathematical reason to isolate 3 Key Drivers.',
          'Defines "Don’t boil the ocean" (stopping at 11 p.m. when marginal returns flatten rather than boiling an ocean for a handful of salt).',
          'Explains how sharing intermediate 80/20 breakthroughs ("plucking low-hanging fruit") wins over skeptical executives long before the final blue-book presentation.',
        ],
        modelExplanation:
          'Because Gerald Weinberg’s Square Law of Computation dictates that doubling the number of analyzed variables quadruples the time required to solve the system, attempting to analyze every minor factor—"boiling the ocean"—guarantees exhaustion for negligible return. Instead, teams apply the 80/20 rule to isolate the key drivers: at a New York equity brokerage, 20% of brokers and customers generated 80% of sales and orders. By presenting that diagnostic early rather than hoarding it for six months, the team plucked the low-hanging fruit—converting skeptical executives into allies and unlocking immediate revenue by pairing senior and junior brokers on the top 10 accounts.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mw-ch02-n1',
        label: 'Diagnostic Problem Reframe',
        category: 'foundation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Auditing whether the client’s stated problem is a surface symptom of a deeper structural issue.',
        whyItMatters: 'Prevents optimizing expansion for a division that actually needs divestiture.',
      },
      {
        id: 'mw-ch02-n2',
        label: 'Political Bandwidth Fit',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Screening positive-NPV recommendations against the client’s finite management energy and larger priorities.',
        whyItMatters: 'Avoids prescribing a $170M distraction to a bank fighting $1B battles.',
      },
      {
        id: 'mw-ch02-n3',
        label: 'Forced-Hypothesis Trap ("Leakage")',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 2,
        definition: 'Torturing clean empirical data to prove a predetermined pet theory instead of letting facts guide the solution.',
        whyItMatters: 'Wastes weeks auditing clean divisions when no claims leakage exists.',
      },
      {
        id: 'mw-ch02-n4',
        label: '80/20 Key-Driver Leverage',
        category: 'optimization',
        chapterNumber: 2,
        importance: 1,
        definition: 'Isolating the 20% Pareto drivers and 3 core variables to defeat Weinberg’s Square Law of Computation.',
        formulaOrRule: 'Compute Time ∝ N² (2× variables = 4× effort)',
        whyItMatters: 'Captures 80% of business impact without boiling the ocean.',
      },
      {
        id: 'mw-ch02-n5',
        label: '30-Second Elevator Test',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 2,
        definition: 'Encapsulating six months of analysis into the top 3 recommendations and their quantified payoff in 30 seconds.',
        whyItMatters: 'Proves you understand the solution well enough to sell it to a time-pressed CEO.',
      },
      {
        id: 'mw-ch02-n6',
        label: 'Epistemic Honesty & Estimation Dyad',
        category: 'data',
        chapterNumber: 2,
        importance: 2,
        definition: 'Saying "I don’t know" instead of bluffing, while chiseling away at "I have no idea" via component P&L estimation.',
        whyItMatters: 'Preserves internal trust while reconstructing missing competitor financials within 2×.',
      },
    ],
    edges: [
      {
        source: 'mw-ch02-n1',
        target: 'mw-ch02-n2',
        relationship: 'prerequisite_for',
        explanation: 'Matches root-cause prescription to client execution capacity.',
      },
      {
        source: 'mw-ch02-n4',
        target: 'mw-ch02-n3',
        relationship: 'mitigates',
        explanation: 'Letting 80/20 empirical concentrations speak prevents forcing a false leakage theory.',
      },
      {
        source: 'mw-ch02-n4',
        target: 'mw-ch02-n5',
        relationship: 'prerequisite_for',
        explanation: 'Distills top 3 payoff levers for the 30-second CEO pitch.',
      },
      {
        source: 'mw-ch02-n6',
        target: 'mw-ch02-n4',
        relationship: 'optimizes',
        explanation: 'Component estimation reconstructs missing competitor P&Ls rapidly.',
      },
      {
        source: 'mw-ch02-n4',
        target: 'mw-ch02-n2',
        relationship: 'optimizes',
        explanation: 'Plucking low-hanging fruit builds early executive buy-in.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 17,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapters 2 and 3 (7 approach rules + 10 rules to live by).',
  },
};
