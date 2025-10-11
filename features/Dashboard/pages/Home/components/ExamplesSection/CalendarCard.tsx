import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarCard() {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">June 2025</CardTitle>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-muted rounded">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-1 hover:bg-muted rounded">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {daysOfWeek.map((day) => (
            <div key={day} className="p-1 text-muted-foreground font-medium">
              {day}
            </div>
          ))}
          {daysInMonth.map((day) => (
            <button
              key={day}
              className={`p-1 hover:bg-muted rounded text-sm ${
                day === 13 ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
