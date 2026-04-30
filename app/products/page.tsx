import type { Metadata } from "next";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Every product in motion at the studio — mobile, web, and games. Updated as we ship.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Catalogue · herdoydev",
    description:
      "Every product in motion at the studio — mobile, web, and games.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <p className="edge-label">003 — Catalogue</p>
            <p className="edge-label">In motion · 15 entries</p>
            <p className="edge-label">Last revision · {new Date().getFullYear()}</p>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— Catalogue</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight">
                Everything we&apos;re <br />
                <span className="serif-italic">making.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Mobile apps, games, and web tools — products that solve a
                real, specific problem for a real, specific person. Tap a row
                to read the brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppsShowcase
        all
        eyebrow="— 003 / All entries"
        heading={
          <>
            The full <span className="serif-italic">register.</span>
          </>
        }
        subheading="Sorted by recent activity. Status changes as products move from draft to beta to live."
      />
      <CTA />
    </>
  );
}
