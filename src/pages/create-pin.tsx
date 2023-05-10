import React, { useState } from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { SiteMetadata } from '~/components';
import { CreatePin, CreatePinIntroduction } from '~/features/pin/';

const CreatePinPage: React.FC<PageProps> = () => {
  const [activeState, setActiveState] = useState<string>('INTRODUCTION');
  const onSubmitSuccess = () => {
    navigate(`/kyc`);
  };

  return (
    <React.Fragment>
      {activeState === 'INTRODUCTION' && (
        <CreatePinIntroduction onNextState={() => setActiveState('CREATE-PIN')} />
      )}
      {activeState === 'CREATE-PIN' && <CreatePin onSubmitSuccess={onSubmitSuccess} />}
    </React.Fragment>
  );
};

export default CreatePinPage;

export const Head: HeadFC = () => <SiteMetadata title="Create PIN" />;
