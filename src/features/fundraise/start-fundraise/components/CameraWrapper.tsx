import { Center, Container, rem } from '@mantine/core';
import React from 'react';
import { Camera, CameraProps } from '~/components/Camera';

interface CameraWrapper extends Omit<CameraProps, 'format'> {}

export const CameraWrapper: React.FC<CameraWrapper> = ({ onSubmitSuccess, closeCamera }) => {
  return (
    <Container>
      <Center pt={rem(120)} pb={rem(50)}>
        <Camera format="SD" onSubmitSuccess={onSubmitSuccess} closeCamera={closeCamera} />
      </Center>
    </Container>
  );
};
