import React, { useState } from 'react';
import { KycIntroduction } from './KycIntroduction';
import { KycPickIdentityPhoto } from './KycPickIdentityPhoto';
import { KycPickSelfiePhoto } from './KycPickSelfiePhoto';
import { KycUploadProgress } from './KycUploadProgress';
import { KycFormIdentity } from './KycFormIdentity';
import { KycFormAddress } from './KycFormAddress';
import { KycFormResidenceAddress } from './KycFormResidenceAddress';
import { KycFormSummary } from './KycFormSummary';
import { KycSuccessSubmit } from './KycSuccessSubmit';
import { Formik } from 'formik';
import { KycFormProps } from '../types';

interface KycProps {}

export const Kyc: React.FC<KycProps> = () => {
  const [activeState, setActiveState] = useState<string>('INTRODUCTION');
  return (
    <Formik<KycFormProps>
      initialValues={{
        ktpImage: null,
        selfieImage: null,
        fullName: '',
        nik: '',
        dateOfBirth: new Date('1970-01-01'),
        placeOfBirth: '',
        gender: 'male',
        religion: '',
      }}
      onSubmit={value => console.log(value)}>
      <React.Fragment>
        {activeState === 'INTRODUCTION' && (
          <KycIntroduction onNextStep={() => setActiveState('IDENTITY-PHOTO')} />
        )}
        {activeState === 'IDENTITY-PHOTO' && (
          <KycPickIdentityPhoto onSubmit={() => setActiveState('UPLOAD-PROGRESS')} />
        )}
        {activeState === 'UPLOAD-PROGRESS' && (
          <KycUploadProgress onFinishCheckImage={() => setActiveState('IDENTITY-FORM')} />
        )}

        {activeState === 'IDENTITY-FORM' && (
          <KycFormIdentity
            onSubmit={() => setActiveState('SELFIE-PHOTO')}
            goBack={() => setActiveState('IDENTITY-PHOTO')}
          />
        )}

        {activeState === 'SELFIE-PHOTO' && (
          <KycPickSelfiePhoto
            onSubmit={() => setActiveState('ADDRESS-FORM')}
            goBack={() => setActiveState('IDENTITY-FORM')}
          />
        )}

        {activeState === 'ADDRESS-FORM' && (
          <KycFormAddress
            onSubmit={() => setActiveState('RESIDENCE-ADDRESS-FORM')}
            goBack={() => setActiveState('IDENTITY-FORM')}
          />
        )}
        {activeState === 'RESIDENCE-ADDRESS-FORM' && (
          <KycFormResidenceAddress
            onSubmit={() => setActiveState('SUMMARY-FORM')}
            goBack={() => setActiveState('ADDRESS-FORM')}
          />
        )}
        {activeState === 'SUMMARY-FORM' && (
          <KycFormSummary
            onSubmit={() => setActiveState('SUCCESS-SUBMIT')}
            goBack={() => setActiveState('RESIDENCE-ADDRESS-FORM')}
          />
        )}
        {activeState === 'SUCCESS-SUBMIT' && <KycSuccessSubmit />}
      </React.Fragment>
    </Formik>
  );
};
