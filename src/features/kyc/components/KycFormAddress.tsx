import React from 'react';
import { Input } from '~/components/core/Input';
import { KycFormContainer } from './KycFormContainer';
import { Select } from '~/components/core/Select';
import { useGetProvinces } from '../api/useGetProvinces';
import { Formik, useFormikContext } from 'formik';
import { AddressIdentity } from '../types';
import { useGetCities } from '../api/useGetCities';
import { useGetDistricts } from '../api/useGetDistricts';
import { useGetSubDistricts } from '../api/useGetSubDistricts';
import { useGetPostalCodes } from '../api/useGetPostalCode';
import { KycFormAddressSchema } from '../schema/KycFormAddressSchema';
import { useKycStore } from '../stores';

interface KycFormAddressInnerProps {
  goBack: () => void;
}

const KycFormAddressInner: React.FC<KycFormAddressInnerProps> = ({ goBack }) => {
  const { handleChange, values, setFieldValue, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<AddressIdentity>();

  const { data: provinces } = useGetProvinces();
  const { data: cities } = useGetCities(values.identityProvince);
  const { data: districts } = useGetDistricts(values.identityTown);
  const { data: subDistricts } = useGetSubDistricts(values.identityDistrict);
  const { data: postalCodes } = useGetPostalCodes(values.identitySubdistrict);

  const buttonDisabled =
    errors.identityAddress ||
    errors.identityProvince ||
    errors.identityTown ||
    errors.identityAddress ||
    errors.identitySubdistrict ||
    errors.identityPostalCode
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
      <Input
        name="identityAddress"
        onChange={handleChange}
        value={values.identityAddress}
        label="Alamat Lengkap"
        type="text"
        error={errors.identityAddress && touched.identityAddress ? errors.identityAddress : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Provinsi"
        value={values.identityProvince}
        onChange={e => setFieldValue('identityProvince', e)}
        searchable
        nothingFound="Provinsi tidak ditemukan"
        data={provinces?.map(province => province.provinceName) || []}
        error={errors.identityProvince && touched.identityProvince ? errors.identityProvince : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Kota"
        value={values.identityTown}
        onChange={e => setFieldValue('identityTown', e)}
        searchable
        nothingFound="Kota tidak ditemukan"
        data={cities?.map(city => city.city) || []}
        error={errors.identityTown && touched.identityTown ? errors.identityTown : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Kecamatan"
        value={values.identityDistrict}
        onChange={e => setFieldValue('identityDistrict', e)}
        searchable
        nothingFound="Kecamatan tidak ditemukan"
        data={districts?.map(district => district.district) || []}
        error={errors.identityDistrict && touched.identityDistrict ? errors.identityDistrict : ''}
        onBlur={handleBlur}
      />
      <Select
        label="Kelurahan"
        value={values.identitySubdistrict}
        onChange={e => setFieldValue('identitySubdistrict', e)}
        searchable
        nothingFound="Kelurahan tidak ditemukan"
        data={subDistricts?.map(subDistrict => subDistrict.subDistrict) || []}
        error={
          errors.identitySubdistrict && touched.identitySubdistrict
            ? errors.identitySubdistrict
            : ''
        }
        onBlur={handleBlur}
      />
      <Select
        label="Kode Pos"
        value={values.identityPostalCode}
        onChange={e => setFieldValue('identityPostalCode', e)}
        searchable
        nothingFound="Kode Pos tidak ditemukan"
        data={postalCodes?.map(postalCode => postalCode.postalCode) || []}
        error={
          errors.identityPostalCode && touched.identityPostalCode ? errors.identityPostalCode : ''
        }
        onBlur={handleBlur}
      />
    </KycFormContainer>
  );
};

interface KycFormAddressProps extends KycFormAddressInnerProps {
  onSubmitSuccess: () => void;
}

export const KycFormAddress: React.FC<KycFormAddressProps> = ({ onSubmitSuccess, goBack }) => {
  const { onAddressIdentitySuccess, onAddressDomicileSuccess, addressIdentity } = useKycStore();

  console.log(addressIdentity);

  const handleSubmit = (values: AddressIdentity) => {
    onAddressIdentitySuccess({
      addressIdentity: {
        identityAddress: values.identityAddress,
        identityDistrict: values.identityDistrict,
        identityProvince: values.identityProvince,
        identityTown: values.identityTown,
        identitySubdistrict: values.identitySubdistrict,
        identityPostalCode: values.identityPostalCode,
      },
    });
    onAddressDomicileSuccess({
      addressDomicile: {
        domicileAddress: values.identityAddress,
        domicileDistrict: values.identityDistrict,
        domicileProvince: values.identityProvince,
        domicileTown: values.identityTown,
        domicileSubdistrict: values.identitySubdistrict,
        domicilePostalCode: values.identityPostalCode,
      },
    });
    onSubmitSuccess();
  };
  return (
    <Formik<AddressIdentity>
      initialValues={{
        identityAddress: addressIdentity?.identityAddress || '',
        identityProvince: addressIdentity?.identityProvince || '',
        identityTown: addressIdentity?.identityTown || '',
        identityDistrict: addressIdentity?.identityDistrict || '',
        identitySubdistrict: addressIdentity?.identitySubdistrict || '',
        identityPostalCode: addressIdentity?.identityPostalCode || '',
      }}
      validateOnMount={true}
      validationSchema={KycFormAddressSchema}
      onSubmit={handleSubmit}>
      <KycFormAddressInner goBack={goBack} />
    </Formik>
  );
};
