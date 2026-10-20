import { BookMasteryPackage } from '../../../types/book';
import { afCh01Mastery, afCh02Mastery, afCh03Mastery, afCh04Mastery } from './ch01-ch04';
import { afCh05Mastery, afCh06Mastery, afCh07Mastery, afCh08Mastery } from './ch05-ch08';
import { afCh09Mastery, afCh10Mastery, afCh11Mastery, afCh12Mastery } from './ch09-ch12';
import { afCh13Mastery, afCh14Mastery, afCh15Mastery, afCh16Mastery } from './ch13-ch16';
import { afCh17Mastery, afCh18Mastery, afCh19Mastery } from './ch17-ch19';
import { afCh20Mastery, afCh21Mastery, afCh22Mastery } from './ch20-ch22';

export const agentforceBook: BookMasteryPackage = {
  bookSlug: 'agentforce-harnessing-agency-of-ai',
  title: 'Agentforce',
  subtitle: 'Harnessing the Agency of AI to Scale, Grow, and Lead Any Industry',
  author: 'Martin Kihn',
  publicationYear: 2025,
  publisher: 'John Wiley & Sons',
  coverAsset: 'cover.png',
  totalChapters: 22,
  totalSourceWords: 57981,
  totalFiguresExtracted: 19,
  corePromise:
    'An inside architectural and operational blueprint for the "Third Wave" of enterprise AI—moving beyond rigid decision-tree chatbots and human-tethered co-pilots to autonomous digital workforces governed by the 5 Attributes of an AI Agent (Role, Data, Actions, Guardrails, Channel), Data Cloud zero-copy harmonization, the Einstein Trust Layer, and the Atlas Reasoning Engine.',
  architecturalOverview:
    'The book unfolds across six progressive movements: (1) The Third Wave of AI & Agent Mechanics [Ch 1–4: The evolution from predictive AI and chatbots to autonomous agents, Topics, Actions, and enterprise use cases like Wiley and OpenTable]; (2) Platform Architecture, Agentic Loops & Trust [Ch 5–8: Why agents require a unified metadata platform, how agents differ from co-pilots, the Agentic Loop, and the Einstein Trust Layer (zero data retention, PII masking, prompt defense, toxicity scoring)]; (3) Data Cloud, RAG & The Atlas Reasoning Engine [Ch 9–12: Zero-copy federation, identity resolution, hybrid RAG, the Atlas Reasoning Engine\'s System 2 ReAct/ToT loop, and controlling agents via Prompt Builder and Agent Builder]; (4) Sandbox Testing, Out-of-the-Box Fleet & Custom Agent Lifecycle [Ch 13–16: Batch testing and LLM-as-a-Judge in Testing Center, prebuilt Service/Sales/Marketing/Commerce/Employee agents, the 6-stage low-code lifecycle, and JTBD ideation workshops]; (5) Anthropomorphism, Data Governance & ROI Economics [Ch 17–19: Persona calibration, the 5 Pillars of AI data governance, and building a consumption-based ROI business case]; and (6) Human-Agent Workforce Evolution & Launch Playbook [Ch 20–22: Orchestrator career paths, Trailhead onboarding, and the synthesis of enterprise agency].',
  chapters: [
    afCh01Mastery,
    afCh02Mastery,
    afCh03Mastery,
    afCh04Mastery,
    afCh05Mastery,
    afCh06Mastery,
    afCh07Mastery,
    afCh08Mastery,
    afCh09Mastery,
    afCh10Mastery,
    afCh11Mastery,
    afCh12Mastery,
    afCh13Mastery,
    afCh14Mastery,
    afCh15Mastery,
    afCh16Mastery,
    afCh17Mastery,
    afCh18Mastery,
    afCh19Mastery,
    afCh20Mastery,
    afCh21Mastery,
    afCh22Mastery,
  ],
};
