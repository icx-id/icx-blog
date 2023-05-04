import { Group, Radio } from '@mantine/core';
import React from 'react';
import { Input } from '~/components/Core/Input';
import { KycFormContainer } from './KycFormContainer';
import { useFormikContext } from 'formik';
import { KycFormProps } from '../types';

interface KycFormIdentityProps {
  goBack: () => void;
  onSubmit: () => void;
}

export const KycFormIdentity: React.FC<KycFormIdentityProps> = ({ goBack, onSubmit }) => {
  const { handleChange } = useFormikContext<KycFormProps>();
  return (
    <KycFormContainer
      withBreadcrumbs
      title="Pastikan data yang terisi benar dan sesuai KTP"
      currentStep="2"
      totalStep="5"
      goBack={goBack}
      onSubmit={onSubmit}>
      <Input name="fullName" value="" label="Nama Lengkap" type="text" />
      <Input name="nik" value="" label="NIK" type="text" />
      <Input name="dateOfBirth" value="" label="Tanggal & tahun lahir" type="date" />
      <Input name="birthPlace" value="" label="Tempat Lahir" type="text" />
      <Radio.Group name="gender" label="Jenis Kelamin">
        <Group mt="xs">
          <Radio value="react" label="Laki-laki" />
          <Radio value="vue" label="Perempuan" />
        </Group>
      </Radio.Group>
    </KycFormContainer>
  );
};
