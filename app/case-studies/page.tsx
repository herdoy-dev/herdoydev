import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Case Studies | herdoydev - Web Development Success Stories",
  description:
    "Explore our detailed case studies showcasing how we've helped clients achieve their digital goals through custom web solutions.",
  keywords: [
    "web development case studies",
    "website redesign success stories",
    "e-commerce development results",
    "web app case studies",
    "herdoydev portfolio",
  ],
  openGraph: {
    title: "Case Studies | herdoydev - Web Development Success Stories",
    description:
      "Detailed examples of our web development projects and the results we achieved for clients.",
    url: "https://herdoydev.com/case-studies",
    images: [
      {
        url: "https://herdoydev.com/og-case-studies.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Case Studies",
      },
    ],
  },
};

const caseStudies = [
  {
    id: 1,
    client: "TechCorp",
    title: "Enterprise SaaS Platform Redesign",
    challenge:
      "Outdated interface causing low user adoption and high churn rates.",
    solution:
      "Complete UI/UX overhaul with React and performance optimization.",
    results: [
      { metric: "230%", description: "Increase in user engagement" },
      { metric: "40%", description: "Reduction in bounce rate" },
      { metric: "3.2s", description: "Faster average load time" },
    ],
    image: "/about/team-working.jpeg",
    link: "/case-studies/techcorp-saas-redesign",
    category: "Web Application",
  },
  {
    id: 2,
    client: "StyleHaus",
    title: "E-Commerce Platform Migration",
    challenge: "Legacy platform couldn't handle holiday traffic spikes.",
    solution:
      "Headless Shopify Plus implementation with custom React frontend.",
    results: [
      { metric: "140%", description: "Higher conversion rate" },
      { metric: "99.9%", description: "Uptime during Black Friday" },
      { metric: "35%", description: "Reduction in cart abandonment" },
    ],
    image: "/about/team-working.jpeg",
    link: "/case-studies/stylehaus-ecommerce",
    category: "E-Commerce",
  },
  {
    id: 3,
    client: "Finova",
    title: "Financial Dashboard Web App",
    challenge: "Spreadsheet-based reporting causing errors and inefficiencies.",
    solution: "Custom web application with real-time data visualization.",
    results: [
      { metric: "8h", description: "Time saved weekly per analyst" },
      { metric: "50+", description: "Automated reports" },
      { metric: "100%", description: "Data accuracy achieved" },
    ],
    image: "/about/team-working.jpeg",
    link: "/case-studies/finova-dashboard",
    category: "Web Application",
  },
  {
    id: 4,
    client: "EduLearn",
    title: "Learning Management System",
    challenge:
      "Inability to support growing student base with existing platform.",
    solution:
      "Custom LMS with Next.js, video streaming, and progress tracking.",
    results: [
      { metric: "3x", description: "More concurrent users supported" },
      { metric: "78%", description: "Increase in course completion" },
      { metric: "4.9/5", description: "Average user satisfaction" },
    ],
    image: "/about/team-working.jpeg",
    link: "/case-studies/edulearn-lms",
    category: "Education",
  },
];

const categories = [
  "All Industries",
  "E-Commerce",
  "Web Application",
  "SaaS",
  "Education",
  "Finance",
];

export default function CaseStudiesPage() {
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
                Success Stories
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Proven Results for Our Clients
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Explore how we&apos;ve helped businesses solve complex
                challenges and achieve measurable success.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm font-medium capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Case Studies */}
            <div className="grid gap-12">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="grid gap-8 rounded-xl border border-gray-200 overflow-hidden md:grid-cols-2"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={caseStudy.image}
                      alt={`${caseStudy.client} - ${caseStudy.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-sm font-medium text-blue-600 mb-2">
                      {caseStudy.category}
                    </span>
                    <h2 className="text-2xl font-bold mb-2">
                      {caseStudy.client}: {caseStudy.title}
                    </h2>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        The Challenge
                      </h3>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Our Solution
                      </h3>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        The Results
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-3">
                        {caseStudy.results.map((result, index) => (
                          <div
                            key={index}
                            className="bg-blue-50 p-4 rounded-lg"
                          >
                            <p className="text-2xl font-bold text-blue-600">
                              {result.metric}
                            </p>
                            <p className="text-sm text-gray-600">
                              {result.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild>
                      <Link href={caseStudy.link}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to See Similar Results?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help your business achieve its
                digital goals.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
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
