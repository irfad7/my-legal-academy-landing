import React from "react";
import { Zap, Target, Clock } from "lucide-react";

export const WhyGrowTrackWorksSection = (): JSX.Element => {
  const benefits = [
    {
      icon: Zap,
      text: "Fixes the problems that drain your time and revenue"
    },
    {
      icon: Target,
      text: "Replaces broken processes with predictable systems"
    },
    {
      icon: Clock,
      text: "Gives you clear steps, real support, and tools that run in the background"
    }
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
              Why Grow Track <span className="text-[#9779fc]">Works</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7 mb-8 md:mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-[10px] p-6 sm:p-7 md:p-8 border-2 border-[#e6edf2] hover:border-[#9779fc]/50 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#9779fc]/10 border-2 border-[#9779fc]/20 flex items-center justify-center mx-auto mb-5 md:mb-6">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#9779fc]" />
                  </div>
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                    text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.6]">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Effort/Leverage section - matching three-column width */}
          <div className="bg-gradient-to-r from-[#9779fc]/10 via-transparent to-[#9779fc]/10 rounded-[10px] p-6 sm:p-7 md:p-8 border border-[#9779fc]/20 mb-8 md:mb-10">
            <div className="space-y-4 md:space-y-5 text-center">
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[1.6]">
                You do not need more effort.
              </p>
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
                text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[1.6]">
                You need more leverage.
              </p>
            </div>
          </div>
          
          {/* Bottom text - center aligned */}
          <div className="text-center space-y-4 md:space-y-5 pt-6 md:pt-8 border-t border-[#e6edf2]">
            <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[18px] sm:text-[19px] md:text-[21px] leading-[1.6]">
              Grow Track installs leverage into your practice.
            </p>
            <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
              text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6]">
              This is how lawyers free up time without slowing down growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

