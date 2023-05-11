import React from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { SiteMetadata } from '~/components';
import { PhoneNumberVerification } from '~/features/verification';

const PhoneNumberVerificationPage: React.FC<PageProps> = () => {
  const onSubmitSuccess = () => {
    navigate(`/create-pin`);
  };
  return <PhoneNumberVerification onSubmitSuccess={onSubmitSuccess} />;
};

export default PhoneNumberVerificationPage;

export const Head: HeadFC = () => <SiteMetadata title="Phone Number Verification" />;
