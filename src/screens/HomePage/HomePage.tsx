import React from "react";
import { useState } from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FeaturedCasesSection } from "./sections/FeaturedCasesSection/FeaturedCasesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import logo from '../../assets/images/logo.png';
import footericon from '../../assets/images/footeriocns.png';


export const HomePage = (): JSX.Element => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="bg-white w-full min-h-screen">
      {showBanner && (
        <div className="w-full bg-[#0e823e] border-b border-[#e6edf2] relative">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center relative">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-[15.1px] text-center">
                February 12th - 15th, 2025 | Claim Your Ticket To The LAST DANCE Of Funnel Hacking Live Here →
              </div>
             
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col">
        <div className="w-full relative">
          <CallToActionSection />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex items-center ">
             
              <img src={logo} alt="" />
            </div>
          </div>
        </div>

        <AboutUsSection />

        <FeaturedCasesSection />

        <FAQSection />

        <FooterSection />

        <TestimonialsSection />

        <div className="w-full relative">
          <TeamSection />
        </div>

        <HeroSection />

        <ServicesSection />

        
        <div className="w-full h-[332px] border-t border-[#ebecef] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] flex flex-col items-center justify-center gap-6">

  {/* Logo */}
  <div>
    <img src={logo} alt="Company Logo" className="h-12 object-contain" />
  </div>

  {/* Address */}
  <div className="text-center text-[#4d5256] text-sm leading-[19.6px]">
    10880 Wilshire Blvd Suite 2000, <br />
    Los Angeles, CA 90024
  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-4">
    <div className="flex gap-3">
      <img src={footericon} alt="" />
     
    </div>
  </div>

</div>
      </div>
    </div>
  );
};
