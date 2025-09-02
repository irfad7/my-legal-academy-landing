import React from "react"
import secondbannerIcon from '../../../../assets/imagES/second-banner.png';
const benefitsList = [
  {
    title: "1. Speed to execution",
    description: "→ Calls returned in under 60 seconds = higher signed cases.",
  },
  {
    title: "2. AI-enhanced Followup That Doesn't Quit",
    description: "→ 15 touches in 7 days closes more clients.",
  },
  {
    title: "3- Transparent ROI",
    description: "→ Know exactly what it costs to generate every signed case.",
  },
  {
    title: "4. All Proven Ad Creatives",
    description: "→ Lean on proven results based on research and testing.",
  },
  {
    title: "5. Scalable Cash-Flow Model",
    description: "→ Control the speed and direction of your growth.",
  },
];

export const FeaturedCasesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(224,236,251,1)_0%,rgba(244,249,252,1)_100%)] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <header>
              <h2 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[40.3px] tracking-[-0.81px] leading-[48.3px]">
                So, Why it works?
              </h2>
            </header>

            <div className="space-y-4 [font-family:'Inter',Helvetica] text-[18.1px] leading-[27.2px]">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-bold text-[#0c0c0c]">
                    {benefit.title}
                  </div>
                  <div className="text-[#0c0c0c]">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[573px] h-[400px]  flex items-center justify-center">
              <div className="text-center p-8">
                <img src={secondbannerIcon} alt="" />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
