import { BookMasteryPackage } from '../../../types/book';
import { cbtpCh01Mastery, cbtpCh02Mastery } from './ch01-ch02';
import { cbtpCh03Mastery } from './ch03';

export const claudeBeyondThePromptBook: BookMasteryPackage = {
  bookSlug: 'claude-beyond-the-prompt',
  title: 'Claude Beyond the Prompt',
  subtitle: 'Build Reusable Skills and Agentic Workflows',
  author: 'Martin Krause',
  publicationYear: 2026,
  publisher: 'Packt Publishing',
  coverAsset: 'cover.png',
  totalChapters: 3,
  totalSourceWords: 17746,
  totalFiguresExtracted: 6,
  corePromise:
    'A disciplined engineering transition from brittle, high-friction one-off prompting to modular, reusable Claude Skills and multi-layered agentic systems—separating task discovery metadata, deterministic execution instructions, and progressively disclosed supporting resources.',
  architecturalOverview:
    'The work progresses across three structural layers: (1) The Limits of One-Off Prompting [Ch 1: Diagnosing why ad-hoc conversational prompting fails under context reconstruction cost, epistemic drift, and repeated cognitive setup across recurring tasks]; (2) Agentic Engineering Architecture [Ch 2: Deconstructing the core Model-Tool-Agent loop, distinguishing reasoning from action, scoping subagents with isolated context windows, and wrapping the loop in explicit interfaces, persistent memory, and least-privilege access controls]; and (3) The Anatomy of Reusable Skills [Ch 3: Designing the three-layer Claude Skill architecture—lightweight discovery metadata, structured procedural instructions, and on-demand supporting resources via progressive disclosure—plus the four diagnostic signals (recurrence, drift, domain judgment, and context pressure) that justify promoting a prompt habit into a formal Skill].',
  chapters: [cbtpCh01Mastery, cbtpCh02Mastery, cbtpCh03Mastery],
};
