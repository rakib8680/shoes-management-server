import { JwtPayload } from 'jsonwebtoken';
import { TPolishService } from './polishService.interface';
import { polishService } from './polishService.model';
import { generateRandomId } from '../../utils/generateRandomId';

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

export const polishServices = {
  addPolishServiceToDB,
};
