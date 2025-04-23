import { Product } from '@/types/product';

export const getTotalPrice = (products: Product[]) => {
  return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
};
