import React from 'react';
import { Box, Button, Flex, Image, MediaQuery, Stack, Text } from '@mantine/core';
import { Input, Link } from '~/components';
import icxIcon from '~/images/icx-inline-logo.svg';
import { useFormik } from 'formik';
import { useLoginMutation } from '../../api/useLoginMutation';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';
import { checkIsPhoneNumber, parseToPhoneNumber } from '~/utils/format';
import { LoginFormSchema } from '../../schemas/LoginFormSchema';

interface LoginFormValues {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSubmitSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmitSuccess }) => {
  const { mutateAsync: login, isLoading } = useLoginMutation();
  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    errors: formErrors,
    values,
    isValid,
  } = useFormik<LoginFormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ password, username }) => {
      try {
        const parsedUsername = (await checkIsPhoneNumber(username))
          ? parseToPhoneNumber(username)
          : username;

        await login({
          username: parsedUsername,
          password,
        });
        onSubmitSuccess();
      } catch (e) {
        const err = e as AxiosError<{ errors: string[] }>;
        const errors = err.response?.data?.errors;

        if (errors) {
          return notifications.show({
            message: errors.join(' '),
            color: 'red',
            title: 'Login failed',
          });
        }
      }
    },
    validationSchema: LoginFormSchema,
    isInitialValid: false,
    validateOnChange: true,
  });

  return (
    <>
      <MediaQuery smallerThan="md" styles={{ flex: 1 }}>
        <Stack>
          <Stack sx={{ flex: 1 }}>
            <Flex>
              <Text weight="bold" size="24px">
                Welcome to
              </Text>
              <Image src={icxIcon} maw="70px" ml="md" />
            </Flex>

            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  error={formErrors.username}
                  label="Nomor HP atau Email"
                  value={values.username}
                  name="username"
                  placeholder="Masukkan Nomor HP atau Email"
                  onChange={handleChange}
                />
                <Input
                  error={formErrors.password}
                  label="Kata Sandi"
                  value={values.password}
                  name="password"
                  placeholder="Masukkan Kata Sandi"
                  type="password"
                  onChange={handleChange}
                />
                <Button
                  disabled={isLoading || isSubmitting || !isValid}
                  type="submit"
                  display="none"></Button>
              </Stack>
            </form>

            <MediaQuery smallerThan="md" styles={{ textAlign: 'right' }}>
              <Box mt="sm">
                <Link to="/forgot-password">Lupa kata sandi</Link>
              </Box>
            </MediaQuery>
          </Stack>

          <Box sx={{ textAlign: 'center' }} mt="16px">
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Button
                disabled={isLoading || isSubmitting || !isValid}
                onClick={() => handleSubmit()}
                radius="xl"
                fullWidth>
                Log in
              </Button>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
              <Button
                disabled={isLoading || isSubmitting || !isValid}
                onClick={() => handleSubmit()}
                radius="xl"
                fullWidth
                size="lg">
                Log in
              </Button>
            </MediaQuery>

            <Text mt="md">
              Belum punya akun? <Link to="/register">Daftar</Link>
            </Text>
          </Box>
        </Stack>
      </MediaQuery>
    </>
  );
};
