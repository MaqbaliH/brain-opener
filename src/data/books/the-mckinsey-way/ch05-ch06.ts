import { ChapterMastery } from '../../../types/book';

export const mwCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Part IV: Surviving at McKinsey (Mentors, Road Survival, Administrative Lifelines, Case Recruiting & Life Rules)',
  subtitle: 'Hitching your wagon to an active sponsor, respecting travel gatekeepers and assistants, decomposing case interviews, and laying down three boundary rules.',
  readingTimeMinutes: 8,
  sourceWordCount: 4687,
  executiveThesis:
    'Sustaining peak analytical performance inside an 80-to-100-hour-per-week organization requires deliberate personal operating systems across five dimensions: recruiting your own senior mentor rather than relying on assigned bureaucracy (Chapter 14); turning grueling road travel into planned adventure while treating gatekeepers with respect (Chapters 15–16); empowering administrative assistants as autonomous lifelines (Chapter 17); evaluating candidates via structured decomposition in case interviews plus Abe Bleiberg’s team-fit filter (Chapter 18); and enforcing three non-negotiable personal boundary rules to preserve a life outside work (Chapter 19).',
  paradigmShift: {
    oldWay:
      'Waiting passively for an officially assigned HR mentor, treating flight attendants and secretaries like servants, memorizing canned scripts for case interviews, and letting 100-hour workweeks consume every weekend and home evening.',
    newWay:
      'Hitching your wagon to an Engagement Director you actively work for, treating support staff and travel gatekeepers with genuine respect, decomposing unfamiliar cases from first principles, and locking in one off-limits day per week.',
    whyItChanged:
      'Assigned mentors get transferred or overloaded with 10 mentees, mistreated assistants and gatekeepers can make a traveler’s life hell, scripted interview monologues collapse under interruption, and boundaryless schedules guarantee burnout.',
  },
  mentalModels: [
    {
      id: 'mw-ch05-mm1',
      name: 'Earned Sponsorship Over Assigned Mentorship ("Hitch Your Wagon to a Star")',
      tagline: 'Official mentorship programs are a lottery; build real chemistry by delivering excellence for a senior leader who staffs and defends you.',
      naiveIntuition:
        'Because the Firm assigns every consultant an official partner mentor on week one, your career progression will be automatically guided.',
      firstPrinciplesReality:
        'Ethan’s first assigned mentor bought him one arugula lunch before transferring to Mexico, and his second had 9 or 10 mentees and only read pro-forma reviews; real mentorship happened when Ethan "hitched his wagon" to the Engagement Director who recruited him, delivering strong work on his studies in exchange for staffing protection, candid advice, and promotion backing.',
      howToApply:
        'Identify a senior leader whose judgment you respect, seek to work directly on their engagements, deliver consistent singles for them, and ask for high-leverage advice without becoming a daily pest.',
    },
    {
      id: 'mw-ch05-mm2',
      name: 'The Gatekeeper Respect & Lifeline Leverage Law',
      tagline: 'Flight attendants, concierges, and administrative assistants hold real operational power—treat them with respect and give assistants room to grow.',
      naiveIntuition:
        'Impatient, demanding consultants get faster service on the road, and secretaries or junior temps are merely there to type and run the copier.',
      firstPrinciplesReality:
        'As Eric Hartz demonstrated, treating flight attendants, hotel concierges, and client assistants with genuine respect unlocks upgrades and carry-on help while lowering stress; internally, a great secretary like Sandy is a consultant’s lifeline when 500 miles from home—handling schedules, expenses, and client interfaces—whereas a mishandled or underperforming secretary loses faxes and ruins client relationships.',
      howToApply:
        'Give administrative assistants and junior staff clear instructions, keep them informed of your whereabouts, delegate real decision-making initiative over presentations and schedules, and treat every travel gatekeeper as a respected ally.',
    },
    {
      id: 'mw-ch05-mm3',
      name: 'Case Decomposition & The Three Life-Boundary Rules',
      tagline: 'In interviews, test method over memorized numbers; on the job, enforce one off-limits day, zero work at home, and advance weekend planning.',
      naiveIntuition:
        'Winning a McKinsey offer requires getting the exact numerical answer to "How many gas stations are in the US?" and succeeding afterward requires working 7 days a week from both the office and the living room.',
      firstPrinciplesReality:
        'Case interviewers care about structured decomposition, not exact numbers (Ethan was off by a factor of 3 on the 275M-population / 110M-household / 1.8-cars gas-station estimate and still got the offer, whereas "Harvard Man" was rejected for saying "I’ll get back to that question in 10 minutes" and Abe Bleiberg rejected brilliant jerks); once hired, surviving 80-hour weeks requires three strict rules: make one day a week off-limits, never take work home, and plan weekend social life in advance.',
      howToApply:
        'Break unfamiliar estimation cases into transparent demographic/unit assumptions while staying conversational, and protect personal sanity by declaring Saturday or Sunday off-limits and keeping work physically inside the office.',
    },
  ],
  customDiagrams: [
    {
      id: 'mw-ch05-svg-1',
      title: 'The McKinsey Recruiting & Case Interview Sieve: Method, Polish Penetration & Team Fit',
      subtitle: 'Fermi case decomposition, penetrating rehearsed scripts, and Abe Bleiberg’s team-chemistry filter.',
      bierutCaption:
        'Candidates pass through three sequential filters where structured Fermi decomposition and genuine conversational adaptability triumph over rehearsed Harvard monologues and arrogant brilliance.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="85" x2="800" y2="85" />
    <line x1="0" y1="215" x2="800" y2="215" />
    <line x1="0" y1="345" x2="800" y2="345" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 5.1 — RECRUITING MCKINSEY STYLE: THE THREE SELECTION FILTERS (CHAPTER 18)</text>
  <rect x="25" y="60" width="235" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="88" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">1. CASE DECOMPOSITION</text>
  <rect x="40" y="106" width="205" height="145" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="52" y="126" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">"How Many US Gas Stations?"</text>
  <text x="52" y="146" fill="#e2e8f0" font-family="monospace" font-size="9.5">• US Pop ≈ 275M people</text>
  <text x="52" y="162" fill="#e2e8f0" font-family="monospace" font-size="9.5">• ÷ 2.5/household = 110M HH</text>
  <text x="52" y="178" fill="#e2e8f0" font-family="monospace" font-size="9.5">• × 1.8 cars/HH = 198M cars</text>
  <text x="52" y="194" fill="#e2e8f0" font-family="monospace" font-size="9.5">• ÷ Cars per station = Total</text>
  <text x="52" y="218" fill="#10b981" font-family="monospace" font-size="9.5" font-weight="bold">Off by 3× = STILL HIRED!</text>
  <text x="52" y="234" fill="#94a3b8" font-family="monospace" font-size="9">Method &gt; Exact Number</text>
  <rect x="40" y="266" width="205" height="96" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="52" y="286" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" font-weight="bold">Jason Klein’s Stress Test</text>
  <text x="52" y="304" fill="#cbd5e1" font-family="monospace" font-size="9">Throw complex info at once:</text>
  <text x="52" y="320" fill="#fda4af" font-family="monospace" font-size="9">• Reject those who freeze</text>
  <text x="52" y="336" fill="#10b981" font-family="monospace" font-size="9">• Hire those who dig deeper</text>
  <path d="M 260 220 L 285 220" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="285" y="60" width="230" height="320" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="300" y="88" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">2. PENETRATE THE POLISH</text>
  <rect x="300" y="106" width="200" height="145" rx="6" fill="#311024" stroke="#f43f5e" />
  <text x="312" y="126" fill="#fda4af" font-family="sans-serif" font-size="10.5" font-weight="bold">The "Harvard Man" Trap</text>
  <text x="312" y="146" fill="#cbd5e1" font-family="monospace" font-size="9">Delivers rehearsed monologue</text>
  <text x="312" y="160" fill="#cbd5e1" font-family="monospace" font-size="9">on virtues &amp; life story.</text>
  <text x="312" y="180" fill="#f59e0b" font-family="monospace" font-size="9">Hamish interrupts: "How do</text>
  <text x="312" y="194" fill="#f59e0b" font-family="monospace" font-size="9">you rate your analytics?"</text>
  <text x="312" y="214" fill="#fda4af" font-family="monospace" font-size="9" font-weight="bold">Reply: "I’ll get back to</text>
  <text x="312" y="228" fill="#fda4af" font-family="monospace" font-size="9" font-weight="bold">that in 10 minutes." → REJECT</text>
  <rect x="300" y="266" width="200" height="96" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="312" y="286" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">Real-Time Agility</text>
  <text x="312" y="304" fill="#cbd5e1" font-family="monospace" font-size="9">Drop the script immediately</text>
  <text x="312" y="320" fill="#cbd5e1" font-family="monospace" font-size="9">when the interviewer pivots</text>
  <text x="312" y="336" fill="#cbd5e1" font-family="monospace" font-size="9">to a new analytical angle.</text>
  <path d="M 515 220 L 540 220" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="540" y="60" width="235" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="555" y="88" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">3. ABE BLEIBERG TEAM FIT</text>
  <rect x="555" y="106" width="205" height="145" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="567" y="126" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">The $1M Nasty-Genius Filter</text>
  <text x="567" y="146" fill="#cbd5e1" font-family="monospace" font-size="9.5">Everyone in the interview</text>
  <text x="567" y="160" fill="#cbd5e1" font-family="monospace" font-size="9.5">pool is smart enough.</text>
  <text x="567" y="180" fill="#e2e8f0" font-family="monospace" font-size="9.5">"He’s incredibly brilliant,</text>
  <text x="567" y="194" fill="#e2e8f0" font-family="monospace" font-size="9.5">and I wouldn’t have him on</text>
  <text x="567" y="208" fill="#e2e8f0" font-family="monospace" font-size="9.5">my team for a million bucks."</text>
  <text x="567" y="230" fill="#38bdf8" font-family="monospace" font-size="9">Chemistry + Humility Win</text>
  <rect x="555" y="266" width="205" height="96" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="567" y="286" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">Non-Traditional Talent</text>
  <text x="567" y="304" fill="#cbd5e1" font-family="monospace" font-size="9">Doctors, scientists, JDs &amp;</text>
  <text x="567" y="320" fill="#cbd5e1" font-family="monospace" font-size="9">MBAs who combine structural</text>
  <text x="567" y="336" fill="#cbd5e1" font-family="monospace" font-size="9">rigor with business judgment.</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Method Over Arithmetic Precision',
          explanation:
            'In the US gas-station case, decomposing 275M people into 110M households and 198M cars proves analytical structure even if the final estimate is off by a factor of three.',
        },
        {
          step: '02',
          label: 'The Harvard Monologue Failure',
          explanation:
            'Refusing to break a rehearsed self-promotional script when interrupted by the interviewer signals rigidity that will fail in front of real clients.',
        },
        {
          step: '03',
          label: 'Rejecting the Nasty Genius',
          explanation:
            'Because consulting happens in tight 4–6 person teams under intense pressure, interviewers screen out arrogant candidates regardless of their IQ.',
        },
      ],
    },
    {
      id: 'mw-ch05-svg-2',
      title: 'Personal Sustainability Architecture: Mentors, Lifelines, Road Kit & The Three Life Rules',
      subtitle: 'Operating rules for surviving 80-to-100-hour weeks without burning out.',
      bierutCaption:
        'Surviving 80-to-100-hour weeks without burning out requires pairing earned senior sponsorship and empowered administrative lifelines with strict weekly boundary rules.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="85" x2="800" y2="85" />
    <line x1="0" y1="230" x2="800" y2="230" />
    <line x1="400" y1="0" x2="400" y2="420" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 5.2 — SURVIVING HIGH-INTENSITY KNOWLEDGE WORK (CHAPTERS 14–17 &amp; 19)</text>
  <rect x="25" y="60" width="355" height="155" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="86" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">1. FIND YOUR OWN MENTOR (CH 14)</text>
  <text x="42" y="108" fill="#fda4af" font-family="monospace" font-size="9.5">• Assigned Mentor #1 → Moved to Mexico</text>
  <text x="42" y="124" fill="#fda4af" font-family="monospace" font-size="9.5">• Assigned Mentor #2 → Overloaded (10 mentees)</text>
  <text x="42" y="146" fill="#10b981" font-family="sans-serif" font-size="10.5" font-weight="bold">Fix: Hitch Your Wagon to an Active ED</text>
  <text x="42" y="164" fill="#cbd5e1" font-family="monospace" font-size="9.5">Deliver great work on his studies → He backs</text>
  <text x="42" y="178" fill="#cbd5e1" font-family="monospace" font-size="9.5">you on staffing, reviews, and promotions.</text>
  <text x="42" y="198" fill="#94a3b8" font-family="monospace" font-size="9">Rule: Don’t go to the well so often you become a pest.</text>
  <rect x="420" y="60" width="355" height="155" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="437" y="86" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">2. ASSISTANT AS LIFELINE (CH 17)</text>
  <text x="437" y="108" fill="#cbd5e1" font-family="monospace" font-size="9.5">• 500 miles from home, Sandy is your anchor</text>
  <text x="437" y="124" fill="#cbd5e1" font-family="monospace" font-size="9.5">• Clear instructions + always share location</text>
  <text x="437" y="144" fill="#38bdf8" font-family="sans-serif" font-size="10.5" font-weight="bold">Delegate Real Initiative &amp; Respect</text>
  <text x="437" y="162" fill="#cbd5e1" font-family="monospace" font-size="9.5">Let assistants &amp; junior temps make decisions on</text>
  <text x="437" y="176" fill="#cbd5e1" font-family="monospace" font-size="9.5">presentations, schedules &amp; client comms.</text>
  <text x="437" y="198" fill="#94a3b8" font-family="monospace" font-size="9">Career path: Associates → SEMs → Directors / Admin Mgrs</text>
  <rect x="25" y="245" width="355" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="42" y="271" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">3. SURVIVING ON THE ROAD (CH 15–16)</text>
  <text x="42" y="292" fill="#e2e8f0" font-family="monospace" font-size="9.5">• Attitude: Flint winter / Pebble Beach golf</text>
  <text x="42" y="308" fill="#e2e8f0" font-family="monospace" font-size="9.5">• Eric Hartz Rule: Respect gatekeepers (win/win)</text>
  <text x="42" y="324" fill="#e2e8f0" font-family="monospace" font-size="9.5">• PTM + Itinerary, Contact List &amp; Good Book</text>
  <text x="42" y="340" fill="#38bdf8" font-family="monospace" font-size="9.5">• Tools: Graph pad, HP 12C calculator, OAG</text>
  <text x="42" y="356" fill="#94a3b8" font-family="monospace" font-size="9">Never store bags in the hotel employee smoking room!</text>
  <rect x="420" y="245" width="355" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="437" y="271" fill="#fda4af" font-family="monospace" font-size="11" font-weight="bold">4. LAY DOWN 3 LIFE RULES (CH 19)</text>
  <rect x="437" y="284" width="320" height="96" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="449" y="304" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold">1. Make One Day a Week Off-Limits (Sat/Sun)</text>
  <text x="449" y="324" fill="#38bdf8" font-family="sans-serif" font-size="10" font-weight="bold">2. Never Take Work Home (Stay 1 hr late instead)</text>
  <text x="449" y="344" fill="#f59e0b" font-family="sans-serif" font-size="10" font-weight="bold">3. Plan Weekend Social Life in Advance</text>
  <text x="449" y="366" fill="#94a3b8" font-family="monospace" font-size="9">Fallback Rule #4: Have a doorman for clean laundry.</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Earned vs. Assigned Mentorship',
          explanation:
            'Because formal mentor assignments frequently stall due to transfers or overload, associates must proactively build an alliance with a senior partner they work for.',
        },
        {
          step: '02',
          label: 'Eric Hartz’s Respect Principle',
          explanation:
            'Treating flight attendants, concierges, and client assistants with warmth and respect unlocks discretionary help while keeping personal stress low.',
        },
        {
          step: '03',
          label: 'The Three Boundary Rules',
          explanation:
            'Protecting one weekend day, keeping work physically out of the home, and scheduling social plans before Friday night prevents 80-hour schedules from erasing your personal life.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'mw-ch05-sec-1',
      sectionNumber: '5.1',
      title: 'Find Your Own Mentor & Survive on the Road',
      subtitle: 'Hitching Your Wagon to an Active Senior Sponsor and Respecting Travel Gatekeepers',
      coreMechanism:
        'While McKinsey assigns every consultant an official partner mentor on week one, formal mentorship is a matter of luck: Ethan’s first mentor transferred to Mexico six months after one arugula lunch, and his second had 9 or 10 mentees. Instead, Ethan "hitched his wagon to a star" by doing most of his project work with the Engagement Director who recruited him—earning staffing protection, candid advice, and promotion backing without going to the well so often that he became a pest. When traveling across the country (like Hamish McDermott’s six winter months in Detroit), survival requires a tourist/adventure attitude (Abe Bleiberg in Flint, Michigan; Jason Klein playing Pebble Beach), light carry-on planning (verifying hotel bag storage is not the employee smoking room, as Adam Gold learned!), and Eric Hartz’s rule: **treat everyone—flight attendants, concierges, and client assistants—with tremendous respect**. Alongside Passport, Tickets, and Money (PTM), always carry your itinerary, contact numbers, a good book, a pad of graph paper, and an HP 12C calculator.',
      keyTakeaways: [
        'Build an organic mentorship by delivering exceptional work for a senior leader you respect rather than relying on an HR-assigned mentor.',
        'Follow Eric Hartz’s rule by treating flight attendants, concierges, and client assistants with total respect—lowering stress while unlocking their help.',
        'Pack light with carry-on luggage containing your itinerary, contact list, graph paper pad, HP 12C calculator, and a good book.',
      ],
      commonPitfalls: [
        'Waiting passively for an overloaded assigned mentor to advocate for your career, or bothering your sponsor daily with trivial complaints.',
        'Acting demanding and impatient toward airline gate agents and client receptionists, guaranteeing friction and zero discretionary help.',
        'Letting out-of-town travel collapse into an uninterrupted loop of working, eating, and sleeping without checking hotel bag storage.',
      ],
    },
    {
      id: 'mw-ch05-sec-2',
      sectionNumber: '5.2',
      title: 'A Good Assistant Is a Lifeline',
      subtitle: 'How Respect, Clear Instructions, and Delegated Initiative Multiply Effectiveness',
      coreMechanism:
        'In McKinsey’s New York office, competition to hire top secretaries is as intense as MBA recruiting, supported by training, annual retreats, and a real career path from supporting associates up to SEMs, directors, and administrative management. When a consultant is 500 miles from home for six months, a great assistant is a lifeline—handling time sheets, paying credit card bills, and sending flowers after a missed date (whereas an underperforming secretary loses files, misdirects faxes, or accidentally tells Boyfriend #1 that a consultant is at lunch with Boyfriend #2). Ethan kept his outstanding secretary, Sandy, motivated through three rules that apply equally to part-time temps or junior analysts today: treat them with genuine respect, give crystal-clear instructions while keeping them informed of your location all day, and give them room to show initiative and make decisions on presentations, schedules, and client communications.',
      keyTakeaways: [
        'Treat your administrative assistant, temp, or junior analyst as an indispensable professional partner rather than a clerical subordinate.',
        'Provide clear instructions and constant location updates so your assistant can route urgent client or team messages seamlessly.',
        'Delegate real ownership over presentation assembly, scheduling, and stakeholder coordination so support staff and junior members grow.',
      ],
      commonPitfalls: [
        'Blaming an assistant or junior analyst for an error caused by your own vague, last-minute instructions.',
        'Disappearing for hours during the workday without letting your assistant know how to reach you in a client emergency.',
        'Micromanaging every keystroke instead of nurturing junior staff to take initiative and expand their capabilities.',
      ],
    },
    {
      id: 'mw-ch05-sec-3',
      sectionNumber: '5.3',
      title: 'Recruiting McKinsey Style & Laying Down Rules to Have a Life',
      subtitle: 'Mastering Case Interview Decomposition, Team Fit, and the Three Rules Against Burnout',
      coreMechanism:
        'McKinsey recruits top MBAs/JDs and non-traditional talent (doctors, scientists, politicians) using the **case interview** to test structured analytical method over exact numbers. Asked "How many gas stations are there in the US?", Ethan estimated 275M people $\\div$ 2.5 per household = 110M households $\\times$ 1.8 cars = 198M cars, was off by a factor of 3, and passed because his method was sound. Interviewers also test who digs deeper under complex data (Jason Klein), who drops rehearsed scripts when interrupted (unlike "Harvard Man," who told Hamish McDermott "I’ll get back to that question in 10 minutes"), and who passes Abe Bleiberg’s team-fit screen ("He’s incredibly brilliant, and I wouldn’t have him on my team for a million bucks"). Once working 80+ hours per week, preserving a personal life requires **Three Rules**: (1) make one day a week (Saturday or Sunday) off-limits, (2) never take work home (stay an hour later at the office instead), and (3) plan weekend social life in advance.',
      keyTakeaways: [
        'Approach case interviews by breaking the problem into MECE components and explicit assumptions—structured method matters far more than exact numbers.',
        'Drop rehearsed interview monologues immediately when an interviewer pivots, and screen out arrogant geniuses who fail team chemistry.',
        'Protect your personal life during 80-hour workweeks by locking in one off-limits day per week, keeping work out of your home, and scheduling weekend plans in advance.',
      ],
      commonPitfalls: [
        'Freezing when a case interviewer says "I don’t know, you tell me," or clinging to a memorized 10-minute self-introduction when interrupted.',
        'Hiring a "superintelligent, nasty person" who poisons the 4-person team room during high-pressure engagements.',
        'Bringing spreadsheets home every night to ignore your family and waiting until Friday at 9 p.m. at the airport to think about weekend plans.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Career & Life Sustainability in High-Intensity Organizations: Burnout Grinder vs. Scripted Soloist vs. McKinsey Survival System',
      description:
        'Evaluating how professionals manage mentorship, support staff, case interviews, and personal boundaries under 80-hour-per-week pressure.',
      headers: ['Dimension', 'Boundaryless Burnout Grinder', 'Arrogant Scripted Soloist', 'McKinsey Survival System (Part IV)'],
      rows: [
        [
          'Mentorship Strategy',
          'Waits passively for HR-assigned mentor who transfers away',
          'Assumes solo brilliance needs no senior sponsor',
          'Hitches wagon to an active ED; delivers great work for backing',
        ],
        [
          'Support Staff & Gatekeepers',
          'Gives vague instructions; disappears without location updates',
          'Acts demanding toward flight attendants and secretaries',
          'Follows Eric Hartz respect rule; empowers assistant like Sandy',
        ],
        [
          'Case Interview Execution',
          'Freezes when flooded with complex, ambiguous data',
          'Recites rigid Harvard script ("I’ll answer in 10 minutes")',
          'Decomposes 275M pop → 110M HH → 198M cars; warm team fit',
        ],
        [
          'Work-Life Boundaries (80+ Hrs)',
          'Works 7 days/week; brings laptops home every night',
          'Cancels all personal commitments without rules',
          'Enforces 1 off-limits day/wk, zero work at home, advance planning',
        ],
      ],
      verdictRule:
        'Hitch your wagon to an active senior mentor, treat every assistant and travel gatekeeper with respect, decompose unfamiliar problems transparently, and enforce one off-limits day per week with zero work brought home.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mw-ch05-scen-1',
      title: 'Evaluating Two Final-Round Candidates via Case Decomposition and the Bleiberg Team-Fit Filter',
      roleAndContext: 'Management Consulting Recruiting Docket — Final-Round Campus Interviews',
      symptomOrFailure:
        'An interviewing manager must choose between Candidate A (a polished top-tier MBA who recites a rehearsed 10-minute life monologue and acts condescending toward support staff) and Candidate B (a scientist who is off by a factor of 3 on the US gas-station estimate but decomposes the math cleanly and listens well).',
      naiveFixAndWhyItFails:
        'Hiring Candidate A for his resume polish and rejecting Candidate B for missing the exact number of US gas stations, which places an inflexible, toxic ego into a 4-person team room.',
      firstPrinciplesSolution:
        'Apply Hamish McDermott’s script-interruption test, Jason Klein’s deep-digging case test, and Abe Bleiberg’s team-fit filter ("I wouldn’t have a nasty genius on my team for a million bucks"): reject Candidate A when he refuses to break his monologue, and hire Candidate B because his 275M-to-110M-households decomposition proves structural analytical power.',
      measurableOutcome:
        'Candidate B thrives in collaborative client engagements and rapidly masters business modeling, while the team avoids a toxic interpersonal meltdown.',
    },
    {
      id: 'mw-ch05-scen-2',
      title: 'Preventing Burnout and Administrative Chaos on a Six-Month Cross-Country Engagement',
      roleAndContext: 'Wall Street & Midwest Manufacturing Dual-Study Schedule — 80-Hour Workweek',
      symptomOrFailure:
        'An associate commuting weekly to a Midwest client is losing client faxes, getting bumped from overbooked flights, working every Saturday and Sunday at home, and watching his personal relationships collapse.',
      naiveFixAndWhyItFails:
        'Yelling at airline gate agents and the shared office secretary while promising to "catch up on life after the six-month study ends," which escalates stress and leads to burnout before month four.',
      firstPrinciplesSolution:
        'Implement the Part IV survival protocol: brief the secretary clearly every morning with exact contact windows and delegate presentation coordination to her; apply Eric Hartz’s respect principle with flight crews and hotel staff; and lay down the Three Life Rules with the Engagement Manager (Sunday strictly off-limits, zero work brought into the apartment, and Friday-Saturday social plans booked by Wednesday).',
      measurableOutcome:
        'Administrative errors drop to zero, travel friction disappears, the Engagement Manager respects the Sunday boundary, and the associate sustains high performance across the entire six-month study.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mw-ch05-q1',
        scenarioPrompt:
          'Why did Ethan Rasiel’s official McKinsey mentor assignments fail to guide his career, and what worked instead?',
        options: [
          {
            label: 'A',
            text: 'McKinsey prohibited partners from speaking to associates; he hired an external career coach instead.',
            isCorrect: false,
            explanation: 'McKinsey had an official mentoring system, but its execution was a lottery.',
          },
          {
            label: 'B',
            text: 'His first assigned mentor transferred to Mexico after one lunch and his second had 9–10 mentees; instead, he "hitched his wagon" to the Engagement Director who recruited him by doing strong work on his studies.',
            isCorrect: true,
            explanation: 'Formal mentoring programs are a lottery; real sponsorship comes from working directly with a senior partner you respect so they advocate for your staffing, reviews, and promotion.',
          },
          {
            label: 'C',
            text: 'His official mentors only spoke German; he switched to the London office.',
            isCorrect: false,
            explanation: 'His first mentor moved to Mexico to open a new office.',
          },
          {
            label: 'D',
            text: 'Official mentors were only assigned to secretaries.',
            isCorrect: false,
            explanation: 'Every consultant from analyst to newer director was assigned an official mentor.',
          },
        ],
      },
      {
        id: 'mw-ch05-q2',
        scenarioPrompt:
          'What did Security First Network Bank president Eric Hartz identify as the single most effective survival habit when traveling and working at clients?',
        options: [
          {
            label: 'A',
            text: 'Always flying first class on the client’s expense account.',
            isCorrect: false,
            explanation: 'Upgrades were earned through polite rapport, not demanded.',
          },
          {
            label: 'B',
            text: 'Treating everyone—flight attendants, hotel concierges, and client assistants—with tremendous respect, which unlocks discretionary help and keeps your own stress level down.',
            isCorrect: true,
            explanation: 'Gatekeepers like flight attendants, concierges, and client assistants hold far more operational authority than arrogant travelers realize and eagerly help those who treat them with respect.',
          },
          {
            label: 'C',
            text: 'Packing three full-size suitcases for every overnight trip.',
            isCorrect: false,
            explanation: 'Rasiel advises packing light with hand luggage only whenever possible.',
          },
          {
            label: 'D',
            text: 'Refusing to leave your hotel room after 6 p.m.',
            isCorrect: false,
            explanation: 'Consultants should avoid letting road travel become a work-eat-sleep prison.',
          },
        ],
      },
      {
        id: 'mw-ch05-q3',
        scenarioPrompt:
          'In a McKinsey case interview asking "How many gas stations are there in the United States?", why did Ethan pass despite his final number being off by a factor of 3?',
        options: [
          {
            label: 'A',
            text: 'Because the interviewer didn’t know the real number either.',
            isCorrect: false,
            explanation: 'The interviewer knew the figure and told him afterward he was off by 3×.',
          },
          {
            label: 'B',
            text: 'Because case interviews test the structured method of breaking a problem into components and reasonable assumptions (population -> households -> cars) rather than arithmetic trivia.',
            isCorrect: true,
            explanation: 'Interviewers evaluate how a candidate decomposes an unfamiliar problem into MECE drivers and explicit assumptions, not whether their back-of-the-envelope guess hits the exact integer.',
          },
          {
            label: 'C',
            text: 'Because he promised to get back to the question in 10 minutes.',
            isCorrect: false,
            explanation: 'Saying "I’ll get back to that in 10 minutes" got "Harvard Man" rejected.',
          },
          {
            label: 'D',
            text: 'Because he brought a copy of the US Census to the interview.',
            isCorrect: false,
            explanation: 'He estimated US population at 275M from memory and used his HP 12C calculator.',
          },
        ],
      },
      {
        id: 'mw-ch05-q4',
        scenarioPrompt:
          'What are the "Three Rules" distilled from former McKinsey-ites for maintaining a personal life while working 80+ hours per week?',
        options: [
          {
            label: 'A',
            text: 'Sleep four hours a night, eat at your desk, and vacation once every five years.',
            isCorrect: false,
            explanation: 'Those habits accelerate burnout rather than preserving a life.',
          },
          {
            label: 'B',
            text: 'Make one day a week off-limits, don’t take work home, and plan ahead for weekends (plus Rule #4: have a doorman for clean laundry).',
            isCorrect: true,
            explanation: 'Setting clear expectations with your boss and family by protecting one weekend day, keeping work physically out of the home, and planning weekend social activities ahead of time preserves sanity.',
          },
          {
            label: 'C',
            text: 'Work from home three days a week, turn off voicemail after 5 p.m., and delegate all travel to junior analysts.',
            isCorrect: false,
            explanation: 'Rasiel’s rule is to keep work and home strictly separate.',
          },
          {
            label: 'D',
            text: 'Only date colleagues on the same engagement, live next door to the office, and work half-days on Saturdays.',
            isCorrect: false,
            explanation: 'One full weekend day must be off-limits unless it is a true emergency.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mw-ch05-fc1',
        category: 'adaptation',
        front: 'What does "hitching your wagon to a star" mean in Chapter 14?',
        back: 'Finding a senior partner or Engagement Director with whom you have chemistry, working repeatedly on their teams, and earning their sponsorship for assignments and promotions.',
        mentalHook: 'Earn a real sponsor through project work—don’t wait for HR mentorship.',
      },
      {
        id: 'mw-ch05-fc2',
        category: 'optimization',
        front: 'What happened when Adam Gold stored his extra travel bags at his hotel over the weekend without checking the room?',
        back: 'The hotel stored his bags in the employee smoking room, saturating all his clothes with smoke.',
        mentalHook: 'Always verify where the hotel stores your weekend bags!',
      },
      {
        id: 'mw-ch05-fc3',
        category: 'foundation',
        front: 'Beyond Passport, Tickets, and Money (PTM), what three items does Rasiel always carry on business travel, plus two classic McKinsey tools?',
        back: 'A copy of his itinerary, a list of names/numbers of everyone he is seeing, and a good book; plus a pad of graph paper and an HP 12C calculator.',
        mentalHook: 'PTM + Itinerary + Contacts + Book + Graph Pad + HP 12C.',
      },
      {
        id: 'mw-ch05-fc4',
        category: 'adaptation',
        front: 'What three practices make your relationship with an administrative assistant (or junior analyst) mutually successful?',
        back: 'Treat them with genuine respect, give clear instructions while always sharing where you can be reached, and give them room to show initiative and make decisions.',
        mentalHook: 'Respect + Clear instructions/location + Room for initiative.',
      },
      {
        id: 'mw-ch05-fc5',
        category: 'evaluation',
        front: 'Why did Hamish McDermott reject "Harvard Man" during a recruiting interview?',
        back: 'When Hamish interrupted the candidate’s rehearsed life-story monologue to ask about his analytical abilities, the candidate replied, "I’ll get back to that question in 10 minutes."',
        mentalHook: 'Never prioritize a memorized script over the person sitting across from you.',
      },
      {
        id: 'mw-ch05-fc6',
        category: 'evaluation',
        front: 'What was Abe Bleiberg’s rule for screening superintelligent but arrogant candidates?',
        back: '"He’s incredibly brilliant, and I wouldn’t have him on my team for a million bucks"—because consulting is team problem solving.',
        mentalHook: 'Team chemistry vetoes toxic brilliance.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mw-ch05-feyn1',
        conceptTitle: 'McKinsey Recruiting & Case Interview Decomposition',
        prompt:
          'Explain how McKinsey recruits and evaluates candidates, contrasting the US gas-station Fermi case, Jason Klein’s complexity test, "Harvard Man," and Abe Bleiberg’s personality filter.',
        rubricChecklist: [
          'Walks through the US gas-station case decomposition (275M pop / 2.5 per household = 110M households * 1.8 cars = 198M cars) to show why method beats being off by a factor of 3.',
          'Explains Jason Klein’s test of throwing complex information at a candidate at once to see who freezes versus who digs deeper.',
          'Recounts Hamish McDermott’s encounter with "Harvard Man" ("I’ll get back to that question in 10 minutes") to illustrate penetrating the polish.',
          'Explains Abe Bleiberg’s team-fit rule of rejecting brilliant, nasty candidates whom you wouldn’t want in a team room.',
        ],
        modelExplanation:
          'McKinsey recruiting hunts for two things: structured analytical ability and collaborative team fit. In a case interview—such as estimating the number of gas stations in the US—the interviewer cares about your decomposition method (275M people -> 110M households -> 198M cars -> stations needed) rather than whether your final figure is off by a factor of three. Interviewers like Jason Klein throw complex data at candidates to see who digs deeper instead of freezing, while Hamish McDermott interrupts rehearsed monologues to reject rigid candidates like "Harvard Man" who say "I’ll get back to that in 10 minutes." Finally, as Abe Bleiberg emphasized, because virtually every finalist is smart enough, the decisive test is rejecting nasty geniuses you wouldn’t want on your team for a million bucks.',
      },
      {
        id: 'mw-ch05-feyn2',
        conceptTitle: 'The Part IV High-Intensity Survival System',
        prompt:
          'Synthesize the personal survival system from Part IV across mentorship, road travel, administrative assistants, and the Three Rules for maintaining a life during 80-hour workweeks.',
        rubricChecklist: [
          'Contrasts the failure of assigned mentors (Mexico transfer / 10-mentee overload) with hitching your wagon to an active Engagement Director.',
          'Explains road survival: adventurous attitude (Flint winter / Pebble Beach), proper planning (carry-on, directions, avoiding the smoking storage room), and Eric Hartz’s gatekeeper respect principle.',
          'Details why a good assistant like Sandy is a lifeline 500 miles from home and how clarity, location updates, and delegated initiative empower support staff.',
          'States the Three Life Rules: make one day a week off-limits, don’t take work home, and plan weekend social life in advance.',
        ],
        modelExplanation:
          'Surviving a high-pressure 80-hour-per-week career requires proactive systems rather than passive endurance. First, instead of relying on an assigned mentor who may transfer or have ten mentees, hitch your wagon to a senior partner you actively work with. Second, on the road, combine an adventurous attitude and light carry-on planning with Eric Hartz’s rule of treating flight attendants, concierges, and client assistants with total respect. Third, treat your administrative assistant as a professional lifeline by giving clear instructions, sharing your location, and delegating real initiative. Finally, protect your sanity with three strict rules: lock in one off-limits day every week, stay an extra hour at the office rather than bringing work home, and schedule weekend social plans before Friday night.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mw-ch05-n1',
        label: 'Earned Sponsor ("Hitch Your Wagon")',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 1,
        definition: 'Securing career guidance and promotion backing by delivering strong work for an active senior partner.',
        whyItMatters: 'Outperforms lottery-style HR mentor assignments.',
      },
      {
        id: 'mw-ch05-n2',
        label: 'Administrative Lifeline Empowerment',
        category: 'optimization',
        chapterNumber: 5,
        importance: 2,
        definition: 'Giving assistants and junior staff respect, clear instructions, constant location updates, and room for initiative.',
        whyItMatters: 'Keeps operations running smoothly when the consultant is 500 miles away.',
      },
      {
        id: 'mw-ch05-n3',
        label: 'Gatekeeper Respect & Road Kit',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 2,
        definition: 'Eric Hartz’s win/win respect for travel/client staff paired with carry-on readiness (PTM, itinerary, graph pad, HP 12C).',
        whyItMatters: 'Lowers travel stress and unlocks discretionary upgrades and support.',
      },
      {
        id: 'mw-ch05-n4',
        label: 'Case Interview Fermi Decomposition',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 1,
        definition: 'Testing candidates on structured component breakdown and explicit assumptions rather than exact numerical trivia.',
        whyItMatters: 'Reveals how a candidate thinks through unfamiliar, complex problems.',
      },
      {
        id: 'mw-ch05-n5',
        label: 'Bleiberg Team-Fit & Script Penetration',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 1,
        definition: 'Interrupting rehearsed monologues ("Harvard Man") and rejecting arrogant geniuses unfit for 4-person teams.',
        whyItMatters: 'Protects team chemistry under 80-hour-per-week pressure.',
      },
      {
        id: 'mw-ch05-n6',
        label: 'The Three Life-Boundary Rules',
        category: 'foundation',
        chapterNumber: 5,
        importance: 1,
        definition: 'Making one day a week off-limits, never taking work home, and planning weekend social activities in advance.',
        whyItMatters: 'Prevents burnout and preserves personal relationships.',
      },
    ],
    edges: [
      {
        source: 'mw-ch05-n5',
        target: 'mw-ch05-n1',
        relationship: 'prerequisite_for',
        explanation: 'Collaborative hires earn long-term partner sponsorship.',
      },
      {
        source: 'mw-ch05-n4',
        target: 'mw-ch05-n5',
        relationship: 'part_of',
        explanation: 'Pairs analytical decomposition with conversational agility in recruiting.',
      },
      {
        source: 'mw-ch05-n2',
        target: 'mw-ch05-n3',
        relationship: 'optimizes',
        explanation: 'Home-office lifeline supports the consultant 500 miles away on the road.',
      },
      {
        source: 'mw-ch05-n3',
        target: 'mw-ch05-n6',
        relationship: 'prerequisite_for',
        explanation: 'Smart Fri/Mon travel planning preserves weekend boundaries.',
      },
      {
        source: 'mw-ch05-n6',
        target: 'mw-ch05-n1',
        relationship: 'optimizes',
        explanation: 'Prevents burnout across multi-year high-intensity careers.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Part IV (Chapters 14–19: Mentors, Road Survival, 3 Things, Assistants, Recruiting, Life Rules).',
  },
};

export const mwCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Part V: Life After McKinsey (The Baker’s Dozen Alumni Lessons, Professionalism & Rabbi Hillel’s Core)',
  subtitle: 'Institutionalizing the Wall Street Journal integrity test, the obligation to dissent, directionally correct action, and Hillel’s one-foot synthesis.',
  readingTimeMinutes: 8,
  sourceWordCount: 2934,
  executiveThesis:
    'Because the half-life of an entering McKinsey associate class is roughly two years, the ultimate test of the McKinsey Way is how its 5,000+ alumni deploy its operating principles as CEOs, CFOs, and operating leaders. Distilling the most valuable lessons and memories from a baker’s dozen of alumni reveals that sustainable organizational excellence rests on four enduring pillars: *The Wall Street Journal* ethical integrity test and client-first objectivity; meritocratic communication with the obligation to dissent; relentless execution of directionally correct solutions; and Rabbi Hillel’s "standing on one foot" synthesis of fact-based, structured thinking married to professional integrity.',
  paradigmShift: {
    oldWay:
      'Tolerating fuzzy thinking, obfuscatory corporate jargon, rigid hierarchy, yes-man deference, and "it can’t be done" fatalism while pushing ethical gray areas.',
    newWay:
      'Enforcing *The Wall Street Journal* front-page integrity test, breaking every amorphous problem into MECE constituents, eliminating hierarchy via the obligation to dissent, and driving blue books into concrete execution.',
    whyItChanged:
      'Anything that impedes efficient, honest communication destroys value; only structured thinking, clear language, meritocratic dissent, and professional objectivity allow an organization and its people to reach their full potential.',
  },
  mentalModels: [
    {
      id: 'mw-ch06-mm1',
      name: 'The Wall Street Journal Test & Professional Objectivity',
      tagline: 'Never take an action you wouldn’t want on page one of the WSJ, and stand your ground when a client dislikes the facts.',
      naiveIntuition:
        'In competitive business environments, cutting ethical corners in gray areas or telling an executive what he wants to hear is the fastest way to win contracts.',
      firstPrinciplesReality:
        'As Eric Hartz (President, Security First Network Bank) emphasized, preserving integrity requires applying *The Wall Street Journal* test to every gray area—if you would not be comfortable reading about your action on the front page of the *WSJ*, do not do it; paired with Jeff Sakaguchi’s rule of professional objectivity, putting the client first means standing your ground when facts contradict what the client wants to hear, or walking away when necessary.',
      howToApply:
        'Screen every ambiguous business decision through the front-page *Wall Street Journal* test, and never soften or falsify an analytical conclusion just to please a sponsor.',
    },
    {
      id: 'mw-ch06-mm2',
      name: 'Professionalism as Anti-Obfuscation & The Obligation to Dissent',
      tagline: 'Eliminate fuzzy jargon, impenetrable hierarchy, and yes-men by uniting structured thinking with the obligation to dissent.',
      naiveIntuition:
        'Large corporations naturally require deferential hierarchy and complex management jargon to coordinate thousands of employees.',
      firstPrinciplesReality:
        'Ethan Rasiel’s own #1 lesson from the Firm is that anything impeding efficient communication—fuzzy thinking, obfuscatory jargon, impenetrable hierarchy, and playing the "yes-man"—is anathema to a strong organization; what McKinsey calls "professionalism" is the combination of structured thinking, clear language, a "one firm, no stars" meritocracy (Gresham Brebach) with the obligation to dissent, and professional objectivity.',
      howToApply:
        'Strip jargon from all internal memos, require junior team members to exercise the obligation to dissent whenever data challenges a senior view, and focus resources while eliminating hierarchy during major change.',
    },
    {
      id: 'mw-ch06-mm3',
      name: 'Rabbi Hillel’s One-Foot Synthesis & Directionally Correct Execution',
      tagline: 'Every daunting problem can be broken into constituents, solved directionally, and turned from a blue book into action.',
      naiveIntuition:
        'When confronted with a messy, unprecedented operational crisis, corporate managers often conclude "It can’t be done" or wait for a 100% perfect solution before acting.',
      firstPrinciplesReality:
        'As Wesley Sand, Suzanne Tosini, Kristin Asleson, and Jason Klein observed, any amorphous problem can be structured into MECE constituents and solved deeply enough to take actions that are "directionally correct," someone has always tackled a similar problem before, and a blue book is just a blue book unless you execute it; like Rabbi Hillel teaching the Torah while a seeker stood on one foot, the entire McKinsey Way reduces to one core law: **Fact-based, structured thinking combined with professional integrity will get you on the road to your business goals. The rest derives from that. Go and learn.**',
      howToApply:
        'When facing an amorphous situation, immediately apply MECE structure, find the person who has solved a similar problem before, generate concrete end products, and drive directionally correct recommendations into execution.',
    },
  ],
  customDiagrams: [
    {
      id: 'mw-ch06-svg-1',
      title: 'The Baker’s Dozen Alumni Synthesis: Four Pillars of Post-McKinsey Operating Leadership',
      subtitle: 'Ethical integrity, directional structure, meritocratic dissent, and execution across 5,000+ alumni.',
      bierutCaption:
        'With a two-year associate half-life and 5,000+ alumni in executive roles, former McKinsey-ites converge on four operational pillars that distinguish high-performing enterprises from corporate bureaucracies.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="80" x2="800" y2="80" />
    <line x1="0" y1="225" x2="800" y2="225" />
    <line x1="400" y1="0" x2="400" y2="420" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 6.1 — THE BAKER’S DOZEN: MOST VALUABLE ALUMNI LESSONS (CHAPTER 20)</text>
  <rect x="25" y="55" width="355" height="155" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="82" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">1. INTEGRITY &amp; OBJECTIVITY</text>
  <text x="42" y="104" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Eric Hartz (Wall Street Journal Test):</text>
  <text x="42" y="120" fill="#cbd5e1" font-family="monospace" font-size="9">  Comfortable reading about it on Page 1 of WSJ?</text>
  <text x="42" y="140" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Jeff Sakaguchi &amp; Hamish McDermott:</text>
  <text x="42" y="156" fill="#cbd5e1" font-family="monospace" font-size="9">  Put client first via professional objectivity;</text>
  <text x="42" y="170" fill="#cbd5e1" font-family="monospace" font-size="9">  stand ground or walk away when facts demand it.</text>
  <text x="42" y="194" fill="#38bdf8" font-family="monospace" font-size="9">Honesty in business is non-negotiable.</text>
  <rect x="420" y="55" width="355" height="155" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="437" y="82" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">2. STRUCTURE &amp; DIRECTIONAL ACTION</text>
  <text x="437" y="104" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Wesley Sand &amp; Kristin Asleson:</text>
  <text x="437" y="120" fill="#cbd5e1" font-family="monospace" font-size="9">  Apply structure to amorphous situations; take</text>
  <text x="437" y="134" fill="#cbd5e1" font-family="monospace" font-size="9">  actions that are "directionally correct."</text>
  <text x="437" y="154" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Suzanne Tosini (Nothing New Under Sun):</text>
  <text x="437" y="170" fill="#cbd5e1" font-family="monospace" font-size="9">  Break any daunting problem into constituents;</text>
  <text x="437" y="184" fill="#cbd5e1" font-family="monospace" font-size="9">  someone has done it before—find that person!</text>
  <rect x="25" y="240" width="355" height="155" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="42" y="267" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="bold">3. MERITOCRACY &amp; OBLIGATION TO DISSENT</text>
  <text x="42" y="289" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Gresham Brebach &amp; Cleveland EM:</text>
  <text x="42" y="305" fill="#cbd5e1" font-family="monospace" font-size="9">  "One firm, no stars" meritocracy; focus</text>
  <text x="42" y="319" fill="#cbd5e1" font-family="monospace" font-size="9">  resources and eliminate hierarchy in change.</text>
  <text x="42" y="339" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Ethan Rasiel ("Professionalism"):</text>
  <text x="42" y="355" fill="#cbd5e1" font-family="monospace" font-size="9">  Banish fuzzy thinking, jargon &amp; yes-men;</text>
  <text x="42" y="369" fill="#cbd5e1" font-family="monospace" font-size="9">  enforce the obligation to dissent.</text>
  <rect x="420" y="240" width="355" height="155" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="437" y="267" fill="#fda4af" font-family="monospace" font-size="11" font-weight="bold">4. EXECUTION, END PRODUCTS &amp; TALENT</text>
  <text x="437" y="289" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• NY EM &amp; Associates:</text>
  <text x="437" y="305" fill="#cbd5e1" font-family="monospace" font-size="9">  "A blue book is just a blue book unless you</text>
  <text x="437" y="319" fill="#cbd5e1" font-family="monospace" font-size="9">  do something with it." Generate end products!</text>
  <text x="437" y="339" fill="#e2e8f0" font-family="sans-serif" font-size="10" font-weight="bold">• Jason Klein &amp; Abe Bleiberg:</text>
  <text x="437" y="355" fill="#cbd5e1" font-family="monospace" font-size="9">  Smart people beat a huge budget; reject</text>
  <text x="437" y="369" fill="#cbd5e1" font-family="monospace" font-size="9">  "It can’t be done" with team problem solving.</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'The Two-Year Associate Half-Life',
          explanation:
            'Because half of every entering associate class leaves within two years, McKinsey functions as an executive leadership academy populating 5,000+ alumni roles worldwide.',
        },
        {
          step: '02',
          label: 'The Wall Street Journal Test',
          explanation:
            'Eric Hartz’s ethical rule filters out gray-area compromises by asking whether you would be proud to read about your decision on page one of the WSJ.',
        },
        {
          step: '03',
          label: 'The Obligation to Dissent',
          explanation:
            'Rasiel defines McKinsey "professionalism" as replacing yes-man hierarchy and obfuscatory jargon with structured thinking, clear language, and mandatory factual dissent.',
        },
      ],
    },
    {
      id: 'mw-ch06-svg-2',
      title: 'Rabbi Hillel’s "Standing on One Foot" Synthesis of The McKinsey Way',
      subtitle: 'Converging Fact-Based Inquiry, MECE Structure, and Professional Integrity into one law.',
      bierutCaption:
        'Just as Rabbi Hillel distilled the entire Torah into a single golden rule while a seeker balanced on one foot, the entire McKinsey Way derives from three irreducible axioms.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <g stroke="#1e293b" stroke-width="1">
    <line x1="0" y1="90" x2="800" y2="90" />
    <line x1="0" y1="260" x2="800" y2="260" />
  </g>
  <text x="30" y="36" fill="#94a3b8" font-family="monospace" font-size="11" letter-spacing="1.5">FIG 6.2 — RABBI HILLEL’S ONE-FOOT DISTILLATION: THE ESSENTIAL CORE (CHAPTER 21)</text>
  <rect x="30" y="65" width="230" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
  <text x="145" y="95" fill="#38bdf8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">AXIOM 1: FACT-BASED</text>
  <text x="145" y="122" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">Proving &amp; double-proving every</text>
  <text x="145" y="138" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">recommendation with empirical</text>
  <text x="145" y="154" fill="#e2e8f0" font-family="sans-serif" text-anchor="middle" font-size="10.5">bricks, outliers &amp; waterfalls.</text>
  <text x="145" y="185" fill="#94a3b8" font-family="monospace" font-size="9.5" text-anchor="middle">Never make facts fit the IH</text>
  <rect x="285" y="65" width="230" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
  <text x="400" y="95" fill="#10b981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">AXIOM 2: STRUCTURED</text>
  <text x="400" y="122" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">MECE Issue Trees, Initial</text>
  <text x="400" y="138" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">Hypotheses, 80/20 Key Drivers</text>
  <text x="400" y="154" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">&amp; 30-second Elevator clarity.</text>
  <text x="400" y="185" fill="#94a3b8" font-family="monospace" font-size="9.5" text-anchor="middle">Apply structure to ambiguity</text>
  <rect x="540" y="65" width="230" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
  <text x="655" y="95" fill="#f59e0b" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">AXIOM 3: INTEGRITY</text>
  <text x="655" y="122" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">WSJ front-page ethics, client</text>
  <text x="655" y="138" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">objectivity, obligation to dissent</text>
  <text x="655" y="154" fill="#e2e8f0" font-family="sans-serif" font-size="10.5" text-anchor="middle">&amp; saying "I don’t know."</text>
  <text x="655" y="185" fill="#94a3b8" font-family="monospace" font-size="9.5" text-anchor="middle">Respect every human stakeholder</text>
  <path d="M 145 215 L 400 280" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 400 215 L 400 280" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <path d="M 655 215 L 400 280" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" fill="none" />
  <rect x="95" y="280" width="610" height="110" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2.5" />
  <text x="400" y="310" fill="#10b981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">THE HILLEL SYNTHESIS OF THE MCKINSEY WAY</text>
  <text x="400" y="336" fill="#e2e8f0" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">"Fact-based, structured thinking combined with professional integrity</text>
  <text x="400" y="356" fill="#e2e8f0" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">will get you on the road to your business goals.</text>
  <text x="400" y="378" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">The rest derives from that. Go and learn."</text>
</svg>`,
      annotations: [
        {
          step: '01',
          label: 'Proving and Double-Proving',
          explanation:
            'Every strategic claim is anchored in empirical data, audited for outliers, and presented with crystal-clear source attribution.',
        },
        {
          step: '02',
          label: 'Structure, MECE, Hypothesis-Driven',
          explanation:
            'As a Düsseldorf/San Francisco alumnus summarized his memory of the Firm: "Structure, structure, structure. MECE, MECE, MECE. Hypothesis-driven, hypothesis-driven, hypothesis-driven."',
        },
        {
          step: '03',
          label: 'Shammai vs. Hillel',
          explanation:
            'Where Shammai chased away the seeker asking for the Law on one foot, Hillel stated the first-principles core from which all operational rules derive.',
        },
      ],
    },
  ],
  deepSections: [
    {
      id: 'mw-ch06-sec-1',
      sectionNumber: '6.1',
      title: 'The Two-Year Half-Life & The Ethical Foundation of Client Service',
      subtitle: 'Why Leaving McKinsey Is a Question of When—and What Integrity Lessons Endure',
      coreMechanism:
        'Leaving McKinsey is never a question of whether, but when: the half-life of an entering class of associates is roughly two years, meaning half depart within 24 months for operating roles where the hours are less punishing, populating an Alumni Directory of over 5,000 CEOs, CFOs, professors, and public leaders. When Rasiel polled a baker’s dozen of alumni for their single most valuable lesson, ethical integrity and professional objectivity topped the list. Eric Hartz (Atlanta/DC/Paris offices, later President of Security First Network Bank) distilled integrity into **The Wall Street Journal test**: whenever you encounter an ethical gray area, ask whether you would feel comfortable reading about your actions on the front page of the *WSJ*; if not, do not do it. Jeff Sakaguchi (LA office) and Hamish McDermott (NY office) paired honesty with **professional objectivity**: putting the client first requires standing your ground when a client dislikes an unpleasant factual truth—or walking away when the client refuses to act in good faith.',
      keyTakeaways: [
        'Screen every ambiguous business decision through Eric Hartz’s Wall Street Journal front-page test.',
        'Maintain professional objectivity so you can stand your ground when empirical facts contradict what a client or boss wants to hear.',
        'Treat consulting and operating management as a fiduciary profession where client value outranks short-term politics.',
      ],
      commonPitfalls: [
        'Rationalizing an ethical shortcut in a competitive gray area that would destroy your reputation if printed on page one of the Wall Street Journal.',
        'Watering down a critical turnaround recommendation because the sponsoring executive prefers comforting news.',
        'Confusing "putting the client first" with telling the client’s CEO whatever flatters his prior assumptions.',
      ],
    },
    {
      id: 'mw-ch06-sec-2',
      sectionNumber: '6.2',
      title: 'Structuring Amorphous Problems, Meritocracy & Directionally Correct Execution',
      subtitle: 'Component Decomposition, End Products, and Rasiel’s Definition of Professionalism',
      coreMechanism:
        'Wesley Sand (Chicago office) noted that McKinsey taught him personal humility and professional confidence that any problem can be structured to take actions that are **directionally correct**. Suzanne Tosini (NY/Caracas, later at Freddie Mac) and Kristin Asleson (NY/Silicon Valley) emphasized applying structure immediately to amorphous situations and remembering that **there is nothing new under the sun**: someone has done it before, so find that person. Crucially, as New York alumni stressed, **generate end products** and remember that **execution is the key**: "A blue book is just a blue book, unless you do something with it." Culturally, Gresham Brebach exported McKinsey’s **"one firm, no stars" meritocracy**, while another alumnus noted that **smart people beat a huge budget**. Synthesizing his own #1 lesson, Ethan Rasiel stated that fuzzy thinking, obfuscatory jargon, impenetrable hierarchy, and playing the "yes-man" are anathema to strong organizations; **structured thinking, clear language, a meritocracy with the obligation to dissent, and professional objectivity** constitute **professionalism**.',
      keyTakeaways: [
        'Break any amorphous crisis into MECE constituents to take directionally correct action, and find the person who has solved it before.',
        'Prioritize smart people over huge budgets, generate concrete end products early, and drive blue books into execution.',
        'Enforce McKinsey "professionalism" by banishing obfuscatory jargon and requiring every team member to exercise the obligation to dissent.',
      ],
      commonPitfalls: [
        'Paralyzing an operating team in search of 100.0% decimal precision when a directionally correct action is needed today.',
        'Treating the delivery of a bound strategic presentation ("the blue book") as the finish line rather than the starting gun for execution.',
        'Rewarding "yes-men" and corporate jargon instead of cultivating a flat meritocracy with an explicit obligation to dissent.',
      ],
    },
    {
      id: 'mw-ch06-sec-3',
      sectionNumber: '6.3',
      title: 'Memories of Excellence & Rabbi Hillel’s One-Foot Synthesis',
      subtitle: 'Defeating "It Can’t Be Done" and Distilling the McKinsey Way on One Foot',
      coreMechanism:
        'When alumni reflect on what they remember most fondly about McKinsey, they point to the relentless standard of proving and double-proving every recommendation, the power of team problem solving in a small group of smart people (Abe Bleiberg), the approachability of colleagues from the newest associate to the most senior director (Gresham Brebach), and the refusal to accept fatalism. As Jason Klein (President of *Field & Stream / Outdoor Life*) observed, outside the Firm you constantly run into the attitude that says "It can’t be done," whereas inside McKinsey the attitude is "Give us the resources and we’ll solve it." To close the book, Rasiel recounts the Talmudic story of the Gentile who asked Rabbi Shammai and Rabbi Hillel to "teach me the Law while I stand on one foot." Shammai chased him away, but Hillel said: *"Do unto others as you would have others do unto you. The rest derives from that. Go and learn."* Standing on one foot, the essential core of the McKinsey Way is equally concise: **Fact-based, structured thinking combined with professional integrity will get you on the road to your business goals. The rest derives from that. Go and learn.**',
      keyTakeaways: [
        'Replace the corporate reflex of "It can’t be done" with Jason Klein’s McKinsey mindset: "Give us the resources and we’ll solve it."',
        'Double-prove every strategic recommendation through small-group collaborative problem solving and open, cross-hierarchy debate.',
        'Anchor your entire operating philosophy in Rabbi Hillel’s one-foot distillation: fact-based, structured thinking combined with professional integrity.',
      ],
      commonPitfalls: [
        'Accepting "It can’t be done" from entrenched operating managers without testing the constraint against empirical facts.',
        'Letting seniority walls prevent junior analysts and senior directors from debating ideas openly.',
        'Treating McKinsey frameworks as mechanical tricks divorced from the foundational commitment to professional integrity.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Organizational Operating Culture: Bureaucratic Hierarchy vs. Unstructured Startup Chaos vs. McKinsey Professionalism',
      description:
        'Comparing how legacy corporate bureaucracies, unstructured teams, and McKinsey-trained operating leaders govern ethics, communication, and execution.',
      headers: ['Dimension', 'Legacy Corporate Bureaucracy', 'Unstructured Startup Chaos', 'McKinsey Professionalism (Part V)'],
      rows: [
        [
          'Communication & Hierarchy',
          'Obfuscatory jargon, rigid hierarchy, and deferential "yes-men"',
          'Noisy ad-hoc Slack debates without MECE structure',
          'Clear language, "one firm, no stars" meritocracy & obligation to dissent',
        ],
        [
          'Response to Daunting Problems',
          'Default attitude: "It can’t be done" or wait for perfect certainty',
          'Reinvents the wheel blindly without checking who solved it before',
          'Breaks into MECE constituents; takes directionally correct action',
        ],
        [
          'Resource vs. Talent Allocation',
          'Demands huge budgets and large headcount for slow results',
          'Burns out solo stars without institutional knowledge sharing',
          'Surrounds smart people in small teams; focuses resources on key drivers',
        ],
        [
          'Ethical & Factual Compass',
          'Tells the boss what he wants to hear; compromises in gray areas',
          'Cuts corners under growth pressure',
          'Passes the WSJ Page-1 Test; stands ground with client-first objectivity',
        ],
      ],
      verdictRule:
        'Build a "one firm, no stars" meritocracy of smart people, enforce the Wall Street Journal ethical test and the obligation to dissent, banish jargon, and turn structured, directionally correct blue books into immediate execution.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mw-ch06-scen-1',
      title: 'Overcoming "It Can’t Be Done" Fatalism and Hierarchy Paralysis in a Legacy Media Turnaround',
      roleAndContext: 'Legacy Consumer Magazine Group (Jason Klein / Gresham Brebach Archetype)',
      symptomOrFailure:
        'A newly appointed division president inherits a shrinking magazine group where department heads hide behind obfuscatory jargon, junior analysts are afraid to contradict VPs, and the sales leadership insists, "Expanding our ad base in this market can’t be done."',
      naiveFixAndWhyItFails:
        'Requesting a $20 million budget expansion from the corporate parent while leaving the existing hierarchical silos and fatalistic managers untouched, which burns cash without changing sales velocity.',
      firstPrinciplesSolution:
        'Install McKinsey professionalism across the division: replace hierarchy with a "one firm, no stars" meritocracy and the explicit obligation to dissent; strip jargon via the 30-second Elevator Test; break the ad-sales slump into MECE constituents to take directionally correct actions; and focus a small team of smart people on the 20% key accounts.',
      measurableOutcome:
        'Junior analysts surface an overlooked advertiser segment during open reviews, the sales force masters the 30-second value pitch, and the magazine’s advertising base grows every consecutive year.',
    },
    {
      id: 'mw-ch06-scen-2',
      title: 'Applying the Wall Street Journal Test and Client-First Objectivity Under Revenue Pressure',
      roleAndContext: 'Financial Services Advisory & Digital Banking Launch (Eric Hartz / Jeff Sakaguchi Archetype)',
      symptomOrFailure:
        'A major institutional client pressures an advisory partner to endorse an aggressive off-balance-sheet fee structure in an ethical gray area and to bury an unfavorable risk audit so the client executive can win his quarterly bonus.',
      naiveFixAndWhyItFails:
        'Rationalizing that "the client is always right" and signing off on the misleading structure to preserve the billing relationship, which explodes into a front-page regulatory scandal eighteen months later.',
      firstPrinciplesSolution:
        'Apply Eric Hartz’s *Wall Street Journal* front-page test and Jeff Sakaguchi’s principle of professional objectivity: recognize that reading about the buried risk audit on page one of the *WSJ* would be catastrophic, stand firm on the empirical facts to protect the client institution’s true long-term value, and be prepared to walk away if the executive insists on deception.',
      measurableOutcome:
        'The firm refuses to falsify the audit; when the board discovers the risk two months later, the advisory team’s integrity is vindicated and the board awards them a multi-year transformation mandate.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mw-ch06-q1',
        scenarioPrompt:
          'What is the approximate "half-life" of an entering class of McKinsey associates, and what does Eric Hartz’s "Wall Street Journal test" require?',
        options: [
          {
            label: 'A',
            text: 'Ten years; it requires reading the Wall Street Journal for two hours every morning.',
            isCorrect: false,
            explanation: 'The associate half-life is two years, and the WSJ test is an ethical standard.',
          },
          {
            label: 'B',
            text: 'Roughly two years (half leave within two years); it requires asking whether you would be comfortable reading about your actions on the front page of the WSJ whenever facing an ethical gray area.',
            isCorrect: true,
            explanation: 'Half of a new associate class leaves within about two years to become operating leaders, carrying with them Eric Hartz’s WSJ front-page test to preserve ethical integrity.',
          },
          {
            label: 'C',
            text: 'Six months; it requires publishing one op-ed in the WSJ before promotion to Engagement Manager.',
            isCorrect: false,
            explanation: 'It is a front-page ethical publicity test, not a publishing quota.',
          },
          {
            label: 'D',
            text: 'Five years; it requires benchmarking every client’s stock price against the Dow Jones index.',
            isCorrect: false,
            explanation: 'The test evaluates ethical gray areas.',
          },
        ],
      },
      {
        id: 'mw-ch06-q2',
        scenarioPrompt:
          'According to Ethan Rasiel’s own most valuable lesson (Chapter 20), what four things get in the way of efficient communication and strong organizations, and what four elements constitute McKinsey "professionalism"?',
        options: [
          {
            label: 'A',
            text: 'Email, voicemail, faxes, and meetings; replaced by blue books, waterfalls, templates, and retreats.',
            isCorrect: false,
            explanation: 'Those are communication mediums, not the cultural blockers Rasiel named.',
          },
          {
            label: 'B',
            text: 'Fuzzy thinking, obfuscatory jargon, impenetrable hierarchy, and playing the "yes-man"; replaced by structured thinking, clear language, a meritocracy with the obligation to dissent, and professional objectivity.',
            isCorrect: true,
            explanation: 'Rasiel identifies fuzzy thinking, jargon, hierarchy, and yes-men as anathema to strong organizations, contrasting them with structured thinking, clear language, meritocratic dissent, and objectivity.',
          },
          {
            label: 'C',
            text: 'High salaries, travel expenses, long hours, and small teams; replaced by cost cutting, local staffing, 40-hour weeks, and large committees.',
            isCorrect: false,
            explanation: 'Small teams of smart people are a core McKinsey strength.',
          },
          {
            label: 'D',
            text: 'Competitors, suppliers, substitutes, and customers; replaced by Forces at Work.',
            isCorrect: false,
            explanation: 'Those are the external factors in the Forces at Work framework.',
          },
        ],
      },
      {
        id: 'mw-ch06-q3',
        scenarioPrompt:
          'What two problem-solving principles did Suzanne Tosini (senior manager at Freddie Mac) carry with her as her most valuable lessons from McKinsey?',
        options: [
          {
            label: 'A',
            text: 'Always build 3D charts and never share your cashflow model with the client.',
            isCorrect: false,
            explanation: 'Tosini famously let the client team claim ownership of her cashflow model.',
          },
          {
            label: 'B',
            text: 'Any problem, no matter how daunting, can be broken into its constituents and solved; and there is nothing new under the sun—someone else has done it before, so find that person.',
            isCorrect: true,
            explanation: 'Tosini highlighted constituent decomposition of daunting problems paired with the pragmatic realization that someone has solved a similar problem before.',
          },
          {
            label: 'C',
            text: 'Never cancel a scheduled meeting and always work on Sundays.',
            isCorrect: false,
            explanation: 'Tosini’s rule was to cancel meetings at least 45 minutes early if there was nothing to discuss.',
          },
          {
            label: 'D',
            text: 'Hire the biggest budget rather than the smartest people.',
            isCorrect: false,
            explanation: 'Alumni emphasized that smart people beat a huge budget.',
          },
        ],
      },
      {
        id: 'mw-ch06-q4',
        scenarioPrompt:
          'How does Ethan Rasiel adapt Rabbi Hillel’s "standing on one foot" answer to summarize the essential core of The McKinsey Way?',
        options: [
          {
            label: 'A',
            text: '"Bill by the value created, not by the hour. The rest derives from that."',
            isCorrect: false,
            explanation: 'Rasiel’s distillation centers on fact-based structure and integrity.',
          },
          {
            label: 'B',
            text: '"Fact-based, structured thinking combined with professional integrity will get you on the road to your business goals. The rest derives from that. Go and learn."',
            isCorrect: true,
            explanation: 'Just as Hillel distilled the Torah on one foot, Rasiel distills the entire book into fact-based, structured thinking combined with professional integrity.',
          },
          {
            label: 'C',
            text: '"Always use three bullet points and a waterfall chart. The rest derives from that."',
            isCorrect: false,
            explanation: 'Charts and bullet points derive from the deeper core of structured thinking.',
          },
          {
            label: 'D',
            text: '"Hire from top business schools and promote every two years. The rest derives from that."',
            isCorrect: false,
            explanation: 'Recruiting is only one operational mechanism.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mw-ch06-fc1',
        category: 'security',
        front: 'What is "The Wall Street Journal test" articulated by alumnus Eric Hartz?',
        back: 'In any ethical gray area, ask if you would be comfortable reading about your actions on the front page of the WSJ; if not, don’t do it.',
        mentalHook: 'Page-1 WSJ comfort = The ultimate ethical boundary.',
      },
      {
        id: 'mw-ch06-fc2',
        category: 'optimization',
        front: 'What did alumnus Wesley Sand learn about perfection vs. action in problem solving?',
        back: 'Every problem has a structured solution; it may not be perfect, but it allows you to take actions that are "directionally correct."',
        mentalHook: 'Structured + Directionally Correct > Paralyzed Perfectionism.',
      },
      {
        id: 'mw-ch06-fc3',
        category: 'foundation',
        front: 'What did Gresham Brebach identify as the core cultural pillar of McKinsey that he implemented as CEO of Nextera?',
        back: 'The "one firm" concept: no stars, just meritocracy, combined with approachability regardless of hierarchy.',
        mentalHook: 'One firm, no stars, pure meritocracy.',
      },
      {
        id: 'mw-ch06-fc4',
        category: 'adaptation',
        front: 'Why did a New York Engagement Manager warn that "A blue book is just a blue book, unless you do something with it"?',
        back: 'Because execution and implementation are the key—strategic analysis produces zero value until it is translated into concrete action.',
        mentalHook: 'A blue book without execution is just expensive cardboard.',
      },
      {
        id: 'mw-ch06-fc5',
        category: 'foundation',
        front: 'What contrast did Jason Klein observe between the attitude inside McKinsey and the attitude in the broader corporate world?',
        back: 'Outside the Firm, people often say "It can’t be done"; inside McKinsey, the attitude is "Give us the resources and we’ll solve it."',
        mentalHook: 'Banish "It can’t be done" from your operating vocabulary.',
      },
      {
        id: 'mw-ch06-fc6',
        category: 'foundation',
        front: 'What are the four components of McKinsey "professionalism" defined by Ethan Rasiel at the end of Chapter 20?',
        back: 'Structured thinking, clear language, a meritocracy with the obligation to dissent, and professional objectivity.',
        mentalHook: 'Structure + Clear language + Obligation to dissent + Objectivity.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mw-ch06-feyn1',
        conceptTitle: 'The Baker’s Dozen Alumni Operating Synthesis',
        prompt:
          'Synthesize the "Baker’s Dozen" alumni lessons from Chapter 20, explaining how ethics, structure, meritocracy, and execution fit together when leading an operating company.',
        rubricChecklist: [
          'Explains Eric Hartz’s Wall Street Journal test and Jeff Sakaguchi’s client-first professional objectivity (standing your ground or walking away).',
          'Covers Wesley Sand’s "directionally correct" action, Kristin Asleson’s structuring of amorphous situations, and Suzanne Tosini’s "nothing new under the sun—find that person."',
          'Details Gresham Brebach’s "one firm, no stars" meritocracy, eliminating hierarchy, and preferring smart people over a huge budget.',
          'Concludes with execution ("a blue book is just a blue book"), generating end products, and Rasiel’s 4-part definition of professionalism (including the obligation to dissent).',
        ],
        modelExplanation:
          'When former McKinsey consultants move into operating leadership, they carry four interlocking lessons. First, preserve ethical and analytical integrity by applying Eric Hartz’s Wall Street Journal front-page test and Jeff Sakaguchi’s professional objectivity—standing your ground even when executives dislike the facts. Second, when facing any amorphous crisis, break it into MECE constituents to take "directionally correct" action (Wesley Sand) and find the person who has solved it before (Suzanne Tosini). Third, build a "one firm, no stars" meritocracy of smart people where hierarchy is flattened and everyone has the obligation to dissent against fuzzy thinking and jargon. Finally, generate concrete end products and drive execution relentlessly, because a blue book is just cardboard until implemented.',
      },
      {
        id: 'mw-ch06-feyn2',
        conceptTitle: 'Rabbi Hillel’s One-Foot Distillation of The McKinsey Way',
        prompt:
          'Retell the Talmudic story of Rabbi Shammai and Rabbi Hillel from Chapter 21 and show how every major practice in The McKinsey Way derives from Rasiel’s "one-foot" core statement.',
        rubricChecklist: [
          'Recounts the story of the Gentile asking Shammai and Hillel to teach the Law while standing on one foot ("Do unto others... The rest derives from that. Go and learn.").',
          'States Rasiel’s exact one-foot distillation: "Fact-based, structured thinking combined with professional integrity will get you on the road to your business goals. The rest derives from that. Go and learn."',
          'Traces how MECE, the Initial Hypothesis, 80/20 key drivers, Fact Packs, and Action-Lead/Waterfall charts derive from "fact-based, structured thinking."',
          'Traces how saying "I don’t know," not leaving interviewees naked, prewiring, letting the client own the model, and the WSJ test derive from "professional integrity."',
        ],
        modelExplanation:
          'When a seeker asked Rabbi Shammai to teach the entire Law while standing on one foot, Shammai chased him away; Rabbi Hillel welcomed him and stated the golden rule: "Do unto others as you would have others do unto you. The rest derives from that. Go and learn." Rasiel distills the entire McKinsey Way into an equally compact one-foot axiom: "Fact-based, structured thinking combined with professional integrity will get you on the road to your business goals. The rest derives from that. Go and learn." From "fact-based, structured thinking" flow MECE issue trees, Day-1 Initial Hypotheses, 80/20 key drivers, Fact Packs, and one-message Waterfall charts; from "professional integrity" flow saying "I don’t know," respecting anxious interviewees and assistants, letting clients own the model, exercising the obligation to dissent, and passing the Wall Street Journal test.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mw-ch06-n1',
        label: 'The Wall Street Journal Integrity Test',
        category: 'security',
        chapterNumber: 6,
        importance: 1,
        definition: 'Eric Hartz’s ethical rule: never take an action in a gray area that you wouldn’t want on Page 1 of the WSJ.',
        whyItMatters: 'Prevents ethical rationalizations from destroying institutional trust.',
      },
      {
        id: 'mw-ch06-n2',
        label: 'Client-First Professional Objectivity',
        category: 'foundation',
        chapterNumber: 6,
        importance: 1,
        definition: 'Standing your ground when facts contradict client wishes, or walking away rather than compromising truth.',
        whyItMatters: 'Anchors consulting as a fiduciary profession focused on real value.',
      },
      {
        id: 'mw-ch06-n3',
        label: 'Directionally Correct Execution',
        category: 'optimization',
        chapterNumber: 6,
        importance: 2,
        definition: 'Structuring amorphous problems into constituents, generating end products, and turning blue books into action.',
        whyItMatters: 'Defeats analysis paralysis and turns cardboard decks into operational results.',
      },
      {
        id: 'mw-ch06-n4',
        label: 'Meritocracy & The Obligation to Dissent',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition: 'Banishing fuzzy thinking, jargon, hierarchy, and yes-men in favor of a "one firm, no stars" meritocracy.',
        whyItMatters: 'Unlocks efficient communication and surfaces ground-truth errors early.',
      },
      {
        id: 'mw-ch06-n5',
        label: 'High Talent Density Over Huge Budgets',
        category: 'adaptation',
        chapterNumber: 6,
        importance: 2,
        definition: 'Surrounding yourself with smart, approachable problem solvers who reject "It can’t be done."',
        whyItMatters: 'Small teams of smart people solve daunting problems faster than bloated bureaucracies.',
      },
      {
        id: 'mw-ch06-n6',
        label: 'Rabbi Hillel’s One-Foot Synthesis',
        category: 'foundation',
        chapterNumber: 6,
        importance: 1,
        definition: 'Fact-based, structured thinking combined with professional integrity—from which all other rules derive.',
        whyItMatters: 'Distills the entire McKinsey operating system into a single portable law.',
      },
    ],
    edges: [
      {
        source: 'mw-ch06-n1',
        target: 'mw-ch06-n2',
        relationship: 'prerequisite_for',
        explanation: 'Front-page ethical transparency fortifies client-first objectivity.',
      },
      {
        source: 'mw-ch06-n4',
        target: 'mw-ch06-n3',
        relationship: 'optimizes',
        explanation: 'Eliminating hierarchy and jargon unlocks fast execution.',
      },
      {
        source: 'mw-ch06-n5',
        target: 'mw-ch06-n3',
        relationship: 'optimizes',
        explanation: 'Smart teams defeat "It can’t be done" faster than big budgets.',
      },
      {
        source: 'mw-ch06-n4',
        target: 'mw-ch06-n2',
        relationship: 'prerequisite_for',
        explanation: 'Objectivity depends on the meritocratic obligation to dissent.',
      },
      {
        source: 'mw-ch06-n6',
        target: 'mw-ch06-n3',
        relationship: 'part_of',
        explanation: 'Unites fact-based structure with professional integrity to drive business goals.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: '100% coverage of Part V (Chapters 20–21: Baker’s Dozen Most Valuable Lessons, Memories of McKinsey, Rabbi Hillel Synthesis).',
  },
};
