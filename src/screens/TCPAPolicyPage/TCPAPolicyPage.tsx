import React from "react";
import { Link } from "react-router-dom";
import { trackPageView } from "../../utils/analytics";

export const TCPAPolicyPage = (): JSX.Element => {
  React.useEffect(() => {
    trackPageView('TCPA Policy Page');
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
            TCPA Compliance Policy
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
              <h2 className="text-xl sm:text-2xl font-medium mb-4">1. TCPA Compliance Statement</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                My Legal Academy dba Redwood Meridian LLC ("we," "us," or "our") is committed to full compliance with the Telephone Consumer Protection Act (TCPA) and all applicable federal and state telemarketing laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">2. Express Written Consent</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                By providing your phone number and checking the consent box, you expressly consent to receive:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Automated text messages (SMS/MMS)</li>
                <li>Automated and pre-recorded phone calls</li>
                <li>Marketing and promotional communications</li>
                <li>Service-related notifications</li>
              </ul>
              <p className="text-base leading-relaxed text-[#4d5256] mt-4">
                <strong>Consent is not a condition of purchase.</strong> Message and data rates may apply. Message frequency varies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">3. AI-Powered Communications and TCPA Compliance</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                <strong>Advanced AI Communication Clauses:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>You consent to receive communications that may be generated, processed, or delivered using artificial intelligence, machine learning, and automated systems</li>
                <li>AI systems may be used to personalize, optimize, and schedule communications based on your preferences and behavior</li>
                <li>Automated systems may analyze your responses and interactions to improve communication relevance and timing</li>
                <li>You acknowledge that AI may be used to generate content, respond to inquiries, and provide customer support</li>
                <li>All AI-generated communications will comply with TCPA requirements, including proper identification and opt-out mechanisms</li>
                <li>You may request human interaction at any time, and we will provide reasonable accommodation within 24 hours</li>
                <li>AI systems will respect your communication preferences, including do-not-call requests and opt-out instructions</li>
                <li>We use advanced AI to ensure all communications are TCPA compliant, including proper consent verification and opt-out processing</li>
                <li>AI systems may use natural language processing to understand and respond to your inquiries while maintaining TCPA compliance</li>
                <li>You consent to AI-assisted call recording and analysis for quality assurance and compliance purposes, where legally permitted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">4. Opt-Out Rights</h2>
              <p className="text-base leading-relaxed text-[#4d5256] mb-4">
                You may opt-out of communications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4d5256] ml-4">
                <li>Replying "STOP" to any text message</li>
                <li>Replying "UNSUBSCRIBE" to any email</li>
                <li>Following opt-out instructions in any communication</li>
                <li>Contacting us at privacy@mylegalacademy.com</li>
                <li>Calling us and requesting to be added to our do-not-call list</li>
              </ul>
              <p className="text-base leading-relaxed text-[#4d5256] mt-4">
                Opt-out requests will be processed within 10 business days. You may continue to receive messages during this processing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">5. Do-Not-Call Registry</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                We maintain an internal do-not-call list. If you request to be added to this list, we will honor your request and will not contact you for marketing purposes, except as required by law or with your renewed consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">6. Caller Identification</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                All calls will display our business name "My Legal Academy" or our phone number. We will not use false or misleading caller ID information.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">7. Time Restrictions</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                We will only place calls during reasonable hours (8:00 AM to 9:00 PM local time, based on your time zone) unless you have expressly consented to receive calls at other times.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">8. Revocation of Consent</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                You may revoke your consent at any time using any of the opt-out methods described above. Revocation of consent will not affect the lawfulness of communications sent before your revocation is processed.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-medium mb-4">9. Contact Information</h2>
              <p className="text-base leading-relaxed text-[#4d5256]">
                For questions about this TCPA Policy or to exercise your rights, please contact us at:
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

