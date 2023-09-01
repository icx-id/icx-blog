import React from 'react';
import { Input } from '~/components/core/Input';
import { FormContainer } from './FormContainer';
import { Formik, useFormikContext } from 'formik';
import { PersonalInformation } from '../../types';
import { useFundraiseStore } from '../../stores';
import { PersonalInformationSchema } from '../schema/PersonalInformationSchema';

const PersonalInformationFormInner: React.FC = () => {
  const { values, handleChange, errors, handleBlur, touched, handleSubmit } =
    useFormikContext<PersonalInformation>();

  const buttonDisabled =
    errors.fullName || errors.nik || errors.phoneNumber || errors.roleInCompany ? true : false;

  return (
    <FormContainer
      withBreadcrumbs
      title="Berikan informasi pribadi Anda untuk tujuan identifikasi"
      currentStep="1"
      totalStep="4"
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
        name="roleInCompany"
        value={values.roleInCompany}
        label="Jabatan di Perusahaan"
        onChange={handleChange}
        error={errors.roleInCompany && touched.roleInCompany ? errors.roleInCompany : ''}
        onBlur={handleBlur}
      />
      <Input
        name="phoneNumber"
        value={values.phoneNumber}
        label="Nomor Telepon"
        onChange={handleChange}
        error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
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
    </FormContainer>
  );
};

interface SectionPersonalInformationProps {
  onSubmitSuccess: () => void;
}

export const SectionPersonalInformation: React.FC<SectionPersonalInformationProps> = ({
  onSubmitSuccess,
}) => {
  const { personalInformation, onPersonalInformationSuccess } = useFundraiseStore();

  const handleSubmit = (values: PersonalInformation) => {
    onPersonalInformationSuccess({ personalInformation: values });
    onSubmitSuccess();
  };

  return (
    <Formik<PersonalInformation>
      initialValues={{
        fullName: personalInformation?.fullName || '',
        nik: personalInformation?.nik || '',
        roleInCompany: personalInformation?.roleInCompany || '',
        phoneNumber: personalInformation?.phoneNumber || '',
      }}
      validateOnMount={true}
      validationSchema={PersonalInformationSchema}
      onSubmit={handleSubmit}>
      <PersonalInformationFormInner />
    </Formik>
  );
};
