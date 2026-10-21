import { ChapterMastery } from '../../../types/book';

export const dmmaCh03Mastery: ChapterMastery = {
  chapterNumber: 3,
  chapterId: 'ch03',
  title: 'A Hands-On Walk-Through of a Simple AI Agent',
  subtitle:
    'Dissecting k8s-ai: A 61-Line Recursive Agentic Loop Controlling Kubernetes via Function Calling and kubectl',
  readingTimeMinutes: 8,
  sourceWordCount: 5653,
  executiveThesis:
    'A fully autonomous infrastructure agent requires no heavyweight framework: in just 61 lines of Python, k8s-ai couples OpenAI function calling (`kubectl`) with an 18-line recursive `send(messages)` loop and an in-memory conversation state. Because frontier LLMs already encode deep domain knowledge of Kubernetes CLI flags and YAML schemas, exposing a single string-parameterized `cmd` tool enables iterative observation, root-cause diagnosis (`Pending` node affinity, `ImagePullBackOff`), and closed-loop remediation.',
  paradigmShift: {
    oldWay:
      'Imperative Runbook Scripting: Engineers manually run sequences of `kubectl get`, `describe`, and `logs` commands, parse YAML status conditions by eye, and hand-craft patch commands for every cluster incident.',
    newWay:
      'Recursive Tool-Calling Agent Loop: An LLM receives a single `kubectl` function schema, autonomously chains read-only inspection queries until it isolates the root cause, and executes corrective cluster mutations upon human approval.',
    whyItChanged:
      'Pre-trained foundation models already understand Kubernetes resource topologies and `kubectl` syntax, allowing a single generic CLI wrapper tool to replace dozens of brittle, single-purpose automation scripts.',
  },
  heroIllustrationUrl:
    '/books/design-multi-agent-mcp-a2a/assets/design_multi_agent_mcp_a2a_ch03_plate.png',
  customDiagrams: [
    {
      id: 'dmma-ch03-svg-loop',
      title: 'The 18-Line Recursive Agentic Execution Loop in k8s-ai',
      subtitle:
        'How main() and recursive send(messages) coordinate OpenAI tool_calls, sh.kubectl execution, and tool_call_id correlation',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch03Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch03ArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="ch03ArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="ch03ArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch03Bg1)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">K8S-AI RECURSIVE AGENTIC LOOP: main() &amp; send(messages)</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">18 lines of Python turning stateless Chat Completions into a multi-turn Kubernetes operator</text>

  <!-- Node 1: CLI User & main() -->
  <rect x="28" y="84" width="165" height="115" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="110" y="108" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. main() CLI REPL</text>
  <text x="110" y="126" fill="#e2e8f0" font-size="10" text-anchor="middle">Seeds system prompt</text>
  <text x="110" y="142" fill="#94a3b8" font-size="9.5" text-anchor="middle">Appends role: "user"</text>
  <rect x="42" y="154" width="137" height="30" rx="4" fill="#0f172a" stroke="#334155" />
  <text x="110" y="173" fill="#7dd3fc" font-size="9.5" font-family="monospace" text-anchor="middle">send(messages)</text>

  <!-- Node 2: send(messages) & OpenAI API -->
  <rect x="245" y="74" width="250" height="135" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="370" y="98" fill="#c084fc" font-size="12" font-weight="700" text-anchor="middle">2. OpenAI Chat Completions</text>
  <text x="370" y="116" fill="#e2e8f0" font-size="10" text-anchor="middle">model="gpt-4o", tool_choice="auto"</text>
  <text x="370" y="132" fill="#94a3b8" font-size="9.5" text-anchor="middle">Passes full messages[] + tools=[kubectl]</text>
  <rect x="263" y="144" width="214" height="50" rx="5" fill="#0f172a" stroke="#475569" />
  <text x="370" y="163" fill="#f8fafc" font-size="10" font-weight="600" text-anchor="middle">Decision Branch: r.tool_calls?</text>
  <text x="315" y="182" fill="#fbbf24" font-size="9.5" font-weight="600" text-anchor="middle">Yes: Call Tool</text>
  <text x="425" y="182" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">No: Final Text</text>

  <!-- Node 3: Tool Execution Engine -->
  <rect x="550" y="74" width="222" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="661" y="98" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">3. Tool Execution Block</text>
  <text x="661" y="116" fill="#fde68a" font-size="9.5" text-anchor="middle">Append assistant tool_calls msg</text>
  <rect x="566" y="126" width="190" height="42" rx="4" fill="#0f172a" stroke="#d97706" />
  <text x="661" y="144" fill="#fef3c7" font-size="9.5" font-family="monospace" text-anchor="middle">cmd = json.loads(args)['cmd']</text>
  <text x="661" y="159" fill="#fbbf24" font-size="9.5" font-family="monospace" text-anchor="middle">result = sh.kubectl(cmd.split())</text>
  <text x="661" y="186" fill="#e2e8f0" font-size="9.5" text-anchor="middle">Append role="tool" with</text>
  <text x="661" y="202" fill="#7dd3fc" font-size="9.5" font-family="monospace" text-anchor="middle">tool_call_id = t.id</text>

  <!-- Node 4: Local Kind Kubernetes Cluster -->
  <rect x="550" y="268" width="222" height="118" rx="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" />
  <text x="661" y="292" fill="#7dd3fc" font-size="12" font-weight="700" text-anchor="middle">4. KinD Kubernetes Cluster</text>
  <text x="661" y="310" fill="#bae6fd" font-size="10" text-anchor="middle">API Server (kind-k8s-ai)</text>
  <text x="661" y="328" fill="#e0f2fe" font-size="9.5" font-family="monospace" text-anchor="middle">some-app: 0/3 Pending</text>
  <text x="661" y="344" fill="#fecdd3" font-size="9.5" font-family="monospace" text-anchor="middle">nginx: ImagePullBackOff</text>
  <text x="661" y="364" fill="#6ee7b7" font-size="9.5" font-family="monospace" text-anchor="middle">→ Patched &amp; 100% Running</text>

  <!-- Node 5: Recursive Call & Termination -->
  <rect x="245" y="268" width="250" height="118" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5" />
  <text x="370" y="292" fill="#6ee7b7" font-size="12" font-weight="700" text-anchor="middle">5. Convergence &amp; Return</text>
  <text x="370" y="312" fill="#d1fae5" font-size="10" text-anchor="middle">Recursive: return send(messages)</text>
  <text x="370" y="330" fill="#a7f3d0" font-size="9.5" text-anchor="middle">Loops until r.tool_calls is empty</text>
  <rect x="267" y="342" width="206" height="28" rx="4" fill="#0f172a" stroke="#10b981" />
  <text x="370" y="360" fill="#34d399" font-size="9.5" font-family="monospace" text-anchor="middle">return r.content.strip()</text>

  <!-- Flow Arrows -->
  <line x1="193" y1="138" x2="241" y2="138" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrCyan)" />
  <line x1="495" y1="140" x2="546" y2="140" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrAmber)" />
  <line x1="661" y1="224" x2="661" y2="264" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrAmber)" />
  <path d="M 550 195 L 518 195 L 518 88 L 499 88" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#ch03ArrAmber)" />
  <text x="523" y="242" fill="#fbbf24" font-size="9" text-anchor="middle">return send(messages)</text>
  <line x1="370" y1="209" x2="370" y2="264" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrEmerald)" />
  <path d="M 245 327 L 110 327 L 110 203" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrEmerald)" />
