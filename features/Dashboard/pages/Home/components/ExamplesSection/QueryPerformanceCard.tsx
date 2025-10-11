"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const QueryPerformanceCard = () => {
  const performanceData = [
    { height: 30 },
    { height: 45 },
    { height: 35 },
    { height: 60 },
    { height: 50 },
    { height: 70 },
    { height: 85 },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          Avg Query Speed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">24.5ms</div>
        <div className="flex items-center gap-1 text-sm text-chart-5 mt-1">
          <TrendingUp className="h-4 w-4" />
          <span>+32% faster than last week</span>
        </div>  
        <div className="flex items-end gap-1 h-20 mt-6">
          {performanceData.map((bar, i) => (
            <div
              key={i}
              className="flex-1 bg-muted-foreground/30 rounded-sm transition-all hover:bg-muted-foreground/50"
              style={{ height: `${bar.height}%` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { QueryPerformanceCard };
