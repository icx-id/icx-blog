export interface KycFormProps {
  identityPhoto: File | null;
  identitySelfie: File | null;
  fullName: string;
  nik: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female';
  religion: string;

  identityAddress: string;
  identityProvince: string;
  identityTown: string;
  identityDistrict: string;
  identitySubdistrict: string;
  identityPostalCode: string;

  domicileAddress: string;
  domicileProvince: string;
  domicileTown: string;
  domicileDistrict: string;
  domicileSubdistrict: string;
  domicilePostalCode: string;
}

export enum MaritalStatus {
  MARRIED = 'married',
  SINGLE = 'single',
}

export interface AddressIdentity {
  identityAddress: string;
  identityProvince: string;
  identityTown: string;
  identityDistrict: string;
  identitySubdistrict: string;
  identityPostalCode: string;
}

export interface AddressDomicile {
  domicileAddress: string;
  domicileProvince: string;
  domicileTown: string;
  domicileDistrict: string;
  domicileSubdistrict: string;
  domicilePostalCode: string;
}

export interface IdentityInformation {
  fullName: string;
  nik: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female';
  religion: string;
}

export interface IdentityPhoto {
  identityPhoto: File | null;
}

export interface IdentitySelfie {
  identitySelfie: File | null;
}

export interface OCRAddressIdentity extends Omit<AddressIdentity, 'identityPostalCode'> {}
