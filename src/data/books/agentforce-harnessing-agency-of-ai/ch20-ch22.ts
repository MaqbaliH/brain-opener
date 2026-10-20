import type { ChapterMastery } from '../../../types/book';

export const afCh20Mastery: ChapterMastery = {
  chapterNumber: 20,
  chapterId: 'ch20',
  title: 'So What Are We Humans Going to Do Now?',
  subtitle: 'Task-Level Automation, Skill Compression, and the Hybrid Workforce Transition',
  readingTimeMinutes: 6,
  sourceWordCount: 1640,
  executiveThesis:
    'Autonomous AI agents decompose jobs at the task boundary rather than erasing whole occupations, automating roughly 25% to 50% of repetitive workflows across two-thirds of knowledge roles. Economic displacement accrues to organizations and workers that resist augmentation, while task reallocation expands output, compresses skill gaps for novice staff, and spawns entirely new occupational categories.',
  paradigmShift: {
    oldWay:
      'Evaluating technological disruption through lump-of-labor anxieties where every automated workflow directly subtracts a human headcount from a static pool of jobs.',
    newWay:
      'Decomposing roles into granular task portfolios where digital agents absorb the 41% of time spent on low-value routines and humans shift toward high-judgment orchestration.',
    whyItChanged:
      'Empirical labor studies from Goldman Sachs, McKinsey, and NBER demonstrate that partial task exposure complements human labor and raises Novice throughput by 34% rather than triggering mass unemployment.',
  },
  customDiagrams: [
    {
      id: 'af-ch20-diag1',
      title: 'Occupation vs. Task-Boundary Decomposition Funnel',
      subtitle: 'How 67% occupational exposure translates into hybrid augmentation rather than full job elimination',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#F8FAFC" rx="12" />
  <text x="32" y="38" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#111827">TASK-LEVEL AUTOMATION EXPOSURE &amp; REALLOCATION TOPOLOGY</text>
  <text x="32" y="58" font-family="JetBrains Mono, monospace" font-size="11" fill="#4B5563">Goldman Sachs 900-Occupation Decomposition + Slack Workforce Lab Time Audit</text>

  <!-- Left Node: Workday Task Pool -->
  <rect x="32" y="92" width="210" height="276" rx="8" fill="#111827" />
  <text x="50" y="122" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#F9FAFB">01. DESK WORKER DAY</text>
  <rect x="48" y="140" width="178" height="94" rx="6" fill="#DC2626" />
  <text x="60" y="166" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">41% Repetitive Drudgery</text>
  <text x="60" y="186" font-family="Inter, sans-serif" font-size="11" fill="#FEE2E2">Low-value data entry, status</text>
  <text x="60" y="202" font-family="Inter, sans-serif" font-size="11" fill="#FEE2E2">lookups &amp; routine triage</text>

  <rect x="48" y="248" width="178" height="102" rx="6" fill="#2563EB" />
  <text x="60" y="274" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">59% Core Judgment</text>
  <text x="60" y="294" font-family="Inter, sans-serif" font-size="11" fill="#DBEAFE">Complex negotiation, strategy,</text>
  <text x="60" y="310" font-family="Inter, sans-serif" font-size="11" fill="#DBEAFE">empathy &amp; system design</text>

  <!-- Center Node: Task-Boundary Partitioner -->
  <rect x="296" y="112" width="208" height="236" rx="8" fill="#FFFFFF" stroke="#EA580C" stroke-width="2.5" />
  <text x="314" y="140" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#EA580C">02. TASK PARTITION</text>
  <text x="314" y="164" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#111827">67% Occupations Exposed</text>
  <text x="314" y="184" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">25%-50% of tasks inside each</text>
  <text x="314" y="200" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">role transfer to AI agents</text>
  <line x1="314" y1="218" x2="486" y2="218" stroke="#E5E7EB" stroke-width="1.5" />
  <text x="314" y="242" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#DC2626">43% Management Gap</text>
  <text x="314" y="262" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Workers report zero formal</text>
  <text x="314" y="278" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">leadership AI guidance</text>
  <rect x="314" y="296" width="172" height="32" rx="4" fill="#FFF7ED" stroke="#EA580C" stroke-width="1" />
  <text x="326" y="316" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#9A3412">~25% Total Task Shift</text>

  <!-- Right Nodes: Output Reallocation -->
  <rect x="558" y="92" width="210" height="124" rx="8" fill="#059669" />
  <text x="576" y="120" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#ECFDF5">03A. AGENT EXECUTION</text>
  <text x="576" y="144" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">Autonomous Digital Labor</text>
  <text x="576" y="164" font-family="Inter, sans-serif" font-size="11" fill="#D1FAE5">Absorbs deterministic &amp; multi-step</text>
  <text x="576" y="180" font-family="Inter, sans-serif" font-size="11" fill="#D1FAE5">customer routines 24/7</text>

  <rect x="558" y="244" width="210" height="124" rx="8" fill="#111827" stroke="#059669" stroke-width="2" />
  <text x="576" y="272" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#34D399">03B. AUGMENTED HUMAN</text>
  <text x="576" y="296" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">3.4% Annual GDP Lift</text>
  <text x="576" y="316" font-family="Inter, sans-serif" font-size="11" fill="#D1FAE5">60% new job categories +</text>
  <text x="576" y="332" font-family="Inter, sans-serif" font-size="11" fill="#D1FAE5">higher-margin creative output</text>

  <!-- Connectors -->
  <path d="M 242 187 L 296 187" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 242 298 L 296 298" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 504 175 L 558 154" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 504 285 L 558 306" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
</svg>`,
      bierutCaption:
        'Task decomposition splits the 41% repetitive workday burden into autonomous agent execution while routing human hours into higher-margin occupational categories.',
      annotations: [
        {
          step: '01',
          label: 'The 41% Drudgery Tax',
          explanation:
            'Slack Workforce Lab data across 10,000 desk workers reveals that 41% of daily capacity is consumed by repetitive, low-value tasks.',
        },
        {
          step: '02',
          label: 'Partial Occupation Exposure',
          explanation:
            'Goldman Sachs found two-thirds of roles face 25% to 50% task automation, favoring workflow augmentation over role eradication.',
        },
        {
          step: '03',
          label: 'Promotional Job Expansion',
          explanation:
            'Just as 60% of modern workers hold jobs unknown in 1940, agentic productivity unlocks capital for new human roles.',
        },
      ],
    },
    {
      id: 'af-ch20-diag2',
      title: 'The Novice-to-Expert Skill Compression Curve',
      subtitle: 'Why agentic assistance disproportionately accelerates entry-level and lower-tenure workers',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#F8FAFC" rx="12" />
  <text x="32" y="38" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#111827">CALL CENTER PRODUCTIVITY LIFT BY WORKER TENURE (NBER STUDY)</text>
  <text x="32" y="58" font-family="JetBrains Mono, monospace" font-size="11" fill="#4B5563">Resolutions Per Hour: +14% Overall Average vs. +34% Novice Cohort Acceleration</text>

  <!-- Axes -->
  <line x1="80" y1="340" x2="740" y2="340" stroke="#111827" stroke-width="2" />
  <line x1="80" y1="90" x2="80" y2="340" stroke="#111827" stroke-width="2" />
  <text x="340" y="378" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#111827">WORKER TENURE &amp; BASELINE SKILL COHORT</text>
  <text x="24" y="220" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#111827" transform="rotate(-90 24 220)">RESOLUTIONS / HR</text>

  <!-- Cohort 1: Novice Workers -->
  <rect x="130" y="230" width="68" height="110" rx="4" fill="#2563EB" />
  <rect x="206" y="136" width="68" height="204" rx="4" fill="#059669" />
  <path d="M 164 220 L 240 126" stroke="#EA580C" stroke-width="3" stroke-dasharray="6 4" fill="none" />
  <rect x="142" y="88" width="124" height="30" rx="6" fill="#EA580C" />
  <text x="156" y="108" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#FFFFFF">+34% Lift (Novice)</text>
  <text x="145" y="360" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#111827">Newest / Low-Skill</text>

  <!-- Cohort 2: Workforce Average -->
  <rect x="350" y="190" width="68" height="150" rx="4" fill="#2563EB" />
  <rect x="426" y="152" width="68" height="188" rx="4" fill="#059669" />
  <rect x="362" y="114" width="124" height="28" rx="6" fill="#111827" />
  <text x="376" y="132" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#FFFFFF">+14% Mean Lift</text>
  <text x="366" y="360" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#111827">All-Worker Mean</text>

  <!-- Cohort 3: Veteran Top Performers -->
  <rect x="570" y="132" width="68" height="208" rx="4" fill="#2563EB" />
  <rect x="646" y="124" width="68" height="216" rx="4" fill="#059669" />
  <rect x="576" y="86" width="136" height="28" rx="6" fill="#4B5563" />
  <text x="588" y="104" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#FFFFFF">Marginal Top-End Gain</text>
  <text x="582" y="360" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#111827">High-Tenure Experts</text>

  <!-- Legend -->
  <rect x="520" y="384" width="14" height="14" rx="2" fill="#2563EB" />
  <text x="540" y="395" font-family="Inter, sans-serif" font-size="11" fill="#111827">Unassisted Baseline</text>
  <rect x="655" y="384" width="14" height="14" rx="2" fill="#059669" />
  <text x="675" y="395" font-family="Inter, sans-serif" font-size="11" fill="#111827">AI-Augmented Output</text>
</svg>`,
      bierutCaption:
        'AI agents compress the onboarding learning curve by encoding veteran tacit knowledge into real-time workflow guidance for novice staff.',
      annotations: [
        {
          step: '01',
          label: 'Novice +34% Surge',
          explanation:
            'Least-skilled and newest call center reps achieve a 34% jump in resolutions per hour because the agent supplies instant procedural recall.',
        },
        {
          step: '02',
          label: 'Mean +14% Shift',
          explanation:
            'Across all service tiers, hourly resolution throughput rises 14%, proving measurable organizational capacity expansion.',
        },
        {
          step: '03',
          label: 'Tacit Knowledge Transfer',
          explanation:
            'Top veterans already internalize best practices, so the model acts as a real-time distillation engine from senior to junior reps.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'af-ch20-mm1',
      name: 'The Task-Occupation Decoupling Law',
      tagline: 'Automating 30% of tasks inside a role transforms the job rather than eliminating the worker',
      naiveIntuition:
        'If an enterprise deploys AI agents across 60% of its workforce roles, 60% of human employees will soon become redundant.',
      firstPrinciplesReality:
        'Occupations are bundles of heterogeneous tasks; when agents absorb the 25% to 50% of deterministic sub-tasks, human time shifts to complex exception handling and higher volume.',
      howToApply:
        'Audit every department by inventorying discrete task frequencies rather than headcount titles before projecting workforce capacity changes.',
    },
    {
      id: 'af-ch20-mm2',
      name: 'The Novice Skill-Compression Engine',
      tagline: 'Agentic workflows flatten the tenure curve by externalizing expert pattern recognition',
      naiveIntuition:
        'Senior experts extract the highest productivity gains from AI because they know how to craft sophisticated prompts.',
      firstPrinciplesReality:
        'AI agents embed top-performer playbooks directly into the execution interface, lifting novice throughput by 34% while veteran output changes only marginally.',
      howToApply:
        'Deploy Agentforce coaching and service copilots first to newly hired cohorts to cut onboarding ramp time and standardize quality.',
    },
    {
      id: 'af-ch20-mm3',
      name: 'The Promotional Productivity Flywheel',
      tagline: 'Lower unit delivery costs expand market demand and fund net-new human job categories',
      naiveIntuition:
        'Installing industrial or digital automation reduces total enterprise employment by substituting capital for labor.',
      firstPrinciplesReality:
        'Multi-decade empirical studies of manufacturing robotics and MIT census data show automation boosts firm profitability, expanding total headcount and creating the 60% of modern jobs unknown in 1940.',
      howToApply:
        'Reinvest agent-driven cost savings into adjacent product lines and train displaced staff for emerging orchestration and governance roles.',
    },
  ],
  deepSections: [
    {
      id: 'af-ch20-sec1',
      sectionNumber: '20.1',
      title: 'Historical Techno-Panics vs. Task-Boundary Economics',
      subtitle: 'Why 1964 automation warnings failed and how task granularity governs modern labor impact',
      coreMechanism:
        'In 1964, a committee of scientists warned President Lyndon Johnson that pairing computers with self-regulating machines would create a permanent underclass of jobless citizens. Every technological epoch triggers identical lump-of-labor fallacies because observers easily spot vanishing legacy tasks while failing to imagine emergent industries like the 2.5 million mobile app developers created after 2007.\n\nModern econometrics resolves this paradox by analyzing work at the task level rather than the job title level. When Goldman Sachs decomposed 900 occupations, they found two-thirds of roles are exposed to AI across 25% to 50% of their constituent tasks, translating to roughly 25% of aggregate economy-wide tasks shifting from human execution to digital augmentation.',
      formulas: [
        {
          name: 'Aggregate Task Automation Exposure',
          expression: 'E_{total} = \\sum_{i=1}^{N} w_i \\cdot e_i \\cdot \\tau_i \\approx 0.25',
          intuition:
            'Total economy task automation is the employment-weighted product of occupational exposure and within-role task share, keeping macro displacement far below headline exposure rates.',
          variables: [
            { symbol: 'w_i', meaning: 'Share of total workforce employed in occupation i (across N = 900 occupations)' },
            { symbol: 'e_i', meaning: 'Binary or fractional AI exposure indicator (roughly 0.67 across developed economies)' },
            { symbol: '\\tau_i', meaning: 'Fraction of tasks within occupation i automatable by AI (0.25 to 0.50)' },
          ],
          workedExample:
            'If 67% of occupations have 37.5% of their internal tasks automated on average, total task shift equals 0.67 * 0.375 = 25.1% of work hours reallocated.',
        },
      ],
      keyTakeaways: [
        'Sixty percent of contemporary workers hold occupational titles that did not exist in 1940, refuting static labor-pool models.',
        'Sixty-one percent of U.S. firms adopting AI in the Duke/Federal Reserve survey prioritize product quality and output expansion over headcount reduction.',
      ],
      commonPitfalls: [
        'Equating 67% occupational exposure with 67% unemployment instead of recognizing partial 25%–50% task complementarity.',
        'Cutting human headcount prematurely before measuring how augmented workers expand revenue and customer retention.',
      ],
    },
    {
      id: 'af-ch20-sec2',
      sectionNumber: '20.2',
      title: 'Skill Compression and the Promotional Employment Effect',
      subtitle: 'Empirical evidence from call centers and industrial robotics on who gains most from automation',
      coreMechanism:
        'Agentic AI acts as an equalizer across workplace skill tiers rather than purely rewarding elite technical specialists. In an NBER study of customer service call centers—a canonical agentic environment—deploying AI assistance increased average throughput by 14% measured in call resolutions per hour.\n\nAt the macro enterprise level, productivity gains trigger a promotional employment effect rather than net labor crowding. A decade-long study of Chinese manufacturing firms published in Nature found that installing industrial robots increased total firm employment and expanded female labor participation because higher output and lower unit costs allowed profitable enterprises to hire skilled workers in new divisions.',
      formulas: [
        {
          name: 'Novice Skill-Gap Compression Ratio',
          expression: '\\Delta P_{novice} = \\frac{R_{AI, novice} - R_{base, novice}}{R_{base, novice}} = +34\\% > \\Delta P_{mean} (+14\\%)',
          intuition:
            'Because AI assistance supplies pre-indexed institutional memory, percentage productivity gains inversely correlate with baseline worker tenure.',
          variables: [
            { symbol: 'R_{base, novice}', meaning: 'Unassisted hourly call resolutions for low-tenure workers' },
            { symbol: 'R_{AI, novice}', meaning: 'AI-augmented hourly call resolutions for low-tenure workers' },
            { symbol: '\\Delta P_{mean}', meaning: 'Workforce-wide mean productivity improvement (+14%)' },
          ],
          workedExample:
            'A new hire resolving 5.0 cases/hour unassisted reaches 6.7 cases/hour (+34%) with agentic guidance, rapidly approaching a veteran resolving 7.2 cases/hour.',
        },
      ],
      keyTakeaways: [
        'Call center AI deployments lift average resolutions per hour by 14% while accelerating newest and lowest-skilled workers by 34%.',
        'Decade-long empirical data on robotics shows automation exerts a promotional effect that increases total firm employment through profitability.',
      ],
      commonPitfalls: [
        'Restricting AI tools to senior staff when entry-level and onboarding cohorts yield more than double the relative productivity gain.',
        'Viewing automation strictly as a cost-cutting lever rather than a growth engine that funds skilled hiring in adjacent areas.',
      ],
    },
    {
      id: 'af-ch20-sec3',
      sectionNumber: '20.3',
      title: 'The 41% Drudgery Tax and the 43% Leadership Vacuum',
      subtitle: 'Why management guidance—not worker resistance—is the binding constraint on agentic transformation',
      coreMechanism:
        'The primary bottleneck slowing enterprise AI adoption is leadership inertia rather than frontline employee resistance. When Slack’s Workforce Lab surveyed 10,000 global desk workers, respondents estimated that 41% of their daily hours are consumed by tasks that are repetitive, low-value, or disconnected from their core job functions.\n\nHowever, the same survey exposed a severe organizational failure: 43% of workers reported receiving zero guidance from their leaders on how to use AI in their daily roles. While McKinsey projects generative AI can boost annual labor productivity by up to 3.4%, capturing that surplus requires management to establish explicit training pathways, governance boundaries, and role transition programs.',
      keyTakeaways: [
        'Global desk workers spend 41% of their workday on low-value, repetitive tasks that fail to contribute meaningfully to core job functions.',
        'Forty-three percent of employees receive no executive guidance on AI usage, making management enablement the primary limiting factor in workplace transformation.',
      ],
      commonPitfalls: [
        'Assuming employees fear AI when workers actually welcome relief from the 41% repetitive task burden.',
        'Deploying licenses without structured training, leaving 43% of the workforce without operational guidance or transition support.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Workforce Automation Strategy Matrix',
      description: 'Comparing pure headcount displacement, unguided ad-hoc AI usage, and structured hybrid augmentation.',
      headers: ['Dimension', 'Cost-Cut Displacement', 'Unguided Shadow AI', 'Structured Hybrid Augmentation'],
      rows: [
        ['Primary Objective', 'Immediate labor cost reduction', 'Individual ad-hoc shortcuts', 'Quality, output & 3.4% productivity lift'],
        ['Impact on 41% Drudgery', 'Shifts burden to fewer survivors', 'Inconsistent personal time savings', 'Systematically offloaded to Agentforce'],
        ['Novice Onboarding Speed', 'High turnover and burnout', 'Uneven prompt experimentation', '+34% resolution lift via guided workflows'],
        ['Leadership Guidance', 'Top-down downsizing mandates', '43% of workers left without direction', 'Explicit playbooks and reskilling tracks'],
      ],
      verdictRule:
        'Always pair task-level agent deployment with explicit management guidance and reskilling to capture the 14%–34% augmentation dividend without eroding institutional capacity.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'af-ch20-scen1',
      title: 'Accelerating Novice Support Cohorts via Agentic Knowledge Distillation',
      roleAndContext: 'VP of Customer Operations managing a 400-seat service center with 35% annual agent turnover.',
      symptomOrFailure:
        'Newly hired support reps take six months to match veteran resolution speeds, creating severe queue backlogs during seasonal volume spikes.',
      naiveFixAndWhyItFails:
        'Extending classroom training from two weeks to four weeks delays floor deployment and fails because static manuals cannot replicate live customer edge cases.',
      firstPrinciplesSolution:
        'Deploy Agentforce Service Agent copilots grounded in top-performer resolution logs to recommend verified diagnostic actions and draft responses in real time.',
      measurableOutcome:
        'Novice call resolutions per hour increase by 34% and overall floor productivity rises 14%, cutting time-to-proficiency in half.',
    },
    {
      id: 'af-ch20-scen2',
      title: 'Eliminating the 41% Repetitive Task Tax Across Enterprise Sales Ops',
      roleAndContext: 'Chief Operating Officer at a B2B software firm where account executives miss quota due to CRM admin overload.',
      symptomOrFailure:
        'Internal time-motion audits reveal reps spend 41% of their week logging call notes, updating order statuses, and answering routine scheduling emails.',
      naiveFixAndWhyItFails:
        'Telling reps to "use AI tools on their own" leaves 43% of the team without clear guidance, resulting in unapproved shadow chatbots and zero CRM hygiene improvement.',
      firstPrinciplesSolution:
        'Implement governed Agentforce SDR and scheduling workflows integrated directly with Data Cloud alongside mandatory two-hour role-specific enablement workshops.',
      measurableOutcome:
        'Reclaims 12 hours per rep weekly from repetitive administration and increases qualified pipeline generation by 22% without adding headcount.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch20-q1',
        scenarioPrompt:
          'An executive board reads that Goldman Sachs estimates two-thirds of U.S. occupations are exposed to AI automation and proposes freezing hiring across 67% of company roles. What flaw in their interpretation must you correct?',
        options: [
          {
            label: 'A',
            text: 'Goldman Sachs only studied manufacturing robotics in China, not desk workers.',
            isCorrect: false,
            explanation: 'The Chinese robotics study was published in Nature; Goldman Sachs analyzed 900 U.S. occupations.',
          },
          {
            label: 'B',
            text: 'Exposure applies at the partial task level (25%–50% of tasks within those roles), favoring worker augmentation over whole-job replacement.',
            isCorrect: true,
            explanation: 'Because only a fraction of tasks inside exposed roles are automated, workers are complemented rather than substituted.',
          },
          {
            label: 'C',
            text: 'AI exposure only improves the productivity of senior 10-year veterans while slowing down new hires.',
            isCorrect: false,
            explanation: 'Empirical call center studies show the exact opposite: novices gain 34% versus a 14% overall average.',
          },
          {
            label: 'D',
            text: 'Census data proves that 90% of today’s workers still perform identical jobs to the 1940 workforce.',
            isCorrect: false,
            explanation: 'David Autor’s census research shows 60% of modern workers are employed in occupations that did not exist in 1940.',
          },
        ],
      },
      {
        id: 'af-ch20-q2',
        scenarioPrompt:
          'According to the NBER empirical study of AI deployment in customer service call centers, how were productivity gains distributed across the workforce?',
        options: [
          {
            label: 'A',
            text: 'Productivity rose 14% on average, with the newest and least-skilled workers improving by 34%.',
            isCorrect: true,
            explanation: 'AI agents transfer tacit institutional best practices to novices, compressing the skill gap by lifting low-tenure workers 34%.',
          },
          {
            label: 'B',
            text: 'Productivity fell 14% during the first year due to prompt engineering overhead.',
            isCorrect: false,
            explanation: 'Resolutions per hour increased by 14% across the center.',
          },
          {
            label: 'C',
            text: 'Senior workers gained 41% while entry-level workers saw zero measurable change.',
            isCorrect: false,
            explanation: 'High-skill veterans saw modest gains while novices captured the largest 34% surge.',
          },
          {
            label: 'D',
            text: 'Total call volume dropped by 60% as human reps were entirely removed from the center.',
            isCorrect: false,
            explanation: 'The study measured human call resolutions per hour under AI augmentation, not full human elimination.',
          },
        ],
      },
      {
        id: 'af-ch20-q3',
        scenarioPrompt:
          'Slack’s Workforce Lab surveyed 10,000 global desk workers regarding daily task allocation and executive AI enablement. Which pair of metrics accurately reflects their findings?',
        options: [
          {
            label: 'A',
            text: '10% of time is spent on repetitive tasks, and 90% of workers receive weekly AI coaching.',
            isCorrect: false,
            explanation: 'Repetitive task load is more than four times higher and executive guidance is widely lacking.',
          },
          {
            label: 'B',
            text: '41% of workday time is spent on low-value repetitive tasks, while 43% of workers report receiving no AI guidance from leaders.',
            isCorrect: true,
            explanation: 'Desk workers lose 41% of their day to routine drudgery and 43% lack management direction on how to apply AI.',
          },
          {
            label: 'C',
            text: '62% of time is spent writing code, and 3.4% of workers refuse to use automation.',
            isCorrect: false,
            explanation: '62% comes from the Pew study on two-decade impact expectations, and 3.4% is McKinsey’s productivity growth projection.',
          },
          {
            label: 'D',
            text: '25% of workers are app developers, and 54% have been displaced by chatbots.',
            isCorrect: false,
            explanation: '54% is the Pew survey share of adults uncertain or neutral about AI’s net effect on workers.',
          },
        ],
      },
      {
        id: 'af-ch20-q4',
        scenarioPrompt:
          'What did the Duke University and Federal Reserve Banks of Atlanta and Richmond survey reveal about the 61% of U.S. firms planning to automate tasks with AI?',
        options: [
          {
            label: 'A',
            text: 'Their primary motivation is immediate headcount reduction to shrink payroll expenses.',
            isCorrect: false,
            explanation: 'The survey explicitly contradicted superficial headlines by showing cost-cutting via layoffs was not the main driver.',
          },
          {
            label: 'B',
            text: 'They are adopting AI primarily to improve product quality and increase output rather than cut labor costs.',
            isCorrect: true,
            explanation: 'Firms view AI automation as a competitive necessity to raise output and quality rather than a pure downsizing tool.',
          },
          {
            label: 'C',
            text: 'They plan to pause all AI investments until federal labor regulations are finalized in 2030.',
            isCorrect: false,
            explanation: '61% planned to automate tasks within the coming year to avoid falling behind competitors.',
          },
          {
            label: 'D',
            text: 'They are replacing all management layers while keeping repetitive clerical tasks 100% manual.',
            isCorrect: false,
            explanation: 'Firms target repetitive task automation while requiring stronger management leadership to guide transitions.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'af-ch20-fc1',
        category: 'foundation',
        front: 'What percentage of today’s workforce is employed in occupations that did not exist in 1940 according to economist David Autor?',
        back: 'Roughly 60% of contemporary workers hold jobs in occupational categories created after 1940.',
        mentalHook: '60% New Work Since 1940: technology destroys tasks but invents whole professions.',
      },
      {
        id: 'af-ch20-fc2',
        category: 'evaluation',
        front: 'How much of an average desk worker’s day is consumed by repetitive, low-value tasks according to the Slack Workforce Lab survey of 10,000 workers?',
        back: 'Desk workers spend 41% of their workday on repetitive tasks that lack meaningful contribution to their core job functions.',
        mentalHook: 'The 41% Drudgery Tax: two full days out of every five-day workweek.',
      },
      {
        id: 'af-ch20-fc3',
        category: 'adaptation',
        front: 'How do AI productivity gains in call centers compare between the average worker and the newest, least-skilled workers?',
        back: 'Call resolutions per hour increase by 14% on average, but surge by 34% among the newest and least-skilled workers.',
        mentalHook: '14% Mean vs. 34% Novice: AI helps those who need the most help.',
      },
      {
        id: 'af-ch20-fc4',
        category: 'architecture',
        front: 'What did Goldman Sachs conclude when breaking down 900 occupations by task exposure to AI?',
        back: 'Two-thirds of occupations could have 25% to 50% of their workloads automated (roughly 25% of total tasks), favoring augmentation over displacement.',
        mentalHook: '2/3 of jobs exposed x ~37% of tasks = ~25% task shift.',
      },
      {
        id: 'af-ch20-fc5',
        category: 'optimization',
        front: 'What did a decade-long Nature study of industrial robots in the Chinese workforce discover about net employment?',
        back: 'Robot installation exerted a promotional effect that increased total jobs and brought more women into the workforce by making firms more productive and profitable.',
        mentalHook: 'Promotional Robotics Effect: higher productivity funds net-new skilled hiring.',
      },
      {
        id: 'af-ch20-fc6',
        category: 'security',
        front: 'Why does Chapter 20 identify management rather than the workforce as the limiting factor in the AI workplace revolution?',
        back: 'While workers are eager to offload repetitive tasks, 43% complain they have received zero guidance from their leaders on how to use AI.',
        mentalHook: '41% Drudgery vs. 43% Leadership Silence.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'af-ch20-feyn1',
        conceptTitle: 'Task-Boundary Augmentation vs. Whole-Job Displacement',
        prompt:
          'Explain to a worried department head why a study showing "67% of occupations are exposed to AI" does not mean two-thirds of their team will be laid off.',
        rubricChecklist: [
          'Distinguishes between an occupation (a bundle of tasks) and individual atomic tasks.',
          'Cites the Goldman Sachs finding that exposed roles have 25%–50% of tasks automatable (roughly 25% of total tasks).',
          'Connects task offloading to the 41% of desk worker time currently wasted on repetitive drudgery.',
          'Explains the historical and empirical reallocation effect (60% of jobs new since 1940; firms adopting AI to raise quality and output).',
        ],
        modelExplanation:
          'An occupation is a bundle of dozens of distinct tasks rather than a single monolithic activity. When Goldman Sachs analyzed 900 occupations, they found that while two-thirds of roles are exposed to AI, only 25% to 50% of the tasks inside those roles can be automated—roughly 25% of total work tasks overall. That automatable slice directly targets the 41% of the workday that desk workers currently spend on repetitive, low-value routines. Instead of eliminating two-thirds of employees, AI agents absorb the administrative drudgery so human workers can focus on high-judgment tasks, expand total output, and move into new job categories—just as 60% of today’s workforce holds jobs that did not exist in 1940.',
      },
      {
        id: 'af-ch20-feyn2',
        conceptTitle: 'The Novice Skill-Compression Mechanism',
        prompt:
          'Explain why AI agents boost the productivity of entry-level workers (+34%) more than double the workforce average (+14%), and what management must do to capture this gain.',
        rubricChecklist: [
          'Contrasts the +34% novice resolution lift against the +14% overall average from the NBER call center study.',
          'Explains the underlying mechanism: AI encodes tacit veteran knowledge into real-time workflow guidance.',
          'Identifies the 43% management guidance gap discovered by the Slack Workforce Lab.',
          'Prescribes structured training and leadership playbooks to transition and upskill workers.',
        ],
        modelExplanation:
          'Veteran employees have already internalized troubleshooting patterns and institutional edge cases over years of practice, so AI gives them only a modest speed boost. Newly hired and lower-skilled workers lack that tacit memory; when an AI agent retrieves grounded knowledge and suggests actions in real time, it transfers senior expertise straight to the novice’s screen, lifting their hourly resolutions by 34% compared to the 14% floor average. However, 43% of workers currently receive zero leadership guidance on how to use AI. Capturing this skill compression requires managers to stop waiting, publish clear operational playbooks, and actively train teams on agent-assisted workflows.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch20-n1',
        label: 'Task-Boundary Decomposition',
        category: 'foundation',
        chapterNumber: 20,
        importance: 1,
        definition:
          'The economic principle that automation targets specific 25%–50% task slices inside occupations rather than erasing entire job titles.',
        formulaOrRule: '67% Role Exposure x 25%–50% Task Share ≈ 25% Total Task Automation',
        whyItMatters:
          'Prevents lump-of-labor downsizing errors and guides leaders to redesign roles around human-agent complementarity.',
      },
      {
        id: 'af-ch20-n2',
        label: 'Novice Skill Compression',
        category: 'evaluation',
        chapterNumber: 20,
        importance: 1,
        definition:
          'The disproportionate +34% productivity acceleration observed among newest and least-skilled workers when assisted by AI agents.',
        formulaOrRule: '+34% Novice Lift vs. +14% Overall Call Center Mean (NBER)',
        whyItMatters:
          'Proves that agentic systems compress onboarding ramp times by externalizing veteran institutional knowledge.',
      },
      {
        id: 'af-ch20-n3',
        label: 'The 41% Repetitive Drudgery Tax',
        category: 'optimization',
        chapterNumber: 20,
        importance: 2,
        definition:
          'The Slack Workforce Lab finding across 10,000 desk workers that 41% of daily work time goes to low-value, repetitive tasks.',
        whyItMatters:
          'Explains why frontline employees welcome AI agents that offload routine administrative work.',
      },
      {
        id: 'af-ch20-n4',
        label: 'The 43% Management Guidance Gap',
        category: 'adaptation',
        chapterNumber: 20,
        importance: 2,
        definition:
          'The proportion of global desk workers who report receiving zero formal direction or training from leadership on how to use AI.',
        whyItMatters:
          'Identifies executive enablement and training—not worker resistance—as the primary bottleneck in AI adoption.',
      },
      {
        id: 'af-ch20-n5',
        label: 'Promotional Employment Effect',
        category: 'architecture',
        chapterNumber: 20,
        importance: 2,
        definition:
          'The empirical phenomenon where automation raises firm productivity and profitability, funding net-new job creation and occupational expansion.',
        formulaOrRule: '60% of current U.S. workers hold occupations unknown in 1940 (Autor)',
        whyItMatters:
          'Demonstrates how efficiency gains from robotics and digital labor expand total employment over multi-year horizons.',
      },
      {
        id: 'af-ch20-n6',
        label: 'Macro Productivity Dividend',
        category: 'evaluation',
        chapterNumber: 20,
        importance: 3,
        definition:
          'McKinsey’s projection that generative and agentic AI automation can elevate annual global productivity growth by up to 3.4%.',
        whyItMatters:
          'Quantifies the macroeconomic growth prize available to organizations that actively reskill their workforces.',
      },
    ],
    edges: [
      {
        source: 'af-ch20-n3',
        target: 'af-ch20-n1',
        relationship: 'prerequisite_for',
        explanation:
          'The 41% daily burden of repetitive tasks provides the exact target workload that task-boundary decomposition offloads to AI agents.',
      },
      {
        source: 'af-ch20-n1',
        target: 'af-ch20-n2',
        relationship: 'optimizes',
        explanation:
          'Automating routine lookup and triage sub-tasks enables novice workers to achieve a 34% surge in hourly resolution throughput.',
      },
      {
        source: 'af-ch20-n4',
        target: 'af-ch20-n6',
        relationship: 'trades_off_with',
        explanation:
          'Leaving 43% of employees without executive AI guidance directly throttles an organization’s ability to capture the 3.4% productivity dividend.',
      },
      {
        source: 'af-ch20-n2',
        target: 'af-ch20-n5',
        relationship: 'prerequisite_for',
        explanation:
          'Higher per-worker output and faster onboarding improve enterprise margins, fueling the promotional expansion of new skilled roles.',
      },
      {
        source: 'af-ch20-n5',
        target: 'af-ch20-n6',
        relationship: 'part_of',
        explanation:
          'Occupational creation and workforce augmentation combine to drive the macro 3.4% annual productivity growth trajectory.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 2,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 20 historical 1964 letter, Duke/Fed survey (61%), Pew study (62%/32%/54%), WEF & David Autor (60% post-1940 jobs), Goldman Sachs (2/3 jobs, 25-50% tasks), IMF, McKinsey (3.4%), NBER call center (+14% mean, +34% novice), Nature Chinese robotics study, and Slack Workforce Lab (41% drudgery, 43% no guidance).',
  },
};

export const afCh21Mastery: ChapterMastery = {
  chapterNumber: 21,
  chapterId: 'ch21',
  title: 'How Can I Get Started with Agentforce and Learn More?',
  subtitle: 'The Land-and-Expand Adoption Ladder, Technical Enablement Channels, and Process Ideation',
  readingTimeMinutes: 6,
  sourceWordCount: 690,
  executiveThesis:
    'Successful enterprise adoption of Agentforce follows a disciplined four-rung escalation ladder: activating embedded AI features, adapting prebuilt functional agents, auditing high-frequency cross-functional routines, and scaling custom agents only after proving bounded ROI. Pairing hands-on Trailhead and engineering documentation with contained pilot measurement prevents expensive, ungrounded experimentation.',
  paradigmShift: {
    oldWay:
      'Launching monolithic, custom-coded AI agent moonshots from scratch without checking existing platform capabilities or defining baseline measurement plans.',
    newWay:
      'Executing a "Start Small, Land, and Expand" progression that turns on native predictive/generative features first, deploys prebuilt agents second, and targets repetitive routines via cross-functional workshops.',
    whyItChanged:
      'Prebuilt agents and embedded cloud capabilities already solve the highest-frequency enterprise patterns with proven partner playbooks, drastically lowering time-to-value and implementation risk.',
  },
  customDiagrams: [
    {
      id: 'af-ch21-diag1',
      title: 'The 4-Rung Agentforce Land-and-Expand Adoption Ladder',
      subtitle: 'Sequencing implementation from zero-code embedded features to measured custom expansion',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#F8FAFC" rx="12" />
  <text x="32" y="38" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#111827">AGENTFORCE ADOPTION ESCALATION &amp; PROOF-OF-VALUE LADDER</text>
  <text x="32" y="58" font-family="JetBrains Mono, monospace" font-size="11" fill="#4B5563">Progressive Complexity vs. Time-to-Value Across Enterprise Rollout Phases</text>

  <!-- Step 1 -->
  <rect x="32" y="276" width="166" height="108" rx="8" fill="#111827" />
  <text x="48" y="302" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#34D399">RUNG 01: ENABLE</text>
  <text x="48" y="324" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Built-In AI Features</text>
  <text x="48" y="344" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">Send-time optimization,</text>
  <text x="48" y="360" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">scoring, copy &amp; segments</text>

  <!-- Step 2 -->
  <rect x="224" y="220" width="166" height="164" rx="8" fill="#2563EB" />
  <text x="240" y="246" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#DBEAFE">RUNG 02: ADAPT</text>
  <text x="240" y="268" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Prebuilt Agents</text>
  <text x="240" y="288" font-family="Inter, sans-serif" font-size="11" fill="#EFF6FF">Proven out-of-the-box</text>
  <text x="240" y="304" font-family="Inter, sans-serif" font-size="11" fill="#EFF6FF">templates adapted with</text>
  <text x="240" y="320" font-family="Inter, sans-serif" font-size="11" fill="#EFF6FF">partner &amp; AE experience</text>

  <!-- Step 3 -->
  <rect x="416" y="156" width="166" height="228" rx="8" fill="#EA580C" />
  <text x="432" y="182" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#FFEDD5">RUNG 03: IDEATE</text>
  <text x="432" y="204" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Process Triage</text>
  <text x="432" y="224" font-family="Inter, sans-serif" font-size="11" fill="#FFF7ED">Cross-functional review</text>
  <text x="432" y="240" font-family="Inter, sans-serif" font-size="11" fill="#FFF7ED">of repeated, predictable</text>
  <text x="432" y="256" font-family="Inter, sans-serif" font-size="11" fill="#FFF7ED">customer-facing routines</text>

  <!-- Step 4 -->
  <rect x="608" y="92" width="160" height="292" rx="8" fill="#059669" />
  <text x="624" y="118" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#D1FAE5">RUNG 04: EXPAND</text>
  <text x="624" y="140" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Measured Scaling</text>
  <text x="624" y="160" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">Contained experiments</text>
  <text x="624" y="176" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">backed by hard ROI</text>
  <text x="624" y="192" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">measurement plans to</text>
  <text x="624" y="208" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">unlock next investment</text>

  <!-- Flow Arrows -->
  <path d="M 198 276 L 224 246" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 390 220 L 416 186" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 582 156 L 608 122" stroke="#111827" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
</svg>`,
      bierutCaption:
        'Enterprise rollouts maximize survival by ascending from dormant native features and field-tested templates to measured custom pilots.',
      annotations: [
        {
          step: '01',
          label: 'Activate Dormant Features',
          explanation:
            'Existing clouds like Marketing Cloud already include send-time optimization, behavior scoring, and segment generation that simply require activation.',
        },
        {
          step: '02',
          label: 'Deploy Prebuilt Templates',
          explanation:
            'Out-of-the-box agents encode cross-customer patterns where Salesforce and implementation partners already hold deep deployment experience.',
        },
        {
          step: '03',
          label: 'Land & Expand with Proof',
          explanation:
            'Run contained experiments on repetitive customer routines with a strict measurement plan so verified ROI funds subsequent expansion.',
        },
      ],
    },
    {
      id: 'af-ch21-diag2',
      title: 'Role-Based Enablement & Technical Architecture Curriculum Map',
      subtitle: 'Routing practitioners, admins, developers, and architects to exact learning channels',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#F8FAFC" rx="12" />
  <text x="32" y="38" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#111827">AGENTFORCE PRACTITIONER &amp; ARCHITECT ENABLEMENT ROUTER</text>
  <text x="32" y="58" font-family="JetBrains Mono, monospace" font-size="11" fill="#4B5563">Matching Stakeholder Roles to Hands-On Sandbox Trails and Engineering Deep-Dives</text>

  <!-- Central Hub -->
  <rect x="290" y="160" width="220" height="100" rx="10" fill="#111827" stroke="#EA580C" stroke-width="2.5" />
  <text x="322" y="198" font-family="JetBrains Mono, monospace" font-size="13" font-weight="700" fill="#EA580C">ENABLEMENT HUB</text>
  <text x="312" y="222" font-family="Inter, sans-serif" font-size="12" fill="#FFFFFF">Trailhead + Developer Docs</text>
  <text x="312" y="240" font-family="Inter, sans-serif" font-size="11" fill="#9CA3AF">+ Engineering Architecture</text>

  <!-- Top Left: Business & Execs -->
  <rect x="32" y="86" width="210" height="114" rx="8" fill="#FFFFFF" stroke="#2563EB" stroke-width="2" />
  <text x="48" y="112" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#2563EB">01. BUSINESS LEADERS</text>
  <text x="48" y="134" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#111827">Portal, Salesforce+ &amp; Blog</text>
  <text x="48" y="154" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Schedule live demos; stream</text>
  <text x="48" y="170" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Dreamforce &amp; World Tour</text>

  <!-- Bottom Left: Hands-on Builders -->
  <rect x="32" y="240" width="210" height="124" rx="8" fill="#FFFFFF" stroke="#059669" stroke-width="2" />
  <text x="48" y="266" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#059669">02. ADMINS &amp; OPERATORS</text>
  <text x="48" y="288" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#111827">Trailhead Quick Start</text>
  <text x="48" y="308" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Get Ready trail + build your</text>
  <text x="48" y="324" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">first agent on a lunch break</text>

  <!-- Top Right: Developers -->
  <rect x="558" y="86" width="210" height="114" rx="8" fill="#FFFFFF" stroke="#EA580C" stroke-width="2" />
  <text x="574" y="112" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#EA580C">03. DEVELOPERS</text>
  <text x="574" y="134" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#111827">Developer Workshop &amp; YT</text>
  <text x="574" y="154" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Agentforce 2.0 playlists &amp;</text>
  <text x="574" y="170" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">developer.salesforce.com</text>

  <!-- Bottom Right: Systems Architects -->
  <rect x="558" y="240" width="210" height="124" rx="8" fill="#111827" />
  <text x="574" y="266" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#34D399">04. AI ARCHITECTS</text>
  <text x="574" y="288" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Engineering &amp; Architect</text>
  <text x="574" y="308" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">CTO Platform Transformation</text>
  <text x="574" y="324" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">&amp; Phil Mui Atlas Reasoning</text>

  <!-- Connectors -->
  <path d="M 242 143 L 290 190" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 242 302 L 290 230" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 510 190 L 558 143" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 510 230 L 558 302" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
</svg>`,
      bierutCaption:
        'Targeted enablement routes non-technical sponsors to interactive demos while directing systems architects to Atlas Reasoning Engine internals.',
      annotations: [
        {
          step: '01',
          label: 'Lunch-Break Prototyping',
          explanation:
            'Trailhead’s Quick Start project allows any administrator or practitioner to configure a working agent inside a free sandbox over a single lunch break.',
        },
        {
          step: '02',
          label: 'Visual & Streaming Channels',
          explanation:
            'Salesforce+ and the Agentforce 2.0 YouTube playlist provide on-demand Dreamforce sessions and visual walk-throughs.',
        },
        {
          step: '03',
          label: 'Deep Architectural Internals',
          explanation:
            'The Salesforce Engineering blog and CTO platform transformation guide expose how Phil Mui’s team engineered the Atlas Reasoning Engine.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'af-ch21-mm1',
      name: 'The Dormant-Feature First Principle',
      tagline: 'Exhaust built-in cloud intelligence and prebuilt templates before writing custom agent specifications',
      naiveIntuition:
        'Adopting agentic AI requires architecting bespoke multi-agent workflows from scratch before any business value can be observed.',
      firstPrinciplesReality:
        'Enterprise clouds already contain dormant agent-like features (such as Marketing Cloud send-time optimization and segment generation) plus field-tested prebuilt agents that can be activated immediately.',
      howToApply:
        'Inventory your existing Salesforce licenses with your account executive to enable built-in AI features and evaluate out-of-the-box agents before commissioning custom builds.',
    },
    {
      id: 'af-ch21-mm2',
      name: 'The Repetitive-Routine Radar',
      tagline: 'Locate automation candidates where multiple humans perform identical customer-facing steps daily',
      naiveIntuition:
        'Brainstorming AI use cases works best by asking executives to invent futuristic product concepts in isolation.',
      firstPrinciplesReality:
        'High-ROI agentic candidates hide inside existing cross-functional processes where large teams execute predictable, repeated customer-facing routines every day.',
      howToApply:
        'Convene a cross-functional process walk-through to map high-frequency, rule-bounded customer interactions and rank them by containment feasibility.',
    },
    {
      id: 'af-ch21-mm3',
      name: 'The Contained-Pilot Measurement Gate',
      tagline: 'Fund expansion exclusively through instrumented proof-of-value in small, bounded sandboxes',
      naiveIntuition:
        'An enterprise should roll out an agent across all global channels simultaneously to maximize initial splash.',
      firstPrinciplesReality:
        'Contained, clearly defined pilots paired with an upfront measurement plan isolate failure modes early and generate the empirical ROI required to justify expansion.',
      howToApply:
        'Attach a baseline-versus-pilot KPI scorecard to your initial "Land" experiment before requesting budget for phase-two expansion.',
    },
  ],
  deepSections: [
    {
      id: 'af-ch21-sec1',
      sectionNumber: '21.1',
      title: 'The Multi-Tier Enablement Ecosystem',
      subtitle: 'Mapping Trailhead sandboxes, visual channels, and Atlas engineering internals to team roles',
      coreMechanism:
        'Transitioning from conceptual understanding to production deployment requires matching each stakeholder group with the right technical depth of enablement. Business sponsors and general practitioners start at the central Agentforce portal to schedule live hands-on demos, read the general Salesforce blog, or stream Dreamforce and World Tour sessions on Salesforce+ and the Agentforce 2.0 YouTube playlist.\n\nFor hands-on builders, Salesforce Trailhead provides free self-guided curricula—including the "Get Ready for Agentforce" trail and a "Quick Start" project engineered so an admin can build a functional agent during a single lunch break. Technical developers and systems architects advance to the Developer Agentforce Workshop, the CTO’s platform transformation blueprint on `architect.salesforce.com`, and the Salesforce Engineering blog featuring Phil Mui’s architectural breakdown of the Atlas Reasoning Engine.',
      keyTakeaways: [
        'Trailhead’s free Quick Start project enables practitioners to build and test their first working Agentforce agent during a single lunch break.',
        'Architects and engineers can inspect the internal mechanics of the Atlas Reasoning Engine and platform transformation via Salesforce’s dedicated engineering and architect portals.',
      ],
      commonPitfalls: [
        'Treating Agentforce as traditional heavy enterprise software instead of using free Trailhead sandboxes to prototype immediately.',
        'Sending software engineers only to high-level marketing blogs while overlooking `engineering.salesforce.com` and `architect.salesforce.com`.',
      ],
    },
    {
      id: 'af-ch21-sec2',
      sectionNumber: '21.2',
      title: 'Activating Prebuilt Agents and Dormant Native AI',
      subtitle: 'Capturing immediate leverage from out-of-the-box templates and built-in Marketing Cloud intelligence',
      coreMechanism:
        'When organizations decide to operationalize Agentforce, the highest-leverage starting point is adopting common, lower-friction scenarios rather than inventing bespoke architectures. Prebuilt Agentforce agents encapsulate the most frequent enterprise use cases validated across hundreds of early customers, giving adopters the advantage of battle-tested templates and experienced Salesforce and partner implementation teams.\n\nAlongside full autonomous agents, existing Salesforce clouds already ship with built-in AI features that execute agent-like decisions and frequently only need to be enabled via an account executive. Inside Marketing Cloud alone, these native capabilities include automated send-time optimization, personalized web and app recommendations, automated copy and subject-line generation, audience segment generation, behavioral scoring, and key-account identification.',
      keyTakeaways: [
        'Prebuilt agents represent the most common, field-tested enterprise scenarios and can be rapidly adapted to specific business rules.',
        'Marketing Cloud already includes native agent-like capabilities—such as send-time optimization, behavior scoring, and segment generation—that often just need to be switched on.',
      ],
      commonPitfalls: [
        'Building custom prompt pipelines from scratch to perform tasks like email subject-line generation or behavior scoring that are already built into Marketing Cloud.',
        'Ignoring the accumulated implementation experience of Salesforce and partner teams around prebuilt agent templates.',
      ],
    },
    {
      id: 'af-ch21-sec3',
      sectionNumber: '21.3',
      title: 'Cross-Functional Ideation and Land-and-Expand Execution',
      subtitle: 'Identifying predictable customer routines and gating investment on measured pilot outcomes',
      coreMechanism:
        'Formulating a durable internal agent strategy requires grounding ideation in real operational bottlenecks rather than abstract brainstorming. By combining the early-adopter patterns from Chapter 16 with a structured cross-functional workshop, teams walk step-by-step through internal business processes to locate repeated, predictable customer-facing routines. Whenever an organization has large groups of employees executing the exact same procedural steps day after day, that workflow is a prime candidate for agentic automation.\n\nOnce candidates are ranked, execution must follow a disciplined "start small, land, and expand" protocol. Teams launch a small number of contained, clearly defined experiments in areas with the highest probability of success, governed by a formal measurement plan that produces hard proof of value before unlocking additional capital investment.',
      keyTakeaways: [
        'Cross-functional process reviews should target workflows where many employees perform identical, predictable customer-facing routines every day.',
        'A "start small, land, and expand" strategy requires an explicit measurement plan because follow-on investment depends on empirical proof of value.',
      ],
      commonPitfalls: [
        'Launching sprawling, uncontained multi-department deployments without establishing baseline metrics or a proof-of-value measurement plan.',
        'Restricting ideation to IT leadership without inspecting the repetitive daily routines of frontline customer-facing teams.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Agentforce Entry-Point Selection Matrix',
      description: 'Evaluating the three primary starting tracks for enterprise AI and Agentforce adoption.',
      headers: ['Criteria', 'Built-In Cloud AI Features', 'Adapted Prebuilt Agents', 'Custom-Ideated Agents'],
      rows: [
        ['Setup Speed', 'Hours to days (enablement toggle)', 'Days to weeks (template adaptation)', 'Weeks to months (full custom build)'],
        ['Technical Effort', 'Minimal admin configuration', 'Low-code topics, instructions & flows', 'Cross-functional design & sandbox testing'],
        ['Canonical Examples', 'Send-time optimization, behavior scoring', 'Out-of-box Service, SDR & Commerce agents', 'Bespoke multi-step industry workflows'],
        ['Risk & Proof Profile', 'Immediate incremental lift', 'Proven across many prior customers', 'Requires contained pilot & measurement plan'],
      ],
      verdictRule:
        'Enable built-in AI features and adapt prebuilt agents first to bank immediate wins while running contained, measured pilots for custom cross-functional workflows.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'af-ch21-scen1',
      title: 'Unlocking Dormant Marketing Cloud Intelligence Before Custom Build',
      roleAndContext: 'VP of Digital Marketing at a retail brand requesting budget to build a custom AI segmentation and copy engine.',
      symptomOrFailure:
        'The marketing team spends three weeks per campaign manually slicing audience segments, guessing email send windows, and drafting subject lines.',
      naiveFixAndWhyItFails:
        'Hiring an external agency to build a custom LLM microservice duplicates capabilities already sitting unactivated inside their existing Salesforce license.',
      firstPrinciplesSolution:
        'Contact the Salesforce account executive to enable native Marketing Cloud AI features for send-time optimization, segment generation, behavior scoring, and copy insights, then pilot a prebuilt campaign agent.',
      measurableOutcome:
        'Activates automated segmentation and send-time optimization within 48 hours at zero custom code cost, lifting email open rates by 19%.',
    },
    {
      id: 'af-ch21-scen2',
      title: 'Executing a Contained Land-and-Expand Pilot via Cross-Functional Triage',
      roleAndContext: 'Director of Enterprise Architecture leading an initial Agentforce rollout across a regional healthcare network.',
      symptomOrFailure:
        'Department heads submit 28 competing AI agent wish-lists ranging from complex clinical diagnostics to routine appointment rescheduling.',
      naiveFixAndWhyItFails:
        'Attempting to build all 28 agents simultaneously stretches engineering bandwidth thin and produces zero measurable ROI within the fiscal quarter.',
      firstPrinciplesSolution:
        'Run a cross-functional process audit to isolate the single highest-volume repetitive routine (appointment rescheduling), build a prototype via the Trailhead Quick Start pattern, and enforce a 30-day measurement plan.',
      measurableOutcome:
        'The contained pilot resolves 68% of rescheduling requests autonomously in 30 days, providing the hard ROI proof needed to fund three additional agents.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch21-q1',
        scenarioPrompt:
          'An existing Salesforce Marketing Cloud customer wants to start using AI immediately without waiting for a custom engineering project. Which set of built-in capabilities does Chapter 21 note they likely already have access to once enabled?',
        options: [
          {
            label: 'A',
            text: 'Automated send-time optimization, personalized web/app recommendations, segment generation, behavior scoring, key-account identification, and email/subject-line writing.',
            isCorrect: true,
            explanation: 'Chapter 21 highlights these exact built-in Marketing Cloud AI features that perform agent-like tasks once enabled.',
          },
          {
            label: 'B',
            text: 'Autonomous warehouse robotics controllers and self-driving delivery fleet routing.',
            isCorrect: false,
            explanation: 'These physical robotics capabilities are not built-in Marketing Cloud features.',
          },
          {
            label: 'C',
            text: 'Custom C++ kernel compilers and bare-metal GPU cluster schedulers.',
            isCorrect: false,
            explanation: 'Salesforce abstracts infrastructure via Hyperforce rather than exposing bare-metal compilers in Marketing Cloud.',
          },
          {
            label: 'D',
            text: 'Automated corporate tax litigation and patent filing agents.',
            isCorrect: false,
            explanation: 'These are not native Marketing Cloud features described in Chapter 21.',
          },
        ],
      },
      {
        id: 'af-ch21-q2',
        scenarioPrompt:
          'Why does Chapter 21 recommend starting an Agentforce journey by examining prebuilt agents before building custom ones from scratch?',
        options: [
          {
            label: 'A',
            text: 'Because Agentforce prohibits customers from modifying topics or instructions on custom agents.',
            isCorrect: false,
            explanation: 'Both prebuilt and custom agents can be adapted with custom topics, instructions, and actions.',
          },
          {
            label: 'B',
            text: 'Because prebuilt agents cover the most common initial applications validated across many customers, can be adapted to your business, and are backed by Salesforce and partner experience.',
            isCorrect: true,
            explanation: 'Prebuilt agents reduce implementation risk by packaging proven cross-customer patterns with experienced implementation support.',
          },
          {
            label: 'C',
            text: 'Because prebuilt agents bypass the Einstein Trust Layer and run without data governance.',
            isCorrect: false,
            explanation: 'All Agentforce agents run through the Einstein Trust Layer for security and governance.',
          },
          {
            label: 'D',
            text: 'Because Trailhead only documents prebuilt agents and has no tutorials for building an agent.',
            isCorrect: false,
            explanation: 'Trailhead includes a dedicated Quick Start project to build your own first agent.',
          },
        ],
      },
      {
        id: 'af-ch21-q3',
        scenarioPrompt:
          'When a cross-functional team sits down to ideate custom Agentforce applications across internal work processes, what specific operational signature should they look for?',
        options: [
          {
            label: 'A',
            text: 'One-off annual board strategy retreats where every decision is unprecedented.',
            isCorrect: false,
            explanation: 'Rare, unstructured executive decisions are poor candidates for initial routine automation.',
          },
          {
            label: 'B',
            text: 'Areas with repeated or predictable customer-facing routines where many people do the same thing day after day.',
            isCorrect: true,
            explanation: 'High-volume, predictable routines executed repeatedly by many workers represent the highest-yield automation targets.',
          },
          {
            label: 'C',
            text: 'Legacy servers that have zero access to customer data or APIs.',
            isCorrect: false,
            explanation: 'Agents require data grounding and executable actions to deliver value.',
          },
          {
            label: 'D',
            text: 'Processes where performance cannot be measured or tracked over time.',
            isCorrect: false,
            explanation: 'Chapter 21 stresses using a measurement plan because additional investment requires proof of value.',
          },
        ],
      },
      {
        id: 'af-ch21-q4',
        scenarioPrompt:
          'A lead systems architect wants to study the technical internals of the Atlas Reasoning Engine and the Salesforce platform transformation. Which resources from Chapter 21 should you recommend?',
        options: [
          {
            label: 'A',
            text: 'The Salesforce Engineering blog (specifically the interview with Phil Mui, "godfather of the Atlas Reasoning Engine") and the CTO platform transformation guide on architect.salesforce.com.',
            isCorrect: true,
            explanation: 'Chapter 21 specifically cites `engineering.salesforce.com/blog` (and Phil Mui’s Atlas Reasoning Engine interview) plus `architect.salesforce.com/fundamentals/platform-transformation`.',
          },
          {
            label: 'B',
            text: 'Only the Roku TV app homepage without reading any technical documentation.',
            isCorrect: false,
            explanation: 'Salesforce+ on Roku is great for streaming events.',
          },
          {
            label: 'C',
            text: 'The 1964 open letter to President Lyndon Johnson archived at Oregon State University.',
            isCorrect: false,
            explanation: 'That historical letter was cited in Chapter 20 regarding automation fears, not Atlas architecture.',
          },
          {
            label: 'D',
            text: 'A third-party textbook on 1990s relational database normalization.',
            isCorrect: false,
            explanation: 'Chapter 21 directs technical readers to official Salesforce developer, engineering, and architect portals.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'af-ch21-fc1',
        category: 'foundation',
        front: 'What hands-on Trailhead resource lets you build your first Agentforce agent during a lunch break?',
        back: 'The free "Quick Start: Build Your First Agent with Agentforce" project on Salesforce Trailhead.',
        mentalHook: 'Lunch-Break Agent: Trailhead Quick Start project.',
      },
      {
        id: 'af-ch21-fc2',
        category: 'architecture',
        front: 'Who is described in Chapter 21 Note 1 as the "godfather of the Atlas Reasoning Engine" featured on the Salesforce Engineering blog?',
        back: 'Phil Mui, whose interview unpacks the architecture inside the brain of Agentforce.',
        mentalHook: 'Phil Mui = Godfather of the Atlas Reasoning Engine.',
      },
      {
        id: 'af-ch21-fc3',
        category: 'adaptation',
        front: 'What are six examples of built-in AI features inside Marketing Cloud that perform agent-like tasks once enabled?',
        back: 'Send-time optimization, personalized web/app recommendations, copy insights, segment generation, behavior scoring, key-account identification, and email/subject-line writing.',
        mentalHook: 'Marketing Cloud Native AI: Send-time, Recs, Segments, Scoring, Key Accounts, Copy.',
      },
      {
        id: 'af-ch21-fc4',
        category: 'optimization',
        front: 'What is the recommended rollout philosophy for deploying initial Agentforce experiments?',
        back: 'Start small, land, and expand: run a small number of contained, clearly defined experiments in high-potential areas backed by a formal measurement plan.',
        mentalHook: 'Start Small -> Land (with Measurement Plan) -> Expand (with Proof of Value).',
      },
      {
        id: 'af-ch21-fc5',
        category: 'evaluation',
        front: 'Where can visual learners stream on-demand Dreamforce and Agentforce World Tour sessions for free?',
        back: 'On Salesforce+ (`salesforce.com/plus`, available on Roku and other devices) and the Agentforce 2.0 YouTube playlist.',
        mentalHook: 'Salesforce+ & YouTube 2.0 Playlist = Free visual streaming enablement.',
      },
      {
        id: 'af-ch21-fc6',
        category: 'data',
        front: 'What specific workflow pattern should cross-functional teams hunt for during internal agentic ideation?',
        back: 'Repeated or predictable customer-facing routines where many employees perform the exact same task day after day.',
        mentalHook: 'Many people + same daily customer routine = prime agent target.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'af-ch21-feyn1',
        conceptTitle: 'The 4-Step Agentforce Getting-Started Playbook',
        prompt:
          'Explain to a newly appointed Chief Digital Officer the exact sequence of steps recommended in Chapter 21 to take an organization from zero Agentforce usage to a scaled deployment.',
        rubricChecklist: [
          'Starts with common, easier-to-implement scenarios using adaptable prebuilt agents backed by Salesforce/partner experience.',
          'Includes enabling built-in AI features already present in existing clouds (e.g., Marketing Cloud send-time optimization, segmentation, scoring).',
          'Describes cross-functional process ideation targeting repeated, predictable customer-facing routines.',
          'Enforces the "start small, land, and expand" rule using contained experiments and a formal measurement plan to prove value.',
        ],
        modelExplanation:
          'Rather than launching a risky custom project from scratch, start by turning on the built-in AI features you already own—such as Marketing Cloud’s send-time optimization, behavior scoring, and segment generation—and evaluating adaptable prebuilt Agentforce agents that have already been proven across many customers. Next, convene a cross-functional team to audit internal processes for repeated, predictable customer-facing routines where many employees do the same task daily. Finally, follow a "start small, land, and expand" methodology: run a few contained, clearly defined pilots in the highest-potential areas and track them with a strict measurement plan so hard proof of value funds your broader expansion.',
      },
      {
        id: 'af-ch21-feyn2',
        conceptTitle: 'Role-Based Enablement Architecture',
        prompt:
          'Describe how you would structure a self-paced learning curriculum for executives, admins, and systems architects using the free resources cataloged in Chapter 21.',
        rubricChecklist: [
          'Routes executives and general audiences to the Agentforce portal (for live demos), the Salesforce blog, and Salesforce+ streaming sessions.',
          'Assigns admins and practitioners to the free Trailhead "Get Ready for Agentforce" trail and the lunch-break "Quick Start" agent-building project.',
          'Directs developers to `developer.salesforce.com/Agentforce-workshop` and the Agentforce 2.0 YouTube playlist.',
          'Points systems architects and engineers to `architect.salesforce.com` (CTO platform transformation) and `engineering.salesforce.com/blog` (Phil Mui’s Atlas Reasoning Engine interview).',
        ],
        modelExplanation:
          'An effective enablement program matches each role to its required technical depth. Business sponsors start on the Agentforce website to book a live demo, read the general blog, and stream Dreamforce case studies on Salesforce+. Admins jump directly into Trailhead to complete the "Get Ready for Agentforce" trail and build a working prototype during their lunch break via the Quick Start project. Meanwhile, developers work through the Agentforce Workshop portal and 2.0 YouTube tutorials, while systems architects study the CTO’s platform transformation guide on `architect.salesforce.com` and Phil Mui’s deep dive into the Atlas Reasoning Engine on the Salesforce Engineering blog.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch21-n1',
        label: 'Land-and-Expand Pilot Protocol',
        category: 'optimization',
        chapterNumber: 21,
        importance: 1,
        definition:
          'The rollout discipline of starting with a small number of contained, clearly defined experiments paired with a measurement plan before scaling.',
        formulaOrRule: 'Contained Experiment + Measurement Plan -> Proof of Value -> Expansion',
        whyItMatters:
          'Prevents unmeasured enterprise sprawl and secures executive budget through empirical ROI evidence.',
      },
      {
        id: 'af-ch21-n2',
        label: 'Prebuilt Agent Adaptation',
        category: 'architecture',
        chapterNumber: 21,
        importance: 1,
        definition:
          'Deploying out-of-the-box Agentforce agents for common scenarios and tailoring their topics and actions with Salesforce and partner expertise.',
        whyItMatters:
          'Delivers the fastest time-to-value by building on patterns already validated across numerous enterprise deployments.',
      },
      {
        id: 'af-ch21-n3',
        label: 'Built-In Cloud AI Enablement',
        category: 'adaptation',
        chapterNumber: 21,
        importance: 2,
        definition:
          'Activating native agent-like features already embedded in Salesforce products, such as Marketing Cloud send-time optimization, scoring, and segmentation.',
        whyItMatters:
          'Captures immediate automation value from existing software licenses with zero custom development.',
      },
      {
        id: 'af-ch21-n4',
        label: 'Cross-Functional Routine Triage',
        category: 'evaluation',
        chapterNumber: 21,
        importance: 2,
        definition:
          'A collaborative process review that inspects internal workflows to locate repeated, predictable customer-facing routines performed daily by many staff.',
        whyItMatters:
          'Grounds custom agent ideation in actual high-volume operational bottlenecks rather than speculative wish-lists.',
      },
      {
        id: 'af-ch21-n5',
        label: 'Trailhead Quick-Start Sandbox',
        category: 'foundation',
        chapterNumber: 21,
        importance: 3,
        definition:
          'Salesforce’s free self-guided learning environment where practitioners can build a working first agent during a single lunch break.',
        whyItMatters:
          'Eliminates the skills barrier by giving every builder immediate hands-on experience with Agent Builder.',
      },
      {
        id: 'af-ch21-n6',
        label: 'Atlas Engineering & Architect Portals',
        category: 'architecture',
        chapterNumber: 21,
        importance: 3,
        definition:
          'Technical documentation channels (`engineering.salesforce.com` and `architect.salesforce.com`) detailing platform transformation and Phil Mui’s Atlas Reasoning Engine.',
        whyItMatters:
          'Equips technical architects and developers with the first-principles system mechanics needed for enterprise integration.',
      },
    ],
    edges: [
      {
        source: 'af-ch21-n5',
        target: 'af-ch21-n2',
        relationship: 'prerequisite_for',
        explanation:
          'Completing the Trailhead Quick Start equips admins with the practical fluency required to configure and adapt prebuilt agents.',
      },
      {
        source: 'af-ch21-n3',
        target: 'af-ch21-n2',
        relationship: 'part_of',
        explanation:
          'Enabling built-in cloud AI features and deploying prebuilt agents form the low-friction foundation of the adoption ladder.',
      },
      {
        source: 'af-ch21-n4',
        target: 'af-ch21-n1',
        relationship: 'prerequisite_for',
        explanation:
          'Cross-functional triage identifies the high-potential, repetitive customer routines that become contained Land-and-Expand pilots.',
      },
      {
        source: 'af-ch21-n6',
        target: 'af-ch21-n1',
        relationship: 'optimizes',
        explanation:
          'Deep architectural understanding of the Atlas Reasoning Engine and platform transformation ensures contained pilots are engineered for enterprise scale.',
      },
      {
        source: 'af-ch21-n2',
        target: 'af-ch21-n1',
        relationship: 'optimizes',
        explanation:
          'Starting with field-tested prebuilt agents maximizes the probability of pilot success during the initial proof-of-value measurement phase.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 2,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 21 learning resources (Agentforce site, Trailhead Get Ready & Quick Start, Salesforce+, YouTube Agentforce 2.0 playlist, Developer Workshop, Salesforce Blog, Engineering Blog & Phil Mui Atlas interview, Architect Platform Transformation) and 4-part getting-started methodology.',
  },
};

export const afCh22Mastery: ChapterMastery = {
  chapterNumber: 22,
  chapterId: 'ch22',
  title: 'So What Was This Book All About, Anyway?',
  subtitle: 'End-to-End Architectural Synthesis of the Agentforce Digital Labor Stack (Chapters 1–21)',
  readingTimeMinutes: 6,
  sourceWordCount: 1790,
  executiveThesis:
    'Enterprise-grade agentic AI requires unifying three exclusive Agentforce pillars—the Atlas Reasoning Engine, Agent Builder, and Testing Center—on top of Data Cloud, RAG, and the Einstein Trust Layer. Treating agents as governed, transparent units of digital labor rather than faux humans enables organizations to move beyond fragile open-source experiments and capture compound productivity gains across service, sales, marketing, commerce, and HR.',
  paradigmShift: {
    oldWay:
      'Stitching together rigid declarative chatbots or ungrounded open-source LLM wrappers that leak enterprise data, impersonate humans, and justify ROI solely on call deflection.',
    newWay:
      'Deploying an integrated digital labor platform where Atlas iteratively retrieves, plans, evaluates, and refines actions grounded in zero-copy Data Cloud context and protected by the Einstein Trust Layer.',
    whyItChanged:
      'Enterprise reliability demands unified infrastructure (Hyperforce), toxicity and zero-retention masking, natural-language topic/action orchestration, sandboxed batch testing, and multi-dimensional ROI governance.',
  },
  customDiagrams: [
    {
      id: 'af-ch22-diag1',
      title: 'The Unified Agentforce Enterprise Architecture Stack',
      subtitle: 'How the 3 exclusive Agentforce pillars interlock with Data Cloud, RAG, and the Einstein Trust Layer',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#F8FAFC" rx="12" />
  <text x="32" y="36" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#111827">END-TO-END AGENTFORCE ARCHITECTURAL STACK (CHAPTERS 1–15 SYNTHESIS)</text>
  <text x="32" y="54" font-family="JetBrains Mono, monospace" font-size="11" fill="#4B5563">From Hyperforce &amp; Zero-Copy Data Cloud to Atlas Reasoning and Multi-Channel Execution</text>

  <!-- Top Layer: Functional Labor & Channels -->
  <rect x="32" y="72" width="736" height="62" rx="8" fill="#059669" />
  <text x="48" y="96" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#D1FAE5">LAYER 04: DIGITAL LABOR FUNCTIONS &amp; CHANNELS (CH 4, 14, 15)</text>
  <text x="48" y="118" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">Service • Sales (SDR/Coach) • Marketing • Commerce • HR (Workday) — Topics + Instructions + Flows</text>

  <!-- Middle-Upper Layer: The 3 Exclusive Agentforce Pillars -->
  <rect x="32" y="152" width="234" height="104" rx="8" fill="#111827" stroke="#EA580C" stroke-width="2.5" />
  <text x="46" y="176" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#EA580C">PILLAR 1: ATLAS ENGINE (CH 7, 11)</text>
  <text x="46" y="196" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Retrieve → Plan → Evaluate → Refine</text>
  <text x="46" y="216" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">Interprets intent, verifies sufficiency</text>
  <text x="46" y="232" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">&amp; orchestrates multi-step LLM actions</text>

  <rect x="283" y="152" width="234" height="104" rx="8" fill="#111827" stroke="#2563EB" stroke-width="2.5" />
  <text x="297" y="176" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#60A5FA">PILLAR 2: AGENT BUILDER (CH 7, 12)</text>
  <text x="297" y="196" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Natural-Language Control</text>
  <text x="297" y="216" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">Works with Prompt Builder, Agent</text>
  <text x="297" y="232" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">Creator &amp; native Salesforce Flows</text>

  <rect x="534" y="152" width="234" height="104" rx="8" fill="#111827" stroke="#059669" stroke-width="2.5" />
  <text x="548" y="176" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#34D399">PILLAR 3: TESTING CENTER (CH 7, 13)</text>
  <text x="548" y="196" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Sandbox &amp; Batch Verification</text>
  <text x="548" y="216" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">Automates evaluation in Data Cloud</text>
  <text x="548" y="232" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">sandboxes &amp; monitors live usage</text>

  <!-- Middle-Lower Layer: Trust Layer & Grounding -->
  <rect x="32" y="274" width="736" height="54" rx="8" fill="#FFFFFF" stroke="#DC2626" stroke-width="2" />
  <text x="48" y="296" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#DC2626">LAYER 02: EINSTEIN TRUST LAYER &amp; RAG GROUNDING (CH 8, 10)</text>
  <text x="48" y="314" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#111827">Data Masking • Toxicity/Bias Detection • Zero Data Leakage • Audit Logs • Customer RAG Context</text>

  <!-- Bottom Layer: Data Cloud & Hyperforce -->
  <rect x="32" y="344" width="736" height="54" rx="8" fill="#2563EB" />
  <text x="48" y="366" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#DBEAFE">LAYER 01: HYPERFORCE &amp; DATA CLOUD FOUNDATION (CH 5, 7, 9)</text>
  <text x="48" y="384" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">Public Cloud Infrastructure • Vector Database • Unstructured Data • Zero-Copy Network (Snowflake)</text>

  <!-- Vertical Flow Lines -->
  <path d="M 149 274 L 149 256" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 400 274 L 400 256" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 651 274 L 651 256" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 400 152 L 400 134" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
</svg>`,
      bierutCaption:
        'Agentforce elevates raw LLMs into enterprise digital labor by sandwiching Atlas, Agent Builder, and Testing Center between Data Cloud and functional channels.',
      annotations: [
        {
          step: '01',
          label: 'The Three Exclusive Pillars',
          explanation:
            'Chapter 7 defines the three components unique to Agentforce: the Atlas Reasoning Engine, Agent Builder (with Prompt Builder/Agent Creator), and Testing Center.',
        },
        {
          step: '02',
          label: 'Data Cloud & Trust Substrate',
          explanation:
            'Data Cloud hosts the Einstein Trust Layer audit logs, vector database, zero-copy integrations (like Snowflake), and RAG grounding.',
        },
        {
          step: '03',
          label: 'Natural-Language Skills',
          explanation:
            'Giving an agent a new skill requires defining topics, instructions/guardrails, and actions powered by native Salesforce Flows.',
        },
      ],
    },
    {
      id: 'af-ch22-diag2',
      title: 'The Enterprise Governance, Anthropomorphism, and Full-Spectrum ROI Loop',
      subtitle: 'Synthesizing the strategic deployment laws from Chapters 16 through 21',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#F8FAFC" rx="12" />
  <text x="32" y="38" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#111827">STRATEGIC DEPLOYMENT, GOVERNANCE &amp; VALUE FLYWHEEL (CH 16–21)</text>
  <text x="32" y="58" font-family="JetBrains Mono, monospace" font-size="11" fill="#4B5563">From Use-Case Ideation and Transparent Non-Human Design to Multi-Dimensional ROI</text>

  <!-- Node 1: Ideation Patterns -->
  <rect x="32" y="96" width="340" height="124" rx="8" fill="#FFFFFF" stroke="#2563EB" stroke-width="2" />
  <text x="48" y="122" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#2563EB">01. IDEATION PATTERNS (CH 16)</text>
  <text x="48" y="144" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#111827">Beyond Basic FAQ Deflection</text>
  <text x="48" y="164" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Early adopters deploy agents across sales coaching,</text>
  <text x="48" y="180" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">personal shopping, campaign creation &amp; student</text>
  <text x="48" y="196" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">application guidance using codified task patterns.</text>

  <!-- Node 2: Non-Anthropomorphic Stance -->
  <rect x="428" y="96" width="340" height="124" rx="8" fill="#111827" />
  <text x="444" y="122" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#EA580C">02. ANTI-ANTHROPOMORPHISM (CH 17)</text>
  <text x="444" y="144" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Unit of Labor, Never a Faux Person</text>
  <text x="444" y="164" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">Avoid the "Her / SimOne" uncanny valley trap;</text>
  <text x="444" y="180" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">disclose AI identity upfront and frame the agent</text>
  <text x="444" y="196" font-family="Inter, sans-serif" font-size="11" fill="#D1D5DB">strictly as a reliable task-to-be-done engine.</text>

  <!-- Node 3: Governance Policies -->
  <rect x="32" y="256" width="340" height="124" rx="8" fill="#FFFFFF" stroke="#DC2626" stroke-width="2" />
  <text x="48" y="282" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#DC2626">03. ENTERPRISE GOVERNANCE (CH 18)</text>
  <text x="48" y="304" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#111827">Policies, Teams &amp; Data Access Controls</text>
  <text x="48" y="324" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">Establish cross-functional legal and compliance</text>
  <text x="48" y="340" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">guardrails before embedding agents deeply into</text>
  <text x="48" y="356" font-family="Inter, sans-serif" font-size="11" fill="#4B5563">enterprise customer records and workflows.</text>

  <!-- Node 4: Nuanced ROI Business Case -->
  <rect x="428" y="256" width="340" height="124" rx="8" fill="#059669" />
  <text x="444" y="282" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#D1FAE5">04. FULL-SPECTRUM ROI &amp; HUMANS (CH 19–20)</text>
  <text x="444" y="304" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Efficiency + Productivity + Hybrid Growth</text>
  <text x="444" y="324" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">Move past simple call deflection to measure</text>
  <text x="444" y="340" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">cost savings, revenue performance, and hybrid</text>
  <text x="444" y="356" font-family="Inter, sans-serif" font-size="11" fill="#ECFDF5">human-AI workforce productivity expansion.</text>

  <!-- Connectors -->
  <path d="M 372 158 L 428 158" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 598 220 L 202 256" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 372 318 L 428 318" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
</svg>`,
      bierutCaption:
        'Sustainable agentic transformation combines codified ideation, transparent non-human framing, upfront legal governance, and productivity-plus-efficiency ROI.',
      annotations: [
        {
          step: '01',
          label: 'Anti-Anthropomorphism Rule',
          explanation:
            'Chapter 17 warns against over-humanizing agents like sci-fi movies (Her, SimOne);',
        },
        {
          step: '02',
          label: 'Governance Before Deep Access',
          explanation:
            'Chapter 18 mandates formal governance teams, policies, and permission boundaries as agents gain write access to enterprise data.',
        },
        {
          step: '03',
          label: 'Beyond Call Deflection ROI',
          explanation:
            'Chapter 19 expands business cases from simple service case deflection to dual efficiency (cost savings) and productivity (revenue/output performance).',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'af-ch22-mm1',
      name: 'The Declarative-to-Reasoning Leap',
      tagline: 'Chatbots follow pre-wired decision trees; agents interpret intent, plan, evaluate, and act',
      naiveIntuition:
        'An AI agent is simply a traditional customer-service chatbot upgraded with a more fluent conversational tone.',
      firstPrinciplesReality:
        'Traditional bots trap users in rigid, pre-defined declarative flows.',
      howToApply:
        'Deploy standard bots or copilots for simple single-turn lookups, but require Agentforce whenever workflows demand nuanced communication, multi-step planning, and autonomous action.',
    },
    {
      id: 'af-ch22-mm2',
      name: 'The Platform-Over-Play-Button Law',
      tagline: 'Pulling open-source weights yields an expensive experiment; enterprise agents require a trust and data substrate',
      naiveIntuition:
        'A company can operationalize enterprise AI agents simply by calling a startup API or downloading open-source software and pressing Play.',
      firstPrinciplesReality:
        'Production agents fail without unified infrastructure (Hyperforce), zero-copy data grounding (Data Cloud + RAG), and the Einstein Trust Layer to enforce masking, toxicity filtering, and zero data leakage.',
      howToApply:
        'Verify that every agent deployment runs atop Data Cloud audit logs, RAG grounding, and sandboxed Testing Center verification before touching live customer records.',
    },
    {
      id: 'af-ch22-mm3',
      name: 'The Unit-of-Labor Framing',
      tagline: 'Design agents as transparent task engines rather than synthetic human personas',
      naiveIntuition:
        'Giving an AI agent a simulated human backstory and concealing its artificial nature builds stronger customer rapport.',
      firstPrinciplesReality:
        'Over-humanizing agents triggers distrust; customers are far more comfortable when an agent discloses its AI identity immediately and operates strictly as a reliable unit of labor.',
      howToApply:
        'Configure every customer-facing agent greeting to state clearly that the user is interacting with an AI assistant scoped to solve specific tasks.',
    },
  ],
  deepSections: [
    {
      id: 'af-ch22-sec1',
      sectionNumber: '22.1',
      title: 'Why Digital Labor Requires an Enterprise Platform',
      subtitle: 'Synthesizing Chapters 1–6: Natural-language skills, functional scope, and the chatbot-to-agent boundary',
      coreMechanism:
        'From its subterranean San Francisco kickoff after Dreamforce, Agentforce was architected as a digital labor platform to solve workplace labor shortages and accelerate enterprise growth. Unlike fragile open-source experiments or standalone startup wrappers, Agentforce runs directly on the Salesforce platform so businesses can deploy out-of-the-box agents or build custom ones safely. If a practitioner can describe a job clearly in natural language, an agent can be configured to execute it by defining three elements: topic areas, natural-language instructions and guardrails, and grounded data sources paired with executable actions.\n\nThis architecture separates true agents from legacy chatbots and copilots. Whereas traditional bots rely on rigid, pre-defined declarative conversational flows, Agentforce agents communicate naturally, formulate multi-step plans, and take autonomous actions across order and shipping management, marketing, product information, account management, scheduling, and escalation.',
      keyTakeaways: [
        'Giving an Agentforce agent a new skill requires defining its topic areas, natural-language instructions and guardrails, and its data sources and actions.',
        'Traditional chatbots rely on pre-defined declarative conversational flows, whereas Agentforce agents communicate, plan, and act across nuanced multi-step scenarios.',
      ],
      commonPitfalls: [
        'Assuming enterprise AI is as simple as pulling open-source software and pressing Play without underlying security, data, and orchestration infrastructure.',
        'Using rigid declarative chatbots for complex customer journeys like order modification, inventory triage, or schedule management.',
      ],
    },
    {
      id: 'af-ch22-sec2',
      sectionNumber: '22.2',
      title: 'The Core Triumvirate and the Trust-Data Substrate',
      subtitle: 'Synthesizing Chapters 7–13: Atlas, Agent Builder, Testing Center, Einstein Trust Layer, Data Cloud, and RAG',
      coreMechanism:
        'Three architectural components belong exclusively to Agentforce: the Atlas Reasoning Engine (which interprets requests, determines intent, plans, and initiates action), Agent Builder (which pairs with Prompt Builder and Agent Creator to assemble agents and invoke native Salesforce Flows), and the Testing Center (which automates sandbox evaluation and usage monitoring). Beneath these three pillars sits Hyperforce infrastructure and Data Cloud—accessible at zero initial cost for many customers via Salesforce Foundations or Marketing Cloud Growth Edition.\n\nData Cloud is mandatory because it hosts the Einstein Trust Layer, audit logs, vector database, and zero-copy network needed for retrieval-augmented generation (RAG). While the Trust Layer prevents data leakage to external LLMs through data masking, toxicity and bias detection, and full auditability, RAG grounds LLM outputs in live customer and enterprise records before the Atlas Reasoning Engine executes its iterative loop of retrieving, planning, evaluating, and refining.',
      keyTakeaways: [
        'The three components exclusive to Agentforce are the Atlas Reasoning Engine, Agent Builder, and the Testing Center.',
        'Data Cloud and the Einstein Trust Layer elevate LLMs to enterprise readiness by providing RAG grounding, vector search, zero-copy access, data masking, toxicity/bias detection, and audit logs.',
      ],
      commonPitfalls: [
        'Connecting LLMs directly to enterprise workflows without the Einstein Trust Layer, risking customer data leakage and ungrounded hallucinations.',
        'Deploying newly built agents directly to production channels without validating them first in Data Cloud and Agentforce Testing Center sandboxes.',
      ],
    },
    {
      id: 'af-ch22-sec3',
      sectionNumber: '22.3',
      title: 'Functional Deployment, Anti-Anthropomorphism, Governance, and Full-Spectrum ROI',
      subtitle: 'Synthesizing Chapters 14–21: Prebuilt/custom agents, the Unit-of-Labor rule, legal guardrails, and business value',
      coreMechanism:
        'Just like human organizations, agentic labor divides into specialized functional domains across service, sales, marketing, commerce, and HR. Organizations can deploy these prebuilt agents, build custom channel-embedded agents from scratch (Chapter 15), or mine early-adopter patterns ranging from personal shopping to student university applications (Chapter 16).\n\nAcross every deployment, four strategic governance rules apply. First, never over-humanize an agent: disclose upfront that customers are interacting with AI and treat the agent strictly as a unit of labor rather than a faux person (Chapter 17). Second, establish clear legal governance teams and policies as agents gain deeper enterprise data access (Chapter 18). Third, expand ROI business cases beyond simple call deflection to capture both cost-saving efficiency and revenue-generating productivity (Chapter 19) while guiding human workers into higher-value hybrid roles (Chapters 20–21).',
      formulas: [
        {
          name: 'Full-Spectrum Agentic Business Case Value',
          expression: 'V_{total} = \\Delta C_{deflection} + \\Delta E_{ops} + \\Delta P_{growth} - C_{platform}',
          intuition:
            'While initial ROI calculations rely on service case deflection because it is easy to estimate, total enterprise value combines call deflection with cross-process cost savings and revenue-generating workforce productivity.',
          variables: [
            { symbol: '\\Delta C_{deflection}', meaning: 'Direct service cost reduction from automated case deflection' },
            { symbol: '\\Delta E_{ops}', meaning: 'Broader operational efficiency savings across internal workflows' },
            { symbol: '\\Delta P_{growth}', meaning: 'Productivity lift from faster sales cycles, higher conversion, and hybrid worker output' },
            { symbol: 'C_{platform}', meaning: 'Licensing, Data Cloud consumption, and governance implementation cost' },
          ],
          workedExample:
            'A deployment saving $400K in service case deflection (\\Delta C_{deflection}), $250K in ops admin (\\Delta E_{ops}), and adding $900K in SDR pipeline conversion (\\Delta P_{growth}) against $300K cost yields $1.25M net value.',
        },
      ],
      keyTakeaways: [
        'Avoid over-humanizing agents: customers are more comfortable knowing they are dealing with AI from the start, so frame every agent as a unit of labor or task-to-be-done.',
        'A complete Agentforce business case extends beyond simple customer-service case deflection to incorporate broader efficiency and productivity.',
      ],
      commonPitfalls: [
        'Designing deceptive anthropomorphic personas that erode customer trust instead of transparent task-focused AI disclosure.',
        'Evaluating Agentforce exclusively on call-center deflection while ignoring sales, commerce, marketing, and hybrid worker productivity gains.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Conversational Paradigm & Platform Architecture Comparison',
      description: 'Synthesizing the book’s architectural distinctions across declarative bots, standalone DIY wrappers, and Agentforce.',
      headers: ['Architectural Dimension', 'Legacy Declarative Chatbot', 'DIY Open-Source / Startup Wrapper', 'Agentforce Enterprise Platform'],
      rows: [
        ['Conversational & Planning Model', 'Rigid, pre-defined declarative tree', 'Single-turn prompt or fragile script', 'Atlas loop: Retrieve, Plan, Evaluate, Refine'],
        ['Data Grounding & Memory', 'Static canned FAQ responses', 'Siloed copies and manual ETL pipelines', 'Data Cloud vector DB, zero-copy & RAG'],
        ['Enterprise Security & Trust', 'Rule-based keyword filters only', 'High risk of LLM data leakage', 'Einstein Trust Layer masking, toxicity & audit'],
        ['Action & Testing Infrastructure', 'Hardcoded webhook triggers', 'Manual ad-hoc prompt debugging', 'Agent Builder Flows + Testing Center sandboxes'],
      ],
      verdictRule:
        'Choose Agentforce whenever workflows require multi-step reasoning, zero-copy enterprise RAG grounding, Einstein Trust Layer protection, and governed Salesforce Flow execution.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'af-ch22-scen1',
      title: 'Replacing a Fragile Open-Source Bot with the Full Agentforce Stack',
      roleAndContext: 'Chief Technology Officer at a global e-commerce retailer after an ungrounded DIY chatbot hallucinated refund policies.',
      symptomOrFailure:
        'A custom open-source bot built by an external startup leaked PII into third-party model logs and failed whenever customers asked to modify multi-item shipments.',
      naiveFixAndWhyItFails:
        'Adding regex guardrails to the standalone wrapper fails because it still lacks zero-copy access to live inventory/order systems and formal sandbox testing.',
      firstPrinciplesSolution:
        'Migrate to Agentforce anchored on Data Cloud and the Einstein Trust Layer, using RAG for policy grounding, Atlas for multi-step order modification planning, Salesforce Flows for action execution, and Testing Center sandboxes for pre-release validation.',
      measurableOutcome:
        'Eliminates external PII leakage 100%, resolves 74% of complex order modifications autonomously, and cuts pre-production regression testing time by 80%.',
    },
    {
      id: 'af-ch22-scen2',
      title: 'Reframing Persona Design and Expanding the Executive ROI Business Case',
      roleAndContext: 'VP of Digital Transformation presenting a phase-two Agentforce expansion budget to the CFO and General Counsel.',
      symptomOrFailure:
        'Phase-one adoption stalled because customers resented a faux-human chatbot persona that hid its AI identity, and the CFO questioned whether call deflection alone justified enterprise scaling.',
      naiveFixAndWhyItFails:
        'Writing wittier small-talk prompts worsens uncanny-valley distrust and leaves legal and financial stakeholders unconvinced.',
      firstPrinciplesSolution:
        'Redesign the agent greeting for immediate AI transparency as a task-focused unit of labor (Ch 17), establish a formal AI governance council (Ch 18), and present a multi-dimensional ROI model combining service deflection with SDR pipeline productivity (Ch 19).',
      measurableOutcome:
        'Customer satisfaction rises 28 points after transparent AI disclosure, legal signs off on enterprise data access, and the CFO approves a 3x expansion based on combined efficiency and revenue productivity.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch22-q1',
        scenarioPrompt:
          'In Chapter 22’s architectural synthesis (recapping Chapter 7), which three components belong exclusively to Agentforce and it alone?',
        options: [
          {
            label: 'A',
            text: 'Hyperforce, Snowflake, and Workday.',
            isCorrect: false,
            explanation: 'Hyperforce is underlying Salesforce platform infrastructure, while Snowflake and Workday are partner integrations.',
          },
          {
            label: 'B',
            text: 'The Atlas Reasoning Engine, Agent Builder (working with Prompt Builder and Agent Creator), and the Testing Center.',
            isCorrect: true,
            explanation: 'Chapter 22 explicitly identifies Atlas Reasoning Engine, Agent Builder, and Testing Center as the three components unique to Agentforce.',
          },
          {
            label: 'C',
            text: 'Marketing Cloud, Sales Cloud, and Commerce Cloud.',
            isCorrect: false,
            explanation: 'These are core Salesforce functional clouds rather than the three exclusive internal components of Agentforce.',
          },
          {
            label: 'D',
            text: 'Trailhead, Salesforce+, and the Dreamforce keynote stage.',
            isCorrect: false,
            explanation: 'These are enablement and event channels covered in Chapter 21.',
          },
        ],
      },
      {
        id: 'af-ch22-q2',
        scenarioPrompt:
          'Why does Chapter 22 emphasize that some version of Data Cloud is required to run Agentforce in the enterprise?',
        options: [
          {
            label: 'A',
            text: 'Because Data Cloud hosts the Einstein Trust Layer (including audit logs), provides a vector database and zero-copy network for unstructured/external data, and enables RAG grounding.',
            isCorrect: true,
            explanation: 'Data Cloud supplies the Trust Layer audit logs, vector database, zero-copy integrations, and RAG grounding required by agents.',
          },
          {
            label: 'B',
            text: 'Because Data Cloud replaces all human employees in legal and compliance departments automatically.',
            isCorrect: false,
            explanation: 'Chapter 18 and 22 emphasize that human legal and governance teams must define policies and oversight.',
          },
          {
            label: 'C',
            text: 'Because Data Cloud is the only tool capable of rendering CSS stylesheets on company websites.',
            isCorrect: false,
            explanation: 'Data Cloud is a unified data, vector, zero-copy, and trust substrate, not a front-end CSS renderer.',
          },
          {
            label: 'D',
            text: 'Because Data Cloud forces companies to manually copy and duplicate all Snowflake tables every night.',
            isCorrect: false,
            explanation: 'Data Cloud provides zero-copy network integrations with sources like Snowflake to avoid data duplication.',
          },
        ],
      },
      {
        id: 'af-ch22-q3',
        scenarioPrompt:
          'How does the Atlas Reasoning Engine orchestrate the interaction between the user and the LLM before putting its plans into action?',
        options: [
          {
            label: 'A',
            text: 'By matching user keywords against a single hardcoded if-then decision tree without calling an LLM.',
            isCorrect: false,
            explanation: 'Hardcoded declarative trees describe legacy chatbots, not the Atlas Reasoning Engine.',
          },
          {
            label: 'B',
            text: 'By breaking the interaction into steps—retrieving, planning, evaluating, and refining—and verifying at each step that it has sufficient information to act.',
            isCorrect: true,
            explanation: 'Atlas orchestrates multi-step reasoning through retrieving, planning, evaluating, and refining before initiating action.',
          },
          {
            label: 'C',
            text: 'By sending unmasked customer social security numbers directly to public open-source training servers.',
            isCorrect: false,
            explanation: 'The Einstein Trust Layer masks sensitive data and prevents data leakage to external LLMs.',
          },
          {
            label: 'D',
            text: 'By pretending to be a biological human employee and refusing to admit it is an AI system.',
            isCorrect: false,
            explanation: 'Chapter 17 and 22 explicitly warn against over-humanizing agents and recommend upfront AI transparency.',
          },
        ],
      },
      {
        id: 'af-ch22-q4',
        scenarioPrompt:
          'What is Chapter 22’s core synthesis regarding agent anthropomorphism (Chapter 17) and building an investment business case (Chapter 19)?',
        options: [
          {
            label: 'A',
            text: 'Humanize agents as much as possible like the movie Her, and restrict ROI calculations strictly to call deflection.',
            isCorrect: false,
            explanation: 'The book warns against the perils of Her/SimOne over-humanization and urges expanding ROI beyond call deflection.',
          },
          {
            label: 'B',
            text: 'Treat the agent as a non-human "unit of labor" with transparent AI disclosure from the start, and expand the ROI business case beyond simple case deflection to include broader efficiency (cost savings) and productivity (better performance).',
            isCorrect: true,
            explanation: 'Customers prefer knowing they are dealing with AI upfront, and true agentic value spans both cost efficiency and performance productivity.',
          },
          {
            label: 'C',
            text: 'Hide AI usage from both customers and the legal department to accelerate deployment speed.',
            isCorrect: false,
            explanation: 'Both customer transparency (Ch 17) and formal legal governance (Ch 18) are mandatory.',
          },
          {
            label: 'D',
            text: 'Replace all prebuilt service, sales, marketing, commerce, and HR agents with manual paper forms.',
            isCorrect: false,
            explanation: 'Agentforce provides prebuilt and custom digital labor across those five core enterprise functions.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'af-ch22-fc1',
        category: 'architecture',
        front: 'What are the three components that belong exclusively to Agentforce?',
        back: 'The Atlas Reasoning Engine, Agent Builder (with Prompt Builder and Agent Creator), and the Testing Center.',
        mentalHook: '3 Exclusive Agentforce Pillars: Atlas + Agent Builder + Testing Center.',
      },
      {
        id: 'af-ch22-fc2',
        category: 'security',
        front: 'What essential protections does the Einstein Trust Layer provide to make LLMs safe for enterprise customer data?',
        back: 'Data masking, toxicity and bias detection, auditability (audit logs in Data Cloud), zero data leakage to LLMs, and secure data grounding.',
        mentalHook: 'Trust Layer = Masking + Toxicity/Bias Filter + Audit Logs + Zero Leakage.',
      },
      {
        id: 'af-ch22-fc3',
        category: 'foundation',
        front: 'What four iterative steps does the Atlas Reasoning Engine execute before putting its plans into action?',
        back: 'Retrieving, planning, evaluating, and refining—checking at each step that it has sufficient information to act.',
        mentalHook: 'Atlas 4-Step Loop: Retrieve -> Plan -> Evaluate -> Refine.',
      },
      {
        id: 'af-ch22-fc4',
        category: 'adaptation',
        front: 'What three ingredients are required in Agent Builder to give an agent a new skill?',
        back: 'Defining its topic areas (e.g., returns, appointments), giving it natural-language instructions and guardrails, and providing data sources and actions (such as Prompt templates and Salesforce Flows).',
        mentalHook: 'New Skill = Topics + Instructions/Guardrails + Data/Actions (Flows).',
      },
      {
        id: 'af-ch22-fc5',
        category: 'evaluation',
        front: 'Why should architects avoid over-humanizing AI agents according to the Chapter 17 synthesis?',
        back: 'Customers are more comfortable knowing they are dealing with AI from the start; an agent should be treated as a unit of labor or task-to-be-done rather than a faux person.',
        mentalHook: 'Unit of Labor, Not Faux Person (remember how Her and SimOne end).',
      },
      {
        id: 'af-ch22-fc6',
        category: 'optimization',
        front: 'What are the five functional labor areas covered by prebuilt Agentforce agents?',
        back: 'Service, Sales (SDRs and sales coaching), Marketing (campaign creation), Commerce (store setup, personal shopper, buyer support), and HR (via Workday partnership).',
        mentalHook: '5 Prebuilt Labor Domains: Service, Sales, Marketing, Commerce, HR.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'af-ch22-feyn1',
        conceptTitle: 'The Complete Agentforce Request Lifecycle',
        prompt:
          'Trace from first principles how a customer request travels through the Agentforce architecture—from channel entry through Data Cloud, RAG, the Einstein Trust Layer, the Atlas Reasoning Engine, and Salesforce Flows.',
        rubricChecklist: [
          'Identifies the three exclusive Agentforce pillars (Atlas Reasoning Engine, Agent Builder, Testing Center) and underlying Hyperforce/Data Cloud foundation.',
          'Explains how Data Cloud supplies zero-copy/unstructured data via RAG while the Einstein Trust Layer enforces masking, toxicity/bias detection, zero leakage, and audit logging.',
          'Details the Atlas Reasoning Engine’s four-stage loop: retrieving, planning, evaluating information sufficiency, and refining.',
          'Connects intent classification to Agent Builder topics, natural-language instructions/guardrails, Prompt Builder templates, and Salesforce Flows that execute the final action.',
        ],
        modelExplanation:
          'When a user request arrives on an embedded channel, Agentforce routes the interaction through the Einstein Trust Layer hosted on Data Cloud, masking sensitive PII and logging an immutable audit trail so no enterprise data leaks to external LLMs. The Atlas Reasoning Engine then interprets the request, maps it to a configured Agent Builder topic, and enters its four-stage cognitive loop: retrieving grounded customer context via Data Cloud’s vector database and zero-copy RAG network, planning a sequence of steps, evaluating whether it has sufficient information, and refining the plan. Once verified against topic instructions and toxicity/bias guardrails, Atlas initiates action by triggering Prompt Builder templates and native Salesforce Flows—all previously validated inside Testing Center sandboxes.',
      },
      {
        id: 'af-ch22-feyn2',
        conceptTitle: 'Strategic Governance: Persona Transparency, Legal Guardrails, and Multi-Dimensional ROI',
        prompt:
          'Synthesize the strategic lessons from Chapters 16–20 to explain how an enterprise should position its agents to customers, govern them for legal compliance, justify their investment to finance, and prepare its human workforce.',
        rubricChecklist: [
          'Applies the Chapter 17 anti-anthropomorphism rule: disclose AI identity immediately and frame agents as a "unit of labor" rather than a faux human.',
          'Incorporates Chapter 18 governance: establish formal policies, cross-functional teams, and data-access controls before scaling.',
          'Expands the Chapter 19 ROI framework beyond simple service case deflection to capture both cost-saving efficiency and revenue/output productivity.',
          'Integrates the Chapter 20 human workforce thesis: 60% of jobs face partial task exposure, resulting in hybrid AI-aided workers, skill compression, and net job growth rather than mass unemployment.',
        ],
        modelExplanation:
          'A durable enterprise agent strategy rests on four pillars. First, reject the sci-fi trap of pretending agents are human; disclose AI upfront and treat every agent as a reliable unit of labor executing a defined task. Second, satisfy legal and compliance early by standing up formal AI governance teams and policies that regulate access to customer data. Third, build your financial business case in two stages: use simple service case deflection as an easy baseline metric, but capture full value by measuring cross-enterprise efficiency (cost savings) and productivity (higher sales, commerce, and marketing performance). Finally, prepare the human workforce for augmentation: while roughly 60% of roles are exposed to AI at the task level, offloading repetitive routines empowers hybrid human workers and fuels economic growth.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch22-n1',
        label: 'Atlas Reasoning Engine Loop',
        category: 'architecture',
        chapterNumber: 22,
        importance: 1,
        definition:
          'The cognitive core of Agentforce that interprets requests, determines intent, and iterates through retrieving, planning, evaluating, and refining before acting.',
        formulaOrRule: 'Retrieve -> Plan -> Evaluate Sufficiency -> Refine -> Act',
        whyItMatters:
          'Separates true autonomous agents from rigid, pre-defined declarative chatbots.',
      },
      {
        id: 'af-ch22-n2',
        label: 'Einstein Trust Layer & Data Cloud Substrate',
        category: 'security',
        chapterNumber: 22,
        importance: 1,
        definition:
          'The mandatory data and security foundation providing zero-copy access, vector RAG grounding, data masking, toxicity/bias detection, zero leakage, and audit logs.',
        whyItMatters:
          'Elevates LLMs from risky open-source experiments to trusted enterprise infrastructure.',
      },
      {
        id: 'af-ch22-n3',
        label: 'Agent Builder & Flow Execution',
        category: 'adaptation',
        chapterNumber: 22,
        importance: 2,
        definition:
          'The natural-language control plane combining Topics, Instructions/Guardrails, Prompt Builder, Agent Creator, and native Salesforce Flows.',
        whyItMatters:
          'Allows practitioners to grant agents new skills in natural language without brittle custom code.',
      },
      {
        id: 'af-ch22-n4',
        label: 'Testing Center Sandbox Verification',
        category: 'evaluation',
        chapterNumber: 22,
        importance: 2,
        definition:
          'The dedicated Agentforce environment using Data Cloud sandboxes to automate agent testing and monitor production usage.',
        whyItMatters:
          'Prevents unverified agent behaviors from reaching live enterprise customers.',
      },
      {
        id: 'af-ch22-n5',
        label: 'Unit-of-Labor Anti-Anthropomorphism',
        category: 'foundation',
        chapterNumber: 22,
        importance: 3,
        definition:
          'The design principle of disclosing AI identity upfront and framing agents strictly as tasks-to-be-done rather than faux human personas.',
        whyItMatters:
          'Preserves customer trust and avoids the uncanny-valley backlash of synthetic human impersonation.',
      },
      {
        id: 'af-ch22-n6',
        label: 'Beyond-Deflection Full-Spectrum ROI',
        category: 'optimization',
        chapterNumber: 22,
        importance: 3,
        definition:
          'An investment framework that pairs initial service case-deflection metrics with broader cost efficiency, workforce productivity, and governance.',
        formulaOrRule: 'Total ROI = Case Deflection + Operational Efficiency + Workforce Productivity',
        whyItMatters:
          'Captures the full enterprise value of digital labor across service, sales, marketing, commerce, and HR.',
      },
    ],
    edges: [
      {
        source: 'af-ch22-n2',
        target: 'af-ch22-n1',
        relationship: 'prerequisite_for',
        explanation:
          'Data Cloud RAG grounding and the Einstein Trust Layer supply the secure, masked enterprise context required by the Atlas Reasoning Engine.',
      },
      {
        source: 'af-ch22-n3',
        target: 'af-ch22-n1',
        relationship: 'part_of',
        explanation:
          'Agent Builder defines the topics, guardrails, Prompt Builder templates, and Flows that Atlas selects and orchestrates at runtime.',
      },
      {
        source: 'af-ch22-n4',
        target: 'af-ch22-n3',
        relationship: 'evaluates',
        explanation:
          'The Testing Center validates Agent Builder configurations inside Data Cloud sandboxes before production deployment.',
      },
      {
        source: 'af-ch22-n5',
        target: 'af-ch22-n6',
        relationship: 'optimizes',
        explanation:
          'Framing agents transparently as governed units of labor increases customer adoption and unlocks full-spectrum productivity ROI.',
      },
      {
        source: 'af-ch22-n1',
        target: 'af-ch22-n6',
        relationship: 'prerequisite_for',
        explanation:
          'Atlas’s ability to plan and execute complex multi-step actions enables value creation far beyond simple FAQ call deflection.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 2,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 22 comprehensive synthesis across Chapters 1 through 21: subterranean SF kickoff, digital labor platform, natural-language topics/instructions/actions, Ch 4 functions, Ch 5 platform vs open-source, Ch 6 chatbots vs agents, Ch 7 three exclusive pillars (Atlas, Agent Builder, Testing Center) + Hyperforce/Data Cloud, Ch 8 Einstein Trust Layer, Ch 9 Data Cloud zero-copy/vector DB, Ch 10 RAG, Ch 11 Atlas 4-step loop, Ch 12 Prompt Builder & Flows, Ch 13 Sandboxes, Ch 14-16 prebuilt/custom/ideation, Ch 17 Her/SimOne anti-anthropomorphism, Ch 18 legal governance, Ch 19 beyond call deflection ROI, and Ch 20-21 human hybrid future.',
  },
};
