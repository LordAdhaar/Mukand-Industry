const MetricsSection = () => {
  const metrics = [
    {
      value: "₹150 Cr+",
      label: "Annual Packaging Supplied"
    },
    {
      value: "20+ Years",
      label: "Industry Experience"
    },
    {
      value: "500+",
      label: "Industrial Clients"
    },
    {
      value: "95%+",
      label: "Repeat Order Rate"
    }
  ];

  return (
    <section className="w-full bg-[#0C001D] overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 lg:mb-16">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-3 md:gap-5 mb-5">
              <p className="text-[#A9C9FF] text-sm md:text-base font-semibold font-['Archivo'] leading-6">
                Performance That Scales With You
              </p>
              <h2 className="text-[#EFF4FE] text-2xl md:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
                Built for Operational Demands, Backed by Measurable Results
              </h2>
            </div>
            <p className="text-[#DDDDDD] text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
              From fast-growing exporters to legacy FMCG brands, our flexible packaging solutions help clients reduce operational risk, improve supply chain speed, and scale with confidence.
            </p>
          </div>
        </div>

        {/* Metrics and Image Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Metrics Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-3 md:mb-5">
                    <div className="text-[#06C167] text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight mb-3">
                      {metric.value}
                    </div>
                    <div className="text-[#E8E8E8] text-base md:text-lg font-bold font-['Source_Sans_3'] tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-auto flex-shrink-0 mt-8 lg:mt-0">
            <img 
              className="w-full max-w-[400px] lg:max-w-[560px] h-auto mx-auto object-cover rounded-lg" 
              src="https://placehold.co/560x560" 
              alt="Industrial facility"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
