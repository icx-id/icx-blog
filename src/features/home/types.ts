import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  appImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  download: {
    name: string;
    logo: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    link: string;
  }[];
};

export type CompanyListSectionProps = {
  title: string;
  imageDesktop: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  imageMobile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export type TestimonySectionProps = {
  title: string;
  subtitle: string;
  testimonies: {
    author: string;
    authorImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    company: string;
    description: string;
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  }[];
};

export type InvestmentSectionProps = {
  title: string;
  subtitle: string;
  flows: {
    title: string;
    description: string;
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  }[];
};

export type InvestorSectionProps = {
  title: string;
  subtitle: string;
  fundraising: {
    count: string;
    label: string;
    background: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  employment: {
    count: string;
    label: string;
    background: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  investor: {
    title: string;
    imageDesktop: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    imageMobile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};

export type MediaSectionProps = {
  title: string;
  subtitle: string;
  medias: {
    mediaName: string;
    logo: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
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
