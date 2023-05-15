import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { EventList } from '~/features/icxConnect';
import { SiteMetadata } from '~/components';

const ICXConnectPage: React.FC<PageProps> = () => {
  return <EventList />;
};

export const Head: HeadFC = () => <SiteMetadata title="ICX Connect" />;

export default ICXConnectPage;
