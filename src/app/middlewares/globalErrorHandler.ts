/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { TErrorResponse } from '../types/TErrorResponse';
import AppError from '../errors/appError';
import { handleZodError } from '../errors/handleZodErrors';
import { handleValidationError } from '../errors/handleValidationError';
import { ZodError } from 'zod';
import { handleCastError } from '../errors/handleCastError';
import { handleDuplicateKeyError } from '../errors/handleDuplicateKeyError';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let errorResponse: TErrorResponse = {
    success: false,
    message: 'Error',
    errorMessage: 'Something Went Wrong',
  };

  if (err instanceof ZodError) {
    errorResponse = handleZodError(err);
  } else if (err?.name === 'ValidationError') {
    errorResponse = handleValidationError(err);
  } else if (err?.name === 'CastError') {
    errorResponse = handleCastError(err);
  } else if (err?.code === 11000) {
    errorResponse = handleDuplicateKeyError(err);
  } else if (err?.name === 'JsonWebTokenError') {
    errorResponse = {
      success: false,
      message: 'Unauthorized Access',
      errorMessage:
        'You do not have the necessary permissions to access this resource.',
    };
  } else if (err?.name === 'TokenExpiredError') {
    errorResponse = {
      success: false,
      message: 'Unauthorized Access',
      errorMessage:
        'You do not have the necessary permissions to access this resource.',
    };
  } else if (err?.message === 'You are not authorized !') {
    errorResponse = {
      success: false,
      message: 'Unauthorized Access',
      errorMessage:
        'You do not have the necessary permissions to access this resource.',
    };
  } else if (err instanceof AppError) {
    errorResponse = {
      success: false,
      message: 'Validation Error',
      errorMessage: err.message,
    };
  } else if (err instanceof Error) {
    errorResponse = {
      success: false,
      message: 'Validation Error',
      errorMessage: err.message,
    };
  }

  // send ultimate response
  return res.status(err.statusCode || 500).json({
    success: errorResponse.success,
    message: errorResponse.message,
    errorMessage: errorResponse.errorMessage,
  });
};
