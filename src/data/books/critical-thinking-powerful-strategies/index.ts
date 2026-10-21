import type { BookMasteryPackage } from '../../../types/book';
import { ctpsCh01Mastery, ctpsCh02Mastery } from './ch01-ch02';
import { ctpsCh03Mastery, ctpsCh04Mastery } from './ch03-ch04';

export const criticalThinkingPowerfulStrategiesBook: BookMasteryPackage = {
  bookSlug: 'critical-thinking-powerful-strategies',
  title: 'Critical Thinking: Powerful Strategies to Improve Decisions',
  subtitle:
    'Independent Epistemic Filtering, Questioning Assumption Chains, Media Persuasion Defense, and Practical Decision Protocols',
  author: 'Harvey Segler',
  publicationYear: 2016,
  publisher: 'Independent Cognitive Press',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 8589,
  totalFiguresExtracted: 0,
  corePromise:
    'Replace passive information skimming, search-engine lookup dependency, and herd conformity with a practical field manual for motive auditing, Socratic questioning, consumer persuasion defense, and autonomous life design.',
  architecturalOverview:
    'Structured across four operational pillars: (1) The two-stage cognitive engine (deep absorption + practical use) and the 3-Step Epistemic Filter (Motive, Source, and Yes-Set Truism Firewall); (2) Defeating the "fix-it-and-forget-it" lookup reflex via causal "geometry proof" mastery and sovereign decision accountability; (3) Socratic recursive questioning, the 6-Question Active Reading Pause, and the 10-Point Pre-Purchase Consumer Diagnostic; and (4) Escaping the "cattle herd" conformity cliff through the 10-Domain Life Self-Audit, four daily habits, and the Curiosity-Openness dual engine.',
  chapters: [ctpsCh01Mastery, ctpsCh02Mastery, ctpsCh03Mastery, ctpsCh04Mastery]
};
