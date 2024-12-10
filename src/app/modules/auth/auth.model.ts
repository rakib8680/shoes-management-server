/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { USER_ROLE } from './auth.constant';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: [USER_ROLE.buyer, USER_ROLE.seller],
    default: USER_ROLE.buyer,
  },
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

// hash password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<TUser>('User', userSchema);
