import * as Yup from 'yup';

export const ContactUsFormSummarySchema: Yup.AnyObjectSchema = Yup.object().shape({
  expertise: Yup.string().required('Masukan Expertise anda'),
});
