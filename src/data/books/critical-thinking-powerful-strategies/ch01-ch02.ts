import type { ChapterMastery } from '../../../types/book';

export const ctpsCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'Foundations of Critical Thinking & The Three-Step Filter',
  subtitle: 'Active Absorption, Practical Application, Motive Audits, and the Truism Firewall',
  readingTimeMinutes: 6,
  sourceWordCount: 2237,
  executiveThesis:
    'Critical thinking is a two-stage discipline: absorbing information with undivided focus rather than passive skimming, and putting verified knowledge to practical work in real-world decisions. To protect autonomy against social conformity and media spin, thinkers execute a three-step filter—interrogating speaker motives, verifying source evidence, and blocking the "obvious agreement" pacing trap.',
  paradigmShift: {
    oldWay: 'Passively skim headlines, nod along with popular truisms, and accept claims to fit in with the crowd.',
    newWay: 'Absorb claims deliberately, audit speaker incentives, verify primary evidence, and decouple truisms from pitches.',
    whyItChanged: 'Advertisers, politicians, and peers weaponize superficial agreement and herd pressure to smuggle unverified conclusions.'
  },
  customDiagrams: [
    {
      id: 'ctps-ch01-svg1',
      title: 'Two-Stage Engine & Three-Step Epistemic Filter',
      subtitle: 'From Active Absorption to Motive, Source, and Truism Auditing',
      bierutCaption: 'Filter claims through motive, source, and truism checks before converting information into action.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">TWO-STAGE COGNITIVE ENGINE &amp; THREE-STEP FILTER</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">Separating Passive Herd Skimming From Independent Epistemic Verification</text>
  <rect x="40" y="100" width="190" height="190" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="56" y="128" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">STAGE 01 · ABSORB</text>
  <text x="56" y="152" fill="#f8fafc" font-size="13.5" font-weight="700">Deep Intake</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10.5">• Reject passive skimming</text>
  <text x="56" y="198" fill="#cbd5e1" font-size="10.5">• Isolate exact claims</text>
  <text x="56" y="218" fill="#cbd5e1" font-size="10.5">• Suspend herd reflex</text>
  <rect x="56" y="238" width="158" height="34" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="135" y="259" text-anchor="middle" fill="#7dd3fc" font-size="10.5" font-weight="600">Full Attentional Focus</text>
  <line x1="230" y1="195" x2="265" y2="195" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="265" y="88" width="270" height="215" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="285" y="114" fill="#fbbf24" font-family="monospace" font-size="10.5" font-weight="700">THE 3-STEP EPISTEMIC FILTER</text>
  <rect x="285" y="128" width="230" height="46" rx="6" fill="#0f172a" stroke="#f59e0b"/>
  <text x="298" y="147" fill="#fde68a" font-size="11" font-weight="700">Step 1: Interrogate Motive</text>
  <text x="298" y="163" fill="#cbd5e1" font-size="10">What does the speaker stand to gain?</text>
  <rect x="285" y="184" width="230" height="46" rx="6" fill="#0f172a" stroke="#f59e0b"/>
  <text x="298" y="203" fill="#fde68a" font-size="11" font-weight="700">Step 2: Verify the Source</text>
  <text x="298" y="219" fill="#cbd5e1" font-size="10">Is evidence primary or hearsay?</text>
  <rect x="285" y="240" width="230" height="46" rx="6" fill="#0f172a" stroke="#f59e0b"/>
  <text x="298" y="259" fill="#fde68a" font-size="11" font-weight="700">Step 3: Block Truism Traps</text>
  <text x="298" y="275" fill="#cbd5e1" font-size="10">Break the "Yes-Set" agreement chain</text>
  <line x1="535" y1="195" x2="570" y2="195" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="570" y="100" width="190" height="190" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="586" y="128" fill="#34d399" font-family="monospace" font-size="10.5" font-weight="700">STAGE 02 · DEPLOY</text>
  <text x="586" y="152" fill="#f8fafc" font-size="13.5" font-weight="700">Practical Use</text>
  <text x="586" y="178" fill="#ecfdf5" font-size="10.5">• Put verified facts to work</text>
  <text x="586" y="198" fill="#ecfdf5" font-size="10.5">• Own personal decisions</text>
  <text x="586" y="218" fill="#ecfdf5" font-size="10.5">• Reject crowd conformity</text>
  <rect x="586" y="238" width="158" height="34" rx="6" fill="#022c22" stroke="#10b981"/>
  <text x="665" y="259" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="600">Autonomous Action</text>
  <rect x="40" y="325" width="720" height="56" rx="8" fill="#172554" stroke="#3b82f6"/>
  <text x="400" y="358" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="600">Core Rule: Absorbing information without practical evaluation is Trivia; acting without filtering is Gullibility.</text>
</svg>`,
      annotations: [
        { step: '1', label: 'Deep Absorption', explanation: 'Replaces distracted skimming with deliberate focus.' },
        { step: '2', label: '3-Step Filter', explanation: 'Audits motive, source quality, and truism pacing.' },
        { step: '3', label: 'Practical Utility', explanation: 'Converts verified knowledge into independent decisions.' }
      ]
    },
    {
      id: 'ctps-ch01-svg2',
      title: 'Anatomy of the "Obvious Agreement" (Yes-Set) Trap',
      subtitle: 'How Manipulators Stack Truisms to Smuggle an Unverified Pitch',
      bierutCaption: 'Sever the artificial link between opening truisms and the manipulator\'s self-serving conclusion.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">DECONSTRUCTING THE "OBVIOUS AGREEMENT" (YES-SET) TRAP</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">Why Nodding Along to Three Truisms Does Not Validate the Fourth Claim</text>
  <rect x="40" y="100" width="290" height="260" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="60" y="128" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">PHASE 1 · THE "YES-SET" BAIT</text>
  <rect x="60" y="145" width="250" height="52" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="74" y="166" fill="#f8fafc" font-size="11" font-weight="600">Truism 1: "The sky is blue."</text>
  <text x="74" y="184" fill="#34d399" font-size="10">Listener Reflex: "Yes, obviously true."</text>
  <rect x="60" y="210" width="250" height="52" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="74" y="231" fill="#f8fafc" font-size="11" font-weight="600">Truism 2: "Families deserve safety."</text>
  <text x="74" y="249" fill="#34d399" font-size="10">Listener Reflex: "Yes, I agree."</text>
  <rect x="60" y="275" width="250" height="52" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="74" y="296" fill="#f8fafc" font-size="11" font-weight="600">Truism 3: "Taxes shouldn't be wasted."</text>
  <text x="74" y="314" fill="#34d399" font-size="10">Listener Reflex: Guard drops to zero.</text>
  <line x1="330" y1="230" x2="450" y2="230" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6 4"/>
  <rect x="352" y="175" width="76" height="110" rx="8" fill="#4c0519" stroke="#f43f5e" stroke-width="2"/>
  <text x="390" y="220" text-anchor="middle" fill="#fecdd3" font-family="monospace" font-size="10" font-weight="700">CRITICAL</text>
  <text x="390" y="236" text-anchor="middle" fill="#fecdd3" font-family="monospace" font-size="10" font-weight="700">FIREWALL</text>
  <text x="390" y="256" text-anchor="middle" fill="#fda4af" font-size="9">Break Chain</text>
  <rect x="450" y="100" width="310" height="260" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="470" y="128" fill="#fb7185" font-family="monospace" font-size="10.5" font-weight="700">PHASE 2 · THE SMUGGLED PITCH</text>
  <text x="470" y="158" fill="#f8fafc" font-size="12.5" font-weight="700">"Therefore, buy my product / vote for my bill!"</text>
  <rect x="470" y="180" width="270" height="155" rx="8" fill="#0f172a" stroke="#334155"/>
  <text x="486" y="206" fill="#fbbf24" font-family="monospace" font-size="10.5" font-weight="700">AUDIT QUESTIONS AT THE FIREWALL:</text>
  <text x="486" y="230" fill="#cbd5e1" font-size="10.5">1. Does Truism 1–3 logically prove Claim 4?</text>
  <text x="486" y="252" fill="#cbd5e1" font-size="10.5">2. What financial or political motive drives Claim 4?</text>
  <text x="486" y="274" fill="#cbd5e1" font-size="10.5">3. What independent primary evidence backs it?</text>
  <text x="486" y="306" fill="#6ee7b7" font-size="10.5" font-weight="700">Verdict: Evaluate Claim 4 in total isolation.</text>
</svg>`,
      annotations: [
        { step: '1', label: 'Yes-Set Bait', explanation: 'Opens with obvious facts to trigger agreement momentum.' },
        { step: '2', label: 'Critical Firewall', explanation: 'Three truisms provide zero logical proof for a fourth claim.' },
        { step: '3', label: 'Isolated Audit', explanation: 'Tests the final pitch independently for motive and proof.' }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'ctps-ch01-mm1',
      name: 'The Absorption-Application Engine',
      tagline: 'Pair focused information intake with real-world execution',
      naiveIntuition: 'Treat reading or listening as passive entertainment where skimming suffices.',
      firstPrinciplesReality: 'Critical thinking requires absorbing information with undivided focus and applying verified insights to practical decisions.',
      howToApply: 'Eliminate multitasking during intake and state how a verified claim alters a concrete decision.'
    },
    {
      id: 'ctps-ch01-mm2',
      name: 'Cui Bono Motive Audit',
      tagline: 'Ask what the speaker stands to gain before accepting their framing',
      naiveIntuition: 'Assume confident speakers share advice out of objective neutrality.',
      firstPrinciplesReality: 'Persuasive messages carry financial, status, or ideological incentives that dictate which facts are highlighted or omitted.',
      howToApply: 'Write down in one sentence how the speaker benefits if you accept their conclusion.'
    },
    {
      id: 'ctps-ch01-mm3',
      name: 'The Yes-Set Firewall',
      tagline: 'Never let obvious truisms lower your guard against the final pitch',
      naiveIntuition: 'Trust a recommendation because the speaker\'s opening statements were undeniably true.',
      firstPrinciplesReality: 'Manipulators stack indisputable truisms to induce a nodding reflex ("Yes-Set") right before inserting an unproved pitch.',
      howToApply: 'When a speaker pivots from shared truisms to a call to action, reset skepticism to 100%.'
    }
  ],
  deepSections: [
    {
      id: 'ctps-ch01-sec1',
      sectionNumber: '1.1',
      title: 'Two-Stage Critical Thinking: Absorption and Application',
      subtitle: 'Replacing Passive Skimming and Conformity With Deliberate Utility',
      coreMechanism:
        'Harvey Segler defines critical thinking as a two-part cognitive operation: first, **absorbing information** with complete attentional presence; second, **putting that information to practical use** in daily life. Most adults fail at Stage 1 because they skim articles, half-listen during conversations, and absorb claims through a fog of distraction. Without accurate intake, downstream reasoning is impossible.\n\nStage 2 requires escaping the comfort of social conformity. People routinely outsource their beliefs to family tradition, peer groups, or partisan media because standing alone feels socially risky. True critical thinkers refuse to treat information as decorative trivia; they test every absorbed claim against objective reality and use it to improve concrete financial, career, and personal decisions.',
      stepByStepFlow: [
        { step: '1', title: 'Eliminate Skimming', detail: 'Read and listen with undivided focus to capture exact claims.' },
        { step: '2', title: 'Detach From Herd', detail: 'Separate objective truth from peer-group applause.' },
        { step: '3', title: 'Deploy Practically', detail: 'Translate verified knowledge into a concrete decision rule.' }
      ],
      keyTakeaways: [
        'You cannot evaluate a claim critically if you only skimmed its surface while distracted.',
        'Knowledge only becomes critical thinking when applied to real decisions independent of crowd pressure.'
      ],
      commonPitfalls: [
        'Mistaking rapid headline scrolling for genuine information absorption.',
        'Adopting a belief simply to avoid awkwardness inside a peer group.'
      ]
    },
    {
      id: 'ctps-ch01-sec2',
      sectionNumber: '1.2',
      title: 'Steps 1 & 2: Motive Interrogation and Source Verification',
      subtitle: 'Auditing Speaker Incentives and Tracing Claims to Primary Evidence',
      coreMechanism:
        'Once information is absorbed, Segler routes it through the first two gates of his **Three-Step Epistemic Filter**. **Step 1: Question the Motive.** Whenever someone presents an argument—whether a salesperson, politician, pundit, or acquaintance—ask what they stand to gain if you believe them. Identifying financial commission, ideological recruitment, or ego protection immediately exposes why certain facts were emphasized and others hidden.\n\n**Step 2: Verify the Source.** A claim is only as reliable as the evidence chain beneath it. Critical thinkers distinguish primary empirical data and verifiable track records from second-hand rumors, anonymous internet posts, and manufactured authority. If a source has a history of distortion or cites zero falsifiable data, the claim is quarantined until corroborated independently.',
      stepByStepFlow: [
        { step: '1', title: 'Map Incentives', detail: 'Identify rewards the speaker captures if you accept their claim.' },
        { step: '2', title: 'Inspect Provenance', detail: 'Trace claims to primary records rather than hearsay.' },
        { step: '3', title: 'Audit Track Record', detail: 'Check whether the source historically corrects errors.' }
      ],
      keyTakeaways: [
        'Hidden incentives reliably predict which downsides a persuasive speaker will omit.',
        'Unverified secondary claims must be treated as hypotheses until primary sources confirm them.'
      ],
      commonPitfalls: [
        'Confusing polished graphic design or confident delivery with source credibility.',
        'Forgetting to ask how "free" advice monetizes your attention or action.'
      ]
    },
    {
      id: 'ctps-ch01-sec3',
      sectionNumber: '1.3',
      title: 'Step 3: Defeating the "Obvious Agreement" Trap',
      subtitle: 'How Persuaders Use Undisputed Truisms to Lower Epistemic Defenses',
      coreMechanism:
        '**Step 3** targets one of the most pervasive manipulation tactics in advertising and politics: the **Obvious Agreement Trap** (known in persuasion psychology as the "Yes-Set"). A skilled manipulator begins by stating three or four undeniable truisms—statements as obvious as "the sky is blue," "hardworking families deserve financial security," or "nobody wants corrupt government." As the listener repeatedly nods in agreement, their critical defenses relax and they subconsciously classify the speaker as a trustworthy ally.\n\nThe manipulator then seamlessly appends their true payload—an unproven product pitch, a risky investment, or a partisan policy—as if it were the natural continuation of the preceding truisms. Critical thinkers erect a hard mental firewall between agreed-upon truisms and the final conclusion, demanding independent proof for the pitch.',
      stepByStepFlow: [
        { step: '1', title: 'Spot Truism Stacks', detail: 'Notice when a speaker opens with universally accepted truisms.' },
        { step: '2', title: 'Erect Pivot Firewall', detail: 'Halt nodding the instant the speaker shifts to a prescription.' },
        { step: '3', title: 'Test Payload Alone', detail: 'Evaluate the final pitch on standalone evidence.' }
      ],
      keyTakeaways: [
        'Agreeing with 90% of opening truisms lends zero logical validity to the final 10% pitch.',
        'The more flattering the opening statements, the more vigilantly you must inspect the closing request.'
      ],
      commonPitfalls: [
        'Feeling socially obligated to say "yes" to a conclusion after agreeing with five truisms.',
        'Conflating shared values ("we care about health") with proof of efficacy ("this pill works").'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Passive Consumption vs. 3-Step Epistemic Filter',
      description: 'Comparing herd listening against motive, source, and truism auditing.',
      headers: ['Dimension', 'Passive Consumption', '3-Step Filter', 'Impact'],
      rows: [
        ['Intake', 'Distracted skimming', 'Focused absorption', 'Prevents misreading'],
        ['Motive', 'Assumes neutrality', 'Audits speaker gain', 'Exposes bias'],
        ['Source', 'Accepts viral tone', 'Verifies primary proof', 'Blocks rumors'],
        ['Truisms', 'Falls for Yes-Set', 'Isolates final pitch', 'Stops manipulation']
      ],
      verdictRule: 'Apply all three filter steps whenever a message asks for your money, vote, or belief.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'ctps-ch01-scen1',
      title: 'Blocking a Vendor "Yes-Set" Pitch in SaaS Procurement',
      roleAndContext: 'VP of Engineering evaluating an AI DevOps vendor',
      symptomOrFailure: 'A vendor opens with four undeniable truisms about developer burnout before pitching an unverified $400K contract.',
      naiveFixAndWhyItFails: 'Sign based on the shared vision—ignoring that burnout truisms prove nothing about legacy codebase performance.',
      firstPrinciplesSolution: 'Isolate the commission motive, sever the truisms from the product claim, and require a 14-day primary benchmark.',
      measurableOutcome: 'Benchmark exposes 65% build failure on internal repos, saving $400K in wasted licensing.'
    },
    {
      id: 'ctps-ch01-scen2',
      title: 'Filtering Biased Financial Advisory Pitches',
      roleAndContext: 'Investor reviewing a retirement portfolio overhaul',
      symptomOrFailure: 'An advisor states inflation truisms and recommends moving 60% of savings into a high-fee proprietary annuity.',
      naiveFixAndWhyItFails: 'Buy the annuity because inflation is real—ignoring the advisor\'s 7% upfront commission motive.',
      firstPrinciplesSolution: 'Demand fee disclosures (Step 1) and compare primary net returns against low-cost index funds (Step 2).',
      measurableOutcome: 'Avoids a 2.4% annual fee drag, preserving $180,000 in compounded retirement capital.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctps-ch01-q1',
        scenarioPrompt: 'According to Harvey Segler, what are the two foundational stages that define critical thinking?',
        options: [
          {
            label: 'A',
            text: 'Memorizing academic trivia and winning debates at parties.',
            isCorrect: false,
            explanation: 'Segler rejects passive trivia hoarding and ego-driven arguing.'
          },
          {
            label: 'B',
            text: 'Absorbing information deeply with full focus, and putting that evaluated information to practical use in real-world decisions.',
            isCorrect: true,
            explanation: 'Critical thinking requires both deliberate intake (absorption) and autonomous practical execution.'
          },
          {
            label: 'C',
            text: 'Following the majority opinion of your social group and avoiding conflict.',
            isCorrect: false,
            explanation: 'Herd conformity is the primary obstacle to independent critical thought.'
          },
          {
            label: 'D',
            text: 'Skimming as many internet headlines as possible each morning.',
            isCorrect: false,
            explanation: 'Passive skimming prevents deep comprehension and critical evaluation.'
          }
        ]
      },
      {
        id: 'ctps-ch01-q2',
        scenarioPrompt: 'How does the "Obvious Agreement Trap" (Step 3 of the Epistemic Filter) manipulate listeners?',
        options: [
          {
            label: 'A',
            text: 'By using complex mathematical equations that intimidate the audience.',
            isCorrect: false,
            explanation: 'The trap relies on simple, undeniable truisms rather than complex math.'
          },
          {
            label: 'B',
            text: 'By stacking obvious truisms ("the sky is blue") so the listener builds a habit of nodding along before the speaker slips in an unproven, self-serving conclusion.',
            isCorrect: true,
            explanation: 'Stacking indisputable statements lowers epistemic vigilance so the final pitch bypasses scrutiny.'
          },
          {
            label: 'C',
            text: 'By insulting the listener until they surrender.',
            isCorrect: false,
            explanation: 'The Yes-Set relies on flattering agreement, not insults.'
          },
          {
            label: 'D',
            text: 'By hiding the conclusion at the beginning of the speech.',
            isCorrect: false,
            explanation: 'The pitch is placed at the end after agreement momentum is established.'
          }
        ]
      },
      {
        id: 'ctps-ch01-q3',
        scenarioPrompt: 'Why is interrogating the speaker\'s motive the very first step in Segler\'s filtering protocol?',
        options: [
          {
            label: 'A',
            text: 'Because anyone with a financial motive is automatically lying about everything.',
            isCorrect: false,
            explanation: 'Having a motive does not guarantee a lie, but it reveals where bias and selective omission are likely to occur.'
          },
          {
            label: 'B',
            text: 'Because understanding what a speaker stands to gain reveals their incentive to highlight favorable facts and conceal downsides.',
            isCorrect: true,
            explanation: 'Knowing the speaker\'s incentive directs your scrutiny toward the exact risks they have a reason to downplay.'
          },
          {
            label: 'C',
            text: 'So you can attack their character instead of inspecting their evidence.',
            isCorrect: false,
            explanation: 'Motive analysis is paired with Step 2 (Source/Evidence verification), not used as an excuse to skip evidence.'
          },
          {
            label: 'D',
            text: 'Because motives are easier to check than facts.',
            isCorrect: false,
            explanation: 'Both motive and source verification are required steps in the filter.'
          }
        ]
      },
      {
        id: 'ctps-ch01-q4',
        scenarioPrompt: 'A viral health post cites "leading doctors" without naming a single peer-reviewed study, while selling a $79 detox powder at the bottom of the page. Which steps of Segler\'s filter does this fail?',
        options: [
          {
            label: 'A',
            text: 'Only Step 3 (Obvious Agreement).',
            isCorrect: false,
            explanation: 'It also fails Motive (Step 1) and Source Verification (Step 2).'
          },
          {
            label: 'B',
            text: 'Steps 1 and 2 (undisclosed financial motive and unverified anonymous sources), often combined with Step 3 health truisms.',
            isCorrect: true,
            explanation: 'The post has a direct financial motive ($79 product) and zero verifiable primary source evidence.'
          },
          {
            label: 'C',
            text: 'None; citing "leading doctors" satisfies source verification.',
            isCorrect: false,
            explanation: 'Vague, unnamed authority claims fail primary source verification.'
          },
          {
            label: 'D',
            text: 'Only Stage 1 skimming.',
            isCorrect: false,
            explanation: 'The flaw lies in the source\'s motive and lack of verifiable evidence.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'ctps-ch01-fc1',
        category: 'foundation',
        front: 'What are the two core stages of critical thinking in Chapter 1?',
        back: '1. Absorbing information deeply with full focus; 2. Putting that verified knowledge to practical use in decisions.',
        mentalHook: 'Absorb deeply -> Apply practically.'
      },
      {
        id: 'ctps-ch01-fc2',
        category: 'evaluation',
        front: 'What are the three steps of Segler\'s Information Filtering Protocol?',
        back: 'Step 1: Interrogate the speaker\'s motive; Step 2: Verify the source and evidence; Step 3: Block the Obvious Agreement ("Yes-Set") trap.',
        mentalHook: 'Motive -> Source -> Truism Firewall.'
      },
      {
        id: 'ctps-ch01-fc3',
        category: 'security',
        front: 'What is the "Obvious Agreement Trap"?',
        back: 'A persuasion trick where a speaker stacks undeniable truisms to get you nodding before slipping in an unproved, self-serving conclusion.',
        mentalHook: 'Three "sky is blue" truths don\'t prove the fourth pitch.'
      },
      {
        id: 'ctps-ch01-fc4',
        category: 'adaptation',
        front: 'Why does social conformity sabotage Stage 2 of critical thinking?',
        back: 'Because fear of standing out makes people adopt herd opinions instead of acting on objective, independently verified facts.',
        mentalHook: 'Comfort with the crowd kills independent judgment.'
      },
      {
        id: 'ctps-ch01-fc5',
        category: 'data',
        front: 'What must you check during Step 2 (Source Verification)?',
        back: 'Whether the claim is backed by primary verifiable evidence and a reliable track record rather than hearsay or anonymous authority.',
        mentalHook: 'Demand primary receipts, not polished rumors.'
      },
      {
        id: 'ctps-ch01-fc6',
        category: 'optimization',
        front: 'How do you neutralize a Yes-Set pitch in real time?',
        back: 'Mentally separate the opening truisms from the final request and demand standalone evidence for the closing claim.',
        mentalHook: 'Cut the wire between the truism bait and the hook.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'ctps-ch01-fc-1',
        conceptTitle: 'The Three-Step Epistemic Filter Against Manipulation',
        prompt: 'Explain how to audit a persuasive speech or advertisement using Segler\'s Three-Step Filter (Motive, Source, and Obvious Agreement Trap).',
        rubricChecklist: [
          'Identifies Step 1: Asking what financial, political, or ego reward the speaker gains.',
          'Identifies Step 2: Verifying source credibility and primary evidence.',
          'Identifies Step 3: Detecting the "Obvious Agreement" (Yes-Set) truism stack.',
          'Explains how to sever the opening truisms from the final call to action.'
        ],
        modelExplanation:
          'When evaluating any persuasive claim, run three sequential checks. First, ask what the speaker stands to gain financially or socially if you agree, which reveals what downsides they are incentivized to hide. Second, audit the source to verify whether primary evidence backs the claim. Third, watch out for the Obvious Agreement Trap, where the speaker stacks undeniable truisms to get you nodding before slipping in their pitch; sever the truisms from the final claim and judge the pitch on its standalone proof.'
      },
      {
        id: 'ctps-ch01-fc-2',
        conceptTitle: 'Deep Absorption vs. Passive Skimming',
        prompt: 'Explain why Segler pairs deep information absorption with practical life application as the twin pillars of critical thinking.',
        rubricChecklist: [
          'Contrasts focused absorption against modern distracted skimming.',
          'Explains why you cannot critically audit a claim you only half-read.',
          'Defines practical application as using verified insights to make autonomous decisions.',
          'Highlights overcoming social conformity to act on independent conclusions.'
        ],
        modelExplanation:
          'Critical thinking fails at the input stage if you merely skim headlines while distracted, because you miss the subtle qualifiers and missing evidence in a claim. And it fails at the output stage if you treat knowledge as idle trivia or bow to peer pressure. Only by absorbing claims with undivided focus and courageously applying verified conclusions to your real-world decisions do you practice complete critical thinking.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctps-ch01-n1',
        label: 'Deep Information Absorption',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition: 'Consuming claims with undivided attentional focus rather than passive skimming.',
        whyItMatters: 'Provides accurate raw input for all downstream logical evaluation.'
      },
      {
        id: 'ctps-ch01-n2',
        label: 'Motive Interrogation',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 1,
        definition: 'Auditing what financial, political, or ego reward a speaker captures if their claim is accepted.',
        whyItMatters: 'Reveals hidden conflicts of interest and selective omissions.'
      },
      {
        id: 'ctps-ch01-n3',
        label: 'Source Provenance Audit',
        category: 'data',
        chapterNumber: 1,
        importance: 1,
        definition: 'Verifying primary evidence and historical reliability beneath a stated claim.',
        whyItMatters: 'Filters out hearsay, fabricated statistics, and counterfeit authority.'
      },
      {
        id: 'ctps-ch01-n4',
        label: 'Yes-Set Truism Firewall',
        category: 'security',
        chapterNumber: 1,
        importance: 1,
        definition: 'Breaking the psychological agreement momentum created when manipulators stack obvious truisms.',
        whyItMatters: 'Prevents unverified pitches from piggybacking on indisputable opening facts.'
      },
      {
        id: 'ctps-ch01-n5',
        label: 'Practical Decision Utility',
        category: 'optimization',
        chapterNumber: 1,
        importance: 2,
        definition: 'Translating verified knowledge into concrete personal, financial, and career actions.',
        whyItMatters: 'Turns abstract reasoning into measurable life improvements.'
      },
      {
        id: 'ctps-ch01-n6',
        label: 'Non-Conformist Autonomy',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 2,
        definition: 'Acting on independently verified truth even when it diverges from peer-group orthodoxy.',
        whyItMatters: 'Protects decision quality from herd pressure.'
      }
    ],
    edges: [
      {
        source: 'ctps-ch01-n1',
        target: 'ctps-ch01-n2',
        relationship: 'prerequisite_for',
        explanation: 'Focused absorption is required before a listener can accurately audit speaker motives.'
      },
      {
        source: 'ctps-ch01-n2',
        target: 'ctps-ch01-n3',
        relationship: 'part_of',
        explanation: 'Motive interrogation and source provenance form the first two gates of the epistemic filter.'
      },
      {
        source: 'ctps-ch01-n4',
        target: 'ctps-ch01-n3',
        relationship: 'optimizes',
        explanation: 'Severing opening truisms forces the final pitch to undergo strict source verification.'
      },
      {
        source: 'ctps-ch01-n3',
        target: 'ctps-ch01-n5',
        relationship: 'prerequisite_for',
        explanation: 'Only source-verified claims should be deployed into practical life decisions.'
      },
      {
        source: 'ctps-ch01-n6',
        target: 'ctps-ch01-n5',
        relationship: 'optimizes',
        explanation: 'Emotional independence from the crowd enables consistent practical execution.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: 'Verified Chapter 1 within compression ceiling.'
  }
};

export const ctpsCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Problem-Solving Leverage & Analytical Deconstruction',
  subtitle: 'Defeating the Lookup Reflex, First-Principles Proofs, and Decision Accountability',
  readingTimeMinutes: 6,
  sourceWordCount: 1704,
  executiveThesis:
    'Search engines breed a "fix-it-and-forget-it" reflex where people copy surface answers without learning the causal mechanism. Because non-algorithmic life dilemmas—career pivots, relationships, and capital allocation—have no online answer key, critical thinkers master first-principles proofs and accept 100% ownership of their decision outcomes.',
  paradigmShift: {
    oldWay: 'Outsource problems to quick internet searches or friends\' opinions and blame advisers when outcomes fail.',
    newWay: 'Learn the causal "geometry proof" behind systems, decompose dilemmas independently, and own every consequence.',
    whyItChanged: 'Surface copying leaves you helpless on novel dilemmas, and outsourcing choices surrenders agency to people without skin in the game.'
  },
  customDiagrams: [
    {
      id: 'ctps-ch02-svg1',
      title: 'The "Fix-It-and-Forget-It" Trap vs. First-Principles Mastery',
      subtitle: 'Why Surface Internet Lookups Fail on Non-Algorithmic Life Dilemmas',
      bierutCaption: 'Replace shallow lookup patches with causal first-principles understanding to solve unscripted dilemmas.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">SURFACE LOOKUP REFLEX VS. FIRST-PRINCIPLES MASTERY</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">Why Memorizing "2 + 2 = 4" Fails Without Knowing the Underlying Proof</text>
  <rect x="40" y="92" width="720" height="128" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="60" y="118" fill="#fb7185" font-family="monospace" font-size="10.5" font-weight="700">PATH A · THE "FIX-IT-AND-FORGET-IT" INTERNET REFLEX</text>
  <rect x="60" y="132" width="200" height="68" rx="6" fill="#0f172a" stroke="#f43f5e"/>
  <text x="74" y="154" fill="#fda4af" font-size="11" font-weight="700">1. Surface Lookup</text>
  <text x="74" y="174" fill="#cbd5e1" font-size="10">Copy a quick answer from</text>
  <text x="74" y="188" fill="#cbd5e1" font-size="10">search engine or friend.</text>
  <line x1="260" y1="166" x2="295" y2="166" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="295" y="132" width="200" height="68" rx="6" fill="#0f172a" stroke="#f43f5e"/>
  <text x="309" y="154" fill="#fda4af" font-size="11" font-weight="700">2. Zero Mechanism</text>
  <text x="309" y="174" fill="#cbd5e1" font-size="10">Apply patch blindly without</text>
  <text x="309" y="188" fill="#cbd5e1" font-size="10">learning why it works.</text>
  <line x1="495" y1="166" x2="530" y2="166" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="530" y="132" width="210" height="68" rx="6" fill="#4c0519" stroke="#f43f5e"/>
  <text x="544" y="154" fill="#fecdd3" font-size="11" font-weight="700">3. Helpless on Life Dilemmas</text>
  <text x="544" y="174" fill="#fecdd3" font-size="10">Fails when career/personal</text>
  <text x="544" y="188" fill="#fecdd3" font-size="10">context has no lookup key.</text>
  <rect x="40" y="248" width="720" height="136" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="60" y="274" fill="#34d399" font-family="monospace" font-size="10.5" font-weight="700">PATH B · THE "GEOMETRY PROOF" FIRST-PRINCIPLES PROTOCOL</text>
  <rect x="60" y="290" width="200" height="74" rx="6" fill="#0f172a" stroke="#10b981"/>
  <text x="74" y="312" fill="#6ee7b7" font-size="11" font-weight="700">1. Deconstruct Mechanism</text>
  <text x="74" y="332" fill="#cbd5e1" font-size="10">Learn the causal proof behind</text>
  <text x="74" y="346" fill="#cbd5e1" font-size="10">how variables interact.</text>
  <line x1="260" y1="327" x2="295" y2="327" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="295" y="290" width="200" height="74" rx="6" fill="#0f172a" stroke="#10b981"/>
  <text x="309" y="312" fill="#6ee7b7" font-size="11" font-weight="700">2. Synthesize Options</text>
  <text x="309" y="332" fill="#cbd5e1" font-size="10">Weigh context-specific trade-offs</text>
  <text x="309" y="346" fill="#cbd5e1" font-size="10">for non-algorithmic choices.</text>
  <line x1="495" y1="327" x2="530" y2="327" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="530" y="290" width="210" height="74" rx="6" fill="#022c22" stroke="#10b981"/>
  <text x="544" y="312" fill="#a7f3d0" font-size="11" font-weight="700">3. Total Ownership</text>
  <text x="544" y="332" fill="#ecfdf5" font-size="10">Accept 100% accountability;</text>
  <text x="544" y="346" fill="#ecfdf5" font-size="10">turn errors into feedback.</text>
</svg>`,
      annotations: [
        { step: '1', label: 'Lookup Reflex', explanation: 'Copying online answers leaves the mind ignorant of causal rules.' },
        { step: '2', label: 'Geometry Proof', explanation: 'Knowing why a theorem works lets you derive new solutions.' },
        { step: '3', label: 'Ownership Loop', explanation: 'Owning outcomes eliminates blame and accelerates mastery.' }
      ]
    },
    {
      id: 'ctps-ch02-svg2',
      title: 'Decision Accountability & Blame-Elimination Matrix',
      subtitle: 'Why Outsourcing Life Choices Corrupts Learning and Agency',
      bierutCaption: 'Gather external perspectives as raw data, but retain 100% ownership of the final choice.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">DECISION OWNERSHIP VS. BLAME-SHIFTING DEPENDENCY</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">Why Friends and Search Engines Cannot Bear the Consequences of Your Life Choices</text>
  <rect x="40" y="95" width="335" height="285" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="60" y="124" fill="#fbbf24" font-family="monospace" font-size="10.5" font-weight="700">MODE 1 · OUTSOURCED DECISION TRAP</text>
  <text x="60" y="152" fill="#f8fafc" font-size="13" font-weight="700">"What should I do with my life?"</text>
  <text x="60" y="182" fill="#cbd5e1" font-size="11">• Asks friends or internet to pick</text>
  <text x="60" y="206" fill="#cbd5e1" font-size="11">• Hidden motive: Pre-staging a scapegoat</text>
  <text x="60" y="230" fill="#cbd5e1" font-size="11">• Adviser has zero skin in the game</text>
  <rect x="60" y="260" width="295" height="95" rx="8" fill="#451a03" stroke="#f59e0b"/>
  <text x="76" y="286" fill="#fde68a" font-size="11" font-weight="700">Downstream Failure Mode:</text>
  <text x="76" y="308" fill="#fcd34d" font-size="10.5">When the choice fails, the thinker blames</text>
  <text x="76" y="326" fill="#fcd34d" font-size="10.5">the adviser and learns zero causal lessons.</text>
  <line x1="375" y1="238" x2="425" y2="238" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="425" y="95" width="335" height="285" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="445" y="124" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">MODE 2 · SOVEREIGN CRITICAL OWNERSHIP</text>
  <text x="445" y="152" fill="#f8fafc" font-size="13" font-weight="700">"How do the underlying variables work?"</text>
  <text x="445" y="182" fill="#cbd5e1" font-size="11">• Consults experts only for raw facts</text>
  <text x="445" y="206" fill="#cbd5e1" font-size="11">• Weighs personal values &amp; risk tolerance</text>
  <text x="445" y="230" fill="#cbd5e1" font-size="11">• Executes final judgment autonomously</text>
  <rect x="445" y="260" width="295" height="95" rx="8" fill="#0c4a6e" stroke="#38bdf8"/>
  <text x="461" y="286" fill="#bae6fd" font-size="11" font-weight="700">Compounding Mastery Loop:</text>
  <text x="461" y="308" fill="#7dd3fc" font-size="10.5">Owns both wins and losses, refining the</text>
  <text x="461" y="326" fill="#7dd3fc" font-size="10.5">internal mental model after every outcome.</text>
</svg>`,
      annotations: [
        { step: '1', label: 'Scapegoat Motive', explanation: 'Outsourcing decisions pre-stages someone to blame if things fail.' },
        { step: '2', label: 'Skin in the Game', explanation: 'Advisers do not live with the consequences of your choices.' },
        { step: '3', label: 'Sovereign Synthesis', explanation: 'Use external sources for facts, but decide autonomously.' }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'ctps-ch02-mm1',
      name: 'Fix-It-and-Forget-It Antidote',
      tagline: 'Never apply a surface patch without extracting the causal rule',
      naiveIntuition: 'Treat every problem like a search query: copy the snippet, fix the glitch, and move on.',
      firstPrinciplesReality: 'Instant lookup culture atrophies reasoning; without knowing why a solution works, you fail when parameters shift.',
      howToApply: 'After looking up any fix, write down the root cause and the mechanism that resolved it.'
    },
    {
      id: 'ctps-ch02-mm2',
      name: 'The Geometry Proof Standard',
      tagline: 'Know why 2 + 2 = 4 rather than memorizing the output',
      naiveIntuition: 'Assume memorizing formulas is equivalent to mastering a domain.',
      firstPrinciplesReality: 'Only first-principles derivation transfers to unscripted, non-algorithmic life dilemmas.',
      howToApply: 'Derive why a strategy works from basic human incentives and resource constraints.'
    },
    {
      id: 'ctps-ch02-mm3',
      name: 'Zero-Scapegoat Accountability',
      tagline: 'Never outsource a decision to someone who bears zero consequences',
      naiveIntuition: 'Poll friends or forums to tell you whether to change jobs or invest.',
      firstPrinciplesReality: 'Outsourcing personal decisions is a covert attempt to pre-stage a scapegoat and dodge responsibility.',
      howToApply: 'Gather factual inputs from peers, but sign your own name to the final decision.'
    }
  ],
  deepSections: [
    {
      id: 'ctps-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Overcoming the "Fix-It-and-Forget-It" Lookup Reflex',
      subtitle: 'How Instant Search Engines Atrophy Deep Causal Problem Solving',
      coreMechanism:
        'Modern digital conveniences have trained adults into a **"fix-it-and-forget-it" mentality**. When a car stalls, a budget breaks, or a software build fails, people immediately type the symptom into a search engine, copy the top step-by-step recipe, and forget the problem five minutes later. While efficient for trivial repairs, this reflex bypasses the analytical struggle that builds cognitive leverage.\n\nSegler compares this to memorizing that $2 + 2 = 4$ or copying a geometry answer without learning the underlying proof. When you only copy surface fixes, your brain never maps the causal structure of the system, leaving you unable to troubleshoot when the next problem deviates slightly from the script.',
      stepByStepFlow: [
        { step: '1', title: 'Catch Lookup Impulse', detail: 'Notice when you reach for an external answer before thinking.' },
        { step: '2', title: 'Extract Causal Proof', detail: 'Ask why the fix works structurally rather than copying steps.' },
        { step: '3', title: 'Store the Principle', detail: 'Retain the causal rule to solve future variations independently.' }
      ],
      keyTakeaways: [
        'Instant answers solve today\'s symptom at the cost of tomorrow\'s problem-solving independence.',
        'Mastering the "geometry proof" behind a system gives you permanent leverage across novel situations.'
      ],
      commonPitfalls: [
        'Confusing the ability to Google a quick patch with genuine domain competence.',
        'Abandoning a problem once the symptom vanishes without diagnosing the root cause.'
      ]
    },
    {
      id: 'ctps-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Solving Non-Algorithmic Life Dilemmas',
      subtitle: 'Why Career, Relationship, and Value Decisions Cannot Be Googled',
      coreMechanism:
        'The danger of the lookup reflex becomes acute when confronting **non-algorithmic life dilemmas**: Should you leave a stable job for an uncertain venture? How should you repair a fractured relationship with a sibling? Where should you allocate scarce family capital? No search engine or textbook holds a pre-verified answer key for these choices because they depend on your unique constraints, risk tolerance, and values.\n\nAnalytical deconstruction breaks these messy dilemmas into explicit components: isolating what you actually control, mapping the best-case and worst-case trajectories of each option, and testing your assumptions against past empirical patterns rather than wishful thinking.',
      stepByStepFlow: [
        { step: '1', title: 'Decompose Variables', detail: 'Break the life choice into controllable variables and constraints.' },
        { step: '2', title: 'Project Scenarios', detail: 'Map realistic first- and second-order outcomes of each option.' },
        { step: '3', title: 'Align With Values', detail: 'Select the trade-off profile matching your long-term goals.' }
      ],
      keyTakeaways: [
        'High-impact life decisions have no standardized answer key and require custom synthesis.',
        'Breaking an emotional dilemma into explicit variables prevents analysis paralysis.'
      ],
      commonPitfalls: [
        'Expecting a generic internet forum to resolve a context-specific personal trade-off.',
        'Delaying action indefinitely while hunting for a mythical zero-risk option.'
      ]
    },
    {
      id: 'ctps-ch02-sec3',
      sectionNumber: '2.3',
      title: 'Sovereign Decision Accountability vs. Blame-Shifting',
      subtitle: 'Why Outsourcing Judgment Surrenders Personal Agency',
      coreMechanism:
        'Why do intelligent adults constantly ask friends, relatives, or pundits to make their decisions for them? Segler exposes the hidden psychological motive: **pre-staging a scapegoat**. If you let a friend convince you to take a job or buy a stock and it turns out poorly, you can protect your ego by blaming their bad advice.\n\nCritical thinking requires **sovereign accountability**. Advisers and friends do not have to live inside your career, your marriage, or your bank account. By treating others\' opinions solely as raw data inputs while taking 100% ownership of the final choice, you eliminate blame-shifting and turn every mistake into high-signal feedback.',
      stepByStepFlow: [
        { step: '1', title: 'Separate Data From Choice', detail: 'Gather facts from peers, but reject their command over your choice.' },
        { step: '2', title: 'Audit Skin in the Game', detail: 'Remember external advisers bear zero cost if their advice fails.' },
        { step: '3', title: 'Own Every Outcome', detail: 'Eliminate scapegoating so every result sharpens your judgment.' }
      ],
      keyTakeaways: [
        'Outsourcing decisions to protect your ego from blame surrenders your personal agency.',
        'True learning begins when you accept full ownership of both your process and its outcome.'
      ],
      commonPitfalls: [
        'Polling friends until one validates your wishful bias, then blaming them when it fails.',
        'Following prescriptions from commenters who have zero skin in the game.'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Fix-It Lookup Reflex vs. First-Principles Deconstruction',
      description: 'Comparing shallow answer-copying against causal mastery and ownership.',
      headers: ['Dimension', 'Lookup Reflex', 'First-Principles', 'Leverage'],
      rows: [
        ['Depth', 'Copies surface steps', 'Learns causal proof', 'Transfers to new problems'],
        ['Dilemmas', 'Copies generic advice', 'Weighs custom trade-offs', 'Solves life choices'],
        ['Advisers', 'Outsources decision', 'Extracts facts only', 'Preserves agency'],
        ['Errors', 'Blames scapegoat', 'Owns & updates model', 'Compounds judgment']
      ],
      verdictRule: 'Use lookups only for trivial syntax; apply first-principles ownership to all career and life choices.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'ctps-ch02-scen1',
      title: 'Eradicating Copy-Paste Debugging in Software Engineering',
      roleAndContext: 'Staff Engineer leading an API Reliability Squad',
      symptomOrFailure: 'Engineers paste StackOverflow snippets to silence memory alerts without understanding garbage collection, causing repeat outages.',
      naiveFixAndWhyItFails: 'Approve quick patches to close tickets—reinforcing the lookup reflex while memory leaks grow.',
      firstPrinciplesSolution: 'Enforce a "Geometry Proof" PR gate requiring engineers to document the causal failure mechanism before merging.',
      measurableOutcome: 'Repeat production incidents drop by 72% over one quarter.'
    },
    {
      id: 'ctps-ch02-scen2',
      title: 'Applying Sovereign Accountability to a Career Pivot',
      roleAndContext: 'Operations Manager weighing a startup offer vs. corporate tenure',
      symptomOrFailure: 'Manager polls eight relatives, receiving conflicting advice driven by each adviser\'s personal risk phobia.',
      naiveFixAndWhyItFails: 'Follow the majority vote of risk-averse relatives who will not live with the career regret.',
      firstPrinciplesSolution: 'Deconstruct the choice into runway, skill growth, and downside floor, then decide with zero scapegoating.',
      measurableOutcome: 'Negotiates a stronger base floor and executes the pivot with full ownership.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctps-ch02-q1',
        scenarioPrompt: 'What is the primary danger of the internet-driven "fix-it-and-forget-it" mentality described in Chapter 2?',
        options: [
          {
            label: 'A',
            text: 'Search engines charge too much money for information.',
            isCorrect: false,
            explanation: 'Search engines are free, but they encourage shallow copying.'
          },
          {
            label: 'B',
            text: 'People solve immediate surface symptoms by copying recipes without learning the underlying causal principles, leaving them helpless on novel problems.',
            isCorrect: true,
            explanation: 'Copying answers without understanding the mechanism prevents skill transfer and atrophies analytical reasoning.'
          },
          {
            label: 'C',
            text: 'It forces people to read too many books.',
            isCorrect: false,
            explanation: 'It replaces deep reading with shallow snippet lookups.'
          },
          {
            label: 'D',
            text: 'It makes people overly skeptical of their friends.',
            isCorrect: false,
            explanation: 'It actually makes people overly dependent on external answers.'
          }
        ]
      },
      {
        id: 'ctps-ch02-q2',
        scenarioPrompt: 'Why does Segler use the analogy of knowing WHY 2 + 2 = 4 or understanding a geometry proof?',
        options: [
          {
            label: 'A',
            text: 'To argue that only mathematicians can think critically.',
            isCorrect: false,
            explanation: 'The math analogy illustrates causal understanding across all life domains.'
          },
          {
            label: 'B',
            text: 'To show that understanding the underlying causal mechanism allows you to reason through unfamiliar problems that cannot be solved by rote memorization.',
            isCorrect: true,
            explanation: 'Knowing the proof behind a rule lets you adapt when problem parameters shift.'
          },
          {
            label: 'C',
            text: 'To prove that elementary school math is flawed.',
            isCorrect: false,
            explanation: 'He uses elementary math to contrast rote memorization with conceptual proof.'
          },
          {
            label: 'D',
            text: 'To recommend replacing verbal communication with numbers.',
            isCorrect: false,
            explanation: 'The point is structural understanding, not numerical notation.'
          }
        ]
      },
      {
        id: 'ctps-ch02-q3',
        scenarioPrompt: 'Why do people frequently outsource major personal decisions to friends or family members?',
        options: [
          {
            label: 'A',
            text: 'Because friends always possess superior objective data.',
            isCorrect: false,
            explanation: 'Friends are often biased and lack complete context.'
          },
          {
            label: 'B',
            text: 'To pre-stage a scapegoat they can blame if the decision turns out badly, thereby avoiding personal accountability.',
            isCorrect: true,
            explanation: 'Handing the decision to someone else protects the ego from blame at the cost of personal agency.'
          },
          {
            label: 'C',
            text: 'Because critical thinking forbids making decisions alone.',
            isCorrect: false,
            explanation: 'Critical thinking demands autonomous judgment.'
          },
          {
            label: 'D',
            text: 'Because friends bear the full financial cost of the outcome.',
            isCorrect: false,
            explanation: 'Advisers bear zero cost when their advice fails.'
          }
        ]
      },
      {
        id: 'ctps-ch02-q4',
        scenarioPrompt: 'How should a critical thinker use advice from experienced peers when facing a non-algorithmic life dilemma?',
        options: [
          {
            label: 'A',
            text: 'Ignore all human beings and guess randomly.',
            isCorrect: false,
            explanation: 'Isolating yourself from useful information wastes valuable data.'
          },
          {
            label: 'B',
            text: 'Treat external perspectives as raw factual inputs to weigh, while retaining 100% ownership of the final synthesis and its consequences.',
            isCorrect: true,
            explanation: 'Gather perspectives for blind-spot detection, but synthesize and own the decision yourself.'
          },
          {
            label: 'C',
            text: 'Do whatever the highest-paid friend recommends.',
            isCorrect: false,
            explanation: 'Income in another person\'s life does not mean their values or risk profile match yours.'
          },
          {
            label: 'D',
            text: 'Wait until everyone in your social circle agrees 100%.',
            isCorrect: false,
            explanation: 'Waiting for unanimous crowd approval paralyzes action.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'ctps-ch02-fc1',
        category: 'foundation',
        front: 'What is the "Fix-It-and-Forget-It" mentality?',
        back: 'Copying a quick surface answer from the internet to patch a symptom without learning the underlying causal mechanism.',
        mentalHook: 'Patching the symptom while staying blind to the cause.'
      },
      {
        id: 'ctps-ch02-fc2',
        category: 'architecture',
        front: 'What does Segler\'s "Geometry Proof" mental model teach?',
        back: 'Memorizing a formula output only works for identical problems; understanding WHY the proof works lets you solve novel problems.',
        mentalHook: 'Learn the proof, not just the answer key.'
      },
      {
        id: 'ctps-ch02-fc3',
        category: 'evaluation',
        front: 'Why can\'t major life dilemmas (career, marriage, ethics) be solved by search engines?',
        back: 'Because they are non-algorithmic problems that depend on your unique values, constraints, and trade-offs.',
        mentalHook: 'Google has no answer key for your personal trade-offs.'
      },
      {
        id: 'ctps-ch02-fc4',
        category: 'adaptation',
        front: 'What hidden motive often drives people to ask friends "What should I do?"',
        back: 'The desire to pre-stage a scapegoat so they can blame the friend if the choice fails.',
        mentalHook: 'Outsourcing the choice to outsource the blame.'
      },
      {
        id: 'ctps-ch02-fc5',
        category: 'security',
        front: 'Why is following a friend\'s life prescription dangerous?',
        back: 'Because the adviser has zero skin in the game and will not live with the daily consequences of your choice.',
        mentalHook: 'Never let someone without skin in the game steer the wheel.'
      },
      {
        id: 'ctps-ch02-fc6',
        category: 'optimization',
        front: 'How does sovereign decision accountability accelerate learning?',
        back: 'When you own 100% of your choices, every mistake becomes a direct feedback signal to refine your mental models rather than an excuse to complain.',
        mentalHook: 'Total ownership turns errors into tuition.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'ctps-ch02-fc-1',
        conceptTitle: 'Defeating the Fix-It-and-Forget-It Lookup Reflex',
        prompt: 'Explain how modern search engines weaken human problem-solving ability and how to apply the "Geometry Proof" standard instead.',
        rubricChecklist: [
          'Describes the "fix-it-and-forget-it" habit of copying surface solutions.',
          'Contrasts memorizing an output (2+2=4) with understanding the underlying proof.',
          'Explains why non-algorithmic life dilemmas have no internet lookup key.',
          'Prescribes extracting the causal mechanism behind every solved problem.'
        ],
        modelExplanation:
          'When we use search engines to copy quick fixes without asking why the problem happened, we train our brains to be passive recipe-followers. That works for a simple appliance reset, but it leaves us helpless when facing complex career or financial dilemmas that have no pre-written online answer. By insisting on the "Geometry Proof" standard—understanding the causal mechanism behind how variables interact—we build transferable analytical leverage.'
      },
      {
        id: 'ctps-ch02-fc-2',
        conceptTitle: 'Sovereign Decision Ownership vs. Scapegoat Outsourcing',
        prompt: 'Explain why outsourcing personal decisions to friends or advisers is an epistemic trap and how a critical thinker handles external advice.',
        rubricChecklist: [
          'Identifies the hidden motive of pre-staging a scapegoat to avoid blame.',
          'Points out the asymmetry of consequences (advisers have no skin in the game).',
          'Distinguishes gathering factual inputs from surrendering final judgment.',
          'Explains how owning outcomes builds a self-correcting feedback loop.'
        ],
        modelExplanation:
          'Asking others to tell you what to do with your career or relationships is often a covert way to dodge responsibility: if the choice fails, you can blame the adviser. Yet the adviser does not pay the price of your failure. A critical thinker solicits external perspectives purely to uncover blind spots and gather data, then synthesizes the final decision autonomously and owns 100% of the result.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctps-ch02-n1',
        label: 'Fix-It-and-Forget-It Reflex',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition: 'The habit of copying surface internet fixes without understanding the root causal mechanism.',
        whyItMatters: 'Identifies why modern information access often coincides with declining analytical skill.'
      },
      {
        id: 'ctps-ch02-n2',
        label: 'Geometry Proof Standard',
        category: 'foundation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Mastering the underlying causal derivation of how a system works rather than memorizing outputs.',
        whyItMatters: 'Enables problem-solving transfer to novel, unscripted scenarios.'
      },
      {
        id: 'ctps-ch02-n3',
        label: 'Non-Algorithmic Life Dilemmas',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition: 'Complex personal, career, and ethical choices that lack a single pre-scripted lookup answer.',
        whyItMatters: 'Represents the highest-stakes arena where independent critical thinking is required.'
      },
      {
        id: 'ctps-ch02-n4',
        label: 'Scapegoat Outsourcing Trap',
        category: 'security',
        chapterNumber: 2,
        importance: 2,
        definition: 'Delegating personal decisions to friends or pundits to avoid ego blame if the choice fails.',
        whyItMatters: 'Exposes the psychological cowardice behind chronic advice-seeking.'
      },
      {
        id: 'ctps-ch02-n5',
        label: 'Skin-in-the-Game Asymmetry',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 2,
        definition: 'The structural fact that external advisers do not bear the consequences of your life decisions.',
        whyItMatters: 'Explains why external prescriptions must never be accepted uncritically.'
      },
      {
        id: 'ctps-ch02-n6',
        label: 'Sovereign Decision Accountability',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Synthesizing external data autonomously and accepting 100% ownership of all outcomes.',
        whyItMatters: 'Converts every decision outcome into compounding personal mastery.'
      }
    ],
    edges: [
      {
        source: 'ctps-ch02-n2',
        target: 'ctps-ch02-n1',
        relationship: 'mitigates',
        explanation: 'Insisting on causal proofs eliminates shallow fix-it-and-forget-it copying.'
      },
      {
        source: 'ctps-ch02-n2',
        target: 'ctps-ch02-n3',
        relationship: 'prerequisite_for',
        explanation: 'First-principles causal understanding is required to decompose non-algorithmic life dilemmas.'
      },
      {
        source: 'ctps-ch02-n5',
        target: 'ctps-ch02-n4',
        relationship: 'evaluates',
        explanation: 'Recognizing skin-in-the-game asymmetry exposes the danger of outsourcing decisions to advisers.'
      },
      {
        source: 'ctps-ch02-n6',
        target: 'ctps-ch02-n4',
        relationship: 'mitigates',
        explanation: 'Sovereign accountability replaces scapegoat blame-shifting with personal ownership.'
      },
      {
        source: 'ctps-ch02-n6',
        target: 'ctps-ch02-n3',
        relationship: 'optimizes',
        explanation: 'Full ownership sharpens judgment across recurring career and life dilemmas.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: 'Verified Chapter 2 within compression ceiling.'
  }
};
