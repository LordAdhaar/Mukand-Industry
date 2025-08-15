import React from 'react';

const TimelineItem = ({ year, title, description }) => (
  <div className="self-stretch flex flex-col justify-center items-start gap-6">
    <div className="self-stretch flex flex-col md:flex-row justify-end items-start gap-4 md:gap-10">
      <div className="w-full md:w-48 flex md:flex-col justify-start md:justify-start md:items-end gap-5">
        <div className="text-left md:text-right text-black text-2xl md:text-3xl font-medium font-['Space_Grotesk']">{year}</div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch text-black text-xl font-bold font-['Space_Grotesk'] leading-snug">{title}</div>
            </div>
            <div className="self-stretch text-neutral-600 text-sm font-normal font-['Source_Sans_3']">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden md:block self-stretch h-px bg-gray-200 w-full" />
  </div>
);

const CompanyTimeline = () => {
  const timelineItems = [
    {
      year: "2000",
      title: "Founded with a single core-cutting machine, serving local textile units",
      description: "From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence."
    },
    {
      year: "2005",
      title: "Introduced stretch film production and began working with regional FMCG brands",
      description: "From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence."
    },
    {
      year: "2010",
      title: "Expanded facility, added solventless lamination and slitting infrastructure",
      description: "From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence."
    },
    {
      year: "2015",
      title: "Certified with ISO 9001, began serving pharma and export clients",
      description: "From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence."
    },
    {
      year: "2020",
      title: "Crossed ₹150 Cr+ packaging output milestone, launched digital transformation",
      description: "From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence."
    },
    {
      year: "2025",
      title: "Expanded product line to mono-material laminates, targeting UAE & SEA markets",
      description: "From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence."
    }
  ];

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 px-0 md:px-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-sky-700 text-base font-semibold font-['Archivo'] leading-normal">Performance That Scales With You</div>
              <h2 className="text-black text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight">Built to Serve India's Supply Chain</h2>
            </div>
            <p className="text-neutral-600 text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
              Founded in 2000, Mukand Industries has grown into a trusted packaging manufacturer with in-house converting infrastructure, 
              B2B-first processes, and a strong focus on quality, speed, and customization.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index} 
              year={item.year} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTimeline;
