import React from 'react';
import {
  ContactUsSectionsProps,
  FundManagerPurpose,
  Purpose,
  SectionsFormProps,
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

const PurposeSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<FundManagerPurpose>();
  const { classes } = useStyles();
  const buttonDisabled = errors.fundManagementPurpose ? true : false;

  return (
    <ContactUsContainer
      title="You'd like to"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Radio.Group
        value={values.fundManagementPurpose}
        error={errors.fundManagementPurpose}
        onChange={e => setFieldValue('fundManagementPurpose', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio className={classes.radioButton} value={Purpose.START} label={Purpose.START} />
          <Radio className={classes.radioButton} value={Purpose.INVEST} label={Purpose.INVEST} />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const PurposeSectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { fundManagerPurpose, onFundManagerPurposeSuccess } = useContactUsStore();

  const handleSubmit = (values: FundManagerPurpose) => {
    onFundManagerPurposeSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundManagerPurpose>
      initialValues={{
        fundManagementPurpose: fundManagerPurpose?.fundManagementPurpose || Purpose.START,
      }}
      onSubmit={handleSubmit}>
      <PurposeSection goBack={goBack} />
    </Formik>
  );
};
