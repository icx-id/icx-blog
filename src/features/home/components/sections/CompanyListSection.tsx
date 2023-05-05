import React, { FC } from 'react';
import { CompanyListSectionProps } from '../../types';
import { Box, Container, Grid, Text, createStyles } from '@mantine/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// --------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: '144px',
    [theme.fn.smallerThan('md')]: {
      paddingTop: '96px',
    },
  },

  centerMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },

  title: {
    maxWidth: 585,
    fontSize: 32,
    fontWeight: 500,
    lineHeight: '40px',
    [theme.fn.smallerThan('md')]: {
      maxWidth: 305,
      fontSize: 16,
      lineHeight: '22px',
      textAlign: 'center',
    },
  },
}));

// --------------------------------------- components

export const CompanyListSection: FC<CompanyListSectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container size="xl">
        <Grid gutter={32} gutterMd={16} align="center">
          <Grid.Col xs={12} md="auto" className={classes.centerMobile}>
            <Text className={classes.title} maw={585}>
              {props.title}
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md="auto">
            <GatsbyImage image={getImage(props.imageDesktop)!} alt="company-list" />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
