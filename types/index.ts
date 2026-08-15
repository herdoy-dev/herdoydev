import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "Web Apps"
  | "Mobile Apps"
  | "AI"
  | "SaaS"
  | "E-commerce";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accent: string; // tailwind gradient classes
}

export interface ProjectShot {
  src: string; // path under /public
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  description: string;
  thumbnail: string; // gradient token used for placeholder art
  image?: string; // real cover screenshot; falls back to `thumbnail` gradient
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  overview: string;
  features: string[];
  challenges: string[];
  results: { label: string; value: string }[];
  gallery: string[]; // gradient tokens for screenshot placeholders
  screenshots?: ProjectShot[]; // real screenshots; falls back to `gallery` gradients
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface Tech {
  name: string;
  icon: string; // simpleicons slug
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string; // gradient token
  tags: string[];
  readingTime: number;
  publishedAt: string; // ISO
  author: string;
}

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Closed";

export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  budget: string;
  service: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
}
