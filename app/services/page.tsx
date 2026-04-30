import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Custom development, product design, backend, and launch — the full practice at herdoydev.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Practice · herdoydev",
    description:
      "The full practice at herdoydev — development, design, backend, and launch.",
    url: "/services",
  },
};

const services = [
  {
    num: "01",
    title: "Mobile development",
    body:
      "Native and cross-platform applications — from architecture and prototype through release engineering and Play Store publishing.",
    deliverables: [
      "Architecture & spec",
      "Native modules",
      "Offline-first patterns",
      "Push & background work",
      "Store listing & rollout",
    ],
  },
  {
    num: "02",
    title: "Web applications",
    body:
      "Full-stack web product engineering using modern tools. Fast by default, accessible by design, prerendered when sensible.",
    deliverables: [
      "Next.js engineering",
      "Static & edge rendering",
      "Progressive enhancement",
      "Search & SEO",
      "Performance budgets",
    ],
  },
  {
    num: "03",
    title: "Product design",
    body:
      "Brand, type, and interaction design with a single voice across the surface — never decoration, always intent.",
    deliverables: [
      "Visual identity",
      "Design system",
      "Interaction design",
      "Motion direction",
      "Hand-off to engineering",
    ],
  },
  {
    num: "04",
    title: "Backend & data",
    body:
      "APIs, services, and data pipelines that quietly keep the surface light. Boring infrastructure is a feature.",
    deliverables: [
      "REST & GraphQL APIs",
      "Schema & migrations",
      "Auth & authorization",
      "Cloud deployment",
      "Observability",
    ],
  },
  {
    num: "05",
    title: "Telemetry & analytics",
    body:
      "Honest measurement and lightweight A/B infrastructure to learn from your earliest users without inheriting a tracking-script empire.",
    deliverables: [
      "Event modeling",
      "Funnel analysis",
      "Crash reporting",
      "Performance monitoring",
      "Lightweight A/B",
    ],
  },
  {
    num: "06",
    title: "Launch & growth",
    body:
      "Store listings, rollout cadence, and iteration loops. We help products land in front of the people they were made for.",
    deliverables: [
      "ASO & metadata",
      "Press kit",
      "Soft / hard launch",
      "Feedback intake",
      "Iteration cycles",
    ],
  },
];

const phases = [
  {
    num: "i",
    title: "Discovery",
    body:
      "Audience, constraints, and the smallest version of the product worth shipping. Output: a written brief.",
  },
  {
    num: "ii",
    title: "Design",
    body:
      "Wireframes, prototypes, system. Output: a working visual language and a clickable spine.",
  },
  {
    num: "iii",
    title: "Build",
    body:
      "Tight engineering loops, demo every Friday. Output: a release candidate and the means to maintain it.",
  },
  {
    num: "iv",
    title: "Land",
    body:
      "Soft-launch, feedback, polish, then publish. Output: a product in front of users and a roadmap to v1.1.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <p className="edge-label">004 — Practice</p>
            <p className="edge-label">Six services · one studio</p>
            <p className="edge-label">Currently accepting projects</p>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— Practice</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
                What the studio<br />
                <span className="serif-italic">does, exactly.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                A small set of services, executed end-to-end by the same hands.
                We take on a handful of engagements at a time so each one gets
                the attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="relative py-16 md:py-24 hairline-t">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <ul className="hairline-t hairline-b">
            {services.map((s) => (
              <li key={s.num} className="hairline-b last:border-b-0">
                <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
                  <div className="col-span-3 md:col-span-1 mono num text-xs text-muted-foreground pt-2">
                    / {s.num}
                  </div>
                  <div className="col-span-9 md:col-span-4">
                    <h2 className="serif text-3xl md:text-5xl tracking-tight leading-[1.05]">
                      {s.title}
                    </h2>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-prose">
                      {s.body}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-3">
                    <p className="eyebrow mb-3">Deliverables</p>
                    <ul className="space-y-1.5">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-sm text-foreground/80 flex items-baseline gap-2"
                        >
                          <span className="mono text-muted-foreground/60">·</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 md:py-36 hairline-t bg-muted/30">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— 004.1 / Process</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="serif text-4xl md:text-6xl tracking-tight leading-[0.95]">
                How we move <span className="serif-italic">together.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px hairline">
            {phases.map((p) => (
              <div key={p.num} className="bg-background p-8">
                <p className="serif text-7xl md:text-8xl leading-none tracking-tight mb-6">
                  {p.num}
                </p>
                <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-6 h-12 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
