import Head from "next/head";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Portfolio | herdoydev - Web Development Projects",
  description:
    "Explore our portfolio of custom websites, e-commerce solutions, and web applications. See how we've helped clients achieve their digital goals.",
  keywords: [
    "web development portfolio",
    "website design examples",
    "e-commerce case studies",
    "web application projects",
    "herdoydev work samples",
  ],
  openGraph: {
    title: "Our Portfolio | herdoydev - Web Development Projects",
    description:
      "Showcase of our premium web development work for clients across industries.",
    url: "https://herdoydev.com/portfolio",
    images: [
      {
        url: "https://herdoydev.com/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Portfolio",
      },
    ],
  },
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with custom checkout flow and inventory management.",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
    image: "/projects/portfolio1.jpeg",
    link: "https://example-ecommerce.com",
    category: "E-Commerce",
    results: [
      "140% increase in conversion rate",
      "35% faster load times",
      "Integrated with 3 payment gateways",
    ],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Data-rich analytics dashboard with real-time updates and custom visualizations.",
    tags: ["React", "Node.js", "D3.js"],
    image: "/projects/portfolio2.jpeg",
    link: "https://example-saas.com",
    category: "Web Application",
    results: [
      "Handles 50,000+ monthly users",
      "Real-time data processing",
      "Custom reporting tools",
    ],
  },
  {
    id: 3,
    title: "Corporate Website",
    description:
      "Modern, content-driven website with CMS integration for easy updates.",
    tags: ["Next.js", "Contentful", "Framer Motion"],
    image: "/projects/portfolio3.jpeg",
    link: "https://example-corporate.com",
    category: "Website",
    results: [
      "95+ Lighthouse scores",
      "3x faster content updates",
      "Multilingual support",
    ],
  },
  {
    id: 4,
    title: "Mobile Web App",
    description:
      "Progressive web app with offline capabilities and push notifications.",
    tags: ["PWA", "Firebase", "Service Workers"],
    image: "/projects/portfolio1.jpeg",
    link: "https://example-mobileapp.com",
    category: "Mobile",
    results: [
      "60% engagement increase",
      "Works offline",
      "App-like experience",
    ],
  },
  {
    id: 5,
    title: "Headless CMS Implementation",
    description:
      "Decoupled frontend with Strapi CMS backend for omnichannel content delivery.",
    tags: ["Strapi", "GraphQL", "React"],
    image: "/projects/portfolio2.jpeg",
    link: "https://example-headless.com",
    category: "Architecture",
    results: [
      "80% faster content publishing",
      "Multi-channel distribution",
      "Developer-friendly API",
    ],
  },
  {
    id: 6,
    title: "Web Performance Overhaul",
    description:
      "Optimized existing website achieving 95+ Lighthouse scores across all metrics.",
    tags: ["Performance", "Optimization", "Core Web Vitals"],
    image: "/projects/portfolio3.jpeg",
    link: "https://example-optimized.com",
    category: "Optimization",
    results: [
      "From 45 to 95+ Lighthouse score",
      "2.5s faster load time",
      "30% lower bounce rate",
    ],
  },
];

const categories = [
  "All Projects",
  "E-Commerce",
  "Web Application",
  "Website",
  "Mobile",
  "Architecture",
  "Optimization",
];

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </Head>

      <main>
        {/* Portfolio Hero */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Our Work
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Projects We&apos;re Proud Of
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Explore our case studies to see how we&apos;ve helped businesses
                achieve their digital goals.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
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

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <ul className="text-gray-200 mb-4 space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-4 w-4 text-green-300 mr-2 mt-1 flex-shrink-0"
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
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="link"
                        className="p-0 text-white hover:text-blue-300"
                        asChild
                      >
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener"
                        >
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-sm font-medium text-blue-600 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link href="/contact" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Highlight */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <blockquote className="text-center">
              <p className="text-xl italic text-gray-700 mb-6">
                &quot;herdoydev transformed our online presence with a website
                that exceeded our expectations. Their technical expertise and
                attention to detail resulted in a 140% increase in leads within
                the first three months.&quot;
              </p>
              <footer className="font-medium">
                <div className="text-blue-600">Sarah Johnson</div>
                <div className="text-gray-600">
                  Marketing Director, TechCorp
                </div>
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  );
}
