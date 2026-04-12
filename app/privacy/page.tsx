import type { Metadata } from "next";
import { MotionDiv } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for herdoydev — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: April 12, 2026
          </p>
        </MotionDiv>

        <MotionDiv animation="fade-up" delay={0.1}>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to herdoydev. We respect your privacy and are committed
                to protecting your personal data. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit our website or use our mobile applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Information:</strong>{" "}
                  Name, email address, and other contact details you provide
                  voluntarily through our contact forms.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong>{" "}
                  Information about how you use our website and applications,
                  including pages visited, time spent, and interactions.
                </li>
                <li>
                  <strong className="text-foreground">Device Information:</strong>{" "}
                  Device type, operating system, browser type, and unique device
                  identifiers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services and applications.</li>
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To send updates about our products and services (with your consent).</li>
                <li>To analyze usage patterns and improve user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Data Sharing & Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your data with trusted service providers who
                assist us in operating our website and applications, subject to
                confidentiality agreements. We may also disclose information when
                required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal data against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Third-Party Services
              </h2>
              <p>
                Our applications may use third-party services such as Google
                Analytics, Firebase, and advertising networks. These services
                have their own privacy policies, and we encourage you to review
                them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request a copy of the data we hold about you.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children.
                If you believe we have collected such information, please contact
                us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
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
