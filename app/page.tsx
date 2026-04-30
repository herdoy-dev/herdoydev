import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "herdoydev — Independent software studio",
    description:
      "An independent software studio designing and shipping mobile and web products.",
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
    "An independent software studio designing and shipping mobile and web products.",
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
    "An independent software studio designing and shipping mobile and web products.",
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
    </>
  );
}
