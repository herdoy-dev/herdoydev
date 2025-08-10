import ThemedCard from "@/components/themed-card";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Cpu,
  Globe,
  LayoutTemplate,
  Smartphone,
  Zap,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title:
    "Web Development Services | React, Next.js & Shopify Experts | herdoydev",
  description:
    "Specializing in high-performance websites that convert 30% more visitors. Get custom solutions with React, Next.js, Node.js, and headless commerce.",
  keywords: [
    "hire web developers",
    "custom website development",
    "e-commerce development agency",
    "React.js experts",
    "Next.js development",
    "web performance optimization",
    "headless CMS implementation",
    "mobile-first web design",
  ],
  openGraph: {
    title: "Premium Web Development Services | herdoydev",
    description:
      "End-to-end web solutions that drive growth. 98% client satisfaction rate.",
    url: "https://herdoydev.com/services",
    images: [
      {
        url: "https://herdoydev.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev team developing web applications",
      },
    ],
  },
};

const services = [
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Custom Website Development",
    description:
      "Bespoke websites that load in <1.5s and convert 40% better with our React/Next.js framework.",
    features: [
      "Mobile-first responsive design (100% Google Mobile-Friendly)",
      "SEO-optimized architecture (90+ Lighthouse scores)",
      "WordPress/Sanity CMS integration",
      "Monthly performance maintenance",
    ],
    cta: "Get Website Quote",
    href: "/contact?service=website",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    title: "E-Commerce Development",
    description:
      "Stores with 3.2x average conversion rates using Shopify Plus and headless architectures.",
    features: [
      "Shopify/Commerce.js implementations",
      "One-click checkout optimization",
      "PIM and ERP integrations",
      "Post-launch conversion analytics",
    ],
    cta: "Boost Online Sales",
    href: "/contact?service=ecommerce",
  },
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Web Applications",
    description:
      "Secure apps handling 10K+ daily users with Node.js backends and React frontends.",
    features: [
      "Next.js SSR applications",
      "Real-time data dashboards",
      "SOC 2 compliant security",
      "Automated CI/CD pipelines",
    ],
    cta: "Build Your App",
    href: "/contact?service=webapp",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "Progressive Web Apps",
    description:
      "Mobile experiences with 85% higher engagement than traditional sites.",
    features: [
      "Offline-first functionality",
      "Push notification systems",
      "60fps animations",
      "App-store deployment",
    ],
    cta: "Go Mobile-First",
    href: "/contact?service=pwa",
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: "Headless CMS Solutions",
    description: "Content infrastructure that reduces publishing time by 50%.",
    features: [
      "Contentful/Strapi implementations",
      "Omnichannel content delivery",
      "GraphQL/REST APIs",
      "AI content suggestions",
    ],
    cta: "Modernize CMS",
    href: "/contact?service=cms",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description: "Websites scoring 95+ Lighthouse points within 30 days.",
    features: [
      "Core Web Vitals fixes",
      "Edge computing setup",
      "Database optimization",
      "CDN configuration",
    ],
    cta: "Speed Audit",
    href: "/contact?service=optimization",
  },
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
  {
    step: "06",
    title: "Launch & Scale",
    description: "Deployment with performance monitoring setup",
    icon: "🚀",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href="https://herdoydev.com/services" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Web Development Experts
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="block">High-Performance</span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Web Development Services
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                We build websites and applications that outperform competitors
                by
                <strong> 40% in speed</strong> and{" "}
                <strong>30% in conversions</strong>
                using React, Next.js, and Node.js.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="animate-pulse">
                  <Link href="/contact">Get Free Technical Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">Specialized</span> Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Solutions trusted by SaaS companies and enterprises to scale
                their digital presence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ThemedCard key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
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
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" size="lg">
                      <Link href={service.href}>{service.cta}</Link>
                    </Button>
                  </CardContent>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">6-Stage</span> Process
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent workflow that delivers on time and exceeds
                expectations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <ThemedCard key={index}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{step.icon}</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready for a Website That Converts?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a free 30-minute technical audit of your current site and
              actionable growth plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">Get Free Audit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/case-studies">See Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
