import { Customer } from './customer';
import { PaymentMethod } from './payment';
import { Product } from './product';
import { Vehicle } from './vehicle';

export enum ReservationStatus {
  CREATED = 'CREATED',
  CANCELLED = 'CANCELLED',
  CONFIRMED = 'CONFIRMED',
  DEFERRED = 'DEFERRED',
  COMPLETED = 'COMPLETED',
}

export interface Reservation {
  serverId: number;
  customerId: number;
  status: ReservationStatus;
  reservedAt: string;
  requirements: string;
  products: Product[];
  paymentMethod: PaymentMethod;
}

export interface ReservationDetail extends Omit<Reservation, 'customerId'> {
  id: number;
  customer: Customer;
  vehicle: Vehicle;
}
