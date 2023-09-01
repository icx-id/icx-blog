import React from 'react';
import {
  ContactUsSectionsProps,
  InvestmentRange,
  InvestorInvestmentRange,
  SectionsFormProps,
} from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { Flex, Radio, createStyles, rem } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles(theme => ({
  radioButton: {
    'box-shadow': theme.shadows.lg,
    padding: rem(20),
  },
}));

const InvestmentRangeSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const size = mobileScreen ? 'xs' : 'md';
  const { classes } = useStyles();
  const { values, errors, setFieldValue, handleSubmit } =
    useFormikContext<InvestorInvestmentRange>();

  return (
    <ContactUsContainer
      title="Investment Range"
      bannerText="Investor"
      goBack={goBack}
      onSubmit={handleSubmit}>
      <Radio.Group
        value={values.investmentAmountRange}
        error={errors.investmentAmountRange}
        onChange={e => setFieldValue('investmentAmountRange', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            size={size}
            className={classes.radioButton}
            value={InvestmentRange.UNDER_100MIO}
            label={InvestmentRange.UNDER_100MIO}
          />
          <Radio
            size={size}
            className={classes.radioButton}
            value={InvestmentRange.BETWEEN_100MIO_TO_500MIO}
            label={InvestmentRange.BETWEEN_100MIO_TO_500MIO}
          />
          <Radio
            size={size}
            className={classes.radioButton}
            value={InvestmentRange.BETWEEN_500MIO_TO_1BIO}
            label={InvestmentRange.BETWEEN_500MIO_TO_1BIO}
          />
          <Radio
            size={size}
            className={classes.radioButton}
            value={InvestmentRange.ABOVE_1BIO}
            label={InvestmentRange.ABOVE_1BIO}
          />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const InvestmentRangeSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { investorInvestmentRange, onInvestorInvestmentRangeSectionSuccess } = useContactUsStore();

  const handleSubmit = (values: InvestorInvestmentRange) => {
    onInvestorInvestmentRangeSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<InvestorInvestmentRange>
      initialValues={{
        investmentAmountRange:
          investorInvestmentRange?.investmentAmountRange || InvestmentRange.UNDER_100MIO,
      }}
      onSubmit={handleSubmit}>
      <InvestmentRangeSection goBack={goBack} />
    </Formik>
  );
};
