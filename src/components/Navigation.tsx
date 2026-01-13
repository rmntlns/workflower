"use client";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="bg-gradient-accent bg-clip-text text-2xl font-bold text-transparent">
            Workflower
          </h1>
        </div>
        <button
          data-cal-link="ramon-tilanus-pbcctj/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view"}'
          className="rounded-lg bg-gradient-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent-pink/50"
        >
          Book Discovery Call
        </button>
      </div>
    </nav>
  );
}
