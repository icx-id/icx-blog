import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { VerificationRequest } from '../types';
import { useApiClient } from '~/providers/ApiClientProvider';
import { useStore } from '~/stores';

interface IVerificationnRequestArgs {
  type: 'email' | 'phone-number';
}

export const useVerificationRequestMutation = (
  options?: UseMutationOptions<void, unknown, IVerificationnRequestArgs>,
) => {
  const { onRequestVerification } = useStore();
  const { axiosWithToken, api } = useApiClient();

  return useMutation(async ({ type }: IVerificationnRequestArgs) => {
    const { verificationToken } = await api<VerificationRequest>(
      axiosWithToken.post(`verifications/${type}`),
    );
    onRequestVerification({
      verificationToken,
    });
  }, options);
};
