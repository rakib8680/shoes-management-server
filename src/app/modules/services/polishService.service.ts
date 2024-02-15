import { JwtPayload } from 'jsonwebtoken';
import { TPolishService } from './polishService.interface';
import { polishService } from './polishService.model';
import { generateRandomId } from '../../utils/generateRandomId';

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
const getAllPolishServicesFromDB = async()=>{
  const result = await polishService.find();
  return result;
}

export const polishServices = {
  addPolishServiceToDB,
  getAllPolishServicesFromDB
};
