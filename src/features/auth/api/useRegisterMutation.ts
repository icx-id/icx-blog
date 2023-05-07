import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AuthResponse } from '../types';
import { useStore } from '~/stores';
import { useApiClient } from '~/providers/ApiClientProvider';

interface RegisterArgs {
  email: string;
  password: string;
  phoneNumber: string;
  referralCode?: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  phoneNumber: string;
  referredBy?: string;
}

export const useRegisterMutationErrors = {
  EMAIL_EXISTS: 'this email already exists',
  PHONE_EXISTS: 'this phone number already exists',
};

export const useRegisterMutation = (options?: UseMutationOptions<void, unknown, RegisterArgs>) => {
  const { onAuthSuccess } = useStore();
  const { axios, api } = useApiClient();

  return useMutation(async ({ email, password, phoneNumber, referralCode }: RegisterArgs) => {
    let payload: RegisterPayload = {
      email,
      phoneNumber,
      password,
    };

    if (referralCode) {
      payload.referredBy = referralCode;
    }

    const { access_token, refresh_token, user } = await api<AuthResponse>(
      axios.post('auth/register', payload),
    );
    onAuthSuccess({
      accessToken: access_token,
      refreshToken: refresh_token,
      user,
    });
  }, options);
};
