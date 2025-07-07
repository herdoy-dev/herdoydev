import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "contact@herdoydev.com",
    link: "mailto:contact@herdoydev.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "123 Web Dev Avenue, San Francisco, CA 94107",
    link: "https://maps.google.com",
  },
];

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
        {/* Contact Hero */}
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

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Methods */}
              <div className="space-y-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="rounded-lg bg-blue-50 p-3 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {method.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{method.description}</p>
                      <Button
                        variant="link"
                        className="mt-2 p-0 text-blue-600 hover:text-blue-800"
                        asChild
                      >
                        <Link href={method.link}>{method.value}</Link>
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <Link
                        href="https://www.facebook.com/herdoycode"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <FaFacebookF className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <Link
                        href="https://www.linkedin.com/in/herdoydev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <Link
                        href="https://github.com/herdoy-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <Link
                        href="https://www.youtube.com/@herdoycode"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <FaYoutube className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
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
