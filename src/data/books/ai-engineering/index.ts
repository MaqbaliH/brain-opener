import { BookMasteryPackage } from '../../../types/book';
import { ch01Mastery, ch02Mastery } from './ch01-ch02';
import { ch03Mastery, ch04Mastery } from './ch03-ch04';
import { ch05Mastery, ch06Mastery } from './ch05-ch06';
import { ch07Mastery, ch08Mastery } from './ch07-ch08';
import { ch09Mastery, ch10Mastery } from './ch09-ch10';

export const aiEngineeringBook: BookMasteryPackage = {
  bookSlug: 'ai-engineering',
  title: 'AI Engineering',
  subtitle: 'Building Applications with Foundation Models',
  author: 'Chip Huyen',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 10,
  totalSourceWords: 151000,
  totalFiguresExtracted: 161,
  corePromise:
    'A rigorous, end-to-end systems engineering framework for adapting, evaluating, optimizing, and deploying foundation models in production—shifting from traditional "train-first, evaluate-later" ML engineering to "evaluate-first, adapt-incrementally" AI engineering.',
  architecturalOverview:
    'The book progresses through four interconnected engineering pillars: (1) Foundations & Paradigm Shift [Ch 1–2: The 3-Layer Stack, Transformer mechanics, Scaling Laws, Post-Training SFT/RLHF, and Probabilistic Sampling]; (2) Evaluation Systems [Ch 3–4: Information Theory, Perplexity, AI-as-a-Judge, Build-vs-Buy, Contamination, and Production Eval Pipelines]; (3) The Adaptation Escalation Ladder [Ch 5–8: Prompt Engineering & Defensive Security, Hybrid RAG & Agent Loops, Memory Math & LoRA/QLoRA Finetuning, and Dataset Engineering]; and (4) Production Scale & Flywheels [Ch 9–10: Prefill/Decode Roofline Optimization, KV Cache & Speculative Decoding, Guardrails, Routers, Semantic Caches, and Conversational User Feedback].',
  chapters: [
    ch01Mastery,
    ch02Mastery,
    ch03Mastery,
    ch04Mastery,
    ch05Mastery,
    ch06Mastery,
    ch07Mastery,
    ch08Mastery,
    ch09Mastery,
    ch10Mastery,
  ],
};
