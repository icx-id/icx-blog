import React from 'react';
import {
  ContactUsSectionsProps,
  FundraiserCompanyDescription,
  SectionsFormProps,
} from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { Textarea } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';
import { FundraiserCompanyDescriptionSectionFormSchema } from '../../schema/FundraiserSectionFormSchema';

const CompanyDescriptionSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<FundraiserCompanyDescription>();

  const buttonDisabled = errors.companyDescription ? true : false;

  return (
    <ContactUsContainer
      title="Company Description"
      bannerText="Fundraiser"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Textarea
        name="companyDescription"
        minRows={10}
        placeholder="Write here"
        value={values.companyDescription}
        onChange={handleChange}
        error={
          errors.companyDescription && touched.companyDescription ? errors.companyDescription : ''
        }
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const CompanyDescriptionSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundraiserCompanyDescription, onFundraiserCompanyDescriptionSectionSuccess } =
    useContactUsStore();

  const handleSubmit = (values: FundraiserCompanyDescription) => {
    onFundraiserCompanyDescriptionSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundraiserCompanyDescription>
      initialValues={{
        companyDescription: fundraiserCompanyDescription?.companyDescription || '',
      }}
      validateOnMount={false}
      validationSchema={FundraiserCompanyDescriptionSectionFormSchema}
      onSubmit={handleSubmit}>
      <CompanyDescriptionSection goBack={goBack} />
    </Formik>
  );
};
