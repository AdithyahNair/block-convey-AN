import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";

export const PrivacyPage: React.FC = () => {
  return (
    <div id="hero" className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="mb-16">
          <div className="text-sm text-gray-600 mb-4">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <h1 className="text-7xl text-gray-900 mb-16">Privacy policy</h1>
        </div>

        {/* Introduction */}
        <div className="text-lg space-y-8 mb-16 text-gray-600">
          <p>
            Welcome to Block Convey! Your privacy is important to us, and we are
            committed to protecting your personal data. This Privacy Policy
            outlines how Block Convey, Inc ("Block Convey," "we," "us," or
            "our") collects, uses, shares, and protects your information when
            you access or use our website, applications, and services
            (collectively, the "Services").
          </p>
          <p>
            By using our Services, you agree to the practices described in this
            Privacy Policy.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              1. Information We Collect
            </h2>
            <div className="text-gray-600 space-y-6">
              <p>
                We collect personal data to provide, improve, and secure our
                Services.
              </p>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  1.1 Information You Provide to Us
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Account Information:</span>{" "}
                    Includes your name, email address, phone number, payment
                    details, and account credentials when you create an account.
                  </li>
                  <li>
                    <span className="font-medium">Content:</span> Any data you
                    upload, such as files, images, or prompts submitted through
                    our Services.
                  </li>
                  <li>
                    <span className="font-medium">
                      Communication Information:
                    </span>{" "}
                    Information you share when contacting support or
                    participating in surveys or events.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  1.2 Information We Collect Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Usage Data:</span> Includes
                    how you interact with our Services, such as the features you
                    use, time spent, and pages visited.
                  </li>
                  <li>
                    <span className="font-medium">Device Information:</span>{" "}
                    Includes IP address, browser type, device type, and
                    operating system.
                  </li>
                  <li>
                    <span className="font-medium">Location Data:</span> General
                    geographic location derived from your IP address.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              2. How We Use Your Information
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Service Delivery:</span> To
                  provide and maintain our Services, process transactions, and
                  authenticate users.
                </li>
                <li>
                  <span className="font-medium">Improvement and Research:</span>{" "}
                  To improve existing features, develop new ones, and conduct
                  internal research.
                </li>
                <li>
                  <span className="font-medium">
                    Security and Fraud Prevention:
                  </span>{" "}
                  To monitor and mitigate unauthorized access and abuse of our
                  Services.
                </li>
                <li>
                  <span className="font-medium">Compliance:</span> To comply
                  with legal and regulatory requirements.
                </li>
                <li>
                  <span className="font-medium">Communication:</span> To send
                  updates, respond to inquiries, and share promotional content
                  when permitted.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              3. Sharing Your Information
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We do not sell your personal data. However, we may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Service Providers:</span> With
                  vendors who assist in providing hosting, analytics, payments,
                  and customer support.
                </li>
                <li>
                  <span className="font-medium">Legal Obligations:</span> When
                  required by law or to protect our rights, users, or the
                  public.
                </li>
                <li>
                  <span className="font-medium">Business Transfers:</span> As
                  part of a merger, acquisition, or sale of assets.
                </li>
                <li>
                  <span className="font-medium">With Your Consent:</span> In
                  cases where you explicitly authorize us to share your
                  information.
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              4. Your Rights
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access: Request access to your personal data.</li>
                <li>Correction: Update or correct inaccurate information.</li>
                <li>Deletion: Request deletion of your data.</li>
                <li>Restriction: Limit how we use your data.</li>
                <li>
                  Data Portability: Request a copy of your data in a portable
                  format.
                </li>
                <li>
                  Objection: Object to data processing for specific purposes.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              5. Data Retention
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We retain your data for as long as necessary to provide our
                Services or fulfill legal obligations. Retention periods may
                vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The type of data collected.</li>
                <li>Legal and regulatory requirements.</li>
                <li>Your account activity and preferences.</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              6. Data Security
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We implement industry-standard security measures to protect your
                information. However, no system is entirely secure. Please take
                precautions to safeguard your credentials and personal data.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              7. International Data Transfers
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We operate globally, and your data may be transferred to and
                processed in countries outside your own. These transfers are
                made in compliance with applicable laws to ensure your data
                remains protected.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              8. Third-Party Services
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Our Services may contain links to third-party websites,
                services, and applications. We are not responsible for the
                privacy practices of these third parties.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              9. Cookies
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We use cookies and similar technologies to improve your browsing
                experience and personalize content. You can manage your cookie
                preferences through your browser settings.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              10. Changes to This Policy
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We may update this Privacy Policy from time to time. If
                significant changes are made, we will notify you by email or
                through the Services. The updated policy will be effective as of
                the date posted.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Questions about privacy?
          </h2>
          <p className="text-gray-600 mb-4">
            For questions or concerns about this Privacy Policy, please contact
            us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
