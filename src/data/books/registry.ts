import { BookMasteryPackage } from '../../types/book';
import { agentforceBook } from './agentforce-harnessing-agency-of-ai';
import { agenticGraphRagBook } from './agentic-graphrag';
import { aiEngineeringBook } from './ai-engineering';
import { aiNativeSoftwareDeliveryBook } from './ai-native-software-delivery';
import { aiValueCreatorsBook } from './ai-value-creators';
import { anIllustratedGuideToAiAgentsBook } from './an-illustrated-guide-to-ai-agents';
import { artOfPromptEngineeringMultimodelBook } from './art-of-prompt-engineering-multimodel';
import { askingTheRightQuestionsBook } from './asking-the-right-questions';
import { beyondVibeCodingBook } from './beyond-vibe-coding';
import { buildWithGoogleAntigravityBook } from './build-with-google-antigravity';
import { buildingAiAgentsForFinanceBook } from './building-ai-agents-for-finance';
import { buildingApplicationsWithAiAgentsBook } from './building-applications-with-ai-agents';
import { bulletproofProblemSolvingBook } from './bulletproof-problem-solving';
import { claudeBeyondThePromptBook } from './claude-beyond-the-prompt';
import { contextEngineeringMultiAgentBook } from './context-engineering-multi-agent';
import { criticalThinkingHaberBook } from './critical-thinking-haber';
import { criticalThinkingPowerfulStrategiesBook } from './critical-thinking-powerful-strategies';
import { deepWorkBook } from './deep-work';
import { designMultiAgentMcpA2aBook } from './design-multi-agent-mcp-a2a';
import { grokkingAiApplicationsBook } from './grokking-ai-applications';
import { hemingwaysBoatBook } from './hemingways-boat';
import { howToBuildAnAiAgencyBook } from './how-to-build-an-ai-agency';
import { howToMakeYourBrainYourBestFriendBook } from './how-to-make-your-brain-your-best-friend';
import { leadershipSecretsTopCeosBook } from './leadership-secrets-top-ceos';
import { masteryBook } from './mastery';
import { midjourneyMasteryBook } from './midjourney-mastery';
import { mindsetBook } from './mindset';
import { mintoPyramidPrincipleBook } from './minto-pyramid-principle';
import { promptEngineeringForLlmsBook } from './prompt-engineering-for-llms';
import { revengeOfTheTippingPointBook } from './revenge-of-the-tipping-point';
import { rewireBook } from './rewire';
import { soGoodTheyCantIgnoreYouBook } from './so-good-they-cant-ignore-you';
import { theAnxiousGenerationBook } from './the-anxious-generation';
import { theComfortCrisisBook } from './the-comfort-crisis';
import { theCourageToBeDislikedBook } from './the-courage-to-be-disliked';
import { theCourageToBeHappyBook } from './the-courage-to-be-happy';
import { theMckinseyMindBook } from './the-mckinsey-mind';
import { theMckinseyWayBook } from './the-mckinsey-way';
import { thePowerOfHabitBook } from './the-power-of-habit';
import { thinkingSidewaysBook } from './thinking-sideways';
import { vibeCodingFutureOfProgrammingBook } from './vibe-coding-future-of-programming';

export type BookDomainCategory =
  | 'AI & Agents'
  | 'Systems & Architecture'
  | 'Data & ML'
  | 'Cognitive & Mastery'
  | 'Product & Design';

export interface VaultBookPreview {
  bookSlug: string;
  fileName: string;
  format: 'EPUB' | 'PDF' | 'AZW3';
  title: string;
  author: string;
  category: BookDomainCategory;
  status: 'published' | 'queued';
}

/**
 * Active Published Books in Brain Opener.
 * Whenever Nexus finishes synthesizing a new book from /Books, register its BookMasteryPackage here.
 */
