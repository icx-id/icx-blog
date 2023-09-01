import { StateCreator, create } from 'zustand';
import {
  Identity,
  InvestorCompany,
  InvestorInvestmentRange,
  InvestorStartupInvestmentStatus,
  FundraiseRange,
  FundraiserCurrentInvestor,
  FundraiserCompanyDescription,
  InvestorRdnStatus,
  FundraiseReason,
  UserRole,
  FundManagerExperience,
  FundManagerFundsManaged,
  FundManagerCredentials,
  FundManagerPurpose,
  UserExpertise,
  UserArrangement,
  userPrederedLanguage,
  Roles,
  PreferedLanguage,
} from '../forms/contactUs';

type ContactUsSlice = {
  identity: Identity | null;
  userRole: UserRole | null;
  investorCompany: InvestorCompany | null;
  investorInvestmentRange: InvestorInvestmentRange | null;
  investorStartupInvestmentStatus: InvestorStartupInvestmentStatus | null;
  investorRdnStatus: InvestorRdnStatus | null;
  fundraiseReason: FundraiseReason | null;
  fundraiserCompanyDescription: FundraiserCompanyDescription | null;
  fundraiseRange: FundraiseRange | null;
  fundraiserCurrentInvestor: FundraiserCurrentInvestor | null;
  fundManagerExperience: FundManagerExperience | null;
  fundManagerFundsManage: FundManagerFundsManaged | null;
  fundManagerCredentials: FundManagerCredentials | null;
  fundManagerPurpose: FundManagerPurpose | null;
  pitchDeck: File | null;
  userExpertise: UserExpertise | null;
  userArrangement: UserArrangement | null;
  userPreferedLanguage: userPrederedLanguage | null;
  onIdentitySuccess: (identity: Identity) => void;
  onInvestorCompanySectionSuccess: (investor: InvestorCompany) => void;
  onInvestorInvestmentRangeSectionSuccess: (
    investorInvestmentRange: InvestorInvestmentRange,
  ) => void;
  onInvestorStartupInvestmentStatusSectionSuccess: (
    investorStartupInvestmentStatus: InvestorStartupInvestmentStatus,
  ) => void;
  onInvestorRdnStatusSectionSuccess: (investorRdnStatus: InvestorRdnStatus) => void;
  onFundraiseReasonSectionSuccess: (fundraiseReason: FundraiseReason) => void;
  onFundraiserCompanyDescriptionSectionSuccess: (
    fundraiserCompanyDescription: FundraiserCompanyDescription,
  ) => void;
  onFundraiseRangeSectionSuccess: (fundraiseRange: FundraiseRange) => void;
  onFundraiserCurrentInvestorSectionSuccess: (
    fundraiserCurrentInvestor: FundraiserCurrentInvestor,
  ) => void;
  onPitchDeckInputSuccess: ({ pitchDeck }: { pitchDeck: File | null }) => void;
  onFundManagerExperienceSuccess: (fundManagerExperience: FundManagerExperience) => void;
  onRoleSelectionSuccess: (userRole: UserRole) => void;
  onFundManagerFundsManagedSuccess: (fundManagerFundsManage: FundManagerFundsManaged) => void;
  onFundManagerCredentialsSuccess: (fundManagerCredentials: FundManagerCredentials) => void;
  onFundManagerPurposeSuccess: (fundManagerPurpose: FundManagerPurpose) => void;
  onUserExpertiseSuccess: (userExpertise: UserExpertise) => void;
  onUserArrangementSuccess: (userArrangement: UserArrangement) => void;
  onUserPreferedLanguageSuccess: (userPrederedLanguage: userPrederedLanguage) => void;
};

const createContactUsSlice: StateCreator<ContactUsSlice, [], [], ContactUsSlice> = set => ({
  identity: null,
  userRole: { userRole: Roles.INVESTOR },
  investorCompany: null,
  investorInvestmentRange: null,
  investorStartupInvestmentStatus: null,
  investorRdnStatus: null,
  fundraiseReason: null,
  fundraiserCompanyDescription: null,
  fundraiseRange: null,
  fundraiserCurrentInvestor: null,
  fundManagerExperience: null,
  fundManagerFundsManage: null,
  fundManagerCredentials: null,
  fundManagerPurpose: null,
  pitchDeck: null,
  userExpertise: null,
  userArrangement: null,
  userPreferedLanguage: { preferredLanguage: PreferedLanguage.INDONESIA },
  onUserExpertiseSuccess: payload => {
    set(() => ({ ...payload, userExpertise: payload }));
  },
  onUserArrangementSuccess: payload => {
    set(() => ({ ...payload, userArrangement: payload }));
  },
  onUserPreferedLanguageSuccess: payload => {
    set(() => ({ ...payload, userPreferedLanguage: payload }));
  },
  onIdentitySuccess: payload => {
    set(() => ({ ...payload, identity: payload }));
  },
  onInvestorCompanySectionSuccess: payload => {
    set(() => ({ ...payload, investorCompany: payload }));
  },
  onInvestorInvestmentRangeSectionSuccess: payload => {
    set(() => ({ investorInvestmentRange: payload }));
  },
  onInvestorStartupInvestmentStatusSectionSuccess: payload => {
    set(() => ({ ...payload, investorStartupInvestmentStatus: payload }));
  },
  onInvestorRdnStatusSectionSuccess: payload => {
    set(() => ({ ...payload, investorRdnStatus: payload }));
  },
  onFundraiseReasonSectionSuccess: payload => {
    set(() => ({ ...payload, fundraiseReason: payload }));
  },
  onFundraiserCompanyDescriptionSectionSuccess: payload => {
    set(() => ({ ...payload, fundraiserCompanyDescription: payload }));
  },
  onFundraiseRangeSectionSuccess: payload => {
    set(() => ({ ...payload, fundraiseRange: payload }));
  },
  onFundraiserCurrentInvestorSectionSuccess: payload => {
    set(() => ({ ...payload, fundraiserCurrentInvestor: payload }));
  },
  onFundManagerExperienceSuccess: payload => {
    set(() => ({ ...payload, fundManagerExperience: payload }));
  },
  onRoleSelectionSuccess: payload => {
    set(() => ({ ...payload, userRole: payload }));
  },
  onFundManagerFundsManagedSuccess: payload => {
    set(() => ({ ...payload, fundManagerFundsManage: payload }));
  },
  onFundManagerCredentialsSuccess: payload => {
    set(() => ({ ...payload, fundManagerCredentials: payload }));
  },
  onFundManagerPurposeSuccess: payload => {
    set(() => ({ ...payload, fundManagerPurpose: payload }));
  },
  onPitchDeckInputSuccess: payload => {
    set(() => ({ ...payload }));
  },
});

export type IContactUsStore = ContactUsSlice;

export const useContactUsStore = create<IContactUsStore>()((...a) => ({
  ...createContactUsSlice(...a),
}));
