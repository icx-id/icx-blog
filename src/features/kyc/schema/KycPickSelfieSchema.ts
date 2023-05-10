import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const KycPickSelfieSchema: Yup.AnyObjectSchema = Yup.object().shape({
  identitySelfie: Yup.mixed()
    .nullable()
    .required('Foto selfie tidak boleh kosong')
    .test(
      'fileSize',
      'File foto Selfie tidak melebihi 2 MB',
      (value: any) => !value || (value && value.size <= 2000000),
    )
    .test(
      'fileFormat',
      'Format yang di terima hanya JPG, JPEG dan PNG',
      (value: any) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),
});
