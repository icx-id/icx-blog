export interface KycFormProps {
  ktpImage: File | null;
  selfieImage: File | null;
  fullName: string;
  nik: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  gender: 'male' | 'female';
  religion?: string;
}
