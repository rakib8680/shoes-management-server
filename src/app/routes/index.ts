import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { ProductRoutes } from '../modules/products/product.routes';
import { HistoryRoutes } from '../modules/history/history.routes';

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
    path: '/sales-history',
    route: HistoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
