import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { TataKelola as Isms } from '~/features/tataKelola';
import { useSyaratKetentuanPageData } from '~/features/tataKelola';

const SyaratDanKetentuanPage: React.FC<PageProps> = () => {
  const data = useSyaratKetentuanPageData();

  return <Isms data={data} />;
};

export default SyaratDanKetentuanPage;

export const Head: HeadFC = () => <SiteMetadata title="Syarat dan Ketentuan" />;
