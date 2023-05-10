import * as Yup from 'yup';

export const KycFormIdentitySchema: Yup.AnyObjectSchema = Yup.object().shape({
  fullName: Yup.string().required('Nama lengkap harus di isi'),
  nik: Yup.string()
    .required('NIK harus di isi')
    .min(16, 'NIK harus terdiri dari 16 karakter')
    .max(16, 'NIK harus terdiri dari 16 karakter'),
  dateOfBirth: Yup.date().required('Tanggal dan tahun lahir harus di isi'),
  placeOfBirth: Yup.string().required('Tempat lahir harus di isi'),
  gender: Yup.string().required('Jenis kelamin harus di isi'),
});
