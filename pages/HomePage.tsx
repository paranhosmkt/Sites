import React from 'react';

import HeroSection from '../components/HeroSection';
import InfoBarSection from '../components/InfoBarSection';
import AboutSection from '../components/AboutSection';
import EventBannerSection from '../components/EventBannerSection';
import EventsSection from '../components/EventsSection';
import PresidentMessageSection from '../components/PresidentMessageSection';
import BenefitsSection from '../components/BenefitsSection';
import AssociatesSection from '../components/AssociatesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import InstagramFeedSection from '../components/InstagramFeedSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;