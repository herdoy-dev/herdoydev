import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "About herdoydev — an independent software studio of one, designing and engineering products in mobile and web.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Studio · herdoydev",
    description:
      "About herdoydev — an independent software studio designing and engineering products.",
    url: "/about",
  },
};

const principles = [
  {
    num: "01",
    title: "Slow is fast.",
    body:
      "Decisions made in haste are paid for in maintenance. The studio rewards patience.",
  },
  {
    num: "02",
    title: "Craft over content.",
    body:
      "Polish is not optional. The taste shows up in the corners — typography, motion, error states.",
  },
  {
    num: "03",
    title: "Ship in public.",
    body:
      "We treat the catalogue like a sketchbook — published openly, revised often, never finished.",
  },
  {
    num: "04",
    title: "Respect the user.",
    body:
      "No dark patterns. No ads-first thinking. The product earns its place on a screen.",
  },
];

const stack = [
  "TypeScript",
  "React / Next.js",
  "React Native / Expo",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Postgres",
  "Firebase",
  "GCP / AWS",
  "Figma",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <p className="edge-label">002 — Studio</p>
            <p className="edge-label">A studio of one</p>
            <p className="edge-label">Est. 2024 · Dhaka</p>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— About</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
                A studio of <span className="serif-italic">one,</span><br />
                with the discipline of many.
              </h1>
              <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                herdoydev is an independent practice founded by Herdoy
                Almamun. It exists to design, engineer, and ship a small
                number of products with unreasonable care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-24 md:py-36 hairline-t">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <div className="aspect-[4/5] hairline rounded-sm overflow-hidden bg-muted/30 flex items-center justify-center relative">
                <Image
                  src="/logo.png"
                  alt=""
                  width={400}
                  height={400}
                  className="size-1/2 opacity-90"
                />
                <p className="absolute bottom-4 left-4 mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Plate i — Mark
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 md:pt-8">
              <p className="eyebrow mb-6">— 002.1 / Founder</p>
              <h2 className="serif text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
                Herdoy <span className="serif-italic">Almamun</span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed max-w-prose">
                <p>
                  Five years of writing software for other people&apos;s ideas
                  taught me that the bottleneck is rarely the code. It is taste,
                  time, and the willingness to say no.
                </p>
                <p>
                  The studio is the answer to that — a small, independent
                  practice where the same person who scopes the work also writes
                  the code, draws the screens, and presses publish.
                </p>
                <p>
                  We work with founders, teams, and operators who would rather
                  hire a craftsperson than a vendor.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 hairline-t pt-6">
                <div>
                  <p className="serif num text-3xl">5+</p>
                  <p className="eyebrow mt-1">Years writing software</p>
                </div>
                <div>
                  <p className="serif num text-3xl">15</p>
                  <p className="eyebrow mt-1">Products in motion</p>
                </div>
                <div>
                  <p className="serif num text-3xl">1</p>
                  <p className="eyebrow mt-1">Pair of hands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-24 md:py-36 hairline-t bg-muted/30">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— 002.2 / Principles</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                What we hold,<br />
                <span className="serif-italic">in writing.</span>
              </h2>
            </div>
          </div>

          <ul className="hairline-t hairline-b">
            {principles.map((p) => (
              <li key={p.num} className="hairline-b last:border-b-0">
                <div className="grid grid-cols-12 gap-6 py-8 md:py-10">
                  <div className="col-span-2 md:col-span-1 mono num text-xs text-muted-foreground pt-1.5">
                    / {p.num}
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="serif text-3xl md:text-4xl tracking-tight leading-none">
                      {p.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-prose">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack */}
      <section className="relative py-24 md:py-36 hairline-t">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— 002.3 / Toolkit</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="serif text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Tools we keep <span className="serif-italic">on hand.</span>
              </h2>
              <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px hairline">
                {stack.map((tool, i) => (
                  <li
                    key={tool}
                    className="bg-background p-4 flex items-center gap-3"
                  >
                    <span className="mono num text-[11px] tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
