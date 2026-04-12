"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-wrapper";

export function ContactForm() {
  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s start a{" "}
            <span className="gradient-text">conversation</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <MotionDiv animation="slide-left" className="lg:col-span-3">
            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="h-11"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="gradient-bg border-0 hover:opacity-90 w-full h-12"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv animation="slide-right" className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                title: "Email",
                detail: "contact@herdoydev.com",
                href: "mailto:contact@herdoydev.com",
              },
              {
                icon: MapPin,
                title: "Location",
                detail: "Dhaka, Bangladesh",
                href: "#",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "+880 1622-465404",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="size-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </a>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
