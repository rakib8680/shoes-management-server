import mongoose from 'mongoose';
import { TErrorResponse } from '../types/TErrorResponse';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TErrorResponse => {
  const regex = /"(.*?)"/;
  const match = err?.message.match(regex);
  const extractedMessage = match
    ? `${match[1]} is not a valid id`
    : 'Invalid Id';

  return {
    success: false,
    message: 'Invalid Id',
    errorMessage: extractedMessage,
  };
};
