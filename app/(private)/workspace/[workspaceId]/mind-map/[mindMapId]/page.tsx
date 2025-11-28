"use client";

import React, { useCallback } from "react";
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { generateTreeLayout } from "@/features/Session/page/MindMap/helpers/generateTreeLayout";

// Mock data for mind map nodes (without positions)
const initialNodesData: Omit<Node, "position">[] = [
  {
    id: "1",
    type: "default",
    data: { label: "AI Research" },
    style: {
      background: "#8b5cf6",
      color: "white",
      border: "1px solid #7c3aed",
      borderRadius: "8px",
      padding: "10px",
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
  {
    id: "2",
    data: { label: "Machine Learning" },
    style: {
      background: "#14b8a6",
      color: "white",
      border: "1px solid #0d9488",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "3",
    data: { label: "Deep Learning" },
    style: {
      background: "#14b8a6",
      color: "white",
      border: "1px solid #0d9488",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "4",
    data: { label: "Neural Networks" },
    style: {
      background: "#6366f1",
      color: "white",
      border: "1px solid #4f46e5",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "5",
    data: { label: "CNN" },
    style: {
      background: "#ec4899",
      color: "white",
      border: "1px solid #db2777",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "6",
    data: { label: "RNN" },
    style: {
      background: "#ec4899",
      color: "white",
      border: "1px solid #db2777",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "7",
    data: { label: "Transformers" },
    style: {
      background: "#ec4899",
      color: "white",
      border: "1px solid #db2777",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "8",
    data: { label: "NLP" },
    style: {
      background: "#6366f1",
      color: "white",
      border: "1px solid #4f46e5",
      borderRadius: "8px",
      padding: "10px",
    },
  },
  {
    id: "9",
    data: { label: "Computer Vision" },
    style: {
      background: "#6366f1",
      color: "white",
      border: "1px solid #4f46e5",
      borderRadius: "8px",
      padding: "10px",
    },
  },
];

// Mock data for mind map edges
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
  { id: "e2-8", source: "2", target: "8" },
  { id: "e3-9", source: "3", target: "9" },
];

const MindMap = () => {
  const initialNodes = generateTreeLayout(initialNodesData, initialEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-screen bg-background">
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
  );
};

export default MindMap;
