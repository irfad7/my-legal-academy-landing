import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCTASectionProps {
  onShowEmailPopup: () => void;
  onSpeakWithTeam: () => void;
}

export const FinalCTASection = ({ onShowEmailPopup, onSpeakWithTeam }: FinalCTASectionProps): JSX.Element => {
  const benefits = [
    "Clarity.",
    "Structure.",
    "Predictability.",
    "Time.",
    "Support.",
    "Growth."
  ];

  return (
    <section className="w-full py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* White content box */}
        <div className="bg-white rounded-[12px] shadow-[0_8px_32px_rgba(7,5,19,0.3)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[68px]
              tracking-[-0.5px] leading-[1.1] px-2">
              Your Next 12 Months Can Look <span className="text-[#9779fc]">Completely Different</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-5 md:space-y-6 mb-8 md:mb-10">
            <div className="space-y-5 md:space-y-6">
              <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-center">
                You can continue carrying the weight of your firm alone.
              </p>
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] leading-[1.6] text-center">
                Or you can build systems that carry it with you.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-[10px] p-5 sm:p-6 md:p-7 border border-[#e6edf2]">
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
                text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-center mb-5 md:mb-6">
                Grow Track gives you:
              </p>
              
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-[8px] px-4 sm:px-5 py-2 sm:py-2.5 border border-[#e6edf2]"
                  >
                    <span className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                      text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-6 pt-6 md:pt-8 border-t border-[#e6edf2]">
            <div className="space-y-5 md:space-y-6">
              <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6]">
                The next step is simple.
              </p>
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] leading-[1.6]">
                Enroll today and secure the Black Friday bonus stack.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center pt-5 md:pt-6">
              <Button 
                onClick={onShowEmailPopup}
                className="group h-12 sm:h-14 md:h-16 lg:h-18 bg-[#9779fc] hover:bg-[#7d5ef0] text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-[10px] border-0 shadow-[0_4px_16px_rgba(151,121,252,0.4)] [font-family:'Playfair_Display',serif] font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                <span>Join Grow Track Black Friday Offer</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={onSpeakWithTeam}
                className="h-12 sm:h-14 md:h-16 lg:h-18 border-2 border-[#9779fc] bg-white text-[#9779fc] hover:bg-[#9779fc] hover:text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-[10px] [font-family:'Playfair_Display',serif] font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3"
              >
                <span>Speak With Our Team</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

