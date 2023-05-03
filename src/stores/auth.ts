import { StateCreator } from 'zustand';
import { User } from '~/features/auth';

export type AuthSlice = {
  accessToken: string | null;
  refreshToken: string | null;
  verificationToken: string | null;
  user: User | null;
  onAuthSuccess: ({
    accessToken,
    refreshToken,
    user,
  }: {
    accessToken: string;
    refreshToken: string;
    user: User;
  }) => void;
  replaceAccessToken: ({ accessToken }: { accessToken: string }) => void;
  onLogout: () => void;
  onRequestVerification: ({ verificationToken }: { verificationToken: string }) => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = set => ({
  accessToken: null,
  refreshToken: null,
  verificationToken: null,
  accessTokenExpiry: null,
  refreshTokenExpiry: null,
  user: null,
  onAuthSuccess: payload => {
    set(() => ({ ...payload }));
  },
  replaceAccessToken: payload => {
    set(() => ({ ...payload }));
  },
  onLogout: () => {
    set(() => ({
      accessToken: null,
      refreshToken: null,
      accessTokenExpiry: null,
      refreshTokenExpiry: null,
      user: null,
    }));
  },
  onRequestVerification: payload => {
    set(() => ({ ...payload }));
  },
});
