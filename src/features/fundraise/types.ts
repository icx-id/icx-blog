import { PropsWithChildren } from 'react';

export type JumbotronSectionProps = {
  title: string;
  desc: string;
};

type WhyFundraiseData = {
  icon: string;
  title: string;
  desc: string;
};

export type WhyFundraiseSectionProps = {
  title: string;
  data: WhyFundraiseData[];
};

type TestimonyData = {
  author: string;
  authorImage: string;
  company: string;
  description: string;
  image: string;
};

export type TestimonySectionProps = {
  testimonies: TestimonyData[];
};

export type PortfolioSectionProps = {
  title: string;
  desc: string;
  descLine2: string;
};

export type HowToFundraiseSectionProps = {
  title: string;
  desc: string;
  descLine2: string;
};

export type InvestmentFlowSectionProps = {
  title: string;
  desc: string;
  descLine2: string;
};

export type ContactUsSectionProps = {
  title: string;
  desc: string;
};

export type FundraiseStaticQueryProps = {
  key: string;
  jumbotronSection: JumbotronSectionProps;
  portfolioSection: PortfolioSectionProps;
  whyFundraiseSection: WhyFundraiseSectionProps;
  testimonySection: TestimonySectionProps;
  howToFundraiseSection: HowToFundraiseSectionProps;
  investmentFlowSection: InvestmentFlowSectionProps;
  contactUsSection: ContactUsSectionProps;
};

export type WhyFundraiseSectionCardItemProps = {
  title: string;
  desc: string;
  icon: string;
};

export type HowToFundraiseSectionCardItemProps = {
  title: string;
  number: number;
};

export interface WrapperProps extends PropsWithChildren {
  title: string;
  gradientTitle?: boolean;
  desc?: string;
  descLine2?: string;
  bg: string;
  pb?: number;
}
