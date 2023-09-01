import * as Yup from 'yup';

export const UserExpertiseFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  interestOrExpertise: Yup.string().required('Masukan Expertise anda'),
});
