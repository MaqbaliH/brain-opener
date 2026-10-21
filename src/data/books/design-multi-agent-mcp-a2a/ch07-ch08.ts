import { ChapterMastery } from '../../../types/book';

export const dmmaCh07Mastery: ChapterMastery = {
  chapterNumber: 7,
  chapterId: 'ch07',
  title: 'Integrating with the Model Context Protocol Ecosystem',
  subtitle:
    'Standardizing agent-tool interoperability via JSON-RPC 2.0, STDIO and SSE transports, FastMCP and raw Bash servers, and the universal MCPTool indirection layer',
  readingTimeMinutes: 8,
  sourceWordCount: 8697,
  executiveThesis:
    'The Model Context Protocol (MCP) eliminates the M×N connector maintenance bottleneck by separating tool implementation from agentic framework execution through a two-layer JSON-RPC 2.0 client-server specification. By wrapping discovered local STDIO and remote HTTP/SSE MCP capabilities inside a universal MCPTool adapter that subclasses the native Tool interface, an agentic engine invokes external multi-language ecosystems without altering a single line of its core reasoning loop.',
  paradigmShift: {
    oldWay:
      'Every AI framework wrote tightly coupled, language-specific tool wrappers and bespoke context-injection logic for each external API, database, or CLI service.',
    newWay:
      'Tool providers publish standalone MCP servers in any language once, while agentic hosts use a single MCP client and indirection wrapper to dynamically discover and invoke capabilities.',
    whyItChanged:
      'Incompatible provider tool-calling schemas fragmented the ecosystem until Anthropic introduced MCP as a versioned, transport-agnostic JSON-RPC 2.0 standard.',
  },
  heroIllustrationUrl:
    '/books/design-multi-agent-mcp-a2a/assets/design_multi_agent_mcp_a2a_ch07_plate.png',
  customDiagrams: [
    {
      id: 'dmma-ch07-svg-architecture',
      title: 'MCP Two-Layer Architecture & Local vs. Remote Transport Topology',
      subtitle:
        'How an Agentic Host embeds MCPClient sessions to communicate over JSON-RPC 2.0 via local STDIO child processes and remote Streamable HTTP / SSE channels',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh07Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="dmmaArrCyan1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaArrEmerald1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
    <marker id="dmmaArrAmber1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#dmmaCh07Bg1)" />
  <text x="26" y="30" fill="#f8fafc" font-size="14.5" font-weight="700">MODEL CONTEXT PROTOCOL (MCP): HOST, CLIENT &amp; DUAL-TRANSPORT TOPOLOGY</text>
  <text x="26" y="48" fill="#94a3b8" font-size="11">Data Layer (JSON-RPC 2.0 Lifecycle &amp; Primitives) decoupled from Transport Layer (STDIO vs. Streamable HTTP/SSE)</text>

  <!-- Left Box: MCP Host (AI-6 System) -->
  <rect x="24" y="66" width="250" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="149" y="88" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">MCP HOST (AI-6 Agentic System)</text>
  <text x="149" y="103" fill="#94a3b8" font-size="9.5" text-anchor="middle">MCP-Agnostic Reasoning Loop</text>

  <rect x="40" y="116" width="218" height="58" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1" />
  <text x="149" y="136" fill="#f8fafc" font-size="10.5" font-weight="700" text-anchor="middle">AI-6 Engine &amp; tool_dict</text>
  <text x="149" y="152" fill="#cbd5e1" font-size="9" text-anchor="middle">Native Tools + Wrapped MCPTool Objects</text>
  <text x="149" y="165" fill="#94a3b8" font-size="8.5" text-anchor="middle">Calls uniform tool.run(**kwargs)</text>

  <rect x="40" y="190" width="218" height="84" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="149" y="210" fill="#e0f2fe" font-size="10.5" font-weight="700" text-anchor="middle">MCPClient (AsyncExitStack)</text>
  <text x="149" y="226" fill="#94a3b8" font-size="9" text-anchor="middle">sessions: dict[server_id, ClientSession]</text>
  <text x="149" y="241" fill="#94a3b8" font-size="9" text-anchor="middle">_server_tools: dict[server_id, list[dict]]</text>
  <text x="149" y="258" fill="#38bdf8" font-size="8.5" font-weight="600" text-anchor="middle">1 ClientSession per target MCP Server</text>

  <rect x="40" y="290" width="218" height="90" rx="6" fill="#172554" stroke="#60a5fa" stroke-width="1" />
  <text x="149" y="309" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">DATA LAYER (JSON-RPC 2.0)</text>
  <text x="52" y="326" fill="#dbeafe" font-size="9">• initialize (version negotiation)</text>
  <text x="52" y="341" fill="#dbeafe" font-size="9">• notifications/initialized</text>
  <text x="52" y="356" fill="#dbeafe" font-size="9">• tools/list (JSON Schema discovery)</text>
  <text x="52" y="371" fill="#dbeafe" font-size="9">• tools/call (args -&gt; content[] / error)</text>

  <!-- Middle Column: Transport Channels -->
  <rect x="304" y="88" width="184" height="126" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5" />
  <text x="396" y="110" fill="#6ee7b7" font-size="11" font-weight="700" text-anchor="middle">LOCAL TRANSPORT</text>
  <text x="396" y="126" fill="#a7f3d0" font-size="9.5" font-weight="600" text-anchor="middle">STDIO (stdin / stdout)</text>
  <text x="396" y="145" fill="#ecfdf5" font-size="8.5" text-anchor="middle">stdio_client(StdioServerParameters)</text>
  <text x="396" y="162" fill="#6ee7b7" font-size="8.5" text-anchor="middle">+ Sub-millisecond IPC, zero net overhead</text>
  <text x="396" y="177" fill="#fda4af" font-size="8.5" text-anchor="middle">- Runs with host user OS permissions</text>
  <text x="396" y="192" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Newline-delimited JSON-RPC lines</text>

  <rect x="304" y="246" width="184" height="126" rx="8" fill="#451a03" stroke="#f59e0b" stroke-width="1.5" />
  <text x="396" y="268" fill="#fcd34d" font-size="11" font-weight="700" text-anchor="middle">REMOTE TRANSPORT</text>
  <text x="396" y="284" fill="#fde68a" font-size="9.5" font-weight="600" text-anchor="middle">Streamable HTTP / SSE</text>
  <text x="396" y="303" fill="#fffbeb" font-size="8.5" text-anchor="middle">sse_client(url="https://...")</text>
  <text x="396" y="320" fill="#6ee7b7" font-size="8.5" text-anchor="middle">+ Process isolation &amp; cloud scaling</text>
  <text x="396" y="335" fill="#fda4af" font-size="8.5" text-anchor="middle">- Requires TLS, auth &amp; 10s/30s timeouts</text>
  <text x="396" y="350" fill="#cbd5e1" font-size="8.5" text-anchor="middle">HTTP POST + Server-Sent Events</text>

  <!-- Right Column: Polyglot MCP Servers -->
  <rect x="520" y="66" width="256" height="98" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="648" y="88" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Local Python Server (fs_mcp_server.py)</text>
  <text x="648" y="104" fill="#cbd5e1" font-size="9" text-anchor="middle">FastMCP("FileSystem Tools") SDK</text>
  <text x="648" y="120" fill="#94a3b8" font-size="8.5" text-anchor="middle">@mcp.tool() ls, cat, pwd, mkdir, cp</text>
  <text x="648" y="136" fill="#6ee7b7" font-size="8.5" text-anchor="middle">shlex.split(args) -&gt; sh.&lt;cmd&gt;(*parsed)</text>

  <rect x="520" y="178" width="256" height="98" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="648" y="200" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Local Bash Server (github_mcp_server.sh)</text>
  <text x="648" y="216" fill="#cbd5e1" font-size="9" text-anchor="middle">Zero-SDK Raw Protocol Implementation</text>
  <text x="648" y="232" fill="#94a3b8" font-size="8.5" text-anchor="middle">while read -r line; jq .method/.id/.params</text>
  <text x="648" y="248" fill="#6ee7b7" font-size="8.5" text-anchor="middle">gh $args 2&gt;&amp;1 | jq -Rs . | emit_json</text>

  <rect x="520" y="290" width="256" height="106" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="648" y="312" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Remote Cloud / Enterprise MCP Server</text>
  <text x="648" y="328" fill="#cbd5e1" font-size="9" text-anchor="middle">Rust / TypeScript / Go Microservice</text>
  <text x="648" y="344" fill="#94a3b8" font-size="8.5" text-anchor="middle">Exposes SaaS APIs, DBs &amp; Vector Stores</text>
  <text x="648" y="360" fill="#fcd34d" font-size="8.5" text-anchor="middle">Configured via remote_mcp_servers list</text>
  <text x="648" y="376" fill="#94a3b8" font-size="8.5" text-anchor="middle">Identical JSON-RPC 2.0 message sequence</text>

  <!-- Animated / Dashed Flow Connectors -->
  <line x1="258" y1="220" x2="300" y2="150" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrEmerald1)" />
  <line x1="258" y1="242" x2="300" y2="305" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrAmber1)" />
  <line x1="488" y1="130" x2="516" y2="115" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrEmerald1)" />
  <line x1="488" y1="165" x2="516" y2="215" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrEmerald1)" />
  <line x1="488" y1="315" x2="516" y2="335" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrAmber1)" />
