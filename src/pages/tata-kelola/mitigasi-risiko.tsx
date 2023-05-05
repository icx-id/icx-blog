import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { TataKelola as Isms } from '~/features/tataKelola';
import { useMitigasiRisikoPageData } from '~/features/tataKelola';

const MitigasiRisikoPage: React.FC<PageProps> = () => {
  const data = useMitigasiRisikoPageData();

  return <Isms data={data} />;
};

export default MitigasiRisikoPage;

export const Head: HeadFC = () => <SiteMetadata title="Mitigasi Risiko" />;
