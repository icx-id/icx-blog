import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsFormContainer } from '../components/ContactUsFormContainer';
import { Experience, FundManager, Purpose } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../stores';
import { Flex, Radio } from '@mantine/core';
import { FundManagerSectionFormSchema } from '../schema/FundManagerSectionFormSchema';

interface FundManagerSectionProps {
  goBack: () => void;
}

const FundManagerSection: React.FC<FundManagerSectionProps> = ({ goBack }) => {
  const { handleChange, values, errors, setFieldValue, touched, handleBlur, handleSubmit } =
    useFormikContext<FundManager>();

  const buttonDisabled =
    errors.experience || errors.fundsManaged || errors.credentials || errors.purpose ? true : false;

  return (
    <ContactUsFormContainer
      withBackButton
      title="Fund Manager"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Radio.Group
        label="Years of Experience:"
        name="experience"
        value={values.experience}
        error={errors.experience}
        onChange={e => setFieldValue('experience', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value={Experience.BETWEEN_1_TO_3Y} label={Experience.BETWEEN_1_TO_3Y} />
          <Radio value={Experience.BETWEEN_3_TO_5Y} label={Experience.BETWEEN_3_TO_5Y} />
          <Radio value={Experience.BETWEEN_5_TO_10Y} label={Experience.BETWEEN_5_TO_10Y} />
          <Radio value={Experience.ABOVE_10Y} label={Experience.ABOVE_10Y} />
        </Flex>
      </Radio.Group>
      <Input
        name="fundsManaged"
        value={values.fundsManaged}
        label="Funds Managed"
        onChange={handleChange}
        error={errors.fundsManaged && touched.fundsManaged ? errors.fundsManaged : ''}
        onBlur={handleBlur}
      />
      <Input
        name="credentials"
        value={values.credentials}
        label="Credentials"
        onChange={handleChange}
        error={errors.credentials && touched.credentials ? errors.credentials : ''}
        onBlur={handleBlur}
      />
      <Radio.Group
        label="You'd like to:"
        value={values.purpose}
        error={errors.purpose}
        onChange={e => setFieldValue('purpose', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value={Purpose.START} label={Purpose.START} />
          <Radio value={Purpose.INVEST} label={Purpose.INVEST} />
        </Flex>
      </Radio.Group>
    </ContactUsFormContainer>
  );
};

interface FundManagerSectionFormProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}

export const FundManagerSectionForm: React.FC<FundManagerSectionFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundManager, onFundManagerSectionSuccess } = useContactUsStore();

  const handleSubmit = (values: FundManager) => {
    onFundManagerSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundManager>
      initialValues={{
        experience: fundManager?.experience || Experience.BETWEEN_1_TO_3Y,
        fundsManaged: fundManager?.fundsManaged || '',
        credentials: fundManager?.credentials || '',
        purpose: fundManager?.purpose || Purpose.START,
      }}
      validateOnMount={true}
      validationSchema={FundManagerSectionFormSchema}
      onSubmit={handleSubmit}>
      <FundManagerSection goBack={goBack} />
    </Formik>
  );
};
