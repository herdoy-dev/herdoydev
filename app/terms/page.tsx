import type { Metadata } from "next";
import { MotionDiv } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for herdoydev — the rules and guidelines for using our website and applications.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | herdoydev",
    description: "Terms of Service for herdoydev — the rules and guidelines for using our website and applications.",
    url: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: April 12, 2026
          </p>
        </MotionDiv>

        <MotionDiv animation="fade-up" delay={0.1}>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the herdoydev website and mobile
                applications, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Description of Services
              </h2>
              <p>
                herdoydev provides mobile applications across multiple domains
                including AI, health, fintech, and productivity. We also offer
                custom app development services for businesses and individuals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. User Accounts
              </h2>
              <p>
                Some of our applications may require you to create an account.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Acceptable Use
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our services for any unlawful purpose.</li>
                <li>Attempt to gain unauthorized access to our systems or networks.</li>
                <li>Interfere with or disrupt the integrity of our services.</li>
                <li>Upload malicious code, viruses, or harmful content.</li>
                <li>Reverse engineer, decompile, or disassemble our applications.</li>
                <li>Reproduce, distribute, or create derivative works without permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of our website and
                applications — including text, graphics, logos, icons, images,
                and software — are the exclusive property of herdoydev and are
                protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Custom Development Services
              </h2>
              <p>
                For custom development projects, specific terms including scope,
                timeline, payment, and intellectual property ownership will be
                outlined in a separate agreement between herdoydev and the
                client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without warranties of any kind, either express
                or implied. We do not warrant that our services will be
                uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, herdoydev shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or relating to your use of our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to our
                services at any time, without prior notice, for conduct that we
                believe violates these Terms of Service or is harmful to other
                users or our business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Bangladesh, without regard to its conflict of
                law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                11. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting.
                Continued use of our services constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                12. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:contact@herdoydev.com"
                  className="text-primary hover:underline"
                >
                  contact@herdoydev.com
                </a>
                .
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
