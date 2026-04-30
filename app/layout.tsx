import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://herdoydev.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "herdoydev — Independent software studio",
    template: "%s · herdoydev",
  },
  description:
    "herdoydev is an independent software studio designing and shipping mobile and web products — quietly, deliberately.",
  keywords: [
    "software studio",
    "independent studio",
    "mobile apps",
    "app development",
    "herdoydev",
    "react native developer",
    "next.js developer",
    "fullstack developer",
    "product studio",
    "design and engineering",
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
    title: "herdoydev — Independent software studio",
    description:
      "An independent software studio designing and shipping mobile and web products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "herdoydev — Independent software studio",
    description:
      "An independent software studio designing and shipping mobile and web products.",
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
        plexSans.variable,
        plexMono.variable,
        instrumentSerif.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col selection:bg-foreground selection:text-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
