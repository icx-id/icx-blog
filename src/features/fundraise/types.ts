type JumbotronSectionProps = {
  title: string;
  desc: string;
};

type WhyFundraiseData = {
  icon: string;
  title: string;
  desc: string;
};

type TestimonyData = {
  author: string;
  authorImage: string;
  company: string;
  description: string;
  image: string;
};

type PortfolioSectionProps = {
  title: string;
  desc: string;
  descLine2: string;
};

type HowToFundraiseSectionProps = {
  title: string;
  desc: string;
  descLine2: string;
};

type InvestmentFlowSectionProps = {
  title: string;
  desc: string;
  descLine2: string;
};

type ContactUsSectionProps = {
  title: string;
  desc: string;
};

export type FundraiseStaticQueryProps = {
  key: string;
  jumbotronSection: JumbotronSectionProps;
  portfolioSection: PortfolioSectionProps;
  whyFundraiseSection: {
    title: string;
    data: WhyFundraiseData[];
  };
  testimonySection: {
    testimonies: TestimonyData[];
  };
  howToFundraiseSection: HowToFundraiseSectionProps;
  investmentFlowSection: InvestmentFlowSectionProps;
  contactUsSection: ContactUsSectionProps;
};
