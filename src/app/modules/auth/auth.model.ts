import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';

const userSchema = new Schema<TUser>({
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    trim: true,
  },
});




export const User = model<TUser>('User', userSchema);
