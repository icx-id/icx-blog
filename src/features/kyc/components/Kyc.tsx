import React, { useState } from 'react';
import { KycIntroduction } from './KycIntroduction';
import { KycPickIdentityPhoto } from './KycPickIdentityPhoto';
import { KycPickSelfiePhoto } from './KycPickSelfiePhoto';
import { KycUploadProgress } from './KycUploadProgress';
import { KycFormIdentity } from './KycFormIdentity';
import { KycFormAddress } from './KycFormAddress';
import { KycFormAddressDomicile } from './KycFormAddressDomicile';
import { KycFormSummary } from './KycFormSummary';
import { KycSuccessSubmit } from './KycSuccessSubmit';
import { LoadingOverlay } from '@mantine/core';

interface KycProps {}

export const Kyc: React.FC<KycProps> = () => {
  const [activeState, setActiveState] = useState<string>('INTRODUCTION');
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false);

  const onLoadingScreenActive = (callback: () => void) => {
    setLoadingScreen(true);
    setTimeout(() => {
      setLoadingScreen(false);
      callback();
    }, 500);
  };

  return (
    <React.Fragment>
      {activeState === 'INTRODUCTION' && (
        <KycIntroduction
          onNextStep={() => {
            onLoadingScreenActive(() => setActiveState('IDENTITY-PHOTO'));
          }}
        />
      )}
      {activeState === 'IDENTITY-PHOTO' && (
        <KycPickIdentityPhoto
          onSubmitSuccess={() => onLoadingScreenActive(() => setActiveState('UPLOAD-PROGRESS'))}
        />
      )}
      {activeState === 'UPLOAD-PROGRESS' && (
        <KycUploadProgress onFinishCheckImage={() => setActiveState('IDENTITY-FORM')} />
      )}

      {activeState === 'IDENTITY-FORM' && (
        <KycFormIdentity
          onSubmitSuccess={() => onLoadingScreenActive(() => setActiveState('SELFIE-PHOTO'))}
          goBack={() => setActiveState('IDENTITY-PHOTO')}
        />
      )}

      {activeState === 'SELFIE-PHOTO' && (
        <KycPickSelfiePhoto
          onSubmitSuccess={() => onLoadingScreenActive(() => setActiveState('ADDRESS-FORM'))}
          goBack={() => setActiveState('IDENTITY-FORM')}
        />
      )}

      {activeState === 'ADDRESS-FORM' && (
        <KycFormAddress
          onSubmitSuccess={() =>
            onLoadingScreenActive(() => setActiveState('ADDRESS-DOMICILE-FORM'))
          }
          goBack={() => setActiveState('IDENTITY-FORM')}
        />
      )}
      {activeState === 'ADDRESS-DOMICILE-FORM' && (
        <KycFormAddressDomicile
          onSubmitSuccess={() => onLoadingScreenActive(() => setActiveState('SUMMARY-FORM'))}
          goBack={() => setActiveState('ADDRESS-FORM')}
        />
      )}

      {activeState === 'SUMMARY-FORM' && (
        <KycFormSummary
          onSubmitSuccess={() => onLoadingScreenActive(() => setActiveState('SUCCESS-SUBMIT'))}
          goBack={() => setActiveState('ADDRESS-DOMICILE-FORM')}
        />
      )}

      {activeState === 'SUCCESS-SUBMIT' && <KycSuccessSubmit />}
      <LoadingOverlay h="100%" visible={loadingScreen} overlayBlur={0} overlayOpacity={0.1} />
    </React.Fragment>
  );
};
