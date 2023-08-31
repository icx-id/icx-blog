import React from 'react';
import {
  ContactUsSectionsProps,
  FundraisingRange,
  SectionsFormProps,
  FundraiseRange,
} from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { Flex, Radio, createStyles, rem } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';

const useStyles = createStyles(theme => ({
  radioButton: {
    'box-shadow': theme.shadows.lg,
    padding: rem(20),
  },
}));

const FundraiseRangeSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { values, errors, handleSubmit, setFieldValue } = useFormikContext<FundraiseRange>();
  const { classes } = useStyles();
  const buttonDisabled = errors.fundraisingAmountRange ? true : false;

  return (
    <ContactUsContainer
      title="Fundraising Range"
      bannerText="Fundraiser"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Radio.Group
        name="fundraisingAmountRange"
        value={values.fundraisingAmountRange}
        error={errors.fundraisingAmountRange}
        onChange={e => setFieldValue('fundraisingAmountRange', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            className={classes.radioButton}
            value={FundraisingRange.BETWEEN_100K_TO_500K}
            label={FundraisingRange.BETWEEN_100K_TO_500K}
          />
          <Radio
            className={classes.radioButton}
            value={FundraisingRange.BETWEEN_500K_TO_1MIO}
            label={FundraisingRange.BETWEEN_500K_TO_1MIO}
          />
          <Radio
            className={classes.radioButton}
            value={FundraisingRange.BETWEEN_1MIO_TO_5MIO}
            label={FundraisingRange.BETWEEN_1MIO_TO_5MIO}
          />
          <Radio
            className={classes.radioButton}
            value={FundraisingRange.BETWEEN_5MIO_TO_10MIO}
            label={FundraisingRange.BETWEEN_5MIO_TO_10MIO}
          />
          <Radio
            className={classes.radioButton}
            value={FundraisingRange.ABOVE_10MIO}
            label={FundraisingRange.ABOVE_10MIO}
          />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const FundraiseRangeSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { fundraiseRange, onFundraiseRangeSectionSuccess } = useContactUsStore();

  const handleSubmit = (values: FundraiseRange) => {
    onFundraiseRangeSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundraiseRange>
      initialValues={{
        fundraisingAmountRange:
          fundraiseRange?.fundraisingAmountRange || FundraisingRange.BETWEEN_100K_TO_500K,
      }}
      onSubmit={handleSubmit}>
      <FundraiseRangeSection goBack={goBack} />
    </Formik>
  );
};
