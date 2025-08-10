import Address from "@/components/Address";
import { ContactForm } from "@/components/ContactForm";
import ThemedCard from "@/components/themed-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export function Contact() {
  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <span className="inline-block rounded-full bg-blue-900 px-4 py-2 text-sm font-medium text-blue-400">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have a project in mind or want to discuss how we can help your
            business? Reach out—we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8 text-gray-300">
            <Address />

            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://www.facebook.com/herdoycode",
                    label: "Facebook",
                    icon: <FaFacebookF className="h-4 w-4" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/herdoydev",
                    label: "LinkedIn",
                    icon: <FaLinkedinIn className="h-4 w-4" />,
                  },
                  {
                    href: "https://github.com/herdoy-dev",
                    label: "GitHub",
                    icon: <FaGithub className="h-4 w-4" />,
                  },
                  {
                    href: "https://www.youtube.com/@herdoycode",
                    label: "YouTube",
                    icon: <FaYoutube className="h-4 w-4" />,
                  },
                ].map(({ href, label, icon }) => (
                  <Button
                    key={label}
                    variant="outline"
                    size="icon"
                    className="rounded-full text-gray-300 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      {icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <ThemedCard>
            <ContactForm />
          </ThemedCard>
        </div>
      </div>
    </section>
  );
}
