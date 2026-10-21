import { BookMasteryPackage } from '../../../types/book';
import { mmCh01Mastery, mmCh02Mastery } from './ch01-ch02';
import { mmCh03Mastery, mmCh04Mastery } from './ch03-ch04';

export const theMckinseyMindBook: BookMasteryPackage = {
  bookSlug: 'the-mckinsey-mind',
  title: 'The McKinsey Mind: Understanding and Implementing the Problem-Solving Tools and Management Techniques of the World’s Top Strategic Consulting Firm',
  subtitle: 'Fact-Based Hypothesis Framing, Analytical Design, Data Gathering, Client Prewiring, and Team Execution',
  author: 'Ethan M. Rasiel & Paul N. Friga',
  publicationYear: 2002,
  publisher: 'McGraw-Hill',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 54930,
  totalFiguresExtracted: 4,
  corePromise:
    'Operationalizes McKinsey’s core consulting triangle—Analyzing, Presenting, and Managing—for leaders in any organization through MECE Issue Trees, Day-One Initial Hypotheses, 7-column work plans, 80/20 data gathering, prewired inductive presentations, and client co-creation.',
  architecturalOverview:
    'Progresses across four structured phases: (1) Framing the Problem & Designing the Analysis (MECE Issue Trees, Day-One Initial Hypotheses, the Quick and Dirty Test, and 7-column analytical work plans); (2) Gathering & Interpreting Data (24-hour Knowledge Management research, 3-phase empathetic interviewing, Pareto 80/20 leverage, and "So What?" sanity checks); (3) Presenting the Solution (inductive executive storyboarding, Gene Zelazny’s one-message-per-chart discipline, and stakeholder prewiring); and (4) Managing the Team, the Client & Yourself (team temperature checks, client co-ownership, implementation roadmaps, and sustainable work-life boundaries).',
  chapters: [
    mmCh01Mastery,
    mmCh02Mastery,
    mmCh03Mastery,
    mmCh04Mastery,
  ],
};
