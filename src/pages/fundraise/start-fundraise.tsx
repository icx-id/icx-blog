import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { StartFundraise } from '~/features/fundraise';

const StartFundraisePage: React.FC<PageProps> = () => {
  return <StartFundraise />;
};

export default StartFundraisePage;

export const Head: HeadFC = () => <SiteMetadata title="Start Fundraise" />;
