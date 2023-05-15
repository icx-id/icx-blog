import React from 'react';
import { Box } from '@mantine/core';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { SiteMetadata } from '~/components';
import { useAuthRoute } from '~/utils/guard';
import { Profile } from '~/features/profile';

const ProfilePage: React.FC<PageProps> = () => {
  useAuthRoute();

  const onSubmitSuccess = () => {
    navigate('/');
  };

  return <Profile />;
};

export default ProfilePage;

export const Head: HeadFC = () => <SiteMetadata />;
