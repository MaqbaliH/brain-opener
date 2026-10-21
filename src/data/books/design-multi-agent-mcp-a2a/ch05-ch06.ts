import { ChapterMastery } from '../../../types/book';

export const dmmaCh05Mastery: ChapterMastery = {
  chapterNumber: 5,
  chapterId: 'ch05',
  title: 'Implementing Custom Tools',
  subtitle:
    'Provider-agnostic tool schemas, POSIX shell wrapping via CommandTool, self-modifying bootstrap cycles, and multi-provider inference tools',
  readingTimeMinutes: 8,
  sourceWordCount: 9389,
  executiveThesis:
    'Agentic frameworks achieve provider-agnostic extensibility by decoupling internal tool definitions from vendor-specific function-calling schemas such as OpenAI and Ollama. By standardizing on a compact Tool abstract base class with explicit required-parameter sets, AI-6 unifies POSIX command-line wrappers, direct filesystem mutators, session memory managers, and cross-provider LLM clients under one execution contract. Combining code-editing tools with unit-test runners and process replacement (`os.execv`) enables a closed, self-modifying improvement loop.',
  paradigmShift: {
    oldWay:
      'Vendor-Coupled Tool Definitions: Hardcode JSON schemas and function-calling payloads directly against a single LLM SDK such as OpenAI Chat Completions.',
    newWay:
      'Superset Generic Tool Abstraction: Define tools once against an internal `Tool` and `Parameter` contract that each `LLMProvider` adapter translates at runtime.',
    whyItChanged:
      'Divergent SDK conventions—such as OpenAI `ChatCompletionToolParam` TypedDicts versus Ollama Pydantic `Tool` models and callable docstrings—force multi-model engines to maintain an intermediate superset representation.',
  },
  customDiagrams: [
    {
      id: 'dmma-ch05-svg-translation',
      title: 'Provider-Agnostic Tool Schema & Hierarchy Architecture',
      subtitle:
        'Mapping the AI-6 Tool ABC and its specialized subclasses into OpenAI and Ollama runtime specifications',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh05Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="dmmaArrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaArrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="dmmaArrEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#dmmaCh05Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">AI-6 PROVIDER-AGNOSTIC TOOL SPECIFICATION &amp; CLASS HIERARCHY</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Single internal Tool ABC translated to vendor SDKs while unifying CLI, memory, and API tools</text>

  <!-- Left Column: Subclasses -->
  <rect x="28" y="72" width="230" height="74" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="92" fill="#38bdf8" font-size="11.5" font-weight="700">1. CommandTool Subclasses</text>
  <text x="42" y="108" fill="#e2e8f0" font-size="10">Pwd, Ls, Awk, Sed, Github (gh)</text>
  <text x="42" y="123" fill="#94a3b8" font-size="9.5">Single required param: args (str)</text>
  <text x="42" y="137" fill="#94a3b8" font-size="9.5">Executes via shlex.split + sh / sudo</text>

  <rect x="28" y="158" width="230" height="74" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="42" y="178" fill="#10b981" font-size="11.5" font-weight="700">2. Direct System &amp; File Tools</text>
  <text x="42" y="194" fill="#e2e8f0" font-size="10">Echo, TestRunner, Bootstrap</text>
  <text x="42" y="209" fill="#94a3b8" font-size="9.5">Bypasses shell redirection limits</text>
  <text x="42" y="223" fill="#94a3b8" font-size="9.5">unittest discovery &amp; os.execv()</text>

  <rect x="28" y="244" width="230" height="74" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
  <text x="42" y="264" fill="#c084fc" font-size="11.5" font-weight="700">3. Engine Memory Tools</text>
  <text x="42" y="280" fill="#e2e8f0" font-size="10">List / Load / GetId / DeleteSession</text>
  <text x="42" y="295" fill="#94a3b8" font-size="9.5">Delegates to Engine source of truth</text>
  <text x="42" y="309" fill="#94a3b8" font-size="9.5">Guards active session from deletion</text>

  <rect x="28" y="330" width="230" height="68" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="42" y="350" fill="#fbbf24" font-size="11.5" font-weight="700">4. External API Tools (Claude)</text>
  <text x="42" y="366" fill="#e2e8f0" font-size="10">Uses configure(config) for api_key</text>
  <text x="42" y="381" fill="#94a3b8" font-size="9.5">Calls anthropic.Anthropic().messages</text>

  <!-- Center Hub: AI-6 Tool ABC -->
  <rect x="304" y="136" width="204" height="190" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
  <text x="406" y="160" fill="#f8fafc" font-size="13" font-weight="800" text-anchor="middle">AI-6 Tool(ABC)</text>
  <text x="406" y="176" fill="#38bdf8" font-size="10" font-weight="600" text-anchor="middle">@dataclass(slots=True)</text>
  <line x1="320" y1="186" x2="492" y2="186" stroke="#334155" stroke-width="1" />
  <text x="320" y="204" fill="#e2e8f0" font-size="10" font-family="monospace">name: str</text>
  <text x="320" y="220" fill="#e2e8f0" font-size="10" font-family="monospace">description: str</text>
  <text x="320" y="236" fill="#e2e8f0" font-size="10" font-family="monospace">parameters: list[Parameter]</text>
  <text x="320" y="252" fill="#fbbf24" font-size="10" font-weight="700" font-family="monospace">required: set[str]</text>
  <line x1="320" y1="264" x2="492" y2="264" stroke="#334155" stroke-width="1" />
  <text x="320" y="282" fill="#94a3b8" font-size="10" font-family="monospace">configure(config: dict)</text>
  <text x="320" y="300" fill="#38bdf8" font-size="10" font-weight="700" font-family="monospace">@abstractmethod</text>
  <text x="320" y="314" fill="#38bdf8" font-size="10" font-family="monospace">run(**kwargs) -&gt; str</text>

  <!-- Flow lines from subclasses to Tool ABC -->
  <path d="M 258 109 L 282 109 L 282 185 L 300 185" fill="none" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#dmmaArrCyan)" />
  <path d="M 258 195 L 300 195" fill="none" stroke="#10b981" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#dmmaArrEmerald)" />
  <path d="M 258 281 L 300 281" fill="none" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#dmmaArrCyan)" />
  <path d="M 258 364 L 282 364 L 282 305 L 300 305" fill="none" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#dmmaArrAmber)" />

  <!-- Right Column: Provider SDK Targets -->
  <rect x="556" y="100" width="216" height="118" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="570" y="122" fill="#fbbf24" font-size="12" font-weight="700">OpenAI Python SDK</text>
  <text x="570" y="140" fill="#e2e8f0" font-size="10" font-family="monospace">ChatCompletionToolParam</text>
  <text x="570" y="156" fill="#94a3b8" font-size="9.5">• type: Required[Literal["function"]]</text>
  <text x="570" y="172" fill="#94a3b8" font-size="9.5">• function: FunctionDefinition</text>
  <text x="570" y="188" fill="#94a3b8" font-size="9.5">• parameters: Dict[str, object]</text>
  <text x="570" y="204" fill="#fbbf24" font-size="9.5">• tool_choice: none|auto|required</text>

  <rect x="556" y="242" width="216" height="118" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="570" y="264" fill="#10b981" font-size="12" font-weight="700">Ollama Python SDK</text>
  <text x="570" y="282" fill="#e2e8f0" font-size="10" font-family="monospace">Tool(SubscriptableBaseModel)</text>
  <text x="570" y="298" fill="#94a3b8" font-size="9.5">• Accepts Mapping, Tool, or Callable</text>
  <text x="570" y="314" fill="#94a3b8" font-size="9.5">• Function.Parameters(type='object')</text>
  <text x="570" y="330" fill="#94a3b8" font-size="9.5">• properties: Mapping[str, Property]</text>
  <text x="570" y="346" fill="#10b981" font-size="9.5">• Unified over local open-weights</text>

  <!-- Translation Arrows -->
  <path d="M 508 200 L 552 162" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaArrAmber)" />
  <path d="M 508 260 L 552 298" fill="none" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaArrEmerald)" />
</svg>`,
      bierutCaption:
        'AI-6 isolates concrete tool implementations from vendor SDK churn by funneling all four tool categories through a slot-optimized Tool dataclass before translating to OpenAI or Ollama schemas.',
      annotations: [
        {
          step: '1',
          label: 'Explicit Required Set',
          explanation:
            'AI-6 adds `required: set[str]` directly on the `Tool` dataclass, restoring schema constraints omitted from top-level Python SDK wrappers.',
        },
        {
          step: '2',
          label: 'Four Implementation Archetypes',
          explanation:
            'Tools inherit either from `CommandTool` for POSIX utilities or directly from `Tool` for file writing, session delegation, and authenticated external SDKs.',
        },
        {
          step: '3',
          label: 'Runtime Adapter Translation',
          explanation:
            'Each `LLMProvider` maps `Parameter(name, type, description)` into OpenAI `FunctionDefinition` dicts or Ollama `SubscriptableBaseModel` objects.',
        },
      ],
    },
    {
      id: 'dmma-ch05-svg-self-mod',
      title: 'The Self-Modifying Agentic Bootstrap Loop',
      subtitle:
        'How AI-6 inspects, edits, tests, and hot-restarts its own runtime image via os.execv()',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh05Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="dmmaLoopCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaLoopAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="dmmaLoopGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="dmmaLoopRose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#dmmaCh05Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">SELF-MODIFYING CODE &amp; EXECV BOOTSTRAP PIPELINE</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Closed-loop capability synthesis: inspect codebase, write tool &amp; unit tests, verify, and replace process image</text>

  <!-- Step 1: Inspect -->
  <rect x="32" y="88" width="160" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="46" y="110" fill="#38bdf8" font-size="11.5" font-weight="700">1. Inspect Architecture</text>
  <text x="46" y="128" fill="#e2e8f0" font-size="10" font-family="monospace">pwd, ls, cat</text>
  <text x="46" y="146" fill="#94a3b8" font-size="9.5">Read CommandTool &amp;</text>
  <text x="46" y="160" fill="#94a3b8" font-size="9.5">Tool ABC in backend/</text>
  <text x="46" y="176" fill="#38bdf8" font-size="9">Human guides naming</text>

  <!-- Step 2: Mutate -->
  <rect x="224" y="88" width="160" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="238" y="110" fill="#fbbf24" font-size="11.5" font-weight="700">2. Synthesize Code</text>
  <text x="238" y="128" fill="#e2e8f0" font-size="10" font-family="monospace">echo, sed, awk, patch</text>
  <text x="238" y="146" fill="#94a3b8" font-size="9.5">Echo writes file_path</text>
  <text x="238" y="160" fill="#94a3b8" font-size="9.5">via os.makedirs / tee</text>
  <text x="238" y="176" fill="#fbbf24" font-size="9">Creates github.py &amp; tests</text>

  <!-- Step 3: Verify -->
  <rect x="416" y="88" width="168" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="430" y="110" fill="#10b981" font-size="11.5" font-weight="700">3. Verify via Unittest</text>
  <text x="430" y="128" fill="#e2e8f0" font-size="10" font-family="monospace">python_test_runner</text>
  <text x="430" y="146" fill="#94a3b8" font-size="9.5">python -m unittest</text>
  <text x="430" y="160" fill="#94a3b8" font-size="9.5">discover -s test_dir</text>
  <text x="430" y="176" fill="#10b981" font-size="9">Captures stdout / stderr</text>

  <!-- Step 4: Bootstrap -->
  <rect x="616" y="88" width="152" height="110" rx="8" fill="#1e293b" stroke="#c084fc" stroke-width="1.5" />
  <text x="630" y="110" fill="#c084fc" font-size="11.5" font-weight="700">4. Process Replace</text>
  <text x="630" y="128" fill="#e2e8f0" font-size="10" font-family="monospace">bootstrap (execv)</text>
  <text x="630" y="146" fill="#94a3b8" font-size="9.5">Inspects __main__</text>
  <text x="630" y="160" fill="#94a3b8" font-size="9.5">__spec__ vs __file__</text>
  <text x="630" y="176" fill="#c084fc" font-size="9">os.execv(sys.executable)</text>

  <!-- Arrows between steps -->
  <line x1="192" y1="143" x2="220" y2="143" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaLoopCyan)" />
  <line x1="384" y1="143" x2="412" y2="143" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaLoopAmber)" />
  <line x1="584" y1="143" x2="612" y2="143" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaLoopGreen)" />

  <!-- Failure feedback loop from Verify to Mutate -->
  <path d="M 500 198 L 500 238 L 304 238 L 304 202" fill="none" stroke="#f43f5e" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#dmmaLoopRose)" />
  <text x="402" y="232" fill="#fda4af" font-size="9.5" font-weight="600" text-anchor="middle">ErrorReturnCode: decode stderr &amp; iterate</text>

  <!-- Lower Panel: Session Continuity Across Execv Restart -->
  <rect x="32" y="274" width="736" height="114" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  <text x="50" y="298" fill="#f8fafc" font-size="12" font-weight="700">PERSISTENT SESSION CONTINUITY ACROSS PROCESS RESTARTS</text>
  <text x="50" y="318" fill="#94a3b8" font-size="10">Auto-checkpointing saves active conversation state; after os.execv() replaces the process image, memory tools restore context:</text>

  <rect x="50" y="332" width="155" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="127" y="350" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">list_sessions()</text>
  <text x="127" y="365" fill="#94a3b8" font-size="9" text-anchor="middle">JSON list of stored IDs</text>

  <rect x="225" y="332" width="155" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="302" y="350" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">load_session(id)</text>
  <text x="302" y="365" fill="#94a3b8" font-size="9" text-anchor="middle">Restores message history</text>

  <rect x="400" y="332" width="155" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="477" y="350" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">get_session_id()</text>
  <text x="477" y="365" fill="#94a3b8" font-size="9" text-anchor="middle">Queries active Engine ID</text>

  <rect x="575" y="332" width="172" height="42" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1" />
  <text x="661" y="350" fill="#fda4af" font-size="10" font-weight="600" text-anchor="middle">delete_session(id)</text>
  <text x="661" y="365" fill="#fecdd3" font-size="9" text-anchor="middle">Blocks if id == current_id</text>
</svg>`,
      bierutCaption:
        'Self-hosting agent evolution requires four synchronized primitives: codebase inspection, non-redirected file writing, isolated unittest discovery, and in-place process image replacement.',
      annotations: [
        {
          step: '1',
          label: 'Shell Redirection Bypass',
          explanation:
            'Because `CommandTool` passes arguments via `shlex.split` without a subshell, `Echo` inherits directly from `Tool` to write files safely.',
        },
        {
          step: '2',
          label: 'Non-Fatal Test Failure Capture',
          explanation:
            '`TestRunner` catches `sh.ErrorReturnCode` and returns decoded `stdout` and `stderr` dicts so the LLM can diagnose failing assertions.',
        },
        {
          step: '3',
          label: 'Module vs. Script Execv Reconstruction',
          explanation:
            '`Bootstrap` inspects `__main__.__spec__` to preserve `python -m package.module` versus direct script invocation across `os.execv`.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch05-mm1',
      name: 'The Superset Tool Contract',
      tagline: 'Define tool schemas as the union of all target LLM provider requirements',
      naiveIntuition:
        'Write tool definitions using OpenAI `ChatCompletionToolParam` dictionaries and convert them when adding secondary models.',
      firstPrinciplesReality:
        'Vendor SDKs omit or restructure critical fields—for example, OpenAI’s Python `FunctionDefinition` leaves `parameters` as an untyped `Dict[str, object]` without a top-level `required` set, while Ollama wraps parameters inside nested Pydantic models. AI-6 defines `Tool` with an explicit `required: set[str]` and typed `Parameter` tuples so any provider adapter can project a lossless vendor schema.',
      howToApply:
        'Declare every custom tool using `Parameter(name, type, description)` and `required: set[str]` on the `Tool` base class, keeping vendor SDK types strictly inside `LLMProvider` implementations.',
    },
    {
      id: 'dmma-ch05-mm2',
      name: 'Single-String POSIX Wrapping vs. Direct Syscall Tools',
      tagline: 'Wrap standard CLI binaries via shlex.split, but drop to Python for I/O redirection',
      naiveIntuition:
        'Create separate Python methods for every CLI subcommand (such as `list_repositories()` and `clone_repository()`) or run raw shell strings with `>` redirection.',
      firstPrinciplesReality:
        '`CommandTool` exposes any POSIX binary through a single required `args` string parsed by `shlex.split()` and executed via `sh`, eliminating per-subcommand boilerplate while embedding a manual URL in `description`. However, because `sh` executes binaries directly without a shell interpreter, shell redirection (`echo "x" > file`) fails—requiring file-writing tools like `Echo` to inherit directly from `Tool`.',
      howToApply:
        'Subclass `CommandTool(command_name, user, doc_link)` for stateless CLI utilities (`pwd`, `ls`, `awk`, `gh`), and subclass `Tool` directly whenever file descriptors, privileges, or Python objects must be manipulated.',
    },
    {
      id: 'dmma-ch05-mm3',
      name: 'Single-Responsibility Engine Delegation',
      tagline: 'Keep stateful tools thin by delegating mutations to the orchestrating Engine',
      naiveIntuition:
        'Build a monolithic `MemoryTool` with an `action` parameter that directly reads, writes, and unlinks session JSON files on disk.',
      firstPrinciplesReality:
        'Duplicating session storage logic inside tools creates state drift against the active engine loop and complicates unit testing. Splitting operations into atomic tools (`ListSessions`, `LoadSession`, `GetSessionId`, `DeleteSession`) that hold a reference to `self.engine` preserves a single source of truth and enforces invariants like blocking deletion of the active session.',
      howToApply:
        'Pass the `Engine` instance into stateful tool constructors, expose one atomic operation per tool class, and rely on automatic checkpoint intervals rather than manual save tools.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch05-sec1',
      sectionNumber: '5.1',
      title: 'Provider-Agnostic Tool Schemas: OpenAI, Ollama, and the AI-6 Superset',
      subtitle:
        'Reconciling SDK divergences across Chat Completions, Responses API, and Ollama',
      coreMechanism:
        'LLM providers expose incompatible Python SDK interfaces for function calling. In the OpenAI Python SDK (generated from OpenAPI via Stainless), `chat.completions.create()` accepts `tools: Iterable[ChatCompletionToolParam] | NotGiven = NOT_GIVEN`, where `NotGiven` is a sentinel class distinguishing omitted arguments from `None`. Each `ChatCompletionToolParam` requires `type: Literal["function"]` and `function: FunctionDefinition(name, description, parameters, strict)`, plus a separate `tool_choice` control (`"none"`, `"auto"`, `"required"`, or a named tool). By contrast, Ollama’s `Client.chat()` accepts a sequence of raw dicts, `Callable` functions with Google docstrings, or `Tool(SubscriptableBaseModel)` instances containing nested `Function`, `Parameters`, and `Property` models.\n\nTo insulate tool authors from these differences, AI-6 defines a minimal superset schema in `backend.object_model`: a `Parameter(NamedTuple)` with `name`, `type`, and `description`, and an abstract `@dataclass(slots=True) Tool(ABC)` holding `name`, `description`, `parameters: list[Parameter]`, and `required: set[str]`. Every tool implements `@abstractmethod run(self, **kwargs) -> str` and an optional `configure(self, config: dict) -> None` hook.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Declare Generic Metadata',
          detail:
            'Instantiate `Parameter(name, type, description)` items and specify mandatory argument names in `required: set[str]` on the `Tool` subclass.',
        },
        {
          step: '2',
          title: 'Inject Runtime Configuration',
          detail:
            'Call `tool.configure(config)` during engine startup to pass secrets such as API keys without exposing them in the LLM-visible parameter schema.',
        },
        {
          step: '3',
          title: 'Translate per Provider Adapter',
          detail:
            'Map the `Tool` instance into OpenAI `ChatCompletionToolParam` dictionaries or Ollama `Tool` models inside the active `LLMProvider` before inference.',
        },
      ],
      keyTakeaways: [
        'OpenAI Chat Completions only supports the `"function"` tool type, whereas built-in tools like `CodeInterpreter`, `FileSearch`, and `Mcp` live in the newer Responses API.',
        'AI-6 explicitly tracks `required: set[str]` on the `Tool` class because OpenAI’s Python `FunctionDefinition` types `parameters` as an unstructured `Dict[str, object]`.',
        'Separating `configure(config)` from `run(**kwargs)` keeps infrastructure credentials out of the LLM prompt context.',
      ],
      commonPitfalls: [
        'Confusing Python `None` with OpenAI’s `NOT_GIVEN` sentinel when inspecting or forwarding optional SDK parameters.',
        'Coupling custom tool code to provider-specific features like OpenAI `strict` mode or Ollama callable docstring auto-conversion.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch05_plate.png',
          originalLabel: 'Chapter 5 Opening Blueprint: Implementing Custom Tools (Page 156)',
          bierutTitle: 'Standardize Tool Contracts Once to Execute Across Any Model Backend',
          editorialAnalysis:
            'The Chapter 5 architectural plate illustrates how AI-6 opens the black box of pluggable tools introduced in Chapter 4. By interposing a provider-agnostic specification between internal Python execution and external model APIs, a single tool definition serves OpenAI, Ollama, and future providers without code changes.',
          keyTakeaways: [
            'Internal tool schemas must form a strict superset of all supported LLM provider tool specifications.',
            'Tool execution results always return through the session loop as strings or serialized structures.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch05-sec2',
      sectionNumber: '5.2',
      title: 'CLI Wrappers, Self-Modifying Tools, and Session Memory Delegation',
      subtitle:
        'CommandTool, Echo privilege escalation, TestRunner, Bootstrap execv, and Memory tools',
      coreMechanism:
        'AI-6 accelerates POSIX tool creation through `CommandTool(Tool)`, which takes `command_name`, an optional `user`, and a `doc_link` appended to the tool description. It exposes a single required `args` string parameter; at runtime, `run()` parses `kwargs["args"]` via `shlex.split()` and executes `getattr(sh, self.command_name)(*args)`—or `sh.sudo("-u", self.user, self.command_name, *args)` when a dedicated user is configured. Filesystem tools like `Pwd`, `Ls`, and `Awk` require only a 5-line subclass passing their GNU manual URL. However, because `CommandTool` cannot perform shell output redirection (`>`), `Echo` inherits directly from `Tool` with `file_path` and `content` parameters, writing via `os.makedirs` and `open()` locally or `sudo -u <user> mkdir -p` and `sudo -u <user> tee` under user isolation.\n\nTogether with `TestRunner`—which runs `sh.python("-m", "unittest", "discover", "-s", test_directory)` and catches `sh.ErrorReturnCode` to return decoded `stdout`/`stderr`—and `Bootstrap`—which inspects `sys.modules["__main__"].__spec__` to replace the current process via `os.execv(sys.executable, args)`—AI-6 can edit, test, and reload its own code. Meanwhile, `ListSessions`, `LoadSession`, `GetSessionId`, and `DeleteSession` delegate session persistence to `self.engine`, explicitly forbidding deletion of the active session ID.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Parse and Execute CLI Commands',
          detail:
            '`CommandTool.run()` splits `args` with `shlex.split()` and dispatches through `sh` (with optional `sudo -u` privilege separation).',
        },
        {
          step: '2',
          title: 'Write and Verify Self-Modifications',
          detail:
            '`Echo` writes updated Python source files, and `TestRunner` executes `unittest discover`, returning structured `stdout`/`stderr` dictionaries.',
        },
        {
          step: '3',
          title: 'Replace Process Image and Restore Session',
          detail:
            '`Bootstrap` calls `os.execv()` preserving `-m module` or script arguments, while engine memory tools reload prior session state from disk.',
        },
      ],
      keyTakeaways: [
        '`CommandTool` eliminates per-subcommand wrapper methods by letting the LLM synthesize CLI flags from the embedded `doc_link` manual.',
        '`Bootstrap` must distinguish `__main__.__spec__` (module execution via `python -m`) from `__main__.__file__` (script execution) before calling `os.execv()`.',
        '`DeleteSession` compares `session_id == self.engine.get_session_id()` to prevent unlinking the currently active conversation.',
      ],
      commonPitfalls: [
        'Attempting to use `CommandTool` for file creation via `>` redirection, which fails because `sh` does not invoke a shell interpreter.',
        'Calling `Bootstrap.run()` inside an interactive REPL or notebook where `__main__.__file__` is undefined, triggering a `RuntimeError`.',
      ],
    },
    {
      id: 'dmma-ch05-sec3',
      sectionNumber: '5.3',
      title: 'Interactive vs. Manual Tool Synthesis: GitHub CLI and Claude API',
      subtitle:
        'Steering human-in-the-loop code generation and wrapping secondary LLM providers',
      coreMechanism:
        'Chapter 5 contrasts two workflows for expanding an agent’s toolset: interactive self-synthesis via the AI-6 CLI (`python -m frontend.cli.ai6`) and manual implementation of a stateful API client. When asked to build a GitHub tool wrapping the `gh` CLI, AI-6 initially hallucinated a redundant base class, added unnecessary helper methods (`list_repositories`, `create_repository`, `clone_repository`), named the class `GhCLI` (leaking implementation details), and wrapped `run()` in a redundant `execute()` method. By instructing AI-6 to inspect `CommandTool` and `Tool` first, the human operator steered it to a clean 6-line `Github(CommandTool)` class in `backend/tools/github/github.py` verified by `python_test_runner`.\n\nFor tools requiring external SDK state and credentials, the manual `Claude(Tool)` implementation in `backend/tools/claude_tool.py` demonstrates cross-provider delegation. While AI-6 runs on a primary model like GPT-4o, `Claude` exposes `prompt` (required), `model` (defaulting to `claude-sonnet-4-20250514`), `max_tokens` (1000), and `temperature` (0.7). Its `configure(config)` method initializes `self.client = anthropic.Anthropic(api_key=config["api_key"])`, allowing `run()` to call `self.client.messages.create()` for a second-opinion inference.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Ground the Agent in Existing Base Classes',
          detail:
            'Prompt the agent to read `CommandTool` and `Tool` source files before generating code so it inherits `run(args=...)` rather than inventing bespoke methods.',
        },
        {
          step: '2',
          title: 'Enforce Naming and Minimalist Interfaces',
          detail:
            'Name the tool after the capability (`Github`), strip redundant `execute()` wrappers, and validate with `unittest` via `python_test_runner`.',
        },
        {
          step: '3',
          title: 'Wire Configurable Multi-Model Clients',
          detail:
            'Initialize `self.client = None` in `Claude.__init__()`, inject `api_key` via `configure()`, and return `response.content[0].text` from `run()`.',
        },
      ],
      keyTakeaways: [
        'Without codebase grounding, LLMs over-engineer subclasses by adding explicit subcommand methods instead of using generic `CommandTool.run(args)` execution.',
        'Class names should reflect domain capability (`Github`) rather than underlying binary names (`GhCLI`).',
        'Wrapping an LLM SDK inside a `Tool` (`Claude`) lets a primary orchestrator request a second opinion from a competing frontier model mid-session.',
      ],
      commonPitfalls: [
        'Accepting first-shot LLM-generated tool code without stripping redundant wrapper methods like `execute(args)` that duplicate `CommandTool.run()`.',
        'Invoking `Claude.run()` before `configure(config)` sets `api_key`, which leaves `self.client` as `None` and returns an unconfigured error string.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'AI-6 Custom Tool Implementation Archetypes',
      description:
        'Choosing the right inheritance pattern, parameter granularity, and privilege model when adding capabilities to AI-6.',
      headers: [
        'Tool Archetype',
        'Base Class',
        'Parameter Schema',
        'State & Privilege Model',
        'Representative Examples',
      ],
      rows: [
        [
          'POSIX CLI Wrapper',
          'CommandTool(Tool)',
          'Single required args: str',
          'Stateless; optional sudo -u user via sh',
          'Pwd, Ls, Awk, Sed, Github (gh)',
        ],
        [
          'Direct OS / Runtime Mutator',
          'Tool(ABC)',
          'Explicit typed parameters (file_path, content)',
          'Direct Python OS/sys calls or sudo tee',
          'Echo, TestRunner, Bootstrap',
        ],
        [
          'Session Memory Controller',
          'Tool(ABC)',
          'Zero params or required session_id: str',
          'Stateful reference to self.engine instance',
          'ListSessions, LoadSession, DeleteSession',
        ],
        [
          'External SDK / Multi-LLM Client',
          'Tool(ABC)',
          'Required prompt + optional model/temp/tokens',
          'Configured via configure(config) API key',
          'Claude (Anthropic SDK client)',
        ],
      ],
      verdictRule:
        'Inherit from CommandTool for any standalone CLI binary that accepts POSIX flags without shell redirection; inherit directly from Tool whenever you need file redirection, Engine state access, or authenticated third-party SDK clients.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch05-scen1',
      title: 'Broken File Creation Under Dedicated User Isolation',
      roleAndContext:
        'Platform Engineer building a sandboxed file-writing tool for AI-6 running under a restricted Linux service account.',
      symptomOrFailure:
        'Subclassing `CommandTool("echo", user="sandbox")` and passing `args=\'"hello" > /tmp/work/out.txt\'` fails to create the file and prints the literal `> /tmp/work/out.txt` to stdout.',
      naiveFixAndWhyItFails:
        'Wrapping `sh.bash("-c", ...)` inside `CommandTool` restores redirection but opens arbitrary command-injection vulnerabilities via unescaped LLM strings.',
      firstPrinciplesSolution:
        'Implement `Echo(Tool)` directly with explicit `file_path` and `content` parameters, executing `sh.sudo("-u", self.user, "mkdir", "-p", dir_path)` followed by `sh.sudo("-u", self.user, "tee", filename, _in=content, _out=os.devnull)`.',
      measurableOutcome:
        'Eliminates shell-injection surfaces while achieving 100% reliable directory creation and file writing across both default and `sudo -u` isolated users.',
    },
    {
      id: 'dmma-ch05-scen2',
      title: 'Over-Engineered Subcommand Proliferation in Agent-Generated CLI Tools',
      roleAndContext:
        'AI Systems Architect using AI-6 to self-generate a `gh` GitHub CLI integration tool.',
      symptomOrFailure:
        'The LLM generates a `GhCLI` class containing dozens of brittle helper methods (`list_repositories`, `create_repository`, `clone_repository`) and a redundant `execute()` wrapper that breaks whenever complex flags are needed.',
      naiveFixAndWhyItFails:
        'Prompting the LLM to add more methods for pull requests and issues bloats the class to hundreds of lines while still failing to cover the full `gh` manual.',
      firstPrinciplesSolution:
        'Direct the agent to inspect `CommandTool` and `Tool` first, then reduce `Github(CommandTool)` to a 4-line `__init__` passing `command_name="gh"` and `doc_link="https://cli.github.com/manual/"`, relying directly on inherited `run(args=...)`.',
      measurableOutcome:
        'Reduces tool implementation code by 85% while exposing 100% of `gh` CLI subcommands and flags through a single tested interface.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch05-q1',
        scenarioPrompt:
          'While inspecting the AI-6 `Tool` base class (`@dataclass(slots=True) class Tool(ABC)`), you notice it includes a `required: set[str]` field alongside `parameters: list[Parameter]`. Why did AI-6 explicitly add `required` to its generic tool schema?',
        options: [
          {
            label: 'A',
            text: 'Because Python dataclasses cannot serialize `Parameter` NamedTuples without a companion set of keys.',
            isCorrect: false,
            explanation:
              '`NamedTuple` instances serialize cleanly; `required` is a semantic schema constraint for LLM tool calling, not a Python dataclass requirement.',
          },
          {
            label: 'B',
            text: 'Because OpenAI’s REST API supports required tool parameters, but both the OpenAI Python SDK (`FunctionDefinition`) and Ollama’s top-level `Tool` model omit an explicit top-level `required` set.',
            isCorrect: true,
            explanation:
              'In OpenAI’s Python SDK, `FunctionParameters` is typed merely as `Dict[str, object]`, so AI-6 elevates `required: set[str]` to a first-class attribute on `Tool`.',
          },
          {
            label: 'C',
            text: 'Because `shlex.split()` requires a set of mandatory flag names before parsing POSIX command strings.',
            isCorrect: false,
            explanation:
              '`shlex.split()` parses raw shell-like strings into token lists without inspecting tool schema metadata.',
          },
          {
            label: 'D',
            text: 'Because Anthropic’s `messages.create()` rejects any tool that has optional parameters.',
            isCorrect: false,
            explanation:
              'Tools frequently have optional parameters with defaults, such as `model`, `max_tokens`, and `temperature` in the `Claude` tool.',
          },
        ],
      },
      {
        id: 'dmma-ch05-q2',
        scenarioPrompt:
          'An AI-6 agent modifies its own source code, verifies the change with `python_test_runner`, and invokes the `bootstrap` tool to restart itself. How does `Bootstrap.run()` ensure the restarted process launches with the exact same invocation mode?',
        options: [
          {
            label: 'A',
            text: 'It inspects `sys.modules["__main__"].__spec__` to check if the program was launched via `python -m package.module` or as a direct script via `__file__`, then calls `os.execv(sys.executable, args)`.',
            isCorrect: true,
            explanation:
              'Checking `spec.name` allows `Bootstrap` to reconstruct `[sys.executable, "-m", module_name, *sys.argv[1:]]` versus `[sys.executable, module_path, *sys.argv[1:]]` before replacing the process image.',
          },
          {
            label: 'B',
            text: 'It spawns a background daemon via `sh.nohup()` and terminates the parent process with `sys.exit(0)`.',
            isCorrect: false,
            explanation:
              '`Bootstrap` uses `os.execv()` to replace the current process in-place rather than spawning an orphaned background child.',
          },
          {
            label: 'C',
            text: 'It reloads all modules in `sys.modules` using `importlib.reload()` without restarting the Python interpreter.',
            isCorrect: false,
            explanation:
              'Although `importlib` is imported in the file, `Bootstrap.run()` performs a full process replacement via `os.execv(sys.executable, args)`.',
          },
          {
            label: 'D',
            text: 'It serializes the `Engine` instance to a pickle file and triggers a systemd service restart.',
            isCorrect: false,
            explanation:
              'AI-6 relies on periodic JSON session checkpointing and `os.execv()`, not pickle or systemd.',
          },
        ],
      },
      {
        id: 'dmma-ch05-q3',
        scenarioPrompt:
          'Why does AI-6 provide `list_sessions`, `load_session`, `get_session_id`, and `delete_session` as four separate `Tool` classes, yet omits a `save_session` tool?',
        options: [
          {
            label: 'A',
            text: 'Sessions are immutable read-only logs that can only be created manually by the human user before startup.',
            isCorrect: false,
            explanation:
              'Sessions are dynamically updated after every turn and can be rewritten or deleted by tools.',
          },
          {
            label: 'B',
            text: 'Splitting each operation simplifies implementation and testing while delegating to `self.engine`, and `save_session` is unnecessary because the `Engine` automatically checkpoints sessions periodically.',
            isCorrect: true,
            explanation:
              'AI-6’s `Engine` automatically persists the active session at the configured `checkpoint_interval`, while atomic tool classes keep each `run()` method focused and easy to test.',
          },
          {
            label: 'C',
            text: 'OpenAI’s `ChatCompletionToolParam` forbids having more than one parameter per tool, preventing a combined memory tool.',
            isCorrect: false,
            explanation:
              'Tools like `Echo` and `Claude` define multiple parameters; splitting memory tools is a deliberate modularity choice.',
          },
          {
            label: 'D',
            text: 'Saving a session requires root privileges via `sudo tee`, which memory tools are not permitted to invoke.',
            isCorrect: false,
            explanation:
              'Session files are written to the user-accessible `memory_dir` by the `Engine` without requiring `sudo`.',
          },
        ],
      },
      {
        id: 'dmma-ch05-q4',
        scenarioPrompt:
          'You are implementing the `Claude(Tool)` class so an OpenAI-backed AI-6 session can query Anthropic’s `claude-sonnet-4-20250514` model for a second opinion. How should the Anthropic API key and optional sampling parameters be handled?',
        options: [
          {
            label: 'A',
            text: 'Include `api_key` in `parameters: list[Parameter]` and `required: set[str]` so GPT-4o passes the key on every tool call.',
            isCorrect: false,
            explanation:
              'Exposing secret API keys in LLM tool schemas leaks credentials into session logs and prompt contexts.',
          },
          {
            label: 'B',
            text: 'Initialize `self.client = None` in `__init__`, instantiate `anthropic.Anthropic(api_key=config["api_key"])` inside `configure(config)`, and require only `prompt` while defaulting `model`, `max_tokens`, and `temperature` in `run(**kwargs)`.',
            isCorrect: true,
            explanation:
              '`configure()` injects the secret from `tool_config.claude` at startup, while `kwargs.get()` supplies sensible defaults for optional inference parameters.',
          },
          {
            label: 'C',
            text: 'Subclass `CommandTool("claude")` and pass the API key via `shlex.split()` command-line flags.',
            isCorrect: false,
            explanation:
              'The `Claude` tool uses the `anthropic` Python SDK directly rather than wrapping a CLI binary.',
          },
          {
            label: 'D',
            text: 'Set `strict=True` on `Parameter` objects so the Anthropic SDK auto-loads credentials from `Engine.list_sessions()`.',
            isCorrect: false,
            explanation:
              'AI-6 `Parameter` is a 3-field `NamedTuple(name, type, description)` and does not load credentials from session history.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch05-fc1',
        category: 'architecture',
        front: 'What sentinel pattern does the OpenAI Python SDK use for omitted parameters in `chat.completions.create()`, and why?',
        back: 'It uses `NotGiven = NOT_GIVEN` (union `Optional[...] | NotGiven = NOT_GIVEN`) to distinguish parameters omitted by the caller from parameters explicitly passed as `None`.',
        mentalHook: 'NotGiven != None: Omission vs. Explicit Null.',
      },
      {
        id: 'dmma-ch05-fc2',
        category: 'architecture',
        front: 'What three input representations does Ollama’s `Client.chat(tools=...)` accept in its Python SDK?',
        back: 'A JSON schema dictionary (`Mapping[str, Any]`), an `ollama.Tool` (`SubscriptableBaseModel`) instance, or a Python `Callable` with Google-style docstrings that Ollama converts into a `Tool`.',
        mentalHook: 'Ollama Triple Threat: Dict, Tool Model, or Docstring Callable.',
      },
      {
        id: 'dmma-ch05-fc3',
        category: 'adaptation',
        front: 'How does `CommandTool` execute POSIX utilities under a different OS user?',
        back: 'Its `run()` method parses `kwargs["args"]` with `shlex.split()` and, if `self.user` is set, calls `sh.sudo("-u", self.user, self.command_name, *args)`.',
        mentalHook: 'shlex.split + sh.sudo("-u", user).',
      },
      {
        id: 'dmma-ch05-fc4',
        category: 'security',
        front: 'What safety check does `DeleteSession.run()` enforce before calling `self.engine.delete_session(session_id)`?',
        back: 'It verifies `if session_id == self.engine.get_session_id():` and returns an error refusing to delete the currently active session.',
        mentalHook: 'Never saw off the branch (session) you are sitting on.',
      },
      {
        id: 'dmma-ch05-fc5',
        category: 'evaluation',
        front: 'How does `TestRunner.run()` handle failing unit tests when invoking `sh.python("-m", "unittest", "discover", "-s", test_directory)`?',
        back: 'It catches `sh.ErrorReturnCode` and returns `{"stdout": e.stdout.decode("utf-8"), "stderr": e.stderr.decode("utf-8")}` instead of crashing the agent loop.',
        mentalHook: 'Catch ErrorReturnCode -> Return decoded stdout/stderr dict.',
      },
      {
        id: 'dmma-ch05-fc6',
        category: 'foundation',
        front: 'What are the four fields of OpenAI’s `FunctionDefinition` model in the Chat Completions API?',
        back: '`name: str` (max 64 chars), `description: Optional[str]`, `parameters: Optional[FunctionParameters]` (`Dict[str, object]`), and `strict: Optional[bool]`.',
        mentalHook: 'Name, Description, Parameters dict, Strict flag.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch05-feyn1',
        conceptTitle: 'Why Echo Inherits from Tool Instead of CommandTool',
        prompt:
          'Explain to a junior backend engineer why AI-6’s `Pwd`, `Ls`, and `Awk` tools inherit from `CommandTool`, whereas `Echo` inherits directly from `Tool` and uses `mkdir`/`tee` under `sudo`.',
        rubricChecklist: [
          'Explains that `CommandTool` executes binaries directly via the `sh` library using `shlex.split(kwargs["args"])` without invoking a shell interpreter.',
          'Identifies that creating or overwriting files with `echo "text" > file` relies on shell output redirection (`>`), which `CommandTool` does not support.',
          'Describes how `Echo(Tool)` replaces the generic `args` string with explicit `file_path` and `content` parameters.',
          'Contrasts the two execution paths in `Echo.run()`: native Python `os.makedirs` + `open()` when `self.user is None` versus `sh.sudo("-u", self.user, "mkdir", "-p", ...)` and `sh.sudo("-u", self.user, "tee", ..., _in=content)` for user isolation.',
        ],
        modelExplanation:
          '`CommandTool` runs binaries directly through Python’s `sh` library after splitting arguments with `shlex.split()`. Because no shell interpreter (like `bash`) parses the command, shell redirection operators such as `>` are passed as literal string arguments rather than writing to a file. To allow the LLM to create and overwrite files safely, `Echo` subclasses `Tool` directly with `file_path` and `content` parameters. When running as the current user, it uses `os.makedirs()` and `open(filename, "w")`; when configured with a dedicated `self.user`, it pipes `content` into `sh.sudo("-u", self.user, "tee", filename, _in=content, _out=os.devnull)` after creating parent directories.',
      },
      {
        id: 'dmma-ch05-feyn2',
        conceptTitle: 'Closed-Loop Self-Modification via TestRunner and Bootstrap',
        prompt:
          'Walk through the exact sequence of tools and OS mechanisms AI-6 uses to add a new capability to its own codebase, verify it, and activate it without human restarts.',
        rubricChecklist: [
          'Names the inspection and mutation tools (`ls`, `cat`, `echo`, `sed`, `awk`, `patch`) used to read existing base classes and write the new tool and unit test files.',
          'Explains how `python_test_runner` runs `python -m unittest discover -s <dir>` and captures `sh.ErrorReturnCode` so the agent can iterate until `stderr` has no failures.',
          'Details how `Bootstrap.run()` inspects `sys.modules["__main__"]` (`__spec__` vs. `__file__`) to reconstruct the exact startup command.',
          'Explains how `os.execv(sys.executable, args)` replaces the current process image in-place while persistent sessions allow the restarted agent to resume context.',
        ],
        modelExplanation:
          'First, AI-6 inspects its own architecture using `ls` and `cat`, then writes the new tool class and its unit test file using `echo` (or modifies existing files with `sed`, `awk`, and `patch`). Second, it invokes `python_test_runner`, which executes `python -m unittest discover -s <test_directory>` and returns `stdout` and `stderr` dicts even if `sh.ErrorReturnCode` is raised, letting the LLM fix bugs iteratively. Once tests pass, AI-6 calls `bootstrap`, which checks `sys.modules["__main__"].__spec__` to determine whether to launch via `-m module` or script path, and calls `os.execv(sys.executable, args)` to replace the running process image with the updated code.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-tool-abc',
        label: 'AI-6 Tool & Parameter Schema',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Provider-agnostic `@dataclass(slots=True) Tool(ABC)` with `name`, `description`, `parameters: list[Parameter]`, `required: set[str]`, `configure()`, and `run()`.',
        whyItMatters:
          'Acts as the superset intermediate representation that decouples tool authoring from OpenAI and Ollama SDK specifications.',
      },
      {
        id: 'dmma-provider-tool-specs',
        label: 'OpenAI & Ollama Tool Specifications',
        category: 'adaptation',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Vendor-specific Python SDK tool schemas including OpenAI `ChatCompletionToolParam` (`FunctionDefinition`, `tool_choice`) and Ollama `Tool(SubscriptableBaseModel)`.',
        whyItMatters:
          'Understanding their structural quirks explains why AI-6 must maintain its own `required` parameter set and translation layer.',
      },
      {
        id: 'dmma-command-tool',
        label: 'CommandTool POSIX Wrapper',
        category: 'architecture',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Base class derived from `Tool` that wraps any CLI binary with a single `args` string parsed via `shlex.split()` and executed via `sh` or `sh.sudo`.',
        whyItMatters:
          'Enables 5-line implementations of powerful CLI utilities (`pwd`, `ls`, `awk`, `gh`) with optional OS-user privilege separation.',
      },
      {
        id: 'dmma-echo-file-tool',
        label: 'Echo File-Writing Tool',
        category: 'security',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Direct `Tool` subclass accepting `file_path` and `content` that writes files via Python `open()` or `sudo -u <user> tee`.',
        whyItMatters:
          'Circumvents the lack of shell output redirection in `CommandTool` without exposing raw shell execution.',
      },
      {
        id: 'dmma-self-mod-bootstrap',
        label: 'TestRunner & Bootstrap Execv Loop',
        category: 'evaluation',
        chapterNumber: 5,
        importance: 1,
        definition:
          'Pairing of `python_test_runner` (`unittest discover`) and `bootstrap` (`os.execv(sys.executable, args)`) for self-testing and in-place process restart.',
        whyItMatters:
          'Closes the self-improvement loop so AI-6 can modify its own code, verify unit tests, and reload its process image.',
      },
      {
        id: 'dmma-memory-claude-tools',
        label: 'Session Memory & Claude API Tools',
        category: 'data',
        chapterNumber: 5,
        importance: 2,
        definition:
          'Engine-delegating session tools (`list_sessions`, `load_session`, `get_session_id`, `delete_session`) and the configurable `Claude` cross-LLM tool.',
        whyItMatters:
          'Allows the agent to manage persistent multi-session state safely and consult secondary frontier LLMs mid-workflow.',
      },
    ],
    edges: [
      {
        source: 'dmma-tool-abc',
        target: 'dmma-provider-tool-specs',
        relationship: 'optimizes',
        explanation:
          '`Tool(ABC)` provides a unified superset schema with explicit `required` sets that translates cleanly into both OpenAI and Ollama SDK formats.',
      },
      {
        source: 'dmma-tool-abc',
        target: 'dmma-command-tool',
        relationship: 'prerequisite_for',
        explanation:
          '`CommandTool` inherits from `Tool` and specializes it with a single required `args` parameter for POSIX CLI execution.',
      },
      {
        source: 'dmma-echo-file-tool',
        target: 'dmma-command-tool',
        relationship: 'trades_off_with',
        explanation:
          '`Echo` bypasses `CommandTool` to implement direct file writing and `sudo tee` because `CommandTool` cannot perform shell `>` redirection.',
      },
      {
        source: 'dmma-echo-file-tool',
        target: 'dmma-self-mod-bootstrap',
        relationship: 'prerequisite_for',
        explanation:
          'Creating and modifying source files via `Echo` and CLI editors precedes verifying changes with `TestRunner` and restarting via `Bootstrap`.',
      },
      {
        source: 'dmma-tool-abc',
        target: 'dmma-memory-claude-tools',
        relationship: 'part_of',
        explanation:
          'Both the Engine-delegating session memory tools and the `configure()`-driven `Claude` SDK client implement the `Tool` contract.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 12,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 5: OpenAI & Ollama Python SDK tool specs, AI-6 Tool/Parameter schema, CommandTool, Pwd/Ls/Awk, Echo, TestRunner, Bootstrap execv, all 4 Memory tools, interactive Github CLI tool creation, and manual Claude tool implementation.',
  },
};

export const dmmaCh06Mastery: ChapterMastery = {
  chapterNumber: 6,
  chapterId: 'ch06',
  title: 'Creating Chat Interfaces Using Slack and Chainlit',
  subtitle:
    'Human-in-the-loop autonomy controls, multi-channel Slack Bolt threading, Chainlit runtime widgets, and agent UI observability',
  readingTimeMinutes: 8,
  sourceWordCount: 9249,
  executiveThesis:
    'Agentic user interfaces must bridge autonomous multi-step execution and human oversight by balancing real-time visibility, interruptibility, role-specific debugging telemetry, and explicit permission boundaries. AI-6 demonstrates this across two complementary frontends: a multi-user Slack Bolt bot that isolates state via per-channel `Engine` instances while nesting verbose tool calls inside message threads, and a single-user Chainlit web UI that exposes live token streaming (`stream_token`) alongside dynamic model and tool-toggle widgets (`ChatSettings`). Production agent UIs extend these patterns with dry-run confirmations, turn-based trace spans, and environment-interpolated configuration.',
  paradigmShift: {
    oldWay:
      'Opaque Request-Response Chatboxes: Treat the UI as a passive text input/output pipe that blocks until the agent finishes or silently fails.',
    newWay:
      'Transparent, Interruptible Collaboration Surfaces: Stream live token chunks, isolate tool-call traces into threads or collapsible panels, and expose runtime permission and tool controls.',
    whyItChanged:
      'Long-running autonomous loops can burn token budgets, choose suboptimal tools (such as `cat` over `grep`), or execute destructive commands unless humans can observe intermediate steps and intervene.',
  },
  customDiagrams: [
    {
      id: 'dmma-ch06-svg-slack',
      title: 'AI-6 Slack Bolt Multi-Channel & Threaded Tool Architecture',
      subtitle:
        'SocketMode event routing, per-channel Engine isolation, live chat_update streaming, and threaded tool telemetry',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh06Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="dmmaSlkCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaSlkAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="dmmaSlkEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#dmmaCh06Bg1)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">SLACK BOLT MULTI-CHANNEL ENGINE &amp; THREADED TOOL DISPATCH</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Isolating conversation state per channel while keeping main channels clean via threaded tool callbacks</text>

  <!-- Left: Slack Workspace Channels -->
  <rect x="28" y="74" width="210" height="316" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="44" y="98" fill="#38bdf8" font-size="12" font-weight="700">Slack Workspace</text>
  <text x="44" y="114" fill="#94a3b8" font-size="9.5">SocketModeHandler(app, app_token)</text>

  <rect x="42" y="128" width="182" height="68" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="54" y="146" fill="#10b981" font-size="10.5" font-weight="700">#ai-6-test (Auto-Joined)</text>
  <text x="54" y="162" fill="#e2e8f0" font-size="9.5">Prefix: "ai-6-" in ai6_channels</text>
  <text x="54" y="178" fill="#94a3b8" font-size="9">Processes ALL user messages</text>

  <rect x="42" y="210" width="182" height="68" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="54" y="228" fill="#fbbf24" font-size="10.5" font-weight="700">#some-channel (Invited)</text>
  <text x="54" y="244" fill="#e2e8f0" font-size="9.5">Requires mention: &lt;@bot_id&gt;</text>
  <text x="54" y="260" fill="#94a3b8" font-size="9">Ignores unmentioned chatter</text>

  <rect x="42" y="294" width="182" height="80" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1.2" />
  <text x="54" y="312" fill="#c084fc" font-size="10.5" font-weight="700">Message UX Separation</text>
  <text x="54" y="328" fill="#e2e8f0" font-size="9.5">• Main msg: chat_update(ts)</text>
  <text x="54" y="344" fill="#e2e8f0" font-size="9.5">• Thread (thread_ts=latest_ts):</text>
  <text x="54" y="360" fill="#94a3b8" font-size="9">  _Tool call: 'ls' / 'cat'_</text>

  <!-- Center: Bolt Event & Channel Router -->
  <rect x="282" y="74" width="236" height="316" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  <text x="400" y="98" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">@app.event("message")</text>
  <text x="400" y="114" fill="#94a3b8" font-size="9.5" text-anchor="middle">handle_message(message, say, ack, client)</text>

  <rect x="298" y="128" width="204" height="54" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="400" y="146" fill="#e2e8f0" font-size="10" font-weight="600" text-anchor="middle">1. Filter &amp; Acknowledge</text>
  <text x="400" y="162" fill="#94a3b8" font-size="9" text-anchor="middle">ack(); skip bot_id or non-target</text>

  <rect x="298" y="196" width="204" height="58" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1" />
  <text x="400" y="214" fill="#10b981" font-size="10" font-weight="600" text-anchor="middle">2. get_or_create_engine(ch_id)</text>
  <text x="400" y="230" fill="#e2e8f0" font-size="9" text-anchor="middle">engines[channel_id] lookup</text>
  <text x="400" y="244" fill="#94a3b8" font-size="8.5" text-anchor="middle">utils.create_channel_engine(config.toml)</text>

  <rect x="298" y="268" width="204" height="106" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1" />
  <text x="400" y="286" fill="#fbbf24" font-size="10" font-weight="600" text-anchor="middle">3. Placeholder &amp; Callbacks</text>
  <text x="310" y="304" fill="#e2e8f0" font-size="9" font-family="monospace">postMessage(text="...") -&gt; ts</text>
  <text x="310" y="322" fill="#38bdf8" font-size="9" font-family="monospace">handle_chunk(chunk):</text>
  <text x="310" y="336" fill="#94a3b8" font-size="8.5" font-family="monospace">  chat_update(ts=latest_ts)</text>
  <text x="310" y="352" fill="#c084fc" font-size="9" font-family="monospace">partial(handle_tool_call,</text>
  <text x="310" y="366" fill="#94a3b8" font-size="8.5" font-family="monospace">  client, channel_id)</text>

  <!-- Right: Isolated Per-Channel AI-6 Engines -->
  <rect x="562" y="74" width="210" height="316" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="667" y="98" fill="#10b981" font-size="12" font-weight="700" text-anchor="middle">Per-Channel AI-6 Engines</text>
  <text x="667" y="114" fill="#94a3b8" font-size="9.5" text-anchor="middle">Isolated memory &amp; context windows</text>

  <rect x="578" y="130" width="178" height="72" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
  <text x="667" y="150" fill="#e2e8f0" font-size="10.5" font-weight="700" text-anchor="middle">Engine [C01: #ai-6-test]</text>
  <text x="667" y="166" fill="#94a3b8" font-size="9" text-anchor="middle">Dedicated session &amp; memory_dir</text>
  <text x="667" y="182" fill="#10b981" font-size="9" font-family="monospace" text-anchor="middle">engine.stream_message()</text>

  <rect x="578" y="216" width="178" height="72" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="667" y="236" fill="#e2e8f0" font-size="10.5" font-weight="700" text-anchor="middle">Engine [C02: #some-channel]</text>
  <text x="667" y="252" fill="#94a3b8" font-size="9" text-anchor="middle">Separate conversation history</text>
  <text x="667" y="268" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle">No cross-channel pollution</text>

  <rect x="578" y="302" width="178" height="72" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2" />
  <text x="667" y="320" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Config._interpolate_env_vars</text>
  <text x="667" y="336" fill="#e2e8f0" font-size="9" text-anchor="middle">Resolves \${VAR} &amp; \$VAR in</text>
  <text x="667" y="352" fill="#94a3b8" font-size="9" text-anchor="middle">config.toml from .env secrets</text>

  <!-- Flow Arrows -->
  <path d="M 238 162 L 280 162" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaSlkCyan)" />
  <path d="M 502 225 L 558 175" fill="none" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaSlkEmerald)" />
  <path d="M 558 195 L 502 315" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaSlkAmber)" />
  <path d="M 298 334 L 228 334" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaSlkAmber)" />
</svg>`,
      bierutCaption:
        'AI-6’s Slack frontend pairs per-channel Engine instances with two-tier message rendering: streaming tokens update the parent message in-place while tool invocations post into `thread_ts=latest_ts`.',
      annotations: [
        {
          step: '1',
          label: 'Dual-Mode Channel Filtering',
          explanation:
            'The bot automatically joins and processes every message in `ai-6-*` channels, but requires an explicit `<@bot_user_id>` mention in invited channels.',
        },
        {
          step: '2',
          label: 'Per-Channel Engine Dictionary',
          explanation:
            '`get_or_create_engine(channel_id)` maintains isolated `Engine` instances so multi-channel teams never pollute each other’s context windows.',
        },
        {
          step: '3',
          label: 'In-Place Streaming + Threaded Tools',
          explanation:
            '`handle_chunk` calls `chat_update(ts=latest_ts)` for live prose while `handle_tool_call` posts tool names, arguments, and outputs to `thread_ts=latest_ts`.',
        },
      ],
    },
    {
      id: 'dmma-ch06-svg-chainlit',
      title: 'Chainlit Event Lifecycle & Runtime Control Loop',
      subtitle:
        'Managing dynamic LLM switching, live tool-toggle switches, and async-to-sync token streaming',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh06Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="dmmaClCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaClAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="dmmaClGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
    </marker>
  </defs>
  <rect width="800" height="420" rx="12" fill="url(#dmmaCh06Bg2)" />
  <text x="28" y="32" fill="#f8fafc" font-size="15" font-weight="700">CHAINLIT WEB UI LIFECYCLE &amp; RUNTIME CAPABILITY TOGGLING</text>
  <text x="28" y="50" fill="#94a3b8" font-size="11.5">Bridging SimpleNamespace state across @on_chat_start, @on_settings_update, and @on_message</text>

  <!-- Top Row: 3 Lifecycle Hooks -->
  <rect x="28" y="76" width="232" height="132" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="42" y="98" fill="#38bdf8" font-size="11.5" font-weight="700">1. @cl.on_chat_start</text>
  <text x="42" y="116" fill="#e2e8f0" font-size="10">Calls setup_settings():</text>
  <text x="42" y="134" fill="#94a3b8" font-size="9.5">• input_widget.Select (LLM Model)</text>
  <text x="42" y="150" fill="#94a3b8" font-size="9.5">• input_widget.Switch ("tool:*")</text>
  <text x="42" y="166" fill="#94a3b8" font-size="9.5">• cl.ChatSettings(...).send()</text>
  <text x="42" y="186" fill="#38bdf8" font-size="9">Sends welcome cl.Message</text>

  <rect x="284" y="76" width="232" height="132" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="298" y="98" fill="#fbbf24" font-size="11.5" font-weight="700">2. @cl.on_settings_update</text>
  <text x="298" y="116" fill="#e2e8f0" font-size="10">User edits Settings cog panel:</text>
  <text x="298" y="134" fill="#94a3b8" font-size="9.5">• Updates app_config.selected_model</text>
  <text x="298" y="150" fill="#94a3b8" font-size="9.5">• Strips TOOL_PREFIX ("tool:")</text>
  <text x="298" y="166" fill="#94a3b8" font-size="9.5">• Mutates enabled_tools[name] = bool</text>
  <text x="298" y="186" fill="#fbbf24" font-size="9">Immediate runtime capability gating</text>

  <rect x="540" y="76" width="232" height="132" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="554" y="98" fill="#10b981" font-size="11.5" font-weight="700">3. @cl.on_message</text>
  <text x="554" y="116" fill="#e2e8f0" font-size="10">Streams response tokens:</text>
  <text x="554" y="134" fill="#94a3b8" font-size="9.5">• msg = cl.Message(content="")</text>
  <text x="554" y="150" fill="#94a3b8" font-size="9.5">• on_chunk -&gt; msg.stream_token()</text>
  <text x="554" y="166" fill="#94a3b8" font-size="9.5">• Bridges sync via cl.run_sync()</text>
  <text x="554" y="186" fill="#10b981" font-size="9">Finalizes with await msg.update()</text>

  <!-- Center Shared State Box -->
  <rect x="140" y="244" width="520" height="146" rx="10" fill="#0f172a" stroke="#c084fc" stroke-width="2" />
  <text x="400" y="268" fill="#f8fafc" font-size="12.5" font-weight="700" text-anchor="middle">SHARED RUNTIME STATE: app_config (SimpleNamespace) &amp; AI-6 Engine</text>
  <text x="164" y="292" fill="#e2e8f0" font-size="10" font-family="monospace">selected_model = engine.default_model_id</text>
  <text x="164" y="310" fill="#e2e8f0" font-size="10" font-family="monospace">available_models = list(engine.model_provider_map.keys())</text>
  <text x="164" y="328" fill="#e2e8f0" font-size="10" font-family="monospace">enabled_tools = {tool: True for tool in engine.tool_dict}</text>
  <line x1="164" y1="342" x2="636" y2="342" stroke="#334155" stroke-width="1" />
  <text x="164" y="362" fill="#10b981" font-size="10" font-family="monospace">engine.stream_message(content, selected_model, on_chunk_func,</text>
  <text x="164" y="378" fill="#10b981" font-size="10" font-family="monospace">  available_tool_ids=[k for k, v in enabled_tools.items() if v])</text>

  <!-- Connectors -->
  <path d="M 200 244 L 160 208" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaClCyan)" />
  <path d="M 400 208 L 400 240" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaClAmber)" />
  <path d="M 580 244 L 640 208" fill="none" stroke="#10b981" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaClGreen)" />
</svg>`,
      bierutCaption:
        'Chainlit turns static backend configurations into interactive runtime controls by binding `SimpleNamespace` state to UI `Select` and `Switch` widgets that filter `available_tool_ids` on every turn.',
      annotations: [
        {
          step: '1',
          label: 'Widget Hydration from Engine Maps',
          explanation:
            '`setup_settings()` dynamically populates `Select` and `Switch` widgets from `engine.model_provider_map` and `engine.tool_dict`.',
        },
        {
          step: '2',
          label: 'Live Tool Restriction',
          explanation:
            'Toggling off `tool:ls` and `tool:git` updates `app_config.enabled_tools`, immediately excluding them from `available_tool_ids` on the next prompt.',
        },
        {
          step: '3',
          label: 'Sync-to-Async Streaming Bridge',
          explanation:
            'Because `engine.stream_message` invokes `on_chunk_func` synchronously, Chainlit wraps the async `msg.stream_token(chunk)` inside `cl.run_sync()`.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch06-mm1',
      name: 'The Autonomy-Oversight Slider',
      tagline: 'Calibrate UI friction to task risk, prompt maturity, and user role',
      naiveIntuition:
        'Either let agents run 100% autonomously in the background or force the user to click "Continue" after every single step.',
      firstPrinciplesReality:
        'Early exploratory workflows require iterative prompt refinement and tight observation, whereas mature workflows benefit from autonomous execution bounded by smart pause conditions (step limits, token budgets, or uncertainty triggers) and declarative permission lists (such as Claude Code’s `.claude/settings.local.json`). In addition, end users need clean high-level progress while developers require full tool-call and external cluster telemetry.',
      howToApply:
        'Auto-approve read-only and pre-vetted commands via configuration allowlists, trigger interactive confirmations only for destructive or unpermitted actions, and separate end-user views from operator debug views.',
    },
    {
      id: 'dmma-ch06-mm2',
      name: 'Two-Tier Threaded Transparency',
      tagline: 'Keep primary conversation streams clean while nesting full tool traces in threads',
      naiveIntuition:
        'Dump every raw tool call, JSON argument payload, and stdout blob directly into the main chat window—or hide tool calls completely.',
      firstPrinciplesReality:
        'Hiding tool calls prevents engineers from diagnosing inefficient LLM choices (such as calling `cat` on every file instead of `grep`, or substituting `sed` after promising `grep`), while dumping them inline ruins readability for collaborators. Nesting tool invocations inside a Slack message thread (`thread_ts=latest_ts`) or an expandable side panel preserves both clean narrative flow and deep auditability.',
      howToApply:
        'Stream final user-facing synthesis into the top-level message while routing `on_tool_call_func` callbacks into a child thread or collapsible trace inspector.',
    },
    {
      id: 'dmma-ch06-mm3',
      name: 'Per-Channel Engine Isolation',
      tagline: 'Bind one stateful Engine instance per collaborative channel',
      naiveIntuition:
        'Instantiate a single global `Engine` in a multi-channel Slack bot and pass messages from all channels into it.',
      firstPrinciplesReality:
        'Sharing one `Engine` across multiple Slack channels merges unrelated team conversations into a single session history, rapidly exhausting the LLM context window and causing cross-channel hallucinations. Indexing `engines[channel_id]` ensures each channel gets its own session memory and context lifecycle.',
      howToApply:
        'Use a `get_or_create_engine(channel_id)` factory backed by a dictionary of channel-keyed `Engine` instances initialized with channel-specific memory paths.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch06-sec1',
      sectionNumber: '6.1',
      title: 'Human-in-the-Loop UI Mechanics: Visibility, Interruptibility, Debugging, and Trust',
      subtitle:
        'Balancing autonomous execution with pause checkpoints, role-based telemetry, and permission boundaries',
      coreMechanism:
        'Agentic UIs serve four foundational functions beyond simple text input/output: real-time visibility, interruptibility, behavioral debugging, and trust building. During iterative workflow teaching or long-running jobs (such as analyzing three months of movie releases), live status updates let users consume partial results or steer the agent early. Interruptibility can be enforced via hard ceilings (time limits, operation counts, or token budgets) or prompt-driven checkpoints ("pause after 10 steps, 50,000 tokens, or when unable to make progress"), avoiding the tedium of pressing "continue" on every routine step.\n\nWhen agents fail or run inefficiently due to vague prompts, missing tools, or model mismatches, developers need full conversation histories, tool arguments, and external system telemetry (e.g., Kubernetes logs), whereas end users need concise status abstractions. As demonstrated by Claude Code (`Esc` to interrupt, `.claude/settings.local.json` allowlists for `unittest` and `rg`, and explicit permission prompts before `pip install sh` when the virtualenv merely needed activation), explicit boundaries and uncertainty signaling build lasting user trust.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Expose Live Progress and Partial Results',
          detail:
            'Stream ongoing actions, elapsed time, and token/tool counters so users can evaluate trajectory before completion.',
        },
        {
          step: '2',
          title: 'Enforce Permission Allowlists and Pause Gates',
          detail:
            'Auto-run safe allowlisted commands (`ls`, `cat`, `rg`, test suites) while pausing for human confirmation on package installs, overwrites, or threshold breaches.',
        },
        {
          step: '3',
          title: 'Surface Role-Appropriate Diagnostic Traces',
          detail:
            'Provide high-level summaries to end users while exposing raw tool arguments, LLM turns, and external telemetry to operators.',
        },
      ],
      keyTakeaways: [
        'Hard step limits keep users in control but cause "continue-button fatigue" unless paired with autonomous exception-based or milestone-based reporting.',
        'Claude Code’s `.claude/settings.local.json` illustrates how persistent command allowlists prevent permission fatigue while catching unnecessary environment mutations like installing `sh` outside a virtualenv.',
        'Users forgive imperfect agent reasoning when the UI exposes why an error occurred so they can refine their prompt.',
      ],
      commonPitfalls: [
        'Serving the same verbose debug UI (raw tool JSON and token counters) to non-technical end users and system developers alike.',
        'Allowing agents to install system packages without confirmation when a missing module error is actually caused by an unactivated virtual environment.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch06_plate.png',
          originalLabel:
            'Chapter 6 Opening Blueprint: Creating Chat Interfaces Using Slack and Chainlit (Page 198)',
          bierutTitle: 'Balance Agent Autonomy with Real-Time Human Oversight and Control',
          editorialAnalysis:
            'The Chapter 6 opening blueprint frames the UI as the governance bridge between human intent and autonomous backend loops. Rather than treating chat interfaces as cosmetic wrappers, the architecture elevates visibility, interruptibility, and debugging transparency to core system requirements.',
          keyTakeaways: [
            'Collaborative teams benefit from multi-channel Slack bots, while individual workflows thrive in rich Chainlit web UIs.',
            'Trust emerges from predictable permission boundaries combined with transparent intermediate tool traces.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch06-sec2',
      sectionNumber: '6.2',
      title: 'Collaborative Multi-Channel Workflows with the AI-6 Slack Bolt Bot',
      subtitle:
        'Environment interpolation, SocketMode event handling, per-channel engines, and threaded tool debugging',
      coreMechanism:
        'The AI-6 Slack bot (`frontend/slack/app.py`, launched via `./ai6.sh slack`) uses the Slack Bolt Python framework (`App` and `SocketModeHandler`) configured with an App token (`connections:write`), a Bot token, and a `config.toml` file. To keep secrets out of version control, `Config._interpolate_env_vars()` recursively resolves `${VAR}` (via regex `\\${([a-zA-Z0-9_]+)}`) and `$VAR` placeholders across strings, dicts, and lists using environment variables loaded from `.env`.\n\nOn startup, `join_channel()` queries `conversations_list()` and joins the first channel prefixed with `ai-6-` (storing it in `ai6_channels`), while `leave_channels()` cleanly exits all joined channels in the `finally` block. Incoming messages trigger `@app.event("message") handle_message()`, which calls `ack()`, ignores bot messages, and processes messages either in `ai6_channels` or where `<@{bot_user_id}>` is mentioned. It retrieves an isolated engine via `get_or_create_engine(channel_id)`, posts a `"..."` placeholder (`chat_postMessage`) to capture `latest_ts`, streams tokens in-place via `chat_update()`, and binds `partial(handle_tool_call, client, channel_id)` to post every tool call into `thread_ts=latest_ts`—exposing suboptimal LLM behaviors like calling `cat` on every file instead of `grep`.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Interpolate Secrets and Initialize SocketMode',
          detail:
            'Load `.env` via `dotenv`, interpolate `${VAR}` in `config.toml`, auto-join `ai-6-*` channels, and start `SocketModeHandler(app, app_token)`.',
        },
        {
          step: '2',
          title: 'Route by Channel Prefix or @Mention',
          detail:
            'Acknowledge the event with `ack()`, filter out `bot_id` messages, and look up the channel’s dedicated `Engine` in `engines[channel_id]`.',
        },
        {
          step: '3',
          title: 'Stream Main Response and Thread Tool Calls',
          detail:
            'Post `"..."` to get `latest_ts`, append chunks via `chat_update(ts=latest_ts)`, and log tool executions to `thread_ts=latest_ts`.',
        },
      ],
      keyTakeaways: [
        'Posting tool calls to `thread_ts=latest_ts` keeps the main channel readable while allowing developers to spot N+1 `cat` anti-patterns that would overflow context windows on large files.',
        '`get_or_create_engine(channel_id)` prevents context-window exhaustion and cross-channel state leakage in multi-user workspaces.',
        '`Config._interpolate_env_vars()` enables safe version-controlled `config.toml` files by substituting `${OPENAI_API_KEY}` and `${ANTHROPIC_API_KEY}` at runtime.',
      ],
      commonPitfalls: [
        'Relying only on total tool-call counts rather than inspecting threaded tool arguments, which hides inefficient `cat` loops or discrepancy between declared (`grep`) and executed (`sed`) tools.',
        'Using a single global `Engine` across Slack channels, causing unrelated conversations to interleave in memory.',
      ],
    },
    {
      id: 'dmma-ch06-sec3',
      sectionNumber: '6.3',
      title: 'Single-User Web UIs with Chainlit and Production Interface Best Practices',
      subtitle:
        'Dynamic ChatSettings widgets, token-level streaming, dry-run safeguards, and distributed tracing',
      coreMechanism:
        'For rich single-user workflows (such as generating and refining a `.github/workflows/backend-tests.yml` CI pipeline with `push` triggers and `actions/checkout@v4` / `actions/setup-python@v5`), AI-6 provides a Chainlit web app (`frontend/chainlit/app.py` at `http://localhost:8000`). At startup, `engine_utils.create_from_config("config.yaml")` initializes the engine, and `app_config = SimpleNamespace(selected_model, available_models, enabled_tools)` tracks UI state. The `@cl.on_chat_start` hook runs `setup_settings()`, rendering a `cl.input_widget.Select` for models and `cl.input_widget.Switch` toggles (`id=f"tool:{tool_name}"`) via `cl.ChatSettings().send()`. When modified, `@cl.on_settings_update` updates `app_config` in real time.\n\nWhen a user sends a prompt, `@cl.on_message` sends an empty `cl.Message(content="")`, streams sub-word tokens (e.g., `"entw"` + `"ine"`) via `cl.run_sync(on_chunk(chunk))` calling `await msg.stream_token(chunk)`, and passes only enabled tools (`available_tool_ids=[k for k, v in app_config.enabled_tools.items() if v]`) before calling `await msg.update()`. Productionizing such interfaces requires six best practices: clarifying agent scope, adding confirmations/dry-runs/abort buttons, designing for turn-based transparency, surfacing tool feedback loops, exposing runtime configurability, and instrumenting logs, metrics, and span-per-turn distributed tracing.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Initialize Engine and Hydrate ChatSettings',
          detail:
            'Load `config.yaml`, populate `app_config` (`SimpleNamespace`), and send `Select` and `Switch` widgets in `@cl.on_chat_start`.',
        },
        {
          step: '2',
          title: 'Mutate Active Model and Tool Set on the Fly',
          detail:
            'Capture `@cl.on_settings_update` events to switch `selected_model` or disable specific tools (like `ls` and `git`) mid-session.',
        },
        {
          step: '3',
          title: 'Stream Tokens and Instrument Production Guardrails',
          detail:
            'Bridge synchronous `engine.stream_message` chunks to `msg.stream_token()` via `cl.run_sync()`, and layer dry-run confirmations and distributed trace spans.',
        },
      ],
      keyTakeaways: [
        'Passing `available_tool_ids` filtered from `app_config.enabled_tools` enforces hard capability gating—disabling `ls` and `git` immediately prevents the LLM from listing files while leaving `pwd` active.',
        'Chainlit intentionally omits `on_tool_call_func` in the minimal app to avoid main-chat clutter, pointing toward a dedicated collapsible side panel for tool traces.',
        'Production agent UIs must combine dry-run simulations, confirmation modals for destructive actions, an explicit Abort button, and span-per-turn distributed tracing.',
      ],
      commonPitfalls: [
        'Accepting LLM-generated CI/CD workflows without human-in-the-loop review (e.g., missing `push` branch triggers or using outdated `actions/checkout@v2`).',
        'Calling async `msg.stream_token(chunk)` directly inside a synchronous engine callback without wrapping it in `cl.run_sync()`.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Agentic Interface Selection: CLI vs. Slack Bolt vs. Chainlit Web UI',
      description:
        'Comparing the three AI-6 frontend architectures across collaboration topology, tool-call visibility, runtime configurability, and operational overhead.',
      headers: [
        'Dimension',
        'Chatbot CLI (frontend.cli)',
        'Slack Bolt Bot (frontend.slack)',
        'Chainlit Web UI (frontend.chainlit)',
      ],
      rows: [
        [
          'Primary User Topology',
          'Single developer in local terminal',
          'Multi-user teams across shared channels',
          'Single user in rich web browser session',
        ],
        [
          'State & Engine Isolation',
          'Single process, local session files',
          'Per-channel Engine dict (engines[ch_id])',
          'Per-app Engine with SimpleNamespace config',
        ],
        [
          'Tool Call Visibility',
          'Inline terminal stdout trace',
          'Clean main message + nested reply thread',
          'Hidden by default (requires custom side panel)',
        ],
        [
          'Runtime Model & Tool Control',
          'Static config file at startup',
          'Static config.toml + .env per channel',
          'Live UI Select dropdown & Switch toggles',
        ],
        [
          'Streaming Mechanism',
          'Terminal stdout printing',
          'Placeholder "..." + client.chat_update(ts)',
          'Empty cl.Message + msg.stream_token(chunk)',
        ],
      ],
      verdictRule:
        'Choose Slack Bolt when multi-user team collaboration, channel notifications, and threaded tool auditing are primary requirements; choose Chainlit when single-user markdown rendering, live model switching, and interactive tool-toggle controls are required.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch06-scen1',
      title: 'Context Window Exhaustion from Naive File Inspection in Slack',
      roleAndContext:
        'Lead AI Engineer reviewing team interactions with the AI-6 Slack bot in `#ai-6-test`.',
      symptomOrFailure:
        'When asked which files in the repository contain the word `import`, the agent returns the right answer on small directories but suffers severe latency and context-window overflows on larger repositories.',
      naiveFixAndWhyItFails:
        'Switching to a model with a larger context window increases token cost without fixing the underlying O(N) full-file read anti-pattern.',
      firstPrinciplesSolution:
        'Inspect the Slack reply thread (`thread_ts=latest_ts`) generated by `handle_tool_call`, identify that the LLM ran `ls` followed by `cat` on every single file instead of `grep`, and refine the system prompt to prioritize search tools (`grep`) over full-file reads.',
      measurableOutcome:
        'Replaces N sequential `cat` tool calls with 1 search call, slashing token consumption by over 90% and preventing context-window truncation.',
    },
    {
      id: 'dmma-ch06-scen2',
      title: 'Cross-Channel Context Contamination in Multi-Team Slack Deployment',
      roleAndContext:
        'Backend Architect deploying a Slack Bolt agent across `#ai-6-devops` and `#ai-6-product` channels.',
      symptomOrFailure:
        'Engineers in `#ai-6-devops` notice the bot referencing product roadmap notes from `#ai-6-product` and hitting context token limits within minutes.',
      naiveFixAndWhyItFails:
        'Clearing the engine memory after every message prevents cross-channel leakage but destroys multi-turn conversational continuity within each channel.',
      firstPrinciplesSolution:
        'Implement `get_or_create_engine(channel_id)` backed by an `engines = {}` dictionary that invokes `utils.create_channel_engine(base_config_path, channel_id, env_file_path)` to provision an isolated `Engine` and memory directory per channel.',
      measurableOutcome:
        'Guarantees 100% session isolation between channels while preserving full multi-turn memory within each team’s channel.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch06-q1',
        scenarioPrompt:
          'In the AI-6 Slack bot (`frontend/slack/app.py`), how does `handle_message()` decide whether to process an incoming channel message?',
        options: [
          {
            label: 'A',
            text: 'It processes every message in every channel the bot belongs to, including messages from other bots.',
            isCorrect: false,
            explanation:
              '`handle_message()` explicitly skips empty messages and any message with `message.get("bot_id")`, and ignores unmentioned messages in non-`ai-6-` channels.',
          },
          {
            label: 'B',
            text: 'It skips empty or bot-authored messages, then processes the message only if `channel_id in ai6_channels` (channels prefixed with `ai-6-`) or if `<@{bot_user_id}>` is mentioned in the text.',
            isCorrect: true,
            explanation:
              'Dedicated `ai-6-*` channels process all human messages automatically, whereas other invited channels (like `#some-channel`) require an explicit `@AI-6` mention.',
          },
          {
            label: 'C',
            text: 'It only responds to slash commands (`/ai6`) registered via the Slack CLI.',
            isCorrect: false,
            explanation:
              'The AI-6 Slack bot listens to `@app.event("message")` over `SocketModeHandler` rather than slash commands.',
          },
          {
            label: 'D',
            text: 'It requires the user to react with a robot emoji before `SocketModeHandler` acknowledges the event.',
            isCorrect: false,
            explanation:
              '`ack()` is called immediately at the start of `handle_message()`, and filtering is based on channel prefix or user mention.',
          },
        ],
      },
      {
        id: 'dmma-ch06-q2',
        scenarioPrompt:
          'How does the AI-6 Slack bot implement streaming responses while keeping tool call telemetry out of the main channel view?',
        options: [
          {
            label: 'A',
            text: 'It posts an initial `"..."` message to capture `latest_ts`, updates that message in-place via `client.chat_update(channel, ts=latest_ts, text=last_message)` as chunks arrive, and posts tool calls as replies using `thread_ts=latest_ts`.',
            isCorrect: true,
            explanation:
              'Using `chat_update` with `latest_ts` streams the main answer in-place, while `handle_tool_call` passes `thread_ts=latest_ts` to `chat_postMessage` to nest tool executions in a thread.',
          },
          {
            label: 'B',
            text: 'It opens a private direct-message channel with the user to send tool calls and posts only the final string to the public channel.',
            isCorrect: false,
            explanation:
              'Tool calls are posted publicly in the message reply thread (`thread_ts=latest_ts`), not via direct messages.',
          },
          {
            label: 'C',
            text: 'It buffers all chunks in memory until `stream_message()` finishes and uploads tool logs as a `.zip` attachment.',
            isCorrect: false,
            explanation:
              'Chunks are streamed live to Slack via `chat_update()`, and tool calls are posted as formatted markdown text in the thread.',
          },
          {
            label: 'D',
            text: 'It uses Chainlit’s `cl.run_sync()` inside Slack Bolt to render collapsible HTML accordions.',
            isCorrect: false,
            explanation:
              'Slack uses `chat_update` and `thread_ts` via `slack_bolt`, whereas `cl.run_sync()` belongs to the Chainlit web frontend.',
          },
        ],
      },
      {
        id: 'dmma-ch06-q3',
        scenarioPrompt:
          'In the AI-6 Chainlit web UI (`frontend/chainlit/app.py`), a user opens the Settings panel and switches off the `Tool: ls` and `Tool: git` toggles. How does the application enforce this restriction on the very next message?',
        options: [
          {
            label: 'A',
            text: 'It deletes `ls.py` and `git.py` from `backend/tools` and calls `Bootstrap.run()` to restart the server.',
            isCorrect: false,
            explanation:
              'Toggling tools in Chainlit modifies in-memory session configuration (`app_config.enabled_tools`) without deleting files or restarting the process.',
          },
          {
            label: 'B',
            text: '`@cl.on_settings_update` strips `TOOL_PREFIX` (`"tool:"`) to set `app_config.enabled_tools[tool_name] = False`, and `@cl.on_message` passes `available_tool_ids=[k for k, v in app_config.enabled_tools.items() if v]` to `engine.stream_message()`.',
            isCorrect: true,
            explanation:
              'Filtering `available_tool_ids` on each `engine.stream_message()` call dynamically restricts which tools the LLM is allowed to see and invoke.',
          },
          {
            label: 'C',
            text: 'It appends `"Do not use ls or git"` to the user prompt while still sending all tool schemas to the LLM.',
            isCorrect: false,
            explanation:
              'Rather than relying on prompt instructions, AI-6 filters `available_tool_ids` at the engine API boundary.',
          },
          {
            label: 'D',
            text: 'It revokes `sudo` permissions for the current OS user in `.claude/settings.local.json`.',
            isCorrect: false,
            explanation:
              '`.claude/settings.local.json` is Claude Code’s terminal configuration, not Chainlit’s runtime tool-gating mechanism.',
          },
        ],
      },
      {
        id: 'dmma-ch06-q4',
        scenarioPrompt:
          'When Claude Code was asked to check whether all AI-6 unit tests were passing, it automatically ran `unittest discover` without asking, noticed `ModuleNotFoundError: No module named \'sh\'`, and paused to ask permission to install the `sh` package. What architectural lesson does the author draw from this interaction?',
        options: [
          {
            label: 'A',
            text: 'Agents should always be granted blanket permission to run `pip install` so they never pause during test runs.',
            isCorrect: false,
            explanation:
              'Granting blanket package-installation permission would have polluted the global Python environment; the pause prevented an unnecessary installation.',
          },
          {
            label: 'B',
            text: 'Pre-approved allowlists (`.claude/settings.local.json`) enable smooth autonomy for safe actions like running tests, while permission gates on risky actions let the human catch root-cause mistakes (activating the existing `venv` instead of reinstalling `sh`).',
            isCorrect: true,
            explanation:
              'The `sh` module was already installed inside AI-6’s virtual environment; the permission prompt gave the human operator the exact checkpoint needed to steer the agent to activate `venv`.',
          },
          {
            label: 'C',
            text: 'Unit tests should never be executed by an agentic UI because they consume too many tokens.',
            isCorrect: false,
            explanation:
              'Running unit tests automatically is a core strength of agentic coding workflows.',
          },
          {
            label: 'D',
            text: 'The `sh` library is incompatible with Python virtual environments and must be replaced with `subprocess`.',
            isCorrect: false,
            explanation:
              '`sh` works properly inside the virtual environment once `venv` is activated.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch06-fc1',
        category: 'security',
        front: 'How does `Config._interpolate_env_vars(value)` in AI-6 handle secrets in `config.toml` and `config.yaml`?',
        back: 'It recursively traverses strings, dicts, and lists, replacing `${VAR}` (via regex `\\${([a-zA-Z0-9_]+)}`) and `$VAR` prefixes with `os.environ.get(var_name, "")`.',
        mentalHook: 'Recursive ${VAR} & $VAR regex substitution across str/dict/list.',
      },
      {
        id: 'dmma-ch06-fc2',
        category: 'architecture',
        front: 'What two Slack tokens are required to run the AI-6 Slack Bolt app in Socket Mode?',
        back: 'An App-level token (`AI6_APP_TOKEN` with `connections:write` scope for `SocketModeHandler`) and a Bot token (`AI6_BOT_TOKEN` with channel/message OAuth scopes for `App(token=bot_token)`).',
        mentalHook: 'App Token opens the Socket; Bot Token posts the Messages.',
      },
      {
        id: 'dmma-ch06-fc3',
        category: 'architecture',
        front: 'What three lifecycle event decorators drive the AI-6 Chainlit application?',
        back: '`@cl.on_chat_start` (initializes `ChatSettings` widgets and welcome message), `@cl.on_message` (streams tokens via `stream_token`), and `@cl.on_settings_update` (updates `app_config` model and tool toggles).',
        mentalHook: 'Start -> Settings Update -> Message Stream.',
      },
      {
        id: 'dmma-ch06-fc4',
        category: 'optimization',
        front: 'Why does Chainlit’s `@cl.on_message` wrap `on_chunk(chunk)` inside `cl.run_sync()` when calling `engine.stream_message()`?',
        back: 'Because `engine.stream_message()` invokes `on_chunk_func` synchronously, whereas Chainlit’s `await msg.stream_token(chunk)` is an asynchronous coroutine.',
        mentalHook: 'cl.run_sync bridges sync Engine callbacks to async Chainlit UI.',
      },
      {
        id: 'dmma-ch06-fc5',
        category: 'security',
        front: 'What three UI safeguards does Chapter 6 recommend to prevent destructive agent tool executions in production?',
        back: 'Explicit user confirmation prompts for high-impact actions, dry-run simulation modes that preview planned actions without executing them, and a persistent "Abort" / cancel button.',
        mentalHook: 'Confirm, Dry-Run, Abort.',
      },
      {
        id: 'dmma-ch06-fc6',
        category: 'evaluation',
        front: 'How should distributed tracing be structured for multi-turn agentic AI conversations?',
        back: 'Each conversational turn should be represented as an individual trace span (capturing prompt, decisions, tool calls, latency, and retries), while a full trace encompasses the complete session or conversation.',
        mentalHook: 'One Span per Turn; One Trace per Session.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch06-feyn1',
        conceptTitle: 'Slack Bolt Streaming and Threaded Tool Call Architecture',
        prompt:
          'Explain to a full-stack engineer how the AI-6 Slack bot delivers real-time streaming responses across multiple team channels without cluttering the channel with tool outputs or mixing up conversation histories.',
        rubricChecklist: [
          'Explains how `get_or_create_engine(channel_id)` maintains a dictionary of channel-specific `Engine` instances so each channel has isolated memory.',
          'Describes the initial `client.chat_postMessage(channel=channel_id, text="...")` call that captures `latest_ts` before streaming starts.',
          'Details how `handle_chunk(chunk)` appends tokens to `last_message` and calls `client.chat_update(channel=channel_id, ts=latest_ts, text=last_message)` in-place.',
          'Explains how `partial(handle_tool_call, client, channel_id)` posts tool names, arguments, and results into the reply thread via `thread_ts=latest_ts`.',
        ],
        modelExplanation:
          'When a valid message arrives in a Slack channel, the bot calls `get_or_create_engine(channel_id)` so every channel gets its own dedicated AI-6 `Engine` and memory directory, preventing cross-channel context pollution. To stream the response, the bot first posts a placeholder `"..."` message via `chat_postMessage` and saves its timestamp in `latest_ts`. As the engine yields text chunks, `handle_chunk` appends each chunk and updates that exact message in-place using `chat_update(ts=latest_ts)`. Meanwhile, any tool invocations trigger `handle_tool_call`, which posts the tool name, arguments, and output as a child reply attached to `thread_ts=latest_ts`, keeping the main channel clean while preserving full debugging visibility in the thread.',
      },
      {
        id: 'dmma-ch06-feyn2',
        conceptTitle: 'Balancing Agent Autonomy, Interruptibility, and Role-Based Visibility',
        prompt:
          'Design a human-in-the-loop governance model for a production agent UI that avoids both reckless autonomous execution and tedious "press continue on every step" micromanagement.',
        rubricChecklist: [
          'Contrasts naive step-by-step confirmation fatigue with intelligent pause conditions (step/token budgets, uncertainty detection, and anomaly notifications).',
          'Describes declarative permission allowlists (like Claude Code’s `.claude/settings.local.json`) paired with interactive prompts and dry-run modes for unapproved or destructive actions.',
          'Distinguishes role-based UI views: high-level action summaries for end users versus full prompts, tool arguments, token counts, and target-cluster telemetry for developers.',
          'Includes runtime controls (model selection, tool switches, and an immediate Abort/Esc interrupt mechanism) plus span-per-turn distributed tracing.',
        ],
        modelExplanation:
          'A production agent UI replaces rigid step-by-step "Continue" prompts with tiered autonomy. Routine, read-only, or pre-vetted commands (like `ls`, `rg`, or running unit tests) are auto-approved via a permission config such as `.claude/settings.local.json`. Autonomous runs are bounded by smart checkpoints—pausing after N steps, a token budget ceiling, or when the LLM detects uncertainty—and require explicit human confirmation or dry-run previews before executing destructive or unpermitted actions (such as installing packages or deleting files), backed by an instant `Esc`/Abort button. Finally, the UI separates views by role: end users see clean progress updates and partial results, while developers inspect threaded tool parameters, token metrics, and span-per-turn distributed traces.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-hitl-governance',
        label: 'Autonomy, Interruptibility & Trust UI Model',
        category: 'security',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Human-in-the-loop UI framework balancing autonomous execution with pause thresholds, `.claude/settings.local.json` permission allowlists, dry-runs, and role-based telemetry.',
        whyItMatters:
          'Prevents both reckless unverified tool execution and tedious step-by-step confirmation fatigue.',
      },
      {
        id: 'dmma-env-interpolation',
        label: 'Config Environment Variable Interpolation',
        category: 'security',
        chapterNumber: 6,
        importance: 2,
        definition:
          '`Config._interpolate_env_vars()` recursive parser that substitutes `${VAR}` and `$VAR` placeholders in TOML/YAML configs from `.env` variables.',
        whyItMatters:
          'Decouples version-controlled engine and frontend configuration files from sensitive API and Slack tokens.',
      },
      {
        id: 'dmma-slack-bolt-bot',
        label: 'Slack Bolt SocketMode Frontend',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Multi-user Slack interface using `SocketModeHandler`, `ai-6-*` channel auto-join, `@mention` filtering, and in-place `chat_update` token streaming.',
        whyItMatters:
          'Embeds agentic workflows directly into team communication channels with built-in authentication and notifications.',
      },
      {
        id: 'dmma-per-channel-engine',
        label: 'Per-Channel Engine & Threaded Tool Trace',
        category: 'architecture',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Channel-keyed `engines[channel_id]` isolation paired with `handle_tool_call` posting tool executions to `thread_ts=latest_ts`.',
        whyItMatters:
          'Eliminates cross-channel context pollution while exposing suboptimal tool choices (like `cat` vs `grep`) in clean reply threads.',
      },
      {
        id: 'dmma-chainlit-webui',
        label: 'Chainlit Web UI & ChatSettings Controls',
        category: 'adaptation',
        chapterNumber: 6,
        importance: 1,
        definition:
          'Single-user web frontend binding `SimpleNamespace` config to `@on_chat_start`, `@on_settings_update` (`Select`/`Switch`), and `@on_message` (`stream_token`).',
        whyItMatters:
          'Provides rich markdown rendering and live runtime model switching and tool capability toggling (`available_tool_ids`).',
      },
      {
        id: 'dmma-agent-ui-observability',
        label: 'Turn-Based Tracing & UI Safeguards',
        category: 'evaluation',
        chapterNumber: 6,
        importance: 2,
        definition:
          'Production UI discipline combining dry-run previews, confirmation gates, abort controls, tool-latency metrics, and span-per-turn distributed tracing.',
        whyItMatters:
          'Transforms opaque prototype chatbots into auditable, debuggable production platforms.',
      },
    ],
    edges: [
      {
        source: 'dmma-env-interpolation',
        target: 'dmma-slack-bolt-bot',
        relationship: 'prerequisite_for',
        explanation:
          'The Slack bot relies on `Config._interpolate_env_vars()` and `.env` loading to inject OpenAI, Anthropic, and Slack tokens into `config.toml`.',
      },
      {
        source: 'dmma-per-channel-engine',
        target: 'dmma-slack-bolt-bot',
        relationship: 'part_of',
        explanation:
          '`get_or_create_engine(channel_id)` and threaded `handle_tool_call` callbacks form the core engine integration layer of the Slack bot.',
      },
      {
        source: 'dmma-slack-bolt-bot',
        target: 'dmma-chainlit-webui',
        relationship: 'trades_off_with',
        explanation:
          'Slack excels at multi-user channel collaboration and threaded tool logs, whereas Chainlit excels at single-user rich markdown and live `ChatSettings` tool toggling.',
      },
      {
        source: 'dmma-hitl-governance',
        target: 'dmma-chainlit-webui',
        relationship: 'optimizes',
        explanation:
          'Chainlit’s live tool switches (`available_tool_ids`) and human-in-the-loop review loops operationalize autonomy and capability boundaries.',
      },
      {
        source: 'dmma-agent-ui-observability',
        target: 'dmma-hitl-governance',
        relationship: 'evaluates',
        explanation:
          'Span-per-turn distributed tracing, tool call logs, and latency metrics measure and audit the effectiveness of human-agent workflows.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 14,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 6: UI feedback loops, interruptibility, debugging, Claude Code permissions (.claude/settings.local.json), trust building, Slack Bolt architecture, Config._interpolate_env_vars, SocketModeHandler, handle_message, per-channel engines, threaded tool calls (cat vs grep/sed), Chainlit lifecycle (@on_chat_start, @on_message, @on_settings_update), GitHub Actions workflow session, and all 6 production UI best practices.',
  },
};
