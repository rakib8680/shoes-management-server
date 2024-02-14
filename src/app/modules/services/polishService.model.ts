import { Schema, model } from 'mongoose';
import { TPolishService } from './polishService.interface';

const PolishServiceSchema = new Schema<TPolishService>(
  {
    productName: {
      type: String,
      required: [true, 'Product name is required'],
    },
    id: {
      type: String,
    },
    type: {
      type: String,
      required: [true, 'Polishing type is required'],
    },
    level: {
      type: String,
      required: [true, 'Polishing level is required'],
    },
    instructions: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const polishService = model<TPolishService>(
  'PolishService',
  PolishServiceSchema,
);
