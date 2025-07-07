export const metadata = {
  title: "Terms of Service | herdoydev - Web Development Agency",
  description:
    "Legal terms governing the use of herdoydev's website and services. Read our terms before engaging our web development services.",
  keywords: [
    "web development terms",
    "website terms of service",
    "development agency terms",
    "herdoydev legal terms",
    "service agreement",
  ],
  openGraph: {
    title: "Terms of Service | herdoydev - Web Development Agency",
    description:
      "Legal terms governing your use of herdoydev's services and website.",
    type: "website",
    url: "https://herdoydev.com/terms-of-service",
    images: [
      {
        url: "https://herdoydev.com/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | herdoydev - Web Development Agency",
    description:
      "Understand the terms governing your relationship with herdoydev.",
    images: ["https://herdoydev.com/twitter-terms.jpg"],
  },
  alternates: {
    canonical: "https://herdoydev.com/terms-of-service",
  },
};

export default function TermsOfService() {
  const effectiveDate = "January 1, 2023";
  const lastUpdated = "June 15, 2024";

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600">
          Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
        </p>
      </div>

      <div className="prose prose-lg prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By accessing or using the website and services of{" "}
            <strong>herdoydev</strong> you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree to these Terms, you
            must not use our website or engage our services.
          </p>
          <p>
            These Terms, along with our Privacy Policy and any service-specific
            agreements, constitute the entire agreement between you and
            herdoydev regarding our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            2. Services Overview
          </h2>
          <p className="mb-4">
            herdoydev provides professional web development services including
            but not limited to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Custom website design and development</li>
            <li>E-commerce solutions</li>
            <li>Web application development</li>
            <li>Content management system implementation</li>
            <li>Website maintenance and support</li>
          </ul>
          <p>
            Specific project terms, scope, deliverables, and pricing will be
            outlined in separate Statements of Work or Service Agreements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            3. Client Responsibilities
          </h2>
          <p className="mb-4">As a client, you agree to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Provide accurate and complete information necessary for project
              execution
            </li>
            <li>
              Make timely decisions and provide feedback during the development
              process
            </li>
            <li>
              Supply all required materials (content, images, branding assets)
              in agreed formats
            </li>
            <li>
              Designate a single point of contact for project communications
            </li>
            <li>Make timely payments as specified in your service agreement</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            4. Intellectual Property
          </h2>
          <h3 className="text-xl font-medium mb-3 mt-6">
            4.1 Client Materials
          </h3>
          <p className="mb-4">
            You retain ownership of all content, data, and materials you provide
            to us. You grant us a limited license to use these materials solely
            for the purpose of providing our services.
          </p>

          <h3 className="text-xl font-medium mb-3">4.2 Deliverables</h3>
          <p className="mb-4">
            Upon full payment, ownership of the final deliverables specified in
            your service agreement will transfer to you, excluding:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Third-party components (licensed separately)</li>
            <li>Proprietary tools or frameworks we developed</li>
            <li>
              Any pre-existing intellectual property we owned prior to the
              project
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-3">
            4.3 Our Proprietary Rights
          </h3>
          <p>
            We retain all rights to our methodologies, tools, templates, and any
            generic code or design elements not specific to your project. We may
            reuse these for other clients.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            5. Payments and Fees
          </h2>
          <p className="mb-4">Our standard payment terms are:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>50% deposit required to commence work</li>
            <li>Final payment due upon project completion before delivery</li>
            <li>
              Additional fees may apply for scope changes or additional requests
            </li>
          </ul>
          <p className="mb-4">
            Late payments may incur interest at 1.5% per month or the maximum
            rate allowed by law.
          </p>
          <p>
            All fees are non-refundable except as expressly stated in your
            service agreement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            6. Project Timeline and Revisions
          </h2>
          <p className="mb-4">
            Project timelines will be established in your service agreement.
            While we strive to meet all deadlines:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Delays in client feedback or material provision may impact
              timelines
            </li>
            <li>We include X rounds of revisions in our standard packages</li>
            <li>Additional revisions may incur additional fees</li>
          </ul>
          <p>
            We are not liable for delays caused by factors beyond our reasonable
            control.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            7. Confidentiality
          </h2>
          <p className="mb-4">
            Both parties agree to maintain the confidentiality of all
            proprietary information received during the engagement. This
            obligation continues for 3 years after project completion.
          </p>
          <p>
            Confidential information excludes information that is or becomes
            publicly available through no breach of these Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            8. Warranties and Limitations
          </h2>
          <h3 className="text-xl font-medium mb-3 mt-6">8.1 Our Warranties</h3>
          <p className="mb-4">
            We warrant that our services will be performed in a professional
            manner consistent with industry standards. For websites we develop,
            we provide a 30-day warranty period to correct any defects in our
            workmanship.
          </p>

          <h3 className="text-xl font-medium mb-3">8.2 Client Warranties</h3>
          <p className="mb-4">You warrant that:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>You have the legal right to all materials you provide</li>
            <li>Your content does not infringe any third-party rights</li>
            <li>You will comply with all applicable laws and regulations</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">8.3 Limitations</h3>
          <p className="mb-4">
            Except as expressly provided herein, we disclaim all other
            warranties, express or implied. Our liability is limited to the fees
            you paid for the specific services giving rise to the claim.
          </p>
          <p>
            We are not liable for indirect, incidental, or consequential
            damages, including lost profits.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            9. Termination
          </h2>
          <p className="mb-4">
            Either party may terminate a project with written notice under these
            conditions:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              For cause: 15 days after written notice of material breach if
              uncured
            </li>
            <li>
              For convenience: With 30 days written notice, subject to payment
              for work completed
            </li>
          </ul>
          <p>
            Upon termination, you will pay for all services rendered and
            expenses incurred up to the termination date. We will deliver all
            completed work product.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            10. Third-Party Services
          </h2>
          <p className="mb-4">
            Our services may integrate with or depend on third-party services
            (hosting, CMS platforms, payment processors). These services have
            their own terms and policies:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>You are responsible for complying with their terms</li>
            <li>
              We are not liable for their actions or service interruptions
            </li>
            <li>Any associated fees are your responsibility</li>
          </ul>
          <p>
            We will advise you of any ongoing third-party costs during project
            planning.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            11. General Provisions
          </h2>
          <h3 className="text-xl font-medium mb-3 mt-6">11.1 Governing Law</h3>
          <p className="mb-4">
            These Terms shall be governed by the laws of [Your State/Country],
            without regard to its conflict of laws principles.
          </p>

          <h3 className="text-xl font-medium mb-3">11.2 Dispute Resolution</h3>
          <p className="mb-4">
            Any disputes shall first attempt to be resolved through good faith
            negotiations. If unresolved, disputes shall be settled by binding
            arbitration in [Your City], except that either party may seek
            injunctive relief in court.
          </p>

          <h3 className="text-xl font-medium mb-3">11.3 Amendments</h3>
          <p className="mb-4">
            We may modify these Terms at any time. Continued use of our services
            after changes constitutes acceptance of the modified Terms.
          </p>

          <h3 className="text-xl font-medium mb-3">11.4 Entire Agreement</h3>
          <p>
            These Terms, along with any service agreements, constitute the
            entire understanding between the parties regarding the subject
            matter herein.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            12. Contact Information
          </h2>
          <address className="not-italic mb-6">
            <strong>herdoydev</strong>
            <br />
            Attn: Privacy Officer
            <br />
            18 Sonar Bangla Road
            <br />
            Peyaratola, Kushtia Sadar, 7000
            <br />
            Email:{" "}
            <a
              href="mailto:herdoy.dev@gmail.com"
              className="text-blue-600 hover:underline"
            >
              herdoy.dev@gmail.com
            </a>
            <br />
            Phone: +18801408127781
          </address>
        </section>
      </div>
    </main>
  );
}
