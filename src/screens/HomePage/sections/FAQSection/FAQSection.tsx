import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { ArrowRight } from "lucide-react";

const mustHaveItems = [
  "$10-$15K Ad Budget",
  "7-Day Intake Coverage",
  "Speed to Lead within 60 seconds",
  "CRM + Call Tracking in place\n(or ready to set up)",
  "Commitment to proven process",
];

const dealBreakerItems = [
  "Unwilling to Follow System",
  "Insufficient Ad Budget",
  "No Prepared to Bring in Dedicated Intake Staff",
  "Slow Response Times",
];

export const FAQSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[48.3px] tracking-[-0.81px] leading-[58.0px] mb-8">
            This isn't for every PI Attorney.
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#4d5256] text-[20px] tracking-[0] leading-[30.2px] max-w-5xl mx-auto">
            We only partner with firms ready to execute fast and follow the system and who meet these requirements:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white rounded-[8.05px] shadow-[0px_0px_40.25px_#002c7a1a] border-0">
            <CardHeader>
              <CardTitle className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[28.2px] tracking-[-0.81px] leading-[33.8px]">
                Must-Haves
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mustHaveItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-[18px] h-[18px] text-green-600 mt-1 flex-shrink-0" />
                  <span className="[font-family:'Inter',Helvetica] font-bold text-[#4d5256] text-[18.1px] tracking-[0] leading-[27.2px]">
                    {item}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white rounded-[8.05px] shadow-[0px_0px_40.25px_#002c7a1a] border-0">
            <CardHeader>
              <CardTitle className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[28.2px] tracking-[-0.81px] leading-[33.8px]">
                Deal-Breakers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {dealBreakerItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XIcon className="w-[18px] h-[18px] text-red-600 mt-1 flex-shrink-0" />
                  <span className="[font-family:'Inter',Helvetica] font-bold text-[#4d5256] text-[18.1px] tracking-[0] leading-[27.2px]">
                    {item}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="[font-family:'Caveat',Helvetica] font-bold text-[#0c0c0c] text-[36.2px] text-center tracking-[0] leading-[50.7px] mb-6">
              If you fulfil the requirements above and would like a steady
              supply of cases?
            </h3>
            <h4 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[27px] tracking-[-0.81px] leading-[38.6px] mb-4">
              Sign up for PI Track by My Legal Academy Today!
            </h4>
          </div>

          <Button className="h-auto bg-[#0e823e] hover:bg-[#0c7235] text-white rounded-[3.02px] border border-[#00000021] shadow-[0px_4.03px_8.05px_#001c3826] px-8 py-6">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[35.2px] tracking-[0] leading-[48.3px] flex items-center gap-2">
              See If You Qualify
              <ArrowRight className="w-6 h-6" />
            </span>
          </Button>

          <p className="text-[#60606b] [font-family:'Inter',Helvetica] font-medium text-[14.1px] tracking-[0] leading-[19.7px] mt-4">
            Completely Done-For-You Case Generation System
          </p>
        </div>
      </div>
    </section>
  );
};
