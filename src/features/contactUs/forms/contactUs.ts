export enum Roles {
  INVESTOR = 'INVESTOR',
  FUNDRAISER = 'FUNDRAISER',
  FUND_MANAGER = 'FUND_MANAGER',
}

export enum ActiveSection {
  IDENTITY = 'IDENTITY',
  ROLE_SELECTION = 'ROLE_SELECTION',
  COMPANY_PROFILE = 'COMPANY_PROFILE',
  CONTACTUS_SUMMARY = 'CONTACTUS_SUMMARY',
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
  CALL = 'CALL',
  ONLINE_MEETING = 'ONLINE_MEETING',
  OFFICE_VISIT = 'OFFICE_VISIT',
}

export enum PreferedLanguage {
  ENGLISH = 'ENGLISH',
  BAHASA = 'BAHASA',
}

export interface Identity {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface RoleSelection {
  userRole: Roles;
}

export interface Investor {
  occupation: string;
  companyName: string;
  domicileCity: string;
  investmentRange: InvestmentRange;
  startupInvestmentStatus: StartupInvestmentStatus;
  rdnStatus: string;
}

export interface Fundraiser {
  fundraisingReason: string;
  fundraisingRange: FundraisingRange;
  pitchDeck: File | null;
  companyDescription: string;
  currentInvestor: string;
}

export interface FundManager {
  experience: Experience;
  fundsManaged: string;
  credentials: string;
  purpose: Purpose;
}

export interface ContactUsSummary {
  expertise: string;
  arrange: Arrange;
  preferedLanguage: PreferedLanguage;
}
