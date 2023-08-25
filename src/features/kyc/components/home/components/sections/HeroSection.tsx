import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  MediaQuery,
  Stack,
  Text,
  TypographyStylesProvider,
  createStyles,
} from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroSectionProps } from '../../types';
import Lottie from 'react-lottie';

// eslint-disable-next-line no-restricted-imports
// import heroMotion1 from '~/features/home/assets/hero-motion1.json';

// --------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    height: '900px',
    color: '#fff',
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
    zIndex: -1,
    [theme.fn.smallerThan('md')]: {
      height: 'auto',
    },
  },

  container: {
    height: '100%',
    paddingTop: 80,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 64,
    },
  },

  background: {
    maxWidth: '44vw',
    position: 'absolute',
    bottom: '-48%',
    right: '20%',
    zIndex: 1,
    pointerEvents: 'none',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '200vw',
      bottom: '-10%',
      right: '-32%',
    },
    [theme.fn.smallerThan('xs')]: {
      maxWidth: '200vw',
      bottom: '-15%',
      right: '-32%',
    },
  },

  absoluteVerticalCenter: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.fn.smallerThan('md')]: {
      position: 'relative',
    },
  },

  copywriting: {
    width: '100%',
    alignItems: 'flex-start',
    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
    },
  },

  title: {
    color: 'inherit',
    maxWidth: 600,
    fontSize: 56,
    fontWeight: 600,
    lineHeight: '72px',
    [theme.fn.smallerThan('md')]: {
      maxWidth: 'initial',
      fontSize: 32,
      lineHeight: '40px',
      textAlign: 'center',
    },
  },

  subtitle: {
    maxWidth: 500,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '32px',
    [theme.fn.smallerThan('md')]: {
      maxWidth: 300,
      fontSize: 16,
      lineHeight: '24px',
      textAlign: 'center',
    },
  },

  download: {
    [theme.fn.smallerThan('md')]: {
      margin: '0 auto',
    },
  },

  appImage: {
    width: '390px',
    position: 'absolute',
    left: 60,
    bottom: -50,
    zIndex: 2,
    [theme.fn.smallerThan('lg')]: {
      width: 'auto',
      maxWidth: '390px',
    },
    [theme.fn.smallerThan('md')]: {
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  appImageVisible: {
    width: '390px',
    position: 'absolute',
    left: 60,
    bottom: -50,
    zIndex: 2,
    [theme.fn.smallerThan('lg')]: {
      width: 'auto',
      maxWidth: '390px',
    },
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: heroMotion1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box pos="relative">
      <Box className={classes.root}>
        <Container size="ll" className={classes.container}>
          <Grid gutter={0} sx={{ height: '100%', position: 'relative', visibility: 'hidden' }}>
            <MediaQuery smallerThan="md" styles={{ paddingTop: 70 }}>
              <Grid.Col xs={12} md={7}>
                <Flex
                  align={{ xs: 'flex-start', md: 'center' }}
                  justify={{ xs: 'center', md: 'flex-start' }}
                  sx={{ height: '100%' }}>
                  <Stack spacing={32} className={classes.copywriting}>
                    <TypographyStylesProvider className={classes.title}>
                      <div dangerouslySetInnerHTML={{ __html: props.title }} />
                    </TypographyStylesProvider>
                    <Text className={classes.subtitle}>{props.subtitle}</Text>
                    <Group spacing="xl" align="center" noWrap className={classes.download}>
                      {props.download.map(({ logo, link, name }) => (
                        <Box key={link}>
                          {/* <GatsbyImage image={logo.childImageSharp.gatsbyImageData} alt={name} /> */}
                          <Image src={logo} alt={name} maw={200} mah={59} />
                        </Box>
                      ))}
                    </Group>
                  </Stack>
                </Flex>
              </Grid.Col>
            </MediaQuery>
            <Grid.Col
              xs={12}
              md={5}
              sx={theme => ({
                position: 'relative',
                [theme.fn.smallerThan('md')]: {
                  padding: '0 32px',
                },
              })}>
              <Box className={classes.appImage}>
                {/* <GatsbyImage image={props.appImage.childImageSharp.gatsbyImageData} alt="icx-app" /> */}
                <Image src={props.appImage} />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>

        {/* Gradient */}
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Box
            sx={{
              width: '100vw',
              height: '100%',
              position: 'absolute',
              top: 0,
            }}>
            {/* <Lottie options={defaultOptions} /> */}
          </Box>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Box
            sx={{
              background: 'linear-gradient(310deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 62%)',
              position: 'absolute',
              width: '100vh',
              height: '100vh',
              right: '-50vh',
              bottom: '0',
              borderRadius: '50%',
              display: 'flex',
            }}
          />
        </MediaQuery>
      </Box>

      {/* VISIBLE COMPONENT */}
      <Box
        sx={theme => ({
          width: '98vw',
          height: '900px',
          color: '#fff',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          [theme.fn.smallerThan('md')]: {
            height: 'auto',
          },
        })}>
        <Container size="ll" className={classes.container}>
          <Grid gutter={0} sx={{ height: '100%', position: 'relative' }}>
            <MediaQuery smallerThan="md" styles={{ paddingTop: 70 }}>
              <Grid.Col xs={12} md={7}>
                <Flex
                  align={{ xs: 'flex-start', md: 'center' }}
                  justify={{ xs: 'center', md: 'flex-start' }}
                  sx={{ height: '100%' }}>
                  <Stack spacing={32} className={classes.copywriting}>
                    <TypographyStylesProvider className={classes.title}>
                      <div dangerouslySetInnerHTML={{ __html: props.title }} />
                    </TypographyStylesProvider>
                    <Text className={classes.subtitle}>{props.subtitle}</Text>
                    <Group spacing="xl" align="center" noWrap className={classes.download}>
                      {props.download.map(({ logo, link, name }) => (
                        <Box component="a" href={link} target="_blank" key={link}>
                          <Image src={logo} alt={name} maw={200} mah={59} />
                        </Box>
                      ))}
                    </Group>
                  </Stack>
                </Flex>
              </Grid.Col>
            </MediaQuery>
            <Grid.Col
              xs={12}
              md={5}
              sx={theme => ({
                position: 'relative',
                [theme.fn.smallerThan('md')]: {
                  padding: '0 32px',
                },
              })}>
              <Box className={classes.appImage}>
                {/* <GatsbyImage image={props.appImage.childImageSharp.gatsbyImageData} alt="icx-app" /> */}
                <Image src={props.appImage} />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
