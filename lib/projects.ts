export type ProjectStatus = "Live" | "Beta" | "In Development" | "Coming Soon";
export type ProjectCategory =
  | "Mobile App"
  | "Mobile Game"
  | "Web App"
  | "Developer Tool";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  status: ProjectStatus;
  /** Tailwind gradient classes used as a fallback when no logo image exists. */
  color: string;
  /** Optional /public path to a logo image. */
  logo?: string;
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "aether-vault",
    name: "Aether Vault",
    tagline: "End-to-end encrypted password vault.",
    description:
      "A secure, on-device password manager built with Expo and React Native. Stores credentials behind device biometrics with encrypted local storage.",
    category: "Mobile App",
    stack: ["Expo", "React Native", "TypeScript"],
    status: "In Development",
    color: "from-indigo-500 to-violet-500",
    logo: "/projects/aether-vault.png",
    featured: true,
  },
  {
    slug: "alafiyat",
    name: "Alafiyat",
    tagline: "Wellness platform for everyday health.",
    description:
      "A Next.js web application backed by Prisma for tracking and improving everyday health and wellness habits.",
    category: "Web App",
    stack: ["Next.js", "Prisma", "TypeScript"],
    status: "In Development",
    color: "from-emerald-500 to-teal-500",
    logo: "/projects/alafiyat.png",
  },
  {
    slug: "card-builder",
    name: "Card Builder",
    tagline: "Design and print custom cards in minutes.",
    description:
      "A web tool for building, customizing, and printing personalized cards with a clean, validated form workflow.",
    category: "Web App",
    stack: ["Next.js", "TailwindCSS", "TypeScript"],
    status: "In Development",
    color: "from-pink-500 to-rose-500",
    logo: "/projects/card-builder.png",
  },
  {
    slug: "chat-app",
    name: "Chat App",
    tagline: "Real-time chat across web and mobile.",
    description:
      "A multi-platform real-time messaging application with web, mobile, and server components — including AI assist and live video.",
    category: "Mobile App",
    stack: ["Bun", "Elysia", "Next.js", "React Native", "LiveKit"],
    status: "In Development",
    color: "from-cyan-500 to-blue-500",
    featured: true,
  },
  {
    slug: "connectify",
    name: "Connectify",
    tagline: "Lightweight social network.",
    description:
      "A social networking platform with authentication, image uploads, and a feed-driven experience.",
    category: "Web App",
    stack: ["Next.js", "Prisma", "NextAuth", "Cloudinary"],
    status: "In Development",
    color: "from-blue-500 to-indigo-500",
    logo: "/projects/connectify.png",
  },
  {
    slug: "data-racing",
    name: "Data Racing",
    tagline: "AI-assisted data visualization.",
    description:
      "An interactive data visualization and analysis tool with AI-driven insights, animated charts, and exportable reports.",
    category: "Web App",
    stack: ["Next.js", "D3.js", "OpenAI", "Framer Motion"],
    status: "In Development",
    color: "from-amber-500 to-orange-500",
    featured: true,
  },
  {
    slug: "game",
    name: "Aether Vault: Game",
    tagline: "Action-packed mobile gaming experience.",
    description:
      "A mobile game built with Expo and React Native, featuring rich Skia graphics, smooth animations, and Google Mobile Ads integration.",
    category: "Mobile Game",
    stack: ["Expo", "React Native", "Skia"],
    status: "In Development",
    color: "from-violet-500 to-purple-500",
    logo: "/projects/game.png",
  },
  {
    slug: "gfx-gen",
    name: "GFX Gen",
    tagline: "Graphic generator with PDF export.",
    description:
      "A graphics generation tool with rich text editing, image uploads, AI assistance, and one-click PDF export.",
    category: "Developer Tool",
    stack: ["Next.js", "Prisma", "Tiptap", "Uploadthing", "OpenAI"],
    status: "In Development",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    slug: "hmail",
    name: "hMail",
    tagline: "A modern email client experience.",
    description:
      "A web-based email client with rich-text composition, authentication, and a refined reading experience.",
    category: "Web App",
    stack: ["Next.js", "Prisma", "NextAuth", "Tiptap"],
    status: "In Development",
    color: "from-sky-500 to-cyan-500",
    logo: "/projects/hmail.png",
  },
  {
    slug: "hue-sort",
    name: "Hue Sort",
    tagline: "Color sorting puzzle game.",
    description:
      "A relaxing color sorting puzzle game for mobile, with smooth Reanimated transitions and progress saved locally.",
    category: "Mobile Game",
    stack: ["Expo", "React Native", "Reanimated"],
    status: "In Development",
    color: "from-rose-500 to-orange-500",
  },
  {
    slug: "issue-tracker",
    name: "Issue Tracker",
    tagline: "Lightweight project issue tracking.",
    description:
      "A focused issue tracker with charts, Markdown support, and an opinionated workflow built for small teams.",
    category: "Developer Tool",
    stack: ["Next.js", "Prisma", "NextAuth", "Recharts"],
    status: "In Development",
    color: "from-teal-500 to-emerald-500",
  },
  {
    slug: "luna-daily",
    name: "LunaDaily",
    tagline: "A daily journal you'll actually open.",
    description:
      "A daily journaling and habit-tracking mobile app with reminders, streaks, and a calm, distraction-free interface.",
    category: "Mobile App",
    stack: ["Expo", "React Native", "Firebase"],
    status: "In Development",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    slug: "neon-drift",
    name: "Neon Drift",
    tagline: "Synthwave arcade racing.",
    description:
      "A neon-soaked arcade racing game for mobile with tight controls, escalating difficulty, and bright, retro visuals.",
    category: "Mobile Game",
    stack: ["Expo", "React Native"],
    status: "In Development",
    color: "from-pink-500 to-violet-500",
    logo: "/projects/neon-drift.png",
    featured: true,
  },
  {
    slug: "pocket-money",
    name: "Pocket Money",
    tagline: "Personal finance, simplified.",
    description:
      "A personal finance tracker for mobile that helps you log expenses, set budgets, and stay on top of monthly spending.",
    category: "Mobile App",
    stack: ["Expo", "React Native", "Firebase", "NativeWind"],
    status: "In Development",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "vitamood",
    name: "VitaMood",
    tagline: "Wellness and mood tracking.",
    description:
      "A wellness companion that combines mood tracking, journaling, and gentle insights — with full localization support.",
    category: "Mobile App",
    stack: ["Expo", "React Native", "Tailwind"],
    status: "In Development",
    color: "from-fuchsia-500 to-rose-500",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const prev = i > 0 ? projects[i - 1] : projects[projects.length - 1];
  const next = i < projects.length - 1 ? projects[i + 1] : projects[0];
  return { prev, next };
}

export const featuredProjects = projects.filter((p) => p.featured);
