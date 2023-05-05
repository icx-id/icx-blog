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
    // <MantineProvider
    //   withGlobalStyles
    //   withNormalizeCSS
    //   theme={{
    //     fontFamily: 'Inter, Open Sans, sans serif',
    //     components: {
    //       Container: {
    //         defaultProps: {
    //           sizes: {
    //             xs: 720,
    //             sm: 960,
    //             md: 1140,
    //             lg: 1320,
    //             xl: 1920,
    //           },
    //         },
    //         styles: theme => {
    //           return {
    //             root: {
    //               padding: '0 90px',
    //               [theme.fn.smallerThan('md')]: {
    //                 padding: '0 24px',
    //               },
    //             },
    //           };
    //         },
    //       },
    //     },
    //   }}>
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
