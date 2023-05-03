import { Center, Container, Image, Text, Box } from '@mantine/core';
import React from 'react';

export const ComingSoon: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <Container size="md">
        <Center maw={400} h="calc(100vh - 15vh)" mx="auto">
          <Image src="/img/logo-white.png" alt="ICX" maw={100} m="xl" />
          <Text color="white" fz="lg" fw="bold" lineClamp={2}>
            Unlocking Your Next Level Investment
          </Text>
        </Center>
      </Container>
    </div>
  );
};
