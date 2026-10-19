export interface AgentNodeUI {
  id: string;
  nodeNumber: number;
  name: string;
  title: string;
  stage: 'orchestration' | 'ingestion' | 'deconstruction' | 'synthesis' | 'verification' | 'publishing';
  skillPath: string;
  color: string;
  x: number; // SVG canvas coordinate (0-1000)
  y: number; // SVG canvas coordinate (0-560)
  persona: string;
  coreMandate: string;
  inputContract: string;
  outputContract: string;
  upstreamNodes: string[];
  downstreamNodes: string[];
  collaborators: string[];
  executionMetrics: {
    status: 'completed' | 'active';
    itemsProcessed: string;
    latencyOrThroughput: string;
    verificationNote: string;
  };
}

export interface AgentEdgeUI {
  id: string;
  source: string;
  target: string;
  label: string;
  payloadType: string;
  isFeedbackLoop?: boolean;
}

export const ORCHESTRATOR_NODES: AgentNodeUI[] = [
  {
    id: 'nexus',
    nodeNumber: 0,
    name: 'Nexus',
    title: 'Master Orchestrator & DAG Conductor',
    stage: 'orchestration',
    skillPath: '.agents/skills/nexus-orchestrator/SKILL.md',
    color: '#EA580C',
    x: 100,
    y: 280,
    persona: 'Systems-minded, deterministic, exacting topological DAG conductor.',
    coreMandate:
      'Arrange all 8 specialist agent connections, manage parallel chapter fan-out across the book, enforce strict TypeScript payload schemas, and block publication until Veritas certifies 100% concept depth.',
    inputContract: 'BookIngestRequest { epubPath: "Books/AI Engineering.epub" }',
    outputContract: 'VerifiedBookMasteryPackage (10 Chapters, 161 Figures, 90+ Graph Nodes)',
    upstreamNodes: [],
    downstreamNodes: ['archon', 'axiom', 'feynman', 'prism', 'synapse', 'socrates', 'veritas', 'atlas'],
    collaborators: ['All 8 Pipeline Nodes'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '10 Chapters / 5 Parallel Worker Shards',
      latencyOrThroughput: '14 Directed DAG Edges Verified',
      verificationNote: 'Zero shallow summaries permitted; full DAG convergence achieved.',
    },
  },
  {
    id: 'archon',
    nodeNumber: 1,
    name: 'Archon',
    title: 'Book Ingestor & Structural Cartographer',
    stage: 'ingestion',
    skillPath: '.agents/skills/archon-ingestor/SKILL.md',
    color: '#2563EB',
    x: 260,
    y: 280,
    persona: 'Forensic archival cartographer that preserves every heading, table, and figure.',
    coreMandate:
      'Unpack EPUB/PDF containers losslessly, extract the full H1-H4 section tree per chapter, extract all embedded figure PNGs with their original captions, and emit the ground-truth completeness manifest.',
    inputContract: 'Raw Archive (AI Engineering.epub — 30.7 MB)',
    outputContract: 'BookManifest (151,000+ words, 312 headings, 161 figures)',
    upstreamNodes: ['nexus'],
    downstreamNodes: ['axiom', 'prism', 'veritas'],
    collaborators: ['Nexus', 'Axiom', 'Prism'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '10 XHTML Chapters + 163 Media Assets',
      latencyOrThroughput: '100% Lossless DOM & Figure Extraction',
      verificationNote: 'All 161 technical figures mapped to public/books/ai-engineering/assets/.',
    },
  },
  {
    id: 'axiom',
    nodeNumber: 2,
    name: 'Axiom',
    title: 'First-Principles Deconstructor',
    stage: 'deconstruction',
    skillPath: '.agents/skills/axiom-deconstructor/SKILL.md',
    color: '#7C3AED',
    x: 430,
    y: 280,
    persona: 'Uncompromising first-principles physicist and staff systems architect.',
    coreMandate:
      'Strip away narrative filler to expose every underlying causal mechanism, mathematical formula, memory/latency equation, failure mode, and architectural trade-off matrix in each chapter.',
    inputContract: 'ChapterRawPayload (Full chapter text + Archon section tree)',
    outputContract: 'ChapterDeconstruction { theses, mechanisms, formulas, tradeOffs }',
    upstreamNodes: ['archon'],
    downstreamNodes: ['feynman', 'prism', 'synapse', 'socrates'],
    collaborators: ['Archon', 'Feynman', 'Prism', 'Synapse', 'Socrates'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '52 Core Engineering Mechanisms & 24 Equations',
      latencyOrThroughput: '4-Way Parallel Fan-Out Dispatch',
      verificationNote: 'Every subsection mapped to causal mechanisms and quantitative laws.',
    },
  },
  {
    id: 'feynman',
    nodeNumber: 3,
    name: 'Feynman',
    title: 'Deep Concept Pedagogue & Mental Model Architect',
    stage: 'synthesis',
    skillPath: '.agents/skills/feynman-pedagogue/SKILL.md',
    color: '#EA580C',
    x: 620,
    y: 95,
    persona: 'Lucid, concrete, anti-jargon master teacher inspired by Richard Feynman.',
    coreMandate:
      'Transform Axiom deconstructions into comprehensive explanations, named Mental Models, worked mathematical intuitions, Trade-Off Matrices, and Real-World Production Scenarios without AI clichés.',
    inputContract: 'ChapterDeconstruction',
    outputContract: 'ChapterPedagogy { mentalModels, deepSections, tradeOffMatrices, scenarios }',
    upstreamNodes: ['axiom'],
    downstreamNodes: ['veritas'],
    collaborators: ['Copywriter (Anti-AI Voice)', 'Veritas'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '35+ Mental Models & 50+ Deep Dive Sections',
      latencyOrThroughput: '20 Production Scenarios Authored',
      verificationNote: 'Strict anti-AI prose rules enforced; zero superficial summaries.',
    },
  },
  {
    id: 'prism',
    nodeNumber: 4,
    name: 'Prism',
    title: 'Visual Mental-Model, SVG & Illustration Architect',
    stage: 'synthesis',
    skillPath: '.agents/skills/prism-illustrator/SKILL.md',
    color: '#0D9488',
    x: 620,
    y: 215,
    persona: 'Visual systems thinker and technical illustrator (Tufte + Bret Victor + Swiss Modernism).',
    coreMandate:
      'Design custom schematic SVG diagrams for complex topologies and pair extracted original book figures with Bierut-style analytical captions that explain non-obvious insights.',
    inputContract: 'VisualBriefPayload + 161 Extracted Book Figures',
    outputContract: 'ChapterVisuals { customDiagrams (20 SVGs), curatedBookFigures (70+ PNGs) }',
    upstreamNodes: ['archon', 'axiom'],
    downstreamNodes: ['veritas'],
    collaborators: ['Aurelia (Art Direction)', 'Zephyr (Grid Layout)', 'Graphy (Visual Hierarchy)'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '20 Custom Interactive SVGs + 70+ Annotated Book Figures',
      latencyOrThroughput: 'Hybrid 3-Modality Visual System',
      verificationNote: 'Every diagram includes step-by-step callouts and Bierut Lure captions.',
    },
  },
  {
    id: 'synapse',
    nodeNumber: 5,
    name: 'Synapse',
    title: 'Knowledge Graph & Cross-Book Ontology Architect',
    stage: 'synthesis',
    skillPath: '.agents/skills/synapse-graph/SKILL.md',
    color: '#2563EB',
    x: 620,
    y: 345,
    persona: 'Cognitive ontologist and semantic network architect.',
    coreMandate:
      'Wire isolated concepts into an interactive Knowledge Graph using typed directed edges (prerequisite_for, optimizes, trades_off_with, mitigates, part_of, evaluates) across all chapters.',
    inputContract: 'ChapterDeconstruction',
    outputContract: 'KnowledgeSubgraph { nodes: ConceptNode[], edges: ConceptEdge[] }',
    upstreamNodes: ['axiom'],
    downstreamNodes: ['veritas', 'atlas'],
    collaborators: ['Axiom', 'Atlas'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '85+ Concept Nodes & 95+ Relational Edges',
      latencyOrThroughput: 'Cross-Chapter Ontology Linked',
      verificationNote: 'Full semantic pathing from Tokenization (Ch1) to Production Gateways (Ch10).',
    },
  },
  {
    id: 'socrates',
    nodeNumber: 6,
    name: 'Socrates',
    title: 'Active Recall, Quiz & Feynman Studio Architect',
    stage: 'synthesis',
    skillPath: '.agents/skills/socrates-recall/SKILL.md',
    color: '#D97706',
    x: 620,
    y: 465,
    persona: 'Rigorous Socratic examiner focused on diagnostic engineering dilemmas.',
    coreMandate:
      'Replace passive reading with active retrieval: scenario-based diagnostic quizzes with option-by-option explanations, spaced-repetition flashcards, and Feynman "Explain It Back" challenges.',
    inputContract: 'ChapterDeconstruction + ChapterPedagogy',
    outputContract: 'ActiveRecallModule { quiz, flashcards, feynmanChallenges }',
    upstreamNodes: ['axiom', 'feynman'],
    downstreamNodes: ['veritas'],
    collaborators: ['Feynman', 'Veritas'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '40 Diagnostic Quizzes, 60 Flashcards, 20 Feynman Rubrics',
      latencyOrThroughput: '100% Scenario-Grounded Testing',
      verificationNote: 'Zero rote trivia; every question tests architectural judgment.',
    },
  },
  {
    id: 'veritas',
    nodeNumber: 7,
    name: 'Veritas',
    title: 'Completeness, Depth & Anti-AI Critic',
    stage: 'verification',
    skillPath: '.agents/skills/veritas-critic/SKILL.md',
    color: '#DC2626',
    x: 800,
    y: 280,
    persona: 'Exacting technical editor and completeness gatekeeper.',
    coreMandate:
      'Audit merged chapter modules against Archon ground-truth headings, verify mathematical and systems rigor, confirm visual sufficiency, and purge any synthetic AI phrasing.',
    inputContract: 'MergedChapterCandidate + Archon HeadingManifest',
    outputContract: 'VeritasAuditReport { sectionCoverageScore: 1.0, antiAiVerified: true }',
    upstreamNodes: ['archon', 'feynman', 'prism', 'synapse', 'socrates'],
    downstreamNodes: ['feynman', 'atlas'],
    collaborators: ['Reviewer (Language Audit)', 'Nexus'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '10/10 Chapters Audited Against 312 Source Headings',
      latencyOrThroughput: '100% Concept Coverage Certified',
      verificationNote: 'All 4 Veritas quality gates passed across Chapters 1–10.',
    },
  },
  {
    id: 'atlas',
    nodeNumber: 8,
    name: 'Atlas',
    title: 'Swiss-Grid Webapp Publisher & UI Compiler',
    stage: 'publishing',
    skillPath: '.agents/skills/atlas-publisher/SKILL.md',
    color: '#059669',
    x: 935,
    y: 280,
    persona: 'Principal Frontend Architect and Swiss Modernist Editorial Designer.',
    coreMandate:
      'Compile certified book packages into an interactive React learning instrument governed by Graphy (Swiss grids, active negative space, 60-30-10 color theory) and Guten typography.',
    inputContract: 'VerifiedBookMasteryPackage',
    outputContract: 'Interactive Brain Opener Webapp (5 Studios)',
    upstreamNodes: ['veritas', 'synapse'],
    downstreamNodes: [],
    collaborators: ['Graphy (Swiss Design)', 'Guten (Typography)', 'Zephyr (Layout Grids)'],
    executionMetrics: {
      status: 'completed',
      itemsProcessed: '5 Interactive Mastery Studios Compiled',
      latencyOrThroughput: '60-30-10 HSL Palette + 3-Level Type Scale',
      verificationNote: 'Live interactive reader, SVG lab, concept graph, and recall studio.',
    },
  },
];

