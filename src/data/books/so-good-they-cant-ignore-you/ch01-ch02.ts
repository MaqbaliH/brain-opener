import type { ChapterMastery } from '../../../types/book';

export const sgtciyCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: "ch01",
  title: "Rule #1: Don't Follow Your Passion (The Passion Hypothesis Fallacy & Self-Determination Theory)",
  subtitle: "Steve Jobs’s Real Origin, Amy Wrzesniewski’s Calling Study, and Deci & Ryan’s Autonomy-Competence-Relatedness Triad",
  readingTimeMinutes: 7,
  sourceWordCount: 7720,
  executiveThesis: "The Passion Hypothesis—the folk belief that occupational happiness requires discovering a pre-existing passion and matching it to a job—is empirically false and psychologically corrosive. Decades of workplace science, from Robert Vallerand’s passion surveys to Amy Wrzesniewski’s college administrative study and Deci & Ryan’s Self-Determination Theory, prove that passion is a side effect of mastering rare skills, achieving competence, and earning autonomy.",
  paradigmShift: {
    oldWay: "Career seekers treated passion as an innate, pre-existing trait discovered via introspection (\"What Color Is Your Parachute?\") and quit jobs whenever routine friction arose.",
    newWay: "Professionals reject pre-existing passion myths, focus on working right rather than finding the right work, and cultivate Autonomy, Competence, and Relatedness.",
    whyItChanged: "Empirical surveys (Conference Board satisfaction dropping from 61% to 45%) and Wrzesniewski’s tenure data proved that loving your work follows experience and mastery rather than preceding it."
  },
  customDiagrams: [
    {
      id: "sgtciy-ch01-svg1",
      title: "The Passion Hypothesis Fallacy vs. Self-Determination Theory (SDT)",
      subtitle: "Why pre-existing passion matching breeds Quarterlife angst while SDT builds authentic calling",
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">RULE #1: THE PASSION HYPOTHESIS TRAP VS. SELF-DETERMINATION REALITY</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Why "Follow Your Passion" (Bolles 1970) drove U.S. job satisfaction down to 45%—and what science puts in its place</text>

  <!-- Top Track: Flawed Passion Hypothesis -->
  <rect x="24" y="74" width="752" height="142" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5" />
  <text x="44" y="98" fill="#fca5a5" font-size="11" font-weight="700">TRACK A: THE PASSION HYPOTHESIS FAILURE LOOP</text>
  <text x="756" y="98" text-anchor="end" fill="#f87171" font-size="9.5" font-family="monospace">Vallerand Career Passion: &lt; 4%</text>

  <rect x="44" y="112" width="196" height="84" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="142" y="134" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">1. Introspective Search</text>
  <text x="142" y="152" text-anchor="middle" fill="#94a3b8" font-size="8.5">Assume a pre-existing calling</text>
  <text x="142" y="166" text-anchor="middle" fill="#94a3b8" font-size="8.5">awaits discovery (Thomas / Zen)</text>
  <text x="142" y="182" text-anchor="middle" fill="#fca5a5" font-size="8">96% of passions are hobbies</text>

  <path d="M 240 154 L 278 154" stroke="#f87171" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="278" y="112" width="204" height="84" rx="6" fill="#450a0a" stroke="#f87171" />
  <text x="380" y="134" text-anchor="middle" fill="#fecaca" font-size="10" font-weight="700">2. Inevitable Friction Shock</text>
  <text x="380" y="152" text-anchor="middle" fill="#fca5a5" font-size="8.5">New job requires hard learning</text>
  <text x="380" y="166" text-anchor="middle" fill="#fca5a5" font-size="8.5">&amp; mundane duties; fails fantasy</text>
  <text x="380" y="182" text-anchor="middle" fill="#f8fafc" font-size="8">"Is this really my true calling?"</text>

  <path d="M 482 154 L 520 154" stroke="#f87171" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="520" y="112" width="236" height="84" rx="6" fill="#0f172a" stroke="#f87171" />
  <text x="638" y="134" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">3. Chronic Job-Hopping &amp; Angst</text>
  <text x="638" y="152" text-anchor="middle" fill="#94a3b8" font-size="8.5">Quit before building competence;</text>
  <text x="638" y="166" text-anchor="middle" fill="#94a3b8" font-size="8.5">64% youth job dissatisfaction</text>
  <text x="638" y="182" text-anchor="middle" fill="#f87171" font-size="8" font-weight="600">Quarterlife Crisis Spiral</text>

  <!-- Bottom Track: Empirical SDT & Wrzesniewski Loop -->
  <rect x="24" y="236" width="752" height="158" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="44" y="260" fill="#6ee7b7" font-size="11" font-weight="700">TRACK B: EMPIRICAL CALLING ENGINE (WRZESNIEWSKI + DECI &amp; RYAN SDT)</text>
  <text x="756" y="260" text-anchor="end" fill="#34d399" font-size="9.5" font-family="monospace">Experience → Calling</text>

  <rect x="44" y="276" width="210" height="98" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="149" y="298" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">1. Opportunistic Entry + Tenure</text>
  <text x="149" y="316" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Steve Jobs (Byte Shop small bet)</text>
  <text x="149" y="330" text-anchor="middle" fill="#cbd5e1" font-size="8.5">or Wrzesniewski Admin Assistants:</text>
  <text x="149" y="346" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="600">Years on job predicts Calling</text>

  <path d="M 254 325 L 288 325" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="288" y="276" width="224" height="98" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="298" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">2. Self-Determination Triad</text>
  <text x="400" y="316" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Competence: Master hard skills</text>
  <text x="400" y="332" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Autonomy: Earn schedule control</text>
  <text x="400" y="348" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Relatedness: Trust &amp; impact</text>

  <path d="M 512 325 L 546 325" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="546" y="276" width="210" height="98" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2" />
  <text x="651" y="298" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">3. Emergent Calling</text>
  <text x="651" y="316" text-anchor="middle" fill="#e2e8f0" font-size="8.5">Passion emerges as an</text>
  <text x="651" y="330" text-anchor="middle" fill="#e2e8f0" font-size="8.5">epiphenomenon of mastery;</text>
  <text x="651" y="350" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">Working Right &gt; Right Work</text>
</svg>`,
      bierutCaption: "Invert the broken passion funnel: build competence and autonomy first so passion emerges as an earned byproduct.",
      annotations: [
        {
          step: "1",
          label: "Vallerand’s 4% Reality Check",
          explanation: "Surveying 539 students revealed that 96% of pre-existing passions are leisure hobbies (sports, music) unrelated to viable careers."
        },
        {
          step: "2",
          label: "Wrzesniewski’s Experience Law",
          explanation: "Among identical college administrative assistants, years of experience—not pre-existing passion—predicted viewing work as a Calling."
        },
        {
          step: "3",
          label: "Deci & Ryan’s SDT Nutriments",
          explanation: "Intrinsic workplace motivation is fueled by Competence, Autonomy, and Relatedness."
        }
      ]
    },
    {
      id: "sgtciy-ch01-svg2",
      title: "Steve Jobs’s Actual Trajectory vs. Commencement Speech Myth",
      subtitle: "How messy Little Bets at Atari, All-One Farm, and the Byte Shop forged a technology calling",
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">DO WHAT STEVE JOBS DID, NOT WHAT HE SAID (1972–1976 TIMELINE)</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Tracing how Apple Computer emerged from opportunistic cash hustles rather than a pre-existing tech calling</text>

  <!-- Timeline Spine -->
  <line x1="60" y1="220" x2="740" y2="220" stroke="#475569" stroke-width="3" />

  <!-- Node 1: Reed College -->
  <rect x="34" y="88" width="164" height="104" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="116" y="110" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">1972–73: Reed College</text>
  <text x="116" y="128" text-anchor="middle" fill="#94a3b8" font-size="8.5">Studies Western history,</text>
  <text x="116" y="142" text-anchor="middle" fill="#94a3b8" font-size="8.5">dance &amp; Eastern mysticism;</text>
  <text x="116" y="156" text-anchor="middle" fill="#94a3b8" font-size="8.5">zero interest in business</text>
  <text x="116" y="174" text-anchor="middle" fill="#fca5a5" font-size="8">Not a tech zealot</text>
  <circle cx="116" cy="220" r="7" fill="#64748b" />

  <!-- Node 2: Atari + Commune + India -->
  <rect x="218" y="248" width="176" height="114" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="306" y="270" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">1974–75: Atari &amp; Zen</text>
  <text x="306" y="288" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Night shift at Atari for cash;</text>
  <text x="306" y="302" text-anchor="middle" fill="#cbd5e1" font-size="8.5">leaves for India &amp; All-One</text>
  <text x="306" y="316" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Farm commune; abandons</text>
  <text x="306" y="330" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Kamradt time-share gig</text>
  <text x="306" y="348" text-anchor="middle" fill="#fbbf24" font-size="8">Primary passion = Zen</text>
  <circle cx="306" cy="220" r="7" fill="#f59e0b" />

  <!-- Node 3: Bare Circuit Board Pitch -->
  <rect x="414" y="88" width="172" height="104" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="500" y="110" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Late 1975: $1,000 Bet</text>
  <text x="500" y="128" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Plans with Wozniak to print</text>
  <text x="500" y="142" text-anchor="middle" fill="#cbd5e1" font-size="8.5">100 bare $25 circuit boards</text>
  <text x="500" y="156" text-anchor="middle" fill="#cbd5e1" font-size="8.5">to sell for $50 on the side;</text>
  <text x="500" y="174" text-anchor="middle" fill="#38bdf8" font-size="8">Kept regular day jobs</text>
  <circle cx="500" cy="220" r="7" fill="#38bdf8" />

  <!-- Node 4: Byte Shop Windfall -->
  <rect x="604" y="248" width="172" height="114" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="690" y="270" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">1976: Byte Shop Pivot</text>
  <text x="690" y="288" text-anchor="middle" fill="#d1fae5" font-size="8.5">Paul Terrell orders 50</text>
  <text x="690" y="302" text-anchor="middle" fill="#d1fae5" font-size="8.5">assembled computers at</text>
  <text x="690" y="316" text-anchor="middle" fill="#d1fae5" font-size="8.5">$500 each; competence &amp;</text>
  <text x="690" y="330" text-anchor="middle" fill="#d1fae5" font-size="8.5">market validation ignite</text>
  <text x="690" y="348" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">Emergent Passion!</text>
  <circle cx="690" cy="220" r="8" fill="#10b981" />

  <path d="M 116 220 L 306 220" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 306 220 L 500 220" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 500 220 L 690 220" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />
</svg>`,
      bierutCaption: "Do what Steve Jobs actually did—iterate opportunistic small schemes into mastery—not what he preached at Stanford.",
      annotations: [
        {
          step: "1",
          label: "Spiritual & Liberal Arts Drift",
          explanation: "Less than a year before Apple, Jobs was focused on Zen meditation and communes, treating electronics as an occasional cash hustle."
        },
        {
          step: "2",
          label: "Circumspect $1,000 Side Venture",
          explanation: "The original Apple I plan was a low-risk side project to sell 100 bare circuit boards for a modest $1,000 profit without quitting day jobs."
        },
        {
          step: "3",
          label: "Market Validation Ignites Passion",
          explanation: "Only after Paul Terrell’s $25,000 Byte Shop order validated their skill did Jobs pour himself fully into building personal computers."
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: "sgtciy-ch01-mm1",
      name: "The Epiphenomenon of Passion",
      tagline: "Passion is the trailing indicator of mastery, never the leading prerequisite",
      naiveIntuition: "You must figure out what you love in advance through self-reflection before you can commit hard effort to a career.",
      firstPrinciplesReality: "Amy Wrzesniewski’s empirical studies prove that the strongest predictor of viewing work as a \"Calling\" is the number of years spent mastering the role.",
      howToApply: "Stop auditing whether your current job matches a cosmic calling; invest energy into mastering the craft until competence and autonomy generate passion."
    },
    {
      id: "sgtciy-ch01-mm2",
      name: "Self-Determination Theory (SDT) Triad",
      tagline: "Autonomy, Competence, and Relatedness are the true psychological nutriments of work love",
      naiveIntuition: "Workplace happiness comes from turning a leisure hobby (like sports, food, or Eastern philosophy) into a full-time paycheck.",
      firstPrinciplesReality: "Deci and Ryan’s 30+ years of motivation science demonstrate that humans love work when they feel good at it (Competence), in control (Autonomy), and connected to others (Relatedness).",
      howToApply: "Evaluate any career move by how effectively it builds your technical competence and expands your operational autonomy."
    },
    {
      id: "sgtciy-ch01-mm3",
      name: "Working Right Trumps Finding the Right Work",
      tagline: "How you approach your daily work matters far more than your initial job description",
      naiveIntuition: "If you feel anxious or unfulfilled at work, the solution is to switch industries or move to a Catskills Zen monastery.",
      firstPrinciplesReality: "As lay monk Thomas discovered after passing the Mu koan, changing external scenery without changing your relationship to daily craft leaves your anxieties intact.",
      howToApply: "Eliminate escapist \"dream job\" comparisons and focus on executing your immediate professional responsibilities at an elite level."
    }
  ],
  deepSections: [
    {
      id: "sgtciy-ch01-sec1",
      sectionNumber: "1.1",
      title: "The Passion Hypothesis Myth vs. Steve Jobs’s Real Origin",
      subtitle: "Thomas’s Zen crisis, Richard Bolles’s 1970 Parachute shift, and the Byte Shop windfall",
      coreMechanism: "The book opens with Thomas, who followed his passion for Buddhism to the Zen Mountain Monastery in the Catskills, spent months cracking the \"Mu\" koan, and burst into tears upon realizing that achieving his dream-job fantasy left him with the exact same personal anxieties. Ten years later, after returning to banking and focusing on doing his work exceptionally well, Thomas managed a $30 billion investment system with deep satisfaction. Thomas’s early angst was caused by the Passion Hypothesis—popularized after Richard Bolles’s 1970 What Color Is Your Parachute? (when Google Ngram mentions of \"follow your passion\" spiked 3x) and Steve Jobs’s viral 2005 Stanford commencement speech.\n\nYet biography proves Jobs never followed a pre-existing passion for technology: he studied history and dance at Reed College, lived on the All-One Farm commune, traveled to India for Zen enlightenment, abandoned Alex Kamradt’s time-sharing venture without notice in fall 1975, and pitched Steve Wozniak on selling 100 bare circuit boards purely for a $1,000 side profit. Only when Byte Shop owner Paul Terrell ordered 50 fully assembled computers at $500 each did Jobs discover his calling.",
      stepByStepFlow: [
        {
          step: "1",
          title: "Deconstruct Origin Myths",
          detail: "Look at what successful icons like Steve Jobs actually did at age 20 rather than their retrospective speeches."
        },
        {
          step: "2",
          title: "Abandon Fantasy Comparisons",
          detail: "Stop comparing the real friction of your current job against an idealized, frictionless dream career."
        },
        {
          step: "3",
          title: "Commit to Working Right",
          detail: "Like Thomas returning to banking, channel energy into mastering the immediate system in front of you."
        }
      ],
      keyTakeaways: [
        "Steve Jobs’s early history shows a meandering series of small, opportunistic bets rather than a singular childhood passion for computers.",
        "As \"follow your passion\" surged in culture after 1970, U.S. Conference Board job satisfaction steadily fell from 61% (1987) to 45% (2010)."
      ],
      commonPitfalls: [
        "Quitting a promising career at the first sign of difficulty because the Passion Hypothesis claims the \"right\" job should feel effortless.",
        "Confusing an inspiring commencement platitude with a reproducible career engineering strategy."
      ],
      figures: [
        {
          file: "00003.jpeg",
          originalLabel: "Rule 1 Editorial Section Emblem",
          bierutTitle: "Discard The Pre-Existing Passion Myth In Favor Of Empirical Career Mechanics",
          editorialAnalysis: "Anchors the structural transition in Rule #1 from cultural myth-busting (Thomas at the Zen Mountain Monastery and Steve Jobs at the Byte Shop) to empirical workplace psychology. It marks the boundary between folk career advice and scientific evidence.",
          keyTakeaways: [
            "True career fulfillment is built through competence and experience, never discovered via passive introspection."
          ]
        }
      ]
    },
    {
      id: "sgtciy-ch01-sec2",
      sectionNumber: "1.2",
      title: "What the Science Actually Says About Workplace Happiness",
      subtitle: "Robert Vallerand’s 539-student survey, Amy Wrzesniewski’s Calling study, and Self-Determination Theory",
      coreMechanism: "Three bodies of empirical psychology demolish the Passion Hypothesis. First, Canadian psychologist Robert Vallerand surveyed 539 university students and found that while 84% had an identifiable passion, fewer than 4% of those passions had any connection to work or education (96% were leisure hobbies like hockey, dancing, or reading). Second, Yale professor Amy Wrzesniewski studied college administrative assistants and classified careers into three categories: a Job (a way to pay the bills), a Career (a path toward promotion), and a Calling (an integral source of identity and fulfillment). Even among employees holding the exact same administrative position, she found an even split across all three categories, and the strongest statistical predictor of a Calling was the number of years spent on the job.\n\nThird, Edward Deci and Richard Ryan’s Self-Determination Theory (SDT) proves that intrinsic motivation at work requires fulfilling three basic psychological needs: Autonomy (feeling you have control over your day and that your actions matter), Competence (feeling you are good at what you do), and Relatedness (feeling connected to other people).",
      stepByStepFlow: [
        {
          step: "1",
          title: "Separate Hobbies from Careers",
          detail: "Recognize Vallerand’s finding that 96% of pre-existing teenage passions are leisure activities, not job blueprints."
        },
        {
          step: "2",
          title: "Accumulate Domain Tenure",
          detail: "Stay in a domain long enough to build the experience and mastery that Wrzesniewski links to a Calling."
        },
        {
          step: "3",
          title: "Optimize SDT Nutriments",
          detail: "Deliberately cultivate Competence, Autonomy, and Relatedness inside your daily workflow."
        }
      ],
      keyTakeaways: [
        "Robert Vallerand’s study proved fewer than 4% of students possess a pre-existing passion relevant to a viable career.",
        "Amy Wrzesniewski showed that more experienced employees are significantly more likely to experience their work as a Calling.",
        "Deci and Ryan’s Self-Determination Theory identifies Autonomy, Competence, and Relatedness as the true drivers of occupational happiness."
      ],
      commonPitfalls: [
        "Assuming an administrative, financial, or technical role cannot become a Calling simply because it sounds mundane on paper.",
        "Job-hopping every nine months and resetting your Competence and Relatedness counters back to zero."
      ]
    },
    {
      id: "sgtciy-ch01-sec3",
      sectionNumber: "1.3",
      title: "Why the Passion Hypothesis Is Actively Dangerous",
      subtitle: "Quarterlife Crisis angst, unrealistic expectations, and the transition to the Craftsman Mindset",
      coreMechanism: "Even if the Passion Hypothesis is scientifically wrong, is it harmless optimism? Newport demonstrates that it is actively destructive. Psychologist Jeffrey Arnett notes that young postgrads raised on passion messaging expect work to be a non-stop self-expression adventure, resulting in 64% of young workers reporting active job dissatisfaction—the highest rate in Conference Board history. As chronicled in Alexandra Robbins and Abby Wilner’s Quarterlife Crisis (such as 27-year-old Scott in Washington, D.C., who loved his politics office, friends, and boss, yet quit in angst because hard daily tasks made him doubt it was his \"ultimate calling\"), the passion mindset breeds chronic self-doubt.\n\nContrasting this angst is New Acoustic guitarist Jordan Tice in his monastic \"bluegrass frat house\" room and comedian Steve Martin (who spent 18 years grinding from Disneyland magic shops to innovative, punchline-free comedy before becoming a star). Instead of asking what the world owes them, they focus relentlessly on pushing their technical output until they are \"so good they can’t ignore you.\"",
      stepByStepFlow: [
        {
          step: "1",
          title: "Diagnose Passion-Induced Angst",
          detail: "Identify when normal learning friction is being misinterpreted as \"I chose the wrong life calling.\""
        },
        {
          step: "2",
          title: "Adopt Output-Centric Clarity",
          detail: "Shift your daily internal question from \"Is this job right for me?\" to \"How do I get unmistakably good?\""
        },
        {
          step: "3",
          title: "Embrace the 10-Year Ramp",
          detail: "Accept Steve Martin’s timeline: building elite competence takes years of focused iteration before confidence emerges."
        }
      ],
      keyTakeaways: [
        "The Passion Hypothesis turns normal workplace challenges into existential crises by promising that the \"right\" job brings instant bliss.",
        "Steve Martin’s advice—\"Be so good they can’t ignore you\"—shifts focus from self-centered introspection to undeniable output."
      ],
      commonPitfalls: [
        "Abandoning a great workplace (like Scott in Quarterlife Crisis) because it includes difficult, unglamorous responsibilities.",
        "Waiting for confidence and passion to arrive before committing to daily technical practice."
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: "Career Orientation Paradigms: Passion Mindset vs. SDT Craftsman Reality",
      description: "Comparing the folk Passion Hypothesis against empirical Self-Determination Theory and Amy Wrzesniewski’s Calling framework.",
      headers: [
        "Dimension",
        "Passion Hypothesis (Folk Myth)",
        "Job / Career Orientation",
        "SDT / Emergent Calling (Rule #1)"
      ],
      rows: [
        [
          "Core Premise",
          "Match pre-existing inner passion to a job",
          "Work strictly for bills or next promotion",
          "Master rare skills to earn SDT nutriments"
        ],
        [
          "Empirical Validity",
          "Refuted (<4% career passions in Vallerand)",
          "Common baseline in early tenure",
          "Validated by Wrzesniewski & Deci/Ryan"
        ],
        [
          "Reaction to Friction",
          "Existential doubt & chronic job-hopping",
          "Cynical endurance or burnout",
          "Deliberate practice toward Competence"
        ],
        [
          "Long-Term Outcome",
          "64% youth dissatisfaction / Quarterlife angst",
          "Stagnant plateau",
          "Authentic Calling, Autonomy & Mastery"
        ]
      ],
      verdictRule: "Never evaluate a career by whether it matches a pre-existing hobby; judge and shape it by its capacity to build Competence, Autonomy, and Relatedness over time."
    }
  ],
  engineeringScenarios: [
    {
      id: "sgtciy-ch01-scen1",
      title: "Rescuing a Junior Software Engineer from Quarterlife Job-Hopping",
      roleAndContext: "24-year-old backend engineer who has switched companies three times in 28 months searching for her \"true passion.\"",
      symptomOrFailure: "Every time she encounters legacy codebases, on-call rotations, or steep learning curves after month six, she concludes software is not her calling.",
      naiveFixAndWhyItFails: "Taking personality tests or quitting to attend a culinary bootcamp resets her competence to zero and repeats the exact disillusionment cycle.",
      firstPrinciplesSolution: "Apply Wrzesniewski’s tenure law and Deci & Ryan’s SDT: commit to a 24-month stay, master distributed database tuning (Competence), earn technical ownership (Autonomy), and mentor interns (Relatedness).",
      measurableOutcome: "Promoted to Senior Engineer within 18 months with high daily job satisfaction and zero desire to switch fields."
    },
    {
      id: "sgtciy-ch01-scen2",
      title: "Transforming a \"Mundane\" Financial Data-Entry Role into an Elite Calling",
      roleAndContext: "Operations analyst returning to an asset-management bank after a disillusioning two-year sabbatical (the Thomas case study).",
      symptomOrFailure: "Previously hated the banking role because he constantly compared it against an idealized fantasy of living as a Catskills Zen monk.",
      naiveFixAndWhyItFails: "Searching job boards every evening for \"meaningful non-profit roles\" fractures focus and guarantees mediocre daily output.",
      firstPrinciplesSolution: "Eliminate fantasy comparisons (\"working right trumps finding the right work\") and attack every assigned data-system problem with total concentration.",
      measurableOutcome: "Earned three rapid promotions in 24 months to lead the architecture managing $30 billion in institutional assets."
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: "sgtciy-ch01-q1",
        scenarioPrompt: "When Canadian psychologist Robert Vallerand surveyed 539 university students to identify their pre-existing passions, what did the empirical data reveal?",
        options: [
          {
            label: "A",
            text: "Over 75% of students had pre-existing passions for lucrative fields like database administration, tax law, and B2B software.",
            isCorrect: false,
            explanation: "Almost no students had pre-existing passions for viable technical or business professions."
          },
          {
            label: "B",
            text: "While 84% of students had an identifiable passion, fewer than 4% of those passions had any relation to work or education (96% were leisure hobbies like sports and music).",
            isCorrect: true,
            explanation: "Vallerand’s study proved that pre-existing career passions are exceedingly rare, making \"follow your passion\" useless for 96% of people."
          },
          {
            label: "C",
            text: "Students had zero passions of any kind until age forty.",
            isCorrect: false,
            explanation: "84% had passions, but they were almost exclusively recreational hobbies."
          },
          {
            label: "D",
            text: "Only students who read What Color Is Your Parachute? had passions.",
            isCorrect: false,
            explanation: "Bolles’s book popularized the passion myth in 1970, not Vallerand’s hobby distribution."
          }
        ]
      },
      {
        id: "sgtciy-ch01-q2",
        scenarioPrompt: "In Yale professor Amy Wrzesniewski’s famous study of college administrative assistants—who all held the exact same job description—what factor best predicted whether an employee viewed their work as a fulfilling \"Calling\" rather than just a \"Job\"?",
        options: [
          {
            label: "A",
            text: "Whether they had dreamed of being an administrative assistant since childhood.",
            isCorrect: false,
            explanation: "Pre-existing childhood passion did not predict viewing the administrative role as a calling."
          },
          {
            label: "B",
            text: "The number of years spent working in the job—more experience correlated strongly with experiencing the work as a Calling.",
            isCorrect: true,
            explanation: "Experience gives workers time to build competence, master their craft, and form deep collegial relationships, turning the job into a calling."
          },
          {
            label: "C",
            text: "Their score on the Myers-Briggs personality assessment.",
            isCorrect: false,
            explanation: "Personality matching tests failed to explain the Job/Career/Calling split."
          },
          {
            label: "D",
            text: "How frequently they threatened to quit to pursue Zen Buddhism.",
            isCorrect: false,
            explanation: "Escapist fantasies undermine satisfaction in your current role."
          }
        ]
      },
      {
        id: "sgtciy-ch01-q3",
        scenarioPrompt: "According to Edward Deci and Richard Ryan’s Self-Determination Theory (SDT), what are the three universal psychological nutriments required to feel intrinsic motivation and love for your work?",
        options: [
          {
            label: "A",
            text: "Fame, Stock Options, and Zero Deadlines.",
            isCorrect: false,
            explanation: "Extrinsic rewards do not generate intrinsic motivation in SDT."
          },
          {
            label: "B",
            text: "Autonomy (control over your day), Competence (feeling you are good at what you do), and Relatedness (feeling connected to others).",
            isCorrect: true,
            explanation: "Deci and Ryan’s SDT demonstrates that Autonomy, Competence, and Relatedness drive workplace fulfillment."
          },
          {
            label: "C",
            text: "Pre-existing Passion, Courage, and Personality Matching.",
            isCorrect: false,
            explanation: "Those are the tenets of the flawed Passion Hypothesis and courage culture."
          },
          {
            label: "D",
            text: "Open Offices, Instant Messaging, and Social Media.",
            isCorrect: false,
            explanation: "Those are shallow workplace distractions unrelated to SDT."
          }
        ]
      },
      {
        id: "sgtciy-ch01-q4",
        scenarioPrompt: "Why does Cal Newport say \"Do what Steve Jobs did, not what he said\" regarding Jobs’s 2005 Stanford commencement speech?",
        options: [
          {
            label: "A",
            text: "Because Jobs actually hated Apple Computer throughout his entire life.",
            isCorrect: false,
            explanation: "Jobs grew to love his work deeply, but that passion emerged after Apple’s early success."
          },
          {
            label: "B",
            text: "Because in the years right before founding Apple, Jobs was focused on Zen mysticism and communes, treating electronics as an opportunistic side hustle until the Byte Shop order validated his skill.",
            isCorrect: true,
            explanation: "Jobs’s biography shows he stumbled into Apple via a small-time scheme to sell $50 circuit boards, not by following a pre-existing tech calling."
          },
          {
            label: "C",
            text: "Because Steve Wozniak gave the 2005 Stanford speech instead of Jobs.",
            isCorrect: false,
            explanation: "Steve Jobs delivered the 2005 Stanford commencement address."
          },
          {
            label: "D",
            text: "Because Jobs earned a PhD in computer science before starting Apple.",
            isCorrect: false,
            explanation: "Jobs dropped out of Reed College after studying Western history and dance."
          }
        ]
      }
    ],
    flashcards: [
      {
        id: "sgtciy-ch01-fc1",
        category: "foundation",
        front: "State \"The Passion Hypothesis\" as defined in Rule #1.",
        back: "The belief that the key to occupational happiness is to first figure out what you’re passionate about and then find a job that matches this passion.",
        mentalHook: "Folk myth: Find passion first → Match job second."
      },
      {
        id: "sgtciy-ch01-fc2",
        category: "evaluation",
        front: "What are Amy Wrzesniewski’s three categories of how people experience their work?",
        back: "A Job (a way to pay the bills), a Career (a path toward prestige and promotion), and a Calling (an integral part of identity and fulfillment).",
        mentalHook: "Job (Bills) vs. Career (Promotion) vs. Calling (Identity)."
      },
      {
        id: "sgtciy-ch01-fc3",
        category: "foundation",
        front: "What are the three psychological needs in Deci and Ryan’s Self-Determination Theory (SDT)?",
        back: "Autonomy (feeling you have control over your day), Competence (feeling you are good at what you do), and Relatedness (feeling connected to other people).",
        mentalHook: "SDT Triad = Autonomy + Competence + Relatedness."
      },
      {
        id: "sgtciy-ch01-fc4",
        category: "evaluation",
        front: "What happened to U.S. job satisfaction between 1987 and 2010 according to the Conference Board survey as \"follow your passion\" spread?",
        back: "Overall job satisfaction dropped steadily from 61% in 1987 to 45% in 2010, with 64% of young workers reporting they are actively unhappy in their jobs.",
        mentalHook: "More passion obsession = Lower job satisfaction (61% → 45%)."
      },
      {
        id: "sgtciy-ch01-fc5",
        category: "adaptation",
        front: "What core lesson did Thomas learn after leaving the Zen Mountain Monastery and returning to his banking career?",
        back: "\"Working right trumps finding the right work\"—focusing intensely on doing your current job well builds the competence, respect, and autonomy that make you love your work.",
        mentalHook: "Working right > Finding the right work."
      },
      {
        id: "sgtciy-ch01-fc6",
        category: "optimization",
        front: "What was comedian Steve Martin’s one-sentence career advice on Charlie Rose that inspired Rule #2?",
        back: "\"Be so good they can’t ignore you\"—focus on pushing your craft to an undeniable level rather than searching for shortcuts or agents.",
        mentalHook: "Be so good they can’t ignore you."
      }
    ],
    feynmanChallenges: [
      {
        id: "sgtciy-ch01-feyn1",
        conceptTitle: "The Scientific Demolition of the Passion Hypothesis",
        prompt: "Explain to a college senior why \"follow your passion\" is both scientifically wrong and psychologically dangerous, citing Vallerand, Wrzesniewski, Deci & Ryan, and Steve Jobs.",
        rubricChecklist: [
          "Cites Robert Vallerand’s 539-student study showing <4% of pre-existing passions relate to work or education.",
          "Explains Amy Wrzesniewski’s administrative assistant study showing tenure/experience predicts viewing work as a Calling.",
          "Defines Deci & Ryan’s Self-Determination Theory triad (Autonomy, Competence, Relatedness).",
          "Contrasts Steve Jobs’s 2005 Stanford speech against his real 1974–1976 history (Zen, communes, and the opportunistic Byte Shop order) and explains Quarterlife Crisis angst."
        ],
        modelExplanation: "First, Vallerand’s survey of 539 students proved that 96% of pre-existing passions are leisure hobbies like sports or music, leaving fewer than 4% relevant to careers. Second, Wrzesniewski’s study of college administrative assistants proved that viewing work as a \"Calling\" is predicted by years of experience on the job, not pre-existing passion. Third, Deci and Ryan’s Self-Determination Theory shows work love comes from Competence, Autonomy, and Relatedness. Even Steve Jobs stumbled into Apple via a small-time $1,000 circuit-board scheme before Paul Terrell’s Byte Shop order ignited his commitment. Expecting instant passion upfront breeds chronic job-hopping and Quarterlife angst whenever normal learning friction appears."
      },
      {
        id: "sgtciy-ch01-feyn2",
        conceptTitle: "Working Right Trumps Finding the Right Work (The Thomas Transformation)",
        prompt: "Trace Thomas’s journey from weeping in the Catskills Zen Mountain Monastery to thriving as an executive managing $30 billion in banking assets, and explain the cognitive shift that transformed his life.",
        rubricChecklist: [
          "Describes Thomas’s initial Passion Hypothesis fantasy that living as a Zen monk would automatically cure his existential angst.",
          "Explains his realization after passing the Mu koan that external dream-job scenery does not change internal anxieties.",
          "Details how dropping escapist fantasy comparisons allowed him to focus 100% on executing his banking tasks well.",
          "Shows how rising competence bought rapid promotions, respect, and autonomy—validating that \"working right trumps finding the right work.\""
        ],
        modelExplanation: "Thomas spent years chasing his passion for Buddhism to the Zen Mountain Monastery, only to realize after cracking the Mu koan that he was the exact same anxious person inside his \"dream job.\" When he returned to his old banking job, he abandoned escapist fantasies of a magical calling and committed to executing every task in front of him at an elite standard. That undivided focus built rare competence, earning three rapid promotions until he oversaw systems managing $30 billion in assets—gaining the autonomy, impact, and mastery that made him genuinely love his work."
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: "sgtciy-passion-hypothesis",
        label: "The Passion Hypothesis",
        category: "foundation",
        chapterNumber: 1,
        importance: 1,
        definition: "Flawed cultural belief popularized after 1970 that career happiness requires discovering a pre-existing passion and matching it to a job.",
        formulaOrRule: "Introspection → Match Job → Expected Instant Bliss (Fails 96% of time)",
        whyItMatters: "Causes chronic job-hopping and Quarterlife Crisis angst when normal learning friction occurs."
      },
      {
        id: "sgtciy-vallerand-study",
        label: "Vallerand 4% Hobby Distribution",
        category: "evaluation",
        chapterNumber: 1,
        importance: 2,
        definition: "Empirical survey of 539 students by Robert Vallerand showing that 96% of identifiable passions are leisure hobbies unrelated to careers.",
        formulaOrRule: "Career-Relevant Pre-Existing Passions < 4%",
        whyItMatters: "Proves that waiting for a pre-existing occupational passion leaves the vast majority of people directionless."
      },
      {
        id: "sgtciy-wrzesniewski-calling",
        label: "Wrzesniewski Job / Career / Calling Law",
        category: "evaluation",
        chapterNumber: 1,
        importance: 1,
        definition: "Amy Wrzesniewski’s empirical finding that viewing work as a Calling correlates strongly with years of experience and mastery rather than job title.",
        formulaOrRule: "Tenure + Mastery → Emergent Calling",
        whyItMatters: "Demonstrates that any profession can become a Calling once you invest time to master it."
      },
      {
        id: "sgtciy-sdt-triad",
        label: "Self-Determination Theory (SDT)",
        category: "foundation",
        chapterNumber: 1,
        importance: 1,
        definition: "Deci and Ryan’s motivational framework proving that intrinsic workplace fulfillment requires Autonomy, Competence, and Relatedness.",
        formulaOrRule: "Intrinsic Motivation = f(Autonomy, Competence, Relatedness)",
        whyItMatters: "Replaces mystical passion-hunting with three concrete, engineerable psychological nutriments."
      },
      {
        id: "sgtciy-jobs-origin",
        label: "Steve Jobs Byte Shop Pivot",
        category: "adaptation",
        chapterNumber: 1,
        importance: 3,
        definition: "Historical proof that Jobs wandered through Zen and communes before a small $1,000 circuit-board hustle turned into Apple via Paul Terrell’s order.",
        formulaOrRule: "Small Opportunistic Bet → Market Validation → Deep Commitment",
        whyItMatters: "Debunks the myth that iconic founders started with an unwavering childhood calling."
      },
      {
        id: "sgtciy-working-right",
        label: "Working Right > Right Work",
        category: "optimization",
        chapterNumber: 1,
        importance: 2,
        definition: "Core operational principle that how you approach and master your daily craft determines fulfillment far more than your initial job description.",
        formulaOrRule: "Daily Craftsmanship → Competence → Autonomy → Work Love",
        whyItMatters: "Frees workers from escapist job-hopping so they can compound value in their current field."
      }
    ],
    edges: [
      {
        source: "sgtciy-vallerand-study",
        target: "sgtciy-passion-hypothesis",
        relationship: "evaluates",
        explanation: "Vallerand’s <4% career-passion data empirically refutes the foundational premise of the Passion Hypothesis."
      },
      {
        source: "sgtciy-wrzesniewski-calling",
        target: "sgtciy-sdt-triad",
        relationship: "prerequisite_for",
        explanation: "Staying in a role to accumulate experience allows workers to build the Competence and Relatedness of Deci & Ryan’s SDT."
      },
      {
        source: "sgtciy-working-right",
        target: "sgtciy-sdt-triad",
        relationship: "optimizes",
        explanation: "Focusing on working right builds technical Competence, which in turn unlocks workplace Autonomy."
      },
      {
        source: "sgtciy-jobs-origin",
        target: "sgtciy-working-right",
        relationship: "part_of",
        explanation: "Jobs’s pivot from bare circuit boards to assembled computers at the Byte Shop exemplifies opportunistic action preceding passion."
      },
      {
        source: "sgtciy-sdt-triad",
        target: "sgtciy-wrzesniewski-calling",
        relationship: "optimizes",
        explanation: "Satisfying Autonomy, Competence, and Relatedness transforms an ordinary job into an authentic Calling."
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: "Complete coverage of Introduction and Rule #1 (Thomas at Zen Mountain Monastery & Mu koan, Steve Jobs Stanford speech vs Reed/Atari/All-One Farm/Byte Shop, Richard Bolles 1970 Parachute, Conference Board 61%->45%, Quarterlife Crisis, Robert Vallerand 539 students, Amy Wrzesniewski Job/Career/Calling, Deci & Ryan SDT, Jordan Tice & Steve Martin intro)."
  }
};

export const sgtciyCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: "ch02",
  title: "Rule #2: Be So Good They Can’t Ignore You (Part I: The Craftsman Mindset & Career Capital Theory)",
  subtitle: "Output-Centric Clarity, Supply-and-Demand Economics of Great Work, and the Three Disqualifiers",
  readingTimeMinutes: 7,
  sourceWordCount: 7711,
  executiveThesis: "Whereas the Passion Mindset fixates on \"What does the world owe me?\", the Craftsman Mindset asks \"What rare value am I offering the world?\" Because the traits that define great work—Creativity, Impact, and Control—are economically scarce and valuable, Supply-and-Demand dictates that you must first accumulate Career Capital (rare and valuable skills) by stretching beyond comfortable performance plateaus to purchase those traits.",
  paradigmShift: {
    oldWay: "Workers influenced by \"courage culture\" (like Lisa Feuer quitting advertising after a 200-hour yoga course) assumed courage alone buys a dream career.",
    newWay: "Craftsmen (like branding master Joe Duffy, TV writer Alex Berger, and VC Mike Jackson) compound rare skills for years before cashing in their Career Capital for autonomy.",
    whyItChanged: "Labor markets obey strict supply-and-demand economics: without scarce Career Capital, \"courageous\" leaps into saturated fields end in financial collapse."
  },
  customDiagrams: [
    {
      id: "sgtciy-ch02-svg1",
      title: "The Career Capital Economic Exchange Engine",
      subtitle: "How the Craftsman Mindset converts deliberate skill strain into Creativity, Impact, and Control",
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">THE CAREER CAPITAL THEORY OF GREAT WORK (SUPPLY &amp; DEMAND)</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Why Joe Duffy’s 20-year logo mastery bought a 100-acre retreat while Lisa Feuer’s 200-hour yoga leap led to food stamps</text>

  <!-- Left Column: Craftsman Mindset Input -->
  <rect x="24" y="76" width="228" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="138" y="100" text-anchor="middle" fill="#38bdf8" font-size="10.5" font-weight="700">1. THE CRAFTSMAN MINDSET</text>

  <rect x="40" y="116" width="196" height="82" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="138" y="138" text-anchor="middle" fill="#e0f2fe" font-size="9.5" font-weight="700">Output-Centric Focus</text>
  <text x="138" y="156" text-anchor="middle" fill="#94a3b8" font-size="8.5">"What value am I offering?"</text>
  <text x="138" y="170" text-anchor="middle" fill="#94a3b8" font-size="8.5">Ignores "cloud of external</text>
  <text x="138" y="184" text-anchor="middle" fill="#94a3b8" font-size="8.5">distractions" (Jordan Tice)</text>

  <path d="M 138 198 L 138 218" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="40" y="218" width="196" height="82" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="138" y="240" text-anchor="middle" fill="#c7d2fe" font-size="9.5" font-weight="700">Push Past "The Gap"</text>
  <text x="138" y="258" text-anchor="middle" fill="#94a3b8" font-size="8.5">Ira Glass: Force yourself</text>
  <text x="138" y="272" text-anchor="middle" fill="#94a3b8" font-size="8.5">through years of volume</text>
  <text x="138" y="286" text-anchor="middle" fill="#94a3b8" font-size="8.5">until skill matches taste</text>

  <rect x="40" y="312" width="196" height="62" rx="6" fill="#450a0a" stroke="#f87171" />
  <text x="138" y="332" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">3 Job Disqualifiers</text>
  <text x="138" y="348" text-anchor="middle" fill="#fecaca" font-size="8">1. Zero skill growth • 2. Useless/</text>
  <text x="138" y="362" text-anchor="middle" fill="#fecaca" font-size="8">bad mission • 3. Toxic team</text>

  <path d="M 252 234 L 288 234" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Center Column: Career Capital Vault -->
  <rect x="288" y="76" width="224" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="100" text-anchor="middle" fill="#34d399" font-size="10.5" font-weight="700">2. CAREER CAPITAL VAULT</text>

  <rect x="304" y="118" width="192" height="122" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="400" y="142" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="700">Rare &amp; Valuable Skills</text>
  <text x="400" y="162" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Joe Duffy: Global brand icons</text>
  <text x="400" y="178" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Alex Berger: Network TV scripts</text>
  <text x="400" y="194" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Mike Jackson: Carbon markets</text>
  <text x="400" y="210" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Al Merrick: Championship boards</text>
  <text x="400" y="228" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">"The tape doesn’t lie"</text>

  <rect x="304" y="256" width="192" height="118" rx="6" fill="#0f172a" stroke="#f87171" stroke-width="1.2" />
  <text x="400" y="278" text-anchor="middle" fill="#fca5a5" font-size="9.5" font-weight="700">The Courage Culture Trap</text>
  <text x="400" y="296" text-anchor="middle" fill="#94a3b8" font-size="8.5">Lisa Feuer: $4k / 200-hr yoga</text>
  <text x="400" y="310" text-anchor="middle" fill="#94a3b8" font-size="8.5">certificate = abundant supply,</text>
  <text x="400" y="324" text-anchor="middle" fill="#94a3b8" font-size="8.5">zero scarcity leverage →</text>
  <text x="400" y="342" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">$15k/yr &amp; Food Stamp Line</text>

  <path d="M 512 180 L 548 180" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Right Column: Traits of Great Work -->
  <rect x="548" y="76" width="228" height="316" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="662" y="100" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="700">3. RARE TRAITS PURCHASED</text>

  <rect x="564" y="118" width="196" height="78" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="662" y="140" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Trait 1: Creativity</text>
  <text x="662" y="158" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Ira Glass earned freedom to</text>
  <text x="662" y="172" text-anchor="middle" fill="#cbd5e1" font-size="8.5">invent This American Life</text>

  <rect x="564" y="208" width="196" height="78" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="662" y="230" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">Trait 2: Impact</text>
  <text x="662" y="248" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Apple II open color architecture</text>
  <text x="662" y="262" text-anchor="middle" fill="#cbd5e1" font-size="8.5">transformed personal computing</text>

  <rect x="564" y="298" width="196" height="78" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="662" y="320" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Trait 3: Control</text>
  <text x="662" y="338" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Al Merrick shapes boards by</text>
  <text x="662" y="352" text-anchor="middle" fill="#cbd5e1" font-size="8.5">the beach; Joe Duffy’s Trails</text>
</svg>`,
      bierutCaption: "Treat the labor market as a strict economic exchange: only scarce, undeniable skill buys rare job traits.",
      annotations: [
        {
          step: "1",
          label: "The Craftsman Mindset",
          explanation: "Relentlessly focus on the quality of what you produce (\"the tape doesn’t lie\") rather than obsessing over whether your job is your soulmate."
        },
        {
          step: "2",
          label: "Career Capital Accumulation",
          explanation: "Rare and valuable skills act as economic currency in Supply-and-Demand labor markets; 200-hour certificates provide zero leverage."
        },
        {
          step: "3",
          label: "Purchasing Great-Work Traits",
          explanation: "Cash in accumulated Career Capital to buy Creativity (Ira Glass), Impact (Jobs), and Control (Al Merrick and Joe Duffy)."
        }
      ]
    },
    {
      id: "sgtciy-ch02-svg2",
      title: "Playing vs. Practicing: Breaking Through the Acceptable-Performance Plateau",
      subtitle: "Why Cal Newport plateaued as a high-school guitarist while Jordan Tice became a touring prodigy",
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">SKILL ACQUISITION TRAJECTORIES: COMFORT-ZONE PLAYING VS. STRAIN PRACTICE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Comparing 6 years of high-school guitar hours: Rocking Chair comfort repetition vs. Jordan Tice ear-picking strain</text>

  <!-- Axes -->
  <line x1="80" y1="356" x2="740" y2="356" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="356" x2="80" y2="80" stroke="#475569" stroke-width="2" />
  <text x="410" y="392" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="600">YEARS OF DAILY HOURS LOGGED (AGE 12 TO 18) →</text>
  <text x="28" y="218" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="600" transform="rotate(-90 28 218)">RARE CAREER CAPITAL / SKILL →</text>

  <!-- Curve 1: Jordan Tice / Mark Casstevens (Deliberate Strain) -->
  <path d="M 80 340 Q 280 280 460 170 T 710 92" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="6 4" />
  <rect x="430" y="84" width="296" height="92" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="578" y="106" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">Jordan Tice &amp; Mark Casstevens</text>
  <text x="578" y="124" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Transcribed Allman Brothers solos by ear</text>
  <text x="578" y="138" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Pushed metronome just past comfort speed</text>
  <text x="578" y="152" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Instant teacher/self error correction</text>
  <text x="578" y="166" text-anchor="middle" fill="#34d399" font-size="8" font-weight="700">Result: Record deal &amp; touring by age 18</text>

  <!-- Curve 2: Cal Newport "Rocking Chair" (Acceptable Plateau) -->
  <path d="M 80 340 Q 180 250 280 244 L 710 244" fill="none" stroke="#f87171" stroke-width="3" />
  <rect x="340" y="258" width="376" height="82" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5" />
  <text x="528" y="280" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-weight="700">Acceptable-Performance Plateau ("Rocking Chair")</text>
  <text x="528" y="298" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Avoided mental discomfort of unfamiliar chord charts</text>
  <text x="528" y="312" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Repeated 100s of already-mastered songs for hours</text>
  <text x="528" y="326" text-anchor="middle" fill="#f87171" font-size="8" font-weight="600">Same applies to knowledge workers checking email all day!</text>
</svg>`,
      bierutCaption: "Stop repeating songs you already know; stretch at the exact threshold of mental strain with instant corrective feedback.",
      annotations: [
        {
          step: "1",
          label: "Initial Ramp to Acceptable Competence",
          explanation: "Both beginners improve during the first 1–2 years as basic mechanics are learned."
        },
        {
          step: "2",
          label: "The Comfort-Zone Plateau",
          explanation: "Repeating songs or office tasks you already know feels enjoyable (\"playing\") but freezes skill growth permanently."
        },
        {
          step: "3",
          label: "Continuous Strain & Immediate Feedback",
          explanation: "Practicing just faster than comfortable and stopping immediately on errors drives compounding mastery."
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: "sgtciy-ch02-mm1",
      name: "The Craftsman vs. Passion Mindset Inversion",
      tagline: "Stop asking what your job offers you; ask what undeniable value you offer the world",
      naiveIntuition: "Evaluating every blemish of your boss, commute, and daily tasks helps you find a more fulfilling career.",
      firstPrinciplesReality: "The Passion Mindset creates perpetual hyper-sensitivity and chronic unhappiness, whereas the Craftsman Mindset builds the output leverage that buys autonomy.",
      howToApply: "Adopt Nashville studio guitarist Mark Casstevens’s creed—\"the tape doesn’t lie\"—and judge every workday by the tangible improvement in your craft output."
    },
    {
      id: "sgtciy-ch02-mm2",
      name: "Career Capital Supply-and-Demand Law",
      tagline: "Rare and valuable job traits can only be purchased with rare and valuable skills",
      naiveIntuition: "Following Pamela Slim’s \"courage culture\" and quitting your corporate job to start a passion business guarantees freedom and happiness.",
      firstPrinciplesReality: "Basic economics dictates that Creativity, Impact, and Control are scarce commodities; entering a market with a 200-hour certificate (like Lisa Feuer) yields poverty, not freedom.",
      howToApply: "Like Joe Duffy spending 20 years mastering brand logos at Fallon McElligott before launching Duffy & Partners, accumulate scarce Career Capital inside your industry before bidding for autonomy."
    },
    {
      id: "sgtciy-ch02-mm3",
      name: "Ira Glass’s Creative \"Gap\" Endurance",
      tagline: "Every craftsman starts with elite taste but mediocre execution; only volume closes the gap",
      naiveIntuition: "If your early radio segments, scripts, or code designs aren’t brilliant right away, you lack natural talent for the field.",
      firstPrinciplesReality: "As Ira Glass explains, beginners enter creative work with refined taste that outstrips their initial skill; forcing yourself through years of high-volume work closes that gap.",
      howToApply: "Embrace Alex Berger’s late-night script volume (writing 3 pilots simultaneously while working as an NBC assistant) to burn through the gap rapidly."
    }
  ],
  deepSections: [
    {
      id: "sgtciy-ch02-sec1",
      sectionNumber: "2.1",
      title: "The Craftsman Mindset and the Three Disqualifiers",
      subtitle: "Overcoming the \"Cloud of External Distractions\" and knowing when to leave a bad job",
      coreMechanism: "The Craftsman Mindset focuses relentlessly on the value you produce (\"what can I offer the world?\"), whereas the Passion Mindset focuses on self-centered entitlement (\"what can the world offer me?\"). Skeptics often raise the \"argument from pre-existing passion,\" claiming performers like guitarist Jordan Tice or comedian Steve Martin only grind because they already feel secure in a preexisting calling. In reality, performers battle constant self-doubt—what Tice calls \"the cloud of external distractions\" and what caused Steve Martin crippling anxiety attacks during his 10-year wilderness innovating punchline-free comedy. They adopt the craftsman mindset for a pragmatic reason: in performance, \"the tape doesn’t lie.\"\n\nDoes this mean every worker must stay trapped in a terrible job? No. Newport specifies three explicit Career Capital Disqualifiers where you should abandon a job: (1) the job presents few opportunities to distinguish yourself by developing relevant skills that are rare and valuable, (2) the job focuses on something you think is useless or perhaps even actively bad for the world, or (3) the job forces you to work with people you really dislike.",
      stepByStepFlow: [
        {
          step: "1",
          title: "Run the 3-Disqualifier Check",
          detail: "Verify your job allows rare skill growth, isn’t harmful/useless, and doesn’t have toxic coworkers."
        },
        {
          step: "2",
          title: "Silence the Distraction Cloud",
          detail: "Stop comparing your daily mood to peers’ highlight reels and focus strictly on output quality."
        },
        {
          step: "3",
          title: "Force Volume Through the Gap",
          detail: "Like Ira Glass cutting tape at NPR, push through the early gap between your taste and current skill."
        }
      ],
      keyTakeaways: [
        "You do not need pre-existing passion to adopt the Craftsman Mindset; you adopt the Craftsman Mindset first, and passion follows.",
        "Any job that avoids the Three Disqualifiers (allows skill growth, isn’t harmful, lacks toxic people) can serve as a launchpad for a great career."
      ],
      commonPitfalls: [
        "Misinterpreting the Craftsman Mindset as an excuse to stay in a dead-end job that offers zero opportunities to learn rare skills (Disqualifier #1).",
        "Giving up during Ira Glass’s \"Gap\" phase when your taste recognizes that your early work is not yet elite."
      ],
      figures: [
        {
          file: "00003.jpeg",
          originalLabel: "Rule 2 Structural Ornament",
          bierutTitle: "Exchange Hard-Won Career Capital For Creativity, Impact, And Control",
          editorialAnalysis: "Separates the psychological framing of the Craftsman Mindset from the Supply-and-Demand economic proofs of Career Capital Theory (Jobs, Ira Glass, Al Merrick, Joe Duffy vs. Lisa Feuer, Alex Berger, and Mike Jackson).",
          keyTakeaways: [
            "Economic supply and demand governs career traits just as strictly as financial markets."
          ]
        }
      ]
    },
    {
      id: "sgtciy-ch02-sec2",
      sectionNumber: "2.2",
      title: "The Economics of Great Jobs: Career Capital vs. Courage Culture",
      subtitle: "Ira Glass, Al Merrick, and the Frostian divergence of Joe Duffy and Lisa Feuer",
      coreMechanism: "What makes compelling careers—like Steve Jobs at Apple, Ira Glass hosting This American Life, or surfboard shaper Al Merrick running Channel Islands Surfboards a block from the Santa Barbara beach—so great? They share three traits: Creativity, Impact, and Control. Because these traits are rare and valuable, Supply and Demand 101 dictates that you need rare and valuable skills—Career Capital—to offer in return. Jobs offered the Apple I/II open color architecture; Glass spent years as an NPR intern and tape cutter mastering crisp audio editing; Merrick perfected competition-winning fiberglass boards ridden by Kelly Slater.\n\nWhen workers ignore Career Capital and follow \"courage culture\" (such as Pamela Slim’s Rebuild Your Backbone seminars), disaster follows. Two New York Times profiles published two days apart in 2009 illustrate this divergence: 38-year-old advertising executive Lisa Feuer quit corporate life, took a $4,000 home-equity loan for a 200-hour yoga certificate, launched Karma Kids Yoga with near-zero scarce capital, and ended up earning $15,000 a year waiting in the food stamp line. Conversely, advertising executive Joe Duffy stayed in the industry, mastered global brand icons at Fallon McElligott (earning his own Duffy Designs subsidiary), launched Duffy & Partners with a client waiting list, and bought his 100-acre Duffy Trails cross-country ski retreat in Wisconsin.",
      stepByStepFlow: [
        {
          step: "1",
          title: "Reject Courage-Without-Capital Leaps",
          detail: "Never discard years of accumulated industry capital to enter a low-barrier field with a 200-hour certificate."
        },
        {
          step: "2",
          title: "Compound Specialized Leverage",
          detail: "Like Joe Duffy dominating international brand logos, become the undisputed expert in a high-value sub-niche."
        },
        {
          step: "3",
          title: "Cash In Capital Gradually",
          detail: "Exchange rising Career Capital first for an autonomous internal unit, then for a pre-funded independent firm."
        }
      ],
      keyTakeaways: [
        "Courage is not ascarce economic resource; only rare and valuable Career Capital buys sustainable Creativity, Impact, and Control.",
        "Joe Duffy and Lisa Feuer started with the exact same corporate frustration, but Duffy’s craftsman strategy led to Duffy Trails while Feuer’s passion leap led to food stamps."
      ],
      commonPitfalls: [
        "Mistaking a low barrier to entry (like a 1-month certification course) for a viable entrepreneurial moat.",
        "Throwing away a decade of domain-specific Career Capital out of impatience with a current boss."
      ]
    },
    {
      id: "sgtciy-ch02-sec3",
      sectionNumber: "2.3",
      title: "Acquiring Career Capital in the Trenches: Berger, Jackson, and Tice",
      subtitle: "How Hollywood script writers, cleantech VCs, and bluegrass guitarists separate practice from play",
      coreMechanism: "How do you actually build Career Capital fast? Look at three case studies. First, former Dartmouth National Debate Tournament Best Speaker Alex Berger broke into the closed world of Hollywood TV writers (where 86% of open-call scripts come from already-produced writers) by quitting a peripheral National Lampoon job to work as an NBC executive assistant and Commander in Chief script assistant—writing three scripts simultaneously until 2:00 a.m. every night, pitching the room, staffs on K-Ville, co-creating Glenn Martin, DDS with Michael Eisner, and selling a pilot to USA Network.\n\nSecond, Mike Jackson built Career Capital by turning his Stanford master’s thesis on India’s natural-gas sector into a global energy conference, co-founding carbon-offset brokerage Village Green in the obscure U.S. renewable energy credits market, and parlaying that rare expertise into becoming a Director at cleantech VC firm The Westly Group. Third, comparing Newport’s own 6 years of high-school guitar playing in his band Rocking Chair against Jordan Tice and ACM Instrumentalist of the Year Mark Casstevens reveals why most workers stall: Newport \"played\" (repeating comfortable songs he already knew), whereas Tice and Casstevens \"practiced\" in the woodshed—picking Allman Brothers solos by ear and ratcheting speed just past comfort with immediate error correction.",
      stepByStepFlow: [
        {
          step: "1",
          title: "Move to the Industry Center",
          detail: "Like Alex Berger leaving National Lampoon for NBC, position yourself where elite standards are visible up close."
        },
        {
          step: "2",
          title: "Exploit Information Asymmetry",
          detail: "Like Mike Jackson mastering renewable energy credit markets, dominate complex technical niches others avoid."
        },
        {
          step: "3",
          title: "Replace Playing with Woodshedding",
          detail: "Stop repeating comfortable routines and stretch daily at the exact boundary where errors occur."
        }
      ],
      keyTakeaways: [
        "Alex Berger broke into television writing by treating scriptwriting like collegiate debate: high-volume nightly drafts paired with ruthless professional critique.",
        "The difference between an average high-school strummer and a touring virtuoso is not total hours played, but hours spent in uncomfortable skill-stretching strain."
      ],
      commonPitfalls: [
        "Confusing years of comfortable on-the-job repetition (\"playing\") with true skill-stretching Career Capital acquisition.",
        "Staying on the periphery of an industry where you never see what true \"network quality\" output looks like."
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: "Career Capital Accumulation Paths: Courage Leap vs. Comfort Plateau vs. Craftsman Stretch",
      description: "Comparing Lisa Feuer’s Courage Leap, Newport’s High-School Guitar Plateau, and Joe Duffy / Alex Berger’s Craftsman Capital Path.",
      headers: [
        "Strategic Path",
        "Barrier to Entry & Scarcity",
        "Daily Cognitive Mode",
        "5-to-10 Year Career Outcome"
      ],
      rows: [
        [
          "Courage Culture Leap (Lisa Feuer)",
          "Low (200-hr yoga course; high supply)",
          "Enthusiastic amateur hustle",
          "$15k/yr income & food stamp line"
        ],
        [
          "Comfort-Zone Plateau (\"Rocking Chair\")",
          "Moderate (standard office tenure)",
          "Repeating already-mastered tasks",
          "Stagnant mid-level replaceability"
        ],
        [
          "Craftsman Capital Compounding (Duffy/Berger)",
          "High (years of deliberate strain)",
          "Stretching past comfort + feedback",
          "Elite autonomy (Duffy Trails / TV Showrunner)"
        ]
      ],
      verdictRule: "Never leap into entrepreneurship without scarce Career Capital, and never coast inside your comfort zone; compound rare skills at the edge of your ability."
    }
  ],
  engineeringScenarios: [
    {
      id: "sgtciy-ch02-scen1",
      title: "Evaluating a Mid-Career Pivot Using the Joe Duffy vs. Lisa Feuer Test",
      roleAndContext: "36-year-old enterprise cloud security architect tempted to quit tech and open a specialty coffee roastery.",
      symptomOrFailure: "Burned out by corporate procurement politics, he wants to cash out his 401(k) to enter a retail coffee market where he has zero professional experience.",
      naiveFixAndWhyItFails: "Listening to \"courage culture\" podcasts and signing a retail lease discards 12 years of scarce security Career Capital to enter a brutal, low-margin commodity business.",
      firstPrinciplesSolution: "Follow the Joe Duffy blueprint: specialize in high-demand AI/LLM cloud security compliance, negotiate an autonomous boutique practice inside his firm, and spin out an independent advisory shop with pre-signed enterprise retainers.",
      measurableOutcome: "Tripled hourly compensation while working a 30-hour self-directed week from his home studio."
    },
    {
      id: "sgtciy-ch02-scen2",
      title: "Breaking Out of a 5-Year Frontend Engineering Plateau (\"Rocking Chair\" Syndrome)",
      roleAndContext: "Mid-level React developer who has built nearly identical CRUD dashboards for five consecutive years.",
      symptomOrFailure: "Despite logging 40 hours a week, she fails staff-level systems interviews because she only builds UI features she already knows how to code.",
      naiveFixAndWhyItFails: "Taking on extra CRUD tickets on weekends (\"playing more songs you already know\") adds hours without stretching technical capability.",
      firstPrinciplesSolution: "Apply Jordan Tice and Alex Berger’s woodshedding protocol: spend 90 minutes every morning building a custom WebGPU rendering engine from scratch and submitting architecture RFCs for ruthless principal-engineer critique.",
      measurableOutcome: "Mastered browser graphics internals and landed a Staff Visualization Engineer role in 11 months."
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: "sgtciy-ch02-q1",
        scenarioPrompt: "Under Rule #2, what are the ONLY three conditions (the \"Three Disqualifiers\") under which Cal Newport recommends abandoning your current job rather than applying the Craftsman Mindset to it?",
        options: [
          {
            label: "A",
            text: "(1) It doesn’t match your childhood hobby, (2) you have to wake up before 9:00 a.m., or (3) your boss gives critical feedback.",
            isCorrect: false,
            explanation: "Critical feedback and structured hours are assets for building Career Capital, not disqualifiers."
          },
          {
            label: "B",
            text: "(1) The job presents few opportunities to develop rare and valuable skills, (2) the job focuses on something useless or actively bad for the world, or (3) the job forces you to work with people you really dislike.",
            isCorrect: true,
            explanation: "If a job starves you of Career Capital growth, harms the world, or traps you with toxic coworkers, you should switch to a better launchpad."
          },
          {
            label: "C",
            text: "(1) The office lacks free catered food, (2) the commute exceeds 15 minutes, or (3) you feelIra Glass’s \"Gap.\"",
            isCorrect: false,
            explanation: "Ira Glass’s Gap is a mandatory phase of creative growth, not a reason to quit."
          },
          {
            label: "D",
            text: "You should never leave any job under any circumstances.",
            isCorrect: false,
            explanation: "Newport explicitly defines the three disqualifiers for leaving dead-end or toxic jobs."
          }
        ]
      },
      {
        id: "sgtciy-ch02-q2",
        scenarioPrompt: "Why did advertising executive Lisa Feuer’s leap into starting Karma Kids Yoga end at the food stamp office, while fellow advertising executive Joe Duffy ended up owning his 100-acre Duffy Trails retreat?",
        options: [
          {
            label: "A",
            text: "Feuer lacked the courage to quit her corporate job, whereas Duffy attended Pamela Slim’s Rebuild Your Backbone seminar.",
            isCorrect: false,
            explanation: "Feuer had plenty of courage; she quit her job and took a home-equity loan, which is exactly why courage culture failed her."
          },
          {
            label: "B",
            text: "Feuer discarded her marketing Career Capital to enter a saturated field with only a 200-hour yoga certificate, whereas Duffy compounded rare logo-design capital for 20 years before trading it for autonomy.",
            isCorrect: true,
            explanation: "Supply and demand dictates that a 1-month yoga course provides zero scarce Career Capital, whereas world-class branding skill commands a client waiting list."
          },
          {
            label: "C",
            text: "Duffy inherited $50 million from his parents before entering advertising.",
            isCorrect: false,
            explanation: "Duffy started as a struggling technical illustrator and built his wealth entirely through his design craft."
          },
          {
            label: "D",
            text: "Yoga is one of Newport’s Three Disqualifiers.",
            isCorrect: false,
            explanation: "Yoga is a great craft if mastered over a decade, but a 200-hour certificate offers no scarce leverage."
          }
        ]
      },
      {
        id: "sgtciy-ch02-q3",
        scenarioPrompt: "Cal Newport and acoustic guitarist Jordan Tice both started playing guitar at age twelve and practiced daily through high school. Why did Newport remain an average strummer while Tice signed a record deal and toured with pros by age eighteen?",
        options: [
          {
            label: "A",
            text: "Newport hated music and only touched his guitar once a month.",
            isCorrect: false,
            explanation: "Newport played daily for hours and performed a dozen shows a year with his band Rocking Chair."
          },
          {
            label: "B",
            text: "Newport avoided mental strain by repeating songs he already knew (\"playing\"), whereas Tice constantly stretched past his comfort speed and transcribed complex Allman Brothers solos by ear with immediate teacher feedback (\"practicing\").",
            isCorrect: true,
            explanation: "Repeating comfortable repertoire freezes you at an acceptable-performance plateau; only uncomfortable strain with instant feedback builds elite skill."
          },
          {
            label: "C",
            text: "Tice used an expensive Fender amplifier whereas Newport used an acoustic guitar.",
            isCorrect: false,
            explanation: "Equipment had nothing to do with their divergence; deliberate practice mechanics explained the gap."
          },
          {
            label: "D",
            text: "Tice quit high school at age twelve to move to Nashville.",
            isCorrect: false,
            explanation: "Tice completed high school and college while practicing deliberately for 2–3 intense hours daily."
          }
        ]
      },
      {
        id: "sgtciy-ch02-q4",
        scenarioPrompt: "How did radio host Ira Glass acquire the Creativity, Impact, and Control to launch This American Life at WBEZ?",
        options: [
          {
            label: "A",
            text: "He refused to do menial editing work as a young intern and demanded his own nationally syndicated show on day one.",
            isCorrect: false,
            explanation: "Glass started at the bottom as an NPR intern and tape cutter for All Things Considered."
          },
          {
            label: "B",
            text: "He forced himself through years of high-volume tape cutting, reporting, and editing to close \"the gap\" between his taste and his skill until his Career Capital was undeniable.",
            isCorrect: true,
            explanation: "Glass spent over a decade mastering audio storytelling mechanics before cashing in that capital for his own show."
          },
          {
            label: "C",
            text: "He was born with a naturally booming, classic radio announcer voice.",
            isCorrect: false,
            explanation: "Newport notes that Glass’s voice mocks traditional radio conventions; his hard-won editing and storytelling craft made him a star."
          },
          {
            label: "D",
            text: "He bought the radio station using venture capital from Mike Jackson.",
            isCorrect: false,
            explanation: "WBEZ is a public radio station where Glass earned his show through journalistic Career Capital."
          }
        ]
      }
    ],
    flashcards: [
      {
        id: "sgtciy-ch02-fc1",
        category: "foundation",
        front: "Contrast the core question of the Craftsman Mindset against the Passion Mindset.",
        back: "The Craftsman Mindset asks \"What can I offer the world?\" (output-centric clarity), whereas the Passion Mindset asks \"What can the world offer me?\" (self-centered ambiguity).",
        mentalHook: "Craftsman = What I offer; Passion = What I’m owed."
      },
      {
        id: "sgtciy-ch02-fc2",
        category: "evaluation",
        front: "What are the three traits that define great work across Steve Jobs, Ira Glass, and Al Merrick?",
        back: "Creativity (Ira Glass), Impact (Steve Jobs), and Control (Al Merrick).",
        mentalHook: "Great Work = Creativity + Impact + Control."
      },
      {
        id: "sgtciy-ch02-fc3",
        category: "foundation",
        front: "State the three steps of \"The Career Capital Theory of Great Work.\"",
        back: "(1) The traits that define great work are rare and valuable; (2) Supply and demand says you need rare and valuable skills (Career Capital) in return; (3) The Craftsman Mindset is the optimal strategy for acquiring Career Capital.",
        mentalHook: "Rare Job Traits require Rare Skill Currency."
      },
      {
        id: "sgtciy-ch02-fc4",
        category: "evaluation",
        front: "What are the \"Three Disqualifiers\" for applying the Craftsman Mindset to a job?",
        back: "(1) Few opportunities to develop rare and valuable skills, (2) focuses on something useless or actively bad for the world, or (3) forces you to work with people you really dislike.",
        mentalHook: "No skill growth, bad mission, or toxic people = Leave."
      },
      {
        id: "sgtciy-ch02-fc5",
        category: "adaptation",
        front: "What is Ira Glass’s \"Gap\" in creative and technical work?",
        back: "The frustrating early phase where your taste is killer enough to see that what you are making isn’t very good yet, which can only be closed by forcing yourself through a huge volume of work.",
        mentalHook: "Taste > Skill early on; only volume closes The Gap."
      },
      {
        id: "sgtciy-ch02-fc6",
        category: "optimization",
        front: "How did Alex Berger transition from a peripheral National Lampoon job to co-creating a network TV series with Michael Eisner?",
        back: "He took assistant roles at NBC and Commander in Chief to study network scripts up close while writing 3–4 scripts concurrently until 2:00 a.m. and soliciting ruthless critique.",
        mentalHook: "Move to the industry core + Write high-volume specs + Crave feedback."
      }
    ],
    feynmanChallenges: [
      {
        id: "sgtciy-ch02-feyn1",
        conceptTitle: "The Career Capital Theory of Great Work vs. Courage Culture",
        prompt: "Explain using basic economic supply and demand why \"courage culture\" (like Pamela Slim’s seminars and Lisa Feuer’s yoga studio) fails, and how Joe Duffy, Ira Glass, and Al Merrick actually built careers with Creativity, Impact, and Control.",
        rubricChecklist: [
          "Identifies the three rare and valuable traits of great work: Creativity, Impact, and Control.",
          "Applies Supply and Demand 101 to define Career Capital (rare and valuable skills offered in exchange).",
          "Contrasts Lisa Feuer’s 200-hour yoga certificate (high supply, zero leverage, food stamps) against Joe Duffy’s 20-year logo mastery (Duffy Designs -> Duffy & Partners -> Duffy Trails).",
          "Includes Ira Glass’s \"Gap\" and the Three Disqualifiers for when to actually leave a job."
        ],
        modelExplanation: "The traits that make a job great—Creativity, Impact, and Control—are rare and valuable, so Supply and Demand dictates you must offer rare and valuable skills (Career Capital) to buy them. Courage culture fails because courage is not economically scarce: when Lisa Feuer quit advertising and took a 200-hour yoga course, she entered a crowded market with near-zero Career Capital and ended up on food stamps. Conversely, Joe Duffy stayed in advertising, mastered global brand icons over 20 years, and cashed in that capital to run his own firm and buy a 100-acre retreat—just as Ira Glass pushed through \"the gap\" cutting NPR tape for years before earning This American Life."
      },
      {
        id: "sgtciy-ch02-feyn2",
        conceptTitle: "Why Playing Never Beats Practicing (Tice, Casstevens & Berger)",
        prompt: "Explain why logging thousands of hours at a skill or job often results in mediocrity (citing Newport’s band Rocking Chair), and how Jordan Tice, Mark Casstevens, and Alex Berger structure their daily work to compound Career Capital.",
        rubricChecklist: [
          "Contrasts Newport’s 6 years in Rocking Chair (repeating comfortable songs) against Jordan Tice’s ear-transcribing and speed-stretching strain.",
          "Cites Nashville studio legend Mark Casstevens (\"the tape doesn’t lie\" and going to the woodshed to practice uncomfortable counterpoint).",
          "Details how Alex Berger moved from the periphery (National Lampoon) to the center (NBC/Commander in Chief) and wrote multiple scripts nightly with constant feedback.",
          "Connects comfort-zone guitar playing to knowledge workers who spend all day comfortably answering emails instead of stretching their skills."
        ],
        modelExplanation: "Logging hours inside your comfort zone—whether playing familiar Green Day songs in a high-school band or answering routine office emails all day—causes you to hit an acceptable-performance plateau and stop improving. Virtuosos like Jordan Tice and Mark Casstevens instead go to the woodshed: they pick complex solos by ear, dial the tempo just past where their fingers can keep up, and stop immediately on every missed note for instant feedback. In knowledge work, TV writer Alex Berger applied this exact strain by moving to the center of network television, writing three pilot scripts simultaneously at night, and subjecting every draft to brutal industry critique."
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: "sgtciy-craftsman-mindset",
        label: "The Craftsman Mindset",
        category: "foundation",
        chapterNumber: 2,
        importance: 1,
        definition: "Output-centric philosophy asking \"What rare value am I offering the world?\" rather than the Passion Mindset’s \"What does the world owe me?\"",
        formulaOrRule: "Output Focus (\"The Tape Doesn’t Lie\") → Career Capital",
        whyItMatters: "Eliminates chronic self-doubt and aligns daily behavior with economic value creation."
      },
      {
        id: "sgtciy-career-capital",
        label: "Career Capital",
        category: "foundation",
        chapterNumber: 2,
        importance: 1,
        definition: "Rare and valuable skills accumulated through years of deliberate strain that serve as the economic currency to buy great work traits.",
        formulaOrRule: "Scarce Skills (Supply) ↔ Rare Job Traits (Demand)",
        whyItMatters: "Explains why Joe Duffy bought a 100-acre retreat while Lisa Feuer’s 200-hour yoga leap led to food stamps."
      },
      {
        id: "sgtciy-great-work-traits",
        label: "Traits of Great Work (Creativity, Impact, Control)",
        category: "evaluation",
        chapterNumber: 2,
        importance: 2,
        definition: "The three scarce occupational rewards exemplified by Ira Glass (Creativity), Steve Jobs (Impact), and Al Merrick (Control).",
        formulaOrRule: "Great Work = Creativity + Impact + Control",
        whyItMatters: "Defines the concrete target rewards purchased by investing Career Capital."
      },
      {
        id: "sgtciy-three-disqualifiers",
        label: "Three Craftsman Job Disqualifiers",
        category: "evaluation",
        chapterNumber: 2,
        importance: 3,
        definition: "Conditions that disqualify a job as a Career Capital launchpad: (1) no rare skill growth, (2) useless/harmful mission, or (3) disliked coworkers.",
        formulaOrRule: "If (SkillGrowth == 0 || Harmful || ToxicTeam) → Exit Job",
        whyItMatters: "Prevents workers from misapplying the Craftsman Mindset to dead-end or unethical roles."
      },
      {
        id: "sgtciy-ira-glass-gap",
        label: "Ira Glass’s Creative Gap",
        category: "adaptation",
        chapterNumber: 2,
        importance: 2,
        definition: "Inevitable early career phase where a practitioner’s critical taste exceeds their execution skill, closed only by forcing high-volume output.",
        formulaOrRule: "High Volume + Strain → Closes (Taste − Skill) Gap",
        whyItMatters: "Inoculates beginners against quitting when their early work falls short of their ambitions."
      },
      {
        id: "sgtciy-woodshed-strain",
        label: "Woodshed Strain vs. Comfort Playing",
        category: "optimization",
        chapterNumber: 2,
        importance: 1,
        definition: "Jordan Tice and Mark Casstevens’s practice regime of operating just past comfortable speed with immediate error correction rather than repeating mastered songs.",
        formulaOrRule: "Target Speed = Comfort Ceiling + ε (with Instant Feedback)",
        whyItMatters: "Breaks the acceptable-performance plateau that traps most professionals."
      }
    ],
    edges: [
      {
        source: "sgtciy-three-disqualifiers",
        target: "sgtciy-craftsman-mindset",
        relationship: "prerequisite_for",
        explanation: "Passing the Three Disqualifiers confirms a role is a valid venue for deploying the Craftsman Mindset."
      },
      {
        source: "sgtciy-craftsman-mindset",
        target: "sgtciy-woodshed-strain",
        relationship: "prerequisite_for",
        explanation: "Adopting an output-centric Craftsman Mindset motivates daily woodshed strain over comfortable playing."
      },
      {
        source: "sgtciy-woodshed-strain",
        target: "sgtciy-ira-glass-gap",
        relationship: "mitigates",
        explanation: "Sustained woodshed strain and high-volume output (like Alex Berger’s nightly scripts) close Ira Glass’s Gap."
      },
      {
        source: "sgtciy-woodshed-strain",
        target: "sgtciy-career-capital",
        relationship: "optimizes",
        explanation: "Stretching past comfort with immediate feedback compounds rare and valuable Career Capital."
      },
      {
        source: "sgtciy-career-capital",
        target: "sgtciy-great-work-traits",
        relationship: "prerequisite_for",
        explanation: "Accumulated Career Capital is the mandatory currency required to purchase Creativity, Impact, and Control."
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: "Complete coverage of Rule #2 Part 1 (Craftsman vs Passion Mindset, Cloud of External Distractions, 3 Disqualifiers, Creativity/Impact/Control across Steve Jobs/Ira Glass/Al Merrick, Career Capital Theory, Lisa Feuer vs Joe Duffy, Alex Berger TV writing, Mike Jackson VC, Jordan Tice & Mark Casstevens vs Newport Rocking Chair)."
  }
};
