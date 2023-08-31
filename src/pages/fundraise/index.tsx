import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { Fundraise } from '~/features/fundraise';

const FundraisePage: React.FC<PageProps> = () => {
  return <Fundraise />;
};

export default FundraisePage;

export const Head: HeadFC = () => <SiteMetadata title="Fundraise" />;
