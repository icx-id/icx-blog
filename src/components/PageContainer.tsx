import React, { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
