import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface ICityResponse {
  subDistrict: string;
  district: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export const useGetCities = (provinceName: string | undefined) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['cities', provinceName],
    async () => {
      const cities = await api<ICityResponse[]>(
        axiosWithToken.get(`addresses/cities?province=${provinceName}`),
      );

      return cities;
    },
    {
      enabled: !!provinceName,
    },
  );
};
