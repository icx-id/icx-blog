import { navigate } from 'gatsby';
import { useEffect } from 'react';
import { KycStatus, KycType, useGetKycStatusQuery } from '~/features/kyc';
import { useStore } from '~/stores';

export const useGuestRoute = (
  callback = () => {
    navigate('/');
  },
) => {
  const { user } = useStore();

  useEffect(() => {
    if (user) {
      callback();
    }
  }, [user]);
};

export const useAuthRoute = (
  callback = () => {
    navigate('/');
  },
) => {
  const { user } = useStore();

  useEffect(() => {
    if (!user) {
      callback();
    }
  }, [user]);
};

export const useKycRoute = (
  callback = () => {
    navigate('/');
  },
) => {
  const { accessToken } = useStore();

  const { data: kycStatus } = useGetKycStatusQuery({
    enabled: !!accessToken,
  });

  const identityIsNotEmpty = !!kycStatus?.some(
    kyc => kyc.type === KycType.IDENTITY && kyc.status !== KycStatus.EMPTY,
  );

  useEffect(() => {
    if (identityIsNotEmpty) {
      callback();
    }
  }, [identityIsNotEmpty]);
};
