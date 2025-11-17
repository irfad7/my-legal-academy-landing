import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { TrendingUp } from "lucide-react";

export const RealResultsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Demarcus Ward, Esq.",
      practice: "Personal Injury",
      image: "https://wardwhitepllc.com/wp-content/uploads/2023/09/Ward-White-06611-1.jpeg",
      cost: "$2,500",
      value: "$20,000",
      roi: "696%",
      quote: "He said the biggest change was not financial. It was the clarity and balance he gained."
    },
    {
      name: "Hayoon Kane, Esq.",
      practice: "Immigration",
      image: "https://hklaw.us/wp-content/uploads/2025/03/Exp-Seirvice-Image.png",
      cost: "$2,098",
      value: "$20,000",
      roi: "853%",
      quote: "Working with My Legal Academy has been a wonderful experience. The team is highly responsive, knowledgeable, and truly experts in their field."
    },
    {
      name: "Jose Escobar, Esq.",
      practice: "Personal Injury",
      image: "https://images.squarespace-cdn.com/content/v1/6566a6efe6ce1b22aa530fa5/3debcfb5-1251-4fe8-aaed-db7681aab8a3/IMG_5253+edited.jpg?format=1000w",
      cost: "$5,250",
      value: "$54,000",
      roi: "928%",
      quote: "Our firm hired My Legal Academy for our Facebook advertising, and the results have been outstanding."
    }
  ];

  return (
    <section className="w-full py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* White content box */}
        <div className="bg-white rounded-[12px] shadow-[0_8px_32px_rgba(7,5,19,0.3)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[32px] sm:text-[40px] md:text-[42px] lg:text-[48px] xl:text-[52px]
              tracking-[-0.5px] leading-[1.1] px-2">
              Real Results From Firms <span className="text-[#9779fc]">Just Like Yours</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7 mb-8 md:mb-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[10px] p-5 sm:p-6 md:p-7 border-2 border-[#e6edf2] hover:border-[#9779fc]/50 transition-all duration-300"
              >
                <div className="mb-5 md:mb-6">
                  {/* Attorney Photo */}
                  {testimonial.image && (
                    <div className="mb-4 md:mb-5 flex justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#e6edf2]"
                        style={{ objectPosition: 'center 25%' }}
                        onError={(e) => {
                          // Hide image if it fails to load
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
                    text-[19px] sm:text-[21px] md:text-[23px] leading-[1.3] mb-2 text-center">
                    {testimonial.name}
                  </h3>
                  <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                    text-[14px] sm:text-[15px] md:text-[16px] mb-5 text-center">
                    {testimonial.practice}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-[#9779fc]/10 to-[#65e6fc]/10 rounded-[10px] p-4 md:p-5 mb-5 md:mb-6 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-[13px] sm:text-[14px] md:text-[15px]">Cost:</span>
                    <span className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-[15px] sm:text-[16px] md:text-[18px]">{testimonial.cost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-[13px] sm:text-[14px] md:text-[15px]">Value:</span>
                    <span className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-[15px] sm:text-[16px] md:text-[18px]">{testimonial.value}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-[#9779fc]/20">
                    <span className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-[13px] sm:text-[14px] md:text-[15px]">ROI:</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#9779fc]" />
                      <span className="[font-family:'Playfair_Display',serif] font-medium text-[#9779fc] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]">{testimonial.roi}</span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] 
                  text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] italic border-l-4 border-[#9779fc] pl-4 pt-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto pt-6 md:pt-8 border-t border-[#e6edf2]">
            <p className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] 
              text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6]">
              These results come from the same tools you receive inside Grow Track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

