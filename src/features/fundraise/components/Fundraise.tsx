import { Box } from '@mantine/core';
import React from 'react';
import { JumbotronSection } from './JumbotronSection';
import { PortfolioSection } from './PortfolioSection';
import { AchievementSection } from './AchievementSection';
import { WhyFundraiseSection } from './WhyFundraiseSection/WhyFundraiseSection';
import { HowToFundraiseSection } from './HowToFundraiseSection/HowToFundraiseSection';
import { InvestmentFlowSection } from './InvestmentFlowSection';
import { ContactUsSection } from './ContactUsSection';
import { TestimonySection } from './TestimonySection';
import { useFundraiseStaticQuery } from '../hooks/useFundraiseStaticQuery';

export const Fundraise = () => {
  const {
    jumbotronSection,
    portfolioSection,
    whyFundraiseSection,
    testimonySection,
    howToFundraiseSection,
    investmentFlowSection,
    contactUsSection,
  } = useFundraiseStaticQuery();

  console.log(
    jumbotronSection,
    portfolioSection,
    whyFundraiseSection,
    testimonySection,
    howToFundraiseSection,
    investmentFlowSection,
    contactUsSection,
  );
  return (
    <Box>
      <JumbotronSection {...jumbotronSection} />
      <PortfolioSection {...portfolioSection} />
      <AchievementSection />
      <WhyFundraiseSection {...whyFundraiseSection} />
      <TestimonySection {...testimonySection} />
      <HowToFundraiseSection {...howToFundraiseSection} />
      <InvestmentFlowSection {...investmentFlowSection} />
      <ContactUsSection {...contactUsSection} />
    </Box>
  );
};
