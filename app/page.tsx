import { Hero } from "@/features/home/hero";
import { TechMarquee } from "@/features/home/tech-marquee";
import { ServicesPreview } from "@/features/home/services-preview";
import { FeaturedProjects } from "@/features/home/featured-projects";
import { Stats } from "@/features/home/stats";
import { Testimonials } from "@/features/home/testimonials";
import { CTABanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <Hero />
      <TechMarquee />
      <ServicesPreview />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <CTABanner />
    </>
  );
}
