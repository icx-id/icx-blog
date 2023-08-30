import React, { useState } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { ActiveSection, Roles } from '../forms/contactUs';
import { useContactUsStore } from '../stores';
import { IdentitySectionForm } from '../forms/IdentitySectionForm';
import { RoleSelectionForm } from '../forms/RoleSelectionSectionForm';
import { InvestorSectionForm } from '../forms/InvestorSectionForm';
import { ContactUsSummaryForm } from '../forms/SummarySectionForm';
import { FundraiserSectionForm } from '../forms/FundraiserSectionForm';
import { FundManagerSectionForm } from '../forms/FundManagerSectionForm';

interface ContactUsProps {}

export const ContactUs: React.FC<ContactUsProps> = () => {
  const [activeState, setActiveState] = useState<ActiveSection>(ActiveSection.IDENTITY);
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false);

  const { userRole } = useContactUsStore();

  const onLoadingScreenActive = (callback: () => void) => {
    setLoadingScreen(true);
    setTimeout(() => {
      setLoadingScreen(false);
      callback();
    }, 500);
  };

  return (
    <React.Fragment>
      {activeState === ActiveSection.IDENTITY && (
        <IdentitySectionForm
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => setActiveState(ActiveSection.ROLE_SELECTION));
          }}
        />
      )}
      {activeState === ActiveSection.ROLE_SELECTION && (
        <RoleSelectionForm
          goBack={() => setActiveState(ActiveSection.IDENTITY)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => setActiveState(ActiveSection.COMPANY_PROFILE));
          }}
        />
      )}
      {activeState === ActiveSection.COMPANY_PROFILE && userRole === Roles.INVESTOR && (
        <InvestorSectionForm
          goBack={() => setActiveState(ActiveSection.ROLE_SELECTION)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => setActiveState(ActiveSection.CONTACTUS_SUMMARY));
          }}
        />
      )}
      {activeState === ActiveSection.COMPANY_PROFILE && userRole === Roles.FUNDRAISER && (
        <FundraiserSectionForm
          goBack={() => setActiveState(ActiveSection.ROLE_SELECTION)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => setActiveState(ActiveSection.CONTACTUS_SUMMARY));
          }}
        />
      )}
      {activeState === ActiveSection.COMPANY_PROFILE && userRole === Roles.FUND_MANAGER && (
        <FundManagerSectionForm
          goBack={() => setActiveState(ActiveSection.ROLE_SELECTION)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => setActiveState(ActiveSection.CONTACTUS_SUMMARY));
          }}
        />
      )}
      {activeState === ActiveSection.CONTACTUS_SUMMARY && (
        <ContactUsSummaryForm
          goBack={() => setActiveState(ActiveSection.COMPANY_PROFILE)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => console.log('API call'));
          }}
        />
      )}
      <LoadingOverlay h="100%" visible={loadingScreen} overlayBlur={0} overlayOpacity={0.1} />
    </React.Fragment>
  );
};
