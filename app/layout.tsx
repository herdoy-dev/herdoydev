import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "herdoydev | Custom Web Development Agency",
  description:
    "herdoydev is a professional web development agency offering custom websites, e-commerce, web apps, CMS, and SEO optimization services.",
  keywords: [
    "web development",
    "custom website",
    "e-commerce development",
    "react development",
    "next.js agency",
    "seo optimization",
    "web apps",
    "wordpress",
    "webflow",
  ],
  openGraph: {
    title: "herdoydev | Custom Web Development Agency",
    description:
      "Professional web development agency delivering custom websites, e-commerce stores, modern web apps, CMS, and SEO services.",
    url: "https://herdoydev.com",
    siteName: "herdoydev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "herdoydev | Custom Web Development Agency",
    description:
      "Professional web development agency delivering custom websites, e-commerce stores, modern web apps, CMS, and SEO services.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
