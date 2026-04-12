import type { Metadata } from "next";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { CTA } from "@/components/sections/cta";
import { MotionDiv } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Products & Apps",
  description:
    "Explore our growing portfolio of mobile applications — AI, health, fintech, and productivity tools on the Google Play Store.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products & Apps | herdoydev",
    description:
      "Explore our growing portfolio of mobile applications — AI, health, fintech, and productivity tools on the Google Play Store.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv animation="fade-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Our Products
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Apps built for{" "}
                <span className="gradient-text">real people</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From AI-powered assistants to health trackers, we build
                applications that make everyday life better. Available on
                the Google Play Store.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <AppsShowcase />
      <CTA />
    </>
  );
}
