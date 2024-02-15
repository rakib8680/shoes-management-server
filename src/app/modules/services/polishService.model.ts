import { Schema, model } from 'mongoose';
import { TPolishService } from './polishService.interface';

const PolishServiceSchema = new Schema<TPolishService>(
  {
    productName: {
      type: String,
      required: [true, 'Product name is required'],
    },
    serviceId: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'ongoing', 'completed'],
      default: 'pending',
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
    customerEmail: {
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
