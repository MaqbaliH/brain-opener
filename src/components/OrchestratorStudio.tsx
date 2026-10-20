import React, { useState, useEffect } from 'react';
import {
  ORCHESTRATOR_NODES,
  ORCHESTRATOR_EDGES,
  AgentNodeUI,
} from '../data/orchestratorTopology';
import {
  Network,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileCode2,
  Layers,
  Activity,
} from 'lucide-react';

export const OrchestratorStudio: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('nexus');
  const [activeSimulationStep, setActiveSimulationStep] = useState<number | null>(null);
  const [liveFlowEnabled, setLiveFlowEnabled] = useState<boolean>(true);
  const [autoCycle, setAutoCycle] = useState<boolean>(false);

  const stageOrder = [
    'orchestration',
    'ingestion',
    'deconstruction',
    'synthesis',
    'verification',
    'publishing',
  ];

  useEffect(() => {
    if (!autoCycle) return;
    const timer = setInterval(() => {
      setActiveSimulationStep((prev) => {
        const next = prev === null ? 0 : (prev + 1) % stageOrder.length;
        const firstNode = ORCHESTRATOR_NODES.find((n) => n.stage === stageOrder[next]);
        if (firstNode) setSelectedNodeId(firstNode.id);
        return next;
      });
    }, 2400);
    return () => clearInterval(timer);
  }, [autoCycle]);

  const selectedNode: AgentNodeUI =
    ORCHESTRATOR_NODES.find((n) => n.id === selectedNodeId) || ORCHESTRATOR_NODES[0];

  const handleStepSimulation = () => {
    setAutoCycle(false);
    if (activeSimulationStep === null) {
      setActiveSimulationStep(0);
      setSelectedNodeId('nexus');
    } else if (activeSimulationStep < stageOrder.length - 1) {
      const nextStep = activeSimulationStep + 1;
      setActiveSimulationStep(nextStep);
      const firstNodeInStage = ORCHESTRATOR_NODES.find(
        (n) => n.stage === stageOrder[nextStep]
      );
      if (firstNodeInStage) setSelectedNodeId(firstNodeInStage.id);
    } else {
      setActiveSimulationStep(null);
    }
  };

  const incomingEdges = ORCHESTRATOR_EDGES.filter((e) => e.target === selectedNode.id);
  const outgoingEdges = ORCHESTRATOR_EDGES.filter((e) => e.source === selectedNode.id);

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header Banner */}
      <div className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#EA580C] mb-2">
              <Network className="w-4 h-4 animate-pulse" />
              <span>Node 0 Conductor • Live Multi-Agent DAG Topology</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white">
              Nexus Multi-Agent Orchestrator & Live Node Telemetry
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Every book in PRISM flows through a deterministic 9-node Directed Acyclic Graph (DAG).{' '}
              <strong>Nexus</strong> coordinates ingestion (<strong>Archon</strong>), first-principles deconstruction (
              <strong>Axiom</strong>), 4-way parallel synthesis (<strong>Feynman, Prism, Synapse, Socrates</strong>),
              completeness gatekeeping (<strong>Veritas</strong>), and Swiss-grid UI compilation (<strong>Atlas</strong>).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setLiveFlowEnabled(!liveFlowEnabled)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-mono-code uppercase border cursor-pointer transition ${
                liveFlowEnabled
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'border-[#E5E0D8] dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              {liveFlowEnabled ? 'Packets Flowing' : 'Packets Paused'}
            </button>

            <button
              onClick={() => {
                if (!autoCycle && activeSimulationStep === null) {
                  setActiveSimulationStep(0);
                }
                setAutoCycle(!autoCycle);
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-mono-code uppercase cursor-pointer transition ${
                autoCycle
                  ? 'bg-[#111827] text-white dark:bg-amber-600'
                  : 'border border-[#E5E0D8] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              {autoCycle ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {autoCycle ? 'Pause Auto-Tour' : 'Auto-Cycle DAG'}
            </button>

            <button
              onClick={handleStepSimulation}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#EA580C] hover:bg-[#D94E06] text-white text-xs font-mono-code uppercase tracking-wider transition cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              {activeSimulationStep === null
                ? 'Step Stage'
                : `Stage ${activeSimulationStep + 1}/${stageOrder.length}: ${stageOrder[activeSimulationStep].toUpperCase()}`}
            </button>

            {activeSimulationStep !== null && (
              <button
                onClick={() => {
                  setAutoCycle(false);
                  setActiveSimulationStep(null);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-[#E5E0D8] dark:border-slate-700 text-xs font-mono-code text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Split Grid: Interactive SVG DAG Canvas + Node Inspector */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left 8 Columns: Interactive SVG Node Graph */}
        <div className="xl:col-span-8 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#E5E0D8] dark:border-slate-800 pb-3 mb-4">
            <span className="text-xs font-mono-code uppercase tracking-wider text-slate-500">
              Interactive Node Topology (Click any agent node to inspect live contracts & streams)
            </span>
            <span className="text-xs font-mono-code text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              9 Nodes • 14 Directed Streams Active
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 1020 550"
              className="w-full h-auto min-w-[720px] select-none bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 bg-swiss-grid"
            >
              <defs>
                <marker
                  id="arrow-default"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
                </marker>
                <marker
                  id="arrow-active"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#EA580C" />
                </marker>
                <marker
                  id="arrow-loop"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                </marker>
              </defs>

              {/* Stage Column Background Guides */}
              {[
                { label: '0. ORCHESTRATE', x: 30, w: 135 },
                { label: '1. INGEST', x: 185, w: 145 },
                { label: '2. DECONSTRUCT', x: 350, w: 155 },
                { label: '3. PARALLEL FAN-OUT SYNTHESIS', x: 525, w: 190 },
                { label: '4. AUDIT GATE', x: 735, w: 130 },
                { label: '5. PUBLISH', x: 880, w: 120 },
              ].map((col, idx) => {
                const isSimStage = activeSimulationStep === idx;
                return (
                  <g key={col.label}>
                    <rect
                      x={col.x}
                      y={20}
                      width={col.w}
                      height={510}
                      rx={4}
                      fill={
                        isSimStage
                          ? 'rgba(234, 88, 12, 0.09)'
                          : 'rgba(148, 163, 184, 0.04)'
                      }
                      stroke={isSimStage ? '#EA580C' : 'rgba(148, 163, 184, 0.22)'}
                      strokeWidth={isSimStage ? 2 : 1}
                      strokeDasharray="4 4"
                    />
                    <text
                      x={col.x + col.w / 2}
                      y={42}
                      textAnchor="middle"
                      className="text-[10px] font-mono fill-slate-500 font-semibold"
                    >
                      {col.label}
                    </text>
                  </g>
                );
              })}

              {/* Edges + Live Traveling Payload Particles */}
              {ORCHESTRATOR_EDGES.map((edge, edgeIdx) => {
                const src = ORCHESTRATOR_NODES.find((n) => n.id === edge.source)!;
                const tgt = ORCHESTRATOR_NODES.find((n) => n.id === edge.target)!;
                const isHighlighted =
                  selectedNodeId === edge.source || selectedNodeId === edge.target;

                if (edge.isFeedbackLoop) {
                  const pathD = `M ${src.x} ${src.y - 38} C ${src.x - 20} 40, ${tgt.x + 80} 40, ${tgt.x + 45} ${tgt.y - 25}`;
                  return (
                    <g key={edge.id} opacity={isHighlighted ? 1 : 0.6}>
                      <path
                        id={`dag-path-${edge.id}`}
                        d={pathD}
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth={isHighlighted ? 2.2 : 1.5}
                        strokeDasharray="5 4"
                        className={liveFlowEnabled ? 'edge-flow-animated' : ''}
                        markerEnd="url(#arrow-loop)"
                      />
                      <text
                        x={(src.x + tgt.x) / 2 + 20}
                        y={54}
                        textAnchor="middle"
                        className="text-[9px] font-mono fill-red-600 font-medium"
                      >
                        {edge.label}
                      </text>
                    </g>
                  );
                }

                let pathD = '';
                if (edge.id === 'E14') {
                  pathD = `M ${src.x + 55} ${src.y - 15} C ${src.x + 160} ${src.y - 90}, ${tgt.x - 140} ${tgt.y - 20}, ${tgt.x - 62} ${tgt.y}`;
                } else if (edge.id === 'E17') {
                  pathD = `M ${src.x + 40} ${src.y + 36} C ${src.x + 180} 515, ${tgt.x - 160} 515, ${tgt.x - 20} ${tgt.y + 38}`;
                } else {
                  pathD = `M ${src.x + 60} ${src.y} C ${(src.x + tgt.x) / 2} ${src.y}, ${(src.x + tgt.x) / 2} ${tgt.y}, ${tgt.x - 62} ${tgt.y}`;
                }

                return (
                  <g key={edge.id} opacity={isHighlighted ? 1 : 0.55}>
                    <path
                      id={`dag-path-${edge.id}`}
                      d={pathD}
                      fill="none"
                      stroke={isHighlighted ? '#EA580C' : '#64748B'}
                      strokeWidth={isHighlighted ? 2.5 : 1.6}
                      className={
                        liveFlowEnabled && isHighlighted ? 'edge-flow-fast' : ''
                      }
                      markerEnd={
                        isHighlighted ? 'url(#arrow-active)' : 'url(#arrow-default)'
                      }
                    />
                    {liveFlowEnabled && (
                      <circle
                        r={isHighlighted ? 4.2 : 3}
                        fill={isHighlighted ? '#EA580C' : '#2563EB'}
                      >
                        <animateMotion
                          dur={`${2.2 + (edgeIdx % 4) * 0.45}s`}
                          repeatCount="indefinite"
                          path={pathD}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {ORCHESTRATOR_NODES.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const isStageActive =
                  activeSimulationStep !== null &&
                  stageOrder[activeSimulationStep] === node.stage;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x - 58}, ${node.y - 34})`}
                    onClick={() => setSelectedNodeId(node.id)}
                    className="cursor-pointer"
                  >
                    {(isSelected || isStageActive) && (
                      <rect
                        x={-6}
                        y={-6}
                        width={128}
                        height={80}
                        rx={8}
                        fill="none"
                        stroke={node.color}
                        strokeWidth={2.5}
                        className="animate-pulse-ring"
                      />
                    )}
                    <rect
                      x={0}
                      y={0}
                      width={116}
                      height={68}
                      rx={6}
                      fill={isSelected ? '#111827' : '#FFFFFF'}
                      stroke={isSelected ? node.color : '#CBD5E1'}
                      strokeWidth={isSelected ? 2.2 : 1.5}
                    />
                    <rect
                      x={0}
                      y={0}
                      width={116}
                      height={6}
                      rx={3}
                      fill={node.color}
                    />
                    <text
                      x={10}
                      y={22}
                      className="text-[9px] font-mono font-bold"
                      fill={isSelected ? '#94A3B8' : '#64748B'}
                    >
                      NODE 0{node.nodeNumber}
                    </text>
                    <circle
                      cx={102}
                      cy={18}
                      r={4}
                      fill="#10B981"
                      className={isSelected ? 'animate-ping' : ''}
                    />
                    <circle cx={102} cy={18} r={4} fill="#10B981" />
                    <text
                      x={10}
                      y={41}
                      className="text-[14px] font-bold"
                      fill={isSelected ? '#FFFFFF' : '#0F172A'}
                    >
                      {node.name}
                    </text>
                    <text
                      x={10}
                      y={56}
                      className="text-[9px] font-mono"
                      fill={isSelected ? '#CBD5E1' : '#475569'}
                    >
                      {node.stage.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Global Creative Collaborators Footer Bar */}
          <div className="mt-4 pt-4 border-t border-[#E5E0D8] dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
              Connected Global Creative Skills:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Graphy', role: 'Swiss Grid & 60-30-10 Color' },
                { name: 'Aurelia', role: 'Art Direction & Prompts' },
                { name: 'Zephyr', role: 'Spatial Layout Grids' },
                { name: 'Guten', role: '3-Level Typography & Measure' },
                { name: 'Reviewer', role: 'Anti-AI Voice Audit' },
              ].map((collab) => (
                <span
                  key={collab.name}
                  className="px-2.5 py-1 text-xs font-mono-code bg-[#F3EFEA] dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-[#E5E0D8] dark:border-slate-700"
                >
                  <strong>{collab.name}</strong> · {collab.role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right 4 Columns: Selected Node Deep Inspector */}
        <div
          key={selectedNode.id}
          className="xl:col-span-4 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between space-y-6 animate-scale-in"
        >
          <div>
            <div className="flex items-center justify-between">
              <span
                className="px-2.5 py-1 text-xs font-mono-code font-semibold uppercase tracking-wider text-white"
                style={{ backgroundColor: selectedNode.color }}
              >
                Node 0{selectedNode.nodeNumber} • {selectedNode.stage}
              </span>
              <span className="text-xs font-mono-code text-slate-500 flex items-center gap-1">
                <FileCode2 className="w-3.5 h-3.5" />
                {selectedNode.skillPath}
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
              {selectedNode.name}: {selectedNode.title}
            </h2>
            <p className="mt-1 text-xs font-mono-code text-slate-500">
              {selectedNode.persona}
            </p>

            <div className="mt-4 p-4 bg-[#FAF8F5] dark:bg-slate-950 border-l-4 border-[#EA580C]">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-slate-500 mb-1">
                Core Mandate
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {selectedNode.coreMandate}
              </p>
            </div>

            {/* I/O Contracts */}
            <div className="mt-5 space-y-3">
              <div className="p-3 border border-[#E5E0D8] dark:border-slate-800">
                <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-500">
                  Input Payload Contract
                </div>
                <div className="mt-1 text-xs font-mono-code text-slate-900 dark:text-slate-100 break-words">
                  {selectedNode.inputContract}
                </div>
              </div>
              <div className="p-3 border border-[#E5E0D8] dark:border-slate-800">
                <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-500">
                  Output Payload Contract
                </div>
                <div className="mt-1 text-xs font-mono-code text-emerald-700 dark:text-emerald-400 break-words">
                  {selectedNode.outputContract}
                </div>
              </div>
            </div>

            {/* Node Connections (Incoming & Outgoing Edges) */}
            <div className="mt-5 space-y-3">
              <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Active Node Connections ({incomingEdges.length} In / {outgoingEdges.length} Out)
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {incomingEdges.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => setSelectedNodeId(e.source)}
                    className="flex items-center justify-between p-2 text-xs font-mono-code bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 cursor-pointer transition"
                  >
                    <span className="text-slate-600 dark:text-slate-300">
                      <strong>IN [{e.id}]</strong> from{' '}
                      <span className="underline">{e.source.toUpperCase()}</span>
                    </span>
                    <span className="text-[11px] text-slate-500">{e.payloadType}</span>
                  </div>
                ))}
                {outgoingEdges.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => setSelectedNodeId(e.target)}
                    className="flex items-center justify-between p-2 text-xs font-mono-code bg-orange-50/50 dark:bg-slate-800/60 hover:bg-orange-100/50 dark:hover:bg-slate-800 border border-[#E5E0D8] dark:border-slate-700 cursor-pointer transition"
                  >
                    <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1">
                      <strong>OUT [{e.id}]</strong>{' '}
                      <ArrowRight className="w-3 h-3 text-[#EA580C]" />{' '}
                      <span className="underline">{e.target.toUpperCase()}</span>
                    </span>
                    <span className="text-[11px] text-[#EA580C]">{e.payloadType}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Execution Telemetry Card */}
          <div className="p-4 bg-slate-900 text-white space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-code text-emerald-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                AI Engineering Execution Telemetry
              </span>
              <span>CERTIFIED</span>
            </div>
            <div className="text-xs font-mono-code text-slate-300">
              • <strong>Processed:</strong> {selectedNode.executionMetrics.itemsProcessed}
            </div>
            <div className="text-xs font-mono-code text-slate-300">
              • <strong>Throughput:</strong> {selectedNode.executionMetrics.latencyOrThroughput}
            </div>
            <div className="text-xs text-slate-400 pt-1 border-t border-slate-800">
              {selectedNode.executionMetrics.verificationNote}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
