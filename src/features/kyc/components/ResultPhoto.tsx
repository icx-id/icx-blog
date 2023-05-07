import { Flex, Text, rem, Button, Stack } from '@mantine/core';
import React from 'react';

interface ResultPhotoProps {
  onConfirmPhoto: () => void;
  onRetakePhoto: () => void;
  resultImage: string;
  title: string;
}

export const ResultPhoto: React.FC<ResultPhotoProps> = ({
  onConfirmPhoto,
  onRetakePhoto,
  resultImage,
  title,
}) => {
  return (
    <Flex px={rem(25)} justify="center" align="center" h="100%" direction="column">
      <img
        src={resultImage}
        alt="image-result"
        style={{ width: '80%', maxHeight: rem(300), objectFit: 'contain' }}
      />
      <Stack px="17%">
        <Text align="center" mt={rem(30)} size={rem(18)}>
          {title}
        </Text>
        <Button onClick={onConfirmPhoto}>Konfirmasi Foto</Button>
        <Button onClick={onRetakePhoto}>Foto Ulang</Button>
      </Stack>
    </Flex>
  );
};
