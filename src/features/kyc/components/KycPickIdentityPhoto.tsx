import { Box, List, rem } from '@mantine/core';
import React from 'react';
import { KycContainer } from './KycContainer';
import { KycBreadcrumbs } from './KycBreadcrumbs';
import { useFormikContext } from 'formik';
import { KycFormProps } from '../types';
import { PickPhoto } from './PickPhoto';
import { ResultPhoto } from './ResultPhoto';

interface KycPickIdentityPhoto {
  onSubmit: () => void;
}

export const KycPickIdentityPhoto: React.FC<KycPickIdentityPhoto> = ({ onSubmit }) => {
  const { values, setFieldValue, errors } = useFormikContext<KycFormProps>();

  return (
    <KycContainer bannerType="half" bannerImage="/img/image-ktp.png">
      <Box px={rem(20)} pt={rem(20)}>
        <KycBreadcrumbs currentStep="1" totalStep="5" />
      </Box>
      {values.ktpImage && !errors.ktpImage ? (
        <ResultPhoto
          onConfirmPhoto={onSubmit}
          onRetakePhoto={() => setFieldValue('ktpImage', null)}
          resultImage={URL.createObjectURL(values.ktpImage)}
          title="Informasi di foto KTP Anda sudah terlihat dengan jelas?"
        />
      ) : (
        <PickPhoto
          onChange={e => setFieldValue('ktpImage', e)}
          title="Ambil foto KTP Anda"
          error={errors.ktpImage}>
          <List type="ordered" px={rem(16)} my={rem(10)} spacing={4}>
            <List.Item style={{ fontSize: rem(15) }}>
              Pastikan KTP jelas dan sesuai dengan identitas Anda
            </List.Item>
            <List.Item style={{ fontSize: rem(15) }}>
              Pastikan seluruh bagian KTP Anda berada dalam bingkai foto dan tidak terpotong
            </List.Item>
            <List.Item style={{ fontSize: rem(15) }}>Pastikan KTP masih berlaku</List.Item>
          </List>
        </PickPhoto>
      )}
    </KycContainer>
  );
};
