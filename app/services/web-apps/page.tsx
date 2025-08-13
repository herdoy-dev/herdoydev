import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import ThemedIcon from "@/components/themed-icon";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Database, GitBranch, Lock, Server, Zap } from "lucide-react";
import {
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Web Application Development | herdoydev",
  description:
    "Build powerful, scalable web applications tailored to your business needs. From SaaS platforms to enterprise solutions, we deliver robust web apps.",
  keywords: [
    "web application development",
    "custom web apps",
    "SaaS development",
    "enterprise web applications",
    "herdoydev web apps",
  ],
  openGraph: {
    title: "Custom Web Application Development | herdoydev",
    description:
      "Tailored web applications built for performance and scalability.",
    url: "https://herdoydev.com/services/web-applications",
    images: [
      {
        url: "https://herdoydev.com/og-web-applications.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Web Application Services",
      },
    ],
  },
};

const services = [
  {
    icon: <Cpu />,
    title: "Custom Web Applications",
    description:
      "Tailored solutions that load in <1.5s and handle 10K+ daily users with our React/Next.js framework.",
    features: [
      "Complex workflow automation",
      "Role-based access control",
      "Real-time data processing",
      "Third-party API integrations",
    ],
    cta: "Start Project",
    href: "/contact?service=webapp",
  },
  {
    icon: <Database />,
    title: "Enterprise Applications",
    description:
      "Scalable systems with 99.9% uptime using microservices architecture.",
    features: [
      "Node.js backend systems",
      "SOC 2 compliant security",
      "High availability setup",
      "Legacy system modernization",
    ],
    cta: "Enterprise Solutions",
    href: "/contact?service=enterprise",
  },
  {
    icon: <GitBranch />,
    title: "SaaS Development",
    description:
      "Cloud-based solutions converting 30% better than competitors.",
    features: [
      "Multi-tenancy architecture",
      "Subscription billing",
      "White-labeling options",
      "Automated CI/CD pipelines",
    ],
    cta: "Build SaaS",
    href: "/contact?service=saas",
  },
  {
    icon: <Zap />,
    title: "Performance Optimization",
    description: "Websites scoring 95+ Lighthouse points within 30 days.",
    features: [
      "Core Web Vitals fixes",
      "Database optimization",
      "Edge computing setup",
      "CDN configuration",
    ],
    cta: "Speed Audit",
    href: "/contact?service=optimization",
  },
];

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "90-minute session to define KPIs and technical requirements",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "System diagrams and tech stack recommendations",
    icon: "📋",
  },
  {
    step: "03",
    title: "Development Sprint",
    description: "2-week sprints with bi-weekly demos",
    icon: "💻",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Automated + manual testing across 20+ devices",
    icon: "🧪",
  },
  {
    step: "05",
    title: "Deployment",
    description: "CI/CD pipeline setup with monitoring",
    icon: "🚀",
  },
];

export default function WebApplicationsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link
          rel="canonical"
          href="https://herdoydev.com/services/web-applications"
        />
      </Head>

      <main>
        <PageHeaderBox>
          <div className="mx-auto max-w-4xl text-center">
            <SectionButton>Web Applications</SectionButton>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block">Custom</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Web Application Development
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              We build applications that handle{" "}
              <strong>10K+ daily users</strong> with{" "}
              <strong>99.9% uptime</strong> using React, Next.js, and Node.js.
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
                Our <span className="text-blue-600">Application</span> Services
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Solutions trusted by SaaS companies and enterprises to scale
                their digital operations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service, index) => (
                <ThemedCard key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <ThemedIcon className="bg-primary">
                        {service.icon}
                      </ThemedIcon>
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
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
                Modern technologies for robust application development
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

            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ThemedCard>
                <div className="flex items-center gap-4 mb-4">
                  <ThemedIcon className="bg-primary">
                    <Server />
                  </ThemedIcon>
                  <h3 className="text-xl font-bold">Backend Expertise</h3>
                </div>
                <p className="text-gray-400">
                  We build robust APIs and microservices with Node.js, Python,
                  and .NET, ensuring your application can handle complex
                  business logic and scale with your needs.
                </p>
              </ThemedCard>
              <ThemedCard>
                <div className="flex items-center gap-4 mb-4">
                  <ThemedIcon className="bg-primary">
                    <Lock />
                  </ThemedIcon>
                  <h3 className="text-xl font-bold">Security Focus</h3>
                </div>
                <p className="text-gray-400">
                  Enterprise-grade security including OAuth 2.0, data
                  encryption, penetration testing, and compliance with industry
                  standards like GDPR and HIPAA.
                </p>
              </ThemedCard>
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
                  src="/projects/portfolio3.jpeg"
                  alt="Web application case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4 w-fit">
                  Case Study
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  Enterprise Workflow Automation
                </h2>
                <p className="text-gray-400 mb-6">
                  How we built a custom web application that automated manual
                  processes for a manufacturing company, reducing operational
                  costs by 40% and processing time by 75%.
                </p>
                <div className="grid gap-4 sm:grid-cols-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">75%</p>
                    <p className="text-sm text-gray-400">Faster processing</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">40%</p>
                    <p className="text-sm text-gray-400">Cost reduction</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">10x</p>
                    <p className="text-sm text-gray-400">Scalability</p>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/case-studies/workflow-automation">
                    Read Case Study
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Ready to Build Your Custom Website?
            </span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Get a free 30-minute consultation with our senior developers and see
            how we can bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:opacity-90 transition"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </section>
      </main>
    </>
  );
}
