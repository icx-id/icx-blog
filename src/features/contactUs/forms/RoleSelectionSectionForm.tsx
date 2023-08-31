import React from 'react';
import { Roles, UserRole, SectionsFormProps } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../stores';
import { createStyles, Flex, Radio, rem } from '@mantine/core';
import { ContactUsContainer } from '../components/ContactUsContainer';

interface RoleSelectionSectionProps {
  goBack: () => void;
}

const useStyles = createStyles(theme => ({
  radioButton: {
    'box-shadow': theme.shadows.lg,
    padding: rem(20),
  },
}));

const RoleSelectionSection: React.FC<RoleSelectionSectionProps> = ({ goBack }) => {
  const { classes } = useStyles();
  const { onRoleSelectionSuccess } = useContactUsStore();
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<UserRole>();

  return (
    <ContactUsContainer title="Pilih posisi anda" onSubmit={handleSubmit} goBack={goBack}>
      <Radio.Group
        name="role"
        value={values.userRole}
        error={errors.userRole}
        onChange={e => {
          setFieldValue('userRole', e);
          onRoleSelectionSuccess({ userRole: e as Roles });
        }}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio className={classes.radioButton} value={Roles.INVESTOR} label="Investor" />
          <Radio className={classes.radioButton} value={Roles.FUNDRAISER} label="Fundraiser" />
          <Radio className={classes.radioButton} value={Roles.FUND_MANAGER} label="Fund Manager" />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const RoleSelectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { userRole } = useContactUsStore();

  const handleSubmit = () => {
    onSubmitSuccess();
  };

  return (
    <Formik<UserRole>
      initialValues={{
        userRole: userRole?.userRole || Roles.INVESTOR,
      }}
      onSubmit={handleSubmit}>
      <RoleSelectionSection goBack={goBack} />
    </Formik>
  );
};
