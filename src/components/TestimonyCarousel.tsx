import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  MediaQuery,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
  em,
  getBreakpointValue,
  keyframes,
} from '@mantine/core';
import { StaticImage } from 'gatsby-plugin-image';
import { useMediaQuery } from '@mantine/hooks';
import testimonyIcon from '~/images/testimony-icon.svg';
import { LineNavigator } from './LineNavigator';

export const fade = keyframes({
  '0%,100%': { opacity: 1 },
  '50%': { opacity: 0.25 },
});

const useStyles = createStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.fn.smallerThan('md')]: {
      height: '100%',
      paddingTop: 100,
    },
  },

  testimonyTitle: {
    fontSize: 24,
    fontWeight: 600,
  },

  description: {
    maxWidth: 650,
    minHeight: 300,
    paddingRight: 100,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '32px',
    animation: `${fade} 0.5s ease forwards`,
    [theme.fn.smallerThan('md')]: {
      fontSize: 18,
      lineHeight: '24px',
      paddingRight: 0,
      minHeight: 'initial',
    },
  },

  author: {
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '20px',
    animation: `${fade} 0.5s ease forwards`,
    [theme.fn.smallerThan('md')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },

  company: {
    paddingTop: 4,
    color: '#6B7280',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '20px',
    animation: `${fade} 0.5s ease forwards`,
    [theme.fn.smallerThan('md')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },

  imageBackground: {
    maxWidth: 'calc(100% + 48px)',
    height: '320px',
    backgroundColor: '#D6E6FC',
    position: 'relative',
  },

  imageWrapperDesktop: {
    width: 380,
    position: 'absolute',
    top: '50%',
    left: -60,
    transform: 'translateY(-50%)',
    zIndex: 1,
  },

  imageWrapperMobile: {
    zIndex: 1,
    position: 'absolute',
    top: -50,
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));

interface Testimony {
  author: string;
  authorImage: string;
  company: string;
  description: string;
  image: string;
}

// -------------------------------------- components

export const TestimonyCarousel: FC<{
  description: string;
  author: string;
  company: string;
  testimonies: Testimony[];
  active: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  image: string;
  hideWhatTheySaid?: boolean;
  authorImage?: string;
}> = ({
  description,
  author,
  company,
  testimonies,
  active,
  onClickPrev,
  onClickNext,
  image,
  hideWhatTheySaid,
  authorImage,
}) => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`,
  );

  return (
    <Box className={classes.root}>
      <Container size="ll">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Grid gutter={0}>
            <Grid.Col xs="auto" pos="relative">
              <Stack spacing={0} justify="center" h="100%">
                {!hideWhatTheySaid && (
                  <Box pb={50}>
                    <Flex align="center">
                      <Text className={classes.testimonyTitle}>What They Said</Text>
                      <ThemeIcon variant="" ml="md" mt={4}>
                        <Image src={testimonyIcon} />
                      </ThemeIcon>
                    </Flex>
                    <Text>Hear what people have said about ICX</Text>
                  </Box>
                )}
                <Text className={classes.description}>“{description}“</Text>
                <Flex direction="row" align="center">
                  {authorImage && (
                    <Image
                      src={authorImage}
                      alt="profile"
                      fit="cover"
                      width={50}
                      height={50}
                      mr={18}
                      radius={10}
                    />
                  )}
                  <Box>
                    <Text className={classes.author}>{author}</Text>
                    <Text className={classes.company}>{company}</Text>
                  </Box>
                </Flex>
                <LineNavigator
                  data={testimonies}
                  active={active}
                  onClickPrev={onClickPrev}
                  onClickNext={onClickNext}
                />
              </Stack>
            </Grid.Col>
            <Grid.Col xs={4} sx={{ position: 'relative' }}>
              <Box w="calc(100% + 64px)" h="100vh" pos="relative" sx={{ overflow: 'hidden' }}>
                <StaticImage
                  src="../images/gradient-purple.png"
                  alt="gradient-purple"
                  style={{ width: 850, height: '100%' }}
                />
              </Box>
              <Box className={classes.imageWrapperDesktop}>
                <Image src={image} />
              </Box>
            </Grid.Col>
          </Grid>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Box>
            <Box mb={25}>
              <Text className={classes.description}>“{description}“</Text>
            </Box>

            <Flex direction="row" align="center">
              {authorImage && (
                <Image
                  src={authorImage}
                  alt="profile"
                  style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: 18 }}
                />
              )}
              <Box>
                <Text className={classes.author}>{author}</Text>
                <Text className={classes.company}>{company}</Text>
              </Box>
            </Flex>

            <Box mb={100}>
              <LineNavigator
                data={testimonies}
                active={active}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
              />
            </Box>

            <Box pos="relative">
              <Box className={classes.imageWrapperMobile}>
                <Image
                  src={image}
                  width={isMobile ? 250 : 290}
                  height={isMobile ? 300 : 312}
                  sx={{ img: { borderRadius: '10px' } }}
                />
              </Box>
              <Box
                w="calc(100% + 48px)"
                h={370}
                ml={-24}
                pos="relative"
                sx={{ overflow: 'hidden', backgroundColor: '#D6E6FC' }}>
                <StaticImage
                  src="../images/gradient-purple.png"
                  alt="gradient-purple"
                  style={{ width: 360, height: '100%' }}
                />
              </Box>
            </Box>
          </Box>
        </MediaQuery>
      </Container>
    </Box>
  );
};
