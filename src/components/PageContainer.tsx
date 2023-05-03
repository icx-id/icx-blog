import React, { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { env } from '~/config';
import { ComingSoon } from './ComingSoon';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  if (env.GATSBY_SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
