import React, { FC } from 'react';
import { Box, Text, createStyles } from '@mantine/core';

// ---------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {},
}));

// ---------------------------------------- components

export const ActionSection: FC = () => {
  const { classes } = useStyles();

  return (
    <Box pt={24}>
      <Text>action event</Text>
    </Box>
  );
};
