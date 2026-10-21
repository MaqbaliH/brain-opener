import { BookMasteryPackage } from '../../../types/book';
import { baafCh01Mastery, baafCh02Mastery } from './ch01-ch02';
import { baafCh03Mastery, baafCh04Mastery } from './ch03-ch04';
import { baafCh05Mastery, baafCh06Mastery } from './ch05-ch06';
import { baafCh07Mastery, baafCh08Mastery } from './ch07-ch08';
import { baafCh09Mastery, baafCh10Mastery } from './ch09-ch10';
import { baafCh11Mastery, baafCh12Mastery } from './ch11-ch12';

export const buildingAiAgentsForFinanceBook: BookMasteryPackage = {
  bookSlug: 'building-ai-agents-for-finance',
  title: 'Building AI Agents for Finance',
  subtitle: 'Design & Deploy Financial AI Agents with Robust Architectures, Advanced Reasoning, and Python',
  author: 'Hanane Dupouy',
  publicationYear: 2026,
  publisher: 'Packt Publishing',
  coverAsset: 'cover.png',
  totalChapters: 12,
  totalSourceWords: 177876,
  totalFiguresExtracted: 136,
  corePromise:
    'An institutional-grade engineering blueprint for designing, orchestrating, evaluating, and governing multi-agent financial AI systems—spanning fundamental equity analysis, analyst-grade Deep Search, Tree-of-Thoughts/LATS reasoning, adversarial trading committees, insurance underwriting workflows, Agentic RAG over SEC filings, KYC evaluation benchmarks, and production guardrails.',
  architecturalOverview:
    'The work is structured across four institutional engineering pillars: (1) Financial Agent Foundations & Design Patterns [Ch 1–3: Agency vs. workflows in regulated finance, prompt chaining, routing, parallelization, reflection, and orchestration across LangGraph, CrewAI, AutoGen, and OpenAI Agents SDK]; (2) Fundamental Research, Deep Search & Reasoning Paradigms [Ch 4–6: Automated financial statement and ratio analysis, iterative Plan-and-Execute Deep Search pipelines, and advanced reasoning architectures including ReAct, Plan-and-Solve, Tree of Thoughts (ToT), Graph of Thoughts (GoT), and Monte Carlo Tree Search via LATS]; (3) Multi-Agent Trading, Insurance & Agentic Financial RAG [Ch 7–10: Supervisor/hierarchical/swarm topologies, investment committee and bull-vs-bear adversarial debate trading systems, multi-agent insurance claims/underwriting automation, and hybrid-search Agentic RAG over SEC 10-K/10-Q tables]; and (4) KYC Evaluation & Regulated Production Governance [Ch 11–12: Multi-layer agent evaluation (pass@k, pass^k, tool-trajectory grading) on a Know-Your-Customer (KYC) case study, OpenTelemetry tracing, FinOps token cost controls, and defense-in-depth compliance guardrails].',
  chapters: [
    baafCh01Mastery,
    baafCh02Mastery,
    baafCh03Mastery,
    baafCh04Mastery,
    baafCh05Mastery,
    baafCh06Mastery,
    baafCh07Mastery,
    baafCh08Mastery,
    baafCh09Mastery,
    baafCh10Mastery,
    baafCh11Mastery,
    baafCh12Mastery,
  ],
};
