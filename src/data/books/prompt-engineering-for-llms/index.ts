import { BookMasteryPackage } from '../../../types/book';
import { peflCh01Mastery, peflCh02Mastery } from './ch01-ch02';
import { peflCh03Mastery, peflCh04Mastery } from './ch03-ch04';
import { peflCh05Mastery, peflCh06Mastery } from './ch05-ch06';
import { peflCh07Mastery, peflCh08Mastery } from './ch07-ch08';
import { peflCh09Mastery, peflCh10Mastery, peflCh11Mastery } from './ch09-ch11';

export const promptEngineeringForLlmsBook: BookMasteryPackage = {
  bookSlug: 'prompt-engineering-for-llms',
  title: 'Prompt Engineering for LLMs',
  subtitle: 'The Art and Science of Building Large Language Model–Based Applications',
  author: 'John Berryman & Albert Ziegler',
  publicationYear: 2024,
  publisher: "O'Reilly Media",
  coverAsset: 'cover.png',
  totalChapters: 11,
  totalSourceWords: 82050,
  totalFiguresExtracted: 71,
  corePromise:
    'A first-principles engineering manual written by early GitHub Copilot architects on how autoregressive tokenizers, logprobs, RLHF chat templates, elastic context snippets, greedy knapsack prompt assembly, tool-equipped ReAct agency, multi-task DAG workflows, and SOMA evaluations work under the hood.',
  architecturalOverview:
    'The book is structured into three progressive parts: (1) Foundations [Ch 1–3: Evolution from n-grams and seq2seq to GPT transformers, deterministic BPE tokenizers, autoregressive decoding, temperature/logprobs, and the transition from raw document completion to RLHF-aligned ChatML playwriting]; (2) Core Techniques [Ch 4–7: The User-to-Model-to-User application loop, static few-shot anchoring traps vs. dynamic lexical/neural RAG and hierarchical summarization, elastic snippet formatting with additive/subtractive greedy knapsack prompt assembly, and taming completions via preambles, postscripts, and token logprobs]; and (3) Agency, Workflows & Evaluation [Ch 8–11: Conversational agency with tool definitions, Chain-of-Thought, and ReAct loops; structured pipeline, DAG, and cyclic graph LLM workflows; offline SOMA (Specific, Ordinal, Multi-aspect) evaluations and online A/B telemetry; and multimodal/intelligence frontiers].',
  chapters: [
    peflCh01Mastery,
    peflCh02Mastery,
    peflCh03Mastery,
    peflCh04Mastery,
    peflCh05Mastery,
    peflCh06Mastery,
    peflCh07Mastery,
    peflCh08Mastery,
    peflCh09Mastery,
    peflCh10Mastery,
    peflCh11Mastery,
  ],
};
