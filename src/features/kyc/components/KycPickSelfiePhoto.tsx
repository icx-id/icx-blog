import { Box, List, rem } from '@mantine/core';
import React, { useState } from 'react';
import { KycContainer } from './KycContainer';
import { Formik, useFormikContext } from 'formik';
import { PickPhoto } from './PickPhoto';
import { ResultPhoto } from './ResultPhoto';
import { KycPickSelfieSchema } from '../schema/KycPickSelfieSchema';
import { IdentitySelfie } from '../types';
import { useKycStore } from '../stores';
import { KycCameraWrapper } from './KycCameraWrapper';

interface KycPickSelfiePhotoInnerProps {
  goBack: () => void;
}

const KycPickSelfiePhotoInner: React.FC<KycPickSelfiePhotoInnerProps> = ({ goBack }) => {
  const { values, setFieldValue, errors, handleSubmit } = useFormikContext<IdentitySelfie>();
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);

  const handleSubmitPhoto = (image: File) => {
    setFieldValue('identityPhoto', image);
    setIsCameraOn(false);
  };

  return (
    <Box>
      {isCameraOn ? (
        <KycCameraWrapper
          closeCamera={() => setIsCameraOn(false)}
          onSubmitSuccess={handleSubmitPhoto}
        />
      ) : (
        <KycContainer
          bannerType="half"
          bannerImage="/img/image-selfie.png"
          withBreadcrumbs
          currentStep="3"
          goBack={goBack}
          totalStep="5">
          {values.identitySelfie && !errors.identitySelfie ? (
            <ResultPhoto
              title="Wajah dan foto KTP Anda sudah terlihat dengan jelas?"
              onConfirmPhoto={handleSubmit}
              onRetakePhoto={() => setFieldValue('identitySelfie', null)}
              resultImage={URL.createObjectURL(values.identitySelfie)}
            />
          ) : (
            <PickPhoto
              handleOpenCamera={() => setIsCameraOn(true)}
              error={errors.identitySelfie}
              title="Selfie dengan KTP Anda"
              onChange={e => setFieldValue('identitySelfie', e)}>
              <List type="ordered" px={rem(16)} my={rem(10)} spacing={4}>
                <List.Item style={{ fontSize: rem(15) }}>
                  Posisikan KTP di bawah dagu, jangan menutupi wajah
                </List.Item>
                <List.Item style={{ fontSize: rem(15) }}>
                  Pastikan keseluruhan wajah dan KTP Anda berada di dalam area bingkai foto
                </List.Item>
                <List.Item style={{ fontSize: rem(15) }}>
                  Pastikan hasil foto wajah dan KTP Anda terlihat jelas dan tidak berbayang
                </List.Item>
              </List>
            </PickPhoto>
          )}
        </KycContainer>
      )}
    </Box>
  );
};

interface KycPickSelfiePhotoProps extends KycPickSelfiePhotoInnerProps {
  onSubmitSuccess: () => void;
}

export const KycPickSelfiePhoto: React.FC<KycPickSelfiePhotoProps> = ({
  goBack,
  onSubmitSuccess,
}) => {
  const { onSelfiePickerSuccess } = useKycStore();

  const handleSubmit = (values: IdentitySelfie) => {
    onSelfiePickerSuccess({ identitySelfie: values.identitySelfie });
    onSubmitSuccess();
  };
  return (
    <Formik<IdentitySelfie>
      initialValues={{
        identitySelfie: null,
      }}
      validationSchema={KycPickSelfieSchema}
      onSubmit={handleSubmit}>
      <KycPickSelfiePhotoInner goBack={goBack} />
    </Formik>
  );
};
