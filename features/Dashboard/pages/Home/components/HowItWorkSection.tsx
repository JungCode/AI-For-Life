import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Connect Your Database",
    description:
      "Securely link your graph database in seconds. We support all major graph database platforms with enterprise-grade encryption.",
  },
  {
    number: "02",
    title: "Ask Your Question",
    description:
      "Type your question naturally, just like talking to a colleague. Our AI understands context and intent to generate precise queries.",
  },
  {
    number: "03",
    title: "Get Instant Insights",
    description:
      "Receive visualized results with interactive graphs, charts, and actionable insights. Export or share with your team instantly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="mb-16 text-pretty text-lg leading-relaxed text-muted-foreground">
            Get started in three simple steps and unlock the power of
            conversational database queries
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-px w-full bg-gradient-to-r from-chart-1/50 to-transparent md:block" />
                )}

                <Card className="relative border-border bg-card p-8 text-center">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-chart-1 to-chart-2 text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorksSection };
