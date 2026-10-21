import { BookMasteryPackage } from '../../../types/book';
import { mjmCh01Mastery, mjmCh02Mastery } from './ch01-ch02';
import { mjmCh03Mastery, mjmCh04Mastery } from './ch03-ch04';
import { mjmCh05Mastery, mjmCh06Mastery } from './ch05-ch06';

export const midjourneyMasteryBook: BookMasteryPackage = {
  bookSlug: 'midjourney-mastery',
  title: 'Midjourney Mastery: The Ultimate Book of Prompts',
  subtitle: 'Visual Prompt Architecture, Parameter Mechanics, and Commercial Style Taxonomies',
  author: 'Andreea Todinca',
  publicationYear: 2023,
  publisher: 'Independently Published',
  coverAsset: 'cover.png',
  totalChapters: 6,
  totalSourceWords: 23477,
  totalFiguresExtracted: 500,
  corePromise:
    'A systematic visual prompt engineering compendium for Midjourney—deconstructing command syntax, parameter controls (--ar, --stylize, --chaos, --weird, --no, --tile, multi-prompt :: weights), camera optics, lighting rigs, fine-art mediums, commercial vector/merchandise design, and Niji anime/manga conditioning.',
  architecturalOverview:
    'The work is structured across six visual domain modules: (1) Midjourney Foundations, Prompt Syntax & Parameter Control [Ch 1: Structural prompt anatomy, slash commands (/imagine, /blend, /describe, /shorten), aspect ratio geometry, stylization vs. chaos trade-offs, negative token pruning, and multi-prompt :: weighting]; (2) Digital Art & Concept Conditioning [Ch 2: 3D rendering engines, isometric/low-poly geometry, cyberpunk/synthwave/retrowave aesthetics, and fantasy/sci-fi environment design]; (3) Photorealistic Synthesis & Camera Optics [Ch 3: Focal length selection, aperture depth-of-field, studio/volumetric/cinematic lighting rigs, analog film stocks, and framing perspectives]; (4) Drawings, Traditional Paintings & Seamless Patterns [Ch 4: Pencil/charcoal/ink linework, watercolor/oil/impasto pigment physics, historical art movements, and --tile seamless surface patterns]; (5) Commercial Identity & Print-on-Demand Design [Ch 5: Flat vector logos, emblem badges, tattoo flash linework, die-cut white-border stickers, and isolated t-shirt graphics]; and (6) Manga, Anime & Niji Model Conditioning [Ch 6: Niji model tuning, shonen/seinen panel inkwork, cel-shaded anime keyframes, studio aesthetics, and multi-angle character turnaround sheets].',
  chapters: [
    mjmCh01Mastery,
    mjmCh02Mastery,
    mjmCh03Mastery,
    mjmCh04Mastery,
    mjmCh05Mastery,
    mjmCh06Mastery,
  ],
};
