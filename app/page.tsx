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
        {/* Primary Meta Tags */}
        <title>Hire Web Developer | React & Next.js Experts | herdoydev</title>
        <meta
          name="description"
          content="Looking to hire a web developer? herdoydev delivers top-tier React, Next.js, and Node.js solutions for startups & enterprises. Get a free quote today."
        />
        <meta
          name="keywords"
          content="hire web developer, React developer, Next.js expert, custom web development, e-commerce developer, freelance web developer, web development agency, affordable web design"
        />
        <link rel="canonical" href="https://herdoydev.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://herdoydev.com" />
        <meta
          property="og:title"
          content="Hire Top Web Developers | React & Next.js Specialists"
        />
        <meta
          property="og:description"
          content="Need a professional web developer? We build fast, scalable websites and apps with React, Next.js, and modern stacks. 100% client satisfaction."
        />
        <meta
          property="og:image"
          content="https://herdoydev.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="herdoydev team building a web application"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@herdoydev" />
        <meta name="twitter:url" content="https://herdoydev.com" />
        <meta
          name="twitter:title"
          content="Hire Web Developers | React & Next.js Experts"
        />
        <meta
          name="twitter:description"
          content="Professional web development services for businesses. Specializing in React, Next.js, and custom web solutions."
        />
        <meta
          name="twitter:image"
          content="https://herdoydev.com/twitter-image.jpg"
        />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* PWA Splash Screens */}
        <link rel="apple-touch-startup-image" href="/splash-screen.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "herdoydev",
            image: "https://herdoydev.com/logo.png",
            url: "https://herdoydev.com",
            telephone: "+1234567890",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "00000",
              addressCountry: "Your Country",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "00.0000",
              longitude: "00.0000",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: [
              "https://twitter.com/herdoydev",
              "https://linkedin.com/company/herdoydev",
            ],
          })}
        </script>
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
