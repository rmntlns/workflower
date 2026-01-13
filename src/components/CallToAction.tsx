"use client";

interface CallToActionProps {
  calUsername?: string;
  eventSlug?: string;
}

export default function CallToAction({
  calUsername = "ramon-tilanus-pbcctj",
  eventSlug = "30min",
}: CallToActionProps) {
  return (
    <section id="book-call" className="bg-gradient-hero px-6 py-20 md:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          {/* Content Card */}
          <div className="relative overflow-hidden rounded-3xl border border-accent-pink/30 bg-gradient-to-br from-secondary via-primary to-secondary p-12 text-center backdrop-blur-sm md:p-16">
            {/* Decorative gradient blobs */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-orange/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-purple/20 blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
              {/* Section Header */}
              <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Ready to Cut Support Load by{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  80%
                </span>
                ?
              </h2>
              <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
                Free 3-month pilot for qualified SaaS companies. Book a
                30-minute discovery call to see if Workflower is right for your
                team.
              </p>

              {/* CTA Button that triggers Cal.com popup */}
              <button
                data-cal-link={`${calUsername}/${eventSlug}`}
                data-cal-namespace={eventSlug}
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-accent-pink/50 transition-all hover:scale-105 hover:shadow-accent-purple/60"
              >
                Book Discovery Call
              </button>

              {/* Additional Info */}
              <p className="mt-8 text-base text-muted-foreground">
                During our call, we'll discuss your support ticket volume,
                current processes, and how Workflower can help reduce your
                support load.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
