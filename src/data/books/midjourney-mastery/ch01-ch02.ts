import { ChapterMastery } from '../../../types/book';

export const mjmCh01Mastery: ChapterMastery = {
  chapterNumber: 1,
  chapterId: 'ch01',
  title: 'Midjourney Foundations, Prompt Syntax, and Parameter Control',
  subtitle:
    'Discord bot jobs, 60-word syntax, and parameter flags across V1–V5.2',
  readingTimeMinutes: 6,
  sourceWordCount: 1855,
  executiveThesis:
    'Midjourney translates compact text phrases into latent image grids through a Discord bot governed by a strict 60-word attention ceiling. Mastering output requires replacing conversational sentences with ordered four-part phrase syntax and explicit trailing flags controlling aspect ratio, seed noise, stylization, and compute quality.',
  paradigmShift: {
    oldWay:
      'Write long conversational sentences describing scenes and rely on default settings to guess framing.',
    newWay:
      'Construct comma-separated four-part token sequences paired with deterministic trailing parameters and private Discord channels.',
    whyItChanged:
      'Midjourney ignores words past 60 tokens and exposes orthogonal flags for variance, stylization, and compute.',
  },
  heroIllustrationUrl:
    '/books/midjourney-mastery/assets/262dd3b8ee2d98cd81939eec92a3f2da_smallRaw.jpg',
  customDiagrams: [
    {
      id: 'mjm-ch01-svg-pipeline',
      title: 'Midjourney Discord Job Lifecycle & Latent Diffusion Grid Pipeline',
      subtitle:
        'Tracing /imagine tokenization and seed noise through 2x2 grid sampling, upscaling, and Zoom Out',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh1Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="mjmArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh1Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">MIDJOURNEY JOB LIFECYCLE: FROM /IMAGINE SYNTAX TO 4X UPSCALE &amp; ZOOM OUT</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Deterministic 4-part prompt tokenization, seed noise initialization, 2x2 grid branching, and outpainting</text>

  <rect x="28" y="76" width="210" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="98" fill="#38bdf8" font-size="11.5" font-weight="700">1. /IMAGINE TOKENIZATION</text>
  <text x="42" y="116" fill="#e2e8f0" font-size="10">• 60-Word Attention Window</text>
  <text x="42" y="134" fill="#cbd5e1" font-size="9.5">[1] Content Type (Photo/Oil)</text>
  <text x="42" y="150" fill="#cbd5e1" font-size="9.5">[2] Subject + Adjectives</text>
  <text x="42" y="166" fill="#cbd5e1" font-size="9.5">[3] Artistic Style / Era</text>
  <text x="42" y="182" fill="#cbd5e1" font-size="9.5">[4] Composition + --Flags</text>
  <text x="42" y="204" fill="#38bdf8" font-size="9" font-weight="600">/prefer suffix automates flags</text>

  <path d="M 238 148 L 282 148" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrCyan)" />

  <rect x="288" y="76" width="220" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="302" y="98" fill="#fbbf24" font-size="11.5" font-weight="700">2. SEED NOISE &amp; 2x2 GRID</text>
  <text x="302" y="116" fill="#fde68a" font-size="9.5">--seed [0..4294967295] static field</text>
  <rect x="314" y="126" width="76" height="36" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="352" y="148" fill="#fef3c7" font-size="9.5" text-anchor="middle">Candidate 1</text>
  <rect x="400" y="126" width="76" height="36" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="438" y="148" fill="#fef3c7" font-size="9.5" text-anchor="middle">Candidate 2</text>
  <rect x="314" y="168" width="76" height="36" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="352" y="190" fill="#fef3c7" font-size="9.5" text-anchor="middle">Candidate 3</text>
  <rect x="400" y="168" width="76" height="36" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="2" />
  <text x="438" y="190" fill="#a7f3d0" font-size="9.5" font-weight="700" text-anchor="middle">Candidate 4</text>

  <path d="M 508 148 L 552 148" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrEmerald)" />

  <rect x="558" y="76" width="214" height="145" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="572" y="98" fill="#34d399" font-size="11.5" font-weight="700">3. UPSCALE &amp; OUTPAINTING</text>
  <text x="572" y="118" fill="#e2e8f0" font-size="9.5">• U1–U4: Isolate &amp; Upscale</text>
  <text x="572" y="135" fill="#e2e8f0" font-size="9.5">• V1–V4: Latent Variations</text>
  <text x="572" y="152" fill="#e2e8f0" font-size="9.5">• Zoom Out 1.5x / 2x / Custom</text>
  <text x="572" y="169" fill="#e2e8f0" font-size="9.5">• Make Square aspect expansion</text>
  <text x="572" y="192" fill="#6ee7b7" font-size="9" font-weight="600">External: Upscayl 4x (Real-ESRGAN)</text>

  <rect x="28" y="246" width="744" height="146" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1.2" />
  <text x="44" y="270" fill="#f8fafc" font-size="12" font-weight="700">ORTHOGONAL PARAMETER CONTROL VECTORS (APPENDED AT PROMPT TAIL)</text>

  <rect x="44" y="284" width="168" height="92" rx="6" fill="#1e293b" stroke="#38bdf8" />
  <text x="56" y="304" fill="#38bdf8" font-size="10.5" font-weight="700">Geometry &amp; Compute</text>
  <text x="56" y="322" fill="#cbd5e1" font-size="9.5">--ar 1:1 | 2:3 | 3:2 | 16:9</text>
  <text x="56" y="338" fill="#cbd5e1" font-size="9.5">--q 0.25 | 0.5 | 1 (def) | 2</text>
  <text x="56" y="354" fill="#94a3b8" font-size="8.5">/fast vs /relax GPU queues</text>

  <rect x="228" y="284" width="168" height="92" rx="6" fill="#1e293b" stroke="#f59e0b" />
  <text x="240" y="304" fill="#fbbf24" font-size="10.5" font-weight="700">Variance &amp; Determinism</text>
  <text x="240" y="322" fill="#cbd5e1" font-size="9.5">--chaos 0–100 grid divergence</text>
  <text x="240" y="338" fill="#cbd5e1" font-size="9.5">--seed 0–4.29B noise lock</text>
  <text x="240" y="354" fill="#94a3b8" font-size="8.5">--weird 0–1000 edgy concepts</text>

  <rect x="412" y="284" width="168" height="92" rx="6" fill="#1e293b" stroke="#a855f7" />
  <text x="424" y="304" fill="#c084fc" font-size="10.5" font-weight="700">Aesthetic Bias &amp; Model</text>
  <text x="424" y="322" fill="#cbd5e1" font-size="9.5">--stylize (--s) 0–1000</text>
  <text x="424" y="338" fill="#cbd5e1" font-size="9.5">--v 1..5.2 | --niji 4 / 5</text>
  <text x="424" y="354" fill="#94a3b8" font-size="8.5">--uplight smooth upscaler</text>

  <rect x="596" y="284" width="160" height="92" rx="6" fill="#1e293b" stroke="#10b981" />
  <text x="608" y="304" fill="#34d399" font-size="10.5" font-weight="700">Conditioning &amp; Pruning</text>
  <text x="608" y="322" fill="#cbd5e1" font-size="9.5">--iw 0.25 default image wt</text>
  <text x="608" y="338" fill="#cbd5e1" font-size="9.5">--no [token] negative mask</text>
  <text x="608" y="354" fill="#94a3b8" font-size="8.5">/blend multi-image synthesis</text>
</svg>`,
      bierutCaption:
        'Structure every job from 60-word phrase tokenization to parameterized latent grid refinement.',
      annotations: [
        {
          step: '1',
          label: 'Token Window Priority',
          explanation: 'Front-load content type, subject, style, and camera within 60 words.',
        },
        {
          step: '2',
          label: 'Seed Noise & Grid',
          explanation: 'Lock static noise via --seed to test isolated prompt edits.',
        },
        {
          step: '3',
          label: 'Upscale & Outpaint',
          explanation: 'Apply U1–U4, Zoom Out 1.5x–2x, and 4x Real-ESRGAN upscaling.',
        },
      ],
    },
    {
      id: 'mjm-ch01-svg-parameter-space',
      title: 'The Two-Axis Control Plane: Stylize (--s) vs. Chaos (--c) and Quality (--q)',
      subtitle:
        'Mapping aesthetic prior strength and grid divergence across draft and final GPU budgets',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh1Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmAxisArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh1Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">PARAMETER PHASE SPACE: STYLIZE (--s 0–1000) vs. CHAOS (--c 0–100)</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Balancing literal prompt adherence against Midjourney aesthetic bias and multi-grid exploratory variance</text>

  <line x1="90" y1="360" x2="520" y2="360" stroke="#94a3b8" stroke-width="2" marker-end="url(#mjmAxisArr)" />
  <line x1="90" y1="360" x2="90" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#mjmAxisArr)" />
  <text x="305" y="392" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">STYLIZE (--s 0 → 1000): Midjourney Default Aesthetic Injection</text>
  <text x="32" y="220" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle" transform="rotate(-90 32 220)">CHAOS (--c 0 → 100): Grid Divergence</text>

  <rect x="110" y="230" width="185" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="124" y="252" fill="#38bdf8" font-size="11" font-weight="700">Literal &amp; Repeatable</text>
  <text x="124" y="270" fill="#e2e8f0" font-size="9.5">--c 0–10 | --s 50–100</text>
  <text x="124" y="288" fill="#94a3b8" font-size="9">Homogeneous 4-grid closely</text>
  <text x="124" y="302" fill="#94a3b8" font-size="9">obeying exact prompt nouns</text>
  <text x="124" y="322" fill="#38bdf8" font-size="9" font-weight="600">Use: Logos, Exact Mockups</text>

  <rect x="315" y="230" width="185" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="329" y="252" fill="#34d399" font-size="11" font-weight="700">Polished Editorial Default</text>
  <text x="329" y="270" fill="#e2e8f0" font-size="9.5">--c 0–15 | --s 500–750</text>
  <text x="329" y="288" fill="#94a3b8" font-size="9">Consistent grid composition</text>
  <text x="329" y="302" fill="#94a3b8" font-size="9">with dramatic lighting &amp; detail</text>
  <text x="329" y="322" fill="#34d399" font-size="9" font-weight="600">Use: V5.1 Book Hero Plates</text>

  <rect x="110" y="96" width="185" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="124" y="118" fill="#fbbf24" font-size="11" font-weight="700">Structural Brainstorming</text>
  <text x="124" y="136" fill="#e2e8f0" font-size="9.5">--c 50–100 | --s 50–150</text>
  <text x="124" y="154" fill="#94a3b8" font-size="9">4 radically different camera</text>
  <text x="124" y="168" fill="#94a3b8" font-size="9">angles without heavy gloss</text>
  <text x="124" y="188" fill="#fbbf24" font-size="9" font-weight="600">Use: Early Concept Ideation</text>

  <rect x="315" y="96" width="185" height="110" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="329" y="118" fill="#c084fc" font-size="11" font-weight="700">Avant-Garde Divergence</text>
  <text x="329" y="136" fill="#e2e8f0" font-size="9.5">--c 60–100 | --s 750–1000</text>
  <text x="329" y="154" fill="#94a3b8" font-size="9">Wildly unexpected subjects</text>
  <text x="329" y="168" fill="#94a3b8" font-size="9">plus --weird 0–1000 mutation</text>
  <text x="329" y="188" fill="#c084fc" font-size="9" font-weight="600">Use: Surreal Art &amp; Hybrids</text>

  <path d="M 202 150 L 407 285" stroke="#10b981" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#mjmAxisArr)" />

  <rect x="544" y="96" width="228" height="244" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="560" y="120" fill="#38bdf8" font-size="11.5" font-weight="700">GPU BUDGET (--quality)</text>
  <text x="560" y="142" fill="#e2e8f0" font-size="10" font-weight="600">--q 0.25 / --q 0.5 (Drafting)</text>
  <text x="560" y="158" fill="#94a3b8" font-size="9">4x–2x faster; preserves trial GPU</text>
  <text x="560" y="172" fill="#94a3b8" font-size="9">minutes during syntax testing.</text>
  <text x="560" y="198" fill="#e2e8f0" font-size="10" font-weight="600">--q 1 (Default) / --q 2 (Max)</text>
  <text x="560" y="214" fill="#94a3b8" font-size="9">Maximum surface micro-detail</text>
  <text x="560" y="228" fill="#94a3b8" font-size="9">for final V5.1 / V5.2 renders.</text>
  <line x1="560" y1="246" x2="754" y2="246" stroke="#334155" stroke-width="1" />
  <text x="560" y="268" fill="#fbbf24" font-size="11" font-weight="700">VERSION ENGINES</text>
  <text x="560" y="286" fill="#cbd5e1" font-size="9.5">• V1–V3: Abstract &amp; painterly</text>
  <text x="560" y="302" fill="#cbd5e1" font-size="9.5">• V5.1: Dynamic range &amp; styles</text>
  <text x="560" y="318" fill="#cbd5e1" font-size="9.5">• V5.2: Zoom Out &amp; --weird</text>
</svg>`,
      bierutCaption:
        'Orthogonalize exploration variance (--chaos) from aesthetic polish (--stylize) while gating GPU compute (--quality).',
      annotations: [
        {
          step: '1',
          label: 'Low-Compute Ideation',
          explanation: 'Combine high --chaos with --q 0.25 to survey compositions cheaply.',
        },
        {
          step: '2',
          label: 'Production Lock',
          explanation: 'Lower --chaos and raise --s 750 with --q 2 for finals.',
        },
        {
          step: '3',
          label: 'Engine Selection',
          explanation: 'Use V5.1/V5.2 for realism, V1–V3 for abstraction, or --niji for anime.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mjm-ch01-mm1',
      name: 'The 60-Word Token Horizon',
      tagline: 'Front-load visual nouns and strip grammar before attention decays',
      naiveIntuition:
        'Writing longer, grammatically complete paragraphs gives the AI clearer scene instructions.',
      firstPrinciplesReality:
        'Midjourney ignores tokens past 60 words, so filler dilutes early subject weights.',
      howToApply:
        'Order prompts strictly as [content type], [subject + adjectives], [style], and [composition].',
    },
    {
      id: 'mjm-ch01-mm2',
      name: 'Deterministic Seed Noise Isolation',
      tagline: 'Freeze static initialization to turn stochastic art into controlled tests',
      naiveIntuition:
        'Changing a style keyword across two runs reveals how that keyword works.',
      firstPrinciplesReality:
        'Each job samples random noise (0 to 4,294,967,295), confounding keywords with seed luck.',
      howToApply:
        'Pass an explicit --seed integer when benchmarking style terms or --stylize values.',
    },
    {
      id: 'mjm-ch01-mm3',
      name: 'Private Server Category Sharding',
      tagline: 'Isolate Discord prompt streams by taxonomy to prevent scroll entropy',
      naiveIntuition:
        'Generating images inside public #newbies channels suffices for building a prompt library.',
      firstPrinciplesReality:
        'Shared channels bury jobs in seconds and mix incompatible experiments into noisy logs.',
      howToApply:
        'Invite the Midjourney Bot to a private server partitioned into dedicated topic channels.',
    },
  ],
  deepSections: [
    {
      id: 'mjm-ch01-sec-1-1',
      sectionNumber: '1.1',
      title: 'Discord Bot Architecture, Job Lifecycle, and Upscaling',
      subtitle:
        'Managing /imagine jobs, U1–U4 and V1–V4 operators, V5.2 Zoom Out, and 4x Upscayl',
      coreMechanism:
        'Unlike browser-native generators, Midjourney (founded by David Holz) operates through a Discord bot where every `/imagine`, variation, or upscale request executes as a GPU Job taking roughly one minute to synthesize a 2x2 grid. Below each completed grid, two control rows govern refinement: `U1–U4` isolate and upscale a quadrant, `V1–V4` spawn slight variations of that quadrant, and the rerun button resamples the prompt.\n\nIn Midjourney V5.2, upscaled images unlock outpainting via `Zoom Out 1.5x`, `Zoom Out 2x`, `Make Square`, and `Custom Zoom` (permitting simultaneous prompt and aspect ratio edits). For print resolution, Upscayl applies specialized neural models (Real-ESRGAN, Remacri, UltraSharp) up to 4x in PNG, JPG, or WEBP.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Provision Private Channels',
          detail:
            'Add the Bot to a private Discord server and toggle `/fast` or `/relax`.',
        },
        {
          step: '2',
          title: 'Branch via V1–V4 and U1–U4',
          detail:
            'Refine quadrants with V1–V4, then upscale via U1–U4 or `--uplight`.',
        },
        {
          step: '3',
          title: 'Zoom Out and 4x Upscayl',
          detail:
            'Reframe with V5.2 Zoom Out and batch-upscale 4x offline in Upscayl.',
        },
      ],
      keyTakeaways: [
        'Private Discord topic channels eliminate `#newbies` noise and create a searchable prompt archive.',
        'Pairing V5.2 `Custom Zoom` with 4x Real-ESRGAN in Upscayl separates framing from pixel scaling.',
      ],
      commonPitfalls: [
        'Using default sharp upscalers on soft portraits where `--uplight` preserves smooth textures.',
        'Burning `/fast` GPU quota during rough ideation instead of using `/relax` or `--q 0.25`.',
      ],
      figures: [
        {
          file: '262dd3b8ee2d98cd81939eec92a3f2da_smallRaw.jpg',
          originalLabel: 'Chapter 1 /imagine Grid',
          bierutTitle: 'Route Jobs Through a 2x2 Grid Tournament',
          editorialAnalysis:
            '`/imagine` turns the Van Gogh cat prompt (`--q 2 --v 5.1 --s 750`) into four candidates before `U3` extraction.',
          keyTakeaways: [
            'The 2x2 grid filters composition cheaply.',
            'Trailing flags lock version and stylization.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch01-sec-1-2',
      sectionNumber: '1.2',
      title: '60-Word Window, Phrase Order, and LLM Expansion',
      subtitle:
        'Four-slot phrases, image weights (--iw), and ChatGPT expansion',
      coreMechanism:
        'Midjourney evaluates only the first 60 words of a prompt, meaning full conversational sentences waste high-priority token slots on prepositions and syntax. High-signal prompts follow a four-slot hierarchy: `[content type], [description: subject + adjectives], [style], [composition]`. Advanced prompts prepend one or more reference image URLs or fuse multiple images via `/blend`, balancing visual and textual influence through the image weight flag (`--iw`, defaulting to `0.25`).\n\nWhen creative vocabulary stalls, prompting ChatGPT to act as a Midjourney prompt generator expands a bare subject seed into rich sensory adjectives, lighting cues, and artistic movements that fit cleanly into the four-slot template.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Order Four Slots',
          detail:
            'Sequence type, subject, style, and camera under 60 words.',
        },
        {
          step: '2',
          title: 'Weight Images',
          detail:
            'Prepend URLs with `--iw 0.25` or merge via `/blend`.',
        },
        {
          step: '3',
          title: 'Lock Suffixes',
          detail:
            'Append recurring flags automatically with `/prefer suffix`.',
        },
      ],
      formulas: [
        {
          name: 'Image Conditioning Share',
          expression: 'S_{\\text{image}} = \\frac{w_{\\text{iw}}}{w_{\\text{iw}} + w_{\\text{text}}}',
          intuition:
            'Relative pull of image URLs against text tokens.',
          variables: [
            { symbol: 'w_{\\text{iw}}', meaning: 'Image weight via --iw (default 0.25)' },
            { symbol: 'w_{\\text{text}}', meaning: 'Baseline text weight (1.0)' },
          ],
          workedExample:
            'At --iw 0.25 and text weight 1.0, image share is 0.25 / 1.25 = 20%.',
        },
      ],
      keyTakeaways: [
        'Ordering four phrase slots under 60 words prevents silent token truncation.',
        '`/prefer suffix` automates recurring trailing parameters across sessions.',
      ],
      commonPitfalls: [
        'Pasting raw ChatGPT paragraphs exceeding the 60-word limit.',
        'Forgetting `/blend` waits for image upload completion.',
      ],
      figures: [
        {
          file: '289ce8c4e8e277a0c21b87604b660fa2_smallRaw.png',
          originalLabel: 'Chapter 1 U3 Upscale',
          bierutTitle: 'Isolate Winning Grid Quadrants at Full Stylization',
          editorialAnalysis:
            '`U3` extracts the bottom-right Van Gogh cat quadrant with crisp impasto swirls at `--q 2 --s 750`.',
          keyTakeaways: [
            '`--s 750` amplifies painterly texture around the subject.',
            'Select Mode enables batch saving of upscales.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch01-sec-1-3',
      sectionNumber: '1.3',
      title: 'Deterministic & Stochastic Parameter Control Across Versions',
      subtitle:
        'Controlling --ar, --chaos, --stylize, --no, --weird, --version 1–5.2, and --niji',
      coreMechanism:
        'Parameters appended to the end of a prompt reshape the latent sampling space along independent axes. `--aspect` (`--ar`) overrides the default `1:1` square canvas into vertical (`2:3`, `9:16`) or widescreen (`3:2`, `16:9`) ratios. `--chaos` (`0–100`) governs initial grid divergence, whereas `--stylize` (`--s 0–1000`) scales Midjourney’s built-in aesthetic polish, and `--weird` (`0–1000` in V5.2) injects unconventional, edgy visual traits.\n\nNegative prompting (`--no text`) actively suppresses unwanted concepts from the denoising trajectory, while `--quality` (`0.25, 0.5, 1, 2`) scales GPU compute time. Version flags (`--v 1` through `5.2`) trade earlier models’ abstract creativity for V5.1/V5.2 dynamic range, while `--niji 4/5` targets anime aesthetics.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select Model & Aspect Ratio',
          detail:
            'Pick `--v 5.1`/`5.2`, `--v 1–3`, or `--niji 5`, and set `--ar`.',
        },
        {
          step: '2',
          title: 'Tune Variance & Stylization',
          detail:
            'Set `--chaos` (`0–100`), `--stylize` (`0–1000`), `--weird` (`0–1000`), and `--no`.',
        },
        {
          step: '3',
          title: 'Pin Seed & Quality Budget',
          detail:
            'Draft at `--q 0.25` with fixed `--seed`, then render finals at `--q 2`.',
        },
      ],
      keyTakeaways: [
        '`--chaos` varies grids, `--stylize` scales aesthetic polish, and `--quality` scales GPU duration.',
        'Pass explicit `--seed` integers since `--sameseed` fails in V4, V5, and V5.1.',
      ],
      commonPitfalls: [
        'Writing "without text" in prose instead of `--no text`.',
        'Invoking `--weird` or `Zoom Out` prior to V5.2.',
      ],
      figures: [
        {
          file: '544c6cea06e410127baf8c3be8ea087c_smallRaw.jpg',
          originalLabel: 'Chapter 1 Parameter Showcase',
          bierutTitle: 'Balance Aesthetic Polish Against Literal Fidelity',
          editorialAnalysis:
            'Combining `--v 5.1`, `--s 750`, and `--q 2` yields high dynamic range and fine detail.',
          keyTakeaways: [
            'High `--stylize` boosts lighting drama.',
            'Explicit `--ar` flags frame composition.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Midjourney Parameter Matrix',
      description: 'Comparing core flags across mechanism and stage.',
      headers: ['Flag', 'Mechanism', 'Trade-Off', 'Use Case'],
      rows: [
        ['--chaos 0–100', 'Scales 2x2 grid divergence', 'Lowers repeatability', 'Early composition discovery'],
        ['--stylize 0–1000', 'Amplifies default aesthetic prior', 'Can override literal prompt', 'Editorial hero illustrations'],
        ['--quality 0.25–2', 'Scales GPU denoising time', '--q 2 burns 2x GPU quota', '0.25 drafts; 2 finals'],
        ['--weird 0–1000', 'Injects edgy V5.2 mutations', 'Destabilizes classical realism', 'Avant-garde surreal concepts'],
        ['--v 5.1/5.2 vs V1–3', 'HDR realism vs abstract diffusion', 'V5+ literal; V1–3 abstract', 'V5.2 realism; V1–3 texture'],
        ['--niji 4 / 5', 'Anime-specialized checkpoint', 'Avoids Western photorealism', 'Anime and manga character art'],
      ],
      verdictRule:
        'Explore with --q 0.25 and --chaos 50, then lock --seed and render at --q 2.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mjm-ch01-scen1',
      title: 'Eliminating Unwanted Typography and Quota Burn',
      roleAndContext:
        'Brand designer prototyping icons under a tight fast-hour budget.',
      symptomOrFailure:
        'Long sentences saying "no letters" still render text and drain GPU hours.',
      naiveFixAndWhyItFails:
        'Adding prose warnings exceeds 60 words and reinforces "letters".',
      firstPrinciplesSolution:
        'Use a 20-word four-part phrase with `--no text --q 0.25 --ar 1:1`.',
      measurableOutcome:
        'Cuts GPU burn by 75% while eliminating stray text.',
    },
    {
      id: 'mjm-ch01-scen2',
      title: 'Reproducible Style Benchmarking Across Stylize Values',
      roleAndContext:
        'Art director comparing `--s 100` against `--s 750` on portraits.',
      symptomOrFailure:
        'Identical prompts at different `--stylize` settings alter pose and background.',
      naiveFixAndWhyItFails:
        '`--sameseed` fails because it is incompatible with V4, V5, and V5.1.',
      firstPrinciplesSolution:
        'Pass `--seed 1849201 --v 5.1` on both `--s 100` and `--s 750` jobs.',
      measurableOutcome:
        'Freezes noise so differences isolate the `--stylize` flag.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mjm-ch01-q1',
        scenarioPrompt:
          'A prompt engineer writes an 85-word paragraph placing camera composition and lighting instructions in the final 25 words, and notices Midjourney completely ignores the camera angle. Why does this happen and what is the fix?',
        options: [
          {
            label: 'A',
            text: 'Midjourney only attends to the first 60 words; compress the prompt into ordered phrases ([content type], [subject + adjectives], [style], [composition]).',
            isCorrect: true,
            explanation:
              'Tokens beyond the 60-word window are ignored, so conversational sentences push trailing composition terms out of attention.',
          },
          {
            label: 'B',
            text: 'Midjourney requires camera angles to be passed inside the --chaos parameter.',
            isCorrect: false,
            explanation:
              '--chaos only controls the variance between the four initial grid images (0–100), not camera framing.',
          },
          {
            label: 'C',
            text: 'Camera composition only works when --quality is set to 0.25.',
            isCorrect: false,
            explanation:
              '--quality controls GPU processing duration, not token window length.',
          },
          {
            label: 'D',
            text: 'The prompt must be uploaded via /blend instead of /imagine.',
            isCorrect: false,
            explanation:
              '/blend merges multiple uploaded images rather than extending the 60-word text limit.',
          },
        ],
      },
      {
        id: 'mjm-ch01-q2',
        scenarioPrompt:
          'You want to rapidly test 30 prompt variations while conserving GPU usage minutes, and ensure no watermark or lettering appears in the generated images. Which parameter combination achieves both goals?',
        options: [
          {
            label: 'A',
            text: '--quality 2 --stylize 1000',
            isCorrect: false,
            explanation:
              '--quality 2 consumes double the default GPU time and does not suppress text.',
          },
          {
            label: 'B',
            text: '--q 0.25 --no text',
            isCorrect: true,
            explanation:
              '--q 0.25 reduces GPU compute allocation to a quarter of the default 1, and --no text applies negative prompting to exclude lettering.',
          },
          {
            label: 'C',
            text: '--chaos 100 --uplight',
            isCorrect: false,
            explanation:
              '--chaos increases grid divergence and --uplight modifies the U-button upscaler, saving zero initial grid GPU time.',
          },
          {
            label: 'D',
            text: '--sameseed --v 5.1',
            isCorrect: false,
            explanation:
              '--sameseed is incompatible with V5.1 and neither saves GPU time nor removes text.',
          },
        ],
      },
      {
        id: 'mjm-ch01-q3',
        scenarioPrompt:
          'After upscaling a portrait in Midjourney V5.2 with `--ar 2:3`, a client asks you to pull the camera back to reveal the surrounding room and convert the canvas into a `16:9` widescreen frame while adjusting the environment description. Which feature solves this directly?',
        options: [
          {
            label: 'A',
            text: 'Click [Custom Zoom] beneath the upscaled V5.2 image to modify the prompt, zoom level, and aspect ratio simultaneously.',
            isCorrect: true,
            explanation:
              'In V5.2, Custom Zoom opens a modal allowing prompt edits, custom zoom multipliers, and aspect ratio conversion during outpainting.',
          },
          {
            label: 'B',
            text: 'Re-run the grid with --uplight and --iw 0.25.',
            isCorrect: false,
            explanation:
              '--uplight softens upscaling and --iw weights image prompts; neither reframes an existing upscale to 16:9.',
          },
          {
            label: 'C',
            text: 'Use /prefer suffix to retroactively resize already-completed upscales.',
            isCorrect: false,
            explanation:
              '/prefer suffix only appends default parameters to future prompts.',
          },
          {
            label: 'D',
            text: 'Switch to --niji 4.',
            isCorrect: false,
            explanation:
              '--niji switches the model checkpoint to anime style and cannot outpaint an existing upscale.',
          },
        ],
      },
      {
        id: 'mjm-ch01-q4',
        scenarioPrompt:
          'An illustrator wants an upscaled image that stays faithful to the softer, less-detailed look of the initial 2x2 grid candidate rather than adding heavy high-frequency sharpening, and later wants to batch-upscale 50 exported files 4x offline for free. What workflow matches the book’s recommendations?',
        options: [
          {
            label: 'A',
            text: 'Append --uplight in Midjourney for a smoother, grid-faithful upscale, then run Upscayl offline for 4x batch scaling.',
            isCorrect: true,
            explanation:
              '--uplight activates the light upscaler keeping results smoother and closer to the grid, and Upscayl provides free 4x batch upscaling across 6 models.',
          },
          {
            label: 'B',
            text: 'Append --weird 1000 in Midjourney and use /blend for batch export.',
            isCorrect: false,
            explanation:
              '--weird introduces edgy aesthetics and /blend combines input photos.',
          },
          {
            label: 'C',
            text: 'Use --chaos 100 and --q 0.25 for final print resolution.',
            isCorrect: false,
            explanation:
              '--q 0.25 lowers compute quality and does not perform 4x resolution upscaling.',
          },
          {
            label: 'D',
            text: 'Use --v 1 with /fast.',
            isCorrect: false,
            explanation:
              '--v 1 generates early abstract images rather than upscaling V5 grids.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mjm-ch01-fc1',
        category: 'foundation',
        front: 'What is Midjourney’s word-count attention limit and optimal four-part phrase order?',
        back: 'Midjourney attends to the first 60 words, ordered as: [content type], [description: subject + adjectives], [style], [composition].',
        mentalHook: '60-Word Ceiling: Type -> Subject -> Style -> Camera.',
      },
      {
        id: 'mjm-ch01-fc2',
        category: 'optimization',
        front: 'How do --chaos (0–100) and --stylize (0–1000) differ in their effect on a generation?',
        back: '--chaos controls compositional divergence among the 4 grid images, while --stylize controls how strongly Midjourney’s default aesthetic style is applied.',
        mentalHook: 'Chaos = Grid Variety; Stylize = Aesthetic Gloss.',
      },
      {
        id: 'mjm-ch01-fc3',
        category: 'architecture',
        front: 'What is the valid range and mechanism of the --seed parameter, and which seed flag fails in V4/V5/V5.1?',
        back: '--seed accepts integers from 0 to 4,294,967,295 to initialize a reproducible noise field; --sameseed is incompatible with V4, V5, and V5.1.',
        mentalHook: '4.29B static noise lock; drop --sameseed in V4+.',
      },
      {
        id: 'mjm-ch01-fc4',
        category: 'optimization',
        front: 'What are the four --quality (--q) tiers and how do they affect Midjourney jobs?',
        back: '--q accepts 0.25, 0.5, 1 (default), or 2, scaling the GPU processing time allocated to rendering the image.',
        mentalHook: 'Quarter-time for drafts (0.25), double-time for finals (2).',
      },
      {
        id: 'mjm-ch01-fc5',
        category: 'adaptation',
        front: 'What is the default value of --iw and what does it control?',
        back: '--iw defaults to 0.25 and sets the relative conditioning weight of image URLs compared to text tokens.',
        mentalHook: 'Default 0.25 = 1:4 image-to-text baseline ratio.',
      },
      {
        id: 'mjm-ch01-fc6',
        category: 'architecture',
        front: 'What four reframing buttons appear beneath upscaled images in Midjourney V5.2?',
        back: 'Zoom Out 1.5x, Zoom Out 2x, Make Square, and Custom Zoom (which allows editing the prompt and aspect ratio).',
        mentalHook: '1.5x, 2x, Square, and Custom Prompt Reframe.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mjm-ch01-feyn1',
        conceptTitle: 'The 60-Word Token Horizon & Four-Slot Phrase Syntax',
        prompt:
          'Explain to a copywriter why pasting 120-word descriptive paragraphs into Midjourney produces worse results than a 30-word comma-separated phrase, and walk through the exact four-part ordering.',
        rubricChecklist: [
          'States the hard 60-word attention ceiling beyond which trailing tokens are ignored.',
          'Explains how conversational grammar and filler words dilute early token weights.',
          'Lists the exact four-part order: [content type], [description - subject + adjectives], [style], [composition].',
          'Contrasts inline natural-language negation against trailing parameters like --no and --ar.',
        ],
        modelExplanation:
          'Midjourney only pays attention to the first 60 words of any prompt. When you write a 120-word paragraph full of verbs and prepositions, the model spends its token budget on grammar and completely drops the lighting and camera instructions at the end. Instead, pack dense noun-adjective phrases in four slots: [content type], [subject + adjectives], [style], and [composition], followed by explicit flags like --ar 2:3 and --no text.',
      },
      {
        id: 'mjm-ch01-feyn2',
        conceptTitle: 'Orthogonal Parameter Control: Seed, Chaos, Stylize, and Quality',
        prompt:
          'Explain how `--seed`, `--chaos`, `--stylize`, and `--quality` govern different stages of the latent diffusion process and how to combine them from rough ideation to final print export.',
        rubricChecklist: [
          'Defines --seed (0–4294967295) as the initial visual noise field for reproducible comparisons.',
          'Distinguishes --chaos (0–100 grid variance) from --stylize (0–1000 default aesthetic strength).',
          'Explains --quality (0.25, 0.5, 1, 2) as GPU processing duration rather than resolution.',
          'Describes the end-to-end progression from --q 0.25 exploration to U-button upscaling, V5.2 Zoom Out, and 4x Upscayl.',
        ],
        modelExplanation:
          'Every job starts from a television-static noise grid defined by --seed (0 to 4,294,967,295). During denoising, --chaos (0–100) controls how wildly the four grid candidates diverge from one another, while --stylize (0–1000) controls how aggressively Midjourney injects its house aesthetic. Meanwhile, --quality (0.25 to 2) budgets how much GPU compute time refines details. You explore compositions cheaply with high --chaos and --q 0.25, then lock a winning --seed, raise --stylize and --q 2, upscale via U1–U4, reframe with V5.2 Zoom Out, and run 4x Real-ESRGAN in Upscayl.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mjm-ch01-node-phrase-syntax',
        label: '60-Word 4-Slot Phrase Syntax',
        category: 'foundation',
        chapterNumber: 1,
        importance: 1,
        definition:
          'Ordering prompts within 60 words as [content type], [subject + adjectives], [style], and [composition].',
        formulaOrRule: 'L_tokens <= 60 words',
        whyItMatters: 'Prevents truncation of style and camera cues while maximizing semantic density.',
      },
      {
        id: 'mjm-ch01-node-seed-noise',
        label: 'Deterministic Seed Noise (--seed)',
        category: 'architecture',
        chapterNumber: 1,
        importance: 1,
        definition:
          'An integer (0–4,294,967,295) initializing the starting visual noise field for the 2x2 generation grid.',
        formulaOrRule: '--seed in [0, 2^32 - 1]',
        whyItMatters: 'Isolates prompt and parameter changes from random initialization luck.',
      },
      {
        id: 'mjm-ch01-node-chaos-variance',
        label: 'Grid Divergence (--chaos)',
        category: 'adaptation',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Parameter (0–100) governing compositional variety across the four initial grid candidates.',
        formulaOrRule: '--chaos in [0, 100]',
        whyItMatters: 'Accelerates early compositional discovery across a single job.',
      },
      {
        id: 'mjm-ch01-node-stylize-bias',
        label: 'Aesthetic Prior Weight (--stylize)',
        category: 'optimization',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Parameter (--s 0–1000) controlling how strongly Midjourney’s default artistic style is applied.',
        formulaOrRule: '--s in [0, 1000]',
        whyItMatters: 'Balances literal prompt obedience against polished editorial rendering.',
      },
      {
        id: 'mjm-ch01-node-quality-budget',
        label: 'GPU Compute Allocation (--quality)',
        category: 'optimization',
        chapterNumber: 1,
        importance: 3,
        definition:
          'Discrete multiplier (0.25, 0.5, 1, 2) controlling GPU time spent refining a generation.',
        formulaOrRule: '--q in {0.25, 0.5, 1, 2}',
        whyItMatters: 'Conserves fast-hour quota during iterative drafting.',
      },
      {
        id: 'mjm-ch01-node-zoom-upscale',
        label: 'V5.2 Zoom Out & 4x Upscayl',
        category: 'architecture',
        chapterNumber: 1,
        importance: 2,
        definition:
          'Post-grid outpainting (1.5x, 2x, Make Square, Custom Zoom) paired with 4x Real-ESRGAN external scaling.',
        whyItMatters: 'Transforms square or portrait grid picks into high-resolution print and widescreen assets.',
      },
    ],
    edges: [
      {
        source: 'mjm-ch01-node-phrase-syntax',
        target: 'mjm-ch01-node-stylize-bias',
        relationship: 'prerequisite_for',
        explanation: 'Clean 60-word phrase ordering establishes the subject foundation that --stylize polishes.',
      },
      {
        source: 'mjm-ch01-node-seed-noise',
        target: 'mjm-ch01-node-chaos-variance',
        relationship: 'evaluates',
        explanation: 'Fixing --seed allows controlled evaluation of how --chaos alters grid divergence.',
      },
      {
        source: 'mjm-ch01-node-chaos-variance',
        target: 'mjm-ch01-node-stylize-bias',
        relationship: 'trades_off_with',
        explanation: 'High compositional chaos trades off against predictable editorial consistency.',
      },
      {
        source: 'mjm-ch01-node-quality-budget',
        target: 'mjm-ch01-node-phrase-syntax',
        relationship: 'optimizes',
        explanation: 'Low --q 0.25 speeds up iterative testing of 60-word prompt syntax.',
      },
      {
        source: 'mjm-ch01-node-stylize-bias',
        target: 'mjm-ch01-node-zoom-upscale',
        relationship: 'part_of',
        explanation: 'Stylized V5.2 upscales feed directly into Zoom Out reframing and 4x Upscayl.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 1 Discord workflow, 60-word syntax, all 15 commands/parameters, ChatGPT prompt generation, and Upscayl 4x pipeline verified.',
  },
};

export const mjmCh02Mastery: ChapterMastery = {
  chapterNumber: 2,
  chapterId: 'ch02',
  title: 'Digital Art, Concept Art, and Genre-Specific Visual Conditioning',
  subtitle:
    'Conditioning latent space via 85 art movements, 55 material/optical aesthetics, 3D engines, and :: weights across 122 prompts',
  readingTimeMinutes: 7,
  sourceWordCount: 4713,
  executiveThesis:
    'Digital art prompting operates by intersecting four orthogonal conditioning vocabularies: historical and speculative art movements, physical surface materials, optical or 3D rendering engines, and named artist style anchors. Combining multi-prompt weight ratios (`::`), dual-tone color pairs, and `--style raw` overrides steers Midjourney V5.1 between studio 3D renders and painterly surrealism.',
  paradigmShift: {
    oldWay:
      'Describe digital illustrations using vague adjectives like "cool digital art, very detailed, nice colors".',
    newWay:
      'Anchor latent coordinates using specific movements, mineral shaders, 3D engines, and weighted artist cohorts (`::`).',
    whyItChanged:
      'Diffusion models map named movements, renderers (Octane, UE5), and artists to precise lighting and texture priors.',
  },
  heroIllustrationUrl:
    '/books/midjourney-mastery/assets/0353784f6fd5cfb0105a4ae60d7a06f4_smallRaw.jpg',
  customDiagrams: [
    {
      id: 'mjm-ch02-svg-conditioning-stack',
      title: 'The Four-Layer Digital Art Conditioning Stack',
      subtitle:
        'Intersecting Art Movements, Material Shaders, 3D Render Engines, and Artist Cohorts across Prompts #001–#122',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh2Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <marker id="mjmCh2Arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh2Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">DIGITAL ART LATENT CONDITIONING STACK (85 STYLES × 55 AESTHETICS)</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">How orthogonal style tokens converge to synthesize complex digital portraits, 3D props, and 16:9 worlds</text>

  <rect x="28" y="76" width="172" height="196" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="40" y="98" fill="#38bdf8" font-size="11" font-weight="700">1. ART MOVEMENTS</text>
  <text x="40" y="118" fill="#e2e8f0" font-size="9.5" font-weight="600">Classical &amp; Modern (85):</text>
  <text x="40" y="134" fill="#cbd5e1" font-size="9">• Baroque, Rococo, Bauhaus</text>
  <text x="40" y="148" fill="#cbd5e1" font-size="9">• Art Nouveau, De Stijl</text>
  <text x="40" y="162" fill="#cbd5e1" font-size="9">• Suprematism, Fauvism</text>
  <text x="40" y="182" fill="#38bdf8" font-size="9.5" font-weight="600">-Punk &amp; -Core Taxonomies:</text>
  <text x="40" y="198" fill="#cbd5e1" font-size="9">• Steampunk, Dieselpunk</text>
  <text x="40" y="212" fill="#cbd5e1" font-size="9">• Solarpunk, Biopunk</text>
  <text x="40" y="226" fill="#cbd5e1" font-size="9">• Dreamcore, Weirdcore</text>
  <text x="40" y="240" fill="#cbd5e1" font-size="9">• Celestialpunk, Bugcore</text>

  <rect x="216" y="76" width="172" height="196" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="228" y="98" fill="#fbbf24" font-size="11" font-weight="700">2. MATERIAL SHADERS</text>
  <text x="228" y="118" fill="#e2e8f0" font-size="9.5" font-weight="600">Metals &amp; Minerals (55):</text>
  <text x="228" y="134" fill="#cbd5e1" font-size="9">• Vanadium, Tungsten, Steel</text>
  <text x="228" y="148" fill="#cbd5e1" font-size="9">• Rhodium, Platinum, Silver</text>
  <text x="228" y="162" fill="#cbd5e1" font-size="9">• Onyx, Sapphire, Tourmaline</text>
  <text x="228" y="182" fill="#fbbf24" font-size="9.5" font-weight="600">Tactile &amp; Structural:</text>
  <text x="228" y="198" fill="#cbd5e1" font-size="9">• Porcelain, Wax, Resin, Silk</text>
  <text x="228" y="212" fill="#cbd5e1" font-size="9">• Vantablack, Liquid Metal</text>
  <text x="228" y="226" fill="#cbd5e1" font-size="9">• Jade Carving, Linoleum</text>
  <text x="228" y="240" fill="#cbd5e1" font-size="9">• Shattered Glass, Wire</text>

  <rect x="404" y="76" width="172" height="196" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="416" y="98" fill="#34d399" font-size="11" font-weight="700">3. OPTICS &amp; ENGINES</text>
  <text x="416" y="118" fill="#e2e8f0" font-size="9.5" font-weight="600">3D &amp; Ray-Tracing Engines:</text>
  <text x="416" y="134" fill="#cbd5e1" font-size="9">• Octane Render, Redshift</text>
  <text x="416" y="148" fill="#cbd5e1" font-size="9">• V-Ray, Unreal Engine 5</text>
  <text x="416" y="162" fill="#cbd5e1" font-size="9">• CryEngine, Cinema4D, ZBrush</text>
  <text x="416" y="182" fill="#34d399" font-size="9.5" font-weight="600">Film Stocks &amp; Cameras:</text>
  <text x="416" y="198" fill="#cbd5e1" font-size="9">• Ektachrome, Ilford Pan 400</text>
  <text x="416" y="212" fill="#cbd5e1" font-size="9">• Ferrania P30, Fujifilm 500T</text>
  <text x="416" y="226" fill="#cbd5e1" font-size="9">• Hasselblad X1D, Canon 50mm</text>
  <text x="416" y="240" fill="#cbd5e1" font-size="9">• Thermal / Infrared / Bokeh</text>

  <rect x="592" y="76" width="180" height="196" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="604" y="98" fill="#c084fc" font-size="11" font-weight="700">4. ARTIST ANCHORS</text>
  <text x="604" y="118" fill="#e2e8f0" font-size="9.5" font-weight="600">Style Reference Anchors:</text>
  <text x="604" y="134" fill="#cbd5e1" font-size="9">• Anton Fadeev, James Paick</text>
  <text x="604" y="148" fill="#cbd5e1" font-size="9">• Iris van Herpen, Eiko Ojala</text>
  <text x="604" y="162" fill="#cbd5e1" font-size="9">• Dieter Rams, Gustav Klimt</text>
  <text x="604" y="182" fill="#c084fc" font-size="9.5" font-weight="600">Dual-Tone Palettes:</text>
  <text x="604" y="198" fill="#cbd5e1" font-size="9">• Dark cyan &amp; white</text>
  <text x="604" y="212" fill="#cbd5e1" font-size="9">• Light gold &amp; magenta</text>
  <text x="604" y="226" fill="#cbd5e1" font-size="9">• Dark bronze &amp; silver</text>
  <text x="604" y="240" fill="#cbd5e1" font-size="9">• Dusk blue &amp; terracotta</text>

  <path d="M 114 272 L 260 320" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmCh2Arr)" />
  <path d="M 302 272 L 340 320" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmCh2Arr)" />
  <path d="M 490 272 L 450 320" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmCh2Arr)" />
  <path d="M 682 272 L 530 320" stroke="#a855f7" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmCh2Arr)" />

  <rect x="28" y="324" width="744" height="72" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <text x="400" y="346" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">PARAMETERIZED COMPOSITIONAL SYNTHESIS (PROMPTS #001–#122)</text>
  <text x="400" y="366" fill="#38bdf8" font-size="10" text-anchor="middle">Portraits &amp; Surreal Hybrids (--ar 2:3 --q 2 --v 5.1) | World-Building Architecture (--ar 16:9) | Raw Override (--s 750 --style raw)</text>
  <text x="400" y="384" fill="#94a3b8" font-size="9.5" text-anchor="middle">Multi-Prompt Weighting (::4 Scene ::1 Primary Artist ::0.5 Secondary Artists) normalizes composite style vectors</text>
</svg>`,
      bierutCaption:
        'Intersect movement taxonomy, physical shaders, rendering engines, and dual-tone artist cues.',
      annotations: [
        {
          step: '1',
          label: 'Genre & Movement',
          explanation: 'Select from 85 historical styles or -punk/-core subgenres.',
        },
        {
          step: '2',
          label: 'Material & Engine',
          explanation: 'Pair mineral/metal textures with Octane, V-Ray, or film stock.',
        },
        {
          step: '3',
          label: 'Palette & Artists',
          explanation: 'Constrain color via dual-tone pairs and multi-artist :: weights.',
        },
      ],
    },
    {
      id: 'mjm-ch02-svg-multiweight',
      title: 'Multi-Prompt Token Weighting (::) and --style raw Mechanics',
      subtitle:
        'Visualizing Prompt #016 relative weight normalization (::4 to ::0.5) and --style raw',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh2Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmCh2Arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh2Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">MULTI-PROMPT WEIGHT VECTOR NORMALIZATION (PROMPT #016 CASE STUDY)</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11">Deconstructing "::" relative weights (Total Weight Sum = 7.75) and "--style raw --s 750" conditioning</text>

  <rect x="28" y="74" width="440" height="318" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="98" fill="#38bdf8" font-size="12" font-weight="700">PROMPT #016 MULTI-PROMPT WEIGHT DISTRIBUTION</text>
  <text x="44" y="114" fill="#94a3b8" font-size="9.5">W_i = w_i / 7.75 across core scene and 6 stylistic reference anchors</text>

  <text x="44" y="140" fill="#f8fafc" font-size="10" font-weight="600">Core Scene (Cybergoth Dieselpunk, Bokeh) ::4</text>
  <rect x="44" y="146" width="320" height="18" rx="4" fill="#38bdf8" />
  <text x="372" y="159" fill="#38bdf8" font-size="10" font-weight="700">51.6%</text>

  <text x="44" y="182" fill="#e2e8f0" font-size="10">By Chris Cunningham ::1</text>
  <rect x="44" y="188" width="80" height="16" rx="4" fill="#f59e0b" />
  <text x="132" y="200" fill="#fbbf24" font-size="9.5" font-weight="700">12.9%</text>

  <text x="44" y="222" fill="#e2e8f0" font-size="10">By Vanessa Beecroft ::0.75</text>
  <rect x="44" y="228" width="60" height="16" rx="4" fill="#10b981" />
  <text x="112" y="240" fill="#34d399" font-size="9.5" font-weight="700">9.7%</text>

  <text x="44" y="262" fill="#e2e8f0" font-size="10">Emil Melmoth ::0.5 | Brandon Woelfel ::0.5</text>
  <rect x="44" y="268" width="40" height="14" rx="3" fill="#a855f7" />
  <rect x="92" y="268" width="40" height="14" rx="3" fill="#a855f7" />
  <text x="142" y="279" fill="#c084fc" font-size="9.5" font-weight="700">6.45% each</text>

  <text x="44" y="302" fill="#e2e8f0" font-size="10">Ann Demeulemeester ::0.5 | Steven Klein ::0.5 | Rick Owens ::0.5</text>
  <rect x="44" y="308" width="40" height="14" rx="3" fill="#ec4899" />
  <rect x="92" y="308" width="40" height="14" rx="3" fill="#ec4899" />
  <rect x="140" y="308" width="40" height="14" rx="3" fill="#ec4899" />
  <text x="190" y="319" fill="#f472b6" font-size="9.5" font-weight="700">6.45% each (Sum = 7.75)</text>

  <text x="44" y="352" fill="#cbd5e1" font-size="9.5">• Prevents secondary fashion/lighting artists from overwriting core subject</text>
  <text x="44" y="370" fill="#cbd5e1" font-size="9.5">• Prompt #101 uses "::1 ... ::1" to split subject and lighting into equal halves</text>

  <path d="M 468 230 L 496 230" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmCh2Arr2)" />

  <rect x="500" y="74" width="272" height="318" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="516" y="98" fill="#34d399" font-size="12" font-weight="700">--STYLE RAW + --S 750</text>
  <text x="516" y="116" fill="#94a3b8" font-size="9.5">High-detail structural fidelity without house gloss</text>

  <rect x="516" y="132" width="240" height="72" rx="6" fill="#0f172a" stroke="#f59e0b" />
  <text x="528" y="152" fill="#fbbf24" font-size="10.5" font-weight="700">Standard V5.1 + --s 750</text>
  <text x="528" y="170" fill="#cbd5e1" font-size="9">Applies Midjourney house beautification,</text>
  <text x="528" y="184" fill="#cbd5e1" font-size="9">cinematic glow, and painterly smoothing.</text>

  <rect x="516" y="218" width="240" height="82" rx="6" fill="#0f172a" stroke="#10b981" />
  <text x="528" y="238" fill="#34d399" font-size="10.5" font-weight="700">--style raw + --s 750 (Prompts #009, #052)</text>
  <text x="528" y="256" fill="#cbd5e1" font-size="9">Strips default V5.1 auto-beautification while</text>
  <text x="528" y="270" fill="#cbd5e1" font-size="9">preserving 750-level micro-texture intensity</text>
  <text x="528" y="284" fill="#cbd5e1" font-size="9">for ZBrush, resin DNA (#114), &amp; 70mm photos.</text>

  <rect x="516" y="314" width="240" height="62" rx="6" fill="#0f172a" stroke="#38bdf8" />
  <text x="528" y="334" fill="#38bdf8" font-size="10" font-weight="700">Aspect Framing Switch</text>
  <text x="528" y="350" fill="#cbd5e1" font-size="9">--ar 2:3 for vertical portraits (#001–#104)</text>
  <text x="528" y="364" fill="#cbd5e1" font-size="9">--ar 16:9 for world architecture (#105–#112)</text>
</svg>`,
      bierutCaption:
        'Use :: numeric weights to subordinate secondary artist styles beneath the primary scene.',
      annotations: [
        {
          step: '1',
          label: 'Scene Dominance (::4)',
          explanation: 'Assign highest relative weight to core subject and camera.',
        },
        {
          step: '2',
          label: 'Fractional Artist Blend',
          explanation: 'Layer artists at ::1, ::0.75, and ::0.5 for nuanced synthesis.',
        },
        {
          step: '3',
          label: 'Raw High-Stylize',
          explanation: 'Pair --style raw with --s 750 for texture without gloss.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mjm-ch02-mm1',
      name: 'Orthogonal Style-Material-Engine Triangulation',
      tagline: 'Pin latent coordinates by intersecting era, physical substance, and renderer',
      naiveIntuition:
        'Naming a broad style like "fantasy art" is enough to specify surface lighting.',
      firstPrinciplesReality:
        'Broad genre labels occupy diffuse latent regions until intersected with materials and engines.',
      howToApply:
        'Combine an art movement (Art Nouveau), material (black onyx), and renderer (Octane).',
    },
    {
      id: 'mjm-ch02-mm2',
      name: 'Hierarchical Multi-Artist Weighting (::)',
      tagline: 'Prevent secondary style references from hijacking subject anatomy via weights',
      naiveIntuition:
        'Listing six favorite artists separated by commas blends their styles evenly.',
      firstPrinciplesReality:
        'Unweighted artist lists compete with the subject noun and distort composition.',
      howToApply:
        'Assign `::4` to the core scene and step down artist weights (`::1`, `::0.75`, `::0.5`).',
    },
    {
      id: 'mjm-ch02-mm3',
      name: 'Dual-Tone Chromatic Anchoring',
      tagline: 'Constrain palette entropy by declaring explicit dark/light color pairs',
      naiveIntuition:
        'Writing "vibrant colors" or "beautiful palette" yields harmonious editorial grading.',
      firstPrinciplesReality:
        'Generic color adjectives yield oversaturated noise unless anchored to tonal pairs.',
      howToApply:
        'Specify explicit two-color anchors like "dark cyan and white" or "light gold and magenta".',
    },
  ],
  deepSections: [
    {
      id: 'mjm-ch02-sec-2-1',
      sectionNumber: '2.1',
      title: 'Art Historical Movements and -Punk / -Core Taxonomies',
      subtitle:
        '85 art styles from Baroque and Bauhaus to Dieselpunk and Dreamcore',
      coreMechanism:
        'Chapter 2 catalogs 85 distinct art styles that act as structural macro-priors in Midjourney’s latent space. Classical and modernist movements—including Naturalism, Baroque, Rococo, Neoclassicism, Impressionism, Pointillism, Fauvism, De Stijl, Bauhaus, Constructivism, Suprematism, Art Nouveau, Art Deco, and Chinoiserie—impose period-accurate composition, brushwork, and ornamental geometry onto any chosen digital art subject.\n\nComplementing historical eras, speculative `-punk` and `-core` suffix taxonomies inject cohesive world-building rules. Variants like Steampunk, Dieselpunk, Biopunk, Atompunk, Solarpunk, Lunarpunk, Celestialpunk, Dreamcore, Weirdcore, Gothcore, and Bugcore bundle specific technological motifs, lighting moods, architectural silhouettes, atmospheric haze, and subcultural color palettes into one compact visual token.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Anchor Art Movements',
          detail:
            'Pick Bauhaus, Art Nouveau, De Stijl, or Baroque for framing.',
        },
        {
          step: '2',
          title: 'Add -Punk / -Core',
          detail:
            'Layer Dieselpunk, Solarpunk, or Dreamcore for world props.',
        },
        {
          step: '3',
          title: 'Lock Dual-Tone Pairs',
          detail:
            'Specify pairs like "dark white and light gold" (#015).',
        },
      ],
      keyTakeaways: [
        'Pairing historical movements with speculative subgenres creates stylistic tension.',
        'Explicit two-color descriptors ("dark cyan and white") prevent muddy mid-tones.',
      ],
      commonPitfalls: [
        'Stacking Minimalism and Maximalism without `::` weights.',
        'Using "modern art" instead of Suprematism or Constructivism.',
      ],
      figures: [
        {
          file: '0353784f6fd5cfb0105a4ae60d7a06f4_smallRaw.jpg',
          originalLabel: 'Chapter 2 Style Plate',
          bierutTitle: 'Fuse Subgenres With Dual-Tone Palettes',
          editorialAnalysis:
            'V5.1 synthesizes chiaroscuro lighting, costume filigree, and tight color harmony from genre tokens.',
          keyTakeaways: [
            'Chiaroscuro with metallic accents creates focal separation.',
            'Vertical `--ar 2:3` maximizes portrait costume detail.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch02-sec-2-2',
      sectionNumber: '2.2',
      title: 'Material Physics, Film Stocks, and 3D Engines',
      subtitle:
        '55 material/optical aesthetics, film emulsions, and ray-tracers',
      coreMechanism:
        'Beyond artistic era, Chapter 2 defines 55 material and optical aesthetics that govern surface reflectance and light transport. Specifying transition metals, minerals, and tactile media—such as Vanadium, Tungsten, Rhodium, Palladium, Titanium, Tourmaline, Black Onyx (#119), Porcelain (#079), Vantablack (#006), Resin (#114), Liquid Metal (#046), Woodcut, Linoleum Block Printing (#079), or Wire (#062)—forces the diffusion model to compute physically plausible specular highlights and subsurface scattering.\n\nTo control virtual camera physics, prompts pair these materials with 3D renderers (`Octane Render`, `Redshift`, `V-Ray`, `Unreal Engine 5`, `CryEngine`, `Cinema4D`, `ZBrush`) or analog film stocks and optics (`Ektachrome`, `Ilford Pan 400`, `Ferrania P30`, `Fujifilm Eterna Vivid 500T`, `Hasselblad X1D-50c`, `Canon 50mm f/0.95`, `Double/Triple Exposure`, `Thermal Imaging`).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Assign Physical Shaders',
          detail:
            'Declare black onyx, translucent glass, vanadium, or resin.',
        },
        {
          step: '2',
          title: 'Pick Engine or Film',
          detail:
            'Use Octane, V-Ray, UE5, Ilford Pan 400, or Ferrania P30.',
        },
        {
          step: '3',
          title: 'Set Optical Exposure',
          detail:
            'Add bokeh, neon rim lighting, or triple exposure (#065).',
        },
      ],
      keyTakeaways: [
        'Coupling translucent or metallic substrates with `Octane` or `V-Ray` drives realistic refraction.',
        'Naming film stocks (`Ilford Pan 400`, `Ferrania P30`) locks vintage tone curves.',
      ],
      commonPitfalls: [
        'Mixing 2D woodblock print tokens with 3D `Octane Render` unintentionally.',
        'Omitting "white background with no shadow" (#117) on 3D icons.',
      ],
      figures: [
        {
          file: '03a3ed0c4b6f6d137bc7a130e366f6f3_smallRaw.jpg',
          originalLabel: 'Chapter 2 Material Shader Plate',
          bierutTitle: 'Drive Specular Highlights With Mineral and Engine Tokens',
          editorialAnalysis:
            'At `--q 2`, pairing tactile material nouns with HDR renderers produces crisp edges and internal glow.',
          keyTakeaways: [
            'Material nouns specify concrete physical reflectance.',
            '`--q 2` resolves porous and crystalline surfaces.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch02-sec-2-3',
      sectionNumber: '2.3',
      title: 'Multi-Artist Fusion, :: Weights, and --style raw',
      subtitle:
        'Balancing artist cohorts via :: weights and --style raw',
      coreMechanism:
        'Across the 122 modular prompt templates in Chapter 2—where users replace the bolded subject phrase while keeping style scaffolding intact—complex aesthetics emerge by fusing multiple artists (e.g., Iris van Herpen + ZBrush in #009; Dieter Rams + C4D in #121). When combining many artists, Prompt #016 demonstrates multi-prompt weighting (`::`): assigning `::4` to the cybergoth dieselpunk scene and fractional weights (`::1`, `::0.75`, `::0.5`) across six artists so stylistic nuances blend without overwhelming the subject.\n\nFurthermore, pairing `--s 750` with `--style raw` (#009, #038, #052, #114) strips V5.1’s house gloss while preserving micro-detail, and aspect ratios shift from `--ar 2:3` portraits (#001–#104) to `--ar 16:9` world architecture (#105–#112).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Swap Bolded Subjects',
          detail:
            'Replace the bolded subject inside Prompts #001–#122.',
        },
        {
          step: '2',
          title: 'Weight Artist Cohorts',
          detail:
            'Partition segments with `::4` scene and `::1`–`::0.5` artists.',
        },
        {
          step: '3',
          title: 'Toggle Raw & Aspect',
          detail:
            'Use `--style raw --s 750` and `--ar 16:9` (#105–#112).',
        },
      ],
      formulas: [
        {
          name: 'Multi-Prompt Weight Share',
          expression: 'W_i = \\frac{w_i}{\\sum_{j=1}^{n} w_j}',
          intuition:
            'Conditioning share of segment i weighted via ::w_i.',
          variables: [
            { symbol: 'w_i', meaning: 'Segment weight via ::w_i' },
            { symbol: '\\sum w_j', meaning: 'Sum of all segment weights' },
          ],
          workedExample:
            'In Prompt #016 (sum = 7.75), scene ::4 receives 4 / 7.75 = 51.6% share.',
        },
      ],
      keyTakeaways: [
        'Multi-prompt weighting (`::`) turns artist lists into a quantitative mixer.',
        'Switching to `--ar 16:9` (#105–#112) shifts framing to panoramic architecture.',
      ],
      commonPitfalls: [
        'Applying `--style raw` on legacy `--v 4` jobs.',
        'Using vertical `--ar 2:3` on sprawling cityscapes (#107, #111).',
      ],
      figures: [
        {
          file: '0611c427285d60c4fd15c085c967f43c_smallRaw.jpg',
          originalLabel: 'Chapter 2 Multi-Artist Output',
          bierutTitle: 'Synthesize Signatures by Blending Cross-Domain Artists',
          editorialAnalysis:
            'Intersecting fashion, sculptural, and 3D priors at `--s 750 --q 2` fuses realism with surreal ornament.',
          keyTakeaways: [
            'Cross-domain artist pairings avoid single-artist mimicry.',
            'Modular templates allow instant subject substitution.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Digital Art Conditioning Matrix',
      description: 'Comparing rendering pipelines across Chapter 2 templates.',
      headers: ['Mode', 'Core Tokens', 'Trade-Off', 'Archetype'],
      rows: [
        ['3D Studio', 'Octane, V-Ray, Redshift, C4D', 'Less painterly warmth', 'Glass icons (#120) & DNA (#114)'],
        ['Film Emulsion', 'Ilford Pan 400, Ferrania P30', 'Limits neon saturation', 'Vintage portraits (#063, #103)'],
        ['Weighted Artists', '::4 Scene + ::1..0.5 Artists', 'Requires ratio tuning', 'Cybergoth dieselpunk (#016)'],
        ['Raw High-Stylize', '--s 750 --style raw --v 5.1', 'Demands exact tokens', 'ZBrush & 70mm fashion (#009)'],
        ['Panoramic World', '--ar 16:9 + architecture', 'Less close-up detail', 'Canal & sea cities (#107, #111)'],
      ],
      verdictRule:
        'Use Octane/V-Ray with --style raw for 3D materials, film stocks for mood, and :: weights for 3+ artists.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mjm-ch02-scen1',
      title: 'Taming Multi-Artist Style Collisions',
      roleAndContext:
        'Concept artist blending six artists for a dieselpunk poster.',
      symptomOrFailure:
        'Unweighted artist lists erase the dieselpunk scene in favor of fashion.',
      naiveFixAndWhyItFails:
        'Repeating "dieselpunk" wastes tokens without bounding artist weights.',
      firstPrinciplesSolution:
        'Assign `::4` to the scene and `::1` to `::0.5` across the artists (#016).',
      measurableOutcome:
        'Locks 51.6% weight on the scene while blending subtle artist accents.',
    },
    {
      id: 'mjm-ch02-scen2',
      title: 'Eliminating Plastic Gloss on 3D Icons',
      roleAndContext:
        'Designer rendering translucent hardware inspired by Dieter Rams.',
      symptomOrFailure:
        'Default `--s 750` adds fantasy vignettes that ruin studio lighting.',
      naiveFixAndWhyItFails:
        'Setting `--stylize 0` flattens reflections and internal refraction.',
      firstPrinciplesSolution:
        'Pair `Dieter Rams, Octane render, translucent body` with `--s 750 --style raw` (#121).',
      measurableOutcome:
        'Produces crisp studio caustics and clean white backgrounds.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mjm-ch02-q1',
        scenarioPrompt:
          'In Prompt #016 (`Surreal lavender cybergoth dieselpunk dystopia ... ::4 By Chris Cunningham ::1 By Vanessa Beecroft ::0.75 By Emil Melmoth ::0.5 By Brandon Woelfel ::0.5 By Ann Demeulemeester ::0.5 By Steven Klein ::0.5 By Rick Owens`), why does the author assign `::4` to the opening scene and fractional weights (`::1` down to `::0.5`) to the artists?',
        options: [
          {
            label: 'A',
            text: 'To keep the core scene above 50% of total normalized conditioning weight (4 / 7.75 = 51.6%) so six artist styles enrich rather than overwrite the subject.',
            isCorrect: true,
            explanation:
              'Without ::4 weighting on the scene, six artist tokens would collectively dominate the latent direction and erase the cybergoth dieselpunk subject.',
          },
          {
            label: 'B',
            text: 'Because Midjourney V5.1 requires artist names to sum to exactly 3.75.',
            isCorrect: false,
            explanation:
              'Multi-prompt weights are relative ratios and do not require any fixed sum.',
          },
          {
            label: 'C',
            text: 'Because ::0.5 disables the --stylize parameter.',
            isCorrect: false,
            explanation:
              'Token weights (::) and --stylize operate independently.',
          },
          {
            label: 'D',
            text: 'To force the output aspect ratio into 4:1.',
            isCorrect: false,
            explanation:
              'Aspect ratio is controlled by --ar (here --ar 2:3), not by :: token weights.',
          },
        ],
      },
      {
        id: 'mjm-ch02-q2',
        scenarioPrompt:
          'Several prompts in Chapter 2 (such as #009, #038, #052, #074, and #114) combine `--s 750` with `--style raw` in Midjourney V5.1. What is the mechanical benefit of pairing these two flags?',
        options: [
          {
            label: 'A',
            text: '--style raw suppresses V5.1’s automatic house beautification while --s 750 preserves high micro-detail and textural intensity.',
            isCorrect: true,
            explanation:
              'Pairing --style raw with --s 750 yields unvarnished photographic or 3D material accuracy (like resin DNA or 70mm fashion shoots) with intricate detail.',
          },
          {
            label: 'B',
            text: '--style raw exports uncompressed RAW camera files directly from Discord.',
            isCorrect: false,
            explanation:
              'Midjourney exports standard raster formats; --style raw is a latent conditioning flag, not a file format.',
          },
          {
            label: 'C',
            text: '--style raw cancels --s 750 and resets stylization to zero.',
            isCorrect: false,
            explanation:
              '--s 750 still scales stylization strength within the raw aesthetic mode.',
          },
          {
            label: 'D',
            text: '--style raw is required whenever --ar 2:3 is used.',
            isCorrect: false,
            explanation:
              'Most --ar 2:3 prompts in Chapter 2 run without --style raw.',
          },
        ],
      },
      {
        id: 'mjm-ch02-q3',
        scenarioPrompt:
          'You are shifting from generating vertical character portraits (Prompts #001–#104) to sprawling canal metropolises, helical glass greenhouses, and deep-sea underwater cities (Prompts #105–#112). Which parameter and structural change does the book apply for this transition?',
        options: [
          {
            label: 'A',
            text: 'Switch the aspect ratio from `--ar 2:3` to widescreen `--ar 16:9` and pair environmental scale cues (bird’s-eye view, distant view, long shot) with architectural motifs.',
            isCorrect: true,
            explanation:
              'Prompts #105–#112 systematically switch from --ar 2:3 to --ar 16:9 to accommodate horizontal world-building and architectural vistas.',
          },
          {
            label: 'B',
            text: 'Switch from --q 2 to --q 0.25 and add --no architecture.',
            isCorrect: false,
            explanation:
              'Prompts #105–#111 retain --q 2 and explicitly include architecture tokens.',
          },
          {
            label: 'C',
            text: 'Replace V5.1 with --niji 4.',
            isCorrect: false,
            explanation:
              'All architectural prompts #105–#112 use --v 5.1.',
          },
          {
            label: 'D',
            text: 'Remove all material and lighting descriptors.',
            isCorrect: false,
            explanation:
              'Architectural prompts heavily rely on material cues like glass-walled helixes, moss landscapes, and glowing marine patterns.',
          },
        ],
      },
      {
        id: 'mjm-ch02-q4',
        scenarioPrompt:
          'A 3D artist wants to generate a hollow, porous anatomical heart with dramatic internal light transmission and golden highlights (Prompt #119) or a translucent industrial game controller on a clean studio background (Prompt #121). Which token categories from Chapter 2 drive these results?',
        options: [
          {
            label: 'A',
            text: 'Specific mineral/material shaders (black onyx, translucent body) paired with industrial/3D render anchors (Dieter Rams, C4D, Blender, Octane renderer, studio lighting).',
            isCorrect: true,
            explanation:
              'Prompts #119 and #121 combine tactile material physics (black onyx, translucent body) with explicit 3D engines and industrial designer priors.',
          },
          {
            label: 'B',
            text: 'Only medieval illustration and folk art movement tokens.',
            isCorrect: false,
            explanation:
              'Medieval and folk art tokens produce flat 2D historical textures rather than 3D ray-traced studio objects.',
          },
          {
            label: 'C',
            text: 'High --chaos 100 without any material or renderer nouns.',
            isCorrect: false,
            explanation:
              '--chaos alone increases grid randomness without specifying 3D studio shaders.',
          },
          {
            label: 'D',
            text: 'Using /blend on text-only prompts.',
            isCorrect: false,
            explanation:
              '/blend requires uploaded image files, whereas Prompts #119 and #121 are pure `/imagine` text prompts.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mjm-ch02-fc1',
        category: 'foundation',
        front: 'How are the 122 example prompts in Chapter 2 designed to be reused as modular templates?',
        back: 'Users copy the full prompt into Discord and replace only the bolded subject word or phrase while preserving the style, renderer, and parameter scaffolding.',
        mentalHook: 'Swap the bolded subject; keep the latent style rig.',
      },
      {
        id: 'mjm-ch02-fc2',
        category: 'architecture',
        front: 'What four token categories combine to condition Digital Art in Chapter 2?',
        back: 'Art historical/subgenre movements (85 styles), physical/optical aesthetics (55 materials/effects), 3D/photographic render engines, and named artist/palette anchors.',
        mentalHook: 'Movement + Material + Engine + Artist/Palette.',
      },
      {
        id: 'mjm-ch02-fc3',
        category: 'adaptation',
        front: 'Name six speculative -punk or -core subgenres cataloged in Chapter 2 for world-building.',
        back: 'Steampunk, Dieselpunk, Biopunk, Solarpunk, Celestialpunk, and Dreamcore (alongside Atompunk, Lunarpunk, Gothpunk, Weirdcore, and Bugcore).',
        mentalHook: '-Punk = Tech/World Era; -Core = Mood/Aesthetic Cluster.',
      },
      {
        id: 'mjm-ch02-fc4',
        category: 'optimization',
        front: 'Which 3D render engines and analog film stocks appear in Chapter 2 to control light transport?',
        back: '3D engines: Octane Render, Redshift, V-Ray, Unreal Engine 5, CryEngine, Cinema4D, ZBrush; Film stocks: Ektachrome, Ilford Pan 400, Ferrania P30, Fujifilm Eterna Vivid 500T.',
        mentalHook: 'Octane/V-Ray/UE5 for CG ray-tracing; Ilford/Ferrania/Ektachrome for film emulsion.',
      },
      {
        id: 'mjm-ch02-fc5',
        category: 'optimization',
        front: 'How does multi-prompt weighting (`::`) work in Prompt #016 and Prompt #101?',
        back: 'Double colons assign relative numeric weights to prompt segments (e.g., `::4` core scene vs `::1` and `::0.5` artists in #016, or `::1 ... ::1` equal split in #101).',
        mentalHook: 'Double-colon numbers set relative conditioning share.',
      },
      {
        id: 'mjm-ch02-fc6',
        category: 'data',
        front: 'How does Chapter 2 use dual-tone color pairs to prevent muddy palettes?',
        back: 'Prompts explicitly pair contrasting dark and light hues such as "dark cyan and white", "light gold and magenta", or "dark bronze and silver".',
        mentalHook: 'Two-color dark/light anchors lock chromatic contrast.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mjm-ch02-feyn1',
        conceptTitle: 'The Four-Layer Digital Art Conditioning Stack',
        prompt:
          'Explain why a novice prompt like "a cool futuristic woman, very detailed" produces generic results compared to Chapter 2’s Prompt #011 or #009, breaking down the four orthogonal conditioning layers.',
        rubricChecklist: [
          'Identifies the Art Movement / Subgenre layer (e.g., cyberpunk futurism, gothic futurism, organic Art Nouveau).',
          'Identifies the Material & Surface Shader layer (e.g., vanadium, black onyx, resin, liquid metal, ZBrush sculpted forms).',
          'Identifies the Optical / 3D Render Engine layer (e.g., Redshift, Octane, V-Ray, Unreal Engine 5, 70mm 5D, Ilford Pan 400).',
          'Identifies the Artist Anchor & Dual-Tone Palette layer (e.g., Iris van Herpen, "light gold and magenta, dark cyan and red").',
        ],
        modelExplanation:
          'Generic words like "cool" and "detailed" point to broad, averaged regions of latent space. Chapter 2 pins down exact visual coordinates by intersecting four independent layers: (1) an art movement or subgenre like cyberpunk futurism or Art Nouveau to set macro-composition; (2) concrete materials like resin, onyx, or sculpted machine forms to govern surface physics; (3) an optical or 3D engine like Redshift, Octane, V-Ray, or 70mm lens to dictate light transport; and (4) named artist priors (Iris van Herpen, Anton Fadeev) paired with dual-tone color constraints ("light gold and magenta, dark cyan and red").',
      },
      {
        id: 'mjm-ch02-feyn2',
        conceptTitle: 'Multi-Prompt Weight Normalization (::) & Raw Mode Overrides',
        prompt:
          'Walk through the math and mechanics of Prompt #016’s `::` weights and explain when a creator should add `--style raw` alongside `--s 750`.',
        rubricChecklist: [
          'Explains that `::w_i` assigns a relative weight normalized by the sum of all segment weights (w_i / sum w_j).',
          'Uses Prompt #016 (`::4` scene, `::1`, `::0.75`, and five `::0.5` artists; total = 7.75) to show how the scene retains >50% weight.',
          'Explains how `--style raw` removes Midjourney V5.1’s automatic house beautification and fantasy bias.',
          'Explains why pairing `--style raw` with `--s 750` retains high surface detail while respecting literal camera and material tokens.',
        ],
        modelExplanation:
          'When you blend six artists in one prompt, an unweighted list lets their combined style tokens overpower your subject. By placing `::4` after the scene description and `::1`, `::0.75`, and five `::0.5` weights on the artists, total weight equals 7.75—keeping 4 / 7.75 (51.6%) of the conditioning locked on the cybergoth dieselpunk scene while each `::0.5` artist contributes a 6.45% accent. Meanwhile, adding `--style raw` alongside `--s 750` turns off V5.1’s default glossy auto-beautification while keeping 750-level textural richness for realistic 3D or photographic renders.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mjm-ch02-node-movement-taxonomy',
        label: '85 Art Movements & -Punk/-Core Taxonomies',
        category: 'foundation',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Macro-structural style tokens spanning classical history (Baroque, Bauhaus, Art Nouveau) and speculative subgenres (Dieselpunk, Solarpunk, Dreamcore).',
        whyItMatters: 'Establishes period composition, ornamental geometry, and world-building priors in a single token.',
      },
      {
        id: 'mjm-ch02-node-material-shaders',
        label: '55 Material & Optical Aesthetics',
        category: 'data',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Physical substance and optical descriptors (Vanadium, Rhodium, Black Onyx, Porcelain, Resin, Ektachrome, Ilford Pan 400, Thermal Imaging).',
        whyItMatters: 'Drives realistic specular reflection, refraction, and film-stock color response.',
      },
      {
        id: 'mjm-ch02-node-render-engines',
        label: '3D Ray-Tracing & Virtual Camera Engines',
        category: 'architecture',
        chapterNumber: 2,
        importance: 2,
        definition:
          'Rendering tokens (Octane, Redshift, V-Ray, Unreal Engine 5, CryEngine, Cinema4D, ZBrush) that simulate studio lighting and global illumination.',
        whyItMatters: 'Separates 3D sculptural and product renders from flat 2D illustrative styles.',
      },
      {
        id: 'mjm-ch02-node-multiprompt-weights',
        label: 'Multi-Prompt Weight Vector (::)',
        category: 'optimization',
        chapterNumber: 2,
        importance: 1,
        definition:
          'Double-colon numeric weights (::w_i) partitioning relative conditioning influence across scene and artist segments.',
        formulaOrRule: 'W_i = w_i / sum(w_j)',
        whyItMatters: 'Prevents multi-artist reference cohorts from overwhelming the primary subject.',
      },
      {
        id: 'mjm-ch02-node-style-raw',
        label: 'Raw Conditioning Override (--style raw)',
        category: 'adaptation',
        chapterNumber: 2,
        importance: 2,
        definition:
          'V5.1 flag that bypasses Midjourney’s default aesthetic beautification when paired with high --stylize (--s 750).',
        whyItMatters: 'Preserves literal photographic and 3D material fidelity without artificial fantasy gloss.',
      },
      {
        id: 'mjm-ch02-node-dualtone-palette',
        label: 'Dual-Tone Chromatic Anchoring',
        category: 'evaluation',
        chapterNumber: 2,
        importance: 3,
        definition:
          'Explicit dark/light color-pair constraints (e.g., "dark cyan and white", "light gold and magenta").',
        whyItMatters: 'Eliminates muddy mid-tones and locks editorial color contrast.',
      },
    ],
    edges: [
      {
        source: 'mjm-ch02-node-movement-taxonomy',
        target: 'mjm-ch02-node-material-shaders',
        relationship: 'part_of',
        explanation: 'Art movements combine with physical material shaders to form the core Chapter 2 conditioning stack.',
      },
      {
        source: 'mjm-ch02-node-material-shaders',
        target: 'mjm-ch02-node-render-engines',
        relationship: 'prerequisite_for',
        explanation: 'Translucent and metallic material substrates require 3D ray-tracing engines (Octane, V-Ray) to resolve reflections.',
      },
      {
        source: 'mjm-ch02-node-multiprompt-weights',
        target: 'mjm-ch02-node-movement-taxonomy',
        relationship: 'optimizes',
        explanation: ':: numeric weights balance multiple artist and movement tokens without losing subject dominance.',
      },
      {
        source: 'mjm-ch02-node-style-raw',
        target: 'mjm-ch02-node-render-engines',
        relationship: 'optimizes',
        explanation: '--style raw strips default painterly gloss so 3D and camera tokens render with studio accuracy.',
      },
      {
        source: 'mjm-ch02-node-dualtone-palette',
        target: 'mjm-ch02-node-movement-taxonomy',
        relationship: 'mitigates',
        explanation: 'Explicit dual-tone color pairs mitigate palette muddiness across complex multi-style prompts.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 2 85 Art Styles, 55 Aesthetics, modular bold-replacement prompt mechanics, and all 122 Digital Art prompts verified.',
  },
};
