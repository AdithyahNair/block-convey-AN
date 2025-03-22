import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";

export const TermsPage: React.FC = () => {
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
          <h1 className="text-7xl text-gray-900 mb-8">Terms of service</h1>
          <p className="text-lg text-gray-600">
            Welcome to Block Convey! These Terms of Service ("Terms") govern
            your access to and use of our website, applications, and services
            (collectively, the "Services") provided by Block Convey, Inc ("Block
            Convey," "we," "us," or "our"). By accessing or using our Services,
            you agree to comply with these Terms. If you do not agree, you may
            not use the Services.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              1. Eligibility
            </h2>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must be at least 18 years old or the age of majority in
                  your jurisdiction to use the Services.
                </li>
                <li>
                  By accessing the Services, you represent and warrant that you
                  meet these eligibility requirements.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              2. Account Creation
            </h2>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To access certain features, you must create an account and
                  provide accurate, complete, and up-to-date information.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and are liable for all activities
                  under your account.
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              3. Acceptable Use
            </h2>
            <div className="text-gray-600 space-y-6">
              <div>
                <p className="mb-2">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Services only for lawful purposes and in compliance
                    with these Terms.
                  </li>
                  <li>
                    Respect the rights of others and refrain from infringing
                    upon intellectual property rights.
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Services for any illegal, harmful, or fraudulent
                    activity.
                  </li>
                  <li>
                    Attempt to interfere with the operation of the Services,
                    including bypassing security measures or reverse-engineering
                    any aspect of the Services.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              4. Services
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Block Convey provides tools for AI governance, blockchain
                integration, and analytics. Specific features and capabilities
                may vary based on your subscription plan.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Modifications:</span> We reserve
                  the right to update, modify, or discontinue the Services at
                  any time without prior notice.
                </li>
                <li>
                  <span className="font-medium">Third-Party Services:</span> The
                  Services may integrate with third-party applications or
                  platforms, which are governed by their own terms and policies.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              5. Fees and Payment
            </h2>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Access to certain features may require a subscription or
                  payment of fees.
                </li>
                <li>Fees are non-refundable unless otherwise specified.</li>
                <li>
                  We reserve the right to modify pricing or subscription plans
                  with reasonable notice.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              6. Intellectual Property
            </h2>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All intellectual property rights in the Services, including
                  software, designs, trademarks, and proprietary information,
                  are owned by Block Convey.
                </li>
                <li>
                  You retain ownership of the content you provide to the
                  Services, but you grant us a non-exclusive license to use it
                  as necessary to provide the Services.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              7. Privacy
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Your use of the Services is subject to our{" "}
                <a href="/privacy" className="text-brand hover:text-brand-dark">
                  Privacy Policy
                </a>
                , which explains how we collect, use, and protect your data. By
                using the Services, you consent to our data practices.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              8. Termination
            </h2>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Block Convey may suspend or terminate your access to the
                  Services for any violation of these Terms or other misconduct.
                </li>
                <li>
                  You may terminate your account at any time by contacting us.
                </li>
                <li>
                  Upon termination, your right to use the Services will cease,
                  and certain provisions of these Terms will survive.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              9. Disclaimer of Warranties
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                The Services are provided "as is" and "as available" without
                warranties of any kind, express or implied, including but not
                limited to merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              10. Limitation of Liability
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Block Convey shall not be liable for indirect, incidental, or
                  consequential damages arising from your use of the Services.
                </li>
                <li>
                  Our total liability shall not exceed the amount you paid for
                  the Services in the 12 months preceding the claim.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Questions about these terms?
          </h2>
          <p className="text-gray-600 mb-4">
            For questions or concerns about these Terms, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
