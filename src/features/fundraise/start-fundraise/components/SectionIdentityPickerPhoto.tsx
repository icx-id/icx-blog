import { Box, List, rem } from '@mantine/core';
import React, { useState } from 'react';
import { Formik, useFormikContext } from 'formik';
import { PickFile } from './PickFile';
import { ResultFile } from './ResultFile';
import { IdentityPhoto } from '../../types';
import { CameraWrapper } from './CameraWrapper';
import { RegisterFundraiseContainer } from './RegisterFundraiseContainer';
import { useFundraiseStore } from '../../stores';
import { IdentityPhotoSchema } from '../schema/IdentityPhotoSchema';

interface IdentityPickerPhotoInnerProps {
  goBack: () => void;
}

const IdentityPickerPhotoInner: React.FC<IdentityPickerPhotoInnerProps> = ({ goBack }) => {
  const { values, setFieldValue, errors, handleSubmit } = useFormikContext<IdentityPhoto>();
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);

  const handleSubmitPhoto = (image: File) => {
    setFieldValue('identityPhoto', image);
    setIsCameraOn(false);
  };

  return (
    <Box>
      {isCameraOn ? (
        <CameraWrapper
          closeCamera={() => setIsCameraOn(false)}
          onSubmitSuccess={handleSubmitPhoto}
        />
      ) : (
        <RegisterFundraiseContainer
          bannerType="half"
          bannerImage="/img/image-ktp.png"
          withBreadcrumbs
          currentStep="2"
          goBack={goBack}
          totalStep="4">
          {values.identityPhoto && !errors.identityPhoto ? (
            <ResultFile
              onConfirmFile={handleSubmit}
              onRetakePhoto={() => setFieldValue('identityPhoto', null)}
              resultFile={URL.createObjectURL(values.identityPhoto)}
              type="image"
              title="Informasi di foto KTP Anda sudah terlihat dengan jelas?"
            />
          ) : (
            <PickFile
              type="image"
              handleOpenCamera={() => setIsCameraOn(true)}
              withOpenCamera
              onChange={e => setFieldValue('identityPhoto', e)}
              title="Ambil foto KTP Anda"
              showFooter
              error={errors.identityPhoto}>
              <List type="ordered" px={rem(16)} my={rem(10)} spacing={4}>
                <List.Item style={{ fontSize: rem(15) }}>
                  Pastikan KTP jelas dan sesuai dengan identitas Anda
                </List.Item>
                <List.Item style={{ fontSize: rem(15) }}>
                  Pastikan seluruh bagian KTP Anda berada dalam bingkai foto dan tidak terpotong
                </List.Item>
                <List.Item style={{ fontSize: rem(15) }}>Pastikan KTP masih berlaku</List.Item>
              </List>
            </PickFile>
          )}
        </RegisterFundraiseContainer>
      )}
    </Box>
  );
};

interface SectionIdentityPickerPhotoProps extends IdentityPickerPhotoInnerProps {
  onSubmitSuccess: () => void;
}

export const SectionIdentityPickerPhoto: React.FC<SectionIdentityPickerPhotoProps> = ({
  onSubmitSuccess,
  goBack,
}) => {
  const { onIdentityPickerSuccess } = useFundraiseStore();

  const handleSubmitIdentityPhoto = (values: IdentityPhoto) => {
    onIdentityPickerSuccess({ identityPhoto: values.identityPhoto });
    onSubmitSuccess();
  };

  return (
    <Formik<IdentityPhoto>
      initialValues={{
        identityPhoto: null,
      }}
      validationSchema={IdentityPhotoSchema}
      onSubmit={handleSubmitIdentityPhoto}>
      <IdentityPickerPhotoInner goBack={goBack} />
    </Formik>
  );
};
