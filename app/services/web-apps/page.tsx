import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Database, Lock, Server, Zap, GitBranch } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Web Application Development | herdoydev",
  description:
    "Build powerful, scalable web applications tailored to your business needs. From SaaS platforms to enterprise solutions, we deliver robust web apps.",
  keywords: [
    "web application development",
    "custom web apps",
    "SaaS development",
    "enterprise web applications",
    "herdoydev web apps",
  ],
  openGraph: {
    title: "Custom Web Application Development | herdoydev",
    description:
      "Tailored web applications built for performance and scalability.",
    url: "https://herdoydev.com/services/web-applications",
    images: [
      {
        url: "https://herdoydev.com/og-web-applications.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Web Application Services",
      },
    ],
  },
};

const services = [
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: "Custom Web Applications",
    description:
      "Tailored solutions designed to automate processes and solve unique business challenges.",
    features: [
      "Complex workflow automation",
      "Role-based access control",
      "Real-time data processing",
      "Third-party API integrations",
    ],
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: "Enterprise Applications",
    description:
      "Scalable systems for large organizations with complex requirements.",
    features: [
      "Microservices architecture",
      "Data security compliance",
      "High availability systems",
      "Legacy system modernization",
    ],
  },
  {
    icon: <GitBranch className="h-8 w-8 text-blue-600" />,
    title: "SaaS Development",
    description: "Cloud-based software solutions with subscription models.",
    features: [
      "Multi-tenancy architecture",
      "Subscription billing integration",
      "White-labeling options",
      "Scalable infrastructure",
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description: "Make your existing applications faster and more efficient.",
    features: [
      "Database query optimization",
      "Load testing & profiling",
      "Caching strategies",
      "Code refactoring",
    ],
  },
];

const technologies = [
  { name: "React", logo: "/tech/react.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
  { name: "MongoDB", logo: "/tech/mongodb.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "Docker", logo: "/tech/docker.svg" },
  { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "Deep dive into your business processes and needs",
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Planning scalable and maintainable system architecture",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with iterative deliveries",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Rigorous testing at all levels",
  },
  {
    step: "05",
    title: "Deployment & Maintenance",
    description: "CI/CD pipeline setup and ongoing support",
  },
];

export default function WebApplicationsPage() {
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
                Web Applications
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Custom Web Application Development
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We build powerful, data-driven web applications that automate
                workflows, streamline operations, and drive business growth.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">View Application Portfolio</Link>
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
                Our Web Application Services
              </h2>
              <p className="text-lg text-gray-600">
                End-to-end solutions for complex business challenges
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
                      <Link href="/contact">Get Details</Link>
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
                Modern technologies for robust application development
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
                  <Server className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Backend Expertise</h3>
                </div>
                <p className="text-gray-600">
                  We build robust APIs and microservices with Node.js, Python,
                  and .NET, ensuring your application can handle complex
                  business logic and scale with your needs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Security Focus</h3>
                </div>
                <p className="text-gray-600">
                  Enterprise-grade security including OAuth 2.0, data
                  encryption, penetration testing, and compliance with industry
                  standards like GDPR and HIPAA where required.
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
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600">
                A structured approach to delivering complex applications
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
                    src="/case-studies/web-app-showcase.jpg"
                    alt="Web application case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl font-bold mb-4">
                    Enterprise Workflow Automation
                  </h2>
                  <p className="text-gray-600 mb-6">
                    How we built a custom web application that automated manual
                    processes for a manufacturing company, reducing operational
                    costs by 40% and processing time by 75%.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">75%</p>
                      <p className="text-sm text-gray-600">Faster processing</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">40%</p>
                      <p className="text-sm text-gray-600">Cost reduction</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">10x</p>
                      <p className="text-sm text-gray-600">Scalability</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/case-studies/workflow-automation">
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
                &quot;herdoydev transformed our manual processes into an
                automated web application that&apos;s become the backbone of our
                operations. Their team understood our complex requirements and
                delivered a solution that exceeded our expectations.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-600">David Rodriguez</div>
                <div className="text-gray-600">
                  COO, Industrial Solutions Inc.
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Need a Custom Web Application?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build a solution tailored to your
              specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-blue-700"
              >
                <Link href="/process">Our Development Process</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
