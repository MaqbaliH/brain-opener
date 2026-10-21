import type { ChapterMastery } from '../../../types/book';

export const rewireCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Autonomic Nervous System Regulation, Cortisol Allostasis, and Emotional Top-Down Control',
  subtitle: 'Prefrontal vs. Amygdala Hijack, Vagal Brake Modulation, Trauma Uncoupling, and Widening the Window of Tolerance',
  readingTimeMinutes: 8,
  sourceWordCount: 18184,
  executiveThesis:
    'Unresolved trauma, unconscious guilt, and chronic stress lock the autonomic nervous system into either sympathetic hyper-arousal (amygdala hijack) or dorsal-vagal shutdown ("watching the parade go by"). Restoring emotional top-down control requires engaging the vagal brake via respiratory pacing, uncoupling repressed self-hatred from childhood trauma scripts, and gradually widening the window of emotional tolerance through graded stress inoculation.',
  paradigmShift: {
    oldWay:
      'Self-loathing, trauma re-enactments, and passive withdrawal were viewed as untreatable personality defects or purely cognitive choices.',
    newWay:
      'They are dysregulated autonomic states and conditioned shame reflexes that can be recalibrated through bottom-up vagal regulation and top-down prefrontal exposure.',
    whyItChanged:
      'Polyvagal research and neuroimaging of trauma survivors proved that bottom-up respiratory and somatic regulation must restore prefrontal blood flow before cognitive reframing can work.',
  },
  customDiagrams: [
    {
      id: 'rw-ch03-svg1',
      title: 'Prefrontal Top-Down Braking vs. Amygdala Hijack & Vagal Pacing',
      subtitle: 'How physiological sighs and HRV pacing restore ventromedial prefrontal inhibition over the amygdala',
      bierutCaption:
        'Deploy the exhale-biased vagal brake to halt sympathetic cortisol cascades and bring the prefrontal cortex back online.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">AUTONOMIC REGULATION: AMYGDALA HIJACK VS. VAGAL-PREFRONTAL CONTROL</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Bottom-up respiratory vagal braking restores top-down vmPFC GABAergic inhibition of threat circuits</text>

  <!-- Left Column: Sympathetic Hijack -->
  <rect x="24" y="78" width="232" height="314" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="140" y="104" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="700">1. AMYGDALA HIJACK STATE</text>

  <rect x="42" y="120" width="196" height="76" rx="6" fill="#4c0519" stroke="#f43f5e" />
  <text x="140" y="142" text-anchor="middle" fill="#fda4af" font-size="10" font-weight="700">Basolateral Amygdala Surge</text>
  <text x="140" y="160" text-anchor="middle" fill="#fecdd3" font-size="8.5">Shame / trauma cue triggers</text>
  <text x="140" y="176" text-anchor="middle" fill="#fecdd3" font-size="8.5">HPA-axis cortisol &amp; adrenaline</text>

  <path d="M 140 196 L 140 222" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6 4" />

  <rect x="42" y="222" width="196" height="74" rx="6" fill="#0f172a" stroke="#f43f5e" />
  <text x="140" y="244" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="600">Prefrontal Offline</text>
  <text x="140" y="262" text-anchor="middle" fill="#94a3b8" font-size="8.5">Catecholamine flood impairs</text>
  <text x="140" y="278" text-anchor="middle" fill="#94a3b8" font-size="8.5">dlPFC working memory &amp; logic</text>

  <rect x="42" y="312" width="196" height="62" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="140" y="334" text-anchor="middle" fill="#fda4af" font-size="9.5" font-weight="600">Dorsal-Vagal Collapse</text>
  <text x="140" y="352" text-anchor="middle" fill="#94a3b8" font-size="8.5">Numb passivity / dissociation</text>

  <!-- Center Column: Somatic Vagal Intervention -->
  <path d="M 256 160 L 284 160" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />

  <rect x="284" y="78" width="232" height="314" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="104" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">2. BOTTOM-UP VAGAL BRAKE</text>

  <rect x="302" y="120" width="196" height="96" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="144" text-anchor="middle" fill="#e0f2fe" font-size="10.5" font-weight="700">Physiological Sigh &amp; HRV</text>
  <text x="400" y="164" text-anchor="middle" fill="#7dd3fc" font-size="9">• Double inhale + long slow exhale</text>
  <text x="400" y="180" text-anchor="middle" fill="#7dd3fc" font-size="9">• Baroreceptor stretch reflex</text>
  <text x="400" y="198" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-family="monospace">Vagus Nerve -> SA Node ACh</text>

  <path d="M 400 216 L 400 246" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <rect x="302" y="246" width="196" height="128" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="400" y="270" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">Autonomic Downshift</text>
  <text x="400" y="290" text-anchor="middle" fill="#cbd5e1" font-size="9">• Heart rate decelerates in &lt;30s</text>
  <text x="400" y="308" text-anchor="middle" fill="#cbd5e1" font-size="9">• Insula registers somatic safety</text>
  <text x="400" y="326" text-anchor="middle" fill="#cbd5e1" font-size="9">• Uncouples trauma flashback</text>
  <text x="400" y="352" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="600">Reopens Cortical Bandwidth</text>

  <!-- Right Column: Top-Down Integration -->
  <path d="M 516 235 L 544 235" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <rect x="544" y="78" width="232" height="314" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="660" y="104" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">3. TOP-DOWN PFC MASTERY</text>

  <rect x="562" y="120" width="196" height="106" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="660" y="144" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="700">vmPFC GABAergic Braking</text>
  <text x="660" y="164" text-anchor="middle" fill="#d1fae5" font-size="9">• Inhibits central amygdala</text>
  <text x="660" y="182" text-anchor="middle" fill="#d1fae5" font-size="9">• Separates past shame from</text>
  <text x="660" y="198" text-anchor="middle" fill="#d1fae5" font-size="9">present adult capability</text>

  <rect x="562" y="246" width="196" height="128" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="660" y="270" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Widened Tolerance Window</text>
  <text x="660" y="290" text-anchor="middle" fill="#cbd5e1" font-size="9">Graded stress inoculation</text>
  <text x="660" y="308" text-anchor="middle" fill="#cbd5e1" font-size="9">builds assertive agency without</text>
  <text x="660" y="324" text-anchor="middle" fill="#cbd5e1" font-size="9">flipping into rage or freeze</text>
  <text x="660" y="352" text-anchor="middle" fill="#34d399" font-size="8.5" font-family="monospace">Allostatic Resilience Locked</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Catecholamine Prefrontal Shutdown',
          explanation:
            'High norepinephrine and cortisol during an amygdala hijack silence prefrontal reasoning while amplifying subcortical rage or freeze reflexes.',
        },
        {
          step: '2',
          label: 'Exhale-Biased Vagal Brake',
          explanation:
            'Extending the exhale activates the vagus nerve to release acetylcholine onto the sinoatrial node, slowing heart rate within seconds.',
        },
        {
          step: '3',
          label: 'vmPFC Fear Extinction',
          explanation:
            'Once somatic arousal drops, the ventromedial prefrontal cortex inhibits the amygdala and rewrites conditioned trauma associations.',
        },
      ],
    },
    {
      id: 'rw-ch03-svg2',
      title: 'Widening the Window of Emotional Tolerance via Stress Inoculation',
      subtitle: 'Expanding the optimal ventral-vagal zone between sympathetic panic and dorsal-vagal passivity',
      bierutCaption:
        'Stretch your autonomic window of tolerance through graded exposure rather than shrinking your life into numbed avoidance.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">WINDOW OF EMOTIONAL TOLERANCE: ALLOSTATIC EXPANSION</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Transforming a brittle trauma/shame window into a wide, resilient executive operating zone</text>

  <!-- Top Band: Sympathetic Hyper-Arousal -->
  <rect x="40" y="76" width="720" height="78" rx="8" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5" />
  <text x="64" y="102" fill="#fda4af" font-size="11.5" font-weight="700">SYMPATHETIC HYPER-AROUSAL ZONE (FIGHT / FLIGHT / SELF-HARM IMPULSE)</text>
  <text x="64" y="122" fill="#fecdd3" font-size="9.5">Symptoms: Rage outbursts, panic, hypervigilance, "stress puppy" adrenaline addiction, impulsive self-sabotage</text>
  <text x="64" y="140" fill="#fb7185" font-size="9">Triggered when emotional load exceeds top boundary of tolerance window</text>

  <!-- Middle Band: Window of Tolerance -->
  <rect x="40" y="168" width="720" height="140" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2" />
  <text x="64" y="194" fill="#6ee7b7" font-size="12" font-weight="700">OPTIMAL VENTRAL-VAGAL WINDOW OF TOLERANCE (EXECUTIVE AGENCY)</text>

  <!-- Narrow vs Expanded Box Comparison -->
  <rect x="64" y="210" width="290" height="82" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
  <text x="209" y="232" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Before: Narrow Brittle Window</text>
  <text x="209" y="250" text-anchor="middle" fill="#cbd5e1" font-size="9">Unconscious guilt &amp; childhood trauma</text>
  <text x="209" y="266" text-anchor="middle" fill="#cbd5e1" font-size="9">cause minor criticism to trigger</text>
  <text x="209" y="282" text-anchor="middle" fill="#fbbf24" font-size="9">instant panic or shutdown</text>

  <path d="M 354 251 L 436 251" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 4" />
  <text x="395" y="240" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="700">GRADED</text>
  <text x="395" y="270" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="700">INOCULATION</text>

  <rect x="436" y="210" width="300" height="82" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="586" y="232" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">After: Widened Allostatic Window</text>
  <text x="586" y="250" text-anchor="middle" fill="#d1fae5" font-size="9">Vagal pacing + self-compassion +</text>
  <text x="586" y="266" text-anchor="middle" fill="#d1fae5" font-size="9">assertive boundary reps allow high</text>
  <text x="586" y="282" text-anchor="middle" fill="#34d399" font-size="9">challenge with calm PFC control</text>

  <!-- Bottom Band: Dorsal-Vagal Hypo-Arousal -->
  <rect x="40" y="322" width="720" height="74" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="64" y="346" fill="#cbd5e1" font-size="11.5" font-weight="700">DORSAL-VAGAL HYPO-AROUSAL ZONE ("WATCHING THE PARADE GO BY")</text>
  <text x="64" y="366" fill="#94a3b8" font-size="9.5">Symptoms: Learned helplessness, emotional numbing, dissociation, isolation, and chronic passivity</text>
  <text x="64" y="382" fill="#64748b" font-size="9">Triggered when threat feels inescapable or autonomy triggers overwhelming guilt</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Sympathetic Upper Breach',
          explanation:
            'When unbuffered stress exceeds the upper threshold, the nervous system flips into defensive rage, panic, or compulsive risk-taking.',
        },
        {
          step: '2',
          label: 'Dorsal-Vagal Lower Breach',
          explanation:
            'When autonomy or conflict triggers overwhelming unconscious guilt, the system collapses into passive helplessness and numbing.',
        },
        {
          step: '3',
          label: 'Stress Inoculation Expansion',
          explanation:
            'Voluntarily stepping into manageable emotional challenges while pacing breath expands the central window of prefrontal agency.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'rw-ch03-mm1',
      name: 'Unconscious Guilt Decoupling',
      tagline: 'Feelings are involuntary biological reflexes; only actions carry moral weight',
      naiveIntuition:
        'Experiencing forbidden feelings like anger at a sick partner, envy of a friend, or childhood resentment makes me a bad person who deserves punishment.',
      firstPrinciplesReality:
        'Emotions are hardwired chemical reflexes in the automatic self; repressing them leaves unconscious guilt intact, which drives covert self-punishment and sabotage.',
      howToApply:
        'Allow yourself to consciously acknowledge and name every raw emotion without judgment while reserving ethical discipline strictly for your chosen actions.',
    },
    {
      id: 'rw-ch03-mm2',
      name: 'The Vagal Brake Lever',
      tagline: 'You cannot argue with an amygdala hijack until you slow the sinoatrial node',
      naiveIntuition:
        'When panicked or enraged, you should immediately force yourself to logic your way out of the emotion.',
      firstPrinciplesReality:
        'High sympathetic catecholamines take the prefrontal cortex offline; bottom-up exhale-biased breathing is required first to engage the vagus nerve and restore cortical blood flow.',
      howToApply:
        'Execute two physiological sighs (double inhale through the nose, extended slow exhale through the mouth) before attempting any difficult conversation or cognitive reappraisal.',
    },
    {
      id: 'rw-ch03-mm3',
      name: 'Anti-Helplessness Agency ("Stepping Into the Parade")',
      tagline: 'Learned passivity was an adaptive childhood shield that becomes an adult prison',
      naiveIntuition:
        'Playing it safe, hiding my talents, and never asserting my needs keeps me protected from rejection and conflict.',
      firstPrinciplesReality:
        'Chronic passivity ("watching the parade go by") starves the dopaminergic reward system and guarantees loneliness, resentment, and depressive burnout.',
      howToApply:
        'Break dorsal-vagal freeze by executing one small, visible act of assertive autonomy each day, proving to your nervous system that you are no longer a helpless child.',
    },
  ],
  deepSections: [
    {
      id: 'rw-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Prefrontal vs. Amygdala Hijack and Vagal Tone Modulation',
      subtitle: 'Using physiological sighs and HRV pacing to restore top-down GABAergic inhibition',
      coreMechanism:
        'Under acute emotional threat or shame, the basolateral amygdala triggers a rapid sympathetic cascade through the hypothalamus and locus coeruleus, flooding the brain with norepinephrine and cortisol. This chemical surge strengthens subcortical defensive reflexes while taking the dorsolateral and ventromedial prefrontal cortex (dlPFC/vmPFC) offline—a state known as an amygdala hijack.\n\nBecause neural projections from the amygdala to the cortex are stronger than cortical projections back down, you cannot think your way out of a full hijack using verbal logic alone. Instead, you must pull the bottom-up vagal brake: executing physiological sighs or 6-breaths-per-minute Heart Rate Variability (HRV) pacing stretches pulmonary baroreceptors and stimulates the vagus nerve to release acetylcholine onto the heart’s sinoatrial node. Within 30 seconds, heart rate decelerates, signaling safety through the insula so the vmPFC can resume GABAergic inhibition of the amygdala.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Somatic Hijack Detection',
          detail: 'Notice early sympathetic markers (jaw clenching, shallow chest breathing, heart rate >100 bpm).',
        },
        {
          step: '2',
          title: 'Physiological Sigh Execution',
          detail: 'Perform two stacked nasal inhales followed by a prolonged, complete mouth exhale for three cycles.',
        },
        {
          step: '3',
          title: 'vmPFC Re-Engagement',
          detail: 'Once heart rate drops and prefrontal bandwidth returns, articulate a measured, assertive response.',
        },
      ],
      keyTakeaways: [
        'Bottom-up respiratory vagal braking is the fastest mechanical override for a sympathetic amygdala hijack.',
        'High resting Heart Rate Variability (HRV) reflects strong vagal tone and superior prefrontal emotional regulation.',
      ],
      commonPitfalls: [
        'Attempting to resolve a high-stakes relationship or work conflict while your heart rate exceeds 100 bpm.',
        'Taking deep rapid inhales without extending the exhale, which actually accelerates heart rate via sympathetic coupling.',
      ],
      figures: [],
    },
    {
      id: 'rw-ch03-sec2',
      sectionNumber: '3.2',
      title: 'Unconscious Guilt, Self-Hate, and Trauma Re-Enactment Loops',
      subtitle: 'How repressed childhood shame and survivor guilt drive covert self-punishment',
      coreMechanism:
        'One of the most destructive mechanisms of the divided brain is unconscious guilt: banishing an unacceptable emotion—such as rage at a neglectful parent or resentment toward a dependent partner—out of conscious awareness while retaining the crushing guilt and shame associated with it. Abused or emotionally neglected children routinely blame themselves ("I am defective and unlovable") to preserve the illusion that their caretakers are safe.\n\nIn adulthood, this unexamined self-hate operates like an autoimmune disease of the psyche. It drives people to sabotage promotions on the brink of victory, tolerate abusive partners through projective identification, or oscillate between perfectionistic overwork and self-harm. Healing requires dragging unconscious shame into the light, grieving childhood losses honestly, and separating involuntary feelings from moral character.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Uncover the Hidden Crime',
          detail: 'Identify the repressed anger, autonomy wish, or childhood trauma driving your feeling of unworthiness.',
        },
        {
          step: '2',
          title: 'Decouple Feeling from Guilt',
          detail: 'Validate that emotions are involuntary biological signals, removing the demand for self-punishment.',
        },
        {
          step: '3',
          title: 'behavioral Self-Compassion',
          detail: 'Replace self-attacking inner dialogue with dignified boundary-setting and deliberate self-care.',
        },
      ],
      keyTakeaways: [
        'Whereas guilt focuses on a specific reparable action, shame attacks the entire core identity as loathsome.',
        'Children internalize parental neglect as personal defectiveness because facing parental incompetence is too terrifying.',
      ],
      commonPitfalls: [
        'Staying in a "Nice Guy" self-sacrificing role that breeds volcanic unconscious resentment and career self-sabotage.',
        'Confusing trauma dissociation ("it happened long ago and doesn’t affect me") with genuine emotional integration.',
      ],
      figures: [],
    },
    {
      id: 'rw-ch03-sec3',
      sectionNumber: '3.3',
      title: 'Stress Inoculation & Widening the Window of Emotional Tolerance',
      subtitle: 'Overcoming learned helplessness and "Watching the Parade Go By"',
      coreMechanism:
        'When a child or adult repeatedly experiences inescapable threat or punishment for asserting autonomy, the nervous system defaults to dorsal-vagal hypo-arousal—Martin Seligman’s learned helplessness, or "watching the parade go by." Even after the cage door opens in adulthood, the automatic self remains frozen in passivity, procrastination, and isolation to avoid triggering any emotional turbulence.\n\nExpanding a shrunken window of emotional tolerance requires graded stress inoculation—the same neurobiological training used by elite astronauts and special operators. By voluntarily stepping into bounded, high-value discomfort (speaking up in a meeting, setting a firm boundary, or tolerating a five-minute wave of grief without numbing) while maintaining calm vagal breathing, the prefrontal cortex teaches the amygdala that emotional intensity is survivable.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit Avoidance Boundaries',
          detail: 'List the specific conversations, risks, or feelings you automatically sidestep to stay numb.',
        },
        {
          step: '2',
          title: 'Graded Micro-Exposure',
          detail: 'Execute one low-to-moderate assertive action daily while holding a steady exhale-biased breath cadence.',
        },
        {
          step: '3',
          title: 'Consolidate Mastery Traces',
          detail: 'Log the survival and positive outcome of each exposure to widen your baseline window of tolerance.',
        },
      ],
      keyTakeaways: [
        'Courage is not the absence of amygdala fear firing; it is trained prefrontal persistence alongside fear.',
        'Playing it safe by suppressing all spontaneity and emotion produces an empty, depressive life.',
      ],
      commonPitfalls: [
        'Flooding yourself with an overwhelming confrontation before building baseline vagal regulation skills.',
        'Waiting until you "feel confident" to act, when confidence is the neurochemical byproduct of repeated action.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Autonomic States & Emotional Regulation Matrix',
      description: 'Comparing Sympathetic Hyper-Arousal, Dorsal-Vagal Shutdown, and Ventral-Vagal Executive Mastery across physiology, cognition, and intervention.',
      headers: ['Autonomic State', 'Dominant Neural Circuit', 'Physiological Signature', 'Behavioral Symptom', 'Targeted Reset Protocol'],
      rows: [
        ['Sympathetic Hyper-Arousal', 'Basolateral Amygdala + HPA Axis', 'High HR, shallow breath, cortisol surge', 'Rage, panic, impulsive self-harm, thrill-seeking', 'Physiological sighs (double inhale + long exhale) & 10-min cooldown'],
        ['Dorsal-Vagal Shutdown', 'Dorsal Motor Nucleus of Vagus', 'Low HR, physical heaviness, numbing', 'Learned helplessness, passivity, dissociation', 'Up-regulating movement, posture shift, and 5-min micro-agency task'],
        ['Unconscious Shame Loop', 'Insula + Default Mode + Amygdala', 'Chronic muscle tension & gut distress', 'Self-sabotage near success, people-pleasing', 'Decouple involuntary emotion from moral guilt; practice self-compassion'],
        ['Ventral-Vagal Mastery', 'vmPFC + dlPFC + Myelinated Vagus', 'High HRV, calm alert heart rate', 'Assertive communication & resilient focus', 'Maintain via daily HRV pacing and graded stress inoculation'],
      ],
      verdictRule:
        'Match your regulation tool to your autonomic state: down-regulate sympathetic panic with exhale-biased breathing, and up-regulate dorsal-vagal passivity with immediate physical movement and bounded assertive action.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'rw-ch03-scen1',
      title: 'Breaking "Nice-Guy" Autonomy Sabotage Driven by Unconscious Guilt',
      roleAndContext: 'Senior systems engineer who repeatedly botches final interviews for leadership roles out of unconscious loyalty to a chronically depressed parent.',
      symptomOrFailure: 'Whenever a career leap approaches, the engineer experiences unexplained panic and insomnia, then underperforms or withdraws his application.',
      naiveFixAndWhyItFails: 'Practicing standard mock-interview answers fails because the automatic self equates personal triumph with abandoning and hurting a fragile caretaker.',
      firstPrinciplesSolution: 'Expose the survivor-guilt paradigm explicitly, separate adult professional thriving from childhood caretaking, and use pre-interview physiological sighs to keep the vmPFC online during evaluation.',
      measurableOutcome: 'Completed the principal leadership loop with calm autonomic metrics and accepted an autonomous director role.',
    },
    {
      id: 'rw-ch03-scen2',
      title: 'Reversing Dorsal-Vagal Passivity ("Watching the Parade Go By")',
      roleAndContext: 'Mid-career designer who has spent six years in an underpaid, stagnant role while avoiding social and creative risks.',
      symptomOrFailure: 'Feels chronically numb, exhausted, and hopeless each evening, escaping into passive television marathons to avoid feeling regret.',
      naiveFixAndWhyItFails: 'Setting a massive goal to "launch a new agency next month" triggers immediate dorsal-vagal overwhelm and deeper shutdown.',
      firstPrinciplesSolution: 'Implement graded stress inoculation: 15 minutes of brisk morning movement followed by one daily micro-assertive action (pitching one idea in standup or sending one portfolio outreach) paired with compassionate self-talk.',
      measurableOutcome: 'Shipped a redesigned portfolio in 6 weeks and transitioned to a senior product design role with a 40% compensation increase.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'rw-ch03-q1',
        scenarioPrompt:
          'During a heated performance review, your heart rate spikes to 115 bpm, your face flushes, and you feel an overwhelming urge to either lash out at your manager or quit on the spot. Why is attempting complex verbal problem-solving in that exact second neurobiologically ineffective, and what should you do first?',
        options: [
          {
            label: 'A',
            text: 'High catecholamines during an amygdala hijack suppress dorsolateral prefrontal working memory; you must first engage the bottom-up vagal brake via extended exhales to restore cortical blood flow.',
            isCorrect: true,
            explanation: 'Pulling the vagal brake via slow, exhale-biased breathing releases acetylcholine onto the sinoatrial node, lowering heart rate and allowing the vmPFC/dlPFC to come back online.',
          },
          {
            label: 'B',
            text: 'You should inhale as rapidly and shallowly as possible for two minutes to hyper-oxygenate the amygdala.',
            isCorrect: false,
            explanation: 'Rapid inhalation activates sympathetic arousal and worsens panic.',
          },
          {
            label: 'C',
            text: 'Verbal logic always overrides the amygdala instantly because cortical-to-amygdala projections are ten times stronger than amygdala-to-cortical projections.',
            isCorrect: false,
            explanation: 'Bottom-up amygdala projections to the cortex are anatomically denser and faster than top-down projections.',
          },
          {
            label: 'D',
            text: 'Suppressing all facial expressions permanently deletes cortisol from the bloodstream.',
            isCorrect: false,
            explanation: 'Expressive suppression actually increases sympathetic cardiovascular strain.',
          },
        ],
      },
      {
        id: 'rw-ch03-q2',
        scenarioPrompt:
          'Why do children who experience parental neglect or abuse frequently grow into adults plagued by deep self-hatred rather than simple objective anger at their parents?',
        options: [
          {
            label: 'A',
            text: 'Because admitting that one’s caretakers are unsafe or unloving is terrifying to a dependent child, the child blames themselves ("I am bad/unworthy") and represses their rage into unconscious guilt.',
            isCorrect: true,
            explanation: 'Self-blame preserves the vital illusion that the adult world is orderly and protective, but plants a seed of core shame and unconscious guilt that drives adult self-sabotage.',
          },
          {
            label: 'B',
            text: 'Children lack an amygdala until age eighteen and therefore cannot feel fear or anger.',
            isCorrect: false,
            explanation: 'The amygdala is functional at birth, long before the prefrontal cortex matures.',
          },
          {
            label: 'C',
            text: 'Self-hatred provides an evolutionary advantage by increasing bone density.',
            isCorrect: false,
            explanation: 'Chronic shame elevates inflammatory cytokines and cortisol, harming physical health.',
          },
          {
            label: 'D',
            text: 'Repressed anger automatically evaporates during adolescence without leaving any neural trace.',
            isCorrect: false,
            explanation: 'Repressed emotions remain active in the automatic self and fuel covert self-punishment.',
          },
        ],
      },
      {
        id: 'rw-ch03-q3',
        scenarioPrompt:
          'What is the critical neurobiological distinction between "guilt" and "shame," and how does unconscious guilt drive self-destructive behavior?',
        options: [
          {
            label: 'A',
            text: 'Guilt evaluates a specific action ("I made a mistake") that can be repaired, whereas shame attacks the entire self ("I am loathsome"); when unacceptable feelings are repressed, unconscious guilt demands covert self-punishment.',
            isCorrect: true,
            explanation: 'Because people feel guilty for involuntary thoughts or feelings they have banished from consciousness, they sabotage their own success or relationships to pay penance.',
          },
          {
            label: 'B',
            text: 'Shame is always healthy and productive, whereas guilt has no social utility.',
            isCorrect: false,
            explanation: 'Healthy, conscious guilt supports fair play and amends, whereas pervasive shame drives hiding and self-harm.',
          },
          {
            label: 'C',
            text: 'If an unacceptable desire is repressed out of conscious awareness, it is impossible to feel guilty about it.',
            isCorrect: false,
            explanation: 'One of the mind’s most common traps is experiencing crushing guilt over a desire or anger that remains completely unconscious.',
          },
          {
            label: 'D',
            text: 'Emotions themselves are moral crimes that must be prevented from firing in the limbic system.',
            isCorrect: false,
            explanation: 'Emotions are involuntary biological reflexes; only our behavioral choices carry moral responsibility.',
          },
        ],
      },
      {
        id: 'rw-ch03-q4',
        scenarioPrompt:
          'In Martin Seligman’s learned helplessness paradigm and the clinical syndrome of "Watching the Parade Go By," why do individuals remain passive even after they have the adult freedom to improve their lives?',
        options: [
          {
            label: 'A',
            text: 'Early experiences of inescapable control or trauma conditioned the automatic self to believe agency is futile, locking them into dorsal-vagal passivity until graded exposure rebuilds prefrontal mastery.',
            isCorrect: true,
            explanation: 'Just as dogs subjected to inescapable shocks fail to jump the barrier when it is lowered, humans conditioned into helplessness require small, guaranteed-win actions to rewire agency.',
          },
          {
            label: 'B',
            text: 'Passive individuals have zero desires, zero regrets, and maximum dopamine receptor density.',
            isCorrect: false,
            explanation: 'Beneath passivity lies painful regret, resentment, and depleted reward sensitivity.',
          },
          {
            label: 'C',
            text: 'Waiting for a sudden bolt of inspiration is the most reliable way to exit learned helplessness.',
            isCorrect: false,
            explanation: 'Behavioral activation must precede motivation to break dorsal-vagal inertia.',
          },
          {
            label: 'D',
            text: 'Special operators and astronauts are born genetically fearless and never need training to manage fear.',
            isCorrect: false,
            explanation: 'Elite performers spend 10–15 years of graded stress inoculation learning to execute while afraid.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'rw-ch03-fc1',
        category: 'architecture',
        front: 'What happens in the brain during an Amygdala Hijack?',
        back: 'The basolateral amygdala triggers a sympathetic surge of norepinephrine and cortisol that amplifies fight-or-flight reflexes while suppressing prefrontal executive reasoning.',
        mentalHook: 'Amygdala up -> Prefrontal offline.',
      },
      {
        id: 'rw-ch03-fc2',
        category: 'optimization',
        front: 'How does an exhale-biased Physiological Sigh calm the autonomic nervous system?',
        back: 'Two nasal inhales followed by a long slow mouth exhale stimulate pulmonary stretch receptors and the vagus nerve, releasing acetylcholine to slow the heart’s sinoatrial node.',
        mentalHook: 'Long exhale = Pulling the vagal brake.',
      },
      {
        id: 'rw-ch03-fc3',
        category: 'foundation',
        front: 'Why is blaming yourself for having an unacceptable emotion neurobiologically irrational?',
        back: 'Emotions are involuntary chemical reflexes generated in the subcortical automatic self; you only have conscious moral control over how you act on them.',
        mentalHook: 'Feelings are reflexes; actions are choices.',
      },
      {
        id: 'rw-ch03-fc4',
        category: 'evaluation',
        front: 'How does unconscious guilt sabotage people right as they approach a major life goal?',
        back: 'If the automatic self harbors unacknowledged shame or survivor guilt, it views success as undeserved and triggers a last-minute error to restore punishment equilibrium.',
        mentalHook: 'Unconscious guilt treats success as a crime requiring a penalty.',
      },
      {
        id: 'rw-ch03-fc5',
        category: 'adaptation',
        front: 'What is "Learned Helplessness" ("Watching the Parade Go By")?',
        back: 'A conditioned dorsal-vagal state where past inescapable stress convinces the automatic self that effort is pointless, resulting in chronic passivity and procrastination.',
        mentalHook: 'The cage door is open, but the old script says you cannot jump.',
      },
      {
        id: 'rw-ch03-fc6',
        category: 'security',
        front: 'How does Graded Stress Inoculation widen the Window of Emotional Tolerance?',
        back: 'By voluntarily facing small, manageable doses of fear or assertiveness while maintaining vagal breath control, the vmPFC builds stronger inhibitory wiring over the amygdala.',
        mentalHook: 'Micro-doses of voluntary discomfort build macro emotional armor.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'rw-ch03-feyn1',
        conceptTitle: 'Top-Down vs. Bottom-Up Regulation of an Amygdala Hijack',
        prompt:
          'Explain why telling an enraged or panicking person to "calm down and be rational" fails neurobiologically, and walk through the exact bottom-up and top-down sequence required to restore executive control.',
        rubricChecklist: [
          'Explains how amygdala-driven norepinephrine and cortisol flood the cortex and impair dlPFC rational processing.',
          'Identifies the anatomical asymmetry where bottom-up threat signals overpower top-down verbal reasoning during peak arousal.',
          'Describes the mechanical action of the vagal brake via physiological sighs (double inhale + extended slow exhale).',
          'Shows how slowing the sinoatrial node signals safety via the insula, allowing the vmPFC to inhibit the amygdala with GABA.',
        ],
        modelExplanation:
          'When someone is in an amygdala hijack, their brain is flooded with adrenaline and cortisol that literally shut down blood flow and working memory in the rational prefrontal cortex. Asking them to "be logical" is like asking a computer with an overheated, throttled CPU to run a heavy simulation. Instead, you must work from the bottom up first: performing two physiological sighs—a double inhale followed by a long, slow exhale—triggers the vagus nerve to release acetylcholine onto the heart’s pacemaker. Within 30 seconds, the heart slows, the insula tells the brain the body is safe, and the ventromedial prefrontal cortex comes back online to calm the amygdala.',
      },
      {
        id: 'rw-ch03-feyn2',
        conceptTitle: 'Uncoupling Unconscious Guilt and Childhood Trauma Scripts',
        prompt:
          'Explain how a child raised by overwhelmed or abusive parents develops "unconscious guilt," and how that hidden mechanism causes adult self-sabotage and passivity decades later.',
        rubricChecklist: [
          'Explains why a dependent child internalizes blame ("I am bad") rather than facing the terrifying reality that their caretakers are unsafe.',
          'Defines unconscious guilt: repressing forbidden anger or autonomy wishes out of awareness while still feeling the guilt.',
          'Contrasts actionable guilt ("I made a mistake") against core identity shame ("I am defective").',
          'Describes how to break the loop by validating involuntary emotions, grieving the past, and practicing graded assertive actions.',
        ],
        modelExplanation:
          'For a young child, believing that your parents are incompetent or dangerous is terrifying because your survival depends on them. To feel safe, the child’s automatic self invents a protective lie: "Mom and Dad are good; I am just defective and unlovable." At the same time, the child represses their natural anger at being mistreated. Even though the anger is hidden in the unconscious, the brain still feels crushing guilt over it. Decades later, whenever that adult gets close to career success or real intimacy, unconscious guilt whispers that they don’t deserve it—triggering self-sabotage or passive withdrawal until they consciously grieve the childhood wound and separate feelings from guilt.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'rw-amygdala-hijack',
        label: 'Amygdala Sympathetic Hijack',
        category: 'security',
        chapterNumber: 3,
        importance: 1,
        definition: 'Subcortical threat surge where high norepinephrine and cortisol disable prefrontal working memory and trigger reflexive fight-or-flight.',
        whyItMatters: 'Explains why rational willpower collapses during acute emotional distress or shame.',
      },
      {
        id: 'rw-vagal-brake',
        label: 'Vagal Brake & HRV Pacing',
        category: 'optimization',
        chapterNumber: 3,
        importance: 1,
        definition: 'Parasympathetic vagus nerve activation via extended exhales that releases acetylcholine to decelerate heart rate and calm visceral arousal.',
        whyItMatters: 'Provides the fastest bottom-up lever to reopen prefrontal executive bandwidth.',
      },
      {
        id: 'rw-vmpfc-inhibition',
        label: 'vmPFC GABAergic Inhibition',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition: 'Top-down neural pathway from the ventromedial prefrontal cortex that suppresses central amygdala fear and rage outputs.',
        whyItMatters: 'Serves as the structural brake that consolidates fear extinction and emotional resilience.',
      },
      {
        id: 'rw-unconscious-guilt',
        label: 'Unconscious Guilt & Core Shame',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Persistent self-punishing affect retained in the automatic self after forbidden anger, trauma, or autonomy wishes are repressed.',
        whyItMatters: 'Drives covert self-sabotage on the brink of success and keeps people trapped in abusive dynamics.',
      },
      {
        id: 'rw-learned-helplessness',
        label: 'Dorsal-Vagal Learned Helplessness',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Conditioned passivity and numbing ("watching the parade go by") resulting from prior inescapable stress or punished autonomy.',
        whyItMatters: 'Prevents capable adults from initiating action even after external barriers are gone.',
      },
      {
        id: 'rw-window-of-tolerance',
        label: 'Window of Emotional Tolerance',
        category: 'foundation',
        chapterNumber: 3,
        importance: 3,
        definition: 'Optimal autonomic arousal band within which a person can experience intense affect while maintaining prefrontal reasoning.',
        whyItMatters: 'Widening this window via graded stress inoculation immunizes against both panic and freeze.',
      },
    ],
    edges: [
      {
        source: 'rw-vagal-brake',
        target: 'rw-amygdala-hijack',
        relationship: 'mitigates',
        explanation: 'Exhale-biased vagal braking slows heart rate and halts the sympathetic cascade of an amygdala hijack.',
      },
      {
        source: 'rw-vagal-brake',
        target: 'rw-vmpfc-inhibition',
        relationship: 'prerequisite_for',
        explanation: 'Bottom-up vagal calming restores the somatic safety required for the vmPFC to inhibit the amygdala.',
      },
      {
        source: 'rw-vmpfc-inhibition',
        target: 'rw-window-of-tolerance',
        relationship: 'optimizes',
        explanation: 'Stronger vmPFC-to-amygdala connectivity widens the allostatic window of emotional tolerance.',
      },
      {
        source: 'rw-unconscious-guilt',
        target: 'rw-amygdala-hijack',
        relationship: 'prerequisite_for',
        explanation: 'Unexamined core shame and guilt sensitize the amygdala to fire hair-trigger defensive hijacks.',
      },
      {
        source: 'rw-window-of-tolerance',
        target: 'rw-learned-helplessness',
        relationship: 'mitigates',
        explanation: 'Expanding the window of tolerance through graded micro-agency dissolves dorsal-vagal passivity.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: 'Verified 100% coverage of Amygdala Hijack, Vagal Brake respiration, Unconscious Guilt/Shame, Trauma re-enactment, and Learned Helplessness.',
  },
};

export const rewireCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Dopamine Reward Prediction Errors, Glymphatic Sleep Consolidation, and Somatic Anchors',
  subtitle: 'Tonic vs. Phasic Dopamine Baselines, Hedonic Treadmill Defenses, Slow-Wave Dendritic Cementing, and Exercise Neurochemistry',
  readingTimeMinutes: 8,
  sourceWordCount: 15376,
  executiveThesis:
    'Chronic modern stress, ultraprocessed stimulation, and addictive substances hijack mesolimbic dopamine Reward Prediction Errors—spiking phasic dopamine while crashing tonic baselines and down-regulating joy receptors into anhedonic burnout. Reclaiming sustainable drive and emotional equilibrium requires replacing cheap high-spike hits with effort-first reward schedules, slow-wave and REM sleep consolidation, and aerobic BDNF neurogenesis.',
  paradigmShift: {
    oldWay:
      'Burnout, addiction, and depression were treated as isolated chemical imbalances disconnected from daily stimulation habits, sleep architecture, and physical movement.',
    newWay:
      'Cheap dopaminergic spikes and chronic cortisol erode striatal receptors and hippocampal volume, whereas effortful action, deep sleep, and aerobic exercise physically regenerate them.',
    whyItChanged:
      'Neuroimaging of dopamine receptor down-regulation, hedonic adaptation, and sleep-dependent dendritic spine consolidation proved that lifestyle inputs directly govern baseline neurochemistry.',
  },
  customDiagrams: [
    {
      id: 'rw-ch04-svg1',
      title: 'Tonic vs. Phasic Dopamine Baselines & Reward Prediction Error (RPE)',
      subtitle: 'Why cheap high-spike stimulation crashes tonic drive below baseline and down-regulates D2 receptors',
      bierutCaption:
        'Protect your tonic dopamine baseline by tying rewards to effortful execution rather than cheap, unworked-for stimulation spikes.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">DOPAMINE ALLOSTASIS: TONIC BASELINE VS. PHASIC SPIKE-AND-CRASH</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">How artificial supranormal peaks trigger opponent-process troughs and D2 receptor down-regulation</text>

  <!-- Left Graph: Cheap High-Spike Addiction Loop -->
  <rect x="24" y="78" width="364" height="314" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="206" y="104" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="700">1. CHEAP SUPRANORMAL SPIKE (HEDONIC TRAP)</text>
  <text x="206" y="122" text-anchor="middle" fill="#94a3b8" font-size="9">Alcohol, drugs, gambling, doom-scrolling, binge sugar</text>

  <!-- Baseline Line -->
  <line x1="48" y1="220" x2="364" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="54" y="212" fill="#94a3b8" font-size="8.5">Normal Tonic Baseline</text>

  <!-- Spike & Deep Trough Curve -->
  <path d="M 48 220 L 95 220 L 130 135 L 175 295 L 250 265 L 360 255" fill="none" stroke="#f43f5e" stroke-width="3" />
  <path d="M 130 135 L 175 295" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6 4" />

  <text x="130" y="126" text-anchor="middle" fill="#fda4af" font-size="9" font-weight="700">Phasic Flood</text>
  <text x="185" y="312" text-anchor="middle" fill="#fb7185" font-size="9" font-weight="700">Anhedonic Crash (Below Baseline)</text>

  <rect x="44" y="328" width="324" height="48" rx="6" fill="#4c0519" stroke="#f43f5e" />
  <text x="206" y="348" text-anchor="middle" fill="#fecdd3" font-size="9" font-weight="600">Tolerance &amp; Receptor Down-Regulation</text>
  <text x="206" y="364" text-anchor="middle" fill="#fda4af" font-size="8.5">Postsynaptic D2 receptors retract; ordinary joys feel flat</text>

  <!-- Right Graph: Effort-First Sustainable Dopamine -->
  <rect x="412" y="78" width="364" height="314" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="594" y="104" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. EFFORT-ANCHORED DOPAMINE (MASTERY LOOP)</text>
  <text x="594" y="122" text-anchor="middle" fill="#94a3b8" font-size="9">Aerobic exercise, craft mastery, cold/friction, deep social bonds</text>

  <!-- Baseline Line -->
  <line x1="436" y1="220" x2="752" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="442" y="234" fill="#94a3b8" font-size="8.5">Initial Tonic Baseline</text>

  <!-- Effort Dip then Sustained Elevation -->
  <path d="M 436 220 L 480 238 L 540 175 L 640 185 L 748 190" fill="none" stroke="#10b981" stroke-width="3" />
  <path d="M 480 238 L 540 175" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <text x="485" y="254" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Initial Effort Friction</text>
  <text x="615" y="164" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">Elevated Tonic Drive &amp; Mood</text>

  <rect x="432" y="328" width="324" height="48" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="594" y="348" text-anchor="middle" fill="#a7f3d0" font-size="9" font-weight="600">BDNF + Receptor Regeneration</text>
  <text x="594" y="364" text-anchor="middle" fill="#6ee7b7" font-size="8.5">Sustains motivation, sleep quality, and joy sensitivity</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Phasic Spike & Opponent Trough',
          explanation:
            'Unworked-for supranormal rewards trigger a massive phasic dopamine spike followed immediately by a below-baseline tonic drop that registers as craving and dysphoria.',
        },
        {
          step: '2',
          label: 'Postsynaptic Receptor Retraction',
          explanation:
            'Repeated chemical or behavioral flooding forces neurons to internalize D2 receptors in self-defense, burning out capacity for everyday pleasure.',
        },
        {
          step: '3',
          label: 'Effort-First Baseline Elevation',
          explanation:
            'Engaging in effortful exercise and mastery tasks first raises tonic dopamine smoothly without triggering an opponent-process crash.',
        },
      ],
    },
    {
      id: 'rw-ch04-svg2',
      title: 'Two-Stage Plasticity: Daytime Triggering vs. Nocturnal Sleep Consolidation',
      subtitle: 'How Slow-Wave Sleep (SWS) clears glymphatic waste and REM sleep cements new dendritic spines',
      bierutCaption:
        'Daytime practice only tags synapses for change; actual physical rewiring and glymphatic toxin clearance happen during deep and REM sleep.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">NOCTURNAL NEUROPLASTIC CONSOLIDATION &amp; GLYMPHATIC CLEARANCE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Why sleep deprivation aborts habit rewiring and locks the brain into depressive cortisol toxicity</text>

  <!-- Stage 1: Wakeful Tagging -->
  <rect x="24" y="82" width="232" height="306" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="140" y="108" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">1. DAYTIME SYNAPTIC TAGGING</text>
  <rect x="42" y="126" width="196" height="92" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="140" y="150" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Focused Practice + Exercise</text>
  <text x="140" y="170" text-anchor="middle" fill="#cbd5e1" font-size="9">• Acetylcholine &amp; norepinephrine</text>
  <text x="140" y="186" text-anchor="middle" fill="#cbd5e1" font-size="9">mark active synapses</text>
  <text x="140" y="202" text-anchor="middle" fill="#fbbf24" font-size="8.5">• Aerobic workout releases BDNF</text>

  <rect x="42" y="236" width="196" height="132" rx="6" fill="#0f172a" stroke="#64748b" />
  <text x="140" y="260" text-anchor="middle" fill="#e2e8f0" font-size="10" font-weight="600">Metabolic Byproduct Load</text>
  <text x="140" y="280" text-anchor="middle" fill="#94a3b8" font-size="9">Wakeful firing accumulates</text>
  <text x="140" y="296" text-anchor="middle" fill="#94a3b8" font-size="9">adenosine, beta-amyloid, and</text>
  <text x="140" y="312" text-anchor="middle" fill="#94a3b8" font-size="9">tau proteins across cortex</text>
  <text x="140" y="344" text-anchor="middle" fill="#f87171" font-size="8.5">Fragile trace until sleep</text>

  <path d="M 256 235 L 284 235" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Stage 2: Slow-Wave Sleep (SWS) -->
  <rect x="284" y="82" width="232" height="306" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="108" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">2. SLOW-WAVE DEEP SLEEP</text>
  <rect x="302" y="126" width="196" height="110" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="150" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">Glymphatic Wash Cycle</text>
  <text x="400" y="170" text-anchor="middle" fill="#7dd3fc" font-size="9">• Glial cells shrink by ~60%</text>
  <text x="400" y="186" text-anchor="middle" fill="#7dd3fc" font-size="9">• CSF flushes metabolic waste</text>
  <text x="400" y="202" text-anchor="middle" fill="#7dd3fc" font-size="9">• Cortisol drops to 24h nadir</text>
  <text x="400" y="222" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-family="monospace">0.5–4 Hz Delta Oscillations</text>

  <rect x="302" y="252" width="196" height="116" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="400" y="276" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="600">Hippocampal-Cortical Replay</text>
  <text x="400" y="296" text-anchor="middle" fill="#cbd5e1" font-size="9">Sharp-wave ripples transfer</text>
  <text x="400" y="312" text-anchor="middle" fill="#cbd5e1" font-size="9">tagged daytime learning into</text>
  <text x="400" y="328" text-anchor="middle" fill="#cbd5e1" font-size="9">long-term neocortical storage</text>

  <path d="M 516 235 L 544 235" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Stage 3: REM Sleep Cementing -->
  <rect x="544" y="82" width="232" height="306" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="660" y="108" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">3. REM DENDRITIC CEMENTING</text>
  <rect x="562" y="126" width="196" height="110" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
  <text x="660" y="150" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Spine Stabilization &amp; Pruning</text>
  <text x="660" y="170" text-anchor="middle" fill="#d1fae5" font-size="9">• Cements newly formed spines</text>
  <text x="660" y="186" text-anchor="middle" fill="#d1fae5" font-size="9">• Prunes noisy redundant links</text>
  <text x="660" y="202" text-anchor="middle" fill="#d1fae5" font-size="9">• Integrates motor &amp; habit maps</text>
  <text x="660" y="222" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-family="monospace">Permanent Structural Lock</text>

  <rect x="562" y="252" width="196" height="116" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="660" y="276" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="600">Overnight Emotional Therapy</text>
  <text x="660" y="296" text-anchor="middle" fill="#cbd5e1" font-size="9">Processes emotional memories</text>
  <text x="660" y="312" text-anchor="middle" fill="#cbd5e1" font-size="9">in a locus-coeruleus silent</text>
  <text x="660" y="328" text-anchor="middle" fill="#cbd5e1" font-size="9">(noradrenaline-free) state</text>
  <text x="660" y="352" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="600">Strips Pain from Memory</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Wakeful Synaptic Tagging',
          explanation:
            'Deliberate daytime practice and aerobic BDNF mark specific synapses for remodeling but leave them fragile.',
        },
        {
          step: '2',
          label: 'Slow-Wave Glymphatic Flush & Replay',
          explanation:
            'Deep NREM sleep shrinks glial cells to wash out metabolic toxins while replaying daytime sequences at 10x–20x speed.',
        },
        {
          step: '3',
          label: 'REM Spine Cementing & Affect Stripping',
          explanation:
            'REM sleep physically stabilizes new dendritic spines while reprocessing painful memories in a noradrenaline-free bath.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'rw-ch04-mm1',
      name: 'The Caged-Rabbit Cortisol Trap',
      tagline: 'Mammalian stress systems evolved for 3-minute sprints, not 30-year career cages',
      naiveIntuition:
        'Pushing through chronic job and financial stress for years is a badge of toughness that has no structural cost on the brain.',
      firstPrinciplesReality:
        'Like a rabbit trapped in a cage surrounded by dogs, unremitting HPA-axis activation forces cells to shut down hormone receptors, shrinking hippocampal volume and restricting neural firing to rigid defensive ruts.',
      howToApply:
        'Treat chronic unresolvable stress as neurotoxic: either alter the environmental cage or schedule mandatory daily parasympathetic discharge via vigorous exercise and social connection.',
    },
    {
      id: 'rw-ch04-mm2',
      name: 'Tonic vs. Phasic Dopamine Accounting',
      tagline: 'Every unworked-for phasic spike is paid for with a deeper tonic baseline trough',
      naiveIntuition:
        'Rewarding a stressful day with alcohol, binge shopping, sugar, or endless scrolling restores my depleted energy.',
      firstPrinciplesReality:
        'Supranormal rewards flood the nucleus accumbens and trigger opponent-process receptor down-regulation, dropping tomorrow’s tonic baseline below normal and creating anhedonic gloom.',
      howToApply:
        'Put effort before reward: earn endogenous dopamine and endorphins through physical movement or skill execution so tonic baseline rises without a crash.',
    },
    {
      id: 'rw-ch04-mm3',
      name: 'Two-Stage Plasticity (Practice Tags, Sleep Wires)',
      tagline: 'Skipping deep sleep after practicing a new habit is like pouring wet concrete and never letting it cure',
      naiveIntuition:
        'Cutting sleep to 5 hours gives me more waking hours to work on self-improvement and productivity.',
      firstPrinciplesReality:
        'Daytime practice only tags synapses; Slow-Wave and REM sleep physically cement new dendritic spines, flush metabolic waste, and restore prefrontal impulse control.',
      howToApply:
        'Protect an 8-hour sleep opportunity window with dark, cool circadian anchors and zero late-night alcohol or sedatives that destroy REM architecture.',
    },
  ],
  deepSections: [
    {
      id: 'rw-ch04-sec1',
      sectionNumber: '4.1',
      title: 'Chronic Stress Neurotoxicity, Receptor Down-Regulation, and the Hedonic Treadmill',
      subtitle: 'How sustained cortisol erodes brain tissue and why material acquisition fails to shift baseline mood',
      coreMechanism:
        'The mammalian fight-or-flight response evolved to save a rabbit chased by a predator: adrenaline and cortisol mobilize glucose, spike blood pressure, and halt digestion until the 3-minute sprint ends. When modern humans live like a rabbit trapped in a wire cage surrounded by dogs—marinating in decades of workplace overload, information bombardment, and social isolation—cells close down their receptors to survive the hormone flood. Chronic hypercortisolemia damages hippocampal neurons, restricts neural firing to rigid pre-conditioned pathways, and leaves visible white-matter gaps on brain scans.\n\nCompounding this burnout is the hedonic treadmill and loss aversion. Because the brain rapidly adapts to material upgrades while weighting losses twice as heavily as gains, chasing status symbols or consumer variety (78 chip flavors, luxury cars) never elevates long-term happiness. Instead, expectations inflate while baseline joy receptors burn out.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Chronic HPA Activation',
          detail: 'Unresolved 21st-century cognitive load keeps adrenal cortisol and adrenaline elevated continuously.',
        },
        {
          step: '2',
          title: 'Receptor Down-Regulation',
          detail: 'Target cells retract receptors in self-defense, impairing immune, cardiovascular, and hippocampal function.',
        },
        {
          step: '3',
          title: 'Hedonic Baseline Adaptation',
          detail: 'Material acquisitions briefly spike anticipation before resetting to baseline, leaving loss aversion behind.',
        },
      ],
      keyTakeaways: [
        'Chronic unrelieved stress physically shrinks hippocampal grey matter and locks cognition into rigid defensive tracks.',
        'Losses hurt roughly twice as much as equivalent gains please us, making material status-chasing a net emotional trap.',
      ],
      commonPitfalls: [
        'Trying to cure occupational burnout with retail therapy or status upgrades that reset on the hedonic treadmill within weeks.',
        'Blaming yourself for lacking willpower when cognitive busyness and sleep debt have chemically depleted your prefrontal cortex.',
      ],
      figures: [
        {
          file: '00005.jpeg',
          originalLabel: 'Figure 2. Neurochemical cycle of chronic stress, addiction, and receptor adaptation.',
          bierutTitle: 'Interrupt the Downward Spiral of Receptor Burnout',
          editorialAnalysis:
            'This visual divider marks the transition from chronic stress overload into the neurobiology of addiction and depressive burnout. It underscores how repeated chemical or behavioral self-medication deepens the very receptor depletion the user is trying to escape.',
          keyTakeaways: [
            'Self-medicating chronic stress with high-spike substances accelerates receptor down-regulation.',
            'Lasting recovery requires restoring endogenous neurotransmitter sensitivity through sleep, movement, and connection.',
          ],
        },
      ],
    },
    {
      id: 'rw-ch04-sec2',
      sectionNumber: '4.2',
      title: 'Dopamine Reward Prediction Errors & Breaking the Addiction Hijack',
      subtitle: 'Tonic vs. phasic dopamine dynamics, conditioned cue craving, and abstinence recalibration',
      coreMechanism:
        'Addiction—whether to alcohol, nicotine, opioids, gambling, or digital pornography—hijacks the midbrain’s survival reward circuit. Dopamine neurons calculate Reward Prediction Error (RPE): firing maximally not during consumption itself, but in response to unpredictable cues and anticipation. When an addictive substance or behavior floods the synapse with supranormal dopamine or mimics endogenous endorphins, the brain defends homeostasis by destroying or internalizing postsynaptic receptors and halting natural production.\n\nConsequently, tonic baseline dopamine plummets. The addict no longer uses the substance to feel euphoric; they use it merely to escape the agonizing withdrawal trough and feel temporarily normal. Because environmental cues (a bar, a stressor, a 10 p.m. screen) remain wired to phasic anticipation spikes long after detox, rewiring requires strict trigger avoidance, mindful "urge surfing," and a 90-day receptor recalibration window.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Supranormal Phasic Flood',
          detail: 'Substance or variable-ratio behavioral hit spikes synaptic dopamine far beyond evolutionary bounds.',
        },
        {
          step: '2',
          title: 'Homeostatic Receptor Pruning',
          detail: 'The striatum down-regulates D2 receptors and reduces endogenous neurotransmitter synthesis.',
        },
        {
          step: '3',
          title: '90-Day Abstinence & Urge Surfing',
          detail: 'Starve cue-induced craving loops while allowing natural receptor density and tonic baseline to regenerate.',
        },
      ],
      formulas: [
        {
          name: 'Dopamine Reward Prediction Error (RPE)',
          expression: 'δ_t = R_t + γ · V(S_{t+1}) - V(S_t)',
          intuition:
            'Phasic dopamine signaling δ_t measures the gap between actual received reward plus future state value and the expected baseline value; supranormal hits inflate V(S_t) so ordinary life produces negative prediction errors (anhedonia).',
          variables: [
            { symbol: 'δ_t', meaning: 'Phasic dopamine burst (+) or dip (-) at time t' },
            { symbol: 'R_t', meaning: 'Immediate magnitude of the experienced reward' },
            { symbol: 'γ · V(S_{t+1})', meaning: 'Discounted expected value of the next state' },
            { symbol: 'V(S_t)', meaning: 'Previously learned baseline expectation of reward' },
          ],
          workedExample:
            'After repeated high-spike binge nights inflate expected baseline V(S_t) to 80, an ordinary healthy evening (R_t = 30) yields δ_t = 30 - 80 = -50, registering as bleak boredom until abstinence resets V(S_t) back to 25.',
        },
      ],
      keyTakeaways: [
        'Addiction turns a pleasure-seeking habit into a desperate anti-withdrawal necessity as tonic dopamine crashes.',
        'Mindful urge surfing—observing a craving wave for 5–15 minutes without acting—weakens the cue-to-action synapse.',
      ],
      commonPitfalls: [
        'Testing yourself by walking into high-cue environments (bars, casinos) during the first 90 days of receptor recovery.',
        'Using alcohol or sedatives to "help you sleep," which fragments REM architecture and worsens next-day anxiety.',
      ],
      figures: [],
    },
    {
      id: 'rw-ch04-sec3',
      sectionNumber: '4.3',
      title: 'Glymphatic Sleep Consolidation and Somatic Exercise Neurochemistry',
      subtitle: 'How Slow-Wave/REM sleep and aerobic BDNF outperform passive coping for depression and habit lock-in',
      coreMechanism:
        'Rewiring the brain is a two-phase biological process: wakeful practice provides the synaptic stimulus, but sleep executes the physical construction. During Slow-Wave Sleep (SWS), glial channels open by 60% to flush neurotoxic waste via the glymphatic system while hippocampal ripples replay daytime learning to the cortex. Subsequent REM sleep cements new dendritic spines and strips painful noradrenergic charge from emotional memories.\n\nIn parallel, vigorous physical exercise acts as a broad-spectrum neurochemical up-regulator. Aerobic and resistance training release Brain-Derived Neurotrophic Factor (BDNF)—fertilizer for adult hippocampal neurogenesis—alongside endogenous endorphins, serotonin, and balanced tonic dopamine. Clinical trials consistently show that regular exercise rivals antidepressant medication for mild-to-moderate depression while carrying zero receptor-blunting side effects.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Daytime Somatic BDNF Release',
          detail: 'Execute 30–45 minutes of elevated-heart-rate exercise to stimulate hippocampal neurogenesis and endorphins.',
        },
        {
          step: '2',
          title: 'Circadian Wind-Down',
          detail: 'Eliminate caffeine after noon, alcohol at night, and late screen glare to protect slow-wave delta entry.',
        },
        {
          step: '3',
          title: 'Nocturnal Spine Consolidation',
          detail: 'Allow uninterrupted SWS and REM cycles to flush adenosine and physically lock in daytime habit circuits.',
        },
      ],
      keyTakeaways: [
        'Sleep deprivation severing the final 2 hours of sleep destroys up to 50% of REM-dependent habit consolidation.',
        'Consistent aerobic exercise regenerates hippocampal neurons damaged by chronic cortisol and depressive gloom.',
      ],
      commonPitfalls: [
        'Lying awake in bed for hours tossing and turning instead of getting up to read quietly until sleepiness returns.',
        'Waiting for depressive gloom to lift before exercising, rather than using mechanical movement to generate the neurochemistry of mood.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Neurochemical Regulation & Mood Restoration Matrix',
      description: 'Comparing Cheap Dopaminergic Spikes, Pharmacological Antidepressants, Aerobic Exercise, and Sleep Architecture Optimization.',
      headers: ['Intervention', 'Immediate Neurochemical Shift', '90-Day Receptor Adaptation', 'Impact on Sleep & Plasticity', 'Long-Term Relapse Resilience'],
      rows: [
        ['Cheap High-Spike Hits (Alcohol/Binge/Scroll)', 'Massive phasic dopamine / GABA surge', 'Severe D2 & endorphin down-regulation', 'Destroys REM sleep & blocks LTP', 'Very Low (drives addiction & burnout)'],
        ['SSRIs / Pharmacotherapy Alone', 'Increases synaptic monoamine availability', 'Partial receptor desensitization over time', 'Neutral to mild REM suppression', 'Moderate (high relapse if habits unchanged)'],
        ['Aerobic & Resistance Exercise', 'Endorphin, BDNF, and tonic dopamine rise', 'Up-regulates D2 receptors & hippocampal neurogenesis', 'Deepens Slow-Wave Sleep drive', 'High (self-reinforcing somatic anchor)'],
        ['8-Hour SWS + REM Sleep Architecture', 'Clears adenosine & drops cortisol to nadir', 'Restores full prefrontal & striatal sensitivity', 'Physically cements new dendritic spines', 'Maximum (foundational plasticity lock)'],
      ],
      verdictRule:
        'Never trade sleep architecture or aerobic movement for cheap chemical/digital spikes; combine daily somatic exercise with protected 8-hour sleep windows to physically cement cognitive rewiring.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'rw-ch04-scen1',
      title: 'Reversing Wall Street "Hedonic Treadmill" Burnout & Nightcap Dependence',
      roleAndContext: '45-year-old investment director passed over for partner who developed insomnia, apathy, and a 3-scotch nightly sleep habit.',
      symptomOrFailure: 'Wakes at 3 a.m. in a cortisol panic as alcohol metabolizes, feels anhedonic all day despite high wealth, and contemplates quitting abruptly.',
      naiveFixAndWhyItFails: 'Increasing nightly scotch or buying a luxury sports car fails because alcohol fragments REM sleep and material purchases reset on the hedonic treadmill within weeks.',
      firstPrinciplesSolution: 'Replace the nightly alcohol sedative with a 45-minute late-afternoon aerobic/strength workout, a strict 10 p.m. screen-off wind-down, and pivot personal identity goals from zero-sum status to mentoring and community connection.',
      measurableOutcome: 'Restored 7.5 hours of unbroken sleep within 21 days, eliminated 3 a.m. cortisol awakenings, and recovered baseline daytime drive.',
    },
    {
      id: 'rw-ch04-scen2',
      title: 'Breaking a Compulsive Dopamine-Loop Behavioral Addiction via Urge Surfing',
      roleAndContext: 'Remote software lead trapped in a late-night online gambling and trading loop that has eroded savings and daytime focus.',
      symptomOrFailure: 'Every evening at 11 p.m., boredom and work fatigue trigger an intense phasic anticipation craving that overrides conscious budgets.',
      naiveFixAndWhyItFails: 'Keeping trading apps installed while promising to "only place small bets" fails because variable-ratio reward prediction errors immediately hijack striatal circuits.',
      firstPrinciplesSolution: 'Execute hard environmental friction (self-exclusion blocks + handing account credentials to spouse), enforce a 10:30 p.m. lights-out sleep schedule, and practice 10-minute mindful "urge surfing" whenever cue cravings crest.',
      measurableOutcome: 'Completed 90 days of continuous abstinence, restoring normal tonic dopamine interest in family, exercise, and deep engineering work.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'rw-ch04-q1',
        scenarioPrompt:
          'In neuroimaging experiments where participants tasted the exact same wine poured from bottles labeled $10 versus $90, what happened inside their brains?',
        options: [
          {
            label: 'A',
            text: 'Primary taste-bud receptors on the tongue fired ten times faster for the $90 bottle.',
            isCorrect: false,
            explanation: 'Early sensory taste centers showed no difference because the liquid was identical.',
          },
          {
            label: 'B',
            text: 'While primary taste centers registered no difference, prefrontal and striatal pleasure centers fired significantly harder for the $90 bottle, proving that conscious status expectations directly modulate automatic pleasure.',
            isCorrect: true,
            explanation: 'Top-down expectations about price and status alter medial orbitofrontal pleasure processing even when sensory input is unchanged.',
          },
          {
            label: 'C',
            text: 'Participants preferred the $10 bottle because loss aversion blocked enjoyment of the $90 wine.',
            isCorrect: false,
            explanation: 'They reported higher enjoyment and showed higher neural reward activity for the high-priced label.',
          },
          {
            label: 'D',
            text: 'Both bottles completely shut down the Default Mode Network and Reticular Activating System.',
            isCorrect: false,
            explanation: 'Expectation-driven reward modulation occurs in the ventromedial prefrontal and striatal valuation circuits.',
          },
        ],
      },
      {
        id: 'rw-ch04-q2',
        scenarioPrompt:
          'Why does chronic, unrelieved 21st-century psychological stress ("the rabbit in a cage surrounded by dogs") cause progressive cognitive rigidity and physical organ wear?',
        options: [
          {
            label: 'A',
            text: 'When cells are continuously bathed in cortisol and adrenaline without a physical resolution sprint, they close down hormone receptors in self-protection, prompting the endocrine system to pump even more stress hormones that erode hippocampal tissue.',
            isCorrect: true,
            explanation: 'Mammalian fight-or-flight evolved for brief acute emergencies; chronic activation triggers receptor down-regulation, immune suppression, and neural atrophy.',
          },
          {
            label: 'B',
            text: 'Chronic stress causes the adrenal glands to freeze solid within 48 hours, stopping all hormone production.',
            isCorrect: false,
            explanation: 'The HPA axis continues pumping cortisol while target receptors desensitize.',
          },
          {
            label: 'C',
            text: 'Cortisol immediately doubles the speed of adult neurogenesis in the prefrontal cortex.',
            isCorrect: false,
            explanation: 'Sustained high cortisol suppresses neurogenesis and shrinks dendritic branches.',
          },
          {
            label: 'D',
            text: 'Human bodies evolved specifically to sit indoors under artificial light for 16 hours a day.',
            isCorrect: false,
            explanation: 'Modern sedentary, hyper-stimulated isolation is an evolutionary mismatch.',
          },
        ],
      },
      {
        id: 'rw-ch04-q3',
        scenarioPrompt:
          'What happens to postsynaptic dopamine (D2) and endorphin receptors during chronic substance or high-spike behavioral addiction, and how does this alter the user’s motivation?',
        options: [
          {
            label: 'A',
            text: 'Receptor density triples, making the user ecstatic during ordinary daily activities.',
            isCorrect: false,
            explanation: 'Receptors down-regulate rather than multiply during chronic overstimulation.',
          },
          {
            label: 'B',
            text: 'To defend against supranormal chemical floods, the brain prunes postsynaptic receptors and halts endogenous production, dropping tonic baseline so low that the user must repeat the habit just to escape withdrawal dysphoria.',
            isCorrect: true,
            explanation: 'Homeostatic down-regulation shifts the hedonic set-point downward, turning the addiction from a quest for pleasure into a desperate attempt to feel normal.',
          },
          {
            label: 'C',
            text: 'Receptors regenerate completely after a single 8-hour night of sleep.',
            isCorrect: false,
            explanation: 'Rebuilding down-regulated striatal receptor density typically requires 30 to 90+ days of consistent abstinence.',
          },
          {
            label: 'D',
            text: 'Addiction only affects the peripheral nervous system and leaves midbrain reward circuits untouched.',
            isCorrect: false,
            explanation: 'Addiction directly remodels the mesolimbic and nigrostriatal dopamine pathways.',
          },
        ],
      },
      {
        id: 'rw-ch04-q4',
        scenarioPrompt:
          'How do daytime deliberate practice, aerobic exercise, and nocturnal sleep collaborate to physically cement a new neural circuit?',
        options: [
          {
            label: 'A',
            text: 'Daytime practice tags active synapses and exercise supplies BDNF fertilizer, while Slow-Wave and REM sleep flush metabolic waste and physically stabilize the new dendritic spines.',
            isCorrect: true,
            explanation: 'Neuroplasticity is a two-stage process: wakeful focus and BDNF initiate and tag changes, while SWS and REM sleep consolidate and lock them into permanent cortical architecture.',
          },
          {
            label: 'B',
            text: 'All physical synaptic growth occurs during the first ten seconds of waking practice, making sleep optional.',
            isCorrect: false,
            explanation: 'Without subsequent SWS and REM sleep, newly formed dendritic spines remain labile and are largely pruned away.',
          },
          {
            label: 'C',
            text: 'Drinking three glasses of wine before bed accelerates REM sleep consolidation by 200%.',
            isCorrect: false,
            explanation: 'Alcohol is a sedative that suppresses REM sleep and triggers rebound awakenings as it metabolizes.',
          },
          {
            label: 'D',
            text: 'Exercise steals glucose from the hippocampus and prevents any new neurons from forming.',
            isCorrect: false,
            explanation: 'Exercise stimulates hippocampal stem-cell division and BDNF release.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'rw-ch04-fc1',
        category: 'foundation',
        front: 'What is the "Hedonic Treadmill" and how does Loss Aversion compound it?',
        back: 'Humans rapidly adapt to new wealth or possessions and return to baseline mood, while losing an acquired asset hurts roughly twice as much as gaining it felt good.',
        mentalHook: 'Gains fade fast; losses sting 2x.',
      },
      {
        id: 'rw-ch04-fc2',
        category: 'architecture',
        front: 'Why does the "Caged Rabbit" model of chronic 21st-century stress cause brain atrophy?',
        back: 'Continuous HPA-axis cortisol output without physical resolution forces cells to shut down receptors and erodes hippocampal grey matter.',
        mentalHook: 'Built for 3-minute sprints, broken by 30-year cages.',
      },
      {
        id: 'rw-ch04-fc3',
        category: 'evaluation',
        front: 'What is the difference between Tonic and Phasic dopamine in addiction and burnout?',
        back: 'Phasic dopamine is the rapid spike triggered by cues and surprises; Tonic dopamine is the steady background baseline that governs daily drive and mood.',
        mentalHook: 'Cheap phasic spikes crash your tonic baseline.',
      },
      {
        id: 'rw-ch04-fc4',
        category: 'optimization',
        front: 'What is "Urge Surfing" when breaking a compulsive craving?',
        back: 'Observing a craving’s physical sensations mindfully like an ocean wave for 5–15 minutes without acting on it or fighting it, until the phasic dopamine surge subsides.',
        mentalHook: 'Cravings crest and break in 15 minutes if you don’t feed them.',
      },
      {
        id: 'rw-ch04-fc5',
        category: 'adaptation',
        front: 'What two critical maintenance jobs do Slow-Wave Sleep (SWS) and REM sleep perform for neuroplasticity?',
        back: 'SWS opens glymphatic channels to flush metabolic toxins and replays memories, while REM sleep physically cements new dendritic spines and strips emotional pain.',
        mentalHook: 'Daytime tags the synapse; sleep pours the concrete.',
      },
      {
        id: 'rw-ch04-fc6',
        category: 'data',
        front: 'Why is regular aerobic exercise a first-line neurobiological treatment for depressive gloom?',
        back: 'It releases BDNF to stimulate adult hippocampal neurogenesis while naturally elevating endorphins, serotonin, and tonic dopamine sensitivity.',
        mentalHook: 'Exercise is endogenous BDNF fertilizer for a stressed brain.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'rw-ch04-feyn1',
        conceptTitle: 'Dopamine Down-Regulation, the Hedonic Treadmill, and Effort-First Recovery',
        prompt:
          'Explain why rewarding yourself with cheap high-spike pleasures (binge drinking, scrolling, or status shopping) after stressful workdays deepens burnout and anhedonia, and describe how to rebuild tonic dopamine sensitivity.',
        rubricChecklist: [
          'Distinguishes phasic dopamine spikes from tonic baseline dopamine levels.',
          'Explains homeostatic receptor down-regulation (postsynaptic D2 receptors retract when flooded).',
          'Describes the hedonic treadmill and why material upgrades fail to shift baseline happiness.',
          'Prescribes effort-first somatic anchors (exercise, cold/heat, craft mastery, social bonds) and 90-day abstinence from supranormal spikes.',
        ],
        modelExplanation:
          'Your motivation and capacity for joy depend on your tonic dopamine baseline and the density of your D2 receptors. When you medicate workday stress with cheap supranormal hits—like alcohol, binge sugar, or endless scrolling—you flood the synapse with a massive phasic spike. To protect itself from overload, your brain pulls D2 receptors inside the cell and cuts natural production. Tomorrow, your tonic baseline drops into a trough, making normal life feel gray and exhausting. To reverse this, you must starve the supranormal spikes for 90 days so receptors regenerate, while putting effort before reward through aerobic exercise and real human connection.',
      },
      {
        id: 'rw-ch04-feyn2',
        conceptTitle: 'Two-Stage Neuroplasticity: Why Sleep and Exercise Cement Daytime Rewiring',
        prompt:
          'Explain to a sleep-deprived, sedentary professional why practicing cognitive reframing during the day will fail to rewire their brain unless paired with Slow-Wave/REM sleep and physical movement.',
        rubricChecklist: [
          'Defines two-stage plasticity: daytime practice only creates a fragile chemical tag at the synapse.',
          'Explains how Slow-Wave Sleep opens the glymphatic system (glial cells shrink 60%) to clear metabolic waste and replays hippocampal traces.',
          'Describes how REM sleep stabilizes new dendritic spines and strips noradrenergic stress from emotional memories.',
          'Shows how aerobic exercise releases BDNF to support hippocampal neurogenesis and deepen slow-wave sleep drive.',
        ],
        modelExplanation:
          'Practicing a new habit during the day is only half of neuroplasticity—it merely places a temporary chemical tag on the synapses you used. If you sleep five hours or drink alcohol before bed, those fragile new connections dissolve. During deep Slow-Wave Sleep, your brain’s glial cells shrink by 60% so cerebrospinal fluid can wash out daytime metabolic toxins while replaying your new habit circuits at high speed. Then, during REM sleep, your brain physically cements the new dendritic spines into permanent wiring. Pairing this with daily aerobic exercise floods the brain with BDNF—the growth factor required to sprout those new connections in the first place.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'rw-dopamine-rpe',
        label: 'Dopamine Reward Prediction Error',
        category: 'foundation',
        chapterNumber: 4,
        importance: 1,
        definition: 'Midbrain signaling mechanism firing on the gap between actual and expected reward; drives craving and habit reinforcement.',
        formulaOrRule: 'δ_t = R_t + γ · V(S_{t+1}) - V(S_t)',
        whyItMatters: 'Explains how variable-ratio cues and supranormal substances hijack motivation.',
      },
      {
        id: 'rw-receptor-downregulation',
        label: 'D2 Receptor Down-Regulation',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition: 'Homeostatic retraction of postsynaptic dopamine and opioid receptors in response to chronic chemical or behavioral flooding.',
        whyItMatters: 'Produces tolerance, anhedonia, and the below-baseline tonic crash of burnout and addiction.',
      },
      {
        id: 'rw-glymphatic-sleep',
        label: 'SWS Glymphatic & REM Consolidation',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition: 'Nocturnal two-stage process where Slow-Wave Sleep flushes metabolic waste and REM sleep cements newly tagged dendritic spines.',
        whyItMatters: 'Serves as the mandatory biological lock that makes daytime neuroplasticity permanent.',
      },
      {
        id: 'rw-somatic-bdnf',
        label: 'Aerobic BDNF Neurogenesis',
        category: 'optimization',
        chapterNumber: 4,
        importance: 2,
        definition: 'Exercise-induced release of Brain-Derived Neurotrophic Factor that stimulates hippocampal stem-cell division and synaptic growth.',
        whyItMatters: 'Reverses cortisol-induced hippocampal shrinkage and elevates tonic mood without receptor blunting.',
      },
      {
        id: 'rw-hedonic-treadmill',
        label: 'The Hedonic Treadmill & Loss Aversion',
        category: 'evaluation',
        chapterNumber: 4,
        importance: 3,
        definition: 'Rapid adaptation of happiness back to baseline after material gains, paired with 2x emotional sensitivity to losses.',
        whyItMatters: 'Proves why materialism and status-chasing cannot cure existential burnout.',
      },
      {
        id: 'rw-urge-surfing',
        label: 'Mindful Urge Surfing',
        category: 'security',
        chapterNumber: 4,
        importance: 2,
        definition: 'Prefrontal observation of a conditioned craving wave for 5–15 minutes without feeding it, allowing phasic dopamine to subside.',
        whyItMatters: 'Starves cue-induced addiction loops so synaptic pruning can weaken the trigger.',
      },
    ],
    edges: [
      {
        source: 'rw-dopamine-rpe',
        target: 'rw-receptor-downregulation',
        relationship: 'prerequisite_for',
        explanation: 'Repeated supranormal phasic RPE floods trigger protective postsynaptic receptor down-regulation.',
      },
      {
        source: 'rw-urge-surfing',
        target: 'rw-receptor-downregulation',
        relationship: 'mitigates',
        explanation: 'Surfing cravings without acting preserves abstinence so down-regulated D2 receptors can regenerate.',
      },
      {
        source: 'rw-somatic-bdnf',
        target: 'rw-glymphatic-sleep',
        relationship: 'optimizes',
        explanation: 'Daytime aerobic exercise increases BDNF availability and deepens nocturnal Slow-Wave Sleep consolidation.',
      },
      {
        source: 'rw-glymphatic-sleep',
        target: 'rw-receptor-downregulation',
        relationship: 'mitigates',
        explanation: 'Restorative SWS and REM sleep clear adenosine and restore striatal and prefrontal receptor sensitivity.',
      },
      {
        source: 'rw-hedonic-treadmill',
        target: 'rw-dopamine-rpe',
        relationship: 'evaluates',
        explanation: 'Hedonic adaptation inflates expected baseline V(S_t), causing material acquisitions to yield zero net RPE.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: 'Verified 100% coverage of Chronic Stress Caged-Rabbit model, Hedonic Treadmill, Dopamine RPE, Receptor Down-Regulation, Sleep Consolidation, and Exercise BDNF with figure 00005.jpeg attached.',
  },
};

export const rewireCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Sustaining Neuroplastic Maintenance & Relapse-Resilient Identity',
  subtitle: 'Defeating the Undertow, Short-Timer Syndrome, Environmental Friction Engineering, and the 90-Day Identity Lock',
  readingTimeMinutes: 7,
  sourceWordCount: 7770,
  executiveThesis:
    'Most behavior-change campaigns collapse within two years because practitioners mistake initial symptom control for structural cure—falling victim to "The Undertow" when legacy neural highways reactivate under fatigue or premature victory ("short-timer syndrome"). Sustaining lifelong neuroplasticity requires aligning conscious identity with the new behavior, programming visceral aversion to relapse cues, and engineering environmental friction so healthy execution remains the path of least resistance.',
  paradigmShift: {
    oldWay:
      'Relapse after months of progress was seen as mysterious bad luck or proof that total recovery was impossible ("the what-the-hell effect").',
    newWay:
      'Relapse is a predictable mechanical reversion ("The Undertow") caused by unaddressed emotional conflicts, identity lag, and dormant striatal tracks that can be neutralized through proactive vigilance.',
    whyItChanged:
      'Longitudinal recovery data and habit-extinction neuroscience showed that dormant circuits never vanish, making identity alignment and automatic relapse-prevention habits essential.',
  },
  customDiagrams: [
    {
      id: 'rw-ch05-svg1',
      title: 'Anatomy of "The Undertow" vs. Relapse-Resilient Circuitry',
      subtitle: 'Why 2-year reform efforts fail near the finish line and how to swim parallel to shore',
      bierutCaption:
        'Defeat the Undertow by upgrading your core self-image and resolving hidden guilt so success no longer feels like walking a tightrope.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">FACING THE UNDERTOW: WHY SYMPTOM CONTROL ALONE COLLAPSES</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Neutralizing the four hidden currents that pull 2-year recovery campaigns back onto legacy neural tracks</text>

  <!-- Left Column: The 4 Undertow Currents -->
  <rect x="24" y="78" width="356" height="314" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="202" y="104" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="700">1. THE FOUR UNDERTOW CURRENTS</text>

  <rect x="42" y="120" width="320" height="56" rx="6" fill="#0f172a" stroke="#f43f5e" />
  <text x="202" y="140" text-anchor="middle" fill="#fda4af" font-size="9.5" font-weight="700">Current A: Dormant Myelinated Superhighways</text>
  <text x="202" y="158" text-anchor="middle" fill="#94a3b8" font-size="8.5">Old tracks are disused, not demolished; 1 slip reactivates loop</text>

  <rect x="42" y="186" width="320" height="56" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="202" y="206" text-anchor="middle" fill="#fde68a" font-size="9.5" font-weight="700">Current B: "Short-Timer" Victory Drop</text>
  <text x="202" y="224" text-anchor="middle" fill="#94a3b8" font-size="8.5">Dropping survival vigilance right as the goal is reached</text>

  <rect x="42" y="252" width="320" height="56" rx="6" fill="#0f172a" stroke="#818cf8" />
  <text x="202" y="272" text-anchor="middle" fill="#c7d2fe" font-size="9.5" font-weight="700">Current C: Tightrope Identity Lag</text>
  <text x="202" y="290" text-anchor="middle" fill="#94a3b8" font-size="8.5">"I’m just faking virtue" -> failing brings tension relief</text>

  <rect x="42" y="318" width="320" height="56" rx="6" fill="#4c0519" stroke="#f43f5e" />
  <text x="202" y="338" text-anchor="middle" fill="#fecdd3" font-size="9.5" font-weight="700">Current D: Unresolved Guilt &amp; Ungrieved Loss</text>
  <text x="202" y="356" text-anchor="middle" fill="#fda4af" font-size="8.5">"Dry drunk" symptom control without fixing root conflict</text>

  <!-- Arrows Across -->
  <path d="M 380 148 L 420 148" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 380 214 L 420 214" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 380 280 L 420 280" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 380 346 L 420 346" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Right Column: Relapse-Resilient Countermeasures -->
  <rect x="420" y="78" width="356" height="314" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="598" y="104" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">2. RELAPSE-RESILIENT ARCHITECTURE</text>

  <rect x="438" y="120" width="320" height="56" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="598" y="140" text-anchor="middle" fill="#a7f3d0" font-size="9.5" font-weight="700">Pavlovian Aversion &amp; Zero-Slip Boundaries</text>
  <text x="598" y="158" text-anchor="middle" fill="#d1fae5" font-size="8.5">Pair old temptation cues with visceral disgust; reject "what-the-hell"</text>

  <rect x="438" y="186" width="320" height="56" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="598" y="206" text-anchor="middle" fill="#7dd3fc" font-size="9.5" font-weight="700">90-Day Psychic Gym Protocol</text>
  <text x="598" y="224" text-anchor="middle" fill="#cbd5e1" font-size="8.5">5-minute daily raincoat focus; make vigilance a stress-free habit</text>

  <rect x="438" y="252" width="320" height="56" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="598" y="272" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">Behavioral Rehearsal -> Identity Lock</text>
  <text x="598" y="290" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Act the part until the assumptive self-image updates to match</text>

  <rect x="438" y="318" width="320" height="56" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="598" y="338" text-anchor="middle" fill="#a7f3d0" font-size="9.5" font-weight="700">Honest Grief, Amends &amp; Community</text>
  <text x="598" y="356" text-anchor="middle" fill="#d1fae5" font-size="8.5">Mourn past costs without self-hate; anchor in transparent bonds</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Short-Timer Vulnerability Spike',
          explanation:
            'Like soldiers nearing discharge who drop survival habits, people relax their guard right when a reform campaign starts paying off.',
        },
        {
          step: '2',
          label: 'Tightrope Identity Dissonance',
          explanation:
            'If you change outward behavior while secretly viewing yourself as a weak fraud, relapsing feels like a relief from tension.',
        },
        {
          step: '3',
          label: 'Rejecting the What-The-Hell Effect',
          explanation:
            'Every day of prior practice physically remains in your cortex; a single slip only becomes a collapse if guilt convinces you to quit.',
        },
      ],
    },
    {
      id: 'rw-ch05-svg2',
      title: 'The 90-Day Neuroplastic Habit & Environmental Friction Blueprint',
      subtitle: 'Operationalizing trigger audits, the 5-minute raincoat drill, and public accountability',
      bierutCaption:
        'Isolate one target habit for 90 days, strip environmental triggers, and use the 5-minute raincoat drill to outlast initial resistance.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="14" font-weight="700" letter-spacing="0.06em">90-DAY NEUROPLASTIC EXECUTION PIPELINE</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Step-by-step protocol from baseline trigger telemetry to permanent automaticity</text>

  <!-- Phase 1: Days 1-7 -->
  <rect x="24" y="84" width="172" height="298" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="110" y="110" text-anchor="middle" fill="#38bdf8" font-size="10.5" font-weight="700">PHASE 1: TELEMETRY</text>
  <text x="110" y="128" text-anchor="middle" fill="#94a3b8" font-size="8.5">Days 1–7 (Pre-Launch)</text>
  <rect x="38" y="146" width="144" height="216" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="110" y="170" text-anchor="middle" fill="#f8fafc" font-size="9.5" font-weight="600">Single-Habit Selection</text>
  <text x="110" y="190" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Pick 1 high-leverage</text>
  <text x="110" y="204" text-anchor="middle" fill="#cbd5e1" font-size="8.5">target habit</text>
  <text x="110" y="226" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Log time, mood, hunger,</text>
  <text x="110" y="240" text-anchor="middle" fill="#cbd5e1" font-size="8.5">caffeine &amp; hidden payoff</text>
  <text x="110" y="262" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Engineer friction on</text>
  <text x="110" y="276" text-anchor="middle" fill="#cbd5e1" font-size="8.5">environmental triggers</text>
  <text x="110" y="336" text-anchor="middle" fill="#38bdf8" font-size="8" font-family="monospace">Circle 90-Day Calendar Date</text>

  <path d="M 196 233 L 216 233" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Phase 2: Days 8-30 -->
  <rect x="216" y="84" width="172" height="298" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="302" y="110" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="700">PHASE 2: IGNITION</text>
  <text x="302" y="128" text-anchor="middle" fill="#94a3b8" font-size="8.5">Days 8–30 (High Friction)</text>
  <rect x="230" y="146" width="144" height="216" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="302" y="170" text-anchor="middle" fill="#fde68a" font-size="9.5" font-weight="600">5-Min Raincoat Drill</text>
  <text x="302" y="190" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Commit to 5 focused</text>
  <text x="302" y="204" text-anchor="middle" fill="#cbd5e1" font-size="8.5">minutes in zero distraction</text>
  <text x="302" y="226" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Let rationalizations</text>
  <text x="302" y="240" text-anchor="middle" fill="#cbd5e1" font-size="8.5">slide off like rain</text>
  <text x="302" y="262" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Enlist public ally for</text>
  <text x="302" y="276" text-anchor="middle" fill="#cbd5e1" font-size="8.5">accountability &amp; praise</text>
  <text x="302" y="336" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">Yellow Bulldozers Laying Road</text>

  <path d="M 388 233 L 408 233" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Phase 3: Days 31-90 -->
  <rect x="408" y="84" width="172" height="298" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
  <text x="494" y="110" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="700">PHASE 3: MYELINATION</text>
  <text x="494" y="128" text-anchor="middle" fill="#94a3b8" font-size="8.5">Days 31–90 (Consolidation)</text>
  <rect x="422" y="146" width="144" height="216" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="494" y="170" text-anchor="middle" fill="#c7d2fe" font-size="9.5" font-weight="600">Slip Recovery &amp; Scaling</text>
  <text x="494" y="190" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Progressive resistance</text>
  <text x="494" y="204" text-anchor="middle" fill="#cbd5e1" font-size="8.5">on willpower muscle</text>
  <text x="494" y="226" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Instant next-day reset</text>
  <text x="494" y="240" text-anchor="middle" fill="#cbd5e1" font-size="8.5">if a slip occurs</text>
  <text x="494" y="262" text-anchor="middle" fill="#cbd5e1" font-size="8.5">• Savor pride to reward</text>
  <text x="494" y="276" text-anchor="middle" fill="#cbd5e1" font-size="8.5">striatal circuit</text>
  <text x="494" y="336" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">Grey Matter &amp; Myelin Lock</text>

  <path d="M 580 233 L 600 233" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />

  <!-- Phase 4: Lifelong Maintenance -->
  <rect x="600" y="84" width="176" height="298" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="688" y="110" text-anchor="middle" fill="#34d399" font-size="10.5" font-weight="700">PHASE 4: IDENTITY</text>
  <text x="688" y="128" text-anchor="middle" fill="#94a3b8" font-size="8.5">Day 90+ (New Default)</text>
  <rect x="614" y="146" width="148" height="216" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="688" y="170" text-anchor="middle" fill="#a7f3d0" font-size="9.5" font-weight="600">Automatic Vigilance</text>
  <text x="688" y="190" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Behavior integrated into</text>
  <text x="688" y="204" text-anchor="middle" fill="#d1fae5" font-size="8.5">Automatic Self</text>
  <text x="688" y="226" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Pride + humility balance</text>
  <text x="688" y="248" text-anchor="middle" fill="#d1fae5" font-size="8.5">• Autonomy, competence &amp;</text>
  <text x="688" y="262" text-anchor="middle" fill="#d1fae5" font-size="8.5">relatedness anchored</text>
  <text x="688" y="336" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">Proceed to Next Habit</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Trigger & Payoff Telemetry',
          explanation:
            'Spend several days logging mood, hunger, caffeine, and hidden protective payoffs before launching your 90-day sprint.',
        },
        {
          step: '2',
          label: 'The 5-Minute Raincoat Drill',
          explanation:
            'Initiate the target behavior for just five minutes while letting fearful or cynical thoughts slide off like rain on a tent.',
        },
        {
          step: '3',
          label: 'Zero What-The-Hell Recovery',
          explanation:
            'Because neural traces are never lost, a single slip on Day 40 requires an immediate Day 41 restart rather than self-hating abandonment.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'rw-ch05-mm1',
      name: 'Swimming Parallel to the Undertow',
      tagline: 'Symptom suppression without paradigm repair guarantees a two-year relapse',
      naiveIntuition:
        'Once I string together thirty days of good behavior, the habit is cured and I can stop paying attention.',
      firstPrinciplesReality:
        'Like soldiers dropping their guard near their discharge date, premature complacency ("short-timer syndrome") plus unresolved emotional conflict creates an undertow that pulls 80% of reformers back within two years.',
      howToApply:
        'Pair outward habit control with deep grief work, amends, and identity updating so you are no longer secretly fighting yourself.',
    },
    {
      id: 'rw-ch05-mm2',
      name: 'The 5-Minute Raincoat Protocol',
      tagline: 'You do not need to silence intrusive resistance thoughts to execute for five minutes',
      naiveIntuition:
        'I must wait until I feel calm, confident, and free of cynical thoughts before starting my difficult task.',
      firstPrinciplesReality:
        'Resistance thoughts ("this is pointless, I’m too agitated") are automatic alarm noise triggered by the basal ganglia; treating them like rain outside a waterproof tent allows prefrontal execution to proceed.',
      howToApply:
        'Set a timer for five minutes, expect noisy internal protests, let them slide off your raincoat, and evaluate whether to continue only after the five minutes expire.',
    },
    {
      id: 'rw-ch05-mm3',
      name: 'Virtuous Behavioral Rehearsal ("Act the Part to Rewire the Self")',
      tagline: 'Outward execution updates inward identity faster than inward contemplation updates action',
      naiveIntuition:
        'Acting disciplined, courageous, or kind when I still feel broken inside is dishonest "faking it."',
      firstPrinciplesReality:
        'Executing constructive actions triggers positive social feedback and striatal pride signals that progressively rewrite the assumptive self-image.',
      howToApply:
        'Show up and go through the physical motions of your target identity daily, allowing the resulting competence to close the gap between your conscious persona and automatic self.',
    },
  ],
  deepSections: [
    {
      id: 'rw-ch05-sec1',
      sectionNumber: '5.1',
      title: 'Deconstructing "The Undertow" & Short-Timer Relapse Mechanics',
      subtitle: 'Why two-year reform campaigns fail when symptom control outpaces identity and emotional resolution',
      coreMechanism:
        'Empirical tracking of dieting, sobriety, and behavioral reform reveals a sobering law: the vast majority of initially successful campaigns collapse within two years. This delayed sabotage is driven by "The Undertow"—four converging forces beneath conscious awareness. First, just as Vietnam soldiers nearing their rotation date ("short-timers") grew anxious, dropped automatic survival habits, and suffered higher casualty rates, reformers become self-conscious and lower their guard right as victory nears.\n\nSecond, if you stop a destructive symptom without resolving the underlying loneliness, rage, or fear of success, you remain a "dry drunk" in constant internal tension. Third, if your deep self-image remains wounded ("I am a weak fraud faking virtue"), every day of success feels like walking farther out on a high wire—making relapse a massive relief of tension. Finally, because legacy myelinated highways never vanish, a single unguarded slip combined with the "what-the-hell effect" rapidly diverts all traffic back onto the old superhighway.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit Root Emotional Drivers',
          detail: 'Verify that the loneliness, anger, or fear of autonomy beneath the habit is being addressed directly.',
        },
        {
          step: '2',
          title: 'Upgrade Core Self-Image',
          detail: 'Internalize earned pride so constructive behavior feels like your authentic home rather than a tightrope act.',
        },
        {
          step: '3',
          title: 'Program Pavlovian Aversion',
          detail: 'Pair any thought of returning to an active addiction with immediate, visceral memory of its worst consequences.',
        },
      ],
      keyTakeaways: [
        'Prior neuroplastic work is never erased by a single slip; only the "what-the-hell" surrender turns a lapse into a relapse.',
        'For active addictions (alcohol, nicotine, gambling), total abstinence is required; for passive habits (procrastination), bounded daily improvement prevents all-or-nothing collapse.',
      ],
      commonPitfalls: [
        'Assuming that because a habit has been quiet for six months, you can safely dabble in the old trigger environment.',
        'Using excessive self-blame after a slip, which reactivates the exact self-hate circuit that fuels the addiction.',
      ],
      figures: [],
    },
    {
      id: 'rw-ch05-sec2',
      sectionNumber: '5.2',
      title: 'Environmental Friction Engineering & The 90-Day Raincoat Protocol',
      subtitle: 'Isolating one target habit, logging trigger telemetry, and outlasting initial amygdala resistance',
      coreMechanism:
        'Attempting to overhaul five life habits simultaneously overwhelms the serial prefrontal cortex and guarantees failure. Sustainable rewiring isolates one moderate, high-leverage habit for a 90-day commitment. Before Day 1, spend several days logging functional telemetry: the exact time of day, caffeine/hunger state, interpersonal cue, and hidden protective payoff (excuse from risk or emotional numbing) that precedes the habit.\n\nWhen execution begins, deploy the 5-Minute Raincoat Protocol: sit in a distraction-free environment, initiate the behavior for five minutes, and expect the automatic self to fire a barrage of rationalizations ("Not today, I’m too agitated, this won’t work"). Instead of arguing with those thoughts, visualize wearing a waterproof raincoat inside a tent while the thoughts pour down harmlessly outside. Once the five-minute threshold passes, striatal momentum typically takes over.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Pre-Launch Trigger Telemetry',
          detail: 'Spend 3–5 days mapping external triggers, physiological states, and hidden payoffs of one target habit.',
        },
        {
          step: '2',
          title: '5-Minute Raincoat Initiation',
          detail: 'Execute the new behavior for five minutes daily while letting resistance thoughts slide off unengaged.',
        },
        {
          step: '3',
          title: '90-Day Calendar Lock',
          detail: 'Track daily repetitions across a 90-day window until the automatic self integrates the pathway.',
        },
      ],
      keyTakeaways: [
        'Willpower behaves like a trainable cortical circuit above the right ear: progressive daily resistance strengthens it, whereas overload causes failure.',
        'Publicly stating your goal to trusted allies adds social commitment and external perspective when internal motivation dips.',
      ],
      commonPitfalls: [
        'Picking your most terrifying life-or-death trauma habit first instead of building self-efficacy on a winnable target.',
        'Turning pre-launch preparation and research into a disguised form of procrastination.',
      ],
      figures: [],
    },
    {
      id: 'rw-ch05-sec3',
      sectionNumber: '5.3',
      title: 'Grief Integration, Intrinsic Self-Determination, and Lifelong Plasticity',
      subtitle: 'Moving from remorse and amends into autonomy, competence, and relational belonging',
      coreMechanism:
        'Permanent stability requires confronting the collateral damage of past self-destructive years without collapsing into toxic shame. You must allow yourself to experience genuine sorrow and grief—mourning missed opportunities, lost time, and hurt loved ones—while making concrete amends where possible and resolving never to repeat the harm. Grieving metabolizes old resentments against parents or unfair circumstances so the automatic self can finally let go of its victim grievance.\n\nMoving forward, protect your brain from mass-culture materialism by anchoring daily life in Self-Determination Theory’s three intrinsic pillars: Autonomy (self-chosen direction), Competence (mastery practice), and Relatedness (honest, unguarded intimacy and community service). Combined with a paradoxical blend of pride in your neuroplastic achievement and humility about how easily the mind fools itself, vigilance becomes an effortless, lifelong habit.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Mourn & Make Amends',
          detail: 'Feel clean sorrow for past missed opportunities and repair harmed relationships without wallowing in self-hate.',
        },
        {
          step: '2',
          title: 'Anchor Intrinsic Pillars',
          detail: 'Audit daily routines to ensure they generate Autonomy, Competence, and Relatedness rather than material display.',
        },
        {
          step: '3',
          title: 'Maintain Humble Vigilance',
          detail: 'Pair pride in your rewired habits with lifelong respect for dormant neural tracks.',
        },
      ],
      keyTakeaways: [
        'Clean remorse motivates amends and forward growth, whereas excessive self-blame paralyzes agency.',
        'Progress toward personal growth and relationships reliably elevates well-being, whereas progress toward materialistic goals yields zero lasting satisfaction.',
      ],
      commonPitfalls: [
        'Skipping the grief stage and trying to paste brittle perfectionism over unacknowledged past losses.',
        'Isolating yourself out of shame instead of joining a community or group that normalizes shared human struggle.',
      ],
      figures: [],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Habit Architecture: Active Addictions vs. Passive Sabotage Protocols',
      description: 'Contrasting goal structure, cue management, slip handling, and identity maintenance across active addictions versus passive behavioral habits.',
      headers: ['Habit Category', 'Goal Calibration', 'Cue & Trigger Strategy', 'Response to a Single Slip', 'Long-Term Maintenance Rule'],
      rows: [
        ['Active Addiction (Alcohol, Drugs, Gambling)', '100% Abstinence (Zero-Slip Boundary)', 'Strict environmental avoidance + Pavlovian disgust pairing', 'Emergency same-hour intervention; block "what-the-hell" cascade', 'Lifelong non-negotiable closure of legacy highway'],
        ['Passive Sabotage (Procrastination, Unassertiveness)', 'Bounded Daily Improvement (No-Fail Micro-Quotas)', '5-Minute Raincoat initiation in distraction-free room', 'Log what got in the way and resume 5-minute drill tomorrow', 'Progressive resistance training of executive focus'],
        ['Perfectionistic Overwork / Burnout', 'Hard Cease-Work Curfew & Recovery Quotas', 'Pre-committed leisure, sleep window, and social calendars', 'Audit inner-critic bullying and restore play/rest balance', 'Anchor self-worth in intrinsic values over status output'],
      ],
      verdictRule:
        'Enforce absolute abstinence and Pavlovian aversion for active chemical or gambling addictions, but use bounded, no-fail micro-quotas (5-minute raincoat drills) for passive habits like procrastination so perfectionism never triggers surrender.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'rw-ch05-scen1',
      title: 'Neutralizing "Short-Timer" Relapse at Month 6 of Sobriety and Health Reform',
      roleAndContext: 'Operations VP who lost 35 pounds and maintained 6 months of sobriety, now feeling restless and tempted during a celebratory conference trip.',
      symptomOrFailure: 'Conscious thoughts whisper "You’ve beaten this—one celebratory drink and a week off workouts won’t hurt," while underlying tension mounts.',
      naiveFixAndWhyItFails: 'Trusting willpower at the hotel bar fails because dormant striatal addiction highways remain fully wired and the "what-the-hell effect" turns one drink into a multi-month relapse.',
      firstPrinciplesSolution: 'Recognize the Undertow and Short-Timer Syndrome; activate pre-rehearsed Pavlovian aversion (recalling the worst hangover morning in visceral detail), text an accountability partner immediately, and book a 7 a.m. workout.',
      measurableOutcome: 'Returned from the conference with zero slips, crossing the 2-year stability threshold with consolidated identity.',
    },
    {
      id: 'rw-ch05-scen2',
      title: 'Executing the 90-Day Raincoat Protocol on Chronic Financial Avoidance',
      roleAndContext: 'Freelance creative director who has avoided opening tax and invoicing spreadsheets for eight months due to shame and overwhelm.',
      symptomOrFailure: 'Every attempt to "spend Saturday fixing all finances" triggers acute chest tightness and an immediate pivot to cleaning or scrolling.',
      naiveFixAndWhyItFails: 'Waiting for a stress-free weekend when she "feels ready" fails because the amygdala flags financial review as an existential shame threat.',
      firstPrinciplesSolution: 'Circle a 90-day calendar target and execute the 5-Minute Raincoat Drill every morning at 9 a.m.: open the spreadsheet for strictly 5 minutes while letting panic thoughts pour outside the tent, stopping as soon as 5 minutes expire during week 1.',
      measurableOutcome: 'Cleared the 8-month invoicing backlog within 18 days and automated weekly 15-minute accounting reviews through Day 90.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'rw-ch05-q1',
        scenarioPrompt:
          'Why did US soldiers in Vietnam statistically suffer a spike in casualties right as their individual discharge date approached ("short-timer syndrome"), and how does this mirror behavioral relapse?',
        options: [
          {
            label: 'A',
            text: 'As victory or relief nears, anxiety about the transition makes people self-conscious and preoccupied, causing them to drop the automatic survival and mindfulness skills that kept them safe.',
            isCorrect: true,
            explanation: 'When reformers think the battle is won—or feel spooked by life without their old habit crutch—they abandon daily vigilance and get pulled under by the Undertow.',
          },
          {
            label: 'B',
            text: 'Long-Term Potentiation automatically reverses itself on the 365th day of any habit.',
            isCorrect: false,
            explanation: 'LTP does not have a self-destruct timer; relapse stems from dropped vigilance and unresolved internal conflict.',
          },
          {
            label: 'C',
            text: 'Soldiers forgot how to walk due to cerebellar atrophy.',
            isCorrect: false,
            explanation: 'The failure was attentional preoccupation overriding automatic survival habits.',
          },
          {
            label: 'D',
            text: 'Short-timer syndrome only occurs when someone has never practiced a habit for more than two days.',
            isCorrect: false,
            explanation: 'It specifically strikes after months of successful effort when the finish line is in sight.',
          },
        ],
      },
      {
        id: 'rw-ch05-q2',
        scenarioPrompt:
          'A person stops drinking or procrastinating for four months and appears productive to colleagues, yet feels increasingly tense, exhausted, and "out on a tightrope"—eventually crashing into an impulsive binge that brings a strange sense of relief. What caused this Undertow failure?',
        options: [
          {
            label: 'A',
            text: 'Identity lag: their outward behavior changed, but their deep assumptive self-image still viewed itself as a weak fraud "faking it," making failure a relief from cognitive dissonance tension.',
            isCorrect: true,
            explanation: 'Unless your core identity and unresolved unconscious guilt update alongside your behavior, acting constructively feels like a precarious act that cannot be sustained.',
          },
          {
            label: 'B',
            text: 'They practiced mindfulness too frequently and shrank their prefrontal cortex.',
            isCorrect: false,
            explanation: 'Mindfulness strengthens prefrontal regulation and helps align conscious and automatic selves.',
          },
          {
            label: 'C',
            text: 'Their brain ran out of glucose because constructive habits burn ten times more energy after month four.',
            isCorrect: false,
            explanation: 'Motor and habit myelination actually lowers the metabolic cost of the new behavior over time.',
          },
          {
            label: 'D',
            text: 'They grieved their past mistakes too honestly.',
            isCorrect: false,
            explanation: 'Honest grieving and amends resolve the inner conflict; refusing to face inner conflict fuels the Undertow.',
          },
        ],
      },
      {
        id: 'rw-ch05-q3',
        scenarioPrompt:
          'On Day 38 of a 90-day habit rewiring campaign, you have a terrible day and relapse into your old behavior for one evening. Why is the "what-the-hell effect" ("I ruined my streak, all 37 days were wasted") neurobiologically false?',
        options: [
          {
            label: 'A',
            text: 'Every single day you practiced physically built and enriched dendritic connections along the new roadbed; a one-day detour onto the old highway does not erase the new neural wiring unless you stop using it.',
            isCorrect: true,
            explanation: 'Learning is physically conserved in synaptic architecture; getting right back on the horse the next morning resumes myelination at near full strength.',
          },
          {
            label: 'B',
            text: 'Relapsing actually speeds up myelination of the healthy habit by 50%.',
            isCorrect: false,
            explanation: 'A slip reinforces the old track, so it must be halted immediately, not celebrated.',
          },
          {
            label: 'C',
            text: 'The brain only counts behavior that occurs on weekends.',
            isCorrect: false,
            explanation: 'Every repetition across all days contributes to Hebbian weight updates.',
          },
          {
            label: 'D',
            text: 'Streaks are stored in the liver rather than the cerebral cortex.',
            isCorrect: false,
            explanation: 'Procedural and habit traces are stored across cortico-striatal synapses.',
          },
        ],
      },
      {
        id: 'rw-ch05-q4',
        scenarioPrompt:
          'When initiating the 5-Minute Raincoat Drill on a dreaded task, your mind immediately shouts, "I’m too agitated right now, this is silly, it’s never going to work." What is the correct protocol?',
        options: [
          {
            label: 'A',
            text: 'Stop working immediately and spend two hours arguing with the thought until you feel 100% peaceful.',
            isCorrect: false,
            explanation: 'Stopping rewards the avoidance circuit, and arguing with automatic noise amplifies it.',
          },
          {
            label: 'B',
            text: 'Visualize sitting inside a tent with a raincoat and umbrella while letting those resistance thoughts pour down outside without engaging them for strictly five minutes as you execute the task.',
            isCorrect: true,
            explanation: 'Detaching from automatic resistance chatter for a bounded 5-minute window allows prefrontal execution to bypass amygdala avoidance.',
          },
          {
            label: 'C',
            text: 'Switch to five other habits at the same time to confuse the automatic self.',
            isCorrect: false,
            explanation: 'Tackling multiple habits simultaneously overloads prefrontal focus.',
          },
          {
            label: 'D',
            text: 'Drink three cups of coffee to increase agitation.',
            isCorrect: false,
            explanation: 'Excess caffeine heightens sympathetic jitteriness and distractibility.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'rw-ch05-fc1',
        category: 'security',
        front: 'What is "The Undertow" in long-term behavior change?',
        back: 'The combination of dormant neural highways, short-timer complacency, identity lag, and unresolved unconscious guilt that pulls 80% of reformers into relapse within two years.',
        mentalHook: 'Symptom control without root-conflict repair triggers the Undertow.',
      },
      {
        id: 'rw-ch05-fc2',
        category: 'optimization',
        front: 'How do you use Pavlovian Aversion to guard against active addiction slips?',
        back: 'Deliberately pair any tempting cue or nostalgic thought of the habit with vivid, visceral recall of its most disgusting, painful consequences.',
        mentalHook: 'Wire the temptation cue directly to disgust and fear.',
      },
      {
        id: 'rw-ch05-fc3',
        category: 'adaptation',
        front: 'Why is the "What-The-Hell Effect" after a single slip an illusion?',
        back: 'Every prior day of healthy practice left physical synaptic traces on your new neural roadbed that remain intact if you resume practice the very next day.',
        mentalHook: 'One detour into the ditch doesn’t demolish the new highway.',
      },
      {
        id: 'rw-ch05-fc4',
        category: 'architecture',
        front: 'How does Goal Calibration differ between active addictions and passive habits like procrastination?',
        back: 'Active addictions require 100% abstinence, whereas passive habits require bounded, no-fail micro-commitments (e.g., 5 focused minutes) to prevent perfectionistic collapse.',
        mentalHook: 'Abstinence for addictions; no-fail micro-quotas for procrastination.',
      },
      {
        id: 'rw-ch05-fc5',
        category: 'evaluation',
        front: 'Why is grieving past self-destructive years essential for permanent stability?',
        back: 'Feeling clean sorrow and making amends metabolizes old resentments and victim paradigms without collapsing into self-hating shame.',
        mentalHook: 'Remorse repairs and moves on; self-blame paralyzes.',
      },
      {
        id: 'rw-ch05-fc6',
        category: 'foundation',
        front: 'What are the three intrinsic psychological needs that sustain lifelong happiness better than materialism?',
        back: 'Autonomy (self-chosen direction), Competence (developing mastery), and Relatedness (honest, connected relationships).',
        mentalHook: 'Autonomy + Competence + Relatedness > Consumer status.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'rw-ch05-feyn1',
        conceptTitle: 'Defeating the Undertow & The What-The-Hell Effect',
        prompt:
          'Explain why someone who successfully loses forty pounds or stays sober for six months is at peak risk of sudden collapse, and how they must align their identity, unresolved emotions, and slip-recovery protocol to stay free.',
        rubricChecklist: [
          'Defines the Undertow and "short-timer syndrome" (dropping survival vigilance near victory).',
          'Explains "dry drunk" symptom suppression when underlying loneliness, anger, or fear of success goes unaddressed.',
          'Describes tightrope identity lag ("I’m just faking it") and how behavioral rehearsal updates self-image.',
          'Dismantles the "what-the-hell effect" by explaining that physical synaptic traces from prior practice are never lost.',
        ],
        modelExplanation:
          'Most reforms collapse between months six and twenty-four because of the Undertow. First, like soldiers nearing the end of a tour, you get overconfident and drop the daily habits that got you there. Second, if you only suppressed the symptom without healing the loneliness or unconscious guilt underneath, internal pressure keeps building. Third, if your deep self-image still sees you as a broken fraud "faking" discipline, relapsing feels like stepping off a exhausting tightrope. To defeat the Undertow, you must grieve past losses honestly, update your identity to own your new competence, pair old cues with visceral disgust, and remember that if a slip happens, your newly built neural roadbed is still there waiting for you the next morning.',
      },
      {
        id: 'rw-ch05-feyn2',
        conceptTitle: 'The 90-Day Single-Habit & 5-Minute Raincoat Protocol',
        prompt:
          'Walk a chronically procrastinating professional through the exact step-by-step neuroplastic blueprint for rewiring a single habit over 90 days.',
        rubricChecklist: [
          'Insists on isolating ONE moderate, winnable habit rather than overloading the prefrontal cortex.',
          'Details the pre-launch telemetry phase (logging triggers, mood, hunger, caffeine, and hidden protective payoffs).',
          'Explains the 5-Minute Raincoat Drill (working in a quiet room while letting resistance thoughts slide off like rain).',
          'Specifies the 90-day commitment window and balancing pride with humble lifelong vigilance.',
        ],
        modelExplanation:
          'Start by picking just one winnable habit so you don’t overload your single-threaded prefrontal cortex. Spend the first few days as a scientist taking notes on your triggers: when does the habit fire, what is your energy or caffeine level, and what hidden payoff—like escaping fear of evaluation—does it provide? Next, circle a date 90 days out on your calendar. Every day, sit in a distraction-free room and execute the 5-Minute Raincoat Drill: start the task for strictly five minutes, and when your automatic self screams that you are too tired or it’s pointless, picture those thoughts as rain sliding off a waterproof tent. After five minutes, keep going if momentum kicks in, or stop guilt-free and repeat tomorrow until 90 days of myelination make the circuit automatic.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'rw-the-undertow',
        label: 'The Undertow Relapse Force',
        category: 'security',
        chapterNumber: 5,
        importance: 1,
        definition: 'Convergent relapse pressure from dormant striatal tracks, short-timer complacency, identity lag, and unresolved unconscious conflict.',
        whyItMatters: 'Explains why 80% of symptom-only behavior changes fail within two years.',
      },
      {
        id: 'rw-raincoat-drill',
        label: '5-Minute Raincoat Protocol',
        category: 'optimization',
        chapterNumber: 5,
        importance: 1,
        definition: 'Initiating a target habit for a bounded 5-minute window while detaching from automatic resistance chatter like rain on a tent.',
        whyItMatters: 'Bypasses initial amygdala avoidance friction to ignite striatal task execution.',
      },
      {
        id: 'rw-identity-alignment',
        label: 'Virtuous Behavioral Identity Lock',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 1,
        definition: 'Updating the assumptive self-image through consistent behavioral rehearsal until constructive action feels authentic rather than faked.',
        whyItMatters: 'Eliminates the "tightrope tension" that makes people relapse out of relief.',
      },
      {
        id: 'rw-pavlovian-aversion',
        label: 'Pavlovian Cue Aversion',
        category: 'security',
        chapterNumber: 5,
        importance: 2,
        definition: 'Conditioning automatic disgust and fear responses onto legacy addiction cues by rehearsing their worst consequences.',
        whyItMatters: 'Neutralizes nostalgic craving spikes when encountering unexpected triggers.',
      },
      {
        id: 'rw-what-the-hell-fallacy',
        label: 'What-The-Hell Effect Dismantling',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 2,
        definition: 'Recognition that prior days of synaptic potentiation remain physically intact after a single slip, enabling immediate next-day recovery.',
        whyItMatters: 'Prevents a minor one-day lapse from cascading into total abandonment of a 90-day campaign.',
      },
      {
        id: 'rw-intrinsic-pillars',
        label: 'Autonomy, Competence & Relatedness',
        category: 'foundation',
        chapterNumber: 5,
        importance: 3,
        definition: 'Self-Determination Theory’s three non-materialistic pillars of sustainable human flourishing and dopamine stability.',
        whyItMatters: 'Replaces hollow consumerism with self-reinforcing meaning and social belonging.',
      },
    ],
    edges: [
      {
        source: 'rw-identity-alignment',
        target: 'rw-the-undertow',
        relationship: 'mitigates',
        explanation: 'Aligning core self-image with new behavior removes the tightrope dissonance that powers the Undertow.',
      },
      {
        source: 'rw-pavlovian-aversion',
        target: 'rw-the-undertow',
        relationship: 'mitigates',
        explanation: 'Pairing legacy temptation cues with visceral disgust prevents dormant neural tracks from capturing attention.',
      },
      {
        source: 'rw-raincoat-drill',
        target: 'rw-identity-alignment',
        relationship: 'prerequisite_for',
        explanation: 'Daily 5-minute no-fail executions accumulate the competence evidence required to update self-image.',
      },
      {
        source: 'rw-what-the-hell-fallacy',
        target: 'rw-raincoat-drill',
        relationship: 'optimizes',
        explanation: 'Rejecting all-or-nothing streak shame allows immediate next-day resumption of the 90-day protocol.',
      },
      {
        source: 'rw-intrinsic-pillars',
        target: 'rw-identity-alignment',
        relationship: 'optimizes',
        explanation: 'Anchoring daily life in autonomy, competence, and relatedness stabilizes the rewired identity long-term.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 5,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes: 'Verified 100% coverage of The Undertow, Short-Timer Syndrome, Exercise 14 (90-Day / 5-Minute Raincoat Protocol), Grief/Amends, and Intrinsic Self-Determination.',
  },
};
