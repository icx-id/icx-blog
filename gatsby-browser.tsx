import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RootProvider } from '~/providers';
import { PageContainer } from '~/components';
import '@fontsource/inter/400.css';
import { NavbarProps } from '~/components/types';
import { useHydration } from '~/hooks/useHydration';
import { useInternalPaths } from '~/utils/useInternalPaths';

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
];

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  const { pathname } = props.location;
  const navbarSolid =
    forceNavbarSolid.includes(pathname) ||
    pathname.includes('/icx-connect/') ||
    pathname.includes('/blog/');

  const internalPaths = useInternalPaths();

  const navbarOptions: NavbarProps = {
    navbarSolid,
    pathname,
  };

  useHydration();

  if (!internalPaths.includes(pathname)) {
    return <PageContainer navbarOptions={{ navbarSolid: true }}>{element}</PageContainer>;
  }

  return noNavbarFooterPaths.includes(pathname) ? (
    element
  ) : (
    <PageContainer navbarOptions={navbarOptions}>{element}</PageContainer>
  );
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <RootProvider>{element}</RootProvider>;
};
