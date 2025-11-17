import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Gift, Sparkles, Clock } from "lucide-react";

export const BonusStackSection = (): JSX.Element => {
  const bonuses = [
    {
      title: "BONUS 1. Double Automation Package",
      description: "You receive Intake AI and AI Receptionist.",
      details: "Every call, message, and inquiry answered 24/7. No missed opportunities.",
      value: "$3,000"
    },
    {
      title: "BONUS 2. Reactivation Blitz",
      description: "We revive your old and inactive leads.",
      details: "Most firms sign cases before their ads even launch.",
      value: "$2,500"
    },
    {
      title: "BONUS 3. Two Custom Ad Creatives",
      description: "Our team scripts, edits, and produces your ads using high performing frameworks.",
      details: "You approve, we deliver.",
      value: "$1,000"
    },
    {
      title: "BONUS 4. Ad Spend Budget",
      description: "$1,000 per month in ad spend for three months.",
      details: "Begins in Month 3 or when your ads begin. Scale Plan required.",
      value: "$3,000"
    },
    {
      title: "BONUS 5. Private 2026 Planning Session",
      description: "A one on one session with our COO to map your next 12 months.",
      details: "We audit your intake, hiring needs, revenue goals, and operations.",
      value: "$3,000"
    }
  ];

  return (
    <section className="w-full py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* White content box */}
        <div className="bg-white rounded-[12px] shadow-[0_8px_32px_rgba(7,5,19,0.3)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#9779fc] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5 md:mb-6">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="[font-family:'Playfair_Display',serif] font-medium text-[12px] sm:text-[13px] md:text-[14px]">BLACK FRIDAY EXCLUSIVE</span>
            </div>
            <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[68px]
              tracking-[-0.5px] leading-[1.1] mb-5 md:mb-6 px-2">
              This Black Friday You Receive <span className="text-[#9779fc]">the Full Bonus Stack</span>
            </h2>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#9779fc] to-[#431a78] text-white rounded-[10px] px-6 sm:px-8 py-3 sm:py-4 shadow-[0_8px_30px_rgba(151,121,252,0.3)]">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px]">
                $12,500 in Added Value
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5 max-w-5xl mx-auto mb-8 md:mb-10">
            {bonuses.map((bonus, index) => (
              <div 
                key={index} 
                className="group bg-white border-2 border-[#e6edf2] rounded-[12px] p-5 sm:p-6 md:p-7 hover:border-[#9779fc]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#9779fc] to-[#431a78] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="[font-family:'Playfair_Display',serif] font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                      text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] mb-3 md:mb-4">
                      {bonus.title}
                    </h3>
                    <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                      text-[16px] sm:text-[17px] md:text-[19px] leading-[1.6] mb-3 md:mb-4">
                      {bonus.description}
                    </p>
                    <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                      text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]">
                      {bonus.details}
                    </p>
                  </div>
                  
                  {/* Value Box */}
                  <div className="flex-shrink-0 md:ml-auto">
                    <div className="bg-gradient-to-br from-[#9779fc] to-[#431a78] text-white rounded-[10px] p-4 sm:p-5 md:p-6 text-center shadow-lg min-w-[100px] sm:min-w-[110px] md:min-w-[120px]">
                      <p className="[font-family:'Playfair_Display',serif] font-normal text-[11px] sm:text-[12px] md:text-[13px] mb-2 opacity-90 uppercase tracking-wide">
                        Value
                      </p>
                      <p className="[font-family:'Playfair_Display',serif] font-medium text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight">
                        {bonus.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-br from-[#9779fc] via-[#7d5ef0] to-[#431a78] text-white rounded-[12px] p-5 sm:p-6 md:p-7 max-w-4xl mx-auto shadow-[0_12px_40px_rgba(151,121,252,0.4)] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
            
            <div className="relative z-10">
              <p className="[font-family:'Playfair_Display',serif] font-normal text-[14px] sm:text-[15px] md:text-[16px] mb-2 md:mb-3 opacity-95 uppercase tracking-wider">
                Total Added Value
              </p>
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] mb-3 md:mb-4 leading-tight">
                $12,500
              </p>
              <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/30 shadow-lg">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <p className="[font-family:'Playfair_Display',serif] font-medium text-[12px] sm:text-[13px] md:text-[14px]">
                  Ends Cyber Monday at Midnight
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

