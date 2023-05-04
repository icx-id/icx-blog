import * as Yup from 'yup';

export const RegisterFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  email: Yup.string().email('Format email salah').required('Email harus di isi'),
  phoneNumber: Yup.string()
    .matches(/^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/, 'Format nomor HP salah')
    .required('Nomor HP harus di isi'),
  password: Yup.string()
    .min(8, 'Kata sandi harus berisi minimal 8 karakter, 1 huruf besar, 1 angka dan 1 simbol.')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
      'Kata sandi harus berisi minimal 8 karakter, 1 huruf besar, 1 angka dan 1 simbol.',
    )
    .required('Kata sandi harus di isi'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Kata sandi tidak sesuai')
    .required('Konfirmasi kata sandi harus di isi'),
  referralCode: Yup.string().when(([val]: string[]) => {
    if (val?.length > 0) {
      return Yup.string()
        .min(10, 'Kode Referal terdiri dari 10 karakter atau kosong')
        .max(10, 'Kode Referal terdiri dari 10 karakter atau kosong')
        .required();
    } else {
      return Yup.string().notRequired();
    }
  }),
});
