import React, { useState } from 'react';
import { Input } from '~/components/core/Input';
import { KycFormContainer } from './KycFormContainer';
import { Select } from '~/components/core/Select';
import { useGetProvinces } from '../api/useGetProvinces';
import { Formik, useFormikContext } from 'formik';
import { AddressDomicile } from '../types';
import { useGetCities } from '../api/useGetCities';
import { useGetDistricts } from '../api/useGetDistricts';
import { useGetSubDistricts } from '../api/useGetSubDistricts';
import { useGetPostalCodes } from '../api/useGetPostalCode';
import { Switch, rem } from '@mantine/core';
import { useKycStore } from '../stores';
import { KycFormDomicileAddressSchema } from '../schema/KycFormDomicileAddressSchema';

interface KycFormAddressDomicileInnerProps {
  goBack: () => void;
}

const KycFormAddressDomicileInner: React.FC<KycFormAddressDomicileInnerProps> = ({ goBack }) => {
  const [formDisabled, setFormDisabled] = useState<boolean>(true);

  const { handleChange, values, setFieldValue, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<AddressDomicile>();

  const { data: provinces } = useGetProvinces();
  const { data: cities } = useGetCities(values.domicileProvince);
  const { data: districts } = useGetDistricts(values.domicileTown);
  const { data: subDistricts } = useGetSubDistricts(values.domicileDistrict);
  const { data: postalCodes } = useGetPostalCodes(values.domicileSubdistrict);

  console.log(errors);

  const buttonDisabled =
    errors.domicileAddress ||
    errors.domicileProvince ||
    errors.domicileTown ||
    errors.domicileDistrict ||
    errors.domicileSubdistrict ||
    errors.domicilePostalCode
      ? true
      : false;

  return (
    <KycFormContainer
      withBreadcrumbs
      title="Silahkan isi alamat sesuai KTP"
      onSubmit={handleSubmit}
      goBack={goBack}
      buttonDisabled={buttonDisabled}
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
        error={errors.domicileAddress && touched.domicileAddress ? errors.domicileAddress : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Provinsi"
        value={values.domicileProvince}
        onChange={e => setFieldValue('domicileProvince', e)}
        searchable
        nothingFound="Provinsi tidak ditemukan"
        data={provinces?.map(province => province.provinceName) || []}
        disabled={formDisabled}
        error={errors.domicileProvince && touched.domicileProvince ? errors.domicileProvince : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Kota"
        value={values.domicileTown}
        onChange={e => setFieldValue('domicileTown', e)}
        searchable
        nothingFound="Kota tidak ditemukan"
        data={cities?.map(city => city.city) || []}
        disabled={formDisabled}
        error={errors.domicileTown && touched.domicileTown ? errors.domicileTown : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Kecamatan"
        value={values.domicileDistrict}
        onChange={e => setFieldValue('domicileDistrict', e)}
        searchable
        nothingFound="Kecamatan tidak ditemukan"
        data={districts?.map(district => district.district) || []}
        disabled={formDisabled}
        error={errors.domicileDistrict && touched.domicileDistrict ? errors.domicileDistrict : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Kelurahan"
        value={values.domicileSubdistrict}
        onChange={e => setFieldValue('domicileSubdistrict', e)}
        searchable
        nothingFound="Kelurahan tidak ditemukan"
        data={subDistricts?.map(subDistrict => subDistrict.subDistrict) || []}
        disabled={formDisabled}
        error={
          errors.domicileSubdistrict && touched.domicileSubdistrict
            ? errors.domicileSubdistrict
            : ''
        }
        onBlur={handleBlur}
      />
      <Select
        label="Kode Pos"
        value={values.domicilePostalCode}
        onChange={e => setFieldValue('domicilePostalCode', e)}
        searchable
        nothingFound="Kode Pos tidak ditemukan"
        data={postalCodes?.map(postalCode => postalCode.postalCode) || []}
        disabled={formDisabled}
        error={
          errors.domicilePostalCode && touched.domicilePostalCode ? errors.domicilePostalCode : ''
        }
        onBlur={handleBlur}
      />
    </KycFormContainer>
  );
};

interface KycFormAddressDomicileProps extends KycFormAddressDomicileInnerProps {
  onSubmitSuccess: () => void;
}

export const KycFormAddressDomicile: React.FC<KycFormAddressDomicileProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { addressDomicile, onAddressDomicileSuccess } = useKycStore();

  const handleSubmit = (values: AddressDomicile) => {
    onAddressDomicileSuccess({
      addressDomicile: {
        domicileAddress: values.domicileAddress,
        domicileDistrict: values.domicileDistrict,
        domicileProvince: values.domicileProvince,
        domicileTown: values.domicileTown,
        domicileSubdistrict: values.domicileSubdistrict,
        domicilePostalCode: values.domicilePostalCode,
      },
    });
    onSubmitSuccess();
  };
  return (
    <Formik<AddressDomicile>
      initialValues={{
        domicileAddress: addressDomicile?.domicileAddress || '',
        domicileProvince: addressDomicile?.domicileProvince || '',
        domicileTown: addressDomicile?.domicileTown || '',
        domicileDistrict: addressDomicile?.domicileDistrict || '',
        domicileSubdistrict: addressDomicile?.domicileSubdistrict || '',
        domicilePostalCode: addressDomicile?.domicilePostalCode || '',
      }}
      validationSchema={KycFormDomicileAddressSchema}
      validateOnMount={true}
      onSubmit={handleSubmit}>
      <KycFormAddressDomicileInner goBack={goBack} />
    </Formik>
  );
};
