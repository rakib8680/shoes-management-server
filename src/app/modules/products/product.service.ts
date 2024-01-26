import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { TSalesHistory } from '../history/history.interface';

// get all shoes from database
const getAllShoes = async () => {
  const result = await Product.find();
  return result;
};

// insert shoe data into database
const addShoes = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// delete shoes from database
const deleteSingleShoe = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

// update shoe
const updateShoe = async (payload: Partial<TProduct>, id: string) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};


// sell shoes 


export const productServices = {
  addShoes,
  getAllShoes,
  deleteSingleShoe,
  updateShoe,
  sellShoes
};
