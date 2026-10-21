import { BookMasteryPackage } from '../../../types/book';
import { tagCh01Mastery, tagCh02Mastery } from './ch01-ch02';
import { tagCh03Mastery, tagCh04Mastery } from './ch03-ch04';

export const theAnxiousGenerationBook: BookMasteryPackage = {
  bookSlug: 'the-anxious-generation',
  title: 'The Anxious Generation',
  subtitle:
    'How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness: Play-Based vs. Phone-Based Development and Collective Action Norms',
  author: 'Jonathan Haidt',
  publicationYear: 2024,
  publisher: 'Penguin Press',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 80718,
  totalFiguresExtracted: 46,
  corePromise:
    'Deconstruct the two-blade historical scissor that rewired Gen Z—the 1990s eradication of unsupervised physical free play under Safetyism and the 2010–2015 migration of puberty onto smartphones and algorithmic social media—and execute the Four Foundational Reforms to restore play-based childhood.',
  architecturalOverview:
    'Synthesizing all 12 source chapters across four comprehensive mastery modules, this package traces: (1) The post-2010 cross-national surge in adolescent internalizing disorders and the evolutionary architecture of slow-growth, antifragile Play-Based Childhood (Free Play, Attunement, Cultural Sensitive Period, Discover vs. Defend Mode); (2) Puberty neuroplasticity (synaptic pruning and myelination), dual experience blockers, the Four Foundational Harms (Social Deprivation, Sleep Deprivation, Attention Fragmentation, Dopamine Hook Addiction), and why visual social media harms girls disproportionately; (3) Boys’ push-pull migration from physical risk to multiplayer gaming, supernormal pornography, and Durkheimian anomie, plus how phone-based life inverts the Six Ancient Spiritual Practices along the vertical axis of divinity; and (4) Escaping the Collective Action Trap across Governments, Tech Companies, Schools, and Parents via the Four Foundational Reforms (No smartphones before 14, No social media before 16, Phone-free schools, and Far more unsupervised play and childhood independence).',
  chapters: [tagCh01Mastery, tagCh02Mastery, tagCh03Mastery, tagCh04Mastery],
};
