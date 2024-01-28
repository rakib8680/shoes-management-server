import { Router } from 'express';
import { productControllers } from './product.controller';
import auth from '../../middlewares/auth';

const router = Router();
router.get('/all-shoes', auth(), productControllers.getAllShoes);
router.post('/add-shoes', auth(), productControllers.addShoes);
router.get('/:id', auth(), productControllers.getSingleShoe);
router.delete('/delete-shoe/:id', auth(), productControllers.deleteSingleShoe);
router.patch('/update-shoe/:id', auth(), productControllers.updateShoe);
router.patch('/sell-shoes/:id', auth(), productControllers.sellShoes);

export const ProductRoutes = router;
