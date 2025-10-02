import Link from "next/link";
import { Mail, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">herdoydev</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Building modern websites & smart AI-powered solutions that help
              businesses grow and thrive in the digital world.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>for innovation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              {/* Email */}
              <Link
                href="mailto:herdoy.dev@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>herdoy.dev@gmail.com</span>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/herdoydev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className="border-t py-3 flex items-center justify-center">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © 2025 herdoydev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
