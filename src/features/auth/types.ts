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

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  status?: string;
  user: User;
}

export interface VerificationRequest {
  status: string;
  verificationToken: string;
}
