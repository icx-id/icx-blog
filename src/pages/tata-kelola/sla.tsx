import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { TataKelola as Isms } from '~/features/tataKelola';
import { useSLAPageData } from '~/features/tataKelola';

const SlaPage: React.FC<PageProps> = () => {
  const data = useSLAPageData();

  return <Isms data={data} />;
};

export default SlaPage;

export const Head: HeadFC = () => <SiteMetadata title="SLA" />;
