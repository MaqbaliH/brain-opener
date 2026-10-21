import type { BookMasteryPackage } from '../../../types/book';
import { sgtciyCh01Mastery, sgtciyCh02Mastery } from './ch01-ch02';
import { sgtciyCh03Mastery, sgtciyCh04Mastery, sgtciyCh05Mastery } from './ch03-ch05';

export const soGoodTheyCantIgnoreYouBook: BookMasteryPackage = {
  bookSlug: 'so-good-they-cant-ignore-you',
  title: "So Good They Can't Ignore You",
  subtitle: 'Why Skills Trump Passion in the Quest for Work You Love',
  author: 'Cal Newport',
  publicationYear: 2012,
  publisher: 'Grand Central Publishing',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 38610,
  totalFiguresExtracted: 4,
  corePromise:
    'Dismantles the cultural "follow your passion" mandate by proving that compelling careers are not discovered through pre-existing emotional alignment—they are engineered by accumulating rare and valuable skills ("Career Capital") and cashing that leverage in for autonomy, mastery, and cutting-edge missions.',
  architecturalOverview:
    'Across five progressive modules, Cal Newport replaces anxious career-hopping with the Craftsman Mindset: Chapter 1 refutes the Passion Hypothesis using empirical Self-Determination Theory; Chapters 2 and 3 formalize Career Capital supply-and-demand economics and high-strain deliberate practice across Winner-Take-All and Auction markets; Chapter 4 diagnoses the Two Control Traps and the Law of Financial Viability; and Chapter 5 maps how to discover missions in the Adjacent Possible via Little Bets and the Law of Remarkability.',
  chapters: [
    sgtciyCh01Mastery,
    sgtciyCh02Mastery,
    sgtciyCh03Mastery,
    sgtciyCh04Mastery,
    sgtciyCh05Mastery,
  ],
};
