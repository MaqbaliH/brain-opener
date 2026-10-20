# Brain Opener: Multi-Agent System & Context Engineering Constitution

This workspace uses a **Hub-and-Spoke 9-Node Directed Acyclic Graph (DAG)** governed by **Nexus** (`nexus-orchestrator`) to transform technical and non-fiction books into exhaustive, first-principles interactive mastery experiences.

---

## 1. Execution Mode Router (Pitch Gate vs. Autonomous Batch)

Every user request in this workspace routes strictly into one of two execution modes:

### Mode A: `AUTONOMOUS_BOOK_SYNTHESIS` (End-to-End, Zero Pause)
- **Trigger**: The user provides a book path or says `"go with: <path>"` (e.g., `"go with: C:\Users\hassa\Local Sites\Brain Opener\Books\..."`).
- **Behavior**: Execute the entire 5-Stage Hub-and-Spoke DAG (`Archon` $\rightarrow$ Parallel Chapter-Shard Workers $\rightarrow$ `Veritas` Audit $\rightarrow$ `Atlas` Registry & Build) end-to-end without stopping for intermediate confirmation.

### Mode B: `INTERACTIVE_ARCHITECTURE_OR_UI` (Mandatory Pitch-Before-Build Gate)
- **Trigger**: The user asks an open-ended question or requests a broad UI/feature upgrade (e.g., `"make the dashboard better"`, `"add new features to the reader"`, `"redesign the graph"`).
- **Behavior**:
  1. Audit the relevant components and state the current constraints.
  2. Pitch **2 to 3 concrete architectural/UX options** anchored to real-world exemplars (e.g., *Distill.pub*, *Bartosz Ciechanowski*, *Stripe Press*, *Edward Tufte*) with explicit trade-offs.
  3. **STOP and wait for user selection** before writing or modifying application code.

---

## 2. The Anti-Summary Mandate, High-Signal Compression & Reference Anchors

All agents are bound by a strict **Zero-Shallow-Summary AND Zero-Bloat Rule**:
- **Reference Anchors**: Write with the mechanistic depth of **Richard Feynman's Lectures**, the interactive visual clarity of **Distill.pub / Bartosz Ciechanowski**, and the structural precision of **Stripe Press / Swiss Modernism (Armin Hofmann, Edward Tufte, Michael Bierut)**.
- **The 20%–35% High-Signal Compression Law (Never Longer Than the Book!)**:
  - A synthesized book package must be **3× to 4× shorter than the source book** (reader-facing prose must be **20% to 35%** of `sourceWordCount`; total chapter reading time must be **6 to 10 minutes**, never 25–35 minutes).
  - **Single-Responsibility Zero-Echo Rule**: Every block in `ChapterMastery` has ONE distinct cognitive job and must **never repeat** another block on the same page (`executiveThesis` states the core thesis in 2–3 sentences; `mentalModels` define reusable cognitive lenses; `deepSections` explain the specific sub-mechanism in **110–165 crisp words** without re-explaining the chapter thesis; `keyTakeaways` & `commonPitfalls` are 1-sentence rules).
  - **Ban Synthetic "Pseudo-Math" Formulas**: Only include `formulas` (`FormulaBreakdown`) when the source text or domain genuinely uses a mathematical equation, statistical metric, or formal quantitative law. **Never invent fake calculus integrals or synthetic variables for qualitative metaphors.**
- **Never Write Book-Report Fluff**: Never write descriptive filler (*"In Chapter 3, the author discusses evaluation metrics and why they matter"*). State the mechanism directly.
- **Anti-AI Prose Blacklist**: Never use synthetic AI tropes:
  - *Forbidden Words*: `delve`, `delve into`, `dive deep`, `tapestry`, `rich tapestry`, `testament to`, `beacon of`, `moreover`, `furthermore`, `game-changer`, `synergy`, `seamlessly`, `vital role`, `paramount`, `myriad`, `holistic`, `fostering`, `spearheading`, `leveraging`, `at its core`, `in conclusion`, `ultimately`.
  - *Forbidden Syntax*: No contrastive negations (*"It is not just X, it is Y"* / *"Not merely a tool, but a paradigm"*). State what the mechanism actually is with concrete nouns and active verbs.

---

## 3. Hub-and-Spoke DAG Topology (`Nexus` Conductor)

To prevent peer-to-peer handoff drift and context truncation, **Nexus** coordinates all specialist nodes in a strict **Hub-and-Spoke Chapter-Shard Topology**:

