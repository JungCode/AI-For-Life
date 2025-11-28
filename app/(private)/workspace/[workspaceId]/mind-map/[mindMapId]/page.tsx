"use client";

import React, { useCallback, useEffect } from "react";
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
import { useGetMindmapByIdQuery } from "@/shared/generated/schemas";
import { useParams } from "next/navigation";

const MindMap = () => {
  const { workspaceId, mindMapId } = useParams();
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

  useEffect(() => {
    if (!data?.getMindmapById?.data) return;

    const nodesData = data.getMindmapById.data.nodes as Node[];
    const edgesData = data.getMindmapById.data.edges as Edge[];

    setNodes(nodesData);
    setEdges(edgesData);
  }, [data?.getMindmapById?.id, setNodes, setEdges]);

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
