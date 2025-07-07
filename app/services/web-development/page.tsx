import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, LayoutTemplate, Smartphone, Zap } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Web Development Services | herdoydev",
  description:
    "Professional custom website development with modern technologies. We build responsive, SEO-friendly websites tailored to your business needs.",
  keywords: [
    "custom website development",
    "responsive web design",
    "SEO-friendly websites",
    "modern web development",
    "herdoydev web services",
  ],
  openGraph: {
    title: "Custom Web Development Services | herdoydev",
    description: "Tailored website solutions built for performance and growth.",
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
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Custom Website Development",
    description:
      "Tailored websites built for performance, scalability, and your unique business needs.",
    features: [
      "Responsive & mobile-first design",
      "SEO-optimized architecture",
      "CMS integration options",
      "Ongoing maintenance packages",
    ],
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    title: "Website Redesign",
    description:
      "Modernize outdated websites with improved UX and modern technologies.",
    features: [
      "User experience audits",
      "Visual identity refresh",
      "Content reorganization",
      "Performance optimization",
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "Mobile-First Development",
    description: "Web experiences designed and built for the mobile era.",
    features: [
      "Touch-optimized interfaces",
      "Progressive enhancement",
      "App-like experiences",
      "Cross-browser testing",
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description: "Make your existing website faster and more efficient.",
    features: [
      "Lighthouse audits",
      "Loading speed optimization",
      "Core Web Vitals improvement",
      "Hosting consultation",
    ],
  },
];

const technologies = [
  { name: "React", logo: "/tech/react.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "TypeScript", logo: "/tech/typescript.svg" },
  { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "GraphQL", logo: "/tech/graphql.svg" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your needs and define project goals",
  },
  {
    step: "02",
    title: "Design",
    description: "Crafting user-centric interfaces and experiences",
  },
  {
    step: "03",
    title: "Development",
    description: "Building with clean, maintainable code",
  },
  {
    step: "04",
    title: "Testing",
    description: "Ensuring quality across all devices",
  },
  {
    step: "05",
    title: "Launch",
    description: "Deployment and post-launch support",
  },
];

export default function WebDevelopmentPage() {
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
                Web Development
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Custom Website Development Services
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We craft high-performance websites that drive growth, enhance
                user experience, and deliver measurable results.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">See Our Work</Link>
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
                Our Web Development Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions tailored to your specific requirements
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
                Our Technology Stack
              </h2>
              <p className="text-lg text-gray-600">
                Modern tools and frameworks we use to build exceptional websites
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
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600">
                A transparent, collaborative approach to delivering exceptional
                results
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
                    src="/case-studies/web-dev-showcase.jpg"
                    alt="Web development case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl font-bold mb-4">
                    Corporate Website Redesign
                  </h2>
                  <p className="text-gray-600 mb-6">
                    How we transformed a legacy corporate website into a modern
                    digital experience that increased leads by 65%.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">65%</p>
                      <p className="text-sm text-gray-600">More leads</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">3.8s</p>
                      <p className="text-sm text-gray-600">Faster load time</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">95%</p>
                      <p className="text-sm text-gray-600">Mobile traffic</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/case-studies/corporate-website-redesign">
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
                &quot;herdoydev didn&apos;t just deliver a website - they
                delivered a digital transformation. Our new platform has become
                a competitive advantage, driving measurable business
                growth.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-600">Michael Chen</div>
                <div className="text-gray-600">CEO, TechCorp</div>
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  );
}
