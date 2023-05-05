import React, { FC } from 'react';
import { InvestorSectionProps } from '../../types';
import { Box, Container, Grid, Stack, Text, createStyles } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';

// ------------------------------------------ styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 200,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 103,
    },
  },

  title: {
    maxWidth: 900,
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '58px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.fn.smallerThan('md')]: {
      fontSize: 24,
      lineHeight: '28px',
    },
  },

  subtitle: {
    maxWidth: 919,
    marginTop: 45,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '29px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.fn.smallerThan('md')]: {
      marginTop: 26,
      fontSize: 14,
      lineHeight: '17px',
    },
  },

  gridWrapper: {
    marginTop: 176,
    [theme.fn.smallerThan('md')]: {
      marginTop: 106,
    },
  },

  textCount: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '58px',
    color: '#fff',
    [theme.fn.smallerThan('xl')]: {
      fontSize: 40,
      lineHeight: '48px',
    },
    [theme.fn.smallerThan('lg')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
      lineHeight: '29px',
    },
  },

  textLabel: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '29px',
    color: '#fff',
    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
      lineHeight: '19px',
    },
  },

  groupWrapper: {
    position: 'relative',
  },

  bgImage: {
    [theme.fn.smallerThan('md')]: {
      width: '100%',
      height: 200,
      borderRadius: '10px',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      height: 114,
      borderRadius: '10px',
    },
  },

  textWrapper: {
    position: 'absolute',
    left: 50,
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));

// ------------------------------------------ components

export const InvestorSection: FC<InvestorSectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container size="xl">
        <Stack>
          <Text className={classes.title}>{props.title}</Text>
          <Text className={classes.subtitle}>{props.subtitle}</Text>
        </Stack>

        <Grid className={classes.gridWrapper}>
          <Grid.Col xs={12} md={6}>
            <Box className={classes.groupWrapper}>
              <GatsbyImage
                image={props.fundraising.background.childImageSharp.gatsbyImageData}
                alt="fundraising"
                className={classes.bgImage}
              />
              <Stack spacing={0} className={classes.textWrapper}>
                <Text className={classes.textCount}>{props.fundraising.count}</Text>
                <Text className={classes.textLabel}>{props.fundraising.label}</Text>
              </Stack>
            </Box>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <Box className={classes.groupWrapper}>
              <GatsbyImage
                image={props.employment.background.childImageSharp.gatsbyImageData}
                alt="employment"
                className={classes.bgImage}
              />
              <Stack spacing={0} className={classes.textWrapper}>
                <Text className={classes.textCount}>{props.employment.count}</Text>
                <Text className={classes.textLabel}>{props.employment.label}</Text>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
