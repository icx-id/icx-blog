import React from 'react';
import { Box, Image, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';

const EventCard: React.FC<{}> = () => {
  const { hovered, ref } = useHover();

  return (
    <Box
      ref={ref}
      sx={{
        height: '290px',
        border: '1px solid #E9ECEF',
        borderRadius: '10px',
        cursor: hovered ? 'pointer' : 'default',
      }}>
      <Image
        src="/img/sample.png"
        fit="cover"
        height={152}
        sx={{
          borderRadius: '10px',
        }}
      />
      <Box pt="xs" px="sm">
        <Text fz={16} fw="bold" mb={8}>
          How To Become A Mindful Investor
        </Text>
        <Box sx={{ display: 'flex', alignItems: 'center' }} mb={8}>
          <Image src="/img/calendar-2.svg" height={12} width={12} pr="md" />
          <Text fz={12} color="#495057">
            17 Mar - 19 Mar 2023 | 19:00 WIB
          </Text>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} mb={8}>
          <Image src="/img/video-play.svg" height={12} width={12} pr="md" />
          <Text fz={12} color="#495057">
            Online Event
          </Text>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/img/tick-circle.svg" height={12} width={12} pr="md" />
          <Text fz={12} color="#00A478">
            Terdaftar
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;
