import React from 'react';
import {
  ContactUsSectionsProps,
  Experience,
  FundManagerExperience,
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

const ExperienceSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<FundManagerExperience>();
  const { classes } = useStyles();
  const buttonDisabled = errors.yearsOfExperience ? true : false;

  return (
    <ContactUsContainer
      title="Years Of Experience"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Radio.Group
        name="yearsOfExperience"
        value={values.yearsOfExperience}
        error={errors.yearsOfExperience}
        onChange={e => setFieldValue('yearsOfExperience', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            className={classes.radioButton}
            value={Experience.BETWEEN_1_TO_3Y}
            label={Experience.BETWEEN_1_TO_3Y}
          />
          <Radio
            className={classes.radioButton}
            value={Experience.BETWEEN_3_TO_5Y}
            label={Experience.BETWEEN_3_TO_5Y}
          />
          <Radio
            className={classes.radioButton}
            value={Experience.BETWEEN_5_TO_10Y}
            label={Experience.BETWEEN_5_TO_10Y}
          />
          <Radio
            className={classes.radioButton}
            value={Experience.ABOVE_10Y}
            label={Experience.ABOVE_10Y}
          />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const ExperienceSectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { fundManagerExperience, onFundManagerExperienceSuccess } = useContactUsStore();

  const handleSubmit = (values: FundManagerExperience) => {
    onFundManagerExperienceSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<FundManagerExperience>
      initialValues={{
        yearsOfExperience: fundManagerExperience?.yearsOfExperience || Experience.BETWEEN_1_TO_3Y,
      }}
      onSubmit={handleSubmit}>
      <ExperienceSection goBack={goBack} />
    </Formik>
  );
};
