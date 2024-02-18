import AppError from '../../errors/appError';
import catchAsync from '../../utils/catchAsync';
import { polishServices } from './polishService.service';

// add polish service to db
const addPolishServiceToDB = catchAsync(async (req, res) => {
  const payload = req.body;
  const user = req.user;

  const result = await polishServices.addPolishServiceToDB(payload, user);

  res.status(200).json({
    success: true,
    message: 'Polish Request submitted successfully',
    data: result,
  });
});

// get all polish services from db
const getAllPolishServicesFromDB = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await polishServices.getAllPolishServicesFromDB(user);
  if (!result || result.length === 0) {
    throw new AppError(404, 'No services found');
  }
  res.status(200).json({
    success: true,
    message: 'Polish Services fetched successfully',
    data: result,
  });
});

// update polish services
const updatePolishService = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const payload = req.body;
  const result = await polishServices.updatePolishService(productId, payload);

  res.status(200).json({
    success: true,
    message: 'Polish Service updated successfully',
    data: result,
  });
});

// delete polish service
const deletePolishService = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  await polishServices.deletePolishService(productId);

  res.status(200).json({
    success: true,
    message: 'Service deleted successfully',
  });
});

export const polishServiceController = {
  addPolishServiceToDB,
  getAllPolishServicesFromDB,
  updatePolishService,
  deletePolishService,
};
