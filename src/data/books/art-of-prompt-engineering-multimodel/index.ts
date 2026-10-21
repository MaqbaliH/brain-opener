import { BookMasteryPackage } from '../../../types/book';
import { apemCh01Mastery, apemCh02Mastery } from './ch01-ch02';
import { apemCh03Mastery } from './ch03';

export const artOfPromptEngineeringMultimodelBook: BookMasteryPackage = {
  bookSlug: 'art-of-prompt-engineering-multimodel',
  title: 'The Art of Prompt Engineering for Multimodal AI',
  subtitle: 'Harmonizing Text, Images, and Audio with GPT-4, CLIP, and AudioLM',
  author: 'Yash Jain',
  publicationYear: 2024,
  publisher: 'Independently Published',
  coverAsset: 'cover.png',
  totalChapters: 3,
  totalSourceWords: 6519,
  totalFiguresExtracted: 14,
  corePromise:
    'A cross-modal prompt engineering handbook for synchronizing linguistic conditioning (GPT-4), contrastive visual-semantic alignment (CLIP), and hierarchical acoustic token generation (AudioLM) into unified, personalized, and ethically governed multimodal AI workflows.',
  architecturalOverview:
    'The handbook consolidates eight core chapters and appendices into three cross-modal engineering modules: (1) Multimodal Foundations, GPT-4 Text Conditioning & CLIP Visual Alignment [Module 1 / Ch 1–3: Joint embedding spaces, structured linguistic role/constraint prompting with GPT-4, and steering image synthesis and visual retrieval through CLIP contrastive text-image cosine alignment]; (2) AudioLM Sonic Synthesis, Cross-Modal Harmonization & Personalization [Module 2 / Ch 4–7: Semantic vs. acoustic token conditioning in AudioLM, synchronizing text narratives with visual aesthetics and sonic prosody, chained cross-modal refinement, and user-specific style adaptation]; and (3) Future Multimodal Trajectories, Ethical Governance & Practical Toolkit [Module 3 / Ch 8 + Appendices: Real-time embodied/video-audio-text convergence, provenance watermarks, dataset bias mitigation, and reusable cross-modal prompt templates].',
  chapters: [apemCh01Mastery, apemCh02Mastery, apemCh03Mastery],
};
