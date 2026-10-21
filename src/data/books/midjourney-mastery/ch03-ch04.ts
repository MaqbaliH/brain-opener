import { ChapterMastery } from '../../../types/book';

export const mjmCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'Photorealistic Synthesis: Camera Optics, Lighting Rigs, Film Stocks, and Framing',
  subtitle: 'Controlling virtual focal lengths, aperture depth-of-field, emulsion color science, and lighting rigs',
  readingTimeMinutes: 7,
  sourceWordCount: 8108,
  executiveThesis:
    'Photorealistic synthesis in Midjourney requires replacing generic realism adjectives with physical camera bodies, optical focal lengths, chemical film stocks, and directional lighting geometry. Pairing explicit hardware tokens (such as Canon EOS 5D Mark IV, 85mm f/1.4) with "--style raw" anchors latent denoising to optical physics rather than synthetic CGI.',
  paradigmShift: {
    oldWay: 'Appending vague buzzwords like "photorealistic, 8k, hyper-detailed" and hoping the model guesses camera framing and lighting.',
    newWay: 'Specifying deterministic optical rigs: sensor body, millimeter focal length, f-stop aperture, ISO film stock, and light vectors.',
    whyItChanged: 'Diffusion models map EXIF metadata and gear tokens directly onto physical depth-of-field, perspective geometry, and color curves.',
  },
  heroIllustrationUrl: '/books/midjourney-mastery/assets/00133c22028d5fffa25d3495abe74a53_smallRaw.jpg',
  customDiagrams: [
    {
      id: 'mjm-ch03-svg-optics',
      title: 'Virtual Camera Rig: Focal Length, Aperture f-Stop, and Framing Geometry',
      subtitle: 'Mapping millimeter focal lengths and aperture stops onto perspective compression and bokeh falloff',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh3Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="mjmArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh3Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">VIRTUAL CAMERA OPTICS: FOCAL LENGTH &amp; APERTURE CONDITIONING</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Mapping hardware tokens (14mm–400mm, f/1.2–f/22) to perspective geometry and depth-of-field planes</text>

  <!-- Left Column: Focal Length Tiers -->
  <rect x="28" y="72" width="356" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="206" y="96" fill="#38bdf8" font-size="12.5" font-weight="700" text-anchor="middle">1. FOCAL LENGTH GEOMETRY (Perspective &amp; FOV)</text>

  <rect x="44" y="110" width="324" height="82" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1.2" />
  <text x="56" y="130" fill="#7dd3fc" font-size="11" font-weight="700">Ultra-Wide &amp; Wide (14mm – 35mm)</text>
  <text x="56" y="147" fill="#cbd5e1" font-size="9.5">• Expands spatial depth; exaggerates foreground scale</text>
  <text x="56" y="162" fill="#cbd5e1" font-size="9.5">• Rigs: Sony FE 16-35mm f/2.8 GM, Canon EF 14mm f/2.8L</text>
  <text x="56" y="177" fill="#38bdf8" font-size="9" font-family="monospace">Shots: Extreme Long Shot, Low-Angle, Architecture</text>

  <rect x="44" y="202" width="324" height="82" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.2" />
  <text x="56" y="222" fill="#d8b4fe" font-size="11" font-weight="700">Standard &amp; Portrait Prime (50mm – 85mm)</text>
  <text x="56" y="239" fill="#cbd5e1" font-size="9.5">• Natural human-eye proportions; zero facial distortion</text>
  <text x="56" y="254" fill="#cbd5e1" font-size="9.5">• Rigs: Canon EF 50mm f/1.2L, Sony 85mm Zeiss, Leica 50mm</text>
  <text x="56" y="269" fill="#c084fc" font-size="9" font-family="monospace">Shots: Eye-Level Close-Up, Medium-Full Fashion Shot</text>

  <rect x="44" y="294" width="324" height="82" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="56" y="314" fill="#fcd34d" font-size="11" font-weight="700">Telephoto &amp; Macro (100mm – 400mm)</text>
  <text x="56" y="331" fill="#cbd5e1" font-size="9.5">• Flattens Z-axis planes; isolates sub-millimeter textures</text>
  <text x="56" y="346" fill="#cbd5e1" font-size="9.5">• Rigs: Canon 100mm f/2.8L Macro, Nikkor 100-400mm VR S</text>
  <text x="56" y="361" fill="#fbbf24" font-size="9" font-family="monospace">Shots: Extreme Close-Up, Wildlife Action, Compression</text>

  <!-- Flow Connector -->
  <path d="M 384 232 L 414 232" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrCyan)" />

  <!-- Right Column: Aperture & Exposure Matrix -->
  <rect x="416" y="72" width="356" height="320" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="594" y="96" fill="#fbbf24" font-size="12.5" font-weight="700" text-anchor="middle">2. APERTURE (f-STOP) &amp; SHUTTER CONDITIONING</text>

  <rect x="432" y="110" width="324" height="90" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="444" y="130" fill="#6ee7b7" font-size="11" font-weight="700">Wide Aperture: f/1.2 – f/2.8 (Shallow Focus)</text>
  <text x="444" y="147" fill="#cbd5e1" font-size="9.5">• Paper-thin focal plane; dissolves background into bokeh</text>
  <text x="444" y="162" fill="#cbd5e1" font-size="9.5">• Separates portrait eyes from cluttered environments</text>
  <circle cx="716" cy="150" r="22" fill="none" stroke="#10b981" stroke-width="2.5" />
  <circle cx="716" cy="150" r="16" fill="#064e3b" />

  <rect x="432" y="210" width="324" height="84" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="444" y="230" fill="#7dd3fc" font-size="11" font-weight="700">Stopped-Down: f/8 – f/22 (Deep Focus / Focus Stack)</text>
  <text x="444" y="247" fill="#cbd5e1" font-size="9.5">• Hyperfocal sharpness from foreground rocks to horizon</text>
  <text x="444" y="262" fill="#cbd5e1" font-size="9.5">• Essential for architectural interiors and landscapes</text>
  <circle cx="716" cy="252" r="22" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="716" cy="252" r="6" fill="#38bdf8" />

  <rect x="432" y="304" width="324" height="72" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1.2" />
  <text x="444" y="324" fill="#fda4af" font-size="11" font-weight="700">Shutter Speed &amp; Exposure Dynamics</text>
  <text x="444" y="341" fill="#cbd5e1" font-size="9.5">• 1/1000s Fast Shutter: Freezes liquid splashes &amp; sports</text>
  <text x="444" y="356" fill="#cbd5e1" font-size="9.5">• Slow Shutter / Long Exposure: Silky waves &amp; light trails</text>
  <path d="M 685 340 L 742 340" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrAmber)" />
