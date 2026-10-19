# Brain Opener: Multi-Agent System & Orchestration Protocol

This workspace uses a **9-Node Directed Acyclic Graph (DAG) Multi-Agent Architecture** designed to transform technical and non-fiction books into exhaustive, first-principles interactive mastery experiences.

## 1. The Anti-Summary Mandate

All agents in this workspace are bound by a strict **Zero-Shallow-Summary Rule**:
- **Never** write surface-level book summaries ("Chapter 3 discusses evaluation metrics and why they matter").
- **Always** explain the underlying **mechanisms, mathematical intuitions, architectural trade-offs, failure modes, and mental models** so the reader achieves genuine mastery without needing to re-read raw paragraphs to understand *how* or *why* something works.
- **Anti-AI Prose Standard**: Adhere strictly to human-centered, direct, tactile writing. Eliminate all synthetic AI tropes (`delve into`, `rich tapestry`, `testament to`, `moreover`, `furthermore`, `game-changer`, `at its core`, `it is not just X, it is Y`).

---

## 2. Orchestrator Node Topology (`Nexus` DAG)

When a new book (`.epub` or `.pdf`) is added to `Books/` or requested by the user, **Nexus** (`nexus-orchestrator`) coordinates the following execution graph:

```
[Raw Book (.epub/.pdf)]
        │
        ▼
┌──────────────────────────────┐
│ Node 0: NEXUS (Orchestrator) │
└──────────────┬───────────────┘
               │ (1) Dispatch Ingestion
               ▼
┌──────────────────────────────┐
│ Node 1: ARCHON (Ingestor)    │ ──► Extracts raw chapters, hierarchy, tables, & figures
└──────────────┬───────────────┘
               │ (2) Per-Chapter Structural Payload
               ▼
┌──────────────────────────────┐
│ Node 2: AXIOM (Deconstructor)│ ──► Extracts theses, mechanisms, formulas, & trade-offs
└──────────────┬───────────────┘
               │ (3) Parallel Specialist Fan-Out
      ┌────────┴───────────────┬────────────────────────┬────────────────────────┐
      ▼                        ▼                        ▼                        ▼
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│ Node 3: FEYNMAN   │  │ Node 4: PRISM     │  │ Node 5: SYNAPSE   │  │ Node 6: SOCRATES  │
│ (Deep Pedagogue)  │  │ (Visual Architect)│  │ (Knowledge Graph) │  │ (Active Recall)   │
└─────────┬─────────┘  └─────────┬─────────┘  └─────────┬─────────┘  └─────────┬─────────┘
          └──────────────────────┴───────────┬──────────┴──────────────────────┘
                                             │ (4) Fan-In Convergence
                                             ▼
                              ┌──────────────────────────────┐
                              │ Node 7: VERITAS (Auditor)    │
                              └──────────────┬───────────────┘
                                             │
                        ┌────────────────────┴────────────────────┐
                        │ [Fail: Missing Depth / AI Clichés]      │ [Pass: 100% Concept Coverage]
                        ▼                                         ▼
              (Loop back to Node 3/4)              ┌──────────────────────────────┐
                                                   │ Node 8: ATLAS (UI Publisher) │
                                                   └──────────────────────────────┘
```

---

## 3. Workspace Agent Skills Directory

1. **Nexus** (`.agents/skills/nexus-orchestrator/SKILL.md`) — Master Orchestrator & DAG Conductor
2. **Archon** (`.agents/skills/archon-ingestor/SKILL.md`) — Book Ingestor & Structural Cartographer
3. **Axiom** (`.agents/skills/axiom-deconstructor/SKILL.md`) — First-Principles Deconstructor
4. **Feynman** (`.agents/skills/feynman-pedagogue/SKILL.md`) — Deep Concept Pedagogue & Mental Model Architect
5. **Prism** (`.agents/skills/prism-illustrator/SKILL.md`) — Visual Mental-Model, SVG & Illustration Architect
6. **Synapse** (`.agents/skills/synapse-graph/SKILL.md`) — Knowledge Graph & Cross-Book Ontology Architect
7. **Socrates** (`.agents/skills/socrates-recall/SKILL.md`) — Active Recall, Diagnostic Quiz & Feynman Studio Architect
8. **Veritas** (`.agents/skills/veritas-critic/SKILL.md`) — Completeness, Technical Accuracy & Anti-AI Critic
9. **Atlas** (`.agents/skills/atlas-publisher/SKILL.md`) — Swiss-Grid Webapp Publisher & Interactive UI Compiler

### Global Creative Collaborators
- **Graphy** (`~/.gemini/config/skills/graphy/SKILL.md`) — Swiss Design, negative space, 60-30-10 color theory, and 3-level typography.
- **Aurelia** (`~/.gemini/config/skills/art-director/SKILL.md`) — Art direction and conceptual illustration prompt engineering.
- **Zephyr** (`~/.gemini/config/skills/graphic-designer/SKILL.md`) — Spatial composition grids and figure layout structure.
- **Guten** (`~/.gemini/config/skills/typographist/SKILL.md`) — Typographic voice, scale, measure, and hierarchy.
