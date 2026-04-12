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

export const metadata: Metadata = {
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
    "fintech",
    "health apps",
    "custom development",
  ],
  authors: [{ name: "herdoydev" }],
  creator: "herdoydev",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "herdoydev",
    title: "herdoydev — Code. Ship. Impact.",
    description:
      "Building mobile applications that solve real-world problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "herdoydev — Code. Ship. Impact.",
    description:
      "Building mobile applications that solve real-world problems.",
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
