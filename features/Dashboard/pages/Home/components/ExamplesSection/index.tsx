import { QueryPerformanceCard } from "@/features/Dashboard/pages/Home/components/ExamplesSection/QueryPerformanceCard";
import { GraphNodesCard } from "@/features/Dashboard/pages/Home/components/ExamplesSection/GraphNodesCard";
import { CalendarCard } from "@/features/Dashboard/pages/Home/components/ExamplesSection/CalendarCard";
import { DatabaseActivityCard } from "@/features/Dashboard/pages/Home/components/ExamplesSection/DatabaseActivityCard";

const ExamplesSection = () => {
  return (
    <section className="container relative pb-8 md:pb-12 lg:pb-24">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 overflow-x-auto">
            <button className="text-sm font-medium text-foreground border-b-2 border-primary pb-2 whitespace-nowrap">
              Examples
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Dashboard
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Tasks
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Playground
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Authentication
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Theme:</span>
            <select className="text-sm bg-background border border-border rounded px-2 py-1">
              <option>Default</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <QueryPerformanceCard />
          <GraphNodesCard />
          <CalendarCard />
          <DatabaseActivityCard />
        </div>
      </div>
    </section>
  );
};

export { ExamplesSection };
