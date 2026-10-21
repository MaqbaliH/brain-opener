import { BookMasteryPackage } from '../../../types/book';
import { mppCh01Mastery, mppCh02Mastery } from './ch01-ch02';
import { mppCh03Mastery, mppCh04Mastery } from './ch03-ch04';

export const mintoPyramidPrincipleBook: BookMasteryPackage = {
  bookSlug: 'minto-pyramid-principle',
  title: 'The Minto Pyramid Principle: Logic in Writing, Thinking, and Problem Solving',
  subtitle: 'Top-Down Answer-First Communication, SCQA Introductions, Deductive vs. Inductive Grouping, and Diagnostic Logic Trees',
  author: 'Barbara Minto',
  publicationYear: 2009,
  publisher: 'Minto International',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 69893,
  totalFiguresExtracted: 223,
  corePromise:
    'The definitive executive and consulting treatise on structuring thought and communication—showing how to respect human working-memory limits (7 ± 2) by organizing every document, problem analysis, and presentation into a top-down pyramid under a single governing thought.',
  architecturalOverview:
    'The book progresses across four interlocking parts: (1) Part 1: Logic in Writing [Ch 1: Why the mind sorts ideas into pyramids under George Miller’s 7 ± 2 limit, the 3 Golden Rules, Vertical Q&A dialogue, SCQA narrative introductions, Top-Down vs. Bottom-Up pyramid building, and why Inductive groupings beat Deductive chains at the Key Line]; (2) Part 2: Logic in Thinking [Ch 2: Imposing the only 3 analytical orders—Time, MECE Structure, and Degree—and eliminating intellectually blank assertions by summarizing actions via tangible end-products and situations via inductive leaps]; (3) Part 3: Logic in Problem Solving [Ch 3: Sequential Analysis, the R1/R2 Problem Definition Framework across 7 reader states, Financial/Task/Flow/Choice Diagnostic Frameworks, Solution Logic Trees, and C.S. Peirce’s Abductive Yes/No crucial experiments]; and (4) Part 4: Logic in Presentation [Ch 4: Reflecting the pyramid on the printed page via hierarchical headings and backward-referencing transitions, on the screen via Gene Zelazny’s 90/10 exhibit storyboards, and in prose via George Miller’s constructive memory images].',
  chapters: [
    mppCh01Mastery,
    mppCh02Mastery,
    mppCh03Mastery,
    mppCh04Mastery,
  ],
};
