import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { Event } from '../types';

export const useGetEvent = (
  id: string,
  options?: UseQueryOptions<unknown, unknown, Event, string[]>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['event', id],
    async () => {
      const event = await api<Event>(axiosWithToken.get(`events/${id}`));
      return event;
    },
    options,
  );
};
