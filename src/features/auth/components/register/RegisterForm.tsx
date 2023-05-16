import React from 'react';
import { Box, Button, Flex, Image, MediaQuery, Stack, Text } from '@mantine/core';
import { InlineBadge, Input, Link, MaskInput } from '~/components';
import icxIcon from '~/images/icx-inline-logo.svg';
import { useFormik } from 'formik';
import {
  useRegisterMutation,
  useRegisterMutationErrors,
  useVerificationRequestMutation,
} from '../../api';
import { parseToPhoneNumber } from '~/utils/format';
import { AxiosError } from 'axios';
import { RegisterFormSchema } from '../../schemas/RegisterFormSchema';
import { notifications } from '@mantine/notifications';

interface RegisterFormValues {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  referralCode: string;
}

interface RegisterFormProps {
  onSubmitSuccess: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmitSuccess }) => {
  const { mutateAsync: verifyAccount } = useVerificationRequestMutation();
  const { mutateAsync: register, isLoading } = useRegisterMutation();
  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    errors: formErrors,
    values,
    isValid,
    setFieldError,
    setFieldValue,
  } = useFormik<RegisterFormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      referralCode: '',
    },
    onSubmit: async ({ password, email, phoneNumber, referralCode }) => {
      try {
        await register({
          email,
          password,
          phoneNumber: parseToPhoneNumber(phoneNumber),
          referralCode,
        });

        // await verifyAccount({
        //   type: 'phone-number',
        // });

        notifications.show({
          message: 'You can now login to the website',
          title: 'Registration successful',
          color: 'brand',
        });

        onSubmitSuccess();
      } catch (e) {
        const err = e as AxiosError<{ errors: string[] }>;
        const errors = err.response?.data?.errors;
        if (errors && errors.includes(useRegisterMutationErrors.PHONE_EXISTS)) {
          setFieldError('phoneNumber', 'No. HP sudah terdaftar');
          return;
        }
        if (errors && errors.includes(useRegisterMutationErrors.EMAIL_EXISTS)) {
          setFieldError('email', 'Email sudah terdaftar');
          return;
        }
      }
    },
    validationSchema: RegisterFormSchema,
    isInitialValid: false,
    validateOnChange: true,
  });

  return (
    <>
      <MediaQuery smallerThan="md" styles={{ justifyContent: 'space-between' }}>
        <Stack sx={{ height: '100%' }}>
          <Stack>
            <Flex>
              <Text weight="bold" size="24px">
                Create account
              </Text>
              <Image src={icxIcon} maw="70px" ml="md" />
            </Flex>

            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  error={formErrors.email}
                  label="Email"
                  value={values.email}
                  name="email"
                  placeholder="Masukkan Email"
                  onChange={handleChange}
                />
                <MaskInput
                  mask="+62 000 0000 0000"
                  error={formErrors.phoneNumber}
                  label="Nomor HP"
                  value={values.phoneNumber}
                  name="phoneNumber"
                  placeholder="Masukkan Nomor HP"
                  type="phoneNumber"
                  onAccept={value => setFieldValue('phoneNumber', value)}
                />
                <Input
                  // description="Kata sandi harus berisi minimal 8 karakter, 1 huruf besar, 1 angka dan 1 simbol."
                  error={formErrors.password}
                  label="Kata Sandi"
                  value={values.password}
                  name="password"
                  placeholder="Masukkan Kata Sandi"
                  type="password"
                  onChange={handleChange}
                />
                <Input
                  error={formErrors.confirmPassword}
                  label="Konfirmasi Kata Sandi"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  placeholder="Masukkan Kata Sandi"
                  onChange={handleChange}
                  type="password"
                />
                <Input
                  error={formErrors.referralCode}
                  label="Kode Referral (optional)"
                  value={values.referralCode}
                  name="referralCode"
                  placeholder="Masukkan Kode Referral"
                  onChange={handleChange}
                />
                <Button
                  disabled={isLoading || isSubmitting || !isValid}
                  type="submit"
                  display="none"></Button>
              </Stack>
            </form>
          </Stack>

          <Box sx={{ textAlign: 'center' }} mt="16px">
            <Stack mb="xl" spacing={8} fz="xs">
              <Text>Dengan mendaftar, saya menyetujui</Text>
              <Flex justify="center" align="center" gap="sm" fz="10px">
                <MediaQuery smallerThan="xs" styles={{ fontSize: '0.75em' }}>
                  <InlineBadge>Syarat dan Ketentuan</InlineBadge>
                </MediaQuery>
                <MediaQuery smallerThan="xs" styles={{ fontSize: '1em' }}>
                  <Text size="1.25em">serta</Text>
                </MediaQuery>
                <MediaQuery smallerThan="xs" styles={{ fontSize: '0.75em' }}>
                  <InlineBadge>Integrasi Privy dan Xendit</InlineBadge>
                </MediaQuery>
              </Flex>
            </Stack>
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Button
                disabled={isLoading || isSubmitting || !isValid}
                onClick={() => handleSubmit()}
                radius="xl"
                fullWidth>
                Daftar
              </Button>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
              <Button
                disabled={isLoading || isSubmitting || !isValid}
                onClick={() => handleSubmit()}
                radius="xl"
                fullWidth
                size="lg">
                Daftar
              </Button>
            </MediaQuery>

            <MediaQuery smallerThan="md" styles={{ paddingBottom: '2em' }}>
              <Text mt="md">
                Sudah punya akun? <Link to="/login">Masuk</Link>
              </Text>
            </MediaQuery>
          </Box>
        </Stack>
      </MediaQuery>
    </>
  );
};
