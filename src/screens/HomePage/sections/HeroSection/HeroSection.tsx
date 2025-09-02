import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRight } from "lucide-react";
import image1 from '../../../../assets/images/image 1.png';
import image2 from '../../../../assets/images/image  2.png';
import image3 from '../../../../assets/images/image 3.png';
import imagev1 from '../../../../assets/images/image v1.png';
import imagev2 from '../../../../assets/images/image v2.png';
import imagev3 from '../../../../assets/images/image v3.png';
import imagev4 from '../../../../assets/images/image v4.png';
import imagev5 from '../../../../assets/images/Image v5.png';
import imagev6 from '../../../../assets/images/Image v6.png';
const testimonialData = [
  {
    name: "James P. Friel",
    category: "B2B",
    image: imagev1 ,
  },
  {
    name: "Jaime Cross",
    category: "Ecommerce",
    image: imagev2 ,
  },
  {
    name: "Garrett White",
    category: "Coaching/Consulting",
    image: imagev3 ,
  },
  {
    name: "Yanni Fikaris",
    category: "Local Small Business",
    image: imagev4,
  },
  {
    name: "Sarah Wells",
    category: "Blogging/Affiliate",
    image: imagev5,
  },
  {
    name: "Mindy & Mandy",
    category: "Network Marketing",
    image: imagev6,
  },
];

const successImages = [
  [image1],
[image2],
  [image3],
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f4f9fc] relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12">
            <div className="mb-4">
              <h1 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[40.3px] tracking-[-0.81px] leading-[48.3px] mb-2">
                Want To Hear What Attorneys Like Yourself
              </h1>
              <h1 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[40.3px] tracking-[-0.81px] leading-[48.3px]">
                Have To Say About My Legal Academy?
              </h1>
            </div>
            <div className="[font-family:'Caveat',Helvetica] font-bold text-[#0c0c0c] text-[36.2px] tracking-[0] leading-[50.7px]">
              Here You Go…
            </div>
          </header>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[21px] mb-12">
            {testimonialData.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="relative">
                    <div
                      className="w-full h-[201px] rounded-[8.05px] mb-6"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    />
                    <div className="text-center">
                      <h3 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-[20.1px] leading-[24.2px] mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#4d5256] text-[16.1px] leading-[22.5px]">
                        {testimonial.category}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
 <div className="text-center max-w-4xl mx-auto pb-8">
            <p className="[font-family:'Inter',Helvetica] font-normal italic text-[#60606b] text-[14.1px] leading-[19.7px]">
              This program is subject to MLA&apos;s prerequisites and process
              adherence. Spaces are limited. No guarantees of specific case
              outcomes. Compliance with State Bar guidelines required.
            </p>
          </div>
          {/* CTA Section */}
          <div className="text-center mb-8">
            <Button className="bg-[#0e823e] hover:bg-[#0e823e]/90 text-white text-[35.2px] leading-[48.3px] h-auto px-8 py-6 rounded-[3.02px] border border-[#00000021] shadow-[0px_4.03px_8.05px_#001c3826] [font-family:'Inter',Helvetica] font-normal">
              <span className="mr-4">See If You Qualify</span>
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Disclaimer */}
         
        </div>
      </div>

      {/* Black Success Story Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Success Story Header */}
            <div className="text-center mb-12">
              <h2 className="[font-family:'Inter',Helvetica] font-black text-white text-[40.3px] tracking-[-0.81px] leading-[48.3px] mb-6">
                You could be the next My Legal Academy Success Story
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#ffffffcc] text-[18.1px] leading-[27.2px]">
                To date, My Legal Academy has helped 1,400+ Law Firms scale
                using our proven methods
              </p>
            </div>

            {/* Success Images */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[21px] mb-12">
              {successImages.map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    className={`${
                      index === 0
                        ? "w-[402px] h-[268px]"
                        : index === 1
                          ? "w-[405px] h-[269px] rounded-[5.03px]"
                          : "w-[379px] h-[268px]"
                    } object-cover`}
                    alt={`Success story ${index + 1}`}
                    src={image}
                  />
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <Button className="bg-[#0e823e] hover:bg-[#0e823e]/90 text-white text-[35.2px] leading-[48.3px] h-auto px-8 py-6 rounded-[3.02px] border border-[#00000021] shadow-[0px_4.03px_8.05px_#001c3826] [font-family:'Inter',Helvetica] font-normal mb-4">
                <span className="mr-4">See If You Qualify</span>
                <ArrowRight className="w-6 h-6" />
              </Button>
              <p className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff99] text-[14.1px] leading-[19.7px]">
                Completely Done-For-You Case Generation System
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};