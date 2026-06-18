import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand";
import { cn } from "@/lib/utils";
import { gradientArt } from "@/constants/projects";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-cursor="hover"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/20"
    >
      {/* thumbnail art */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-500 group-hover:scale-105",
            gradientArt[project.thumbnail]
          )}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-ink-950/30" />
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 font-mono text-xs text-white/70">
          {project.year}
        </span>

        {/* hover overlay actions */}
        <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-2">
            {project.liveUrl && (
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur">
                <ExternalLink className="h-4 w-4 text-white" />
              </span>
            )}
            {project.githubUrl && (
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur">
                <GithubIcon className="h-4 w-4 text-white" />
              </span>
            )}
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </span>
        </div>
      </div>

      {/* meta */}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.client}</span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-2 py-0.5 font-mono text-[11px] text-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
