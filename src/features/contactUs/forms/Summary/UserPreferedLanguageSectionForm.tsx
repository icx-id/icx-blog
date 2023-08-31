import React from 'react';
import {
  ContactUsSectionsProps,
  PreferedLanguage,
  SectionsFormProps,
  userPrederedLanguage,
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

const UserPreferedLanguageSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { classes } = useStyles();
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<userPrederedLanguage>();

  return (
    <ContactUsContainer title="Prefer Language" onSubmit={handleSubmit} goBack={goBack}>
      <Radio.Group
        name="preferredLanguage"
        value={values.preferredLanguage}
        error={errors.preferredLanguage}
        onChange={e => setFieldValue('preferredLanguage', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            className={classes.radioButton}
            value={PreferedLanguage.INDONESIA}
            label="Bahasa"
          />
          <Radio className={classes.radioButton} value={PreferedLanguage.ENGLISH} label="English" />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const UserPreferedLanguageSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { userPreferedLanguage, onUserPreferedLanguageSuccess } = useContactUsStore();

  const handleSubmit = (values: userPrederedLanguage) => {
    onUserPreferedLanguageSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<userPrederedLanguage>
      initialValues={{
        preferredLanguage: userPreferedLanguage?.preferredLanguage || PreferedLanguage.INDONESIA,
      }}
      onSubmit={handleSubmit}>
      <UserPreferedLanguageSection goBack={goBack} />
    </Formik>
  );
};
