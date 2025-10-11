import { AnimatedDocumentCards } from "./AnimatedDocumentCards";

const FeatureList = [
  "Database schema analysis",
  "Query generation",
  "Query performance analysis",
  "Index recommendation",
  "Execution plan visualization",
  "Workload analysis",
  "Resource usage monitoring",
  "Adaptive optimization",
  "Cross-database support",
];

const IntroductionSection = () => {
  return (
    <section className="container my-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-12 items-center justify-between">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent border border-teal-500/20 rounded-3xl transform rotate-1" />
            <div className="relative bg-black rounded-3xl p-8 shadow-xl">
              <AnimatedDocumentCards />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
                Smart Query Optimizer
                <br />
                <span className="text-primary">
                  The best way to explore database
                </span>
              </h1>
              <p className=" text-lg text-muted-foreground leading-relaxed">
                Unlock the full potential of your database with our AI-powered
              </p>
            </div>

            {/* Feature List */}
            <div className="">
              {FeatureList.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-1 rounded-lg transition-colors duration-200"
                >
                  <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Generating Policies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntroductionSection };
