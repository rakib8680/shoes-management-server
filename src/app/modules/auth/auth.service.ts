import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TUser } from './auth.interface';
import { User } from './auth.model';
import bcrypt from 'bcrypt';

// register user
const registerUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};



export const AuthServices = {
  registerUser,
  loginUser,
};
