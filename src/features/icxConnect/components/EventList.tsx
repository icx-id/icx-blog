import React, { useState } from 'react';
import { Container, Box, Text, Paper, SimpleGrid, Tabs, createStyles, Flex } from '@mantine/core';
import EventCard from '~/components/EventCard';
import { useGetEventsQuery } from '../api/useGetEvents';
import { capitalizeFirstLetter, parseEventDate } from '../utils';
import { EventListSkeleton } from './EventListSkeleton';
import { EventScheduleType } from '../types';
import { navigate } from 'gatsby';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles(() => ({
  tab: {
    fontWeight: 'bold',
    color: 'gray',
  },
}));

export const EventList: React.FC<{}> = () => {
  const { classes } = useStyles();

  const [eventScheduleType, setEventScheduleType] = useState<EventScheduleType>(
    EventScheduleType.UPCOMING,
  );

  const { data: events, isLoading } = useGetEventsQuery({
    type: eventScheduleType,
  });

  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 60em)');

  return (
    <Box sx={{ minHeight: '100vh' }} pb="lg">
      <Paper
        sx={{
          backgroundImage: 'url(/img/events-banner.png)',
          backgroundPosition: mobileScreen
            ? '-1200px 0px'
            : tabScreen
            ? '-1000px 0px'
            : '-500px 0px',
          height: '20rem',
          borderRadius: '0px',
        }}>
        <Container sx={{ height: '100%' }} size="ll">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              paddingTop: '50px',
            }}>
            <Text color="#FFF" fz={mobileScreen ? 26 : 30} fw="bolder">
              ICX Connect
            </Text>
            <Text color="#F1F3F5" fz={mobileScreen ? 14 : 16} maw={420} fw="lighter">
              Be part of a community of angel investors, VCs, as well as startup founders, and
              receive access to exclusive events
            </Text>
          </Box>
        </Container>
      </Paper>
      <Container size="ll" py="xl">
        <Tabs
          styles={{
            tabLabel: {
              margin: mobileScreen ? '12px' : '4px 32px 12px 0',
            },
          }}
          defaultChecked
          onTabChange={value => {
            setEventScheduleType(value as EventScheduleType);
          }}
          defaultValue={EventScheduleType.UPCOMING}>
          <Tabs.List>
            <Tabs.Tab className={classes.tab} value={EventScheduleType.UPCOMING}>
              On Going Event
            </Tabs.Tab>
            <Tabs.Tab className={classes.tab} value={EventScheduleType.PAST}>
              Past Event
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={EventScheduleType.UPCOMING}>
            <Box my={60}>
              <SimpleGrid
                breakpoints={[
                  { minWidth: 'xs', cols: 1 },
                  { minWidth: 'sm', cols: 2 },
                  { minWidth: 'md', cols: 3 },
                  { minWidth: 'lg', cols: 4 },
                ]}>
                {isLoading ? (
                  <EventListSkeleton />
                ) : !events?.data.length ? (
                  <Flex direction="column">
                    <Text fz="xl" fw="bold" pb="xl">
                      No upcoming event yet,
                    </Text>
                    <Text>
                      Stay tune for upcoming event at ICX to keep in touch with investors.
                    </Text>
                  </Flex>
                ) : (
                  events.data.map(event => {
                    const [eventDate, eventTime] = parseEventDate(event?.startDate, event?.endDate);

                    return (
                      <EventCard
                        onClick={() => navigate(`/icx-connect/${event.id}`)}
                        key={event.id}
                        image={event.coverImage}
                        title={event.title}
                        date={eventDate}
                        time={eventTime}
                        eventType={capitalizeFirstLetter(event.type)}
                      />
                    );
                  })
                )}
              </SimpleGrid>
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value={EventScheduleType.PAST}>
            <Box my={60}>
              <SimpleGrid
                breakpoints={[
                  { minWidth: 'xs', cols: 1 },
                  { minWidth: 'sm', cols: 2 },
                  { minWidth: 'md', cols: 3 },
                  { minWidth: 'lg', cols: 4 },
                ]}>
                {isLoading ? (
                  <EventListSkeleton />
                ) : !events?.data.length ? (
                  <Flex direction="column">
                    <Text fz="xl" fw="bold" pb="xl">
                      No upcoming event yet,
                    </Text>
                    <Text>
                      Stay tune for upcoming event at ICX to keep in touch with investors.
                    </Text>
                  </Flex>
                ) : (
                  events.data.map(event => {
                    const [eventDate, eventTime] = parseEventDate(event?.startDate, event?.endDate);

                    return (
                      <EventCard
                        onClick={() => navigate(`/icx-connect/${event.id}`)}
                        key={event.id}
                        image={event.coverImage}
                        title={event.title}
                        date={eventDate}
                        time={eventTime}
                        eventType={capitalizeFirstLetter(event.type)}
                      />
                    );
                  })
                )}
              </SimpleGrid>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
};
