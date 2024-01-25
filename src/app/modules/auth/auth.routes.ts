import { Router } from 'express';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post('/register-user', AuthControllers.registerUser);
router.post('/login-user', AuthControllers.loginUser);

export const AuthRoutes = router;
