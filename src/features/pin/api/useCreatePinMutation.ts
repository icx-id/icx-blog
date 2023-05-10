import { useMutation } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface IPinResponse {
  status: string;
}

export const useCreatePinMutation = () => {
  const { axiosWithToken, api } = useApiClient();

  return useMutation(async (pin: string) => {
    await api<IPinResponse>(
      axiosWithToken.post('users/pin', {
        pin,
      }),
    );
  });
};
