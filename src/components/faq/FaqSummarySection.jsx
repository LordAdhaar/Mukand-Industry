import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const FaqSummarySection = ({ sections, setActiveSection, setOpenFaqIndex, faqListRef }) => {
  const summarySections = [
    'Products & Customization',
    'Ordering & MOQ',
    'Shipping & Delivery',
    'Payment & Terms',
    'General Questions',
    'Quality & Compliance',
  ];

  const getSectionData = (sectionName) => {
    return sections.find(s => s.section === sectionName);
  };

  const handleFaqClick = (sectionName, faqIndex) => {
    const sectionData = getSectionData(sectionName);
    if (sectionData) {
      setActiveSection(sectionName);
      setOpenFaqIndex(faqIndex);
      setTimeout(() => {
        faqListRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <div className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-blue-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-xl text-neutral-200 font-normal font-['Source_Sans_3']">
            Clear answers to common queries about our packaging products, lead times, logistics, and order process. Can’t find what you’re looking for? <Link to="/contact" className="text-indigo-300 underline">Contact us</Link> for tailored support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summarySections.map(sectionName => {
            const section = getSectionData(sectionName);
            if (!section) return null;

            return (
              <div key={section.section} className="p-7 bg-slate-900 rounded-lg border border-blue-950 flex flex-col gap-4">
                <h3 className="text-indigo-300 text-xl font-normal font-['Space_Grotesk'] capitalize">{section.section}</h3>
                <hr className="border-gray-800" />
                <ul className="flex flex-col gap-4">
                  {section.faqs.slice(0, 3).map((faq, index) => (
                    <li key={index}>
                      <button onClick={() => handleFaqClick(section.section, index)} className="w-full text-left flex justify-between items-center gap-3 group">
                        <span className="flex-1 text-blue-50 text-base font-normal font-['Source_Sans_3'] group-hover:text-indigo-300 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronRightIcon className="w-5 h-5 text-blue-50 group-hover:text-indigo-300 transition-colors" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSummarySection;
