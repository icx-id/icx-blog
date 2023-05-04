import React from 'react';
import { Box } from '@mantine/core';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { AuthLayout, LoginForm } from '~/features/auth';
import { SiteMetadata } from '~/components';
import { useGuestRoute } from '~/utils/guard';

const LoginPage: React.FC<PageProps> = () => {
  useGuestRoute();

  const onSubmitSuccess = () => {
    navigate('/');
  };

  return (
    <Box>
      <AuthLayout>
        <LoginForm onSubmitSuccess={onSubmitSuccess} />
      </AuthLayout>
    </Box>
  );
};

export default LoginPage;

export const Head: HeadFC = () => <SiteMetadata />;
