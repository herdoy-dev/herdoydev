import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, Container } from "@/components/ui/section";
import { Reveal, RevealGroup } from "@/components/effects/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Counter } from "@/components/effects/counter";
import { SkillBars } from "@/features/about/skill-bars";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { values, experience, stats } from "@/constants/content";
import { pageMetadata, personSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Herdoy is a full-stack software engineer and agency founder with 5+ years building scalable web, mobile, and AI products. Learn the story, skills, and values.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHeader
        title={<>Engineer, builder, <span className="text-gradient">founder</span></>}
        description="I'm Herdoy — a full-stack software engineer who partners with founders to turn ambitious ideas into products that ship and scale."
      />

      {/* story */}
      <Section className="pt-6">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">My story</h2>
              <div className="mt-5 flex flex-col gap-4 text-pretty leading-relaxed text-muted">
                <p>
                  I started writing code because I loved building things people
                  could actually use. Over the last 5+ years that obsession turned
                  into a craft — shipping production software across SaaS, fintech,
                  e-commerce, and AI.
                </p>
                <p>
                  Today I run <span className="text-foreground">HerdoyDev</span>, a
                  boutique engineering studio. I work directly with founders and
                  teams as a senior partner: scoping the right thing to build,
                  architecting it for scale, and delivering it with the polish of a
                  top-tier agency — without the bloat.
                </p>
                <p>
                  Whether it&apos;s a real-time analytics platform, a cross-platform
                  mobile app, or an AI agent that automates real work, I care about
                  the same things: performance, clarity, and outcomes that move your
                  business forward.
                </p>
              </div>
              <ButtonLink href="/contact" className="mt-8 group">
                Let&apos;s work together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 glass-strong p-6 text-center"
                  >
                    <div className="font-display text-3xl font-bold text-gradient">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <p className="mt-1.5 text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* skills */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Skills & <span className="text-gradient">expertise</span>
            </h2>
            <p className="mt-4 text-muted">
              A deep, full-stack toolkit honed across dozens of production builds.
            </p>
          </Reveal>
          <div className="mt-12">
            <SkillBars />
          </div>
        </Container>
      </Section>

      {/* experience timeline */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience
            </h2>
            <p className="mt-4 text-muted">A track record of shipping and scaling.</p>
          </Reveal>

          <div className="relative mx-auto mt-14 max-w-3xl">
            <div
              aria-hidden
              className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-brand-500 via-cyan/40 to-transparent sm:left-1/2"
            />
            <RevealGroup className="flex flex-col gap-10">
              {experience.map((item, i) => (
                <Reveal as="div" key={item.period} className="relative pl-10 sm:pl-0">
                  <span
                    aria-hidden
                    className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20 sm:left-1/2 sm:-translate-x-1/2"
                  />
                  <div
                    className={`sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:mr-auto sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <span className="font-mono text-xs text-brand-300">{item.period}</span>
                    <h3 className="mt-1 font-display text-lg font-semibold">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted">{item.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul
                      className={`mt-3 flex flex-col gap-1.5 text-sm text-foreground/80 ${
                        i % 2 === 0 ? "sm:items-end" : ""
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <li key={h} className="text-muted">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      {/* values */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What I <span className="text-gradient">value</span>
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Reveal as="div" key={value.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
