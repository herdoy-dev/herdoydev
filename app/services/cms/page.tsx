import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import {
  Database,
  LayoutTemplate,
  PenTool,
  RefreshCw,
  Users,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CMS Development Services | herdoydev",
  description:
    "Professional CMS development and customization. We build content management systems that empower your team to manage digital content effortlessly.",
  keywords: [
    "CMS development",
    "custom CMS",
    "WordPress development",
    "headless CMS",
    "content management system",
    "herdoydev CMS services",
  ],
  openGraph: {
    title: "CMS Development Services | herdoydev",
    description:
      "Tailored content management solutions for your digital content needs.",
    url: "https://herdoydev.com/services/cms-development",
    images: [
      {
        url: "https://herdoydev.com/og-cms-development.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev CMS Development Services",
      },
    ],
  },
};

const services = [
  {
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    title: "Custom CMS Development",
    description:
      "Tailored content management systems designed specifically for your content workflows.",
    features: [
      "Custom content types & fields",
      "Role-based permissions",
      "Workflow management",
      "API integrations",
    ],
  },
  {
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    title: "WordPress Development",
    description:
      "Custom themes, plugins, and optimizations for the world's most popular CMS.",
    features: [
      "Custom theme development",
      "Plugin customization",
      "Gutenberg block development",
      "Performance optimization",
    ],
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: "Headless CMS Solutions",
    description: "Modern architecture separating content from presentation.",
    features: [
      "API-first content delivery",
      "Omnichannel publishing",
      "Developer-friendly interfaces",
      "Future-proof architecture",
    ],
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
    title: "CMS Migration",
    description: "Seamless transition between content management systems.",
    features: [
      "Content mapping strategy",
      "URL redirect planning",
      "Preserved SEO value",
      "Editor training",
    ],
  },
];

type Tech = { name: string; iconName: string; color?: string };

const technologies: Tech[] = [
  { name: "WordPress", iconName: "mdi:wordpress", color: "#21759b" },
  { name: "Strapi", iconName: "simple-icons:strapi", color: "#2F855A" },
  { name: "Sanity", iconName: "simple-icons:sanity", color: "#FF0000" },
  { name: "Contentful", iconName: "simple-icons:contentful", color: "#00CCFF" },
  { name: "Drupal", iconName: "mdi:drupal", color: "#0678BE" },
  { name: "Next.js", iconName: "simple-icons:nextdotjs", color: "#000000" },
];

const processSteps = [
  {
    step: "01",
    title: "Content Audit",
    description: "Analyzing your content structure and editorial needs",
  },
  {
    step: "02",
    title: "CMS Selection",
    description: "Recommending the ideal platform for your requirements",
  },
  {
    step: "03",
    title: "Customization",
    description: "Tailoring the CMS to your workflows",
  },
  {
    step: "04",
    title: "Editor Training",
    description: "Ensuring your team can use the system effectively",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Going live with ongoing maintenance",
  },
];

export default function CMSDevelopmentPage() {
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
                Content Management
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                CMS Development Services
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We build and customize content management systems that empower
                your team to create, manage, and publish content with ease.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your CMS Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">See CMS Examples</Link>
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
                Our CMS Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions for all your content management needs
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
                Our CMS Technology Stack
              </h2>
              <p className="text-lg text-gray-600">
                Platforms and tools we use to build powerful content management
                solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm w-24 h-24 flex items-center justify-center">
                    <Icon
                      icon={tech.iconName}
                      width="64"
                      height="64"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Users className="h-12 w-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Editor-First Approach
                  </h3>
                  <p className="text-gray-600">
                    We design CMS interfaces with content editors in mind,
                    creating intuitive dashboards that reduce training time and
                    increase productivity. Our solutions include custom
                    workflows, preview functionality, and collaborative editing
                    features.
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
                Our CMS Implementation Process
              </h2>
              <p className="text-lg text-gray-600">
                A content-focused approach to delivering successful CMS projects
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
                    src="/projects/portfolio3.jpeg"
                    alt="CMS development case study"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl font-bold mb-4">
                    University Website Redesign
                  </h2>
                  <p className="text-gray-600 mb-6">
                    How we implemented a headless CMS for a major university,
                    enabling 200+ content editors to manage thousands of pages
                    while maintaining brand consistency and accessibility
                    standards.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Trained editors</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">75%</p>
                      <p className="text-sm text-gray-600">
                        Faster content updates
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">100%</p>
                      <p className="text-sm text-gray-600">WCAG compliance</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/case-studies/university-cms">
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
                &quot;The CMS herdoydev built transformed how our marketing team
                works. What used to take days now takes hours, and our content
                consistency across departments has improved dramatically.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-600">Jennifer Park</div>
                <div className="text-gray-600">
                  Digital Director, Global University
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Transform Your Content Management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build a CMS that fits your
              team&apos;s workflow and content strategy.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Start Your CMS Project</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
