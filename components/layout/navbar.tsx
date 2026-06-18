"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[120] flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300",
          scrolled
            ? "border border-white/10 bg-ink-950/90 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]"
            : "border border-transparent"
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5" aria-label={siteConfig.name}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 shadow-lg shadow-brand-600/30">
            <Terminal className="h-4.5 w-4.5 text-white" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            herdoy<span className="text-brand-400">dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/8"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Magnetic strength={0.3}>
            <ButtonLink href="/contact" size="sm">
              Start a Project
            </ButtonLink>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[4.5rem] z-[120] origin-top rounded-2xl glass-strong p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" onClick={() => setOpen(false)} className="mt-2 w-full">
              Start a Project
            </ButtonLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
