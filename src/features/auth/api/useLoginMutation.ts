import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AuthResponse } from '../types';
import { useStore } from '~/stores';
import { useApiClient } from '~/providers/ApiClientProvider';

interface LoginArgs {
  username: string;
  password: string;
}

export const useLoginMutationErrors = {
  ACCOUNT_LOCKED: 'your account has been locked',
  INVALID_CREDENTIALS: 'email, phone number, or password is invalid',
};

export const useLoginMutation = (options?: UseMutationOptions<void, unknown, LoginArgs>) => {
  const { onAuthSuccess } = useStore();
  const { axios, api } = useApiClient();

  return useMutation(async ({ username, password }: LoginArgs) => {
    const { access_token, refresh_token, user } = await api<AuthResponse>(
      axios.post('auth/login', {
        username,
        password,
      }),
    );

    onAuthSuccess({
      accessToken: access_token,
      refreshToken: refresh_token,
      user,
    });
  }, options);
};
