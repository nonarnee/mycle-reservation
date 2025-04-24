import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import api from '@/lib/api';
import { ReservationDetail } from '@/types/reservation';

interface ReservationParams {
  id: string;
}

type ReservationQueryOptions = UseQueryOptions<ReservationDetail, AxiosError>;

const fetchReservation = async (id: string) => {
  const response = await api.get<ReservationDetail>(`/reservations/${id}`);
  return response.data;
};

export default function useReservation(
  params: ReservationParams,
  options?: ReservationQueryOptions,
) {
  return useQuery({
    queryKey: ['reservation', params.id],
    queryFn: () => fetchReservation(params.id),
    enabled: !!params.id,
    ...options,
  });
}
