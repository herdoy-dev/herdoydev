import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "herdoy.dev@gmail.com",
    link: "mailto:herdoy.dev@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm",
    value: "+8801622465404",
    link: "tel:+8801622465404",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "123 Web Dev Avenue, San Francisco, CA 94107",
    link: "https://maps.google.com",
  },
];

export function Contact() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind or want to discuss how we can help your
            business? Reach out—we&apos;d love to hear from you.
          </p>
        </div>

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
  );
}
