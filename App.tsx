import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoBarSection from './components/InfoBarSection';
import AboutSection from './components/AboutSection';
import EventBannerSection from './components/EventBannerSection';
import BenefitsSection from './components/BenefitsSection';
import NewsSection from './components/NewsSection';
import EventsSection from './components/EventsSection';
import AssociatesSection from './components/AssociatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <InfoBarSection />
        <AboutSection />
        <EventBannerSection />
        <BenefitsSection />
        <NewsSection />
        <EventsSection />
        <AssociatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;