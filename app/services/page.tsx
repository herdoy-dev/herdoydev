import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, Container } from "@/components/ui/section";
import { Reveal } from "@/components/effects/reveal";
import { ButtonLink } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { services } from "@/constants/services";
import {
  pageMetadata,
  breadcrumbSchema,
  serviceCatalogSchema,
  faqSchema,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Custom web development, mobile apps, AI agents, API development, and e-commerce solutions — full-stack engineering services for startups and businesses.",
  path: "/services",
  keywords: [
    "Web Development Services",
    "Mobile App Development",
    "AI Agent Development",
    "API Development",
    "E-commerce Development",
  ],
});

const process = [
  { step: "01", title: "Discover", text: "We align on goals, scope, and success metrics before a line of code." },
  { step: "02", title: "Design", text: "Architecture and UX designed for performance, scale, and clarity." },
  { step: "03", title: "Build", text: "Iterative delivery with transparent progress and tight feedback loops." },
  { step: "04", title: "Launch & Scale", text: "Ship, monitor, and optimize — then grow with confidence." },
];

const faqs = [
  {
    question: "How much does a typical project cost?",
    answer:
      "It depends on scope, but most engagements range from $5k for a focused build to $50k+ for a full product. After a free consultation I send a fixed, transparent quote — no surprises.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs ship in 4–8 weeks. I work in iterative milestones so you see progress every week and can adjust scope as we learn.",
  },
  {
    question: "Do you work with startups or established businesses?",
    answer:
      "Both. I partner with early-stage founders validating an idea and with established teams who need senior engineering capacity to ship faster.",
  },
  {
    question: "Can you take over an existing or AI-generated codebase?",
    answer:
      "Yes. I regularly audit, refactor, and harden existing codebases — including AI-assisted or vibe-coded ones — so they're secure, tested, and ready to scale.",
  },
  {
    question: "Which technologies do you specialise in?",
    answer:
      "React, Next.js, TypeScript, Node.js, and modern databases (PostgreSQL, MongoDB), plus AI integration and agent development. I choose the stack that fits your problem, not the other way around.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceCatalogSchema(services),
          faqSchema(faqs),
        ]}
      />
      <PageHeader
        title={<>Engineering services that <span className="text-gradient">move the needle</span></>}
        description="From a single API to a full product build, I deliver senior-level engineering with agency polish. Here's how I can help."
      >
        <div className="mt-8">
          <ButtonLink href="/contact" size="lg">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </PageHeader>

      {/* detailed services */}
      <div className="py-10">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Section key={service.slug} id={service.slug} className="scroll-mt-28 py-14">
              <Container>
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2",
                    i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <Reveal>
                    <span className="font-mono text-sm text-muted">
                      0{i + 1} / Service
                    </span>
                    <div
                      className={cn(
                        "mt-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                        service.accent
                      )}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 font-display text-lg text-brand-300">
                      {service.tagline}
                    </p>
                    <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ButtonLink href="/contact" variant="outline" className="mt-7 group">
                      Discuss your project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </ButtonLink>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-strong p-7">
                      <div
                        className={cn(
                          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br opacity-30 blur-2xl",
                          service.accent
                        )}
                      />
                      <p className="relative text-xs font-semibold uppercase tracking-widest text-muted">
                        What&apos;s included
                      </p>
                      <ul className="relative mt-5 grid gap-3 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </Container>
            </Section>
          );
        })}
      </div>

      {/* process */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A process built for <span className="text-gradient">trust</span>
            </h2>
            <p className="mt-4 text-muted">
              Predictable, transparent, and collaborative from kickoff to launch.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal as="div" key={p.step} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-3xl font-bold text-gradient-brand">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="mt-4 text-muted">
              The things founders and teams ask me most before we start.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-medium marker:hidden">
                  {faq.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-brand-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
