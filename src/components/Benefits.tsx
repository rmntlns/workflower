import { TrendingDown, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      metric: "80%",
      title: "Reduction in Support Tickets",
      description: "Based on 12-month results with 2 design SaaS clients",
      gradient: "from-accent-orange to-accent-pink",
    },
    {
      icon: Clock,
      metric: "24/7",
      title: "Instant Responses",
      description: "No more 12-hour wait times or agent burnout",
      gradient: "from-accent-pink to-accent-purple",
    },
    {
      icon: DollarSign,
      metric: "$84K",
      title: "Annual Savings",
      description:
        "One client cut support costs and reinvested in development",
      gradient: "from-accent-purple to-accent-orange",
    },
    {
      icon: TrendingUp,
      metric: "+23",
      title: "Point NPS Increase",
      description: "Customers prefer instant answers to waiting",
      gradient: "from-accent-orange via-accent-pink to-accent-purple",
    },
  ];

  return (
    <section className="bg-secondary px-6 py-20 md:py-32">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Proven Results
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Real metrics from companies that automated their support with
            Workflower
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-primary/50 p-8 backdrop-blur-sm transition-all hover:border-accent-pink/50 hover:shadow-2xl hover:shadow-accent-pink/20 md:p-10"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Metric */}
                    <p className="mb-2 bg-gradient-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                      {benefit.metric}
                    </p>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Decorative gradient overlay on hover */}
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-orange/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 rounded-2xl border border-accent-pink/30 bg-gradient-to-br from-secondary to-primary/50 p-10 text-center backdrop-blur-sm">
          <p className="text-xl text-foreground md:text-2xl">
            <span className="bg-gradient-accent bg-clip-text font-bold text-transparent">
              "Two design SaaS companies went from 12-hour response times to
              instant answers for 80% of queries.
            </span>{" "}
            Their NPS went up 23 points."
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            — Based on pilot results from 2024
          </p>
        </div>
      </div>
    </section>
  );
}
