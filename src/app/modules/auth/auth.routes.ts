import { Router } from 'express';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post('/register-user', AuthControllers.registerUser);

export const AuthRoutes = router;
