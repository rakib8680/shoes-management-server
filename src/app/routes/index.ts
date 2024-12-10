import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { ProductRoutes } from '../modules/products/product.routes';
import { HistoryRoutes } from '../modules/history/history.routes';
import { PolishServiceRoutes } from '../modules/services/polishService.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/services',
    route: PolishServiceRoutes,
  },
  {
    path: '/sales-history',
    route: HistoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
