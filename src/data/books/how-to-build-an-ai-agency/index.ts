import { BookMasteryPackage } from '../../../types/book';
import { hbaaCh01Mastery, hbaaCh02Mastery } from './ch01-ch02';
import { hbaaCh03Mastery, hbaaCh04Mastery } from './ch03-ch04';
import { hbaaCh05Mastery, hbaaCh06Mastery, hbaaCh07Mastery } from './ch05-ch07';

export const howToBuildAnAiAgencyBook: BookMasteryPackage = {
  bookSlug: 'how-to-build-an-ai-agency',
  title: 'How to Build an AI Agency',
  subtitle: 'The Complete Blueprint for Starting, Scaling, and Profiting from Your AI Consulting Business',
  author: 'Vedant Pandya',
  publicationYear: 2025,
  publisher: 'Independently Published',
  coverAsset: 'cover.png',
  totalChapters: 7,
  totalSourceWords: 30271,
  totalFiguresExtracted: 15,
  corePromise:
    'An end-to-end operational and technical blueprint for launching, pricing, staffing, delivering, and scaling a profitable AI consulting and automation agency—synthesizing all 21 chapters into 7 architectural modules spanning business models, unit economics, agentic tech stacks, vertical client acquisition, SOW governance, internal dogfooding, and custom AI CRM engineering.',
  architecturalOverview:
    'The blueprint consolidates 21 chapters into seven high-leverage execution modules: (1) Agency Foundations & Revenue Architecture [Module 1 / Ch 1–3: Daily operational rhythm, four-pillar AI service taxonomy, and project vs. retainer vs. value-based pricing mechanics]; (2) Financial Economics, Team Topology & AI Stack [Module 2 / Ch 4–6: Gross/net margin discipline, LTV:CAC unit economics, hybrid POD staffing, and selecting foundation models, vector stores, and orchestration frameworks]; (3) Workflow Automation, Autonomous Agents & RAG Chatbots [Module 3 / Ch 7–9: Process mapping, Make/n8n/Zapier automation, ReAct multi-agent workflows, and grounded RAG customer systems]; (4) Vertical Positioning, Outbound Acquisition & Enterprise Closing [Module 4 / Ch 10–12: High-ROI vertical selection, omnichannel outbound/inbound engines, and consultative ROI discovery closing]; (5) Bulletproof SOWs, Agile AI Delivery & Partner Ecosystems [Module 5 / Ch 13–15: IP ownership, probabilistic performance disclaimers, change-request gates, phased PoC-to-production delivery, and technology vendor alliances]; (6) Productized Scaling, Internal AI Dogfooding & Ethical Governance [Module 6 / Ch 16–18: Productized services, internal agency automation, GDPR/HIPAA compliance, and bias auditing]; and (7) Founder Resilience, Multi-Agent Roadmap & Custom AI CRM Engineering [Module 7 / Ch 19–21: Sustainable founder cadence, next-generation autonomous systems, and building a full-stack PostgreSQL + FastAPI + React AI-native CRM from scratch].',
  chapters: [
    hbaaCh01Mastery,
    hbaaCh02Mastery,
    hbaaCh03Mastery,
    hbaaCh04Mastery,
    hbaaCh05Mastery,
    hbaaCh06Mastery,
    hbaaCh07Mastery,
  ],
};
