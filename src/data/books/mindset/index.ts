import { BookMasteryPackage } from '../../../types/book';
import { mindsetCh01Mastery, mindsetCh02Mastery } from './ch01-ch02';
import { mindsetCh03Mastery, mindsetCh04Mastery } from './ch03-ch04';

export const mindsetBook: BookMasteryPackage = {
  bookSlug: 'mindset',
  title: 'Mindset: The New Psychology of Success',
  subtitle: 'Fixed vs. Growth Belief Systems, Failure Attribution Mechanics, Praise Hazards, and Neuroplastic Capability Development',
  author: 'Carol S. Dweck',
  publicationYear: 2016,
  publisher: 'Random House',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 92017,
  totalFiguresExtracted: 7,
  corePromise:
    'A first-principles cognitive and behavioral operating manual showing how implicit beliefs about human malleability (Fixed Entity Theory vs. Incremental Growth Theory) govern neural error processing, effort allocation, resilience under stereotype threat, corporate governance, intimate relationships, and lifelong capability expansion.',
  architecturalOverview:
    'Synthesized across four comprehensive mastery modules covering all eight chapters of the Updated Edition: (1) The Two Mindsets & Inside the Mindsets [Ch 1–2: Entity vs. Incremental theories, Alfred Binet’s diagnostic IQ origins, Columbia EEG error-remediation waveforms, action-vs-identity failure attribution, and prodigy self-handicapping]; (2) The Truth About Ability, Labels & Champion Mindsets [Ch 3–4: Junior high and pre-med transitions, Betty Edwards’s 5-day component skill deconstruction, the 7-experiment ability-praise boomerang, Claude Steele stereotype threat shielding, and Billy Beane/Michael Jordan/John Wooden athletic mechanics]; (3) Business Leadership & Mindsets in Relationships [Ch 5–6: Enron’s talent cult vs. Good-to-Great inquiry leaders, Wood & Bandura management simulations, Groupthink vs. psychological safety, and destiny/mind-reading traps vs. collaborative relationship growth]; and (4) Where Mindsets Come From & Changing Mindsets [Ch 7–8: Parental/coaching process messages, False Growth Mindset traps, Brainology neuroplasticity, and the 4-Step Fixed-Mindset Persona Protocol].',
  chapters: [
    mindsetCh01Mastery,
    mindsetCh02Mastery,
    mindsetCh03Mastery,
    mindsetCh04Mastery,
  ],
};
