import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import useAboutPage from "../../hooks/useAboutPage";

const AboutPage: React.FC<PageProps> = () => {
  const { siteUrl } = useSiteMetadata();
  const { title, banner } = useAboutPage();

  return (
    <main>
      ICX - {title}
      <img src={`${siteUrl}${banner}`}></img>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <title>About Us - Unlock your new level investment</title>
);
