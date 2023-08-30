import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsFormContainer } from '../components/ContactUsFormContainer';
import { Fundraiser, FundraisingRange } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../stores';
import { FileButton, Flex, Radio, Text, UnstyledButton, rem } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { FundraiserSectionFormSchema } from '../schema/FundraiserSectionFormSchema';

interface FundraiserSectionProps {
  goBack: () => void;
}

const FundraiserSection: React.FC<FundraiserSectionProps> = ({ goBack }) => {
  const { handleChange, values, errors, setFieldValue, touched, handleBlur, handleSubmit } =
    useFormikContext<Fundraiser>();

  const buttonDisabled =
    errors.fundraisingReason ||
    errors.companyDescription ||
    errors.currentInvestor ||
    errors.pitchDeck
      ? true
      : false;

  return (
    <ContactUsFormContainer
      withBackButton
      title="Fundraiser"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="fundraisingReason"
        value={values.fundraisingReason}
        label="Why are you fundraising?"
        onChange={handleChange}
        error={
          errors.fundraisingReason && touched.fundraisingReason ? errors.fundraisingReason : ''
        }
        onBlur={handleBlur}
      />
      <Input
        name="companyDescription"
        value={values.companyDescription}
        label="Company Description"
        onChange={handleChange}
        error={
          errors.companyDescription && touched.companyDescription ? errors.companyDescription : ''
        }
        onBlur={handleBlur}
      />
      <Input
        name="currentInvestor"
        value={values.currentInvestor}
        label="Current Investor"
        onChange={handleChange}
        error={errors.currentInvestor && touched.currentInvestor ? errors.currentInvestor : ''}
        onBlur={handleBlur}
      />
      <Radio.Group
        name="investmentRange"
        label="Investment Range:"
        value={values.fundraisingRange}
        error={errors.fundraisingRange}
        onChange={e => setFieldValue('fundraisingRange', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            value={FundraisingRange.BETWEEN_100K_TO_500K}
            label={FundraisingRange.BETWEEN_100K_TO_500K}
          />
          <Radio
            value={FundraisingRange.BETWEEN_500K_TO_1MIO}
            label={FundraisingRange.BETWEEN_500K_TO_1MIO}
          />
          <Radio
            value={FundraisingRange.BETWEEN_1MIO_TO_5MIO}
            label={FundraisingRange.BETWEEN_1MIO_TO_5MIO}
          />
          <Radio
            value={FundraisingRange.BETWEEN_5MIO_TO_10MIO}
            label={FundraisingRange.BETWEEN_5MIO_TO_10MIO}
          />
          <Radio value={FundraisingRange.ABOVE_10MIO} label={FundraisingRange.ABOVE_10MIO} />
        </Flex>
      </Radio.Group>
      <Flex justify="center" mt={rem(10)}>
        <FileButton onChange={e => setFieldValue('pitchDeck', e)} accept="application/pdf">
          {props => (
            <UnstyledButton
              bg="#00C48F"
              w={rem(250)}
              h={rem(40)}
              style={{
                borderRadius: rem(8),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              {...props}>
              <Flex gap="xl">
                <Text color="#fff">Upload your pitch deck</Text>
                <IconUpload color="#FFF" size={rem(23)} />
              </Flex>
            </UnstyledButton>
          )}
        </FileButton>
      </Flex>
    </ContactUsFormContainer>
  );
};

interface FundraiserSectionFormProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}

export const FundraiserSectionForm: React.FC<FundraiserSectionFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundraiser, onFundraiserSectionSuccess, onPitchDeckInputSuccess } = useContactUsStore();

  const handleSubmit = (values: Fundraiser) => {
    onPitchDeckInputSuccess({ pitchDeck: values.pitchDeck });
    onFundraiserSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<Fundraiser>
      initialValues={{
        fundraisingReason: fundraiser?.fundraisingReason || '',
        companyDescription: fundraiser?.companyDescription || '',
        currentInvestor: fundraiser?.currentInvestor || '',
        fundraisingRange: fundraiser?.fundraisingRange || FundraisingRange.BETWEEN_100K_TO_500K,
        pitchDeck: null,
      }}
      validateOnMount={true}
      validationSchema={FundraiserSectionFormSchema}
      onSubmit={handleSubmit}>
      <FundraiserSection goBack={goBack} />
    </Formik>
  );
};
