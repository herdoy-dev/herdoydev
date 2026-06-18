import { techStack } from "@/constants/content";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/effects/reveal";

export function TechMarquee() {
  const row = [...techStack, ...techStack];
  return (
    <section className="border-y border-white/5 py-12">
      <Container>
        <Reveal className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Trusted, battle-tested technology
        </Reveal>
      </Container>
      <div className="relative mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {row.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex shrink-0 items-center gap-3"
              title={tech.name}
            >
              {/* simpleicons CDN — monochrome, themed to slate */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}/94a3b8`}
                alt={tech.name}
                width={28}
                height={28}
                loading="lazy"
                className="h-7 w-7 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="font-display text-lg font-medium text-muted transition-colors group-hover:text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
