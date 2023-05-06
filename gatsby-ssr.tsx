import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RootProvider } from '~/providers';
import { PageContainer } from '~/components';
import '@fontsource/inter';

const noNavbarFooterPaths = ['/login', '/register'];
const forceBlackLogoNavbar = [
  '/tata-kelola/kebijakan-privasi',
  '/tata-kelola/isms',
  '/tata-kelola/mitigasi-risiko',
  '/tata-kelola/syarat-dan-ketentuan',
  '/tata-kelola/sla',
];

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  const { pathname } = props.location;
  const isSolidNavbar = forceBlackLogoNavbar.includes(pathname);

  const navbarOptions = {
    solid: isSolidNavbar,
  };

  return noNavbarFooterPaths.includes(pathname) ? (
    element
  ) : (
    <PageContainer navbarOptions={navbarOptions}>{element}</PageContainer>
  );
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <RootProvider>{element}</RootProvider>;
};
