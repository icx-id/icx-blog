import { Input } from '~/components/core/Input';
import React from 'react';
import { ContactUsSectionsProps, InvestorCompany, SectionsFormProps } from '../contactUs';
import { Formik, useFormikContext } from 'formik';
import { useContactUsStore } from '../../stores';
import { InvestorSectionFormSchema } from '../../schema/InvestorSectionFormSchema';
import { ContactUsContainer } from '../../components/ContactUsContainer';

const CompanySection: React.FC<ContactUsSectionsProps> = ({ goBack }) => {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormikContext<InvestorCompany>();

  const buttonDisabled =
    errors.occupationOrBusiness || errors.companyName || errors.domicileCity ? true : false;

  return (
    <ContactUsContainer
      title="Your Company"
      bannerText="Investor"
      goBack={goBack}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}>
      <Input
        name="occupationOrBusiness"
        value={values.occupationOrBusiness}
        label="Your current occupation or business"
        onChange={handleChange}
        error={
          errors.occupationOrBusiness && touched.occupationOrBusiness
            ? errors.occupationOrBusiness
            : ''
        }
        onBlur={handleBlur}
      />
      <Input
        name="companyName"
        value={values.companyName}
        label="Company Name"
        onChange={handleChange}
        error={errors.companyName && touched.companyName ? errors.companyName : ''}
        onBlur={handleBlur}
      />
      <Input
        name="domicileCity"
        value={values.domicileCity}
        label="Domicile City"
        onChange={handleChange}
        error={errors.domicileCity && touched.domicileCity ? errors.domicileCity : ''}
        onBlur={handleBlur}
      />
    </ContactUsContainer>
  );
};

export const CompanySectionForm: React.FC<SectionsFormProps> = ({ onSubmitSuccess, goBack }) => {
  const { investorCompany, onInvestorCompanySectionSuccess } = useContactUsStore();

  const handleSubmit = (values: InvestorCompany) => {
    onInvestorCompanySectionSuccess(values);
    onSubmitSuccess();
  };

  return (
    <Formik<InvestorCompany>
      initialValues={{
        occupationOrBusiness: investorCompany?.occupationOrBusiness || '',
        companyName: investorCompany?.companyName || '',
        domicileCity: investorCompany?.domicileCity || '',
      }}
      validateOnMount={false}
      validationSchema={InvestorSectionFormSchema}
      onSubmit={handleSubmit}>
      <CompanySection goBack={goBack} />
    </Formik>
  );
};
