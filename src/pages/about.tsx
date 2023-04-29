import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageContainer from "../components/PageContainer";
import SiteMetadata from "../components/SiteMetadata";
import { About, useAboutPageData } from "../features/about";

const AboutPage: React.FC<PageProps> = () => {
  const data = useAboutPageData();

  return (
    <PageContainer>
      <About data={data} />
    </PageContainer>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SiteMetadata title="About" />;
