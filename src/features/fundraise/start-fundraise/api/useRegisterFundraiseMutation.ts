import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { CompanyInformation, PersonalInformation } from '../../types';

export interface RegisterFundraiseArgs extends PersonalInformation, CompanyInformation {
  pitchdeckFile: File;
  identityPhoto: File;
}

interface RegisterFundraiseResponse {
  status: string;
}

export const useRegisterFundraiseMutation = (
  options?: UseMutationOptions<string, unknown, RegisterFundraiseArgs>,
) => {
  const { axios, api } = useApiClient();

  return useMutation(
    async ({
      fullName,
      nik,
      roleInCompany,
      phoneNumber,
      companyAddress,
      companyEmail,
      companyName,
      companyPhoneNumber,
      companyWebsite,
      pitchdeckFile,
      identityPhoto,
      brandBusinessEntity,
    }: RegisterFundraiseArgs) => {
      const fundraiseData = new FormData();

      fundraiseData.append('fullName', fullName);
      fundraiseData.append('nik', nik);
      fundraiseData.append('roleInCompany', roleInCompany);
      fundraiseData.append('phoneNumber', phoneNumber);
      fundraiseData.append('companyAddress', companyAddress);
      fundraiseData.append('companyEmail', companyEmail);
      fundraiseData.append('companyName', companyName);
      fundraiseData.append('companyPhoneNumber', companyPhoneNumber);
      fundraiseData.append('companyWebsite', companyWebsite);
      fundraiseData.append('brandBusinessEntity', brandBusinessEntity);
      fundraiseData.append('identityPhoto', identityPhoto);
      fundraiseData.append('pitchdeckFile', pitchdeckFile);

      const { status } = await api<RegisterFundraiseResponse>(
        axios.post('fundraise', fundraiseData, {
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
