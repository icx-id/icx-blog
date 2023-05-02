export interface User {
  id: string;
  email: string;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  emailVerified: boolean;
  type: string;
  totalInvestment: string;
  icxConnectEligible: boolean;
  identity: {
    fullName: string;
  };
  investorProfile: string;
}
