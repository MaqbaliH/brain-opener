import { BookMasteryPackage } from '../../../types/book';
import { gaiaCh01Mastery, gaiaCh02Mastery } from './ch01-ch02';
import { gaiaCh03Mastery, gaiaCh04Mastery } from './ch03-ch04';
import { gaiaCh05Mastery, gaiaCh06Mastery } from './ch05-ch06';
import { gaiaCh07Mastery, gaiaCh08Mastery } from './ch07-ch08';

export const grokkingAiApplicationsBook: BookMasteryPackage = {
  bookSlug: 'grokking-ai-applications',
  title: 'Grokking AI Applications',
  subtitle: 'An Illustrated Guide for Programmers and Other Curious People',
  author: 'Andrea De Mauro',
  publicationYear: 2026,
  publisher: 'Manning Publications',
  coverAsset: 'cover.png',
  totalChapters: 8,
  totalSourceWords: 71801,
  totalFiguresExtracted: 182,
  corePromise:
    'A visually driven, dual-track (Langflow visual graphs + Python/LangChain code) engineering progression from transformer internals and structured prompting to vector RAG, tool-calling agents, multi-agent copywriting/planning topologies, enterprise SQL/API data integration, and production API deployment.',
  architecturalOverview:
    'The book is organized across four progressive capability tiers: (1) LLM Internals & First GenAI Pipelines [Ch 1–2: Nondeterministic programming, tokenization, embeddings, self-attention, autoregressive sampling, and building stateful conversational flows visually in Langflow and programmatically in Python]; (2) Context Control & Document Grounding [Ch 3–4: Structured prompt engineering, role/constraint templating, few-shot and chain-of-thought patterns, document chunking, vector embeddings, and hybrid Retrieval-Augmented Generation (RAG)]; (3) Autonomous Tool Use & Multi-Agent Topologies [Ch 5–6: Equipping LLMs with external APIs, calculators, and search tools, ReAct execution loops, and orchestrating sequential, hierarchical, and collaborative multi-agent structures]; and (4) Enterprise Data Ecosystems & Production Operations [Ch 7–8: Connecting GenAI to relational SQL databases, structured JSON schemas, and enterprise pipelines, followed by containerization, REST API serving, observability, guardrails, and evaluation].',
  chapters: [
    gaiaCh01Mastery,
    gaiaCh02Mastery,
    gaiaCh03Mastery,
    gaiaCh04Mastery,
    gaiaCh05Mastery,
    gaiaCh06Mastery,
    gaiaCh07Mastery,
    gaiaCh08Mastery,
  ],
};
