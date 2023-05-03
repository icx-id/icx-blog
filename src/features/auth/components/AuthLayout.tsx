import React, { PropsWithChildren } from 'react';
import { Box, Button, Center, Flex, Grid, Image, MediaQuery, Text } from '@mantine/core';
import phoneImage from '~/images/auth-phone.webp';
import { IoChevronBack } from 'react-icons/io5';

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid gutter={0}>
      <Grid.Col sm={5.5} sx={{ padding: '50px' }}>
        <MediaQuery smallerThan="md" styles={{ marginBottom: '21px' }}>
          <Flex align="center" mb="64px">
            <Button component="a" href="/" variant="transparent" color="dark">
              <IoChevronBack size="18px" />
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Text ml={16}>Back To Homepage</Text>
              </MediaQuery>
            </Button>
          </Flex>
        </MediaQuery>

        {children}
      </Grid.Col>

      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Grid.Col sm={0} md={6.5}>
          <Box
            h="100vh"
            sx={{
              background: 'linear-gradient(135deg, rgba(19,30,44,1) 60%, rgba(206,239,243,1) 100%)',
              overflowY: 'hidden',
            }}>
            <Center>
              <Image sx={{ objectFit: 'contain' }} maw="750px" mih="100vh" src={phoneImage} />
            </Center>
          </Box>
        </Grid.Col>
      </MediaQuery>
    </Grid>
  );
};
