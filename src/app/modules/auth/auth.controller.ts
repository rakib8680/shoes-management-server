import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';

// register new user
const registerUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await AuthServices.registerUser(user);

  res.status(200).json({
    status: 'success',
    message: 'user registered successfully',
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req, res) => {
  const loginInfo = req.body;
  const result = await AuthServices.loginUser(loginInfo);

  res.status(200).json({
    status: 'success',
    message: 'user logged in successfully',
    data: result,
  });
});

export const AuthControllers = {
  registerUser,
  loginUser
};
