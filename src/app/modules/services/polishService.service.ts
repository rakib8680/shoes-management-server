import { JwtPayload } from 'jsonwebtoken';
import { TPolishService } from './polishService.interface';
import { polishService } from './polishService.model';
import { generateRandomId } from '../../utils/generateRandomId';
import AppError from '../../errors/appError';

// add polish service to db
const addPolishServiceToDB = async (
  payload: TPolishService,
  user: JwtPayload,
) => {
  const serviceId = generateRandomId();

  const polishServiceData = {
    ...payload,
    customerEmail: user?.email,
    serviceId,
  };

  const result = await polishService.create(polishServiceData);

  return result;
};

// get all polish services from db
const getAllPolishServicesFromDB = async () => {
  const result = await polishService.find();

  if (!result || result.length === 0) {
    throw new AppError(404, 'No services found');
  }

  return result;
};

// update polish services
const updatePolishService = async (
  productId: string,
  payload: Partial<TPolishService>,
) => {
  const result = await polishService.findByIdAndUpdate(productId, payload, {
    new: true,
  });

  return result;
};

// delete polish service
const deletePolishService = async (productId: string) => {
  const product = await polishService.findById(productId);
  if (!product) {
    throw new AppError(404, 'Service not found');
  }

  const result = await polishService.findByIdAndDelete(productId);

  return result;
};

export const polishServices = {
  addPolishServiceToDB,
  getAllPolishServicesFromDB,
  updatePolishService,
  deletePolishService,
};
