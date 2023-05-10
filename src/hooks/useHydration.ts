import { useStore } from '~/stores';
import { useGetPinQuery } from '~/features/pin';
import { useZustandHydration } from './useZustandHydration';
import { useGetKycStatusQuery, KycStatus, KycType } from '~/features/kyc';
import { useCallback, useEffect, useState } from 'react';
import { useTimeout } from './useTimeout';
import { useGetVerificationQuery } from '~/features/auth';
import { navigate } from 'gatsby';

const SET = 'set';
const PHONE_NUMBER = 'phone-number';

export const useHydration = () => {
  const hydrated = useZustandHydration();
  const [loadEffectDone, setLoadEffectDone] = useState(false);

  const { accessToken } = useStore();
  const {
    data: verifications,
    isLoading: isLoadingGetVerification,
    isError: getVerificationError,
  } = useGetVerificationQuery({
    enabled: !!accessToken,
  });

  const {
    data: status,
    isLoading: isLoadingGetPin,
    isError: getPinError,
  } = useGetPinQuery({
    enabled: !!accessToken,
  });

  const {
    data: kycStatus,
    isLoading: isLoadingGetIdentity,
    isError: getKycStatusError,
  } = useGetKycStatusQuery({
    enabled: !!accessToken,
  });

  useTimeout(() => setLoadEffectDone(true), 2000);
  const isAuthenticated = !!accessToken;
  const hasPin = status === SET;
  const phoneNumberIsVerified = !!verifications?.some(
    verification => verification.type === PHONE_NUMBER && verification.verified,
  );
  const identityIsNotEmpty = !!kycStatus?.some(
    kyc => kyc.type === KycType.IDENTITY && kyc.status !== KycStatus.EMPTY,
  );

  const isLoading = isAuthenticated
    ? isLoadingGetPin || isLoadingGetVerification || isLoadingGetIdentity
    : !hydrated;

  const hasError =
    (!isLoadingGetPin && getPinError) ||
    (!isLoadingGetIdentity && getKycStatusError) ||
    (!isLoadingGetVerification && getVerificationError);

  useEffect(() => {
    if (!hasError && isAuthenticated && !isLoading) {
      if (!phoneNumberIsVerified) {
        navigate('/phone-number-verification');
      }
      if (!hasPin) {
        navigate('/create-pin');
      }
      if (!identityIsNotEmpty) {
        navigate('/kyc');
      }
    }
    // navigate('/');
  }, [hasPin, identityIsNotEmpty, isAuthenticated, isLoading, phoneNumberIsVerified, hasError]);

  if (isLoading || !loadEffectDone) {
    return { initialRoute: undefined, hydrated: false, authenticated: undefined };
  }

  return {
    hydrated,
    authenticated: hasError ? false : isAuthenticated,
  };
};
