import { Select } from '@mantine/core';
import React from 'react';
import { Input } from '~/components/Core/Input';
import { KycFormContainer } from './KycFormContainer';

interface KycFormAddressProps {
  onSubmit: () => void;
  goBack: () => void;
}

export const KycFormAddress: React.FC<KycFormAddressProps> = ({ onSubmit, goBack }) => {
  return (
    <KycFormContainer
      title="Silahkan isi alamat sesuai KTP"
      onSubmit={onSubmit}
      goBack={goBack}
      currentStep="4"
      totalStep="5">
      <Input name="address" value="" label="Alamat Lengkap" type="text" />
      <Select
        label="Provinsi"
        searchable
        nothingFound="Provinsi tidak ditemukan"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        variant="unstyled"
        style={{ borderBottom: '1px solid #CED4DA' }}
      />
      <Select
        label="Kota"
        searchable
        nothingFound="Kota tidak ditemukan"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        variant="unstyled"
        style={{ borderBottom: '1px solid #CED4DA' }}
      />
      <Select
        label="Kecamatan"
        searchable
        nothingFound="Kecamatan tidak ditemukan"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        variant="unstyled"
        style={{ borderBottom: '1px solid #CED4DA' }}
      />
      <Select
        label="Kelurahan"
        searchable
        nothingFound="Kelurahan tidak ditemukan"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        variant="unstyled"
        style={{ borderBottom: '1px solid #CED4DA' }}
      />
      <Select
        label="Kode Pos"
        searchable
        nothingFound="Kode Pos tidak ditemukan"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        variant="unstyled"
        style={{ borderBottom: '1px solid #CED4DA' }}
      />
    </KycFormContainer>
  );
};
