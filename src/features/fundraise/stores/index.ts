import { StateCreator, create } from 'zustand';
import { CompanyInformation, PersonalInformation } from '../types';

type FundraiseSlice = {
  identityPhoto: File | null;
  pitchdeckFile: File | null;
  personalInformation: PersonalInformation | null;
  companyInformation: CompanyInformation | null;
  onIdentityPickerSuccess: ({ identityPhoto }: { identityPhoto: File | null }) => void;
  onPitchdeckPickerSuccess: ({ pitchdeckFile }: { pitchdeckFile: File | null }) => void;
  onPersonalInformationSuccess: ({
    personalInformation,
  }: {
    personalInformation: PersonalInformation | null;
  }) => void;
  onCompanyInformationSuccess: ({
    companyInformation,
  }: {
    companyInformation: CompanyInformation | null;
  }) => void;
};

const createFundraiseSlice: StateCreator<FundraiseSlice, [], [], FundraiseSlice> = set => ({
  identityPhoto: null,
  pitchdeckFile: null,
  personalInformation: null,
  companyInformation: null,
  onCompanyInformationSuccess: payload => {
    set(() => ({ ...payload }));
  },
  onPersonalInformationSuccess: payload => {
    set(() => ({ ...payload }));
  },
  onIdentityPickerSuccess: payload => {
    set(() => ({ ...payload }));
  },
  onPitchdeckPickerSuccess: payload => {
    set(() => ({ ...payload }));
  },
});

export type IFundraiseStore = FundraiseSlice;

export const useFundraiseStore = create<IFundraiseStore>()((...a) => ({
  ...createFundraiseSlice(...a),
}));
