import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { projects } from "@/constants/projects";
import { blogPosts } from "@/constants/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const routes = ["", "/services", "/portfolio", "/about", "/contact", "/blog"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