```
[Raw Book (.epub / .pdf)]
        │
        ▼
┌────────────────────────────────────────────────────────┐
│ Stage 1 — NODE 1: ARCHON (Deterministic Ingestion)     │
│ Runs: python pipeline/extract_book.py "<path>" "<slug>"│
│ Outputs: manifest.json, chXX.txt, public/books/<slug>/ │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ Stage 2 — NODE 0: NEXUS (Manifest Lock & Sharding)     │
│ Locks BookStateManifest & partitions chapters into     │
│ 2–3 chapter shards (ch01-ch02.ts, ch03-ch04.ts, ...)   │
└──────────────────────────┬─────────────────────────────┘
                           │ (Parallel Fan-Out per Shard)
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Shard Worker 1  │ │ Shard Worker 2  │ │ Shard Worker N  │
│ (Ch 01 – Ch 02) │ │ (Ch 03 – Ch 04) │ │ (Ch X – Ch Y)   │
│ Applies Nodes:  │ │ Applies Nodes:  │ │ Applies Nodes:  │
│ • Node 2: Axiom │ │ • Node 2: Axiom │ │ • Node 2: Axiom │
│ • Node 3:Feynman│ │ • Node 3:Feynman│ │ • Node 3:Feynman│
│ • Node 4: Prism │ │ • Node 4: Prism │ │ • Node 4: Prism │
│ • Node 5:Synapse│ │ • Node 5:Synapse│ │ • Node 5:Synapse│
│ • Node 6:Socrates│ │ • Node 6:Socrates│ │ • Node 6:Socrates│
└────────┬────────┘ └────────┬────────┘ └────────┬────────┘
         └─────────────────┬─┴───────────────────┘
                           │ (Fan-In Convergence)
                           ▼
┌────────────────────────────────────────────────────────┐
│ Stage 4 — NODE 7: VERITAS (Deterministic Gatekeeper)   │
│ Runs: python pipeline/veritas_audit.py "<slug>"        │
│ Verifies: 0 AI clichés, 100% asset existence,          │
│ valid SVGs, and quantitative chapter minimums.         │
└──────────────────────────┬─────────────────────────────┘
                           │ (Pass == True)
                           ▼
┌────────────────────────────────────────────────────────┐
│ Stage 5 — NODE 8: ATLAS (Registry & Build Compiler)    │
│ Wires src/data/books/<slug>/index.ts & registry.ts     │
│ Verifies: npm run build (tsc -b && vite build == 0)    │
└────────────────────────────────────────────────────────┘
```

---

## 4. Quantitative Minimums & Compression Ceilings Per Chapter (Hard Contract)

Every synthesized `ChapterMastery` object in `src/data/books/<slug>/ch*.ts` must stay within these strict floor-and-ceiling bounds (target reading time: **6–10 minutes per chapter**, total reader prose **$\le 35\%$ of `sourceWordCount`**):

| Field in `ChapterMastery` | Specialist Node | Threshold & High-Signal Compression Contract |
| :--- | :--- | :--- |
| `executiveThesis` | `Axiom` + `Feynman` | **2–3 crisp sentences (45–75 words max)** stating the core causal thesis. |
| `paradigmShift` | `Axiom` | **1–2 concise sentences per field** (`oldWay`, `newWay`, `whyItChanged`) grounded in concrete mechanics. |
| `mentalModels` | `Feynman` | **3 named models** per chapter (`naiveIntuition`, `firstPrinciplesReality`, `howToApply` — **1–2 sentences per field, zero repetition of thesis**). |
| `customDiagrams` | `Prism` | **2 custom SVGs** per chapter (`viewBox="0 0 800 420"`, semantic colors, 1-sentence `bierutCaption`, 3 concise `annotations`). |
| `deepSections` | `Axiom` + `Feynman` | **3–5 consolidated major sections** per chapter; each `coreMechanism` must be **110–165 words (1–2 tight paragraphs)** with 2–3 1-sentence `keyTakeaways` and 2–3 1-sentence `commonPitfalls`. |
| `deepSections[].formulas` | `Axiom` | **Optional — Genuine Math Only**: Include *only* when the chapter contains real equations, metrics, or formal laws. **Never invent pseudo-math for qualitative concepts.** |
| `deepSections[].figures` | `Archon` + `Prism` | Relevant extracted book figures attached to their matching section with active-verb `bierutTitle` and 2-sentence `editorialAnalysis`. |
| `tradeOffMatrices` | `Axiom` | **1 multi-column decision matrix** per chapter with short scannable cells (5–12 words/cell) and a 1–2 sentence `verdictRule`. |
| `engineeringScenarios` | `Feynman` | **2 real-world case studies** (`symptomOrFailure` $\rightarrow$ `naiveFixAndWhyItFails` $\rightarrow$ `firstPrinciplesSolution` $\rightarrow$ `measurableOutcome`, 1–2 sentences per field). |
| `activeRecall.quiz` | `Socrates` | **4 scenario-based diagnostic questions** per chapter (4 options each, 1–2 sentence first-principles explanations). |
| `activeRecall.flashcards` | `Socrates` | **6 high-yield cards** per chapter with 1-sentence `back` and `mentalHook`. |
| `activeRecall.feynmanChallenges` | `Socrates` | **2 "Explain It Back" prompts** per chapter with a 4-point `rubricChecklist` and concise `modelExplanation`. |
| `knowledgeSubgraph` | `Synapse` | **$\ge 6$ `ConceptNode`s** and **$\ge 5$ typed `ConceptEdge`s** per chapter. |

