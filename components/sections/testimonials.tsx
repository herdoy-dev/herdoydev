"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const testimonials = [
  {
    quote:
      "herdoydev built exactly what we needed. The app was delivered on time and exceeded our expectations in quality.",
    name: "Sarah Ahmed",
    role: "Product Manager",
    company: "TechStart Inc.",
  },
  {
    quote:
      "Their attention to detail and understanding of user experience is outstanding. Our app ratings went from 3.5 to 4.7 stars.",
    name: "Michael Chen",
    role: "CEO",
    company: "HealthPlus",
  },
  {
    quote:
      "Working with herdoydev was a seamless experience. Professional, responsive, and truly skilled in mobile development.",
    name: "Fatima Rahman",
    role: "Founder",
    company: "EduConnect",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What people{" "}
            <span className="gradient-text">say about us</span>
          </h2>
        </MotionDiv>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="border-border/50 bg-card/50 hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <Quote className="size-8 text-primary/30 mb-4" />
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full gradient-bg flex items-center justify-center text-white font-semibold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
