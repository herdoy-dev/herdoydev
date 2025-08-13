import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import ThemedIcon from "@/components/themed-icon";
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Globe, LayoutTemplate, Smartphone, Zap } from "lucide-react";
import {
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Web Development Services | herdoydev",
  description:
    "Professional custom website development with modern technologies. We build responsive, SEO-friendly websites that convert 30% more visitors.",
  keywords: [
    "custom website development",
    "responsive web design",
    "SEO-friendly websites",
    "modern web development",
    "high-converting websites",
  ],
  openGraph: {
    title: "Premium Web Development Services | herdoydev",
    description: "Websites that load in <1.5s and convert 40% better",
    url: "https://herdoydev.com/services/web-development",
    images: [
      {
        url: "https://herdoydev.com/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Web Development Services",
      },
    ],
  },
};

const services = [
  {
    icon: <Globe />,
    title: "Custom Website Development",
    description:
      "Bespoke websites that load in <1.5s and convert 40% better with our React/Next.js framework.",
    features: [
      "Mobile-first responsive design (100% Google Mobile-Friendly)",
      "SEO-optimized architecture (90+ Lighthouse scores)",
      "CMS integration options",
      "Monthly performance maintenance",
    ],
    cta: "Get Website Quote",
    href: "/contact?service=website",
  },
  {
    icon: <LayoutTemplate />,
    title: "Website Redesign",
    description:
      "Modernize outdated sites with 3.2x better conversion rates and 95+ performance scores.",
    features: [
      "User experience audits",
      "Visual identity refresh",
      "Content reorganization",
      "Core Web Vitals optimization",
    ],
    cta: "Redesign My Site",
    href: "/contact?service=redesign",
  },
  {
    icon: <Smartphone />,
    title: "Mobile-First Development",
    description: "Web experiences with 85% higher mobile engagement.",
    features: [
      "Touch-optimized interfaces",
      "60fps animations",
      "App-like experiences",
      "Cross-browser testing matrix",
    ],
    cta: "Mobile Audit",
    href: "/contact?service=mobile",
  },
  {
    icon: <Zap />,
    title: "Performance Optimization",
    description: "Websites scoring 95+ Lighthouse points within 30 days.",
    features: [
      "Lighthouse audits",
      "Edge computing setup",
      "Database optimization",
      "CDN configuration",
    ],
    cta: "Speed Audit",
    href: "/contact?service=optimization",
  },
];

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Workshop",
    description: "90-minute session to define KPIs and technical requirements",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Technical Blueprint",
    description: "Architecture diagrams and tech stack recommendations",
    icon: "📋",
  },
  {
    step: "03",
    title: "UI/UX Design Sprint",
    description: "2-week design process with user testing",
    icon: "🎨",
  },
  {
    step: "04",
    title: "Agile Development",
    description: "2-week sprints with bi-weekly demos",
    icon: "💻",
  },
  {
    step: "05",
    title: "QA Testing",
    description: "Automated + manual testing across 20+ devices",
    icon: "🧪",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link
          rel="canonical"
          href="https://herdoydev.com/services/web-development"
        />
      </Head>

      <main>
        <PageHeaderBox>
          <div className="mx-auto max-w-4xl text-center">
            <SectionButton>Web Development</SectionButton>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block">Custom</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Website Development
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              We build websites that outperform competitors by{" "}
              <strong>40% in speed</strong> and{" "}
              <strong>30% in conversions</strong> using modern technologies.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="animate-pulse text-gray-200">
                <Link href="/contact">Get Free Technical Consultation</Link>
              </Button>
            </div>
          </div>
        </PageHeaderBox>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">Web Development</span>{" "}
                Services
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Solutions trusted by startups and enterprises to scale their
                digital presence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <ThemedCard key={index}>
                  <div className="pb-3">
                    <div className="flex items-center space-x-4">
                      <ThemedIcon className="bg-primary">
                        {service.icon}
                      </ThemedIcon>
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full text-gray-200" size="lg">
                      <Link href={service.href}>{service.cta}</Link>
                    </Button>
                  </CardContent>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">Technology</span> Stack
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Modern tools we use to build high-performance websites
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className="flex flex-col items-center">
                    <div className="bg-card p-6 rounded-lg shadow-sm w-24 h-24 flex items-center justify-center">
                      <Icon
                        className="text-5xl"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">5-Stage</span> Process
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Transparent workflow that delivers on time and exceeds
                expectations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <ThemedCard key={index}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{step.icon}</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/about/team-working.jpeg"
                  alt="Web development case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4 w-fit">
                  Case Study
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  Corporate Website Redesign
                </h2>
                <p className="text-gray-400 mb-6">
                  Transformed a legacy corporate website into a modern
                  experience that:
                </p>
                <div className="grid gap-4 sm:grid-cols-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">65%</p>
                    <p className="text-sm text-gray-400">More leads</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">1.2s</p>
                    <p className="text-sm text-gray-400">Load time</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">95%</p>
                    <p className="text-sm text-gray-400">Mobile traffic</p>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/case-studies/corporate-website-redesign">
                    Read Case Study
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
              Ready for a High-Performance Website?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Get a free 30-minute technical audit of your current site.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">Get Free Audit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-blue-700 hover:text-white"
              >
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
