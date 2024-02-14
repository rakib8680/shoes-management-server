import catchAsync from '../../utils/catchAsync';
import { polishServices } from './polishService.service';

const addPolishServiceToDB = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await polishServices.addPolishServiceToDB(payload);

  res.status(200).json({
    success: true,
    message: 'Polish Service submitted successfully',
    data: result,
  });
});

export const polishServiceController = {
  addPolishServiceToDB,
};
