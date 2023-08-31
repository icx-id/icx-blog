import * as Yup from 'yup';

export const CompanyInformationSchema: Yup.AnyObjectSchema = Yup.object().shape({
  companyName: Yup.string().required('Nama Perusahaan harus di isi'),
  companyAddress: Yup.string().required('Alamat Perusahaan harus di isi'),
  brandBusinessEntity: Yup.string().required('Brand Business Entity harus di isi'),
  companyEmail: Yup.string().required('Email Perusahaan harus di isi'),
  companyWebsite: Yup.string().required('Website Perusahaan harus di isi'),
  companyPhoneNumber: Yup.string()
    .matches(
      /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
      'Format nomor Telepon salah',
    )
    .required('Nomor Telepin Perusahaan harus di isi'),
});
