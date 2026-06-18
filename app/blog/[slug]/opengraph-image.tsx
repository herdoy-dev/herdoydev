import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { blogPosts, getPost } from "@/constants/blog";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "HerdoyDev blog post";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOgImage({
    eyebrow: "Blog",
    title: post?.title ?? "HerdoyDev Blog",
    tags: post?.tags,
    footer: post
      ? `herdoydev.com · ${post.readingTime} min read`
      : "herdoydev.com",
  });
}
