export interface AddressIdentity {
  identityAddress: string;
  identityProvince: string;
  identityTown: string;
  identityDistrict: string;
  identitySubdistrict: string;
  identityPostalCode: string;
}
export interface OCRAddressIdentity extends Omit<AddressIdentity, 'identityPostalCode'> {}

export interface AddressDomicile {
  domicileAddress: string;
  domicileProvince: string;
  domicileTown: string;
  domicileDistrict: string;
  domicileSubdistrict: string;
  domicilePostalCode: string;
}

export interface ICreateAddress {
  fullAddress: string;
  provinceAddress: string;
  cityAddress: string;
  districtAddress: string;
  subDistrictAddress: string;
  postalCodeAddress: string;
}
export interface Province {
  provinceCode: string;
  provinceName: string;
  provinceNameEn: string;
}

export interface Postal {
  subDistrict: string;
  district: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export interface AddressListUsed {
  subDistrict: string;
  district: string;
  city: string;
  provinceCode: string;
  postalCode: string;
  provinceName: string;
  provinceNameEn: string;
}

export interface IIdentityForm {
  fullName: string;
  nik: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  gender: 'male' | 'female';
  religion?: string;
}

export enum KycType {
  IDENTITY = 'identity',
  INVESTOR_PROFILE = 'investor-profile',
  RISK_PROFILE = 'risk-profile',
  BANK_ACCOUNT = 'bank-account',
}

export enum KycStatus {
  EMPTY = 'empty',
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending',
  SENT = 'sent',
}

export interface KycError {
  field: string;
  message: string;
}

export interface IKycSummary {
  type: KycType;
  status: KycStatus;
  errors: KycError[] | null;
}

export interface IBankAccountValidationType {
  bankAccountToken: string;
  fullname: string;
}

export interface RiskProfileData {
  investmentGoal: string;
  incomeSource: string;
  annualIncomeAmount: string;
}

export interface RdnData {
  rdnAccountDateCreation: Date;
  rdnBank: string;
  rdnAccountNumber: string;
  rdnOwnershipProof: DocumentPickerResponse | null;
}
export interface IBankAccountValidationType {
  bankAccountToken: string;
  fullname: string;
}

export enum MaritalStatus {
  MARRIED = 'married',
  SINGLE = 'single',
}

export interface InvestorProfile {
  education: string;
  occupation: string;
  jobDescription: string;
  npwp?: string;
  motherName: string;
  heir: string;
  heirRelationship: string;
  maritalStatus: MaritalStatus;
  spouseName?: string;
  statusApproval: boolean;
  approved: boolean;
  rejected: boolean;
  remarks: KycError[] | null;
}

export interface InvestorProfileForm {
  education: string;
  occupation: string;
  jobDescription: string;
  npwp?: string;
  motherName: string;
  heir: string;
  heirRelationship: string;
  maritalStatus: MaritalStatus;
  spouseName?: string;
}

export type InvestorProfileFormStep1Type = Pick<
  InvestorProfileForm,
  'education' | 'occupation' | 'jobDescription' | 'npwp'
>;

export type InvestorProfileFormStep2Type = Pick<
  InvestorProfileForm,
  'motherName' | 'heir' | 'heirRelationship' | 'maritalStatus' | 'spouseName'
>;

export interface IRiskProfile {
  user: string;
  investmentGoal: string;
  incomeSource: string;
  annualIncomeAmount: number;
  rdnAvailable?: boolean;
  rdnAccountDateCreation?: Date;
  rdnBank?: string;
  rdnAccountNumber?: string;
  rdnOwnershipProof?: DocumentPickerResponse;
  statusApproval: boolean;
  approved: boolean;
  rejected: boolean;
  remarks: KycError[] | null;
  createdBy: string;
  updatedBy: string;
}

export interface DocumentPickerResponse {
  fileCopyUri: null | string;
  name: null | string;
  size: null | number;
  type: null | string;
  uri: string;
}

export interface IRiskProfileCompleteForm {
  investmentGoal: string;
  incomeSource: string;
  annualIncomeAmount: string;
  rdnAccountDateCreation: Date;
  rdnBank: string;
  rdnAccountNumber: string;
  rdnOwnershipProof: DocumentPickerResponse | null;
}

export type RiskProfileFormStep = Pick<
  IRiskProfileCompleteForm,
  'investmentGoal' | 'incomeSource' | 'annualIncomeAmount'
>;

export type RdnFormStep = Pick<
  IRiskProfileCompleteForm,
  'rdnAccountDateCreation' | 'rdnBank' | 'rdnAccountNumber' | 'rdnOwnershipProof'
>;

export interface IdentityPhoto {
  identityPhoto: File | null;
}

export interface IdentitySelfie {
  identitySelfie: File | null;
}
