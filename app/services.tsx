import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Code,
  Cpu,
  Globe,
  LayoutTemplate,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";

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
      "Ongoing maintenance",
    ],
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
      "User authentication",
    ],
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
      "Editor experience",
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description:
      "Make your existing website faster, more efficient, and higher converting.",
    features: [
      "Lighthouse audits",
      "Loading speed optimization",
      "Core Web Vitals",
      "Hosting consultation",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Web Development Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We deliver end-to-end digital solutions designed to meet your
            business objectives and exceed user expectations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 flex-shrink-0 text-blue-500 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services" className="group">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
