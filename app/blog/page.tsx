import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section, Container } from "@/components/ui/section";
import { RevealGroup, Reveal } from "@/components/effects/reveal";
import { BlogCard } from "@/components/shared/blog-card";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { blogPosts } from "@/constants/blog";
import { pageMetadata, breadcrumbSchema, blogListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Essays on building scalable software, AI agents, web performance, and product engineering from HerdoyDev.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          blogListSchema(blogPosts),
        ]}
      />
      <PageHeader
        title={<>Notes on <span className="text-gradient">building software</span></>}
        description="Practical lessons from shipping real products — architecture, AI, performance, and the craft of engineering."
      />
      <Section className="pt-4">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Reveal as="div" key={post.slug}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>
      <CTABanner />
    </>
  );
}
