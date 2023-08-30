import * as Yup from 'yup';

export const FundraiserSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  fundraisingReason: Yup.string().required('Sebutkan alasan anda ingin melakukan fundraising'),
  companyDescription: Yup.string().required('Deskripsikan company anda'),
  currentInvestor: Yup.string().required('Investor berjalan tidak boleh kosong'),
});
