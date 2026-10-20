import { BookMasteryPackage } from '../../../types/book';
import { arqCh01Mastery, arqCh02Mastery } from './ch01-ch02';
import { arqCh03Mastery, arqCh04Mastery, arqCh05Mastery } from './ch03-ch05';
import { arqCh06Mastery, arqCh07Mastery, arqCh08Mastery } from './ch06-ch08';
import { arqCh09Mastery, arqCh10Mastery } from './ch09-ch10';
import { arqCh11Mastery, arqCh12Mastery, arqCh13Mastery } from './ch11-ch13';

export const askingTheRightQuestionsBook: BookMasteryPackage = {
  bookSlug: 'asking-the-right-questions',
  title: 'Asking the Right Questions',
  subtitle: 'A Guide to Critical Thinking (Twelfth Edition)',
  author: 'M. Neil Browne & Stuart M. Keeley',
  publicationYear: 2018,
  publisher: 'Pearson Education',
  coverAsset: 'cover.png',
  totalChapters: 13,
  totalSourceWords: 68569,
  totalFiguresExtracted: 17,
  corePromise:
    'A systematic, 11-question epistemic engineering protocol for deconstructing any argument, technical proposal, research study, or policy claim—transforming the thinker from a passive "Sponge" who absorbs assertions into an active "Gold-Panner" who isolates issues, conclusions, reasons, semantic ambiguities, hidden value/descriptive assumptions, logical fallacies, evidentiary flaws, rival causes, deceptive statistics, omitted externalities, and conditional conclusions.',
  architecturalOverview:
    'The book is architected as a progressive 4-stage diagnostic pipeline across 13 chapters: (1) Epistemic Stance & Structural Anatomy [Ch 1–3: Sponge vs. Panning-for-Gold cognition, Weak-Sense vs. Strong-Sense critical thinking, Prescriptive vs. Descriptive issues, locating the Conclusion, and mapping the load-bearing Reasons]; (2) Semantic & Assumption Excavation [Ch 4–5: Detecting critical semantic ambiguity via the Substitute-Meaning Test, Stipulative/Operational definitions, and unearthing the unstated Value Conflicts and Descriptive Assumptions that bridge Reason to Conclusion]; (3) Fallacy & Evidentiary Stress-Testing [Ch 6–10: Interrogating 13 formal/informal reasoning fallacies, evaluating personal experience, case examples, testimonials, and authority claims, auditing survey/sample generalizability and surrogate research measures, generating Rival Causes against Post Hoc/correlation traps, and exposing deceptive averages and omitted base rates in statistics]; and (4) Omission Analysis, Conditional Synthesis & Cognitive Debiasing [Ch 11–13: Uncovering omitted negative externalities, overcoming dichotomous Yes/No thinking with conditional "If-Clauses," and neutralizing System 1 speed bumps including Halo Effect, Belief Perseverance, Availability Heuristic, Egocentrism, and Wishful Thinking].',
  chapters: [
    arqCh01Mastery,
    arqCh02Mastery,
    arqCh03Mastery,
    arqCh04Mastery,
    arqCh05Mastery,
    arqCh06Mastery,
    arqCh07Mastery,
    arqCh08Mastery,
    arqCh09Mastery,
    arqCh10Mastery,
    arqCh11Mastery,
    arqCh12Mastery,
    arqCh13Mastery,
  ],
};
