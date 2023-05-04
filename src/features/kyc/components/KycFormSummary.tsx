import React from 'react';
import { Input } from '~/components/Core/Input';
import { KycFormContainer } from './KycFormContainer';

interface KycSummaryProps {
  onSubmit: () => void;
  goBack: () => void;
}

export const KycFormSummary: React.FC<KycSummaryProps> = ({ onSubmit, goBack }) => {
  return (
    <KycFormContainer
      onSubmit={onSubmit}
      goBack={goBack}
      title="Apakah informasi yang tertera sudah sesuai?">
      <Input name="fullName" value="" label="Nama Lengkap" type="text" />
      <Input name="nik" value="" label="NIK" type="text" />
      <Input name="nik" value="" label="Tempat dan Tanggal Lahir" type="text" />
      <Input name="birthPlace" value="" label="Alamat KTP" type="text" />
      <Input name="birthPlace" value="" label="Alamat Domisili" type="text" />
    </KycFormContainer>
  );
};
