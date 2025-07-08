import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  title: "Our Services | herdoydev - Web Development Agency",
  description:
    "Discover our comprehensive web development services including custom websites, e-commerce solutions, web applications, and performance optimization.",
  keywords: [
    "web development services",
    "custom website development",
    "e-commerce solutions",
    "web application development",
    "SEO optimization services",
  ],
  openGraph: {
    title: "Our Services | herdoydev - Web Development Agency",
    description:
      "Premium web development services tailored to your business needs.",
    url: "https://herdoydev.com/services",
    images: [
      {
        url: "https://herdoydev.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Services",
      },
    ],
  },
};

const services = [
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Custom Website Development",
    description:
      "Tailored websites built for performance, scalability, and your unique business needs with modern tech stacks.",
    features: [
      "Responsive & mobile-first design",
      "SEO-optimized architecture",
      "CMS integration options",
      "Ongoing maintenance packages",
    ],
    cta: "Get a Custom Website",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    title: "E-Commerce Solutions",
    description:
      "Complete online store development that converts visitors into customers and grows your revenue.",
    features: [
      "Shopify/Headless commerce",
      "Payment gateway integration",
      "Product catalog management",
      "Checkout optimization",
    ],
    cta: "Build Your Online Store",
  },
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Web Applications",
    description:
      "Interactive, data-driven applications that solve complex business challenges.",
    features: [
      "React/Next.js applications",
      "Real-time functionality",
      "API integrations",
      "User authentication systems",
    ],
    cta: "Develop Your Web App",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "Mobile-First Development",
    description:
      "Web experiences designed and built for the mobile era with progressive enhancement.",
    features: [
      "Touch-optimized interfaces",
      "Offline capabilities",
      "App-like experiences",
      "Performance tuning",
    ],
    cta: "Optimize for Mobile",
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: "Headless CMS Development",
    description:
      "Future-proof content management with the flexibility of headless architecture.",
    features: [
      "Content modeling",
      "Multi-channel publishing",
      "Developer-friendly APIs",
      "Editor experience design",
    ],
    cta: "Modernize Your CMS",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description:
      "Make your existing website faster, more efficient, and higher converting.",
    features: [
      "Lighthouse audits",
      "Loading speed optimization",
      "Core Web Vitals improvement",
      "Hosting consultation",
    ],
    cta: "Speed Up Your Site",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your needs and define project goals",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating detailed specifications and timelines",
  },
  {
    step: "03",
    title: "Design",
    description: "Crafting user-centric interfaces and experiences",
  },
  {
    step: "04",
    title: "Development",
    description: "Building with clean, maintainable code",
  },
  {
    step: "05",
    title: "Testing",
    description: "Ensuring quality across all devices and browsers",
  },
  {
    step: "06",
    title: "Launch",
    description: "Deployment and post-launch support",
  },
];

export default function ServicesPage() {
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
                What We Offer
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Comprehensive Web Development Services
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We deliver end-to-end digital solutions designed to meet your
                business objectives and exceed user expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    <Button asChild className="w-full">
                      <Link href="/contact">{service.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                How We Work
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Development Process
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A transparent, collaborative approach to delivering exceptional
                results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="inline-block mb-4 text-2xl font-bold text-blue-600">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you achieve your business goals
              through exceptional web solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
