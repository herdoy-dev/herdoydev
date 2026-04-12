import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon, XIcon, LinkedInIcon } from "@/components/icons";

const footerLinks = {
  Product: [
    { label: "Our Apps", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  Connect: [
    { label: "GitHub", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

const socialIcons = [
  { icon: GitHubIcon, href: "#", label: "GitHub" },
  { icon: XIcon, href: "#", label: "Twitter" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@herdoydev.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 group mb-4">
                <div className="gradient-bg rounded-lg p-1.5">
                  <Code2 className="size-5 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  herdoy<span className="gradient-text">dev</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Building apps that solve real-world problems. From idea to
                launch, we craft scalable mobile experiences.
              </p>
              <div className="flex gap-3 mt-5">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="opacity-50" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} herdoydev. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with passion in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
