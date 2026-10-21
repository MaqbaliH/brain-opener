import type { ChapterMastery } from '../../../types/book';

export const mppCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'Part 1: Logic in Writing',
  subtitle: 'The Pyramid Rule, Vertical Question-Answer Dialogue, SCQA Introductions, and Deduction vs. Induction',
  readingTimeMinutes: 8,
  sourceWordCount: 23772,
  executiveThesis:
    'Unclear business writing rarely stems from bad grammar; it occurs when the sequence of sentences fights how human working memory processes information. Because short-term memory collapses beyond George Miller’s Magical Number 7 ± 2 items, every clear document must present its governing conclusion first and organize supporting ideas into a strict top-down pyramid driven by an SCQA introduction, vertical question-answer dialogue, and horizontal inductive or deductive groupings.',
  paradigmShift: {
    oldWay:
      'Writers present facts in the bottom-up chronological sequence in which they gathered data, forcing readers to hold dozens of ungrouped details in memory before discovering the conclusion at the end.',
    newWay:
      'Writers synthesize ideas from the bottom up during analysis, then invert the structure to present the single governing thought at the apex followed by logically grouped Key Line arguments.',
    whyItChanged:
      'Human working memory cannot retain more than five to nine ungrouped items at once and automatically guesses premature relationships unless given the governing abstraction first.',
  },
  customDiagrams: [
    {
      id: 'mpp-ch01-svg1',
      title: 'The Minto Pyramid Architecture: SCQA, Vertical Q&A, and Horizontal Logic',
      subtitle: 'How narrative introductions launch the top-down Question/Answer dialogue and Key Line groupings',
      bierutCaption:
        'Anchor the reader with an SCQA narrative at the apex, then answer every vertical question with a horizontal inductive or deductive grouping.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">THE MINTO PYRAMID ARCHITECTURE: TOP-DOWN COGNITIVE HIERARCHY</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Respecting George Miller's 7 ± 2 working-memory limit via pre-sorted pyramidal abstraction</text>

  <!-- Left Panel: SCQA Narrative Funnel -->
  <rect x="24" y="68" width="206" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="127" y="92" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. SCQA INTRODUCTION</text>

  <rect x="40" y="106" width="174" height="54" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="127" y="126" text-anchor="middle" fill="#e2e8f0" font-size="10.5" font-weight="700">S — Situation</text>
  <text x="127" y="144" text-anchor="middle" fill="#94a3b8" font-size="9">Noncontroversial time &amp; place</text>

  <path d="M 127 160 L 127 176" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="176" width="174" height="54" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="127" y="196" text-anchor="middle" fill="#fde68a" font-size="10.5" font-weight="700">C — Complication</text>
  <text x="127" y="214" text-anchor="middle" fill="#94a3b8" font-size="9">Trigger event disrupting stability</text>

  <path d="M 127 230 L 127 246" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="246" width="174" height="54" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="127" y="266" text-anchor="middle" fill="#c7d2fe" font-size="10.5" font-weight="700">Q — Reader's Question</text>
  <text x="127" y="284" text-anchor="middle" fill="#94a3b8" font-size="9">What should we do / How / Why?</text>

  <path d="M 127 300 L 127 318" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="318" width="174" height="60" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="127" y="340" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">A — Governing Answer</text>
  <text x="127" y="358" text-anchor="middle" fill="#d1fae5" font-size="9">Becomes Pyramid Apex Box</text>

  <!-- Arrow from SCQA Answer to Pyramid Apex -->
  <path d="M 230 348 L 266 116" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Right Panel: The Pyramid Structure -->
  <rect x="250" y="68" width="526" height="328" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
  <text x="513" y="90" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="700">2. VERTICAL Q&amp;A DIALOGUE &amp; HORIZONTAL KEY LINE</text>

  <!-- Apex Box -->
  <rect x="368" y="102" width="290" height="52" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="513" y="124" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="700">GOVERNING THOUGHT (APEX)</text>
  <text x="513" y="142" text-anchor="middle" fill="#d1fae5" font-size="9">Single overarching summary statement</text>

  <!-- Vertical Q&A Connectors -->
  <path d="M 430 154 L 336 202" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 513 154 L 513 202" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 596 154 L 690 202" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <text x="513" y="182" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="700">Vertical Question: "Why?" or "How?"</text>

  <!-- Key Line Boxes -->
  <rect x="268" y="202" width="144" height="56" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="340" y="224" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">Key Line Idea 1</text>
  <text x="340" y="242" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Plural Noun Match</text>

  <rect x="441" y="202" width="144" height="56" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="513" y="224" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">Key Line Idea 2</text>
  <text x="513" y="242" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Inductive / Deductive</text>

  <rect x="614" y="202" width="144" height="56" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="686" y="224" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">Key Line Idea 3</text>
  <text x="686" y="242" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Logically Ordered</text>

  <!-- Support Level -->
  <path d="M 310 258 L 296 298" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 370 258 L 384 298" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 483 258 L 469 298" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 543 258 L 557 298" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 656 258 L 642 298" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 716 258 L 730 298" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6 4" />

  <rect x="268" y="298" width="64" height="38" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="300" y="321" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Fact 1.1</text>
  <rect x="348" y="298" width="64" height="38" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="380" y="321" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Fact 1.2</text>

  <rect x="441" y="298" width="64" height="38" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="473" y="321" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Fact 2.1</text>
  <rect x="521" y="298" width="64" height="38" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="553" y="321" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Fact 2.2</text>

  <rect x="614" y="298" width="64" height="38" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="646" y="321" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Fact 3.1</text>
  <rect x="694" y="298" width="64" height="38" rx="4" fill="#0f172a" stroke="#64748b" />
  <text x="726" y="321" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Fact 3.2</text>

  <!-- 3 Golden Rules Banner -->
  <rect x="268" y="348" width="490" height="34" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="513" y="369" text-anchor="middle" fill="#fde68a" font-size="9.5" font-weight="600">3 GOLDEN RULES: (1) Summarize Below  •  (2) Same Kind of Idea  •  (3) Logically Ordered</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'SCQA Narrative Funnel',
          explanation:
            'Reminds the reader of a noncontroversial Situation and Complication that trigger the single Question answered by the Pyramid Apex.',
        },
        {
          step: '2',
          label: 'Vertical Question-Answer Dialogue',
          explanation:
            'Every statement above raises a logical Why or How question in the reader’s mind that must be answered on the tier directly below.',
        },
        {
          step: '3',
          label: 'Horizontal Key Line Grouping',
          explanation:
            'Ideas across any horizontal row must form either a valid deductive syllogism or an inductive set sharing a single plural noun.',
        },
      ],
    },
    {
      id: 'mpp-ch01-svg2',
      title: 'Deductive Syllogism Chains vs. Direct Inductive Grouping at the Key Line',
      subtitle: 'Why converting chained deductive problem-solving into inductive Key Line arguments saves cognitive load',
      bierutCaption:
        'Replace ponderous three-step deductive chains at the Key Line with direct inductive groupings partitioned by subject.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">DEDUCTIVE MYSTERY CHAINS VS. INDUCTIVE KEY LINE CLARITY</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Why you should think deductively during analysis but present inductively on the Key Line</text>

  <!-- Left Side: Chained Deductive Argument -->
  <rect x="24" y="68" width="364" height="328" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5" />
  <text x="206" y="92" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="700">DEDUCTIVE KEY LINE (HIGH COGNITIVE STRAIN)</text>

  <rect x="86" y="106" width="240" height="42" rx="6" fill="#0f172a" stroke="#f87171" />
  <text x="206" y="125" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">Change Present Operations (X)</text>
  <text x="206" y="140" text-anchor="middle" fill="#fca5a5" font-size="8.5">Reader waits until column 3 for actions</text>

  <rect x="38" y="168" width="102" height="58" rx="5" fill="#0f172a" stroke="#64748b" />
  <text x="89" y="188" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="700">1. What's Wrong</text>
  <text x="89" y="204" text-anchor="middle" fill="#94a3b8" font-size="8">Findings A1, B1, C1</text>

  <path d="M 140 197 L 155 197" stroke="#f87171" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="155" y="168" width="102" height="58" rx="5" fill="#0f172a" stroke="#64748b" />
  <text x="206" y="188" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="700">2. Root Cause</text>
  <text x="206" y="204" text-anchor="middle" fill="#94a3b8" font-size="8">Causes A2, B2, C2</text>

  <path d="M 257 197 L 272 197" stroke="#f87171" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="272" y="168" width="102" height="58" rx="5" fill="#0f172a" stroke="#f87171" />
  <text x="323" y="188" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">3. Therefore Do</text>
  <text x="323" y="204" text-anchor="middle" fill="#94a3b8" font-size="8">Actions A3, B3, C3</text>

  <rect x="38" y="246" width="336" height="132" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="206" y="268" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">Why Readers Hate Deductive Key Lines:</text>
  <text x="206" y="290" text-anchor="middle" fill="#cbd5e1" font-size="9">• Forces reader to hold A1, B1, C1 in memory</text>
  <text x="206" y="308" text-anchor="middle" fill="#cbd5e1" font-size="9">• Cross-matches A1→A2→A3 across three sections</text>
  <text x="206" y="326" text-anchor="middle" fill="#cbd5e1" font-size="9">• Turns Monday-morning action into a mystery story</text>
  <text x="206" y="352" text-anchor="middle" fill="#fca5a5" font-size="9" font-family="monospace">Rule → Case → Therefore Conclusion</text>

  <!-- Right Side: Direct Inductive Grouping -->
  <rect x="412" y="68" width="364" height="328" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="92" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="700">INDUCTIVE KEY LINE (ZERO CROSS-REFERENCING)</text>

  <rect x="474" y="106" width="240" height="42" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="125" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Execute 3 Actions to Fix Operations (X)</text>
  <text x="594" y="140" text-anchor="middle" fill="#d1fae5" font-size="8.5">Answers "How?" immediately at Key Line</text>

  <rect x="426" y="168" width="102" height="58" rx="5" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="477" y="188" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Action A3</text>
  <text x="477" y="204" text-anchor="middle" fill="#7dd3fc" font-size="8">Supported by A1, A2</text>

  <rect x="543" y="168" width="102" height="58" rx="5" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="594" y="188" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Action B3</text>
  <text x="594" y="204" text-anchor="middle" fill="#7dd3fc" font-size="8">Supported by B1, B2</text>

  <rect x="660" y="168" width="102" height="58" rx="5" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="711" y="188" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Action C3</text>
  <text x="711" y="204" text-anchor="middle" fill="#7dd3fc" font-size="8">Supported by C1, C2</text>

  <rect x="426" y="246" width="336" height="132" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="594" y="268" text-anchor="middle" fill="#34d399" font-size="10" font-weight="700">Why Inductive Key Lines Win:</text>
  <text x="594" y="290" text-anchor="middle" fill="#cbd5e1" font-size="9">• Answers "How?" first, then defends "Why?" below</text>
  <text x="594" y="308" text-anchor="middle" fill="#cbd5e1" font-size="9">• Places clear fences between Subject A, B, and C</text>
  <text x="594" y="326" text-anchor="middle" fill="#cbd5e1" font-size="9">• Entire thinking absorbed in first 30 seconds</text>
  <text x="594" y="352" text-anchor="middle" fill="#6ee7b7" font-size="9" font-family="monospace">Shared Plural Noun → Direct Inference</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Deductive Replay Trap',
          explanation:
            'Presenting Findings (A1, B1, C1) → Conclusions (A2, B2, C2) → Recommendations (A3, B3, C3) forces the reader to re-enact your entire research history.',
        },
        {
          step: '2',
          label: 'Inductive Key Line Inversion',
          explanation:
            'State the recommended actions (A3, B3, C3) across the Key Line first, then nest the supporting findings and causes (A1, A2) directly underneath each action.',
        },
        {
          step: '3',
          label: 'Plural Noun Verification',
          explanation:
            'Every inductive grouping must share a single plural noun (steps, reasons, problems) and vary either the subject or the predicate systematically.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mpp-ch01-mm1',
      name: 'Miller’s 7 ± 2 Pyramid Constraint',
      tagline: 'Short-term memory drops ungrouped items above seven unless abstracted into categories',
      naiveIntuition:
        'If every sentence in a ten-page memorandum is grammatically simple, an intelligent executive will easily follow and remember all one hundred sentences.',
      firstPrinciplesReality:
        'Human working memory can hold only five to nine items simultaneously; when presented with a serial stream of facts, the mind scrabbles to invent premature categories unless given the governing summary first.',
      howToApply:
        'Never present more than four or five points in a single grouping, and always state the higher-level category before listing the individual items it summarizes.',
    },
    {
      id: 'mpp-ch01-mm2',
      name: 'Bottom-Up Synthesis, Top-Down Delivery',
      tagline: 'Discover your insights from the ground up, but communicate them from the apex down',
      naiveIntuition:
        'Because you discovered the answer by gathering facts, analyzing causes, and drawing conclusions, you should write the report in that exact chronological sequence.',
      firstPrinciplesReality:
        'Thinking is a bottom-up abstraction process of grouping sentences into paragraphs and sections, whereas reading is a sequential one-sentence-at-a-time process that requires the top-level framework first.',
      howToApply:
        'Sort raw findings into cause-and-effect clusters to discover your single governing conclusion, then place that conclusion in the opening thirty seconds of the document.',
    },
    {
      id: 'mpp-ch01-mm3',
      name: 'The SCQA Cognitive Synchronization Gate',
      tagline: 'Ensure the reader is standing in the same place before leading them down your pyramid',
      naiveIntuition:
        'An introduction should summarize background facts, list your analytical methodology, or state the topics the report will cover.',
      firstPrinciplesReality:
        'Readers only care about new ideas that answer a question already existing in their minds; telling an uncontested Situation-Complication story triggers that exact Question.',
      howToApply:
        'Open with a noncontroversial Situation about the subject, introduce the Complication that disrupted it, and deliver your governing Answer to the resulting Question.',
    },
  ],
  deepSections: [
    {
      id: 'mpp-ch01-sec1',
      sectionNumber: '1.1',
      title: 'Working Memory Limits & The Three Golden Pyramid Rules',
      subtitle: 'Why George Miller’s Magical Number 7 ± 2 forces top-down pyramidal abstraction',
      coreMechanism:
        'As George A. Miller proved in "The Magical Number Seven, Plus or Minus Two," human short-term memory cannot hold more than five to nine discrete items at once. When a reader encounters a stream of ungrouped facts—such as nine random grocery items or three observations about facial hair in Zurich, New York, and London—the mind automatically expends cognitive energy guessing a unifying pattern. If you withhold your governing conclusion until the end, the reader frequently invents the wrong relationship or gives up in frustration.\n\nTo eliminate this mental strain, every document must pre-sort its ideas into a pyramid under a single governing thought that obeys three strict rules: (1) Ideas at any level must always be summaries of the ideas grouped below them; (2) Ideas in each grouping must always be the same kind of idea (describable by one plural noun); and (3) Ideas in each grouping must always be logically ordered (deductively, chronologically, structurally, or comparatively).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Abstract One Level Up',
          detail: 'Group 3 to 5 related lower-level facts under a single summarizing insight.',
        },
        {
          step: '2',
          title: 'Enforce Plural-Noun Sameness',
          detail: 'Verify every point in a horizontal group belongs to the same logical class (reasons, steps, or problems).',
        },
        {
          step: '3',
          title: 'Sequence Top-Down',
          detail: 'State the governing summary first so the reader processes every subordinate point inside your intended frame.',
        },
      ],
      formulas: [
        {
          name: 'Miller’s Working Memory Capacity Bound',
          expression: 'N_{active} \\le 7 \\pm 2 \\implies N_{group} \\in [3, 5]',
          intuition:
            'Because human short-term memory saturates between 5 and 9 items, each horizontal grouping in a pyramid should contain 3 to 5 points summarized by 1 parent abstraction.',
          variables: [
            { symbol: 'N_{active}', meaning: 'Maximum discrete items held simultaneously in human working memory (5 to 9)' },
            { symbol: 'N_{group}', meaning: 'Optimal number of sibling points under any single parent box in a Minto Pyramid (3 to 5)' },
          ],
          workedExample:
            'Instead of asking someone to remember 9 ungrouped grocery items (grapes, milk, potatoes, eggs, carrots, oranges, butter, apples, sour cream), group them into 3 supermarket sections: Dairy (3), Fruit (3), and Vegetables (3).',
        },
      ],
      keyTakeaways: [
        'Readers absorb ideas one sentence at a time and always look for a connecting pattern among adjacent statements.',
        'Every valid grouping in a pyramid must obey the three golden rules: summarize below, match in logical kind, and follow an explicit order.',
      ],
      commonPitfalls: [
        'Trying to fix unclear writing by polishing sentence style when the underlying sequence of ideas is bottom-up.',
        'Grouping apples and chairs together, which forces the summary up to an uselessly broad abstraction like "inanimate objects."',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_ch01_plate.png',
          originalLabel: 'Part 1 Opening Blueprint: Logic in Writing (Page 17)',
          bierutTitle: 'Structure Every Document as a Single Governing Thought Supported by Pre-Sorted Pyramidal Tiers',
          editorialAnalysis:
            'The Part 1 architectural blueprint illustrates how bottom-up sentence and paragraph clusters converge into a single top-down pyramid where every parent node summarizes its children and triggers a vertical Question/Answer dialogue.',
          keyTakeaways: [
            'The reader receives major, abstract conclusions before minor supporting evidence.',
            'The entire thinking of a document should be clear within the first 30 seconds of reading.',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch01-sec2',
      sectionNumber: '1.2',
      title: 'Vertical Q&A Dialogue and SCQA Narrative Introductions',
      subtitle: 'Locking reader attention through question-raising statements and uncontested opening stories',
      coreMechanism:
        'Within a pyramid, any idea is a statement that tells the reader something they do not know, which automatically triggers a logical question in their mind—such as "Why?", "How?", or "Why do you say that?" The writer is obligated to answer that question horizontally on the Key Line directly below, continuing the vertical Question/Answer dialogue down each leg until the reader has no further logical objections.\n\nTo ensure the apex statement itself answers a question the reader actually cares about, the introduction must trace the history of that question using a classic narrative story: Situation, Complication, Question, Answer (SCQA). You begin the Situation with a self-sufficient, noncontroversial truth about the subject that anchors time and place. Once the reader mentally nods ("Yes, I know that, so what?"), you state the Complication—what happened next to disrupt the situation—which triggers the exact Question answered by your Main Point.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Anchor the Situation (S)',
          detail: 'State a noncontroversial, established truth about the subject that the reader immediately accepts.',
        },
        {
          step: '2',
          title: 'Introduce the Complication (C)',
          detail: 'Describe the obstacle, problem, or change that disrupted the Situation and raised the reader’s Question (Q).',
        },
        {
          step: '3',
          title: 'Drive the Vertical Q&A',
          detail: 'Deliver the Answer (A) at the apex, then answer the New Question it raises across the Key Line points.',
        },
      ],
      keyTakeaways: [
        'Never raise a question before you are ready to answer it, and never answer a question (such as "Our Assumptions") before raising it.',
        'The introduction contains only what the reader already knows or accepts as true, while the pyramid body contains only new ideas.',
      ],
      commonPitfalls: [
        'Putting historical chronology in the body of the document instead of weaving it into the SCQA introduction.',
        'Listing empty category headings like "Background," "Findings," or "Conclusions" instead of stating full idea sentences on the Key Line.',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_p017_fig1.png',
          originalLabel: 'Page 17 Pyramid Substructures Diagram',
          bierutTitle: 'Synchronize Vertical Question-Answer Momentum with Narrative Introductory Flow',
          editorialAnalysis:
            'Minto’s substructure schematic separates the narrative introductory cylinder (S-C-Q) from the logical pyramid body, proving that historical context belongs strictly in the introduction while the pyramid body houses only logical Q&A relationships.',
          keyTakeaways: [
            'Most business documents answer one of four core questions: What should we do? How should we do it? Should we do it? or Why did it happen?',
            'Each Key Line section in a long report should also open with a miniature S-C-Q story.',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch01-sec3',
      sectionNumber: '1.3',
      title: 'Deductive Syllogisms vs. Inductive Groupings at the Key Line',
      subtitle: 'Distinguishing chained "Therefore" arguments from parallel plural-noun inferences',
      coreMechanism:
        'Horizontal groupings can relate in only two ways: deductively or inductively. A deductive argument moves in three chained steps: (1) make a statement about a situation existing in the world; (2) make a second statement commenting on the subject or predicate of the first; and (3) state the "Therefore" implication of both existing simultaneously. Its summary rests heavily on the final conclusion ("Because Socrates is a man, he is mortal"). An inductive grouping, by contrast, brings together independent statements that share the same plural noun—holding either the subject constant while varying the predicate, or the predicate constant while varying the subject—and draws a unifying inference above.\n\nAlthough analysts naturally solve problems deductively (Findings → Conclusions → Recommendations), presenting a deductive argument across the Key Line is ponderous because it forces the reader to cross-reference A1 to A2 to A3 across separate sections before learning what to do Monday morning. Given a choice, always convert Key Line arguments into inductive groupings so the reader gets direct recommendations first.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Test Sentence Coupling',
          detail: 'Check whether the second point comments on the subject/predicate of the first (deductive) or adds a parallel class member (inductive).',
        },
        {
          step: '2',
          title: 'Eliminate "News" Lists',
          detail: 'Reject unrelated true facts (e.g., entering China, Iceland, and Peru) that share no underlying analytical similarity.',
        },
        {
          step: '3',
          title: 'Invert Key Line to Induction',
          detail: 'Place action recommendations (A3, B3, C3) across the Key Line and nest deductive findings (A1, A2) underneath each.',
        },
      ],
      keyTakeaways: [
        'Deductive points derive sequentially from each other ("therefore"), whereas inductive points are independent siblings sharing a plural noun.',
        'At the Key Line level, inductive reasoning is almost always superior to deduction because it answers "How?" or "Why?" directly without mystery.',
      ],
      commonPitfalls: [
        'Structuring a report into "Here is what is going wrong (A1, B1, C1) → Here is what causes it (A2, B2, C2) → Here is what to do (A3, B3, C3)."',
        'Including true facts ("news") in a grouping when they do not support a higher-level deductive or inductive inference.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Horizontal Logic & Pyramid Construction Comparison Matrix',
      description: 'Evaluating Deductive vs. Inductive horizontal groupings and Top-Down vs. Bottom-Up pyramid construction.',
      headers: ['Logical Pattern', 'Structural Mechanism', 'Summary Derivation Rule', 'Cognitive Load on Reader', 'Optimal Placement'],
      rows: [
        [
          'Inductive Grouping',
          'Parallel ideas sharing one plural noun (same subject or predicate class)',
          'Draw a single inference stating the significance of their shared similarity',
          'Low (clear fences between topics; immediate comprehension)',
          'Key Line level and primary section divisions',
        ],
        [
          'Deductive Grouping',
          '3-step syllogism: Situation 1 → Comment on Subject/Predicate → Therefore',
          'Summarize the chain by resting heavily on the final "Therefore" conclusion',
          'High if chained across sections (forces memory cross-matching)',
          'Lowest-level paragraph arguments or when only 1 piece of evidence exists',
        ],
        [
          'Top-Down Construction',
          'Define Subject → Reader Question → Answer → Check via S-C-Q → Key Line',
          'Answer to Reader Question becomes the Pyramid Apex directly',
          'Lowest writer & reader friction when Subject and Question are clear',
          'Default starting procedure for all memos, proposals, and directives',
        ],
        [
          'Bottom-Up Construction',
          'List all points → Separate Problems vs. Solutions → Map cause-effect chains',
          'Cluster findings into conclusions to discover the governing thought',
          'Essential for writer when facing a rambling, unorganized draft',
          'Early-stage diagnostic notes (e.g., the TTW Composing Room memo)',
        ],
      ],
      verdictRule:
        'Always build your pyramid Top-Down first using the SCQA check (switching to Bottom-Up only when your Subject or Question is hazy), and always prefer Inductive groupings over Deductive chains at the Key Line.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mpp-ch01-scen1',
      title: 'Rewriting the Big Chief National Accounts Prepayment Memo',
      roleAndContext: 'Head of Accounting at a US beverage company responding to an executive query on whether customer "Big Chief" can submit monthly delivery tickets via computer disk and prepaid check.',
      symptomOrFailure: 'The original memo listed three dense paragraphs explaining record layouts, extract programs, and zero-balance data-processing rules without ever answering whether the proposal was a good idea.',
      naiveFixAndWhyItFails: 'Editing the technical jargon into shorter sentences fails because describing how the system works still leaves the executive’s actual question ("Should we approve Big Chief’s request?") unanswered.',
      firstPrinciplesSolution: 'Apply the Top-Down SCQA box method: Situation (Big Chief requested disk prepayment), Complication (You asked if it makes sense), Question (Is it a good idea?), Answer (Yes, for three Key Line reasons: gives needed information, increases cash flow, and reduces workload from 5 weeks to 1 day).',
      measurableOutcome: 'Transformed an unreadable data-processing recital into a 30-second executive decision memo with three clear inductive reasons.',
    },
    {
      id: 'mpp-ch01-scen2',
      title: 'Rescuing the Rambling TTW Printing Composing Room Memo',
      roleAndContext: 'Junior consultant at an English printing company (TTW) reporting two weeks of field findings on composing room costs (40% of hardbacks, 50–55% of paperbacks).',
      symptomOrFailure: 'The draft memo rambled across 14 disconnected paragraphs mixing PAR productivity benchmarks, union demands, compositor turnover, overtime exceeding budget by 50%, and quality checks.',
      naiveFixAndWhyItFails: 'Grouping the sentences under generic headings like "Findings" and "Conclusions" fails because it hides the two distinct cause-and-effect chains driving high costs.',
      firstPrinciplesSolution: 'Execute the 3-step Bottom-Up method: separate the 8 problems into two causal chains—(1) uniform quality steps on simple jobs causing low PAR productivity, and (2) uncompetitive wages causing staff shortages and 50%+ overtime—then invert into a top-down pyramid recommending two Key Line actions: eliminate unnecessary steps for simple jobs and raise wages to competitive levels.',
      measurableOutcome: 'Converted a confused 2-week field dump into an actionable executive report whose entire logic is grasped in 30 seconds.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mpp-ch01-q1',
        scenarioPrompt:
          'Why does Barbara Minto cite George A. Miller’s "Magical Number Seven, Plus or Minus Two" as the foundational psychological law requiring a top-down pyramid structure in writing?',
        options: [
          {
            label: 'A',
            text: 'Because every business report should contain exactly seven chapters with seven paragraphs each.',
            isCorrect: false,
            explanation: 'Miller’s law describes the ceiling of short-term working memory, not a rigid page-count or chapter-count quota.',
          },
          {
            label: 'B',
            text: 'Because human short-term memory cannot hold more than five to nine ungrouped items at once, forcing the mind to categorize ideas hierarchically and requiring writers to state the governing category before the details.',
            isCorrect: true,
            explanation: 'When items exceed four or five, the mind must group and abstract them into a pyramid; giving the top-level summary first ensures the reader slots every detail into the writer’s intended category.',
          },
          {
            label: 'C',
            text: 'Because readers only remember the last seven words of any sentence.',
            isCorrect: false,
            explanation: 'The limit applies to discrete concepts or ideas held simultaneously in short-term memory across a grouping.',
          },
          {
            label: 'D',
            text: 'Because deductive syllogisms require seven premises to be logically valid.',
            isCorrect: false,
            explanation: 'A deductive syllogism contains three steps (major premise, minor premise, conclusion) and is never chained beyond four points.',
          },
        ],
      },
      {
        id: 'mpp-ch01-q2',
        scenarioPrompt:
          'You are reviewing a draft report whose opening section is titled "Our Assumptions" followed by five pages of historical background before the author states the main recommendation. Which Pyramid Principle rule does this violate?',
        options: [
          {
            label: 'A',
            text: 'It violates the Vertical Question/Answer rule by answering lower-level questions before raising them, and violates the Introduction rule by failing to separate uncontested SCQA narrative from new pyramid ideas.',
            isCorrect: true,
            explanation: 'In the vertical Q&A dialogue, you must never answer questions (like assumptions) before stating the top point that raises them, and historical chronology belongs strictly inside a concise SCQA introduction.',
          },
          {
            label: 'B',
            text: 'It violates the rule that every report must start with an Aggressive (Question-Situation-Complication) tone.',
            isCorrect: false,
            explanation: 'While S-C-Q elements can be reordered for tone, the failure here is answering unasked questions before stating the governing conclusion.',
          },
          {
            label: 'C',
            text: 'It violates the rule that assumptions must be placed in the Next Steps section at the end of the report.',
            isCorrect: false,
            explanation: 'Next Steps contains only self-evident Monday-morning actions, not analytical assumptions.',
          },
          {
            label: 'D',
            text: 'It violates no rule provided the sentences are short and free of technical jargon.',
            isCorrect: false,
            explanation: 'Minto proves that structural sequence, not sentence style, is the primary cause of unclear writing.',
          },
        ],
      },
      {
        id: 'mpp-ch01-q3',
        scenarioPrompt:
          'An analyst writes three statements: (1) "Japanese businessmen are escalating their drive for the Chinese market," (2) "Japanese businessmen are escalating their drive for the Indonesian market," and (3) "Japanese businessmen are escalating their drive for the Australian market." How are these statements related?',
        options: [
          {
            label: 'A',
            text: 'They form a deductive syllogism because each statement comments on the predicate of the preceding statement.',
            isCorrect: false,
            explanation: 'None of the statements comments on the subject or predicate of the first to yield a "therefore" syllogism.',
          },
          {
            label: 'B',
            text: 'They are unrelated "news" statements that cannot be summarized and must be deleted.',
            isCorrect: false,
            explanation: 'Unlike China, Iceland, and Peru, China, Indonesia, and Australia share a geographic market class (Southeast Asia / Asia-Pacific) that supports a valid inductive inference.',
          },
          {
            label: 'C',
            text: 'They form an inductive grouping that holds the subject constant and varies the predicate within a shared class, supporting the summary inference: "Japanese businessmen are moving aggressively into Southeast Asia."',
            isCorrect: true,
            explanation: 'Inductive groupings hold either the subject or predicate constant while varying the other across a shared plural noun class, allowing an upward inference.',
          },
          {
            label: 'D',
            text: 'They form a Situation-Complication-Question introduction.',
            isCorrect: false,
            explanation: 'These are three parallel sibling findings in the body of a pyramid, not a narrative story.',
          },
        ],
      },
      {
        id: 'mpp-ch01-q4',
        scenarioPrompt:
          'At the end of an engagement, a team has Findings (A1, B1, C1: what is going wrong), Conclusions (A2, B2, C2: what is causing it), and Recommendations (A3, B3, C3: what to do about it). Why does Minto strongly advise against using a deductive Key Line ("Here is what is wrong → Here is what causes it → Therefore here is what to do")?',
        options: [
          {
            label: 'A',
            text: 'Because deductive reasoning is logically weaker than inductive reasoning.',
            isCorrect: false,
            explanation: 'Minto explicitly notes that both use the exact same underlying reasoning; the difference is purely how clearly it is laid out for the reader.',
          },
          {
            label: 'B',
            text: 'Because a deductive Key Line forces the reader to hold A1, B1, C1 in memory, cross-match them to A2, B2, C2, and wait until the end to learn Monday-morning actions, whereas an inductive Key Line presents Actions A3, B3, C3 immediately with their specific causes nested underneath.',
            isCorrect: true,
            explanation: 'Answering "How?" inductively at the Key Line puts clear fences between subject areas A, B, and C and delivers the actionable recommendations immediately.',
          },
          {
            label: 'C',
            text: 'Because findings and conclusions are forbidden inside business reports.',
            isCorrect: false,
            explanation: 'Findings and conclusions are not deleted; they are placed vertically underneath the specific Key Line recommendation (A3, B3, C3) they defend.',
          },
          {
            label: 'D',
            text: 'Because executives only read documents that contain no more than three paragraphs total.',
            isCorrect: false,
            explanation: 'Executives read long documents when needed, provided the introduction and Key Line let them grasp the entire thinking in the first 30 seconds.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mpp-ch01-fc1',
        category: 'foundation',
        front: 'What are the Three Golden Rules that every grouping in a Minto Pyramid must obey?',
        back: '1. Ideas at any level must always be summaries of the ideas grouped below them; 2. Ideas in each grouping must always be the same kind of idea; 3. Ideas in each grouping must always be logically ordered.',
        mentalHook: 'Summarize Below, Same Kind (Plural Noun), Logical Order.',
      },
      {
        id: 'mpp-ch01-fc2',
        category: 'architecture',
        front: 'What are the three structural substructures inside a Minto Pyramid and how do they speed up discovery?',
        back: '1. The Vertical Relationship (Question/Answer dialogue between tiers); 2. The Horizontal Relationship (Deductive or Inductive logic within a grouping); 3. The Narrative Introductory Flow (Situation → Complication → Question → Answer).',
        mentalHook: 'Vertical Q&A, Horizontal Logic, Narrative SCQA.',
      },
      {
        id: 'mpp-ch01-fc3',
        category: 'foundation',
        front: 'What are the four—and only four—possible logical orders the human mind can impose on a grouping of ideas?',
        back: '1. Deductively (major premise, minor premise, conclusion); 2. Chronologically / Time order (first, second, third); 3. Structurally (dividing a physical or conceptual whole into MECE parts); 4. Comparatively / Degree order (first most important, second most important).',
        mentalHook: 'Deduction, Time, Structure, Degree.',
      },
      {
        id: 'mpp-ch01-fc4',
        category: 'evaluation',
        front: 'How do you distinguish a valid Inductive grouping from mere "News" (like Japanese businessmen entering China, Iceland, and Peru)?',
        back: 'In a valid inductive grouping, the varied elements (subjects or predicates) share an intrinsic class characteristic that supports a higher-level inference; if nothing unites them beyond the literal sentence, they are just "news" and must be cut.',
        mentalHook: 'No shared class = News, not Thinking.',
      },
      {
        id: 'mpp-ch01-fc5',
        category: 'adaptation',
        front: 'How can the S-C-Q-A elements of an introduction be reordered to shift the emotional tone of a memorandum?',
        back: 'Standard: S-C-A; Direct: A-S-C; Concerned: C-S-A; Aggressive: Q-S-C-A.',
        mentalHook: 'Start with C when concerned, A when direct, Q when aggressive.',
      },
      {
        id: 'mpp-ch01-fc6',
        category: 'optimization',
        front: 'What is the "30-Second Rule" for the opening of any business document?',
        back: 'By including the SCQA introduction, the Main Point, and the Key Line points at the very beginning, the reader must be able to grasp your entire thinking in the first 30 seconds of reading.',
        mentalHook: 'If the whole argument isn’t clear in 30 seconds, rewrite.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mpp-ch01-feyn1',
        conceptTitle: 'Why Bottom-Up Thinking Must Be Inverted into Top-Down Writing',
        prompt:
          'Explain to a senior engineer why writing a report in the chronological order in which they conducted their investigation confuses executives, using George Miller’s working-memory research and Minto’s Zurich/New York/London pub story.',
        rubricChecklist: [
          'Cites George Miller’s Magical Number 7 ± 2 limit on short-term working memory.',
          'Explains that readers automatically assume adjacent sentences belong together and expend mental energy guessing the unstated relationship.',
          'Uses the Zurich/New York/London facial hair example to show how withholding the top category ("facial hair is accepted in business life") causes listeners to guess wrong conclusions.',
          'Contrasts bottom-up thinking (grouping sentences into paragraphs and sections to discover conclusions) with top-down presentation (stating the governing summary first).',
        ],
        modelExplanation:
          'When you think through a problem, you naturally work from the bottom up—gathering low-level facts, grouping them into findings, and abstracting up to a final conclusion. However, a reader takes in your document one sentence at a time and can hold only five to nine items in short-term memory (Miller’s 7 ± 2 law). If you give facts one by one—like mentioning beards in Zurich, sideburns in New York, and facial hair in London without first stating your overarching point—the reader’s brain scrambles to guess what connects them and usually guesses wrong. Presenting the governing summary at the top ("Facial hair has become an accepted part of business life") gives the reader the mental container first so every subsequent detail slots effortlessly into place.',
      },
      {
        id: 'mpp-ch01-feyn2',
        conceptTitle: 'SCQA Introductions and Inductive vs. Deductive Key Lines',
        prompt:
          'Walk through how to build a pyramid from the top down using the SCQA introduction check, and explain why the Key Line should almost always use inductive grouping rather than a deductive syllogism.',
        rubricChecklist: [
          'Defines the 4 elements of SCQA: noncontroversial Situation, disrupting Complication, triggered reader Question, and governing Answer.',
          'Explains the partition rule: the introduction tells the reader only what they already know/agree is true, while the pyramid body contains only new ideas that raise questions.',
          'Contrasts a 3-step deductive syllogism (Rule → Comment on Subject/Predicate → Therefore) against an inductive grouping (parallel items sharing a plural noun).',
          'Demonstrates why an inductive Key Line (Actions A3, B3, C3) avoids the cross-referencing memory burden of a deductive Key Line (Findings → Conclusions → Recommendations).',
        ],
        modelExplanation:
          'To build a pyramid top-down, identify your Subject, the Question in the reader’s mind, and your governing Answer. Verify that Question by tracing a narrative story the reader already knows: start with a noncontroversial Situation, introduce the Complication that disrupted it, and confirm it triggers your exact Question. Once your Answer sits at the apex, it raises a new "Why?" or "How?" question answered on the Key Line. Although you solved the problem deductively (Findings → Conclusions → Recommendations), never lay out the Key Line deductively; doing so forces the reader to hold all findings in memory and cross-match them across three sections before learning what to do. Instead, group your Key Line inductively around the recommended actions (A3, B3, C3) and nest each action’s supporting findings directly underneath it.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mpp-pyramid-principle',
        label: 'The Minto Pyramid Principle',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'Top-down communication hierarchy where a single governing thought at the apex is supported by grouped, logically ordered tiers of subordinate ideas.',
        formulaOrRule: '1. Summarize below; 2. Same kind of idea (plural noun); 3. Logically ordered',
        whyItMatters: 'Aligns written communication with the 7 ± 2 working-memory constraint of the human mind.',
      },
      {
        id: 'mpp-magical-number-seven',
        label: 'Magical Number 7 ± 2 Memory Limit',
        category: 'foundation',
        chapterNumber: 1,
        importance: 2,
        definition: 'George A. Miller’s cognitive law stating that human short-term memory can hold only 5 to 9 discrete items simultaneously.',
        formulaOrRule: 'N_{group} \\le 5 \\text{ items per pyramid grouping}',
        whyItMatters: 'Forces the mind to group and abstract items into pyramids whenever a list exceeds four or five points.',
      },
      {
        id: 'mpp-vertical-qa-dialogue',
        label: 'Vertical Question-Answer Dialogue',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'Structural rule that every statement in a pyramid box raises a logical Why or How question in the reader’s mind that must be answered on the tier directly below.',
        formulaOrRule: '\\text{Parent Idea} \\xrightarrow{\\text{Why? / How?}} \\text{Child Grouping}',
        whyItMatters: 'Prevents writers from including irrelevant facts or answering questions before the reader has raised them.',
      },
      {
        id: 'mpp-scqa-introduction',
        label: 'SCQA Narrative Introduction',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition: 'Four-part narrative funnel—Situation, Complication, Question, Answer—that uses uncontested facts to plant or remind the reader of the document’s governing Question.',
        formulaOrRule: '\\text{Situation (True)} + \\text{Complication (Trigger)} \\implies \\text{Question} \\implies \\text{Apex Answer}',
        whyItMatters: 'Ensures the writer and reader are standing in the exact same place before descending into the pyramid reasoning.',
      },
      {
        id: 'mpp-inductive-grouping',
        label: 'Inductive Key Line Grouping',
        category: 'optimization',
        chapterNumber: 1,
        importance: 2,
        definition: 'Horizontal argument combining independent parallel ideas that share a single plural noun (reasons, steps, problems) to support an upward inference.',
        formulaOrRule: '\\{S_1 P, S_2 P, S_3 P\\} \\implies \\text{Unified Class Inference}',
        whyItMatters: 'Delivers actionable recommendations directly on the Key Line with clear fences between topics.',
      },
      {
        id: 'mpp-deductive-syllogism',
        label: 'Deductive Syllogism Chain',
        category: 'evaluation',
        chapterNumber: 1,
        importance: 3,
        definition: 'Three-step chained argument where the second statement comments on the subject or predicate of the first to force a "Therefore" conclusion.',
        formulaOrRule: '(A \\implies B) \\land (C = A) \\implies (C \\implies B)',
        whyItMatters: 'Essential for problem-solving analysis and low-level proofs, but ponderous when stretched across the Key Line.',
      },
    ],
    edges: [
      {
        source: 'mpp-magical-number-seven',
        target: 'mpp-pyramid-principle',
        relationship: 'prerequisite_for',
        explanation: 'Working-memory saturation beyond 7 ± 2 items necessitates pre-sorting ideas into a top-down pyramid.',
      },
      {
        source: 'mpp-scqa-introduction',
        target: 'mpp-pyramid-principle',
        relationship: 'part_of',
        explanation: 'The SCQA introduction generates the reader’s Question whose Answer forms the apex of the pyramid.',
      },
      {
        source: 'mpp-vertical-qa-dialogue',
        target: 'mpp-pyramid-principle',
        relationship: 'part_of',
        explanation: 'Vertical Q&A dialogue governs how every parent box in the pyramid connects to the horizontal grouping below it.',
      },
      {
        source: 'mpp-inductive-grouping',
        target: 'mpp-vertical-qa-dialogue',
        relationship: 'optimizes',
        explanation: 'Inductive groupings answer the Key Line "How?" or "Why?" question directly without cross-section memory strain.',
      },
      {
        source: 'mpp-inductive-grouping',
        target: 'mpp-deductive-syllogism',
        relationship: 'trades_off_with',
        explanation: 'Writers must choose either an inductive plural-noun grouping or a deductive syllogism chain for any horizontal row, never mixing both.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 5,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Part 1 (Chapters 1–5): Miller 7±2, 3 Golden Rules, Vertical Q&A, Horizontal Logic, Top-Down vs Bottom-Up (Big Chief & TTW memos), SCQA introductions, and Deduction vs Induction.',
  },
};

export const mppCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Part 2: Logic in Thinking',
  subtitle: 'Imposing Logical Order (Time, Structure, Degree) and Summarizing Grouped Ideas Without Intellectually Blank Assertions',
  readingTimeMinutes: 8,
  sourceWordCount: 15502,
  executiveThesis:
    'Even when writers build a rough pyramid outline, their prose frequently collapses into "intellectually blank assertions" ("The company has five problems") backed by unsorted laundry lists. True hard-headed thinking requires two rigorous disciplines: first, imposing one of the only three analytical orders the human mind can perform—Time Order (cause-effect process), Structural Order (MECE division of a whole), or Degree Order (ranked class property)—and second, summarizing action groupings by their tangible end-product effect or situation groupings by the insight inherent in their structural similarity.',
  paradigmShift: {
    oldWay:
      'Writers group ten loosely related bullets under a plural noun ("There are eight steps in Phase 1" or "Buyers have eight complaints") and top them with an intellectually blank assertion that states only the category.',
    newWay:
      'Writers trace every grouping back to its underlying analytical framework (Process, MECE Structure, or Ranked Class) and write a summary sentence that states the specific causal effect or inductive leap.',
    whyItChanged:
      'Intellectually blank assertions bore the reader and hide incomplete, overlapping thinking from the writer, whereas specific end-product and similarity summaries force MECE completeness.',
  },
  customDiagrams: [
    {
      id: 'mpp-ch02-svg1',
      title: 'The Three Analytical Frameworks Dictating Logical Order',
      subtitle: 'How every valid inductive grouping originates from Cause-Effect, Whole- into-Parts (MECE), or Bifurcate Classification',
      bierutCaption:
        'Audit every horizontal grouping against the only three analytical operations the human mind can perform: Time, Structure, and Degree.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">THE 3 ANALYTICAL ACTIVITIES OF THE MIND &amp; THEIR LOGICAL ORDERS</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">If you cannot find Time, Structural, or Degree order in a grouping, the underlying thinking is flawed</text>

  <!-- Column 1: Time Order -->
  <rect x="24" y="68" width="238" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="143" y="92" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">1. TIME / PROCESS ORDER</text>
  <text x="143" y="110" text-anchor="middle" fill="#94a3b8" font-size="9">Mental Act: Determine Causes of Effect</text>

  <rect x="44" y="126" width="198" height="42" rx="6" fill="#0c4a6e" stroke="#38bdf8" />
  <text x="143" y="144" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">Summary = Final Effect</text>
  <text x="143" y="159" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Tangible End Product in Hand</text>

  <rect x="44" y="186" width="56" height="44" rx="5" fill="#0f172a" stroke="#38bdf8" />
  <text x="72" y="206" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="600">Step 1</text>
  <text x="72" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Cause A</text>

  <path d="M 100 208 L 115 208" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="115" y="186" width="56" height="44" rx="5" fill="#0f172a" stroke="#38bdf8" />
  <text x="143" y="206" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="600">Step 2</text>
  <text x="143" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Cause B</text>

  <path d="M 171 208 L 186 208" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="186" y="186" width="56" height="44" rx="5" fill="#0f172a" stroke="#38bdf8" />
  <text x="214" y="206" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="600">Step 3</text>
  <text x="214" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Cause C</text>

  <rect x="40" y="248" width="206" height="132" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="143" y="268" text-anchor="middle" fill="#7dd3fc" font-size="9.5" font-weight="700">Diagnostic Rules:</text>
  <text x="143" y="288" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Put yourself in the doer's place</text>
  <text x="143" y="306" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Separate "before" vs "so that"</text>
  <text x="143" y="324" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Limit each level to ≤ 5 steps</text>
  <text x="143" y="342" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Never mix Tasks, Objectives,</text>
  <text x="143" y="356" text-anchor="middle" fill="#cbd5e1" font-size="8.5">  and Benefits horizontally</text>

  <!-- Column 2: Structural Order -->
  <rect x="281" y="68" width="238" height="328" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="92" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. STRUCTURAL ORDER (MECE)</text>
  <text x="400" y="110" text-anchor="middle" fill="#94a3b8" font-size="9">Mental Act: Divide Whole into Parts</text>

  <rect x="301" y="126" width="198" height="42" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="400" y="144" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Whole System / Organization</text>
  <text x="400" y="159" text-anchor="middle" fill="#6ee7b7" font-size="8.5">No Overlaps (ME) • Nothing Omitted (CE)</text>

  <path d="M 350 168 L 329 186" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 400 168 L 400 186" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 450 168 L 471 186" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />

  <rect x="301" y="186" width="56" height="44" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="329" y="206" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="600">Part A</text>
  <text x="329" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Tires Div</text>

  <rect x="372" y="186" width="56" height="44" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="400" y="206" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="600">Part B</text>
  <text x="400" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Houseware</text>

  <rect x="443" y="186" width="56" height="44" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="471" y="206" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="600">Part C</text>
  <text x="471" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Sports Div</text>

  <rect x="297" y="248" width="206" height="132" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="400" y="268" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">Division Principles:</text>
  <text x="400" y="288" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• By Activity → Process order</text>
  <text x="400" y="306" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• By Location → Geographic order</text>
  <text x="400" y="324" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• By Product/Market → Degree order</text>
  <text x="400" y="342" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Map free-association risks onto</text>
  <text x="400" y="356" text-anchor="middle" fill="#cbd5e1" font-size="8.5">  ROI &amp; EPS trees to expose gaps</text>

  <!-- Column 3: Degree Order -->
  <rect x="538" y="68" width="238" height="328" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="657" y="92" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">3. DEGREE / RANKING ORDER</text>
  <text x="657" y="110" text-anchor="middle" fill="#94a3b8" font-size="9">Mental Act: Classify Like Things</text>

  <rect x="558" y="126" width="198" height="42" rx="6" fill="#451a03" stroke="#f59e0b" />
  <text x="657" y="144" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Bifurcate Universe Split</text>
  <text x="657" y="159" text-anchor="middle" fill="#fcd34d" font-size="8.5">Shared Property vs. All Other Items</text>

  <rect x="558" y="186" width="68" height="44" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.8" />
  <text x="592" y="206" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="700">1st (Max)</text>
  <text x="592" y="220" text-anchor="middle" fill="#94a3b8" font-size="7.5">Strongest</text>

  <rect x="634" y="192" width="58" height="38" rx="5" fill="#0f172a" stroke="#f59e0b" />
  <text x="663" y="210" text-anchor="middle" fill="#f8fafc" font-size="8.5" font-weight="600">2nd</text>
  <text x="663" y="222" text-anchor="middle" fill="#94a3b8" font-size="7.5">Moderate</text>

  <rect x="700" y="198" width="56" height="32" rx="5" fill="#0f172a" stroke="#64748b" />
  <text x="728" y="217" text-anchor="middle" fill="#cbd5e1" font-size="8">3rd (Min)</text>

  <rect x="554" y="248" width="206" height="132" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="657" y="268" text-anchor="middle" fill="#fde68a" font-size="9.5" font-weight="700">Classification Rules:</text>
  <text x="657" y="288" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Define exact shared property</text>
  <text x="657" y="306" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Rank strongest to weakest</text>
  <text x="657" y="324" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Sub-group long lists of 8+ items</text>
  <text x="657" y="342" text-anchor="middle" fill="#cbd5e1" font-size="8.5">  into 3 underlying problem types</text>
  <text x="657" y="356" text-anchor="middle" fill="#cbd5e1" font-size="8.5">  (e.g., Timing, Data, Format)</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Time Order (Cause-Effect)',
          explanation:
            'Reflects steps taken sequentially to produce a specific effect; distinguish same-level steps ("before") from sub-steps ("in order to").',
        },
        {
          step: '2',
          label: 'Structural Order (MECE)',
          explanation:
            'Divides a physical, geographical, or financial whole into Mutually Exclusive (no overlaps) and Collectively Exhaustive (nothing omitted) parts.',
        },
        {
          step: '3',
          label: 'Degree Order (Comparative)',
          explanation:
            'Bifurcates the universe by a specific shared characteristic and ranks members from strongest to weakest possession of that trait.',
        },
      ],
    },
    {
      id: 'mpp-ch02-svg2',
      title: 'Eliminating Intellectually Blank Assertions via Action & Situation Summaries',
      subtitle: 'How to replace dead category labels ("There are 3 reasons...") with closed-system effects and inductive leaps',
      bierutCaption:
        'Ban intellectually blank assertions by summarizing action ideas with their tangible end product and situation ideas with their shared structural insight.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="32" fill="#f8fafc" font-size="13.5" font-weight="700" letter-spacing="0.06em">REPLACING INTELLECTUALLY BLANK ASSERTIONS WITH HARD-HEADED SUMMARIES</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Completing the thinking by stating the closed-system effect of actions or the inductive leap of situations</text>

  <!-- Top Dead Zone: Intellectually Blank Assertion -->
  <rect x="24" y="66" width="752" height="62" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="1.5" />
  <text x="400" y="88" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="700">DEADLY: INTELLECTUALLY BLANK ASSERTIONS (NEVER WRITE THESE)</text>
  <text x="400" y="110" text-anchor="middle" fill="#fecaca" font-size="10" font-family="monospace">"The company has two organization problems"  •  "We recommend five changes"  •  "For three reasons"</text>

  <!-- Left Branch: Summarizing Action Ideas -->
  <rect x="24" y="144" width="364" height="252" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="206" y="168" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">PATH A: SUMMARIZING ACTION IDEAS</text>
  <text x="206" y="186" text-anchor="middle" fill="#94a3b8" font-size="9">Plural Nouns: Steps, Recommendations, Objectives, Changes</text>

  <rect x="44" y="200" width="324" height="54" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="206" y="220" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">State Direct Effect as Tangible End Product</text>
  <text x="206" y="238" text-anchor="middle" fill="#7dd3fc" font-size="8.5">"Establish a system for following up overdue accounts"</text>

  <path d="M 120 284 L 160 254" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 206 284 L 206 254" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 292 284 L 252 254" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="284" width="102" height="50" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="91" y="304" text-anchor="middle" fill="#f8fafc" font-size="8.5" font-weight="600">1. Sort Accounts</text>
  <text x="91" y="320" text-anchor="middle" fill="#94a3b8" font-size="7.5">By age &amp; amount</text>

  <rect x="155" y="284" width="102" height="50" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="206" y="304" text-anchor="middle" fill="#f8fafc" font-size="8.5" font-weight="600">2. Assign Calls</text>
  <text x="206" y="320" text-anchor="middle" fill="#94a3b8" font-size="7.5">By seriousness</text>

  <rect x="270" y="284" width="102" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
  <text x="321" y="304" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="600">3. Halt Sales</text>
  <text x="321" y="320" text-anchor="middle" fill="#a7f3d0" font-size="7.5">Missing CE step found!</text>

  <text x="206" y="362" text-anchor="middle" fill="#cbd5e1" font-size="9">Rule: Word every step so you can see what</text>
  <text x="206" y="378" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="600">the doer holds in their hand when finished.</text>

  <!-- Right Branch: Summarizing Situation Ideas -->
  <rect x="412" y="144" width="364" height="252" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="168" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">PATH B: SUMMARIZING SITUATION IDEAS</text>
  <text x="594" y="186" text-anchor="middle" fill="#94a3b8" font-size="9">Plural Nouns: Reasons, Problems, Conclusions, Indicators</text>

  <rect x="432" y="200" width="324" height="54" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="220" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Make Inductive Leap from Shared Similarity</text>
  <text x="594" y="238" text-anchor="middle" fill="#6ee7b7" font-size="8.5">"Major organizational problem is inability to delegate authority"</text>

  <path d="M 508 284 L 548 254" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 594 284 L 594 254" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 680 284 L 640 254" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="428" y="284" width="102" height="50" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="479" y="304" text-anchor="middle" fill="#f8fafc" font-size="8.5" font-weight="600">Same Subject?</text>
  <text x="479" y="320" text-anchor="middle" fill="#94a3b8" font-size="7.5">Link predicates</text>

  <rect x="543" y="284" width="102" height="50" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="594" y="304" text-anchor="middle" fill="#f8fafc" font-size="8.5" font-weight="600">Same Predicate?</text>
  <text x="594" y="320" text-anchor="middle" fill="#94a3b8" font-size="7.5">Link subjects</text>

  <rect x="658" y="284" width="102" height="50" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="709" y="304" text-anchor="middle" fill="#f8fafc" font-size="8.5" font-weight="600">Same Judgment?</text>
  <text x="709" y="320" text-anchor="middle" fill="#94a3b8" font-size="7.5">Subgroup defects</text>

  <text x="594" y="362" text-anchor="middle" fill="#cbd5e1" font-size="9">Rule: Strip decorative prose to bare S-P structure,</text>
  <text x="594" y="378" text-anchor="middle" fill="#34d399" font-size="9" font-weight="600">find closer links, and make the inductive leap.</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Ban Intellectually Blank Assertions',
          explanation:
            'Statements like "The company has two organization problems" or "John Wain wrote this biography for three reasons" fail to anchor the reader’s mind and hide missing points.',
        },
        {
          step: '2',
          label: 'Closed-System Action Summaries',
          explanation:
            'Any MECE set of actions plus the direct effect they produce forms a closed system; wording the effect as a tangible end product reveals omitted steps.',
        },
        {
          step: '3',
          label: 'Structural Similarity & Inductive Leap',
          explanation:
            'Isolate whether situation sentences share a subject, predicate, or implied judgment, subgroup them into 2–3 tight clusters, and state what their similarity implies.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mpp-ch02-mm1',
      name: 'The Doer’s End-Product Visualization ("Before" vs. "So That")',
      tagline: 'Imagine yourself physically executing each step and holding its completed output in your hand',
      naiveIntuition:
        'Any list of eight verbs ("interview personnel, trace workflow, identify critical functions, assess performance...") is a valid time-ordered process list.',
      firstPrinciplesReality:
        'Flat action lists almost always mix causes and effects across levels of abstraction; an action is on the same tier only if done "before" the next, and on a lower tier if done "so that" the next can occur.',
      howToApply:
        'Word every action step as a concrete end product ("Improve profits by 10% by Jan 15" or "Assign planning responsibility to regions") and nest sub-processes so no level exceeds five steps.',
    },
    {
      id: 'mpp-ch02-mm2',
      name: 'MECE Structural Partitioning',
      tagline: 'Mutually Exclusive (no overlaps) and Collectively Exhaustive (nothing left out)',
      naiveIntuition:
        'When brainstorming risks or organizational units, listing eleven impressive-sounding points proves thoroughness.',
      firstPrinciplesReality:
        'Free-association lists hide fatal blind spots; only by mapping points onto a MECE structure (such as an organization chart or an ROI/EPS tree) can you see both overlaps and glaring omissions.',
      howToApply:
        'Divide any physical, geographical, or financial whole into non-overlapping parts that sum to 100% of the whole, then order them by process, geography, or ranked importance.',
    },
    {
      id: 'mpp-ch02-mm3',
      name: 'The Anti-Blank-Assertion Inductive Leap',
      tagline: 'Never top a grouping with "There are three reasons"; state the insight that unites them',
      naiveIntuition:
        'Writing "The company has three problems" or "There are four characteristics of the planning system" is a clean, professional topic sentence.',
      firstPrinciplesReality:
        'Intellectually blank assertions state only the plural noun category without completing the thinking, causing listeners to reply to the first bullet and blinding the author to missing points.',
      howToApply:
        'Ask "Why did I bring together these specific points and no others?"—then state either the direct effect of carrying out the actions or the insight implied by their shared subject/predicate.',
    },
  ],
  deepSections: [
    {
      id: 'mpp-ch02-sec1',
      sectionNumber: '2.1',
      title: 'Time Order & Distinguishing Levels of Cause and Effect',
      subtitle: 'Separating "before" from "in order to" and eliminating Tasks-Objectives-Benefits repetition',
      coreMechanism:
        'Whenever ideas grouped together represent steps taken to achieve an effect, they form a process or system and must go in Time Order. However, writers routinely produce 8- to 10-step laundry lists that violate Miller’s 7 ± 2 limit and mix levels of abstraction. For example, listing "1. Interview key personnel, 2. Trace workflow, 3. Identify critical functions" places two sub-steps on the same tier as the end product they create ("Determine critical functions"). Similarly, mixing company actions ("Perceive need, Develop strategy, Implement") with market reactions ("High growth, Maturity, Decline") conflates actor steps with environmental effects.\n\nTo sort out a process, put yourself in the doer’s place: if you take Action A before Action B, they belong on the same level; if you take Action A in order to produce Action B, A is a child of B. Never slice a process horizontally into "Tasks vs. Objectives vs. Benefits"—since a Task achieves an Objective which achieves a Benefit, that classification inevitably repeats the exact same ideas three times.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Put Yourself in the Doer’s Place',
          detail: 'Visualize executing each step sequentially and identify the tangible output held at the end.',
        },
        {
          step: '2',
          title: 'Separate "Before" from "So That"',
          detail: 'Nest mini-processes underneath the higher-level step they produce so each tier has 5 or fewer steps.',
        },
        {
          step: '3',
          title: 'Trace Underlying Process Sources',
          detail: 'Check whether a list of conclusions comments on steps of an implied process to spot omitted steps.',
        },
      ],
      keyTakeaways: [
        'Any grouping larger than five steps almost certainly contains ungrouped mini-processes that belong on a lower tier.',
        'Classifying actions into "Tasks, Objectives, and Benefits" slices the pyramid horizontally and guarantees repetition.',
      ],
      commonPitfalls: [
        'Listing eight sequential phase steps on one flat level instead of grouping them into three end-product stages.',
        'Forgetting to comment on the final stage of an underlying process (e.g., critiquing investment concept and technique, but omitting application).',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_ch02_plate.png',
          originalLabel: 'Part 2 Opening Blueprint: Logic in Thinking (Page 89)',
          bierutTitle: 'Check Reasoning Bottom-Up to Ensure Inferences Never Exceed Their Grouping',
          editorialAnalysis:
            'The Part 2 opening exhibit demonstrates how sloppy groupings either jump to unsupported abstractions ("Managers mismanage because they want to") or disguise a deductive chain (low productivity → high overtime → uncompetitive prices) as an inductive list.',
          keyTakeaways: [
            'Whenever you have only one piece of evidence for a point, you are forced to deal with it deductively.',
            'With inductive ideas, you must either hold the subject constant and vary the predicate, or hold the predicate constant and vary the subject.',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch02-sec2',
      sectionNumber: '2.2',
      title: 'Structural Order (MECE) and Degree Order (Classification)',
      subtitle: 'Dividing wholes without overlaps or gaps, and subgrouping long complaint lists',
      coreMechanism:
        'Structural Order reflects what you see when you divide a physical, organizational, or conceptual whole into its parts. Every division must be MECE: Mutually Exclusive (no overlaps between Tire, Housewares, and Sports divisions) and Collectively Exhaustive (nothing left out of the company). How you order the boxes on the diagram depends on your principle of division: dividing by activities implies Time Order; dividing by geographic location implies Structural Order; and dividing by product/market implies Degree Order (ranked by sales or investment). Imposing a formal structure—such as mapping 11 free-association risks of a plastic bottle venture onto an ROI and EPS tree—immediately exposes both redundancies and fatal omissions (such as ignoring how plastic bottles boost product sales).\n\nDegree Order (order of importance) governs groupings formed by classifying items that share a specific characteristic—creating a bifurcate split between the chosen class and all other items in the universe. When confronted with a long list of 8 complaints (such as unhappy inventory buyers or causes of New York’s decline), classify each item by problem type (e.g., Bad Timing, Poor Data, Unhelpful Format) to collapse the list into 3 ordered categories.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Enforce MECE Boundaries',
          detail: 'Verify that divided parts do not overlap (Mutually Exclusive) and sum to the complete whole (Collectively Exhaustive).',
        },
        {
          step: '2',
          title: 'Order by Division Principle',
          detail: 'Sequence structural parts by functional flow (radar set), visual map scan (Sinai Peninsula), or drawing order.',
        },
        {
          step: '3',
          title: 'Subgroup Class Lists & Rank',
          detail: 'Collapse 8+ loosely classified complaints into 3 distinct subclasses and order from strongest to weakest.',
        },
      ],
      formulas: [
        {
          name: 'MECE Structural Partition Law & ROI Decomposition',
          expression: 'W = \\bigcup_{i=1}^{n} P_i \\;\\; (P_i \\cap P_j = \\emptyset), \\quad \\text{ROI} = \\frac{\\text{Sales} - \\text{Cost}}{\\text{Investment}}',
          intuition:
            'A structural division is valid only when its parts have zero intersection (Mutually Exclusive) and their union equals the entire system (Collectively Exhaustive), such as decomposing profitability via an ROI tree.',
          variables: [
            { symbol: 'W', meaning: 'The complete physical, organizational, or financial whole being analyzed' },
            { symbol: 'P_i, P_j', meaning: 'Discrete structural parts that must not overlap (P_i ∩ P_j = ∅)' },
            { symbol: '\\text{ROI}', meaning: 'Return on Investment tree used to sort free-association financial risks into Sales, Cost, and Investment' },
          ],
          workedExample:
            'Sorting 11 free-association risks against a plastic bottle venture onto an ROI tree reveals they reduce to just two points: (1) a nonreturnable ban may preclude entry, and (2) entry dilutes short-term EPS and long-term ROI—while exposing that the author completely omitted the positive sales lift of plastic packaging.',
        },
      ],
      keyTakeaways: [
        'You cannot tell that nonsense is being written in a free-association list unless you first impose a MECE structure on it.',
        'In Degree Order, always place the strongest item first unless emotional drama specifically justifies reversing the rank.',
      ],
      commonPitfalls: [
        'Listing 8 buyer complaints about a monthly report without subgrouping them into Timing, Data Reliability, and Format.',
        'Including a summary objective ("5. Identify strengths and weaknesses within each study area") as a peer item alongside the 4 study areas themselves.',
      ],
      figures: [
        {
          file: 'minto_pyramid_principle_p089_fig1.png',
          originalLabel: 'Page 89 Exhibit 22: The Inference Should Not Go Beyond the Grouping',
          bierutTitle: 'Restrict Every Top-Level Inference to the Exact Boundaries of Its Supporting Group',
          editorialAnalysis:
            'Exhibit 22 contrasts over-abstracted or false inferences ("Managers mismanage because they want to" / "Composing room costs may represent a profit-improvement opportunity") against tight causal or class-bounded summaries.',
          keyTakeaways: [
            'If three or four other unmentioned things could also fit under your summary label, your summary is at too high a level of abstraction.',
            'Low productivity → high overtime → uncompetitive prices is a deductive chain whose summary is "Our prices are high because our productivity is low."',
          ],
        },
      ],
    },
    {
      id: 'mpp-ch02-sec3',
      sectionNumber: '2.3',
      title: 'Summarizing Grouped Ideas: Action End-Products & Inductive Leaps',
      subtitle: 'Replacing intellectually blank assertions with closed-system effects and shared-similarity insights',
      coreMechanism:
        'Saying "The company has two organization problems" or "John Wain is well placed to write this biography for three reasons" is an intellectually blank assertion: it states only the plural noun category without summarizing the essence of the ideas below. Blank assertions deaden the reader’s mind and hide incomplete thinking from the writer—when pressed to replace "two organization problems" with a real summary, one consultant discovered he was actually talking about "four areas where greater delegation is needed," yielding the true insight: "The major organizational problem is the inability to delegate authority."\n\nTo derive a genuine summary, first distinguish whether your grouping contains action ideas or situation ideas. Summarize action ideas by wording each step as a concrete end product you can hold in your hand ("Assign planning responsibility to the regions" instead of "Strengthen regional effectiveness") and stating the direct closed-system effect of carrying out all the steps together ("Establish a system for following up overdue accounts"). Summarize situation ideas by stripping decorative prose to isolate the shared subject, predicate, or judgment, subgrouping closer links, and making the inductive leap to what that similarity implies.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Word Actions as End Products',
          detail: 'Replace vague verbs ("reduce accounts receivable") with specific, observable end states ("establish a system for following up overdue accounts").',
        },
        {
          step: '2',
          title: 'Isolate Subject-Predicate Links',
          detail: 'Strip situation sentences to bare subject/predicate cores to see whether the link lies in the subject, predicate, or implied judgment.',
        },
        {
          step: '3',
          title: 'Make the Inductive Leap',
          detail: 'Visualize the relationship across subgroups (e.g., only some aftermarket segments are attractive + they have high barriers) and push the reasoning to its conclusion.',
        },
      ],
      keyTakeaways: [
        'Any MECE set of actions plus the direct effect they produce forms a unique closed system; wording the effect specifically lets you verify no step is missing.',
        'Just because four characteristics of a planning system are true (annual, integrated, top-down, present/future) does not make them relevant unless they support a single governing insight.',
      ],
      commonPitfalls: [
        'Writing "To improve Equity sales in London" over three steps that actually only "Focus resources on customers with the highest potential."',
        'Stopping halfway in an automotive aftermarket analysis ("Only some segments are attractive" + "They are hard to enter") without drawing the "Therefore" conclusion.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'The Three Analytical Orders & Summary Synthesis Matrix',
      description: 'How to diagnose the source of any inductive grouping, impose its mandatory order, and write a non-blank summary.',
      headers: ['Analytical Order', 'Originating Mental Activity', 'Ordering Rule', 'How to Check Completeness (MECE)', 'Summary Formula'],
      rows: [
        [
          'Time Order',
          'Determining the causes (steps) required to achieve an effect',
          'One-two-three chronological sequence of execution',
          'Visualize yourself as the doer; check if steps produce the end-product effect',
          'State the direct closed-system effect of carrying out the actions',
        ],
        [
          'Structural Order',
          'Dividing a physical, organizational, or financial whole into parts',
          'Order of parts on the diagram (by process, geography, or rank)',
          'Verify zero overlap (Mutually Exclusive) and 100% coverage (Collectively Exhaustive)',
          'State what the functioning or modification of the whole structure achieves',
        ],
        [
          'Degree Order',
          'Classifying like things from a universe by a shared property',
          'Rank from strongest to weakest possession of the shared trait',
          'Search knowledge for all items sharing that exact bifurcate property',
          'State the inductive leap implied by the shared subject, predicate, or judgment',
        ],
      ],
      verdictRule:
        'Run your eye down every inductive grouping to verify Time, Structural, or Degree order; if none exists, subgroup by shared characteristics and replace any "There are N reasons/problems" header with the specific causal effect or inductive insight.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mpp-ch02-scen1',
      title: 'Transforming Vague Accounts Receivable Steps into a Closed-System Process',
      roleAndContext: 'Financial controller drafting a procedure to fix $100 to $100,000 accounts receivable overdue by 1 to 6 months.',
      symptomOrFailure: 'The draft listed 6 overlapping points ("1. Identify and pursue overdue accounts, 2. Age accounts, 3. Send reminders, 4. Pursue overdue accounts, 5. Settle at director level, 6. Use collection agency") under the vague header "Reduce accounts receivable."',
      naiveFixAndWhyItFails: 'Trimming the list to "1. Sort accounts by age/amount, 2. Assign collection responsibility by seriousness" under "Reduce accounts receivable" still fails because getting a single bill paid reduces receivables, and those two steps alone do not guarantee payment.',
      firstPrinciplesSolution: 'Ask what tangible end product the company holds after sorting accounts and assigning escalation tiers (Accounting at 2 months, Salesmen at 3, Directors at 4, Collection Agency at 5+): "Establish a system for following up overdue accounts." This specific summary immediately exposes a missing 3rd MECE step: "Instruct the sales force to stop calling on chronic nonpayers."',
      measurableOutcome: 'Replaced a repetitive 6-item list with a complete, 3-step closed-system collection protocol.',
    },
    {
      id: 'mpp-ch02-scen2',
      title: 'Subgrouping an 8-Item Information Systems (IS) Assessment Dump',
      roleAndContext: 'IT management consultant presenting an assessment of a corporate Information Systems Division’s ability to hit mission-critical project dates.',
      symptomOrFailure: 'The consultant presented an 8-bullet laundry list mixing "require committed due dates," "inexperience at project manager position," "IS culture allows target dates to slip," "inconsistent use of SDLC tools," "never installed mission-critical systems of this size," and "lack of RAD/JAD prototyping."',
      naiveFixAndWhyItFails: 'Introducing the list with the intellectually blank assertion "Some of the results of our IS Assessment indicated:" forces the client to sort 8 overlapping bullets in working memory.',
      firstPrinciplesSolution: 'Isolate the bare structural elements, separate the overarching risk (Points 1, 3, 7: danger of slipping target dates) from the underlying causes, and group the causes by shared subject/predicate into 3 ordered points under the governing insight: "There is significant risk that your Project Managers may not achieve target dates because: (1) They have limited experience in project management (2, 6); (2) They have never installed systems of this size or complexity (5); and (3) They lack skill in applying the required methodology and tools (4, 8)."',
      measurableOutcome: 'Collapsed an boring 8-bullet status dump into a crisp 3-point causal diagnosis that immediately directs remediation.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mpp-ch02-q1',
        scenarioPrompt:
          'A consultant proposes an 8-step Phase I workplan: "1. Interview key personnel, 2. Trace and document workflow, 3. Identify all critical functions, 4. Analyze organization structure, 5. Understand performance measures, 6. Assess performance levels, 7. Identify problems and causes, 8. Recommend productivity improvements." What is structurally wrong with this Time-Ordered list?',
        options: [
          {
            label: 'A',
            text: 'It should be ordered alphabetically rather than chronologically.',
            isCorrect: false,
            explanation: 'Alphabetical ordering is arbitrary and does not reflect any analytical activity of the mind.',
          },
          {
            label: 'B',
            text: 'It violates Miller’s 7 ± 2 rule and mixes levels of abstraction by listing sub-steps taken "in order to" produce an end product (Steps 1–2 produce Step 3; Steps 4–6 produce Step 7) on the same horizontal tier as the end products themselves.',
            isCorrect: true,
            explanation: 'Steps 1 and 2 are done in order to achieve Step 3 (Determine critical functions), and Steps 4, 5, and 6 are done to achieve Step 7 (Identify weaknesses). Properly nested, Phase I has just 3 main steps.',
          },
          {
            label: 'C',
            text: 'Time order can never be used in a consulting proposal.',
            isCorrect: false,
            explanation: 'Time order is the standard order for describing project phases and processes once levels of action are properly distinguished.',
          },
          {
            label: 'D',
            text: 'It omits a separate section for Benefits and Objectives.',
            isCorrect: false,
            explanation: 'Minto explicitly warns against slicing action hierarchies into Tasks, Objectives, and Benefits because it guarantees repetition.',
          },
        ],
      },
      {
        id: 'mpp-ch02-q2',
        scenarioPrompt:
          'When dividing an organization’s activities into a MECE chart, how does the principle of division dictate the left-to-right Structural Order of the boxes?',
        options: [
          {
            label: 'A',
            text: 'Dividing by activity (Research, Manufacturing, Marketing) dictates Time/Process order; dividing by location dictates Geographic Structural order; dividing by product/market group dictates Degree/Comparative order.',
            isCorrect: true,
            explanation: 'The analytical basis used to partition the whole determines the order: functional activities follow a process sequence, regions follow geography, and customer/product divisions are ranked by degree (e.g., revenue size).',
          },
          {
            label: 'B',
            text: 'All organization charts must be ordered strictly by headcount from largest department to smallest.',
            isCorrect: false,
            explanation: 'Ranking by size (Degree order) applies only when classifying parallel product/market units, not sequential functional processes.',
          },
          {
            label: 'C',
            text: 'MECE means that every division overlaps slightly with its neighbor to ensure collaboration.',
            isCorrect: false,
            explanation: 'Mutually Exclusive (ME) strictly forbids any overlap between sibling parts.',
          },
          {
            label: 'D',
            text: 'Structural order only applies to physical machinery like radar sets, never to conceptual systems.',
            isCorrect: false,
            explanation: 'Structural order applies equally to physical objects, geographical maps, organizational charts, and financial ROI trees.',
          },
        ],
      },
      {
        id: 'mpp-ch02-q3',
        scenarioPrompt:
          'Why does Barbara Minto call statements like "The company has two organization problems" or "There are four characteristics of the new planning system" Intellectually Blank Assertions?',
        options: [
          {
            label: 'A',
            text: 'Because they use passive voice instead of active verbs.',
            isCorrect: false,
            explanation: 'Even in active voice ("We found three problems"), the statement remains intellectually blank.',
          },
          {
            label: 'B',
            text: 'Because they merely announce the plural noun category without stating the causal effect or shared structural insight of the grouped ideas, boring the reader and hiding incomplete thinking from the writer.',
            isCorrect: true,
            explanation: 'An intellectually blank assertion stops at step one (listing a class) instead of completing the thinking by stating the essence of what the grouped points mean together.',
          },
          {
            label: 'C',
            text: 'Because business documents should never contain numbers in topic sentences.',
            isCorrect: false,
            explanation: 'Specific numerical goals (e.g., "Improve profits by 10% by January 15") are encouraged; it is empty category counting that is banned.',
          },
          {
            label: 'D',
            text: 'Because summaries are only required at the very end of a chapter.',
            isCorrect: false,
            explanation: 'Rule 1 of the pyramid requires every parent box at the top of a grouping to summarize the ideas below it.',
          },
        ],
      },
      {
        id: 'mpp-ch02-q4',
        scenarioPrompt:
          'What is the difference between how you summarize an inductive grouping of Action ideas versus an inductive grouping of Situation ideas?',
        options: [
          {
            label: 'A',
            text: 'Action ideas are summarized by stating the direct, tangible end-product effect of carrying out the actions; Situation ideas are summarized by isolating their shared subject, predicate, or judgment and stating what that similarity implies.',
            isCorrect: true,
            explanation: 'Actions unite only through the closed-system effect they together produce, whereas situation statements unite through a shared class property from which you draw an inductive inference.',
          },
          {
            label: 'B',
            text: 'Action ideas are summarized with a question mark, whereas Situation ideas are summarized with a plural noun.',
            isCorrect: false,
            explanation: 'Stating actions as questions adds unnecessary complexity, and summarizing with a bare plural noun creates an intellectually blank assertion.',
          },
          {
            label: 'C',
            text: 'Action ideas cannot be summarized and must be listed as raw tasks.',
            isCorrect: false,
            explanation: 'Every grouping of actions in a pyramid must be summarized by the direct effect those actions produce.',
          },
          {
            label: 'D',
            text: 'Situation ideas are summarized by repeating the last sentence of a deductive syllogism.',
            isCorrect: false,
            explanation: 'Repeating the final conclusion applies to deductive arguments, not inductive situation groupings.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mpp-ch02-fc1',
        category: 'foundation',
        front: 'What are the only three analytical activities the human mind can perform to create an inductive grouping, and what order does each dictate?',
        back: '1. Determine the causes of an effect (dictates Time Order); 2. Divide a whole into its MECE parts (dictates Structural Order); 3. Classify like things together (dictates Degree / Comparative Order).',
        mentalHook: 'Causes → Time; Whole-to-Parts → Structure; Class → Degree.',
      },
      {
        id: 'mpp-ch02-fc2',
        category: 'evaluation',
        front: 'What does MECE stand for in Structural Order and how do you test both halves?',
        back: 'Mutually Exclusive (no overlaps between parts) and Collectively Exhaustive (nothing left out of the whole).',
        mentalHook: 'No overlaps, no gaps.',
      },
      {
        id: 'mpp-ch02-fc3',
        category: 'optimization',
        front: 'How do you distinguish whether two action steps belong on the same pyramid level or on parent-child levels?',
        back: 'Put yourself in the doer’s place: if you take Action A "before" you take Action B, they are on the same level; if you take Action A "so that / in order to" produce Action B, A is on the level below B.',
        mentalHook: '"Before" = Sibling; "So that" = Child.',
      },
      {
        id: 'mpp-ch02-fc4',
        category: 'evaluation',
        front: 'Why is organizing a project proposal into "Tasks, Objectives, and Benefits" a structural error?',
        back: 'Because accomplishing Tasks produces Objectives, and accomplishing Objectives produces Benefits—meaning the three labels slice a single vertical cause-effect pyramid horizontally and repeat the exact same ideas three times.',
        mentalHook: 'Tasks → Objectives → Benefits is vertical cause-effect, not horizontal siblings.',
      },
      {
        id: 'mpp-ch02-fc5',
        category: 'adaptation',
        front: 'What is the "End-Product Wording Rule" for writing and summarizing Action ideas?',
        back: 'Visualize the doer completing the action and word the step in terms of the specific, tangible end product they will hold in their hand when finished (e.g., "Assign planning responsibility to regions" instead of "Strengthen regional effectiveness").',
        mentalHook: 'If you can’t picture holding the output in your hand, the wording is too vague.',
      },
      {
        id: 'mpp-ch02-fc6',
        category: 'architecture',
        front: 'What is the 3-step process for summarizing an inductive grouping of Situation ideas (reasons, problems, conclusions)?',
        back: '1. Find the structural similarity tying the sentences together (same subject, same predicate, or same implied judgment); 2. Look for closer links to form 2–3 subgroups; 3. Make the inductive leap to state what that similarity implies.',
        mentalHook: 'Strip to S-P, Subgroup Closer Links, Make the Inductive Leap.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mpp-ch02-feyn1',
        conceptTitle: 'The Three Analytical Orders: Time, Structure, and Degree',
        prompt:
          'Explain how any valid inductive grouping of ideas must originate from one of three analytical activities of the mind, and show how checking for Time, Structural, or Degree order exposes flawed thinking in a draft.',
        rubricChecklist: [
          'Identifies the three mental activities: determining causes of an effect (Time Order), dividing a whole into MECE parts (Structural Order), and classifying like things by a shared trait (Degree Order).',
          'Explains how Time Order errors occur when writers mix "before" steps with "in order to" sub-steps or mix actor steps with market effects.',
          'Defines MECE (Mutually Exclusive, Collectively Exhaustive) and shows how mapping free-association lists onto an ROI tree or structure reveals gaps.',
          'Shows how Degree Order requires subgrouping long lists of 8+ complaints into 3 distinct problem types (such as Timing, Data, and Format).',
        ],
        modelExplanation:
          'Ideas in an inductive grouping are never brought together by chance; the mind picks them out using one of only three analytical operations. First, it can determine the causes of an effect, which dictates Time Order (steps taken one after another, separating same-level "before" steps from lower-level "so that" sub-steps). Second, it can divide a whole into Mutually Exclusive and Collectively Exhaustive (MECE) parts, which dictates Structural Order (describing an org chart, physical radar set, or ROI tree without overlaps or omissions). Third, it can classify like things from a universe by a shared characteristic, which dictates Degree Order (ranking from strongest to weakest, after subgrouping long lists into 3 tight problem classes). If you scan a grouping and cannot find one of these three orders, your grouping is analytically broken.',
      },
      {
        id: 'mpp-ch02-feyn2',
        conceptTitle: 'Eliminating Intellectually Blank Assertions in Action and Situation Groupings',
        prompt:
          'Explain why statements like "The company has three problems" or "We recommend four steps" are intellectually blank assertions, and contrast the exact technique for deriving a real summary for Action ideas versus Situation ideas.',
        rubricChecklist: [
          'Defines an intellectually blank assertion as a statement that names only the plural noun category without stating the essence of the grouped ideas.',
          'Explains why blank assertions hurt both the reader (who stops listening after bullet one) and the writer (who misses omitted points, as in the delegation example).',
          'Explains the Action summary technique: word each step as a tangible end product held in the hand and state the closed-system direct effect of performing all steps together.',
          'Explains the Situation summary technique: strip decorative prose to bare Subject-Predicate structure, subgroup closer links, and make the inductive leap to the implied insight.',
        ],
        modelExplanation:
          'An intellectually blank assertion—like "The company has two organization problems" or "There are four characteristics of the planning system"—merely announces the kind of idea to follow without completing the thinking. To replace it, you must first see whether your group contains action ideas or situation ideas. For action ideas (steps, recommendations), word every step as a concrete end product the doer holds in their hand, then state the direct effect that carrying out that closed MECE system of actions produces—which immediately lets you test if a step is missing. For situation ideas (reasons, problems, conclusions), strip away decorative language to find the shared subject, predicate, or judgment, cluster long lists into 2–3 subgroups, and make the inductive leap to state what their shared similarity actually means.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mpp-time-order',
        label: 'Time / Process Order',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition: 'Logical sequence imposed when the mind determines the cause-and-effect steps required to achieve a specific end product.',
        formulaOrRule: '\\text{Cause}_1 \\to \\text{Cause}_2 \\to \\text{Cause}_3 \\implies \\text{Direct Summary Effect}',
        whyItMatters: 'Prevents conflating causes and effects or exceeding five steps at any single process tier.',
      },
      {
        id: 'mpp-structural-order-mece',
        label: 'Structural Order & MECE Division',
        category: 'architecture',
        chapterNumber: 2,
        importance: 1,
        definition: 'Dividing a physical, organizational, geographical, or financial whole into Mutually Exclusive and Collectively Exhaustive parts.',
        formulaOrRule: 'P_i \\cap P_j = \\emptyset \\;\\land\\; \\sum P_i = \\text{Whole}',
        whyItMatters: 'Exposes overlaps and missing analytical branches in free-association lists.',
      },
      {
        id: 'mpp-degree-order',
        label: 'Degree / Comparative Order',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 2,
        definition: 'Bifurcate classification that isolates items sharing a common characteristic and ranks them from strongest to weakest possession of that trait.',
        formulaOrRule: 'C(x_1) > C(x_2) > C(x_3) \\text{ for shared class property } C',
        whyItMatters: 'Transforms unsorted laundry lists of complaints into ranked, subgrouped diagnostic insights.',
      },
      {
        id: 'mpp-blank-assertion-ban',
        label: 'Intellectually Blank Assertion Ban',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 1,
        definition: 'Prohibition against topping a grouping with a dead category label ("There are three reasons...") instead of a substantive summary insight.',
        formulaOrRule: '\\text{Never state only the plural noun; state the effect or shared insight}',
        whyItMatters: 'Completes the writer’s thinking and anchors the reader’s mind before they process the subpoints.',
      },
      {
        id: 'mpp-action-end-product',
        label: 'Closed-System Action End-Product Rule',
        category: 'optimization',
        chapterNumber: 2,
        importance: 2,
        definition: 'Wording every action step and its parent summary in terms of the specific, tangible output the doer holds in hand upon completion.',
        formulaOrRule: '\\text{MECE Actions} + \\text{Tangible End-Product Effect} = \\text{Closed System}',
        whyItMatters: 'Makes it possible to judge objectively whether the listed steps are sufficient to achieve the stated goal.',
      },
      {
        id: 'mpp-inductive-leap',
        label: 'Structural Similarity & Inductive Leap',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 2,
        definition: 'Isolating the shared subject, predicate, or judgment across situation statements and abstracting one level up to state their collective implication.',
        formulaOrRule: '\\text{Strip prose} \\to \\text{Isolate S/P link} \\to \\text{Subgroup} \\to \\text{Infer insight}',
        whyItMatters: 'Turns descriptive status lists into compelling executive diagnoses.',
      },
    ],
    edges: [
      {
        source: 'mpp-time-order',
        target: 'mpp-action-end-product',
        relationship: 'prerequisite_for',
        explanation: 'Ordering steps sequentially by cause and effect requires wording each step and its summary as a tangible end product.',
      },
      {
        source: 'mpp-structural-order-mece',
        target: 'mpp-action-end-product',
        relationship: 'evaluates',
        explanation: 'MECE structural boundaries verify that a closed system of actions has no missing steps.',
      },
      {
        source: 'mpp-degree-order',
        target: 'mpp-inductive-leap',
        relationship: 'prerequisite_for',
        explanation: 'Classifying and subgrouping like items by their shared property enables the upward inductive leap.',
      },
      {
        source: 'mpp-action-end-product',
        target: 'mpp-blank-assertion-ban',
        relationship: 'mitigates',
        explanation: 'Stating the direct end-product effect eliminates intellectually blank assertions over action lists.',
      },
      {
        source: 'mpp-inductive-leap',
        target: 'mpp-blank-assertion-ban',
        relationship: 'mitigates',
        explanation: 'Stating the insight implied by shared sentence structure eliminates intellectually blank assertions over situation lists.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Part 2 (Chapters 6–7): Time Order, Structural Order (MECE, ROI/EPS trees), Degree Order, eliminating intellectually blank assertions, Closed-System Action End-Products, and Inductive Leaps.',
  },
};
