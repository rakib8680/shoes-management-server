import { Router } from 'express';
import { historyControllers } from './history.controller';

const router = Router();

router.get('/', historyControllers.getSalesHistory);

export const HistoryRoutes = router;
