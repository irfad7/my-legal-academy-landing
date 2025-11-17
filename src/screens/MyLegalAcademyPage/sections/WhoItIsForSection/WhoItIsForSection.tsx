import React from "react";
import { CheckCircle2 } from "lucide-react";

export const WhoItIsForSection = (): JSX.Element => {
  const points = [
    "Feel stretched thin",
    "Want a predictable pipeline",
    "Want intake handled without stress",
    "Want automation they can trust",
    "Want marketing that finally performs",
    "Want to scale without sacrificing their life"
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
              Who Grow Track <span className="text-[#9779fc]">Is For</span>
            </h2>
          </div>

          <div className="bg-[#f8f9fa] rounded-[10px] p-5 sm:p-6 md:p-8 lg:p-10 border border-[#e6edf2]">
            <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] text-center mb-6 md:mb-8">
              Grow Track is for lawyers who:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-white rounded-[8px] p-4 sm:p-5 border border-[#e6edf2] hover:border-[#9779fc]/30 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9779fc]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9779fc]" />
                    </div>
                  </div>
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                    text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[1.6]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-[#9779fc] to-[#431a78] text-white rounded-[10px] p-5 sm:p-6 md:p-7 lg:p-8 mt-5 md:mt-6">
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] leading-[1.4]">
                If this sounds familiar, Grow Track was built for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

