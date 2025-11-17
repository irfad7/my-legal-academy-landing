import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { EmailPopup } from "../../components/ui/EmailPopup";
import { CalendarPopup } from "../../components/ui/CalendarPopup";
import { EnrollmentOptionsPopup } from "../../components/ui/EnrollmentOptionsPopup";
import logoHeader from '../../assets/images/logos/Logo.png';
import logoFooter from '../../assets/images/logos/Logo-full.png';
import { trackPageView } from "../../utils/analytics";
import { BlackFridayHeroSection } from "./sections/BlackFridayHeroSection/BlackFridayHeroSection";
import { WhatChangesSection } from "./sections/WhatChangesSection/WhatChangesSection";
import { RealResultsSection } from "./sections/RealResultsSection/RealResultsSection";
import { BonusStackSection } from "./sections/BonusStackSection/BonusStackSection";
import { WhyGrowTrackWorksSection } from "./sections/WhyGrowTrackWorksSection/WhyGrowTrackWorksSection";
import { WhoItIsForSection } from "./sections/WhoItIsForSection/WhoItIsForSection";
import { EnrollmentOptionsSection } from "./sections/EnrollmentOptionsSection/EnrollmentOptionsSection";
import { FinalCTASection } from "./sections/FinalCTASection/FinalCTASection";


export const MyLegalAcademyPage = (): JSX.Element => {
  const [showBanner, setShowBanner] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showCalendarPopup, setShowCalendarPopup] = useState(false);
  const [showEnrollmentPopup, setShowEnrollmentPopup] = useState(false);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('My Legal Academy Black Friday Landing Page');
  }, []);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    setShowEmailPopup(false);
    // Redirect to JotForm - Update this URL for Black Friday if needed
    window.open('https://form.jotform.com/252374559938069', '_blank');
  };

  const handleSpeakWithTeam = () => {
    setShowCalendarPopup(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#070513] via-[#431a78] to-[#070513] scroll-optimized">
      {showBanner && (
        <div className="w-full bg-gradient-to-r from-[#9779fc] to-[#431a78] border-b border-[#9779fc]/30 relative">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center relative">
              <div className="[font-family:'Playfair_Display',serif] font-medium text-white text-sm md:text-[15.1px] text-center">
                Black Friday Special - Ends Cyber Monday at Midnight →
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col">
        {/* Logo Header */}
        <div className="w-full relative pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8">
          <div className="absolute top-6 sm:top-8 md:top-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex items-center">
              <img src={logoHeader} alt="My Legal Academy Logo" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto object-contain drop-shadow-lg" draggable={false} />
            </div>
          </div>
        </div>

        {/* Black Friday Hero Section */}
        <BlackFridayHeroSection 
          onShowEmailPopup={() => setShowEnrollmentPopup(true)}
          onSpeakWithTeam={handleSpeakWithTeam}
        />

        {/* What Changes Section */}
        <WhatChangesSection />

        {/* Real Results Section */}
        <RealResultsSection />

        {/* Bonus Stack Section */}
        <BonusStackSection />

        {/* Why Grow Track Works Section */}
        <WhyGrowTrackWorksSection />

        {/* Who It Is For Section */}
        <WhoItIsForSection />

        {/* Enrollment Options Section */}
        <EnrollmentOptionsSection />

        {/* Final CTA Section */}
        <FinalCTASection 
          onShowEmailPopup={() => setShowEnrollmentPopup(true)}
          onSpeakWithTeam={handleSpeakWithTeam}
        />
        
        {/* Footer */}
        <div className="w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6 py-10 md:py-12 lg:py-16 mt-8 md:mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div>
            <img src={logoFooter} alt="My Legal Academy Logo" className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-64 w-auto object-contain mx-auto" draggable={false} />
          </div>

          {/* Address */}
          <div className="text-center text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]">
            21550 Oxnard Street, 3rd Floor, Suite 5021, <br />
            Woodland Hills, CA 91367
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 pt-2">
            <Link 
              to="/privacy-policy"
              className="text-white/80 hover:text-white transition-colors [font-family:'Playfair_Display',serif] text-[13px] sm:text-[14px] md:text-[15px] underline"
            >
              Privacy Policy
            </Link>
            <span className="text-white/40">|</span>
            <Link 
              to="/terms-and-conditions"
              className="text-white/80 hover:text-white transition-colors [font-family:'Playfair_Display',serif] text-[13px] sm:text-[14px] md:text-[15px] underline"
            >
              Terms and Conditions
            </Link>
            <span className="text-white/40">|</span>
            <Link 
              to="/tcpa-policy"
              className="text-white/80 hover:text-white transition-colors [font-family:'Playfair_Display',serif] text-[13px] sm:text-[14px] md:text-[15px] underline"
            >
              TCPA Policy
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="text-center max-w-3xl pt-2">
            <p className="[font-family:'Playfair_Display',serif] font-normal italic text-white/80 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6]">
              This program and promotion is subject to MLA&apos;s prerequisites and process
              adherence. Spaces are limited. No guarantees of specific case
              outcomes. Compliance with State Bar guidelines required.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 pt-4 md:pt-5">
            <a 
              href="https://www.facebook.com/mylegalacademyofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.instagram.com/mylegalacademy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://linkedin.com/company/mylegalacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Email Popup */}
      <EmailPopup
        isOpen={showEmailPopup}
        onClose={() => setShowEmailPopup(false)}
        onSubmit={handleEmailSubmit}
      />

      {/* Calendar Popup */}
      <CalendarPopup
        isOpen={showCalendarPopup}
        onClose={() => setShowCalendarPopup(false)}
      />

      {/* Enrollment Options Popup */}
      <EnrollmentOptionsPopup
        isOpen={showEnrollmentPopup}
        onClose={() => setShowEnrollmentPopup(false)}
      />
    </div>
  );
};

