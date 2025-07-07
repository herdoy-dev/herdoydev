import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  BarChart,
  TrendingUp,
  Globe,
  ClipboardCheck,
  Link2,
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
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Technical SEO",
    description:
      "Improve your website's infrastructure for better crawling and indexing.",
    features: [
      "Site architecture optimization",
      "Schema markup implementation",
      "Core Web Vitals improvement",
      "XML sitemap optimization",
    ],
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    title: "On-Page SEO",
    description:
      "Optimize your content and HTML for maximum search visibility.",
    features: [
      "Keyword research & strategy",
      "Content optimization",
      "Meta tag optimization",
      "Internal linking strategy",
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Local SEO",
    description: "Boost visibility in local search results and maps.",
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review management",
      "NAP consistency audit",
    ],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: "SEO Analytics",
    description: "Measure, analyze, and improve your search performance.",
    features: [
      "Rank tracking & reporting",
      "Competitor analysis",
      "Traffic growth strategies",
      "Conversion rate optimization",
    ],
  },
];

const technologies = [
  { name: "Google Search Console", logo: "/tech/google-search-console.svg" },
  { name: "Google Analytics", logo: "/tech/google-analytics.svg" },
  { name: "Ahrefs", logo: "/tech/ahrefs.svg" },
  { name: "SEMrush", logo: "/tech/semrush.svg" },
  { name: "Screaming Frog", logo: "/tech/screaming-frog.svg" },
  { name: "Moz", logo: "/tech/moz.svg" },
];

const processSteps = [
  {
    step: "01",
    title: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Developing a customized SEO roadmap for your business",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Executing technical and content optimizations",
  },
  {
    step: "04",
    title: "Content Optimization",
    description: "Enhancing existing content and planning new content",
  },
  {
    step: "05",
    title: "Monitoring",
    description: "Ongoing tracking and iterative improvements",
  },
];

export default function SEOPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Search Engine Optimization
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Professional SEO Services
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Data-driven strategies to increase organic traffic, improve
                search rankings, and grow your business through search engines.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your SEO Audit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/case-studies">See SEO Results</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our SEO Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions to improve your search visibility and
                organic growth
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="h-full transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-blue-50 p-3">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
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
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our SEO Tools
              </h2>
              <p className="text-lg text-gray-600">
                Industry-leading tools we use to analyze, optimize, and track
                your SEO performance
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm w-24 h-24 flex items-center justify-center">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <ClipboardCheck className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold">
                    Comprehensive SEO Audits
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our 150+ point audits analyze technical infrastructure,
                  content quality, backlink profile, and competitor gaps to
                  identify your biggest opportunities for organic growth.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Link2 className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold">
                    Link Building Strategies
                  </h3>
                </div>
                <p className="text-gray-600">
                  White-hat link acquisition through digital PR, content
                  marketing, and strategic outreach to build domain authority
                  and improve rankings for competitive keywords.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our SEO Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven methodology to deliver sustainable organic growth
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-5">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src="/case-studies/seo-showcase.jpg"
                    alt="SEO case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl font-bold mb-4">
                    E-Commerce SEO Transformation
                  </h2>
                  <p className="text-gray-600 mb-6">
                    How we increased organic traffic by 320% and revenue by 210%
                    for an online retailer through comprehensive technical SEO
                    fixes, content optimization, and strategic link building.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">320%</p>
                      <p className="text-sm text-gray-600">Traffic increase</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">210%</p>
                      <p className="text-sm text-gray-600">Revenue growth</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">85%</p>
                      <p className="text-sm text-gray-600">
                        Keyword ranking improvements
                      </p>
                    </div>
                  </div>
                  <Button asChild>
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <blockquote className="text-center">
              <p className="text-xl italic text-gray-700 mb-6">
                &quot;herdoydev&apos;s SEO strategy delivered results we
                didn&apos;t think were possible. In 8 months, we went from page
                3 to ranking #1 for our most valuable keywords, driving
                consistent high-quality traffic that converts.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-600">Mark Thompson</div>
                <div className="text-gray-600">
                  Marketing Director, TechSolutions Inc.
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can improve your search visibility and
              drive more qualified traffic to your website.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">Get Your Free SEO Audit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-blue-700"
              >
                <Link href="/blog/seo-tips">Read Our SEO Blog</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
