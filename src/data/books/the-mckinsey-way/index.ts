import { BookMasteryPackage } from '../../../types/book';
import { mwCh01Mastery, mwCh02Mastery } from './ch01-ch02';
import { mwCh03Mastery, mwCh04Mastery } from './ch03-ch04';
import { mwCh05Mastery, mwCh06Mastery } from './ch05-ch06';

export const theMckinseyWayBook: BookMasteryPackage = {
  bookSlug: 'the-mckinsey-way',
  title: 'The McKinsey Way',
  subtitle: 'Using the Techniques of the World’s Top Strategic Consultants to Help You and Your Business',
  author: 'Ethan M. Rasiel',
  publicationYear: 1999,
  publisher: 'McGraw-Hill',
  coverAsset: 'cover.png',
  totalChapters: 6,
  totalSourceWords: 41416,
  totalFiguresExtracted: 1,
  corePromise:
    'Any complex business problem can be solved and implemented by uniting three non-negotiable habits: fact-based inquiry that replaces missing gut instinct and bridges the seniority credibility gap; rigid MECE and 80/20 structuring anchored in a Day-1 Initial Hypothesis; and unwavering professional integrity—from empathetic Columbo interviewing and prewired boardroom alignment to the obligation to dissent and the Wall Street Journal ethical test.',
  architecturalOverview:
    'Organized across five parts and six mastery chapters: (1) Part I Foundations (Fact bricks, MECE 2–5 top-line boundaries, and Day-1 Initial Hypotheses); (2) Part I Rules to Live By (Diagnosing the real problem, client political fit, 80/20 key drivers, Weinberg’s Square Law of Computation, the 30-second Elevator Test, and daily chart/singles discipline); (3) Part II Working to Solve Business Problems (Selling without selling, anti-Mushroom team morale, PDNet/Annual Report research, 7 rules of Columbo interviewing, and Fact-Pack white-room brainstorming); (4) Part III Selling Solutions (Prewired boardroom readouts, 24-hour print stops, Gene Zelazny’s one-message-per-chart and Waterfall rules, internal comms, and Morty/Hank/Carlos client co-ownership); (5) Part IV Surviving at McKinsey (Earned mentorship, road survival, assistant lifelines, Fermi case interviews, and the Three Life Rules); and (6) Part V Life After McKinsey (The Baker’s Dozen alumni lessons, professionalism as the obligation to dissent, and Rabbi Hillel’s one-foot synthesis).',
  chapters: [
    mwCh01Mastery,
    mwCh02Mastery,
    mwCh03Mastery,
    mwCh04Mastery,
    mwCh05Mastery,
    mwCh06Mastery,
  ],
};
