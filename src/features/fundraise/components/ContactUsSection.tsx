import { Box, Button, Container, Flex, Image, Text, createStyles } from '@mantine/core';
import React, { FC } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import IcxMockup from '../assets/icx-mockup.webp';
import { ContactUsSectionProps } from '../types';
import { navigate } from 'gatsby';

const useStyles = createStyles(theme => ({
  title: {
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
    background: '-webkit-linear-gradient(left, #011929, #00C48F)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '28px',
    maxWidth: 600,
    [theme.fn.smallerThan('lg')]: {
      fontSize: 12,
      lineHeight: '24px',
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

export const ContactUsSection: FC<ContactUsSectionProps> = ({ title, desc }) => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');
  const giantScreen = useMediaQuery('(min-width: 160em)');

  return (
    <Flex
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
            {title}
          </Text>
          <Text align={mobileScreen ? 'center' : 'start'} className={classes.subtitle}>
            {desc}
          </Text>
          <Flex direction={mobileScreen ? 'column' : 'row'} mt="40px" gap={10}>
            <Button
              onClick={() => navigate('/contact')}
              fullWidth={mobileScreen}
              w={{ sm: 200 }}
              h={40}
              style={{ fontSize: 12 }}>
              Contact Us
            </Button>
            <Button
              onClick={() => navigate('/fundraise/start-fundraise')}
              variant="outlined"
              fullWidth={mobileScreen}
              w={{ sm: 200 }}
              h={40}
              sx={{
                fontSize: 12,
                color: '#000',
                border: '0.5px solid #000',
                ':hover': {
                  boxShadow: '0px 4px 30px #00b38270',
                  transition: '300ms ease-in-out',
                },
              }}>
              Start Raising
            </Button>
          </Flex>
        </Container>
      </Flex>
      <Box w={mobileScreen ? '100%' : '50vw'} h="100%">
        <Image src={IcxMockup} alt="Mockup" fit="cover" w="100%" h="100%" />
      </Box>
    </Flex>
  );
};
