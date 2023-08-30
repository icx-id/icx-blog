import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsFormContainer } from '../components/ContactUsFormContainer';
import { InvestmentRange, Investor, StartupInvestmentStatus } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../stores';
import { Flex, Radio } from '@mantine/core';
import { InvestorSectionFormSchema } from '../schema/InvestorSectionFormSchema';

interface InvestorSectionProps {
  goBack: () => void;
}

const InvestorSection: React.FC<InvestorSectionProps> = ({ goBack }) => {
  const { handleChange, values, errors, setFieldValue, touched, handleBlur, handleSubmit } =
    useFormikContext<Investor>();

  const buttonDisabled =
    errors.occupation ||
    errors.companyName ||
    errors.investmentRange ||
    errors.rdnStatus ||
    errors.startupInvestmentStatus ||
    errors.domicileCity
      ? true
      : false;

  return (
    <ContactUsFormContainer
      withBackButton
      title="Investor"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="occupation"
        value={values.occupation}
        label="Your current occupation or business"
        onChange={handleChange}
        error={errors.occupation && touched.occupation ? errors.occupation : ''}
        onBlur={handleBlur}
      />
      <Input
        name="companyName"
        value={values.companyName}
        label="Company Name"
        onChange={handleChange}
        error={errors.companyName && touched.companyName ? errors.companyName : ''}
        onBlur={handleBlur}
      />
      <Input
        name="domicileCity"
        value={values.domicileCity}
        label="Domicile City"
        onChange={handleChange}
        error={errors.domicileCity && touched.domicileCity ? errors.domicileCity : ''}
        onBlur={handleBlur}
      />
      <Radio.Group
        label="Investment Range:"
        value={values.investmentRange}
        error={errors.investmentRange}
        onChange={e => setFieldValue('investmentRange', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value={InvestmentRange.UNDER_100MIO} label={InvestmentRange.UNDER_100MIO} />
          <Radio
            value={InvestmentRange.BETWEEN_100MIO_TO_500MIO}
            label={InvestmentRange.BETWEEN_100MIO_TO_500MIO}
          />
          <Radio
            value={InvestmentRange.BETWEEN_500MIO_TO_1BIO}
            label={InvestmentRange.BETWEEN_500MIO_TO_1BIO}
          />
          <Radio value={InvestmentRange.ABOVE_1BIO} label={InvestmentRange.ABOVE_1BIO} />
        </Flex>
      </Radio.Group>
      <Radio.Group
        mt={30}
        label="Have you ever invested in a startup company?"
        value={values.startupInvestmentStatus}
        error={errors.startupInvestmentStatus}
        onChange={e => setFieldValue('startupInvestmentStatus', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            value={StartupInvestmentStatus.YES_ANGEL}
            label={StartupInvestmentStatus.YES_ANGEL}
          />
          <Radio
            value={StartupInvestmentStatus.YES_PARTNER}
            label={StartupInvestmentStatus.YES_PARTNER}
          />
          <Radio value={StartupInvestmentStatus.NO} label={StartupInvestmentStatus.NO} />
        </Flex>
      </Radio.Group>
      <Radio.Group
        mt={30}
        label="Have you held Rekening Dana Nasabah (RDN) for at least 2 years?"
        value={values.rdnStatus}
        error={errors.rdnStatus}
        onChange={e => setFieldValue('rdnStatus', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value="YES" label="Yes" />
          <Radio value="NO" label="No" />
        </Flex>
      </Radio.Group>
    </ContactUsFormContainer>
  );
};

interface InvestorSectionFormProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}

export const InvestorSectionForm: React.FC<InvestorSectionFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { investor, onInvestorSectionSuccess } = useContactUsStore();

  const handleSubmit = (values: Investor) => {
    onInvestorSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<Investor>
      initialValues={{
        occupation: investor?.occupation || '',
        companyName: investor?.companyName || '',
        domicileCity: investor?.domicileCity || '',
        investmentRange: investor?.investmentRange || InvestmentRange.UNDER_100MIO,
        rdnStatus: investor?.rdnStatus || 'YES',
        startupInvestmentStatus:
          investor?.startupInvestmentStatus || StartupInvestmentStatus.YES_ANGEL,
      }}
      validateOnMount={true}
      validationSchema={InvestorSectionFormSchema}
      onSubmit={handleSubmit}>
      <InvestorSection goBack={goBack} />
    </Formik>
  );
};
