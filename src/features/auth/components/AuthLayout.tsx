import React, { PropsWithChildren } from 'react';
import { Box, Button, Flex, Grid, MediaQuery, Text } from '@mantine/core';
import phoneImage from '~/images/auth-phone.webp';
import { IoChevronBack } from 'react-icons/io5';

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid gutter={0}>
      <MediaQuery smallerThan="md" styles={{ padding: '16px' }}>
        <Grid.Col
          sm={12}
          md={5.5}
          sx={{ padding: '50px', display: 'flex', flexDirection: 'column' }}
          h="100vh">
          <MediaQuery smallerThan="md" styles={{ marginBottom: '21px' }}>
            <Flex align="center" mb="44px">
              <Button component="a" href="/" variant="transparent" color="dark" sx={{ padding: 0 }}>
                <IoChevronBack size="18px" />
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Text ml={16}>Back To Homepage</Text>
                </MediaQuery>
              </Button>
            </Flex>
          </MediaQuery>

          <Box sx={{ flex: 1 }}>{children}</Box>
        </Grid.Col>
      </MediaQuery>

      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Grid.Col sm={0} md={6.5} h="100vh">
          <Box
            pos="relative"
            h="100vh"
            sx={{
              background: 'linear-gradient(135deg, rgba(19,30,44,1) 60%, rgba(206,239,243,1) 100%)',
              overflow: 'hidden',
            }}>
            <Flex justify="center">
              <img
                style={{
                  position: 'absolute',
                  bottom: 0,
                  objectFit: 'contain',
                  height: '85%',
                }}
                src={phoneImage}
              />
            </Flex>
          </Box>
        </Grid.Col>
      </MediaQuery>
    </Grid>
  );
};
