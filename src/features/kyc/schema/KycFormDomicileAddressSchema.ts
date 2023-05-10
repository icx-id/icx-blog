import * as Yup from 'yup';

export const KycFormDomicileAddressSchema: Yup.AnyObjectSchema = Yup.object().shape({
  domicileAddress: Yup.string().required('Alamat lengkap harus diisi'),
  domicileProvince: Yup.string().required('Provinsi harus diisi'),
  domicileTown: Yup.string().required('Kota/Kabupaten harus diisi'),
  domicileDistrict: Yup.string().required('Kecamatan harus diisi'),
  domicileSubdistrict: Yup.string().required('Kelurahan harus diisi'),
  domicilePostalCode: Yup.string().required('Kode pos harus diisi'),
});
