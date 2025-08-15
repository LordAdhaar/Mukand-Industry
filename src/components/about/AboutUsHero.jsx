import React from 'react';
import './AboutUsHero.css';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-indigo-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const AboutUsHero = () => {
  const milestones = [
    { text: "Crossed", bold: "₹150 Cr+", rest: "in annual packaging output across stretch films, laminates, and paper cores." },
    { text: "Expanded", bold: "production capacity", rest: "with in-house lamination, slitting, and core-cutting infrastructure." },
    { text: "Earned trust of", bold: "500+ industrial clients", rest: ", including leading FMCG and export brands." },
    { text: "Certified with", bold: "ISO 9001 and MSME registration", rest: ", enabling pharma-grade and export-compliant packaging." }
  ];

  return (
    <div className="bg-[#0C001D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              <span className="text-blue-50">Your Partner in </span>
              <span className="performance-driven-text">Performance-Driven Packaging</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
              With over two decades of experience, Mukand Industries Pvt. Ltd. has become a trusted name in the Indian packaging landscape. We specialize in manufacturing high-performance flexible packaging materials — including stretch films, laminated rolls, and precision-engineered paper cores — built to support industrial-scale operations. From growing startups to established national brands, our packaging is designed to protect, perform, and deliver.
              <br/><br/>
              At the core of our operations is an in-house converting infrastructure equipped for slitting, lamination, core cutting, and rewinding — enabling speed, consistency, and customization at scale. We serve a wide range of industries including FMCG, pharmaceuticals, textiles, and export logistics, helping them streamline their supply chains with packaging that’s both cost-effective and quality-assured.
              <br/><br/>
              As a privately held company with deep roots in India’s manufacturing ecosystem, our mission is simple: to make industrial packaging smarter, faster, and more dependable. Every roll we deliver reflects our commitment to engineering excellence, operational transparency, and long-term client partnerships.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="py-6 flex flex-col gap-4">
              <h2 className="text-indigo-300 text-base font-semibold font-['Archivo'] leading-normal tracking-wider uppercase">Milestones</h2>
              <div className="flex flex-col gap-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="flex-1 text-base text-neutral-200 font-['Source_Sans_3']">
                      {milestone.text} <span className="font-bold text-indigo-300">{milestone.bold}</span> {milestone.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
