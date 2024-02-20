import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { TSalesHistory } from '../history/history.interface';
import { SalesHistory } from '../history/history.model';
import { generateRandomId } from '../../utils/generateRandomId';

type TQuery = {
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  brand?: string;
  model?: string;
  style?: string;
  color?: string;
  size?: number[];
};

type TFilter = {
  price?: {
    $gte?: number;
    $lte?: number;
  };
  brand?: string;
  model?: string;
  style?: string;
  color?: string;
  size?: { $in: number[] };
};

// get all shoes from database
const getAllShoes = async (query: TQuery) => {
  const { minPrice, maxPrice, sort, brand, model, style, color, size } = query;

  let filter: TFilter = {};

  // filter by price
  if (minPrice || maxPrice) {
    filter = {
      price: {
        ...(minPrice && { $gte: minPrice }),
        ...(maxPrice && { $lte: maxPrice }),
      },
    };
  }

  // filter by brand,model,style,color,size
  if (brand) {
    filter.brand = brand;
  }
  if (model) {
    filter.model = model;
  }
  if (style) {
    filter.style = style;
  }
  if (color) {
    filter.color = color;
  }
  if (size) {
    filter.size = { $in: size };
  }

  let queryBuilder = Product.find(filter);
  if (sort) {
    const sortOption = sort === 'Latest' ? '-createdAt' : 'createdAt';
    queryBuilder = queryBuilder.sort(sortOption);
  }

  const result = await queryBuilder;

  if (result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'No shoes found');
  }

  return result;
};

// get single shoe from database
const getSingleShoe = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// insert shoe data into database
const addShoes = async (payload: TProduct) => {
  const uniqueId = generateRandomId();
  const shoeData = {
    ...payload,
    uniqueId,
  };

  const result = await Product.create(shoeData);
  return result;
};

// delete shoes from database
const deleteSingleShoe = async (id: string) => {
  await Product.findByIdAndDelete(id);
  return null;
};
// Bulk-delete shoes from database
const deleteMultipleShoes = async (payload: { selectedShoes: string[] }) => {
  const selectedShoes = payload.selectedShoes;
  await Product.deleteMany({ _id: { $in: selectedShoes } });
  return null;
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

  // delete product if quantity is 0
  if (product?.quantity === 0) {
    await Product.findByIdAndDelete(id);
    return;
  }

  return updatedProduct;
};

// verify authentic shoe
const verifyAuthenticShoe = async (uniqueId: string) => {
  const shoe = await Product.findOne({ uniqueId });
  if (!shoe) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Product with this Unique Id');
  }

  if (!shoe.isAuthentic) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Your product is not authentic');
  }

  return shoe;
};

export const productServices = {
  addShoes,
  getAllShoes,
  deleteSingleShoe,
  deleteMultipleShoes,
  updateShoe,
  sellShoes,
  getSingleShoe,
  verifyAuthenticShoe,
};
