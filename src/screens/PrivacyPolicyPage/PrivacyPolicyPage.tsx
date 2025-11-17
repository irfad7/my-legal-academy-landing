import React from "react";
import { Link } from "react-router-dom";
import { trackPageView } from "../../utils/analytics";

export const PrivacyPolicyPage = (): JSX.Element => {
  React.useEffect(() => {
    trackPageView('Privacy Policy Page');
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#070513] via-[#431a78] to-[#070513]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        <div className="bg-white rounded-[12px] shadow-[0_8px_32px_rgba(7,5,19,0.3)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mb-8">
            <Link to="/my-legal-academy" className="text-[#9779fc] hover:text-[#7d5ef0] transition-colors [font-family:'Playfair_Display',serif]">
              ← Back to Home
            </Link>
          </div>

          <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
            Privacy Policy
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
              <h2 className="text-xl sm:text-2xl font-medium mb-4">1. Information We Collect</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                We collect information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information about your law firm, including practice area, firm size, and current marketing strategies</li>
                <li>Any other information you choose to provide in connection with our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">2. How We Use Your Information</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your enrollment and manage your account</li>
                <li>Send you marketing communications, including via email, text message, and phone (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">3. TCPA Compliance and Communications</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                By providing your phone number, you expressly consent to receive automated text messages, calls, and pre-recorded messages from My Legal Academy dba Redwood Meridian LLC at the number you provided. Message and data rates may apply. You may opt-out at any time by replying STOP to any text message or by contacting us at privacy@mylegalacademy.com.
              </p>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                <strong>AI-Powered Communications:</strong> We may use artificial intelligence and automated systems to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Generate and personalize communications sent to you</li>
                <li>Analyze your interactions to improve our services</li>
                <li>Provide automated customer support through AI chatbots and virtual assistants</li>
                <li>Process and respond to inquiries using natural language processing</li>
                <li>Deliver targeted marketing content based on your preferences and behavior</li>
              </ul>
              <p className="text-base leading-relaxed text-[#4d5256] mt-4">
                All AI-generated communications will be clearly identified when applicable. You maintain the right to request human interaction at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">4. Information Sharing</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Service providers who assist us in operating our business</li>
                <li>Business partners with whom we collaborate to provide services</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">5. Data Security</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">6. Your Rights</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">7. Contact Us</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                For questions about this Privacy Policy or to exercise your rights, please contact us at:
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

