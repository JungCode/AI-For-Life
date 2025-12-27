"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
  type Node,
  type Edge,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useGetMindmapByIdQuery } from "@/shared/generated/schemas";
import { useParams } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Network } from "lucide-react";

// TODO: Remove this mock data later
const mockNodes: Node[] = [
  {
    id: "1",
    type: "default",
    data: { label: "RAG Architecture" },
    position: { x: 400, y: 50 },
    style: {
      background: "#8b5cf6",
      color: "#fff",
      border: "2px solid #7c3aed",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "12px 24px",
    },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Retrieval System" },
    position: { x: 100, y: 180 },
    style: {
      background: "#6366f1",
      color: "#fff",
      border: "2px solid #4f46e5",
      borderRadius: "10px",
      fontSize: "15px",
      fontWeight: "600",
      padding: "10px 20px",
    },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Generation System" },
    position: { x: 700, y: 180 },
    style: {
      background: "#6366f1",
      color: "#fff",
      border: "2px solid #4f46e5",
      borderRadius: "10px",
      fontSize: "15px",
      fontWeight: "600",
      padding: "10px 20px",
    },
  },
  {
    id: "4",
    type: "default",
    data: { label: "Vector Database" },
    position: { x: -100, y: 310 },
    style: {
      background: "#3b82f6",
      color: "#fff",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      padding: "8px 16px",
    },
  },
  {
    id: "5",
    type: "default",
    data: { label: "Embeddings" },
    position: { x: 120, y: 310 },
    style: {
      background: "#3b82f6",
      color: "#fff",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      padding: "8px 16px",
    },
  },
  {
    id: "6",
    type: "default",
    data: { label: "Query Processing" },
    position: { x: 340, y: 310 },
    style: {
      background: "#3b82f6",
      color: "#fff",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      padding: "8px 16px",
    },
  },
  {
    id: "7",
    type: "default",
    data: { label: "Large Language Model" },
    position: { x: 600, y: 310 },
    style: {
      background: "#3b82f6",
      color: "#fff",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      padding: "8px 16px",
    },
  },
  {
    id: "8",
    type: "default",
    data: { label: "Prompt Engineering" },
    position: { x: 850, y: 310 },
    style: {
      background: "#3b82f6",
      color: "#fff",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      padding: "8px 16px",
    },
  },
  {
    id: "9",
    type: "default",
    data: { label: "Response Formatting" },
    position: { x: 1070, y: 310 },
    style: {
      background: "#3b82f6",
      color: "#fff",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      padding: "8px 16px",
    },
  },
  {
    id: "10",
    type: "default",
    data: { label: "Pinecone" },
    position: { x: -200, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "11",
    type: "default",
    data: { label: "Weaviate" },
    position: { x: -80, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "12",
    type: "default",
    data: { label: "Chroma" },
    position: { x: 40, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "13",
    type: "default",
    data: { label: "OpenAI Ada" },
    position: { x: 80, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "14",
    type: "default",
    data: { label: "Sentence Transformers" },
    position: { x: 180, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "15",
    type: "default",
    data: { label: "Query Rewriting" },
    position: { x: 320, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "16",
    type: "default",
    data: { label: "Semantic Search" },
    position: { x: 440, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "17",
    type: "default",
    data: { label: "GPT-4" },
    position: { x: 560, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "18",
    type: "default",
    data: { label: "Claude" },
    position: { x: 660, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "19",
    type: "default",
    data: { label: "System Prompts" },
    position: { x: 820, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
  {
    id: "20",
    type: "default",
    data: { label: "Few-shot Examples" },
    position: { x: 950, y: 440 },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      border: "2px solid #0284c7",
      borderRadius: "8px",
      padding: "6px 12px",
      fontSize: "13px",
    },
  },
];

// TODO: Remove this mock data later
const mockEdges: Edge[] = [
  // Root to main branches
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
  },

  // Retrieval System branches
  {
    id: "e2-4",
    source: "2",
    target: "4",
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },
  {
    id: "e2-6",
    source: "2",
    target: "6",
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },

  // Generation System branches
  {
    id: "e3-7",
    source: "3",
    target: "7",
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },
  {
    id: "e3-8",
    source: "3",
    target: "8",
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },
  {
    id: "e3-9",
    source: "3",
    target: "9",
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },

  // Vector Database children
  { id: "e4-10", source: "4", target: "10", style: { stroke: "#3b82f6" } },
  { id: "e4-11", source: "4", target: "11", style: { stroke: "#3b82f6" } },
  { id: "e4-12", source: "4", target: "12", style: { stroke: "#3b82f6" } },

  // Embeddings children
  { id: "e5-13", source: "5", target: "13", style: { stroke: "#3b82f6" } },
  { id: "e5-14", source: "5", target: "14", style: { stroke: "#3b82f6" } },

  // Query Processing children
  { id: "e6-15", source: "6", target: "15", style: { stroke: "#3b82f6" } },
  { id: "e6-16", source: "6", target: "16", style: { stroke: "#3b82f6" } },

  // LLM children
  { id: "e7-17", source: "7", target: "17", style: { stroke: "#3b82f6" } },
  { id: "e7-18", source: "7", target: "18", style: { stroke: "#3b82f6" } },

  // Prompt Engineering children
  { id: "e8-19", source: "8", target: "19", style: { stroke: "#3b82f6" } },
  { id: "e8-20", source: "8", target: "20", style: { stroke: "#3b82f6" } },
];

const MindMap = () => {
  const { workspaceId, mindMapId } = useParams();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const { data } = useGetMindmapByIdQuery({
    context: {
      headers: {
        ["x-workspace-id"]: workspaceId || "",
      },
    },
    variables: {
      getMindmapByIdId: (mindMapId as string) || "",
    },
    fetchPolicy: "network-only",
  });
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      // Center the view on the selected node
      const x = node.position.x + 100;
      const y = node.position.y + 50;
      // You can add zoom/pan logic here if needed
    }
  };

  useEffect(() => {
    if (!data?.getMindmapById?.data) {
      // TODO: Remove mock data usage later
      setNodes(mockNodes);
      setEdges(mockEdges);
      return;
    }

    const nodesData = data.getMindmapById.data.nodes as Node[];
    const edgesData = data.getMindmapById.data.edges as Edge[];

    setNodes(nodesData);
    setEdges(edgesData);
  }, [data?.getMindmapById?.id, setNodes, setEdges]);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar with node list */}
      <div className="w-80 bg-black/60 backdrop-blur-md border-r border-white/10 flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-purple-400" />
            <h2 className="text-lg font-semibold">Mind Map Nodes</h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {nodes.length} nodes
          </p>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {nodes.map((node) => (
              <button
                key={node.id}
                onClick={() => handleNodeClick(node.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedNode === node.id
                    ? "bg-purple-500/20 border-purple-500/50"
                    : "bg-black/40 border-white/10 hover:bg-black/60 hover:border-purple-500/30"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        (node.style?.background as string) || "#8b5cf6",
                    }}
                  />
                  <span className="text-sm font-medium">
                    {(node.data?.label as string) || node.id}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-muted-foreground text-center">
            Click on a node to focus
          </p>
        </div>
      </div>

      {/* Mind Map Canvas */}
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default MindMap;
