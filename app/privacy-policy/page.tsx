export const metadata = {
  title: "Privacy Policy | herdoydev - Web Development Agency",
  description:
    "herdoydev's comprehensive privacy policy detailing how we collect, use, and protect your personal data in compliance with GDPR, CCPA, and other privacy regulations.",
  keywords: [
    "web development privacy policy",
    "data protection",
    "GDPR compliance",
    "website privacy",
    "herdoydev privacy",
  ],
  openGraph: {
    title: "Privacy Policy | herdoydev - Web Development Agency",
    description:
      "Learn how herdoydev protects your personal data in compliance with international privacy standards.",
    type: "website",
    url: "https://herdoydev.com/privacy-policy",
    images: [
      {
        url: "https://herdoydev.com/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | herdoydev - Web Development Agency",
    description:
      "Your privacy matters. See how herdoydev handles your data with transparency and care.",
    images: ["https://herdoydev.com/twitter-privacy.jpg"],
  },
  alternates: {
    canonical: "https://herdoydev.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const effectiveDate = "January 1, 2023";
  const lastUpdated = "July 07, 2025";

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
        </p>
      </div>

      <div className="prose prose-lg prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Introduction
          </h2>
          <p className="mb-6">
            At <strong>herdoydev</strong> we are committed to protecting your
            privacy and handling your personal data with transparency and care.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Visit our website (herdoydev.com)</li>
            <li>Engage our web development services</li>
            <li>Interact with us through any communication channels</li>
            <li>Use any of our digital products or services</li>
          </ul>
          <p>
            By accessing or using our services, you agree to the terms of this
            Privacy Policy. If you do not agree with our policies and practices,
            please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            1. Information We Collect
          </h2>
          <h3 className="text-xl font-medium mb-3 mt-6">
            1.1 Personal Information You Provide
          </h3>
          <p className="mb-4">
            We collect personal information that you voluntarily provide when:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Submitting contact forms or service inquiries</li>
            <li>Registering for an account (if applicable)</li>
            <li>Subscribing to our newsletter</li>
            <li>Engaging our professional services</li>
            <li>Participating in surveys or promotions</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">
            1.2 Information Collected Automatically
          </h3>
          <p className="mb-4">
            When you visit our website, we automatically collect certain
            technical information including:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>IP address and device identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">
            1.3 Cookies and Tracking Technologies
          </h3>
          <p>
            We use cookies, web beacons, and similar technologies to enhance
            user experience, analyze trends, and administer the website. You can
            control cookies through your browser settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We process your personal data for the following purposes:
          </p>
          <table className="min-w-full mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Purpose
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Legal Basis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">
                  Service delivery and contract fulfillment
                </td>
                <td className="px-4 py-3">Performance of contract</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  Customer support and communication
                </td>
                <td className="px-4 py-3">Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Website improvement and analytics</td>
                <td className="px-4 py-3">Consent (where required)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Marketing communications</td>
                <td className="px-4 py-3">Consent</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  Legal compliance and fraud prevention
                </td>
                <td className="px-4 py-3">Legal obligation</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            3. Data Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> With trusted third parties who
              assist in our operations (hosting, analytics, payment processing)
              under strict confidentiality agreements.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights and safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with any
              merger, acquisition, or asset sale.
            </li>
          </ul>
          <p>
            We do not sell your personal information to third parties for
            marketing purposes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            4. International Data Transfers
          </h2>
          <p>
            As a global web development agency, we may transfer and process your
            personal data outside your country of residence. We implement
            appropriate safeguards (such as Standard Contractual Clauses) to
            ensure your data remains protected according to this policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            5. Data Security
          </h2>
          <p className="mb-4">
            We implement robust security measures including:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Access controls and authentication measures</li>
            <li>Employee privacy and security training</li>
          </ul>
          <p>
            While we strive to protect your personal data, no security system is
            impenetrable. We cannot guarantee absolute security but will
            promptly notify you of any breaches as required by law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            6. Your Privacy Rights
          </h2>
          <p className="mb-4">
            Depending on your jurisdiction, you may have the following rights:
          </p>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Access & Portability</h3>
              <p>Request a copy of your personal data in a structured format</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Correction</h3>
              <p>Update or correct inaccurate personal information</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Deletion</h3>
              <p>
                Request erasure of your personal data under certain conditions
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Objection</h3>
              <p>Object to processing of your personal data</p>
            </div>
          </div>
          <p>
            To exercise these rights, please contact us using the information
            below. We may need to verify your identity before processing your
            request.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our services are not directed to individuals under 16 (or higher age
            depending on jurisdiction). We do not knowingly collect personal
            information from children without parental consent. If we become
            aware of such collection, we will take steps to delete the
            information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            8. Policy Updates
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. The &quot;Last
            Updated&quot; date at the top indicates when revisions were made.
            Material changes will be communicated through prominent notices on
            our website or direct notifications.
          </p>
          <p>
            We encourage you to review this policy regularly to stay informed
            about how we protect your information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            9. Contact Information
          </h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy or wish
            to exercise your privacy rights, please contact our Data Protection
            Officer at:
          </p>
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
          <p>
            For EU/UK residents, you may also lodge a complaint with your local
            data protection authority.
          </p>
        </section>
      </div>
    </main>
  );
}