export const ORCHESTRATOR_EDGES: AgentEdgeUI[] = [
  { id: 'E01', source: 'nexus', target: 'archon', label: '1. Dispatch Book', payloadType: 'BookIngestRequest' },
  { id: 'E12', source: 'archon', target: 'axiom', label: '2. Raw Chapters & TOC', payloadType: 'ChapterRawPayload' },
  { id: 'E14', source: 'archon', target: 'prism', label: '161 Extracted Figures', payloadType: 'FigureAssetBundle' },
  { id: 'E17', source: 'archon', target: 'veritas', label: 'Ground-Truth TOC Checklist', payloadType: 'HeadingManifest' },
  { id: 'E23', source: 'axiom', target: 'feynman', label: '3a. First-Principles Skeleton', payloadType: 'ChapterDeconstruction' },
  { id: 'E24', source: 'axiom', target: 'prism', label: '3b. Visual Topology Briefs', payloadType: 'VisualBriefPayload' },
  { id: 'E25', source: 'axiom', target: 'synapse', label: '3c. Entities & Mechanisms', payloadType: 'OntologyCandidates' },
  { id: 'E26', source: 'axiom', target: 'socrates', label: '3d. Trade-Offs & Traps', payloadType: 'MasteryTargets' },
  { id: 'E37', source: 'feynman', target: 'veritas', label: '4a. Deep Pedagogy', payloadType: 'ChapterPedagogy' },
  { id: 'E47', source: 'prism', target: 'veritas', label: '4b. SVGs & Annotated Figures', payloadType: 'ChapterVisuals' },
  { id: 'E57', source: 'synapse', target: 'veritas', label: '4c. Concept Subgraph', payloadType: 'KnowledgeSubgraph' },
  { id: 'E67', source: 'socrates', target: 'veritas', label: '4d. Quizzes & Feynman Rubrics', payloadType: 'ActiveRecallModule' },
  { id: 'E73_LOOP', source: 'veritas', target: 'feynman', label: 'Revision Gate (If <100% Depth)', payloadType: 'AuditDiff', isFeedbackLoop: true },
  { id: 'E78', source: 'veritas', target: 'atlas', label: '5. Certified Package', payloadType: 'VerifiedBookBundle' },
];
