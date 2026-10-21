import type { BookMasteryPackage } from '../../../types/book';
import { masteryCh01Mastery, masteryCh02Mastery } from './ch01-ch02';
import { masteryCh03Mastery, masteryCh04Mastery, masteryCh05Mastery } from './ch03-ch05';

export const masteryBook: BookMasteryPackage = {
  bookSlug: 'mastery',
  title: 'Mastery',
  subtitle: 'The Keys to Success and Long-Term Fulfillment',
  author: 'Robert Greene',
  publicationYear: 2012,
  publisher: 'Viking Adult',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 145538,
  totalFiguresExtracted: 44,
  corePromise:
    'Demystifies human genius by tracing it to six million years of hominid brain evolution—specifically frontal stereoscopic depth of focus and social mirror-neuron empathy—and mapping the universal three-phase progression from Apprenticeship to the Creative-Active Phase to Mastery.',
  architecturalOverview:
    'Through historical exemplars (Leonardo da Vinci, Charles Darwin, Benjamin Franklin, Michael Faraday, John Coltrane, the Wright brothers, Albert Einstein, and Goethe) paired with nine contemporary masters, Robert Greene provides an actionable operational blueprint across five stages: locating your Life’s Task, submitting to reality via the Ideal Apprenticeship and Mentor Alchemy, decoding the Seven Deadly Realities of social intelligence, awakening the Dimensional Mind, and fusing rational analysis with high-speed intuitive command.',
  chapters: [
    masteryCh01Mastery,
    masteryCh02Mastery,
    masteryCh03Mastery,
    masteryCh04Mastery,
    masteryCh05Mastery,
  ],
};
