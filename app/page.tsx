import Head from "next/head";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Portfolio from "./portfolio";
import Services from "./services";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

function Home() {
  return (
    <>
      <Head>
        <title>herdoydev | Custom Websites & Web Apps</title>
        <meta
          name="description"
          content="herdoydev is a web development agency specializing in custom websites, e-commerce solutions, modern web apps, and SEO optimization."
        />
        <meta
          property="og:title"
          content="herdoydev | Custom Websites & Web Apps"
        />
        <meta
          property="og:description"
          content="We build high-performance, SEO-friendly websites using modern technologies like Next.js, React, and WordPress."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
