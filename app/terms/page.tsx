import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of service for herdoydev — the rules and guidelines for using our website and applications.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms · herdoydev",
    description:
      "Terms of service for herdoydev — the rules and guidelines for using our website and applications.",
    url: "/terms",
  },
};

const sections = [
  {
    num: "01",
    title: "Acceptance",
    body: (
      <p>
        By accessing or using the herdoydev website and mobile applications,
        you agree to be bound by these Terms of Service. If you do not agree
        to these terms, please do not use our services.
      </p>
    ),
  },
  {
    num: "02",
    title: "Description of services",
    body: (
      <p>
        herdoydev designs, develops, and publishes mobile and web products.
        We also offer custom development engagements for businesses and
        individuals.
      </p>
    ),
  },
  {
    num: "03",
    title: "User accounts",
    body: (
      <p>
        Some of our applications may require you to create an account. You
        are responsible for the confidentiality of your account credentials
        and for all activity under your account. You agree to notify us
        immediately of any unauthorised use.
      </p>
    ),
  },
  {
    num: "04",
    title: "Acceptable use",
    body: (
      <>
        <p className="mb-3">You agree not to:</p>
        <ul className="space-y-3">
          <li>Use our services for any unlawful purpose.</li>
          <li>Attempt to gain unauthorised access to our systems or networks.</li>
          <li>Interfere with or disrupt the integrity of our services.</li>
          <li>Upload malicious code, viruses, or harmful content.</li>
          <li>Reverse engineer, decompile, or disassemble our applications.</li>
          <li>
            Reproduce, distribute, or create derivative works without permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "Intellectual property",
    body: (
      <p>
        All content, features, and functionality of our website and
        applications — text, graphics, logos, icons, images, and software —
        are the exclusive property of herdoydev and are protected by
        intellectual property laws.
      </p>
    ),
  },
  {
    num: "06",
    title: "Custom development",
    body: (
      <p>
        For custom engagements, specific terms — scope, timeline, payment,
        and intellectual property ownership — are outlined in a separate
        agreement between herdoydev and the client.
      </p>
    ),
  },
  {
    num: "07",
    title: "Disclaimer of warranties",
    body: (
      <p>
        Our services are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, either express or
        implied. We do not warrant that our services will be uninterrupted,
        error-free, or free of harmful components.
      </p>
    ),
  },
  {
    num: "08",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, herdoydev shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising out of or relating to your use of our services.
      </p>
    ),
  },
  {
    num: "09",
    title: "Termination",
    body: (
      <p>
        We reserve the right to terminate or suspend access to our services
        at any time, without prior notice, for conduct that we believe
        violates these terms or is harmful to other users or our business.
      </p>
    ),
  },
  {
    num: "10",
    title: "Governing law",
    body: (
      <p>
        These Terms are governed by and construed in accordance with the laws
        of Bangladesh, without regard to its conflict-of-law provisions.
      </p>
    ),
  },
  {
    num: "11",
    title: "Changes to terms",
    body: (
      <p>
        We reserve the right to modify these Terms at any time. Changes are
        effective immediately upon posting. Continued use of our services
        constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    num: "12",
    title: "Contact",
    body: (
      <p>
        If you have any questions about these Terms, write to{" "}
        <a
          href="mailto:contact@herdoydev.com"
          className="link-line text-foreground"
        >
          contact@herdoydev.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative pt-32 md:pt-44 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <p className="edge-label">— Legal</p>
            <p className="edge-label">Terms of service</p>
            <p className="edge-label num">Last revised · 2026-04-12</p>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— Legal</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight">
                Terms of <span className="serif-italic">service.</span>
              </h1>
              <p className="mt-6 mono text-[11px] tracking-widest uppercase text-muted-foreground">
                Last revised · 12 April 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 hairline-t">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <aside className="col-span-12 md:col-span-3">
              <p className="eyebrow mb-4">Sections</p>
              <ol className="space-y-2">
                {sections.map((s) => (
                  <li
                    key={s.num}
                    className="text-sm text-muted-foreground flex items-baseline gap-2"
                  >
                    <span className="mono num text-[11px] text-muted-foreground/60">
                      {s.num}
                    </span>
                    {s.title}
                  </li>
                ))}
              </ol>
            </aside>

            <div className="col-span-12 md:col-span-9 space-y-12 max-w-prose text-base text-foreground/85 leading-relaxed">
              {sections.map((s) => (
                <article key={s.num} className="hairline-t pt-8">
                  <header className="flex items-baseline gap-3 mb-4">
                    <span className="mono num text-[11px] tracking-widest text-muted-foreground">
                      / {s.num}
                    </span>
                    <h2 className="serif text-2xl md:text-3xl tracking-tight">
                      {s.title}
                    </h2>
                  </header>
                  <div>{s.body}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
