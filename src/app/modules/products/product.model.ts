import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
    },
    brand: {
      type: String,
    },
    model: {
      type: String,
    },
    style: {
      type: String,
    },
    size: {
      type: [Number],
    },
    color: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
