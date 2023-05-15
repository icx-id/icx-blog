import React, { FC, ReactNode } from 'react';
import { Box, Grid, MediaQuery } from '@mantine/core';
import { OverviewSection } from './OverviewSection';
import { AboutSection } from './AboutSection';
import { ActionSection } from './ActionSection';
import { StickyActionBox } from './StickyActionBox';
import { Event } from '../../types';

type ContentLayoutProps = {
  event: Event;
  breadcrumbs: ReactNode;
  onOpenModal: () => void;
  onOpenDrawer: () => void;
};

export const ContentLayout: FC<ContentLayoutProps> = ({
  event,
  breadcrumbs,
  onOpenModal,
  onOpenDrawer,
}) => {
  return (
    <Grid gutter={24} mt={{ base: 24, md: 48 }} mb={{ base: 64, md: 80 }}>
      <Grid.Col xs={12} md="auto">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Box>{breadcrumbs}</Box>
        </MediaQuery>
        <OverviewSection
          event={{
            type: event.type,
            title: event.title,
            subtitle: event.subtitle,
            location: event.location,
            startDate: event.startDate,
            endDate: event.endDate,
            onlineLink: event.onlineLink,
            mapLink: event.mapLink,
            initialQuota: event.initialQuota,
            speakers: event.speakers,
          }}
        />
        <AboutSection
          event={{
            description: event.description,
          }}
        />
        <ActionSection onOpenDrawer={onOpenDrawer} />
      </Grid.Col>
      <Grid.Col xs={12} md="content" display={{ base: 'none', md: 'block' }}>
        <StickyActionBox onOpenModal={onOpenModal} />
      </Grid.Col>
    </Grid>
  );
};
