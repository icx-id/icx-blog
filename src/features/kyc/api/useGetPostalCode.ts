import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface IPostalCodeResponse {
  subDistrict: string;
  district: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export const useGetPostalCodes = (subDistrict: string) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['postal-codes', subDistrict],
    async () => {
      const postalCodes = await api<IPostalCodeResponse[]>(
        axiosWithToken.get(`addresses/postal-codes?sub-district=${subDistrict}`),
      );
      return postalCodes;
    },
    {
      enabled: !!subDistrict,
    },
  );
};
