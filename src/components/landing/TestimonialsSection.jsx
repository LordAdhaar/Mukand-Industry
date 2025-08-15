import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const testimonials = [
    {
      id: 1,
      company: 'Layers',
      logo: 'L',
      testimonial: "We needed small MOQ custom printed films — big converters turned us down. Mukand gave us a beautiful print run, fast delivery, and full transparency",
      author: "Ralph Edwards",
      position: "Product Designer",
      avatar: "https://placehold.co/64x64"
    },
    {
      id: 2,
      company: 'Sisyphus',
      logo: 'S',
      testimonial: "Mukand's packaging quality has significantly reduced our transit damage. Their stretch film performs consistently across our pan-India supply chain",
      author: "Hellen Jummy",
      position: "Team Lead",
      avatar: "https://placehold.co/64x64"
    },
    {
      id: 3,
      company: 'Circooles',
      logo: 'C',
      testimonial: "Their team helped us achieve tight deadlines with excellent print clarity and roll precision — rare in this price range. Highly dependable for pharma-grade packaging",
      author: "Hellena John",
      position: "Co-founder",
      avatar: "https://placehold.co/64x64"
    },
    {
      id: 4,
      company: 'Catalog',
      logo: 'C',
      testimonial: "Mukand Industries offered not just material — they worked with us on structural design, helping us meet UAE food-grade compliance for our honey line",
      author: "David Oshodi",
      position: "Manager",
      avatar: "https://placehold.co/64x64"
    },
    {
      id: 5,
      company: 'Quotient',
      logo: 'Q',
      testimonial: "What stands out is their responsiveness. For bulk core orders and ad-hoc requests, Mukand has been flexible and on-point without compromising quality",
      author: "Charolette Hanlin",
      position: "CEO",
      avatar: "https://placehold.co/64x64"
    }
  ];

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-slate-950 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight mb-5">
              They love us.
            </h2>
            <p className="text-neutral-200 text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
              Everything you need to know about our products, fulfillment, and order process.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                width: `${(testimonials.length / itemsPerView) * 100}%`,
                transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%`, padding: '0 0.75rem' }}
                >
                  <div className={`h-[400px] md:h-[480px] rounded-[20px] border border-slate-600 backdrop-blur-sm flex flex-col overflow-hidden ${
                    index === 2 ? 'bg-black/20' : 'bg-black/40'
                  }`}>
                    <div className="flex-1 p-6 md:p-8 flex flex-col gap-6">
                      {/* Company Logo */}
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-black font-bold text-lg">
                            {testimonial.logo}
                          </span>
                        </div>
                        <span className="ml-3 text-white font-semibold">
                          {testimonial.company}
                        </span>
                      </div>

                      {/* Testimonial Text */}
                      <div className="flex-1">
                        <p className="text-white text-xl md:text-2xl font-normal font-['Source_Sans_3'] leading-relaxed">
                          {testimonial.testimonial}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="pt-4 flex items-center gap-4">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <div className="text-white text-lg font-normal font-['Space_Grotesk'] leading-7">
                            {testimonial.author}
                          </div>
                          <div className="text-white text-base font-normal font-['Space_Grotesk'] leading-snug opacity-80">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-12 md:mt-16">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="px-4 py-3 rounded-lg border border-neutral-800 bg-black/20 backdrop-blur-sm flex items-center gap-2 text-white hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6" />
            <span className="text-base" style={{ fontFamily: 'Space Mono, monospace' }}>Prev</span>
          </button>
          
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="px-4 py-3 rounded-lg border border-neutral-800 bg-black/20 backdrop-blur-sm flex items-center gap-2 text-white hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <span className="text-base" style={{ fontFamily: 'Space Mono, monospace' }}>Next</span>
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
