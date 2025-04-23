import { Vehicle } from './vehicle';

export interface Customer {
  serverId: number;
  name: string;
  phone: string;
  vehicle: Vehicle;
  visitCount: number;
}

export type CustomerInfo = Pick<Customer, 'serverId' | 'name' | 'phone'>;
