import React from 'react';
import { ContactUsSectionsProps, SectionsFormProps, UserExpertise } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { Textarea } from '@mantine/core';
import { UserExpertiseFormSchema } from '../../schema/SummarySectionFormSchema';
import { ContactUsContainer } from '../../components/ContactUsContainer';

const UserExpertiseSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<UserExpertise>();

  const buttonDisabled = errors.interestOrExpertise ? true : false;

  return (
    <ContactUsContainer
      title="Tell us more about your interests or expertise:"
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}
      goBack={goBack}>
      <Textarea
        name="interestOrExpertise"
        value={values.interestOrExpertise}
        onChange={handleChange}
        minRows={10}
        error={
          errors.interestOrExpertise && touched.interestOrExpertise
            ? errors.interestOrExpertise
            : ''
        }
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const UserExpertiseSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { userExpertise, onUserExpertiseSuccess } = useContactUsStore();

  const handleSubmit = (values: UserExpertise) => {
    onUserExpertiseSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<UserExpertise>
      initialValues={{
        interestOrExpertise: userExpertise?.interestOrExpertise || '',
      }}
      validateOnMount={false}
      validationSchema={UserExpertiseFormSchema}
      onSubmit={handleSubmit}>
      <UserExpertiseSection goBack={goBack} />
    </Formik>
  );
};
