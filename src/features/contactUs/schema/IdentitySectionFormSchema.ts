import * as Yup from 'yup';

export const IdentitySectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  fullName: Yup.string().required('Nama lengkap harus di isi'),
  email: Yup.string().required('Mohon masukan email').email('Please input a valid email address'),
  phoneNumber: Yup.string()
    .required('Please input a phone number')
    .min(9, 'Please input a valid phone number'),
});
