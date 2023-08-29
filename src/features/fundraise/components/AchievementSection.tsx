import { Box, Container, createStyles, Flex, Image } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import AchievementMobile from '../assets/achievement-mobile.webp';
import AchievementDesktop from '../assets/achievement-desktop.webp';

const useStyles = createStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #FFF 70%, #000 30%)',
    height: '100%',
  },

  title: {
    background: '-webkit-linear-gradient(left, #011929, #137e66)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: 42,
    fontWeight: 600,
    lineHeight: '72px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 42,
      lineHeight: '60px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '28px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
}));

export const AchievementSection = () => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Box className={classes.root}>
      <Container size="ll" h="100%">
        <Flex direction="column" justify="center" align="center">
          <Flex
            direction={mobileScreen ? 'column' : 'row'}
            w={mobileScreen ? '100vw' : tabScreen ? '90%' : '70%'}>
            <Image
              src={mobileScreen ? AchievementMobile : AchievementDesktop}
              alt="achievement"
              width="100%"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
