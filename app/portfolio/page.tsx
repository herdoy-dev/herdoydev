import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section, Container } from "@/components/ui/section";
import { PortfolioGrid } from "@/features/portfolio/portfolio-grid";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected work across SaaS, AI, mobile, web, and e-commerce. Real products designed, built, and scaled in production by HerdoyDev.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <PageHeader
        title={<>Work that <span className="text-gradient">speaks for itself</span></>}
        description="A curated selection of products I've shipped. Filter by category to explore the kind of work that fits your needs."
      />
      <Section className="pt-4">
        <Container>
          <PortfolioGrid />
        </Container>
      </Section>
      <CTABanner title="Want to be the next case study?" />
    </>
  );
}
