import type { Metadata } from "next";
import {
  Code2,
  Users,
  Target,
  Heart,
  Globe,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about herdoydev — a tech-focused organization building mobile apps that solve real-world problems.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | herdoydev",
    description:
      "Learn about herdoydev — a tech-focused organization building mobile apps that solve real-world problems.",
    url: "/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Problem-First Approach",
    description:
      "We start with real-world problems and work backwards to build solutions that truly matter.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Every decision we make is driven by the end user's experience and satisfaction.",
  },
  {
    icon: Heart,
    title: "Passion for Quality",
    description:
      "We believe in craftsmanship — clean code, polished UI, and attention to every detail.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Our apps are built for a global audience, accessible and useful to people everywhere.",
  },
];

const techStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Firebase",
  "AWS",
  "Docker",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv animation="fade-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                About Us
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                We build apps that{" "}
                <span className="gradient-text">make a difference</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                herdoydev is a tech-focused organization that builds and publishes
                mobile applications across multiple domains including AI, health,
                fintech, productivity, and more. We focus on solving real-world
                problems through scalable and user-friendly applications.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv animation="slide-left">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl gradient-bg flex items-center justify-center">
                  <Code2 className="size-32 text-white/30" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </MotionDiv>
            <MotionDiv animation="slide-right">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                The Founder
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                5+ years of building{" "}
                <span className="gradient-text">production software</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a full-stack developer with over 5 years of experience, I&apos;ve
                worked with technologies like React.js, Next.js, Node.js,
                Express.js, MongoDB, MySQL, and modern cloud services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After building numerous client projects, I&apos;m now focused on
                creating my own products and publishing them to platforms like
                Google Play Store — solving real problems for real users.
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full gradient-bg flex items-center justify-center">
                  <Award className="size-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Herdoy Almamun</p>
                  <p className="text-sm text-muted-foreground">
                    Founder & Lead Developer
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What drives{" "}
              <span className="gradient-text">everything we do</span>
            </h2>
          </MotionDiv>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                      <value.icon className="size-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Tech Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technologies we{" "}
              <span className="gradient-text">work with</span>
            </h2>
          </MotionDiv>
          <MotionDiv animation="fade-up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <CTA />
    </>
  );
}
