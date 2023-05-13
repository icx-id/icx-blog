import { Box, Container, Flex, Stack, Text, createStyles, rem } from '@mantine/core';
import React from 'react';
import gradientProfile from '~/images/gradient-profile.png';
import { useStore } from '~/stores';

const useStyles = createStyles(theme => ({
  root: {
    height: rem(300),
    backgroundColor: '#F8F8F8',
    [theme.fn.smallerThan('sm')]: {
      height: rem(250),
      marginBottom: rem(30),
    },
  },
  image: {
    width: rem(110),
    height: rem(110),
    borderRadius: '50%',
    objectFit: 'cover',
    [theme.fn.smallerThan('sm')]: {
      height: rem(90),
      width: rem(90),
    },
  },
}));

export const Header = () => {
  const { user } = useStore();
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container h="100%" pos="relative">
        <Flex
          align="center"
          h="100%"
          sx={theme => ({
            gap: rem(20),
            [theme.fn.smallerThan('sm')]: {
              gap: rem(10),
            },
          })}>
          <img src={gradientProfile} className={classes.image} />
          <Box />
          <Stack spacing={rem(0)}>
            <Text size={rem(24)} weight="bold">
              {user?.identity.fullName}
            </Text>
            <Text color="brand" weight="600">
              Edit Profile
            </Text>
          </Stack>
        </Flex>
        <Box pos="absolute" bottom={0} h={rem(45)} sx={{ borderBottom: '4px solid #00C48F' }}>
          <Text weight={600}>My Event</Text>
        </Box>
      </Container>
    </Box>
  );
};
