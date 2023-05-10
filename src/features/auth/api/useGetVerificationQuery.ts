import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface IVerificationResponse {
  type: string;
  verified: boolean;
}

export const useGetVerificationQuery = (
  options?: UseQueryOptions<unknown, unknown, IVerificationResponse[], string[]>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['verifications'],
    async () => {
      const verifications = await api<IVerificationResponse[]>(axiosWithToken.get('verifications'));
      return verifications;
    },
    options,
  );
};
