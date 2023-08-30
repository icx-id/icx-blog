import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsFormContainer } from '../components/ContactUsFormContainer';
import { Arrange, ContactUsSummary, PreferedLanguage } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../stores';
import { Flex, Radio } from '@mantine/core';
import { ContactUsFormSummarySchema } from '../schema/SummarySectionFormSchema';

interface SummarySectionProps {
  goBack: () => void;
}

const SummarySection: React.FC<SummarySectionProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, setFieldValue, handleSubmit } =
    useFormikContext<ContactUsSummary>();

  const buttonDisabled =
    errors.expertise || errors.arrange || errors.preferedLanguage ? true : false;

  return (
    <ContactUsFormContainer
      title="Terakhir"
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}
      withBackButton
      goBack={goBack}>
      <Input
        name="expertise"
        value={values.expertise}
        label="Tell us more about your interests or expertise:"
        onChange={handleChange}
        error={errors.expertise && touched.expertise ? errors.expertise : ''}
        onBlur={handleBlur}
      />
      <Radio.Group
        name="arrange"
        label="I'd like to arrange a:"
        value={values.arrange}
        error={errors.arrange}
        onChange={e => setFieldValue('arrange', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value={Arrange.CALL} label="Call" />
          <Radio value={Arrange.ONLINE_MEETING} label="Online Meering" />
          <Radio value={Arrange.OFFICE_VISIT} label="Office Visit" />
        </Flex>
      </Radio.Group>
      <Radio.Group
        name="preferedLanguage"
        label="Prefered Language"
        value={values.preferedLanguage}
        error={errors.preferedLanguage}
        onChange={e => setFieldValue('preferedLanguage', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value={PreferedLanguage.BAHASA} label="Bahasa" />
          <Radio value={PreferedLanguage.ENGLISH} label="English" />
        </Flex>
      </Radio.Group>
    </ContactUsFormContainer>
  );
};

interface ContactUsSummaryFormProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}

export const ContactUsSummaryForm: React.FC<ContactUsSummaryFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { contactUsSummary, onSummarySuccess } = useContactUsStore();

  const handleSubmit = (values: ContactUsSummary) => {
    onSummarySuccess(values);
    onSubmitSuccess();
    goBack();
  };

  return (
    <Formik<ContactUsSummary>
      initialValues={{
        expertise: contactUsSummary?.expertise || '',
        arrange: contactUsSummary?.arrange || Arrange.CALL,
        preferedLanguage: contactUsSummary?.preferedLanguage || PreferedLanguage.BAHASA,
      }}
      validateOnMount={true}
      validationSchema={ContactUsFormSummarySchema}
      onSubmit={handleSubmit}>
      <SummarySection goBack={goBack} />
    </Formik>
  );
};
