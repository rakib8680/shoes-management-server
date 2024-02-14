import catchAsync from '../../utils/catchAsync';
import { polishServices } from './polishService.service';

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

export const polishServiceController = {
  addPolishServiceToDB,
};
