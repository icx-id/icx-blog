export interface KycFormProps {
  ktpImage: File | null;
  selfieImage: File | null;
  fullName: string;
  nik: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female';
  religion?: string;

  fullAddress: string;
  provinceAddress: string;
  cityAddress: string;
  districtAddress: string;
  subDistrictAddress: string;
  postalCodeAddress: string;

  domicileAddress: string;
  domicileProvince: string;
  domicileTown: string;
  domicileDistrict: string;
  domicileSubdistrict: string;
  domicilePostalCode: string;
}
