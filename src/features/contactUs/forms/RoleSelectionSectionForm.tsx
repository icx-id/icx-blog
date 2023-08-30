import React from 'react';
import { ContactUsFormContainer } from '../components/ContactUsFormContainer';
import { Roles, RoleSelection } from './contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../stores';
import { Flex, Radio } from '@mantine/core';

interface RoleSelectionSectionProps {
  goBack: () => void;
}

const RoleSelectionSection: React.FC<RoleSelectionSectionProps> = ({ goBack }) => {
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<RoleSelection>();

  return (
    <ContactUsFormContainer
      title="Pilih posisi anda"
      onSubmit={handleSubmit}
      goBack={goBack}
      withBackButton>
      <Radio.Group
        name="role"
        value={values.userRole}
        error={errors.userRole}
        onChange={e => setFieldValue('userRole', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio value={Roles.INVESTOR} label="Investor" />
          <Radio value={Roles.FUNDRAISER} label="Fundraiser" />
          <Radio value={Roles.FUND_MANAGER} label="Fund Manager" />
        </Flex>
      </Radio.Group>
    </ContactUsFormContainer>
  );
};

interface RoleSelectionSectionFormProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}

export const RoleSelectionForm: React.FC<RoleSelectionSectionFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { userRole, onRoleSelectionSuccess } = useContactUsStore();

  const handleSubmit = (values: RoleSelection) => {
    onRoleSelectionSuccess(values.userRole);
    onSubmitSuccess();
  };

  return (
    <Formik<RoleSelection>
      initialValues={{
        userRole: userRole || Roles.INVESTOR,
      }}
      onSubmit={handleSubmit}>
      <RoleSelectionSection goBack={goBack} />
    </Formik>
  );
};
