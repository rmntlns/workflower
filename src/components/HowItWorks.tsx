import { Download, Cog, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Extract",
      description:
        "Pull historical tickets from HubSpot, Freshdesk, or your CRM. We extract all the valuable knowledge buried in your support history.",
      gradient: "from-accent-orange to-accent-pink",
    },
    {
      icon: Cog,
      title: "Structure",
      description:
        "RAG pipeline organizes answers by semantic relevance. Your tickets become a searchable knowledge base powered by AI embeddings.",
      gradient: "from-accent-pink to-accent-purple",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description:
        "24/7 chatbot handles 80% of customer queries. Instant answers for common questions, smart escalation for complex issues.",
      gradient: "from-accent-purple to-accent-orange",
    },
  ];

  return (
    <section className="bg-background px-6 py-20 md:py-32">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Transform your support tickets into an intelligent chatbot in three
            simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/50 p-8 backdrop-blur-sm transition-all hover:border-accent-pink/50 hover:shadow-2xl hover:shadow-accent-pink/20"
              >
                {/* Step Number Badge */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Decorative gradient overlay on hover */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
