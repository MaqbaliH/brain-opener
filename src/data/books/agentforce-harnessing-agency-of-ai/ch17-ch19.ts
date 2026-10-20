import { ChapterMastery } from '../../../types/book';

export const afCh17Mastery: ChapterMastery = {
  chapterNumber: 17,
  chapterId: 'ch17',
  title: 'How “Human” Should Your AI Agent Be?',
  subtitle: 'Why Anthropomorphic Deception Triggers the Uncanny Valley, and How Ego-Free Functional Design Builds User Trust',
  readingTimeMinutes: 6,
  sourceWordCount: 762,
  executiveThesis:
    'Designing AI agents to impersonate human beings triggers the uncanny valley, distorts user expectations, and erodes institutional trust the moment an escalation occurs. Effective enterprise agents operate as transparent, ego-free digital labor labeled strictly by their workflow function rather than faux-human personas or organization-chart titles.',
  paradigmShift: {
    oldWay:
      'Building anthropomorphic chatbots that mimic human small talk, use first-person pronouns ("I feel"), and masquerade as human associates until forced to hand off.',
    newWay:
      'Deploying explicitly disclosed, ego-free AI agents that eliminate self-reference, adopt brand-calibrated functional language, and focus strictly on task execution.',
    whyItChanged:
      'Users immediately detect synthetic humanity and feel deceived when faux-empathetic bots reveal their artificial nature during sensitive escalations.',
  },
  customDiagrams: [
    {
      id: 'af-ch17-diag1',
      title: 'The Anthropomorphic Trust Cliff vs. Transparent Functional Utility',
      subtitle: 'How faux-human impersonation creates expectation inflation followed by betrayal upon human handoff',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
  <rect width="800" height="420" fill="#0B0F19" rx="12" />
  <text x="32" y="38" fill="#F9FAFB" font-size="16" font-weight="700">ANTHROPOMORPHIC DECEPTION VS. FUNCTIONAL TRANSPARENCY</text>
  <text x="32" y="58" fill="#9CA3AF" font-size="12">Comparing user trust trajectories across a multi-turn customer support escalation</text>

  <!-- Axes -->
  <line x1="70" y1="350" x2="750" y2="350" stroke="#374151" stroke-width="2" />
  <line x1="70" y1="85" x2="70" y2="350" stroke="#374151" stroke-width="2" />
  <text x="22" y="220" fill="#9CA3AF" font-size="11" transform="rotate(-90 22 220)" text-anchor="middle" font-family="JetBrains Mono, monospace">USER TRUST &amp; COMFORT</text>
  <text x="410" y="385" fill="#9CA3AF" font-size="11" text-anchor="middle" font-family="JetBrains Mono, monospace">CONVERSATION PROGRESSION (TURN 1 TO ESCALATION)</text>

  <!-- Uncanny Valley Zone -->
  <rect x="72" y="235" width="676" height="95" fill="#DC2626" fill-opacity="0.1" stroke="#DC2626" stroke-dasharray="4 4" />
  <text x="735" y="320" fill="#FCA5A5" font-size="11" text-anchor="end" font-family="JetBrains Mono, monospace">UNCANNY VALLEY &amp; BETRAYAL ZONE</text>

  <!-- Path A: Functional AI Honesty (Emerald) -->
  <path d="M 90 190 L 260 155 L 460 140 L 710 120" fill="none" stroke="#059669" stroke-width="3.5" stroke-dasharray="6 4" />
  <circle cx="90" cy="190" r="6" fill="#059669" />
  <circle cx="260" cy="155" r="6" fill="#059669" />
  <circle cx="460" cy="140" r="6" fill="#059669" />
  <circle cx="710" cy="120" r="6" fill="#059669" />

  <rect x="105" y="102" width="195" height="44" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="115" y="120" fill="#6EE7B7" font-size="11" font-weight="700">01. Explicit Bot Disclosure</text>
  <text x="115" y="136" fill="#D1D5DB" font-size="10">Calibrates expectations at Turn 1</text>

  <rect x="470" y="82" width="235" height="44" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="480" y="100" fill="#6EE7B7" font-size="11" font-weight="700">02. Ego-Free Task Execution</text>
  <text x="480" y="116" fill="#D1D5DB" font-size="10">"Here are available slots" (No "I")</text>

  <!-- Path B: Faux-Human Impersonation (Crimson/Orange) -->
  <path d="M 90 190 L 260 165 L 440 175 L 530 305 L 710 295" fill="none" stroke="#EA580C" stroke-width="3" stroke-dasharray="6 4" />
  <circle cx="260" cy="165" r="5" fill="#EA580C" />
  <circle cx="440" cy="175" r="5" fill="#EA580C" />
  <circle cx="530" cy="305" r="6" fill="#DC2626" />
  <circle cx="710" cy="295" r="6" fill="#DC2626" />

  <rect x="230" y="185" width="205" height="44" rx="6" fill="#111827" stroke="#EA580C" stroke-width="1.5" />
  <text x="240" y="203" fill="#FDBA74" font-size="11" font-weight="700">Faux-Empathy Trap ("Dr. Melfi")</text>
  <text x="240" y="219" fill="#D1D5DB" font-size="10">User overshares private details</text>

  <rect x="465" y="250" width="255" height="44" rx="6" fill="#111827" stroke="#DC2626" stroke-width="1.5" />
  <text x="475" y="268" fill="#FCA5A5" font-size="11" font-weight="700">03. The Handoff Betrayal Shock</text>
  <text x="475" y="284" fill="#D1D5DB" font-size="10">"Transferring you to a real person now"</text>
</svg>`,
      bierutCaption:
        'Read the two trajectories across conversation turns: pretending to be human temporarily inflates intimacy until a complex escalation exposes the bot, collapsing user trust into the uncanny valley.',
      annotations: [
        {
          step: '01',
          label: 'Explicit Upfront Disclosure',
          explanation:
            'Opening every session by identifying the AI agent aligns user expectations immediately and satisfies state bot-disclosure laws.',
        },
        {
          step: '02',
          label: 'Ego-Free Functional Prose',
          explanation:
            'Eliminating first-person pronouns ("I") and simulated emotions keeps the interaction anchored on rapid task resolution.',
        },
        {
          step: '03',
          label: 'The Handoff Betrayal Shock',
          explanation:
            'When an unannounced bot feigns human sympathy during a sensitive disclosure and then transfers to a "real person," the customer feels tricked.',
        },
      ],
    },
    {
      id: 'af-ch17-diag2',
      title: 'Salesforce UX Architecture: Persona Antipattern vs. Workflow-Embedded Labor',
      subtitle: 'Contrasting org-chart anthropomorphism against task-centric functional labeling',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
  <rect width="800" height="420" fill="#0B0F19" rx="12" />
  <text x="32" y="38" fill="#F9FAFB" font-size="16" font-weight="700">ORG-CHART PERSONA ANTIPATTERN VS. WORKFLOW-EMBEDDED DIGITAL LABOR</text>
  <text x="32" y="58" fill="#9CA3AF" font-size="12">Why digital labor belongs inside business workflows rather than human reporting hierarchies</text>

  <!-- Left Column: Rejected Antipattern -->
  <rect x="32" y="80" width="352" height="305" rx="8" fill="#111827" stroke="#DC2626" stroke-width="1.5" />
  <text x="52" y="110" fill="#FCA5A5" font-size="13" font-weight="700" font-family="JetBrains Mono, monospace">REJECTED: FAUX-HUMAN PERSONA</text>

  <rect x="52" y="130" width="312" height="58" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="68" y="152" fill="#F9FAFB" font-size="12" font-weight="600">1. Org-Chart Placement &amp; Job Titles</text>
  <text x="68" y="172" fill="#9CA3AF" font-size="11">Listing bots as "Customer Service Rep" under managers</text>

  <rect x="52" y="204" width="312" height="58" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="68" y="226" fill="#F9FAFB" font-size="12" font-weight="600">2. Self-Referential Ego Syntax</text>
  <text x="68" y="246" fill="#9CA3AF" font-size="11">"Here are the times I have for your appointment"</text>

  <rect x="52" y="278" width="312" height="84" rx="6" fill="#DC2626" fill-opacity="0.15" stroke="#DC2626" />
  <text x="68" y="302" fill="#FCA5A5" font-size="12" font-weight="700">Organizational &amp; UX Fallout</text>
  <text x="68" y="322" fill="#E5E7EB" font-size="11">• Demoralizes human staff via replacement optics</text>
  <text x="68" y="342" fill="#E5E7EB" font-size="11">• Triggers Turing-test skepticism in customers</text>

  <!-- Arrow Between Columns -->
  <line x1="388" y1="232" x2="412" y2="232" stroke="#2563EB" stroke-width="3" stroke-dasharray="6 4" />

  <!-- Right Column: Salesforce UX Standard -->
  <rect x="416" y="80" width="352" height="305" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="436" y="110" fill="#6EE7B7" font-size="13" font-weight="700" font-family="JetBrains Mono, monospace">ADOPTED: SERVANT-LEADER WORKFLOW</text>

  <rect x="436" y="130" width="312" height="58" rx="6" fill="#1F2937" stroke="#2563EB" />
  <text x="452" y="152" fill="#F9FAFB" font-size="12" font-weight="600">1. Pure Functional Workflow Labels</text>
  <text x="452" y="172" fill="#9CA3AF" font-size="11">Labeled as "Customer Service" or "Returns" utility</text>

  <rect x="436" y="204" width="312" height="58" rx="6" fill="#1F2937" stroke="#2563EB" />
  <text x="452" y="226" fill="#F9FAFB" font-size="12" font-weight="600">2. Zero-Ego Brand-Calibrated Voice</text>
  <text x="452" y="246" fill="#9CA3AF" font-size="11">"Here are the time slots available for the mani-pedi"</text>

  <rect x="436" y="278" width="312" height="84" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" />
  <text x="452" y="302" fill="#6EE7B7" font-size="12" font-weight="700">Enterprise &amp; Customer Advantage</text>
  <text x="452" y="322" fill="#E5E7EB" font-size="11">• Frames AI as embedded digital labor for teams</text>
  <text x="452" y="342" fill="#E5E7EB" font-size="11">• Preserves brand vocabulary without deception</text>
</svg>`,
      bierutCaption:
        'Compare the rejected persona model on the left with the Salesforce UX standard on the right: stripping away ego pronouns and org-chart titles aligns both workforce morale and customer clarity.',
      annotations: [
        {
          step: '01',
          label: 'Functional Labeling Over Titles',
          explanation:
            'Labeling an agent "Returns" or "Customer Service" rather than "Customer Service Associate" prevents false equivalence with human employees.',
        },
        {
          step: '02',
          label: 'Pronoun-Free Task Syntax',
          explanation:
            'Removing "I" and simulated feelings centers the interface on user outcomes ("time slots available") rather than artificial agent agency.',
        },
        {
          step: '03',
          label: 'Brand Voice Without Impersonation',
          explanation:
            'Luxury and enterprise brands train agents on curated, inclusive domain vocabulary while keeping the agent identity explicitly digital.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'af-ch17-mm1',
      name: 'The Pixar Non-Photorealism Principle',
      tagline: 'Intentional stylization avoids the revulsion of the almost-human uncanny valley',
      naiveIntuition:
        'Making an AI agent sound as indistinguishable from a human being as possible maximizes customer comfort and engagement.',
      firstPrinciplesReality:
        'Humans are evolutionary experts at detecting subtle non-human cues, so "almost-human" facsimiles trigger cognitive unease and acute embarrassment when the illusion breaks.',
      howToApply:
        'Design agents with explicit AI disclosure and task-oriented clarity rather than simulated human biography or emotional sympathy.',
    },
    {
      id: 'af-ch17-mm2',
      name: 'The Ego-Free Servant-Leader Protocol',
      tagline: 'Center the syntax on the user outcome and erase the first-person "I"',
      naiveIntuition:
        'Conversational warmth requires the bot to refer to itself using "I" and express personal feelings about the user request.',
      firstPrinciplesReality:
        'Every self-referential pronoun ("Here are the times I have") shifts cognitive attention onto a fictional entity instead of the customer task.',
      howToApply:
        'Audit prompt templates to strip "I", "me", and emotional verbs, replacing them with direct state descriptions ("Here are the time slots available").',
    },
    {
      id: 'af-ch17-mm3',
      name: 'Workflow Utility vs. Org-Chart Persona',
      tagline: 'Digital labor is an embedded workflow capability, never a salaried seat on an org chart',
      naiveIntuition:
        'Giving AI agents human avatars, job titles ("Customer Service Rep"), and reporting lines on the corporate org chart makes digital transformation tangible.',
      firstPrinciplesReality:
        'Placing software agents on human org charts signals direct human replacement, triggering workforce backlash and misrepresenting how workflow automation operates.',
      howToApply:
        'Name and govern every agent strictly by its functional domain ("Returns", "Appointment Scheduling") embedded inside operational pipelines.',
    },
  ],
  deepSections: [
    {
      id: 'af-ch17-sec1',
      sectionNumber: '17.1',
      title: 'The Uncanny Valley & The Faux-Empathy Betrayal Trap',
      subtitle: 'Why the Turing Test is a flawed UX design target for enterprise customer interactions',
      coreMechanism:
        'Early conversational builders treated the Turing Test as a product specification, programming bots to impersonate human representatives until a query exceeded their script. In practice, this architecture collides with the uncanny valley—the cognitive dissonance humans experience when encountering a synthetic facsimile that is almost, but not quite, human.\n\nWhen a customer assumes they are speaking with a person about a sensitive medical or financial issue and receives simulated sympathy—like a digital Dr. Jennifer Melfi—they disclose deeper personal details. The moment the agent hits a capability boundary and announces, "Thanks for sharing, I am going to transfer you to a real person now," the customer experiences embarrassment and betrayal.',
      keyTakeaways: [
        'The Turing Test is a historical benchmark of machine output, never a valid user-experience design principle.',
        'Simulated empathy followed by a handoff to a "real person" transforms customer vulnerability into institutional distrust.',
      ],
      commonPitfalls: [
        'Delaying bot disclosure until the moment the agent fails to resolve the customer query.',
        'Scripting therapeutic small talk into healthcare or financial support agents to simulate human warmth.',
      ],
    },
    {
      id: 'af-ch17-sec2',
      sectionNumber: '17.2',
      title: 'Ego-Free UX & Legal Disclosure Mandates',
      subtitle: 'Yvonne Gando’s Salesforce UX guidelines for pronoun-free, task-centered agent dialogue',
      coreMechanism:
        'Based on telemetry from early Agentforce deployments, Salesforce Senior Director of UX Yvonne Gando codified a primary design law: focus on what the user needs, not the AI doing it. An effective enterprise agent behaves like a spiritually evolved servant-leader—devoid of ego, self-reference, or simulated feelings, existing solely to execute the task at hand.\n\nThis transparency is simultaneously an ethical necessity and a statutory requirement. State jurisdictions including California, Utah, and Colorado enforce bot-disclosure mandates requiring enterprises to notify consumers immediately when they are communicating with an artificial agent. Combining explicit upfront identification with ego-free phrasing satisfies regulatory compliance while keeping conversational bandwidth focused on customer resolution.',
      keyTakeaways: [
        'Removing the pronoun "I" eliminates synthetic ego and directs 100% of conversational tokens toward user utility.',
        'Upfront AI identification is legally mandated in states like California, Utah, and Colorado and prevents expectation mismatch everywhere.',
      ],
      commonPitfalls: [
        'Confusing brand voice calibration with human impersonation; an agent can sound like a luxury brand while remaining explicitly AI.',
        'Allowing LLM default training to inject self-referential filler into enterprise responses.',
      ],
    },
    {
      id: 'af-ch17-sec3',
      sectionNumber: '17.3',
      title: 'Workflow-Embedded Labor vs. Org-Chart Personas',
      subtitle: 'Why giving digital workers corporate titles and reporting lines alienates your human workforce',
      coreMechanism:
        'The temptation to anthropomorphize AI extends beyond customer chat windows into internal corporate architecture. When an HR technology vendor publicly announced plans to onboard "digital workers" with individual personas, human managers, and seats on the corporate organization chart, the market backlash was immediate.\n\nAgents do not occupy seats on an organization chart; they are digital labor embedded directly inside operational workflows, with the emphasis squarely on work. Instead of labeling an agent a "Customer Service Associate" or "Sales Development Rep," enterprise architects must label agents strictly by their workflow function: "Customer Service," "Returns," or "Order Tracking." This functional taxonomy clarifies that agents execute bounded tasks within a larger human-supervised system.',
      keyTakeaways: [
        'Placing AI agents on human organization charts damages employee morale by framing automation as personal replacement.',
        'Functional labels accurately represent agents as workflow-embedded digital labor.',
      ],
      commonPitfalls: [
        'Assigning human headshots, fictitious biographies, or corporate job titles to internal or external AI agents.',
        'Deploying autonomous workflow agents without clear human adult supervision and governance boundaries.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Agent Persona Architecture: Anthropomorphic Facsimile vs. Ego-Free Functional Utility',
      description: 'Evaluating conversational design paradigms across user trust, legal compliance, workforce morale, and brand alignment.',
      headers: ['Design Dimension', 'Faux-Human Persona ("Mini-Me")', 'Generic Robotic Script', 'Ego-Free Functional Agent (Salesforce UX)'],
      rows: [
        ['Identity Disclosure', 'Hidden until escalation forces reveal', 'Obvious due to rigid menu tree', 'Explicitly disclosed as AI on turn one'],
        ['Pronoun & Ego Usage', 'Heavy first-person ("I feel", "I have")', 'Mechanical system error codes', 'Zero "I"; task-focused ("Slots available")'],
        ['Org-Chart Framing', 'Given job titles ("Associate", "Rep")', 'Treated as legacy IVR macro', 'Labeled by workflow function ("Returns")'],
        ['Brand Voice Fit', 'High risk of uncanny valley mismatch', 'Zero brand differentiation', 'Curated, inclusive brand vocabulary'],
        ['Legal & Workforce Risk', 'Violates state bot laws; alienates staff', 'High customer abandonment rate', 'Compliant in CA/UT/CO; empowers staff'],
      ],
      verdictRule:
        'Always deploy Ego-Free Functional Agents: disclose AI identity upfront, eliminate first-person pronouns, label by workflow function, and infuse brand vocabulary without feigning humanity.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'af-ch17-scen1',
      title: 'Eliminating the "Dr. Melfi" Empathy Trap in Healthcare Support',
      roleAndContext: 'VP of Patient Experience at a national telehealth provider deploying an Agentforce intake assistant.',
      symptomOrFailure:
        'Patients conversing with an undisclosed chatbot that uses first-person empathetic phrases ("I understand how scary that symptom feels") become angry and abandon sessions when the bot abruptly states, "Transferring you to a real person now."',
      naiveFixAndWhyItFails:
        'Prompting the LLM to generate even more elaborate emotional small talk before escalation deepens the deception and increases patient distress upon handoff.',
      firstPrinciplesSolution:
        'Configure an upfront AI disclosure banner, strip all first-person pronouns and simulated feelings from the prompt instructions, and present direct clinical scheduling options ("Available specialist appointment windows").',
      measurableOutcome:
        'Eliminates post-handoff patient complaints, ensures 100% compliance with California and Colorado bot-disclosure statutes, and reduces intake completion time.',
    },
    {
      id: 'af-ch17-scen2',
      title: 'Reframing Internal Digital Workers After Org-Chart Backlash',
      roleAndContext: 'Chief People Officer and Enterprise Architect rolling out internal employee-service and returns agents.',
      symptomOrFailure:
        'Announcing new AI agents with human avatars, "Customer Service Rep" titles, and seats on the departmental org chart triggers employee anxiety and union pushback over perceived headcount replacement.',
      naiveFixAndWhyItFails:
        'Giving the bots friendlier nicknames and fictional hobbies reinforces the tone-deaf optics studied in the HR technology industry.',
      firstPrinciplesSolution:
        'Remove all agents from the HR org chart, strip human job titles ("Rep", "Associate"), and re-label each unit strictly by its embedded workflow function ("Returns Processing", "Benefits Lookup").',
      measurableOutcome:
        'Restores internal workforce adoption by positioning agents as workflow utilities that offload repetitive ticket triage rather than faux-human peers.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch17-q1',
        scenarioPrompt:
          'A retail service team designs an AI agent to handle appointment bookings. Which response phrasing adheres strictly to Salesforce UX Senior Director Yvonne Gando’s ego-free design guidelines?',
        options: [
          {
            label: 'A',
            text: '"I checked my calendar and here are the times I have for your appointment."',
            isCorrect: false,
            explanation: 'This phrasing violates the ego-free rule by using first-person pronouns ("I", "my") and centering the AI rather than the user need.',
          },
          {
            label: 'B',
            text: '"Here are the time slots that are available for the mani-pedi."',
            isCorrect: true,
            explanation: 'This phrasing removes the word "I" and focuses directly on the user outcome without artificial ego.',
          },
          {
            label: 'C',
            text: '"As your dedicated customer service associate, I would be thrilled to book that for you."',
            isCorrect: false,
            explanation: 'This combines a forbidden human job title ("associate"), simulated emotion ("thrilled"), and first-person pronouns.',
          },
          {
            label: 'D',
            text: '"Slot_Array_Returned: [10:00, 14:00]. Select integer."',
            isCorrect: false,
            explanation: 'Agents must still use accessible, inclusive, on-brand natural language rather than raw machine syntax.',
          },
        ],
      },
      {
        id: 'af-ch17-q2',
        scenarioPrompt:
          'Why does Chapter 17 cite Pixar animation studios when analyzing conversational AI design?',
        options: [
          {
            label: 'A',
            text: 'To show that 3D animated avatars are required for enterprise customer service.',
            isCorrect: false,
            explanation: 'The chapter advises against faux-human personas and avatars.',
          },
          {
            label: 'B',
            text: 'To illustrate why designers intentionally avoid absolute photorealism so audiences do not fall into the disturbing "uncanny valley" of almost-human facsimiles.',
            isCorrect: true,
            explanation: 'Pixar avoids absolute photorealism because "almost-human" facsimiles disturb human observers—the exact reason AI agents should not impersonate humans.',
          },
          {
            label: 'C',
            text: 'To demonstrate how voice actors should record training data for Agentforce.',
            isCorrect: false,
            explanation: 'Voice acting is never mentioned; the analogy strictly addresses the uncanny valley.',
          },
          {
            label: 'D',
            text: 'To argue that AI agents should use humorous cartoon personas on corporate org charts.',
            isCorrect: false,
            explanation: 'Putting agents on org charts or giving them personas is explicitly rejected.',
          },
        ],
      },
      {
        id: 'af-ch17-q3',
        scenarioPrompt:
          'An enterprise operations leader wants to catalog 12 new Agentforce deployments across the company directory. How should these agents be labeled and positioned?',
        options: [
          {
            label: 'A',
            text: 'Place them on the corporate org chart under regional managers with titles like "Digital Customer Service Rep."',
            isCorrect: false,
            explanation: 'Chapter 17 explicitly warns against putting digital workers on org charts or calling them "reps" or "associates."',
          },
          {
            label: 'B',
            text: 'Label them strictly by their workflow function (such as "Customer Service" or "Returns") embedded in business processes, off the human org chart.',
            isCorrect: true,
            explanation: 'Agents are digital labor embedded in workflows and should be labeled by work function rather than human job titles.',
          },
          {
            label: 'C',
            text: 'Hide their existence from both employees and customers so interactions pass the Turing Test.',
            isCorrect: false,
            explanation: 'Concealing bot identity violates state laws and UX trust principles.',
          },
          {
            label: 'D',
            text: 'Assign each agent a human first name and simulated career biography to boost customer rapport.',
            isCorrect: false,
            explanation: 'Fictitious human personas create expectation mismatch and workforce resentment.',
          },
        ],
      },
      {
        id: 'af-ch17-q4',
        scenarioPrompt:
          'What is the primary risk of allowing an unannounced AI agent to express human-like sympathy ("Dr. Jennifer Melfi style") during a customer support conversation about a health condition?',
        options: [
          {
            label: 'A',
            text: 'It consumes too many GPU tokens in the Data Cloud lakehouse.',
            isCorrect: false,
            explanation: 'The failure mode is psychological and trust-based, not compute-bound.',
          },
          {
            label: 'B',
            text: 'The customer overshares under the assumption of human empathy and feels foolish or betrayed when the bot says, "Transferring you to a real person now."',
            isCorrect: true,
            explanation: 'Discovering mid-conversation that an empathetic listener was actually a bot triggers embarrassment and erodes trust.',
          },
          {
            label: 'C',
            text: 'The human agent receiving the transfer will not know the customer’s name.',
            isCorrect: false,
            explanation: 'Even with context transfer, the emotional deception of pretending to be human damages the customer relationship.',
          },
          {
            label: 'D',
            text: 'It prevents the agent from using luxury brand vocabulary.',
            isCorrect: false,
            explanation: 'Brand vocabulary is orthogonal to falsely impersonating a sympathetic human.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'af-ch17-fc1',
        category: 'architecture',
        front: 'Why is the Turing Test a flawed design principle for enterprise AI agents?',
        back: 'Impersonating humans pushes interactions into the uncanny valley and sets false expectations that collapse when the bot must escalate to a real person.',
        mentalHook: 'Turing = trial of intelligence, never a UX blueprint.',
      },
      {
        id: 'af-ch17-fc2',
        category: 'adaptation',
        front: 'What is Yvonne Gando’s core Salesforce UX rule for AI agent conversation design?',
        back: '"Focus on what the user needs, not the AI doing it"—designing the agent as an ego-free servant-leader that avoids the pronoun "I" and simulated feelings.',
        mentalHook: 'Erase the "I"; serve the task.',
      },
      {
        id: 'af-ch17-fc3',
        category: 'security',
        front: 'Which US states had already enacted legal requirements to disclose when users are interacting with a bot at the time of publication?',
        back: 'California, Utah, and Colorado required upfront bot disclosure, with additional states considering parallel legislation.',
        mentalHook: 'CA, UT, CO = Mandatory Bot Honesty.',
      },
      {
        id: 'af-ch17-fc4',
        category: 'architecture',
        front: 'How should AI agents be labeled in enterprise systems instead of human titles like "Customer Service Associate" or "Rep"?',
        back: 'They should be labeled strictly by their work function—such as "Customer Service" or "Returns"—and kept off the human organization chart.',
        mentalHook: 'Label the work function, never a fake human role.',
      },
      {
        id: 'af-ch17-fc5',
        category: 'foundation',
        front: 'How did the high-end luxury retailer in the book align its service agents with its brand without pretending the agents were human?',
        back: 'It trained the agents to use an accessible, inclusive, carefully cultivated brand vocabulary while still identifying them honestly as AI.',
        mentalHook: 'Sound like your brand, not like a fake person.',
      },
      {
        id: 'af-ch17-fc6',
        category: 'evaluation',
        front: 'What lesson did the HR technology company (Lattice) learn when it announced plans to put digital workers on organization charts with managers and titles?',
        back: 'Framing AI agents as org-chart peers with personas provokes immediate backlash and demoralizes the human workforce by implying direct human replacement.',
        mentalHook: 'Workflows hold digital labor; org charts hold people.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'af-ch17-feyn1',
        conceptTitle: 'Why AI Honesty & Ego-Free Syntax Outperform Human Impersonation',
        prompt:
          'Explain to a product manager why designing a customer service agent to use "I", express sympathy, and hide its AI identity until escalation is a dangerous UX antipattern.',
        rubricChecklist: [
          'Contrasts the Turing Test with the uncanny valley (citing the Pixar non-photorealism analogy).',
          'Walks through the "Dr. Jennifer Melfi" health-condition scenario where a user overshares and feels betrayed upon transfer to a "real person."',
          'Demonstrates Yvonne Gando’s ego-free syntax rule by contrasting "Here are the times I have" with "Here are the time slots that are available."',
          'Notes that upfront bot identification is legally required in states like California, Utah, and Colorado.',
        ],
        modelExplanation:
          'When an AI agent imitates human empathy and hides its identity, it enters the uncanny valley—the disturbing realm of "almost-human" facsimiles that Pixar intentionally avoids. If a customer thinks they are talking to an understanding human like Dr. Melfi about a health issue, they open up emotionally, only to feel foolish or betrayed when the bot suddenly says, "I am going to transfer you to a real person now." Instead, Salesforce UX guidelines mandate upfront AI disclosure (which is also law in states like California, Utah, and Colorado) and ego-free servant-leader language that drops the pronoun "I"—saying "Here are the time slots that are available" rather than "Here are the times I have."',
      },
      {
        id: 'af-ch17-feyn2',
        conceptTitle: 'Workflow-Embedded Digital Labor vs. Org-Chart Personas',
        prompt:
          'Explain why enterprises must never place AI agents on corporate organization charts or call them "associates" or "reps," and how to reconcile functional labeling with brand voice.',
        rubricChecklist: [
          'Cites the HR technology company misstep of assigning personas, titles, and managers to digital workers on an org chart.',
          'Explains the psychological impact on the human workforce when agents are framed as robot-for-human replacements.',
          'Defines the correct architectural framing: digital labor embedded in workflows, labeled by work function ("Customer Service", "Returns").',
          'Clarifies that functional transparency still pairs with accessible, inclusive, on-brand vocabulary (like the luxury retailer example).',
        ],
        modelExplanation:
          'Putting AI agents on an organization chart with human titles like "Customer Service Rep" or "Associate"—as one HR tech company attempted—frames agents as direct replacements for people, alienating the human workforce. AI agents do not occupy org-chart seats; they are digital labor embedded inside workflows and should be named strictly after their work function, such as "Customer Service" or "Returns." Stripping away fake human personas does not mean sounding robotic: as proven by a high-end luxury retailer, agents should still be trained on an accessible, inclusive, carefully cultivated vocabulary so they sound unmistakably like your brand while remaining honest about being AI.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch17-n1',
        label: 'Uncanny Valley in Conversational UX',
        category: 'foundation',
        chapterNumber: 17,
        importance: 1,
        definition:
          'The cognitive discomfort triggered when a synthetic agent attempts near-human impersonation but fails upon boundary escalation.',
        whyItMatters:
          'Explains why the Turing Test fails as a design principle and why faux-empathetic handoffs destroy customer trust.',
      },
      {
        id: 'af-ch17-n2',
        label: 'Upfront AI Honesty & Disclosure',
        category: 'security',
        chapterNumber: 17,
        importance: 1,
        definition:
          'The practice—and statutory requirement in states like CA, UT, and CO—of identifying an AI agent as AI at the start of every conversation.',
        whyItMatters:
          'Calibrates user expectations immediately and prevents the embarrassment of discovering a bot mid-conversation.',
      },
      {
        id: 'af-ch17-n3',
        label: 'Ego-Free Servant-Leader Syntax',
        category: 'adaptation',
        chapterNumber: 17,
        importance: 1,
        definition:
          'Salesforce UX guideline that removes self-reference ("I"), simulated feelings, and ego so dialogue focuses strictly on user outcomes.',
        formulaOrRule: 'Replace "Here are the times I have" -> "Here are the time slots available"',
        whyItMatters:
          'Keeps conversational attention on resolving the customer task rather than maintaining a fictional bot persona.',
      },
      {
        id: 'af-ch17-n4',
        label: 'Workflow-Embedded Functional Labeling',
        category: 'architecture',
        chapterNumber: 17,
        importance: 2,
        definition:
          'Naming and deploying agents by work function ("Customer Service", "Returns") inside workflows rather than placing them on human org charts as "reps."',
        whyItMatters:
          'Prevents workforce alienation caused by robot-for-human replacement optics.',
      },
      {
        id: 'af-ch17-n5',
        label: 'On-Brand Inclusive Vocabulary',
        category: 'adaptation',
        chapterNumber: 17,
        importance: 2,
        definition:
          'Training agents to use accessible, inclusive, brand-specific terminology without claiming human identity.',
        whyItMatters:
          'Allows luxury and enterprise brands to preserve distinctive voice while maintaining full AI transparency.',
      },
      {
        id: 'af-ch17-n6',
        label: 'Handoff Betrayal Failure Mode',
        category: 'evaluation',
        chapterNumber: 17,
        importance: 3,
        definition:
          'The trust collapse that occurs when a customer shares sensitive details with a seemingly sympathetic human agent that then announces a transfer to a "real person."',
        whyItMatters:
          'Serves as the primary diagnostic failure case against anthropomorphic chatbot scripts.',
      },
    ],
    edges: [
      {
        source: 'af-ch17-n2',
        target: 'af-ch17-n6',
        relationship: 'mitigates',
        explanation:
          'Explicit upfront AI disclosure prevents customers from assuming human sympathy and feeling betrayed at handoff.',
      },
      {
        source: 'af-ch17-n3',
        target: 'af-ch17-n1',
        relationship: 'mitigates',
        explanation:
          'Eliminating first-person pronouns and simulated feelings keeps the agent out of the uncanny valley.',
      },
      {
        source: 'af-ch17-n4',
        target: 'af-ch17-n3',
        relationship: 'part_of',
        explanation:
          'Functional workflow labeling and pronoun-free syntax together form the Salesforce ego-free agent UX standard.',
      },
      {
        source: 'af-ch17-n5',
        target: 'af-ch17-n3',
        relationship: 'optimizes',
        explanation:
          'Curated brand vocabulary enriches ego-free functional prose so it remains warm and on-brand without faking humanity.',
      },
      {
        source: 'af-ch17-n6',
        target: 'af-ch17-n1',
        relationship: 'evaluates',
        explanation:
          'Customer reaction during escalation exposes the hidden cost of uncanny-valley human impersonation.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 2,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 17 (Turing test critique, Pixar uncanny valley, Dr. Jennifer Melfi handoff example, Yvonne Gando UX rules, CA/UT/CO disclosure laws, Lattice org-chart mistake, functional labeling, and luxury brand vocabulary). Zero figures in source chapter.',
  },
};

export const afCh18Mastery: ChapterMastery = {
  chapterNumber: 18,
  chapterId: 'ch18',
  title: 'How Do You Make Sure AI Is Governed?',
  subtitle: 'The Four Foundational Questions, Matrixed Stewardship Roles, and Five Technical Pillars of Data Cloud Governance',
  readingTimeMinutes: 7,
  sourceWordCount: 2275,
  executiveThesis:
    'Because billion-parameter generative models require massive, variable data streams to operate accurately, enterprise AI converges toward either undocumented pipeline chaos or structured data governance. Governing Agentforce requires a cross-functional accountability matrix—Executive Sponsors, Stewards, and Architects—enforcing five technical pillars across Data Cloud: access control, zero-copy accuracy, four-tier consent privacy, sandbox-masked security, and zero-retention lifecycle policies.',
  paradigmShift: {
    oldWay:
      'Operating ad-hoc data pipelines with undocumented GitHub scripts, brittle ETL copies, coarse binary opt-ins, and unmasked sandbox test environments.',
    newWay:
      'Enforcing continuous cross-functional governance through Data Spaces partitioning, zero-copy lakehouse lineage, four-level consent models, sandbox masking, and Trust Layer zero retention.',
    whyItChanged:
      'Global data volume is surging toward 300 zettabytes by 2027 while strict mandates like the EU AI Act and GDPR make undocumented data consumption both a legal liability and an agentic quality failure.',
  },
  customDiagrams: [
    {
      id: 'af-ch18-diag1',
      title: 'The Five Pillars of Agentforce & Data Cloud Governance Architecture',
      subtitle: 'How the 4 Foundational Questions and 3 Matrixed Roles govern the 5 Platform Pillars',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
  <rect width="800" height="420" fill="#0B0F19" rx="12" />
  <text x="32" y="36" fill="#F9FAFB" font-size="16" font-weight="700">ENTERPRISE AI GOVERNANCE: ROLES, QUESTIONS &amp; 5 DATA CLOUD PILLARS</text>
  <text x="32" y="56" fill="#9CA3AF" font-size="12">From Gartner decision-rights accountability to Hyperforce &amp; Trust Layer enforcement</text>

  <!-- Top Layer: 3 Matrixed Governance Roles -->
  <rect x="32" y="72" width="736" height="62" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5" />
  <text x="48" y="94" fill="#93C5FD" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">01. CROSS-FUNCTIONAL ACCOUNTABILITY MATRIX (DECISION RIGHTS)</text>
  <text x="48" y="116" fill="#E5E7EB" font-size="11">• Executive Sponsor (CIO/CISO)    • Data Stewards &amp; Custodians (Business Units)    • Data Architects &amp; Scientists (Sanity Test)</text>

  <!-- Connector -->
  <line x1="400" y1="134" x2="400" y2="156" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Middle Layer: 4 Core Blueprint Questions -->
  <rect x="32" y="156" width="736" height="54" rx="8" fill="#1F2937" stroke="#EA580C" stroke-width="1.5" />
  <text x="48" y="176" fill="#FDBA74" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">02. FOUR BLUEPRINT QUESTIONS</text>
  <text x="48" y="196" fill="#F9FAFB" font-size="11">1. What data do we have?   2. Where is it located?   3. What data is sensitive?   4. Who needs to manage it?</text>

  <!-- Connectors to 5 Pillars -->
  <line x1="100" y1="210" x2="100" y2="236" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4" />
  <line x1="250" y1="210" x2="250" y2="236" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4" />
  <line x1="400" y1="210" x2="400" y2="236" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4" />
  <line x1="550" y1="210" x2="550" y2="236" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4" />
  <line x1="700" y1="210" x2="700" y2="236" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4" />

  <!-- 5 Pillars Boxes -->
  <rect x="32" y="236" width="136" height="154" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="44" y="258" fill="#6EE7B7" font-size="11" font-weight="700">1. ACCESS</text>
  <text x="44" y="278" fill="#D1D5DB" font-size="10">• Object/Row Perms</text>
  <text x="44" y="296" fill="#D1D5DB" font-size="10">• Security Center</text>
  <text x="44" y="314" fill="#D1D5DB" font-size="10">• Data Spaces</text>
  <text x="44" y="332" fill="#D1D5DB" font-size="10">• Private Connect</text>

  <rect x="182" y="236" width="136" height="154" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="194" y="258" fill="#6EE7B7" font-size="11" font-weight="700">2. ACCURACY</text>
  <text x="194" y="278" fill="#D1D5DB" font-size="10">• Zero-Copy (No ETL)</text>
  <text x="194" y="296" fill="#D1D5DB" font-size="10">• DLO -&gt; DMO Map</text>
  <text x="194" y="314" fill="#D1D5DB" font-size="10">• Lineage &amp; Alerts</text>
  <text x="194" y="332" fill="#D1D5DB" font-size="10">• AI Metadata Tags</text>

  <rect x="332" y="236" width="136" height="154" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="344" y="258" fill="#6EE7B7" font-size="11" font-weight="700">3. PRIVACY</text>
  <text x="344" y="278" fill="#D1D5DB" font-size="10">• 4-Level Consent</text>
  <text x="344" y="296" fill="#D1D5DB" font-size="10">• Privacy Data Model</text>
  <text x="344" y="314" fill="#D1D5DB" font-size="10">• Preference Mgr</text>
  <text x="344" y="332" fill="#D1D5DB" font-size="10">• Consent Write API</text>

  <rect x="482" y="236" width="136" height="154" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="494" y="258" fill="#6EE7B7" font-size="11" font-weight="700">4. SECURITY</text>
  <text x="494" y="278" fill="#D1D5DB" font-size="10">• Sandbox Data Mask</text>
  <text x="494" y="296" fill="#D1D5DB" font-size="10">• Shield Encryption</text>
  <text x="494" y="314" fill="#D1D5DB" font-size="10">• Customer Keys</text>
  <text x="494" y="332" fill="#D1D5DB" font-size="10">• Hash/Salt &amp; Events</text>

  <rect x="632" y="236" width="136" height="154" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="644" y="258" fill="#6EE7B7" font-size="11" font-weight="700">5. RETENTION</text>
  <text x="644" y="278" fill="#D1D5DB" font-size="10">• Right to Forget</text>
  <text x="644" y="296" fill="#D1D5DB" font-size="10">• Privacy Center</text>
  <text x="644" y="314" fill="#D1D5DB" font-size="10">• Zero-Retention LLM</text>
  <text x="644" y="332" fill="#D1D5DB" font-size="10">• Hyperforce Replicas</text>
</svg>`,
      bierutCaption:
        'Follow the governance cascade from top to bottom: human decision-rights roles answer the four inventory questions and enforce policy through five Data Cloud technical pillars.',
      annotations: [
        {
          step: '01',
          label: 'Cross-Functional Accountability Matrix',
          explanation:
            'CIO/CISO sponsors secure board resources, business stewards enforce domain rules, and data architects/scientists validate model sanity.',
        },
        {
          step: '02',
          label: 'The Four-Question Governance Blueprint',
          explanation:
            'Every governance audit begins by mapping what data exists, where it resides.',
        },
        {
          step: '03',
          label: 'Five Data Cloud Enforcement Pillars',
          explanation:
            'Platform primitives—from Data Spaces and Zero-Copy DMOs to Sandbox Data Mask and Trust Layer zero retention—operationalize compliance in real time.',
        },
      ],
    },
    {
      id: 'af-ch18-diag2',
      title: 'Four-Level Granular Consent Hierarchy & Zero-Copy Lineage Flow',
      subtitle: 'How Data Cloud filters personal data through four consent gates before Agentforce execution',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
  <rect width="800" height="420" fill="#0B0F19" rx="12" />
  <text x="32" y="36" fill="#F9FAFB" font-size="16" font-weight="700">FOUR-TIER CONSENT HIERARCHY &amp; ZERO-RETENTION AGENT EXECUTION</text>
  <text x="32" y="56" fill="#9CA3AF" font-size="12">Tracing how Data Cloud refines raw streams and filters customer consent across four levels</text>

  <!-- Left: Lakehouse Zero-Copy Ingestion -->
  <rect x="32" y="84" width="210" height="296" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5" />
  <text x="48" y="110" fill="#93C5FD" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">01. LAKEHOUSE &amp; ZERO-COPY</text>

  <rect x="48" y="128" width="178" height="64" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="60" y="150" fill="#F9FAFB" font-size="11" font-weight="600">Data Lake Objects (DLO)</text>
  <text x="60" y="168" fill="#9CA3AF" font-size="10">Raw ingestion + Zero-Copy</text>
  <text x="60" y="182" fill="#9CA3AF" font-size="10">(Avoids ETL copy errors)</text>

  <line x1="137" y1="192" x2="137" y2="216" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="48" y="216" width="178" height="64" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="60" y="238" fill="#F9FAFB" font-size="11" font-weight="600">Data Model Objects (DMO)</text>
  <text x="60" y="256" fill="#9CA3AF" font-size="10">AI metadata tagging &amp;</text>
  <text x="60" y="270" fill="#9CA3AF" font-size="10">Data Spaces partitioning</text>

  <rect x="48" y="298" width="178" height="64" rx="6" fill="#1F2937" stroke="#059669" />
  <text x="60" y="320" fill="#6EE7B7" font-size="11" font-weight="600">Sandbox Data Mask</text>
  <text x="60" y="338" fill="#9CA3AF" font-size="10">Anonymizes PII during</text>
  <text x="60" y="352" fill="#9CA3AF" font-size="10">stream &amp; model testing</text>

  <!-- Connector to Center -->
  <line x1="242" y1="232" x2="278" y2="232" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Center: 4-Level Consent Funnel -->
  <rect x="278" y="84" width="254" height="296" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5" />
  <text x="294" y="110" fill="#FDBA74" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">02. 4-LEVEL CONSENT FILTER</text>

  <rect x="294" y="126" width="222" height="48" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="306" y="146" fill="#F9FAFB" font-size="11" font-weight="600">Level 1: Global Consent</text>
  <text x="306" y="163" fill="#9CA3AF" font-size="10">"Yes, you may contact me"</text>

  <rect x="294" y="186" width="222" height="48" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="306" y="206" fill="#F9FAFB" font-size="11" font-weight="600">Level 2: Specific Channel</text>
  <text x="306" y="223" fill="#9CA3AF" font-size="10">"By email only, not by phone"</text>

  <rect x="294" y="246" width="222" height="48" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="306" y="266" fill="#F9FAFB" font-size="11" font-weight="600">Level 3: Contact Point</text>
  <text x="306" y="283" fill="#9CA3AF" font-size="10">"Personal Gmail, not work email"</text>

  <rect x="294" y="306" width="222" height="54" rx="6" fill="#1F2937" stroke="#EA580C" />
  <text x="306" y="326" fill="#FDBA74" font-size="11" font-weight="600">Level 4: Business Purpose</text>
  <text x="306" y="343" fill="#9CA3AF" font-size="10">"Product updates only, no offers"</text>

  <!-- Connector to Right -->
  <line x1="532" y1="232" x2="568" y2="232" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right: Trust Layer & Hyperforce -->
  <rect x="568" y="84" width="200" height="296" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="584" y="110" fill="#6EE7B7" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">03. TRUST &amp; RETENTION</text>

  <rect x="584" y="132" width="168" height="96" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" />
  <text x="596" y="156" fill="#6EE7B7" font-size="11" font-weight="700">Einstein Trust Layer</text>
  <text x="596" y="176" fill="#E5E7EB" font-size="10">• Explicit Zero Retention</text>
  <text x="596" y="194" fill="#E5E7EB" font-size="10">• External LLMs never</text>
  <text x="596" y="210" fill="#E5E7EB" font-size="10">  store or train on data</text>

  <rect x="584" y="250" width="168" height="110" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="596" y="274" fill="#F9FAFB" font-size="11" font-weight="700">Privacy Center &amp; Hyperforce</text>
  <text x="596" y="294" fill="#9CA3AF" font-size="10">• Right-to-be-Forgotten</text>
  <text x="596" y="312" fill="#9CA3AF" font-size="10">• Multi-region replication</text>
  <text x="596" y="330" fill="#9CA3AF" font-size="10">• Shield CMK Encryption</text>
</svg>`,
      bierutCaption:
        'Trace how raw customer records move left-to-right from Zero-Copy Data Lake Objects through the four-stage consent funnel before reaching the zero-retention Trust Layer.',
      annotations: [
        {
          step: '01',
          label: 'Zero-Copy DLO-to-DMO Refinement',
          explanation:
            'Accessing external data via zero-copy eliminates ETL duplication drift while mapping records into standardized Data Model Objects.',
        },
        {
          step: '02',
          label: 'Four-Tier Consent Specification',
          explanation:
            'Data Cloud evaluates permission at four distinct levels: Global, Channel, Contact Point, and specific Business Purpose.',
        },
        {
          step: '03',
          label: 'Zero-Retention LLM Boundary',
          explanation:
            'The Trust Layer enforces explicit zero retention with foundation model providers while Privacy Center automates right-to-be-forgotten purges.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'af-ch18-mm1',
      name: 'The Four-Question Governance Compass',
      tagline: 'Every enterprise data audit reduces to inventory, location, sensitivity, and ownership',
      naiveIntuition:
        'Data governance is a one-time software purchase that IT installs and forgets once compliance checklists are signed.',
      firstPrinciplesReality:
        'Because data streams and regional privacy definitions shift continuously, governance is an ongoing discipline anchored by four questions: What data do we have.',
      howToApply:
        'Convene your matrixed governance triad (Executive Sponsor, Stewards, Architects) quarterly to re-verify all four questions against new Agentforce use cases.',
    },
    {
      id: 'af-ch18-mm2',
      name: 'Zero-Copy Accuracy Conservation',
      tagline: 'Every ETL copy multiplies staleness and schema drift; virtual pointers preserve ground truth',
      naiveIntuition:
        'Centralizing enterprise data for AI requires duplicating every warehouse table into a separate AI staging database via nightly ETL jobs.',
      firstPrinciplesReality:
        'Every ETL pipeline introduces copying errors, version lag, and orphaned lineage that degrade the 85% baseline data-quality threshold required for reliable agents.',
      howToApply:
        'Mount external cloud warehouses into Data Cloud via zero-copy federation and Private Connect, mapping raw Data Lake Objects (DLOs) to unified Data Model Objects (DMOs) with live lineage tags.',
    },
    {
      id: 'af-ch18-mm3',
      name: 'The Four-Rung Consent Ladder',
      tagline: 'Consent is not a binary checkbox; it decomposes into Global, Channel, Contact Point, and Purpose',
      naiveIntuition:
        'Storing a single boolean `marketing_opt_in = true` flag on a customer profile satisfies privacy governance for autonomous outreach.',
      firstPrinciplesReality:
        'A customer may grant global contact permission via email on their personal Gmail for product updates while forbidding phone calls, work email outreach, or promotional discount offers.',
      howToApply:
        'Configure Data Cloud’s Privacy Data Model and Preference Manager to evaluate all four consent levels before any agent triggers an outbound action.',
    },
  ],
  deepSections: [
    {
      id: 'af-ch18-sec1',
      sectionNumber: '18.1',
      title: 'The 300-Zettabyte Deluge & The Matrixed Governance Triad',
      subtitle: 'Why billion-parameter models amplify data chaos and require Gartner decision-rights accountability',
      coreMechanism:
        'IDC projects global data generation will approach 300 zettabytes by 2027—roughly fifteen times the estimated number of grains of sand on Earth. Generative AI models with billions of parameters demand massive data volume and extreme scenario variability to handle diverse dialects, edge cases, and continuous learning. Without formal governance, enterprises slide into operational chaos: undocumented pipelines built by departed engineers, unknown permission lineage, and opaque model logic.\n\nOperationalizing this framework requires answering four foundational questions—What data do we have? Where is it located? What data is sensitive? Who needs to manage it?—across a matrixed team of three core role groups.',
      keyTakeaways: [
        'Data governance is an ongoing cross-functional practice specifying decision rights and accountability, never a set-and-forget tool.',
        '85% of analytics and IT leaders rely on data governance primarily to certify baseline data quality, which directly bounds agent accuracy.',
      ],
      commonPitfalls: [
        'Assuming data chaos requires malicious intent, when in reality it stems from overworked teams and undocumented pipelines.',
        'Treating data sensitivity as a static tag rather than a moving target that shifts across geographies and legislation.',
      ],
    },
    {
      id: 'af-ch18-sec2',
      sectionNumber: '18.2',
      title: 'Pillar 1 (Access) & Pillar 2 (Accuracy) in Data Cloud',
      subtitle: 'Enforcing row-level permissions, Data Spaces partitions, and zero-copy DLO-to-DMO lineage',
      coreMechanism:
        'The Salesforce Office of Ethical and Humane Use structures technical governance around five pillars, beginning with tightening data access and improving data accuracy. Access governance ensures only authorized users and AI agents can view, edit, or consume records. Administrators centralize profiles and permission sets across Data Cloud down to the object, field, and individual row level, audited from a single pane in Security Center.\n\nAccuracy governance prevents stale or corrupted inputs from poisoning agent reasoning. Data Cloud’s lakehouse architecture ingests raw information into Data Lake Objects (DLOs) while preserving original records, and leverages zero-copy federation to query external systems without error-prone ETL duplication.',
      keyTakeaways: [
        'Data Spaces and row-level permission sets ensure an AI agent only retrieves records authorized for its specific brand, region, and user role.',
        'Zero-copy integration eliminates ETL duplication errors while DLO-to-DMO lineage tracking preserves verifiable data accuracy.',
      ],
      commonPitfalls: [
        'Granting an AI agent broad system-admin table access instead of scoping row- and field-level permission sets.',
        'Duplicating terabytes of external warehouse data via custom ETL scripts that silently drift out of sync with source systems.',
      ],
    },
    {
      id: 'af-ch18-sec3',
      sectionNumber: '18.3',
      title: 'Pillars 3, 4 & 5: Granular Privacy, Sandbox Masking & Zero Retention',
      subtitle: 'Four-tier consent management, Shield customer-managed keys, and right-to-be-forgotten automation',
      coreMechanism:
        'The remaining three pillars govern privacy, security, and retention. For Data Privacy (Pillar 3), Data Cloud’s Privacy Data Model and Preference Manager track consent across four granular tiers: Global consent, Channel consent, Contact Point consent, and Business Purpose consent.\n\nFinally, Data Retention (Pillar 5) enforces statutory data-subject rights under frameworks like Europe’s e-Privacy directive and GDPR—including the right-to-be-forgotten, restriction of processing, and data portability. Privacy Center automates retention schedules and purge auditing, the Einstein Trust Layer enforces explicit zero retention so external LLMs never store or train on customer prompts, and Hyperforce replicates encrypted data across distributed global data centers for disaster continuity.',
      keyTakeaways: [
        'Consent must be enforced across four distinct tiers: Global, Channel, Contact Point, and Business Purpose.',
        'Data Mask protects PII in test sandboxes while the Trust Layer enforces zero data retention across external LLM providers.',
      ],
      commonPitfalls: [
        'Testing new Agentforce workflows and zero-copy streams inside sandboxes populated with unmasked production PII.',
        'Failing to automate right-to-be-forgotten purge workflows across connected clouds when a customer revokes consent.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'The Five Pillars of Enterprise AI Data Governance in Salesforce Data Cloud',
      description: 'Mapping each governance pillar to its primary risk mitigated, core platform primitives, and responsible matrix role.',
      headers: ['Governance Pillar', 'Primary Failure Mitigated', 'Data Cloud & Platform Primitives', 'Lead Matrix Role'],
      rows: [
        ['1. Tighten Data Access', 'Unauthorized agent or user viewing sensitive rows', 'Permission Sets, Security Center, Data Spaces, Private Connect', 'Data Architect & CISO'],
        ['2. Improve Data Accuracy', 'Stale ETL copies and inconsistent schema metadata', 'Lakehouse DLO->DMO, Zero-Copy, Lineage, AI Tagging, Flow Alerts', 'Data Stewards & Scientists'],
        ['3. Implement Data Privacy', 'Contacting users on forbidden channels or purposes', 'Privacy Data Model, 4-Level Consent API, Preference Manager', 'Data Stewards & Legal'],
        ['4. Increase Data Security', 'Sandbox PII leaks, breaches, and key compromise', 'Sandbox Data Mask, Shield CMK Encryption, Hash/Salt, Event Monitoring', 'CISO & Security Architect'],
        ['5. Ensure Data Retention', 'GDPR right-to-be-forgotten violations & LLM leaks', 'Privacy Center Retention, Trust Layer Zero-Retention, Hyperforce', 'Executive Sponsor & Stewards'],
      ],
      verdictRule:
        'All five pillars must operate simultaneously: high accuracy without row-level access and four-tier consent creates compliance breaches.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'af-ch18-scen1',
      title: 'Eliminating Multi-Brand Data Bleed and Sandbox PII Exposure',
      roleAndContext: 'Chief Information Security Officer (CISO) and Lead Data Architect at a conglomerate operating three regional retail brands.',
      symptomOrFailure:
        'A service agent deployed for Brand A retrieves customer order rows belonging to Brand B.',
      naiveFixAndWhyItFails:
        'Writing custom prompt instructions telling the LLM "please ignore Brand B records and redact numbers" fails because unauthorized data still enters the context window and sandbox tables.',
      firstPrinciplesSolution:
        'Partition Brand A and Brand B into isolated Data Spaces with row-level permission sets audited in Security Center, and enable Data Mask for Data Cloud Sandboxes to anonymize all PII in non-production environments.',
      measurableOutcome:
        'Achieves 100% logical isolation between brand portfolios and eliminates plaintext PII exposure across all developer sandboxes.',
    },
    {
      id: 'af-ch18-scen2',
      title: 'Resolving Granular Consent Violations in Proactive Agent Outreach',
      roleAndContext: 'Data Steward and Compliance Lead at a European financial services firm subject to the EU AI Act and e-Privacy directive.',
      symptomOrFailure:
        'An outbound Agentforce assistant sends promotional discount SMS messages to customers’ work phones because their legacy CRM record had a single global `opt_in = true` boolean.',
      naiveFixAndWhyItFails:
        'Shutting down all proactive agent communications across the enterprise sacrifices customer engagement instead of fixing the underlying consent granularity.',
      firstPrinciplesSolution:
        'Implement Data Cloud’s four-level Privacy Data Model via Preference Manager—enforcing Global, Channel (email vs.',
      measurableOutcome:
        'Eliminates unauthorized channel and purpose outreach while maintaining full compliance with European right-to-be-forgotten and restriction-of-processing mandates.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch18-q1',
        scenarioPrompt:
          'A customer tells an enterprise: "You may contact me, but only by email, using my personal Gmail address rather than my work address, and only for product updates rather than discount offers." How does Data Cloud’s Privacy Data Model represent this requirement?',
        options: [
          {
            label: 'A',
            text: 'Through a single encrypted boolean field inside Shield Event Monitoring.',
            isCorrect: false,
            explanation: 'Event Monitoring tracks platform usage anomalies, not four-tier customer consent preferences.',
          },
          {
            label: 'B',
            text: 'Across four distinct levels of consent: Global consent, Channel consent, Contact Point consent, and Business Purpose consent.',
            isCorrect: true,
            explanation: 'Chapter 18 explicitly defines these exact four levels in the Privacy Data Model to handle granular customer preferences.',
          },
          {
            label: 'C',
            text: 'By creating four separate Data Spaces for every individual customer.',
            isCorrect: false,
            explanation: 'Data Spaces partition data by macro business entities like brands or regions, not per-user consent flags.',
          },
          {
            label: 'D',
            text: 'By purging the customer’s work email via the Trust Layer zero-retention policy.',
            isCorrect: false,
            explanation: 'Trust Layer zero retention governs external LLM prompt storage, not CRM contact-point preferences.',
          },
        ],
      },
      {
        id: 'af-ch18-q2',
        scenarioPrompt:
          'In the cross-functional data governance matrix described in Chapter 18, which role acts as the "ultimate sanity test" of the governance of whatever data is used by Agentforce?',
        options: [
          {
            label: 'A',
            text: 'External EU AI Act auditors.',
            isCorrect: false,
            explanation: 'External regulators enforce legal compliance, not internal analytical sanity testing.',
          },
          {
            label: 'B',
            text: 'Data scientists, who serve as the analytical users of data close enough to the business to act as monitors.',
            isCorrect: true,
            explanation: 'Chapter 18 notes that while data architects maintain the infrastructure, data scientists are the analytical users who act as the ultimate sanity test.',
          },
          {
            label: 'C',
            text: 'Frontline customer service associates.',
            isCorrect: false,
            explanation: 'Service reps are end users of agents, not one of the three core data governance matrix roles.',
          },
          {
            label: 'D',
            text: 'Hyperforce data center technicians.',
            isCorrect: false,
            explanation: 'Hyperforce provides distributed cloud infrastructure and replication, not business-level data sanity monitoring.',
          },
        ],
      },
      {
        id: 'af-ch18-q3',
        scenarioPrompt:
          'How does Data Cloud’s zero-copy framework directly support the "Improve Data Accuracy" pillar of governance?',
        options: [
          {
            label: 'A',
            text: 'By preventing AI agents from generating more than one response per customer conversation.',
            isCorrect: false,
            explanation: 'Zero-copy governs data access and integration, not conversational turn limits.',
          },
          {
            label: 'B',
            text: 'By accessing data in place without ETL duplication, which reduces copying errors while mapping Data Lake Objects (DLOs) to consistent Data Model Objects (DMOs).',
            isCorrect: true,
            explanation: 'Avoiding ETL reduces copying errors and version drift while maintaining consistent metadata and lineage across DLOs and DMOs.',
          },
          {
            label: 'C',
            text: 'By anonymizing PII inside developer sandboxes.',
            isCorrect: false,
            explanation: 'Sandbox anonymization is performed by Data Mask under the "Increase Data Security" pillar.',
          },
          {
            label: 'D',
            text: 'By replicating data across global data centers to protect against outages.',
            isCorrect: false,
            explanation: 'Global replication for continuity is handled by Hyperforce under the "Ensure Data Retention" pillar.',
          },
        ],
      },
      {
        id: 'af-ch18-q4',
        scenarioPrompt:
          'An enterprise needs to separate continuous data collection and govern access across three distinct corporate brands within a single Data Cloud instance. Which platform capability should the data architect configure?',
        options: [
          {
            label: 'A',
            text: 'Data Spaces, which create logical partitions among data based on business entities like brands or regions.',
            isCorrect: true,
            explanation: 'Data Spaces let admins partition data by brands or regions to govern which part of the business accesses what.',
          },
          {
            label: 'B',
            text: 'Preference Manager.',
            isCorrect: false,
            explanation: 'Preference Manager captures end-user privacy and consent preferences across clouds.',
          },
          {
            label: 'C',
            text: 'Data Mask for Data Cloud Sandboxes.',
            isCorrect: false,
            explanation: 'Data Mask anonymizes sensitive PII in sandbox testing environments.',
          },
          {
            label: 'D',
            text: 'Right-to-be-Forgotten automation.',
            isCorrect: false,
            explanation: 'Right-to-be-forgotten deletes customer records upon legal request under the Retention pillar.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'af-ch18-fc1',
        category: 'foundation',
        front: 'What are the four foundational questions around which all enterprise data governance revolves?',
        back: '1. What data do we have? 2. Where is our data located? 3. What data is sensitive? 4. Who needs to manage it?',
        mentalHook: 'Inventory, Location, Sensitivity, Ownership.',
      },
      {
        id: 'af-ch18-fc2',
        category: 'foundation',
        front: 'How does Gartner formally define data governance?',
        back: '"The specification of decision rights and an accountability framework to ensure appropriate behavior in the valuation, creation, consumption, and control of data and analytics."',
        mentalHook: 'Decision rights + Accountability across data and analytics.',
      },
      {
        id: 'af-ch18-fc3',
        category: 'architecture',
        front: 'What are the five technical pillars of effective data governance outlined for Agentforce and Data Cloud?',
        back: '1. Tighten Data Access, 2. Improve Data Accuracy, 3. Implement Data Privacy, 4. Increase Data Security, and 5. Ensure Data Retention.',
        mentalHook: 'Access, Accuracy, Privacy, Security, Retention (AAPSR).',
      },
      {
        id: 'af-ch18-fc4',
        category: 'data',
        front: 'What is the role of Private Connect inside the "Tighten Data Access" governance pillar?',
        back: 'Private Connect enables secure, compliant, federated, and bidirectional access to data between external cloud networks and Data Cloud.',
        mentalHook: 'Private Connect = Federated bidirectional cloud tunnel.',
      },
      {
        id: 'af-ch18-fc5',
        category: 'security',
        front: 'How does Data Mask for Data Cloud Sandboxes protect enterprise AI development?',
        back: 'It anonymizes sensitive PII inside sandboxes so teams can safely test data streams, zero-copy integrations, and data models without exposing real customer data.',
        mentalHook: 'Mask the sandbox before testing the stream.',
      },
      {
        id: 'af-ch18-fc6',
        category: 'security',
        front: 'How do the Einstein Trust Layer and Hyperforce work together under the "Ensure Data Retention" pillar?',
        back: 'The Trust Layer enforces explicit "zero retention" so external LLMs never store or train on customer data, while Hyperforce replicates data across global data centers for continuity and resilience.',
        mentalHook: 'Zero retention outside (Trust Layer); resilient replication inside (Hyperforce).',
      },
    ],
    feynmanChallenges: [
      {
        id: 'af-ch18-feyn1',
        conceptTitle: 'The Four-Question Governance Blueprint & Matrixed Accountability Roles',
        prompt:
          'Explain why generative AI requires more data governance than legacy software, and walk through the four questions and three role groups required to prevent enterprise data chaos.',
        rubricChecklist: [
          'Explains why billion-parameter GenAI models demand massive data volume and variability (amid IDC’s 300-zettabyte projection by 2027).',
          'Contrasts undocumented "Walter on GitHub" chaos with Gartner’s definition of governance (decision rights and accountability).',
          'Lists all four blueprint questions: What data do we have? Where is it located? What data is sensitive? Who needs to manage it?',
          'Defines the three matrixed role groups: Executive Sponsor (CIO/CISO), Data Stewards/Custodians, and Data Architects/Scientists (the analytical sanity test).',
        ],
        modelExplanation:
          'Generative AI models with billions of parameters require vast data volume and variability to handle nuanced scenarios and dialects, amplifying the 300-zettabyte global data deluge projected by 2027. Without governance, enterprises fall into chaos where no one knows where pipelines live or what permissions apply. Following Gartner’s definition of specifying decision rights and accountability, an enterprise builds a governance blueprint by answering four questions: What data do we have? Where is it located? What data is sensitive? Who needs to manage it? Because governance is cross-functional, it requires three matrixed role groups: an Executive Sponsor (CIO/CISO) to secure resources, Data Stewards/Custodians close to business units to enforce policy and quality, and Data Architects/Scientists to maintain infrastructure and serve as the ultimate sanity test for data used by Agentforce.',
      },
      {
        id: 'af-ch18-feyn2',
        conceptTitle: 'Operationalizing the Five Pillars of Data Governance in Data Cloud',
        prompt:
          'Walk an enterprise architect through the five technical pillars of governance in Salesforce Data Cloud, naming the specific platform capabilities that enforce each pillar.',
        rubricChecklist: [
          'Covers Pillar 1 (Access: object/field/row permission sets, Security Center, Data Spaces brand/region partitions, Private Connect) and Pillar 2 (Accuracy: Lakehouse DLO-to-DMO mapping, zero-copy avoiding ETL errors, lineage, real-time freshness alerts, AI metadata tagging).',
          'Explains Pillar 3 (Privacy: Privacy Data Model and Preference Manager enforcing 4 consent levels—Global, Channel, Contact Point, Business Purpose).',
          'Explains Pillar 4 (Security: Data Mask for Data Cloud Sandboxes, Shield encryption with customer-managed keys, hashing/salting, Event Monitoring).',
          'Explains Pillar 5 (Retention: Privacy Center right-to-be-forgotten/portability compliance, Trust Layer zero retention for LLMs, and Hyperforce distributed replication).',
        ],
        modelExplanation:
          'Salesforce operationalizes governance across five pillars. First, Tighten Data Access uses object/field/row permission sets audited in Security Center, Data Spaces to partition brands or regions, and Private Connect for federated cloud transfers. Second, Improve Data Accuracy refines Data Lake Objects into Data Model Objects via zero-copy (avoiding ETL copy errors), lineage tracking, real-time stream health alerts, and AI metadata tagging. Third, Implement Data Privacy uses the Privacy Data Model and Preference Manager to enforce consent at four levels: Global, Channel, Contact Point, and Business Purpose. Fourth, Increase Data Security uses Data Mask for Data Cloud Sandboxes to anonymize PII during testing, alongside Shield customer-managed keys, hashing/salting, and Event Monitoring. Fifth, Ensure Data Retention automates right-to-be-forgotten policies in Privacy Center, enforces explicit zero retention in the Trust Layer so LLMs never store data, and relies on Hyperforce for multi-region continuity.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch18-n1',
        label: 'Gartner Decision-Rights Governance',
        category: 'foundation',
        chapterNumber: 18,
        importance: 1,
        definition:
          'The specification of decision rights and an accountability framework governing the valuation, creation, consumption, and control of data and analytics.',
        formulaOrRule: '4 Questions: What data? Where located? What is sensitive? Who manages it?',
        whyItMatters:
          'Prevents undocumented pipeline chaos and certifies baseline data quality across the enterprise.',
      },
      {
        id: 'af-ch18-n2',
        label: 'Matrixed Governance Triad',
        category: 'architecture',
        chapterNumber: 18,
        importance: 2,
        definition:
          'The cross-functional combination of Executive Sponsors (CIO/CISO), business-unit Data Stewards/Custodians, and technical Data Architects/Scientists.',
        whyItMatters:
          'Connects board-level resource allocation with domain policy enforcement and analytical sanity testing.',
      },
      {
        id: 'af-ch18-n3',
        label: 'Data Spaces & Row-Level Access',
        category: 'security',
        chapterNumber: 18,
        importance: 1,
        definition:
          'Logical partitioning of Data Cloud records by brand or region combined with object-, field-, and row-level permission sets managed in Security Center.',
        whyItMatters:
          'Ensures AI agents and users only access authorized slices of enterprise data.',
      },
      {
        id: 'af-ch18-n4',
        label: 'Zero-Copy DLO-to-DMO Lineage',
        category: 'data',
        chapterNumber: 18,
        importance: 1,
        definition:
          'Lakehouse architecture that maps raw Data Lake Objects to consistent Data Model Objects via zero-copy federation without error-prone ETL duplication.',
        whyItMatters:
          'Preserves data accuracy, freshness, and verifiable source lineage for agent grounding.',
      },
      {
        id: 'af-ch18-n5',
        label: 'Four-Tier Consent Privacy Model',
        category: 'security',
        chapterNumber: 18,
        importance: 2,
        definition:
          'Granular consent tracking across Global, Channel, Contact Point, and Business Purpose levels managed via Preference Manager and Privacy Center APIs.',
        whyItMatters:
          'Prevents agents from violating customer communication preferences or privacy statutes.',
      },
      {
        id: 'af-ch18-n6',
        label: 'Sandbox Data Mask & Zero-Retention Trust',
        category: 'security',
        chapterNumber: 18,
        importance: 2,
        definition:
          'Anonymizing PII in Data Cloud test sandboxes while enforcing Shield CMK encryption, right-to-be-forgotten retention policies, and Trust Layer LLM zero retention.',
        whyItMatters:
          'Protects sensitive data across development, production inference, and regulatory deletion requests.',
      },
    ],
    edges: [
      {
        source: 'af-ch18-n2',
        target: 'af-ch18-n1',
        relationship: 'part_of',
        explanation:
          'The matrixed triad of Sponsors, Stewards, and Architects operationalizes Gartner’s decision-rights accountability framework.',
      },
      {
        source: 'af-ch18-n1',
        target: 'af-ch18-n3',
        relationship: 'prerequisite_for',
        explanation:
          'Answering the four inventory and sensitivity questions is required before configuring Data Spaces and row-level permission sets.',
      },
      {
        source: 'af-ch18-n4',
        target: 'af-ch18-n3',
        relationship: 'optimizes',
        explanation:
          'AI metadata tagging and standardized DMOs enable precise policy enforcement across Data Spaces.',
      },
      {
        source: 'af-ch18-n5',
        target: 'af-ch18-n6',
        relationship: 'part_of',
        explanation:
          'Four-level consent tracking and right-to-be-forgotten retention policies work together inside Salesforce Privacy Center.',
      },
      {
        source: 'af-ch18-n6',
        target: 'af-ch18-n4',
        relationship: 'mitigates',
        explanation:
          'Data Mask allows teams to test zero-copy streams and DMO mappings in sandboxes without leaking production PII.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 7,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 18 (IDC 300 ZB forecast, chaos vs. governance, Gartner definition, 4 blueprint questions, EU AI Act, 85% data quality report, 3 matrixed role groups, and all 5 H3 pillars: Tighten Data Access, Improve Data Accuracy, Implement Data Privacy, Increase Data Security, Ensure Data Retention). Zero figures in source chapter.',
  },
};

export const afCh19Mastery: ChapterMastery = {
  chapterNumber: 19,
  chapterId: 'ch19',
  title: 'How Do You Build a Business Case for Agentforce?',
  subtitle: 'Conversation-Unit ROI Economics, Geoffrey Moore’s Chasm Law, and Multi-KPI Value Mapping Across Service, Field, and Sales',
  readingTimeMinutes: 6,
  sourceWordCount: 1662,
  executiveThesis:
    'Quantifying the business value of enterprise AI agents requires pairing baseline conversation cost-deflection math with strategic competitive-differentiation metrics. While the Salesforce ROI Calculator establishes a floor by comparing human interaction costs ($8–$11) against a $2 Agentforce conversation benchmark at a 10%–15% initial deflection rate, early-market leaders justify adoption through Business Value Services (BVS) KPIs spanning service scalability, field first-time fix rates, and sales pipeline velocity.',
  paradigmShift: {
    oldWay:
      'Pitching early-stage AI purely on abstract macro-economic forecasts or complex multi-variable spreadsheets that stall in procurement skepticism.',
    newWay:
      'Anchoring the financial floor with simple conversation-unit deflection math ($2 per interaction) while expanding the business case into role-specific operational and revenue KPIs.',
    whyItChanged:
      'As Geoffrey Moore highlighted at the Agentforce kickoff, early-market adopters buy transformative technology for competitive advantage and capacity redeployment rather than cost-cutting alone.',
  },
  customDiagrams: [
    {
      id: 'af-ch19-diag1',
      title: 'The Conversation-Unit Cost-Deflection & Redeployment Engine',
      subtitle: 'How the $2 Agentforce interaction benchmark frees human capacity for complex, high-value accounts',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
  <rect width="800" height="420" fill="#0B0F19" rx="12" />
  <text x="32" y="36" fill="#F9FAFB" font-size="16" font-weight="700">CONVERSATION-UNIT ROI CALCULATOR &amp; HUMAN CAPACITY REDEPLOYMENT</text>
  <text x="32" y="56" fill="#9CA3AF" font-size="12">Modeling variable interaction savings and workforce reallocation (10–20 turns per conversation)</text>

  <!-- Left Box: Baseline Human Variable Cost -->
  <rect x="32" y="84" width="220" height="296" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5" />
  <text x="48" y="110" fill="#93C5FD" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">01. BASELINE INPUTS</text>

  <rect x="48" y="130" width="188" height="72" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="60" y="152" fill="#F9FAFB" font-size="11" font-weight="600">Monthly Volume (N)</text>
  <text x="60" y="170" fill="#9CA3AF" font-size="10">Contained interactions</text>
  <text x="60" y="186" fill="#9CA3AF" font-size="10">(10–20 back-and-forths)</text>

  <rect x="48" y="216" width="188" height="72" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="60" y="238" fill="#F9FAFB" font-size="11" font-weight="600">Human Cost / Call (C_h)</text>
  <text x="60" y="256" fill="#FDBA74" font-size="11" font-weight="700">$8.00 – $11.00 typical</text>
  <text x="60" y="274" fill="#9CA3AF" font-size="10">Varies by operating model</text>

  <rect x="48" y="302" width="188" height="60" rx="6" fill="#2563EB" fill-opacity="0.15" stroke="#2563EB" />
  <text x="60" y="324" fill="#93C5FD" font-size="11" font-weight="700">Total Baseline Cost</text>
  <text x="60" y="344" fill="#F9FAFB" font-size="11" font-family="JetBrains Mono, monospace">Cost = N × C_h</text>

  <!-- Connector -->
  <line x1="252" y1="232" x2="288" y2="232" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Center Box: Agentforce Deflection Wedge -->
  <rect x="288" y="84" width="224" height="296" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5" />
  <text x="304" y="110" fill="#FDBA74" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">02. AGENTFORCE WEDGE</text>

  <rect x="304" y="130" width="192" height="72" rx="6" fill="#1F2937" stroke="#EA580C" />
  <text x="316" y="152" fill="#F9FAFB" font-size="11" font-weight="600">Agent Cost / Conv (C_a)</text>
  <text x="316" y="172" fill="#6EE7B7" font-size="13" font-weight="700">$2.00 Benchmark</text>
  <text x="316" y="188" fill="#9CA3AF" font-size="10">Fixed per conversation</text>

  <rect x="304" y="216" width="192" height="72" rx="6" fill="#1F2937" stroke="#374151" />
  <text x="316" y="238" fill="#F9FAFB" font-size="11" font-weight="600">Deflection Share (d)</text>
  <text x="316" y="256" fill="#FDBA74" font-size="11" font-weight="700">10% – 15% Cold Start</text>
  <text x="316" y="274" fill="#9CA3AF" font-size="10">Ramps up as agent learns</text>

  <rect x="304" y="302" width="192" height="60" rx="6" fill="#EA580C" fill-opacity="0.15" stroke="#EA580C" />
  <text x="316" y="324" fill="#FDBA74" font-size="11" font-weight="700">Unit Margin Saved</text>
  <text x="316" y="344" fill="#F9FAFB" font-size="11" font-family="JetBrains Mono, monospace">Δc = C_h - $2.00</text>

  <!-- Connector -->
  <line x1="512" y1="232" x2="548" y2="232" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right Box: Dual Economic Output -->
  <rect x="548" y="84" width="220" height="296" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="564" y="110" fill="#6EE7B7" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">03. DUAL VALUE OUTPUT</text>

  <rect x="564" y="130" width="188" height="104" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" />
  <text x="576" y="154" fill="#6EE7B7" font-size="11" font-weight="700">Direct Variable Savings</text>
  <text x="576" y="176" fill="#F9FAFB" font-size="11" font-family="JetBrains Mono, monospace">N × d × (C_h - $2)</text>
  <text x="576" y="198" fill="#D1D5DB" font-size="10">Saves $6–$9 per deflected</text>
  <text x="576" y="214" fill="#D1D5DB" font-size="10">10–20 turn conversation</text>

  <rect x="564" y="250" width="188" height="112" rx="6" fill="#1F2937" stroke="#2563EB" />
  <text x="576" y="274" fill="#93C5FD" font-size="11" font-weight="700">Human Redeployment</text>
  <text x="576" y="294" fill="#E5E7EB" font-size="10">• 15% deflection = 10–15</text>
  <text x="576" y="310" fill="#E5E7EB" font-size="10">  reps freed for top accounts</text>
  <text x="576" y="328" fill="#E5E7EB" font-size="10">• Matches human NPS score</text>
  <text x="576" y="344" fill="#E5E7EB" font-size="10">• Drives competitive edge</text>
</svg>`,
      bierutCaption:
        'Follow the three-stage calculation from left to right: multiplying baseline interaction volume by the 10–15% deflection rate and the ($C_h - $2) spread yields both hard cost savings and redeployed human capacity.',
      annotations: [
        {
          step: '01',
          label: 'Contained Conversation Unit',
          explanation:
            'A "conversation" is defined as a contained 10–20 back-and-forth interaction whose human unit cost ($8–$11) is already tracked by service leaders.',
        },
        {
          step: '02',
          label: 'The $2 & 10%–15% Benchmarks',
          explanation:
            'Salesforce anchors the calculation with a $2 cost per agent conversation and a conservative 10%–15% initial resolution range.',
        },
        {
          step: '03',
          label: 'Capacity Redeployment Dividend',
          explanation:
            'As demonstrated by the personal productivity startup, handling 15% of volume frees 10–15 human agents to serve top-tier accounts and complex escalations.',
        },
      ],
    },
    {
      id: 'af-ch19-diag2',
      title: 'Geoffrey Moore’s Early-Market Value Progression & BVS KPI Architecture',
      subtitle: 'Expanding from mass-market cost savings to early-adopter competitive differentiation across three agent families',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
  <rect width="800" height="420" fill="#0B0F19" rx="12" />
  <text x="32" y="36" fill="#F9FAFB" font-size="16" font-weight="700">BUSINESS VALUE SERVICES (BVS): FROM COST FLOOR TO COMPETITIVE EDGE</text>
  <text x="32" y="56" fill="#9CA3AF" font-size="12">Mapping Geoffrey Moore's Crossing-the-Chasm insight to Service, Field Service, and Sales KPIs</text>

  <!-- Top Banner: Geoffrey Moore Strategic Law -->
  <rect x="32" y="74" width="736" height="58" rx="8" fill="#1F2937" stroke="#EA580C" stroke-width="1.5" />
  <text x="48" y="96" fill="#FDBA74" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">01. GEOFFREY MOORE'S EARLY-MARKET LAW (CROSSING THE CHASM)</text>
  <text x="48" y="116" fill="#F9FAFB" font-size="11">Mass market buys on cost savings; early adopters buy on competitive differentiation, speed, and revenue upside.</text>

  <!-- Connectors -->
  <line x1="150" y1="132" x2="150" y2="160" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4" />
  <line x1="400" y1="132" x2="400" y2="160" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4" />
  <line x1="650" y1="132" x2="650" y2="160" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Column 1: Service Agent -->
  <rect x="32" y="160" width="232" height="226" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5" />
  <text x="48" y="186" fill="#93C5FD" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">02A. SERVICE AGENT</text>
  <text x="48" y="210" fill="#6EE7B7" font-size="11" font-weight="600">Efficiency &amp; Scale KPIs:</text>
  <text x="48" y="228" fill="#D1D5DB" font-size="10">• Digitally resolved interactions</text>
  <text x="48" y="244" fill="#D1D5DB" font-size="10">• Operational scalability</text>
  <text x="48" y="260" fill="#D1D5DB" font-size="10">• Human care agent productivity</text>
  <text x="48" y="276" fill="#D1D5DB" font-size="10">• Cost to serve</text>
  <text x="48" y="304" fill="#FDBA74" font-size="11" font-weight="600">Experience &amp; Growth KPIs:</text>
  <text x="48" y="322" fill="#D1D5DB" font-size="10">• CSAT / Net Promoter Score</text>
  <text x="48" y="338" fill="#D1D5DB" font-size="10">• Service quality &amp; safety</text>
  <text x="48" y="354" fill="#D1D5DB" font-size="10">• Cross-sell and upsell lift</text>

  <!-- Column 2: Field Service Agent -->
  <rect x="284" y="160" width="232" height="226" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5" />
  <text x="300" y="186" fill="#6EE7B7" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">02B. FIELD SERVICE AGENT</text>
  <text x="300" y="210" fill="#6EE7B7" font-size="11" font-weight="600">Flavors &amp; Capabilities:</text>
  <text x="300" y="228" fill="#D1D5DB" font-size="10">• Appointment scheduling</text>
  <text x="300" y="244" fill="#D1D5DB" font-size="10">• Video/screenshot remote assist</text>
  <text x="300" y="260" fill="#D1D5DB" font-size="10">• Pre-work briefs &amp; post-summaries</text>
  <text x="300" y="288" fill="#FDBA74" font-size="11" font-weight="600">Operational Impact KPIs:</text>
  <text x="300" y="306" fill="#D1D5DB" font-size="10">• Scheduling/dispatch productivity</text>
  <text x="300" y="322" fill="#D1D5DB" font-size="10">• First-time fix rate</text>
  <text x="300" y="338" fill="#D1D5DB" font-size="10">• Labor utilization efficiency</text>
  <text x="300" y="354" fill="#D1D5DB" font-size="10">• Reduced truck rolls</text>

  <!-- Column 3: Sales Agent -->
  <rect x="536" y="160" width="232" height="226" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5" />
  <text x="552" y="186" fill="#FDBA74" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">02C. SALES AGENT</text>
  <text x="552" y="210" fill="#6EE7B7" font-size="11" font-weight="600">Efficiency &amp; Scale KPIs:</text>
  <text x="552" y="228" fill="#D1D5DB" font-size="10">• Digitally managed leads</text>
  <text x="552" y="244" fill="#D1D5DB" font-size="10">• Pipeline qualification</text>
  <text x="552" y="260" fill="#D1D5DB" font-size="10">• SDR onboarding time</text>
  <text x="552" y="276" fill="#D1D5DB" font-size="10">• Faster time to value</text>
  <text x="552" y="304" fill="#FDBA74" font-size="11" font-weight="600">Deal Team Growth KPIs:</text>
  <text x="552" y="322" fill="#D1D5DB" font-size="10">• Net new revenue</text>
  <text x="552" y="338" fill="#D1D5DB" font-size="10">• Deal win rate</text>
  <text x="552" y="354" fill="#D1D5DB" font-size="10">• Overall sales velocity</text>
</svg>`,
      bierutCaption:
        'Read from Geoffrey Moore’s strategic principle at the top into the three Business Value Services (BVS) columns below: each agent family pairs operational efficiency metrics with top-line competitive growth KPIs.',
      annotations: [
        {
          step: '01',
          label: 'Early-Market Differentiation Law',
          explanation:
            'Geoffrey Moore noted at the Agentforce kickoff that early adopters seek competitive edge rather than mere cost reduction.',
        },
        {
          step: '02',
          label: 'Service & Field Service KPIs',
          explanation:
            'Service and Field Service cases combine cost-to-serve and reduced truck rolls with first-time fix rate, NPS, and cross-sell/upsell lift.',
        },
        {
          step: '03',
          label: 'Sales Velocity & Win-Rate Upside',
          explanation:
            'Sales agents quantify impact through digitally managed leads, faster SDR onboarding, win rate, and accelerated sales velocity.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'af-ch19-mm1',
      name: 'The Parsimonious ROI Rule ("Wait a Second" Defense)',
      tagline: 'Every extra assumption in an ROI spreadsheet invites a skeptic in the back to derail the meeting',
      naiveIntuition:
        'A credible enterprise ROI model must incorporate dozens of granular sub-variables across every interaction sub-type before executives will trust it.',
      firstPrinciplesReality:
        'In executive value estimation, each additional assumption creates a surface area for a skeptic to interrupt with "Wait a second...";',
      howToApply:
        'Open the business case with four auditable numbers—monthly conversation volume, human cost per conversation, the $2 Agentforce cost, and a conservative 10%–15% deflection range—before layering domain KPIs.',
    },
    {
      id: 'af-ch19-mm2',
      name: 'Geoffrey Moore’s Chasm-Stage Value Inversion',
      tagline: 'Pragmatic majorities buy cost savings; early-market visionaries buy competitive differentiation',
      naiveIntuition:
        'Cost reduction is the universal primary driver that creates urgency for any enterprise software purchase.',
      firstPrinciplesReality:
        'Early in a technology lifecycle, ambitious adopters invest to capture asymmetric market share, expand coverage to untouched leads, and outpace rivals—treating cost savings as a baseline floor rather than the strategic prize.',
      howToApply:
        'Use the ROI Calculator to establish downside cost protection, then pivot the executive pitch to capacity redeployment (freeing 10–15 reps for complex accounts) and revenue velocity.',
    },
    {
      id: 'af-ch19-mm3',
      name: 'The Bounded-Range KPI Pruning Protocol',
      tagline: 'Estimate target KPIs as benchmarked ranges and ruthlessly exclude unmeasurable variables',
      naiveIntuition:
        'When building a comprehensive business value case, every potential soft benefit should be assigned a speculative dollar figure to maximize the projected ROI.',
      firstPrinciplesReality:
        'Including unprovable estimates destroys the credibility of the entire Business Value Services (BVS) model.',
      howToApply:
        'Convene domain experts to bound measurable KPIs (like first-time fix rate, truck rolls, or SDR onboarding time) within historical benchmark ranges, and explicitly exclude metrics that cannot be credibly estimated.',
    },
  ],
  deepSections: [
    {
      id: 'af-ch19-sec1',
      sectionNumber: '19.1',
      title: 'Field-Validated Agent Archetypes & The Redeployment Dividend',
      subtitle: 'How early adopters across tires, banking, pharma, and tech startups turned deflection into growth capacity',
      coreMechanism:
        'While McKinsey projected that generative AI would add over $3 trillion to the global economy—concentrated in customer operations, sales, marketing, and software engineering—early Agentforce deployments proved that enterprises discover unexpected horizontal adaptability once digital labor goes live. Reporting from the field, CRO Miguel Milano documented a tire manufacturer deploying both a sales development agent and an internal sales support desk, a Spanish bank ideating around AI flexibility, and a global pharmaceutical enterprise rolling out agents like product line extensions: one keeping customer-facing employees compliant with privacy policies, and another guiding patients through brand-website benefit programs.\n\nThe clearest empirical proof came from an organically grown personal-productivity tech startup handling thousands of weekly support engagements.',
      keyTakeaways: [
        'Handling 15% of weekly support volume at human-parity NPS lets a mid-market team redeploy 10–15 human specialists to high-complexity accounts.',
        'Enterprises routinely expand agents beyond external support into internal sales desks and real-time employee privacy-compliance coaches.',
      ],
      commonPitfalls: [
        'Viewing a 15% initial cold-start deflection rate as a ceiling rather than the baseline ramp for redeploying human talent.',
        'Restricting agent ideation to external customer chat while ignoring internal employee compliance and field-technician enablement.',
      ],
    },
    {
      id: 'af-ch19-sec2',
      sectionNumber: '19.2',
      title: 'The Conversation-Unit ROI Calculator & Its Structural Boundaries',
      subtitle: 'Modeling variable cost savings at $2 per interaction while accounting for complexity and function limits',
      coreMechanism:
        'To give prospects an immediate, transparent financial entry point, Salesforce launched a public ROI Calculator anchored on a single atomic unit: the "conversation," defined as a contained customer-agent interaction averaging 10 to 20 back-and-forth turns. The customer inputs two known operational metrics: monthly conversation volume ($N$) and average human cost per interaction, which typically ranges from $8 to $11 depending on industry and operating model.\n\nMultiplying baseline volume by the deflection share and the per-conversation cost spread yields total variable savings. While this four-variable elegance prevents executive meetings from stalling over contested assumptions, architects must recognize four structural boundaries: the calculator relies on testable assumptions, averages simple and complex interaction costs together, assumes proper agent implementation and maintenance, and fits transactional functions (service, sales) far better than non-conversational marketing.',
      formulas: [
        {
          name: 'Agentforce Conversation-Unit Variable Cost Savings',
          expression: '\\Delta C_{\\text{saved}} = N_{\\text{calls}} \\times d \\times (C_{\\text{human}} - C_{\\text{agent}})',
          intuition:
            'Total savings equal the number of conversations deflected to the AI agent multiplied by the unit cost difference between a human interaction ($8–$11) and an Agentforce conversation ($2).',
          variables: [
            {
              symbol: 'N_{\\text{calls}}',
              meaning: 'Total contained customer interactions per period (averaging 10–20 back-and-forth turns each)',
            },
            {
              symbol: 'd',
              meaning: 'Fraction of total conversations handled autonomously by the AI agent (benchmark cold start: 10%–15%)',
            },
            {
              symbol: 'C_{\\text{human}}',
              meaning: 'Average variable human labor cost per interaction (industry examples: $8 to $11)',
            },
            {
              symbol: 'C_{\\text{agent}}',
              meaning: 'Agentforce benchmark cost per conversation ($2.00)',
            },
          ],
          workedExample:
            'If an enterprise handles N = 100,000 monthly conversations at C_human = $10 ($1,000,000 baseline cost) and an Agentforce agent resolves d = 15% (15,000 conversations) at C_agent = $2, monthly net savings equal 100,000 × 0.15 × ($10 - $2) = $120,000 per month ($1.44M/year).',
        },
      ],
      keyTakeaways: [
        'Simple ROI formulas outperform complex models because every added assumption invites a "Wait a second..." objection from stakeholders.',
        'At $2 per 10–20 turn conversation versus $8–$11 for human handling, even a 10%–15% initial deflection rate generates immediate variable payback.',
      ],
      commonPitfalls: [
        'Applying conversation-unit cost math to brand marketing campaigns where value is not measured in discrete 10–20 turn support calls.',
        'Forgetting that simple ROI calculators average all interaction types and assume ongoing agent maintenance is properly funded.',
      ],
    },
    {
      id: 'af-ch19-sec3',
      sectionNumber: '19.3',
      title: 'Geoffrey Moore’s Chasm Insight & Business Value Services (BVS) Frameworks',
      subtitle: 'Mapping time-to-value and competitive KPIs across Service, Field Service, and Sales agents',
      coreMechanism:
        'During late-night reflections on day one of the Agentforce kickoff rally, *Crossing the Chasm* author Geoffrey Moore identified the primary strategic limitation of any cost-savings calculator: gains in an early market are driven by competitive differentiation, not cost cutting. While mass-market buyers demand efficiency, early-stage technology adopters invest to capture an asymmetric edge.\n\nEach archetype maps capabilities to efficiency and growth KPIs: Service Agents track digitally resolved interactions, scalability, care productivity, cost to serve, CSAT/NPS, service safety, and cross-sell/upsell; Field Service Agents track dispatch productivity, first-time fix rate, labor utilization, and truck rolls; and Sales Agents track digitally managed leads, pipeline qualification, SDR onboarding time, time to value, revenue, win rate, and sales velocity.',
      keyTakeaways: [
        'Early-market adopters buy AI agents for competitive differentiation and revenue velocity; cost savings merely de-risk the baseline investment.',
        'Business Value Services (BVS) frameworks evaluate both time-to-value and role-specific KPIs across Service, Field Service, and Sales.',
      ],
      commonPitfalls: [
        'Pitching only cost reduction to an ambitious early-adopter executive who is looking for market-share expansion and sales velocity.',
        'Fabricating speculative estimates for impossible-to-measure KPIs instead of excluding them and bounding known metrics with benchmarks.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Business Value Services (BVS) KPI Matrix Across Agentforce Archetypes',
      description: 'Comparing agent flavors, operational efficiency KPIs, and competitive growth/experience KPIs across the three core BVS frameworks.',
      headers: ['Agent Umbrella', 'Representative Agent Flavors', 'Efficiency & Scale KPIs', 'Growth, Experience & Velocity KPIs'],
      rows: [
        [
          'Service Agent',
          '24/7 customer care, order/returns resolution, patient benefit support',
          'Digitally resolved interactions, scalability, human rep productivity, cost to serve',
          'CSAT / NPS parity, service quality & safety, cross-sell and upsell revenue',
        ],
        [
          'Field Service Agent',
          'Appointment scheduling, video/screenshot remote assistant, pre/post-work tech briefs',
          'Digital scheduling & dispatch productivity, labor utilization, reduced truck rolls',
          'First-time fix rate, faster resolution safety, higher field technician capacity',
        ],
        [
          'Sales Agent',
          'Autonomous SDR lead outreach, pipeline qualification, internal sales support desk',
          'Digitally managed leads, pipeline qualification rate, reduced SDR onboarding time',
          'Faster time to value, net revenue lift, deal win rate, overall sales velocity',
        ],
      ],
      verdictRule:
        'Anchor every business case with the $2 conversation cost-deflection floor, then select the matching BVS archetype column to quantify competitive upside and time-to-value.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'af-ch19-scen1',
      title: 'Defending an Executive Business Case Against Spreadsheet Skepticism',
      roleAndContext: 'Enterprise Value Architect presenting an Agentforce service deployment to a skeptical CFO and VP of Customer Operations.',
      symptomOrFailure:
        'A 40-variable financial model projecting speculative brand-equity gains and multi-tier wage inflation stalls in committee when finance analysts challenge five unprovable assumptions.',
      naiveFixAndWhyItFails:
        'Adding even more granular sub-assumptions to justify the disputed cells gives skeptics additional targets to say "Wait a second..." and freeze approval.',
      firstPrinciplesSolution:
        'Strip the baseline calculation down to the 4-variable Salesforce ROI formula—known monthly conversation volume, tracked human cost per call ($9.50), the $2 Agentforce cost, and a conservative 10%–15% initial deflection band—and exclude unmeasurable soft metrics.',
      measurableOutcome:
        'Secures immediate CFO sign-off on the verifiable cost floor while establishing a clear 15% deflection milestone to redeploy 12 human reps to enterprise accounts.',
    },
    {
      id: 'af-ch19-scen2',
      title: 'Reframing a Stalled Cost-Cutting Pitch for an Early-Adopter Field & Sales Organization',
      roleAndContext: 'Strategic Account Director advising an ambitious industrial equipment manufacturer evaluating Field Service and Sales agents.',
      symptomOrFailure:
        'Presenting only contact-center cost savings fails to create urgency with the CEO, who views the company as an aggressive market-share expander rather than a cost-cutter.',
      naiveFixAndWhyItFails:
        'Artificially inflating the assumed call deflection rate from 15% to 60% in the cost calculator undermines technical credibility without addressing the CEO’s growth mandate.',
      firstPrinciplesSolution:
        'Apply Geoffrey Moore’s early-market differentiation principle using the BVS framework: deploy a Field Service remote video/screenshot assistant and pre-work brief agent to cut unnecessary truck rolls and boost first-time fix rates, paired with a Sales agent to qualify untouched leads and accelerate sales velocity.',
      measurableOutcome:
        'Aligns the investment directly with top-line win rate, reduced SDR onboarding time, and field first-time fix KPIs, compressing time-to-value.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch19-q1',
        scenarioPrompt:
          'An enterprise handles 50,000 customer service conversations per month at an average human cost of $10 per conversation. Using the Salesforce ROI Calculator method with a $2 Agentforce cost per conversation and a 15% deflection rate, what is the estimated monthly cost savings?',
        options: [
          {
            label: 'A',
            text: '$15,000 per month',
            isCorrect: false,
            explanation: 'This multiplies 7,500 deflected calls by the $2 agent cost instead of the ($10 - $2) = $8 net savings per call.',
          },
          {
            label: 'B',
            text: '$60,000 per month',
            isCorrect: true,
            explanation: 'Total baseline cost ($500,000) × 15% handled ($75,000 human cost equivalent, or 7,500 calls) × ($10 - $2)/$10 = 7,500 × $8 = $60,000 saved.',
          },
          {
            label: 'C',
            text: '$400,000 per month',
            isCorrect: false,
            explanation: '$400,000 assumes 100% deflection of all 50,000 calls rather than the 15% share.',
          },
          {
            label: 'D',
            text: '$75,000 per month',
            isCorrect: false,
            explanation: '$75,000 is the gross human cost of the 15% deflected calls before subtracting the $2 per-conversation Agentforce cost ($15,000).',
          },
        ],
      },
      {
        id: 'af-ch19-q2',
        scenarioPrompt:
          'What strategic limitation of the ROI Calculator did Geoffrey Moore (*Crossing the Chasm*) identify during his late-night reflections at the Agentforce kickoff meeting?',
        options: [
          {
            label: 'A',
            text: 'Early-market gains are all about competitive differentiation, so cost savings alone may not create a sense of urgency among ambitious early adopters.',
            isCorrect: true,
            explanation: 'Moore noted that while cost savings appeal to the mass market, early adopters buy new technology to gain a competitive edge.',
          },
          {
            label: 'B',
            text: 'Human customer service interactions actually cost less than $2 in most industries.',
            isCorrect: false,
            explanation: 'Chapter 19 notes that all observed human interaction estimates ($8–$11) were well over $2.',
          },
          {
            label: 'C',
            text: 'Conversations in the real world average more than 200 back-and-forths each.',
            isCorrect: false,
            explanation: 'Salesforce research showed real-world interactions average 10–20 back-and-forths each.',
          },
          {
            label: 'D',
            text: 'AI agents can only be used in marketing, never in customer service or sales.',
            isCorrect: false,
            explanation: 'The calculator works well for interaction-based functions like customer service and sales, and less well for marketing.',
          },
        ],
      },
      {
        id: 'af-ch19-q3',
        scenarioPrompt:
          'According to the Business Value Services (BVS) framework in Chapter 19, which set of KPIs specifically measures the business impact of a Field Service Agent?',
        options: [
          {
            label: 'A',
            text: 'Digitally managed leads, pipeline qualification, SDR onboarding time, and deal win rate.',
            isCorrect: false,
            explanation: 'Those are the KPIs for the Sales Agent framework.',
          },
          {
            label: 'B',
            text: 'Digital scheduling and dispatching productivity, first-time fix rate, labor utilization efficiency, and truck rolls.',
            isCorrect: true,
            explanation: 'Chapter 19 explicitly lists these four operational KPIs under the Field Service agent umbrella.',
          },
          {
            label: 'C',
            text: 'Data Lake Object lineage tags and Sandbox Data Mask coverage.',
            isCorrect: false,
            explanation: 'Those are Chapter 18 data governance primitives, not BVS Field Service KPIs.',
          },
          {
            label: 'D',
            text: 'Brand impression share and social media click-through rates.',
            isCorrect: false,
            explanation: 'Marketing impression metrics are not part of the Field Service BVS table.',
          },
        ],
      },
      {
        id: 'af-ch19-q4',
        scenarioPrompt:
          'Why does the author advise keeping ROI formulas simple rather than adding many granular variables and assumptions?',
        options: [
          {
            label: 'A',
            text: 'Because enterprise executives do not care about return on investment.',
            isCorrect: false,
            explanation: 'Executives care deeply about ROI and time-to-value, which is why BVS exists.',
          },
          {
            label: 'B',
            text: 'Because simple formulas are easier to explain and understand, whereas each additional variable or assumption introduces an opportunity for a "Wait a second..." objection from someone in the room.',
            isCorrect: true,
            explanation: 'Note 3 of Chapter 19 highlights that every extra assumption invites skepticism that can derail alignment.',
          },
          {
            label: 'C',
            text: 'Because companies do not track their total call volume or cost per call.',
            isCorrect: false,
            explanation: 'Chapter 19 states that both call volume and cost per call are closely tracked by most companies for customer service.',
          },
          {
            label: 'D',
            text: 'Because AI agents cannot handle more than 1% of conversations.',
            isCorrect: false,
            explanation: 'Internal benchmarks and the startup case study show agents starting at 10%–15% of conversations and ramping up.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'af-ch19-fc1',
        category: 'evaluation',
        front: 'How does Salesforce’s ROI Calculator define a single "conversation" unit, and what is its benchmark Agentforce cost?',
        back: 'A conversation is a single, contained interaction averaging 10–20 back-and-forths between a customer and an AI agent, benchmarked at $2 per conversation.',
        mentalHook: '1 Conversation = 10–20 turns = $2.',
      },
      {
        id: 'af-ch19-fc2',
        category: 'evaluation',
        front: 'What were the typical industry benchmarks for human cost per interaction and initial AI agent deflection percentage cited in Chapter 19?',
        back: 'Human interactions typically cost $8 to $11 each, while AI agents start by handling 10%–15% of calls out of the gate and ramp up from there.',
        mentalHook: '$8–$11 human vs. $2 agent at 10%–15% initial deflection.',
      },
      {
        id: 'af-ch19-fc3',
        category: 'optimization',
        front: 'What measurable outcome did the high-growth personal productivity startup achieve with its customer-service Agentforce deployment?',
        back: 'From a cold start, the agent achieved a Net Promoter Score comparable to live humans and handled 15% of conversations—freeing the equivalent of 10–15 human reps for complex or top-customer inquiries.',
        mentalHook: '15% volume at human NPS = 10–15 reps redeployed.',
      },
      {
        id: 'af-ch19-fc4',
        category: 'foundation',
        front: 'How did the global pharmaceutical company in Chapter 19 deploy AI agents across both internal and external workflows?',
        back: 'It rolled out agents like product line extensions: an internal agent helping customer-facing employees stay compliant with privacy policies, and external patient-support agents on brand websites for benefit and program info.',
        mentalHook: 'Pharma dual play: internal privacy compliance + external patient benefits.',
      },
      {
        id: 'af-ch19-fc5',
        category: 'architecture',
        front: 'What three specialized flavors of Field Service agent did the Business Value Services (BVS) team model?',
        back: '1. An appointment scheduling agent, 2. A virtual remote assistant working with videos and screenshots, and 3. A digital AI technician providing pre-work briefs and post-work summaries.',
        mentalHook: 'Schedule, See (video/screenshots), Summarize (pre/post briefs).',
      },
      {
        id: 'af-ch19-fc6',
        category: 'evaluation',
        front: 'How does the Business Value Services (BVS) team define "time-to-value," and how do they handle KPIs that are impossible to estimate?',
        back: 'Time-to-value is the number of months until the product has delivered more value than it cost; if a KPI is impossible to estimate within a reasonable benchmarked range, BVS explicitly excludes it.',
        mentalHook: 'Months to break even; bound what you know, exclude what you cannot measure.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'af-ch19-feyn1',
        conceptTitle: 'The Conversation-Unit ROI Formula & Its Four Structural Limitations',
        prompt:
          'Derive the Salesforce ROI Calculator formula for a prospect from first principles, plug in realistic benchmark numbers, and candidly explain the four limitations of the calculator.',
        rubricChecklist: [
          'Defines the atomic "conversation" unit (10–20 back-and-forths) and baseline variable cost (total calls × human cost per call, typically $8–$11).',
          'Applies the $2 Agentforce cost per interaction and 10%–15% initial deflection benchmark to compute net savings: Calls × % Handled × (Human Cost - $2).',
          'Explains why simplicity is a virtue (preventing "Wait a second..." objections for every extra assumption).',
          'Lists the four limitations: requires testable assumptions, averages all interactions regardless of complexity, assumes proper implementation/maintenance, and fits service/sales better than marketing.',
        ],
        modelExplanation:
          'The Salesforce ROI Calculator measures cost savings using the "conversation"—a contained interaction of 10 to 20 back-and-forth turns. First, multiply monthly conversation volume by the human cost per interaction (typically $8 to $11) to get baseline variable cost. Next, apply the Agentforce benchmark of $2 per conversation across the percentage of calls the agent handles (typically 10%–15% initially, as seen in the productivity startup that freed 10–15 reps). Net savings equal Total Calls × % Handled × (Human Cost - $2). Keeping the formula this simple prevents stakeholders from derailing the meeting with "Wait a second..." objections over extra assumptions. However, it has four clear limitations: it relies on assumptions that must be tested, it averages simple and complex interaction costs together, it assumes the agents are implemented and maintained properly, and it works for interaction-based functions like service and sales rather than marketing.',
      },
      {
        id: 'af-ch19-feyn2',
        conceptTitle: 'Geoffrey Moore’s Chasm Law & The BVS Multi-KPI Framework',
        prompt:
          'Explain why Geoffrey Moore argued that cost-savings calculators are insufficient for early-market AI buyers, and show how the Business Value Services (BVS) team maps competitive value across Service, Field Service, and Sales agents.',
        rubricChecklist: [
          'Articulates Geoffrey Moore’s kickoff insight from Crossing the Chasm: early-market gains are about competitive differentiation, whereas cost savings target the later mass market.',
          'Explains why BVS starts with cost savings as a floor and adds time-to-value (months to break even) plus growth/efficiency KPIs.',
          'Contrasts Service KPIs (digitally resolved interactions, scalability, productivity, cost to serve, CSAT/NPS, quality/safety, cross-sell/upsell) with Field Service KPIs (scheduling/dispatch productivity, first-time fix rate, labor utilization, truck rolls).',
          'Details Sales Agent KPIs (digitally managed leads, pipeline qualification, SDR onboarding time, time to value, revenue, win rate, sales velocity) and the rule to bound ranges with experts and exclude unmeasurable metrics.',
        ],
        modelExplanation:
          'At the Agentforce kickoff, Crossing the Chasm author Geoffrey Moore pointed out that early adopters of transformative technology are ambitious players seeking competitive differentiation and an edge, not mere cost-cutters. Because estimating revenue upside is harder than calculating labor savings, Salesforce’s Business Value Services (BVS) team uses cost savings as an entry point and layers on time-to-value (months until value exceeds cost) across three agent umbrellas. Service Agents drive digitally resolved interactions, cost to serve, CSAT/NPS, and cross-sell/upsell. Field Service Agents—spanning scheduling, video/screenshot remote assistance, and pre/post-work briefs—improve dispatch productivity, first-time fix rates, labor utilization, and truck rolls. Sales Agents accelerate digitally managed leads, pipeline qualification, SDR onboarding time, win rate, and sales velocity. Finally, experts put benchmarked ranges around achievable metrics and exclude any KPI that cannot be credibly estimated.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch19-n1',
        label: 'Conversation-Unit Cost-Deflection Formula',
        category: 'evaluation',
        chapterNumber: 19,
        importance: 1,
        definition:
          'The four-variable ROI model comparing baseline human interaction cost ($8–$11) against the $2 Agentforce conversation benchmark across a 10%–15% initial deflection share.',
        formulaOrRule: 'Savings = N_calls × d × (C_human - $2)',
        whyItMatters:
          'Provides an auditable, parsimonious financial floor that avoids spreadsheet paralysis.',
      },
      {
        id: 'af-ch19-n2',
        label: 'Human Capacity Redeployment Dividend',
        category: 'optimization',
        chapterNumber: 19,
        importance: 1,
        definition:
          'Reallocating human specialists freed by a 15% agent deflection rate (e.g., 10–15 reps) toward complex inquiries and top-tier accounts once agent NPS matches human parity.',
        whyItMatters:
          'Converts operational deflection into higher service quality and account expansion.',
      },
      {
        id: 'af-ch19-n3',
        label: 'Geoffrey Moore’s Early-Market Differentiation Law',
        category: 'foundation',
        chapterNumber: 19,
        importance: 1,
        definition:
          'The Crossing the Chasm principle that early-market technology buyers are motivated by competitive differentiation and speed rather than mass-market cost cutting.',
        whyItMatters:
          'Explains why executive business cases must progress beyond cost deflection to revenue and velocity KPIs.',
      },
      {
        id: 'af-ch19-n4',
        label: 'Business Value Services (BVS) Time-to-Value',
        category: 'evaluation',
        chapterNumber: 19,
        importance: 2,
        definition:
          'Structured estimation of how many months an agent deployment takes to deliver more economic value than it cost across Service, Field Service, and Sales.',
        whyItMatters:
          'Gives enterprise buyers a calibrated payback horizon grounded in industry benchmarks.',
      },
      {
        id: 'af-ch19-n5',
        label: 'Field Service Multimodal Agent Flavors',
        category: 'architecture',
        chapterNumber: 19,
        importance: 2,
        definition:
          'Umbrella of field agents covering appointment scheduling, virtual remote assistance via videos/screenshots, and pre-work/post-work technician summaries.',
        whyItMatters:
          'Directly improves first-time fix rates, dispatch productivity, labor utilization, and truck-roll reduction.',
      },
      {
        id: 'af-ch19-n6',
        label: 'Sales Velocity & Pipeline Qualification KPIs',
        category: 'evaluation',
        chapterNumber: 19,
        importance: 3,
        definition:
          'Sales-agent impact metrics spanning digitally managed leads, pipeline qualification, SDR onboarding time, deal win rate, and sales velocity.',
        whyItMatters:
          'Quantifies top-line revenue upside for early adopters building agent-led sales motions.',
      },
    ],
    edges: [
      {
        source: 'af-ch19-n1',
        target: 'af-ch19-n2',
        relationship: 'prerequisite_for',
        explanation:
          'Deflecting 15% of conversations at $2 per interaction frees the 10–15 human equivalents for up-market redeployment.',
      },
      {
        source: 'af-ch19-n3',
        target: 'af-ch19-n1',
        relationship: 'trades_off_with',
        explanation:
          'Pure cost-cutting calculators appeal to late mass markets but lack the competitive-differentiation urgency required by early adopters.',
      },
      {
        source: 'af-ch19-n3',
        target: 'af-ch19-n4',
        relationship: 'prerequisite_for',
        explanation:
          'Moore’s differentiation insight motivates the broader BVS framework that pairs cost floors with growth KPIs and time-to-value.',
      },
      {
        source: 'af-ch19-n5',
        target: 'af-ch19-n4',
        relationship: 'part_of',
        explanation:
          'Field Service KPIs (first-time fix rate, truck rolls, labor utilization) form one of the three core BVS value pillars.',
      },
      {
        source: 'af-ch19-n6',
        target: 'af-ch19-n4',
        relationship: 'part_of',
        explanation:
          'Sales velocity, win rate, and SDR onboarding metrics quantify the top-line revenue arm of the BVS business case.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 19 (Miguel Milano field stories: tire company, Spanish bank, pharma compliance/patient support, productivity startup 15% deflection / 10–15 humans redeployed / NPS parity; McKinsey $3T study; ROI Calculator 10–20 turn conversation, $8–$11 human vs. $2 agent, 4 limitations, Note 3 simplicity rule; Geoffrey Moore Crossing the Chasm reflection; BVS time-to-value and Service, Field Service, and Sales KPI tables). Zero figures in source chapter.',
  },
};
