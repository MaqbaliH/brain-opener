import type { ChapterMastery } from '../../../types/book';

export const dwCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Rule #2: Embrace Boredom & Rule #3: Quit Social Media',
  subtitle: 'Offline Focus Blocks, Roosevelt Dashes, Productive Meditation, and the Craftsman vs. Any-Benefit Tool Audit',
  readingTimeMinutes: 8,
  sourceWordCount: 14992,
  executiveThesis:
    'The ability to concentrate intensely is a cognitive muscle that cannot be trained if the rest of your waking hours are spent fleeing every moment of boredom into smartphone stimuli. Rule #2 rewires attentional control via scheduled Internet blocks, artificial Roosevelt Dash deadlines, and Productive Meditation, while Rule #3 replaces the default "Any-Benefit" mindset with the Craftsman Approach to tool selection and Arnold Bennett’s deliberate leisure.',
  paradigmShift: {
    oldWay:
      'Workers took occasional "Internet Sabbaths" while reflexively checking smartphones at every micro-moment of boredom and adopting any social app offering a minor perk.',
    newWay:
      'Practitioners schedule breaks from focus rather than breaks from distraction, train attentional stamina via Productive Meditation, and retain only tools passing an 80/20 Pareto audit.',
    whyItChanged:
      'Clifford Nass’s Stanford research proved that chronic stimulus-switching permanently degrades working memory filtering, while Pareto analysis exposed social media’s negative net return.',
  },
  customDiagrams: [
    {
      id: 'dw-ch03-svg1',
      title: 'Rule #2 Attentional Rewiring & Productive Meditation Loop',
      subtitle: 'Inverting the Internet Sabbath into Scheduled Offline Blocks and Structured Variable-Step Thinking',
      bierutCaption:
        'Train your attention-selecting circuits by resisting on-demand novelty until your next scheduled Internet window.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">RULE #2: ATTENTIONAL REWIRING &amp; PRODUCTIVE MEDITATION ARCHITECTURE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Overcoming Clifford Nass’s chronic-multitasker syndrome via offline segregation and structured walking cognition</text>

  <!-- Left Panel: Offline Block Segregation -->
  <rect x="24" y="76" width="364" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="206" y="100" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. BREAKS FROM FOCUS (NOT DISTRACTION)</text>

  <rect x="42" y="116" width="328" height="72" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.2" />
  <text x="206" y="138" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">Why 1-Day Internet Sabbaths Fail</text>
  <text x="206" y="156" text-anchor="middle" fill="#fecaca" font-size="8.5">6 days of reflexively curing boredom with phones keeps</text>
  <text x="206" y="170" text-anchor="middle" fill="#fecaca" font-size="8.5">Nass’s "suckers for irrelevancy" wiring intact</text>

  <path d="M 206 188 L 206 208" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="42" y="208" width="328" height="92" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="206" y="230" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Notepad Internet-Block Protocol</text>
  <text x="206" y="248" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Write exact timestamp of next allowed Net check</text>
  <text x="206" y="264" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Zero network access inside Offline Blocks</text>
  <text x="206" y="280" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="600">• If stuck on vital lookup: enforce 5-min delay gap</text>

  <rect x="42" y="312" width="328" height="64" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="206" y="334" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Roosevelt Dash Interval Training</text>
  <text x="206" y="352" text-anchor="middle" fill="#94a3b8" font-size="8.5">Slash normal task time via visible countdown timer</text>
  <text x="206" y="366" text-anchor="middle" fill="#fbbf24" font-size="8">Forces teeth-gritting neural intensity</text>

  <path d="M 388 234 L 416 234" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right Panel: Productive Meditation Loop -->
  <rect x="416" y="76" width="360" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="596" y="100" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. PRODUCTIVE MEDITATION CYCLE</text>

  <rect x="436" y="118" width="320" height="66" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="596" y="140" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Step 1: Load Relevant Variables</text>
  <text x="596" y="158" text-anchor="middle" fill="#cbd5e1" font-size="8.5">While walking/running, review and hold core problem</text>
  <text x="596" y="172" text-anchor="middle" fill="#cbd5e1" font-size="8.5">variables (assumptions, outline points) in working memory</text>

  <path d="M 596 184 L 596 204" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="436" y="204" width="320" height="66" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5" />
  <text x="596" y="226" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">Step 2: Define Next-Step Question</text>
  <text x="596" y="244" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Formulate one concrete question ("How do I open Ch 3?");</text>
  <text x="596" y="258" text-anchor="middle" fill="#fca5a5" font-size="8.5">Guard against tangents &amp; energy-saving mental looping</text>

  <path d="M 596 270 L 596 290" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="436" y="290" width="320" height="84" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="596" y="312" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Step 3: Consolidate &amp; Recurse Deeper</text>
  <text x="596" y="330" text-anchor="middle" fill="#d1fae5" font-size="8.5">Lock the solved answer into memory, then push to the</text>
  <text x="596" y="344" text-anchor="middle" fill="#d1fae5" font-size="8.5">next layer; builds Roediger "attentional control"</text>
  <text x="596" y="362" text-anchor="middle" fill="#34d399" font-size="8.5" font-family="monospace">Same mechanism as Ron White 52-Card Loci</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Notepad Internet Segregation',
          explanation:
            'Scheduling Internet blocks in advance forces your brain to tolerate boredom during offline stretches, rebuilding attentional autonomy.',
        },
        {
          step: '2',
          label: 'The 5-Minute Behavioral Gap',
          explanation:
            'If an offline task requires an urgent online lookup, waiting 5 minutes uncouples the urge for distraction from immediate reward.',
        },
        {
          step: '3',
          label: 'Variable-Question-Consolidate Loop',
          explanation:
            'Productive Meditation structures walking thought into holding variables, solving a next-step question, and avoiding mental loops.',
        },
      ],
    },
    {
      id: 'dw-ch03-svg2',
      title: 'Rule #3 Craftsman Tool Selection & Pareto 80/20 Filter',
      subtitle: 'Replacing the "Any-Benefit" Trap with the Law of the Vital Few and 30-Day Silent Packing Party',
      bierutCaption:
        'Audit every network tool against your top 20% value drivers and eliminate services that fail the 30-day ban test.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">RULE #3: CRAFTSMAN TOOL AUDIT &amp; PARETO 80/20 NETWORK FILTER</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Why Forrest Pritchard’s hay-bale economics and Ryan Nicodemus’s Packing Party defeat the Any-Benefit mindset</text>

  <!-- Left Column: Any-Benefit vs Craftsman -->
  <rect x="24" y="76" width="236" height="316" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5" />
  <text x="142" y="100" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-weight="700">1. THE ANY-BENEFIT TRAP</text>
  <rect x="40" y="116" width="204" height="114" rx="6" fill="#450a0a" stroke="#f87171" />
  <text x="142" y="138" text-anchor="middle" fill="#fecaca" font-size="9.5" font-weight="700">Flawed Decision Rule</text>
  <text x="142" y="156" text-anchor="middle" fill="#fca5a5" font-size="8.5">"Adopt any network tool if it</text>
  <text x="142" y="170" text-anchor="middle" fill="#fca5a5" font-size="8.5">offers ANY minor benefit"</text>
  <text x="142" y="192" text-anchor="middle" fill="#f8fafc" font-size="8.5">Ignores massive opportunity cost:</text>
  <text x="142" y="206" text-anchor="middle" fill="#fca5a5" font-size="8.5">Attention fragmentation &amp; burnout</text>

  <rect x="40" y="246" width="204" height="128" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="142" y="268" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">Craftsman Approach</text>
  <text x="142" y="286" text-anchor="middle" fill="#d1fae5" font-size="8.5">Adopt a tool ONLY if its positive</text>
  <text x="142" y="300" text-anchor="middle" fill="#d1fae5" font-size="8.5">impacts on core success triggers</text>
  <text x="142" y="314" text-anchor="middle" fill="#d1fae5" font-size="8.5">substantially outweigh negatives</text>
  <text x="142" y="340" text-anchor="middle" fill="#34d399" font-size="8.5" font-family="monospace">Exemplar: Hay Baler vs</text>
  <text x="142" y="354" text-anchor="middle" fill="#34d399" font-size="8.5" font-family="monospace">Buying Winter Hay</text>

  <path d="M 260 310 L 292 234" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Center Column: Law of the Vital Few (80/20) -->
  <rect x="292" y="76" width="236" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="410" y="100" text-anchor="middle" fill="#38bdf8" font-size="10.5" font-weight="700">2. LAW OF THE VITAL FEW (80/20)</text>

  <rect x="308" y="118" width="204" height="82" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="410" y="140" text-anchor="middle" fill="#e0f2fe" font-size="9.5" font-weight="700">Define High-Level Goals</text>
  <text x="410" y="158" text-anchor="middle" fill="#94a3b8" font-size="8.5">1–2 professional &amp; personal</text>
  <text x="410" y="172" text-anchor="middle" fill="#94a3b8" font-size="8.5">goals (e.g., Author + Parent)</text>

  <path d="M 410 200 L 410 218" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="308" y="218" width="204" height="82" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="410" y="240" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">Isolate Top 2–3 Activities</text>
  <text x="410" y="258" text-anchor="middle" fill="#d1fae5" font-size="8.5">80% of goal progress comes</text>
  <text x="410" y="272" text-anchor="middle" fill="#d1fae5" font-size="8.5">from the vital few deep tasks</text>

  <rect x="308" y="312" width="204" height="62" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="410" y="334" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">Cull the Trivial 80% Tail</text>
  <text x="410" y="350" text-anchor="middle" fill="#94a3b8" font-size="8.5">Reinvest social hours into top 2</text>

  <path d="M 528 234 L 556 234" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Right Column: 30-Day Ban & Bennett Leisure -->
  <rect x="556" y="76" width="220" height="316" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="666" y="100" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="700">3. 30-DAY BAN &amp; LEISURE</text>

  <rect x="572" y="118" width="188" height="124" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="666" y="140" text-anchor="middle" fill="#fde68a" font-size="9.5" font-weight="700">30-Day Silent Fast</text>
  <text x="666" y="160" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Quit services for 30 days</text>
  <text x="666" y="174" text-anchor="middle" fill="#cbd5e1" font-size="8.5">without announcing;</text>
  <text x="666" y="192" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="600">Two-Question Audit:</text>
  <text x="666" y="208" text-anchor="middle" fill="#94a3b8" font-size="8">1. Would last 30d be notably worse?</text>
  <text x="666" y="222" text-anchor="middle" fill="#94a3b8" font-size="8">2. Did anyone actually care?</text>

  <rect x="572" y="256" width="188" height="118" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5" />
  <text x="666" y="278" text-anchor="middle" fill="#c7d2fe" font-size="9.5" font-weight="700">Arnold Bennett Evening Rule</text>
  <text x="666" y="298" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Put more thought into leisure!</text>
  <text x="666" y="314" text-anchor="middle" fill="#94a3b8" font-size="8.5">Pre-plan books, exercise &amp; crafts</text>
  <text x="666" y="328" text-anchor="middle" fill="#94a3b8" font-size="8.5">before 5 PM so clickbait sites</text>
  <text x="666" y="342" text-anchor="middle" fill="#94a3b8" font-size="8.5">cannot hijack evening hours</text>
  <text x="666" y="360" text-anchor="middle" fill="#34d399" font-size="8" font-weight="700">16 hrs/day = Free and Unstrained</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Craftsman vs. Any-Benefit Audit',
          explanation:
            'Like farmer Forrest Pritchard selling his hay baler because winter hay costs less in total, reject tools whose cognitive tax exceeds their minor perks.',
        },
        {
          step: '2',
          label: 'Pareto Law of the Vital Few',
          explanation:
            '80% of goal outcomes derive from 2–3 core activities; low-impact social media activity steals fixed time from those vital drivers.',
        },
        {
          step: '3',
          label: '30-Day Packing Party & Deliberate Leisure',
          explanation:
            'Test network abstinence for 30 days and pre-schedule Arnold Bennett structured evening leisure to block clickbait.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dw-ch03-mm1',
      name: 'Inversion of the Internet Sabbath',
      tagline: 'Do not take breaks from distraction; take scheduled breaks from focus',
      naiveIntuition:
        'Unplugging one Sunday per week (an Internet Sabbath) will cure smartphone distraction during the workweek.',
      firstPrinciplesReality:
        'Clifford Nass proved that giving in to on-demand distraction six days a week permanently wires the brain to crave novelty and fail at filtering irrelevancy.',
      howToApply:
        'Schedule specific Internet blocks on a notepad throughout the day and maintain 100% network abstinence during all offline blocks.',
    },
    {
      id: 'dw-ch03-mm2',
      name: 'The Craftsman Approach to Tool Selection',
      tagline: 'Evaluate tools by net impact on your core craft, never by isolated minor conveniences',
      naiveIntuition:
        'Because social networks are free in dollar terms, any minor networking or promotional perk justifies using them.',
      firstPrinciplesReality:
        'In a zero-sum attention economy, every minute spent servicing low-leverage tools directly cannibalizes the top 20% activities that determine career success.',
      howToApply:
        'List your top 2–3 success activities per goal and delete any network service that does not substantially amplify them.',
    },
    {
      id: 'dw-ch03-mm3',
      name: 'Arnold Bennett’s Deliberate Leisure Principle',
      tagline: 'Unstructured evening free time always collapses into clickbait entertainment',
      naiveIntuition:
        'After a hard workday, your mind needs completely unplanned, passive screen browsing to relax.',
      firstPrinciplesReality:
        'Algorithmically engineered infotainment sites (BuzzFeed, Reddit, social feeds) hijack unstructured evening hours and leave you cognitively exhausted.',
      howToApply:
        'Before each workday ends, schedule concrete, energizing evening habits—reading a physical book series, exercise, or in-person conversation.',
    },
  ],
  deepSections: [
    {
      id: 'dw-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Rule #2 (Part 1): Scheduled Offline Blocks and Roosevelt Dashes',
      subtitle: 'Rewiring Clifford Nass’s chronic multitasker brain and training intensity with artificial deadlines',
      coreMechanism:
        'As orthodox Talmud practitioner Adam Marlin discovered—watching peers trained since fifth grade in dailychevruta textual analysis "dance intellectual circles" around his three Ivy League degrees—intense concentration is a mental muscle that must be trained. Conversely, late Stanford professor Clifford Nass proved that chronic online multitaskers cannot filter irrelevancy or manage working memory even when they turn off devices, because their brains are wired to flee the slightest hint of boredom.\n\nBecause a one-day-a-week Internet Sabbath (popularized by William Powers) cannot undo six days of distraction gorging, Rule #2 commands: take breaks from focus, not from distraction. Record on a notepad the exact next timestamp you are permitted to use the Internet, and ban all network use until then. If stuck on an offline task requiring an online lookup, switch tasks or enforce at least a five-minute delay before rescheduling the next Internet block so the brain uncouples urge from reward. Pair this with weekly Roosevelt Dashes—inspired by undergraduate Theodore Roosevelt earning honors in 5 of 7 Harvard courses while studying only a quarter of the day—by slashing a deep task’s deadline under a visible countdown timer.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Log Next Internet Timestamp',
          detail: 'Write the next permitted network window on a desk pad and enforce total offline isolation until that minute.',
        },
        {
          step: '2',
          title: 'Enforce the 5-Minute Buffer',
          detail: 'Never go online immediately when stuck; wait at least 5 minutes to break the behavioral conditioning loop.',
        },
        {
          step: '3',
          title: 'Execute Weekly Roosevelt Dashes',
          detail: 'Set a blistering artificial deadline on a priority deep task to force maximum neural firing intensity.',
        },
      ],
      keyTakeaways: [
        'Clifford Nass’s Stanford studies show that chronic stimulus-switching degrades attentional filtering even when devices are turned off.',
        'Waiting in line or sitting at a restaurant without touching your phone is vital concentration calisthenics.',
        'Roosevelt Dashes act as high-intensity interval training for the brain’s attention centers.',
      ],
      commonPitfalls: [
        'Making "just one quick exception" during an offline block to look up a fact in your email inbox.',
        'Setting Roosevelt Dash deadlines so impossible that you give up rather than right at the edge of teeth-gritting feasibility.',
      ],
      figures: [
        {
          file: 'Art_Pline.jpg',
          originalLabel: 'Rule 2 / Rule 3 Structural Divider',
          bierutTitle: 'Fortify Internal Attentional Control Before Purging External Network Distractions',
          editorialAnalysis:
            'Marks the pedagogical transition from Rule #2 (internal cognitive training via boredom tolerance and Productive Meditation) to Rule #3 (external pruning of social media and infotainment tools). Together they eliminate both the internal craving and external triggers of fragmentation.',
          keyTakeaways: [
            'Internal concentration training must be paired with ruthless external tool minimalism.',
          ],
        },
      ],
    },
    {
      id: 'dw-ch03-sec2',
      sectionNumber: '3.2',
      title: 'Rule #2 (Part 2): Productive Meditation and Attentional Control Training',
      subtitle: 'Walking problem resolution, avoiding mental looping, and Ron White’s 52-card memory palace',
      coreMechanism:
        'Developed during Newport’s daily walks across Boston’s Longfellow Bridge as an MIT postdoc, Productive Meditation uses periods when you are occupied physically but not mentally (walking, jogging, showering) to focus on a single well-defined professional problem. To succeed, you must defeat two traps: obvious tangential distractions and subtle "looping"—where the energy-conserving brain repeatedly rehashes preliminary facts you already know to avoid the hard work of advancing.\n\nStructure each session into three steps: (1) review and store the relevant problem variables in working memory, (2) define a specific "next-step question" using those variables, and (3) consolidate the solved answer before recursing deeper. This builds the exact faculty that Washington University’s Henry Roediger identified in memory champions like Daniel Kilov (who overcame ADD to earn first-class university honors): "attentional control." Learning Ron White’s 52-card method of loci—anchoring 52 memorable person/object images across 5 household rooms—trains this same unwavering attentional focus.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Store Problem Variables',
          detail: 'Load the chapter points, proof assumptions, or architectural constraints into working memory while walking.',
        },
        {
          step: '2',
          title: 'Answer the Next-Step Question',
          detail: 'Direct 100% of attention to one concrete question while catching and redirecting mental loops.',
        },
        {
          step: '3',
          title: 'Consolidate Gains & Train Loci',
          detail: 'Review the solved insight clearly, and supplement with structured attentional drills like 52-card mental walk-throughs.',
        },
      ],
      keyTakeaways: [
        'Mental looping is the brain’s evolutionary trick to avoid high energy expenditure by rehashing familiar territory.',
        'Henry Roediger proved that elite memory athletes excel primarily in "attentional control" (holding focus on essential information), not innate memory size.',
      ],
      commonPitfalls: [
        'Listening to podcasts or audiobooks on every walk, eliminating opportunities for Productive Meditation.',
        'Wandering aimlessly through a vague topic without defining explicit variables and a single next-step question.',
      ],
    },
    {
      id: 'dw-ch03-sec3',
      sectionNumber: '3.3',
      title: 'Rule #3: The Craftsman Approach, Pareto’s Law, and Deliberate Leisure',
      subtitle: 'Forrest Pritchard’s hay baler, the 30-Day Packing Party, and Arnold Bennett’s 16-hour day',
      coreMechanism:
        'Most knowledge workers select network tools using the Any-Benefit Approach: justifying Twitter, Facebook, or Reddit if it offers any minor perk. Rule #3 replaces this with the Craftsman Approach: adopt a tool only if its positive impacts on the core factors of your professional and personal success substantially outweigh its negatives. Farmer Forrest Pritchard illustrates this by selling his hay baler; although making his own hay offered obvious benefits, factoring in fuel, repairs, and the opportunity cost of time lost raising livestock proved buying winter hay was vastly superior.\n\nApply Pareto’s 80/20 Law of the Vital Few by listing the top 2–3 activities that drive 80% of each major goal, then run Ryan Nicodemus’s 30-Day "Packing Party" on social media: silently quit for 30 days and ask (1) would the last 30 days have been notably better with the service, and (2) did anyone care? Finally, follow 1910 writer Arnold Bennett’s How to Live on 24 Hours a Day: fill evening hours (your "day within a day") with pre-planned, structured hobbies and reading so clickbait infotainment sites cannot hijack your mind.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Run the 80/20 Vital Few Audit',
          detail: 'Identify your high-level goals and the 2–3 high-depth activities that generate 80% of their outcomes.',
        },
        {
          step: '2',
          title: 'Execute a 30-Day Silent Ban',
          detail: 'Stop using suspect social networks for 30 days without announcing it, then apply the two-question return test.',
        },
        {
          step: '3',
          title: 'Pre-Schedule Evening Leisure',
          detail: 'Replace passive web surfing after 5:00 p.m. with structured books, exercise, or crafts following Arnold Bennett.',
        },
      ],
      keyTakeaways: [
        'Because time is zero-sum, servicing low-impact 80% tail tools directly steals hours from your top 20% career drivers.',
        'Malcolm Gladwell and Michael Lewis demonstrate that established creators thrive without maintaining personal Twitter Promotion machines.',
        'Giving your brain structured evening leisure leaves you refreshed, whereas clickbait browsing leaves you depleted.',
      ],
      commonPitfalls: [
        'Falling for the binary trap that the only alternative to hyperconnected burnout (like Baratunde Thurston) is quitting the entire Internet.',
        'Leaving evening leisure completely unstructured and expecting tired willpower to resist algorithmic clickbait.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Network Tool Evaluation Paradigms: Any-Benefit vs. Craftsman Approach',
      description: 'Comparing how knowledge workers evaluate social media, chat apps, and infotainment tools across opportunity cost and Pareto returns.',
      headers: ['Decision Dimension', 'Any-Benefit Mindset (Default)', 'Binary Sabbatical (Thurston)', 'Craftsman Approach (Rule #3)'],
      rows: [
        ['Adoption Threshold', 'Any minor perk or FOMO fear', 'Total 25-day Internet blackout', 'Substantial net gain on top 2–3 drivers'],
        ['Opportunity Cost Accounting', 'Ignored (treats attention as free)', 'Temporary relief, then full relapse', 'Strict zero-sum Pareto 80/20 audit'],
        ['Validation Protocol', 'Emotional rationalization', 'Public magazine stunt', 'Silent 30-Day Packing Party ban'],
        ['Long-Term Cognitive Impact', 'Chronic fragmentation & residue', 'Unsustainable in modern work', 'Permanent attention autonomy'],
      ],
      verdictRule:
        'Reject the Any-Benefit mindset; subject every social and network service to the Craftsman 80/20 audit and the 30-day silent ban test.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dw-ch03-scen1',
      title: 'Curing Chronic Context-Switching in a Senior Backend Architect',
      roleAndContext: 'Senior distributed-systems architect who checks Hacker News, Reddit, and Slack every time code compilation takes 40 seconds.',
      symptomOrFailure: 'Even during dedicated weekend coding sessions with notifications off, his brain craves novelty every four minutes (Clifford Nass syndrome).',
      naiveFixAndWhyItFails: 'Taking a single Sunday "digital detox" fails because 6 days of micro-switching keep his novelty-craving neural pathways dominant.',
      firstPrinciplesSolution: 'Implement Rule #2 Notepad Internet Blocks (allowing web access only at :00 and :45 timestamps with a mandatory 5-minute lookup delay) and three weekly Productive Meditation walks.',
      measurableOutcome: 'Restored unbroken 90-minute concentration spans within four weeks and solved a deadlock bug during a Longfellow-style walk.',
    },
    {
      id: 'dw-ch03-scen2',
      title: 'Auditing Developer Advocacy Social Channels via the 80/20 Craftsman Filter',
      roleAndContext: 'Indie SaaS founder spending 3.5 hours daily across X/Twitter, LinkedIn, Discord, and Product Hunt threads.',
      symptomOrFailure: 'Core product feature velocity stalled for two months while daily social posts generated fewer than 12 paid signups.',
      naiveFixAndWhyItFails: 'Using social-media scheduling tools still leaves attention fragmented by incoming replies and algorithmic feeds.',
      firstPrinciplesSolution: 'Apply the Law of the Vital Few and a 30-Day Silent Packing Party: freeze social accounts for 30 days and reallocate those 100 hours to shipping deep product features and technical documentation.',
      measurableOutcome: 'Zero drop in organic revenue during the 30-day ban and a 2.4x increase in trial-to-paid conversion from the new product features.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dw-ch03-q1',
        scenarioPrompt:
          'Why does Cal Newport argue that taking a weekly one-day "Internet Sabbath" fails to cure distraction addiction, and what does he prescribe instead?',
        options: [
          {
            label: 'A',
            text: 'Because one day offline is like eating healthy one day a week; instead, you must schedule breaks from focus by segregating Internet use into pre-planned blocks every day.',
            isCorrect: true,
            explanation: 'Clifford Nass showed constant switching wires the brain to crave novelty; only daily offline blocks train the brain to tolerate boredom.',
          },
          {
            label: 'B',
            text: 'Because an Internet Sabbath must last at least six consecutive months in a cabin to work.',
            isCorrect: false,
            explanation: 'Even multi-week sabbaticals like Baratunde Thurston’s 25-day unplugging relapse quickly if daily tool habits remain unchanged.',
          },
          {
            label: 'C',
            text: 'Because workers should keep social media open at all times to build immunity.',
            isCorrect: false,
            explanation: 'Continuous exposure to distracting stimuli weakens attentional control.',
          },
          {
            label: 'D',
            text: 'Because Internet Sabbaths violate Arnold Bennett’s evening reading rule.',
            isCorrect: false,
            explanation: 'Arnold Bennett advocated structured evening engagement, not constant Internet use.',
          },
        ],
      },
      {
        id: 'dw-ch03-q2',
        scenarioPrompt:
          'You are 15 minutes into a 60-minute offline focus block when you realize you need a piece of data buried in an email thread to finish the current paragraph. What is the exact Rule #2 protocol?',
        options: [
          {
            label: 'A',
            text: 'Open your inbox immediately, grab the data in 10 seconds, and close the tab.',
            isCorrect: false,
            explanation: 'Immediate exceptions train your mind that the barrier between offline and Internet blocks is permeable and reward the urge for distraction.',
          },
          {
            label: 'B',
            text: 'Switch to another offline subtask for the rest of the block, or if you must reschedule the next Internet block sooner, enforce at least a 5-minute waiting gap before going online.',
            isCorrect: true,
            explanation: 'The 5-minute behavioral gap separates the sensation of wanting to go online from the reward of actually doing so.',
          },
          {
            label: 'C',
            text: 'Cancel deep work for the remainder of the day.',
            isCorrect: false,
            explanation: 'Abandoning the schedule destroys deep work output; the protocol preserves offline block integrity.',
          },
          {
            label: 'D',
            text: 'Use your smartphone instead of your desktop browser since phone lookups do not count.',
            isCorrect: false,
            explanation: 'Smartphone network checks trigger the exact same attentional fragmentation and residue.',
          },
        ],
      },
      {
        id: 'dw-ch03-q3',
        scenarioPrompt:
          'During a Productive Meditation walk, how do you prevent your brain from falling into "looping," and what are the three structural steps of the method?',
        options: [
          {
            label: 'A',
            text: 'Listen to a 2x-speed podcast while jogging.',
            isCorrect: false,
            explanation: 'Productive Meditation requires zero external audio input so attention focuses entirely on a single professional problem.',
          },
          {
            label: 'B',
            text: 'Recognize when your mind rehashes preliminary facts to save energy, redirect it, and follow the 3-step cycle: (1) review/store relevant variables, (2) define a specific next-step question, and (3) consolidate gains.',
            isCorrect: true,
            explanation: 'Storing variables in working memory, solving a concrete next-step question, and consolidating the answer forces progressive depth.',
          },
          {
            label: 'C',
            text: 'Repeat a single mantra word for 45 minutes to empty working memory.',
            isCorrect: false,
            explanation: 'That is mindfulness/transcendental meditation, whereas Productive Meditation solves a specific professional problem.',
          },
          {
            label: 'D',
            text: 'Carry a smartphone and type notes into Slack every two minutes.',
            isCorrect: false,
            explanation: 'Checking a phone mid-walk shatters the meditation state and reintroduces network distraction.',
          },
        ],
      },
      {
        id: 'dw-ch03-q4',
        scenarioPrompt:
          'How does farmer Forrest Pritchard’s decision to sell his hay baler illustrate the Craftsman Approach to Tool Selection over the Any-Benefit Approach?',
        options: [
          {
            label: 'A',
            text: 'The hay baler had zero positive uses on a farm.',
            isCorrect: false,
            explanation: 'A hay baler obviously has useful benefits on a farm, just as social media has minor perks.',
          },
          {
            label: 'B',
            text: 'Although making his own hay offered real benefits, a full accounting of fuel, repairs, and the opportunity cost of time taken away from his core mission (raising livestock) proved the tool had a net negative impact.',
            isCorrect: true,
            explanation: 'The Craftsman Approach weighs a tool’s full negative costs and opportunity costs against the core factors that drive success.',
          },
          {
            label: 'C',
            text: 'He replaced the hay baler with a Twitter account to market grass-fed beef.',
            isCorrect: false,
            explanation: 'The hay baler is an economic analogy for evaluating physical and digital tools by net impact on core mission.',
          },
          {
            label: 'D',
            text: 'He used the baler only one day per week on Saturdays.',
            isCorrect: false,
            explanation: 'Pritchard sold the baler completely and bought hay in winter to focus 100% on his vital livestock operations.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dw-ch03-fc1',
        category: 'evaluation',
        front: 'What did Clifford Nass’s Stanford research discover about chronic digital multitaskers?',
        back: 'People who multitask constantly cannot filter out irrelevancy or manage working memory even when they turn off devices, because their brains are wired to be "suckers for irrelevancy."',
        mentalHook: 'Chronic switching permanently damages the brain’s irrelevancy filter.',
      },
      {
        id: 'dw-ch03-fc2',
        category: 'optimization',
        front: 'What is a "Roosevelt Dash" and how does it train concentration?',
        back: 'Estimating the normal time required for a deep task and slashing the deadline drastically (using a visible countdown timer) so the only way to finish is working with blistering, zero-distraction intensity.',
        mentalHook: 'Teddy Roosevelt at Harvard: Artificial deadline = Blistering focus.',
      },
      {
        id: 'dw-ch03-fc3',
        category: 'adaptation',
        front: 'What are the three structured steps of Productive Meditation?',
        back: '(1) Review and store the relevant variables in working memory, (2) define the specific next-step question, and (3) consolidate your gains by reviewing the answer before pushing deeper.',
        mentalHook: 'Variables → Next-Step Question → Consolidate.',
      },
      {
        id: 'dw-ch03-fc4',
        category: 'evaluation',
        front: 'What did Henry Roediger’s Extreme Memory Tournament study reveal about memory athletes like Daniel Kilov?',
        back: 'Their primary cognitive advantage over normal adults is not innate memory capacity, but "attentional control"—the ability to maintain unwavering focus on essential information.',
        mentalHook: 'Memory champions are actually attention champions.',
      },
      {
        id: 'dw-ch03-fc5',
        category: 'foundation',
        front: 'Contrast the "Any-Benefit Approach" and the "Craftsman Approach" to network tool selection.',
        back: 'The Any-Benefit Approach adopts a tool if it offers any minor perk; the Craftsman Approach adopts a tool only if its positive impacts on your core success factors substantially outweigh its negatives.',
        mentalHook: 'Any minor perk vs. Substantial net gain on core craft.',
      },
      {
        id: 'dw-ch03-fc6',
        category: 'architecture',
        front: 'What are the two evaluation questions at the end of Rule #3’s 30-Day Social Media Ban ("Packing Party")?',
        back: '(1) Would the last thirty days of my life have been notably better if I had been able to use this service? (2) Did people care that I wasn’t using this service?',
        mentalHook: 'Was life notably worse? Did anyone actually care?',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dw-ch03-feyn1',
        conceptTitle: 'Rewiring the Distraction-Addicted Brain (Rule #2)',
        prompt:
          'Explain why someone who scrolls their phone while waiting in line for coffee cannot suddenly become "laser-focused" when they sit down to write code, and detail the three Rule #2 protocols to rewire their attentional control.',
        rubricChecklist: [
          'Cites Clifford Nass’s research showing chronic stimulus-switching cripples the brain’s irrelevancy filter even when offline.',
          'Explains why scheduling Internet blocks ("breaks from focus") beats a 1-day Internet Sabbath, including the 5-minute exception delay.',
          'Describes Roosevelt Dashes as interval training using compressed artificial deadlines.',
          'Details the 3-step Productive Meditation loop (Variables → Next-Step Question → Consolidate) and guarding against looping.',
        ],
        modelExplanation:
          'Clifford Nass proved that relieving every micro-moment of boredom with a smartphone wires the brain to crave constant novelty, leaving it unable to filter out irrelevancy during deep work. To rewire this, Rule #2 replaces futile 1-day detoxes with daily scheduled Internet blocks—keeping all time outside those blocks 100% offline (with a mandatory 5-minute buffer if forced to reschedule). You then expand your concentration ceiling through weekly Roosevelt Dashes under artificial countdown timers and Productive Meditation walks that hold problem variables in working memory, solve a single next-step question, and consolidate gains.',
      },
      {
        id: 'dw-ch03-feyn2',
        conceptTitle: 'The Craftsman Tool Audit & Arnold Bennett’s Deliberate Leisure (Rule #3)',
        prompt:
          'Walk a knowledge worker through auditing their social media and infotainment habits using Forrest Pritchard’s hay-bale logic, the 80/20 Pareto Law, Ryan Nicodemus’s Packing Party, and Arnold Bennett’s evening rule.',
        rubricChecklist: [
          'Contrasts the default Any-Benefit mindset against the Craftsman Approach (illustrated by Forrest Pritchard’s hay baler opportunity cost).',
          'Applies the Pareto 80/20 Law of the Vital Few to show how low-impact activities cannibalize the top 2–3 goal drivers.',
          'Outlines the 30-day silent ban and the two return-audit questions.',
          'Explains Arnold Bennett’s rule of putting structured thought into evening leisure so clickbait sites cannot hijack free time.',
        ],
        modelExplanation:
          'Most professionals justify social apps using the Any-Benefit mindset, ignoring that attention is a zero-sum resource. Like farmer Forrest Pritchard selling his hay baler because it stole time from his core livestock business, the Craftsman Approach identifies the top 2–3 activities generating 80% of your career outcomes (Pareto’s Law) and cuts the trivial 80% tail. By silently quitting suspect tools for 30 days (like Ryan Nicodemus’s Packing Party), you test whether life was worse or anyone noticed; finally, by pre-planning structured evening books and hobbies (Arnold Bennett’s rule), you starve clickbait sites of unstructured downtime.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dw-offline-blocks',
        label: 'Scheduled Internet / Offline Blocks',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition: 'Rule #2 protocol that segregates network connectivity into pre-written timestamps and keeps all remaining blocks 100% offline.',
        formulaOrRule: 'Offline Block Integrity + 5-Min Reschedule Gap → Boredom Tolerance',
        whyItMatters: 'Rewires Clifford Nass’s chronic-multitasker brain by separating the urge for novelty from immediate gratification.',
      },
      {
        id: 'dw-roosevelt-dash',
        label: 'Roosevelt Dash',
        category: 'optimization',
        chapterNumber: 3,
        importance: 2,
        definition: 'High-intensity interval training for attention that slashes a deep task’s deadline under a visible countdown timer.',
        formulaOrRule: 'Compressed Deadline → Maximum Neural Firing Intensity',
        whyItMatters: 'Forces the brain to operate at concentrations far above comfortable baseline habits.',
      },
      {
        id: 'dw-productive-meditation',
        label: 'Productive Meditation',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 1,
        definition: 'Focusing on a single well-defined professional problem during physical activity (walking/running) via Variable Storage, Next-Step Question, and Consolidation.',
        formulaOrRule: 'Store Variables → Solve Next-Step Question → Consolidate (No Looping)',
        whyItMatters: 'Builds Henry Roediger’s "attentional control" and working-memory depth while converting commutes into breakthroughs.',
      },
      {
        id: 'dw-craftsman-tool-audit',
        label: 'Craftsman Approach to Tool Selection',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 1,
        definition: 'Adopting a technology tool only if its positive impacts on core professional and personal success factors substantially outweigh its negative costs.',
        formulaOrRule: 'Net Core Craft Gain >> Opportunity & Fragmentation Cost',
        whyItMatters: 'Eliminates the "Any-Benefit" fallacy that floods knowledge workers with attention-fracturing social apps.',
      },
      {
        id: 'dw-pareto-vital-few',
        label: 'Law of the Vital Few (80/20 Audit)',
        category: 'optimization',
        chapterNumber: 3,
        importance: 2,
        definition: 'Pareto distribution law showing that 80% of goal progress stems from the top 2–3 deep activities, which are cannibalized by low-impact tools.',
        formulaOrRule: '80% of Outcomes = Top 2–3 Deep Activities',
        whyItMatters: 'Proves that time spent on marginal network tools carries a severe negative return on fixed waking hours.',
      },
      {
        id: 'dw-bennett-leisure',
        label: 'Arnold Bennett Deliberate Leisure',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 3,
        definition: 'Pre-planning structured, high-value evening activities (books, exercise, conversation) so unstructured nights do not collapse into clickbait browsing.',
        formulaOrRule: 'Structured Evening Plan → Zero Clickbait Hijacking',
        whyItMatters: 'Protects the 16 non-work hours of the day so the mind wakes up energized rather than screen-fried.',
      },
    ],
    edges: [
      {
        source: 'dw-offline-blocks',
        target: 'dw-roosevelt-dash',
        relationship: 'prerequisite_for',
        explanation: 'Segregating offline blocks establishes the baseline distraction resistance needed to survive a high-intensity Roosevelt Dash.',
      },
      {
        source: 'dw-productive-meditation',
        target: 'dw-offline-blocks',
        relationship: 'optimizes',
        explanation: 'Productive meditation strengthens Henry Roediger’s attentional control, making offline focus blocks deeper and more productive.',
      },
      {
        source: 'dw-craftsman-tool-audit',
        target: 'dw-pareto-vital-few',
        relationship: 'evaluates',
        explanation: 'The Craftsman Approach uses the Pareto 80/20 vital-few activities as the benchmark for judging any tool.',
      },
      {
        source: 'dw-pareto-vital-few',
        target: 'dw-offline-blocks',
        relationship: 'optimizes',
        explanation: 'Pruning low-impact social tools via the 30-day ban frees up uninterrupted calendar hours for offline deep blocks.',
      },
      {
        source: 'dw-bennett-leisure',
        target: 'dw-offline-blocks',
        relationship: 'prerequisite_for',
        explanation: 'Structured evening leisure prevents nighttime clickbait binges from undoing daytime attentional rewiring.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 11,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Rule #2 and Rule #3 (Adam Marlin Talmud study, Clifford Nass, William Powers Sabbath vs Offline Blocks, 5-min buffer, Teddy Roosevelt Dash, Productive Meditation, Daniel Kilov/Henry Roediger/Ron White 52 cards, Baratunde Thurston, Craftsman vs Any-Benefit, Forrest Pritchard hay baler, Pareto 80/20, Ryan Nicodemus 30-day Packing Party, Arnold Bennett leisure).',
  },
};

export const dwCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Rule #4: Drain the Shallows',
  subtitle: 'Time-Block Ledgers, College-Graduate Depth Quantification, Fixed-Schedule Productivity, and Process-Centric Email',
  readingTimeMinutes: 8,
  sourceWordCount: 10477,
  executiveThesis:
    'Because human capacity for true deep work caps at roughly four hours per day, shallow logistical work becomes fatal the moment it expands to crowd out those bounded deep blocks. Rule #4 confines shallow overhead through minute-by-minute time-block notebooks, the "months to train a college graduate" depth metric, explicit 30%–50% shallow work budgets, Fixed-Schedule Productivity (finishing by 5:30 p.m. with a strict Shutdown Ritual), and process-centric email filters.',
  paradigmShift: {
    oldWay:
      'Knowledge workers drifted through unstructured days on autopilot, answered every email with open-ended availability, and worked late into nights and weekends.',
    newWay:
      'Practitioners assign every minute to a rewritable time block, cap work at 5:30 p.m. via Fixed-Schedule Productivity, and close email loops with multi-step process messages.',
    whyItChanged:
      'Basecamp’s 4-day week and Harvard professor Radhika Nagpal’s 50-hour cap proved that compressing work hours eliminates dispensable shallow fat while preserving elite deep output.',
  },
  customDiagrams: [
    {
      id: 'dw-ch04-svg1',
      title: 'The Dynamic Time-Block Ledger & Shallow Budget Governor',
      subtitle: 'Assigning every minute a job with Overflow Conditional Blocks and the College-Grad Depth Metric',
      bierutCaption:
        'Replace wishful to-do lists with a dynamic time-block grid that adapts to interruptions without surrendering intentionality.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">RULE #4: DYNAMIC TIME-BLOCK LEDGER &amp; DEPTH QUANTIFICATION</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Giving every minute a job via rewritable paper columns, overflow buffers, and the College-Graduate Training Metric</text>

  <!-- Left Panel: Time-Block Notebook Architecture -->
  <rect x="24" y="76" width="428" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="238" y="100" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. REWRITABLE TIME-BLOCK LEDGER (30-MIN GRID)</text>

  <!-- Original Column -->
  <rect x="42" y="116" width="122" height="252" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="103" y="136" text-anchor="middle" fill="#cbd5e1" font-size="9.5" font-weight="700">Plan v1 (8:30 AM)</text>
  <rect x="50" y="146" width="106" height="58" rx="4" fill="#064e3b" stroke="#10b981" />
  <text x="103" y="170" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">09:00–11:00</text>
  <text x="103" y="184" text-anchor="middle" fill="#d1fae5" font-size="8">Deep: Draft Paper</text>

  <rect x="50" y="210" width="106" height="44" rx="4" fill="#1e293b" stroke="#f59e0b" />
  <text x="103" y="228" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="700">11:00–12:00</text>
  <text x="103" y="242" text-anchor="middle" fill="#cbd5e1" font-size="8">Overflow / Email</text>

  <rect x="50" y="260" width="106" height="44" rx="4" fill="#450a0a" stroke="#f87171" />
  <text x="103" y="278" text-anchor="middle" fill="#fca5a5" font-size="8.5">13:00–15:00</text>
  <text x="103" y="292" text-anchor="middle" fill="#fecaca" font-size="8">Disrupted by Bug!</text>

  <rect x="50" y="310" width="106" height="48" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="103" y="330" text-anchor="middle" fill="#7dd3fc" font-size="8.5">15:00–17:00</text>
  <text x="103" y="344" text-anchor="middle" fill="#94a3b8" font-size="8">Task Batch Block</text>

  <path d="M 164 282 L 190 282" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Revised Column + Task List -->
  <rect x="190" y="116" width="122" height="252" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="251" y="136" text-anchor="middle" fill="#7dd3fc" font-size="9.5" font-weight="700">Plan v2 (Rebuilt)</text>
  <text x="251" y="166" text-anchor="middle" fill="#94a3b8" font-size="8">Goal is thoughtful</text>
  <text x="251" y="180" text-anchor="middle" fill="#94a3b8" font-size="8">intent, not rigid</text>
  <text x="251" y="194" text-anchor="middle" fill="#94a3b8" font-size="8">fidelity to v1</text>

  <rect x="198" y="216" width="106" height="68" rx="4" fill="#064e3b" stroke="#10b981" />
  <text x="251" y="242" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">14:30–16:30</text>
  <text x="251" y="256" text-anchor="middle" fill="#d1fae5" font-size="8">Shifted Deep Block</text>

  <rect x="198" y="292" width="106" height="66" rx="4" fill="#0f172a" stroke="#10b981" />
  <text x="251" y="314" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">17:00–17:30</text>
  <text x="251" y="330" text-anchor="middle" fill="#a7f3d0" font-size="8">Shutdown Ritual:</text>
  <text x="251" y="344" text-anchor="middle" fill="#6ee7b7" font-size="7.5" font-family="monospace">"Shutdown Complete"</text>

  <!-- Right Side Task Overflow -->
  <rect x="322" y="116" width="114" height="252" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="379" y="136" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="700">Batched Logistics</text>
  <text x="379" y="160" text-anchor="middle" fill="#94a3b8" font-size="8">• Reimbursement</text>
  <text x="379" y="178" text-anchor="middle" fill="#94a3b8" font-size="8">• Reply to Carl</text>
  <text x="379" y="196" text-anchor="middle" fill="#94a3b8" font-size="8">• Approve PR #42</text>
  <text x="379" y="236" text-anchor="middle" fill="#fde68a" font-size="8" font-weight="600">Spontaneity Rule:</text>
  <text x="379" y="252" text-anchor="middle" fill="#94a3b8" font-size="7.5">Abandon schedule</text>
  <text x="379" y="266" text-anchor="middle" fill="#94a3b8" font-size="7.5">only for a major</text>
  <text x="379" y="280" text-anchor="middle" fill="#94a3b8" font-size="7.5">creative breakthrough</text>

  <path d="M 452 234 L 480 234" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Right Panel: Depth Quantification & Shallow Budget -->
  <rect x="480" y="76" width="296" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="628" y="100" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. COLLEGE-GRAD DEPTH METRIC</text>

  <rect x="496" y="116" width="264" height="66" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="628" y="136" text-anchor="middle" fill="#7dd3fc" font-size="9.5" font-weight="700">The Calibration Question (Months M):</text>
  <text x="628" y="152" text-anchor="middle" fill="#e2e8f0" font-size="8.5">"How many months to train a smart college</text>
  <text x="628" y="166" text-anchor="middle" fill="#e2e8f0" font-size="8.5">grad with zero field training to do this?"</text>

  <rect x="496" y="194" width="264" height="92" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="628" y="214" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">• Edit Peer-Reviewed Paper: M = 50–75 mo (DEEP)</text>
  <text x="628" y="236" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="700">• Attend Status Meeting: M = 3 mo (SHALLOW)</text>
  <text x="628" y="258" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">• Build Quarterly Slide Deck: M = 2 mo (SHALLOW)</text>

  <rect x="496" y="298" width="264" height="76" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="628" y="320" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Shallow Work Budget: 30%–50%</text>
  <text x="628" y="338" text-anchor="middle" fill="#d1fae5" font-size="8.5">Negotiate explicit ratio with boss;</text>
  <text x="628" y="352" text-anchor="middle" fill="#34d399" font-size="8.5">Use hard ledger data to decline status bloat</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Rewritable Time-Block Grid',
          explanation:
            'Assign every minute of the workday to a 30-minute minimum block; when disrupted, redraw the remaining hours in a parallel column.',
        },
        {
          step: '2',
          label: 'Overflow Conditional Blocks',
          explanation:
            'Place split-purpose blocks after uncertain tasks to absorb overruns or process non-urgent tasks if finished on time.',
        },
        {
          step: '3',
          label: 'College-Graduate Training Metric',
          explanation:
            'Quantify task depth by estimating how many months it would take a smart recent graduate to replicate the task.',
        },
      ],
    },
    {
      id: 'dw-ch04-svg2',
      title: 'Fixed-Schedule Productivity & Process-Centric Email Firewall',
      subtitle: 'How Radhika Nagpal’s 5:30 PM cutoff and Multi-Step Loop Closure eliminate inbox ping-pong',
      bierutCaption:
        'Enforce a hard 5:30 PM cutoff and answer only messages that clear your sender filter with process-closing specifications.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">FIXED-SCHEDULE PRODUCTIVITY &amp; THE 3-STAGE EMAIL FIREWALL</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Working backward from a hard 5:30 PM cap while collapsing email ping-pong via Process-Centric replies</text>

  <!-- Left Column: Fixed-Schedule Productivity -->
  <rect x="24" y="76" width="352" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="200" y="100" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">1. FIXED-SCHEDULE PRODUCTIVITY (5:30 PM CAP)</text>

  <rect x="42" y="118" width="316" height="78" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="200" y="140" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">The Radhika Nagpal / Basecamp Law</text>
  <text x="200" y="158" text-anchor="middle" fill="#d1fae5" font-size="8.5">Fixing a hard 50-hr / 5:30 PM cap forces asymmetric</text>
  <text x="200" y="172" text-anchor="middle" fill="#d1fae5" font-size="8.5">culling of shallow work (e.g., capping travel at 5x/yr)</text>
  <text x="200" y="186" text-anchor="middle" fill="#34d399" font-size="8">while leaving the 4-hr daily deep core untouched</text>

  <path d="M 200 196 L 200 216" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="42" y="216" width="316" height="72" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="200" y="238" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Clear Refusal, Ambiguous Explanation</text>
  <text x="200" y="256" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Say "No" cleanly without specific schedule excuses</text>
  <text x="200" y="270" text-anchor="middle" fill="#94a3b8" font-size="8.5">that requesters can negotiate around; zero consolation prizes</text>

  <rect x="42" y="300" width="316" height="74" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="200" y="322" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Zeigarnik Shutdown Ritual</text>
  <text x="200" y="340" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Audit inbox/tasks → transfer open loops to a written plan</text>
  <text x="200" y="354" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-family="monospace">(Baumeister &amp; Masicampo) → Say termination phrase</text>

  <path d="M 376 234 L 408 234" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right Column: 3-Rule Email Firewall -->
  <rect x="408" y="76" width="368" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="592" y="100" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">2. BECOME HARD TO REACH (3 EMAIL TIPS)</text>

  <rect x="426" y="118" width="332" height="74" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5" />
  <text x="592" y="138" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">Tip 1: Deploy a Sender Filter</text>
  <text x="592" y="156" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Replace general contact addresses with conditional filters</text>
  <text x="592" y="170" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">(interesting@calnewport.com) resetting reply expectations</text>

  <path d="M 592 192 L 592 210" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="426" y="210" width="332" height="86" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="592" y="230" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Tip 2: Process-Centric Replies (Close the Loop)</text>
  <text x="592" y="248" text-anchor="middle" fill="#d1fae5" font-size="8.5">Spend 2 mins thinking to define the whole project</text>
  <text x="592" y="262" text-anchor="middle" fill="#d1fae5" font-size="8.5">process from current state to completion in ONE message</text>
  <text x="592" y="278" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">"Free Mon 10–11 or Wed 1–2; if valid, consider confirmed"</text>

  <path d="M 592 296 L 592 314" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="426" y="314" width="332" height="62" rx="6" fill="#0f172a" stroke="#f87171" stroke-width="1.2" />
  <text x="592" y="334" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">Tip 3: Don’t Respond (3-Criteria Filter)</text>
  <text x="592" y="352" text-anchor="middle" fill="#94a3b8" font-size="8.5">Ignore messages that are (1) ambiguous/hard to reply to,</text>
  <text x="592" y="366" text-anchor="middle" fill="#94a3b8" font-size="8.5">(2) uninteresting proposals, or (3) have zero upside/downside</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Asymmetric Shallow Culling (5:30 PM)',
          explanation:
            'Working backward from a hard 5:30 p.m. cutoff forces you to drop low-value administrative commitments while protecting deep blocks.',
        },
        {
          step: '2',
          label: 'Zeigarnik Shutdown Ritual',
          explanation:
            'Baumeister and Masicampo proved that recording a concrete plan for unfinished tasks silences the Zeigarnik Effect’s intrusive thoughts.',
        },
        {
          step: '3',
          label: 'Process-Centric Loop Closure',
          explanation:
            'Replace lazy one-line email volleys ("When are you free?") with a process-centric reply that locks in the final state immediately.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dw-ch04-mm1',
      name: 'The 4-Hour Biological Deep Cap vs. Shallow Crowd-Out',
      tagline: 'Shallow work is harmless until it encroaches on your daily 4-hour deep ceiling',
      naiveIntuition:
        'Since humans can only sustain four hours of true deep work in an eight-hour day, you can carelessly accept meetings and emails without hurting output.',
      firstPrinciplesReality:
        'A few scattered meetings and unbatched inbox sessions easily fragment an 8-hour calendar until not a single 90-minute deep block survives.',
      howToApply:
        'Quarantine meetings and shallow tasks into compact afternoon blocks so your morning 3–4 hour deep window remains intact.',
    },
    {
      id: 'dw-ch04-mm2',
      name: 'Fixed-Schedule Scarcity Inversion',
      tagline: 'Artificial time caps increase output by forcing ruthless triage of shallow fat',
      naiveIntuition:
        'Working nights and weekends (like the 12-hour junior professor "Tom") is the only way to survive competitive careers.',
      firstPrinciplesReality:
        'Unbounded schedules breed sloppy organization and 10.5 hours of administrative bloat; a hard 5:30 p.m. cutoff induces a scarcity mindset that culls only shallow work.',
      howToApply:
        'Commit to a non-negotiable 5:30 p.m. finish, set annual quotas on shallow traps (like travel or committees), and say no with clear refusal and ambiguous explanation.',
    },
    {
      id: 'dw-ch04-mm3',
      name: 'Process-Centric vs. Knee-Jerk Email',
      tagline: 'Invest two extra minutes composing an email to eliminate ten future back-and-forth messages',
      naiveIntuition:
        'Replying to an email with a quick one-line question ("Sure, when are you free?") minimizes the time you spend in your inbox.',
      firstPrinciplesReality:
        'Knee-jerk one-liners keep control of the project open-ended, generating weeks of attention-fracturing inbox ping-pong.',
      howToApply:
        'Before replying, define the entire process required to bring the task from its current state to closed completion in a single message.',
    },
  ],
  deepSections: [
    {
      id: 'dw-ch04-sec1',
      sectionNumber: '4.1',
      title: 'The 4-Hour Deep Ceiling and Dynamic Time-Block Scheduling',
      subtitle: 'Basecamp’s 4-day week, Laura Vanderkam’s self-report gap, and rewritable paper schedules',
      coreMechanism:
        'When Jason Fried’s 37signals (Basecamp) shortened its summer workweek from five days to four normal 8-hour days—and later gave employees the entire month of June off from shallow meetings to build deep pitch-day tools—output did not drop because the compressed schedule squeezed out dispensable shallow fat while leaving deep work untouched. Anders Ericsson’s deliberate practice research confirms that even experts cap out at four hours of true deep work per day; however, because humans spend most of their day on autopilot (as shown by British TV meters and Laura Vanderkam’s American Time Use Survey studies exposing massive gaps between self-estimated and actual hours), unscheduled days quickly lose those four hours to fragmented shallow tasks.\n\nTo reclaim intentionality, schedule every minute of your workday on a lined notebook page divided into 30-minute minimum blocks. When estimates run long or interruptions strike, cross out the remaining blocks and redraw a revised column to the right. Stabilize the ledger using Overflow Conditional Blocks (split-purpose buffers after unpredictable tasks) and batched Task Blocks.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Draw the Morning Time-Block Grid',
          detail: 'Assign every minute of your workday to a 30-minute minimum block, batching tiny chores into right-hand task lists.',
        },
        {
          step: '2',
          title: 'Insert Overflow Conditional Blocks',
          detail: 'Follow uncertain deep blocks with split-purpose buffers that absorb overruns or process secondary tasks.',
        },
        {
          step: '3',
          title: 'Rebuild Columns on Disruption',
          detail: 'When interrupted or struck by a major creative insight, redraw the remaining schedule in a parallel column.',
        },
      ],
      keyTakeaways: [
        'The goal of a daily time-block schedule is not rigid fidelity to your 8:30 a.m. plan, but maintaining thoughtful intentionality over every remaining hour.',
        'Basecamp’s 4-day workweek proves that reducing official hours disproportionately eliminates shallow overhead rather than deep output.',
      ],
      commonPitfalls: [
        'Using your morning schedule as wishful thinking with zero overflow buffers for tasks that take longer than expected.',
        'Abandoning time-blocking entirely the first time an unexpected meeting disrupts your morning plan.',
      ],
      figures: [
        {
          file: 'Art_Pline.jpg',
          originalLabel: 'Rule 4 Structural Section Divider',
          bierutTitle: 'Compress Shallow Overhead Inside Explicit Time-Block And Budget Boundaries',
          editorialAnalysis:
            'Separates the internal scheduling mechanics of Rule #4 from organizational negotiation protocols (Shallow Work Budgets, Fixed-Schedule Productivity, and Process-Centric Email). It underscores the hard structural boundary between deep mornings and bounded shallow afternoons.',
          keyTakeaways: [
            'Shallow work must be quantified and quarantined before it crowds out the 4-hour daily cognitive peak.',
          ],
        },
      ],
    },
    {
      id: 'dw-ch04-sec2',
      sectionNumber: '4.2',
      title: 'Quantifying Depth, the 30%–50% Shallow Budget, and Fixed-Schedule Productivity',
      subtitle: 'The College-Graduate training metric, Radhika Nagpal’s 50-hour cap, and the Zeigarnik Shutdown Ritual',
      coreMechanism:
        'To distinguish genuinely deep work from disguised shallow tasks, apply the College-Graduate Calibration Metric: ask how many months (M) it would take to train a smart recent college graduate with no specialized training in your field to complete the task. Editing a peer-reviewed academic paper requires 50–75 months of specialized training (Deep), whereas building a quarterly sales PowerPoint (M = 2 months) or attending a project status meeting (M = 3 months) is Shallow. Armed with time-block data, ask your boss for an explicit Shallow Work Budget—typically 30% to 50% for non-entry-level knowledge workers—giving you institutional cover to replace weekly status meetings with results-driven reporting.\n\nPair this budget with Fixed-Schedule Productivity: fix a hard 5:30 p.m. cutoff and work backward. Harvard computer science professor Radhika Nagpal earned rapid tenure and a Science cover by capping her week at 50 hours and imposing strict quotas on shallow generators (limiting academic travel to 5 trips/year), outproducing 12-hour-a-day junior faculty like "Tom." Decline shallow requests using a clear refusal with an ambiguous explanation and zero consolation prizes. Terminate every workday with a strict Shutdown Ritual—reviewing inbox/calendars, transferring open tasks onto a written plan to silence the Zeigarnik Effect (validated by Roy Baumeister and E.J. Masicampo), and speaking a termination phrase ("Shutdown complete").',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Score Tasks by Grad Months (M)',
          detail: 'Evaluate ambiguous tasks by the months required to train a smart novice graduate to replicate them.',
        },
        {
          step: '2',
          title: 'Enforce a 30%–50% Shallow Cap & 5:30 Cutoff',
          detail: 'Agree on a shallow work budget with management and impose hard quotas on shallow-generating obligations.',
        },
        {
          step: '3',
          title: 'Execute the Zeigarnik Shutdown Ritual',
          detail: 'Capture every open loop into a written next-day plan and state "Shutdown complete" to release working memory.',
        },
      ],
      keyTakeaways: [
        'Tasks that a smart college graduate can learn in 2–3 months do not leverage your specialized expertise and must be minimized.',
        'Baumeister and Masicampo proved that writing a concrete plan for how you will finish an incomplete task neutralizes the Zeigarnik Effect’s intrusive anxiety.',
        'When declining shallow obligations, give a clear refusal paired with an ambiguous explanation so the requester cannot negotiate around your excuse.',
      ],
      commonPitfalls: [
        'Offering a "consolation prize" when declining a committee ("I can’t join, but I’ll review all your drafts"), which devours nearly as much time.',
        'Allowing evening work thoughts after saying "Shutdown complete," which breaks the Pavlovian trust of your mind.',
      ],
    },
    {
      id: 'dw-ch04-sec3',
      sectionNumber: '4.3',
      title: 'Become Hard to Reach: Sender Filters, Process-Centric Replies, and Strategic Silence',
      subtitle: 'Reclaiming authority over electronic communication without getting fired',
      coreMechanism:
        'To break what John Freeman calls "the tyranny of e-mail," Rule #4 deploys three communication protocols. First, make people who send you email do more work via a Sender Filter: replace general-purpose contact addresses with conditional addresses (such as Newport’s interesting@calnewport.com) that specify exact criteria and explicitly reset the sender’s expectation of receiving a response.\n\nSecond, do more work when you send or reply to emails by adopting a Process-Centric Approach. Instead of firing off a lazy one-line reply ("Sure, when are you free next week?") that initiates five rounds of attention-fracturing scheduling ping-pong, spend two minutes identifying the entire process required to bring the project from its current state to final closure in a single message (e.g., listing exact time slots and stating: "If any of these work, consider the meeting confirmed at that time—no need to reply further"). Third, follow MIT professor Timomer’s rule and simply do not respond to any message that satisfies three criteria: (1) it is ambiguous or makes it hard for you to generate a reasonable response, (2) it is not a question or proposal that interests you, and (3) nothing really good would happen if you did respond and nothing really bad would happen if you didn’t.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Install a Sender Filter',
          detail: 'Route external inquiries through purpose-specific contacts and conditional expectations.',
        },
        {
          step: '2',
          title: 'Write Process-Centric Replies',
          detail: 'Answer two questions before replying: "What project does this represent?" and "What is the most efficient process to close it?"',
        },
        {
          step: '3',
          title: 'Apply the 3-Criteria Ignore Rule',
          detail: 'Withhold replies to ambiguous, low-interest messages where silence carries zero real downside.',
        },
      ],
      keyTakeaways: [
        'A Sender Filter eliminates inbox volume while resetting the social contract so correspondents do not expect guaranteed replies.',
        'Process-centric emails trade 2 minutes of upfront thought for the elimination of 10 subsequent inbox interruptions.',
      ],
      commonPitfalls: [
        'Treating your inbox like a tennis match where your sole objective is batting the ball back out of your court as fast as possible.',
        'Spending 20 minutes crafting polite replies to ambiguous cold emails that have zero upside or downside.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Workday Governance & Email Management Paradigms',
      description: 'Comparing Autopilot Open-Ended Workdays against Fixed-Schedule Time-Blocking and Process-Centric Communication.',
      headers: ['Governance Dimension', 'Open-Ended Autopilot ("Tom" Model)', 'Rigid Naive Scheduling', 'Rule #4 Fixed-Schedule + Process-Centric'],
      rows: [
        ['Workday Boundary', '12 hrs + weekends (85% shallow bloat)', '8 hrs (collapses on first interruption)', 'Hard 5:30 PM cutoff + Zeigarnik Shutdown'],
        ['Calendar Mechanics', 'Unstructured reactive to-do lists', 'Fixed slots with zero buffers', 'Rewritable 30m grid + Overflow Blocks'],
        ['Shallow Work Control', 'Unbounded (60%–85% of week)', 'Attempted 0% (causes boss friction)', 'Explicit 30%–50% budget + Grad Metric'],
        ['Email Protocol', 'Knee-jerk 1-line ping-pong volleys', 'Delayed batching of same volleys', 'Sender Filter + Process-Centric loop closure'],
      ],
      verdictRule:
        'Enforce a hard 5:30 p.m. Fixed-Schedule cutoff backed by a rewritable 30-minute time-block ledger and process-centric email replies.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dw-ch04-scen1',
      title: 'Negotiating a 35% Shallow Work Budget Using a 2-Week Time-Block Audit',
      roleAndContext: 'Senior Staff Machine Learning Engineer drowning in 26 hours of weekly status meetings and slide-deck preparation.',
      symptomOrFailure: 'Core model training architecture is delayed because the engineer has zero uninterrupted blocks longer than 45 minutes.',
      naiveFixAndWhyItFails: 'Working from 9:00 p.m. to 1:00 a.m. at home causes sleep deprivation and high bug rates due to depleted directed attention.',
      firstPrinciplesSolution: 'Track two weeks of 30-minute time blocks, score every task with the College-Graduate Metric (showing 68% of hours scored M ≤ 3 months), and negotiate a 35% Shallow Work Budget with the VP—replacing status meetings with asynchronous milestone memos.',
      measurableOutcome: 'Recovered 14 hours of weekly morning deep work and delivered the production ML pipeline within one month.',
    },
    {
      id: 'dw-ch04-scen2',
      title: 'Eliminating Scheduling & Spec Ping-Pong with Process-Centric Email',
      roleAndContext: 'Technical Product Lead coordinating cross-team API contracts across four time zones.',
      symptomOrFailure: 'Every simple API alignment or meeting request spawns 8 to 12 back-and-forth emails over four days.',
      naiveFixAndWhyItFails: 'Checking email more frequently only accelerates the ping-pong rate and multiplies Sophie Leroy attention residue.',
      firstPrinciplesSolution: 'Replace knee-jerk replies with Process-Centric messages that include the proposed schema, decision rubric, exact confirmation time slots, and a zero-reply default closure rule.',
      measurableOutcome: 'Reduced weekly email thread count by 65% and cut API spec sign-off latency from four days to one afternoon.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dw-ch04-q1',
        scenarioPrompt:
          'When evaluating whether a work task is "Deep" or "Shallow" under Rule #4, what exact calibration question does Cal Newport use?',
        options: [
          {
            label: 'A',
            text: 'Does this task involve writing computer code or attending a meeting?',
            isCorrect: false,
            explanation: 'Some coding tasks are routine boilerplate, and some whiteboard sessions are deep; the metric measures specialized training depth.',
          },
          {
            label: 'B',
            text: 'How long would it take (in months) to train a smart recent college graduate with no specialized training in my field to complete this task?',
            isCorrect: true,
            explanation: 'Tasks requiring 50–75 months of specialized training (like editing a research paper) leverage deep expertise, whereas 2–3 month tasks (status meetings, quarterly slide decks) are shallow.',
          },
          {
            label: 'C',
            text: 'How tired do I feel after finishing the task?',
            isCorrect: false,
            explanation: 'Shallow logistical overload and inbox switching also cause exhaustion without creating deep value.',
          },
          {
            label: 'D',
            text: 'Did my boss mark the email as High Priority?',
            isCorrect: false,
            explanation: 'Urgent logistical requests are frequently shallow under the college-graduate training metric.',
          },
        ],
      },
      {
        id: 'dw-ch04-q2',
        scenarioPrompt:
          'You create a minute-by-minute time-block schedule at 8:30 a.m., but at 10:15 a.m. an urgent production incident derails your schedule by 90 minutes. What should you do according to Rule #4?',
        options: [
          {
            label: 'A',
            text: 'Throw away the notebook for the rest of the day since your schedule was broken.',
            isCorrect: false,
            explanation: 'The goal of time-blocking is continuous thoughtful intentionality, not rigid adherence to the initial plan.',
          },
          {
            label: 'B',
            text: 'At the next available moment, cross out the remaining blocks and draw a revised time-block column for the hours that remain in the day, using Overflow Conditional Blocks to absorb future variance.',
            isCorrect: true,
            explanation: 'Rebuilding the schedule on paper keeps you in deliberate control of your remaining time even if you revise it half a dozen times.',
          },
          {
            label: 'C',
            text: 'Ignore the production incident so your 8:30 a.m. paper schedule stays neat.',
            isCorrect: false,
            explanation: 'Time-blocking explicitly accommodates genuine emergencies and creative insights through schedule revisions.',
          },
          {
            label: 'D',
            text: 'Stay at the office until 11:30 p.m. to finish every original block.',
            isCorrect: false,
            explanation: 'Working late violates Fixed-Schedule Productivity and destroys evening restoration.',
          },
        ],
      },
      {
        id: 'dw-ch04-q3',
        scenarioPrompt:
          'How does the psychological "Zeigarnik Effect" threaten evening downtime, and how does Newport’s Shutdown Ritual neutralize it (citing Roy Baumeister and E.J. Masicampo)?',
        options: [
          {
            label: 'A',
            text: 'The Zeigarnik Effect causes unfinished tasks to dominate working memory with intrusive thoughts; recording a concrete written plan for how and when you will finish each open task convinces the mind it can safely release them.',
            isCorrect: true,
            explanation: 'Baumeister and Masicampo proved that committing to a specific plan for an incomplete goal eliminates the cognitive agitation of the Zeigarnik Effect.',
          },
          {
            label: 'B',
            text: 'The Zeigarnik Effect requires you to finish 100% of your career goals every single day before 5:30 p.m.',
            isCorrect: false,
            explanation: 'You do not need to finish every task—only record a concrete plan for each open task before speaking your termination phrase.',
          },
          {
            label: 'C',
            text: 'The Zeigarnik Effect is cured by checking your inbox one last time in bed at 10:30 p.m.',
            isCorrect: false,
            explanation: 'Checking email at night re-triggers open loops and destroys the Shutdown Ritual.',
          },
          {
            label: 'D',
            text: 'The Zeigarnik Effect only affects undergraduate students taking timed exams.',
            isCorrect: false,
            explanation: 'Bluma Zeigarnik’s principle applies to any incomplete cognitive obligation in knowledge work.',
          },
        ],
      },
      {
        id: 'dw-ch04-q4',
        scenarioPrompt:
          'A colleague emails you: "Hey, we should grab coffee sometime next week to discuss the Q3 data migration—when are you free?" How does a Process-Centric reply handle this compared to a standard knee-jerk reply?',
        options: [
          {
            label: 'A',
            text: 'Reply in 5 seconds: "Sounds great! What days work for you?"',
            isCorrect: false,
            explanation: 'This knee-jerk reply surrenders control of the process and spawns 4–6 more scheduling emails.',
          },
          {
            label: 'B',
            text: 'Define the entire process to closure in one message: specify the exact prep bullets needed before meeting, list 3 exact time slots, and state that if one works they should send a calendar invite with no further email needed.',
            isCorrect: true,
            explanation: 'Process-centric emails invest a couple of minutes upfront to close the communication loop and eliminate future inbox ping-pong.',
          },
          {
            label: 'C',
            text: 'Forward the email to your boss to ask whether you should reply.',
            isCorrect: false,
            explanation: 'Escalating routine scheduling creates unnecessary shallow overhead for others.',
          },
          {
            label: 'D',
            text: 'Delete your email account and move to a stone tower.',
            isCorrect: false,
            explanation: 'Process-centric email allows normal office professionals to minimize inbox drag without monastic isolation.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dw-ch04-fc1',
        category: 'foundation',
        front: 'What is the daily biological ceiling on true Deep Work / Deliberate Practice for an experienced practitioner according to Anders Ericsson?',
        back: 'Roughly four hours per day (and about one hour per day for a novice).',
        mentalHook: '4 Hours Max = Protect the morning peak.',
      },
      {
        id: 'dw-ch04-fc2',
        category: 'architecture',
        front: 'What is an "Overflow Conditional Block" in time-block scheduling?',
        back: 'A split-purpose time block scheduled immediately after an unpredictable task: used to finish the preceding task if it runs over, or assigned an alternate list of non-urgent tasks if you finish on time.',
        mentalHook: 'Split-purpose buffer absorbs estimation variance.',
      },
      {
        id: 'dw-ch04-fc3',
        category: 'evaluation',
        front: 'What is the recommended "Shallow Work Budget" percentage for most non-entry-level knowledge work roles?',
        back: '30% to 50% of total working hours (enough to stay responsive without letting unskilled tasks exceed half your career).',
        mentalHook: '30%–50% Shallow Cap.',
      },
      {
        id: 'dw-ch04-fc4',
        category: 'optimization',
        front: 'What is "Fixed-Schedule Productivity" and how did Harvard professor Radhika Nagpal use it?',
        back: 'Fixing a firm cap on working hours (e.g., 50 hours/week or finishing by 5:30 p.m.) and working backward to ruthlessly cap shallow obligations (like limiting travel to 5 trips/year) while protecting deep research.',
        mentalHook: 'Fix the 5:30 PM cutoff first; cull shallow fat backward.',
      },
      {
        id: 'dw-ch04-fc5',
        category: 'adaptation',
        front: 'How do you decline a shallow obligation under Fixed-Schedule Productivity?',
        back: 'Give a clear refusal paired with an ambiguous explanation (so the requester cannot negotiate around specifics) and never offer a time-consuming consolation prize.',
        mentalHook: 'Clear "No", Ambiguous Reason, Zero Consolation Prize.',
      },
      {
        id: 'dw-ch04-fc6',
        category: 'architecture',
        front: 'What are the three rules of Newport’s "Become Hard to Reach" email strategy?',
        back: '(1) Make people who send you email do more work (Sender Filter), (2) Do more work when you send or reply to emails (Process-Centric Approach), and (3) Don’t respond (when ambiguous, uninteresting, and zero upside/downside).',
        mentalHook: 'Sender Filter + Process-Centric Loop Closure + Strategic Silence.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dw-ch04-feyn1',
        conceptTitle: 'Time-Block Ledgers, Depth Quantification & Shallow Work Budgets',
        prompt:
          'Explain how a knowledge worker can transition from an autopilot reactive calendar to a quantified time-block system that convinces their manager to cap shallow work at 35%.',
        rubricChecklist: [
          'Explains why self-estimated time usage fails (Vanderkam/British TV meters) and why the 4-hour daily deep cap is easily crowded out.',
          'Details the rewritable 30-minute time-block notebook, including Overflow Conditional Blocks and batched Task Blocks.',
          'Applies the College-Graduate Training Metric (months M to train a smart novice) to score tasks objectively.',
          'Shows how presenting hard shallow-to-deep ledger ratios to a manager justifies a 30%–50% Shallow Work Budget.',
        ],
        modelExplanation:
          'Because humans run on autopilot and misjudge time usage, a few scattered meetings quickly destroy the four daily hours our brains can sustain in deep work. By assigning every minute to a rewritable 30-minute time-block grid (stabilized by Overflow Conditional Blocks) and scoring every task by how many months it would take a smart college graduate to learn it, you generate objective proof of how much time is wasted on 2-month shallow tasks. Presenting those exact percentages to your boss makes the economic waste undeniable, securing agreement on a 30%–50% Shallow Work Budget.',
      },
      {
        id: 'dw-ch04-feyn2',
        conceptTitle: 'Fixed-Schedule Productivity, Zeigarnik Shutdowns & Process-Centric Email',
        prompt:
          'Explain why Harvard professor Radhika Nagpal outproduced 12-hour-a-day junior faculty while capping her workweek at 50 hours, and detail the Shutdown Ritual and Process-Centric Email tactics that make a 5:30 p.m. cutoff possible.',
        rubricChecklist: [
          'Contrasts Fixed-Schedule Productivity’s scarcity mindset (asymmetric culling of shallow fat) against unbounded workaholism.',
          'Explains the "clear refusal, ambiguous explanation, zero consolation prize" protocol for declining shallow traps.',
          'Describes the Shutdown Ritual and how Baumeister/Masicampo’s written plan neutralizes the Zeigarnik Effect.',
          'Contrasts Process-Centric email replies (closing the entire project loop in one message) against knee-jerk inbox ping-pong.',
        ],
        modelExplanation:
          'Fixed-Schedule Productivity sets a hard 5:30 p.m. cutoff and works backward. This artificial scarcity forces asymmetric triage: like Radhika Nagpal capping academic travel at five trips a year and declining shallow requests with clear refusals and ambiguous explanations, you eliminate low-value administrative fat while preserving your four daily deep hours. To make the 5:30 p.m. cutoff stick, you compress email via Sender Filters and Process-Centric replies that close scheduling and project loops in a single message, then execute a Shutdown Ritual that writes down a concrete plan for every open task—silencing the Zeigarnik Effect with "Shutdown complete."',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dw-time-block-ledger',
        label: 'Dynamic Time-Block Ledger',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition: 'Minute-by-minute daily scheduling on a lined grid (30-min minimum blocks) using parallel rewrite columns and Overflow Conditional Blocks.',
        formulaOrRule: 'Every Minute Assigned a Block + Parallel Revision Columns',
        whyItMatters: 'Eliminates autopilot drift and protects bounded deep work blocks against calendar fragmentation.',
      },
      {
        id: 'dw-grad-depth-metric',
        label: 'College-Graduate Depth Metric',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 2,
        definition: 'Quantifying an activity’s depth by the number of months (M) required to train a smart recent college graduate with zero specialized field training to perform it.',
        formulaOrRule: 'Deep Work: M ≥ 24–75 months | Shallow Work: M ≤ 1–3 months',
        whyItMatters: 'Cuts through organizational posturing to expose status meetings and slide decks as low-leverage shallow tasks.',
      },
      {
        id: 'dw-shallow-budget',
        label: 'Shallow Work Budget (30%–50%)',
        category: 'optimization',
        chapterNumber: 4,
        importance: 2,
        definition: 'Explicit agreement with management (or oneself) capping the percentage of weekly hours spent on low-M shallow tasks at 30%–50%.',
        formulaOrRule: 'Shallow Hours / Total Hours ≤ 0.30 to 0.50',
        whyItMatters: 'Provides institutional cover to replace weekly status meetings with results-driven reporting.',
      },
      {
        id: 'dw-fixed-schedule',
        label: 'Fixed-Schedule Productivity',
        category: 'optimization',
        chapterNumber: 4,
        importance: 1,
        definition: 'Meta-habit of fixing a firm end to the workday (e.g., 5:30 p.m.) and working backward via asymmetric culling of shallow obligations.',
        formulaOrRule: 'Hard 5:30 PM Cap → Scarcity Triage of Shallow Commitments',
        whyItMatters: 'Enables Radhika Nagpal and Cal Newport to outproduce 70-hour workaholics without working nights or weekends.',
      },
      {
        id: 'dw-shutdown-ritual',
        label: 'Zeigarnik Shutdown Ritual',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition: 'End-of-day audit transferring every open task into a concrete next-day written plan followed by a spoken termination phrase ("Shutdown complete").',
        formulaOrRule: 'Written Plan for Open Loops → Neutralizes Zeigarnik Intrusions',
        whyItMatters: 'Uses Baumeister and Masicampo’s mechanism to release working memory for complete evening restoration.',
      },
      {
        id: 'dw-process-email',
        label: 'Process-Centric Email Firewall',
        category: 'architecture',
        chapterNumber: 4,
        importance: 3,
        definition: 'Three-part protocol combining Sender Filters, Process-Centric loop-closing replies, and Strategic Silence on ambiguous zero-stakes messages.',
        formulaOrRule: '2 Mins Upfront Process Spec → Zero Ping-Pong Volleys',
        whyItMatters: 'Breaks the tyranny of email so your inbox serves your deep projects rather than hijacking your schedule.',
      },
    ],
    edges: [
      {
        source: 'dw-time-block-ledger',
        target: 'dw-grad-depth-metric',
        relationship: 'prerequisite_for',
        explanation: 'Logging every 30-minute block provides the ground-truth activity inventory scored by the College-Graduate Depth Metric.',
      },
      {
        source: 'dw-grad-depth-metric',
        target: 'dw-shallow-budget',
        relationship: 'evaluates',
        explanation: 'Quantifying M-month scores proves how many weekly hours are consumed by shallow tasks, justifying a 30%–50% Shallow Work Budget.',
      },
      {
        source: 'dw-fixed-schedule',
        target: 'dw-shallow-budget',
        relationship: 'optimizes',
        explanation: 'A hard 5:30 p.m. Fixed-Schedule cutoff forces you to enforce your shallow budget via clear refusals and quotas.',
      },
      {
        source: 'dw-process-email',
        target: 'dw-fixed-schedule',
        relationship: 'optimizes',
        explanation: 'Sender Filters and Process-Centric loop closure compress inbox time so you can finish work by 5:30 p.m.',
      },
      {
        source: 'dw-shutdown-ritual',
        target: 'dw-fixed-schedule',
        relationship: 'part_of',
        explanation: 'The Zeigarnik Shutdown Ritual seals the 5:30 p.m. Fixed-Schedule boundary so work anxiety never leaks into the evening.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 8,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Rule #4 and Conclusion (37signals/Basecamp 4-day week & June deep month, Ericsson 4-hour daily cap, Vanderkam/British TV self-report gap, 30-min Time-Block Ledger, Overflow Conditional Blocks, College-Graduate Training Metric, 30%-50% Shallow Work Budget, Fixed-Schedule Productivity, Radhika Nagpal vs Tom, Zeigarnik Shutdown Ritual / Baumeister & Masicampo, Sender Filter, Process-Centric Email, 3-Criteria Ignore Rule, Bill Gates BASIC finale).',
  },
};
