import React, { FC } from 'react';
import { Box, Flex, Image, Text, ThemeIcon } from '@mantine/core';
import { Event } from '../../types';
import { formatDateTime } from '../../helpers/date-parser';
import PlayIcon from '../../assets/ic-play.svg';
import CalendarIcon from '../../assets/ic-calendar2.svg';
import UserIcon from '../../assets/ic-user.svg';
import MessageIcon from '../../assets/ic-message.svg';
import CallIcon from '../../assets/ic-call.svg';
import { capitalizeWords } from '~/utils/format';

type EventRegistrationDataProps = {
  user: { email: string; name: string; phoneNumber: string };
  event: Event;
};

export const EventRegistrationData: FC<EventRegistrationDataProps> = ({ user, event }) => {
  const items = [
    {
      id: 1,
      label: 'Event',
      value: event.title,
      icon: PlayIcon,
    },
    {
      id: 2,
      label: 'Date & Time',
      value: formatDateTime(event.startDate),
      icon: CalendarIcon,
    },
    {
      id: 3,
      label: 'Full Name',
      value: capitalizeWords(user?.name || ''),
      icon: UserIcon,
    },
    {
      id: 4,
      label: 'Email',
      value: user?.email?.toLowerCase(),
      icon: MessageIcon,
    },
    {
      id: 5,
      label: 'Phone Number',
      value: user?.phoneNumber,
      icon: CallIcon,
    },
  ];

  return (
    <Box mt={{ base: 24, md: 24 }}>
      {items.map((item, index) => (
        <Flex key={item.id} align="flex-start" mt={index === 0 ? 0 : 16}>
          {item.id !== 6 ? (
            <Image src={item.icon} maw={24} mah={24} />
          ) : (
            <ThemeIcon variant="outline" sx={{ border: 0 }}>
              {item.icon}
            </ThemeIcon>
          )}
          <Box ml="16px">
            <Text fz={{ base: 12, md: 14 }} fw={400} lh={{ base: '15px', md: '20px' }}>
              {item.label}
            </Text>
            <Text mt={4} fz={{ base: 12, md: 14 }} fw={600} lh={{ base: '15px', md: '20px' }}>
              {item.value}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
