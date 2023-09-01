import React, { useState } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { ActiveSection, Roles } from '../forms/contactUs';
import { useContactUsStore } from '../stores';
import { IdentitySectionForm } from '../forms/IdentitySectionForm';
import { RoleSelectionForm } from '../forms/RoleSelectionSectionForm';
import { CompanySectionForm } from '../forms/investor/CompanySectionForm';
import { UserExpertiseSectionForm } from '../forms/Summary/UserExpertiseSectionForm';
import { ReasonSectionForm } from '../forms/fundraiser/ReasonSectionForm';
import { ExperienceSectionForm } from '../forms/fundManager/ExperienceSectionForm';
import { navigate } from 'gatsby';
import { InvestmentRangeSectionForm } from '../forms/investor/InvestmentRangeSectionForm';
import { StartupInvestmentStatusSectionForm } from '../forms/investor/StartupInvestmentStatusSectionForm';
import { RdnStatusSectionForm } from '../forms/investor/RdnStatusSectionForm';
import { FundraiseRangeSectionForm } from '../forms/fundraiser/FundraiseRangeSectionForm';
import { CurrentInvestorSectionForm } from '../forms/fundraiser/CurrentInvestorSectionForm';
import { PitchdeckSectionForm } from '../forms/fundraiser/PitchdeckSectionForm';
import { CompanyDescriptionSectionForm } from '../forms/fundraiser/CompanyDescriptionSectionForm';
import { FundsManagedSectionForm } from '../forms/fundManager/FundsManagedSectionForm';
import { CredentialsSectionForm } from '../forms/fundManager/CredentialsSectionForm';
import { PurposeSectionForm } from '../forms/fundManager/PurposeSectionForm';
import { UserArrangementSectionForm } from '../forms/Summary/UserArrangementSectionForm';
import { UserPreferedLanguageSectionForm } from '../forms/Summary/UserPreferedLanguageSectionForm';
import { ThankYouSection } from './ThankYou';
import { useCreateContactUsMutation } from '../api/useCreateContactUsMutation';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

interface ContactUsProps {}

