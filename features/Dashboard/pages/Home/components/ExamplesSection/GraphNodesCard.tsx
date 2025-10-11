"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const GraphNodesCard = () => {
  const chartPoints = [
    { x: 0, y: 60 },
    { x: 20, y: 45 },
    { x: 40, y: 55 },
    { x: 60, y: 40 },
    { x: 80, y: 50 },
    { x: 100, y: 35 },
  ];

  const pathData = chartPoints
    .map((point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`;
      const prevPoint = chartPoints[i - 1];
      const cpX = (prevPoint.x + point.x) / 2;
      return `Q ${cpX} ${prevPoint.y}, ${point.x} ${point.y}`;
    })
    .join(" ");

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-foreground">
            Graph Nodes
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground h-auto p-0 hover:text-foreground"
          >
            View More
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">+8,547</div>
        <div className="flex items-center gap-1 text-sm text-chart-5 mt-1">
          <TrendingUp className="h-4 w-4" />
          <span>+245.3% from last month</span>
        </div>
        <div className="h-20 mt-6 relative">
          <svg
            viewBox="0 0 100 80"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d={pathData}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export { GraphNodesCard };
