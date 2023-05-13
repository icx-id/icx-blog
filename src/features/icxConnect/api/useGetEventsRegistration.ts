import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { EventRegistration } from '../types';

export const useGetEventRegistrationQuery = (
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
