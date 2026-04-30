"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] flex flex-col overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grain pointer-events-none opacity-50" />

      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-12 flex-1 flex flex-col pt-20 md:pt-24">
        {/* Edge label rail */}
        <div className="hidden md:flex items-center justify-between pb-3 hairline-b">
          <p className="edge-label">001 — Index / herdoydev</p>
          <p className="edge-label">N 23.81° / E 90.41° — Dhaka</p>
          <p className="edge-label">Established · 2024</p>
        </div>

        {/* Main headline area — stretches to fill the remaining height */}
        <div className="flex-1 grid grid-cols-12 gap-x-6 gap-y-6 md:gap-y-8 items-end py-6 md:py-10">
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-3 order-2 md:order-1 md:pb-3"
          >
            <p className="eyebrow mb-2 md:mb-3">— Independent studio</p>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-[28ch]">
              A small studio of one — designing, engineering and shipping
              mobile and web products with care.
            </p>
          </motion.aside>

          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="text-[clamp(2.25rem,7vw,6rem)] leading-[0.98] tracking-tight font-medium"
            >
              {[
                "Software,",
                "designed and engineered —",
                "one product at a time.",
              ].map((line, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    i === 2 ? "block text-muted-foreground/70" : "block"
                  }
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>

        {/* Bottom strip — CTAs + stats — never overflows the viewport */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 hairline-t py-4 md:py-5">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-2.5"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-1.5 px-4 sm:px-5 h-10 md:h-11 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors"
            >
              See the catalogue
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 h-10 md:h-11 hairline rounded-sm text-sm font-medium hover:bg-muted/60 transition-colors"
            >
              Start a project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4 md:gap-8 items-end"
          >
            {[
              { num: "15", label: "Products in motion" },
              { num: "5+", label: "Years of practice" },
              { num: "∞", label: "Things to ship" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i === 0 ? "" : "hairline-l pl-3 md:pl-5"
                }
              >
                <p className="num text-2xl sm:text-3xl md:text-4xl leading-none font-medium tracking-tight">
                  {stat.num}
                </p>
                <p className="eyebrow mt-1.5 md:mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
