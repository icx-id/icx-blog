import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { TataKelola as Isms } from '~/features/tataKelola';
import { useIsmsPageData } from '~/features/tataKelola';

const ISMSPage: React.FC<PageProps> = () => {
  const data = useIsmsPageData();

  return <Isms data={data} />;
};

export default ISMSPage;

export const Head: HeadFC = () => <SiteMetadata title="ISMS" />;
