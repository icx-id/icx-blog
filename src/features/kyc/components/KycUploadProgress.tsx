import { Box, Container, Flex, Image, Progress, Text, rem } from '@mantine/core';
import React, { useEffect } from 'react';

interface KycUploadProgressProps {
  onFinishCheckImage: () => void;
}

export const KycUploadProgress: React.FC<KycUploadProgressProps> = ({ onFinishCheckImage }) => {
  useEffect(() => {
    setTimeout(() => {
      onFinishCheckImage();
    }, 3000);
  });
  return (
    <Box bg="#EEFFF2" h="80vh" py={rem(50)}>
      <Container h="100%">
        <Flex justify="center" align="center" h="100%" direction="column">
          <Image
            style={{ width: rem(160), height: rem(160) }}
            fit="contain"
            src="/img/icons/icon-progres.svg"
          />
          <Flex w="40%" justify="center" direction="column" align="center" mt={rem(40)}>
            <Progress value={90} w="80%" color="green" animate />
            <Text size={rem(26)} weight="500" mt={rem(10)}>
              Memeriksa kualitas foto...
            </Text>
            <Text align="center" color="#868E96" size={rem(14)} mt={rem(8)}>
              Mohon untuk tidak menutup aplikasi. Proses ini akan selesai dalam beberapa detik saja.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
