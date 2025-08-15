import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CtaSection from '../components/common/CtaSection';
import AboutUsHero from '../components/about/AboutUsHero';
import CompanyTimeline from '../components/about/CompanyTimeline';
import LeadershipSection from '../components/about/LeadershipSection';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <Navbar bgColor="bg-[#0C001D]" textColor="text-white" itemColor="text-white" />
      <div className="pt-20">
        <AboutUsHero />
        <CompanyTimeline />
        <LeadershipSection />
      </div>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
