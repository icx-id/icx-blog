import { Box, Container, createStyles, rem, PinInput, Flex, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useVerificationRequestMutation } from '~/features/auth';
import {
  useVerificationVerifyMutation,
  useVerifycationVerifyErrors,
} from '../api/userVerificationVerifyMutation';
import { useStore } from '~/stores';
import { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';
import { useCountdown } from '~/utils/useCountdown';

const useStyles = createStyles(theme => ({
  root: {
    height: rem(700),
    paddingTop: rem(200),
    paddingBottom: rem(50),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      height: rem(500),
    },
  },
}));

interface PhoneNumberVerificationProps {
  onSubmitSuccess: () => void;
}

const COUNTDOWN_DURATION = 1 * 60;

export const PhoneNumberVerification: React.FC<PhoneNumberVerificationProps> = ({
  onSubmitSuccess,
}) => {
  const { classes } = useStyles();
  const [isError, setIsError] = useState<boolean>(false);
  const { mutateAsync: requestVerification } = useVerificationRequestMutation();
  const { mutateAsync: verifyVerification } = useVerificationVerifyMutation();
  const { verificationToken, user } = useStore();

  const [otp, setOtp] = useState<string>('');
  const { seconds, minutes, timeLeft, refreshCountDown } = useCountdown({
    timeDuration: COUNTDOWN_DURATION,
  });

  const onRequestVerification = async () => {
    try {
      refreshCountDown();
      await requestVerification({
        type: 'phone-number',
      });
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;
      if (errors) {
        return notifications.show({
          message: errors.join(' '),
          color: 'red',
        });
      }
    }
  };

  const onSubmitOtp = async () => {
    try {
      if (!verificationToken) {
        setIsError(true);
        return notifications.show({
          message: 'Sesi habis, silahkan kirim ulang OTP',
          color: 'red',
        });
      }

      await verifyVerification({
        verificationToken,
        type: 'phone-number',
        otp,
        purpose: 'auth',
      });
      onSubmitSuccess();
    } catch (e) {
      setIsError(true);
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;

      if (errors?.includes(useVerifycationVerifyErrors.PHONE_NUMBER_VERIFIED)) {
        return notifications.show({
          color: 'red',
          message: 'No. HP sudah terverifikasi.',
        });
      }
      if (errors?.includes(useVerifycationVerifyErrors.OTP_NOT_FOUND)) {
        return notifications.show({
          color: 'red',
          message: 'Kode OTP salah',
        });
      }
    }
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setOtp('');
        setIsError(false);
      }, 1000);
    }
  }, [isError]);

  return (
    <Box bg="#F8F8F8" className={classes.root}>
      <Container size="ll" h="100%">
        <Flex
          direction="column"
          align="center"
          w="100%"
          h="100%"
          sx={theme => ({
            [theme.fn.smallerThan('sm')]: {
              justifyContent: 'center',
            },
          })}>
          <Flex direction="column" align="center" gap={rem(5)}>
            <Text size={rem(26)} weight="600">
              Masukan Kode OTP
            </Text>
            <Text
              align="center"
              sx={theme => ({
                fontSize: rem(16),
                [theme.fn.smallerThan('sm')]: {
                  fontSize: rem(14),
                },
              })}>
              Masukan 6 Digit kode OTP yang kami kirim ke +{user?.phoneNumber}
            </Text>
            {timeLeft <= 0 ? (
              <Text color="brand" onClick={onRequestVerification}>
                Kirim ulang OTP
              </Text>
            ) : (
              <Text color="brand" weight="medium">
                {minutes} : {seconds}
              </Text>
            )}
          </Flex>
          <PinInput
            onChange={e => setOtp(e)}
            onComplete={onSubmitOtp}
            autoFocus
            size="lg"
            mt={rem(32)}
            oneTimeCode
            length={6}
            type="number"
            error={isError}
            value={otp}
          />
        </Flex>
      </Container>
    </Box>
  );
};
