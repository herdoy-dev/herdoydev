import Head from "next/head";
import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Portfolio } from "./portfolio";
import { Services } from "./services";
import { Testimonials } from "./testimonials";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

function Home() {
  return (
    <>
      <Head>
        <title>herdoydev | Premium Web Development Solutions</title>
        <meta
          name="description"
          content="herdoydev is a premier web development agency crafting custom websites, e-commerce platforms, and high-performance web applications with cutting-edge technologies."
        />
        <meta
          name="keywords"
          content="web development, custom website, e-commerce, react development, next.js, SEO optimization, web apps, wordpress, webflow"
        />
        <link rel="canonical" href="https://herdoydev.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://herdoydev.com" />
        <meta
          property="og:title"
          content="herdoydev | Premium Web Development Solutions"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with our expert web development services. From concept to deployment, we deliver exceptional results."
        />
        <meta
          property="og:image"
          content="https://herdoydev.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://herdoydev.com" />
        <meta
          name="twitter:title"
          content="herdoydev | Premium Web Development Solutions"
        />
        <meta
          name="twitter:description"
          content="Partner with herdoydev for cutting-edge web development services that drive business growth."
        />
        <meta
          name="twitter:image"
          content="https://herdoydev.com/twitter-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default Home;
