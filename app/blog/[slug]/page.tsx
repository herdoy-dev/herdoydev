import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { blogPosts, getPost } from "@/constants/blog";
import { pageMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { formatDate, cn } from "@/lib/utils";
import { gradientArt } from "@/constants/projects";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.publishedAt,
    tags: post.tags,
    image: null, // provided by the route-level opengraph-image
  });
}

/** Render the lightweight markdown subset used in post content. */
function PostBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground"
            >
              {block.replace(/^## /, "")}
            </h2>
          );
        }
        return (
          <p key={i} className="text-pretty leading-relaxed text-muted">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}

/** Inline: `code` spans and **bold**. */
function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-sm text-brand-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <section className="pt-32 sm:pt-40">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {post.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted">
              <span>By {post.author}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="mt-10 max-w-3xl">
        <Reveal>
          <div
            className={cn(
              "relative aspect-[16/7] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br",
              gradientArt[post.coverImage]
            )}
          >
            <div className="absolute inset-0 grid-bg opacity-25" />
          </div>
        </Reveal>
      </Container>

      <Section className="py-12">
        <Container className="max-w-3xl">
          <Reveal>
            <PostBody content={post.content} />
          </Reveal>
        </Container>
      </Section>

      <CTABanner title="Have a project in mind?" />
    </>
  );
}
