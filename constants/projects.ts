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
    slug: "mystic-arcana",
    title: "Mystic Arcana",
    client: "Mystic Arcana",
    category: "SaaS",
    year: "2025",
    summary:
      "A tarot platform pairing a free daily draw with AI-guided premium spreads, live reader consultations, and a storefront.",
    description:
      "A four-surface tarot product — free readings, paid AI spreads, live one-to-one consultations, and an e-commerce emporium — under a single midnight-sky design system.",
    thumbnail: "nebula",
    image: "/projects/mystic-arcana/cover.jpg",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "TanStack Query",
      "Node.js",
      "REST API",
    ],
    liveUrl: "https://peaceful-salamander-36b338.netlify.app/",
    featured: true,
    overview:
      "Mystic Arcana turns a 78-card Rider–Waite deck into a full product. A visitor can pull a free card with no account at all, step up to an AI-interpreted three-card or Celtic Cross spread, book a live chat consultation billed by the minute, or buy decks and ritual tools from the emporium. I built the App Router frontend and wired it to a separate Node REST API — auth, readings, readers, cart, and orders — and designed the whole occult-luxe visual language: midnight gradients, drifting starfield, gold leaf accents, and a serif display face that makes the interface feel like an object rather than a dashboard.",
    features: [
      "Free single-card draw with no sign-up required",
      "AI-guided three-card and Celtic Cross spreads ($4.99 / $14.99)",
      "Live one-to-one reader consultations, billed by the minute",
      "Tarot emporium with cart and order history",
      "Authenticated dashboard for readings, consultations, and orders",
      "Animated starfield hero with layered, parallaxed tarot cards",
    ],
    challenges: [
      "Four very different surfaces — free draw, paid spreads, live chat, storefront — had to feel like one product. A single token layer (Tailwind v4 + oklch) and a shared card/section vocabulary keep the ritual tone intact from the hero all the way to checkout.",
      "The free draw is the top of the funnel, so it cannot be gated. Readings are anonymous until a visitor chooses to sign in, and the premium spreads swap their CTA to a sign-in prompt instead of hiding behind a wall.",
      "Client-side data comes from a separate Node API on another origin. TanStack Query handles caching, loading skeletons, and retries, and every list renders a designed empty state so the page still reads well when the API is cold.",
    ],
    results: [
      { label: "Card deck", value: "78" },
      { label: "Reading modes", value: "3" },
      { label: "Product surfaces", value: "4" },
    ],
    gallery: ["nebula", "aurora", "violet"],
    screenshots: [
      {
        src: "/projects/mystic-arcana/cover.jpg",
        alt: "Mystic Arcana homepage hero with floating tarot cards over a starfield",
        caption: "Hero — layered tarot cards over an animated starfield",
      },
      {
        src: "/projects/mystic-arcana/free-draw.jpg",
        alt: "Free single-card draw screen with an optional question field",
        caption: "Free draw — no account, one question, one card",
      },
      {
        src: "/projects/mystic-arcana/spreads.jpg",
        alt: "Spread selection screen showing Single Card, Three Card and Celtic Cross tiers",
        caption: "Spread picker — free tier beside two premium spreads",
      },
      {
        src: "/projects/mystic-arcana/pricing.jpg",
        alt: "Pricing cards for the single card, three card and Celtic Cross readings",
        caption: "Pricing — depth as the upgrade axis, not features",
      },
      {
        src: "/projects/mystic-arcana/features.jpg",
        alt: "Feature grid describing the free draw, AI spreads, live consultations and store",
        caption: "The four surfaces of the product, in one grid",
      },
      {
        src: "/projects/mystic-arcana/testimonials.jpg",
        alt: "Testimonial cards and a closing call to action offering a free card",
        caption: "Social proof into the free-card CTA",
      },
    ],
  },
  {
    slug: "complyremit",
    title: "DattaRemit",
    client: "DattaRemit",
    category: "AI",
    year: "2026",
    summary:
      "A five-corridor remittance platform with an AI support agent that reads the customer's own account and hands off to a human mid-conversation.",
    description:
      "A regulated US-outbound payments platform — customer app, operator console, marketing site and mobile app over one Express API — with a tool-calling AI assistant on both sides of the support desk.",
    thumbnail: "cyan",
    image: "/projects/complyremit/cover.jpg",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "TanStack Query",
      "Tailwind v4",
      "React Native",
      "Plaid",
      "Stripe",
      "DigitalOcean",
    ],
    liveUrl: "https://dattaremit.com/",
    featured: true,
    overview:
      "DattaRemit moves USD out of a US checking account and lands local currency in India, the Philippines, Vietnam, Indonesia or Nigeria — so almost every screen sits on top of KYC, an approval gate, or a payment rail. I built it as a single npm workspace: an Express 5 API on Node 24 with Prisma over PostgreSQL, three Next.js front ends (customer app, operator console, marketing site), a Stripe storefront, and an Expo mobile app covering the same customer journey. Thirteen API domains share that one server — auth, onboarding, recipients, bank accounts, KYC, payments, support, admin and webhooks. The regulated half is partner-run: Plaid for bank linking, Persona and Cybrid for identity, Cybrid for custody, FX and settlement. The piece I'm proudest of is the support layer: an AI assistant that can actually see the caller's own transfers, and that knows when to stop talking and fetch a person.",
    features: [
      "AI support assistant with scoped, read-only tool calling over the caller's own account",
      "Live human handoff — the bot goes silent the moment a conversation is queued",
      "Operator console with a multi-conversation support dock, approval queue and compliance 360",
      "Separate identity systems: hosted auth for customers, first-party JWT for operators",
      "Five US-outbound corridors — INR, PHP, VND, IDR, NGN — including UPI payout for India",
      "Plaid-tokenised bank funding, partner-run KYC, and mid-market quotes with no fee mark-up",
      "Step-up authorisation on every send: emailed 6-digit code on web, biometrics on mobile",
      "Expo/React Native app covering the same journey as the web client",
      "Per-field AES-256 encryption for personal data, including support transcripts",
    ],
    challenges: [
      "An assistant that can read account data is an IDOR waiting to happen — a customer can talk a model into looking up someone else. So no tool takes a subject at all: every lookup closes over the authenticated session, and a test asserts that no tool parameter is ever named for a user. Prompt wording alone was never going to hold that line.",
      "Two voices answering one customer is what makes people distrust a support widget. The assistant answers only while the conversation is in its bot state and stops completely once a human is queued — and because transcripts are persisted rather than held in React state, the agent who picks it up inherits the whole conversation instead of asking the customer to repeat themselves.",
      "The first cut of live chat polled hard enough to trip production rate limits. Reworking it — one round trip per tick instead of three, and an interval that backs off 2s → 15s as polls come back empty — took an agent with three panels open from roughly 204 requests a minute to about 12 at rest, without adding sockets to a two-instance deployment.",
      "The assistant's prompt is a product claim, and it drifted: an earlier version offered corridors that were never built and described a login flow that had been replaced. Nothing errored — every answer just read fluently and wrong. The supported set is now exactly five — INR, PHP, VND, IDR, NGN — and the prompt is asserted in tests against the same source of truth the API validates against, so adding a corridor is one edit rather than four.",
      "Money movement has to survive a dropped connection and a double tap. Every financial request carries an idempotency key, so a retry with identical details returns the original transfer and a retry with different details is rejected outright rather than quietly sending twice. The weekly aggregate limit is checked inside a Serializable transaction — two simultaneous sends can't each read the old total and both pass.",
    ],
    results: [
      { label: "Support poll load", value: "−94%" },
      { label: "Payout corridors", value: "5" },
      { label: "API domains", value: "13" },
    ],
    gallery: ["cyan", "violet", "aurora"],
    screenshots: [
      {
        src: "/projects/complyremit/cover.jpg",
        alt: "DattaRemit homepage hero with a live transfer preview showing $100 converting to ₹9,565 at a $0 fee",
        caption: "Marketing site — the quote is the hero, not a claim about it",
      },
      {
        src: "/projects/complyremit/how-it-works.jpg",
        alt: "Four onboarding steps: create and verify, link your US bank, add a recipient, send and track",
        caption: "Four steps, each one a regulated gate in disguise",
      },
      {
        src: "/projects/complyremit/compare.jpg",
        alt: "Live rate table comparing DattaRemit against Wise, Remitly, Skrill and Xoom on a $1,000 transfer",
        caption: "Pricing argued as a live comparison against named competitors",
      },
      {
        src: "/projects/complyremit/payout.jpg",
        alt: "Feature grid covering Plaid bank linking, bank or UPI payout, transparent quotes and fast settlement",
        caption: "Plaid in, local rails out — no middle layer to explain",
      },
      {
        src: "/projects/complyremit/encryption.jpg",
        alt: "Scroll-pinned trust panel stating that personal data is AES-256 encrypted at rest and in transit",
        caption: "Trust claims pinned one at a time, so each one lands",
      },
      {
        src: "/projects/complyremit/security.jpg",
        alt: "Security page headed 'The controls behind every transfer', written in plain English",
        caption: "A security page that reads like documentation, not marketing",
      },
    ],
  },
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
