import { Flex, Stack, Text, createStyles, rem } from '@mantine/core';
import React from 'react';
import calendarIcon from '~/images/icons/ic-calendar.svg';
import playIcon from '~/images/icons/ic-video-play.svg';
import checkIcon from '~/images/icons/ic-tick-circle.svg';
import { format } from 'date-fns';

interface CardEventProps {
  title: string;
  startDate: string;
  endDate: string;
  eventType: string;
  image: string;
  isEventPast?: boolean;
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
  image,
  eventType,
  isEventPast = false,
}) => {
  const { classes } = useStyles({ isEventPast });
  return (
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
            {format(new Date(startDate), 'dd MMM')} - {format(new Date(startDate), 'dd MMM yyyy')} |
            19.00 WIB {format(new Date(startDate), 'hh:mm')} WIB
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
  );
};
