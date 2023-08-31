import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import {
  Arrange,
  Experience,
  FundraisingRange,
  InvestmentRange,
  PreferedLanguage,
  Purpose,
  Roles,
  StartupInvestmentStatus,
} from '../forms/contactUs';
import { ContactUsResponse } from '../types';

interface ContactUsArgs {
  fullName: string;
  email: string;
  phoneNumber: string;
  userRole: Roles | '';
  occupation: string;
  companyName: string;
  domicileCity: string;
  investmentRange: InvestmentRange | '';
  startupInvestmentStatus: StartupInvestmentStatus | '';
  rdnStatus: boolean;
  fundraisingReason: string;
  fundraisingRange: FundraisingRange | '';
  pitchDeck: File | '';
  companyDescription: string;
  currentInvestor: string;
  experience: Experience | '';
  fundsManaged: string;
  credentials: string[];
  purpose: Purpose | '';
  expertise: string;
  arrange: Arrange | '';
  preferedLanguage: PreferedLanguage | '';
}

export const useCreateContactUsMutation = (
  options?: UseMutationOptions<ContactUsResponse, unknown, ContactUsArgs>,
) => {
  const { axios, api } = useApiClient();

  return useMutation(
    async ({
      fullName,
      email,
      phoneNumber,
      userRole,
      occupation,
      companyName,
      domicileCity,
      investmentRange,
      startupInvestmentStatus,
      rdnStatus,
      fundraisingReason,
      fundraisingRange,
      pitchDeck,
      companyDescription,
      currentInvestor,
      experience,
      fundsManaged,
      credentials,
      purpose,
      expertise,
      arrange,
      preferedLanguage,
    }: ContactUsArgs) => {
      const contactUsForm = new FormData();
      contactUsForm.append('fullName', fullName);
      contactUsForm.append('email', email);
      contactUsForm.append('phoneNumber', phoneNumber);
      contactUsForm.append('userRole', userRole);
      contactUsForm.append('occupationOrBusiness', occupation);
      contactUsForm.append('companyName', companyName);
      contactUsForm.append('domicileCity', domicileCity);
      contactUsForm.append('investmentAmountRange', investmentRange);
      contactUsForm.append('startupInvestmentStatus', startupInvestmentStatus);
      contactUsForm.append('isRdnAtLeastTwoYears', JSON.stringify(rdnStatus));
      contactUsForm.append('fundraisingReason', fundraisingReason);
      contactUsForm.append('fundraisingAmountRange', fundraisingRange);
      contactUsForm.append('pitchDeck', pitchDeck);
      contactUsForm.append('companyDescription', companyDescription);
      contactUsForm.append('currentInvestor', currentInvestor);
      contactUsForm.append('yearsOfExperience', experience);
      contactUsForm.append('fundsManaged', fundsManaged);
      contactUsForm.append('fundManagementPurpose', purpose);
      contactUsForm.append('interestOrExpertise', expertise);
      contactUsForm.append('arrangementType', arrange);
      contactUsForm.append('preferredLanguage', preferedLanguage);

      if (credentials.length !== 0) {
        contactUsForm.append('credentials', JSON.stringify(credentials));
      }

      return await api<ContactUsResponse>(
        axios.post('/contact-us', contactUsForm, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }),
      );
    },
    options,
  );
};
