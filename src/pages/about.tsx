import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { About, useAboutPageData } from '../features/about';
import { SiteMetadata } from '~/components';

const AboutPage: React.FC<PageProps> = () => {
  const data = useAboutPageData();

  return <About data={data} />;
};

export default AboutPage;

export const Head: HeadFC = () => <SiteMetadata title="About" />;
