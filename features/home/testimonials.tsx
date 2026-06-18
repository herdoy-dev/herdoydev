"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/constants/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
      setIndex((next + testimonials.length) % testimonials.length);
    },
    [index]
  );

  useEffect(() => {
    const t = setInterval(() => go(index + 1), 6500);
    return () => clearInterval(t);
  }, [index, go]);

  const active = testimonials[index];

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          title={<>Loved by <span className="text-gradient">founders</span></>}
          description="Don't take my word for it — here's what the people I've built with have to say."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote
            aria-hidden
            className="absolute -left-2 -top-6 h-16 w-16 text-brand-600/20"
          />
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 glass-strong p-8 sm:p-12">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber text-amber" />
                  ))}
                </div>
                <blockquote className="text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-cyan font-display text-sm font-semibold text-white">
                    {active.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-medium">{active.name}</span>
                    <span className="block text-sm text-muted">
                      {active.role}, {active.company}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-brand-500" : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
