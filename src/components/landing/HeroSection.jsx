import { Link } from 'react-router-dom';

const HeroSection = () => {
  const images = [
    "https://placehold.co/210x242/E5E7EB/6B7280?text=Product",
    "https://placehold.co/210x242/E5E7EB/6B7280?text=Product",
    "https://placehold.co/210x242/E5E7EB/6B7280?text=Product",
    "https://placehold.co/210x242/E5E7EB/6B7280?text=Product"
  ];
  return (
    <>
      <style>
        {`
          @keyframes scroll-up {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }
        `}
      </style>
      <div className="w-full max-w-[1440px] mx-auto min-h-screen relative px-4 md:px-10 pt-20 overflow-hidden">
        <div className="w-full lg:w-[880px] mt-8 md:mt-[113px] inline-flex flex-col justify-start items-start gap-6 md:gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-8 md:gap-12">
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                {/* Badge */}
                <div className="pl-1.5 pr-2.5 py-1.5 mix-blend-multiply bg-emerald-50 rounded-2xl outline outline-1 outline-emerald-200 inline-flex justify-start items-center gap-2 md:gap-3">
                  <div className="flex justify-start items-start">
                    <div className="px-2 md:px-3 py-1 bg-green-800 rounded-2xl flex justify-center items-center">
                      <div className="justify-start text-emerald-50 text-sm md:text-base font-medium font-['Archivo'] leading-tight">
                        Client Stories
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <div className="justify-start text-green-800 text-sm md:text-base font-medium font-['Archivo'] leading-tight">
                      Trusted by India's leading FMCG and Pharma exporters
                    </div>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Main Heading */}
                <h1 className="self-stretch justify-start text-gray-900 text-3xl md:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[1.2] lg:leading-[88px]">
                  High-performance flexible packaging that delivers at scale
                </h1>
              </div>
              
              {/* Description */}
              <p className="self-stretch justify-start text-gray-600 text-lg md:text-xl lg:text-2xl font-normal font-['Source_Sans_3'] leading-relaxed">
                Engineered stretch films, laminated rolls, and paper cores for industrial-grade 
                protection and performance. Built for brands that demand speed, consistency, and 
                custom solutions
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-3">
              <button className="w-full sm:w-auto px-4 md:px-5 py-3 bg-blue-50 rounded-lg shadow-sm outline outline-1 outline-offset-[-1px] outline-indigo-300 flex justify-center items-center gap-2 overflow-hidden hover:bg-blue-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="16" height="16" rx="2" stroke="#1E3A8A" strokeWidth="2"/>
                </svg>
                <span className="justify-start text-blue-800 text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Explore Products
                </span>
              </button>
              
              <Link to="/contact" className="w-full sm:w-auto px-4 md:px-5 py-3 bg-blue-800 rounded-lg shadow-sm outline outline-1 outline-offset-[-1px] outline-blue-800 flex justify-center items-center gap-2 overflow-hidden hover:bg-blue-900 transition-colors">
                <span className="justify-start text-indigo-100 text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Image Grid - Hidden on mobile and tablet */}
        <div className="hidden xl:block w-96 h-full absolute right-[78px] top-0">
          <div 
            className="w-52 left-[228px] top-0 absolute inline-flex flex-col justify-start items-start gap-4"
            style={{ animation: 'scroll-down 40s linear infinite' }}
          >
            {[...images, ...images].map((src, index) => (
              <img key={index} className="self-stretch h-60 relative rounded-xl object-cover" src={src} alt="Product showcase" />
            ))}
          </div>
          <div 
            className="w-52 left-0 top-[-34.25px] absolute inline-flex flex-col justify-start items-start gap-4"
            style={{ animation: 'scroll-up 40s linear infinite' }}
          >
            {[...images, ...images
            ].map((src, index) => (
              <img key={index} className="self-stretch h-60 relative rounded-xl object-cover" src={src} alt="Product showcase" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;