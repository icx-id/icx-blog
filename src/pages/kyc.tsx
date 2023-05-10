import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { Kyc } from '~/features/kyc';
import { useAuthRoute } from '~/utils/guard';

const KycPage: React.FC<PageProps> = () => {
  useAuthRoute();

  return <Kyc />;
};

export default KycPage;

export const Head: HeadFC = () => <SiteMetadata title="KYC" />;
