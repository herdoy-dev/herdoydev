import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://herdoydev.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "herdoydev — Code. Ship. Impact.",
    template: "%s | herdoydev",
  },
  description:
    "herdoydev builds mobile applications that solve real-world problems — AI, health, fintech, productivity, and more.",
  keywords: [
    "mobile apps",
    "app development",
    "herdoydev",
    "android apps",
    "AI apps",
    "fintech apps",
    "health apps",
    "custom app development",
    "mobile app developer",
    "react native developer",
    "full stack developer",
    "app development company",
    "google play store apps",
    "productivity apps",
  ],
  authors: [{ name: "Herdoy Almamun", url: siteUrl }],
  creator: "herdoydev",
  publisher: "herdoydev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "herdoydev",
    title: "herdoydev — Code. Ship. Impact.",
    description:
      "We build mobile applications that solve real-world problems — AI, health, fintech, productivity, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "herdoydev — Code. Ship. Impact.",
    description:
      "We build mobile applications that solve real-world problems — AI, health, fintech, productivity, and more.",
    creator: "@herdoydev",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
