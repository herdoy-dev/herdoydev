import { siteConfig } from "@/constants/site";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = siteConfig.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOgImage({
    title: "Building Scalable Web Apps, Mobile Apps & AI Solutions",
    footer: "herdoydev.com · Full-stack engineering studio",
    tags: ["Web", "Mobile", "AI Agents", "SaaS"],
  });
}