export const ContactUs: React.FC<ContactUsProps> = () => {
  const [lastRoleActiveState, setLastRoleActiveState] = useState<ActiveSection>(
    ActiveSection.UNDEFINED,
  );
  const [activeState, setActiveState] = useState<ActiveSection>(ActiveSection.IDENTITY);
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false);

  const {
    identity,
    userRole,
    investorCompany,
    investorInvestmentRange,
    investorStartupInvestmentStatus,
    investorRdnStatus,
    fundraiseReason,
    fundraiserCompanyDescription,
    fundraiseRange,
    fundraiserCurrentInvestor,
    fundManagerExperience,
    fundManagerFundsManage,
    fundManagerCredentials,
    fundManagerPurpose,
    pitchDeck,
    userExpertise,
    userArrangement,
    userPreferedLanguage,
  } = useContactUsStore();

  const onLoadingScreenActive = (callback: () => void) => {
    setLoadingScreen(true);
    setTimeout(() => {
      setLoadingScreen(false);
      callback();
    }, 500);
  };

  const { mutateAsync: createContactUs } = useCreateContactUsMutation();

  const onSubmit = async () => {
    try {
      await createContactUs({
        fullName: identity?.fullName || '',
        email: identity?.email || '',
        phoneNumber: identity?.phoneNumber || '',
        userRole: userRole?.userRole || '',
        occupation: investorCompany?.occupationOrBusiness || '',
        companyName: investorCompany?.companyName || '',
        domicileCity: investorCompany?.domicileCity || '',
        investmentRange: investorInvestmentRange?.investmentAmountRange || '',
        startupInvestmentStatus: investorStartupInvestmentStatus?.startupInvestmentStatus || '',
        rdnStatus: investorRdnStatus?.isRdnMoreThanTwoYears === 'YES' ? true : false,
        fundraisingReason: fundraiseReason?.fundraisingReason || '',
        fundraisingRange: fundraiseRange?.fundraisingAmountRange || '',
        pitchDeck: pitchDeck || '',
        companyDescription: fundraiserCompanyDescription?.companyDescription || '',
        currentInvestor: fundraiserCurrentInvestor?.currentInvestor || '',
        experience: fundManagerExperience?.yearsOfExperience || '',
        fundsManaged: fundManagerFundsManage?.fundsManaged || '',
        credentials: Object.values(fundManagerCredentials || {}) || '',
        purpose: fundManagerPurpose?.fundManagementPurpose || '',
        expertise: userExpertise?.interestOrExpertise || '',
        arrange: userArrangement?.arrangementType || '',
        preferedLanguage: userPreferedLanguage?.preferredLanguage || '',
      });
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;
      errors &&
        errors.forEach(error => {
          return notifications.show({
            color: 'red',
            message: error,
          });
        });
    }
  };

  return (
    <React.Fragment>
      {activeState === ActiveSection.IDENTITY && (
        <IdentitySectionForm
          goBack={() => {
            navigate('/');
          }}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.ROLE_SELECTION);
              setLastRoleActiveState(ActiveSection.IDENTITY);
            });
          }}
        />
      )}
      {activeState === ActiveSection.ROLE_SELECTION && (
        <RoleSelectionForm
          goBack={() => setActiveState(lastRoleActiveState)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              userRole?.userRole === Roles.INVESTOR
                ? setActiveState(ActiveSection.INVESTOR_COMPANY)
                : userRole?.userRole === Roles.FUNDRAISER
                ? setActiveState(ActiveSection.FUNDRAISER_REASON)
                : userRole?.userRole === Roles.FUND_MANAGER
                ? setActiveState(ActiveSection.FUND_MANAGER_EXPERIENCE)
                : null;
              setLastRoleActiveState(ActiveSection.ROLE_SELECTION);
            });
          }}
        />
      )}

      {/* Start Investor Section */}

      {activeState === ActiveSection.INVESTOR_COMPANY && (
        <CompanySectionForm
          goBack={() => {
            setActiveState(ActiveSection.ROLE_SELECTION);
          }}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.INVESTOR_INVESTMENT_RANGE);
            });
          }}
        />
      )}
      {activeState === ActiveSection.INVESTOR_INVESTMENT_RANGE && (
        <InvestmentRangeSectionForm
          goBack={() => setActiveState(ActiveSection.INVESTOR_COMPANY)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.INVESTOR_STARTUP_INVESTMENT_STATUS);
            });
          }}
        />
      )}
      {activeState === ActiveSection.INVESTOR_STARTUP_INVESTMENT_STATUS && (
        <StartupInvestmentStatusSectionForm
          goBack={() => setActiveState(ActiveSection.INVESTOR_INVESTMENT_RANGE)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.INVESTOR_RDN_STATUS);
            });
          }}
        />
      )}
      {activeState === ActiveSection.INVESTOR_RDN_STATUS && (
        <RdnStatusSectionForm
          goBack={() => setActiveState(ActiveSection.INVESTOR_STARTUP_INVESTMENT_STATUS)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.INTEREST);
              setLastRoleActiveState(ActiveSection.INVESTOR_RDN_STATUS);
            });
          }}
        />
      )}

      {/* End Investor Section */}

      {/* Start Fundraiser Section */}

      {activeState === ActiveSection.FUNDRAISER_REASON && (
        <ReasonSectionForm
          goBack={() => setActiveState(ActiveSection.ROLE_SELECTION)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUNDRAISER_COMPANY_DESC);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUNDRAISER_COMPANY_DESC && (
        <CompanyDescriptionSectionForm
          goBack={() => setActiveState(ActiveSection.FUNDRAISER_REASON)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUNDRAISER_FUND_RANGE);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUNDRAISER_FUND_RANGE && (
        <FundraiseRangeSectionForm
          goBack={() => setActiveState(ActiveSection.FUNDRAISER_COMPANY_DESC)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUNDRAISER_INVESTOR_LIST);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUNDRAISER_INVESTOR_LIST && (
        <CurrentInvestorSectionForm
          goBack={() => setActiveState(ActiveSection.FUNDRAISER_FUND_RANGE)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUNDRAISER_PITCHDECK);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUNDRAISER_PITCHDECK && (
        <PitchdeckSectionForm
          goBack={() => setActiveState(ActiveSection.FUNDRAISER_INVESTOR_LIST)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.INTEREST);
              setLastRoleActiveState(ActiveSection.FUNDRAISER_PITCHDECK);
            });
          }}
        />
      )}

      {/* End Fundraiser Section */}

      {/* Start Fund Manager Section */}

      {activeState === ActiveSection.FUND_MANAGER_EXPERIENCE && (
        <ExperienceSectionForm
          goBack={() => setActiveState(ActiveSection.ROLE_SELECTION)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUND_MANAGER_FUNDS_MANAGED);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUND_MANAGER_FUNDS_MANAGED && (
        <FundsManagedSectionForm
          goBack={() => setActiveState(ActiveSection.FUND_MANAGER_EXPERIENCE)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUND_MANAGER_CREDENTIALS);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUND_MANAGER_CREDENTIALS && (
        <CredentialsSectionForm
          goBack={() => setActiveState(ActiveSection.FUND_MANAGER_FUNDS_MANAGED)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.FUND_MANAGER_PURPOSE);
            });
          }}
        />
      )}
      {activeState === ActiveSection.FUND_MANAGER_PURPOSE && (
        <PurposeSectionForm
          goBack={() => setActiveState(ActiveSection.FUND_MANAGER_CREDENTIALS)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.INTEREST);
              setLastRoleActiveState(ActiveSection.FUND_MANAGER_PURPOSE);
            });
          }}
        />
      )}

      {/* End Fund Manager Section */}

      {activeState === ActiveSection.INTEREST && (
        <UserExpertiseSectionForm
          goBack={() => setActiveState(lastRoleActiveState)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.ARRANGE);
            });
          }}
        />
      )}
      {activeState === ActiveSection.ARRANGE && (
        <UserArrangementSectionForm
          goBack={() => setActiveState(ActiveSection.INTEREST)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              setActiveState(ActiveSection.PREFERED_LANGUAGE);
            });
          }}
        />
      )}
      {activeState === ActiveSection.PREFERED_LANGUAGE && (
        <UserPreferedLanguageSectionForm
          goBack={() => setActiveState(ActiveSection.ARRANGE)}
          onSubmitSuccess={() => {
            onLoadingScreenActive(() => {
              onSubmit();
              setActiveState(ActiveSection.THANK_YOU);
            });
          }}
        />
      )}
      {activeState === ActiveSection.THANK_YOU && <ThankYouSection />}
      <LoadingOverlay h="100%" visible={loadingScreen} overlayBlur={0} overlayOpacity={0.1} />
    </React.Fragment>
  );
};
