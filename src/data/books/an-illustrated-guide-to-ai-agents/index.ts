import { BookMasteryPackage } from '../../../types/book';
import { igaaCh01Mastery } from './ch01';
import { igaaCh02Mastery } from './ch02';

export const anIllustratedGuideToAiAgentsBook: BookMasteryPackage = {
  bookSlug: 'an-illustrated-guide-to-ai-agents',
  title: 'An Illustrated Guide to AI Agents',
  subtitle: 'Visual Architectures for Memory, Context Engineering, Tool Learning, and MCP',
  author: 'Maarten Grootendorst & Jay Alammar',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 2,
  totalSourceWords: 16095,
  totalFiguresExtracted: 67,
  corePromise:
    'A visual, first-principles blueprint by Maarten Grootendorst and Jay Alammar explaining how stateless foundation models are augmented into autonomous AI agents through cognitive memory hierarchies, context engineering, tool-calling pipelines, reinforcement tool learning (ToolFormer, ToolRL, Search-R1), and the Model Context Protocol (MCP).',
  architecturalOverview:
    'The guide is structured across two foundational visual pillars: (1) Cognitive Memory & Context Engineering [Ch 1: Mapping human sensory, working, episodic, semantic, and procedural memory to LLM context windows; short-term summarization/truncation strategies; long-term vector RAG, MemoryBank Ebbinghaus forgetting curves, and Zettelkasten-inspired Agentic RAG (A-MEM, Search-o1); and systematic context tracking, selection, compression, and ordering across multi-agent systems]; and (2) Tool Usage, Tool Learning & Interoperability Protocols [Ch 2: The five-stage tool lifecycle (creation, JSON schema definition, retrieval-filtered selection, invocation, and output processing); training LLMs to use tools via in-context orchestration (HuggingGPT), self-supervised API filtering (ToolFormer), and reinforcement learning with outcome/format rewards (ToolRL, Search-R1); and standardizing Host-Client-Server tool and resource discovery via the Model Context Protocol (MCP)].',
  chapters: [igaaCh01Mastery, igaaCh02Mastery],
};
