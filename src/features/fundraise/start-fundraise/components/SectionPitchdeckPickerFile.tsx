import { Box, Text } from '@mantine/core';
import React from 'react';
import { Formik, useFormikContext } from 'formik';
import { PickFile } from './PickFile';
import { ResultFile } from './ResultFile';
import { PitchdeckFile } from '../../types';
import { RegisterFundraiseContainer } from './RegisterFundraiseContainer';
import { useFundraiseStore } from '../../stores';
import { PitchdeckFileSchema } from '../schema/PitchdeckFileSchema';
import { useRegisterFundraiseMutation } from '../api/useRegisterFundraiseMutation';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

interface PitchdeckPickerFileInnerProps {
  goBack: () => void;
}

const PitchdeckPickerFileInner: React.FC<PitchdeckPickerFileInnerProps> = ({ goBack }) => {
  const { values, setFieldValue, errors, handleSubmit } = useFormikContext<PitchdeckFile>();

  return (
    <Box>
      <RegisterFundraiseContainer
        bannerType="full"
        bannerImage="/img/pitchdeck-banner.webp"
        withBreadcrumbs
        currentStep="4"
        goBack={goBack}
        totalStep="4">
        {values.pitchdeckFile && !errors.pitchdeckFile ? (
          <ResultFile
            onConfirmFile={handleSubmit}
            resultFile={values.pitchdeckFile.name}
            type="file"
          />
        ) : (
          <PickFile
            type="file"
            onChange={e => setFieldValue('pitchdeckFile', e)}
            title="Unggah Pitch Deck Anda"
            error={errors.pitchdeckFile}>
            <Text align="center" size="sm" mt="10px">
              Pastikan file berformat yang didukung dan ukurannya sesuai dengan batas yang di
              tentukan
            </Text>
          </PickFile>
        )}
      </RegisterFundraiseContainer>
    </Box>
  );
};

interface SectionPitchdeckPickerFileProps extends PitchdeckPickerFileInnerProps {
  onSubmitSuccess: () => void;
}

export const SectionPitchdeckPickerFile: React.FC<SectionPitchdeckPickerFileProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { identityPhoto, personalInformation, companyInformation } = useFundraiseStore();

  const { mutateAsync: registerFundraise } = useRegisterFundraiseMutation();

  const handleSubmitPitchdeckFile = async (values: PitchdeckFile) => {
    try {
      if (identityPhoto && personalInformation && companyInformation && values.pitchdeckFile) {
        registerFundraise({
          ...personalInformation,
          ...companyInformation,
          identityPhoto,
          pitchdeckFile: values.pitchdeckFile,
        });
      }
      onSubmitSuccess();
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;

      if (errors) {
        return notifications.show({
          message: errors.join(' '),
          color: 'red',
          title: 'Register Fundaraise Failed',
        });
      }
    }
  };

  return (
    <Formik<PitchdeckFile>
      initialValues={{
        pitchdeckFile: null,
      }}
      validationSchema={PitchdeckFileSchema}
      onSubmit={handleSubmitPitchdeckFile}>
      <PitchdeckPickerFileInner goBack={goBack} />
    </Formik>
  );
};
