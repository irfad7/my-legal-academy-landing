import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRight } from "lucide-react";
import starIcon from '../../../../assets/icons/star.png';
import Profile1 from '../../../../assets/images/william.png';
import Profile2 from '../../../../assets/images/mois.png';
import Profile3 from '../../../../assets/images/Paul.png';


const statisticsData = [
  {
    value: "15",
    label: "Average Signed",
    sublabel: "Cases Per Month",
  },
  {
    value: "$63k",
    label: "Average",
    sublabel: "Monthly Revenue",
  },
  {
    value: "873%",
    label: "Average",
    sublabel: "ROI Percentage",
  },
];

const testimonialsData = [
  {
    name: "William McMahon, Esq.",
    location: "Chicago, Illinois",
    quote:
      "MLA pushed us to modernise fast. Launched Facebook leads with coordinator support, and now we're hiring 2 attorneys and a closer to handle demand.",
    image: Profile1,
  },
  {
    name: "Moises Anguilar, Esq.",
    location: "Santa Ana, California",
    quote:
      "Our straightforward acquisition system signed 35 clients at a 6% conversion rate while keeping CPA under $700!",
      image: Profile2,
  },
  {
    name: "Paul Campson, Esq.",
    location: "White Plains, New York",
    quote:
      "Embracing MLA's system end-to-end was a game-changer. Full implementation clicked across the practice. The approach is tried and true, and when you follow it wholeheartedly, it delivers real growth!",
      image: Profile3,
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(90deg,rgba(244,249,252,1)_49%,rgba(224,236,251,1)_100%)] py-16 px-4 relative">
      <div className="max-w-7xl mx-auto relative">
        <Card className="w-full max-w-[577px] mx-auto mb-16 bg-white rounded-[8.05px] shadow-[0px_0px_20.13px_#002c7a14]">
          <CardContent className="flex items-start gap-[7.04px] p-[30.19px_20.11px_20.13px_20.11px]">
            {statisticsData.map((stat, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#0e823e] text-[50.3px] leading-[22.5px] mb-4">
                  {stat.value}
                </div>
                <div className="space-y-1">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#0c0c0c] text-[14.1px] leading-[22.5px]">
                    {stat.label}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#0c0c0c] text-[14.1px] leading-[22.5px]">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="text-center mb-28">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((index) => (
              <img src={starIcon} alt="" className="w-[26px] obect-contain " />
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#0e823e] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MLA</span>
            </div>
            {/* <span className="text-[#0e823e] font-bold text-xl">My Legal Academy</span> */}
          </div>

          <h2 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[40.3px] text-center tracking-[-0.81px] leading-[48.3px] mb-6">
            Top Personal Injury Firms <br />
            Trust PI Track
          </h2>

          <div className="[font-family:'Caveat',Helvetica] font-bold text-[#0c0c0c] text-[36.2px] leading-[50.7px]">
            See For Yourself…
          </div>
        </div>

        <div className="relative mb-16">
          <div className="flex gap-[26.42px] justify-center ">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="w-[354.04px] bg-white rounded-[8.05px] shadow-[0px_0px_40.25px_#002c7a21]"
              >
                <CardContent className="p-8 relative">
               <div className="flex justify-center w-full absolute -top-28 left-0">
                 <img src={testimonial.image} alt=""  className="w-[180px] object-contain "/>
               </div>
                  <div className="text-center mb-6 pt-16">
                    <h3 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[18.1px] leading-[27.2px] mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#4d5256] text-[14.1px] leading-[21.1px]">
                      {testimonial.location}
                    </p>
                  </div>

                  <blockquote className="[font-family:'Inter',Helvetica] font-normal text-[#4d5256] text-[20.1px] text-center leading-[24.2px]">
                    <span className="font-bold">"</span>
                    {testimonial.quote.includes("35 clients") ? (
                      <>
                        Our straightforward acquisition system signed{" "}
                        <span className="font-bold">35 clients</span> at a 6%
                        conversion rate while keeping{" "}
                        <span className="font-bold">CPA under $700!"</span>
                      </>
                    ) : testimonial.quote.includes(
                      "The approach is tried and true",
                    ) ? (
                      <>
                        Embracing MLA's system end-to-end was a game-changer.
                        Full implementation clicked across the practice.{" "}
                        <span className="font-bold">
                          The approach is tried and true
                        </span>
                        , and when you follow it wholeheartedly, it delivers{" "}
                        <span className="font-bold">real growth!"</span>
                      </>
                    ) : (
                      <>
                        {testimonial.quote.substring(
                          0,
                          testimonial.quote.indexOf("we're hiring"),
                        )}
                        <span className="font-bold">
                          we're hiring 2 attorneys and a closer to handle
                          demand."
                        </span>
                      </>
                    )}
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
         

          <Button className="h-auto bg-[#0e823e] hover:bg-[#0e823e]/90 text-white px-8 py-6 rounded-[3.02px] border border-[#00000021] shadow-[0px_4.03px_8.05px_#001c3826]">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[35.2px] leading-[48.3px] mr-2">
              See If You Qualify
            </span>
            <ArrowRight className="w-6 h-6" />
          </Button>
           <p className="[font-family:'Inter',Helvetica] font-medium text-[#60606b] text-[14.1px] leading-[19.7px] mb-4 pt-4">
            Completely Done-For-You Case Generation System
          </p>
        </div>
      </div>
    </section>
  );
};
