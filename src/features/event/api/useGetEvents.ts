import { useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { SimplifiedEvent, EventScheduleType } from '../types';

interface EventQueries extends PaginationQueries {
  type?: EventScheduleType;
}

export const useGetEvents = (queries?: EventQueries) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(['events', queries], async () => {
    const response = await api<PageableResponse<SimplifiedEvent>>(
      axiosWithToken.get('events', { params: queries }),
    );

    return response;
  });
};
