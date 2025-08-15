import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import FaqPage from './pages/Faq';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/common/ScrollToTop';
import './index.css';
import './components/about/AboutUsHero.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<LandingPage />} /> {/* Placeholder route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
