import { Router } from 'express';
import { productControllers } from './product.controller';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/all-shoes',auth(), productControllers.getAllShoes);
router.post('/add-shoes', productControllers.addShoes);
router.delete('/delete-shoe/:id', productControllers.deleteSingleShoe);
router.patch('/update-shoe/:id', productControllers.updateShoe);
router.patch('/sell-shoes/:id', productControllers.sellShoes);

export const ProductRoutes = router;
