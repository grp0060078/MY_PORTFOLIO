// App.jsx

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css'; 



function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      

      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      
      <Footer />
      
    </div>
  );
}

export default App;

