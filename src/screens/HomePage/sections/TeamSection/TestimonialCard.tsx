import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";


interface TestimonialCardProps {
  name: string;
  achievement: string;
  quote: string;
  timeFrame: string;
  signedClients: string;
  revenue: string;
  costPerAcquisition: string;
  roi: string;
  imagePosition: "left" | "right";
  imageSrc?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  achievement,
  quote,
  timeFrame,
  signedClients,
  revenue,
  costPerAcquisition,
  roi,
  imagePosition,
  imageSrc,
}) => {
  const stats = [
    { label: "Time Frame", value: timeFrame },
    { label: "Signed Clients", value: signedClients },
    { label: "Revenue", value: revenue, highlight: true },
    { label: "Cost per Acquisition", value: costPerAcquisition },
    { label: "Return on Investment", value: roi, highlight: true },
  ];

  const ImageComponent = () => (
    <div className="relative w-[400px] h-[450px] flex-shrink-0 flex flex-col items-center">
      {imageSrc ? (
        <div className="flex justify-center items-center w-full h-full">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            alt={name}
            src={imageSrc}
          />
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4"></div>
            <p className="font-medium">{name}</p>
          </div>
        </div>
      )}
      <div className="mt-6">
        <Button className="w-[420px] h-[80px] bg-[#0e823e] hover:bg-[#0c7236] rounded-md border border-[#00000021] shadow-[0px_6px_12px_#001c3826]">
          <div className="flex items-center justify-between w-full px-8">
            <span className="font-normal text-white text-[32px] leading-[44px]">
              See If You Qualify
            </span>
            <ArrowRight className="w-7 h-7" />
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <Card className="bg-white rounded-lg shadow-[0px_0px_30px_#002c7a21] overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-start gap-[70px] p-[50px]">
          {imagePosition === "left" && <ImageComponent />}

          <div className="flex-1 space-y-6">
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#0e823e] text-[22px] leading-[30px]">
              {name}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[44px] tracking-[-0.81px] leading-[52px]">
              {achievement}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-normal text-[#4d5256] text-[20px] leading-[30px]">
              <span className="font-bold">"</span>
              {quote}
              <span className="font-bold">"</span>
            </div>

            <div className="[font-family:'Inter',Helvetica] font-bold text-[#0c0c0c] text-[20px] leading-[30px]">
              With My Legal Academy...
            </div>

            <div className="pl-8 space-y-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 [font-family:'Inter',Helvetica] text-[34px] leading-[38px]"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-black">{stat.label}: </span>
                  <span
                    className={`font-bold ${
                      stat.highlight ? "text-[#0e823e]" : "text-black"
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {imagePosition === "right" && <ImageComponent />}
        </div>
      </CardContent>
    </Card>
  );
};