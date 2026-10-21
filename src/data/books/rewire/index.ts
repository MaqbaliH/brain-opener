import { BookMasteryPackage } from '../../../types/book';
import { rewireCh01Mastery, rewireCh02Mastery } from './ch01-ch02';
import { rewireCh03Mastery, rewireCh04Mastery, rewireCh05Mastery } from './ch03-ch05';

export const rewireBook: BookMasteryPackage = {
  bookSlug: 'rewire',
  title: 'Rewire: Break the Cycle, Alter Your Thoughts, and Create Lasting Changes',
  subtitle: 'Applied Neuroplasticity, Default Mode Network Regulation, Dopamine Baseline Calibration, and Autonomic Stress Control',
  author: 'Nicole Vignola',
  publicationYear: 2024,
  publisher: 'HarperOne',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 84723,
  totalFiguresExtracted: 6,
  corePromise:
    'A mechanistic clinical and neurobiological blueprint for overriding self-destructive subconscious automatons—combining Hebbian long-term potentiation, Reticular Activating System (RAS) re-indexing, prefrontal cognitive reappraisal, vagal autonomic braking, dopamine baseline restoration, and a 90-day relapse-resilient habit protocol.',
  architecturalOverview:
    'Organized across five progressive neuroplastic stages: (1) Neural Hardware & Subconscious Automatons [Ch 1: Hebbian LTP vs. synaptic pruning, motor-map mental rehearsal, System 1/2 bandwidth asymmetry, the assumptive world, and Fear Incognito]; (2) Attentional Filtering & Rumination Interruption [Ch 2: Evolutionary negativity bias, RAS sensory gatekeeping, breaking Default Mode Network brooding, misplaced rebellion, and dlPFC cognitive reappraisal]; (3) Autonomic Regulation & Trauma Uncoupling [Ch 3: Prefrontal vs. amygdala hijack, physiological sighs and HRV vagal braking, unconscious guilt/shame decoupling, and graded stress inoculation]; (4) Neurochemical Allostasis & Sleep Consolidation [Ch 4: Tonic vs. phasic dopamine baselines, receptor down-regulation, the hedonic treadmill, Slow-Wave/REM dendritic cementing, and aerobic BDNF]; and (5) Relapse-Resilient Maintenance [Ch 5: Defeating "The Undertow", short-timer syndrome, the 5-minute raincoat drill, and 90-day identity lock-in].',
  chapters: [
    rewireCh01Mastery,
    rewireCh02Mastery,
    rewireCh03Mastery,
    rewireCh04Mastery,
    rewireCh05Mastery,
  ],
};
