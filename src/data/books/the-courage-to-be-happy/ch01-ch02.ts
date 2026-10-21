import { ChapterMastery } from '../../../types/book';

export const ctbhCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'Part I: That Bad Person and Poor Me',
  subtitle: 'Education as Self-Reliance, Unconditional Respect, Empathy as a Skill, and the Triangular Prism',
  readingTimeMinutes: 9,
  sourceWordCount: 11223,
  executiveThesis:
    'Education and counselling share a single destination: helping a person move from dependent childhood to autonomous Self-Reliance through human knowledge. Achieving this requires starting with unconditional Respect (Erich Fromm’s respicio—seeing a person as they are), practicing Empathy as a deliberate skill, recognizing memory as teleological history rewritten by the present lifestyle, and rotating Adler’s Triangular Prism away from "That bad person" and "Poor me" to "What should I do from now on?"',
  paradigmShift: {
    oldWay:
      'Victim Consolation & Retroactive Determinism: Treating counselling as a confession booth where clients vent about "That bad person" and receive sympathy for "Poor me," while blaming childhood memories for present trouble.',
    newWay:
      'Re-Education via the Triangular Prism: Treating counselling and teaching as re-education in Self-Reliance, anchored in unconditional respect (respicio) and the sole constructive prism face: "What should I do from now on?"',
    whyItChanged:
      'Consoling someone over "That bad person" or "Poor me" may soothe them temporarily, but it leaves them trapped in childhood dependency and repeats the exact same interpersonal failures the moment they face a new environment.',
  },
  customDiagrams: [
    {
      id: 'ctbh-ch01-svg-01',
      title: 'Adler’s Triangular Prism of Counselling & Pedagogy',
      subtitle: 'Rotating out of the two etiologic grievance faces ("That bad person" & "Poor me") into the teleological action face',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">THE ADLERIAN TRIANGULAR PRISM: THREE FACES OF HUMAN DISCOURSE</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Every complaint in life, classrooms, and counselling begins on Face 1 or Face 2—and must rotate to Face 3</text>

  <!-- Central Triangular Prism Graphic -->
  <polygon points="400,92 220,310 580,310" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <line x1="400" y1="92" x2="400" y2="238" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4" />
  <line x1="220" y1="310" x2="400" y2="238" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4" />
  <line x1="580" y1="310" x2="400" y2="238" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4" />

  <!-- Face 1 Left: That Bad Person -->
  <rect x="36" y="128" width="224" height="118" rx="10" fill="#0f172a" stroke="#ef4444" stroke-width="1.8" />
  <text x="52" y="154" fill="#fca5a5" font-size="12" font-weight="700">FACE 1: "THAT BAD PERSON"</text>
  <text x="52" y="176" fill="#f8fafc" font-size="11">Blaming students, parents, or</text>
  <text x="52" y="192" fill="#f8fafc" font-size="11">colleagues for your failure.</text>
  <text x="52" y="214" fill="#94a3b8" font-size="10">• Goal: Avoid responsibility</text>
  <text x="52" y="230" fill="#94a3b8" font-size="10">• Trap: Power struggle &amp; enmity</text>

  <!-- Face 2 Right: Poor Me -->
  <rect x="540" y="128" width="224" height="118" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.8" />
  <text x="556" y="154" fill="#fcd34d" font-size="12" font-weight="700">FACE 2: "POOR ME"</text>
  <text x="556" y="176" fill="#f8fafc" font-size="11">Recounting personal misery to</text>
  <text x="556" y="192" fill="#f8fafc" font-size="11">extract sympathy ("You had it rough").</text>
  <text x="556" y="214" fill="#94a3b8" font-size="10">• Goal: Consolation in dependency</text>
  <text x="556" y="230" fill="#94a3b8" font-size="10">• Trap: Zero behavioral change</text>

  <!-- Rotation Arrows -->
  <path d="M 160 246 L 260 326" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="258,319 266,330 252,328" fill="#10b981" />

  <path d="M 640 246 L 540 326" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="548,328 534,330 542,319" fill="#10b981" />

  <!-- Face 3 Bottom: What Should I Do From Now On? -->
  <rect x="210" y="294" width="380" height="98" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="2.2" />
  <text x="234" y="322" fill="#6ee7b7" font-size="14" font-weight="800">FACE 3: "WHAT SHOULD I DO FROM NOW ON?"</text>
  <text x="234" y="344" fill="#f8fafc" font-size="12">Discard both blame and self-pity; focus 100% on present agency.</text>
  <text x="234" y="366" fill="#94a3b8" font-size="11">Counselling &amp; Education = Re-education toward Self-Reliance.</text>
</svg>`,
      bierutCaption:
        'When a three-sided glass prism is placed before clients or educators, almost everyone talks only about "That bad person" or "Poor me," blinding themselves to the hidden third face: "What should I do from now on?"',
      annotations: [
        {
          step: '01',
          label: 'The Two Consolation Faces',
          explanation:
            'Complaining about "That bad person" or weeping over "Poor me" seeks a sympathetic nod ("Wait, it’s not your fault") rather than a solution.',
        },
        {
          step: '02',
          label: 'Why Sympathy Fails as Therapy',
          explanation:
            'If a counsellor merely consoles the client, the client remains dependent and crashes again at the very next interpersonal obstacle.',
        },
        {
          step: '03',
          label: 'Rotating to Face 3',
          explanation:
            'Asking "What should I do from now on?" restores self-reliance and converts grievances into actionable education.',
        },
      ],
    },
    {
      id: 'ctbh-ch01-svg-02',
      title: 'Respect (Respicio), Skillful Empathy, and Teleological Memory',
      subtitle: 'How educator respect and present lifestyle rewrite the meaning of past memories (The Dog-Bite Case)',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">RESPECT, EMPATHY, AND TELEOLOGICAL MEMORY RECONSTRUCTION</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">The present "Ruling Self" selects and rewrites childhood memories to match its current lifestyle</text>

  <!-- Left Column: Educator Foundation (Respect & Empathy) -->
  <rect x="36" y="88" width="336" height="296" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8" />
  <text x="56" y="116" fill="#38bdf8" font-size="13" font-weight="700">1. THE EDUCATOR'S STARTING STANCE</text>

  <rect x="56" y="134" width="296" height="74" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="72" y="156" fill="#f8fafc" font-size="12" font-weight="700">Unconditional Respect (Fromm: Respicio)</text>
  <text x="72" y="176" fill="#94a3b8" font-size="11">Seeing a person as they are; valuing their</text>
  <text x="72" y="192" fill="#94a3b8" font-size="11">unique growth without forced moulds.</text>

  <rect x="56" y="222" width="296" height="74" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="72" y="244" fill="#6ee7b7" font-size="12" font-weight="700">Empathy as a Skill (Not Mere Sympathy)</text>
  <text x="72" y="264" fill="#94a3b8" font-size="11">"Have concern for other people's concerns":</text>
  <text x="72" y="280" fill="#94a3b8" font-size="11">See with their eyes, listen with their ears.</text>

  <rect x="56" y="310" width="296" height="54" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="72" y="334" fill="#fcd34d" font-size="12" font-weight="700">Goal of Education = Self-Reliance</text>
  <text x="72" y="352" fill="#94a3b8" font-size="11">Walking the pole of endless inquiry together</text>

  <!-- Arrow to Memory Reconstruction -->
  <path d="M 372 236 L 420 236" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="420,230 432,236 420,242" fill="#10b981" />

  <!-- Right Column: Teleological Memory (The Dog Bite Case) -->
  <rect x="432" y="88" width="332" height="296" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.8" />
  <text x="452" y="116" fill="#6ee7b7" font-size="13" font-weight="700">2. MEMORY AS TELEOLOGICAL HISTORY</text>
  <text x="452" y="136" fill="#94a3b8" font-size="11">Just as a new regime rewrites national history:</text>

  <rect x="452" y="154" width="292" height="94" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="468" y="176" fill="#fca5a5" font-size="12" font-weight="700">Before: Distrustful Lifestyle</text>
  <text x="468" y="196" fill="#e2e8f0" font-size="11">Worldview: "World is dangerous"</text>
  <text x="468" y="214" fill="#94a3b8" font-size="11">• Recalled Memory: "A dog bit me while</text>
  <text x="468" y="230" fill="#94a3b8" font-size="11">  every adult just stood by and watched!"</text>

  <path d="M 598 248 L 598 268" stroke="#10b981" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="452" y="268" width="292" height="96" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="468" y="290" fill="#6ee7b7" font-size="12" font-weight="700">After: Comrade Lifestyle</text>
  <text x="468" y="310" fill="#e2e8f0" font-size="11">Worldview: "People are comrades"</text>
  <text x="468" y="328" fill="#94a3b8" font-size="11">• Uncovered Memory: "A kind man on a</text>
  <text x="468" y="344" fill="#94a3b8" font-size="11">  bicycle rescued me and took me to hospital!"</text>
</svg>`,
      bierutCaption:
        'Just as a ruling political regime rewrites history textbooks to legitimize its current policies, the present self edits childhood memories—until respect and empathy unlock the courage to adopt a cooperative lifestyle.',
      annotations: [
        {
          step: '01',
          label: 'Respect (Respicio) as the Foundation',
          explanation:
            'Without seeing a student as they truly are (respect), instruction degenerates into coercive indoctrination.',
        },
        {
          step: '02',
          label: 'Empathy vs. Sympathy',
          explanation:
            'Sympathy merely nods to a student’s subjective complaint, whereas empathy steps beside them to share their actual developmental concern.',
        },
        {
          step: '03',
          label: 'The Dog-Bite Memory Inversion',
          explanation:
            'When the medical student began viewing people as comrades, he suddenly remembered the cyclist who saved him from the dog—rewriting his past.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbh-ch01-mm-01',
      name: 'The Triangular Prism Filter',
      tagline: 'Discard "That bad person" and "Poor me"; speak exclusively from "What should I do from now on?"',
      naiveIntuition:
        'When a teacher struggles with a disruptive class or an employee clashes with a team, they must first explain how poorly the other party behaved ("That bad person") and how exhausted they feel ("Poor me").',
      firstPrinciplesReality:
        'Those two faces of the triangular prism exist solely to extract sympathy and absolve the speaker of responsibility; genuine progress starts the exact second you rotate the prism to its third face: "What should I do from now on?"',
      howToApply:
        'In any post-mortem, coaching session, or personal crisis, allow zero minutes for blaming external culprits or wallowing in self-pity; mandate that every sentence address the next concrete action.',
    },
    {
      id: 'ctbh-ch01-mm-02',
      name: 'Respect (Respicio) as "Seeing a Person as They Are"',
      tagline: 'True respect means valuing another’s unique unfolding without forcing them into your mould.',
      naiveIntuition:
        'Respect is deference paid upward toward authority figures, elders, or powerful executives out of fear or duty.',
      firstPrinciplesReality:
        'Quoting Erich Fromm, Adlerian psychology defines respect from the Latin respicio ("to look at"): the ability to see a person as they actually are, be aware of their unique individuality, and have concern that they should grow and unfold as themselves.',
      howToApply:
        'Before trying to "fix" or mould a student, child, or direct report, pause to observe their actual interests and strengths without projecting your own ego onto them.',
    },
    {
      id: 'ctbh-ch01-mm-03',
      name: 'Memory as Regime History',
      tagline: 'The present "ruling self" edits past memories to justify its current worldview.',
      naiveIntuition:
        'Our earliest childhood memories are objective video recordings that explain why we distrust people today.',
      firstPrinciplesReality:
        'Just as a new sovereign regime rewrites national history to prove its legitimacy, a person who currently views the world as dangerous remembers only being bitten by a dog while adults watched—completely erasing the memory of the kind cyclist who rescued him until his present lifestyle changes.',
      howToApply:
        'Treat your recurring childhood grievances not as historical causes of your current mindset, but as propaganda posters selected by your current lifestyle to resist change.',
    },
  ],
  deepSections: [
    {
      id: 'ctbh-ch01-ds-01',
      sectionNumber: '1.1',
      title: 'Philosophy Without Stories and the True Goal of Education',
      subtitle: 'Walking the Endless Pole of Inquiry Toward Self-Reliance',
      coreMechanism:
        'Three years after their first dialogue, the Youth returns—now a schoolteacher disillusioned because Adlerian ideas seem powerless against defiant classroom reality. The Philosopher begins by contrasting religion with philosophy: religion explains the world using stories so believers can rest securely inside a finished circle, whereas philosophy uses abstract concepts without stories and follows Zen Master Nansen’s maxim: "Walk on from the top of a hundred-foot bamboo pole." Philosophy is the endless love of wisdom (philosophia), never a settled dogma.\n\nWithin this philosophical stance, Adlerian counselling is defined not as clinical symptom removal, but as "re-education"—and the ultimate goal of all education (whether by parents, teachers, or counsellors) is **Self-Reliance**. Because educators work with human souls, they must master "human knowledge" alongside academic subjects to assist students out of childhood dependency.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Step Beyond Closed Dogmatic Stories',
          detail:
            'Refuse to treat Adlerian psychology as a magic spell or religious fable; engage it as an ongoing philosophical practice.',
        },
        {
          step: '02',
          title: 'Define Education and Counselling as One Task',
          detail:
            'Recognize that every interpersonal difficulty stems from an incomplete education in how to relate to others.',
        },
        {
          step: '03',
          title: 'Orient Every Intervention Toward Self-Reliance',
          detail:
            'Measure educational success never by test scores or obedient compliance, but by whether the learner grows self-reliant.',
        },
      ],
      keyTakeaways: [
        'Counselling is re-education; it bridges what family and school education failed to foster regarding interpersonal self-reliance.',
        'Knowledge is not the goal of education; knowledge is merely one of the means toward the true goal of self-reliance.',
        'An educator who does not understand human psychology ("human knowledge") can drill facts, but cannot guide a student toward self-reliance.',
      ],
      commonPitfalls: [
        'Treating Adlerian psychology as a rigid rulebook that should instantly make students obey without resistance.',
        'Mistaking a child’s quiet submission to adult authority for genuine self-reliance.',
      ],
    },
    {
      id: 'ctbh-ch01-ds-02',
      sectionNumber: '1.2',
      title: 'Unconditional Respect (Respicio) and Empathy as a Skill',
      subtitle: 'Having Concern for Other People’s Concerns Before Teaching a Single Word',
      coreMechanism:
        'How does an educator assist someone toward self-reliance without intruding on their task? The absolute starting point is **Respect**. Drawing on Erich Fromm’s *The Art of Loving*, the Philosopher defines respect from its Latin root *respicio* ("to look at"): the ability to see a person as they truly are, recognize their unique individuality, and desire that they grow and unfold as themselves rather than as tools for your ego. You cannot teach anyone whom you do not respect—and respect is transmitted to students only when they see the teacher actively respecting them first.\n\nFrom this foundation of respect arises **Empathy**—defined by Adler as "seeing with the eyes of another, listening with the ears of another, and feeling with the heart of another." Unlike shallow sympathy (merely agreeing with someone’s subjective grievance), empathy is a deliberate skill: "having concern for other people’s concerns."',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Look at the Person As They Are (Respicio)',
          detail:
            'Strip away labels, rankings, and personal expectations to see the individual’s authentic self.',
        },
        {
          step: '02',
          title: 'Have Concern for Their Concerns',
          detail:
            'Step beside the person and look in the exact direction they are looking to discover what genuinely interests them.',
        },
        {
          step: '03',
          title: 'Demonstrate Respect Through Action',
          detail:
            'Never demand respect via authority; model respect unilaterally so the learner experiences what respect actually is.',
        },
      ],
      keyTakeaways: [
        'Respect is neither fear nor subordination; it is the courage to look squarely at who another person actually is.',
        'Children who have never been respected by adults have no way of knowing how to respect themselves or others.',
        'Empathy is a transcendental skill practiced when you stand beside someone and take an active interest in what they care about.',
      ],
      commonPitfalls: [
        'Demanding that students or junior employees "show respect" for your title while treating them like inferior subordinates.',
        'Confusing empathy with passive sympathy ("You poor thing, your students are terrible").',
      ],
    },
    {
      id: 'ctbh-ch01-ds-03',
      sectionNumber: '1.3',
      title: 'Memory as Regime History and the Triangular Prism',
      subtitle: 'Why the Past Is Rewritten by the Present and How to Rotate to Constructive Action',
      coreMechanism:
        'Why do people cling to traumatic memories as proof that they cannot change? Adler called early recollections "the story of my life" that an individual repeats to warn, comfort, or keep themselves focused on their goal. Memory is not a fixed vault; it is like national history rewritten whenever a new political regime takes power. A medical student who distrusted humanity vividly recalled being bitten by a dog as a child while adults watched indifferently. Yet once he began seeing people as comrades, he suddenly remembered the rest of the scene: a kind man on a bicycle had rescued him and rushed him to the hospital!\n\nTo break free of past-driven excuses in real time, Adlerian counsellors place an imaginary **Triangular Prism** on the table. Two faces read "That bad person" and "Poor me"; the third face reads "What should I do from now on?" Every productive dialogue ignores the first two faces and focuses exclusively on the third.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Recognize Memory as Present-Regime Propaganda',
          detail:
            'Understand that the memories you replay today were handpicked by your current lifestyle to justify your present goals.',
        },
        {
          step: '02',
          title: 'Catch Speech on Face 1 or Face 2 of the Prism',
          detail:
            'Notice whenever you or a client are talking about "That bad person" (blame) or "Poor me" (self-pity).',
        },
        {
          step: '03',
          title: 'Rotate the Prism to Face 3',
          detail:
            'Ask the only question that builds self-reliance: "What should I do from now on?"',
        },
      ],
      formulas: [
        {
          name: 'Teleological Memory Selection & The Triangular Prism Filter',
          expression:
            'Recalled_Memory(t - k) = Filter(Raw_Past, Ruling_Lifestyle(t))   |   Action_Focus = Prism_Face_3("What_Should_I_Do_Now?")',
          intuition:
            'The present "ruling self" filters raw past events to surface only memories that validate its current worldview, while the Triangular Prism discards blame (Face 1) and self-pity (Face 2) to isolate present action (Face 3).',
          variables: [
            {
              symbol: 'Ruling_Lifestyle(t)',
              meaning: 'The individual’s current self-concept and worldview ("people are enemies" vs. "people are comrades").',
            },
            {
              symbol: 'Recalled_Memory(t - k)',
              meaning: 'The specific slice of past experience retrieved to justify the ruling lifestyle.',
            },
            {
              symbol: 'Prism_Face_3',
              meaning: 'The forward-looking teleological question: "What should I do from now on?"',
            },
          ],
          workedExample:
            'When the Youth blames his unruly students ("That bad person") and laments his own exhaustion as a teacher ("Poor me"), the Philosopher rotates the Triangular Prism to Face 3: "What should I do from now on?"',
        },
      ],
      keyTakeaways: [
        'It is not the past that determines the present; it is the present "me" that determines the meaning of the past.',
        'Almost everyone who comes to counselling talks exclusively about "That bad person" or "Poor me" to obtain comforting sympathy.',
        'Whether people understand you or not is their task; your task stays anchored on "What should I do from now on?"',
      ],
      commonPitfalls: [
        'Rewarding a colleague’s or student’s "Poor me" story with soothing validation that leaves their helplessness intact.',
        'Believing that an early childhood memory is an unedited objective fact rather than a lifestyle myth.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'The Triangular Prism Diagnostic: Face 1 vs. Face 2 vs. Face 3',
      description:
        'Evaluating the hidden teleological purpose, interpersonal consequence, and pedagogical response across the three faces of Adler’s prism.',
      headers: [
        'Prism Face',
        'Typical Utterance',
        'Hidden Teleological Goal',
        'Impact on Self-Reliance',
      ],
      rows: [
        [
          'Face 1: "That Bad Person"',
          '"My students / managers / parents are impossible!"',
          'Externalize blame so I do not have to change',
          'Zero growth; fuels chronic enmity and power struggles',
        ],
        [
          'Face 2: "Poor Me"',
          '"Look how much I have suffered and how hard I try!"',
          'Extract soothing sympathy and permission to stay passive',
          'Locks the speaker in childhood dependency',
        ],
        [
          'Face 3: "What Should I Do From Now On?"',
          '"Given this reality, what concrete step can I take today?"',
          'Take ownership of my task and contribute to the solution',
          'Directly builds autonomous Self-Reliance',
        ],
      ],
      verdictRule:
        'Whenever any conversation, retrospective, or coaching session lands on Face 1 ("That bad person") or Face 2 ("Poor me"), immediately rotate the prism to Face 3 ("What should I do from now on?").',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbh-ch01-sc-01',
      title: 'Rotating an Engineering Post-Mortem with the Triangular Prism',
      roleAndContext:
        'After a production outage caused by an unvalidated third-party API change, the backend team spends 45 minutes of the retrospective raging at the vendor ("That bad person") and complaining about being paged at 3:00 AM ("Poor me").',
      symptomOrFailure:
        'The retrospective ends with mutual commiseration ("Yeah, that vendor is terrible and you guys had a rough night"), but zero architectural safeguards are scheduled.',
      naiveFixAndWhyItFails:
        'Having the engineering director send an angry email to the vendor while giving the team comp time; this fails because it stays on Faces 1 and 2, leaving the system vulnerable to the next schema drift.',
      firstPrinciplesSolution:
        'Place the Triangular Prism at the center of the post-mortem template: prohibit discussion of vendor blame (Face 1) or war-story commiseration (Face 2) after the first 2 minutes, and dedicate 90% of the meeting to Face 3: "What contract-validation boundary and circuit breaker should we build from now on?"',
      measurableOutcome:
        'The team implements Zod schema boundary guards and automated fallback caching within 48 hours, eliminating vendor-induced outages completely.',
    },
    {
      id: 'ctbh-ch01-sc-02',
      title: 'Replacing Onboarding Moulds with Respicio & Skillful Empathy',
      roleAndContext:
        'A senior mentor is frustrated that a newly hired junior developer seems disengaged during lectures on backend microservices and labels him "lazy and unmotivated."',
      symptomOrFailure:
        'The mentor tries to force the junior into her own career mould through stern lectures, causing the junior to withdraw further.',
      naiveFixAndWhyItFails:
        'Increasing daily check-in quizzes on backend theory; this fails because there is zero respect (respicio) for who the junior actually is.',
      firstPrinciplesSolution:
        'Practice Fromm’s respicio and Adler’s empathy ("have concern for other people’s concerns"): sit beside the junior, observe what he gravitates toward (he spends hours optimizing WebGL shader rendering), and assign him ownership of the team’s performance telemetry visualization dashboard.',
      measurableOutcome:
        'Experiencing genuine respect and empathy for his concerns, the junior ships the telemetry suite ahead of schedule and voluntarily masters the backend APIs needed to power it.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbh-ch01-q01',
        scenarioPrompt:
          'According to the Philosopher, what is the fundamental goal shared by both education and Adlerian counselling?',
        options: [
          {
            label: 'A',
            text: 'Ensuring that students and clients obey societal rules without friction.',
            isCorrect: false,
            explanation:
              'Obedience to authority is the opposite of Adlerian education.',
          },
          {
            label: 'B',
            text: 'Self-Reliance—helping the individual grow out of helpless childhood dependency through human knowledge.',
            isCorrect: true,
            explanation:
              'Knowledge is merely one means; the ultimate goal of all education and counselling (re-education) is Self-Reliance.',
          },
          {
            label: 'C',
            text: 'Maximizing academic test scores and elite university placement.',
            isCorrect: false,
            explanation:
              'Academic subjects are just tools; without self-reliance, high scorers still fail at interpersonal tasks.',
          },
          {
            label: 'D',
            text: 'Providing warm emotional consolation so the person feels their suffering was not their fault.',
            isCorrect: false,
            explanation:
              'Mere consolation keeps the person dependent on the counsellor.',
          },
        ],
      },
      {
        id: 'ctbh-ch01-q02',
        scenarioPrompt:
          'How does the Philosopher—quoting Erich Fromm—define the true meaning of "respect" (from the Latin respicio)?',
        options: [
          {
            label: 'A',
            text: 'Looking up to superiors and elders with reverent fear.',
            isCorrect: false,
            explanation:
              'Fear and subordination are vertical power dynamics, not respect.',
          },
          {
            label: 'B',
            text: 'The ability to see a person as they are, to be aware of their unique individuality, and to have concern that they should grow and unfold as themselves.',
            isCorrect: true,
            explanation:
              'Respicio means "to look at": seeing the real person without projecting your own mould onto them and encouraging their authentic growth.',
          },
          {
            label: 'C',
            text: 'Praising someone whenever they meet your expectations.',
            isCorrect: false,
            explanation:
              'Praise is manipulative vertical judgment, not respect.',
          },
          {
            label: 'D',
            text: 'Leaving people completely alone and never speaking to them.',
            isCorrect: false,
            explanation:
              'Indifference is the opposite of looking squarely at a person with concern for their growth.',
          },
        ],
      },
      {
        id: 'ctbh-ch01-q03',
        scenarioPrompt:
          'What does the medical student’s memory of being bitten by a dog prove about how human memory works?',
        options: [
          {
            label: 'A',
            text: 'Childhood trauma permanently damages the hippocampus so positive details cannot be stored.',
            isCorrect: false,
            explanation:
              'The positive detail (the rescuer on the bicycle) WAS stored all along; it was simply suppressed by his distrustful lifestyle.',
          },
          {
            label: 'B',
            text: 'Memory is like history written by the current ruling regime: the present self selects and edits past memories to justify its current lifestyle, and rewrites them when its lifestyle changes.',
            isCorrect: true,
            explanation:
              'While he viewed the world as dangerous, he remembered only the dog bite and indifferent bystanders; once he began seeing people as comrades, he recalled the cyclist who saved him.',
          },
          {
            label: 'C',
            text: 'All childhood memories are complete fabrications that never happened.',
            isCorrect: false,
            explanation:
              'Both the dog bite and the rescue actually happened; what changed was which part his lifestyle chose to highlight.',
          },
          {
            label: 'D',
            text: 'Only hypnosis can recover accurate childhood memories.',
            isCorrect: false,
            explanation:
              'The memory surfaced naturally because his present worldview shifted toward camaraderie.',
          },
        ],
      },
      {
        id: 'ctbh-ch01-q04',
        scenarioPrompt:
          'What are the three faces written on Adlerian psychology’s "Triangular Prism"?',
        options: [
          {
            label: 'A',
            text: '(1) Past Trauma, (2) Present Symptom, and (3) Future Goal.',
            isCorrect: false,
            explanation:
              'Those are terms from teleology vs. etiology, not the three inscriptions on the Triangular Prism.',
          },
          {
            label: 'B',
            text: '(1) "That bad person," (2) "Poor me," and (3) "What should I do from now on?"',
            isCorrect: true,
            explanation:
              'Clients and frustrated teachers invariably speak from "That bad person" or "Poor me"; Adlerian counselling rotates their focus to "What should I do from now on?"',
          },
          {
            label: 'C',
            text: '(1) Work, (2) Friendship, and (3) Love.',
            isCorrect: false,
            explanation:
              'Those are the Three Tasks of Life.',
          },
          {
            label: 'D',
            text: '(1) Self-Acceptance, (2) Confidence in Others, and (3) Contribution to Others.',
            isCorrect: false,
            explanation:
              'Those are the three circular pillars of Community Feeling.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbh-ch01-fc-01',
        category: 'foundation',
        front: 'How does the Philosopher contrast Religion and Philosophy?',
        back: 'Religion explains the world with stories that stay inside a finished circle, whereas philosophy explains the world without stories and walks endlessly forward ("walk on from the top of a hundred-foot bamboo pole").',
        mentalHook: 'Religion rests inside a story; philosophy keeps walking past the top of the pole.',
      },
      {
        id: 'ctbh-ch01-fc-02',
        category: 'architecture',
        front: 'What is the ultimate goal of education and counselling in Adlerian psychology?',
        back: 'Self-Reliance—helping a person step out of childhood dependency into autonomous adulthood.',
        mentalHook: 'Counselling = Re-education; Goal of Education = Self-Reliance.',
      },
      {
        id: 'ctbh-ch01-fc-03',
        category: 'adaptation',
        front: 'What is the Latin root of "respect" (respicio), and what does it mean?',
        back: 'Respicio means "to look at"—seeing a person as they actually are and valuing their unique individuality so they can grow as themselves.',
        mentalHook: 'Respect = Looking squarely at who they really are, not your mould.',
      },
      {
        id: 'ctbh-ch01-fc-04',
        category: 'optimization',
        front: 'How does Adlerian psychology define "empathy" as opposed to sympathy?',
        back: 'Empathy is a skill of "having concern for other people’s concerns"—seeing with their eyes, listening with their ears, and feeling with their heart by stepping beside them.',
        mentalHook: 'Sympathy nods at their complaint; empathy looks at what they care about.',
      },
      {
        id: 'ctbh-ch01-fc-05',
        category: 'data',
        front: 'Why does the Philosopher compare personal memory to history written by a ruling political regime?',
        back: 'Because the present "ruling self" selects, edits, and rewrites past memories to legitimize its current lifestyle and present goals.',
        mentalHook: 'The present lifestyle is the monarch that edits your memory textbooks.',
      },
      {
        id: 'ctbh-ch01-fc-06',
        category: 'evaluation',
        front: 'What are the three faces of the Adlerian Triangular Prism, and which one must we choose?',
        back: '1. "That bad person," 2. "Poor me," and 3. "What should I do from now on?"—we must discard the first two and focus solely on the third.',
        mentalHook: 'Drop blame ("Bad person") and self-pity ("Poor me"); ask "What now?"',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbh-ch01-feyn-01',
        conceptTitle: 'Respect (Respicio), Empathy, and Education for Self-Reliance',
        prompt:
          'Explain why an educator cannot teach effectively without first practicing unconditional Respect (respicio) and Empathy ("having concern for other people’s concerns").',
        rubricChecklist: [
          'Identifies Self-Reliance as the single overarching goal of education and counselling.',
          'Defines Respect via Fromm’s respicio ("to look at"): seeing the student as they are and valuing their unique growth without forcing a mould.',
          'Explains why teachers must model respect first: children who have never been respected cannot know what respect is.',
          'Distinguishes passive sympathy from active Empathy: stepping beside the learner and having concern for their concerns.',
        ],
        modelExplanation:
          'The true goal of education is not cramming facts or enforcing obedience, but fostering Self-Reliance. To guide a student toward self-reliance, an educator must start with Respect—defined from the Latin respicio ("to look at") as seeing the student as they actually are rather than forcing them into an adult mould. Because children who have never been respected cannot understand respect, the educator must respect them unconditionally first. From that respect flows Empathy—not merely nodding in sympathy, but stepping beside the student and "having concern for their concerns" so they can grow on their own feet.',
      },
      {
        id: 'ctbh-ch01-feyn-02',
        conceptTitle: 'Memory as Regime History & The Triangular Prism',
        prompt:
          'Using the dog-bite memory case and the Triangular Prism, explain why recounting past grievances ("That bad person" and "Poor me") is a teleological trap and how to break it.',
        rubricChecklist: [
          'Explains the regime-history metaphor: the present "ruling self" edits past memories to justify its current lifestyle.',
          'Illustrates with the dog-bite case: switching from a distrustful lifestyle to a comrade lifestyle uncovered the forgotten memory of the rescuer on a bicycle.',
          'Names the three faces of the Triangular Prism: "That bad person," "Poor me," and "What should I do from now on?"',
          'Explains why rotating to Face 3 ("What should I do from now on?") replaces dependent consolation with self-reliant agency.',
        ],
        modelExplanation:
          'Our memories are not objective recordings; like a political regime that rewrites history textbooks to justify its rule, our present lifestyle edits the past. A medical student who viewed the world as dangerous remembered only being bitten by a dog while adults watched—until he began seeing people as comrades and suddenly remembered the cyclist who rescued him. When people complain in counselling or classrooms, they almost always speak from two faces of a Triangular Prism: "That bad person" (blaming others) or "Poor me" (seeking sympathy). To build self-reliance, we must rotate the prism to the third face: "What should I do from now on?"',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbh-n-self-reliance-goal',
        label: 'Education as Self-Reliance',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The foundational Adlerian thesis that both education and counselling ("re-education") exist to guide individuals out of childhood dependency into autonomous self-reliance.',
        formulaOrRule: 'Education == Counselling == Path_to_Self_Reliance',
        whyItMatters:
          'Replaces test-score drilling and clinical symptom consolation with empowering human development.',
      },
      {
        id: 'ctbh-n-respicio-respect',
        label: 'Unconditional Respect (Respicio)',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'Erich Fromm’s definition of respect from the Latin respicio ("to look at"): seeing a person as they are and valuing their unique unfolding without imposing an external mould.',
        formulaOrRule: 'Respect = See_As_They_Are(Person) [Zero Forced Mould]',
        whyItMatters:
          'Acts as the mandatory prerequisite before any educator, parent, or leader can reach another human being.',
      },
      {
        id: 'ctbh-n-empathy-skill',
        label: 'Skillful Empathy (Concern for Concerns)',
        category: 'optimization',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Stepping beside another person to see with their eyes, listen with their ears, and feel with their heart by taking an active interest in what they care about.',
        formulaOrRule: 'Empathy = Have_Concern_for(Their_Concerns) !== Passive_Sympathy',
        whyItMatters:
          'Builds genuine horizontal connection without falling into enabling victim sympathy.',
      },
      {
        id: 'ctbh-n-regime-memory',
        label: 'Teleological Regime Memory',
        category: 'data',
        chapterNumber: 1,
        importance: 2,
        definition:
          'The mechanism whereby the present "ruling self" selects, suppresses, or rewrites past memories (like the dog-bite vs. bicycle rescue) to legitimize its current lifestyle.',
        formulaOrRule: 'Past_Memory = Rewritten_By(Present_Lifestyle)',
        whyItMatters:
          'Proves that changing your present lifestyle transforms the meaning and recall of your own past.',
      },
      {
        id: 'ctbh-n-triangular-prism',
        label: 'The Triangular Prism',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition:
          'Adler’s three-faced diagnostic prism contrasting "That bad person" and "Poor me" against the sole constructive question: "What should I do from now on?"',
        formulaOrRule: 'Discard(Bad_Person, Poor_Me) -> Focus("What_Should_I_Do_Now?")',
        whyItMatters:
          'Provides an instant conversational filter to halt blame and self-pity in classrooms, therapy, and teams.',
      },
      {
        id: 'ctbh-n-endless-pole',
        label: 'Philosophy Without Stories',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 3,
        definition:
          'Walking on beyond the top of a hundred-foot bamboo pole through continuous conceptual inquiry rather than resting inside closed religious fables.',
        formulaOrRule: 'Philosophy = Continuous_Inquiry(Zero_Dogmatic_Stories)',
        whyItMatters:
          'Prevents Adlerian psychology from being reduced to a superficial checklist or rigid dogma.',
      },
    ],
    edges: [
      {
        source: 'ctbh-n-respicio-respect',
        target: 'ctbh-n-empathy-skill',
        relationship: 'prerequisite_for',
        explanation:
          'You can only practice authentic empathy for another person’s concerns after you first look at and respect them as they are.',
      },
      {
        source: 'ctbh-n-empathy-skill',
        target: 'ctbh-n-self-reliance-goal',
        relationship: 'optimizes',
        explanation:
          'Standing beside learners with empathy empowers them to step forward into self-reliance.',
      },
      {
        source: 'ctbh-n-triangular-prism',
        target: 'ctbh-n-regime-memory',
        relationship: 'mitigates',
        explanation:
          'Rotating the prism to "What should I do from now on?" breaks the grip of selective victim memories ("Poor me" / "That bad person").',
      },
      {
        source: 'ctbh-n-triangular-prism',
        target: 'ctbh-n-self-reliance-goal',
        relationship: 'prerequisite_for',
        explanation:
          'Self-reliance begins the exact moment an individual stops blaming others and asks what they themselves should do next.',
      },
      {
        source: 'ctbh-n-endless-pole',
        target: 'ctbh-n-self-reliance-goal',
        relationship: 'part_of',
        explanation:
          'Walking the endless pole of inquiry together is the philosophical posture of self-reliant education.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 10,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 10 dialogue segments of Part I: Philosophy without stories vs. Religion (100-foot bamboo pole), Counselling as re-education toward Self-Reliance, Erich Fromm’s Respect (respicio), Empathy as having concern for others’ concerns, the dog-bite vs. bicycle-rescue teleological memory, and the Triangular Prism.',
  },
};

export const ctbhCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Part II: Why Rebuke Should Be Denied',
  subtitle: 'Classroom Democracy, Crimes of Ignorance, the Five Stages of Problem Behavior, and Natural Consequences',
  readingTimeMinutes: 9,
  sourceWordCount: 11766,
  executiveThesis:
    'A classroom—like any healthy organization—is a democratic nation where students hold sovereignty. Problem behavior is never an irrational defect to be crushed with violent rebuke; it is a teleological escalation across Five Stages (Demand for Admiration, Attention Drawing, Power Struggle, Revenge, and Proof of Incompetence) aimed at securing a sense of belonging, and must be met with horizontal teaching and natural consequences rather than authoritarian punishment.',
  paradigmShift: {
    oldWay:
      'Autocratic Rebuke & Reward-Punishment Policing: Treating the teacher or manager as an absolute monarch who suppresses misbehavior with angry scolding ("low-cost violent communication") and artificial punishments.',
    newWay:
      'Democratic Sovereignty & The Five-Stage Diagnostic: Recognizing children and team members as sovereign citizens who commit "crimes of ignorance" only because they do not yet know better, and decoding problem behavior across its five teleological stages.',
    whyItChanged:
      'Rebuke and anger may silence a person in the moment, but they only teach submission to brute power ("This person’s views do not match mine, so they are suppressing me with force") while leaving the underlying belonging deficit untouched.',
  },
  customDiagrams: [
    {
      id: 'ctbh-ch02-svg-01',
      title: 'The Five Escalating Stages of Problem Behavior',
      subtitle: 'Tracing how a thwarted desire for belonging escalates from praise-seeking to learned helplessness',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="38" fill="#f8fafc" font-size="18" font-weight="700">THE FIVE STAGES OF PROBLEM BEHAVIOR (RUDOLF DREIKURS / ADLER)</text>
  <text x="36" y="58" fill="#94a3b8" font-size="12">Underlying Goal at Every Stage: Securing a privileged position &amp; sense of belonging in the community</text>

  <!-- Stage 1 -->
  <rect x="36" y="76" width="728" height="54" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="54" y="99" fill="#38bdf8" font-size="12" font-weight="700">STAGE 1: DEMAND FOR ADMIRATION ("Notice My Compliance")</text>
  <text x="54" y="117" fill="#e2e8f0" font-size="11">Plays the "good child / model student" only when watched; secretly aims to win vertical praise &amp; privilege.</text>

  <!-- Stage 2 -->
  <rect x="36" y="140" width="728" height="54" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="54" y="163" fill="#6ee7b7" font-size="12" font-weight="700">STAGE 2: ATTENTION DRAWING ("Look at Me Even If Scolded")</text>
  <text x="54" y="181" fill="#e2e8f0" font-size="11">If praise fails: active mischief (pranks/noise) or passive incompetence (slowness/tears) to monopolize attention.</text>

  <!-- Stage 3 -->
  <rect x="36" y="204" width="728" height="54" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="54" y="227" fill="#fcd34d" font-size="12" font-weight="700">STAGE 3: POWER STRUGGLE ("You Cannot Control Me — War")</text>
  <text x="54" y="245" fill="#e2e8f0" font-size="11">Open defiance, insolence, or passive disobedience to defeat the adult/leader and seize dominance.</text>

  <!-- Stage 4 -->
  <rect x="36" y="268" width="728" height="54" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="54" y="291" fill="#fca5a5" font-size="12" font-weight="700">STAGE 4: REVENGE ("If You Don't Love Me, Hate Me")</text>
  <text x="54" y="309" fill="#e2e8f0" font-size="11">After losing the power struggle: plots retaliation, stalking, self-harm, or truancy to wound the authority figure.</text>

  <!-- Stage 5 -->
  <rect x="36" y="332" width="728" height="58" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2" />
  <text x="54" y="355" fill="#ef4444" font-size="12" font-weight="800">STAGE 5: PROOF OF INCOMPETENCE ("Give Up on Me Completely")</text>
  <text x="54" y="375" fill="#94a3b8" font-size="11">Displays total helplessness ("I'm an idiot") so nobody expects anything and further despair is avoided.</text>
</svg>`,
      bierutCaption:
        'From the "model child" fishing for praise in Stage 1 to the despairing youth proving incompetence in Stage 5, all five stages are teleological strategies to secure a place in the community.',
      annotations: [
        {
          step: '01',
          label: 'Why Stage 1 Is Already a Warning Sign',
          explanation:
            'A child who obeys only to be praised ("demand for admiration") will immediately shift to mischief if praise stops.',
        },
        {
          step: '02',
          label: 'Active vs. Passive Attention Drawing',
          explanation:
            'Even quiet traits like forgetfulness, shyness, or eating slowly can be Stage 2 weapons to capture adult attention.',
        },
        {
          step: '03',
          label: 'From Defeat to Revenge & Helplessness',
          explanation:
            'Crushing a child in a Stage 3 power struggle never solves the behavior; it pushes them straight into Stage 4 revenge and Stage 5 incompetence.',
        },
      ],
    },
    {
      id: 'ctbh-ch02-svg-02',
      title: 'Violent Rebuke vs. Democratic Rule of Law & Natural Consequences',
      subtitle: 'Why scolding is low-cost violent communication and how democratic classrooms teach responsibility',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">VIOLENT REBUKE (AUTOCRACY) VS. NATURAL CONSEQUENCES (DEMOCRACY)</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">The classroom is a democratic nation where sovereignty resides in the students, not the dictator</text>

  <!-- Left Panel: Autocratic Rebuke -->
  <rect x="36" y="88" width="344" height="296" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="56" y="114" fill="#fca5a5" font-size="13" font-weight="700">1. ANGRY REBUKE (LOW-COST VIOLENCE)</text>
  <text x="56" y="134" fill="#94a3b8" font-size="11">Using a "gun" of rage instead of patient words</text>

  <rect x="56" y="152" width="304" height="64" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="72" y="174" fill="#f8fafc" font-size="12" font-weight="600">Why Teachers / Managers Scold</text>
  <text x="72" y="194" fill="#94a3b8" font-size="11">Low cost, quick submission, &amp; satisfies the</text>
  <text x="72" y="208" fill="#94a3b8" font-size="11">adult's craving for power</text>

  <path d="M 208 216 L 208 238" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="56" y="238" width="304" height="122" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="72" y="262" fill="#fca5a5" font-size="12" font-weight="700">What the Child Actually Learns</text>
  <text x="72" y="284" fill="#e2e8f0" font-size="11">• Never gains true insight into the act</text>
  <text x="72" y="304" fill="#e2e8f0" font-size="11">• Concludes: "This adult is using brute force</text>
  <text x="72" y="320" fill="#e2e8f0" font-size="11">  to crush me because I'm weaker."</text>
  <text x="72" y="342" fill="#fca5a5" font-size="11">• Shrinks in fear; loses courage for self-reliance</text>

  <!-- Right Panel: Democratic Natural Consequences -->
  <rect x="420" y="88" width="344" height="296" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="440" y="114" fill="#6ee7b7" font-size="13" font-weight="700">2. SOCRATIC TEACHING &amp; CONSEQUENCES</text>
  <text x="440" y="134" fill="#94a3b8" font-size="11">Sovereignty in citizens; rules by prior agreement</text>

  <rect x="440" y="152" width="304" height="64" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="456" y="174" fill="#38bdf8" font-size="12" font-weight="600">"Crimes of Ignorance" (Ants &amp; Magnifier)</text>
  <text x="456" y="194" fill="#94a3b8" font-size="11">Children act badly only because they do not</text>
  <text x="456" y="208" fill="#94a3b8" font-size="11">yet know; teach calmly without anger</text>

  <path d="M 592 216 L 592 238" stroke="#10b981" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="440" y="238" width="304" height="122" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="456" y="262" fill="#6ee7b7" font-size="12" font-weight="700">Natural vs. Logical Consequences</text>
  <text x="456" y="284" fill="#e2e8f0" font-size="11">• Spilled milk -&gt; Wipe it up together calmly</text>
  <text x="456" y="304" fill="#e2e8f0" font-size="11">• Borrowed item broken -&gt; Apologize &amp; repair</text>
  <text x="456" y="324" fill="#e2e8f0" font-size="11">• Zero personal malice from the teacher;</text>
  <text x="456" y="342" fill="#6ee7b7" font-size="11">  student learns autonomous responsibility</text>
</svg>`,
      bierutCaption:
        'Scolding a child with anger is like pulling out a gun to win an argument at low cost, whereas treating misbehavior as a "crime of ignorance" and applying natural consequences builds democratic self-reliance.',
      annotations: [
        {
          step: '01',
          label: 'Crimes of Ignorance (Burning Ants)',
          explanation:
            'A child burning ants with a magnifying glass does not yet grasp the cruelty of taking life; they need calm teaching, not rage.',
        },
        {
          step: '02',
          label: 'Anger as Immature Violent Communication',
          explanation:
            'Adults resort to anger because patient dialogue takes effort and time; anger forces fast compliance at the expense of respect.',
        },
        {
          step: '03',
          label: 'Experiencing the Consequence of One’s Own Choice',
          explanation:
            'When a student faces the agreed-upon rule or natural consequence without being screamed at, they learn responsibility instead of resentment.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbh-ch02-mm-01',
      name: 'Crimes of Ignorance (The Magnifying Glass Principle)',
      tagline: 'Children do not misbehave out of evil; they simply do not yet know what is beneficial for themselves and the community.',
      naiveIntuition:
        'When children burn ants with a magnifying glass or disrupt class, they are acting out of malice and must be harshly scolded so they learn a lesson.',
      firstPrinciplesReality:
        'Following Socrates’ principle that no person knowingly desires evil, children commit "crimes of ignorance" because they do not yet understand the impact of their actions; once taught calmly without anger, they stop on their own.',
      howToApply:
        'Whenever a child, student, or junior teammate makes a destructive mistake, assume ignorance rather than malice first, and explain the mechanism calmly in a voice utterly free of anger.',
    },
    {
      id: 'ctbh-ch02-mm-02',
      name: 'The Five-Stage Problem Behavior Escalation Ladder',
      tagline: 'Every stage from "model child" to total helplessness is a bid for belonging.',
      naiveIntuition:
        'A quiet "model student" who obeys for praise is healthy, whereas a defiant or withdrawn student has a broken personality.',
      firstPrinciplesReality:
        'Both are on the same five-stage ladder: Stage 1 (Demand for Admiration) obeys only to be praised; if thwarted, the person escalates to Stage 2 (Attention Drawing), Stage 3 (Power Struggle), Stage 4 (Revenge—seeking hatred when love fails), and Stage 5 (Proof of Incompetence).',
      howToApply:
        'Never wait until Stage 3 or 4 to intervene; stop rewarding Stage 1 compliance with vertical praise, and teach horizontal belonging before the ladder escalates.',
    },
    {
      id: 'ctbh-ch02-mm-03',
      name: 'Anger as Low-Cost Violent Communication',
      tagline: 'Scolding is pulling a verbal gun because you are unwilling to pay the cost of patient language.',
      naiveIntuition:
        'Sometimes a teacher or parent has no choice but to get angry and roar at children to maintain order.',
      firstPrinciplesReality:
        'Human beings possess language capable of logical dialogue; resorting to anger and rebuke is an immature, low-cost shortcut that forces instant submission through violence while convincing the child that "might makes right."',
      howToApply:
        'Treat every urge to raise your voice as an admission of communicative laziness, and replace punitive scolding with prior democratic agreements and natural consequences.',
    },
  ],
  deepSections: [
    {
      id: 'ctbh-ch02-ds-01',
      sectionNumber: '2.1',
      title: 'The Classroom as a Democratic Nation and Crimes of Ignorance',
      subtitle: 'Respecting Student Sovereignty and Teaching Without Anger',
      coreMechanism:
        'A classroom—or any human organization—is a miniature nation. If the teacher rules by autocratic decree, students have zero responsibility and merely obey to avoid punishment. In a democratic nation, sovereignty resides in the citizens (the students): rules are established through consultation and consensus so that students understand and uphold them autonomously. Respecting students means respecting their sovereignty.\n\nWhen children violate community norms—such as burning ants to death with a magnifying glass—why do they do it? Recalling Socrates’ maxim that "no person desires evil," Adlerian pedagogy classifies such acts as **crimes of ignorance**: children simply do not yet know that taking life is cruel. When you teach them what they do not know in a calm voice without a trace of anger, they understand and stop.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Establish Democratic Sovereignty & Consensus Rules',
          detail:
            'Involve learners in understanding and agreeing to community rules beforehand rather than imposing edicts from above.',
        },
        {
          step: '02',
          title: 'Diagnose Missteps as "Crimes of Ignorance"',
          detail:
            'Recognize that the person acted out of not knowing what is truly beneficial, not out of innate wickedness.',
        },
        {
          step: '03',
          title: 'Instruct Calmly Without Rebuke',
          detail:
            'Convey the necessary knowledge and social impact using patient, horizontal language rather than angry scolding.',
        },
      ],
      keyTakeaways: [
        'A classroom is a democratic nation where sovereignty resides in the students, never in the teacher as an absolute monarch.',
        'If children know that an action is genuinely bad and understand why, they do not do it; problem acts begin as crimes of ignorance.',
        'Scolding a child who does not know why an action is wrong only teaches them to hide from the scolder.',
      ],
      commonPitfalls: [
        'Confusing a democratic classroom with lawless laissez-faire chaos where no rules exist.',
        'Assuming a child "already knows better" and jumping straight to angry punishment.',
      ],
    },
    {
      id: 'ctbh-ch02-ds-02',
      sectionNumber: '2.2',
      title: 'The Five Stages of Problem Behavior',
      subtitle: 'From Demand for Admiration to Revenge and Proof of Incompetence',
      coreMechanism:
        'When children fail to find a horizontal sense of belonging, their problem behavior escalates predictably across five teleological stages (formulated by Adler’s disciple Rudolf Dreikurs). **Stage 1 is Demand for Admiration**: playing the "good child" or model student to win praise and secure a privileged position. If praise does not come, they move to **Stage 2: Attention Drawing**—either through active mischief or passive incompetence (slowness, forgetfulness, crying) because being scolded is better than being ignored.\n\nIf suppressed, they enter **Stage 3: Power Struggle**, defying adults in open or passive war. If the adult crushes them in Stage 3, the defeated child drops into **Stage 4: Revenge**—plotting to hurt the adult through stalking, delinquency, withdrawal, or wrist-cutting ("If you will not love me, then hate me!"). Finally comes **Stage 5: Proof of Incompetence** ("Give up on me; I am helpless").',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Identify Stages 1 & 2 (Admiration & Attention)',
          detail:
            'Spot when "good behavior" is actually fishing for praise (Stage 1) or when mischief/slowness aims to monopolize eyes (Stage 2).',
        },
        {
          step: '02',
          title: 'Refuse the Stage 3 Power Struggle',
          detail:
            'When challenged with defiance, step off the battlefield immediately instead of trying to crush the challenger.',
        },
        {
          step: '03',
          title: 'Prevent Stage 4 Revenge & Stage 5 Incompetence',
          detail:
            'Recognize self-harm, truancy, and total helplessness as desperate cries for belonging, and rebuild horizontal respect.',
        },
      ],
      formulas: [
        {
          name: 'The Five-Stage Teleological Escalation Ladder',
          expression:
            'Stage_1(Admiration) -> Stage_2(Attention) -> Stage_3(Power_Struggle) -> Stage_4(Revenge/Hate) -> Stage_5(Incompetence)',
          intuition:
            'When vertical praise or rebuke blocks genuine horizontal belonging, the individual escalates through five increasingly destructive strategies to secure a special place in the group.',
          variables: [
            {
              symbol: 'Stage_1..2',
              meaning: 'Seeking special status via compliance ("good child") or disruptive/passive attention-getting.',
            },
            {
              symbol: 'Stage_3..4',
              meaning: 'Waging war against authority (Power Struggle) and, if defeated, seeking hatred to hurt the victor (Revenge).',
            },
            {
              symbol: 'Stage_5',
              meaning: 'Proving total helplessness so everyone abandons expectations and no further failure can hurt.',
            },
          ],
          workedExample:
            'A teenager whose strict parents crush his Stage 3 rebellion begins cutting his wrists or refusing to attend school (Stage 4 Revenge), knowing instinctively that ruining his own future inflicts the maximum possible torment on his parents.',
        },
      ],
      keyTakeaways: [
        'Even Stage 1 ("Demand for Admiration"—the obedient model student) is a problem stage because its goal is securing a privileged vertical position rather than contributing.',
        'In Stage 4 (Revenge), a person who cannot obtain love demands the opposite emotion—hatred—to force the other person to keep looking at them.',
        'Stage 5 (Proof of Incompetence) is the ultimate armor: "Expect nothing of me, because I am completely incapable."',
      ],
      commonPitfalls: [
        'Praising Stage 1 "model students" as examples for others, which entrenches their praise-dependency and provokes Stage 2/3 rebellion in peers.',
        'Using harsher punishment against Stage 3 defiance, which guarantees an escalation into Stage 4 Revenge.',
      ],
    },
    {
      id: 'ctbh-ch02-ds-03',
      sectionNumber: '2.3',
      title: 'Why Rebuke Is Low-Cost Violence and How Natural Consequences Work',
      subtitle: 'Replacing Punitive Anger with Autonomous Responsibility',
      coreMechanism:
        'Why do educators, parents, and managers find it so hard to give up scolding? Because angry rebuke is **low-cost, fast, and secretly pleasurable**: like pulling a gun on an unarmed opponent, shouting forces immediate submission without the painstaking effort of logical dialogue. Yet what happens inside the mind of a scolded child? They never reflect on the morality of their act; instead, they intuitively grasp: "This person’s views do not match mine, so they are using violent power to suppress me." Rebuke is immature, violent communication that destroys respect.\n\nInstead of arbitrary punishment or scolding, Adlerian education allows learners to experience the **natural or logical consequences** of their own choices—such as wiping up spilled milk together without a word of blame—so they learn responsibility from reality rather than fear of a ruler.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Renounce the "Verbal Gun" of Rebuke',
          detail:
            'Admit that getting angry is a lazy shortcut used to overpower someone when you refuse to invest time in dialogue.',
        },
        {
          step: '02',
          title: 'Distinguish Punishment from Consequence',
          detail:
            'Punishment is imposed vertically by an angry ruler; consequences flow naturally from reality or agreed-upon democratic rules.',
        },
        {
          step: '03',
          title: 'Assist Restoration Without Blame',
          detail:
            'When milk spills or a mistake occurs, skip the lecture on carelessness and calmly focus on cleaning up and preventing recurrence.',
        },
      ],
      keyTakeaways: [
        'Anger and rebuke are low-cost, immature, violent communication used to force submission without patient words.',
        'A person who submits to angry scolding has not been persuaded; they have merely bowed to superior force.',
        'Even when enforcing strict institutional rules, an educator must do so calmly and impartially, never mixing personal anger into the rule.',
      ],
      commonPitfalls: [
        'Disguising angry punishment as a "natural consequence" while still lecturing the person with hostility.',
        'Believing that because dialogue takes longer than shouting, shouting is "necessary" in busy classrooms or workplaces.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'The Five Stages of Problem Behavior Diagnostic & Intervention Matrix',
      description:
        'Mapping the surface symptom, hidden teleological goal, adult emotional reaction, and first-principles response across all five stages.',
      headers: [
        'Stage',
        'Surface Behavior',
        'Hidden Teleological Goal',
        'First-Principles Adlerian Response',
      ],
      rows: [
        [
          '1. Demand for Admiration',
          'Over-obedient "good child" fishing for praise',
          'Win privileged vertical status above peers',
          'Stop vertical praise; convey horizontal gratitude for real contribution',
        ],
        [
          '2. Attention Drawing',
          'Pranks, noise, or passive slowness/forgetfulness',
          'Force adults to look at me ("Scolding > Being ignored")',
          'Ignore attention-seeking antics; attend to constructive behavior',
        ],
        [
          '3. Power Struggle',
          'Open defiance, insolence, or stubborn refusal',
          'Defeat authority figure and prove "You can’t rule me"',
          'Step off the battlefield immediately; refuse to fight for dominance',
        ],
        [
          '4. Revenge & 5. Incompetence',
          'Self-harm, stalking, truancy, or total helplessness',
          'Wound the victor via hatred (4) or evade all expectations (5)',
          'Heal the wound with unconditional respect; build minute steps of success',
        ],
      ],
      verdictRule:
        'Never diagnose problem behavior by its surface disruption; identify which of the five belonging-stages the person is operating in and refuse to escalate them down the ladder via rebuke.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbh-ch02-sc-01',
      title: 'De-escalating Stage 4 Revenge & Stage 5 Helplessness in a Pip’d Developer',
      roleAndContext:
        'After a harsh public rebuke from a VP during a sprint review (crushing a Stage 3 disagreement), a mid-level developer stops speaking in standups, submits deliberately minimal PRs (Stage 4 passive revenge), and claims "I’m just not smart enough for distributed systems" (Stage 5 proof of incompetence).',
      symptomOrFailure:
        'Threatening the developer with a formal Performance Improvement Plan (PIP) and more scolding only deepens his withdrawal and cements his helplessness.',
      naiveFixAndWhyItFails:
        'Assigning him trivial CSS tickets while lecturing him about his attitude; this fails because it validates his Stage 5 proof of incompetence ("Give up on me") and keeps the vertical power struggle alive.',
      firstPrinciplesSolution:
        'Recognize the Stage 3 -> 4 -> 5 escalation caused by the VP’s violent rebuke. Apologize horizontally for the public scolding, restore democratic ownership by letting him co-author the service retry spec, and express concrete gratitude ("Thank you") as each sub-module ships.',
      measurableOutcome:
        'The developer exits Stage 5 helplessness within two sprints and successfully leads the retry-queue rollout.',
    },
    {
      id: 'ctbh-ch02-sc-02',
      title: 'Replacing Punitive Blame with Natural/Logical Consequences in CI/CD Governance',
      roleAndContext:
        'Whenever a developer breaks the main build, the release manager posts an angry, shaming message in the company-wide Slack channel ("Who broke main AGAIN?!").',
      symptomOrFailure:
        'Developers hide broken tests, delay merging complex branches, and resent the release manager’s authoritarian policing.',
      naiveFixAndWhyItFails:
        'Instituting a "Wall of Shame" trophy for whoever breaks the build; this fails because public humiliation is vertical punishment that breeds fear rather than engineering ownership.',
      firstPrinciplesSolution:
        'Treat build regressions as "crimes of ignorance" or process gaps, eliminate all angry Slack scolding, and implement democratic logical consequences: an automated pre-merge branch gate plus a neutral runbook where the commit author pairs to restore green build state.',
      measurableOutcome:
        'Main-branch broken duration drops by 78%, and daily merge frequency doubles without a single angry message.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbh-ch02-q01',
        scenarioPrompt:
          'Why does the Philosopher classify Stage 1 ("Demand for Admiration"—being an obedient, praise-seeking model student) as the first stage of problem behavior?',
        options: [
          {
            label: 'A',
            text: 'Because studying hard is harmful to a child’s physical health.',
            isCorrect: false,
            explanation:
              'Studying for one’s own growth is healthy; the issue in Stage 1 is the hidden goal behind the compliance.',
          },
          {
            label: 'B',
            text: 'Because the child’s goal is not genuine contribution, but winning praise to occupy a privileged vertical position—and if no one watches or praises them, they stop acting or escalate to Stage 2.',
            isCorrect: true,
            explanation:
              'Stage 1 is driven by the desire for recognition and vertical superiority; when admiration is withheld, the "good child" quickly pivots to attention-drawing mischief.',
          },
          {
            label: 'C',
            text: 'Because teachers dislike students who get high grades.',
            isCorrect: false,
            explanation:
              'Teachers often mistakenly love Stage 1 behavior because it flatters their authority.',
          },
          {
            label: 'D',
            text: 'Because Stage 1 students are already in the Revenge stage.',
            isCorrect: false,
            explanation:
              'Revenge is Stage 4, which occurs much later in the escalation.',
          },
        ],
      },
      {
        id: 'ctbh-ch02-q02',
        scenarioPrompt:
          'In Stage 4 of problem behavior (Revenge), why does a child or adult engage in stalking, self-harm, or delinquency against parents or partners?',
        options: [
          {
            label: 'A',
            text: 'Because having failed to obtain love and lost the Stage 3 power struggle, they demand the opposite emotion—hatred—so the other person is still forced to look at them and suffer.',
            isCorrect: true,
            explanation:
              'In Stage 4, hurting oneself or tormenting the victor is a desperate teleological act of revenge: "If you won’t love me, hate me inside this relationship!"',
          },
          {
            label: 'B',
            text: 'Because they have forgotten who their parents are.',
            isCorrect: false,
            explanation:
              'Their behavior is laser-targeted at the specific people they want to hurt.',
          },
          {
            label: 'C',
            text: 'Because they want to help the community through rebellion.',
            isCorrect: false,
            explanation:
              'Stage 4 is driven by interpersonal vengeance, not community contribution.',
          },
          {
            label: 'D',
            text: 'Because their parents used too much democratic consultation.',
            isCorrect: false,
            explanation:
              'Stage 4 is triggered when adults crush the child in a vertical Stage 3 power struggle.',
          },
        ],
      },
      {
        id: 'ctbh-ch02-q03',
        scenarioPrompt:
          'Why does the Philosopher state that angry scolding (rebuke) has "no educational value whatsoever"?',
        options: [
          {
            label: 'A',
            text: 'Because children cannot hear loud frequencies clearly.',
            isCorrect: false,
            explanation:
              'The issue is psychological and relational, not auditory.',
          },
          {
            label: 'B',
            text: 'Because anger is low-cost violent communication (like pulling a gun); the scolded child never gains moral insight, but merely learns that "this person is suppressing me with brute power."',
            isCorrect: true,
            explanation:
              'Rebuke forces fast submission at low cost to the adult, but teaches the child to fear power rather than understand why an action is wrong.',
          },
          {
            label: 'C',
            text: 'Because teachers should ignore all rule violations completely.',
            isCorrect: false,
            explanation:
              'Adlerian educators address violations calmly by teaching ("crimes of ignorance") and applying agreed-upon democratic rules.',
          },
          {
            label: 'D',
            text: 'Because praising is the only way to manipulate children effectively.',
            isCorrect: false,
            explanation:
              'Both praise and rebuke are rejected in Adlerian psychology.',
          },
        ],
      },
      {
        id: 'ctbh-ch02-q04',
        scenarioPrompt:
          'How does the Philosopher apply Socrates’ maxim "No person desires evil" to a child burning ants to death with a magnifying glass?',
        options: [
          {
            label: 'A',
            text: 'Killing ants is objectively good for the environment.',
            isCorrect: false,
            explanation:
              'The Philosopher explicitly calls it a cruel act.',
          },
          {
            label: 'B',
            text: 'The child is committing a "crime of ignorance"—they do not yet know the cruelty of taking life, so they need to be taught calmly without angry scolding.',
            isCorrect: true,
            explanation:
              'Children act badly because they lack knowledge of what is truly good; once taught horizontally without rage, they stop.',
          },
          {
            label: 'C',
            text: 'The child was born with a sadistic criminal gene that requires harsh punishment.',
            isCorrect: false,
            explanation:
              'Adlerian psychology rejects innate evil and punitive scolding.',
          },
          {
            label: 'D',
            text: 'The parent should take away the magnifying glass and scream at the child for an hour.',
            isCorrect: false,
            explanation:
              'Screaming only makes the child fear the parent’s anger rather than respect life.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbh-ch02-fc-01',
        category: 'architecture',
        front: 'In the Philosopher’s political metaphor, what is a classroom and who holds sovereignty?',
        back: 'A classroom is a democratic nation, and sovereignty resides in the students (the citizens), not the teacher.',
        mentalHook: 'The teacher is a democratic facilitator, never an absolute monarch.',
      },
      {
        id: 'ctbh-ch02-fc-02',
        category: 'foundation',
        front: 'What are "crimes of ignorance" in Adlerian pedagogy?',
        back: 'Misbehaviors committed by children simply because they do not yet know what is truly good or harmful (like burning ants with a magnifying glass), requiring calm teaching rather than rebuke.',
        mentalHook: 'If they don’t know yet, teach them; don’t roar at them.',
      },
      {
        id: 'ctbh-ch02-fc-03',
        category: 'evaluation',
        front: 'Name the Five Stages of Problem Behavior in order.',
        back: '1. Demand for Admiration, 2. Attention Drawing, 3. Power Struggle, 4. Revenge, and 5. Proof of Incompetence.',
        mentalHook: 'Admiration -> Attention -> Power -> Revenge -> Incompetence.',
      },
      {
        id: 'ctbh-ch02-fc-04',
        category: 'security',
        front: 'What is the hidden goal of Stage 5 ("Proof of Incompetence")?',
        back: 'To convince everyone "I am hopeless, so give up on me," thereby avoiding all expectations and protecting oneself from any further experience of failure.',
        mentalHook: 'Playing dead so no one can expect you to stand.',
      },
      {
        id: 'ctbh-ch02-fc-05',
        category: 'optimization',
        front: 'Why do adults and leaders habitually resort to angry scolding (rebuke)?',
        back: 'Because anger is a low-cost, fast, violent communication tool (like pulling a gun) that forces immediate submission without the effort of patient dialogue.',
        mentalHook: 'Anger is a cheap verbal gun used by impatient communicators.',
      },
      {
        id: 'ctbh-ch02-fc-06',
        category: 'adaptation',
        front: 'What does a child actually learn when an adult suppresses them with angry rebuke?',
        back: 'They learn: "This person’s views do not match mine, so they are suppressing me with violent force," which destroys respect and breeds fear or rebellion.',
        mentalHook: 'Scolding never teaches morality; it only teaches that might makes right.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbh-ch02-feyn-01',
        conceptTitle: 'The Five Stages of Problem Behavior',
        prompt:
          'Walk through all Five Stages of Problem Behavior and explain why both the "praise-hungry model student" (Stage 1) and the "helpless dropout" (Stage 5) are pursuing the same underlying goal.',
        rubricChecklist: [
          'Lists all five stages in sequence: Demand for Admiration, Attention Drawing, Power Struggle, Revenge, and Proof of Incompetence.',
          'Explains why Stage 1 ("good child") is already a problem stage: it seeks a privileged vertical position via praise.',
          'Traces how thwarting each stage escalates the behavior—from active/passive attention-seeking (Stage 2) to war (Stage 3) to seeking hatred/self-harm (Stage 4) to total helplessness (Stage 5).',
          'Identifies the single shared teleological goal across all five stages: securing a place of belonging in the community.',
        ],
        modelExplanation:
          'Problem behavior is not random madness; it escalates up a five-stage ladder whenever a person lacks horizontal belonging. In Stage 1 (Demand for Admiration), the child plays the obedient "model student" to win praise and special status. If praise fails, they move to Stage 2 (Attention Drawing) via mischief or passive slowness because being scolded beats being invisible. If suppressed, they launch Stage 3 (Power Struggle) to defeat the adult. If the adult crushes them, they drop into Stage 4 (Revenge)—using truancy, stalking, or self-harm to demand hatred when love fails—and finally Stage 5 (Proof of Incompetence), acting completely helpless so everyone gives up on them and they never have to risk failing again.',
      },
      {
        id: 'ctbh-ch02-feyn-02',
        conceptTitle: 'Why Rebuke Is Low-Cost Violence vs. Democratic Natural Consequences',
        prompt:
          'Explain to a strict teacher or manager why angry scolding ("rebuke") has zero educational value and how democratic rules and natural consequences replace it.',
        rubricChecklist: [
          'Defines angry rebuke as low-cost, immature, violent communication (pulling a verbal gun) chosen because dialogue takes effort.',
          'Explains what the scolded person actually internalizes: not moral insight, but resentment that superior force is crushing them.',
          'Introduces "crimes of ignorance" (burning ants): people need calm teaching of what they do not yet know.',
          'Contrasts autocratic punishment with a democratic classroom where sovereign citizens experience natural/logical consequences of agreed-upon rules.',
        ],
        modelExplanation:
          'When an educator or manager shouts in anger, they are using low-cost violent communication—like pulling out a gun because they are unwilling to pay the cost of patient language. The person being scolded never reflects on the moral principle; they simply realize, "This person is overpowering me with force," which breeds shrinking fear or secret revenge. Instead, treat mistakes as "crimes of ignorance" that require calm instruction, and run the classroom or team like a democratic nation where rules are agreed upon beforehand and individuals experience natural or logical consequences (like wiping up spilled milk together) without personal malice.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbh-n-democratic-classroom',
        label: 'Democratic Classroom Sovereignty',
        category: 'architecture',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Modeling the classroom or team as a democratic nation where sovereignty resides in the students/members and rules are formed by prior consensus.',
        formulaOrRule: 'Sovereignty_Owner == Students_Citizens [Zero Autocracy]',
        whyItMatters:
          'Shifts rule compliance from fear of a dictator to autonomous civic responsibility.',
      },
      {
        id: 'ctbh-n-crimes-of-ignorance',
        label: 'Crimes of Ignorance',
        category: 'foundation',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Socratic-Adlerian principle that children commit harmful acts (like burning ants) only because they do not yet know what is truly good, requiring calm teaching.',
        formulaOrRule: 'Misbehavior = Lack_of_Knowledge -> Calm_Instruction(Zero_Anger)',
        whyItMatters:
          'Eliminates moral condemnation and angry overreaction when guiding learners.',
      },
      {
        id: 'ctbh-n-five-stages',
        label: 'Five Stages of Problem Behavior',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'The five-step teleological escalation—Admiration, Attention, Power Struggle, Revenge, and Proof of Incompetence—aimed at securing belonging.',
        formulaOrRule: 'S1(Admiration) -> S2(Attention) -> S3(Power) -> S4(Revenge) -> S5(Incompetence)',
        whyItMatters:
          'Allows educators and leaders to decode the exact hidden goal behind any disruptive or helpless behavior.',
      },
      {
        id: 'ctbh-n-violent-rebuke',
        label: 'Rebuke as Low-Cost Violence',
        category: 'security',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Using angry scolding as a cheap, fast verbal weapon to force submission rather than investing the effort required for patient horizontal dialogue.',
        formulaOrRule: 'Rebuke == Verbal_Violence -> Submission_Without_Insight',
        whyItMatters:
          'Reveals why angry scolding has zero educational value and actively destroys self-reliance.',
      },
      {
        id: 'ctbh-n-revenge-hatred',
        label: 'Stage 4 Revenge (Demanding Hatred)',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 3,
        definition:
          'Seeking the opposite of love—hatred and torment—through self-harm, truancy, or stalking after being crushed in a Stage 3 power struggle.',
        formulaOrRule: 'Denied(Love) + Defeated(S3) -> Demand(Hatred_via_Self_Harm)',
        whyItMatters:
          'Explains why punishing a defiant youth or colleague pushes them into self-destructive retaliation.',
      },
      {
        id: 'ctbh-n-natural-consequences',
        label: 'Natural & Logical Consequences',
        category: 'optimization',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Allowing learners to experience the direct reality or agreed-upon rule outcome of their choice (e.g., wiping up spilled milk) without adult anger.',
        formulaOrRule: 'Choice -> Impersonal_Consequence + Calm_Restoration',
        whyItMatters:
          'Builds genuine accountability while preserving horizontal respect.',
      },
    ],
    edges: [
      {
        source: 'ctbh-n-violent-rebuke',
        target: 'ctbh-n-five-stages',
        relationship: 'prerequisite_for',
        explanation:
          'Suppressing children with vertical rebuke and praise drives them up the Five Stages of Problem Behavior.',
      },
      {
        source: 'ctbh-n-five-stages',
        target: 'ctbh-n-revenge-hatred',
        relationship: 'part_of',
        explanation:
          'Stage 4 Revenge is the critical turning point inside the Five Stages where thwarted love converts into demanding hatred.',
      },
      {
        source: 'ctbh-n-crimes-of-ignorance',
        target: 'ctbh-n-violent-rebuke',
        relationship: 'mitigates',
        explanation:
          'Recognizing misbehavior as a crime of ignorance replaces angry rebuke with calm instruction.',
      },
      {
        source: 'ctbh-n-democratic-classroom',
        target: 'ctbh-n-natural-consequences',
        relationship: 'prerequisite_for',
        explanation:
          'Logical consequences only function fairly when grounded in democratic rules agreed upon by sovereign citizens.',
      },
      {
        source: 'ctbh-n-natural-consequences',
        target: 'ctbh-n-five-stages',
        relationship: 'mitigates',
        explanation:
          'Applying calm natural consequences instead of entering power struggles halts escalation down the five-stage ladder.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 10,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 10 dialogue segments of Part II: Classroom as a democratic nation with student sovereignty, Socrates & crimes of ignorance (burning ants with a magnifying glass), all Five Stages of Problem Behavior (Admiration, Attention, Power Struggle, Revenge/stalking/wrist-cutting, Proof of Incompetence), why rebuke is low-cost violent communication, and natural/logical consequences.',
  },
};
