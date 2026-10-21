import { BookMasteryPackage } from '../../../types/book';
import { cemaCh01Mastery, cemaCh02Mastery } from './ch01-ch02';
import { cemaCh03Mastery, cemaCh04Mastery } from './ch03-ch04';
import { cemaCh05Mastery, cemaCh06Mastery } from './ch05-ch06';
import { cemaCh07Mastery, cemaCh08Mastery } from './ch07-ch08';
import { cemaCh09Mastery, cemaCh10Mastery } from './ch09-ch10';

export const contextEngineeringMultiAgentBook: BookMasteryPackage = {
  bookSlug: 'context-engineering-multi-agent',
  title: 'Context Engineering for Multi-Agent Systems',
  subtitle:
    'Move Beyond Prompting to Build a Context Engine, a Transparent Architecture of Context and Reasoning',
  author: 'Denis Rothman',
  publicationYear: 2025,
  publisher: 'Packt Publishing',
  coverAsset: 'cover.png',
  totalChapters: 10,
  totalSourceWords: 81627,
  totalFiguresExtracted: 48,
  corePromise:
    'A first-principles engineering blueprint for replacing fragile linear prompting with a Glass-Box Context Engine—combining Semantic Role Labeling (SRL) stemma blueprints, Model Context Protocol (MCP) message envelopes, dual procedural-plus-factual RAG namespaces, dynamic Planner-Executor-Tracer orchestration, micro-context summarization, adversarial input sanitization, and policy-driven meta-controllers.',
  architecturalOverview:
    'The book progresses through three architectural stages: (1) Semantic Foundations & Dual-RAG Architecture [Ch 1–4: The 5-Level Context Evolution Ladder from raw prompts to Semantic Role Labeling (SRL) stemma graphs, structured Model Context Protocol (MCP) envelopes and validation loops, Dual-RAG namespace separation pairing a procedural Context Library (how to format/think) with a factual Knowledge Base (what is true), and the autonomous Context Engine loop (AgentRegistry, Planner, Executor, ExecutionTracer)]; (2) Production Hardening, Context Reduction & Adversarial Defense [Ch 5–7: Dependency injection, structured trace observability, token-budget enforcement via a dedicated Summarizer agent and micro-context isolation, source-attributed High-Fidelity RAG, and regex/heuristics sanitization airlocks against indirect prompt injection and corpus poisoning]; and (3) Enterprise Policy Governance & Domain Deployment [Ch 8–10: Deliberate reasoning latency vs. conversational speed, two-stage input/output Moderation Gatekeepers, the 5 Principles of Policy-Driven Meta-Controllers across legal compliance and multi-source brand synthesis, and containerizing the Glass-Box Engine behind asynchronous FastAPI/Celery task queues].',
  chapters: [
    cemaCh01Mastery,
    cemaCh02Mastery,
    cemaCh03Mastery,
    cemaCh04Mastery,
    cemaCh05Mastery,
    cemaCh06Mastery,
    cemaCh07Mastery,
    cemaCh08Mastery,
    cemaCh09Mastery,
    cemaCh10Mastery,
  ],
};
