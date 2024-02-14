import { Router } from 'express';
import { productControllers } from './product.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = Router();
router.get(
  '/all-shoes',
  auth(USER_ROLE.buyer, USER_ROLE.seller),
  productControllers.getAllShoes,
);
router.post('/add-shoes', auth(USER_ROLE.seller), productControllers.addShoes);
router.get(
  '/:id',
  auth(USER_ROLE.buyer, USER_ROLE.seller),
  productControllers.getSingleShoe,
);
router.delete(
  '/delete-shoe/:id',
  auth(USER_ROLE.seller),
  productControllers.deleteSingleShoe,
);
router.patch(
  '/update-shoe/:id',
  auth(USER_ROLE.seller),
  productControllers.updateShoe,
);
router.patch(
  '/sell-shoes/:id',
  auth(USER_ROLE.seller),
  productControllers.sellShoes,
);

export const ProductRoutes = router;
