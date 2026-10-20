import type { ChapterMastery } from '../../../types/book';

export const afCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: "Do You Need a Platform to Do Agents (and What's a Platform, Anyway)?",
  subtitle: 'Why Unified Metadata, Zero-Copy Data Cloud, and Shared Security Outperform Custom DIY Agent Pipelines',
  readingTimeMinutes: 7,
  sourceWordCount: 2313,
  executiveThesis:
    'Autonomous enterprise agents fail in isolated DIY stacks because language models lack native access controls, unified schemas, and workflow execution planes. An integrated platform binds security permissions, metadata semantics, harmonized Data Cloud profiles, and deterministic Flows underneath the reasoning layer so agents act safely on live business records.',
  paradigmShift: {
    oldWay:
      'Engineering teams stitch together standalone LLM APIs, bespoke vector databases, and brittle custom middleware for isolated proof-of-concept pilots.',
    newWay:
      'Enterprises deploy agents atop a unified metadata platform where security, Data Cloud grounding, Einstein guardrails, and Flow actions share one architectural substrate.',
    whyItChanged:
      'Standalone pilots cannot inherit enterprise role hierarchies, audit trails, or real-time CRM state without rebuilding decades of core infrastructure from scratch.'
  },
  customDiagrams: [
    {
      id: 'af-ch05-diag1',
      title: 'The 6-Tier Enterprise Platform Cake Underpinning Agentforce',
      subtitle: 'From foundational security and unified metadata up to autonomous agent execution',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">THE SALESFORCE PLATFORM ADVANTAGE: LAYERED ARCHITECTURE</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">Each upper tier inherits permissions, schema definitions, and execution tools from below</text>

  <!-- Tier 6: Agentforce -->
  <rect x="60" y="75" width="520" height="44" rx="6" fill="#111827" stroke="#EA580C" stroke-width="2"/>
  <text x="80" y="102" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">06. AGENTFORCE LAYER</text>
  <text x="275" y="102" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="11">Autonomous Reasoning • Consumption-Metered Action</text>

  <!-- Tier 5: Einstein AI -->
  <rect x="60" y="130" width="520" height="44" rx="6" fill="#111827" stroke="#2563EB" stroke-width="1.5"/>
  <text x="80" y="157" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">05. EINSTEIN AI</text>
  <text x="275" y="157" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="11">Trust Layer • Prompt Builder • No-Code RAG Retrievers</text>

  <!-- Tier 4: Data Cloud -->
  <rect x="60" y="185" width="520" height="44" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5"/>
  <text x="80" y="212" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">04. DATA CLOUD</text>
  <text x="275" y="212" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="11">Harmonized Customer Graph • Zero-Copy Lakehouse • PDFs</text>

  <!-- Tier 3: Unified Metadata -->
  <rect x="60" y="240" width="520" height="44" rx="6" fill="#111827" stroke="#6B7280" stroke-width="1.5"/>
  <text x="80" y="267" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">03. UNIFIED METADATA</text>
  <text x="275" y="267" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="11">Common Semantic Dictionary Across All Clouds &amp; Objects</text>

  <!-- Tier 2: Platform Services -->
  <rect x="60" y="295" width="520" height="44" rx="6" fill="#111827" stroke="#6B7280" stroke-width="1.5"/>
  <text x="80" y="322" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">02. PLATFORM SERVICES</text>
  <text x="275" y="322" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="11">Declarative Flows • Automations • MuleSoft Open APIs</text>

  <!-- Tier 1: Core Security -->
  <rect x="60" y="350" width="520" height="44" rx="6" fill="#111827" stroke="#059669" stroke-width="2"/>
  <text x="80" y="377" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">01. BEDROCK SECURITY</text>
  <text x="275" y="377" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="11">Role Permissions • Object/Field ACLs • Uptime &amp; Governance</text>

  <!-- Vertical Flow Bus on Right -->
  <rect x="615" y="75" width="145" height="319" rx="8" fill="#1F2937" stroke="#EA580C" stroke-width="1.5"/>
  <text x="687" y="115" text-anchor="middle" fill="#EA580C" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">INHERITED</text>
  <text x="687" y="132" text-anchor="middle" fill="#EA580C" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">CONTEXT BUS</text>
  <line x1="687" y1="365" x2="687" y2="155" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4"/>
  <polygon points="687,145 681,157 693,157" fill="#EA580C"/>
  <line x1="580" y1="97" x2="615" y2="97" stroke="#EA580C" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="580" y1="207" x2="615" y2="207" stroke="#059669" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="580" y1="317" x2="615" y2="317" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="580" y1="372" x2="615" y2="372" stroke="#059669" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="687" y="255" text-anchor="middle" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">Zero Re-Engineering</text>
  <text x="687" y="273" text-anchor="middle" fill="#9CA3AF" font-family="Inter, sans-serif" font-size="10">ACLs + Flows + RAG</text>
</svg>`,
      bierutCaption:
        'Read from bottom to top: Agentforce sits at the apex not as an isolated chatbot widget, but as the execution consumer of five pre-existing infrastructure layers.',
      annotations: [
        {
          step: '01',
          label: 'Bedrock Security & Services',
          explanation: 'Decades-hardened access controls, MuleSoft APIs, and declarative Flows govern what data an agent can see and mutate.'
        },
        {
          step: '02',
          label: 'Unified Metadata & Data Cloud',
          explanation: 'Metadata translates external and internal objects into one semantic language.'
        },
        {
          step: '03',
          label: 'Einstein AI & Agentforce Apex',
          explanation: 'Einstein enforces Trust Layer guardrails and Prompt Builder templates so Agentforce can reason and execute work cleanly.'
        }
      ]
    },
    {
      id: 'af-ch05-diag2',
      title: 'The DIY Pilot Trap vs. Platform-Integrated Deployment',
      subtitle: 'Why isolated proof-of-concept agents stall before reaching enterprise production',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">UNINFORMATIVE DIY PILOTS VS. ENTERPRISE PLATFORM ROLLOUT</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">Why "UI in search of a body" prototypes collapse under enterprise governance</text>

  <!-- Top Track: DIY Trap -->
  <rect x="32" y="80" width="736" height="140" rx="8" fill="#111827" stroke="#DC2626" stroke-width="1.5"/>
  <text x="52" y="106" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">PATH A: BESPOKE DIY AI PILOT ("DON'T DIY YOUR AI")</text>

  <rect x="52" y="122" width="170" height="76" rx="6" fill="#1F2937" stroke="#6B7280"/>
  <text x="137" y="152" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="600">Raw LLM + Startup UI</text>
  <text x="137" y="172" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="10">Static Snapshot Data</text>

  <line x1="222" y1="160" x2="285" y2="160" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="285" y="122" width="210" height="76" rx="6" fill="#1F2937" stroke="#DC2626"/>
  <text x="390" y="148" text-anchor="middle" fill="#FCA5A5" font-family="Inter, sans-serif" font-size="12" font-weight="700">Missing Platform Body</text>
  <text x="390" y="166" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="10">No Field ACLs • Stale Weights</text>
  <text x="390" y="182" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="10">No Live Workflow Hooks</text>

  <line x1="495" y1="160" x2="555" y2="160" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="555" y="122" width="190" height="76" rx="6" fill="#450A0A" stroke="#DC2626" stroke-width="2"/>
  <text x="650" y="150" text-anchor="middle" fill="#FEE2E2" font-family="Inter, sans-serif" font-size="12" font-weight="700">PRODUCTION BLOCKED</text>
  <text x="650" y="170" text-anchor="middle" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="10">Security Veto / Disgorgement</text>

  <!-- Bottom Track: Platform Path -->
  <rect x="32" y="245" width="736" height="145" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5"/>
  <text x="52" y="271" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">PATH B: PLATFORM-NATIVE AGENTFORCE DEPLOYMENT</text>

  <rect x="52" y="288" width="170" height="78" rx="6" fill="#1F2937" stroke="#2563EB"/>
  <text x="137" y="318" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="600">Data Cloud + Metadata</text>
  <text x="137" y="338" text-anchor="middle" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">Zero-Copy Live Grounding</text>

  <line x1="222" y1="327" x2="285" y2="327" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="285" y="288" width="210" height="78" rx="6" fill="#1F2937" stroke="#EA580C"/>
  <text x="390" y="315" text-anchor="middle" fill="#FDBA74" font-family="Inter, sans-serif" font-size="12" font-weight="700">Inherited Flows &amp; Trust</text>
  <text x="390" y="334" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="10">Pre-Built Role Permissions</text>
  <text x="390" y="350" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="10">MuleSoft &amp; CRM Actions</text>

  <line x1="495" y1="327" x2="555" y2="327" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="555" y="288" width="190" height="78" rx="6" fill="#064E3B" stroke="#059669" stroke-width="2"/>
  <text x="650" y="318" text-anchor="middle" fill="#ECFDF5" font-family="Inter, sans-serif" font-size="12" font-weight="700">ENTERPRISE SCALE</text>
  <text x="650" y="338" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">Auditable Production ROI</text>
</svg>`,
      bierutCaption:
        'Contrast Path A with Path B: an isolated LLM prototype proves only that a model can generate text.',
      annotations: [
        {
          step: '01',
          label: 'Feature in Search of a Home',
          explanation: 'DIY prototypes demonstrate conversational fluency on static extracts but lack live connections to operational workflows.'
        },
        {
          step: '02',
          label: 'Algorithmic Disgorgement Risk',
          explanation: 'Training custom models on unpermissioned data exposes enterprises to regulatory mandates forcing complete model deletion.'
        },
        {
          step: '03',
          label: 'Platform-First Execution',
          explanation: 'Binding agents to Data Cloud and declarative Flows guarantees immediate compliance with user-level access policies.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'af-ch05-mm1',
      name: 'The Universal Metadata Esperanto',
      tagline: 'Shared schema definitions eliminate cross-cloud translation tax',
      naiveIntuition:
        'Connecting an AI agent to sales, service, commerce, and external data warehouses requires writing custom data adapters for every application pair.',
      firstPrinciplesReality:
        'A metadata-driven platform defines data models once in a shared semantic registry so every cloud application and agent interprets fields identically.',
      howToApply:
        'Map external datasets into the platform metadata dictionary via Data Cloud before building agent prompts or workflow actions.'
    },
    {
      id: 'af-ch05-mm2',
      name: 'The Uninformative Pilot Illusion',
      tagline: 'Testing a raw LLM on static files does not test enterprise agency',
      naiveIntuition:
        'If a prototype agent built with open-source scripts answers sample customer questions in a sandbox, it is 80% ready for enterprise deployment.',
      firstPrinciplesReality:
        'Conversational generation is the easiest 10% of the stack;',
      howToApply:
        'Evaluate every agent pilot against live permission boundaries, real-time data freshness, and transactional Flow execution rather than demo chat transcripts.'
    },
    {
      id: 'af-ch05-mm3',
      name: 'Zero-Copy Federation over ETL Replication',
      tagline: 'Query external lakehouses in place without duplicating terabytes',
      naiveIntuition:
        'To ground agents in enterprise data sitting in Snowflake or Databricks, teams must run nightly ETL pipelines that copy records into CRM storage.',
      firstPrinciplesReality:
        'Zero-copy virtualization mounts external lakehouse tables into Data Cloud via metadata pointers.',
      howToApply:
        'Configure zero-copy federation connectors for high-volume external warehouses so agents read live analytical attributes on demand.'
    }
  ],
  deepSections: [
    {
      id: 'af-ch05-sec1',
      sectionNumber: '5.1',
      title: 'From Clock-and-Fan to the Platform Rainbow',
      subtitle: 'How Customer 360, Data Cloud, and the core Platform align underneath Agentforce',
      coreMechanism:
        'For years, Salesforce visualized its portfolio as a radial "clock and fan" placing the customer at the center surrounded by application clouds. Launching Agentforce required inverting this mental map into a horizontal architectural stack where Agentforce sits at the apex above Customer 360 applications, Data Cloud, and the foundational Salesforce Platform.\n\nEach horizontal tier solves a distinct systems dependency. Customer 360 encompasses domain applications (Sales, Service, Marketing, Commerce, Industry Clouds) alongside Slack for workflow collaboration, Tableau for analytics, and MuleSoft for API integration. Data Cloud harmonizes fragmented customer records into a common data model, while the bedrock Platform supplies security, permissions, and runtime infrastructure.',
      keyTakeaways: [
        'Agentforce is not a standalone point product; it operates as the top execution tier of the integrated Salesforce stack.',
        'Data Cloud serves as a mandatory prerequisite for Agentforce because agents require harmonized structured and unstructured context.'
      ],
      commonPitfalls: [
        'Treating Agentforce as an isolated chat widget disconnected from underlying Customer 360 workflows and MuleSoft APIs.',
        'Deploying agents before unifying fragmented customer identities across Sales, Service, and Marketing clouds.'
      ],
      figures: [
        {
          file: 'c05f001.png',
          originalLabel: 'Figure 5.1 Agentforce and the Salesforce platform',
          bierutTitle: 'Why Agentforce Sits Atop the Enterprise Architecture Stack Instead of Beside It',
          editorialAnalysis:
            'This updated "Salesforce-on-a-page" schematic replaces the legacy clock-and-fan diagram with a strict vertical dependency hierarchy.',
          keyTakeaways: [
            'Horizontal layering demonstrates that agent autonomy depends on unified data and application APIs below.',
            'Slack, Tableau, and MuleSoft act as core connective tissue inside the Customer 360 application tier.'
          ]
        }
      ]
    },
    {
      id: 'af-ch05-sec2',
      sectionNumber: '5.2',
      title: 'Deconstructing the Six-Layer Platform Cake',
      subtitle: 'Security, Flows, Unified Metadata, Data Cloud, and Einstein AI as agent building blocks',
      coreMechanism:
        'Explaining the Platform Advantage from first principles requires tracing six stacked technical capabilities from the bottom up. At the base, Platform Security enforces fine-grained user and role permissions so agents never expose unauthorized records. Above security, Platform Services provide open APIs via MuleSoft and declarative Flows that sequence business logic without custom code.\n\nThe third tier, Unified Metadata, acts as a universal semantic dictionary: once an object schema is defined, every cloud and external zero-copy table speaks the same language. Data Cloud then ingests unstructured PDFs and zero-copy lakehouse tables (Snowflake, Databricks) for Einstein AI—which bundles the Trust Layer, Prompt Builder, and no-code RAG retrievers directly beneath Agentforce.',
      keyTakeaways: [
        'Unified metadata allows external data federated via Data Cloud to behave as if it resided natively inside CRM.',
        'Einstein AI functions as an internal control plane combining the Trust Layer, Prompt Builder, and RAG retrievers.'
      ],
      commonPitfalls: [
        'Replicating terabytes of external warehouse data via fragile ETL jobs instead of enabling Data Cloud zero-copy federation.',
        'Hardcoding business logic inside raw LLM prompts rather than invoking deterministic Platform Flows.'
      ],
      figures: [
        {
          file: 'c05f002.png',
          originalLabel: "Figure 5.2 Vivek's whiteboard of the Salesforce Platform",
          bierutTitle: 'How a Six-Tier Whiteboard Maps Customer Business Goals to Technical Platform Primitives',
          editorialAnalysis:
            'Vivek Mahapatra’s whiteboard progresses from customer anxieties on the left (security, vendor lock-in, unstructured data) and business outcomes on the right (revenue, efficiency) to the six-tiered platform cake in the center.',
          keyTakeaways: [
            'Always anchor platform architecture discussions in customer risk constraints and measurable productivity goals.',
            'Every tier from Security and Unified Metadata up to Einstein AI removes an integration headache that DIY teams must otherwise build.'
          ]
        }
      ]
    },
    {
      id: 'af-ch05-sec3',
      sectionNumber: '5.3',
      title: 'Why "Don’t DIY Your AI" Exposes the Prototype Trap',
      subtitle: 'Model staleness, algorithmic disgorgement, and the failure of uninformative pilots',
      coreMechanism:
        'With global AI investment approaching $200 billion and thousands of point-solution startups entering the market, engineering teams frequently attempt to assemble custom agent stacks from scratch. However, training proprietary models incurs massive compute costs, suffers from immediate knowledge cutoff staleness, and creates opaque weights where individual customer records cannot be audited or selectively deleted—exposing firms to FTC algorithmic disgorgement penalties.\n\nEven when DIY teams wrap pre-trained models in custom code, their proofs of concept become "uninformative pilots." A standalone prototype demonstrates only that an LLM can chat over sample documents; it fails to validate enterprise-scale permissions, real-time CRM integration, or transactional reliability, leaving teams with a user interface in search of an operational body.',
      keyTakeaways: [
        'Baking unpermissioned data into custom model weights risks regulatory forced deletion of the entire model.',
        'An agent pilot is uninformative unless it tests live enterprise data integration, access controls, and workflow execution.'
      ],
      commonPitfalls: [
        'Mistaking a flashy open-source chat demo on static CSV extracts for an enterprise-ready autonomous system.',
        'Underestimating the hidden maintenance cost of building custom security, API management, and audit pipelines alongside an LLM.'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Enterprise Platform vs. DIY Custom Stack vs. Point Startup Tool',
      description: 'Evaluating architectural approaches for deploying autonomous business agents at scale.',
      headers: ['Dimension', 'Salesforce Platform + Agentforce', 'Bespoke DIY AI Stack', 'Point Startup AI Widget'],
      rows: [
        ['Security & Permissions', 'Inherits existing CRM role/field ACLs', 'Must rebuild auth and ACLs from scratch', 'Isolated silo with coarse permissions'],
        ['External Data Access', 'Zero-copy federation via Data Cloud', 'Custom ETL pipelines and sync lag', 'Limited webhook or CSV imports'],
        ['Schema Interoperability', 'Unified metadata across all clouds', 'Brittle custom JSON glue code', 'Proprietary schema locked to vendor'],
        ['Workflow Execution', 'Native declarative Flows & MuleSoft APIs', 'Custom microservice orchestration', 'Shallow read-only or basic ticket hooks'],
        ['Compliance & Disgorgement Risk', 'Zero-retention Trust Layer grounding', 'High risk if weights trained on raw PII', 'Opaque third-party data handling']
      ],
      verdictRule:
        'Use the unified Salesforce Platform whenever agents must enforce enterprise access permissions, read live multi-cloud customer state, and trigger transactional workflows.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'af-ch05-scen1',
      title: 'Rescuing an Uninformative Financial Services Agent Pilot',
      roleAndContext: 'VP of Enterprise Architecture at a national wealth management firm evaluating an autonomous client service agent.',
      symptomOrFailure:
        'An innovation team spent six months building a custom LangChain + open-source vector DB prototype that passed demo reviews, but InfoSec blocked production rollout because it bypassed CRM field-level security and lacked live portfolio data.',
      naiveFixAndWhyItFails:
        'Attempting to write custom middleware to mirror Salesforce sharing rules into the external vector database duplicates complex permission logic and introduces dangerous synchronization delays.',
      firstPrinciplesSolution:
        'Migrate the agent onto Agentforce backed by Data Cloud zero-copy connectors to Snowflake and native Platform permissions so every RAG query automatically enforces the logged-in user’s exact access controls.',
      measurableOutcome:
        'Passed InfoSec compliance audit in 3 weeks with zero data replication and 100% enforcement of existing CRM sharing rules.'
    },
    {
      id: 'af-ch05-scen2',
      title: 'Preventing Algorithmic Disgorgement in Healthcare Support',
      roleAndContext: 'Chief Data Officer at a medical device enterprise modernizing technical support with AI.',
      symptomOrFailure:
        'A vendor proposed fine-tuning an open-weight LLM directly on five years of historical support tickets containing patient and clinician identifiers.',
      naiveFixAndWhyItFails:
        'Running basic regex scrubbing before fine-tuning still bakes proprietary clinical records into opaque model weights that cannot be audited or selectively erased upon regulatory request.',
      firstPrinciplesSolution:
        'Index support PDFs and ticket histories inside Data Cloud and ground pre-trained models dynamically at runtime through Einstein AI and the zero-retention Trust Layer.',
      measurableOutcome:
        'Eliminated model retraining costs and achieved 100% GDPR/HIPAA right-to-be-forgotten compliance by deleting records at the Data Cloud source layer.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch05-q1',
        scenarioPrompt:
          'A software engineering lead argues that the company can save licensing costs by wiring a frontier LLM API directly to a standalone vector database for customer service agents. According to the Platform Advantage framework, what is the primary structural flaw in this DIY argument?',
        options: [
          {
            label: 'A',
            text: 'Frontier LLM APIs cannot process unstructured text documents without Salesforce proprietary weights.',
            isCorrect: false,
            explanation: 'Frontier LLMs process text natively; the gap lies in surrounding enterprise infrastructure, not token generation.'
          },
          {
            label: 'B',
            text: 'The DIY team must also rebuild enterprise security permissions, unified metadata schemas, API orchestration, and audit guardrails from scratch.',
            isCorrect: true,
            explanation: 'An LLM is only a small fraction of an enterprise system;'
          },
          {
            label: 'C',
            text: 'Standalone vector databases cannot store numerical embeddings larger than 512 dimensions.',
            isCorrect: false,
            explanation: 'Vector dimension capacity is not the bottleneck; permission inheritance and live workflow integration are.'
          },
          {
            label: 'D',
            text: 'Open-source frameworks prohibit calling external REST APIs during conversational turns.',
            isCorrect: false,
            explanation: 'Open-source tools can call APIs, but lack unified metadata and pre-governed enterprise Flows.'
          }
        ]
      },
      {
        id: 'af-ch05-q2',
        scenarioPrompt:
          'Why does Salesforce’s Unified Metadata architecture matter specifically when an Agentforce agent needs to reason across Sales Cloud, Service Cloud, and external data federated through Data Cloud?',
        options: [
          {
            label: 'A',
            text: 'It compresses LLM weights so models run locally on employee laptops without network calls.',
            isCorrect: false,
            explanation: 'Unified metadata governs data definitions and object schemas, not local LLM weight quantization.'
          },
          {
            label: 'B',
            text: 'It ensures that once a data model is defined, every cloud and translated external dataset shares the same semantic language and behaves like native CRM data.',
            isCorrect: true,
            explanation: 'Metadata-driven architecture gives all platform services and clouds a single shared understanding of objects, fields, and relationships.'
          },
          {
            label: 'C',
            text: 'It automatically rewrites legacy COBOL mainframes into Python microservices.',
            isCorrect: false,
            explanation: 'Metadata maps data semantics rather than transpiling legacy mainframe source code.'
          },
          {
            label: 'D',
            text: 'It replaces the need for Data Cloud by storing raw PDF files directly inside browser cookies.',
            isCorrect: false,
            explanation: 'Data Cloud is still required to ingest, harmonize, and vectorize unstructured documents.'
          }
        ]
      },
      {
        id: 'af-ch05-q3',
        scenarioPrompt:
          'An enterprise stores 80 terabytes of historical order telemetry in Snowflake and wants Agentforce to reference those records during customer inquiries without paying to duplicate or move the data. Which Data Cloud capability solves this directly?',
        options: [
          {
            label: 'A',
            text: 'Zero-copy data federation, which accesses external lakehouse data in place without moving or duplicating it.',
            isCorrect: true,
            explanation: 'Zero-copy virtualization shares and queries external lakehouses like Snowflake and Databricks without the cost or risk of data copying.'
          },
          {
            label: 'B',
            text: 'Nightly CSV batch replication via legacy FTP scripts.',
            isCorrect: false,
            explanation: 'Batch FTP replication duplicates data, adds latency, and increases security exposure.'
          },
          {
            label: 'C',
            text: 'Fine-tuning the base LLM weights on the 80-terabyte Snowflake dump every weekend.',
            isCorrect: false,
            explanation: 'Fine-tuning on massive transactional tables is prohibitively expensive, stale, and opaque.'
          },
          {
            label: 'D',
            text: 'Hardcoding customer order histories inside the system prompt template.',
            isCorrect: false,
            explanation: 'Context window limits and security rules prevent stuffing terabytes of telemetry into static prompts.'
          }
        ]
      },
      {
        id: 'af-ch05-q4',
        scenarioPrompt:
          'What makes an AI agent proof-of-concept an "uninformative pilot" in an enterprise environment?',
        options: [
          {
            label: 'A',
            text: 'Testing the agent for fewer than 18 months before showing executive leadership.',
            isCorrect: false,
            explanation: 'Duration is not the issue; architectural isolation from real workflows and security is.'
          },
          {
            label: 'B',
            text: 'Demonstrating a cool custom workflow in isolation without proving reliable integration into live enterprise data flows, security controls, and operational processes.',
            isCorrect: true,
            explanation: 'An isolated demo is a "UI in search of a body" because it fails to test enterprise data access, permissions, and scale.'
          },
          {
            label: 'C',
            text: 'Using pre-trained foundation models instead of training a proprietary LLM from scratch.',
            isCorrect: false,
            explanation: 'Using pre-trained models is recommended; training from scratch is a costly DIY anti-pattern.'
          },
          {
            label: 'D',
            text: 'Restricting the pilot to a single department such as Customer Service.',
            isCorrect: false,
            explanation: 'Scoping to one domain is fine so long as the pilot runs on real platform data, permissions, and workflows.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'af-ch05-fc1',
        category: 'architecture',
        front: 'What are the three primary horizontal tiers in the updated Salesforce-on-a-page architecture?',
        back: 'The foundational Salesforce Platform at the base, Data Cloud and Customer 360 apps in the middle, and Agentforce arching across the top.',
        mentalHook: 'Platform bedrock -> Data & App body -> Agentforce brain.'
      },
      {
        id: 'af-ch05-fc2',
        category: 'data',
        front: 'Why is Unified Metadata considered a secret weapon for enterprise AI agents?',
        back: 'Metadata describes data structures in a single universal language across all Salesforce clouds and mapped external sources so agents can traverse any object without custom adapters.',
        mentalHook: 'Metadata = Enterprise Esperanto for every cloud and agent.'
      },
      {
        id: 'af-ch05-fc3',
        category: 'data',
        front: 'What two critical data challenges does Data Cloud solve specifically for Agentforce?',
        back: 'It converts unstructured content (like PDFs) into searchable form for AI and accesses external lakehouses (like Snowflake and Databricks) via zero-copy without moving data.',
        mentalHook: 'Data Cloud = Unstructured PDF parser + Zero-Copy lakehouse bridge.'
      },
      {
        id: 'af-ch05-fc4',
        category: 'security',
        front: 'What regulatory risk arises when a company trains a custom DIY LLM on unpermissioned customer data?',
        back: 'Regulators like the FTC can enforce algorithmic disgorgement, legally compelling the company to delete the entire trained model and forfeit its investment.',
        mentalHook: 'Tainted training data = Forced model deletion.'
      },
      {
        id: 'af-ch05-fc5',
        category: 'architecture',
        front: 'What three capabilities are bundled inside the "Einstein AI" mini-platform tier?',
        back: 'The Einstein Trust Layer for data protection, Prompt Builder for permission-aware prompt templates, and RAG with semantic search and no-code retrievers.',
        mentalHook: 'Einstein AI = Trust Layer + Prompt Builder + RAG.'
      },
      {
        id: 'af-ch05-fc6',
        category: 'evaluation',
        front: 'What defines an "uninformative pilot" in enterprise AI testing?',
        back: 'A standalone prototype that proves an LLM can perform an isolated task but provides zero evidence of secure, real-time integration with enterprise workflows and permissions.',
        mentalHook: 'Uninformative Pilot = A UI in search of a platform body.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'af-ch05-fc-chal1',
        conceptTitle: 'The Six-Layer Salesforce Platform Cake vs. DIY Agent Stacks',
        prompt:
          'Explain to a skeptical CTO who asks "Can’t our developers just build an agent ourselves using an LLM API?" why the six layers of the Salesforce Platform are necessary for enterprise production.',
        rubricChecklist: [
          'Identifies that the LLM is only one small component requiring surrounding security, data, and workflow infrastructure.',
          'Explains the bottom layers: built-in Security permissions, Platform Services (Flows and MuleSoft APIs), and Unified Metadata.',
          'Explains Data Cloud’s role in harmonizing data, handling unstructured PDFs, and providing zero-copy lakehouse access.',
          'Contrasts platform deployment against DIY risks: model staleness, lack of data auditability/disgorgement, and uninformative isolated pilots.'
        ],
        modelExplanation:
          'Calling an LLM API is easy, but an enterprise agent cannot act safely without a body. If you build it yourself, you have to rebuild six layers that the Salesforce Platform already provides: row-level security permissions, declarative Flows and MuleSoft APIs to execute actions, Unified Metadata so all applications speak one schema language, Data Cloud to harmonize records and query Snowflake via zero-copy without moving data, and Einstein AI for Trust Layer guardrails and RAG. Without those layers, a DIY project becomes an uninformative pilot—a chat UI disconnected from live permissions and workflows.'
      },
      {
        id: 'af-ch05-fc-chal2',
        conceptTitle: 'Unified Metadata and Zero-Copy Data Cloud as Agent Prerequisites',
        prompt:
          'Explain how Unified Metadata and Data Cloud work together so an Agentforce agent can answer questions using both native CRM records and external enterprise data lakehouses.',
        rubricChecklist: [
          'Defines metadata accurately as data that describes and labels other data structures.',
          'Explains how metadata-driven architecture lets every cloud on the platform understand a data model once defined.',
          'Describes how Data Cloud translates unstructured documents (PDFs) and external lakehouse tables into usable context.',
          'Explains zero-copy access (accessing data in Snowflake or Databricks in place without the cost and risk of copying it).'
        ],
        modelExplanation:
          'Unified metadata acts as a shared dictionary describing how every data object and field is structured across Salesforce. When external data in Snowflake or Databricks is connected through Data Cloud’s zero-copy architecture, the data physically stays in the external lakehouse—avoiding replication cost and security risk—while metadata translates it into native Salesforce semantics. Combined with Data Cloud’s ability to index unstructured PDFs, the agent can query internal CRM records, unstructured files, and external warehouse tables as one unified customer view.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch05-n1',
        label: 'Salesforce Platform Bedrock',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition: 'The foundational infrastructure layer providing security permissions, declarative Flows, open APIs, and unified metadata beneath Data Cloud, Customer 360, and Agentforce.',
        whyItMatters: 'Eliminates the need for enterprises to rebuild access control, uptime, and workflow engines when deploying AI agents.'
      },
      {
        id: 'af-ch05-n2',
        label: 'Unified Metadata Architecture',
        category: 'data',
        chapterNumber: 5,
        importance: 1,
        definition: 'A semantic description layer where defined data models and translated external sources share a single schema language across all platform clouds.',
        whyItMatters: 'Allows agents and Flows to read and act on records across Sales, Service, and external sources without bespoke translation glue.'
      },
      {
        id: 'af-ch05-n3',
        label: 'Data Cloud Zero-Copy',
        category: 'data',
        chapterNumber: 5,
        importance: 2,
        definition: 'Virtualization technology enabling Data Cloud to access and query records in external lakehouses like Snowflake and Databricks without moving or duplicating data.',
        whyItMatters: 'Provides agents with real-time access to massive enterprise data stores without ETL cost, latency, or security exposure.'
      },
      {
        id: 'af-ch05-n4',
        label: 'Customer 360 Suite',
        category: 'architecture',
        chapterNumber: 5,
        importance: 2,
        definition: 'Salesforce’s umbrella portfolio of domain clouds (Sales, Service, Marketing, Commerce, Industry) plus Slack, Tableau, and MuleSoft.',
        whyItMatters: 'Supplies the domain workflows, user interfaces, and integration endpoints through which Agentforce executes business tasks.'
      },
      {
        id: 'af-ch05-n5',
        label: 'Einstein AI Mini-Platform',
        category: 'security',
        chapterNumber: 5,
        importance: 2,
        definition: 'The platform subsystem housing the Trust Layer, Prompt Builder, and no-code RAG retrievers that govern how agents interact with LLMs.',
        whyItMatters: 'Domesticates non-deterministic LLMs by enforcing enterprise permissions, grounding, and output policing.'
      },
      {
        id: 'af-ch05-n6',
        label: 'Uninformative Pilot Trap',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 3,
        definition: 'A failure mode where DIY proofs-of-concept test isolated LLM generation on static data without validating enterprise permissions, live data integration, or workflow execution.',
        whyItMatters: 'Prevents organizations from mistaking standalone startup or open-source demos for production-ready enterprise systems.'
      }
    ],
    edges: [
      {
        source: 'af-ch05-n1',
        target: 'af-ch05-n2',
        relationship: 'part_of',
        explanation: 'Unified Metadata is a core architectural pillar embedded inside the Salesforce Platform bedrock.'
      },
      {
        source: 'af-ch05-n2',
        target: 'af-ch05-n3',
        relationship: 'prerequisite_for',
        explanation: 'Unified metadata maps external zero-copy lakehouse tables so they function like native CRM objects.'
      },
      {
        source: 'af-ch05-n3',
        target: 'af-ch05-n5',
        relationship: 'optimizes',
        explanation: 'Data Cloud zero-copy and unstructured data indexing feed live context into Einstein AI RAG retrievers.'
      },
      {
        source: 'af-ch05-n1',
        target: 'af-ch05-n6',
        relationship: 'mitigates',
        explanation: 'Running pilots directly on the governed Platform with live Flows and permissions prevents the Uninformative Pilot Trap.'
      },
      {
        source: 'af-ch05-n5',
        target: 'af-ch05-n4',
        relationship: 'optimizes',
        explanation: 'Einstein AI safely connects LLM reasoning to Customer 360 applications and Flows.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 2,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapter 5 (c05f001.png and c05f002.png included), zero forbidden clichés, strict high-signal compression.'
  }
};

export const afCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Are Agents Really Different from Chatbots and Co-pilots?',
  subtitle: 'Tracing the Evolution from Deterministic Rule-Bots and Employee Co-Pilots to Autonomous Multi-Modal Agents',
  readingTimeMinutes: 7,
  sourceWordCount: 2588,
  executiveThesis:
    'Traditional chatbots collapse whenever human inputs deviate from rigid, pre-scripted syntax, while co-pilots remain tethered to internal employees as human-in-the-loop software assistants. Autonomous AI agents combine pre-trained LLM comprehension, multi-modal perception, RAG grounding, and ensemble reasoning (ReAct and RAP) to plan and execute multi-step actions directly across customer and enterprise channels.',
  paradigmShift: {
    oldWay:
      'Service organizations deploy declarative decision-tree chatbots that suffer conversational amnesia and require continuous custom ML retraining.',
    newWay:
      'Enterprises match the right automation tier to the task—using bots for deterministic FAQs, co-pilots for employee productivity, and autonomous agents for dynamic, cross-system resolution.',
    whyItChanged:
      'Pre-trained LLMs coupled with ReAct/RAP planning engines and live RAG retrieval eliminated the rigid syntax bottleneck that broke legacy bots on unstructured human requests.'
  },
  customDiagrams: [
    {
      id: 'af-ch06-diag1',
      title: 'Architectural Execution Path: Declarative Chatbot vs. Autonomous Agent',
      subtitle: 'Why "the last item I purchased" crashes a state-machine bot but triggers multi-step resolution in Agentforce',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">HUMAN INPUT: "IT'S FOR THE LAST ITEM I PURCHASED" + ERROR PHOTO</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">Comparing rigid slot-filling state machines against LLM + RAG + Flow agentic execution</text>

  <!-- Left Input Box -->
  <rect x="32" y="165" width="150" height="90" rx="8" fill="#1F2937" stroke="#2563EB" stroke-width="2"/>
  <text x="107" y="198" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="700">Customer Turn</text>
  <text x="107" y="218" text-anchor="middle" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">Image + Indirect</text>
  <text x="107" y="234" text-anchor="middle" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">Order Reference</text>

  <!-- Upper Branch: Legacy Chatbot -->
  <line x1="182" y1="190" x2="245" y2="125" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="245" y="80" width="235" height="90" rx="8" fill="#111827" stroke="#DC2626" stroke-width="1.5"/>
  <text x="265" y="106" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">TRADITIONAL CHATBOT</text>
  <text x="265" y="128" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">Expects literal regex: Order #</text>
  <text x="265" y="148" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="10">Cannot parse image or context</text>

  <line x1="480" y1="125" x2="545" y2="125" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="545" y="80" width="220" height="90" rx="8" fill="#450A0A" stroke="#DC2626" stroke-width="2"/>
  <text x="655" y="115" text-anchor="middle" fill="#FEE2E2" font-family="Inter, sans-serif" font-size="13" font-weight="700">CONVERSATION BREAKS</text>
  <text x="655" y="137" text-anchor="middle" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="10">"Sorry, enter valid Order ID"</text>
  <text x="655" y="153" text-anchor="middle" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="10">Amnesia Escalation to Human</text>

  <!-- Lower Branch: Autonomous Agent -->
  <line x1="182" y1="230" x2="245" y2="295" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="245" y="235" width="235" height="135" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5"/>
  <text x="265" y="261" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">AGENTFORCE AGENT (ReAct/RAP)</text>
  <text x="265" y="283" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">1. Reads error code from image</text>
  <text x="265" y="303" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">2. Resolves "last item" in CRM</text>
  <text x="265" y="323" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">3. Pulls order ID + warranty rule</text>
  <text x="265" y="343" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">Dynamic Context Retained</text>

  <line x1="480" y1="302" x2="545" y2="302" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="545" y="235" width="220" height="135" rx="8" fill="#064E3B" stroke="#059669" stroke-width="2"/>
  <text x="655" y="275" text-anchor="middle" fill="#ECFDF5" font-family="Inter, sans-serif" font-size="13" font-weight="700">AUTONOMOUS ACTION</text>
  <text x="655" y="298" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">Proposes Replacement Unit</text>
  <text x="655" y="318" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">Executes Replacement Flow</text>
  <text x="655" y="338" text-anchor="middle" fill="#ECFDF5" font-family="Inter, sans-serif" font-size="11" font-weight="600">Zero Human Escalation</text>
</svg>`,
      bierutCaption:
        'Follow the split from the customer input node: the declarative chatbot fails on indirect phrasing.',
      annotations: [
        {
          step: '01',
          label: 'The Literal Slot-Filling Trap',
          explanation: 'Declarative bots demand exact formatted inputs (e.g., an alphanumeric order number) and crash when humans use conversational references.'
        },
        {
          step: '02',
          label: 'Multi-Modal & Relational Resolution',
          explanation: 'Agents extract error codes directly from uploaded photos and translate "last item I purchased" into a database query against customer order history.'
        },
        {
          step: '03',
          label: 'Proactive Next-Best Action',
          explanation: 'Instead of stopping at information retrieval, the agent proposes a replacement and triggers the fulfillment Flow autonomously.'
        }
      ]
    },
    {
      id: 'af-ch06-diag2',
      title: 'The Four Waves of Enterprise AI & Agency Spectrum',
      subtitle: 'Progression from Predictive ML (2014) and Generative AI (2022) to Autonomous Agents (2024+) and AGI',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">THE FOUR WAVES OF AI: ESCALATING AUTONOMY &amp; PLANNING</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">From historical classification scores to ReAct/RAP multi-agent systems</text>

  <!-- Wave 1 -->
  <rect x="32" y="255" width="168" height="125" rx="8" fill="#111827" stroke="#6B7280" stroke-width="1.5"/>
  <text x="48" y="280" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">WAVE 1: PREDICTIVE</text>
  <text x="48" y="300" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="600">Einstein ML (2014)</text>
  <text x="48" y="322" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Lead Scoring (0-100)</text>
  <text x="48" y="340" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Send-Time Optimization</text>
  <text x="48" y="358" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">Rule/ML Chatbots</text>

  <!-- Wave 2 -->
  <rect x="220" y="200" width="168" height="180" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5"/>
  <text x="236" y="225" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">WAVE 2: GENERATIVE</text>
  <text x="236" y="245" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="600">LLMs &amp; Co-Pilots (2022)</text>
  <text x="236" y="268" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Content &amp; Code Drafting</text>
  <text x="236" y="286" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Call Summarization</text>
  <text x="236" y="304" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Chain-of-Thought (CoT)</text>
  <text x="236" y="345" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">Employee Assistants</text>

  <!-- Wave 3 -->
  <rect x="408" y="135" width="182" height="245" rx="8" fill="#111827" stroke="#EA580C" stroke-width="2"/>
  <text x="424" y="160" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">WAVE 3: AUTONOMOUS</text>
  <text x="424" y="180" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="700">Agentforce Era (2024+)</text>
  <text x="424" y="204" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="10">• Agency Without Supervision</text>
  <text x="424" y="222" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="10">• ReAct + RAP Ensemble</text>
  <text x="424" y="240" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="10">• Live RAG Policy Updates</text>
  <text x="424" y="258" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="10">• Agent-to-Agent Collaboration</text>
  <text x="424" y="345" fill="#EA580C" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">Customer + Employee Scale</text>

  <!-- Wave 4 -->
  <rect x="610" y="85" width="158" height="295" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="626" y="110" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">WAVE 4: FUTURE AGI</text>
  <text x="626" y="130" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="600">General Intelligence</text>
  <text x="626" y="154" fill="#9CA3AF" font-family="Inter, sans-serif" font-size="10">• Broad Human-Level</text>
  <text x="626" y="170" fill="#9CA3AF" font-family="Inter, sans-serif" font-size="10">  Cognitive Parity</text>
  <text x="626" y="194" fill="#9CA3AF" font-family="Inter, sans-serif" font-size="10">• Open Timeline</text>

  <!-- Ascending Trajectory Line -->
  <path d="M 116 245 L 304 190 L 499 125 L 689 75" fill="none" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="6 4"/>
  <circle cx="116" cy="245" r="5" fill="#6B7280"/>
  <circle cx="304" cy="190" r="5" fill="#2563EB"/>
  <circle cx="499" cy="125" r="6" fill="#EA580C"/>
  <circle cx="689" cy="75" r="5" fill="#059669"/>
</svg>`,
      bierutCaption:
        'Each wave expands system agency: Wave 1 scores historical records, Wave 2 drafts content and assists employees via Chain-of-Thought, and Wave 3 empowers autonomous agents to plan and act across systems using ReAct and RAP.',
      annotations: [
        {
          step: '01',
          label: 'Wave 1 Predictive Scoring',
          explanation: 'Classical machine learning classifies records and outputs probability scores (0 to 100) for lead conversion or email open times.'
        },
        {
          step: '02',
          label: 'Wave 2 Co-Pilots & CoT Limits',
          explanation: 'Early co-pilots used single-track Chain-of-Thought (CoT) reasoning for employee assistance but struggled with multi-turn conversational context.'
        },
        {
          step: '03',
          label: 'Wave 3 ReAct + RAP Agency',
          explanation: 'Autonomous agents combine Reasoning and Acting (ReAct) with Reasoning via Planning (RAP) to evaluate alternative scenarios and execute governed actions.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'af-ch06-mm1',
      name: 'The Conversational Amnesia Boundary',
      tagline: 'Declarative bots process single turns; agents maintain multi-turn state',
      naiveIntuition:
        'Adding more decision branches to a traditional chatbot will eventually make it feel like a natural human conversation.',
      firstPrinciplesReality:
        'Declarative bots evaluate each prompt-response pair as a stateless slot-filling gate, losing prior conversational context and crashing when users answer indirectly.',
      howToApply:
        'Reserve declarative chatbots for predictable, linear transactions (like password resets) and route multi-turn, nuanced inquiries to LLM-backed agents.'
    },
    {
      id: 'af-ch06-mm2',
      name: 'RAG Policy Injection vs. Puppybot Retraining',
      tagline: 'Update knowledge sources at runtime instead of retraining ML weights',
      naiveIntuition:
        'Whenever company return policies or product specs change, engineering teams must retrain the conversational model on new labeled examples.',
      firstPrinciplesReality:
        'Pre-trained LLMs separate linguistic competence from enterprise facts;',
      howToApply:
        'Store changing business rules and policies in retrieved knowledge bases rather than training bespoke intent-classification models from scratch.'
    },
    {
      id: 'af-ch06-mm3',
      name: 'The CoT-to-ReAct/RAP Reasoning Upgrade',
      tagline: 'Interactive feedback loops and multi-scenario planning beat rigid linear plans',
      naiveIntuition:
        'Generating a single step-by-step Chain-of-Thought (CoT) sequence at the start of a request is sufficient for complex enterprise tasks.',
      firstPrinciplesReality:
        'Linear CoT feels robotic and loses earlier context in live testing;',
      howToApply:
        'Configure autonomous agents to interleave reasoning, tool execution, and user clarification turns rather than committing blindly to a single initial plan.'
    }
  ],
  deepSections: [
    {
      id: 'af-ch06-sec1',
      sectionNumber: '6.1',
      title: 'Why Declarative Chatbots Break on Human Nuance',
      subtitle: 'Deconstructing the "last item I purchased" failure mode across Setup, Maintenance, and Context',
      coreMechanism:
        'Traditional chatbots operate on declarative, pre-defined decision flows suitable for narrow queries like password resets or retail WISMO ("Where IS My Order?") lookups. When a chatbot asks for an order number and the customer casually replies "it’s for the last item I purchased" alongside a photo of an error code, the bot breaks down because the input violates its rigid slot-filling schema.\n\nAutonomous Agentforce agents differ across three structural dimensions: Setup, Implementation, and Context. Rather than training custom ML intent models from scratch ("raising a puppybot"), agents pair pre-trained LLMs with RAG over internal data. When policies change, agents read updated documents without retraining, while maintaining full multi-turn memory and multi-modal image comprehension.',
      keyTakeaways: [
        'Chatbots require humans to conform to rigid machine rules, whereas LLM-powered agents adapt to natural human phrasing and unstructured images.',
        'Highly regulated or strictly predictable environments may still favor deterministic home-grown bots.'
      ],
      commonPitfalls: [
        'Forcing customers to manually look up and type order IDs or error codes that are already visible in their account history or attached screenshots.',
        'Spending months retraining custom NLU intent classifiers whenever business policies or product catalogs change.'
      ],
      figures: [
        {
          file: 'c06f001.png',
          originalLabel: 'Figure 6.1 Bots versus autonomous agents',
          bierutTitle: 'How Multi-Modal Context and Database Resolution Rescue Conversations Where Declarative Bots Crash',
          editorialAnalysis:
            'This side-by-side comparison from Salesforce’s Service Cloud first-call deck isolates the exact breaking point of legacy bots.',
          keyTakeaways: [
            'Autonomous agents bridge unstructured perception with structured database lookups.',
            'True agency moves beyond answering questions to proactively suggesting and executing the replacement action.'
          ]
        }
      ]
    },
    {
      id: 'af-ch06-sec2',
      sectionNumber: '6.2',
      title: 'Co-Pilots vs. Autonomous Agents: Audience and Reasoning Depth',
      subtitle: 'From employee-facing Chain-of-Thought assistants to ReAct and RAP agentic ensembles',
      coreMechanism:
        'Modern co-pilots—popularized by GitHub Copilot in 2021 and Salesforce’s Einstein Copilot (renamed Agentforce Assistant for CRM)—are built specifically as virtual assistants for internal employees navigating enterprise software. While co-pilots can traverse multiple databases, summarize sales calls, update CRM records, or coordinate multi-step tasks like booking a restaurant via Resy and travel via Expedia, they remain human-tethered subsets of agentic AI.\n\nInternal testing of Einstein Copilot across thousands of salespeople exposed a key architectural limitation: relying solely on Chain-of-Thought (CoT) reasoning produced linear action sequences that failed to follow up on earlier conversational context and felt robotic. For Agentforce, engineers upgraded to an ensemble combining Reasoning and Acting (ReAct), which incorporates user feedback mid-flight, and Reasoning via Planning (RAP), which simulates alternative scenarios.',
      keyTakeaways: [
        'Co-pilots are employee-facing assistants that help staff operate software, whereas autonomous agents can interact directly with customers or other agents.',
        'Replacing single-track Chain-of-Thought (CoT) with an ensemble of ReAct and RAP enables contextual follow-ups and flexible scenario planning.'
      ],
      commonPitfalls: [
        'Exposing an internal employee co-pilot directly to external customers without customer-facing guardrails and autonomous resolution loops.',
        'Relying exclusively on static Chain-of-Thought planning for multi-turn dialogues where users change constraints mid-conversation.'
      ]
    },
    {
      id: 'af-ch06-sec3',
      sectionNumber: '6.3',
      title: 'The Four Waves of AI and the Rise of Agency',
      subtitle: 'Predictive ML, Generative AI, Autonomous Agents, and the path toward AGI',
      coreMechanism:
        'Enterprise AI has evolved through three distinct commercial waves toward a fourth horizon. Wave 1 (Predictive AI, starting around 2014 with classic Einstein) trained machine-learning models on historical CRM records to output classifications and numerical predictions—such as Einstein Lead Scoring (0 to 100 conversion probability) and Send Time Optimization for marketing emails.\n\nWave 2 (Generative AI, ignited in late 2022) introduced pre-trained LLMs capable of drafting emails, code, and call summaries. Wave 3 (Autonomous AI, the current era) grants systems true philosophical agency—the capacity to formulate plans, make decisions, and collaborate with other agents under human-defined ethical guardrails, preceding Wave 4 (Artificial General Intelligence).',
      keyTakeaways: [
        'Each AI wave complements rather than erases prior waves: predictive lead scoring, generative drafting, and autonomous execution coexist on one platform.',
        'True agency means acting without constant adult supervision, which makes platform-enforced constraints and ethical guardrails mandatory.'
      ],
      commonPitfalls: [
        'Ripping out high-performing rules/ML chatbots in predictable FAQ domains where deterministic bots already excel.',
        'Granting Wave 3 autonomous agents write access to production systems without establishing deterministic guardrails and escalation boundaries.'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Traditional Chatbots vs. Employee Co-Pilots vs. Autonomous AI Agents',
      description: 'Selecting the right conversational and execution paradigm across enterprise use cases.',
      headers: ['Capability Dimension', 'Traditional Chatbot', 'AI Co-Pilot (Assistant)', 'Autonomous Agent (Agentforce)'],
      rows: [
        ['Primary User Audience', 'External customers on simple FAQs', 'Internal employees using software', 'Customers, employees, and other agents'],
        ['Setup & Training Burden', 'High (custom ML training from scratch)', 'Low (pre-trained LLM + CRM context)', 'Low (pre-trained LLM + RAG + Flows)'],
        ['Policy Maintenance', 'Requires continuous model retraining', 'Reads updated CRM records dynamically', 'Checks updated sources in-flow without retraining'],
        ['Reasoning Architecture', 'Declarative decision trees & rules', 'Chain-of-Thought (CoT) task sequencing', 'Ensemble of ReAct (feedback) & RAP (planning)'],
        ['Memory & Exception Handling', 'Stateless single-turn ("amnesia")', 'Session-scoped task execution', 'Multi-turn context + multi-modal exception handling'],
        ['Ideal Regulated/Business Fit', 'Strict deterministic audits & simple WISMO', 'Sales prep (Bombardier) & admin tasks', 'End-to-end case resolution & autonomous actions']
      ],
      verdictRule:
        'Deploy chatbots for deterministic, auditable FAQs; deploy co-pilots to accelerate employee software workflows; deploy autonomous agents when tasks require multi-turn reasoning, unstructured inputs, and independent action.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'af-ch06-scen1',
      title: 'Upgrading Retail Deflection from Amnesiac Bots to Multi-Modal Agents',
      roleAndContext: 'Director of Digital Customer Experience at a consumer electronics retailer handling 200,000 monthly support chats.',
      symptomOrFailure:
        'The existing declarative chatbot successfully answers basic WISMO queries with order numbers, but 68% of warranty claim chats fail and escalate to humans whenever customers upload photos of broken devices or refer to "my recent purchase."',
      naiveFixAndWhyItFails:
        'Adding 150 new regex intent branches and forcing customers through a 6-field web form before chat initiation increases drop-off and still cannot interpret uploaded error photos.',
      firstPrinciplesSolution:
        'Keep simple deterministic paths for basic WISMO, but deploy an Agentforce Service Agent using multi-modal LLM vision, Data Cloud order lookup, and automated replacement Flows for warranty claims.',
      measurableOutcome:
        'Reduced human warranty escalations by 54% while cutting average resolution time from 14 minutes to 90 seconds.'
    },
    {
      id: 'af-ch06-scen2',
      title: 'Transitioning Sales Enablement from Rigid CoT to ReAct/RAP Agents',
      roleAndContext: 'VP of Revenue Operations at an industrial aviation manufacturer modeled on Bombardier’s enterprise sales workflow.',
      symptomOrFailure:
        'Field sales reps stopped using an early Chain-of-Thought assistant because it generated generic pre-meeting briefs and lost context whenever reps asked follow-up questions about specific aircraft maintenance histories.',
      naiveFixAndWhyItFails:
        'Writing longer static system prompts for the CoT assistant overflows context windows without giving the system the ability to interactively query follow-up data sources.',
      firstPrinciplesSolution:
        'Deploy Agentforce Assistant for CRM powered by ReAct and RAP reasoning to iteratively pull account history, prep tailored meeting recommendations, summarize post-call notes, and trigger next-step Flows.',
      measurableOutcome:
        'Increased sales rep weekly adoption from 22% to 84% and saved 4.5 hours per rep per week on pre-call preparation and post-call CRM updates.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch06-q1',
        scenarioPrompt:
          'During a customer service interaction, a chatbot asks for an order number, and the customer responds: "It is for the last item I purchased" while attaching a photo of an error screen. Why does a traditional chatbot fail here while an Agentforce agent succeeds?',
        options: [
          {
            label: 'A',
            text: 'Traditional chatbots are built on declarative, predefined flows expecting literal formatted inputs, whereas agents use LLMs, multi-modal vision, and database lookups to resolve indirect context.',
            isCorrect: true,
            explanation: 'Declarative bots break when inputs deviate from predefined forms;'
          },
          {
            label: 'B',
            text: 'Traditional chatbots cannot run on cloud servers and only execute inside legacy web browsers.',
            isCorrect: false,
            explanation: 'Both chatbots and agents run in the cloud;'
          },
          {
            label: 'C',
            text: 'Agentforce agents require a human agent to manually type the order number behind the scenes on every turn.',
            isCorrect: false,
            explanation: 'Autonomous agents query the data source and pull the order number automatically without human intervention.'
          },
          {
            label: 'D',
            text: 'Traditional chatbots use ReAct and RAP reasoning, which are too slow for image processing.',
            isCorrect: false,
            explanation: 'ReAct and RAP are used by Agentforce agents, not traditional declarative chatbots.'
          }
        ]
      },
      {
        id: 'af-ch06-q2',
        scenarioPrompt:
          'When Salesforce tested Einstein Copilot internally with thousands of salespeople, what limitation of pure Chain-of-Thought (CoT) reasoning prompted the shift to an ensemble of ReAct and RAP for Agentforce?',
        options: [
          {
            label: 'A',
            text: 'Chain-of-Thought could not generate English sentences longer than 20 words.',
            isCorrect: false,
            explanation: 'CoT generates fluent text; its limitation was conversational adaptability and context retention.'
          },
          {
            label: 'B',
            text: 'CoT developed a fixed sequence of actions that struggled to follow up on earlier conversational context and felt robotic, whereas ReAct seeks feedback along the way and RAP evaluates alternative scenarios.',
            isCorrect: true,
            explanation: 'Combining Reasoning and Acting (ReAct) with Reasoning via Planning (RAP) enabled dynamic user feedback and multi-scenario planning.'
          },
          {
            label: 'C',
            text: 'CoT required retraining the base LLM weights after every single sales call.',
            isCorrect: false,
            explanation: 'CoT is an inference-time prompting strategy and does not retrain model weights.'
          },
          {
            label: 'D',
            text: 'CoT was legally restricted to healthcare and government contracting industries.',
            isCorrect: false,
            explanation: 'Regulated industries often prefer deterministic bots for auditability, not CoT restrictions.'
          }
        ]
      },
      {
        id: 'af-ch06-q3',
        scenarioPrompt:
          'In what type of business environment might a traditional deterministic chatbot still be preferred over an autonomous AI agent?',
        options: [
          {
            label: 'A',
            text: 'Unstructured creative brainstorming and multi-modal image diagnostics.',
            isCorrect: false,
            explanation: 'Creative and multi-modal tasks require GenAI and autonomous agents.'
          },
          {
            label: 'B',
            text: 'Highly predictable interactions or strictly regulated industries (such as healthcare or government contracting) where attorneys require 100% deterministic, home-grown explainability.',
            isCorrect: true,
            explanation: 'When interactions are highly predictable or require strict deterministic auditability, a declarative bot can be simpler and more comfortable for legal teams.'
          },
          {
            label: 'C',
            text: 'Multi-system executive travel and dining coordination across CRM, Resy, and Expedia.',
            isCorrect: false,
            explanation: 'Cross-system orchestration across arbitrary tasks requires co-pilot or agentic capabilities.'
          },
          {
            label: 'D',
            text: 'Environments where policies change daily and no engineering team is available to retrain models.',
            isCorrect: false,
            explanation: 'Frequent policy changes favor RAG-grounded agents that read updated sources without model retraining.'
          }
        ]
      },
      {
        id: 'af-ch06-q4',
        scenarioPrompt:
          'How do Wave 1 (Predictive AI), Wave 2 (Generative AI), and Wave 3 (Autonomous AI) differ in their core operational output?',
        options: [
          {
            label: 'A',
            text: 'Wave 1 outputs classifications and propensity scores (e.g., Lead Scoring 0–100); Wave 2 generates content and code; Wave 3 formulates plans, makes decisions, and acts with agency.',
            isCorrect: true,
            explanation: 'Each wave builds on the last: mathematical predictions (2014) -> content generation (2022) -> autonomous decision-making and action (2024+).'
          },
          {
            label: 'B',
            text: 'Wave 1 writes code; Wave 2 scores leads from 0 to 100; Wave 3 replaces all databases with blockchain.',
            isCorrect: false,
            explanation: 'This reverses Waves 1 and 2 and mischaracterizes Wave 3.'
          },
          {
            label: 'C',
            text: 'All three waves are identical marketing terms for rules-based FAQ pages.',
            isCorrect: false,
            explanation: 'Rules-based FAQs predate all three modern AI waves.'
          },
          {
            label: 'D',
            text: 'Wave 3 represents Artificial General Intelligence (AGI) where machines outperform humans at football.',
            isCorrect: false,
            explanation: 'AGI is the future fourth era; Wave 3 is the current autonomous agent era.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'af-ch06-fc1',
        category: 'architecture',
        front: 'What are the three structural differences between setting up and running a traditional chatbot versus an Agentforce agent?',
        back: 'Setup (scratch ML training vs. pre-trained LLM + RAG), Implementation/Maintenance (continuous retraining vs. reading updated sources in-flow), and Context (single-turn amnesia vs. multi-turn memory).',
        mentalHook: 'Pre-trained Setup + Zero-Retrain Maintenance + Multi-Turn Memory.'
      },
      {
        id: 'af-ch06-fc2',
        category: 'foundation',
        front: 'What is the primary distinction between an AI co-pilot and an autonomous AI agent?',
        back: 'A co-pilot is an internal assistant designed to help employees navigate enterprise software, whereas an autonomous agent can interact directly with customers or other agents with greater decision-making freedom.',
        mentalHook: 'Co-pilot = Employee software sidekick; Agent = Autonomous actor.'
      },
      {
        id: 'af-ch06-fc3',
        category: 'adaptation',
        front: 'How do Chain-of-Thought (CoT), ReAct, and RAP differ in agentic reasoning?',
        back: 'CoT builds a linear action sequence; ReAct (Reasoning and Acting) seeks user feedback along the way; RAP (Reasoning via Planning) evaluates alternative scenarios before acting.',
        mentalHook: 'CoT = Linear script; ReAct = Interactive feedback; RAP = Scenario simulator.'
      },
      {
        id: 'af-ch06-fc4',
        category: 'foundation',
        front: 'What are the two classic CRM examples of Wave 1 Predictive AI introduced with Salesforce Einstein in 2014?',
        back: 'Einstein Lead Scoring (scoring conversion likelihood from 0 to 100) and Einstein Send Time Optimization (predicting when a recipient will open an email).',
        mentalHook: 'Wave 1 Predictive = Lead Score (0-100) + Send Time Prediction.'
      },
      {
        id: 'af-ch06-fc5',
        category: 'evaluation',
        front: 'What measurable outcomes did Heathrow Airport achieve by deploying chatbots in 2023 for predictable inquiries?',
        back: 'Live chat volume rose nearly 5x, bots handled ~4,000 questions per month, human call volume dropped 27%, and interactions were 1 minute shorter on average.',
        mentalHook: 'Heathrow Bots = 5x chat volume, -27% human calls, -1 min duration.'
      },
      {
        id: 'af-ch06-fc6',
        category: 'foundation',
        front: 'What does philosophical "agency" mean in the context of Wave 3 Autonomous AI?',
        back: 'The ability of an AI system to formulate plans, make decisions, and execute actions without constant human supervision, bounded by human-imposed guardrails.',
        mentalHook: 'Agency = Decide and act without adult supervision (inside guardrails).'
      }
    ],
    feynmanChallenges: [
      {
        id: 'af-ch06-fc-chal1',
        conceptTitle: 'Chatbots vs. Co-Pilots vs. Autonomous Agents',
        prompt:
          'Explain to a VP of Customer Service the exact architectural and operational differences between a traditional chatbot, an employee co-pilot, and an autonomous Agentforce agent.',
        rubricChecklist: [
          'Contrasts chatbot setup and maintenance (training custom ML models from scratch and retraining on policy changes) with agents (pre-trained LLMs + RAG over updated sources).',
          'Explains why chatbots suffer from "conversational amnesia" and fail on indirect inputs like "the last item I purchased" or error screenshots.',
          'Clarifies that co-pilots (Agentforce Assistant for CRM) target internal employees using software rather than external customers.',
          'Notes when deterministic chatbots remain useful (predictable WISMO queries or strictly audited healthcare/government environments).'
        ],
        modelExplanation:
          'A traditional chatbot follows pre-scripted declarative rules and custom-trained intent models: it works well for predictable FAQs or strictly audited compliance flows, but it has conversational amnesia and crashes if a customer says "the last item I purchased" instead of typing an order number. A co-pilot uses pre-trained LLMs to traverse databases and trigger actions, but it is built specifically as a sidekick for internal employees using software. An autonomous agent combines pre-trained LLMs, live RAG policy lookups (no retraining needed), multi-modal perception, and ReAct/RAP planning to resolve complex requests directly for customers or across systems.'
      },
      {
        id: 'af-ch06-fc-chal2',
        conceptTitle: 'The Four Waves of AI and the ReAct/RAP Reasoning Upgrade',
        prompt:
          'Walk through the evolution from Wave 1 Predictive AI to Wave 3 Autonomous AI, and explain why Agentforce replaced pure Chain-of-Thought (CoT) reasoning with a ReAct + RAP ensemble.',
        rubricChecklist: [
          'Defines Wave 1 Predictive AI (2014) with concrete examples like Lead Scoring (0–100) and Send Time Optimization.',
          'Defines Wave 2 Generative AI (2022) as content/code generation and summarization using pre-trained LLMs.',
          'Defines Wave 3 Autonomous AI as systems with agency that plan, decide, and collaborate with other agents under guardrails (ahead of Wave 4 AGI).',
          'Explains why CoT felt robotic and lost context in internal testing, and how ReAct (feedback loops) + RAP (alternative scenario planning) solved it.'
        ],
        modelExplanation:
          'Wave 1 Predictive AI (2014) used machine learning on historical data to output classifications and scores like Einstein Lead Scoring (0–100). Wave 2 Generative AI (2022) used pre-trained LLMs to draft emails, code, and summaries. Wave 3 Autonomous AI gives systems agency to plan and act independently within ethical guardrails. Early Wave 2/3 co-pilots relied on Chain-of-Thought (CoT), which plots a fixed linear sequence of steps; in Salesforce testing across thousands of reps, CoT failed to follow up on earlier conversation context and felt robotic. Agentforce upgraded to an ensemble of ReAct (Reasoning and Acting, which seeks feedback along the way) and RAP (Reasoning via Planning, which weighs alternative scenarios).'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch06-n1',
        label: 'Declarative Chatbot State Machine',
        category: 'architecture',
        chapterNumber: 6,
        importance: 2,
        definition: 'A rules- and custom-ML-driven conversational tool that requires predefined input formats, suffers from single-turn amnesia, and requires retraining when policies change.',
        whyItMatters: 'Explains both why bots excel at predictable WISMO deflection (Heathrow 27% call reduction) and why they crash on nuanced human phrasing.'
      },
      {
        id: 'af-ch06-n2',
        label: 'Employee Co-Pilot (Agentforce Assistant)',
        category: 'architecture',
        chapterNumber: 6,
        importance: 2,
        definition: 'An internal AI assistant designed to help employees navigate enterprise software, summarize meetings, and trigger multi-database tasks.',
        whyItMatters: 'Distinguishes employee-tethered productivity tools from customer-facing or fully autonomous agents.'
      },
      {
        id: 'af-ch06-n3',
        label: 'ReAct & RAP Reasoning Ensemble',
        category: 'adaptation',
        chapterNumber: 6,
        importance: 1,
        definition: 'An agentic reasoning architecture combining Reasoning and Acting (mid-flight user feedback) with Reasoning via Planning (evaluating alternative scenarios) over linear Chain-of-Thought.',
        whyItMatters: 'Eliminates the robotic, context-dropping limitations discovered when testing pure Chain-of-Thought with enterprise users.'
      },
      {
        id: 'af-ch06-n4',
        label: 'Wave 1 Predictive AI',
        category: 'foundation',
        chapterNumber: 6,
        importance: 3,
        definition: 'The 2014 era of commercial ML focused on historical record classification and numerical propensity predictions such as Lead Scoring (0–100) and Send Time Optimization.',
        whyItMatters: 'Provides the quantitative scoring foundation that still runs alongside generative and autonomous workflows.'
      },
      {
        id: 'af-ch06-n5',
        label: 'Wave 3 Autonomous Agency',
        category: 'foundation',
        chapterNumber: 6,
        importance: 1,
        definition: 'The third wave of AI where systems transition from reactive content generators to autonomous actors capable of planning, deciding, and collaborating with other agents.',
        whyItMatters: 'Defines the core capability shift of Agentforce and underscores why human-defined guardrails are mandatory.'
      },
      {
        id: 'af-ch06-n6',
        label: 'Zero-Retrain RAG Maintenance',
        category: 'data',
        chapterNumber: 6,
        importance: 2,
        definition: 'Updating agent behavior by instructing pre-trained LLMs to check updated policy documents at runtime instead of retraining custom ML models.',
        whyItMatters: 'Slashes ongoing maintenance overhead compared to continually retraining legacy chatbot NLU models.'
      }
    ],
    edges: [
      {
        source: 'af-ch06-n3',
        target: 'af-ch06-n5',
        relationship: 'prerequisite_for',
        explanation: 'ReAct and RAP planning ensembles enable reliable multi-turn decision-making in Wave 3 autonomous agents.'
      },
      {
        source: 'af-ch06-n6',
        target: 'af-ch06-n1',
        relationship: 'trades_off_with',
        explanation: 'Runtime RAG policy lookup replaces the continuous custom ML retraining required by legacy chatbots, trading strict determinism for adaptability.'
      },
      {
        source: 'af-ch06-n2',
        target: 'af-ch06-n5',
        relationship: 'part_of',
        explanation: 'Employee co-pilots represent an internal, lower-autonomy subset of the broader agentic AI architecture.'
      },
      {
        source: 'af-ch06-n4',
        target: 'af-ch06-n5',
        relationship: 'prerequisite_for',
        explanation: 'Predictive ML classifications and lead scores feed structured signals into autonomous agent workflows.'
      },
      {
        source: 'af-ch06-n3',
        target: 'af-ch06-n2',
        relationship: 'optimizes',
        explanation: 'Upgrading from linear Chain-of-Thought to ReAct/RAP eliminates context loss in CRM assistant interactions.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapter 6 (c06f001.png included), zero forbidden clichés, includes CoT vs ReAct/RAP footnote mechanics and Heathrow/Bombardier metrics.'
  }
};

export const afCh07Mastery: ChapterMastery = {
  chapterNumber: 7,
  chapterId: 'ch07',
  title: 'What Are the Different Parts of Agentforce?',
  subtitle: 'How Hyperforce, Data Cloud Lakehouse, the Einstein Trust Layer, and the Atlas Reasoning Engine Form the Agentic Loop',
  readingTimeMinutes: 7,
  sourceWordCount: 2179,
  executiveThesis:
    'Agentforce consists of three core agentic components—the Atlas Reasoning Engine, Agent Builder, and Testing Center—that only function because of a four-year architectural transformation of the underlying Salesforce platform. Multi-substrate Hyperforce, Data Cloud’s zero-copy lakehouse and vector database, the Einstein Trust Layer, and low-code Builders converge into a single closed-loop execution circuit.',
  paradigmShift: {
    oldWay:
      'Enterprises run CRM on physical first-party data centers with fragmented relational databases and manual data-science model pipelines.',
    newWay:
      '85% of customers run on multi-substrate Hyperforce across 20 regions, feeding a unified Data Cloud lakehouse and vector store into the Atlas Reasoning Engine.',
    whyItChanged:
      'Global data residency laws, real-time unstructured RAG requirements, and non-deterministic LLM risks forced a complete re-engineering of the Force.com stack.'
  },
  customDiagrams: [
    {
      id: 'af-ch07-diag1',
      title: 'The Four-Year Platform Transformation (Force.com to Hyperforce + Data Cloud + GenAI)',
      subtitle: 'Srini Tallapragada’s three foundational pillars supporting the Agentforce runtime',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">THE THREE PLATFORM TRANSFORMATIONS ENABLING AGENTFORCE</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">300 engineering teams • 23 sites • 250,000 system changes/week • 85% customer migration</text>

  <!-- Pillar 1: Hyperforce -->
  <rect x="32" y="80" width="230" height="220" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5"/>
  <text x="50" y="108" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">01. HYPERFORCE</text>
  <text x="50" y="128" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="600">Multi-Substrate Public Cloud</text>
  <text x="50" y="154" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• AWS &amp; Google Cloud (20 regions)</text>
  <text x="50" y="176" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Sovereign Data Residency</text>
  <text x="50" y="198" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Cost &amp; Identity Controls</text>
  <rect x="50" y="230" width="194" height="50" rx="6" fill="#1F2937" stroke="#2563EB"/>
  <text x="147" y="253" text-anchor="middle" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">Embedded AIOps Agent</text>
  <text x="147" y="269" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">Autonomous Infra Healing</text>

  <!-- Pillar 2: Data Cloud -->
  <rect x="285" y="80" width="230" height="220" rx="8" fill="#111827" stroke="#059669" stroke-width="1.5"/>
  <text x="303" y="108" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">02. DATA CLOUD</text>
  <text x="303" y="128" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="600">Lakehouse &amp; Vector Engine</text>
  <text x="303" y="154" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Batch, Near-RT &amp; Real-Time</text>
  <text x="303" y="176" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Zero-Copy (Snowflake/BigQuery)</text>
  <text x="303" y="198" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Refined Semantic Views</text>
  <rect x="303" y="230" width="194" height="50" rx="6" fill="#1F2937" stroke="#059669"/>
  <text x="400" y="253" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">Vector Database (RAG)</text>
  <text x="400" y="269" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">PDF/Image Semantic Embeddings</text>

  <!-- Pillar 3: Generative AI & Builders -->
  <rect x="538" y="80" width="230" height="220" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5"/>
  <text x="556" y="108" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">03. GEN-AI &amp; TRUST</text>
  <text x="556" y="128" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="600">LLM Gateway &amp; Low-Code</text>
  <text x="556" y="154" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Einstein Trust Layer</text>
  <text x="556" y="176" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Zero Data Retention</text>
  <text x="556" y="198" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="11">• Model &amp; Prompt Builders</text>
  <rect x="556" y="230" width="194" height="50" rx="6" fill="#1F2937" stroke="#EA580C"/>
  <text x="653" y="253" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">Nondeterminism Control</text>
  <text x="653" y="269" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">PII Masking • Toxicity • Audit</text>

  <!-- Convergence Arrows into Agentforce Trio -->
  <line x1="147" y1="300" x2="260" y2="340" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="400" y1="300" x2="400" y2="340" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="653" y1="300" x2="540" y2="340" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="140" y="340" width="520" height="54" rx="8" fill="#1F2937" stroke="#EA580C" stroke-width="2"/>
  <text x="400" y="364" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="13" font-weight="700">EXCLUSIVE AGENTFORCE CORE TRIO</text>
  <text x="400" y="382" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="11">1. Atlas Reasoning Engine   •   2. Agent Builder (+ Agent Creator)   •   3. Testing Center</text>
</svg>`,
      bierutCaption:
        'Agentforce’s three exclusive components (bottom bar) depend directly on the three four-year platform transformations above: Hyperforce compute residency, Data Cloud lakehouse/vector indexing, and the Einstein Trust Layer.',
      annotations: [
        {
          step: '01',
          label: 'Hyperforce Multi-Substrate Base',
          explanation: 'Abstracts AWS and Google Cloud across 20 regions to satisfy strict national data residency laws and runs its own autonomous AIOps Agent.'
        },
        {
          step: '02',
          label: 'Data Cloud Lakehouse & Vector DB',
          explanation: 'Combines zero-copy federation over Snowflake/Databricks/BigQuery/Redshift with vector embeddings that capture semantic intent across unstructured text and images.'
        },
        {
          step: '03',
          label: 'The Exclusive Agentforce Trio',
          explanation: 'Atlas Reasoning Engine plans and acts, Agent Builder (with Prompt Builder and Agent Creator) configures skills, and Testing Center automates sandbox verification.'
        }
      ]
    },
    {
      id: 'af-ch07-diag2',
      title: 'Inside Data Cloud: Hybrid Lakehouse & Semantic Vector Retrieval',
      subtitle: 'How structured zero-copy tables and unstructured vector embeddings merge before hitting the LLM Gateway',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">DATA CLOUD DUAL-ENGINE RETRIEVAL FOR AGENTFORCE RAG</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">Simultaneous structured zero-copy federation + unstructured vector similarity search</text>

  <!-- Left Top: Structured Sources -->
  <rect x="32" y="85" width="210" height="125" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5"/>
  <text x="48" y="112" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">STRUCTURED SOURCES</text>
  <text x="48" y="135" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">• Native CRM Objects</text>
  <text x="48" y="155" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">• Snowflake / Databricks</text>
  <text x="48" y="175" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">• BigQuery / Redshift</text>
  <text x="48" y="195" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">Zero-Copy Sharing &amp; Federation</text>

  <!-- Left Bottom: Unstructured Sources -->
  <rect x="32" y="240" width="210" height="125" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5"/>
  <text x="48" y="267" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">UNSTRUCTURED CORPUS</text>
  <text x="48" y="290" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">• Contracts &amp; Policy PDFs</text>
  <text x="48" y="310" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">• Call Transcripts &amp; Articles</text>
  <text x="48" y="330" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11">• Images &amp; Video Assets</text>
  <text x="48" y="350" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="10">Mathematical Intent Vectors</text>

  <!-- Center: Data Cloud Processing -->
  <line x1="242" y1="147" x2="305" y2="185" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="242" y1="302" x2="305" y2="255" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="305" y="115" width="225" height="215" rx="8" fill="#1F2937" stroke="#059669" stroke-width="2"/>
  <text x="417" y="143" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">DATA CLOUD LAKEHOUSE</text>
  <rect x="325" y="158" width="185" height="65" rx="6" fill="#111827" stroke="#2563EB"/>
  <text x="417" y="182" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Refined Lakehouse Views</text>
  <text x="417" y="202" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="10">Identity Graph + Calculated CLV</text>

  <rect x="325" y="240" width="185" height="65" rx="6" fill="#111827" stroke="#EA580C"/>
  <text x="417" y="264" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Semantic Vector Store</text>
  <text x="417" y="284" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="10">Meaning &amp; Intent Similarity</text>

  <!-- Right: Atlas & LLM Gateway -->
  <line x1="530" y1="222" x2="585" y2="222" stroke="#059669" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="585" y="135" width="183" height="175" rx="8" fill="#111827" stroke="#EA580C" stroke-width="2"/>
  <text x="676" y="168" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">ATLAS + TRUST LAYER</text>
  <text x="676" y="195" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="600">Dynamic Grounding</text>
  <text x="676" y="220" text-anchor="middle" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">Sub-Second Hybrid Retrieval</text>
  <text x="676" y="242" text-anchor="middle" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">PII Masking &amp; Zero Retention</text>
  <text x="676" y="275" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">LLM Gateway (GPT/Claude/Gemini)</text>
</svg>`,
      bierutCaption:
        'Data Cloud merges two distinct data planes: zero-copy structured records from enterprise warehouses and mathematical vector embeddings from unstructured documents, delivering both in real time to the Atlas Reasoning Engine.',
      annotations: [
        {
          step: '01',
          label: 'Zero-Copy Warehouse Federation',
          explanation: 'External tables in Snowflake, Databricks, BigQuery, and Redshift are queried via sharing and federation without copying raw rows.'
        },
        {
          step: '02',
          label: 'Lakehouse Refinement & Vectorization',
          explanation: 'The lakehouse normalizes timestamps, maps fields, and computes metrics like CLV while the vector DB encodes unstructured text and images into semantic vectors.'
        },
        {
          step: '03',
          label: 'Hybrid Grounding via Trust Layer',
          explanation: 'Atlas queries both structured customer profiles and semantic vectors simultaneously, passing grounded prompts through the LLM Gateway.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'af-ch07-mm1',
      name: 'The Etsy Storefront vs. Platform Grid Analogy',
      tagline: 'Three visible agent tools rest on a massive invisible infrastructure grid',
      naiveIntuition:
        'Buying Agentforce means installing a self-contained software package consisting only of an agent builder and a reasoning engine.',
      firstPrinciplesReality:
        'Like an Etsy shop that relies on Etsy.com payments, cloud servers, and logistics to operate, Atlas, Agent Builder, and Testing Center depend entirely on Hyperforce, Data Cloud, and the Trust Layer.',
      howToApply:
        'Verify that your organization’s Hyperforce residency, Data Cloud identity resolution, and Trust Layer policies are configured before scaling Agent Builder workflows.'
    },
    {
      id: 'af-ch07-mm2',
      name: 'Lakehouse Progressive Refinement',
      tagline: 'Preserve raw data while exposing progressively cleaner semantic views for AI',
      naiveIntuition:
        'AI agents can query raw, unharmonized enterprise database tables directly and figure out inconsistent date formats or schema mismatches on the fly.',
      firstPrinciplesReality:
        'A data lakehouse retains raw ingested data for flexibility while constructing refined abstraction layers that normalize formats, unify customer identities, and pre-calculate metrics like customer lifetime value.',
      howToApply:
        'Point Agentforce retrievers at Data Cloud’s harmonized profile and calculated insight views rather than raw unmapped ingestion tables.'
    },
    {
      id: 'af-ch07-mm3',
      name: 'Semantic Intent Vectors over Keyword Matching',
      tagline: 'Search unstructured documents by mathematical meaning rather than literal strings',
      naiveIntuition:
        'Searching contracts and call transcripts for an agent works like Ctrl+F in a word processor, matching exact words and phrases.',
      firstPrinciplesReality:
        'Vector databases convert unstructured text, images, and video into mathematical embeddings that encode the underlying human intent and semantic relationships between concepts.',
      howToApply:
        'Vectorize knowledge articles, PDFs, and transcripts inside Data Cloud so RAG retrievers match customer intent even when vocabulary differs completely.'
    }
  ],
  deepSections: [
    {
      id: 'af-ch07-sec1',
      sectionNumber: '7.1',
      title: 'The Agentforce Exclusive Trio and the Hyperforce Substrate',
      subtitle: 'Atlas Reasoning Engine, Agent Builder, Testing Center, and the 20-region public cloud shift',
      coreMechanism:
        'Strictly speaking, three components belong exclusively to Agentforce: the Atlas Reasoning Engine (the brain that interprets requests, determines intent, plans, and initiates actions), Agent Builder (working alongside Prompt Builder and Agent Creator to assemble agents), and the Testing Center (for automated sandbox testing and usage monitoring). However, these three components operate atop a four-year platform transformation executed by 300 engineering teams across 23 sites pushing 250,000 system changes per week.\n\nAs Chief Engineering Officer Srini Tallapragada detailed in his 20,000-word architectural manifesto, the first pillar of this transformation is Hyperforce. Moving away from maintaining company-owned hardware in desert data centers, Hyperforce re-architected Salesforce to run multi-substrate across hyperscalers (AWS and Google Cloud) in 20 regions—solving strict national data residency laws (India, Japan, Canada, Germany) and embedding an autonomous AIOps Agent to self-heal infrastructure.',
      keyTakeaways: [
        'Atlas Reasoning Engine, Agent Builder, and Testing Center are the three capabilities exclusive to Agentforce.',
        'By 2024, 85% of Salesforce customers had already migrated onto the transformed Hyperforce public-cloud infrastructure.'
      ],
      commonPitfalls: [
        'Ignoring sovereign data residency requirements in countries like Germany, India, or Japan when designing global agent deployments.',
        'Pushing newly configured agents straight from Agent Builder into production without running automated batch evaluations in Testing Center.'
      ]
    },
    {
      id: 'af-ch07-sec2',
      sectionNumber: '7.2',
      title: 'Data Cloud’s Lakehouse, Zero-Copy, and Vector Database',
      subtitle: 'Unifying batch/real-time structured profiles with mathematical semantic embeddings',
      coreMechanism:
        'Built directly on Hyperforce, Data Cloud serves as the Big Data backbone required for Agentforce. It uses a data lakehouse architecture that retains raw ingested data from batch, near-real-time, and real-time streams while providing progressively refined abstraction layers—cleaning up date/time formats, mapping fields across disparate databases, resolving customer identities, and calculating fields like customer lifetime value.\n\nData Cloud delivers two specialized gifts to Agentforce: zero-copy federation and a native vector database. Through sharing and federation, zero-copy accesses massive external data stores in Snowflake, Databricks, Google BigQuery, and Amazon Redshift without copying records. Simultaneously, the vector database converts unstructured PDFs, transcripts, contracts, and images into mathematical vectors representing semantic intent, powering sub-second RAG retrieval.',
      keyTakeaways: [
        'Data Cloud’s lakehouse architecture combines raw data preservation with refined, schema-mapped views optimized for fast AI queries.',
        'Vector databases search by mathematical semantic similarity and human intent rather than literal keyword strings.'
      ],
      commonPitfalls: [
        'Relying on keyword search over raw PDF contracts, which misses relevant clauses phrased with different terminology.',
        'Separating structured CRM queries from unstructured document search into disconnected databases that cannot be joined on customer identity.'
      ]
    },
    {
      id: 'af-ch07-sec3',
      sectionNumber: '7.3',
      title: 'Taming Non-Determinism: Trust Layer, Low-Code Builders, and the Agentic Loop',
      subtitle: 'How the LLM Gateway, Model Builder, and Prompt Builder wire into the complete Agentforce loop',
      coreMechanism:
        'Because Generative AI models are non-deterministic—meaning identical inputs do not guarantee identical outputs and models can hallucinate or behave unpredictably—enterprise adoption required strict technical controls. Salesforce engineered the Einstein Trust Layer inside the LLM Gateway to mediate every call to external models (OpenAI GPT, Anthropic Claude, Google Gemini), enforcing secure data retrieval, dynamic grounding, zero data retention, toxicity detection, and legal audit trails.\n\nAlongside the Trust Layer, low-code Builders democratize AI creation: Model Builder enables teams to build and test custom ML/AI models without a data-science PhD, while Prompt Builder constructs grounded prompt templates with customer merge fields and toxicity screening. Figure 7.1 unites every component—from channels and the Trust Layer to Atlas, Data Cloud RAG, and Flows—into one cohesive agentic loop.',
      keyTakeaways: [
        'Non-determinism is both the creative strength and the primary enterprise risk of LLMs, making the LLM Gateway and Trust Layer mandatory.',
        'Salesforce reserves the "Builder" naming convention for low-code tools that output operational workflow tools.'
      ],
      commonPitfalls: [
        'Allowing application teams to call external third-party LLM APIs directly without routing through the centralized LLM Gateway and Trust Layer.',
        'Assuming data scientists must hand-code every predictive or generative model instead of using low-code Model Builder and Prompt Builder workflows.'
      ],
      figures: [
        {
          file: 'c07f001.png',
          originalLabel: 'Figure 7.1 Agentforce agentic loop',
          bierutTitle: 'Tracing the Complete Agentforce Execution Loop Across Channels, Atlas, Data Cloud, and the Trust Layer',
          editorialAnalysis:
            'This architectural schematic synthesizes the entire chapter into a single runtime circuit.',
          keyTakeaways: [
            'The Atlas Reasoning Engine sits at the center of the loop, mediating between user channels, platform actions, and grounded LLM calls.',
            'Every external LLM interaction is bracketed by the Einstein Trust Layer, while Data Cloud supplies both structured zero-copy data and vectorized unstructured context.'
          ]
        }
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Responsibilities Across the Agentforce & Salesforce Platform Stack',
      description: 'Mapping each core architectural component to its primary technical job, data scope, and failure mode prevented.',
      headers: ['Component', 'Primary Architectural Role', 'Data / Execution Scope', 'Failure Mode Prevented'],
      rows: [
        ['Hyperforce (+ AIOps Agent)', 'Multi-substrate public cloud runtime', 'AWS & GCS across 20 global regions', 'Data residency violations & hardware outages'],
        ['Data Cloud Lakehouse & Vector DB', 'Unified data harmonization & semantic search', 'Zero-copy warehouses + vectorized PDFs/media', 'Siloed customer state & keyword-only RAG blindness'],
        ['Einstein Trust Layer (LLM Gateway)', 'Security, privacy & ethics mediation', 'All outbound prompts & inbound LLM outputs', 'PII leakage, vendor model training & toxic responses'],
        ['Model & Prompt Builders', 'Low-code AI & prompt template creation', 'CRM merge fields, Flows & multi-LLM selection', 'Data-science bottlenecks & ungrounded prompt drift'],
        ['Atlas Reasoning Engine', 'Intent interpretation, planning & action initiation', 'Orchestrates topics, Flows, APIs & RAG', 'Stateless, single-turn bot failures'],
        ['Testing Center', 'Sandbox simulation, automated evals & telemetry', 'Batch test cases & live consumption tracking', 'Unverified production regressions']
      ],
      verdictRule:
        'Design agents by separating infrastructure residency (Hyperforce), context harmonization (Data Cloud), safety mediation (Trust Layer), and runtime reasoning/evaluation (Atlas + Testing Center).'
    }
  ],
  engineeringScenarios: [
    {
      id: 'af-ch07-scen1',
      title: 'Solving Multi-Region Data Residency and Unstructured Contract Search',
      roleAndContext: 'Global Enterprise Architect at a multinational logistics provider operating in Germany, Japan, and Canada.',
      symptomOrFailure:
        'Legal counsel blocked an autonomous customs-support agent because customer shipping records must remain physically resident within each country.',
      naiveFixAndWhyItFails:
        'Deploying a single US-hosted cloud instance with keyword search violates German and Japanese data residency statutes and fails whenever customers describe shipment goods using synonyms not matching exact tariff wording.',
      firstPrinciplesSolution:
        'Deploy on regional Hyperforce substrates in Germany, Japan, and Canada, and ingest the 40,000 PDF manuals into Data Cloud’s vector database so Atlas retrieves semantically matching tariff clauses locally.',
      measurableOutcome:
        'Achieved 100% regional data-residency sign-off across all three countries and improved tariff clause retrieval accuracy from 41% (keyword) to 92% (vector semantic search).'
    },
    {
      id: 'af-ch07-scen2',
      title: 'Eliminating Shadow LLM Calls with Prompt Builder and the Trust Layer',
      roleAndContext: 'VP of Platform Engineering at a retail bank scaling generative and agentic workflows across 50 business units.',
      symptomOrFailure:
        'Individual developer teams began hardcoding direct API calls to external LLMs (GPT, Claude, Gemini) with raw customer merge fields, creating inconsistent outputs and risking unauthorized retention of customer financial data.',
      naiveFixAndWhyItFails:
        'Issuing a written PDF policy manual asking developers to write their own regex PII filters results in inconsistent enforcement and zero centralized audit logs for bank regulators.',
      firstPrinciplesSolution:
        'Standardize prompt authoring inside low-code Prompt Builder and route all external model traffic through the LLM Gateway and Einstein Trust Layer with enforced zero data retention and automated audit trails.',
      measurableOutcome:
        'Consolidated 100% of external LLM traffic through a single auditable gateway with zero third-party data retention and 4x faster prompt template deployment.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch07-q1',
        scenarioPrompt:
          'If a technical purist asks which components belong exclusively to Agentforce itself (as opposed to the broader Salesforce platform it relies on), which three components are the correct answer?',
        options: [
          {
            label: 'A',
            text: 'Sales Cloud, Service Cloud, and Marketing Cloud.',
            isCorrect: false,
            explanation: 'Those are core Customer 360 application clouds, not the exclusive Agentforce trio.'
          },
          {
            label: 'B',
            text: 'Atlas Reasoning Engine, Agent Builder (with Agent Creator), and Testing Center.',
            isCorrect: true,
            explanation: 'Atlas Reasoning Engine (the brain), Agent Builder, and Testing Center are the three big components unique to Agentforce.'
          },
          {
            label: 'C',
            text: 'Hyperforce, MuleSoft, and Tableau.',
            isCorrect: false,
            explanation: 'Hyperforce, MuleSoft, and Tableau are foundational platform and Customer 360 components.'
          },
          {
            label: 'D',
            text: 'Snowflake, Databricks, and Google BigQuery.',
            isCorrect: false,
            explanation: 'Those are external third-party data lakehouses connected via Data Cloud zero-copy.'
          }
        ]
      },
      {
        id: 'af-ch07-q2',
        scenarioPrompt:
          'Why did Salesforce engineer Hyperforce as a "multi-substrate" architecture running on public cloud hyperscalers across 20 regions?',
        options: [
          {
            label: 'A',
            text: 'To take advantage of hyperscaler economies of scale and satisfy strict national data residency laws (such as in India, Japan, Canada, and Germany) without building physical data centers in every country.',
            isCorrect: true,
            explanation: 'Hyperforce insulates customers from hardware management while meeting local data residency mandates and adding cost, identity, and AIOps controls.'
          },
          {
            label: 'B',
            text: 'Because public cloud providers prohibit running relational databases in the Nevada desert.',
            isCorrect: false,
            explanation: 'Salesforce originally ran its own hardware in low-cost locations like the Nevada desert before hyperscalers emerged.'
          },
          {
            label: 'C',
            text: 'To replace the Atlas Reasoning Engine with manual server provisioning.',
            isCorrect: false,
            explanation: 'Hyperforce supports Atlas and even includes its own autonomous AIOps Agent.'
          },
          {
            label: 'D',
            text: 'To force customers to copy all external Snowflake and BigQuery data into physical magnetic tape vaults.',
            isCorrect: false,
            explanation: 'Data Cloud on Hyperforce uses zero-copy federation to avoid data copying.'
          }
        ]
      },
      {
        id: 'af-ch07-q3',
        scenarioPrompt:
          'How does Data Cloud’s vector database differ from a standard keyword search when an Agentforce agent searches unstructured PDFs, transcripts, and contracts?',
        options: [
          {
            label: 'A',
            text: 'It converts unstructured text and images into mathematical vectors that encode semantic meaning and human intent rather than matching literal words or phrases.',
            isCorrect: true,
            explanation: 'Vector databases represent how words and visual elements form meaning.'
          },
          {
            label: 'B',
            text: 'It deletes all words shorter than five letters to speed up alphabetical sorting.',
            isCorrect: false,
            explanation: 'Vector search uses mathematical embeddings of meaning, not character-length deletion.'
          },
          {
            label: 'C',
            text: 'It requires employees to manually tag every paragraph of every PDF with an SQL primary key.',
            isCorrect: false,
            explanation: 'Embedding models automatically convert unstructured text and images into vectors.'
          },
          {
            label: 'D',
            text: 'It only searches structured numeric currency fields inside Sales Cloud.',
            isCorrect: false,
            explanation: 'The vector database specifically handles unstructured data like PDFs, transcripts, contracts, and images.'
          }
        ]
      },
      {
        id: 'af-ch07-q4',
        scenarioPrompt:
          'Why is the Einstein Trust Layer essential when connecting enterprise customer data to generative AI models through the LLM Gateway?',
        options: [
          {
            label: 'A',
            text: 'Because generative AI systems are non-deterministic and require technical controls for secure data retrieval, dynamic grounding, zero data retention, toxicity detection, and audit trails.',
            isCorrect: true,
            explanation: 'Non-deterministic LLMs can produce unpredictable outputs or leak data without a mediating Trust Layer enforcing privacy, zero retention, and toxicity policing.'
          },
          {
            label: 'B',
            text: 'Because third-party LLMs cannot parse English sentences unless translated into binary by the Trust Layer.',
            isCorrect: false,
            explanation: 'LLMs parse natural language natively; the Trust Layer enforces security, privacy, and governance.'
          },
          {
            label: 'C',
            text: 'To ensure that third-party LLM vendors permanently store and train their public models on Salesforce customer PII.',
            isCorrect: false,
            explanation: 'The Trust Layer enforces the exact opposite: zero data retention so third-party LLMs never keep or inspect customer data.'
          },
          {
            label: 'D',
            text: 'To prevent users from creating prompts in Prompt Builder.',
            isCorrect: false,
            explanation: 'Prompt Builder works directly with the Trust Layer to send grounded, safe prompts to LLMs.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'af-ch07-fc1',
        category: 'architecture',
        front: 'What are the three components that belong exclusively to Agentforce?',
        back: 'Atlas Reasoning Engine (the brains), Agent Builder (with Prompt Builder and Agent Creator), and Testing Center (sandbox testing and usage tracking).',
        mentalHook: 'Exclusive Agentforce Trio = Atlas + Agent Builder + Testing Center.'
      },
      {
        id: 'af-ch07-fc2',
        category: 'architecture',
        front: 'What were the three most important platform developments revealed in Srini Tallapragada’s 2024 engineering manifesto?',
        back: 'Hyperforce (Salesforce on the public cloud), Data Cloud (unified view of customer data), and Generative AI (safe enterprise use of advanced AI).',
        mentalHook: 'Platform Transformation Triad = Hyperforce + Data Cloud + GenAI.'
      },
      {
        id: 'af-ch07-fc3',
        category: 'data',
        front: 'Which four major external data warehouses/lakehouses does Data Cloud Commonly connect to via Zero-Copy?',
        back: 'Snowflake, Databricks, Google BigQuery, and Amazon Redshift.',
        mentalHook: 'Zero-Copy Quartet = Snowflake, Databricks, BigQuery, Redshift.'
      },
      {
        id: 'af-ch07-fc4',
        category: 'data',
        front: 'What is the architectural purpose of a "data lakehouse" in Data Cloud?',
        back: 'To retain raw data in case it is needed while providing progressively refined views (cleaned dates, mapped fields, calculated metrics like CLV) for easy AI querying.',
        mentalHook: 'Lakehouse = Raw lake storage + Refined warehouse views.'
      },
      {
        id: 'af-ch07-fc5',
        category: 'security',
        front: 'What five core functions does the Einstein Trust Layer perform inside the LLM Gateway?',
        back: 'Secure data retrieval, dynamic grounding, zero data retention, toxicity detection, and audit trail/feedback logging.',
        mentalHook: 'Retrieve -> Ground -> Zero-Retain -> Detoxify -> Audit.'
      },
      {
        id: 'af-ch07-fc6',
        category: 'adaptation',
        front: 'What does Salesforce’s naming convention "Builder" (Model Builder, Prompt Builder, Agent Builder) signify?',
        back: 'A guided low-code workflow product whose output is a functional operational tool (like a model, prompt template, or agent) rather than a static chart or report.',
        mentalHook: 'Builder = Low-code workflow that outputs a working tool.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'af-ch07-fc-chal1',
        conceptTitle: 'The Three Platform Transformations Underneath Agentforce',
        prompt:
          'Explain why Marc Benioff joked that Salesforce "accidentally built the perfect platform for agents" by walking through the four-year transformation of Hyperforce, Data Cloud, and Generative AI.',
        rubricChecklist: [
          'Distinguishes the three exclusive Agentforce parts (Atlas Reasoning Engine, Agent Builder, Testing Center) from the underlying platform.',
          'Explains Hyperforce as a multi-substrate public cloud architecture across 20 regions solving data residency and scale (with AIOps Agent).',
          'Explains Data Cloud’s lakehouse refinements, zero-copy federation (Snowflake, Databricks, BigQuery, Redshift), and vector database for semantic RAG.',
          'Explains the GenAI layer: taming non-deterministic LLMs via the LLM Gateway, Einstein Trust Layer, Model Builder, and Prompt Builder.'
        ],
        modelExplanation:
          'While Atlas Reasoning Engine, Agent Builder, and Testing Center are the visible parts of Agentforce, they only work because Salesforce spent four years transforming Force.com into a modern stack (migrating 85% of customers). First, Hyperforce moved workloads onto public cloud hyperscalers across 20 regions to solve global data residency and scale. Second, Data Cloud built a lakehouse that harmonizes identities, connects to Snowflake/Databricks/BigQuery/Redshift via zero-copy, and vectorizes unstructured PDFs by semantic meaning for RAG. Third, the Einstein Trust Layer and low-code Builders created a safe gateway to control non-deterministic LLMs. Those three upgrades turned out to be the exact prerequisites required for autonomous agents.'
      },
      {
        id: 'af-ch07-fc-chal2',
        conceptTitle: 'How Data Cloud’s Lakehouse, Zero-Copy, and Vector Database Power Agentic RAG',
        prompt:
          'Explain from first principles how Data Cloud prepares both structured transactional tables and unstructured PDF documents so the Atlas Reasoning Engine can respond to a customer in real time.',
        rubricChecklist: [
          'Explains the lakehouse pattern: keeping raw data while building refined views (normalizing dates, mapping fields, calculating CLV).',
          'Defines zero-copy sharing and federation as accessing external databases in place without the cost, latency, or risk of copying.',
          'Explains how the vector database converts raw text and images into mathematical vectors that capture semantic intent rather than just literal words.',
          'Connects both streams to Agentforce: sifting through structured profiles and unstructured semantic vectors simultaneously with fast response times.'
        ],
        modelExplanation:
          'When an Agentforce agent needs context to answer a customer, Data Cloud provides a unified, high-speed retrieval layer. For structured data, its lakehouse architecture maps fields, cleans formats, and computes metrics like customer lifetime value, while zero-copy federation queries external warehouses like Snowflake or BigQuery in place without copying data. For unstructured data like PDFs, contracts, and call transcripts, Data Cloud’s vector database converts text and images into mathematical embeddings that represent human intent and semantic meaning. Atlas can therefore query harmonized customer records and semantic document vectors simultaneously in sub-second time.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch07-n1',
        label: 'Atlas Reasoning Engine',
        category: 'architecture',
        chapterNumber: 7,
        importance: 1,
        definition: 'The core reasoning brain of Agentforce that interprets user requests, determines intent, formulates execution plans, and initiates platform actions.',
        whyItMatters: 'Serves as the central orchestrator connecting user channels, Data Cloud RAG, Flows, and the LLM Gateway.'
      },
      {
        id: 'af-ch07-n2',
        label: 'Hyperforce Multi-Substrate Cloud',
        category: 'architecture',
        chapterNumber: 7,
        importance: 2,
        definition: 'Salesforce’s public-cloud infrastructure layer running across hyperscalers (AWS, GCS) in 20 regions with built-in data residency, identity controls, and an autonomous AIOps Agent.',
        whyItMatters: 'Satisfies sovereign data residency requirements and provides elastic compute for Data Cloud and Agentforce.'
      },
      {
        id: 'af-ch07-n3',
        label: 'Data Cloud Lakehouse',
        category: 'data',
        chapterNumber: 7,
        importance: 1,
        definition: 'A Big Data architecture that preserves raw batch and real-time data while exposing progressively refined, schema-mapped, and identity-resolved views alongside zero-copy federation.',
        whyItMatters: 'Eliminates data fragmentation so agents query a single harmonized customer profile.'
      },
      {
        id: 'af-ch07-n4',
        label: 'Semantic Vector Database',
        category: 'data',
        chapterNumber: 7,
        importance: 1,
        definition: 'Data Cloud’s storage and retrieval engine that converts unstructured text, PDFs, transcripts, and images into mathematical vectors encoding semantic meaning and human intent.',
        whyItMatters: 'Enables RAG retrievers to find conceptually relevant knowledge rather than relying on fragile keyword matching.'
      },
      {
        id: 'af-ch07-n5',
        label: 'LLM Gateway & Trust Layer',
        category: 'security',
        chapterNumber: 7,
        importance: 1,
        definition: 'The mandatory mediation boundary between platform data and external LLMs (GPT, Claude, Gemini) enforcing PII protection, dynamic grounding, zero retention, toxicity scoring, and audits.',
        whyItMatters: 'Contains the risks of non-deterministic generative models so enterprises can safely use external foundation models.'
      },
      {
        id: 'af-ch07-n6',
        label: 'Agent Builder & Testing Center',
        category: 'evaluation',
        chapterNumber: 7,
        importance: 2,
        definition: 'The low-code configuration studio (paired with Prompt Builder and Agent Creator) and automated sandbox evaluation environment for Agentforce.',
        whyItMatters: 'Allows teams to assemble agent skills declaratively and verify behavior at scale before production deployment.'
      }
    ],
    edges: [
      {
        source: 'af-ch07-n2',
        target: 'af-ch07-n3',
        relationship: 'prerequisite_for',
        explanation: 'Data Cloud is built directly on top of Hyperforce and requires its multi-region hyperscaler compute to run.'
      },
      {
        source: 'af-ch07-n4',
        target: 'af-ch07-n3',
        relationship: 'part_of',
        explanation: 'The semantic vector database is an integrated component of Data Cloud that makes unstructured data usable for RAG.'
      },
      {
        source: 'af-ch07-n3',
        target: 'af-ch07-n1',
        relationship: 'optimizes',
        explanation: 'Data Cloud feeds harmonized profiles, zero-copy warehouse data, and semantic vectors into the Atlas Reasoning Engine.'
      },
      {
        source: 'af-ch07-n5',
        target: 'af-ch07-n1',
        relationship: 'mitigates',
        explanation: 'The LLM Gateway and Trust Layer police all external model calls initiated by Atlas against data leakage and non-deterministic toxicity.'
      },
      {
        source: 'af-ch07-n6',
        target: 'af-ch07-n1',
        relationship: 'evaluates',
        explanation: 'Testing Center simulates and audits the plans and responses generated by Atlas and Agent Builder configurations.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapter 7 (c07f001.png included), zero forbidden clichés, covers Atlas/Agent Builder/Testing Center, Hyperforce, Data Cloud Lakehouse/Vector DB, and Trust Layer.'
  }
};

export const afCh08Mastery: ChapterMastery = {
  chapterNumber: 8,
  chapterId: 'ch08',
  title: 'What Is the Einstein Trust Layer, and Why Do You Need It?',
  subtitle: 'Tracing the Bidirectional Request-and-Response Security Pipeline Between Enterprise Data and External LLMs',
  readingTimeMinutes: 6,
  sourceWordCount: 1699,
  executiveThesis:
    'The Einstein Trust Layer transforms LLMs from untrusted external novelties into enterprise-grade reasoning engines by mediating every outbound prompt and inbound response across a model-agnostic gateway. On the outbound path, it grounds prompts in live first-party data, masks sensitive PII, and injects prompt-defense guardrails; on the inbound path, it enforces zero data retention, scores toxicity on a 0-to-1 scale, demasks placeholders, and writes an immutable audit trail.',
  paradigmShift: {
    oldWay:
      'Enterprises either block external LLMs entirely over PII leakage fears or send unmasked prompts directly to single-vendor APIs that retain data.',
    newWay:
      'Every prompt traverses a model-agnostic Trust Layer that dynamically grounds, masks, defends, zero-retains, detoxifies, demasks, and audits across commercial, hosted, or BYO models.',
    whyItChanged:
      'Enterprises cannot lock into a single LLM winner or expose regulated customer data, yet ungrounded prompts without first-party context hallucinate wildly.'
  },
  customDiagrams: [
    {
      id: 'af-ch08-diag1',
      title: 'The Bidirectional Einstein Trust Layer Pipeline',
      subtitle: 'Step-by-step lifecycle of an enterprise prompt from outbound grounding to inbound demasking and audit',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="34" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">EINSTEIN TRUST LAYER: BIDIRECTIONAL MEDIATION PIPELINE</text>
  <text x="32" y="53" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">Outbound Preparation (Top Track) → Zero-Retention LLM Gateway → Inbound Cleanup (Bottom Track)</text>

  <!-- TOP TRACK: OUTBOUND PROMPT STREAM -->
  <rect x="32" y="72" width="135" height="92" rx="6" fill="#111827" stroke="#2563EB" stroke-width="1.5"/>
  <text x="99" y="96" text-anchor="middle" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">01. GROUNDING</text>
  <text x="99" y="116" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Secure &amp; Dynamic</text>
  <text x="99" y="134" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">Merge Fields + Flows</text>
  <text x="99" y="148" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">+ Data Cloud RAG</text>

  <line x1="167" y1="118" x2="195" y2="118" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="195" y="72" width="145" height="92" rx="6" fill="#111827" stroke="#EA580C" stroke-width="1.5"/>
  <text x="267" y="96" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">02. DATA MASKING</text>
  <text x="267" y="116" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">PII Tokenization</text>
  <text x="267" y="134" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">Regex + ML + Shield</text>
  <text x="267" y="148" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="9">Sub: NAME_1001</text>

  <line x1="340" y1="118" x2="368" y2="118" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="368" y="72" width="145" height="92" rx="6" fill="#111827" stroke="#EA580C" stroke-width="1.5"/>
  <text x="440" y="96" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">03. PROMPT DEFENSE</text>
  <text x="440" y="116" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Anti-Injection</text>
  <text x="440" y="134" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">System Guardrails</text>
  <text x="440" y="148" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">"Do not guess"</text>

  <line x1="513" y1="118" x2="555" y2="145" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 4"/>

  <!-- RIGHT GATEWAY: ZERO RETENTION LLM BOUNDARY -->
  <rect x="555" y="95" width="213" height="220" rx="8" fill="#1F2937" stroke="#059669" stroke-width="2"/>
  <text x="661" y="122" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">04. LLM GATEWAY</text>
  <text x="661" y="142" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="700">Zero Data Retention</text>
  <text x="661" y="162" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">"Mission: Impossible" Memory</text>
  <rect x="575" y="178" width="173" height="115" rx="6" fill="#111827" stroke="#6B7280"/>
  <text x="661" y="200" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="10" font-weight="600">Model-Agnostic Routing</text>
  <text x="661" y="220" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="9">• OpenAI / Anthropic</text>
  <text x="661" y="238" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="9">• Google / Cohere</text>
  <text x="661" y="256" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="9">• Salesforce X-Gen</text>
  <text x="661" y="274" text-anchor="middle" fill="#D1D5DB" font-family="JetBrains Mono, monospace" font-size="9">• Hosted &amp; BYO Models</text>

  <!-- BOTTOM TRACK: INBOUND RESPONSE STREAM -->
  <line x1="555" y1="275" x2="513" y2="305" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="368" y="260" width="145" height="92" rx="6" fill="#111827" stroke="#DC2626" stroke-width="1.5"/>
  <text x="440" y="284" text-anchor="middle" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">05. TOXICITY SCAN</text>
  <text x="440" y="304" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Safety Score [0..1]</text>
  <text x="440" y="322" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">0 = Unsafe | 1 = Safe</text>
  <text x="440" y="336" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">Hate / Bias / Rude</text>

  <line x1="368" y1="306" x2="340" y2="306" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="195" y="260" width="145" height="92" rx="6" fill="#111827" stroke="#059669" stroke-width="1.5"/>
  <text x="267" y="284" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">06. DATA DEMASKING</text>
  <text x="267" y="304" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Restore Original PII</text>
  <text x="267" y="322" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="9">NAME_1001 → Real Val</text>
  <text x="267" y="336" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">Vault Key Lookup</text>

  <line x1="195" y1="306" x2="167" y2="306" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>

  <rect x="32" y="260" width="135" height="92" rx="6" fill="#064E3B" stroke="#059669" stroke-width="2"/>
  <text x="99" y="284" text-anchor="middle" fill="#ECFDF5" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">07. AUDIT &amp; LOG</text>
  <text x="99" y="304" text-anchor="middle" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="11" font-weight="600">Feedback &amp; Trail</text>
  <text x="99" y="322" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="9">Timestamps + Scores</text>
  <text x="99" y="336" text-anchor="middle" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="9">User Quality Ratings</text>

  <!-- Vault Bridge between Masking and Demasking -->
  <line x1="267" y1="164" x2="267" y2="260" stroke="#FDBA74" stroke-width="1.5" stroke-dasharray="4 4"/>
  <rect x="212" y="198" width="110" height="26" rx="4" fill="#1F2937" stroke="#FDBA74"/>
  <text x="267" y="215" text-anchor="middle" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="9">Decoder Vault</text>
</svg>`,
      bierutCaption:
        'Trace the clockwise loop: outbound prompts are grounded, tokenized (`NAME_1001`), and fortified with prompt defense before crossing the Zero-Retention Gateway;',
      annotations: [
        {
          step: '01',
          label: 'Outbound Grounding, Masking & Defense',
          explanation: 'First-party data is injected via merge fields or dynamic Flows/Data Cloud, sensitive PII is replaced with placeholders like NAME_1001, and anti-injection instructions are appended.'
        },
        {
          step: '02',
          label: 'Model-Agnostic Zero-Retention Gateway',
          explanation: 'Prompts route to OpenAI, Anthropic, Google, Cohere, X-Gen, or BYO models under contractual and technical zero-retention agreements where data is forgotten immediately after inference.'
        },
        {
          step: '03',
          label: 'Inbound Toxicity Scoring, Demasking & Audit',
          explanation: 'Responses receive a continuous safety score from 0 (unsafe) to 1 (safe), placeholders map back to real PII values, and full interaction metadata is recorded in the audit trail.'
        }
      ]
    },
    {
      id: 'af-ch08-diag2',
      title: 'Grounding & Privacy Trade-Off: Static Merge vs. Dynamic Grounding & Masking vs. Zero Retention',
      subtitle: 'How client/server grounding works and why autonomous agents often favor Zero Retention over PII Masking',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0B0F19" rx="12"/>
  <text x="32" y="36" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="16" font-weight="700">GROUNDING MECHANISMS &amp; THE AGENT MASKING TRADE-OFF</text>
  <text x="32" y="56" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="11">Contrasting Secure Data Retrieval vs. Dynamic Grounding and GenAI Masking vs. Agent Relational Needs</text>

  <!-- Left Panel: Two Grounding Tiers -->
  <rect x="32" y="78" width="355" height="310" rx="8" fill="#111827" stroke="#2563EB" stroke-width="1.5"/>
  <text x="52" y="106" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">PART A: TWO GROUNDING MODES</text>

  <rect x="52" y="124" width="315" height="105" rx="6" fill="#1F2937" stroke="#6B7280"/>
  <text x="68" y="148" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="700">1. Secure Data Retrieval (Merge Fields)</text>
  <text x="68" y="170" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">{{{Contact.Name}}}</text>
  <text x="68" y="188" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-size="10">{{{Contact.Lifetimespend__c}}}</text>
  <text x="68" y="210" fill="#9CA3AF" font-family="Inter, sans-serif" font-size="10">Client-side (record in context) or server-side DB pull</text>

  <rect x="52" y="248" width="315" height="120" rx="6" fill="#1F2937" stroke="#059669"/>
  <text x="68" y="272" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="700">2. Dynamic Grounding (Context &amp; RAG)</text>
  <text x="68" y="294" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">{{{Flow.Get_Tasks_from_Contact}}}</text>
  <text x="68" y="312" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">{{{DataCloudRetrieve:...recentOrders[0]}}}</text>
  <text x="68" y="334" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">Pulls related cases, semantic vector articles,</text>
  <text x="68" y="350" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">network outages, loyalty rules &amp; external APIs</text>

  <!-- Right Panel: Masking vs Agent Accuracy -->
  <rect x="413" y="78" width="355" height="310" rx="8" fill="#111827" stroke="#EA580C" stroke-width="1.5"/>
  <text x="433" y="106" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">PART B: MASKING VS. AGENT ACCURACY</text>

  <rect x="433" y="124" width="315" height="105" rx="6" fill="#1F2937" stroke="#EA580C"/>
  <text x="449" y="148" fill="#F9FAFB" font-family="Inter, sans-serif" font-size="12" font-weight="700">Standard GenAI: Enable Data Masking</text>
  <text x="449" y="170" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Substitutes SSNs, banking info, names (NAME_1001)</text>
  <text x="449" y="190" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Ideal for email drafting &amp; call summarization</text>
  <text x="449" y="210" fill="#FCA5A5" font-family="JetBrains Mono, monospace" font-size="10">Trade-off: Blinds relational lookups</text>

  <rect x="433" y="248" width="315" height="120" rx="6" fill="#064E3B" stroke="#059669"/>
  <text x="449" y="272" fill="#ECFDF5" font-family="Inter, sans-serif" font-size="12" font-weight="700">Agentforce Agents: Rely on Zero Retention</text>
  <text x="449" y="294" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Agents must look up "similar accounts" &amp; relationships</text>
  <text x="449" y="314" fill="#D1D5DB" font-family="Inter, sans-serif" font-size="10">• Masking degrades multi-step relational reasoning</text>
  <text x="449" y="338" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">Solution: Bypass masking; enforce strict</text>
  <text x="449" y="354" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="10">Zero Data Retention + Role Permissions</text>
</svg>`,
      bierutCaption:
        'Left panel contrasts static field merges against dynamic Flow/Data Cloud retrieval;',
      annotations: [
        {
          step: '01',
          label: 'Client-Side & Server-Side Merge Fields',
          explanation: 'Secure data retrieval pulls direct record attributes like {{{Contact.Name}}} or {{{Contact.Lifetimespend__c}}} into the prompt.'
        },
        {
          step: '02',
          label: 'Transformative Dynamic Grounding',
          explanation: 'Invokes Flows ({{{Flow.Get_Tasks_from_Contact}}}) and Data Cloud semantic retrievers to inject live operational context such as outages or recent orders.'
        },
        {
          step: '03',
          label: 'Why Agents Often Skip Masking',
          explanation: 'Replacing entity names with tokens like NAME_1001 prevents an agent from resolving account relationships or finding similar accounts, making Zero Retention the primary privacy shield for agents.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'af-ch08-mm1',
      name: 'The Model-Agnostic Mediation Firewall',
      tagline: 'Decouple enterprise trust policies from the fast-moving LLM horse race',
      naiveIntuition:
        'An enterprise should pick one flagship LLM vendor and build security and prompt logic directly inside that vendor’s proprietary SDK.',
      firstPrinciplesReality:
        'No single foundation model leads every task permanently;',
      howToApply:
        'Enforce all grounding, masking, toxicity, and audit policies inside the Salesforce Trust Layer rather than in vendor-specific API wrappers.'
    },
    {
      id: 'af-ch08-mm2',
      name: 'The Masking-vs-Reasoning Accuracy Trade-Off',
      tagline: 'Tokenizing entity names protects privacy in summaries but blinds relational agent lookups',
      naiveIntuition:
        'Every AI call should always replace all account and contact names with masked tokens like `NAME_1001` before reaching the LLM.',
      firstPrinciplesReality:
        'While PII masking works cleanly for text summarization or email drafting, stripping real entity identifiers makes it impossible for an autonomous agent to look up "similar accounts" or traverse entity relationships.',
      howToApply:
        'Enable regex/ML data masking for standard generative drafting tasks, but rely on contractual and technical Zero Data Retention when autonomous agents require entity-level relational reasoning.'
    },
    {
      id: 'af-ch08-mm3',
      name: 'Continuous Safety Scoring over Binary Censorship',
      tagline: 'Score output safety from 0 to 1 so tolerance thresholds adapt by industry and region',
      naiveIntuition:
        'Toxicity detection should work as a single hardcoded global blocklist that deletes any flagged response.',
      firstPrinciplesReality:
        'Edge cases and acceptable language tolerances vary across industries, geographies, and brands;',
      howToApply:
        'Configure domain-specific safety score thresholds on the inbound Trust Layer stream and log all toxicity scores in the compliance audit trail.'
    }
  ],
  deepSections: [
    {
      id: 'af-ch08-sec1',
      sectionNumber: '8.1',
      title: 'Model-Agnostic Mediation and Dual-Mode Grounding',
      subtitle: 'Connecting Prompt Builder to OpenAI, Anthropic, Google, Cohere, X-Gen, and BYO models with first-party data',
      coreMechanism:
        'The Einstein Trust Layer does not write or optimize prompts—that happens upstream in Prompt Builder. Once constructed, the prompt enters the Trust Layer, which mediates between internal enterprise data and any foundation model: commercial partners, Salesforce’s own LLMs (such as X-Gen), platform-hosted models, or customer build-your-own (BYO) models.\n\nTo prevent hallucinations—which occur when an LLM is given too little data and too much room to dream—the Trust Layer grounds prompts in first-party data via two mechanisms. Secure data retrieval merges fields from the current record (client-side) or database (server-side), such as `{{{Contact.Name}}}` or `{{{Contact.Lifetimespend__c}}}`. Dynamic grounding executes Flows and Data Cloud vector/real-time retrievers to inject related cases, knowledge articles, network outages, or external API data.',
      keyTakeaways: [
        'Grounding anchors an airy prompt in proprietary first-party reality, simultaneously personalizing outputs and starving the LLM of room to hallucinate.',
        'The Trust Layer is completely model-agnostic, supporting commercial APIs, Salesforce X-Gen, hosted models, and BYO models.'
      ],
      commonPitfalls: [
        'Confusing the acronym ETL with the Einstein Trust Layer in enterprise architecture documentation.',
        'Relying solely on static client-side merge fields when the prompt requires live multi-record context from Flows or Data Cloud semantic search.'
      ],
      figures: [
        {
          file: 'c08f001.png',
          originalLabel: 'Figure 8.1 Einstein Trust Layer',
          bierutTitle: 'Anatomy of the Bidirectional Trust Pipeline: From Prompt Grounding and Masking to Toxicity Scoring and Audit',
          editorialAnalysis:
            'Figure 8.1 maps the complete round-trip journey of a prompt and response across the Trust Layer boundary.',
          keyTakeaways: [
            'Every outbound prompt undergoes three protective transformations before crossing the LLM Gateway.',
            'Every inbound completion undergoes three verification and restoration steps before reaching the user.'
          ]
        }
      ]
    },
    {
      id: 'af-ch08-sec2',
      sectionNumber: '8.2',
      title: 'Outbound Protection: Data Masking, Prompt Defense, and Zero Retention',
      subtitle: 'How PII tokenization, anti-injection guardrails, and Mission: Impossible memory policies work',
      coreMechanism:
        'Because grounded prompts contain precious first-party data and regulated PII, the Trust Layer applies Data Masking. Using regular expressions, context words, machine-learning entity recognition models, and classifications inherited from Shield Platform Encryption, it strips Social Security numbers, banking info, and names—substituting placeholders like `NAME_1001` while storing the decoder key locally.\n\nBefore exiting the platform, Prompt Defense appends system guardrails instructing the LLM not to guess when uncertain and blocking malicious prompt-injection attacks. The prompt then crosses the LLM Gateway under a shared Zero Data Retention architecture, ensuring the external model forgets the payload immediately after processing.',
      keyTakeaways: [
        'Data masking can degrade output accuracy for autonomous agents that need to resolve entity relationships or find "similar accounts," so agents often rely on zero retention.',
        'Not every third-party or custom LLM automatically shares Salesforce’s technical zero-retention architecture—architects must verify the fine print of each chosen model.'
      ],
      commonPitfalls: [
        'Turning on aggressive name/account masking for an autonomous sales agent and wondering why it fails to identify related accounts or parent-child hierarchies.',
        'Assuming a Bring-Your-Own (BYO) external model endpoint enforces zero data retention without verifying its technical integration contract.'
      ]
    },
    {
      id: 'af-ch08-sec3',
      sectionNumber: '8.3',
      title: 'Inbound Cleanup: Toxicity Scoring, Data Demasking, and the Audit Trail',
      subtitle: 'Policing non-deterministic completions from 0 to 1 and logging immutable compliance telemetry',
      coreMechanism:
        'When the external LLM returns its completion to the Trust Layer, response cleanup begins. Because foundation models train on massive internet corpora containing human bias and offensive material, their non-deterministic outputs can occasionally turn rude, biased, or harmful. Toxicity Detection passes every response through a specialized classifier that flags hate speech, violence, profanity, and offensive content, assigning a continuous safety score from 0 (not safe) to 1 (safe) so different industries and geographies can enforce their own tolerances.\n\nNext, Data Demasking maps placeholders like `NAME_1001` back to their original PII values using the stored decoder key. Finally, the Feedback and Audit Trail framework captures user quality ratings and logs full compliance metadata for legal and engineering review—recording the exact prompts, responses, timestamps, toxicity scores, and whether the output was accepted.',
      formulas: [
        {
          name: 'Einstein Trust Layer Safety & Toxicity Score Interval',
          expression: 'S_{\\text{safety}}(R) \\in [0, 1], \\quad \\text{Deliver}(R) \\iff S_{\\text{safety}}(R) \\ge \\tau_{\\text{org}}',
          intuition:
            'Rather than a rigid binary filter that cannot adapt to regional or industry nuances, the toxicity detector assigns each response R a continuous safety score between 0 (not safe) and 1 (completely safe), allowing each enterprise to set its own acceptance threshold tau_org.',
          variables: [
            {
              symbol: 'S_{\\text{safety}}(R)',
              meaning: 'Continuous safety score assigned by the Trust Layer toxicity model to LLM response R (0 = not safe, 1 = safe).'
            },
            {
              symbol: '\\tau_{\\text{org}}',
              meaning: 'Organization-, industry-, or geography-specific minimum safety threshold required before demasking and delivery.'
            }
          ],
          workedExample:
            'If a financial services firm sets tau_org = 0.92 and an LLM response receives S_safety(R) = 0.65 due to borderline aggressive collections phrasing, the Trust Layer flags the response in the audit trail and blocks customer delivery.'
        }
      ],
      keyTakeaways: [
        'Toxicity detection outputs a continuous safety score from 0 (not safe) to 1 (safe) rather than a simple binary pass/fail so companies can handle borderline edge cases.',
        'The audit trail records prompts, responses, timestamps, toxicity scores, and usage outcomes to satisfy legal compliance and drive continuous model improvement.'
      ],
      commonPitfalls: [
        'Discarding rejected or low-rated LLM outputs without logging them in the audit and feedback framework, which starves teams of optimization telemetry.',
        'Applying a single rigid toxicity cutoff across all global business units without accounting for industry-specific terminology.'
      ]
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Einstein Trust Layer Security Mechanisms: Mechanism, Scope, and Agent Trade-Offs',
      description: 'Comparing the six operational stages of the Einstein Trust Layer across data protection and agentic reasoning.',
      headers: ['Trust Layer Stage', 'Direction', 'Core Technical Mechanism', 'Agentforce Operational Nuance'],
      rows: [
        ['Secure Data Retrieval', 'Outbound', 'Client/server merge fields ({{{Contact.Name}}})', 'Fast single-record personalization'],
        ['Dynamic Grounding', 'Outbound', 'Flows + Data Cloud vector/real-time retrievers', 'Primary engine for rich multi-source agent context'],
        ['Data Masking & Demasking', 'Bidirectional', 'Regex + ML + Shield encryption token swap (NAME_1001)', 'Often disabled for agents because masking breaks relational lookups'],
        ['Prompt Defense', 'Outbound', 'System guardrails against guessing & prompt injection', 'Critical for customer-facing agents exposed to untrusted inputs'],
        ['Zero Data Retention', 'Gateway', 'Shared technical/legal architecture erasing data post-call', 'Primary privacy shield for agents when masking is disabled'],
        ['Toxicity & Audit Trail', 'Inbound', 'Safety score [0..1] + immutable metadata/feedback log', 'Enables industry-tuned safety thresholds & legal accountability']
      ],
      verdictRule:
        'Combine Dynamic Grounding, Prompt Defense, Zero Data Retention, and Toxicity/Audit logging for all agents, and selectively disable Data Masking when agents must reason over entity relationships.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'af-ch08-scen1',
      title: 'Resolving the Data Masking Accuracy Drop in B2B Account Intelligence',
      roleAndContext: 'Lead AI Architect at a B2B SaaS enterprise deploying an Agentforce Sales Agent to recommend cross-sell opportunities across corporate hierarchies.',
      symptomOrFailure:
        'With full Data Masking enabled, the agent repeatedly failed to identify subsidiary relationships or look up "similar accounts" because account names and addresses were replaced with opaque `NAME_1001` and `ADDRESS_2004` tokens before reaching the LLM.',
      naiveFixAndWhyItFails:
        'Bypassing the Einstein Trust Layer entirely to send raw prompts directly to an external LLM endpoint restores accuracy but violates corporate privacy governance and loses audit trails.',
      firstPrinciplesSolution:
        'Keep the agent routed through the Einstein Trust Layer with Prompt Defense, Toxicity Detection, and Audit Trail active, but disable entity masking for the agent workflow and rely on OpenAI/Anthropic Zero Data Retention plus CRM role permissions.',
      measurableOutcome:
        'Restored cross-sell and similar-account lookup accuracy from 34% to 94% while maintaining 100% zero third-party data retention and full legal audit logging.'
    },
    {
      id: 'af-ch08-scen2',
      title: 'Defending a Telecom Service Agent Against Prompt Injection and Hallucinated Outages',
      roleAndContext: 'Principal Security Engineer at a telecommunications carrier exposing an autonomous troubleshooting agent on its public support portal.',
      symptomOrFailure:
        'Red-team testers tricked an early unguarded prompt into promising unauthorized $500 bill credits via prompt injection, and the model fabricated regional fiber outage causes when real-time telemetry was missing.',
      naiveFixAndWhyItFails:
        'Maintaining a manual list of banned words in client-side JavaScript is trivially bypassed by attackers and does not supply live network outage facts to the LLM.',
      firstPrinciplesSolution:
        'Use Dynamic Grounding via Flows and Data Cloud to inject live network outage status and loyalty rules, and enable Trust Layer Prompt Defense to block injection attempts and instruct the model not to answer when uncertain.',
      measurableOutcome:
        'Blocked 100% of red-team prompt-injection vectors and reduced fabricated outage explanations to zero across 50,000 test conversations.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'af-ch08-q1',
        scenarioPrompt:
          'What is the functional difference between "Secure Data Retrieval" and "Dynamic Grounding" inside the Einstein Trust Layer?',
        options: [
          {
            label: 'A',
            text: 'Secure Data Retrieval pulls basic merge fields (like {{{Contact.Name}}}) from the record or database, whereas Dynamic Grounding pulls rich contextual data from Flows, Data Cloud vector search, and external APIs.',
            isCorrect: true,
            explanation: 'Secure data retrieval works like email merge fields.'
          },
          {
            label: 'B',
            text: 'Secure Data Retrieval is only for images, whereas Dynamic Grounding is only for audio files.',
            isCorrect: false,
            explanation: 'Both mechanisms ground text prompts in structured and unstructured enterprise data.'
          },
          {
            label: 'C',
            text: 'Dynamic Grounding permanently trains the external LLM weights on customer PII.',
            isCorrect: false,
            explanation: 'Grounding injects context into the runtime prompt under Zero Data Retention;'
          },
          {
            label: 'D',
            text: 'Secure Data Retrieval happens after the LLM responds, whereas Dynamic Grounding happens two weeks later.',
            isCorrect: false,
            explanation: 'Both grounding mechanisms execute on the outbound prompt before it reaches the LLM Gateway.'
          }
        ]
      },
      {
        id: 'af-ch08-q2',
        scenarioPrompt:
          'Why is Data Masking (replacing PII with tokens like `NAME_1001`) often NOT used for autonomous Agentforce agents, even though it is heavily used for general GenAI tasks?',
        options: [
          {
            label: 'A',
            text: 'Because data masking can downgrade agent output accuracy—making it impossible for the agent to look up "similar accounts" or reference entity relationships—so agents rely on Zero Data Retention instead.',
            isCorrect: true,
            explanation: 'Masking names and entities blinds relational lookups required by autonomous agents, so agents typically rely on zero retention and platform permissions for privacy.'
          },
          {
            label: 'B',
            text: 'Because the Atlas Reasoning Engine charges $100 per masked token.',
            isCorrect: false,
            explanation: 'The constraint is relational reasoning accuracy, not per-token masking fees.'
          },
          {
            label: 'C',
            text: 'Because Data Masking only works with COBOL mainframes and not with OpenAI or Anthropic.',
            isCorrect: false,
            explanation: 'Data Masking works across the LLM Gateway;'
          },
          {
            label: 'D',
            text: 'Because regular expressions and Shield Platform Encryption cannot recognize Social Security numbers.',
            isCorrect: false,
            explanation: 'Trust Layer masking uses regex, context words, ML models, and Shield classifications to detect SSNs and names effectively.'
          }
        ]
      },
      {
        id: 'af-ch08-q3',
        scenarioPrompt:
          'How does Toxicity Detection in the Einstein Trust Layer evaluate inbound LLM responses, and why does it use this format?',
        options: [
          {
            label: 'A',
            text: 'It assigns a safety score from 0 (not safe) to 1 (safe) rather than a simple binary filter, because borderline edge cases and risk tolerances vary across industries, geographies, and companies.',
            isCorrect: true,
            explanation: 'A continuous 0-to-1 safety score allows organizations to set custom thresholds and review borderline cases in the audit trail.'
          },
          {
            label: 'B',
            text: 'It routes every response to a human lawyer who must approve it within 48 hours.',
            isCorrect: false,
            explanation: 'Toxicity detection runs automatically in real time using a specialized machine-learning classifier.'
          },
          {
            label: 'C',
            text: 'It deletes every adjective and adverb from the LLM output.',
            isCorrect: false,
            explanation: 'Toxicity detection scores safety across categories like hate speech and violence without stripping normal grammar.'
          },
          {
            label: 'D',
            text: 'It assigns a score from -500 to +500 based on email open rates.',
            isCorrect: false,
            explanation: 'The Trust Layer safety score ranges strictly from 0 (not safe) to 1 (safe).'
          }
        ]
      },
      {
        id: 'af-ch08-q4',
        scenarioPrompt:
          'What two threats does the "Prompt Defense" step in the Einstein Trust Layer specifically mitigate before a prompt leaves the platform?',
        options: [
          {
            label: 'A',
            text: 'Hardware power outages in the Nevada desert and slow browser rendering.',
            isCorrect: false,
            explanation: 'Infrastructure uptime is handled by Hyperforce, not Prompt Defense.'
          },
          {
            label: 'B',
            text: 'Inadvertent LLM hallucinations when uncertain (by instructing the model not to guess) and malicious prompt-injection attacks from outsiders.',
            isCorrect: true,
            explanation: 'Prompt defense appends system instructions that curb confabulation when information is missing and neutralize deliberate prompt-injection attempts.'
          },
          {
            label: 'C',
            text: 'Duplicate CSV rows in Snowflake and expired SSL certificates in Tableau.',
            isCorrect: false,
            explanation: 'Data deduplication belongs to Data Cloud, not outbound Prompt Defense.'
          },
          {
            label: 'D',
            text: 'High token pricing from commercial LLM vendors.',
            isCorrect: false,
            explanation: 'Prompt Defense actually appends defensive instructions to the prompt to enforce safety and accuracy.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'af-ch08-fc1',
        category: 'security',
        front: 'What are the four categories of foundation models that can connect through the model-agnostic Einstein Trust Layer?',
        back: 'Commercial partner LLMs (OpenAI, Anthropic, Google, Cohere), Salesforce native LLMs (like X-Gen), Salesforce-hosted models, and customer build-your-own (BYO) models.',
        mentalHook: 'Commercial + Native X-Gen + Hosted + BYO.'
      },
      {
        id: 'af-ch08-fc2',
        category: 'data',
        front: 'What is the difference between client-side grounding and server-side grounding in Secure Data Retrieval?',
        back: 'Client-side grounding pulls merge-field data from the current record actively in context, whereas server-side grounding queries the data directly from the database.',
        mentalHook: 'Client-side = Current screen record; Server-side = Direct DB lookup.'
      },
      {
        id: 'af-ch08-fc3',
        category: 'security',
        front: 'What four detection techniques does the Einstein Trust Layer use to perform Data Masking?',
        back: 'Lookups, regular expressions (regex), context words, machine-learning models trained to recognize unusual names/addresses, and inherited Shield Platform Encryption classifications.',
        mentalHook: 'Regex + Context Words + ML Entity Models + Shield Tags.'
      },
      {
        id: 'af-ch08-fc4',
        category: 'security',
        front: 'What does "Zero Data Retention" guarantee when a prompt passes through the LLM Gateway to a partner like OpenAI?',
        back: 'The external LLM provider processes the prompt to generate a response and immediately forgets the customer data—never storing, inspecting, or training on it.',
        mentalHook: 'Zero Retention = Mission: Impossible self-destructing prompt.'
      },
      {
        id: 'af-ch08-fc5',
        category: 'evaluation',
        front: 'How is the Einstein Trust Layer toxicity safety score scaled?',
        back: 'From 0 (not safe) to 1 (safe), enabling companies across different industries and geographies to apply their own tolerance thresholds to borderline cases.',
        mentalHook: 'Safety Score: 0 = Toxic/Unsafe, 1 = Clean/Safe.'
      },
      {
        id: 'af-ch08-fc6',
        category: 'security',
        front: 'What metadata is recorded in the Einstein Trust Layer Audit Trail?',
        back: 'The outbound prompts, inbound responses, timestamps, toxicity safety scores, user quality feedback ratings, and whether the response was actually used.',
        mentalHook: 'Audit Trail = Prompt + Response + Timestamp + Safety Score + Used/Feedback.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'af-ch08-fc-chal1',
        conceptTitle: 'The Complete Round-Trip Lifecycle of a Prompt in the Einstein Trust Layer',
        prompt:
          'Walk a Chief Information Security Officer (CISO) step-by-step through what happens to a prompt from the moment it leaves Prompt Builder until the final response is delivered to the user.',
        rubricChecklist: [
          'Explains outbound Grounding: both Secure Data Retrieval (merge fields) and Dynamic Grounding (Flows, Data Cloud vector search, external APIs).',
          'Explains outbound Data Masking (replacing PII with tokens like NAME_1001 via regex, ML, and Shield tags) and why agents sometimes skip masking in favor of Zero Retention.',
          'Explains Prompt Defense (appending instructions against guessing and prompt injection) and the model-agnostic LLM Gateway with Zero Data Retention.',
          'Explains the inbound return path: Toxicity Detection (scoring safety from 0 to 1), Data Demasking (restoring NAME_1001 to real PII), and logging to the Feedback & Audit Trail.'
        ],
        modelExplanation:
          'Once a prompt template is created in Prompt Builder, it enters the Einstein Trust Layer. First, on the outbound path, the prompt is grounded in first-party data via Secure Data Retrieval (merge fields like Contact Name) and Dynamic Grounding (pulling context from Flows and Data Cloud vector search). Second, Data Masking uses regex, ML models, and Shield classifications to replace sensitive PII with tokens like NAME_1001 (unless bypassed by an agent that needs relational lookups). Third, Prompt Defense appends guardrails to block prompt injection and stop the LLM from guessing. Fourth, the prompt crosses the LLM Gateway to OpenAI, Anthropic, Google, or a BYO model under Zero Data Retention, so the external vendor immediately forgets the data. When the response returns, Toxicity Detection scores its safety from 0 (not safe) to 1 (safe), Data Demasking restores NAME_1001 back to the original PII value, and the entire interaction—prompt, response, timestamp, safety score, and user feedback—is written to an immutable Audit Trail.'
      },
      {
        id: 'af-ch08-fc-chal2',
        conceptTitle: 'Dynamic Grounding and the Agent Data-Masking Dilemma',
        prompt:
          'Explain why grounding is the primary cure for LLM hallucinations, and explain the architectural trade-off between Data Masking and Zero Data Retention when running autonomous agents.',
        rubricChecklist: [
          'Explains why LLMs hallucinate (too little first-party context and too much room to dream) and echoes Sherlock Holmes’s maxim on theorizing before having data.',
          'Contrasts static merge-field grounding (`{{{Contact.Lifetimespend__c}}}`) with transformative Dynamic Grounding (`{{{Flow.Get_Tasks_from_Contact}}}` and Data Cloud semantic retrievers).',
          'Explains the masking dilemma: replacing real names and account IDs with placeholders like `NAME_1001` prevents an agent from looking up "similar accounts" or reasoning across relationships.',
          'Concludes with how Agentforce protects unmasked agent prompts: relying on technical Zero Data Retention at the LLM Gateway plus platform role permissions.'
        ],
        modelExplanation:
          'LLMs hallucinate when given too little concrete data and too much room to invent facts. Grounding solves this by injecting live first-party reality into the prompt—not just static merge fields like Lifetime Spend, but Dynamic Grounding calls that run Flows and Data Cloud vector searches to pull related support cases, knowledge articles, or live network outages. However, grounding introduces a privacy trade-off: while standard GenAI features mask PII into tokens like NAME_1001, doing so for an autonomous agent blinds the model so it cannot look up "similar accounts" or understand account relationships. Therefore, Agentforce agents frequently skip PII masking to preserve relational accuracy and rely instead on contractual and technical Zero Data Retention so the external LLM immediately forgets every piece of data after inference.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'af-ch08-n1',
        label: 'Dynamic Grounding',
        category: 'data',
        chapterNumber: 8,
        importance: 1,
        definition: 'Pulling live enterprise context into a prompt at runtime via Flows, Data Cloud vector search, and approved third-party APIs alongside standard merge fields.',
        whyItMatters: 'Anchors LLM generation in fresh first-party facts, minimizing hallucinations and enabling personalized agent responses.'
      },
      {
        id: 'af-ch08-n2',
        label: 'PII Data Masking & Demasking',
        category: 'security',
        chapterNumber: 8,
        importance: 2,
        definition: 'Replacing sensitive first-party identifiers (SSNs, banking details, names) with tokens like NAME_1001 using regex, ML models, and Shield tags outbound, then restoring them inbound.',
        whyItMatters: 'Prevents raw PII from leaving the enterprise boundary during standard generative drafting, though it trades off with relational lookups in agents.'
      },
      {
        id: 'af-ch08-n3',
        label: 'Prompt Defense',
        category: 'security',
        chapterNumber: 8,
        importance: 2,
        definition: 'Appending defensive system instructions to outbound prompts that forbid fabrication when uncertain and neutralize malicious prompt-injection attacks.',
        whyItMatters: 'Protects customer-facing agents against adversarial manipulation and ungrounded confabulation.'
      },
      {
        id: 'af-ch08-n4',
        label: 'Zero Data Retention Architecture',
        category: 'security',
        chapterNumber: 8,
        importance: 1,
        definition: 'A shared technical and legal integration at the LLM Gateway ensuring external foundation models immediately forget enterprise prompts and completions after inference.',
        whyItMatters: 'Provides the primary privacy guarantee for autonomous agents when entity masking must be disabled to preserve relational reasoning.'
      },
      {
        id: 'af-ch08-n5',
        label: 'Toxicity Detection Safety Score',
        category: 'evaluation',
        chapterNumber: 8,
        importance: 2,
        definition: 'An inbound classifier that evaluates LLM outputs for hate speech, violence, bias, and profanity, assigning a continuous safety score from 0 (not safe) to 1 (safe).',
        formulaOrRule: 'S_safety(R) in [0, 1]',
        whyItMatters: 'Allows organizations across diverse industries and geographies to calibrate custom safety thresholds rather than relying on a blunt binary filter.'
      },
      {
        id: 'af-ch08-n6',
        label: 'Trust Layer Audit Trail & Feedback',
        category: 'evaluation',
        chapterNumber: 8,
        importance: 2,
        definition: 'The persistent logging and rating framework recording every prompt, response, timestamp, toxicity score, and user acceptance outcome.',
        whyItMatters: 'Delivers legal accountability for compliance teams and quality telemetry for continuous model and prompt improvement.'
      }
    ],
    edges: [
      {
        source: 'af-ch08-n1',
        target: 'af-ch08-n2',
        relationship: 'prerequisite_for',
        explanation: 'First-party data pulled into the prompt during Grounding is subsequently scanned and tokenized by Data Masking.'
      },
      {
        source: 'af-ch08-n2',
        target: 'af-ch08-n4',
        relationship: 'trades_off_with',
        explanation: 'Because Data Masking blinds relational lookups ("similar accounts") for agents, Agentforce often trades off masking in favor of Zero Data Retention.'
      },
      {
        source: 'af-ch08-n3',
        target: 'af-ch08-n1',
        relationship: 'optimizes',
        explanation: 'Prompt Defense complements Grounding by instructing the LLM to rely strictly on grounded facts and abstain when uncertain.'
      },
      {
        source: 'af-ch08-n5',
        target: 'af-ch08-n6',
        relationship: 'part_of',
        explanation: 'Every inbound Toxicity Detection safety score (0 to 1) is permanently recorded inside the Trust Layer Audit Trail.'
      },
      {
        source: 'af-ch08-n6',
        target: 'af-ch08-n1',
        relationship: 'evaluates',
        explanation: 'User feedback and audit trail outcomes evaluate whether grounded prompts produced accurate, accepted responses.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 3,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes: '100% coverage of Chapter 8 (c08f001.png included), zero forbidden clichés, includes client/server grounding, masking vs zero-retention nuance, and [0,1] toxicity safety scoring.'
  }
};
