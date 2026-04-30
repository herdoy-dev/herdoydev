"use client";

import { motion } from "framer-motion";

const disciplines = [
  {
    num: "01",
    title: "Mobile",
    description:
      "Native-feel applications on Android and cross-platform — built to launch, monitored, and maintained.",
    keywords: ["React Native", "Expo", "Skia", "Reanimated"],
  },
  {
    num: "02",
    title: "Web",
    description:
      "Marketing sites, dashboards, and internal tools — fast by default, accessible by design, prerendered when sensible.",
    keywords: ["Next.js", "TypeScript", "Tailwind", "Edge"],
  },
  {
    num: "03",
    title: "Backend",
    description:
      "APIs, data pipelines, and services that quietly do their job. Boring infrastructure is a feature.",
    keywords: ["Node", "Postgres", "Firebase", "REST/GraphQL"],
  },
  {
    num: "04",
    title: "Identity",
    description:
      "Naming, marks, and product surface design that feel earned rather than templated.",
    keywords: ["Brand", "Type", "Design systems", "Motion"],
  },
];

export function Features() {
  return (
    <section className="relative py-24 md:py-36 hairline-t">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">— 002 / Practice</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Four disciplines, one{" "}
              <span className="serif-italic">studio.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Every product crosses these lines. The studio operates as a
              single craftsperson — not a pipeline, not a factory.
            </p>
          </div>
        </div>

        {/* Numbered discipline rows */}
        <ul className="hairline-t">
          {disciplines.map((d, i) => (
            <motion.li
              key={d.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group hairline-b"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-12 transition-colors group-hover:bg-muted/40">
                <div className="col-span-3 md:col-span-2 mono num text-xs text-muted-foreground pt-1">
                  / {d.num}
                </div>
                <div className="col-span-9 md:col-span-3">
                  <h3 className="serif text-3xl md:text-4xl leading-none tracking-tight">
                    {d.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-base text-foreground/80 leading-relaxed max-w-md">
                    {d.description}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5 md:justify-end content-start">
                  {d.keywords.map((k) => (
                    <span
                      key={k}
                      className="mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 hairline rounded-sm text-muted-foreground"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
