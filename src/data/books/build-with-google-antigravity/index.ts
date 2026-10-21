import { BookMasteryPackage } from '../../../types/book';
import { bwgaCh01Mastery, bwgaCh02Mastery } from './ch01-ch02';
import { bwgaCh03Mastery, bwgaCh04Mastery } from './ch03-ch04';
import { bwgaCh05Mastery, bwgaCh06Mastery } from './ch05-ch06';
import { bwgaCh07Mastery, bwgaCh08Mastery } from './ch07-ch08';
import { bwgaCh09Mastery, bwgaCh10Mastery, bwgaCh11Mastery } from './ch09-ch11';

export const buildWithGoogleAntigravityBook: BookMasteryPackage = {
  bookSlug: 'build-with-google-antigravity',
  title: 'Build with Google Antigravity',
  subtitle: 'Beginner Steps to Ship Your First App In a Week',
  author: 'Elnaz Sarraf',
  publicationYear: 2025,
  publisher: 'Independently Published',
  coverAsset: 'cover.png',
  totalChapters: 11,
  totalSourceWords: 24736,
  totalFiguresExtracted: 0,
  corePromise:
    'A practical builder handbook for shipping full-stack web applications with Google Antigravity—moving from inline AI autocomplete to multi-agent IDE orchestration across Editor View, Agent Manager, headless browser verification, Artifacts, Supabase/Firebase backends, GitHub version control, and Vercel/Netlify cloud deployments.',
  architecturalOverview:
    'The book is organized across four operational phases: (1) Paradigm & Workspace Setup [Ch 1–3: Evolution from GitHub/Cursor inline autocomplete to Google Antigravity agentic orchestration powered by Gemini 3 Pro, Claude Sonnet 4.5, and GPT-OSS; installation, terminal/review policies, and mastering Editor View, Agent Manager, integrated Browser, and verifiable Artifacts]; (2) Full-Stack Application & Backend Engineering [Ch 4–7: Iterative project scoping, multi-component React/Next.js frontend architecture, relational PostgreSQL + Row-Level Security via Supabase, and NoSQL Firestore + real-time listeners via Firebase]; (3) Version Control & Production Deployment [Ch 8–9: Git/GitHub branching, PR workflows, environment secret safety, and automated CI/CD deployment to Vercel, Netlify, Firebase Hosting, and Google Cloud Run]; and (4) Entrepreneurial Product & Growth Execution [Ch 10–11: High-leverage SaaS/directory/micro-tool blueprinting and technical SEO, launch loops, and analytics].',
  chapters: [
    bwgaCh01Mastery,
    bwgaCh02Mastery,
    bwgaCh03Mastery,
    bwgaCh04Mastery,
    bwgaCh05Mastery,
    bwgaCh06Mastery,
    bwgaCh07Mastery,
    bwgaCh08Mastery,
    bwgaCh09Mastery,
    bwgaCh10Mastery,
    bwgaCh11Mastery,
  ],
};
