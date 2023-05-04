import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  username: yup.string().required('Nomor HP atau email harus diisi'),
  password: yup.string().required('Kata sandi harus diisi'),
});
