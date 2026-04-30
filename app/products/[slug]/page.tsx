import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { MotionDiv } from "@/components/motion-wrapper";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `/products/${project.slug}` },
    openGraph: {
      title: `${project.name} | herdoydev`,
      description: project.description,
      url: `/products/${project.slug}`,
      images: project.logo ? [project.logo] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MotionDiv animation="fade-up">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              All products
            </Link>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              {project.logo ? (
                <div className="size-20 sm:size-24 rounded-2xl overflow-hidden bg-muted shrink-0">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={96}
                    height={96}
                    className="size-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`size-20 sm:size-24 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}
                >
                  <span className="text-3xl font-bold text-white">
                    {project.name[0]}
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={
                      project.status === "Live"
                        ? "gradient-bg border-0 text-white text-xs"
                        : "text-xs"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  {project.name}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">
                  {project.tagline}
                </p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv animation="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 border-border/50">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  About this project
                </h2>
                <p className="text-base text-foreground/90 leading-relaxed">
                  {project.description}
                </p>

                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <Button key={link.href} asChild size="sm" variant="outline">
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                          <ArrowRight className="ml-1.5 size-3.5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-border/50 h-fit">
              <CardContent className="p-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-md bg-muted/60 text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Category
                  </p>
                  <p className="text-sm">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Status
                  </p>
                  <p className="text-sm">{project.status}</p>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          {(prev || next) && (
            <MotionDiv
              animation="fade-up"
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {prev && (
                <Link
                  href={`/products/${prev.slug}`}
                  className="group flex items-center gap-3 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all"
                >
                  <ArrowLeft className="size-4 text-muted-foreground group-hover:text-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Previous</p>
                    <p className="text-sm font-semibold">{prev.name}</p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/products/${next.slug}`}
                  className="group flex items-center justify-end gap-3 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all sm:text-right"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">Next</p>
                    <p className="text-sm font-semibold">{next.name}</p>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-foreground" />
                </Link>
              )}
            </MotionDiv>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
