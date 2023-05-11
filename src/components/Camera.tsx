import { Box, UnstyledButton, rem } from '@mantine/core';
import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { IconCamera, IconX, IconRefresh } from '@tabler/icons-react';
import { base64ToBlob } from '~/utils/base64ToBlob';
import { getUnixTime } from 'date-fns';
import { useMediaQuery } from '@mantine/hooks';

type CameraConfig = {
  [key: string]: {
    height: number;
    width: number;
  };
};

const cameraConfig: CameraConfig = {
  SD: {
    height: 480,
    width: 640,
  },
  HD: {
    height: 720,
    width: 1280,
  },
};

export interface CameraProps {
  onSubmitSuccess: (image: File) => void;
  closeCamera: () => void;
  format: 'SD' | 'HD';
}

const FILE_TYPE = 'image/jpeg';

export const Camera: React.FC<CameraProps> = ({ onSubmitSuccess, format, closeCamera }) => {
  const webcamRef = useRef<any>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const mobileScreen = useMediaQuery('(max-width: 30em)');

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const fileImage = base64ToBlob(
        imageSrc,
        FILE_TYPE,
        '.jpeg',
        `KYC-IDENTITY-${getUnixTime(new Date())}`,
      );
      onSubmitSuccess(fileImage);
    }
  }, [webcamRef]);

  const handleSwitchFacingMode = useCallback(() => {
    setFacingMode(prevState => (prevState === 'user' ? 'environment' : 'user'));
  }, []);

  return (
    <Box pos="relative" sx={{ width: 'fit-content' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat={FILE_TYPE}
        height={mobileScreen ? undefined : cameraConfig[format].height}
        width={mobileScreen ? '100%' : cameraConfig[format].width}
        videoConstraints={{
          height: cameraConfig[format].height,
          width: cameraConfig[format].width,
          facingMode: facingMode,
        }}
        mirrored
      />
      <UnstyledButton
        onClick={capture}
        bg="#00C48F"
        w={rem(50)}
        h={rem(50)}
        style={{
          borderRadius: rem(8),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 30,
          bottom: 30,
        }}>
        <IconCamera color="#FFF" size={rem(23)} />
      </UnstyledButton>
      <UnstyledButton
        onClick={closeCamera}
        bg="#F4F4F4"
        w={rem(35)}
        h={rem(35)}
        style={{
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 20,
          top: 20,
        }}>
        <IconX color="#00C48F" size={rem(18)} />
      </UnstyledButton>
      <UnstyledButton
        onClick={handleSwitchFacingMode}
        bg="#F4F4F4"
        w={rem(35)}
        h={rem(35)}
        style={{
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 20,
          top: 20,
        }}>
        <IconRefresh color="#00C48F" size={rem(18)} />
      </UnstyledButton>
    </Box>
  );
};