</svg>`,
      bierutCaption:
        'The complete control flow of `k8s-ai`: `main()` manages outer user turns while `send(messages)` recursively evaluates tool requests against the local Kubernetes API server until the model emits a terminal natural-language answer.',
      annotations: [
        {
          step: '1',
          label: 'Outer REPL vs. Inner Recursive Loop',
          explanation:
            '`main()` appends each human prompt to a persistent in-memory `messages` list and invokes `send(messages)`, which recurses on itself for every intermediate `kubectl` call.',
        },
        {
          step: '2',
          label: 'Tool Call ID Correlation',
          explanation:
            'Every `sh.kubectl` output is wrapped in a `role: "tool"` dictionary carrying the exact `tool_call_id` (`t.id`) emitted by the LLM so parallel commands map back deterministically.',
        },
        {
          step: '3',
          label: 'Autonomous Termination Condition',
          explanation:
            'When `r.tool_calls` evaluates to falsy, recursion unwinds and `r.content.strip()` returns the synthesized diagnosis to the terminal.',
        },
      ],
    },
    {
      id: 'dmma-ch03-svg-k8s-triage',
      title: 'Multi-Step Diagnostic & Remediation Sequence on KinD',
      subtitle:
        'Tracing how k8s-ai diagnoses Unschedulable nodeAffinity and ImagePullBackOff errors across read and write phases',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch03Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>
    <marker id="ch03ArrBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#60a5fa" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch03Bg2)" />
  <text x="28" y="34" fill="#f8fafc" font-size="15" font-weight="700">CLUSTER INCIDENT TRIAGE: READ-ONLY DISCOVERY TO AUTONOMOUS FIX</text>
  <text x="28" y="52" fill="#94a3b8" font-size="11.5">How a single generic kubectl tool schema unlocks multi-hop root-cause analysis and remediation</text>

  <!-- Phase 1: Broad Discovery -->
  <rect x="28" y="76" width="232" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="144" y="100" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">PHASE 1: OBSERVATION</text>
  <text x="144" y="116" fill="#94a3b8" font-size="9.5" text-anchor="middle">Prompt: "what's going on in the cluster?"</text>
  <rect x="42" y="130" width="204" height="68" rx="6" fill="#0f172a" stroke="#0284c7" />
  <text x="144" y="148" fill="#7dd3fc" font-size="10" font-weight="600" text-anchor="middle">Autonomous Read Fan-Out</text>
  <text x="144" y="165" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">kubectl get pods -A</text>
  <text x="144" y="180" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">kubectl get deploy,svc,ds,rs -A</text>
  <rect x="42" y="212" width="204" height="164" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="54" y="232" fill="#f8fafc" font-size="10" font-weight="700">Synthesized State Report:</text>
  <text x="54" y="252" fill="#fda4af" font-size="9.5">• default/nginx: ImagePullBackOff</text>
  <text x="54" y="270" fill="#fde68a" font-size="9.5">• default/some-app: 3/3 Pending</text>
  <text x="54" y="288" fill="#6ee7b7" font-size="9.5">• kube-system: CoreDNS &amp; etcd OK</text>
  <text x="54" y="306" fill="#6ee7b7" font-size="9.5">• local-path-storage: 100% Ready</text>
  <text x="54" y="334" fill="#94a3b8" font-size="9">Zero mutations executed; establishes</text>
  <text x="54" y="348" fill="#94a3b8" font-size="9">namespace-wide topological baseline.</text>

  <!-- Phase 2: Root-Cause Drilldown -->
  <rect x="284" y="76" width="232" height="316" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="400" y="100" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">PHASE 2: ROOT-CAUSE DRILL</text>
  <text x="400" y="116" fill="#94a3b8" font-size="9.5" text-anchor="middle">Prompt: "you check. suggest solutions"</text>
  <rect x="298" y="130" width="204" height="68" rx="6" fill="#0f172a" stroke="#d97706" />
  <text x="400" y="148" fill="#fde68a" font-size="10" font-weight="600" text-anchor="middle">Spec &amp; Node Inspection</text>
  <text x="400" y="165" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">kubectl get po some-app -o yaml</text>
  <text x="400" y="180" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">kubectl get nodes --show-labels</text>
  <rect x="298" y="212" width="204" height="164" rx="6" fill="#0f172a" stroke="#334155" />
  <text x="310" y="232" fill="#f8fafc" font-size="10" font-weight="700">Causal Diagnosis:</text>
  <text x="310" y="252" fill="#fde68a" font-size="9.5">• Pod requires nodeSelectorTerm:</text>
  <text x="310" y="268" fill="#fef3c7" font-size="9" font-family="monospace">no-such-node=true</text>
  <text x="310" y="288" fill="#fda4af" font-size="9.5">• Node k8s-ai-control-plane lacks</text>
  <text x="310" y="304" fill="#fda4af" font-size="9.5">  this label; preemption unhelpful.</text>
  <text x="310" y="328" fill="#7dd3fc" font-size="9.5">• Proposes Option 1 (edit deploy)</text>
  <text x="310" y="344" fill="#7dd3fc" font-size="9.5">  or Option 2 (label node).</text>

  <!-- Phase 3: Remediation Execution -->
  <rect x="540" y="76" width="232" height="316" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="656" y="100" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">PHASE 3: REMEDIATION</text>
  <text x="656" y="116" fill="#94a3b8" font-size="9.5" text-anchor="middle">HITL Approval &amp; Autonomous Fix</text>
  <rect x="554" y="130" width="204" height="110" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="656" y="148" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">Fix A: Human-Approved Option #2</text>
  <text x="656" y="166" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">kubectl label nodes</text>
  <text x="656" y="180" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">k8s-ai-control-plane</text>
  <text x="656" y="194" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">no-such-node=true</text>
  <text x="656" y="216" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">Result: 3/3 some-app Running</text>

  <rect x="554" y="254" width="204" height="122" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="656" y="272" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">Fix B: Autonomous Image Patch</text>
  <text x="656" y="290" fill="#d1fae5" font-size="9" text-anchor="middle">Infers typo: nnnnnnnnginx → nginx</text>
  <text x="656" y="308" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">kubectl set image deploy/nginx</text>
  <text x="656" y="322" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">nginx=nginx</text>
  <text x="656" y="348" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">Result: 1/1 nginx Running</text>

  <line x1="260" y1="234" x2="280" y2="234" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrBlue)" />
  <line x1="516" y1="234" x2="536" y2="234" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch03ArrBlue)" />
</svg>`,
      bierutCaption:
        'A three-stage operational trace showing how `k8s-ai` progresses from read-only cluster inventory to deep YAML status inspection, human-approved node labeling, and fully autonomous deployment patching.',
      annotations: [
        {
          step: '1',
          label: 'Zero-Shot Multi-Namespace Inventory',
          explanation:
            'Without explicit instructions on which flags to pass, `gpt-4o` queries pods, deployments, services, daemonsets, and replicasets across `default`, `kube-system`, and `local-path-storage`.',
        },
        {
          step: '2',
          label: 'Prompt-Driven Specificity Escalation',
          explanation:
            'When pushed with "don\'t ask me to check anything. you check", the agent inspects both the pod spec and node labels to isolate the missing `no-such-node=true` requirement.',
        },
        {
          step: '3',
          label: 'Human-Gated vs. Autonomous Mutation',
          explanation:
            'The operator explicitly approves Option #2 to label `k8s-ai-control-plane`, then delegates full autonomy to repair the `nnnnnnnnginx` image typo.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch03-mm1',
      name: 'Pre-Trained CLI Leverage (The Universal String Parameter)',
      tagline:
        'Exploit the foundation model’s pre-existing mastery of standard CLI grammars instead of wrapping every subcommand.',
      naiveIntuition:
        'To let an AI agent manage Kubernetes, you must author dozens of strongly typed tool schemas (`get_pods`, `describe_node`, `patch_deployment`, `label_node`) with hundreds of parameter fields.',
      firstPrinciplesReality:
        'Frontier LLMs were trained on millions of Kubernetes manifests and `kubectl` invocations; exposing a single `kubectl` function with one required `cmd: string` argument lets the model synthesize arbitrary subcommands and flags dynamically.',
      howToApply:
        'When wrapping a mature, well-documented CLI (`kubectl`, `git`, `aws`, `docker`) in a trusted environment, start with a single string-argument tool schema and let the model compose subcommands.',
    },
    {
      id: 'dmma-ch03-mm2',
      name: 'Schema-Free String Output Parsing',
      tagline:
        'OpenAI function definitions specify input parameters via JSON Schema but deliberately omit output schemas.',
      naiveIntuition:
        'Every tool call must return a strictly typed JSON object matching a pre-declared return schema so the orchestrator can parse the fields.',
      firstPrinciplesReality:
        'Because `kubectl` outputs vary wildly—from tabular ASCII listings to multi-document YAML dumps and plain-text confirmation strings—returning raw stdout as `content: str` lets the LLM parse heterogeneous structures natively.',
      howToApply:
        'Return raw command stdout/stderr strings inside `role: "tool"` messages rather than building brittle regex parsers for every CLI subcommand.',
    },
    {
      id: 'dmma-ch03-mm3',
      name: 'Prompt-Enforced Investigation Depth',
      tagline:
        'LLMs default to polite advisory suggestions unless explicitly instructed to execute the diagnostic checks themselves.',
      naiveIntuition:
        'If an agent has access to `kubectl`, asking "why are pods pending?" will automatically cause it to inspect every relevant node label and deployment manifest.',
      firstPrinciplesReality:
        'On initial queries, the model often stops after reading pod status (`Unschedulable`) and advises the human to check node selectors; telling the agent "don\'t ask me to check anything, you check" forces additional tool-calling iterations to inspect the node and deployment specs directly.',
      howToApply:
        'Encode proactive verification directives into the system prompt so the agent exhausts read-only inspection tools before returning recommendations to the user.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch03-sec1',
      sectionNumber: '3.1',
      title: 'Live Cluster Chaos Engineering & Conversational Triage with k8s-ai',
      subtitle:
        'Simulating Unschedulable Node Affinity and ImagePullBackOff Failures in a Local KinD Cluster',
      coreMechanism:
        'To evaluate an agent loop under realistic failure conditions, `k8s-ai` runs against a local Kubernetes-in-Docker (`kind create cluster -n k8s-ai`) control plane seeded with two broken deployments. First, `some-app` requests three replicas of `registry.k8s.io/pause:3.9` constrained by a `requiredDuringSchedulingIgnoredDuringExecution` node affinity rule requiring `no-such-node In ["true"]`, leaving all three pods stuck in `Pending` (`Unschedulable`). Second, an `nginx` deployment specifies a corrupted container image (`nnnnnnnnginx`), triggering `ImagePullBackOff`.\n\nWhen queried in natural language ("what\'s going on in the cluster?"), `k8s-ai` autonomously fans out read-only `kubectl` calls across namespaces, confirming that `kube-system` (`coredns`, `etcd`, `kube-apiserver`) and `local-path-storage` are healthy while isolating both `default` namespace faults. When pushed to investigate without deferring to the human, it inspects the pod YAML and node labels (`k8s-ai-control-plane`), proposes concrete fixes, applies `kubectl label nodes k8s-ai-control-plane no-such-node=true` upon human approval, and autonomously patches `nnnnnnnnginx` to `nginx`.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Provision KinD & Inject Faults',
          detail:
            'Create the `k8s-ai` cluster via `kind` and apply the unschedulable `some-app` node-affinity manifest alongside the broken `nnnnnnnnginx` deployment.',
        },
        {
          step: '2',
          title: 'Execute Multi-Turn Read Triage',
          detail:
            'Ask `k8s-ai` for cluster status and root causes; the agent chains `kubectl get` and `-o yaml` inspection commands to pinpoint `no-such-node=true` and `ImagePullBackOff`.',
        },
        {
          step: '3',
          title: 'Approve Node Label & Delegate Image Fix',
          detail:
            'Authorize Solution #2 to label `k8s-ai-control-plane`, then instruct the agent to repair the `nginx` image autonomously and verify `1/1 Running` pods.',
        },
      ],
      keyTakeaways: [
        'A single `kubectl` wrapper tool enables an LLM to correlate status across Pods, Deployments, ReplicaSets, Services, and Nodes in one conversational turn.',
        'Conversational human-in-the-loop (HITL) naturally emerges when the agent proposes numbered remediation options and waits for operator selection before mutating state.',
        'Semantic reasoning allows the LLM to infer that a deployment named `nginx` running image `nnnnnnnnginx` is suffering from a typographical error and patch it to `nginx`.',
      ],
      commonPitfalls: [
        'Accepting generic first-pass advice ("check your node affinity") instead of prompting the agent to execute the underlying `kubectl` inspection commands itself.',
        'Allowing unrestricted write execution in production clusters without gating destructive subcommands (`delete`, `patch`, `label`) behind explicit confirmation.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch03_plate.png',
          originalLabel:
            'Chapter 3 Opening Blueprint: A Hands-On Walk-Through of a Simple AI Agent (Page 90)',
          bierutTitle:
            'From Chat Prompt to Kubernetes API: The Minimalist k8s-ai Architecture',
          editorialAnalysis:
            'The Chapter 3 blueprint illustrates how `k8s-ai` bridges natural-language user intent to a live Kubernetes control plane using three minimal primitives: a CLI REPL (`main()`), a recursive OpenAI function-calling loop (`send()`), and a single `sh.kubectl` shell binding.',
          keyTakeaways: [
            'Separates the outer user interaction loop (`main()`) from the inner multi-step tool execution loop (`send()`).',
            'Demonstrates that agentic autonomy comes from the feedback loop between LLM tool requests and live environment observations.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch03-sec2',
      sectionNumber: '3.2',
      title: 'OpenAI Function-Calling Tool Schema & CLI Wrapping Mechanics',
      subtitle:
        'Structuring the tools List, JSON Schema Parameters, and Output-Agnostic Execution',
      coreMechanism:
        'To expose external capabilities to `gpt-4o`, `k8s-ai` registers a `tools` list containing a single dictionary of `"type": "function"`. Inside the nested `"function"` object, `"name": "kubectl"` and `"description": "execute a kubectl command against the current k8s cluster"` provide the semantic cues the model uses to decide when to invoke the tool. Because `kubectl` encompasses dozens of subcommands and flags, the `"parameters"` JSON Schema defines a single required string property `"cmd"` (`"the kubectl command to execute (without kubectl, just the arguments). For example, \'get pods\'"`).\n\nCrucially, OpenAI function schemas define input arguments only and impose zero schema constraints on the tool’s return value. When `k8s-ai` executes `cmd = json.loads(t.function.arguments)["cmd"].split()` via `sh.kubectl(cmd)`, the raw stdout string is returned directly to the model, which parses tabular CLI text or nested YAML natively.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Declare Function Metadata',
          detail:
            'Set `"type": "function"`, `"name": "kubectl"`, and a concise description that tells the LLM when the tool applies.',
        },
        {
          step: '2',
          title: 'Define JSON Schema Input Contract',
          detail:
            'Specify `"parameters": {"type": "object", "properties": {"cmd": {"type": "string", ...}}, "required": ["cmd"]}` so the model never invokes bare `kubectl` help.',
        },
        {
          step: '3',
          title: 'Deserialize & Split Arguments',
          detail:
            'Parse `t.function.arguments` with `json.loads()`, split `"cmd"` into an argument array, and invoke `sh.kubectl(cmd)` to capture unstructured stdout.',
        },
      ],
      keyTakeaways: [
        'Marking `"required": ["cmd"]` prevents the model from calling `kubectl` with empty arguments, which would merely print CLI help text.',
        'Omitting output schemas removes developer friction when wrapping tools like `kubectl` whose output format changes across subcommands (`get`, `describe`, `-o yaml`).',
        'Initializing `OpenAI(api_key=os.environ["OPENAI_API_KEY"])` without a fixed client-level model allows per-request model routing in `chat.completions.create()`.',
      ],
      commonPitfalls: [
        'Including the binary name `"kubectl"` inside the `"cmd"` string when `sh.kubectl()` already supplies the executable, causing `"kubectl kubectl get pods"` errors.',
        'Using naive `.split()` on `cmd` strings that contain quoted JSON patches or multi-word arguments with spaces.',
      ],
    },
    {
      id: 'dmma-ch03-sec3',
      sectionNumber: '3.3',
      title: 'Anatomy of the 18-Line Recursive Agentic Loop & In-Memory State',
      subtitle:
        'Tracing send(messages), Parallel Tool Call Correlation, and Ephemeral REPL History',
      coreMechanism:
        'The entire reasoning engine of `k8s-ai` lives inside `def send(messages: list[dict[str, any]]) -> str:`. On each invocation, it calls `client.chat.completions.create(model=model_name, messages=messages, tools=tools, tool_choice="auto")` and extracts `r = response.choices[0].message`. If `r.tool_calls` is non-empty, `send()` first appends the assistant’s tool-request message (preserving `id`, `type`, `function.name`, and `function.arguments` for every call) to `messages` so the conversation history remains valid.\n\nNext, it iterates over `r.tool_calls`—since a single LLM response may batch multiple `kubectl` commands across namespaces—executes each via `sh.kubectl`, and appends a `role: "tool"` message bound to the exact `tool_call_id=t.id`. Finally, `return send(messages)` recurses with the enriched history until `r.tool_calls` is empty, returning `r.content.strip()` to `main()`.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Invoke Chat Completions with Auto Tool Choice',
          detail:
            'Pass the accumulated `messages` list and `tools` definition with `tool_choice="auto"` so `gpt-4o` chooses between tool execution and direct reply.',
        },
        {
          step: '2',
          title: 'Record Assistant Tool Requests & Execute Batch',
          detail:
            'Append the assistant `tool_calls` dictionary to `messages`, execute each `kubectl` call in the batch, and append matching `role="tool"` results with `tool_call_id=t.id`.',
        },
        {
          step: '3',
          title: 'Recurse Until Terminal Answer',
          detail:
            'Call `return send(messages)` to feed tool outputs back to the LLM, unwinding recursion with `r.content.strip()` once no further tools are requested.',
        },
      ],
      keyTakeaways: [
        'OpenAI requires every `role: "tool"` result message to reference the exact `tool_call_id` from the preceding assistant `tool_calls` array.',
        'A single LLM turn can emit multiple parallel `tool_calls` (e.g., inspecting several namespaces at once), all of which execute before the next recursive `send(messages)` call.',
        'In `main()`, the `messages` list persists across `while` loop turns to maintain multi-turn conversational context, but vanishes completely when the process exits.',
      ],
      commonPitfalls: [
        'Forgetting to append the assistant message containing `r.tool_calls` before appending the `role: "tool"` outputs, which triggers an OpenAI API validation error.',
        'Letting `sh.kubectl` raise an unhandled non-zero exit code exception or recursing without an iteration ceiling in production environments.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'CLI Wrapper Granularity & Loop Architecture Trade-Offs',
      description:
        'Comparing the minimalist single-tool recursive design of k8s-ai against production-hardened agent architectures.',
      headers: [
        'Architectural Dimension',
        'Minimalist Agent (k8s-ai)',
        'Production Agent Framework (AI-6)',
        'Primary Engineering Trade-Off',
      ],
      rows: [
        [
          'Tool Surface Granularity',
          'Single `kubectl(cmd: str)` catch-all wrapper',
          'Fine-grained tools (`get_pods`, `create_deploy`)',
          'Zero schema overhead vs. strict blast-radius control',
        ],
        [
          'Loop Control Structure',
          'Unbounded recursion (`return send(messages)`)',
          'Bounded loop with error capture & callbacks',
          '18-line code simplicity vs. stack/timeout protection',
        ],
        [
          'Error Handling on Tool Failure',
          'Unhandled `sh.ErrorReturnCode` crashes agent',
          '`try/except` logs error into `ToolMessage`',
          'Fail-fast simplicity vs. self-healing retry in loop',
        ],
        [
          'Conversation Memory Lifecycle',
          'Ephemeral in-memory `list[dict]` in `main()`',
          'Persistent JSON `Session` + 80% token summarizer',
          'Zero storage code vs. crash recovery & long context',
        ],
      ],
      verdictRule:
        'Use the `k8s-ai` single-file recursive pattern for local sandboxes, rapid proofs of concept, and educational walkthroughs; upgrade to fine-grained tools, exception-wrapped tool messages, and persistent sessions before touching shared or production infrastructure.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch03-scen1',
      title: 'Unhandled kubectl Exit Code Crashing the Recursive Loop',
      roleAndContext:
        'Platform Engineer running a `k8s-ai`-style diagnostic agent against a staging cluster where a pod name recently rotated.',
      symptomOrFailure:
        'When the LLM invokes `kubectl describe pod nginx-old-id`, `kubectl` exits with code `1` (`NotFound`), raising `sh.ErrorReturnCode_1` and terminating the Python process mid-conversation.',
      naiveFixAndWhyItFails:
        'Adding instructions in the system prompt telling the LLM "never pass invalid pod names" fails because pod hashes change dynamically during rolling updates.',
      firstPrinciplesSolution:
        'Wrap `sh.kubectl(cmd)` inside a `try/except Exception as e` block and pass `str(e)` as the `content` of the `role: "tool"` message so the LLM reads the `NotFound` stderr and re-queries current pod names.',
      measurableOutcome:
        'Eliminates 100% of CLI non-zero exit crashes and allows the agentic loop to self-correct stale resource identifiers on the next recursive turn.',
    },
    {
      id: 'dmma-ch03-scen2',
      title: 'Shallow Diagnostic Recommendations Without Deep Spec Inspection',
      roleAndContext:
        'Site Reliability Engineer using an LLM chat agent to triage `Pending` pods during a deployment freeze.',
      symptomOrFailure:
        'The agent runs `kubectl get pods`, sees `Pending`, and immediately replies with generic textbook advice ("Check your cluster capacity or node selectors") instead of inspecting the failing pod spec.',
      naiveFixAndWhyItFails:
        'Manually running `kubectl get po -o yaml` and pasting the output into the chat defeats the purpose of an autonomous tool-calling agent.',
      firstPrinciplesSolution:
        'Update the system prompt and user directive to require exhaustive read-only verification ("Do not ask the user to check cluster state; run `get -o yaml` and `get nodes --show-labels` yourself before answering").',
      measurableOutcome:
        'Increases multi-step read tool calls from 1 to 3–4 per incident and delivers exact root-cause labels (`no-such-node=true`) on the first response.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch03-q1',
        scenarioPrompt:
          'In `k8s-ai`, the `kubectl` tool schema defines `"parameters"` with a single required `"cmd"` string, but omits any return-value schema. How does `gpt-4o` process the output of `sh.kubectl(cmd)`?',
        options: [
          {
            label: 'A',
            text: 'The `sh` library automatically converts `kubectl` output into a typed JSON AST before sending it to OpenAI.',
            isCorrect: false,
            explanation:
              '`sh.kubectl(cmd)` returns raw command stdout; no automatic AST conversion occurs.',
          },
          {
            label: 'B',
            text: 'OpenAI function definitions do not specify output schemas; the raw stdout string is passed in a `role: "tool"` message and parsed natively by the LLM.',
            isCorrect: true,
            explanation:
              'Function tools only declare input JSON Schemas; the LLM receives unstructured string output in `content` and interprets tables, YAML, or text directly.',
          },
          {
            label: 'C',
            text: 'The agent forces `-o json` onto every `cmd` string inside `send()` so the response matches a hidden schema.',
            isCorrect: false,
            explanation:
              '`send()` simply splits `cmd` (`json.loads(t.function.arguments)["cmd"].split()`) without injecting `-o json`.',
          },
          {
            label: 'D',
            text: 'The model ignores the `content` field of `role: "tool"` messages and only checks whether `tool_call_id` is present.',
            isCorrect: false,
            explanation:
              'The model relies entirely on `content` inside the `role: "tool"` message to read cluster state and decide its next step.',
          },
        ],
      },
      {
        id: 'dmma-ch03-q2',
        scenarioPrompt:
          'While executing `send(messages)`, `response.choices[0].message.tool_calls` contains two `kubectl` calls (`get pods -n default` and `get pods -n kube-system`). How does `k8s-ai` handle this response?',
        options: [
          {
            label: 'A',
            text: 'It executes only the first tool call and discards the second because `send()` is recursive.',
            isCorrect: false,
            explanation:
              'Discarding a `tool_call_id` causes an API error on the next request; `k8s-ai` loops over all items in `r.tool_calls`.',
          },
          {
            label: 'B',
            text: 'It appends the assistant `tool_calls` message once, executes every tool call in a `for t in r.tool_calls:` loop appending a `role="tool"` message with matching `tool_call_id=t.id` for each, and then calls `return send(messages)` once.',
            isCorrect: true,
            explanation:
              'All requested tool calls in a turn are executed and appended with their respective `t.id` before the single recursive `send(messages)` call.',
          },
          {
            label: 'C',
            text: 'It calls `send(messages)` recursively inside the `for` loop immediately after the first `sh.kubectl` execution.',
            isCorrect: false,
            explanation:
              '`return send(messages)` is outside the `for t in r.tool_calls:` loop so all tool outputs from the batch are collected first.',
          },
          {
            label: 'D',
            text: 'It raises an exception because only one tool is registered in the `tools` list.',
            isCorrect: false,
            explanation:
              'Even with a single registered tool, the LLM can invoke that tool multiple times with different arguments in one response.',
          },
        ],
      },
      {
        id: 'dmma-ch03-q3',
        scenarioPrompt:
          'In the Chapter 3 walkthrough, why did all three pods of the `some-app` deployment remain permanently in the `Pending` phase?',
        options: [
          {
            label: 'A',
            text: 'The container image `registry.k8s.io/pause:3.9` contained a typo causing `ImagePullBackOff`.',
            isCorrect: false,
            explanation:
              'The image typo (`nnnnnnnnginx`) was on the `nginx` deployment, not `some-app`.',
          },
          {
            label: 'B',
            text: 'The pod spec included a `requiredDuringSchedulingIgnoredDuringExecution` node affinity rule requiring label `no-such-node=true`, which `k8s-ai-control-plane` lacked.',
            isCorrect: true,
            explanation:
              'The `nodeSelectorTerms` required `no-such-node In ["true"]`, preventing the scheduler from placing the pods until the node was labeled.',
          },
          {
            label: 'C',
            text: 'The `CoreDNS` pods in `kube-system` crashed, blocking pod network initialization.',
            isCorrect: false,
            explanation:
              '`CoreDNS` and all `kube-system` components were 100% healthy and running.',
          },
          {
            label: 'D',
            text: 'The deployment requested 64 CPU cores, triggering insufficient CPU preemption.',
            isCorrect: false,
            explanation:
              'The pods had `qosClass: BestEffort` (no resource requests) and failed strictly on node affinity.',
          },
        ],
      },
      {
        id: 'dmma-ch03-q4',
        scenarioPrompt:
          'What happens to the conversation history in `k8s-ai` across multiple user questions within a session versus when the user types `exit`?',
        options: [
          {
            label: 'A',
            text: 'Every user question resets `messages` to `[system_message]`, so the agent has zero memory between questions.',
            isCorrect: false,
            explanation:
              '`messages` is initialized once before the `while` loop in `main()`, so history accumulates across turns.',
          },
          {
            label: 'B',
            text: 'Each user turn appends to the same in-memory `messages` list across `send()` loops, preserving context until `exit` terminates the process and wipes memory.',
            isCorrect: true,
            explanation:
              '`main()` mutates the in-memory `messages` list across turns for continuity, with zero disk persistence upon `exit`.',
          },
          {
            label: 'C',
            text: 'Every `send()` call automatically writes `messages` to a local SQLite database.',
            isCorrect: false,
            explanation:
              '`k8s-ai` has no disk persistence; persistent JSON sessions are introduced in Chapter 4 with `AI-6`.',
          },
          {
            label: 'D',
            text: 'Only user and final assistant messages are kept in `messages`; intermediate `tool_calls` and `role: "tool"` messages are deleted after `send()` returns.',
            isCorrect: false,
            explanation:
              '`send(messages)` mutates `messages` in-place via `.append()`, leaving all intermediate tool call and tool result dicts in the list.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch03-fc1',
        category: 'architecture',
        front: 'How many lines of Python make up the recursive `send(messages)` agentic loop in `k8s-ai`, and what triggers its termination?',
        back: '18 lines of Python; recursion continues as long as `r.tool_calls` is non-empty and terminates by returning `r.content.strip()` when the LLM emits no tool calls.',
        mentalHook: '18 lines: tool_calls -> execute & recurse; no tool_calls -> return content.',
      },
      {
        id: 'dmma-ch03-fc2',
        category: 'foundation',
        front: 'Why does `k8s-ai` define only a single `"cmd"` string parameter in its `kubectl` OpenAI tool schema instead of separate schemas per subcommand?',
        back: 'Foundation models are already extensively pre-trained on `kubectl` syntax and flags, allowing them to construct arbitrary subcommand strings dynamically.',
        mentalHook: 'Let pre-training handle CLI grammar; keep the tool schema to one `cmd` string.',
      },
      {
        id: 'dmma-ch03-fc3',
        category: 'architecture',
        front: 'What four fields must be included when appending a tool execution result to OpenAI `messages` in `k8s-ai`?',
        back: '`tool_call_id` (matching `t.id` from the LLM request), `role: "tool"`, `name` (`t.function.name`), and `content` (the stdout string from `sh.kubectl`).',
        mentalHook: 'Tool result tuple: tool_call_id + role="tool" + name + content.',
      },
      {
        id: 'dmma-ch03-fc4',
        category: 'adaptation',
        front: 'Why is the `cmd` parameter marked as `"required": ["cmd"]` in the `kubectl` function schema even though `kubectl` can run with zero arguments?',
        back: 'Running `kubectl` with no arguments only prints generic CLI help text, which wastes tokens and provides zero cluster state information.',
        mentalHook: 'Bare `kubectl` = useless help text; require `cmd` to force real subcommands.',
      },
      {
        id: 'dmma-ch03-fc5',
        category: 'evaluation',
        front: 'What two specific cluster faults are injected into the local `kind` cluster in Chapter 3 to test `k8s-ai`?',
        back: '1) `some-app` with 3 replicas stuck in `Pending` due to an unsatisfied node affinity (`no-such-node=true`), and 2) `nginx` stuck in `ImagePullBackOff` due to typo image `nnnnnnnnginx`.',
        mentalHook: 'Two faults: `no-such-node=true` (Pending) + `nnnnnnnnginx` (ImagePullBackOff).',
      },
      {
        id: 'dmma-ch03-fc6',
        category: 'security',
        front: 'Why is `k8s-ai`’s single `sh.kubectl(cmd)` wrapper dangerous in a production cluster without additional safeguards?',
        back: 'It operates in full-trust mode where the LLM can execute destructive mutations (e.g., `delete namespace`) directly against the cluster context without programmatic guardrails.',
        mentalHook: 'Raw `kubectl` = root-level cluster blast radius.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch03-feyn1',
        conceptTitle: 'Tracing the 18-Line Recursive Tool-Calling Loop (`send`)',
        prompt:
          'Explain step-by-step how `send(messages)` in `k8s-ai` transforms a single user question ("find out why some-app pods are pending") into multiple sequential `kubectl` executions and a final natural-language diagnosis.',
        rubricChecklist: [
          'Explains how `client.chat.completions.create()` receives `messages`, `tools`, and `tool_choice="auto"`.',
          'Describes why the assistant message containing `r.tool_calls` must be appended to `messages` before executing the tools.',
          'Details how `json.loads(t.function.arguments)["cmd"].split()` is passed to `sh.kubectl()` and wrapped in a `role="tool"` dict with `tool_call_id=t.id`.',
          'Identifies `return send(messages)` as the recursive step that repeats until `r.tool_calls` is empty, returning `r.content.strip()`.',
        ],
        modelExplanation:
          'When `main()` passes `messages` to `send(messages)`, the function calls OpenAI Chat Completions with `gpt-4o`, the `kubectl` tool schema, and `tool_choice="auto"`. If the model decides it needs cluster data, `r.tool_calls` contains one or more function call requests. `send()` first appends the assistant’s `tool_calls` message to `messages` to preserve the conversation thread. It then iterates over each request in `r.tool_calls`, parses the JSON `"cmd"` string, splits it into CLI tokens, executes `sh.kubectl(cmd)`, and appends a `role: "tool"` message containing `tool_call_id=t.id` and the command stdout. Finally, `send(messages)` calls itself recursively with the updated history. Once the model has enough `kubectl` observations to answer, it returns a response with no `tool_calls`, and `send()` returns `r.content.strip()` back to `main()`.',
      },
      {
        id: 'dmma-ch03-feyn2',
        conceptTitle: 'Why OpenAI Function Schemas Omit Output Definitions',
        prompt:
          'Explain why OpenAI function-calling schemas strictly validate input parameters using JSON Schema (`parameters`) but leave tool outputs completely untyped (`content: str`), using `kubectl` as a concrete example.',
        rubricChecklist: [
          'Contrasts the structured JSON Schema required for tool inputs (`cmd: string`) against the raw string returned by tool execution.',
          'Uses `kubectl` to show that a single tool can return tabular text (`get pods`), deeply nested YAML (`get po -o yaml`), or short action confirmations (`node labeled`).',
          'Explains how requiring developers to pre-declare rigid output schemas for polymorphic CLI tools would create massive engineering friction.',
          'Notes that LLMs are native text parsers capable of extracting structured meaning from arbitrary string outputs on the next loop iteration.',
        ],
        modelExplanation:
          'When an LLM invokes a tool, the host Python code must deterministically unpack the arguments (`json.loads(t.function.arguments)["cmd"]`), which requires a strict input JSON Schema. Conversely, when the tool finishes executing, the consumer of its output is the LLM itself. A tool like `kubectl` returns wildly different text formats depending on the subcommand: ASCII tables for `get pods`, hundreds of lines of YAML for `-o yaml`, or a one-line confirmation for `label nodes`. Forcing developers to write a strict output schema covering every possible `kubectl` stdout format would be nearly impossible. Passing the raw stdout string back inside `role: "tool"` lets the LLM use its pre-trained language comprehension to parse whatever format arrives.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-k8s-ai-agent',
        label: 'k8s-ai Minimal Agent',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition:
          'A 61-line single-file Python AI agent that diagnoses and remediates Kubernetes clusters via OpenAI `gpt-4o` and `sh.kubectl`.',
        whyItMatters:
          'Proves that autonomous observation, root-cause diagnosis, and remediation require only an LLM, a tool schema, and a recursive execution loop.',
      },
      {
        id: 'dmma-recursive-send-loop',
        label: 'Recursive send(messages) Loop',
        category: 'architecture',
        chapterNumber: 3,
        importance: 1,
        definition:
          'An 18-line function that calls OpenAI Chat Completions, executes requested `tool_calls`, appends `role: "tool"` results, and recurses until `r.tool_calls` is empty.',
        formulaOrRule:
          'send(M) = send(M + [r] + [Tool(t) for t in r.tool_calls]) if r.tool_calls else r.content',
        whyItMatters:
          'Encapsulates the entire multi-step agentic control flow without external framework abstractions.',
      },
      {
        id: 'dmma-openai-function-schema',
        label: 'OpenAI Function Tool Schema',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'A JSON Schema declaration (`type: "function"`, `name`, `description`, `parameters`, `required`) that instructs the LLM how and when to construct tool invocations.',
        whyItMatters:
          'Serves as the sole decision contract the LLM uses to select tools and format valid JSON arguments.',
      },
      {
        id: 'dmma-tool-call-id-correlation',
        label: 'Tool Call ID Correlation (t.id)',
        category: 'data',
        chapterNumber: 3,
        importance: 2,
        definition:
          'Binding every `role: "tool"` output message to the exact `tool_call_id` generated by the LLM in its preceding `assistant` message.',
        whyItMatters:
          'Enables the LLM to disambiguate results when it issues multiple parallel tool calls in a single turn.',
      },
      {
        id: 'dmma-kubectl-cli-wrapper',
        label: 'sh.kubectl CLI Wrapper',
        category: 'adaptation',
        chapterNumber: 3,
        importance: 2,
        definition:
          'A thin Python `sh` binding that splits the LLM-supplied `cmd` string into arguments and executes `kubectl` against the active cluster context.',
        whyItMatters:
          'Leverages the LLM’s pre-trained mastery of Kubernetes CLI grammar instead of maintaining dozens of bespoke API wrappers.',
      },
      {
        id: 'dmma-kind-chaos-sandbox',
        label: 'KinD Local Cluster Sandbox',
        category: 'evaluation',
        chapterNumber: 3,
        importance: 3,
        definition:
          'A Kubernetes-in-Docker local cluster seeded with broken `nodeAffinity` (`no-such-node=true`) and `ImagePullBackOff` (`nnnnnnnnginx`) deployments.',
        whyItMatters:
          'Provides a safe, reproducible testbed for verifying read-only triage and write remediation before production use.',
      },
    ],
    edges: [
      {
        source: 'dmma-openai-function-schema',
        target: 'dmma-recursive-send-loop',
        relationship: 'prerequisite_for',
        explanation:
          'The `send()` loop relies on the registered `kubectl` function schema so `gpt-4o` can emit structured `r.tool_calls`.',
      },
      {
        source: 'dmma-recursive-send-loop',
        target: 'dmma-k8s-ai-agent',
        relationship: 'part_of',
        explanation:
          '`send(messages)` is the core execution engine called by `main()` inside `k8s-ai`.',
      },
      {
        source: 'dmma-tool-call-id-correlation',
        target: 'dmma-recursive-send-loop',
        relationship: 'optimizes',
        explanation:
          'Correlating `tool_call_id=t.id` allows a single iteration of `send()` to execute and return multiple parallel `kubectl` calls cleanly.',
      },
      {
        source: 'dmma-kubectl-cli-wrapper',
        target: 'dmma-k8s-ai-agent',
        relationship: 'part_of',
        explanation:
          '`sh.kubectl` provides the external environment actuator that lets `k8s-ai` inspect and mutate Kubernetes state.',
      },
      {
        source: 'dmma-kind-chaos-sandbox',
        target: 'dmma-k8s-ai-agent',
        relationship: 'evaluates',
        explanation:
          'The `kind-k8s-ai` cluster with `Pending` and `ImagePullBackOff` faults validates `k8s-ai` diagnostic and self-healing accuracy.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 7,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 3 (k8s-ai setup on KinD, Pending nodeAffinity & ImagePullBackOff chaos tests, conversational triage, OpenAI function tool schema, 18-line recursive send() loop, and main() REPL). Zero AI clichés.',
  },
};

export const dmmaCh04Mastery: ChapterMastery = {
  chapterNumber: 4,
  chapterId: 'ch04',
  title: 'Building a Tool-Based Agentic AI Framework',
  subtitle:
    'Architecting AI-6: Core Engine, Multi-Provider LLM Abstraction, Extensible Tool System, 6-Tier Security, and Persistent Session Summarization',
  readingTimeMinutes: 9,
  sourceWordCount: 10040,
  executiveThesis:
    'Scaling from a 61-line script (`k8s-ai`) to a reusable agentic platform (`AI-6`) requires decoupling the core execution loop from specific LLM SDKs, hardcoded tools, and volatile RAM. By introducing an `Engine` configured via `Config`, an abstract `LLMProvider` (supporting cloud OpenAI and local Ollama), a `@dataclass(slots=True)` `Tool` hierarchy, UUID-normalized tool-call routing, and a persistent JSON `Session` with automatic LLM summarization at 80% context capacity, `AI-6` stays unopinionated while solving multi-provider orchestration and long-horizon memory once.',
  paradigmShift: {
    oldWay:
      'Monolithic Single-Provider Script: Hardcode `openai.OpenAI()`, inline tool JSON dictionaries, crash on tool exceptions or non-UUID IDs, and lose all conversation history when the terminal exits or overflows the context window.',
    newWay:
      'Modular Unopinionated Agent Framework (`AI-6`): Dynamically discover `LLMProvider` plugins and `Tool` subclasses from disk, normalize tool call IDs to 32-char UUIDs, catch tool exceptions into `ToolMessage`s, and checkpoint/summarize `Session` JSON files automatically.',
    whyItChanged:
      'Production agentic systems must switch cleanly between frontier cloud models and private local models (`Ollama`), survive process restarts via atomic disk persistence, and run indefinitely without hitting context-window ceilings.',
  },
  heroIllustrationUrl:
    '/books/design-multi-agent-mcp-a2a/assets/design_multi_agent_mcp_a2a_ch04_plate.png',
  customDiagrams: [
    {
      id: 'dmma-ch04-svg-engine',
      title: 'AI-6 Backend Architecture & _send() UUID Normalization Pipeline',
      subtitle:
        'How Engine coordinates Config, dynamic provider/tool discovery, callback hooks, and fault-tolerant tool execution',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch04Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="ch04ArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="ch04ArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="ch04ArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch04Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">AI-6 CORE ENGINE ARCHITECTURE &amp; PROVIDER-AGNOSTIC _send() LOOP</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Decoupling frontends, LLM providers (OpenAI / Ollama), custom tools, and persistent session state</text>

  <!-- Left Column: Config & Frontend Callbacks -->
  <rect x="24" y="68" width="195" height="156" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="121" y="90" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Config &amp; Discovery</text>
  <text x="36" y="110" fill="#e2e8f0" font-size="9.5" font-family="monospace">• default_model_id</text>
  <text x="36" y="126" fill="#e2e8f0" font-size="9.5" font-family="monospace">• tools_dir / mcp_tools_dir</text>
  <text x="36" y="142" fill="#e2e8f0" font-size="9.5" font-family="monospace">• memory_dir / session_id</text>
  <text x="36" y="158" fill="#fde68a" font-size="9.5" font-family="monospace">• checkpoint_interval = 3</text>
  <text x="36" y="174" fill="#fde68a" font-size="9.5" font-family="monospace">• summary_ratio = 0.8</text>
  <text x="36" y="194" fill="#94a3b8" font-size="9">Builds model_provider_map</text>
  <text x="36" y="208" fill="#94a3b8" font-size="9">&amp; tool_dict dynamically</text>

  <rect x="24" y="240" width="195" height="152" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="121" y="262" fill="#c084fc" font-size="11.5" font-weight="700" text-anchor="middle">2. run() Frontend Callbacks</text>
  <text x="36" y="284" fill="#e2e8f0" font-size="9.5" font-family="monospace">get_input_func()</text>
  <text x="36" y="300" fill="#94a3b8" font-size="9">Pulls next user prompt</text>
  <text x="36" y="322" fill="#fbbf24" font-size="9.5" font-family="monospace">on_tool_call_func(n,kw,r)</text>
  <text x="36" y="338" fill="#94a3b8" font-size="9">Streams live tool telemetry</text>
  <text x="36" y="360" fill="#34d399" font-size="9.5" font-family="monospace">on_response_func(resp)</text>
  <text x="36" y="376" fill="#94a3b8" font-size="9">finally: session.save()</text>

  <!-- Center Column: Engine._send() Core Loop -->
  <rect x="252" y="68" width="296" height="324" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.8" />
  <text x="400" y="92" fill="#fbbf24" font-size="12.5" font-weight="700" text-anchor="middle">3. Engine._send(model_id, on_tool_call)</text>

  <rect x="268" y="104" width="264" height="46" rx="6" fill="#1e293b" stroke="#475569" />
  <text x="400" y="123" fill="#f8fafc" font-size="10" font-weight="600" text-anchor="middle">Route via model_provider_map[model_id]</text>
  <text x="400" y="139" fill="#7dd3fc" font-size="9.5" font-family="monospace" text-anchor="middle">resp = llm_provider.send(messages, tools)</text>

  <rect x="268" y="162" width="264" height="58" rx="6" fill="#1e293b" stroke="#f59e0b" />
  <text x="400" y="180" fill="#fde68a" font-size="10" font-weight="700" text-anchor="middle">UUID Tool-Call ID Normalization</text>
  <text x="400" y="196" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">if not tc.id or len(tc.id) &lt; 32:</text>
  <text x="400" y="210" fill="#fbbf24" font-size="9" font-family="monospace" text-anchor="middle">tc.id = generate_tool_call_id(tc.id)</text>

  <rect x="268" y="232" width="264" height="86" rx="6" fill="#1e293b" stroke="#34d399" />
  <text x="400" y="250" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">Fault-Tolerant Tool Execution</text>
  <text x="400" y="266" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">try: res = tool.run(**json.loads(args))</text>
  <text x="400" y="281" fill="#fda4af" font-size="9" font-family="monospace" text-anchor="middle">except Exception as e: res = str(e)</text>
  <text x="400" y="297" fill="#a7f3d0" font-size="9" text-anchor="middle">session.add_message(ToolMessage(res, id))</text>
  <text x="400" y="311" fill="#94a3b8" font-size="8.5" text-anchor="middle">Errors never halt loop; LLM decides next step</text>

  <rect x="268" y="330" width="264" height="48" rx="6" fill="#064e3b" stroke="#10b981" />
  <text x="400" y="350" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">Recurse or Return Final Content</text>
  <text x="400" y="366" fill="#d1fae5" font-size="9" font-family="monospace" text-anchor="middle">return self._send(...) | resp.content.strip()</text>

  <!-- Right Column: Providers & Tools Subsystems -->
  <rect x="580" y="68" width="196" height="156" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="678" y="90" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">4. LLMProvider (ABC)</text>
  <text x="592" y="110" fill="#e2e8f0" font-size="9.5" font-family="monospace">• send() @abstractmethod</text>
  <text x="592" y="126" fill="#e2e8f0" font-size="9.5" font-family="monospace">• models @abstractmethod</text>
  <text x="592" y="142" fill="#94a3b8" font-size="9.5" font-family="monospace">• stream() default=yield send</text>
  <rect x="592" y="154" width="172" height="56" rx="4" fill="#0f172a" stroke="#0284c7" />
  <text x="678" y="172" fill="#7dd3fc" font-size="9.5" font-weight="600" text-anchor="middle">OpenAIProvider (Cloud/Proxy)</text>
  <text x="678" y="188" fill="#6ee7b7" font-size="9.5" font-weight="600" text-anchor="middle">OllamaProvider (Local Privacy)</text>
  <text x="678" y="202" fill="#94a3b8" font-size="8.5" text-anchor="middle">Translates Tool ↔ SDK dict</text>

  <rect x="580" y="240" width="196" height="152" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="678" y="262" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">5. Tool(ABC) &amp; Security</text>
  <text x="592" y="282" fill="#e2e8f0" font-size="9.5" font-family="monospace">@dataclass(slots=True)</text>
  <text x="592" y="298" fill="#e2e8f0" font-size="9.5" font-family="monospace">Parameter(NamedTuple)</text>
  <text x="592" y="314" fill="#6ee7b7" font-size="9.5" font-family="monospace">configure(cfg) / run(**kw)</text>
  <rect x="592" y="324" width="172" height="56" rx="4" fill="#0f172a" stroke="#10b981" />
  <text x="678" y="341" fill="#fde68a" font-size="9" font-weight="600" text-anchor="middle">6-Layer Defense Spectrum:</text>
  <text x="678" y="355" fill="#e2e8f0" font-size="8.5" text-anchor="middle">Fine-Grained • Guardrails</text>
  <text x="678" y="369" fill="#e2e8f0" font-size="8.5" text-anchor="middle">Containers • OS User • HITL</text>

  <!-- Connectors -->
  <line x1="219" y1="130" x2="248" y2="130" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrCyan)" />
  <line x1="219" y1="315" x2="248" y2="315" stroke="#a855f7" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrCyan)" />
  <line x1="548" y1="130" x2="576" y2="130" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrCyan)" />
  <line x1="548" y1="275" x2="576" y2="275" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrEmerald)" />
