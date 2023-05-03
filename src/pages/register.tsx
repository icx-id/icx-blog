import React from 'react';
import { Box, Text } from '@mantine/core';
import { HeadFC, PageProps } from 'gatsby';
import { AuthLayout } from '~/features/auth';
import { SiteMetadata } from '~/components';

const RegisterPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <AuthLayout>
        <Text>Hello World</Text>
      </AuthLayout>
    </Box>
  );
};

export default RegisterPage;

export const Head: HeadFC = () => <SiteMetadata />;
