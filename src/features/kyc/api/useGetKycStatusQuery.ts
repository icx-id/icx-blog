import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { IKycSummary } from '../types';

interface IGetKycStatusResponse extends IKycSummary {}

export const useGetKycStatusQuery = (
  options?: UseQueryOptions<unknown, unknown, IGetKycStatusResponse[], string[]>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['kycSummaryStatus'],
    async () => {
      const kycStatus = await api<IGetKycStatusResponse[]>(axiosWithToken.get('kyc'));

      return kycStatus;
    },
    options,
  );
};
