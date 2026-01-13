"use client";

import { ArrowRight, Database, Brain, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero px-6 py-20 md:py-32 lg:py-40">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Turn Support Tickets Into a{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              24/7 AI Assistant
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
            80% ticket reduction proven with 2 design SaaS companies. Free
            3-month pilot for qualified teams.
          </p>

          {/* CTA Button */}
          <button
            data-cal-link="ramon-tilanus-pbcctj/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            className="mb-16 inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-accent-pink/50 transition-all hover:scale-105 hover:shadow-accent-purple/60"
          >
            Book 30-Min Discovery Call
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Visual Diagram */}
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-border bg-secondary/50 p-10 backdrop-blur-sm md:gap-8">
              {/* Step 1: Tickets */}
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-orange to-accent-pink shadow-lg md:h-24 md:w-24">
                  <Database className="h-10 w-10 text-white md:h-12 md:w-12" />
                </div>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Support Tickets
                </p>
              </div>

              {/* Arrow 1 */}
              <ArrowRight className="h-6 w-6 flex-shrink-0 text-muted-foreground md:h-8 md:w-8" />

              {/* Step 2: Knowledge Base */}
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple shadow-lg md:h-24 md:w-24">
                  <Brain className="h-10 w-10 text-white md:h-12 md:w-12" />
                </div>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Knowledge Base
                </p>
              </div>

              {/* Arrow 2 */}
              <ArrowRight className="h-6 w-6 flex-shrink-0 text-muted-foreground md:h-8 md:w-8" />

              {/* Step 3: RAG Chatbot */}
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple to-accent-pink shadow-lg md:h-24 md:w-24">
                  <MessageSquare className="h-10 w-10 text-white md:h-12 md:w-12" />
                </div>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  RAG Chatbot
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <p className="bg-gradient-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                80%
              </p>
              <p className="mt-2 text-base text-muted-foreground md:text-lg">
                Ticket Reduction
              </p>
            </div>
            <div>
              <p className="bg-gradient-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                12mo
              </p>
              <p className="mt-2 text-base text-muted-foreground md:text-lg">
                Proven Results
              </p>
            </div>
            <div>
              <p className="bg-gradient-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Free
              </p>
              <p className="mt-2 text-base text-muted-foreground md:text-lg">
                3-Month Pilot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
