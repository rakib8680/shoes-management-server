import httpStatus from 'http-status';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/auth/auth.interface';

const auth = (...roles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    // check if the token exists
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'you are not authorized');
    }

    // checking if the given token is valid
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (err) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    const { role } = decoded;

    // check if the role is valid
    if (roles && !roles.includes(role)) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        'You are not authorized',
      );
    }

    // set user info in req object
    req.user = decoded;

    // console.log(req.user);

    next();
  });
};

export default auth;
