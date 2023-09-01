import { Box, Button, Container, Flex, Text, createStyles } from '@mantine/core';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import IcxMockup from '../../../images/icx-contact-us-banner.png';
import { IconChevronLeft } from '@tabler/icons-react';
import { navigate } from 'gatsby';

interface ContactUsSectionProps extends PropsWithChildren {
  icon?: ReactNode;
  title?: string;
  desc?: string;
  bannerText?: string;
  lastPage?: boolean;
  withBackToHomeButton?: boolean;
  withSubmitButton?: boolean;
  buttonDisabled?: boolean;
  goBack?: () => void;
  onSubmit?: () => void;
}

const useStyles = createStyles(theme => ({
  button: {
    ':hover': {
      background: 'white',
    },
  },

  bannerText: {
    position: 'absolute',
    left: 400,
    top: 400,
    color: 'white',
    fontSize: 70,
    fontWeight: 'bolder',
  },

  title: {
    fontSize: 36,
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

export const ContactUsContainer: FC<ContactUsSectionProps> = ({
  icon,
  title,
  desc,
  bannerText,
  lastPage,
  children,
  withBackToHomeButton,
  withSubmitButton,
  buttonDisabled,
  goBack,
  onSubmit,
}) => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');
  const giantScreen = useMediaQuery('(min-width: 160em)');

  return (
    <Flex
      direction={mobileScreen ? 'column-reverse' : 'row'}
      mah={tabScreen ? 'unset' : giantScreen ? '80vh' : '100vh'}
      sx={{ overflow: 'hidden' }}>
      <Flex
        direction="column"
        justify="space-between"
        w={mobileScreen ? '100%' : '45vw'}
        pt={mobileScreen ? 80 : 130}
        pb={40}
        h="100vh"
        px={mobileScreen ? 20 : 70}>
        <Flex align="start" direction="column">
          {lastPage ? null : (
            <Button className={classes.button} p={0} variant="subtle" onClick={goBack} color="dark">
              <Flex align="center" gap={7}>
                <IconChevronLeft size={18} />
                {withBackToHomeButton ? 'Back to home' : 'Back'}
              </Flex>
            </Button>
          )}
          <Container px={0} w="100%" size="ll">
            {icon}
            <Text className={classes.title}>{title}</Text>
            <Text className={classes.subtitle}>{desc}</Text>
            <Flex direction="column" mt="40px" gap={10}>
              {children}
            </Flex>
          </Container>
        </Flex>

        <Flex gap="xl">
          {lastPage ? (
            <Button w="100%" radius="lg" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          ) : (
            <Button w="100%" radius="lg" onClick={onSubmit} disabled={buttonDisabled}>
              {withSubmitButton ? 'Submit' : 'Next'}
            </Button>
          )}
        </Flex>
      </Flex>
      {mobileScreen ? null : (
        <Box w="55vw" h="100%" pos="relative">
          <Text className={classes.bannerText}>{bannerText}</Text>
          <img src={IcxMockup} alt="Mockup" style={{ width: '100%', height: '101vh' }} />
        </Box>
      )}
    </Flex>
  );
};
