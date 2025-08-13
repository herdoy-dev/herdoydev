import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import ThemedIcon from "@/components/themed-icon";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    icon: <LayoutTemplate />,
    title: "Custom CMS Development",
    description:
      "Tailored content management systems designed specifically for your content workflows.",
    features: [
      "Custom content types & fields",
      "Role-based permissions",
      "Workflow management",
      "API integrations",
    ],
    cta: "Get Custom CMS",
    href: "/contact?service=custom-cms",
  },
  {
    icon: <PenTool />,
    title: "WordPress Development",
    description:
      "Custom themes, plugins, and optimizations for the world's most popular CMS.",
    features: [
      "Custom theme development",
      "Plugin customization",
      "Gutenberg block development",
      "Performance optimization",
    ],
    cta: "Build WordPress Site",
    href: "/contact?service=wordpress",
  },
  {
    icon: <Database />,
    title: "Headless CMS Solutions",
    description: "Modern architecture separating content from presentation.",
    features: [
      "API-first content delivery",
      "Omnichannel publishing",
      "Developer-friendly interfaces",
      "Future-proof architecture",
    ],
    cta: "Go Headless",
    href: "/contact?service=headless-cms",
  },
  {
    icon: <RefreshCw />,
    title: "CMS Migration",
    description: "Seamless transition between content management systems.",
    features: [
      "Content mapping strategy",
      "URL redirect planning",
      "Preserved SEO value",
      "Editor training",
    ],
    cta: "Plan Migration",
    href: "/contact?service=cms-migration",
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
    icon: "🔍",
  },
  {
    step: "02",
    title: "CMS Selection",
    description: "Recommending the ideal platform for your requirements",
    icon: "📋",
  },
  {
    step: "03",
    title: "Customization",
    description: "Tailoring the CMS to your workflows",
    icon: "🛠️",
  },
  {
    step: "04",
    title: "Editor Training",
    description: "Ensuring your team can use the system effectively",
    icon: "👩‍💻",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Going live with ongoing maintenance",
    icon: "🚀",
  },
];

export default function CMSDevelopmentPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link
          rel="canonical"
          href="https://herdoydev.com/services/cms-development"
        />
      </Head>

      <main>
        <PageHeaderBox>
          <div className="mx-auto max-w-4xl text-center">
            <SectionButton>Content Management Experts</SectionButton>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block">Professional</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                CMS Development Services
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              We build and customize content management systems that empower
              your team to create, manage, and publish content with{" "}
              <strong>75% more efficiency</strong>.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="animate-pulse text-gray-200">
                <Link href="/contact">Get Free CMS Consultation</Link>
              </Button>
            </div>
          </div>
        </PageHeaderBox>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">CMS</span> Services
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions for all your content management needs
                across industries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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
                Our <span className="text-blue-600">Technology</span> Stack
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Platforms and tools we use to build powerful content management
                solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="bg-card p-4 rounded-lg shadow-sm w-24 h-24 flex items-center justify-center">
                    <Icon
                      icon={tech.iconName}
                      width="64"
                      height="64"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-card rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <ThemedIcon className="bg-primary">
                  <Users className="h-6 w-6" />
                </ThemedIcon>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Editor-First Approach
                  </h3>
                  <p className="text-gray-400">
                    We design CMS interfaces with content editors in mind,
                    creating intuitive dashboards that reduce training time by{" "}
                    <strong>60%</strong> and increase productivity. Our
                    solutions include custom workflows, preview functionality,
                    and collaborative editing features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-blue-600">5-Stage</span> Process
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Content-focused approach to delivering successful CMS projects
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
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
                    alt="CMS development case study"
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
                    University Website Redesign
                  </h2>
                  <p className="text-gray-400 mb-6">
                    How we implemented a headless CMS for a major university,
                    enabling 200+ content editors to manage thousands of pages
                    while maintaining brand consistency and accessibility
                    standards.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-400">200+</p>
                      <p className="text-sm text-gray-400">Trained editors</p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-400">75%</p>
                      <p className="text-sm text-gray-400">
                        Faster content updates
                      </p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-400">100%</p>
                      <p className="text-sm text-gray-400">WCAG compliance</p>
                    </div>
                  </div>
                  <Button asChild className="text-gray-200">
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
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <blockquote>
              <p className="text-xl italic text-gray-400 mb-6">
                &quot;The CMS herdoydev built transformed how our marketing team
                works. What used to take days now takes hours, and our content
                consistency across departments has improved dramatically.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-400">Jennifer Park</div>
                <div className="text-gray-500">
                  Digital Director, Global University
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Transform Your Content Management?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can build a CMS that fits your
              team&apos;s workflow and content strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="border bg-transparent hover:bg-transparent !text-primary border-primary"
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
