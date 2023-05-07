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
import { Formik } from 'formik';
import { KycFormProps } from '../types';
import { KycFormSchema } from '../schema/KycFormSchema';

interface KycProps {}

export const Kyc: React.FC<KycProps> = () => {
  const [activeState, setActiveState] = useState<string>('INTRODUCTION');

  const handleSubmitAddress = () => {};

  return (
    <Formik<KycFormProps>
      initialValues={{
        ktpImage: null,
        selfieImage: null,

        fullName: '',
        nik: '',
        dateOfBirth: '',
        placeOfBirth: '',
        gender: 'male',
        religion: '',

        fullAddress: '',
        provinceAddress: '',
        cityAddress: '',
        districtAddress: '',
        subDistrictAddress: '',
        postalCodeAddress: '',

        domicileAddress: '',
        domicileProvince: '',
        domicileTown: '',
        domicileDistrict: '',
        domicileSubdistrict: '',
        domicilePostalCode: '',
      }}
      validationSchema={KycFormSchema}
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
            onSubmit={() => setActiveState('ADDRESS-DOMICILE-FORM')}
            goBack={() => setActiveState('IDENTITY-FORM')}
          />
        )}
        {activeState === 'ADDRESS-DOMICILE-FORM' && (
          <KycFormAddressDomicile
            onSubmit={() => setActiveState('SUMMARY-FORM')}
            goBack={() => setActiveState('ADDRESS-FORM')}
          />
        )}
        {activeState === 'SUMMARY-FORM' && (
          <KycFormSummary
            onSubmit={() => setActiveState('SUCCESS-SUBMIT')}
            goBack={() => setActiveState('ADDRESS-DOMICILE-FORM')}
          />
        )}
        {activeState === 'SUCCESS-SUBMIT' && <KycSuccessSubmit />}
      </React.Fragment>
    </Formik>
  );
};
