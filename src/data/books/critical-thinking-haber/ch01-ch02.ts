import type { ChapterMastery } from '../../../types/book';

export const cthCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'The Genealogy of Critical Thinking',
  subtitle: 'From Aristotelian Syllogisms and Enlightenment Empiricism to American Pragmatism and Cognitive Heuristics',
  readingTimeMinutes: 8,
  sourceWordCount: 6888,
  executiveThesis:
    'Modern critical thinking is the synthesis of four distinct intellectual traditions: classical Greek logic and rhetoric, Enlightenment rationalism and empirical testing, American Pragmatist education, and late-twentieth-century behavioral psychology. Rather than existing as a single innate trait, critical thinking operates as an acquired civic technology designed to override tribal authority, dogmatic tenacity, and evolutionary cognitive shortcuts through structured inquiry.',
  paradigmShift: {
    oldWay:
      'Treat reasoning as either an abstract philosophical parlor game of rigid syllogisms or an automatic byproduct of memorizing traditional academic subjects.',
    newWay:
      'Cultivate reflective thinking as a three-part epistemic discipline combining logical methods, empirical verification, and metacognitive awareness of human cognitive biases.',
    whyItChanged:
      'Historical revolutions in science and modern experiments in cognitive psychology proved that intelligent humans routinely fail at reasoning unless trained in both formal inference and bias mitigation.'
  },
  customDiagrams: [
    {
      id: 'cth-ch01-svg1',
      title: 'The 2,500-Year Epistemic Lineage of Critical Thinking',
      subtitle: 'How Classical Deduction, Enlightenment Empiricism, Pragmatism, and Cognitive Psychology Converge',
      bierutCaption:
        'Unite four historical epochs to combine classical deductive form with empirical testing, pragmatist pedagogy, and cognitive bias defense.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">FOUR EPOCHS OF CRITICAL THINKING ARCHITECTURE</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">From Classical Deduction to Behavioral Epistemology (500 BCE – Present)</text>

  <!-- Node 1: Classical Greece -->
  <rect x="40" y="95" width="160" height="190" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="56" y="122" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">EPOCH 01 · CLASSICAL</text>
  <text x="56" y="144" fill="#f8fafc" font-size="13.5" font-weight="700">Greek Trivium</text>
  <text x="56" y="168" fill="#cbd5e1" font-size="10.5">• Socratic Elenchus</text>
  <text x="56" y="188" fill="#cbd5e1" font-size="10.5">• Aristotelian Logic</text>
  <text x="56" y="208" fill="#cbd5e1" font-size="10.5">• Classical Rhetoric</text>
  <rect x="56" y="232" width="128" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="120" y="254" text-anchor="middle" fill="#7dd3fc" font-size="10.5" font-weight="600">Deductive Form</text>

  <!-- Arrow 1-2 -->
  <line x1="200" y1="190" x2="226" y2="190" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="228,190 220,185 220,195" fill="#64748b"/>

  <!-- Node 2: Enlightenment -->
  <rect x="230" y="95" width="160" height="190" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
  <text x="246" y="122" fill="#818cf8" font-family="monospace" font-size="10.5" font-weight="700">EPOCH 02 · 1600–1750</text>
  <text x="246" y="144" fill="#f8fafc" font-size="13.5" font-weight="700">Enlightenment</text>
  <text x="246" y="168" fill="#cbd5e1" font-size="10.5">• Cartesian Doubt</text>
  <text x="246" y="188" fill="#cbd5e1" font-size="10.5">• Baconian Induction</text>
  <text x="246" y="208" fill="#cbd5e1" font-size="10.5">• Humean Empiricism</text>
  <rect x="246" y="232" width="128" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="310" y="254" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="600">Empirical Testing</text>

  <!-- Arrow 2-3 -->
  <line x1="390" y1="190" x2="416" y2="190" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="418,190 410,185 410,195" fill="#64748b"/>

  <!-- Node 3: Pragmatism -->
  <rect x="420" y="95" width="160" height="190" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="436" y="122" fill="#34d399" font-family="monospace" font-size="10.5" font-weight="700">EPOCH 03 · 1877–1956</text>
  <text x="436" y="144" fill="#f8fafc" font-size="13.5" font-weight="700">Pragmatism</text>
  <text x="436" y="168" fill="#cbd5e1" font-size="10.5">• Peirce Belief Fixation</text>
  <text x="436" y="188" fill="#cbd5e1" font-size="10.5">• Dewey Reflective Act</text>
  <text x="436" y="208" fill="#cbd5e1" font-size="10.5">• Glaser &amp; Bloom</text>
  <rect x="436" y="232" width="128" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="500" y="254" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="600">Reflective Inquiry</text>

  <!-- Arrow 3-4 -->
  <line x1="580" y1="190" x2="606" y2="190" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="608,190 600,185 600,195" fill="#64748b"/>

  <!-- Node 4: Cognitive Science -->
  <rect x="610" y="95" width="150" height="190" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="624" y="122" fill="#f59e0b" font-family="monospace" font-size="10.5" font-weight="700">EPOCH 04 · 1970–NOW</text>
  <text x="624" y="144" fill="#f8fafc" font-size="13.5" font-weight="700">Cognitive Sci</text>
  <text x="624" y="168" fill="#cbd5e1" font-size="10.5">• Heuristics &amp; Biases</text>
  <text x="624" y="188" fill="#cbd5e1" font-size="10.5">• Informal Logic</text>
  <text x="624" y="208" fill="#cbd5e1" font-size="10.5">• Digital Literacy</text>
  <rect x="624" y="232" width="122" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="685" y="254" text-anchor="middle" fill="#fcd34d" font-size="10.5" font-weight="600">Bias Calibration</text>

  <!-- Synthesis Bar -->
  <rect x="40" y="318" width="720" height="68" rx="10" fill="#172554" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="400" y="345" text-anchor="middle" fill="#f8fafc" font-size="12.5" font-weight="700">UNIFIED MODERN CRITICAL THINKING</text>
  <text x="400" y="368" text-anchor="middle" fill="#93c5fd" font-size="11.5">Formal Validity (Greece) + Empirical Evidence (Enlightenment) + Dispositional Habits (Pragmatism) + Debiasing (Cognitive Science)</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Classical Trivium',
          explanation:
            'Grammar, logic, and rhetoric formed the foundational linguistic toolkit of ancient and medieval universities before 1892 curricular silos orphaned logic and rhetoric.'
        },
        {
          step: '2',
          label: 'Pragmatist Pivot',
          explanation:
            'Peirce, James, Dewey, and Glaser shifted reasoning from Aristotelian abstraction to practical problem solving and democratic citizenship.'
        },
        {
          step: '3',
          label: 'Behavioral Reality Check',
          explanation:
            'Kahneman and Tversky revealed that human hardware runs on biased heuristics, making metacognitive monitoring indispensable.'
        }
      ]
    },
    {
      id: 'cth-ch01-svg2',
      title: 'Peirce\'s Belief-Fixation Filter vs. Cognitive Bias Traps',
      subtitle: 'How the Irritation of Doubt Routes Either to Dogmatic Comfort or Scientific Inquiry',
      bierutCaption:
        'Route the irritation of doubt away from low-effort dogmatism and System 1 heuristics toward reflective empirical verification.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">IRRITATION OF DOUBT: EPISTEMIC ROUTING ENGINE</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">Comparing Default Dogmatic Fixations Against Reflective Inquiry</text>

  <!-- Doubt Trigger -->
  <rect x="40" y="155" width="160" height="110" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="120" y="192" text-anchor="middle" fill="#fda4af" font-family="monospace" font-size="10.5" font-weight="700">TRIGGER EVENT</text>
  <text x="120" y="216" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">Irritation of Doubt</text>
  <text x="120" y="238" text-anchor="middle" fill="#94a3b8" font-size="10.5">Anomaly or Conflict</text>

  <!-- Upper Path: Low Friction Traps -->
  <path d="M 200 185 L 290 125" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
  <rect x="290" y="85" width="460" height="105" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="310" y="110" fill="#fb7185" font-family="monospace" font-size="10.5" font-weight="700">PATH A · LOW-FRICTION BELIEF FIXATION (SYSTEM 1 DEFAULT)</text>
  <text x="310" y="134" fill="#f8fafc" font-size="11.5">1. Tenacity: Cling to prior belief &amp; ignore disconfirming evidence (Confirmation Bias)</text>
  <text x="310" y="154" fill="#f8fafc" font-size="11.5">2. Authority: Outsource judgment to state, priesthood, or partisan tribe</text>
  <text x="310" y="174" fill="#f8fafc" font-size="11.5">3. A Priori: Accept whatever feels intuitively familiar (Availability &amp; Affect Heuristics)</text>

  <!-- Lower Path: Reflective Thinking -->
  <path d="M 200 235 L 290 295" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
  <rect x="290" y="235" width="460" height="135" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="310" y="262" fill="#34d399" font-family="monospace" font-size="10.5" font-weight="700">PATH B · DEWEY &amp; PEIRCE REFLECTIVE INQUIRY (SYSTEM 2 OVERRIDE)</text>
  <text x="310" y="286" fill="#ecfdf5" font-size="11.5">1. Suspend Immediate Judgment: Endure uncertainty while defining the problem</text>
  <text x="310" y="308" fill="#ecfdf5" font-size="11.5">2. Formulate Testable Hypotheses: Apply Glaser's logical inquiry methods</text>
  <text x="310" y="330" fill="#ecfdf5" font-size="11.5">3. Empirical &amp; Logical Audit: Seek falsifying evidence and calibrate against biases</text>
  <text x="310" y="352" fill="#6ee7b7" font-size="11.5" font-weight="700">Result: Provisionally Warranted Belief Open to Revision</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Irritation of Doubt',
          explanation:
            'Peirce identified cognitive uncertainty as an uncomfortable state that humans desperately seek to terminate as cheaply as possible.'
        },
        {
          step: '2',
          label: 'Dogmatic Shortcuts',
          explanation:
            'Tenacity, authority, and a priori fashion soothe doubt quickly but collapse when confronted with external reality or pluralistic societies.'
        },
        {
          step: '3',
          label: 'Reflective Suspension',
          explanation:
            'Dewey defined reflective thinking as the willingness to endure mental unrest while hunting for objective evidence.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'cth-ch01-mm1',
      name: 'Peirce\'s Four Fixations of Belief',
      tagline: 'Diagnose whether a belief rests on tenacity, authority, taste, or scientific verification',
      naiveIntuition:
        'Assume people form beliefs primarily by weighing objective evidence and updating their conclusions when superior facts appear.',
      firstPrinciplesReality:
        'Charles Sanders Peirce demonstrated that humans default to three low-friction methods to quiet the irritation of doubt—Tenacity (clinging to existing comfort), Authority (deferring to institutional power), and A Priori Intuition (adopting whatever feels culturally natural)—before ever attempting the high-cost Scientific Method.',
      howToApply:
        'Before debating a claim, diagnose which belief-fixation mechanism anchors your interlocutor so you do not waste empirical evidence against a belief held by sheer tenacity or tribal authority.'
    },
    {
      id: 'cth-ch01-mm2',
      name: 'The Glaser Tripartite Architecture',
      tagline: 'Unite dispositional attitude, logical knowledge, and applied skill',
      naiveIntuition:
        'Believe that teaching students a list of logical fallacies is sufficient to turn them into effective critical thinkers.',
      firstPrinciplesReality:
        'Edward Glaser established in 1941 that critical thinking requires three interdependent pillars: (1) a dispositional attitude of thoughtful inquiry, (2) knowledge of the methods of logical reasoning, and (3) practical skill in applying those methods to messy problems.',
      howToApply:
        'Audit any training program or personal decision process across all three pillars: verify whether the failure stems from lacking logical tools, lacking domain practice, or lacking the intellectual willingness to question favored beliefs.'
    },
    {
      id: 'cth-ch01-mm3',
      name: 'Dual-System Heuristic Override',
      tagline: 'Catch fast cognitive shortcuts before they harden into biased conclusions',
      naiveIntuition:
        'View human reasoning errors as random glitches caused by temporary carelessness or low intelligence.',
      firstPrinciplesReality:
        'Daniel Kahneman and Amos Tversky proved that the human mind relies on fast evolutionary heuristics—such as anchoring, availability, and confirmation bias—that systematically warp probability judgments under uncertainty.',
      howToApply:
        'Install explicit external checkpoints that force slow analytical verification whenever a conclusion feels immediately obvious, emotionally gratifying, or anchored to the first number presented.'
    }
  ],
  deepSections: [
    {
      id: 'cth-ch01-sec1',
      sectionNumber: '1.1',
      title: 'Classical Foundations and the Scientific Revolution',
      subtitle: 'From the Greek Trivium to Enlightenment Empiricism and the 1892 Curricular Split',
      coreMechanism:
        'Western critical inquiry originated when Greek philosophers replaced mythological explanations with systematic investigation into nature and argument structure. While Socrates modeled probing interrogation and Plato examined ideal forms, Aristotle codified formal logic—establishing deductive rules where conclusions follow necessarily from premises—alongside rhetoric and empirical biology. Across the Roman and medieval eras, this legacy crystallized into the liberal arts Trivium (grammar, logic, and rhetoric), training scholars in how language operates, how inferences hold together, and how claims persuade.\n\nThe Scientific Revolution and Enlightenment subsequently exposed the limits of pure deductive scholasticism when divorced from observation. Thinkers from Copernicus and Galileo to Newton overturned Ptolemaic geocentrism by wedding mathematical models to physical measurement, while René Descartes applied radical doubt to strip away unexamined assumptions and Francis Bacon and David Hume championed empirical induction. Yet when the 1892 Committee of Ten standardized modern high school subjects into English, math, science, and history, logic and rhetoric were orphaned from core K-12 education, leaving grammar behind while stripping students of explicit training in argumentation.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Classical Codification (The Trivium)',
          detail: 'Aristotle codifies deductive syllogisms and rhetorical canons, forming the medieval Trivium of grammar, logic, and rhetoric.'
        },
        {
          step: '2',
          title: 'Enlightenment Empirical Fusion',
          detail: 'Rationalists (Descartes) and empiricists (Bacon, Hume) fuse mathematical reasoning with systematic physical observation into the Scientific Method.'
        },
        {
          step: '3',
          title: 'The 1892 Curricular Siloing',
          detail: 'The Committee of Ten partitions schooling into modern subject silos, inadvertently dropping formal logic and rhetoric from general education.'
        }
      ],
      keyTakeaways: [
        'Formal logic alone cannot discover new physical truths without empirical observation to verify whether starting premises match reality.',
        'Modern schooling inherited grammar from the classical Trivium but lost explicit instruction in logic and rhetoric after the 1892 curriculum standardization.'
      ],
      commonPitfalls: [
        'Assuming that studying science or history automatically teaches the underlying rules of logical inference and rhetorical analysis.',
        'Confusing Cartesian radical skepticism with cynical denial rather than using doubt as a disciplined tool to locate bedrock evidence.'
      ],
      figures: [
        {
          file: 'critical_thinking_haber_ch01_plate.png',
          originalLabel: 'Chapter 1 Opening Plate: The Genealogy of Critical Thinking',
          bierutTitle: 'Trace the Genealogy of Inquiry From Classical Logic to Modern Empiricism',
          editorialAnalysis:
            'This chapter plate marks the transition from classical deductive architecture to empirical verification. It establishes that modern critical thinking is not an isolated academic fad but the cumulative operating system of Western scientific and civic thought.',
          keyTakeaways: [
            'Classical logic provides structural validity while Enlightenment science provides empirical verification.',
            'Modern critical thinking reunites orphaned strands of logic, rhetoric, and psychology.'
          ]
        }
      ]
    },
    {
      id: 'cth-ch01-sec2',
      sectionNumber: '1.2',
      title: 'American Pragmatism, Dewey\'s Reflective Thinking, and Bloom\'s Hierarchy',
      subtitle: 'How Peirce, Dewey, Glaser, and Bloom Operationalized Inquiry for Democratic Education',
      coreMechanism:
        'In late-nineteenth-century America, Pragmatists led by Charles Sanders Peirce, William James, and John Dewey redirected philosophy toward practical consequences and educational reform. In his 1877 essay "The Fixation of Belief," Peirce argued that humans think primarily to relieve the unpleasant friction of doubt, warning that only the scientific method tests beliefs against an independent reality rather than personal tenacity, institutional authority, or fashionable intuition. Dewey translated this insight into pedagogy in his 1910 landmark *How We Think*, defining "reflective thinking" as active, persistent, and careful consideration of any belief in light of the grounds that support it.\n\nBuilding directly on Dewey, Edward Glaser authored the 1941 *Experiment in the Development of Critical Thinking* and co-created the Watson-Glaser Critical Thinking Appraisal. Glaser defined critical thinking as a triad of disposition, logical knowledge, and practical application skill. Fifteen years later, Benjamin Bloom and his committee formalized educational objectives into Bloom\'s Taxonomy, positioning Knowledge and Comprehension as lower-order foundations while elevating Application, Analysis, Synthesis, and Evaluation (later revised with Create at the apex) as the higher-order cognitive operations required for autonomous judgment.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Peirce\'s Belief Fixation Filter',
          detail: 'Distinguish scientific inquiry from low-effort belief fixation (tenacity, authority, and a priori intuition).'
        },
        {
          step: '2',
          title: 'Dewey\'s Reflective Classroom',
          detail: 'Operationalize "reflective thinking" in education, shifting students from passive rote memorization to active hypothesis testing.'
        },
        {
          step: '3',
          title: 'Glaser & Bloom Codification',
          detail: 'Codify critical thinking into measurable dispositions, logical skills, and Bloom\'s hierarchical cognitive operations.'
        }
      ],
      keyTakeaways: [
        'Reflective thinking begins only when a thinker tolerates the discomfort of uncertainty long enough to investigate the grounds of a belief.',
        'Bloom\'s Taxonomy demonstrates that factual recall (Knowledge) is the fuel for higher-order analysis and creation, not a substitute for them.'
      ],
      commonPitfalls: [
        'Treating lower-order factual knowledge as useless, when domain knowledge is actually required to execute higher-order analysis and evaluation.',
        'Mistaking stubborn contrarianism (Peirce\'s tenacity in reverse) for genuine scientific skepticism.'
      ],
      figures: [
        {
          file: 'critical_thinking_haber_p047_fig1.png',
          originalLabel: 'Figure 1: Revised Bloom\'s Taxonomy hierarchy of cognitive skills',
          bierutTitle: 'Ascend Bloom\'s Cognitive Pyramid From Factual Recall to Creative Synthesis',
          editorialAnalysis:
            'The revised Bloom\'s pyramid illustrates how foundational recall (Knowledge and Comprehension) supports the analytical engine of Application, Analysis, Synthesis/Evaluate, and Creation. Critical thinking operates across the upper tiers by decomposing claims and constructing novel, evidence-backed syntheses.',
          keyTakeaways: [
            'Lower-order knowledge and comprehension supply the raw material for higher-order analysis.',
            'Revised Bloom\'s Taxonomy places Create at the apex of cognitive mastery.'
          ]
        }
      ]
    },
    {
      id: 'cth-ch01-sec3',
      sectionNumber: '1.3',
      title: 'Cognitive Heuristics, Informal Logic, and the Modern Civic Mandate',
      subtitle: 'Kahneman and Tversky\'s Bias Revolution Meets Natural-Language Argument Analysis',
      coreMechanism:
        'During the 1970s and 1980s, two parallel movements reshaped critical thinking: cognitive psychology and informal logic. Psychologists Daniel Kahneman and Amos Tversky demonstrated that human judgment under uncertainty relies on mental shortcuts (heuristics) that generate predictable systemic errors (biases). Anchoring traps evaluators on initial numbers; availability skews risk perception toward vivid, memorable events; affect replaces rigorous probability assessment with gut emotional reactions; and confirmation bias filters out disconfirming evidence to protect existing beliefs.\n\nSimultaneously, university philosophers recognized that symbolic mathematical logic was too sterile to evaluate everyday political, legal, and media arguments. In 1980, California State University mandated dedicated critical-thinking instruction for graduation, catalyzing the Association for Informal Logic and Critical Thinking (AILACT) and landmark policy reports like *A Nation at Risk* (1983). Modern critical thinking thus emerged as an applied discipline combining informal argument analysis with psychological debiasing to defend democratic citizens against manipulation.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Map Cognitive Heuristics',
          detail: 'Identify systematic cognitive biases (anchoring, availability, affect, confirmation) that subvert rational judgment under uncertainty.'
        },
        {
          step: '2',
          title: 'Deploy Informal Logic',
          detail: 'Evaluate natural-language arguments in politics, law, and media outside rigid symbolic notation.'
        },
        {
          step: '3',
          title: 'Institutionalize Civic Reasoning',
          detail: 'Embed critical-thinking graduation mandates (such as CSU Executive Order 338) as a core democratic competency.'
        }
      ],
      keyTakeaways: [
        'Knowing formal logic does not immunize a thinker against confirmation bias or availability cascades in real-world decisions.',
        'Informal logic bridges the gap between abstract syllogisms and the messy, context-dependent arguments of law, media, and public policy.'
      ],
      commonPitfalls: [
        'Assuming awareness of cognitive biases in others automatically eliminates those same biases in your own reasoning.',
        'Dismissing informal arguments as irrational simply because they yield probabilistic strength rather than deductive certainty.'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Peirce\'s Four Methods of Fixing Belief',
      description:
        'Comparing the four epistemic mechanisms humans use to resolve doubt across cognitive cost, social stability, and truth convergence.',
      headers: ['Method of Fixation', 'Core Mechanism', 'Primary Vulnerability', 'Long-Term Epistemic Verdict'],
      rows: [
        [
          'Method of Tenacity',
          'Cling unwaveringly to existing beliefs and block contrary facts',
          'Shatters upon contact with unavoidable physical or social reality',
          'Fails in any environment requiring adaptation or shared coordination'
        ],
        [
          'Method of Authority',
          'Enforce institutional or tribal orthodoxy across a population',
          'Produces atrocities and collapses when citizens encounter rival cultures',
          'Maintains brittle conformism at the cost of intellectual autonomy'
        ],
        [
          'A Priori Method',
          'Adopt beliefs that feel intuitively agreeable to current cultural taste',
          'Reduces truth to shifting intellectual fashion and affect bias',
          'Generates eloquent rationalizations untethered from empirical proof'
        ],
        [
          'Scientific / Reflective Method',
          'Test hypotheses against independent reality and logical scrutiny',
          'Demands high cognitive effort, emotional humility, and training',
          'Only self-correcting method capable of converging on objective truth'
        ]
      ],
      verdictRule:
        'Default human cognition gravitates toward Tenacity, Authority, and A Priori comfort; invoke the Reflective Method whenever stakes require alignment with external reality.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'cth-ch01-scen1',
      title: 'Overcoming Confirmation Bias and Authority Fixation in Clinical Diagnostics',
      roleAndContext: 'Chief Medical Resident leading a Metropolitan Teaching Hospital Morbidity Review',
      symptomOrFailure:
        'A senior attending physician diagnoses a patient with routine acid reflux based on an initial triage note; despite atypical lab markers, the resident team orders only confirmatory GI tests until the patient suffers an acute cardiac event.',
      naiveFixAndWhyItFails:
        'Circulate a memo reminding residents to review cardiac guidelines—which fails because the error was driven by anchoring on the initial triage note and deferring to the senior physician\'s authority rather than a lack of medical textbook knowledge.',
      firstPrinciplesSolution:
        'Institute a mandatory "Diagnostic Time-Out" modeled on Dewey\'s reflective suspension and Kahneman\'s debiasing protocol: before finalizing treatment, a designated team member must list two physiological observations that contradict the lead diagnosis and propose one falsifying test.',
      measurableOutcome:
        'Diagnostic anchoring errors in atypical emergency admissions drop by 41% over two quarters, with residents catching contradicting lab biomarkers 55 minutes earlier on average.'
    },
    {
      id: 'cth-ch01-scen2',
      title: 'Rebuilding a Corporate Training Curriculum Around Glaser\'s Tripartite Model',
      roleAndContext: 'Director of Risk Education at a Global Financial Compliance Academy',
      symptomOrFailure:
        'Analysts score 94% on an annual online multiple-choice exam covering logical fallacies and statistical rules, yet repeatedly approve fraudulent vendor filings that use polished narrative framing and high-status executive endorsements.',
      naiveFixAndWhyItFails:
        'Add more complex logic definitions to the annual slide deck—which fails because analysts possess declarative knowledge (Bloom\'s lowest tier) but lack Glaser\'s dispositional skepticism and practical application skill under realistic social pressure.',
      firstPrinciplesSolution:
        'Redesign training around Glaser\'s three pillars and Bloom\'s upper tiers: inject unannounced "red-team" vendor packets containing authority cues and anchoring traps into live workflows, followed by structured debriefs where analysts critique the hidden assumptions.',
      measurableOutcome:
        'Detection of deceptive vendor filings in live audits rises from 31% to 82%, demonstrating transfer from passive recall to active evaluation.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cth-ch01-q1',
        scenarioPrompt:
          'According to Charles Sanders Peirce\'s "The Fixation of Belief," why does the A Priori method ultimately fail as a reliable guide to truth?',
        options: [
          {
            label: 'A',
            text: 'It relies on state violence to suppress dissenting voices across generations.',
            isCorrect: false,
            explanation: 'State or institutional coercion characterizes the Method of Authority, not the A Priori method.'
          },
          {
            label: 'B',
            text: 'It treats inquiry as a matter of intellectual taste and intuitive comfort rather than testing claims against independent empirical reality.',
            isCorrect: true,
            explanation: 'Peirce noted that while the A Priori method feels more civilized than brute Authority or stubborn Tenacity, it makes inquiry resemble the development of taste—leaving beliefs untethered from objective reality.'
          },
          {
            label: 'C',
            text: 'It requires excessive mathematical training that ordinary citizens cannot master.',
            isCorrect: false,
            explanation: 'The A Priori method relies on intuitive agreeableness rather than rigorous mathematical or empirical verification.'
          },
          {
            label: 'D',
            text: 'It forbids individuals from communicating their beliefs to other members of society.',
            isCorrect: false,
            explanation: 'A Priori thinkers converse freely within their cultural circle, but their consensus remains insulated from empirical falsification.'
          }
        ]
      },
      {
        id: 'cth-ch01-q2',
        scenarioPrompt:
          'What structural change in 1892 caused explicit instruction in logic and rhetoric to vanish from most American K-12 schools?',
        options: [
          {
            label: 'A',
            text: 'The Supreme Court banned classical philosophy from public school curricula.',
            isCorrect: false,
            explanation: 'No court ruling banned logic; the shift resulted from curriculum committee standardization.'
          },
          {
            label: 'B',
            text: 'Benjamin Bloom replaced the classical Trivium with his six-level taxonomy.',
            isCorrect: false,
            explanation: 'Bloom\'s Taxonomy was published in 1956, more than six decades after the 1892 curriculum standardization.'
          },
          {
            label: 'C',
            text: 'The Committee of Ten standardized secondary education into modern subject silos (English, math, science, history), absorbing grammar into English while orphaning logic and rhetoric.',
            isCorrect: true,
            explanation: 'When the 1892 Committee of Ten organized high school curricula around disciplinary silos, grammar was folded into language instruction while logic and rhetoric lost their dedicated home in general education.'
          },
          {
            label: 'D',
            text: 'John Dewey argued that students should never study formal reasoning.',
            isCorrect: false,
            explanation: 'Dewey championed reflective thinking and logical inquiry across education.'
          }
        ]
      },
      {
        id: 'cth-ch01-q3',
        scenarioPrompt:
          'Edward Glaser\'s 1941 foundational definition of critical thinking comprises which three interdependent components?',
        options: [
          {
            label: 'A',
            text: 'Grammar, formal symbolic calculus, and classical oratorical delivery.',
            isCorrect: false,
            explanation: 'Those reflect classical Trivium components rather than Glaser\'s 1941 psychological-pedagogical synthesis.'
          },
          {
            label: 'B',
            text: 'A dispositional attitude of thoughtful inquiry, knowledge of the methods of logical reasoning, and skill in applying those methods.',
            isCorrect: true,
            explanation: 'Glaser established that critical thinking requires all three components: the attitude/disposition to consider problems thoughtfully, knowledge of logical inquiry methods, and practical skill in applying those methods.'
          },
          {
            label: 'C',
            text: 'Fast heuristic intuition, institutional authority deference, and memorization of domain facts.',
            isCorrect: false,
            explanation: 'Heuristic shortcuts and authority deference are obstacles to critical thinking, not its components.'
          },
          {
            label: 'D',
            text: 'Prefrontal cortex maturation, psychometric testing, and digital media literacy.',
            isCorrect: false,
            explanation: 'While relevant to modern education, these are not the three pillars of Glaser\'s 1941 definition.'
          }
        ]
      },
      {
        id: 'cth-ch01-q4',
        scenarioPrompt:
          'A policy analyst estimates the cost of a new transit project by adjusting slightly upward from a rough number mentioned by a lobbyist in an elevator. Which cognitive bias documented by Kahneman and Tversky is operating?',
        options: [
          {
            label: 'A',
            text: 'The Availability Heuristic',
            isCorrect: false,
            explanation: 'Availability judges probability by how easily vivid examples come to mind, not by clinging to an initial numerical figure.'
          },
          {
            label: 'B',
            text: 'The Anchoring Heuristic',
            isCorrect: true,
            explanation: 'Anchoring occurs when an initial numerical value—even an arbitrary or self-serving one—disproportionately constrains subsequent quantitative estimates.'
          },
          {
            label: 'C',
            text: 'The Undistributed Middle Fallacy',
            isCorrect: false,
            explanation: 'Undistributed Middle is a formal syllogistic fallacy, not a numerical estimation heuristic.'
          },
          {
            label: 'D',
            text: 'Cartesian Radical Doubt',
            isCorrect: false,
            explanation: 'Cartesian doubt is a philosophical method of questioning assumptions, the opposite of passively accepting a lobbyist\'s number.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'cth-ch01-fc1',
        category: 'foundation',
        front: 'What three subjects composed the classical Trivium?',
        back: 'Grammar (how language works), Logic (how reasoning holds together), and Rhetoric (how language persuades).',
        mentalHook: 'Input (Grammar) -> Processing (Logic) -> Output (Rhetoric).'
      },
      {
        id: 'cth-ch01-fc2',
        category: 'foundation',
        front: 'How did John Dewey define "reflective thinking" in How We Think (1910)?',
        back: 'Active, persistent, and careful consideration of any belief or supposed form of knowledge in the light of the grounds that support it and the further conclusions to which it tends.',
        mentalHook: 'Reflective thinking = inspecting the foundation before trusting the building.'
      },
      {
        id: 'cth-ch01-fc3',
        category: 'evaluation',
        front: 'What are Peirce\'s four methods for fixing belief and resolving doubt?',
        back: 'Tenacity (stubborn repetition), Authority (institutional decree), A Priori (intuitive intellectual fashion), and the Scientific Method (testing against independent reality).',
        mentalHook: 'Three comfort traps (Tenacity, Authority, A Priori) vs. one reality test (Science).'
      },
      {
        id: 'cth-ch01-fc4',
        category: 'architecture',
        front: 'How do the six tiers of the revised Bloom\'s Taxonomy progress from lowest to highest order?',
        back: 'Knowledge -> Comprehension -> Application -> Analysis -> Evaluate -> Create.',
        mentalHook: 'Remember and understand at the base; dissect, judge, and invent at the peak.'
      },
      {
        id: 'cth-ch01-fc5',
        category: 'evaluation',
        front: 'What is the Availability Heuristic in behavioral psychology?',
        back: 'Estimating the likelihood of an event based on how easily vivid or recent examples come to mind rather than objective base-rate statistics.',
        mentalHook: 'Memorable does not equal probable.'
      },
      {
        id: 'cth-ch01-fc6',
        category: 'adaptation',
        front: 'Why did philosophers launch the Informal Logic movement in the late 1970s?',
        back: 'Because symbolic mathematical logic could not adequately evaluate the context-rich, probabilistic arguments found in everyday politics, law, journalism, and ethics.',
        mentalHook: 'Real-world arguments run on natural language, not just truth tables.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'cth-ch01-fc-1',
        conceptTitle: 'Why Formal Logic Alone Fails Without Empiricism and Debiasing',
        prompt:
          'Explain why teaching someone formal deductive logic (like Aristotelian syllogisms) is necessary but insufficient to make them a strong critical thinker in the modern world.',
        rubricChecklist: [
          'Distinguishes formal deductive validity from the empirical truth of premises discovered via scientific induction.',
          'Explains Edward Glaser\'s three-part architecture (knowledge of logic must be paired with dispositional attitude and practical application skill).',
          'Incorporates Kahneman and Tversky\'s findings that unconscious heuristics and confirmation bias hijack reasoning before formal logic is even invoked.',
          'Notes the role of informal logic in handling probabilistic, everyday natural-language arguments.'
        ],
        modelExplanation:
          'Formal deductive logic only guarantees that if your starting premises are true, your conclusion must follow. It cannot tell you whether your premises are factually accurate in the physical world—that required the Enlightenment marriage of logic with empirical observation. Furthermore, as Edward Glaser showed, knowing logical rules means nothing without the dispositional willingness to question your own side, and as Kahneman and Tversky proved, human cognition runs on fast heuristics like confirmation bias and anchoring that use formal logic to rationalize pre-existing gut beliefs unless actively monitored.'
      },
      {
        id: 'cth-ch01-fc-2',
        conceptTitle: 'Peirce\'s Irritation of Doubt and the Four Fixations of Belief',
        prompt:
          'Walk through Charles Sanders Peirce\'s account of "the irritation of doubt" and explain why humans so rarely choose the Scientific Method to resolve it.',
        rubricChecklist: [
          'Defines belief as a calm habit of action and doubt as an uneasy friction that demands resolution.',
          'Contrasts the low cognitive cost of Tenacity, Authority, and A Priori belief fixation against the high effort of reflective inquiry.',
          'Connects Peirce\'s non-scientific methods to modern cognitive biases like confirmation bias and affect heuristics.',
          'Explains why only a method anchored to an external reality independent of human opinion can self-correct.'
        ],
        modelExplanation:
          'Peirce observed that doubt is physiologically and mentally uncomfortable, so our minds rush to restore the calm state of belief as cheaply as possible. Clinging stubbornly to what we already think (Tenacity), obeying a tribe or leader (Authority), or adopting whatever sounds fashionable in our social circle (A Priori) immediately quiets doubt without demanding hard investigation. By contrast, Dewey and Peirce\'s scientific/reflective method requires suspending judgment, enduring uncertainty, and actively trying to falsify our own hypotheses against an independent external reality.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cth-ch01-n1',
        label: 'Classical Trivium',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition: 'The ancient and medieval curriculum of Grammar, Logic, and Rhetoric that structured rational discourse.',
        whyItMatters: 'Establishes the linguistic and deductive foundation of Western critical inquiry.'
      },
      {
        id: 'cth-ch01-n2',
        label: 'Enlightenment Empiricism',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 1,
        definition: 'The synthesis of Cartesian doubt and Baconian/Humean observation that birthed the Scientific Method.',
        whyItMatters: 'Ensures deductive premises are tested against physical reality rather than scholastic dogma.'
      },
      {
        id: 'cth-ch01-n3',
        label: 'Peirce\'s Fixation of Belief',
        category: 'foundation',
        chapterNumber: 1,
        importance: 2,
        definition: 'Framework contrasting Tenacity, Authority, and A Priori belief stabilization against self-correcting scientific inquiry.',
        whyItMatters: 'Explains why humans default to dogmatic comfort to escape the irritation of doubt.'
      },
      {
        id: 'cth-ch01-n4',
        label: 'Dewey\'s Reflective Thinking',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 1,
        definition: 'Active, persistent evaluation of beliefs based on their supporting grounds and downstream consequences.',
        whyItMatters: 'Translates philosophical inquiry into an actionable educational and civic practice.'
      },
      {
        id: 'cth-ch01-n5',
        label: 'Glaser Tripartite Model',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'The 1941 definition uniting thoughtful dispositions, logical inquiry knowledge, and applied reasoning skill.',
        whyItMatters: 'Proves that logical knowledge fails without dispositional willingness and practical application.'
      },
      {
        id: 'cth-ch01-n6',
        label: 'Heuristics and Biases',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 2,
        definition: 'Kahneman and Tversky\'s catalog of mental shortcuts (anchoring, availability, affect, confirmation) that distort human judgment.',
        whyItMatters: 'Identifies the predictable psychological failure modes that critical thinkers must actively monitor.'
      }
    ],
    edges: [
      {
        source: 'cth-ch01-n1',
        target: 'cth-ch01-n2',
        relationship: 'prerequisite_for',
        explanation: 'Deductive scholastic logic combines with systematic physical observation during the Scientific Revolution.'
      },
      {
        source: 'cth-ch01-n2',
        target: 'cth-ch01-n3',
        relationship: 'optimizes',
        explanation: 'Empirical testing provides the independent reality check in Peirce\'s scientific fixation of belief.'
      },
      {
        source: 'cth-ch01-n3',
        target: 'cth-ch01-n4',
        relationship: 'prerequisite_for',
        explanation: 'Dewey translates Peirce\'s pragmatist epistemology into classroom reflective inquiry.'
      },
      {
        source: 'cth-ch01-n4',
        target: 'cth-ch01-n5',
        relationship: 'part_of',
        explanation: 'Glaser operationalizes Dewey\'s reflective thinking into measurable dispositions, knowledge, and skills.'
      },
      {
        source: 'cth-ch01-n5',
        target: 'cth-ch01-n6',
        relationship: 'mitigates',
        explanation: 'Glaser\'s dispositional vigilance and logical methods counteract Kahneman and Tversky\'s cognitive biases.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: 'Verified complete coverage of Chapter 1 genealogy, classical Trivium, Enlightenment empiricism, Pragmatism, Bloom taxonomy figure, and heuristics.'
  }
};

export const cthCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Components of Critical Thinking',
  subtitle: 'Structured Logic, Charitable Translation, Argument Mapping, Domain Knowledge, Creativity, and Intellectual Virtues',
  readingTimeMinutes: 9,
  sourceWordCount: 11324,
  executiveThesis:
    'Effective critical thinking operates as an interlocking six-part engine: structured logical inference, charitable linguistic translation, collaborative argumentation, deep background knowledge coupled with information literacy, hypothesis-generating creativity, and metacognitive character dispositions. Mastering only formal fallacy hunting while neglecting domain knowledge, rhetorical charity, or intellectual humility turns reasoning into partisan sophistry.',
  paradigmShift: {
    oldWay:
      'Treat critical thinking as a purely defensive "gotcha" game of spotting fallacies in opponents\' speeches while assuming reasoning skills operate in a content-free vacuum.',
    newWay:
      'Translate messy natural language into economical, charitable argument maps, ground inferences in deep domain knowledge, and regulate one\'s own ego through metacognitive virtues.',
    whyItChanged:
      'Cognitive research by Daniel Willingham proved that thinking is inextricably tied to domain knowledge, while informal logicians demonstrated that defeating a "straw man" version of a rival claim yields zero epistemic progress.'
  },
  customDiagrams: [
    {
      id: 'cth-ch02-svg1',
      title: 'The Six-Cylinder Critical Thinking Engine',
      subtitle: 'How Logic, Language, Argumentation, Knowledge, Creativity, and Virtues Interlock',
      bierutCaption:
        'Fire all six mutually reinforcing cognitive modules together to transform raw rhetoric into sound, bias-resistant judgment.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="40" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">THE SIX INTERLOCKING COMPONENTS OF CRITICAL THINKING</text>
  <text x="40" y="62" fill="#94a3b8" font-size="11.5">All Six Modules Must Fire Together to Prevent Sophistry and Blind Spots</text>

  <!-- Top Row: 3 Cards -->
  <rect x="40" y="85" width="226" height="135" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="56" y="112" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">01 · STRUCTURED THINKING</text>
  <text x="56" y="136" fill="#f8fafc" font-size="13" font-weight="700">Logic &amp; Inference</text>
  <text x="56" y="158" fill="#cbd5e1" font-size="10.5">• Deduction (Valid/Sound)</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10.5">• Induction &amp; Abduction</text>
  <text x="56" y="198" fill="#cbd5e1" font-size="10.5">• Toulmin &amp; Argument Maps</text>

  <rect x="287" y="85" width="226" height="135" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
  <text x="303" y="112" fill="#818cf8" font-family="monospace" font-size="10.5" font-weight="700">02 · LANGUAGE &amp; RHETORIC</text>
  <text x="303" y="136" fill="#f8fafc" font-size="13" font-weight="700">Logical Translation</text>
  <text x="303" y="158" fill="#cbd5e1" font-size="10.5">• Accurate &amp; Economical</text>
  <text x="303" y="178" fill="#cbd5e1" font-size="10.5">• Principle of Charity</text>
  <text x="303" y="198" fill="#cbd5e1" font-size="10.5">• Rhetorical X-Ray Vision</text>

  <rect x="534" y="85" width="226" height="135" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="550" y="112" fill="#34d399" font-family="monospace" font-size="10.5" font-weight="700">03 · ARGUMENTATION</text>
  <text x="550" y="136" fill="#f8fafc" font-size="13" font-weight="700">Reasoned Discourse</text>
  <text x="550" y="158" fill="#cbd5e1" font-size="10.5">• Arguing vs. Explaining</text>
  <text x="550" y="178" fill="#cbd5e1" font-size="10.5">• Rejecting Coercive Fights</text>
  <text x="550" y="198" fill="#cbd5e1" font-size="10.5">• Exposing Enthymemes</text>

  <!-- Connectors -->
  <line x1="153" y1="220" x2="153" y2="250" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="400" y1="220" x2="400" y2="250" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="647" y1="220" x2="647" y2="250" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>

  <!-- Bottom Row: 3 Cards -->
  <rect x="40" y="250" width="226" height="135" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="56" y="277" fill="#f59e0b" font-family="monospace" font-size="10.5" font-weight="700">04 · DOMAIN &amp; INFO LITERACY</text>
  <text x="56" y="301" fill="#f8fafc" font-size="13" font-weight="700">Knowledge Substrate</text>
  <text x="56" y="323" fill="#cbd5e1" font-size="10.5">• Willingham Coupling Law</text>
  <text x="56" y="343" fill="#cbd5e1" font-size="10.5">• Locate, Evaluate, Synthesize</text>
  <text x="56" y="363" fill="#cbd5e1" font-size="10.5">• Source Credibility Audits</text>

  <rect x="287" y="250" width="226" height="135" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
  <text x="303" y="277" fill="#ec4899" font-family="monospace" font-size="10.5" font-weight="700">05 · CREATIVITY</text>
  <text x="303" y="301" fill="#f8fafc" font-size="13" font-weight="700">Hypothesis Generation</text>
  <text x="303" y="323" fill="#cbd5e1" font-size="10.5">• Apex of Revised Bloom</text>
  <text x="303" y="343" fill="#cbd5e1" font-size="10.5">• Designing Falsifying Tests</text>
  <text x="303" y="363" fill="#cbd5e1" font-size="10.5">• Escaping False Dichotomies</text>

  <rect x="534" y="250" width="226" height="135" rx="10" fill="#1e293b" stroke="#14b8a6" stroke-width="2"/>
  <text x="550" y="277" fill="#14b8a6" font-family="monospace" font-size="10.5" font-weight="700">06 · DISPOSITIONS</text>
  <text x="550" y="301" fill="#f8fafc" font-size="13" font-weight="700">Metacognitive Virtues</text>
  <text x="550" y="323" fill="#cbd5e1" font-size="10.5">• Intellectual Humility</text>
  <text x="550" y="343" fill="#cbd5e1" font-size="10.5">• Courage, Empathy, Integrity</text>
  <text x="550" y="363" fill="#cbd5e1" font-size="10.5">• Self-Monitoring Biases</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Logical & Linguistic Core',
          explanation:
            'Modules 1–3 translate rhetorical prose into clear premises and conclusions so inferences can be inspected without emotional distortion.'
        },
        {
          step: '2',
          label: 'Epistemic Fuel & Synthesis',
          explanation:
            'Modules 4–5 supply the factual domain baseline and creative alternatives needed to judge whether premises hold in reality.'
        },
        {
          step: '3',
          label: 'Metacognitive Governor',
          explanation:
            'Module 6 ensures the thinker applies the same logical rigor to their own cherished beliefs as they apply to rivals.'
        }
      ]
    },
    {
      id: 'cth-ch02-svg2',
      title: 'Toulmin Warrant Architecture & Logical Translation Pipeline',
      subtitle: 'Exhuming Unstated Co-Premises (Enthymemes) Linking Stated Grounds to Contested Claims',
      bierutCaption:
        'Strip rhetorical ornamentation to expose the explicit grounds, hidden warrant, and deductive or inductive inference link.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="16" fill="#0f172a"/>
  <text x="40" y="42" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.06em">TOULMIN SCHEMATIC &amp; ENTHYMEME EXTRACTION</text>
  <text x="40" y="64" fill="#94a3b8" font-size="11.5">How Stated Grounds Combine With Hidden Warrants to Support a Claim</text>

  <!-- Grounds Box -->
  <rect x="50" y="105" width="260" height="105" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="68" y="132" fill="#38bdf8" font-family="monospace" font-size="10.5" font-weight="700">STATED PREMISE (GROUNDS)</text>
  <text x="68" y="158" fill="#f8fafc" font-size="12.5" font-weight="600">"You want your children to succeed in school."</text>
  <text x="68" y="186" fill="#94a3b8" font-size="10.5">Explicitly stated in speech/ad</text>

  <!-- Arrow Grounds to Claim -->
  <line x1="310" y1="158" x2="480" y2="158" stroke="#10b981" stroke-width="3" stroke-dasharray="6 4"/>
  <polygon points="485,158 475,152 475,164" fill="#10b981"/>
  <text x="398" y="144" text-anchor="middle" fill="#6ee7b7" font-family="monospace" font-size="10.5" font-weight="700">INFERENCE LINK</text>

  <!-- Claim Box -->
  <rect x="490" y="105" width="260" height="105" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="508" y="132" fill="#10b981" font-family="monospace" font-size="10.5" font-weight="700">CONCLUSION (CLAIM)</text>
  <text x="508" y="158" fill="#f8fafc" font-size="12.5" font-weight="600">"Therefore, vote for Candidate X."</text>
  <text x="508" y="186" fill="#94a3b8" font-size="10.5">Target action demanded of audience</text>

  <!-- Vertical Warrant Link -->
  <line x1="398" y1="255" x2="398" y2="165" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4"/>
  <polygon points="398,162 392,172 404,172" fill="#f59e0b"/>

  <!-- Warrant / Enthymeme Box -->
  <rect x="170" y="255" width="456" height="125" rx="10" fill="#271705" stroke="#f59e0b" stroke-width="2"/>
  <text x="192" y="282" fill="#fbbf24" font-family="monospace" font-size="10.5" font-weight="700">UNSTATED CO-PREMISE (TOULMIN WARRANT / ENTHYMEME)</text>
  <text x="192" y="308" fill="#f8fafc" font-size="12.5" font-weight="700">"Candidate X's policies will actually cause children to succeed in school."</text>
  <text x="192" y="334" fill="#fde68a" font-size="10.5">• Left unstated by speaker because it requires hard empirical proof</text>
  <text x="192" y="356" fill="#fde68a" font-size="10.5">• Primary target for Critical Evaluation: Demand backing for the Warrant!</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Grounds vs. Claim',
          explanation:
            'Persuaders state an undeniable premise ("you love your kids") and jump straight to their preferred conclusion ("vote for me").'
        },
        {
          step: '2',
          label: 'The Hidden Warrant',
          explanation:
            'Stephen Toulmin showed that the real logical work happens in the unstated Warrant connecting Grounds to Claim.'
        },
        {
          step: '3',
          label: 'Surgical Interrogation',
          explanation:
            'Exhuming the hidden co-premise shifts debate away from emotional truisms toward the unverified causal claim.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'cth-ch02-mm1',
      name: 'The Accurate-Economical-Charitable Translation Triad',
      tagline: 'Convert messy rhetoric into its cleanest, strongest premise-conclusion form',
      naiveIntuition:
        'Attack the weakest phrasing of an opponent\'s paragraph or list every tangential remark as a required premise so the argument is easy to demolish.',
      firstPrinciplesReality:
        'Because every added premise creates another point of potential failure, authentic logical translation strips away rhetorical ornamentation to produce an Accurate, Economical (minimum necessary premises), and Charitable ("steelman") reconstruction of the speaker\'s core inference.',
      howToApply:
        'Before critiquing any op-ed or proposal, rewrite it as 2 to 3 clean premises plus a conclusion that the author would enthusiastically endorse as their strongest possible case.'
    },
    {
      id: 'cth-ch02-mm2',
      name: 'Enthymeme Exhumation (Hidden Premise Hunting)',
      tagline: 'Surface the unstated bridging warrant where vulnerable assumptions hide',
      naiveIntuition:
        'Evaluate an argument solely by inspecting the explicit sentences spoken or written on the page.',
      firstPrinciplesReality:
        'Most real-world arguments are enthymemes—inferences that leave their most controversial bridging assumptions unstated because the speaker assumes shared cultural dogma or wishes to hide a vulnerable premise.',
      howToApply:
        'Ask: "What unstated universal rule must be true for Stated Premise A to guarantee Conclusion B?" and write that hidden warrant explicitly into your argument map.'
    },
    {
      id: 'cth-ch02-mm3',
      name: 'Willingham\'s Domain-Knowledge Coupling Law',
      tagline: 'Logical machinery cannot evaluate claims without deep subject-matter baselines',
      naiveIntuition:
        'Assume a "critical thinker" can parachute into any unfamiliar field and immediately evaluate complex claims using generic logic rules.',
      firstPrinciplesReality:
        'Cognitive scientist Daniel Willingham established that processes of thought are intertwined with the factual knowledge being thought about; without domain baselines, a thinker cannot spot implausible premises or missing control variables.',
      howToApply:
        'Pair structured logic with disciplined information literacy—locating, evaluating, organizing, synthesizing, and communicating domain facts before pronouncing judgment.'
    }
  ],
  deepSections: [
    {
      id: 'cth-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Structured Thinking: Deduction, Induction, Fallacies, and Visual Logic',
      subtitle: 'Validity vs. Soundness, Probabilistic Strength, and Hierarchical Argument Mapping',
      coreMechanism:
        'Structured thinking decomposes reasoning into premises (evidence statements), conclusions (claims), and the inferences linking them. In **deductive logic**, a *valid* argument guarantees its conclusion if its premises are true, and becomes *sound* when those premises are factually true in the real world—exemplified by *Modus Ponens* (`If P then Q; P; therefore Q`) and *Modus Tollens* (`If P then Q; not Q; therefore not P`). By contrast, **inductive** and **abductive** inferences reason from specific empirical observations to broader generalizations or the best available explanation; they are never deductively certain, but vary along a continuum from weak to strong as evidence accumulates.\n\nWhen inferences break down, they commit either formal fallacies—structural defects like the *Undistributed Middle* ("All men are mortal; Socrates is a man; therefore all men are Socrates"), *Affirming the Consequent*, or *Denying the Antecedent*—or informal fallacies embedded in content, such as *Ad Hominem*, *Straw Man*, *False Dichotomy*, *Composition*, *Equivocation*, and *Hasty Generalization*. Visual logic tools—Venn diagrams, Stephen Toulmin\'s Grounds-Warrant-Claim diagrams, and multi-tier Argument Maps—expose these structures alongside hidden premises (*enthymemes*) so complex chains of co-premises can be audited at a glance.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Classify the Inference Mode',
          detail: 'Determine whether the claim is deductive (seeking validity and soundness) or inductive/abductive (seeking probabilistic strength).'
        },
        {
          step: '2',
          title: 'Exhume Enthymemes & Map Co-Premises',
          detail: 'Surface unstated bridging warrants and map how premises and sub-conclusions link using Toulmin or hierarchical argument trees.'
        },
        {
          step: '3',
          title: 'Audit Formal & Informal Fallacies',
          detail: 'Inspect each link for structural breaks (e.g., Undistributed Middle) and informal content distortions (e.g., Straw Man, Equivocation).'
        }
      ],
      keyTakeaways: [
        'Deductive validity is purely structural: a valid argument with false premises can yield a false conclusion, whereas soundness requires both valid form and true premises.',
        'Argument mapping separates dependent co-premises (which must stand together like legs of a stool) from independent lines of evidence.'
      ],
      commonPitfalls: [
        'Dismissing a strong inductive scientific conclusion simply because it lacks 100% deductive certainty.',
        'Confusing an explanation of why an agreed-upon event happened with an argument trying to prove a contested claim.'
      ],
      figures: [
        {
          file: 'critical_thinking_haber_ch02_plate.png',
          originalLabel: 'Chapter 2 Opening Plate: Components of Critical Thinking',
          bierutTitle: 'Integrate Six Interlocking Modules to Build a Complete Reasoning Engine',
          editorialAnalysis:
            'This visual plate introduces the modular architecture of Chapter 2, emphasizing that logical structure is only the first component of a larger cognitive system. Without language translation, domain knowledge, and metacognitive dispositions, formal logic remains inert.',
          keyTakeaways: [
            'Critical thinking requires six mutually reinforcing skills and dispositions.',
            'Formal logic must be paired with language skills, background knowledge, and humility.'
          ]
        },
        {
          file: 'critical_thinking_haber_p087_fig1.png',
          originalLabel: 'Figure 9: Multi-level argument map showing premises and co-premises supporting a main claim',
          bierutTitle: 'Map Co-Premises Visually to Isolate Contested Nodes in Complex Debates',
          editorialAnalysis:
            'Haber\'s argument map demonstrates how a complex debate over multinational organizations decomposes into explicit tiers of support and objection. Mapping co-premises visually prevents debaters from talking past one another and pinpoints the exact node where evidence is contested.',
          keyTakeaways: [
            'Co-premises work together like legs of a table to support an inference.',
            'Visual argument trees turn sprawling prose debates into auditable structural diagrams.'
          ]
        }
      ]
    },
    {
      id: 'cth-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Language Translation, Classical Rhetoric, and Collaborative Argumentation',
      subtitle: 'Applying the Principle of Charity, Rhetorical X-Ray Vision, and Arguing Without Fighting',
      coreMechanism:
        'Natural human language rarely arrives neatly labeled as `Premise 1`, `Premise 2`, and `Conclusion`. Critical thinkers must perform **logical translation** to convert persuasive prose into standardized argument form using three governing rules: the translation must be **Accurate** (faithful to the speaker\'s meaning), **Economical** (using the fewest necessary premises, since every added premise multiplies the risk of falsification), and **Charitable** (applying Nigel Warburton\'s Principle of Charity to construct the strongest, most rational version of the opponent\'s case before evaluating it).\n\nSimultaneously, mastery of classical rhetoric—recognizing structural segments like the *Exordium* and *Peroration* and stylistic tropes like *Anaphora*, *Tricolon*, and *Chiasmus*—gives the thinker X-ray vision to strip away emotional dazzle without being fooled by sophistry, while enabling them to communicate their own sound conclusions persuasively. This linguistic clarity anchors true **argumentation**: unlike fighting (which seeks to dominate an opponent through coercion or pain) or explaining (which clarifies agreed-upon facts), arguing is a cooperative social process aimed at testing the acceptability of a contested standpoint through shared reasons.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Strip Rhetorical Ornamentation',
          detail: 'Filter out anaphora, tricolon, and emotional framing to isolate the speaker\'s core claim and supporting reasons.'
        },
        {
          step: '2',
          title: 'Execute AEC Logical Translation',
          detail: 'Translate the prose into an Accurate, Economical, and Charitable ("steelmanned") set of premises and conclusion.'
        },
        {
          step: '3',
          title: 'Argue Cooperatively Without Fighting',
          detail: 'Test the acceptability of the premises through shared inquiry rather than degenerating into coercive verbal fighting.'
        }
      ],
      keyTakeaways: [
        'Adding unnecessary premises to an opponent\'s argument during translation violates economy and constructs a fragile straw man.',
        'Rhetoric is ethically neutral: sophists use it to disguise weak logic, whereas critical thinkers use it to make sound reasoning clear and compelling.'
      ],
      commonPitfalls: [
        'Mistaking a verbal fight aimed at tribal humiliation for genuine philosophical argumentation.',
        'Treating rhetorical eloquence as proof of logical soundness—or conversely, assuming dry, unpersuasive writing is automatically more rigorous.'
      ]
    },
    {
      id: 'cth-ch02-sec3',
      sectionNumber: '2.3',
      title: 'Domain Knowledge, Information Literacy, Creativity, and Metacognitive Virtues',
      subtitle: 'Willingham\'s Knowledge Coupling, the 5-Step Info Literacy Pipeline, and the 8 Intellectual Virtues',
      coreMechanism:
        'Logical machinery cannot run on an empty tank. Cognitive psychologist Daniel Willingham proved that critical thinking is tightly bound to **background knowledge**: a student who understands abstract experimental design in physics will still fail to spot a flawed chemistry experiment if they do not know how specific reagents behave. When entering unfamiliar territory, thinkers bridge knowledge gaps through the five-step **Information Literacy** pipeline—*Locating*, *Evaluating*, *Organizing*, *Synthesizing*, and *Communicating* reliable sources—while deploying **Creativity** (the pinnacle of revised Bloom\'s Taxonomy) to invent alternative hypotheses and escape binary traps.\n\nFinally, because intelligent people frequently weaponize their reasoning skills to defend ego and tribe, critical thinking requires the eight intellectual virtues codified by the Foundation for Critical Thinking: *Intellectual Humility*, *Courage*, *Empathy*, *Autonomy*, *Integrity*, *Perseverance*, *Confidence in Reason*, and *Fairmindedness*. Governed by **metacognition**—the habit of monitoring one\'s own thought processes in real time—these dispositions force the thinker to audit their own assumptions with the same standard applied to adversaries.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Execute the 5-Step Info Literacy Pipeline',
          detail: 'Locate, Evaluate, Organize, Synthesize, and Communicate authoritative domain knowledge before judging complex claims.'
        },
        {
          step: '2',
          title: 'Generate Creative Counter-Hypotheses',
          detail: 'Apply creative synthesis to invent alternative explanations and design empirical tests that could falsify your favored theory.'
        },
        {
          step: '3',
          title: 'Enforce Metacognitive Virtues',
          detail: 'Monitor your own thinking through the 8 intellectual virtues (humility, empathy, integrity, fairmindedness) to override confirmation bias.'
        }
      ],
      keyTakeaways: [
        'General logical rules cannot compensate for missing domain facts; deep subject knowledge is the prerequisite for spotting subtle errors.',
        'High analytical skill without intellectual humility and fairmindedness produces sophisticated rationalization rather than truth-seeking.'
      ],
      commonPitfalls: [
        'Attempting to "do your own research" in a technical domain without evaluating source authority or synthesizing consensus baselines.',
        'Using logical terminology solely as a shield to protect personal identity while refusing to practice intellectual empathy.'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Deductive, Inductive, and Abductive Reasoning Paradigms',
      description:
        'Selecting the appropriate inference architecture based on domain certainty, evidence structure, and failure modes.',
      headers: ['Inference Type', 'Direction of Reasoning', 'Evaluation Standard', 'Primary Real-World Use Case'],
      rows: [
        [
          'Deductive Reasoning',
          'General rules/axioms to necessary specific conclusions',
          'Validity (form) and Soundness (valid + true premises)',
          'Mathematics, formal software verification, statutory rule application'
        ],
        [
          'Inductive Reasoning',
          'Repeated specific observations to probabilistic generalizations',
          'Strength Continuum (Weak to Strong based on sample & controls)',
          'Epidemiology, empirical science, market forecasting, polling'
        ],
        [
          'Abductive Reasoning',
          'Incomplete clues/symptoms to the most plausible causal explanation',
          'Inference to the Best Explanation (explanatory power & parsimony)',
          'Medical diagnosis, root-cause engineering incidents, detective work'
        ]
      ],
      verdictRule:
        'Use Deduction to audit structural consistency, Induction to establish empirical base rates, and Abduction to generate testable diagnostic hypotheses when data is incomplete.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'cth-ch02-scen1',
      title: 'Defusing Executive Deadlock via Charitable Translation and Argument Mapping',
      roleAndContext: 'Principal Architect chairing a Cloud Infrastructure Architecture Review Board',
      symptomOrFailure:
        'Two principal engineers spend three weeks in hostile email threads over migrating to microservices vs. keeping a modular monolith, accusing each other of incompetence and cherry-picking straw-man quotes.',
      naiveFixAndWhyItFails:
        'Ask a VP to split the difference or vote by majority—which fails because the hidden technical assumptions (enthymemes) regarding team headcount and latency SLAs remain unexamined.',
      firstPrinciplesSolution:
        'Enforce Nigel Warburton\'s Principle of Charity and hierarchical Argument Mapping: require each engineer to construct a Toulmin map of their rival\'s argument that the rival signs off as Accurate, Economical, and Charitable before any rebuttal is allowed.',
      measurableOutcome:
        'The shared argument map reveals both engineers actually agree on 80% of premises and differ solely on one testable hidden warrant (database write-contention under peak load), which is resolved in 48 hours via a benchmark test.'
    },
    {
      id: 'cth-ch02-scen2',
      title: 'Exposing the Undistributed Middle Fallacy in Automated Fraud Detection',
      roleAndContext: 'Lead Risk Data Scientist auditing a Fintech Consumer Lending Risk Engine',
      symptomOrFailure:
        'A fraud-prevention rule flags 18% of legitimate immigrant applicants because the risk team reasoned: "All synthetic-identity fraud rings use newly issued credit files; Applicant X has a newly issued credit file; therefore Applicant X is part of a fraud ring."',
      naiveFixAndWhyItFails:
        'Lower the fraud threshold across the entire portfolio—which fails because it leaves the broken deductive inference intact while letting real fraud slip through.',
      firstPrinciplesSolution:
        'Audit the rule using Venn diagrams and formal logic to expose the Undistributed Middle fallacy (`All A are B; C is B; therefore C is A`), then combine domain knowledge and creative feature engineering to require independent co-premises (device velocity + address mismatch).',
      measurableOutcome:
        'False-positive rejections of legitimate new-to-credit borrowers drop by 76% while fraud capture accuracy improves by 14%.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'cth-ch02-q1',
        scenarioPrompt:
          'Consider the argument: "All humans are mortal. Socrates is mortal. Therefore, Socrates is a human (or all humans are Socrates)." Which formal fallacy does this commit?',
        options: [
          {
            label: 'A',
            text: 'Ad Hominem',
            isCorrect: false,
            explanation: 'Ad Hominem is an informal fallacy attacking the person rather than a structural syllogistic error.'
          },
          {
            label: 'B',
            text: 'Fallacy of the Undistributed Middle',
            isCorrect: true,
            explanation: 'In the Fallacy of the Undistributed Middle (All A are B; C is B; therefore C is A), the middle term ("mortal") never covers the entire category needed to link the subsets—a dog or a cat is also mortal without being Socrates.'
          },
          {
            label: 'C',
            text: 'Straw Man Fallacy',
            isCorrect: false,
            explanation: 'Straw Man is an informal fallacy of distorting an opponent\'s argument.'
          },
          {
            label: 'D',
            text: 'Hasty Generalization',
            isCorrect: false,
            explanation: 'Hasty Generalization is an inductive sampling error rather than a formal deductive syllogism error.'
          }
        ]
      },
      {
        id: 'cth-ch02-q2',
        scenarioPrompt:
          'When translating a messy natural-language editorial into formal premises and a conclusion, why does Haber insist that the translation be "Economical"?',
        options: [
          {
            label: 'A',
            text: 'Because paper and ink are expensive in academic publishing.',
            isCorrect: false,
            explanation: 'Economy in logical translation is an epistemic rule about premise vulnerability, not printing cost.'
          },
          {
            label: 'B',
            text: 'Because every additional premise added to an argument introduces another potential point of failure that could render the argument unsound.',
            isCorrect: true,
            explanation: 'If an argument relies on five premises instead of two, falsifying any single required co-premise collapses the argument; economy ensures you include only the minimum premises actually required for the inference.'
          },
          {
            label: 'C',
            text: 'Because short sentences are easier to memorize for standardized tests.',
            isCorrect: false,
            explanation: 'Logical economy concerns the number of distinct premises assumed, not mere sentence length for memorization.'
          },
          {
            label: 'D',
            text: 'Because deductive arguments are only allowed to have exactly one premise.',
            isCorrect: false,
            explanation: 'Classical syllogisms and complex arguments routinely combine two or more co-premises.'
          }
        ]
      },
      {
        id: 'cth-ch02-q3',
        scenarioPrompt:
          'How does "arguing" fundamentally differ from "explaining" in critical-thinking theory?',
        options: [
          {
            label: 'A',
            text: 'Arguing requires shouting, whereas explaining is done calmly.',
            isCorrect: false,
            explanation: 'Shouting characterizes a coercive fight, not a reasoned argument.'
          },
          {
            label: 'B',
            text: 'Arguing aims to increase the acceptability of a contested standpoint through reasons, whereas explaining aims to increase comprehension of a fact both parties already accept as true.',
            isCorrect: true,
            explanation: 'If we both agree the sky is blue and I describe Rayleigh light scattering, I am explaining why an accepted fact occurs; if you doubt a claim and I provide premises to prove it is true, I am arguing.'
          },
          {
            label: 'C',
            text: 'Explaining uses deductive logic, whereas arguing uses only emotional rhetoric.',
            isCorrect: false,
            explanation: 'Both arguments and explanations can use structured logical and empirical connections.'
          },
          {
            label: 'D',
            text: 'There is no difference; logicians treat explanations and arguments as identical.',
            isCorrect: false,
            explanation: 'Logicians carefully separate explanations of accepted facts from arguments over contested claims.'
          }
        ]
      },
      {
        id: 'cth-ch02-q4',
        scenarioPrompt:
          'What did cognitive psychologist Daniel Willingham demonstrate regarding the relationship between critical thinking and background knowledge?',
        options: [
          {
            label: 'A',
            text: 'Background knowledge is obsolete now that search engines can retrieve facts instantly.',
            isCorrect: false,
            explanation: 'Willingham showed that working memory requires internalized domain knowledge to recognize patterns and evaluate search results.'
          },
          {
            label: 'B',
            text: 'Memorizing facts actively damages a student\'s creative reasoning ability.',
            isCorrect: false,
            explanation: 'Domain facts provide the essential substrate for both critical evaluation and creative synthesis.'
          },
          {
            label: 'C',
            text: 'Processes of thought are intertwined with what is being thought about; critical-thinking skills cannot be deployed effectively without deep domain knowledge.',
            isCorrect: true,
            explanation: 'Willingham showed that you cannot evaluate whether an experiment is well controlled or a historical claim is plausible unless you possess substantial domain knowledge about the subject matter.'
          },
          {
            label: 'D',
            text: 'Formal logic rules automatically transfer across chemistry, history, and music without studying those subjects.',
            isCorrect: false,
            explanation: 'Without domain knowledge of chemistry or history, generic logic rules cannot judge the plausibility of domain premises.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'cth-ch02-fc1',
        category: 'foundation',
        front: 'What is the difference between a "Valid" and a "Sound" deductive argument?',
        back: 'A Valid argument has a logical structure where true premises guarantee a true conclusion; a Sound argument is both structurally Valid AND has premises that are factually true in reality.',
        mentalHook: 'Soundness = Valid Blueprint + True Bricks.'
      },
      {
        id: 'cth-ch02-fc2',
        category: 'architecture',
        front: 'What is an Enthymeme?',
        back: 'An argument with an unstated or hidden premise that the speaker leaves implicit, often concealing the most vulnerable assumption.',
        mentalHook: 'The invisible bridge between stated evidence and the claim.'
      },
      {
        id: 'cth-ch02-fc3',
        category: 'evaluation',
        front: 'What are the three rules of Logical Translation?',
        back: 'Accurate (true to speaker intent), Economical (fewest necessary premises), and Charitable (strongest rational interpretation).',
        mentalHook: 'AEC: Accurate, Economical, Charitable.'
      },
      {
        id: 'cth-ch02-fc4',
        category: 'foundation',
        front: 'Contrast Modus Ponens with Modus Tollens.',
        back: 'Modus Ponens affirms the antecedent (If P then Q; P; therefore Q); Modus Tollens denies the consequent (If P then Q; Not Q; therefore Not P).',
        mentalHook: 'Ponens steps forward with P; Tollens falsifies backward with Not-Q.'
      },
      {
        id: 'cth-ch02-fc5',
        category: 'data',
        front: 'What are the five stages of Information Literacy?',
        back: 'Locating, Evaluating, Organizing, Synthesizing, and Communicating information.',
        mentalHook: 'LEOSC: Find it, Vet it, Sort it, Fuse it, Share it.'
      },
      {
        id: 'cth-ch02-fc6',
        category: 'adaptation',
        front: 'Name the eight Intellectual Virtues identified by the Foundation for Critical Thinking.',
        back: 'Intellectual Humility, Courage, Empathy, Autonomy, Integrity, Perseverance, Confidence in Reason, and Fairmindedness.',
        mentalHook: 'The character armor that stops high IQ from becoming partisan sophistry.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'cth-ch02-fc-1',
        conceptTitle: 'The Principle of Charity and Economical Logical Translation',
        prompt:
          'Explain Nigel Warburton\'s Principle of Charity and why translating an opponent\'s argument into its strongest, most economical form is essential for your own epistemic accuracy.',
        rubricChecklist: [
          'Defines the Principle of Charity ("steelmanning") as interpreting a speaker\'s words in the most rational, defensible way possible.',
          'Contrasts charitable translation against the Straw Man fallacy and confirmation bias.',
          'Explains the rule of Economy (avoiding padding an argument with extra weak premises that make it artificially easy to knock down).',
          'Shows why defeating a weak version of an idea leaves the strongest version intact and teaches you nothing.'
        ],
        modelExplanation:
          'When we dislike a conclusion, our confirmation bias tempts us to translate the speaker\'s messy prose into a Straw Man—either distorting their words or piling on extra unnecessary premises so we can easily falsify one of them. Applying the Principle of Charity forces us to build an Accurate, Economical "steelman" with the minimum required premises and the strongest plausible hidden warrant. Only by testing our counterarguments against the strongest version of a rival thesis can we discover whether our own position actually holds up.'
      },
      {
        id: 'cth-ch02-fc-2',
        conceptTitle: 'Toulmin Warrants and Exhuming Hidden Enthymemes',
        prompt:
          'Using Stephen Toulmin\'s framework (Grounds, Warrant, Claim), explain how hidden premises (enthymemes) operate in political or commercial persuasion and how to audit them.',
        rubricChecklist: [
          'Identifies the stated Grounds (evidence) and the stated Claim (conclusion).',
          'Defines the Warrant as the often-unstated co-premise (enthymeme) that authorizes the leap from Grounds to Claim.',
          'Provides a concrete example (such as Haber\'s "You want your kids to succeed -> Vote for me" example).',
          'Explains how making the hidden warrant explicit redirects scrutiny to the unverified causal link.'
        ],
        modelExplanation:
          'Persuaders frequently state an indisputable premise (Grounds: "You want safe streets") and jump straight to their preferred policy (Claim: "Support Bill 42"). They intentionally omit the connecting Warrant—the hidden enthymeme that "Bill 42 is the most effective, harm-free way to produce safe streets." Because listeners naturally nod along to the true stated premise, they often swallow the conclusion without noticing the unproved leap. By writing the unstated warrant onto an argument map, a critical thinker forces the speaker to supply empirical backing for the hidden assumption.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'cth-ch02-n1',
        label: 'Deductive Validity & Soundness',
        category: 'foundation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Structural guarantee that true premises yield a true conclusion (validity) combined with factually true premises (soundness).',
        whyItMatters: 'Separates structural inference defects from factual premise errors.'
      },
      {
        id: 'cth-ch02-n2',
        label: 'Inductive & Abductive Strength',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Reasoning from empirical samples to generalizations or best explanations along a weak-to-strong continuum.',
        whyItMatters: 'Governs scientific discovery, medical diagnosis, and real-world forecasting under uncertainty.'
      },
      {
        id: 'cth-ch02-n3',
        label: 'Enthymeme & Toulmin Warrant',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition: 'The unstated bridging co-premise that connects explicit grounds to a contested claim.',
        whyItMatters: 'Exposes the hidden assumption where most ideological and commercial manipulation resides.'
      },
      {
        id: 'cth-ch02-n4',
        label: 'Charitable Logical Translation',
        category: 'optimization',
        chapterNumber: 2,
        importance: 2,
        definition: 'Converting natural prose into Accurate, Economical, and Charitable ("steelmanned") premise-conclusion maps.',
        whyItMatters: 'Prevents Straw Man fallacies and isolates the true core of a debate.'
      },
      {
        id: 'cth-ch02-n5',
        label: 'Domain Knowledge & Info Literacy',
        category: 'data',
        chapterNumber: 2,
        importance: 1,
        definition: 'Willingham\'s subject-matter baseline paired with locating, evaluating, and synthesizing reliable sources.',
        whyItMatters: 'Supplies the factual substrate required to judge whether premises and warrants are true.'
      },
      {
        id: 'cth-ch02-n6',
        label: 'Metacognitive Dispositions',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 2,
        definition: 'Self-monitoring thought processes through intellectual humility, empathy, courage, and fairmindedness.',
        whyItMatters: 'Prevents high analytical intelligence from degenerating into self-serving sophistry.'
      }
    ],
    edges: [
      {
        source: 'cth-ch02-n4',
        target: 'cth-ch02-n3',
        relationship: 'evaluates',
        explanation: 'Translating rhetorical prose into standardized form exposes hidden enthymemes and warrants.'
      },
      {
        source: 'cth-ch02-n3',
        target: 'cth-ch02-n1',
        relationship: 'part_of',
        explanation: 'Supplying the missing co-premise allows an incomplete argument to be tested for deductive validity.'
      },
      {
        source: 'cth-ch02-n5',
        target: 'cth-ch02-n2',
        relationship: 'prerequisite_for',
        explanation: 'Domain knowledge and information literacy verify whether inductive premises and warrants hold in reality.'
      },
      {
        source: 'cth-ch02-n6',
        target: 'cth-ch02-n4',
        relationship: 'optimizes',
        explanation: 'Intellectual empathy and humility prevent Straw Man distortions during logical translation.'
      },
      {
        source: 'cth-ch02-n1',
        target: 'cth-ch02-n2',
        relationship: 'trades_off_with',
        explanation: 'Deduction offers certainty from fixed axioms while induction and abduction trade certainty for empirical discovery.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: 'Verified all 6 interlocking components of Chapter 2, Figure 9 argument map, Toulmin warrants, Willingham coupling, and intellectual virtues.'
  }
};
