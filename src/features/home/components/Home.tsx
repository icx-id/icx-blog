import * as React from 'react';
import { PageProps } from 'gatsby';
import { createStyles } from '@mantine/core';
import { useHomeStaticQuery } from '../hooks/useHomeStaticQuery';
import { HeroSection } from './sections/HeroSection';
import { CompanyListSection } from './sections/CompanyListSection';
import { TestimonySection } from './sections/TestimonySection';
import { InvestmentSection } from './sections/InvestmentSection';
import { InvestorSection } from './sections/InvestorSection';
import { MediaSection } from './sections/MediaSection';

// --------------------------------------------- styles

const useStyles = createStyles(theme => ({
  hero: {
    minHeight: '100vh',
    color: '#fff',
    backgroundColor: '#000',
  },
}));

// --------------------------------------------- components

export const Home: React.FC<PageProps> = () => {
  const { classes } = useStyles();
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
      <MediaSection {...mediaSection} />
    </>
  );
};

export default Home;
