import React, { FC } from 'react';
import { Box, Grid, Text, createStyles } from '@mantine/core';

// ---------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {},
}));

// ---------------------------------------- components

export const OverviewSection: FC = () => {
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col xs={12} md={6}>
        <Text>image event</Text>
      </Grid.Col>
      <Grid.Col xs={12} md={6}>
        <Text>detail event</Text>
      </Grid.Col>
    </Grid>
  );
};
