import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export interface ICreateKycData {
  fullName: string;
  nik: string;
  placeOfBirth: string;
  dateOfBirth: Date;
  gender: string;
  religion: string;
  domicileAddress: string;
  domicileProvince: string;
  domicileTown: string;
  domicileDistrict: string;
  domicileSubdistrict: string;
  domicilePostalCode: string;
  identityAddress: string;
  identityProvince: string;
  identityTown: string;
  identityDistrict: string;
  identitySubdistrict: string;
  identityPostalCode: string;
  identityPhoto: File;
  identitySelfie: File;
}

interface ICreateKycDataResponse {
  status: string;
}

export const useCreateKycDataError = {
  NIK_EXIST: 'nik has already been taken',
};

export const useCreateKycData = (options?: UseMutationOptions<string, unknown, ICreateKycData>) => {
  const { axiosWithToken, api } = useApiClient();

  return useMutation(
    async ({
      fullName,
      nik,
      placeOfBirth,
      dateOfBirth,
      gender,
      religion,
      domicileAddress,
      domicileProvince,
      domicileTown,
      domicileDistrict,
      domicileSubdistrict,
      domicilePostalCode,
      identityAddress,
      identityProvince,
      identityTown,
      identityDistrict,
      identitySubdistrict,
      identityPostalCode,
      identityPhoto,
      identitySelfie,
    }: ICreateKycData) => {
      const kycData = new FormData();

      kycData.append('fullName', fullName);
      kycData.append('nik', nik);
      kycData.append('placeOfBirth', placeOfBirth);
      kycData.append('dateOfBirth', dateOfBirth.toISOString());
      kycData.append('gender', gender);
      kycData.append('religion', religion);
      kycData.append('domicileAddress', domicileAddress);
      kycData.append('domicileProvince', domicileProvince);
      kycData.append('domicileTown', domicileTown);
      kycData.append('domicileDistrict', domicileDistrict);
      kycData.append('domicileSubdistrict', domicileSubdistrict);
      kycData.append('domicilePostalCode', domicilePostalCode);
      kycData.append('identityAddress', identityAddress);
      kycData.append('identityProvince', identityProvince);
      kycData.append('identityTown', identityTown);
      kycData.append('identityDistrict', identityDistrict);
      kycData.append('identitySubdistrict', identitySubdistrict);
      kycData.append('identityPostalCode', identityPostalCode);
      kycData.append('identityPhoto', identityPhoto);
      kycData.append('identitySelfie', identitySelfie);

      const { status } = await api<ICreateKycDataResponse>(
        axiosWithToken.post('kyc/identity', kycData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );

      return status;
    },
    options,
  );
};
