import '@fontsource/inter';

import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RootProvider } from '~/providers';
import { PageContainer } from '~/components';
import { NavbarProps } from '~/components/types';

const noNavbarFooterPaths = ['/login', '/register'];
const forceNavbarSolid = [
  '/tata-kelola/kebijakan-privasi',
  '/tata-kelola/isms',
  '/tata-kelola/mitigasi-risiko',
  '/tata-kelola/syarat-dan-ketentuan',
  '/tata-kelola/sla',
  '/kyc',
  '/phone-number-verification',
  '/create-pin',
  '/profile',
  '/contact',
];

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  const { pathname } = props.location;
  const navbarSolid = forceNavbarSolid.includes(pathname) || pathname.includes('/icx-connect/');

  const navbarOptions: NavbarProps = {
    navbarSolid,
    pathname,
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
