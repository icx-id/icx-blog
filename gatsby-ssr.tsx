import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RootProvider } from '~/providers';
import { PageContainer } from '~/components';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <RootProvider>
      <PageContainer>{element}</PageContainer>
    </RootProvider>
  );
};
