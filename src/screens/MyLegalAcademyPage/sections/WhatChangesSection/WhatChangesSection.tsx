import React from "react";
import { CheckCircle2 } from "lucide-react";

export const WhatChangesSection = (): JSX.Element => {
  const changes = [
    {
      title: "When Your Intake Is Answered 24/7",
      result: "You Stop Losing Cases In Silence."
    },
    {
      title: "When Your Old Leads Are Revived",
      result: "You Sign Clients Before Your New Ads Even Launch."
    },
    {
      title: "When Your Automations Follow Up Instantly",
      result: "You Reclaim Hours Each Week."
    },
    {
      title: "When Your Ads Are Built With Proven Frameworks",
      result: "You Stop Guessing."
    },
    {
      title: "When You Have A Plan For The Next Year",
      result: "You Move Forward With Clarity."
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
              What Changes When Your <span className="text-[#9779fc]">Systems Change</span>
            </h2>
          </div>

          <div className="space-y-5 md:space-y-6 max-w-5xl mx-auto mb-8 md:mb-10">
            {changes.map((change, index) => (
              <div 
                key={index} 
                className="group border-l-4 border-[#9779fc] pl-5 sm:pl-6 md:pl-8 py-4 md:py-5 hover:bg-[#f8f9fa] transition-colors rounded-r-[8px]"
              >
                <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                  text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.6] mb-2 sm:mb-3">
                  {change.result}
                </p>
                <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                  text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]">
                  {change.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto pt-6 md:pt-8 border-t border-[#e6edf2] space-y-5 md:space-y-6">
            <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
              text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6]">
              This is how lawyers like Demarcus, Hayoon, and Jose reshaped their firms.
            </p>
            <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[1.6]">
              Their results were not luck.
            </p>
            <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
              text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[1.6]">
              They were the outcome of systems that never stop working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

