import { QueryKey, useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import request from '@/lib/request';
import { PaginatedResponse, PaginationParams } from '@/types/pagination';
import { Reservation } from '@/types/reservation';

interface ReservationsParams extends PaginationParams {
  date: string;
}

type UseInfiniteReservationsOptions = UseInfiniteQueryOptions<
  PaginatedResponse<Reservation[]>,
  AxiosError,
  Reservation[],
  PaginatedResponse<Reservation[]>,
  QueryKey,
  number
>;

const fetchReservations = async (params: ReservationsParams) => {
  const response = await request.get<PaginatedResponse<Reservation[]>>('/reservations', {
    params,
  });
  return response.data;
};

export default function useInfiniteReservations(
  params: ReservationsParams,
  options?: UseInfiniteReservationsOptions,
) {
  return useInfiniteQuery({
    queryKey: ['reservations', params],
    queryFn: ({ pageParam = 1 }) => fetchReservations({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length + 1 : undefined),
    initialPageParam: 1,
    ...options,
  });
}
