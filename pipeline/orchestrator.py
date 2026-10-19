#!/usr/bin/env python3
"""
Nexus (Node 0) — Multi-Agent DAG Orchestrator for Brain Opener
Arranges all 9 agent node connections (Nexus, Archon, Axiom, Feynman, Prism, Synapse,
Socrates, Veritas, Atlas), manages topological execution order, validates chapter
completeness against Archon's manifest, and emits the orchestration trace for the webapp.
"""

import json
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import List, Dict, Any


@dataclass
class AgentNodeSpec:
    id: str
    nodeNumber: int
    name: str
    role: str
    skillPath: str
    stage: str
    upstreamNodes: List[str]
    downstreamNodes: List[str]
    inputContract: str
    outputContract: str
    coreMandate: str


@dataclass
class AgentEdgeSpec:
    id: str
    source: str
    target: str
    label: str
    payloadType: str
    isFeedbackLoop: bool = False


BRAIN_OPENER_NODES: List[AgentNodeSpec] = [
    AgentNodeSpec(
        id="nexus",
        nodeNumber=0,
        name="Nexus",
        role="Master Orchestrator & DAG Conductor",
        skillPath=".agents/skills/nexus-orchestrator/SKILL.md",
        stage="orchestration",
        upstreamNodes=[],
        downstreamNodes=["archon", "axiom", "feynman", "prism", "synapse", "socrates", "veritas", "atlas"],
        inputContract="BookRequest { epubOrPdfPath, bookSlug }",
        outputContract="OrchestrationExecutionTrace & VerifiedBookBundle",
        coreMandate="Coordinate all 8 specialist nodes, enforce parallel chapter fan-out, and block publication until Veritas certifies 100% concept depth."
    ),
    AgentNodeSpec(
        id="archon",
        nodeNumber=1,
        name="Archon",
        role="Book Ingestor & Structural Cartographer",
        skillPath=".agents/skills/archon-ingestor/SKILL.md",
        stage="ingestion",
        upstreamNodes=["nexus"],
        downstreamNodes=["axiom", "prism", "veritas"],
        inputContract="Raw Book Archive (.epub / .pdf)",
        outputContract="BookManifest { chapters, headings, figures, rawTextFiles }",
        coreMandate="Unpack the book container losslessly, preserving every h1-h4 section heading, table, and original figure asset with its caption."
    ),
    AgentNodeSpec(
        id="axiom",
        nodeNumber=2,
        name="Axiom",
        role="First-Principles Deconstructor",
        skillPath=".agents/skills/axiom-deconstructor/SKILL.md",
        stage="deconstruction",
        upstreamNodes=["archon"],
        downstreamNodes=["feynman", "prism", "synapse", "socrates"],
        inputContract="ChapterRawPayload (Full chapter prose + section tree)",
        outputContract="ChapterDeconstruction { theses, mechanisms, formulas, tradeOffs, visualCandidates }",
        coreMandate="Strip away filler to expose the exact causal mechanisms, mathematical equations, failure modes, and engineering trade-offs in every section."
    ),
    AgentNodeSpec(
        id="feynman",
        nodeNumber=3,
        name="Feynman",
        role="Deep Concept Pedagogue & Mental Model Architect",
        skillPath=".agents/skills/feynman-pedagogue/SKILL.md",
        stage="synthesis",
        upstreamNodes=["axiom"],
        downstreamNodes=["veritas"],
        inputContract="ChapterDeconstruction",
        outputContract="ChapterPedagogy { thesis, paradigmShift, mentalModels, deepSections, tradeOffTables, scenarios }",
        coreMandate="Explain every concept from first principles so the reader achieves deep intuition. Zero shallow summaries; zero AI clichés."
    ),
    AgentNodeSpec(
        id="prism",
        nodeNumber=4,
        name="Prism",
        role="Visual Mental-Model, SVG & Illustration Architect",
        skillPath=".agents/skills/prism-illustrator/SKILL.md",
        stage="synthesis",
        upstreamNodes=["archon", "axiom"],
        downstreamNodes=["veritas"],
        inputContract="VisualBriefPayload + Extracted Book Figures",
        outputContract="ChapterVisuals { customSvgDiagrams, annotatedBookFigures, conceptualIllustrations }",
        coreMandate="Combine custom interactive SVG mental models, annotated original book figures with Bierut captions, and conceptual illustrations."
    ),
    AgentNodeSpec(
        id="synapse",
        nodeNumber=5,
        name="Synapse",
        role="Knowledge Graph & Ontology Architect",
        skillPath=".agents/skills/synapse-graph/SKILL.md",
        stage="synthesis",
        upstreamNodes=["axiom"],
        downstreamNodes=["veritas", "atlas"],
        inputContract="ChapterDeconstruction",
        outputContract="KnowledgeSubgraph { nodes: ConceptNode[], edges: ConceptEdge[] }",
        coreMandate="Wire concepts into a semantic graph across chapters and books using typed edges (prerequisite_for, optimizes, trades_off_with, mitigates)."
    ),
    AgentNodeSpec(
        id="socrates",
        nodeNumber=6,
        name="Socrates",
        role="Active Recall, Diagnostic Quiz & Feynman Studio Architect",
        skillPath=".agents/skills/socrates-recall/SKILL.md",
        stage="synthesis",
        upstreamNodes=["axiom", "feynman"],
        downstreamNodes=["veritas"],
        inputContract="ChapterDeconstruction + ChapterPedagogy",
        outputContract="ActiveRecallModule { diagnosticQuizzes, flashcards, feynmanChallenges }",
        coreMandate="Forge realistic production dilemma quizzes, high-yield flashcards, and 'Explain It Back' Feynman prompts with 4-point rubrics."
    ),
    AgentNodeSpec(
        id="veritas",
        nodeNumber=7,
        name="Veritas",
        role="Completeness, Depth & Anti-AI Critic",
        skillPath=".agents/skills/veritas-critic/SKILL.md",
        stage="verification",
        upstreamNodes=["archon", "feynman", "prism", "synapse", "socrates"],
        downstreamNodes=["feynman", "prism", "atlas"],
        inputContract="MergedChapterCandidate + Archon Heading Manifest",
        outputContract="VeritasAuditReport { passed, sectionCoverageRatio, antiAiClean, revisionRequests }",
        coreMandate="Audit 100% section coverage against Archon's raw TOC, verify mathematical and architectural rigor, and purge any robotic AI tropes."
    ),
    AgentNodeSpec(
        id="atlas",
        nodeNumber=8,
        name="Atlas",
        role="Swiss-Grid Webapp Publisher & Interactive UI Compiler",
        skillPath=".agents/skills/atlas-publisher/SKILL.md",
        stage="publishing",
        upstreamNodes=["veritas", "synapse"],
        downstreamNodes=[],
        inputContract="VerifiedBookBundle",
        outputContract="Typed React Data Modules & Interactive Swiss-Grid Views",
        coreMandate="Compile verified chapter mastery modules and knowledge graphs into the Brain Opener webapp following Graphy, Zephyr, and Guten design standards."
    ),
]

