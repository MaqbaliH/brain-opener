export type ConceptCategory =
  | 'foundation'
  | 'evaluation'
  | 'adaptation'
  | 'architecture'
  | 'optimization'
  | 'data'
  | 'security';

export interface MentalModel {
  id: string;
  name: string;
  tagline: string;
  naiveIntuition: string;
  firstPrinciplesReality: string;
  howToApply: string;
}

export interface TradeOffMatrix {
  title: string;
  description: string;
  headers: string[];
  rows: string[][];
  verdictRule: string;
}

export interface BookFigure {
  file: string; // e.g., "aien_0114.png" (served from /books/ai-engineering/assets/aien_0114.png)
  originalLabel: string; // e.g., "Figure 1-14. Three layers of the AI engineering stack."
  bierutTitle: string; // Active verb headline explaining why this figure matters
  editorialAnalysis: string; // Deep explanation of the axes, architecture, or empirical insight
  keyTakeaways: string[];
}

export interface CustomSvgDiagram {
  id: string;
  title: string;
  subtitle: string;
  svgCode: string; // Raw, valid, self-contained responsive SVG string (viewBox="0 0 800 420")
  bierutCaption: string;
  annotations: {
    step: string;
    label: string;
    explanation: string;
  }[];
}

export interface FormulaBreakdown {
  name: string;
  expression: string; // Clean mathematical/symbolic notation
  intuition: string;
  variables: {
    symbol: string;
    meaning: string;
  }[];
  workedExample: string;
}

export interface DeepSection {
  id: string;
  sectionNumber: string; // e.g. "1.1"
  title: string;
  subtitle: string;
  coreMechanism: string; // Multi-paragraph exhaustive explanation (use \n\n for paragraphs)
  stepByStepFlow?: {
    step: string;
    title: string;
    detail: string;
  }[];
  formulas?: FormulaBreakdown[];
  keyTakeaways: string[];
  commonPitfalls: string[];
  figures?: BookFigure[];
}

export interface EngineeringScenario {
  id: string;
  title: string;
  roleAndContext: string;
  symptomOrFailure: string;
  naiveFixAndWhyItFails: string;
  firstPrinciplesSolution: string;
  measurableOutcome: string;
}

export interface QuizQuestion {
  id: string;
  scenarioPrompt: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface Flashcard {
  id: string;
  category: ConceptCategory;
  front: string;
  back: string;
  mentalHook?: string;
}

export interface FeynmanChallenge {
  id: string;
  conceptTitle: string;
  prompt: string;
  rubricChecklist: string[];
  modelExplanation: string;
}

export interface ConceptNode {
  id: string;
  label: string;
  category: ConceptCategory;
  chapterNumber: number;
  importance: 1 | 2 | 3; // 1 = Core Pillar, 2 = Major Mechanism, 3 = Technique/Metric
  definition: string;
  formulaOrRule?: string;
  whyItMatters: string;
}

export interface ConceptEdge {
  source: string;
  target: string;
  relationship:
    | 'prerequisite_for'
    | 'optimizes'
    | 'trades_off_with'
    | 'mitigates'
    | 'part_of'
    | 'evaluates';
  explanation: string;
}

export interface ChapterMastery {
  chapterNumber: number;
  chapterId: string; // e.g. "ch01"
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  sourceWordCount: number;
  executiveThesis: string;
  paradigmShift: {
    oldWay: string;
    newWay: string;
    whyItChanged: string;
  };
  heroIllustrationUrl?: string;
  customDiagrams: CustomSvgDiagram[];
  mentalModels: MentalModel[];
  deepSections: DeepSection[];
  tradeOffMatrices: TradeOffMatrix[];
  engineeringScenarios: EngineeringScenario[];
  activeRecall: {
    quiz: QuizQuestion[];
    flashcards: Flashcard[];
    feynmanChallenges: FeynmanChallenge[];
  };
  knowledgeSubgraph: {
    nodes: ConceptNode[];
    edges: ConceptEdge[];
  };
  veritasAudit: {
    sectionCoverageScore: number;
    totalSourceSectionsCovered: number;
    figuresIncluded: number;
    antiAiVerified: boolean;
    auditNotes: string;
  };
}

export interface BookMasteryPackage {
  bookSlug: string;
  title: string;
  subtitle: string;
  author: string;
  publicationYear: number;
  publisher: string;
  coverAsset: string;
  totalChapters: number;
  totalSourceWords: number;
  totalFiguresExtracted: number;
  corePromise: string;
  architecturalOverview: string;
  chapters: ChapterMastery[];
}
