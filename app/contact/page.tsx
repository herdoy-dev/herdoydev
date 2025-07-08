import Head from "next/head";

import { Contact } from "../contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | herdoydev - Web Development Agency</title>
        <meta
          name="description"
          content="Get in touch with our web development team. We're here to discuss your project and answer any questions."
        />
      </Head>

      <main>
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Get In Touch
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s Build Something Great Together
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Have a project in mind or want to discuss how we can help your
                business? Reach out—we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>
        <Contact />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.132515166022!2d89.11604407447561!3d23.77794808834208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9887c338f683%3A0xa0c8f823b35902c4!2sPeyaratola%2C%20Kushtia!5e0!3m2!1sen!2sbd!4v1720000000000!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Our location on Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
