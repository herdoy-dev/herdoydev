import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GitHubIcon, XIcon, LinkedInIcon } from "@/components/icons";

const groups = {
  Studio: [
    { label: "About", href: "/about" },
    { label: "Practice", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Catalogue: [
    { label: "All products", href: "/products" },
    { label: "Featured", href: "/products" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
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
    <footer className="hairline-t bg-background">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-16 md:pt-20">
        {/* Edge label rail */}
        <div className="hidden md:flex items-center justify-between pb-3 hairline-b">
          <p className="edge-label">099 — Footer</p>
          <p className="edge-label">Reply within two working days</p>
          <p className="edge-label inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Accepting projects · {year}
          </p>
        </div>

        {/* Studio identity + contact rail */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="size-10"
              />
              <span className="text-lg font-medium tracking-tight">
                herdoydev
              </span>
            </div>
            <p className="text-base leading-relaxed text-foreground/80 max-w-md">
              An independent software studio of one — designing, engineering,
              and publishing a small number of products with care.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a
                href="mailto:contact@herdoydev.com"
                className="text-sm font-medium link-line break-all"
              >
                contact@herdoydev.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Studio</p>
              <p className="text-sm font-medium">Dhaka, Bangladesh</p>
              <p className="mono text-[11px] tracking-wider text-muted-foreground mt-1">
                GMT+6 · Sun–Thu
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Now</p>
              <p className="text-sm font-medium inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Accepting projects
              </p>
              <p className="mono text-[11px] tracking-wider text-muted-foreground mt-1">
                {year} · q2
              </p>
            </div>
          </div>
        </div>

        {/* Link groups + socials */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 hairline-t pt-10 pb-12">
          <div className="col-span-2 md:col-span-3">
            <p className="eyebrow mb-4">Index</p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-line"
                >
                  Home
                </Link>
              </li>
              {Object.values(groups)
                .flat()
                .slice(0, 2)
                .map((item) => (
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

        {/* Colophon */}
        <div className="hairline-t py-6 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="eyebrow num">
            © {year} herdoydev / all rights reserved
          </p>

          <div className="flex items-center gap-1">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="size-9 inline-flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-sm transition-colors"
              >
                <social.icon className="size-3.5" />
              </a>
            ))}
          </div>

          <p className="eyebrow num hidden md:block">v1.0 · built by hand</p>
        </div>
      </div>
    </footer>
  );
}