</svg>`,
      bierutCaption:
        'Decoupling the JSON-RPC 2.0 data layer from the transport layer enables a single MCPClient to orchestrate local Python/Bash STDIO processes alongside remote HTTP/SSE services.',
      annotations: [
        {
          step: '1',
          label: 'Data Layer Invariance Across Transports',
          explanation:
            'Whether communicating over local process pipes (STDIO) or remote HTTP/SSE streams, every MCP session executes the exact same JSON-RPC 2.0 handshake (initialize -> notifications/initialized -> tools/list -> tools/call).',
        },
        {
          step: '2',
          label: 'Polyglot Server Freedom',
          explanation:
            'Because the wire contract is newline-stripped JSON-RPC 2.0, developers can author rapid wrappers in Python (FastMCP) or Bash (jq + tr) and high-throughput services in Rust or TypeScript.',
        },
        {
          step: '3',
          label: 'STDIO Privilege vs. Remote Network Trade-Off',
          explanation:
            'Local STDIO servers eliminate network latency but inherit the OS user permissions of the host process, whereas remote servers isolate execution behind network boundaries at the cost of TLS and authentication overhead.',
        },
      ],
    },
    {
      id: 'dmma-ch07-svg-mcptool-indirection',
      title: 'The Universal MCPTool Adapter & Sync-to-Async Bridge in AI-6',
      subtitle:
        'Applying the Fundamental Theorem of Software Engineering to wrap asynchronous MCP servers behind AI-6’s synchronous Tool base class',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh07Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <marker id="dmmaArrInd2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#818cf8" />
    </marker>
    <marker id="dmmaArrCyan2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#dmmaCh07Bg2)" />
  <text x="26" y="30" fill="#f8fafc" font-size="14.5" font-weight="700">UNIVERSAL MCPTool INDIRECTION &amp; TOOL_MANAGER DISCOVERY PIPELINE</text>
  <text x="26" y="48" fill="#94a3b8" font-size="11">Bridging synchronous Engine.run() tool calls to shared singleton asyncio event loops and MCPClient sessions</text>

  <!-- Stage 1: tool_manager.get_tool_dict() -->
  <rect x="24" y="68" width="224" height="326" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
  <text x="136" y="90" fill="#a5b4fc" font-size="11.5" font-weight="700" text-anchor="middle">1. tool_manager.py</text>
  <text x="136" y="106" fill="#94a3b8" font-size="9" text-anchor="middle">get_tool_dict(tool_config) -&gt; dict[str, Tool]</text>

  <rect x="38" y="120" width="196" height="68" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="136" y="139" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">_discover_native_tools()</text>
  <text x="136" y="155" fill="#94a3b8" font-size="8.5" text-anchor="middle">Scans tools_dir via importlib/inspect</text>
  <text x="136" y="170" fill="#818cf8" font-size="8.5" text-anchor="middle">Instantiates native Tool subclasses</text>

  <rect x="38" y="202" width="196" height="82" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="136" y="221" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">_discover_local_mcp_tools()</text>
  <text x="136" y="237" fill="#94a3b8" font-size="8.5" text-anchor="middle">Scans mcp_tools_dir (.py, .sh, .js)</text>
  <text x="136" y="252" fill="#94a3b8" font-size="8.5" text-anchor="middle">asyncio.run(discover_async()) [5s timeout]</text>
  <text x="136" y="267" fill="#818cf8" font-size="8.5" text-anchor="middle">Wraps each schema in MCPTool()</text>

  <rect x="38" y="298" width="196" height="82" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="136" y="317" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">_get_remote_mcp_tools()</text>
  <text x="136" y="333" fill="#94a3b8" font-size="8.5" text-anchor="middle">Iterates remote_mcp_servers [{name, url}]</text>
  <text x="136" y="348" fill="#94a3b8" font-size="8.5" text-anchor="middle">asyncio.run(connect_async()) [10s timeout]</text>
  <text x="136" y="363" fill="#818cf8" font-size="8.5" text-anchor="middle">Wraps remote tools in MCPTool()</text>

  <!-- Stage 2: MCPTool Adapter Class -->
  <rect x="282" y="68" width="256" height="326" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="410" y="90" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">2. Universal MCPTool(Tool)</text>
  <text x="410" y="106" fill="#94a3b8" font-size="9" text-anchor="middle">Indirection Layer &amp; Schema Translator</text>

  <rect x="298" y="120" width="224" height="72" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="410" y="138" fill="#bae6fd" font-size="10" font-weight="700" text-anchor="middle">_json_schema_to_parameters()</text>
  <text x="410" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Maps JSON Schema properties &amp; required[]</text>
  <text x="410" y="169" fill="#94a3b8" font-size="8.5" text-anchor="middle">integer/number -&gt; number | array -&gt; array</text>
  <text x="410" y="182" fill="#94a3b8" font-size="8.5" text-anchor="middle">boolean -&gt; boolean | default -&gt; string</text>

  <rect x="298" y="204" width="224" height="90" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="410" y="222" fill="#bae6fd" font-size="10" font-weight="700" text-anchor="middle">Class-Level Double-Checked Singletons</text>
  <text x="410" y="238" fill="#cbd5e1" font-size="8.5" text-anchor="middle">_get_client() with _client_lock -&gt; MCPClient</text>
  <text x="410" y="253" fill="#cbd5e1" font-size="8.5" text-anchor="middle">_get_or_create_loop() with _loop_lock</text>
  <text x="410" y="268" fill="#38bdf8" font-size="8.5" text-anchor="middle">Prevents "event loop is closed" crashes</text>
  <text x="410" y="283" fill="#94a3b8" font-size="8.5" text-anchor="middle">across repeated sync tool invocations</text>

  <rect x="298" y="306" width="224" height="74" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
  <text x="410" y="324" fill="#f8fafc" font-size="10" font-weight="700" text-anchor="middle">Synchronous run(self, **kwargs)</text>
  <text x="410" y="340" fill="#cbd5e1" font-size="8.5" text-anchor="middle">client, loop = self._ensure_connected()</text>
  <text x="410" y="355" fill="#38bdf8" font-size="8.5" text-anchor="middle">loop.run_until_complete(invoke_tool(...))</text>
  <text x="410" y="370" fill="#94a3b8" font-size="8.5" text-anchor="middle">cleanup_all() closes sessions &amp; loop on exit</text>

  <!-- Stage 3: Runtime Execution & Timeout Guard -->
  <rect x="572" y="68" width="204" height="326" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5" />
  <text x="674" y="90" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">3. Runtime Invocation</text>
  <text x="674" y="106" fill="#94a3b8" font-size="9" text-anchor="middle">Lazy Connection &amp; Bounded Execution</text>

  <rect x="586" y="122" width="176" height="76" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="674" y="142" fill="#a7f3d0" font-size="10" font-weight="700" text-anchor="middle">Lazy Session Connect</text>
  <text x="674" y="158" fill="#cbd5e1" font-size="8.5" text-anchor="middle">If not client.is_connected(id):</text>
  <text x="674" y="173" fill="#94a3b8" font-size="8.5" text-anchor="middle">connect_to_server() caches</text>
  <text x="674" y="186" fill="#94a3b8" font-size="8.5" text-anchor="middle">session in self.sessions[id]</text>

  <rect x="586" y="214" width="176" height="76" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="674" y="234" fill="#a7f3d0" font-size="10" font-weight="700" text-anchor="middle">30s Bounded Call</text>
  <text x="674" y="250" fill="#cbd5e1" font-size="8.5" text-anchor="middle">wait_for(session.call_tool(), 30.0)</text>
  <text x="674" y="265" fill="#94a3b8" font-size="8.5" text-anchor="middle">Extracts result.content[0].text</text>
  <text x="674" y="278" fill="#94a3b8" font-size="8.5" text-anchor="middle">Raises RuntimeError on timeout</text>

  <rect x="586" y="306" width="176" height="74" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="674" y="326" fill="#a7f3d0" font-size="10" font-weight="700" text-anchor="middle">Engine Decoupling</text>
  <text x="674" y="342" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Engine.__init__ reduced to 1 line:</text>
  <text x="674" y="357" fill="#34d399" font-size="8.5" font-weight="600" text-anchor="middle">tool_manager.get_tool_dict()</text>
  <text x="674" y="370" fill="#94a3b8" font-size="8.5" text-anchor="middle">Zero MCP logic inside Engine</text>

  <!-- Flow Arrows -->
  <line x1="248" y1="230" x2="278" y2="230" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrInd2)" />
  <line x1="538" y1="230" x2="568" y2="230" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaArrCyan2)" />
</svg>`,
      bierutCaption:
        'Wrapping MCP capabilities inside MCPTool isolates JSON Schema translation and asyncio event-loop lifecycle management from the synchronous AI-6 Engine.',
      annotations: [
        {
          step: '1',
          label: 'Discovery Ephemerality vs. Runtime Persistence',
          explanation:
            'During startup, tool_manager spins up a temporary MCPClient via asyncio.run() to inspect schemas and instantiate MCPTool wrappers, then cleans up immediately so idle servers do not consume resources until invoked.',
        },
        {
          step: '2',
          label: 'Shared Event Loop Singleton',
          explanation:
            'Because Python’s asyncio.run() creates and closes a new event loop on every call—breaking persistent ClientSession pipes—MCPTool maintains a class-level _event_loop guarded by double-checked locking.',
        },
        {
          step: '3',
          label: 'Zero-Translation Argument Forwarding',
          explanation:
            'Once _json_schema_to_parameters() registers the tool signature with the LLM, runtime kwargs passed to MCPTool.run(**kwargs) map directly to session.call_tool(name, kwargs) without structural marshaling.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch07-mm1',
      name: 'The M×N to M+N Protocol Funnel',
      tagline:
        'Standardizing the wire contract turns quadratic connector explosion into linear plug-and-play scaling.',
      naiveIntuition:
        'Supporting a new external service requires writing a dedicated Python tool class coupled to your specific agent framework’s internal base class and context format.',
      firstPrinciplesReality:
        'When M agent frameworks and N tool providers communicate through a shared JSON-RPC 2.0 protocol, each framework implements one MCP client and each provider builds one MCP server, reducing ecosystem integration work from M×N custom wrappers to M+N standard endpoints.',
      howToApply:
        'Expose reusable infrastructure tools (filesystems, GitHub CLI, databases) as standalone MCP servers rather than framework-locked Python classes whenever tools must be shared across multiple projects or languages.',
    },
    {
      id: 'dmma-ch07-mm2',
      name: 'Tools-First Protocol Minimalism',
      tagline:
        'Every external capability—including static data resources and prompt templates—reduces cleanly to an invokable function.',
      naiveIntuition:
        'An MCP integration must separately implement all three specification primitives—Tools, Resources, and Prompts—to be feature-complete.',
      firstPrinciplesReality:
        'Resources are merely a constrained form of retrieval that can be exposed via list_resources() and get_resource() tools, while prompt templates belong in the host application layer or behind a get_prompt_template() tool.',
      howToApply:
        'Restrict MCP server designs to the Tools primitive (tools/list and tools/call) to keep client adapters uniform, reduce protocol surface area, and avoid leaking application-level prompt logic into external tool processes.',
    },
    {
      id: 'dmma-ch07-mm3',
      name: 'The Indirection Adapter Shield (FTSE)',
      tagline:
        'Introduce one wrapper subclass so the core agentic loop never knows external protocols exist.',
      naiveIntuition:
        'Adding MCP support to an existing agent engine requires rewriting the main tool-calling loop to branch between native Python tools and asynchronous MCP sessions.',
      firstPrinciplesReality:
        'By the Fundamental Theorem of Software Engineering, subclassing the native Tool base class with a universal MCPTool adapter absorbs schema translation and sync-to-async event-loop bridging behind the standard run(**kwargs) contract.',
      howToApply:
        'Extract all native, local MCP, and remote MCP discovery into a dedicated tool_manager module that returns a flat dict[str, Tool], leaving the engine constructor with a single delegation call.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch07-sec-7-1',
      sectionNumber: '7.1',
      title: 'MCP Architecture, Protocol Layering & Transport Semantics',
      subtitle:
        'How hosts, clients, and polyglot servers exchange JSON-RPC 2.0 messages over local STDIO and remote Streamable HTTP/SSE',
      coreMechanism:
        'Anthropic introduced the Model Context Protocol (MCP) to replace brittle, framework-specific tool connectors with a versioned client-server architecture. An MCP Host (the agentic AI application, such as AI-6) embeds one or more MCP Clients, where each client maintains a dedicated 1-to-1 connection with a single local or remote MCP Server. The protocol splits communication into two strict layers: the Data Layer defines a JSON-RPC 2.0 schema covering connection lifecycle negotiation, capability discovery, error reporting, and execution primitives; the Transport Layer handles message framing, connection establishment, and authorization.\n\nRegardless of transport, the JSON-RPC 2.0 message sequence remains identical. For local servers running on the same machine, the client spawns the server process and communicates over Standard Input/Output (STDIO) streams, achieving low latency but granting the child process the full OS permissions of the host user. For remote servers running across network boundaries, MCP uses Streamable HTTP / Server-Sent Events (SSE), trading network latency and authentication setup for strict process isolation and language-agnostic cloud scaling.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Negotiate Protocol Version via Initialize Handshake',
          detail:
            'The MCP client opens a STDIO pipe or HTTP/SSE stream and sends an "initialize" JSON-RPC request; the server replies with its negotiated protocolVersion, capabilities object, and serverInfo metadata, followed by a client "notifications/initialized" message.',
        },
        {
          step: '2',
          title: 'Advertise Capabilities via tools/list',
          detail:
            'The client invokes "tools/list", and the server returns an array of tool definitions containing each tool’s name, natural-language description, and JSON Schema inputSchema.',
        },
        {
          step: '3',
          title: 'Execute Bounded Invocations via tools/call',
          detail:
            'When the LLM selects a tool, the client sends a "tools/call" request with the target tool name and argument dictionary, receiving either a structured content array or a standard JSON-RPC error code (-32601 Method Not Found, -32602 Invalid Params/Unknown Tool).',
        },
      ],
      formulas: [
        {
          name: 'Ecosystem Connector Complexity Reduction',
          expression: 'C_{\\text{custom}} = M \\times N \\;\\xrightarrow{\\text{MCP}}\\; C_{\\text{MCP}} = M + N',
          intuition:
            'Without a shared wire protocol, every new agentic framework must write a bespoke adapter for every tool service. Standardizing on MCP collapses quadratic integration effort into linear additive effort.',
          variables: [
            {
              symbol: 'M',
              meaning: 'Number of distinct agentic AI host frameworks (e.g., AI-6, LangGraph, AutoGen, CrewAI)',
            },
            {
              symbol: 'N',
              meaning: 'Number of external tool servers and data integrations (e.g., GitHub, Filesystem, Postgres, Slack)',
            },
          ],
          workedExample:
            'With M = 6 agent frameworks and N = 50 tool integrations, bespoke wrappers require 6 × 50 = 300 distinct implementations, whereas MCP requires only 6 clients + 50 servers = 56 implementations.',
        },
      ],
      keyTakeaways: [
        'MCP separates the JSON-RPC 2.0 data layer from the transport layer (local STDIO vs. remote Streamable HTTP/SSE), guaranteeing identical message semantics across local scripts and cloud microservices.',
        'While the MCP specification includes Resources and Prompts, exposing capabilities strictly as Tools avoids protocol bloat and keeps prompt engineering inside the host application.',
        'Third-party local STDIO servers execute with the host user’s operating system privileges and must be audited or sandboxed in containers before execution.',
      ],
      commonPitfalls: [
        'Writing custom MCP protocol parsers from scratch in production instead of using official language SDKs that track evolving specification versions automatically.',
        'Downloading and running unverified community MCP servers locally via STDIO without OS user isolation or Docker containerization.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch07_plate.png',
          originalLabel:
            'Chapter 7 Opening Blueprint: Integrating with the Model Context Protocol Ecosystem (Page 244)',
          bierutTitle: 'Standardizing the Boundary Between Agentic Reasoning Loops and External Tool Ecosystems',
          editorialAnalysis:
            'The Chapter 7 blueprint maps the progression from isolated framework tools to an open MCP topology where an MCP Host coordinates multiple local and remote servers through a unified client and tool-manager abstraction. By decoupling how tools are discovered and invoked from how they are implemented, AI-6 gains immediate access to polyglot external tools without polluting its core engine.',
          keyTakeaways: [
            'A single MCP host can simultaneously mount native Python tools, local STDIO MCP processes, and remote HTTP/SSE MCP servers.',
            'Configuration replaces custom wrapper code as the primary mechanism for extending agent capabilities.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch07-sec-7-2',
      sectionNumber: '7.2',
      title: 'Building Polyglot MCP Servers & Async MCPClient Sessions',
      subtitle:
        'Contrasting Python FastMCP decorators against raw Bash JSON-RPC loops and managing multi-server async lifecycles',
      coreMechanism:
        'MCP’s language independence allows tool authors to match implementation languages to operational requirements. In Python, the official SDK’s FastMCP class abstracts transport framing and schema generation: decorating functions like ls, cat, pwd, mkdir, and cp with @mcp.tool() in fs_mcp_server.py automatically inspects type hints and docstrings, splits CLI arguments with shlex.split(), and executes the underlying binary via sh. Conversely, github_mcp_server.sh demonstrates the raw wire mechanics in Bash without an SDK: an infinite read loop parses stdin lines with jq, routes methods via a case statement ("initialize", "notifications/initialized", "tools/list", "tools/call"), executes gh $args 2>&1, escapes output with jq -Rs ., and strips newlines via emit_json() so each JSON-RPC 2.0 response occupies a single stdout line.\n\nOn the consumption side, AI-6’s MCPClient class in mcp_client.py manages concurrent connections to multiple servers using Python’s asyncio and AsyncExitStack. When connect_to_server(server_id, path_or_url) is called, urlparse inspects the scheme: http/https URLs open an sse_client transport, whereas local file paths (.py, .sh, .js) map to python, bash, or node inside StdioServerParameters and open a stdio_client transport.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Select Transport via URL Scheme or File Extension',
          detail:
            'MCPClient.connect_to_server() checks whether server_path_or_url starts with http/https (routing to sse_client) or ends with .py/.sh/.js (constructing StdioServerParameters for stdio_client).',
        },
        {
          step: '2',
          title: 'Register Contexts in AsyncExitStack & Initialize with Timeout',
          detail:
            'Both transport streams and ClientSession(read, write) enter self.exit_stack for deterministic teardown, followed by asyncio.wait_for(session.initialize(), timeout=10.0) and session.list_tools().',
        },
        {
          step: '3',
          title: 'Cache Session State & Bound Tool Calls to 30 Seconds',
          detail:
            'Connected sessions and tool schemas are cached in self.sessions[server_id] and self._server_tools[server_id], allowing invoke_tool() to execute session.call_tool() under a 30-second timeout.',
        },
      ],
      keyTakeaways: [
        'FastMCP in the Python SDK eliminates boilerplate by converting @mcp.tool()-decorated functions directly into JSON-RPC-compliant endpoints.',
        'Raw STDIO servers in shell or low-level languages must compact multi-line JSON payloads onto a single newline-delimited line and properly escape stderr/stdout output via jq -Rs.',
        'Using AsyncExitStack inside MCPClient guarantees that child STDIO processes and remote SSE sockets are cleanly closed when disconnect_server() or cleanup() runs.',
      ],
      commonPitfalls: [
        'Emitting unescaped multi-line JSON responses over STDIO, which breaks line-oriented JSON-RPC client parsers.',
        'Calling session.initialize() or session.call_tool() without asyncio.wait_for() timeouts, allowing a hung remote or child server to freeze the host agent indefinitely.',
      ],
    },
    {
      id: 'dmma-ch07-sec-7-3',
      sectionNumber: '7.3',
      title: 'Universal MCPTool Indirection & Dynamic Tool Manager Discovery',
      subtitle:
        'Bridging synchronous Engine execution to singleton asyncio loops and unifying native, local MCP, and remote MCP discovery',
      coreMechanism:
        'Because AI-6’s agentic loop invokes tools synchronously via Tool.run(**kwargs) while the MCP Python SDK operates asynchronously, Chapter 7 applies the Fundamental Theorem of Software Engineering by introducing the universal MCPTool(Tool) adapter. During construction, MCPTool passes the MCP JSON Schema through _json_schema_to_parameters(), converting properties (mapping integer/number to number, array to array, boolean to boolean, and defaults to string) and required sets into native AI-6 Parameter objects. To prevent "event loop is closed" errors caused by repeatedly creating and destroying loops across tool calls, MCPTool maintains a class-level singleton _client (MCPClient) and _event_loop guarded by double-checked threading.Lock instances (_client_lock and _loop_lock).\n\nTool discovery is extracted completely out of the Engine class into tool_manager.py. Its single public entry point, get_tool_dict(tool_config), aggregates tools from three sources: _discover_native_tools() (scanning Python modules via importlib and inspect), _discover_local_mcp_tools() (connecting to each script in mcp_tools_dir with a 5-second timeout via asyncio.run(discover_async())), and _get_remote_mcp_tools() (connecting to configured URLs with a 10-second timeout).',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Probe MCP Servers at Startup & Instantiate MCPTool Wrappers',
          detail:
            'tool_manager connects to local and remote MCP servers inside short-lived async discovery helpers, extracts each tool’s schema, wraps it in an MCPTool(server_id, path_or_url, tool_info), and immediately closes the discovery client.',
        },
        {
          step: '2',
          title: 'Acquire Singleton Client & Event Loop via Double-Checked Locking',
          detail:
            'When the LLM invokes an MCPTool at runtime, _ensure_connected() retrieves the shared class-level MCPClient and persistent asyncio event loop, lazily re-establishing the server connection if not yet active.',
        },
        {
          step: '3',
          title: 'Execute Synchronously via loop.run_until_complete()',
          detail:
            'MCPTool.run(**kwargs) sets the shared event loop and blocks on loop.run_until_complete(client.invoke_tool(server_id, mcp_tool_name, kwargs)), returning the plain string output to the AI-6 Engine.',
        },
      ],
      keyTakeaways: [
        'Extracting tool_manager reduces tool initialization in Engine.__init__() to a single line: self.tool_dict = tool_manager.get_tool_dict(tool_config).',
        'Double-checked locking on MCPTool._client and MCPTool._event_loop ensures thread-safe singleton reuse across all MCPTool instances without event-loop lifecycle collisions.',
        'Exposing a generic CLI wrapper (like raw gh args) often causes LLMs to hallucinate invalid flags (such as --page 2 on gh repo list), demonstrating why focused tool schemas outperform unconstrained pass-through commands.',
      ],
      commonPitfalls: [
        'Using asyncio.run() inside MCPTool.run() on every tool invocation, which destroys the event loop and invalidates active ClientSession transports built on previous calls.',
        'Forgetting to call MCPTool.cleanup_all() on application shutdown, leaving orphan STDIO subprocesses and open event loops running.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Tool Integration Architecture Matrix: Native AI-6 Tools vs. Local STDIO MCP vs. Remote HTTP/SSE MCP',
      description:
        'Comparing execution speed, language flexibility, security boundaries, and operational complexity across the three tool hosting paradigms supported by tool_manager.py.',
      headers: [
        'Dimension',
        'Native AI-6 Tool (Python Subclass)',
        'Local MCP Server (STDIO Transport)',
        'Remote MCP Server (Streamable HTTP / SSE)',
      ],
      rows: [
        [
          'Discovery & Transport',
          'In-process importlib & inspect module scan',
          'Child process stdin/stdout pipes (5s discovery)',
          'Network HTTP POST + SSE stream (10s discovery)',
        ],
        [
          'Language & Ecosystem Reuse',
          'Python only; coupled to AI-6 Tool ABC',
          'Any language (.py, .sh, .js, Rust binary)',
          'Any language; shareable across cloud teams',
        ],
        [
          'Invocation Latency',
          'Sub-millisecond direct Python method call',
          'Low IPC pipe overhead + JSON-RPC serialization',
          'Network RTT + TLS handshake (30s call timeout)',
        ],
        [
          'Security & Blast Radius',
          'Shares full host process memory and OS user',
          'Separate process, but inherits host OS user rights',
          'Isolated machine/container behind network auth',
        ],
        [
          'Debugging & Testing Effort',
          'Simple in-process unit test & debugger step',
          'Requires multi-process STDIO harness & log capture',
          'Requires network mocking, auth tokens & health checks',
        ],
      ],
      verdictRule:
        'Use Native Tools for tightly integrated internal framework state (such as session memory tools), Local STDIO MCP Servers for trusted local CLI/filesystem utilities, and Remote HTTP/SSE MCP Servers for third-party, multi-tenant, or untrusted enterprise integrations.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch07-scen1',
      title: 'Eliminating "Event Loop Is Closed" Crashes in Synchronous Agent Loops',
      roleAndContext:
        'Core Framework Engineer integrating asynchronous MCP Python SDK sessions into AI-6’s synchronous Tool.run() execution engine.',
      symptomOrFailure:
        'The first call to an MCP tool succeeds, but the second invocation on the same server crashes with RuntimeError: Event loop is closed because the underlying ClientSession pipe was bound to a temporary loop.',
      naiveFixAndWhyItFails:
        'Wrapping each client.invoke_tool() call inside asyncio.run() creates a brand-new event loop per call and closes it upon return, severing the persistent STDIO or SSE transport stored in MCPClient.sessions.',
      firstPrinciplesSolution:
        'Implement a class-level singleton _event_loop and _client on MCPTool using double-checked locking (_loop_lock and _client_lock), and execute all connections and tool calls via loop.run_until_complete() until cleanup_all() is invoked at shutdown.',
      measurableOutcome:
        '100% session reuse across multi-turn conversations with zero event-loop lifecycle crashes and deterministic subprocess teardown.',
    },
    {
      id: 'dmma-ch07-scen2',
      title: 'Taming LLM CLI Flag Hallucinations on Pass-Through GitHub MCP Servers',
      roleAndContext:
        'AI Systems Developer exposing the GitHub CLI (gh) via a Bash STDIO MCP server to answer repository analytics queries.',
      symptomOrFailure:
        'When asked for the most popular repositories across an account with 100+ repos, the LLM wastes 5 consecutive tool calls guessing invalid pagination flags like --json stargazerCount and --page 2 before requesting --limit 300.',
      naiveFixAndWhyItFails:
        'Exposing a single raw gh(args: string) pass-through tool forces the LLM to recall exact CLI flag syntax and field names from pretraining weights through trial-and-error retries.',
      firstPrinciplesSolution:
        'Replace unconstrained CLI pass-through tools with high-level, task-specific MCP tools (e.g., list_top_repos(limit: int, sort_by: string)) whose JSON Schema explicitly constrains parameters and encapsulates pagination internally.',
      measurableOutcome:
        'Reduces tool-calling round trips from 5 failed/retried LLM turns to 1 deterministic invocation, cutting latency and token usage by over 70%.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch07-q1',
        scenarioPrompt:
          'You are implementing a lightweight local MCP server in Bash (like github_mcp_server.sh) over STDIO without an SDK. During testing, the MCPClient hangs or fails to parse the server’s response to "tools/list". Which low-level protocol detail is the most likely culprit?',
        options: [
          {
            label: 'A',
            text: 'The server returned a multi-line pretty-printed JSON payload instead of stripping newlines into a single-line JSON-RPC 2.0 message.',
            isCorrect: true,
            explanation:
              'STDIO MCP clients read newline-delimited JSON-RPC messages line by line; multi-line heredocs must be compacted (e.g., via tr -d "\\n" | tr -s " ") and command outputs escaped via jq -Rs.',
          },
          {
            label: 'B',
            text: 'The server failed to send an HTTP 200 OK status header before writing the JSON-RPC object to stdout.',
            isCorrect: false,
            explanation:
              'STDIO transport reads raw newline-delimited JSON-RPC 2.0 strings directly from standard output without HTTP headers.',
          },
          {
            label: 'C',
            text: 'The server replied to the client’s "notifications/initialized" message with an empty JSON object.',
            isCorrect: false,
            explanation:
              'While JSON-RPC notifications must not receive a response, the question specifically identifies a failure parsing the "tools/list" response framing.',
          },
          {
            label: 'D',
            text: 'The server used JSON-RPC error code -32601 instead of -32602 for unknown methods.',
            isCorrect: false,
            explanation:
              'Code -32601 is the correct standard JSON-RPC 2.0 code for "Method not found", whereas -32602 indicates invalid parameters or an unknown tool name.',
          },
        ],
      },
      {
        id: 'dmma-ch07-q2',
        scenarioPrompt:
          'Why does AI-6’s tool_manager.py spin up a temporary MCPClient inside _discover_local_mcp_tools() and call await client.cleanup() immediately after building the list of MCPTool instances?',
        options: [
          {
            label: 'A',
            text: 'Because MCP servers do not allow a client session to remain open for more than 5 seconds after calling tools/list.',
            isCorrect: false,
            explanation:
              'MCP sessions can stay open indefinitely; the 5-second limit in _discover_local_mcp_tools() is an asyncio.wait_for() discovery timeout set by AI-6.',
          },
          {
            label: 'B',
            text: 'To harvest tool schemas during synchronous startup without keeping idle server processes running, deferring persistent connection to MCPTool._ensure_connected() when a tool is actually called.',
            isCorrect: true,
            explanation:
              'Discovery only needs the JSON schemas to register MCPTool wrappers in tool_dict; runtime execution uses MCPTool’s shared singleton client and event loop to lazily connect on demand.',
          },
          {
            label: 'C',
            text: 'Because Python’s importlib module cannot import native tools while an AsyncExitStack is active.',
            isCorrect: false,
            explanation:
              'importlib operates independently of asyncio; native tools are discovered before MCP tools in get_tool_dict().',
          },
          {
            label: 'D',
            text: 'To force remote SSE servers to downgrade their connection to local STDIO pipes before execution.',
            isCorrect: false,
            explanation:
              'Remote servers always use Streamable HTTP / SSE; they never downgrade to local STDIO pipes.',
          },
        ],
      },
      {
        id: 'dmma-ch07-q3',
        scenarioPrompt:
          'A developer downloads a community MCP server script from a public index and places it in AI-6’s local mcp_tools_dir. What is the primary security risk of this action?',
        options: [
          {
            label: 'A',
            text: 'The local STDIO server executes as a child process with the full operating system permissions of the user running the AI-6 host.',
            isCorrect: true,
            explanation:
              'Local STDIO MCP servers are spawned directly via python, bash, or node by the host process, inheriting all filesystem, network, and credential access of that OS user.',
          },
          {
            label: 'B',
            text: 'The STDIO transport automatically exposes an unauthenticated public HTTP port on 0.0.0.0.',
            isCorrect: false,
            explanation:
              'STDIO communicates strictly through OS standard input and output pipes, not network sockets.',
          },
          {
            label: 'C',
            text: 'The MCP server can overwrite AI-6’s Engine class in memory via Python metaclass injection.',
            isCorrect: false,
            explanation:
              'An MCP server runs in a separate OS process and communicates only via JSON-RPC messages, so it cannot directly mutate the host Python process memory.',
          },
          {
            label: 'D',
            text: 'JSON-RPC 2.0 transmits parameters in base64 encoding that bypasses LLM safety filters.',
            isCorrect: false,
            explanation:
              'JSON-RPC 2.0 transmits standard UTF-8 JSON objects; the danger is OS-level code execution by the third-party server process.',
          },
        ],
      },
      {
        id: 'dmma-ch07-q4',
        scenarioPrompt:
          'In AI-6’s MCPTool implementation, how are MCP JSON Schema parameter types translated into AI-6 Parameter objects by _json_schema_to_parameters()?',
        options: [
          {
            label: 'A',
            text: 'Every JSON Schema property is serialized into a single raw JSON string parameter named "payload".',
            isCorrect: false,
            explanation:
              '_json_schema_to_parameters() iterates over schema["properties"] and creates individual Parameter objects for each property.',
          },
          {
            label: 'B',
            text: 'JSON Schema "integer" and "number" map to "number", "array" to "array", "boolean" to "boolean", and all other types default to "string".',
            isCorrect: true,
            explanation:
              'This exact mapping adapts standard JSON Schema primitive types to AI-6’s internal Parameter type system while preserving the required set.',
          },
          {
            label: 'C',
            text: 'Only "string" parameters are supported; any tool with numeric or boolean parameters is rejected during discovery.',
            isCorrect: false,
            explanation:
              'MCPTool explicitly maps array, integer/number, boolean, and string types.',
          },
          {
            label: 'D',
            text: 'The LLM provider dynamically rewrites the MCP server’s source code to match OpenAI’s function-calling schema.',
            isCorrect: false,
            explanation:
              'Schema translation happens locally inside MCPTool.__init__() via _json_schema_to_parameters().',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch07-fc1',
        category: 'architecture',
        front: 'What are the two protocol layers of MCP and what does each specify?',
        back: 'The Data Layer specifies the JSON-RPC 2.0 message protocol (lifecycle, tools, resources, prompts, notifications), while the Transport Layer specifies connection framing and channels (local STDIO vs. remote Streamable HTTP/SSE).',
        mentalHook: 'Data Layer = JSON-RPC 2.0 vocabulary; Transport Layer = STDIO pipe or HTTP/SSE wire.',
      },
      {
        id: 'dmma-ch07-fc2',
        category: 'architecture',
        front: 'Why does Gigi Sayfan recommend exposing only Tools in MCP servers and ignoring Resources and Prompts?',
        back: 'Resources ("poor person’s RAG") can be exposed as list_resources()/get_resource() tools, and Prompts belong in the host application layer; restricting servers to Tools keeps the protocol surface simple and uniform.',
        mentalHook: 'Everything is a Tool: data retrieval and templates are just functions with arguments.',
      },
      {
        id: 'dmma-ch07-fc3',
        category: 'optimization',
        front: 'What are the four JSON-RPC 2.0 methods handled in the raw Bash GitHub MCP server lifecycle?',
        back: '"initialize" (version/capability handshake), "notifications/initialized" (no-op client ack), "tools/list" (returns inputSchema), and "tools/call" (executes gh CLI and returns escaped text or -32602/-32601 errors).',
        mentalHook: 'Handshake -> Ack -> List -> Call.',
      },
      {
        id: 'dmma-ch07-fc4',
        category: 'architecture',
        front: 'How does MCPClient manage resource cleanup across multiple concurrent STDIO and SSE connections?',
        back: 'It registers every transport and ClientSession inside a Python contextlib.AsyncExitStack, allowing client.cleanup() to close all active sessions and subprocesses via await self.exit_stack.aclose().',
        mentalHook: 'AsyncExitStack = one-call deterministic teardown for N async sessions.',
      },
      {
        id: 'dmma-ch07-fc5',
        category: 'architecture',
        front: 'How does the Fundamental Theorem of Software Engineering (FTSE) apply to integrating MCP into AI-6?',
        back: 'By introducing the universal MCPTool indirection class—a subclass of AI-6’s native Tool—the Engine invokes local and remote MCP tools identically to native tools without changing its agentic loop.',
        mentalHook: 'One wrapper class (MCPTool) hides an entire external protocol ecosystem.',
      },
      {
        id: 'dmma-ch07-fc6',
        category: 'optimization',
        front: 'Why does MCPTool use class-level double-checked locking for _client and _event_loop?',
        back: 'All MCPTool instances share a single MCPClient and persistent asyncio event loop so synchronous run() calls can execute loop.run_until_complete() without triggering "event loop is closed" errors.',
        mentalHook: 'One shared loop keeps persistent ClientSession pipes alive across sync calls.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch07-feyn1',
        conceptTitle: 'The Universal MCPTool Sync-to-Async Indirection Bridge',
        prompt:
          'Explain to a backend engineer how AI-6’s synchronous Engine can discover and invoke asynchronous local and remote MCP servers without modifying a single line of the Engine’s tool-calling loop.',
        rubricChecklist: [
          'Explains how tool_manager.get_tool_dict() unifies native tools, local STDIO MCP scripts, and remote HTTP/SSE MCP servers behind a single dict[str, Tool] interface.',
          'Describes how MCPTool subclasses the native Tool base class and translates MCP JSON Schema into AI-6 Parameter objects via _json_schema_to_parameters().',
          'Details why MCPTool maintains a class-level singleton MCPClient and persistent asyncio event loop using double-checked locking rather than calling asyncio.run() per invocation.',
          'Traces a runtime MCPTool.run(**kwargs) call through _ensure_connected() and loop.run_until_complete(client.invoke_tool(...)).',
        ],
        modelExplanation:
          'AI-6 keeps its core Engine completely ignorant of MCP by inserting an indirection layer at both discovery time and execution time. At startup, Engine.__init__() makes a single call to tool_manager.get_tool_dict(). The tool manager scans native Python tools, then uses short-lived async helpers to query local STDIO scripts and remote SSE servers via "tools/list", wrapping every discovered MCP capability inside an MCPTool instance that subclasses AI-6’s native Tool class and translates its JSON Schema via _json_schema_to_parameters(). At runtime, when the synchronous Engine calls tool.run(**kwargs), MCPTool cannot use asyncio.run() because destroying the event loop after the first call would sever persistent ClientSession pipes. Instead, MCPTool uses double-checked thread locking to maintain a single class-level MCPClient and a persistent asyncio event loop, calling loop.run_until_complete(client.invoke_tool(...)) so asynchronous JSON-RPC execution behaves like a standard synchronous Python function.',
      },
      {
        id: 'dmma-ch07-feyn2',
        conceptTitle: 'Anatomy of a Zero-SDK MCP Server over STDIO',
        prompt:
          'Walk through what happens on the wire when an MCP client connects to and invokes the raw Bash github_mcp_server.sh over STDIO, including why newline handling and JSON escaping are critical.',
        rubricChecklist: [
          'Identifies STDIO framing rules: client and server exchange single-line, newline-delimited JSON-RPC 2.0 messages via stdin and stdout.',
          'Walks through the 3-step setup sequence: "initialize" request/response, "notifications/initialized" one-way notification, and "tools/list" returning the gh tool inputSchema.',
          'Explains how "tools/call" executes gh $args 2>&1, captures stdout/stderr, and uses jq -Rs . plus emit_json() (tr -d "\\n") to safely escape and flatten output.',
          'Mentions standard JSON-RPC 2.0 error handling (-32602 for unknown tool names and -32601 for unknown methods).',
        ],
        modelExplanation:
          'Because STDIO MCP transport frames messages as newline-delimited JSON lines over standard input and output, a raw Bash server runs an infinite while read -r line loop that extracts .method, .id, and .params using jq. First, the client sends "initialize"; the server replies with its protocolVersion ("2024-11-05"), capabilities, and serverInfo compacted onto a single line via emit_json() (which strips newlines with tr -d "\\n"). Second, the client sends "notifications/initialized", which requires no response. Third, the client calls "tools/list", and the server returns the JSON Schema for the "gh" tool expecting an "args" string. Finally, on "tools/call", the server verifies the tool name is "gh" (returning JSON-RPC error -32602 otherwise, or -32601 for unknown methods), runs gh $args 2>&1, pipes the raw multi-line CLI output through jq -Rs . to escape quotes and newlines into a valid JSON string literal, and emits the single-line JSON-RPC result.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-ch07-node-mcp-protocol',
        label: 'Model Context Protocol (MCP)',
        category: 'architecture',
        chapterNumber: 7,
        importance: 1,
        definition:
          'An open, versioned client-server protocol introduced by Anthropic that standardizes how agentic AI hosts discover and invoke external tools and resources via JSON-RPC 2.0.',
        formulaOrRule: 'C_{custom} = M \\times N \\rightarrow C_{MCP} = M + N',
        whyItMatters:
          'Decouples tool implementations from specific AI frameworks, enabling write-once-run-everywhere interoperability across languages.',
      },
      {
        id: 'dmma-ch07-node-dual-transports',
        label: 'STDIO & Streamable HTTP/SSE Transports',
        category: 'architecture',
        chapterNumber: 7,
        importance: 2,
        definition:
          'The transport layer mechanisms of MCP: STDIO pipes connect local child-process servers with zero network overhead, while Streamable HTTP/SSE connects remote servers across network boundaries.',
        whyItMatters:
          'Allows the same JSON-RPC 2.0 data layer to run locally for speed or remotely for process isolation and cloud scale.',
      },
      {
        id: 'dmma-ch07-node-fastmcp-bash-servers',
        label: 'Polyglot MCP Servers (FastMCP & Bash)',
        category: 'adaptation',
        chapterNumber: 7,
        importance: 2,
        definition:
          'Independent processes exposing invokable tools via MCP, built either with high-level SDK decorators (@mcp.tool() in Python FastMCP) or raw JSON-RPC 2.0 stdin/stdout loops (Bash + jq).',
        whyItMatters:
          'Proves that any CLI utility or service in any language can be exposed to LLM agents through a uniform schema.',
      },
      {
        id: 'dmma-ch07-node-mcp-client',
        label: 'MCPClient & AsyncExitStack',
        category: 'architecture',
        chapterNumber: 7,
        importance: 2,
        definition:
          'AI-6’s asynchronous client manager that establishes 1-to-1 ClientSession instances per server, caches discovered tool schemas, enforces 10s/30s timeouts, and cleans up transports via AsyncExitStack.',
        whyItMatters:
          'Prevents hung servers from freezing the host and guarantees clean teardown of child processes and network sockets.',
      },
      {
        id: 'dmma-ch07-node-mcp-tool-adapter',
        label: 'Universal MCPTool Indirection Layer',
        category: 'architecture',
        chapterNumber: 7,
        importance: 1,
        definition:
          'A subclass of AI-6’s native Tool base class that translates MCP JSON Schemas into Parameter objects and bridges synchronous run() calls to a singleton asyncio event loop via double-checked locking.',
        whyItMatters:
          'Applies the Fundamental Theorem of Software Engineering so the synchronous AI-6 Engine invokes MCP tools without knowing MCP exists.',
      },
      {
        id: 'dmma-ch07-node-tool-manager',
        label: 'Unified Tool Manager (tool_manager.py)',
        category: 'optimization',
        chapterNumber: 7,
        importance: 2,
        definition:
          'The discovery module that aggregates native Python tools, local STDIO MCP scripts, and remote MCP server configurations into a single dictionary mapping tool names to Tool instances.',
        whyItMatters:
          'Extracts all discovery complexity out of the Engine constructor into a single maintainable delegation call.',
      },
    ],
    edges: [
      {
        source: 'dmma-ch07-node-mcp-protocol',
        target: 'dmma-ch07-node-dual-transports',
        relationship: 'part_of',
        explanation:
          'MCP separates its JSON-RPC 2.0 data layer from the underlying STDIO and Streamable HTTP/SSE transport channels.',
      },
      {
        source: 'dmma-ch07-node-dual-transports',
        target: 'dmma-ch07-node-fastmcp-bash-servers',
        relationship: 'prerequisite_for',
        explanation:
          'Local Python FastMCP and Bash servers rely on STDIO framing, while remote servers rely on HTTP/SSE streams.',
      },
      {
        source: 'dmma-ch07-node-mcp-client',
        target: 'dmma-ch07-node-fastmcp-bash-servers',
        relationship: 'evaluates',
        explanation:
          'MCPClient connects to each server, negotiates protocol versions, and queries tools/list under bounded timeouts.',
      },
      {
        source: 'dmma-ch07-node-mcp-client',
        target: 'dmma-ch07-node-mcp-tool-adapter',
        relationship: 'prerequisite_for',
        explanation:
          'MCPTool holds a shared class-level singleton MCPClient and event loop to execute invoke_tool() calls from synchronous code.',
      },
      {
        source: 'dmma-ch07-node-tool-manager',
        target: 'dmma-ch07-node-mcp-tool-adapter',
        relationship: 'optimizes',
        explanation:
          'tool_manager dynamically discovers local and remote MCP schemas at startup and wraps each capability in an MCPTool instance for the Engine.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 6,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 7 sections: What is MCP, MCP Architecture (Data/Transport layers, Servers, Clients, Hosts, Local vs. Remote), Ecosystem, Building MCP Servers (Python FastMCP fs_mcp_server.py & Bash github_mcp_server.sh), Building MCP Clients (MCPClient, AsyncExitStack, timeouts), and AI-6 Integration (MCPTool, _json_schema_to_parameters, double-checked locking, tool_manager.py, GitHub CLI execution trace). Zero forbidden AI phrases.',
  },
};

export const dmmaCh08Mastery: ChapterMastery = {
  chapterNumber: 8,
  chapterId: 'ch08',
  title: 'Designing Multi-Agent Systems',
  subtitle:
    'Explicit Agent encapsulation, recursive AgentTool trees, the six orchestration topologies, the Agent-to-Agent (A2A) protocol, role prompt templates, weighted tool scoping, layered context engineering, and conflict resolution',
  readingTimeMinutes: 8,
  sourceWordCount: 11358,
  executiveThesis:
    'Single-agent architectures degrade on complex workflows due to context window saturation, massive-prompt attention dilution, tool-selection overload, and single-model cost/capability lock-in. Multi-agent systems overcome these limits by encapsulating each specialist with its own system prompt, least-privilege tool subset, model, and isolated conversation history—coordinating local agent trees via AgentTool and remote autonomous agents via the stateful Agent-to-Agent (A2A) protocol.',
  paradigmShift: {
    oldWay:
      'A monolithic "uber-agent" coupled to a single frontier LLM held one giant system prompt, hundreds of global tools, and every intermediate reasoning trace inside a single saturating context window.',
    newWay:
      'Specialized Coordinator, Specialist, and Validator agents run isolated agentic loops with scoped tools, prefix-cached layered context, and asynchronous A2A task lifecycles.',
    whyItChanged:
      'Encapsulating sub-agents behind tool interfaces (AgentTool and A2ATool) prevents intermediate token burn from polluting parent contexts while allowing per-role model optimization and fault-tolerant parallelism.',
  },
  heroIllustrationUrl:
    '/books/design-multi-agent-mcp-a2a/assets/design_multi_agent_mcp_a2a_ch08_plate.png',
  customDiagrams: [
    {
      id: 'dmma-ch08-svg-orchestration-topologies',
      title: 'The Six Multi-Agent Orchestration Topologies & Context Isolation Boundary',
      subtitle:
        'Comparing Sequential, Parallel, Hierarchical, Event-Driven, Collaborative, and Hybrid coordination patterns alongside AgentTool state encapsulation',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh08Bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <marker id="dmmaCh8Cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaCh8Emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
    <marker id="dmmaCh8Amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
    <marker id="dmmaCh8Purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#dmmaCh08Bg1)" />
  <text x="24" y="28" fill="#f8fafc" font-size="14.5" font-weight="700">MULTI-AGENT ORCHESTRATION TOPOLOGIES &amp; SUB-AGENT CONTEXT ISOLATION</text>
  <text x="24" y="45" fill="#94a3b8" font-size="11">Matching coordination geometry to task dependencies while hiding sub-agent token burn behind AgentTool / A2ATool</text>

  <!-- Card 1: Sequential -->
  <rect x="24" y="60" width="242" height="162" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.4" />
  <text x="145" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. SEQUENTIAL PIPELINE</text>
  <rect x="38" y="94" width="56" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="66" y="113" fill="#e0f2fe" font-size="9" text-anchor="middle">Agent A</text>
  <rect x="116" y="94" width="56" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="144" y="113" fill="#e0f2fe" font-size="9" text-anchor="middle">Agent B</text>
  <rect x="194" y="94" width="56" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" />
  <text x="222" y="113" fill="#e0f2fe" font-size="9" text-anchor="middle">Agent C</text>
  <line x1="94" y1="109" x2="112" y2="109" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Cyan)" />
  <line x1="172" y1="109" x2="190" y2="109" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Cyan)" />
  <text x="36" y="144" fill="#cbd5e1" font-size="8.5">+ Deterministic handoff, easiest debugging</text>
  <text x="36" y="158" fill="#fda4af" font-size="8.5">- Single-stage failure halts entire chain</text>
  <text x="36" y="172" fill="#94a3b8" font-size="8.5">Fit: Research -&gt; Outline -&gt; Draft -&gt; Edit</text>
  <text x="36" y="186" fill="#38bdf8" font-size="8.5">Fix: Add stage timeouts &amp; retry logic</text>

  <!-- Card 2: Parallel -->
  <rect x="279" y="60" width="242" height="162" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.4" />
  <text x="400" y="80" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. PARALLEL FAN-OUT / JUDGE</text>
  <rect x="292" y="98" width="54" height="28" rx="4" fill="#0f172a" stroke="#34d399" />
  <text x="319" y="116" fill="#d1fae5" font-size="8.5" text-anchor="middle">Dispatch</text>
  <rect x="372" y="86" width="54" height="22" rx="4" fill="#0f172a" stroke="#34d399" />
  <text x="399" y="100" fill="#d1fae5" font-size="8" text-anchor="middle">Worker 1</text>
  <rect x="372" y="114" width="54" height="22" rx="4" fill="#0f172a" stroke="#34d399" />
  <text x="399" y="128" fill="#d1fae5" font-size="8" text-anchor="middle">Worker 2</text>
  <rect x="452" y="98" width="54" height="28" rx="4" fill="#0f172a" stroke="#34d399" />
  <text x="479" y="116" fill="#d1fae5" font-size="8.5" text-anchor="middle">Synthesize</text>
  <line x1="346" y1="106" x2="368" y2="97" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Emerald)" />
  <line x1="346" y1="116" x2="368" y2="125" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Emerald)" />
  <line x1="426" y1="97" x2="448" y2="108" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Emerald)" />
  <line x1="426" y1="125" x2="448" y2="116" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Emerald)" />
  <text x="291" y="150" fill="#cbd5e1" font-size="8.5">+ Max throughput, fault-tolerant consensus</text>
  <text x="291" y="164" fill="#fda4af" font-size="8.5">- Contradictory outputs &amp; resource contention</text>
  <text x="291" y="178" fill="#94a3b8" font-size="8.5">Styles: Same-input ensemble vs. Subtask split</text>
  <text x="291" y="192" fill="#34d399" font-size="8.5">Fix: Add LLM Judge agent for conflict scoring</text>

  <!-- Card 3: Hierarchical -->
  <rect x="534" y="60" width="242" height="162" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.4" />
  <text x="655" y="80" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">3. HIERARCHICAL TREE (AgentTool)</text>
  <rect x="615" y="88" width="80" height="22" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="655" y="103" fill="#fef3c7" font-size="8.5" text-anchor="middle">Coordinator</text>
  <rect x="556" y="122" width="76" height="22" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="594" y="137" fill="#fef3c7" font-size="8" text-anchor="middle">Specialist A</text>
  <rect x="676" y="122" width="76" height="22" rx="4" fill="#0f172a" stroke="#f59e0b" />
  <text x="714" y="137" fill="#fef3c7" font-size="8" text-anchor="middle">Specialist B</text>
  <line x1="635" y1="110" x2="604" y2="120" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Amber)" />
  <line x1="675" y1="110" x2="706" y2="120" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#dmmaCh8Amber)" />
  <text x="546" y="158" fill="#cbd5e1" font-size="8.5">+ Clear domain delegation &amp; context isolation</text>
  <text x="546" y="172" fill="#fda4af" font-size="8.5">- Coordinator SPOF &amp; inter-level latency</text>
  <text x="546" y="186" fill="#94a3b8" font-size="8.5">Fit: Enterprise DevOps (AI-6 + k8s-ai)</text>
  <text x="546" y="200" fill="#fbbf24" font-size="8.5">Fix: Coordinator redundancy &amp; health checks</text>

  <!-- Card 4: Event-Driven -->
  <rect x="24" y="236" width="242" height="162" rx="8" fill="#1e293b" stroke="#c084fc" stroke-width="1.4" />
  <text x="145" y="256" fill="#c084fc" font-size="11" font-weight="700" text-anchor="middle">4. EVENT-DRIVEN (PUB / SUB)</text>
  <rect x="40" y="270" width="210" height="24" rx="4" fill="#2e1065" stroke="#c084fc" />
  <text x="145" y="286" fill="#f3e8ff" font-size="9" font-weight="600" text-anchor="middle">Event Bus / Message Queue Triggers</text>
  <text x="36" y="314" fill="#cbd5e1" font-size="8.5">+ Decoupled async reactions to state changes</text>
  <text x="36" y="328" fill="#fda4af" font-size="8.5">- Race conditions &amp; non-linear trace paths</text>
  <text x="36" y="342" fill="#94a3b8" font-size="8.5">Fit: Real-time cluster monitoring &amp; alerts</text>
  <text x="36" y="356" fill="#c084fc" font-size="8.5">Fix: Distributed correlation IDs &amp; tracing</text>
  <text x="36" y="374" fill="#e9d5ff" font-size="8.5">Agents subscribe to condition predicates</text>

  <!-- Card 5: Collaborative -->
  <rect x="279" y="236" width="242" height="162" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.4" />
  <text x="400" y="256" fill="#fb7185" font-size="11" font-weight="700" text-anchor="middle">5. COLLABORATIVE PEER MESH</text>
  <rect x="295" y="270" width="210" height="24" rx="4" fill="#4c0519" stroke="#f43f5e" />
  <text x="400" y="286" fill="#ffe4e6" font-size="9" font-weight="600" text-anchor="middle">Dynamic Peer Negotiation &amp; Consensus</text>
  <text x="291" y="314" fill="#cbd5e1" font-size="8.5">+ Emergent problem-solving on open tasks</text>
  <text x="291" y="328" fill="#fda4af" font-size="8.5">- Infinite dialogue loops, deadlocks &amp; drift</text>
  <text x="291" y="342" fill="#94a3b8" font-size="8.5">Fit: Open-ended research &amp; creative design</text>
  <text x="291" y="356" fill="#fb7185" font-size="8.5">Fix: Strict max-turn budgets &amp; quorum rules</text>
  <text x="291" y="374" fill="#fecdd3" font-size="8.5">Hardest topology to test and predict</text>

  <!-- Card 6: Hybrid & Context Isolation Principle -->
  <rect x="534" y="236" width="242" height="162" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="1.4" />
  <text x="655" y="256" fill="#60a5fa" font-size="11" font-weight="700" text-anchor="middle">6. HYBRID + CONTEXT FIREWALL</text>
  <rect x="550" y="270" width="210" height="24" rx="4" fill="#172554" stroke="#60a5fa" />
  <text x="655" y="286" fill="#dbeafe" font-size="9" font-weight="600" text-anchor="middle">Hierarchical Backbone + Parallel Validation</text>
  <text x="546" y="314" fill="#cbd5e1" font-size="8.5">• Sub-agent runs private tool loop (N tokens)</text>
  <text x="546" y="328" fill="#cbd5e1" font-size="8.5">• Returns ONLY final distilled answer to parent</text>
  <text x="546" y="342" fill="#6ee7b7" font-size="8.5">• Parent context window stays unsaturated</text>
  <text x="546" y="356" fill="#93c5fd" font-size="8.5">• Each agent selects its own optimal LLM</text>
  <text x="546" y="374" fill="#bfdbfe" font-size="8.5">• Scoped enabled_tools / disabled_tools</text>
