"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { MotionDiv } from "@/components/motion-wrapper";

const apps = [
  {
    name: "AI Assistant Pro",
    category: "Artificial Intelligence",
    description:
      "Your personal AI companion for daily tasks, writing, and creative problem-solving.",
    rating: "4.8",
    downloads: "10K+",
    color: "from-blue-500 to-violet-500",
    status: "Live",
  },
  {
    name: "HealthTrack",
    category: "Health & Fitness",
    description:
      "Comprehensive health monitoring with smart insights and personalized recommendations.",
    rating: "4.6",
    downloads: "8K+",
    color: "from-emerald-500 to-teal-500",
    status: "Live",
  },
  {
    name: "FinWise",
    category: "Finance",
    description:
      "Smart expense tracking and budgeting to help you take control of your finances.",
    rating: "4.7",
    downloads: "12K+",
    color: "from-amber-500 to-orange-500",
    status: "Live",
  },
  {
    name: "TaskFlow",
    category: "Productivity",
    description:
      "Streamlined task management with AI-powered prioritization and scheduling.",
    rating: "4.5",
    downloads: "5K+",
    color: "from-pink-500 to-rose-500",
    status: "Beta",
  },
  {
    name: "LearnHub",
    category: "Education",
    description:
      "Interactive learning platform with personalized study paths and progress tracking.",
    rating: "4.4",
    downloads: "3K+",
    color: "from-cyan-500 to-blue-500",
    status: "Coming Soon",
  },
  {
    name: "QuickNote",
    category: "Productivity",
    description:
      "Lightning-fast note-taking with markdown support and seamless cloud sync.",
    rating: "4.9",
    downloads: "15K+",
    color: "from-violet-500 to-purple-500",
    status: "Live",
  },
];

export function AppsShowcase() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Apps people{" "}
            <span className="gradient-text">love to use</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our growing portfolio of mobile applications available on
            the Google Play Store.
          </p>
        </MotionDiv>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <StaggerItem key={app.name}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="group overflow-hidden border-border/50 bg-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`size-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center`}
                      >
                        <span className="text-xl font-bold text-white">
                          {app.name[0]}
                        </span>
                      </div>
                      <Badge
                        variant={
                          app.status === "Live"
                            ? "default"
                            : "secondary"
                        }
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
                      {app.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="size-3.5 fill-amber-400 text-amber-400" />
                          {app.rating}
                        </span>
                        <span>{app.downloads} downloads</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="size-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
