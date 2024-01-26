import { TProduct } from './product.interface';
import { Product } from './product.model';

const addShoes = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const productServices = {
  addShoes,
};