export const PUBLISHED_BOOKS: Record<string, BookMasteryPackage> = {
  'deep-work': deepWorkBook,
  'so-good-they-cant-ignore-you': soGoodTheyCantIgnoreYouBook,
  mastery: masteryBook,
  mindset: mindsetBook,
  'the-power-of-habit': thePowerOfHabitBook,
  'thinking-sideways': thinkingSidewaysBook,
  rewire: rewireBook,
  'how-to-make-your-brain-your-best-friend': howToMakeYourBrainYourBestFriendBook,
  'the-courage-to-be-disliked': theCourageToBeDislikedBook,
  'the-courage-to-be-happy': theCourageToBeHappyBook,
  'the-comfort-crisis': theComfortCrisisBook,
  'the-anxious-generation': theAnxiousGenerationBook,
  'revenge-of-the-tipping-point': revengeOfTheTippingPointBook,
  'hemingways-boat': hemingwaysBoatBook,
  'bulletproof-problem-solving': bulletproofProblemSolvingBook,
  'critical-thinking-haber': criticalThinkingHaberBook,
  'critical-thinking-powerful-strategies': criticalThinkingPowerfulStrategiesBook,
  'minto-pyramid-principle': mintoPyramidPrincipleBook,
  'the-mckinsey-mind': theMckinseyMindBook,
  'the-mckinsey-way': theMckinseyWayBook,
  'leadership-secrets-top-ceos': leadershipSecretsTopCeosBook,
  'midjourney-mastery': midjourneyMasteryBook,
  'art-of-prompt-engineering-multimodel': artOfPromptEngineeringMultimodelBook,
  'how-to-build-an-ai-agency': howToBuildAnAiAgencyBook,
  'vibe-coding-future-of-programming': vibeCodingFutureOfProgrammingBook,
  'grokking-ai-applications': grokkingAiApplicationsBook,
  'building-ai-agents-for-finance': buildingAiAgentsForFinanceBook,
  'an-illustrated-guide-to-ai-agents': anIllustratedGuideToAiAgentsBook,
  'claude-beyond-the-prompt': claudeBeyondThePromptBook,
  'build-with-google-antigravity': buildWithGoogleAntigravityBook,
  'prompt-engineering-for-llms': promptEngineeringForLlmsBook,
  'design-multi-agent-mcp-a2a': designMultiAgentMcpA2aBook,
  'building-applications-with-ai-agents': buildingApplicationsWithAiAgentsBook,
  'context-engineering-multi-agent': contextEngineeringMultiAgentBook,
  'agentforce-harnessing-agency-of-ai': agentforceBook,
  'agentic-graphrag': agenticGraphRagBook,
  'ai-value-creators': aiValueCreatorsBook,
  'ai-native-software-delivery': aiNativeSoftwareDeliveryBook,
  'asking-the-right-questions': askingTheRightQuestionsBook,
  'beyond-vibe-coding': beyondVibeCodingBook,
  'ai-engineering': aiEngineeringBook,
};

export const PUBLISHED_BOOK_LIST: BookMasteryPackage[] = Object.values(PUBLISHED_BOOKS);

/**
 * Complete Catalog of All Books Detected in the Workspace `/Books` Vault
 */
