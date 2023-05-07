import React from 'react';
import {
  Text,
  Box,
  Stack,
  MediaQuery,
  Grid,
  Image,
  Flex,
  createStyles,
  Container,
} from '@mantine/core';
import { AboutContainer } from './AboutContainer';

import SummaryVideo from '~/images/summary-video.svg';
import PlayIcon from '~/images/play-icon.png';

const BACKGROUND_COLOR = '#131E2C';

type SummarySectionProps = {
  onOpenVideo: () => void;
};

const useStyles = createStyles(theme => ({
  root: {
    color: '#fff',
    backgroundColor: BACKGROUND_COLOR,
    position: 'relative',
    [theme.fn.smallerThan('md')]: {
      height: 'auto',
    },
    overflow: 'hidden',
  },

  container: {
    height: '100vh',
    paddingTop: 80,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 64,
      height: '100%',
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
    fontSize: 56,
    fontWeight: 600,
    lineHeight: '72px',
    [theme.fn.smallerThan('md')]: {
      maxWidth: 'initial',
      fontSize: 32,
      lineHeight: '40px',
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
    },
  },

  contentContainer: {
    padding: '54px 0',
    [theme.fn.smallerThan('md')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
    height: '100vh',
  },
}));

export const SummarySection: React.FC<SummarySectionProps> = ({ onOpenVideo }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <MediaQuery smallerThan="md" styles={{ right: '-50vw', bottom: '0' }}>
        <Box
          sx={{
            background:
              'linear-gradient(149.92deg, #CEEFF3 36.83%, rgba(202, 235, 239, 0.98) 40.49%, rgba(192, 223, 228, 0.93) 44.88%, rgba(174, 204, 209, 0.83) 49.27%, rgba(150, 176, 183, 0.7) 53.66%, rgba(119, 142, 150, 0.54) 58.78%, rgba(81, 99, 110, 0.33) 63.17%, rgba(36, 50, 63, 0.1) 68.3%, rgba(19, 30, 44, 0) 70.49%)',
            transform: 'rotate(-170deg)',
            position: 'absolute',
            width: '100vw',
            height: '100vw',
            right: '-40vw',
            bottom: '-20vw',
            borderRadius: '50%',
          }}
        />
      </MediaQuery>
      <Box className={classes.container}>
        <Container size="ll" h="100%">
          <Stack className={classes.contentContainer} justify="center" h="calc(100% - 80px)">
            <Stack spacing={0} fz="40px" fw="bold">
              <Text className={classes.title}>
                We Are Providing You
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <br />
                </MediaQuery>{' '}
                With The New Way Of Investing
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <br />
                </MediaQuery>{' '}
                To The Businesses You Trust
              </Text>
            </Stack>
            <Grid fz="20px" mt="40px" align="center">
              <Grid.Col sm={12} md={5}>
                <Text className={classes.subtitle} maw="550px">
                  Our platform facilitates curated private companies in raising funds from investors
                  and exchanges of stocks, becoming the bridge between businesses and people.
                </Text>
              </Grid.Col>
              <Grid.Col sm={12} md={6} orderSm={0} offsetMd={1}>
                <Text className={classes.subtitle} maw="550px">
                  With ICX, we are striving to empower common investor and private businesses to
                  grow beyond, together.
                </Text>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Flex pos="relative" justify="center">
        <Box sx={{ zIndex: -2 }} pos="absolute" bg={BACKGROUND_COLOR} h="40%" top={0} w="100%" />
        <Box sx={{ zIndex: 0 }} pos="absolute" bg="white" h="60%" bottom={0} w="100%" />
        <MediaQuery smallerThan="sm" styles={{ maxWidth: '95vw' }}>
          <Image maw="60vw" src={SummaryVideo} sx={{ cursor: 'pointer' }} onClick={onOpenVideo} />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ maxWidth: 48 }}>
          <Image
            maw={80}
            src={PlayIcon}
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            onClick={onOpenVideo}
          />
        </MediaQuery>
      </Flex>
    </Box>
  );
};
