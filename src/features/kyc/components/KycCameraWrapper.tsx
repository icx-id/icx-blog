import { Center, Container, rem } from '@mantine/core';
import React from 'react';
import { Camera, CameraProps } from '~/components/Camera';

interface KycCameraWrapper extends Omit<CameraProps, 'format'> {}

export const KycCameraWrapper: React.FC<KycCameraWrapper> = ({ onSubmitSuccess, closeCamera }) => {
  return (
    <Container>
      <Center pt={rem(120)} pb={rem(50)}>
        <Camera format="SD" onSubmitSuccess={onSubmitSuccess} closeCamera={closeCamera} />
      </Center>
    </Container>
  );
};
