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

router.get(
  '/polish-services',
  auth(USER_ROLE.seller, USER_ROLE.buyer),
  polishServiceController.getAllPolishServicesFromDB,
);

router.patch(
  '/update-polish/:productId',
  auth(USER_ROLE.seller),
  polishServiceController.updatePolishService,
);

router.delete(
  '/delete-service/:productId',
  auth(USER_ROLE.seller),
  polishServiceController.deletePolishService,
);

export const PolishServiceRoutes = router;
