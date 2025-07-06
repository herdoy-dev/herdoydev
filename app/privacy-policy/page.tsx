export const metadata = {
  title: "Privacy Policy | herdoydev",
  description:
    "Read herdoydev's privacy policy to understand how we collect, use, and protect your personal data. Your privacy is important to us.",
  openGraph: {
    title: "Privacy Policy | herdoydev",
    description:
      "herdoydev is committed to protecting your personal data. Learn more about how we handle your information.",
    type: "website",
    url: "https://herdoydev.com/privacy-policy", // Update to your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | herdoydev",
    description:
      "Learn how herdoydev collects, uses, and safeguards your personal information while using our services.",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        At <strong>herdoydev</strong>, your privacy is of utmost importance to
        us. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website or engage our web
        development services. We are committed to protecting your personal data
        and respecting your privacy.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us
          when contacting us, requesting services, or interacting with our
          website. This information may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Company or organization name</li>
          <li>Details of your project or inquiry</li>
        </ul>
        <p>
          We also collect certain technical information automatically when you
          visit our site, such as IP address, browser type, device information,
          and browsing behavior using cookies and similar technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4">Your information is used to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Respond to your inquiries and provide customer support</li>
          <li>Deliver and manage our web development services</li>
          <li>Improve and personalize your experience on our website</li>
          <li>
            Send you important updates, marketing communications (only if you
            consent)
          </li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information with third
          parties for marketing purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance site
          functionality, analyze site traffic, and improve user experience.
          Cookies may be set by us or by third-party services we use such as
          Google Analytics.
        </p>
        <p>
          You can control cookies through your browser settings and opt out of
          some tracking via third-party tools. Disabling cookies may impact site
          features.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          personal data from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p>
          We may use trusted third-party services to help operate our website,
          such as hosting providers, analytics, and email delivery services.
          These providers have access to personal data only to perform services
          on our behalf and are obligated to keep it confidential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
        <p className="mb-4">
          Depending on your location, you may have rights under applicable data
          protection laws, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>The right to access, correct, or delete your personal data</li>
          <li>The right to withdraw consent where applicable</li>
          <li>The right to object to or restrict processing</li>
          <li>The right to data portability</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information
          below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
        <p>
          Our services are not directed to children under the age of 13 (or
          applicable age in your jurisdiction). We do not knowingly collect
          personal information from children without parental consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this policy from time to time. We encourage you to
          review it periodically. Continued use of our website after changes
          constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or your
          personal data, please contact us at:{" "}
          <a
            href="mailto:contact@herdoydev.com"
            className="text-primary underline"
          >
            contact@herdoydev.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
