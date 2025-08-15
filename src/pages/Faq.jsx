import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FaqPageContent from '../components/faq/FaqPageContent';
import CtaSection from '../components/common/CtaSection';

const FaqPage = () => {
  return (
    <div className="bg-white">
      <Navbar bgColor="bg-[#0C001D]" textColor="text-white" itemColor="text-white" />
      <div className="pt-20">
          <FaqPageContent />
      </div>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default FaqPage;