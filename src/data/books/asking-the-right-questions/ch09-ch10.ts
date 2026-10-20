import { ChapterMastery } from '../../../types/book';

export const arqCh09Mastery: ChapterMastery = {
  chapterNumber: 9,
  chapterId: 'ch09',
  title: 'Are There Rival Causes?',
  subtitle:
    'Causal trigger taxonomy, the pervasiveness of competing hypotheses across personal, historical, and scientific domains, contributory causes vs. sole causes, structural covariation graphs (X -> Y, Y -> X, Z -> X,Y, X <-> Y), Post Hoc Ergo Propter Hoc, fundamental attribution error, and the 6-criterion causal evaluation protocol.',
  readingTimeMinutes: 10,
  sourceWordCount: 5094,
  executiveThesis:
    'Human cognition is wired to construct immediate causal narratives whenever two events covary or occur in temporal sequence.',
  paradigmShift: {
    oldWay:
      'Single-Story Causal Lock-In: Accept the author’s favored causal explanation whenever the evidence is consistent with it.',
    newWay:
      'Systematic Rival-Cause Generation & Structural Auditing: Treat any correlation or sequence as an underdetermined observation compatible with multiple causal graphs.',
    whyItChanged:
      'In observational studies, historical events, and complex socio-technical systems, randomized controlled isolation is rarely available.',
  },
  heroIllustrationUrl: '/books/asking-the-right-questions/assets/arq_ch09_plate.png',
  customDiagrams: [
    {
      id: 'arq-ch09-svg-causal-dag',
      title: 'The Four Structural Architectures of Observed Covariation (X & Y)',
      subtitle:
        'Why an observed statistical association Cov(X, Y) != 0 never uniquely identifies a single causal arrow without ruling out three structural rivals',
      svgCode: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="arqCh09Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="arrSky9" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrAmber9" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="arrRose9" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
    <marker id="arrEmerald9" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="400" rx="12" fill="url(#arqCh09Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">CONFUSING CAUSATION WITH ASSOCIATION: THE 4 STRUCTURAL HYPOTHESES</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Observation: Characteristic X and Characteristic Y covary in the data. Which causal mechanism generated the pattern?</text>

  <!-- Quadrant 1: Explanation 1 (X -> Y) -->
  <rect x="28" y="66" width="362" height="142" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="88" fill="#38bdf8" font-size="11.5" font-weight="700">HYPOTHESIS 1: DIRECT CAUSATION (X -&gt; Y)</text>
  <text x="44" y="104" fill="#94a3b8" font-size="9.5">The author's favored claim: X directly brings about outcome Y</text>
  <rect x="52" y="118" width="110" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="107" y="137" fill="#e0f2fe" font-size="10.5" font-weight="700" text-anchor="middle">Factor X</text>
  <text x="107" y="151" fill="#7dd3fc" font-size="8.5" text-anchor="middle">Smoking (n=525)</text>
  <line x1="166" y1="139" x2="236" y2="139" stroke="#38bdf8" stroke-width="2.2" marker-end="url(#arrSky9)" />
  <text x="201" y="131" fill="#38bdf8" font-size="8.5" font-weight="600" text-anchor="middle">kills virus</text>
  <rect x="242" y="118" width="126" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="305" y="137" fill="#e0f2fe" font-size="10.5" font-weight="700" text-anchor="middle">Outcome Y</text>
  <text x="305" y="151" fill="#7dd3fc" font-size="8.5" text-anchor="middle">67% Flu-Free (3 yrs)</text>
  <text x="44" y="182" fill="#cbd5e1" font-size="9">• Claim: Nicotine in cigarette smoke destroys flu virus before infection.</text>
  <text x="44" y="196" fill="#94a3b8" font-size="8.5">• Status: Only 1 of 4 structural possibilities consistent with the correlation.</text>

  <!-- Quadrant 2: Explanation 2 (Y -> X) -->
  <rect x="410" y="66" width="362" height="142" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="426" y="88" fill="#fbbf24" font-size="11.5" font-weight="700">HYPOTHESIS 2: REVERSE CAUSATION (Y -&gt; X)</text>
  <text x="426" y="104" fill="#94a3b8" font-size="9.5">Confusion of Cause &amp; Effect Fallacy: The outcome actually drives X</text>
  <rect x="434" y="118" width="110" height="42" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="489" y="137" fill="#fef3c7" font-size="10.5" font-weight="700" text-anchor="middle">Factor X</text>
  <text x="489" y="151" fill="#fcd34d" font-size="8.5" text-anchor="middle">Continued Smoking</text>
  <line x1="620" y1="139" x2="550" y2="139" stroke="#f59e0b" stroke-width="2.2" marker-end="url(#arrAmber9)" />
  <text x="585" y="131" fill="#fbbf24" font-size="8.5" font-weight="600" text-anchor="middle">enables habit</text>
  <rect x="624" y="118" width="126" height="42" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="687" y="137" fill="#fef3c7" font-size="10.5" font-weight="700" text-anchor="middle">Outcome Y</text>
  <text x="687" y="151" fill="#fcd34d" font-size="8.5" text-anchor="middle">Being Respiratory-Healthy</text>
  <text x="426" y="182" fill="#cbd5e1" font-size="9">• Rival Cause: People free from respiratory viruses keep smoking;</text>
  <text x="426" y="196" fill="#94a3b8" font-size="8.5">  those hit by severe flu quit smoking, leaving healthy survivors in sample.</text>

  <!-- Quadrant 3: Explanation 3 (Z -> X and Z -> Y) -->
  <rect x="28" y="222" width="362" height="156" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="44" y="244" fill="#fda4af" font-size="11.5" font-weight="700">HYPOTHESIS 3: THIRD-FACTOR CONFOUNDER (Z -&gt; X, Y)</text>
  <text x="44" y="260" fill="#94a3b8" font-size="9.5">Neglect of a Common Cause Fallacy: Lurking variable Z drives both</text>
  <rect x="136" y="268" width="144" height="34" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1.4" />
  <text x="208" y="283" fill="#ffe4e6" font-size="9.5" font-weight="700" text-anchor="middle">Confounder Z</text>
  <text x="208" y="295" fill="#fda4af" font-size="8" text-anchor="middle">Summer Heat / Handwashing</text>
  <rect x="48" y="314" width="114" height="32" rx="5" fill="#0f172a" stroke="#cbd5e1" stroke-width="1" />
  <text x="105" y="334" fill="#f8fafc" font-size="9" font-weight="600" text-anchor="middle">X: Ice Cream / Smoke</text>
  <rect x="254" y="314" width="114" height="32" rx="5" fill="#0f172a" stroke="#cbd5e1" stroke-width="1" />
  <text x="311" y="334" fill="#f8fafc" font-size="9" font-weight="600" text-anchor="middle">Y: Crime / No Flu</text>
  <line x1="168" y1="302" x2="122" y2="314" stroke="#f43f5e" stroke-width="1.8" marker-end="url(#arrRose9)" />
  <line x1="248" y1="302" x2="294" y2="314" stroke="#f43f5e" stroke-width="1.8" marker-end="url(#arrRose9)" />
  <text x="44" y="365" fill="#cbd5e1" font-size="8.5">• P(Y | do(X)) = P(Y): Intervening on X (banning ice cream) has zero effect on Y.</text>

  <!-- Quadrant 4: Explanation 4 (X <-> Y) -->
  <rect x="410" y="222" width="362" height="156" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="426" y="244" fill="#6ee7b7" font-size="11.5" font-weight="700">HYPOTHESIS 4: BIDIRECTIONAL FEEDBACK (X &lt;-&gt; Y)</text>
  <text x="426" y="260" fill="#94a3b8" font-size="9.5">Circular / Reciprocal Causality: "A circle has no beginning"</text>
  <rect x="434" y="282" width="114" height="44" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.2" />
  <text x="491" y="301" fill="#d1fae5" font-size="10" font-weight="700" text-anchor="middle">Variable X</text>
  <text x="491" y="315" fill="#6ee7b7" font-size="8.5" text-anchor="middle">Behavioral Choice</text>
  <rect x="628" y="282" width="122" height="44" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.2" />
  <text x="689" y="301" fill="#d1fae5" font-size="10" font-weight="700" text-anchor="middle">Variable Y</text>
  <text x="689" y="315" fill="#6ee7b7" font-size="8.5" text-anchor="middle">Physiological State</text>
  <path d="M 552 294 Q 588 274 622 294" fill="none" stroke="#34d399" stroke-width="2" marker-end="url(#arrEmerald9)" />
  <path d="M 622 314 Q 588 334 552 314" fill="none" stroke="#34d399" stroke-width="2" marker-end="url(#arrEmerald9)" />
  <text x="588" y="280" fill="#6ee7b7" font-size="8" text-anchor="middle">alters state</text>
  <text x="588" y="338" fill="#6ee7b7" font-size="8" text-anchor="middle">reinforces habit</text>
  <text x="426" y="352" fill="#cbd5e1" font-size="8.5">• Phoenix &amp; Flame loop: X and Y dynamically reinforce one another over time.</text>
  <text x="426" y="366" fill="#94a3b8" font-size="8.5">• Treating the loop as a one-way arrow mispredicts system response.</text>
</svg>`,
      bierutCaption:
        'Whenever an author cites an association between X and Y as proof that X causes Y, three rival structural graphs compete for the exact same covariance matrix: reverse causation (Y -> X), confounding by a common cause (Z -> X, Y), and reciprocal feedback (X <-> Y).',
      annotations: [
        {
          step: '1',
          label: 'Observational Equivalence of Correlation',
          explanation:
            'A standard cross-sectional correlation coefficient r(X, Y) is symmetric: r(X, Y) = r(Y, X).',
        },
        {
          step: '2',
          label: 'The Lurking Confounder Fork (Z -> X and Z -> Y)',
          explanation:
            'In the 10-city ice cream and crime study, summer temperature (Z) independently drives up both ice cream consumption (X) and outdoor interpersonal contact/crime (Y).',
        },
        {
          step: '3',
          label: 'Healthy-User & Survivor Selection Loops (Y -> X)',
          explanation:
            'In epidemiological surveys like the smoking-flu study or the Women’s Health Initiative breastfeeding study, baseline health status (Y) dictates who can initiate or sustain behavior X, inverting the direction of the causal arrow.',
        },
      ],
    },
    {
      id: 'arq-ch09-svg-rival-cause-pipeline',
      title: 'Contributory Causal Webs & The Exhibit 9-1 Rival Evaluation Sieve',
      subtitle:
        'Moving from single-cause oversimplification and Post Hoc illusions to multi-perspective hypothesis generation and six-criterion filtering',
      svgCode: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="arqCh09Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>
    <marker id="arrBlue9b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="400" rx="12" fill="url(#arqCh09Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">FROM CAUSAL OVERSIMPLIFICATION TO MULTI-PERSPECTIVE EVALUATION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Why human events arise from contributory webs (INUS conditions) and how to rank competing rival causes</text>

  <!-- Stage 1: Naive Causal Traps -->
  <rect x="24" y="68" width="232" height="308" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="140" y="90" fill="#fda4af" font-size="11.5" font-weight="700" text-anchor="middle">1. NAIVE CAUSAL TRAPS</text>
  <text x="140" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">What uncritical readers accept</text>

  <rect x="38" y="118" width="204" height="72" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="48" y="135" fill="#ffe4e6" font-size="10" font-weight="700">Causal Oversimplification</text>
  <text x="48" y="150" fill="#fecdd3" font-size="8.5">Demanding "THE Cause" instead of</text>
  <text x="48" y="163" fill="#fecdd3" font-size="8.5">recognizing "A Contributory Cause"</text>
  <text x="48" y="178" fill="#fda4af" font-size="8">e.g., Blaming depression on 1 factor</text>

  <rect x="38" y="200" width="204" height="72" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="48" y="217" fill="#ffe4e6" font-size="10" font-weight="700">Post Hoc Ergo Propter Hoc</text>
  <text x="48" y="232" fill="#fecdd3" font-size="8.5">Assuming Event A caused Event B</text>
  <text x="48" y="245" fill="#fecdd3" font-size="8.5">merely because t_A &lt; t_B in time</text>
  <text x="48" y="260" fill="#fda4af" font-size="8">e.g., Lucky quarter / writing hat</text>

  <rect x="38" y="282" width="204" height="78" rx="6" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="48" y="299" fill="#ffe4e6" font-size="10" font-weight="700">Fundamental Attribution Error</text>
  <text x="48" y="314" fill="#fecdd3" font-size="8.5">Overweighting internal character</text>
  <text x="48" y="327" fill="#fecdd3" font-size="8.5">(W_int) while ignoring situational</text>
  <text x="48" y="340" fill="#fecdd3" font-size="8.5">forces (poverty, stress, health)</text>

  <line x1="256" y1="222" x2="276" y2="222" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrBlue9b)" />

  <!-- Stage 2: Multi-Perspective Brainstorming -->
  <rect x="280" y="68" width="236" height="308" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="398" y="90" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">2. RIVAL GENERATION WEB</text>
  <text x="398" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">Disciplinary Lenses + 5-Yr-Old "Why?"</text>

  <rect x="294" y="118" width="98" height="44" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="343" y="137" fill="#fef3c7" font-size="9" font-weight="700" text-anchor="middle">Biological Lens</text>
  <text x="343" y="151" fill="#94a3b8" font-size="8" text-anchor="middle">Genetics / Neuro</text>

  <rect x="404" y="118" width="98" height="44" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="453" y="137" fill="#fef3c7" font-size="9" font-weight="700" text-anchor="middle">Psychological</text>
  <text x="453" y="151" fill="#94a3b8" font-size="8" text-anchor="middle">Stress / Trauma</text>

  <rect x="294" y="170" width="98" height="44" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="343" y="189" fill="#fef3c7" font-size="9" font-weight="700" text-anchor="middle">Sociological</text>
  <text x="343" y="203" fill="#94a3b8" font-size="8" text-anchor="middle">Peers / Norms</text>

  <rect x="404" y="170" width="98" height="44" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="453" y="189" fill="#fef3c7" font-size="9" font-weight="700" text-anchor="middle">Economic / Env</text>
  <text x="453" y="203" fill="#94a3b8" font-size="8" text-anchor="middle">Incentives / Media</text>

  <rect x="294" y="226" width="208" height="62" rx="6" fill="#271a0c" stroke="#d97706" stroke-width="1" />
  <text x="398" y="244" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Contributory Bundle (INUS)</text>
  <text x="398" y="260" fill="#fde68a" font-size="8.5" text-anchor="middle">C_1 + C_2 + C_3 -&gt; Sufficient Set</text>
  <text x="398" y="275" fill="#94a3b8" font-size="8" text-anchor="middle">Different individuals = different bundles</text>

  <rect x="294" y="298" width="208" height="62" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="398" y="316" fill="#7dd3fc" font-size="9.5" font-weight="700" text-anchor="middle">Certainty Dilution Rule</text>
  <text x="398" y="333" fill="#e0f2fe" font-size="9" text-anchor="middle">Confidence(H_0) ~ 1 / (1 + N_rivals)</text>
  <text x="398" y="348" fill="#94a3b8" font-size="8" text-anchor="middle">More plausible rivals -&gt; greater humility</text>

  <line x1="516" y1="222" x2="536" y2="222" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrBlue9b)" />

  <!-- Stage 3: Exhibit 9-1 Evaluation Sieve -->
  <rect x="540" y="68" width="236" height="308" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="658" y="90" fill="#6ee7b7" font-size="11.5" font-weight="700" text-anchor="middle">3. EXHIBIT 9-1 AUDIT SIEVE</text>
  <text x="658" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">6 Criteria for Ranking Rival Causes</text>

  <rect x="554" y="118" width="208" height="34" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="564" y="133" fill="#d1fae5" font-size="9" font-weight="700">1. Logical Soundness</text>
  <text x="564" y="145" fill="#a7f3d0" font-size="8">Internal coherence of mechanism</text>

  <rect x="554" y="158" width="208" height="34" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="564" y="173" fill="#d1fae5" font-size="9" font-weight="700">2. Prior Knowledge Consistency</text>
  <text x="564" y="185" fill="#a7f3d0" font-size="8">Aligns with established domain laws</text>

  <rect x="554" y="198" width="208" height="34" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="564" y="213" fill="#d1fae5" font-size="9" font-weight="700">3. Past Predictive Track Record</text>
  <text x="564" y="225" fill="#a7f3d0" font-size="8">Prior success explaining similar cases</text>

  <rect x="554" y="238" width="208" height="34" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="564" y="253" fill="#d1fae5" font-size="9" font-weight="700">4. Deductive Support Breadth</text>
  <text x="564" y="265" fill="#a7f3d0" font-size="8">Implied by a wider variety of truths</text>

  <rect x="554" y="278" width="208" height="34" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="564" y="293" fill="#d1fae5" font-size="9" font-weight="700">5. Minimal Disconfirmation</text>
  <text x="564" y="305" fill="#a7f3d0" font-size="8">Contradicted by fewer accepted facts</text>

  <rect x="554" y="318" width="208" height="42" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="564" y="334" fill="#d1fae5" font-size="9" font-weight="700">6. Explanatory Scope</text>
  <text x="564" y="348" fill="#a7f3d0" font-size="8">Accounts for a larger variety of facts</text>
</svg>`,
      bierutCaption:
        'A three-stage cognitive pipeline: first rejecting single-cause, temporal-sequence, and dispositional fallacies.',
      annotations: [
        {
          step: '1',
          label: 'Deconstructing "The Cause" into INUS Contributory Bundles',
          explanation:
            'Human behaviors (such as childhood depression or corporate fraud) rarely stem from a single sufficient cause.',
        },
        {
          step: '2',
          label: 'Perspective Rotation as a Hypothesis Generator',
          explanation:
            'Because confirmation bias locks specialists into their home paradigm, rotating through biological, psychological, sociological, and economic viewpoints forces hidden confounders and situational pressures into view.',
        },
        {
          step: '3',
          label: 'The Six-Criterion Comparative Filter (Exhibit 9-1)',
          explanation:
            'Generating rival causes is not relativistic skepticism.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'arq-ch09-mm-babysitter-sunset',
      name: 'The Babysitter Sunset Illusion',
      tagline: 'Plausible narrative coherence plus regular covariance does not equal causal mechanism',
      naiveIntuition:
        'If Hypothesis H makes intuitive sense and accurately describes a recurring pattern of observations (every evening the babysitter goes home and the sun disappears), then H is strongly supported by the evidence.',
      firstPrinciplesReality:
        'Empirical evidence often underdetermines theory: an observation O can be 100% consistent with Hypothesis H_0 while simultaneously being 100% consistent with Rival Hypotheses R_1, R_2, ..., R_k.',
      howToApply:
        'Whenever an author presents data showing that X and Y move together, mentally separate the empirical observation ("what happened") from the author’s causal story ("why it happened") and generate at least two alternative mechanisms that would produce the exact same data.',
    },
    {
      id: 'arq-ch09-mm-inus-contributory',
      name: 'The Contributory Web vs. "The" Single Cause',
      tagline: 'Complex human events emerge from conjunctions of contributory factors, never a solitary monolith',
      naiveIntuition:
        'When a dramatic outcome occurs—a spike in elementary-school depression or a mass tragedy—there must be a single primary root cause ("the cause") that experts can isolate and eliminate.',
      firstPrinciplesReality:
        'In human and socio-technical systems, outcomes are produced by what philosopher J.L.',
      howToApply:
        'Replace the question "What is THE cause of Y?" with two sharper questions: (1) "Which contributory factors combined to create sufficient conditions for Y?" and (2) "What caused Y in this specific individual or context rather than across all cases?"',
    },
    {
      id: 'arq-ch09-mm-four-way-dag',
      name: 'The Four-Way Covariation Fork',
      tagline: 'Every correlation between X and Y admits four distinct directed graph topologies',
      naiveIntuition:
        'When a large study reports that factor X is statistically associated with outcome Y (e.g., breastfeeding > 1 year is associated with a 10% lower postmenopausal heart attack rate), X must be causing Y.',
      firstPrinciplesReality:
        'Statistical association Cov(X, Y) != 0 is structurally ambiguous across four graphs: (1) X -> Y (direct causation), (2) Y -> X (reverse causation / health selection), (3) Z -> X and Z -> Y (common third-factor confounder such as socioeconomic status, exercise, or summer heat), and (4) X <-> Y (bidirectional feedback loop).',
      howToApply:
        'Before accepting any correlational claim X -> Y, explicitly write down the reverse-causal story (how Y could select for or cause X) and at least two candidate third variables Z that simultaneously influence both X and Y.',
    },
    {
      id: 'arq-ch09-mm-confidence-dilution',
      name: 'The Inverse Certainty-Rival Law',
      tagline: 'Epistemic confidence in any causal claim is inversely proportional to the number of plausible rival causes',
      naiveIntuition:
        'If an author provides a large sample size (such as n = 139,681 women or n = 552 survey respondents) and a statistically significant correlation, our confidence in their causal conclusion should approach 100%.',
      firstPrinciplesReality:
        'Sample size shrinks random sampling noise, but it does nothing to eliminate structural confounding or selection bias.',
      howToApply:
        'Count the number of credible rival causes that the study’s methodology failed to control (e.g., voluntary self-selection, unmeasured lifestyle confounders, temporal coincidence).',
    },
  ],
  deepSections: [
    {
      id: 'arq-ch09-sec-01',
      sectionNumber: '9.1',
      title: 'When to Look for Rival Causes & The Pervasiveness of Rival Causes',
      subtitle:
        'The babysitter sunset parable, lexical triggers of causal claims, and why rival causes pervade interpersonal life, world events, and scientific studies',
      coreMechanism:
        'Browne and Keeley open Chapter 9 with a foundational parable of human pattern-matching: a young boy observes the sun rising every morning and vanishing every night, tries to watch the sunset closely to see where it goes, and notices that his babysitter arrives every morning and leaves every evening. When he asks where she goes at night and she replies, "I go home," he links the two covarying schedules and concludes that his babysitter’s departure causes the sun to go home.\n\nA **rival cause** is formally defined as a plausible alternative explanation that can account for why a specific outcome occurred. Because communicators rarely announce "Here is my speculative causal hypothesis, and here are three rival causes that might prove me wrong," the critical thinker must first detect when causal reasoning is occurring.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Scan Prose for Causal Trigger Predicates',
          detail:
            'Flag verbs and phrases that assert or imply directional influence: "leads to," "influences," "is linked to," "deters," "increases the likelihood," "determines," "is associated with," and "has the effect of."',
        },
        {
          step: '2',
          title: 'Separate the Observable Phenomenon from the Author’s Story',
          detail:
            'Isolate the raw empirical fact (e.g., "24 hours without a text reply" or "10% lower postmenopausal stroke rate among >1-year breast-feeders") from the causal mechanism asserted by the communicator.',
        },
        {
          step: '3',
          title: 'Generate Domain-Appropriate Rival Hypotheses',
          detail:
            'Brainstorm alternative explanations across situational constraints (lost phone, work hours), baseline selection traits (preexisting health, lifestyle habits), or competing psychological/pharmacological triggers.',
        },
        {
          step: '4',
          title: 'Recalibrate Epistemic Confidence',
          detail:
            'Downgrade certainty in the author’s original causal claim in proportion to the number and plausibility of rival causes that the presented evidence fails to rule out.',
        },
      ],
      keyTakeaways: [
          'A rival cause is any plausible alternative explanation capable of accounting for why an observed outcome occurred.',
          'Experts rarely volunteer rival causes because doing so weakens the rhetorical certainty of their conclusions.',
        ],
      commonPitfalls: [
          'Accepting the first causal story that "makes sense" (narrative coherence bias) without checking whether three other stories make equal sense of the same facts.',
          'Being intimidated by massive sample sizes in observational studies and forgetting that a confounded study of 140,000 people merely measures a bias with high precision.',
        ],
      figures: [
        {
          file: 'arq_ch09_plate.png',
          originalLabel: 'Chapter 9 Opening Blueprint: Are There Rival Causes? (Page 134)',
          bierutTitle: 'Interrogating Causal Explanations Before Acting on Evidence',
          editorialAnalysis:
            'The Chapter 9 opening plate establishes the four core learning objectives of causal criticism: recognizing the pervasiveness of rival causes across everyday and scientific reasoning, mastering detective heuristics to uncover hidden explanations, separating mere correlation from causal mechanism, and communicating causal humility constructively.',
          keyTakeaways: [
          'Intelligent action to solve a problem requires knowing the true causal pattern that generated it, not merely a plausible story.',
          'Confidence in an author’s causal conclusion must vary inversely with the number of plausible rival causes.',
        ],
        },
      ],
    },
    {
      id: 'arq-ch09-sec-02',
      sectionNumber: '9.2',
      title: 'Detecting Rival Causes, "The Cause" vs. "A Cause", and Multiple Perspectives',
      subtitle:
        'Detective heuristics, contributory INUS bundles, causal heterogeneity across individuals, the Causal Oversimplification Fallacy, and perspective rotation',
      coreMechanism:
        'Uncovering rival causes requires adopting the mindset of an investigative detective who refuses to close a case on circumstantial fit alone. Browne and Keeley provide four operational interrogation prompts whenever causal evidence is presented: (1) *"Can I think of any other way to interpret the evidence?"* (2) *"What else might have caused this act or these findings?"* (3) *"If I looked at this event from another point of view, what might I see as important causes?"* and (4) *"If this interpretation is incorrect, what other interpretation might make sense?"*\n\nWhen applying these prompts to complex human phenomena.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit for "The Cause" vs. "A Contributory Cause"',
          detail:
            'Check whether the communicator frames their favored variable as the sole sufficient driver ("THE cause") or honestly bounds it as one contributory factor inside a larger causal web.',
        },
        {
          step: '2',
          title: 'Disaggregate Group Claims into Individual Pathways',
          detail:
            'Ask whether different subgroups or individuals exhibiting the same outcome (e.g., depression, school dropout, fraud) might be driven by distinct combinations of biological and situational causes.',
        },
        {
          step: '3',
          title: 'Rotate Through Disciplinary Lenses',
          detail:
            'Deliberately ask how a biologist/neurologist, psychologist, sociologist, economist, and environmental scientist would each explain the observed phenomenon.',
        },
        {
          step: '4',
          title: 'Run a Confirmation-Bias Self-Check',
          detail:
            'Verify that you are not accepting or rejecting a causal factor simply because it flatters your preexisting political, moral, or professional worldview.',
        },
      ],
      keyTakeaways: [
          'Most human and social outcomes result from a combination of contributory causes that are only jointly sufficient to bring about the event.',
          'The Causal Oversimplification Fallacy occurs whenever an explanation relies on causal factors insufficient to account for the event or inflates one contributory factor into "the cause."',
        ],
      commonPitfalls: [
          'Dismissing a factor entirely just because it is not sufficient on its own, rather than recognizing its role as a non-redundant contributory cause.',
          'Assuming a homogeneous causal process across an entire population ("what causes depression?") instead of investigating case-specific causal profiles.',
        ],
    },
    {
      id: 'arq-ch09-sec-03',
      sectionNumber: '9.3',
      title: 'Confusing Causation with Association',
      subtitle:
        'Deconstructing the four structural explanations for covarying variables (X -> Y, Y -> X, Z -> X,Y, and X <-> Y) and exposing common-cause and reverse-cause fallacies',
      coreMechanism:
        'Humans possess a deep cognitive reflex to perceive characteristics that "go together" (covary) as cause and effect: when we observe that characteristic $X$ (such as the number of energy bars consumed) is associated with characteristic $Y$ (athletic performance), we reflexively conclude that $X$ causes $Y$. Yet most evidence cited in public arguments to prove causation consists strictly of observational association or correlation.\n\n1. **Explanation 1 ($X \\to Y$ — Direct Causation)**: $X$ is genuinely a cause of $Y$. In the textbook’s research example where researchers studied $n = 525$ smokers, found that $67\\%$ did not contract the flu once over three years, and concluded that *"smoking combats flu,"* Explanation 1 is the authors’ hypothesis: nicotine in cigarette smoke destroys the influenza virus before it can replicate.\n2. **Explanation 2 ($Y \\to X$ — Reverse Causation)**: $Y$ is actually a cause of $X$.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Write Down the Claimed Directional Arrow (X -> Y)',
          detail:
            'Identify the independent variable X (e.g., ice cream sales, smoking, energy bars) and the dependent outcome Y (crime rate, flu absence, race finish time) asserted by the author.',
        },
        {
          step: '2',
          title: 'Test Reverse Causation (Y -> X)',
          detail:
            'Ask whether possessing outcome Y could cause people to adopt, sustain, or be selected into characteristic X (e.g., faster athletes receive free energy bar sponsorships; healthy lungs tolerate smoking).',
        },
        {
          step: '3',
          title: 'Search for Lurking Third Variables (Z -> X and Z -> Y)',
          detail:
            'Identify environmental, demographic, socioeconomic, or behavioral variables Z (e.g., summer temperature, handwashing, overall fitness regimen) that simultaneously push both X and Y in the observed direction.',
        },
        {
          step: '4',
          title: 'Check for Reciprocal Feedback Loops (X <-> Y)',
          detail:
            'Evaluate whether X and Y reinforce each other over time rather than operating as a one-way causal street.',
        },
      ],
      keyTakeaways: [
          'Association or correlation never proves causation; yet the vast majority of causal claims in media and policy rest solely on correlational evidence.',
          'Every covariance between X and Y must be audited across four hypotheses: X -> Y, Y -> X, Z -> (X, Y), and X <-> Y.',
        ],
      commonPitfalls: [
          'Inventing elaborate biochemical stories (like "ice cream triggers crime-inducing brain chemicals") to justify a correlation before checking for mundane environmental confounders.',
          'Forgetting survivor or selection bias in health studies, where only individuals healthy enough to tolerate an activity (Y) remain in the active exposure group (X).',
        ],
    },
    {
      id: 'arq-ch09-sec-04',
      sectionNumber: '9.4',
      title: 'Confusing "After This" with "Because of This" (Post Hoc) & Explaining Individual Events',
      subtitle:
        'Temporal sequence traps (Post Hoc Ergo Propter Hoc), political credit-claiming, the Fundamental Attribution Error, and memory distortion in historical narratives',
      coreMechanism:
        'A cause must precede its effect in time ($t_A < t_B$), which tricks human intuition into inverting the rule: assuming that because Event $B$ followed Event $A$ closely in time, Event $A$ must have caused Event $B$. This error is the classic **Post Hoc Ergo Propter Hoc** fallacy (Latin for *"after this, therefore because of this"*, or simply the **Post Hoc Fallacy**).\n\nIn high-stakes public life, political and corporate leaders weaponize Post Hoc reasoning systematically: they claim causal credit for any economic boom, job growth, or crime drop that occurs *after* they take office, while blaming external forces or predecessors for any downturn. Whenever an argument relies on temporal sequence ($A$ happened, then $B$ happened), the critical thinker must ask two questions: *"Are there rival causes that could account for Event B?"* and *"Is there any independent mechanistic evidence beyond mere chronological order?"* When we shift from recurring statistical patterns to **explaining individual historical events or personal acts**.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Isolate the Temporal Sequence Claim (t_A < t_B)',
          detail:
            'Identify whether the communicator’s primary evidence for "A caused B" is simply that B occurred after policy A, leadership change A, or event A.',
        },
        {
          step: '2',
          title: 'Probe Background Trends and Independent Schedules',
          detail:
            'Check whether B was already determined by pre-existing schedules, macroeconomic cycles, demographic shifts, or unrelated situational triggers (like the professor’s sick child).',
        },
        {
          step: '3',
          title: 'Correct for the Fundamental Attribution Error',
          detail:
            'When evaluating an individual’s act, deliberately list external situational forces (economic distress, institutional incentives, peer norms, physical health) alongside internal personality traits.',
        },
        {
          step: '4',
          title: 'Audit Retrospective Memory Sources',
          detail:
            'Discount post-hoc biographical recollections that neatly connect childhood anecdotes to adult outcomes without contemporaneous documentation.',
        },
      ],
      keyTakeaways: [
          'Every true cause precedes its effect, but the vast majority of events that precede an outcome had zero causal role in producing it.',
          'The Post Hoc Ergo Propter Hoc fallacy mistakes chronological sequence ("after this") for causal determination ("because of this").',
        ],
      commonPitfalls: [
          'Giving executives or politicians credit (or blame) for macroeconomic shifts that simply followed their inauguration date.',
          'Accepting neat biographical "origin stories" that link an adult crime or triumph to a single childhood trait while ignoring thousands of people with the same trait who acted differently.',
        ],
      figures: [
        {
          file: 'arq_p142_fig1.png',
          originalLabel: 'Embedded figure from page 142 (Fundamental Attribution Error)',
          bierutTitle: 'The Blind Spot of Dispositional Attribution: "I Create My Own Destiny!" vs. Situational Reality',
          editorialAnalysis:
            'The page 142 illustration depicts an individual proclaiming "I create my own destiny!" while surrounded by twelve radial arrows representing unacknowledged external and structural forces: Parents, Health, Weather/Climate, Emotion, Attractiveness, Religion, Life, Race, Money, Birth Nation/War, and Gender.',
          keyTakeaways: [
          'Internal agency operates inside a dense field of external situational constraints (birth nation, family wealth, health, social environment).',
          'Valid causal analysis of individual actions must weigh external situational arrows alongside internal personal choices.',
        ],
        },
      ],
    },
    {
      id: 'arq-ch09-sec-05',
      sectionNumber: '9.5',
      title: 'Evaluating Rival Causes, Communication & Practice Deconstruction',
      subtitle:
        'Ernie’s alligator-repelling banana, Exhibit 9-1’s six evaluation criteria, the "Annoying 5-Year-Old" brainstorming method, and full deconstruction of Passages 1–3',
      coreMechanism:
        'Generating rival causes is only half of the critical thinker’s task; once multiple competing explanations are on the table, we must evaluate their relative credibility. In a classic *Sesame Street* exchange cited by the authors, Bert finds Ernie holding a banana to his ear.\n\n**Exhibit 9-1** codifies the six formal criteria for comparing and ranking rival causes:\n1. **Logical Soundness**: Which explanation possesses the clearest, most coherent internal mechanism?\n2. **Consistency with Other Established Knowledge**: Does the hypothesis align with well-verified laws of physics, biology, economics, and psychology, or does it require violating them (like Ernie’s banana)?\n3. **Previous Success in Explaining or Predicting Similar Events**: Has this causal mechanism demonstrated strong predictive power in prior analogous cases?\n4. **Implied by a Greater Variety of Accepted Truths**: To what extent does the explanation flow naturally from multiple independent lines of established evidence?\n5. **Disconfirmed by Fewer Accepted Beliefs**: Which rival hypothesis suffers the fewest contradictions against known empirical facts?\n6. **Breadth of Explanatory Scope**: Which explanation accounts for a larger number and wider variety of observed facts than its competitors? Finally, applying this full framework to the chapter’s three **Practice Exercises** reveals how rival causes and methodological flaws interact:\n- **Passage 1 (Parental College Degrees & Poverty Survey)**: Researchers surveyed $n = 552$ people on government assistance in Ohio, Kentucky, and West Virginia via a *voluntary* survey ($85\\%$ reported at least one parent lacked a college degree) and compared them to $n = 552$ *randomly* surveyed non-recipients ($40\\%$ reported a parent without a degree). **Deconstruction**: Beyond unmeasured third-factor confounders (regional economic depression, school quality), the study suffers from four severe design flaws: (1) **Geographic restriction** (three Appalachian/Midwestern states with state-specific eligibility rules cannot represent the entire U.S.), (2) **Voluntary response bias in the treatment group** (volunteers on assistance may differ systematically from non-volunteers—e.g., if males were $80\\%$ more likely to volunteer, skewing the sample), (3) **Operationalization error in "government assistance"** (programs like Medicare cover anyone over 65 eligible for Social Security regardless of poverty, so receiving assistance $\\neq$ being poor), and (4) **Social desirability bias in the control group** (self-reporting whether one is "poor" or on assistance invites underreporting of poverty).\n- **Passage 2 (Corporate Executive Embezzlement)**: The author claims an executive stole company funds because his parents were doctors, his siblings were lawyers, he believed in the American dream, suffered stock market losses, and needed braces for his children. **Deconstruction**: Millions of citizens face family status pressure, stock losses, and orthodontic bills without committing felony embezzlement.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Brainstorm via the Recursive "5-Year-Old Why / Why Else?" Loop',
          detail:
            'Ask "Why did Y happen?" to trace deeper root mechanisms, and repeatedly ask "Why else?" with peers to surface parallel contributory causes.',
        },
        {
          step: '2',
          title: 'Audit Research Design for Sampling & Measurement Rivals',
          detail:
            'Check whether the observed group gap (like the 85% vs.',
        },
        {
          step: '3',
          title: 'Score Surviving Hypotheses Against Exhibit 9-1’s Six Criteria',
          detail:
            'Rank each candidate cause on logical soundness, consistency with background science, prior predictive success, deductive support, low disconfirmation, and explanatory scope.',
        },
        {
          step: '4',
          title: 'Defend Directionality and Acknowledge Rivals in Your Own Prose',
          detail:
            'When writing a causal argument, explicitly refute reverse causation and confounders, and present your thesis as a primary contributory cause rather than an unassailable monolith.',
        },
      ],
      keyTakeaways: [
          'A hypothesis that merely matches an observation (like Ernie’s banana keeping alligators away) has zero causal credibility until it survives Exhibit 9-1’s six comparative criteria.',
          'Strong causal explanations maximize logical soundness, consistency with established knowledge, prior predictive success, deductive breadth, and explanatory scope while minimizing empirical disconfirmations.',
        ],
      commonPitfalls: [
          'Falling into cynical relativism ("anything could cause anything, so we know nothing") instead of using Exhibit 9-1 to rank rival causes rigorously.',
          'Comparing a voluntary survey group against a randomly selected control group (as in Passage 1) without realizing that self-selection bias alone can explain the outcome gap.',
        ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Structural Causal Hypotheses for Covarying Variables (Cov(X, Y) != 0)',
      description:
        'Comparing the four competing causal architectures that can generate an identical statistical association between Variable X and Variable Y, along with their diagnostic signatures and policy implications.',
      headers: [
        'Structural Topology',
        'Causal Mechanism',
        'Textbook Case Study',
        'Diagnostic Test to Verify / Refute',
        'Policy Action if True',
      ],
      rows: [
        [
          '1. Direct Causation (X -> Y)',
          'Manipulating X directly alters the probability or magnitude of outcome Y',
          'Claim that nicotine in smoke kills flu virus (n = 525 smokers); energy bars improve race speed',
          'Randomized controlled trial (intervene do(X)) or laboratory isolation of biological pathway',
          'Intervene directly on lever X (encourage or restrict X to change Y)',
        ],
        [
          '2. Reverse Causation (Y -> X)',
          'Outcome state Y causes individuals to adopt, sustain, or select into state X (Confusion of Cause & Effect)',
          'Being free of respiratory flu allows smokers to keep smoking; chronic illness stops mothers from breastfeeding',
          'Longitudinal cohort tracking baseline Y prior to exposure X; check attrition/dropout by health status',
          'Do NOT manipulate X expecting Y to change; target the upstream drivers of Y directly',
        ],
        [
          '3. Common Confounder (Z -> X, Y)',
          'Lurking third variable Z independently drives both X and Y (Neglect of a Common Cause)',
          'Summer heat (Z) drives both ice cream sales (X) and crime (Y); healthy lifestyle (Z) drives breastfeeding (X) and heart health (Y)',
          'Stratify or condition on Z: check if P(Y | X, Z) = P(Y | Z) across constant levels of Z (e.g., same temperature)',
          'Ignore X as a policy lever; intervene on the root confounder Z or downstream mechanisms',
        ],
        [
          '4. Bidirectional Loop (X <-> Y)',
          'X and Y mutually reinforce or regulate each other in a continuous cycle ("Phoenix & Flame")',
          'Baseline immunity tolerates smoking while smoke alters respiratory mucosa; stress and insomnia loop',
          'Time-series Granger causality / cross-lagged panel analysis measuring both X_t -> Y_{t+1} and Y_t -> X_{t+1}',
          'Break the feedback loop simultaneously at both nodes rather than assuming a one-way fix',
        ],
      ],
      verdictRule:
        'Never authorize an expensive policy or engineering intervention on X based solely on Cov(X, Y) != 0 until Reverse Causation (Y -> X) and Common Confounders (Z -> X, Y) have been empirically falsified.',
    },
    {
      title: 'Exhibit 9-1 Comparative Audit of Rival Causal Explanations',
      description:
        'Applying Browne and Keeley’s six formal evaluation criteria to distinguish rigorous causal explanations from ad-hoc stories, superstitions, and single-cause oversimplifications.',
      headers: [
        'Exhibit 9-1 Criterion',
        'Core Diagnostic Question',
        'High-Credibility Causal Explanation',
        'Low-Credibility / Fallacious Rival',
        'Failure Mode Prevented',
      ],
      rows: [
        [
          '1. Logical Soundness',
          'Does the proposed mechanism connect cause to effect without internal contradiction?',
          'Warm weather increases outdoor social interaction and opportunity for street crime',
          'Ernie’s banana-in-the-ear repels alligators on Sesame Street',
          'Eliminates superstitious and non-sequitur causal leaps',
        ],
        [
          '2. Prior Knowledge Consistency',
          'Does the hypothesis align with established laws of biology, physics, and human behavior?',
          'Sleep deprivation and exam stress impair student immune response on campus',
          'Eating ice cream triggers a brain chemical that compels violent crime',
          'Blocks ad-hoc biochemical or conspiratorial fabrications',
        ],
        [
          '3. Past Predictive Success',
          'Has this causal factor successfully predicted outcomes in prior comparable settings?',
          'Voluntary survey self-selection skews demographic representation in polls',
          'Finding a "lucky quarter" predicts A-grades and class cancellations',
          'Prevents Post Hoc Ergo Propter Hoc coincidence worship',
        ],
        [
          '4. Variety of Implied Truths',
          'Is the explanation supported by converging evidence across multiple disciplines?',
          'Multi-factor contributory web (genetics + trauma + stress) in clinical depression',
          'Single-cause talk-show claim ("TV war coverage is THE cause of childhood depression")',
          'Prevents Causal Oversimplification Fallacy',
        ],
        [
          '5. Minimal Disconfirmation',
          'How few established empirical facts contradict this explanation?',
          'Situational + dispositional interaction model of white-collar fraud',
          'Pure biographical determinism ("Executive HAD to steal because kids needed braces")',
          'Refutes base-rate blind biographical rationalizations',
        ],
        [
          '6. Explanatory Scope',
          'Does the hypothesis account for a wider range and number of facts than its rivals?',
          'Healthy-user + occupational stress + medical selection model of WHI breastfeeding data',
          'Narrow single-variable claim ignoring socioeconomic and baseline health differences',
          'Forces comprehensive integration of confounding variables',
        ],
      ],
      verdictRule:
        'When multiple rival causes survive initial brainstorming, rank them by their cumulative performance across all six Exhibit 9-1 criteria and proportionalize your confidence to the gap between the top-ranked explanation and its closest rival.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'arq-ch09-scen-01',
      title: 'Post-Deployment Latency Drop: Credit-Claiming vs. Confounded Traffic Shift',
      roleAndContext:
        'Staff Site Reliability Engineer reviewing a VP of Engineering’s all-hands announcement claiming that a Tuesday afternoon database index patch "caused a 35% reduction in API p99 latency on Wednesday."',
      symptomOrFailure:
        'The team is preparing to halt all other performance optimization work and roll out the same aggressive indexing pattern across 40 microservices based on the Tuesday-to-Wednesday latency drop.',
      naiveFixAndWhyItFails:
        'Accepting the VP’s Post Hoc Ergo Propter Hoc claim ("Wednesday latency dropped after Tuesday’s deploy, therefore the deploy caused the drop") fails because it ignores lurking third-factor confounders and selection effects.',
      firstPrinciplesSolution:
        'Apply Chapter 9’s rival-cause protocol before scaling the change: (1) Check for Common Cause Confounders (Z -> X, Y): Wednesday coincided with a major European bank holiday that dropped heavy enterprise batch-reporting queries by 50%.',
      measurableOutcome:
        'Stratifying telemetry by query type and region revealed that 88% of the Wednesday latency drop came from the European holiday traffic dip and CDN timeout shedding.',
    },
    {
      id: 'arq-ch09-scen-02',
      title: 'Product Feature Churn Analysis: Power-User Selection vs. Causal Feature Impact',
      roleAndContext:
        'Lead Product Data Scientist auditing a growth team’s study of n = 120,000 SaaS users showing that users who enable "Custom Keyboard Shortcuts" (Factor X) have a 42% higher 12-month retention rate (Outcome Y) than users who do not.',
      symptomOrFailure:
        'The growth PM proposes forcing all new signups through a mandatory 5-minute Custom Keyboard Shortcut configuration wizard during onboarding to "boost company-wide retention by 42%."',
      naiveFixAndWhyItFails:
        'Equating the observational association Cov(Shortcuts, Retention) > 0 with direct causation (X -> Y) commits the Confusion of Cause and Effect and Neglect of a Common Cause fallacies, exactly like the Women’s Health Initiative breastfeeding study or the 525-smoker flu study.',
      firstPrinciplesSolution:
        'Map the four structural hypotheses: (1) Reverse Causation (Y -> X): users who have already decided to retain and use the product daily for months eventually customize their shortcuts.',
      measurableOutcome:
        'A randomized controlled test on 10,000 new users showed that forcing shortcut setup during onboarding actually reduced Day-1 activation by 14% due to friction and produced 0% lift in 90-day retention, preventing a destructive onboarding redesign.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'arq-ch09-quiz-01',
        scenarioPrompt:
          'A medical journalist cites the Women’s Health Initiative study of 139,681 postmenopausal women.',
        options: [
          {
            label: 'A',
            text: 'Women who choose to breast-feed also tend to exercise more regularly and eat lower-cholesterol diets throughout adulthood.',
            isCorrect: false,
            explanation:
              'This is a valid rival cause from Chapter 9, but structurally it is a Third-Factor Common Cause (Z -> X, Y: health-conscious lifestyle drives both breastfeeding and cardiovascular health), not reverse health selection.',
          },
          {
            label: 'B',
            text: 'Mothers who already suffer from chronic health problems, smoke, or take prescription medications are more likely to reject breast-feeding out of concern for infant safety.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'C',
            text: 'The sample size of 139,681 women is too small to detect a 10% difference in cardiovascular outcomes without high random sampling error.',
            isCorrect: false,
            explanation:
              'A sample of 139,681 is very large; the flaw is structural confounding and selection bias, not small-sample random noise.',
          },
          {
            label: 'D',
            text: 'Heart attacks and strokes occurred prior to the women’s pregnancies, creating a Post Hoc chronological inversion.',
            isCorrect: false,
            explanation:
              'The outcomes measured were postmenopausal cardiovascular events occurring decades after childbirth.',
          },
        ],
      },
      {
        id: 'arq-ch09-quiz-02',
        scenarioPrompt:
          'On a television panel investigating a spike in elementary-school depression, Guest A insists, "The cause of this depression spike is excessive TV news coverage of wars," while Guest B insists, "No, the cause is peer teasing at school." According to Browne and Keeley, what fundamental causal reasoning error are both guests committing?',
        options: [
          {
            label: 'A',
            text: 'The Post Hoc Ergo Propter Hoc fallacy, because neither guest measured whether television broadcasts occurred before school hours.',
            isCorrect: false,
            explanation:
              'While timing matters, the primary structural error highlighted in the textbook’s elementary-school depression example is treating a contributory factor as "THE single cause."',
          },
          {
            label: 'B',
            text: 'The Causal Oversimplification Fallacy: searching for "the" single cause when human behaviors arise from combinations of multiple contributory causes that can also differ from child to child.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'C',
            text: 'The Fundamental Attribution Error, because both guests are blaming external situational factors instead of blaming the children’s internal genetics.',
            isCorrect: false,
            explanation:
              'The Fundamental Attribution Error is the exact opposite: overemphasizing internal personal traits relative to external situational factors.',
          },
          {
            label: 'D',
            text: 'Reverse Causation, because elementary-school depression causes television networks to broadcast more coverage of wars.',
            isCorrect: false,
            explanation:
              'Childhood depression in one local school does not drive national network war coverage.',
          },
        ],
      },
      {
        id: 'arq-ch09-quiz-03',
        scenarioPrompt:
          'Researchers analyze five years of data across the 10 largest U.S. cities and discover a strong positive correlation between monthly ice cream sales (X) and violent crime rates (Y). They conclude that sugar and dairy compounds in ice cream trigger aggressive brain chemistry.',
        options: [
          {
            label: 'A',
            text: 'Neglect of a Common Cause Fallacy; summer heat (Z) acts as a third factor that independently increases both ice cream sales (Z -> X) and outdoor interpersonal crime (Z -> Y).',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'B',
            text: 'Confusion of Cause and Effect Fallacy; committing violent crimes makes criminals hungry for ice cream (Y -> X).',
            isCorrect: false,
            explanation:
              'While Y -> X is one of the four theoretical checks, the textbook explicitly uses the 10-city ice cream and crime study to illustrate Neglect of a Common Cause via summer heat (Z).',
          },
          {
            label: 'C',
            text: 'Fundamental Attribution Error; blaming ice cream manufacturers instead of the personal morality of ice cream consumers.',
            isCorrect: false,
            explanation:
              'The error here is confounding by an environmental common cause (temperature), not dispositional vs. situational attribution.',
          },
          {
            label: 'D',
            text: 'Voluntary Response Bias; only cities with high ice cream consumption volunteered to report their crime statistics to the FBI.',
            isCorrect: false,
            explanation:
              'The study examined the 10 largest U.S. cities over five years; seasonal temperature variation within those cities explains the covariance.',
          },
        ],
      },
      {
        id: 'arq-ch09-quiz-04',
        scenarioPrompt:
          'In Practice Passage 1, researchers studied whether having parents without college degrees causes poverty. They sent a voluntary survey to 552 people on government assistance in Ohio, Kentucky, and West Virginia (85% had a parent without a degree) and compared them to a random sample of 552 people not on government assistance in those states (40% had a parent without a degree).',
        options: [
          {
            label: 'A',
            text: 'Asymmetric sampling design: the government-assistance group was selected on a voluntary basis (risking self-selection skew such as gender imbalance), whereas the comparison group was randomly sampled.',
            isCorrect: false,
            explanation:
              'Browne and Keeley explicitly highlight this as "perhaps the most important sampling problem" in Passage 1.',
          },
          {
            label: 'B',
            text: 'Flawed proxy definition of poverty: "government assistance" includes programs like Medicare, which people over 65 qualify for via Social Security regardless of whether they are poor.',
            isCorrect: false,
            explanation:
              'The textbook explicitly points out that Medicare eligibility is age/Social Security-based, making "government assistance" an inaccurate measurement of poverty.',
          },
          {
            label: 'C',
            text: 'Social desirability and underreporting in the control group: people who are poor but have not sought government assistance—or who give the socially acceptable answer of not being poor—contaminate the control group.',
            isCorrect: false,
            explanation:
              'This is directly identified in the Sample Response for Passage 1.',
          },
          {
            label: 'D',
            text: 'Small sample size: 552 participants per group is statistically far too small to detect a difference between 85% and 40%.',
            isCorrect: true,
            explanation:
              'Correct!',
          },
        ],
      },
      {
        id: 'arq-ch09-quiz-05',
        scenarioPrompt:
          'When evaluating why a corporate executive embezzled funds from his company (Practice Passage 2), an analyst blames the theft entirely on the executive’s internal greed and obsession with out-earning his doctor parents and lawyer siblings. To avoid both the Fundamental Attribution Error and post-hoc biographical storytelling, what should a critical thinker ask?',
        options: [
          {
            label: 'A',
            text: 'Why do millions of other people experience family status pressure, stock market losses, and children needing braces without resorting to felony theft, and what acute situational factors or recent stressors (e.g., conflict with a boss, substance abuse) were present?',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'B',
            text: 'Whether the executive wore a "lucky hat" or carried a "lucky quarter" on the day he transferred the company funds.',
            isCorrect: false,
            explanation:
              'Those are illustrations of personal Post Hoc superstitions, not relevant diagnostic questions for Passage 2.',
          },
          {
            label: 'C',
            text: 'Whether the executive’s siblings became lawyers before or after his parents became doctors.',
            isCorrect: false,
            explanation:
              'The chronological order of his relatives’ careers does not resolve the base-rate or attribution flaws in explaining his theft.',
          },
          {
            label: 'D',
            text: 'How to prove that zero causal factors existed, since individual human acts are completely random and uncaused.',
            isCorrect: false,
            explanation:
              'Chapter 9 never claims human acts are uncaused; it teaches that they arise from complex contributory webs requiring multi-perspective evidence.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'arq-ch09-fc-01',
        category: 'evaluation',
        front: 'What is a "Rival Cause," and why must the reader generate rival causes independently?',
        back: 'A rival cause is a plausible alternative explanation that can account for why a specific outcome occurred.',
        mentalHook: 'The Babysitter Sunset Parable: one observation, multiple competing stories.',
      },
      {
        id: 'arq-ch09-fc-02',
        category: 'foundation',
        front: 'What is the difference between "THE Cause" and "A Contributory Cause," and what fallacy results from confusing them?',
        back: 'A contributory cause is one factor among many that helps create the total set of conditions necessary for an event to occur, but is insufficient alone.',
        mentalHook: 'Think INUS bundle: C_1 + C_2 + C_3 together cross the threshold.',
      },
      {
        id: 'arq-ch09-fc-03',
        category: 'architecture',
        front: 'What are the four structural hypotheses that can explain any observed association or correlation between X and Y?',
        back: '1.',
        mentalHook: 'Forward, Reverse, Fork (Z), and Circle (Phoenix & Flame).',
      },
      {
        id: 'arq-ch09-fc-04',
        category: 'evaluation',
        front: 'Define the Post Hoc Ergo Propter Hoc fallacy and explain why politicians frequently rely on it.',
        back: 'Post hoc ergo propter hoc ("after this, therefore because of this") assumes that Event B was caused by Event A merely because B followed A in time.',
        mentalHook: 'Precedence in time (t_A < t_B) is necessary for causation, never sufficient.',
      },
      {
        id: 'arq-ch09-fc-05',
        category: 'foundation',
        front: 'What is the Fundamental Attribution Error (FAE) when explaining individual events or acts?',
        back: 'The systematic cognitive bias to overestimate the importance of internal personal dispositions (character, morality, willpower) relative to external situational forces (poverty, peer pressure, health, birth nation, acute stress) when interpreting the behavior of others.',
        mentalHook: 'Page 142 figure: "I create my own destiny!" surrounded by 12 situational arrows.',
      },
      {
        id: 'arq-ch09-fc-06',
        category: 'evaluation',
        front: 'List the six criteria in Exhibit 9-1 for evaluating and comparing rival causes.',
        back: '1.',
        mentalHook: 'How we reject Ernie’s alligator-repelling banana despite 100% data fit.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'arq-ch09-feyn-01',
        conceptTitle: 'Deconstructing Correlational Evidence into the Four Causal Graphs',
        prompt:
          'Explain to a junior analyst why a large study of 525 smokers showing that 67% were completely flu-free for three years does NOT prove that "smoking combats the flu." Walk through all four structural possibilities for why X and Y covary, and connect them to the two formal correlation fallacies in Chapter 9.',
        rubricChecklist: [
          'Explicitly distinguishes observational association/correlation from causal mechanism.',
          'Articulates Explanation 1 (X -> Y: smoking directly kills the flu virus) as only one of four possibilities.',
          'Articulates Explanation 2 (Y -> X: being free of respiratory viruses enables people to keep smoking) and names the Confusion of Cause and Effect Fallacy.',
          'Articulates Explanation 3 (Z -> X, Y: a third factor such as frequent handwashing after smoking causes both) and names the Neglect of a Common Cause Fallacy.',
          'Articulates Explanation 4 (X <-> Y: bidirectional mutual influence between baseline respiratory constitution and smoking behavior).',
        ],
        modelExplanation:
          'When a study finds that smoking (X) and remaining flu-free (Y) go together in 67% of surveyed smokers, the raw correlation cannot tell us which way the causal arrow points. At least four structural graphs can produce that exact same statistic.',
      },
      {
        id: 'arq-ch09-feyn-02',
        conceptTitle: 'Applying Exhibit 9-1 & Contributory Causes to Real-World Policy Claims',
        prompt:
          'Suppose a city council member argues: "Youth crime rose 12% this summer right after the city cut funding for after-school art programs in May; therefore, cutting the art program is THE cause of the crime wave." Critique this argument using Contributory Causes, Post Hoc reasoning, Common Cause confounding, and Exhibit 9-1’s evaluation criteria.',
        rubricChecklist: [
          'Identifies the Post Hoc Ergo Propter Hoc fallacy in assuming the summer rise was caused by the May budget cut simply because it followed it in time.',
          'Identifies the Causal Oversimplification Fallacy in labeling a single budget change "THE cause" rather than at most a contributory cause.',
          'Generates plausible third-factor confounders (Z), such as summer heat and school vacation leaving thousands of teens unsupervised outdoors.',
          'Applies Exhibit 9-1 criteria (e.g., consistency with prior knowledge of seasonal crime cycles, explanatory scope) to rank the seasonal confounder against the single-program hypothesis.',
        ],
        modelExplanation:
          'The council member’s argument collapses under three Chapter 9 audits. First, claiming that the May art cut caused the summer crime rise simply because July followed May commits the Post Hoc Ergo Propter Hoc fallacy.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'arq-ch09-rival-cause',
        label: 'Rival Cause',
        category: 'evaluation',
        chapterNumber: 9,
        importance: 1,
        definition:
          'A plausible alternative explanation capable of accounting for why a specific observed outcome, event, or statistical correlation occurred.',
        formulaOrRule: 'Confidence(H_0) is inversely proportional to the number of plausible rival causes R_1..R_m',
        whyItMatters:
          'Prevents premature lock-in on an author’s favored causal narrative when the same evidence is compatible with competing mechanisms.',
      },
      {
        id: 'arq-ch09-contributory-cause',
        label: 'Contributory Cause & Causal Oversimplification',
        category: 'foundation',
        chapterNumber: 9,
        importance: 1,
        definition:
          'A factor that helps create the total set of conditions necessary for an event to occur ("a cause"), contrasted with the fallacy of treating an insufficient single factor as "the sole cause."',
        formulaOrRule: 'Outcome = I(sum w_j * C_j >= tau)',
        whyItMatters:
          'Human and socio-technical outcomes almost always arise from multi-factor contributory webs that vary across individuals.',
      },
      {
        id: 'arq-ch09-covariation-fork',
        label: 'Four Structural Hypotheses of Association',
        category: 'architecture',
        chapterNumber: 9,
        importance: 1,
        definition:
          'The four directed graphs that can explain why X and Y covary: Direct (X -> Y), Reverse (Y -> X), Common Cause Confounder (Z -> X, Y), and Bidirectional Feedback (X <-> Y).',
        formulaOrRule: 'P(Y | X) != P(Y | do(X))',
        whyItMatters:
          'Exposes the Confusion of Cause and Effect and Neglect of a Common Cause fallacies in observational research.',
      },
      {
        id: 'arq-ch09-post-hoc-fae',
        label: 'Post Hoc & Fundamental Attribution Error',
        category: 'evaluation',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Two pervasive biases in event explanation: mistaking chronological sequence (B after A) for causation, and overweighting internal character traits over external situational forces.',
        formulaOrRule: 't_A < t_B =/=> A -> B; FAE overweights W_internal >> W_situational',
        whyItMatters:
          'Protects against superstitious reasoning, political credit-claiming, and blind dispositional blame in historical and interpersonal analysis.',
      },
      {
        id: 'arq-ch09-exhibit-9-1-criteria',
        label: 'Exhibit 9-1 Six Causal Evaluation Criteria',
        category: 'evaluation',
        chapterNumber: 9,
        importance: 2,
        definition:
          'The formal rubric for ranking competing rival causes: logical soundness, prior knowledge consistency, predictive track record, deductive support breadth, minimal disconfirmation, and explanatory scope.',
        whyItMatters:
          'Provides an objective scientific sieve to separate credible rival explanations from absurd ad-hoc stories like Ernie’s banana.',
      },
    ],
    edges: [
      {
        source: 'arq-ch09-contributory-cause',
        target: 'arq-ch09-rival-cause',
        relationship: 'part_of',
        explanation:
          'Recognizing that most human outcomes stem from multiple contributory causes rather than a single monolith is a primary generator of rival causes.',
      },
      {
        source: 'arq-ch09-covariation-fork',
        target: 'arq-ch09-rival-cause',
        relationship: 'optimizes',
        explanation:
          'Decomposing any correlation into Y -> X, Z -> (X, Y), and X <-> Y systematically surfaces structural rival causes in empirical studies.',
      },
      {
        source: 'arq-ch09-post-hoc-fae',
        target: 'arq-ch09-rival-cause',
        relationship: 'prerequisite_for',
        explanation:
          'Overcoming Post Hoc temporal illusions and the Fundamental Attribution Error is required to notice situational and coincidental rival causes.',
      },
      {
        source: 'arq-ch09-exhibit-9-1-criteria',
        target: 'arq-ch09-rival-cause',
        relationship: 'evaluates',
        explanation:
          'Exhibit 9-1’s six criteria evaluate and rank the competing rival causes generated during critical analysis.',
      },
      {
        source: 'arq-ch09-covariation-fork',
        target: 'arq-ch09-exhibit-9-1-criteria',
        relationship: 'prerequisite_for',
        explanation:
          'Once the four structural causal graphs are mapped, Exhibit 9-1 criteria determine which graph best fits prior domain knowledge and empirical scope.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 14,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of all 14 headings in manifest.json for Chapter 9 (pages 134–147), including the babysitter sunset parable, causal trigger lexicon, Sandy Hook and WHI breastfeeding (n=139,681) studies, elementary depression contributory causes, 525-smoker flu study, 10-city ice cream/crime study, lucky quarter/hat Post Hoc examples, Fundamental Attribution Error figure (page 142), Ernie’s banana on Sesame Street, Exhibit 9-1, Luna Lovegood circular causality, Walking Dead 5-year-old "Why?" method, and Practice Passages 1–3 with Sample Responses.',
  },
};

export const arqCh10Mastery: ChapterMastery = {
  chapterNumber: 10,
  chapterId: 'ch10',
  title: 'Are Any Statistics Deceptive?',
  subtitle:
    'Unknowable statistics and the illusion of precision, mean vs. median vs. mode under skewed distributions, range and survival distributions, measurement and calibration error (Deflategate & DUI devices), operationalization mismatches, base-rate and denominator omissions, and double-blind statistical auditing.',
  readingTimeMinutes: 10,
  sourceWordCount: 3945,
  executiveThesis:
    'Statistics are evidence expressed as numbers, which endows them with an immediate psychological aura of scientific objectivity and precision ("I have statistics to prove it"). Yet statistics routinely deceive.',
  paradigmShift: {
    oldWay:
      'Numerical Deference: Treat any quantitative percentage, average, or large headcount as hard scientific fact.',
    newWay:
      'Double-Blind Statistical Auditing: Interrogate how the numerator and denominator were physically defined and measured.',
    whyItChanged:
      'Modern media, politics, medical prognoses, and corporate reporting rely heavily on summary statistics that are mathematically true yet contextually deceptive.',
  },
  heroIllustrationUrl: '/books/asking-the-right-questions/assets/arq_ch10_plate.png',
  customDiagrams: [
    {
      id: 'arq-ch10-svg-skewed-averages',
      title: 'Skewed Distributions (Mean vs. Median vs. Mode) & Truncated-Axis Visual Deception',
      subtitle:
        'How right-skewed outliers pull the arithmetic mean far above the median and mode (2015 NFL salaries) and how y-axis truncation manufactures visual cliffs (Page 149)',
      svgCode: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="arqCh10Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="skewFill10" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
      <stop offset="40%" stop-color="#a855f7" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.2" />
    </linearGradient>
  </defs>
  <rect width="800" height="400" rx="12" fill="url(#arqCh10Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">CONFUSING AVERAGES &amp; VISUAL SCALE MANIPULATION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Left: Why Mean ($2.2M), Median ($830K), and Mode diverge under right skew | Right: Page 149 Truncated Y-Axis</text>

  <!-- Left Panel: Right-Skewed Distribution (NFL Salaries & Survival Range) -->
  <rect x="24" y="66" width="446" height="310" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="88" fill="#e0f2fe" font-size="11.5" font-weight="700">1. RIGHT-SKEWED DISTRIBUTION: 2015 NFL SALARIES</text>
  <text x="40" y="104" fill="#94a3b8" font-size="9.5">Superstar outliers ($35M+ QB) pull the Mean to 2.65x the Median</text>

  <!-- Axes for Distribution -->
  <line x1="48" y1="264" x2="446" y2="264" stroke="#64748b" stroke-width="1.5" />
  <line x1="48" y1="120" x2="48" y2="264" stroke="#64748b" stroke-width="1.5" />
  <text x="42" y="130" fill="#94a3b8" font-size="8" text-anchor="end">Freq</text>

  <!-- Skewed Curve Path -->
  <path d="M 52 264 C 65 240, 82 128, 102 128 C 124 128, 150 205, 210 236 C 270 254, 350 260, 440 262 L 440 264 Z" fill="url(#skewFill10)" stroke="#38bdf8" stroke-width="2" />

  <!-- Mode Line -->
  <line x1="102" y1="128" x2="102" y2="264" stroke="#34d399" stroke-width="2" stroke-dasharray="4 3" />
  <rect x="64" y="112" width="76" height="20" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="102" y="125" fill="#6ee7b7" font-size="8.5" font-weight="700" text-anchor="middle">MODE (~$500K)</text>
  <text x="102" y="278" fill="#6ee7b7" font-size="8" text-anchor="middle">Most Frequent</text>

  <!-- Median Line -->
  <line x1="164" y1="176" x2="164" y2="264" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 3" />
  <rect x="122" y="152" width="84" height="22" rx="4" fill="#271a0c" stroke="#f59e0b" stroke-width="1" />
  <text x="164" y="166" fill="#fde68a" font-size="8.5" font-weight="700" text-anchor="middle">MEDIAN ($830K)</text>
  <text x="164" y="290" fill="#fbbf24" font-size="8" text-anchor="middle">50% Below / 50% Above</text>

  <!-- Mean Line -->
  <line x1="258" y1="218" x2="258" y2="264" stroke="#f43f5e" stroke-width="2.2" />
  <rect x="214" y="192" width="88" height="22" rx="4" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="258" y="206" fill="#fda4af" font-size="8.5" font-weight="700" text-anchor="middle">MEAN ($2.20M)</text>
  <text x="258" y="278" fill="#fda4af" font-size="8" text-anchor="middle">Pulled by Tail</text>

  <!-- Outlier Point -->
  <circle cx="426" cy="259" r="5" fill="#f43f5e" />
  <text x="410" y="248" fill="#fda4af" font-size="8.5" font-weight="700" text-anchor="end">Star QB: $35M+</text>

  <!-- Bottom Box inside Left Panel: Range & Cancer Survival Insight -->
  <rect x="40" y="302" width="414" height="62" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1" />
  <text x="52" y="319" fill="#38bdf8" font-size="9.5" font-weight="700">WHY RANGE &amp; DISTRIBUTION MATTER (10-Month Cancer Prognosis)</text>
  <text x="52" y="334" fill="#cbd5e1" font-size="8.5">• Median survival = 10 mos means 50% die &lt;= 10 mos and 50% live &gt; 10 mos.</text>
  <text x="52" y="349" fill="#94a3b8" font-size="8.5">• Right-tail range may include patients living 10–60+ years (up to age 80+).</text>

  <!-- Right Panel: Page 149 Graph 1 vs Graph 2 Y-Axis Truncation -->
  <rect x="486" y="66" width="290" height="310" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="502" y="88" fill="#fef3c7" font-size="11.5" font-weight="700">2. PAGE 149: AXIS TRUNCATION</text>
  <text x="502" y="104" fill="#94a3b8" font-size="9">Same vote data (995 vs 985 vs 975), two visual stories</text>

  <!-- Graph 1: Truncated (950 to 1,000) -->
  <rect x="502" y="116" width="122" height="174" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="563" y="132" fill="#fda4af" font-size="9" font-weight="700" text-anchor="middle">Graph 1 (Truncated)</text>
  <text x="563" y="144" fill="#94a3b8" font-size="7.5" text-anchor="middle">Y-Axis: 950 to 1,000</text>
  <line x1="524" y1="262" x2="612" y2="262" stroke="#64748b" stroke-width="1" />
  <text x="520" y="164" fill="#94a3b8" font-size="7" text-anchor="end">1000</text>
  <text x="520" y="213" fill="#94a3b8" font-size="7" text-anchor="end">975</text>
  <text x="520" y="262" fill="#94a3b8" font-size="7" text-anchor="end">950</text>
  <!-- Bars in Graph 1 -->
  <rect x="530" y="170" width="20" height="92" fill="#f43f5e" rx="2" />
  <rect x="558" y="192" width="20" height="70" fill="#fbbf24" rx="2" />
  <rect x="586" y="213" width="20" height="49" fill="#38bdf8" rx="2" />
  <text x="540" y="274" fill="#cbd5e1" font-size="7" text-anchor="middle">Pizza</text>
  <text x="568" y="274" fill="#cbd5e1" font-size="7" text-anchor="middle">Dogs</text>
  <text x="596" y="274" fill="#cbd5e1" font-size="7" text-anchor="middle">Burg</text>
  <text x="563" y="285" fill="#fda4af" font-size="7.5" text-anchor="middle">Looks like ~2x gap!</text>

  <!-- Graph 2: Honest Zero Baseline (0 to 1,000) -->
  <rect x="638" y="116" width="122" height="174" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1" />
  <text x="699" y="132" fill="#6ee7b7" font-size="9" font-weight="700" text-anchor="middle">Graph 2 (Full Scale)</text>
  <text x="699" y="144" fill="#94a3b8" font-size="7.5" text-anchor="middle">Y-Axis: 0 to 1,000</text>
  <line x1="660" y1="262" x2="748" y2="262" stroke="#64748b" stroke-width="1" />
  <text x="656" y="164" fill="#94a3b8" font-size="7" text-anchor="end">1000</text>
  <text x="656" y="213" fill="#94a3b8" font-size="7" text-anchor="end">500</text>
  <text x="656" y="262" fill="#94a3b8" font-size="7" text-anchor="end">0</text>
  <!-- Bars in Graph 2 -->
  <rect x="666" y="165" width="20" height="97" fill="#34d399" rx="2" />
  <rect x="694" y="166" width="20" height="96" fill="#34d399" rx="2" />
  <rect x="722" y="167" width="20" height="95" fill="#34d399" rx="2" />
  <text x="676" y="274" fill="#cbd5e1" font-size="7" text-anchor="middle">Pizza</text>
  <text x="704" y="274" fill="#cbd5e1" font-size="7" text-anchor="middle">Dogs</text>
  <text x="732" y="274" fill="#cbd5e1" font-size="7" text-anchor="middle">Burg</text>
  <text x="699" y="285" fill="#6ee7b7" font-size="7.5" text-anchor="middle">True gap: &lt; 2%!</text>

  <!-- Bottom note inside Right Panel -->
  <rect x="502" y="302" width="258" height="62" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1" />
  <text x="512" y="319" fill="#fbbf24" font-size="9" font-weight="700">VISUAL DECEPTION RULE</text>
  <text x="512" y="334" fill="#cbd5e1" font-size="8">Starting the vertical axis at 950 instead of 0</text>
  <text x="512" y="348" fill="#cbd5e1" font-size="8">magnifies a trivial 20-vote difference by 20x.</text>
</svg>`,
      bierutCaption:
        'Left: In right-skewed distributions like NFL salaries or Senate campaign spending, high-end outliers pull the arithmetic mean ($2.2M) far above the median ($830K) and mode.',
      annotations: [
        {
          step: '1',
          label: 'Strategic Selection of "The Average" Under Skewness',
          explanation:
            'Because the word "average" legally and colloquially refers to the mean, median, or mode, an advocate who wants NFL salaries or student study hours to appear huge will report the mean, whereas someone arguing for higher baseline pay will report the median or mode.',
        },
        {
          step: '2',
          label: 'The 10-Month Median Survival Fallacy',
          explanation:
            'A median survival of 10 months means exactly 50% of patients die within 10 months and 50% survive longer.',
        },
        {
          step: '3',
          label: 'Baseline Truncation in Visual Telemetry (Page 149)',
          explanation:
            'Graph 1 and Graph 2 plot the exact same vote counts for Pizza, Hot Dogs, and Hamburgers, yet cropping the y-axis to 950–1,000 visually exaggerates a 1–2% difference into a 200% bar-height ratio.',
        },
      ],
    },
    {
      id: 'arq-ch10-svg-deception-audit',
      title: 'The Double-Blind Statistical Audit & The Omission Quadrant',
      subtitle:
        'Detecting "Concluding One Thing, Proving Another" via two-way blinding and exposing missing base rates or denominators',
      svgCode: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="arqCh10Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>
    <marker id="arrCyan10" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrAmber10" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="400" rx="12" fill="url(#arqCh10Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">CONCLUDING ONE THING, PROVING ANOTHER &amp; DECEIVING BY OMISSION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Two blind-audit protocols to expose operational mismatches + The Numerator/Denominator Omission Matrix</text>

  <!-- Top Left: Strategy 1 (Blind Yourself to the Statistics) -->
  <rect x="24" y="66" width="368" height="154" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="88" fill="#38bdf8" font-size="11" font-weight="700">STRATEGY 1: BLIND YOURSELF TO THE STATISTIC</text>
  <text x="40" y="103" fill="#94a3b8" font-size="9">Read Conclusion First -&gt; Define Needed Data -&gt; Compare to Given</text>

  <rect x="38" y="114" width="154" height="54" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="46" y="129" fill="#e0f2fe" font-size="8.5" font-weight="700">Author's Conclusion:</text>
  <text x="46" y="142" fill="#cbd5e1" font-size="8">"High risk your phone is</text>
  <text x="46" y="154" fill="#cbd5e1" font-size="8">stolen on the subway!"</text>
  <text x="46" y="164" fill="#7dd3fc" font-size="7.5">Needs: P(Theft | Ride)</text>

  <line x1="194" y1="141" x2="216" y2="141" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#arrCyan10)" />

  <rect x="220" y="114" width="158" height="54" rx="5" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="228" y="129" fill="#ffe4e6" font-size="8.5" font-weight="700">Statistic Actually Given:</text>
  <text x="228" y="142" fill="#fecdd3" font-size="8">"Gadgets = 70% of all</text>
  <text x="228" y="154" fill="#fecdd3" font-size="8">subway thefts."</text>
  <text x="228" y="164" fill="#fda4af" font-size="7.5">Gives: P(Gadget | Theft)</text>

  <text x="40" y="188" fill="#fde68a" font-size="8.5" font-weight="600">• Mismatch Exposed: P(Gadget | Theft) != P(Theft | Subway Ride).</text>
  <text x="40" y="203" fill="#94a3b8" font-size="8">  If only 10 thefts occur in 10M rides, riding the subway is 99.9999% safe!</text>

  <!-- Top Right: Strategy 2 (Blind Yourself to the Conclusion) -->
  <rect x="408" y="66" width="368" height="154" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="424" y="88" fill="#fbbf24" font-size="11" font-weight="700">STRATEGY 2: BLIND YOURSELF TO THE CONCLUSION</text>
  <text x="424" y="103" fill="#94a3b8" font-size="9">Read Raw Data First -&gt; Form Honest Claim -&gt; Compare to Author</text>

  <rect x="422" y="114" width="154" height="54" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="430" y="129" fill="#fef3c7" font-size="8.5" font-weight="700">Raw Statistic (n = 75):</text>
  <text x="430" y="142" fill="#cbd5e1" font-size="8">36 of 75 mall shoppers</text>
  <text x="430" y="154" fill="#cbd5e1" font-size="8">say a FRIEND admitted</text>
  <text x="430" y="164" fill="#fcd34d" font-size="7.5">cheating at least once.</text>

  <line x1="578" y1="141" x2="600" y2="141" stroke="#f59e0b" stroke-width="1.8" marker-end="url(#arrAmber10)" />

  <rect x="604" y="114" width="158" height="54" rx="5" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="612" y="129" fill="#ffe4e6" font-size="8.5" font-weight="700">Author's Leap:</text>
  <text x="612" y="142" fill="#fecdd3" font-size="8">"Almost half (48%) of</text>
  <text x="612" y="154" fill="#fecdd3" font-size="8">ALL Americans cheat on</text>
  <text x="612" y="164" fill="#fda4af" font-size="7.5">significant others!"</text>

  <text x="424" y="188" fill="#fde68a" font-size="8.5" font-weight="600">• 3 Leaps Exposed: 1 Mall != All US; Having 1 friend != Self;</text>
  <text x="424" y="203" fill="#94a3b8" font-size="8">  50 shoppers can share the same 1 unfaithful friend!</text>

  <!-- Bottom Full Panel: Deceiving by Omitting Information -->
  <rect x="24" y="234" width="752" height="142" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="40" y="256" fill="#6ee7b7" font-size="11.5" font-weight="700">3. DECEIVING BY OMITTING INFORMATION: THE DUAL-METRIC MANDATE</text>
  <text x="40" y="272" fill="#94a3b8" font-size="9.5">Why every honest statistical report requires BOTH the Relative Percentage (%) AND the Absolute Base Numbers</text>

  <!-- Left Sub-box: Percentage Only Trap -->
  <rect x="40" y="284" width="350" height="78" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="52" y="302" fill="#fda4af" font-size="10" font-weight="700">TRAP A: PERCENTAGE WITHOUT BASE NUMBERS</text>
  <text x="52" y="318" fill="#cbd5e1" font-size="8.5">Claim: "Large downtown businesses surged by 75% last year!"</text>
  <text x="52" y="333" fill="#fde68a" font-size="8.5">Missing Base: Did it rise from 4 to 7 (+3) or 100 to 175 (+75)?</text>
  <text x="52" y="348" fill="#94a3b8" font-size="8">Rule: Tiny base denominators (B_0 = 4) inflate relative % changes.</text>

  <!-- Right Sub-box: Absolute Number Only Trap -->
  <rect x="410" y="284" width="350" height="78" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="422" y="302" fill="#fbbf24" font-size="10" font-weight="700">TRAP B: ABSOLUTE COUNT WITHOUT DENOMINATOR</text>
  <text x="422" y="318" fill="#cbd5e1" font-size="8.5">Claim: "In 2009, 54,000 Americans were afflicted with AIDS!"</text>
  <text x="422" y="333" fill="#fde68a" font-size="8.5">Missing Rate: 54,000 / 300,000,000 US pop = 0.018% (~0.02%).</text>
  <text x="422" y="348" fill="#94a3b8" font-size="8">Rule: Raw national counts look huge without the population denominator.</text>
</svg>`,
      bierutCaption:
        'Top: The two complementary blind-audit strategies for catching authors who prove one statistic while concluding another.',
      annotations: [
        {
          step: '1',
          label: 'Strategy 1 — Mask the Statistic, Specify Required Evidence',
          explanation:
            'By reading only the verbal claim ("Riding the subway puts your phone at high risk of theft") and asking what formula is required.',
        },
        {
          step: '2',
          label: 'Strategy 2 — Mask the Conclusion, Derive Exact Warranted Claim',
          explanation:
            'By reading only the raw data ("36 of 75 shoppers at one mall have a friend who admitted cheating once"), you formulate the exact narrow truth and expose the author’s leap to "Almost half of all Americans cheat."',
        },
        {
          step: '3',
          label: 'The Base-Rate & Denominator Symmetry Rule',
          explanation:
            'Whenever an advocate gives you only a percentage (75% increase in big businesses), demand the absolute numbers (4 -> 7).',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'arq-ch10-mm-illusion-precision',
      name: 'The Illusion of Precision (Unknowable Numerators)',
      tagline: 'Exact-looking numbers for private, illicit, or vaguely defined acts are educated guesses in lab coats',
      naiveIntuition:
        'When a headline or study reports a specific figure like "40% of college students suffer from ADD" or cites the exact number of citizens who cheat on taxes or use illegal drugs, researchers must have counted those events accurately.',
      firstPrinciplesReality:
        'Every valid statistic requires two prerequisites: an unambiguous operational definition of the event and a reliable physical or observational mechanism to count it.',
      howToApply:
        'Whenever you encounter an alarming or suspiciously precise statistic about human behavior, immediately ask: "How did the author physically count or estimate this, and what barriers prevented accurate observation or honest reporting?"',
    },
    {
      id: 'arq-ch10-mm-skew-leverage',
      name: 'Skewness Leverage (Mean, Median, Mode & Range)',
      tagline: 'In skewed distributions, the word "average" is a rhetorical lever for picking whichever center suits the argument',
      naiveIntuition:
        'The "average" represents the typical person in the middle of a group, so it makes little difference whether a writer uses the mean, the median, or the mode.',
      firstPrinciplesReality:
        'Whenever a distribution has a long tail of extreme outliers (such as NFL quarterback salaries at $35M+ or competitive Senate race spending), the arithmetic mean is pulled dramatically toward the tail ($2.2M), separating from the median ($830K) and mode.',
      howToApply:
        'Never accept an unqualified "average." Ask: (1) Is this the mean, median, or mode?',
    },
    {
      id: 'arq-ch10-mm-double-blind-audit',
      name: 'The Double-Blind Statistical Audit',
      tagline: 'Decouple the author’s verbal conclusion from their numerical evidence in both directions',
      naiveIntuition:
        'If an author cites a real, verified statistic right after stating a conclusion, the statistic proves the conclusion.',
      firstPrinciplesReality:
        'Communicators frequently commit operationalization sleight-of-hand: proving Statistic A (e.g., 70% of subway thefts involve electronics, or 48% of mall respondents know a friend who cheated) while concluding Claim B (subway riders are likely to be robbed, or 48% of Americans cheat).',
      howToApply:
        'Run a two-step blind audit: First, cover the statistics and write down what exact metric is needed to prove the author’s conclusion.',
    },
    {
      id: 'arq-ch10-mm-numerator-denominator',
      name: 'The Dual-Metric Mandate (Counts + Percentages)',
      tagline: 'A percentage without its base count or a raw count without its denominator is half a statistic',
      naiveIntuition:
        'A 75% surge in large businesses or 54,000 national cases of an illness is self-evidently massive and requires immediate action.',
      firstPrinciplesReality:
        'Relative percentages (Delta %) explode when the starting baseline B_0 is tiny (an increase from 4 businesses to 7 is +75%), while raw absolute counts (N) always look enormous in a nation of 300+ million people even when the population rate is 0.02% (54,000 / 300,000,000).',
      howToApply:
        'Enforce the Dual-Metric Mandate on every quantitative claim: if given only a percentage, calculate or demand the absolute numbers.',
    },
  ],
  deepSections: [
    {
      id: 'arq-ch10-sec-01',
      sectionNumber: '10.1',
      title: 'Unknowable and Biased Statistics: Piercing the Illusion of Precision',
      subtitle:
        'Why numbers project false scientific authority, how truncated y-axes distort scale, and the five structural barriers that make many statistics unknowable',
      coreMechanism:
        'Browne and Keeley open Chapter 10 with a classic news bulletin: *"The economy is greatly improving. Last month alone our unemployment rate decreased by 1 percent."* Why do communicators constantly invoke the phrase *"I have statistics to prove it"*?\n\nBefore accepting any statistic—such as the alarming headline *"40 PERCENT OF COLLEGE STUDENTS SUFFER FROM ATTENTION DEFICIT DISORDER!"*—the critical thinker’s first defense is to ask: **"How were these statistics obtained?"** Any valid statistic requires that specific events have been clearly defined and accurately identified. In practice, five structural obstacles frequently make accurate counting impossible, turning impressive-sounding statistics into **unknowable or biased statistics**:\n1. **Ambiguity of Key Terms**: Where is the exact threshold between normal mind-wandering during a lecture and clinical "Attention Deficit Disorder"?',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit Visual Scales and Axis Baselines',
          detail:
            'When statistics are displayed in charts (like Page 149’s Graph 1 vs.',
        },
        {
          step: '2',
          title: 'Interrogate Operational Definitions',
          detail:
            'Ask how the key noun in the statistic (e.g., "Attention Deficit Disorder," "household injury," "excessive texting") was operationally defined and measured.',
        },
        {
          step: '3',
          title: 'Test for the Five Observational Barriers',
          detail:
            'Evaluate whether definitional ambiguity, hidden populations, lying/social desirability, non-reporting, or physical privacy barriers make the true count unknowable.',
        },
        {
          step: '4',
          title: 'Treat Suspicious Precision as an Educated Guess',
          detail:
            'When an unknowable phenomenon is reported with exact digits, demand the estimation methodology and confidence bounds before reacting to the number.',
        },
      ],
      keyTakeaways: [
          'Statistics are numerical evidence that look scientific and authoritative, yet they are only as trustworthy as the definitions and physical counting procedures behind them.',
          'Truncating the vertical axis of a graph (Page 149) can make a trivial 1% difference look like a massive structural chasm.',
        ],
      commonPitfalls: [
          'Assuming that because a number is printed in a peer-reviewed journal or major newspaper with decimal precision, the underlying event was directly counted.',
          'Forgetting that broadening a diagnostic or behavioral definition ("ADD," "binge drinking," "cyberbullying") instantly multiplies the reported prevalence without any change in human behavior.',
        ],
      figures: [
        {
          file: 'arq_ch10_plate.png',
          originalLabel: 'Chapter 10 Opening Blueprint: Are Any Statistics Deceptive? (Page 148)',
          bierutTitle: 'Piercing the Scientific Aura of Quantitative Evidence',
          editorialAnalysis:
            'The Chapter 10 opening plate establishes the four core competencies for auditing quantitative claims: recognizing biased and unknowable statistics, distinguishing the three forms of averages (mean, median, mode), uncovering physical and procedural measurement errors, and catching communicators who conclude one thing while their statistics prove another.',
          keyTakeaways: [
          'Numbers do not speak for themselves; their meaning depends on how events were defined, measured, aggregated, and contextualized.',
          'Critical thinkers systematically audit the gap between the raw number and the verbal claim attached to it.',
        ],
        },
      ],
    },
    {
      id: 'arq-ch10-sec-02',
      sectionNumber: '10.2',
      title: 'Confusing Averages: Mean, Median, Mode, Range, and Distribution',
      subtitle:
        'Exhibit 10-1’s three measures of central tendency, the 2015 NFL salary skew ($2.2M mean vs. $830K median), student study hours, and the 10-month median cancer survival distribution',
      coreMechanism:
        'When an author writes that *"an average NFL football player made $2.2 million in 2015"* or that *"college students study an average of 12.8 hours per week, about half of the hours studied 20 years ago,"* the word **average** conceals a critical ambiguity. As summarized in **Exhibit 10-1**, there are three mathematically distinct ways to compute an average, and in almost any real-world dataset they yield different values:\n1. **The Mean**: Add all values together and divide by the total number of values ($\\mu = \\frac{1}{n}\\sum x_i$).\n2. **The Median**: List all values from highest to lowest and select the exact middle value (half of all values lie above the median; half lie below it).\n3. **The Mode**: Count the frequency of each value (or value bracket) and select the value that occurs most frequently.\n\nWhy does the choice of average change the truth of an argument? Because **extreme outliers in a skewed distribution pull the mean dramatically without moving the median or mode**.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Challenge Every Unqualified "Average" or "Typical" Claim',
          detail:
            'Whenever you see the word "average," immediately ask: "Is this the mean, the median, or the mode—and how would the other two change the story?"',
        },
        {
          step: '2',
          title: 'Audit for Skewness and Extreme Outliers',
          detail:
            'Check whether the domain (income, campaign spending, study hours, home prices, survival time) has a hard lower bound (zero) and an uncapped upper tail of extreme outliers that inflate the mean.',
        },
        {
          step: '3',
          title: 'Demand the Range (Min to Max) and Full Distribution',
          detail:
            'Ask how wide the gap is between the minimum and maximum outcomes and whether the distribution is unimodal, bimodal, or long-tailed.',
        },
        {
          step: '4',
          title: 'Evaluate Individual Position Within the Distribution',
          detail:
            'Remember that most individuals do not match the exact average value.',
        },
      ],
      keyTakeaways: [
          'Exhibit 10-1 defines three types of averages: Mean (sum divided by count), Median (middle value with 50% above and 50% below), and Mode (most frequent value).',
          'In right-skewed distributions like 2015 NFL salaries ($2.2M mean vs. $830K median, top player >$35M), extreme high values inflate the mean while leaving the median and mode untouched.',
        ],
      commonPitfalls: [
          'Assuming that "average" always means the arithmetic mean, or assuming that the mean describes the majority of people in a skewed distribution.',
          'Treating a median survival time as a hard ceiling or expiration date rather than the 50th-percentile dividing line of a potentially wide distribution.',
        ],
    },
    {
      id: 'arq-ch10-sec-03',
      sectionNumber: '10.3',
      title: 'Measurement Errors & Concluding One Thing, Proving Another',
      subtitle:
        'Physical instrument & timing bias (2015 Patriots Deflategate & DUI calibration chains) and the two blind-audit strategies for catching operational mismatches',
      coreMechanism:
        'Every statistic is the output of a measurement procedure, and **all measurements are subject to error**. Browne and Keeley illustrate physical and procedural measurement error through two compelling legal controversies:\n1. **The 2015 New England Patriots "Deflategate" Controversy**: The Patriots were accused of intentionally underinflating footballs against the Indianapolis Colts so passes would be easier to catch.\n\nEven when a measurement is physically accurate, communicators frequently deceive by **Concluding One Thing, Proving Another**—citing a statistic that proves Fact A while claiming to have proven Conclusion B. Browne and Keeley provide **two complementary blind-audit strategies** to expose this sleight-of-hand:\n- **Strategy 1: Blind Yourself to the Communicator’s Statistics**.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit the Physical Measurement & Calibration Chain',
          detail:
            'Ask what instrument, timing protocol, and environmental conditions produced the statistic (as in Deflategate halftime thermal drift) and when the measuring and calibration instruments were last verified (as in DUI breathalyzers).',
        },
        {
          step: '2',
          title: 'Execute Strategy 1 (Mask the Statistic, Define Required Metric)',
          detail:
            'Cover the numbers, read the verbal conclusion, write down the exact mathematical rate or comparison needed to prove that conclusion, and check whether the author’s statistic matches.',
        },
        {
          step: '3',
          title: 'Execute Strategy 2 (Mask the Conclusion, Derive Warranted Claim)',
          detail:
            'Cover the author’s thesis, read the raw sample and measurement details word-for-word, formulate the narrowest honest conclusion, and compare it against the author’s headline claim.',
        },
        {
          step: '4',
          title: 'Flag Conditional Probability Inversions and Proxy Shifts',
          detail:
            'Check whether the author swapped P(A | B) for P(B | A) (subway thefts) or swapped second-hand friend reports for national individual prevalence (mall infidelity survey).',
        },
      ],
      keyTakeaways: [
          'All statistics depend on physical or behavioral measurements that are vulnerable to environmental timing errors (Deflategate) and uncalibrated instruments (DUI breathalyzers).',
          'Communicators frequently prove one narrow statistic while verbally claiming to have proven a completely different conclusion.',
        ],
      commonPitfalls: [
          'Confusing the conditional composition of an event P(Category | Event) with the base-rate risk of the event occurring P(Event | Exposure), as in the 70% subway gadget theft fallacy.',
          'Accepting second-hand proxy surveys ("Do you have a friend who cheated?") at a single convenience location (one shopping mall) as a direct census of national behavior.',
        ],
    },
    {
      id: 'arq-ch10-sec-04',
      sectionNumber: '10.4',
      title: 'Deceiving by Omitting Information: Absolute Numbers vs. Percentages & Missing Comparisons',
      subtitle:
        'Why relative percentages without base counts (+75% from 4 to 7) and raw counts without denominators (54,000 / 300M = 0.02%) deceive, plus the 6 Clues Checklist',
      coreMechanism:
        'Statistics frequently deceive not by stating a falsehood, but by **omitting the companion metric required to judge their real-world magnitude**. Whenever you encounter an impressive-sounding statistic, you must ask: **"What relevant information is missing?"** Browne and Keeley highlight two mirror-image omission traps:\n\n1. **Reporting Only Percentages While Omitting Absolute Base Numbers**: Consider the claim: *"Large businesses are destroying the small-town feel of our downtown area. Just last year, the number of large businesses in the city increased by 75 percent."* A $75\\%$ jump sounds dramatic.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Test Percentage Claims for Small-Base Inflation',
          detail:
            'Whenever a communicator cites a relative percentage change (e.g., "+75%," "50% more likely"), demand the starting base count X_0 and ending count X_1.',
        },
        {
          step: '2',
          title: 'Normalize Raw Headcounts by Population and Exposure Time',
          detail:
            'Whenever a communicator cites a large absolute number (e.g., "54,000 cases," "42,000 injuries"), divide by the total population size and hours of exposure.',
        },
        {
          step: '3',
          title: 'Demand Longitudinal and Cross-Group Comparisons',
          detail:
            'Ask how the current rate compares to past years (trend) and to alternative environments or control groups.',
        },
        {
          step: '4',
          title: 'Run the 6-Point Clues for Assessing Statistics Checklist',
          detail:
            'Verify provenance/measurement, average type + range/distribution, conclusion-statistic alignment via two-way blinding, and completeness of counts, percentages, and comparisons.',
        },
      ],
      keyTakeaways: [
          'Percentages without absolute base numbers deceive whenever the starting denominator is small (4 to 7 is a 75% increase).',
          'Absolute numbers without percentages deceive in large populations where tens of thousands of cases represent a tiny fraction of 1% (54,000 / 300M = 0.02%).',
        ],
      commonPitfalls: [
          'Reacting emotionally to "50% more likely" or "75% increase" headlines without checking whether the base rate moved from 0.2% to 0.3% or from 4 units to 7 units.',
          'Being overwhelmed by raw national incident counts (thousands of injuries or illnesses across 300+ million people) without normalizing per 100,000 residents or per million hours of activity.',
        ],
    },
    {
      id: 'arq-ch10-sec-05',
      sectionNumber: '10.5',
      title: 'Using Statistics Honestly in Writing & Practice Deconstruction',
      subtitle:
        'Ethical statistical communication in prose/footnotes and full deconstruction of Practice Passages 1, 2, and 3 (Campaign Spending, Home Injuries, and Teen Texting)',
      coreMechanism:
        'When you transition from critical reader to **writer**, statistics become a powerful instrument for describing trends, testing predictions, and anchoring arguments—provided you uphold an ethical balancing act. Because untrained readers treat numbers as infallible facts, a writer committed to strong-sense critical thinking must refuse to manipulate scales or omit context, while still presenting complex data clearly.\n\nApplying the full Chapter 10 toolkit to the three **Practice Exercises** demonstrates how to deconstruct deceptive statistics in the wild:\n- **Passage 1 (Campaign Spending in National Elections)**: The author argues that campaign spending is out of hand because *"the average winner in a Senate race now spends over $8 million, while typical presidential candidates spend more than $300 million."* **Deconstruction**: The trigger words *average* and *typical* demand an immediate audit of central tendency: Is the $\$8\\text{ million}$ figure the **mean, median, or mode**? Because only a handful of U.S.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Disclose Provenance, Definitions, and Limitations in Your Own Writing',
          detail:
            'Include the sampling method, operational definitions, type of average (with range/IQR), and both absolute counts and percentages in the main text, footnotes, or appendix.',
        },
        {
          step: '2',
          title: 'Deconstruct Average Claims via Skewness & Historical Baselines (Passage 1)',
          detail:
            'When auditing claims like "$8M average Senate campaign," separate skewed mean values from median/modal reality and demand historical comparison data.',
        },
        {
          step: '3',
          title: 'Enforce Rate-Over-Time and Per-Exposure Hour Normalization (Passage 2)',
          detail:
            'Reject claims that an environment is "becoming more dangerous" unless supported by longitudinal accident rates normalized per hour of exposure and scoped strictly to that environment.',
        },
        {
          step: '4',
          title: 'Audit Relative Risk Headlines for Sample Restriction & Base Rates (Passage 3)',
          detail:
            'Check whether "X% more likely" claims omit the baseline probability, rely on undefined terms ("excessive"), or generalize from a narrow demographic sample.',
        },
      ],
      keyTakeaways: [
          'Ethical writers document how their statistics were produced, what they imply, and their limitations (in text, footnotes, or appendices) so readers can think critically.',
          'In Passage 1 (Senate campaign spending), a few hyper-expensive toss-up races skew the mean ($8M) above the median/mode of safe incumbent seats, and historical comparisons are missing.',
        ],
      commonPitfalls: [
          'Citing single-year raw counts (2,300 child deaths, 42,000 TV injuries) as proof of a rising trend ("on the rise") without providing a single prior-year data point.',
          'Forgetting exposure-time normalization: if people spend 50% more hours indoors than decades ago, raw indoor accidents will rise even if the home is safer per hour.',
        ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Exhibit 10-1 Measures of Central Tendency: Mean vs. Median vs. Mode',
      description:
        'Comparing the mathematical definition, outlier sensitivity, rhetorical misuse, and ideal domain application of the three forms of "average" in Chapter 10.',
      headers: [
        'Measure of Average',
        'Mathematical Definition',
        'Outlier & Skewness Sensitivity',
        'How Advocates Weaponize It',
        'When to Demand This Metric',
      ],
      rows: [
        [
          'Arithmetic Mean',
          'Sum of all values divided by total number of values: (1/n) * sum(x_i)',
          'Extremely fragile: a single extreme outlier ($35M NFL star) pulls the mean ($2.2M) far toward the tail',
          'Used to make salaries ($2.2M NFL), Senate campaign spending ($8M), or study hours look artificially high',
          'Symmetric, bell-shaped distributions without extreme outliers, or when total aggregate sum (n * mu) is what matters',
        ],
        [
          'Median',
          'Exact middle value when all observations are ranked highest to lowest (50% above, 50% below)',
          'Highly robust: unaffected by how extreme the top 1% or bottom 1% of outliers become',
          'Used as a single expiration number (10-month median cancer survival) to hide a long right-hand survival tail',
          'Skewed financial/income distributions (NFL median = $830K), housing prices, campaign budgets, and latency percentiles (p50)',
        ],
        [
          'Mode',
          'Value or value bracket that occurs with the highest frequency in the dataset',
          'Completely immune to tail outliers; reflects the most common discrete tier or cluster',
          'Used to represent bimodal or multi-tier populations as homogeneous around the lowest minimum-wage tier',
          'Categorical data, discrete pay-scale tiers (league-minimum players), or identifying peak clusters in multimodal distributions',
        ],
        [
          'Range & Distribution (Companion Metrics)',
          'Gap between min and max (x_max - x_min) plus full quantile/frequency shape (p10, p50, p90, p99)',
          'Explicitly captures tail length, variance, and skewness that all three single-number averages erase',
          'Omitted by communicators who want readers to believe everyone experiences the exact average outcome',
          'Mandatory alongside any average, especially in medical survival prognoses (10-mo median extending to age 80+) and SLA engineering',
        ],
      ],
      verdictRule:
        'Never accept the word "average" at face value: in any skewed domain (money, time, survival, latency), demand both the Mean and the Median alongside the Range and full Distribution.',
    },
    {
      title: 'Taxonomy of Statistical Deception & The Critical Thinker’s Counter-Audit',
      description:
        'Mapping the five primary statistical deceptions in Chapter 10 to their underlying structural mechanics, textbook examples, and verification protocols.',
      headers: [
        'Deception Mechanism',
        'Structural Mechanics',
        'Textbook Case Example',
        'Blind Audit / Verification Protocol',
      ],
      rows: [
        [
          '1. Unknowable & Biased Statistics',
          'Vague definitions + lying/social desirability + non-reporting + physical privacy barriers dressed in false precision',
          '"40% of college students suffer from ADD"; tax cheating, illegal drug use, cell-phone driving, 90% neighbor poll',
          'Ask "How did the author obtain this estimate?" Audit operational definitions, self-report incentives, and sampling method',
        ],
        [
          '2. Confusing Averages & Truncated Scales',
          'Picking Mean vs. Median vs. Mode to exploit skewness; cropping chart y-axis to 950–1,000 instead of 0–1,000',
          '2015 NFL salaries ($2.2M mean vs. $830K median); 10-mo cancer survival; Page 149 Pizza/Hot Dog/Hamburger graphs',
          'Check y-axis baseline; demand Mean, Median, Mode, Range, and right-tail survival distribution across institutions',
        ],
        [
          '3. Physical & Procedural Measurement Error',
          'Uncalibrated instruments or asymmetric environmental timing between treatment and control measurements',
          '2015 Patriots vs. Colts Deflategate (warm room thermal drift); DUI breathalyzer + calibration-device reliability chain',
          'Audit the physical sensor, environmental timing conditions (PV = nRT), and calibration history of both primary and reference tools',
        ],
        [
          '4. Concluding One Thing, Proving Another',
          'Proving conditional or proxy statistic A while asserting verbal conclusion B (P(Gadget|Theft) != P(Theft|Ride))',
          '70% of subway thefts are gadgets -> "high risk of subway phone theft"; 36/75 mall shoppers have a friend who cheated -> "half of US cheats"',
          'Run Two-Way Blind Audit: (1) Blind statistic to specify needed metric; (2) Blind conclusion to derive exact claim warranted by data',
        ],
        [
          '5. Deceiving by Omitting Information',
          'Reporting relative % change without base counts, raw counts without population/exposure denominator, or zero historical trend',
          'Downtown big businesses "+75%" (4 -> 7); 54,000 AIDS cases (0.02% of 300M); Passage 2 home injuries (2,300 deaths, 4.7M dog bites)',
          'Enforce Dual-Metric Mandate: demand absolute counts for every %, population/exposure-hour rates for every raw count, and longitudinal baselines',
        ],
      ],
      verdictRule:
        'Apply the 6 Clues for Assessing Statistics (Page 154) sequentially: verify provenance -> disambiguate averages/distributions -> run two-way blind conclusion checks -> fill in missing numerators, denominators, and historical comparisons.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'arq-ch10-scen-01',
      title: 'Cloud SLA Reporting: Mean vs. Median vs. Tail Distribution & Truncated Dashboards',
      roleAndContext:
        'Principal Systems Architect reviewing a third-party payment gateway vendor’s quarterly QBR deck claiming: "Our API response time averaged 42ms this quarter, beating our 50ms SLA target."',
      symptomOrFailure:
        'Despite the vendor’s "42ms average" slide and a green bar chart, your e-commerce checkout service experienced 14,000 customer payment timeouts (>3,000ms) during peak Friday traffic.',
      naiveFixAndWhyItFails:
        'Accepting the vendor’s unqualified "average" (42ms) fails because the vendor reported the **median** (or off-peak modal latency) while omitting the **mean, range, and p99.9 tail distribution**.',
      firstPrinciplesSolution:
        'Apply Chapter 10’s average and distribution audit: (1) Force disambiguation of Mean vs.',
      measurableOutcome:
        'Rewriting the vendor contract to replace "average latency < 50ms" with explicit distribution quantiles (p50 < 45ms, p95 < 180ms, p99.9 < 900ms scoped strictly to checkout POST endpoints) forced the vendor to fix connection-pool starvation, cutting checkout timeouts by 94%.',
    },
    {
      id: 'arq-ch10-scen-02',
      title: 'Security Incident Telemetry: Concluding One Thing, Proving Another & Base-Rate Omission',
      roleAndContext:
        'CISO evaluating an urgent vendor pitch claiming: "Remote employees working from home are becoming vastly more dangerous to enterprise security: 75% of credential-phishing breaches in our survey involved remote laptops, and breaches jumped 80% at one client last quarter!"',
      symptomOrFailure:
        'Executive leadership is considering revoking remote-work privileges for 4,000 engineers based on the "75% of breaches" and "+80% jump" statistics.',
      naiveFixAndWhyItFails:
        'Treating P(Remote Laptop | Breach) = 75% as proof that remote work is more dangerous per hour than office work commits the exact "Concluding One Thing, Proving Another" and "Omitting Exposure Denominators" errors exposed in the subway gadget theft (70%) and home injury (Passage 2) examples.',
      firstPrinciplesSolution:
        'Run the Double-Blind Statistical Audit and Dual-Metric Mandate: (1) Strategy 1 (Blind the statistic): to prove remote work is riskier than office work, we need the per-hour breach rate P(Breach | Remote Hour) vs.',
      measurableOutcome:
        'Normalizing security incidents per 100,000 device-hours proved remote laptops had a 22% lower incident rate than office desktops.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'arq-ch10-quiz-01',
        scenarioPrompt:
          'A commuter reads a transit report stating that "Electronic gadgets account for 70 percent of all thefts on the city subway system" and concludes, "I am highly likely to have my smartphone stolen if I ride the subway." Using Strategy 1 from Chapter 10 (blinding yourself to the statistic and asking what evidence is needed), what is the exact flaw in this reasoning?',
        options: [
          {
            label: 'A',
            text: 'The report used the median number of stolen smartphones rather than the arithmetic mean.',
            isCorrect: false,
            explanation:
              '70% is a proportion of total thefts, not a measure of central tendency (mean/median/mode).',
          },
          {
            label: 'B',
            text: 'The statistic proves what share of thefts involve gadgets—P(Gadget | Theft) = 70%—but fails to provide the base-rate probability of being robbed at all while riding the subway, P(Theft | Ride), which may be minuscule.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'C',
            text: 'The police department failed to calibrate the weighing scales used to measure the stolen smartphones.',
            isCorrect: false,
            explanation:
              'Instrument calibration applies to cases like Deflategate PSI gauges or DUI breathalyzers, not counting theft categories.',
          },
          {
            label: 'D',
            text: 'Subway riders are unwilling to admit truthfully that they own smartphones.',
            isCorrect: false,
            explanation:
              'The error here is Concluding One Thing, Proving Another (inverting conditional probability vs. per-ride risk), not social desirability bias.',
          },
        ],
      },
      {
        id: 'arq-ch10-quiz-02',
        scenarioPrompt:
          'In 2015, the arithmetic mean salary of an NFL player was $2.2 million, whereas the median salary was $830,000, and the highest-paid player earned over $35 million. Why is the mean nearly three times higher than the median, and which measure would an advocate choose to make player pay appear as high as possible?',
        options: [
          {
            label: 'A',
            text: 'Extremely high salaries of superstar players pull the arithmetic mean upward while having zero effect on the middle rank (median) or most frequent value (mode); an advocate wanting salaries to seem huge will report the mean.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'B',
            text: 'Exactly 50% of NFL players earned more than $2.2 million in 2015, making the mean the middle number.',
            isCorrect: false,
            explanation:
              'The middle number where 50% earn more and 50% earn less is the median ($830,000), not the mean ($2.2 million).',
          },
          {
            label: 'C',
            text: 'The median ($830,000) is calculated by counting which exact dollar salary occurs most frequently on NFL rosters.',
            isCorrect: false,
            explanation:
              'The value that occurs most frequently is the mode, not the median.',
          },
          {
            label: 'D',
            text: 'The NFL salary distribution is perfectly symmetrical, so the difference between $2.2 million and $830,000 is caused by measurement error.',
            isCorrect: false,
            explanation:
              'In a symmetrical unimodal distribution, the mean and median are equal; their large divergence proves strong right-skewness.',
          },
        ],
      },
      {
        id: 'arq-ch10-quiz-03',
        scenarioPrompt:
          'A physician tells a 20-year-old cancer patient: "The median survival length for your diagnosis is 10 months; you should prepare for only a few months left to live." Why does Chapter 10 emphasize demanding the range and distribution alongside this median statistic?',
        options: [
          {
            label: 'A',
            text: 'Because a median of 10 months means nobody with this diagnosis has ever lived longer than 20 months.',
            isCorrect: false,
            explanation:
              'A median imposes zero upper bound on the maximum value in the upper half of the distribution.',
          },
          {
            label: 'B',
            text: 'Because the median only tells us that half die within 10 months and half live longer than 10 months; the range and distribution of the surviving half could reveal that many patients live for years or decades (even past age 80), especially at top hospitals.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'C',
            text: 'Because doctors always confuse the median with the mode when reading oncology charts.',
            isCorrect: false,
            explanation:
              'The median is accurately defined as the 50% mark.',
          },
          {
            label: 'D',
            text: 'Because cancer survival times are unknowable statistics since patients refuse to report their ages truthfully.',
            isCorrect: false,
            explanation:
              'Clinical survival times are tracked in medical registries; the issue is interpreting central tendency without spread/distribution.',
          },
        ],
      },
      {
        id: 'arq-ch10-quiz-04',
        scenarioPrompt:
          'How did the New England Patriots successfully use the concept of "measurement error" in court to challenge the 2015 halftime football air-pressure (Deflategate) statistics against the Indianapolis Colts?',
        options: [
          {
            label: 'A',
            text: 'They showed that the Colts’ footballs were measured after the Patriots’ footballs, giving the Colts’ balls more time in a warm room to heat up and increase in pressure before measurement.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'B',
            text: 'They proved that the NFL referees reported the modal air pressure instead of the median air pressure.',
            isCorrect: false,
            explanation:
              'The Deflategate defense centered on physical measurement timing and locker-room warmth, not mean/median/mode confusion.',
          },
          {
            label: 'C',
            text: 'They argued that air pressure inside a football is a philosophically unknowable statistic that cannot be measured by any physical gauge.',
            isCorrect: false,
            explanation:
              'Air pressure is physically measurable, but requires controlling timing, ambient temperature, and gauge calibration.',
          },
          {
            label: 'D',
            text: 'They showed that the NFL truncated the vertical axis of the halftime pressure chart from 950 to 1,000.',
            isCorrect: false,
            explanation:
              'The 950-to-1,000 truncated axis is the Pizza/Hot Dogs/Hamburgers example on page 149.',
          },
        ],
      },
      {
        id: 'arq-ch10-quiz-05',
        scenarioPrompt:
          'In Practice Passage 2, an author argues that "The home is becoming a more dangerous place to spend time," citing 2,300 child home-accident deaths in the year 2000, 4.7 million annual dog bites, and 42,000 annual television/TV-stand injuries. According to Browne and Keeley’s Sample Response, what statistical evidence would actually be required to prove the author’s conclusion?',
        options: [
          {
            label: 'A',
            text: 'The exact arithmetic mean age of the dogs involved in the 4.7 million annual bites.',
            isCorrect: false,
            explanation:
              'Dog age is irrelevant, and the passage never even establishes how many of the 4.7 million dog bites occurred inside the home.',
          },
          {
            label: 'B',
            text: 'A comparison of the current rate of serious household accidents per year—and injuries per hour spent inside the house—against the same rates in past years.',
            isCorrect: true,
            explanation:
              'Correct.',
          },
          {
            label: 'C',
            text: 'A voluntary survey of 75 shoppers at a local mall asking whether they have a friend who was injured by a television.',
            isCorrect: false,
            explanation:
              'That replicates the flawed shopping-mall convenience sample from the infidelity example.',
          },
          {
            label: 'D',
            text: 'Converting the 42,000 television injuries into a bar graph with a vertical axis starting at 41,500.',
            isCorrect: false,
            explanation:
              'Truncating the vertical axis would further distort the visual presentation rather than supplying the missing rate comparisons.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'arq-ch10-fc-01',
        category: 'data',
        front: 'What are the five structural obstacles that produce "Unknowable or Biased Statistics"?',
        back: '1.',
        mentalHook: 'Why exact numbers for tax fraud or cell-phone driving are educated guesses.',
      },
      {
        id: 'arq-ch10-fc-02',
        category: 'foundation',
        front: 'Define the three types of averages in Exhibit 10-1 (Mean, Median, Mode) and state which one is most distorted by extreme outliers.',
        back: '• Mean: Sum of all values divided by total number of values.\n• Median: Middle value when ranked highest to lowest (50% above, 50% below).\n• Mode: Most frequently occurring value.\nThe Mean is heavily distorted by extreme outliers (e.g., $35M NFL star pulls 2015 NFL mean to $2.2M vs. $830K median).',
        mentalHook: 'Mean chases outliers; Median holds the 50% line; Mode counts the crowd.',
      },
      {
        id: 'arq-ch10-fc-03',
        category: 'evaluation',
        front: 'What are "Range" and "Distribution," and why are they vital when interpreting a 10-month median cancer survival prognosis?',
        back: '• Range: The gap between the smallest and largest values.\n• Distribution: How frequently each value occurs across the spectrum.\nA 10-month median means 50% live longer than 10 months.',
        mentalHook: 'The median is the 50% fence, never the upper wall.',
      },
      {
        id: 'arq-ch10-fc-04',
        category: 'architecture',
        front: 'How do DUI defense lawyers and the 2015 Patriots Deflategate case illustrate "Measurement Error" in statistics?',
        back: 'Statistics are only as valid as the physical instruments and conditions producing them.',
        mentalHook: 'Audit the sensor, the thermal timing, and the calibrator that calibrated the sensor.',
      },
      {
        id: 'arq-ch10-fc-05',
        category: 'evaluation',
        front: 'What are the two "Blind Audit" strategies for detecting when an author is "Concluding One Thing, Proving Another"?',
        back: '• Strategy 1 (Blind yourself to the statistics): Read only the conclusion, ask what statistical evidence is needed to prove it, and compare to the statistic given (e.g., 70% subway gadget theft).\n• Strategy 2 (Blind yourself to the conclusion): Read only the raw statistics, form your own exact conclusion, and compare to the author’s (e.g., 36/75 mall shoppers with an unfaithful friend).',
        mentalHook: 'Mask the numbers to test necessity; mask the thesis to test warrant.',
      },
      {
        id: 'arq-ch10-fc-06',
        category: 'data',
        front: 'What is the Dual-Metric Rule for preventing "Deceiving by Omitting Information" with numbers and percentages?',
        back: 'When only percentages are presented (e.g., "+75% increase in large downtown businesses"), demand the absolute numbers (4 to 7).',
        mentalHook: 'Percentages hide tiny bases; raw counts hide massive denominators.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'arq-ch10-feyn-01',
        conceptTitle: 'Dissecting Skewed Averages, Range, and Distribution',
        prompt:
          'Explain to a college student why the statement "The average NFL player makes $2.2 million, and the median cancer survival for this diagnosis is 10 months, so almost every NFL player is rich and almost every patient with this diagnosis dies in 10 months" commits two profound statistical errors. Use Mean, Median, Mode, Range, and Distribution in your explanation.',
        rubricChecklist: [
          'Defines Mean (sum/count), Median (50th-percentile middle value), and Mode (most frequent value) clearly.',
          'Explains how extreme upper-tail outliers ($35M+ NFL stars) pull the arithmetic mean ($2.2M) far above the median ($830,000) and mode.',
          'Explains that a 10-month median survival means 50% die within 10 months and 50% survive longer than 10 months.',
          'Introduces Range (gap from min to max) and Distribution (frequency across values) to show that the surviving 50% in a right-skewed distribution may live for decades (past age 80) and vary across hospitals.',
        ],
        modelExplanation:
          'Both halves of that statement misunderstand how skewed distributions behave. First, "average" can mean the mean (sum divided by count), median (middle value with half above and half below), or mode (most frequent value).',
      },
      {
        id: 'arq-ch10-feyn-02',
        conceptTitle: 'Executing the Two-Way Blind Audit & Omission Check',
        prompt:
          'A local newspaper editorial warns: "Our city parks are becoming a warzone! A recent survey at the downtown bus station found that 30 of 60 commuters know someone who was mugged in a park, and violent park incidents surged by 66% this month!" Apply both Blind Audit strategies and the Omission Check from Chapter 10 to dismantle this argument.',
        rubricChecklist: [
          'Applies Strategy 1 (Blind the statistics): states that proving parks are "becoming a warzone" requires longitudinal crime rates per park-visitor-hour compared to past years.',
          'Applies Strategy 2 (Blind the conclusion): shows that 30/60 bus-station respondents knowing someone mugged proves only that 50% of a non-random convenience sample at one bus station report an acquaintance mugged at some unspecified time/place (plus multiple people can know the same victim).',
          'Applies the Omission Check to the "+66% surge": explains that without absolute base numbers, a 66% increase could be an increase from 3 incidents to 5 (+2 incidents) and lacks seasonal/exposure denominators.',
        ],
        modelExplanation:
          'We can dismantle this editorial in three steps. First, using Strategy 1 (blinding ourselves to the statistics), what evidence is actually required to prove parks are "becoming a warzone"?',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'arq-ch10-unknowable-stats',
        label: 'Unknowable & Biased Statistics',
        category: 'data',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Quantitative claims about ambiguously defined, underreported, or private/illicit behaviors presented as precise facts despite really being educated guesses.',
        formulaOrRule: 'N_reported = N_true * P_def * P_detect * P_truth + Bias',
        whyItMatters:
          'Pierces the illusion of scientific precision around headlines on ADD prevalence, tax fraud, or illegal drug use.',
      },
      {
        id: 'arq-ch10-averages-distribution',
        label: 'Mean, Median, Mode, Range & Distribution',
        category: 'foundation',
        chapterNumber: 10,
        importance: 1,
        definition:
          'The three measures of central tendency (Exhibit 10-1) paired with the spread from min to max (range) and frequency curve (distribution).',
        formulaOrRule: 'Right skew (outliers): Mean ($2.2M) >> Median ($830K) >= Mode',
        whyItMatters:
          'Prevents advocates from exploiting skewed distributions via selective averages or hiding long survival tails behind a single median.',
      },
      {
        id: 'arq-ch10-measurement-error',
        label: 'Instrument & Procedural Measurement Error',
        category: 'evaluation',
        chapterNumber: 10,
        importance: 2,
        definition:
          'Inaccuracies in statistical evidence caused by environmental timing differences (Deflategate thermal drift) or uncalibrated primary and reference instruments (DUI devices).',
        formulaOrRule: 'PV = nRT thermal drift; Two-tier calibration chain verification',
        whyItMatters:
          'Demonstrates that a numerical readout has zero validity if the physical measurement protocol or calibration chain was compromised.',
      },
      {
        id: 'arq-ch10-concluding-proving-gap',
        label: 'Concluding One Thing, Proving Another (Two-Way Blind Audit)',
        category: 'evaluation',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Operationalization mismatch where the statistic proved by the data (P(Gadget | Theft) = 70%) differs from the verbal conclusion asserted (P(Theft | Ride) is high).',
        formulaOrRule: 'Strategy 1: Mask stats -> find needed data | Strategy 2: Mask claim -> derive warranted truth',
        whyItMatters:
          'Exposes the most common rhetorical trick in statistical arguments by separating raw numbers from verbal spin.',
      },
      {
        id: 'arq-ch10-omitting-information',
        label: 'Deceiving by Omission (Counts, Percentages & Comparisons)',
        category: 'data',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Distorting quantitative impact by reporting only relative percentages without base counts (+75% = 4 to 7), only raw counts without population denominators (54,000 / 300M = 0.02%), or omitting historical/exposure-hour baselines.',
        formulaOrRule: 'Always pair Relative % with Base Count X_0 and Raw Count N with Denominator/Exposure',
        whyItMatters:
          'Neutralizes small-base percentage inflation and large-population numerator alarmism.',
      },
    ],
    edges: [
      {
        source: 'arq-ch10-unknowable-stats',
        target: 'arq-ch10-measurement-error',
        relationship: 'part_of',
        explanation:
          'Definitional ambiguity, self-report lying, and physical instrument drift are complementary stages of the measurement pipeline that generates statistics.',
      },
      {
        source: 'arq-ch10-averages-distribution',
        target: 'arq-ch10-omitting-information',
        relationship: 'mitigates',
        explanation:
          'Reporting the full range and distribution alongside specify whether an average is the mean, median, or mode mitigates deceptive statistical omission.',
      },
      {
        source: 'arq-ch10-concluding-proving-gap',
        target: 'arq-ch10-omitting-information',
        relationship: 'evaluates',
        explanation:
          'The Two-Way Blind Audit immediately reveals what denominator, exposure rate, or historical comparison was omitted between the statistic and the conclusion.',
      },
      {
        source: 'arq-ch10-measurement-error',
        target: 'arq-ch10-concluding-proving-gap',
        relationship: 'prerequisite_for',
        explanation:
          'Verifying that the underlying physical or survey measurement is valid is prerequisite to evaluating what conclusion the resulting statistic can support.',
      },
      {
        source: 'arq-ch10-omitting-information',
        target: 'arq-ch10-concluding-proving-gap',
        relationship: 'part_of',
        explanation:
          'Omitting the base-rate denominator (such as total subway rides or hours spent at home) is the primary mechanism authors use to conclude one thing while proving another.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Verified 100% coverage of all 9 headings in manifest.json for Chapter 10 (pages 148–157), including the 1% unemployment bulletin, Page 149 Graph 1 vs.',
  },
};
