import React, { FC } from 'react';
import { Box, MediaQuery } from '@mantine/core';

const ICXConnectPage: FC = () => {
  return (
    <main>
      <MediaQuery smallerThan="md" styles={{ paddingTop: 64 }}>
        <Box pt={80}>ICX Connect!</Box>
      </MediaQuery>
    </main>
  );
};

export default ICXConnectPage;
