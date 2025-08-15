import React from 'react';
import {
  EnvelopeIcon,
  BoltIcon,
  FaceSmileIcon,
  BeakerIcon,
  CpuChipIcon,
  BuildingStorefrontIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const CollaborationsSection = () => {
  const partners1 = [
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
  ];

  
  const partners2 = [
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
  ];

  const partners3 = [
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
    "https://placehold.co/150x150/E5E7EB/6B7280?text=Partner",
  ];


  const orbitIcons = [
    { icon: EnvelopeIcon },
    { icon: BoltIcon },
    { icon: FaceSmileIcon },
    { icon: BeakerIcon },
    { icon: CpuChipIcon },
    { icon: BuildingStorefrontIcon },
    { icon: TruckIcon },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-violet-700 text-base font-semibold font-['Archivo'] leading-normal">
            Industry's Penetrated
          </p>
          <h2 className="mt-3 text-gray-900 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
            Collaborations That Drive India’s Supply Chain
          </h2>
          <p className="mt-5 text-gray-600 text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
            Mukand Industries is proud to support some of India’s most respected FMCG, pharma, textile, and logistics brands with reliable, high-volume packaging solutions.
          </p>
        </div>

        <div className="mt-32 mb-32 h-96 flex items-center justify-center relative">
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gray-200/30 rounded-full blur-3xl"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border border-solid border-gray-300/50 orbit-animation">
              <div className="absolute top-1/2 left-1/2 w-[133.33%] h-[133.33%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-gray-300/30">
                <div className="absolute top-1/2 left-1/2 w-[125%] h-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-gray-300/20">
                  <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-gray-300/10"></div>
                </div>
              </div>
              {orbitIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="absolute w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${index * (360 / orbitIcons.length)}deg) translate(10rem) rotate(-${index * (360 / orbitIcons.length)}deg)`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-violet-500" strokeWidth={1.5} />
                  </div>
                );
              })}
            </div>
            <div className="w-40 h-40 md:w-48 md:h-48 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 15.27V8.73L12 4l8 4.73v6.54L12 20l-8-4.73zM12 13.4l-4-2.37v-2.1l4 2.37v2.1z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="space-y-8">
            <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
              {partners1.map((logo, index) => (
                <img key={index} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full" src={logo} alt={`Partner logo ${index + 1}`} />
              ))}
            </div>
            <div className="flex justify-center items-center gap-8 md:gap-10 flex-wrap">
              {partners2.map((logo, index) => (
                <img key={index} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full" src={logo} alt={`Partner logo ${index + 1 + partners1.length}`} />
              ))}
            </div>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {partners3.map((logo, index) => (
                <img key={index} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full" src={logo} alt={`Partner logo ${index + 1 + partners1.length + partners2.length}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
            Collaborations That Drive India’s Supply Chain
          </h2>
          <div className="mt-8">
            <button className="px-5 py-3 bg-blue-800 text-indigo-100 text-base font-bold font-['Space_Grotesk'] rounded-lg shadow-sm hover:bg-blue-900 transition-colors">
              View All Partners
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
