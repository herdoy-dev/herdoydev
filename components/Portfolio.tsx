import { cn } from "@/lib/utils";
import { Building, Calendar, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

function Portfolio() {
  const projects = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Online Marketplace",
      thumbnail: "/portfolio-1.png",
      description:
        "A mobile-friendly marketplace for second-hand fashion with Stripe checkout and AI-powered recommendations.",
      category: "E-commerce",
      tags: ["React", "Next.js", "Stripe", "AI Recommendations"],
      link: "https://herdoydev.xyz",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Freelancing Platform",
      thumbnail: "/portfolio-2.png",
      description:
        "A platform connecting freelancers and clients with secure payments, profiles, and SEO-optimized pages.",
      category: "Business",
      tags: ["Web Design", "SEO", "Content Management"],
      link: "http://findtalentz.com",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Crypto Exchange Platform",
      thumbnail: "/portfolio-3.png",
      description:
        "AI-driven crypto platform with real-time rates, automation, and smart portfolio management.",
      category: "AI Automation",
      tags: ["AI Integration", "Automation", "Real-time"],
      link: "https://autorun.site",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Dog Training Company",
      thumbnail: "/portfolio-4.png",
      description:
        "Modern portfolio site showcasing services, testimonials, and professional branding for a dog trainer.",
      category: "Portfolio",
      tags: ["Modern Design", "Performance", "Branding"],
      link: "https://samivy.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground">
            Here are some of the projects I've worked on, helping businesses
            bring their ideas to life
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: `url(${project.thumbnail})`,
                backgroundSize: "cover",
              }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden bg-black/75">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-white leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "rounded-full"
                      )}
                    >
                      Live Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
