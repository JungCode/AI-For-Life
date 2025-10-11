"use client";

import {
  Search,
  Shield,
  TrendingUp,
  FileText,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ResearchFeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Literature Search",
      description:
        "Find relevant research papers across multiple databases with natural language queries. Our AI understands context and research domains.",
      gradient: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Shield,
      title: "Credibility Assessment",
      description:
        "Automatically evaluate paper reliability based on citation count, journal impact factor, peer review status, and author credentials.",
      gradient: "from-teal-500/10 to-teal-500/5",
      iconColor: "text-teal-400",
      borderColor: "border-teal-500/20",
    },
    {
      icon: TrendingUp,
      title: "Citation Analysis",
      description:
        "Track how papers cite each other, identify seminal works in your field, and discover emerging research trends.",
      gradient: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20",
    },
    {
      icon: FileText,
      title: "Paper Summarization",
      description:
        "Get concise summaries of complex research papers, highlighting key findings, methodology, and conclusions.",
      gradient: "from-teal-500/10 to-teal-500/5",
      iconColor: "text-teal-400",
      borderColor: "border-teal-500/20",
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description:
        "Share findings with classmates, build shared knowledge bases, and collaborate on research projects seamlessly.",
      gradient: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Sparkles,
      title: "Research Recommendations",
      description:
        "Discover related papers and emerging research based on your interests and reading history using AI-powered suggestions.",
      gradient: "from-teal-500/10 to-teal-500/5",
      iconColor: "text-teal-400",
      borderColor: "border-teal-500/20",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-teal-300">
              Built for Students & Researchers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Your AI Research Assistant
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mt-2">
              For Academic Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Streamline your research workflow with intelligent tools designed
            specifically for students and academics. Find, evaluate, and
            understand research papers faster than ever.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-background/50 border ${feature.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white border-0"
            >
              Start Researching Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-purple-500/50 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Access to 50M+ research papers
          </p>
        </div>
      </div>
    </section>
  );
};

export { ResearchFeaturesSection };
