import { Container } from "@/components/ui/section";
import { RevealGroup, Reveal } from "@/components/effects/reveal";
import { Counter } from "@/components/effects/counter";
import { stats } from "@/constants/content";

export function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-strong p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-600/20 blur-3xl"
          />
          <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <Reveal as="div" key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
