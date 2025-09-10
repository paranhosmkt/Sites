import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoBarSection from './components/InfoBarSection';
import AboutSection from './components/AboutSection';
import EventBannerSection from './components/EventBannerSection';
import BenefitsSection from './components/BenefitsSection';
import NewsSection from './components/NewsSection';
import EventsSection from './components/EventsSection';
import PresidentMessageSection from './components/PresidentMessageSection';
import AssociatesSection from './components/AssociatesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
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
        <EventsSection />
        <PresidentMessageSection />
        <BenefitsSection />
        <AssociatesSection />
        <TestimonialsSection />
        <CtaSection />
        <InstagramFeedSection />
        <NewsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;