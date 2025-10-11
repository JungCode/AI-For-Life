"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

const DatabaseActivityCard = () => {
  const activityBars = [
    { height: 40 },
    { height: 55 },
    { height: 70 },
    { height: 85 },
    { height: 75 },
    { height: 90 },
    { height: 65 },
    { height: 80 },
    { height: 95 },
    { height: 70 },
    { height: 85 },
    { height: 75 },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground flex items-center gap-2">
          <Database className="h-4 w-4" />
          Database Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-2">
          Active connections today
        </div>
        <div className="flex items-center justify-between mb-4">
          <button className="text-2xl font-bold text-foreground hover:text-muted-foreground">
            −
          </button>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">1,247</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              Connections
            </div>
          </div>
          <button className="text-2xl font-bold text-foreground hover:text-muted-foreground">
            +
          </button>
        </div>
        <div className="flex items-end gap-1 h-16 mb-4">
          {activityBars.map((bar, i) => (
            <div
              key={i}
              className="flex-1 bg-muted-foreground/30 rounded-sm transition-all hover:bg-muted-foreground/50"
              style={{ height: `${bar.height}%` }}
            />
          ))}
        </div>
        <Button className="w-full bg-muted text-foreground hover:bg-muted/80">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export { DatabaseActivityCard };
