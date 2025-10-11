import {
  Database,
  MessageSquare,
  Zap,
  Shield,
  BarChart3,
  GitBranch,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description:
      "Ask questions in plain English. No need to learn complex query languages or syntax.",
  },
  {
    icon: GitBranch,
    title: "Graph Visualization",
    description:
      "See your data relationships come to life with interactive, real-time graph visualizations.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get instant responses powered by optimized query execution and intelligent caching.",
  },
  {
    icon: Database,
    title: "Multi-Database Support",
    description:
      "Connect to Neo4j, ArangoDB, Amazon Neptune, and other popular graph databases.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "AI-powered insights and recommendations based on your data patterns and queries.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, role-based access control, and compliance-ready infrastructure.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="border-b border-border bg-transparent py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything you need to query smarter
          </h2>
          <p className="mb-16 text-pretty text-lg leading-relaxed text-muted-foreground">
            Powerful features designed to make database interactions effortless
            and intuitive
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-black/50 backdrop-blur-md p-6 transition-all hover:border-chart-1/50 hover:shadow-lg hover:shadow-chart-1/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1 transition-colors group-hover:bg-chart-1/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export { FeaturesSection };
