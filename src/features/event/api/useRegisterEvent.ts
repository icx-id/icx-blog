import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { EventRegistration } from '../types';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useRegisterEventErrors = {
  NOT_YET_OPEN: 'registration is not yet open',
  REGISTRATION_CLOSED: 'registration has been closed',
  QUOTA_NOT_AVALABLE: 'quota is no longer available',
  ACCESS_TOKEN_EXPIRED: 'access token is expired',
  ALREADY_REGISTERED: 'user has already been registered to this event',
};

export const useRegisterEvent = (
  eventId: string,
  options?: UseMutationOptions<EventRegistration, unknown>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useMutation(
    async () => {
      const eventRegistration = await api<EventRegistration>(
        axiosWithToken.post(`event-registrations/${eventId}`),
      );
      return eventRegistration;
    },
    { ...options },
  );
};
