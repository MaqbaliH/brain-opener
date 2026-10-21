import type { BookMasteryPackage } from '../../../types/book';
import { cthCh01Mastery, cthCh02Mastery } from './ch01-ch02';
import { cthCh03Mastery, cthCh04Mastery } from './ch03-ch04';

export const criticalThinkingHaberBook: BookMasteryPackage = {
  bookSlug: 'critical-thinking-haber',
  title: 'Critical Thinking',
  subtitle:
    'MIT Press Essential Knowledge: Genealogy of Logic, Structured Argumentation, Cognitive Biases, and Epistemic Assessment',
  author: 'Jonathan Haber',
  publicationYear: 2020,
  publisher: 'The MIT Press',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 33617,
  totalFiguresExtracted: 6,
  corePromise:
    'Master the 2,500-year operating system of critical inquiry—uniting Aristotelian deduction, Enlightenment empiricism, Pragmatist reflective thinking, charitable argument mapping, cognitive debiasing, and deliberate pedagogical practice.',
  architecturalOverview:
    'Organized across four progressive stages: (1) The historical genealogy from the Greek Trivium and Scientific Revolution to Peirce, Dewey, Glaser, Bloom, and Kahneman; (2) The six interlocking components of structured logic, charitable translation, argumentation, domain knowledge, creativity, and intellectual virtues; (3) Consensus definitions (Delphi Report), Ennis\'s four curricular modes (117-study meta-analysis), deliberate practice, and psychometric assessment auditing; and (4) Systemic scaling across high-stakes engineering, K-20 education, and civic culture.',
  chapters: [cthCh01Mastery, cthCh02Mastery, cthCh03Mastery, cthCh04Mastery]
};
