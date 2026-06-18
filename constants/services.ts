import {
  Code2,
  Smartphone,
  Bot,
  Plug,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Custom Web Development",
    tagline: "Scalable products, engineered to last",
    description:
      "From SaaS platforms to internal dashboards, I architect performant, maintainable web applications that scale with your business.",
    icon: Code2,
    accent: "from-brand-600 to-brand-500",
    features: ["SaaS", "CRM", "ERP", "Dashboards", "Marketplaces", "Enterprise Systems"],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    tagline: "Native-grade apps, cross-platform speed",
    description:
      "Beautiful, fast mobile experiences for iOS and Android — built once, deployed everywhere with React Native and Flutter.",
    icon: Smartphone,
    accent: "from-cyan to-green",
    features: ["iOS", "Android", "React Native", "Flutter", "Cross Platform"],
  },
  {
    slug: "ai-agents",
    title: "AI Agent Development",
    tagline: "Autonomous systems that do real work",
    description:
      "Custom AI agents and automation that plug into your stack — support, sales, internal ops, and knowledge retrieval that actually ships.",
    icon: Bot,
    accent: "from-brand-500 to-cyan",
    features: [
      "Customer Support Agents",
      "Sales Agents",
      "Automation Agents",
      "Internal AI Systems",
      "Knowledge Base Agents",
    ],
  },
  {
    slug: "api-development",
    title: "API Development",
    tagline: "The connective tissue of your product",
    description:
      "Robust, well-documented REST APIs and third-party integrations — including payments — designed for reliability and growth.",
    icon: Plug,
    accent: "from-amber to-red",
    features: ["REST APIs", "Third Party Integrations", "Payment Systems"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    tagline: "Stores that convert and scale",
    description:
      "High-converting storefronts on Shopify, WooCommerce, or fully custom — optimized for performance, SEO, and revenue.",
    icon: ShoppingCart,
    accent: "from-green to-cyan",
    features: ["Shopify", "WooCommerce", "Custom Stores"],
  },
];

export const serviceIcons: Record<string, LucideIcon> = Object.fromEntries(
  services.map((s) => [s.slug, s.icon])
);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
