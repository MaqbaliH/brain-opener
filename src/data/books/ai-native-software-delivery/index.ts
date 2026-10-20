import { BookMasteryPackage } from '../../../types/book';
import { ansdCh01Mastery, ansdCh02Mastery } from './ch01-ch02';
import { ansdCh03Mastery, ansdCh04Mastery } from './ch03-ch04';
import { ansdCh05Mastery, ansdCh06Mastery } from './ch05-ch06';
import { ansdCh07Mastery, ansdCh08Mastery } from './ch07-ch08';
import { ansdCh09Mastery, ansdCh10Mastery } from './ch09-ch10';

export const aiNativeSoftwareDeliveryBook: BookMasteryPackage = {
  bookSlug: 'ai-native-software-delivery',
  title: 'AI-Native Software Delivery',
  subtitle: 'Applying AI Across the Entire Delivery Lifecycle from Commit to Production',
  author: 'Nick Durkin, Eric Minick & Chinmay Gaikwad',
  publicationYear: 2025,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 10,
  totalSourceWords: 60860,
  totalFiguresExtracted: 18,
  corePromise:
    'A systems-level blueprint for evolving from fragmented DevOps 1.0 script pipelines to AI-native DevOps 2.0 platforms—automating source control, continuous integration, supply chain security, chaos engineering, progressive delivery, FinOps, and internal developer platforms across the post-commit software lifecycle.',
  architecturalOverview:
    'The book progresses across four post-commit delivery movements: (1) Foundations & Source Control [Ch 1–2: Transitioning from DIY DevOps 1.0 toolchains to unified DevOps 2.0 platforms, distributed Git workflows, trunk-based development, monorepo remote caching, and role-based SCM governance]; (2) Continuous Integration, Pre-Production Testing & Supply Chain Security [Ch 3–5: AI-accelerated build caching and Test Intelligence, "hollowing-out-the-middle" intent-based testing, and shift-left DevSecOps with SLSA provenance and SBOM remediation]; (3) Resilience, Progressive Production Delivery & Experimentation [Ch 6–8: Error-budget-governed chaos engineering, Policy-as-Code deployment gates, blue-green/canary rollouts with Continuous Verification, and statistically rigorous feature flag experimentation]; and (4) Cloud Economics & Platform Engineering [Ch 9–10: Autonomous FinOps right-sizing and spot orchestration, culminating in Internal Developer Portals (IDPs) and Golden Paths that eliminate developer cognitive load].',
  chapters: [
    ansdCh01Mastery,
    ansdCh02Mastery,
    ansdCh03Mastery,
    ansdCh04Mastery,
    ansdCh05Mastery,
    ansdCh06Mastery,
    ansdCh07Mastery,
    ansdCh08Mastery,
    ansdCh09Mastery,
    ansdCh10Mastery,
  ],
};
