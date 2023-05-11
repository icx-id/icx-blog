import React from 'react';
import { Input } from '~/components/core/Input';
import { KycFormContainer } from './KycFormContainer';
import { useCreateKycData, useCreateKycDataError } from '../api/useCreateKycData';
import { useKycStore } from '../stores';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

interface KycSummaryProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}

export const KycFormSummary: React.FC<KycSummaryProps> = ({ onSubmitSuccess, goBack }) => {
  const { mutateAsync: createKycData } = useCreateKycData();
  const { identityInformation, identityPhoto, identitySelfie, addressDomicile, addressIdentity } =
    useKycStore();

  const handleSubmitKyc = async () => {
    try {
      if (
        identityPhoto &&
        identitySelfie &&
        identityInformation &&
        addressDomicile &&
        addressIdentity
      ) {
        const { fullName, nik, placeOfBirth, dateOfBirth, gender, religion } = identityInformation;
        const {
          domicileAddress,
          domicileProvince,
          domicileDistrict,
          domicilePostalCode,
          domicileSubdistrict,
          domicileTown,
        } = addressDomicile;

        const {
          identityAddress,
          identityProvince,
          identityTown,
          identityDistrict,
          identitySubdistrict,
          identityPostalCode,
        } = addressIdentity;

        await createKycData({
          fullName,
          nik,
          placeOfBirth,
          dateOfBirth: new Date(dateOfBirth),
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
        });
      }
      onSubmitSuccess();
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;
      if (errors?.includes(useCreateKycDataError.NIK_EXIST)) {
        return notifications.show({
          color: 'red',
          message: 'NIK sudah digunakan.',
        });
      }
    }
  };

  return (
    <KycFormContainer
      onSubmit={handleSubmitKyc}
      goBack={goBack}
      title="Apakah informasi yang tertera sudah sesuai?">
      <Input
        name="fullName"
        value={identityInformation?.fullName}
        label="Nama Lengkap"
        type="text"
      />
      <Input name="nik" value={identityInformation?.nik} label="NIK" type="text" />
      <Input
        name="placeOfBirth"
        value={`${identityInformation?.placeOfBirth}, ${identityInformation?.dateOfBirth}`}
        label="Tempat dan Tanggal Lahir"
        type="text"
      />
      <Input
        name="fullAddress"
        value={`${addressIdentity?.identityAddress}, ${addressIdentity?.identityProvince}, ${addressIdentity?.identityTown}, ${addressIdentity?.identityDistrict}, ${addressIdentity?.identitySubdistrict}, ${addressIdentity?.identityPostalCode}`}
        label="Alamat KTP"
        type="text"
      />
      <Input
        name="domicileAddress"
        value={`${addressDomicile?.domicileAddress}, ${addressDomicile?.domicileProvince}, ${addressDomicile?.domicileTown}, ${addressDomicile?.domicileDistrict}, ${addressDomicile?.domicileSubdistrict}, ${addressDomicile?.domicilePostalCode}`}
        label="Alamat Domisili"
        type="text"
      />
    </KycFormContainer>
  );
};
