import React, { FC } from 'react';
import { Box, Text, createStyles } from '@mantine/core';

// ---------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {},
}));

// ---------------------------------------- components

export const AboutSection: FC = () => {
  const { classes } = useStyles();

  return (
    <Box pt={{ base: 32, md: 24 }}>
      <Text>about event</Text>
    </Box>
  );
};
