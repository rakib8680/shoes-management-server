import { Router } from "express";
import { productControllers } from "./product.controller";



const router = Router();


router.post('/add-shoes', productControllers.addShoes);



export const ProductRoutes = router;