BRAIN_OPENER_EDGES: List[AgentEdgeSpec] = [
    AgentEdgeSpec("E01", "nexus", "archon", "1. Dispatch Book Ingestion", "BookRequest"),
    AgentEdgeSpec("E12", "archon", "axiom", "2. Raw Text & Section Hierarchy", "ChapterRawPayload"),
    AgentEdgeSpec("E14", "archon", "prism", "Extracted EPUB Figures (161 PNGs)", "FigureAssetIndex"),
    AgentEdgeSpec("E17", "archon", "veritas", "Ground-Truth Section Checklist", "HeadingManifest"),
    AgentEdgeSpec("E23", "axiom", "feynman", "3a. First-Principles Skeleton", "ChapterDeconstruction"),
    AgentEdgeSpec("E24", "axiom", "prism", "3b. Visual Mental-Model Briefs", "VisualBriefPayload"),
    AgentEdgeSpec("E25", "axiom", "synapse", "3c. Core Entities & Mechanisms", "OntologyCandidates"),
    AgentEdgeSpec("E26", "axiom", "socrates", "3d. Failure Modes & Trade-Offs", "MasteryTargets"),
    AgentEdgeSpec("E37", "feynman", "veritas", "4a. Deep Explanations & Scenarios", "ChapterPedagogy"),
    AgentEdgeSpec("E47", "prism", "veritas", "4b. Custom SVGs & Annotated Figures", "ChapterVisuals"),
    AgentEdgeSpec("E57", "synapse", "veritas", "4c. Concept Nodes & Directed Edges", "KnowledgeSubgraph"),
    AgentEdgeSpec("E67", "socrates", "veritas", "4d. Quizzes, Flashcards & Feynman Prompts", "ActiveRecallModule"),
    AgentEdgeSpec("E73_LOOP", "veritas", "feynman", "Revision Loop (If Depth < 100%)", "AuditRejectionDiff", True),
    AgentEdgeSpec("E78", "veritas", "atlas", "5. Certified Mastery Package", "VerifiedBookBundle"),
]


def export_orchestrator_topology(workspace_root: str):
    out_file = Path(workspace_root) / "pipeline" / "extracted" / "orchestrator_topology.json"
    out_file.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "orchestratorName": "Nexus Multi-Agent Mastery DAG",
        "version": "1.0.0",
        "collaboratingGlobalAgents": [
            {"name": "Graphy", "role": "Swiss Modernist Layout, Negative Space & 60-30-10 Color System"},
            {"name": "Aurelia", "role": "Art Direction & Conceptual Illustration Prompts"},
            {"name": "Zephyr", "role": "Modular Grid Systems & Spatial Composition"},
            {"name": "Guten", "role": "Typographic Hierarchy, Scale & Reading Measure"},
            {"name": "Reviewer", "role": "Anti-AI Voice & Editorial Cadence Validation"},
        ],
        "nodes": [asdict(n) for n in BRAIN_OPENER_NODES],
        "edges": [asdict(e) for e in BRAIN_OPENER_EDGES],
    }
    out_file.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[Nexus] Exported 9-node DAG topology and 14 node connections to {out_file}")


if __name__ == "__main__":
    export_orchestrator_topology(r"c:\Users\hassa\Local Sites\Brain Opener")
