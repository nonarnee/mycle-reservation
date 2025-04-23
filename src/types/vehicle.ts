export enum FuelType {
  PREMIUM_GASOLINE = 'PREMIUM_GASOLINE',
  GASOLINE = 'GASOLINE',
  DIESEL = 'DIESEL',
  LPG = 'LPG',
  ELECTRICITY = 'ELECTRICITY',
}

export enum FuelTypeLabel {
  PREMIUM_GASOLINE = '고급 휘발유',
  GASOLINE = '일반 휘발유',
  DIESEL = '경유',
  LPG = 'LPG',
  ELECTRICITY = '전기',
}

export interface Vehicle {
  brand: string;
  model: string;
  number: string;
  fuelType: FuelType;
}
