import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { NewsSection, OurStorySection, SummarySection } from '~/features/about';
import { SiteMetadata } from '~/components';
import { Box } from '@mantine/core';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <SummarySection />
      <OurStorySection />
      <NewsSection />
    </Box>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SiteMetadata title="About" />;
