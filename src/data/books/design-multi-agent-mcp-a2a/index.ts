import { BookMasteryPackage } from '../../../types/book';
import { dmmaCh01Mastery, dmmaCh02Mastery } from './ch01-ch02';
import { dmmaCh03Mastery, dmmaCh04Mastery } from './ch03-ch04';
import { dmmaCh05Mastery, dmmaCh06Mastery } from './ch05-ch06';
import { dmmaCh07Mastery, dmmaCh08Mastery } from './ch07-ch08';
import { dmmaCh09Mastery, dmmaCh10Mastery } from './ch09-ch10';
import { dmmaCh11Mastery, dmmaCh12Mastery } from './ch11-ch12';

export const designMultiAgentMcpA2aBook: BookMasteryPackage = {
  bookSlug: 'design-multi-agent-mcp-a2a',
  title: 'Design Multi-Agent AI Systems Using MCP and A2A',
  subtitle:
    'Engineer Your Own Python-Based Agentic AI Framework with Tool Use, Memory, and Multi-Agent Workflows',
  author: 'Gigi Sayfan',
  publicationYear: 2026,
  publisher: 'Packt Publishing',
  coverAsset: 'cover.png',
  totalChapters: 12,
  totalSourceWords: 110624,
  totalFiguresExtracted: 12,
  corePromise:
    'An end-to-end engineering blueprint for building a custom Python agentic framework (AI-6) from first principles and scaling it into a distributed Kubernetes DevOps multi-agent system (MAKDO) powered by the Model Context Protocol (MCP) for standardized tool discovery and the Agent2Agent (A2A) protocol for inter-agent task delegation.',
  architecturalOverview:
    'The book is structured in three progressive parts: (1) Foundations of Agentic AI [Ch 1–3: Evolution from symbolic AI to foundation-model agents, the Sense-Think-Act loop in AutoGen, memory/context state, and building a single-agent Kubernetes assistant (k8s-ai)]; (2) Building Your Own Agentic AI Framework (AI-6) [Ch 4–7: Provider-agnostic LLMProvider interfaces (OpenAI & Ollama), custom CLI/filesystem/session-memory tool specifications, interactive Slack Bot and Chainlit web UIs with human-in-the-loop safeguards, and universal MCP client/server integration via FastMCP and MCPTool]; and (3) Constructing, Debugging & Deploying Multi-Agent Systems with A2A [Ch 8–12: AgentTool & A2ATool abstractions, Agent Cards and A2A task lifecycles, the 4-agent MAKDO Kubernetes DevOps team (Coordinator, Analyzer, Fixer, Slack_Bot), distributed tracing/deadlock debugging, dual-KinD cross-cluster Kubernetes deployment with RBAC, and future frontiers in million-token contexts, world models, and the AP2 agent payment protocol].',
  chapters: [
    dmmaCh01Mastery,
    dmmaCh02Mastery,
    dmmaCh03Mastery,
    dmmaCh04Mastery,
    dmmaCh05Mastery,
    dmmaCh06Mastery,
    dmmaCh07Mastery,
    dmmaCh08Mastery,
    dmmaCh09Mastery,
    dmmaCh10Mastery,
    dmmaCh11Mastery,
    dmmaCh12Mastery,
  ],
};
