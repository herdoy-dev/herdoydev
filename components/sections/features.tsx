"use client";

import {
  Smartphone,
  Brain,
  HeartPulse,
  Wallet,
  Zap,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { MotionDiv } from "@/components/motion-wrapper";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Apps",
    description:
      "Native-quality mobile applications designed for seamless user experiences across all devices.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Leveraging artificial intelligence to build smarter, more intuitive applications.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description:
      "Apps that help people track, improve, and maintain their health and wellbeing.",
  },
  {
    icon: Wallet,
    title: "Fintech Innovation",
    description:
      "Financial tools that simplify money management and empower better decisions.",
  },
  {
    icon: Zap,
    title: "Productivity Tools",
    description:
      "Streamlined workflows and smart automation to help users get more done.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security with architecture built to scale with your growth.",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Building apps across{" "}
            <span className="gradient-text">multiple domains</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We focus on solving real-world problems through scalable and
            user-friendly applications.
          </p>
        </MotionDiv>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="size-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
