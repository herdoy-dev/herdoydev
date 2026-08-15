import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/brand";

type IconComponent = React.ComponentType<{ className?: string }>;

export const siteConfig = {
  name: "HerdoyDev",
  title: "HerdoyDev — Web, Mobile & AI Engineering Studio",
  description:
    "HerdoyDev builds scalable web apps, mobile apps, and AI solutions for startups and businesses. Full-stack engineering with Next.js, React, Node.js and modern AI.",
  url: "https://herdoydev.com",
  email: "contact@herdoydev.com",
  ogImage: "/opengraph-image",
  author: "Herdoy",
  keywords: [
    "Full Stack Developer",
    "Web Development Services",
    "Mobile App Development",
    "AI Agent Development",
    "Next.js Developer",
    "React Developer",
    "Software Engineer",
  ],
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type SocialLink = { label: string; href: string; icon: IconComponent };

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/herdoy-dev", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/herdoydev", icon: LinkedinIcon },
  { label: "Twitter", href: "https://twitter.com/herdoydev", icon: XIcon },
  { label: "Email", href: "mailto:contact@herdoydev.com", icon: Mail },
];
