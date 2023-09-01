import React from 'react';
import { ContactUsSectionsProps, FundraiseReason, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { Textarea } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';
import { FundraiseReasonSectionFormSchema } from '../../schema/FundraiserSectionFormSchema';

const ReasonSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<FundraiseReason>();

  const buttonDisabled = errors.fundraisingReason ? true : false;

  return (
    <ContactUsContainer
      title="Why are you fundraising?"
      bannerText="Fundraiser"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Textarea
        name="fundraisingReason"
        minRows={10}
        placeholder="Explain why you want to fundraising"
        value={values.fundraisingReason}
        onChange={handleChange}
        error={
          errors.fundraisingReason && touched.fundraisingReason ? errors.fundraisingReason : ''
        }
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const ReasonSectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { fundraiseReason, onFundraiseReasonSectionSuccess } = useContactUsStore();

  const handleSubmit = (values: FundraiseReason) => {
    onFundraiseReasonSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundraiseReason>
      initialValues={{
        fundraisingReason: fundraiseReason?.fundraisingReason || '',
      }}
      validateOnMount={false}
      validationSchema={FundraiseReasonSectionFormSchema}
      onSubmit={handleSubmit}>
      <ReasonSection goBack={goBack} />
    </Formik>
  );
};
