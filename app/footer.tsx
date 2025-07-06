import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-10">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href="/" className="text-2xl font-bold text-primary">
            herdoy<span className="text-black">dev</span>
          </Link>
          <p className="mt-2 text-muted-foreground text-sm">
            © {new Date().getFullYear()} herdoydev. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm md:justify-start">
          <Link href="/#services" className="hover:text-primary">
            Services
          </Link>
          <Link href="/#portfolio" className="hover:text-primary">
            Portfolio
          </Link>
          <Link href="/#about" className="hover:text-primary">
            About
          </Link>
          <Link href="/#contact" className="hover:text-primary">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-primary">
            Privacy Policy
          </Link>
        </nav>
      </div>

      {/* Social Icons Section */}
      <div className="mt-8 border-t pt-6">
        <div className="container mx-auto flex justify-center gap-8 text-muted-foreground text-xl">
          <Link
            href="https://www.facebook.com/herdoycode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.linkedin.com/in/herdoydev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/herdoy-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.youtube.com/@herdoycode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-primary transition"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
