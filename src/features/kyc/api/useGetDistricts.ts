import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface IDistrictResponse {
  subDistrict: string;
  district: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export const useGetDistricts = (city: string) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['districts', city],
    async () => {
      const districts = await api<IDistrictResponse[]>(
        axiosWithToken.get(`addresses/districts?city=${city}`),
      );
      return districts;
    },
    {
      enabled: !!city,
    },
  );
};
