import React from 'react';
import { ContactUsSectionsProps, FundraiserPitchdeck, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { FileButton, Text, UnstyledButton, rem } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { ContactUsContainer } from '../../components/ContactUsContainer';

const PitchdeckSection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { setFieldValue, values, handleSubmit } = useFormikContext<FundraiserPitchdeck>();

  return (
    <ContactUsContainer
      title="Upload your pitch deck"
      desc="Pastikan file berformat PDF dan ukurannya maksimal 5MB."
      bannerText="Fundraiser"
      goBack={goBack}
      onSubmit={handleSubmit}>
      <FileButton onChange={e => setFieldValue('pitchDeck', e)} accept="application/pdf">
        {props => (
          <UnstyledButton
            bg="#00C48F"
            w={rem(120)}
            h={rem(120)}
            pb={7}
            style={{
              borderRadius: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            {...props}>
            <IconUpload color="#FFF" size={rem(50)} />
          </UnstyledButton>
        )}
      </FileButton>
      {values.pitchDeck && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {values.pitchDeck.name}
        </Text>
      )}
    </ContactUsContainer>
  );
};

export const PitchdeckSectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { onPitchDeckInputSuccess } = useContactUsStore();

  const handleSubmit = (values: FundraiserPitchdeck) => {
    onPitchDeckInputSuccess({ pitchDeck: values.pitchDeck });
    onSubmitSuccess();
  };

  return (
    <Formik<FundraiserPitchdeck>
      initialValues={{
        pitchDeck: null,
      }}
      onSubmit={handleSubmit}>
      <PitchdeckSection goBack={goBack} />
    </Formik>
  );
};
