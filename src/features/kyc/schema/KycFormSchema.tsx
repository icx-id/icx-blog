import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const KycFormSchema: Yup.AnyObjectSchema = Yup.object().shape({
  ktpImage: Yup.mixed()
    .nullable()
    .test(
      'fileSize',
      'File foto KTP tidak melebihi 1 MB',
      (value: any) => !value || (value && value.size <= 1024 * 1024),
    )
    .test(
      'fileFormat',
      'Format yang di terima hanya JPG, JPEG dan PNG',
      (value: any) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),
  selfieImage: Yup.mixed()
    .nullable()
    .test(
      'fileSize',
      'File foto Selfie tidak melebihi 1 MB',
      (value: any) => !value || (value && value.size <= 1024 * 1024),
    )
    .test(
      'fileFormat',
      'Format yang di terima hanya JPG, JPEG dan PNG',
      (value: any) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),
  fullName: Yup.string().required('Nama lengkap harus di isi'),
  nik: Yup.string()
    .required('NIK harus di isi')
    .min(16, 'NIK harus terdiri dari 16 karakter')
    .max(16, 'NIK harus terdiri dari 16 karakter'),
  dateOfBirth: Yup.date().required('Tanggal dan tahun lahir harus di isi'),
  placeOfBirth: Yup.string().required('Tempat lahir harus di isi'),
  gender: Yup.string().required('Jenis kelamin harus di isi'),

  // fullAddress: Yup.string().required('Alamat lengkap harus diisi'),
  // provinceAddress: Yup.string().required('Provinsi harus diisi'),
  // cityAddress: Yup.string().required('Kota/Kabupaten harus diisi'),
  // districtAddress: Yup.string().required('Kecamatan harus diisi'),
  // subDistrictAddress: Yup.string().required('Kelurahan harus diisi'),
  // postalCodeAddress: Yup.string().required('Kode pos harus diisi'),

  // domicileAddress: Yup.string().required('Alamat lengkap harus diisi'),
  // domicileProvince: Yup.string().required('Provinsi harus diisi'),
  // domicileTown: Yup.string().required('Kota/Kabupaten harus diisi'),
  // domicileDistrict: Yup.string().required('Kecamatan harus diisi'),
  // domicileSubdistrict: Yup.string().required('Kelurahan harus diisi'),
  // domicilePostalCode: Yup.string().required('Kode pos harus diisi'),
});
