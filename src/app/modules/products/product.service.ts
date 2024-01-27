import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { TSalesHistory } from '../history/history.interface';
import { SalesHistory } from '../history/history.model';

type TQuery = {
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  brand?: string;
};

type TFilter = {
  price?: {
    $gte?: number;
    $lte?: number;
  };
  brand?: string;
};

// get all shoes from database
const getAllShoes = async (query: TQuery) => {
  const { minPrice, maxPrice, sort, brand } = query;

  // filter by price
  let filter: TFilter = {};
  if (minPrice || maxPrice) {
    filter = {
      price: {
        ...(minPrice && { $gte: minPrice }),
        ...(maxPrice && { $lte: maxPrice }),
      },
    };
  }

  if (brand) {
    filter.brand = brand;
  }

  let queryBuilder = Product.find(filter);
  if (sort) {
    const sortOption = sort === 'latest' ? '-createdAt' : 'createdAt';
    queryBuilder = queryBuilder.sort(sortOption);
  }

  const result = await await queryBuilder;

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
const sellShoes = async (
  id: string,
  sellingData: { quantity: number; buyerName: string },
) => {
  const { quantity, buyerName } = sellingData;

  // find the product
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  // check if the quantity is available
  if (product?.quantity < quantity) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Not enough quantity');
  }

  // update the quantity
  product.quantity -= quantity;

  // delete product if quantity is 0
  if (product?.quantity === 0) {
    await Product.findByIdAndDelete(id);
    return;
  }

  // update the product
  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    new: true,
    runValidators: true,
  });

  const sellingInfo: TSalesHistory = {
    productName: product.name,
    quantity: quantity,
    buyerName: buyerName,
    totalPrice: product.price * quantity,
    dateOfSelling: new Date(),
  };

  // save selling history into db
  if (updatedProduct) {
    await SalesHistory.create(sellingInfo);
  }

  return updatedProduct;
};

export const productServices = {
  addShoes,
  getAllShoes,
  deleteSingleShoe,
  updateShoe,
  sellShoes,
};
