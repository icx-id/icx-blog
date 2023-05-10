import { Box, MediaQuery } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

export const AboutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MediaQuery smallerThan="sm" styles={{ padding: '0 1.5em' }}>
      <MediaQuery smallerThan="md" styles={{ padding: '0 9em' }}>
        <Box sx={{ padding: '0 9em', zIndex: 1 }}>{children}</Box>
      </MediaQuery>
    </MediaQuery>
  );
};
