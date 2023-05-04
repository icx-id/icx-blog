import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { OurStorySection, SummarySection, useAboutPageData } from '~/features/about';
import { SiteMetadata } from '~/components';
import { Box, Container } from '@mantine/core';

const AboutPage: React.FC<PageProps> = () => {
  const data = useAboutPageData();

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <SummarySection />
      <OurStorySection />
    </Box>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SiteMetadata title="About" />;
