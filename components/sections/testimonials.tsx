"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    body:
      "Delivered on time, finished beyond what we briefed. The kind of partner you keep on speed dial.",
    name: "Sarah Ahmed",
    role: "Product Lead, TechStart Inc.",
  },
  {
    body:
      "Our app rating jumped from 3.5 to 4.7. The difference is craftsmanship.",
    name: "Michael Chen",
    role: "CEO, HealthPlus",
  },
  {
    body:
      "Quiet, decisive, and genuinely good. Working with the studio felt closer to apprenticeship than vendor management.",
    name: "Fatima Rahman",
    role: "Founder, EduConnect",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 hairline-t">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">— 005 / Word of mouth</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              From the people we&apos;ve{" "}
              <span className="serif-italic">shipped with.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px hairline">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10 flex flex-col"
            >
              <span className="serif text-6xl leading-none text-foreground/30 mb-4 select-none">
                &ldquo;
              </span>
              <blockquote className="serif text-2xl md:text-[28px] leading-[1.2] tracking-tight text-foreground/90 mb-8 flex-1">
                {q.body}
              </blockquote>
              <figcaption className="hairline-t pt-5 mt-auto">
                <p className="text-sm font-medium">{q.name}</p>
                <p className="mono text-[11px] tracking-wider uppercase text-muted-foreground mt-1">
                  {q.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
