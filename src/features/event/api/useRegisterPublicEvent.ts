import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { PublicEventRegistration } from '../types';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useRegisterPublicEventErrors = {
  NOT_YET_OPEN: 'registration is not yet open',
  REGISTRATION_CLOSED: 'registration has been closed',
  QUOTA_NOT_AVALABLE: 'quota is no longer available',
  ALREADY_REGISTERED: 'this guest has already been registered to this event',
};

interface RegisterPublicEventArgs {
  email: string;
  name: string;
  phoneNumber: string;
}

export const useRegisterPublicEvent = (
  eventId: string,
  options?: UseMutationOptions<PublicEventRegistration, unknown, RegisterPublicEventArgs>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useMutation(
    async ({ email, name, phoneNumber }: RegisterPublicEventArgs) => {
      let payload: RegisterPublicEventArgs = {
        email,
        name,
        phoneNumber,
      };

      const publicEventRegistration = await api<PublicEventRegistration>(
        axiosWithToken.post(`public-event-registrations/${eventId}`, payload),
      );
      return publicEventRegistration;
    },
    { ...options },
  );
};
