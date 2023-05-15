import React from 'react';
import { Box, Image, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';

const EventCard: React.FC<{
  title: string;
  date: string;
  time: string;
  eventType: string;
  image: string;
  onClick: () => void;
}> = ({ title, date, time, eventType, image, onClick }) => {
  const { hovered, ref } = useHover();

  return (
    <Box
      onClick={onClick}
      ref={ref}
      sx={{
        height: '100%',
        border: '1px solid #E9ECEF',
        borderRadius: '10px',
        cursor: hovered ? 'pointer' : 'default',
        boxShadow: hovered ? '0px 4px 30px rgba(0, 0, 0, 0.05)' : 'initial',
      }}>
      <Image
        src={image}
        fit="cover"
        height={130}
        width="100%"
        radius="10px 10px 0 0"
        style={{
          filter: hovered ? 'brightness(110%)' : 'unset',
        }}
      />
      <Box pt="md" pb="lg" px="md">
        <Text fz={16} fw="bold" mb={8} lineClamp={1}>
          {title}
        </Text>
        <Box sx={{ display: 'flex', alignItems: 'center' }} mb={2}>
          <Image src="/img/calendar-2.svg" height={12} width={12} pr="lg" />
          <Text fz={12} color="#495057">
            {date} | {time}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} mb={2}>
          <Image src="/img/video-play.svg" height={12} width={12} pr="lg" />
          <Text fz={12} color="#495057">
            {eventType} Event
          </Text>
        </Box>
        {/* TODO: Handle registration status */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/img/tick-circle.svg" height={12} width={12} pr="lg" />
          <Text fz={12} color="#00A478">
            Terdaftar
          </Text>
        </Box> */}
      </Box>
    </Box>
  );
};

export default EventCard;
