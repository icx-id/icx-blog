import React, { FC } from 'react';
import { CompanyListSectionProps } from '../../types';
import { Box, Container, Grid, Image, Text, createStyles } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';

// --------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: '200px',
    [theme.fn.smallerThan('md')]: {
      paddingTop: '144px',
    },
  },

  centerMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },

  title: {
    maxWidth: 500,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '32px',
    [theme.fn.smallerThan('md')]: {
      maxWidth: 360,
      fontSize: 18,
      lineHeight: '24px',
      textAlign: 'center',
    },
  },
}));

// --------------------------------------- components

export const CompanyListSection: FC<CompanyListSectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container size="ll">
        <Grid gutter={32} align="center">
          <Grid.Col xs={12} md="content" className={classes.centerMobile}>
            <Text className={classes.title}>{props.title}</Text>
          </Grid.Col>
          <Grid.Col xs={12} md="auto">
            {/* <GatsbyImage
              image={props.imageDesktop.childImageSharp.gatsbyImageData}
              alt="company-list"
            /> */}
            <Image src={props.imageDesktop} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
