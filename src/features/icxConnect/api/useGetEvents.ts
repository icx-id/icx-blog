import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { SimplifiedEvent, EventScheduleType } from '../types';
import { EventAccess } from '~/features/event';

interface EventQueries extends PaginationQueries {
  type?: EventScheduleType;
  access?: EventAccess;
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
