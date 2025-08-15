import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/landing/HeroSection';
import MetricsSection from '../components/landing/MetricsSection';
import CapabilitiesSection from '../components/landing/CapabilitiesSection';
import CollaborationsSection from '../components/landing/CollaborationsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CtaSection from '../components/common/CtaSection';
import FaqSection from '../components/faq/FaqSection';
import Footer from '../components/common/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CollaborationsSection />
      <MetricsSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
