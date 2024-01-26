import { TProduct } from './product.interface';
import { Product } from './product.model';



// get all shoes from database
const getAllShoes = async()=>{
    const result = await Product.find();
    return result;
}

// insert shoe data into database
const addShoes = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const productServices = {
  addShoes,
    getAllShoes
};
