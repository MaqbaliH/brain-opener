import { BookMasteryPackage } from '../../../types/book';
import { agrgCh01Mastery, agrgCh02Mastery } from './ch01-ch02';
import { agrgCh03Mastery, agrgCh04Mastery } from './ch03-ch04';
import { agrgCh05Mastery, agrgCh06Mastery } from './ch05-ch06';
import { agrgCh07Mastery, agrgCh08Mastery } from './ch07-ch08';

export const agenticGraphRagBook: BookMasteryPackage = {
  bookSlug: 'agentic-graphrag',
  title: 'Agentic GraphRAG',
  subtitle: 'Integrating Knowledge Graphs, Reasoning, and Agency for Enterprise AI',
  author: 'Anthony Alcaraz & Sam Julien',
  publicationYear: 2026,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 8,
  totalSourceWords: 97808,
  totalFiguresExtracted: 25,
  corePromise:
    'A definitive engineering blueprint for overcoming the multi-hop reasoning and context-drift failures of vector-only RAG by coupling a Vertical Knowledge Graph (domain, lexical, and subject ontologies) with a Horizontal Workflow Graph (constrained agent planning, MCP/COLT tool orchestration, semantic backpropagation, and selective model routing).',
  architecturalOverview:
    'The book is structured across four progressive architectural parts: (1) Foundations & The Dual-Graph Paradigm [Ch 1–2: Why cosine-similarity vector RAG fails on global and multi-hop queries, the Workflow-Agent Spectrum, the Dual-Graph Architecture (Vertical Knowledge Graph + Horizontal Workflow Graph), and the 8 Pillars of Agentic Graph Architecture]; (2) Setup: Knowledge Modeling & Graph Memory [Ch 3–4: LPG vs. RDF/OWL vs. TypeDB hypergraphs, the Three-Graph Architecture (Domain, Lexical, Subject), Homoiconic executable knowledge, Entity Resolution, and bi-temporal Graph Memory systems like Letta, Graphiti, Zep, and RL-trained MEM1]; (3) Action: Graph Reasoning, Planning & Tool Orchestration [Ch 5–6: PathRAG and R3-RAG retrieval, FSM-constrained Structured Generation with Outlines, Dynamic DAG Planning, Event-Driven Orchestration, and solving MCP Prompt Bloat with COLT 3-graph collaborative tool retrieval and Information Flow Control]; and (4) Production: Self-Evolution, Evaluation & Optimization [Ch 7–8: 4-Layer Cognitive Autopsy over Execution Graphs, neighbor-aware Semantic Backpropagation, Graduated Validation Airlocks, Selective Intelligence model routing, subgraph RBAC, and GPU/KV-cache hardware acceleration].',
  chapters: [
    agrgCh01Mastery,
    agrgCh02Mastery,
    agrgCh03Mastery,
    agrgCh04Mastery,
    agrgCh05Mastery,
    agrgCh06Mastery,
    agrgCh07Mastery,
    agrgCh08Mastery,
  ],
};
