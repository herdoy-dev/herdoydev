import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Footer } from "./footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Hire Web Developer | Custom Websites & Apps | herdoydev",
    template: "%s | herdoydev - Web Development Experts",
  },
  description:
    "Top-rated web development agency. Hire expert developers for React, Next.js, Node.js, and custom web applications. 100% client satisfaction.",
  keywords: [
    // Hiring Intent
    "hire web developer",
    "freelance web developer",
    "web developer for hire",

    // Technologies
    "React developer",
    "Next.js expert",
    "Node.js developer",
    "full-stack developer",
    "JavaScript developer",
    "TypeScript developer",
    "Python web developer",

    // Services
    "e-commerce development",
    "custom web application",
    "website redesign",
    "responsive web design",
    "CMS development",
    "headless CMS",

    // Business Keywords
    "web development agency",
    "offshore developers",
    "affordable web development",
  ],
  openGraph: {
    title: "Hire Expert Web Developers | Premium Development Services",
    description:
      "Need a professional web developer? We specialize in React, Next.js, and scalable web solutions. Free consultation available.",
    url: "https://herdoydev.com",
    siteName: "herdoydev",
    type: "website",
    images: [
      {
        url: "https://herdoydev.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev team building modern web applications",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "herdoydev | Web Development Experts",
    description:
      "Building fast, scalable web applications with React, Next.js, and modern tech stacks.",
    creator: "@herdoydev",
    images: ["https://herdoydev.com/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://herdoydev.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7106488480723857" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106488480723857"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />

        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />

        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDevelopmentCompany",
              name: "herdoydev",
              url: "https://herdoydev.com",
              logo: "https://herdoydev.com/logo.png",
              description:
                "Professional web development services for businesses and startups.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "00000",
                addressCountry: "Your Country",
              },
              offers: {
                "@type": "Service",
                name: "Web Development",
                description: "Custom website and application development.",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
