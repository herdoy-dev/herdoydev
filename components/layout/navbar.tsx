"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Index", num: "01" },
  { href: "/about", label: "Studio", num: "02" },
  { href: "/products", label: "Catalogue", num: "03" },
  { href: "/services", label: "Practice", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background,border] duration-200",
        scrolled
          ? "bg-background/85 backdrop-blur-md hairline-b"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16">
          {/* Mark */}
          <Link
            href="/"
            className="flex items-center gap-3 group/mark"
            aria-label="herdoydev — home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              priority
              className="size-7"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-medium tracking-tight">
                herdoydev
              </span>
              <span className="eyebrow hidden sm:inline-block translate-y-[-1px]">
                / studio
              </span>
            </div>
          </Link>

          {/* Center nav — desktop only */}
          <ul className="hidden md:flex items-center justify-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative inline-flex items-baseline gap-1.5 px-3 py-2 text-sm transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="mono num text-[10px] tracking-widest text-muted-foreground/70 group-hover:text-foreground/60 transition-colors">
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                    {active && (
                      <motion.span
                        layoutId="navbar-mark"
                        className="absolute -bottom-px left-3 right-3 h-px bg-foreground"
                        transition={{ type: "spring", stiffness: 400, damping: 36 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center justify-end gap-4">
            <span className="eyebrow num hidden lg:inline">
              {new Date().getFullYear()} · v1
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 h-9 hairline rounded-sm bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start a project
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden col-start-3 size-9 inline-flex items-center justify-center hairline rounded-sm hover:bg-muted/60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden hairline-t bg-background"
          >
            <ul className="px-5 py-4 divide-y divide-border">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-baseline gap-3 py-3 text-base",
                        active ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      <span className="mono num text-[11px] tracking-widest text-muted-foreground/70 w-6">
                        {link.num}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="px-5 pb-5">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 h-11 bg-foreground text-background text-sm font-medium rounded-sm"
              >
                Start a project
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
