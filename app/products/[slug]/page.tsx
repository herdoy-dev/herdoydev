import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CTA } from "@/components/sections/cta";
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
  if (!project) return { title: "Not found" };

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `/products/${project.slug}` },
    openGraph: {
      title: `${project.name} · herdoydev`,
      description: project.description,
      url: `/products/${project.slug}`,
      images: project.logo ? [project.logo] : undefined,
    },
  };
}

const statusDot: Record<string, string> = {
  Live: "bg-emerald-500",
  Beta: "bg-amber-500",
  "In Development": "bg-blue-500",
  "Coming Soon": "bg-muted-foreground",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const index = projects.findIndex((p) => p.slug === slug) + 1;

  return (
    <>
      <section className="relative pt-32 md:pt-44 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          {/* Edge label */}
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <Link
              href="/products"
              className="edge-label inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-3" />
              Catalogue
            </Link>
            <p className="edge-label">
              No.{String(index).padStart(3, "0")} / {projects.length} —{" "}
              {project.name}
            </p>
            <p className="edge-label inline-flex items-center gap-1.5">
              <span className={`size-1.5 rounded-full ${statusDot[project.status] ?? "bg-muted-foreground"}`} />
              {project.status}
            </p>
          </div>

          {/* Mobile back */}
          <Link
            href="/products"
            className="md:hidden inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="size-4" />
            Catalogue
          </Link>

          {/* Title spread */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— {project.category}</p>
              <p className="mono num text-[11px] tracking-widest text-muted-foreground mt-2">
                Slug · {project.slug}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,10vw,9rem)] leading-[0.88] tracking-tight">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl md:text-2xl text-foreground/80 leading-snug serif-italic">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Body grid */}
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* Visual */}
            <div className="col-span-12 md:col-span-5">
              <div className="aspect-square w-full hairline rounded-sm overflow-hidden bg-muted/30 flex items-center justify-center">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`${project.name} mark`}
                    width={640}
                    height={640}
                    className="size-full object-cover"
                  />
                ) : (
                  <span className="serif-italic text-7xl text-foreground/20">
                    {project.name[0]}
                  </span>
                )}
              </div>

              {/* Meta table */}
              <dl className="mt-6 hairline rounded-sm divide-y divide-border">
                <Row label="Category" value={project.category} />
                <Row label="Status" value={project.status} dot={statusDot[project.status]} />
                <Row label="Stack" value={project.stack.join(" · ")} />
              </dl>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-7 md:pl-2">
              <p className="eyebrow mb-4">/ Brief</p>
              <p className="serif text-2xl md:text-3xl leading-[1.25] tracking-tight max-w-[55ch]">
                {project.description}
              </p>

              {/* Stack chips */}
              <div className="mt-10">
                <p className="eyebrow mb-4">/ Toolkit</p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="mono text-[11px] tracking-wider uppercase px-2 py-1 hairline rounded-sm text-foreground/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links if present */}
              {project.links && project.links.length > 0 && (
                <div className="mt-10">
                  <p className="eyebrow mb-4">/ External</p>
                  <ul className="space-y-2">
                    {project.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm font-medium link-line"
                        >
                          {l.label}
                          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Prev / next */}
          {(prev || next) && (
            <nav className="mt-24 md:mt-32 hairline-t pt-8 grid grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/products/${prev.slug}`}
                  className="group block hairline rounded-sm p-5 hover:bg-muted/40 transition-colors"
                >
                  <p className="eyebrow mb-2">← Previous</p>
                  <p className="serif text-2xl tracking-tight">{prev.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {prev.tagline}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/products/${next.slug}`}
                  className="group block hairline rounded-sm p-5 hover:bg-muted/40 transition-colors text-right"
                >
                  <p className="eyebrow mb-2">Next →</p>
                  <p className="serif text-2xl tracking-tight">{next.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {next.tagline}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}

function Row({
  label,
  value,
  dot,
}: {
  label: string;
  value: string;
  dot?: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-3">
      <dt className="mono text-[11px] tracking-widest uppercase text-muted-foreground self-center">
        {label}
      </dt>
      <dd className="col-span-2 text-sm self-center inline-flex items-center gap-2">
        {dot && <span className={`size-1.5 rounded-full ${dot}`} />}
        {value}
      </dd>
    </div>
  );
}
