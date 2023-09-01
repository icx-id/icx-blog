import React from 'react';
import {
  ContactUsSectionsProps,
  InvestorStartupInvestmentStatus,
  SectionsFormProps,
  StartupInvestmentStatus,
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

const StartupInvestmentStatusSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { classes } = useStyles();
  const { values, errors, setFieldValue, handleSubmit } =
    useFormikContext<InvestorStartupInvestmentStatus>();

  return (
    <ContactUsContainer
      title="Have you ever invested in a startup company?"
      bannerText="Investor"
      goBack={goBack}
      onSubmit={handleSubmit}>
      <Radio.Group
        mt={30}
        value={values.startupInvestmentStatus}
        error={errors.startupInvestmentStatus}
        onChange={e => setFieldValue('startupInvestmentStatus', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio
            className={classes.radioButton}
            value={StartupInvestmentStatus.YES_ANGEL}
            label={StartupInvestmentStatus.YES_ANGEL}
          />
          <Radio
            className={classes.radioButton}
            value={StartupInvestmentStatus.YES_PARTNER}
            label={StartupInvestmentStatus.YES_PARTNER}
          />
          <Radio
            className={classes.radioButton}
            value={StartupInvestmentStatus.NO}
            label={StartupInvestmentStatus.NO}
          />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const StartupInvestmentStatusSectionForm: React.FC<SectionsFormProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { investorStartupInvestmentStatus, onInvestorStartupInvestmentStatusSectionSuccess } =
    useContactUsStore();

  const handleSubmit = (values: InvestorStartupInvestmentStatus) => {
    onInvestorStartupInvestmentStatusSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<InvestorStartupInvestmentStatus>
      initialValues={{
        startupInvestmentStatus:
          investorStartupInvestmentStatus?.startupInvestmentStatus ||
          StartupInvestmentStatus.YES_ANGEL,
      }}
      onSubmit={handleSubmit}>
      <StartupInvestmentStatusSection goBack={goBack} />
    </Formik>
  );
};
