import type { Metadata } from "next";
import { Mail, Clock, Globe, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, Container } from "@/components/ui/section";
import { Reveal } from "@/components/effects/reveal";
import { ContactForm } from "@/features/contact/contact-form";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/constants/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start your project with HerdoyDev. Tell me about your web, mobile, or AI build and I'll reply within 24 hours.",
  path: "/contact",
});

const perks = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
  { icon: Globe, label: "Availability", value: "Remote · Worldwide" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        title={<>Let&apos;s build something <span className="text-gradient">amazing</span></>}
        description="Tell me about your project and I'll get back to you within 24 hours with next steps."
      />

      <Section className="pt-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <div className="rounded-3xl border border-white/10 glass-strong p-7 sm:p-9">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-5">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <h2 className="font-display text-lg font-semibold">Get in touch</h2>
                  <div className="mt-5 flex flex-col gap-5">
                    {perks.map((p) => {
                      const Icon = p.icon;
                      const content = (
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-xs text-muted">{p.label}</span>
                            <span className="block text-sm font-medium">{p.value}</span>
                          </span>
                        </div>
                      );
                      return p.href ? (
                        <a key={p.label} href={p.href} className="transition-opacity hover:opacity-80">
                          {content}
                        </a>
                      ) : (
                        <div key={p.label}>{content}</div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/30 to-ink-900 p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand-200">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    What happens next?
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
                    {[
                      "I review your message and reply within 24 hours.",
                      "We hop on a free consultation to scope the work.",
                      "You get a clear proposal, timeline, and quote.",
                    ].map((t, i) => (
                      <li key={t} className="flex gap-3">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/20 font-mono text-[11px] text-brand-200">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
