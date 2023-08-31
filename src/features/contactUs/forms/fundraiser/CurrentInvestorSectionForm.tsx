import React from 'react';
import { ContactUsSectionsProps, FundraiserCurrentInvestor, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { Textarea } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';
import { FundraisercurrentInvestorSectionFormSchema } from '../../schema/FundraiserSectionFormSchema';

const CurrentInvestorSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<FundraiserCurrentInvestor>();

  const buttonDisabled = errors.currentInvestor ? true : false;

  return (
    <ContactUsContainer
      title="List your current investors"
      bannerText="Fundraiser"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Textarea
        name="currentInvestor"
        minRows={10}
        placeholder="List your current or past investor"
        value={values.currentInvestor}
        onChange={handleChange}
        error={errors.currentInvestor && touched.currentInvestor ? errors.currentInvestor : ''}
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const CurrentInvestorSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundraiserCurrentInvestor, onFundraiserCurrentInvestorSectionSuccess } =
    useContactUsStore();

  const handleSubmit = (values: FundraiserCurrentInvestor) => {
    onFundraiserCurrentInvestorSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundraiserCurrentInvestor>
      initialValues={{
        currentInvestor: fundraiserCurrentInvestor?.currentInvestor || '',
      }}
      validateOnMount={false}
      validationSchema={FundraisercurrentInvestorSectionFormSchema}
      onSubmit={handleSubmit}>
      <CurrentInvestorSection goBack={goBack} />
    </Formik>
  );
};
