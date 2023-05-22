import { Box, Container, Stack, Tabs, Text, createStyles, rem } from '@mantine/core';
import React, { useMemo } from 'react';
import { CardEvent } from './CardEvent';
import { useGetEventRegistrationsQuery } from '~/features/icxConnect';
import { isAfter, isBefore } from 'date-fns';
import { Header } from './Header';

const useStyles = createStyles(theme => ({
  root: {
    minHeight: '100vh',
    paddingTop: rem(81),
    '.mantine-Tabs-tabsList': {
      borderBottom: 'none',
    },
    '.mantine-UnstyledButton-root': {
      borderBottomWidth: '3px',
      fontWeight: 'bold',
      fontSize: '16px',
      paddingBottom: '25px',
    },
    '.mantine-UnstyledButton-root:hover': {
      background: 'none',
    },
    'button[aria-selected="false"]': {
      color: '#C5C5C5',
    },
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(67),
    },
  },
}));

export const Profile = () => {
  const { classes } = useStyles();
  const { data: userEvents } = useGetEventRegistrationsQuery();

  const incomingEvent = useMemo(() => {
    return userEvents?.filter(userEvent =>
      isBefore(new Date(), new Date(userEvent.event.startDate || '')),
    );
  }, [userEvents]);

  const pastEvent = useMemo(() => {
    return userEvents?.filter(userEvent =>
      isAfter(new Date(), new Date(userEvent.event.startDate || '')),
    );
  }, [userEvents]);

  return (
    <Box className={classes.root}>
      <Header />
      <Container py={rem(50)}>
        <Tabs defaultValue="incoming" color="#00C48F" variant="default">
          <Tabs.List>
            <Tabs.Tab
              sx={theme => ({
                width: rem(300),
                [theme.fn.smallerThan('sm')]: {
                  width: '50%',
                },
              })}
              value="incoming">
              Akan Datang
            </Tabs.Tab>
            <Tabs.Tab
              sx={theme => ({
                width: rem(300),
                [theme.fn.smallerThan('sm')]: {
                  width: '50%',
                },
              })}
              value="past">
              Berlalu
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="incoming" pt={rem(50)}>
            {!!incomingEvent?.length ? (
              <Stack spacing={30}>
                {incomingEvent?.map((userEvent, idx) => (
                  <CardEvent
                    title={userEvent.event.title}
                    startDate={userEvent.event.startDate || ''}
                    endDate={userEvent.event.endDate || ''}
                    eventType={userEvent.event.type}
                    image={userEvent.event.coverImage}
                    key={idx.toString()}
                    id={userEvent.event.id}
                  />
                ))}
              </Stack>
            ) : (
              <Text>Event not found</Text>
            )}
          </Tabs.Panel>

          <Tabs.Panel value="past" pt={rem(50)}>
            {!!pastEvent?.length ? (
              <Stack spacing={30}>
                {pastEvent?.map((userEvent, idx) => (
                  <CardEvent
                    title={userEvent.event.title}
                    startDate={userEvent.event.startDate || ''}
                    endDate={userEvent.event.endDate || ''}
                    eventType={userEvent.event.type}
                    image={userEvent.event.coverImage}
                    key={idx.toString()}
                    isEventPast={true}
                    id={userEvent.event.id}
                  />
                ))}
              </Stack>
            ) : (
              <Text>Event not found</Text>
            )}
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
};
