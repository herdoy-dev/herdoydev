import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/effects/reveal";

export function CTABanner({
  title = "Let's Build Something Amazing Together",
  description = "Have a product in mind? Let's turn it into something users love — fast, scalable, and beautifully engineered.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-700/40 via-ink-900 to-ink-900 p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl animate-glow-pulse"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-cyan/20 blur-3xl animate-glow-pulse"
              style={{ animationDelay: "-2.5s" }}
            />
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-muted sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <ButtonLink href="/contact" size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </ButtonLink>
                </Magnetic>
                <ButtonLink href="/contact" size="lg" variant="secondary">
                  <Calendar className="h-4 w-4" />
                  Book a Free Consultation
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
