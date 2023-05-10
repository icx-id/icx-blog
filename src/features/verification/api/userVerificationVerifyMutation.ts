import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { IVerificationVerify } from '../types';
import { useApiClient } from '~/providers/ApiClientProvider';
import { useStore } from '~/stores';

interface IVerificationVerifyArgs {
  type: 'email' | 'phone-number';
  verificationToken: string;
  otp?: string;
  purpose: 'auth' | 'forgot-password' | 'forgot-pin' | 'change-phone-number';
}

export const useVerifycationVerifyErrors = {
  EMAIL_VERIFIED: 'email have been verified',
  PHONE_NUMBER_VERIFIED: 'phone number have been verified',
  OTP_NOT_FOUND: 'OTP not found',
};

export const useVerificationVerifyMutation = (
  options?: UseMutationOptions<void, unknown, IVerificationVerifyArgs>,
) => {
  const { axios, api } = useApiClient();
  const { replaceAccessToken } = useStore();

  return useMutation(async ({ type, verificationToken, otp, purpose }: IVerificationVerifyArgs) => {
    const purposeToPost =
      purpose === 'forgot-pin' || purpose === 'forgot-password' || purpose === 'change-phone-number'
        ? 'forgot-password'
        : purpose;

    const { access_token } = await api<IVerificationVerify>(
      axios.post(
        `verifications/${type}/verify`,
        {
          otp,
          purpose: purposeToPost,
        },
        {
          headers: {
            Authorization: `Bearer ${verificationToken}`,
          },
        },
      ),
    );
    if (purpose === 'forgot-password' || purpose === 'auth') {
      replaceAccessToken({ accessToken: access_token });
    }
  }, options);
};
