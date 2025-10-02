"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        !mobileMenuOpen && "border border-primary",
        mobileMenuOpen && " pb-6",
        "fixed top-4 left-0 right-0 rounded-4xl z-50 bg-background/40 backdrop-blur-md shadow-sm max-w-7xl md:mx-auto px-4 mx-2"
      )}
    >
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-foreground"
          aria-label="herdoydev homepage"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image src="/logo.png" width={150} height={60} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                rounded-full px-4 py-2 text-sm font-medium transition-colors
                ${
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:bg-primary/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-2 px-4 py-4 space-y-2  bg-background/40 backdrop-blur-md rounded-2xl border border-primary">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                block rounded-full px-4 py-3 font-medium transition-colors
                ${
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block rounded-full bg-primary px-4 py-3 text-center font-medium text-primary-foreground hover:bg-primary/90"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
