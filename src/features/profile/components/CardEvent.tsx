import { Box, Flex, Stack, Text, createStyles, rem } from '@mantine/core';
import React from 'react';
import calendarIcon from '~/images/icons/ic-calendar.svg';
import playIcon from '~/images/icons/ic-video-play.svg';
import checkIcon from '~/images/icons/ic-tick-circle.svg';
import { parseEventDate } from '../../event/helpers/date-parser';

interface CardEventProps {
  title: string;
  startDate: string;
  endDate: string;
  eventType: string;
  image: string;
  isEventPast?: boolean;
  id: string;
}

type StyleProps = { isEventPast: boolean };

const useStyles = createStyles((theme, { isEventPast }: StyleProps) => ({
  image: {
    borderRadius: rem(8),
    height: rem(200),
    width: rem(350),
    objectFit: 'cover',
    filter: isEventPast ? 'grayscale(100%)' : 'none',
    [theme.fn.smallerThan('sm')]: {
      width: rem(130),
      height: rem(100),
    },
  },
}));

export const CardEvent: React.FC<CardEventProps> = ({
  title,
  startDate,
  endDate,
  image,
  eventType,
  isEventPast = false,
  id,
}) => {
  const { classes } = useStyles({ isEventPast });
  const [eventDate, eventTime] = parseEventDate(startDate, endDate);

  return (
    <Box
      component="a"
      href={`/icx-connect/${id}`}
      sx={{ textDecoration: 'none', color: 'inherit' }}>
      <Flex
        sx={theme => ({
          gap: rem(25),
          [theme.fn.smallerThan('sm')]: {
            gap: rem(20),
          },
        })}>
        <img alt="image-banner" src={image} className={classes.image} />
        <Stack sx={{ flex: 1 }} spacing={10}>
          <Text
            sx={theme => ({
              [theme.fn.smallerThan('sm')]: {
                fontSize: rem(18),
              },
            })}
            size={rem(20)}
            weight={600}>
            {title}
          </Text>
          <Flex gap={rem(7)}>
            <img src={calendarIcon} style={{ objectFit: 'contain', width: '20px' }} />
            <Text
              sx={theme => ({
                [theme.fn.smallerThan('sm')]: {
                  fontSize: rem(12),
                },
              })}
              color="#495057">
              {eventDate} | {eventTime}
            </Text>
          </Flex>
          <Flex gap={rem(7)}>
            <img src={playIcon} style={{ objectFit: 'contain', width: '20px' }} />
            <Text
              sx={theme => ({
                [theme.fn.smallerThan('sm')]: {
                  fontSize: rem(12),
                },
              })}
              color="#495057">
              {eventType}
            </Text>
          </Flex>
          <Flex gap={rem(7)}>
            <img src={checkIcon} style={{ objectFit: 'contain', width: '20px' }} />
            <Text
              sx={theme => ({
                [theme.fn.smallerThan('sm')]: {
                  fontSize: rem(12),
                },
              })}
              color="brand">
              Terdaftar
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};
