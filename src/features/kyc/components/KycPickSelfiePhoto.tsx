import { Box, List, rem } from '@mantine/core';
import React from 'react';
import { KycContainer } from './KycContainer';
import { KycBreadcrumbs } from './KycBreadcrumbs';
import { useFormikContext } from 'formik';
import { KycFormProps } from '../types';
import { PickPhoto } from './PickPhoto';
import { ResultPhoto } from './ResultPhoto';

interface KycPickSelfiePhotoProps {
  goBack: () => void;
  onSubmit: () => void;
}

export const KycPickSelfiePhoto: React.FC<KycPickSelfiePhotoProps> = ({ goBack, onSubmit }) => {
  const { values, setFieldValue, errors } = useFormikContext<KycFormProps>();

  return (
    <KycContainer bannerType="half" bannerImage="/img/image-selfie.png">
      <Box px={rem(20)} pt={rem(20)}>
        <KycBreadcrumbs currentStep="3" totalStep="5" goBack={goBack} />
      </Box>

      {values.selfieImage && !errors.selfieImage ? (
        <ResultPhoto
          title="Wajah dan foto KTP Anda sudah terlihat dengan jelas?"
          onConfirmPhoto={onSubmit}
          onRetakePhoto={() => setFieldValue('selfieImage', null)}
          resultImage={URL.createObjectURL(values.selfieImage)}
        />
      ) : (
        <PickPhoto
          error={errors.selfieImage}
          title="Selfie dengan KTP Anda"
          onChange={e => setFieldValue('selfieImage', e)}>
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
  );
};
