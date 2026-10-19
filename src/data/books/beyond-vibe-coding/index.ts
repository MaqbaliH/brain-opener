import { BookMasteryPackage } from '../../../types/book';
import { bvcCh01Mastery, bvcCh02Mastery } from './ch01-ch02';
import { bvcCh03Mastery, bvcCh04Mastery } from './ch03-ch04';
import { bvcCh05Mastery, bvcCh06Mastery, bvcCh07Mastery } from './ch05-ch07';
import { bvcCh08Mastery, bvcCh09Mastery } from './ch08-ch09';
import { bvcCh10Mastery, bvcCh11Mastery } from './ch10-ch11';

export const beyondVibeCodingBook: BookMasteryPackage = {
  bookSlug: 'beyond-vibe-coding',
  title: 'Beyond Vibe Coding',
  subtitle: 'From Coder to AI-Era Developer',
  author: 'Addy Osmani',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 11,
  totalSourceWords: 83594,
  totalFiguresExtracted: 14,
  corePromise:
    'A pragmatic, systems-level engineering manifesto for crossing "The 70% Problem"—teaching developers how to harness conversational AI speed ("Vibe Coding") for rapid exploration while enforcing rigorous architectural specification, security verification, human code ownership, and autonomous multi-agent orchestration for the final 30% of production software.',
  architecturalOverview:
    'The book unfolds across four progressive engineering movements: (1) The Paradigm & Prompting Foundations [Ch 1–2: The Spectrum from Pure Vibe Coding to AI-Assisted Engineering, IDE/Model ecosystems, and Specification-Driven Prompting]; (2) Overcoming The 70% Problem & Human Mastery [Ch 3–5: Diagnosing the "Two Steps Back" doom loop and Demo-Quality Trap, career playbooks for Senior/Mid/Junior engineers, and conquering the "Majority Problem" through code review and ownership]; (3) Full-Stack AI Prototyping, Web Architecture & Security Hardening [Ch 6–9: Rapid prototyping toolchains, full-stack contract alignment, defending against Slopsquatting and AI security vulnerabilities, and Responsible AI ethics/IP checklists]; and (4) Autonomous Agent Fleets & The Future of Software Engineering [Ch 10–11: Asynchronous Background Coding Agents, Plan-Execute-Verify-Report loops, Multi-Model routing, and the transition from syntax writer to Multi-Agent Systems Orchestrator].',
  chapters: [
    bvcCh01Mastery,
    bvcCh02Mastery,
    bvcCh03Mastery,
    bvcCh04Mastery,
    bvcCh05Mastery,
    bvcCh06Mastery,
    bvcCh07Mastery,
    bvcCh08Mastery,
    bvcCh09Mastery,
    bvcCh10Mastery,
    bvcCh11Mastery,
  ],
};
