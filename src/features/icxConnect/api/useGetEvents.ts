import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { SimplifiedEvent, EventScheduleType } from '../types';

interface EventQueries extends PaginationQueries {
  type?: EventScheduleType;
}

export const useGetEventsQuery = (queries?: EventQueries) => {
  const { axios, api } = useApiClient();

  return useQuery(['events', queries], async () => {
    const response = await api<PageableResponse<SimplifiedEvent>>(
      axios.get('events', { params: queries }),
    );

    return response;
  });
};
