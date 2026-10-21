import { ChapterMastery } from '../../../types/book';

export const mjmCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Commercial Identity Systems: Logos, Tattoos, Die-Cut Stickers, and Apparel Graphics',
  subtitle:
    'Vector mark synthesis, modernist designer priors, substrate decoupling (--no skin), and die-cut merchandise pipelines',
  readingTimeMinutes: 6,
  sourceWordCount: 3170,
  executiveThesis:
    'Commercial graphic synthesis requires suppressing Midjourney’s photographic depth priors to produce flat, scalable silhouettes suitable for vectorization, skin transfer, or die-cut printing. By combining structural mark taxonomies, iconic graphic designer tokens, and negative substrate exclusions (--no text, --no skin, --no shading), practitioners isolate clean 2D assets ready for post-production typography.',
  paradigmShift: {
    oldWay:
      'Designers manually sketch dozens of initial vector mark iterations or browse generic clip-art templates before testing commercial identity concepts.',
    newWay:
      'Practitioners synthesize high-contrast flat vector marks in Midjourney, then finalize typography and vector paths in Illustrator or Photoshop.',
    whyItChanged:
      'Diffusion models encode iconic designer aesthetics and print techniques natively while struggling with deterministic kerning and exact text strings.',
  },
  customDiagrams: [
    {
      id: 'mjm-ch05-svg-logo-pipeline',
      title: 'Commercial Logo & Vector Identity Synthesis Pipeline',
      subtitle:
        'Combining structural mark taxonomy, modernist designer priors, and negative photo-suppression gates before vector post-production',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh5Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmArrCyan5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="mjmArrAmber5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="mjmArrEmerald5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#mjmCh5Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">COMMERCIAL LOGO &amp; VECTOR IDENTITY SYNTHESIS PIPELINE</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Isolating 2D geometric form in latent space while delegating deterministic typography to vector tools</text>

  <!-- Stage 1: Mark Taxonomy -->
  <rect x="28" y="72" width="168" height="224" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="112" y="94" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. MARK TAXONOMY</text>
  <rect x="40" y="108" width="144" height="52" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="112" y="126" fill="#e0f2fe" font-size="10" font-weight="700" text-anchor="middle">Lettermark / Monogram</text>
  <text x="112" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">Serif, Slab, Calligraphic</text>
  <text x="112" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">Single initial app icons</text>

  <rect x="40" y="170" width="144" height="52" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="112" y="188" fill="#e0f2fe" font-size="10" font-weight="700" text-anchor="middle">Mascot Character</text>
  <text x="112" y="204" fill="#94a3b8" font-size="8.5" text-anchor="middle">Esports, sports &amp; food</text>
  <text x="112" y="216" fill="#94a3b8" font-size="8.5" text-anchor="middle">Bold vector illustration</text>

  <rect x="40" y="232" width="144" height="52" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="112" y="250" fill="#e0f2fe" font-size="10" font-weight="700" text-anchor="middle">Emblem / Crest / Abstract</text>
  <text x="112" y="266" fill="#94a3b8" font-size="8.5" text-anchor="middle">Official seals &amp; geometric</text>
  <text x="112" y="278" fill="#94a3b8" font-size="8.5" text-anchor="middle">brand symbols</text>

  <line x1="196" y1="184" x2="218" y2="184" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrCyan5)" />

  <!-- Stage 2: Designer & Technique Priors -->
  <rect x="222" y="72" width="186" height="224" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="315" y="94" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">2. DESIGNER &amp; STYLE PRIORS</text>
  <rect x="234" y="108" width="162" height="82" rx="5" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="315" y="125" fill="#fef3c7" font-size="9.5" font-weight="700" text-anchor="middle">Canonical Identity Masters</text>
  <text x="244" y="141" fill="#fde68a" font-size="8.5">• Paul Rand (IBM / ABC geometry)</text>
  <text x="244" y="155" fill="#fde68a" font-size="8.5">• Ivan Chermayeff &amp; Sagi Haviv</text>
  <text x="244" y="169" fill="#fde68a" font-size="8.5">• Saul Bass, Vignelli, Rob Janoff</text>
  <text x="244" y="183" fill="#fde68a" font-size="8.5">• Mondrian, Klee, Yoji Shinkawa</text>

  <rect x="234" y="200" width="162" height="84" rx="5" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="315" y="217" fill="#fef3c7" font-size="9.5" font-weight="700" text-anchor="middle">Medium &amp; Movement Tokens</text>
  <text x="244" y="233" fill="#fde68a" font-size="8.5">• Flat 2D vector, minimal outline</text>
  <text x="244" y="247" fill="#fde68a" font-size="8.5">• Screen-print stencil mesh</text>
  <text x="244" y="261" fill="#fde68a" font-size="8.5">• Gradient mark, hard-edge</text>
  <text x="244" y="275" fill="#fde68a" font-size="8.5">• De Stijl, Pop Art, Psychedelic</text>

  <line x1="408" y1="184" x2="430" y2="184" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrAmber5)" />

  <!-- Stage 3: Negative Suppression Gate -->
  <rect x="434" y="72" width="168" height="224" rx="8" fill="#3b1219" stroke="#f43f5e" stroke-width="1.5" />
  <text x="518" y="94" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">3. SUPPRESSION GATE</text>
  <rect x="446" y="108" width="144" height="82" rx="5" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="518" y="126" fill="#fecdd3" font-size="9.5" font-weight="700" text-anchor="middle">Exclusion Parameters</text>
  <text x="456" y="143" fill="#fda4af" font-size="8.5">• --no text (prevents gibberish)</text>
  <text x="456" y="158" fill="#fda4af" font-size="8.5">• --no realistic photo details</text>
  <text x="456" y="173" fill="#fda4af" font-size="8.5">• --no shading detail</text>

  <rect x="446" y="200" width="144" height="84" rx="5" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="518" y="218" fill="#fecdd3" font-size="9.5" font-weight="700" text-anchor="middle">Negative Multiprompting</text>
  <text x="456" y="235" fill="#fda4af" font-size="8.5">• Subject mark ::1</text>
  <text x="456" y="250" fill="#fda4af" font-size="8.5">• Realistic shading ::-0.5</text>
  <text x="456" y="265" fill="#fda4af" font-size="8.5">• High stylize (--s 750 --q 2)</text>

  <line x1="602" y1="184" x2="624" y2="184" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrEmerald5)" />

  <!-- Stage 4: Vector Post-Production -->
  <rect x="628" y="72" width="144" height="224" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5" />
  <text x="700" y="94" fill="#6ee7b7" font-size="11" font-weight="700" text-anchor="middle">4. VECTOR FINISH</text>
  <rect x="640" y="108" width="120" height="176" rx="5" fill="#0f172a" stroke="#34d399" stroke-width="1" />
  <text x="700" y="130" fill="#d1fae5" font-size="9.5" font-weight="700" text-anchor="middle">Hybrid Handoff</text>
  <text x="648" y="150" fill="#a7f3d0" font-size="8.5">1. Isolate flat mark</text>
  <text x="648" y="164" fill="#a7f3d0" font-size="8.5">   on white ground</text>
  <text x="648" y="184" fill="#a7f3d0" font-size="8.5">2. Trace splines in</text>
  <text x="648" y="198" fill="#a7f3d0" font-size="8.5">   Illustrator / Canva</text>
  <text x="648" y="218" fill="#a7f3d0" font-size="8.5">3. Overlay exact</text>
  <text x="648" y="232" fill="#a7f3d0" font-size="8.5">   brand wordmark</text>

  <!-- Bottom Formula Bar -->
  <rect x="28" y="316" width="744" height="78" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="44" y="338" fill="#38bdf8" font-size="10.5" font-weight="700">CANONICAL LOGO PROMPT ARCHITECTURE (PROMPT #395 ARCHETYPE)</text>
  <text x="44" y="358" fill="#f8fafc" font-size="10" font-family="monospace">Flat vector logo of deer head, minimal graphic, by Sagi Haviv ::1 Realistic photo detail shading ::-0.5</text>
  <text x="44" y="376" fill="#34d399" font-size="10" font-family="monospace">--no realistic photo detail shading --no text --q 2 --s 750</text>
</svg>`,
      bierutCaption:
        'A four-stage commercial identity pipeline that pairs structural mark taxonomies and modernist designer priors with negative photo-detail suppression before vector typography assembly.',
      annotations: [
        {
          step: '1',
          label: 'Mark Taxonomy Selection',
          explanation:
            'Choose lettermark, mascot, emblem, or abstract geometry before prompting.',
        },
        {
          step: '2',
          label: 'Modernist Designer Compression',
          explanation:
            'Invoke Paul Rand, Sagi Haviv, or Ivan Chermayeff for flat geometry.',
        },
        {
          step: '3',
          label: 'Negative Realism & Text Gate',
          explanation:
            'Strip 3D shading and garbled text via --no text and ::-0.5 weights.',
        },
      ],
    },
    {
      id: 'mjm-ch05-svg-merch-pipeline',
      title: 'Substrate Decoupling Across Tattoos, Die-Cut Stickers & Apparel Graphics',
      subtitle:
        'Separating 2D commercial artwork from physical skin, vinyl, and fabric surfaces through negative context exclusions and contour framing',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh5Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <marker id="mjmArrViolet5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#mjmCh5Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">SUBSTRATE DECOUPLING: TATTOOS, DIE-CUT STICKERS &amp; APPAREL GRAPHICS</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Breaking latent dataset entanglement between 2D graphic designs and physical 3D surfaces</text>

  <!-- Column 1: Tattoo Stencils -->
  <rect x="28" y="70" width="236" height="322" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="146" y="94" fill="#d8b4fe" font-size="11.5" font-weight="700" text-anchor="middle">1. TATTOO STENCIL EXTRACTION</text>
  <rect x="42" y="108" width="208" height="58" rx="5" fill="#3b1219" stroke="#f43f5e" stroke-width="1" />
  <text x="146" y="126" fill="#fda4af" font-size="9.5" font-weight="700" text-anchor="middle">Latent Entanglement Trap</text>
  <text x="146" y="142" fill="#fecdd3" font-size="8.5" text-anchor="middle">"tattoo" defaults to curved human limbs,</text>
  <text x="146" y="155" fill="#fecdd3" font-size="8.5" text-anchor="middle">skin pores, and studio photography</text>

  <line x1="146" y1="166" x2="146" y2="186" stroke="#a855f7" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrViolet5)" />

  <rect x="42" y="190" width="208" height="186" rx="5" fill="#0f172a" stroke="#a855f7" stroke-width="1.2" />
  <text x="146" y="210" fill="#f3e8ff" font-size="9.5" font-weight="700" text-anchor="middle">Stencil Decoupling Protocol</text>
  <text x="52" y="228" fill="#cbd5e1" font-size="8.5">• Style: Blackwork, Dotwork, Lineart,</text>
  <text x="52" y="242" fill="#cbd5e1" font-size="8.5">  Geometric, Ambigram, Neo-Trad</text>
  <text x="52" y="260" fill="#cbd5e1" font-size="8.5">• Ground: concept on paper,</text>
  <text x="52" y="274" fill="#cbd5e1" font-size="8.5">  white background, botanical line</text>
  <text x="52" y="292" fill="#fda4af" font-size="8.5" font-weight="700">• Exclusions: --no skin --no human</text>
  <text x="52" y="306" fill="#fda4af" font-size="8.5" font-weight="700">  or Human ::-0.5</text>
  <text x="52" y="324" fill="#38bdf8" font-size="8.5">• Model routing: Test --v 4 &amp; --niji 5</text>
  <text x="52" y="338" fill="#38bdf8" font-size="8.5">  for sharper ink linework than V5.1</text>

  <!-- Column 2: Die-Cut Stickers -->
  <rect x="282" y="70" width="236" height="322" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="400" y="94" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">2. DIE-CUT STICKER FORMULA</text>
  <rect x="296" y="108" width="208" height="58" rx="5" fill="#271a0c" stroke="#d97706" stroke-width="1" />
  <text x="400" y="126" fill="#fde68a" font-size="9.5" font-weight="700" text-anchor="middle">Merchandise Boundary Rule</text>
  <text x="400" y="142" fill="#fef3c7" font-size="8.5" text-anchor="middle">Requires closed vinyl cut-line contour,</text>
  <text x="400" y="155" fill="#fef3c7" font-size="8.5" text-anchor="middle">expressive mood, and isolated ground</text>

  <line x1="400" y1="166" x2="400" y2="186" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrViolet5)" />

  <rect x="296" y="190" width="208" height="186" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="400" y="210" fill="#fef3c7" font-size="9.5" font-weight="700" text-anchor="middle">5-Layer Sticker Stack</text>
  <text x="306" y="228" fill="#cbd5e1" font-size="8.5">1. Subject + Mood (Joyful, Grumpy,</text>
  <text x="306" y="242" fill="#cbd5e1" font-size="8.5">   Adorable, Cute, Energetic)</text>
  <text x="306" y="260" fill="#cbd5e1" font-size="8.5">2. Art Style (Chibi, Kawaii, Gouache,</text>
  <text x="306" y="274" fill="#cbd5e1" font-size="8.5">   Ghibli, Pixar, 16-bit Pixel Art)</text>
  <text x="306" y="292" fill="#cbd5e1" font-size="8.5">3. Palette (Pastel, Muted, Neon)</text>
  <text x="306" y="310" fill="#34d399" font-size="8.5" font-weight="700">4. Cut Tokens: die-cut sticker,</text>
  <text x="306" y="324" fill="#34d399" font-size="8.5" font-weight="700">   white background, clear vector</text>
  <text x="306" y="342" fill="#38bdf8" font-size="8.5">5. Engine: --niji 5 or --v 4</text>

  <!-- Column 3: Apparel / T-Shirt Graphics -->
  <rect x="536" y="70" width="236" height="322" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="654" y="94" fill="#6ee7b7" font-size="11.5" font-weight="700" text-anchor="middle">3. APPAREL GRAPHIC FRAMING</text>
  <rect x="550" y="108" width="208" height="58" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="654" y="126" fill="#a7f3d0" font-size="9.5" font-weight="700" text-anchor="middle">Edge-Bleeding Containment</text>
  <text x="654" y="142" fill="#d1fae5" font-size="8.5" text-anchor="middle">Unbounded scenes create harsh rectangular</text>
  <text x="654" y="155" fill="#d1fae5" font-size="8.5" text-anchor="middle">borders when screen-printed on chests</text>

  <line x1="654" y1="166" x2="654" y2="186" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrViolet5)" />

  <rect x="550" y="190" width="208" height="186" rx="5" fill="#0f172a" stroke="#34d399" stroke-width="1.2" />
  <text x="654" y="210" fill="#d1fae5" font-size="9.5" font-weight="700" text-anchor="middle">Apparel Print Architecture</text>
  <text x="560" y="228" fill="#cbd5e1" font-size="8.5">• Framing: Enclosed within a circle,</text>
  <text x="560" y="242" fill="#cbd5e1" font-size="8.5">  pentagon, or black triangle</text>
  <text x="560" y="260" fill="#cbd5e1" font-size="8.5">• Silhouette: Dynamic silhouette,</text>
  <text x="560" y="274" fill="#cbd5e1" font-size="8.5">  contour, centered, --ar 2:3</text>
  <text x="560" y="292" fill="#cbd5e1" font-size="8.5">• Artists: Saul Bass, Dan Mumford,</text>
  <text x="560" y="306" fill="#cbd5e1" font-size="8.5">  Johan Nohr (Mork Borg doom metal)</text>
  <text x="560" y="324" fill="#6ee7b7" font-size="8.5" font-weight="700">• Substrate: Pure black background</text>
  <text x="560" y="338" fill="#6ee7b7" font-size="8.5" font-weight="700">  or isolated white background</text>
</svg>`,
      bierutCaption:
        'A three-column operational schematic showing how practitioners decouple tattoo stencils from human skin, enforce die-cut vinyl boundaries on stickers, and contain apparel graphics inside geometric contours.',
      annotations: [
        {
          step: '1',
          label: 'Tattoo Skin Decoupling',
          explanation:
            'Use concept on paper and --no skin to extract flat stencils.',
        },
        {
          step: '2',
          label: 'Five-Part Die-Cut Sticker Stack',
          explanation:
            'Combine subject, mood, style, palette, and die-cut vector boundary tokens.',
        },
        {
          step: '3',
          label: 'Geometric Apparel Containment',
          explanation:
            'Enclose t-shirt illustrations inside circles or triangles on pure black grounds.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mjm-ch05-mm1',
      name: 'The Glyph-Symbol Split (Visual Mark vs. Deterministic Type)',
      tagline: 'Synthesize the iconic geometry in latent space; set the typography in vector software.',
      naiveIntuition:
        'Prompting a company name directly inside Midjourney will yield a finished, print-ready corporate logo.',
      firstPrinciplesReality:
        'Diffusion models tokenize letters as visual textures rather than deterministic glyphs, garbling multi-letter brand strings.',
      howToApply:
        'Suppress generated text with --no text and composite clean vector typography in Illustrator after mark generation.',
    },
    {
      id: 'mjm-ch05-mm2',
      name: 'Designer-Token Compression (The Paul Rand / Chermayeff Shortcut)',
      tagline: 'Single canonical designer names activate entire modernist rulesets of geometry and negative space.',
      naiveIntuition:
        'Long paragraphs of geometric adjectives are required to force Midjourney into flat corporate minimalism.',
      firstPrinciplesReality:
        'Iconic modernist names like Paul Rand, Saul Bass, and Ivan Chermayeff compress Swiss reduction into two tokens.',
      howToApply:
        'Pair a subject noun with a modernist designer token and flat vector to enforce bold geometric abstraction.',
    },
    {
      id: 'mjm-ch05-mm3',
      name: 'Substrate Decoupling (--no skin & Isolated Grounds)',
      tagline: 'Break latent co-occurrence between commercial graphics and the physical surfaces they inhabit.',
      naiveIntuition:
        'Prompting for a tattoo or t-shirt design naturally returns an isolated, flat production stencil.',
      firstPrinciplesReality:
        'Training photos show tattoos on human arms and graphics on wrinkled shirts, coupling artwork to curved 3D substrates.',
      howToApply:
        'Append concept on paper, white background --no skin --no human to extract flat, unwarped 2D transfer stencils.',
    },
  ],
  deepSections: [
    {
      id: 'mjm-ch05-sec-5-1',
      sectionNumber: '5.1',
      title: 'Logo Taxonomy, Designer Priors, and Negative Detail Suppression',
      subtitle:
        'Structuring lettermarks, mascots, and emblems through canonical modernist designers and anti-realism exclusions',
      coreMechanism:
        'Commercial logo synthesis begins by selecting an explicit structural archetype: single-initial lettermarks (anchored by serif, slab, calligraphic, or blackletter typography vocabulary), illustrated mascot logos for sports and entertainment, official crest emblems, or abstract geometric marks. Because text-to-image models struggle with multi-letter spelling, effective workflows isolate the visual symbol or single monogram glyph and finalize wordmarks in Illustrator or Photoshop.\n\nTo flatten Midjourney’s default 3D rendering bias, prompts pair canonical identity designers—Paul Rand, Saul Bass, Massimo Vignelli, Rob Janoff, Sagi Haviv, Ivan Chermayeff, and Steff Geissbuhler—with explicit print techniques like minimal outline, gradient mark, or stencil screen-printing. Negative parameters (--no text, --no realistic photo details) and negative multiprompt weights (Realistic photo detail shading ::-0.5) strip unwanted photographic textures.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Declare the Structural Logo Archetype',
          detail:
            'Specify lettermark monogram, mascot character, emblem crest, or flat geometric abstract mark.',
        },
        {
          step: '2',
          title: 'Anchor with Designer & Technique Tokens',
          detail:
            'Invoke Paul Rand, Sagi Haviv, or Ivan Chermayeff alongside screen-print, gradient, or De Stijl.',
        },
        {
          step: '3',
          title: 'Enforce Negative Realism & Text Exclusions',
          detail:
            'Append ::1 Realistic photo detail shading ::-0.5 --no realistic photo detail shading --no text.',
        },
      ],
      keyTakeaways: [
        'Single-letter monograms succeed via typographic descriptors (serif, slab, blackletter), whereas full brand names require post-production vector software.',
        'Pairing modernist logo designers with negative shading weights forces Midjourney out of 3D rendering into clean 2D vector geometry.',
      ],
      commonPitfalls: [
        'Expecting Midjourney to spell multi-word company names cleanly inside an emblem instead of adding `--no text`.',
        'Omitting `--no realistic details`, which causes the model to render metallic bevels, drop shadows, and photographic studio lighting.',
      ],
      figures: [
        {
          file: '01376dbf21450ab599f5fc273b4ff236_smallRaw.jpg',
          originalLabel: 'Chapter 5 Logo Synthesis Exemplar',
          bierutTitle: 'Enforce Flat Geometric Reduction Through Modernist Designer Priors',
          editorialAnalysis:
            'By combining flat vector descriptors with canonical identity designer priors and explicit negative shading constraints, the model suppresses three-dimensional modeling in favor of high-contrast figure-ground clarity. The resulting silhouette translates directly into scalable Bézier paths.',
          keyTakeaways: [
            'Clean white backgrounds and high-contrast edges simplify automated vector tracing.',
            'Suppressing realistic shading preserves legibility at small app-icon scales.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch05-sec-5-2',
      sectionNumber: '5.2',
      title: 'Tattoo Stencil Extraction and Stylistic Lineage Across Model Versions',
      subtitle:
        'Decoupling ink artwork from human skin substrates while navigating geometric, blackwork, and botanical styles',
      coreMechanism:
        'Because diffusion training corpora overwhelmingly pair the word "tattoo" with photographs of human limbs, naive prompts render ink warped across curved skin. Extracting a usable flash stencil requires explicit substrate decoupling: appending concept on paper, white background alongside --no skin, --no human, or negative multiprompt weights (Human ::-0.5).\n\nOnce isolated on paper, tattoo prompts branch across distinct stylistic lineages: structural line systems (Geometric, Outline, Minimalist, Ambigram, Dotwork, Blackwork), cultural traditions (Tribal, Celtic, Japanese Zen, Traditional, Neo-Traditional), and painterly hybrids (Watercolor, Psychedelic, Art Fusion, Pierre-Joseph Redouté botanical illustration). Model version selection significantly impacts ink crispness, with --v 4 and --niji 5 frequently outperforming --v 5.1 on clean stencil linework.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Decouple Artwork from Human Skin',
          detail:
            'Include concept on paper, white background --no skin --no human to prevent anatomical warping.',
        },
        {
          step: '2',
          title: 'Specify the Ink & Shading Discipline',
          detail:
            'Select dotwork, blackwork, stick-and-poke, ambigram, neo-traditional, or Redouté botanical lineart.',
        },
        {
          step: '3',
          title: 'Route Across Model Checkpoints (--v 4 / --niji 5)',
          detail:
            'Test --v 4 and --niji 5 alongside --v 5.1 to capture sharper 2D pen and vector ink strokes.',
        },
      ],
      keyTakeaways: [
        'Appending `concept on paper, white background --no skin` converts 3D body photography into flat, transferable flash stencils.',
        'Legacy and specialized checkpoints (`--v 4` and `--niji 5`) often produce cleaner 2D linework for minimalist and geometric tattoos than default photorealistic models.',
      ],
      commonPitfalls: [
        'Prompting tattoo styles without `--no skin`, yielding foreshortened designs wrapped around forearms or backs.',
        'Relying exclusively on `--v 5.1` when a stick-and-poke or geometric stencil requires the flatter graphic bias of `--v 4`.',
      ],
      figures: [
        {
          file: '031c14bddfae670cc7bd860a563e6c96_smallRaw.jpg',
          originalLabel: 'Chapter 5 Tattoo Flash Stencil Exemplar',
          bierutTitle: 'Isolate Unwarped Ink Linework on Paper Via Negative Skin Exclusions',
          editorialAnalysis:
            'Decoupling the tattoo motif from human anatomy forces the diffusion process to treat the canvas as flat illustration paper rather than photographed dermis. Crisp black linework and balanced symmetry allow a tattoo artist to print a direct thermal transfer stencil.',
          keyTakeaways: [
            'White paper grounds eliminate skin-tone color cast and curved perspective distortion.',
            'Symmetrical line and dotwork tokens yield clean stencil geometry.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch05-sec-5-3',
      sectionNumber: '5.3',
      title: 'Die-Cut Sticker Formulas and Apparel Graphic Contours',
      subtitle:
        'Synthesizing kiss-cut vinyl merchandise and contained t-shirt graphics using 5-part formulas and geometric frames',
      coreMechanism:
        'Commercial sticker synthesis follows a five-part modular formula: Subject + Mood (joyful, grumpy, adorable) + Art Style (chibi, kawaii, gouache, pixel art, Studio Ghibli, Pixar) + Color Style (pastel, muted, neon, monochrome) + Model Version (--niji 5 for anime/kawaii or --v 4 / --v 5.1). Adding structural tokens like die-cut character sticker, knolling items, clear vector, and white background generates self-contained vinyl contours.\n\nApparel and t-shirt graphics require solving edge containment so prints do not terminate in awkward rectangular borders on fabric. Prompts enforce self-contained silhouettes by specifying enclosed within a circle, pentagon, or black triangle on a pure black or white background, often anchored by high-contrast illustrators like Saul Bass, Dan Mumford, or Johan Nohr in vertical --ar 2:3 proportions.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Assemble the 5-Part Sticker Stack',
          detail:
            'Combine subject, emotional mood, art style, color palette, and die-cut sticker boundary tokens.',
        },
        {
          step: '2',
          title: 'Contain Apparel Edges with Geometric Frames',
          detail:
            'Enclose t-shirt subjects inside circular, triangular, or dynamic silhouette contours in --ar 2:3.',
        },
        {
          step: '3',
          title: 'Lock Pure Black or White Print Grounds',
          detail:
            'Specify pure black background or isolated white background for clean screen-print color separation.',
        },
      ],
      keyTakeaways: [
        'The 5-part sticker formula pairs emotional mood and illustration style with `die-cut sticker, white background` to create ready-to-cut vinyl boundaries.',
        'Apparel graphics avoid harsh rectangular edges by enclosing compositions inside geometric shapes or dynamic silhouettes on pure black or white grounds.',
      ],
      commonPitfalls: [
        'Forgetting `white background` or `isolated background` on sticker prompts, which merges the die-cut border into a cluttered scene.',
        'Generating wide landscape scenes for t-shirts instead of vertical `--ar 2:3` compositions enclosed within circular or silhouetted contours.',
      ],
      figures: [
        {
          file: '03b06a5abf4c5170f7ee1693efc9f510_smallRaw.jpg',
          originalLabel: 'Chapter 5 Die-Cut Sticker & Apparel Graphic Exemplar',
          bierutTitle: 'Bound Merchandise Graphics Inside Self-Contained Die-Cut and Geometric Contours',
          editorialAnalysis:
            'Whether producing a vinyl laptop sticker or a screen-printed chest graphic, commercial viability depends on a clean outer boundary. Specifying die-cut contours and isolated backgrounds ensures the subject detaches cleanly from the canvas without manual alpha-channel masking.',
          keyTakeaways: [
            'Explicit `die-cut` and `contour` tokens create self-enclosed outer borders.',
            'Pairing `--niji 5` with kawaii and chibi descriptors maximizes character appeal for merchandise.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Commercial Identity & Merchandise Modality Matrix',
      description:
        'Comparing prompt mechanics, designer priors, substrate exclusions, and model checkpoints across logos, tattoos, stickers, and t-shirt designs.',
      headers: [
        'Commercial Modality',
        'Primary Style / Designer Priors',
        'Mandatory Boundary / Substrate Token',
        'Negative Exclusions',
        'Optimal Checkpoint',
      ],
      rows: [
        [
          'Corporate & Brand Logos',
          'Paul Rand, Sagi Haviv, Chermayeff',
          'Flat 2D vector, white background',
          '--no text realistic photo shading',
          '--v 5.1 (--s 750 --q 2)',
        ],
        [
          'Tattoo Flash Stencils',
          'Blackwork, Dotwork, Redouté lineart',
          'Concept on paper, white background',
          '--no skin --no human (Human ::-0.5)',
          '--v 4 or --niji 5',
        ],
        [
          'Die-Cut Vinyl Stickers',
          'Chibi, Kawaii, Ghibli, TeeTurtle',
          'Die-cut sticker, isolated background',
          '--no words, minimal detail',
          '--niji 5 or --v 4',
        ],
        [
          'Apparel & T-Shirt Prints',
          'Saul Bass, Dan Mumford, Johan Nohr',
          'Enclosed in circle/triangle, contour',
          'Isolated pure black/white ground',
          '--v 5.1 or --niji 5 (--ar 2:3)',
        ],
      ],
      verdictRule:
        'Always decouple the 2D graphic from its physical substrate (--no text for logos, --no skin for tattoos, die-cut white ground for stickers, and geometric contours for apparel).',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mjm-ch05-scen1',
      title: 'Eliminating Photorealistic Shading and Garbled Text in Brand Marks',
      roleAndContext:
        'Brand identity designer prototyping a minimalist deer-head symbol for an outdoor apparel startup.',
      symptomOrFailure:
        'Initial prompts produce 3D metallic textures, drop shadows, and illegible pseudo-Latin letters wrapped around the antlers.',
      naiveFixAndWhyItFails:
        'Adding "spelled correctly" and "simple" fails because diffusion models treat letters as textures and default to 3D lighting.',
      firstPrinciplesSolution:
        'Anchor the prompt with "Flat vector logo of deer head, by Sagi Haviv ::1 Realistic photo detail shading ::-0.5 --no realistic photo detail shading --no text".',
      measurableOutcome:
        'Generates a pure 2D high-contrast vector mark that traces cleanly in Illustrator in under two minutes.',
    },
    {
      id: 'mjm-ch05-scen2',
      title: 'Decoupling Tattoo Flash Linework from Curved Human Anatomy',
      roleAndContext:
        'Tattoo illustrator building a botanical cherry-blossom flash sheet for client thermal-transfer stencils.',
      symptomOrFailure:
        'Prompting "minimalist cherry blossom tattoo" returns photographs of human shoulders with warped perspective and skin glare.',
      naiveFixAndWhyItFails:
        'Cropping the arm photo in Photoshop leaves cylindrical distortion and skin-pore shading embedded in the linework.',
      firstPrinciplesSolution:
        'Append "botanical illustration, lines, style of Pierre-Joseph Redouté, concept on paper, white background --no skin --no human --ar 2:3".',
      measurableOutcome:
        'Delivers flat, high-contrast black-on-white botanical stencils ready for direct thermal copier transfer.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mjm-ch05-q1',
        scenarioPrompt:
          'A startup founder prompts Midjourney for a company logo and keeps getting garbled lettering and 3D photorealistic bevels. Which prompt architecture resolves both defects?',
        options: [
          {
            label: 'A',
            text: 'Increase --stylize to 1000 and wrap the company name in triple quotation marks.',
            isCorrect: false,
            explanation:
              'Higher stylize values increase ornamental complexity without fixing diffusion text rendering or 3D shading.',
          },
          {
            label: 'B',
            text: 'Pair a modernist designer token (e.g., Paul Rand or Sagi Haviv) with flat vector and append --no text realistic photo detail shading.',
            isCorrect: true,
            explanation:
              'Canonical designer priors enforce flat 2D geometry while --no text and shading exclusions suppress garbled glyphs and 3D depth.',
          },
          {
            label: 'C',
            text: 'Switch the aspect ratio to --ar 16:9 and add octane render for sharper edges.',
            isCorrect: false,
            explanation:
              'Octane render explicitly invokes 3D ray-traced lighting, worsening the photorealistic bevel problem.',
          },
          {
            label: 'D',
            text: 'Use only an emblem badge prompt without any negative parameters.',
            isCorrect: false,
            explanation:
              'Emblem prompts strongly co-occur with intertwined ribbon text and vintage 3D relief unless explicitly suppressed.',
          },
        ],
      },
      {
        id: 'mjm-ch05-q2',
        scenarioPrompt:
          'Why do tattoo prompts require explicit tokens like "concept on paper, white background --no skin --no human"?',
        options: [
          {
            label: 'A',
            text: 'Because Midjourney blocks tattoo generation unless paper is specified.',
            isCorrect: false,
            explanation:
              'Tattoo prompts are not blocked; they simply default to photographs of tattooed bodies.',
          },
          {
            label: 'B',
            text: 'To break latent co-occurrence with photographed human limbs and extract a flat, unwarped 2D stencil.',
            isCorrect: true,
            explanation:
              'Training data pairs tattoos with curved skin; negative human/skin constraints isolate the flat artwork on a planar ground.',
          },
          {
            label: 'C',
            text: 'To force the model to render full-color watercolor gradients instead of black ink.',
            isCorrect: false,
            explanation:
              'Substrate decoupling controls the surface plane, not whether the ink is blackwork or watercolor.',
          },
          {
            label: 'D',
            text: 'Because --v 5.1 cannot render black and white images without --no skin.',
            isCorrect: false,
            explanation:
              'All versions render black and white; --no skin specifically removes anatomical substrates.',
          },
        ],
      },
      {
        id: 'mjm-ch05-q3',
        scenarioPrompt:
          'Which five components form the canonical formula for synthesizing commercial die-cut stickers?',
        options: [
          {
            label: 'A',
            text: 'Camera lens, shutter speed, ISO, lighting rig, and aspect ratio.',
            isCorrect: false,
            explanation:
              'Photographic camera parameters fight against flat 2D sticker aesthetics.',
          },
          {
            label: 'B',
            text: 'Subject, Mood, Art Style, Color Style, and Model Version (paired with die-cut white background tokens).',
            isCorrect: true,
            explanation:
              'Combining subject, emotional mood, illustration style, palette, and checkpoint (--niji 5 / --v 4) with die-cut tokens produces clean vinyl designs.',
          },
          {
            label: 'C',
            text: 'Brand name, slogan, copyright symbol, CMYK profile, and DPI.',
            isCorrect: false,
            explanation:
              'Text strings and print metadata tokens do not control latent visual composition.',
          },
          {
            label: 'D',
            text: ' skin texture, studio backdrop, depth of field, and bokeh.',
            isCorrect: false,
            explanation:
              'Depth of field and bokeh blur sticker boundaries, ruining die-cut edge extraction.',
          },
        ],
      },
      {
        id: 'mjm-ch05-q4',
        scenarioPrompt:
          'When generating a complex steampunk or landscape illustration for a t-shirt print, how do you prevent harsh rectangular image borders on the shirt?',
        options: [
          {
            label: 'A',
            text: 'Specify "enclosed within a circle/triangle, contour, dynamic silhouette" on a pure black or white background.',
            isCorrect: true,
            explanation:
              'Geometric containment and isolated solid backgrounds ensure the graphic terminates in a deliberate screen-printable contour.',
          },
          {
            label: 'B',
            text: 'Add "printed on a cotton t-shirt worn by a model" to the prompt.',
            isCorrect: false,
            explanation:
              'Generating a mockup photo warps the graphic across fabric folds, making it unusable as a print master file.',
          },
          {
            label: 'C',
            text: 'Use --ar 16:9 widescreen framing with heavy atmospheric fog at the edges.',
            isCorrect: false,
            explanation:
              'Atmospheric fog creates semi-transparent gradients that are difficult to screen-print cleanly.',
          },
          {
            label: 'D',
            text: 'Remove all background tokens so Midjourney exports a native PNG alpha channel.',
            isCorrect: false,
            explanation:
              'Midjourney does not natively export transparent PNG alpha channels without background removal tools.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mjm-ch05-fc1',
        category: 'architecture',
        front: 'What are the four primary structural logo types used in Midjourney prompting?',
        back: 'Lettermarks (monograms), Mascot logos, Emblems/Badges, and Abstract/Geometric marks.',
        mentalHook: 'Initials, Characters, Crests, Shapes.',
      },
      {
        id: 'mjm-ch05-fc2',
        category: 'optimization',
        front: 'Which famous modernist logo designers serve as high-signal style tokens for flat geometric marks?',
        back: 'Paul Rand, Saul Bass, Massimo Vignelli, Rob Janoff, Sagi Haviv, Ivan Chermayeff, and Steff Geissbuhler.',
        mentalHook: 'Rand & Chermayeff = instant Swiss geometric reduction.',
      },
      {
        id: 'mjm-ch05-fc3',
        category: 'adaptation',
        front: 'How do you suppress photorealistic 3D shading in a logo prompt using both weights and flags?',
        back: 'Append `::1 Realistic photo detail shading ::-0.5 --no realistic photo detail shading --no text`.',
        mentalHook: 'Double-gate realism: negative weight + --no flag.',
      },
      {
        id: 'mjm-ch05-fc4',
        category: 'data',
        front: 'What prompt phrase decouples a tattoo design from appearing on a human body?',
        back: '`concept on paper, white background --no skin --no human` (or `Human ::-0.5`).',
        mentalHook: 'Move ink from dermis to paper.',
      },
      {
        id: 'mjm-ch05-fc5',
        category: 'evaluation',
        front: 'Why should practitioners test `--v 4` and `--niji 5` when generating minimalist tattoos and stickers?',
        back: 'Their graphic biases often produce crisper 2D outlines and flatter vector fills than the more photorealistic `--v 5.1`.',
        mentalHook: 'V4 and Niji 5 favor ink lines over camera lenses.',
      },
      {
        id: 'mjm-ch05-fc6',
        category: 'foundation',
        front: 'What is an Ambigram tattoo style?',
        back: 'A calligraphic or geometric lettering design that can be read as one or more letters (e.g., A and V) from different orientations.',
        mentalHook: 'Dual-orientation typographic symmetry.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mjm-ch05-feyn1',
        conceptTitle: 'The Hybrid Logo Pipeline & Negative Realism Suppression',
        prompt:
          'Explain why prompting "a logo for Acme Coffee" fails in Midjourney, and walk through the exact prompt mechanics and post-production workflow required to build a professional vector brand mark.',
        rubricChecklist: [
          'Explains why diffusion models garble multi-letter text strings and why `--no text` is mandatory.',
          'Identifies the four logo taxonomies (lettermark, mascot, emblem, abstract geometric).',
          'Demonstrates how canonical designer tokens (Paul Rand, Sagi Haviv, Ivan Chermayeff) and print techniques (screen-print, gradient, flat vector) enforce 2D simplicity.',
          'Describes the negative realism gate (`::-0.5` shading weight + `--no realistic details`) and final typography assembly in Illustrator/Photoshop.',
        ],
        modelExplanation:
          'Diffusion models treat text as visual texture rather than symbolic glyphs, and their default training bias favors 3D photographic shading. To engineer a professional logo, first select a structural category (lettermark, mascot, emblem, or abstract mark). Second, anchor the aesthetic with modernist designer tokens like Paul Rand or Ivan Chermayeff and medium descriptors like flat vector or screen-print. Third, apply a negative suppression gate (`::1 Realistic photo detail shading ::-0.5 --no realistic details --no text`) on a white background. Finally, trace the resulting 2D mark into vector splines and set deterministic typography in Illustrator.',
      },
      {
        id: 'mjm-ch05-feyn2',
        conceptTitle: 'Substrate Decoupling Across Tattoos, Stickers, and Apparel',
        prompt:
          'Explain the concept of "substrate decoupling" when prompting Midjourney for tattoos, die-cut stickers, and t-shirt graphics.',
        rubricChecklist: [
          'Defines latent substrate entanglement (tattoos appearing on curved arms; t-shirt designs appearing on wrinkled cotton mockups).',
          'Specifies the tattoo stencil extraction protocol (`concept on paper, white background --no skin --no human`).',
          'Outlines the 5-part die-cut sticker formula (Subject + Mood + Art Style + Palette + `--niji 5`/`--v 4` + `die-cut sticker, white background`).',
          'Explains how geometric containment (`enclosed within a circle/triangle`, `dynamic silhouette`) prevents harsh rectangular borders on apparel.',
        ],
        modelExplanation:
          'In training datasets, commercial graphics appear attached to curved 3D objects—tattoos on skin, stickers on laptops, and prints on folded shirts. Substrate decoupling strips away the physical carrier so Midjourney outputs a flat production master. For tattoos, appending `concept on paper, white background --no skin --no human` extracts an unwarped stencil. For stickers, pairing the 5-part style formula with `die-cut character sticker, white background` creates a closed vinyl border. For apparel, framing the composition inside a circle, triangle, or dynamic silhouette on a pure black or white background eliminates rectangular bleed edges.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mjm-ch05-node-logo-taxonomy',
        label: 'Structural Logo Taxonomy',
        category: 'foundation',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Classification of commercial marks into lettermarks (monograms), mascots, emblems/crests, and abstract geometric symbols.',
        whyItMatters:
          'Defines the geometric silhouette before stylistic or negative tokens are applied.',
      },
      {
        id: 'mjm-ch05-node-designer-priors',
        label: 'Modernist Designer Priors',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Prompt tokens referencing canonical identity designers (Paul Rand, Saul Bass, Ivan Chermayeff, Sagi Haviv, Massimo Vignelli).',
        whyItMatters:
          'Compresses decades of Swiss grid reduction and figure-ground balance into a two-word token.',
      },
      {
        id: 'mjm-ch05-node-realism-suppression',
        label: 'Negative Realism & Text Gate',
        category: 'optimization',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Combining `--no text realistic photo detail shading` with negative multiprompt weights (`::-0.5`) to force flat 2D vector output.',
        formulaOrRule: 'Mark ::1 Realistic photo detail shading ::-0.5 --no text',
        whyItMatters:
          'Prevents 3D bevels, studio shadows, and illegible pseudo-text from corrupting scalable marks.',
      },
      {
        id: 'mjm-ch05-node-substrate-decoupling',
        label: 'Tattoo Substrate Decoupling',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Using `concept on paper, white background --no skin --no human` to separate tattoo flash art from photographed human limbs.',
        whyItMatters:
          'Produces flat, unwarped 2D linework suitable for thermal stencil transfer.',
      },
      {
        id: 'mjm-ch05-node-sticker-formula',
        label: 'Five-Part Die-Cut Sticker Formula',
        category: 'data',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Structured stack of Subject + Mood + Art Style + Color Style + Model Flag (`--niji 5`/`--v 4`) with `die-cut sticker, white background`.',
        whyItMatters:
          'Guarantees self-contained vinyl cut-lines and cohesive character appeal.',
      },
      {
        id: 'mjm-ch05-node-apparel-contour',
        label: 'Apparel Geometric Containment',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 3,
        definition:
          'Enclosing t-shirt graphics inside circles, pentagons, triangles, or dynamic silhouettes on pure black or white backgrounds.',
        whyItMatters:
          'Eliminates harsh rectangular image edges when screen-printing onto garments.',
      },
    ],
    edges: [
      {
        source: 'mjm-ch05-node-logo-taxonomy',
        target: 'mjm-ch05-node-designer-priors',
        relationship: 'prerequisite_for',
        explanation:
          'Selecting a structural mark archetype precedes anchoring its modernist designer aesthetic.',
      },
      {
        source: 'mjm-ch05-node-realism-suppression',
        target: 'mjm-ch05-node-designer-priors',
        relationship: 'optimizes',
        explanation:
          'Negative shading and text exclusions keep modernist designer outputs strictly flat and vector-ready.',
      },
      {
        source: 'mjm-ch05-node-realism-suppression',
        target: 'mjm-ch05-node-substrate-decoupling',
        relationship: 'part_of',
        explanation:
          'Both mechanisms use negative weights and `--no` flags to strip unwanted 3D photographic context.',
      },
      {
        source: 'mjm-ch05-node-substrate-decoupling',
        target: 'mjm-ch05-node-sticker-formula',
        relationship: 'prerequisite_for',
        explanation:
          'Isolating artwork on a clean white ground enables clean die-cut sticker boundaries.',
      },
      {
        source: 'mjm-ch05-node-apparel-contour',
        target: 'mjm-ch05-node-sticker-formula',
        relationship: 'optimizes',
        explanation:
          'Closed geometric contours allow graphics to function interchangeably as apparel prints and die-cut stickers.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes:
      'Covers Logos (taxonomy, famous designers, print techniques, negative exclusions), Tattoos (22 styles, --no skin decoupling, V4/Niji routing), Stickers (5-part formula, die-cut tokens), and T-Shirt Designs (geometric containment, isolated grounds). Zero forbidden phrases.',
  },
};

export const mjmCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Manga, Anime, Character Sheet Consistency, and Niji Model Aesthetics',
  subtitle:
    'The Niji 5 architecture, four style sub-modes, mangaka vs. background directors, holographic materials, and character turnaround sheets',
  readingTimeMinutes: 6,
  sourceWordCount: 2059,
  executiveThesis:
    'Midjourney’s `--niji` architecture replaces Western photorealistic priors with dedicated anime-trained weights that natively resolve cel-shading, dynamic linework, and Japanese visual tropes. By orchestrating Niji 5’s four style sub-modes (`cute`, `expressive`, `original`, `scenic`), mangaka and background director tokens, and multi-view character sheet prompts, creators produce cohesive 2D narrative assets.',
  paradigmShift: {
    oldWay:
      'Prompting anime keywords inside standard Midjourney models produced uncanny 3D semi-realistic faces and inconsistent ink linework.',
    newWay:
      'Activating `--niji 5` with explicit `--style` sub-modes routes generation through an architecture native to 2D cel-shading and manga aesthetics.',
    whyItChanged:
      'A specialized anime-trained model checkpoint encodes Japanese demographic genres, character archetypes, and studio lighting conventions directly.',
  },
  customDiagrams: [
    {
      id: 'mjm-ch06-svg-niji-modes',
      title: 'Niji Architecture & Four Style Sub-Mode Routing Topology',
      subtitle:
        'Dispatching prompts across Niji 5 sub-modes (cute, expressive, original, scenic) and Niji 4 retro checkpoints',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh6Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <marker id="mjmArrCyan6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="mjmArrPink6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f472b6" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#mjmCh6Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">NIJI ARCHITECTURE &amp; FOUR STYLE SUB-MODE ROUTING TOPOLOGY</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Selecting specialized anime weight biases for character charm, illustrated sophistication, cinematic vistas, or retro grain</text>

  <!-- Root Dispatcher Box -->
  <rect x="250" y="66" width="300" height="52" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="1.8" />
  <text x="400" y="88" fill="#fce7f3" font-size="12" font-weight="700" text-anchor="middle">NIJI ENGINE DISPATCHER (--niji 5 / --niji 4)</text>
  <text x="400" y="105" fill="#f9a8d4" font-size="9.5" text-anchor="middle">Dedicated anime &amp; Eastern illustration architecture</text>

  <!-- Flow Arrows -->
  <line x1="290" y1="118" x2="112" y2="152" stroke="#f472b6" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#mjmArrPink6)" />
  <line x1="360" y1="118" x2="304" y2="152" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#mjmArrCyan6)" />
  <line x1="440" y1="118" x2="496" y2="152" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#mjmArrCyan6)" />
  <line x1="510" y1="118" x2="688" y2="152" stroke="#f472b6" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#mjmArrPink6)" />

  <!-- Mode 1: --style cute -->
  <rect x="24" y="156" width="176" height="162" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="1.5" />
  <text x="112" y="178" fill="#f9a8d4" font-size="11" font-weight="700" text-anchor="middle">--style cute</text>
  <text x="112" y="193" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Charming &amp; Adorable Bias</text>
  <rect x="36" y="204" width="152" height="102" rx="5" fill="#0f172a" stroke="#db2777" stroke-width="1" />
  <text x="44" y="222" fill="#fce7f3" font-size="8.5">• Chibi &amp; kawaii proportions</text>
  <text x="44" y="238" fill="#fce7f3" font-size="8.5">• Clear vector &amp; watercolor</text>
  <text x="44" y="254" fill="#fce7f3" font-size="8.5">  line art illustrations</text>
  <text x="44" y="270" fill="#fce7f3" font-size="8.5">• Pastel props, plushies &amp;</text>
  <text x="44" y="286" fill="#fce7f3" font-size="8.5">  cozy interior rooms</text>

  <!-- Mode 2: --style expressive -->
  <rect x="216" y="156" width="176" height="162" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="304" y="178" fill="#7dd3fc" font-size="11" font-weight="700" text-anchor="middle">--style expressive</text>
  <text x="304" y="193" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Sophisticated Illustrated Feel</text>
  <rect x="228" y="204" width="152" height="102" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="236" y="222" fill="#e0f2fe" font-size="8.5">• Refined adult proportions</text>
  <text x="236" y="238" fill="#e0f2fe" font-size="8.5">• Complex painterly shading</text>
  <text x="236" y="254" fill="#e0f2fe" font-size="8.5">  &amp; high-fashion fabrics</text>
  <text x="236" y="270" fill="#e0f2fe" font-size="8.5">• Pixiv, WLOP &amp; Yoshitaka</text>
  <text x="236" y="286" fill="#e0f2fe" font-size="8.5">  Amano editorial look</text>

  <!-- Mode 3: --style original -->
  <rect x="408" y="156" width="176" height="162" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="496" y="178" fill="#d8b4fe" font-size="11" font-weight="700" text-anchor="middle">--style original</text>
  <text x="496" y="193" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Baseline Niji 5 (Pre-May 2023)</text>
  <rect x="420" y="204" width="152" height="102" rx="5" fill="#0f172a" stroke="#9333ea" stroke-width="1" />
  <text x="428" y="222" fill="#f3e8ff" font-size="8.5">• Balanced classic anime</text>
  <text x="428" y="238" fill="#f3e8ff" font-size="8.5">  character &amp; action default</text>
  <text x="428" y="254" fill="#f3e8ff" font-size="8.5">• Faithful to mangaka tokens</text>
  <text x="428" y="270" fill="#f3e8ff" font-size="8.5">  (Toriyama, Oda, Takeuchi,</text>
  <text x="428" y="286" fill="#f3e8ff" font-size="8.5">  Inoue, Yoshinari)</text>

  <!-- Mode 4: --style scenic -->
  <rect x="600" y="156" width="176" height="162" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="688" y="178" fill="#6ee7b7" font-size="11" font-weight="700" text-anchor="middle">--style scenic</text>
  <text x="688" y="193" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Cinematic Worldbuilding</text>
  <rect x="612" y="204" width="152" height="102" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="620" y="222" fill="#d1fae5" font-size="8.5">• Grand fantastical vistas</text>
  <text x="620" y="238" fill="#d1fae5" font-size="8.5">• Makoto Shinkai clouds,</text>
  <text x="620" y="254" fill="#d1fae5" font-size="8.5">  rain stations &amp; Mt. Fuji</text>
  <text x="620" y="270" fill="#d1fae5" font-size="8.5">• Pair with People ::-0.5</text>
  <text x="620" y="286" fill="#d1fae5" font-size="8.5">  --no humans for pure sets</text>

  <!-- Bottom Retro & Genre Bar -->
  <rect x="24" y="334" width="752" height="64" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="40" y="356" fill="#fbbf24" font-size="10.5" font-weight="700">RETRO ERA ROUTING (NIJI V4 ADVANTAGE) &amp; DEMOGRAPHIC GENRE ANCHORS</text>
  <text x="40" y="374" fill="#fde68a" font-size="9.5">• Retro Nostalgia: 1970s / 1980s / 1990s Anime + Tsukasa Hojo / Akira 1988 film (Niji 4 outperforms V5.1 for vintage cel grain)</text>
  <text x="40" y="389" fill="#cbd5e1" font-size="9">• Genre &amp; Archetype Tokens: Shonen, Seinen, Shoujo, Josei, Bishōnen, Bishōjo, Chūnibyō, Ahoge, Kuudere, Tsundere, Yandere</text>
</svg>`,
      bierutCaption:
        'A routing schematic of the Niji model ecosystem showing how the four Niji 5 style sub-modes and the Niji 4 retro checkpoint partition character proportions, brushwork, and environmental scale.',
      annotations: [
        {
          step: '1',
          label: 'Cute vs. Expressive Polarity',
          explanation:
            'Route chibi kawaii graphics to cute and refined paintings to expressive.',
        },
        {
          step: '2',
          label: 'Scenic Environmental Dominance',
          explanation:
            'Pair --style scenic with Makoto Shinkai and --no humans for backgrounds.',
        },
        {
          step: '3',
          label: 'Niji 4 Retro Cel Fidelity',
          explanation:
            'Use Niji 4 with 1980s anime tokens for authentic vintage grain.',
        },
      ],
    },
    {
      id: 'mjm-ch06-svg-character-pipeline',
      title: 'Character Consistency Sheets, Screentone Manga & Chromatic Materials',
      subtitle:
        'Locking multi-angle character identity on a single canvas while controlling monochrome halftone dots and futuristic PVC refractions',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh6Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmArrEmerald6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#mjmCh6Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">ANIME PRODUCTION SYSTEMS: SHEETS, SCREENTONES &amp; CHROMATIC MATERIALS</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11">Three specialized token vocabularies for multi-pose character locking, print manga halftones, and holographic fashion</text>

  <!-- Panel 1: Character Consistency Sheets -->
  <rect x="28" y="70" width="236" height="322" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="146" y="94" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. CHARACTER CONCEPT SHEETS</text>
  <rect x="42" y="108" width="208" height="268" rx="5" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="146" y="128" fill="#e0f2fe" font-size="9.5" font-weight="700" text-anchor="middle">Single-Canvas Identity Lock</text>
  <text x="52" y="148" fill="#cbd5e1" font-size="8.5">• Character design sheet</text>
  <text x="52" y="166" fill="#cbd5e1" font-size="8.5">• Turnaround sheet (front/side/back)</text>
  <text x="52" y="184" fill="#cbd5e1" font-size="8.5">• Character pose sheet</text>
  <text x="52" y="202" fill="#cbd5e1" font-size="8.5">• Character expression sheet</text>
  <text x="52" y="220" fill="#cbd5e1" font-size="8.5">• Items / accessories sheet</text>
  <text x="52" y="238" fill="#cbd5e1" font-size="8.5">• Dress-up / fashion sheet</text>
  <rect x="52" y="256" width="188" height="104" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="146" y="274" fill="#7dd3fc" font-size="9" font-weight="700" text-anchor="middle">Why Single-Canvas Works</text>
  <text x="60" y="292" fill="#94a3b8" font-size="8">Shared self-attention across one</text>
  <text x="60" y="306" fill="#94a3b8" font-size="8">latent grid forces identical hair,</text>
  <text x="60" y="320" fill="#94a3b8" font-size="8">costume colors, and proportions</text>
  <text x="60" y="334" fill="#94a3b8" font-size="8">across all rendered angles.</text>

  <line x1="264" y1="230" x2="282" y2="230" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrEmerald6)" />

  <!-- Panel 2: Manga & Collectibles -->
  <rect x="282" y="70" width="236" height="322" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="400" y="94" fill="#d8b4fe" font-size="11.5" font-weight="700" text-anchor="middle">2. MANGA &amp; COLLECTIBLE TOYS</text>
  <rect x="296" y="108" width="208" height="126" rx="5" fill="#0f172a" stroke="#9333ea" stroke-width="1" />
  <text x="400" y="128" fill="#f3e8ff" font-size="9.5" font-weight="700" text-anchor="middle">Print Manga Mechanics</text>
  <text x="306" y="146" fill="#cbd5e1" font-size="8.5">• Manga drawing &amp; manga shading</text>
  <text x="306" y="164" fill="#cbd5e1" font-size="8.5">• Manga comic strip panels</text>
  <text x="306" y="182" fill="#cbd5e1" font-size="8.5">• Manga screentone</text>
  <text x="306" y="200" fill="#cbd5e1" font-size="8.5">• Widely spaced dots / halftone</text>

  <rect x="296" y="246" width="208" height="130" rx="5" fill="#0f172a" stroke="#9333ea" stroke-width="1" />
  <text x="400" y="266" fill="#f3e8ff" font-size="9.5" font-weight="700" text-anchor="middle">3D Figure &amp; Toy Synthesis</text>
  <text x="306" y="284" fill="#cbd5e1" font-size="8.5">• Chibi / miniature toy figure</text>
  <text x="306" y="302" fill="#cbd5e1" font-size="8.5">• In a glass display case</text>
  <text x="306" y="320" fill="#cbd5e1" font-size="8.5">• Made of plastic / polyester putty</text>
  <text x="306" y="338" fill="#cbd5e1" font-size="8.5">• 3D clay render, Blender PBR</text>

  <line x1="518" y1="230" x2="536" y2="230" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrEmerald6)" />

  <!-- Panel 3: Futuristic Refraction Materials -->
  <rect x="536" y="70" width="236" height="322" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="654" y="94" fill="#6ee7b7" font-size="11.5" font-weight="700" text-anchor="middle">3. FUTURISTIC RGB OPTICS</text>
  <rect x="550" y="108" width="208" height="268" rx="5" fill="#0f172a" stroke="#059669" stroke-width="1" />
  <text x="654" y="128" fill="#d1fae5" font-size="9.5" font-weight="700" text-anchor="middle">Niji Rainbow Refraction Priors</text>
  <text x="560" y="148" fill="#cbd5e1" font-size="8.5">• Chromatic aberration</text>
  <text x="560" y="166" fill="#cbd5e1" font-size="8.5">• Iridescent opaque thin film RGB</text>
  <text x="560" y="184" fill="#cbd5e1" font-size="8.5">• Holographic &amp; glitch art</text>
  <text x="560" y="202" fill="#cbd5e1" font-size="8.5">• Transparent vinyl clothing</text>
  <text x="560" y="220" fill="#cbd5e1" font-size="8.5">• Transparent PVC jacket</text>
  <text x="560" y="238" fill="#cbd5e1" font-size="8.5">• Colorful reflective fabric inner</text>
  <rect x="560" y="256" width="188" height="104" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="654" y="274" fill="#6ee7b7" font-size="9" font-weight="700" text-anchor="middle">Harajuku &amp; Cyberpunk Fusion</text>
  <text x="568" y="292" fill="#d1fae5" font-size="8">Niji 5 natively resolves specular</text>
  <text x="568" y="306" fill="#d1fae5" font-size="8">rainbow caustics across clear PVC</text>
  <text x="568" y="320" fill="#d1fae5" font-size="8">raincoats, water hair (Houseki no</text>
  <text x="568" y="334" fill="#d1fae5" font-size="8">Kuni style), and neon night streets.</text>
</svg>`,
      bierutCaption:
        'A three-pillar breakdown of Niji production capabilities across single-canvas character turnaround sheets, monochrome halftone manga textures, and iridescent thin-film PVC materials.',
      annotations: [
        {
          step: '1',
          label: 'Single-Canvas Turnaround Sheets',
          explanation:
            'Shared attention across one canvas locks costume and face geometry.',
        },
        {
          step: '2',
          label: 'Screentone & Collectible Tokens',
          explanation:
            'Invoke halftone screentones for manga or polyester putty for figures.',
        },
        {
          step: '3',
          label: 'Thin-Film RGB & PVC Refraction',
          explanation:
            'Pair transparent PVC clothing with iridescent thin film RGB.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mjm-ch06-mm1',
      name: 'Foreground Mangaka vs. Environmental Director Decoupling',
      tagline: 'Use character illustrators for figure anatomy and film directors for atmospheric world lighting.',
      naiveIntuition:
        'Any famous anime creator name works equally well for both character portraits and architectural landscapes.',
      firstPrinciplesReality:
        'Mangaka like Akira Toriyama or Takehiko Inoue govern figure linework, while directors like Makoto Shinkai govern volumetric sky and city lighting.',
      howToApply:
        'Select mangaka tokens for character focus and pair --style scenic with Makoto Shinkai or Mamoru Oshii for environments.',
    },
    {
      id: 'mjm-ch06-mm2',
      name: 'Niji Sub-Mode Specialization (cute, expressive, original, scenic)',
      tagline: 'Four fine-tuned weight biases shift Niji 5 between flat kawaii graphics and cinematic vistas.',
      naiveIntuition:
        'The --niji 5 flag enforces a single uniform anime aesthetic across all prompts.',
      firstPrinciplesReality:
        'Niji 5 splits into four distinct sub-modes that alter proportion ratios, shading complexity, and background dominance.',
      howToApply:
        'Append --style cute for flat vector illustrations, --style expressive for detailed portraits, or --style scenic for wide environments.',
    },
    {
      id: 'mjm-ch06-mm3',
      name: 'Single-Canvas Turnaround Constraint (Character Sheet Prompting)',
      tagline: 'Force multiple orthographic poses onto one latent canvas to lock outfit and facial identity.',
      naiveIntuition:
        'Generating separate prompts with the same text description will yield identical anime characters across shots.',
      firstPrinciplesReality:
        'Independent diffusion seeds sample different latent trajectories, drifting hair geometry and costume details between runs.',
      howToApply:
        'Prompt character design sheet, turnaround sheet, or character expression sheet to lock multi-angle consistency inside one generation.',
    },
  ],
  deepSections: [
    {
      id: 'mjm-ch06-sec-6-1',
      sectionNumber: '6.1',
      title: 'Niji Model Architecture, Four Style Sub-Modes, and Retro Version Routing',
      subtitle:
        'Controlling anime aesthetics through --style cute, expressive, original, scenic, and Niji 4 vintage checkpoints',
      coreMechanism:
        'Unlike standard Midjourney checkpoints trained predominantly on Western photography and illustration, the Niji model (--niji 5) uses an architecture specifically tuned for anime, manga, and Eastern visual aesthetics. Within Niji 5, four explicit --style parameters steer latent generation: --style cute maximizes chibi and pastel charm; --style expressive introduces sophisticated painterly depth; --style original restores the pre-May 2023 Niji 5 baseline; and --style scenic prioritizes cinematic environments.\n\nWhen targeting vintage cel-animation aesthetics—specifically 1970s, 1980s, or 1990s retro nostalgia—model version selection becomes decisive. Niji Version 4 (--niji 4) preserves authentic analog film grain, muted pastel cel-shading, and classic linework (such as Tsukasa Hojo, Toshihiro Kawamoto, or the 1988 film Akira) more faithfully than V5.1.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Activate the Niji Architecture (--niji 5)',
          detail:
            'Append --niji 5 to switch from Western photographic priors to native anime linework and cel-shading.',
        },
        {
          step: '2',
          title: 'Select the Sub-Mode Weight Bias',
          detail:
            'Choose --style cute, --style expressive, --style original, or --style scenic to match the subject.',
        },
        {
          step: '3',
          title: 'Route Retro Era Prompts to Niji 4',
          detail:
            'Pair 1980s anime or retro nostalgia with Tsukasa Hojo or Akira tokens and test --niji 4.',
        },
      ],
      keyTakeaways: [
        'Niji 5’s four `--style` flags (`cute`, `expressive`, `original`, `scenic`) allow precise switching between flat kawaii graphics, painterly portraits, and cinematic landscapes.',
        'For 1970s–1990s retro anime aesthetics, `--niji 4` captures vintage cel grain better than newer photorealistic checkpoints.',
      ],
      commonPitfalls: [
        'Using default `--niji 5` for wide background plates without `--style scenic`, causing the model to crowd the frame with a close-up character.',
        'Forcing 1980s retro anime prompts through `--v 5.1`, which over-smooths vintage cel shading into modern digital gradients.',
      ],
      figures: [
        {
          file: '080db633fc73cce354b739f9302f6162_smallRaw.jpg',
          originalLabel: 'Chapter 6 Niji 5 Style Sub-Mode & Character Exemplar',
          bierutTitle: 'Steer Proportion and Shading Depth Through Niji 5 Style Sub-Modes',
          editorialAnalysis:
            'Activating the Niji architecture immediately aligns eye geometry, hair strand clumping, and cel-shaded specular highlights with Japanese studio conventions. Switching across the four style flags shifts the rendering from flat kawaii simplicity to intricate editorial illustration.',
          keyTakeaways: [
            'Niji 5 natively understands anime hair physics, eye highlights, and cel contours.',
            'Combining `--ar 2:3` with `--s 750` maximizes vertical character composition.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch06-sec-6-2',
      sectionNumber: '6.2',
      title: 'Mangaka Linework vs. Cinematic Background Directors and Multi-Weight Scene Control',
      subtitle:
        'Separating character creator priors from environmental worldbuilders and depopulating sets via negative multiprompts',
      coreMechanism:
        'Effective anime prompting separates character mangaka from cinematic background directors. Character-focused compositions rely on mangaka and illustrator priors: Hayao Miyazaki (Studio Ghibli), Akira Toriyama (Dragon Ball), Eiichiro Oda (One Piece), Naoko Takeuchi (Sailor Moon), Takehiko Inoue (Slam Dunk), Hisashi Hirai (Gundam), Yoshitaka Amano, and Kawajiri Yoshiaki.\n\nConversely, architectural and landscape plates—Tokyo train stations, coffee shops, Mt. Fuji, Osaka Castle, or Kowloon streets—draw on environmental directors: Makoto Shinkai (Your Name, The Garden of Words), Mamoru Oshii (Ghost in the Shell), Taiyo Matsumoto (Tekkonkinkreet), Hideaki Anno (Evangelion), and Mateusz Urbanowicz. Because Niji strongly favors drawing people, generating pure background wallpapers requires combining --style scenic with negative multiprompt weights (::1 Humans ::-0.5 --no humans).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Match Creator Tokens to Figure vs. Environment',
          detail:
            'Use Toriyama, Oda, or Inoue for character anatomy; use Makoto Shinkai or Mamoru Oshii for skies and cities.',
        },
        {
          step: '2',
          title: 'Balance Multi-Weight Environmental Elements',
          detail:
            'Assign positive multiprompt weights (e.g., Brick roads ::2 Sun rays ::1.2 Lush vegetation ::0.5).',
        },
        {
          step: '3',
          title: 'Depopulate Pure Background Plates',
          detail:
            'Append ::1 Humans ::-0.5 --no humans --style scenic to suppress unwanted foreground characters.',
        },
      ],
      keyTakeaways: [
        'Pairing Makoto Shinkai or Mateusz Urbanowicz with `--style scenic` transforms mundane settings like rainy train stations and cafés into hyper-detailed anime backgrounds.',
        'Suppressing Niji’s strong character bias on landscape plates requires both negative weights (`Humans ::-0.5`) and `--no humans`.',
      ],
      commonPitfalls: [
        'Using a character mangaka token like Eiichiro Oda when attempting to render a quiet photorealistic Tokyo café interior.',
        'Omitting `--no people, person, character` on scenic flying-island prompts, resulting in an unintended protagonist blocking the vista.',
      ],
      figures: [
        {
          file: '0efe83527549545563b18bb727628998_smallRaw.jpg',
          originalLabel: 'Chapter 6 Scenic Anime Environment & Atmospheric Lighting Exemplar',
          bierutTitle: 'Orchestrate Volumetric Sky Lighting and Architectural Depth Via Director Tokens',
          editorialAnalysis:
            'Referencing environmental directors like Makoto Shinkai alongside `--style scenic` shifts latent attention toward cumulus cloud luminance, wet pavement reflections, and atmospheric perspective. Negative human weights keep the architectural framing unobstructed.',
          keyTakeaways: [
            'Makoto Shinkai tokens trigger high-dynamic-range sky and rain reflections.',
            'Multiprompt weighting balances architectural structure against foliage and sun rays.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch06-sec-6-3',
      sectionNumber: '6.3',
      title: 'Character Consistency Sheets, Manga Screentones, Futuristic PVC, and Archetype Tokens',
      subtitle:
        'Engineering multi-pose turnarounds, monochrome halftone dots, thin-film RGB refractions, and Japanese trope vocabulary',
      coreMechanism:
        'Production pipelines require three specialized token sets: character sheets, print manga textures, and futuristic materials. Prompting character design sheet, turnaround sheet, character expression sheet, pose sheet, or dress-up sheet forces Niji to render multiple orthographic views on a single canvas, locking costume and facial identity. Print manga aesthetics rely on manga screentone, halftone pattern, and widely spaced dots, while 3D collectibles invoke chibi toy figure in a glass display case made of plastic or polyester putty.\n\nFor futuristic Harajuku and cyberpunk fashion, Niji excels at rendering rainbow caustics across translucent fabrics using chromatic aberration, holographic, iridescent opaque thin film RGB, and transparent PVC/vinyl clothing. Finally, Japanese demographic and personality tokens—Shonen, Seinen, Shoujo, Josei, Bishōnen, Bishōjo, Chūnibyō, Ahoge, Kuudere, Tsundere, and Yandere—precisely govern facial expression and posture.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Lock Multi-View Character Consistency',
          detail:
            'Specify character design sheet, turnaround sheet, expression sheet, or accessories sheet on a centered canvas.',
        },
        {
          step: '2',
          title: 'Apply Print Screentone or Thin-Film RGB Materials',
          detail:
            'Invoke halftone manga screentones for print or transparent PVC jacket with iridescent thin film RGB for cyberpunk.',
        },
        {
          step: '3',
          title: 'Steer Expression with Japanese Archetype Tokens',
          detail:
            'Inject demographic (Shonen, Shoujo, Seinen) and trope tokens (Bishōnen, Ahoge, Kuudere, Tsundere).',
        },
      ],
      keyTakeaways: [
        'Character turnaround and expression sheets solve cross-prompt seed drift by rendering multiple poses and angles within a single shared self-attention canvas.',
        'Niji 5 natively masters complex optical refractions when prompted with `transparent PVC`, `iridescent opaque thin film RGB`, and `chromatic aberration`.',
      ],
      commonPitfalls: [
        'Trying to maintain identical costume details across five separate single-portrait prompts instead of generating a consolidated `character turnaround sheet` first.',
        'Using generic English adjectives like "shy" or "arrogant" when native anime tokens (`Dandere`, `Kuudere`, `Chūnibyō`, `Ahoge`) activate far more specific visual tropes.',
      ],
      figures: [
        {
          file: '0f9be53a3a3326420214efcbfb833f52_smallRaw.jpg',
          originalLabel: 'Chapter 6 Character Design Sheet & Futuristic Material Exemplar',
          bierutTitle: 'Lock Multi-Angle Costume Identity and Chromatic Fabric Refractions in Niji 5',
          editorialAnalysis:
            'Combining character sheet framing with futuristic material descriptors (metallic jumpsuit, detached sleeves, transparent PVC, and chromatic aberration) yields production-ready concept art. The model maintains consistent color themes and accessory geometry across the composition.',
          keyTakeaways: [
            'Turnaround and concept design sheet tokens organize multiple views on one page.',
            'Transparent vinyl and iridescent RGB tokens unlock Niji’s signature rainbow highlights.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Niji Model Sub-Modes & Anime Production Routing Matrix',
      description:
        'Selecting the optimal Niji checkpoint, style sub-mode, creator prior, and structural token across anime production tasks.',
      headers: [
        'Production Task',
        'Model & Style Flag',
        'Canonical Creator / Material Prior',
        'Structural / Negative Token',
        'Primary Visual Output',
      ],
      rows: [
        [
          'Kawaii Chibi & Flat Illustrations',
          '--niji 5 --style cute (--s 400)',
          'Momoko Sakura, Studio Ghibli, pastel',
          'Clear vector, watercolor line art',
          'Simplified proportions & charming props',
        ],
        [
          'Sophisticated Editorial Portraits',
          '--niji 5 --style expressive',
          'Yoshitaka Amano, WLOP, Pixiv',
          'Iridescent thin film RGB, PVC jacket',
          'Painterly shading & intricate fashion',
        ],
        [
          'Cinematic Background Plates',
          '--niji 5 --style scenic',
          'Makoto Shinkai, Mamoru Oshii',
          'Humans ::-0.5 --no humans, wide angle',
          'Unobstructed clouds, cities & temples',
        ],
        [
          '1980s Retro Cel & Multi-View Sheets',
          '--niji 4 (Retro) / --niji 5 (Sheets)',
          'Tsukasa Hojo, Akira 1988, Toriyama',
          '1980s anime / Character turnaround sheet',
          'Vintage cel grain or multi-pose lock',
        ],
      ],
      verdictRule:
        'Match `--style cute` to flat vector charm, `--style expressive` to high-detail fashion, `--style scenic` (with `--no humans`) to Makoto Shinkai environments, and `--niji 4` to 1980s retro cel nostalgia.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mjm-ch06-scen1',
      title: 'Eliminating Unwanted Characters from Cinematic Anime Environment Plates',
      roleAndContext:
        'Visual novel art director generating an empty rainy Tokyo train station background plate.',
      symptomOrFailure:
        'Prompting "Raining city train station, Makoto Shinkai --niji 5" repeatedly places an anime teenager in the center foreground.',
      naiveFixAndWhyItFails:
        'Adding "empty station" fails because Niji’s training weights strongly couple train stations with character drama.',
      firstPrinciplesSolution:
        'Prompt "Raining, City Train Station, Style of The Garden of Words, background ::1 Humans ::-0.5 --no humans --niji 5 --style scenic".',
      measurableOutcome:
        'Produces an unobstructed cinematic environment plate with signature Shinkai rain reflections and zero foreground characters.',
    },
    {
      id: 'mjm-ch06-scen2',
      title: 'Locking Multi-Angle Costume Consistency for a Game Protagonist',
      roleAndContext:
        'Indie game concept artist designing a cyberpunk heroine with a metallic green jumpsuit and detached sleeves.',
      symptomOrFailure:
        'Generating front, side, and back views in separate prompts changes the helmet visor, sleeve cut, and shade of green each time.',
      naiveFixAndWhyItFails:
        'Reusing the same seed across changed view prompts still shifts latent noise distribution and alters costume geometry.',
      firstPrinciplesSolution:
        'Consolidate into a single canvas: "Character sheet, turnaround sheet, anime girl, metallic jumpsuit, green theme, detached sleeves, centered --ar 2:3 --niji 5".',
      measurableOutcome:
        'Renders front, profile, and accessory callouts simultaneously on one sheet with identical palette and garment structure.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mjm-ch06-q1',
        scenarioPrompt:
          'You are creating a wide aerial game poster of a floating fantasy island in Niji 5 and want rich environmental worldbuilding with zero characters in the frame. Which parameter combination is optimal?',
        options: [
          {
            label: 'A',
            text: '--niji 5 --style cute with Akira Toriyama as the artist token.',
            isCorrect: false,
            explanation:
              '--style cute and Toriyama both prioritize foreground character figures over expansive landscapes.',
          },
          {
            label: 'B',
            text: '--niji 5 --style scenic paired with ::1 People, person, character ::-0.5 --no people, person, character.',
            isCorrect: true,
            explanation:
              '--style scenic shifts weights toward fantastical surroundings while negative multiprompt weights and --no flags suppress Niji’s default character bias.',
          },
          {
            label: 'C',
            text: '--v 5.1 with "character turnaround sheet" and "tsundere".',
            isCorrect: false,
            explanation:
              'Turnaround sheets and personality tropes explicitly force multi-pose character generation.',
          },
          {
            label: 'D',
            text: '--niji 5 --style expressive with "close-up portrait".',
            isCorrect: false,
            explanation:
              'Close-up portraits eliminate the wide aerial environmental vista.',
          },
        ],
      },
      {
        id: 'mjm-ch06-q2',
        scenarioPrompt:
          'Which material token cluster activates Niji Mode’s signature rainbow specular refractions on futuristic Harajuku and cyberpunk clothing?',
        options: [
          {
            label: 'A',
            text: 'Manga screentone, halftone pattern, and widely spaced dots.',
            isCorrect: false,
            explanation:
              'Screentone and halftone tokens generate monochrome print manga dot shading, not rainbow fabric refractions.',
          },
          {
            label: 'B',
            text: 'Chromatic aberration, holographic, iridescent opaque thin film RGB, and transparent PVC / vinyl clothing.',
            isCorrect: true,
            explanation:
              'These optical and polymer tokens trigger Niji’s specialized thin-film rainbow caustics on translucent garments.',
          },
          {
            label: 'C',
            text: 'Made of polyester putty, plastic toy figure, in a glass display case.',
            isCorrect: false,
            explanation:
              'Polyester putty and display case tokens synthesize physical 3D collectible figurines rather than iridescent fashion.',
          },
          {
            label: 'D',
            text: '1970s anime, muted pastel colors, and grain shading.',
            isCorrect: false,
            explanation:
              'Retro 1970s tokens produce flat matte cel shading rather than futuristic RGB specular highlights.',
          },
        ],
      },
      {
        id: 'mjm-ch06-q3',
        scenarioPrompt:
          'According to the chapter’s version routing rules, why should a creator test Niji Version 4 instead of V5.1 when prompting for a 1980s retro anime coffee shop scene?',
        options: [
          {
            label: 'A',
            text: 'Because V5.1 does not support the --ar 2:3 aspect ratio.',
            isCorrect: false,
            explanation:
              'V5.1 supports arbitrary aspect ratios including --ar 2:3.',
          },
          {
            label: 'B',
            text: 'Because Niji 4 captures vintage 1970s–1990s cel-animation nostalgia and muted pastel grain more authentically than V5.1.',
            isCorrect: true,
            explanation:
              'Niji 4 preserves classic hand-painted cel aesthetics when paired with 1980s anime and Tsukasa Hojo / Toshihiro Kawamoto tokens.',
          },
          {
            label: 'C',
            text: 'Because Niji 4 is the only model that supports --style scenic.',
            isCorrect: false,
            explanation:
              '--style scenic is a Niji 5 sub-mode flag, not a Niji 4 feature.',
          },
          {
            label: 'D',
            text: 'Because V5.1 only renders monochrome black-and-white manga.',
            isCorrect: false,
            explanation:
              'V5.1 renders full-color imagery by default.',
          },
        ],
      },
      {
        id: 'mjm-ch06-q4',
        scenarioPrompt:
          'What is the difference between the Japanese archetype tokens "Kuudere", "Tsundere", and "Ahoge"?',
        options: [
          {
            label: 'A',
            text: 'They are three types of manga halftone printing presses.',
            isCorrect: false,
            explanation:
              'They are character personality and visual design tropes, not print mechanisms.',
          },
          {
            label: 'B',
            text: 'Kuudere is calm and collected on the outside; Tsundere alternates between stern/hostile and hidden warmth; Ahoge is a single noticeable strand of hair sticking out.',
            isCorrect: true,
            explanation:
              'Each Japanese trope token maps directly to specific facial expressions, posture, or hair silhouette details in Niji.',
          },
          {
            label: 'C',
            text: 'They refer to the three Niji 5 style flags for background lighting.',
            isCorrect: false,
            explanation:
              'The Niji 5 style flags are cute, expressive, original, and scenic.',
          },
          {
            label: 'D',
            text: 'They are famous Studio Ghibli background directors.',
            isCorrect: false,
            explanation:
              'They are character archetype terms, not directors.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mjm-ch06-fc1',
        category: 'architecture',
        front: 'What are the four `--style` sub-modes available in `--niji 5`?',
        back: '`--style cute` (adorable/chibi), `--style expressive` (sophisticated illustrated), `--style original` (pre-May 2023 default), and `--style scenic` (cinematic backgrounds).',
        mentalHook: 'Cute, Expressive, Original, Scenic.',
      },
      {
        id: 'mjm-ch06-fc2',
        category: 'foundation',
        front: 'Which anime directors are the primary tokens for synthesizing atmospheric anime backgrounds?',
        back: 'Makoto Shinkai (*Your Name*, *The Garden of Words*), Hayao Miyazaki (*The Wind Rises*), Mamoru Oshii (*Ghost in the Shell*), Taiyo Matsumoto, and Hideaki Anno.',
        mentalHook: 'Shinkai for skies and rain; Oshii for cyberpunk cities.',
      },
      {
        id: 'mjm-ch06-fc3',
        category: 'optimization',
        front: 'Which prompt tokens generate monochrome Japanese comic shading and dot textures?',
        back: '`Manga drawing`, `manga shading`, `manga comic strip`, `manga screentone`, `with largely and widely spaced dots`, and `with halftone pattern`.',
        mentalHook: 'Screentone + halftone dots = authentic print manga.',
      },
      {
        id: 'mjm-ch06-fc4',
        category: 'data',
        front: 'What seven sheet types lock character consistency and inventory details in Niji?',
        back: 'Character expression sheet, character design sheet, character pose sheet, turnaround sheet, concept design sheet, items/accessories sheet, and dress-up/fashion sheet.',
        mentalHook: 'Expression, Pose, Turnaround, Items, Dress-up.',
      },
      {
        id: 'mjm-ch06-fc5',
        category: 'adaptation',
        front: 'How do you prompt Niji to render a physical collectible anime figurine?',
        back: 'Combine `Chibi character` or `Toy figure` with `in a glass display case`, `made of plastic`, or `made of polyester putty`.',
        mentalHook: 'Polyester putty inside a glass display case.',
      },
      {
        id: 'mjm-ch06-fc6',
        category: 'evaluation',
        front: 'Distinguish between the demographic genre tokens Shonen, Seinen, Shoujo, and Josei.',
        back: 'Shonen targets young boys, Seinen targets young adult men, Shoujo targets young girls, and Josei targets adult women.',
        mentalHook: 'Boy/Man (Shonen/Seinen) vs. Girl/Woman (Shoujo/Josei).',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mjm-ch06-feyn1',
        conceptTitle: 'Niji 5 Sub-Mode Routing & Background Depopulation',
        prompt:
          'Explain how Niji 5’s four `--style` sub-modes alter latent generation, and describe how to engineer an unobstructed Makoto Shinkai anime environment without Niji inserting random foreground characters.',
        rubricChecklist: [
          'Contrasts `--style cute`, `--style expressive`, `--style original`, and `--style scenic`.',
          'Distinguishes foreground mangaka tokens (Toriyama, Oda, Inoue) from environmental director tokens (Makoto Shinkai, Mamoru Oshii, Mateusz Urbanowicz).',
          'Explains why Niji naturally biases toward inserting characters even in landscape prompts.',
          'Demonstrates the negative multiprompt and exclusion syntax (`::1 Humans ::-0.5 --no humans --niji 5 --style scenic`).',
        ],
        modelExplanation:
          'Niji 5 partitions its anime weights into four sub-modes: `cute` flattens and rounds proportions for chibi/kawaii art, `expressive` deepens painterly shading for sophisticated illustration, `original` preserves the baseline Niji 5 look, and `scenic` expands environmental scale and lighting. When building an empty background plate—such as a rainy Tokyo train station or floating island—you must pair environmental directors like Makoto Shinkai with `--style scenic` and actively suppress Niji’s character prior using negative multiprompt weights (`::1 Humans ::-0.5 --no humans`).',
      },
      {
        id: 'mjm-ch06-feyn2',
        conceptTitle: 'Single-Canvas Character Sheets & Chromatic Material Physics',
        prompt:
          'Explain why single-canvas character sheets are essential for anime concept design in Midjourney, and detail the material tokens that unlock Niji’s futuristic cyberpunk clothing aesthetics.',
        rubricChecklist: [
          'Explains why separate prompts drift in facial and costume details across random seeds.',
          'Lists the core sheet taxonomies (turnaround sheet, expression sheet, pose sheet, items/accessories sheet, dress-up sheet).',
          'Identifies the optical and polymer tokens for futuristic fashion (`chromatic aberration`, `holographic`, `iridescent opaque thin film RGB`, `transparent PVC/vinyl clothing`).',
          'Connects Japanese demographic and trope vocabulary (`Shonen`, `Shoujo`, `Bishōnen`, `Ahoge`, `Kuudere`, `Tsundere`) to precise character expression control.',
        ],
        modelExplanation:
          'Because every separate diffusion run samples new latent noise, generating consistent front, side, and back views across different prompts causes costume and hair drift. Prompting a `character turnaround sheet`, `expression sheet`, or `accessories sheet` forces the model’s self-attention mechanism to render multiple views on one canvas with locked colors and garment geometry. To dress those characters in futuristic Harajuku or cyberpunk attire, combining `transparent PVC jacket` with `iridescent opaque thin film RGB` and `chromatic aberration` triggers Niji’s native rainbow refraction physics, while Japanese trope tokens (`Bishōnen`, `Ahoge`, `Kuudere`) lock facial demeanor.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mjm-ch06-node-niji-modes',
        label: 'Niji 5 Style Sub-Modes',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Four fine-tuned parameter switches (`--style cute`, `expressive`, `original`, `scenic`) steering Niji 5’s proportion and lighting biases.',
        whyItMatters:
          'Routes generation between flat kawaii graphics, painterly character art, and cinematic landscapes.',
      },
      {
        id: 'mjm-ch06-node-creator-split',
        label: 'Mangaka vs. Director Priors',
        category: 'foundation',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Separating character mangaka (Toriyama, Oda, Inoue, Takeuchi) from environmental film directors (Makoto Shinkai, Mamoru Oshii).',
        whyItMatters:
          'Aligns artist tokens with either foreground anatomical linework or volumetric environmental lighting.',
      },
      {
        id: 'mjm-ch06-node-scenic-depop',
        label: 'Scenic Human Suppression',
        category: 'optimization',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Combining `--style scenic` with `::1 Humans ::-0.5 --no humans` to eliminate foreground figures from anime background plates.',
        formulaOrRule: 'Environment ::1 Humans ::-0.5 --no humans --niji 5 --style scenic',
        whyItMatters:
          'Overrides Niji’s strong character bias to produce clean visual-novel and game background art.',
      },
      {
        id: 'mjm-ch06-node-char-sheets',
        label: 'Single-Canvas Character Sheets',
        category: 'data',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Prompting turnaround, expression, pose, items, and dress-up sheets to render multiple orthographic views on one canvas.',
        whyItMatters:
          'Locks costume geometry, hair silhouette, and color palette across angles without cross-seed drift.',
      },
      {
        id: 'mjm-ch06-node-rgb-materials',
        label: 'Iridescent Thin-Film PVC Optics',
        category: 'adaptation',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Pairing `transparent PVC/vinyl clothing` with `iridescent opaque thin film RGB` and `chromatic aberration`.',
        whyItMatters:
          'Unlocks Niji’s specialized rainbow caustics and specular reflections for cyberpunk and Harajuku fashion.',
      },
      {
        id: 'mjm-ch06-node-screentone-retro',
        label: 'Manga Screentones & Retro Niji 4',
        category: 'evaluation',
        chapterNumber: 6,
        importance: 3,
        definition:
          'Using halftone screentone dot tokens for print manga and routing 1970s–1990s retro anime prompts to `--niji 4`.',
        whyItMatters:
          'Preserves authentic print halftone textures and vintage analog cel grain.',
      },
    ],
    edges: [
      {
        source: 'mjm-ch06-node-niji-modes',
        target: 'mjm-ch06-node-creator-split',
        relationship: 'optimizes',
        explanation:
          'Matching `--style scenic` to environmental directors and `--style original/expressive` to mangaka amplifies both priors.',
      },
      {
        source: 'mjm-ch06-node-creator-split',
        target: 'mjm-ch06-node-scenic-depop',
        relationship: 'prerequisite_for',
        explanation:
          'Selecting an environmental director like Makoto Shinkai precedes depopulating the scene with negative human weights.',
      },
      {
        source: 'mjm-ch06-node-char-sheets',
        target: 'mjm-ch06-node-rgb-materials',
        relationship: 'part_of',
        explanation:
          'Character concept sheets frequently incorporate futuristic PVC and metallic material callouts for game art.',
      },
      {
        source: 'mjm-ch06-node-niji-modes',
        target: 'mjm-ch06-node-screentone-retro',
        relationship: 'trades_off_with',
        explanation:
          'Modern Niji 5 sub-modes trade off with Niji 4’s superior fidelity on 1980s retro cel nostalgia.',
      },
      {
        source: 'mjm-ch06-node-char-sheets',
        target: 'mjm-ch06-node-niji-modes',
        relationship: 'evaluates',
        explanation:
          'Turnaround sheets reveal how each Niji style flag alters character proportion ratios across multiple angles.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 1.0,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes:
      'Covers Anime Artists, Anime Backgrounds (Shinkai/Oshii + negative human weights), Retro Anime (Niji 4), Futuristic PVC/RGB styles, Manga screentones, Collectible figures, Character Design Sheets, 4 Niji Style flags, and Japanese demographic/personality tropes. Zero forbidden phrases.',
  },
};
