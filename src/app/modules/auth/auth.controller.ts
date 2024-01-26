import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';

// register new user
const registerUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await AuthServices.registerUser(user);

  res.status(200).json({
    success: true,
    message: 'user registered successfully',
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req, res) => {
  const loginInfo = req.body;
  const result = await AuthServices.loginUser(loginInfo);

  res.status(200).json({
    success: true,
    message: 'user logged in successfully',
    accessToken: result.accessToken,
  });
});

export const AuthControllers = {
  registerUser,
  loginUser,
};
