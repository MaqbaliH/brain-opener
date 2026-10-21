import { BookMasteryPackage } from '../../../types/book';
import { ctbhCh01Mastery, ctbhCh02Mastery } from './ch01-ch02';
import { ctbhCh03Mastery, ctbhCh04Mastery, ctbhCh05Mastery } from './ch03-ch05';

export const theCourageToBeHappyBook: BookMasteryPackage = {
  bookSlug: 'the-courage-to-be-happy',
  title: 'The Courage to Be Happy',
  subtitle:
    'Dare to Be Ordinary: Adlerian Pedagogy, Self-Reliance, the Triangular Prism of Choice, and Unconditional Respect',
  author: 'Ichiro Kishimi & Fumitake Koga',
  publicationYear: 2019,
  publisher: 'Allen & Unwin / Atria Books',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 51843,
  totalFiguresExtracted: 0,
  corePromise:
    'Translate Alfred Adler’s philosophy into the real-world trenches of education, leadership, and love—discarding "That bad person" and "Poor me" via the Triangular Prism, dismantling the Five Stages of Problem Behavior without angry rebuke, and achieving true Self-Reliance by shifting the grammatical subject of life from "Me" to "Us."',
  architecturalOverview:
    'Picking up three years after The Courage to Be Disliked, this five-part Socratic dialogue tests Adlerian theory against classroom rebellion and adult intimacy: (1) Defining education and counselling as re-education toward Self-Reliance grounded in Fromm’s Respect (respicio), Empathy, and the Triangular Prism ("What should I do from now on?"); (2) Denying rebuke by diagnosing the Five Stages of Problem Behavior and treating classrooms as democratic nations governed by natural consequences; (3) Replacing the Principle of Competition ("community pneumonia" and "clockwork dolls") and the Messiah Complex with the Principle of Cooperation and Education as Friendship; (4) Distinguishing conditional Work Trust ("what you have") from unconditional Friendship Confidence ("who you are") and practicing the active Art of Loving ("Give first"); and (5) Breaking away from childhood’s "lifestyle for being loved" by shifting life’s subject from "Me" to "Us" through Love as a Decision, Judgment, and Promise.',
  chapters: [
    ctbhCh01Mastery,
    ctbhCh02Mastery,
    ctbhCh03Mastery,
    ctbhCh04Mastery,
    ctbhCh05Mastery,
  ],
};
