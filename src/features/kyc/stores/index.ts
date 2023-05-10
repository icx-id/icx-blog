import { StateCreator, create } from 'zustand';
import {
  AddressIdentity,
  AddressDomicile,
  IdentityInformation,
  OCRAddressIdentity,
} from '../types';

type KycSlice = {
  identityPhoto: File | null;
  identitySelfie: File | null;
  addressIdentity: AddressIdentity | null;
  addressDomicile: AddressDomicile | null;
  identityInformation: IdentityInformation | null;
  onIdentityPickerSuccess: ({ identityPhoto }: { identityPhoto: File | null }) => void;
  onSelfiePickerSuccess: ({ identitySelfie }: { identitySelfie: File | null }) => void;
  onAddressIdentityOcrSuccess: ({
    addressIdentity,
  }: {
    addressIdentity: OCRAddressIdentity;
  }) => void;
  onAddressIdentitySuccess: ({
    addressIdentity,
  }: {
    addressIdentity: AddressIdentity | null;
  }) => void;
  onAddressDomicileSuccess: ({
    addressDomicile,
  }: {
    addressDomicile: AddressDomicile | null;
  }) => void;
  onIdentitySuccess: (identityInformation: IdentityInformation) => void;
};

const createKycSlice: StateCreator<KycSlice, [], [], KycSlice> = set => ({
  identityPhoto: null,
  identitySelfie: null,
  addressIdentity: null,
  addressDomicile: null,
  identityInformation: null,
  onIdentityPickerSuccess: payload => {
    set(() => ({ ...payload }));
  },
  onSelfiePickerSuccess: payload => {
    set(() => ({ ...payload }));
  },
  onAddressIdentityOcrSuccess: payload => {
    set(() => ({
      addressIdentity: {
        ...payload.addressIdentity,
        identityPostalCode: '',
      },
    }));
  },
  onAddressIdentitySuccess: payload => {
    set(() => ({ ...payload }));
  },
  onAddressDomicileSuccess: payload => {
    set(() => ({ ...payload }));
  },
  onIdentitySuccess: payload => {
    set(() => ({ ...payload, identityInformation: payload }));
  },
});

export type IKycStore = KycSlice;

export const useKycStore = create<IKycStore>()((...a) => ({
  ...createKycSlice(...a),
}));
