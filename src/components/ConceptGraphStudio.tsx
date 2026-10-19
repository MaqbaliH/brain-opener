import React, { useState, useMemo } from 'react';
import { BookMasteryPackage, ConceptNode, ConceptEdge, ConceptCategory } from '../types/book';
import {
  Share2,
  Search,
  ArrowUpRight,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Activity,
} from 'lucide-react';

interface ConceptGraphStudioProps {
  book: BookMasteryPackage;
  onJumpToChapter: (chapterNumber: number) => void;
}

const CATEGORY_COLORS: Record<ConceptCategory, string> = {
  foundation: '#2563EB',
  evaluation: '#7C3AED',
  adaptation: '#EA580C',
  architecture: '#059669',
  optimization: '#0D9488',
  data: '#D97706',
  security: '#DC2626',
};

export const ConceptGraphStudio: React.FC<ConceptGraphStudioProps> = ({
  book,
  onJumpToChapter,
}) => {
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [animateSynapses, setAnimateSynapses] = useState<boolean>(true);

  const { allNodes, allEdges } = useMemo(() => {
    const nodeMap = new Map<string, ConceptNode>();
    const edges: ConceptEdge[] = [];

    for (const ch of book.chapters) {
      for (const n of ch.knowledgeSubgraph.nodes) {
        if (!nodeMap.has(n.id)) {
          nodeMap.set(n.id, n);
        }
      }
      for (const e of ch.knowledgeSubgraph.edges) {
        edges.push(e);
      }
    }
    return {
      allNodes: Array.from(nodeMap.values()),
      allEdges: edges,
    };
  }, [book]);

  const filteredNodes = useMemo(() => {
    return allNodes.filter((n) => {
      if (selectedChapterFilter !== 'all' && n.chapterNumber !== selectedChapterFilter) {
        return false;
      }
      if (selectedCategory !== 'all' && n.category !== selectedCategory) {
        return false;
      }
      if (
        searchQuery.trim() &&
        !n.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !n.definition.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [allNodes, selectedChapterFilter, selectedCategory, searchQuery]);

  const activeNode = useMemo(() => {
    if (selectedNodeId) {
      const found = allNodes.find((n) => n.id === selectedNodeId);
      if (found) return found;
    }
    return filteredNodes[0] || allNodes[0] || null;
  }, [selectedNodeId, filteredNodes, allNodes]);

  const positionedNodes = useMemo(() => {
    const byChapter = new Map<number, ConceptNode[]>();
    for (const n of filteredNodes) {
      const list = byChapter.get(n.chapterNumber) || [];
      list.push(n);
      byChapter.set(n.chapterNumber, list);
    }

    const chaptersPresent = Array.from(byChapter.keys()).sort((a, b) => a - b);
    const coords = new Map<string, { x: number; y: number; node: ConceptNode }>();

    chaptersPresent.forEach((chNum, colIdx) => {
      const list = byChapter.get(chNum) || [];
      const colCount = Math.max(chaptersPresent.length, 1);
      const x =
        colCount === 1
          ? 520
          : 95 + (colIdx * 860) / (colCount - 1);

      list.forEach((node, rowIdx) => {
        const totalInCol = list.length;
        const y =
          totalInCol === 1
            ? 280
            : 75 + (rowIdx * 430) / Math.max(totalInCol - 1, 1);
        coords.set(node.id, { x, y, node });
      });
    });

    return coords;
  }, [filteredNodes]);

  const visibleEdges = useMemo(() => {
    return allEdges.filter(
      (e) => positionedNodes.has(e.source) && positionedNodes.has(e.target)
    );
  }, [allEdges, positionedNodes]);

  const relatedEdgesForActive = useMemo(() => {
    if (!activeNode) return [];
    return allEdges.filter(
      (e) => e.source === activeNode.id || e.target === activeNode.id
    );
  }, [allEdges, activeNode]);

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header & Filter Bar */}
      <div className="border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#2563EB] mb-1">
              <Share2 className="w-4 h-4 animate-pulse" />
              <span>Node 5 (Synapse) • Live Cross-Chapter Concept Ontology</span>
            </div>
            <h1 className="font-display text-3xl text-slate-900 dark:text-white">
              Interactive Concept Knowledge Graph ({allNodes.length} Core Concepts)
            </h1>
          </div>

          {/* Search & Category Filters */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search concept, metric, or formula..."
                className="w-full pl-9 pr-4 py-2 text-xs font-mono-code border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
              />
            </div>

            <select
              value={selectedChapterFilter}
              onChange={(e) =>
                setSelectedChapterFilter(
                  e.target.value === 'all' ? 'all' : Number(e.target.value)
                )
              }
              className="w-full sm:w-auto px-3 py-2 text-xs font-mono-code border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="all">All 10 Chapters</option>
              {book.chapters.map((c) => (
                <option key={c.chapterNumber} value={c.chapterNumber}>
                  Ch {c.chapterNumber}: {c.title.replace(/^Chapter \d+\.\s*/, '')}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value as ConceptCategory | 'all')
              }
              className="w-full sm:w-auto px-3 py-2 text-xs font-mono-code border border-[#E5E0D8] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="all">All Categories</option>
              <option value="foundation">Foundation Models</option>
              <option value="evaluation">Evaluation & Metrics</option>
              <option value="adaptation">Prompting, RAG & Finetuning</option>
              <option value="data">Dataset Engineering</option>
              <option value="optimization">Inference Optimization</option>
              <option value="architecture">Production Architecture</option>
              <option value="security">Defensive Security & Guardrails</option>
            </select>

            <button
              onClick={() => setAnimateSynapses(!animateSynapses)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono-code border cursor-pointer transition ${
                animateSynapses
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'border-[#E5E0D8] dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              title="Toggle Neural Pulse Animation"
            >
              <Activity className="w-3.5 h-3.5" />
              Synapse Pulse
            </button>
          </div>
        </div>
      </div>

      {/* Main Graph + Inspector Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left 8 Columns: Interactive SVG Concept Network */}
        <div className="xl:col-span-8 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#E5E0D8] dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-code text-slate-500">
                Showing {filteredNodes.length} concepts & {visibleEdges.length} active synapses
              </span>
              <div className="inline-flex items-center border border-[#E5E0D8] dark:border-slate-700">
                <button
                  onClick={() => setZoomScale((z) => Math.max(0.85, +(z - 0.15).toFixed(2)))}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-[11px] font-mono-code">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  onClick={() => setZoomScale((z) => Math.min(1.6, +(z + 0.15).toFixed(2)))}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {(Object.entries(CATEGORY_COLORS) as [ConceptCategory, string][]).map(
                ([cat, color]) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setSelectedCategory(selectedCategory === cat ? 'all' : cat)
                    }
                    className={`flex items-center gap-1.5 text-[11px] font-mono-code uppercase cursor-pointer transition ${
                      selectedCategory === cat
                        ? 'font-bold underline scale-105'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: color }}
                    />
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="w-full overflow-auto max-h-[600px]">
            <svg
              viewBox="0 0 1050 560"
              style={{
                width: `${zoomScale * 100}%`,
                minWidth: '760px',
                transition: 'width 0.25s ease-out',
              }}
              className="h-auto bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800 bg-swiss-grid select-none"
            >
              {/* Chapter Swimlanes */}
              {Array.from(new Set(filteredNodes.map((n) => n.chapterNumber)))
                .sort((a, b) => a - b)
                .map((chNum, idx, arr) => {
                  const x =
                    arr.length === 1
                      ? 520
                      : 95 + (idx * 860) / Math.max(arr.length - 1, 1);
                  return (
                    <g key={chNum}>
                      <line
                        x1={x}
                        y1={40}
                        x2={x}
                        y2={530}
                        stroke="rgba(148, 163, 184, 0.22)"
                        strokeDasharray="3 3"
                      />
                      <text
                        x={x}
                        y={26}
                        textAnchor="middle"
                        className="text-[10px] font-mono font-bold fill-slate-500"
                      >
                        CH {chNum}
                      </text>
                    </g>
                  );
                })}

              {/* Edges + Flowing Neural Particles */}
              {visibleEdges.map((edge, idx) => {
                const src = positionedNodes.get(edge.source);
                const tgt = positionedNodes.get(edge.target);
                if (!src || !tgt) return null;
                const isConnectedToActive =
                  activeNode &&
                  (edge.source === activeNode.id || edge.target === activeNode.id);

                const pathD = `M ${src.x} ${src.y} C ${(src.x + tgt.x) / 2} ${src.y}, ${(src.x + tgt.x) / 2} ${tgt.y}, ${tgt.x} ${tgt.y}`;

                return (
                  <g key={`${edge.source}-${edge.target}-${idx}`}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isConnectedToActive ? '#EA580C' : '#94A3B8'}
                      strokeWidth={isConnectedToActive ? 2.5 : 1.15}
                      opacity={isConnectedToActive ? 0.95 : 0.3}
                      className={
                        animateSynapses && isConnectedToActive
                          ? 'edge-flow-fast'
                          : ''
                      }
                    />
                    {animateSynapses && isConnectedToActive && (
                      <circle r={3.5} fill="#EA580C">
                        <animateMotion
                          dur="1.8s"
                          repeatCount="indefinite"
                          path={pathD}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Concept Nodes */}
              {Array.from(positionedNodes.values()).map(({ x, y, node }) => {
                const isSelected = activeNode?.id === node.id;
                const isNeighbor = relatedEdgesForActive.some(
                  (e) => e.source === node.id || e.target === node.id
                );
                const color = CATEGORY_COLORS[node.category] || '#2563EB';
                const radius =
                  node.importance === 1 ? 9.5 : node.importance === 2 ? 7.5 : 6;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${x}, ${y})`}
                    onClick={() => setSelectedNodeId(node.id)}
                    className="cursor-pointer"
                  >
                    {isSelected && (
                      <circle
                        r={radius + 8}
                        fill="none"
                        stroke="#EA580C"
                        strokeWidth={2.2}
                        className="animate-pulse-ring"
                      />
                    )}
                    {!isSelected && node.importance === 1 && animateSynapses && (
                      <circle
                        r={radius + 4}
                        fill="none"
                        stroke={color}
                        strokeWidth={1}
                        opacity={0.45}
                        className="animate-pulse-ring"
                      />
                    )}
                    <circle
                      r={radius}
                      fill={color}
                      stroke={isSelected || isNeighbor ? '#111827' : '#FFFFFF'}
                      strokeWidth={isSelected ? 2.5 : 1.5}
                    />
                    <rect
                      x={-52}
                      y={radius + 4}
                      width={104}
                      height={16}
                      rx={3}
                      fill={isSelected ? '#111827' : 'rgba(255,255,255,0.9)'}
                    />
                    <text
                      x={0}
                      y={radius + 15}
                      textAnchor="middle"
                      className="text-[9px] font-mono font-semibold"
                      fill={isSelected ? '#FFFFFF' : '#1E293B'}
                    >
                      {node.label.length > 18
                        ? node.label.slice(0, 17) + '…'
                        : node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right 4 Columns: Concept Deep Inspector */}
        <div
          key={activeNode?.id || 'empty'}
          className="xl:col-span-4 border border-[#E5E0D8] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between animate-scale-in"
        >
          {activeNode ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-1 text-xs font-mono-code uppercase font-semibold text-white"
                  style={{
                    backgroundColor: CATEGORY_COLORS[activeNode.category] || '#2563EB',
                  }}
                >
                  {activeNode.category} • Pillar Level {activeNode.importance}
                </span>
                <button
                  onClick={() => onJumpToChapter(activeNode.chapterNumber)}
                  className="inline-flex items-center gap-1 text-xs font-mono-code text-[#EA580C] hover:underline cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Jump to Chapter {activeNode.chapterNumber}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <h2 className="font-display text-3xl text-slate-900 dark:text-white">
                  {activeNode.label}
                </h2>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeNode.definition}
                </p>
              </div>

              {activeNode.formulaOrRule && (
                <div className="p-3.5 bg-slate-900 text-amber-300 font-mono-code text-xs border-l-4 border-[#EA580C]">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Quantitative Law / Rule of Thumb
                  </div>
                  {activeNode.formulaOrRule}
                </div>
              )}

              <div className="p-4 bg-[#FAF8F5] dark:bg-slate-950 border border-[#E5E0D8] dark:border-slate-800">
                <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#EA580C] mb-1">
                  Why It Matters in Production
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeNode.whyItMatters}
                </p>
              </div>

              {/* Connected Concepts */}
              <div>
                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 mb-2">
                  Semantic Graph Links ({relatedEdgesForActive.length})
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {relatedEdgesForActive.map((edge, i) => {
                    const isOutgoing = edge.source === activeNode.id;
                    const otherId = isOutgoing ? edge.target : edge.source;
                    const otherNode = allNodes.find((n) => n.id === otherId);
                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedNodeId(otherId)}
                        className="p-2.5 border border-[#E5E0D8] dark:border-slate-800 hover:border-[#EA580C] bg-slate-50/60 dark:bg-slate-800/40 cursor-pointer transition hover:translate-x-1"
                      >
                        <div className="flex items-center justify-between text-xs font-mono-code">
                          <span className="text-[#EA580C] font-semibold">
                            {isOutgoing
                              ? `→ ${edge.relationship.replace(/_/g, ' ')}`
                              : `← ${edge.relationship.replace(/_/g, ' ')}`}
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white underline">
                            {otherNode ? otherNode.label : otherId}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                          {edge.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-slate-500">Select any concept node to inspect.</div>
          )}
        </div>
      </div>
    </div>
  );
};
