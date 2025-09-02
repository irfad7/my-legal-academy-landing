import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import mckinny from '../../../../assets/images/mckinny.png';
import dallas from '../../../../assets/images/dallas.png';
import bridgette from '../../../../assets/images/bridgette.png';
import jamie from '../../../../assets/images/jamie.png';
import tim from '../../../../assets/images/tim.png';
import malik from '../../../../assets/images/malik.png';
const testimonialData = [
  {
    name: "Demarcus Ward, Esq. from McKinney, Texas",
    achievement: "$2,700,000 in 12 months",
    quote:
      "This program and group have changed the course of my entire practice. Its impact has been felt throughout my entire office. It is simply the best investment that we have ever made. We are forever grateful.",
    timeFrame: "12 Months",
    signedClients: "540",
    revenue: "$2,700,000",
    costPerAcquisition: "$685",
    roi: "630%",
    imagePosition: "right" as const,
    imageSrc: mckinny,
  },
  {
    name: "Jose Escobar, Esq. from Dallas, Texas",
    achievement: "$150,000 in 5 months",
    quote:
      "Our firm hired My Legal Academy to help with our firm's Facebook advertising, and the results have been outstanding. Their team is knowledgeable, responsive, and truly understands the legal industry.",
    timeFrame: "5 Months",
    signedClients: "25",
    revenue: "$150,000",
    costPerAcquisition: "$993",
    roi: "504%",
    imagePosition: "left" as const,
    imageSrc: dallas,
  },
  {
    name: "Bridgette Williams, Esq. from Los Angeles, California",
    achievement: "$240,000 in 5 months",
    quote:
      "My experience with My Legal Academy has been fantastic. They have been absolutely wonderful with running our ads and giving me continuous updates and recommendations. They are dedicated to making sure my firm grows.",
    timeFrame: "5 Months",
    signedClients: "40",
    revenue: "$240,000",
    costPerAcquisition: "$856",
    roi: "600%",
    imagePosition: "right" as const,
    imageSrc: bridgette,
  },
  {
    name: "Jamie Alvarez, Esq. from Miramar, Florida",
    achievement: "$100,000 in 3 months",
    quote:
      "Sam and the rest of the team are wonderful. The program has really taught us how to work strategies effectively. They help us find the problems and solutions. We are very happy with what they are teaching us.",
    timeFrame: "3 Months",
    signedClients: "15",
    revenue: "$100,000",
    costPerAcquisition: "$1,466",
    roi: "354%",
    imagePosition: "left" as const,
    imageSrc: jamie ,
  },
  {
    name: "Tim Dominguez, Esq. from Irvine, California",
    achievement: "9 new cases in 30 days",
    quote:
      "Sam and the rest of the team are wonderful. The program has really taught us how to work strategies effectively. They help us find the problems and solutions. We are very happy with what they are teaching us.",
    timeFrame: "30 Days",
    signedClients: "9",
    revenue: "$72,000",
    costPerAcquisition: "$900",
    roi: "789%",
    imagePosition: "right" as const,
    imageSrc: tim,
  },
  {
    name: "Malik Hannah, Esq. from Rowlett, Texas",
    achievement: "3 new cases in 10 days",
    quote:
      "Sam and the rest of the team are wonderful. The program has really taught us how to work strategies effectively. They help us find the problems and solutions. We are very happy with what they are thinking us.",
    timeFrame: "10 Days",
    signedClients: "3",
    revenue: "$15,000",
    costPerAcquisition: "$281",
    roi: "1,679%",
    imagePosition: "left" as const,
    imageSrc: malik ,
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-10">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};