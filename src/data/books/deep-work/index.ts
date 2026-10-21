import { BookMasteryPackage } from '../../../types/book';
import { dwCh01Mastery, dwCh02Mastery } from './ch01-ch02';
import { dwCh03Mastery, dwCh04Mastery } from './ch03-ch04';

export const deepWorkBook: BookMasteryPackage = {
  bookSlug: 'deep-work',
  title: 'Deep Work: Rules for Focused Success in a Distracted World',
  subtitle: 'Mastering High-Cognition Concentration, Attention Residue Elimination, and Deliberate Output in a Networked Economy',
  author: 'Cal Newport',
  publicationYear: 2016,
  publisher: 'Grand Central Publishing',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 58491,
  totalFiguresExtracted: 26,
  corePromise:
    'A rigorous economic, neurobiological, and operational system for transforming distracted knowledge work into uninterrupted, high-intensity cognitive production—combining oligodendrocyte myelination, attention-residue elimination, four scheduling philosophies, 4DX lead-measure scoreboards, Productive Meditation, Craftsman tool selection, and Fixed-Schedule Productivity.',
  architecturalOverview:
    'The book is structured in two parts across four master modules: (1) The Economic & Cognitive Imperative [Ch 1: How the Great Restructuring rewards High-Skilled Workers, Superstars, and Owners; K. Anders Ericsson’s deliberate practice and myelin insulation; Newport’s Law of Productivity W = T × I; Sophie Leroy’s attention residue; and why the Metric Black Hole and Principle of Least Resistance make depth rare]; (2) Meaning & Rule #1—Work Deeply [Ch 2: Winifred Gallagher’s attentional worldview, Mihaly Csikszentmihalyi’s ESM flow studies, Dreyfus & Kelly’s sacred craftsmanship, David Dewane’s Eudaimonia Machine, the 4 Depth Scheduling Philosophies, Grand Gestures, 4DX execution, and evening Attention Restoration]; (3) Rules #2 & #3—Embrace Boredom & Quit Social Media [Ch 3: Rewiring Clifford Nass’s distracted brain via scheduled offline blocks, Roosevelt Dashes, Productive Meditation, the Craftsman vs. Any-Benefit tool audit, Pareto’s 80/20 Law, the 30-Day Packing Party, and Arnold Bennett’s deliberate leisure]; and (4) Rule #4—Drain the Shallows [Ch 4: Dynamic 30-minute time-block ledgers, the College-Graduate training depth metric, 30%–50% shallow work budgets, Radhika Nagpal’s Fixed-Schedule Productivity, the Zeigarnik Shutdown Ritual, and Process-Centric email firewalls].',
  chapters: [
    dwCh01Mastery,
    dwCh02Mastery,
    dwCh03Mastery,
    dwCh04Mastery,
  ],
};
