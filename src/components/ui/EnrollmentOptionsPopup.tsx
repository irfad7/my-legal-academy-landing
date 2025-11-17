import React from "react";
import { X, Tag, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface EnrollmentOptionsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentOptionsPopup: React.FC<EnrollmentOptionsPopupProps> = ({
  isOpen,
  onClose,
}) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[12px] shadow-2xl max-w-5xl w-full mx-4 transform transition-all max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-xl sm:text-2xl">
            Choose Your Enrollment Option
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {options.map((option, index) => (
              <div 
                key={index} 
                className={`bg-[#f8f9fa] rounded-[12px] p-5 sm:p-6 md:p-7 lg:p-8 border-2 ${option.popular ? 'border-[#9779fc] shadow-[0_8px_24px_rgba(151,121,252,0.2)]' : 'border-[#e6edf2]'} relative hover:shadow-lg transition-all duration-300 flex flex-col`}
              >
                {option.popular && (
                  <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9779fc] to-[#431a78] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full [font-family:'Playfair_Display',serif] font-medium text-[10px] sm:text-[11px] md:text-[12px] shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                  text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-4 md:mb-5 leading-[1.3]">
                  {option.title}
                </h3>
                
                <div className="bg-[#9779fc]/10 rounded-[8px] p-3 sm:p-4 mb-4 md:mb-5 border border-[#9779fc]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9779fc]" />
                    <span className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-[12px] sm:text-[13px] md:text-[14px]">
                      Use code:
                    </span>
                  </div>
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                    {option.code}
                  </p>
                </div>
                
                <div className="mb-4 md:mb-5">
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] 
                    text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] mb-2 leading-[1.1]">
                    {option.price}
                  </p>
                  {option.savings && (
                    <div className="inline-flex items-center gap-2 bg-[#bfa06c] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[8px] mb-3">
                      <p className="[font-family:'Playfair_Display',serif] font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                        {option.savings}
                      </p>
                    </div>
                  )}
                  {option.paymentNote && (
                    <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                      text-[13px] sm:text-[14px] md:text-[15px] mt-2 leading-[1.6]">
                      {option.paymentNote}
                    </p>
                  )}
                </div>
                
                <div className="bg-white rounded-[8px] p-3 sm:p-4 mb-4 md:mb-5 border border-[#e6edf2] flex-grow">
                  <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                    text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]">
                    {option.benefits}
                  </p>
                </div>
                
                <Button
                  onClick={() => {
                    window.open(option.paymentUrl, '_blank');
                    onClose();
                  }}
                  className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-[10px] [font-family:'Playfair_Display',serif] font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3 mt-auto ${
                    option.popular 
                      ? 'bg-[#9779fc] hover:bg-[#7d5ef0] text-white border-0 shadow-[0_4px_16px_rgba(151,121,252,0.4)]' 
                      : 'border-2 border-[#9779fc] bg-white text-[#9779fc] hover:bg-[#9779fc] hover:text-white'
                  }`}
                >
                  <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                    Enroll Now
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

