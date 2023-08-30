import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsFormContainer } from '../components/ContactUsFormContainer';
import { Identity } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { IdentitySectionFormSchema } from '../schema/IdentitySectionFormSchema';
import { useContactUsStore } from '../stores';

const IdentitySection: React.FC = () => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<Identity>();

  const buttonDisabled = errors.fullName || errors.email || errors.phoneNumber ? true : false;

  return (
    <ContactUsFormContainer
      title="Berikan Informasi Pribadi anda untuk tujuan identifikasi"
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
        name="email"
        value={values.email}
        label="Email"
        onChange={handleChange}
        error={errors.email && touched.email ? errors.email : ''}
        onBlur={handleBlur}
      />
      <Input
        name="phoneNumber"
        value={values.phoneNumber}
        label="No. Telefon"
        onChange={handleChange}
        error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
        onBlur={handleBlur}
      />
    </ContactUsFormContainer>
  );
};

interface IdentitySectionFormProps {
  onSubmitSuccess: () => void;
}

export const IdentitySectionForm: React.FC<IdentitySectionFormProps> = ({ onSubmitSuccess }) => {
  const { identity, onIdentitySuccess } = useContactUsStore();

  const handleSubmit = (values: Identity) => {
    onIdentitySuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<Identity>
      initialValues={{
        fullName: identity?.fullName || '',
        email: identity?.email || '',
        phoneNumber: identity?.phoneNumber || '',
      }}
      validateOnMount={true}
      validationSchema={IdentitySectionFormSchema}
      onSubmit={handleSubmit}>
      <IdentitySection />
    </Formik>
  );
};
