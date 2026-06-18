import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { projects, getProject } from "@/constants/projects";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "HerdoyDev case study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgImage({
    eyebrow: project?.category ?? "Case Study",
    title: project?.title ?? "HerdoyDev Case Study",
    tags: project?.technologies,
    footer: project
      ? `herdoydev.com · ${project.client} · ${project.year}`
      : "herdoydev.com",
  });
}
