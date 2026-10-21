import type { ChapterMastery } from '../../../types/book';

export const baafCh09Mastery: ChapterMastery = {
  chapterNumber: 9,
  chapterId: 'ch09',
  title: 'Building Multi-Agent Insurance Workflows',
  subtitle: 'Sequential Guardrailed Pipelines, Adversarial Fraud Debate, and Compliance-First Claims Processing',
  readingTimeMinutes: 8,
  sourceWordCount: 9614,
  executiveThesis:
    'Insurance claims and underwriting workflows require deterministic traceability over unstructured multimodal documents because regulators treat the audit trail itself as the regulated product. Decomposing monolithic adjusters into sequential pipelines with stage-boundary compliance guardrails, parallel enrichment branches, and adversarial peer-to-peer fraud debates achieves seconds-scale cycle times while guaranteeing zero unauthorized denials and full regulatory reconstructibility.',
  paradigmShift: {
    oldWay:
      'Human adjusters or monolithic single-prompt agents sequentially process heterogeneous PDFs, photos, and policy texts across weeks, creating high context-switching latency, unlogged reasoning gaps, and one-sided fraud suspicion.',
    newWay:
      'Specialized multi-agent pipelines isolate intake, multimodal parsing, coverage verification, deterministic fraud screening, and compliance veto gates behind typed Pydantic state schemas and append-only audit logs.',
    whyItChanged:
      'Unfair claims settlement regulations mandate that every denial or payout trace back to exact policy provisions, verified document extractions, and auditable rule executions that single-agent prompts cannot reliably enforce.',
  },
  customDiagrams: [
    {
      id: 'baaf-ch09-svg1',
      title: 'Seven-Stage Sequential Claims Pipeline with Compliance Veto',
      subtitle: 'LlamaIndex AgentWorkflow handoff chain with shared Pydantic state and stage-boundary guardrails',
      bierutCaption:
        'Map every claim through seven single-responsibility agents writing to an immutable ClaimRecord, where the Compliance Agent exercises absolute veto power over downstream payouts or denials.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.04em">SEQUENTIAL CLAIMS PIPELINE &amp; COMPLIANCE HIERARCHY</text>
  <text x="28" y="54" fill="#94a3b8" font-size="11">Shared ClaimRecord State + Deterministic Audit Log at Every Handoff Boundary</text>

  <!-- Stage Nodes Top Row -->
  <g transform="translate(28, 82)">
    <rect width="128" height="72" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="12" y="22" fill="#38bdf8" font-size="10" font-weight="700">01 FNOL AGENT</text>
    <text x="12" y="40" fill="#e2e8f0" font-size="11" font-weight="600">Intake &amp; Classify</text>
    <text x="12" y="56" fill="#94a3b8" font-size="9.5">Init ClaimRecord</text>
  </g>

  <path d="M 156 118 L 182 118" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(182, 82)">
    <rect width="134" height="72" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="12" y="22" fill="#38bdf8" font-size="10" font-weight="700">02 DOC PARSER</text>
    <text x="12" y="40" fill="#e2e8f0" font-size="11" font-weight="600">OCR &amp; Vision</text>
    <text x="12" y="56" fill="#94a3b8" font-size="9.5">Unstructured → JSON</text>
  </g>

  <path d="M 316 118 L 342 118" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(342, 82)">
    <rect width="134" height="72" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
    <text x="12" y="22" fill="#818cf8" font-size="10" font-weight="700">03 COVERAGE</text>
    <text x="12" y="40" fill="#e2e8f0" font-size="11" font-weight="600">Policy Clauses</text>
    <text x="12" y="56" fill="#94a3b8" font-size="9.5">Limits &amp; Deductible</text>
  </g>

  <path d="M 476 118 L 502 118" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(502, 82)">
    <rect width="134" height="72" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="12" y="22" fill="#f59e0b" font-size="10" font-weight="700">04 FRAUD SCREEN</text>
    <text x="12" y="40" fill="#e2e8f0" font-size="11" font-weight="600">Rule Risk Score</text>
    <text x="12" y="56" fill="#fcd34d" font-size="9.5">Score &gt; 40 → SIU</text>
  </g>

  <path d="M 636 118 L 662 118" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(662, 82)">
    <rect width="110" height="72" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
    <text x="10" y="22" fill="#34d399" font-size="10" font-weight="700">05 ASSESS</text>
    <text x="10" y="40" fill="#e2e8f0" font-size="11" font-weight="600">Net Payout</text>
    <text x="10" y="56" fill="#94a3b8" font-size="9.5">Cap at Limit</text>
  </g>

  <!-- Connector Down to Decision & Compliance -->
  <path d="M 717 154 L 717 204 L 590 204" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" fill="none" />

  <g transform="translate(410, 172)">
    <rect width="180" height="68" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
    <text x="14" y="22" fill="#a78bfa" font-size="10" font-weight="700">06 DECISION AGENT</text>
    <text x="14" y="40" fill="#e2e8f0" font-size="11" font-weight="600">Approve | Deny | Escalate</text>
    <text x="14" y="56" fill="#94a3b8" font-size="9.5">Full Reasoning Synthesis</text>
  </g>

  <path d="M 410 206 L 350 206" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6 4" />

  <g transform="translate(120, 168)">
    <rect width="230" height="76" rx="8" fill="#311024" stroke="#f43f5e" stroke-width="2" />
    <text x="14" y="22" fill="#fb7185" font-size="10" font-weight="700">07 COMPLIANCE GUARDRAIL (VETO)</text>
    <text x="14" y="41" fill="#f8fafc" font-size="11.5" font-weight="700">Statutory Validation Gate</text>
    <text x="14" y="58" fill="#fda4af" font-size="9.5">Valid Denial Code + Stage Completeness</text>
  </g>

  <!-- Shared Audit Bus Bottom -->
  <rect x="28" y="284" width="744" height="104" rx="8" fill="#090d16" stroke="#334155" stroke-width="1.5" />
  <text x="48" y="310" fill="#38bdf8" font-size="11" font-weight="700" letter-spacing="0.05em">IMMUTABLE APPEND-ONLY AUDIT LOG &amp; CONFLICT HIERARCHY</text>
  <text x="48" y="332" fill="#cbd5e1" font-size="11">Precedence Rule: <tspan fill="#fb7185" font-weight="700">Compliance Agent</tspan> &gt; <tspan fill="#fcd34d" font-weight="700">Fraud Agent</tspan> &gt; <tspan fill="#a78bfa" font-weight="700">Adjudication Agent</tspan> &gt; <tspan fill="#34d399" font-weight="700">Assessment Agent</tspan></text>
  <text x="48" y="354" fill="#94a3b8" font-size="10.5">• HITL Pause Gates: Missing Docs (e.g., unfiled Police Report), Payout &gt; $100k, Fraud Score &gt; 40, Coverage Ambiguity</text>
  <text x="48" y="372" fill="#94a3b8" font-size="10.5">• Least-Privilege Isolation: Parser sees raw files; Fraud sees Verisk ClaimSearch; Logs redact PII to opaque Claim IDs</text>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Typed State Contract',
          explanation:
            'Every agent mutates only its designated slice of the Pydantic ClaimRecord while appending timestamped entries to audit_log.',
        },
        {
          step: '2',
          label: 'Deterministic Rules for High-Risk Gates',
          explanation:
            'Fraud screening and compliance validation execute deterministic Python rules rather than open-ended LLM prompts so court-challenged decisions are 100% reproducible.',
        },
        {
          step: '3',
          label: 'Hierarchical Compliance Veto',
          explanation:
            'Compliance Agent outranks all upstream agents, blocking any denial lacking statutory recognition or complete stage execution.',
        },
      ],
    },
    {
      id: 'baaf-ch09-svg2',
      title: 'Adversarial Fraud Debate & Parallel Underwriting Enrichment',
      subtitle: 'Peer-to-peer opposing advocates for SIU escalation alongside concurrent async underwriting queries',
      bierutCaption:
        'Counter confirmation bias in flagged claims through structured Fraud vs. Legitimacy debate while accelerating new policy underwriting via concurrent asyncio.gather enrichment.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <line x1="400" y1="24" x2="400" y2="396" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Left Half: Adversarial Fraud Debate -->
  <text x="24" y="36" fill="#f59e0b" font-size="13" font-weight="700" letter-spacing="0.04em">PATTERN A: ADVERSARIAL FRAUD DEBATE</text>
  <text x="24" y="54" fill="#94a3b8" font-size="10.5">Triggered when Fraud Screener Score &gt; 40</text>

  <g transform="translate(24, 78)">
    <rect width="164" height="92" rx="8" fill="#2a1215" stroke="#f43f5e" stroke-width="1.5" />
    <text x="12" y="22" fill="#fb7185" font-size="10" font-weight="700">FRAUD ADVOCATE</text>
    <text x="12" y="40" fill="#f8fafc" font-size="10.5" font-weight="600">Prosecutorial Case</text>
    <text x="12" y="58" fill="#fda4af" font-size="9.5">• Cites red flag clusters</text>
    <text x="12" y="74" fill="#fda4af" font-size="9.5">• Lists own weaknesses</text>
  </g>

  <path d="M 188 124 L 212 124" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(212, 78)">
    <rect width="164" height="92" rx="8" fill="#0f2922" stroke="#10b981" stroke-width="1.5" />
    <text x="12" y="22" fill="#34d399" font-size="10" font-weight="700">LEGITIMACY ADVOCATE</text>
    <text x="12" y="40" fill="#f8fafc" font-size="10.5" font-weight="600">Consumer Defense</text>
    <text x="12" y="58" fill="#a7f3d0" font-size="9.5">• Rebuts each red flag</text>
    <text x="12" y="74" fill="#a7f3d0" font-size="9.5">• Lists own weaknesses</text>
  </g>

  <path d="M 106 170 L 195 220" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 294 170 L 205 220" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6 4" />

  <g transform="translate(54, 222)">
    <rect width="292" height="84" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="14" y="22" fill="#38bdf8" font-size="10" font-weight="700">INVESTIGATION DECISION AGENT</text>
    <text x="14" y="42" fill="#f8fafc" font-size="11" font-weight="600">Weighs Evidence &amp; Self-Disclosed Flaws</text>
    <text x="14" y="60" fill="#cbd5e1" font-size="9.5">Outputs Non-Legal Referral Signal + Confidence:</text>
    <text x="14" y="74" fill="#fcd34d" font-size="9">strong_fraud_indicators | likely_fraud | inconclusive | likely_legitimate</text>
  </g>

  <rect x="24" y="326" width="352" height="58" rx="6" fill="#090d16" stroke="#334155" />
  <text x="36" y="346" fill="#e2e8f0" font-size="10" font-weight="600">Why Never Output "Guilty of Fraud"?</text>
  <text x="36" y="364" fill="#94a3b8" font-size="9.5">Fraud is a strict legal conclusion; automated systems issue SIU referrals</text>
  <text x="36" y="377" fill="#94a3b8" font-size="9.5">to avoid bad-faith tort liability while preserving human due process.</text>

  <!-- Right Half: Parallel Underwriting Enrichment -->
  <text x="424" y="36" fill="#38bdf8" font-size="13" font-weight="700" letter-spacing="0.04em">PATTERN B: PARALLEL UNDERWRITING</text>
  <text x="424" y="54" fill="#94a3b8" font-size="10.5">Sequential Spine with Concurrent Data Fan-Out</text>

  <g transform="translate(536, 74)">
    <rect width="136" height="44" rx="6" fill="#1e293b" stroke="#94a3b8" />
    <text x="20" y="26" fill="#f8fafc" font-size="10.5" font-weight="600">Application Intake</text>
  </g>

  <path d="M 604 118 L 474 158" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 604 118 L 604 158" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 604 118 L 730 158" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />

  <g transform="translate(422, 160)">
    <rect width="106" height="64" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <text x="10" y="22" fill="#38bdf8" font-size="9.5" font-weight="700">CREDIT CHECK</text>
    <text x="10" y="38" fill="#cbd5e1" font-size="9">Bureau Score</text>
    <text x="10" y="52" fill="#64748b" font-size="8.5">(FCRA Gated)</text>
  </g>

  <g transform="translate(550, 160)">
    <rect width="108" height="64" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <text x="10" y="22" fill="#38bdf8" font-size="9.5" font-weight="700">MVR DRIVING</text>
    <text x="10" y="38" fill="#cbd5e1" font-size="9">Violations &amp; History</text>
    <text x="10" y="52" fill="#64748b" font-size="8.5">State DMV API</text>
  </g>

  <g transform="translate(680, 160)">
    <rect width="100" height="64" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <text x="10" y="22" fill="#38bdf8" font-size="9.5" font-weight="700">PROPERTY VAL</text>
    <text x="10" y="38" fill="#cbd5e1" font-size="9">Catastrophe &amp; Cost</text>
    <text x="10" y="52" fill="#64748b" font-size="8.5">Verisk / Spatial</text>
  </g>

  <path d="M 474 224 L 604 264" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 604 224 L 604 264" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" />
  <path d="M 730 224 L 604 264" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" />

  <g transform="translate(464, 266)">
    <rect width="280" height="118" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
    <text x="16" y="24" fill="#34d399" font-size="10" font-weight="700">CONVERGENCE: RISK, PRICING &amp; ISSUANCE</text>
    <text x="16" y="44" fill="#f8fafc" font-size="10.5" font-weight="600">asyncio.gather() Merges Independent Queries</text>
    <text x="16" y="64" fill="#cbd5e1" font-size="9.5">1. Risk Assessment: Frequency × Severity vs Portfolio</text>
    <text x="16" y="82" fill="#cbd5e1" font-size="9.5">2. Actuarial Pricing: Loss Cost + Competitive/State Caps</text>
    <text x="16" y="100" fill="#cbd5e1" font-size="9.5">3. Explainable Decision: Accept, Decline, or Senior Referral</text>
  </g>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Mandatory Self-Weakness Disclosure',
          explanation:
            'Both FraudAdvocate and LegitimacyAdvocate must populate a weaknesses list in FraudArgument, preventing one-sided prosecutorial tunnel vision.',
        },
        {
          step: '2',
          label: 'Four-Tier Referral Output',
          explanation:
            'InvestigationDecision emits strong_fraud_indicators, likely_fraud, inconclusive, or likely_legitimate rather than a legal determination of fraud.',
        },
        {
          step: '3',
          label: 'Concurrent Underwriting Fan-Out',
          explanation:
            'Independent external lookups (credit, MVR, property valuation) execute simultaneously via asyncio.gather before feeding sequential risk pricing.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'baaf-ch09-mm1',
      name: 'The Audit Trail IS the Regulated Product',
      tagline: 'In trading, logs serve internal accountability; in insurance, the decision trace is the legal deliverable.',
      naiveIntuition:
        'Logging is an operational debugging utility bolted onto an agent pipeline after the core adjudication logic works.',
      firstPrinciplesReality:
        'State market-conduct examiners and courts inspect the exact sequence of documents parsed, policy clauses cited, and rules evaluated to judge whether a claim denial violates unfair settlement laws.',
      howToApply:
        'Bind an append-only audit logger to every tool invocation and enforce a final Compliance Agent gate that blocks any decision with fewer than 50 characters of reasoning or missing upstream stage records.',
    },
    {
      id: 'baaf-ch09-mm2',
      name: 'Compliance Veto Hierarchy',
      tagline: 'Statutory compliance outranks fraud suspicion, adjudication synthesis, and damage valuation.',
      naiveIntuition:
        'When a fraud screening agent flags suspicious indicators on a claim, the system should automatically deny payment to protect carrier loss ratios.',
      firstPrinciplesReality:
        'Denying a covered claim solely on an unverified heuristic fraud score violates state consumer protection statutes; conflict resolution must follow Compliance > Fraud > Adjudication > Assessment.',
      howToApply:
        'Give the Compliance Agent unconditional veto power to block non-statutory denial reasons and route high fraud scores (>40) to adversarial investigation or human review rather than summary denial.',
    },
    {
      id: 'baaf-ch09-mm3',
      name: 'Structural Counter-Advocacy against Suspicion Bias',
      tagline: 'A detector designed only to hunt fraud will fabricate suspicion out of innocent anomalies.',
      naiveIntuition:
        'Escalating flagged claims to a more powerful reasoning prompt that searches deeper for fraud indicators improves detection precision.',
      firstPrinciplesReality:
        'Single-perspective fraud prompts suffer from confirmation bias; pairing a Fraud Advocate with a Consumer-Protection Legitimacy Advocate that sees the opening argument forces balanced evaluation of innocent explanations.',
      howToApply:
        'Chain FraudAdvocate into LegitimacyAdvocate over shared conversation state, require both to list their own argument weaknesses in a Pydantic schema, and restrict the judge to a referral signal.',
    },
  ],
  deepSections: [
    {
      id: 'baaf-ch09-sec1',
      sectionNumber: '9.1',
      title: 'Insurance Workflow Anatomy & Compliance-First Architecture',
      subtitle: 'Why unstructured documents and consumer protection statutes dictate sequential guardrailed pipelines',
      coreMechanism:
        'Unlike trading systems that fan analysts out in parallel over clean numerical feeds, insurance workflows operate on unstructured multimodal documents (scanned PDFs, damage photos, medical bills, police reports) under strict consumer-protection statutes. Four core workflows map to distinct multi-agent topologies: claims processing uses a sequential pipeline with stage-boundary guardrails; underwriting pairs a sequential spine with parallel external enrichment (`asyncio.gather` across credit, motor vehicle, and property APIs); fraud investigation combines rules-based screening with peer-to-peer adversarial debate; and customer service/FNOL uses an orchestrator-worker escalation hybrid.\n\nAcross all four workflows, Compliance-First Design governs execution. Guardrails validate outputs at every handoff boundary, least-privilege isolation restricts data access per role (the Document Parser never sees Verisk ClaimSearch; the Fraud Screener never sees medical records), and conflict resolution strictly enforces `Compliance Agent > Fraud Agent > Adjudication Agent > Assessment Agent`.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Multimodal Tri-Stage Ingestion',
          detail:
            'Classify incoming artifacts (claim form, photo, medical record, police report), extract structured JSON via OCR and vision models, and cross-validate fields against policy effective dates and insured vehicles.',
        },
        {
          step: '2',
          title: 'Topology Selection by Constraint',
          detail:
            'Route claims through fixed sequential stages for auditability, fan out independent underwriting bureau checks concurrently for latency, and escalate complex highway FNOLs from single-agent triage to multi-agent teams.',
        },
        {
          step: '3',
          title: 'Least-Privilege & PII Redaction Enforcement',
          detail:
            'Scope each agent tool to minimum necessary data sources, redact policyholder names and policy numbers to opaque Claim IDs inside logs, and purge records automatically upon expiry of the 5–7 year statutory retention window.',
        },
      ],
      keyTakeaways: [
        'Trading architectures optimize decision quality against consensus bias over structured feeds, whereas insurance architectures optimize regulatory explainability over unstructured documents.',
        'Eight specialized roles—Intake, Parser, Coverage, Fraud, Assessment, Adjudication, Compliance Guardrail, and Audit Trail—isolate security permissions and reasoning boundaries.',
        'Underwriting enrichment must remain jurisdiction-configurable because several US states restrict credit-based insurance scoring and enforce Fair Credit Reporting Act (FCRA) disclosures.',
      ],
      commonPitfalls: [
        'Granting a monolithic agent simultaneous access to raw medical records and cross-insurer fraud databases violates least-privilege privacy mandates under GDPR and HIPAA.',
        'Placing compliance checks only at the final payout step wastes downstream LLM compute when an intake parser already extracted a loss date outside the policy period.',
      ],
      figures: [
        {
          file: 'B32414_9_1.png',
          originalLabel: 'Figure 9.1 – Trading versus insurance architectures',
          bierutTitle: 'Contrast Parallel Market Committees Against Sequential Regulated Claims Pipelines',
          editorialAnalysis:
            'Side-by-side architectural comparison illustrating how Chapter 8 trading systems fan analysts out in parallel over structured market data before debate, whereas insurance systems enforce a linear stage-gated pipeline over unstructured documents so every determination is discretely timestamped and attributable.',
          keyTakeaways: [
            'Data modality (structured prices vs. unstructured PDFs/photos) and error cost (bad trade vs. wrongful denial lawsuit) dictate pipeline topology.',
          ],
        },
        {
          file: 'B32414_9_3.png',
          originalLabel: 'Figure 9.3 – Underwriting pipeline with parallel data enrichment',
          bierutTitle: 'Fan Out Independent Bureau Queries Concurrently Within a Sequential Underwriting Spine',
          editorialAnalysis:
            'Shows application intake branching into three concurrent external queries—credit score, driving record, and property valuation—via parallelization before converging into sequential risk assessment, actuarial pricing, and explainable policy issuance.',
          keyTakeaways: [
            'Parallelizing independent external API calls cuts underwriting latency without sacrificing sequential downstream pricing governance.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch09-sec2',
      sectionNumber: '9.2',
      title: 'Implementing the Seven-Agent Claims Pipeline',
      subtitle: 'Shared Pydantic ClaimRecord state, deterministic screening rules, and LlamaIndex AgentWorkflow wiring',
      coreMechanism:
        'An auto claims pipeline wires seven `FunctionAgent` nodes inside a LlamaIndex `AgentWorkflow`: `FNOLAgent → DocumentParser → CoverageAgent → FraudScreener → AssessmentAgent → DecisionAgent → ComplianceAgent`. Because each agent consumes roughly three workflow steps (tool call, handoff, response), `max_iterations` must be raised from 20 to 60 so the seven-agent chain never truncates mid-claim. All agents read and mutate a shared `ClaimRecord` Pydantic model in `ctx.store`, appending timestamped entries to `audit_log` via `log_audit`.\n\nThe pipeline separates probabilistic LLM judgment from deterministic regulatory rules. While `CoverageAgent`, `AssessmentAgent`, and `DecisionAgent` invoke LLMs to interpret policy clauses, itemize repair costs net of deductibles/limits, and synthesize adjudication reasoning, `FraudScreener` and `ComplianceAgent` execute deterministic Python logic. `FraudScreener` computes an additive risk score (+25 for loss within 30 days of inception, +20 for $\\ge 3$ prior claims in 12 months, +15 for reporting delay $> 30$ days), escalating scores $> 40$ to investigation.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'FNOL Intake & Multimodal Document Parsing',
          detail:
            'FNOLAgent initializes ClaimRecord with a generated claim_id and classified ClaimType, handing off to DocumentParser to convert damage photos and police reports into structured JSON descriptions.',
        },
        {
          step: '2',
          title: 'Coverage Bounding, Rule-Based Fraud Scoring & Net Assessment',
          detail:
            'CoverageAgent cites exact policy provisions to establish limits ($50,000) and deductibles ($500); FraudScreener computes deterministic risk points (0–60 in lab); AssessmentAgent calculates repair payout capped at policy limits minus deductible ($4,300 - $500 = $3,800).',
        },
        {
          step: '3',
          title: 'Explicit Adjudication & Three-Point Compliance Gate',
          detail:
            'DecisionAgent emits APPROVE, DENY, or ESCALATE with full synthesis, which ComplianceAgent blocks unless denial reasons are statutorily recognized, reasoning length reaches at least 50 characters, and all upstream stages completed.',
        },
      ],
      keyTakeaways: [
        'Setting max_iterations=60 in AgentWorkflow is mandatory for a 7-agent sequential chain averaging 3 internal steps per agent.',
        'Applying deductibles and coverage caps inside AssessmentAgent guarantees that DecisionAgent only evaluates policy-bounded payout figures.',
        'Deterministic fraud and compliance tools ensure that court-challenged claims decisions remain 100% reproducible across runs.',
      ],
      commonPitfalls: [
        'Using pure LLM judgment for initial fraud screening or final statutory compliance introduces non-deterministic drift that fails market-conduct audits.',
        'Allowing a claim to proceed when required intake documents (such as an unfiled 2:47 AM police report) are missing instead of pausing at an incomplete-documentation HITL gate.',
      ],
      figures: [
        {
          file: 'B32414_9_2.png',
          originalLabel: 'Figure 9.2 – Claims processing pipeline',
          bierutTitle: 'Enforce Stage-Order Dependencies Across Seven Sequential Claims Agents',
          editorialAnalysis:
            'Depicts the linear seven-agent claims pipeline from FNOL through Compliance Guardrail, highlighting the conditional branch at Fraud Screener where claims scoring above 40 divert into dedicated multi-agent fraud investigation.',
          keyTakeaways: [
            'Fixed stage ordering prevents assessing damage on uncovered losses or adjudicating payouts before fraud screening completes.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch09-sec3',
      sectionNumber: '9.3',
      title: 'Adversarial Fraud Investigation & Production Governance',
      subtitle: 'Peer-to-peer debate for SIU referrals, configurable HITL pause gates, and multi-jurisdictional compliance',
      coreMechanism:
        'When `FraudScreener` scores a claim above 40, escalating to a single fraud-hunting agent causes confirmation bias that misinterprets innocent anomalies and triggers bad-faith litigation. Instead, the system invokes an adversarial peer-to-peer debate modeled on Special Investigations Unit (SIU) discipline. `FraudAdvocate` builds the strongest case for fraud while explicitly listing weaknesses in its own argument inside a `FraudArgument` Pydantic schema. Control hands off to `LegitimacyAdvocate`, which reads the shared history, rebuts each red flag with a consumer-protection explanation, and discloses its own weaknesses.\n\n`InvestigationDecision` weighs both arguments and emits one of four non-legal referral signals—`strong_fraud_indicators` (SIU referral), `likely_fraud` (human adjuster), `inconclusive` (proceed with caution), or `likely_legitimate` (resume pipeline)—never a legal finding of fraud. In production, configurable Human-in-the-Loop (HITL) pause gates and multi-jurisdictional rules (NAIC Unfair Claims Settlement Practices Act, Solvency II, GDPR, EU AI Act) govern execution.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Prosecutorial Opening with Self-Critique',
          detail:
            'FraudAdvocate reviews red flags and parallel evidence streams (claims history, document authenticity, network links) to populate FraudArgument with position, confidence, evidence, reasoning, and self-identified weaknesses.',
        },
        {
          step: '2',
          title: 'Informed Consumer-Protection Rebuttal',
          detail:
            'LegitimacyAdvocate inspects FraudAdvocate’s argument in the shared AgentWorkflow context, supplies alternative innocent explanations for every red flag, and logs its own argument vulnerabilities.',
        },
        {
          step: '3',
          title: 'Referral Signal & HITL Gate Routing',
          detail:
            'InvestigationDecision scores argument quality to emit a four-tier referral signal, pausing the claim state at configurable HITL gates for SIU referral, high-value payouts (>$100k), coverage ambiguity, bodily injury/minors, or missing documents.',
        },
      ],
      keyTakeaways: [
        'Forcing both opposing advocates to populate a weaknesses field prevents rhetorical overreach and calibrates the decision agent’s confidence score.',
        'Automated systems must output referral signals rather than legal fraud determinations because fraud carries a high evidentiary burden in court.',
        'Under the EU AI Act, life and health insurance risk assessment and pricing for natural persons are designated high-risk, whereas property/auto claims pipelines primarily face NAIC state market-conduct and GDPR transparency rules.',
      ],
      commonPitfalls: [
        'Setting HITL escalation thresholds too low drowns human adjusters in false positives, while setting them too high lets six-figure payouts or ambiguous policy exclusions bypass human review.',
        'Relying on an LLM’s parametric memory for state claims-handling deadlines (e.g., 15-day acknowledgment, 30–45 day resolution) instead of grounding agents in indexed carrier manuals.',
      ],
      figures: [
        {
          file: 'B32414_9_4.png',
          originalLabel: 'Figure 9.4 – Adversarial fraud investigation',
          bierutTitle: 'Balance Fraud Prosecution with Consumer Defense Before Issuing SIU Referrals',
          editorialAnalysis:
            'Illustrates the complete production fraud investigation topology: three parallel evidence-gathering agents (Claims History, Document Authenticity, Network Analysis) feed the opposing Fraud Advocate and Legitimacy Advocate before the Investigation Decision Agent emits a calibrated referral.',
          keyTakeaways: [
            'Combining parallel evidence collection with sequential adversarial rebuttal isolates factual gathering from dialectical evaluation.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Insurance Multi-Agent Workflow Architecture Selection Matrix',
      description:
        'Mapping the four core insurance operational workflows to their optimal Chapter 7 multi-agent coordination patterns, latency profiles, and governance controls.',
      headers: [
        'Insurance Workflow',
        'Primary Agent Pattern',
        'Data & Execution Profile',
        'Dominant Risk Mitigated',
        'Key Escalation / Guardrail Mechanism',
      ],
      rows: [
        [
          'Claims Processing (FNOL to Payout)',
          'Sequential Pipeline + Stage Guardrails',
          'Multimodal docs (PDFs, photos); strict stage ordering',
          'Unexplainable denials & market-conduct sanctions',
          'Compliance Agent veto + HITL gates (> $100k, missing docs)',
        ],
        [
          'New Policy Underwriting',
          'Sequential Spine + Parallel Enrichment',
          'Concurrent external API fan-out via asyncio.gather',
          'Slow quote turnaround & discriminatory pricing bias',
          'State-specific FCRA/credit rules + disparate-impact testing',
        ],
        [
          'Flagged Fraud Investigation (Score > 40)',
          'Parallel Evidence + Peer-to-Peer Debate',
          'Opposing Fraud vs. Legitimacy advocates with self-critique',
          'Confirmation bias & wrongful bad-faith fraud accusations',
          'Non-legal 4-tier referral signal (SIU vs. human review)',
        ],
        [
          'Customer Service & Triage FNOL',
          'Orchestrator-Worker + Escalation Hybrid',
          'Single agent for routine queries; team fan-out for severe accidents',
          'Over-engineering simple lookups or under-serving emergencies',
          'Severity classifier routes multi-vehicle/injury claims to specialist squad',
        ],
      ],
      verdictRule:
        'Use strict sequential pipelines with stage guardrails whenever regulatory reconstructibility of every intermediate determination is mandatory; introduce parallel fan-out only for independent read-only data enrichment, and reserve peer-to-peer debate for high-cost adversarial judgments where confirmation bias causes legal exposure.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'baaf-ch09-scen1',
      title: 'Missing Police Report & Statutory Denial Block in Auto Claims',
      roleAndContext:
        'Lead Claims AI Architect at a US regional auto carrier deploying a LlamaIndex AgentWorkflow pipeline for night-time collision claims.',
      symptomOrFailure:
        'Policyholders filing claims immediately after 2:00 AM collisions lack official police reports; the monolithic prototype either hallucinates fault details or issues summary denials citing "insufficient evidence," triggering state Department of Insurance complaints.',
      naiveFixAndWhyItFails:
        'Adding a prompt instruction telling the decision LLM to "be lenient when police reports are delayed" fails because it Either approves unverified high-risk losses or still emits non-statutory denial phrasing when other fields look questionable.',
      firstPrinciplesSolution:
        'Insert a deterministic incomplete-documentation HITL gate at the DocumentParser boundary that pauses the ClaimRecord state and requests the missing police report before downstream analysis runs, paired with a deterministic ComplianceAgent that blocks any DENY decision whose reason code is not in the state’s recognized statutory list.',
      measurableOutcome:
        'Eliminates 100% of unauthorized summary denials on incomplete night-time FNOL submissions while resuming paused claims automatically within seconds once the police report is uploaded.',
    },
    {
      id: 'baaf-ch09-scen2',
      title: 'Eliminating False-Positive SIU Escalations on Recent Policy Claims',
      roleAndContext:
        'Fraud Systems Engineering Lead integrating automated fraud screening with a human Special Investigations Unit (SIU).',
      symptomOrFailure:
        'A single-agent LLM fraud investigator flags 38% of legitimate severe weather and highway collision claims filed within 30 days of policy renewal as "probable staged fraud," overwhelming SIU investigators and delaying valid payouts past the 30-day statutory clock.',
      naiveFixAndWhyItFails:
        'Raising the fraud score cutoff from 40 to 75 reduces SIU volume but blinds the carrier to genuine buy-and-claim rings that combine early loss dates with repeat repair-shop networks.',
      firstPrinciplesSolution:
        'Keep the deterministic FraudScreener threshold at 40 (+25 inception <30 days, +20 >=3 prior claims, +15 reporting >30 days) but route flagged claims through a 3-agent Adversarial Debate where LegitimacyAdvocate rebuts red flags using verified weather/telematics context and both advocates disclose argument weaknesses before InvestigationDecision issues a tiered referral.',
      measurableOutcome:
        'Cuts false-positive SIU referrals by 62% while preserving recall on organized fraud rings and keeping cleared claims inside statutory settlement timelines.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'baaf-ch09-q1',
        scenarioPrompt:
          'In the Chapter 9 claims pipeline, AssessmentAgent calculates a verified repair payout of $14,500, FraudScreener computes a risk score of 45/100 due to a policy inception 18 days prior and late reporting, and DecisionAgent recommends DENY based solely on the elevated fraud score. When ComplianceAgent executes, what happens and why?',
        options: [
          {
            label: 'A',
            text: 'ComplianceAgent approves the denial because FraudAgent outranks AssessmentAgent in the conflict hierarchy.',
            isCorrect: false,
            explanation:
              'While FraudAgent outranks Adjudication and Assessment, ComplianceAgent sits at the very top of the hierarchy and blocks non-statutory denials.',
          },
          {
            label: 'B',
            text: 'ComplianceAgent blocks the decision and routes the claim to review because a heuristic fraud score alone is not a statutorily recognized denial reason under state claims-handling regulations.',
            isCorrect: true,
            explanation:
              'Under the Compliance > Fraud > Adjudication > Assessment hierarchy, an uninvestigated fraud score cannot legally justify claim denial; ComplianceAgent vetoes the denial and forces escalation/review.',
          },
          {
            label: 'C',
            text: 'ComplianceAgent overrides the payout to $7,250 by splitting the claim value according to the 45% fraud probability.',
            isCorrect: false,
            explanation:
              'Insurance coverage is binary per covered peril (subject to deductibles and limits); prorating payouts by fraud scores violates policy contracts.',
          },
          {
            label: 'D',
            text: 'ComplianceAgent restarts the AgentWorkflow from FNOLAgent with temperature=1.0 to seek consensus.',
            isCorrect: false,
            explanation:
              'ComplianceAgent is a deterministic gatekeeper that returns BLOCKED and transitions status to review rather than re-running stochastic intake.',
          },
        ],
      },
      {
        id: 'baaf-ch09-q2',
        scenarioPrompt:
          'You wire all seven claims processing agents into a LlamaIndex AgentWorkflow using the framework’s default configuration (`max_iterations=20`). During end-to-end testing on Sarah Chen’s collision claim, the workflow halts abruptly inside `AssessmentAgent` before reaching `DecisionAgent` or `ComplianceAgent`. What is the mechanistic cause?',
        options: [
          {
            label: 'A',
            text: 'LlamaIndex AgentWorkflow restricts sequential pipelines to a maximum of five FunctionAgent instances.',
            isCorrect: false,
            explanation:
              'AgentWorkflow supports arbitrary agent counts; the truncation is caused by step-count exhaustion, not an agent-count cap.',
          },
          {
            label: 'B',
            text: 'Each agent consumes roughly 3 workflow iterations (tool call, handoff, response), so 7 agents require ~21 iterations and exceed the default max_iterations=20 ceiling.',
            isCorrect: true,
            explanation:
              'Because each agent turn involves calling its tool, executing the handoff tool, and generating a response, 7 agents require setting max_iterations=60 to complete safely.',
          },
          {
            label: 'C',
            text: 'AssessmentAgent cannot serialize float payout numbers into the Pydantic ClaimRecord state store.',
            isCorrect: false,
            explanation:
              'ClaimRecord.model_dump() cleanly serializes standard numeric fields into ctx.store.',
          },
          {
            label: 'D',
            text: 'FraudScreener scored 0/100, which triggers an automatic early-exit optimization after damage assessment.',
            isCorrect: false,
            explanation:
              'Every claim must pass through DecisionAgent and ComplianceAgent regardless of how low the fraud score is.',
          },
        ],
      },
      {
        id: 'baaf-ch09-q3',
        scenarioPrompt:
          'Why does the multi-agent fraud investigation team require both `FraudAdvocate` and `LegitimacyAdvocate` to populate a `weaknesses: list[str]` field on the `FraudArgument` Pydantic model, and why does `FraudAdvocate` hand off sequentially to `LegitimacyAdvocate` rather than running isolated prompts?',
        options: [
          {
            label: 'A',
            text: 'Sequential handoff over shared workflow memory lets LegitimacyAdvocate directly rebut the specific red flags raised by FraudAdvocate, while mandatory self-weakness disclosure prevents one-sided confirmation bias.',
            isCorrect: true,
            explanation:
              'Sharing conversation history allows direct point-by-point rebuttal, and forcing each advocate to identify its own evidentiary gaps gives InvestigationDecision calibrated signal quality.',
          },
          {
            label: 'B',
            text: 'LlamaIndex does not support parallel execution of FunctionAgent instances in Python 3.11.',
            isCorrect: false,
            explanation:
              'Python asyncio.gather supports concurrency (as used in the underwriting lab), but debate requires sequential visibility of the opening argument.',
          },
          {
            label: 'C',
            text: 'The weaknesses list is used to automatically deduct points from the deterministic FraudScreener score.',
            isCorrect: false,
            explanation:
              'The weaknesses list informs the InvestigationDecision agent’s qualitative weighing and confidence score rather than mutating the upstream screening integer.',
          },
          {
            label: 'D',
            text: 'State regulators require policyholders to write the LegitimacyAdvocate prompt themselves during FNOL.',
            isCorrect: false,
            explanation:
              'LegitimacyAdvocate is an automated internal agent role acting as a structural consumer-protection counterweight.',
          },
        ],
      },
      {
        id: 'baaf-ch09-q4',
        scenarioPrompt:
          'When designing least-privilege tool boundaries and data retention for a production multi-agent claims system handling auto collisions with bodily injury features, which configuration satisfies regulatory privacy mandates?',
        options: [
          {
            label: 'A',
            text: 'Store full policyholder names, SSNs, and medical diagnoses inside the immutable Kafka audit log forever so regulators can inspect them without joins.',
            isCorrect: false,
            explanation:
              'Audit logs must redact PII to opaque identifiers (like claim_id) and purge claim data once the 5–7 year statutory retention window expires.',
          },
          {
            label: 'B',
            text: 'Give all seven agents read access to Verisk ClaimSearch and raw medical PDFs via a single shared database tool to simplify context passing.',
            isCorrect: false,
            explanation:
              'Violates least-privilege isolation: DocumentParser must only access raw intake files, and FraudScreener must not read detailed medical records.',
          },
          {
            label: 'C',
            text: 'Scope DocumentParser to raw submission channels, restrict Verisk ClaimSearch access exclusively to FraudScreener, redact PII in audit logs to opaque Claim IDs, and automate purging after the 5–7 year statutory retention period.',
            isCorrect: true,
            explanation:
              'Enforces role-based least-privilege tool isolation, protects PII in tamper-evident logs, and complies with statutory retention-then-purge mandates.',
          },
          {
            label: 'D',
            text: 'Delete all claim logs immediately after ComplianceAgent validates the payout to minimize GDPR surface area.',
            isCorrect: false,
            explanation:
              'Market-conduct regulations require retaining complete claim decision records for 5–7 years (or longer for minors/litigation).',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'baaf-ch09-fc1',
        category: 'architecture',
        front: 'What is the strict conflict resolution hierarchy across agents in an insurance claims pipeline?',
        back: 'Compliance Agent > Fraud Agent > Adjudication (Decision) Agent > Damage Assessment Agent; regulatory compliance always exercises unconditional veto power.',
        mentalHook: 'Statute beats suspicion, suspicion beats synthesis, synthesis beats price tag.',
      },
      {
        id: 'baaf-ch09-fc2',
        category: 'evaluation',
        front: 'Which three deterministic rules does the Chapter 9 FraudScreener evaluate, and what score threshold triggers SIU investigation?',
        back: 'Loss within 30 days of policy inception (+25), 3 or more prior claims in 12 months (+20), and FNOL reporting delay over 30 days (+15); any total score > 40 triggers escalation.',
        mentalHook: '25-20-15 rule triad; over 40 goes to the debate floor.',
      },
      {
        id: 'baaf-ch09-fc3',
        category: 'security',
        front: 'Which three validation checks does the ComplianceAgent enforce before allowing a claim decision to pass?',
        back: 'If denied, the denial reason must be statutorily recognized; decision_reasoning must be at least 50 characters long; and every upstream pipeline stage must have completed.',
        mentalHook: 'Valid code, 50+ chars of proof, zero skipped stages.',
      },
      {
        id: 'baaf-ch09-fc4',
        category: 'architecture',
        front: 'Why does the Adversarial Fraud Investigation workflow output a referral signal (`strong_fraud_indicators`, `likely_fraud`, `inconclusive`, `likely_legitimate`) instead of a "Fraud / Not Fraud" verdict?',
        back: 'Fraud is a formal legal conclusion with a high evidentiary burden; automated systems must only emit investigation referral signals to avoid bad-faith liability and preserve human SIU judgment.',
        mentalHook: 'AI flags referrals; only humans and courts declare legal fraud.',
      },
      {
        id: 'baaf-ch09-fc5',
        category: 'optimization',
        front: 'How does the underwriting workflow combine sequential and parallel multi-agent patterns?',
        back: 'Application intake, risk modeling, pricing, and issuance run sequentially, while the data enrichment stage fans out concurrently via asyncio.gather across credit, driving record (MVR), and property valuation checks.',
        mentalHook: 'Sequential spine, parallel bureau fan-out.',
      },
      {
        id: 'baaf-ch09-fc6',
        category: 'security',
        front: 'What are the five operational conditions that trigger a Human-in-the-Loop (HITL) pause gate in a production insurance pipeline?',
        back: 'High-value claims (e.g., >$100,000), fraud-flagged claims (score >40 or SIU referral), coverage language ambiguity, mandatory regulatory categories (total loss, bodily injury, minors), and incomplete intake documentation.',
        mentalHook: 'High dollar, high fraud, murky clause, protected class/injury, or missing police report.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'baaf-ch09-feyn1',
        conceptTitle: 'Sequential Guardrailed Claims Architecture vs. Parallel Trading Committees',
        prompt:
          'Explain to a financial engineering peer why you cannot reuse Chapter 8’s parallel investment-committee architecture to process auto insurance claims, detailing how data modality, regulatory purpose of the audit trail, and conflict resolution differ.',
        rubricChecklist: [
          'Contrasts structured numerical market feeds against unstructured multimodal insurance documents (PDFs, damage photos, medical records) requiring staged extraction before analysis.',
          'Explains stage-order dependency: coverage must be verified before damage is priced, and fraud must be screened before payout adjudication.',
          'Identifies that the insurance audit trail is the regulated product itself under state Unfair Claims Settlement Practices Acts, requiring discrete per-stage attribution.',
          'States the Compliance > Fraud > Adjudication > Assessment veto hierarchy protecting consumers from unlawful denials.',
        ],
        modelExplanation:
          'In a trading system, four analysts can inspect clean numerical market APIs in parallel because price and volume feeds are already structured and independent. In insurance claims, you start with heterogeneous unstructured files—photos of a crumpled bumper, scanned PDFs, and policy booklets—so Stage 2 (DocumentParser) must convert raw media into structured JSON before Stage 3 (CoverageAgent) can check policy clauses, which in turn must supply the deductible and limit before Stage 5 (AssessmentAgent) can cap the payout. Even more importantly, while a trading log serves internal review, an insurance audit trail is the regulated product inspected by state market-conduct examiners. Running a strict sequential pipeline with stage-boundary guardrails ensures every determination is timestamped and governed by the Compliance Agent veto (`Compliance > Fraud > Adjudication > Assessment`), preventing any unlawful consumer denial.',
      },
      {
        id: 'baaf-ch09-feyn2',
        conceptTitle: 'Adversarial Peer-to-Peer Fraud Debate Mechanics',
        prompt:
          'Walk through how a claim that scores 45 on the deterministic FraudScreener is evaluated by the multi-agent fraud investigation team, explaining why a single fraud-detection LLM fails and how the three debate agents structure their interaction.',
        rubricChecklist: [
          'Explains confirmation bias in single-agent fraud prompts: looking only for fraud flags legitimate claims and risks bad-faith litigation.',
          'Describes the sequential handoff over shared AgentWorkflow history from FraudAdvocate to LegitimacyAdvocate so the defense directly rebuts the prosecution’s red flags.',
          'Highlights the FraudArgument Pydantic schema requirement where both advocates must explicitly disclose weaknesses in their own arguments.',
          'Notes that InvestigationDecision outputs one of four non-legal referral signals (strong_fraud_indicators, likely_fraud, inconclusive, likely_legitimate) rather than a legal finding of fraud.',
        ],
        modelExplanation:
          'When a claim exceeds the deterministic fraud screening threshold of 40, handing it to a single LLM prompted to investigate fraud creates prosecutorial confirmation bias—it interprets every coincidence as guilt, risking wrongful denial lawsuits. Instead, we trigger a three-agent peer-to-peer debate modeled on Special Investigations Unit (SIU) inquiry. First, `FraudAdvocate` builds the strongest case for fraud from the red flags and evidence, outputting a structured `FraudArgument` that must include a list of weaknesses in its own case. Next, control hands off to `LegitimacyAdvocate` within the same `AgentWorkflow` conversation history; seeing the exact prosecutorial argument, it constructs an innocent consumer-protection rebuttal for each red flag while also disclosing its own weaknesses. Finally, `InvestigationDecision` weighs both arguments and their self-disclosed flaws to emit a calibrated referral signal (`strong_fraud_indicators`, `likely_fraud`, `inconclusive`, or `likely_legitimate`), preserving human SIU judgment for legal determinations.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'baaf-ch09-node-sequential-claims',
        label: 'Sequential Guardrailed Claims Pipeline',
        category: 'architecture',
        chapterNumber: 9,
        importance: 1,
        definition:
          'Seven-agent linear LlamaIndex workflow (FNOL, Parser, Coverage, Fraud, Assessment, Decision, Compliance) mutating a shared Pydantic ClaimRecord.',
        formulaOrRule: 'max_iterations = 60 (~3 steps × 7 agents)',
        whyItMatters:
          'Enforces strict causal ordering and produces a discrete, timestamped regulatory audit trail for every claim decision.',
      },
      {
        id: 'baaf-ch09-node-compliance-veto',
        label: 'Compliance-First Veto Hierarchy',
        category: 'security',
        chapterNumber: 9,
        importance: 1,
        definition:
          'Hierarchical conflict resolution rule where the deterministic Compliance Agent unconditionally blocks non-statutory denials or incomplete stage chains.',
        formulaOrRule: 'Compliance > Fraud > Adjudication > Assessment',
        whyItMatters:
          'Prevents unlawful claim denials and Unfair Claims Settlement Practices Act violations regardless of upstream LLM recommendations.',
      },
      {
        id: 'baaf-ch09-node-multimodal-parsing',
        label: 'Multimodal Document Tri-Stage Ingestion',
        category: 'data',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Classification, OCR/vision extraction, and cross-document validation pipeline converting raw photos, PDFs, and forms into typed JSON.',
        whyItMatters:
          'Bridges heterogeneous real-world loss evidence into structured fields that coverage and assessment agents can deterministically bound.',
      },
      {
        id: 'baaf-ch09-node-adversarial-fraud',
        label: 'Adversarial Fraud Debate Architecture',
        category: 'architecture',
        chapterNumber: 9,
        importance: 1,
        definition:
          'Peer-to-peer debate pairing a Fraud Advocate and a Legitimacy Advocate (both disclosing argument weaknesses) before an Investigation Decision judge.',
        formulaOrRule: 'Trigger: FraudScreener score > 40',
        whyItMatters:
          'Neutralizes prosecutorial confirmation bias on flagged claims and outputs calibrated SIU referral signals instead of reckless fraud accusations.',
      },
      {
        id: 'baaf-ch09-node-parallel-underwriting',
        label: 'Parallel Underwriting Enrichment',
        category: 'optimization',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Hybrid workflow executing sequential intake and pricing around a concurrent asyncio.gather fan-out across credit, MVR driving, and property APIs.',
        whyItMatters:
          'Collapses external data-gathering latency to the slowest single bureau call while keeping risk modeling and rate rules sequential.',
      },
      {
        id: 'baaf-ch09-node-hitl-audit-governance',
        label: 'HITL Pause Gates & Immutable Audit Trail',
        category: 'evaluation',
        chapterNumber: 9,
        importance: 2,
        definition:
          'Configurable workflow checkpoints (payout >$100k, score >40, missing docs, ambiguity) paired with PII-redacted, append-only event logs retained 5–7 years.',
        whyItMatters:
          'Satisfies market-conduct examination reconstructibility, GDPR/HIPAA least-privilege privacy, and human oversight on edge cases.',
      },
    ],
    edges: [
      {
        source: 'baaf-ch09-node-multimodal-parsing',
        target: 'baaf-ch09-node-sequential-claims',
        relationship: 'prerequisite_for',
        explanation:
          'Structured JSON fields extracted from photos and forms are required before downstream coverage, fraud, and damage agents can execute.',
      },
      {
        source: 'baaf-ch09-node-compliance-veto',
        target: 'baaf-ch09-node-sequential-claims',
        relationship: 'evaluates',
        explanation:
          'The Compliance Agent sits at the terminal boundary of the seven-agent pipeline to validate statutory denial codes and stage completeness.',
      },
      {
        source: 'baaf-ch09-node-adversarial-fraud',
        target: 'baaf-ch09-node-sequential-claims',
        relationship: 'mitigates',
        explanation:
          'Escalating claims with FraudScreener scores > 40 into adversarial debate prevents false-positive fraud denials in the main pipeline.',
      },
      {
        source: 'baaf-ch09-node-hitl-audit-governance',
        target: 'baaf-ch09-node-compliance-veto',
        relationship: 'part_of',
        explanation:
          'Append-only audit logging and configurable human pause gates operationalize compliance-first governance in production.',
      },
      {
        source: 'baaf-ch09-node-parallel-underwriting',
        target: 'baaf-ch09-node-sequential-claims',
        relationship: 'trades_off_with',
        explanation:
          'Underwriting fans out independent bureau queries in parallel for speed, whereas claims processing enforces strict sequential stage dependencies.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 7,
    figuresIncluded: 4,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 9 sections (workflow problem, trading vs insurance, 4 insurance workflows, 8 agent roles, compliance-first hierarchy, 7-agent LlamaIndex pipeline, adversarial fraud debate, production governance & 3 labs) with all 4 extracted figures (B32414_9_1 through B32414_9_4) and zero forbidden prose tropes.',
  },
};

export const baafCh10Mastery: ChapterMastery = {
  chapterNumber: 10,
  chapterId: 'ch10',
  title: 'Building Agentic RAG Systems in Finance',
  subtitle: 'Source Routing, Sub-Question Decomposition, Self-Correcting Reflection Loops, Hybrid RRF Search, and Triad Evaluation',
  readingTimeMinutes: 8,
  sourceWordCount: 13433,
  executiveThesis:
    'Naive single-pass RAG fails in regulated finance because pooling 10-Ks, earnings calls, and internal risk policies into one blended index causes source confusion, misses multi-hop comparisons, and hallucinates over incomplete context without self-checking. Agentic RAG replaces fixed retrieve-then-generate pipelines with per-document tool routing, parallel sub-question decomposition, and iterative reflection loops backed by Reciprocal Rank Fusion (RRF) hybrid search, listwise LLM reranking, and RAG Triad verification.',
  paradigmShift: {
    oldWay:
      'All financial filings and policies are chunked into a single blended vector index where one fixed top-k cosine similarity pass feeds an LLM that blindly generates an answer regardless of missing figures or period mismatches.',
    newWay:
      'Documents are isolated into described per-source indexes queried by an agentic control layer that routes, decomposes cross-document questions, verifies evidence sufficiency before answering, and fuses BM25 + dense retrieval with listwise reranking.',
    whyItChanged:
      'Financial compliance and investment decisions require combining exact metrics across distinct reporting periods and policy rules where every number must carry an auditable filing citation and achieve 100% faithfulness.',
  },
  customDiagrams: [
    {
      id: 'baaf-ch10-svg1',
      title: 'Progressive Agentic RAG Topologies: Naive vs. Router vs. Decomposition vs. Self-Correcting Agent',
      subtitle: 'Comparing LLM call scaling, source isolation, and sufficiency reflection loops across LlamaIndex architectures',
      bierutCaption:
        'Match retrieval control flow to query complexity: isolate sources with a Router, fan out multi-source lookups via SubQuestionQueryEngine, and enforce iterative sufficiency checks with a FunctionAgent.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="24" y="32" fill="#f8fafc" font-size="14.5" font-weight="700" letter-spacing="0.04em">FOUR RAG CONTROL ARCHITECTURES &amp; CALL SCALING</text>
  <text x="24" y="50" fill="#94a3b8" font-size="10.5">Benchmark Query: "Does Acme's Q3 quick ratio (1.18) satisfy the firm's risk policy (&gt;= 1.00)?"</text>

  <!-- Col 1: Naive RAG -->
  <g transform="translate(20, 68)">
    <rect width="176" height="328" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
    <text x="12" y="24" fill="#94a3b8" font-size="10" font-weight="700">01 NAIVE RAG (STEP 3)</text>
    <text x="12" y="42" fill="#f8fafc" font-size="11" font-weight="600">Blended Single Index</text>
    <rect x="14" y="58" width="148" height="42" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="24" y="76" fill="#cbd5e1" font-size="9.5">10-K + Q3 Call + Policy</text>
    <text x="24" y="90" fill="#64748b" font-size="8.5">Mixed in 1 VectorStore</text>
    <path d="M 88 100 L 88 130" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="130" width="148" height="40" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="24" y="148" fill="#cbd5e1" font-size="9.5">Fixed similarity_top_k=3</text>
    <text x="24" y="162" fill="#64748b" font-size="8.5">No source guarantee</text>
    <path d="M 88 170 L 88 200" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="200" width="148" height="40" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="24" y="224" fill="#e2e8f0" font-size="10" font-weight="600">Single LLM Generate</text>
    <text x="14" y="268" fill="#fca5a5" font-size="9" font-weight="600">Cost: 1 Retr + 1 LLM Call</text>
    <text x="14" y="286" fill="#94a3b8" font-size="8.5">Fails at scale: source mix-up</text>
    <text x="14" y="300" fill="#94a3b8" font-size="8.5">&amp; zero sufficiency check.</text>
  </g>

  <!-- Col 2: Router -->
  <g transform="translate(212, 68)">
    <rect width="176" height="328" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="12" y="24" fill="#38bdf8" font-size="10" font-weight="700">02 ROUTER (STEP 4)</text>
    <text x="12" y="42" fill="#f8fafc" font-size="11" font-weight="600">LLMSingleSelector</text>
    <rect x="14" y="58" width="148" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="22" y="76" fill="#38bdf8" font-size="9.5" font-weight="600">Selector Reads Tool Docs</text>
    <text x="22" y="90" fill="#94a3b8" font-size="8.5">Picks 1 (or subset) source</text>
    <path d="M 88 100 L 88 130" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="130" width="148" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="22" y="148" fill="#cbd5e1" font-size="9.5">Per-Doc QueryEngineTool</text>
    <text x="22" y="162" fill="#64748b" font-size="8.5">10-K | Q3 Call | Policy</text>
    <path d="M 88 170 L 88 200" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="200" width="148" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="22" y="224" fill="#e2e8f0" font-size="10" font-weight="600">Single Answer Pass</text>
    <text x="14" y="268" fill="#38bdf8" font-size="9" font-weight="600">Cost: +1 Selector LLM Call</text>
    <text x="14" y="286" fill="#94a3b8" font-size="8.5">Great for 1-source queries;</text>
    <text x="14" y="300" fill="#fca5a5" font-size="8.5">confused current vs quick rule.</text>
  </g>

  <!-- Col 3: Sub-Question Decomposition -->
  <g transform="translate(404, 68)">
    <rect width="176" height="328" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
    <text x="12" y="24" fill="#a78bfa" font-size="10" font-weight="700">03 DECOMPOSE (STEP 5)</text>
    <text x="12" y="42" fill="#f8fafc" font-size="11" font-weight="600">SubQuestionQueryEngine</text>
    <rect x="14" y="58" width="148" height="42" rx="6" fill="#0f172a" stroke="#a78bfa" />
    <text x="20" y="76" fill="#a78bfa" font-size="9.5" font-weight="600">LLMQuestionGenerator</text>
    <text x="20" y="90" fill="#94a3b8" font-size="8.5">Splits into N JSON sub-queries</text>
    <path d="M 54 100 L 54 130" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6 4" />
    <path d="M 122 100 L 122 130" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="130" width="148" height="40" rx="6" fill="#0f172a" stroke="#a78bfa" />
    <text x="20" y="148" fill="#cbd5e1" font-size="9.5">Parallel Per-Tool Lookup</text>
    <text x="20" y="162" fill="#64748b" font-size="8.5">Isolated sub-answers</text>
    <path d="M 88 170 L 88 200" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="200" width="148" height="40" rx="6" fill="#0f172a" stroke="#a78bfa" />
    <text x="20" y="224" fill="#e2e8f0" font-size="10" font-weight="600">Final Synthesis LLM</text>
    <text x="14" y="268" fill="#c4b5fd" font-size="9" font-weight="600">Cost: (N + 2) LLM Calls</text>
    <text x="14" y="286" fill="#34d399" font-size="8.5">Prevents rule contamination;</text>
    <text x="14" y="300" fill="#94a3b8" font-size="8.5">fixed upfront plan (non-adaptive).</text>
  </g>

  <!-- Col 4: Self-Correcting Agent -->
  <g transform="translate(596, 68)">
    <rect width="184" height="328" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2" />
    <text x="12" y="24" fill="#34d399" font-size="10" font-weight="700">04 AGENT LOOP (STEP 6)</text>
    <text x="12" y="42" fill="#f8fafc" font-size="11" font-weight="600">Self-Correcting ReAct</text>
    <rect x="14" y="58" width="156" height="42" rx="6" fill="#0f2922" stroke="#10b981" />
    <text x="20" y="76" fill="#34d399" font-size="9.5" font-weight="600">Call Tool 1 (Risk Policy)</text>
    <text x="20" y="90" fill="#a7f3d0" font-size="8.5">Gets min quick ratio = 1.00</text>
    <path d="M 92 100 L 92 126" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="126" width="156" height="48" rx="6" fill="#311024" stroke="#f43f5e" />
    <text x="20" y="144" fill="#fb7185" font-size="9.5" font-weight="700">Sufficiency Check Loop</text>
    <text x="20" y="160" fill="#fda4af" font-size="8.5">Missing issuer figure → Re-query!</text>
    <path d="M 92 174 L 92 200" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="14" y="200" width="156" height="44" rx="6" fill="#0f2922" stroke="#10b981" />
    <text x="20" y="218" fill="#f8fafc" font-size="9.5" font-weight="600">Call Tool 2 &amp; 3 (10-K/Q3)</text>
    <text x="20" y="234" fill="#a7f3d0" font-size="8.5">Verifies 1.23 (FY24) &amp; 1.18 (Q3)</text>
    <text x="14" y="268" fill="#fcd34d" font-size="9" font-weight="600">Cost: 2k+1 Calls (Cap Max Retries)</text>
    <text x="14" y="286" fill="#34d399" font-size="8.5">Highest accuracy: applies 10-K</text>
    <text x="14" y="300" fill="#34d399" font-size="8.5">sourcing rule &amp; cites all figures.</text>
  </g>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Per-Document Index Isolation',
          explanation:
            'Building separate VectorStoreIndex instances per filing eliminates blended-index source confusion before any agentic pattern runs.',
        },
        {
          step: '2',
          label: 'Upfront Decomposition vs. Iterative Reflection',
          explanation:
            'SubQuestionQueryEngine generates all sub-queries in one upfront pass (parallelizable, N+2 LLM calls), whereas FunctionAgent evaluates evidence sufficiency after each tool call.',
        },
        {
          step: '3',
          label: 'Production Loop Guardrails',
          explanation:
            'Self-correcting agents require mandatory tool citations, a hard retrieval-attempt cap, and explicit abstention when figures are unavailable.',
        },
      ],
    },
    {
      id: 'baaf-ch10-svg2',
      title: 'Hybrid RRF Recall-Then-Precision Pipeline & The RAG Evaluation Triad',
      subtitle: 'Reciprocal Rank Fusion (k=60) + Listwise LLMRerank followed by Faithfulness, Answer Relevancy, and Context Relevancy',
      bierutCaption:
        'Fuse dense semantic vectors with sparse BM25 lexical matches via RRF to maximize recall, trim candidates with listwise LLM reranking for precision, and audit every response across the RAG Triad.',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="800" height="420" rx="12" fill="#0f172a" />
  <text x="24" y="32" fill="#f8fafc" font-size="14.5" font-weight="700" letter-spacing="0.04em">RECALL-THEN-PRECISION RETRIEVAL &amp; RAG TRIAD DIAGNOSTICS</text>

  <!-- Top Section: Hybrid + Rerank Pipeline -->
  <g transform="translate(24, 54)">
    <rect width="144" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="12" y="22" fill="#38bdf8" font-size="9.5" font-weight="700">DENSE RETRIEVER</text>
    <text x="12" y="38" fill="#e2e8f0" font-size="10">OpenAI Embedding</text>
    <text x="12" y="52" fill="#94a3b8" font-size="8.5">Cosine Sim [0, 1] (top-5)</text>
  </g>

  <g transform="translate(24, 128)">
    <rect width="144" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="12" y="22" fill="#f59e0b" font-size="9.5" font-weight="700">SPARSE RETRIEVER</text>
    <text x="12" y="38" fill="#e2e8f0" font-size="10">BM25 Lexical Match</text>
    <text x="12" y="52" fill="#94a3b8" font-size="8.5">Unbounded TF/IDF (top-5)</text>
  </g>

  <path d="M 168 84 L 212 114" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" />
  <path d="M 168 158 L 212 128" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(212, 78)">
    <rect width="186" height="86" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
    <text x="12" y="22" fill="#a78bfa" font-size="10" font-weight="700">RECIPROCAL RANK FUSION</text>
    <text x="12" y="40" fill="#f8fafc" font-size="10.5" font-weight="600">Score(d) = Σ 1 / (60 + r_i(d))</text>
    <text x="12" y="58" fill="#cbd5e1" font-size="9">Rank-only consensus (k=60)</text>
    <text x="12" y="74" fill="#34d399" font-size="9" font-weight="600">Maximizes Broad Recall</text>
  </g>

  <path d="M 398 121 L 432 121" stroke="#a78bfa" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(432, 78)">
    <rect width="176" height="86" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5" />
    <text x="12" y="22" fill="#f472b6" font-size="10" font-weight="700">LISTWISE LLMRerank</text>
    <text x="12" y="40" fill="#f8fafc" font-size="10.5" font-weight="600">Batch Score 1–10 Scale</text>
    <text x="12" y="58" fill="#cbd5e1" font-size="9">Keeps global top_n=3 nodes</text>
    <text x="12" y="74" fill="#34d399" font-size="9" font-weight="600">Restores High Precision</text>
  </g>

  <path d="M 608 121 L 642 121" stroke="#ec4899" stroke-width="2" stroke-dasharray="6 4" />

  <g transform="translate(642, 86)">
    <rect width="134" height="70" rx="8" fill="#0f2922" stroke="#10b981" stroke-width="1.5" />
    <text x="12" y="24" fill="#34d399" font-size="10" font-weight="700">CLAUDE GENERATOR</text>
    <text x="12" y="42" fill="#f8fafc" font-size="10" font-weight="600">Grounded Synthesis</text>
    <text x="12" y="58" fill="#a7f3d0" font-size="8.5">Cited Financial Verdict</text>
  </g>

  <!-- Bottom Section: The RAG Evaluation Triad -->
  <rect x="24" y="214" width="752" height="182" rx="10" fill="#090d16" stroke="#334155" stroke-width="1.5" />
  <text x="44" y="240" fill="#38bdf8" font-size="12" font-weight="700" letter-spacing="0.05em">THE RAG EVALUATION TRIAD (LLM-AS-JUDGE DIAGNOSTICS)</text>

  <g transform="translate(44, 256)">
    <rect width="224" height="120" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
    <text x="14" y="24" fill="#34d399" font-size="10.5" font-weight="700">1. FAITHFULNESS (GROUNDING)</text>
    <text x="14" y="42" fill="#f8fafc" font-size="10" font-weight="600">Answer ↔ Retrieved Context</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="9.5">Splits answer into factual claims;</text>
    <text x="14" y="76" fill="#cbd5e1" font-size="9.5">verifies 100% source support.</text>
    <text x="14" y="100" fill="#fcd34d" font-size="9" font-weight="600">Low Score = Hallucination Bug</text>
  </g>

  <g transform="translate(288, 256)">
    <rect width="224" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="14" y="24" fill="#38bdf8" font-size="10.5" font-weight="700">2. ANSWER RELEVANCY</text>
    <text x="14" y="42" fill="#f8fafc" font-size="10" font-weight="600">Generated Answer ↔ User Query</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="9.5">Measures share of answer statements</text>
    <text x="14" y="76" fill="#cbd5e1" font-size="9.5">directly addressing the prompt.</text>
    <text x="14" y="100" fill="#fcd34d" font-size="9" font-weight="600">Low Score = Evasive / Off-Topic</text>
  </g>

  <g transform="translate(532, 256)">
    <rect width="224" height="120" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
    <text x="14" y="24" fill="#a78bfa" font-size="10.5" font-weight="700">3. CONTEXT RELEVANCY</text>
    <text x="14" y="42" fill="#f8fafc" font-size="10" font-weight="600">Retrieved Chunks ↔ User Query</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="9.5">Measures share of retrieved sentences</text>
    <text x="14" y="76" fill="#cbd5e1" font-size="9.5">useful for answering the question.</text>
    <text x="14" y="100" fill="#fcd34d" font-size="9" font-weight="600">Low Score = Retriever Noise Bug</text>
  </g>
</svg>`,
      annotations: [
        {
          step: '1',
          label: 'Scale-Invariant Rank Fusion',
          explanation:
            'Because cosine similarity lies in [0,1] while BM25 scores are unbounded, RRF fuses rankings purely by 0-based rank position using smoothing constant k=60.',
        },
        {
          step: '2',
          label: 'Listwise LLM Reranking',
          explanation:
            'LLMRerank batches candidate nodes (choice_batch_size=10), prompts the LLM to score relevant docs 1–10 as a group, and retains only top_n survivors.',
        },
        {
          step: '3',
          label: 'Triad Failure Localization',
          explanation:
            'Separating Faithfulness, Answer Relevancy, and Context Relevancy pinpoints whether an error stems from retriever noise or generator hallucination.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'baaf-ch10-mm1',
      name: 'Per-Source Index Isolation vs. The Blended-Index Trap',
      tagline: 'Never pool annual reports, quarterly calls, and internal policies into one undifferentiated vector soup.',
      naiveIntuition:
        'Dumping all financial documents into a single vector store with top-k retrieval lets cosine similarity automatically surface the right figures for any question.',
      firstPrinciplesReality:
        'A blended index confuses reporting periods (returning FY24 10-K quick ratios when Q3 was requested) and fails to guarantee that both a policy rule chunk and an issuer metric chunk appear inside a fixed top-k window on large corpora.',
      howToApply:
        'Build a dedicated VectorStoreIndex per document or source class and expose each as a QueryEngineTool with explicit, non-overlapping natural-language descriptions of its reporting period and contents.',
    },
    {
      id: 'baaf-ch10-mm2',
      name: 'Recall-Then-Precision Two-Stage Funnel',
      tagline: 'Use hybrid RRF to cast a wide net, then listwise reranking to hand the LLM only high-signal context.',
      naiveIntuition:
        'Tuning vector similarity_top_k alone can simultaneously maximize finding every exact financial term and keep irrelevant noise out of the generator prompt.',
      firstPrinciplesReality:
        'Dense embeddings capture paraphrases ("current assets over current liabilities") but miss exact tickers or ratio names that sparse BM25 catches; fusing both boosts recall at the cost of extra candidates that must be pruned by a precision reranker.',
      howToApply:
        'Combine dense and BM25 retrievers with QueryFusionRetriever (`mode="reciprocal_rerank"`, `k=60`) and attach an `LLMRerank` or cross-encoder node postprocessor to trim the fused pool to `top_n=2..3`.',
    },
    {
      id: 'baaf-ch10-mm3',
      name: 'Retrieval Quality ≠ Reasoning Quality',
      tagline: 'Perfectly retrieved chunks still produce wrong compliance verdicts without decomposed or reflective reasoning.',
      naiveIntuition:
        'Once hybrid search and reranking deliver the exact policy and earnings-call passages with 9/10 relevance, a single LLM generation pass will reliably apply the compliance rule.',
      firstPrinciplesReality:
        'In single-pass generation over multi-source context (such as Router or Hybrid+Rerank), rules from different passages cross-contaminate—causing the LLM to confuse a current-ratio Risk Committee exception (1.00–1.50) with the quick-ratio threshold (1.00).',
      howToApply:
        'Pair high-precision hybrid/reranked retrieval tools with SubQuestionQueryEngine (to isolate per-source lookups before synthesis) or a self-correcting FunctionAgent that verifies sourcing rules and sufficiency iteratively.',
    },
  ],
  deepSections: [
    {
      id: 'baaf-ch10-sec1',
      sectionNumber: '10.1',
      title: 'Why Naive RAG Fails in Finance & The Three Agentic Patterns',
      subtitle: 'Overcoming source confusion, multi-hop blind spots, and unverified context via Routing, Decomposition, and Reflection',
      coreMechanism:
        'Traditional RAG uses four static components—Knowledge Base, Embedding Model (`text-embedding-3-small`), Vector Database, and Retriever—which suffice for single-fact 10-K lookups. In complex financial workflows, naive RAG breaks down in four ways: (1) *source confusion* in blended indexes, (2) inability to plan *multi-step retrieval*, (3) *zero sufficiency checking* on incomplete context, and (4) inability to call *external tools* (SQL, calculators, market feeds).\n\nAgentic RAG resolves these failures through three patterns over isolated per-document `QueryEngineTool` indexes. **Routing** (`RouterQueryEngine` with `LLMSingleSelector`) adds one selector LLM call to match queries to tool descriptions for single-source lookups. **Query Decomposition** (`SubQuestionQueryEngine` with `LLMQuestionGenerator`) splits multi-source questions into parallel per-tool sub-questions before synthesis ($N + 2$ LLM calls), preventing cross-rule contamination. **Self-Correcting Retrieval** (`FunctionAgent`) inspects `ToolCallResult` evidence after each step, detects missing metrics or policy sourcing rules, and re-queries until sufficient.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Isolate Per-Source Indexes & Author Disjoint Tool Descriptions',
          detail:
            'Build separate VectorStoreIndex instances for the 10-K, Q3 earnings call, and firm risk policy, wrapping each in a QueryEngineTool with precise descriptions of reporting cadence and metric scope.',
        },
        {
          step: '2',
          title: 'Select Routing or Upfront Sub-Question Decomposition',
          detail:
            'Use RouterQueryEngine (logged via response.metadata["selector_result"]) for single-source queries, or SubQuestionQueryEngine to decompose independent cross-document comparisons into parallel lookups.',
        },
        {
          step: '3',
          title: 'Enforce Sufficiency Guardrails in Self-Correcting Loops',
          detail:
            'Equip a FunctionAgent with a compliance prompt requiring explicit filing citations, a hard cap on retrieval attempts, and safe abstention when a required figure cannot be verified.',
        },
      ],
      keyTakeaways: [
        'SubQuestionQueryEngine generates all sub-questions in a single upfront pass, meaning dependent multi-hop queries where sub-question 2 depends on answer 1 require iterative patterns (Self-Ask, IRCoT, or FunctionAgent).',
        'In the lab benchmark ("Does Acme’s Q3 quick ratio of 1.18 satisfy the firm’s 1.00 policy?"), the Router retrieved the right files but confused the current-ratio rule (1.00–1.50 exception) with the quick-ratio rule, whereas Decomposition and the Agent kept the rules cleanly separated.',
        'Only the self-correcting FunctionAgent applied the risk policy’s fine-print sourcing rule—verifying the audited FY24 10-K quick ratio (1.23) alongside the Q3 figure (1.18) and distinguishing the 1.25 current-ratio credit covenant.',
      ],
      commonPitfalls: [
        'Writing vague or overlapping QueryEngineTool descriptions causes LLM selectors to misroute queries between quarterly earnings commentary and audited 10-K notes.',
        'Deploying an LLM router without a catch-all tool or low-confidence fallback forces the selector to route out-of-scope questions into an irrelevant financial index.',
      ],
      figures: [
        {
          file: 'B32414_10_4.png',
          originalLabel: 'Figure 10.4 – Naive RAG follows a fixed retrieval pipeline. Agentic RAG introduces a decision-making loop...',
          bierutTitle: 'Insert an Agentic Decision Loop Between User Queries and Document Retrieval',
          editorialAnalysis:
            'Contrasts the linear Retrieve-Augment-Generate pipeline of Naive RAG against Agentic RAG’s closed-loop controller that routes sources, decomposes complex prompts, checks evidence sufficiency, and re-queries before synthesis.',
          keyTakeaways: [
            'Transforming retrieval from a static preprocessing step into an iterative tool-use loop prevents generating answers from incomplete context.',
          ],
        },
        {
          file: 'B32414_10_9.png',
          originalLabel: 'Figure 10.9 – Decomposition applied to the cross-document liquidity question.',
          bierutTitle: 'Decompose Cross-Document Compliance Queries into Isolated Single-Source Lookups',
          editorialAnalysis:
            'Shows SubQuestionQueryEngine splitting the multi-source liquidity question into three independent sub-queries—FY24 10-K quick ratio (1.23), Q3 earnings call quick ratio (1.18), and risk policy threshold (1.00)—before executing the trend and compliance comparison in the synthesis step.',
          keyTakeaways: [
            'Answering each sub-question in isolation prevents rules and numbers from different documents from contaminating one another prior to synthesis.',
          ],
        },
        {
          file: 'B32414_10_11.png',
          originalLabel: 'Figure 10.11 – A self-correcting compliance check.',
          bierutTitle: 'Trigger Targeted Re-Queries When Sufficiency Checks Detect Missing Financial Figures',
          editorialAnalysis:
            'Traces a buy-side compliance FunctionAgent that queries the firm risk policy first, discovers it has the threshold (>= 1.00) but lacks the issuer’s ratio, dynamically invokes the filing tools to retrieve the metric, and only then renders a cited verdict.',
          keyTakeaways: [
            'Self-correcting retrieval discovers missing evidence at runtime without requiring the user prompt to pre-specify every needed source.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch10-sec2',
      sectionNumber: '10.2',
      title: 'Hybrid Search (BM25 + Dense RRF) & Listwise LLM Reranking',
      subtitle: 'Fusing lexical and semantic rank lists via Reciprocal Rank Fusion and pruning candidates with LLMRerank',
      coreMechanism:
        'Financial text uses both exact lexical identifiers (tickers, ASC section numbers, "quick ratio") and semantic paraphrases ("acid-test ratio", "liquid assets over current obligations"). Dense vector search captures semantic paraphrases but can smooth away exact terms, whereas sparse **BM25** lexical search matches exact tokens using saturating term frequency ($k_1$), inverse document frequency, and document-length normalization ($b$). Because dense cosine similarity lies in $[0, 1]$ while BM25 scores are unbounded, adding raw scores biases results toward BM25.\n\nLlamaIndex’s `QueryFusionRetriever` (`mode="reciprocal_rerank"`, `num_queries=1`) solves this via **Reciprocal Rank Fusion (RRF)**, which discards raw scores and sums reciprocal rank positions using smoothing constant $k = 60$. To restore precision after hybrid search widens recall, a listwise `LLMRerank` node postprocessor batches candidates (`choice_batch_size=10`), asks Claude to score relevant passages on a $1\\text{–}10$ scale as a group, and forwards only the global `top_n` chunks to generation.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Dual Dense + Sparse Retrieval Over Shared Docstore',
          detail:
            'Run vector_retriever (similarity_top_k=5) and BM25Retriever (similarity_top_k=5) over the same indexed nodes so both semantic paraphrases and exact financial terms are captured.',
        },
        {
          step: '2',
          title: 'Consensus Merging via Reciprocal Rank Fusion (k=60)',
          detail:
            'Compute RRF_score(d) across both ranked lists so chunks ranked highly by both BM25 and dense vectors (~0.033) outrank chunks topping only a single list (~0.0167).',
        },
        {
          step: '3',
          title: 'Listwise Batch Reranking & Top-N Pruning',
          detail:
            'Pass fused candidates into LLMRerank(top_n=3), which scores relevant passages 1–10 in batches of 10 and drops low-scoring noise (e.g., keeping 9/10 policy and Q3 chunks over 6/10 10-K chunks).',
        },
      ],
      formulas: [
        {
          name: 'Reciprocal Rank Fusion (RRF) Score',
          expression: 'RRF\\_score(d) = \\sum_{i \\in L(d)} \\frac{1}{k + r_i(d)}',
          intuition:
            'Normalizes incompatible retrieval scales (bounded cosine similarity vs. unbounded BM25) by scoring documents purely on consensus rank order; with k=60, appearing near the top of both dense and sparse lists (~0.033) beats ranking #1 in only one list (~0.0167).',
          variables: [
            {
              symbol: 'd',
              meaning: 'Candidate document chunk being scored across retrievers.',
            },
            {
              symbol: 'L(d)',
              meaning: 'Set of ranked retrieval lists (e.g., dense vector list and sparse BM25 list) in which chunk d appears.',
            },
            {
              symbol: 'r_i(d)',
              meaning: '0-based rank position (0, 1, 2, ...) of chunk d within ranked list i.',
            },
            {
              symbol: 'k',
              meaning: 'Rank smoothing constant (default k = 60 in LlamaIndex and Cormack et al. 2009) preventing rank #0 from dominating adjacent ranks.',
            },
          ],
          workedExample:
            'Suppose chunk A ranks 2nd (0-based r=1) in BM25 and 3rd (0-based r=2) in dense vector search with k=60: RRF_score(A) = 1/(60+1) + 1/(60+2) = 0.01639 + 0.01613 = 0.03252. Meanwhile, chunk B ranks 1st (r=0) in dense search only and misses BM25: RRF_score(B) = 1/(60+0) = 0.01667. Consensus chunk A wins (0.0325 vs. 0.0167).',
        },
      ],
      keyTakeaways: [
        'Setting num_queries=1 in QueryFusionRetriever runs pure deterministic dense+sparse fusion without extra LLM query-rewriting calls; raising num_queries>1 enables RAG-Fusion paraphrasing.',
        'Unlike cross-encoders (SentenceTransformerRerank) that score each passage independently, LLMRerank is a listwise reranker that evaluates a batch of up to 10 passages together on a 1–10 scale.',
        'Graph-based retrieval (Knowledge Graph traversal over issuers, subsidiaries, and covenants) complements hybrid search when questions trace multi-entity relationship exposure.',
      ],
      commonPitfalls: [
        'Averaging raw BM25 and cosine similarity scores directly without RRF lets unbounded lexical scores overwhelm semantic similarity.',
        'Applying LLMRerank across hundreds of unpruned corpus chunks instead of a narrow top-k candidate pool explodes token cost and latency.',
      ],
      figures: [
        {
          file: 'B32414_10_12.png',
          originalLabel: 'Figure 10.12 – Hybrid retrieval followed by reranking.',
          bierutTitle: 'Combine Dense and Sparse Fusion for Recall with Post-Retrieval Reranking for Precision',
          editorialAnalysis:
            'Shows the two-stage retrieval funnel where parallel dense (vector) and sparse (BM25) retrievers merge into a broad candidate pool via RRF before a reranker re-scores and trims the set to the highest-precision passages for the LLM.',
          keyTakeaways: [
            'Decoupling recall expansion (hybrid fusion) from precision filtering (reranking) maximizes the probability that exact financial figures reach the generator without context bloat.',
          ],
        },
        {
          file: 'B32414_10_18.png',
          originalLabel: 'Figure 10.18 – How LLMRerank re-scores retrieved passages.',
          bierutTitle: 'Score Candidate Chunks Listwise on a 1–10 Scale Before Global Top-N Truncation',
          editorialAnalysis:
            'Traces the four internal steps of LlamaIndex LLMRerank: batching candidate nodes by choice_batch_size (10), prompting the LLM to emit 1–10 relevance scores for relevant docs, parsing scores back onto nodes, and sorting globally to keep top_n passages.',
          keyTakeaways: [
            'Listwise LLM reranking compares candidate passages against each other in one prompt, discarding irrelevant chunks completely before answer synthesis.',
          ],
        },
      ],
    },
    {
      id: 'baaf-ch10-sec3',
      sectionNumber: '10.3',
      title: 'The RAG Evaluation Triad & Lab Benchmark Synthesis',
      subtitle: 'Diagnosing retrieval vs. generation failures with Faithfulness, Answer Relevancy, and Context Relevancy',
      coreMechanism:
        'In regulated finance, a fluent answer that invents a figure or cites an irrelevant filing is a compliance hazard. The **RAG Triad** evaluates three orthogonal links via LLM-as-judge evaluators (`FaithfulnessEvaluator`, `AnswerRelevancyEvaluator`, `ContextRelevancyEvaluator`, or RAGAS/DeepEval/TruLens). **Faithfulness** (groundedness) splits the answer into factual claims and verifies each against retrieved context, returning a binary `.passing` verdict where finance requires 100% support. **Answer Relevancy** scores whether answer statements address the user query (`.score` in $[0, 1]$). **Context Relevancy** scores what share of retrieved sentences are useful for the query (`.score` in $[0, 1]$).\n\nEvaluating all three metrics isolates the failure stage: low Faithfulness exposes *generator hallucination*, low Context Relevancy exposes *retriever noise*, and low Answer Relevancy exposes *evasive synthesis*. Reproducible evaluation requires pinning the judge model, retrieval snapshot, and `temperature=0`, while testing stability across paraphrased prompts.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Decompose & Audit Claim Faithfulness',
          detail:
            'Run FaithfulnessEvaluator on the Response object to split the answer into atomic claims and verify every numerical value and statement against source_nodes (.passing must be True).',
        },
        {
          step: '2',
          title: 'Score Answer Relevancy & Context Relevancy (0 to 1)',
          detail:
            'Run AnswerRelevancyEvaluator (answer statements vs. query) and ContextRelevancyEvaluator (retrieved chunk sentences vs. query) against configurable score thresholds.',
        },
        {
          step: '3',
          title: 'Diagnose Failure Stage & Verify Judge Reproducibility',
          detail:
            'Pin judge model and corpus snapshots, run repeated temperature=0 passes plus paraphrased query checks, and calibrate LLM judges against a human-labeled golden sample.',
        },
      ],
      keyTakeaways: [
        'High Faithfulness with low Context Relevancy proves the LLM extracted a grounded answer despite noisy retrieval, signaling that the retriever—not the generator—needs tuning.',
        'Across the 10-step lab benchmark on small 3-document corpora, Naive RAG only succeeded because top_k=3 retrieved the entire corpus, whereas on realistic corpora only Decomposition and Self-Correcting Agents guarantee multi-source coverage and clean rule application.',
        'Retrieval improvements (Steps 7–9: Hybrid + Rerank) and reasoning architectures (Steps 4–6: Router, Decomposition, Agent) are orthogonal and should be combined by exposing hybrid-reranked query engines as agent tools.',
      ],
      commonPitfalls: [
        'Interpreting a 0.033 RRF score tie across three documents on a tiny lab corpus as a retriever bug rather than recognizing the mathematical consequence of 1/(60+0) + 1/(60+0) when each doc tops its list.',
        'Using non-deterministic agentic RAG loops to replace deterministic pre-trade compliance engines rather than using them as decision-support research layers.',
      ],
      figures: [
        {
          file: 'B32414_10_13.png',
          originalLabel: 'Figure 10.13 – Evaluating a retrieval-augmented answer with the three evaluation metrics...',
          bierutTitle: 'Triangulate RAG Quality Across Context, Question, and Generated Response',
          editorialAnalysis:
            'Maps the RAG Evaluation Triad across the three core artifacts—User Question, Retrieved Context, and Generated Answer—showing how Context Relevancy audits retrieval, Faithfulness audits grounding, and Answer Relevancy audits task completion.',
          keyTakeaways: [
            'No single metric suffices: a response can be 100% faithful to retrieved chunks while completely failing to answer the analyst’s question.',
          ],
        },
        {
          file: 'B32414_10_20.png',
          originalLabel: 'Figure 10.20 – Comparison of the retrieval patterns on the same cross-source question.',
          bierutTitle: 'Benchmark Retrieval and Reasoning Reliability Across All Six Lab Configurations',
          editorialAnalysis:
            'Side-by-side empirical comparison on the shared cross-source liquidity question ("Does Acme’s Q3 quick ratio satisfy the firm’s risk policy?"), contrasting chunk scores, LLM reasoning clarity, and policy-rule accuracy from Step 3 Naive RAG through Step 9 Hybrid + Reranking.',
          keyTakeaways: [
            'While every pattern retrieved the 1.18 Q3 figure and 1.00 policy threshold, only Sub-Question Decomposition and the Self-Correcting Agent avoided cross-rule reasoning contamination.',
          ],
        },
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Agentic RAG Pattern & Retrieval Enhancement Trade-Off Matrix',
      description:
        'Comparing LlamaIndex RAG architectures across LLM call overhead, multi-source capability, adaptive self-correction, and primary failure modes.',
      headers: [
        'RAG Pattern / Stage',
        'LLM & Retrieval Call Scaling',
        'Multi-Source Handling',
        'Adaptivity & Self-Check',
        'Primary Failure Mode in Finance',
      ],
      rows: [
        [
          'Naive RAG (Blended Index, Step 3)',
          '1 retrieval + 1 LLM generation call',
          'Poor at scale (top-k misses scattered facts)',
          'None (fixed single pass)',
          'Source/period confusion & unflagged missing metrics',
        ],
        [
          'RouterQueryEngine (LLMSingleSelector, Step 4)',
          '1 selector LLM call + 1 retrieval + 1 generation call',
          'Single-source (or multi-selector without isolation)',
          'None (routes once upfront)',
          'Cross-rule contamination & out-of-scope forced routing',
        ],
        [
          'SubQuestionQueryEngine (Decomposition, Step 5)',
          '1 question-gen call + N parallel tool calls + 1 synthesis call (N+2)',
          'Strong for independent multi-source comparisons',
          'None (sub-questions fixed before retrieval)',
          'Cannot resolve dependent multi-hop chains where Q2 needs Answer 1',
        ],
        [
          'Self-Correcting FunctionAgent (ReAct Loop, Step 6)',
          '2k + 1 LLM calls across k iterative tool/reflection turns',
          'Strong for both independent and dependent multi-hop queries',
          'High (evaluates sufficiency & re-queries tools)',
          'Unbounded latency/cost or parametric guessing without max-retry guardrails',
        ],
        [
          'Hybrid RRF + LLMRerank (Steps 7–9)',
          'Dense + BM25 RRF fusion + 1 LLM batch rerank call + 1 generation call',
          'High recall + precision over candidate pool',
          'None on its own (must wrap inside Decomposition/Agent)',
          'Delivers 9/10 evidence but still vulnerable to single-pass synthesis errors',
        ],
      ],
      verdictRule:
        'Use RouterQueryEngine with per-document indexes for single-source lookups; use SubQuestionQueryEngine when queries compare independent metrics across known sources; and wrap Hybrid RRF + Reranked query engines as tools inside a Self-Correcting FunctionAgent whenever compliance checks require iterative sufficiency verification and dependent multi-hop reasoning.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'baaf-ch10-scen1',
      title: 'Eliminating Policy Rule Contamination on Buy-Side Pre-Trade Liquidity Checks',
      roleAndContext:
        'Quantitative Research Engineer at an asset manager building an internal compliance assistant over SEC Form 10-Ks, quarterly earnings transcripts, and Birchwood Risk Policy documents.',
      symptomOrFailure:
        'When analysts ask whether an issuer’s Q3 quick ratio (1.18) satisfies the firm’s risk policy (minimum 1.00), the multi-source Router retrieves both documents but hallucinates that a quick ratio between 1.00 and 1.50 requires a Risk Committee exception (a rule that actually applies only to the current ratio) and fails to check the audited 10-K as required by policy sourcing rules.',
      naiveFixAndWhyItFails:
        'Increasing similarity_top_k from 3 to 10 on the blended or routed index injects even more adjacent covenant clauses (such as the 1.25 credit-facility current-ratio covenant), worsening cross-rule confusion during single-pass synthesis.',
      firstPrinciplesSolution:
        'Expose isolated per-document indexes (annual_report_10k, q3_earnings_call, firm_risk_policy) with sharp tool descriptions to a FunctionAgent governed by a compliance system prompt that mandates verifying both policy sourcing rules and issuer figures across multiple tool calls before concluding.',
      measurableOutcome:
        'Correctly identifies the FY2024 10-K quick ratio (1.23) as the controlling audited figure alongside Q3 (1.18), cleanly separates the 1.25 current-ratio covenant from the 1.00 quick-ratio floor, and achieves 100% Faithfulness.',
    },
    {
      id: 'baaf-ch10-scen2',
      title: 'Fixing Missed Exact Accounting Terms and Noisy Context in 10-K Retrieval',
      roleAndContext:
        'Financial AI Platform Lead indexing 5,000+ corporate 10-K and 10-Q filings for equity analysts querying specific accounting ratios, note numbers, and margin drivers.',
      symptomOrFailure:
        'Pure dense vector retrieval (`text-embedding-3-small`) paraphrases away exact lexical queries like "quick ratio" or specific covenant identifiers, while raising `similarity_top_k=15` floods the generator context with tangentially related footnote tables, dropping `ContextRelevancyEvaluator` scores below 0.35.',
      naiveFixAndWhyItFails:
        'Switching solely to BM25 keyword search catches exact "quick ratio" strings but misses filings that report the identical metric under "acid-test ratio" or "cash and marketable securities to current liabilities."',
      firstPrinciplesSolution:
        'Implement a two-stage recall-then-precision pipeline using `QueryFusionRetriever` (`mode="reciprocal_rerank"`, `k=60`, `num_queries=1`) over shared dense and `BM25Retriever` docstores, followed by a listwise `LLMRerank(top_n=3)` node postprocessor.',
      measurableOutcome:
        'Captures both exact lexical terms and semantic paraphrases via RRF consensus while pruning candidate chunks to the top 3 (scoring 9/10 relevance), lifting Context Relevancy above 0.85 without sacrificing Faithfulness.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'baaf-ch10-q1',
        scenarioPrompt:
          'In a hybrid retrieval pipeline using Reciprocal Rank Fusion (`mode="reciprocal_rerank"`) with the standard smoothing constant $k = 60$, Document Chunk X is ranked 2nd (0-based position $r = 1$) by the BM25 sparse retriever and 3rd (0-based position $r = 2$) by the dense vector retriever. Document Chunk Y is ranked 1st (0-based position $r = 0$) by the dense vector retriever but does not appear in the BM25 top-k list. How do their RRF scores compare?',
        options: [
          {
            label: 'A',
            text: 'Chunk Y ranks higher because a 1st-place finish in dense semantic search receives an exponential bonus under RRF.',
            isCorrect: false,
            explanation:
              'RRF uses a flat smoothing constant k=60 precisely to prevent a single #1 rank from dominating consensus across lists.',
          },
          {
            label: 'B',
            text: 'Chunk X ranks higher (~0.0325 vs. ~0.0167) because appearing near the top of both ranked lists contributes two reciprocal terms that nearly double a single list’s top score.',
            isCorrect: true,
            explanation:
              'With k=60, Chunk X scores 1/61 + 1/62 ≈ 0.0164 + 0.0161 = 0.0325, whereas Chunk Y scores only 1/60 ≈ 0.0167; RRF rewards multi-retriever consensus.',
          },
          {
            label: 'C',
            text: 'Their scores cannot be computed without knowing the raw cosine similarity and raw BM25 token weights.',
            isCorrect: false,
            explanation:
              'RRF intentionally discards raw scores because cosine similarity [0,1] and unbounded BM25 scores are non-comparable.',
          },
          {
            label: 'D',
            text: 'Both chunks receive an identical fused score of 0.033.',
            isCorrect: false,
            explanation:
              'A score of 0.033 requires ranking 1st (r=0) in both lists (1/60 + 1/60 = 0.0333); Chunk Y only appears in one list.',
          },
        ],
      },
      {
        id: 'baaf-ch10-q2',
        scenarioPrompt:
          'You run LlamaIndex’s RAG Triad evaluators on a financial assistant response and observe: `FaithfulnessEvaluator.passing = True`, `AnswerRelevancyEvaluator.score = 0.95`, and `ContextRelevancyEvaluator.score = 0.25`. What is the exact diagnostic interpretation of this triad signature?',
        options: [
          {
            label: 'A',
            text: 'The LLM hallucinated financial figures that do not exist in the retrieved filings.',
            isCorrect: false,
            explanation:
              'Faithfulness is passing (True), which proves every claim in the answer is grounded in the retrieved context.',
          },
          {
            label: 'B',
            text: 'The answer directly and accurately addressed the user’s question using grounded facts, but the retriever pulled a large fraction of irrelevant noise alongside the needed sentence—indicating the retrieval/reranking layer needs tightening.',
            isCorrect: true,
            explanation:
              'High Faithfulness + High Answer Relevancy + Low Context Relevancy means generation succeeded despite noisy retrieved chunks; adding a reranker or lowering top-k will fix the retriever noise.',
          },
          {
            label: 'C',
            text: 'The retriever found concise, highly relevant chunks, but the generator gave an evasive, off-topic summary.',
            isCorrect: false,
            explanation:
              'That failure mode would produce high Context Relevancy and low Answer Relevancy.',
          },
          {
            label: 'D',
            text: 'The judge LLM temperature was set to 0, causing ContextRelevancyEvaluator to under-report scores.',
            isCorrect: false,
            explanation:
              'Setting temperature=0 ensures evaluation reproducibility and does not artificially depress context relevancy.',
          },
        ],
      },
      {
        id: 'baaf-ch10-q3',
        scenarioPrompt:
          'An analyst asks: "Who is the largest customer disclosed in Acme’s 2024 10-K, and what did that specific customer report as its own Q3 operating margin in its latest filing?" Why does LlamaIndex’s default `SubQuestionQueryEngine` struggle with this question compared to a `FunctionAgent`?',
        options: [
          {
            label: 'A',
            text: 'SubQuestionQueryEngine only works with OpenAI models and cannot run on Anthropic Claude.',
            isCorrect: false,
            explanation:
              'Passing question_gen=LLMQuestionGenerator.from_defaults() lets SubQuestionQueryEngine run on Claude or any configured Settings.llm.',
          },
          {
            label: 'B',
            text: 'SubQuestionQueryEngine generates all sub-questions in a single upfront pass before any retrieval occurs, so it cannot formulate the second sub-question when the customer’s name is unknown until the first sub-question is answered.',
            isCorrect: true,
            explanation:
              'Upfront parallel decomposition handles independent multi-source lookups well, but dependent multi-hop chains require iterative retrieval (Self-Ask, IRCoT, or a ReAct/FunctionAgent loop).',
          },
          {
            label: 'C',
            text: 'SubQuestionQueryEngine cannot query more than two QueryEngineTool instances in a single run.',
            isCorrect: false,
            explanation:
              'SubQuestionQueryEngine fans out across any number of configured tools (such as all three tools in Step 5).',
          },
          {
            label: 'D',
            text: 'SubQuestionQueryEngine strips all numerical values during its synthesis step.',
            isCorrect: false,
            explanation:
              'In Step 5, SubQuestionQueryEngine accurately synthesized both the 1.23 and 1.18 quick ratios.',
          },
        ],
      },
      {
        id: 'baaf-ch10-q4',
        scenarioPrompt:
          'How does LlamaIndex’s `LLMRerank` node postprocessor mechanics differ from a cross-encoder reranker such as `SentenceTransformerRerank`?',
        options: [
          {
            label: 'A',
            text: 'LLMRerank is a listwise reranker that groups retrieved nodes into batches (`choice_batch_size=10`), prompts the LLM to score relevant passages on a 1–10 scale as a group, and retains the global `top_n` nodes.',
            isCorrect: true,
            explanation:
              'Rather than scoring each passage in isolation like a cross-encoder, LLMRerank presents batches of candidates together in one prompt, parses 1–10 relevance scores, and keeps the top_n survivors.',
          },
          {
            label: 'B',
            text: 'LLMRerank rewrites the text of every retrieved chunk to summarize it before passing it to the generator.',
            isCorrect: false,
            explanation:
              'LLMRerank filters and reorders existing nodes by relevance score without mutating their underlying source text.',
          },
          {
            label: 'C',
            text: 'LLMRerank computes token-level BM25 inverse document frequency without making any LLM API calls.',
            isCorrect: false,
            explanation:
              'LLMRerank invokes the configured LLM once per candidate batch, adding latency and token cost in exchange for full semantic judgment.',
          },
          {
            label: 'D',
            text: 'LLMRerank runs before the vector database is queried to rewrite the user question into SQL.',
            isCorrect: false,
            explanation:
              'As a node postprocessor, LLMRerank executes strictly between candidate retrieval and final answer generation.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'baaf-ch10-fc1',
        category: 'architecture',
        front: 'What are the four core limitations of Naive RAG in financial applications?',
        back: 'Source confusion in blended indexes, inability to execute multi-step cross-document retrieval, zero sufficiency self-checking on incomplete context, and inability to call non-document tools (SQL, calculators, web).',
        mentalHook: 'Wrong filing, one-hop blinders, no self-check, no external tools.',
      },
      {
        id: 'baaf-ch10-fc2',
        category: 'optimization',
        front: 'Why does hybrid search use Reciprocal Rank Fusion (RRF) instead of averaging dense and BM25 scores?',
        back: 'Dense cosine similarities are bounded in [0, 1] while sparse BM25 lexical scores are unbounded; RRF normalizes both by summing 1 / (k + rank_i) with k = 60 based purely on rank order.',
        mentalHook: 'Incompatible score scales require rank-only consensus.',
      },
      {
        id: 'baaf-ch10-fc3',
        category: 'evaluation',
        front: 'What are the three metrics of the RAG Evaluation Triad and what link does each evaluate?',
        back: 'Faithfulness (Answer vs. Retrieved Context), Answer Relevancy (Answer vs. User Query), and Context Relevancy (Retrieved Context vs. User Query).',
        mentalHook: 'Faithfulness checks grounding; Answer Relevancy checks on-topic response; Context Relevancy checks retriever signal-to-noise.',
      },
      {
        id: 'baaf-ch10-fc4',
        category: 'architecture',
        front: 'How do LLM call counts scale across Naive RAG, Router, Sub-Question Decomposition (for N sub-questions), and Self-Correcting Agent (for k tool iterations)?',
        back: 'Naive RAG: 1 call; Router: 2 calls (+1 selector); Sub-Question Decomposition: N + 2 calls (1 generator + N sub-answers + 1 synthesis); Self-Correcting Agent: 2k + 1 calls (reasoning + tool loops).',
        mentalHook: '1 → 2 → N+2 → 2k+1 cost ladder.',
      },
      {
        id: 'baaf-ch10-fc5',
        category: 'security',
        front: 'What three production guardrails must govern a self-correcting RAG agent’s sufficiency loop?',
        back: 'Require every factual/numerical claim to carry a tool-generated filing citation, enforce a hard maximum cap on retrieval attempts, and fail safely by reporting unavailability rather than guessing.',
        mentalHook: 'Cite every number, cap the loop, abstain when missing.',
      },
      {
        id: 'baaf-ch10-fc6',
        category: 'data',
        front: 'In LlamaIndex, how do you inspect which tool a `RouterQueryEngine` selected or extract the retrieved chunks from a `FunctionAgent` tool call?',
        back: 'Read `response.metadata["selector_result"]` on the Router response, and stream `ToolCallResult` events from `agent.run()` to extract `event.tool_output.raw_output.source_nodes`.',
        mentalHook: 'selector_result for Routers; ToolCallResult.raw_output.source_nodes for Agents.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'baaf-ch10-feyn1',
        conceptTitle: 'Why Better Retrieval Does Not Guarantee Better Reasoning in Financial RAG',
        prompt:
          'Using the empirical results from Steps 4, 5, 6, and 9 of the Chapter 10 lab ("Does Acme’s Q3 quick ratio satisfy the firm’s risk policy?"), explain why retrieving the exact right chunks with 9/10 relevance is still not enough to guarantee sound financial compliance reasoning.',
        rubricChecklist: [
          'Identifies the two core facts required: Acme’s Q3 quick ratio (1.18 from the earnings call) and the minimum quick-ratio threshold (1.00 from the risk policy), plus the policy’s annual-report sourcing rule (1.23 in the FY24 10-K).',
          'Explains how the Step 4 Router retrieved the right sources but suffered cross-rule contamination during single-pass generation—confusing the current-ratio exception (1.00–1.50) with the quick-ratio threshold.',
          'Contrasts how Step 5 (SubQuestionQueryEngine) prevented cross-contamination by answering each source lookup in isolation before synthesis, and how Step 6 (FunctionAgent) used its reflection loop to apply the 10-K sourcing rule and separate the 1.25 current-ratio covenant.',
          'Concludes that retrieval enhancements (Step 9 Hybrid RRF + LLMRerank) and reasoning patterns (Decomposition/Agent) improve orthogonal stages and must be combined in production.',
        ],
        modelExplanation:
          'In the Chapter 10 benchmark, every pattern retrieved the Q3 quick ratio of 1.18 and the risk policy threshold of 1.00. Yet in Step 4, the Router dumped both retrieved contexts into a single generation pass and suffered cross-rule contamination: it confused the firm’s current-ratio rule (which requires a Risk Committee exception between 1.00 and 1.50) with the quick-ratio rule, inventing a non-existent compliance hurdle. Even Step 9 (Hybrid RRF + LLMRerank), which delivered the cleanest 9/10 prioritized chunks in the entire lab, still relies on a single post-retrieval generation pass and remains vulnerable to the same reasoning slip. By contrast, Step 5 (`SubQuestionQueryEngine`) answered each sub-question in isolation before synthesis so the policy rules never cross-contaminated, and Step 6 (`FunctionAgent`) used its iterative sufficiency check to notice that the policy required using the most recent annual report—pulling the audited FY24 10-K quick ratio (1.23) and explicitly distinguishing the 1.25 current-ratio covenant. High-recall/high-precision retrieval supplies the evidence, but only decomposed or reflective reasoning guarantees its correct application.',
      },
      {
        id: 'baaf-ch10-feyn2',
        conceptTitle: 'Reciprocal Rank Fusion (RRF) & The Recall-Then-Precision Pipeline',
        prompt:
          'Explain from first principles why financial documents require combining dense embeddings with BM25, why their raw scores cannot be averaged, how Reciprocal Rank Fusion ($k=60$) resolves this, and why listwise LLM reranking belongs immediately after fusion.',
        rubricChecklist: [
          'Contrasts dense vector search (captures semantic paraphrases like "acid-test ratio") with sparse BM25 lexical search (captures exact tickers, section IDs, and "quick ratio" via saturating TF, IDF, and length normalization).',
          'Explains the scale mismatch: cosine similarity is bounded in [0, 1] whereas BM25 scores are unbounded, so raw addition or averaging biases results toward BM25.',
          'Writes and explains the RRF formula Score(d) = Σ 1/(k + r_i(d)) with k=60, showing why a chunk ranked near the top of both lists (~0.033) beats a chunk ranked #1 in only one list (~0.0167).',
          'Describes how LLMRerank acts as a precision filter over the high-recall fused pool by batching candidates, scoring them 1–10 listwise, and keeping only top_n chunks.',
        ],
        modelExplanation:
          'Financial filings mix exact terminology ("quick ratio", covenant clauses, tickers) with varied phrasing ("acid-test ratio", "liquid assets to current liabilities"). Dense vector embeddings catch paraphrases but can blur exact terms, while BM25 matches exact tokens using saturating term frequency ($k_1$), inverse document frequency, and length normalization ($b$). However, you cannot average their raw scores because cosine similarity sits between 0 and 1 while BM25 is unbounded. Reciprocal Rank Fusion (RRF) solves this by ignoring raw scores and summing $\\sum 1/(k + r_i(d))$ over 0-based ranks with $k = 60$. Because $1/60 \\approx 0.0167$ and $1/61 \\approx 0.0164$, a chunk ranked near the top by both retrievers scores roughly $0.033$—almost double the $0.0167$ of a chunk ranked #1 in just one list. Once RRF maximizes recall across both modalities, `LLMRerank` restores precision by evaluating the candidate batch listwise on a 1–10 scale and forwarding only the top `top_n` chunks to Claude.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'baaf-ch10-node-router-engine',
        label: 'Source Routing (RouterQueryEngine)',
        category: 'architecture',
        chapterNumber: 10,
        importance: 2,
        definition:
          'Agentic selector (LLMSingleSelector / PydanticSingleSelector) matching a query to described per-document QueryEngineTools before retrieval.',
        formulaOrRule: 'Overhead: +1 Selector LLM call',
        whyItMatters:
          'Eliminates blended-index source confusion by isolating 10-Ks, earnings calls, and risk policies into separate indexes.',
      },
      {
        id: 'baaf-ch10-node-subquestion-decomp',
        label: 'Sub-Question Decomposition',
        category: 'architecture',
        chapterNumber: 10,
        importance: 1,
        definition:
          'SubQuestionQueryEngine + LLMQuestionGenerator splitting cross-document queries into parallel per-tool sub-questions followed by synthesis.',
        formulaOrRule: 'Cost: N + 2 LLM calls (parallel sub-queries)',
        whyItMatters:
          'Prevents cross-rule contamination across filings by resolving each factual lookup in isolation prior to final comparison.',
      },
      {
        id: 'baaf-ch10-node-self-correcting-agent',
        label: 'Self-Correcting Retrieval Loop',
        category: 'architecture',
        chapterNumber: 10,
        importance: 1,
        definition:
          'ReAct / FunctionAgent workflow that inspects retrieved tool evidence for sufficiency and re-queries additional sources before answering.',
        formulaOrRule: 'Guardrails: mandatory citations + max retries + safe abstention',
        whyItMatters:
          'Handles dependent multi-hop questions and discovers fine-print sourcing rules (e.g., requiring audited 10-K figures) dynamically at runtime.',
      },
      {
        id: 'baaf-ch10-node-hybrid-rrf',
        label: 'Hybrid Search & Reciprocal Rank Fusion (RRF)',
        category: 'optimization',
        chapterNumber: 10,
        importance: 1,
        definition:
          'QueryFusionRetriever combining dense semantic vectors and sparse BM25 lexical matches via scale-invariant reciprocal rank summation.',
        formulaOrRule: 'RRF(d) = Σ 1 / (60 + r_i(d))',
        whyItMatters:
          'Maximizes retrieval recall across both exact financial ratios/tickers and semantic paraphrases without score-scale distortion.',
      },
      {
        id: 'baaf-ch10-node-llm-rerank',
        label: 'Listwise LLM Reranking (LLMRerank)',
        category: 'optimization',
        chapterNumber: 10,
        importance: 2,
        definition:
          'Node postprocessor that batches candidate chunks (size 10), prompts the LLM to score relevance 1–10 as a group, and trims to global top_n.',
        whyItMatters:
          'Restores high context precision after hybrid recall expansion so only top-scoring passages reach the answer generator.',
      },
      {
        id: 'baaf-ch10-node-rag-triad',
        label: 'The RAG Evaluation Triad',
        category: 'evaluation',
        chapterNumber: 10,
        importance: 1,
        definition:
          'Three-part LLM-as-judge diagnostic framework measuring Faithfulness (grounding), Answer Relevancy, and Context Relevancy.',
        formulaOrRule: 'Regulated Finance Rule: Faithfulness .passing == True (100%)',
        whyItMatters:
          'Pinpoints whether pipeline failures originate in noisy retrieval (Context Relevancy) or ungrounded generation (Faithfulness).',
      },
    ],
    edges: [
      {
        source: 'baaf-ch10-node-router-engine',
        target: 'baaf-ch10-node-subquestion-decomp',
        relationship: 'prerequisite_for',
        explanation:
          'Per-document QueryEngineTools and disjoint descriptions built for routing are directly reused as the target tools for sub-question decomposition.',
      },
      {
        source: 'baaf-ch10-node-self-correcting-agent',
        target: 'baaf-ch10-node-subquestion-decomp',
        relationship: 'optimizes',
        explanation:
          'Self-correcting agents overcome upfront decomposition’s inability to adapt when initial retrievals are incomplete or multi-hop dependent.',
      },
      {
        source: 'baaf-ch10-node-hybrid-rrf',
        target: 'baaf-ch10-node-llm-rerank',
        relationship: 'prerequisite_for',
        explanation:
          'Hybrid RRF expands the candidate pool for broad recall, which LLMRerank then filters down to top_n for high precision.',
      },
      {
        source: 'baaf-ch10-node-llm-rerank',
        target: 'baaf-ch10-node-rag-triad',
        relationship: 'optimizes',
        explanation:
          'Pruning low-relevance candidate chunks via reranking directly increases the Context Relevancy score in the RAG Triad.',
      },
      {
        source: 'baaf-ch10-node-rag-triad',
        target: 'baaf-ch10-node-self-correcting-agent',
        relationship: 'evaluates',
        explanation:
          'The RAG Triad audits the agent’s final generated answer and retrieved source_nodes for 100% grounding and query alignment.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 6,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 10 sections (RAG foundations, naive RAG limits, Routing, Query Decomposition, Self-Correcting Retrieval, Hybrid BM25+Dense RRF with genuine formula, Listwise LLMRerank, RAG Triad Evaluation, and 10-step LlamaIndex/Claude lab benchmark) with 6 key extracted figures and zero forbidden AI tropes.',
  },
};
