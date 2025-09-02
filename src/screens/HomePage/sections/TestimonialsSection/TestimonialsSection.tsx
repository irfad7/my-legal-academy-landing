import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import downicon from '../../../../assets/images/downicon.png';

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-16">
      <div className="flex flex-col items-center text-center space-y-6">
        <h2 className="[font-family:'Caveat',Helvetica] font-bold text-[#0c0c0c] text-[36.2px] tracking-[0] leading-[50.7px]">
Built for PI Firms Serious About Scaling           
        </h2>

        <h1 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[40px] tracking-[-0.81px] leading-[48.3px] max-w-4xl">
          Real Lawyers, Real Results with PI Track
        </h1>

        <div className="mt-8">
          <div className="flex justify-center items-center gap-4">
           
               <div className="pt-6">
                 <img src={downicon} alt="" />
               </div>
          </div>
          {/* <span className="text-gray-600 font-medium">Completely Done-For-You Case Generation System</span> */}
        </div>
      </div>
    </section>
  );
};
