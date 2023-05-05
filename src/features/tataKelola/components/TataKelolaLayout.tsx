import { Box, Container, Grid, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { PropsWithChildren } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const TataKelolaLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  return (
    <Box bg="#FDFDFD" h="80vh">
      <Container h="100%">
        <Grid h="100%" pb={rem(40)} pt={mobileScreen ? rem(20) : rem(60)}>
          {mobileScreen ? <Navbar /> : <Sidebar />}
          <Grid.Col
            span={mobileScreen ? 12 : 9}
            h="100%"
            pl={mobileScreen ? 0 : rem(50)}
            style={{ overflowY: 'auto' }}>
            {children}
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
