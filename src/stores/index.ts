import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AuthSlice, createAuthSlice } from './auth';

export type IGlobalStore = AuthSlice;

export const STORAGE_KEY = 'app-storage';

export const useStore = create<
  IGlobalStore,
  [['zustand/persist', Pick<IGlobalStore, 'accessToken' | 'refreshToken'>]]
>(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
      }),
    },
  ),
);
