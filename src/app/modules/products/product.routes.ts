import { Router } from "express";
import { productControllers } from "./product.controller";



const router = Router();

router.get('/all-shoes', productControllers.getAllShoes)
router.post('/add-shoes', productControllers.addShoes);



export const ProductRoutes = router;