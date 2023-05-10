import * as Yup from 'yup';

export const KycFormAddressSchema: Yup.AnyObjectSchema = Yup.object().shape({
  identityAddress: Yup.string().required('Alamat lengkap harus diisi'),
  identityProvince: Yup.string().required('Provinsi harus diisi'),
  identityTown: Yup.string().required('Kota/Kabupaten harus diisi'),
  identityDistrict: Yup.string().required('Kecamatan harus diisi'),
  identitySubdistrict: Yup.string().required('Kelurahan harus diisi'),
  identityPostalCode: Yup.string().required('Kode pos harus diisi'),
});
