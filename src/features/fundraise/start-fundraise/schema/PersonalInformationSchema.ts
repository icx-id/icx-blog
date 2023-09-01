import * as Yup from 'yup';

export const PersonalInformationSchema: Yup.AnyObjectSchema = Yup.object().shape({
  fullName: Yup.string().required('Nama lengkap harus di isi'),
  nik: Yup.string()
    .required('NIK harus di isi')
    .min(16, 'NIK harus terdiri dari 16 karakter')
    .max(16, 'NIK harus terdiri dari 16 karakter'),
  roleInCompany: Yup.string().required('Jabatan di perusahaan harus di isi'),
  phoneNumber: Yup.string()
    .matches(/^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/, 'Format nomor HP salah')
    .required('Nomor HP harus di isi'),
});
