"use client";

import { type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const generateTreeLayout = (
  nodes: Omit<Node, "position">[],
  edges: Edge[]
): Node[] => {
  const nodeMap = new Map<string, Node>();
  const childrenMap = new Map<string, string[]>();

  // Build children map from edges
  edges.forEach((edge) => {
    const children = childrenMap.get(edge.source) || [];
    children.push(edge.target);
    childrenMap.set(edge.source, children);
  });

  // Find root node (node with no incoming edges)
  const targetIds = new Set(edges.map((e) => e.target));
  const rootId = nodes.find((n) => !targetIds.has(n.id))?.id || nodes[0].id;

  const horizontalSpacing = 400;
  const verticalSpacing = 100;

  const calculatePositions = (
    nodeId: string,
    x: number,
    y: number,
    level: number
  ) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return;

    const children = childrenMap.get(nodeId) || [];
    const totalWidth = Math.max(children.length - 1, 0) * horizontalSpacing;
    const startX = x - totalWidth / 2;

    nodeMap.set(nodeId, {
      ...node,
      position: { x, y },
    } as Node);

    children.forEach((childId, index) => {
      const childX = startX + index * horizontalSpacing;
      const childY = y + verticalSpacing;
      calculatePositions(childId, childX, childY, level + 1);
    });
  };

  // Start from root with initial position
  calculatePositions(rootId, 250, 0, 0);

  return Array.from(nodeMap.values());
};

export { generateTreeLayout };
