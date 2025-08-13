import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import ThemedIcon from "@/components/themed-icon";
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import {
  Box,
  CreditCard,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import {
  SiBigcommerce,
  SiNextdotjs,
  SiReact,
  SiShopify,
  SiStripe,
  SiWoocommerce,
} from "react-icons/si";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "E-Commerce Development Services | herdoydev",
  description:
    "Professional e-commerce solutions that convert 3.2x better than average. We build high-performance online stores with seamless checkout experiences.",
  keywords: [
    "e-commerce development",
    "online store development",
    "shopify development",
    "high-converting stores",
    "headless commerce",
  ],
  openGraph: {
    title: "Premium E-Commerce Development | herdoydev",
    description:
      "Stores with 3.2x average conversion rates using Shopify Plus and headless architectures.",
    url: "https://herdoydev.com/services/e-commerce",
    images: [
      {
        url: "https://herdoydev.com/og-ecommerce.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev E-Commerce Services",
      },
    ],
  },
};

const services = [
  {
    icon: <ShoppingCart />,
    title: "Custom E-Commerce",
    description:
      "Stores converting 3.2x better with Shopify Plus and headless architectures.",
    features: [
      "One-click checkout optimization",
      "PIM and ERP integrations",
      "90+ Lighthouse scores",
      "Post-launch conversion analytics",
    ],
    cta: "Build My Store",
    href: "/contact?service=ecommerce",
  },
  {
    icon: <CreditCard />,
    title: "Platform Migration",
    description: "Zero-downtime migrations that preserve 100% of SEO equity.",
    features: [
      "Automated data transfer",
      "301 redirect strategy",
      "Theme reconstruction",
      "Performance benchmarking",
    ],
    cta: "Migrate My Store",
    href: "/contact?service=migration",
  },
  {
    icon: <Box />,
    title: "Headless Commerce",
    description:
      "Blazing-fast storefronts with CMS flexibility and omnichannel capabilities.",
    features: [
      "Commerce.js implementations",
      "Progressive Web Apps",
      "60fps animations",
      "Edge caching",
    ],
    cta: "Go Headless",
    href: "/contact?service=headless",
  },
  {
    icon: <TrendingUp />,
    title: "Conversion Optimization",
    description: "Data-driven improvements that boost revenue by 40-220%.",
    features: [
      "A/B testing framework",
      "Checkout funnel analysis",
      "Cart recovery flows",
      "Personalization engines",
    ],
    cta: "Boost Conversions",
    href: "/contact?service=conversion",
  },
];

const technologies = [
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
  { name: "BigCommerce", icon: SiBigcommerce, color: "#121118" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
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
    description: "Architecture diagrams and platform recommendations",
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
    title: "Development",
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

export default function ECommercePage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link
          rel="canonical"
          href="https://herdoydev.com/services/e-commerce"
        />
      </Head>

      <main>
        <PageHeaderBox>
          <div className="mx-auto max-w-4xl text-center">
            <SectionButton>E-Commerce Solutions</SectionButton>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block">High-Converting</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                E-Commerce Development
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              We build stores that outperform competitors by{" "}
              <strong>3.2x in conversions</strong> with{" "}
              <strong>90+ Lighthouse scores</strong> using modern commerce
              platforms.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="animate-pulse text-gray-200">
                <Link href="/contact">Get Free Store Audit</Link>
              </Button>
            </div>
          </div>
        </PageHeaderBox>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">E-Commerce</span> Services
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Solutions trusted by brands to scale their online revenue.
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
                Our <span className="text-blue-600">Commerce</span> Stack
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Platforms and tools we use to build secure, scalable stores
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

            <div className="mt-16 max-w-4xl mx-auto">
              <ThemedCard>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <ThemedIcon className="bg-primary">
                    <ShieldCheck />
                  </ThemedIcon>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-gray-400">
                      PCI-DSS compliance, fraud prevention, and regular security
                      audits to protect your business and customers.
                    </p>
                  </div>
                </div>
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
                  src="/projects/portfolio1.jpeg"
                  alt="E-commerce case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4 w-fit">
                  Case Study
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  Fashion Boutique E-Commerce
                </h2>
                <p className="text-gray-400 mb-6">
                  Transformed a boutique&apos;s online presence with results
                  including:
                </p>
                <div className="grid gap-4 sm:grid-cols-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">220%</p>
                    <p className="text-sm text-gray-400">Sales increase</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">1.2s</p>
                    <p className="text-sm text-gray-400">Load time</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-xl font-bold text-primary">42%</p>
                    <p className="text-sm text-gray-400">Lower abandonment</p>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/case-studies/fashion-boutique-ecommerce">
                    Read Case Study
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              <span className="block">Ready to Transform Your</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                E-Commerce Performance?
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-400">
              Get a free store audit with actionable insights to boost
              conversions by 30-200%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse text-gray-200">
                <Link href="/contact?service=audit">Get Free Store Audit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border bg-transparent !text-primary border-primary hover:bg-primary/10"
              >
                <Link href="/case-studies">See Client Results</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