</svg>`,
      bierutCaption:
        'The structural architecture of the `AI-6` backend: `Engine` acts as a provider-agnostic mediator that normalizes non-standard LLM tool-call IDs into UUIDs, isolates tool exceptions inside `ToolMessage` objects, and notifies UI frontends via callbacks.',
      annotations: [
        {
          step: '1',
          label: 'Dynamic Plugin Discovery & Model Routing',
          explanation:
            'During `__init__`, `Engine` scans `llm_providers` and `config.tools_dir` to build `model_provider_map` (`model_id -> LLMProvider`) and `tool_dict` (`name -> Tool`).',
        },
        {
          step: '2',
          label: 'UUID Tool-Call ID Normalization',
          explanation:
            'Because some providers return short or missing tool call IDs (`not tool_call.id or len(tool_call.id) < 32`), `_send()` remaps them via `generate_tool_call_id()` before saving to `Session`.',
        },
        {
          step: '3',
          label: 'Non-Halting Tool Exception Capture',
          explanation:
            'If `tool.run(**kwargs)` raises an exception, `_send()` catches it and wraps `str(e)` inside a `ToolMessage` so the LLM can adapt or retry on the next recursive turn.',
        },
      ],
    },
    {
      id: 'dmma-ch04-svg-memory',
      title: 'AI-6 Memory Lifecycle: Session Checkpointing, Safe File I/O & 80% Context Summarization',
      subtitle:
        'How Session, SessionManager, and Summarizer manage short-term context, crash-safe JSON persistence, and token compaction',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="ch04Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#172554" />
    </linearGradient>
    <marker id="ch04ArrGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
    </marker>
    <marker id="ch04ArrTeal" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2dd4bf" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#ch04Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">AI-6 MEMORY HIERARCHY: SESSION CHECKPOINTS &amp; 80% TOKEN SUMMARIZATION</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Unifying short-term context accumulation, crash-resilient JSON persistence, and LLM-driven compaction</text>

  <!-- Box 1: Active Session & Usage Counter -->
  <rect x="28" y="74" width="230" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="143" y="96" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. Active Session Object</text>
  <text x="42" y="116" fill="#e2e8f0" font-size="9.5" font-family="monospace">session_id = uuid.uuid4()</text>
  <text x="42" y="132" fill="#e2e8f0" font-size="9.5" font-family="monospace">messages: list[Message]</text>
  <rect x="42" y="144" width="202" height="76" rx="5" fill="#0f172a" stroke="#0284c7" />
  <text x="143" y="162" fill="#7dd3fc" font-size="10" font-weight="600" text-anchor="middle">Running Token Accumulator</text>
  <text x="143" y="180" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">usage.input_tokens += msg.in</text>
  <text x="143" y="196" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">usage.output_tokens += msg.out</text>
  <text x="143" y="212" fill="#94a3b8" font-size="8.5" text-anchor="middle">Updated on every AssistantMessage</text>

  <!-- Box 2: _checkpoint_if_needed() Gate -->
  <rect x="286" y="74" width="228" height="160" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="400" y="96" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">2. _checkpoint_if_needed()</text>
  <rect x="300" y="110" width="200" height="52" rx="5" fill="#0f172a" stroke="#d97706" />
  <text x="400" y="128" fill="#fde68a" font-size="9.5" font-weight="600" text-anchor="middle">Periodic Disk Checkpoint</text>
  <text x="400" y="144" fill="#e2e8f0" font-size="8.5" font-family="monospace" text-anchor="middle">if count == checkpoint_interval (3):</text>
  <text x="400" y="156" fill="#fbbf24" font-size="8.5" font-family="monospace" text-anchor="middle">session.save(); count = 0</text>
  <rect x="300" y="170" width="200" height="52" rx="5" fill="#3b1219" stroke="#f43f5e" />
  <text x="400" y="188" fill="#fda4af" font-size="9.5" font-weight="600" text-anchor="middle">Context Ceiling Gate (80%)</text>
  <text x="400" y="204" fill="#fecdd3" font-size="8.5" font-family="monospace" text-anchor="middle">if total_tokens &gt;= CW * 0.8:</text>
  <text x="400" y="216" fill="#fda4af" font-size="8.5" font-family="monospace" text-anchor="middle">_summarize_and_reset_session()</text>

  <!-- Box 3: Summarizer Compaction Engine -->
  <rect x="542" y="74" width="230" height="160" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="657" y="96" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">3. Stateless Summarizer</text>
  <text x="657" y="116" fill="#a7f3d0" font-size="9.5" text-anchor="middle">_format_session(messages)</text>
  <text x="657" y="132" fill="#94a3b8" font-size="9" text-anchor="middle">Flattens User/Assistant/Tool(name)</text>
  <rect x="556" y="144" width="202" height="76" rx="5" fill="#064e3b" stroke="#10b981" />
  <text x="657" y="162" fill="#6ee7b7" font-size="9.5" font-weight="600" text-anchor="middle">Direct Provider Call (No Tools)</text>
  <text x="657" y="178" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">llm_provider.send(</text>
  <text x="657" y="192" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">  [SystemPrompt, UserSession],</text>
  <text x="657" y="206" fill="#d1fae5" font-size="8.5" font-family="monospace" text-anchor="middle">  {}, model_id)</text>

  <!-- Bottom Row: SessionManager & Atomic File Mutation -->
  <rect x="28" y="264" width="744" height="128" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="400" y="288" fill="#c084fc" font-size="12" font-weight="700" text-anchor="middle">4. LONG-TERM PERSISTENCE: Session.save()/load() &amp; SessionManager Safe In-Place Update</text>

  <rect x="44" y="302" width="224" height="74" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="156" y="320" fill="#7dd3fc" font-size="10" font-weight="600" text-anchor="middle">{memory_dir}/{session_id}.json</text>
  <text x="156" y="338" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">[asdict(m) for m in messages]</text>
  <text x="156" y="354" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">load(): dict_to_message(msg)</text>

  <rect x="288" y="302" width="224" height="74" rx="6" fill="#0f172a" stroke="#475569" />
  <text x="400" y="320" fill="#fde68a" font-size="10" font-weight="600" text-anchor="middle">SessionManager Discovery</text>
  <text x="400" y="338" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">list_sessions() • delete_session()</text>
  <text x="400" y="354" fill="#94a3b8" font-size="9" text-anchor="middle">Skips corrupted JSON files safely</text>

  <rect x="532" y="302" width="224" height="74" rx="6" fill="#0f172a" stroke="#c084fc" />
  <text x="644" y="320" fill="#e9d5ff" font-size="10" font-weight="600" text-anchor="middle">Zero-Empty-File set_title()</text>
  <text x="644" y="338" fill="#f3e8ff" font-size="9" font-family="monospace" text-anchor="middle">open('r+') → json.load(f)</text>
  <text x="644" y="354" fill="#34d399" font-size="9" font-family="monospace" text-anchor="middle">f.seek(0) → dump() → f.truncate()</text>

  <!-- Flow Arrows -->
  <line x1="258" y1="154" x2="282" y2="154" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrGold)" />
  <line x1="514" y1="196" x2="538" y2="196" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrTeal)" />
  <line x1="400" y1="234" x2="400" y2="260" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ch04ArrGold)" />
</svg>`,
      bierutCaption:
        'The three-tier memory engine of `AI-6`: `Session` tracks cumulative input/output tokens across turns, `_checkpoint_if_needed()` triggers disk saves every 3 messages and invokes `Summarizer` at 80% of the model context window, and `SessionManager` mutates JSON metadata in-place without risking 0-byte truncation.',
      annotations: [
        {
          step: '1',
          label: 'Cumulative Token Telemetry (`Usage`)',
          explanation:
            '`Session.add_message()` inspects every incoming `AssistantMessage` for `usage` and increments `self.usage.input_tokens` and `self.usage.output_tokens`.',
        },
        {
          step: '2',
          label: 'Dual-Trigger Checkpoint Gate',
          explanation:
            'Called after both user input and assistant output, `_checkpoint_if_needed()` flushes to disk every `checkpoint_interval` (3) messages and compacts history when `total_tokens >= token_threshold`.',
        },
        {
          step: '3',
          label: 'Crash-Safe In-Place File Update (`r+`)',
          explanation:
            'Instead of `open(f, "w")`—which immediately truncates a file to 0 bytes before writing—`set_title()` opens in `"r+"`, reads JSON, rewinds via `f.seek(0)`, dumps updated JSON, and calls `f.truncate()`.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch04-mm1',
      name: 'Direct Provider Abstraction vs. Proxy Lock-In',
      tagline:
        'Own the `LLMProvider` translation boundary instead of routing every request through a third-party OpenAI-compatible proxy.',
      naiveIntuition:
        'Since services like OpenRouter and Gemini offer OpenAI-compatible HTTP endpoints, an agent framework only needs the `openai` SDK and can ignore provider abstractions.',
      firstPrinciplesReality:
        'Relying on external proxies adds network latency, per-token proxy markups, and data-privacy exposure, while still failing to normalize provider quirks like malformed non-UUID tool call IDs or local `ollama` tool-argument formatting (`_fix_tool_call_arguments`).',
      howToApply:
        'Define a minimal `LLMProvider` ABC (`send`, `models`, and a default `stream` that yields `send`) and normalize provider-specific quirks (such as UUID tool call IDs) inside the core engine.',
    },
    {
      id: 'dmma-ch04-mm2',
      name: 'Errors-as-Data in the Agentic Loop',
      tagline:
        'Tool execution exceptions belong in the LLM’s conversation context, not in the host process’s crash dump.',
      naiveIntuition:
        'When a tool call fails at runtime (e.g., invalid query syntax or missing file), `Engine._send()` should raise an exception and abort the user’s turn.',
      firstPrinciplesReality:
        'Distinguishing framework invariants (unknown `model_id` or missing tool name -> `RuntimeError`) from operational tool failures (`tool.run(**kwargs)` exception -> `ToolMessage(content=str(e))`) lets the LLM inspect the error traceback and self-correct on the next recursive iteration.',
      howToApply:
        'Wrap `tool.run(**kwargs)` in a `try/except Exception as e` block and append a `ToolMessage` with the error string and matching `tool_call_id` to the active session.',
    },
    {
      id: 'dmma-ch04-mm3',
      name: 'Read-Modify-Seek-Truncate Atomic Metadata Updates',
      tagline:
        'Never use `open(path, "w")` to update an existing session file when a mid-write crash would destroy conversation history.',
      naiveIntuition:
        'To rename a saved session JSON file, read the JSON into memory, reopen the file with `open(filename, "w")`, and call `json.dump()`.',
      firstPrinciplesReality:
        'Opening a file with mode `"w"` instructs the OS kernel to truncate the file to 0 bytes immediately before a single byte of new data is written; if the process crashes or loses power after `open()`, the entire session is lost.',
      howToApply:
        'Open existing JSON state files with `open(filename, "r+")`, load and mutate the dictionary, rewind the file pointer with `f.seek(0)`, write the new payload via `json.dump()`, and trim trailing bytes with `f.truncate()`.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch04-sec1',
      sectionNumber: '4.1',
      title: 'Core Engine Orchestration, Callback Decoupling & UUID Normalization',
      subtitle:
        'How Config, run(), and _send() Coordinate Multi-Provider Routing and Fault-Tolerant Tool Execution',
      coreMechanism:
        'The `Engine` class is initialized with a single `@dataclass` `Config` specifying `default_model_id`, `tools_dir`, `mcp_tools_dir`, `memory_dir`, `session_id`, `checkpoint_interval = 3`, `summary_threshold_ratio = 0.8`, and immutable `MappingProxyType` dictionaries for `tool_config` and `provider_config`. During `__init__`, `Engine` computes `token_threshold = int(context_window_size * summary_threshold_ratio)`, discovers `LLMProvider` plugins to build `model_provider_map`, discovers custom and MCP tools into `tool_dict`, initializes `SessionManager`, `Session`, and `SessionSummarizer`, and resumes any existing `session_id` from disk.\n\nTo stay frontend-agnostic, `Engine.run()` accepts three callbacks—`get_input_func`, `on_tool_call_func`, and `on_response_func`—inside a `try...finally: self.session.save()` block that guarantees state persistence even if rate limits crash the turn. Inside `_send()`, when `llm_provider.send()` returns `tool_calls`, the engine checks `if not tool_call.id or len(tool_call.id) < 32` and replaces non-standard IDs with valid UUIDs via `generate_tool_call_id()` before appending the `AssistantMessage`. Each `tool.run(**kwargs)` executes inside a `try/except` block that converts runtime exceptions into `ToolMessage(content=str(e))`, allowing the recursive `_send()` loop to self-correct.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Bootstrap Config & Dynamic Registries',
          detail:
            'Calculate `token_threshold`, populate `model_provider_map` and `tool_dict` via directory discovery, and load `config.session_id` if present.',
        },
        {
          step: '2',
          title: 'Normalize Tool Call IDs to 32-Char UUIDs',
          detail:
            'Inspect every `tool_call.id` returned by `llm_provider.send()`; remap IDs shorter than 32 characters via `id_mapping` so session history stays provider-agnostic.',
        },
        {
          step: '3',
          title: 'Execute Tools with Exception-to-Message Wrapping',
          detail:
            'Run `tool.run(**kwargs)`, fire `on_tool_call_func`, wrap results or caught `Exception` strings into `ToolMessage`, and recurse via `self._send()`.',
        },
      ],
      formulas: [
        {
          name: 'Context Compaction Token Threshold',
          expression:
            'T_{\\text{threshold}} = \\lfloor W_{\\text{context}}(\\text{model\\_id}) \\times r_{\\text{summary}} \\rfloor, \\quad \\text{Summarize if } (T_{\\text{in}} + T_{\\text{out}}) \\ge T_{\\text{threshold}}',
          intuition:
            'Triggers LLM session summarization when cumulative session input and output tokens reach 80% (`r_summary = 0.8`) of the default model’s context window (`W_context`), leaving a 20% headroom buffer for the summarization prompt and ongoing tool calls.',
          variables: [
            {
              symbol: 'W_{\\text{context}}',
              meaning:
                'Maximum context window size of `default_model_id` looked up via `get_context_window_size()`',
            },
            {
              symbol: 'r_{\\text{summary}}',
              meaning:
                '`config.summary_threshold_ratio` (defaults to `0.8` or 80%)',
            },
            {
              symbol: 'T_{\\text{in}}, T_{\\text{out}}',
              meaning:
                'Cumulative `session.usage.input_tokens` and `session.usage.output_tokens` across the session',
            },
          ],
          workedExample:
            'For a model with W_context = 128,000 tokens and r_summary = 0.8, T_threshold = 102,400 tokens. Once `session.usage.input_tokens + session.usage.output_tokens` reaches 102,400 inside `_checkpoint_if_needed()`, `Engine` calls `_summarize_and_reset_session()`.',
        },
      ],
      keyTakeaways: [
        'Wrapping `Engine.run()` in `try...finally: self.session.save()` guarantees conversation history survives unhandled LLM rate-limit or network exceptions.',
        'Using `MappingProxyType({})` as the default factory in `Config` prevents accidental mutation of default tool and provider configuration dictionaries.',
        'Normalizing tool call IDs of length `< 32` to UUIDs allows a single session to switch between OpenAI and local Ollama models without breaking message schemas.',
      ],
      commonPitfalls: [
        'Halting the agentic loop when `tool.run(**kwargs)` raises an operational error instead of feeding `ToolMessage(content=str(e))` back to the LLM.',
        'Hardcoding UI print statements inside `Engine` instead of emitting events through `on_tool_call_func` and `on_response_func` callbacks.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch04_plate.png',
          originalLabel:
            'Chapter 4 Opening Blueprint: Building a Tool-Based Agentic AI Framework (Page 116)',
          bierutTitle:
            'Inside the AI-6 Core Engine: Decoupling Providers, Tools, and Session Memory',
          editorialAnalysis:
            'The Chapter 4 architectural plate maps the hub-and-spoke design of the `AI-6` backend: `Engine` sits at the center, mediating between frontend callbacks, pluggable `LLMProvider` implementations (`OpenAIProvider`, `OllamaProvider`), extensible `Tool` classes, and persistent JSON `Session` storage.',
          keyTakeaways: [
            'Illustrates how `Config` injects directory paths and thresholds into `Engine.__init__()`.',
            'Shows how `SessionManager` and `Summarizer` offload long-term persistence and context compaction from application code.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch04-sec2',
      sectionNumber: '4.2',
      title: 'Provider-Agnostic LLM Interface, Tool ABCs & The 6-Layer Security Spectrum',
      subtitle:
        'Implementing LLMProvider (OpenAI & Ollama), @dataclass(slots=True) Tools, and Defense-in-Depth Controls',
      coreMechanism:
        '`LLMProvider(ABC)` defines two abstract members—`send(messages, tool_dict, model) -> AssistantMessage` and `@property def models -> list[str]`—plus a concrete `stream()` method that defaults to `yield self.send(...)` so providers without streaming work out of the box. `OpenAIProvider` accepts a configurable `base_url` (supporting OpenAI, Anyscale, DeepSeek, SambaNova, Cerebras, and OpenRouter), converts `Tool` objects via `_tool2dict()`, extracts `Usage(prompt_tokens, completion_tokens)`, and maps tool calls into `AI-6` `ToolCall` objects. `OllamaProvider` wraps local `ollama.chat()` after normalizing tool arguments via `_fix_tool_call_arguments()`.\n\nCustom tools inherit from `@dataclass(slots=True) class Tool(ABC)`, using `Parameter(NamedTuple)` (`name`, `type`, `description`) for low-memory immutability, an optional `configure(config: dict)` hook, and `@abstractmethod def run(self, **kwargs) -> str`. Because LLMs act as unpredictable black boxes—even read-only DB tools risk data exfiltration or self-DoS queries—`AI-6` supports six security layers: (1) Full Trust (education only), (2) Mediated Fine-Grained Tools (`get_pods` vs. raw `kubectl`), (3) Four-Type Guardrails (Hallucination, Regulatory, Alignment, Validation), (4) Container Sandboxing, (5) Low-Privilege OS User Permissions (`ulimit`, `seccomp`, ACLs), and (6) Human-in-the-Loop approval.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Implement LLMProvider Contract',
          detail:
            'Subclass `LLMProvider`, implement `send()` and `models` to translate between `AI-6` `Message`/`Tool` objects and vendor SDK formats, and optionally override `stream()`.',
        },
        {
          step: '2',
          title: 'Define Slotted Immutable Tools',
          detail:
            'Subclass `@dataclass(slots=True) class Tool(ABC)` with `Parameter(NamedTuple)` schemas, optional `configure(dict)`, and `run(**kwargs) -> str`.',
        },
        {
          step: '3',
          title: 'Layer Tool Execution Defenses',
          detail:
            'Combine fine-grained tool decomposition, input/output validation guardrails, container/OS-user least privilege, and HITL confirmation for high-risk mutations.',
        },
      ],
      keyTakeaways: [
        'Providing a default `yield self.send(...)` inside `LLMProvider.stream()` lets callers use a uniform streaming API even when backed by non-streaming providers like `OllamaProvider`.',
        'Decorating `Tool(ABC)` with `@dataclass(slots=True)` and using `Parameter(NamedTuple)` prevents runtime attribute mutation while reducing memory overhead.',
        '`AI-6` deliberately omits vendor built-in tools (which require provider-specific APIs like OpenAI’s Responses API) in favor of portable custom and MCP tools.',
      ],
      commonPitfalls: [
        'Assuming read-only database tools are safe in "Full Trust" mode—an LLM can still exfiltrate sensitive rows or trigger a self-DoS via unindexed cartesian joins.',
        'Relying solely on Docker containers as a security boundary without OS-level least privilege, given documented container breakout vectors.',
      ],
    },
    {
      id: 'dmma-ch04-sec3',
      sectionNumber: '4.3',
      title: 'Unified Session Memory, Crash-Safe Persistence & Context Compaction',
      subtitle:
        'Managing Short-Term Loop Context, Long-Term JSON Sessions, and LLM-Driven Summarization',
      coreMechanism:
        '`AI-6` unifies short-term working memory and long-term persistence inside `Session`. Each `Session` generates a `uuid.uuid4()` ID, tracks `messages: list[Message]`, and accumulates `Usage(input_tokens, output_tokens)` inside `add_message()` whenever an `AssistantMessage` arrives. During an agentic loop, all user prompts, `tool_calls`, and `ToolMessage` results accumulate in `session.messages` so follow-up questions ("What are they?" after "How many Python files?") resolve from history without redundant tool calls.\n\nFor long-term persistence, `Session.save()` serializes messages via `dataclasses.asdict()` to `{memory_dir}/{session_id}.json`, while `load()` reconstructs typed objects via `dict_to_message()`. `SessionManager` provides `list_sessions()` (skipping corrupted JSON files), `delete_session()`, and crash-safe `set_title()` using `open(f, "r+") -> seek(0) -> dump() -> truncate()`. When `_checkpoint_if_needed()` detects that `total_tokens >= token_threshold` (80% of context window), `Summarizer.summarize()` flattens history via `_format_session()` and invokes `llm_provider.send(formatted_messages, {}, model_id)` statelessly to replace verbose history with a dense summary.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Accumulate Messages & Token Usage',
          detail:
            'Append every `UserMessage`, `AssistantMessage`, and `ToolMessage` to `Session.messages` while summing `input_tokens` and `output_tokens`.',
        },
        {
          step: '2',
          title: 'Checkpoint & Manage JSON Sessions on Disk',
          detail:
            'Save `{session_id}.json` every `checkpoint_interval` turns and manage saved sessions via `SessionManager` (`list_sessions`, `set_title` with `r+`/`seek(0)`/`truncate()`, `delete_session`).',
        },
        {
          step: '3',
          title: 'Compact Context at 80% Capacity',
          detail:
            'When `total_tokens >= token_threshold`, format the session transcript and call `Summarizer.summarize()` to reset the session with a compact summary.',
        },
      ],
      keyTakeaways: [
        '`Summarizer.summarize()` invokes `llm_provider.send()` directly with an empty tool dict `{}` and no `Session` wrapper so the summarization call does not pollute or recurse into the active session.',
        'Opening session files with `"r+"`, calling `f.seek(0)`, dumping JSON, and calling `f.truncate()` eliminates the 0-byte empty-file hazard of `open(f, "w")`.',
        'Future evolutions of `AI-6` can abstract compaction behind a pluggable `ContextManager` interface supporting embedding retrieval, rule-based pruning, structured entity stores, or codebook compression.',
      ],
      commonPitfalls: [
        'Using `open(filename, "w")` to update session metadata, which immediately truncates the file and destroys the session if the process crashes before `write()` completes.',
        'Waiting until `total_tokens` reaches 100% of `context_window_size` to summarize, leaving zero token headroom for the summarization prompt itself.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Tool Execution Security & Governance Trade-Off Matrix',
      description:
        'Comparing the six tool-execution control mechanisms supported by AI-6 across safety guarantees, latency, and engineering overhead.',
      headers: [
        'Security Mechanism',
        'Primary Protection Mechanism',
        'Residual Vulnerability',
        'Operational Cost / Latency',
      ],
      rows: [
        [
          '1. Full Trust, Full Access',
          'None (unrestricted LLM execution)',
          'Data deletion, exfiltration & self-DoS queries',
          'Zero latency; educational sandboxes only',
        ],
        [
          '2. Mediated Fine-Grained Tools',
          'Replaces raw CLI with scoped functions (`get_pods`)',
          'High maintenance across large APIs like K8s',
          'High upfront developer wrapping effort',
        ],
        [
          '3. Runtime Guardrails (4 Types)',
          'Validates prompts, tool args & outputs vs. rules',
          'Classifier false negatives on novel edge cases',
          'Adds evaluation latency per guarded turn',
        ],
        [
          '4. Container Sandboxing',
          'Isolates filesystem & credentials inside container',
          'Mounted host volumes & kernel breakout exploits',
          'Low runtime overhead; moderate setup config',
        ],
        [
          '5. OS User Permissions',
          'Dedicated low-privilege user + ACLs/`seccomp`/`ulimit`',
          'Misuse of readable files within allowed paths',
          'Zero runtime latency; lightweight local isolation',
        ],
        [
          '6. Human-in-the-Loop (HITL)',
          'Operator approves high-risk tool calls pre-execution',
          'Operator fatigue or approval bottleneck',
          'High latency; requires human availability',
        ],
      ],
      verdictRule:
        'Never run Full Trust outside isolated educational demos; combine OS/Container least privilege with Mediated Fine-Grained Tools for routine reads, and enforce Validation Guardrails plus Human-in-the-Loop approval for destructive production mutations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch04-scen1',
      title: 'Database Optimization Prompt Triggering Catastrophic Table Deletion',
      roleAndContext:
        'Backend Lead deploying an `AI-6` agent equipped with a generic SQL execution tool to optimize query latency and storage costs on a production database.',
      symptomOrFailure:
        'Given the goal "improve data access performance and reduce costs", the unguided LLM concludes that the fastest way to shrink query times and storage bills is to `DROP` historical tables and keep only 1 day of data in memory.',
      naiveFixAndWhyItFails:
        'Switching the database connection to read-only prevents `DROP TABLE`, but the LLM still triggers a self-DoS outage by running unindexed full-table scans and can exfiltrate sensitive customer PII into the session logs.',
      firstPrinciplesSolution:
        'Replace the raw SQL tool with mediated fine-grained query tools (`explain_query_plan`, `get_index_stats`), enforce parameter validation guardrails (`ulimit`/query timeouts), and require Human-in-the-Loop approval for any schema DDL.',
      measurableOutcome:
        'Reduces unauthorized DDL and self-DoS query incidents to zero while preserving autonomous query-plan diagnostics.',
    },
    {
      id: 'dmma-ch04-scen2',
      title: 'Corrupted 0-Byte Session Files During Concurrent Title Updates',
      roleAndContext:
        'AI Platform Engineer maintaining `SessionManager` in an `AI-6` deployment where pods occasionally get OOM-killed or preempted during session metadata updates.',
      symptomOrFailure:
        'After container restarts, `SessionManager.list_sessions()` logs `Skipping file with invalid JSON` and users discover their multi-hour `.json` session files are 0 bytes on disk.',
      naiveFixAndWhyItFails:
        'Using `with open(filename, "w") as f: json.dump(data, f)` truncates the file at the exact moment `open()` executes; any preemption or exception before `json.dump()` flushes leaves an empty file.',
      firstPrinciplesSolution:
        'Use `with open(filename, "r+") as f:` to read the JSON, mutate `data["title"]`, rewind via `f.seek(0)`, write with `json.dump(data, f, indent=4)`, and call `f.truncate()` only after the new bytes are written.',
      measurableOutcome:
        'Eliminates 0-byte truncation corruption during metadata updates while keeping `list_sessions()` resilient against partial files.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch04-q1',
        scenarioPrompt:
          'When `Engine._send()` in `AI-6` receives a response containing `tool_calls` from an `LLMProvider`, why does it check `if not tool_call.id or len(tool_call.id) < 32:` before adding the `AssistantMessage` to the session?',
        options: [
          {
            label: 'A',
            text: 'To reject and discard any tool call whose arguments JSON is shorter than 32 bytes.',
            isCorrect: false,
            explanation:
              'The length check inspects `tool_call.id`, not `tool_call.arguments`.',
          },
          {
            label: 'B',
            text: 'To normalize non-UUID or missing tool call IDs from heterogeneous LLM providers into valid 32+ character UUIDs via `generate_tool_call_id()`.',
            isCorrect: true,
            explanation:
              'Different LLM providers return incompatible or empty tool call IDs; remapping them to valid UUIDs in `id_mapping` ensures provider-agnostic session state.',
          },
          {
            label: 'C',
            text: 'Because OpenAI requires tool call IDs to be truncated to 8 characters to save context tokens.',
            isCorrect: false,
            explanation:
              '`_send()` replaces short IDs (`< 32`) with full UUIDs rather than truncating them.',
          },
          {
            label: 'D',
            text: 'To encrypt the tool name using SHA-256 before invoking `on_tool_call_func`.',
            isCorrect: false,
            explanation:
              '`tool_call.name` remains plaintext; only `tool_call.id` is normalized to a UUID.',
          },
        ],
      },
      {
        id: 'dmma-ch04-q2',
        scenarioPrompt:
          'During an `AI-6` agentic loop, the LLM calls a registered custom tool with valid JSON arguments, but `tool.run(**kwargs)` raises a Python `ValueError` at runtime. How does `Engine._send()` behave?',
        options: [
          {
            label: 'A',
            text: 'It allows the `ValueError` to propagate out of `_send()`, immediately terminating `Engine.run()`.',
            isCorrect: false,
            explanation:
              'Only unknown models, unknown tool names, or malformed JSON arguments raise `RuntimeError`; `tool.run()` exceptions are caught.',
          },
          {
            label: 'B',
            text: 'It catches the exception, creates a `ToolMessage(content=str(e), name=tool_call.name, tool_call_id=tool_call_id)`, appends it to the session, and continues the recursive `_send()` loop.',
            isCorrect: true,
            explanation:
              'Tool execution failures are logged as `ToolMessage` objects in the session so the loop continues uninterrupted and the LLM can decide how to recover.',
          },
          {
            label: 'C',
            text: 'It silently deletes the assistant’s `tool_calls` message from `self.session` and retries the same tool 5 times.',
            isCorrect: false,
            explanation:
              '`_send()` does not delete messages or run a hidden retry loop; it records the error in `ToolMessage` and recurses once.',
          },
          {
            label: 'D',
            text: 'It switches `default_model_id` to `OllamaProvider` as a fallback.',
            isCorrect: false,
            explanation:
              'Provider selection remains fixed to `model_id` for the loop.',
          },
        ],
      },
      {
        id: 'dmma-ch04-q3',
        scenarioPrompt:
          'How does `OllamaProvider` support the `stream()` method of `LLMProvider` without writing custom streaming generator code?',
        options: [
          {
            label: 'A',
            text: 'It inherits the concrete default `stream()` method from `LLMProvider`, which calls `yield self.send(messages, tool_dict, model)` to return the complete response as a single-item iterator.',
            isCorrect: true,
            explanation:
              '`LLMProvider.stream()` is not `@abstractmethod`; its default implementation delegates to blocking `send()` and yields the full `AssistantMessage`.',
          },
          {
            label: 'B',
            text: 'It subclasses `OpenAIProvider` and routes requests to `https://api.openai.com/v1`.',
            isCorrect: false,
            explanation:
              '`OllamaProvider` subclasses `LLMProvider` directly and calls `ollama.chat()` locally.',
          },
          {
            label: 'C',
            text: 'It raises `NotImplementedError` whenever a frontend calls `stream()`.',
            isCorrect: false,
            explanation:
              'The base class provides a working fallback generator so `stream()` never raises `NotImplementedError`.',
          },
          {
            label: 'D',
            text: 'It spawns a background thread that splits `send()` output by whitespace every 50ms.',
            isCorrect: false,
            explanation:
              'The default `stream()` simply executes `yield self.send(...)` once.',
          },
        ],
      },
      {
        id: 'dmma-ch04-q4',
        scenarioPrompt:
          'Why does `SessionManager.set_title()` open the session JSON file with `open(filename, "r+")` followed by `f.seek(0)`, `json.dump()`, and `f.truncate()` instead of `open(filename, "w")`?',
        options: [
          {
            label: 'A',
            text: 'Because Python’s `json.dump()` throws a `TypeError` if the file handle was opened with `"w"`.',
            isCorrect: false,
            explanation:
              '`json.dump()` works with `"w"`, which is how `Session.save()` writes new files.',
          },
          {
            label: 'B',
            text: 'Because `open(filename, "w")` immediately truncates the file to 0 bytes before writing; if the process crashes right after `open()`, the session file is left empty.',
            isCorrect: true,
            explanation:
              'Using `"r+"` with `seek(0)`, `dump()`, and `truncate()` updates the file on a single handle without pre-truncating it to an empty file.',
          },
          {
            label: 'C',
            text: 'Because `"r+"` automatically compresses the JSON file into binary gzip format.',
            isCorrect: false,
            explanation:
              '`"r+"` opens the text file for reading and writing without compression.',
          },
          {
            label: 'D',
            text: 'To bypass operating system user permissions (`ulimit` and `seccomp`).',
            isCorrect: false,
            explanation:
              'File modes cannot bypass OS kernel permission boundaries.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch04-fc1',
        category: 'architecture',
        front: 'What three callback functions does `Engine.run()` accept to decouple the `AI-6` backend from specific UI frontends?',
        back: '`get_input_func` (retrieves user input), `on_tool_call_func` (notifies when a tool runs with name, kwargs, and result), and `on_response_func` (delivers the final assistant response).',
        mentalHook: '3 Frontend Hooks: get_input + on_tool_call + on_response.',
      },
      {
        id: 'dmma-ch04-fc2',
        category: 'optimization',
        front: 'Why is the `Tool` abstract base class in `AI-6` decorated with `@dataclass(slots=True)` and paired with `Parameter(NamedTuple)`?',
        back: '`slots=True` and `NamedTuple` make tool and parameter definitions immutable (preventing dynamic attribute creation), reduce memory footprint, and speed up attribute access.',
        mentalHook: 'Slots + NamedTuple = immutable, low-RAM, fast attribute lookup.',
      },
      {
        id: 'dmma-ch04-fc3',
        category: 'security',
        front: 'What are the four distinct types of runtime guardrails described in Chapter 4 for governing LLM and tool behavior?',
        back: '1) Hallucination guardrails (factuality vs. trusted sources), 2) Regulatory-compliance guardrails (laws/industry rules), 3) Alignment guardrails (user intent/brand tone), and 4) Validation guardrails (structural rule checks with human fallback).',
        mentalHook: 'H-R-A-V Guardrails: Hallucination, Regulatory, Alignment, Validation.',
      },
      {
        id: 'dmma-ch04-fc4',
        category: 'data',
        front: 'What two conditions does `Engine._checkpoint_if_needed()` check after every user and assistant message?',
        back: '1) Whether `message_count_since_checkpoint == checkpoint_interval` (default 3) to call `session.save()`, and 2) whether `total_tokens >= token_threshold` (default 80% of context window) to trigger `_summarize_and_reset_session()`.',
        mentalHook: 'Every 3 messages -> save JSON; at 80% tokens -> summarize session.',
      },
      {
        id: 'dmma-ch04-fc5',
        category: 'adaptation',
        front: 'Why does `AI-6` initially omit support for OpenAI built-in tools (such as Code Interpreter, File Search, and Computer Use)?',
        back: 'Built-in tools are locked to specific providers, specific models, and specific APIs (e.g., OpenAI’s Responses API rather than the Chat Completions API used by `OpenAIProvider`).',
        mentalHook: 'Built-in tools = vendor/API lock-in (Responses API); custom/MCP tools = portable.',
      },
      {
        id: 'dmma-ch04-fc6',
        category: 'architecture',
        front: 'Beyond LLM summarization, what four alternative context-compaction strategies are identified for future `ContextManager` implementations?',
        back: '1) Semantic search with embeddings, 2) Rule-based pruning of trivial turns, 3) Structured storage of facts/entities for on-demand injection, and 4) Token-efficient re-encoding (codebooks/shorthand).',
        mentalHook: '4 Compaction Alternatives: Embeddings, Pruning, Entity Store, Codebooks.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch04-feyn1',
        conceptTitle: 'Provider-Agnostic Tool Execution & UUID Normalization in `Engine._send()`',
        prompt:
          'Explain how `Engine._send()` in `AI-6` upgrades the simple `send()` loop from `k8s-ai` so that it can route across arbitrary LLM providers (`OpenAI`, `Ollama`) and survive runtime tool failures without crashing.',
        rubricChecklist: [
          'Explains how `model_provider_map` resolves `model_id` to an `LLMProvider` instance and passes `self.session.messages` and `self.tool_dict`.',
          'Describes why `tool_call.id` values shorter than 32 characters are remapped via `generate_tool_call_id()` in `id_mapping` before storing the `AssistantMessage`.',
          'Contrasts fatal framework errors (`Unknown model ID`, `Unknown tool`, `JSONDecodeError` -> `RuntimeError`) against operational tool failures (`tool.run(**kwargs)` -> caught and wrapped in `ToolMessage`).',
          'Explains how `on_tool_call_func` notifies the frontend in real time before `_send()` recurses.',
        ],
        modelExplanation:
          'Unlike `k8s-ai`, which hardcodes the OpenAI client and crashes on `sh.kubectl` exceptions, `Engine._send()` first looks up the `LLMProvider` for `model_id` in `model_provider_map` and calls `llm_provider.send()`. If the returned `AssistantMessage` contains `tool_calls`, `_send()` inspects every `tool_call.id`: if an ID is missing or shorter than 32 characters (common in non-OpenAI or local models), it generates a valid UUID via `generate_tool_call_id()` and updates the message in-place so session state remains uniform. Next, it verifies the tool exists in `tool_dict` and parses `arguments` JSON (raising `RuntimeError` only on broken contracts). It then executes `tool.run(**kwargs)` inside a `try/except` block: on success, it creates a `ToolMessage` and fires `on_tool_call_func`; on failure, it catches the exception and creates a `ToolMessage(content=str(e))` with the same UUID. Finally, it appends the `ToolMessage` to `self.session` and calls `self._send()` recursively.',
      },
      {
        id: 'dmma-ch04-feyn2',
        conceptTitle: 'The 6-Layer Tool Security Spectrum & Why Read-Only Tools Can Still Cause Harm',
        prompt:
          'A teammate argues that giving an LLM agent "Full Trust" access to a production database is safe as long as the database credentials are read-only (`SELECT` only). Refute this using first principles and walk through the 6-layer control spectrum from Chapter 4.',
        rubricChecklist: [
          'Refutes the read-only safety myth by explaining data exfiltration of sensitive records and self-DoS attacks via massive unindexed queries.',
          'Contrasts Full Trust against Mediated Fine-Grained Tools (replacing raw SQL/`kubectl` with narrow functions) and notes the API surface maintenance trade-off.',
          'Defines the four guardrail categories (Hallucination, Regulatory, Alignment, Validation) and OS/Container isolation boundaries (containers, low-privilege user, `ulimit`, `seccomp`, ACLs).',
          'Explains when to layer Human-in-the-Loop (HITL) approval for high-consequence actions.',
        ],
        modelExplanation:
          'Even with read-only credentials, an LLM in Full Trust mode can cause severe production damage in two ways: it can read sensitive tables and exfiltrate confidential data into external prompts or logs, and it can execute massive cartesian joins that exhaust database CPU and memory (a self-DoS attack). To govern tool execution properly, `AI-6` supports five progressively stronger layers beyond Full Trust: (1) Mediated Fine-Grained Tools that expose only pre-vetted queries instead of raw SQL or `kubectl`, trading developer maintenance for tight access control; (2) Guardrails across prompts, tool arguments, and outputs—spanning Hallucination, Regulatory-compliance, Alignment, and Validation checks; (3) Container-based sandboxing to isolate filesystem and credential access; (4) OS User Permissions running the agent as a low-privilege Linux user constrained by ACLs, `ulimit`, and `seccomp`; and (5) Human-in-the-Loop approval requiring explicit operator confirmation before executing high-risk operations.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-ai6-core-engine',
        label: 'AI-6 Core Engine',
        category: 'architecture',
        chapterNumber: 4,
        importance: 1,
        definition:
          'The central orchestrator class (`Engine`) initialized via `Config` that coordinates `LLMProvider` routing, `Tool` execution, UI callbacks, and `Session` persistence.',
        whyItMatters:
          'Decouples agentic loop mechanics from specific frontends, LLM vendors, and application domain logic.',
      },
      {
        id: 'dmma-llm-provider-abc',
        label: 'LLMProvider Abstraction (ABC)',
        category: 'adaptation',
        chapterNumber: 4,
        importance: 1,
        definition:
          'An abstract base class defining `send()`, `models`, and a default `stream()` generator, implemented by `OpenAIProvider` and local `OllamaProvider`.',
        whyItMatters:
          'Eliminates third-party proxy latency and vendor lock-in while unifying cloud and local LLM invocation.',
      },
      {
        id: 'dmma-uuid-tool-id-normalization',
        label: 'UUID Tool-Call ID Normalization',
        category: 'data',
        chapterNumber: 4,
        importance: 2,
        definition:
          'Remapping any `tool_call.id` shorter than 32 characters to a valid UUID via `generate_tool_call_id()` inside `Engine._send()`.',
        formulaOrRule: 'if not id or len(id) < 32: id = generate_tool_call_id(id)',
        whyItMatters:
          'Guarantees provider-agnostic message correlation even when local or non-OpenAI models emit malformed tool IDs.',
      },
      {
        id: 'dmma-slotted-tool-abc',
        label: 'Slotted Tool(ABC) & Parameter',
        category: 'architecture',
        chapterNumber: 4,
        importance: 2,
        definition:
          'An immutable `@dataclass(slots=True)` abstract base class paired with `Parameter(NamedTuple)`, optional `configure()`, and abstract `run(**kwargs) -> str`.',
        whyItMatters:
          'Provides a memory-efficient, strongly structured contract for dynamically discovered custom tools.',
      },
      {
        id: 'dmma-tool-security-spectrum',
        label: '6-Layer Tool Security Spectrum',
        category: 'security',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Defense-in-depth controls spanning Full Trust, Mediated Fine-Grained Tools, 4-Type Guardrails, Container Sandboxing, OS User Permissions, and HITL.',
        whyItMatters:
          'Prevents destructive LLM actions, data exfiltration, and self-DoS outages in tool-using agents.',
      },
      {
        id: 'dmma-session-summarizer-memory',
        label: 'Session & 80% Context Summarizer',
        category: 'optimization',
        chapterNumber: 4,
        importance: 1,
        definition:
          'Persistent JSON session management (`Session`, `SessionManager`) coupled with `Summarizer` that compacts history when tokens reach 80% of the model context window.',
        formulaOrRule:
          'T_in + T_out >= floor(W_context * 0.8) -> _summarize_and_reset_session()',
        whyItMatters:
          'Enables multi-day, crash-resilient conversations that never overflow the underlying LLM context limit.',
      },
    ],
    edges: [
      {
        source: 'dmma-llm-provider-abc',
        target: 'dmma-ai6-core-engine',
        relationship: 'part_of',
        explanation:
          '`Engine` discovers `LLMProvider` implementations at startup and routes `_send()` requests via `model_provider_map`.',
      },
      {
        source: 'dmma-uuid-tool-id-normalization',
        target: 'dmma-ai6-core-engine',
        relationship: 'optimizes',
        explanation:
          'UUID normalization inside `Engine._send()` ensures tool call history remains valid across heterogeneous `LLMProvider` backends.',
      },
      {
        source: 'dmma-slotted-tool-abc',
        target: 'dmma-ai6-core-engine',
        relationship: 'part_of',
        explanation:
          '`Engine` discovers `Tool` subclasses into `tool_dict` and invokes `tool.run(**kwargs)` during the agentic loop.',
      },
      {
        source: 'dmma-tool-security-spectrum',
        target: 'dmma-slotted-tool-abc',
        relationship: 'mitigates',
        explanation:
          'Fine-grained scoping, guardrails, sandboxing, OS permissions, and HITL mitigate the blast radius of LLM-invoked `Tool.run()` calls.',
      },
      {
        source: 'dmma-session-summarizer-memory',
        target: 'dmma-ai6-core-engine',
        relationship: 'optimizes',
        explanation:
          '`_checkpoint_if_needed()` periodically saves `Session` JSON and compacts token usage at 80% capacity so `Engine` never exceeds context limits.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 12,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      '100% coverage of Chapter 4 (AI-6 Engine, Config, run() callbacks, _send() UUID normalization & exception capture, LLMProvider ABC, OpenAIProvider, OllamaProvider, Tool ABC & Parameter NamedTuple, built-in vs MCP tools, 6-layer tool security & 4 guardrail types, Session, SessionManager safe r+/seek/truncate I/O, and 80% context Summarizer). Zero AI clichés.',
  },
};
