import React, { FC } from 'react';
import type { PageProps } from 'gatsby';
import { Box, Container } from '@mantine/core';
import { AboutSection, ActionSection, OverviewSection } from '~/features/event';
import { Breadcrumbs } from '~/components';
import type { BreadcrumbItem } from '~/components/types';

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'ICX Connect', href: '/icx-connect' },
  { label: 'How To Become A Mindful Investor' },
];

const EventDetailPage: FC<PageProps> = props => {
  return (
    <main>
      <Box pt={{ base: 64, md: 80 }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbItems} />
          <OverviewSection />
          <AboutSection />
          <ActionSection />
        </Container>
      </Box>
    </main>
  );
};

export default EventDetailPage;
