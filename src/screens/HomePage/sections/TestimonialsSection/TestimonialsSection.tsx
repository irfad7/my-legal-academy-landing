import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import downicon from '../../../../assets/images/downicon.png';

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full relative pb-2">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="[font-family:'Caveat',Helvetica] font-bold text-[#0c0c0c] text-[36.2px] tracking-[0] leading-[50.7px]">
Built for PI Firms Serious About Scaling           
        </h2>

        <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] tracking-[-0.5px] leading-tight max-w-6xl">
          Real Lawyers, Real Results with PI Track
        </h1>

        <div className="mt-4">
          <div className="flex justify-center items-center gap-4">
           
               <div className="pt-2">
                 <img src={downicon} alt="" />
               </div>
          </div>
          {/* <span className="text-gray-600 font-medium">Completely Done-For-You Case Generation System</span> */}
        </div>
      </div>
    </section>
  );
};
