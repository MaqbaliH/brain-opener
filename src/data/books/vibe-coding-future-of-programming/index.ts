import { BookMasteryPackage } from '../../../types/book';
import { vcfpCh01Mastery } from './ch01';
import { vcfpCh02Mastery } from './ch02';

export const vibeCodingFutureOfProgrammingBook: BookMasteryPackage = {
  bookSlug: 'vibe-coding-future-of-programming',
  title: 'Vibe Coding: The Future of Programming',
  subtitle: 'AI-Assisted Workflows, The 70% Problem, and Maximizing Human Engineering Judgment',
  author: 'Addy Osmani',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 2,
  totalSourceWords: 9861,
  totalFiguresExtracted: 1,
  corePromise:
    'A field report by Addy Osmani deconstructing the "70% Problem" in AI-assisted software development—contrasting rapid, unguided "vibe coding" prototypes with disciplined, specification-led AI pair programming that preserves human architectural ownership across the critical final 30% of production readiness.',
  architecturalOverview:
    'The report is structured across two complementary engineering lenses: (1) The 70% Problem & AI-Assisted Workflows That Work [Ch 1: Why LLMs accelerate initial scaffolding to 70% completion while compounding regressions in the final 30% (edge cases, security, maintainability); the "two steps back" prompting trap; and comparing unguided Vibe Coding against structured AI-assisted workflows using PRDs, modular context rules, and atomic Git checkpoints]; and (2) Beyond the 70%: Maximizing Human Contribution [Ch 2: Elevating durable human engineering faculties—system boundaries, failure-mode modeling, test-driven verification, security auditing, and code-review rigor—so developers direct AI agents as high-leverage execution multipliers rather than abdicating architectural accountability].',
  chapters: [vcfpCh01Mastery, vcfpCh02Mastery],
};
