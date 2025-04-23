export enum FuelType {
  PREMIUM_GASOLINE = 'PREMIUM_GASOLINE',
  GASOLINE = 'GASOLINE',
  DIESEL = 'DIESEL',
  LPG = 'LPG',
  ELECTRICITY = 'ELECTRICITY',
}

export interface Vehicle {
  brand: string;
  model: string;
  number: string;
  fuelType: FuelType;
}
