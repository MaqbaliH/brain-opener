import { BookMasteryPackage } from '../../../types/book';
import { bpsCh01Mastery, bpsCh02Mastery } from './ch01-ch02';
import { bpsCh03Mastery, bpsCh04Mastery, bpsCh05Mastery } from './ch03-ch05';

export const bulletproofProblemSolvingBook: BookMasteryPackage = {
  bookSlug: 'bulletproof-problem-solving',
  title: 'Bulletproof Problem Solving: The One Skill That Changes Everything',
  subtitle: 'The 7-Step McKinsey Problem-Solving Cycle: Problem Definition, MECE Logic Trees, Cleaving Analyses, and Uncertainty Synthesis',
  author: 'Charles Conn & Robert McLean',
  publicationYear: 2019,
  publisher: 'Wiley',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 59203,
  totalFiguresExtracted: 88,
  corePromise:
    'A complete operational blueprint for the 7-Step McKinsey Problem-Solving Cycle—replacing ad-hoc intuition and "Anxious Parades of Knowledge" with SMART problem framing, MECE logic trees, 2x2 Impact-vs.-Doability pruning, bias-proof team workplans, fast back-of-the-envelope heuristics, targeted "Big Guns" analytics, Minto Pyramid storyboards, real-option staircases, and multi-lever portfolios for wicked societal problems.',
  architecturalOverview:
    'The book is structured across five progressive mastery stages: (1) The 7-Step Cycle & SMART Problem Definition [Ch 1: Iterative One-Day Answers, boundary setting, porpoising into field data, and calibrating problem altitude across Sydney Airport, Pacific Salmon, Steel Co., and Avahan HIV]; (2) MECE Disaggregation, 2x2 Prioritization & Team Workplans [Ch 2: Component, Deductive ROIC, Inductive, and Hypothesis trees; Home Depot vs. Hechinger; GHG Abatement Cost Curves; chunky 5-column workplans and Red-Team anti-bias norms]; (3) Heuristic Sizing & "Big Guns" Analytics [Ch 3: Occam’s Razor, 80:20 Pareto, Rule of 72, CSIRO WiFi break-even EV, Question-Based Problem Solving, 68-city Obesity Regression, Challenger Bayesian priors, RCTs, Swiss Natural Experiments, and Diabetic Retinopathy ML]; (4) Pyramid Synthesis & Long-Horizon Uncertainty [Ch 4: Visual tree synthesis, Barbara Minto Pyramid storyboards, the 4 Levels of Uncertainty, BHP mining real options, and Ripper Drone strategic staircases]; and (5) Wicked Multi-Stakeholder Systems [Ch 5: MGI $/DALY obesity portfolios, Christakis-Fowler social network contagion, Morro Bay ITQ catch shares, and the 10 habits of great problem solvers].',
  chapters: [
    bpsCh01Mastery,
    bpsCh02Mastery,
    bpsCh03Mastery,
    bpsCh04Mastery,
    bpsCh05Mastery,
  ],
};
