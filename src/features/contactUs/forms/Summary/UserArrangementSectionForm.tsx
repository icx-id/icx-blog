import React from 'react';
import { Arrange, ContactUsSectionsProps, SectionsFormProps, UserArrangement } from '../contactUs';
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

const UserArrangementSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { classes } = useStyles();
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<UserArrangement>();

  return (
    <ContactUsContainer title="I'd Like To Arrange A" onSubmit={handleSubmit} goBack={goBack}>
      <Radio.Group
        name="arrangementType"
        value={values.arrangementType}
        error={errors.arrangementType}
        onChange={e => setFieldValue('arrangementType', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio className={classes.radioButton} value={Arrange.CALL} label="Call" />
          <Radio
            className={classes.radioButton}
            value={Arrange.ONLINE_MEETING}
            label="Online Meering"
          />
          <Radio
            className={classes.radioButton}
            value={Arrange.OFFICE_VISIT}
            label="Office Visit"
          />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const UserArrangementSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { userArrangement, onUserArrangementSuccess } = useContactUsStore();

  const handleSubmit = (values: UserArrangement) => {
    onUserArrangementSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<UserArrangement>
      initialValues={{
        arrangementType: userArrangement?.arrangementType || Arrange.CALL,
      }}
      onSubmit={handleSubmit}>
      <UserArrangementSection goBack={goBack} />
    </Formik>
  );
};
