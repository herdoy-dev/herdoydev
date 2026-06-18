import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import { absoluteUrl } from "@/lib/utils";
import type { BlogPost, Project } from "@/types";

const SAME_AS = [
  "https://github.com/herdoydev",
  "https://linkedin.com/in/herdoydev",
  "https://twitter.com/herdoydev",
];

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  /** OG/Twitter type. "article" enables published/modified/tags. */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  /**
   * OG image URL. Defaults to the site image.
   * Pass `null` to omit it here and let a route-level `opengraph-image` file
   * provide a per-page image instead (avoids a duplicate/incorrect tag).
   */
  image?: string | null;
};

/** Build per-page Metadata with canonical, OG, and Twitter cards. */
export function pageMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
  image,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} — ${siteConfig.name}`;
  const useImage = image === undefined ? siteConfig.ogImage : image;
  const images = useImage ? [{ url: useImage, width: 1200, height: 630, alt: title }] : undefined;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: [siteConfig.author],
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: useImage ? [useImage] : undefined,
      creator: "@herdoydev",
    },
  };
}

/* ------------------------------- JSON-LD --------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    logo: absoluteUrl("/icon"),
    image: absoluteUrl(siteConfig.ogImage),
    founder: { "@type": "Person", name: siteConfig.author },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "AI Agent Development",
      "Next.js",
      "React",
      "Node.js",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      availableLanguage: "English",
    },
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    jobTitle: "Full Stack Software Engineer",
    email: siteConfig.email,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI Agents",
      "Cloud Deployment",
    ],
    sameAs: SAME_AS,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/portfolio/${project.slug}`),
    image: absoluteUrl(`/portfolio/${project.slug}/opengraph-image`),
    creator: { "@type": "Person", name: siteConfig.author },
    keywords: project.technologies.join(", "),
    dateCreated: project.year,
    inLanguage: "en-US",
  };
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const wordCount = post.content.trim().split(/\s+/).length;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    wordCount,
    timeRequired: `PT${post.readingTime}M`,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
    author: { "@type": "Person", name: post.author, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon") },
    },
  };
}

export function blogListSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    name: `${siteConfig.name} Blog`,
    description:
      "Essays on building scalable software, AI agents, vibe coding, and product engineering.",
    url: absoluteUrl("/blog"),
    publisher: { "@id": `${siteConfig.url}/#organization` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      author: { "@type": "Person", name: post.author },
    })),
  };
}

export function serviceCatalogSchema(
  services: { slug: string; title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "HerdoyDev Services",
    url: absoluteUrl("/services"),
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: absoluteUrl(`/services#${s.slug}`),
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
