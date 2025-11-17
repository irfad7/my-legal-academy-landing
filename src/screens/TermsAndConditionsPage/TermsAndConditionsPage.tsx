import React from "react";
import { Link } from "react-router-dom";
import { trackPageView } from "../../utils/analytics";

export const TermsAndConditionsPage = (): JSX.Element => {
  React.useEffect(() => {
    trackPageView('Terms and Conditions Page');
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#070513] via-[#431a78] to-[#070513]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        <div className="bg-white rounded-[12px] shadow-[0_8px_32px_rgba(7,5,19,0.3)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mb-8">
            <Link to="/" className="text-[#9779fc] hover:text-[#7d5ef0] transition-colors [font-family:'Playfair_Display',serif]">
              ← Back to Home
            </Link>
          </div>

          <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
            Terms and Conditions
          </h1>

          <div className="space-y-6 md:space-y-8 [font-family:'Playfair_Display',serif] text-[#070513]">
            <div>
              <p className="text-sm text-[#4d5256] mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm text-[#4d5256] mb-6">
                <strong>Company:</strong> My Legal Academy dba Redwood Meridian LLC<br />
                <strong>Address:</strong> 21550 Oxnard Street, 3rd Floor, Suite 5021, Woodland Hills, CA 91367<br />
                <strong>Email:</strong> privacy@mylegalacademy.com
              </p>
            </div>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">1. Agreement to Terms</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                By accessing or using the services of My Legal Academy dba Redwood Meridian LLC ("we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">2. Services</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                My Legal Academy provides marketing, automation, and business development services for law firms. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Marketing strategy and implementation</li>
                <li>Lead generation and intake automation</li>
                <li>AI-powered communication tools</li>
                <li>Business consulting and planning services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">3. Enrollment and Payment</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                Enrollment in our programs is subject to availability and our approval. Payment terms are as specified at the time of enrollment. All fees are non-refundable except as expressly stated in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">4. AI-Powered Services and Communications</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                <strong>AI Communication Clauses:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>You acknowledge that we may use artificial intelligence, machine learning, and automated systems to provide services, generate content, and communicate with you</li>
                <li>AI-generated content and communications are provided "as is" and may require human review for accuracy</li>
                <li>You consent to receiving communications that may be generated or processed by AI systems</li>
                <li>We reserve the right to use AI to analyze your data and interactions to improve our services</li>
                <li>You may request human interaction at any time, and we will provide reasonable accommodation</li>
                <li>AI systems may make decisions based on algorithms, and you acknowledge that such decisions may not always be perfect</li>
                <li>We are not liable for errors or inaccuracies in AI-generated content, though we strive for accuracy</li>
                <li>You agree not to reverse engineer, copy, or misuse any AI systems or proprietary technology we use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">5. Intellectual Property</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                All content, materials, and intellectual property provided through our services are owned by My Legal Academy or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">6. Limitation of Liability</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>We provide services "as is" without warranties of any kind</li>
                <li>We do not guarantee specific results or outcomes</li>
                <li>Our liability is limited to the amount you paid for our services</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">7. Compliance and Professional Standards</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                You are responsible for ensuring that your use of our services complies with all applicable laws, regulations, and professional standards, including State Bar rules and advertising guidelines. We do not provide legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">8. Termination</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause, with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">9. Governing Law</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">10. Contact Information</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                For questions about these Terms, please contact us at:
              </p>
              <p className="text-base leading-relaxed text-[#4d5256] mt-2">
                <strong>Email:</strong> privacy@mylegalacademy.com<br />
                <strong>Address:</strong> 21550 Oxnard Street, 3rd Floor, Suite 5021, Woodland Hills, CA 91367
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

