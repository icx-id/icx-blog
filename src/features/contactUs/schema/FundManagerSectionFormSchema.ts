import * as Yup from 'yup';

export const FundManagerFundsManagedSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  fundsManaged: Yup.string().required('Masukan jumlah funds yang pernah anda kelola (in $)'),
});

export const FundManagerCredentialsSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  credential: Yup.string().required('Masukan link LinkedIn atau Credentials anda'),
});
