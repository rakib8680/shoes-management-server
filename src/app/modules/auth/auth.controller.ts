import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';

const registerUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await AuthServices.registerUser(user);

  res.status(200).json({
    status: 'success',
    message: 'user registered successfully',
    data: result,
  });
});

export const AuthControllers = {
  registerUser,
};
