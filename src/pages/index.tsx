import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Home, useHomePageData } from '../features/home';
import { SiteMetadata } from '~/components';

const HomePage: React.FC<PageProps> = () => {
  const data = useHomePageData();

  return <Home data={data} />;
};

export default HomePage;

export const Head: HeadFC = () => <SiteMetadata />;
