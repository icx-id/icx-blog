import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface IProvinceResponse {
  provinceCode: string;
  provinceName: string;
  provinceNameEn: string;
}

export const useGetProvinces = () => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(['provinces'], async () => {
    const provinces = await api<IProvinceResponse[]>(axiosWithToken.get('addresses/provinces'));
    return provinces;
  });
};
