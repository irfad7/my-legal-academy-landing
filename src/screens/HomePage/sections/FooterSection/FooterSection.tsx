import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import revenuce from '../../../../assets/imagES/revenue 2x.png';

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f4f9fc] py-16">
      <div className="w-full bg-[linear-gradient(180deg,rgba(224,236,251,1)_0%,rgba(244,249,252,1)_100%)] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="w-full max-w-[483px] h-[400px]  flex items-center justify-center">
                    <div className="text-center p-8">
                      <div>
                       <img src={revenuce} alt=""/>
                      </div>
                     
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <blockquote className="text-2xl lg:text-[40.3px] leading-tight lg:leading-[48.3px] tracking-[-0.81px] [font-family:'Inter',Helvetica]">
                    <span className="font-black text-[#0c0c0c] tracking-[-0.32px]">
                      "I doubled my revenue in one year, I'm literally{" "}
                    </span>
                    <span className="font-black italic text-[#0e823e] tracking-[-0.32px]">
                      1 million dollars
                    </span>
                    <span className="font-black text-[#0c0c0c] tracking-[-0.32px]">
                      {" "}
                      in revenue in one year!!"
                    </span>
                  </blockquote>

                  <cite className="block text-lg text-[#4d5256] [font-family:'Inter',Helvetica] font-normal leading-[27.2px] not-italic">
                    – Stephen A. Smith, Esq., Personal Injury Lawyer, The Law
                    Offices of Stephen A. Smith
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
