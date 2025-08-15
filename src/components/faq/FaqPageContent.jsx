import { useState, useRef } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import faqData from '../../../mukand_faq_complete.json';
import FaqSummarySection from './FaqSummarySection';

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="self-stretch flex flex-col justify-start items-center py-6 border-b border-zinc-200">
    <div className="self-stretch inline-flex justify-start items-start gap-6">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
        <button
          onClick={onClick}
          className="w-full text-left self-stretch justify-start text-black text-lg font-semibold font-['Source_Sans_3'] leading-7"
        >
          {faq.question}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out pr-12 ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="self-stretch justify-start text-zinc-600 text-base font-normal font-['Source_Sans_3'] leading-normal">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
      <button onClick={onClick} className="pt-0.5 inline-flex flex-col justify-start items-start">
        {isOpen ? (
          <MinusIcon className="w-6 h-6 text-slate-900" />
        ) : (
          <PlusIcon className="w-6 h-6 text-slate-900" />
        )}
      </button>
    </div>
  </div>
);

const FaqPageContent = () => {
  const { sections } = faqData.mukand_industries_faq;
  const [activeSection, setActiveSection] = useState('General Questions');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const faqListRef = useRef(null);

  const currentFaqs = sections.find(s => s.section === activeSection)?.faqs || [];

  const handleToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <FaqSummarySection 
        sections={sections}
        setActiveSection={setActiveSection}
        setOpenFaqIndex={setOpenFaqIndex}
        faqListRef={faqListRef}
      />
      <div className="bg-white py-16 md:py-24" ref={faqListRef}>
        <div className="max-w-7xl mx-auto self-stretch px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-start items-start gap-10">
          <div className="w-full lg:w-60 flex flex-col justify-start items-start gap-4">
            <div className="px-2 rounded inline-flex justify-center items-center gap-2">
              <div className="h-6 flex justify-center items-center gap-2">
                <div className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] leading-snug">View by Topic</div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              {sections.map((section) => (
                <div key={section.section} className="rounded-[3px] inline-flex justify-start items-start">
                  <button
                    onClick={() => {
                      setActiveSection(section.section);
                      setOpenFaqIndex(0);
                    }}
                    className={`px-3.5 py-3 rounded-md shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex justify-center items-center gap-1.5 overflow-hidden text-xs font-bold font-['Space_Grotesk'] leading-none transition-colors ${
                      activeSection === section.section
                        ? 'bg-blue-800 text-indigo-100'
                        : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                    }`}
                  >
                    {section.section}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-end gap-10 w-full mt-10 lg:mt-0">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start text-gray-900 text-4xl md:text-5xl font-bold font-['Space_Grotesk']">{activeSection}</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              {currentFaqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openFaqIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPageContent;
