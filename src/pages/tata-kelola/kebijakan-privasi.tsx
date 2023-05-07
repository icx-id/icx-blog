import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { TataKelola as KebijakanPrivasi } from '~/features/tataKelola';
import { useKebijakanPrivasiPageData } from '~/features/tataKelola';

const KebijakanPrivasiPage: React.FC<PageProps> = () => {
  const data = useKebijakanPrivasiPageData();

  return <KebijakanPrivasi data={data} />;
};

export default KebijakanPrivasiPage;

export const Head: HeadFC = () => <SiteMetadata title="Kebijakan Privasi" />;
