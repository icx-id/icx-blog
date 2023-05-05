import React, { FC } from 'react';
import { Box, Container, Grid, Group, Stack, Text, createStyles } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroSectionProps } from '../../types';

// --------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    minHeight: '101vh',
    color: '#fff',
    backgroundColor: '#000',
  },

  copywriting: {
    marginTop: '30vh',
    [theme.fn.smallerThan('md')]: {
      marginTop: '180px',
    },
  },

  title: {
    fontSize: 72,
    fontWeight: 600,
    lineHeight: '78px',
    maxWidth: 800,
    [theme.fn.smallerThan('md')]: {
      fontSize: 34,
      lineHeight: '40px',
      textAlign: 'center',
      maxWidth: 'initial',
    },
  },

  subtitle: {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: '42px',
    maxWidth: 590,
    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
      lineHeight: '24px',
      textAlign: 'center',
      maxWidth: 'initial',
      mx: 'auto',
    },
  },

  download: {
    [theme.fn.smallerThan('md')]: {
      margin: '0 auto',
    },
  },

  appImage: {
    maxWidth: '390px',
    position: 'absolute',
    left: 60,
    bottom: -50,
    [theme.fn.smallerThan('md')]: {
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}));

// -------------------------------------- components

export const HeroSection: FC<HeroSectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container size="xl">
        <Grid sx={{ minHeight: '101vh' }}>
          <Grid.Col xs={12} md={6} sx={{ height: 'fit-content' }}>
            <Stack spacing="xl" className={classes.copywriting}>
              <Text className={classes.title}>
                Unlocking Your
                <br />
                Next Level Investment
              </Text>
              <Text className={classes.subtitle}>{props.subtitle}</Text>
              <Group spacing="xl" align="center" noWrap className={classes.download}>
                {props.download.map(({ logo, link, name }) => (
                  <Box key={link}>
                    <GatsbyImage image={logo.childImageSharp.gatsbyImageData} alt={name} />
                  </Box>
                ))}
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col
            xs={12}
            md={6}
            sx={theme => ({
              position: 'relative',
              [theme.fn.smallerThan('md')]: {
                padding: '0 32px',
              },
            })}>
            <Box className={classes.appImage}>
              <GatsbyImage image={props.appImage.childImageSharp.gatsbyImageData} alt="icx-app" />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
