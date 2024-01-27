import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TUser } from './auth.interface';
import { User } from './auth.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

// register user
const registerUser = async (payload: TUser) => {
  // check if the user exists
  const isUserExists = await User.findOne({ email: payload.email });
  if (isUserExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'user already exists');
  }

  const result = await User.create(payload);
  const user = result.toJSON() as Partial<TUser>;
  delete user.password;
  return user;
};

// login user
const loginUser = async (payload: TUser) => {
  // check if the user exists
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  // check if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, 'incorrect password');
  }

  //   create jwt token and send to client
  const jwtPayload = {
    id: user._id,
    email: user.email,
  };

  //   create access token
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '1d',
  });

  return {
    accessToken,
  };
};

export const AuthServices = {
  registerUser,
  loginUser,
};
