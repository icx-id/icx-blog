import React from 'react';
import { Input } from '~/components/core/Input';
import { FormContainer } from './FormContainer';
import { Formik, useFormikContext } from 'formik';
import { CompanyInformation } from '../../types';
import { useFundraiseStore } from '../../stores';
import { CompanyInformationSchema } from '../schema/CompanyInformationSchema';

interface SectionCompanyInformationFormInnerProps {
  goBack: () => void;
}
const SectionCompanyInformationFormInner: React.FC<SectionCompanyInformationFormInnerProps> = ({
  goBack,
}) => {
  const { values, handleChange, errors, handleBlur, touched, handleSubmit } =
    useFormikContext<CompanyInformation>();

  const buttonDisabled =
    errors.companyName ||
    errors.companyAddress ||
    errors.brandBusinessEntity ||
    errors.companyWebsite ||
    errors.companyEmail ||
    errors.companyPhoneNumber
      ? true
      : false;

  return (
    <FormContainer
      withBreadcrumbs
      title="Masukan detail perusahaan Anda dan unggah presentasi untuk ditinjau"
      currentStep="3"
      totalStep="4"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="companyName"
        value={values.companyName}
        label="Nama Perusahaan"
        onChange={handleChange}
        error={errors.companyName && touched.companyName ? errors.companyName : ''}
        onBlur={handleBlur}
      />
      <Input
        name="companyAddress"
        value={values.companyAddress}
        label="Kantor Pusat Perusahaan"
        onChange={handleChange}
        error={errors.companyAddress && touched.companyAddress ? errors.companyAddress : ''}
        onBlur={handleBlur}
      />
      <Input
        name="brandBusinessEntity"
        value={values.brandBusinessEntity}
        label="Brand Business Entity"
        onChange={handleChange}
        error={
          errors.brandBusinessEntity && touched.brandBusinessEntity
            ? errors.brandBusinessEntity
            : ''
        }
        onBlur={handleBlur}
      />
      <Input
        name="companyWebsite"
        value={values.companyWebsite}
        label="Situs Web"
        onChange={handleChange}
        error={errors.companyWebsite && touched.companyWebsite ? errors.companyWebsite : ''}
        onBlur={handleBlur}
      />
      <Input
        name="companyEmail"
        value={values.companyEmail}
        label="Email Company"
        onChange={handleChange}
        error={errors.companyEmail && touched.companyEmail ? errors.companyEmail : ''}
        onBlur={handleBlur}
      />
      <Input
        name="companyPhoneNumber"
        value={values.companyPhoneNumber}
        label="Nomor Telepon Perusahaan"
        onChange={handleChange}
        error={
          errors.companyPhoneNumber && touched.companyPhoneNumber ? errors.companyPhoneNumber : ''
        }
        onBlur={handleBlur}
      />
    </FormContainer>
  );
};

interface SectionCompanyInformationProps extends SectionCompanyInformationFormInnerProps {
  onSubmitSuccess: () => void;
}

export const SectionCompanyInformation: React.FC<SectionCompanyInformationProps> = ({
  goBack,
  onSubmitSuccess,
}) => {
  const { companyInformation, onCompanyInformationSuccess } = useFundraiseStore();

  const handleSubmit = (values: CompanyInformation) => {
    onCompanyInformationSuccess({ companyInformation: values });
    onSubmitSuccess();
  };

  return (
    <Formik<CompanyInformation>
      initialValues={{
        companyName: companyInformation?.companyName || '',
        companyAddress: companyInformation?.companyAddress || '',
        brandBusinessEntity: companyInformation?.brandBusinessEntity || '',
        companyWebsite: companyInformation?.companyWebsite || '',
        companyEmail: companyInformation?.companyEmail || '',
        companyPhoneNumber: companyInformation?.companyPhoneNumber || '',
      }}
      validateOnMount={true}
      validationSchema={CompanyInformationSchema}
      onSubmit={handleSubmit}>
      <SectionCompanyInformationFormInner goBack={goBack} />
    </Formik>
  );
};
