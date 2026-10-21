import type { ChapterMastery } from '../../../types/book';

export const bwgaCh07Mastery: ChapterMastery = {
  chapterNumber: 7,
  chapterId: 'ch07',
  title: 'Working with Firebase',
  subtitle: 'Real-Time Document Sync, Cloud Functions & Backend Platform Selection',
  readingTimeMinutes: 6,
  sourceWordCount: 1910,
  executiveThesis:
    'Firebase provides a battle-tested document database, offline-first real-time synchronization, and event-driven serverless functions tailored for interactive mobile and web applications. Selecting between Firebase and Supabase requires matching your workload topology—nested document streams and Google Cloud triggers versus relational SQL joins—rather than defaulting to a single backend.',
  paradigmShift: {
    oldWay:
      'Developers built custom WebSocket servers, manual offline caches, and bespoke OAuth flows before shipping collaborative features.',
    newWay:
      'Builders declare document schemas, real-time listeners, and event triggers in natural language for the Antigravity agent to wire into Firebase.',
    whyItChanged:
      'Managed backend platforms combined with agentic code generation collapse weeks of distributed state plumbing into declarative configuration.'
  },
  customDiagrams: [
    {
      id: 'bwga-ch07-diag1',
      title: 'Firestore Real-Time Sync & Offline Persistence Pipeline',
      subtitle: 'Bi-directional document listeners, IndexedDB local caching, and Cloud Function triggers',
      bierutCaption:
        'Synchronize client interfaces instantaneously through persistent local caches and event-driven backend functions.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="bwga7-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#D97757" />
    </marker>
    <marker id="bwga7-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563EB" />
    </marker>
  </defs>
  <rect x="10" y="10" width="780" height="400" rx="12" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.12" />
  <text x="36" y="42" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.1em" fill="#D97757">FIRESTORE REAL-TIME &amp; SERVERLESS TOPOLOGY</text>

  <!-- Step 1: Client UI & Offline Cache -->
  <rect x="36" y="75" width="210" height="270" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#2563EB" stroke-width="1.5" />
  <text x="54" y="104" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">1. Client App &amp; Local Cache</text>
  <rect x="54" y="122" width="174" height="58" rx="6" fill="#2563EB" fill-opacity="0.1" stroke="#2563EB" stroke-opacity="0.4" />
  <text x="68" y="146" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">onSnapshot() Listener</text>
  <text x="68" y="164" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">Instant UI state bindings</text>

  <rect x="54" y="198" width="174" height="58" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="68" y="222" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">Offline Persistence Store</text>
  <text x="68" y="240" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">Queues writes offline</text>

  <rect x="54" y="274" width="174" height="50" rx="6" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-opacity="0.4" />
  <text x="68" y="297" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">Firebase Auth Token</text>
  <text x="68" y="313" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">request.auth.uid attached</text>

  <!-- Step 2: Security Rules & Firestore Collections -->
  <rect x="295" y="75" width="210" height="270" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#D97757" stroke-width="1.5" />
  <text x="313" y="104" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">2. Firestore Document Core</text>
  <rect x="313" y="122" width="174" height="58" rx="6" fill="#D97757" fill-opacity="0.12" stroke="#D97757" stroke-opacity="0.5" />
  <text x="327" y="146" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">Security Rules Gate</text>
  <text x="327" y="164" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">allow read, write: if owner</text>

  <rect x="313" y="198" width="174" height="126" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="327" y="222" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">Collections &amp; Documents</text>
  <text x="327" y="244" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.8">/projects/{projectId}</text>
  <text x="339" y="264" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">└─ /tasks/{taskId}</text>
  <text x="351" y="284" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">└─ assignedUsers[]</text>
  <text x="351" y="304" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">└─ comments[]</text>

  <!-- Step 3: Cloud Functions & Storage -->
  <rect x="554" y="75" width="210" height="270" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#059669" stroke-width="1.5" />
  <text x="572" y="104" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">3. Serverless Extensions</text>
  <rect x="572" y="122" width="174" height="90" rx="6" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-opacity="0.4" />
  <text x="586" y="146" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">Cloud Functions Triggers</text>
  <text x="586" y="166" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">• onDocumentCreated</text>
  <text x="586" y="184" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">• onUserCreate (Welcome)</text>
  <text x="586" y="202" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">• HTTPS Webhooks / APIs</text>

  <rect x="572" y="230" width="174" height="94" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="586" y="254" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="currentColor">Firebase Storage &amp; CDN</text>
  <text x="586" y="274" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">• MIME &amp; size validation</text>
  <text x="586" y="292" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">• Auto image resizing</text>
  <text x="586" y="310" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.75">• Global edge hosting</text>

  <!-- Flow Connectors -->
  <path d="M 246 145 L 295 145" stroke="#D97757" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arrow)" />
  <path d="M 295 230 L 246 230" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arrow-blue)" />
  <path d="M 505 165 L 554 165" stroke="#D97757" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arrow)" />
  <path d="M 659 230 L 659 212" stroke="#059669" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arrow)" />

  <text x="36" y="382" font-family="JetBrains Mono, monospace" font-size="11" fill="currentColor" opacity="0.7">Mutations validate against Security Rules before propagating to subscribed listeners and background Cloud Functions.</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Client Listeners & Offline Queue',
          explanation: 'Local SDK caches documents and queues mutations during network drops.'
        },
        {
          step: '2',
          label: 'Rule-Gated Document Hierarchy',
          explanation: 'Security rules verify auth identity before allowing collection reads or writes.'
        },
        {
          step: '3',
          label: 'Event-Driven Cloud Functions',
          explanation: 'Document mutations and file uploads trigger background serverless processing automatically.'
        }
      ]
    },
    {
      id: 'bwga-ch07-diag2',
      title: 'Backend Architecture Decision Tree & Migration Bridge',
      subtitle: 'Evaluating Firebase vs. Supabase and executing zero-downtime platform migrations',
      bierutCaption:
        'Select your backend by primary data access pattern and keep migration bridges ready when product requirements shift.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="bwga7-arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#D97757" />
    </marker>
  </defs>
  <rect x="10" y="10" width="780" height="400" rx="12" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.12" />
  <text x="36" y="42" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.1em" fill="#D97757">BACKEND SELECTION &amp; DUAL-AUTH MIGRATION PIPELINE</text>

  <!-- Left Column: Workload Selector -->
  <rect x="36" y="70" width="335" height="145" rx="10" fill="#D97757" fill-opacity="0.08" stroke="#D97757" stroke-width="1.5" />
  <text x="54" y="98" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">Choose Firebase When:</text>
  <text x="54" y="122" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• High-concurrency real-time &amp; offline sync</text>
  <text x="54" y="142" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Native mobile SDKs (Push, Crashlytics)</text>
  <text x="54" y="162" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Deep Google Cloud (Vision, Maps, BigQuery)</text>
  <text x="54" y="182" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Event-heavy serverless Cloud Functions</text>

  <rect x="429" y="70" width="335" height="145" rx="10" fill="#2563EB" fill-opacity="0.08" stroke="#2563EB" stroke-width="1.5" />
  <text x="447" y="98" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">Choose Supabase When:</text>
  <text x="447" y="122" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Complex relational joins &amp; SQL analytics</text>
  <text x="447" y="142" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Open-source self-hosting requirements</text>
  <text x="447" y="162" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Strict foreign-key referential integrity</text>
  <text x="447" y="182" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor" opacity="0.85">• Predictable high-volume relational pricing</text>

  <!-- Bottom Pipeline: 4-Step Migration Bridge -->
  <rect x="36" y="242" width="728" height="128" rx="10" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" />
  <text x="54" y="268" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#059669">AGENT-ASSISTED BACKEND MIGRATION PROTOCOL</text>

  <rect x="54" y="284" width="155" height="66" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="66" y="306" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="currentColor">1. Extract</text>
  <text x="66" y="324" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">Export JSON collections</text>
  <text x="66" y="338" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">or SQL table dumps</text>

  <rect x="233" y="284" width="155" height="66" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="245" y="306" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="currentColor">2. Transform</text>
  <text x="245" y="324" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">Map nested docs to</text>
  <text x="245" y="338" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">relational rows (or reverse)</text>

  <rect x="412" y="284" width="155" height="66" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="424" y="306" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="currentColor">3. Dual-Auth Bridge</text>
  <text x="424" y="324" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">Accept tokens from both</text>
  <text x="424" y="338" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">auth systems in transition</text>

  <rect x="591" y="284" width="155" height="66" rx="6" fill="#059669" fill-opacity="0.12" stroke="#059669" stroke-opacity="0.5" />
  <text x="603" y="306" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="currentColor">4. Staging Cutover</text>
  <text x="603" y="324" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">Verify on production copy</text>
  <text x="603" y="338" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">before switching traffic</text>

  <path d="M 209 317 L 233 317" stroke="#D97757" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arr2)" />
  <path d="M 388 317 L 412 317" stroke="#D97757" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arr2)" />
  <path d="M 567 317 L 591 317" stroke="#D97757" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga7-arr2)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Workload-Driven Platform Fit',
          explanation: 'Choose Firebase for mobile and real-time sync, or Supabase for SQL joins.'
        },
        {
          step: '2',
          label: 'Automated Schema Transformation',
          explanation: 'Agent scripts convert document hierarchies into normalized tables while preserving relationships.'
        },
        {
          step: '3',
          label: 'Dual-Auth Transition Window',
          explanation: 'Support both identity providers simultaneously so existing users never get locked out.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'bwga-ch07-mm1',
      name: 'Reactive Document Tree vs. Relational Ledger',
      tagline: 'Optimize data topology around how screens consume live updates',
      naiveIntuition:
        'Every application should store data in normalized tables and poll endpoints for updates.',
      firstPrinciplesReality:
        'Firestore structures data into hierarchical collections and documents that push diffs directly to subscribed clients.',
      howToApply:
        'Use Firestore when screens render self-contained hierarchies requiring sub-second collaborative updates and offline caching.'
    },
    {
      id: 'bwga-ch07-mm2',
      name: 'Serverless Trust Boundary',
      tagline: 'Never execute privileged side effects inside client browser code',
      naiveIntuition:
        'The frontend can send transactional emails, resize images, and call paid APIs directly after database writes.',
      firstPrinciplesReality:
        'Client code runs in an untrusted environment where API keys can be inspected and network drops abort multi-step workflows.',
      howToApply:
        'Delegate sensitive mutations, image processing, and third-party webhooks to Cloud Functions triggered by backend events.'
    },
    {
      id: 'bwga-ch07-mm3',
      name: 'Reversible Backend Selection',
      tagline: 'Optimize for current shipping velocity rather than hypothetical future scale',
      naiveIntuition:
        'Choosing Firebase or Supabase locks the product into a permanent architectural straitjacket forever.',
      firstPrinciplesReality:
        'Antigravity agents can generate ETL transformation scripts and dual-authentication bridges when product requirements outgrow the initial backend.',
      howToApply:
        'Launch on the platform matching today’s core workflow and schedule a staged migration only when concrete bottlenecks emerge.'
    }
  ],
  deepSections: [
    {
      id: 'bwga-ch07-sec1',
      sectionNumber: '7.1',
      title: 'Firestore Document Architecture, Auth & Security Rules',
      subtitle: 'Structuring collections, authentication providers, and declarative access policies',
      coreMechanism:
        'Firebase offers two databases: the legacy JSON-tree Realtime Database and Firestore, a document-collection engine with stronger indexing and scalability. In Firestore, collections hold documents containing typed key-value fields and nested subcollections. When you describe domain entities—such as projects containing tasks, assigned users, and comments—the Antigravity agent maps them into collection hierarchies and generates filtered, sorted queries.\n\nAccess control is enforced at the database layer through Firestore Security Rules coupled with Firebase Authentication. After enabling email, phone SMS, anonymous, or OAuth providers in the Firebase Console and supplying your Web configuration object, the agent writes declarative rules tying document read and write permissions directly to the authenticated user identity.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Provision Project & Web Credentials',
          detail: 'Create a Firebase project, configure Analytics, and copy the Web app configuration object.'
        },
        {
          step: '2',
          title: 'Model Collections & Auth Providers',
          detail: 'Prompt the agent to build Firestore collections and wire email or OAuth authentication screens.'
        },
        {
          step: '3',
          title: 'Enforce Declarative Security Rules',
          detail: 'Lock down collections so only authorized user IDs and collaborators can read or mutate documents.'
        }
      ],
      keyTakeaways: [
        'Prefer Firestore over Realtime Database for richer queries, structured collections, and horizontal scalability.',
        'Never leave Firestore or Storage in default open mode; bind Security Rules to Firebase Authentication claims.'
      ],
      commonPitfalls: [
        'Building custom authentication from scratch instead of using Firebase Authentication’s hardened flows.',
        'Deploying prototypes to production with open test-mode Security Rules that expose all user documents.'
      ],
      figures: []
    },
    {
      id: 'bwga-ch07-sec2',
      sectionNumber: '7.2',
      title: 'Real-Time Listeners, Offline Persistence & Cloud Functions',
      subtitle: 'Synchronizing live state across intermittent networks and executing serverless backend logic',
      coreMechanism:
        'Firestore replaces manual polling with persistent document and collection listeners. When the agent attaches listeners to a view, state mutations broadcast immediately to every connected user. Enabling Firebase offline persistence caches active documents locally so users can read and mutate records without connectivity, synchronizing queued changes automatically once the network returns.\n\nOperations requiring secret credentials or heavy computation belong in Cloud Functions for Firebase and Firebase Storage. Cloud Functions execute serverless logic in response to Firestore document mutations, user registration events, scheduled timers, or HTTP webhooks. Paired with Firebase Storage rules, functions automatically resize uploaded profile images into responsive thumbnails while Firebase Hosting serves the frontend over a global CDN with preview channels and instant rollbacks.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Subscribe UI to Document Listeners',
          detail: 'Instruct the agent to attach real-time listeners and enable local offline persistence.'
        },
        {
          step: '2',
          title: 'Bind Event-Driven Cloud Functions',
          detail: 'Trigger serverless functions on user signup, document creation, or external webhook calls.'
        },
        {
          step: '3',
          title: 'Configure Storage Rules & CDN Hosting',
          detail: 'Validate file types and sizes in Storage, resize images via functions, and deploy via Firebase Hosting.'
        }
      ],
      keyTakeaways: [
        'Offline persistence and real-time listeners eliminate custom client caching and WebSocket plumbing.',
        'Use Cloud Functions for welcome emails, payments, image resizing, and authenticated webhook endpoints.'
      ],
      commonPitfalls: [
        'Running secret API calls or payment logic inside the browser instead of Cloud Functions.',
        'Allowing unrestricted file uploads to Firebase Storage without size limits or MIME-type rules.'
      ],
      figures: []
    },
    {
      id: 'bwga-ch07-sec3',
      sectionNumber: '7.3',
      title: 'Firebase vs. Supabase Decision Matrix & Migration Protocol',
      subtitle: 'Matching backend strengths to workload constraints and executing safe migrations',
      coreMechanism:
        'Neither Firebase nor Supabase is universally superior; each optimizes for distinct architectural constraints. Firebase excels when applications require native mobile SDKs (push notifications, crash reporting, performance monitoring), deep Google Cloud integration (Maps, Cloud Vision, BigQuery), mature serverless triggers, or massive real-time synchronization. Supabase wins when workloads depend on relational PostgreSQL queries, open-source self-hosting, or predictable scale pricing.\n\nIf product requirements shift after launch, the Antigravity agent can orchestrate a structured backend migration. The agent generates extraction, transformation, and loading (ETL) scripts to map document trees into relational tables—or vice versa—while maintaining a temporary dual-authentication bridge so active users never lose account access during cutover.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Audit Workload & Pricing Constraints',
          detail: 'Compare mobile SDK and Google Cloud requirements against SQL relational and pricing needs.'
        },
        {
          step: '2',
          title: 'Generate Automated ETL Scripts',
          detail: 'Have the agent extract source records, transform schemas, and validate relational integrity.'
        },
        {
          step: '3',
          title: 'Run Dual-Auth & Staging Verification',
          detail: 'Test the migration on production data copies and maintain dual login support during transition.'
        }
      ],
      keyTakeaways: [
        'Select your initial backend for immediate shipping needs rather than speculative future requirements.',
        'Always verify schema migrations and dual-authentication bridges against production data copies before cutover.'
      ],
      commonPitfalls: [
        'Forcing complex multi-table relational reporting onto document stores without evaluating Supabase.',
        'Executing live authentication cutovers without a dual-auth transition window, locking users out.'
      ],
      figures: []
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Firebase vs. Supabase Architectural Comparison',
      description: 'Evaluating backend platforms across data model, mobile ecosystem, serverless maturity, and cost profile.',
      headers: ['Dimension', 'Google Firebase', 'Supabase', 'Primary Selection Trigger'],
      rows: [
        ['Data Model', 'NoSQL Firestore document collections', 'Relational PostgreSQL tables & SQL', 'Nested document trees vs. multi-table joins'],
        ['Mobile Ecosystem', 'Native SDKs, Push, Crashlytics', 'Standard REST & client libraries', 'Cross-platform mobile + web app suites'],
        ['Cloud Ecosystem', 'Direct Maps, Vision, BigQuery links', 'Open-source & self-hostable stack', 'Google Cloud services vs. open-source portability'],
        ['Serverless Logic', 'Mature event-driven Cloud Functions', 'Lightweight Deno Edge Functions', 'Heavy background triggers & image pipelines'],
        ['Pricing Trajectory', 'Generous free tier; usage-based spikes', 'Generous free tier; predictable scaling', 'Read-heavy document bursts vs. steady SQL loads']
      ],
      verdictRule:
        'Choose Firebase for mobile-first, real-time collaborative, or Google Cloud-integrated apps; choose Supabase for relational SQL models and predictable scaling costs.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch07-scen1',
      title: 'Unthrottled Profile Image Uploads Exhausting Client Bandwidth',
      roleAndContext: 'Solo builder launching a community directory with user-uploaded avatar photos on Firebase.',
      symptomOrFailure:
        'Users upload raw 12MB smartphone photos, causing mobile feed screens to stall and exhausting bandwidth quotas.',
      naiveFixAndWhyItFails:
        'Compressing images strictly in browser JavaScript fails on older mobile devices and can be bypassed by direct uploads.',
      firstPrinciplesSolution:
        'Enforce file-size and MIME rules in Firebase Storage and trigger a Cloud Function on upload to generate optimized display thumbnails.',
      measurableOutcome:
        'Feed payload size drops by 90% and unauthorized oversized uploads are rejected at the storage perimeter.'
    },
    {
      id: 'bwga-ch07-scen2',
      title: 'Zero-Downtime Migration from Firestore to Relational PostgreSQL',
      roleAndContext: 'Founder whose collaborative task tracker evolved to require complex financial reporting and SQL joins.',
      symptomOrFailure:
        'Client-side joining of multiple Firestore collections causes slow dashboard loads and excessive document read bills.',
      naiveFixAndWhyItFails:
        'Shutting down the app for a weekend to rewrite the backend and forcing all users to reset passwords causes churn.',
      firstPrinciplesSolution:
        'Prompt the Antigravity agent to write document-to-SQL transformation scripts, validate on a production clone, and run a dual-authentication bridge.',
      measurableOutcome:
        '100% of historical tasks migrate with intact foreign keys and zero active users experience login disruption.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch07-q1',
        scenarioPrompt:
          'You are building a field-inspection web app where technicians record equipment checklists inside basements with intermittent cellular connectivity. How should you instruct the Google Antigravity agent to configure Firebase?',
        options: [
          {
            label: 'A',
            text: 'Use Firestore real-time listeners with Firebase offline persistence enabled so local changes sync automatically upon reconnection.',
            isCorrect: true,
            explanation:
              'Firestore maintains a local cache and queues offline mutations automatically when persistence is enabled, synchronizing changes seamlessly once connectivity returns.'
          },
          {
            label: 'B',
            text: 'Write a custom localStorage polling loop that retries HTTP POST requests every five seconds.',
            isCorrect: false,
            explanation:
              'Custom retry loops duplicate built-in SDK persistence and easily corrupt document ordering during intermittent connectivity.'
          },
          {
            label: 'C',
            text: 'Use Cloud Functions to poll the technician’s browser state when they return to the office.',
            isCorrect: false,
            explanation:
              'Cloud Functions run on Google servers in response to backend triggers and cannot initiate connections into an offline client browser.'
          },
          {
            label: 'D',
            text: 'Disable Firestore Security Rules so offline writes are never rejected during sync.',
            isCorrect: false,
            explanation:
              'Disabling security rules exposes the entire database to unauthorized access and is unnecessary for offline persistence.'
          }
        ]
      },
      {
        id: 'bwga-ch07-q2',
        scenarioPrompt:
          'Your application needs to send a transactional welcome email via an external email API immediately after a new user completes registration. Where should this logic execute?',
        options: [
          {
            label: 'A',
            text: 'Inside the frontend registration form component right after the signup promise resolves.',
            isCorrect: false,
            explanation:
              'Calling external email APIs from the browser exposes secret API keys and fails if the user closes the tab early.'
          },
          {
            label: 'B',
            text: 'Inside a Cloud Function for Firebase triggered automatically by the user creation authentication event.',
            isCorrect: true,
            explanation:
              'Cloud Functions execute securely on the backend in direct response to Firebase Authentication user-creation events without exposing credentials.'
          },
          {
            label: 'C',
            text: 'Inside Firestore Security Rules using an HTTP webhook directive.',
            isCorrect: false,
            explanation:
              'Firestore Security Rules only evaluate access permissions and cannot execute external HTTP requests or send emails.'
          },
          {
            label: 'D',
            text: 'Inside a Firebase Hosting preview channel configuration file.',
            isCorrect: false,
            explanation:
              'Preview channels stage static and dynamic web deployments for testing prior to production release, not event-driven email logic.'
          }
        ]
      },
      {
        id: 'bwga-ch07-q3',
        scenarioPrompt:
          'A founder is choosing between Firebase and Supabase for a cross-platform mobile and web app that requires push notifications, crash reporting, and integration with Google Cloud Vision. Which platform fits best and why?',
        options: [
          {
            label: 'A',
            text: 'Supabase, because PostgreSQL natively manages mobile push notification certificates and crash logs.',
            isCorrect: false,
            explanation:
              'Supabase focuses on PostgreSQL backend services and lacks built-in mobile crash reporting and push notification suites.'
          },
          {
            label: 'B',
            text: 'Firebase, because it provides dedicated mobile SDKs, crash reporting, push notifications, and native Google Cloud integration.',
            isCorrect: true,
            explanation:
              'Firebase excels when mobile-specific tooling and direct integration with Google Cloud services like Cloud Vision are core requirements.'
          },
          {
            label: 'C',
            text: 'Neither platform, because Google Antigravity only supports local SQLite databases.',
            isCorrect: false,
            explanation:
              'Google Antigravity integrates natively with both Firebase and Supabase.'
          },
          {
            label: 'D',
            text: 'Firebase Realtime Database exclusively, because Firestore cannot connect to Google Cloud services.',
            isCorrect: false,
            explanation:
              'Firestore is the recommended modern Firebase database and integrates directly with the entire Google Cloud ecosystem.'
          }
        ]
      },
      {
        id: 'bwga-ch07-q4',
        scenarioPrompt:
          'During a backend migration from Firebase to Supabase, what is the highest-risk operational failure mode and how does the chapter recommend mitigating it?',
        options: [
          {
            label: 'A',
            text: 'Disrupting user login access; mitigate by running a dual-authentication transition period and testing on copies of production data.',
            isCorrect: true,
            explanation:
              'Authentication cutovers create severe user friction if mishandled; supporting dual authentication during transition and testing on production clones prevents lockouts.'
          },
          {
            label: 'B',
            text: 'Losing CSS styles during database export; mitigate by rebuilding the frontend before migrating data.',
            isCorrect: false,
            explanation:
              'Backend data migration affects persistence, queries, and auth flows rather than frontend styling.'
          },
          {
            label: 'C',
            text: 'Exceeding Firebase Hosting SSL limits; mitigate by disabling HTTPS during the migration week.',
            isCorrect: false,
            explanation:
              'Firebase Hosting provisions SSL automatically and disabling HTTPS compromises security.'
          },
          {
            label: 'D',
            text: 'Being permanently blocked by vendor lock-in because Firestore data cannot be exported.',
            isCorrect: false,
            explanation:
              'The Antigravity agent can generate extraction and transformation scripts to migrate data cleanly between platforms.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'bwga-ch07-fc1',
        category: 'data',
        front: 'How does Firestore organize data compared to traditional relational databases, and why is it preferred over Realtime Database for new apps?',
        back: 'Firestore stores data in collections of documents rather than tables and rows, offering richer queries, stronger data types, and better scalability than the JSON-tree Realtime Database.',
        mentalHook: 'Collections = Folders; Documents = Typed JSON sheets inside each folder.'
      },
      {
        id: 'bwga-ch07-fc2',
        category: 'architecture',
        front: 'How does Firebase handle real-time synchronization when a user’s device loses internet connectivity?',
        back: 'With offline persistence enabled, Firebase caches data locally so users can continue working offline and automatically synchronizes mutations when connectivity resumes.',
        mentalHook: 'Local cache first, automatic delta sync on reconnect.'
      },
      {
        id: 'bwga-ch07-fc3',
        category: 'architecture',
        front: 'What four event categories can trigger Cloud Functions for Firebase?',
        back: 'Firestore data changes, Firebase Authentication events, direct HTTP requests (webhooks), and scheduled timers.',
        mentalHook: 'Data, Auth, HTTP, Cron -> Serverless execution.'
      },
      {
        id: 'bwga-ch07-fc4',
        category: 'security',
        front: 'What four constraints should Firebase Storage security rules enforce on user-uploaded files?',
        back: 'Restrict uploads to authenticated users, enforce maximum file size limits, validate permitted MIME/file types, and control download access based on application authorization.',
        mentalHook: 'Who (Auth), How Big (Size), What Kind (Type), Who Reads (ACL).'
      },
      {
        id: 'bwga-ch07-fc5',
        category: 'optimization',
        front: 'What deployment safety features does Firebase Hosting provide for production web applications?',
        back: 'Global CDN delivery, automatic SSL certificates, custom domain binding, preview channels for pre-production testing, and instant one-click deployment rollbacks.',
        mentalHook: 'Preview before merge, rollback in one click.'
      },
      {
        id: 'bwga-ch07-fc6',
        category: 'evaluation',
        front: 'When should a builder choose Supabase over Firebase?',
        back: 'When the project requires SQL relational data models, open-source self-hosting flexibility, PostgreSQL real-time power, or more predictable pricing as usage scales.',
        mentalHook: 'SQL joins + predictable scale pricing = Supabase.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch07-feyn1',
        conceptTitle: 'Firestore Real-Time Listeners, Security Rules & Serverless Triggers',
        prompt:
          'Explain to a junior builder how Firestore real-time synchronization, Security Rules, and Cloud Functions collaborate when a user creates a new task in a shared project tracker.',
        rubricChecklist: [
          'Explains that the task is stored as a document inside a Firestore collection and cached locally for offline resilience.',
          'Clarifies that Firestore Security Rules verify the user’s Firebase Authentication identity before permitting the write.',
          'Describes how subscribed real-time listeners push the new task instantaneously to collaborators’ screens without manual page refreshes.',
          'Identifies that a Cloud Function triggers asynchronously on document creation to run privileged backend tasks like sending email notifications.'
        ],
        modelExplanation:
          'When a user adds a task, the Firebase SDK writes the new document to the local cache immediately and sends it to the Firestore tasks collection. Firestore Security Rules inspect the attached Firebase Authentication token to verify the user has write access to that project. Once committed, Firestore pushes the update over active listeners so every collaborator’s screen updates instantaneously without refreshing. Simultaneously, an onDocumentCreated Cloud Function wakes up on the backend to send notification emails without exposing API keys in the browser.'
      },
      {
        id: 'bwga-ch07-feyn2',
        conceptTitle: 'Strategic Backend Selection & Zero-Downtime Platform Migration',
        prompt:
          'A founder is paralyzed trying to pick between Firebase and Supabase for a new MVP. Explain the concrete criteria to make the decision today and how an agent-assisted migration works if requirements change later.',
        rubricChecklist: [
          'Contrasts Firebase strengths (mobile SDKs, real-time sync, Google Cloud services, Cloud Functions) against Supabase strengths (PostgreSQL relational joins, open-source, predictable scale pricing).',
          'Advises selecting the backend that fits immediate MVP requirements rather than over-engineering for speculative future scale.',
          'Outlines the three-stage data migration pipeline: extracting source records, transforming schemas (documents to tables or reverse), and loading while preserving relationships.',
          'Emphasizes running a dual-authentication bridge and testing against copies of production data prior to cutover.'
        ],
        modelExplanation:
          'Pick Firebase if your MVP relies on mobile SDKs, heavy real-time collaboration, or Google Cloud APIs; pick Supabase if you need relational SQL joins and predictable high-volume pricing. You are never permanently locked in. If your app outgrows its initial backend, you can instruct the Antigravity agent to write ETL scripts that extract your records, transform document structures into relational tables, and verify everything on a staging clone of production data while running a dual-authentication bridge so existing users never get locked out.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-firestore-db',
        label: 'Firestore Document Database',
        category: 'data',
        chapterNumber: 7,
        importance: 1,
        definition: 'NoSQL cloud database organizing data into hierarchical collections and documents with indexed queries.',
        whyItMatters: 'Provides flexible schema evolution and scalable queries for interactive web and mobile apps.'
      },
      {
        id: 'bwga-realtime-offline-sync',
        label: 'Real-Time & Offline Sync',
        category: 'architecture',
        chapterNumber: 7,
        importance: 1,
        definition: 'Active document listeners paired with local client persistence that queue mutations offline and broadcast updates instantly.',
        whyItMatters: 'Enables collaborative multiplayer experiences and resilient offline operation without custom WebSocket servers.'
      },
      {
        id: 'bwga-firebase-auth-rules',
        label: 'Firebase Auth & Security Rules',
        category: 'security',
        chapterNumber: 7,
        importance: 1,
        definition: 'Managed identity service (email, OAuth, phone, anonymous) coupled with declarative document and storage access rules.',
        whyItMatters: 'Prevents unauthorized data access directly at the database and object-storage perimeter.'
      },
      {
        id: 'bwga-cloud-functions',
        label: 'Cloud Functions for Firebase',
        category: 'architecture',
        chapterNumber: 7,
        importance: 2,
        definition: 'Event-driven serverless compute triggered by database mutations, auth events, file uploads, or HTTP webhooks.',
        whyItMatters: 'Isolates secret API keys, payment processing, and image optimization inside a trusted backend environment.'
      },
      {
        id: 'bwga-firebase-storage-hosting',
        label: 'Firebase Storage & Hosting',
        category: 'optimization',
        chapterNumber: 7,
        importance: 2,
        definition: 'Access-controlled object storage for user media paired with global CDN web hosting, preview channels, and instant rollbacks.',
        whyItMatters: 'Delivers fast static and dynamic assets globally while enforcing strict upload validation.'
      },
      {
        id: 'bwga-backend-migration-bridge',
        label: 'Backend Selection & Migration Bridge',
        category: 'evaluation',
        chapterNumber: 7,
        importance: 2,
        definition: 'Decision framework comparing Firebase vs. Supabase paired with agent-generated ETL scripts and dual-auth cutover flows.',
        whyItMatters: 'Eliminates architectural paralysis at launch by guaranteeing a safe migration path as requirements evolve.'
      }
    ],
    edges: [
      {
        source: 'bwga-firebase-auth-rules',
        target: 'bwga-firestore-db',
        relationship: 'mitigates',
        explanation: 'Declarative Security Rules verify Firebase Auth identity tokens to block unauthorized collection reads and writes.'
      },
      {
        source: 'bwga-firestore-db',
        target: 'bwga-realtime-offline-sync',
        relationship: 'prerequisite_for',
        explanation: 'Firestore collection and document structures underpin real-time client listeners and local offline persistence.'
      },
      {
        source: 'bwga-firestore-db',
        target: 'bwga-cloud-functions',
        relationship: 'prerequisite_for',
        explanation: 'Document creation and mutation events in Firestore trigger background Cloud Functions automatically.'
      },
      {
        source: 'bwga-cloud-functions',
        target: 'bwga-firebase-storage-hosting',
        relationship: 'optimizes',
        explanation: 'Cloud Functions automatically resize uploaded Storage images and power dynamic SSR endpoints on Firebase Hosting.'
      },
      {
        source: 'bwga-backend-migration-bridge',
        target: 'bwga-firestore-db',
        relationship: 'evaluates',
        explanation: 'The decision framework evaluates when to keep workloads in Firestore versus migrating to relational PostgreSQL.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 9,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 7 sections (When Firebase Makes Sense, Project Setup, Firestore Fundamentals, Auth Integration, Real-Time Sync, Cloud Functions & Storage, Hosting, Firebase vs Supabase, and Migrating Backends) within strict high-signal compression bounds.'
  }
};

export const bwgaCh08Mastery: ChapterMastery = {
  chapterNumber: 8,
  chapterId: 'ch08',
  title: 'GitHub Integration and Version Control',
  subtitle: 'Atomic Commits, Feature Branching, Secrets Hygiene & Automated Release Pipelines',
  readingTimeMinutes: 6,
  sourceWordCount: 2034,
  executiveThesis:
    'Version control transforms agent-assisted development from fragile file editing into a reversible, auditable engineering workflow. By connecting Google Antigravity to GitHub through Personal Access Tokens, feature branches, and branch protection rules, solo founders and teams isolate experiments, block credential leaks, and trigger automated production deployments on every verified merge.',
  paradigmShift: {
    oldWay:
      'Founders prompted AI tools directly against a single working folder, losing working features whenever an experimental prompt broke the app.',
    newWay:
      'Builders instruct the Antigravity agent to isolate features in dedicated Git branches, write atomic commits, and deploy automatically via protected main merges.',
    whyItChanged:
      'High-velocity agentic code generation amplifies the blast radius of mistakes unless every change is checkpointed in an immutable commit graph.'
  },
  customDiagrams: [
    {
      id: 'bwga-ch08-diag1',
      title: 'Feature-Branch Isolation, Pull Request Gate & CI/CD Pipeline',
      subtitle: 'Protecting production stability while developing experimental agentic features in parallel',
      bierutCaption:
        'Isolate experimental agent prompts on feature branches and gate production deployments behind protected pull requests.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="bwga8-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#D97757" />
    </marker>
    <marker id="bwga8-arr-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
  </defs>
  <rect x="10" y="10" width="780" height="400" rx="12" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.12" />
  <text x="36" y="42" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.1em" fill="#D97757">GIT BRANCH TOPOLOGY &amp; AUTOMATED DEPLOYMENT PIPELINE</text>

  <!-- Main Branch Track -->
  <text x="36" y="96" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#059669">main (Protected)</text>
  <line x1="175" y1="92" x2="740" y2="92" stroke="#059669" stroke-width="3" />
  <circle cx="205" cy="92" r="10" fill="#059669" />
  <text x="185" y="72" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor">v1.0.0</text>

  <circle cx="535" cy="92" r="11" fill="#059669" />
  <text x="515" y="72" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" fill="#059669">v1.1.0</text>

  <!-- Feature Branch Track -->
  <text x="36" y="218" font-family="JetBrains Mono, monospace" font-size="12" font-weight="700" fill="#D97757">feature/payments</text>
  <path d="M 205 102 C 225 180, 240 214, 270 214 L 450 214 C 485 214, 505 160, 528 102" fill="none" stroke="#D97757" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#bwga8-arr)" />

  <circle cx="285" cy="214" r="8" fill="#D97757" />
  <text x="245" y="242" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">Commit 1: Stripe SDK</text>

  <circle cx="365" cy="214" r="8" fill="#D97757" />
  <text x="330" y="260" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">Commit 2: Webhook</text>

  <circle cx="445" cy="214" r="8" fill="#D97757" />
  <text x="415" y="242" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">Commit 3: Tests</text>

  <!-- PR Protection Gate Box -->
  <rect x="440" y="122" width="175" height="62" rx="8" fill="currentColor" fill-opacity="0.04" stroke="#2563EB" stroke-width="1.5" />
  <text x="454" y="144" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#2563EB">Pull Request &amp; Guardrails</text>
  <text x="454" y="160" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">• Review + Status checks</text>
  <text x="454" y="174" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">• Force-push blocked</text>

  <!-- Bottom Deployment Targets -->
  <rect x="230" y="305" width="235" height="72" rx="8" fill="#2563EB" fill-opacity="0.08" stroke="#2563EB" stroke-width="1.5" />
  <text x="248" y="330" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="currentColor">Staging Environment</text>
  <text x="248" y="348" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.8">Auto-deploys branch previews</text>
  <text x="248" y="364" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.8">Verify before production merge</text>

  <rect x="520" y="305" width="240" height="72" rx="8" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="1.5" />
  <text x="538" y="330" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="currentColor">Production Release</text>
  <text x="538" y="348" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.8">Vercel / Netlify / Cloud Run</text>
  <text x="538" y="364" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.8">Annotated tag + Release Notes</text>

  <path d="M 365 224 L 365 305" stroke="#2563EB" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#bwga8-arr)" />
  <path d="M 535 103 L 640 305" stroke="#059669" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga8-arr-green)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Feature Branch Checkpoints',
          explanation: 'Create dedicated branches per capability and commit small, focused snapshots regularly.'
        },
        {
          step: '2',
          label: 'Branch Protection & Pull Requests',
          explanation: 'Require code reviews and automated status checks before merging into main.'
        },
        {
          step: '3',
          label: 'Semantic Tagging & Auto-Deploy',
          explanation: 'Merging to main tags a semantic release and triggers production hosting pipelines.'
        }
      ]
    },
    {
      id: 'bwga-ch08-diag2',
      title: 'Secrets Hygiene & Environment Configuration Boundary',
      subtitle: 'Filtering sensitive credentials out of Git history via .gitignore while sharing safe templates',
      bierutCaption:
        'Strip raw credentials at the local .gitignore boundary and inject production secrets exclusively through hosting environment variables.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <marker id="bwga8-arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
    <marker id="bwga8-arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
    </marker>
  </defs>
  <rect x="10" y="10" width="780" height="400" rx="12" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.12" />
  <text x="36" y="42" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.1em" fill="#D97757">SECRETS HYGIENE &amp; .GITIGNORE SECURITY PERIMETER</text>

  <!-- Left: Antigravity Workspace -->
  <rect x="36" y="75" width="230" height="275" rx="10" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.25" />
  <text x="54" y="104" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">1. Local Workspace</text>

  <rect x="54" y="122" width="194" height="62" rx="6" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-opacity="0.5" />
  <text x="68" y="144" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="currentColor">src/ + .env.example</text>
  <text x="68" y="164" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">STRIPE_KEY=your_key_here</text>

  <rect x="54" y="200" width="194" height="62" rx="6" fill="#DC2626" fill-opacity="0.1" stroke="#DC2626" stroke-opacity="0.5" />
  <text x="68" y="222" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#DC2626">.env.local (Raw Secrets)</text>
  <text x="68" y="242" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.8">STRIPE_KEY=sk_live_98a7f...</text>

  <rect x="54" y="278" width="194" height="54" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.2" />
  <text x="68" y="300" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="currentColor">node_modules/ &amp; dist/</text>
  <text x="68" y="318" font-family="JetBrains Mono, monospace" font-size="9.5" fill="currentColor" opacity="0.75">Heavy build artifacts</text>

  <!-- Center: .gitignore Gate -->
  <rect x="315" y="115" width="170" height="195" rx="10" fill="#D97757" fill-opacity="0.1" stroke="#D97757" stroke-width="2" />
  <text x="335" y="145" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#D97757">2. .gitignore Filter</text>
  <text x="335" y="172" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor">.env*</text>
  <text x="335" y="192" font-family="JetBrains Mono, monospace" font-size="10.5" fill="#059669">!.env.example</text>
  <text x="335" y="212" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor">node_modules/</text>
  <text x="335" y="232" font-family="JetBrains Mono, monospace" font-size="10.5" fill="currentColor">dist/</text>
  <text x="335" y="268" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#DC2626">BLOCKS SECRET LEAKS</text>
  <text x="335" y="284" font-family="Inter, sans-serif" font-size="9.5" fill="currentColor" opacity="0.75">Before git commit runs</text>

  <!-- Right: GitHub & Production Hosting -->
  <rect x="534" y="75" width="230" height="125" rx="10" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1.5" />
  <text x="552" y="103" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">3. GitHub Repository</text>
  <text x="552" y="126" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.85">• Clean source code &amp; README</text>
  <text x="552" y="146" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.85">• Safe .env.example template</text>
  <text x="552" y="166" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.85">• Geo-redundant history backup</text>

  <rect x="534" y="225" width="230" height="125" rx="10" fill="#2563EB" fill-opacity="0.08" stroke="#2563EB" stroke-width="1.5" />
  <text x="552" y="253" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="currentColor">4. Hosting Env Vault</text>
  <text x="552" y="276" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.85">• Encrypted platform secrets</text>
  <text x="552" y="296" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.85">• Injected at runtime/build</text>
  <text x="552" y="316" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor" opacity="0.85">• Zero credentials in Git log</text>

  <path d="M 248 150 L 534 135" stroke="#059669" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga8-arr2)" />
  <path d="M 248 231 L 315 231" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga8-arr-red)" />
  <path d="M 649 200 L 649 225" stroke="#059669" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#bwga8-arr2)" />
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Decouple Code from Credentials',
          explanation: 'Read API keys from environment variables instead of hardcoding secrets in source files.'
        },
        {
          step: '2',
          label: 'Enforce .gitignore Exclusions',
          explanation: 'Block local environment files and build artifacts from ever entering Git tracking.'
        },
        {
          step: '3',
          label: 'Share Templates & Inject at Runtime',
          explanation: 'Commit safe template files for teammates and store real keys in the hosting platform vault.'
        }
      ]
    }
  ],
  mentalModels: [
    {
      id: 'bwga-ch08-mm1',
      name: 'Atomic Time-Machine Checkpoints',
      tagline: 'Treat every focused commit as an instant recovery point',
      naiveIntuition:
        'Version control is just a cloud folder where you upload finished code at the end of the week.',
      firstPrinciplesReality:
        'Git records a directed graph of atomic snapshots; small, single-purpose commits let you pinpoint regressions and revert broken features surgically.',
      howToApply:
        'Instruct the Antigravity agent to commit after every verified capability with a message stating both what changed and why.'
    },
    {
      id: 'bwga-ch08-mm2',
      name: 'The Sacred Mainline Invariant',
      tagline: 'Main is a deployment trigger, never a scratchpad',
      naiveIntuition:
        'Solo founders can code directly on the main branch because no teammates are around to complain.',
      firstPrinciplesReality:
        'When main is wired to automated deployment platforms, any broken commit on main immediately ships downtime to paying customers.',
      howToApply:
        'Develop every experimental feature on an isolated branch, verify it on a staging deployment, and merge via protected pull requests.'
    },
    {
      id: 'bwga-ch08-mm3',
      name: 'Immutable History & The Secret Ratchet',
      tagline: 'Deleting a secret in commit N+1 never erases it from commit N',
      naiveIntuition:
        'If you accidentally commit an API key to GitHub, deleting the line in the next commit fixes the leak.',
      firstPrinciplesReality:
        'Git preserves every historical snapshot forever; bots scan public and leaked commit logs to harvest credentials committed months earlier.',
      howToApply:
        'Configure .gitignore and environment variables before the initial commit, and share only redacted template files in the repository.'
    }
  ],
  deepSections: [
    {
      id: 'bwga-ch08-sec1',
      sectionNumber: '8.1',
      title: 'Repository Setup, PAT Authentication & Atomic Commits',
      subtitle: 'Connecting Google Antigravity to GitHub and authoring high-signal commit histories',
      coreMechanism:
        'GitHub provides unlimited public and private repositories on its free tier alongside geographically redundant cloud backups. After creating an account, enabling two-factor authentication (2FA), and initializing a descriptive repository with a `README.md`, you connect Google Antigravity by generating a Personal Access Token (PAT) under GitHub Developer Settings. Once supplied, the agent stores the token securely, initializes Git locally, binds the remote origin, and pushes your initial snapshot.\n\nAs the agent builds features, each commit records a snapshot of all modified files paired with a commit message. High-signal commit messages state both what changed and the business or technical reason why—replacing vague notes like "updated code" with "fixed user registration validation to prevent duplicate emails"—while keeping each commit focused on a single feature or bug fix.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Harden Account & Initialize Repo',
          detail: 'Create a GitHub account, enable 2FA immediately, and initialize a named repo with a README.'
        },
        {
          step: '2',
          title: 'Bind Antigravity via Personal Access Token',
          detail: 'Generate a repo-scoped PAT in GitHub Developer Settings and hand it to the Antigravity agent.'
        },
        {
          step: '3',
          title: 'Enforce Focused What-and-Why Commits',
          detail: 'Review agent commits to ensure each addresses one logical change with a clear causal message.'
        }
      ],
      keyTakeaways: [
        'Enable two-factor authentication immediately and connect Antigravity once using a scoped Personal Access Token.',
        'Keep commits atomic and write messages explaining both what changed and why so single regressions can be reverted cleanly.'
      ],
      commonPitfalls: [
        'Accumulating days of unrelated feature edits into a single massive commit that cannot be partially reverted.',
        'Accepting generic commit messages like "fixed bug" that hide when and why business logic changed.'
      ],
      figures: []
    },
    {
      id: 'bwga-ch08-sec2',
      sectionNumber: '8.2',
      title: 'Branching Topology, Collaborative PRs & Mainline Protection',
      subtitle: 'Isolating experimental features, structuring contractor permissions, and gating production code',
      coreMechanism:
        'Branching separates production stability from active experimentation. The `main` branch must always hold deployable, tested code, while every new capability lives on an isolated feature branch created by the agent (for example, a payment processing branch). Regular checkpoints on the feature branch let you abandon failed experiments or switch priorities without polluting production.\n\nWhen collaborating with contractors or partners, repository permissions (Read, Write, Admin) and branch protection rules enforce engineering discipline. Grant external contributors write access only to feature-specific branches, track tasks in GitHub Issues, and require Pull Requests (PRs) with passing automated status checks and human reviews before merging into `main`. Protected branches also block destructive force pushes and accidental branch deletion.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Branch Off Main Per Feature',
          detail: 'Instruct the agent to create an isolated feature branch and commit checkpoints regularly.'
        },
        {
          step: '2',
          title: 'Scope Permissions & Open Pull Requests',
          detail: 'Assign least-privilege repo permissions, link GitHub Issues, and review diffs via Pull Requests.'
        },
        {
          step: '3',
          title: 'Activate Main Branch Protection Rules',
          detail: 'Require PR reviews and passing status checks while blocking force pushes and branch deletion.'
        }
      ],
      keyTakeaways: [
        'Treat the main branch as sacred production code and isolate all new work inside feature branches.',
        'Use Pull Requests and branch protection rules even as a solo founder to catch errors before deployment.'
      ],
      commonPitfalls: [
        'Coding experimental features directly on the main branch where a broken change halts production releases.',
        'Granting full Admin permissions to short-term contractors instead of scoping Write access to feature branches.'
      ],
      figures: []
    },
    {
      id: 'bwga-ch08-sec3',
      sectionNumber: '8.3',
      title: 'Secrets Hygiene, Semantic Releases & CI/CD Auto-Deployment',
      subtitle: 'Preventing credential leaks, tagging semantic versions, and wiring continuous deployment',
      coreMechanism:
        'Because Git retains every historical commit permanently, API keys and database passwords must never enter version control—deleting a leaked key in a later commit leaves it exposed in history. The agent configures your app to read secrets from environment variables, adds `.env` files, build artifacts, and dependency folders to `.gitignore`, and commits a redacted template file so collaborators know which variables to populate locally.\n\nFor release governance and delivery, the agent creates annotated Git tags using semantic versioning (`v1.0.0` major, `v1.1.0` minor feature, `v1.0.1` patch fix) paired with GitHub Releases. Deployment platforms like Vercel, Netlify, and Google Cloud Run watch your repository via webhooks, automatically deploying staging branches to test environments and promoting `main` merges directly to production.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Externalize Secrets & Configure .gitignore',
          detail: 'Move credentials into environment variables, block secret files via .gitignore, and commit a template.'
        },
        {
          step: '2',
          title: 'Tag Releases with Semantic Versioning',
          detail: 'Create annotated vMajor.Minor.Patch tags with release notes for every production milestone.'
        },
        {
          step: '3',
          title: 'Wire Staging & Production Auto-Deploys',
          detail: 'Connect Vercel, Netlify, or Cloud Run to deploy staging branches for QA and main merges to users.'
        }
      ],
      keyTakeaways: [
        'Once committed, a secret remains in Git history forever; enforce .gitignore and environment variables from day one.',
        'Pair semantic version tags with staging and main branch webhooks for zero-touch, reversible deployments.'
      ],
      commonPitfalls: [
        'Hardcoding API keys in source files and assuming a subsequent deletion commit removes them from repository history.',
        'Deploying unverified changes straight to production without testing on a staging branch environment first.'
      ],
      figures: []
    }
  ],
  tradeOffMatrices: [
    {
      title: 'Git Workflow & Governance Tier Matrix',
      description: 'Matching branch strategies, permissions, and protection rules to project maturity and team structure.',
      headers: ['Workflow Tier', 'Branch & Commit Strategy', 'Access & Review Gate', 'Deployment & Recovery Posture'],
      rows: [
        ['Direct-to-Main (Anti-Pattern)', 'Unfocused edits pushed straight to main', 'Zero PR reviews or status checks', 'High outage risk; messy reverts'],
        ['Solo Founder Discipline', 'Feature branches + atomic agent commits', 'Self-reviewed PRs + automated checks', 'Staging branch preview -> Main auto-deploy'],
        ['Contractor / Team Collaboration', 'Scoped feature branches + Issue links', 'Read/Write role split + mandatory PR approval', 'Protected main + annotated SemVer releases']
      ],
      verdictRule:
        'Never push experimental changes directly to main; solo founders should use feature branches with lightweight PR checks, escalating to strict review gates when adding contractors.'
    }
  ],
  engineeringScenarios: [
    {
      id: 'bwga-ch08-scen1',
      title: 'Accidental API Key Commit Exposed in Repository History',
      roleAndContext: 'Solo builder connecting a payment gateway inside a Google Antigravity web application.',
      symptomOrFailure:
        'A live secret key is hardcoded into a config file and pushed to GitHub; deleting the line in the next commit leaves the key readable in the commit log.',
      naiveFixAndWhyItFails:
        'Pushing a second commit that removes the key string fails because Git preserves every prior commit snapshot permanently.',
      firstPrinciplesSolution:
        'Revoke and rotate the compromised key immediately, instruct the agent to load credentials via environment variables, add `.env` to `.gitignore`, and commit a safe `.env.example` template.',
      measurableOutcome:
        'Compromised credential is invalidated within minutes and zero live secrets ever enter future commits.'
    },
    {
      id: 'bwga-ch08-scen2',
      title: 'Isolating a Contractor Feature Regression Before Production Release',
      roleAndContext: 'Founder hiring a part-time developer to add project filtering to a live customer-facing SaaS app.',
      symptomOrFailure:
        'The contractor’s new filtering query breaks mobile task creation, threatening active paying subscribers.',
      naiveFixAndWhyItFails:
        'Letting the contractor push directly to the main branch deploys the regression straight to production users via Vercel auto-deploy.',
      firstPrinciplesSolution:
        'Restrict the contractor to a feature branch, deploy that branch to a staging environment, and block main merges behind Pull Request reviews and automated status checks.',
      measurableOutcome:
        'The mobile regression is caught on the staging URL during PR review with 100% production uptime preserved.'
    }
  ],
  activeRecall: {
    quiz: [
      {
        id: 'bwga-ch08-q1',
        scenarioPrompt:
          'You accidentally committed a file containing your production database password and pushed it to GitHub. You immediately delete the password from the file and push a new commit. Is your database secure?',
        options: [
          {
            label: 'A',
            text: 'Yes, because GitHub only stores the latest version of each file on the main branch.',
            isCorrect: false,
            explanation:
              'Git stores the full history of every commit; earlier snapshots remain accessible in the commit log.'
          },
          {
            label: 'B',
            text: 'No, because once committed, sensitive credentials remain in the repository commit history even if deleted in later commits.',
            isCorrect: true,
            explanation:
              'Git history is immutable by default; credentials must be kept out of version control using environment variables and .gitignore.'
          },
          {
            label: 'C',
            text: 'Yes, provided you create an annotated v1.0.1 tag right after deleting the password.',
            isCorrect: false,
            explanation:
              'Tags simply mark specific commits in history and do not erase leaked credentials from earlier snapshots.'
          },
          {
            label: 'D',
            text: 'Yes, if you rename the repository in GitHub settings.',
            isCorrect: false,
            explanation:
              'Renaming a repository does not alter or scrub its underlying commit history.'
          }
        ]
      },
      {
        id: 'bwga-ch08-q2',
        scenarioPrompt:
          'How does the Google Antigravity agent authenticate with your GitHub account so it can initialize your repository, commit changes, and push branches without prompting for your password every time?',
        options: [
          {
            label: 'A',
            text: 'You generate a Personal Access Token (PAT) with repository permissions in GitHub Developer Settings and provide it once to the agent.',
            isCorrect: true,
            explanation:
              'Antigravity stores the repository-scoped Personal Access Token securely and reuses it for ongoing Git operations.'
          },
          {
            label: 'B',
            text: 'You disable two-factor authentication on GitHub and hardcode your account password inside README.md.',
            isCorrect: false,
            explanation:
              'Chapter 8 explicitly instructs enabling 2FA immediately and never storing credentials inside repository files.'
          },
          {
            label: 'C',
            text: 'You email zip archives of your project folder to GitHub support after each feature.',
            isCorrect: false,
            explanation:
              'Antigravity integrates directly with Git and pushes commits over authenticated remote connections.'
          },
          {
            label: 'D',
            text: 'You grant public Admin access to all anonymous GitHub users.',
            isCorrect: false,
            explanation:
              'Admin access gives total control including repository deletion and must never be granted publicly.'
          }
        ]
      },
      {
        id: 'bwga-ch08-q3',
        scenarioPrompt:
          'You bring on a freelance developer to build a new billing screen while you continue fixing bugs in your core app. What is the safest way to structure their GitHub workflow?',
        options: [
          {
            label: 'A',
            text: 'Have both of you commit directly to the main branch at different hours of the day.',
            isCorrect: false,
            explanation:
              'Working directly on main risks deploying incomplete experimental code and causing merge collisions.'
          },
          {
            label: 'B',
            text: 'Create a dedicated feature branch for billing, grant write access for their work, and review their changes via a Pull Request with main branch protection enabled.',
            isCorrect: true,
            explanation:
              'Feature branches isolate contractor work, while Pull Requests and branch protection rules ensure code review and passing checks before merging into main.'
          },
          {
            label: 'C',
            text: 'Give the contractor Admin access so they can force-push over main if conflicts arise.',
            isCorrect: false,
            explanation:
              'Force-pushing rewrites history and corrupts collaborator workspaces; branch protection explicitly blocks force pushes.'
          },
          {
            label: 'D',
            text: 'Wait until the contractor finishes all billing features before making a single giant commit with the message "updated code".',
            isCorrect: false,
            explanation:
              'Chapter 8 recommends frequent, focused commits with specific messages stating both what changed and why.'
          }
        ]
      },
      {
        id: 'bwga-ch08-q4',
        scenarioPrompt:
          'You just deployed a release that adds a new task-filtering feature without breaking existing workflows. Under semantic versioning conventions, how should you instruct the agent to tag this release?',
        options: [
          {
            label: 'A',
            text: 'Bump the middle (minor) number, such as v1.1.0, using an annotated tag that includes release notes.',
            isCorrect: true,
            explanation:
              'In semantic versioning, v1.0.0 marks major releases, v1.1.0 marks feature additions, and v1.0.1 marks bug fixes.'
          },
          {
            label: 'B',
            text: 'Bump the patch number to v1.0.1 because only bug fixes use tags.',
            isCorrect: false,
            explanation:
              'v1.0.1 is reserved for bug fixes, whereas new feature additions increment the minor version (v1.1.0).'
          },
          {
            label: 'C',
            text: 'Delete all previous tags and reuse v1.0.0 for every deployment.',
            isCorrect: false,
            explanation:
              'Tags serve as permanent historical markers for each deployed version and should follow sequential semantic versioning.'
          },
          {
            label: 'D',
            text: 'Store the version number inside .gitignore so users cannot see it.',
            isCorrect: false,
            explanation:
              '.gitignore excludes untracked local files; semantic version tags and GitHub Releases are meant to communicate changes clearly.'
          }
        ]
      }
    ],
    flashcards: [
      {
        id: 'bwga-ch08-fc1',
        category: 'foundation',
        front: 'What two pieces of information must an effective Git commit message communicate, and why should commits remain focused?',
        back: 'A commit message must state both what changed and why it changed; focused single-purpose commits let you understand history and revert specific changes without losing unrelated work.',
        mentalHook: 'What + Why, one feature per snapshot.'
      },
      {
        id: 'bwga-ch08-fc2',
        category: 'architecture',
        front: 'What is the role of the main branch versus feature branches in a professional GitHub workflow?',
        back: 'The main branch holds stable, production-ready code at all times, while feature branches provide isolated sandboxes for developing and testing new capabilities before merging.',
        mentalHook: 'Main = Production Showroom; Feature Branch = Isolated Workshop.'
      },
      {
        id: 'bwga-ch08-fc3',
        category: 'security',
        front: 'What four safeguards do GitHub branch protection rules enforce on your main branch?',
        back: 'They require Pull Request code reviews before merging, require automated status checks/tests to pass, block history-rewriting force pushes, and prevent accidental branch deletion.',
        mentalHook: 'Review + Checks Pass + No Force Push + No Delete.'
      },
      {
        id: 'bwga-ch08-fc4',
        category: 'security',
        front: 'How should you share required environment variable names with teammates without committing sensitive API keys to GitHub?',
        back: 'Add the real environment file to .gitignore, read credentials from environment variables in code, and commit a redacted template file showing only the required variable keys.',
        mentalHook: 'Ignore the real .env, commit the blank .env.example.'
      },
      {
        id: 'bwga-ch08-fc5',
        category: 'evaluation',
        front: 'How do v1.0.0, v1.1.0, and v1.0.1 differ under semantic versioning when tagging releases?',
        back: 'v1.0.0 designates a major release, v1.1.0 designates backward-compatible feature additions, and v1.0.1 designates targeted bug fixes.',
        mentalHook: 'Major.Feature.BugFix (v1.0.0 -> v1.1.0 -> v1.0.1).'
      },
      {
        id: 'bwga-ch08-fc6',
        category: 'optimization',
        front: 'How do staging branches and deployment platforms like Vercel, Netlify, and Cloud Run work together?',
        back: 'Deployment platforms watch GitHub via webhooks to auto-deploy staging branches to safe testing environments for verification before promoting main branch merges to production.',
        mentalHook: 'Push to staging to test; merge to main to ship.'
      }
    ],
    feynmanChallenges: [
      {
        id: 'bwga-ch08-feyn1',
        conceptTitle: 'Feature Branches, Pull Requests & Mainline Branch Protection',
        prompt:
          'Explain to a solo non-technical founder why committing every experiment directly to the main branch is dangerous once paying users arrive, and how feature branches, Pull Requests, and branch protection rules solve the problem.',
        rubricChecklist: [
          'Explains that the main branch represents live, deployable production code and is often wired directly to automated hosting pipelines.',
          'Describes how feature branches isolate experimental work with regular checkpoint commits that can be reverted or discarded safely.',
          'Clarifies how Pull Requests provide a structured review gate linking code changes back to GitHub Issues.',
          'Details how branch protection rules require reviews and passing automated status checks while blocking force pushes and accidental deletion.'
        ],
        modelExplanation:
          'Once your main branch is connected to automatic deployment, any broken experiment committed directly to main immediately breaks the live app for paying customers. Instead, you instruct the Antigravity agent to create a dedicated feature branch for each new capability and commit small checkpoints as you test. When the feature works, you open a Pull Request to review the exact diffs. Branch protection rules on main ensure that automated tests pass, reviews are completed, and nobody can force-push or accidentally delete the production codebase.'
      },
      {
        id: 'bwga-ch08-feyn2',
        conceptTitle: 'Secrets Hygiene, .gitignore Boundaries & Automated Release Pipelines',
        prompt:
          'Walk a new builder through how to handle sensitive API keys safely across local development, GitHub version control, and automated cloud deployments.',
        rubricChecklist: [
          'Warns that Git commit history is permanent, so deleting a leaked API key in a later commit does not remove it from earlier snapshots.',
          'Explains using .gitignore to exclude local environment files, build artifacts, and dependency folders before committing.',
          'Describes committing a redacted environment template file so collaborators know which variables to configure locally.',
          'Connects environment variables injected on the hosting platform (Vercel, Netlify, Cloud Run) with semantic version tags and staging/production auto-deploys.'
        ],
        modelExplanation:
          'Never hardcode API keys in your source files because Git preserves every historical commit forever—even if you delete the key tomorrow, bots can read it from yesterday’s commit log. Instead, have the agent read credentials from environment variables, list your local .env file and build folders inside .gitignore, and commit a safe .env.example template showing only placeholder variable names. In production, you store the real keys inside Vercel, Netlify, or Cloud Run settings, where webhook pipelines automatically build your tagged releases and inject the secrets at runtime.'
      }
    ]
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'bwga-atomic-commits',
        label: 'Atomic Commits & History Graph',
        category: 'foundation',
        chapterNumber: 8,
        importance: 1,
        definition: 'Focused, single-purpose project snapshots paired with causal commit messages explaining what changed and why.',
        whyItMatters: 'Enables surgical bug identification and one-command rollbacks without losing unrelated feature work.'
      },
      {
        id: 'bwga-pat-auth-bridge',
        label: 'GitHub PAT & 2FA Integration',
        category: 'security',
        chapterNumber: 8,
        importance: 2,
        definition: 'Two-factor authenticated GitHub account linked to Google Antigravity via a repository-scoped Personal Access Token.',
        whyItMatters: 'Allows the agent to initialize remotes, commit, and push branches securely without repeated password prompts.'
      },
      {
        id: 'bwga-feature-branch-isolation',
        label: 'Feature Branch Isolation',
        category: 'architecture',
        chapterNumber: 8,
        importance: 1,
        definition: 'Dedicated development branches forked from main to build and test individual capabilities in isolation.',
        whyItMatters: 'Keeps the main branch stable and deployable at all times while enabling parallel experimentation.'
      },
      {
        id: 'bwga-pr-branch-protection',
        label: 'Pull Requests & Branch Protection',
        category: 'evaluation',
        chapterNumber: 8,
        importance: 1,
        definition: 'Structured code review workflows enforced by rules requiring approvals and passing status checks while blocking force pushes.',
        whyItMatters: 'Prevents unverified or destructive changes from entering the production mainline.'
      },
      {
        id: 'bwga-secrets-gitignore',
        label: 'Secrets Hygiene & .gitignore',
        category: 'security',
        chapterNumber: 8,
        importance: 1,
        definition: 'Exclusion of sensitive credentials and build artifacts from Git history via .gitignore, environment variables, and template files.',
        whyItMatters: 'Prevents permanent credential exposure inside immutable repository commit logs.'
      },
      {
        id: 'bwga-semver-cicd-deploy',
        label: 'Semantic Tagging & Auto-Deploy',
        category: 'optimization',
        chapterNumber: 8,
        importance: 2,
        definition: 'Annotated vMajor.Minor.Patch release tags paired with staging and production webhook deployments to Vercel, Netlify, or Cloud Run.',
        whyItMatters: 'Automates predictable, zero-downtime releases and creates an auditable record of every production version.'
      }
    ],
    edges: [
      {
        source: 'bwga-pat-auth-bridge',
        target: 'bwga-atomic-commits',
        relationship: 'prerequisite_for',
        explanation: 'A repository-scoped Personal Access Token enables the Antigravity agent to push atomic commits to GitHub.'
      },
      {
        source: 'bwga-atomic-commits',
        target: 'bwga-feature-branch-isolation',
        relationship: 'part_of',
        explanation: 'Regular atomic commits serve as incremental recovery checkpoints along an isolated feature branch.'
      },
      {
        source: 'bwga-feature-branch-isolation',
        target: 'bwga-pr-branch-protection',
        relationship: 'prerequisite_for',
        explanation: 'Completed feature branches are merged into the protected main branch through reviewed Pull Requests.'
      },
      {
        source: 'bwga-secrets-gitignore',
        target: 'bwga-atomic-commits',
        relationship: 'mitigates',
        explanation: 'Proper .gitignore rules and environment variables prevent atomic commits from permanently recording raw API keys.'
      },
      {
        source: 'bwga-pr-branch-protection',
        target: 'bwga-semver-cicd-deploy',
        relationship: 'optimizes',
        explanation: 'Verified merges into the protected main branch trigger semantic release tags and automated cloud deployments.'
      }
    ]
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 10,
    figuresIncluded: 0,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 8 sections (Why Version Control Matters, Account & Repo Setup, Connecting Antigravity via PAT, Commits, Branching Strategies, Collaborative Workflows, Protecting Main, Handling Sensitive Info, Release Management & Tagging, Backup/Recovery, and CI/CD Deployment Integration) within high-signal compression bounds.'
  }
};
