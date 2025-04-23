import { Customer } from './customer';
import { Product } from './product';
import { Vehicle } from './vehicle';

export interface Reservation {
  serverId: number;
  customerId: number;
  status: 'CREATED';
  reservedAt: string;
  requirements: string;
  products: Product[];
  paymentMethod: 'VBANK';
}

export interface ReservationDetail extends Omit<Reservation, 'customerId'> {
  id: number;
  customer: Customer;
  vehicle: Vehicle;
}
