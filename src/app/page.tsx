import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <CallToAction />

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-10">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h2 className="bg-gradient-accent bg-clip-text text-2xl font-bold text-transparent">
              Workflower
            </h2>
          </div>
          <p className="text-base text-muted-foreground">
            Turn your support tickets into a 24/7 AI assistant.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2026 Workflower. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
