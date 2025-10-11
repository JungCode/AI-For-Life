"use client";

import { Database, BookOpen, CheckCircle2, Zap } from "lucide-react";

const RagTechnologySection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 from-background via-purple-950/10 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">
              Powered by RAG Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Retrieval-Augmented Generation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mt-2">
              For Credible Research
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our AI research assistant combines the power of large language
            models with real-time retrieval from verified academic sources,
            ensuring every answer is grounded in credible research.
          </p>
        </div>

        {/* RAG Process visualization */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-black/50 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-colors h-full">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-purple-400" />
              </div>
              <div className="text-sm font-semibold text-purple-400 mb-2">
                STEP 1
              </div>
              <h3 className="text-xl font-bold mb-3">Retrieve</h3>
              <p className="text-muted-foreground text-pretty">
                Search through millions of academic papers, journals, and
                verified research databases to find the most relevant sources
                for your query.
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-teal-500" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-black/50 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-teal-500/50 transition-colors h-full">
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-teal-400" />
              </div>
              <div className="text-sm font-semibold text-teal-400 mb-2">
                STEP 2
              </div>
              <h3 className="text-xl font-bold mb-3">Augment</h3>
              <p className="text-muted-foreground text-pretty">
                Combine retrieved research materials with AI understanding to
                provide context-aware responses that cite specific sources and
                papers.
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
              <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-purple-500" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-black/50 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-colors h-full">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-7 h-7 text-purple-400" />
            </div>
            <div className="text-sm font-semibold text-purple-400 mb-2">
              STEP 3
            </div>
            <h3 className="text-xl font-bold mb-3">Generate</h3>
            <p className="text-muted-foreground text-pretty">
              Produce accurate, well-cited answers with direct references to
              source materials, ensuring credibility and academic integrity.
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              Always Grounded in Facts
            </h4>
            <p className="text-muted-foreground text-sm text-pretty">
              Unlike traditional AI that can hallucinate, RAG ensures every
              response is backed by real academic sources from our verified
              database.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-500/5 to-transparent border border-teal-500/20 rounded-xl p-6">
            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              Transparent Citations
            </h4>
            <p className="text-muted-foreground text-sm text-pretty">
              Every answer includes direct citations to source papers, allowing
              you to verify information and dive deeper into the research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RagTechnologySection };
