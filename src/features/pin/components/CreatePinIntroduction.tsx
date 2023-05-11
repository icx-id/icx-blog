import { Box, Container, createStyles, rem, Flex, Text, Center, Button } from '@mantine/core';
import React from 'react';
import phoneImage from '~/images/icx-logo-dark.png';
import profileIcon from '~/images/icons/ic-profile.svg';
import profileInvestorIcon from '~/images/icons/ic-profile-investor.svg';
import chartIcon from '~/images/icons/ic-chart.svg';
import bankIcon from '~/images/icons/ic-bank.svg';

const useStyles = createStyles(theme => ({
  root: {
    height: rem(700),
    paddingTop: rem(120),
    paddingBottom: rem(50),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(120),
      height: '100vh',
    },
  },
  image: {
    width: rem(180),
    objectFit: 'contain',
    marginBottom: rem(30),
    [theme.fn.smallerThan('sm')]: {
      width: rem(80),
      marginBottom: rem(20),
    },
  },
  icon: {
    width: rem(30),
    objectFit: 'contain',
    [theme.fn.smallerThan('sm')]: {
      width: rem(20),
    },
  },
}));

interface CreatePinIntroductionProps {
  onNextState: () => void;
}

export const CreatePinIntroduction: React.FC<CreatePinIntroductionProps> = ({ onNextState }) => {
  const { classes } = useStyles();

  return (
    <Box bg="#F8F8F8" className={classes.root}>
      <Container size="ll" h="100%">
        <Center h="100%">
          <Flex
            direction="column"
            h="100%"
            sx={theme => ({
              padding: '50px',
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: rem(8),
              [theme.fn.smallerThan('sm')]: {
                justifyContent: 'space-between',
                width: '100%',
                padding: 0,
                alignItems: 'flex-start',
              },
            })}>
            <Flex
              direction="column"
              gap={rem(5)}
              sx={theme => ({
                alignItems: 'center',
                padding: '0 140px',
                [theme.fn.smallerThan('sm')]: {
                  padding: '0',
                  alignItems: 'flex-start',
                },
              })}
              px={rem(140)}>
              <img src={phoneImage} alt="icx-logo" className={classes.image} />
              <Text size={rem(26)} weight="600">
                Amankan Akun Anda
              </Text>
              <Text
                sx={theme => ({
                  textAlign: 'center',
                  fontSize: rem(16),
                  [theme.fn.smallerThan('sm')]: {
                    fontSize: rem(14),
                    textAlign: 'left',
                  },
                })}>
                Mari kita mulai dari dasar, memastikan akun Anda terlindungi
              </Text>
              <Flex
                sx={theme => ({
                  width: '100%',
                  marginTop: rem(30),
                  justifyContent: 'space-around',
                  [theme.fn.smallerThan('sm')]: {
                    width: '70%',
                    justifyContent: 'space-between',
                    marginTop: rem(20),
                  },
                })}>
                <img src={profileIcon} className={classes.icon} alt="profile-icon" />
                <img
                  src={profileInvestorIcon}
                  className={classes.icon}
                  alt="profile-investor-icon"
                />
                <img src={chartIcon} className={classes.icon} alt="chart-icon" />
                <img src={bankIcon} className={classes.icon} alt="bank-icon" />
              </Flex>
            </Flex>
            <Button
              sx={theme => ({
                width: '60%',
                [theme.fn.smallerThan('sm')]: {
                  width: '100%',
                },
              })}
              onClick={onNextState}
              radius="lg"
              mt={rem(40)}>
              Selanjutnya
            </Button>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
};
