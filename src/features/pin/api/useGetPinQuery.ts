import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface IPinResponse {
  status: string;
}

export const useGetPinQuery = (options?: UseQueryOptions<string, unknown, string, string[]>) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['pin'],
    async () => {
      const { status } = await api<IPinResponse>(axiosWithToken.get('users/pin'));
      return status;
    },
    options,
  );
};
