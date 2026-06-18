import Link from "next/link";
import { Terminal, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/section";
import { navItems, socialLinks, siteConfig } from "@/constants/site";
import { services } from "@/constants/services";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500">
                <Terminal className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                herdoy<span className="text-brand-400">dev</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Building scalable web apps, mobile apps & AI solutions for startups
              and businesses that want to move fast and scale.
            </p>
            <div className="mt-2 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-muted transition-colors hover:text-foreground"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Navigate">
            {navItems.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Get in touch">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              {siteConfig.email}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <FooterLink href="/contact">Book a free consultation</FooterLink>
            <FooterLink href="/portfolio">View portfolio</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono text-xs">Designed & built with precision.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted transition-colors hover:text-foreground">
      {children}
    </Link>
  );
}
