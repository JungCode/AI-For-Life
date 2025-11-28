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
const initialNodesData: Node[] = [
  {
    id: "n1",
    position: {
      x: 0,
      y: 0,
    },
    style: {
      background: "#8b5cf6",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "AI Overview",
    },
  },
  {
    id: "n2",
    position: {
      x: 200,
      y: 0,
    },
    style: {
      background: "#14b8a6",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Introduction",
    },
  },
  {
    id: "n3",
    position: {
      x: 200,
      y: 120,
    },
    style: {
      background: "#14b8a6",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Machine Learning",
    },
  },
  {
    id: "n4",
    position: {
      x: 200,
      y: 240,
    },
    style: {
      background: "#14b8a6",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Deep Learning",
    },
  },
  {
    id: "n5",
    position: {
      x: 200,
      y: 360,
    },
    style: {
      background: "#14b8a6",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Applications",
    },
  },
  {
    id: "n6",
    position: {
      x: 400,
      y: 0,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "What is AI",
    },
  },
  {
    id: "n7",
    position: {
      x: 400,
      y: 120,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "History of AI",
    },
  },
  {
    id: "n8",
    position: {
      x: 400,
      y: 240,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Supervised Learning",
    },
  },
  {
    id: "n9",
    position: {
      x: 400,
      y: 360,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Unsupervised Learning",
    },
  },
  {
    id: "n10",
    position: {
      x: 400,
      y: 480,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Reinforcement Learning",
    },
  },
  {
    id: "n11",
    position: {
      x: 400,
      y: 600,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Neural Networks",
    },
  },
  {
    id: "n12",
    position: {
      x: 400,
      y: 720,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Convolutional Neural Networks",
    },
  },
  {
    id: "n13",
    position: {
      x: 400,
      y: 840,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Recurrent Neural Networks",
    },
  },
  {
    id: "n14",
    position: {
      x: 400,
      y: 960,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Transformers",
    },
  },
  {
    id: "n15",
    position: {
      x: 400,
      y: 1080,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Natural Language Processing",
    },
  },
  {
    id: "n16",
    position: {
      x: 400,
      y: 1200,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Computer Vision",
    },
  },
  {
    id: "n17",
    position: {
      x: 400,
      y: 1320,
    },
    style: {
      background: "#6366f1",
      border: "1px solid black",
      borderRadius: "5px",
      color: "white",

      padding: "10px",
    },
    data: {
      label: "Robotics",
    },
  },
];

// Mock data for mind map edges
const initialEdges: Edge[] = [
  {
    animated: true,
    id: "e1-2",
    source: "n1",
    target: "n2",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e1-3",
    source: "n1",
    target: "n3",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e1-4",
    source: "n1",
    target: "n4",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e1-5",
    source: "n1",
    target: "n5",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e2-6",
    source: "n2",
    target: "n6",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e2-7",
    source: "n2",
    target: "n7",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e3-8",
    source: "n3",
    target: "n8",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e3-9",
    source: "n3",
    target: "n9",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e3-10",
    source: "n3",
    target: "n10",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e4-11",
    source: "n4",
    target: "n11",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e4-12",
    source: "n4",
    target: "n12",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e4-13",
    source: "n4",
    target: "n13",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e4-14",
    source: "n4",
    target: "n14",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e5-15",
    source: "n5",
    target: "n15",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e5-16",
    source: "n5",
    target: "n16",
    data: {
      label: null,
    },
  },
  {
    animated: true,
    id: "e5-17",
    source: "n5",
    target: "n17",
    data: {
      label: null,
    },
  },
];

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesData);
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
