import { Router } from 'express';
import { polishServiceController } from './polishService.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = Router();

router.post(
  '/request-polish',
  auth(USER_ROLE.buyer),
  polishServiceController.addPolishServiceToDB,
);


export const PolishServiceRoutes = router;