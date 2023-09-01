import React from 'react';
import { ContactUsSectionsProps, FundManagerFundsManaged, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { Textarea } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';
import { useContactUsStore } from '../../stores';
import { FundManagerFundsManagedSectionFormSchema } from '../../schema/FundManagerSectionFormSchema';

const FundsManagedSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormikContext<FundManagerFundsManaged>();

  const buttonDisabled = errors.fundsManaged ? true : false;

  return (
    <ContactUsContainer
      title="Previous Funds Managed (size in $)"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Textarea
        name="fundsManaged"
        value={values.fundsManaged}
        minRows={10}
        onChange={handleChange}
        error={errors.fundsManaged && touched.fundsManaged ? errors.fundsManaged : ''}
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const FundsManagedSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundManagerFundsManage, onFundManagerFundsManagedSuccess } = useContactUsStore();

  const handleSubmit = (values: FundManagerFundsManaged) => {
    onFundManagerFundsManagedSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundManagerFundsManaged>
      initialValues={{
        fundsManaged: fundManagerFundsManage?.fundsManaged || '',
      }}
      validateOnMount={false}
      validationSchema={FundManagerFundsManagedSectionFormSchema}
      onSubmit={handleSubmit}>
      <FundsManagedSection goBack={goBack} />
    </Formik>
  );
};
