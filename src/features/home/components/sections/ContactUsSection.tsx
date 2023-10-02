import { Box, Button, Container, Flex, Image, Text, createStyles } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import IcxMockup from '../../assets/icx-mockup-home.webp';
import { navigate } from 'gatsby';

const useStyles = createStyles(theme => ({
  title: {
    lineHeight: 1.2,
    color: '#fff',
    fontSize: 38,
    fontWeight: 600,
    [theme.fn.smallerThan('lg')]: {
      fontSize: 30,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
    },
    [theme.fn.largerThan('2xl')]: {
      fontSize: 44,
    },
  },

  subtitle: {
    marginTop: '18px',
    color: '#fff',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    maxWidth: 600,
    [theme.fn.smallerThan('lg')]: {
      fontSize: 12,
    },
    [theme.fn.smallerThan('sm')]: {
      lineHeight: '20px',
    },
    [theme.fn.largerThan('2xl')]: {
      fontSize: 20,
      maxWidth: 700,
    },
  },
}));

export const ContactUsSection = () => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');
  const giantScreen = useMediaQuery('(min-width: 160em)');

  return (
    <Flex
      bg="#1E1E1E"
      align="center"
      direction={mobileScreen ? 'column-reverse' : 'row'}
      mah={tabScreen ? 'unset' : giantScreen ? '80vh' : '100vh'}
      sx={{ overflow: 'hidden' }}>
      <Flex
        direction="column"
        align={mobileScreen ? 'center' : 'start'}
        w={mobileScreen ? '100%' : '50vw'}
        pr={mobileScreen ? 0 : 24}
        py={100}>
        <Container size="ll">
          <Text align={mobileScreen ? 'center' : 'start'} className={classes.title}>
            Do you want to
            <br />
            be one of our Investor?
          </Text>
          <Text align={mobileScreen ? 'center' : 'start'} className={classes.subtitle}>
            Discover exciting investment opportunities and be part of the next big success story.
          </Text>
          <Button
            mt="40px"
            onClick={() => navigate('/contact')}
            fullWidth={mobileScreen}
            w={{ sm: 200 }}
            h={40}
            style={{ fontSize: 12 }}>
            Contact Us
          </Button>
        </Container>
      </Flex>
      <Box w={mobileScreen ? '100%' : '50vw'} h="100%">
        <Image src={IcxMockup} alt="Mockup" fit="cover" w="100%" h="100%" />
      </Box>
    </Flex>
  );
};
