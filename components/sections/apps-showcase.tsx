"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, featuredProjects, type Project } from "@/lib/projects";

type Props = {
  /** When true, render every project. Otherwise show featured set. */
  all?: boolean;
  heading?: ReactNode;
  eyebrow?: string;
  subheading?: string;
};

export function AppsShowcase({
  all = false,
  heading,
  eyebrow = "— 003 / Catalogue",
  subheading,
}: Props) {
  const items: Project[] = all ? projects : featuredProjects;

  return (
    <section className="relative py-24 md:py-36 hairline-t">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              {heading ?? (
                <>
                  Things we&apos;ve <span className="serif-italic">built.</span>
                </>
              )}
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {subheading ??
                (all
                  ? "The full catalogue — products in development, in beta, and in motion. Updated as we ship."
                  : "A small set of in-progress products. Mobile, web, and games — each its own concern.")}
            </p>
          </div>
        </div>

        {/* Editorial table of products */}
        <div className="hairline-t hairline-b">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-3 hairline-b">
            <p className="col-span-1 eyebrow">№</p>
            <p className="col-span-4 eyebrow">Project</p>
            <p className="col-span-2 eyebrow">Class</p>
            <p className="col-span-3 eyebrow">Stack</p>
            <p className="col-span-2 eyebrow text-right">Status</p>
          </div>

          <ul>
            {items.map((p, i) => (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="hairline-b last:border-b-0"
              >
                <Link
                  href={`/products/${p.slug}`}
                  className="group grid grid-cols-12 gap-4 py-5 md:py-6 transition-colors hover:bg-muted/40 -mx-4 px-4"
                >
                  <div className="col-span-2 md:col-span-1 mono num text-xs text-muted-foreground pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="col-span-10 md:col-span-4 flex items-center gap-4">
                    {p.logo ? (
                      <div className="size-10 md:size-11 shrink-0 rounded-sm overflow-hidden hairline">
                        <Image
                          src={p.logo}
                          alt=""
                          width={44}
                          height={44}
                          className="size-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="size-10 md:size-11 shrink-0 rounded-sm hairline bg-muted/50 flex items-center justify-center">
                        <span className="mono text-sm font-medium text-muted-foreground">
                          {p.name[0].toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="serif text-2xl md:text-[28px] leading-none tracking-tight truncate">
                        {p.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1.5 truncate">
                        {p.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-wider text-muted-foreground self-center">
                    {p.category}
                  </div>

                  <div className="col-span-12 md:col-span-3 self-center">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 hairline rounded-sm text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                      {p.stack.length > 3 && (
                        <span className="mono text-[10px] tracking-wider text-muted-foreground self-center">
                          +{p.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-2 flex items-center md:justify-end gap-3">
                    <StatusPill status={p.status} />
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {!all && (
          <div className="mt-10 flex items-center justify-end">
            <Link
              href="/products"
              className="group inline-flex items-center gap-1.5 text-sm font-medium link-line"
            >
              Open the full catalogue
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: Project["status"] }) {
  const tone =
    status === "Live"
      ? "text-foreground"
      : status === "Beta"
      ? "text-foreground/80"
      : "text-muted-foreground";
  const dotColor =
    status === "Live"
      ? "bg-emerald-500"
      : status === "Beta"
      ? "bg-amber-500"
      : status === "In Development"
      ? "bg-blue-500"
      : "bg-muted-foreground";
  return (
    <span className={`inline-flex items-center gap-1.5 mono text-[10px] tracking-wider uppercase ${tone}`}>
      <span className={`size-1.5 rounded-full ${dotColor}`} />
      {status}
    </span>
  );
}
