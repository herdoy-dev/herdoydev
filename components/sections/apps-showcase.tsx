"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem, MotionDiv } from "@/components/motion-wrapper";
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
  eyebrow = "Our Products",
  subheading,
}: Props) {
  const items: Project[] = all ? projects : featuredProjects;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {heading ?? (
              <>
                Apps people <span className="gradient-text">love to use</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {subheading ??
              (all
                ? "The full catalogue of products we're building — from mobile apps and games to web experiences."
                : "A selection of products we're building across mobile, web, and games.")}
          </p>
        </MotionDiv>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((app) => (
            <StaggerItem key={app.slug}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Link href={`/products/${app.slug}`} className="block h-full">
                  <Card className="group overflow-hidden border-border/50 bg-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        {app.logo ? (
                          <div className="size-12 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                            <Image
                              src={app.logo}
                              alt={`${app.name} logo`}
                              width={48}
                              height={48}
                              className="size-12 object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={`size-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center`}
                          >
                            <span className="text-xl font-bold text-white">
                              {app.name[0]}
                            </span>
                          </div>
                        )}
                        <Badge
                          variant={app.status === "Live" ? "default" : "secondary"}
                          className={
                            app.status === "Live"
                              ? "gradient-bg border-0 text-white text-xs"
                              : "text-xs"
                          }
                        >
                          {app.status}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold mb-1">{app.name}</h3>
                      <p className="text-xs text-primary font-medium mb-3">
                        {app.category}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {app.tagline}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-border/50">
                        <div className="flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                          {app.stack.slice(0, 2).map((s) => (
                            <span
                              key={s}
                              className="px-1.5 py-0.5 rounded bg-muted/60"
                            >
                              {s}
                            </span>
                          ))}
                          {app.stack.length > 2 && (
                            <span className="px-1.5 py-0.5 rounded bg-muted/60">
                              +{app.stack.length - 2}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                          View
                          <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!all && (
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                View all products
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
