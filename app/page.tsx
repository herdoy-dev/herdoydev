import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { ServicesOverview } from "@/components/sections/services-overview";
import { CTA } from "@/components/sections/cta";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppsShowcase />
      <ServicesOverview />
      <Testimonials />
      <CTA />
      <ContactForm />
    </>
  );
}
