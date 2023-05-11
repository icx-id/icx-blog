import { Box, Container, Flex, Progress, Text, createStyles, rem } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
  useOcrIdentityMutation,
  useOcrIdentityMutationErrors,
} from '../api/useOcrIdentityMutation';
import {
  extractAddressFromOcrResult,
  extractCityFromOcrResult,
  extractProvinceFromOcrResult,
} from '../utils/format';
import { useKycStore } from '../stores';
import { format } from 'date-fns';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

const useStyles = createStyles(theme => ({
  root: { height: '80vh' },
  image: {
    width: rem(160),
    height: rem(160),
    objectFit: 'contain',
    [theme.fn.smallerThan('sm')]: {
      width: rem(100),
    },
  },
  progress: {
    width: '80%',
  },
  content: {
    width: '40%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: rem(40),
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      marginTop: rem(20),
    },
  },
}));

interface KycUploadProgressProps {
  onFinishCheckImage: () => void;
}

export const KycUploadProgress: React.FC<KycUploadProgressProps> = ({ onFinishCheckImage }) => {
  const { classes } = useStyles();

  const { mutateAsync: requestOcrIdentity, isLoading } = useOcrIdentityMutation();
  const [progressPercentage, setProgressPercentage] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const { identityPhoto, onAddressIdentitySuccess, onIdentitySuccess } = useKycStore();

  const translateImageToText = useCallback(async () => {
    try {
      const identity = await requestOcrIdentity({
        identityPhoto,
      });

      onAddressIdentitySuccess({
        addressIdentity: {
          identityAddress: extractAddressFromOcrResult(identity.address, identity.rtRw),
          identityProvince: extractProvinceFromOcrResult(identity.state),
          identityTown: extractCityFromOcrResult(identity.city),
          identityDistrict: identity.district,
          identitySubdistrict: identity.administrativeVillage,
          identityPostalCode: '',
        },
      });
      onIdentitySuccess({
        ...identity,
        dateOfBirth: format(new Date(identity.dateOfBirth), 'yyyy-MM-dd'),
      });
      onFinishCheckImage();
    } catch (e) {
      onFinishCheckImage();
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;
      if (errors?.includes(useOcrIdentityMutationErrors.KTP_NOT_DETECTED)) {
        return notifications.show({
          color: 'red',
          message: 'KTP tidak terdeteksi',
        });
      }
      return notifications.show({
        color: 'red',
        message: 'Ada kesalahan',
      });
    }
  }, [identityPhoto, requestOcrIdentity]);

  useEffect(() => {
    if (!isLoading && progressPercentage >= 90) {
      setProgressPercentage(100);
      setIsActive(false);
    }
    if (isActive) {
      const timer =
        progressPercentage > 0 &&
        progressPercentage <= 90 &&
        setInterval(() => setProgressPercentage(progressPercentage + 1), 5);

      return () => clearInterval(Number(timer));
    } else if (!isActive && progressPercentage !== 0) {
      clearInterval(progressPercentage);
    }
  }, [isActive, isLoading, progressPercentage]);

  useEffect(() => {
    if (progressPercentage === 1) {
      translateImageToText();
    }
  }, [progressPercentage, translateImageToText]);

  return (
    <Box bg="#EEFFF2" className={classes.root} py={rem(50)}>
      <Container h="100%">
        <Flex justify="center" align="center" h="100%" direction="column">
          <img className={classes.image} alt="icon-progress" src="/img/icons/icon-progres.svg" />
          <Flex className={classes.content}>
            <Progress
              value={progressPercentage}
              className={classes.progress}
              color="green"
              animate
            />
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
