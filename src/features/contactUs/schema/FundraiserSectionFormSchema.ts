import * as Yup from 'yup';

export const FundraiseReasonSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  fundraisingReason: Yup.string().required('Sebutkan alasan anda ingin melakukan fundraising'),
});

export const FundraisercurrentInvestorSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  currentInvestor: Yup.string().required('Sebutkan alasan anda ingin melakukan fundraising'),
});

export const FundraiserCompanyDescriptionSectionFormSchema: Yup.AnyObjectSchema =
  Yup.object().shape({
    companyDescription: Yup.string().required('Deskripsikan perusahaan anda'),
  });
