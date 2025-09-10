import React from 'react';

import AboutHeroSection from '../components/AboutHeroSection';
import InfoBarSection from '../components/InfoBarSection';
import PresidentMessageSection from '../components/PresidentMessageSection';
import CtaSection from '../components/CtaSection';


const QuemSomosPage: React.FC = () => {
  return (
    <>
      <AboutHeroSection />
      <InfoBarSection />
      <PresidentMessageSection />
      <CtaSection />
    </>
  );
};

export default QuemSomosPage;