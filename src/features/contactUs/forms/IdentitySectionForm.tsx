import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsSectionsProps, Identity, SectionsFormProps } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { IdentitySectionFormSchema } from '../schema/IdentitySectionFormSchema';
import { useContactUsStore } from '../stores';
import { ContactUsContainer } from '../components/ContactUsContainer';

const IdentitySection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<Identity>();

  const buttonDisabled = errors.fullName || errors.email || errors.phoneNumber ? true : false;

  return (
    <ContactUsContainer
      title="Personal Information"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="fullName"
        value={values.fullName}
        label="Full Name"
        onChange={handleChange}
        error={errors.fullName && touched.fullName ? errors.fullName : ''}
        onBlur={handleBlur}
      />
      <Input
        name="email"
        value={values.email}
        label="Email Address"
        onChange={handleChange}
        error={errors.email && touched.email ? errors.email : ''}
        onBlur={handleBlur}
      />
      <Input
        name="phoneNumber"
        value={values.phoneNumber}
        label="Phone Number"
        onChange={handleChange}
        error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const IdentitySectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
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
      validateOnMount={false}
      validationSchema={IdentitySectionFormSchema}
      onSubmit={handleSubmit}>
      <IdentitySection goBack={goBack} />
    </Formik>
  );
};
