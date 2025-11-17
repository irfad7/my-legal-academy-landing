import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface BlackFridayHeroSectionProps {
  onShowEmailPopup: () => void;
  onSpeakWithTeam: () => void;
}

export const BlackFridayHeroSection = ({ onShowEmailPopup, onSpeakWithTeam }: BlackFridayHeroSectionProps): JSX.Element => {

  return (
    <section className="relative w-full py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* White content box with subtle rounded corners */}
        <div className="bg-white rounded-[12px] shadow-[0_8px_32px_rgba(7,5,19,0.3)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* Main Headline */}
            <div className="text-center px-2">
              <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[68px]
                tracking-[-0.5px] leading-[1.1]">
                The Truth Most Lawyers <br />
                <span className="text-[#9779fc]">Never Say Out Loud</span>
              </h1>
            </div>

            {/* Opening narrative */}
            <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
              <div className="space-y-5 md:space-y-6">
                <p className="[font-family:'Playfair_Display',serif] font-normal text-[#070513] 
                  text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-center">
                  They are tired.
                </p>
                <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                  text-[16px] sm:text-[17px] md:text-[19px] leading-[1.6] text-center">
                  Not tired of practicing law.
                </p>
                <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                  text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-center">
                  Tired of carrying every part of the firm on their shoulders.
                </p>
              </div>

              {/* Pain points - bullet list */}
              <div className="pt-5 md:pt-6 border-t border-[#e6edf2]">
                <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3">
                  {["Missed calls", "Cold leads", "Inconsistent intake", "Late nights", "Unpredictable revenue", "Pressure that never stops"].map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4d5256] flex-shrink-0"></div>
                      <span className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                        text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution pivot */}
              <div className="space-y-5 md:space-y-6 pt-5 md:pt-6">
                <p className="[font-family:'Playfair_Display',serif] font-normal text-[#070513] 
                  text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-center">
                  Most lawyers try to fix these things by working harder.
                </p>
                <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
                  text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] leading-[1.6] text-center">
                  But real change happens when your systems work for you.
                </p>
              </div>

              {/* Value proposition */}
              <div className="pt-5 md:pt-6 border-t border-[#e6edf2]">
                <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                  text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] leading-[1.6] text-center mb-5 md:mb-6">
                  Grow Track was built for lawyers who want control.
                </p>
                <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3">
                  {["Control of their intake", "Control of their pipeline", "Control of their time", "Control of their life"].map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4d5256] flex-shrink-0"></div>
                      <span className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                        text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Black Friday offer */}
              <div className="pt-5 md:pt-6">
                <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
                  text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] leading-[1.6] text-center">
                  This Black Friday, you can join with the most valuable offer we release all year.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="w-full max-w-3xl mx-auto pt-6 md:pt-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
                <Button 
                  onClick={onShowEmailPopup}
                  className="group h-12 sm:h-14 md:h-16 lg:h-18 bg-[#9779fc] hover:bg-[#7d5ef0] text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-[10px] border-0 shadow-[0_4px_16px_rgba(151,121,252,0.4)] [font-family:'Playfair_Display',serif] font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3 w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                  <span>Join Grow Track Black Friday Offer</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  onClick={onSpeakWithTeam}
                  className="h-12 sm:h-14 md:h-16 lg:h-18 border-2 border-[#9779fc] bg-white text-[#9779fc] hover:bg-[#9779fc] hover:text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-[10px] [font-family:'Playfair_Display',serif] font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3 w-full sm:w-auto"
                >
                  <span>Speak With Our Team</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

