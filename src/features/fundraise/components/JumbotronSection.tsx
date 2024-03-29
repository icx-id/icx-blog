import { Box, Container, Stack, createStyles, Text, Button, Flex } from '@mantine/core';
import React, { FC } from 'react';
import FundraiseBackground from '../assets/fundraise-bg.webp';
import { useMediaQuery } from '@mantine/hooks';
import { JumbotronSectionProps } from '../types';
import { navigate } from 'gatsby';

const useStyles = createStyles(theme => ({
  root: {
    backgroundImage: `url(${FundraiseBackground})`,
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundSize: 'cover',
    [theme.fn.smallerThan('lg')]: {
      backgroundPosition: '40% bottom',
    },
    [theme.fn.smallerThan('sm')]: {
      backgroundPosition: 'unset',
    },
  },

  container: {
    height: '100vh',
    paddingTop: 80,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 64,
      height: '100%',
    },
  },

  title: {
    color: '#fff',
    fontSize: 52,
    fontWeight: 600,
    lineHeight: '72px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 40,
      lineHeight: '60px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
    [theme.fn.largerThan('2xl')]: {
      fontSize: 58,
      lineHeight: '74px',
    },
  },

  subtitle: {
    mt: '20px',
    color: '#fff',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '28px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
    [theme.fn.largerThan('2xl')]: {
      fontSize: 24,
      lineHeight: '34px',
    },
  },
}));

export const JumbotronSection: FC<JumbotronSectionProps> = ({ desc, title }) => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 30em)');

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Container size="ll" h="100%">
          <Stack
            spacing={0}
            p="54px 0"
            justify={mobileScreen ? 'flex-end' : 'center'}
            h="calc(100% - 80px)">
            <Text className={classes.title}>
              <div dangerouslySetInnerHTML={{ __html: title }} />
            </Text>
            <Box maw={{ sm: 420, lg: 500 }}>
              <Text mt="20px" className={classes.subtitle}>
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
                <a href="https://penerbit.icx.id/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outlined"
                    fullWidth={mobileScreen}
                    w={{ sm: 200 }}
                    h={40}
                    sx={{
                      fontSize: 12,
                      color: '#fff',
                      border: '0.5px solid #fff',
                      ':hover': {
                        boxShadow: '0px 4px 30px #00b38270',
                        transition: '300ms ease-in-out',
                      },
                    }}>
                    Start Raising
                  </Button>
                </a>
              </Flex>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
