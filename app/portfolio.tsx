import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with custom checkout flow and inventory management.",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
    image: "/projects/portfolio1.jpeg",
    link: "https://example.com",
    category: "E-Commerce",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Data-rich analytics dashboard with real-time updates and custom visualizations.",
    tags: ["React", "Node.js", "D3.js"],
    image: "/projects/portfolio2.jpeg",
    link: "https://example.com",
    category: "Web Application",
  },
  {
    id: 3,
    title: "Corporate Website",
    description:
      "Modern, content-driven website with CMS integration for easy updates.",
    tags: ["Next.js", "Contentful", "Framer Motion"],
    image: "/projects/portfolio3.jpeg",
    link: "https://example.com",
    category: "Website",
  },
  {
    id: 4,
    title: "Mobile Web App",
    description:
      "Progressive web app with offline capabilities and push notifications.",
    tags: ["PWA", "Firebase", "Service Workers"],
    image: "/projects/portfolio1.jpeg",
    link: "https://example.com",
    category: "Mobile",
  },
  {
    id: 5,
    title: "Headless CMS Implementation",
    description:
      "Decoupled frontend with Strapi CMS backend for omnichannel content delivery.",
    tags: ["Strapi", "GraphQL", "React"],
    image: "/projects/portfolio2.jpeg",
    link: "https://example.com",
    category: "Architecture",
  },
  {
    id: 6,
    title: "Web Performance Overhaul",
    description:
      "Optimized existing website achieving 95+ Lighthouse scores across all metrics.",
    tags: ["Performance", "Optimization", "Core Web Vitals"],
    image: "/projects/portfolio3.jpeg",
    link: "https://example.com",
    category: "Optimization",
  },
];

const categories = [
  "All Work",
  "E-Commerce",
  "Web Application",
  "Website",
  "Mobile",
  "Architecture",
  "Optimization",
];

export function Portfolio() {
  return (
    <section className="py-24 bg-gray-50" id="work">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects We&apos;re Proud Of
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our case studies to see how we&apos;ve helped businesses
            achieve their digital goals.
          </p>
        </div>

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
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
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
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-white hover:text-blue-300"
                    asChild
                  >
                    <Link href={project.link} target="_blank" rel="noopener">
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

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/portfolio" className="group">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
