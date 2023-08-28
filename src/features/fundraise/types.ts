export interface PersonalInformation {
  fullName: string;
  roleInCompany: string;
  phoneNumber: string;
  nik: string;
}

export interface CompanyInformation {
  companyName: string;
  companyAddress: string;
  brandBusinessEntity: string;
  companyWebsite: string;
  companyEmail: string;
  companyPhoneNumber: string;
}

export interface IdentityPhoto {
  identityPhoto: File | null;
}

export interface PitchdeckFile {
  pitchdeckFile: File | null;
}

export enum RegisterFundraiseState {
  PERSONAL_INFORMATION = 'PERSONAL_INFORMATION',
  PICKER_IDENTITY = 'PICKER_IDENTITY',
  COMPANY_INFORMATION = 'COMPANY_INFORMATION',
  PICKER_PITCHDECK = 'PICKER_PITCHDECK',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
}
