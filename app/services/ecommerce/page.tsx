import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Box,
  CreditCard,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  SiBigcommerce,
  SiNextdotjs,
  SiReact,
  SiShopify,
  SiStripe,
  SiWoocommerce,
} from "react-icons/si";

export const metadata = {
  title: "E-Commerce Development Services | herdoydev",
  description:
    "Professional e-commerce solutions with modern technologies. We build high-converting online stores with seamless checkout experiences.",
  keywords: [
    "e-commerce development",
    "online store development",
    "shopify development",
    "e-commerce website",
    "herdoydev e-commerce services",
  ],
  openGraph: {
    title: "E-Commerce Development Services | herdoydev",
    description:
      "Custom online stores built for maximum conversions and sales growth.",
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
    icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
    title: "Custom E-Commerce Development",
    description:
      "Tailored online stores designed to maximize conversions and provide seamless shopping experiences.",
    features: [
      "Mobile-optimized product pages",
      "Custom checkout flows",
      "Inventory management",
      "Payment gateway integration",
    ],
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Platform Migration",
    description:
      "Seamless transition to a better e-commerce platform without losing data or SEO rankings.",
    features: [
      "Data migration strategy",
      "URL redirect mapping",
      "Theme customization",
      "Performance optimization",
    ],
  },
  {
    icon: <Box className="h-8 w-8 text-blue-600" />,
    title: "Headless E-Commerce",
    description:
      "Modern architecture for blazing-fast storefronts with CMS flexibility.",
    features: [
      "API-first architecture",
      "Omnichannel capabilities",
      "Progressive Web App (PWA)",
      "Custom CMS integration",
    ],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: "Conversion Optimization",
    description:
      "Data-driven improvements to boost your store's sales performance.",
    features: [
      "A/B testing implementation",
      "Checkout funnel analysis",
      "UX/UI improvements",
      "Shopping cart recovery",
    ],
  },
];

const technologies = [
  { name: "Shopify", icon: SiShopify },
  { name: "WooCommerce", icon: SiWoocommerce },
  { name: "BigCommerce", icon: SiBigcommerce },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Stripe", icon: SiStripe },
];

const processSteps = [
  {
    step: "01",
    title: "Strategy",
    description: "Understanding your products, customers, and business goals",
  },
  {
    step: "02",
    title: "Design",
    description: "Creating intuitive shopping experiences that convert",
  },
  {
    step: "03",
    title: "Development",
    description: "Building with security and scalability in mind",
  },
  {
    step: "04",
    title: "Integration",
    description: "Connecting payment, shipping, and inventory systems",
  },
  {
    step: "05",
    title: "Launch",
    description: "Going live with performance monitoring",
  },
];

export default function ECommercePage() {
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
                E-Commerce Solutions
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                E-Commerce Development That Drives Sales
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We build high-converting online stores with seamless checkout
                experiences, robust inventory management, and scalable
                architectures.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">See E-Commerce Examples</Link>
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
                Our E-Commerce Services
              </h2>
              <p className="text-lg text-gray-600">
                End-to-end solutions to launch and grow your online store
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
                Our E-Commerce Technology Stack
              </h2>
              <p className="text-lg text-gray-600">
                Platforms and tools we use to build secure, scalable stores
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm w-24 h-24 flex items-center justify-center">
                      <Icon className="text-5xl text-primary" />
                    </div>
                    <span className="mt-3 text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <ShieldCheck className="h-12 w-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Security First Approach
                  </h3>
                  <p className="text-gray-600">
                    We implement PCI compliance, SSL certificates, fraud
                    prevention, and regular security audits to protect your
                    business and customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our E-Commerce Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven methodology to deliver successful online stores
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
                    src="/projects/portfolio1.jpeg"
                    alt="E-commerce case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl font-bold mb-4">
                    Fashion Boutique E-Commerce
                  </h2>
                  <p className="text-gray-600 mb-6">
                    How we helped a boutique fashion brand increase online sales
                    by 220% with a complete store redesign and conversion
                    optimization.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">220%</p>
                      <p className="text-sm text-gray-600">Sales increase</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">42%</p>
                      <p className="text-sm text-gray-600">
                        Lower cart abandonment
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">3.2x</p>
                      <p className="text-sm text-gray-600">
                        Mobile conversion rate
                      </p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/case-studies/fashion-boutique-ecommerce">
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
                &quot;After struggling with our old platform, herdoydev
                transformed our online store. In just 3 months, we saw a 150%
                increase in revenue with lower operational costs. Their
                expertise in e-commerce is unmatched.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-600">Sarah Johnson</div>
                <div className="text-gray-600">Founder, LuxeHome Decor</div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Grow Your Online Sales?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build or optimize your e-commerce
              store for maximum conversions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Start Your Project Today</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