export const VAULT_BOOK_CATALOG: VaultBookPreview[] = [
  // =========================================================================
  // PUBLISHED & VERITAS-CERTIFIED VOLUMES
  // =========================================================================
  {
    bookSlug: 'agentforce-harnessing-agency-of-ai',
    fileName:
      'Agentforce Harnessing the Agency of AI to Scale, Grow, and Lead Any Industry.epub',
    format: 'EPUB',
    title: 'Agentforce: Harnessing the Agency of AI to Scale, Grow, and Lead Any Industry',
    author: 'Martin Kihn',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'agentic-graphrag',
    fileName:
      'Agentic GraphRAG Integrating Knowledge Graphs, Reasoning, and Agency for Enterprise AI.epub',
    format: 'EPUB',
    title: 'Agentic GraphRAG: Integrating Knowledge Graphs, Reasoning, and Agency',
    author: 'Anthony Alcaraz & Sam Julien',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'ai-value-creators',
    fileName: 'AI Value Creators.pdf',
    format: 'PDF',
    title: 'AI Value Creators',
    author: 'Rob Thomas, Paul Zikopoulos & Kate Soule',
    category: 'Data & ML',
    status: 'published',
  },
  {
    bookSlug: 'ai-native-software-delivery',
    fileName: 'AI-Native Software Delivery.epub',
    format: 'EPUB',
    title: 'AI-Native Software Delivery',
    author: 'Nick Durkin, Eric Minick & Chinmay Gaikwad',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'asking-the-right-questions',
    fileName:
      '20 oct 26/Asking the Right Questions A Guide to Critical Thinking (M. Neil Browne, Stuart M. Keeley) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'Asking the Right Questions: A Guide to Critical Thinking (12th Edition)',
    author: 'M. Neil Browne & Stuart M. Keeley',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'beyond-vibe-coding',
    fileName: 'Beyond Vibe Coding.epub',
    format: 'EPUB',
    title: 'Beyond Vibe Coding: From Coder to AI-Era Developer',
    author: 'Addy Osmani',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'ai-engineering',
    fileName: 'AI Engineering.epub',
    format: 'EPUB',
    title: 'AI Engineering: Building Applications with Foundation Models',
    author: 'Chip Huyen',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'context-engineering-multi-agent',
    fileName: 'Context Engineering for Multi-Agent Systems.epub',
    format: 'EPUB',
    title: 'Context Engineering for Multi-Agent Systems',
    author: 'Denis Rothman',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'building-applications-with-ai-agents',
    fileName: 'Building Applications with AI Agents.epub',
    format: 'EPUB',
    title: 'Building Applications with AI Agents',
    author: 'Michael Albada',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'design-multi-agent-mcp-a2a',
    fileName: 'Design Multi-Agent AI Systems Using MCP and A2A.pdf',
    format: 'PDF',
    title: 'Design Multi-Agent AI Systems Using MCP and A2A',
    author: 'Gigi Sayfan',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'prompt-engineering-for-llms',
    fileName: 'Prompt Engineering for LLMs.epub',
    format: 'EPUB',
    title: 'Prompt Engineering for LLMs',
    author: 'John Berryman & Albert Ziegler',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'build-with-google-antigravity',
    fileName: 'Build with Google Antigravity.epub',
    format: 'EPUB',
    title: 'Build with Google Antigravity',
    author: 'Elnaz Sarraf',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'claude-beyond-the-prompt',
    fileName: 'Claude Beyond the Prompt.epub',
    format: 'EPUB',
    title: 'Claude Beyond the Prompt',
    author: 'Martin Krause',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'an-illustrated-guide-to-ai-agents',
    fileName: 'An Illustrated Guide to AI Agents.epub',
    format: 'EPUB',
    title: 'An Illustrated Guide to AI Agents',
    author: 'Maarten Grootendorst & Jay Alammar',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'building-ai-agents-for-finance',
    fileName: 'Building AI Agents for Finance.epub',
    format: 'EPUB',
    title: 'Building AI Agents for Finance',
    author: 'Hanane Dupouy',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'grokking-ai-applications',
    fileName: 'Grokking AI Applications.pdf',
    format: 'PDF',
    title: 'Grokking AI Applications',
    author: 'Andrea De Mauro',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'vibe-coding-future-of-programming',
    fileName: 'Vibe Coding The Future of Programming.epub',
    format: 'EPUB',
    title: 'Vibe Coding: The Future of Programming',
    author: 'Addy Osmani',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'how-to-build-an-ai-agency',
    fileName: 'How to Build an AI Agency.pdf',
    format: 'PDF',
    title: 'How to Build an AI Agency',
    author: 'Vedant Pandya',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'art-of-prompt-engineering-multimodel',
    fileName: 'The Art of Prompt Engineering for Multimodel.azw3',
    format: 'AZW3',
    title: 'The Art of Prompt Engineering for Multimodal AI',
    author: 'Yash Jain',
    category: 'AI & Agents',
    status: 'published',
  },
  {
    bookSlug: 'midjourney-mastery',
    fileName: 'Midjourney Mastery - The Ultimate Book of Prompts.epub',
    format: 'EPUB',
    title: 'Midjourney Mastery: The Ultimate Book of Prompts',
    author: 'Andreea Todinca',
    category: 'AI & Agents',
    status: 'published',
  },

  // =========================================================================
  // SYSTEMS & ARCHITECTURE VAULT QUEUE
  // =========================================================================
  {
    bookSlug: 'designing-data-intensive-applications',
    fileName: 'Designing Data-Intensive Applications.pdf',
    format: 'PDF',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Systems & Architecture',
    status: 'queued',
  },
  {
    bookSlug: 'fundamentals-of-software-architecture',
    fileName:
      'Fundamentals of Software Architecture An Engineering Approach (Mark Richards Neal Ford) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'Fundamentals of Software Architecture: An Engineering Approach',
    author: 'Mark Richards & Neal Ford',
    category: 'Systems & Architecture',
    status: 'queued',
  },
  {
    bookSlug: 'learning-systems-thinking',
    fileName: 'Learning Systems Thinking Essential.epub',
    format: 'EPUB',
    title: 'Learning Systems Thinking: Essential Non-Linear Problem Solving',
    author: 'Diana Montalion',
    category: 'Systems & Architecture',
    status: 'queued',
  },
  {
    bookSlug: 'kubernetes-patterns',
    fileName:
      'Kubernetes Patterns Reusable Elements for Designing Cloud-Native Applications (Bilgin Ibryam, Roland Huss).pdf',
    format: 'PDF',
    title: 'Kubernetes Patterns: Designing Cloud-Native Applications',
    author: 'Bilgin Ibryam & Roland Huss',
    category: 'Systems & Architecture',
    status: 'queued',
  },
  {
    bookSlug: 'high-performance-python',
    fileName: 'High Performance Python.epub',
    format: 'EPUB',
    title: 'High Performance Python: Practical Performant Programming',
    author: 'Micha Gorelick & Ian Ozsvald',
    category: 'Systems & Architecture',
    status: 'queued',
  },
  {
    bookSlug: 'efficient-nodejs',
    fileName: 'Efficient Node.js',
    format: 'EPUB',
    title: 'Efficient Node.js: Beyond the Basics',
    author: 'Samer Buna',
    category: 'Systems & Architecture',
    status: 'queued',
  },

  // =========================================================================
  // DATA & ML VAULT QUEUE
  // =========================================================================
  {
    bookSlug: 'think-stats-3e',
    fileName:
      'Think Stats, 3rd Edition Exploratory Data Analysis (Allen B. Downey) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'Think Stats (3rd Edition): Exploratory Data Analysis',
    author: 'Allen B. Downey',
    category: 'Data & ML',
    status: 'queued',
  },

  // =========================================================================
  // PRODUCT & DESIGN VAULT QUEUE
  // =========================================================================
  {
    bookSlug: 'ux-for-ai',
    fileName: 'UX for AI A Framework for Designing AI-Driven Products.pdf',
    format: 'PDF',
    title: 'UX for AI: A Framework for Designing AI-Driven Products',
    author: 'Greg Nudelman',
    category: 'Product & Design',
    status: 'queued',
  },
  {
    bookSlug: 'building-ai-powered-products',
    fileName: 'Building AI-Powered Products.epub',
    format: 'EPUB',
    title: 'Building AI-Powered Products',
    author: 'Marily Nika',
    category: 'Product & Design',
    status: 'queued',
  },
  {
    bookSlug: 'strategic-writing-for-ux',
    fileName:
      'Strategic Writing for UX Drive Engagement, Conversion, and Retention with Every Word - 2nd Edition (Torrey Podmajersky) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'Strategic Writing for UX (2nd Edition)',
    author: 'Torrey Podmajersky',
    category: 'Product & Design',
    status: 'queued',
  },
  {
    bookSlug: 'strategic-storytelling',
    fileName:
      'Strategic Storytelling How to Create Persuasive Business Presentations (Dave McKinsey) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'Strategic Storytelling: Persuasive Presentations',
    author: 'Dave McKinsey',
    category: 'Product & Design',
    status: 'queued',
  },
  {
    bookSlug: 'be-the-brand',
    fileName:
      'Be The Brand The Ultimate Guide to Building Your Personal Brand (Jules Marcoux) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'Be The Brand: Building Your Personal Brand',
    author: 'Jules Marcoux',
    category: 'Product & Design',
    status: 'queued',
  },
  {
    bookSlug: 'character-limit',
    fileName: 'Character Limit.epub',
    format: 'EPUB',
    title: 'Character Limit: How Elon Musk Destroyed Twitter',
    author: 'Kate Conger & Ryan Mac',
    category: 'Product & Design',
    status: 'queued',
  },

  // =========================================================================
  // COGNITIVE & MASTERY PUBLISHED VOLUMES
  // =========================================================================
  {
    bookSlug: 'deep-work',
    fileName: 'Deep Work Rules for Focused Success in a Distracted World.epub',
    format: 'EPUB',
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'so-good-they-cant-ignore-you',
    fileName:
      'So Good They Cant Ignore You Why Skills Trump Passion in the Quest for Work You Love.epub',
    format: 'EPUB',
    title: "So Good They Can't Ignore You",
    author: 'Cal Newport',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'mastery',
    fileName: 'Mastery.epub',
    format: 'EPUB',
    title: 'Mastery',
    author: 'Robert Greene',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'mindset',
    fileName:
      'Mindset - Changing The Way You Think To Fulfil Your Potential (Updated Edition) (Carol Susan Dweck) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-power-of-habit',
    fileName:
      'The Power of Habit Why We Do What We Do in Life and Business (Charles Duhigg) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'thinking-sideways',
    fileName: 'Thinking Sideways.epub',
    format: 'EPUB',
    title: 'Thinking Sideways: Lateral Problem Solving',
    author: 'Cognitive Strategy Series',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'rewire',
    fileName: 'Rewire.epub',
    format: 'EPUB',
    title: 'Rewire: Break the Cycle, Alter Your Thoughts',
    author: 'Nicole Vignola',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'how-to-make-your-brain-your-best-friend',
    fileName: 'How to Make Your Brain Your Best Friend.epub',
    format: 'EPUB',
    title: 'How to Make Your Brain Your Best Friend',
    author: 'Rachel Barr',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-courage-to-be-disliked',
    fileName: 'The Courage To Be Disliked.epub',
    format: 'EPUB',
    title: 'The Courage to Be Disliked',
    author: 'Ichiro Kishimi & Fumitake Koga',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-courage-to-be-happy',
    fileName: 'The Courage to Be Happy.epub',
    format: 'EPUB',
    title: 'The Courage to Be Happy',
    author: 'Ichiro Kishimi & Fumitake Koga',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-comfort-crisis',
    fileName: 'The Comfort Crisis.epub',
    format: 'EPUB',
    title: 'The Comfort Crisis: Embrace Discomfort To Reclaim Your Wild, Happy, Healthy Self',
    author: 'Michael Easter',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-anxious-generation',
    fileName: 'The Anxious Generation.epub',
    format: 'EPUB',
    title: 'The Anxious Generation',
    author: 'Jonathan Haidt',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'revenge-of-the-tipping-point',
    fileName: 'Revenge of the Tipping Point.epub',
    format: 'EPUB',
    title: 'Revenge of the Tipping Point',
    author: 'Malcolm Gladwell',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'hemingways-boat',
    fileName: 'Hemingways Boat.epub',
    format: 'EPUB',
    title: "Hemingway's Boat: Everything He Loved in Life, and Lost",
    author: 'Paul Hendrickson',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'bulletproof-problem-solving',
    fileName:
      '20 oct 26\\Bulletproof Problem Solving The One Skill That Changes Everything (Charles Conn, Robert McLean) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'Bulletproof Problem Solving: The One Skill That Changes Everything',
    author: 'Charles Conn & Robert McLean',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'critical-thinking-haber',
    fileName:
      '20 oct 26\\Critical Thinking (Jonathan Haber) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'Critical Thinking (MIT Press Essential Knowledge)',
    author: 'Jonathan Haber',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'critical-thinking-powerful-strategies',
    fileName:
      '20 oct 26\\Critical Thinking Powerful Strategies That Will Make You Improve Decisions And Think Smarter (Critical Thinking - Think. (Harvey Segler Critical Thinking) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'Critical Thinking: Powerful Strategies to Improve Decisions',
    author: 'Harvey Segler',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'minto-pyramid-principle',
    fileName:
      '20 oct 26\\The Minto Pyramid Principle Logic In Writing, Thinking And Problem Solving (Barbara Minto) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'The Minto Pyramid Principle: Logic in Writing, Thinking, and Problem Solving',
    author: 'Barbara Minto',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-mckinsey-mind',
    fileName:
      '20 oct 26\\The McKinsey Mind Understanding and Implementing the Problem-Solving Tools and Management Techniques of the Worlds Top. (Ethan Rasiel, Paul Friga) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'The McKinsey Mind: Problem-Solving Tools and Management Techniques',
    author: 'Ethan M. Rasiel & Paul N. Friga',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'the-mckinsey-way',
    fileName:
      '20 oct 26\\The McKinsey Way (Ethan M. Rasiel) (z-library.sk, 1lib.sk, z-lib.sk).epub',
    format: 'EPUB',
    title: 'The McKinsey Way',
    author: 'Ethan M. Rasiel',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'leadership-secrets-top-ceos',
    fileName:
      '20 oct 26\\Leadership Secrets of the Worlds Most Successful CEOs 100 Top Executives Reveal the Management Strategies That Made Their. (Eric Yaverbaum) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: "Leadership Secrets of the World's Most Successful CEOs",
    author: 'Eric Yaverbaum',
    category: 'Cognitive & Mastery',
    status: 'published',
  },
  {
    bookSlug: 'software-engineering-at-google',
    fileName:
      '20 oct 26\\Software Engineering at Google (Hyrum Wright, Tom Manshreck, Titus Winters) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'Software Engineering at Google: Lessons Learned from Programming Over Time',
    author: 'Titus Winters, Tom Manshreck & Hyrum Wright',
    category: 'Systems & Architecture',
    status: 'queued',
  },
  {
    bookSlug: 'the-brand-mapping-strategy',
    fileName:
      '20 oct 26\\The Brand Mapping Strategy Design, Build, and Accelerate Your Brand (Karen Leland) (z-library.sk, 1lib.sk, z-lib.sk).pdf',
    format: 'PDF',
    title: 'The Brand Mapping Strategy: Design, Build, and Accelerate Your Brand',
    author: 'Karen Leland',
    category: 'Product & Design',
    status: 'queued',
  },
];
