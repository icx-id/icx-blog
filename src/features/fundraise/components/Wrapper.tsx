import React, { FC } from 'react';
import { Container, createStyles, Text, Flex, Stack, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { WrapperProps } from '../types';

const useStyles = createStyles(theme => ({
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 38,
    fontWeight: 600,
    lineHeight: '72px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 36,
      lineHeight: '60px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
    [theme.fn.largerThan('2xl')]: {
      fontSize: 44,
    },
  },

  gradientTitle: {
    background: '-webkit-linear-gradient(left, #011929, #00C48F)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  subtitle: {
    textAlign: 'center',
    mt: '10px',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '28px',
    maxWidth: 600,
    [theme.fn.smallerThan('lg')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 12,
    },
    [theme.fn.largerThan('2xl')]: {
      fontSize: 20,
      maxWidth: 700,
    },
  },
}));

export const Wrapper: FC<WrapperProps> = ({
  title,
  gradientTitle,
  desc,
  descLine2,
  children,
  bg,
  pb,
}) => {
  const { classes } = useStyles();
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');
  const giantScreen = useMediaQuery('(min-width: 160em)');

  return (
    <Flex
      justify="center"
      align="center"
      dir="column"
      h="100%"
      mih={tabScreen ? 'unset' : giantScreen ? '80vh' : '100vh'}
      bg={bg}
      pt={100}
      pb={pb || 100}>
      <Container size="ll">
        <Stack spacing={0} justify="center" align="center">
          <Text className={`${classes.title} ${gradientTitle ? classes.gradientTitle : ''}`}>
            {title}
          </Text>
          {!!desc && (
            <Text className={classes.subtitle}>
              {desc}
              {descLine2 && (
                <>
                  <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <br />
                  </MediaQuery>{' '}
                  {descLine2}
                </>
              )}
            </Text>
          )}
        </Stack>
        {children}
      </Container>
    </Flex>
  );
};
