import React from 'react';
import { ContactUsSectionsProps, InvestorRdnStatus, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { Flex, Radio, createStyles, rem } from '@mantine/core';
import { ContactUsContainer } from '../../components/ContactUsContainer';
import { useContactUsStore } from '../../stores';

const useStyles = createStyles(theme => ({
  radioButton: {
    'box-shadow': theme.shadows.lg,
    padding: rem(20),
  },
}));

const RdnStatusSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { classes } = useStyles();
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<InvestorRdnStatus>();

  return (
    <ContactUsContainer
      title="Have you held Rekening Dana Nasabah (RDN) for at least 2 years?"
      bannerText="Investor"
      goBack={goBack}
      onSubmit={handleSubmit}>
      <Radio.Group
        mt={30}
        value={values.isRdnMoreThanTwoYears}
        error={errors.isRdnMoreThanTwoYears}
        onChange={e => setFieldValue('isRdnMoreThanTwoYears', e)}>
        <Flex direction="column" mt="xs" gap="xl">
          <Radio className={classes.radioButton} value="YES" label="Yes" />
          <Radio className={classes.radioButton} value="NO" label="No" />
        </Flex>
      </Radio.Group>
    </ContactUsContainer>
  );
};

export const RdnStatusSectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { investorRdnStatus, onInvestorRdnStatusSectionSuccess } = useContactUsStore();

  const handleSubmit = (values: InvestorRdnStatus) => {
    onInvestorRdnStatusSectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<InvestorRdnStatus>
      initialValues={{
        isRdnMoreThanTwoYears: investorRdnStatus?.isRdnMoreThanTwoYears || 'YES',
      }}
      onSubmit={handleSubmit}>
      <RdnStatusSection goBack={goBack} />
    </Formik>
  );
};
