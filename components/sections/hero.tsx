"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle paper grid */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grain pointer-events-none opacity-50" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Edge label rail */}
        <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
          <p className="edge-label">001 — Index / herdoydev</p>
          <p className="edge-label">N 23.81° / E 90.41° — Dhaka</p>
          <p className="edge-label">Established · 2024</p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Left rail */}
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-3 md:pt-3 order-2 md:order-1"
          >
            <p className="eyebrow mb-3">— Independent studio</p>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-[26ch]">
              A small studio of <em className="serif-italic text-foreground">one</em> —
              designing, engineering and shipping mobile &amp; web products
              with an obsessive concern for craft.
            </p>
          </motion.aside>

          {/* Headline */}
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="serif text-[clamp(3.5rem,11vw,10.5rem)] leading-[0.88] tracking-tight"
            >
              {[
                <span key="1" className="block">
                  Software,
                </span>,
                <span key="2" className="block">
                  designed and{" "}
                  <span className="serif-italic">engineered —</span>
                </span>,
                <span key="3" className="block text-muted-foreground/70">
                  one product at a time.
                </span>,
              ].map((line, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>

        {/* Lower row: CTA + indices */}
        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-24 pt-6 hairline-t">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-1.5 px-5 h-11 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors"
            >
              See the catalogue
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 h-11 hairline rounded-sm text-sm font-medium hover:bg-muted/60 transition-colors"
            >
              Start a project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { num: "15", label: "Products in motion" },
              { num: "5+", label: "Years of practice" },
              { num: "∞", label: "Things to ship" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="hairline-l pl-4 md:pl-6 first:hairline-l-0 first:pl-0"
              >
                <p className="serif num text-4xl md:text-5xl leading-none mb-2">
                  {stat.num}
                </p>
                <p className="eyebrow">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