---

## 5. Workspace Invariants (Do Not Break)

When editing any file in this repository, the following invariants are **strictly non-negotiable**:
1. **Schema Invariance (`src/types/book.ts`)**: Never rename or remove existing properties on `BookMasteryPackage` or `ChapterMastery`; backward compatibility with `ai-engineering`, `beyond-vibe-coding`, and `asking-the-right-questions` must remain 100% intact.
2. **Base-URL Asset Resolution**: Always reference public book assets using `${import.meta.env.BASE_URL}books/${bookSlug}/assets/${file}` (never hardcoded root `/books/...`) so deployments work across local dev, GitHub Pages, and subpaths.
3. **Code-Splitting Convention (`vite.config.ts`)**: Store book data under `src/data/books/<book-slug>/chXX-chYY.ts` and `src/data/books/<book-slug>/index.ts` so Vite automatically code-splits each chapter pair into its own lazy bundle chunk.
4. **Static Reading Prose vs. Kinetic Visuals**: Keep long-form reading text (`editorial-prose`, `66ch` measure, `1.72` line-height) 100% static and distraction-free. Restrict animations to interactive simulators, SVG data-flow paths (`svg-flow-active`), 3D flashcard flips, and subtle card hover physics.

---

## 6. Workspace Agent Skills Directory

1. **[Nexus](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/nexus-orchestrator/SKILL.md)** — Node 0: Master Orchestrator & Hub-and-Spoke DAG Conductor
2. **[Archon](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/archon-ingestor/SKILL.md)** — Node 1: Deterministic Book Ingestor & Structural Cartographer (`pipeline/extract_book.py`)
3. **[Axiom](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/axiom-deconstructor/SKILL.md)** — Node 2: First-Principles Deconstructor & Mechanism Extractor
4. **[Feynman](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/feynman-pedagogue/SKILL.md)** — Node 3: Deep Concept Pedagogue & Mental Model Architect
5. **[Prism](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/prism-illustrator/SKILL.md)** — Node 4: Visual Mental-Model, SVG & Bierut Figure Architect
6. **[Synapse](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/synapse-graph/SKILL.md)** — Node 5: Knowledge Graph & Cross-Book Ontology Architect
7. **[Socrates](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/socrates-recall/SKILL.md)** — Node 6: Active Recall, Scenario Quiz & Feynman Rubric Architect
8. **[Veritas](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/veritas-critic/SKILL.md)** — Node 7: Deterministic Completeness, Asset & Anti-AI Gatekeeper (`pipeline/veritas_audit.py`)
9. **[Atlas](file:///c:/Users/hassa/Local%20Sites/Brain%20Opener/.agents/skills/atlas-publisher/SKILL.md)** — Node 8: Swiss-Grid Webapp Publisher & Build Gatekeeper

### Global Creative Collaborators
- **[Graphy](file:///C:/Users/hassa/.gemini/config/skills/graphy/SKILL.md)** — Swiss Modernist layout, active negative space, 60-30-10 color theory, and 3-level typography.
- **[Aurelia](file:///C:/Users/hassa/.gemini/config/skills/art-director/SKILL.md)** — Art direction and conceptual illustration prompt engineering.
- **[Zephyr](file:///C:/Users/hassa/.gemini/config/skills/graphic-designer/SKILL.md)** — Spatial composition grids and figure layout structure.
- **[Guten](file:///C:/Users/hassa/.gemini/config/skills/typographist/SKILL.md)** — Typographic voice, scale, measure, and hierarchy.
