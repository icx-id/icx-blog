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

  return (
    <Box>
      <JumbotronSection title={jumbotronSection.title} desc={jumbotronSection.desc} />
      <PortfolioSection
        title={portfolioSection.title}
        desc={portfolioSection.desc}
        descLine2={portfolioSection.descLine2}
      />
      <AchievementSection />
      <WhyFundraiseSection title={whyFundraiseSection.title} data={whyFundraiseSection.data} />
      {/* <TestimonySection testimonies={testimonySection.testimonies} /> */}
      <HowToFundraiseSection
        title={howToFundraiseSection.title}
        desc={howToFundraiseSection.desc}
        descLine2={howToFundraiseSection.descLine2}
      />
      <InvestmentFlowSection
        title={investmentFlowSection.title}
        desc={investmentFlowSection.desc}
        descLine2={investmentFlowSection.descLine2}
      />
      <ContactUsSection title={contactUsSection.title} desc={contactUsSection.desc} />
    </Box>
  );
};
