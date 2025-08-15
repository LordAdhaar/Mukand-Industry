import React from 'react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Lokesh Bansal",
      title: "Director, Mukand Industries Pvt. Ltd.",
      bio: "With over two decades of leadership, Lokesh has led Mukand's transition from a small packaging unit to a pan-India supplier. His focus on infrastructure, trust, and long-term partnerships remains central to the company's culture and vision."
    },
    {
      name: "Lokesh Bansal",
      title: "Director, Mukand Industries Pvt. Ltd.",
      bio: "With over two decades of leadership, Lokesh has led Mukand's transition from a small packaging unit to a pan-India supplier. His focus on infrastructure, trust, and long-term partnerships remains central to the company's culture and vision."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-neutral-50">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Section - Header */}
        <div className="w-full lg:w-80 flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <h2 className="self-stretch text-black text-2xl md:text-3xl font-bold font-['Space_Grotesk']">
              Meet our Leadership
            </h2>
          </div>
          <p className="self-stretch text-black text-lg md:text-xl font-normal font-['Source_Sans_3']">
            Meet our innovative team dedicated to transforming ideas into reality. With diverse expertise, we strive to deliver exceptional solutions that empower businesses and enhance user experiences.
          </p>
        </div>

        {/* Right Section - Leaders */}
        <div className="flex-1 flex flex-col justify-start items-start gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-full md:w-auto flex-shrink-0">
                <img 
                  className="w-full max-w-[400px] h-auto aspect-square rounded-lg object-cover" 
                  src="https://placehold.co/400x400" 
                  alt={`${leader.name} portrait`}
                />
              </div>
              <div className="w-full md:max-w-[480px] p-2 flex flex-col gap-4">
                <h3 className="text-black text-2xl md:text-3xl font-bold font-['Space_Grotesk']">
                  {leader.name}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-black text-lg md:text-xl font-bold font-['Source_Sans_3'] leading-snug">
                    {leader.title}
                  </p>
                  <p className="text-black text-base font-normal font-['Source_Sans_3']">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
