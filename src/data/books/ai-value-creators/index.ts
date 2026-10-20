import { BookMasteryPackage } from '../../../types/book';
import { avcCh01Mastery, avcCh02Mastery } from './ch01-ch02';
import { avcCh03Mastery, avcCh04Mastery } from './ch03-ch04';
import { avcCh05Mastery, avcCh06Mastery } from './ch05-ch06';
import { avcCh07Mastery, avcCh08Mastery, avcCh09Mastery } from './ch07-ch09';

export const aiValueCreatorsBook: BookMasteryPackage = {
  bookSlug: 'ai-value-creators',
  title: 'AI Value Creators',
  subtitle: 'Beyond the Generative AI User Mindset to Enterprise Transformation',
  author: 'Rob Thomas, Paul Zikopoulos & Kate Soule',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 9,
  totalSourceWords: 115844,
  totalFiguresExtracted: 63,
  corePromise:
    'An executive and architectural operating manual for crossing the divide from passive "+AI" consumers (bolting chatbots onto legacy workflows) to structural "AI+" Value Creators—combining the rebooted AI Ladder, small language models (SLMs), Mixture-of-Experts routing, InstructLab taxonomy-driven data alignment, and programmable generative computing runtimes.',
  architecturalOverview:
    'The book unfolds across four strategic and technical movements: (1) The +AI to AI+ Paradigm & Persuasion Equations [Ch 1–3: Generative AI\'s "Netscape Moment", the rebooted AI Ladder, Acumen Curves, Value Users vs. Value Creators, and the three macroeconomic and enterprise AI Persuasion Equations]; (2) Horizontal & Vertical Use Case Architecture [Ch 4: The Use Case Value Creation Curve across Customer Service, IT Automation, Code Modernization, Digital Labor, and Autonomous Agents]; (3) Governance, Risk & Workforce Skilling [Ch 5–6: Defending against hallucinations, knowledge cut-offs, copyright exposure, and "Steal Now, Crack Later" threats alongside the 8 Levers of organizational AI skilling]; and (4) Multi-Model Routing, Enterprise Data Alignment & Generative Computing [Ch 7–9: Small Language Models (SLMs), knowledge distillation, Mixture-of-Experts (MoE), InstructLab synthetic data alignment, constrained generative computing runtimes, and neuromorphic hardware like IBM NorthPole].',
  chapters: [
    avcCh01Mastery,
    avcCh02Mastery,
    avcCh03Mastery,
    avcCh04Mastery,
    avcCh05Mastery,
    avcCh06Mastery,
    avcCh07Mastery,
    avcCh08Mastery,
    avcCh09Mastery,
  ],
};
