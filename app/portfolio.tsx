import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Modern Agency Website",
    description: "A sleek agency site built with Next.js and Tailwind CSS.",
    image: "/portfolio1.jpeg",
    link: "#",
  },
  {
    title: "E-commerce Store",
    description: "Shopify store with custom UI, payment, and cart integration.",
    image: "/portfolio2.jpeg",
    link: "#",
  },
  {
    title: "Startup Landing Page",
    description: "SEO-focused landing page for a SaaS product.",
    image: "/portfolio3.jpeg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A few selected projects that highlight our experience and
            craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <Link href={project.link}>
                  <Button variant="outline" size="sm">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
