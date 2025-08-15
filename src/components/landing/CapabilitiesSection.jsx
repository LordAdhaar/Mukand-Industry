import customLaminatedRolls from '../../assets/capabilities/custom-laminated-rolls.png'
import stretchFilm from '../../assets/capabilities/stretch-film.png'
import paperCores from '../../assets/capabilities/paper-cores.png'
import productionInfrastructure from '../../assets/capabilities/production-infrastructure.png'

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Custom Laminated Rolls",
      description: "Multi-layer flexible packaging for food, pharma, and consumer goods printable and barrier-protected to your brand's exact specifications",
      image: customLaminatedRolls,
      large: true
    },
    {
      title: "High-Performance Stretch Film",
      description: "Durable and consistent stretch film rolls for pallet wrapping and industrial logistics",
      image: stretchFilm,
      large: false
    },
    {
      title: "Precision Paper Cores",
      description: "Manufactured for strength, precision, and dimensional accuracy ideal for film.",
      image: paperCores,
      large: false
    },
    {
      title: "In-House Production Infrastructure",
      description: "End-to-end converting capability including slitting, lamination, core cutting, and wrapping ensures tight control over quality and lead times.",
      image: productionInfrastructure,
      large: true
    }
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden py-12 md:py-16 lg:py-24">
      {/* Background decorative images - hidden on mobile */}
      <img 
        className="hidden lg:block w-[929px] h-[939px] absolute left-[255px] top-[-68px] opacity-10" 
        src="https://placehold.co/929x939/E5E7EB/9CA3AF?text=Background" 
        alt=""
        aria-hidden="true"
      />
      <img 
        className="hidden xl:block w-96 h-96 absolute right-0 bottom-0 opacity-10" 
        src="https://placehold.co/390x363/E5E7EB/9CA3AF?text=Decoration" 
        alt=""
        aria-hidden="true"
      />
      <img 
        className="hidden xl:block w-96 h-96 absolute left-0 bottom-0 opacity-10" 
        src="https://placehold.co/390x363/E5E7EB/9CA3AF?text=Decoration" 
        alt=""
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-violet-700 text-base font-semibold font-['Archivo'] leading-normal mb-3">
              Our Capabilities
            </p>
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
              Industrial-Grade Flexible Packaging, Built for Every Scale
            </h2>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-6 md:space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Custom Laminated Rolls - Large Card */}
            <div className="lg:col-span-2 bg-white rounded-xl border-2 border-neutral-200 overflow-hidden">
              <img 
                className="w-full h-48 md:h-64 object-cover" 
                src={capabilities[0].image}
                alt={capabilities[0].title}
              />
              <div className="px-6 md:px-7 py-4 bg-neutral-50">
                <h3 className="text-gray-900 text-lg font-bold font-['Archivo'] leading-7 tracking-tight mb-1.5">
                  {capabilities[0].title}
                </h3>
                <p className="text-gray-700 text-base font-normal font-['Source_Sans_3'] leading-normal tracking-wide">
                  {capabilities[0].description}
                </p>
              </div>
            </div>

            {/* High-Performance Stretch Film - Small Card */}
            <div className="bg-white rounded-xl border-2 border-neutral-200 overflow-hidden">
              <img 
                className="w-full h-48 md:h-64 object-cover" 
                src={capabilities[1].image}
                alt={capabilities[1].title}
              />
              <div className="px-6 py-4 bg-neutral-50">
                <h3 className="text-gray-900 text-lg font-bold font-['Archivo'] leading-7 tracking-tight mb-1.5">
                  {capabilities[1].title}
                </h3>
                <p className="text-gray-700 text-base font-normal font-['Source_Sans_3'] leading-normal tracking-wide">
                  {capabilities[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Precision Paper Cores - Small Card */}
            <div className="bg-white rounded-xl border-2 border-neutral-200 overflow-hidden">
              <img 
                className="w-full h-48 md:h-64 object-cover" 
                src={capabilities[2].image}
                alt={capabilities[2].title}
              />
              <div className="px-6 py-4 bg-neutral-50">
                <h3 className="text-gray-900 text-lg font-bold font-['Archivo'] leading-7 tracking-tight mb-1.5">
                  {capabilities[2].title}
                </h3>
                <p className="text-gray-700 text-base font-normal font-['Source_Sans_3'] leading-normal tracking-wide">
                  {capabilities[2].description}
                </p>
              </div>
            </div>

            {/* In-House Production Infrastructure - Large Card */}
            <div className="lg:col-span-2 bg-white rounded-xl border-2 border-neutral-200 overflow-hidden">
              <img 
                className="w-full h-48 md:h-64 object-cover" 
                src={capabilities[3].image}
                alt={capabilities[3].title}
              />
              <div className="px-6 py-4 bg-neutral-50">
                <h3 className="text-gray-900 text-lg font-bold font-['Archivo'] leading-7 tracking-tight mb-1.5">
                  {capabilities[3].title}
                </h3>
                <p className="text-gray-700 text-base font-normal font-['Source_Sans_3'] leading-normal tracking-wide">
                  {capabilities[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
