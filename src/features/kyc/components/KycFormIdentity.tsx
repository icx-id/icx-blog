import { Group, Radio } from '@mantine/core';
import React from 'react';
import { Input } from '~/components/core/Input';
import { KycFormContainer } from './KycFormContainer';
import { Formik, useFormikContext } from 'formik';
import { IdentityInformation, KycFormProps } from '../types';
import { KycFormIdentitySchema } from '../schema/KycFormIdentitySchema';
import { useKycStore } from '../stores';

interface KycFormIdentityInnerProps {
  goBack: () => void;
}
const KycFormIdentityInner: React.FC<KycFormIdentityInnerProps> = ({ goBack }) => {
  const { values, handleChange, setFieldValue, errors, handleBlur, touched, handleSubmit } =
    useFormikContext<KycFormProps>();

  const buttonDisabled =
    errors.fullName || errors.nik || errors.dateOfBirth || errors.placeOfBirth || errors.gender
      ? true
      : false;

  return (
    <KycFormContainer
      withBreadcrumbs
      title="Pastikan data yang terisi benar dan sesuai KTP"
      currentStep="2"
      totalStep="5"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="fullName"
        value={values.fullName}
        label="Nama Lengkap"
        onChange={handleChange}
        error={errors.fullName && touched.fullName ? errors.fullName : ''}
        onBlur={handleBlur}
      />
      <Input
        name="nik"
        value={values.nik}
        label="NIK"
        onChange={handleChange}
        error={errors.nik && touched.nik ? errors.nik : ''}
        onBlur={handleBlur}
      />
      <Input
        name="dateOfBirth"
        value={values.dateOfBirth}
        label="Tanggal & tahun lahir"
        type="date"
        onChange={handleChange}
        error={errors.dateOfBirth && touched.dateOfBirth ? errors.dateOfBirth : ''}
        onBlur={handleBlur}
      />
      <Input
        name="placeOfBirth"
        value={values.placeOfBirth}
        label="Tempat Lahir"
        type="text"
        onChange={handleChange}
        error={errors.placeOfBirth && touched.placeOfBirth ? errors.placeOfBirth : ''}
        onBlur={handleBlur}
      />
      <Radio.Group
        name="gender"
        value={values.gender}
        label="Jenis Kelamin"
        error={errors.gender}
        onChange={e => setFieldValue('gender', e)}>
        <Group mt="xs">
          <Radio value="male" label="Laki-laki" />
          <Radio value="female" label="Perempuan" />
        </Group>
      </Radio.Group>
    </KycFormContainer>
  );
};

interface KycFormIdentityProps extends KycFormIdentityInnerProps {
  onSubmitSuccess: () => void;
}

export const KycFormIdentity: React.FC<KycFormIdentityProps> = ({ goBack, onSubmitSuccess }) => {
  const { identityInformation, onIdentitySuccess } = useKycStore();

  const handleSubmit = (values: IdentityInformation) => {
    onIdentitySuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<IdentityInformation>
      initialValues={{
        fullName: identityInformation?.fullName || '',
        placeOfBirth: identityInformation?.placeOfBirth || '',
        dateOfBirth: identityInformation?.dateOfBirth || '',
        nik: identityInformation?.nik || '',
        gender: identityInformation?.gender || 'male',
        religion: '',
      }}
      validateOnMount={true}
      validationSchema={KycFormIdentitySchema}
      onSubmit={handleSubmit}>
      <KycFormIdentityInner goBack={goBack} />
    </Formik>
  );
};
