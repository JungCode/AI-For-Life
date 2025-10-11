"use client";

import { Database, ShoppingCart, Users, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Explore complex relationships in your data warehouse. Query across multiple tables and discover hidden patterns with natural language.",
      example:
        "Show me all customers who purchased products in the electronics category and their average order value",
      gradient: "from-purple-500/10 to-purple-500/5",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Intelligence",
      description:
        "Understand customer behavior and product relationships. Analyze purchase patterns and optimize your product recommendations.",
      example:
        "Which products are frequently bought together with laptops in the last quarter?",
      gradient: "from-teal-500/10 to-teal-500/5",
    },
    {
      icon: Users,
      title: "Social Network Analysis",
      description:
        "Map connections between users, content, and interactions. Identify influencers and community clusters in your network.",
      example:
        "Find users with more than 1000 followers who engage with tech content",
      gradient: "from-blue-500/10 to-blue-500/5",
    },
    {
      icon: Building2,
      title: "Enterprise Knowledge",
      description:
        "Navigate organizational data and dependencies. Query across departments, projects, and resources with ease.",
      example:
        "Show me all projects using the authentication service and their team members",
      gradient: "from-violet-500/10 to-violet-500/5",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 from-background via-purple-950/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Built for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Every Use Case
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From data analytics to social networks, GraphAI adapts to your
            specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <useCase.icon className="w-7 h-7 text-purple-400" />
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {useCase.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                <p className="text-sm text-muted-foreground mb-1 font-medium">
                  Example Query:
                </p>
                <p className="text-sm text-foreground/90 italic leading-relaxed">
                  "{useCase.example}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { UseCasesSection };
