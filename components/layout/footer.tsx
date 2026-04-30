import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, XIcon, LinkedInIcon } from "@/components/icons";

const groups = {
  Studio: [
    { label: "About", href: "/about" },
    { label: "Practice", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Catalogue: [
    { label: "All products", href: "/products" },
    { label: "Open positions", href: "/contact" },
    { label: "Press kit", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Imprint", href: "/about" },
  ],
};

const socials = [
  { icon: GitHubIcon, href: "#", label: "GitHub" },
  { icon: XIcon, href: "#", label: "Twitter" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@herdoydev.com", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-t mt-24 bg-background">
      {/* Massive editorial wordmark */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-20">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-5">— Currently accepting projects</p>
            <h2 className="serif text-[clamp(3rem,12vw,11rem)] leading-[0.85] tracking-tight">
              herdoy<span className="serif-italic">dev.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pb-4">
            <p className="text-base leading-relaxed text-muted-foreground max-w-md">
              An independent software studio designing and shipping mobile and
              web products. Quietly, deliberately, in public.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium link-line"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Link groups */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-16 pt-10 hairline-t">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-3 flex items-start gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="size-8"
            />
            <div>
              <p className="text-sm font-medium">herdoydev</p>
              <p className="eyebrow mt-1">Dhaka · BD</p>
            </div>
          </div>

          {Object.entries(groups).map(([title, items]) => (
            <div key={title} className="md:col-span-3">
              <p className="eyebrow mb-4">{title}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-line"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip — colophon */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-16 py-6 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="eyebrow num">
          © {year} — herdoydev / all rights reserved
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="size-8 inline-flex items-center justify-center hairline rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              <social.icon className="size-3.5" />
            </a>
          ))}
        </div>
        <p className="eyebrow num hidden md:block">
          v1.0 · built by hand
        </p>
      </div>
    </footer>
  );
}
