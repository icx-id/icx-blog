import * as Yup from 'yup';

export const InvestorSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  occupationOrBusiness: Yup.string().required('Masukan occupation anda'),
  companyName: Yup.string().required('Masukan nama company anda'),
  domicileCity: Yup.string().required('masukan kota domisili anda'),
});
