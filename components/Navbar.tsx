"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-4 left-0 right-0 z-50
         bg-white/30 dark:bg-gray-900/30
        backdrop-blur-md
        border border-white/30 dark:border-gray-700/50 rounded-full
        shadow-md
        max-w-7xl md:mx-auto
        px-4 mx-2
      "
    >
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white"
          aria-label="herdoydev homepage"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image src="/logo_light.png" alt="logo" width={120} height={30} />
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
                    ? "bg-blue-600/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400"
                    : "text-gray-800 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        <nav className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-white/90 dark:bg-gray-900/90 rounded-b-xl backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                block rounded-md px-4 py-3 font-medium transition-colors
                ${
                  pathname === link.href
                    ? "bg-blue-600/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block rounded-full bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
