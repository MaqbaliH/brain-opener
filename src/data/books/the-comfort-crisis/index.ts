import type { BookMasteryPackage } from '../../../types/book';
import { tccCh01Mastery, tccCh02Mastery } from './ch01-ch02';
import { tccCh03Mastery, tccCh04Mastery, tccCh05Mastery } from './ch03-ch05';

export const theComfortCrisisBook: BookMasteryPackage = {
  bookSlug: 'the-comfort-crisis',
  title: 'The Comfort Crisis',
  subtitle: 'Embrace Discomfort To Reclaim Your Wild, Happy, Healthy Self',
  author: 'Michael Easter',
  publicationYear: 2021,
  publisher: 'Rodale Books',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 88322,
  totalFiguresExtracted: 22,
  corePromise:
    'Engineering every physical, thermal, nutritional, and attentional friction out of modern life traps humans in a 93-percent indoor captivity bubble—triggering Prevalence-Induced Concept Creep, Default Mode Network starvation, metabolic decay, and musculoskeletal atrophy.',
  architecturalOverview:
    'Systematically reintroduces evolutionary friction across five operational pillars: Chapter 1 diagnoses the Evolutionary Comfort Trap and Harvard’s Prevalence-Induced Concept Creep; Chapter 2 details the P3 Misogi Protocol for expanding central-governor limits; Chapter 3 restores Default Mode Network mind-wandering via unfiltered boredom and the 20-5-3 Nature Prescription; Chapter 4 integrates visceral hunger, autophagy, heavy rucking, and Bhutanese mortality contemplation; and Chapter 5 blueprints daily friction habits.',
  chapters: [
    tccCh01Mastery,
    tccCh02Mastery,
    tccCh03Mastery,
    tccCh04Mastery,
    tccCh05Mastery,
  ],
};
