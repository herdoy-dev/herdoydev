"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 md:py-36 hairline-t bg-foreground text-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p
              className="eyebrow"
              style={{ color: "color-mix(in oklch, currentColor 60%, transparent)" }}
            >
              — 099 / Open for work
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight"
            >
              Have a project? <br />
              <span className="serif-italic opacity-80">
                Let&apos;s talk.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-8 border-t border-background/15"
            >
              <p className="text-base md:text-lg text-background/70 max-w-md leading-relaxed">
                A short note works. Tell us about the product, the audience, and
                where you are today — we reply within two working days.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 px-6 h-12 bg-background text-foreground text-sm font-medium rounded-sm hover:bg-background/90 transition-colors"
                >
                  Start a conversation
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="mailto:contact@herdoydev.com"
                  className="inline-flex items-center gap-1.5 px-6 h-12 border border-background/20 text-background text-sm font-medium rounded-sm hover:bg-background/5 transition-colors"
                >
                  contact@herdoydev.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
