import React from 'react';
import { PageProps } from 'gatsby';
import { EventList } from '~/features/icxConnect';

const EventsPage: React.FC<PageProps> = () => {
  return <EventList />;
};

export default EventsPage;
