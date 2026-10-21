import { ChapterMastery } from '../../../types/book';

export const ctbdCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'The Third Night: Discard Other People’s Tasks',
  subtitle: 'Denying Recognition Cravings, Separation of Tasks, and Freedom as Being Disliked',
  readingTimeMinutes: 8,
  sourceWordCount: 9937,
  executiveThesis:
    'Living to satisfy other people’s expectations enslaves you to a reward-and-punishment mindset. Interpersonal friction dissolves when you practice the Separation of Tasks—identifying whose task an issue is by asking who ultimately receives the end result of the choice, refusing to intrude on others’ tasks or let them intrude on yours, and accepting that real freedom is the courage to be disliked.',
  paradigmShift: {
    oldWay:
      'Recognition Dependency & Enmeshed Meddling: Believing that personal worth requires praise from parents, bosses, and society, while forcibly intervening in the choices of family members "for their own good."',
    newWay:
      'Separation of Tasks & Sovereign Freedom: Rejecting the desire for recognition, drawing a strict boundary at "who bears the final consequence of the choice," and walking your own path even if others judge you negatively.',
    whyItChanged:
      'If you seek recognition, you spend your entire life living "other people’s lives" inside a reward-and-punishment cage, and when you trample on another person’s task, you rob them of self-reliance and trigger fierce rebellion.',
  },
  customDiagrams: [
    {
      id: 'ctbd-ch03-svg-01',
      title: 'The Deterministic Boundary of Separation of Tasks',
      subtitle: 'Applying the "Who receives the ultimate consequence?" test to cut the Gordian knot of interpersonal conflict',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">SEPARATION OF TASKS: THE CONSEQUENCE-OWNERSHIP ALGORITHM</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Rule: Who ultimately receives the end result brought about by the choice that is made?</text>

  <!-- Left Column: My Tasks -->
  <rect x="36" y="88" width="320" height="296" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2" />
  <text x="56" y="116" fill="#6ee7b7" font-size="13" font-weight="700">MY TASKS (100% MY SOVEREIGNTY)</text>
  <text x="56" y="136" fill="#94a3b8" font-size="11">I bear the final consequence of these choices:</text>

  <rect x="56" y="154" width="280" height="58" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="72" y="176" fill="#f8fafc" font-size="12" font-weight="600">1. How I Live &amp; Study / Work</text>
  <text x="72" y="194" fill="#94a3b8" font-size="11">Whether a child studies or I pursue my calling</text>

  <rect x="56" y="226" width="280" height="58" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="72" y="248" fill="#f8fafc" font-size="12" font-weight="600">2. Leading the Horse to Water</text>
  <text x="72" y="266" fill="#94a3b8" font-size="11">Offering ready assistance without coercion</text>

  <rect x="56" y="298" width="280" height="64" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="72" y="320" fill="#f8fafc" font-size="12" font-weight="600">3. My Own Sincerity &amp; Action</text>
  <text x="72" y="338" fill="#94a3b8" font-size="11">Acting according to my principles without</text>
  <text x="72" y="352" fill="#94a3b8" font-size="11">demanding a reward or return</text>

  <!-- Center Boundary Line: The Gordian Cut -->
  <line x1="400" y1="84" x2="400" y2="388" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6" />
  <rect x="364" y="210" width="72" height="48" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="374" y="231" fill="#fcd34d" font-size="10" font-weight="700">NO INTRUSION</text>
  <text x="373" y="247" fill="#fcd34d" font-size="10" font-weight="700">BOUNDARY</text>

  <!-- Right Column: Other People's Tasks -->
  <rect x="444" y="88" width="320" height="296" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="464" y="116" fill="#38bdf8" font-size="13" font-weight="700">OTHER PEOPLE'S TASKS (DISCARD)</text>
  <text x="464" y="136" fill="#94a3b8" font-size="11">They bear the final consequence of these choices:</text>

  <rect x="464" y="154" width="280" height="58" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="480" y="176" fill="#f8fafc" font-size="12" font-weight="600">1. How Others Judge or Dislike Me</text>
  <text x="480" y="194" fill="#94a3b8" font-size="11">Their opinion, gossip, or approval of my life</text>

  <rect x="464" y="226" width="280" height="58" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="480" y="248" fill="#f8fafc" font-size="12" font-weight="600">2. Whether the Horse Drinks</text>
  <text x="480" y="266" fill="#94a3b8" font-size="11">Whether the child studies or client changes</text>

  <rect x="464" y="298" width="280" height="64" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="480" y="320" fill="#f8fafc" font-size="12" font-weight="600">3. An Irrational Boss's Bad Mood</text>
  <text x="480" y="338" fill="#94a3b8" font-size="11">Their emotional regulation and inability to</text>
  <text x="480" y="352" fill="#94a3b8" font-size="11">cooperate rationally at work</text>
</svg>`,
      bierutCaption:
        'You can lead a horse to water (your task of assistance), but whether it drinks (the other person’s task of choice) lies across an inviolable sovereignty boundary.',
      annotations: [
        {
          step: '01',
          label: 'The Consequence Test',
          explanation:
            'If a child refuses to study, the child—not the parent—ultimately faces the academic and life outcome; studying is the child’s task.',
        },
        {
          step: '02',
          label: 'Non-Intrusion vs. Indifference',
          explanation:
            'Separating tasks is not cold neglect; parents and counsellors watch over the person and stay ready to assist when asked.',
        },
        {
          step: '03',
          label: 'Discarding Other People’s Judgments',
          explanation:
            'Whether someone likes or dislikes you is strictly their task, which you neither can nor should attempt to control.',
        },
      ],
    },
    {
      id: 'ctbd-ch03-svg-02',
      title: 'Kant’s Rolling Stone of Inclination vs. Sovereign Freedom',
      subtitle: 'Why craving recognition is rolling downhill with gravity, while true freedom requires pushing upward to be disliked',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">INCLINATION (RECOGNITION CRAVING) VS. FREEDOM (COURAGE TO BE DISLIKED)</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Freedom is not rolling downhill like a stone driven by desires, but arresting the roll yourself</text>

  <!-- Slope Triangle / Hill -->
  <polygon points="80,120 80,350 720,350" fill="#1e293b" stroke="#475569" stroke-width="1.5" />

  <!-- Downhill Path: Inclination / Desire for Recognition -->
  <path d="M 140 135 L 640 315" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="638,308 650,318 634,320" fill="#ef4444" />

  <circle cx="240" cy="171" r="22" fill="#0f172a" stroke="#ef4444" stroke-width="2" />
  <text x="232" y="176" fill="#fca5a5" font-size="11" font-weight="700">EGO</text>

  <rect x="300" y="96" width="440" height="96" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="318" y="122" fill="#fca5a5" font-size="13" font-weight="700">DOWNHILL ROLL: KANTIAN "INCLINATION" (UNFREE)</text>
  <text x="318" y="142" fill="#f8fafc" font-size="12">Driven by instinct, reward-and-punishment, and craving for praise.</text>
  <text x="318" y="162" fill="#94a3b8" font-size="11">• Appears self-centered ("Look at me!"), yet is 100% controlled by others.</text>
  <text x="318" y="178" fill="#94a3b8" font-size="11">• Holds the "Desire for Recognition" card: lives someone else's life.</text>

  <!-- Uphill Path: Sovereign Freedom -->
  <path d="M 600 330 L 180 180" stroke="#10b981" stroke-width="3" stroke-dasharray="6 4" />
  <polygon points="184,175 170,176 179,187" fill="#10b981" />

  <circle cx="420" cy="265" r="24" fill="#0f172a" stroke="#10b981" stroke-width="2.5" />
  <text x="404" y="269" fill="#6ee7b7" font-size="11" font-weight="700">FREE</text>

  <rect x="86" y="232" width="290" height="108" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="102" y="256" fill="#6ee7b7" font-size="12" font-weight="700">UPHILL CLIMB: REAL FREEDOM</text>
  <text x="102" y="276" fill="#e2e8f0" font-size="11">Arrests the rolling stone and pushes up.</text>
  <text x="102" y="294" fill="#94a3b8" font-size="11">• Holds the interpersonal cards yourself.</text>
  <text x="102" y="310" fill="#94a3b8" font-size="11">• Proof of freedom: Being disliked by some</text>
  <text x="102" y="324" fill="#94a3b8" font-size="11">  without sacrificing your principles.</text>

  <text x="36" y="390" fill="#fcd34d" font-size="12" font-weight="600">Maxim: "I am not living to satisfy your expectations, and you are not living to satisfy mine."</text>
</svg>`,
      bierutCaption:
        'A stone rolling down a slope under gravity and social praise has zero autonomy; true freedom begins the moment you arrest that downward inclination and accept being disliked.',
      annotations: [
        {
          step: '01',
          label: 'The Reward-and-Punishment Cage',
          explanation:
            'Seeking praise from parents or bosses trains you to act only when a reward is dangled, surrendering your agency.',
        },
        {
          step: '02',
          label: 'The Paradox of Recognition Egotism',
          explanation:
            'People who try to be liked by everyone look cooperative, but are actually deeply self-centered—concerned only with how they are seen.',
        },
        {
          step: '03',
          label: 'Holding the Interpersonal Cards',
          explanation:
            'When you change your own attitude without demanding that the other person change first, you hold all the cards of the relationship.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbd-ch03-mm-01',
      name: 'The Consequence-Ownership Litmus Test',
      tagline: 'To know whose task a choice is, ask who pays the final bill when the choice plays out.',
      naiveIntuition:
        'Parents are responsible for forcing their children to study because a child’s poor grades reflect badly on the parents.',
      firstPrinciplesReality:
        'If a child refuses to study and falls behind in school, the child—not the parent—ultimately lives with that outcome; therefore, studying is the child’s task, and parental coercion is an illegitimate territorial invasion.',
      howToApply:
        'Before intervening in any family or workplace dilemma, ask: "Who ultimately receives the end result of this choice?" If the answer is not you, step back to the boundary of ready assistance.',
    },
    {
      id: 'ctbd-ch03-mm-02',
      name: 'Holding the Interpersonal Cards',
      tagline: 'When you stop waiting for the other person to change, you take 100% control of the relationship.',
      naiveIntuition:
        'Reconciling with an estranged father requires convincing him to apologize and change his stubborn personality first.',
      firstPrinciplesReality:
        'As long as you think "I will change if he changes," the other person holds all the cards; the instant you resolve to change your own stance regardless of how he reacts, you hold the cards yourself.',
      howToApply:
        'In any deadlocked conflict, unilaterally alter your own communication and boundary posture today without requiring a reciprocal concession.',
    },
    {
      id: 'ctbd-ch03-mm-03',
      name: 'Being Disliked as the Meter of Freedom',
      tagline: 'Disapproval from others is not a failure of character; it is empirical proof that you are living freely.',
      naiveIntuition:
        'A truly good and successful person should be liked and approved of by everyone they meet.',
      firstPrinciplesReality:
        'Pleasing everyone requires making impossible promises and living inside other people’s expectations; therefore, having people who dislike you is the unmistakable proof that you are exercising your freedom and living by your own principles.',
      howToApply:
        'Stop deliberately provoking dislike, but stop fearing it: treat occasional disapproval as the natural tax paid for personal sovereignty.',
    },
  ],
  deepSections: [
    {
      id: 'ctbd-ch03-ds-01',
      sectionNumber: '3.1',
      title: 'Why Adlerian Psychology Categorically Denies the Desire for Recognition',
      subtitle: 'Escaping Reward-and-Punishment Education and Living Your Own Life',
      coreMechanism:
        'Why do people pick up trash only when someone is watching, or agonize over whether their parents and managers approve of their career choices? They are trapped in the aftermath of reward-and-punishment education. When children are raised to obey for praise and avoid scolding, they adopt a mercenary worldview: "If nobody praises me, I will not act; if nobody catches me, I will cheat." Adlerian psychology categorically denies the desire for recognition because seeking praise chains you to living other people’s lives.\n\nThe Philosopher summarizes this emancipation in the famous Jewish teaching: "If I am not for myself, who will be for me? And if I am only for myself, what am I?" You are not living to satisfy other people’s expectations, and other people are not living to satisfy yours. Waiting for external permission before acting surrenders your existential sovereignty.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Detect the Reward-and-Punishment Reflex',
          detail:
            'Notice whenever you feel resentful that a good deed went unnoticed or hesitate to act without guaranteed praise.',
        },
        {
          step: '02',
          title: 'Decouple Action from External Expectations',
          detail:
            'Remind yourself that fulfilling another person’s expectations is not the purpose of your existence.',
        },
        {
          step: '03',
          title: 'Act from Internal Conviction',
          detail:
            'Choose actions based on whether they align with your own principles and contribution, even if zero observers applaud.',
        },
      ],
      keyTakeaways: [
        'Wanting to be recognized by others seems natural only because society has indoctrinated us in reward-and-punishment conditioning.',
        'If you demand that others satisfy your expectations just as you bend to satisfy theirs, you turn every relationship into mutual bondage.',
        'A person obsessed with how others see them is not considerate of others; they are entirely self-centered.',
      ],
      commonPitfalls: [
        'Mistaking the rejection of recognition cravings for permission to act selfishly or harm others.',
        'Expecting praise after doing your normal share of household or team tasks.',
      ],
    },
    {
      id: 'ctbd-ch03-ds-02',
      sectionNumber: '3.2',
      title: 'The Separation of Tasks: Cutting the Gordian Knot',
      subtitle: 'Distinguishing Non-Interference from Cold Indifference',
      coreMechanism:
        'Every interpersonal entanglement—whether a parent screaming at a child to study, a family hovering over a shut-in, or an employee losing sleep over an irrational boss—stems from trampling on other people’s tasks or allowing them to trample on yours. Adlerian psychology resolves this with a simple deterministic rule: ask "Who ultimately receives the end result brought about by the choice that is made?" The person who bears the final consequence owns the task.\n\nWhen parents barge into a child’s task with "Study!"—even under the guise of "for your own good"—the child senses the intrusion and rebels. Conversely, separating tasks does not mean cold neglect: as the proverb states, "You can lead a horse to water, but you cannot make him drink." Leading the horse to water and communicating that you are ready to help at any time is your task; drinking is strictly the horse’s task.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Run the Consequence-Ownership Check',
          detail:
            'Ask who ultimately lives with the outcome of the decision (e.g., the child’s grades, the boss’s bad temper, the partner’s opinion).',
        },
        {
          step: '02',
          title: 'Draw the Sovereignty Boundary',
          detail:
            'Say firmly: "From here on, that is not my task," and refuse both to meddle in their territory and to let them dictate yours.',
        },
        {
          step: '03',
          title: 'Maintain Warm, Non-Coercive Readiness',
          detail:
            'Communicate clearly that you are standing by to assist whenever the other person chooses to ask for help on their own terms.',
        },
      ],
      formulas: [
        {
          name: 'Task Ownership & Boundary Function',
          expression:
            'Owner(Task_X) = argmax_Person(Final_Consequence(Choice_X))   |   Intrusion(A -> B) ==> Interpersonal_Friction',
          intuition:
            'Whoever bears the ultimate consequence of Choice X is the sole owner of Task X; any coercive cross-boundary write operation by another person triggers immediate interpersonal conflict.',
          variables: [
            {
              symbol: 'Choice_X',
              meaning: 'The behavioral decision at stake (studying, working, liking or disliking someone).',
            },
            {
              symbol: 'Final_Consequence(Choice_X)',
              meaning: 'The long-term real-world result produced by that decision.',
            },
            {
              symbol: 'Intrusion(A -> B)',
              meaning: 'Person A forcing a decision inside Person B’s task boundary.',
            },
          ],
          workedExample:
            'If an irrational boss shouts at you whenever you speak, his inability to regulate his mood is his task (Owner = Boss), while clearly stating your professional report without shrinking is your task (Owner = You).',
        },
      ],
      keyTakeaways: [
        'All interpersonal relationship trouble is caused by intruding on other people’s tasks or having your own tasks intruded upon.',
        'Cutting tangled relationships requires Alexander the Great’s sword—the Separation of Tasks—rather than endless emotional untangling.',
        'In counselling and parenting, you never force change; you build a relationship where the person can face their own task with courage.',
      ],
      commonPitfalls: [
        'Using "Wait until they ask" as an excuse for stony silence and neglect, rather than actively signaling warm readiness to help.',
        'Justifying boundary invasions in family relationships by claiming that parents and children share a single fused life.',
      ],
    },
    {
      id: 'ctbd-ch03-ds-03',
      sectionNumber: '3.3',
      title: 'Kant’s Inclination and Real Freedom as Being Disliked',
      subtitle: 'Arresting the Rolling Stone and Holding the Cards of Your Own Life',
      coreMechanism:
        'When we hear the word "freedom," we often imagine acting on impulse or rolling through life without friction. Immanuel Kant called this instinctual urge "inclination" (Neigung)—and argued that being driven by inclination is the exact opposite of freedom. A stone tumbling down a hill under gravity is not free; similarly, a human being tumbling down the slope of craving social approval and avoiding criticism is a slave to natural and social gravity.\n\nTrue freedom is the power to arrest that rolling stone yourself and push it uphill. Because how other people judge you is strictly their task, trying to engineer 100% approval is an impossible delusion that forces you to lie to yourself. Therefore, in Adlerian psychology, freedom is defined operationally as being disliked by other people: the willingness to pay the cost of someone’s disapproval so that you can steer your own life.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Recognize Downhill Inclination',
          detail:
            'Catch yourself when you are about to cave in to social pressure or flatter someone just to avoid friction.',
        },
        {
          step: '02',
          title: 'Surrender Control Over Others’ Verdicts',
          detail:
            'Accept that whether someone likes you, criticizes you, or resents your choice is 100% their task, not yours.',
        },
        {
          step: '03',
          title: 'Push the Stone Uphill',
          detail:
            'Take the principled action that belongs to your task, accepting the possibility of being disliked as the price of freedom.',
        },
      ],
      keyTakeaways: [
        'Being enslaved to the desire for recognition is rolling downhill like a stone; arresting that impulse is the birth of moral agency.',
        'The courage to be happy inevitably includes the courage to be disliked.',
        'When the Philosopher repaired his relationship with his estranged father (who had hit him as a child), he did so by realizing that he held all the cards to change the present relationship himself.',
      ],
      commonPitfalls: [
        'Misinterpreting "freedom is being disliked" as a license to act rudely or deliberately provoke hatred.',
        'Waiting for a difficult parent or partner to change first before changing how you show up in the relationship.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Interpersonal Stance Matrix: Meddling vs. Indifference vs. Separation of Tasks',
      description:
        'Comparing how three distinct boundary postures handle another person’s life choices and your own vulnerability to judgment.',
      headers: [
        'Dimension',
        'Enmeshed Meddling (Intrusion)',
        'Cold Indifference (Neglect)',
        'Separation of Tasks (Assistance)',
      ],
      rows: [
        [
          'Stance Toward Others’ Choices',
          'Coerces behavior ("You must study / obey!")',
          'Turns away completely ("Do whatever, I don’t care")',
          'Leads horse to water; lets them choose whether to drink',
        ],
        [
          'Stance Toward Others’ Opinions',
          'Craves recognition and panics at criticism',
          'Cynically isolates from all human bonds',
          'Treats others’ judgment as their task ("Courage to be disliked")',
        ],
        [
          'Who Holds the Relationship Cards?',
          'Neither; locked in mutual hostage-taking',
          'Nobody; relationship is severed',
          'You hold 100% of the cards for your own stance',
        ],
        [
          'Long-Term Outcome',
          'Rebellion, dependency, and resentment',
          'Alienation and loss of community',
          'Mutual self-reliance and unforced harmony',
        ],
      ],
      verdictRule:
        'Draw a hard boundary against coercing another person’s choices or begging for their approval, while keeping the door of voluntary assistance wide open.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbd-ch03-sc-01',
      title: 'The Micromanaging Engineering Manager Who Writes Direct Reports’ Code',
      roleAndContext:
        'An engineering manager is terrified that her team’s pull requests might receive critical comments from principal architects, so she rewrites her junior engineers’ code late every night.',
      symptomOrFailure:
        'Junior engineers stop learning and become passive ("clockwork dolls"), while the manager burns out chasing 100% praise from upper management.',
      naiveFixAndWhyItFails:
        'Hiring another senior reviewer to help rewrite the juniors’ code faster; this fails because it continues to trample on the junior engineers’ task of owning their code quality.',
      firstPrinciplesSolution:
        'Apply the Separation of Tasks: provide clear architectural documentation and pair-programming hours ("leading the horse to water"), then let junior engineers submit and defend their own PRs ("drinking the water"), while discarding her own craving for recognition from principal architects.',
      measurableOutcome:
        'Within six weeks, junior engineers take full ownership of pre-review testing, defect rates drop by 40%, and the manager reclaims 15 hours per week.',
    },
    {
      id: 'ctbd-ch03-sc-02',
      title: 'Handling an Irrational Executive Stakeholder Without Shrinking',
      roleAndContext:
        'A product lead avoids presenting realistic delivery timelines because the VP of Sales frequently scowls and snaps whenever a feature cannot ship immediately.',
      symptomOrFailure:
        'The product lead promises impossible dates to avoid being disliked in the meeting, causing catastrophic missed launches two months later.',
      naiveFixAndWhyItFails:
        'Trying to flatter the VP before meetings or waiting until the VP is in a good mood to bring up schedule risks; this fails because it leaves the VP holding all the cards.',
      firstPrinciplesSolution:
        'Separate the tasks: presenting accurate engineering capacity and trade-off options is the product lead’s task; how the VP regulates his emotional reaction is strictly the VP’s task. Present the honest timeline calmly, accepting the VP’s displeasure as the price of professional freedom.',
      measurableOutcome:
        'Predictable sprint delivery rises to 92%, and once the product lead stops flinching at scowls, the VP shifts from emotional intimidation to scope negotiation.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbd-ch03-q01',
        scenarioPrompt:
          'What is the single rule Adlerian psychology uses to determine whose task a given problem is?',
        options: [
          {
            label: 'A',
            text: 'Whoever has more life experience and authority owns the task.',
            isCorrect: false,
            explanation:
              'Age or rank never grants permission to annex another person’s task.',
          },
          {
            label: 'B',
            text: 'Ask: "Who ultimately receives the end result brought about by the choice that is made?"',
            isCorrect: true,
            explanation:
              'Task ownership belongs strictly to the person who bears the final consequence of the decision.',
          },
          {
            label: 'C',
            text: 'Whoever worries more emotionally about the issue owns the task.',
            isCorrect: false,
            explanation:
              'Anxious parents often worry more than their children, which is precisely how they intrude on the child’s task.',
          },
          {
            label: 'D',
            text: 'In a family, all tasks are shared 50/50 between parents and children.',
            isCorrect: false,
            explanation:
              'Even between parents and children, tasks must be clearly separated using the consequence rule.',
          },
        ],
      },
      {
        id: 'ctbd-ch03-q02',
        scenarioPrompt:
          'Why does the Philosopher state that a person who tries desperately to be liked by everyone is actually living an "extremely self-centered" lifestyle?',
        options: [
          {
            label: 'A',
            text: 'Because they secretly plan to betray everyone once they gain power.',
            isCorrect: false,
            explanation:
              'Their motive is defensive self-protection, not Machiavellian betrayal.',
          },
          {
            label: 'B',
            text: 'Because they are not actually interested in other people; their sole concern is "how I am seen by others" to protect their own ego.',
            isCorrect: true,
            explanation:
              'Craving universal recognition looks cooperative on the surface, but its gaze is pointed 100% inward at the "Me."',
          },
          {
            label: 'C',
            text: 'Because Adlerian psychology opposes all forms of politeness.',
            isCorrect: false,
            explanation:
              'Adlerian psychology values respect and courtesy, while rejecting subservience to recognition cravings.',
          },
          {
            label: 'D',
            text: 'Because only solitary hermits can be truly unselfish.',
            isCorrect: false,
            explanation:
              'True unselfishness happens inside community relationships when one shifts from recognition to contribution.',
          },
        ],
      },
      {
        id: 'ctbd-ch03-q03',
        scenarioPrompt:
          'When the Youth argues that his estranged relationship with his father can only improve if his father softens first, how does the Philosopher respond?',
        options: [
          {
            label: 'A',
            text: 'He agrees that the parent bears the primary duty to apologize first.',
            isCorrect: false,
            explanation:
              'Waiting for the father to apologize leaves the Youth powerless and stuck in etiology.',
          },
          {
            label: 'B',
            text: 'He explains that the person who resolves to change the relationship—without waiting for the other party—holds all the interpersonal cards.',
            isCorrect: true,
            explanation:
              'You do not change in order to manipulate your father into changing; you change your own stance unconditionally, which puts all the cards in your own hand.',
          },
          {
            label: 'C',
            text: 'He advises cutting off all family ties permanently.',
            isCorrect: false,
            explanation:
              'Severing ties to avoid a difficult relationship is fleeing the task rather than resolving it.',
          },
          {
            label: 'D',
            text: 'He suggests hiring a mediator to force the father to admit his past mistakes.',
            isCorrect: false,
            explanation:
              'Forcing another person to change violates the Separation of Tasks.',
          },
        ],
      },
      {
        id: 'ctbd-ch03-q04',
        scenarioPrompt:
          'How does the Philosopher use Immanuel Kant’s concept of "inclination" to define true human freedom?',
        options: [
          {
            label: 'A',
            text: 'Freedom means following your natural inclinations and desires without social rules.',
            isCorrect: false,
            explanation:
              'Following instinctual inclination is rolling downhill like a stone—enslaved to gravity and impulse.',
          },
          {
            label: 'B',
            text: 'Craving recognition is a natural inclination like a stone rolling downhill; true freedom is arresting that roll yourself and accepting being disliked by others.',
            isCorrect: true,
            explanation:
              'Pushing oneself uphill against the gravitational pull of approval-seeking is real autonomy, and being disliked by some people is the proof that you are exercising that freedom.',
          },
          {
            label: 'C',
            text: 'Freedom is achieved only when you intentionally make everyone hate you.',
            isCorrect: false,
            explanation:
              'The Philosopher explicitly warns not to deliberately try to be disliked like a rebellious teenager, but simply not to fear being disliked.',
          },
          {
            label: 'D',
            text: 'Kant believed humans have zero free will.',
            isCorrect: false,
            explanation:
              'Kant championed autonomous moral will over passive inclination.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbd-ch03-fc-01',
        category: 'foundation',
        front: 'What is the root cause of the widespread human obsession with being praised and recognized?',
        back: 'Reward-and-punishment education, which trains people to believe they should only act if praised and that they have no worth unless validated from outside.',
        mentalHook: 'Praise-seeking is the hangover of childhood reward-and-punishment training.',
      },
      {
        id: 'ctbd-ch03-fc-02',
        category: 'architecture',
        front: 'How do you perform the "Separation of Tasks" in any interpersonal conflict?',
        back: 'Identify whose task it is by asking "Who ultimately receives the end result brought about by the choice that is made?" and refuse to intrude on tasks that are not yours.',
        mentalHook: 'Whoever pays the final bill owns the decision.',
      },
      {
        id: 'ctbd-ch03-fc-03',
        category: 'evaluation',
        front: 'How does the proverb "You can lead a horse to water, but you cannot make him drink" illustrate Adlerian counselling and parenting?',
        back: 'Leading the horse to water (providing warm support and resources) is the helper’s task; deciding whether to drink (studying or changing) is strictly the individual’s task.',
        mentalHook: 'Assistance leads to the water; intrusion forces the head into the trough.',
      },
      {
        id: 'ctbd-ch03-fc-04',
        category: 'security',
        front: 'Who holds the "cards" in a deadlocked interpersonal relationship?',
        back: 'The person who decides to change their own attitude right now without requiring the other person to change first.',
        mentalHook: 'Stop waiting for their move: you hold every card of your own stance.',
      },
      {
        id: 'ctbd-ch03-fc-05',
        category: 'adaptation',
        front: 'What did Kant mean by "inclination" (Neigung), and how does it apply to the desire for recognition?',
        back: 'Inclination is rolling downhill under instinctual or social gravity; craving recognition and wanting to be liked by everyone is a downhill inclination, not freedom.',
        mentalHook: 'A rolling stone obeys gravity; a free person pushes uphill.',
      },
      {
        id: 'ctbd-ch03-fc-06',
        category: 'optimization',
        front: 'What is Adlerian psychology’s operational definition of "freedom"?',
        back: 'Freedom is being disliked by other people—meaning you live according to your own principles without being held hostage by others’ evaluations.',
        mentalHook: 'Dislike is the receipt proving you bought your own freedom.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbd-ch03-feyn-01',
        conceptTitle: 'The Separation of Tasks & The Horse-to-Water Boundary',
        prompt:
          'Explain the "Separation of Tasks" to an anxious parent who checks their teenager’s homework portal every hour and fights with them nightly about studying.',
        rubricChecklist: [
          'States the consequence-ownership rule: who ultimately receives the end result of the choice?',
          'Demonstrates why studying belongs to the teenager’s task rather than the parent’s task.',
          'Explains why intruding on the teenager’s task ("Study!") provokes defensive rebellion rather than motivation.',
          'Distinguishes Separation of Tasks from cold indifference using the "lead a horse to water" model of ready assistance.',
        ],
        modelExplanation:
          'To untangle nightly homework battles, apply Adler’s Separation of Tasks: ask "Who ultimately receives the end result of whether the teenager studies?" The teenager—not you—will live with the academic outcome, so studying is strictly the teenager’s task. When you barge across that boundary by policing their portal every hour, they experience your meddling as an invasion of sovereignty and rebel. Separating tasks does not mean abandoning them: you still "lead the horse to water" by providing a quiet desk, books, and the clear message that you are always ready to help whenever they ask, while leaving the act of drinking in their hands.',
      },
      {
        id: 'ctbd-ch03-feyn-02',
        conceptTitle: 'Why Freedom Is Being Disliked',
        prompt:
          'Explain why Adlerian psychology denies the desire for recognition and defines true freedom as "being disliked by other people."',
        rubricChecklist: [
          'Connects the desire for recognition to reward-and-punishment conditioning ("living other people’s lives").',
          'Uses Kant’s metaphor of the stone rolling downhill ("inclination") to show why craving universal approval is unfree.',
          'Applies the Separation of Tasks to show that how others evaluate you is strictly their task, outside your control.',
          'Defines "freedom is being disliked" not as intentionally offending people, but as refusing to sacrifice your principles to buy everyone’s approval.',
        ],
        modelExplanation:
          'When you live for praise and recognition, you are trapped in childhood reward-and-punishment conditioning—forever living someone else’s script. Like a stone tumbling down a hill under gravity (what Kant called "inclination"), craving everyone’s approval has zero freedom in it. By the Separation of Tasks, how other people judge you is their task, not yours. Therefore, true freedom means arresting that downward roll and walking your own path; if someone dislikes you as a result, that disapproval is the empirical proof that you are living as a free human being.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbd-n-recognition-denial',
        label: 'Denial of Recognition Desire',
        category: 'foundation',
        chapterNumber: 3,
        importance: 1,
        definition:
          'Rejecting the reward-and-punishment conditioning that makes individuals act only for external praise and approval.',
        formulaOrRule: 'My_Life !== Satisfying(Others_Expectations)',
        whyItMatters:
          'Frees the individual from living "other people’s lives" as a people-pleasing marionette.',
      },
      {
        id: 'ctbd-n-separation-of-tasks',
        label: 'Separation of Tasks',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The boundary discipline of sorting every issue into "my task" or "another’s task" based on who ultimately bears the final consequence of the choice.',
        formulaOrRule: 'Task_Owner = Bearer_of(Final_Consequence)',
        whyItMatters:
          'Cuts the Gordian knot of interpersonal conflict by halting mutual territorial intrusion.',
      },
      {
        id: 'ctbd-n-ready-assistance',
        label: 'Non-Coercive Assistance (Horse to Water)',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Watching over others warmly and offering support when requested, without forcing them to act.',
        formulaOrRule: 'Lead_to_Water(My_Task) + Drink(Their_Task)',
        whyItMatters:
          'Prevents Separation of Tasks from degenerating into cold indifference or neglect.',
      },
      {
        id: 'ctbd-n-holding-cards',
        label: 'Unilateral Relationship Agency',
        category: 'optimization',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Taking 100% ownership of changing one’s own stance in a relationship without demanding that the other party change first.',
        formulaOrRule: 'Cards_Held = Unconditional_Self_Change(Now)',
        whyItMatters:
          'Breaks interpersonal stalemates immediately without violating the other person’s task boundary.',
      },
      {
        id: 'ctbd-n-kantian-inclination',
        label: 'Kantian Inclination (Rolling Stone)',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 3,
        definition:
          'Passive submission to instinctual desires and social approval gravity, mistaken for personal choice.',
        formulaOrRule: 'Inclination = Passive_Downhill_Roll(Approval_Gravity)',
        whyItMatters:
          'Exposes why people-pleasing and impulsive egoism are both forms of unfreedom.',
      },
      {
        id: 'ctbd-n-freedom-disliked',
        label: 'Freedom as Being Disliked',
        category: 'security',
        chapterNumber: 3,
        importance: 1,
        definition:
          'The operational definition of human autonomy: arresting the downhill roll of recognition-seeking and accepting disapproval as the natural cost of self-direction.',
        formulaOrRule: 'Freedom == Courage_to_Be_Disliked',
        whyItMatters:
          'Provides the decisive psychological armor needed to live by one’s own principles.',
      },
    ],
    edges: [
      {
        source: 'ctbd-n-separation-of-tasks',
        target: 'ctbd-n-recognition-denial',
        relationship: 'prerequisite_for',
        explanation:
          'Recognizing that other people’s judgments belong to their task allows you to discard the craving for recognition.',
      },
      {
        source: 'ctbd-n-separation-of-tasks',
        target: 'ctbd-n-ready-assistance',
        relationship: 'part_of',
        explanation:
          'True Separation of Tasks pairs non-intrusion on the choice ("drinking") with warm readiness to assist ("leading to water").',
      },
      {
        source: 'ctbd-n-separation-of-tasks',
        target: 'ctbd-n-holding-cards',
        relationship: 'optimizes',
        explanation:
          'By focusing exclusively on your own task in a conflict, you hold all the cards of your own response.',
      },
      {
        source: 'ctbd-n-freedom-disliked',
        target: 'ctbd-n-kantian-inclination',
        relationship: 'mitigates',
        explanation:
          'Exercising the courage to be disliked arrests the downward gravitational roll of approval-seeking inclination.',
      },
      {
        source: 'ctbd-n-recognition-denial',
        target: 'ctbd-n-freedom-disliked',
        relationship: 'prerequisite_for',
        explanation:
          'You can only experience real freedom once you renounce the demand to be universally praised.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 12,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 12 dialogue segments of The Third Night: denying recognition desire, reward-and-punishment conditioning, Separation of Tasks consequence rule, child studying, lead a horse to water, Alexander’s Gordian knot, Philosopher’s father and holding the cards, Kant’s inclination, and freedom as being disliked.',
  },
};

export const ctbdCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'The Fourth Night: Where the Center of the World Is',
  subtitle: 'Community Feeling (Gemeinschaftsgefühl), Horizontal Encouragement, and Worth on the Level of Being',
  readingTimeMinutes: 9,
  sourceWordCount: 10766,
  executiveThesis:
    'The Separation of Tasks is not the final destination of interpersonal relationships, but the doorway to Community Feeling (Gemeinschaftsgefühl)—shifting from self-attachment ("What will this person give me?") to concern for others ("What can I give to this person?"). On this horizontal plane, both praise and rebuke are rejected as vertical manipulation, replaced by gratitude-based encouragement that values human beings on the "level of being" rather than the "level of acts."',
  paradigmShift: {
    oldWay:
      'Flat-Map Egocentrism & Vertical Praise/Rebuke: Treating yourself as the center of a flat map where others exist to satisfy your expectations, while manipulating subordinates or children through top-down praise and scolding.',
    newWay:
      '3D Globe Community Membership & Horizontal Gratitude: Viewing yourself as one equal member on a spherical globe encompassing cosmic communities, expressing horizontal gratitude ("Thank you"), and valuing others simply for existing ("level of being").',
    whyItChanged:
      'Vertical praise ("Good job!") subtly judges another person from above as less capable and breeds recognition dependency, whereas horizontal gratitude ("That was a big help") awakens genuine self-worth ("I have the ability to contribute").',
  },
  customDiagrams: [
    {
      id: 'ctbd-ch04-svg-01',
      title: 'The Flat Map Center vs. The 3D Globe & Concentric Communities',
      subtitle: 'Moving from "prince of the world" self-attachment to listening to the voice of the larger community',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">WHERE THE CENTER OF THE WORLD IS: FLAT MAP VS. CONCENTRIC GLOBE</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Shifting from "What will this person give me?" to "Listen to the voice of a larger community"</text>

  <!-- Left Box: Flat Map Self-Attachment -->
  <rect x="36" y="88" width="320" height="296" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="56" y="114" fill="#fca5a5" font-size="13" font-weight="700">1. FLAT MAP: SELF-ATTACHMENT</text>
  <text x="56" y="134" fill="#94a3b8" font-size="11">"I am the center; others exist to serve me."</text>

  <rect x="76" y="156" width="240" height="110" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <circle cx="196" cy="211" r="24" fill="#ef4444" opacity="0.25" />
  <circle cx="196" cy="211" r="8" fill="#ef4444" />
  <text x="168" y="196" fill="#f8fafc" font-size="11" font-weight="700">THE "I" KING</text>
  <text x="92" y="246" fill="#94a3b8" font-size="10">Storm in a Teacup (School / Office)</text>

  <text x="56" y="294" fill="#e2e8f0" font-size="11">• Question: "What will this person give me?"</text>
  <text x="56" y="314" fill="#e2e8f0" font-size="11">• Trap: If rejected inside school or company,</text>
  <text x="56" y="332" fill="#e2e8f0" font-size="11">  feels the entire universe has collapsed.</text>
  <text x="56" y="352" fill="#fca5a5" font-size="11">• Loses sense of belonging swiftly.</text>

  <!-- Arrow Between Models -->
  <path d="M 356 236 L 424 236" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="424,230 436,236 424,242" fill="#38bdf8" />
  <text x="366" y="222" fill="#38bdf8" font-size="10" font-weight="700">COMMIT</text>

  <!-- Right Box: 3D Globe & Concentric Communities -->
  <rect x="436" y="88" width="328" height="296" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="456" y="114" fill="#6ee7b7" font-size="13" font-weight="700">2. 3D GLOBE: COMMUNITY FEELING</text>
  <text x="456" y="134" fill="#94a3b8" font-size="11">Every point on a sphere is a member, never the boss</text>

  <!-- Concentric Rings -->
  <circle cx="600" cy="222" r="72" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3" />
  <circle cx="600" cy="222" r="48" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <circle cx="600" cy="222" r="24" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="577" y="226" fill="#fcd34d" font-size="10" font-weight="700">You + Me</text>
  <text x="564" y="186" fill="#6ee7b7" font-size="9">Society / Nation</text>
  <text x="546" y="162" fill="#38bdf8" font-size="9">Universe: Past/Future/Life</text>

  <text x="456" y="316" fill="#e2e8f0" font-size="11">• Question: "What can I give to this person?"</text>
  <text x="456" y="336" fill="#e2e8f0" font-size="11">• Escape valve: When a small group turns toxic,</text>
  <text x="456" y="354" fill="#6ee7b7" font-size="11">  step out into the larger human community.</text>
</svg>`,
      bierutCaption:
        'On a flat map one person sits at the privileged center, but on a three-dimensional globe every individual is a constituent part of nested communities stretching from a two-person bond to the entire universe.',
      annotations: [
        {
          step: '01',
          label: 'From Self-Attachment to Concern for Others',
          explanation:
            'Self-centered people treat others as instruments to serve their expectations ("What will they give me?"), guaranteeing disappointment.',
        },
        {
          step: '02',
          label: 'The Two-Person Starting Unit',
          explanation:
            'Even though Community Feeling spans humanity, past and future, and non-living nature, it always begins practically with "you and me."',
        },
        {
          step: '03',
          label: 'Escaping the "Storm in a Teacup"',
          explanation:
            'When a school or company becomes oppressive, remembering your membership in the larger community breaks the illusion that there is nowhere else to go.',
        },
      ],
    },
    {
      id: 'ctbd-ch04-svg-02',
      title: 'Vertical Praise ("Level of Acts") vs. Horizontal Encouragement ("Level of Being")',
      subtitle: 'Why Adlerian psychology forbids praising or scolding and replaces both with gratitude and existential worth',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">VERTICAL PRAISE (MANIPULATION) VS. HORIZONTAL ENCOURAGEMENT (GRATITUDE)</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Judging others on the "Level of Acts" (100 - X) vs. Valuing comrades on the "Level of Being" (0 + X)</text>

  <!-- Left Side: Vertical Praise & Rebuke -->
  <rect x="36" y="88" width="344" height="300" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="56" y="114" fill="#fca5a5" font-size="13" font-weight="700">VERTICAL: PRAISE &amp; REBUKE (FORBIDDEN)</text>
  <text x="56" y="134" fill="#94a3b8" font-size="11">Judgment passed by "person of ability" onto "inability"</text>

  <rect x="56" y="152" width="304" height="62" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="72" y="174" fill="#f8fafc" font-size="12" font-weight="600">Top-Down Evaluation ("Good job!")</text>
  <text x="72" y="194" fill="#94a3b8" font-size="11">Hidden goal: unconscious manipulation of a junior</text>

  <path d="M 208 214 L 208 236" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="56" y="236" width="304" height="62" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="72" y="258" fill="#f8fafc" font-size="12" font-weight="600">Judged on "Level of Acts" (Subtraction)</text>
  <text x="72" y="278" fill="#94a3b8" font-size="11">Starts at 100-pt ideal and deducts points for flaws</text>

  <rect x="56" y="312" width="304" height="56" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="72" y="334" fill="#fca5a5" font-size="12" font-weight="600">Result: Belief "I Have No Ability"</text>
  <text x="72" y="352" fill="#94a3b8" font-size="11">Becomes dependent on praise; stops acting if unseen</text>

  <!-- Right Side: Horizontal Encouragement -->
  <rect x="420" y="88" width="344" height="300" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="440" y="114" fill="#6ee7b7" font-size="13" font-weight="700">HORIZONTAL: ENCOURAGEMENT &amp; GRATITUDE</text>
  <text x="440" y="134" fill="#94a3b8" font-size="11">Equal-to-equal respect ("Thank you / I'm glad")</text>

  <rect x="440" y="152" width="304" height="62" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="456" y="174" fill="#f8fafc" font-size="12" font-weight="600">Pure Gratitude ("That was a big help!")</text>
  <text x="456" y="194" fill="#94a3b8" font-size="11">Zero judgment; expresses honest joy as a comrade</text>

  <path d="M 592 214 L 592 236" stroke="#10b981" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="440" y="236" width="304" height="62" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="456" y="258" fill="#38bdf8" font-size="12" font-weight="600">Valued on "Level of Being" (Addition)</text>
  <text x="456" y="278" fill="#94a3b8" font-size="11">Starts at 0; grateful simply that the person is alive</text>

  <rect x="440" y="312" width="304" height="56" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="456" y="334" fill="#6ee7b7" font-size="12" font-weight="600">Result: Self-Worth &amp; Courage</text>
  <text x="456" y="352" fill="#94a3b8" font-size="11">Hears "Thank you" -&gt; Knows "I can contribute"</text>
</svg>`,
      bierutCaption:
        'Praising someone ("Well done!") is a vertical judgment from an assumed superior that breeds dependency, whereas horizontal gratitude ("Thank you, that helped") affirms worth on the level of being.',
      annotations: [
        {
          step: '01',
          label: 'Why Praise Is Vertical Manipulation',
          explanation:
            'A husband never tells his wife "Good boy, well done!" for washing dishes; praise always implies a superior evaluating an inferior.',
        },
        {
          step: '02',
          label: 'Gratitude Awakens Contribution',
          explanation:
            'Hearing "Thank you" or "That was a big help" lets a person experience directly that they are beneficial to the community.',
        },
        {
          step: '03',
          label: 'The ICU / Bedridden Grandfather Test',
          explanation:
            'If a loved one were in the ICU, you would feel grateful simply that they are alive—valuing them on the "level of being" rather than subtracting from a 100-point ideal.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbd-ch04-mm-01',
      name: 'The 3D Globe vs. Flat Map Worldview',
      tagline: 'You are the protagonist of your life, but an equal member—never the center—of the community.',
      naiveIntuition:
        'I am the center of the world, and if I am ostracized at school or my company, I have lost my entire place in existence.',
      firstPrinciplesReality:
        'Viewing yourself as the center treats the world like a flat map drawn around your ego; on a 3D globe, every coordinate can look like the center locally, yet all points are equal parts of nested communities stretching from family and workplace out to humanity and the cosmos.',
      howToApply:
        'Whenever conflict inside a tiny group (a "storm in a teacup") feels suffocating, obey the Adlerian rule: "Listen to the voice of a larger community" and step outside the teacup.',
    },
    {
      id: 'ctbd-ch04-mm-02',
      name: 'Horizontal Gratitude Over Vertical Praise',
      tagline: 'Never praise or scold an equal; express sincere gratitude ("Thank you") to build courage.',
      naiveIntuition:
        'Praising children and subordinates ("Good job! You’re so smart!") builds their self-confidence and motivates them.',
      firstPrinciplesReality:
        'Praise is a vertical evaluation passed by someone of ability onto someone of lesser ability with the hidden goal of manipulation; the more a person is praised, the more they form the belief that they have no ability and exist inside a hierarchy.',
      howToApply:
        'Replace evaluative adjectives ("Well done", "Impressive") with first-person horizontal expressions of joy and gratitude ("Thank you", "I am glad", "That was a big help").',
    },
    {
      id: 'ctbd-ch04-mm-03',
      name: 'Worth on the "Level of Being" (Zero-Base Addition)',
      tagline: 'Do not deduct points from a 100-point ideal; celebrate another person’s existence starting from zero.',
      naiveIntuition:
        'A person’s worth to their family or community depends on what they do—their income, chores, grades, and productivity.',
      firstPrinciplesReality:
        'A bedridden grandfather or a mother lying in the ICU does zero visible work, yet supports the family spiritually simply by being alive; judging people on the "level of acts" deducts from a 100-point ideal, whereas judging on the "level of being" starts from zero and adds gratitude for every breath.',
      howToApply:
        'Before criticizing a partner, child, or colleague for falling short of an ideal score, ask how you would view them if they were simply recovering from a life-threatening emergency.',
    },
  ],
  deepSections: [
    {
      id: 'ctbd-ch04-ds-01',
      sectionNumber: '4.1',
      title: 'Community Feeling (Gemeinschaftsgefühl) and the Center of the World',
      subtitle: 'Turning from Self-Attachment to Concern for Others Across Nested Communities',
      coreMechanism:
        'If the Separation of Tasks is the starting point of interpersonal relationships, its goal is what Adler called Gemeinschaftsgefühl—translated as "social interest" or "community feeling." When an individual views others as comrades rather than enemies, they find their "refuge" (a sense of belonging, or "It’s okay to be here"). Crucially, Adler’s "community" is not limited to households, schools, or corporations; it encompasses the entire sphere of humanity, past to future, and even plants, animals, and inanimate nature.\n\nPeople who lack a sense of belonging suffer from "self-attachment" (focused solely on "I"): they treat themselves as the center of a flat map and constantly ask, "What will this person give me?" Shifting to "concern for others" replaces that demand with an active commitment: "What can I give to this person?" Even when a small community like a school or workplace fractures in a "storm in a teacup," you always belong to a larger community.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Invert the Egocentric Question',
          detail:
            'Stop asking "What will this person give me?" and ask "What can I give to this person?"',
        },
        {
          step: '02',
          title: 'Build from the Minimum Unit ("You and Me")',
          detail:
            'Practice Community Feeling right now inside concrete two-person interactions rather than abstract idealism.',
        },
        {
          step: '03',
          title: 'Listen to the Voice of the Larger Community',
          detail:
            'If a local school, workplace, or clique becomes abusive or demands unethical conformity, step out into the wider human community.',
        },
      ],
      keyTakeaways: [
        'A sense of belonging is not something you are born with or passively handed; it must be acquired through your own active commitment to the community.',
        'You are a part of the community, not its center—just like any coordinate on the surface of a three-dimensional globe.',
        'When a teacher or manager faces a rebellion in their tiny classroom or office, judging the choice by the standards of the larger human community prevents petty tyranny.',
      ],
      commonPitfalls: [
        'Treating your current employer or school clique as the entire universe, which turns minor workplace friction into an existential crisis.',
        'Waiting for others to make you feel welcome before contributing to the group.',
      ],
    },
    {
      id: 'ctbd-ch04-ds-02',
      sectionNumber: '4.2',
      title: 'Why Neither Praise Nor Rebuke Should Be Used',
      subtitle: 'Exposing Praise as Vertical Manipulation inside Horizontal Relationships',
      coreMechanism:
        'Adlerian psychology upholds a counterintuitive rule across parenting, education, and leadership: one must neither praise nor rebuke. Why is praising someone wrong? Consider what happens when a mother praises her child with "What a good boy for helping prepare dinner!" Yet if her husband does the exact same thing, she would never pat his head and say, "What a good boy!" When a person praises another, it is structurally a judgment passed by a person of ability onto a person of inability.\n\nFurthermore, the hidden goal behind praising a child, student, or subordinate is unconscious manipulation—steering them from above like a trained animal. If you build vertical relationships anywhere in your life, that verticality infects every other bond you have. In a truly horizontal relationship ("equal but not the same"), nobody stands above another to hand out grades or gold stars.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Audit the Hidden Manipulation in Praise',
          detail:
            'Recognize that saying "Good job, I’m impressed!" places you on a superior pedestal judging an inferior’s performance.',
        },
        {
          step: '02',
          title: 'Commit to Zero Vertical Relationships',
          detail:
            'Refuse to establish vertical hierarchies even with children, junior staff, or service workers.',
        },
        {
          step: '03',
          title: 'Replace Top-Down Evaluation with Horizontal Dialogue',
          detail:
            'Speak to every person—regardless of age or title—with the same horizontal respect you would show an equal adult friend.',
        },
      ],
      keyTakeaways: [
        'When one person praises another, the goal is to manipulate someone who has less ability than oneself; it is never done out of gratitude.',
        'People who want to praise others or want to be praised by others have adopted a strictly vertical way of looking at all human relationships.',
        'Being praised by others only reinforces the crippling belief that "I have no ability of my own."',
      ],
      commonPitfalls: [
        'Assuming that because rebuke is harmful, the opposite of rebuke must be lavish praise (reward-and-punishment conditioning).',
        'Believing you can maintain vertical boss-subordinate habits at work and magically switch to horizontal equality at home.',
      ],
    },
    {
      id: 'ctbd-ch04-ds-03',
      sectionNumber: '4.3',
      title: 'Encouragement via Gratitude and Worth on the Level of Being',
      subtitle: 'Moving from Subtraction on the Level of Acts to Addition on the Level of Being',
      coreMechanism:
        'If Adlerian psychology rejects both praise and rebuke, how does one practice "encouragement" (giving someone the courage to overcome their tasks)? The answer is horizontal encouragement anchored in gratitude, respect, and joy: saying "Thank you," "I’m glad," or "That was a big help." When a person hears sincere gratitude from an equal comrade, they experience autonomously—without top-down grading—that they have contributed to the community and possess genuine worth.\n\nHowever, waiting until someone performs a visible deed before valuing them still judges human beings on the "level of acts." Imagine a mother rushed to the ICU after an accident, or a frail, bedridden grandfather: nobody demands that they clean the house to earn their keep; their mere existence supports the family. We must stop judging others by subtracting from a 100-point ideal image, and instead celebrate them on the "level of being"—starting from zero and adding gratitude.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Anchor Worth on the Level of Being',
          detail:
            'Affirm the other person’s value simply for existing and being well in the present, prior to any task performance.',
        },
        {
          step: '02',
          title: 'Switch from Subtraction (100 - X) to Addition (0 + X)',
          detail:
            'Discard the 100-point ideal scorecard that deducts points for flaws, and build upward from a zero baseline.',
        },
        {
          step: '03',
          title: 'Express Horizontal Gratitude for Contributions',
          detail:
            'Whenever someone acts, convey honest first-person appreciation ("Thank you, that helped me") rather than evaluative praise.',
        },
      ],
      formulas: [
        {
          name: 'Subtractive Evaluation (Acts) vs. Additive Appreciation (Being)',
          expression:
            'Level_of_Acts_Score = 100(Ideal) - Flaws(X)   <==>   Level_of_Being_Worth = Base_Existence(>0) + Gratitude(Contributions)',
          intuition:
            'Scoring people against a 100-point ideal guarantees chronic dissatisfaction via point deductions, whereas valuing people on the level of being starts with existential gratitude and adds joy for every action.',
          variables: [
            {
              symbol: '100(Ideal)',
              meaning: 'An arbitrary fantasy benchmark imposed on a child, partner, or colleague.',
            },
            {
              symbol: 'Base_Existence(>0)',
              meaning: 'The intrinsic worth a person has simply by being alive (the ICU / bedridden elder insight).',
            },
            {
              symbol: 'Gratitude(Contributions)',
              meaning: 'Horizontal "Thank you" expressions that awaken the other person’s sense of self-worth.',
            },
          ],
          workedExample:
            'Instead of scoring a teenager 60/100 because they cleaned their dish but forgot to wipe the counter (subtraction on the level of acts), a parent values their presence at the table (level of being) and says, "Thank you for clearing the dish, that was a big help."',
        },
      ],
      keyTakeaways: [
        'A human being starts to feel they have worth only when they feel "I am beneficial to the community" through hearing sincere gratitude rather than praise.',
        'At the root of the words "Thank you" is a horizontal relationship of respect and joy, never a top-down evaluation.',
        'Judging others on the "level of being" means rejoicing simply that they exist here and now, without demanding conditions.',
      ],
      commonPitfalls: [
        'Saying "Thank you" as a scripted manipulation technique while still secretly grading the person in your head.',
        'Waiting for a family crisis or ICU emergency to stop deducting points from loved ones.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Interpersonal Feedback Architecture: Rebuke vs. Praise vs. Horizontal Encouragement',
      description:
        'Contrasting the structural axis, hidden psychological intent, and long-term effect on self-worth across three feedback modes.',
      headers: [
        'Dimension',
        'Vertical Rebuke (Scolding)',
        'Vertical Praise ("Good Job!")',
        'Horizontal Encouragement ("Thank You")',
      ],
      rows: [
        [
          'Relational Axis',
          'Vertical top-down domination',
          'Vertical top-down evaluation',
          'Horizontal comrade-to-comrade equality',
        ],
        [
          'Hidden Goal',
          'Force immediate submission via fear',
          'Manipulate junior via reward dependency',
          'Express authentic joy & assist self-reliance',
        ],
        [
          'Evaluation Basis',
          'Level of Acts (Subtracting from 100)',
          'Level of Acts (Conditional gold star)',
          'Level of Being + Additive Gratitude (0 + X)',
        ],
        [
          'Psychological Effect',
          'Resentment, power struggle, or withdrawal',
          'Belief "I have no ability; I need approval"',
          'Belief "I can contribute; I have worth"',
        ],
      ],
      verdictRule:
        'Eliminate all evaluative grading ("Well done", "Impressive") when speaking to peers, reports, or children; replace every instance with first-person horizontal gratitude ("Thank you, that helped").',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbd-ch04-sc-01',
      title: 'Replacing Patronizing Praise with Horizontal Gratitude in Engineering Culture',
      roleAndContext:
        'A newly promoted engineering director habitually replies to senior engineers’ design docs with "Good job, gold star! Very clever work!" as if grading student homework.',
      symptomOrFailure:
        'Senior engineers feel patronized by the vertical evaluation, while junior engineers start optimizing exclusively for whatever earns the director’s praise rather than solving real customer bottlenecks.',
      naiveFixAndWhyItFails:
        'Creating a formal "Engineer of the Month" leaderboard to distribute even more public praise; this fails because it institutionalizes vertical competition and reward-and-punishment conditioning.',
      firstPrinciplesSolution:
        'Replace top-down evaluative praise with horizontal encouragement grounded in concrete contribution: "Thank you for mapping the failover states in Section 3—that unblocked our SRE runbook and was a huge help to the team."',
      measurableOutcome:
        'Engineers shift from seeking managerial gold stars to autonomously helping peers across teams, increasing cross-team unblocking commits by 55%.',
    },
    {
      id: 'ctbd-ch04-sc-02',
      title: 'Escaping a Toxic Startup "Storm in a Teacup" via the Larger Community',
      roleAndContext:
        'A lead designer works at a hyper-insular startup where the founder publicly shames anyone who does not answer Slack messages at 2:00 AM.',
      symptomOrFailure:
        'Believing this company is the entire center of her professional world, the designer suffers severe insomnia and feels she has no worth if the founder is displeased.',
      naiveFixAndWhyItFails:
        'Working even later hours to win back the founder’s approval; this fails because it stays trapped inside the flat-map teacup and validates vertical manipulation.',
      firstPrinciplesSolution:
        'Apply the "Listen to the voice of a larger community" rule: step outside the startup’s teacup by contributing to open-source design systems and industry guilds, recognizing that the founder’s abusive norms violate the common sense of the broader human and engineering community.',
      measurableOutcome:
        'Anchored in the wider professional community, the designer calmly enforces healthy hours and transitions within 30 days to a high-trust organization.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbd-ch04-q01',
        scenarioPrompt:
          'How does the Philosopher define the shift from "self-attachment" to "concern for others" at the heart of Community Feeling?',
        options: [
          {
            label: 'A',
            text: 'Sacrificing 100% of your own desires to obey whatever the group demands.',
            isCorrect: false,
            explanation:
              'Self-sacrifice to appease others is recognition-seeking, not Adlerian Community Feeling.',
          },
          {
            label: 'B',
            text: 'Replacing the egocentric question "What will this person give me?" with the active commitment "What can I give to this person?"',
            isCorrect: true,
            explanation:
              'Self-attachment treats oneself as the flat-map king waiting to be served, whereas concern for others commits actively to contributing to comrades.',
          },
          {
            label: 'C',
            text: 'Joining as many clubs and social media groups as possible.',
            isCorrect: false,
            explanation:
              'Belonging is built starting from the two-person unit ("you and me") through deep horizontal commitment, not superficial group counts.',
          },
          {
            label: 'D',
            text: 'Ignoring individual people and focusing only on abstract global charities.',
            isCorrect: false,
            explanation:
              'Community Feeling always starts with the concrete "you and me" right in front of you.',
          },
        ],
      },
      {
        id: 'ctbd-ch04-q02',
        scenarioPrompt:
          'Why does Adlerian psychology strictly oppose praising children, students, or subordinates?',
        options: [
          {
            label: 'A',
            text: 'Because praise is a vertical judgment passed by a person of ability onto a person of lesser ability with the hidden goal of manipulation, which breeds the belief "I have no ability."',
            isCorrect: true,
            explanation:
              'Praise establishes a vertical hierarchy and trains the recipient to depend on external approval rather than experiencing intrinsic contribution.',
          },
          {
            label: 'B',
            text: 'Because harsh scolding is more effective at building toughness.',
            isCorrect: false,
            explanation:
              'Adlerian psychology rejects both rebuke and praise.',
          },
          {
            label: 'C',
            text: 'Because children become arrogant and stop obeying their parents if praised.',
            isCorrect: false,
            explanation:
              'The problem is not that children fail to obey, but that praise manipulates them into dependent obedience.',
          },
          {
            label: 'D',
            text: 'Because words of appreciation should never be spoken aloud.',
            isCorrect: false,
            explanation:
              'Adlerian psychology strongly champions speaking horizontal words of gratitude ("Thank you", "That was a big help").',
          },
        ],
      },
      {
        id: 'ctbd-ch04-q03',
        scenarioPrompt:
          'When a person feels trapped and ostracized inside their school or workplace, what counsel does the Philosopher give?',
        options: [
          {
            label: 'A',
            text: 'Endure the abuse silently because leaving a community violates social harmony.',
            isCorrect: false,
            explanation:
              'The Philosopher explicitly states that one does not have to stay trapped inside a toxic micro-community.',
          },
          {
            label: 'B',
            text: '"Listen to the voice of a larger community"—recognize that the school or company is just a "storm in a teacup" and step out into the wider world.',
            isCorrect: true,
            explanation:
              'Because we belong to nested communities extending out to humanity and the cosmos, no single school or company defines the whole world.',
          },
          {
            label: 'C',
            text: 'Launch a power struggle to overthrow the leader of the group.',
            isCorrect: false,
            explanation:
              'Entering a power struggle keeps you locked on the vertical axis of competition inside the teacup.',
          },
          {
            label: 'D',
            text: 'Retreat into solitary isolation and avoid all communities.',
            isCorrect: false,
            explanation:
              'Humans cannot live outside all community; the solution is connecting with the larger community.',
          },
        ],
      },
      {
        id: 'ctbd-ch04-q04',
        scenarioPrompt:
          'What does it mean to look at another person on the "level of being" rather than the "level of acts"?',
        options: [
          {
            label: 'A',
            text: 'Evaluating them against a 100-point ideal and deducting points only for major mistakes.',
            isCorrect: false,
            explanation:
              'Any subtraction from an ideal image is still judging on the level of acts.',
          },
          {
            label: 'B',
            text: 'Feeling grateful simply that the person exists and is alive right now (like a loved one in the ICU), starting from zero and adding appreciation.',
            isCorrect: true,
            explanation:
              'Judging on the level of being values a person’s very existence prior to any deeds they perform, creating the foundation for horizontal encouragement.',
          },
          {
            label: 'C',
            text: 'Pretending that a person’s harmful actions never happened.',
            isCorrect: false,
            explanation:
              'Valuing someone on the level of being does not ignore reality; it separates their human worth from conditional task scoring.',
          },
          {
            label: 'D',
            text: 'Only valuing people after they retire from active work.',
            isCorrect: false,
            explanation:
              'The bedridden grandfather and ICU examples illustrate a universal principle applicable to children, partners, and peers every day.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbd-ch04-fc-01',
        category: 'foundation',
        front: 'What is the ultimate goal of interpersonal relationships in Adlerian psychology?',
        back: 'Community Feeling (Gemeinschaftsgefühl)—seeing others as comrades and finding one’s "refuge" (sense of belonging) by actively contributing to the community.',
        mentalHook: 'Separation of Tasks is the doorway; Community Feeling is the home.',
      },
      {
        id: 'ctbd-ch04-fc-02',
        category: 'architecture',
        front: 'How big is the "community" in Adler’s concept of Community Feeling?',
        back: 'It starts with the smallest unit ("you and me") and expands without limit to include all humanity, past and future generations, plants, animals, and inanimate nature.',
        mentalHook: 'From "you and me" all the way to the universe across time.',
      },
      {
        id: 'ctbd-ch04-fc-03',
        category: 'evaluation',
        front: 'What question distinguishes "self-attachment" from "concern for others"?',
        back: 'Self-attachment asks "What will this person give me?" whereas concern for others asks "What can I give to this person?"',
        mentalHook: 'Stop auditing what you receive; start authoring what you give.',
      },
      {
        id: 'ctbd-ch04-fc-04',
        category: 'security',
        front: 'Why is praising someone ("Good job!") incompatible with horizontal relationships?',
        back: 'Because praise is a top-down evaluation from a person of ability onto a person of lesser ability, aimed at unconscious manipulation.',
        mentalHook: 'You never pat an equal comrade on the head and say "Good boy!"',
      },
      {
        id: 'ctbd-ch04-fc-05',
        category: 'optimization',
        front: 'How do you practice Adlerian "encouragement" without praising?',
        back: 'By expressing horizontal gratitude, respect, and joy as an equal: "Thank you," "I’m glad," or "That was a big help."',
        mentalHook: 'Praise grades from above; gratitude thanks from beside.',
      },
      {
        id: 'ctbd-ch04-fc-06',
        category: 'adaptation',
        front: 'What is the difference between judging on the "level of acts" vs. the "level of being"?',
        back: 'The level of acts deducts points from a 100-point ideal based on what someone does; the level of being starts at zero and feels grateful simply that the person exists.',
        mentalHook: 'Stop subtracting from 100; start adding from 0 (the ICU perspective).',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbd-ch04-feyn-01',
        conceptTitle: 'Why Praise Is Vertical Manipulation vs. Horizontal Gratitude',
        prompt:
          'Explain to a manager or parent who believes in "positive reinforcement via constant praise" why Adlerian psychology forbids praise and what should replace it.',
        rubricChecklist: [
          'Uses the husband washing dishes analogy ("You wouldn’t say: What a good boy!") to expose praise as a vertical judgment from superior to inferior.',
          'Identifies the hidden purpose of praise: unconscious manipulation to make the recipient obey.',
          'Explains why being praised instills the belief "I have no ability" and traps the person in vertical relationships.',
          'Replaces praise with horizontal encouragement via gratitude ("Thank you", "That was a big help"), which lets the person autonomously feel their worth.',
        ],
        modelExplanation:
          'When a wife thanks her husband for doing the dishes, she never pats his head and says, "What a good boy, well done!"—because they are equals. Praise is always a top-down judgment passed by someone of higher ability onto someone of lower ability with the unconscious goal of manipulating them. The more you praise a child or team member, the more they internalize the belief that they sit below you and have no ability unless validated from above. Instead, speak horizontally as an equal comrade: say "Thank you, that was a big help." Hearing sincere gratitude lets the other person realize on their own that they have the power to contribute.',
      },
      {
        id: 'ctbd-ch04-feyn-02',
        conceptTitle: 'The 3D Globe & Worth on the Level of Being',
        prompt:
          'Explain how the 3D Globe metaphor and judging on the "level of being" cure a person who feels worthless when criticized at work or home.',
        rubricChecklist: [
          'Contrasts the flat-map illusion (being the privileged center) with the 3D globe (being an equal member of nested communities).',
          'Explains the "storm in a teacup" escape: listening to the voice of a larger community when a small group turns toxic.',
          'Contrasts subtracting from a 100-point ideal ("level of acts") with starting from zero ("level of being").',
          'Uses the ICU / bedridden grandfather example to show that human worth exists simply by being alive.',
        ],
        modelExplanation:
          'When you treat your workplace or household as a flat map with yourself at the center, any criticism feels like the collapse of your entire world. In reality, you stand on a 3D globe as an equal member of concentric communities stretching from "you and me" out to humanity and the cosmos—so friction at work is just a storm in a teacup. Furthermore, your worth never depends on scoring 100/100 on the "level of acts." Just as a family feels grateful simply that a mother in the ICU or a bedridden grandfather is alive, human beings have intrinsic worth on the "level of being" starting from zero.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbd-n-community-feeling',
        label: 'Community Feeling (Gemeinschaftsgefühl)',
        category: 'foundation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Seeing others as comrades and experiencing a sense of belonging ("refuge") by turning from self-attachment to active concern for others.',
        formulaOrRule: 'Shift: "What will they give me?" -> "What can I give?"',
        whyItMatters:
          'Serves as the ultimate destination of Adlerian psychology and the cure for interpersonal alienation.',
      },
      {
        id: 'ctbd-n-3d-globe',
        label: '3D Globe & Larger Community',
        category: 'architecture',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Recognizing oneself as an equal member (not the flat-map center) of nested communities extending from two people to the entire universe.',
        formulaOrRule: 'Community = {You_and_Me subset Society subset Humanity subset Cosmos}',
        whyItMatters:
          'Allows individuals to escape local "storms in a teacup" by listening to the voice of a larger community.',
      },
      {
        id: 'ctbd-n-vertical-praise',
        label: 'Vertical Praise & Rebuke Trap',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Top-down evaluative judgments ("Good job!" or scolding) passed by an assumed superior to manipulate a subordinate.',
        formulaOrRule: 'Praise == Vertical_Manipulation -> Belief("I_Have_No_Ability")',
        whyItMatters:
          'Exposes why conventional positive reinforcement destroys horizontal relationships and breeds dependency.',
      },
      {
        id: 'ctbd-n-horizontal-encouragement',
        label: 'Horizontal Encouragement (Gratitude)',
        category: 'optimization',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Expressing equal-to-equal gratitude, respect, and joy ("Thank you", "That was a big help") without grading or judging.',
        formulaOrRule: 'Gratitude("Thank You") -> Autonomous_Sense_of_Contribution',
        whyItMatters:
          'Awakens genuine courage and self-worth in others while keeping all relationships strictly horizontal.',
      },
      {
        id: 'ctbd-n-level-of-being',
        label: 'Worth on the Level of Being',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Valuing a human being starting from zero simply for existing and being alive, rather than subtracting from a 100-point ideal on the level of acts.',
        formulaOrRule: 'Worth = Base_Being(>0) + Gratitude(Acts) [Zero Subtraction]',
        whyItMatters:
          'Eliminates conditional love and perfectionist scorekeeping in families and teams.',
      },
      {
        id: 'ctbd-n-sense-of-contribution',
        label: 'Subjective Sense of Worth',
        category: 'security',
        chapterNumber: 4,
        importance: 2,
        definition:
          'The internal conviction "I am beneficial to the community," acquired by experiencing others’ horizontal gratitude.',
        formulaOrRule: 'Self_Worth = Feeling("I_Am_Beneficial_to_Comrades")',
        whyItMatters:
          'Provides the psychological fuel to face life tasks without needing superiority over others.',
      },
    ],
    edges: [
      {
        source: 'ctbd-n-3d-globe',
        target: 'ctbd-n-community-feeling',
        relationship: 'part_of',
        explanation:
          'Understanding your place as an equal member on a 3D globe of nested communities is the structural spatial model of Community Feeling.',
      },
      {
        source: 'ctbd-n-horizontal-encouragement',
        target: 'ctbd-n-vertical-praise',
        relationship: 'trades_off_with',
        explanation:
          'Adopting horizontal gratitude requires completely abandoning top-down praise and rebuke.',
      },
      {
        source: 'ctbd-n-level-of-being',
        target: 'ctbd-n-horizontal-encouragement',
        relationship: 'prerequisite_for',
        explanation:
          'You can only offer unforced horizontal encouragement when you first accept the other person on the level of being.',
      },
      {
        source: 'ctbd-n-horizontal-encouragement',
        target: 'ctbd-n-sense-of-contribution',
        relationship: 'optimizes',
        explanation:
          'Hearing horizontal gratitude ("Thank you") directly cultivates the recipient’s conviction that they are beneficial to the community.',
      },
      {
        source: 'ctbd-n-sense-of-contribution',
        target: 'ctbd-n-community-feeling',
        relationship: 'optimizes',
        explanation:
          'Experiencing one’s own worth as a contributor deepens active commitment to the community.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 12,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 12 dialogue segments of The Fourth Night: Gemeinschaftsgefühl, cosmic scope of community, flat map vs. 3D globe, self-attachment vs. concern for others, storm in a teacup & larger community, why praise and rebuke are vertical manipulation, horizontal encouragement via gratitude, and worth on the level of being (ICU/bedridden grandfather).',
  },
};

export const ctbdCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'The Fifth Night: To Live in Earnest Here and Now',
  subtitle: 'Self-Acceptance, Unconditional Confidence, Contribution, the Courage to Be Normal, and Energeia',
  readingTimeMinutes: 10,
  sourceWordCount: 10708,
  executiveThesis:
    'Community Feeling is operationalized through three circular pillars: Self-Acceptance (accepting your 60% self and changing what can be changed), Unconditional Confidence in Others (believing without collateral), and Contribution to Others. Because happiness is the subjective feeling of contribution, one needs no external recognition or special superiority—only the Courage to Be Normal and to live life as a series of present-moment dots (energeia) under the bright spotlight of the here and now.',
  paradigmShift: {
    oldWay:
      'Kinesis (Linear Destination Climbing) & The Quest to Be "Special": Treating life as a straight line climbing toward a distant summit (rendering the present "en route" and incomplete) while chasing easy superiority if you cannot be extraordinarily special.',
    newWay:
      'Energeia (Present-Moment Dots) & The Courage to Be Normal: Accepting ordinary selfhood, practicing Self-Acceptance -> Unconditional Confidence -> Contribution, and treating life as a dance where every present moment is complete in itself.',
    whyItChanged:
      'If life is a linear climb toward a future goal (kinesis), a person who dies en route has lived an unfinished failure; living in earnest in the here and now (energeia) makes every single instant whole and removes the greatest life-lie—fleeing into the past or future.',
  },
  customDiagrams: [
    {
      id: 'ctbd-ch05-svg-01',
      title: 'The Circular Engine of Community Feeling & Happiness',
      subtitle: 'How Self-Acceptance, Unconditional Confidence in Others, and Contribution reinforce each other continuously',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">THE THREE CIRCULAR PILLARS OF COMMUNITY FEELING</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Happiness is the subjective "Feeling of Contribution" generated by this three-node loop</text>

  <!-- Node 1: Self-Acceptance (Top) -->
  <rect x="260" y="82" width="280" height="86" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="280" y="108" fill="#38bdf8" font-size="13" font-weight="700">1. SELF-ACCEPTANCE (NOT AFFIRMATION)</text>
  <text x="280" y="128" fill="#f8fafc" font-size="11">Accept your 60-point self as-is ("affirmative</text>
  <text x="280" y="144" fill="#f8fafc" font-size="11">resignation") &amp; change what is changeable.</text>

  <!-- Node 2: Confidence in Others (Bottom Left) -->
  <rect x="44" y="256" width="316" height="104" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2" />
  <text x="64" y="282" fill="#6ee7b7" font-size="13" font-weight="700">2. CONFIDENCE IN OTHERS (UNCONDITIONAL)</text>
  <text x="64" y="302" fill="#f8fafc" font-size="11">Not conditional "trust" with collateral/security,</text>
  <text x="64" y="318" fill="#f8fafc" font-size="11">but believing in comrades unconditionally.</text>
  <text x="64" y="338" fill="#94a3b8" font-size="11">• Whether they betray you is THEIR task.</text>

  <!-- Node 3: Contribution to Others (Bottom Right) -->
  <rect x="440" y="256" width="316" height="104" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
  <text x="460" y="282" fill="#fcd34d" font-size="13" font-weight="700">3. CONTRIBUTION TO OTHERS</text>
  <text x="460" y="302" fill="#f8fafc" font-size="11">Not self-sacrifice, but acting to realize your own</text>
  <text x="460" y="318" fill="#f8fafc" font-size="11">worth ("Even invisible contribution counts").</text>
  <text x="460" y="338" fill="#6ee7b7" font-size="11">• Yields Happiness = Feeling of Contribution.</text>

  <!-- Circular Flow Arrows -->
  <path d="M 278 168 L 196 248" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="193,242 190,254 202,250" fill="#38bdf8" />

  <path d="M 360 308 L 430 308" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="430,303 440,308 430,313" fill="#10b981" />

  <path d="M 594 256 L 520 174" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="525,171 514,168 517,179" fill="#f59e0b" />

  <!-- Center Badge -->
  <circle cx="400" cy="224" r="38" fill="#0f172a" stroke="#f8fafc" stroke-width="1.5" />
  <text x="371" y="221" fill="#f8fafc" font-size="10" font-weight="700">HAPPINESS</text>
  <text x="378" y="236" fill="#fcd34d" font-size="9">LOOP</text>

  <text x="36" y="394" fill="#94a3b8" font-size="12">Harmony of Life (1-2-7 Law): Of 10 people, 1 dislikes you, 2 accept everything, 7 are neutral. Focus on the 2.</text>
</svg>`,
      bierutCaption:
        'Self-acceptance enables unconditional confidence in others as comrades, which unlocks contribution to the community, whose resulting feeling of contribution deepens self-acceptance.',
      annotations: [
        {
          step: '01',
          label: 'Self-Acceptance vs. Self-Affirmation',
          explanation:
            'Self-affirmation lies to itself ("I scored 60, but I’m really 100!"), whereas self-acceptance looks squarely at the 60 and asks how to advance.',
        },
        {
          step: '02',
          label: 'Confidence Without Collateral',
          explanation:
            'Bankers practice "trust" backed by collateral; Adlerian "confidence" believes in others without conditions, using Separation of Tasks if betrayed.',
        },
        {
          step: '03',
          label: 'Happiness as Feeling of Contribution',
          explanation:
            'When contribution is subjective ("I am of use"), you no longer need external recognition to be happy.',
        },
      ],
    },
    {
      id: 'ctbd-ch05-svg-02',
      title: 'Kinesis (Linear Mountain Climb) vs. Energeia (Series of Present-Moment Dots)',
      subtitle: 'Shining a blinding theatre spotlight on the "Here and Now" to defeat the greatest life-lie',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">KINESIS (DESTINATION LINE) VS. ENERGEIA (DANCING IN THE HERE AND NOW)</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Life is not a solid line climbing a mountain; it is a series of tiny dots lived in the present moment</text>

  <!-- Top Track: Kinesis (Linear Destination) -->
  <rect x="36" y="86" width="728" height="132" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="56" y="112" fill="#fca5a5" font-size="13" font-weight="700">1. KINESIS MOVEMENT (THE LINEAR MOUNTAIN CLIMB — THE GREATEST LIFE-LIE)</text>

  <!-- Mountain Slope -->
  <line x1="76" y1="196" x2="540" y2="128" stroke="#ef4444" stroke-width="3" />
  <circle cx="280" cy="166" r="7" fill="#fca5a5" />
  <text x="230" y="152" fill="#fca5a5" font-size="11" font-weight="600">"En Route" (Incomplete Life)</text>
  <polygon points="540,116 556,128 540,136" fill="#f59e0b" />
  <text x="564" y="132" fill="#fcd34d" font-size="12" font-weight="700">Distant Summit ("Real Life Starts Then")</text>
  <text x="56" y="198" fill="#94a3b8" font-size="11">Dim light on present makes fictitious past &amp; future visible -&gt; Postpones life.</text>

  <!-- Bottom Track: Energeia (Series of Dots) -->
  <rect x="36" y="238" width="728" height="152" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="56" y="264" fill="#6ee7b7" font-size="13" font-weight="700">2. ENERGEIA MOVEMENT (SERIES OF DOTS — DANCING IN EARNEST HERE AND NOW)</text>

  <!-- Past & Future Dimmed -->
  <circle cx="96" cy="324" r="6" fill="#334155" />
  <circle cx="136" cy="324" r="6" fill="#334155" />
  <circle cx="176" cy="324" r="6" fill="#334155" />
  <text x="92" y="352" fill="#64748b" font-size="11">Invisible Past</text>

  <!-- Bright Spotlight on Here and Now -->
  <polygon points="310,248 250,350 370,350" fill="#fcd34d" opacity="0.18" />
  <circle cx="310" cy="324" r="14" fill="#fcd34d" stroke="#f8fafc" stroke-width="2" />
  <text x="262" y="370" fill="#fcd34d" font-size="12" font-weight="700">BRIGHT SPOTLIGHT: NOW</text>

  <circle cx="436" cy="324" r="6" fill="#334155" />
  <circle cx="476" cy="324" r="6" fill="#334155" />
  <circle cx="516" cy="324" r="6" fill="#334155" />
  <text x="436" y="352" fill="#64748b" font-size="11">Invisible Future</text>

  <rect x="556" y="276" width="186" height="94" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="570" y="298" fill="#6ee7b7" font-size="11" font-weight="700">Complete in This Instant</text>
  <text x="570" y="316" fill="#e2e8f0" font-size="10">• Like dancing or travelling:</text>
  <text x="570" y="332" fill="#e2e8f0" font-size="10">  the process IS the outcome.</text>
  <text x="570" y="348" fill="#e2e8f0" font-size="10">• Earnest != Over-serious.</text>
</svg>`,
      bierutCaption:
        'What looks like a solid linear life path from a distance is actually a series of discrete present-moment dots; shining a bright spotlight on the here and now renders both past trauma and future anxiety invisible.',
      annotations: [
        {
          step: '01',
          label: 'Magnifying Glass on the Solid Line',
          explanation:
            'A chalk line drawn on a board resolves under a magnifying glass into separate dots; human life exists exclusively in the present dot.',
        },
        {
          step: '02',
          label: 'Aristotle’s Energeia (The Dance)',
          explanation:
            'In dancing or true travel, there is no external destination to arrive at—every step taken right now is the complete fulfillment.',
        },
        {
          step: '03',
          label: 'The Theatre Spotlight Principle',
          explanation:
            'We only see the past and future when we shine a dim, diffuse light on the entire stage; a blinding spotlight on the present erases both.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbd-ch05-mm-01',
      name: 'Self-Acceptance (60% Realism) vs. Self-Affirmation',
      tagline: 'Do not lie to yourself that a 60% score is 100%; accept the 60% as-is and ask how to advance.',
      naiveIntuition:
        'Building confidence requires positive self-affirmation—telling yourself "I can do anything, I am amazing!" even when you fail.',
      firstPrinciplesReality:
        'Self-affirmation is a superiority complex that lies to oneself and inevitably collapses; self-acceptance ("affirmative resignation") calmly accepts your current 60% capability without despair and applies Reinhold Niebuhr’s Serenity Prayer to change what is changeable.',
      howToApply:
        'When you fall short on a skill or project, forbid both self-loathing ("I’m trash") and self-hypnosis ("I’m still the best"); state your exact current baseline and execute the nextchangeable action.',
    },
    {
      id: 'ctbd-ch05-mm-02',
      name: 'The Courage to Be Normal',
      tagline: 'Problem behavior is born from the desperate fear of being ordinary and the pursuit of easy superiority.',
      naiveIntuition:
        'To have a meaningful life, you must become "special"—either through extraordinary triumph or, if that fails, through dramatic rebellion and misery.',
      firstPrinciplesReality:
        'When people refuse to accept being ordinary ("normal"), any setback in being "especially good" drives them to leap directly into being "especially bad" (delinquency, shut-in withdrawal, martyrdom)—what Adler calls the "pursuit of easy superiority."',
      howToApply:
        'Recognize that being normal is not being incapable; embrace ordinary daily effort without needing a dramatic persona of genius or tragedy.',
    },
    {
      id: 'ctbd-ch05-mm-03',
      name: 'Energeia & The Theatre Spotlight on "Here and Now"',
      tagline: 'Stop treating today as a dress rehearsal for a future mountain peak; dance in earnest in this exact dot.',
      naiveIntuition:
        'Success requires mapping a 20-year linear career climb and enduring an unfulfilled "en route" present until you reach the summit.',
      firstPrinciplesReality:
        'Aristotle distinguished kinesis (linear movement from A to B where the journey is incomplete) from energeia ("what is now in the process of being narrows to what has been realized," like dancing); shining a bright spotlight on the present moment makes past regrets and future worries vanish.',
      howToApply:
        'Do not confuse living "in earnest" with being rigid or over-serious: give 100% present attention to the task or person right in front of you today, without postponing life.',
    },
  ],
  deepSections: [
    {
      id: 'ctbd-ch05-ds-01',
      sectionNumber: '5.1',
      title: 'The Three Pillars: Self-Acceptance, Confidence, and Contribution',
      subtitle: 'Operationalizing Community Feeling and Defining Happiness as the Feeling of Contribution',
      coreMechanism:
        'To transition from the Separation of Tasks into actual Community Feeling, Adlerian psychology establishes three circular pillars: Self-Acceptance, Confidence in Others, and Contribution to Others. First, Self-Acceptance is not "self-affirmation" (telling yourself "I’m 100%" when you scored 60%), but accepting your 60% self as-is and exercising the courage to change what can be changed—"affirmative resignation." Second, having accepted yourself without armor, you practice "Confidence in Others": unlike "trust" (which requires conditions and collateral like a bank loan), confidence believes in others unconditionally as comrades. If someone exploits you, deciding when to cut ties is easy once you stop fearing hurt.\n\nThird, viewing others as comrades unlocks "Contribution to Others"—not as grim self-sacrifice, but to experience your own worth. Because Adler defines happiness as the "feeling of contribution," anyone who subjectively knows "I am beneficial to someone" is happy right now without needing external recognition.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Practice Self-Acceptance ("Affirmative Resignation")',
          detail:
            'Distinguish what cannot be changed (what you were born with) from what can be changed (how you use your equipment), and accept your 60% self honestly.',
        },
        {
          step: '02',
          title: 'Extend Unconditional Confidence in Others',
          detail:
            'Believe in others without demanding security collateral first, leaving the question of whether they betray you to their task.',
        },
        {
          step: '03',
          title: 'Engage in Non-Sacrificial Contribution',
          detail:
            'Contribute through work, household care, or simply existing on the level of being, generating the subjective feeling of contribution (happiness).',
        },
      ],
      formulas: [
        {
          name: 'The Circular Community Engine & Happiness Identity',
          expression:
            'Self_Acceptance(60%) -> Unconditional_Confidence(Zero_Collateral) -> Contribution_to_Others == Happiness(Feeling_of_Contribution)',
          intuition:
            'Each pillar feeds the next in a closed loop: accepting yourself removes the fear of betrayal, enabling unconditional confidence in comrades, which sparks contribution and produces the subjective feeling of contribution—Adler’s exact definition of happiness.',
          variables: [
            {
              symbol: 'Self_Acceptance(60%)',
              meaning: 'Honest acceptance of current capability paired with courage to change the changeable.',
            },
            {
              symbol: 'Unconditional_Confidence',
              meaning: 'Believing in others without collateral, unlike conditional bank-style trust.',
            },
            {
              symbol: 'Happiness(Feeling_of_Contribution)',
              meaning: 'The subjective awareness "I am of use to someone," independent of external praise.',
            },
          ],
          workedExample:
            'When a father washes dishes after dinner not for self-sacrifice or praise, but because contributing to his family makes him feel genuinely useful, he experiences the feeling of contribution (happiness) directly.',
        },
      ],
      keyTakeaways: [
        'We do not lack ability; we need the "affirmative resignation" to distinguish what can be changed from what cannot.',
        'If you are afraid to believe in anyone because you might get betrayed once out of a hundred times, you end up unable to build a deep relationship with a single person.',
        'Happiness is the feeling of contribution; as long as you have a real sense of contribution, you no longer need the desire for recognition.',
      ],
      commonPitfalls: [
        'Confusing "Contribution to Others" with self-sacrificing martyrdom ("hypocrisy").',
        'Assuming that contribution must be visibly praised by others to count as real contribution.',
      ],
    },
    {
      id: 'ctbd-ch05-ds-02',
      sectionNumber: '5.2',
      title: 'Workaholism, Harmony of Life (1-2-7), and the Courage to Be Normal',
      subtitle: 'Diagnosing Lopsided Lifestyles and Rejecting the Pursuit of Easy Superiority',
      coreMechanism:
        'Many people suffer because they lack "harmony of life"—fixating on a single corner of an object as if it were the entire world. A person who stammers becomes miserable not from the stammer itself, but from obsessing so narrowly over their speech that they treat the 1 person in 10 who criticizes them as everyone (violating the Jewish 1-2-7 teaching: of 10 people, 1 will always dislike you, 2 will accept everything about you, and 7 are neutral). Similarly, a workaholic who uses "I am too busy earning money" to ignore household and parenting responsibilities is not noble; he is executing a life-lie to flee non-work tasks.\n\nWhy do people fall into such extremes or problem behaviors? Because they lack the "courage to be normal." Terrified of being ordinary, they attempt to become "especially good"; when that proves too hard, they leap into being "especially bad" (delinquency, truancy, self-harm)—what Adler calls the "pursuit of easy superiority."',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Restore Harmony of Life (1-2-7 Perspective)',
          detail:
            'Stop fixating on the 1 person who dislikes you or hiding inside workaholism to evade family tasks; focus on the 2 comrades and balanced life tasks.',
        },
        {
          step: '02',
          title: 'Expose the "Pursuit of Easy Superiority"',
          detail:
            'Recognize problem behaviors and dramatic rebellion as cheap shortcuts to feel "special" and capture attention without effort.',
        },
        {
          step: '03',
          title: 'Embrace the Courage to Be Normal',
          detail:
            'Reject the false equation that "normal = incapable" and accept your ordinary self without needing to flaunt superiority.',
        },
      ],
      keyTakeaways: [
        'Workaholism is a life-lie that uses one task (Work) as an excuse to evade the tasks of family, friendship, and love.',
        'Whether you try to be "especially good" or "especially bad," the underlying goal is identical: attracting attention and escaping "normal" condition.',
        'One does not need to flaunt one’s superiority; having the courage to be normal allows you to build real capability quietly.',
      ],
      commonPitfalls: [
        'Judging the value of work by profession or title rather than whether the person commits squarely to their share of tasks.',
        'Mistaking "being normal" for giving up on personal growth or settling for incompetence.',
      ],
    },
    {
      id: 'ctbd-ch05-ds-03',
      sectionNumber: '5.3',
      title: 'Life as a Series of Dots: Energeia and the Spotlight on Here and Now',
      subtitle: 'Defeating the Greatest Life-Lie by Dancing in the Present Moment',
      coreMechanism:
        'Most adults view life as climbing a mountain along a continuous linear trajectory—Aristotle’s kinesis (normal movement from a starting point to an endpoint). Under this linear view, the first thirty years of your life are merely a preparatory "en route" phase toward a distant summit, meaning that if your life ended today, it would be an incomplete failure. Adlerian psychology shatters this illusion: what looks like a solid chalk line from afar is, under a magnifying glass, a series of discrete dots. We can live only in the present dot.\n\nLife is therefore an energeia movement—like dancing or true travel, where the process of dancing right now is itself the complete outcome. Just as a blinding spotlight on a theatre stage leaves you seeing only the immediate step while the past and future fade into darkness, living in earnest (seriously, yet not over-seriously) in the here and now defeats the greatest life-lie of all: postponing your life.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Discard the Linear Mountain Trajectory (Kinesis)',
          detail:
            'Stop treating your current life as an incomplete "en route" rehearsal waiting for a future dream to begin.',
        },
        {
          step: '02',
          title: 'Shine a Blinding Spotlight on the Here and Now',
          detail:
            'Turn up the intensity of your present attention so that past trauma and future fantasy disappear from view.',
        },
        {
          step: '03',
          title: 'Dance in Earnest (Energeia) Without Over-Seriousness',
          detail:
            'Do today’s concrete task—studying one vocabulary word, helping a comrade—with full earnestness, knowing this dot is 100% complete.',
        },
      ],
      keyTakeaways: [
        'Life is a series of moments (dots) called "now"; we can live neither in the past nor in the future.',
        'In an energeia movement like dancing, you do not dance in order to arrive at a destination across the room—the dancing itself is the complete realization.',
        'The greatest life-lie of all is to not live here and now: looking at the past and future while shining a dim light on your entire life so you think you have seen something.',
      ],
      commonPitfalls: [
        'Confusing "living in earnest" with being grim and "over-serious" (believing life needs grand Future Plans to have meaning).',
        'Saying "I don’t know what I really want to do yet" as an excuse to avoid taking earnest action in the present dot.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Existential Time Orientation Matrix: Kinesis (Linear Climb) vs. Hedonism vs. Energeia (Present Dots)',
      description:
        'Comparing how three philosophies of time treat the present moment, future planning, and existential completeness.',
      headers: [
        'Dimension',
        'Kinesis (Linear Mountain Climb)',
        'Impulsive Hedonism ("Live for Today")',
        'Adlerian Energeia (Series of Dots)',
      ],
      rows: [
        [
          'View of the Present ("Now")',
          'Incomplete preparatory "en route" step',
          'Fleeting pleasure consumption',
          '100% complete and self-fulfilled moment (Dancing)',
        ],
        [
          'Spotlight Illumination',
          'Dim, diffuse light over past & distant future',
          'Blindness to interpersonal tasks',
          'Blinding spotlight on Here and Now',
        ],
        [
          'Stance Toward Goals',
          'Obsessed with arriving at a distant summit',
          'Avoids all effort and discipline',
          'Earnest present action creates the path behind you',
        ],
        [
          'Existential Verdict',
          'The Greatest Life-Lie (postpones real life)',
          'Downhill rolling stone of inclination',
          'Every single day is whole, meaningful, and free',
        ],
      ],
      verdictRule:
        'Never treat today as a half-baked stepping stone to a future "real life"; shine a blinding spotlight on the task right in front of you and dance in earnest here and now.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbd-ch05-sc-01',
      title: 'Curing the "When I Become CTO" Kinesis Trap in a Senior Engineer',
      roleAndContext:
        'A senior engineer treats his current role as an unsatisfying "en route" stepping stone toward his 10-year plan of becoming a startup CTO, half-heartedly reviewing code while daydreaming about his future title.',
      symptomOrFailure:
        'His present engineering craft stagnates, teammates distrust his distracted reviews, and he feels perpetually unfulfilled ("my real life hasn’t started yet").',
      naiveFixAndWhyItFails:
        'Adding more granular 5-year milestone checkboxes to his career ladder spreadsheet; this fails because it doubles down on linear kinesis thinking and keeps a dim light on the present.',
      firstPrinciplesSolution:
        'Shift from kinesis to energeia: shine a bright spotlight on today’s architecture review and mentorship dot. Treat writing clean production systems today as the complete dance rather than a chore on the way to a future title.',
      measurableOutcome:
        'By executing each daily engineering dot in earnest, he solves a critical latency bottleneck, earns deep comrade confidence, and experiences immediate daily fulfillment.',
    },
    {
      id: 'ctbd-ch05-sc-02',
      title: 'Replacing Self-Affirmation Hype with 60% Self-Acceptance After a Failed Launch',
      roleAndContext:
        'After a flagship AI feature launch fails due to high hallucination rates, the product team oscillates between toxic self-affirmation ("Our model is still world-class, users just don’t get it!") and crushing despair ("We are incompetent").',
      symptomOrFailure:
        'Zero root-cause fixes are shipped because the team cannot bear to look at their actual 60% retrieval accuracy without either lying to themselves or giving up.',
      naiveFixAndWhyItFails:
        'Holding a motivational pep rally to chant positive affirmations about the team’s brilliance; this fails because self-affirmation is a superiority complex that masks reality.',
      firstPrinciplesSolution:
        'Apply Adlerian Self-Acceptance ("affirmative resignation"): accept the 60% retrieval score as the exact objective reality without self-loathing, separate what cannot be changed (past launch press) from what can be changed (chunking and reranking pipeline), and focus on how to climb from 60% to 85%.',
      measurableOutcome:
        'Free from defensive posturing, the team rebuilds the evaluation harness in one week and lifts production retrieval accuracy from 60% to 91%.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbd-ch05-q01',
        scenarioPrompt:
          'How does the Philosopher distinguish "self-acceptance" from "self-affirmation"?',
        options: [
          {
            label: 'A',
            text: 'Self-affirmation means telling yourself "I just happened to get 60% this time, but the real me is 100%," whereas self-acceptance honestly accepts the 60% self as-is and asks how to get closer to 100%.',
            isCorrect: true,
            explanation:
              'Self-affirmation lies to oneself and breeds a superiority complex, whereas self-acceptance ("affirmative resignation") accepts reality clearly and changes what is changeable.',
          },
          {
            label: 'B',
            text: 'Self-acceptance means giving up on ever improving beyond 60%.',
            isCorrect: false,
            explanation:
              'The Philosopher explicitly distinguishes "affirmative resignation" from pessimistic defeatism.',
          },
          {
            label: 'C',
            text: 'Self-affirmation is for confident people, while self-acceptance is for people with low ability.',
            isCorrect: false,
            explanation:
              'No one is 100%; everyone requires honest self-acceptance.',
          },
          {
            label: 'D',
            text: 'They are two identical terms for high self-esteem.',
            isCorrect: false,
            explanation:
              'The Philosopher draws a strict opposition between the two concepts.',
          },
        ],
      },
      {
        id: 'ctbd-ch05-q02',
        scenarioPrompt:
          'What is the difference between "trust" and "confidence" in Adlerian psychology?',
        options: [
          {
            label: 'A',
            text: 'Trust is unconditional, whereas confidence requires a legal contract.',
            isCorrect: false,
            explanation:
              'This reverses the exact definitions given by the Philosopher.',
          },
          {
            label: 'B',
            text: 'Trust comes with conditions and collateral (like a bank loan), whereas confidence means believing in others unconditionally without any security collateral.',
            isCorrect: true,
            explanation:
              'In interpersonal relationships of camaraderie, Adlerian psychology stands on unconditional confidence rather than collateralized trust.',
          },
          {
            label: 'C',
            text: 'Confidence means you must continue letting someone exploit you even if they lie repeatedly.',
            isCorrect: false,
            explanation:
              'The Philosopher notes that Adlerian psychology is not naive morality; if someone exploits you, cutting the relationship is easy when you do not fear hurt.',
          },
          {
            label: 'D',
            text: 'You should only have confidence in people after they prove they will never betray you.',
            isCorrect: false,
            explanation:
              'Requiring proof in advance is conditional trust; whether they betray you is their task.',
          },
        ],
      },
      {
        id: 'ctbd-ch05-q03',
        scenarioPrompt:
          'Why do children or adults engage in delinquency, truancy, or dramatic self-sabotage according to the principle of the "pursuit of easy superiority"?',
        options: [
          {
            label: 'A',
            text: 'Because they lack the courage to be normal; when they fail to become "especially good," they leap straight into being "especially bad" so they can still feel special and attract attention.',
            isCorrect: true,
            explanation:
              'Equating "normal" with "incapable," they refuse to be ordinary and use problem behavior as a shortcut to superiority and parental/social attention.',
          },
          {
            label: 'B',
            text: 'Because childhood trauma damaged their moral reasoning centers.',
            isCorrect: false,
            explanation:
              'Adler rejects etiological trauma explanations in favor of the teleological goal of gaining special attention.',
          },
          {
            label: 'C',
            text: 'Because they genuinely enjoy failing and have no desire for superiority.',
            isCorrect: false,
            explanation:
              'Their behavior is still driven by the pursuit of superiority—just achieved via an "easy" destructive shortcut.',
          },
          {
            label: 'D',
            text: 'Because their parents did not praise them enough when they were young.',
            isCorrect: false,
            explanation:
              'Praise is vertical manipulation that actually fuels the obsession with being special.',
          },
        ],
      },
      {
        id: 'ctbd-ch05-q04',
        scenarioPrompt:
          'What does the Philosopher call "the greatest life-lie of all"?',
        options: [
          {
            label: 'A',
            text: 'Pretending to like a boss whom you secretly dislike.',
            isCorrect: false,
            explanation:
              'While dishonest, that is not what the Philosopher crowns as the greatest life-lie at the climax of the book.',
          },
          {
            label: 'B',
            text: 'To not live here and now—looking at the past and future while shining a dim light on one’s entire life and postponing the present moment.',
            isCorrect: true,
            explanation:
              'Treating the present as an incomplete "en route" phase (kinesis) while fleeing into a remembered past or fantasized future is the greatest life-lie; the cure is shining a bright spotlight on the here and now (energeia).',
          },
          {
            label: 'C',
            text: 'Failing to create a detailed twenty-year career plan.',
            isCorrect: false,
            explanation:
              'The Philosopher argues that life cannot be planned like a linear mountain climb.',
          },
          {
            label: 'D',
            text: 'Believing that happiness is the feeling of contribution.',
            isCorrect: false,
            explanation:
              '"Happiness is the feeling of contribution" is the core truth of Chapter 5, not a life-lie.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbd-ch05-fc-01',
        category: 'foundation',
        front: 'What are the three circular pillars required to attain Community Feeling?',
        back: '1. Self-Acceptance, 2. Confidence in Others, and 3. Contribution to Others.',
        mentalHook: 'Accept yourself -> Believe in comrades -> Contribute to the circle.',
      },
      {
        id: 'ctbd-ch05-fc-02',
        category: 'optimization',
        front: 'What is Adlerian psychology’s exact definition of "happiness"?',
        back: 'Happiness is the feeling of contribution ("I am of use to someone").',
        mentalHook: 'Happiness = Subjective Feeling of Contribution (zero external praise needed).',
      },
      {
        id: 'ctbd-ch05-fc-03',
        category: 'evaluation',
        front: 'What is the Jewish "1-2-7 Law" of interpersonal harmony?',
        back: 'Out of 10 people, 1 will always criticize/dislike you, 2 will accept everything about you and become close friends, and 7 will be neutral. Focus on the 2, not the 1.',
        mentalHook: 'Stop obsessing over the 1 critic; cherish the 2 comrades.',
      },
      {
        id: 'ctbd-ch05-fc-04',
        category: 'security',
        front: 'Why is workaholism classified as a "life-lie" in Adlerian psychology?',
        back: 'Because the workaholic uses "being busy with work" as an excuse to evade household, parenting, and friendship tasks—lacking harmony of life.',
        mentalHook: 'Hiding in the office to dodge the tasks of home and love.',
      },
      {
        id: 'ctbd-ch05-fc-05',
        category: 'adaptation',
        front: 'Why is the "courage to be normal" essential for overcoming problem behavior?',
        back: 'Because refusing to accept being ordinary drives people who cannot be "especially good" to leap into being "especially bad" (the pursuit of easy superiority).',
        mentalHook: 'Being normal is not being incapable; drop the addiction to being "special."',
      },
      {
        id: 'ctbd-ch05-fc-06',
        category: 'architecture',
        front: 'What is the difference between Aristotle’s "kinesis" and "energeia" views of life?',
        back: 'Kinesis treats life as a linear climb from A to B where the present is incomplete; energeia treats life as a series of present-moment dots (like dancing) where every "here and now" is complete in itself.',
        mentalHook: 'Life is a dance in the spotlight of Now, not a trek to a distant peak.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbd-ch05-feyn-01',
        conceptTitle: 'The Three Circular Pillars & Happiness as Feeling of Contribution',
        prompt:
          'Explain how Self-Acceptance, Confidence in Others, and Contribution to Others form an unbreakable circle, and why defining happiness as the "feeling of contribution" eliminates the desire for recognition.',
        rubricChecklist: [
          'Distinguishes Self-Acceptance (60% realism + changing what can be changed) from self-affirmation (lying that 60% is 100%).',
          'Distinguishes Confidence in Others (unconditional belief without security) from conditional trust (collateral).',
          'Defines Contribution to Others as acting to experience one’s own worth rather than self-sacrifice, generating Happiness (the feeling of contribution).',
          'Explains why someone who seeking the feeling of contribution via praise is not yet free, whereas subjective awareness of contribution needs zero external recognition.',
        ],
        modelExplanation:
          'Community Feeling runs on three circular gears. First, Self-Acceptance means accepting your 60% self honestly without lying to yourself (unlike self-affirmation) and changing what is changeable. Second, once you accept yourself, you can extend Confidence in Others—believing in people unconditionally without demanding collateral (unlike conditional trust), while leaving any betrayal to their task. Third, viewing others as comrades unlocks Contribution to Others, which produces the subjective "feeling of contribution"—Adler’s exact definition of happiness. When you know internally that your existence and actions are beneficial to others, you no longer need anyone’s praise or recognition to be happy.',
      },
      {
        id: 'ctbd-ch05-feyn-02',
        conceptTitle: 'Energeia, The Series of Dots, and Shining a Spotlight on Here and Now',
        prompt:
          'Explain to someone who feels their life is meaningless until they achieve a distant dream why linear "mountain-climbing" life planning is the greatest life-lie, using Aristotle’s energeia and the theatre spotlight metaphor.',
        rubricChecklist: [
          'Contrasts linear kinesis movement (climbing toward a distant summit where the present is an incomplete "en route" phase) with energeia (dancing, where the process is complete right now).',
          'Uses the magnifying-glass analogy to show that a solid line is actually a series of discrete present-moment dots.',
          'Uses the theatre spotlight metaphor: a dim light makes the past and future visible, whereas a blinding spotlight on the here and now erases both.',
          'Distinguishes living "in earnest" in the present dot from being grimly "over-serious" about future plans.',
        ],
        modelExplanation:
          'Treating your life like a linear climb up a mountain (Aristotle’s kinesis) turns your entire present existence into an incomplete "en route" waiting room. If you look at a solid chalk line through a magnifying glass, you see it is actually a series of separate dots; we can only ever live in the dot called "here and now." Life is an energeia movement—like dancing, where the act of dancing right now is the complete goal. When you shine a dim light on your life, you get distracted by past regrets and future anxieties—the greatest life-lie of all. When you shine a blinding spotlight on the here and now and dance in earnest (without being over-serious), this exact moment is 100% complete.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbd-n-self-acceptance',
        label: 'Self-Acceptance (60% Realism)',
        category: 'foundation',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Accepting one’s incapable 60% self as-is ("affirmative resignation") and focusing courage on changing what can be changed, without self-affirmation lies.',
        formulaOrRule: 'Self_Acceptance = Accept(60%_Current) + Change(Changeable)',
        whyItMatters:
          'Provides the honest starting point for the entire Community Feeling loop.',
      },
      {
        id: 'ctbd-n-unconditional-confidence',
        label: 'Unconditional Confidence in Others',
        category: 'security',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Believing in others without demanding security collateral (unlike conditional trust), while treating potential betrayal as the other person’s task.',
        formulaOrRule: 'Confidence = Believe(Others) [Collateral == 0]',
        whyItMatters:
          'Enables deep horizontal camaraderie that conditional bank-style trust can never reach.',
      },
      {
        id: 'ctbd-n-feeling-of-contribution',
        label: 'Happiness as Feeling of Contribution',
        category: 'optimization',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Adler’s definition of happiness: the subjective awareness "I am beneficial to someone," attained through non-sacrificial contribution to comrades.',
        formulaOrRule: 'Happiness == Subjective_Feeling_of_Contribution',
        whyItMatters:
          'Liberates happiness from external wealth, status, or recognition cravings.',
      },
      {
        id: 'ctbd-n-courage-to-be-normal',
        label: 'The Courage to Be Normal',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Accepting one’s ordinary selfhood and rejecting the need to be "special" via either superiority boasting or the pursuit of easy superiority (problem behavior).',
        formulaOrRule: 'Normal !== Incapable; Drop_Need_to_Be_Special',
        whyItMatters:
          'Dissolves the root cause of delinquency, martyrdom, and superiority complexes.',
      },
      {
        id: 'ctbd-n-harmony-of-life',
        label: 'Harmony of Life (1-2-7 Law)',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 3,
        definition:
          'Maintaining balanced engagement across all life tasks (rejecting workaholism) and focusing on the 2 in 10 comrades rather than the 1 critic.',
        formulaOrRule: '10_People = 1_Dislikes + 2_Comrades + 7_Neutral',
        whyItMatters:
          'Prevents tunnel-vision fixation on a single flaw, critic, or work task.',
      },
      {
        id: 'ctbd-n-energeia-spotlight',
        label: 'Energeia & Here-and-Now Spotlight',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Living life as a series of discrete present-moment dots (like dancing) under a bright spotlight on the here and now, rather than a linear kinesis mountain climb.',
        formulaOrRule: 'Life = Sum(Complete_Present_Dots(Now)) [Kinesis_Line == False]',
        whyItMatters:
          'Defeats the greatest life-lie of postponing life into a fictitious past or future.',
      },
    ],
    edges: [
      {
        source: 'ctbd-n-self-acceptance',
        target: 'ctbd-n-unconditional-confidence',
        relationship: 'prerequisite_for',
        explanation:
          'Accepting yourself as you are removes the terror of being hurt, allowing you to extend unconditional confidence to others.',
      },
      {
        source: 'ctbd-n-unconditional-confidence',
        target: 'ctbd-n-feeling-of-contribution',
        relationship: 'prerequisite_for',
        explanation:
          'Viewing others with unconditional confidence as comrades unlocks genuine contribution and the resulting feeling of contribution (happiness).',
      },
      {
        source: 'ctbd-n-feeling-of-contribution',
        target: 'ctbd-n-self-acceptance',
        relationship: 'optimizes',
        explanation:
          'Experiencing that you are beneficial to the community completes the circle by reinforcing deep self-acceptance.',
      },
      {
        source: 'ctbd-n-courage-to-be-normal',
        target: 'ctbd-n-harmony-of-life',
        relationship: 'optimizes',
        explanation:
          'Having the courage to be normal frees you from workaholism and easy-superiority extremes, restoring harmony across all life tasks.',
      },
      {
        source: 'ctbd-n-energeia-spotlight',
        target: 'ctbd-n-feeling-of-contribution',
        relationship: 'optimizes',
        explanation:
          'Shining a bright spotlight on the here and now allows you to contribute and experience happiness in this exact moment rather than postponing it.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 13,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 13 dialogue segments of The Fifth Night: Self-Acceptance vs. Self-Affirmation (60% realism & affirmative resignation), Trust vs. Unconditional Confidence, Contribution & Work, Harmony of Life (stammering, 1-2-7 Jewish rule, workaholism life-lie), Happiness as the Feeling of Contribution, Pursuit of Easy Superiority vs. Courage to Be Normal, Kinesis vs. Energeia (series of dots), and the Spotlight on Here and Now.',
  },
};
