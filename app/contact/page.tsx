import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with herdoydev — projects, partnerships, or simply a hello.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · herdoydev",
    description:
      "Get in touch with herdoydev — projects, partnerships, or simply a hello.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-44 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <p className="edge-label">005 — Contact</p>
            <p className="edge-label">Reply within two working days</p>
            <p className="edge-label inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Accepting projects
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— Contact</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
                Write to <span className="serif-italic">us.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                A working project, a half-formed idea, or simply a hello — they
                all reach the same desk. We read every note and write back
                personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
