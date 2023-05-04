import React from 'react';
import { PropsWithChildren } from 'react';

export const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 style={{ position: 'fixed' }}>Navbar</h1>;
};
