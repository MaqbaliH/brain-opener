import { ChapterMastery } from '../../../types/book';

export const mwCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Part II: Working to Solve Business Problems (Selling, Teams, Research, Interviewing & Brainstorming)',
  subtitle: 'Attracting clients via intellectual mousetraps, defeating the Mushroom Method, deploying Columbo interviews, and running Fact-Pack brainstorms.',
  readingTimeMinutes: 9,
  sourceWordCount: 13564,
  executiveThesis:
    'Executing a high-stakes problem-solving engagement requires synchronizing six operational disciplines: indirect authority marketing and realistic project scoping (Chapter 4), balanced team chemistry and anti-Mushroom morale management (Chapter 5), meritocratic upward hierarchy management (Chapter 6), leveraged research starting with annual reports and outliers (Chapter 7), structured two-person interviewing using the Columbo tactic without leaving subjects naked (Chapter 8), and fact-pack-driven brainstorming that checks ego and hierarchy at the door (Chapter 9).',
  paradigmShift: {
    oldWay:
      'Cold-calling prospects, overpromising boil-the-ocean miracles, managing teams via the "Mushroom Method," grilling interviewees like police suspects, and running unprepared bull-session brainstorms.',
    newWay:
      'Building mousetrap intellectual authority to attract clients, scoping studies into bite-size chunks, explaining the value of every task, interviewing in empathetic pairs with the Columbo tactic, and brainstorming from pre-distributed fact packs.',
    whyItChanged:
      'Organizational knowledge lives inside human beings—team members, internal researchers, and anxious client interviewees—who only yield their best insights when guided by structured preparation and psychological safety.',
  },
  mentalModels: [
    {
      id: 'mw-ch03-mm1',
      name: 'Anti-Mushroom Morale & Upward Meritocracy',
      tagline: 'Never keep your team in the dark covered in manure; explain the "why" and challenge upward when facts demand it.',
      naiveIntuition:
        'Managers assume high-paid associates will happily grind through midnight spreadsheet changes without knowing how the task fits into the study, while juniors must never contradict a senior director.',
      firstPrinciplesReality:
        'The "Mushroom Method" (cover them in manure and keep them in the dark) destroys team morale and causes futile work; great leaders like Vik steer a steady course, explain the value of every piece of work, and respect family life ("the best team dinners were at lunch"), while a true meritocracy allows an associate like Hamish McDermott to fax 16 factual corrections on a book chapter directly to Director Lowell Bryan.',
      howToApply:
        'Brief every team member on how their module advances the overarching hypothesis, check team temperature regularly, make your boss look good in external meetings, and assert factual dissent upward when necessary.',
    },
    {
      id: 'mw-ch03-mm2',
      name: 'The Empathetic Columbo Interview Protocol',
      tagline: 'Write a 3-question guide, interview in pairs, listen with open-ended prompts, and save your sharpest question for the doorway.',
      naiveIntuition:
        'Walking solo into a manager’s office and aggressively grilling them with yes/no questions is the fastest way to extract operational truth.',
      firstPrinciplesReality:
        'Many interviewees are terrified that consultants will get them fired—like the 20-year pharmaceutical manager whose hands shook so badly he couldn’t pour his Mr. Coffee; aggressive Navy-style interrogation causes subjects to clam up, whereas interviewing in pairs, paraphrasing, using strategic silence, respecting anxiety ("don’t leave the interviewee naked"), and asking a relaxed "Columbo question" at the door unlocks guarded data.',
      howToApply:
        'Have the interviewee’s boss schedule the meeting, go in pairs with a 3-goal interview guide, ask open-ended questions, paraphrase answers back with structure, use the doorway Columbo tactic for sensitive data, and always send a custom thank-you note.',
    },
    {
      id: 'mw-ch03-mm3',
      name: 'Fact-Pack "White Room" Brainstorming',
      tagline: 'Circulate fact packs before entering the room, check hierarchy at the door, and be prepared to kill your babies.',
      naiveIntuition:
        'Brainstorming means walking into a conference room unprepared to toss around ungrounded opinions—or sitting silently while the senior manager works alone at the whiteboard.',
      firstPrinciplesReality:
        'Productive brainstorming requires hard-nosed advance preparation: associates compile and circulate "fact packs" so everyone shares the same empirical baseline before entering the "white room" with a clean slate (tabula rasa) where hierarchy is suspended, no idea is zinged, and every participant is ready to "kill their babies" (abandon their pet hypothesis) within a crisp two-hour window.',
      howToApply:
        'Distribute fact packs 24 hours ahead, cap sessions at two hours, use Post-it exercises, flipchart stations, and "bellyaches up front" to vent hostility, and transcribe every flipchart before turning off the lights.',
    },
  ],
  customDiagrams: [
    {
      id: 'mw-ch03-svg-1',
      title: 'The Strategic Interviewing Funnel: Preparation, Active Listening & Columbo Extraction',
      subtitle: 'Converting anxious or defensive stakeholders into collaborative informants across three interview phases.',
      bierutCaption:
        'Structured two-person interviews convert anxious or defensive stakeholders into collaborative informants without triggering interrogation resistance.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="85" x2="800" y2="85" />
    <line x1="0" y1="210" x2="800" y2="210" />
    <line x1="0" y1="335" x2="800" y2="335" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 3.1 — THE MCKINSEY INTERVIEW ARCHITECTURE (CHAPTER 8)</text>
  <rect x="25" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="88" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">1. PREPARE &amp; AUTHORIZE</text>
  <rect x="42" y="106" width="196" height="72" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="54" y="126" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">3-Goal Interview Guide</text>
  <text x="54" y="144" fill="#94a3b8" font-family="monospace" font-size="9.5">• Narrow to 2–3 core questions</text>
  <text x="54" y="160" fill="#94a3b8" font-family="monospace" font-size="9.5">• Know interviewee’s agenda</text>
  <rect x="42" y="192" width="196" height="72" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="54" y="212" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Boss Scheduling &amp; Pairs</text>
  <text x="54" y="230" fill="#94a3b8" font-family="monospace" font-size="9.5">• Boss sets up meeting</text>
  <text x="54" y="246" fill="#94a3b8" font-family="monospace" font-size="9.5">• Tag-team: Poser + Note-taker</text>
  <rect x="42" y="278" width="196" height="82" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="54" y="298" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">Allay Anxiety ("Not Naked")</text>
  <text x="54" y="316" fill="#cbd5e1" font-family="monospace" font-size="9">Remember the shaking coffee</text>
  <text x="54" y="330" fill="#cbd5e1" font-family="monospace" font-size="9">pot: offer quid pro quo info</text>
  <text x="54" y="344" fill="#cbd5e1" font-family="monospace" font-size="9">&amp; indirect warm-up.</text>
  <path d="M 255 220 L 285 220" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="285" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="302" y="88" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">2. LISTEN, GUIDE &amp; PARAPHRASE</text>
  <rect x="302" y="106" width="196" height="78" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="314" y="126" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Open-Ended + Aizuchi</text>
  <text x="314" y="144" fill="#94a3b8" font-family="monospace" font-size="9.5">Ask "What is busiest season?"</text>
  <text x="314" y="160" fill="#94a3b8" font-family="monospace" font-size="9.5">(reveals Easter vs Summer/Winter)</text>
  <text x="314" y="174" fill="#10b981" font-family="monospace" font-size="9">Use "uh-huh" + lean forward</text>
  <rect x="302" y="198" width="196" height="72" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="314" y="218" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Paraphrase + Silence</text>
  <text x="314" y="236" fill="#94a3b8" font-family="monospace" font-size="9.5">• Repeat back with structure</text>
  <text x="314" y="252" fill="#94a3b8" font-family="monospace" font-size="9.5">• Let silence hang to break scripts</text>
  <rect x="302" y="284" width="196" height="76" rx="6" fill="#311024" stroke="#f43f5e" />
  <text x="314" y="304" fill="#fda4af" font-family="sans-serif" font-size="10.5" font-weight="bold">Handle Hostiles &amp; Sandbaggers</text>
  <text x="314" y="322" fill="#cbd5e1" font-family="monospace" font-size="9">• Don’t back down on falsehoods</text>
  <text x="314" y="336" fill="#cbd5e1" font-family="monospace" font-size="9">• Bypass or escalate Sandbaggers</text>
  <path d="M 515 220 L 545 220" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="545" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="562" y="88" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">3. COLUMBO &amp; THANK-YOU</text>
  <rect x="562" y="106" width="196" height="118" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="574" y="128" fill="#f59e0b" font-family="sans-serif" font-size="10.5" font-weight="bold">The Columbo Tactic</text>
  <text x="574" y="146" fill="#e2e8f0" font-family="monospace" font-size="9.5">At the threshold (or 1–2 days</text>
  <text x="574" y="160" fill="#e2e8f0" font-family="monospace" font-size="9.5">later in "Super-Columbo"):</text>
  <text x="574" y="180" fill="#38bdf8" font-family="monospace" font-size="9.5">"Excuse me, there’s one</text>
  <text x="574" y="194" fill="#38bdf8" font-family="monospace" font-size="9.5">thing I forgot to ask..."</text>
  <text x="574" y="212" fill="#94a3b8" font-family="monospace" font-size="9">Defenses drop once interview ends</text>
  <rect x="562" y="240" width="196" height="120" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="574" y="262" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">Written Thank-You Note</text>
  <text x="574" y="280" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Custom letter on letterhead</text>
  <text x="574" y="296" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Corroborate pair notes</text>
  <text x="574" y="316" fill="#10b981" font-family="monospace" font-size="9">Ag executive framed his</text>
  <text x="574" y="330" fill="#10b981" font-family="monospace" font-size="9">McKinsey thank-you note</text>
  <text x="574" y="344" fill="#10b981" font-family="monospace" font-size="9">on his wall for 15 years!</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Open-Ended vs. Binary Prompts',
          explanation:
            'Asking a store manager "Is your busiest season summer or winter?" hides your ignorance when the answer is actually spring (Easter); asking "What is your busiest season?" unlocks rich detail.',
        },
        {
          step: '02',
          label: 'The Shaking Coffee Pot Warning',
          explanation:
            'Because a 20-year manager may be terrified of losing his job, interviewers must avoid military-style grilling and never leave the interviewee feeling naked.',
        },
        {
          step: '03',
          label: 'Columbo & Super-Columbo',
          explanation:
            'Turning around at the doorway—or dropping by casually two days later—captures the critical data point once the formal tension of the interview has evaporated.',
        },
      ],
    },
    {
      id: 'mw-ch03-svg-2',
      title: 'The "White Room" Brainstorming Engine: Fact Packs, Tabula Rasa & Exercises',
      subtitle: 'Combining pre-circulated Fact Packs with two-hour hierarchy-free ideation and Bellyaches Up Front.',
      bierutCaption:
        'Effective brainstorming pairs pre-circulated empirical Fact Packs with a hierarchy-free two-hour session using Post-its, category flipcharts, and upfront bellyache venting.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="85" x2="800" y2="85" />
    <line x1="0" y1="220" x2="800" y2="220" />
    <line x1="0" y1="345" x2="800" y2="345" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 3.2 — MCKINSEY BRAINSTORMING PROTOCOL (CHAPTER 9)</text>
  <rect x="25" y="60" width="225" height="325" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="88" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">PRE-SESSION: FACT PACKS</text>
  <rect x="40" y="106" width="195" height="115" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="52" y="128" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Research Synthesis</text>
  <text x="52" y="146" fill="#94a3b8" font-family="monospace" font-size="9.5">• Annual Report &amp; Chairman</text>
  <text x="52" y="162" fill="#94a3b8" font-family="monospace" font-size="9.5">• PDNet &amp; Info Specialists</text>
  <text x="52" y="178" fill="#94a3b8" font-family="monospace" font-size="9.5">• Outliers &amp; Best Practices</text>
  <text x="52" y="198" fill="#38bdf8" font-family="monospace" font-size="9.5">Distribute Fact Packs to all</text>
  <rect x="40" y="238" width="195" height="125" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="52" y="260" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">Provisional Hypotheses</text>
  <text x="52" y="278" fill="#cbd5e1" font-family="monospace" font-size="9.5">Come with a set of plausible</text>
  <text x="52" y="294" fill="#cbd5e1" font-family="monospace" font-size="9.5">hypotheses to test—never say</text>
  <text x="52" y="310" fill="#fda4af" font-family="monospace" font-size="9.5">"This is the answer" or</text>
  <text x="52" y="326" fill="#fda4af" font-family="monospace" font-size="9.5">"Watch me think alone."</text>
  <path d="M 250 222 L 280 222" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="280" y="60" width="240" height="325" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="295" y="88" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">IN THE WHITE ROOM (2 HRS)</text>
  <rect x="295" y="106" width="210" height="62" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="307" y="126" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">1. Tabula Rasa &amp; Zero Hierarchy</text>
  <text x="307" y="144" fill="#cbd5e1" font-family="monospace" font-size="9.5">Junior analyst = Senior Director</text>
  <rect x="295" y="178" width="210" height="62" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="307" y="198" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">2. No Bad Ideas / Dumb Questions</text>
  <text x="307" y="216" fill="#cbd5e1" font-family="monospace" font-size="9.5">"How much money is in the world?"</text>
  <rect x="295" y="250" width="210" height="58" rx="6" fill="#0f172a" stroke="#f43f5e" />
  <text x="307" y="270" fill="#fda4af" font-family="sans-serif" font-size="10.5" font-weight="bold">3. Kill Your Babies</text>
  <text x="307" y="288" fill="#cbd5e1" font-family="monospace" font-size="9.5">Drop ego; let team knock IH around</text>
  <rect x="295" y="318" width="210" height="52" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="307" y="338" fill="#f59e0b" font-family="sans-serif" font-size="10.5" font-weight="bold">4. 2-Hour Cap + Paper Record</text>
  <text x="307" y="355" fill="#cbd5e1" font-family="monospace" font-size="9.5">Transcribe flipcharts before leaving</text>
  <path d="M 520 222 L 550 222" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="550" y="60" width="225" height="325" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="565" y="88" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">3 CATALYST EXERCISES</text>
  <rect x="565" y="106" width="195" height="78" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="577" y="126" fill="#f59e0b" font-family="sans-serif" font-size="10.5" font-weight="bold">The Post-it Exercise</text>
  <text x="577" y="144" fill="#cbd5e1" font-family="monospace" font-size="9.5">Write 1 idea per sticky note;</text>
  <text x="577" y="158" fill="#cbd5e1" font-family="monospace" font-size="9.5">leader reads aloud for speed</text>
  <text x="577" y="172" fill="#cbd5e1" font-family="monospace" font-size="9.5">without early bog-down.</text>
  <rect x="565" y="196" width="195" height="78" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="577" y="216" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">The Flipchart Exercise</text>
  <text x="577" y="234" fill="#cbd5e1" font-family="monospace" font-size="9.5">Label room stations by issue;</text>
  <text x="577" y="248" fill="#cbd5e1" font-family="monospace" font-size="9.5">give each member a distinct</text>
  <text x="577" y="262" fill="#cbd5e1" font-family="monospace" font-size="9.5">colored marker to post ideas.</text>
  <rect x="565" y="286" width="195" height="82" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="577" y="306" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">Bellyaches Up Front</text>
  <text x="577" y="324" fill="#cbd5e1" font-family="monospace" font-size="9.5">Hostile clients vent gripes</text>
  <text x="577" y="338" fill="#cbd5e1" font-family="monospace" font-size="9.5">first, then build positive</text>
  <text x="577" y="352" fill="#cbd5e1" font-family="monospace" font-size="9.5">unit implementation plans.</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Fact Packs Precede Ideation',
          explanation:
            'Brainstorming never happens in an empirical vacuum; circulating Fact Packs beforehand ensures the entire team manipulates the same Rubik’s Cube of facts.',
        },
        {
          step: '02',
          label: 'Killing Your Babies & Naive Prompts',
          explanation:
            'Asking "How much money is there in the world?" unlocked a 45-minute breakthrough in international asset management, while screenwriter-style detachment prevents ego battles.',
        },
        {
          step: '03',
          label: 'Bellyaches Up Front & Shoulder Touch',
          explanation:
            'Allowing hostile stakeholders to vent every complaint first—and having the moderator stand behind a muttering rabble-rouser—converts skeptics into co-designers.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'mw-ch03-sec-1',
      sectionNumber: '3.1',
      title: 'Selling Without Selling, Scoping Studies & Anti-Mushroom Team Morale',
      subtitle: 'Building Intellectual Mousetraps, Rejecting the Mushroom Method, and Managing Hierarchy',
      coreMechanism:
        'McKinsey never makes cold calls; instead, it builds intellectual mousetraps (*In Search of Excellence* by Peters and Waterman, Lowell Bryan’s banking books, Kenichi Ohmae as Japan’s "God of Management," *The McKinsey Quarterly*, charity boards, and alumni networks) so clients come to the door. When structuring an engagement, the Engagement Director obeys "Be careful what you promise," scoping what a 4-to-6 person team can tangibly deliver in 3 to 6 months, while associates break boss assignments into bite-size chunks. Leaders interview prospective team members in person to balance intellect with people skills, respect family life ("the best team dinners were at lunch"), and reject the "Mushroom Method" (covering associates with manure and keeping them in the dark) by steering a steady course and explaining the value of every task. Upward in the hierarchy, associates make their boss look good while exercising meritocratic equality—just as first-year associate Hamish McDermott faxed 16 logical flaws on Chapter 2 directly to Director Lowell Bryan.',
      keyTakeaways: [
        'Attract clients through published intellectual authority and scope every engagement into achievable 3-to-6 month chunks for a 4-to-6 person team.',
        'Defeat the Mushroom Method by explaining how every analytical task advances the big picture and respecting personal recovery time.',
        'Make your boss look good in external settings while asserting meritocratic dissent when empirical facts or logic are at stake.',
      ],
      commonPitfalls: [
        'Promising an anxious CEO a boil-the-ocean miracle in three weeks or forcing an exhausted team into mandatory evening circus outings.',
        'Keeping junior analysts in the dark about why they are running spreadsheet tables ("the Mushroom Method").',
        'Challenging a senior executive publicly without institutional backing or over trivial stylistic preferences.',
      ],
    },
    {
      id: 'mw-ch03-sec-2',
      sectionNumber: '3.2',
      title: 'High-Leverage Research & The Seven Rules of Strategic Interviewing',
      subtitle: 'From PDNet and Annual Report Outliers to the Columbo Doorway Tactic',
      coreMechanism:
        'Effective research starts by searching McKinsey’s Practice Development Network (PDNet) and polling information specialists (as Ethan did on a 3-week Daimler-Benz offshore subsidiary control study), followed by three specific tips: start with the Annual Report (especially the Chairman’s Remarks), hunt for statistical outliers, and look for best practices. When interviewing stakeholders, consultants prepare a 3-goal guide and follow Seven Rules: (1) have the interviewee’s boss schedule the meeting, (2) interview in pairs, (3) listen rather than lead via open-ended questions ("What is your busiest season?" reveals Easter rather than guessing "Summer or winter?"), the Japanese *aizuchi* "McKinsey grunt" ("uh-huh"), and hanging silence, (4) paraphrase back with structure, (5) use an indirect approach that respects anxiety ("don’t leave the interviewee naked," remembering the pharma manager whose shaking hands couldn’t pour his Mr. Coffee), (6) don’t ask for too much, and (7) deploy the "Columbo" (or 2-day-later "Super-Columbo") doorway question when defenses drop, followed by a custom written thank-you note.',
      keyTakeaways: [
        'Begin research with internal repositories (PDNet), the Chairman’s Remarks in the Annual Report, and spreadsheet outliers.',
        'Interview in pairs with a 3-goal guide, using open-ended questions, structured paraphrasing, hanging silence, and the doorway Columbo tactic.',
        'Respect interviewee anxiety ("don’t leave them naked"), stand firm against false accusations, bypass Sandbaggers, and always mail a custom thank-you note.',
      ],
      commonPitfalls: [
        'Asking binary multiple-choice questions that highlight your ignorance or grilling an anxious manager like a military suspect.',
        'Backing down when a hostile manager makes a false accusation, or letting a "Sandbagger" filibuster 30 minutes with her life story.',
        'Forgetting to send a personalized thank-you note (which one agriculture executive framed on his wall for 15 years).',
      ],
    },
    {
      id: 'mw-ch03-sec-3',
      sectionNumber: '3.3',
      title: 'Brainstorming in a White Room: Fact Packs, Tabula Rasa, and Catalyst Exercises',
      subtitle: 'Turning Empirical Fact Packs into Breakthrough Hypotheses in Two Hours',
      coreMechanism:
        'Brainstorming is what clients truly buy: an outsider’s mindset free from "the company way." Yet effective brainstorming never happens in an empirical vacuum; associates first compile and circulate "fact packs" so everyone enters the room with a shared knowledge base. Inside the "white room," the team starts with a clean slate (*tabula rasa*), checking preconceptions and hierarchy at the door—never imitating the Senior Engagement Manager who told Kristin Asleson’s team to "be quiet and watch me work on the whiteboard." Four rules govern the two-hour session: there are no bad ideas, there are no dumb questions (asking "How much money is there in the world?" sparked a 45-minute breakthrough in global asset management), be prepared to "kill your babies" (abandoning ego attachment to your draft hypothesis), and transcribe every flipchart onto paper before leaving. Teams spark momentum using Kristin Asleson’s three exercises: Post-it notes, category flipchart stations with colored markers, and "bellyaches up front" to let hostile client managers vent gripes before co-designing implementation.',
      keyTakeaways: [
        'Circulate empirical Fact Packs to every participant before the brainstorm so the group manipulates a shared set of facts.',
        'Suspend hierarchy in the white room, treat naive first-principles questions seriously, and be ready to "kill your babies" without ego.',
        'Cap brainstorming sessions at two hours, use "bellyaches up front" to convert hostile stakeholders, and transcribe every flipchart before turning off the lights.',
      ],
      commonPitfalls: [
        'Walking into a brainstorming session without circulating Fact Packs, resulting in two hours of uninformed speculation.',
        'Allowing the team leader to turn the brainstorm into solo whiteboard theater while junior associates sit silently.',
        'Running a four-hour late-night marathon without breaks or leaving the room without a permanent paper transcription of the whiteboards.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Field Intelligence & Ideation Architecture: Interrogation & Bull Sessions vs. Columbo Interviewing & Fact-Pack Brainstorming',
      description:
        'Comparing amateur field investigation and unstructured group meetings against McKinsey’s structured interviewing and white-room brainstorming protocols.',
      headers: ['Dimension', 'Aggressive Interrogation & Solo Work', 'Unprepared Group Bull Session', 'Columbo Pairs & Fact-Pack Brainstorming (McKinsey Way)'],
      rows: [
        [
          'Pre-Work & Knowledge Base',
          'Reinvents the wheel from scratch',
          'Zero advance reading; opinions in a vacuum',
          'PDNet + Annual Report + Outliers distilled into shared Fact Packs',
        ],
        [
          'Interviewee Psychological Dynamic',
          'Navy-style grilling leaves subject "naked" and defensive',
          'Casual chat hijacked by fly-fishing tangents or Sandbaggers',
          'Boss-scheduled pairs, open-ended questions, paraphrasing & Columbo doorway prompt',
        ],
        [
          'Hierarchy & Ego in Ideation',
          'Boss works alone on whiteboard while team watches',
          'Loudest voices defend pet ideas to the death',
          'Tabula rasa equality, "kill your babies," and Post-it / Flipchart exercises',
        ],
        [
          'Hostile Stakeholder Handling',
          'Gets angry or backs down from false accusations',
          'Avoids tough conversations completely',
          'Stands firm with dignity (Hamish) and runs "bellyaches up front" venting',
        ],
      ],
      verdictRule:
        'Always arm the team with Fact Packs from PDNet and annual reports, conduct interviews in empathetic pairs using open-ended questions and the Columbo tactic, and run two-hour hierarchy-free brainstorms with permanent paper capture.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mw-ch03-scen-1',
      title: 'Disarming an Anxious Plant Manager and Extracting Guarded Cost Data via the Columbo Tactic',
      roleAndContext: 'Pharmaceutical Restructuring Engagement — Regional Operations Audit',
      symptomOrFailure:
        'A new associate fresh out of the military grills a 20-year middle manager whose hands are shaking so badly he cannot pour his Mr. Coffee; the manager panics, clams up, and withholds the division’s unit-cost breakdown.',
      naiveFixAndWhyItFails:
        'Threatening the terrified manager with immediate escalation to the CEO on the first question, which triggers total defensive paralysis and spreads anti-consultant panic across the entire plant.',
      firstPrinciplesSolution:
        'Apply "Don’t Leave the Interviewee Naked" and the Seven Interviewing Rules: start with an indirect warm-up, share quid-pro-quo industry benchmarks that help the manager’s department, ask open-ended questions while paraphrasing answers back with structure, and wait until walking out the doorway to ask the relaxed "Columbo" question for the sensitive cost sheet—followed by a personalized thank-you note.',
      measurableOutcome:
        'The manager relaxes, hands over the complete historical cost ledger at the doorway, and becomes a trusted repeat source for the remainder of the restructuring study.',
    },
    {
      id: 'mw-ch03-scen-2',
      title: 'Converting a Hostile Client Management Team via "Bellyaches Up Front" Brainstorming',
      roleAndContext: 'Large Corporate Turnaround (Kristin Asleson) — Cross-Unit Implementation Workshop',
      symptomOrFailure:
        'Business unit heads arrive at a large-scale change-management workshop openly hostile to McKinsey’s proposed restructuring program, muttering cynical asides and preparing to stonewall every recommendation.',
      naiveFixAndWhyItFails:
        'Trying to lecture over the grumbling executives with a 100-slide deck, which entrenches their opposition and guarantees they will sabotage the program once the consultants leave.',
      firstPrinciplesSolution:
        'Run the "Bellyaches Up Front" brainstorming protocol: invite every unit player to state upfront everything they dislike about the proposed program and record every complaint on flipcharts; once they have fully vented, apply "tough love" from the Engagement Director to have them brainstorm what is good about the plan and how to implement it in their own units—while the moderator stands behind any persistent rabble-rouser.',
      measurableOutcome:
        'Venting drains the room’s hostility in 30 minutes, generates pragmatic unit-level adaptations the consulting team had missed, and secures executive buy-in across all business divisions.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mw-ch03-q1',
        scenarioPrompt:
          'What is the "Mushroom Method" of team management described in Chapter 5, and how do effective Engagement Managers like Vik avoid it?',
        options: [
          {
            label: 'A',
            text: 'Growing teams rapidly by hiring external contractors; avoided by keeping teams under three people.',
            isCorrect: false,
            explanation: 'The Mushroom Method refers to keeping team members in the dark.',
          },
          {
            label: 'B',
            text: 'Covering team members in manure and keeping them in the dark; avoided by steering a steady course, explaining the value of their work to the whole study, respecting their time, and checking team morale.',
            isCorrect: true,
            explanation: 'The Mushroom Method treats associates as blind data grinders kept in the dark about the overall engagement; effective leaders explain how every piece of analysis fits into the big picture.',
          },
          {
            label: 'C',
            text: 'Holding all brainstorming sessions in windowless basement rooms; avoided by renting resort hotels.',
            isCorrect: false,
            explanation: 'It is a metaphor for withholding context and piling on unappreciated work.',
          },
          {
            label: 'D',
            text: 'Feeding the team mushroom pizza during all-nighters; avoided by ordering sushi.',
            isCorrect: false,
            explanation: 'Sushi was Rasiel’s favorite brainstorm fuel, not the definition of the Mushroom Method.',
          },
        ],
      },
      {
        id: 'mw-ch03-q2',
        scenarioPrompt:
          'Why does Rasiel recommend asking a retail store manager "What is your busiest season?" rather than "Is your busiest season summer or winter?"',
        options: [
          {
            label: 'A',
            text: 'Because store managers prefer shorter sentences.',
            isCorrect: false,
            explanation: 'The distinction is open-ended vs closed/multiple-choice questioning.',
          },
          {
            label: 'B',
            text: 'Because open-ended questions prevent you from highlighting your ignorance if the true answer is spring (Easter) and prompt the interviewee to volunteer richer detail.',
            isCorrect: true,
            explanation: 'Closed or binary questions restrict the interviewee’s response and expose your lack of domain knowledge when neither option is right; open-ended questions elicit full, specific answers.',
          },
          {
            label: 'C',
            text: 'Because multiple-choice questions violate the Columbo tactic.',
            isCorrect: false,
            explanation: 'The Columbo tactic is the doorway follow-up prompt.',
          },
          {
            label: 'D',
            text: 'Because the store manager’s boss must approve all multiple-choice questions in advance.',
            isCorrect: false,
            explanation: 'The boss schedules the meeting but does not script binary questions.',
          },
        ],
      },
      {
        id: 'mw-ch03-q3',
        scenarioPrompt:
          'How should an interviewer handle a "Sandbagger" (a passive-aggressive interviewee who fills the entire 30-minute slot talking about what she thinks McKinsey does and telling her life story)?',
        options: [
          {
            label: 'A',
            text: 'Shout over her and demand yes-or-no answers.',
            isCorrect: false,
            explanation: 'Aggression backfires with passive-aggressive interviewees.',
          },
          {
            label: 'B',
            text: 'Use an indirect approach: find someone else in the organization who has the information, or if she is the sole source, ask her boss to have a quiet word with her.',
            isCorrect: true,
            explanation: 'When a Sandbagger filibusters an interview with irrelevant monologue, the most effective move is bypassing her via an alternate source—or having her boss quietly intervene.',
          },
          {
            label: 'C',
            text: 'Send her a boilerplate form thank-you letter and cancel the project.',
            isCorrect: false,
            explanation: 'You still need the underlying operational data to solve the problem.',
          },
          {
            label: 'D',
            text: 'Extend the interview to four hours until she gets tired of talking.',
            isCorrect: false,
            explanation: 'A Sandbagger will gladly waste four hours without giving you the data.',
          },
        ],
      },
      {
        id: 'mw-ch03-q4',
        scenarioPrompt:
          'In McKinsey brainstorming, what does the Hollywood screenwriting maxim "Be prepared to kill your babies" require of every team member?',
        options: [
          {
            label: 'A',
            text: 'Eliminating underperforming product lines in the client’s portfolio on Day 1.',
            isCorrect: false,
            explanation: '"Your babies" refers to your own cherished hypotheses and ideas.',
          },
          {
            label: 'B',
            text: 'Treating your own hypothesis as just one more datum to be knocked around by the group and dispensing with it without ego if it is not part of the final answer.',
            isCorrect: true,
            explanation: 'Brainstorming fails if participants invest their ego in defending a pet hypothesis ("dying in a ditch"); every idea must be offered up to the group and discarded if better evidence emerges.',
          },
          {
            label: 'C',
            text: 'Deleting all preliminary Fact Packs before entering the white room.',
            isCorrect: false,
            explanation: 'Fact Packs are mandatory pre-reading before the brainstorm.',
          },
          {
            label: 'D',
            text: 'Replacing junior associates midway through the engagement.',
            isCorrect: false,
            explanation: 'It is an intellectual humility rule for group ideation.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mw-ch03-fc1',
        category: 'foundation',
        front: 'How does McKinsey "sell without selling"?',
        back: 'By building intellectual mousetraps—books (In Search of Excellence), The McKinsey Quarterly, conferences, charity boards, and alumni relationships—so clients approach the Firm.',
        mentalHook: 'Build the intellectual mousetrap; never cold-call.',
      },
      {
        id: 'mw-ch03-fc2',
        category: 'data',
        front: 'What are the three specific research starting points highlighted in Chapter 7?',
        back: 'Start with the Annual Report (especially the Chairman’s Remarks), look for statistical Outliers, and look for internal/external Best Practice.',
        mentalHook: 'Annual Report -> Outliers -> Best Practice (after checking PDNet).',
      },
      {
        id: 'mw-ch03-fc3',
        category: 'data',
        front: 'What is the Japanese concept of "aizuchi" (the "McKinsey grunt") in interviewing?',
        back: 'Interjecting brief verbal placeholders ("uh-huh", "yes", "I see") paired with leaning forward, nodding, and note-taking to show active attention and keep the interviewee talking.',
        mentalHook: 'Two swordsmiths hammering in turn—just don’t forget to speak English too!',
      },
      {
        id: 'mw-ch03-fc4',
        category: 'data',
        front: 'What is the "Columbo tactic" (and "Super-Columbo") in interviewing?',
        back: 'Turning around at the doorway after the interview ends (or dropping by casually 1–2 days later) to ask "One thing I forgot to ask..." when the interviewee’s defenses are down.',
        mentalHook: 'Hand on the doorknob -> Defenses drop -> Truth comes out.',
      },
      {
        id: 'mw-ch03-fc5',
        category: 'architecture',
        front: 'What is a "Fact Pack" and why is it mandatory before a brainstorming session?',
        back: 'A neatly organized summary of key research points and data circulated to the whole team before brainstorming so everyone shares the same empirical baseline.',
        mentalHook: 'No brainstorming in a vacuum—read the Fact Pack first.',
      },
      {
        id: 'mw-ch03-fc6',
        category: 'adaptation',
        front: 'How does the "Bellyaches Up Front" brainstorming exercise work?',
        back: 'Hostile or skeptical participants are asked to vent everything they dislike about a proposed program first, then challenged to identify its strengths and unit-level implementation paths.',
        mentalHook: 'Drain the poison first, then co-design the cure.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mw-ch03-feyn1',
        conceptTitle: 'The McKinsey Strategic Interviewing System',
        prompt:
          'Walk through the complete McKinsey interviewing system from preparation to follow-up, explaining how to extract maximum truth from both terrified middle managers and hostile or sandbagging executives.',
        rubricChecklist: [
          'Covers preparation: writing a 2–3 goal interview guide and having the interviewee’s boss schedule the meeting.',
          'Explains in-room mechanics: interviewing in pairs (question poser + note taker), open-ended prompts (Easter vs summer/winter), paraphrasing back with structure, aizuchi/body language, and hanging silence.',
          'Addresses emotional and political extremes: "Don’t leave the interviewee naked" (the shaking Mr. Coffee pot), standing firm against false accusations (Hamish McDermott), pulling rank on stonewallers, and bypassing Sandbaggers.',
          'Explains the Columbo / Super-Columbo doorway tactic and the long-term payoff of a non-boilerplate written thank-you note (the framed letter 15 years later).',
        ],
        modelExplanation:
          'Before walking into an interview, consultants narrow their interview guide to two or three core questions and have the subject’s boss set up the meeting. They interview in pairs so one person can pose open-ended questions and watch body language while the other takes notes. Because interviewees may be terrified of losing their jobs—like the pharmaceutical manager whose hands shook too hard to pour coffee—interviewers avoid aggressive interrogation, offer quid-pro-quo insights, paraphrase answers back with structure, and let silence hang to break rehearsed scripts. If a hostile executive makes a false accusation, they stand firm with calm dignity; if a Sandbagger filibusters, they bypass her or ask her boss to step in. Finally, they use the doorway Columbo question when defenses relax, and mail a tailored thank-you note afterward.',
      },
      {
        id: 'mw-ch03-feyn2',
        conceptTitle: 'Fact-Pack White-Room Brainstorming',
        prompt:
          'Explain why McKinsey brainstorming is neither a "college bull session" nor solo whiteboard theater, detailing the preparation, white-room rules, and Kristin Asleson’s three exercises.',
        rubricChecklist: [
          'Explains Proper Prior Preparation: distilling PDNet, annual report, and outlier research into Fact Packs distributed to all team members.',
          'Contrasts true white-room equality (tabula rasa) with the SEM who told his team to "be quiet and watch me work on the whiteboard."',
          'States the core rules: no bad ideas, no dumb questions ("How much money is there in the world?"), be prepared to kill your babies, cap at two hours, and transcribe every flipchart onto paper.',
          'Describes the Post-it exercise, the color-coded Flipchart station exercise, and "Bellyaches Up Front" (plus standing behind a rabble-rouser).',
        ],
        modelExplanation:
          'Effective brainstorming never happens in an empirical vacuum: every team member first compiles and reads Fact Packs so the group shares a common base of facts. Inside the white room, hierarchy and preconceptions are checked at the door—unlike the manager who forced associates to watch him think alone. For two focused hours, every participant is equal, naive questions like "How much money is there in the world?" are explored seriously, and everyone is ready to "kill their babies" when the group refines or rejects their initial hypothesis. Teams accelerate ideation using Post-it notes, category flipchart stations with colored markers, and "bellyaches up front" for skeptical clients, always transcribing every flipchart before leaving the room.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mw-ch03-n1',
        label: 'Mousetrap Authority & Scoping',
        category: 'foundation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Selling without cold calls via intellectual leadership while scoping engagements into achievable 3–6 month chunks.',
        whyItMatters: 'Attracts inbound client trust and prevents boil-the-ocean overpromises.',
      },
      {
        id: 'mw-ch03-n2',
        label: 'Anti-Mushroom Team Leadership',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 1,
        definition: 'Maintaining morale by explaining the big-picture value of tasks, respecting family boundaries, and asserting upward meritocracy.',
        whyItMatters: 'Prevents associate burnout and catches senior logical errors early.',
      },
      {
        id: 'mw-ch03-n3',
        label: 'PDNet & Outlier Fact Packs',
        category: 'data',
        chapterNumber: 3,
        importance: 1,
        definition: 'Synthesizing internal firm knowledge, Annual Report Chairman’s Remarks, and statistical outliers into shared Fact Packs.',
        whyItMatters: 'Gives the entire team a unified empirical foundation before brainstorming.',
      },
      {
        id: 'mw-ch03-n4',
        label: 'Empathetic Pair Interviewing',
        category: 'data',
        chapterNumber: 3,
        importance: 1,
        definition: 'Two-person interviewing using 3-goal guides, open-ended questions, structured paraphrasing, and hanging silence.',
        whyItMatters: 'Extracts detailed operational knowledge without leaving anxious subjects naked.',
      },
      {
        id: 'mw-ch03-n5',
        label: 'Columbo & Anti-Sandbagger Tactics',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Asking the key question at the doorway when defenses drop, while standing firm against hostiles and bypassing Sandbaggers.',
        whyItMatters: 'Unlocks guarded data when standard questioning stalls.',
      },
      {
        id: 'mw-ch03-n6',
        label: 'White-Room Brainstorming ("Kill Your Babies")',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition: 'Two-hour hierarchy-free ideation powered by Fact Packs, Post-it/Flipchart exercises, and "bellyaches up front."',
        whyItMatters: 'Generates breakthrough outsider perspectives and converts skeptical client managers.',
      },
    ],
    edges: [
      {
        source: 'mw-ch03-n1',
        target: 'mw-ch03-n2',
        relationship: 'prerequisite_for',
        explanation: 'Realistic 4–6 person scoping prevents team burnout.',
      },
      {
        source: 'mw-ch03-n3',
        target: 'mw-ch03-n6',
        relationship: 'prerequisite_for',
        explanation: 'Pre-circulated Fact Packs ground white-room ideation.',
      },
      {
        source: 'mw-ch03-n5',
        target: 'mw-ch03-n4',
        relationship: 'part_of',
        explanation: 'Combines psychological safety with doorway Columbo extraction.',
      },
      {
        source: 'mw-ch03-n4',
        target: 'mw-ch03-n3',
        relationship: 'optimizes',
        explanation: 'Uncovers guarded operational data for the team Fact Pack.',
      },
      {
        source: 'mw-ch03-n2',
        target: 'mw-ch03-n6',
        relationship: 'optimizes',
        explanation: 'Meritocratic equality allows juniors to challenge hypotheses in the white room.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 15,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Part II (Chapters 4–9: Selling, Team Assembly, Hierarchy, Research, Interviewing, Brainstorming).',
  },
};

export const mwCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Part III: Selling Solutions (Prewired Presentations, One-Message Charts, Internal Comms & Client Buy-In)',
  subtitle: 'Turning boardroom readouts into prewired performance art, applying Zelazny’s Action-Lead and Waterfall chart rules, and locking in client co-ownership.',
  readingTimeMinutes: 9,
  sourceWordCount: 7652,
  executiveThesis:
    'Even the most brilliant strategic solution fails if it lands on the Betamax remainder shelf of unexecuted blue books. Selling and implementing solutions requires four interlocking mechanisms: structured presentations where every stakeholder is "prewired" beforehand and 24-hour print deadlines prevent 4 a.m. typo vigils (Chapter 10); Gene Zelazny’s one-message-per-chart discipline using action leads and waterfall bridges (Chapter 11); crisp internal communications governed by brevity, thoroughness, structure, and strict airplane/elevator confidentiality (Chapter 12); and deep client-team co-ownership that neutralizes "liability" saboteurs and locks in foolproof who-does-what-by-when implementation plans (Chapter 13).',
  paradigmShift: {
    oldWay:
      'Springing a surprise dramatic reveal in the boardroom after pulling a 4 a.m. typo-fixing all-nighter, cramming three messages onto 3D color charts, and handing off a blue book without line-worker buy-in.',
    newWay:
      'Turning the final presentation into prewired performance art, enforcing a 24-hour production stop, topping simple B&W charts with a 1-sentence action lead, and letting the client team claim ownership of the model.',
    whyItChanged:
      'Executives embarrassed by surprise findings in front of peers reject the recommendation, complex multi-message charts obscure the causal story, and strategies without middle-manager and fleet-driver buy-in never get implemented.',
  },
  mentalModels: [
    {
      id: 'mw-ch04-mm1',
      name: 'Prewiring as Boardroom Performance Art (Plus the 24-Hour Stop Rule)',
      tagline: 'Walk every executive through the findings privately beforehand so the final meeting has zero surprises—and stop editing 24 hours early.',
      naiveIntuition:
        'Saving your hardest-hitting conclusions for the big boardroom presentation maximizes dramatic impact, and staying at the copier until 4 a.m. fixing minor chart alignments shows dedication.',
      firstPrinciplesReality:
        'If the Director of Gadgets hears for the first time in front of the CEO that his division is losing money, he will fight your methodology to save face; walking the Gadgets Director, the CFO, and the Widgets SVP through the blue book privately beforehand ("prewiring") incorporates their feedback and turns the final presentation into smooth performance art—while imposing a 24-hour print deadline eliminates the diminishing marginal returns of 4 a.m. exhaustion.',
      howToApply:
        'Pre-brief every decision-maker individually before the formal readout, staple or pace the deck so impatient executives cannot jump ahead, and freeze slide production 24 hours before the meeting so the team arrives rested.',
    },
    {
      id: 'mw-ch04-mm2',
      name: 'Zelazny’s One-Message Action-Lead Chart & Waterfall Bridge',
      tagline: 'Every chart is a black-and-white argument for a single message stated in the top action "lead," with waterfalls bridging stocks and flows.',
      naiveIntuition:
        'Modern presentation software makes it easy to pack four dimensions of 3D color-coded data onto a single slide titled "1998 Income Statement."',
      firstPrinciplesReality:
        'Following Gene Zelazny’s *Say It With Charts*, a chart is merely a tool to convey one specific message: the exact same Acme Widget 1998 Income Statement table requires completely different visual emphasis depending on whether the action lead at the top is "Advertising Is Our Second Largest Expense" (Figure 11-1) or "Pretax Profit Margins Surged in 1998" (Figure 11-2)—and when bridging from Net Sales to Net Income, a floating-column Waterfall Chart makes positive and negative flows unmistakable.',
      howToApply:
        'Restrict every chart to one message, write that message as a complete action sentence in the top "lead," cite the source at the lower left, use Waterfall charts to bridge net flows, and convert any chart that breaks the one-message rule into plain text.',
    },
    {
      id: 'mw-ch04-mm3',
      name: 'Client Co-Ownership & Liability Triage (Hank vs. Carlos)',
      tagline: 'Let the client team say "It was our model," empower front-line allies like Morty, and separate harmless Hanks from political Carloses.',
      naiveIntuition:
        'Consultants should guard their spreadsheet models to prove how smart they are, and treat every unhelpful client team member the same way.',
      firstPrinciplesReality:
        'True implementation happens when the client internalizes the solution—like Suzanne Tosini smiling silently as her real-estate client team presented her cashflow model to their bosses as "our model"; achieving this requires turning overlooked staff like Morty the Brooklyn mainframe programmer into enthusiastic allies, working around harmlessly inept "Liability" members like Hank (the 6’4" ex-football player), and escalating immediately against slick political saboteurs like Carlos.',
      howToApply:
        'Involve client team members in high-visibility interviews, isolate harmlessly low-skill "Hanks" onto safe tasks while neutralizing political "Carloses" through top sponsors, present the findings from the boardroom down to fleet drivers, and specify exact "Tom on March 1, Dick on March 15" implementation steps.',
    },
  ],
  customDiagrams: [
    {
      id: 'mw-ch04-svg-1',
      title: 'Zelazny Chart Architecture: Action Leads on Identical Data & The Waterfall Flow Bridge',
      subtitle: 'How two different action leads transform the 1998 Acme Widget Income Statement alongside a Waterfall Chart.',
      bierutCaption:
        'The same Acme Widget Corp income statement supports two entirely different charts depending on the top Action Lead, while a Waterfall Chart bridges sequential additions and deductions from zero.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="80" x2="800" y2="80" />
    <line x1="0" y1="220" x2="800" y2="220" />
    <line x1="0" y1="355" x2="800" y2="355" />
    <line x1="395" y1="0" x2="395" y2="420" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 4.1 — ONE MESSAGE PER CHART (ACTION LEADS) &amp; WATERFALL FLOW BRIDGE</text>
  <rect x="25" y="55" width="350" height="335" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="82" fill="#38bdf8" font-family="sans-serif" font-size="11.5" font-weight="bold">SAME DATA, TWO DISTINCT ACTION LEADS</text>
  <rect x="42" y="98" width="316" height="118" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="54" y="118" fill="#38bdf8" font-family="sans-serif" font-size="10" font-weight="bold">LEAD A (Fig 11-1): "Advertising Is Acme’s</text>
  <text x="54" y="132" fill="#38bdf8" font-family="sans-serif" font-size="10" font-weight="bold">Largest Expense After Materials &amp; Labor"</text>
  <rect x="54" y="144" width="190" height="14" rx="2" fill="#475569" />
  <text x="252" y="155" fill="#94a3b8" font-family="monospace" font-size="9">COGS / Labor</text>
  <rect x="54" y="164" width="135" height="14" rx="2" fill="#f59e0b" />
  <text x="197" y="175" fill="#f59e0b" font-family="monospace" font-size="9" font-weight="bold">Advertising (Highlighted!)</text>
  <rect x="54" y="184" width="75" height="14" rx="2" fill="#475569" />
  <text x="137" y="195" fill="#94a3b8" font-family="monospace" font-size="9">R&amp;D / Admin</text>
  <rect x="42" y="230" width="316" height="118" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="54" y="250" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">LEAD B (Fig 11-2): "Acme’s Pretax Profit</text>
  <text x="54" y="264" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">Doubled Between 1997 and 1998"</text>
  <rect x="75" y="302" width="55" height="32" rx="2" fill="#475569" />
  <text x="102" y="296" fill="#94a3b8" font-family="monospace" font-size="9" text-anchor="middle">1997</text>
  <rect x="175" y="274" width="55" height="60" rx="2" fill="#10b981" />
  <text x="202" y="269" fill="#10b981" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">1998 (2×)</text>
  <text x="42" y="370" fill="#94a3b8" font-family="monospace" font-size="9.5">Source: Acme Widget 1998 Annual Report (Lower Left)</text>
  <rect x="415" y="55" width="360" height="335" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="432" y="82" fill="#10b981" font-family="sans-serif" font-size="11.5" font-weight="bold">WATERFALL CHART: SHOWING THE FLOW</text>
  <text x="432" y="102" fill="#e2e8f0" font-family="sans-serif" font-size="10">Lead: "Cost Cuts &amp; Ad Gains Offset Margin Dip"</text>
  <rect x="440" y="135" width="42" height="180" rx="3" fill="#38bdf8" />
  <text x="461" y="128" fill="#38bdf8" font-family="monospace" font-size="9" text-anchor="middle">+100</text>
  <text x="461" y="332" fill="#cbd5e1" font-family="monospace" font-size="8.5" text-anchor="middle">Sales</text>
  <path d="M 482 135 L 502 135" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4" />
  <rect x="502" y="115" width="42" height="20" rx="3" fill="#10b981" />
  <text x="523" y="108" fill="#10b981" font-family="monospace" font-size="9" text-anchor="middle">+12</text>
  <text x="523" y="332" fill="#cbd5e1" font-family="monospace" font-size="8.5" text-anchor="middle">+Other</text>
  <path d="M 544 115 L 564 115" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4" />
  <rect x="564" y="115" width="42" height="95" rx="3" fill="#f43f5e" />
  <text x="585" y="224" fill="#fda4af" font-family="monospace" font-size="9" text-anchor="middle">-55</text>
  <text x="585" y="332" fill="#cbd5e1" font-family="monospace" font-size="8.5" text-anchor="middle">-COGS</text>
  <path d="M 606 210 L 626 210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4" />
  <rect x="626" y="210" width="42" height="55" rx="3" fill="#f43f5e" />
  <text x="647" y="279" fill="#fda4af" font-family="monospace" font-size="9" text-anchor="middle">-32</text>
  <text x="647" y="332" fill="#cbd5e1" font-family="monospace" font-size="8.5" text-anchor="middle">-SG&amp;A</text>
  <path d="M 668 265 L 688 265" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4" />
  <rect x="688" y="265" width="42" height="50" rx="3" fill="#f59e0b" />
  <text x="709" y="258" fill="#f59e0b" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">=25</text>
  <text x="709" y="332" fill="#f59e0b" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">Net Inc</text>
  <line x1="430" y1="315" x2="755" y2="315" stroke="#64748b" stroke-width="1.5" />
  <text x="432" y="370" fill="#cbd5e1" font-family="monospace" font-size="9.5">Floating columns bridge stock-and-flow mechanics</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'One Message Per Chart',
          explanation:
            'Rather than dumping a raw accounting table on the screen, each chart isolates a single insight and states it as a full verb-driven sentence in the top "lead."',
        },
        {
          step: '02',
          label: 'Source Attribution Discipline',
          explanation:
            'Every McKinsey chart anchors its credibility by citing the exact empirical data source in the lower-left corner.',
        },
        {
          step: '03',
          label: 'The Waterfall Bridge',
          explanation:
            'Starting at the zero line, floating positive and negative columns visually bridge how a starting total (Net Sales) flows step-by-step into an ending total (Net Income).',
        },
      ],
    },
    {
      id: 'mw-ch04-svg-2',
      title: 'Prewiring, Client Team Co-Ownership & Multi-Tier Implementation Architecture',
      subtitle: 'Private executive pre-briefings, Hank vs. Carlos triage, and Tom/Dick/Harriet rollout schedules.',
      bierutCaption:
        'Turning a recommendation into reality requires prewiring every executive privately before the board meeting, neutralizing political "Carlos" liabilities, and cascading buy-in down to line workers.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="85" x2="800" y2="85" />
    <line x1="0" y1="215" x2="800" y2="215" />
    <line x1="0" y1="345" x2="800" y2="345" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 4.2 — PREWIRING, CLIENT CO-OWNERSHIP &amp; IMPLEMENTATION PIPELINE</text>
  <rect x="25" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="88" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">1. PREWIRE THE BOARDROOM</text>
  <rect x="40" y="106" width="200" height="96" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="52" y="126" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">Private 1-on-1 Walk-Throughs</text>
  <text x="52" y="144" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Pre-brief Gadgets Director</text>
  <text x="52" y="160" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Pre-brief CFO &amp; Widgets SVP</text>
  <text x="52" y="176" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Integrate data fixes early</text>
  <text x="52" y="192" fill="#10b981" font-family="monospace" font-size="9">Final meeting = Zero surprises</text>
  <rect x="40" y="216" width="200" height="72" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="52" y="236" fill="#f59e0b" font-family="sans-serif" font-size="10.5" font-weight="bold">24-Hour Print Deadline</text>
  <text x="52" y="254" fill="#94a3b8" font-family="monospace" font-size="9.5">Stop editing 24 hrs early;</text>
  <text x="52" y="270" fill="#94a3b8" font-family="monospace" font-size="9.5">ban 4 a.m. typo vigils.</text>
  <rect x="40" y="302" width="200" height="62" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="52" y="322" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">Staple the Blue Book Shut</text>
  <text x="52" y="340" fill="#94a3b8" font-family="monospace" font-size="9">Keep audience on your logical</text>
  <text x="52" y="352" fill="#94a3b8" font-family="monospace" font-size="9">pace; prevent leafing ahead.</text>
  <path d="M 255 220 L 285 220" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="285" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="300" y="88" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">2. CLIENT TEAM ALIGNMENT</text>
  <rect x="300" y="106" width="200" height="82" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="312" y="126" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">Empower Allies (Morty)</text>
  <text x="312" y="144" fill="#cbd5e1" font-family="monospace" font-size="9.5">Bring back-office programmer</text>
  <text x="312" y="158" fill="#cbd5e1" font-family="monospace" font-size="9.5">to front-office trader</text>
  <text x="312" y="172" fill="#cbd5e1" font-family="monospace" font-size="9.5">interviews → loyal champion.</text>
  <rect x="300" y="200" width="200" height="92" rx="6" fill="#311024" stroke="#f43f5e" />
  <text x="312" y="220" fill="#fda4af" font-family="sans-serif" font-size="10.5" font-weight="bold">Triage "Liability" Members</text>
  <text x="312" y="238" fill="#cbd5e1" font-family="monospace" font-size="9">• "Hank" (inept but harmless):</text>
  <text x="312" y="252" fill="#cbd5e1" font-family="monospace" font-size="9">  Work around / give safe tasks</text>
  <text x="312" y="268" fill="#fda4af" font-family="monospace" font-size="9">• "Carlos" (faction saboteur):</text>
  <text x="312" y="282" fill="#fda4af" font-family="monospace" font-size="9">  Escalate &amp; remove immediately</text>
  <rect x="300" y="304" width="200" height="60" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="312" y="324" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">"It Was THEIR Model"</text>
  <text x="312" y="342" fill="#cbd5e1" font-family="monospace" font-size="9">Let client team take credit</text>
  <text x="312" y="354" fill="#cbd5e1" font-family="monospace" font-size="9">(Suzanne Tosini’s cashflow model)</text>
  <path d="M 515 220 L 545 220" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="545" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="560" y="88" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">3. MULTI-TIER EXECUTION</text>
  <rect x="560" y="106" width="200" height="115" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="572" y="126" fill="#f59e0b" font-family="sans-serif" font-size="10.5" font-weight="bold">Cascade Buy-In All the Way</text>
  <text x="572" y="144" fill="#cbd5e1" font-family="monospace" font-size="9.5">Avoid the Betamax shelf:</text>
  <text x="572" y="162" fill="#e2e8f0" font-family="monospace" font-size="9.5">1. Board of Directors</text>
  <text x="572" y="178" fill="#e2e8f0" font-family="monospace" font-size="9.5">2. Middle Managers</text>
  <text x="572" y="194" fill="#e2e8f0" font-family="monospace" font-size="9.5">3. Factory Floor &amp; Fleet</text>
  <text x="572" y="210" fill="#10b981" font-family="monospace" font-size="9">Tailor talk to each audience</text>
  <rect x="560" y="236" width="200" height="128" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="572" y="256" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">Foolproof Implementation</text>
  <text x="572" y="274" fill="#cbd5e1" font-family="monospace" font-size="9.5">Specify What, By Whom, When:</text>
  <text x="572" y="294" fill="#38bdf8" font-family="monospace" font-size="9.5">• Mar 1: Tom builds database</text>
  <text x="572" y="312" fill="#38bdf8" font-family="monospace" font-size="9.5">• Mar 15: Dick audits accounts</text>
  <text x="572" y="330" fill="#38bdf8" font-family="monospace" font-size="9.5">• Apr 1: Harriet launches sales</text>
  <text x="572" y="350" fill="#94a3b8" font-family="monospace" font-size="9">Zero ambiguity = Real results</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Prewiring Eliminates Ambush Resistance',
          explanation:
            'Walking the Gadgets Director through his unit’s numbers privately before the board meeting prevents defensive obstruction and incorporates valid corrections early.',
        },
        {
          step: '02',
          label: 'Hank vs. Carlos Triage',
          explanation:
            'Distinguish between a low-skill client team member who wants to belong ("Hank") and a politically connected saboteur working for a rival board faction ("Carlos").',
        },
        {
          step: '03',
          label: 'Tom, Dick & Harriet Specificity',
          explanation:
            'An implementation plan is only complete when every step is assigned to a named owner and an explicit calendar date from the boardroom down to the loading dock.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'mw-ch04-sec-1',
      sectionNumber: '4.1',
      title: 'Structured Presentations, 24-Hour Print Stops & Prewiring Everything',
      subtitle: 'Turning Boardroom Readouts into Zero-Surprise Performance Art alongside Zelazny Charts',
      coreMechanism:
        'A presentation fails the moment an executive flips ahead to page 40 and stops listening—which is why one partner stapled the blue books shut so the client had to follow step-by-step. Teams also waste sharpness by ignoring diminishing marginal returns, staying until 4 a.m. in the copier room fixing minor typos; imposing a 24-hour print deadline guarantees a rested team. Above all, **prewire everything**: walk the Gadgets Director, CFO, and Widgets SVP through the findings privately beforehand so the board meeting has zero surprises. Visually, following Gene Zelazny’s *Say It With Charts*, every chart must obey **One Message Per Chart**, stated as an active sentence in the top "lead" with the source cited at the lower left. In Figures 11-1 and 11-2, the exact same 1998 Acme Widget Income Statement yields two distinct charts depending on the lead ("Advertising Is Acme’s Second Largest Expense" vs. "Pretax Profit Doubled in 1998"), while a **Waterfall Chart** uses floating positive and negative columns from zero to bridge net flows.',
      keyTakeaways: [
        'Prewire every stakeholder through private one-on-one walk-throughs before the formal readout and freeze print production 24 hours early.',
        'Restrict every chart to one message stated in an active top "lead" sentence with a lower-left source citation.',
        'Use a Waterfall Chart with floating positive and negative columns whenever bridging a starting stock to an ending net total.',
      ],
      commonPitfalls: [
        'Ambushing a division head in front of the CEO with negative unit numbers he has never seen before, or pulling a 4 a.m. typo vigil.',
        'Writing passive labels like "1998 Income Statement" at the top of a slide instead of an action lead.',
        'Using 3D multicolor chart clutter instead of clean black-and-white bars or a Waterfall flow bridge.',
      ],
    },
    {
      id: 'mw-ch04-sec-2',
      sectionNumber: '4.2',
      title: 'Internal Communications & Operational Confidentiality',
      subtitle: 'Brevity, Thoroughness, Structure, and Looking Over Your Shoulder in Public',
      coreMechanism:
        'High-velocity problem solving requires constant upward and downward information flow. To prevent Mushroom Management, teams run short, regular status meetings—as Suzanne Tosini instituted at Freddie Mac—governed by three rules: always have a leader, always have an agenda, and if there is nothing substantive to discuss, cancel at least 45 minutes in advance (supplemented by "walking around"). Every individual voicemail, email, or memo must obey the Three Keys to an Effective Message: **Brevity** (scripting 3 to 4 bullet points on a pad before dialing a voicemail), **Thoroughness**, and **Structure**. Finally, consultants must **Always Look Over Your Shoulder**: lock briefcases when away, never display client slides on an airplane laptop or discuss client names in a public elevator, and choose code names carefully (remembering the Munich associates whose code name "Code A" sounded identical to their acquisition target "Coda").',
      keyTakeaways: [
        'Structure every voicemail, email, and memo around Brevity (3–4 scripted points), Thoroughness, and a MECE outline.',
        'Run brief, scheduled team alignment meetings with a clear leader and agenda—or cancel at least 45 minutes beforehand.',
        'Enforce strict operational security by never discussing client names in public elevators or working on visible client documents on airplanes.',
      ],
      commonPitfalls: [
        'Leaving rambling, unstructured two-minute voicemails instead of jotting down three crisp points before dialing.',
        'Holding a mandatory weekly meeting when there is nothing to report, or canceling it five minutes before start time.',
        'Working on confidential acquisition spreadsheets on a crowded flight or using a transparent code name like "Code A" for "Coda" in an elevator.',
      ],
    },
    {
      id: 'mw-ch04-sec-3',
      sectionNumber: '4.3',
      title: 'Working with Clients: Morty, Hank vs. Carlos, Co-Ownership & Implementation',
      subtitle: 'Turning Client Staff into Champions, Neutralizing Saboteurs, and Specifying Who-Does-What-When',
      coreMechanism:
        'Involving the client team keeps strategic blue books off the Sony Betamax remainder shelf. First, win the client team over by valuing their contribution: bringing Morty—a bearded Brooklyn mainframe programmer—along to interview elite front-office Wall Street traders turned him into an indispensable ally. Second, triage "liability" client team members by motive: "Hank," a 6’4" former college football player with zero analytical skills, was harmless and became a friend once given bounded tasks and included socially; "Carlos," a slick Oxford/Harvard operative planted by a rival board faction to sabotage the study, had to be escalated and removed via top sponsors. Third, let the client team claim ownership—just as Suzanne Tosini smiled silently when her real-estate client team presented her cashflow model to their bosses as "our model." Finally, cascade buy-in from the board down to middle managers and fleet drivers, and write a foolproof implementation plan specifying exact tasks, owners, and dates (Tom on March 1, Dick on March 15, Harriet on April 1).',
      keyTakeaways: [
        'Empower overlooked client team members (like Morty) by giving them visible roles so they champion the project from inside.',
        'Separate harmlessly low-skill "Hank" liabilities (whom you work around kindly) from politically malicious "Carlos" saboteurs (whom you escalate immediately).',
        'Let the client team claim ownership of the analytical model ("It was their model"), cascade presentations down to line workers, and lock in named "who-what-when" dates.',
      ],
      commonPitfalls: [
        'Correcting a client team member in front of their boss to claim personal credit for building a spreadsheet model.',
        'Treating a political saboteur like "Carlos" as an innocent teammate while he feeds distorted data to a rival board faction.',
        'Presenting only to the C-suite while ignoring the middle managers, factory workers, and truck drivers who execute the change.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Solution Delivery & Change Architecture: Surprise Boardroom Reveal vs. Prewired Co-Ownership & Waterfall Clarity',
      description:
        'Contrasting amateur consulting handoffs against McKinsey’s prewiring, visual chart discipline, and multi-tier client implementation.',
      headers: ['Dimension', 'Surprise Boardroom Reveal', 'Software-Flashy Overkill', 'Prewired Co-Ownership (McKinsey Way)'],
      rows: [
        [
          'Executive Readout Dynamic',
          'Ambushes division heads in front of the CEO; sparks defensive war',
          '4 a.m. typo-fixing vigil leaves presenters exhausted',
          '24-hour print stop + 1-on-1 prewiring turns readout into performance art',
        ],
        [
          'Chart Design & Data Flow',
          'Raw spreadsheet tables titled "1998 Income Statement"',
          '3D multicolor charts with 4 competing messages',
          'Simple B&W chart + 1-sentence Action Lead + Waterfall stock/flow bridge',
        ],
        [
          'Client Team Integration',
          'Sidelines client staff; consultants hoard credit for models',
          'Treats inept "Hanks" and political "Carloses" identically',
          'Empowers Morty, works around Hank, removes Carlos, lets client own model',
        ],
        [
          'Implementation Specificity',
          'Blue book sits on the Betamax shelf after C-suite presentation',
          'High-level strategic slogans without operational dates',
          'Cascades buy-in to line workers; names Tom (Mar 1), Dick (Mar 15), Harriet (Apr 1)',
        ],
      ],
      verdictRule:
        'Prewire every stakeholder privately, freeze slides 24 hours early, enforce one Action-Lead message per chart, let the client team take credit for the model, and specify named owners and dates for every implementation step.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mw-ch04-scen-1',
      title: 'Preventing a Boardroom Ambush by Prewiring the Gadgets Director and Enforcing a 24-Hour Print Stop',
      roleAndContext: 'Acme Widgets Portfolio Review — Final Board of Directors Readout',
      symptomOrFailure:
        'The consulting team’s analysis shows that the Gadgets Division is bleeding cash and requires restructuring, while the team’s junior associates are planning to stay until 4 a.m. before the 9 a.m. board meeting tweaking chart fonts.',
      naiveFixAndWhyItFails:
        'Staying up until 4 a.m. reprinting blue books and springing the Gadgets losses on the Director of Gadgets for the first time in front of the CEO, which causes the Gadgets Director to ambush the sleep-deprived team over a minor accounting nuance.',
      firstPrinciplesSolution:
        'Prewire everything: meet privately with the Director of Gadgets, the CFO, and the SVP of Widgets days before the board readout to walk them through the slides, incorporate the Gadgets Director’s valid inventory adjustment, and enforce a strict 24-hour print deadline.',
      measurableOutcome:
        'The Director of Gadgets nods in agreement during the board meeting, the well-rested team answers every CEO question crisply, and the board approves the restructuring unanimously.',
    },
    {
      id: 'mw-ch04-scen-2',
      title: 'Triaging Client Team Liabilities (Morty, Hank, and Carlos) and Achieving Client Model Ownership',
      roleAndContext: 'Financial Institution Transformation — Joint Consultant-Client Task Force',
      symptomOrFailure:
        'A joint task force is assigned three client employees: Morty (an overlooked back-office mainframe coder), Hank (a friendly 6’4" ex-football player with zero spreadsheet skills), and Carlos (a slick Harvard/Oxford executive loyal to a hostile board faction).',
      naiveFixAndWhyItFails:
        'Ignoring Morty as a mere technician, publicly humiliating Hank for his weak math, and trusting Carlos with sensitive draft recommendations—while the consulting team insists on taking sole credit for the financial model.',
      firstPrinciplesSolution:
        'Bring Morty into front-office trader interviews to make him a loyal champion; assign Hank harmless, bounded tasks and include him socially; escalate to the pro-McKinsey sponsor to neutralize Carlos; and follow Suzanne Tosini’s example by letting the client team present the finished cashflow model to their bosses as "our model."',
      measurableOutcome:
        'Morty unlocks critical mainframe trading data, Carlos’s sabotage is blocked, the client team champions "their" model through every layer of management, and the Tom/Dick/Harriet implementation schedule launches on time.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mw-ch04-q1',
        scenarioPrompt:
          'What does "prewiring" mean in the context of a McKinsey presentation, and why is it essential?',
        options: [
          {
            label: 'A',
            text: 'Testing the conference room overhead projector 24 hours before the meeting.',
            isCorrect: false,
            explanation: 'Prewiring refers to aligning human decision-makers, not AV cables.',
          },
          {
            label: 'B',
            text: 'Walking every relevant executive through your findings individually before the group presentation so you can incorporate their feedback and ensure the final readout offers zero surprises.',
            isCorrect: true,
            explanation: 'Prewiring prevents executives from feeling ambushed in front of their peers, catches missing data nuances early, and turns the final board meeting into consensual performance art.',
          },
          {
            label: 'C',
            text: 'Sending an encrypted email summary to the press before the board meets.',
            isCorrect: false,
            explanation: 'Client findings are strictly confidential.',
          },
          {
            label: 'D',
            text: 'Writing the executive summary before collecting any empirical facts.',
            isCorrect: false,
            explanation: 'That is the Initial Hypothesis; prewiring happens before presenting findings.',
          },
        ],
      },
      {
        id: 'mw-ch04-q2',
        scenarioPrompt:
          'According to Chapter 11 (and Gene Zelazny’s Say It With Charts), how should the top "lead" of a chart be written, and when should you use a Waterfall Chart?',
        options: [
          {
            label: 'A',
            text: 'Write a neutral topic label like "1998 Income Statement," and use a Waterfall Chart for geographical maps.',
            isCorrect: false,
            explanation: 'Neutral topic labels fail to state the chart’s single takeaway message.',
          },
          {
            label: 'B',
            text: 'Write the chart’s single takeaway message as an active sentence across the top, and use a Waterfall Chart with floating positive and negative columns to show how a starting stock flows into an ending total.',
            isCorrect: true,
            explanation: 'Every chart must convey one message stated in an action lead at the top (with the source at the lower left), and Waterfall Charts visually bridge stock-and-flow transitions from zero.',
          },
          {
            label: 'C',
            text: 'Put three different messages in the top lead to obey the Rule of Three, and use a 3D pie chart for flows.',
            isCorrect: false,
            explanation: 'The cardinal rule of charting is One Message Per Chart.',
          },
          {
            label: 'D',
            text: 'Leave the top of the chart blank so the audience can guess the conclusion.',
            isCorrect: false,
            explanation: 'Every chart requires an explicit action lead at the top.',
          },
        ],
      },
      {
        id: 'mw-ch04-q3',
        scenarioPrompt:
          'What are Suzanne Tosini’s rules for internal team status meetings, and what are the "Three Keys to an Effective Message" for voicemails and memos?',
        options: [
          {
            label: 'A',
            text: 'Hold two-hour daily meetings without agendas; make messages long, informal, and confidential.',
            isCorrect: false,
            explanation: 'Unstructured, agenda-free meetings waste team time.',
          },
          {
            label: 'B',
            text: 'Keep meetings short and regular with a designated leader and agenda—or cancel at least 45 minutes early; make every message Brief (3–4 scripted points), Thorough, and Structured.',
            isCorrect: true,
            explanation: 'Effective internal communication requires short, agenda-driven meetings (canceled 45 minutes early if unneeded) and messages built on Brevity, Thoroughness, and Structure.',
          },
          {
            label: 'C',
            text: 'Replace all face-to-face meetings with 20-page memos; use code names in every voicemail.',
            isCorrect: false,
            explanation: 'Short face-to-face meetings and walking around are essential for team flow.',
          },
          {
            label: 'D',
            text: 'Only hold meetings on weekends; limit voicemails to one word.',
            isCorrect: false,
            explanation: 'Voicemails should cover 3–4 scripted points concisely.',
          },
        ],
      },
      {
        id: 'mw-ch04-q4',
        scenarioPrompt:
          'How did Suzanne Tosini react when her real-estate client team presented the complex cashflow model she had built to their senior management and took full credit for it?',
        options: [
          {
            label: 'A',
            text: 'She interrupted the meeting to show the senior executives her file timestamps.',
            isCorrect: false,
            explanation: 'Claiming personal credit alienates the client team and kills adoption.',
          },
          {
            label: 'B',
            text: 'She sent an angry memo to her Engagement Director demanding an apology.',
            isCorrect: false,
            explanation: 'She viewed client ownership as a triumph, not an offense.',
          },
          {
            label: 'C',
            text: 'She sat back and smiled without saying a word, recognizing that because "it was their model," the client would actually use and implement it after McKinsey left.',
            isCorrect: true,
            explanation: 'When the client team takes psychological ownership of the analytical tool ("It was their model"), they champion its ongoing use long after the consultants depart.',
          },
          {
            label: 'D',
            text: 'She deleted the model from the client’s servers.',
            isCorrect: false,
            explanation: 'The goal of engaging the client is lasting implementation.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mw-ch04-fc1',
        category: 'architecture',
        front: 'Why did a McKinsey partner staple the blue books shut before handing them to an impatient executive?',
        back: 'To prevent the executive from leafing ahead to the final page and tuning out before hearing the structured logical proof.',
        mentalHook: 'Control the pacing of the argument—don’t let them skip the proof.',
      },
      {
        id: 'mw-ch04-fc2',
        category: 'optimization',
        front: 'How do you combat diminishing marginal returns during presentation production?',
        back: 'Impose a strict deadline to finish and print documents 24 hours before the presentation rather than staying until 4 a.m. fixing minor typos.',
        mentalHook: 'A rested mind at 9 a.m. beats a reprinted typo at 4 a.m.',
      },
      {
        id: 'mw-ch04-fc3',
        category: 'architecture',
        front: 'What are the four mandatory structural elements of a McKinsey data chart?',
        back: 'One message per chart, a 1-sentence action "lead" at the top, simple high-contrast visual bars/lines, and a source citation in the lower-left corner.',
        mentalHook: 'Action Lead on top + Simple visual in middle + Source at bottom left.',
      },
      {
        id: 'mw-ch04-fc4',
        category: 'security',
        front: 'What happened in the Munich elevator with the client code name "Code A"?',
        back: 'Two associates discussed their secret acquisition study for "Code A" in a public elevator, not realizing "Code A" sounded identical to the client’s real name, "Coda."',
        mentalHook: 'Always look over your shoulder in elevators and airplanes.',
      },
      {
        id: 'mw-ch04-fc5',
        category: 'adaptation',
        front: 'How does the McKinsey Way distinguish between a "Hank" liability and a "Carlos" liability on a client team?',
        back: 'Hank is unskilled/lazy but harmless (work around him and keep him friendly); Carlos is a politically connected saboteur with an opposing agenda (escalate and remove him).',
        mentalHook: 'Befriend and buffer Hank; escalate and neutralize Carlos.',
      },
      {
        id: 'mw-ch04-fc6',
        category: 'adaptation',
        front: 'What prevents a strategic blue book from ending up on the "Betamax remainder shelf"?',
        back: 'Cascading buy-in across all organizational levels (board, middle managers, line workers/fleet drivers) and writing a rigorous implementation plan (what, by whom, and when).',
        mentalHook: 'Cascade buy-in to the shop floor + Tom (Mar 1), Dick (Mar 15), Harriet (Apr 1).',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mw-ch04-feyn1',
        conceptTitle: 'Prewiring & Zelazny One-Message Chart Architecture',
        prompt:
          'Explain how a McKinsey team prepares and delivers a high-stakes boardroom presentation, integrating Prewiring, the 24-Hour Print Rule, and Gene Zelazny’s One-Message/Waterfall chart principles.',
        rubricChecklist: [
          'Explains "Prewiring Everything": walking each stakeholder (e.g., Gadgets Director, CFO, Widgets SVP) through the findings privately beforehand so the board meeting has zero surprises.',
          'Explains diminishing marginal returns and the 24-hour print deadline to avoid 4 a.m. copier-room exhaustion (plus pacing/stapling the blue book).',
          'Details Zelazny’s "One Message Per Chart" rule using the Acme Widget 1998 Income Statement (Figures 11-1 and 11-2 showing two different action leads on the same underlying numbers, plus lower-left source attribution).',
          'Describes how a Waterfall Chart uses floating positive and negative columns from a zero baseline to show stock-and-flow transitions.',
        ],
        modelExplanation:
          'A successful board presentation is won days before the meeting starts by "prewiring" every executive individually—walking the Gadgets Director, CFO, and Widgets SVP through the slides in private so their feedback is integrated and no one is ambushed in front of the CEO. To ensure the team arrives sharp, slide changes stop 24 hours before the meeting rather than at 4 a.m. over a minor typo. Inside the blue book, every chart follows Gene Zelazny’s rule of one message per chart: rather than a generic "1998 Income Statement" label, the top lead states the specific takeaway ("Advertising Is Acme’s Second Largest Expense" vs "Pretax Profit Doubled in 1998") with the source at the lower left, while Waterfall charts visually bridge positive and negative flows from Net Sales to Net Income.',
      },
      {
        id: 'mw-ch04-feyn2',
        conceptTitle: 'Client Co-Ownership, Liability Triage & Multi-Tier Implementation',
        prompt:
          'Describe how to turn a skeptical client organization into an execution engine, contrasting Morty, Hank, and Carlos, explaining Suzanne Tosini’s model handoff, and detailing multi-tier implementation.',
        rubricChecklist: [
          'Explains how to win over client team members like Morty (the Brooklyn mainframe programmer) by including them in high-level interviews and valuing their expertise.',
          'Contrasts the two types of "liability" team members: harmlessly unskilled "Hank" (whom you buffer and include socially) versus politically malicious "Carlos" (whom you escalate to remove).',
          'Recounts Suzanne Tosini’s real-estate cashflow model story ("It was their model") to illustrate why letting the client take credit guarantees ongoing use.',
          'Explains cascading buy-in from the board down to middle managers and fleet drivers, paired with a foolproof implementation schedule (Tom on March 1, Dick on March 15, Harriet on April 1).',
        ],
        modelExplanation:
          'Blue books end up on the Betamax shelf unless the client organization truly owns the solution. First, turn overlooked client staff like Morty the mainframe programmer into enthusiastic insiders by bringing them into front-office interviews. Second, triage "liability" team members: work gently around a harmlessly inept "Hank," but immediately escalate to top sponsors to neutralize a political saboteur like "Carlos." Third, follow Suzanne Tosini’s lead and let the client team present the analytical model to their bosses as "our model." Finally, present the tailored case for change across every tier—from the board to middle managers and fleet drivers—and lock in a foolproof schedule naming exactly who does what by when (Tom on March 1, Dick on March 15, Harriet on April 1).',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mw-ch04-n1',
        label: 'Prewired Boardroom Readout',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition: 'Walking every stakeholder through findings privately beforehand and freezing print production 24 hours early.',
        whyItMatters: 'Prevents boardroom ambushes and eliminates 4 a.m. exhaustion.',
      },
      {
        id: 'mw-ch04-n2',
        label: 'One-Message Action-Lead Chart',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition: 'Zelazny visual standard pairing a single takeaway sentence at the top with simple B&W bars and lower-left source attribution.',
        whyItMatters: 'Turns raw tables into unmistakable causal arguments.',
      },
      {
        id: 'mw-ch04-n3',
        label: 'Waterfall Stock-and-Flow Bridge',
        category: 'architecture',
        chapterNumber: 4,
        importance: 2,
        definition: 'Floating positive and negative columns starting from zero that visually bridge net financial or operational flows.',
        whyItMatters: 'Makes multi-step additions and deductions immediately scannable.',
      },
      {
        id: 'mw-ch04-n4',
        label: 'Brevity-Thoroughness-Structure & OpSec',
        category: 'security',
        chapterNumber: 4,
        importance: 2,
        definition: 'Scripting 3-point voicemails, canceling empty meetings 45 minutes early, and guarding client confidentiality in public.',
        whyItMatters: 'Maintains high-velocity internal comms while preventing Code-A/Coda leaks.',
      },
      {
        id: 'mw-ch04-n5',
        label: 'Client Co-Ownership & Liability Triage',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition: 'Empowering Morty, buffering inept Hanks, neutralizing political Carloses, and letting the client claim "It was our model."',
        whyItMatters: 'Ensures the client team champions the tool after McKinsey departs.',
      },
      {
        id: 'mw-ch04-n6',
        label: 'Multi-Tier Who-What-When Execution',
        category: 'optimization',
        chapterNumber: 4,
        importance: 1,
        definition: 'Cascading buy-in down to line workers and assigning explicit calendar milestones (Tom Mar 1, Dick Mar 15, Harriet Apr 1).',
        whyItMatters: 'Prevents the strategy from gathering dust on the Betamax remainder shelf.',
      },
    ],
    edges: [
      {
        source: 'mw-ch04-n2',
        target: 'mw-ch04-n1',
        relationship: 'optimizes',
        explanation: 'Action-lead slides make 1-on-1 prewiring walk-throughs crystal clear.',
      },
      {
        source: 'mw-ch04-n3',
        target: 'mw-ch04-n2',
        relationship: 'part_of',
        explanation: 'Visualizes net income or account bridges within the one-message chart system.',
      },
      {
        source: 'mw-ch04-n4',
        target: 'mw-ch04-n1',
        relationship: 'prerequisite_for',
        explanation: 'Prevents Code-A/Coda leaks and 4 a.m. communication chaos.',
      },
      {
        source: 'mw-ch04-n5',
        target: 'mw-ch04-n6',
        relationship: 'prerequisite_for',
        explanation: 'Psychological ownership drives post-study execution.',
      },
      {
        source: 'mw-ch04-n1',
        target: 'mw-ch04-n6',
        relationship: 'prerequisite_for',
        explanation: 'Zero-surprise board approval launches shop-floor rollout.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 13,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Part III (Chapters 10–13: Presentations, Charts, Internal Comms, Working with Clients).',
  },
};
