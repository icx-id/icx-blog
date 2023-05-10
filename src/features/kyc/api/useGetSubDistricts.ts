import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface ISubDistrictResponse {
  subDistrict: string;
  district: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export const useGetSubDistricts = (district: string) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['sub-districts', district],
    async () => {
      const subDistricts = await api<ISubDistrictResponse[]>(
        axiosWithToken.get(`addresses/sub-districts?district=${district}`),
      );
      return subDistricts;
    },
    {
      enabled: !!district,
    },
  );
};
