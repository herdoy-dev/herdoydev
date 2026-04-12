"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-wrapper";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom App Development",
    description:
      "End-to-end mobile app development tailored to your business needs. From concept to deployment.",
    features: ["Android & Cross-platform", "Clean architecture", "Play Store publishing"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. Data-driven design for maximum engagement.",
    features: ["User research", "Wireframing & prototyping", "Design systems"],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust server-side solutions with modern tech stack. Scalable APIs built for performance.",
    features: ["Node.js & Express", "RESTful & GraphQL APIs", "Cloud deployment"],
  },
  {
    icon: Rocket,
    title: "App Launch & Growth",
    description:
      "From store optimization to analytics setup, we help your app reach the right audience.",
    features: ["ASO optimization", "Analytics integration", "Performance monitoring"],
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">launch your app</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Full-stack development services from idea to production.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <MotionDiv key={service.title} animation="fade-up" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="size-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <div className="size-1.5 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv animation="fade-up" delay={0.4} className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 h-12"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
