import React, { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { env } from '~/config';
import { ComingSoon } from './ComingSoon';
import { PageContainerProps } from './types';

export const PageContainer: React.FC<PropsWithChildren & PageContainerProps> = ({
  navbarOptions,
  children,
}) => {
  if (env.GATSBY_SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navbar navbarSolid={navbarOptions.navbarSolid} />
      {children}
      <Footer />
    </>
  );
};
