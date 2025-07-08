import Link from "next/link";

export const metadata = {
  title: "Cookies Policy | herdoydev - Web Development Agency",
  description:
    "Learn how herdoydev uses cookies and similar technologies to enhance your website experience. Manage your cookie preferences.",
  keywords: [
    "website cookies policy",
    "GDPR cookies compliance",
    "web development cookies",
    "cookie consent",
    "herdoydev cookies",
  ],
  openGraph: {
    title: "Cookies Policy | herdoydev - Web Development Agency",
    description:
      "Information about how we use cookies and tracking technologies on our website.",
    type: "website",
    url: "https://herdoydev.com/cookies-policy",
    images: [
      {
        url: "https://herdoydev.com/og-cookies.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Cookies Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | herdoydev - Web Development Agency",
    description:
      "Understand how we use cookies to improve your browsing experience.",
    images: ["https://herdoydev.com/twitter-cookies.jpg"],
  },
  alternates: {
    canonical: "https://herdoydev.com/cookies-policy",
  },
};

export default function CookiesPolicy() {
  const lastUpdated = "June 15, 2024";

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Cookies Policy</h1>
        <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-lg prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            1. Introduction
          </h2>
          <p className="mb-6">
            This Cookies Policy explains how <strong>herdoydev</strong> uses
            cookies and similar tracking technologies when you visit our website{" "}
            <Link
              href="www.herdoydev.com"
              target="_blank"
              className="font-semibold text-primary"
            >
              herdoydev.com
            </Link>{" "}
            By using our website, you consent to the use of cookies in
            accordance with this policy.
          </p>
          <p>
            We may update this policy from time to time. The &quot;Last
            Updated&quot; date at the top indicates when revisions were made. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            2. What Are Cookies?
          </h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device
            (computer, smartphone, tablet) when you visit a website. They are
            widely used to make websites work more efficiently and provide
            information to website owners.
          </p>
          <p>
            Similar technologies include web beacons, pixels, and local storage,
            which we may also use for the purposes described in this policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            3. How We Use Cookies
          </h2>
          <p className="mb-4">We use cookies for the following purposes:</p>
          <table className="min-w-full mb-6 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                  Purpose
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 border-b font-medium">Essential</td>
                <td className="px-4 py-3 border-b">
                  Necessary for the website to function (e.g., security,
                  authentication)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-medium">Performance</td>
                <td className="px-4 py-3 border-b">
                  Help us understand how visitors interact with our site (e.g.,
                  analytics)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-medium">
                  Functionality
                </td>
                <td className="px-4 py-3 border-b">
                  Remember your preferences and settings (e.g., language,
                  region)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-medium">Marketing</td>
                <td className="px-4 py-3 border-b">
                  Used for advertising and targeting purposes (only with
                  consent)
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            4. Types of Cookies We Use
          </h2>
          <h3 className="text-xl font-medium mb-3 mt-6">
            4.1 First-Party Cookies
          </h3>
          <p className="mb-4">
            These are set by our website and can only be read by our site:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Session cookies:</strong> Temporary cookies that expire
              when you close your browser
            </li>
            <li>
              <strong>Persistent cookies:</strong> Remain on your device for a
              set period or until deleted
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-3">4.2 Third-Party Cookies</h3>
          <p className="mb-4">
            These are set by third-party services we use, such as:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Google Analytics (performance tracking)</li>
            <li>Hotjar (user behavior analysis)</li>
            <li>Facebook Pixel (advertising effectiveness)</li>
            <li>LinkedIn Insight Tag (marketing analytics)</li>
          </ul>
          <p>
            Third-party cookies are subject to the respective privacy policies
            of these providers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            5. Cookie Duration
          </h2>
          <p className="mb-4">
            Cookies remain on your device for different periods:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Session cookies:</strong> Expire when you close your
              browser
            </li>
            <li>
              <strong>Persistent cookies:</strong> Remain from 24 hours up to 2
              years depending on purpose
            </li>
          </ul>
          <p>
            Each cookie served will have its own expiration period listed in
            your browser&apos;s cookie settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            6. Managing Cookie Preferences
          </h2>
          <h3 className="text-xl font-medium mb-3 mt-6">
            6.1 Browser Settings
          </h3>
          <p className="mb-4">
            You can control and manage cookies through your browser settings:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Delete existing cookies</li>
            <li>Block all or certain types of cookies</li>
            <li>Set preferences for when cookies are set</li>
          </ul>
          <p className="mb-4">
            Note that blocking essential cookies may affect website
            functionality.
          </p>

          <h3 className="text-xl font-medium mb-3">
            6.2 Our Cookie Consent Tool
          </h3>
          <p className="mb-4">
            When you first visit our website, you&apos;ll see a cookie consent
            banner where you can:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize your cookie preferences</li>
          </ul>
          <p>
            You can change your preferences at any time by clicking the
            &quot;Cookie Settings&quot; link in our footer.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            7. Specific Cookies We Use
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full mb-6 border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Cookie Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Provider
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Purpose
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 border-b">_ga</td>
                  <td className="px-4 py-3 border-b">Google Analytics</td>
                  <td className="px-4 py-3 border-b">
                    Distinguishes unique users
                  </td>
                  <td className="px-4 py-3 border-b">2 years</td>
                  <td className="px-4 py-3 border-b">Performance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">_gid</td>
                  <td className="px-4 py-3 border-b">Google Analytics</td>
                  <td className="px-4 py-3 border-b">
                    Identifies user sessions
                  </td>
                  <td className="px-4 py-3 border-b">24 hours</td>
                  <td className="px-4 py-3 border-b">Performance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">cookie_consent</td>
                  <td className="px-4 py-3 border-b">herdoydev</td>
                  <td className="px-4 py-3 border-b">
                    Stores cookie preferences
                  </td>
                  <td className="px-4 py-3 border-b">1 year</td>
                  <td className="px-4 py-3 border-b">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">_fbp</td>
                  <td className="px-4 py-3 border-b">Facebook</td>
                  <td className="px-4 py-3 border-b">
                    Ad delivery measurement
                  </td>
                  <td className="px-4 py-3 border-b">3 months</td>
                  <td className="px-4 py-3 border-b">Marketing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">li_gc</td>
                  <td className="px-4 py-3 border-b">LinkedIn</td>
                  <td className="px-4 py-3 border-b">
                    Stores consent preferences
                  </td>
                  <td className="px-4 py-3 border-b">2 years</td>
                  <td className="px-4 py-3 border-b">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            This list may change as we update our services. For the most current
            information, please check your browser&apos;s cookie inspection
            tool.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            8. Do Not Track Signals
          </h2>
          <p className="mb-4">
            Some browsers offer a &quot;Do Not Track&quot; (DNT) feature that
            signals your preference not to be tracked across websites.
            Currently, our website does not respond to DNT signals because no
            common industry standard for DNT has been adopted.
          </p>
          <p>
            However, you can control tracking through the cookie management
            options described above.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            9. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Cookies Policy to reflect changes in:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>The cookies and technologies we use</li>
            <li>Legal or regulatory requirements</li>
            <li>Our services and business practices</li>
          </ul>
          <p>
            We will notify you of significant changes through our website or
            other communication channels.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            10. Contact Us
          </h2>
          <p className="mb-4">
            If you have questions about this Cookies Policy or our use of
            tracking technologies, please contact us at:
          </p>
          <address className="not-italic mb-6">
            <strong>herdoydev</strong>
            <br />
            Attn: Privacy Officer
            <br />
            18 Sonar Bangla Road
            <br />
            Peyaratola, Kushtia Sadar, Kushtia 7000
            <br />
            Email:{" "}
            <a
              href="mailto:herdoy.dev@gmail.com"
              className="text-blue-600 hover:underline"
            >
              herdoy.dev@gmail.com
            </a>
            <br />
            Phone: +18801622465404
          </address>
        </section>
      </div>
    </main>
  );
}
