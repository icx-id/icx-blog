import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['application/pdf'];

export const PitchdeckFileSchema: Yup.AnyObjectSchema = Yup.object().shape({
  pitchdeckFile: Yup.mixed()
    .nullable()
    .required('File Pitchdeck tidak boleh kosong')
    .test(
      'fileSize',
      'File pitchdeck tidak melebihi 2 MB',
      (value: any) => !value || (value && value.size <= 2000000),
    )
    .test(
      'fileFormat',
      'Format yang di terima hanya PDF',
      (value: any) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),
});
