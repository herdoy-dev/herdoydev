"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "i",
    title: "Custom development",
    body: "Bespoke mobile and web product engineering — from architecture and prototyping through release and maintenance.",
    points: ["Discovery & spec", "Architecture", "Release engineering"],
  },
  {
    num: "ii",
    title: "Product design",
    body: "Brand, type, and interaction design with a single voice across the surface — never decoration, always intent.",
    points: ["Visual identity", "Design system", "Motion"],
  },
  {
    num: "iii",
    title: "Backend & data",
    body: "Robust services, APIs, and pipelines. Predictable infrastructure that keeps the surface light.",
    points: ["APIs", "Data modeling", "Infrastructure"],
  },
  {
    num: "iv",
    title: "Launch & grow",
    body: "Store optimisation, telemetry, and iteration loops to learn from your earliest users in public.",
    points: ["Store listings", "Analytics", "Iteration"],
  },
];

export function ServicesOverview() {
  return (
    <section className="relative py-24 md:py-36 hairline-t bg-muted/30">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">— 004 / Engagement</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              How we{" "}
              <span className="serif-italic">work, exactly.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              No agency theatre. A small set of services, executed end-to-end
              by the same hands, with the same standard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border hairline">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background p-8 md:p-10 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="mono num text-xs tracking-widest text-muted-foreground">
                  /{s.num.padStart(3, "0")}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:rotate-[12deg]" />
              </div>

              <h3 className="serif text-3xl md:text-4xl tracking-tight leading-[1.05] mb-4">
                {s.title}
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed mb-6 max-w-md">
                {s.body}
              </p>

              <ul className="hairline-t pt-4 grid grid-cols-3 gap-2">
                {s.points.map((p) => (
                  <li key={p} className="mono text-[11px] tracking-wider uppercase text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium link-line"
          >
            Full practice
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
