import { BookMasteryPackage } from '../../../types/book';
import { thePowerOfHabitCh01Mastery, thePowerOfHabitCh02Mastery } from './ch01-ch02';
import { thePowerOfHabitCh03Mastery, thePowerOfHabitCh04Mastery } from './ch03-ch04';

export const thePowerOfHabitBook: BookMasteryPackage = {
  bookSlug: 'the-power-of-habit',
  title: 'The Power of Habit',
  subtitle: 'Why We Do What We Do in Life and Business: Basal Ganglia Chunking, Craving Loops, Keystone Routines, and Social Movements',
  author: 'Charles Duhigg',
  publicationYear: 2012,
  publisher: 'Random House',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 88165,
  totalFiguresExtracted: 104,
  corePromise:
    'Over 40 percent of daily human actions—and the overwhelming majority of corporate and societal behaviors—are not conscious decisions, but automated Cue-Routine-Reward chunks stored in the basal ganglia and powered by anticipatory dopamine cravings. Because these neural pathways never disappear, lasting change requires applying the Golden Rule of Habit Change (keeping the old Cue and Reward while substituting a new Routine), anchoring institutional transformation on high-leverage Keystone Habits, and deploying a 4-step empirical diagnostic protocol.',
  architecturalOverview:
    'The architecture scales from single-neuron mechanics to society-wide movements: Chapter 1 maps the subcortical 3-step Habit Loop (`Cue -> Routine -> Reward`) and Wolfram Schultz’s anticipatory craving spike; Chapter 2 establishes the Golden Rule of routine substitution, communal belief buffers, Paul O’Neill’s Alcoa Keystone Habits, and Starbucks’ LATTE willpower scripts; Chapter 3 scales habit theory to Nelson & Winter’s organizational truces, Target’s familiarity-sandwiched pregnancy analytics, and the three-stage Strong/Weak-Tie geometry of social movements; and Chapter 4 synthesizes the neuroethics of free will with the actionable 4-Step Habit Diagnostic Protocol.',
  chapters: [
    thePowerOfHabitCh01Mastery,
    thePowerOfHabitCh02Mastery,
    thePowerOfHabitCh03Mastery,
    thePowerOfHabitCh04Mastery,
  ],
};
