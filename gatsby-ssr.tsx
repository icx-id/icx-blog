import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RootProvider } from '~/providers';
import { Navbar } from '~/components/Navbar';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <RootProvider>
      <Navbar />
      {element}
    </RootProvider>
  );
};
