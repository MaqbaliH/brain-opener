import { BookMasteryPackage } from '../../../types/book';
import { ctbdCh01Mastery, ctbdCh02Mastery } from './ch01-ch02';
import { ctbdCh03Mastery, ctbdCh04Mastery, ctbdCh05Mastery } from './ch03-ch05';

export const theCourageToBeDislikedBook: BookMasteryPackage = {
  bookSlug: 'the-courage-to-be-disliked',
  title: 'The Courage to Be Disliked',
  subtitle:
    'The Japanese Phenomenon That Shows You How to Change Your Life and Achieve Real Happiness: Adlerian Teleology, Separation of Tasks, and Community Feeling',
  author: 'Ichiro Kishimi & Fumitake Koga',
  publicationYear: 2018,
  publisher: 'Allen & Unwin / Atria Books',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 51662,
  totalFiguresExtracted: 0,
  corePromise:
    'Dismantle the deterministic myth of past trauma and external recognition cravings by mastering Alfred Adler’s Individual Psychology—replacing vertical competition with horizontal equality, separating your tasks from other people’s tasks, and living in earnest in the here and now.',
  architecturalOverview:
    'Structured across five Socratic nights between a skeptical Youth and an Adlerian Philosopher, the book builds a five-stage architectural progression: (1) Denying trauma by replacing Freudian etiology with goal-directed teleology and editable lifestyle choice; (2) Diagnosing all problems as interpersonal relationship problems and stepping off the vertical axis of competition onto a horizontal plane of comrades; (3) Cutting the Gordian knot of recognition dependency via the Separation of Tasks and defining freedom as being disliked; (4) Expanding outward to Community Feeling (Gemeinschaftsgefühl), replacing vertical praise and rebuke with horizontal gratitude on the level of being; and (5) Activating the circular engine of Self-Acceptance, Unconditional Confidence, and Contribution while dancing in the bright spotlight of the present moment (energeia).',
  chapters: [
    ctbdCh01Mastery,
    ctbdCh02Mastery,
    ctbdCh03Mastery,
    ctbdCh04Mastery,
    ctbdCh05Mastery,
  ],
};
