import * as Yup from 'yup';

export const FundManagerSectionFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  fundsManaged: Yup.string().required('Masukan jumlah funds yang pernah anda kelola (in $)'),
  credentials: Yup.string().required('Masukan link LinkedIn atau Credentials anda'),
});
