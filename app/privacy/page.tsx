import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for herdoydev — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy · herdoydev",
    description:
      "Privacy policy for herdoydev — how we collect, use, and protect your data.",
    url: "/privacy",
  },
};

const sections = [
  {
    num: "01",
    title: "Introduction",
    body: (
      <p>
        Welcome to herdoydev. We respect your privacy and are committed to
        protecting your personal data. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit
        our website or use our mobile applications.
      </p>
    ),
  },
  {
    num: "02",
    title: "Information we collect",
    body: (
      <ul className="space-y-3">
        <li>
          <strong className="text-foreground">Personal information.</strong>{" "}
          Name, email address, and other contact details you provide
          voluntarily through our contact forms.
        </li>
        <li>
          <strong className="text-foreground">Usage data.</strong> Information
          about how you use our website and applications, including pages
          visited, time spent, and interactions.
        </li>
        <li>
          <strong className="text-foreground">Device information.</strong>{" "}
          Device type, operating system, browser type, and unique device
          identifiers.
        </li>
      </ul>
    ),
  },
  {
    num: "03",
    title: "How we use your information",
    body: (
      <ul className="space-y-3">
        <li>To provide, maintain, and improve our services and applications.</li>
        <li>To respond to your inquiries and provide customer support.</li>
        <li>
          To send updates about our products and services (with your consent).
        </li>
        <li>To analyse usage patterns and improve the user experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>
    ),
  },
  {
    num: "04",
    title: "Data sharing & disclosure",
    body: (
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. We may share your data with trusted service providers who
        assist us in operating our website and applications, subject to
        confidentiality agreements. We may also disclose information when
        required by law.
      </p>
    ),
  },
  {
    num: "05",
    title: "Data security",
    body: (
      <p>
        We implement appropriate technical and organisational measures to
        protect your personal data against unauthorised access, alteration,
        disclosure, or destruction. However, no method of transmission over
        the internet is 100% secure.
      </p>
    ),
  },
  {
    num: "06",
    title: "Third-party services",
    body: (
      <p>
        Our applications may use third-party services such as Google
        Analytics, Firebase, and advertising networks. These services have
        their own privacy policies, and we encourage you to review them.
      </p>
    ),
  },
  {
    num: "07",
    title: "Your rights",
    body: (
      <ul className="space-y-3">
        <li>Access, update, or delete your personal information.</li>
        <li>Opt out of marketing communications.</li>
        <li>Request a copy of the data we hold about you.</li>
        <li>Withdraw consent at any time.</li>
      </ul>
    ),
  },
  {
    num: "08",
    title: "Children's privacy",
    body: (
      <p>
        Our services are not intended for children under the age of 13. We do
        not knowingly collect personal information from children. If you
        believe we have collected such information, please contact us
        immediately.
      </p>
    ),
  },
  {
    num: "09",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify
        you of any changes by posting the new policy on this page and updating
        the &ldquo;Last revised&rdquo; date.
      </p>
    ),
  },
  {
    num: "10",
    title: "Contact",
    body: (
      <p>
        If you have any questions about this Privacy Policy, write to{" "}
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-44 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="hidden md:flex items-center justify-between mb-12 pb-3 hairline-b">
            <p className="edge-label">— Legal</p>
            <p className="edge-label">Privacy policy</p>
            <p className="edge-label num">Last revised · 2026-04-12</p>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">— Legal</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight">
                Privacy <span className="serif-italic">policy.</span>
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
