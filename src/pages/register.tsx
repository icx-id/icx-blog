import React from 'react';
import { Box } from '@mantine/core';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { AuthLayout, RegisterForm } from '~/features/auth';
import { SiteMetadata } from '~/components';
import { useGuestRoute } from '~/utils/guard';

const RegisterPage: React.FC<PageProps> = () => {
  useGuestRoute();

  const onSubmitSuccess = () => {
    navigate(`/phone-number-verification`);
  };

  return (
    <Box>
      <AuthLayout>
        <RegisterForm onSubmitSuccess={onSubmitSuccess} />
      </AuthLayout>
    </Box>
  );
};

export default RegisterPage;

export const Head: HeadFC = () => <SiteMetadata />;
