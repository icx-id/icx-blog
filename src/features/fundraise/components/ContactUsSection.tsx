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
    background: '-webkit-linear-gradient(left, #011929, #00C48F)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '28px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 12,
      lineHeight: '24px',
    },
    [theme.fn.smallerThan('sm')]: {
      lineHeight: '20px',
    },
  },
}));

export const ContactUsSection: FC<ContactUsSectionProps> = ({ title, desc }) => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 30em)');

  return (
    <Flex align="center" direction={mobileScreen ? 'column-reverse' : 'row'}>
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
          <Text align={mobileScreen ? 'center' : 'start'} className={classes.subtitle} maw={600}>
            {desc}
          </Text>
          <Button
            onClick={() => navigate('/contact')}
            mt="40px"
            fullWidth={mobileScreen}
            w={{ sm: 200 }}
            h={40}
            style={{ fontSize: 12 }}>
            Contact Us
          </Button>
        </Container>
      </Flex>
      <Box w={mobileScreen ? '100%' : '50vw'}>
        <Image src={IcxMockup} alt="Mockup" fit="cover" w="100%" h="100%" />
      </Box>
    </Flex>
  );
};
