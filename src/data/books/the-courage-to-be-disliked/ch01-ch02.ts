import { ChapterMastery } from '../../../types/book';

export const ctbdCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'The First Night: Deny Trauma',
  subtitle: 'Freudian Etiology vs. Adlerian Teleology, Fabricated Emotions, and Lifestyle as Choice',
  readingTimeMinutes: 8,
  sourceWordCount: 10390,
  executiveThesis:
    'Human behavior is governed not by past causes (Freudian etiology) but by present goals (Adlerian teleology). Trauma does not mechanically force present dysfunction; rather, individuals select subjective meanings from past experiences and fabricate emotions like anxiety or anger as strategic tools to maintain the safety of their existing lifestyle.',
  paradigmShift: {
    oldWay:
      'Freudian Etiology (Determinism): Past trauma, childhood wounds, and family environments act as immutable mechanical causes that dictate present neurotic symptoms and emotional reactions.',
    newWay:
      'Adlerian Teleology (Goal-Directed Agency): Individuals first select a present objective—such as avoiding interpersonal risk or coercing submission—and subsequently manufacture the emotions, symptoms, or memories required to achieve it.',
    whyItChanged:
      'If the past strictly determined the present, anyone who suffered childhood abuse or isolation would be trapped in permanent pathology, rendering therapeutic change impossible and reducing human beings to passive machines.',
  },
  customDiagrams: [
    {
      id: 'ctbd-ch01-svg-01',
      title: 'Freudian Etiology vs. Adlerian Teleology',
      subtitle: 'Comparing linear past-to-present causation against goal-first backward symptom fabrication',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="42" fill="#f8fafc" font-size="18" font-weight="700">CAUSAL DIRECTION IN HUMAN PSYCHOLOGY: ETIOLOGY VS. TELEOLOGY</text>
  <text x="36" y="64" fill="#94a3b8" font-size="12">Why the shut-in friend generates physical palpitations at the doorway</text>

  <!-- Top Track: Freudian Etiology -->
  <rect x="36" y="88" width="728" height="132" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="56" y="114" fill="#fca5a5" font-size="13" font-weight="700" letter-spacing="0.06em">1. FREUDIAN ETIOLOGY (CAUSE-DRIVEN DETERMINISM)</text>

  <rect x="56" y="130" width="190" height="68" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="72" y="154" fill="#f8fafc" font-size="12" font-weight="600">Past Trauma (Cause)</text>
  <text x="72" y="172" fill="#94a3b8" font-size="11">Childhood wounds or strict</text>
  <text x="72" y="186" fill="#94a3b8" font-size="11">parental environment</text>

  <path d="M 246 164 L 302 164" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="302,159 312,164 302,169" fill="#ef4444" />

  <rect x="312" y="130" width="190" height="68" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="328" y="154" fill="#f8fafc" font-size="12" font-weight="600">Involuntary Symptom</text>
  <text x="328" y="172" fill="#94a3b8" font-size="11">Uncontrollable anxiety,</text>
  <text x="328" y="186" fill="#94a3b8" font-size="11">tremors &amp; palpitations</text>

  <path d="M 502 164 L 558 164" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="558,159 568,164 558,169" fill="#ef4444" />

  <rect x="568" y="130" width="176" height="68" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="584" y="154" fill="#fca5a5" font-size="12" font-weight="600">Deterministic Trap</text>
  <text x="584" y="172" fill="#94a3b8" font-size="11">"I cannot go outside;</text>
  <text x="584" y="186" fill="#94a3b8" font-size="11">the past controls me."</text>

  <!-- Bottom Track: Adlerian Teleology -->
  <rect x="36" y="244" width="728" height="146" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="56" y="270" fill="#6ee7b7" font-size="13" font-weight="700" letter-spacing="0.06em">2. ADLERIAN TELEOLOGY (GOAL-DIRECTED AGENCY)</text>

  <rect x="56" y="286" width="210" height="82" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="72" y="310" fill="#6ee7b7" font-size="12" font-weight="700">Step 1: Present Goal Set First</text>
  <text x="72" y="328" fill="#e2e8f0" font-size="11">"Do not go outside so I avoid</text>
  <text x="72" y="344" fill="#e2e8f0" font-size="11">rejection &amp; keep parents' care."</text>

  <path d="M 266 327 L 318 327" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="318,322 328,327 318,332" fill="#10b981" />

  <rect x="328" y="286" width="204" height="82" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="344" y="310" fill="#38bdf8" font-size="12" font-weight="700">Step 2: Fabricate Emotion/Means</text>
  <text x="344" y="328" fill="#e2e8f0" font-size="11">Manufacture fear, palpitations,</text>
  <text x="344" y="344" fill="#e2e8f0" font-size="11">or cite past trauma as excuse.</text>

  <path d="M 532 327 L 580 327" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="580,322 590,327 580,332" fill="#38bdf8" />

  <rect x="590" y="286" width="154" height="82" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="604" y="310" fill="#fcd34d" font-size="12" font-weight="700">Step 3: Goal Met</text>
  <text x="604" y="328" fill="#e2e8f0" font-size="11">Lifestyle stays safe;</text>
  <text x="604" y="344" fill="#e2e8f0" font-size="11">can be chosen anew.</text>
</svg>`,
      bierutCaption:
        'Etiology looks backward to console the patient as a victim of past causes, whereas teleology reverses the causal arrow by revealing symptoms as present instruments engineered to fulfill a hidden goal.',
      annotations: [
        {
          step: '01',
          label: 'Etiological Consolation Trap',
          explanation:
            'Treating past trauma as a rigid cause comforts the sufferer ("it is not your fault") while stripping away all agency to change in the present.',
        },
        {
          step: '02',
          label: 'The Primary Hidden Purpose',
          explanation:
            'Before any symptom manifests, the individual sets an unspoken objective—such as staying inside to remain shielded within parental attention.',
        },
        {
          step: '03',
          label: 'Instrumental Symptom Fabrication',
          explanation:
            'Anxiety, palpitations, and traumatic memories are recruited on demand as legitimate alibis to execute the pre-selected goal.',
        },
      ],
    },
    {
      id: 'ctbd-ch01-svg-02',
      title: 'The Well-Water Subjective Meaning & Lifestyle Filter',
      subtitle: 'How constant objective facts (18°C water) invert subjective experience based on present context and lifestyle choice',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="42" fill="#f8fafc" font-size="18" font-weight="700">OBJECTIVE REALITY VS. SUBJECTIVE MEANING ATTRIBUTION</text>
  <text x="36" y="64" fill="#94a3b8" font-size="12">We do not suffer from the shock of our experiences, but make out of them whatever suits our purposes</text>

  <!-- Left Node: Objective Fact -->
  <rect x="36" y="138" width="190" height="144" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="56" y="172" fill="#38bdf8" font-size="13" font-weight="700">OBJECTIVE FACT</text>
  <text x="56" y="198" fill="#f8fafc" font-size="22" font-weight="800">18°C Water</text>
  <text x="56" y="224" fill="#94a3b8" font-size="11">Constant physical well</text>
  <text x="56" y="240" fill="#94a3b8" font-size="11">temperature; or raw</text>
  <text x="56" y="256" fill="#94a3b8" font-size="11">biographical past event</text>

  <!-- Split Arrows to Contexts -->
  <path d="M 226 185 L 304 134" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="300,130 311,130 306,139" fill="#38bdf8" />

  <path d="M 226 235 L 304 286" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="306,281 311,290 300,290" fill="#f59e0b" />

  <!-- Center Top: Summer / Fear Context -->
  <rect x="312" y="88" width="212" height="106" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="328" y="114" fill="#38bdf8" font-size="12" font-weight="700">LENS A: 35°C SUMMER / FEAR</text>
  <text x="328" y="136" fill="#f8fafc" font-size="12">Feels icy &amp; chilling</text>
  <text x="328" y="156" fill="#94a3b8" font-size="11">Past event interpreted as proof</text>
  <text x="328" y="172" fill="#94a3b8" font-size="11">that the world is dangerous</text>

  <!-- Center Bottom: Winter / Courage Context -->
  <rect x="312" y="226" width="212" height="106" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="328" y="252" fill="#6ee7b7" font-size="12" font-weight="700">LENS B: 2°C WINTER / COURAGE</text>
  <text x="328" y="274" fill="#f8fafc" font-size="12">Feels lukewarm &amp; inviting</text>
  <text x="328" y="294" fill="#94a3b8" font-size="11">Same past event interpreted as</text>
  <text x="328" y="310" fill="#94a3b8" font-size="11">catalyst for empathy &amp; growth</text>

  <!-- Arrows to Lifestyle Decision -->
  <path d="M 524 141 L 574 141" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="574,136 584,141 574,146" fill="#ef4444" />

  <path d="M 524 279 L 574 279" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="574,274 584,279 574,284" fill="#10b981" />

  <!-- Right Nodes: Lifestyle Outcomes -->
  <rect x="584" y="88" width="180" height="106" rx="10" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" />
  <text x="600" y="114" fill="#fca5a5" font-size="12" font-weight="700">SAFE UNHAPPINESS</text>
  <text x="600" y="136" fill="#e2e8f0" font-size="11">Preserves status quo ("good")</text>
  <text x="600" y="154" fill="#94a3b8" font-size="11">Avoids unpredictability of</text>
  <text x="600" y="170" fill="#94a3b8" font-size="11">stepping into new life</text>

  <rect x="584" y="226" width="180" height="106" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="600" y="252" fill="#6ee7b7" font-size="12" font-weight="700">COURAGE TO CHANGE</text>
  <text x="600" y="274" fill="#e2e8f0" font-size="11">Redefines lifestyle in the</text>
  <text x="600" y="292" fill="#94a3b8" font-size="11">present moment despite</text>
  <text x="600" y="308" fill="#94a3b8" font-size="11">unknown future risk</text>

  <text x="36" y="384" fill="#94a3b8" font-size="12">Key Principle: You cannot alter the 18°C objective past, but you hold 100% authority over the present lens.</text>
</svg>`,
      bierutCaption:
        'Well water remains a constant 18°C year-round, proving that coldness or warmth resides not in the water itself, but in the observer’s present thermal state and chosen lifestyle lens.',
      annotations: [
        {
          step: '01',
          label: 'The Invariant 18°C Datum',
          explanation:
            'Objective events and physical measurements carry zero intrinsic instruction on how a person must feel or act today.',
        },
        {
          step: '02',
          label: 'The Cognitive Filter (Lifestyle)',
          explanation:
            'Lifestyle is the conception of self and world chosen around age ten that assigns meaning to every memory and encounter.',
        },
        {
          step: '03',
          label: 'Unhappiness as a Chosen "Good"',
          explanation:
            'In the Greek sense of agathon (beneficial for survival), staying unhappy feels "good" because a familiar cage is predictable.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbd-ch01-mm-01',
      name: 'Teleological Symptom Engineering',
      tagline: 'Symptoms are tools manufactured to fulfill a present goal, not scars forced by the past.',
      naiveIntuition:
        'A shut-in wants desperately to go outside, but past trauma triggers involuntary panic and palpitations that physically trap him indoors.',
      firstPrinciplesReality:
        'The shut-in first resolves not to step outside because staying home shields him from social judgment and secures his parents’ undivided care; he then manufactures anxiety and palpitations as the necessary physiological means to enforce that decision.',
      howToApply:
        'When paralyzed by fear, procrastination, or self-doubt, stop asking "What past wound caused this?" and ask "What unpleasant risk am I successfully avoiding right now by generating this symptom?"',
    },
    {
      id: 'ctbd-ch01-mm-02',
      name: 'Anger as a Retractable Tool',
      tagline: 'Sudden rage is not an uncontrollable chemical explosion; it is a switchable instrument of domination.',
      naiveIntuition:
        'When a waiter spills coffee on your jacket or a child disobeys, anger boils over so rapidly that you lose control and shout involuntarily.',
      firstPrinciplesReality:
        'A mother screaming furiously at her daughter instantly switches to a polite, calm voice when answering a call from her child’s homeroom teacher, then resumes shouting the moment she hangs up—proving anger is fabricated on demand to make another person submit instantly.',
      howToApply:
        'Recognize every surge of anger as a strategic temptation to overpower someone without patient dialogue, and consciously leave the tool in its sheath.',
    },
    {
      id: 'ctbd-ch01-mm-03',
      name: 'The 18°C Well-Water Principle',
      tagline: 'We inhabit a subjective world shaped by the meanings we assign to objective events.',
      naiveIntuition:
        'Objective circumstances—such as a harsh upbringing, physical disability, or economic setback—directly dictate our outlook and satisfaction.',
      firstPrinciplesReality:
        'Well water stays at a constant 18°C throughout the year, yet feels icy in summer and warm in winter; similarly, the objective past never changes, but our subjective experience transforms completely when we alter the present purpose through which we interpret it.',
      howToApply:
        'Audit any recurring personal grievance by separating the bare chronological fact from the self-protective narrative you have attached to it.',
    },
  ],
  deepSections: [
    {
      id: 'ctbd-ch01-ds-01',
      sectionNumber: '1.1',
      title: 'Why Adlerian Psychology Categorically Denies Trauma',
      subtitle: 'Replacing Freudian Etiology with Purpose-Driven Teleology',
      coreMechanism:
        'Freudian etiology treats psychological suffering exactly like physical pathology: a past cause (childhood trauma, neglect, or humiliation) mechanically produces a present symptom (neurosis, social withdrawal, or phobia), and the clinician attempts to console the patient by excavating the wound. Alfred Adler rejects trauma altogether, asserting in Individual Psychology that no experience is in itself the cause of our success or failure; instead, we self-determine our lives by the meaning we give to past experiences to suit our present purposes.\n\nConsider the Youth’s shut-in friend who trembles with palpitations whenever he steps beyond his bedroom. Under etiology, childhood mistreatment caused the anxiety that traps him indoors. Under teleology, the causal sequence reverses: the friend first establishes the hidden goal of remaining indoors to avoid failing in society and to keep his parents’ anxious solicitude focused entirely on him, and he then fabricates physical palpitations as a compelling alibi.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Set the Present Protective Objective',
          detail:
            'The individual unconsciously resolves to avoid stepping out into unscripted interpersonal relationships where rejection is possible.',
        },
        {
          step: '02',
          title: 'Generate Physiological & Emotional Alibis',
          detail:
            'To make the refusal to act convincing to oneself and one’s family, the psyche manufactures palpitations, dizziness, or panic.',
        },
        {
          step: '03',
          title: 'Recruit Past Memories as Justification',
          detail:
            'Specific childhood memories of strictness or trauma are selectively retrieved and amplified to prove that going outside is impossible.',
        },
      ],
      formulas: [
        {
          name: 'Etiological vs. Teleological Causal Inversion',
          expression:
            'Etiology: Past_Cause(t - k) -> Present_Symptom(t)  !==  Teleology: Present_Goal(t) -> Fabricated_Symptom(t) + Selected_Memory(t - k)',
          intuition:
            'In Adlerian psychology, the arrow of agency originates in the present goal and reaches backward to recruit both symptoms and memories as instruments.',
          variables: [
            {
              symbol: 'Present_Goal(t)',
              meaning: 'The immediate unspoken objective (e.g., avoiding interpersonal risk or coercing compliance).',
            },
            {
              symbol: 'Fabricated_Symptom(t)',
              meaning: 'The emotion or physiological state (anxiety, rage, blushing) engineered to achieve the goal.',
            },
            {
              symbol: 'Selected_Memory(t - k)',
              meaning: 'A past event reinterpreted in the present to validate the current lifestyle.',
            },
          ],
          workedExample:
            'When a waiter spills coffee on a patron’s expensive jacket, the patron shouts not because the coffee forced an involuntary explosion, but because he first chose the goal of intimidating the waiter into instant submission and fabricated loud anger as the quickest tool.',
        },
      ],
      keyTakeaways: [
        'Denying trauma liberates the individual from past determinism: if the past does not dictate the present, you can choose a new path today.',
        'Emotions such as rage and anxiety are not irresistible forces that overpower us, but purposeful instruments pulled out on demand to achieve a goal.',
        'A mother who switches instantly from screaming at her daughter to speaking politely to a teacher on the phone proves that anger is retractable at will.',
      ],
      commonPitfalls: [
        'Confusing Adler’s denial of trauma with denying that painful events hurt; Adler acknowledges deep pain but denies that pain mechanically dictates future choices.',
        'Using etiology as a comforting excuse to remain passive while blaming parents, upbringing, or past misfortune.',
      ],
    },
    {
      id: 'ctbd-ch01-ds-02',
      sectionNumber: '1.2',
      title: 'Subjective Meaning & Socrates’ Paradox of Unhappiness',
      subtitle: 'How Well Water Changes Temperature and Why People Choose to Be Unhappy',
      coreMechanism:
        'Humans do not inhabit an objective world of raw physical facts; we inhabit a subjective world constructed from the personal meanings we assign to those facts. Just as well water remains at a constant objective temperature of 18°C all year yet feels cold when drawn in the heat of summer and warm when drawn in the frost of winter, the same childhood hardship or personal trait changes its meaning entirely depending on the attitude we adopt in the present.\n\nThis explains how Socratic philosophy resolves the seeming absurdity of someone choosing to feel unhappy. Socrates held that no person desires "evil," yet in ancient Greek the word for "good" (agathon) carries no moral connotation—it simply means "beneficial for oneself." When the Youth’s friend idolizes a novelist and insists he wants to change into someone else, he still chooses unhappiness because remaining inside his familiar persona feels safe and predictable, making unhappiness "good" (advantageous) for self-preservation.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Separate Objective Datum from Subjective Narrative',
          detail:
            'Identify the invariant physical or historical fact (the 18°C water) apart from the emotional interpretation layered onto it.',
        },
        {
          step: '02',
          title: 'Decode the Hidden Benefit (Agathon) of Suffering',
          detail:
            'Ask how remaining dissatisfied or claiming "I want to be reborn as someone else" protects you from real-world evaluation.',
        },
        {
          step: '03',
          title: 'Shift the Present Interpretive Stance',
          detail:
            'Reassign the meaning of your current equipment—treating what you have not as a fixed handicap, but as raw material to use constructively.',
        },
      ],
      keyTakeaways: [
        'The important thing is not what one is born with, but what use one makes of that equipment.',
        'Wishing to be reborn as a different person is an evasion tactic to avoid making concrete use of your actual life here and now.',
        'People remain in an unhappy state because they judge that familiar dissatisfaction is safer and easier to manage than the unknown risks of happiness.',
      ],
      commonPitfalls: [
        'Assuming that wanting to change on a surface level means one has actually resolved to give up the safety of the current status quo.',
        'Treating moral "good" and adaptive "good" (agathon) as identical, which obscures the self-protective payoff of neurotic behavior.',
      ],
    },
    {
      id: 'ctbd-ch01-ds-03',
      sectionNumber: '1.3',
      title: 'Lifestyle as a Self-Chosen Worldview and the Courage to Change',
      subtitle: 'Deconstructing Personality as an Editable Cognitive Operating System',
      coreMechanism:
        'What everyday language treats as an unchangeable "personality" or temperament, Adlerian psychology defines as "lifestyle"—the unified tendencies of thought and action comprising how a person sees the self and the world. Although an individual typically selects this lifestyle unconsciously around age ten based on early family and social observations, it is not an innate genetic destiny like a plant’s seed; it is a cognitive choice that can be re-selected from scratch the moment one recognizes its structure.\n\nWhy, then, do people cling so stubbornly to a cramped lifestyle? Choosing a new lifestyle introduces radical uncertainty: one can no longer predict what will happen next or rely on habitual scripts to handle interpersonal friction. People do not lack the ability to change; they lack the courage to abandon the predictable discomfort of their existing lifestyle and step into the unmapped future.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Expose the Implicit Axiom of Your Lifestyle',
          detail:
            'Articulate your core premise about yourself ("I am flawed") and the world ("Other people are harsh judges").',
        },
        {
          step: '02',
          title: 'Confront the Fear of the Unpredictable',
          detail:
            'Acknowledge that the resistance to change comes from losing the ability to forecast tomorrow’s misery, not from inability.',
        },
        {
          step: '03',
          title: 'Make the Present-Moment Resolution',
          detail:
            'Decide right now to discard the old lifestyle, accepting full responsibility for every step taken from this moment forward.',
        },
      ],
      keyTakeaways: [
        'Lifestyle encompasses both self-concept and worldview, operating like tinted spectacles through which every event is filtered.',
        'No matter what has occurred in your life up to this exact second, it has zero bearing on how you choose to live from now on.',
        'In Adlerian psychology, therapy is not the excavation of past causes but a practice of encouragement to awaken the courage to change.',
      ],
      commonPitfalls: [
        'Waiting to understand every childhood memory before taking action, which endlessly postpones the decision to change today.',
        'Believing that personality is fixed at birth and that only miraculous external events can alter how one relates to others.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Diagnostic Framework: Freudian Etiology vs. Adlerian Teleology vs. Lifestyle Redesign',
      description:
        'Comparing how different psychological lenses interpret symptoms, emotions, and the capacity for personal transformation.',
      headers: [
        'Dimension',
        'Freudian Etiology (Cause-Based)',
        'Teleological Defence (Status Quo)',
        'Adlerian Lifestyle Redesign (Courage)',
      ],
      rows: [
        [
          'Primary Question',
          '"Where did this wound come from?"',
          '"How do I keep myself safe from change?"',
          '"What purpose does this serve, and how shall I act now?"',
        ],
        [
          'View of Emotions',
          'Involuntary physiological reactions to stimuli',
          'Fabricated tools used to coerce or withdraw',
          'Consciously regulated signals subordinated to dialogue',
        ],
        [
          'Role of the Past',
          'Immutable determinant of present identity',
          'Storehouse of alibis justifying stagnation',
          'Neutral 18°C archive given new meaning in the present',
        ],
        [
          'Psychological Payoff',
          'Consolation as a blameless victim',
          'Predictable discomfort and parental/social protection',
          'Agency, personal responsibility, and genuine freedom',
        ],
      ],
      verdictRule:
        'Whenever someone claims "I want to change, but I cannot because of X," reject etiology immediately and diagnose X as the teleological alibi engineered to preserve their current lifestyle.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbd-ch01-sc-01',
      title: 'The Engineering Lead Who Explodes in Code Reviews',
      roleAndContext:
        'A senior principal engineer repeatedly loses his temper during architectural reviews, shouting at junior developers and blaming his "short fuse" and high-stress startup background.',
      symptomOrFailure:
        'Team members stop proposing novel designs and hide bugs to avoid triggering his "uncontrollable" anger.',
      naiveFixAndWhyItFails:
        'Sending the lead to stress-management workshops that treat his rage as an involuntary pressure-valve response to tight deadlines; this fails because it validates his excuse that stress forces him to shout.',
      firstPrinciplesSolution:
        'Expose the teleological goal of his anger: observe that he never shouts when the VP of Engineering joins the exact same review. Confront him with the reality that he fabricates anger selectively because shouting silences pushback faster than explaining complex trade-offs via patient dialogue.',
      measurableOutcome:
        'Once the alibi of "involuntary temper" is stripped away, the lead replaces coercive outbursts with written architectural RFCs, restoring team psychological safety and doubling design proposals.',
    },
    {
      id: 'ctbd-ch01-sc-02',
      title: 'The Aspiring Creator Paralyzed by Impostor Anxiety',
      roleAndContext:
        'A talented software architect spends three years drafting a technical book but experiences severe migraines and perfectionist dread whenever a publisher requests a chapter submission.',
      symptomOrFailure:
        'Zero chapters are published; the architect attributes the block to childhood academic trauma from an overly critical father.',
      naiveFixAndWhyItFails:
        'Spending months analyzing memories of the father’s criticism to heal the inner wound before submitting a draft; this fails because it reinforces the narrative that past criticism controls present output.',
      firstPrinciplesSolution:
        'Apply the shut-in teleology diagnostic: by never submitting a manuscript, the architect preserves the pristine fantasy that "I could write a masterpiece if only my anxiety cleared," completely avoiding the real-world risk of public critique and mediocre reviews.',
      measurableOutcome:
        'Accepting the courage to be judged as an imperfect writer, the architect ships Chapter 1 within 48 hours and completes the book on a public biweekly schedule.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbd-ch01-q01',
        scenarioPrompt:
          'A client insists he cannot attend social gatherings because childhood bullying caused severe social phobia and heart palpitations. How does the Philosopher diagnose this using Adlerian teleology?',
        options: [
          {
            label: 'A',
            text: 'The client must first undergo deep regression therapy to neutralize the traumatic bullying memory before attempting to go out.',
            isCorrect: false,
            explanation:
              'This is Freudian etiology, which treats past memories as mechanical causes and delays present agency.',
          },
          {
            label: 'B',
            text: 'The client first sets the present goal of not going out to avoid interpersonal hurt, and then fabricates palpitations and recruits the bullying memory to execute that goal.',
            isCorrect: true,
            explanation:
              'Teleology recognizes that the present purpose ("do not go out") comes first, and physiological symptoms plus past memories are mobilized as instruments to achieve it.',
          },
          {
            label: 'C',
            text: 'The client is consciously lying about having palpitations and feels no genuine physical distress.',
            isCorrect: false,
            explanation:
              'Adlerian psychology explicitly notes that the palpitations and terror are physically real, not feigned, but they are still unconsciously generated to serve the goal.',
          },
          {
            label: 'D',
            text: 'The client has an inherited genetic predisposition toward panic disorders that cannot be altered by choice.',
            isCorrect: false,
            explanation:
              'Adler rejects genetic or environmental determinism in favor of how one uses one’s equipment in the present.',
          },
        ],
      },
      {
        id: 'ctbd-ch01-q02',
        scenarioPrompt:
          'In the Philosopher’s example of a mother screaming at her daughter who suddenly answers a phone call from the homeroom teacher in a calm, polite voice, what fundamental principle is proved?',
        options: [
          {
            label: 'A',
            text: 'Social etiquette training is stronger than maternal instinct.',
            isCorrect: false,
            explanation:
              'The example is not about politeness vs. instinct, but about the nature of emotion as a controllable tool.',
          },
          {
            label: 'B',
            text: 'Anger is an involuntary chemical surge that takes at least twenty minutes to metabolize.',
            isCorrect: false,
            explanation:
              'The instant switch on the phone directly refutes the claim that anger is an unstoppable physiological flood.',
          },
          {
            label: 'C',
            text: 'Anger is a retractable tool that a person fabricates and puts away at will to force a target into instant submission.',
            isCorrect: true,
            explanation:
              'Because the mother can sheath her anger the second a higher-stakes interlocutor calls, her rage was never out of control; it was a tool chosen to overpower her child.',
          },
          {
            label: 'D',
            text: 'The daughter caused the mother’s anger, whereas the teacher caused her calmness.',
            isCorrect: false,
            explanation:
              'External actors do not cause our emotions; the mother selects which emotional instrument serves her goal with each person.',
          },
        ],
      },
      {
        id: 'ctbd-ch01-q03',
        scenarioPrompt:
          'What does the Philosopher demonstrate with the metaphor of well water that stays at 18°C all year round?',
        options: [
          {
            label: 'A',
            text: 'Human nature remains cold and unchangeable regardless of external seasons.',
            isCorrect: false,
            explanation:
              'Adlerian psychology argues the exact opposite: human lifestyle is malleable and open to change at any moment.',
          },
          {
            label: 'B',
            text: 'While the objective fact (18°C water or a past event) remains constant, our subjective experience of it changes completely based on our present state and chosen lens.',
            isCorrect: true,
            explanation:
              'We live in a subjective world where the same 18°C water feels cold in summer and warm in winter; similarly, present purpose determines the meaning of past events.',
          },
          {
            label: 'C',
            text: 'Only physical science can measure human psychology accurately.',
            isCorrect: false,
            explanation:
              'The point is precisely that objective physical measurements cannot capture subjective human meaning.',
          },
          {
            label: 'D',
            text: 'People should suppress their subjective feelings and view life as cold, objective numbers.',
            isCorrect: false,
            explanation:
              'One cannot escape subjectivity; instead, one deliberately chooses a constructive subjective meaning.',
          },
        ],
      },
      {
        id: 'ctbd-ch01-q04',
        scenarioPrompt:
          'Why does the Youth’s friend say "I want to change, I want to be reborn as someone else," yet remain unchanged year after year?',
        options: [
          {
            label: 'A',
            text: 'He lacks the intellectual ability and social skills required to live differently.',
            isCorrect: false,
            explanation:
              'Adler states that people do not lack ability; they lack the courage to abandon their familiar lifestyle.',
          },
          {
            label: 'B',
            text: 'He judges his current unhappy lifestyle to be "good" (beneficial/safe) because it shields him from the unpredictable anxiety of stepping into an unknown life.',
            isCorrect: true,
            explanation:
              'In the Greek sense of agathon, staying in his current unhappy state is advantageous because it keeps his world predictable and avoids the courage required for real change.',
          },
          {
            label: 'C',
            text: 'Once a lifestyle is chosen at age ten, it becomes hardwired into neural pathways and cannot be altered.',
            isCorrect: false,
            explanation:
              'Lifestyle is not a fixed destiny; it can be re-chosen in the present moment.',
          },
          {
            label: 'D',
            text: 'His friends and parents have not given him enough sympathy for his childhood struggles.',
            isCorrect: false,
            explanation:
              'Excessive parental solicitude and etiological sympathy actually reinforce his goal of staying unchanged.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbd-ch01-fc-01',
        category: 'foundation',
        front: 'What is the core difference between Freudian etiology and Adlerian teleology?',
        back: 'Etiology explains present behavior as the effect of past causes (trauma), whereas teleology explains present behavior and emotions as instruments created to achieve a present goal.',
        mentalHook: 'Etiology points backward to excuses; Teleology points forward to hidden goals.',
      },
      {
        id: 'ctbd-ch01-fc-02',
        category: 'architecture',
        front: 'According to Adler, how do past experiences influence our success or failure?',
        back: 'No experience is in itself the cause of our success or failure; we make out of our experiences whatever suits our present purposes.',
        mentalHook: 'The past is a silent archive; the present self is the editor.',
      },
      {
        id: 'ctbd-ch01-fc-03',
        category: 'evaluation',
        front: 'Why does the waiter coffee-spill example refute the idea that anger is an uncontrollable reaction?',
        back: 'The patron shouts not because coffee mechanically triggers rage, but because he pre-selects the goal of intimidating the waiter into submission without patient language.',
        mentalHook: 'Anger had already been tucked into his pocket before the coffee spilled.',
      },
      {
        id: 'ctbd-ch01-fc-04',
        category: 'adaptation',
        front: 'What does "lifestyle" mean in Adlerian psychology?',
        back: 'Lifestyle is an individual’s self-chosen tendencies of thought and action—combining self-concept ("who I am") and worldview ("what the world is like")—typically formed around age ten.',
        mentalHook: 'Lifestyle is your chosen cognitive operating system, not your genetic hardware.',
      },
      {
        id: 'ctbd-ch01-fc-05',
        category: 'optimization',
        front: 'In the Socratic paradox "No person desires evil," why do people still choose to be unhappy?',
        back: 'In Greek, "good" (agathon) means "beneficial for oneself"; people choose unhappiness because a familiar, predictable misery feels safer than the unknown risks of changing their lifestyle.',
        mentalHook: 'Better the devil you know: familiar misery feels safer than unscripted freedom.',
      },
      {
        id: 'ctbd-ch01-fc-06',
        category: 'foundation',
        front: 'According to Adler, what is the only thing a person needs in order to change their lifestyle right now?',
        back: 'Courage—specifically, the courage to be happy by stepping into an unpredictable future and leaving past alibis behind.',
        mentalHook: 'Psychology of Use over Psychology of Possession: you don’t lack ability, you lack courage.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbd-ch01-feyn-01',
        conceptTitle: 'Adlerian Teleology vs. Freudian Etiology',
        prompt:
          'Explain to a colleague who blames their fear of public speaking on a humiliating middle-school presentation why Adlerian psychology denies trauma and how teleology reframes their stage fright.',
        rubricChecklist: [
          'Contrasts cause-driven etiology (past event forces present fear) with goal-driven teleology (present goal fabricates fear).',
          'Identifies the hidden present objective: avoiding the risk of public judgment or mediocre evaluation today.',
          'Explains that both the physical anxiety symptoms and the middle-school memory are recruited as legitimate alibis to fulfill the goal of not speaking.',
          'Concludes that because the past does not determine the present, the speaker can choose a new goal in this moment.',
        ],
        modelExplanation:
          'Freudian etiology says your middle-school humiliation acts like a mechanical cause that forces you to panic on stage today. Adlerian teleology flips that arrow around: first, you set a present goal to avoid standing in front of peers where your ideas might be judged or rejected. Then, to execute that goal without feeling cowardly, you manufacture physical stage fright and pull up the middle-school memory as proof that you cannot speak. Because the memory is being used as a present tool rather than acting as an unbreakable chain, you can decide right now to drop the goal of self-protection and step up to the microphone.',
      },
      {
        id: 'ctbd-ch01-feyn-02',
        conceptTitle: 'Lifestyle and the Paradox of Safe Unhappiness',
        prompt:
          'Using the 18°C well-water metaphor and the Greek concept of agathon, explain why people fiercely resist changing a lifestyle they constantly complain about.',
        rubricChecklist: [
          'Uses the 18°C well-water analogy to distinguish objective facts from subjective meaning.',
          'Defines Adlerian lifestyle as the self-chosen lens of self-concept and worldview.',
          'Defines agathon as what is "beneficial or advantageous for oneself" rather than morally righteous.',
          'Explains that keeping a familiar unhappy lifestyle feels advantageous because it preserves predictability and shields the person from the unknown anxiety of change.',
        ],
        modelExplanation:
          'Just as 18°C well water feels icy in summer and warm in winter, our objective life history is constant, but our "lifestyle"—the lens of self and world we chose in childhood—determines what meaning we give it. Even when someone complains that they hate their current lifestyle, they cling to it because, in the Greek sense of agathon (beneficial for survival), their current unhappiness is a known quantity. They know exactly how to navigate their familiar misery, whereas choosing a new lifestyle plunges them into an unpredictable future where they might get hurt.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbd-n-teleology',
        label: 'Adlerian Teleology',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The psychological doctrine that human behavior, emotions, and symptoms are engineered to serve present goals rather than caused by past events.',
        formulaOrRule: 'Present_Goal -> Symptom_Fabrication + Memory_Selection',
        whyItMatters:
          'Restores 100% present agency by proving that individuals are not deterministic prisoners of their past.',
      },
      {
        id: 'ctbd-n-etiology',
        label: 'Freudian Etiology',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'The deterministic model attributing present psychological suffering to past childhood traumas and environmental causes.',
        formulaOrRule: 'Past_Trauma(t - k) -> Present_Neurosis(t)',
        whyItMatters:
          'Acts as a seductive consolation trap that absolves individuals of responsibility at the cost of their ability to change.',
      },
      {
        id: 'ctbd-n-fabricated-emotion',
        label: 'Fabricated Emotions',
        category: 'architecture',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Affective states such as rage, panic, or anxiety generated on demand as instruments to coerce others or justify withdrawal.',
        formulaOrRule: 'Anger = Retractable_Coercion_Tool',
        whyItMatters:
          'Eliminates the excuse "I lost control of my emotions" and redirects conflict resolution toward rational dialogue.',
      },
      {
        id: 'ctbd-n-subjective-meaning',
        label: '18°C Subjective Meaning',
        category: 'data',
        chapterNumber: 1,
        importance: 2,
        definition:
          'The principle that humans inhabit a world of self-assigned meanings rather than raw objective measurements.',
        formulaOrRule: 'Experience = Meaning_Assigned(Objective_Datum, Present_Goal)',
        whyItMatters:
          'Allows a person to transform the impact of their unchangeable past simply by updating their present purpose.',
      },
      {
        id: 'ctbd-n-lifestyle',
        label: 'Adlerian Lifestyle',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The self-selected cognitive operating system combining self-concept and worldview, formed in childhood but editable at any moment.',
        formulaOrRule: 'Lifestyle = Self_Concept + Worldview',
        whyItMatters:
          'Reframes personality from an immutable birth trait into an ongoing decision.',
      },
      {
        id: 'ctbd-n-courage-to-change',
        label: 'Psychology of Courage',
        category: 'optimization',
        chapterNumber: 1,
        importance: 1,
        definition:
          'The willingness to abandon the predictable safety of familiar unhappiness (agathon) and step into an unscripted future.',
        formulaOrRule: 'Change = Discard_Safe_Unhappiness + Accept_Unknown_Future',
        whyItMatters:
          'Identifies courage—not raw ability or past healing—as the sole catalyst for human transformation.',
      },
    ],
    edges: [
      {
        source: 'ctbd-n-teleology',
        target: 'ctbd-n-etiology',
        relationship: 'trades_off_with',
        explanation:
          'Teleology replaces past-cause determinism with present-goal agency, sacrificing victim consolation for freedom.',
      },
      {
        source: 'ctbd-n-teleology',
        target: 'ctbd-n-fabricated-emotion',
        relationship: 'prerequisite_for',
        explanation:
          'Understanding teleology reveals how emotions like anger and anxiety are fabricated to serve immediate interpersonal goals.',
      },
      {
        source: 'ctbd-n-subjective-meaning',
        target: 'ctbd-n-lifestyle',
        relationship: 'part_of',
        explanation:
          'Assigning subjective meaning to objective events is the core runtime operation of an individual’s lifestyle.',
      },
      {
        source: 'ctbd-n-courage-to-change',
        target: 'ctbd-n-lifestyle',
        relationship: 'optimizes',
        explanation:
          'Exercising the courage to abandon safe unhappiness allows an individual to select a new lifestyle in the present.',
      },
      {
        source: 'ctbd-n-courage-to-change',
        target: 'ctbd-n-fabricated-emotion',
        relationship: 'mitigates',
        explanation:
          'When a person chooses the courage to face reality directly, they no longer need to manufacture defensive symptoms.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 12,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 12 dialogue sub-themes of The First Night: the shut-in friend, Freudian etiology vs. Adlerian teleology, waiter coffee spill and mother-daughter phone call proving fabricated anger, 18°C well water subjective meaning, Socrates agathon, and lifestyle choice.',
  },
};

export const ctbdCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'The Second Night: All Problems Are Interpersonal Relationship Problems',
  subtitle: 'Inferiority vs. Complex, Life-Lies, Power Struggles, and the Three Tasks of Life',
  readingTimeMinutes: 9,
  sourceWordCount: 9861,
  executiveThesis:
    'Every human worry—even solitary self-disgust—is an interpersonal relationship problem engineered to avoid being hurt by others. Healthy growth relies on the pursuit of superiority coupled with subjective feelings of inferiority as a stimulus, whereas the inferiority complex and superiority complex are "life-lies" born from viewing the world as a vertical arena of enemies rather than a horizontal community of comrades.',
  paradigmShift: {
    oldWay:
      'Internalized Defect & Vertical Competition: Viewing feelings of inferiority as objective personal defects and treating human society as a vertical hierarchy of winners and losers where one must dominate or boast to survive.',
    newWay:
      'Interpersonal Teleology & Horizontal Comradehood: Recognizing self-hatred and complexes as strategic excuses to evade life tasks, and stepping off the vertical axis of competition onto a horizontal plane where all people are "equal but not the same."',
    whyItChanged:
      'As long as you inhabit a competitive vertical hierarchy, every triumph breeds terror of being overtaken and every setback triggers power struggles or revenge, making genuine peace of mind structurally impossible.',
  },
  customDiagrams: [
    {
      id: 'ctbd-ch02-svg-01',
      title: 'Pursuit of Superiority vs. Inferiority & Superiority Complexes',
      subtitle: 'How the universal human drive to improve splits into healthy growth or three tiers of defensive "life-lies"',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">FEELING OF INFERIORITY: CATALYST FOR GROWTH VS. THE LIFE-LIE COMPLEXES</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Subjective value judgment ("I am 155cm") bifurcates based on interpersonal courage</text>

  <!-- Root Node: Subjective Feeling of Inferiority -->
  <rect x="36" y="160" width="196" height="110" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="52" y="188" fill="#38bdf8" font-size="12" font-weight="700">UNIVERSAL STARTING POINT</text>
  <text x="52" y="210" fill="#f8fafc" font-size="14" font-weight="700">Feeling of Inferiority</text>
  <text x="52" y="232" fill="#94a3b8" font-size="11">Subjective comparison against</text>
  <text x="52" y="248" fill="#94a3b8" font-size="11">an ideal state (not a defect)</text>

  <!-- Branch 1: Healthy Pursuit -->
  <path d="M 232 190 L 310 124" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="306,120 317,118 313,128" fill="#10b981" />

  <rect x="318" y="84" width="446" height="96" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="338" y="110" fill="#6ee7b7" font-size="13" font-weight="700">HEALTHY PATH: PURSUIT OF SUPERIORITY (GROWTH)</text>
  <text x="338" y="132" fill="#f8fafc" font-size="12">Uses insufficiency as fuel for effort &amp; self-improvement ("one step forward")</text>
  <text x="338" y="152" fill="#94a3b8" font-size="11">Example: Reframing 155cm height as a warm trait that helps others relax and open up.</text>

  <!-- Branch 2: Inferiority Complex -->
  <path d="M 232 230 L 310 250" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="309,245 318,252 307,255" fill="#f59e0b" />

  <rect x="318" y="202" width="208" height="190" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="334" y="228" fill="#fcd34d" font-size="12" font-weight="700">INFERIORITY COMPLEX</text>
  <text x="334" y="248" fill="#f8fafc" font-size="12" font-weight="600">"Because of A, I cannot B"</text>
  <text x="334" y="270" fill="#94a3b8" font-size="11">Turns subjective feeling into</text>
  <text x="334" y="286" fill="#94a3b8" font-size="11">an apparent causal excuse</text>
  <text x="334" y="302" fill="#94a3b8" font-size="11">("life-lie") to evade effort:</text>
  <text x="334" y="324" fill="#e2e8f0" font-size="11">• "Uneducated -&gt; Can't succeed"</text>
  <text x="334" y="342" fill="#e2e8f0" font-size="11">• "Blushing -&gt; Can't confess love"</text>
  <text x="334" y="360" fill="#fca5a5" font-size="11">Real goal: Avoid rejection.</text>

  <!-- Arrow from Inferiority Complex to Superiority Complex -->
  <path d="M 526 297 L 558 297" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4" />
  <polygon points="558,292 568,297 558,302" fill="#ef4444" />

  <!-- Branch 3: Superiority Complex -->
  <rect x="568" y="202" width="196" height="190" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="584" y="228" fill="#fca5a5" font-size="12" font-weight="700">SUPERIORITY COMPLEX</text>
  <text x="584" y="248" fill="#f8fafc" font-size="12" font-weight="600">Compensatory Mask</text>
  <text x="584" y="270" fill="#94a3b8" font-size="11">When bearing the inferiority</text>
  <text x="584" y="286" fill="#94a3b8" font-size="11">complex is too painful, fake</text>
  <text x="584" y="302" fill="#94a3b8" font-size="11">superiority via two tactics:</text>
  <text x="584" y="324" fill="#e2e8f0" font-size="11">1. Borrowed Authority / Boast</text>
  <text x="584" y="342" fill="#e2e8f0" font-size="11">2. Bragging of Misfortune</text>
  <text x="584" y="360" fill="#fca5a5" font-size="11">(Ruling others via weakness)</text>
</svg>`,
      bierutCaption:
        'A feeling of inferiority is a healthy catalyst for growth until a person weaponizes it into an "A blocks B" alibi (inferiority complex) or masks it by boasting about status or misfortune (superiority complex).',
      annotations: [
        {
          step: '01',
          label: 'Subjective Value vs. Objective Fact',
          explanation:
            'Measuring 155cm is a neutral physical fact; inferiority exists only when comparing oneself vertically against others.',
        },
        {
          step: '02',
          label: 'Apparent Causality ("Because of A, I Cannot B")',
          explanation:
            'The inferiority complex treats a manageable trait (low education, blushing) as an iron barrier to avoid stepping forward.',
        },
        {
          step: '03',
          label: 'Tyranny of Weakness',
          explanation:
            'Parading trauma or misfortune is a reverse superiority complex designed to make oneself "special" and silence critics.',
        },
      ],
    },
    {
      id: 'ctbd-ch02-svg-02',
      title: 'Stepping Off the Vertical Axis of Competition into Adler’s Tasks of Life',
      subtitle: 'How abandoning interpersonal competition transforms enemies into comrades across Work, Friendship, and Love',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a" />
  <text x="36" y="40" fill="#f8fafc" font-size="18" font-weight="700">FROM VERTICAL COMPETITION ("ENEMIES") TO HORIZONTAL TASKS ("COMRADES")</text>
  <text x="36" y="62" fill="#94a3b8" font-size="12">Exiting the power-struggle and revenge loop to confront the Three Tasks of Life</text>

  <!-- Left Panel: Vertical Competition Trap -->
  <rect x="36" y="84" width="330" height="304" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
  <text x="56" y="112" fill="#fca5a5" font-size="13" font-weight="700">VERTICAL AXIS: COMPETITION</text>
  <text x="56" y="132" fill="#94a3b8" font-size="11">Worldview: "Everyone is an enemy looking to attack"</text>

  <rect x="60" y="150" width="282" height="58" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="76" y="172" fill="#f8fafc" font-size="12" font-weight="600">Stage 1: Winner vs. Loser Anxiety</text>
  <text x="76" y="192" fill="#94a3b8" font-size="11">Cannot celebrate others' joy; fear of losing</text>

  <path d="M 201 208 L 201 228" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="60" y="228" width="282" height="58" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="76" y="250" fill="#f8fafc" font-size="12" font-weight="600">Stage 2: Power Struggle</text>
  <text x="76" y="270" fill="#94a3b8" font-size="11">Provocations, personal attacks &amp; domination</text>

  <path d="M 201 286 L 201 306" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3" />

  <rect x="60" y="306" width="282" height="62" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2" />
  <text x="76" y="328" fill="#fca5a5" font-size="12" font-weight="600">Stage 3: Revenge Phase</text>
  <text x="76" y="348" fill="#94a3b8" font-size="11">Self-harm or withdrawal to punish the</text>
  <text x="76" y="362" fill="#94a3b8" font-size="11">victor ("Admitting a mistake != defeat")</text>

  <!-- Center Transition Arrow -->
  <path d="M 366 236 L 424 236" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />
  <polygon points="424,230 436,236 424,242" fill="#38bdf8" />
  <text x="372" y="222" fill="#38bdf8" font-size="10" font-weight="700">STEP OFF</text>

  <!-- Right Panel: Horizontal Comradehood & Life Tasks -->
  <rect x="436" y="84" width="328" height="304" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="456" y="112" fill="#6ee7b7" font-size="13" font-weight="700">HORIZONTAL AXIS: EQUALITY</text>
  <text x="456" y="132" fill="#94a3b8" font-size="11">"Equal but not the same" — People are comrades</text>

  <rect x="456" y="148" width="288" height="62" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="472" y="170" fill="#38bdf8" font-size="12" font-weight="700">2 Behavioral + 2 Psychological Goals</text>
  <text x="472" y="188" fill="#e2e8f0" font-size="11">• Self-Reliance &amp; Harmony with Society</text>
  <text x="472" y="202" fill="#e2e8f0" font-size="11">• "I have ability" &amp; "People are my comrades"</text>

  <text x="456" y="232" fill="#fcd34d" font-size="12" font-weight="700">THE THREE TASKS OF LIFE (DISTANCE &amp; DEPTH)</text>

  <rect x="456" y="242" width="288" height="38" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="472" y="266" fill="#f8fafc" font-size="11" font-weight="600">1. Tasks of Work (Shared Outcome Threshold)</text>

  <rect x="456" y="288" width="288" height="38" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="472" y="312" fill="#f8fafc" font-size="11" font-weight="600">2. Tasks of Friendship (Personal Trust Beyond Work)</text>

  <rect x="456" y="334" width="288" height="38" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="472" y="358" fill="#f8fafc" font-size="11" font-weight="600">3. Tasks of Love (Zero-Distance Intimacy &amp; Family)</text>
</svg>`,
      bierutCaption:
        'Staying on the vertical axis of competition traps a person in power struggles and revenge, whereas stepping onto the horizontal plane compares you only to your own ideal and unlocks the Tasks of Work, Friendship, and Love.',
      annotations: [
        {
          step: '01',
          label: 'The Competitive Paranoia Loop',
          explanation:
            'When you judge human worth by winning or losing, even a friend’s marriage or promotion feels like a personal defeat.',
        },
        {
          step: '02',
          label: 'Stepping Off the Court',
          explanation:
            'Admitting a mistake is not "defeat" once you refuse to play on the vertical scoreboard of superiority and inferiority.',
        },
        {
          step: '03',
          label: 'Confronting the Life Tasks',
          explanation:
            'Fulfilling the two behavioral and two psychological objectives occurs solely by engaging the Tasks of Work, Friendship, and Love.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'ctbd-ch02-mm-01',
      name: 'Self-Disgust as an Interpersonal Shield',
      tagline: 'Hating yourself is a preemptive strategy to avoid being rejected by others.',
      naiveIntuition:
        'Disliking your own personality or blushing face is a purely internal, solitary struggle that persists even if nobody else is watching.',
      firstPrinciplesReality:
        'In a universe with zero other people, inferiority and shyness cannot exist; the student with a blushing phobia needs the symptom so that if she is rejected or never confesses her feelings, she can tell herself "It is only because of my blushing," keeping her core ego unbruised.',
      howToApply:
        'When obsessing over your flaws, ask: "Which specific interpersonal relationship am I avoiding entering by keeping this flaw at the center of my attention?"',
    },
    {
      id: 'ctbd-ch02-mm-02',
      name: 'The "Tyranny of Weakness" (Reverse Superiority Complex)',
      tagline: 'Bragging about misfortune weaponizes fragility to control everyone in the room.',
      naiveIntuition:
        'People who constantly recount their tragic upbringing, chronic illnesses, or repeated betrayals are humble and weighed down by inferiority.',
      firstPrinciplesReality:
        'Just as a newborn infant rules its robust parents through sheer helplessness, adults who parade their misfortune are executing a superiority complex: they make themselves "special" through suffering so that everyone must handle them like a fragile tumour and never criticize them.',
      howToApply:
        'Refuse to use personal hardship as a badge of moral immunity or leverage in conversations, and recognize when others use victimhood to dominate a group.',
    },
    {
      id: 'ctbd-ch02-mm-03',
      name: 'Horizontal Walking ("Equal But Not the Same")',
      tagline: 'Healthy progress means walking one step ahead of your own past self on a flat plain, not climbing over rivals.',
      naiveIntuition:
        'Without fierce competition against peers, people lose motivation and stagnate in mediocrity.',
      firstPrinciplesReality:
        'Human beings have different roles, ages, and skills, yet stand on a single flat horizontal plane of equal human worth; true pursuit of superiority compares your present self only against your own ideal image, transforming peers from menacing rivals into supportive comrades.',
      howToApply:
        'Test your orientation whenever a peer succeeds: if you cannot sincerely celebrate their blessing, diagnose yourself as trapped in vertical competition and consciously reset your benchmark to your own yesterday.',
    },
  ],
  deepSections: [
    {
      id: 'ctbd-ch02-ds-01',
      sectionNumber: '2.1',
      title: 'Why All Problems Are Interpersonal Relationship Problems',
      subtitle: 'Deconstructing Self-Hatred and the Blushing Phobia as Social Defence',
      coreMechanism:
        'Adler posits a sweeping categorical law: all human problems are interpersonal relationship problems. Even when a person insists they are suffering from a purely internal torment—such as hating their own personality or agonizing over a blushing phobia—loneliness and self-evaluation exist solely in the presence of other people. If you were the last human alive in the universe, concepts of shyness, ugliness, or inadequacy would evaporate instantly.\n\nWhy, then, does the Youth obsess over his flaws, or why does the female student manufacture a blushing phobia? Their shared goal is to avoid being hurt in interpersonal relationships through rejection or indifference. By magnifying her blushing—or by the Youth finding only shortcomings in himself—each creates a defensive moat against intimacy, preserving the comforting illusion that "if only this symptom disappeared, I could easily succeed and be loved."',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Fear of Interpersonal Rejection',
          detail:
            'The individual dreads the pain of confessing love or stepping into close relationships and being turned down.',
        },
        {
          step: '02',
          title: 'Construct Self-Disgust or a Somatic Symptom',
          detail:
            'The person fixates on self-loathing or a blushing phobia as a barrier that prevents approaching others.',
        },
        {
          step: '03',
          title: 'Preserve the Conditional Fantasy ("If Only")',
          detail:
            'As long as the symptom remains, the person never risks rejection and can live inside the safe possibility of "what might have been."',
        },
      ],
      keyTakeaways: [
        'To get rid of all your problems altogether, you would have to live alone in an empty universe—which is impossible.',
        'A cure that removes a patient’s blushing phobia without addressing her fear of rejection would leave her even more terrified to step forward.',
        'Resolving not to be liked by others via self-hatred is a preemptive strike to avoid the pain of reaching out and being spurned.',
      ],
      commonPitfalls: [
        'Attempting to fix self-esteem in isolation through solitary affirmations rather than stepping directly into interpersonal relationships.',
        'Treating shyness or self-consciousness as a badge of sensitivity rather than a defensive shield against rejection.',
      ],
    },
    {
      id: 'ctbd-ch02-ds-02',
      sectionNumber: '2.2',
      title: 'Inferiority Feeling vs. Inferiority Complex vs. Superiority Complex',
      subtitle: 'Apparent Causality, Borrowed Authority, and the Tyranny of Misfortune',
      coreMechanism:
        'Adlerian psychology draws a razor-sharp boundary between the German Minderwertigkeitsgefühl (feeling of inferiority) and the Inferiority Complex. A feeling of inferiority is a subjective value judgment comparing one’s current state to an ideal; when Adler’s friend pointed out that Adler’s 155cm height had the gift of making others relax, the objective measurement stayed identical while the subjective inferiority vanished. Paired with the universal "pursuit of superiority" (the drive to take one step forward), a feeling of inferiority is a healthy stimulus for growth.\n\nAn inferiority complex, by contrast, occurs when someone uses that feeling as an excuse through "apparent causality": declaring "Because I am uneducated (A), I cannot succeed (B)." When bearing that inferiority complex becomes too humiliating, the person compensates with a superiority complex—either by flaunting borrowed authority (name-dropping, designer brands, past glories) or by bragging about personal misfortune to rule others through weakness like an infant.',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Experience Subjective Insufficiency',
          detail:
            'Notice a gap between your current ability and your ideal state—a normal human experience shared by everyone.',
        },
        {
          step: '02',
          title: 'Avoid the Apparent Causality Trap ("A Blocks B")',
          detail:
            'Refuse to forge a fake causal link ("Because my parents divorced, I cannot marry") that turns a trait into an alibi.',
        },
        {
          step: '03',
          title: 'Convert the Gap into Forward Effort',
          detail:
            'Channel the feeling of insufficiency into concrete study, practice, or reframing, without boasting of authority or misfortune.',
        },
      ],
      formulas: [
        {
          name: 'Apparent Causality vs. Healthy Growth',
          expression:
            'Inferiority_Complex: Trait(A) ==> Impossible(B)   |   Healthy_Growth: Gap(Ideal - Current) ==> Effort(+1 Step)',
          intuition:
            'An inferiority complex fabricates a deterministic wall between a personal condition and a life task, whereas healthy pursuit of superiority converts the gap between current and ideal states into forward motion.',
          variables: [
            {
              symbol: 'Trait(A)',
              meaning: 'Any objective personal condition (education level, height, appearance, family background).',
            },
            {
              symbol: 'Impossible(B)',
              meaning: 'The evaded life task (career effort, marriage, friendship) declared unreachable because of A.',
            },
            {
              symbol: 'Gap(Ideal - Current)',
              meaning: 'Subjective comparison against one’s own ideal self on a horizontal plane.',
            },
          ],
          workedExample:
            'Instead of saying "Because I am only 155cm tall (A), I cannot command respect (B)," Adler reframes 155cm as an approachable presence that dissolves tension in clients and colleagues.',
        },
      ],
      keyTakeaways: [
        'An inferiority complex is not an intense feeling of inferiority; it is the act of using your insufficiency as a causal excuse to avoid life tasks.',
        'Those who boast about their credentials or famous acquaintances are suffering from a strong feeling of inferiority masked by a superiority complex.',
        'In our culture, weakness can be extraordinarily strong and powerful: parading misfortune turns fragility into a weapon that silences everyone around you.',
      ],
      commonPitfalls: [
        'Using the phrase "inferiority complex" casually to mean low self-confidence, which obscures its true nature as a purposeful excuse.',
        'Rewarding chronic "misfortune bragging" with endless deference, which traps the sufferer in the belief that they are only valued when miserable.',
      ],
    },
    {
      id: 'ctbd-ch02-ds-03',
      sectionNumber: '2.3',
      title: 'Exiting Competition, Power Struggles, and Confronting the Life Tasks',
      subtitle: 'Moving from Enemies to Comrades Across Work, Friendship, and Love',
      coreMechanism:
        'When you structure your interpersonal relationships around competition, you inevitably judge every human interaction in terms of victory and defeat. Soon, the success of a peer triggers envy rather than celebration, and the entire world starts to look like a pack of enemies waiting to pounce on your first mistake. Within this competitive frame, any interpersonal friction escalates into a "power struggle" to dominate the other party; if you lose that struggle, you drop into the "revenge stage," plotting passive-aggressive retaliation or self-harm to torment the victor.\n\nThe only cure is to step off the competitive schema altogether onto a horizontal plane where people are "equal but not the same." Once you stop viewing admitting a mistake as "defeat," others transform from rivals into comrades, allowing you to confront Adler’s Three Tasks of Life—Work, Friendship, and Love—without running away into what Adler calls the "life-lie."',
      stepByStepFlow: [
        {
          step: '01',
          title: 'Refuse the Power Struggle Invitation',
          detail:
            'When someone hurls a personal attack or provocation, recognize their hidden goal to dominate and refuse to step into their ring.',
        },
        {
          step: '02',
          title: 'Separate Being Wrong from Being Defeated',
          detail:
            'On a horizontal plane with no winners or losers, acknowledging an error is simply updating reality, not surrendering status.',
        },
        {
          step: '03',
          title: 'Engage Work, Friendship, and Love Directly',
          detail:
            'Stop manufacturing faults in colleagues, friends, or partners as pretexts to flee intimacy (the "life-lie") and face your life tasks head-on.',
        },
      ],
      keyTakeaways: [
        'Adler defines two behavioral objectives (self-reliance and living in harmony with society) supported by two psychological objectives ("I have the ability" and "people are my comrades").',
        'Among the Three Tasks of Life, Work has the lowest interpersonal threshold, Friendship requires broader personal trust, and Love is the most difficult because it forbids distrust and eliminates distance.',
        'Adlerian psychology is a psychology of courage that refuses to attribute your evasions ("life-lies") to others or to your environment.',
      ],
      commonPitfalls: [
        'Thinking you must "win" an argument to prove you are right; the moment you care about winning, you have entered a power struggle.',
        'Suddenly finding a hundred petty flaws in a romantic partner simply because you have subconsciously resolved to break off the relationship out of fear of deeper intimacy.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Adler’s Three Tasks of Life & Relational Distance Matrix',
      description:
        'Mapping the interpersonal distance, governing glue, evasion life-lies, and mastery requirements across Work, Friendship, and Love.',
      headers: [
        'Life Task',
        'Interpersonal Distance & Glue',
        'Common Evasion ("Life-Lie")',
        'First-Principles Mastery Requirement',
      ],
      rows: [
        [
          '1. Tasks of Work',
          'Wide distance; bound by shared objective outcomes & division of labor',
          'NEET withdrawal or workaholism used to evade family/social tasks',
          'Cooperate reliably with colleagues regardless of personal affinity',
        ],
        [
          '2. Tasks of Friendship',
          'Medium distance; no external contract forces the bond',
          'Counting superficial contacts while keeping everyone at arm’s length',
          'Build deep horizontal camaraderie with even a few trusted equals',
        ],
        [
          '3. Tasks of Love ( & Parenthood)',
          'Zero distance; deepest lifelong commitment with no exit clause',
          'Inventing partner flaws or stalking (revenge) to avoid vulnerability',
          'Discard all competitive scorekeeping and build unconditional "Us" trust',
        ],
      ],
      verdictRule:
        'Evaluate your interpersonal courage not by how many business cards you collect at work, but by the depth and horizontal equality of your closest Friendship and Love relationships.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'ctbd-ch02-sc-01',
      title: 'De-escalating a Cross-Team Architecture Power Struggle',
      roleAndContext:
        'During an incident post-mortem, a platform team lead publicly mocks a product engineer’s database query, attempting to provoke a heated argument over which team is more competent.',
      symptomOrFailure:
        'If the product engineer retaliates in kind, the post-mortem degenerates into a tribal power struggle and subsequent passive-aggressive "revenge" (blocking PRs across teams).',
      naiveFixAndWhyItFails:
        'Preparing a counter-dossier of the platform team’s past outages to "win" the post-mortem; this fails because winning the argument locks both teams deeper into vertical competition and triggers the revenge stage.',
      firstPrinciplesSolution:
        'Diagnose the provocation as an invitation to a power struggle and step off the court entirely. Acknowledge the query inefficiency calmly without treating error admission as "defeat," and pivot immediately to the shared Work Task of automated query linting.',
      measurableOutcome:
        'Without a counter-punch to push against, the platform lead’s aggression collapses immediately, and both teams ship the query guardrail within one sprint.',
    },
    {
      id: 'ctbd-ch02-sc-02',
      title: 'Dismantling the "No Elite Degree" Inferiority Complex in Career Growth',
      roleAndContext:
        'A mid-level developer from a non-traditional bootcamp background refuses to apply for staff engineer roles while simultaneously bragging in Slack about how little sleep he gets fixing legacy bugs.',
      symptomOrFailure:
        'He stagnates at mid-level while resenting Ivy League hires and dominating team standups with tales of his martyrdom ("bragging about misfortune").',
      naiveFixAndWhyItFails:
        'Reassuring him that degrees do not matter while praising his late-night heroics; this fails because it feeds his reverse superiority complex (being "special" through suffering) and leaves his core evasion intact.',
      firstPrinciplesSolution:
        'Expose the apparent causality ("Because I lack a CS degree [A], I cannot pass the staff bar [B]") as an Adlerian life-lie engineered to avoid the risk of failing the staff promotion review. Replace vertical comparison against peers with a horizontal 90-day skill roadmap measured strictly against his own current baseline.',
      measurableOutcome:
        'The developer stops parading late-night martyrdom, completes a high-leverage distributed systems migration, and earns staff promotion within two cycles.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'ctbd-ch02-q01',
        scenarioPrompt:
          'Why does the Philosopher tell the student with a blushing phobia that he "cannot cure" her blushing?',
        options: [
          {
            label: 'A',
            text: 'Blushing is a permanent physiological vascular condition beyond the reach of psychology.',
            isCorrect: false,
            explanation:
              'The Philosopher is not making a medical claim; he is addressing the teleological purpose of the symptom.',
          },
          {
            label: 'B',
            text: 'She needs the blushing phobia as a protective excuse so that she can avoid the terror of confessing her love and being rejected, while telling herself "I could do it if only I didn’t blush."',
            isCorrect: true,
            explanation:
              'If the symptom were magically removed while her fear of rejection remained, she would be even more distressed; the cure comes from building the courage to step into relationships as she is.',
          },
          {
            label: 'C',
            text: 'Adlerian counsellors are forbidden from treating romantic relationship issues.',
            isCorrect: false,
            explanation:
              'Love is one of the Three Tasks of Life central to Adlerian counselling.',
          },
          {
            label: 'D',
            text: 'She must first take medication to suppress her autonomic nervous system.',
            isCorrect: false,
            explanation:
              'Suppressing the symptom leaves the underlying interpersonal evasion untouched.',
          },
        ],
      },
      {
        id: 'ctbd-ch02-q02',
        scenarioPrompt:
          'How does Adlerian psychology distinguish a "feeling of inferiority" from an "inferiority complex"?',
        options: [
          {
            label: 'A',
            text: 'A feeling of inferiority is mild, whereas an inferiority complex is an extreme, clinical version of the same feeling.',
            isCorrect: false,
            explanation:
              'The Philosopher explicitly warns against confusing the two as a difference in degree; they are structurally different concepts.',
          },
          {
            label: 'B',
            text: 'A feeling of inferiority is a natural subjective stimulus for growth, whereas an inferiority complex uses that feeling as a causal excuse ("Because of A, I cannot do B") to evade life tasks.',
            isCorrect: true,
            explanation:
              'Feeling insufficient compared to an ideal drives effort, but turning that feeling into "apparent causality" to justify inaction is an inferiority complex.',
          },
          {
            label: 'C',
            text: 'A feeling of inferiority is an objective physical fact, whereas an inferiority complex is imaginary.',
            isCorrect: false,
            explanation:
              'Even a feeling of inferiority (e.g., about 155cm height) is a subjective interpretation, not an objective defect.',
          },
          {
            label: 'D',
            text: 'Only unhealthy people experience feelings of inferiority.',
            isCorrect: false,
            explanation:
              'Everyone who pursues superiority (growth) experiences feelings of inferiority as a normal catalyst.',
          },
        ],
      },
      {
        id: 'ctbd-ch02-q03',
        scenarioPrompt:
          'A colleague constantly steers conversations toward his painful childhood divorce, his chronic back pain, and how unfairly management treats him. How does Adler classify this behavior?',
        options: [
          {
            label: 'A',
            text: 'Healthy vulnerability that builds horizontal camaraderie.',
            isCorrect: false,
            explanation:
              'He is not building equal camaraderie; he is demanding special treatment.',
          },
          {
            label: 'B',
            text: 'A superiority complex disguised as bragging about misfortune, using weakness to become "special" and control those around him.',
            isCorrect: true,
            explanation:
              'By parading his misfortune, he places himself above criticism and forces everyone to handle him with kid gloves—a reverse superiority complex.',
          },
          {
            label: 'C',
            text: 'Pure Freudian catharsis that will eventually heal his wounds.',
            isCorrect: false,
            explanation:
              'Repeating the victim narrative entrenches the superiority-through-weakness lifestyle rather than healing it.',
          },
          {
            label: 'D',
            text: 'An objective inferiority that requires extra praise from peers.',
            isCorrect: false,
            explanation:
              'Treating him as fragile only reinforces his belief that he can only matter by staying wounded.',
          },
        ],
      },
      {
        id: 'ctbd-ch02-q04',
        scenarioPrompt:
          'What happens psychologically when a person views interpersonal relationships through the lens of vertical competition?',
        options: [
          {
            label: 'A',
            text: 'Even when winning, they cannot rest for fear of becoming a loser, and they begin viewing everyone in the world as an enemy.',
            isCorrect: true,
            explanation:
              'In a competitive hierarchy, another person’s success feels like your defeat, turning all humanity into rivals and breeding chronic distrust.',
          },
          {
            label: 'B',
            text: 'Once they reach the top of their profession, they naturally transition into feeling that people are their comrades.',
            isCorrect: false,
            explanation:
              'The Philosopher notes that even wildly successful social winners remain tormented by the fear of being overtaken as long as they stay in competition.',
          },
          {
            label: 'C',
            text: 'They easily admit mistakes because winners have high confidence.',
            isCorrect: false,
            explanation:
              'On the vertical axis, admitting a mistake is equated with "defeat," so competitive people fiercely resist admitting error.',
          },
          {
            label: 'D',
            text: 'They excel at the Task of Love because romance rewards competitive winners.',
            isCorrect: false,
            explanation:
              'Love requires zero-distance horizontal trust and fails whenever partners compete for dominance.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'ctbd-ch02-fc-01',
        category: 'foundation',
        front: 'What is Adler’s core axiom regarding the origin of all human worries?',
        back: 'All problems are interpersonal relationship problems; purely internal worries do not exist.',
        mentalHook: 'Alone in the universe, inferiority and shyness vanish.',
      },
      {
        id: 'ctbd-ch02-fc-02',
        category: 'evaluation',
        front: 'What is "apparent causality" in Adlerian psychology?',
        back: 'Treating a manageable personal trait as an insurmountable cause ("Because of A, I cannot do B") where no real causal barrier exists, in order to excuse oneself from a life task.',
        mentalHook: 'Turning a pebble on the road into an excuse not to walk.',
      },
      {
        id: 'ctbd-ch02-fc-03',
        category: 'architecture',
        front: 'What are the two forms of the Superiority Complex described in Chapter 2?',
        back: '1. Borrowing external authority (boasting of credentials, brands, or famous friends) and 2. Bragging about one’s own misfortune to rule others through weakness.',
        mentalHook: 'The peacock’s borrowed feathers and the tyrant infant’s tears.',
      },
      {
        id: 'ctbd-ch02-fc-04',
        category: 'optimization',
        front: 'How does Adler define healthy "pursuit of superiority" on a horizontal plane?',
        back: 'Moving one step forward compared to your own current self ("equal but not the same"), rather than trying to climb higher than other people.',
        mentalHook: 'Life is walking forward on a flat plain, not climbing a pyramid.',
      },
      {
        id: 'ctbd-ch02-fc-05',
        category: 'security',
        front: 'What is the only correct response when someone provokes you into a "power struggle"?',
        back: 'Step off their court entirely and refuse to react in kind, recognizing that admitting a mistake is not "defeat."',
        mentalHook: 'You cannot lose a boxing match if you refuse to climb into the ring.',
      },
      {
        id: 'ctbd-ch02-fc-06',
        category: 'adaptation',
        front: 'What are Adler’s two behavioral objectives, two psychological objectives, and Three Tasks of Life?',
        back: 'Behavioral: Self-reliance and living in harmony with society. Psychological: "I have the ability" and "People are my comrades." Tasks: Work, Friendship, and Love.',
        mentalHook: '2 Behaviors + 2 Beliefs achieved across Work, Friendship, and Love.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'ctbd-ch02-feyn-01',
        conceptTitle: 'Inferiority Feeling vs. Inferiority Complex vs. Superiority Complex',
        prompt:
          'Explain the exact difference between a healthy feeling of inferiority, an inferiority complex, and a superiority complex (including bragging about misfortune) using concrete examples.',
        rubricChecklist: [
          'Defines the feeling of inferiority as a subjective comparison against an ideal that acts as a healthy stimulus for growth (e.g., Adler’s 155cm height).',
          'Defines the inferiority complex via apparent causality: using a condition as an alibi ("Because of A, I cannot do B") to evade life tasks.',
          'Defines the superiority complex as compensating for unbearable inferiority by faking superiority through borrowed authority or boasting.',
          'Explains how bragging about misfortune is a reverse superiority complex that weaponizes weakness to make oneself "special" and control others.',
        ],
        modelExplanation:
          'A feeling of inferiority simply notices a gap between where you are and where you want to be; when paired with the pursuit of superiority, it fuels effort—or can be reframed entirely, like Adler realizing his 155cm height put people at ease. It turns into an inferiority complex when you forge "apparent causality" ("Because I lack a degree [A], I cannot succeed [B]") as an excuse to avoid trying. When that complex feels too painful, people mask it with a superiority complex—either by boasting about status symbols and famous connections, or by bragging about their own tragic misfortune so that everyone must treat them as special and fragile.',
      },
      {
        id: 'ctbd-ch02-feyn-02',
        conceptTitle: 'Vertical Competition vs. Horizontal Comradehood & Life-Lies',
        prompt:
          'Explain why living on a vertical axis of competition turns the world into a pack of enemies and triggers "life-lies" across the Tasks of Work, Friendship, and Love.',
        rubricChecklist: [
          'Explains how vertical competition measures worth by winning and losing, making another person’s joy feel like your defeat.',
          'Traces the escalation from competition to power struggles and the revenge phase.',
          'Contrasts vertical hierarchy with horizontal equality ("equal but not the same"), where progress is measured against one’s own past self.',
          'Defines "life-lies" as fabricated pretexts (like inventing flaws in a partner) used to flee the Tasks of Work, Friendship, and Love.',
        ],
        modelExplanation:
          'When you view relationships through vertical competition, every interaction has a winner and a loser. Even if you win today, you live in terror of being overtaken tomorrow, so you cannot celebrate a friend’s success and soon view everyone as an enemy. Friction turns into a power struggle to dominate, or a revenge phase if you lose. Stepping onto a horizontal plane ("equal but not the same") means comparing yourself only to your own ideal and viewing others as comrades. Without that horizontal trust, people invent "life-lies"—like suddenly finding a hundred flaws in a partner—as excuses to run away from the Tasks of Work, Friendship, and Love.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'ctbd-n-interpersonal-axiom',
        label: 'Interpersonal Problem Axiom',
        category: 'foundation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Adler’s foundational law that 100% of human psychological problems—including solitary self-disgust—are interpersonal relationship problems.',
        formulaOrRule: 'Total_Problems == Interpersonal_Problems',
        whyItMatters:
          'Prevents futile attempts to solve self-esteem in isolation and directs focus to how one relates to others.',
      },
      {
        id: 'ctbd-n-inferiority-complex',
        label: 'Inferiority Complex (Apparent Causality)',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Using a subjective feeling of insufficiency as a deterministic excuse ("Because of A, I cannot do B") to evade a life task.',
        formulaOrRule: 'Excuse: Condition(A) -> Impossible_Task(B)',
        whyItMatters:
          'Exposes the "life-lie" behind self-limiting beliefs so the individual can resume forward effort.',
      },
      {
        id: 'ctbd-n-superiority-complex',
        label: 'Superiority Complex & Misfortune Bragging',
        category: 'architecture',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Compensating for an inferiority complex by flaunting borrowed authority or weaponizing personal misfortune to rule others via weakness.',
        formulaOrRule: 'Mask = Borrowed_Authority || Tyranny_of_Weakness',
        whyItMatters:
          'Reveals why both arrogant boasting and chronic victimhood stem from the exact same lack of courage.',
      },
      {
        id: 'ctbd-n-horizontal-equality',
        label: 'Horizontal Plane ("Equal But Not the Same")',
        category: 'optimization',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Stepping off the vertical hierarchy of winners and losers to view all humans as equal in worth while walking forward relative to one’s own past self.',
        formulaOrRule: 'Growth = Self(t + 1) > Self(t) [Zero Interpersonal Competition]',
        whyItMatters:
          'Transforms other people from threatening enemies into trusted comrades.',
      },
      {
        id: 'ctbd-n-power-struggle',
        label: 'Power Struggle & Revenge Loop',
        category: 'security',
        chapterNumber: 2,
        importance: 2,
        definition:
          'The two-stage competitive escalation where an individual first attempts to dominate an opponent and, if defeated, plots retaliation or self-harm.',
        formulaOrRule: 'Competition -> Power_Struggle -> Revenge_Stage',
        whyItMatters:
          'Recognizing the loop allows you to step off the court immediately and separate admitting error from defeat.',
      },
      {
        id: 'ctbd-n-tasks-of-life',
        label: 'The Three Tasks of Life',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'The unavoidable interpersonal arenas of Work, Friendship, and Love through which self-reliance and social harmony are realized.',
        formulaOrRule: 'Life_Tasks = {Work, Friendship, Love}',
        whyItMatters:
          'Provides concrete coordinates for diagnosing where a person is retreating into life-lies.',
      },
    ],
    edges: [
      {
        source: 'ctbd-n-interpersonal-axiom',
        target: 'ctbd-n-tasks-of-life',
        relationship: 'prerequisite_for',
        explanation:
          'Because all problems are interpersonal, Adler categorizes them directly into the relational arenas of Work, Friendship, and Love.',
      },
      {
        source: 'ctbd-n-inferiority-complex',
        target: 'ctbd-n-superiority-complex',
        relationship: 'prerequisite_for',
        explanation:
          'When an individual cannot bear the shame of an inferiority complex, they compensate by adopting a superiority complex.',
      },
      {
        source: 'ctbd-n-horizontal-equality',
        target: 'ctbd-n-power-struggle',
        relationship: 'mitigates',
        explanation:
          'Stepping off the vertical axis of competition onto a horizontal plane dissolves power struggles and revenge.',
      },
      {
        source: 'ctbd-n-horizontal-equality',
        target: 'ctbd-n-tasks-of-life',
        relationship: 'optimizes',
        explanation:
          'Viewing others as horizontal comrades supplies the courage required to engage Work, Friendship, and Love without life-lies.',
      },
      {
        source: 'ctbd-n-inferiority-complex',
        target: 'ctbd-n-tasks-of-life',
        relationship: 'trades_off_with',
        explanation:
          'Deploying an inferiority complex ("A blocks B") trades away real engagement in life tasks for the safety of avoidance.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 15,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers all 15 sections of The Second Night: self-disgust and blushing phobia, 155cm subjective inferiority, apparent causality inferiority complex, superiority complex & misfortune bragging, horizontal equality vs. vertical competition, power struggle & revenge, 2+2 objectives, Tasks of Work/Friendship/Love, and the life-lie.',
  },
};
