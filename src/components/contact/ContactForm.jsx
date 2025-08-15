import React from 'react';

const ContactForm = () => {
  return (
    <>
      <div className="bg-slate-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center flex flex-col items-center gap-5">
            <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-blue-50">
              Let’s Talk Packaging
            </h1>
            <p className="text-xl md:text-2xl font-normal font-['Source_Sans_3'] text-neutral-200">
              Have a requirement, question, or need expert input? Our team is ready to help you choose the right packaging solutions for your business.
            </p>
          </div>

          <div className="w-full max-w-[666px] p-6 bg-slate-900 rounded-2xl border border-blue-950 flex flex-col gap-8">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">First Name*</label>
                  <input type="text" id="first-name" placeholder="Utkarsh" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk'] placeholder-indigo-300/50" />
                </div>
                <div className="flex-1">
                  <label htmlFor="last-name" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">Last Name*</label>
                  <input type="text" id="last-name" placeholder="Mishra" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk'] placeholder-indigo-300/50" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">Work Email Address*</label>
                <input type="email" id="email" placeholder="design.utkarsh0@gmail.com" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk'] placeholder-indigo-300/50" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">Phone Number (with country code)*</label>
                <input type="tel" id="phone" placeholder="8426876625" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk'] placeholder-indigo-300/50" />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">Please Select*</label>
                <select id="role" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-neutral-400 text-base font-light font-['Space_Grotesk']">
                  <option>Manufacturer / Exporter / Distributor / Brand / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">Company Name*</label>
                <input type="text" id="company" placeholder="Antler" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk'] placeholder-indigo-300/50" />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">What Country are you located in?*</label>
                <select id="country" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk']">
                  <option>India</option>
                </select>
              </div>

              <div>
                <label htmlFor="discussion-topic" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">What would you like to discuss?*</label>
                <select id="discussion-topic" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-neutral-400 text-base font-light font-['Space_Grotesk']">
                  <option>Request a Quote / Product Inquiry / Bulk Order / Compliance & Documentation / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-normal font-['Source_Sans_3'] text-zinc-400 mb-2">Describe your packaging requirement or question</label>
                <textarea id="description" placeholder="Antler" rows="4" className="w-full px-3 py-2 bg-gray-800 rounded-[5px] text-indigo-300 text-base font-medium font-['Space_Grotesk'] placeholder-indigo-300/50"></textarea>
              </div>
            </form>

            <button className="w-full px-8 py-3 bg-blue-800 rounded-lg shadow-[0px_0px_12px_6px_rgba(25,72,163,0.30)] text-white text-2xl font-semibold font-['Space_Grotesk'] hover:bg-blue-900 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;