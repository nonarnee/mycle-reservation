import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import request from '@/lib/request';
import { PaginatedResponse, PaginationParams } from '@/types/pagination';
import { Reservation } from '@/types/reservation';

interface ReservationsParams extends PaginationParams {
  date: string;
}

type ReservationsData = InfiniteData<PaginatedResponse<Reservation[]>> & {
  reservations: Reservation[];
};

type UseInfiniteReservationsOptions = UseInfiniteQueryOptions<
  PaginatedResponse<Reservation[]>,
  AxiosError,
  ReservationsData,
  PaginatedResponse<Reservation[]>,
  QueryKey,
  number
>;

const fetchReservations = async (params: ReservationsParams) => {
  const response = await request.get<PaginatedResponse<Reservation[]>>('/reservations', {
    params,
  });

  if (response.status === 204) {
    return {
      data: [],
      hasNext: false,
      hasPrevious: false,
      totalPages: 0,
    } as PaginatedResponse<Reservation[]>;
  }

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
    select: (data): ReservationsData => {
      const reservations = data.pages.flatMap((page) => page.data).flat();

      return {
        ...data,
        reservations,
      };
    },
    ...options,
  });
}
