import React, { useState } from 'react';
import { SectionPersonalInformation } from './components/SectionPersonalInformation';
import { SectionCompanyInformation } from './components/SectionCompanyInformationForm';
import { SectionIdentityPickerPhoto } from './components/SectionIdentityPickerPhoto';
import { SectionPitchdeckPickerFile } from './components/SectionPitchdeckPickerFile';
import { RegisterFundraiseSuccess } from './components/RegisterFundraiseSuccess';
import { RegisterFundraiseState } from '../types';

export const StartFundraise: React.FC = () => {
  const [activeState, setActiveState] = useState<RegisterFundraiseState>(
    RegisterFundraiseState.PERSONAL_INFORMATION,
  );

  return (
    <>
      {activeState === RegisterFundraiseState.PERSONAL_INFORMATION && (
        <SectionPersonalInformation
          onSubmitSuccess={() => setActiveState(RegisterFundraiseState.PICKER_IDENTITY)}
        />
      )}
      {activeState === RegisterFundraiseState.PICKER_IDENTITY && (
        <SectionIdentityPickerPhoto
          goBack={() => setActiveState(RegisterFundraiseState.PERSONAL_INFORMATION)}
          onSubmitSuccess={() => setActiveState(RegisterFundraiseState.COMPANY_INFORMATION)}
        />
      )}
      {activeState === RegisterFundraiseState.COMPANY_INFORMATION && (
        <SectionCompanyInformation
          goBack={() => setActiveState(RegisterFundraiseState.PICKER_IDENTITY)}
          onSubmitSuccess={() => setActiveState(RegisterFundraiseState.PICKER_PITCHDECK)}
        />
      )}
      {activeState === RegisterFundraiseState.PICKER_PITCHDECK && (
        <SectionPitchdeckPickerFile
          goBack={() => setActiveState(RegisterFundraiseState.COMPANY_INFORMATION)}
          onSubmitSuccess={() => {
            setActiveState(RegisterFundraiseState.REGISTER_SUCCESS);
          }}
        />
      )}
      {activeState === RegisterFundraiseState.REGISTER_SUCCESS && <RegisterFundraiseSuccess />}
    </>
  );
};
