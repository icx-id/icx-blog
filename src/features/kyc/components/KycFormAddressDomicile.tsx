import React, { useState } from 'react';
import { Input } from '~/components/Core/Input';
import { KycFormContainer } from './KycFormContainer';
import { Select } from '~/components/core/Select';
import { useGetProvinces } from '../api/useGetProvinces';
import { useFormikContext } from 'formik';
import { KycFormProps } from '../types';
import { useGetCities } from '../api/useGetCities';
import { useGetDistricts } from '../api/useGetDistricts';
import { useGetSubDistricts } from '../api/useGetSubDistricts';
import { useGetPostalCodes } from '../api/useGetPostalCode';
import { Switch, rem } from '@mantine/core';

interface KycFormAddressDomicileProps {
  onSubmit: () => void;
  goBack: () => void;
}

export const KycFormAddressDomicile: React.FC<KycFormAddressDomicileProps> = ({
  onSubmit,
  goBack,
}) => {
  const [formDisabled, setFormDisabled] = useState<boolean>(true);
  const { handleChange, values, setFieldValue } = useFormikContext<KycFormProps>();
  const { data: provinces } = useGetProvinces();
  const { data: cities } = useGetCities(values.provinceAddress);
  const { data: districts } = useGetDistricts(values.cityAddress);
  const { data: subDistricts } = useGetSubDistricts(values.districtAddress);
  const { data: postalCodes } = useGetPostalCodes(values.subDistrictAddress);

  return (
    <KycFormContainer
      withBreadcrumbs
      title="Silahkan isi alamat sesuai KTP"
      onSubmit={onSubmit}
      goBack={goBack}
      currentStep="4"
      totalStep="5">
      <Switch
        checked={formDisabled}
        onChange={event => setFormDisabled(event.currentTarget.checked)}
        label="Alamat domisili sama dengan alamat di KTP"
        labelPosition="left"
        mb={rem(15)}
        w={rem(270)}
      />
      <Input
        name="domicileAddress"
        onChange={handleChange}
        value={values.domicileAddress}
        label="Alamat Lengkap"
        type="text"
        disabled={formDisabled}
      />
      <Select
        label="Provinsi"
        value={values.domicileProvince}
        onChange={e => setFieldValue('domicileProvince', e)}
        searchable
        nothingFound="Provinsi tidak ditemukan"
        data={provinces?.map(province => province.provinceName) || []}
        disabled={formDisabled}
      />
      <Select
        label="Kota"
        value={values.domicileTown}
        onChange={e => setFieldValue('domicileTown', e)}
        searchable
        nothingFound="Kota tidak ditemukan"
        data={cities?.map(city => city.city) || []}
        disabled={formDisabled}
      />
      <Select
        label="Kecamatan"
        value={values.domicileDistrict}
        onChange={e => setFieldValue('domicileDistrict', e)}
        searchable
        nothingFound="Kecamatan tidak ditemukan"
        data={districts?.map(district => district.district) || []}
        disabled={formDisabled}
      />
      <Select
        label="Kelurahan"
        value={values.domicileSubdistrict}
        onChange={e => setFieldValue('domicileSubdistrict', e)}
        searchable
        nothingFound="Kelurahan tidak ditemukan"
        data={subDistricts?.map(subDistrict => subDistrict.subDistrict) || []}
        disabled={formDisabled}
      />
      <Select
        label="Kode Pos"
        value={values.domicilePostalCode}
        onChange={e => setFieldValue('domicilePostalCode', e)}
        searchable
        nothingFound="Kode Pos tidak ditemukan"
        data={postalCodes?.map(postalCode => postalCode.postalCode) || []}
        disabled={formDisabled}
      />
    </KycFormContainer>
  );
};
