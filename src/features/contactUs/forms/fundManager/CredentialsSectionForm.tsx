import { Input } from '~/components/core/Input';
import { Button, Flex } from '@mantine/core';
import React, { useState } from 'react';
import { ContactUsSectionsProps, FundManagerCredentials, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { FundManagerCredentialsSectionFormSchema } from '../../schema/FundManagerSectionFormSchema';
import { ContactUsContainer } from '../../components/ContactUsContainer';

const CredentialsSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const [otherLinkNumber, setOtherLinkNumber] = useState(1);
  const { handleChange, values, errors, touched, handleBlur, handleSubmit, getFieldProps } =
    useFormikContext<FundManagerCredentials>();

  const totalOtherLink = [];

  for (let i = 0; i < otherLinkNumber; i++) {
    totalOtherLink.push(<Input label="Other Link" {...getFieldProps('otherLink' + i)} />);
  }

  const buttonDisabled = errors.credential ? true : false;

  return (
    <ContactUsContainer
      title="Insert links to your LinkedIn or credentials"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="credential"
        value={values.credential}
        label="LinkedIn"
        onChange={handleChange}
        error={errors.credential && touched.credential ? errors.credential : ''}
        onBlur={handleBlur}
      />
      {totalOtherLink.map(val => {
        return val;
      })}
      <Flex w="100%" pt={30}>
        <Button
          w="100%"
          radius="lg"
          variant="outline"
          onClick={() => setOtherLinkNumber(otherLinkNumber + 1)}>
          Add more link
        </Button>
      </Flex>
    </ContactUsContainer>
  );
};

export const CredentialsSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundManagerCredentials, onFundManagerCredentialsSuccess } = useContactUsStore();

  const handleSubmit = (values: FundManagerCredentials) => {
    onFundManagerCredentialsSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundManagerCredentials>
      initialValues={{
        credential: fundManagerCredentials?.credential || '',
      }}
      validateOnMount={false}
      validationSchema={FundManagerCredentialsSectionFormSchema}
      onSubmit={handleSubmit}>
      <CredentialsSection goBack={goBack} />
    </Formik>
  );
};
