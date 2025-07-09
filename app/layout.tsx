import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Footer } from "./footer";
import "./globals.css";
import Script from "next/script";

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
  title: {
    default: "herdoydev | Premium Web Development Solutions",
    template: "%s | herdoydev",
  },
  description:
    "Transform your digital presence with herdoydev - a leading web development agency specializing in high-performance websites, e-commerce solutions, and custom web applications.",
  keywords: [
    "web development agency",
    "custom website development",
    "e-commerce solutions",
    "react next.js experts",
    "seo optimized websites",
    "enterprise web applications",
    "headless CMS development",
    "responsive web design",
    "performance optimization",
    "web development consultancy",
  ],
  openGraph: {
    title: "herdoydev | Premium Web Development Solutions",
    description:
      "Partner with herdoydev for cutting-edge web development services that drive results. From concept to deployment, we deliver exceptional digital experiences.",
    url: "https://herdoydev.com",
    siteName: "herdoydev",
    type: "website",
    images: [
      {
        url: "https://herdoydev.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev - Web Development Agency",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "herdoydev | Premium Web Development Solutions",
    description:
      "Expert web development services tailored to your business needs. Let's build something remarkable together.",
    creator: "@herdoydev",
    images: ["https://herdoydev.com/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Chatbase Script */}
        <Script id="chatbase-script" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="EzjgCYNBOzKGiouzgN3xx";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){
                onLoad()
              }else{
                window.addEventListener("load",onLoad)
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
