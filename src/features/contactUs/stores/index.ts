import { StateCreator, create } from 'zustand';
import {
  Identity,
  Investor,
  Fundraiser,
  FundManager,
  ContactUsSummary,
  Roles,
} from '../forms/contactUs';

type ContactUsSlice = {
  identity: Identity | null;
  userRole: Roles | null;
  investor: Investor | null;
  fundraiser: Fundraiser | null;
  fundManager: FundManager | null;
  pitchDeck: File | null;
  contactUsSummary: ContactUsSummary | null;
  onIdentitySuccess: (identity: Identity) => void;
  onInvestorSectionSuccess: (investor: Investor) => void;
  onPitchDeckInputSuccess: ({ pitchDeck }: { pitchDeck: File | null }) => void;
  onFundraiserSectionSuccess: (fundraising: Fundraiser) => void;
  onSummarySuccess: (sumamry: ContactUsSummary) => void;
  onRoleSelectionSuccess: (role: Roles) => void;
  onFundManagerSectionSuccess: (fundManager: FundManager) => void;
};

const createContactUsSlice: StateCreator<ContactUsSlice, [], [], ContactUsSlice> = set => ({
  identity: null,
  userRole: null,
  investor: null,
  fundraiser: null,
  fundManager: null,
  pitchDeck: null,
  contactUsSummary: null,
  onIdentitySuccess: payload => {
    set(() => ({ ...payload, identity: payload }));
  },
  onInvestorSectionSuccess: payload => {
    set(() => ({ ...payload, investor: payload }));
  },
  onFundraiserSectionSuccess: payload => {
    set(() => ({ ...payload, fundraiser: payload }));
  },
  onSummarySuccess: payload => {
    set(() => ({ ...payload, contactUsSummary: payload }));
  },
  onFundManagerSectionSuccess: payload => {
    set(() => ({ ...payload, fundManager: payload }));
  },
  onRoleSelectionSuccess: payload => {
    set(() => ({ userRole: payload }));
  },
  onPitchDeckInputSuccess: payload => {
    set(() => ({ ...payload }));
  },
});

export type IContactUsStore = ContactUsSlice;

export const useContactUsStore = create<IContactUsStore>()((...a) => ({
  ...createContactUsSlice(...a),
}));
