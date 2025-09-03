import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle } from "lucide-react";


interface TestimonialCardProps {
  name: string;
  location: string;
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
  location,
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
    <div className="relative w-[400px] h-[450px] flex-shrink-0 flex flex-col items-center justify-center group">
      {imageSrc ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
            alt={name}
            src={imageSrc}
          />
          <div className="mt-4 text-center">
            <div className="[font-family:'Inter',Helvetica] font-semibold text-[#0e823e] text-[28px] leading-[36px] tracking-wide">
              {name}
            </div>
            <div className="[font-family:'Inter',Helvetica] font-medium text-[#4d5256] text-[22px] leading-[30px] mt-1">
              {location}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex flex-col items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4"></div>
            <p className="font-medium">{name}</p>
            <p className="text-sm mt-1">{location}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Card className="bg-white rounded-lg shadow-[0px_0px_30px_#002c7a21] overflow-hidden">
      <CardContent className="p-0">
        {/* Mobile Layout - Image at top */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center gap-6 p-4">
            <div className="relative w-full h-[350px] flex-shrink-0 flex flex-col items-center justify-center group">
              {imageSrc ? (
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                    alt={name}
                    src={imageSrc}
                  />
                  <div className="mt-4 text-center">
                    <div className="[font-family:'Inter',Helvetica] font-semibold text-[#0e823e] text-xl leading-tight tracking-wide">
                      {name}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-medium text-[#4d5256] text-base leading-tight mt-2">
                      {location}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4"></div>
                    <p className="font-medium text-base">{name}</p>
                    <p className="text-sm mt-2">{location}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 space-y-6 w-full">
              <div className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-3xl tracking-[-0.5px] leading-tight text-center">
                {achievement}
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-[#4d5256] text-base leading-relaxed italic text-center">
                {quote.includes("Success isn't about doing everything at once") || quote.includes("Tim proved that precision beats guesswork") ? (
                  <>{quote}</>
                ) : (
                  <>
                    <span className="font-bold text-[#0e823e]">"</span>
                    {quote}
                    <span className="font-bold text-[#0e823e]">"</span>
                  </>
                )}
              </div>

              <div className="[font-family:'Inter',Helvetica] font-bold text-[#0c0c0c] text-xl leading-tight tracking-wide text-center">
                With My Legal Academy...
              </div>

              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 [font-family:'Inter',Helvetica] text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[#4d5256] font-medium">{stat.label}: </span>
                    <span
                      className={`font-bold ${
                        stat.highlight ? "text-[#0e823e]" : "text-[#0c0c0c]"
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original two-column design */}
        <div className="hidden lg:flex items-center gap-[70px] p-[50px]">
          {imagePosition === "left" && <ImageComponent />}

          <div className="flex-1 space-y-8">
            <div className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[48px] tracking-[-0.5px] leading-[56px]">
              {achievement}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-normal text-[#4d5256] text-[22px] leading-[32px] italic">
              {quote.includes("Success isn't about doing everything at once") || quote.includes("Tim proved that precision beats guesswork") ? (
                <>{quote}</>
              ) : (
                <>
                  <span className="font-bold text-[#0e823e]">"</span>
                  {quote}
                  <span className="font-bold text-[#0e823e]">"</span>
                </>
              )}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-bold text-[#0c0c0c] text-[22px] leading-[30px] tracking-wide">
              With My Legal Academy...
            </div>

            <div className="pl-8 space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 [font-family:'Inter',Helvetica] text-[36px] leading-[42px]"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-[#4d5256] font-medium">{stat.label}: </span>
                  <span
                    className={`font-bold ${
                      stat.highlight ? "text-[#0e823e]" : "text-[#0c0c0c]"
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