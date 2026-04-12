import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { MotionDiv } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Contact Us | herdoydev",
  description:
    "Get in touch with herdoydev for custom app development, collaborations, or any inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv animation="fade-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Get in Touch
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                We&apos;d love to{" "}
                <span className="gradient-text">hear from you</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Whether you have a project idea, need custom development, or
                just want to say hello — drop us a message and we&apos;ll get
                back to you as soon as possible.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
