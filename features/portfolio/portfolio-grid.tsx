"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ProjectCard } from "@/components/shared/project-card";
import { projects, projectCategories } from "@/constants/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

type Filter = ProjectCategory | "All";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active ? "text-white" : "text-muted hover:text-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-brand-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted">
          No projects in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
