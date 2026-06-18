import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Zap } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup } from "@/components/effects/reveal";
import { GithubIcon } from "@/components/icons/brand";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { projects, getProject, gradientArt } from "@/constants/projects";
import { pageMetadata, projectSchema, breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    keywords: project.technologies,
    image: null, // provided by the route-level opengraph-image
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={[
          projectSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: `/portfolio/${project.slug}` },
          ]),
        ]}
      />

      {/* hero */}
      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b opacity-20 blur-2xl",
            gradientArt[project.thumbnail]
          )}
        />
        <Container className="relative z-10">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{project.category}</Badge>
                <span className="font-mono text-sm text-muted">{project.client} · {project.year}</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                {project.summary}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex gap-3">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live site <ExternalLink className="h-4 w-4" />
                </ButtonLink>
              )}
              {project.githubUrl && (
                <ButtonLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <GithubIcon className="h-4 w-4" /> Code
                </ButtonLink>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* hero art */}
      <Container>
        <Reveal>
          <div
            className={cn(
              "relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br",
              gradientArt[project.thumbnail]
            )}
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 bg-ink-950/20" />
          </div>
        </Reveal>
      </Container>

      {/* results */}
      <Section className="py-16">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {project.results.map((r) => (
              <Reveal as="div" key={r.label}>
                <div className="rounded-2xl border border-white/10 glass-strong p-7 text-center">
                  <div className="font-display text-4xl font-bold tracking-tight text-gradient">
                    {r.value}
                  </div>
                  <p className="mt-2 text-sm text-muted">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* body */}
      <Section className="py-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="flex flex-col gap-12">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight">Overview</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted">{project.overview}</p>
              </Reveal>

              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight">Key features</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  Challenges & solutions
                </h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber/15 text-amber">
                        <Zap className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-relaxed text-muted">{c}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="rounded-2xl border border-white/10 glass-strong p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Technologies
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
                    <Row label="Client" value={project.client} />
                    <Row label="Year" value={project.year} />
                    <Row label="Category" value={project.category} />
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* gallery */}
      <Section className="py-12">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Screenshots</h2>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-3">
            {project.gallery.map((g, i) => (
              <Reveal as="div" key={i}>
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br",
                    gradientArt[g]
                  )}
                >
                  <div className="absolute inset-0 grid-bg opacity-25" />
                  <div className="absolute inset-0 bg-ink-950/25" />
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* next project */}
      <Container>
        <Reveal>
          <Link
            href="/portfolio"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
          >
            <span className="text-muted">Explore more projects</span>
            <span className="flex items-center gap-2 font-display font-medium text-brand-300">
              View all <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      </Container>

      <CTABanner />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-foreground/90">{value}</span>
    </div>
  );
}
