import { Select, Switch, rem } from '@mantine/core';
import React from 'react';
import { Input } from '~/components/Core/Input';
import { KycFormContainer } from './KycFormContainer';

interface KycFormResidenceAddressProps {
  onSubmit: () => void;
  goBack: () => void;
}

export const KycFormResidenceAddress: React.FC<KycFormResidenceAddressProps> = ({
  onSubmit,
  goBack,
}) => {
  return (
    <KycFormContainer
      withBreadcrumbs
      title="Silahkan isi alamat domisili"
      currentStep="5"
      totalStep="5"
      onSubmit={onSubmit}
      goBack={goBack}>
      <Switch
        label="Alamat domisili sama dengan alamat di KTP"
        labelPosition="left"
        mb={rem(15)}
        w={rem(270)}
      />
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
