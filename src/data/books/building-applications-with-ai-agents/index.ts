import { BookMasteryPackage } from '../../../types/book';
import { baaaCh01Mastery, baaaCh02Mastery } from './ch01-ch02';
import { baaaCh03Mastery, baaaCh04Mastery } from './ch03-ch04';
import { baaaCh05Mastery, baaaCh06Mastery } from './ch05-ch06';
import { baaaCh07Mastery, baaaCh08Mastery } from './ch07-ch08';

export const buildingApplicationsWithAiAgentsBook: BookMasteryPackage = {
  bookSlug: 'building-applications-with-ai-agents',
  title: 'Building Applications with AI Agents',
  subtitle: 'Designing and Implementing Multi-Agent Systems',
  author: 'Michael Albada',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 8,
  totalSourceWords: 42936,
  totalFiguresExtracted: 6,
  corePromise:
    'A practical systems-engineering guide to designing, orchestrating, and scaling foundation-model agents—covering task scoping, synchronous vs. asynchronous UX modalities, hierarchical skill registries, execution topologies (chains, trees, DAGs), hybrid memory architectures (rolling windows, BM25, vector RAG, dynamic knowledge graphs, and working-memory whiteboards), non-parametric vs. parametric learning (Reflexion, Voyager experiential libraries, LoRA/QLoRA), and multi-agent coordination patterns.',
  architecturalOverview:
    'The book is organized into eight progressive engineering chapters: (1–2) Foundations & System Design [From synchronous single-turn predictors to asynchronous autonomous agents, task scoping between overly narrow and overly broad bounds, and the 4 Core Components (Model Selection, Skills, Memory, Planning) balanced against speed-accuracy-cost trade-offs]; (3–4) Agentic UX & Skill Engineering [Text, graphical, voice, and video interaction modalities, calibrated confidence disclosure, automation-bias prevention, API/plug-in skill hierarchies, and automated skill synthesis via code generation, imitation learning, and RL]; (5–6) Orchestration, Knowledge & Memory [Generative, semantic, and ML-routed skill selection across chains, trees, and graphs; context window management, keyword + vector hybrid memory, GraphRAG, and working-memory note-taking]; and (7–8) Agentic Learning & Multi-Agent Coordination [Non-parametric kNN exemplar retrieval, Reflexion verbal reinforcement, experiential skill libraries, parametric SFT/LoRA function-calling tuning, and Democratic, Manager, Hierarchical, Actor-Critic, and ADAS multi-agent coordination].',
  chapters: [
    baaaCh01Mastery,
    baaaCh02Mastery,
    baaaCh03Mastery,
    baaaCh04Mastery,
    baaaCh05Mastery,
    baaaCh06Mastery,
    baaaCh07Mastery,
    baaaCh08Mastery,
  ],
};
