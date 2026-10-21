import type { BookMasteryPackage } from '../../../types/book';
import { hmbybfCh01Mastery, hmbybfCh02Mastery } from './ch01-ch02';
import { hmbybfCh03Mastery, hmbybfCh04Mastery } from './ch03-ch04';

export const howToMakeYourBrainYourBestFriendBook: BookMasteryPackage = {
  bookSlug: 'how-to-make-your-brain-your-best-friend',
  title: 'How to Make Your Brain Your Best Friend',
  subtitle: 'An Illustrated Guide to Operating Your Nervous System with Self-Compassion, Co-Regulation, Neuroplastic Play, and Algorithmic Defense',
  author: 'Rachel Barr',
  publicationYear: 2025,
  publisher: 'DK / Penguin Random House',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 59068,
  totalFiguresExtracted: 8,
  corePromise:
    'Befriending the brain requires replacing commercialized self-optimization and punitive perfectionism with biologically grounded operating principles: aligning identity actions to silence anterior cingulate dissonance, co-regulating threat vigilance across layered social networks, protecting NREM/REM sleep architecture, coupling creative and proprioceptive play, and defending prefrontal attention from variable-ratio algorithmic hijacking.',
  architecturalOverview:
    'Synthesizes Rachel Barr’s neurobiological manual into four progressive operating domains: Chapter 1 replaces toxic self-optimization with anterior-cingulate alignment and eudaimonic delight; Chapter 2 maps Social Baseline Theory co-regulation and glymphatic sleep consolidation; Chapter 3 integrates Default Mode and Executive Control network coupling through art and proprioceptive movement; and Chapter 4 establishes algorithmic attention defenses and autobiographical meaning construction.',
  chapters: [
    hmbybfCh01Mastery,
    hmbybfCh02Mastery,
    hmbybfCh03Mastery,
    hmbybfCh04Mastery,
  ],
};
