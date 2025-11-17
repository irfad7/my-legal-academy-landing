import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Tag, Clock, ArrowRight } from "lucide-react";

export const EnrollmentOptionsSection = (): JSX.Element => {
  const options = [
    {
      title: "Option 1. Pay in Full",
      code: "GT3MPIF",
      price: "$12,500",
      savings: "Save $2,500",
      benefits: "Receive all $12,500 in bonuses",
      popular: true,
      paymentUrl: "https://bit.ly/grow-track-3pay-PIF"
    },
    {
      title: "Option 2. Three Payments",
      code: "GT3PAY25",
      price: "$5,000",
      paymentNote: "Three Payments of $5,000",
      benefits: "Bonuses included. Easier cash flow. No difference in value.",
      popular: false,
      paymentUrl: "https://bit.ly/grow-track-3pay-monthly-2025"
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
              Black Friday <span className="text-[#9779fc]">Enrollment Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 max-w-6xl mx-auto mb-8 md:mb-10">
            {options.map((option, index) => (
              <div 
                key={index} 
                className={`bg-[#f8f9fa] rounded-[12px] p-6 sm:p-7 md:p-8 lg:p-9 border-2 ${option.popular ? 'border-[#9779fc] shadow-[0_8px_24px_rgba(151,121,252,0.2)]' : 'border-[#e6edf2]'} relative hover:shadow-lg transition-all duration-300 ${option.popular ? 'md:scale-[1.02]' : ''}`}
              >
                {option.popular && (
                  <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9779fc] to-[#431a78] text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full [font-family:'Playfair_Display',serif] font-medium text-[11px] sm:text-[12px] md:text-[13px] shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                  text-[21px] sm:text-[23px] md:text-[26px] lg:text-[28px] mb-5 md:mb-6 leading-[1.3]">
                  {option.title}
                </h3>
                
                <div className="bg-[#9779fc]/10 rounded-[8px] p-3 sm:p-4 mb-5 md:mb-6 border border-[#9779fc]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9779fc]" />
                    <span className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-[13px] sm:text-[14px] md:text-[15px]">
                      Use code:
                    </span>
                  </div>
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {option.code}
                  </p>
                </div>
                
                <div className="mb-5 md:mb-6">
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
                    text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[64px] mb-3 leading-[1.1]">
                    {option.price}
                  </p>
                  {option.savings && (
                    <div className="inline-flex items-center gap-2 bg-[#bfa06c] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[8px]">
                      <p className="[font-family:'Playfair_Display',serif] font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
                        {option.savings}
                      </p>
                    </div>
                  )}
                  {option.paymentNote && (
                    <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                      text-[14px] sm:text-[15px] md:text-[16px] mt-3 leading-[1.6]">
                      {option.paymentNote}
                    </p>
                  )}
                </div>
                
                <div className="bg-white rounded-[8px] p-3 sm:p-4 border border-[#e6edf2] mb-5 md:mb-6">
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                    text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7]">
                    {option.benefits}
                  </p>
                </div>
                
                <Button
                  onClick={() => window.open(option.paymentUrl, '_blank')}
                  className={`w-full h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-[10px] [font-family:'Playfair_Display',serif] font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3 ${
                    option.popular 
                      ? 'bg-[#9779fc] hover:bg-[#7d5ef0] text-white border-0 shadow-[0_4px_16px_rgba(151,121,252,0.4)]' 
                      : 'border-2 border-[#9779fc] bg-white text-[#9779fc] hover:bg-[#9779fc] hover:text-white'
                  }`}
                >
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                    Enroll Now
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 mb-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#431a78] flex-shrink-0" />
              <p className="[font-family:'Playfair_Display',serif] font-medium text-[#431a78] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.4]">
                Enrollment closes Cyber Monday at midnight.
              </p>
            </div>
            <p className="[font-family:'Playfair_Display',serif] font-normal text-[#431a78] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]">
              Once the deadline passes, the bonus stack is gone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

