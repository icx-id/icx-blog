export enum Roles {
  INVESTOR = 'INVESTOR',
  FUNDRAISER = 'FUNDRAISER',
  FUND_MANAGER = 'FUND MANAGER',
}

export enum ActiveSection {
  UNDEFINED = 'UNDEFINED',
  IDENTITY = 'IDENTITY',
  ROLE_SELECTION = 'ROLE_SELECTION',
  INVESTOR_COMPANY = 'INVESTOR_COMPANY',
  INVESTOR_INVESTMENT_RANGE = 'INVESTOR_INVESTMENT_RANGE',
  INVESTOR_STARTUP_INVESTMENT_STATUS = 'INVESTOR_STARTUP_INVESTMENT_STATUS',
  INVESTOR_RDN_STATUS = 'INVESTOR_RDN_STATUS',
  FUNDRAISER_REASON = 'FUNDRAISER_REASON',
  FUNDRAISER_COMPANY_DESC = 'FUNDRAISER_COMPANY_DESC',
  FUNDRAISER_FUND_RANGE = 'FUNDRAISER_FUND_RANGE',
  FUNDRAISER_INVESTOR_LIST = 'FUNDRAISER_INVESTOR_LIST',
  FUNDRAISER_PITCHDECK = 'FUNDRAISER_PITCHDECK',
  FUND_MANAGER_EXPERIENCE = 'FUND_MANAGER_EXPERIENCE',
  FUND_MANAGER_FUNDS_MANAGED = 'FUND_MANAGER_FUNDS_MANAGED',
  FUND_MANAGER_CREDENTIALS = 'FUND_MANAGER_CREDENTIALS',
  FUND_MANAGER_PURPOSE = 'FUND_MANAGER_PURPOSE',
  INTEREST = 'INTEREST',
  ARRANGE = 'ARRANGE',
  PREFERED_LANGUAGE = 'PREFERED_LANGUAGE',
  THANK_YOU = 'THANK_YOU',
}

export enum InvestmentRange {
  UNDER_100MIO = '< Rp. 100.000.000',
  BETWEEN_100MIO_TO_500MIO = 'Rp. 100.000.000 - Rp. 500.000.000',
  BETWEEN_500MIO_TO_1BIO = 'Rp. 500.000.000 - Rp. 1.000.000.000',
  ABOVE_1BIO = '> Rp. 1.000.000.000',
}

export enum FundraisingRange {
  BETWEEN_100K_TO_500K = '$100.000 - $500.000',
  BETWEEN_500K_TO_1MIO = '$500.000 - $1.000.000',
  BETWEEN_1MIO_TO_5MIO = '$1.000.000 - $5.000.000',
  BETWEEN_5MIO_TO_10MIO = '$5.000.000 - $10.000.000',
  ABOVE_10MIO = '> $10.000.000',
}

export enum Experience {
  BETWEEN_1_TO_3Y = '1-3 years',
  BETWEEN_3_TO_5Y = '3-5 years',
  BETWEEN_5_TO_10Y = '5-10 years',
  ABOVE_10Y = '10+ years',
}

export enum StartupInvestmentStatus {
  YES_ANGEL = 'Yes, as an Angel Investor',
  YES_PARTNER = 'Yes, as a Limited Partner of a fund',
  NO = 'No',
}

export enum Purpose {
  START = 'Start a new fund with our service',
  INVEST = 'Invest your fund in our projects',
}

export enum Arrange {
  CALL = 'Call',
  ONLINE_MEETING = 'Online Meeting',
  OFFICE_VISIT = 'Office Visit',
}

export enum PreferedLanguage {
  ENGLISH = 'ENGLISH',
  INDONESIA = 'INDONESIA',
}

export interface Identity {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface UserRole {
  userRole: Roles | Roles.INVESTOR;
}

export interface InvestorCompany {
  occupationOrBusiness: string;
  companyName: string;
  domicileCity: string;
}

export interface InvestorInvestmentRange {
  investmentAmountRange: InvestmentRange;
}
export interface InvestorStartupInvestmentStatus {
  startupInvestmentStatus: StartupInvestmentStatus;
}

export interface InvestorRdnStatus {
  isRdnMoreThanTwoYears: string;
}

export interface FundraiseReason {
  fundraisingReason: string;
}

export interface FundraiseRange {
  fundraisingAmountRange: FundraisingRange;
}

export interface FundraiserPitchdeck {
  pitchDeck: File | null;
}

export interface FundraiserCompanyDescription {
  companyDescription: string;
}

export interface FundraiserCurrentInvestor {
  currentInvestor: string;
}

export interface FundManagerExperience {
  yearsOfExperience: Experience;
}

export interface FundManagerFundsManaged {
  fundsManaged: string;
}

export interface FundManagerCredentials {
  credential: string;
}

export interface FundManagerPurpose {
  fundManagementPurpose: Purpose;
}

export interface UserExpertise {
  interestOrExpertise: string;
}
export interface UserArrangement {
  arrangementType: Arrange;
}
export interface userPrederedLanguage {
  preferredLanguage: PreferedLanguage;
}
export interface ContactUsSectionsProps {
  goBack: () => void;
}

export interface SectionsFormProps {
  onSubmitSuccess: () => void;
  goBack: () => void;
}
