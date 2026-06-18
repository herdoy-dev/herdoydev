import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { gradientArt } from "@/constants/projects";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-cursor="hover"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-500 group-hover:scale-105",
            gradientArt[post.coverImage]
          )}
        />
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((t) => (
            <span key={t} className="rounded-full bg-brand-500/15 px-2.5 py-0.5 text-[11px] font-medium text-brand-200">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} min read
            <ArrowUpRight className="h-3.5 w-3.5 text-brand-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