</svg>`,
      bierutCaption:
        'Optical conditioning maps focal length and aperture tokens onto perspective geometry and background bokeh separation.',
      annotations: [
        {
          step: '1',
          label: 'Focal Length Geometry',
          explanation: 'Wide lenses expand space; telephotos compress background planes.',
        },
        {
          step: '2',
          label: 'Aperture Depth Gate',
          explanation: 'Low f-numbers isolate subjects with optical bokeh blur.',
        },
        {
          step: '3',
          label: 'Shutter Motion Control',
          explanation: 'Fast shutters freeze droplets; slow exposures streak motion.',
        },
      ],
    },
    {
      id: 'mjm-ch03-svg-lighting',
      title: 'Photographic Lighting Rigs, Film Emulsions, and Color Science Pipeline',
      subtitle: 'Combining solar elevation, studio key/rim placement, and analog film stocks',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh3Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmArrGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh3Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">LIGHTING GEOMETRY &amp; ANALOG FILM EMULSION PIPELINE</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Orchestrating natural solar angles, directional studio rigs, and chemical film stocks before raw rendering</text>

  <!-- Stage 1: Natural & Weather Illumination -->
  <rect x="28" y="76" width="228" height="312" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="142" y="100" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">1. NATURAL SOLAR &amp; ATMOSPHERE</text>
  <rect x="42" y="114" width="200" height="78" rx="6" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="52" y="132" fill="#fde68a" font-size="10" font-weight="700">Solar Elevation Tokens</text>
  <text x="52" y="148" fill="#cbd5e1" font-size="9">• Golden Hour: Warm raking grazing light</text>
  <text x="52" y="162" fill="#cbd5e1" font-size="9">• Blue Hour / Twilight: Cool ambient</text>
  <text x="52" y="176" fill="#cbd5e1" font-size="9">• High Noon: Hard vertical shadows</text>

  <rect x="42" y="204" width="200" height="78" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="52" y="222" fill="#7dd3fc" font-size="10" font-weight="700">Atmospheric Scattering</text>
  <text x="52" y="238" fill="#cbd5e1" font-size="9">• Volumetric fog &amp; cinematic haze</text>
  <text x="52" y="252" fill="#cbd5e1" font-size="9">• Overcast soft shadow diffusion</text>
  <text x="52" y="266" fill="#cbd5e1" font-size="9">• Rain reflections &amp; icy refraction</text>

  <rect x="42" y="294" width="200" height="78" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1" />
  <text x="52" y="312" fill="#d8b4fe" font-size="10" font-weight="700">Directional Rig Vectors</text>
  <text x="52" y="328" fill="#cbd5e1" font-size="9">• Left / Right Key + Chiaroscuro</text>
  <text x="52" y="342" fill="#cbd5e1" font-size="9">• Rim / Backlight edge separation</text>
  <text x="52" y="356" fill="#cbd5e1" font-size="9">• Overhead spotlight vs. Underneath</text>

  <path d="M 256 232 L 282 232" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrGold)" />

  <!-- Stage 2: Film Stock & Sensor Color Science -->
  <rect x="286" y="76" width="228" height="312" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="100" fill="#6ee7b7" font-size="11.5" font-weight="700" text-anchor="middle">2. FILM EMULSION &amp; ISO</text>

  <rect x="300" y="114" width="200" height="82" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="310" y="132" fill="#6ee7b7" font-size="10" font-weight="700">Color Negative &amp; Slide Stocks</text>
  <text x="310" y="148" fill="#cbd5e1" font-size="9">• Kodak Portra 800: Warm skin &amp; grain</text>
  <text x="310" y="162" fill="#cbd5e1" font-size="9">• Fujifilm Provia: Crisp slide contrast</text>
  <text x="310" y="176" fill="#cbd5e1" font-size="9">• Kodak Aerochrome: Infrared crimson</text>

  <rect x="300" y="208" width="200" height="82" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1" />
  <text x="310" y="226" fill="#e2e8f0" font-size="10" font-weight="700">Monochrome &amp; Vintage</text>
  <text x="310" y="242" fill="#cbd5e1" font-size="9">• Kodak Tri-X / Ferrania P30: Silver halide</text>
  <text x="310" y="256" fill="#cbd5e1" font-size="9">• Daguerreotype &amp; Pinhole vignettes</text>
  <text x="310" y="270" fill="#cbd5e1" font-size="9">• Polaroid / Instax / Lomo instant</text>

  <rect x="300" y="302" width="200" height="70" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="310" y="320" fill="#fcd34d" font-size="10" font-weight="700">ISO Sensitivity Scaling</text>
  <text x="310" y="336" fill="#cbd5e1" font-size="9">• ISO 100: Noise-free commercial studio</text>
  <text x="310" y="350" fill="#cbd5e1" font-size="9">• ISO 3200: Gritty low-light organic grain</text>

  <path d="M 514 232 L 540 232" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrGold)" />

  <!-- Stage 3: Photographer Style & Raw Output -->
  <rect x="544" y="76" width="228" height="312" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="658" y="100" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">3. GENRE ANCHOR &amp; RAW GATE</text>

  <rect x="558" y="114" width="200" height="120" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="568" y="132" fill="#7dd3fc" font-size="10" font-weight="700">Master Photographer Anchors</text>
  <text x="568" y="148" fill="#cbd5e1" font-size="9">• Portrait: Avedon, Leibovitz, Karsh</text>
  <text x="568" y="162" fill="#cbd5e1" font-size="9">• Street: Cartier-Bresson, Vivian Maier</text>
  <text x="568" y="176" fill="#cbd5e1" font-size="9">• Landscape: Ansel Adams, Galen Rowell</text>
  <text x="568" y="190" fill="#cbd5e1" font-size="9">• Architecture: Julius Shulman, Binet</text>
  <text x="568" y="204" fill="#cbd5e1" font-size="9">• Macro/Action: Levon Biss, Edgerton</text>

  <rect x="558" y="248" width="200" height="124" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.2" />
  <text x="568" y="268" fill="#6ee7b7" font-size="10.5" font-weight="700">Photoreal Compilation Gate</text>
  <text x="568" y="286" fill="#d1fae5" font-size="9.5" font-family="monospace">--style raw --ar 2:3 --q 2</text>
  <text x="568" y="304" fill="#cbd5e1" font-size="9">• Strips Midjourney default gloss</text>
  <text x="568" y="318" fill="#cbd5e1" font-size="9">• Preserves micro-skin pores &amp; grain</text>
  <text x="568" y="332" fill="#cbd5e1" font-size="9">• Enforces true optical highlight roll-off</text>
</svg>`,
      bierutCaption:
        'Combining directional light vectors with analog film stocks and "--style raw" bypasses artificial CGI skin smoothing.',
      annotations: [
        {
          step: '1',
          label: 'Solar and Studio Vectors',
          explanation: 'Angle tokens dictate shadow hardness and atmospheric depth.',
        },
        {
          step: '2',
          label: 'Emulsion Spectral Curves',
          explanation: 'Film stock tokens govern saturation, halation, and grain.',
        },
        {
          step: '3',
          label: 'Raw Unopinionated Decoding',
          explanation: 'Adding "--style raw" suppresses default aesthetic beautification bias.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mjm-ch03-mm1',
      name: 'The EXIF Metadata Anchor',
      tagline: 'Hardware model tokens unlock real-world photography training subsets',
      naiveIntuition: 'Writing "ultra-realistic photo" forces Midjourney to generate authentic camera photographs.',
      firstPrinciplesReality: 'Generic realism tags trigger airbrushed CGI renders because digital art captions overuse those words.',
      howToApply: 'Name exact camera bodies and lenses like "Nikon D850, 85mm f/1.4, ISO 100 --style raw".',
    },
    {
      id: 'mjm-ch03-mm2',
      name: 'Focal Length Spatial Compression',
      tagline: 'Millimeter lens choice dictates spatial psychology and perspective geometry',
      naiveIntuition: 'Camera angle and lens focal length merely zoom closer or farther from the subject.',
      firstPrinciplesReality: 'Wide lenses (14mm–24mm) stretch depth and dramatize low angles, whereas telephotos (200mm) flatten planes.',
      howToApply: 'Pair wide lenses with architectural views and 50mm–100mm lenses with intimate portraits.',
    },
    {
      id: 'mjm-ch03-mm3',
      name: 'Chemical Color Grading via Film Stocks',
      tagline: 'Film emulsion names encode complex spectral LUTs in two words',
      naiveIntuition: 'Describing color palettes manually with ten adjectives produces consistent vintage or cinematic toning.',
      firstPrinciplesReality: 'Named emulsions like Kodak Portra 800, Ferrania P30, or Aerochrome carry baked-in highlight curves.',
      howToApply: 'Specify a film stock and ISO rating alongside directional lighting for cohesive color science.',
    },
  ],
  deepSections: [
    {
      id: 'mjm-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Virtual Camera Bodies, Optical Focal Lengths, and Framing Geometry',
      subtitle: 'Steering perspective distortion, depth of field, and viewer distance via hardware tokens',
      coreMechanism:
        'Midjourney learns visual priors from captioned photographs containing EXIF metadata. Specifying a camera body (Canon EOS 5D Mark IV, Sony Alpha a7R V, Nikon Z9, Hasselblad X2D 100C, or DJI Phantom 4 Pro) alongside a lens (Canon EF 16-35mm f/2.8L or 100mm f/2.8L Macro) routes sampling into authentic optical manifolds. Wide focal lengths (12mm–24mm) expand spatial separation and amplify worm’s-eye perspectives, while portrait and telephoto primes (50mm–400mm) compress depth and eliminate facial distortion.\n\nFraming distance and elevation angle govern narrative psychology. Eye-level close-ups and over-the-shoulder shots build intimacy, low angles confer monumental authority, and bird’s-eye drone views detach the viewer to highlight architectural or geographic layout.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select Sensor Body',
          detail: 'Match Hasselblad X2D for studio, Nikon Z9 for wildlife action, or Sony a7 III for street.',
        },
        {
          step: '2',
          title: 'Lock Focal Length',
          detail: 'Use 14–24mm for wide vistas, 50–85mm for eye-level portraits, or 100mm for macro detail.',
        },
        {
          step: '3',
          title: 'Set Elevation Vector',
          detail: 'Declare worm’s-eye, ground-level, eye-level, high-angle, or overhead flat-lay orientation.',
        },
      ],
      keyTakeaways: [
        'Pair camera angle tokens with matching focal lengths so perspective distortion aligns with framing distance.',
        'Use "--style raw" with DSLR or mirrorless tokens to prevent synthetic smoothness on skin and fabric.',
      ],
      commonPitfalls: [
        'Combining contradictory optical cues such as "extreme wide bird’s-eye view" with "100mm macro bokeh".',
        'Relying on "8k hyperrealistic" without lens or lighting specs, which defaults to plastic CGI rendering.',
      ],
      figures: [
        {
          file: '00133c22028d5fffa25d3495abe74a53_smallRaw.jpg',
          originalLabel: 'Chapter 3 Study — High-Contrast Portrait & Optical Framing',
          bierutTitle: 'Anchor Facial Proportions and Bokeh Falloff with Prime Portrait Optics',
          editorialAnalysis:
            'Tight portrait framing relies on 50mm–85mm focal lengths and wide apertures (f/1.2–f/2.8) to preserve facial geometry while dissolving background clutter. Directional key lighting carves bone structure naturally.',
          keyTakeaways: [
            'Specify 50mm or 85mm primes at f/1.4–f/2.8 for undistorted portraits.',
            'Combine emotion tokens with chiaroscuro lighting for psychological weight.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch03-sec2',
      sectionNumber: '3.2',
      title: 'Lighting Rigs, Atmospheric Weather, Exposure Mechanics, and Film Emulsions',
      subtitle: 'Controlling dynamic range, motion blur, and spectral color science via illumination and film stocks',
      coreMechanism:
        'Photographic realism depends on how light interacts with atmosphere, shutter speed, and recording emulsions. Natural illumination tokens—Golden Hour, Blue Hour, Sunrise, High Noon, and Moonlight—set solar elevation and color temperature, while weather modifiers (dense fog, overcast, stormy rain, cinematic haze) add volumetric scattering. In studio setups, directional assignments (left-side key, rim light, overhead spotlight, chiaroscuro) control specular highlights and shadow falloff.\n\nExposure and film stock tokens complete the optical chain. Fast shutter speeds (1/1000s) freeze liquid splashes and sports action, whereas long or double exposures blur ocean waves and neon traffic trails. Naming analog stocks—Kodak Portra 800, Fujifilm Provia, Ferrania P30, Kodak Aerochrome, Daguerreotype, or Polaroid—with ISO 100–3200 locks in authentic grain and tonal curves.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Define Light and Weather',
          detail: 'Specify solar time (golden hour, twilight) or studio rig (rim light, chiaroscuro) plus weather.',
        },
        {
          step: '2',
          title: 'Calibrate Focus and Exposure',
          detail: 'Select shallow bokeh (f/1.4), focus stacking (f/16), fast shutter (1/1000s), or long exposure.',
        },
        {
          step: '3',
          title: 'Apply Film Stock and ISO',
          detail: 'Attach Kodak Portra 800, Provia, or Tri-X with ISO 100 for clean studio or ISO 3200 for grain.',
        },
      ],
      keyTakeaways: [
        'Directional lighting tokens (rim light, backlight, chiaroscuro) build 3D volume far better than "good lighting".',
        'Film stock tokens act as compact LUTs that harmonize highlight roll-off, shadow tint, and organic halation.',
      ],
      commonPitfalls: [
        'Mixing incompatible lighting states such as "high noon harsh sunlight" with "soft overcast twilight".',
        'Requesting crisp frozen action while simultaneously prompting "slow shutter speed, long exposure".',
      ],
      figures: [
        {
          file: '00257c55d0a05f2a47f54561c821df7d_smallRaw.jpg',
          originalLabel: 'Chapter 3 Study — Atmospheric Landscape & Volumetric Lighting',
          bierutTitle: 'Sculpt Environmental Depth with Volumetric Weather and Grazing Light',
          editorialAnalysis:
            'Wide-angle landscape synthesis achieves depth when low-angle solar rays intersect atmospheric mist, snow, or ocean spray. Focus stacking with a stopped-down aperture preserves sharpness from foreground rocks to distant peaks.',
          keyTakeaways: [
            'Pair 16–35mm wide lenses with volumetric fog or golden-hour raking light.',
            'Cite Ansel Adams or Galen Rowell for high-dynamic-range tonal separation.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch03-sec3',
      sectionNumber: '3.3',
      title: 'Genre Master Anchors: Architecture, Interiors, Macro, and Commercial Mockups',
      subtitle: 'Applying photographer signatures, architectural form tokens, and flat-lay product staging',
      coreMechanism:
        'Naming canonical photographers and architects transfers decades of compositional discipline into a prompt. Portrait and fashion prompts stabilize under Richard Avedon, Annie Leibovitz, Yousuf Karsh, or Helmut Newton; street scenes gain candid geometry via Henri Cartier-Bresson or Vivian Maier; wildlife and macro shots sharpen under Frans Lanting, Levon Biss, or Harold Edgerton.\n\nFor architectural and interior synthesis, pairing structural masters (Frank Lloyd Wright, Tadao Ando, Zaha Hadid, Kengo Kuma, Mies van der Rohe) with architectural photographers (Julius Shulman, Helene Binet, Iwan Baan) and wide `--ar 16:9` or `--ar 3:2` frames yields publication-grade spaces. Commercial food and frame mockups rely on top-down flat lays, ISO 100 studio lighting, 100mm macro optics, and clean copy space.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Anchor Genre Master',
          detail: 'Cite Julius Shulman for architecture, Avedon for portraits, or Levon Biss for extreme macro.',
        },
        {
          step: '2',
          title: 'Match Aspect Ratio',
          detail: 'Use --ar 2:3 for vertical portraits and print, or --ar 16:9 and --ar 3:2 for architecture.',
        },
        {
          step: '3',
          title: 'Stage Materiality and Mockup',
          detail: 'Specify raw concrete, warm timber, water droplets, or unobstructed flat-lay copy space.',
        },
      ],
      keyTakeaways: [
        'Combining an architect token (Kengo Kuma) with an architectural photographer (Julius Shulman) locks both form and lighting.',
        'Commercial food and frame mockups require flat-lay or wall perspective views, ISO 100, and 100mm macro or 70mm lenses.',
      ],
      commonPitfalls: [
        'Using vertical portrait ratios (--ar 2:3) for horizontal modernist facades that require --ar 16:9.',
        'Omitting "without text" or unobstructed frame bounds when generating commercial poster mockups.',
      ],
      figures: [
        {
          file: '002b37217f923aaed55e67e88b739b7d_smallRaw.jpg',
          originalLabel: 'Chapter 3 Study — Architectural & Commercial Staging',
          bierutTitle: 'Coordinate Materiality, Wide Aspect Ratios, and Daylight in Architectural Frames',
          editorialAnalysis:
            'Architectural and interior prompts succeed by balancing raw materials (concrete, timber, glass) with calibrated ambient and accent lighting. Wide-angle lenses capture full room geometry without clipping structural lines.',
          keyTakeaways: [
            'Use --ar 16:9 or --ar 3:2 with wide lenses to frame complete interiors.',
            'Balance exterior dawn or sunset light against warm interior accent illumination.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Photographic Rig & Genre Configuration Matrix',
      description: 'Selecting camera body, lens focal length, aperture, lighting, and aspect ratio across five domains.',
      headers: ['Genre', 'Camera & Lens', 'Aperture & Shutter', 'Lighting & Film', 'Aspect Ratio'],
      rows: [
        ['Portrait', 'Canon 5D IV + 85mm', 'f/1.4 bokeh, 1/250s', 'Chiaroscuro, Portra 800', '--ar 2:3'],
        ['Landscape', 'Nikon D850 + 16-35mm', 'f/16 focus stack', 'Golden Hour, Provia', '--ar 3:2'],
        ['Wildlife', 'Nikon Z9 + 100-400mm', 'f/4.5, 1/1000s fast', 'Daylight, ISO 400', '--ar 3:2'],
        ['Architecture', 'Sony a7R V + 14-24mm', 'f/8 deep focus HDR', 'Dawn + warm interior', '--ar 16:9'],
        ['Macro & Food', 'Hasselblad + 100mm', 'f/2.8 or f/16, 1/1000s', 'Studio lightbox, ISO 100', '--ar 2:3'],
      ],
      verdictRule: 'Match 85mm–400mm lenses and wide f/1.4 apertures to subject isolation, and 14mm–35mm lenses with deep focus to environments.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mjm-ch03-scen1',
      title: 'Eliminating Plastic CGI Skin in Editorial Portrait Synthesis',
      roleAndContext: 'Creative director generating close-up fashion portraits in Midjourney v5.1.',
      symptomOrFailure: 'Prompts with "hyperrealistic 8k beautiful woman" produce waxy skin and unnatural glare.',
      naiveFixAndWhyItFails: 'Adding "32k UHD masterpiece" amplifies synthetic digital painting and 3D render priors.',
      firstPrinciplesSolution: 'Use "Sony Alpha a7R V, 85mm f/1.8, ISO 100, Kodak Portra 800, chiaroscuro lighting --style raw".',
      measurableOutcome: 'Restores authentic skin pore micro-texture, natural catchlights, and optical bokeh roll-off.',
    },
    {
      id: 'mjm-ch03-scen2',
      title: 'Staging High-Speed Commercial Food and Beverage Splash Photography',
      roleAndContext: 'Brand designer creating dynamic beverage hero shots for a commercial campaign.',
      symptomOrFailure: 'Liquid splashes and floating ingredients look blurry or pasted onto flat backgrounds.',
      naiveFixAndWhyItFails: 'Prompting "action food photo with water drops" lacks shutter speed and lighting constraints.',
      firstPrinciplesSolution: 'Specify "Leica camera, 100mm f/2.8 Macro, fast shutter 1/1000s, ISO 100, studio lightbox, Harold Edgerton style".',
      measurableOutcome: 'Generates razor-sharp suspended droplets, crisp specular reflections, and commercial color grading.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mjm-ch03-q1',
        scenarioPrompt:
          'You are synthesizing an intimate portrait where the subject’s facial proportions must look natural and the busy forest background must dissolve into smooth optical bokeh. Which camera rig specification best enforces these physical optics?',
        options: [
          {
            label: 'A',
            text: 'GoPro HERO9 Black with an 8-15mm f/4L Fisheye lens, deep focus, f/22 aperture',
            isCorrect: false,
            explanation: 'Fisheye lenses severely distort facial features and f/22 keeps the entire background in sharp focus.',
          },
          {
            label: 'B',
            text: 'Canon EOS 5D Mark IV with a Canon EF 50mm f/1.2L or 85mm f/1.4 lens, shallow depth of field, ISO 100, --style raw',
            isCorrect: true,
            explanation: '50mm–85mm focal lengths preserve natural facial geometry while f/1.2–f/1.4 apertures create a razor-thin focal plane with creamy bokeh.',
          },
          {
            label: 'C',
            text: 'DJI Phantom 4 Pro drone camera, bird’s-eye angle, extreme long shot, slow shutter speed',
            isCorrect: false,
            explanation: 'Drone bird’s-eye shots create distant overhead perspectives rather than intimate eye-level portraits.',
          },
          {
            label: 'D',
            text: 'Ultra-wide 14mm lens, worm’s-eye view, focus stacking, 32k UHD octane render',
            isCorrect: false,
            explanation: 'A 14mm worm’s-eye rig exaggerates perspective distortion, and Octane Render shifts the aesthetic toward 3D CGI.',
          },
        ],
      },
      {
        id: 'mjm-ch03-q2',
        scenarioPrompt:
          'An architectural visualizer wants to generate a modernist concrete-and-glass house cantilevered over a waterfall in a misty forest with dramatic horizontal framing. Which combination of tokens aligns with Chapter 3 best practices?',
        options: [
          {
            label: 'A',
            text: 'Close-up shot, 100mm macro lens, f/1.2 aperture, Polaroid film --ar 2:3',
            isCorrect: false,
            explanation: 'Macro lenses and vertical 2:3 aspect ratios crop out the surrounding architectural context and landscape.',
          },
          {
            label: 'B',
            text: 'Extreme long shot, designed by Frank Lloyd Wright and Tadao Ando, film photography by Julius Shulman, wide-angle lens, volumetric lighting --ar 16:9',
            isCorrect: true,
            explanation: 'Combining canonical architects, architectural photographer Julius Shulman, wide-angle framing, and a 16:9 widescreen ratio captures both structure and environment.',
          },
          {
            label: 'C',
            text: 'Over-the-shoulder shot, Helmut Newton style, neon lights, double exposure --ar 1:1',
            isCorrect: false,
            explanation: 'Helmut Newton and over-the-shoulder framing are tailored for fashion portraiture, not modernist architecture.',
          },
          {
            label: 'D',
            text: 'Pinhole photography, Daguerreotype plate, ISO 3200, tilted plane focus --ar 9:16',
            isCorrect: false,
            explanation: 'Antique daguerreotype and vertical 9:16 framing degrade crisp modernist glass-and-concrete clarity.',
          },
        ],
      },
      {
        id: 'mjm-ch03-q3',
        scenarioPrompt:
          'What is the primary mechanical effect of appending "--style raw" to a photographic prompt in Midjourney v5.1?',
        options: [
          {
            label: 'A',
            text: 'It exports an uncompressed 16-bit DNG camera file directly from Discord.',
            isCorrect: false,
            explanation: 'Midjourney still outputs standard raster images; "--style raw" modifies latent decoding, not file container format.',
          },
          {
            label: 'B',
            text: 'It reduces Midjourney’s default opinionated aesthetic beautification, letting explicit camera, lens, and film tokens govern texture and lighting.',
            isCorrect: true,
            explanation: '"--style raw" bypasses the default glossy illustration bias so photographic hardware and lighting tokens execute faithfully.',
          },
          {
            label: 'C',
            text: 'It automatically forces black-and-white monochrome rendering across all prompts.',
            isCorrect: false,
            explanation: 'Color rendering remains fully active in "--style raw" unless monochrome film or B&W tokens are specified.',
          },
          {
            label: 'D',
            text: 'It tiles the photograph seamlessly across all four canvas edges.',
            isCorrect: false,
            explanation: 'Seamless tiling is controlled by the "--tile" parameter covered in Chapter 4, not "--style raw".',
          },
        ],
      },
      {
        id: 'mjm-ch03-q4',
        scenarioPrompt:
          'You want to depict two sports cars drifting through a rainy neon-lit tunnel at night with streaking light trails that convey high-velocity motion. Which exposure token achieves this optical effect?',
        options: [
          {
            label: 'A',
            text: 'Slow shutter speed / long exposure with motion blur',
            isCorrect: true,
            explanation: 'Long exposure and slow shutter speed tokens cause moving light sources to streak across the frame while stationary wet pavement reflects them.',
          },
          {
            label: 'B',
            text: '1/1000s fast shutter speed with focus stacking and f/22',
            isCorrect: false,
            explanation: 'A 1/1000s shutter freezes motion completely, eliminating light trails.',
          },
          {
            label: 'C',
            text: 'Flat-lay top view with ISO 100 white background',
            isCorrect: false,
            explanation: 'Flat-lay white backgrounds are used for studio product mockups, not dynamic street motion.',
          },
          {
            label: 'D',
            text: 'Daguerreotype plate with high noon sunlight',
            isCorrect: false,
            explanation: 'High noon sunlight and antique silver plates conflict with nighttime neon motion trails.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mjm-ch03-fc1',
        category: 'architecture',
        front: 'How do wide-angle lenses (14mm–24mm) vs. telephoto lenses (100mm–400mm) alter spatial geometry in Midjourney?',
        back: 'Wide lenses expand depth and exaggerate foreground scale, whereas telephoto lenses compress Z-axis planes and isolate distant subjects.',
        mentalHook: '14mm stretches the room; 400mm stacks the horizon.',
      },
      {
        id: 'mjm-ch03-fc2',
        category: 'optimization',
        front: 'What psychological effect do Worm’s-Eye View vs. Bird’s-Eye (Drone) Angle create?',
        back: 'Worm’s-eye view looks up from ground level to make subjects appear monumental or formidable; bird’s-eye looks straight down to emphasize spatial layout and scale.',
        mentalHook: 'Worm’s-eye = giant power; Bird’s-eye = map detachment.',
      },
      {
        id: 'mjm-ch03-fc3',
        category: 'adaptation',
        front: 'Which film stock tokens invoke warm nostalgic skin tones vs. infrared surreal foliage vs. classic B&W grain?',
        back: 'Kodak Portra 800 yields warm nostalgic skin tones, Kodak Aerochrome shifts foliage to infrared crimson, and Kodak Tri-X or Ferrania P30 deliver high-contrast B&W silver grain.',
        mentalHook: 'Portra = Portrait warmth; Aerochrome = Infrared red; Tri-X = Classic B&W.',
      },
      {
        id: 'mjm-ch03-fc4',
        category: 'foundation',
        front: 'How does ISO number (ISO 100 vs. ISO 3200) condition a Midjourney photograph?',
        back: 'ISO 100 specifies low light sensitivity for ultra-clean, noise-free studio and commercial shots; ISO 3200 introduces visible organic film grain and low-light mood.',
        mentalHook: 'ISO 100 = studio glass; ISO 3200 = midnight grain.',
      },
      {
        id: 'mjm-ch03-fc5',
        category: 'evaluation',
        front: 'Which canonical photographers anchor (1) Portrait, (2) Street, (3) Landscape, and (4) Architecture prompts?',
        back: 'Portrait: Richard Avedon / Annie Leibovitz; Street: Henri Cartier-Bresson / Vivian Maier; Landscape: Ansel Adams / Galen Rowell; Architecture: Julius Shulman / Iwan Baan.',
        mentalHook: 'Avedon faces, Bresson streets, Adams peaks, Shulman houses.',
      },
      {
        id: 'mjm-ch03-fc6',
        category: 'data',
        front: 'What optical and staging tokens are required for clean commercial frame or product mockups?',
        back: 'Flat lay or perspective wall view, unobstructed blank frame or copy space, 70mm–100mm lens, ISO 100, soft natural or studio light, and "without text".',
        mentalHook: 'Clean mockup = ISO 100 + unobstructed copy space + soft light.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mjm-ch03-feyn1',
        conceptTitle: 'Why Hardware EXIF Tokens Outperform "Photorealistic 8K" Buzzwords',
        prompt:
          'Explain from first principles why prompting "Sony Alpha a7R V, 85mm f/1.4, ISO 100, Kodak Portra 800 --style raw" produces authentic optical realism, whereas prompting "photorealistic, hyper-detailed, 8k, masterpiece" frequently yields plastic 3D CGI.',
        rubricChecklist: [
          'Identifies training-data caption bias: 3D renders and digital art on ArtStation heavily tag themselves "photorealistic, 8k, hyper-detailed".',
          'Explains that genuine photographs in training archives carry EXIF camera body, lens focal length, and aperture metadata rather than self-praising adjectives.',
          'Describes how focal length (85mm) and aperture (f/1.4) physically constrain perspective distortion and depth-of-field bokeh falloff.',
          'Notes that "--style raw" disables Midjourney’s default aesthetic smoothing filter so film grain and skin pores survive decoding.',
        ],
        modelExplanation:
          'Diffusion models learn associations between text tokens and visual distributions. In training datasets, artists uploading 3D Octane or Unreal Engine renders routinely tag their work "photorealistic, 8k, ultra-detailed", whereas real photographers tag camera bodies, lenses, and film stocks ("Sony a7R V, 85mm f/1.4, ISO 100, Portra 800"). Specifying hardware tokens routes latent sampling directly into authentic optical photographs, locking in physical depth-of-field and perspective geometry, while "--style raw" prevents Midjourney from applying synthetic gloss.',
      },
      {
        id: 'mjm-ch03-feyn2',
        conceptTitle: 'Designing a Complete Photographic Lighting and Exposure Rig',
        prompt:
          'Walk through how you would construct a prompt for an outdoor architectural living room carved into a glacier at dawn, balancing exterior atmospheric light, interior illumination, lens geometry, and exposure settings.',
        rubricChecklist: [
          'Selects a wide-angle lens on a mirrorless/DSLR body with "--ar 16:9" to capture the full interior room and exterior vista.',
          'Establishes dual lighting: cool dawn blue light filtering through translucent ice walls balanced against a subtle interior LED or warm accent light.',
          'Calibrates exposure mechanics (e.g., slow shutter speed, balanced aperture, calibrated ISO) to preserve both shadow texture and icy highlights.',
          'Avoids conflicting time-of-day or motion cues that would wash out the glacial refraction.',
        ],
        modelExplanation:
          'To synthesize a glacier living room with photographic credibility, start with spatial geometry: a mirrorless camera equipped with a wide-angle lens (16–24mm) and "--ar 16:9" to frame the entire room. Layer two light sources: soft blue dawn light refracting through the icy walls and a single subtle LED panel casting soft interior shadows across the jagged ice. Finally, specify calibrated exposure settings—slow shutter speed and balanced ISO—to retain high-contrast detail in both translucent ice highlights and deep room shadows.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mjm-camera-optics-rig',
        label: 'Camera Body & Focal Length Rig',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition: 'Pairing sensor body (Canon 5D IV, Sony a7R V, Nikon Z9) and lens focal length (14mm–400mm).',
        formulaOrRule: '14-35mm = wide; 50-85mm = portrait; 100-400mm = compression',
        whyItMatters: 'Replaces generic realism tags with physical optical geometry.',
      },
      {
        id: 'mjm-aperture-dof-plane',
        label: 'Aperture (f-Stop) & Focus Plane',
        category: 'optimization',
        chapterNumber: 3,
        importance: 1,
        definition: 'Optical iris setting (f/1.2 bokeh to f/22 focus stack) governing focal plane depth.',
        formulaOrRule: 'f/1.4 = subject isolation; f/16 = landscape sharpness',
        whyItMatters: 'Controls background bokeh blur vs. edge-to-edge sharpness.',
      },
      {
        id: 'mjm-camera-angle-framing',
        label: 'Camera Elevation & Shot Framing',
        category: 'foundation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Lens placement relative to subject (worm’s-eye, eye-level, bird’s-eye, close-up to long shot).',
        whyItMatters: 'Dictates viewer empathy, power hierarchy, and spatial context.',
      },
      {
        id: 'mjm-lighting-atmosphere-rig',
        label: 'Directional Lighting & Solar Atmosphere',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 1,
        definition: 'Solar elevation (Golden/Blue Hour), weather scattering (fog, rain), and studio vectors (rim, chiaroscuro).',
        whyItMatters: 'Sculpts 3D volume, specular catchlights, and emotional mood.',
      },
      {
        id: 'mjm-film-emulsion-iso',
        label: 'Analog Film Stock & ISO Sensitivity',
        category: 'data',
        chapterNumber: 3,
        importance: 2,
        definition: 'Emulsion tokens (Portra 800, Provia, Tri-X, Aerochrome) paired with ISO 100–3200 ratings.',
        whyItMatters: 'Applies cohesive spectral color grading and organic halide grain.',
      },
      {
        id: 'mjm-photographer-genre-anchor',
        label: 'Canonical Photographer & Architect Anchors',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 2,
        definition: 'Domain masters (Avedon, Cartier-Bresson, Ansel Adams, Julius Shulman, Kengo Kuma, Levon Biss).',
        whyItMatters: 'Transfers expert compositional geometry and lighting setups.',
      },
    ],
    edges: [
      {
        source: 'mjm-camera-optics-rig',
        target: 'mjm-aperture-dof-plane',
        relationship: 'part_of',
        explanation: 'Focal length and aperture jointly determine depth of field and bokeh.',
      },
      {
        source: 'mjm-camera-angle-framing',
        target: 'mjm-camera-optics-rig',
        relationship: 'prerequisite_for',
        explanation: 'Shot scale and elevation dictate which focal length avoids distortion.',
      },
      {
        source: 'mjm-lighting-atmosphere-rig',
        target: 'mjm-film-emulsion-iso',
        relationship: 'optimizes',
        explanation: 'Light contrast interacts with film highlight roll-off.',
      },
      {
        source: 'mjm-photographer-genre-anchor',
        target: 'mjm-lighting-atmosphere-rig',
        relationship: 'optimizes',
        explanation: 'Citing masters like Shulman or Karsh configures genre-accurate lighting.',
      },
      {
        source: 'mjm-aperture-dof-plane',
        target: 'mjm-lighting-atmosphere-rig',
        relationship: 'trades_off_with',
        explanation: 'Stopping down to f/22 requires slower shutter speeds or higher ISO.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 10,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Chapter 3 optical rigs, film stocks, angles, weather, lighting, photographers, architecture, and commercial mockups.',
  },
};

export const mjmCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Drawings, Traditional Paintings, Medium Textures, and Seamless Tileable Patterns',
  subtitle: 'Orchestrating physical drawing tools, impasto and watercolor pigment physics, art movements, and "--tile" symmetry',
  readingTimeMinutes: 7,
  sourceWordCount: 3572,
  executiveThesis:
    'Non-photographic synthesis in Midjourney requires anchoring three axes: the physical mark-making instrument (charcoal, sumi-e ink, palette-knife impasto, or watercolor wash), the art-historical movement or master illustrator, and full-bleed artboard isolation. For surface design, appending "--tile" constrains latent denoising across periodic boundaries so opposite canvas edges fuse without seams.',
  paradigmShift: {
    oldWay: 'Prompting generic "artistic painting" or "nice pattern" and cropping away accidental picture frames, desk clutter, or broken tile edges.',
    newWay: 'Specifying physical media textures, negative-weighted frame exclusions ("::-0.5"), and "--tile" periodic boundary constraints.',
    whyItChanged: 'Fine-art training photos often include gallery frames or tabletop pens, while standard diffusion treats borders independently unless "--tile" is active.',
  },
  heroIllustrationUrl: '/books/midjourney-mastery/assets/0121cfd8829474ccb68df09ef6584221_smallRaw.jpg',
  customDiagrams: [
    {
      id: 'mjm-ch04-svg-media',
      title: 'Fine-Art Medium Physics: Dry Mark-Making, Wet Pigments, and Frame Isolation',
      subtitle: 'Decomposing drawing and painting prompts into Instrument, Movement, Texture, and Negative Artboard Isolation',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh4Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <marker id="mjmArrPurple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh4Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">TRADITIONAL MEDIUM &amp; FINE-ART SYNTHESIS ARCHITECTURE</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Combining Dry/Wet Physical Instruments, Art-Historical Movements, and Multi-Prompt Artboard Isolation</text>

  <!-- Panel 1: Dry & Line Media -->
  <rect x="28" y="74" width="232" height="224" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="144" y="98" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. DRY &amp; LINE INSTRUMENTS</text>
  <rect x="42" y="110" width="204" height="82" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="52" y="128" fill="#7dd3fc" font-size="10" font-weight="700">Precision &amp; Graphic Line</text>
  <text x="52" y="144" fill="#cbd5e1" font-size="9">• One Continuous Line / Wireframe</text>
  <text x="52" y="158" fill="#cbd5e1" font-size="9">• Blueprint / Technical OMA Section</text>
  <text x="52" y="172" fill="#cbd5e1" font-size="9">• Scratchboard / Engraved Line-Work</text>

  <rect x="42" y="202" width="204" height="82" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1" />
  <text x="52" y="220" fill="#e2e8f0" font-size="10" font-weight="700">Friable &amp; Expressive Sketch</text>
  <text x="52" y="236" fill="#cbd5e1" font-size="9">• Charcoal on textured paper / Conte</text>
  <text x="52" y="250" fill="#cbd5e1" font-size="9">• Sumi-e &amp; Chinese Ink Brush</text>
  <text x="52" y="264" fill="#cbd5e1" font-size="9">• Graphite, Pastel, Chalk, Airbrush</text>

  <path d="M 260 186 L 282 186" stroke="#c084fc" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrPurple)" />

  <!-- Panel 2: Wet & Layered Pigments -->
  <rect x="284" y="74" width="232" height="224" rx="8" fill="#1e293b" stroke="#c084fc" stroke-width="1.5" />
  <text x="400" y="98" fill="#d8b4fe" font-size="11.5" font-weight="700" text-anchor="middle">2. WET &amp; IMPASTO PIGMENTS</text>
  <rect x="298" y="110" width="204" height="82" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1" />
  <text x="308" y="128" fill="#d8b4fe" font-size="10" font-weight="700">Translucent &amp; Fluid Wash</text>
  <text x="308" y="144" fill="#cbd5e1" font-size="9">• Watercolor bleed on cold-press</text>
  <text x="308" y="158" fill="#cbd5e1" font-size="9">• Alcohol Ink + Metallic Gold Gilt</text>
  <text x="308" y="172" fill="#cbd5e1" font-size="9">• Gouache matte / Gumoil / Lithograph</text>

  <rect x="298" y="202" width="204" height="82" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="308" y="220" fill="#fcd34d" font-size="10" font-weight="700">High-Viscosity &amp; Collage</text>
  <text x="308" y="236" fill="#cbd5e1" font-size="9">• Heavy Impasto &amp; Palette Knife Oil</text>
  <text x="308" y="250" fill="#cbd5e1" font-size="9">• Encaustic wax / Aerosol Stencil</text>
  <text x="308" y="264" fill="#cbd5e1" font-size="9">• Torn-Paper Decoupage &amp; Kintsugi</text>

  <path d="M 516 186 L 538 186" stroke="#c084fc" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrPurple)" />

  <!-- Panel 3: Movement & Artist Stylization -->
  <rect x="540" y="74" width="232" height="224" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="656" y="98" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">3. GENRE &amp; MASTER ANCHORS</text>
  <rect x="554" y="110" width="204" height="82" rx="6" fill="#0f172a" stroke="#d97706" stroke-width="1" />
  <text x="564" y="128" fill="#fde68a" font-size="10" font-weight="700">Canonical Movements</text>
  <text x="564" y="144" fill="#cbd5e1" font-size="9">• De Stijl, Bauhaus &amp; Swiss Design</text>
  <text x="564" y="158" fill="#cbd5e1" font-size="9">• Art Nouveau, Pointillism, Cubism</text>
  <text x="564" y="172" fill="#cbd5e1" font-size="9">• Sin City Noir Comic &amp; Wabi-Sabi</text>

  <rect x="554" y="202" width="204" height="82" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="564" y="220" fill="#6ee7b7" font-size="10" font-weight="700">Master Stylists</text>
  <text x="564" y="236" fill="#cbd5e1" font-size="9">• Yoji Shinkawa, Edward Gorey, Moebius</text>
  <text x="564" y="250" fill="#cbd5e1" font-size="9">• Hopper, Kandinsky, Armin Hofmann</text>
  <text x="564" y="264" fill="#cbd5e1" font-size="9">• Studio Ghibli, Leyendecker, Afremov</text>

  <!-- Bottom Bar: Negative Multi-Prompt Artboard Isolation Gate -->
  <rect x="28" y="314" width="744" height="80" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" />
  <text x="44" y="336" fill="#fda4af" font-size="11.5" font-weight="700">4. FULL-BLEED ARTBOARD ISOLATION GATE (Eliminating Mockup Desk Clutter)</text>
  <text x="44" y="356" fill="#e2e8f0" font-size="10.5" font-family="monospace">"[Medium + Subject] ::1 fine art on white paper that fills the artboard ::1 Desk, frame, matting, pencils, brushes, hands ::-0.5"</text>
  <text x="44" y="376" fill="#94a3b8" font-size="9.5">Prevents Midjourney from rendering wooden studio tables, picture frames, or artist hands around traditional drawings and watercolors.</text>
</svg>`,
      bierutCaption:
        'Combining physical mark-making tools with movement anchors and negative desk exclusions produces full-bleed fine-art canvases.',
      annotations: [
        {
          step: '1',
          label: 'Dry vs. Wet Physics',
          explanation: 'Charcoal governs line grain; impasto and watercolor govern pigment flow.',
        },
        {
          step: '2',
          label: 'Movement Composition Rules',
          explanation: 'Swiss Design, De Stijl, or Noir Comic enforce structural contrast.',
        },
        {
          step: '3',
          label: 'Negative Clutter Suppression',
          explanation: 'Appending "Desk, frame, brushes ::-0.5" forces full-bleed isolation.',
        },
      ],
    },
    {
      id: 'mjm-ch04-svg-tile',
      title: 'Toroidal Seamless Pattern Topology: How "--tile" Enforces Periodic Continuity',
      subtitle: 'Wrapping opposite canvas edges during latent denoising to synthesize infinite repeatable surface patterns',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="mjmCh4Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="mjmArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#mjmCh4Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">SEAMLESS PATTERN TOPOLOGY: TOROIDAL "--tile" BOUNDARY CONDITIONING</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">Comparing bounded canvas edge discontinuity against periodic wrap-around denoising for textiles and wallpapers</text>

  <!-- Left Panel: Standard Bounded Canvas -->
  <rect x="28" y="74" width="236" height="316" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <text x="146" y="98" fill="#fda4af" font-size="11.5" font-weight="700" text-anchor="middle">1. STANDARD CANVAS (No --tile)</text>
  <rect x="56" y="116" width="180" height="140" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="2" />
  <circle cx="146" cy="186" r="42" fill="#3b1219" stroke="#f43f5e" stroke-width="1.5" />
  <text x="146" y="190" fill="#fecdd3" font-size="10" text-anchor="middle">Central Subject Bias</text>
  <line x1="56" y1="186" x2="236" y2="186" stroke="#f43f5e" stroke-width="1" stroke-dasharray="6 4" />
  <text x="44" y="280" fill="#fecdd3" font-size="9.5">• Hard boundary seams at X=0/W, Y=0/H</text>
  <text x="44" y="298" fill="#fecdd3" font-size="9.5">• Vignettes &amp; perspective horizons</text>
  <text x="44" y="316" fill="#fecdd3" font-size="9.5">• Visible grid breaks when repeated</text>
  <text x="44" y="334" fill="#fda4af" font-size="9" font-family="monospace">Result: Unusable for fabric rolls</text>

  <path d="M 264 232 L 290 232" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrEmerald)" />

  <!-- Center Panel: Toroidal Wrap-Around Unit Cell -->
  <rect x="294" y="74" width="236" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="412" y="98" fill="#6ee7b7" font-size="11.5" font-weight="700" text-anchor="middle">2. TOROIDAL UNIT CELL (--tile)</text>
  <rect x="322" y="116" width="180" height="140" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 322 160 A 26 26 0 0 1 322 212" fill="#064e3b" stroke="#34d399" stroke-width="2" />
  <path d="M 502 160 A 26 26 0 0 0 502 212" fill="#064e3b" stroke="#34d399" stroke-width="2" />
  <path d="M 386 116 A 26 26 0 0 0 438 116" fill="#064e3b" stroke="#38bdf8" stroke-width="2" />
  <path d="M 386 256 A 26 26 0 0 1 438 256" fill="#064e3b" stroke="#38bdf8" stroke-width="2" />
  <circle cx="412" cy="186" r="22" fill="#1e1b4b" stroke="#c084fc" stroke-width="1.5" />
  <text x="412" y="190" fill="#e2e8f0" font-size="9" text-anchor="middle">Unit Tile</text>
  <text x="310" y="280" fill="#d1fae5" font-size="9.5">• Left edge (X=0) = Right edge (X=W)</text>
  <text x="310" y="298" fill="#d1fae5" font-size="9.5">• Top edge (Y=0) = Bottom edge (Y=H)</text>
  <text x="310" y="316" fill="#d1fae5" font-size="9.5">• Motifs sliced on left complete on right</text>
  <text x="310" y="334" fill="#6ee7b7" font-size="9" font-family="monospace">Techniques: Iznik, Arabesque, Halftone</text>

  <path d="M 530 232 L 556 232" stroke="#10b981" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mjmArrEmerald)" />

  <!-- Right Panel: Infinite 2x2 Tessellation -->
  <rect x="560" y="74" width="212" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="666" y="98" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">3. INFINITE TESSELLATION</text>
  <rect x="586" y="116" width="160" height="140" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
  <line x1="666" y1="116" x2="666" y2="256" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" />
  <line x1="586" y1="186" x2="746" y2="186" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" />
  <circle cx="626" cy="151" r="14" fill="#1e1b4b" stroke="#c084fc" stroke-width="1.2" />
  <circle cx="706" cy="151" r="14" fill="#1e1b4b" stroke="#c084fc" stroke-width="1.2" />
  <circle cx="626" cy="221" r="14" fill="#1e1b4b" stroke="#c084fc" stroke-width="1.2" />
  <circle cx="706" cy="221" r="14" fill="#1e1b4b" stroke="#c084fc" stroke-width="1.2" />
  <circle cx="666" cy="151" r="14" fill="#064e3b" stroke="#34d399" stroke-width="1.2" />
  <circle cx="666" cy="221" r="14" fill="#064e3b" stroke="#34d399" stroke-width="1.2" />
  <text x="574" y="280" fill="#bae6fd" font-size="9.5">• Zero visible seam across N×M grid</text>
  <text x="574" y="298" fill="#bae6fd" font-size="9.5">• Masters: William Morris, Anni Albers</text>
  <text x="574" y="316" fill="#bae6fd" font-size="9.5">• Camille Walala, Keith Haring</text>
  <text x="574" y="334" fill="#38bdf8" font-size="9" font-family="monospace">Outputs: Textiles, 3D PBR, Wrapping</text>
</svg>`,
      bierutCaption:
        'Enabling "--tile" wraps convolution kernels across opposite canvas borders so severed edge motifs re-enter seamlessly.',
      annotations: [
        {
          step: '1',
          label: 'Bounded Seam Failure',
          explanation: 'Standard generation centers subjects and drops off at edges.',
        },
        {
          step: '2',
          label: 'Toroidal Edge Wrapping',
          explanation: 'The "--tile" flag links left-to-right and top-to-bottom boundaries.',
        },
        {
          step: '3',
          label: 'Continuous Tessellation',
          explanation: 'Unit cells tile infinitely for fabric, wallpaper, and textures.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'mjm-ch04-mm1',
      name: 'The Tri-Axis Medium Decomposition',
      tagline: 'Separate mark-making instrument, pigment viscosity, and paper substrate',
      naiveIntuition: 'Prompting "painting of a cafe" or "drawing of a city" gives sufficient stylistic direction.',
      firstPrinciplesReality: 'Physical media differ in edge geometry: charcoal smudges, sumi-e bleeds, and palette-knife oil carves impasto ridges.',
      howToApply: 'Combine instrument, pigment, and substrate (e.g., "charcoal sketch on textured paper" or "palette knife impasto oil").',
    },
    {
      id: 'mjm-ch04-mm2',
      name: 'Negative Multi-Prompt Frame Suppression',
      tagline: 'Strip gallery frames and tabletop stationery using negative weights',
      naiveIntuition: 'Asking for a "watercolor illustration on white paper" produces a clean full-bleed digital asset.',
      firstPrinciplesReality: 'Training photos of watercolors frequently show wooden desks, paintbrushes, pens, matting, and hands.',
      howToApply: 'Append "::1 fine art on white paper that fills the artboard ::1 Desk, frame, matting, brushes, hands ::-0.5".',
    },
    {
      id: 'mjm-ch04-mm3',
      name: 'Toroidal Boundary Conditioning (--tile)',
      tagline: 'Convert finite canvases into infinite periodic tessellations',
      naiveIntuition: 'Writing "seamless repeating pattern" in prose makes the image edges line up mathematically.',
      firstPrinciplesReality: 'Prose tokens alone cannot force pixel-exact edge continuity; only "--tile" wraps latent convolutions across borders.',
      howToApply: 'Pair "--tile" with all-over motifs (William Morris florals, Iznik tiles, halftone geometric) and avoid horizon lines.',
    },
  ],
  deepSections: [
    {
      id: 'mjm-ch04-sec1',
      sectionNumber: '4.1',
      title: 'Graphic Line Instruments, Dry Media, and Architectural Technical Drawings',
      subtitle: 'Controlling stroke continuity, hatching density, and monochrome contrast from charcoal to blueprints',
      coreMechanism:
        'Line-based synthesis is governed by the friction and flow mechanics of the drawing instrument. Continuous-line and wireframe tokens force Midjourney to trace subjects with unbroken contours, whereas friable dry media—charcoal, graphite, chalk, pastel, and Conte crayon—introduce smudged tonal gradients and paper tooth. Ink techniques span high-contrast scratchboard and Hendrick Goltzius engraved cross-hatching to fluid Japanese sumi-e and Chinese ink brush washes.\n\nFor structural and narrative graphics, technical drawing tokens ("architectural section, floor plan, OMA blueprint, geometry") flatten perspective into orthographic projections. Comic and concept illustrators—Yoji Shinkawa, Edward Gorey, Neal Adams, Joe Madureira, Will Eisner, and Sin City noir styles—impose stark black-and-white ink spotting and dynamic silhouettes.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Choose Line or Dry Tool',
          detail: 'Select continuous line, charcoal sketch, sumi-e ink brush, scratchboard, or blueprint.',
        },
        {
          step: '2',
          title: 'Anchor Illustrator Lineage',
          detail: 'Pair with Yoji Shinkawa for ink splatter, Edward Gorey for cross-hatching, or Sin City noir.',
        },
        {
          step: '3',
          title: 'Lock Substrate Background',
          detail: 'Specify "textured paper", "white background", "vintage dictionary page", or "AMOLED black".',
        },
      ],
      keyTakeaways: [
        'Specify the exact drawing instrument (brush pen, dry brush, charcoal, scratchboard, or blueprint) to control edge sharpness.',
        'Pairing monochrome ink prompts with a single accent color (e.g., "black ink bamboo with a red bird") creates immediate focal hierarchy.',
      ],
      commonPitfalls: [
        'Mixing soft smudged media (pastel, charcoal) with razor-sharp wireframe or blueprint tokens.',
        'Omitting "white background" or "isolated" when generating clipart, sticker sheets, or technical drawings.',
      ],
      figures: [
        {
          file: '0121cfd8829474ccb68df09ef6584221_smallRaw.jpg',
          originalLabel: 'Chapter 4 Study — Expressive Ink & Graphic Line Synthesis',
          bierutTitle: 'Command Line Weight and Negative Space with Ink, Charcoal, and Comic Anchors',
          editorialAnalysis:
            'Monochrome and ink illustrations rely on contrast between dense black mark-making and uninked paper void. Referencing master draftsmen and explicit pen or charcoal tools prevents smooth digital airbrushing.',
          keyTakeaways: [
            'Use sumi-e, brush pen, or engraved line-work tokens for organic stroke variation.',
            'Anchor comic silhouettes with noir high-contrast shadow spotting.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch04-sec2',
      sectionNumber: '4.2',
      title: 'Wet Pigment Physics, Impasto Relief, Collage Media, and Artboard Isolation',
      subtitle: 'Orchestrating watercolor granulation, palette-knife oil texture, art movements, and negative weights',
      coreMechanism:
        'Wet and layered painting media split into translucent washes and opaque high-viscosity relief. Watercolor, gouache, and alcohol ink prompts generate wet-on-wet blooms, granulation, and luminous paper show-through—especially when paired with Winslow Homer, Joseph Zbukvic, Studio Ghibli, or gold-gilt accents. Conversely, oil paint, acrylic, encaustic wax, and palette-knife impasto tokens (Leonid Afremov, Van Gogh, Ivan Shishkin) build physical paint ridges and visible canvas weave.\n\nArt-historical movements—Art Nouveau, Impressionism, Cubism, De Stijl (Piet Mondrian), Futurism (Wassily Kandinsky), and Swiss Design (Armin Hofmann)—govern composition. Because fine-art datasets include photos of framed paintings on desks, negative multi-prompt weights (`Desk, frame, matting, pencils, pens, brushes, hands ::-0.5` or `--no quotes or font letter`) isolate the artwork full-bleed.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select Pigment Viscosity',
          detail: 'Choose translucent watercolor/alcohol ink wash, thick impasto palette-knife oil, or decoupage.',
        },
        {
          step: '2',
          title: 'Bind Movement and Master',
          detail: 'Anchor with Edward Hopper for realism, Kandinsky for abstraction, or Armin Hofmann for Swiss grids.',
        },
        {
          step: '3',
          title: 'Apply Negative Isolation',
          detail: 'Append "::1 fills the artboard ::1 Desk, frame, matting, brushes, hands ::-0.5" to strip clutter.',
        },
      ],
      keyTakeaways: [
        'Use negative multi-prompt weights ("::-0.5") on desks, frames, and brushes whenever prompting traditional watercolors or ink drawings.',
        'Combine kintsugi gold seams, torn-paper decoupage (Derek Gores), or pointillism over alcohol ink for hybrid surface depth.',
      ],
      commonPitfalls: [
        'Leaving out "--no quotes or font letter" on vintage lithographs or cocktail posters, which invites garbled text.',
        'Prompting "oil painting" without specifying brushstroke mechanics (impasto, palette knife, or smooth realism).',
      ],
      figures: [
        {
          file: '05c2ca896d0d84596129bc27f751a8eb_smallRaw.jpg',
          originalLabel: 'Chapter 4 Study — Watercolor Wash & Impasto Texture',
          bierutTitle: 'Synthesize Tactile Pigment Granulation and Impasto Relief Across Fine-Art Genres',
          editorialAnalysis:
            'Authentic painterly synthesis captures physical pigment-substrate interaction—whether translucent watercolor pooling on paper or heavy oil impasto carved with a palette knife. Movement tokens and lighting cues ground both abstract and representational canvases.',
          keyTakeaways: [
            'Specify visible paint structure, canvas texture, or wet watercolor bleed for tactile surfaces.',
            'Use high chaos (--c 50 to --chaos 100) for expressive abstract drip and splash compositions.',
          ],
        },
      ],
    },
    {
      id: 'mjm-ch04-sec3',
      sectionNumber: '4.3',
      title: 'Toroidal Surface Design: Mastering Seamless Patterns with "--tile"',
      subtitle: 'Generating infinitely repeatable textiles, Iznik ceramics, geometric mosaics, and wrapping papers',
      coreMechanism:
        'A seamless pattern is a unit cell whose top edge connects continuously to its bottom edge and whose left edge connects to its right edge. Midjourney’s `--tile` parameter modifies diffusion padding to use periodic (toroidal) boundary conditions at every denoising step. Any petal, geometric line, or watercolor wave sliced by the left border completes its geometry on the right border, guaranteeing zero visible seams across a 2D grid.\n\nTo maximize `--tile` coherence, prompts must favor uniform all-over distributions over single-point perspective horizons. Pairing `--tile` with specialized pattern crafts—Iznik tiles, Arabesque, Mandala, paper quilling, halftone prints, crocheted textures, or chemigrams—and pattern masters like William Morris, Anni Albers, Camille Walala, or Keith Haring yields production-ready textiles and wallpapers.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select All-Over Topology',
          detail: 'Choose botanical florals, Scandinavian retro geometry, Iznik ceramic tiles, or grunge overlays.',
        },
        {
          step: '2',
          title: 'Anchor Surface Master',
          detail: 'Cite William Morris for botanicals, Anni Albers for weaving, or Camille Walala for pop geometry.',
        },
        {
          step: '3',
          title: 'Enforce Wrapping via --tile',
          detail: 'Append "--tile --v 5.1" while omitting horizon lines or single-subject framing tokens.',
        },
      ],
      keyTakeaways: [
        'Always append "--tile" rather than relying on the words "seamless pattern" alone when generating repeatable textures.',
        'Uniform density styles—watercolor florals, halftone dots, Arabesque lattices, and mosaic tiles—tessellate without visual hot-spots.',
      ],
      commonPitfalls: [
        'Combining "--tile" with sky-over-ground horizon lines, which creates jarring horizontal bands when repeated vertically.',
        'Using heavy central vignetting in a "--tile" prompt, producing a dark checkerboard grid across the tiled surface.',
      ],
      figures: [
        {
          file: '0b1e9fa76859713e9b2663c4e35da8f6_smallRaw.jpg',
          originalLabel: 'Chapter 4 Study — Seamless Tileable Pattern Synthesis (--tile)',
          bierutTitle: 'Enforce Periodic Edge Continuity for Textiles and Wallpapers Using "--tile"',
          editorialAnalysis:
            'When "--tile" is active, Midjourney distributes motifs evenly across the unit cell and wraps boundary strokes across opposite edges. Botanical, watercolor, and geometric motifs repeat infinitely across fabric rolls and 3D shaders.',
          keyTakeaways: [
            'Combine "--tile" with evenly lit substrates (watercolor paper, vector mosaic) for uniform repetition.',
            'Inspect unit tiles in a 2x2 grid to verify balanced motif scale across boundaries.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Traditional Media & Surface Pattern Technique Matrix',
      description: 'Comparing mark-making physics, artist anchors, texture behavior, and parameter gates across four pipelines.',
      headers: ['Pipeline', 'Core Media', 'Artist Anchors', 'Texture Physics', 'Parameter Gate'],
      rows: [
        ['Line & Dry', 'Charcoal, Sumi-e, Blueprint', 'Shinkawa, Gorey, Eisner', 'Dry grain, contour hatching', 'White/black void'],
        ['Wet Wash', 'Watercolor, Gouache, Ink', 'Homer, Ghibli, Leyendecker', 'Wet bleed, paper glow', 'Desk, frame ::-0.5'],
        ['Impasto Oil', 'Palette knife oil, Decoupage', 'Afremov, Van Gogh, Gores', 'Thick ridges, canvas weave', '--s 750 --c 50'],
        ['Tile Pattern', 'Iznik, Arabesque, Halftone', 'Morris, Albers, Walala', 'Toroidal X/Y wrap-around', '--tile (mandatory)'],
      ],
      verdictRule: 'Use dry/ink tokens for contour control, negative desk weights ("::-0.5") for full-bleed fine art, and "--tile" for repeatable patterns.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'mjm-ch04-scen1',
      title: 'Stripping Tabletop Clutter and Picture Frames from Watercolor Illustrations',
      roleAndContext: 'Book illustrator generating full-bleed pen-and-ink and watercolor scenes for print.',
      symptomOrFailure: 'Midjourney renders the watercolor sitting on a wooden desk surrounded by brushes, pencils, and a frame.',
      naiveFixAndWhyItFails: 'Adding "no frame" in plain text fails because "watercolor on paper" co-occurs with desk flat-lays.',
      firstPrinciplesSolution: 'Use multi-prompt weights: "Pen and ink watercolor ::1 fine art on white paper that fills the artboard ::1 Desk, frame, matting, brushes, hands ::-0.5".',
      measurableOutcome: 'Eliminates tabletop stationery and frame borders, delivering a clean full-bleed illustration.',
    },
    {
      id: 'mjm-ch04-scen2',
      title: 'Synthesizing Production-Ready Seamless Textile and Wallpaper Patterns',
      roleAndContext: 'Surface designer creating repeatable botanical and geometric prints for fabric production.',
      symptomOrFailure: 'Prompts containing the words "seamless pattern" still produce mismatched edges when tiled.',
      naiveFixAndWhyItFails: 'Manually healing seams in post-processing destroys intricate watercolor washes and geometric grids.',
      firstPrinciplesSolution: 'Append "--tile" to an all-over motif prompt ("Orchids watercolor seamless pattern, Akihiko Yoshida style --tile --v 5.1").',
      measurableOutcome: 'Produces mathematically continuous toroidal unit cells that tessellate infinitely with zero visible seams.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'mjm-ch04-q1',
        scenarioPrompt:
          'When generating a traditional pen-and-ink and watercolor illustration in Midjourney, the output keeps showing a wooden table, matting, paintbrushes, and an artist’s hand holding a pen. How does Chapter 4 solve this artifact?',
        options: [
          {
            label: 'A',
            text: 'Increase "--stylize" to 1000 and add "photorealistic DSLR camera".',
            isCorrect: false,
            explanation: 'Adding DSLR camera tokens makes it even more likely to photograph a physical desk setup.',
          },
          {
            label: 'B',
            text: 'Use multi-prompt weights to anchor "fine art on white paper that fills the artboard ::1" and apply a negative weight "Desk, frame, matting, pencils, pens, brushes, hands ::-0.5".',
            isCorrect: true,
            explanation: 'Negative multi-prompt weighting ("::-0.5") explicitly repels the latent concepts of tabletop stationery and framing while "::1 fills the artboard" enforces full-bleed coverage.',
          },
          {
            label: 'C',
            text: 'Add the "--tile" parameter to every portrait illustration.',
            isCorrect: false,
            explanation: '"--tile" forces periodic edge repetition across the canvas, fragmenting a standalone architectural or portrait composition.',
          },
          {
            label: 'D',
            text: 'Switch the medium from watercolor to "3D Unreal Engine 5 render".',
            isCorrect: false,
            explanation: 'Switching to Unreal Engine destroys the requested traditional pen-and-ink watercolor medium.',
          },
        ],
      },
      {
        id: 'mjm-ch04-q2',
        scenarioPrompt:
          'What is the exact architectural role of the "--tile" parameter in Midjourney?',
        options: [
          {
            label: 'A',
            text: 'It splits the 2x2 generation grid into 16 smaller thumbnail tiles.',
            isCorrect: false,
            explanation: 'Midjourney always generates a 2x2 grid; "--tile" governs boundary continuity within each image.',
          },
          {
            label: 'B',
            text: 'It converts any image into a ceramic bathroom mosaic texture.',
            isCorrect: false,
            explanation: 'Ceramic mosaic style requires explicit tokens like "Iznik tiles" or "mosaic"; "--tile" works with any medium.',
          },
          {
            label: 'C',
            text: 'It enforces periodic wrap-around boundary conditions so the generated unit image repeats infinitely in any direction without visible seams.',
            isCorrect: true,
            explanation: 'With "--tile", opposite edges of the canvas are denoised together so motifs crossing one border seamlessly emerge on the opposite border.',
          },
          {
            label: 'D',
            text: 'It removes all background colors and exports a transparent PNG sticker.',
            isCorrect: false,
            explanation: 'Midjourney does not export native alpha-channel transparency via "--tile".',
          },
        ],
      },
      {
        id: 'mjm-ch04-q3',
        scenarioPrompt:
          'You want to create a poster with stark black rectangular geometry on a pale yellow background inspired by mid-century Swiss modernist graphic design. Which artist and genre tokens from Chapter 4 directly target this aesthetic?',
        options: [
          {
            label: 'A',
            text: 'By Armin Hofmann, Swiss design, flat design, 2D',
            isCorrect: true,
            explanation: 'Armin Hofmann is the canonical pioneer of Swiss Modernist poster design characterized by stark geometric planes and flat 2D contrast.',
          },
          {
            label: 'B',
            text: 'By Ivan Shishkin, hyper-detailed Pyrenees mountains, raking sunlight',
            isCorrect: false,
            explanation: 'Ivan Shishkin anchors 19th-century Russian realist forest landscapes, not flat Swiss modernist geometry.',
          },
          {
            label: 'C',
            text: 'By Leonid Afremov, palette knife oil painting, rainy park',
            isCorrect: false,
            explanation: 'Leonid Afremov produces rainbow-saturated impasto oil paintings, the opposite of minimalist Swiss flat design.',
          },
          {
            label: 'D',
            text: 'By Jean-Baptiste Monge, anthropomorphic woodland character art',
            isCorrect: false,
            explanation: 'Jean-Baptiste Monge specializes in whimsical storybook character creatures.',
          },
        ],
      },
      {
        id: 'mjm-ch04-q4',
        scenarioPrompt:
          'Which combination of medium tokens best produces a heavily textured three-dimensional floral painting where physical ridges of pigment and torn collage layers are visibly raised off the canvas?',
        options: [
          {
            label: 'A',
            text: 'One continuous line drawing, wireframe drawing, pixel drawing',
            isCorrect: false,
            explanation: 'Wireframe and pixel drawings are flat graphic line techniques with zero pigment thickness.',
          },
          {
            label: 'B',
            text: 'Thick impasto painting, rough palette knife works, oil paint on canvas texture, torn paper decoupage by Derek Gores',
            isCorrect: true,
            explanation: 'Impasto, palette knife oil, and Derek Gores torn-paper collage explicitly instruct Midjourney to render thick, tactile, raised surface relief.',
          },
          {
            label: 'C',
            text: 'Calotype print, photogravure, X-ray blueprint',
            isCorrect: false,
            explanation: 'Calotype, photogravure, and X-ray are flat photographic/printmaking processes.',
          },
          {
            label: 'D',
            text: '2D vector illustration, flat clipart, neutral background',
            isCorrect: false,
            explanation: 'Vector clipart explicitly flattens all shading and surface relief.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'mjm-ch04-fc1',
        category: 'foundation',
        front: 'What is the visual difference between Sumi-e / Chinese Ink Brush vs. Scratchboard / Engraved Line-Work?',
        back: 'Sumi-e uses fluid wet ink washes and calligraphic strokes on white paper, whereas scratchboard and engraving carve crisp white hatching lines out of dark backgrounds.',
        mentalHook: 'Sumi-e flows on white; Scratchboard carves out of black.',
      },
      {
        id: 'mjm-ch04-fc2',
        category: 'adaptation',
        front: 'How do Impasto / Palette Knife Oil vs. Watercolor / Alcohol Ink differ in surface physics?',
        back: 'Impasto and palette knife oil build thick, opaque 3D paint ridges on canvas, while watercolor and alcohol ink create translucent fluid blooms and edge granulation.',
        mentalHook: 'Impasto = carved butter ridges; Watercolor = translucent pigment pools.',
      },
      {
        id: 'mjm-ch04-fc3',
        category: 'optimization',
        front: 'What multi-prompt syntax strips unwanted desks, frames, and brushes from traditional art prompts?',
        back: 'Append "::1 fine art on white paper that fills the artboard ::1 Desk, frame, matting, pencils, pens, brushes, hands ::-0.5".',
        mentalHook: 'Positive 1.0 fills the board; Negative -0.5 banishes the desk.',
      },
      {
        id: 'mjm-ch04-fc4',
        category: 'architecture',
        front: 'How does "--tile" alter Midjourney’s canvas boundary behavior?',
        back: 'It links the top edge to the bottom edge and the left edge to the right edge during denoising so patterns repeat seamlessly in any direction.',
        mentalHook: '"--tile" turns a flat square into a wrap-around torus.',
      },
      {
        id: 'mjm-ch04-fc5',
        category: 'evaluation',
        front: 'Which pattern artists anchor (1) Botanical Arts & Crafts, (2) Woven Textiles, and (3) Pop Geometric Murals?',
        back: 'Botanical: William Morris; Woven/Geometric Textiles: Anni Albers; Pop Geometric Murals: Camille Walala.',
        mentalHook: 'Morris plants, Albers looms, Walala pop shapes.',
      },
      {
        id: 'mjm-ch04-fc6',
        category: 'data',
        front: 'What specialized pattern techniques are highlighted in Chapter 4 for ornamental and print textures?',
        back: 'Iznik tiles, Arabesque, Mandala, Paper quilling, Halftone print, Crocheted, Chemigram, Blueprint, and Alcohol Ink.',
        mentalHook: 'Iznik ceramics, Arabesque curves, Quilled paper curls, Halftone dots.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'mjm-ch04-feyn1',
        conceptTitle: 'Controlling Physical Medium Texture and Full-Bleed Artboard Isolation',
        prompt:
          'Explain how to construct a traditional fine-art prompt in Midjourney that achieves authentic physical medium texture (such as charcoal, watercolor, or impasto oil) without accidentally rendering a photograph of a framed picture sitting on an artist’s desk.',
        rubricChecklist: [
          'Distinguishes between dry friable media (charcoal, pastel), wet fluid washes (watercolor, alcohol ink), and high-relief pigments (palette-knife impasto, encaustic).',
          'Pairs the physical medium with a canonical artist or art movement (e.g., Edward Hopper, Kandinsky, Armin Hofmann, Leyendecker) to lock compositional structure.',
          'Explains why dataset bias causes "watercolor on paper" to trigger flat-lay photos of desks, pens, brushes, and frames.',
          'Demonstrates the negative multi-prompt pattern ("::1 fills the artboard ::1 Desk, frame, matting, pencils, brushes, hands ::-0.5") to force a pure full-bleed canvas.',
        ],
        modelExplanation:
          'To synthesize authentic traditional media, first name the exact mark-making physics—such as "charcoal sketch on textured paper", "loose dreamy watercolors with metallic gold gilt", or "thick impasto palette-knife oil painting"—and anchor it to masters like Leyendecker or Kandinsky. Because online art portfolios frequently photograph drawings on wooden desks beside brushes and frames, Midjourney often renders the surrounding tabletop. Adding "::1 fine art on white paper that fills the artboard ::1 Desk, frame, matting, pencils, pens, brushes, hands ::-0.5" suppresses the tabletop context and isolates the artwork edge-to-edge.',
      },
      {
        id: 'mjm-ch04-feyn2',
        conceptTitle: 'Designing Toroidal Seamless Patterns with "--tile"',
        prompt:
          'Explain how Midjourney’s "--tile" parameter works geometrically and why certain compositional choices (like uniform all-over motifs vs. horizon landscapes) succeed or fail when tiled across fabric or wallpaper.',
        rubricChecklist: [
          'Defines a seamless pattern as a unit cell whose left/right and top/bottom boundaries connect without a visible break.',
          'Explains that the "--tile" parameter enforces periodic (toroidal) boundary conditions during latent diffusion so edge motifs wrap around.',
          'Contrasts uniform all-over topologies (William Morris florals, Iznik tiles, halftone geometry) against horizon-based or vignette compositions.',
          'Notes why single-horizon scenes or dark corner vignettes fail by creating noticeable stripes or checkerboard grids when repeated.',
        ],
        modelExplanation:
          'When "--tile" is appended to a prompt, Midjourney wraps the latent canvas into a torus: pixels along the left border are convolved directly with pixels along the right border, and the top border wraps into the bottom border. Any flower petal or geometric line exiting the left edge seamlessly re-enters on the right. However, if a prompt includes a sky-over-ground horizon or heavy corner vignetting, tiling stacks the sky directly beneath the ground and turns vignettes into a repetitive dark grid. Successful "--tile" prompts therefore use evenly distributed all-over motifs—such as watercolor botanicals, Iznik tiles, or Scandinavian geometric mosaics.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'mjm-dry-line-instruments',
        label: 'Dry & Graphic Line Instruments',
        category: 'foundation',
        chapterNumber: 4,
        importance: 2,
        definition: 'Tools governing contour and dry grain: continuous line, wireframe, charcoal, pastel, scratchboard, sumi-e ink, and blueprint.',
        whyItMatters: 'Determines edge crispness, hatching density, and paper-tooth interaction.',
      },
      {
        id: 'mjm-wet-impasto-pigments',
        label: 'Wet Wash & Impasto Relief Pigments',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition: 'Fluid translucent washes (watercolor, gouache, alcohol ink) vs. raised relief media (palette knife impasto oil, encaustic, decoupage).',
        whyItMatters: 'Controls whether colors bleed into paper fibers or sit as sculpted 3D ridges.',
      },
      {
        id: 'mjm-art-movement-anchors',
        label: 'Art-Historical Movement & Artist Anchors',
        category: 'architecture',
        chapterNumber: 4,
        importance: 2,
        definition: 'Frameworks (De Stijl, Art Nouveau, Cubism, Swiss Design) and masters (Shinkawa, Gorey, Hopper, Kandinsky, Hofmann, Morris).',
        whyItMatters: 'Encodes compositional geometry, color theory, and stroke vocabulary.',
      },
      {
        id: 'mjm-negative-frame-isolation',
        label: 'Negative Multi-Prompt Artboard Isolation',
        category: 'optimization',
        chapterNumber: 4,
        importance: 1,
        definition: 'Multi-prompt pattern (`::1 fills the artboard ::1 Desk, frame, matting, brushes, hands ::-0.5`) that strips mockup clutter.',
        formulaOrRule: 'Artwork ::1 + Full Artboard ::1 + (Desk, Frame, Brushes) ::-0.5',
        whyItMatters: 'Prevents traditional drawing and watercolor prompts from rendering studio tables and frames.',
      },
      {
        id: 'mjm-toroidal-tile-parameter',
        label: 'Toroidal Seamless Pattern Parameter (--tile)',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition: 'Midjourney flag (`--tile`) wrapping X and Y canvas borders during diffusion to output repeatable unit cells.',
        formulaOrRule: 'I(0, y) = I(W, y) \\;\\land\\; I(x, 0) = I(x, H)',
        whyItMatters: 'Enables production-ready textiles, wallpapers, and 3D textures with zero visible seams.',
      },
      {
        id: 'mjm-ornamental-pattern-crafts',
        label: 'Ornamental & Printmaking Pattern Crafts',
        category: 'data',
        chapterNumber: 4,
        importance: 3,
        definition: 'Specialized surface techniques: Iznik tiles, Arabesque, Mandala, Paper quilling, Halftone print, Crocheted, and Chemigram.',
        whyItMatters: 'Provides uniform all-over motifs that tessellate cleanly without horizon seams.',
      },
    ],
    edges: [
      {
        source: 'mjm-dry-line-instruments',
        target: 'mjm-wet-impasto-pigments',
        relationship: 'trades_off_with',
        explanation: 'Crisp line work trades off against fluid pigment bleed and impasto relief.',
      },
      {
        source: 'mjm-art-movement-anchors',
        target: 'mjm-wet-impasto-pigments',
        relationship: 'optimizes',
        explanation: 'Pairing an artist or movement with a medium locks in authentic brushwork.',
      },
      {
        source: 'mjm-negative-frame-isolation',
        target: 'mjm-wet-impasto-pigments',
        relationship: 'mitigates',
        explanation: 'Negative weights (`::-0.5`) mitigate dataset bias toward wooden desks and frames.',
      },
      {
        source: 'mjm-ornamental-pattern-crafts',
        target: 'mjm-toroidal-tile-parameter',
        relationship: 'prerequisite_for',
        explanation: 'Uniform all-over motifs are prerequisite for `--tile` to avoid horizon bands.',
      },
      {
        source: 'mjm-art-movement-anchors',
        target: 'mjm-toroidal-tile-parameter',
        relationship: 'optimizes',
        explanation: 'Surface masters like William Morris and Anni Albers optimize spacing across `--tile` borders.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 3,
    antiAiVerified: true,
    auditNotes: 'Complete coverage of Chapter 4 artists, genres, drawing/painting media, negative frame exclusion, and seamless patterns (--tile).',
  },
};