</svg>`,
      bierutCaption:
        'Each orchestration topology trades execution predictability against concurrency and adaptability, while sub-agent state encapsulation prevents intermediate token burn from saturating the parent context.',
      annotations: [
        {
          step: '1',
          label: 'The Sub-Agent Context Firewall',
          explanation:
            'Because an AI-6 Agent hides its internal conversation history and tool-call trace behind AgentTool.run(message), a sub-agent can burn tens of thousands of tokens exploring logs while returning only a concise 200-token summary to the coordinator.',
        },
        {
          step: '2',
          label: 'Recursive Agent Trees Without Engine Changes',
          explanation:
            'To the parent LLM, AgentTool(agent_config) looks identical to any native tool (name="agent_<name>", parameter="message"); giving sub-agents their own AgentTools creates arbitrary hierarchical trees.',
        },
        {
          step: '3',
          label: 'Topology Mitigation Pairing',
          explanation:
            'Every orchestration pattern requires a specific failure guard: timeouts/retries for Sequential, a Judge agent for Parallel, redundancy for Hierarchical, distributed tracing for Event-Driven, and max-turn caps for Collaborative.',
        },
      ],
    },
    {
      id: 'dmma-ch08-svg-a2a-architecture',
      title: 'The Agent-to-Agent (A2A) Protocol & AI-6 Async-to-Sync Bridge',
      subtitle:
        'From /.well-known/agent-card.json discovery and stateful Task lifecycles to AI-6’s A2AManager, A2AMessagePump, A2AExecutor, and A2ATool',
      svgCode: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <defs>
    <linearGradient id="dmmaCh08Bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <marker id="dmmaA2ACyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="dmmaA2AEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
    </marker>
    <marker id="dmmaA2AAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>

  <rect width="800" height="420" rx="12" fill="url(#dmmaCh08Bg2)" />
  <text x="24" y="28" fill="#f8fafc" font-size="14.5" font-weight="700">AGENT-TO-AGENT (A2A) PROTOCOL &amp; AI-6 4-LAYER INTEGRATION ARCHITECTURE</text>
  <text x="24" y="45" fill="#94a3b8" font-size="11">Stateful multi-turn agent collaboration over HTTP(S) + JSON-RPC 2.0 with non-blocking SystemMessage injection</text>

  <!-- Left Column: AI-6 Coordinator & A2ATool -->
  <rect x="24" y="64" width="230" height="332" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="139" y="86" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">AI-6 COORDINATOR AGENT</text>
  <text x="139" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">Declarative config.yaml (a2a_servers)</text>

  <rect x="38" y="114" width="202" height="82" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="139" y="132" fill="#bae6fd" font-size="10" font-weight="700" text-anchor="middle">A2ATool(server_name, skill)</text>
  <text x="139" y="147" fill="#cbd5e1" font-size="8.5" text-anchor="middle">1 Tool per AgentSkill in AgentCard</text>
  <text x="139" y="162" fill="#38bdf8" font-size="8.5" text-anchor="middle">name: "{server}_{skill.name}"</text>
  <text x="139" y="177" fill="#94a3b8" font-size="8.5" text-anchor="middle">Params: message (req), task_id (opt)</text>

  <rect x="38" y="208" width="202" height="82" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="1" />
  <text x="139" y="226" fill="#bae6fd" font-size="10" font-weight="700" text-anchor="middle">Task Lifecycle Tools</text>
  <text x="139" y="242" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• a2a_list_tasks / status</text>
  <text x="139" y="257" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• a2a_cancel_task (cleanup)</text>
  <text x="139" y="272" fill="#34d399" font-size="8.5" text-anchor="middle">Immediate 0.00s non-blocking return</text>

  <rect x="38" y="302" width="202" height="78" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1" />
  <text x="139" y="320" fill="#6ee7b7" font-size="10" font-weight="700" text-anchor="middle">SystemMessage Injection</text>
  <text x="139" y="336" fill="#ecfdf5" font-size="8.5" text-anchor="middle">Receives async task updates in</text>
  <text x="139" y="350" fill="#ecfdf5" font-size="8.5" text-anchor="middle">background without blocking loop:</text>
  <text x="139" y="365" fill="#a7f3d0" font-size="8" text-anchor="middle">A2A Task Update [task_id]: ...</text>

  <!-- Center Column: 4-Layer AI-6 A2A Bridge -->
  <rect x="284" y="64" width="232" height="332" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5" />
  <text x="400" y="86" fill="#a5b4fc" font-size="11.5" font-weight="700" text-anchor="middle">AI-6 4-LAYER A2A STACK</text>
  <text x="400" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">Bridging Sync Tool Calls to Async Streams</text>

  <rect x="298" y="114" width="204" height="62" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="400" y="132" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">1. A2AExecutor (a2a_executor.py)</text>
  <text x="400" y="147" fill="#94a3b8" font-size="8.5" text-anchor="middle">Detects event loops; thread-safe</text>
  <text x="400" y="161" fill="#94a3b8" font-size="8.5" text-anchor="middle">sync-to-async execute_skill() bridge</text>

  <rect x="298" y="186" width="204" height="62" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="400" y="204" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">2. A2AManager (Singleton)</text>
  <text x="400" y="219" fill="#94a3b8" font-size="8.5" text-anchor="middle">Central lifecycle coordinator, client</text>
  <text x="400" y="233" fill="#94a3b8" font-size="8.5" text-anchor="middle">registry &amp; resource leak prevention</text>

  <rect x="298" y="258" width="204" height="62" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="400" y="276" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">3. A2AMessagePump (Background)</text>
  <text x="400" y="291" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tracks active stateful tasks &amp; injects</text>
  <text x="400" y="305" fill="#94a3b8" font-size="8.5" text-anchor="middle">SSE streaming updates into Session</text>

  <rect x="298" y="330" width="204" height="52" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="400" y="348" fill="#e0e7ff" font-size="10" font-weight="700" text-anchor="middle">4. A2AClient (a2a_client.py)</text>
  <text x="400" y="364" fill="#94a3b8" font-size="8.5" text-anchor="middle">Fetches AgentCard, BearerAuth &amp; SSE</text>

  <!-- Right Column: Remote A2A Server & Core Primitives -->
  <rect x="546" y="64" width="230" height="332" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="661" y="86" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">REMOTE A2A SERVER (k8s-ai)</text>
  <text x="661" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">http://localhost:9999 (JSON-RPC 2.0)</text>

  <rect x="560" y="114" width="202" height="78" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="661" y="132" fill="#fde68a" font-size="10" font-weight="700" text-anchor="middle">AgentCard Discovery</text>
  <text x="661" y="147" fill="#cbd5e1" font-size="8.5" text-anchor="middle">GET /.well-known/agent-card.json</text>
  <text x="661" y="162" fill="#94a3b8" font-size="8.5" text-anchor="middle">capabilities: {streaming: true}</text>
  <text x="661" y="177" fill="#fbbf24" font-size="8.5" text-anchor="middle">skills: [{id: "kubectl_operations"}]</text>

  <rect x="560" y="204" width="202" height="106" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="661" y="222" fill="#fde68a" font-size="10" font-weight="700" text-anchor="middle">5 Core A2A Primitives</text>
  <text x="572" y="238" fill="#cbd5e1" font-size="8.5">1. Agent Card: Capability &amp; auth metadata</text>
  <text x="572" y="253" fill="#cbd5e1" font-size="8.5">2. Task: Stateful unit with unique task_id</text>
  <text x="572" y="268" fill="#cbd5e1" font-size="8.5">3. Message: Conversational turn exchange</text>
  <text x="572" y="283" fill="#cbd5e1" font-size="8.5">4. Part: Text, file, or structured data</text>
  <text x="572" y="298" fill="#cbd5e1" font-size="8.5">5. Artifact: Tangible deliverable output</text>

  <rect x="560" y="322" width="202" height="60" rx="6" fill="#451a03" stroke="#f59e0b" stroke-width="1" />
  <text x="661" y="340" fill="#fcd34d" font-size="9.5" font-weight="700" text-anchor="middle">3 Interaction Mechanisms</text>
  <text x="661" y="355" fill="#fde68a" font-size="8.5" text-anchor="middle">Polling • SSE Streaming • Push Webhooks</text>
  <text x="661" y="369" fill="#94a3b8" font-size="8" text-anchor="middle">Conversational NL input (not rigid schema)</text>

  <!-- Connectors -->
  <line x1="240" y1="150" x2="294" y2="150" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaA2ACyan)" />
  <line x1="502" y1="355" x2="556" y2="155" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaA2AAmber)" />
  <line x1="556" y1="265" x2="502" y2="288" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaA2AEmerald)" />
  <line x1="294" y1="295" x2="240" y2="335" stroke="#34d399" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#dmmaA2AEmerald)" />
</svg>`,
      bierutCaption:
        'While MCP exposes stateless function calls, A2A coordinates stateful, multi-turn remote agents via AgentCards, task IDs, and background SystemMessage injection.',
      annotations: [
        {
          step: '1',
          label: 'Zero-Registration AgentCard Discovery',
          explanation:
            'At startup, tool_manager queries each configured A2A server’s /.well-known/agent-card.json endpoint and automatically instantiates one A2ATool("{server_name}_{skill.name}") for every declared skill.',
        },
        {
          step: '2',
          label: 'Conversational Skill Interface (message + task_id)',
          explanation:
            'Unlike MCP tools that require rigid parameter schemas, A2A skills accept natural-language requests via a required "message" string and an optional "task_id" string to continue existing multi-turn tasks.',
        },
        {
          step: '3',
          label: 'Non-Blocking Parallelism via A2AMessagePump',
          explanation:
            'Invoking an A2ATool returns a task_id immediately (0.00s) so the coordinator can launch concurrent tasks while A2AMessagePump streams background progress into the session as SystemMessages.',
        },
      ],
    },
  ],
  mentalModels: [
    {
      id: 'dmma-ch08-mm1',
      name: 'The Context Firewall (Sub-Agents as State-Hiding Tools)',
      tagline:
        'A sub-agent burns 50,000 tokens in private so the parent coordinator only pays for a 200-token answer.',
      naiveIntuition:
        'Giving a single frontier LLM a larger context window and every available tool is simpler and more accurate than coordinating multiple separate agents.',
      firstPrinciplesReality:
        'As a single context window fills with intermediate tool outputs and sprawling system prompts, attention degrades and token costs skyrocket; encapsulating a specialist inside AgentTool isolates its conversation history, tool subset, and model choice from the parent.',
      howToApply:
        'Wrap token-heavy subtasks (log analysis, multi-step kubectl debugging, deep web research) as explicit AgentTool or A2ATool instances that return only validated conclusions to the coordinator.',
    },
    {
      id: 'dmma-ch08-mm2',
      name: 'MCP for Tools vs. A2A for Autonomous Peers',
      tagline:
        'Use MCP to hand an agent a wrench; use A2A when an agent needs to hire a contractor.',
      naiveIntuition:
        'Because MCP can wrap any remote service over HTTP/SSE, there is no need for a separate Agent-to-Agent (A2A) protocol.',
      firstPrinciplesReality:
        'MCP is designed for deterministic, schema-driven function invocation, whereas A2A is engineered for autonomous agents conversing in natural language across stateful, long-running Tasks that emit streaming updates and tangible Artifacts.',
      howToApply:
        'Expose stateless CLIs, databases, and APIs via MCPTool, and expose autonomous domain specialists (such as a Kubernetes DevOps agent at /.well-known/agent-card.json) via A2ATool with task_id tracking.',
    },
    {
      id: 'dmma-ch08-mm3',
      name: 'Prefix-Anchored Context Layering',
      tagline:
        'Freeze permanent identity at the top of the prompt and push volatile agent telemetry to the tail.',
      naiveIntuition:
        'When sharing context across a multi-agent workflow, concatenate project updates, role definitions, and real-time error states in whatever order they arrive.',
      firstPrinciplesReality:
        'LLM providers cache KV-attention states by matching exact prompt prefixes; mutating or reordering the beginning of an agent’s context invalidates the cache on every turn and multiplies latency and cost.',
      howToApply:
        'Structure every agent’s context into four strict layers ordered by stability—Permanent (role/constraints) -> Project (goals/milestones) -> Session (current task) -> Dynamic (real-time agent updates)—and never mutate the Permanent prefix even during compaction.',
    },
  ],
  deepSections: [
    {
      id: 'dmma-ch08-sec-8-1',
      sectionNumber: '8.1',
      title: 'Explicit Agent Encapsulation, Recursive AgentTool Trees & Orchestration Topologies',
      subtitle:
        'Refactoring AI-6 Engine into Agent, isolating tool subsets, and selecting among six multi-agent coordination geometries',
      coreMechanism:
        'An AI agent is a self-contained component combining goal-encoding system prompts, a scoped tool subset, an LLM client, and private internal state (conversation and tool history) that exposes only its final response to callers. To support multi-agent systems explicitly without breaking backward compatibility, Chapter 8 refactors AI-6’s backend.engine into backend.agent (renaming Engine to Agent), adds optional system_prompt, enabled_tools, and disabled_tools fields to Config (where specifying both tool lists raises an error), and introduces AgentTool(Tool) in agent_tool.py. AgentTool instantiates a child Agent(agent_config), registers itself as "agent_<name>" accepting a single required "message" parameter, forwards optional host _on_tool_call_func callbacks, and delegates run(message) to self.agent.send_message().\n\nBecause each sub-agent can include other AgentTools in its own enabled_tools, AI-6 supports arbitrary trees of collaborating agents. Overcoming single-agent context limits, specialization confusion, and single-model lock-in requires choosing an orchestration topology matched to task structure: Sequential, Parallel, Hierarchical, Event-Driven, Collaborative, or Hybrid.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Configure Scoped Agent Identity & Tool Whitelists',
          detail:
            'Define each specialist’s Config with a dedicated default_model_id, domain system_prompt, and mutually exclusive enabled_tools or disabled_tools list.',
        },
        {
          step: '2',
          title: 'Wrap Sub-Agents in AgentTool Instances',
          detail:
            'Instantiate AgentTool(agent_config) so the parent agent sees each specialist as a standard tool named "agent_<name>" taking a natural-language "message" string.',
        },
        {
          step: '3',
          title: 'Match Orchestration Geometry to Failure & Latency Constraints',
          detail:
            'Pair the selected topology with its mandatory safeguard: retries/timeouts for Sequential, an LLM Judge for Parallel, redundancy for Hierarchical, tracing for Event-Driven, and max-turn caps for Collaborative.',
        },
      ],
      keyTakeaways: [
        'Wrapping an Agent inside AgentTool requires zero sub-agent launching code inside the Agent class itself—the LLM delegates work using its standard tool-calling loop.',
        'Parallel orchestration operates in two distinct styles: running multiple agents on the exact same input for ensemble consensus/judging, or decomposing a task into independent concurrent subtasks.',
        'Production architectures rarely use a single pure topology; Hybrid orchestration combines patterns such as a Hierarchical or Sequential backbone with Parallel validation and Event-Driven exception handling.',
      ],
      commonPitfalls: [
        'Providing both enabled_tools and disabled_tools in an AI-6 Agent Config, which violates configuration semantics and raises an initialization error.',
        'Deploying Collaborative peer-to-peer agent negotiation without a hard cap on interaction turns, risking infinite conversational loops and token exhaustion.',
      ],
      figures: [
        {
          file: 'design_multi_agent_mcp_a2a_ch08_plate.png',
          originalLabel:
            'Chapter 8 Opening Blueprint: Designing Multi-Agent Systems (Page 286)',
          bierutTitle: 'Architecting Specialized Agent Teams Through Scoped Prompts, A2A Protocols, and Context Firewalls',
          editorialAnalysis:
            'The Chapter 8 blueprint synthesizes the transition from single-agent loops to coordinated multi-agent systems: task decomposition splits problems across Coordinator, Specialist, and Validator roles; least-privilege tool scoping and prefix-cached context layering prevent cognitive overload; and AgentTool/A2ATool bridges local and remote execution.',
          keyTakeaways: [
            'Clear architectural boundaries at design time prevent inter-agent conflicts more effectively than runtime arbitration.',
            'Combining local AgentTool hierarchies with remote A2ATool specialists yields scalable, observable enterprise workflows.',
          ],
        },
      ],
    },
    {
      id: 'dmma-ch08-sec-8-2',
      sectionNumber: '8.2',
      title: 'The Agent-to-Agent (A2A) Protocol & Asynchronous Skill Bridging',
      subtitle:
        'Discovering /.well-known/agent-card.json endpoints and bridging conversational Tasks via A2AManager, A2AMessagePump, and A2ATool',
      coreMechanism:
        'While MCP standardizes stateless tool invocation, the Agent-to-Agent (A2A) protocol standardizes stateful, multi-turn collaboration across autonomous agents over HTTP(S) and JSON-RPC 2.0. A2A defines three actors—User, A2A Client (client agent), and A2A Server (remote agent)—interacting through five core primitives: Agent Card (JSON metadata at /.well-known/agent-card.json advertising capabilities, BearerAuth securitySchemes, and skills[]), Task (a stateful work unit with a unique task_id), Message (conversational turns), Part (modality-independent containers for text, file, or data), and Artifact (tangible deliverables like PDFs or images). A2A supports synchronous Request/Response polling, real-time SSE Streaming, and asynchronous Push Notifications.\n\nAI-6 integrates A2A through a four-component stack: A2AClient handles HTTP/SSE transport and AgentCard fetching; A2AManager acts as a singleton lifecycle coordinator; A2AMessagePump runs in the background to track active tasks and inject streaming updates into the host session as SystemMessages; and A2AExecutor bridges synchronous tool calls to async A2A operations. For every skill in a discovered AgentCard, tool_manager instantiates an A2ATool("{server_name}_{skill.name}") with a required "message" parameter and an optional "task_id" parameter.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Auto-Discover AgentCard Skills at Startup',
          detail:
            'tool_manager reads a2a_servers from config.yaml, uses A2AManager and A2AClient to GET /.well-known/agent-card.json (e.g., from k8s-ai on port 9999), and creates one A2ATool per skill alongside task-management tools (a2a_list_tasks, a2a_cancel_task).',
        },
        {
          step: '2',
          title: 'Dispatch Non-Blocking Conversational Skill Requests',
          detail:
            'When the coordinator invokes A2ATool.run(message, task_id), A2AExecutor.execute_skill() starts or continues the remote A2A task and returns an immediate response (0.00s) with the assigned task_id (e.g., kind-k8s-ai_Kubernetes Operations_1757901406).',
        },
        {
          step: '3',
          title: 'Stream Background Updates via SystemMessage Injection',
          detail:
            'While the coordinator launches additional parallel tasks, A2AMessagePump receives remote SSE updates and injects SystemMessage("A2A Task Update [task_id]: ...") into the AI-6 session until completion or cancellation.',
        },
      ],
      keyTakeaways: [
        'Unlike MCP tools that take structured domain schemas, A2A skills are conversational and always take a natural-language "message" string plus an optional "task_id" for multi-turn continuity.',
        'AI-6’s async A2A bridge returns immediately upon task creation, allowing a coordinator agent to run multiple remote A2A tasks concurrently without blocking its reasoning loop.',
        'Declarative configuration in config.yaml (specifying server name, URL, and timeout) is sufficient to wire an entire remote specialist agent into AI-6 with zero manual tool registration.',
      ],
      commonPitfalls: [
        'Blocking the coordinator agent’s main thread waiting for a long-running remote agent task to finish instead of returning a task_id immediately and streaming updates via SystemMessages.',
        'Forgetting to pass the existing task_id on follow-up turns to an A2ATool, which spawns a brand-new stateless task on the remote A2A server instead of continuing the conversation.',
      ],
    },
    {
      id: 'dmma-ch08-sec-8-3',
      sectionNumber: '8.3',
      title: 'Decomposition, Role Prompts, Weighted Tool Scoping, Context Layering & Conflict Resolution',
      subtitle:
        'Engineering specialist/coordinator/validator prompts, least-privilege tool matrices, prefix-cached context layers, and deterministic conflict rules',
      coreMechanism:
        'Designing collaborative workflows begins with decomposing complex problems along natural boundaries using one of three strategies: Domain Expertise (e.g., Requirements -> Development -> Testing), Workflow Stage (e.g., Research -> Planning -> Writing -> Editing -> Publishing), or reusable Capability Pattern (e.g., Collector -> Processor -> Visualizer). Each role uses a structured system prompt template: Specialist prompts define Expertise, Responsibilities, Communication Style, and Constraints; Coordinator prompts define Role, 5-step Decision Process, Delegation Principles, Conflict Resolution, Quality Assurance, and Available Agents; and Validator prompts enforce a review rubric returning APPROVED, CONDITIONAL, or REJECTED verdicts.\n\nTools are assigned under the Principle of Least Privilege using a weighted 5-criteria rubric (40% Core Necessity, 25% Security Impact, 20% Capability Overlap, 10% Learning Complexity, 5% Resource Impact). Context engineering structures each agent’s window into four stability layers—Permanent (prefix-cached at the top), Project, Session, and Dynamic—shared via Direct Passing, a Centralized Store, or Hierarchical Distribution. Finally, conflicts (Resource Competition, Overlapping Capabilities, and Authority Conflicts) are prevented via non-overlapping capability matrices or resolved via a strict priority hierarchy (Security > Compliance > Business Logic > Automation), exclusive access tokens, and consensus voting.',
      stepByStepFlow: [
        {
          step: '1',
          title: 'Decompose Roles & Author Structured Prompt Templates',
          detail:
            'Partition the workflow by domain, stage, or capability, and assign explicit Coordinator, Specialist, and Validator system prompts with strict escalation rules.',
        },
        {
          step: '2',
          title: 'Score & Scope Tools via Least-Privilege Patterns',
          detail:
            'Evaluate candidate tools against the weighted criteria table and apply Sequential Pipeline (zero overlap), Shared Infrastructure (read-only vs. read-write), or Hierarchical Permission tool patterns.',
        },
        {
          step: '3',
          title: 'Layer Context for Prefix Caching & Enforce Conflict Priority',
          detail:
            'Lock Permanent role instructions at the prompt prefix, scope Handoff/Shared context per agent, and resolve runtime disputes using exclusive resource tokens or the Security > Compliance > Business Logic > Automation precedence law.',
        },
      ],
      formulas: [
        {
          name: 'Weighted Tool Assignment Decision Score',
          expression:
            'S_{\\text{tool}} = 0.40\\,C_{\\text{nec}} + 0.25\\,S_{\\text{sec}} + 0.20\\,O_{\\text{cap}} + 0.10\\,L_{\\text{comp}} + 0.05\\,R_{\\text{cost}}',
          intuition:
            'Assigning every tool to every agent degrades LLM tool selection and expands the security blast radius. Weighting core necessity (40%) and security impact (25%) accounts for nearly two-thirds of the assignment decision.',
          variables: [
            {
              symbol: 'C_{\\text{nec}}',
              meaning: 'Core Necessity score (40% weight): whether the tool is essential for the agent’s primary function',
            },
            {
              symbol: 'S_{\\text{sec}}',
              meaning: 'Security Impact score (25% weight): safety score inversely proportional to misuse or compromise risk',
            },
            {
              symbol: 'O_{\\text{cap}}',
              meaning: 'Capability Non-Overlap score (20% weight): degree of uniqueness across other agents in the team',
            },
            {
              symbol: 'L_{\\text{comp}}',
              meaning: 'Learning Simplicity score (10% weight): ease with which the agent’s model invokes the tool accurately',
            },
            {
              symbol: 'R_{\\text{cost}}',
              meaning: 'Resource Efficiency score (5% weight): computational and financial cost efficiency per invocation',
            },
          ],
          workedExample:
            'For a Research Agent, web_search scores [10, 9, 10, 9, 8] -> 0.4(10)+0.25(9)+0.2(10)+0.1(9)+0.05(8) = 9.55 (Assign), whereas shell scores [1, 1, 2, 4, 7] -> 1.80 (Reject due to low necessity and severe security risk).',
        },
      ],
      keyTakeaways: [
        'Keeping the Permanent context layer (agent role, operational constraints, quality standards) fixed at the start of every prompt preserves LLM provider prefix caching across turns and compactions.',
        'Validator agents provide deterministic quality guardrails by classifying specialist outputs into three actionable states: APPROVED, CONDITIONAL, or REJECTED.',
        'When runtime agent conflicts cannot be avoided by capability matrices, deterministic priority precedence (Security > Compliance > Business Logic > Automation) eliminates negotiation deadlocks.',
      ],
      commonPitfalls: [
        'Over-privileging a specialist agent (e.g., giving a research agent shell, database_admin, and code_compiler tools), which increases security risk and causes tool-selection hallucinations.',
        'Injecting dynamic real-time timestamps or changing project status at the very top of the system prompt, which invalidates LLM prefix caches on every request.',
      ],
    },
  ],
  tradeOffMatrices: [
    {
      title: 'Multi-Agent Orchestration & Context Sharing Decision Matrix',
      description:
        'Selecting the optimal orchestration topology, decomposition strategy, inter-agent context pattern, and failure mitigation based on workflow characteristics.',
      headers: [
        'Pattern',
        'Best Decomposition Fit',
        'Context Sharing Mechanism',
        'Primary Vulnerability',
        'Mandatory Engineering Safeguard',
      ],
      rows: [
        [
          'Sequential Pipeline',
          'Workflow Stage (Research -> Write -> Edit)',
          'Direct Context Passing (Handoff payload)',
          'Single-agent failure halts entire pipeline',
          'Per-stage timeouts and automatic retry logic',
        ],
        [
          'Parallel Orchestration',
          'Capability Pattern / Ensemble Validation',
          'Centralized Context Store (Shared repo)',
          'Contradictory outputs and resource contention',
          'LLM Judge agent or consensus voting threshold',
        ],
        [
          'Hierarchical Tree',
          'Domain Expertise (Coordinator + Specialists)',
          'Hierarchical Context Distribution (Filtered)',
          'Coordinator single point of failure & latency',
          'Coordinator redundancy and async A2A non-blocking',
        ],
        [
          'Event-Driven Pub/Sub',
          'Reactive Monitoring & Exception Handling',
          'Event-Driven Refresh / Broadcast Triggers',
          'Race conditions and opaque async execution traces',
          'Distributed correlation logging and exclusive tokens',
        ],
        [
          'Collaborative Mesh',
          'Open-Ended Research & Emergent Design',
          'Peer-to-Peer Negotiation Messages',
          'Infinite conversation loops and deadlocks',
          'Hard interaction-count limits and human escalation',
        ],
      ],
      verdictRule:
        'Default to a Hybrid Hierarchical architecture (Coordinator + Domain Specialists + Validator) with Direct/Hierarchical context scoping for enterprise systems; add Parallel execution for independent subtasks and Event-Driven triggers for real-time monitoring.',
    },
  ],
  engineeringScenarios: [
    {
      id: 'dmma-ch08-scen1',
      title: 'Non-Blocking Parallel Kubernetes Diagnostics with AI-6 and A2A',
      roleAndContext:
        'Platform AI Architect building a DevOps assistant where an AI-6 Coordinator delegates cluster inspection to a remote k8s-ai A2A specialist server.',
      symptomOrFailure:
        'Running sequential synchronous kubectl queries for pods, services, and deployment logs causes the coordinator agent to block for 45+ seconds per turn and floods its context window with raw cluster YAML.',
      naiveFixAndWhyItFails:
        'Giving the coordinator direct local shell access to run kubectl commands bloats the coordinator’s context window and couples cluster credentials to the general-purpose reasoning agent.',
      firstPrinciplesSolution:
        'Register k8s-ai as a remote A2A server in config_async.yaml; the coordinator invokes kind-k8s-ai_kubectl_skills concurrently for pods and services (receiving immediate 0.00s task IDs) while A2AMessagePump injects distilled results via background SystemMessages.',
      measurableOutcome:
        'Executes 2 concurrent cluster diagnostic tasks in 10.4 seconds end-to-end with zero blocking on the coordinator loop and full task lifecycle control (list, status, cancel).',
    },
    {
      id: 'dmma-ch08-scen2',
      title: 'Eliminating Race Conditions & Conflicting Directives in Multi-Agent Database Workflows',
      roleAndContext:
        'Lead Systems Engineer operating a multi-agent financial pipeline where a Database Agent, an Audit Agent, and an Automation Agent concurrently modify customer records.',
      symptomOrFailure:
        'Simultaneous record updates corrupt transaction state, while overlapping queries from the Database Specialist and Data Analysis Specialist return contradictory sales figures to the user.',
      naiveFixAndWhyItFails:
        'Asking agents in their system prompts to "be careful and collaborate politely" fails because stateless LLM calls have no visibility into concurrent in-flight transactions or peer authority.',
      firstPrinciplesSolution:
        'Enforce a design-time Capability Matrix to eliminate query overlap, require exclusive Token-Based Coordination locks before mutating shared records, and apply strict Priority-Based Resolution (Security > Compliance/Audit > Business Logic > Automation).',
      measurableOutcome:
        'Eliminates concurrent write corruption and duplicate specialist responses while guaranteeing deterministic override precedence during compliance audits.',
    },
  ],
  activeRecall: {
    quiz: [
      {
        id: 'dmma-ch08-q1',
        scenarioPrompt:
          'When refactoring AI-6 from a single Engine into an explicit multi-agent system using Agent and AgentTool, how does a parent Agent invoke a child sub-agent?',
        options: [
          {
            label: 'A',
            text: 'The parent Agent class executes a dedicated spawn_subagent() RPC method built into the LLM provider SDK.',
            isCorrect: false,
            explanation:
              'The Agent class contains zero new code for launching sub-agents; all delegation happens through the standard tool-calling loop.',
          },
          {
            label: 'B',
            text: 'AgentTool wraps the child Agent instance as a standard Tool named "agent_<name>" with a required "message" parameter, so the LLM invokes it like any other tool.',
            isCorrect: true,
            explanation:
              'From the perspective of the parent agentic loop, an AgentTool is indistinguishable from a regular tool; calling run(message) triggers self.agent.send_message() on the child agent.',
          },
          {
            label: 'C',
            text: 'The parent Agent merges the child Agent’s system_prompt and conversation history directly into its own context window.',
            isCorrect: false,
            explanation:
              'Each Agent maintains its own isolated internal state and returns only the final response string, protecting the parent’s context window.',
          },
          {
            label: 'D',
            text: 'The parent Agent writes a Python script to disk and invokes it via the local STDIO MCP server.',
            isCorrect: false,
            explanation:
              'AgentTool wraps an in-process AI-6 Agent(agent_config) instance directly in Python.',
          },
        ],
      },
      {
        id: 'dmma-ch08-q2',
        scenarioPrompt:
          'How does AI-6’s A2ATool parameter signature differ from an MCPTool parameter signature, and why?',
        options: [
          {
            label: 'A',
            text: 'A2ATool always defines two standard parameters—a required "message" (natural language request) and an optional "task_id"—because A2A skills are conversational and stateful rather than rigid function schemas.',
            isCorrect: true,
            explanation:
              'A2A skills accept natural language messages rather than structured argument dictionaries, and task_id allows multi-turn continuation of an existing stateful Task.',
          },
          {
            label: 'B',
            text: 'A2ATool requires a mandatory JSON Schema inputSchema for every skill parameter, whereas MCPTool only accepts plain text strings.',
            isCorrect: false,
            explanation:
              'This reverses the two protocols: MCP tools define structured JSON Schemas, while A2A skills take conversational natural-language messages.',
          },
          {
            label: 'C',
            text: 'A2ATool takes no parameters at all because remote agents automatically read the coordinator’s memory directory.',
            isCorrect: false,
            explanation:
              'Remote A2A agents are isolated processes communicated with over HTTP/JSON-RPC via message and task_id parameters.',
          },
          {
            label: 'D',
            text: 'A2ATool requires passing the remote agent’s system prompt on every tool invocation.',
            isCorrect: false,
            explanation:
              'The remote A2A server encapsulates its own prompt, model, and tools behind its AgentCard endpoint.',
          },
        ],
      },
      {
        id: 'dmma-ch08-q3',
        scenarioPrompt:
          'You are engineering the context layers for a fleet of specialist agents to minimize LLM latency and token cost. Which ordering of the four context layers maximizes LLM provider prefix caching?',
        options: [
          {
            label: 'A',
            text: 'Dynamic -> Session -> Project -> Permanent, so the LLM reads the newest error alerts first.',
            isCorrect: false,
            explanation:
              'Placing volatile Dynamic context at the beginning invalidates the prefix cache on every single turn.',
          },
          {
            label: 'B',
            text: 'Permanent -> Project -> Session -> Dynamic, keeping static role definitions and operational constraints immutable at the prompt prefix.',
            isCorrect: true,
            explanation:
              'LLM providers cache context by matching exact prefixes; placing Permanent and Project layers first ensures cache hits across turns even when Session or Dynamic layers update.',
          },
          {
            label: 'C',
            text: 'Randomizing layer order on each turn to prevent attention sink bias.',
            isCorrect: false,
            explanation:
              'Reordering context layers destroys prefix cache hits and confuses agent reasoning.',
          },
          {
            label: 'D',
            text: 'Merging all four layers into a single summarized paragraph regenerated on every tool call.',
            isCorrect: false,
            explanation:
              'Regenerating the prefix via summarization on every call alters the opening tokens and defeats prefix caching.',
          },
        ],
      },
      {
        id: 'dmma-ch08-q4',
        scenarioPrompt:
          'In a production multi-agent system, an Automation Agent attempts to scale down a cluster node to save cost at the exact moment a Security Agent attempts to quarantine the node for forensic inspection. Under Chapter 8’s Priority-Based Resolution hierarchy, what should happen?',
        options: [
          {
            label: 'A',
            text: 'The Automation Agent wins because cost optimization tools have the lowest latency.',
            isCorrect: false,
            explanation:
              'Automation agents sit at the bottom of the priority hierarchy.',
          },
          {
            label: 'B',
            text: 'Both agents enter a Collaborative negotiation loop until they compromise on a 50% scale-down.',
            isCorrect: false,
            explanation:
              'Priority-based resolution eliminates negotiation overhead by enforcing deterministic precedence.',
          },
          {
            label: 'C',
            text: 'The Security Agent automatically wins because the precedence hierarchy orders Security > Compliance > Business Logic > Automation.',
            isCorrect: true,
            explanation:
              'Chapter 8 explicitly establishes Security > Compliance > Business Logic > Automation so critical safety and regulatory invariants always override efficiency optimizations.',
          },
          {
            label: 'D',
            text: 'Both tasks are cancelled and the database is rolled back to the previous day.',
            isCorrect: false,
            explanation:
              'When a clear priority hierarchy exists, the highest-priority agent wins deterministically without halting the system.',
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'dmma-ch08-fc1',
        category: 'architecture',
        front: 'What four additive changes transform AI-6’s single Engine into an explicit multi-agent framework?',
        back: '1) Rename Engine to Agent, 2) Add optional system_prompt to Config, 3) Add mutually exclusive enabled_tools and disabled_tools lists to Config, and 4) Add AgentTool to wrap an Agent instance as an invokable tool.',
        mentalHook: 'Rename + Prompt + Tool Whitelist/Blacklist + AgentTool wrapper.',
      },
      {
        id: 'dmma-ch08-fc2',
        category: 'architecture',
        front: 'What are the five core primitives of the Agent-to-Agent (A2A) protocol?',
        back: 'Agent Card (JSON capability metadata at /.well-known/agent-card.json), Task (stateful work unit with unique ID), Message (communication turn), Part (text/file/data container), and Artifact (tangible output deliverable).',
        mentalHook: 'Card advertises -> Task tracks -> Message turns -> Part carries -> Artifact delivers.',
      },
      {
        id: 'dmma-ch08-fc3',
        category: 'architecture',
        front: 'What are the four components of AI-6’s layered A2A client integration?',
        back: 'A2AClient (direct HTTP/SSE + AgentCard discovery), A2AManager (singleton lifecycle coordinator), A2AMessagePump (background task tracker + SystemMessage injector), and A2AExecutor (sync-to-async skill execution bridge).',
        mentalHook: 'Client talks, Manager coordinates, Pump streams SystemMessages, Executor bridges sync-to-async.',
      },
      {
        id: 'dmma-ch08-fc4',
        category: 'evaluation',
        front: 'What are the three feedback states defined in the Validator Agent system prompt template?',
        back: 'APPROVED (meets all criteria, zero regressions), CONDITIONAL (minor issues addressable with specific changes), and REJECTED (significant flaws or persistent vulnerabilities requiring rework).',
        mentalHook: 'Validator Gate: APPROVED / CONDITIONAL / REJECTED.',
      },
      {
        id: 'dmma-ch08-fc5',
        category: 'security',
        front: 'What are the five weighted criteria in the Tool Assignment Decision Framework?',
        back: 'Core Necessity (40%), Security Impact (25%), Capability Overlap (20%), Learning Complexity (10%), and Resource Impact (5%).',
        mentalHook: '40-25-20-10-5: Necessity & Security drive 65% of tool scoping.',
      },
      {
        id: 'dmma-ch08-fc6',
        category: 'optimization',
        front: 'What are the three inter-agent context sharing patterns and which orchestration topology does each fit best?',
        back: 'Direct Context Passing (fits Sequential pipelines), Centralized Context Store (fits Parallel independent workers), and Hierarchical Context Distribution (fits Coordinator-to-Specialist trees).',
        mentalHook: 'Direct = Sequential; Centralized Store = Parallel; Filtered Distribution = Hierarchical.',
      },
    ],
    feynmanChallenges: [
      {
        id: 'dmma-ch08-feyn1',
        conceptTitle: 'Asynchronous A2A Task Coordination & SystemMessage Injection in AI-6',
        prompt:
          'Explain how an AI-6 Coordinator agent can delegate two long-running Kubernetes tasks to a remote k8s-ai A2A agent in parallel without blocking its own synchronous tool-calling loop.',
        rubricChecklist: [
          'Explains startup discovery: tool_manager fetches http://localhost:9999/.well-known/agent-card.json and creates A2ATool instances (e.g., kind-k8s-ai_kubectl_skills) plus task management tools.',
          'Describes the immediate response pattern: calling A2ATool.run(message) delegates through A2AExecutor to start a stateful A2A Task and returns a unique task_id in 0.00s without blocking.',
          'Details background streaming: A2AMessagePump monitors the remote SSE stream and injects progress/completion updates into the coordinator’s conversation as SystemMessages.',
          'Mentions lifecycle control: the coordinator can inspect concurrent tasks via a2a_list_tasks, send follow-ups using task_id, or abort via a2a_cancel_task.',
        ],
        modelExplanation:
          'When AI-6 initializes with an a2a_servers entry in config.yaml, tool_manager contacts the remote k8s-ai server’s /.well-known/agent-card.json endpoint and wraps each advertised skill in an A2ATool accepting a natural-language "message" and an optional "task_id". Although AI-6’s agent loop executes tool.run() synchronously, A2ATool delegates to A2AExecutor, which uses the Immediate Response Pattern: it initiates the remote A2A task and returns the generated task_id in 0.00 seconds. Because the call does not block waiting for kubectl execution to finish, the coordinator immediately invokes a second A2ATool call in parallel. Meanwhile, AI-6’s background A2AMessagePump listens to the remote server’s SSE stream, tracks both active task IDs, and injects real-time SystemMessage updates into the coordinator’s session as results arrive, while allowing the coordinator to query status or cancel tasks via a2a_list_tasks and a2a_cancel_task.',
      },
      {
        id: 'dmma-ch08-feyn2',
        conceptTitle: 'Multi-Agent Context Engineering & Conflict Prevention Architecture',
        prompt:
          'Teach a systems architect how to structure context within and between agents to maximize cache performance, and how to prevent or resolve conflicts when multiple specialists operate in the same environment.',
        rubricChecklist: [
          'Breaks down the 4 internal context layers (Permanent, Project, Session, Dynamic) and explains why keeping Permanent at the prompt prefix preserves LLM prefix caching.',
          'Contrasts the 3 inter-agent context sharing topologies: Direct Passing (Sequential), Centralized Store (Parallel), and Hierarchical Distribution (Coordinator-managed).',
          'Identifies the 3 primary multi-agent conflict types: Resource Competition (race conditions), Overlapping Capabilities (duplicate/contradictory answers), and Hierarchical Authority Conflicts.',
          'Details prevention and resolution mechanisms: design-time Capability Matrices, Priority-Based Resolution (Security > Compliance > Business Logic > Automation), exclusive access tokens, and consensus voting.',
        ],
        modelExplanation:
          'Effective multi-agent context engineering operates both inside each agent and across agent boundaries. Internally, context is organized into four layers ordered by stability: Permanent (role, constraints, quality standards), Project (goals, milestones), Session (current task), and Dynamic (real-time updates). Because LLM providers cache prompt prefixes, locking the Permanent layer at the top guarantees cache hits even when dynamic updates or compactions occur at the tail. Across agents, teams share only scoped handoff slices via Direct Passing for sequential chains, a Centralized Store for parallel workers, or Hierarchical Distribution through a coordinator. To prevent agents from colliding over shared databases (Resource Competition), duplicating answers (Overlapping Capabilities), or issuing contradictory orders (Authority Conflicts), architects define non-overlapping Capability Matrices at design time. When runtime conflicts still arise, deterministic Priority-Based Resolution (Security > Compliance > Business Logic > Automation), exclusive resource tokens, and quorum consensus voting resolve disputes without deadlocks.',
      },
    ],
  },
  knowledgeSubgraph: {
    nodes: [
      {
        id: 'dmma-ch08-node-agent-tool',
        label: 'Explicit Agent & Recursive AgentTool',
        category: 'architecture',
        chapterNumber: 8,
        importance: 1,
        definition:
          'AI-6’s encapsulation of an autonomous reasoning component with its own system_prompt, scoped enabled_tools/disabled_tools, model, and private history, wrapped via AgentTool so parent agents invoke sub-agents as standard tools.',
        whyItMatters:
          'Creates arbitrary hierarchical agent trees while shielding the parent agent’s context window from sub-agent token burn.',
      },
      {
        id: 'dmma-ch08-node-orchestration-topologies',
        label: 'Six Multi-Agent Orchestration Topologies',
        category: 'architecture',
        chapterNumber: 8,
        importance: 1,
        definition:
          'The coordination geometries governing multi-agent workflows: Sequential, Parallel (ensemble judge or subtask split), Hierarchical, Event-Driven, Collaborative, and Hybrid.',
        whyItMatters:
          'Determines system throughput, fault tolerance, observability, and deadlock risk.',
      },
      {
        id: 'dmma-ch08-node-a2a-protocol',
        label: 'Agent-to-Agent (A2A) Protocol',
        category: 'architecture',
        chapterNumber: 8,
        importance: 1,
        definition:
          'An open HTTP(S) and JSON-RPC 2.0 standard for stateful, multi-turn collaboration between autonomous agents using AgentCards (/.well-known/agent-card.json), Tasks, Messages, Parts, and Artifacts.',
        whyItMatters:
          'Enables long-running, streaming, conversational coordination across remote specialist agents beyond stateless MCP tool calls.',
      },
      {
        id: 'dmma-ch08-node-a2a-bridge',
        label: 'AI-6 Async A2A Stack (A2ATool & MessagePump)',
        category: 'adaptation',
        chapterNumber: 8,
        importance: 2,
        definition:
          'The four-layer integration (A2AClient, A2AManager, A2AMessagePump, A2AExecutor) and A2ATool wrapper that dispatches non-blocking tasks by task_id and injects background SSE updates as SystemMessages.',
        whyItMatters:
          'Bridges synchronous tool execution with non-blocking parallel multi-tasking across remote agents.',
      },
      {
        id: 'dmma-ch08-node-tool-scoping',
        label: 'Weighted Least-Privilege Tool Assignment',
        category: 'security',
        chapterNumber: 8,
        importance: 2,
        definition:
          'A systematic framework scoring candidate tools across Core Necessity (40%), Security Impact (25%), Capability Overlap (20%), Learning Complexity (10%), and Resource Impact (5%).',
        formulaOrRule: 'S = 0.40 C_{nec} + 0.25 S_{sec} + 0.20 O_{cap} + 0.10 L_{comp} + 0.05 R_{cost}',
        whyItMatters:
          'Minimizes security blast radius and prevents LLM tool-selection hallucinations caused by over-privileged toolsets.',
      },
      {
        id: 'dmma-ch08-node-context-conflict',
        label: 'Prefix-Layered Context & Priority Conflict Resolution',
        category: 'optimization',
        chapterNumber: 8,
        importance: 2,
        definition:
          'Structuring agent context into Permanent, Project, Session, and Dynamic layers to preserve prefix caching, paired with Capability Matrices, token locks, and Security > Compliance > Business > Automation priority rules.',
        whyItMatters:
          'Prevents context window bloat, cache invalidation, race conditions, and inter-agent authority deadlocks.',
      },
    ],
    edges: [
      {
        source: 'dmma-ch08-node-agent-tool',
        target: 'dmma-ch08-node-orchestration-topologies',
        relationship: 'prerequisite_for',
        explanation:
          'Encapsulating agents with private state and tool interfaces enables Sequential, Parallel, and Hierarchical orchestration trees.',
      },
      {
        source: 'dmma-ch08-node-a2a-protocol',
        target: 'dmma-ch08-node-a2a-bridge',
        relationship: 'part_of',
        explanation:
          'AI-6’s A2AClient, A2AManager, A2AMessagePump, A2AExecutor, and A2ATool implement the A2A protocol specification for remote agent collaboration.',
      },
      {
        source: 'dmma-ch08-node-a2a-bridge',
        target: 'dmma-ch08-node-orchestration-topologies',
        relationship: 'optimizes',
        explanation:
          'Immediate 0.00s task_id returns and background SystemMessage injection enable non-blocking Parallel and Hierarchical orchestration across remote specialists.',
      },
      {
        source: 'dmma-ch08-node-tool-scoping',
        target: 'dmma-ch08-node-agent-tool',
        relationship: 'optimizes',
        explanation:
          'Weighted least-privilege scoring determines the exact enabled_tools whitelist configured on each Specialist, Coordinator, and Validator Agent.',
      },
      {
        source: 'dmma-ch08-node-context-conflict',
        target: 'dmma-ch08-node-orchestration-topologies',
        relationship: 'mitigates',
        explanation:
          'Prefix-cached context layering, capability matrices, exclusive tokens, and priority hierarchies prevent context saturation and race conditions in concurrent topologies.',
      },
    ],
  },
  veritasAudit: {
    sectionCoverageScore: 100,
    totalSourceSectionsCovered: 4,
    figuresIncluded: 1,
    antiAiVerified: true,
    auditNotes:
      'Covers 100% of Chapter 8 sections: Multi-Agent Orchestration & Explicit Agents in AI-6 (Engine->Agent, system_prompt, enabled_tools/disabled_tools, AgentTool, 6 orchestration patterns), Introduction to A2A Protocol (5 primitives, AgentCard, 3 communication mechanisms, 4-layer AI-6 stack, A2ATool, E2E k8s-ai test), Collaborative Agent Workflows (3 decomposition strategies, Specialist/Coordinator/Validator prompt templates, 40-25-20-10-5 tool assignment table, 4-layer prefix-cached context engineering, 3 context sharing patterns), and Conflict Resolution (Resource/Overlap/Authority conflicts, capability matrices, Security>Compliance>Business>Automation priority, tokens, consensus). Zero forbidden AI phrases.',
  },
};
