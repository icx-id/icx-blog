import type { IGatsbyImageData } from 'gatsby-plugin-image';

// TODO: enable when using gatsby image
// type Image = {
//   childImageSharp: {
//     gatsbyImageData: IGatsbyImageData;
//   };
// };

type Image = string;

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  appImage: Image;
  download: {
    name: string;
    logo: Image;
    link: string;
  }[];
};

export type CompanyListSectionProps = {
  title: string;
  imageDesktop: Image;
  imageMobile: Image;
};

export type TestimonySectionProps = {
  title: string;
  subtitle: string;
  testimonies: {
    author: string;
    authorImage: Image;
    company: string;
    description: string;
    image: Image;
  }[];
};

export type InvestmentSectionProps = {
  title: string;
  subtitle: string;
  flows: {
    title: string;
    description: string;
    image: Image;
  }[];
};

export type InvestorSectionProps = {
  title: string;
  subtitle: string;
  fundraising: {
    count: string;
    label: string;
    background: Image;
  };
  employment: {
    count: string;
    label: string;
    background: Image;
  };
  investor: {
    title: string;
    imageDesktop: Image;
    imageMobile: Image;
  };
};

export type MediaSectionProps = {
  title: string;
  subtitle: string;
  medias: {
    mediaName: string;
    logo: Image;
  }[];
};

export type HomeStaticQueryProps = {
  key: string;
  heroSection: HeroSectionProps;
  companyListSection: CompanyListSectionProps;
  testimonySection: TestimonySectionProps;
  investmentSection: InvestmentSectionProps;
  investorSection: InvestorSectionProps;
  mediaSection: MediaSectionProps;
};
