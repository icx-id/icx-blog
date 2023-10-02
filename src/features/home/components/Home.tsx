import * as React from 'react';
import { PageProps } from 'gatsby';
import { useHomeStaticQuery } from '../hooks/useHomeStaticQuery';
import { HeroSection } from './sections/HeroSection';
import { CompanyListSection } from './sections/CompanyListSection';
import { TestimonySection } from './sections/TestimonySection';
import { InvestmentSection } from './sections/InvestmentSection';
import { InvestorSection } from './sections/InvestorSection';
import { MediaSection } from './sections/MediaSection';
import { ContactUsSection } from './sections/ContactUsSection';

export const Home: React.FC<PageProps> = () => {
  const {
    heroSection,
    companyListSection,
    testimonySection,
    investmentSection,
    investorSection,
    mediaSection,
  } = useHomeStaticQuery();

  return (
    <>
      <HeroSection {...heroSection} />
      <CompanyListSection {...companyListSection} />
      <TestimonySection {...testimonySection} />
      <InvestmentSection {...investmentSection} />
      <InvestorSection {...investorSection} />
      <ContactUsSection />
      <MediaSection {...mediaSection} />
    </>
  );
};

export default Home;
