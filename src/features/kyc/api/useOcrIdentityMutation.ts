import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { parseISO } from 'date-fns';
import { useApiClient } from '~/providers/ApiClientProvider';
import { extractProvinceFromOcrResult } from '../utils/format';

export interface IOcrIdentity {
  identityPhoto: File | null;
}

interface IOcrIdentityResponse {
  identity: {
    imageQuality: {
      blur_score: string;
      blur: boolean;
      dark_score: string;
      dark: boolean;
    };
    state: string;
    city: string;
    nik: string;
    fullName: string;
    placeOfBirth: string;
    dateOfBirth: string;
    gender: 'male' | 'female';
    address: string;
    rtRw: string;
    administrativeVillage: string;
    district: string;
    religion: string;
  };
}

export const useOcrIdentityMutationErrors = {
  KTP_NOT_DETECTED: 'KTP not detected',
};

export const useOcrIdentityMutation = (
  options?: UseMutationOptions<unknown, unknown, IOcrIdentity>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useMutation(
    ['ocr-identity'],
    async ({ identityPhoto }: IOcrIdentity) => {
      const kycData: any = new FormData();

      kycData.append('identityPhoto', identityPhoto);

      const { identity } = await api<IOcrIdentityResponse>(
        axiosWithToken.post('kyc/ocr/identity', kycData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );

      return {
        ...identity,
        dateOfBirth: parseISO(identity.dateOfBirth),
        state: extractProvinceFromOcrResult(identity.state),
      };
    },
    options,
  );
};
