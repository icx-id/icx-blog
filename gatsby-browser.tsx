import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RootProvider } from '~/providers';
import { PageContainer } from '~/components';
import '@fontsource/inter';

const noNavbarFooterPaths = ['/login', '/register'];

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  const { pathname } = props.location;
  return noNavbarFooterPaths.includes(pathname) ? (
    element
  ) : (
    <PageContainer>{element}</PageContainer>
  );
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <RootProvider>{element}</RootProvider>;
};
