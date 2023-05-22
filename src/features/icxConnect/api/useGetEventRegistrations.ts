import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { EventRegistration } from '../types';
import { useStore } from '~/stores';

export const useGetEventRegistrationsQuery = (
  options?: UseQueryOptions<unknown, unknown, EventRegistration[], string[]>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['event-registrations'],
    async () => {
      const event = await api<EventRegistration>(axiosWithToken.get(`event-registrations`));

      return event;
    },
    options,
  );
};

export const useGetEventRegistrationQuery = (
  eventId: string,
  options?: UseQueryOptions<unknown, unknown, EventRegistration[], string[]>,
) => {
  const { axiosWithToken, api } = useApiClient();
  const { accessToken } = useStore();

  return useQuery(
    ['event-registrations', eventId],
    async () => {
      if (!accessToken) {
        return null;
      }

      const event = await api<EventRegistration>(
        axiosWithToken.get(`event-registrations/${eventId}`),
      );

      return event;
    },
    options,
  );
};
