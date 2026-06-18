import type { Project, ProjectCategory } from "@/types";

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "AI",
  "SaaS",
  "E-commerce",
];

/**
 * Gradient presets used as placeholder art for thumbnails & galleries.
 * Keys are arbitrary labels; all tuned to the sunset (orange/coral/pink + cyan) palette.
 */
export const gradientArt: Record<string, string> = {
  violet: "from-brand-600 via-coral to-pink",
  cyan: "from-cyan via-brand-500 to-coral",
  emerald: "from-amber via-coral to-cyan",
  sunset: "from-amber via-coral to-red",
  aurora: "from-brand-600 via-pink to-cyan",
  nebula: "from-brand-800 via-coral to-amber",
};

export const projects: Project[] = [
  {
    slug: "nexus-saas-analytics",
    title: "Nexus Analytics",
    client: "Nexus Labs",
    category: "SaaS",
    year: "2025",
    summary:
      "Real-time product analytics platform processing millions of events per day.",
    description:
      "A multi-tenant SaaS analytics suite with live dashboards, funnels, and cohort analysis.",
    thumbnail: "violet",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "ClickHouse", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/herdoydev",
    featured: true,
    overview:
      "Nexus needed an analytics platform that could ingest high-volume event streams and surface insights in real time. I designed the ingestion pipeline, the multi-tenant data model, and a buttery-smooth dashboard experience that loads in under a second.",
    features: [
      "Real-time event ingestion at 5M+ events/day",
      "Customizable funnel & cohort builder",
      "Role-based access control for teams",
      "Stripe-powered usage billing",
      "Sub-second dashboard rendering with ISR",
    ],
    challenges: [
      "Scaling event ingestion without ballooning costs — solved with a buffered ClickHouse pipeline.",
      "Keeping dashboards instant on huge datasets via pre-aggregation and edge caching.",
    ],
    results: [
      { label: "Faster queries", value: "12x" },
      { label: "Dashboard load", value: "<1s" },
      { label: "Events / day", value: "5M+" },
    ],
    gallery: ["violet", "cyan", "nebula"],
  },
  {
    slug: "atlas-ai-support",
    title: "Atlas Support AI",
    client: "Atlas Commerce",
    category: "AI",
    year: "2025",
    summary:
      "An AI support agent that resolves 68% of tickets autonomously across channels.",
    description:
      "A retrieval-augmented support agent wired into Zendesk, Slack, and the product itself.",
    thumbnail: "aurora",
    technologies: ["Next.js", "Node.js", "OpenAI", "Pinecone", "LangChain", "PostgreSQL"],
    liveUrl: "https://example.com",
    featured: true,
    overview:
      "Atlas was drowning in repetitive support tickets. I built an AI agent grounded in their knowledge base that triages, answers, and escalates intelligently — with full conversation memory and human handoff.",
    features: [
      "RAG over 2,000+ help articles & past tickets",
      "Multi-channel: web widget, Slack, email",
      "Confidence-based human escalation",
      "Analytics on deflection & CSAT",
      "Guardrails to prevent hallucinated policy",
    ],
    challenges: [
      "Preventing hallucinations on billing & policy questions using strict retrieval grounding.",
      "Designing graceful human handoff that preserves full context.",
    ],
    results: [
      { label: "Tickets auto-resolved", value: "68%" },
      { label: "First response", value: "Instant" },
      { label: "CSAT", value: "4.7/5" },
    ],
    gallery: ["aurora", "emerald", "violet"],
  },
  {
    slug: "vault-fintech-mobile",
    title: "Vault",
    client: "Vault Finance",
    category: "Mobile Apps",
    year: "2024",
    summary:
      "A cross-platform fintech app for budgeting, payments, and savings goals.",
    description:
      "A polished React Native app with biometric auth, instant transfers, and live insights.",
    thumbnail: "cyan",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Plaid", "Firebase"],
    liveUrl: "https://example.com",
    featured: true,
    overview:
      "Vault wanted a beautiful, trustworthy money app. I led the mobile build end-to-end: secure onboarding, bank linking via Plaid, real-time balances, and a delightful goal-tracking experience.",
    features: [
      "Biometric authentication & secure storage",
      "Bank linking with Plaid",
      "Instant peer-to-peer transfers",
      "Smart savings goals with projections",
      "Push notifications & spend insights",
    ],
    challenges: [
      "Meeting financial-grade security on-device while keeping UX frictionless.",
      "Offline-first sync so balances feel instant on flaky networks.",
    ],
    results: [
      { label: "App Store rating", value: "4.8★" },
      { label: "Onboarding time", value: "90s" },
      { label: "Crash-free", value: "99.9%" },
    ],
    gallery: ["cyan", "violet", "emerald"],
  },
  {
    slug: "forge-dev-platform",
    title: "Forge",
    client: "Forge Inc.",
    category: "Web Apps",
    year: "2024",
    summary:
      "A developer collaboration platform with live previews and CI insights.",
    description:
      "A web app for teams to review deployments, share previews, and track build health.",
    thumbnail: "nebula",
    technologies: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/herdoydev",
    featured: false,
    overview:
      "Forge centralizes everything a dev team needs around shipping: preview environments, build status, and review workflows — in one fast, keyboard-driven interface.",
    features: [
      "Per-PR live preview environments",
      "Real-time build & CI status",
      "Keyboard-first command palette",
      "Granular team permissions",
    ],
    challenges: [
      "Streaming build logs in real time without overwhelming the client.",
      "Designing a command palette that scales to hundreds of actions.",
    ],
    results: [
      { label: "Review time", value: "-40%" },
      { label: "Deploys / week", value: "3x" },
      { label: "Uptime", value: "99.95%" },
    ],
    gallery: ["nebula", "violet", "cyan"],
  },
  {
    slug: "bloom-ecommerce",
    title: "Bloom",
    client: "Bloom Botanicals",
    category: "E-commerce",
    year: "2024",
    summary:
      "A custom headless storefront that lifted conversion by 34%.",
    description:
      "A headless commerce experience with lightning-fast PDPs and a frictionless checkout.",
    thumbnail: "emerald",
    technologies: ["Next.js", "Shopify", "TypeScript", "Tailwind", "Stripe", "Sanity"],
    liveUrl: "https://example.com",
    featured: true,
    overview:
      "Bloom's legacy theme was slow and rigid. I rebuilt their storefront headless on Next.js + Shopify, with a custom CMS for merchandising and a checkout tuned for conversion.",
    features: [
      "Headless Shopify with sub-second PDPs",
      "Visual merchandising via Sanity CMS",
      "One-page accelerated checkout",
      "SEO-optimized, 100 Lighthouse SEO",
    ],
    challenges: [
      "Keeping cart state in sync across headless storefront and Shopify checkout.",
      "Achieving near-perfect Core Web Vitals on image-heavy pages.",
    ],
    results: [
      { label: "Conversion", value: "+34%" },
      { label: "Page speed", value: "0.8s" },
      { label: "Lighthouse", value: "98" },
    ],
    gallery: ["emerald", "sunset", "cyan"],
  },
  {
    slug: "pulse-internal-ai",
    title: "Pulse Ops",
    client: "Pulse Logistics",
    category: "AI",
    year: "2023",
    summary:
      "An internal AI ops assistant automating logistics workflows and reporting.",
    description:
      "An internal agent that drafts reports, queries data, and automates routine ops tasks.",
    thumbnail: "sunset",
    technologies: ["Python", "FastAPI", "Next.js", "OpenAI", "PostgreSQL", "AWS"],
    featured: false,
    overview:
      "Pulse's ops team spent hours on manual reporting. I built an internal assistant that connects to their warehouse data, answers natural-language questions, and automates recurring reports.",
    features: [
      "Natural-language querying over ops data",
      "Scheduled automated reports",
      "Slack-native interface",
      "Audit trail for every action",
    ],
    challenges: [
      "Safely letting an agent run parameterized queries without data leaks.",
      "Making outputs trustworthy with cited, verifiable data.",
    ],
    results: [
      { label: "Hours saved / wk", value: "20+" },
      { label: "Report time", value: "-85%" },
      { label: "Adoption", value: "94%" },
    ],
    gallery: ["sunset", "nebula", "aurora"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
