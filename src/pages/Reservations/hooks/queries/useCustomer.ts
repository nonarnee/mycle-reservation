import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Customer } from '@/types/customer';
import request from '@/lib/request';

interface CustomerParams {
  customerId: number;
}

type CustomerQueryOptions = UseQueryOptions<Customer, AxiosError>;

const fetchCustomer = async (customerId: number) => {
  const response = await request.get<Customer>(`/customers/${customerId}`);
  return response.data;
};

export default function useCustomer(params: CustomerParams, options?: CustomerQueryOptions) {
  return useQuery({
    queryKey: ['customer', params.customerId],
    queryFn: () => fetchCustomer(params.customerId),
    enabled: !!params.customerId,
    ...options,
  });
}
