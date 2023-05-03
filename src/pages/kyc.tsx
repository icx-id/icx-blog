import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageContainer from "../components/PageContainer";
import SiteMetadata from "../components/SiteMetadata";
import { Kyc } from "../features/kyc";

const KycPage: React.FC<PageProps> = () => {
  return (
    <PageContainer>
      <Kyc />
    </PageContainer>
  );
};

export default KycPage;

export const Head: HeadFC = () => <SiteMetadata title="KYC" />;
