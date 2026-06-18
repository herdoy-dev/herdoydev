import { Gem, Eye, Scaling, Gauge } from "lucide-react";
import type {
  Stat,
  Testimonial,
  Tech,
  Value,
  ExperienceItem,
  SkillGroup,
} from "@/types";

export const stats: Stat[] = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
];

/** simpleicons.org slugs — rendered via CDN in TechMarquee. */
export const techStack: Tech[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Amazon AWS", icon: "amazonwebservices" },
  { name: "Docker", icon: "docker" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Python", icon: "python" },
  { name: "GraphQL", icon: "graphql" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Herdoy shipped our platform faster than we thought possible — and the quality was agency-level. Our dashboards load instantly and our customers noticed.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Nexus Labs",
    rating: 5,
  },
  {
    quote:
      "The AI support agent paid for itself in the first month. We deflect two thirds of our tickets and CSAT actually went up. Rare to find an engineer who gets product too.",
    name: "Marcus Reid",
    role: "Head of Support",
    company: "Atlas Commerce",
    rating: 5,
  },
  {
    quote:
      "Our mobile app feels like it was built by a team of ten. Biometric auth, instant transfers, zero crashes. Herdoy is the real deal.",
    name: "Amara Okafor",
    role: "Founder",
    company: "Vault Finance",
    rating: 5,
  },
  {
    quote:
      "Rebuilt our storefront headless and conversion jumped 34%. Communication was transparent the entire way. Would hire again in a heartbeat.",
    name: "James Whitfield",
    role: "CEO",
    company: "Bloom Botanicals",
    rating: 5,
  },
];

export const values: Value[] = [
  {
    title: "Quality",
    description:
      "Clean, tested, maintainable code. I build things the way I'd want to inherit them.",
    icon: Gem,
  },
  {
    title: "Transparency",
    description:
      "Clear communication, honest timelines, no surprises. You always know where things stand.",
    icon: Eye,
  },
  {
    title: "Scalability",
    description:
      "Architecture that grows with you — from your first user to your millionth.",
    icon: Scaling,
  },
  {
    title: "Performance",
    description:
      "Fast by default. Every millisecond matters for experience and conversion.",
    icon: Gauge,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Founder & Lead Engineer",
    company: "HerdoyDev",
    description:
      "Running a boutique studio building web, mobile, and AI products for startups and growing businesses.",
    highlights: [
      "Delivered 20+ production products across SaaS, fintech, and commerce",
      "Built AI agents deflecting 60%+ of support volume",
      "Maintained 99.9%+ uptime across client systems",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Senior Full Stack Engineer",
    company: "Product Studio",
    description:
      "Led full-stack delivery for venture-backed startups, owning architecture and shipping cadence.",
    highlights: [
      "Architected multi-tenant SaaS platforms on Next.js & PostgreSQL",
      "Mentored junior engineers and set engineering standards",
      "Cut infra costs 40% through caching & query optimization",
    ],
  },
  {
    period: "2018 — 2021",
    role: "Full Stack Developer",
    company: "Agency",
    description:
      "Built web and mobile applications for clients across e-commerce, healthcare, and logistics.",
    highlights: [
      "Shipped 15+ client projects end-to-end",
      "Introduced TypeScript and CI/CD across the team",
      "Specialized in performance and accessibility",
    ],
  },
  {
    period: "2016 — 2018",
    role: "Software Engineer",
    company: "Early Career",
    description:
      "Cut my teeth shipping production features across the stack and learning what it takes to build software that lasts.",
    highlights: [
      "Shipped features used by thousands of users",
      "Went deep on JavaScript, APIs, and databases",
      "Built the fundamentals that still anchor my work today",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 96 },
      { name: "TypeScript", level: 94 },
      { name: "Tailwind / CSS", level: 92 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 93 },
      { name: "PostgreSQL / MongoDB", level: 90 },
      { name: "Django / Spring Boot", level: 82 },
      { name: "REST / GraphQL APIs", level: 91 },
    ],
  },
  {
    category: "AI & Cloud",
    skills: [
      { name: "AI Agents / RAG", level: 90 },
      { name: "LLM Integration", level: 92 },
      { name: "AWS / Cloud Deploy", level: 86 },
      { name: "Docker / CI-CD", level: 88 },
    ],
  },
];

export const budgetOptions = [
  "< $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k – $100k",
  "$100k+",
] as const;
