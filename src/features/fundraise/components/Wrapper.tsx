import React, { FC, PropsWithChildren } from 'react';
import { Container, createStyles, Text, Flex, Stack, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles(theme => ({
  title: {
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
  },

  gradientTitle: {
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
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 12,
    },
  },
}));

export const Wrapper: FC<
  PropsWithChildren<{
    title: string;
    gradientTitle?: boolean;
    desc?: string;
    descLine2?: string;
    bg: string;
    pb?: number;
  }>
> = ({ title, gradientTitle, desc, descLine2, children, bg, pb }) => {
  const { classes } = useStyles();
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Flex
      justify="center"
      align="center"
      dir="column"
      h="100%"
      mih={tabScreen ? 'unset' : '100vh'}
      bg={bg}
      pt={100}
      pb={pb || 100}>
      <Container size="ll">
        <Stack spacing={0} justify="center" align="center">
          <Text
            className={`${classes.title} ${gradientTitle ? classes.gradientTitle : ''}`}
            align="center">
            {title}
          </Text>
          {!!desc && (
            <Text className={classes.subtitle} align="center" mt="10px" maw={600}>
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
