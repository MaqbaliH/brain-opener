import { BookMasteryPackage } from '../../../types/book';
import { thinkingSidewaysCh01Mastery, thinkingSidewaysCh02Mastery } from './ch01-ch02';
import { thinkingSidewaysCh03Mastery, thinkingSidewaysCh04Mastery } from './ch03-ch04';

export const thinkingSidewaysBook: BookMasteryPackage = {
  bookSlug: 'thinking-sideways',
  title: 'Thinking Sideways: Lateral Problem Solving',
  subtitle: 'Decision Trees, Temporal Leverage, Memory Encoding, Pattern Recognition, Ambition Calibration, and Asymmetric Risk',
  author: 'Cognitive Strategy Series',
  publicationYear: 2015,
  publisher: 'Polygon Press',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 53774,
  totalFiguresExtracted: 0,
  corePromise:
    'Elite problem solvers in chess, poker, and high-stakes careers do not succeed by calculating ten linear moves into an unpredictable future; they "think sideways" by scanning 3–4 wide candidate branches, inserting option-preserving intermezzos, encoding patterns via the SOFA memory architecture, synthesizing blue-ocean "Chessboxing" skill intersections, and optimizing multi-rollout expected value with strict outcome blindness.',
  architecturalOverview:
    'The four-part architecture progresses from search breadth to probabilistic execution: Chapter 1 establishes Kotov Candidate Decision Trees, overcoming the Einstellung "best move blocker," Paul Morphy intermezzos, and temporal allocation via the 37% Secretary Rule and Zugzwang; Chapter 2 details the SOFA Memory Engine (`Sleep, Organise, Focus, Activate`), De Groot semantic chunking, LPDO / Shisa Kanko blunder checks, and guardrails against LLM narrative-symmetry bias; Chapter 3 navigates Power-Law winner-take-all markets using Hou Yifan’s baseline equation, Patrick Leonard’s process spreadsheets, Iepe Rubingh’s Principle of Chessboxing, and the Confidence Switch; and Chapter 4 operationalizes asymmetric risk via Magnus Carlsen’s Game 12 equity shift, Outcome Blindness, Fail Sideways rejection quotas, the Principle of Two Jennifers, and Monte Carlo rollouts.',
  chapters: [
    thinkingSidewaysCh01Mastery,
    thinkingSidewaysCh02Mastery,
    thinkingSidewaysCh03Mastery,
    thinkingSidewaysCh04Mastery,
  ],
};
