import { List, rem } from '@mantine/core';
import React from 'react';
import { KycContainer } from './KycContainer';
import { Formik, useFormikContext } from 'formik';
import { PickPhoto } from './PickPhoto';
import { ResultPhoto } from './ResultPhoto';
import { KycPickIdentitySchema } from '../schema/KycPickIdentitySchema';
import { useKycStore } from '../stores';
import { IdentityPhoto } from '../types';

const KycPickIdentityPhotoInner: React.FC = () => {
  const { values, setFieldValue, errors, handleSubmit } = useFormikContext<IdentityPhoto>();
  return (
    <KycContainer
      bannerType="half"
      bannerImage="/img/image-ktp.png"
      withBreadcrumbs
      currentStep="1"
      totalStep="5">
      {values.identityPhoto && !errors.identityPhoto ? (
        <ResultPhoto
          onConfirmPhoto={handleSubmit}
          onRetakePhoto={() => setFieldValue('identityPhoto', null)}
          resultImage={URL.createObjectURL(values.identityPhoto)}
          title="Informasi di foto KTP Anda sudah terlihat dengan jelas?"
        />
      ) : (
        <PickPhoto
          onChange={e => setFieldValue('identityPhoto', e)}
          title="Ambil foto KTP Anda"
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
        </PickPhoto>
      )}
    </KycContainer>
  );
};

interface KycPickIdentityPhoto {
  onSubmitSuccess: () => void;
}

export const KycPickIdentityPhoto: React.FC<KycPickIdentityPhoto> = ({ onSubmitSuccess }) => {
  const { onIdentityPickerSuccess } = useKycStore();

  const handleSubmitIdentityPhoto = (values: IdentityPhoto) => {
    onIdentityPickerSuccess({ identityPhoto: values.identityPhoto });
    onSubmitSuccess();
  };

  return (
    <Formik<IdentityPhoto>
      initialValues={{
        identityPhoto: null,
      }}
      validationSchema={KycPickIdentitySchema}
      onSubmit={handleSubmitIdentityPhoto}>
      <KycPickIdentityPhotoInner />
    </Formik>
  );
};
