import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import ThemedIcon from "@/components/themed-icon";
import { Icon } from "@iconify/react";
import {
  BarChart,
  ClipboardCheck,
  Globe,
  Link2,
  Search,
  TrendingUp,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Professional SEO Services | herdoydev",
  description:
    "Data-driven SEO strategies to increase organic traffic and improve search rankings. Technical SEO, content optimization, and ongoing performance tracking.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "technical SEO",
    "content SEO",
    "SEO audit",
    "herdoydev SEO services",
  ],
  openGraph: {
    title: "Professional SEO Services | herdoydev",
    description:
      "Proven strategies to grow your organic search traffic and visibility.",
    url: "https://herdoydev.com/services/seo-optimization",
    images: [
      {
        url: "https://herdoydev.com/og-seo-services.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev SEO Services",
      },
    ],
  },
};

const services = [
  {
    icon: <Search />,
    title: "Technical SEO",
    description:
      "Improve your website's infrastructure for better crawling and indexing.",
    features: [
      "Site architecture optimization",
      "Schema markup implementation",
      "Core Web Vitals improvement",
      "XML sitemap optimization",
    ],
    cta: "Audit My Site",
    href: "/contact?service=technical-seo",
  },
  {
    icon: <BarChart />,
    title: "On-Page SEO",
    description:
      "Optimize your content and HTML for maximum search visibility.",
    features: [
      "Keyword research & strategy",
      "Content optimization",
      "Meta tag optimization",
      "Internal linking strategy",
    ],
    cta: "Optimize Content",
    href: "/contact?service=onpage-seo",
  },
  {
    icon: <Globe />,
    title: "Local SEO",
    description: "Boost visibility in local search results and maps.",
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review management",
      "NAP consistency audit",
    ],
    cta: "Boost Local SEO",
    href: "/contact?service=local-seo",
  },
  {
    icon: <TrendingUp />,
    title: "SEO Analytics",
    description: "Measure, analyze, and improve your search performance.",
    features: [
      "Rank tracking & reporting",
      "Competitor analysis",
      "Traffic growth strategies",
      "Conversion rate optimization",
    ],
    cta: "Track Performance",
    href: "/contact?service=seo-analytics",
  },
];

const technologies = [
  {
    name: "Google Search Console",
    icon: "fa6-brands:google",
    color: "#4285F4",
  },
  {
    name: "Google Analytics",
    icon: "fa6-solid:chart-line",
    color: "#FF7043",
  },
  {
    name: "Ahrefs",
    icon: "fa6-solid:magnifying-glass-chart",
    color: "#193153",
  },
  {
    name: "SEMrush",
    icon: "fa6-solid:arrow-trend-up",
    color: "#FF6B3D",
  },
  {
    name: "Screaming Frog",
    icon: "fa6-solid:frog",
    color: "#4CAF50",
  },
  {
    name: "Moz",
    icon: "fa6-solid:globe",
    color: "#00A1B1",
  },
];

const processSteps = [
  {
    step: "01",
    title: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Developing a customized SEO roadmap for your business",
    icon: "📋",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Executing technical and content optimizations",
    icon: "🛠️",
  },
  {
    step: "04",
    title: "Content Optimization",
    description: "Enhancing existing content and planning new content",
    icon: "✍️",
  },
  {
    step: "05",
    title: "Monitoring",
    description: "Ongoing tracking and iterative improvements",
    icon: "📊",
  },
];

export default function SEOPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link
          rel="canonical"
          href="https://herdoydev.com/services/seo-optimization"
        />
      </Head>

      <main>
        <PageHeaderBox>
          <div className="mx-auto max-w-4xl text-center">
            <SectionButton>Search Engine Optimization</SectionButton>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block">Data-Driven</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              We implement proven strategies to increase organic traffic by{" "}
              <strong>300%+</strong> and improve search rankings through
              technical SEO, content optimization, and analytics.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="animate-pulse text-gray-200">
                <Link href="/contact">Get Free SEO Audit</Link>
              </Button>
            </div>
          </div>
        </PageHeaderBox>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">SEO</span> Services
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions to improve your search visibility and
                organic growth
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
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
                Our <span className="text-blue-600">SEO</span> Tools
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Industry-leading tools we use to analyze, optimize, and track
                your SEO performance
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="bg-card p-4 rounded-lg shadow-sm w-24 h-24 flex items-center justify-center">
                    <Icon
                      icon={tech.icon}
                      width="48"
                      height="48"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <ThemedIcon className="bg-primary">
                    <ClipboardCheck className="h-6 w-6" />
                  </ThemedIcon>
                  <h3 className="text-xl font-bold text-white">
                    Comprehensive SEO Audits
                  </h3>
                </div>
                <p className="text-gray-400">
                  Our 150+ point audits analyze technical infrastructure,
                  content quality, backlink profile, and competitor gaps to
                  identify your biggest opportunities for organic growth.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <ThemedIcon className="bg-primary">
                    <Link2 className="h-6 w-6" />
                  </ThemedIcon>
                  <h3 className="text-xl font-bold text-white">
                    Link Building Strategies
                  </h3>
                </div>
                <p className="text-gray-400">
                  White-hat link acquisition through digital PR, content
                  marketing, and strategic outreach to build domain authority
                  and improve rankings for competitive keywords.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">5-Stage</span> SEO Process
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                A proven methodology to deliver sustainable organic growth
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
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src="/projects/portfolio3.jpeg"
                    alt="SEO case study"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-900 px-3 py-1 text-sm font-medium text-blue-200 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    E-Commerce SEO Transformation
                  </h2>
                  <p className="text-gray-400 mb-6">
                    How we increased organic traffic by 320% and revenue by 210%
                    for an online retailer through comprehensive technical SEO
                    fixes, content optimization, and strategic link building.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-400">320%</p>
                      <p className="text-sm text-gray-400">Traffic increase</p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-400">210%</p>
                      <p className="text-sm text-gray-400">Revenue growth</p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-400">85%</p>
                      <p className="text-sm text-gray-400">
                        Keyword ranking improvements
                      </p>
                    </div>
                  </div>
                  <Button asChild className="text-gray-200">
                    <Link href="/case-studies/ecommerce-seo">
                      Read Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <blockquote>
              <p className="text-xl italic text-gray-400 mb-6">
                &quot;herdoydev&apos;s SEO strategy delivered results we
                didn&apos;t think were possible. In 8 months, we went from page
                3 to ranking #1 for our most valuable keywords, driving
                consistent high-quality traffic that converts.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-400">Mark Thompson</div>
                <div className="text-gray-500">
                  Marketing Director, TechSolutions Inc.
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can improve your search visibility and
              drive more qualified traffic to your website.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="border bg-transparent !text-primary border-primary"
                size="lg"
              >
                <Link href="/contact">Get Free Audit</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/case-studies">See Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
