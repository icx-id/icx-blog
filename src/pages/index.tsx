import React, { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiteMetadata } from '~/components';
import { Home } from '~/features/kyc/home';

export const Head: HeadFC = () => <SiteMetadata />;

const HomePage: FC<PageProps> = props => <Home {...props} />;

export default HomePage;
