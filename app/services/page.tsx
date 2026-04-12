import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Palette,
  Server,
  Rocket,
  Smartphone,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom app development, UI/UX design, backend APIs, and app launch services. Full-stack development from idea to production.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | herdoydev",
    description:
      "Custom app development, UI/UX design, backend APIs, and app launch services. Full-stack development from idea to production.",
    url: "/services",
  },
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Custom Android and cross-platform mobile applications built with modern frameworks and best practices.",
    features: [
      "Native & cross-platform development",
      "Clean architecture & MVVM patterns",
      "Offline-first capabilities",
      "Push notifications & real-time features",
      "Google Play Store optimization & publishing",
    ],
  },
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Full-stack web applications using React, Next.js, and Node.js with modern tooling and best practices.",
    features: [
      "React.js & Next.js frontend development",
      "Server-side rendering & static generation",
      "Progressive Web Apps (PWA)",
      "Responsive & accessible design",
      "SEO optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centered interfaces designed for engagement and conversion. Data-driven design decisions.",
    features: [
      "User research & personas",
      "Wireframing & interactive prototyping",
      "Design systems & component libraries",
      "Usability testing",
      "Brand identity & visual design",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Scalable, secure server-side solutions with modern architectures and cloud-native deployment.",
    features: [
      "RESTful & GraphQL API design",
      "Node.js & Express.js backends",
      "MongoDB & MySQL database design",
      "Authentication & authorization",
      "Cloud deployment (AWS, Firebase, Vercel)",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Monitoring",
    description:
      "Comprehensive analytics setup and monitoring to understand user behavior and optimize performance.",
    features: [
      "Firebase Analytics integration",
      "Custom event tracking",
      "Crash reporting & monitoring",
      "Performance profiling",
      "A/B testing setup",
    ],
  },
  {
    icon: Rocket,
    title: "App Launch & Growth",
    description:
      "End-to-end launch strategy from store listing optimization to post-launch growth and iteration.",
    features: [
      "App Store Optimization (ASO)",
      "Launch strategy & checklist",
      "User feedback integration",
      "Iterative improvements",
      "Growth metrics & KPI tracking",
    ],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We understand your goals, users, and requirements." },
  { step: "02", title: "Design", description: "We create wireframes, prototypes, and visual designs." },
  { step: "03", title: "Develop", description: "We build with clean code, testing, and CI/CD." },
  { step: "04", title: "Deploy", description: "We launch, monitor, and iterate based on feedback." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv animation="fade-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Our Services
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Full-stack development{" "}
                <span className="gradient-text">services</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From ideation to launch and beyond, we provide comprehensive
                development services to bring your vision to life.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                      <service.icon className="size-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How we{" "}
              <span className="gradient-text">work together</span>
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((item, i) => (
              <MotionDiv key={item.step} animation="fade-up" delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv animation="fade-up" delay={0.4} className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="gradient-bg border-0 hover:opacity-90 text-base px-8 h-12"
            >
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>

      <CTA />
    </>
  );
}
