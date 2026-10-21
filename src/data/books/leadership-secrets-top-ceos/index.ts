import { BookMasteryPackage } from '../../../types/book';
import { lstcCh01Mastery, lstcCh02Mastery } from './ch01-ch02';
import { lstcCh03Mastery, lstcCh04Mastery, lstcCh05Mastery } from './ch03-ch05';

export const leadershipSecretsTopCeosBook: BookMasteryPackage = {
  bookSlug: 'leadership-secrets-top-ceos',
  title: "Leadership Secrets of the World's Most Successful CEOs",
  subtitle:
    '100 Top Executives on Corporate Culture, High-Stakes Decision Making, Crisis Turnarounds, and Scaling Organizational Excellence',
  author: 'Eric Yaverbaum',
  publicationYear: 2004,
  publisher: 'Dearborn Trade Publishing',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 66801,
  totalFiguresExtracted: 5,
  corePromise:
    'Master the operational playbooks of 100 chief executives—from AFLAC’s people-first equity flywheel and Legal Sea Foods’ manager-free President’s Advisory Council to New York Life’s sovereign strategy and Tootsie Roll’s Prime Gross Margin (PGM) fortress.',
  architecturalOverview:
    'Synthesizing firsthand operational playbooks from 100 chief executives across industrial engineering, insurance, retail, semiconductors, consumer products, and financial services, Eric Yaverbaum distills what separates enduring institution builders from bureaucratic managers. Across five thematic parts—anchored by Gene Abbott (Abbott & Associates), Dan Amos (AFLAC), Daniel Biederman (Bryant Park), Cal Turner Jr. (Dollar General), David Brandon (Domino’s Pizza), Michael Fleisher (Gartner), Pernille Spiers-Lopez (IKEA North America), William Monahan (Imation), Roger Berkowitz (Legal Sea Foods), Sy Sternberg (New York Life), Robert Baird Jr. (Norelco), Paul LaBrie (Pilotage), Melvin Gordon (Tootsie Roll Industries), and Bart Shuldman (TransAct)—this synthesis extracts repeatable mechanisms for frontline truth extraction, universal employee ownership, sovereign strategic conviction, Prime Gross Margin (PGM) discipline, and mid-year tactical audibles.',
  chapters: [
    lstcCh01Mastery,
    lstcCh02Mastery,
    lstcCh03Mastery,
    lstcCh04Mastery,
    lstcCh05Mastery
  ]
};
