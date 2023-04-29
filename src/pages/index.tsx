import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageContainer from "../components/PageContainer";
import SiteMetadata from "../components/SiteMetadata";
import { Home, useHomePageData } from "../features/home";

const HomePage: React.FC<PageProps> = () => {
  const data = useHomePageData();

  return (
    <PageContainer>
      <Home data={data} />
    </PageContainer>
  );
};

export default HomePage;

export const Head: HeadFC = () => <SiteMetadata />;
