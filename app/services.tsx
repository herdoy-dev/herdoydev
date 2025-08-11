import ArrowButton from "@/components/arrow-button";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    title: "Custom Website Development",
    description:
      "Bespoke websites engineered for 40% faster load times and 30% higher conversions using React/Next.js.",
    features: [
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "CMS integration (WordPress, Sanity)",
      "Ongoing performance monitoring",
    ],
    cta: "Get a custom quote",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-blue-400" />,
    title: "E-Commerce Development",
    description:
      "High-converting stores averaging 3.2x industry-standard conversion rates.",
    features: [
      "Shopify Plus & Headless commerce",
      "Checkout optimization (90% success rate)",
      "PIM integration",
      "Post-launch revenue analytics",
    ],
    cta: "Boost online sales",
  },
  {
    icon: <Code className="h-8 w-8 text-blue-400" />,
    title: "Web Applications",
    description:
      "Secure, scalable apps handling 10,000+ daily users with Node.js backends.",
    features: [
      "React/Next.js frontends",
      "Real-time data dashboards",
      "Enterprise-grade security",
      "CI/CD pipelines",
    ],
    cta: "Build your app",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-400" />,
    title: "Progressive Web Apps",
    description:
      "Mobile experiences with 85% higher engagement than traditional sites.",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-store like UX",
      "60fps animations",
    ],
    cta: "Go mobile-first",
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-400" />,
    title: "Headless CMS Solutions",
    description:
      "Future-proof content infrastructure with 50% faster publishing workflows.",
    features: [
      "Contentful/Strapi implementations",
      "Omnichannel content delivery",
      "Developer-friendly GraphQL APIs",
      "AI-powered content suggestions",
    ],
    cta: "Modernize your CMS",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    title: "Performance Optimization",
    description: "Websites scoring 95+ Lighthouse points within 30 days.",
    features: [
      "Core Web Vitals fixes",
      "CDN configuration",
      "Database optimization",
      "Edge computing setups",
    ],
    cta: "Speed up your site",
  },
];

export function Services() {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-gray-100">
            <span className="block">Web Development Services That</span>
            <span className="text-blue-400"> Drive Business Growth</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Proven solutions used by SaaS companies, e-commerce brands, and
            enterprises to acquire more customers and reduce operational costs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 bg-gray-800/40 border border-gray-700 shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-blue-500/10 p-3 group-hover:bg-blue-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-100">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 flex-shrink-0 text-blue-400 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  size="sm"
                  className="px-0 text-blue-400 hover:text-blue-300"
                  asChild
                >
                  <Link
                    href={`/services#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {service.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ArrowButton label="Get Your Free Tech Audit" href="/contact" />
        </div>
      </div>
    </section>
  );
}
