import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { ServicesOverview } from "@/components/sections/services-overview";
import { CTA } from "@/components/sections/cta";
import { ContactForm } from "@/components/sections/contact-form";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "herdoydev — Code. Ship. Impact.",
    description:
      "We build mobile applications that solve real-world problems — AI, health, fintech, productivity, and more.",
    url: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "herdoydev",
  url: "https://herdoydev.com",
  logo: "https://herdoydev.com/logo.png",
  description:
    "A tech-focused organization that builds and publishes mobile applications across AI, health, fintech, productivity, and more.",
  founder: {
    "@type": "Person",
    name: "Herdoy Almamun",
    jobTitle: "Founder & Lead Developer",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@herdoydev.com",
    telephone: "+8801622465404",
    contactType: "customer service",
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "herdoydev",
  url: "https://herdoydev.com",
  description:
    "Building mobile applications that solve real-world problems.",
  publisher: {
    "@type": "Organization",
    name: "herdoydev",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
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
