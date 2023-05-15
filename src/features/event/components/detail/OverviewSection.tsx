import React, { FC } from 'react';
import { Box, Flex, Grid, Group, Image, MediaQuery, Stack, Text } from '@mantine/core';
import { Event } from '../../types';
import { parseEventDate } from '../../helpers/date-parser';

import CalendarIcon from '../../assets/ic-calendar2.svg';
import ClockIcon from '../../assets/ic-clock.svg';
import LocationIcon from '../../assets/ic-location.svg';
import UserIcon from '../../assets/ic-user.svg';

type OverviewEventType = Pick<
  Event,
  | 'type'
  | 'title'
  | 'subtitle'
  | 'startDate'
  | 'endDate'
  | 'location'
  | 'mapLink'
  | 'onlineLink'
  | 'initialQuota'
  | 'speakers'
>;

type OverviewSectionProps = {
  event: OverviewEventType;
};

export const OverviewSection: FC<OverviewSectionProps> = ({ event }) => {
  const [eventDate, eventTime] = parseEventDate(event?.startDate, event?.endDate);

  return (
    <>
      <Box mt={{ base: 0, md: 24 }}>
        <Text fz={{ base: 24, md: 40 }} fw={600} lh={{ base: '32px', md: '48px' }}>
          {event.title}
        </Text>
        <Text
          mt={{ base: 8, md: 24 }}
          fz={{ base: 16, md: 18 }}
          fw={400}
          lh={{ base: '20px', md: '24px' }}
          color="#868e96">
          {event.subtitle}
        </Text>
      </Box>

      {/* desktop */}
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Box>
          {/* schedule & location */}
          <Stack spacing={0}>
            <Box mt={32}>
              <Text fz={18} fw={600} lh="24px">
                Schedule
              </Text>
              <Grid gutter={16} mt={0}>
                <Grid.Col span={6}>
                  <Image src={CalendarIcon} maw={20} mah={20} />
                  <Text mt={6} fz={14} lh="20px" color="#495057">
                    {eventDate}
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Image src={ClockIcon} maw={20} mah={20} />
                  <Text mt={6} fz={14} lh="20px" color="#495057">
                    {eventTime}
                  </Text>
                </Grid.Col>
              </Grid>
            </Box>
            <Box mt={24}>
              <Text fz={18} fw={600} lh="24px">
                Location
              </Text>
              <Box mt={8}>
                <Image src={CalendarIcon} maw={20} mah={20} />
                <Text mt={6} fz={14} lh="20px" color="#495057" maw={600}>
                  {event.location}
                </Text>
                <a
                  href={event?.mapLink ?? ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}>
                  <Text
                    mt={8}
                    fz={12}
                    fw={600}
                    lh="15px"
                    color="brand"
                    sx={{
                      ':hover': { textDecoration: 'underline' },
                    }}>
                    Visit Google Maps
                  </Text>
                </a>
              </Box>
            </Box>
          </Stack>

          {/* speakers */}
          {Boolean(event.speakers?.length) && (
            <Box mt={24}>
              <Text fz={18} fw={600} lh="24px">
                Speakers
              </Text>
              <Group spacing={32} mt={16}>
                {event.speakers.map(item => (
                  <Flex align="flex-start" key={item.name}>
                    <Image
                      src={item.imageUrl || '/img/square-default.png'}
                      maw={56}
                      mah={56}
                      sx={{ img: { borderRadius: '50%' } }}
                    />
                    <Stack spacing={0} ml={12}>
                      <Text fz={16} fw={500} lh="20px">
                        {item.name}
                      </Text>
                      <Text mt={8} fz={14} fw={400} lh="20px" color="#747474">
                        {item.company}
                      </Text>
                      <Text fz={14} fw={400} lh="20px" color="#747474">
                        {item.position}
                      </Text>
                    </Stack>
                  </Flex>
                ))}
              </Group>
            </Box>
          )}
        </Box>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Box mt={32}>
          <Text fz={16} fw={600} lh="20px">
            Schedule
          </Text>
          <Stack mt={8} spacing={8}>
            <Flex align="flex-start">
              <Image src={CalendarIcon} maw={16} mah={16} />
              <Text ml={8} fz={14} fw={400} lh="20px">
                {eventDate}
              </Text>
            </Flex>
            <Flex align="flex-start">
              <Image src={ClockIcon} maw={16} mah={16} />
              <Text ml={8} fz={14} fw={400} lh="20px">
                {eventTime}
              </Text>
            </Flex>
            <Flex align="flex-start">
              <Image src={LocationIcon} maw={16} mah={16} />
              <Box ml={8}>
                <Text fz={14} fw={400} lh="20px">
                  {event.location}
                </Text>
                <a
                  href={event?.mapLink ?? ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}>
                  <Text
                    mt={4}
                    fz={12}
                    fw={600}
                    lh="15px"
                    color="brand"
                    sx={{
                      ':hover': { textDecoration: 'underline' },
                    }}>
                    Visit Google Maps
                  </Text>
                </a>
              </Box>
            </Flex>
            <Flex align="flex-start">
              <Image src={UserIcon} maw={16} mah={16} />
              <Text ml={8} fz={14} fw={400} lh="20px">
                {event?.initialQuota ? `Kuota ${event.initialQuota} orang` : null}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </MediaQuery>
    </>
  );
};
