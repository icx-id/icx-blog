import React from 'react';
import { Box, Skeleton } from '@mantine/core';

export const EventListSkeleton = () => {
  return (
    <>
      {[...Array(16).keys()].map((_, idx) => (
        <Box
          key={idx.toString()}
          sx={{
            height: '100%',
            border: '1px solid #E9ECEF',
            borderRadius: '10px',
          }}>
          <Skeleton h={130} radius="10px 10px 0 0" />
          <Box pt="md" pb="lg" px="md">
            <Skeleton h={20} mb={15} />
            <Skeleton w={200} h={12} mb={8} />
            <Skeleton w={150} h={12} mb={8} />
            <Skeleton w={120} h={12} />
          </Box>
        </Box>
      ))}
    </>
  );
};
